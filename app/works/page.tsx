import { getTopics, getWorks } from "@/lib/data";
import Catalog from "../components/Catalog";

export const metadata = { title: "Работы" };

type Props = { searchParams: Promise<{ q?: string; topic?: string }> };

export default async function WorksPage({ searchParams }: Props) {
  const { q = "", topic = "" } = await searchParams;
  const works = getWorks();
  const topics = getTopics().map((t) => ({ id: t.id, title: t.title }));
  return (
    <section className="section page-top">
      <div className="container">
        <h1 className="page-title">Работы</h1>
        <p className="section-lead">
          Сначала показаны ключевые работы; дополняющие и фоновые раскрываются по щелчку. Наведите
          курсор на название, чтобы прочитать аннотацию.
        </p>
        <Catalog works={works} topics={topics} initialQuery={q} initialTopic={topic} />
      </div>
    </section>
  );
}
