import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/agent-http";
import { getConcept, getDetail, getTopics, getWorks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/agents", "/concept", "/topics", "/works", "/graph", "/graph/topics", "/graph/works", "/economics", "/economics/models", "/economics/studies", "/economics/calculator", "/economics/infrastructure", "/economics/methodology",
    ...getConcept().chapters.map(c => `/concept/${c.slug}`), ...getTopics().map(t => `/topics/${t.id}`),
    ...getWorks().flatMap(w => [`/works/${w.id}`, `/economics/studies/${w.id}`, ...(getDetail(w.id)?.summaryPath ? [`/works/${w.id}/summary`] : [])]),
  ];
  return routes.map(route => ({ url: SITE_URL + route }));
}
