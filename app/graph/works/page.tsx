import GraphView from "../../components/GraphView";

export const metadata = { title: "Граф знаний: работы" };

export default function GraphWorksPage() {
  return (
    <section className="graph-page">
      <GraphView full view="works" />
    </section>
  );
}
