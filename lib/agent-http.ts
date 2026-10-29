import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

export const SITE_URL = "https://literary-review-and-society-production.up.railway.app";
const directory = path.join(process.cwd(), "knowledge");

type Manifest = {
  data_version: string;
  counts: { works: number; topics: number; chapters: number; summaries: number; documents: number; nodes: number; edges: number };
  files: { path: string; bytes: number; sha256: string }[];
};
export type KnowledgeDocument = {
  id: string;
  type: string;
  title: string;
  path: string;
  html_url: string;
  topics: string[];
  text: string;
};
let manifestCache: Manifest | undefined;
let bundleCache: { data_version: string; documents: KnowledgeDocument[] } | undefined;
export function getKnowledgeManifest(): Manifest {
  if (!manifestCache || process.env.NODE_ENV !== "production") {
    manifestCache = JSON.parse(readFileSync(path.join(directory, "manifest.json"), "utf8")) as Manifest;
  }
  return manifestCache;
}
export function getKnowledgeBundle() {
  if (!bundleCache || process.env.NODE_ENV !== "production") {
    bundleCache = JSON.parse(readFileSync(path.join(directory, "bundle.json"), "utf8"));
  }
  return bundleCache!;
}
export function knowledgeResponse(request: Request, name: string) {
  const manifest = getKnowledgeManifest();
  // Manifest allowlist also excludes directories, source code and traversal attempts.
  if (name !== "manifest.json" && !manifest.files.some(f => f.path === name)) {
    return new Response("Документ не найден\n", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
  }
  const data = readFileSync(path.join(directory, name));
  const etag = `"${createHash("sha256").update(data).digest("hex")}"`;
  const headers: Record<string, string> = {
    "Content-Type": name.endsWith(".json") ? "application/json; charset=utf-8" : name.endsWith(".md") ? "text/markdown; charset=utf-8" : "text/plain; charset=utf-8",
    "Cache-Control": "public, max-age=0, must-revalidate",
    "X-Content-Type-Options": "nosniff",
    "Access-Control-Allow-Origin": "*",
    "ETag": etag,
    "Link": `<${SITE_URL}/knowledge/index.md>; rel="index"`,
  };
  const condition = request.headers.get("if-none-match");
  if (condition?.split(",").some(v => v.trim() === "*" || v.trim().replace(/^W\//, "") === etag)) {
    return new Response(null, { status: 304, headers });
  }
  return new Response(data, { headers });
}
