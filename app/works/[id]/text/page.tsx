import Link from "next/link";
import { notFound } from "next/navigation";
import { getDetail, getWork, readFullText } from "@/lib/data";
import Md from "../../../components/Md";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props) {
  const work = getWork((await params).id);
  return { title: work ? `Полный текст: ${work.title}` : "Полный текст" };
}

export default async function FullTextPage({ params }: Props) {
  const { id } = await params;
  const work = getWork(id);
  const detail = getDetail(id);
  if (!work || !detail?.textPath) notFound();
  const text = readFullText(detail.textPath);

  return (
    <article className="section page-top">
      <div className="container narrow">
        <nav className="crumbs" aria-label="Путь">
          <Link href={`/works/${work.id}`}>← К карточке работы</Link>
        </nav>
        <h1 className="work-title">{work.title}</h1>
        {work.original && <p className="work-original">{work.original}</p>}
        <p className="note">
          Текст оригинала, автоматически извлечённый из PDF или веб-страницы: таблицы, формулы и
          подписи к рисункам могут быть искажены.
          {detail.url && (
            <>
              {" "}
              Сверяйтесь с{" "}
              <a href={detail.url} target="_blank" rel="noreferrer">
                первоисточником
              </a>
              .
            </>
          )}{" "}
          Для перевода страницы воспользуйтесь встроенным переводчиком браузера.
        </p>
        <div lang={work.original ? "en" : undefined} className="fulltext">
          <Md>{text}</Md>
        </div>
      </div>
    </article>
  );
}
