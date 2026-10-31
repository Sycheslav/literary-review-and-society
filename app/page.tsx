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
          <p className="eyebrow">
            Литературный обзор · <span className="nowrap">Лаборатория № 57 ИПУ РАН</span>
          </p>
          <h1>
            Социумы <span className="nowrap">ИИ-агентов</span>
          </h1>
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
            Начните с восьми вопросов ниже. Если навести курсор на название работы, появится краткая
            аннотация, а щелчок откроет полную карточку.
          </p>
        </div>
      </section>

      <section className="concept-teaser">
        <div className="container concept-teaser-inner">
          <div>
            <h2>Концепция и идеи исследований</h2>
            <p>
              Программа проекта: цели, рабочий словарь, основной сценарий с сообществом прогнозистов,
              гипотезы, эксперименты, требования к стенду и восемь идей для первой серии.
            </p>
          </div>
          <ul>
            <li>
              <Link href="/concept/project">Проект в нескольких абзацах</Link>
            </li>
            <li>
              <Link href="/concept/hypotheses">Проверяемые вопросы и гипотезы</Link>
            </li>
            <li>
              <Link href="/concept/experiments">Портфель экспериментов</Link>
            </li>
            <li>
              <Link href="/concept/ideas">Восемь идей для первой серии</Link>
            </li>
            <li>
              <Link href="/concept">Все 23 главы →</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="start">
        <div className="container">
          <h2 className="section-title">С чего начать</h2>
          <p className="section-lead">
            Восемь работ, по одной на каждый главный вопрос лаборатории. Они подобраны как вход в
            тему, и научное качество работ здесь не сравнивается.
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
            Двенадцать обобщений по корпусу; в раскрытом пункте видно, на каких работах оно
            основано.
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
            В каждом разделе есть вводный очерк и список работ по значимости, причём одна работа
            может входить в несколько направлений.
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
              <h2 className="section-title">Граф знаний</h2>
              <p className="section-lead">
                Тёмные узлы — направления, синие — работы; щелчок по узлу показывает его связи.
              </p>
            </div>
            <Link href="/graph" className="button button-quiet">
              Открыть на весь экран
            </Link>
          </div>
          <GraphEmbed />
        </div>
      </section>

      <section className="section section-about" id="about">
        <div className="container narrow">
          <details className="about">
            <summary>Об обзоре и его ограничениях</summary>
            <div className="prose">
              <p>
                Обзор собран по материалам проекта Лаборатории № 57 ИПУ РАН с учётом идей книги
                «Верхум» о коллективной памяти, культуре и институтах. Слова «социум», «дружба» и
                «верхум» здесь рабочие понятия: если агенты помогают друг другу, держат устойчивые
                связи или ведут общий архив, это ещё не доказывает, что у них есть человеческие
                чувства или сознание.
              </p>
              <p>
                Обзор охватывает собранный корпус и не претендует на систематичность. Доказательная
                сила источников разная: исследования людей, эксперименты с LLM, платформы, наблюдения
                за реальными сервисами и рассказы практиков нельзя ставить в один ряд.
              </p>
              <p>
                Деление работ на ключевые, дополняющие и фоновые показывает только близость к задачам
                лаборатории, качество исследования оно не оценивает. Для части работ это деление
                предварительное.
              </p>
              <p>
                Аннотации и разборы пересказывают источники, поэтому цифры перед использованием в
                статье или заявке нужно сверять с указанной таблицей первоисточника: версии препринтов
                меняются.
              </p>
              <div className="agent-access">
                <div>
                  <p className="agent-access-title"><strong>Для ИИ-агентов</strong></p>
                  <p>Передайте файл агенту, чтобы он мог читать обзор и искать материалы.</p>
                </div>
                <a href="/SKILL.md" download="SKILL.md">Скачать SKILL.md</a>
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
