import Link from "next/link";
import { notFound } from "next/navigation";
import { getDetail, getTopics, getWork, getWorks } from "@/lib/data";
import type { SectionKey } from "@/lib/data";
import { IMPORTANCE_SHORT, KIND_LABELS, SECTION_LABELS, previewProps } from "@/lib/labels";
import Discussion from "../../components/Discussion";
import Md from "../../components/Md";

type Props = { params: Promise<{ id: string }> };

const DETAIL_ORDER: SectionKey[] = ["design", "tech", "prompts", "results", "limits", "costs"];

export function generateStaticParams() {
  return getWorks().map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: Props) {
  const work = getWork((await params).id);
  return { title: work?.title ?? "Работа" };
}

function meaningful(value: string) {
  const v = value.trim().toLowerCase();
  return v && !v.startsWith("не ") && v !== "—";
}

export default async function WorkPage({ params }: Props) {
  const { id } = await params;
  const work = getWork(id);
  const detail = getDetail(id);
  if (!work || !detail) notFound();

  const topics = getTopics().filter((t) => work.topics.includes(t.id));
  const related = detail.related.map((rid) => getWork(rid)).filter((w) => w !== undefined);
  const { sections } = detail;
  const hasFindings = detail.keyFindings.length > 0;
  const collapsed = DETAIL_ORDER.filter((key) => sections[key] && !(key === "results" && !hasFindings));
  const kicker = [
    `${IMPORTANCE_SHORT[work.importance]} работа`,
    KIND_LABELS[work.kind],
    work.year,
  ].filter(Boolean);

  return (
    <article className="section page-top">
      <div className="container">
        <nav className="crumbs" aria-label="Путь">
          <Link href="/works">Работы</Link>
          {topics[0] && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={`/topics/${topics[0].id}`}>{topics[0].title}</Link>
            </>
          )}
        </nav>

        <header className="work-head">
          <p className="kicker">{kicker.join(" · ")}</p>
          <h1 className="work-title">{work.title}</h1>
          {work.original && (
            <p className="work-original" lang="en">
              {work.original}
            </p>
          )}
          {work.authors.length > 0 && <p className="work-authors">{work.authors.join(", ")}</p>}
        </header>

        <div className="work-layout">
          <div className="work-main">
            <section className="work-block">
              <h2 className="block-title">Аннотация</h2>
              <p className="annotation">{work.summary}</p>
            </section>

            {hasFindings && (
              <section className="work-block">
                <h2 className="block-title">Главные результаты</h2>
                <Md className="findings-list">{detail.keyFindings.map((f) => `- ${f}`).join("\n")}</Md>
              </section>
            )}

            {!hasFindings && sections.results && (
              <section className="work-block">
                <h2 className="block-title">Результаты</h2>
                <Md>{sections.results}</Md>
              </section>
            )}

            {sections.conclusions && (
              <section className="work-block">
                <h2 className="block-title">Выводы авторов</h2>
                <Md>{sections.conclusions}</Md>
              </section>
            )}

            {collapsed.length > 0 && (
              <section className="work-block">
                <h2 className="block-title">Подробнее об исследовании</h2>
                <div className="accordion">
                  {collapsed.map((key) => (
                    <details key={key}>
                      <summary>{SECTION_LABELS[key]}</summary>
                      <Md>{sections[key]!}</Md>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section className="work-block">
              <Discussion targetId={work.id} />
            </section>
          </div>

          <aside className="work-aside">
            <div className="aside-actions">
              {detail.url && (
                <a href={detail.url} target="_blank" rel="noreferrer" className="button">
                  Первоисточник ↗
                </a>
              )}
              {detail.textPath && (
                <Link href={`/works/${work.id}/text`} className="button button-quiet">
                  Полный текст
                </Link>
              )}
            </div>

            <dl className="facts">
              {work.year && (
                <div>
                  <dt>Год</dt>
                  <dd>{work.year}</dd>
                </div>
              )}
              {meaningful(detail.agents) && (
                <div>
                  <dt>Агенты</dt>
                  <dd>{detail.agents}</dd>
                </div>
              )}
              {detail.models.length > 0 && (
                <div>
                  <dt>Модели</dt>
                  <dd>{detail.models.join(", ")}</dd>
                </div>
              )}
              {topics.length > 0 && (
                <div>
                  <dt>Направления</dt>
                  <dd>
                    <ul className="plain-list">
                      {topics.map((t) => (
                        <li key={t.id}>
                          <Link href={`/topics/${t.id}`}>{t.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {related.length > 0 && (
                <div>
                  <dt>Связанные работы</dt>
                  <dd>
                    <ul className="plain-list">
                      {related.map((r) => (
                        <li key={r.id}>
                          <Link href={`/works/${r.id}`} {...previewProps(r)}>
                            {r.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </div>
    </article>
  );
}
