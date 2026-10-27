import { readFileSync } from "node:fs";
import path from "node:path";

export type Importance = "core" | "supporting" | "peripheral";

export type Work = {
  id: string;
  title: string;
  original: string | null;
  authors: string[];
  year: number | null;
  kind: string;
  topics: string[];
  importance: Importance;
  summary: string;
  hasText: boolean;
};

export type SectionKey =
  | "design"
  | "tech"
  | "prompts"
  | "costs"
  | "results"
  | "conclusions"
  | "limits";

export type WorkDetail = {
  keyFindings: string[];
  agents: string;
  models: string[];
  sections: Partial<Record<SectionKey, string>>;
  related: string[];
  url: string | null;
  textPath: string | null;
};

export type Topic = {
  id: string;
  title: string;
  intro: string;
  lead: string;
  count: number;
  core: number;
};

export type GraphData = {
  nodes: { id: string; x: number; y: number }[];
  edges: [string, string][];
};

const DATA_DIR = path.join(process.cwd(), "data");
const cache = new Map<string, unknown>();

function readJson<T>(name: string): T {
  if (!cache.has(name) || process.env.NODE_ENV !== "production") {
    cache.set(name, JSON.parse(readFileSync(path.join(DATA_DIR, name), "utf-8")));
  }
  return cache.get(name) as T;
}

export const getWorks = () => readJson<Work[]>("works.json");
export const getTopics = () => readJson<Topic[]>("topics.json");
export const getGraph = () => readJson<GraphData>("graph.json");

export function getWorkMap() {
  const key = "works-map";
  if (!cache.has(key) || process.env.NODE_ENV !== "production") {
    cache.set(key, new Map(getWorks().map((w) => [w.id, w])));
  }
  return cache.get(key) as Map<string, Work>;
}

export const getWork = (id: string) => getWorkMap().get(id);
export const getDetail = (id: string) => readJson<Record<string, WorkDetail>>("details.json")[id];
export const getTopic = (id: string) => getTopics().find((t) => t.id === id);

export function readFullText(textPath: string) {
  const file = path.join(process.cwd(), "public", "corpus", "files", textPath);
  const raw = readFileSync(file, "utf-8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  return match ? raw.slice(match[0].length) : raw;
}
