import GraphView from "../../components/GraphView";

export const metadata = { title: "Граф знаний: направления" };

export default function GraphTopicsPage() {
  return (
    <section className="graph-page">
      <GraphView full view="topics" />
    </section>
  );
}
