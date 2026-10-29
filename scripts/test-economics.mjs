// Проверки расчётного модуля раздела «Экономика» на вручную посчитанных примерах.
// Запуск: node scripts/test-economics.mjs
import ts from "typescript";
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

function load(file, mocks = {}) {
  const js = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true, resolveJsonModule: true },
  }).outputText;
  const m = { exports: {} };
  vm.runInNewContext(js, { exports: m.exports, module: m, console, require: (name) => {
    if (name in mocks) return mocks[name];
    throw Error("Неожиданный импорт: " + name);
  } });
  return m.exports;
}

const core = load("lib/economics-core.ts");
const { calculate, defaultScenario, priceFor, triangular, scaleTokens, fmtRate } = core;
const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-9, `${msg}: ${a} ≠ ${b}`);

const price = (input, output, cacheRead = null, cacheWrite = null) => ({ input, output, cacheRead, cacheWrite });
const ep = (key, p, extra = {}) => ({ key, model: key, provider: "test", tag: key, tier: "standard", quantization: null, context: 1e6, maxOutput: null, status: 0, uptime: 100, price: p, thresholds: [], timeWindows: [], ...extra });
const A = ep("A", price(1, 2, 0.1, 1.25));
const B = ep("B", price(10, 20));
const T = ep("T", price(1, 2), { thresholds: [{ minPrompt: 1100, price: price(2, 4) }] });
const all = new Map([A, B, T].map((e) => [e.key, e]));
const find = (k) => all.get(k);
const sel = (main, groupB = main, judge = main) => ({ main, groupB, judge });

const zero = { ...defaultScenario, cacheHit: 0, summaryEvery: 0, judgeShare: 0, groupBShare: 0, pilot: 0, retries: 0, reserve: 0, extra: 0, runs: 1, conditions: 1, callsPerTurn: 1 };
// 2 агента × 2 раунда, вход 1000 (500 постоянный + 500 раунда), выход 100, память +100 за раунд.
const s = { ...zero, agents: 2, rounds: 2, basePrompt: 500, turnInput: 500, output: 100, memoryGrowth: 100, memoryCap: 100 };

// Раунд 1: (1000·1 + 100·2)/1e6 = 0,0012 на вызов; раунд 2: память 100 → 0,0013. Прогон = 2·(0,0012+0,0013).
let r = calculate(s, find, sel("A"));
near(r.perRun, 0.005, "рост памяти по раундам");
near(r.breakdownRun.memory, 2 * 100 / 1e6, "память — отдельная статья");
near(r.curve[0], 0.0024, "накопленная кривая");

// Серия: 2 прогона × (1+10%) × (1+10%) + $2, затем резерв 0%.
r = calculate({ ...s, runs: 2, pilot: 10, retries: 10, extra: 2 }, find, sel("A"));
near(r.series, 0.005 * 2 * 1.1 * 1.1 + 2, "пилот, повторы, прочие расходы");
r = calculate({ ...s, reserve: 50, extra: 1 }, find, sel("A"));
near(r.series, (0.005 + 1) * 1.5, "резерв применяется к итогу");
near(Object.values(r.breakdownSeries).reduce((a, b) => a + b, 0), r.series, "статьи складываются в итог");

// Порог длинного контекста: ниже (1000), на границе (1100 — дороже), выше.
near(priceFor(T, 1099).input, 1, "ниже порога");
near(priceFor(T, 1100).input, 2, "на границе действует повышенная цена");
r = calculate(s, find, sel("T"));
near(r.perRun, 2 * (0.0012 + (1100 * 2 + 100 * 4) / 1e6), "переход порога во втором раунде");

// Кэш: 500 постоянных токенов, попадание 80%: 400·0,1 + 100·1,25 + 500·1 + 100·2 = 865 на вызов в раунде 1.
r = calculate({ ...s, cacheHit: 80, memoryGrowth: 0, memoryCap: 0 }, find, sel("A"));
near(r.perRun, 4 * 865 / 1e6, "чтение и запись кэша без двойного учёта");
// Без цены чтения кэш не учитывается и появляется примечание.
r = calculate({ ...s, cacheHit: 80 }, find, sel("B"));
assert.ok(r.notes.length === 1, "примечание об отсутствии цены кэша");

// Вторая группа и оценщик на другой модели.
r = calculate({ ...s, memoryGrowth: 0, memoryCap: 0, groupBShare: 50 }, find, sel("A", "B"));
near(r.perRun, 2 * (0.0012 + 0.012), "агенты на двух моделях");
r = calculate({ ...s, memoryGrowth: 0, memoryCap: 0, judgeShare: 50, judgeInput: 1000, judgeOutput: 100 }, find, sel("A", "A", "B"));
near(r.breakdownRun.judges, 2 * 2 * 0.5 * (1000 * 10 + 100 * 20) / 1e6, "оценщик тарифицируется по своей модели");

// Сжатие памяти каждые 2 раунда: 2 агента × (4000·1 + 600·2).
r = calculate({ ...s, summaryEvery: 2 }, find, sel("A"));
near(r.breakdownRun.summaries, 2 * (4000 + 1200) / 1e6, "периодические вспомогательные вызовы");

// Ошибки: отрицательные, дробные, отсутствующая цена, контекст.
assert.equal(calculate({ ...s, rounds: -1 }, find, sel("A")).ok, false);
assert.equal(calculate({ ...s, agents: 1.5 }, find, sel("A")).ok, false);
assert.equal(calculate({ ...s, agents: NaN }, find, sel("A")).ok, false);
assert.equal(calculate(s, () => ep("X", price(null, 1)), sel("X")).ok, false, "нет цены входа — не ноль, а ошибка");
assert.equal(calculate(s, () => ep("X", price(1, 1), { context: 900 }), sel("X")).ok, false, "запрос больше контекста");
near(calculate({ ...s, agents: 0 }, find, sel("A")).series, 0, "нулевая нагрузка");

// Сценарии и треугольная модель.
assert.equal(scaleTokens(s, 1.5).output, 150);
const t = triangular(5, 5, 5);
near(t.sigma, 0, "вырожденный диапазон");
near(t.p16, 5, "вырожденный квантиль");
const t2 = triangular(0, 1, 2);
near(t2.mean, 1, "среднее треугольного");
near(t2.sigma, Math.sqrt(1 / 6), "σ треугольного");

assert.equal(fmtRate(0.09999999999999999), "0,1");

// Разбор реального снимка: окна по времени суток не считаются порогом длины.
const snapshot = JSON.parse(fs.readFileSync("data/economics/snapshot.json", "utf8"));
const econ = load("lib/economics.ts", {
  "@/data/economics/snapshot.json": snapshot,
  "@/lib/data": { getWorks: () => [], getDetail: () => undefined },
  "@/lib/economics-core": core,
  "@/lib/economics-evidence": load("lib/economics-evidence.ts"),
});
const ali = econ.findEndpoint("deepseek/deepseek-v4.1-flash::alibaba");
assert.equal(ali.thresholds.length, 0, "окна по времени не являются порогом");
assert.equal(ali.timeWindows.length, 2);
near(priceFor(ali, 5000).input, 0.33, "базовая цена без ночной скидки");
const luna = econ.findEndpoint("openai/gpt-6-luna::openai");
near(luna.price.input, 0.1, "перевод цены за токен в цену за миллион");
assert.equal(luna.thresholds[0].minPrompt, 272000);
for (const row of econ.modelRows) assert.ok(row.demo > 0, `демо-прогон для ${row.model.id}`);

console.log("Расчёты раздела «Экономика»: все проверки пройдены");
console.log(econ.modelRows.map((r) => `${r.model.name}: ${r.demo.toFixed(3)} (от ${r.demoMin.toFixed(3)})`).join("\n"));
