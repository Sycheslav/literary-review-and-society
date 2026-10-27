import { getGraph, getTopics, getWorks } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  const works = getWorks().map((w) => ({
    id: w.id,
    title: w.title,
    original: w.original,
    authors: w.authors.slice(0, 3),
    year: w.year,
    importance: w.importance,
    topics: w.topics,
    summary: w.summary,
  }));
  const topics = getTopics().map((t) => ({ id: t.id, title: t.title, count: t.count, lead: t.lead }));
  return Response.json({ works, topics, ...getGraph() });
}
