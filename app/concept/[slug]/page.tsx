import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter, getConcept } from "@/lib/data";
import Md from "../../components/Md";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getConcept().chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const chapter = getChapter((await params).slug);
  return { title: chapter ? `${chapter.num}. ${chapter.title}` : "Концепция" };
}

export default async function ChapterPage({ params }: Props) {
  const chapter = getChapter((await params).slug);
  if (!chapter) notFound();
  const chapters = getConcept().chapters;
  const index = chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <section className="section page-top">
      <div className="container">
        <nav className="crumbs" aria-label="Путь">
          <Link href="/concept">Концепция и идеи исследований</Link>
        </nav>
        <div className="chapter-layout">
          <aside className="chapter-toc" aria-label="Главы">
            <ol>
              {chapters.map((c) => (
                <li key={c.slug}>
                  <Link href={`/concept/${c.slug}`} aria-current={c.slug === chapter.slug ? "page" : undefined}>
                    <span>{c.num}.</span> {c.title}
                  </Link>
                  {c.slug === chapter.slug && c.sections.length > 0 && (
                    <ol className="chapter-toc-sub">
                      {c.sections.map((s) => (
                        <li key={s.id}>
                          <a href={`#${s.id}`}>{s.title}</a>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </aside>

          <article className="chapter-main">
            <p className="kicker">
              Глава {chapter.num} из {chapters.length}
            </p>
            <h1 className="chapter-heading">{chapter.title}</h1>
            <p><a href={`/knowledge/concept/${chapter.slug}.md`}>Markdown для ИИ-агентов</a></p>
            <Md className="chapter-text">{chapter.body}</Md>

            <nav className="chapter-pager" aria-label="Соседние главы">
              {prev ? (
                <Link href={`/concept/${prev.slug}`} className="pager-prev">
                  <small>← Предыдущая</small>
                  <span>
                    {prev.num}. {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/concept/${next.slug}`} className="pager-next">
                  <small>Следующая →</small>
                  <span>
                    {next.num}. {next.title}
                  </span>
                </Link>
              )}
            </nav>
          </article>
        </div>
      </div>
    </section>
  );
}
