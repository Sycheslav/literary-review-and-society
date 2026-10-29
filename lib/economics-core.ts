// Чистые типы и расчёты раздела «Экономика». Модуль не читает файлы и работает
// и на сервере, и в браузере: таблицы, примеры, графики и экспорт используют одни формулы.

/** Цены в долларах за 1 млн токенов; null — значение не опубликовано. */
export type Price = {
  input: number | null;
  output: number | null;
  cacheRead: number | null;
  cacheWrite: number | null;
};

export type Endpoint = {
  /** Устойчивый ключ «модель::конечная точка» для ссылок. */
  key: string;
  model: string;
  provider: string;
  tag: string;
  /** standard, flex, priority, ultrafast — режим обслуживания. */
  tier: string;
  quantization: string | null;
  context: number;
  maxOutput: number | null;
  /** 0 — работает штатно; отрицательные значения — деградация по данным OpenRouter. */
  status: number;
  uptime: number | null;
  price: Price;
  /** Цены, действующие начиная с указанного размера запроса (длинный контекст). */
  thresholds: { minPrompt: number; price: Price }[];
  /** Цены, зависящие от времени суток (UTC, часы×100). В расчёт не входят. */
  timeWindows: { utcStart: number; utcEnd: number; price: Price }[];
};

export type ModelInfo = {
  id: string;
  vendor: string;
  name: string;
  role: "budget" | "control";
  endpoints: Endpoint[];
  /** Цена разработчика модели, иначе самая распространённая среди штатных точек стандартного режима. */
  referenceKey: string;
  /** Самая дешёвая штатная конечная точка (часто с сильным квантованием). */
  cheapestKey: string;
};

export type Scenario = {
  agents: number;
  rounds: number;
  callsPerTurn: number;
  /** Постоянная часть запроса: системный промпт, роль, правила. Её можно кэшировать. */
  basePrompt: number;
  /** Переменная часть: наблюдения, сообщения форума, задание раунда. */
  turnInput: number;
  output: number;
  memoryGrowth: number;
  memoryCap: number;
  /** Доля постоянной части, прочитанная из кэша, %. 0 — кэш не учитывается. */
  cacheHit: number;
  /** Сжатие памяти каждые N раундов на агента; 0 — выключено. */
  summaryEvery: number;
  summaryInput: number;
  summaryOutput: number;
  /** Доля ходов, проверяемых моделью-оценщиком, %. */
  judgeShare: number;
  judgeInput: number;
  judgeOutput: number;
  /** Доля агентов второй группы на другой модели, %. */
  groupBShare: number;
  runs: number;
  conditions: number;
  pilot: number;
  retries: number;
  reserve: number;
  /** Известные прочие расходы серии, $: инфраструктура, хранение, сервисы. */
  extra: number;
};

export type Selection = { main: string; groupB: string; judge: string };

export const defaultScenario: Scenario = {
  agents: 20,
  rounds: 100,
  callsPerTurn: 1,
  basePrompt: 1500,
  turnInput: 1500,
  output: 400,
  memoryGrowth: 150,
  memoryCap: 3000,
  cacheHit: 0,
  summaryEvery: 0,
  summaryInput: 4000,
  summaryOutput: 600,
  judgeShare: 0,
  judgeInput: 2500,
  judgeOutput: 300,
  groupBShare: 0,
  runs: 1,
  conditions: 1,
  pilot: 0,
  retries: 0,
  reserve: 0,
  extra: 0,
};

export const CATEGORIES = [
  { key: "participants", label: "Ходы агентов", hint: "постоянный промпт, наблюдения и ответы" },
  { key: "memory", label: "Память", hint: "накопленная история в каждом запросе" },
  { key: "summaries", label: "Сжатие памяти", hint: "вспомогательные вызовы суммаризации" },
  { key: "judges", label: "Оценщики", hint: "модель-судья для части ходов" },
  { key: "overhead", label: "Пилот, повторы, резерв, прочее", hint: "надбавки и известные суммы" },
] as const;
export type CategoryKey = (typeof CATEGORIES)[number]["key"];
export type Breakdown = Record<CategoryKey, number>;

const emptyBreakdown = (): Breakdown => ({ participants: 0, memory: 0, summaries: 0, judges: 0, overhead: 0 });

/** Цена, действующая для запроса указанной длины. Граница трактуется как «не меньше». */
export function priceFor(e: Endpoint, promptTokens: number): Price {
  let price = e.price;
  for (const t of [...e.thresholds].sort((a, b) => a.minPrompt - b.minPrompt)) {
    if (promptTokens >= t.minPrompt) price = { ...price, ...stripNulls(t.price) };
  }
  return price;
}

function stripNulls(p: Price): Partial<Price> {
  return Object.fromEntries(Object.entries(p).filter(([, v]) => v !== null)) as Partial<Price>;
}

type CallParts = { cached: number; fresh: number; memory: number; output: number };

/** Стоимость одного вызова по непересекающимся категориям токенов, $. */
function callCost(e: Endpoint, parts: CallParts, hitRate: number, notes: Set<string>) {
  const prompt = parts.cached + parts.fresh + parts.memory;
  const p = priceFor(e, prompt);
  if (p.input === null || p.output === null) return null;
  let cachedCost = parts.cached * p.input;
  if (hitRate > 0) {
    if (p.cacheRead === null) {
      notes.add(`${e.model} · ${e.tag}: цена чтения кэша не опубликована, постоянная часть посчитана как обычный вход.`);
    } else {
      const hit = parts.cached * hitRate;
      // Промах кэша оплачивается как запись, если провайдер её тарифицирует, иначе как обычный вход.
      cachedCost = hit * p.cacheRead + (parts.cached - hit) * (p.cacheWrite ?? p.input);
    }
  }
  return {
    base: (cachedCost + parts.fresh * p.input + parts.output * p.output) / 1e6,
    memory: (parts.memory * p.input) / 1e6,
  };
}

export type RunResult = {
  ok: true;
  perRun: number;
  breakdownRun: Breakdown;
  series: number;
  breakdownSeries: Breakdown;
  /** Накопленная стоимость одного прогона по раундам. */
  curve: number[];
  tokens: { input: number; output: number; calls: number };
  notes: string[];
};
export type CalcError = { ok: false; reason: string };

const INTEGER_FIELDS: (keyof Scenario)[] = ["agents", "rounds", "runs", "conditions", "summaryEvery"];

export function validate(s: Scenario): string | null {
  for (const [k, v] of Object.entries(s)) {
    if (!Number.isFinite(v)) return "Заполните все поля числами.";
    if (v < 0) return "Параметры не могут быть отрицательными.";
    if (INTEGER_FIELDS.includes(k as keyof Scenario) && !Number.isInteger(v)) return "Число агентов, раундов, прогонов и условий должно быть целым.";
  }
  if (s.rounds > 100_000) return "Больше 100 000 раундов калькулятор не считает.";
  if (s.cacheHit > 100 || s.judgeShare > 100 || s.groupBShare > 100) return "Доли задаются в процентах от 0 до 100.";
  return null;
}

export function calculate(s: Scenario, find: (key: string) => Endpoint | undefined, sel: Selection): RunResult | CalcError {
  const invalid = validate(s);
  if (invalid) return { ok: false, reason: invalid };
  const main = find(sel.main);
  if (!main) return { ok: false, reason: "Выберите модель и конечную точку." };
  const groupB = s.groupBShare > 0 ? find(sel.groupB) : undefined;
  if (s.groupBShare > 0 && !groupB) return { ok: false, reason: "Выберите модель второй группы агентов." };
  const judge = s.judgeShare > 0 ? find(sel.judge) : undefined;
  if (s.judgeShare > 0 && !judge) return { ok: false, reason: "Выберите модель-оценщика." };

  const notes = new Set<string>();
  const run = emptyBreakdown();
  const curve: number[] = [];
  const tokens = { input: 0, output: 0, calls: 0 };
  const groups = [
    { e: main, agents: s.agents * (1 - s.groupBShare / 100) },
    ...(groupB ? [{ e: groupB, agents: (s.agents * s.groupBShare) / 100 }] : []),
  ];
  const hit = s.cacheHit / 100;
  let total = 0;

  for (let r = 0; r < s.rounds; r++) {
    const memory = Math.min(r * s.memoryGrowth, s.memoryCap);
    const prompt = s.basePrompt + s.turnInput + memory;
    for (const g of groups) {
      if (g.agents === 0) continue;
      if (prompt > g.e.context) return { ok: false, reason: `Запрос (${fmtInt(prompt)} токенов) не помещается в контекст ${g.e.model} (${fmtInt(g.e.context)}).` };
      const c = callCost(g.e, { cached: s.basePrompt, fresh: s.turnInput, memory, output: s.output }, hit, notes);
      if (!c) return { ok: false, reason: `У ${g.e.model} · ${g.e.tag} нет цены входа или выхода.` };
      const calls = g.agents * s.callsPerTurn;
      run.participants += c.base * calls;
      run.memory += c.memory * calls;
      tokens.input += prompt * calls;
      tokens.output += s.output * calls;
      tokens.calls += calls;
      if (s.summaryEvery > 0 && (r + 1) % s.summaryEvery === 0) {
        const sc = callCost(g.e, { cached: 0, fresh: s.summaryInput, memory: 0, output: s.summaryOutput }, 0, notes);
        if (!sc) return { ok: false, reason: `У ${g.e.model} нет цены для сжатия памяти.` };
        run.summaries += sc.base * g.agents;
        tokens.input += s.summaryInput * g.agents;
        tokens.output += s.summaryOutput * g.agents;
        tokens.calls += g.agents;
      }
    }
    if (judge) {
      const calls = s.agents * s.callsPerTurn * (s.judgeShare / 100);
      const jc = callCost(judge, { cached: 0, fresh: s.judgeInput, memory: 0, output: s.judgeOutput }, 0, notes);
      if (!jc) return { ok: false, reason: `У оценщика ${judge.model} нет цены входа или выхода.` };
      run.judges += jc.base * calls;
      tokens.input += s.judgeInput * calls;
      tokens.output += s.judgeOutput * calls;
      tokens.calls += calls;
    }
    total = run.participants + run.memory + run.summaries + run.judges;
    curve.push(total);
  }

  for (const g of groups) if (g.e.timeWindows.length) notes.add(`${g.e.model} · ${g.e.tag}: есть скидка по времени суток; в расчёте взята базовая цена.`);

  const k = s.runs * s.conditions;
  const factor = k * (1 + s.pilot / 100) * (1 + s.retries / 100);
  const series = emptyBreakdown();
  series.participants = run.participants * factor;
  series.memory = run.memory * factor;
  series.summaries = run.summaries * factor;
  series.judges = run.judges * factor;
  const beforeReserve = total * factor + s.extra;
  const seriesTotal = beforeReserve * (1 + s.reserve / 100);
  // Пилот и повторы распределены по категориям, где возникают; «прочее» — известные суммы и резерв.
  series.overhead = seriesTotal - (series.participants + series.memory + series.summaries + series.judges);

  return { ok: true, perRun: total, breakdownRun: run, series: seriesTotal, breakdownSeries: series, curve, tokens, notes: [...notes] };
}

/** Три сценария: длины всех запросов и ответов ×0,75 / ×1 / ×1,5. */
export const SCENARIO_FACTORS = { low: 0.75, work: 1, high: 1.5 } as const;
const TOKEN_FIELDS: (keyof Scenario)[] = ["basePrompt", "turnInput", "output", "memoryGrowth", "memoryCap", "summaryInput", "summaryOutput", "judgeInput", "judgeOutput"];

export function scaleTokens(s: Scenario, f: number): Scenario {
  const out = { ...s };
  for (const k of TOKEN_FIELDS) out[k] = Math.round(s[k] * f);
  return out;
}

/** Влияние увеличения каждого параметра на 50% на итог серии. */
export function sensitivity(s: Scenario, find: (key: string) => Endpoint | undefined, sel: Selection) {
  const base = calculate(s, find, sel);
  if (!base.ok || base.series === 0) return [];
  const candidates: [keyof Scenario, string][] = [
    ["agents", "Число агентов"],
    ["rounds", "Число раундов"],
    ["turnInput", "Переменный вход"],
    ["basePrompt", "Постоянный промпт"],
    ["output", "Длина ответа"],
    ["memoryCap", "Потолок памяти"],
    ["judgeShare", "Доля оценивания"],
  ];
  return candidates
    .map(([k, label]) => {
      const v = s[k] * 1.5;
      const r = calculate({ ...s, [k]: INTEGER_FIELDS.includes(k) ? Math.round(v) : Math.min(k === "judgeShare" ? 100 : Infinity, v) }, find, sel);
      return { key: k, label, delta: r.ok ? r.series / base.series - 1 : 0 };
    })
    .filter((x) => x.delta > 0.005)
    .sort((a, b) => b.delta - a.delta);
}

/**
 * Приближённая модель неопределённости: треугольное распределение
 * с минимумом, модой и максимумом из трёх сценариев. Это разброс по заданным
 * допущениям, а не доверительный интервал.
 */
export function triangular(a: number, c: number, b: number) {
  if (!(a <= c && c <= b)) [a, c, b] = [a, c, b].sort((x, y) => x - y) as [number, number, number];
  const mean = (a + b + c) / 3;
  const sigma = Math.sqrt((a * a + b * b + c * c - a * b - a * c - b * c) / 18);
  const q = (p: number) => {
    if (b === a) return a;
    const fc = (c - a) / (b - a);
    return p < fc ? a + Math.sqrt(p * (b - a) * (c - a)) : b - Math.sqrt((1 - p) * (b - a) * (b - c));
  };
  return { mean, sigma, p16: q(0.16), p84: q(0.84) };
}

/* ---------- Форматирование ---------- */

export const fmtInt = (v: number) => Math.round(v).toLocaleString("ru-RU");

/** Деньги с разумной точностью: копейки для мелких сумм, без копеек для крупных. */
export function fmtUsd(v: number) {
  const abs = Math.abs(v);
  const digits = abs === 0 ? 0 : abs < 0.01 ? 4 : abs < 1 ? 3 : abs < 100 ? 2 : 0;
  return "$" + v.toLocaleString("ru-RU", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** Цена за 1 млн токенов: убирает хвосты двоичной арифметики (0,09999… → 0,1). */
export function fmtRate(v: number | null) {
  if (v === null) return "—";
  return v.toLocaleString("ru-RU", { maximumSignificantDigits: 4, maximumFractionDigits: 5 });
}

export function fmtTokens(v: number) {
  if (v >= 1e9) return (v / 1e9).toLocaleString("ru-RU", { maximumFractionDigits: 2 }) + " млрд";
  if (v >= 1e6) return (v / 1e6).toLocaleString("ru-RU", { maximumFractionDigits: 1 }) + " млн";
  if (v >= 1e3) return (v / 1e3).toLocaleString("ru-RU", { maximumFractionDigits: 1 }) + " тыс.";
  return fmtInt(v);
}

export const TIER_LABELS: Record<string, string> = {
  standard: "стандартный",
  flex: "flex — дешевле, медленнее, без гарантий",
  priority: "priority — быстрее и дороже",
  ultrafast: "ultrafast — максимальная скорость",
};
