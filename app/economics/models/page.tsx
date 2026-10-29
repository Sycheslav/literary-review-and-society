import Link from "next/link";
import { fmtInt, fmtRate, fmtUsd, TIER_LABELS, type Endpoint } from "@/lib/economics-core";
import { demoRunCost, formatSnapshotDate, modelRows, snapshotDate, snapshotSource } from "@/lib/economics";

export const metadata = { title: "Цены моделей — Экономика" };

const ctx = (v: number) => (v >= 1e6 ? `${(v / 1e6).toLocaleString("ru-RU", { maximumFractionDigits: 2 })} млн` : `${Math.round(v / 1000)} тыс.`);

function statusText(e: Endpoint) {
  if (e.status === 0) return null;
  return e.uptime !== null && e.uptime < 90 ? `сбои: доступность ${Math.round(e.uptime)}% за 30 мин` : "деградация по данным OpenRouter";
}

export default function ModelsPage() {
  const maxDemo = Math.max(...modelRows.map((r) => r.demo ?? 0));
  return (
    <>
      <h1 className="page-title">Цены моделей</h1>
      <p className="section-lead">
        Доллары за 1 млн токенов по снимку OpenRouter от {formatSnapshotDate()}. Одна модель доступна у
        разных провайдеров по разной цене — раскройте строку, чтобы увидеть все варианты.
      </p>

      <nav className="econ-toc" aria-label="На странице">
        <a href="#table">Сравнение</a>
        <a href="#terms">Что влияет на итоговый счёт</a>
        <a href="#snapshot">О снимке</a>
      </nav>

      <div id="table" className="model-head" aria-hidden="true">
        <span>Модель</span>
        <span className="opt">Вход</span>
        <span className="opt">Выход</span>
        <span className="opt">Кэш, чтение</span>
        <span className="opt">Контекст</span>
        <span>Прогон 20 × 100</span>
        <span />
      </div>
      {modelRows.map(({ model: m, reference: r, cheapest: c, demo }) => (
        <details key={m.id} className={`model-block${m.role === "control" ? " is-control" : ""}`}>
          <summary>
            <span className="model-name">
              {m.name}
              <small>
                {m.vendor} · {m.role === "control" ? "контроль качества" : "бюджетная"} · {m.endpoints.length} конечных точек
              </small>
            </span>
            <span className="model-cell opt">
              {fmtRate(r.price.input)}
              {c.price.input !== r.price.input && <small>от {fmtRate(c.price.input)}</small>}
            </span>
            <span className="model-cell opt">
              {fmtRate(r.price.output)}
              {c.price.output !== r.price.output && <small>от {fmtRate(c.price.output)}</small>}
            </span>
            <span className="model-cell opt">{fmtRate(r.price.cacheRead)}</span>
            <span className="model-cell opt">
              {ctx(r.context)}
              {r.thresholds.length > 0 && <small>дороже от {ctx(r.thresholds[0].minPrompt)}</small>}
            </span>
            <span className="model-cost">
              <strong>{demo === null ? "—" : fmtUsd(demo)}</strong>
              <span aria-hidden="true">
                <i style={{ width: `${((demo ?? 0) / maxDemo) * 100}%` }} />
              </span>
            </span>
          </summary>
          <div className="model-body">
            <div className="model-facts">
              <span className="badge badge-accent">Опорная цена: {r.provider}</span>
              {r.thresholds.map((t) => (
                <span key={t.minPrompt} className="badge badge-warn">
                  От {fmtInt(t.minPrompt)} токенов запроса: {fmtRate(t.price.input)} / {fmtRate(t.price.output)}
                </span>
              ))}
              {m.endpoints.some((e) => e.timeWindows.length) && <span className="badge">У части провайдеров скидка по времени суток</span>}
            </div>
            <div className="econ-table-wrap">
              <table className="econ-table">
                <thead>
                  <tr>
                    <th>Провайдер · конечная точка</th>
                    <th>Режим</th>
                    <th className="num">Вход</th>
                    <th className="num">Выход</th>
                    <th className="num">Кэш: чтение</th>
                    <th className="num">Кэш: запись</th>
                    <th className="num">Контекст</th>
                    <th className="num">Прогон 20 × 100</th>
                  </tr>
                </thead>
                <tbody>
                  {m.endpoints.map((e) => {
                    const run = demoRunCost(e.key);
                    const warn = statusText(e);
                    return (
                      <tr key={e.key} className={e.key === r.key ? "is-ref" : undefined}>
                        <td>
                          {e.provider}
                          <small>
                            {e.tag}
                            {e.quantization && ` · ${e.quantization}`}
                            {warn && <> · ⚠ {warn}</>}
                          </small>
                        </td>
                        <td>{e.tier === "standard" ? <span className="is-dim">стандартный</span> : TIER_LABELS[e.tier] ?? e.tier}</td>
                        <td className="num">{fmtRate(e.price.input)}</td>
                        <td className="num">{fmtRate(e.price.output)}</td>
                        <td className="num">{fmtRate(e.price.cacheRead)}</td>
                        <td className="num">{fmtRate(e.price.cacheWrite)}</td>
                        <td className="num">{ctx(e.context)}</td>
                        <td className="num">
                          <Link href={`/economics/calculator#v=2&m=${encodeURIComponent(e.key)}`}>{run === null ? "—" : fmtUsd(run)}</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </details>
      ))}
      <p className="chart-note">
        «—» — значение не опубликовано (не ноль). Опорная цена — самая распространённая среди штатных точек
        стандартного режима; «от» — самая дешёвая штатная точка. Квантование (fp8, fp4) может снижать
        качество. Щелчок по цене прогона открывает калькулятор с этой точкой.
      </p>

      <section id="terms" className="econ-section">
        <h2>Что влияет на итоговый счёт</h2>
        <p className="section-lead">Таблица показывает базовые ставки. Счёт может отличаться из-за условий ниже — проверяйте их у провайдера.</p>
        <div className="econ-grid">
          <div className="econ-card">
            <h3>Скрытые токены рассуждений</h3>
            <p>
              У моделей с «рассуждением» токены размышлений обычно оплачиваются как выход, даже если их не
              видно в ответе. Ставьте длину ответа по замерам пилота, а не по видимому тексту.
            </p>
          </div>
          <div className="econ-card">
            <h3>Кэш промптов</h3>
            <p>
              Повторяющееся начало запроса (системный промпт, правила) может читаться из кэша: по этому снимку — в 10 и более раз дешевле
              обычного входа (сравните колонки). Условия различаются: минимальная длина префикса, время жизни, плата за запись.
            </p>
          </div>
          <div className="econ-card">
            <h3>Длинный контекст</h3>
            <p>
              У некоторых моделей весь запрос дорожает, если превышает порог (в таблице отмечен жёлтым). Рост
              памяти агентов может незаметно перевести эксперимент на дорогой тариф.
            </p>
          </div>
          <div className="econ-card">
            <h3>Режимы обслуживания</h3>
            <ul>
              <li>
                <b>flex</b> — дешевле, но медленнее и без гарантий;
              </li>
              <li>
                <b>priority / fast</b> — дороже, быстрее;
              </li>
              <li>пакетная обработка у провайдеров напрямую может дать скидку — проверить отдельно.</li>
            </ul>
          </div>
          <div className="econ-card">
            <h3>Доплаты и ограничения</h3>
            <p>
              Веб-поиск и инструменты оплачиваются отдельно. Лимиты запросов и параллельности ограничивают
              скорость: 20 агентов одновременно — 20 параллельных запросов.
            </p>
          </div>
          <div className="econ-card">
            <h3>Оплата</h3>
            <p>
              Комиссия за покупку кредитов, налоги и конвертация не входят в цены таблицы. Правило комиссии
              зависит от способа оплаты — см.{" "}
              <a href="https://openrouter.ai/pricing" target="_blank" rel="noreferrer">
                условия OpenRouter ↗
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="snapshot" className="econ-section econ-prose">
        <h2 className="econ-h2">О снимке тарифов</h2>
        <p>
          Снимок получен {new Date(snapshotDate).toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} (МСК) через{" "}
          <a href={snapshotSource} target="_blank" rel="noreferrer">
            OpenRouter Endpoints API ↗
          </a>{" "}
          и сохранён целиком. Цены и доступность меняются ежедневно; ссылки на расчёты фиксируют дату снимка.
          Состав моделей: восемь недорогих моделей для массовых агентов и две дорогие для контроля.
        </p>
        <p>
          <b>Статус:</b> снимок не прошёл редакторскую сверку с официальными страницами провайдеров. Перед
          закупкой проверьте актуальную цену, лимиты и условия кэша. Исторические модели из статей (GPT-4o,
          Claude 3.5 и др.) сюда не входят: их цены в статьях относятся к датам экспериментов.
        </p>
      </section>
    </>
  );
}
