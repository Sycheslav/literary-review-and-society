import Link from "next/link";
import { getTopics, getWork, getWorks } from "@/lib/data";
import { FINDINGS, START_HERE } from "@/lib/home";
import { authorsShort, previewProps, worksWord } from "@/lib/labels";
import GraphEmbed from "./components/GraphEmbed";
import Md from "./components/Md";

export default function HomePage() {
  const works = getWorks();
  const topics = getTopics();
  const core = works.filter((w) => w.importance === "core").length;

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Литературный обзор · Лаборатория № 57 ИПУ РАН</p>
          <h1>Социумы ИИ-агентов</h1>
          <p className="lead">
            Исследования и практические проекты о группах языковых агентов: как они передают
            информацию, выбирают партнёров, распределяют работу, договариваются при разных интересах,
            соблюдают и меняют правила.
          </p>
          <dl className="stats">
            <div>
              <dt>{works.length}</dt>
              <dd>{worksWord(works.length)} в корпусе</dd>
            </div>
            <div>
              <dt>{core}</dt>
              <dd>ключевых для лаборатории</dd>
            </div>
            <div>
              <dt>{topics.length}</dt>
              <dd>направлений</dd>
            </div>
          </dl>
          <p className="hero-hint">
            Начните с восьми вопросов ниже. Наведите курсор на название работы — появится краткая
            аннотация; щелчок открывает полную карточку.
          </p>
        </div>
      </section>

      <section className="section" id="start">
        <div className="container">
          <h2 className="section-title">С чего начать</h2>
          <p className="section-lead">
            Восемь работ, по одной на центральный вопрос лаборатории. Это вход в тему, а не рейтинг
            научного качества.
          </p>
          <ol className="start-list">
            {START_HERE.map((item, i) => {
              const work = getWork(item.workId);
              if (!work) return null;
              return (
                <li key={item.workId}>
                  <span className="start-num">{i + 1}</span>
                  <div>
                    <p className="start-question">{item.question}</p>
                    <Link href={`/works/${work.id}`} className="start-work" {...previewProps(work)} data-pv-notitle="">
                      {work.title}
                    </Link>
                    <p className="start-meta">
                      {[authorsShort(work.authors), work.year].filter(Boolean).join(", ")}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section section-alt" id="findings">
        <div className="container">
          <h2 className="section-title">Что уже известно</h2>
          <p className="section-lead">
            Двенадцать обобщений по корпусу. Раскройте пункт, чтобы увидеть, на каких работах он
            основан.
          </p>
          <div className="findings">
            {FINDINGS.map((f, i) => (
              <details key={f.title} className="finding">
                <summary>
                  <span className="finding-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f.title}</span>
                </summary>
                <Md className="finding-text">{f.text}</Md>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="topics">
        <div className="container">
          <h2 className="section-title">Направления исследований</h2>
          <p className="section-lead">
            Работа может относиться к нескольким направлениям. В каждом разделе — вводный очерк и
            список работ по значимости.
          </p>
          <ul className="topic-list">
            {topics.map((t) => (
              <li key={t.id}>
                <Link href={`/topics/${t.id}`}>
                  <span className="topic-title">{t.title}</span>
                  <span className="topic-count">
                    {t.count} {worksWord(t.count)}
                    {t.core > 0 ? ` · ${t.core} ключевых` : ""}
                  </span>
                  <span className="topic-lead">{t.lead}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt" id="map">
        <div className="container">
          <div className="section-head">
            <div>
              <h2 className="section-title">Карта связей</h2>
              <p className="section-lead">
                Тёмные узлы — направления, синие — работы. Щёлкните по узлу, чтобы увидеть его связи.
              </p>
            </div>
            <Link href="/graph" className="button button-quiet">
              Открыть на весь экран
            </Link>
          </div>
          <GraphEmbed />
        </div>
      </section>

      <section className="section" id="about">
        <div className="container narrow">
          <details className="about">
            <summary>Об обзоре и его ограничениях</summary>
            <div className="prose">
              <p>
                Обзор вырос из материалов проекта Лаборатории № 57 ИПУ РАН и учитывает идеи книги
                «Верхум» о коллективной памяти, культуре и институтах. Слова «социум», «дружба»,
                «верхум» используются как рабочие исследовательские понятия: наблюдаемая взаимопомощь,
                устойчивость связей или общий архив сами по себе не доказывают наличия у агентов
                человеческих чувств или сознания.
              </p>
              <p>
                Это целенаправленный обзор собранного корпуса, а не систематический обзор всех
                публикаций. Исследования людей, эксперименты с LLM, платформы, наблюдения за реальными
                сервисами и рассказы практиков имеют разную доказательную силу.
              </p>
              <p>
                Деление на ключевые, дополняющие и фоновые работы отражает близость к задачам
                лаборатории, а не качество исследования; для части работ оно назначено предварительно и
                может уточняться.
              </p>
              <p>
                Аннотации и разборы — пересказ, а не цитата. Перед использованием цифр в статье или
                заявке сверяйте их с указанной таблицей первоисточника: версии препринтов меняются.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
