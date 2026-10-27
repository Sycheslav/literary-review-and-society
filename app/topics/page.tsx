import Link from "next/link";
import { getTopics } from "@/lib/data";
import { worksWord } from "@/lib/labels";

export const metadata = { title: "Направления исследований" };

export default function TopicsPage() {
  const topics = getTopics();
  return (
    <section className="section page-top">
      <div className="container">
        <h1 className="page-title">Направления исследований</h1>
        <p className="section-lead">
          Тринадцать тематических разделов обзора. Работа может относиться к нескольким из них.
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
  );
}
