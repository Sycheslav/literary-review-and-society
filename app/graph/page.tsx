import GraphView from "../components/GraphView";

export const metadata = { title: "Граф знаний" };

export default function GraphPage() {
  return (
    <section className="graph-page">
      <GraphView full />
    </section>
  );
}
