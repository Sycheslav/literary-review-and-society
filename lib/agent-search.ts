import { getKnowledgeBundle, SITE_URL } from "@/lib/agent-http";
import { getTopics } from "@/lib/data";

const TYPES = new Set(["work", "summary", "topic", "concept", "economics", "overview", "guide", "index"]);
const normalize = (s: string) => s.toLowerCase().replaceAll("ё", "е");
let indexedVersion = "";
let index: { document: ReturnType<typeof getKnowledgeBundle>["documents"][number]; title: string; text: string; normalized: string }[] = [];
function getIndex() {
  const bundle = getKnowledgeBundle();
  if (indexedVersion !== bundle.data_version) {
    index = bundle.documents.map(document => {
      const text = document.text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[#*`>|]/g, " ").replace(/\s+/g, " ").trim();
      return { document, title: normalize(document.title), text, normalized: normalize(text) };
    });
    indexedVersion = bundle.data_version;
  }
  return index;
}

export function searchKnowledge(params: URLSearchParams) {
  const q = (params.get("q") ?? "").trim();
  if (q.length < 2 || q.length > 200) throw new Error("q должен содержать 2–200 символов");
  const tokens = normalize(q).match(/[\p{L}\p{N}_.-]+/gu) ?? [];
  if (!tokens.length) throw new Error("q должен содержать слова или идентификатор");
  function integer(key: string, fallback: number, min: number, max: number) {
    const raw = params.get(key);
    if (raw === null) return fallback;
    if (!/^\d+$/.test(raw) || Number(raw) < min || Number(raw) > max) throw new Error(`${key}: допустимо целое число ${min}–${max}`);
    return Number(raw);
  }
  const limit = integer("limit", 10, 1, 50);
  const offset = integer("offset", 0, 0, 10000);
  const type = params.get("type");
  const topic = params.get("topic");
  if (type !== null && !TYPES.has(type)) throw new Error("Неизвестный type");
  if (topic !== null && !getTopics().some(t => t.id === topic)) throw new Error("Неизвестный topic");
  const matches = getIndex().filter(r => (!type || r.document.type === type) && (!topic || r.document.topics.includes(topic)) && tokens.every(t => r.normalized.includes(t) || normalize(r.document.id).includes(t)))
    .map(r => ({ ...r, score: tokens.reduce((n, t) => n + (r.title.includes(t) ? 10 : 0), 0) + (r.document.type === "work" || r.document.type === "concept" ? 2 : 0) }))
    .sort((a, b) => b.score - a.score || a.document.path.localeCompare(b.document.path, "en"));
  return {
    schema_version: 1,
    data_version: indexedVersion,
    query: q,
    total: matches.length,
    offset,
    limit,
    next_offset: offset + limit < matches.length ? offset + limit : null,
    results: matches.slice(offset, offset + limit).map(r => {
      const first = Math.min(...tokens.map(t => r.normalized.indexOf(t)).filter(n => n >= 0));
      const start = Number.isFinite(first) ? Math.max(0, first - 85) : 0;
      return { id: r.document.id, type: r.document.type, title: r.document.title, snippet: `${start ? "…" : ""}${r.text.slice(start, start + 360)}${start + 360 < r.text.length ? "…" : ""}`, markdown_url: `${SITE_URL}/knowledge/${r.document.path}`, html_url: r.document.html_url };
    }),
  };
}

// Best-effort per-process limiter. No persistent identifiers or external service.
const clients = new Map<string, { count: number; until: number }>();
export function searchRateLimit(request: Request, now = Date.now()) {
  // Railway supplies X-Forwarded-For. For direct local access use a shared bucket.
  const key = (request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local").slice(0, 128);
  for (const [k, v] of clients) if (v.until <= now) clients.delete(k);
  let client = clients.get(key);
  if (!client) {
    // Bounded memory even when the application is reached outside its proxy.
    if (clients.size >= 10000) return 60;
    client = { count: 0, until: now + 60000 };
    clients.set(key, client);
  }
  client.count++;
  return client.count > 60 ? Math.max(1, Math.ceil((client.until - now) / 1000)) : 0;
}
