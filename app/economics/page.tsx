import Link from "next/link";
import { CATEGORIES, defaultScenario as d, fmtUsd } from "@/lib/economics-core";
import { audits, evidence } from "@/lib/economics-evidence";
import { getStudyRows, modelRows } from "@/lib/economics";
import { EvidenceCard, HBars } from "./ui";

export const metadata = { title: "Экономика — стоимость моделей и исследований" };

const PART_TEXT: Record<string, string> = {
  participants: "Каждый ход каждого агента — вызов модели: системный промпт, наблюдения и ответ.",
  memory: "История растёт с каждым раундом и входит в каждый запрос. Обычно главный скрытый рост цены.",
  summaries: "Рефлексия, сжатие памяти, координатор — вызовы, которых нет в «чистой» схеме.",
  judges: "Модель-судья для разметки сообщений. В одном исследовании обошлась вдвое дороже симуляции.",
  overhead: "Пилот, неудачные прогоны, контрольные условия, резерв, хранение и инфраструктура.",
};

/** «4 раза», «20 раз». */
function times(v: number) {
  const n = Math.round(v);
  const tail = n % 10;
  return `${n} ${tail >= 2 && tail <= 4 && (n % 100 < 12 || n % 100 > 14) ? "раза" : "раз"}`;
}

export default function EconomicsPage() {
  const budget = modelRows.filter((r) => r.model.role === "budget" && r.demo !== null);
  const control = modelRows.filter((r) => r.model.role === "control" && r.demo !== null);
  const cheapest = budget[0];
  const dearestBudget = budget.at(-1)!;
  const priciest = control.at(-1);
  const spread = budget.length > 1 ? budget.at(-1)!.demo! / cheapest.demo! : 1;
  const seriesFactor = 3 * 10;

  const studies = getStudyRows();
  const withSignals = studies.filter((s) => !s.hasEvidence && !s.audit && (s.signals.includes("money") || s.signals.includes("hardware"))).length;
  const money = evidence.filter((e) => e.usd !== null);

  return (
    <>
      <div className="econ-hero">
        <div>
          <p className="kicker">Стоимость моделей и исследований</p>
          <h1>Сколько стоит эксперимент с обществом агентов</h1>
          <p className="lead">
            Цены моделей, расходы опубликованных исследований и калькулятор сметы для лаборатории. Всё
            посчитано по одному датированному снимку тарифов и одной формуле.
          </p>
          <ul className="econ-hero-points">
            <li>
              Прогон «20 агентов × 100 раундов» на бюджетных моделях стоит{" "}
              <b>
                {fmtUsd(cheapest.demo!)}–{fmtUsd(budget.at(-1)!.demo!)}
              </b>{" "}
              — разница в {times(spread)} при одинаковой нагрузке.
            </li>
            {priciest && (
              <li>
                Модели для контроля качества дороже бюджетных в{" "}
                <b>
                  {Math.round(control[0].demo! / dearestBudget.demo!)}–{times(priciest.demo! / cheapest.demo!)}
                </b>{" "}
                — их разумно отдавать части агентов или оценщику.
              </li>
            )}
            <li>
              Главные множители сметы — не цена токена, а число условий, повторов и рост памяти. Деньги
              исследований в корпусе — от центов за прогон до тысяч долларов за проект.
            </li>
          </ul>
        </div>

        <aside className="econ-answer" aria-label="Пример расчёта">
          <p className="econ-answer-q">20 агентов × 100 раундов</p>
          <p className="econ-answer-sub">
            Один прогон: вход {(d.basePrompt + d.turnInput).toLocaleString("ru-RU")} токенов + память до{" "}
            {d.memoryCap.toLocaleString("ru-RU")}, ответ {d.output} токенов. Без кэша.
          </p>
          {[
            cheapest && { label: cheapest.model.name, sub: "самая дешёвая из бюджетных", v: cheapest.demo! },
            dearestBudget !== cheapest && { label: dearestBudget.model.name, sub: "самая дорогая из бюджетных", v: dearestBudget.demo! },
            priciest && { label: priciest.model.name, sub: "модель для контроля качества", v: priciest.demo! },
          ]
            .filter((x): x is { label: string; sub: string; v: number } => Boolean(x))
            .map((x) => (
              <div className="econ-answer-row" key={x.label}>
                <span>
                  {x.label}
                  <small>{x.sub}</small>
                </span>
                <strong>{fmtUsd(x.v)}</strong>
              </div>
            ))}
          <p className="econ-answer-foot">
            Серия 3 условия × 10 прогонов — в {seriesFactor} раз больше: {fmtUsd(cheapest.demo! * seriesFactor)} …{" "}
            {priciest ? fmtUsd(priciest.demo! * seriesFactor) : "—"}. Параметры демонстрационные — замените их
            замерами пилота.
          </p>
          <Link href="/economics/calculator" className="button">
            Посчитать свой вариант
          </Link>
        </aside>
      </div>

      <section className="econ-section">
        <h2>С чего начать</h2>
        <p className="section-lead">Три маршрута для обсуждения с коллегами.</p>
        <div className="econ-routes">
          <Link href="/economics/models" className="econ-route">
            <span className="econ-route-num">Выбрать модель</span>
            <h3>Какая модель по карману и чем отличаются провайдеры</h3>
            <p>Десять моделей, опорная цена, самый дешёвый вариант и все конечные точки с тарифными нюансами.</p>
            <span className="econ-route-path">Цены моделей → подробности → калькулятор</span>
          </Link>
          <Link href="/economics/studies" className="econ-route">
            <span className="econ-route-num">Разобрать чужой опыт</span>
            <h3>Сколько тратили авторы похожих экспериментов</h3>
            <p>{evidence.length} сверенных свидетельств, поиск по всем {studies.length} работам корпуса и сравнение до четырёх работ.</p>
            <span className="econ-route-path">Каталог → экономический паспорт → первоисточник</span>
          </Link>
          <Link href="/economics/calculator" className="econ-route">
            <span className="econ-route-num">Обсудить смету</span>
            <h3>Сколько будет стоить наш собственный дизайн</h3>
            <p>Готовые сценарии, кэш, оценщик, смешанный состав моделей, три сценария и ссылка на расчёт.</p>
            <span className="econ-route-path">Сценарий → параметры → ссылка коллеге</span>
          </Link>
        </div>
      </section>

      <section className="econ-section">
        <h2>Одна нагрузка — разные модели</h2>
        <p className="section-lead">
          Стоимость одного прогона «20 агентов × 100 раундов» по опорной цене каждой модели. Тонкая линия —
          насколько дешевле самая выгодная конечная точка той же модели.
        </p>
        <div className="chart-legend">
          <span>
            <i style={{ background: "var(--s1)" }} />
            бюджетные модели
          </span>
          <span>
            <i style={{ background: "#93b6e4" }} />
            модели для контроля качества
          </span>
        </div>
        <HBars
          caption="Стоимость одного демонстрационного прогона по моделям, долларов"
          rows={modelRows
            .filter((r) => r.demo !== null)
            .map((r) => ({
              key: r.model.id,
              label: r.model.name,
              sub: r.model.vendor,
              value: r.demo!,
              min: r.demoMin,
              text: fmtUsd(r.demo!),
              textSub: r.demoMin !== null && r.demoMin < r.demo! - 1e-9 ? `от ${fmtUsd(r.demoMin)}` : undefined,
              dim: r.model.role === "control",
            }))}
        />
        <p className="chart-note">
          Это цена нагрузки, а не качества: сравнение не говорит, какая модель лучше справится с задачей.
          Опорная цена — у разработчика модели, а если его нет среди провайдеров — самая распространённая;
          самые дешёвые точки часто работают с сильным квантованием. <Link href="/economics/models">Таблица цен и условия →</Link>
        </p>
      </section>

      <section className="econ-section">
        <h2>Сколько тратили другие</h2>
        <p className="section-lead">
          Денежные суммы из статей, сверенные с первоисточником. Единицы разные — прогон, серия, проект —
          поэтому суммы не ранжируются.
        </p>
        <div className="econ-grid">
          {money.slice(0, 6).map((e) => (
            <EvidenceCard key={e.id} e={e} />
          ))}
        </div>
        <p className="econ-more">
          <Link href="/economics/studies">Все свидетельства, включая ресурсные, и каталог {studies.length} работ →</Link>
        </p>
      </section>

      <section className="econ-section">
        <h2>Что видно по статьям</h2>
        <p className="section-lead">Наблюдения из сверенных свидетельств. Это отдельные работы, а не закономерности.</p>
        <div className="econ-grid">
          <Link href="/economics/studies/arxiv-2604-00026" className="econ-route">
            <span className="econ-route-num">Оценивание</span>
            <h3>Оценщики обошлись вдвое дороже симуляции</h3>
            <p>$200 на модели-судьи против $100 на сам инференс агентов.</p>
          </Link>
          <Link href="/economics/studies/arxiv-2604-03295" className="econ-route">
            <span className="econ-route-num">Размер команды</span>
            <h3>×7 агентов — ×6,4 токенов на задачу</h3>
            <p>54 тыс. токенов у одного агента, 344 тыс. у команды из семи.</p>
          </Link>
          <Link href="/economics/studies/arxiv-2603-28990" className="econ-route">
            <span className="econ-route-num">Самоорганизация</span>
            <h3>×8 агентов — всего +12% токенов</h3>
            <p>Без жёстких ролей расход почти не рос при переходе от 8 к 64 агентам.</p>
          </Link>
          <Link href="/economics/studies/arxiv-2605-00914" className="econ-route">
            <span className="econ-route-num">Обсуждение</span>
            <h3>Дебаты в 2–3 раза дороже самокоррекции</h3>
            <p>При равной или худшей точности.</p>
          </Link>
          <Link href="/economics/studies/arxiv-2304-03442" className="econ-route">
            <span className="econ-route-num">Память</span>
            <h3>25 агентов × 2 дня — «тысячи долларов»</h3>
            <p>Generative Agents (2023); Affordable Generative Agents затем сократили расход токенов до 43%.</p>
          </Link>
          <Link href="/economics/studies/arxiv-2608-11215" className="econ-route">
            <span className="econ-route-num">Дешёвая замена</span>
            <h3>Большая модель только как учитель — «несколько долларов»</h3>
            <p>Остальную симуляцию ведёт обученная небольшая модель на обычном компьютере.</p>
          </Link>
        </div>
      </section>

      <section className="econ-section">
        <h2>Из чего складывается стоимость</h2>
        <p className="section-lead">Пять групп расходов. Калькулятор показывает долю каждой в вашей смете.</p>
        <div className="econ-parts">
          {CATEGORIES.map((c, i) => (
            <div key={c.key} className="econ-part" style={{ "--c": `var(--s${i + 1})` } as React.CSSProperties}>
              <b>{c.label}</b>
              <p>{PART_TEXT[c.key]}</p>
            </div>
          ))}
        </div>
        <p className="chart-note">
          Труд людей, комиссии за покупку кредитов, налоги и конвертация валют в смету API не входят и
          учитываются отдельно.
        </p>
      </section>

      <section className="econ-section">
        <h2>Насколько прозрачны публикации</h2>
        <p className="section-lead">Большинство работ о затратах молчат. Отсутствие данных не означает нулевых расходов.</p>
        <div className="econ-grid">
          <div className="econ-card">
            <h3>{evidence.length} из {studies.length}</h3>
            <p>
              работ дают сверенные цифры: {money.length} — деньги, {evidence.length - money.length} — только токены, GPU
              или время.
            </p>
          </div>
          <div className="econ-card">
            <h3>{audits.filter((a) => a.status === "none").length}</h3>
            <p>
              работ проверены по первоисточнику, затрат в них нет; ещё {audits.filter((a) => a.status === "unavailable").length}{" "}
              источника не открылись автоматически.
            </p>
          </div>
          <div className="econ-card">
            <h3>{evidence.filter((e) => e.check === "issue").length}</h3>
            <p>свидетельств содержат расхождения внутри самих статей — они отмечены и не используются для расчётов.</p>
          </div>
          <div className="econ-card">
            <h3>{studies.length - evidence.length - audits.length}</h3>
            <p>
              работ ещё не проверены по первоисточнику; в их карточках нет упоминаний сумм и оборудования
              {withSignals ? `, кроме ${withSignals}` : ""}.
            </p>
          </div>
        </div>
        <p className="chart-note">
          Как читать эти цифры и чего с ними делать нельзя — в разделе <Link href="/economics/methodology">«Как считать»</Link>.
          Экономика самой игровой среды (ресурсы, обмен, стимулы агентов) — в <Link href="/concept">концепции</Link>.
        </p>
      </section>
    </>
  );
}
