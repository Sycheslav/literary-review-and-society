// Серверная часть раздела «Экономика»: разбор тарифного снимка OpenRouter
// и сведения о затратах из корпуса. Расчёты — в economics-core.ts.
import snapshot from "@/data/economics/snapshot.json";
import { getDetail, getWorks } from "@/lib/data";
import { calculate, defaultScenario, type Endpoint, type ModelInfo, type Price } from "@/lib/economics-core";
import { auditById, evidenceById } from "@/lib/economics-evidence";

export const snapshotDate: string = snapshot.capturedAt;
export const snapshotSource: string = snapshot.source;

/** Модели для контроля качества: дороже бюджетных примерно на порядок. */
const CONTROL_MODELS = new Set(["openai/gpt-6.1-sol", "anthropic/claude-sonnet-5.5"]);
/** Провайдер-разработчик модели: его цена считается опорной при равенстве. */
const FIRST_PARTY: Record<string, string> = {
  openai: "openai",
  anthropic: "anthropic",
  "z-ai": "z-ai",
  xiaomi: "xiaomi",
  minimax: "minimax",
  qwen: "alibaba",
  google: "google-ai-studio",
  deepseek: "deepseek",
};

type RawPrice = Record<string, unknown>;
type RawEndpoint = {
  name: string;
  provider_name: string;
  tag: string;
  service_tier: string | null;
  quantization: string | null;
  context_length: number;
  max_completion_tokens: number | null;
  status: number;
  uptime_last_30m: number | null;
  pricing: RawPrice & { overrides?: RawPrice[] };
};

/** Цена за токен из API → доллары за 1 млн токенов. */
const perMillion = (v: unknown) =>
  v === null || v === undefined || v === "" || !Number.isFinite(Number(v)) ? null : Math.round(Number(v) * 1e6 * 1e6) / 1e6;

const toPrice = (p: RawPrice): Price => ({
  input: perMillion(p.prompt),
  output: perMillion(p.completion),
  cacheRead: perMillion(p.input_cache_read),
  cacheWrite: perMillion(p.input_cache_write),
});

function toEndpoint(model: string, e: RawEndpoint): Endpoint {
  const overrides = e.pricing.overrides ?? [];
  return {
    key: `${model}::${e.tag}`,
    model,
    provider: e.provider_name,
    tag: e.tag,
    tier: e.service_tier ?? "standard",
    quantization: e.quantization && e.quantization !== "unknown" ? e.quantization : null,
    context: e.context_length,
    maxOutput: e.max_completion_tokens,
    status: e.status,
    uptime: e.uptime_last_30m,
    price: toPrice(e.pricing),
    // Порог по длине запроса и окна по времени суток — разные виды переопределений.
    thresholds: overrides
      .filter((o) => typeof o.min_prompt_tokens === "number")
      .map((o) => ({ minPrompt: o.min_prompt_tokens as number, price: toPrice(o) })),
    timeWindows: overrides
      .filter((o) => typeof o.utc_start === "number")
      .map((o) => ({ utcStart: o.utc_start as number, utcEnd: o.utc_end as number, price: toPrice(o) })),
  };
}

type RawResponse = { data: { name: string; endpoints: RawEndpoint[] } };

export const models: ModelInfo[] = Object.entries(snapshot.responses as unknown as Record<string, RawResponse>).map(([id, raw]) => {
  const endpoints = raw.data.endpoints.map((e) => toEndpoint(id, e));
  const [vendor, name] = raw.data.name.includes(": ") ? raw.data.name.split(": ") : ["", raw.data.name];
  const healthy = endpoints.filter((e) => e.status === 0 && e.price.input !== null && e.price.output !== null);
  const standard = healthy.filter((e) => e.tier === "standard");
  const pool = standard.length ? standard : healthy.length ? healthy : endpoints;

  const counts = new Map<string, Endpoint[]>();
  for (const e of pool) {
    const k = `${e.price.input}/${e.price.output}`;
    counts.set(k, [...(counts.get(k) ?? []), e]);
  }
  const modeGroup = [...counts.values()].sort((a, b) => b.length - a.length || priceSum(a[0]) - priceSum(b[0]))[0];
  const fp = FIRST_PARTY[id.split("/")[0]];
  const isFirstParty = (e: Endpoint) => e.tag === fp || e.tag.startsWith(fp + "/");
  // Опорная цена — у разработчика модели; если его нет среди провайдеров — самая распространённая.
  const reference = pool.find(isFirstParty) ?? modeGroup[0];
  const cheapest = [...pool].sort((a, b) => priceSum(a) - priceSum(b))[0];

  return {
    id,
    vendor,
    name,
    role: CONTROL_MODELS.has(id) ? "control" : "budget",
    endpoints: endpoints.sort((a, b) => priceSum(a) - priceSum(b)),
    referenceKey: reference.key,
    cheapestKey: cheapest.key,
  };
});

/** Условная «корзина» для сортировки: 3 части входа на 1 часть выхода. */
function priceSum(e: Endpoint) {
  return (e.price.input ?? 1e9) * 3 + (e.price.output ?? 1e9);
}

export const allEndpoints = models.flatMap((m) => m.endpoints);
const endpointMap = new Map(allEndpoints.map((e) => [e.key, e]));
export const findEndpoint = (key: string) => endpointMap.get(key);

/** Стоимость демонстрационного прогона «20 агентов × 100 раундов» для конечной точки. */
export function demoRunCost(key: string) {
  const r = calculate(defaultScenario, findEndpoint, { main: key, groupB: key, judge: key });
  return r.ok ? r.perRun : null;
}

export const modelRows = models
  .map((m) => ({ model: m, reference: findEndpoint(m.referenceKey)!, cheapest: findEndpoint(m.cheapestKey)!, demo: demoRunCost(m.referenceKey), demoMin: demoRunCost(m.cheapestKey) }))
  .sort((a, b) => (a.demo ?? Infinity) - (b.demo ?? Infinity));

/* ---------- Сведения о затратах в корпусе ---------- */

export type CostSignal = "money" | "hardware" | "tokens";
export type StudyRow = {
  id: string;
  title: string;
  original: string | null;
  authors: string[];
  year: number | null;
  topics: string[];
  models: string[];
  /** Признаки в тексте карточки, найденные автоматически. Не проверены. */
  signals: CostSignal[];
  hasEvidence: boolean;
  /** Итог проверки первоисточника, если свидетельства нет. */
  audit: "none" | "unavailable" | null;
};

export function costSignals(text: string): CostSignal[] {
  const out: CostSignal[] = [];
  if (/\$\s?\d|\d\s?(долл|USD|€)/i.test(text)) out.push("money");
  if (/GPU|A100|H100|V100|A6000|видеокарт|кВт/i.test(text)) out.push("hardware");
  if (/\d[\d\s,.]*\s?(млн|млрд|тыс\.?|M|B|K)?\s*(токен|token)/i.test(text)) out.push("tokens");
  return out;
}

export function getStudyRows(): StudyRow[] {
  return getWorks().map((w) => {
    const d = getDetail(w.id);
    return {
      id: w.id,
      title: w.title,
      original: w.original,
      authors: w.authors,
      year: w.year,
      topics: w.topics,
      models: d?.models ?? [],
      signals: costSignals(d?.sections.costs ?? ""),
      hasEvidence: evidenceById.has(w.id),
      audit: auditById.get(w.id)?.status ?? null,
    };
  });
}

export function formatSnapshotDate(iso = snapshotDate) {
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Moscow" });
}
