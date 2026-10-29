/**
 * Prepare the sibling literature corpus for browser use without modifying its sources.
 * Run from the site directory with: node scripts/prepare-corpus.mjs
 */

import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDirectory, "..");
const sourceRoot = path.resolve(siteRoot, "..");
const outputRoot = path.resolve(siteRoot, "public", "corpus");
const markdownOutputRoot = path.resolve(outputRoot, "files");

const graphSource = path.resolve(sourceRoot, "graph.json");
const navigationSource = path.resolve(sourceRoot, "navigation.json");
const graphOutput = path.resolve(outputRoot, "graph.json");
const navigationOutput = path.resolve(outputRoot, "navigation.json");
const searchIndexOutput = path.resolve(outputRoot, "search-index.json");
const manifestOutput = path.resolve(outputRoot, "manifest.json");

function assertInside(base, candidate) {
  const relative = path.relative(base, candidate);
  if (relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative))) {
    return;
  }
  throw new Error(`Refusing path outside ${base}: ${candidate}`);
}

function toPosixPath(value) {
  return value.split(path.sep).join("/");
}

function isSafeRelativePath(value) {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    !path.isAbsolute(value) &&
    !value.includes("\\") &&
    value.split("/").every((part) => part !== "" && part !== "." && part !== "..")
  );
}

function publicFileUrl(relativePath) {
  return `/corpus/files/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
}

function redactPublicCredentials(markdown) {
  return markdown.replace(/\bsk-(?:proj-)?[A-Za-z0-9_-]{6,}\b/gi, "[REDACTED API KEY]");
}

function stableDocumentId(relativePath) {
  const digest = createHash("sha256").update(relativePath, "utf8").digest("hex").slice(0, 20);
  return `doc-${digest}`;
}

function getMarkdownFiles(directory, relativeDirectory = "") {
  const found = [];
  const entries = readdirSync(directory, { withFileTypes: true }).sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
  );

  for (const entry of entries) {
    const relativePath = relativeDirectory ? `${relativeDirectory}/${entry.name}` : entry.name;
    const absolutePath = path.resolve(directory, entry.name);

    if (entry.isSymbolicLink()) {
      continue;
    }
    if (entry.isDirectory()) {
      if (relativeDirectory === "" && (entry.name === "service" || entry.name === "site" || entry.name === ".git")) {
        continue;
      }
      found.push(...getMarkdownFiles(absolutePath, relativePath));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      const safePath = toPosixPath(relativePath);
      if (!isSafeRelativePath(safePath)) {
        throw new Error(`Unsafe source path: ${safePath}`);
      }
      found.push({ relativePath: safePath, absolutePath });
    }
  }

  return found;
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replaceAll("ё", "е");
}

function tokenize(value) {
  return normalizeSearchText(value).match(/[\p{L}\p{N}]+/gu) ?? [];
}

function addIfPresent(values, value) {
  if (typeof value === "string" && value.length > 0) values.push(value);
}

function workSearchFields(node) {
  if (!node || node.type !== "work") return [];
  const fields = [];
  addIfPresent(fields, node.title);
  addIfPresent(fields, node.summary);
  addIfPresent(fields, node.summary_short);
  addIfPresent(fields, node.year == null ? "" : String(node.year));
  addIfPresent(fields, node.venue);
  addIfPresent(fields, node.source_kind);
  addIfPresent(fields, node.verification_status);
  addIfPresent(fields, node.retrieval_status);
  addIfPresent(fields, node.importance_reason);
  addIfPresent(fields, node.importance_basis);
  addIfPresent(fields, node.language);
  for (const author of node.authors ?? []) addIfPresent(fields, author);
  for (const topic of node.topics ?? []) addIfPresent(fields, topic);
  for (const identifier of node.identifiers ?? []) addIfPresent(fields, identifier);
  for (const url of node.source_urls ?? []) addIfPresent(fields, url);
  return fields;
}

function makeDocumentMetadata(relativePath, graphNode, workNode) {
  const document = {
    id: stableDocumentId(relativePath),
    path: relativePath,
    url: publicFileUrl(relativePath),
    title: graphNode?.title ?? titleFromMarkdownPath(relativePath),
    kind: graphNode?.type ?? kindFromPath(relativePath),
  };

  if (graphNode?.id) document.entityId = graphNode.id;
  if (graphNode?.work_id) document.workId = graphNode.work_id;
  if (graphNode?.type === "work") {
    document.workId = graphNode.id;
    if (Array.isArray(graphNode.authors)) document.authors = graphNode.authors;
    if (graphNode.year !== undefined) document.year = graphNode.year;
    if (graphNode.summary !== undefined) document.summary = graphNode.summary;
    if (graphNode.summary_short !== undefined) document.summary_short = graphNode.summary_short;
    if (graphNode.source_kind !== undefined) document.sourceKind = graphNode.source_kind;
    if (graphNode.verification_status !== undefined) document.verificationStatus = graphNode.verification_status;
    if (graphNode.retrieval_status !== undefined) document.retrievalStatus = graphNode.retrieval_status;
    if (graphNode.importance !== undefined) document.importance = graphNode.importance;
    if (graphNode.importance_reason !== undefined) document.importanceReason = graphNode.importance_reason;
    if (graphNode.importance_basis !== undefined) document.importanceBasis = graphNode.importance_basis;
    if (graphNode.source_urls !== undefined) document.sourceUrls = graphNode.source_urls;
    if (graphNode.venue !== undefined) document.venue = graphNode.venue;
    if (graphNode.language !== undefined) document.language = graphNode.language;
    if (graphNode.reviewed !== undefined) document.reviewed = graphNode.reviewed;
  } else if (workNode) {
    document.workTitle = workNode.title;
  }

  return document;
}

function titleFromMarkdownPath(relativePath) {
  const name = path.posix.basename(relativePath, path.posix.extname(relativePath));
  return name.replaceAll("-", " ").replaceAll("_", " ");
}

function kindFromPath(relativePath) {
  const firstSegment = relativePath.split("/")[0];
  if (firstSegment === "materials") return "material";
  if (firstSegment === "works") return "work";
  if (firstSegment === "topics") return "topic";
  if (firstSegment === "indexes") return "index";
  return relativePath.toLowerCase() === "readme.md" ? "home" : "page";
}

function materialWorkSearchFields(graphNode, linkedWork) {
  if (graphNode?.type !== "material" || !linkedWork) return [];
  return workSearchFields(linkedWork);
}

if (!existsSync(graphSource) || !existsSync(navigationSource)) {
  throw new Error(`Expected graph.json and navigation.json in sibling source directory: ${sourceRoot}`);
}

const graph = JSON.parse(readFileSync(graphSource, "utf8"));
const navigation = JSON.parse(readFileSync(navigationSource, "utf8"));
if (!Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) {
  throw new Error("graph.json must contain nodes and edges arrays");
}

mkdirSync(outputRoot, { recursive: true });
mkdirSync(markdownOutputRoot, { recursive: true });

// Keep all graph/navigation source fields and URL values unchanged for the browser copy.
writeFileSync(graphOutput, `${JSON.stringify(graph)}\n`, "utf8");
writeFileSync(navigationOutput, `${JSON.stringify(navigation)}\n`, "utf8");

const graphByPath = new Map(graph.nodes.filter((node) => node.path).map((node) => [node.path, node]));
const graphById = new Map(graph.nodes.map((node) => [node.id, node]));
const markdownFiles = getMarkdownFiles(sourceRoot).sort((a, b) =>
  a.relativePath < b.relativePath ? -1 : a.relativePath > b.relativePath ? 1 : 0,
);

const documents = [];
const postings = Object.create(null);
const includedBytesByTopLevel = Object.create(null);
let includedMarkdownBytes = 0;

for (const [index, file] of markdownFiles.entries()) {
  assertInside(sourceRoot, file.absolutePath);
  const graphNode = graphByPath.get(file.relativePath);
  const linkedWork = graphNode?.work_id ? graphById.get(graphNode.work_id) : undefined;
  const targetPath = path.resolve(markdownOutputRoot, ...file.relativePath.split("/"));
  assertInside(markdownOutputRoot, targetPath);
  mkdirSync(path.dirname(targetPath), { recursive: true });
  const markdown = redactPublicCredentials(readFileSync(file.absolutePath, "utf8"));
  writeFileSync(targetPath, markdown, "utf8");
  // Provenance travels with the retelling when rebuilding from the research corpus.
  if (path.basename(file.absolutePath) === "summary.ru.md") {
    const metadataPath = path.join(path.dirname(file.absolutePath), "summary.meta.json");
    if (existsSync(metadataPath)) {
      const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
      writeFileSync(path.join(path.dirname(targetPath), "summary.meta.json"), `${JSON.stringify(metadata, null, 2)}\n`, "utf8");
    }
  }
  const document = makeDocumentMetadata(file.relativePath, graphNode, linkedWork);
  document.index = index;
  documents.push(document);

  const searchableParts = [
    document.title,
    document.path,
    document.kind,
    markdown,
    ...workSearchFields(graphNode),
    ...materialWorkSearchFields(graphNode, linkedWork),
  ];
  const uniqueTokens = new Set(searchableParts.flatMap(tokenize));
  for (const token of uniqueTokens) {
    (postings[token] ??= []).push(index);
  }

  const byteLength = Buffer.byteLength(markdown, "utf8");
  includedMarkdownBytes += byteLength;
  const topLevel = file.relativePath.split("/")[0];
  includedBytesByTopLevel[topLevel] = (includedBytesByTopLevel[topLevel] ?? 0) + byteLength;
}

const graphMaterialPaths = new Set(graph.nodes.filter((node) => node.type === "material").map((node) => node.path));
const localMaterialDocuments = documents.filter((document) => document.kind === "material").length;
const orphanMaterialPaths = documents
  .filter((document) => document.kind === "material" && !graphMaterialPaths.has(document.path))
  .map((document) => document.path);
const generatedAt = graph.generated_at ?? null;

const searchIndex = {
  schema_version: "1.0",
  generated_at: generatedAt,
  tokenization: {
    normalization: "Unicode NFKD, lowercase, combining marks removed; ё is folded to е.",
    tokens: "Unicode letters and numbers; one-character tokens are retained.",
    postings: "Each value is an ascending numeric index into documents; documents are sorted by original relative path.",
    indexed_content: "Markdown body and available title, authors, year, summary, topic, venue, verification, and provenance metadata.",
  },
  documents,
  postings,
  coverage: {
    included_markdown_count: documents.length,
    included_markdown_bytes: includedMarkdownBytes,
    included_by_top_level_bytes: includedBytesByTopLevel,
    graph_work_count: graph.nodes.filter((node) => node.type === "work").length,
    graph_material_count: graph.nodes.filter((node) => node.type === "material").length,
    local_material_markdown_count: localMaterialDocuments,
    local_material_files_without_graph_node: orphanMaterialPaths,
    excluded: [
      {
        path: "service/**",
        reason: "Generated service internals, source registers, and processing artifacts are not browser corpus documents.",
      },
      {
        path: "site/**",
        reason: "The literature-review web application and its implementation files are not source corpus documents.",
      },
      {
        path: "non-Markdown source files",
        reason: "Local Markdown files are mirrored and full-text indexed; retelling provenance sidecars, graph.json and navigation.json are copied separately.",
      },
    ],
    notes: [
      "Original Markdown paths are preserved below files/ and are safe relative paths.",
      "Markdown copies are sanitized for credential-like strings; original source files are not modified.",
      "graph.json and navigation.json retain all original fields, verification labels, provenance, limitations, and source URL distinctions.",
      "Documents without a graph node receive a stable path-derived ID and metadata from their local path; no bibliographic facts are inferred.",
    ],
  },
};

writeFileSync(searchIndexOutput, `${JSON.stringify(searchIndex)}\n`, "utf8");

const manifest = {
  schema_version: "1.0",
  generated_at: generatedAt,
  source_root: "..",
  public_base: "/corpus",
  graph: "graph.json",
  navigation: "navigation.json",
  search_index: "search-index.json",
  markdown_files_root: "files/",
  markdown_file_count: documents.length,
  markdown_bytes: includedMarkdownBytes,
  omitted: searchIndex.coverage.excluded,
};
writeFileSync(manifestOutput, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(
  `Prepared ${documents.length} Markdown documents (${includedMarkdownBytes.toLocaleString("en-US")} bytes); ` +
    `${Object.keys(postings).length.toLocaleString("en-US")} search terms.`,
);
console.log(`Output: ${outputRoot}`);
