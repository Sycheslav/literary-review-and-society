import GraphView from "../components/GraphView";

export const metadata = { title: "Карта связей" };

export default function GraphPage() {
  return (
    <section className="graph-page">
      <GraphView full />
    </section>
  );
}
