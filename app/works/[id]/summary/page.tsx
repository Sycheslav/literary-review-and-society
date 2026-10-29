import Link from "next/link";
import { notFound } from "next/navigation";
import { getDetail, getWork, readSummaryRu } from "@/lib/data";
import Md from "../../../components/Md";
import ReadingLevels from "../../../components/ReadingLevels";

type Props = { params: Promise<{ id: string }> };

// Long article bodies are rendered on demand, without bloating the static build.
export function generateStaticParams() { return []; }

export async function generateMetadata({ params }: Props) {
  const work = getWork((await params).id);
  return { title: work ? `Изложение: ${work.title}` : "Изложение на русском" };
}

export default async function SummaryPage({ params }: Props) {
  const { id } = await params;
  const work = getWork(id);
  const detail = getDetail(id);
  if (!work || !detail?.summaryPath) notFound();
  const raw = readSummaryRu(detail.summaryPath);
  if (!raw) notFound();
  const text = raw.replace(/^# [^\r\n]+\r?\n+/, "");
  const headings = Array.from(text.matchAll(/^## (\d+)\.\s+(.+)$/gm), (m) => ({
    id: `section-${m[1]}`, title: `${m[1]}. ${m[2].trim()}`,
  }));

  return (
    <article className="section page-top" lang="ru">
      <div className="container">
        <nav className="crumbs" aria-label="Путь">
          <Link href="/works">Работы</Link><span aria-hidden="true">/</span>
          <Link href={`/works/${id}`}>К карточке работы</Link>
        </nav>
        <p className="kicker">Подробное изложение на русском · {Math.max(1, Math.ceil(detail.summaryWords / 180))} мин чтения</p>
        <h1 className="work-title">{work.title}</h1>
        {work.original && <p className="work-original" lang="en">{work.original}</p>}
        <ReadingLevels id={id} detail={detail} current="summary" />
        {detail.summaryStatus === "limited" && (
          <p className="source-notice" role="note">
            Полный текст недоступен. Это ограниченное изложение по доступным источникам;
            подробности метода и результатов требуют проверки по оригиналу.
          </p>
        )}
        {detail.summaryStatus === "repository" && (
          <p className="note">Изложение подготовлено по документации проекта. Описанные возможности следует отличать от экспериментально проверенных результатов.</p>
        )}
        <div className="retelling-layout">
          <div className="retelling-text"><Md>{text}</Md></div>
          {headings.length > 0 && (
            <aside className="retelling-aside">
              <nav aria-label="Вопросы к статье">
                <h2 className="block-title">Вопросы к статье</h2>
                <ol>{headings.map((h) => <li key={h.id}><a href={`#${h.id}`}>{h.title}</a></li>)}</ol>
              </nav>
            </aside>
          )}
        </div>
        <div className="retelling-end"><ReadingLevels id={id} detail={detail} current="summary" /></div>
      </div>
    </article>
  );
}
