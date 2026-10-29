import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, getTopics, getWorks } from "@/lib/data";
import { worksWord } from "@/lib/labels";
import Md from "../../components/Md";
import WorkList from "../../components/WorkList";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getTopics().map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props) {
  const topic = getTopic((await params).id);
  return { title: topic?.title ?? "Направление" };
}

export default async function TopicPage({ params }: Props) {
  const topic = getTopic((await params).id);
  if (!topic) notFound();
  const works = getWorks().filter((w) => w.topics.includes(topic.id));

  return (
    <section className="section page-top">
      <div className="container">
        <nav className="crumbs" aria-label="Путь">
          <Link href="/topics">Направления</Link>
        </nav>
        <h1 className="page-title">{topic.title}</h1>
        <p className="page-sub">
          {topic.count} {worksWord(topic.count)}
          {topic.core > 0 ? `, из них ${topic.core} ключевых` : ""}
        </p>
        <div className="topic-layout">
          <article className="topic-essay">
            <h2 className="block-title">Обзор направления</h2>
            <Md>{topic.intro}</Md>
          </article>
          <div className="topic-works">
            <h2 className="block-title">Работы</h2>
            <WorkList works={works} />
          </div>
        </div>
      </div>
    </section>
  );
}
