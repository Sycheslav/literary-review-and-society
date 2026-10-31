"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculate,
  CATEGORIES,
  defaultScenario,
  fmtInt,
  fmtRate,
  fmtTokens,
  fmtUsd,
  scaleTokens,
  SCENARIO_FACTORS,
  sensitivity,
  triangular,
  type Endpoint,
  type ModelInfo,
  type RunResult,
  type Scenario,
  type Selection,
} from "@/lib/economics-core";

type Field = { key: keyof Scenario; label: string; hint?: string; step?: string };

const SCALE: Field[] = [
  { key: "agents", label: "Агенты" },
  { key: "rounds", label: "Раунды" },
  { key: "callsPerTurn", label: "Вызовов на ход", hint: "1 — один ответ; 2–3 — план, действие, рефлексия", step: "any" },
  { key: "runs", label: "Прогонов на условие", hint: "независимые повторы с разными seed" },
  { key: "conditions", label: "Условий", hint: "механизмы, контроль, варианты" },
];
const SIZES: Field[] = [
  { key: "basePrompt", label: "Постоянный промпт", hint: "системный промпт, роль, правила — токенов" },
  { key: "turnInput", label: "Вход раунда", hint: "наблюдения, сообщения форума — токенов" },
  { key: "output", label: "Ответ", hint: "вместе со скрытыми рассуждениями — токенов" },
  { key: "memoryGrowth", label: "Рост памяти за раунд", hint: "токенов на агента" },
  { key: "memoryCap", label: "Потолок памяти", hint: "после него память обрезается — токенов" },
];
const CACHE: Field[] = [
  { key: "cacheHit", label: "Попадание в кэш, %", hint: "доля постоянного промпта; 0 — без кэша" },
  { key: "summaryEvery", label: "Сжатие памяти каждые N раундов", hint: "0 — не сжимать" },
  { key: "summaryInput", label: "Вход сжатия, токенов" },
  { key: "summaryOutput", label: "Выход сжатия, токенов" },
];
const MIXED: Field[] = [
  { key: "groupBShare", label: "Доля агентов на второй модели, %", hint: "0 — все на основной" },
  { key: "judgeShare", label: "Доля ходов под оценкой, %", hint: "0 — без модели-оценщика" },
  { key: "judgeInput", label: "Вход оценщика, токенов" },
  { key: "judgeOutput", label: "Выход оценщика, токенов" },
];
const SERIES: Field[] = [
  { key: "pilot", label: "Пилот, % от серии" },
  { key: "retries", label: "Повторы сбоев, %" },
  { key: "reserve", label: "Резерв, %" },
  { key: "extra", label: "Прочие расходы, $", hint: "инфраструктура, хранение, сервисы", step: "any" },
];
const ALL_FIELDS = [...SCALE, ...SIZES, ...CACHE, ...MIXED, ...SERIES];

type Preset = { id: string; label: string; s: Partial<Scenario>; sel?: (m: Record<string, string>) => Partial<Selection> };
const PRESETS: Preset[] = [
  { id: "base", label: "20 агентов × 100 раундов", s: {} },
  { id: "mechanisms", label: "Сравнение 4 механизмов", s: { conditions: 4, runs: 10, pilot: 10, retries: 10, reserve: 15 } },
  {
    id: "long",
    label: "Длинная симуляция с памятью",
    s: { rounds: 500, memoryGrowth: 200, memoryCap: 12000, summaryEvery: 25, cacheHit: 80, runs: 3 },
  },
  {
    id: "mixed",
    label: "Смешанный состав + оценщик",
    s: { groupBShare: 25, judgeShare: 20, runs: 5, conditions: 2 },
    sel: (ref) => ({ groupB: ref["anthropic/claude-sonnet-5.5"], judge: ref["openai/gpt-6.1-sol"] }),
  },
];

const COLORS = ["var(--s1)", "var(--s2)", "var(--s3)", "var(--s4)", "var(--s5)"];

export default function Calculator({ models, snapshotDate }: { models: ModelInfo[]; snapshotDate: string }) {
  const endpointMap = useMemo(() => new Map(models.flatMap((m) => m.endpoints).map((e) => [e.key, e])), [models]);
  const refs = useMemo(() => Object.fromEntries(models.map((m) => [m.id, m.referenceKey])), [models]);
  const find = (k: string) => endpointMap.get(k);
  const defaultSel: Selection = {
    main: refs["openai/gpt-6-luna"] ?? models[0].referenceKey,
    groupB: refs["anthropic/claude-sonnet-5.5"] ?? models[0].referenceKey,
    judge: refs["openai/gpt-6.1-sol"] ?? models[0].referenceKey,
  };

  const [s, setS] = useState<Scenario>(defaultScenario);
  const [sel, setSel] = useState<Selection>(defaultSel);
  const [preset, setPreset] = useState("base");
  const [sigma, setSigma] = useState(false);
  const [msg, setMsg] = useState("");
  const [restored, setRestored] = useState(false);

  // Параметры ссылки доступны только в браузере, поэтому читаются после гидратации.
  useEffect(() => {
    const p = new URLSearchParams(location.hash.slice(1));
    if (p.get("v") === "2") {
      const next = { ...defaultScenario };
      for (const f of ALL_FIELDS) {
        const v = p.get(f.key);
        if (v !== null && Number.isFinite(Number(v))) next[f.key] = Number(v);
      }
      const pick = (k: string, fallback: string) => {
        const v = p.get(k);
        return v && endpointMap.has(v) ? v : fallback;
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setS(next);
      setSel({ main: pick("m", defaultSel.main), groupB: pick("b", defaultSel.groupB), judge: pick("j", defaultSel.judge) });
      setPreset("");
      const snap = p.get("snap");
      if (snap && snap !== snapshotDate.slice(0, 10))
        setMsg(`Ссылка создана по снимку тарифов от ${snap}; расчёт выполнен по текущему снимку.`);
      if (p.get("m") && !endpointMap.has(p.get("m")!))
        setMsg("Конечная точка из ссылки отсутствует в текущем снимке — выбрана модель по умолчанию.");
    } else if (location.hash.length > 1) {
      setMsg("Ссылка в старом формате — открыт пример по умолчанию.");
    }
    setRestored(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!restored) return;
    const p = new URLSearchParams({ v: "2", snap: snapshotDate.slice(0, 10), m: sel.main });
    if (s.groupBShare > 0) p.set("b", sel.groupB);
    if (s.judgeShare > 0) p.set("j", sel.judge);
    for (const f of ALL_FIELDS) if (s[f.key] !== defaultScenario[f.key]) p.set(f.key, String(s[f.key]));
    history.replaceState(null, "", location.pathname + "#" + p.toString());
  }, [s, sel, restored, snapshotDate]);

  const result = calculate(s, find, sel);
  const low = calculate(scaleTokens(s, SCENARIO_FACTORS.low), find, sel);
  const high = calculate(scaleTokens(s, SCENARIO_FACTORS.high), find, sel);
  const sens = result.ok ? sensitivity(s, find, sel) : [];
  const tri = result.ok && low.ok && high.ok ? triangular(low.series, result.series, high.series) : null;
  const main = find(sel.main);

  const set = (k: keyof Scenario, v: string) => {
    setPreset("");
    setS((prev) => ({ ...prev, [k]: v === "" ? NaN : Number(v) }));
  };
  const applyPreset = (p: Preset) => {
    setPreset(p.id);
    setS({ ...defaultScenario, ...p.s });
    setSel((prev) => ({ ...prev, ...(p.sel ? p.sel(refs) : {}) }));
    setMsg("");
  };

  const renderFields = (fields: Field[]) =>
    fields.map((f) => {
      const v = s[f.key];
      const bad = !Number.isFinite(v) || v < 0;
      return (
        <label key={f.key} className="econ-field">
          {f.label}
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step={f.step ?? "1"}
            value={Number.isFinite(v) ? v : ""}
            aria-invalid={bad || undefined}
            onChange={(e) => set(f.key, e.target.value)}
          />
          {f.hint && <span className="econ-field-hint">{f.hint}</span>}
        </label>
      );
    });

  function download(kind: "md" | "json") {
    if (!result.ok) return;
    const content = kind === "json" ? exportJson() : exportMarkdown();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([content], { type: kind === "json" ? "application/json" : "text/markdown;charset=utf-8" }));
    a.download = `smeta-${snapshotDate.slice(0, 10)}.${kind === "json" ? "json" : "md"}`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const describe = (key: string) => {
    const e = find(key);
    return e ? `${e.model} · ${e.provider} (${e.tag}), вход ${fmtRate(e.price.input)} $/млн, выход ${fmtRate(e.price.output)} $/млн` : key;
  };

  function exportJson() {
    return JSON.stringify(
      {
        version: 2,
        snapshot: snapshotDate,
        link: location.href,
        selection: {
          main: find(sel.main),
          groupB: s.groupBShare > 0 ? find(sel.groupB) : null,
          judge: s.judgeShare > 0 ? find(sel.judge) : null,
        },
        scenario: s,
        result: result.ok
          ? { perRun: result.perRun, series: result.series, breakdownSeries: result.breakdownSeries, tokens: result.tokens }
          : null,
        scenarios: {
          low: low.ok ? low.series : null,
          work: result.ok ? result.series : null,
          high: high.ok ? high.series : null,
          factors: SCENARIO_FACTORS,
        },
        notes: result.ok ? result.notes : [],
        notIncluded: NOT_INCLUDED,
      },
      null,
      2,
    );
  }

  function exportMarkdown() {
    if (!result.ok) return "";
    const rows = ALL_FIELDS.map((f) => `| ${f.label} | ${fmtInt(s[f.key])} |`).join("\n");
    const parts = CATEGORIES.map((c) => `| ${c.label} | ${fmtUsd(result.breakdownSeries[c.key])} |`).join("\n");
    return `# Смета эксперимента (черновик)

Снимок тарифов: ${snapshotDate}
Ссылка на расчёт: ${location.href}

## Модели
- Агенты: ${describe(sel.main)}
${s.groupBShare > 0 ? `- Вторая группа (${s.groupBShare}%): ${describe(sel.groupB)}\n` : ""}${s.judgeShare > 0 ? `- Оценщик (${s.judgeShare}% ходов): ${describe(sel.judge)}\n` : ""}
## Итог
- Серия: **${fmtUsd(result.series)}**
- Один прогон: ${fmtUsd(result.perRun)}
- Сценарии (длины запросов ×0,75 / ×1 / ×1,5): ${low.ok ? fmtUsd(low.series) : "—"} / ${fmtUsd(result.series)} / ${high.ok ? fmtUsd(high.series) : "—"} — не статистический интервал
- Вызовов за прогон: ${fmtInt(result.tokens.calls)}; токенов входа ${fmtTokens(result.tokens.input)}, выхода ${fmtTokens(result.tokens.output)}

| Статья | Сумма серии |
|---|---|
${parts}

## Параметры
| Параметр | Значение |
|---|---|
${rows}

## Не включено
${NOT_INCLUDED.map((x) => `- ${x}`).join("\n")}
${result.notes.length ? `\n## Примечания\n${result.notes.map((x) => `- ${x}`).join("\n")}\n` : ""}
Демонстрационная оценка по базовым тарифам; не является счётом. Параметры заменить замерами пилота.
`;
  }

  return (
    <div className="calc">
      <div>
        <div className="calc-presets">
          <p>Готовые сценарии — затем меняйте любые параметры:</p>
          <div className="econ-chips">
            {PRESETS.map((p) => (
              <button key={p.id} type="button" className="chip" aria-pressed={preset === p.id} onClick={() => applyPreset(p)}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <section className="calc-panel">
          <h2 className="calc-panel-title">
            Модель агентов <span>{main ? `${fmtRate(main.price.input)} / ${fmtRate(main.price.output)} $ за 1 млн` : ""}</span>
          </h2>
          <div className="calc-fields wide">
            <ModelPicker models={models} value={sel.main} onChange={(main) => setSel({ ...sel, main })} label="Агенты" />
          </div>
        </section>

        <section className="calc-panel">
          <h2 className="calc-panel-title">
            Масштаб <span>сколько вызовов</span>
          </h2>
          <div className="calc-fields">{renderFields(SCALE)}</div>
        </section>

        <section className="calc-panel">
          <h2 className="calc-panel-title">
            Размер запросов <span>в токенах; 1 токен ≈ ¾ английского слова</span>
          </h2>
          <div className="calc-fields">{renderFields(SIZES)}</div>
        </section>

        <details className="calc-panel" open={s.cacheHit > 0 || s.summaryEvery > 0 || undefined}>
          <summary>
            Кэш и сжатие памяти <span>{s.cacheHit > 0 ? `кэш ${s.cacheHit}%` : "выключено"}</span>
          </summary>
          <div className="calc-fields">{renderFields(CACHE)}</div>
        </details>

        <details className="calc-panel" open={s.groupBShare > 0 || s.judgeShare > 0 || undefined}>
          <summary>
            Смешанный состав и оценщик <span>{s.groupBShare > 0 || s.judgeShare > 0 ? "включено" : "выключено"}</span>
          </summary>
          <div className="calc-fields wide">
            <ModelPicker
              models={models}
              value={sel.groupB}
              onChange={(groupB) => setSel({ ...sel, groupB })}
              label="Вторая группа агентов"
            />
            <ModelPicker models={models} value={sel.judge} onChange={(judge) => setSel({ ...sel, judge })} label="Модель-оценщик" />
          </div>
          <div className="calc-fields">{renderFields(MIXED)}</div>
        </details>

        <details className="calc-panel" open={s.pilot + s.retries + s.reserve + s.extra > 0 || undefined}>
          <summary>
            Пилот, повторы, резерв <span>{s.pilot + s.retries + s.reserve + s.extra > 0 ? "учтены" : "не учтены"}</span>
          </summary>
          <div className="calc-fields">{renderFields(SERIES)}</div>
        </details>

        <section className="calc-assumptions econ-prose">
          <h2 className="econ-h3">Что посчитано и что нет</h2>
          <ul>
            <li>Расчёт идёт по раундам: память растёт до потолка, и в каждом раунде проверяется порог длинного контекста.</li>
            <li>Кэш: попадания оплачиваются по цене чтения, промахи — по цене записи (если её нет — как обычный вход).</li>
            <li>Пилот и повторы — надбавки к серии; резерв — к итогу вместе с прочими расходами.</li>
            <li>Сценарии умножают длины всех запросов и ответов на 0,75 и 1,5 — это разброс допущений, а не статистика.</li>
            <li>Не включено: {NOT_INCLUDED.join("; ")}.</li>
          </ul>
        </section>
      </div>

      <aside className="calc-result" aria-live="polite">
        {msg && <p className="calc-warn">{msg}</p>}
        {result.ok ? (
          <ResultView
            r={result}
            s={s}
            low={low.ok ? low : null}
            high={high.ok ? high : null}
            tri={tri}
            sigma={sigma}
            setSigma={setSigma}
            sens={sens}
          />
        ) : (
          <p className="calc-warn">{result.reason}</p>
        )}
        <div className="econ-actions mt-md">
          <button
            type="button"
            className="button"
            onClick={() =>
              navigator.clipboard.writeText(location.href).then(
                () => setMsg("Ссылка на расчёт скопирована."),
                () => setMsg("Скопируйте адрес из строки браузера."),
              )
            }
          >
            Скопировать ссылку
          </button>
          <button type="button" className="button button-quiet" onClick={() => download("md")} disabled={!result.ok}>
            Смета .md
          </button>
          <button type="button" className="button button-quiet" onClick={() => download("json")} disabled={!result.ok}>
            JSON
          </button>
        </div>
        <p className="econ-field-hint mt-sm">
          Тарифы на {new Date(snapshotDate).toLocaleDateString("ru-RU")}. Ссылка сохраняет параметры и дату снимка.
        </p>
      </aside>
    </div>
  );
}

const NOT_INCLUDED = [
  "труд людей",
  "комиссия за покупку кредитов, налоги и конвертация",
  "веб-поиск и инструменты",
  "скидки по времени суток и пакетный режим",
  "собственное оборудование (введите в «Прочие расходы»)",
];

function ModelPicker({
  models,
  value,
  onChange,
  label,
}: {
  models: ModelInfo[];
  value: string;
  onChange: (k: string) => void;
  label: string;
}) {
  const current = models.find((m) => m.endpoints.some((e) => e.key === value)) ?? models[0];
  return (
    <>
      <label className="econ-field">
        {label}: модель
        <select value={current.id} onChange={(e) => onChange(models.find((m) => m.id === e.target.value)!.referenceKey)}>
          <optgroup label="Бюджетные">
            {models
              .filter((m) => m.role === "budget")
              .map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} — {m.vendor}
                </option>
              ))}
          </optgroup>
          <optgroup label="Контроль качества">
            {models
              .filter((m) => m.role === "control")
              .map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} — {m.vendor}
                </option>
              ))}
          </optgroup>
        </select>
      </label>
      <label className="econ-field">
        Провайдер
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {current.endpoints.map((e: Endpoint) => (
            <option key={e.key} value={e.key}>
              {e.provider}
              {e.tag.includes("/") ? ` · ${e.tag.split("/").slice(1).join(" · ")}` : ""} — {fmtRate(e.price.input)} /{" "}
              {fmtRate(e.price.output)}
              {e.key === current.referenceKey ? " (опорная)" : ""}
              {e.status !== 0 ? " ⚠" : ""}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

function ResultView({
  r,
  s,
  low,
  high,
  tri,
  sigma,
  setSigma,
  sens,
}: {
  r: RunResult;
  s: Scenario;
  low: RunResult | null;
  high: RunResult | null;
  tri: ReturnType<typeof triangular> | null;
  sigma: boolean;
  setSigma: (v: boolean) => void;
  sens: ReturnType<typeof sensitivity>;
}) {
  const total = r.series || 1;
  const runsTotal = s.runs * s.conditions;
  return (
    <>
      <p className="calc-total-label">
        Вся серия: {runsTotal} {runsTotal === 1 ? "прогон" : "прогонов"}
        {s.pilot + s.retries + s.reserve + s.extra > 0 ? " с надбавками" : ""}
      </p>
      <div className="calc-total">{fmtUsd(r.series)}</div>

      <div className="calc-scen" aria-label="Три сценария">
        <div>
          Минимальный<b>{low ? fmtUsd(low.series) : "—"}</b>
        </div>
        <div className="is-main">
          Рабочий<b>{fmtUsd(r.series)}</b>
        </div>
        <div>
          Неблагоприятный<b>{high ? fmtUsd(high.series) : "—"}</b>
        </div>
      </div>
      <div className="calc-sigma">
        <label>
          <input type="checkbox" checked={sigma} onChange={(e) => setSigma(e.target.checked)} />
          Приближённая модель неопределённости
        </label>
        {sigma && tri && (
          <p>
            Среднее {fmtUsd(tri.mean)}, σ ≈ {fmtUsd(tri.sigma)}, P16–P84: {fmtUsd(tri.p16)}–{fmtUsd(tri.p84)}.{" "}
            <span className="econ-field-hint">
              Разброс по заданной модели допущений (треугольное распределение), не доверительный интервал.
            </span>
          </p>
        )}
      </div>

      <div className="calc-kpis">
        <span>
          Один прогон<b>{fmtUsd(r.perRun)}</b>
        </span>
        <span>
          Средний раунд<b>{fmtUsd(r.perRun / Math.max(1, s.rounds))}</b>
        </span>
        <span>
          Вызовов за прогон<b>{fmtTokens(r.tokens.calls)}</b>
        </span>
        <span>
          Токенов за прогон<b>{fmtTokens(r.tokens.input + r.tokens.output)}</b>
        </span>
      </div>

      <p className="calc-sub">Из чего состоит</p>
      <div className="stack" role="img" aria-label="Доли статей расходов">
        {CATEGORIES.map((c, i) =>
          r.breakdownSeries[c.key] > 0 ? (
            <span
              key={c.key}
              style={{ flex: r.breakdownSeries[c.key], background: COLORS[i] }}
              title={`${c.label}: ${fmtUsd(r.breakdownSeries[c.key])}`}
            />
          ) : null,
        )}
      </div>
      <div className="legend">
        {CATEGORIES.map((c, i) => (
          <div key={c.key} className="legend-row" title={c.hint} style={{ opacity: r.breakdownSeries[c.key] > 0 ? 1 : 0.45 }}>
            <i style={{ background: COLORS[i] }} />
            <span>{c.label}</span>
            <b>{fmtUsd(r.breakdownSeries[c.key])}</b>
            <em>{Math.round((r.breakdownSeries[c.key] / total) * 100)}%</em>
          </div>
        ))}
      </div>

      <p className="calc-sub">Накопленная стоимость одного прогона</p>
      <Curve work={r.curve} low={low?.curve} high={high?.curve} />

      {sens.length > 0 && (
        <>
          <p className="calc-sub">Что сильнее всего влияет (+50%)</p>
          {sens.slice(0, 5).map((x) => (
            <div key={x.key} className="sens-row">
              <span>{x.label}</span>
              <span className="sens-bar" style={{ width: `${Math.min(100, (x.delta / sens[0].delta) * 100)}%` }} />
              <em>+{Math.round(x.delta * 100)}%</em>
            </div>
          ))}
        </>
      )}

      {r.notes.length > 0 && (
        <ul className="calc-notes">
          {r.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
    </>
  );
}

/** Рабочий сценарий линией, коридор между минимальным и неблагоприятным — заливкой. */
function Curve({ work, low, high }: { work: number[]; low?: number[]; high?: number[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 360;
  const H = 150;
  const pad = { l: 8, r: 8, t: 6, b: 22 };
  const n = work.length;
  if (n < 2) return null;
  const max = Math.max(...(high ?? work), ...work) || 1;
  const x = (i: number) => pad.l + (i / (n - 1)) * (W - pad.l - pad.r);
  const y = (v: number) => H - pad.b - (v / max) * (H - pad.t - pad.b);
  const step = Math.max(1, Math.floor(n / 120));
  const idx = Array.from({ length: Math.ceil(n / step) }, (_, k) => Math.min(n - 1, k * step)).concat(n - 1);
  const line = (arr: number[]) => idx.map((i, k) => `${k ? "L" : "M"}${x(i).toFixed(1)},${y(arr[i]).toFixed(1)}`).join("");
  const band =
    low && high
      ? line(high) +
        idx
          .slice()
          .reverse()
          .map((i) => `L${x(i).toFixed(1)},${y(low[i]).toFixed(1)}`)
          .join("") +
        "Z"
      : null;
  const h = hover ?? n - 1;
  return (
    <>
      <svg
        className="calc-curve"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Рост стоимости одного прогона по раундам: в конце ${fmtUsd(work[n - 1])}`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const px = ((e.clientX - rect.left) / rect.width) * W;
          setHover(Math.max(0, Math.min(n - 1, Math.round(((px - pad.l) / (W - pad.l - pad.r)) * (n - 1)))));
        }}
        onMouseLeave={() => setHover(null)}
      >
        <line x1={pad.l} x2={W - pad.r} y1={H - pad.b} y2={H - pad.b} stroke="var(--line-2)" />
        {band && <path d={band} fill="var(--s1)" opacity={0.12} />}
        <path d={line(work)} fill="none" stroke="var(--s1)" strokeWidth={2} />
        <line x1={x(h)} x2={x(h)} y1={pad.t} y2={H - pad.b} stroke="var(--line-2)" strokeDasharray="3 3" />
        <circle cx={x(h)} cy={y(work[h])} r={4} fill="var(--s1)" stroke="#fff" strokeWidth={2} />
        <text x={pad.l} y={H - 6}>
          раунд 1
        </text>
        <text x={W - pad.r} y={H - 6} textAnchor="end">
          раунд {n}
        </text>
      </svg>
      <p className="econ-field-hint">
        Раунд {h + 1}: <b className="econ-strong">{fmtUsd(work[h])}</b>
        {low && high ? ` · коридор сценариев ${fmtUsd(low[h])}–${fmtUsd(high[h])}` : ""}. Наведите курсор на график.
      </p>
    </>
  );
}
