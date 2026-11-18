import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

type Work = {
  id: string;
  aliases: string[];
  kind?: string | null;
  topics?: string[];
  status: "unprocessed" | "accepted_full" | "accepted_partial";
  revision?: string;
  package_sha256?: string;
  schema_version?: string;
  concept_revision?: string;
  data?: Record<string, unknown>;
};
type Snapshot = {
  snapshot: string;
  payload: { format: string; works: Work[]; topic_ids?: string[]; concept_question_ids?: string[] };
};
type Selection = {
  scope?: unknown;
  ids?: unknown;
  kind?: unknown;
  type?: unknown;
  topic?: unknown;
  concept_question?: unknown;
  min_relevance?: unknown;
  min_evidence_strength?: unknown;
  min_reproducibility?: unknown;
  min_transferability?: unknown;
  min_priority?: unknown;
  question_ids?: unknown;
  include_nonreported?: unknown;
  fields?: unknown;
  limit?: unknown;
  cursor?: unknown;
  format?: unknown;
};
type NormalizedSelection = {
  scope?: string;
  ids?: string[];
  kind?: string;
  type?: string;
  topic?: string;
  concept_question?: string;
  min_relevance?: number;
  min_evidence_strength?: number;
  min_reproducibility?: number;
  min_transferability?: number;
  min_priority?: number;
  question_ids?: string[];
  include_nonreported: boolean;
  fields: string[];
  limit?: number;
  cursor?: string;
  format: "json" | "jsonl";
};
type Extraction = {
  snapshot: string;
  selection: Record<string, unknown>;
  coverage: Record<string, unknown>;
  works: Record<string, unknown>[];
  complete: boolean;
  truncated?: boolean;
  next_cursor?: string | null;
};

const fieldsAllowed = new Set(["findings", "author_conclusions", "answers", "publication_notice", "prompts", "concept_links", "scores"]);
const revokedSnapshots = new Set(["sha256:f201918220d6348b776c1dc5b5854a59c3e00cbc8949458c7bc5cb5269ce17ad"]);
const kinds = new Set(["research", "review", "project", "dataset", "web_material"]);
const scoreFilters = [
  ["min_relevance", "R"],
  ["min_evidence_strength", "E"],
  ["min_reproducibility", "P"],
  ["min_transferability", "T"],
] as const;
const priorityFilter = ["min_priority", "priority_hypothesis"] as const;
class RequestError extends Error {
  constructor(public code: string, message: string, public status = 400) { super(message); }
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function exactKeys(value: Record<string, unknown>, keys: string[]): boolean {
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}

function isHttpsUrl(value: unknown): value is string {
  if (typeof value !== "string" || !value.startsWith("https://")) return false;
  try { return new URL(value).protocol === "https:"; }
  catch { return false; }
}

function isPublicationNotice(value: unknown): value is Record<string, unknown> {
  if (!isRecord(value) || !exactKeys(value, ["format", "attributions", "changes_description_en", "revision_changes_en", "use_scope_en"])) return false;
  if (value.format !== "publication-attribution-notice-v1" || !Array.isArray(value.attributions) || value.attributions.length < 1) return false;
  for (const field of ["changes_description_en", "revision_changes_en", "use_scope_en"]) if (typeof value[field] !== "string" || !value[field]) return false;
  const sourceIds = new Set<string>();
  for (const item of value.attributions) {
    if (!isRecord(item) || typeof item.source_id !== "string" || !/^[a-z][a-z0-9_]{0,63}$/.test(item.source_id) || sourceIds.has(item.source_id)) return false;
    sourceIds.add(item.source_id);
    if (typeof item.citation !== "string" || !item.citation || !isHttpsUrl(item.source_url)) return false;
    const noLicense = item.license_name === null && item.license_url === null;
    if (noLicense) {
      if (!exactKeys(item, ["source_id", "citation", "source_url", "license_name", "license_url", "license_status", "scope_note_en"])) return false;
      if (item.license_status !== "not_independently_established" || typeof item.scope_note_en !== "string" || !item.scope_note_en) return false;
    } else {
      if (!exactKeys(item, ["source_id", "citation", "source_url", "license_name", "license_url", "license_basis_en"])) return false;
      if (item.source_id === "supplement_pdf" || typeof item.license_name !== "string" || !item.license_name || !isHttpsUrl(item.license_url) || typeof item.license_basis_en !== "string" || !item.license_basis_en) return false;
    }
  }
  return true;
}

function loadSnapshot(id?: string): Snapshot {
  try {
    if (id && revokedSnapshots.has(id)) throw new RequestError("snapshot_revoked", "The requested snapshot has been revoked.", 410);
    const file = id
      ? path.join(process.cwd(), "knowledge/en/snapshots", `${id.slice(7)}.json`)
      : path.join(process.cwd(), "knowledge/en/snapshot.json");
    const wrapper = JSON.parse(readFileSync(file, "utf8"));
    if (revokedSnapshots.has(wrapper.snapshot)) throw new RequestError("snapshot_revoked", "The current English snapshot has been revoked.", id ? 410 : 503);
    if ((id && wrapper.snapshot !== id) || typeof wrapper.payload_json !== "string" || wrapper.snapshot !== `sha256:${createHash("sha256").update(wrapper.payload_json).digest("hex")}`) throw new Error();
    const payload = JSON.parse(wrapper.payload_json);
    if (payload.format !== "literature-en-snapshot-v1-draft" || !Array.isArray(payload.works)) throw new Error();
    for (const work of payload.works) {
      if (isRecord(work) && isRecord(work.data) && Object.prototype.hasOwnProperty.call(work.data, "publication_notice") && !isPublicationNotice(work.data.publication_notice)) throw new Error();
    }
    return { snapshot: wrapper.snapshot, payload };
  } catch (error) {
    if (error instanceof RequestError) throw error;
    throw new RequestError(id ? "snapshot_expired" : "snapshot_unavailable", id ? "The requested snapshot is unavailable or invalid." : "The English snapshot is unavailable or invalid.", id ? 410 : 503);
  }
}

function validate(input: Selection): NormalizedSelection {
  const allowed = new Set(["scope", "ids", "kind", "type", "topic", "concept_question", ...scoreFilters.map(([name]) => name), priorityFilter[0], "question_ids", "include_nonreported", "fields", "limit", "cursor", "format"]);
  if (!input || typeof input !== "object" || Array.isArray(input) || Object.keys(input).some(k => !allowed.has(k))) throw new RequestError("invalid_request", "Unsupported request parameter.");
  if (input.kind !== undefined && input.type !== undefined) throw new RequestError("invalid_selection", "Use either type or kind, not both.");
  const selectedKind = input.kind ?? input.type;
  if (input.scope !== undefined && input.ids !== undefined || input.scope === undefined && input.ids === undefined && selectedKind === undefined || input.scope !== undefined && input.scope !== "all") throw new RequestError("invalid_selection", "Choose scope all, kind, or a nonempty list of IDs.");
  if (selectedKind !== undefined && (typeof selectedKind !== "string" || !kinds.has(selectedKind))) throw new RequestError("invalid_filter", "Unsupported work kind.");
  if (input.ids !== undefined && (!Array.isArray(input.ids) || !input.ids.length || input.ids.length > 1000 || input.ids.some(x => typeof x !== "string" || !/^[A-Za-z0-9._:-]{1,300}$/.test(x)))) throw new RequestError("invalid_selection", "Choose a nonempty list of valid IDs.");
  if (input.topic !== undefined && (typeof input.topic !== "string" || !/^[a-z0-9][a-z0-9_-]{0,99}$/.test(input.topic))) throw new RequestError("invalid_filter", "Invalid topic filter.");
  if (input.concept_question !== undefined && (typeof input.concept_question !== "string" || !/^[A-Za-z0-9._:-]{1,100}$/.test(input.concept_question))) throw new RequestError("invalid_filter", "Invalid concept question filter.");
  for (const [name] of scoreFilters) {
    const value = input[name];
    if (value !== undefined && (!Number.isInteger(value) || Number(value) < 0 || Number(value) > 4)) throw new RequestError("invalid_filter", `${name} must be an integer from 0 to 4.`);
  }
  if (input.min_priority !== undefined && (!Number.isFinite(input.min_priority) || Number(input.min_priority) < 0 || Number(input.min_priority) > 100)) throw new RequestError("invalid_filter", "min_priority must be a number from 0 to 100.");
  if (input.limit !== undefined && (!Number.isInteger(input.limit) || Number(input.limit) < 1 || Number(input.limit) > 100)) throw new RequestError("invalid_limit", "Limit must be an integer from 1 to 100.");
  if (input.cursor !== undefined && (typeof input.cursor !== "string" || input.cursor.length > 2000 || input.limit === undefined)) throw new RequestError("invalid_cursor", "The cursor is invalid.");
  const format = input.format === undefined ? "json" : input.format;
  if (format !== "json" && format !== "jsonl") throw new RequestError("invalid_format", "Format must be json or jsonl.");
  if (format === "jsonl" && (input.limit !== undefined || input.cursor !== undefined)) throw new RequestError("invalid_format", "JSONL exports are complete downloads and do not use cursors.");
  const fields = input.fields === undefined ? ["findings", "author_conclusions"] : input.fields;
  if (!Array.isArray(fields) || !fields.length || fields.some(f => typeof f !== "string" || !fieldsAllowed.has(f)) || new Set(fields).size !== fields.length) throw new RequestError("invalid_fields", "Choose unique supported fields.");
  const hasAnswers = (fields as string[]).includes("answers");
  if (hasAnswers !== (input.question_ids !== undefined) || (!hasAnswers && input.include_nonreported !== undefined)) throw new RequestError("invalid_selection", "Answer requests require question_ids, and answer options require the answers field.");
  if (input.question_ids !== undefined && (!Array.isArray(input.question_ids) || input.question_ids.length < 1 || input.question_ids.length > 90 || input.question_ids.some(id => typeof id !== "string" || !/^Q(?:0[1-9]|[1-8][0-9]|90)$/.test(id)) || new Set(input.question_ids).size !== input.question_ids.length)) throw new RequestError("invalid_selection", "Choose unique question IDs from Q01 through Q90.");
  if (input.include_nonreported !== undefined && typeof input.include_nonreported !== "boolean") throw new RequestError("invalid_selection", "include_nonreported must be a boolean.");
  return {
    scope: input.scope as string | undefined,
    ids: input.ids as string[] | undefined,
    kind: selectedKind as string | undefined,
    topic: input.topic as string | undefined,
    concept_question: input.concept_question as string | undefined,
    ...Object.fromEntries(scoreFilters.filter(([name]) => input[name] !== undefined).map(([name]) => [name, input[name]])),
    ...(input.min_priority !== undefined && {min_priority: Number(input.min_priority)}),
    ...(hasAnswers && {question_ids: [...(input.question_ids as string[])].sort()}),
    include_nonreported: hasAnswers && input.include_nonreported === true,
    fields: (fields as string[]).sort(),
    limit: input.limit as number | undefined,
    cursor: input.cursor as string | undefined,
    format,
  };
}

function scoreValue(work: Work, dimension: string): number | undefined {
  if (!work.data || !Array.isArray(work.data.scores)) return undefined;
  const matching = work.data.scores.filter((score): score is Record<string, unknown> => isRecord(score) && score.dimension === dimension);
  const maximum = dimension === "priority_hypothesis" ? 100 : 4;
  const value = matching[0]?.value;
  if (matching.length !== 1 || typeof value !== "number" || !Number.isFinite(value) || (dimension !== "priority_hypothesis" && !Number.isInteger(value)) || value < 0 || value > maximum) return undefined;
  return value;
}

function hasConceptLink(work: Work, question: string): boolean {
  return Array.isArray(work.data?.concept_links) && (work.data.concept_links as unknown[]).some(link => isRecord(link) && link.concept_question_id === question);
}

function matches(work: Work, criteria: NormalizedSelection): boolean {
  if (criteria.kind && work.kind !== criteria.kind) return false;
  if (criteria.topic && !(work.topics ?? []).includes(criteria.topic)) return false;
  if (criteria.concept_question && !hasConceptLink(work, criteria.concept_question)) return false;
  for (const [name, dimension] of scoreFilters) {
    const minimum = criteria[name];
    if (minimum !== undefined) {
      const value = scoreValue(work, dimension);
      if (value === undefined || value < minimum) return false;
    }
  }
  if (criteria.min_priority !== undefined) {
    const value = scoreValue(work, priorityFilter[1]);
    if (value === undefined || value < criteria.min_priority) return false;
  }
  return true;
}

export function extract(input: Selection): Extraction {
  const criteria = validate(input);
  const normalized = {
    scope: criteria.scope ?? null,
    kind: criteria.kind ?? null,
    type: criteria.kind ?? null,
    ids: criteria.ids ? [...criteria.ids].sort() : null,
    topic: criteria.topic ?? null,
    concept_question: criteria.concept_question ?? null,
    min_relevance: criteria.min_relevance ?? null,
    min_evidence_strength: criteria.min_evidence_strength ?? null,
    min_reproducibility: criteria.min_reproducibility ?? null,
    min_transferability: criteria.min_transferability ?? null,
    min_priority: criteria.min_priority ?? null,
    ...(criteria.fields.includes("answers") && {
      question_ids: criteria.question_ids,
      include_nonreported: criteria.include_nonreported,
    }),
    fields: criteria.fields,
    limit: criteria.limit ?? null,
    format: criteria.format,
  };
  const queryHash = createHash("sha256").update(JSON.stringify(normalized)).digest("hex");
  let offset = 0, snapshotId: string | undefined;
  if (criteria.cursor) {
    try {
      const cursor = JSON.parse(Buffer.from(criteria.cursor, "base64url").toString("utf8"));
      const body = `${cursor.s}:${cursor.q}:${cursor.o}`;
      if (!/^sha256:[a-f0-9]{64}$/.test(cursor.s) || cursor.q !== queryHash || !Number.isSafeInteger(cursor.o) || cursor.o <= 0 || cursor.c !== createHash("sha256").update(body).digest("hex") || Buffer.from(JSON.stringify(cursor)).toString("base64url") !== criteria.cursor) throw new Error();
      snapshotId = cursor.s;
      offset = cursor.o;
    } catch { throw new RequestError("invalid_cursor", "The cursor is invalid or does not match the request."); }
  }
  const snapshot = loadSnapshot(snapshotId);
  const topicIds = new Set(snapshot.payload.topic_ids ?? snapshot.payload.works.flatMap(work => work.topics ?? []));
  if (criteria.topic && !topicIds.has(criteria.topic)) throw new RequestError("invalid_filter", "Unknown topic.");
  const conceptIds = new Set(snapshot.payload.concept_question_ids ?? snapshot.payload.works.flatMap(work => Array.isArray(work.data?.concept_links) ? (work.data.concept_links as unknown[]).flatMap(link => isRecord(link) && typeof link.concept_question_id === "string" ? [link.concept_question_id] : []) : []));
  if (criteria.concept_question && !conceptIds.has(criteria.concept_question)) throw new RequestError("invalid_filter", "Unknown concept question.");

  const index = new Map<string, string>();
  for (const work of snapshot.payload.works) for (const name of [work.id, ...work.aliases]) index.set(name, work.id);
  const selected = new Set<string>(), unknown = new Set<string>(), duplicates = new Set<string>();
  if (criteria.scope === "all") {
    for (const work of snapshot.payload.works) selected.add(work.id);
  } else if (!criteria.ids) {
    for (const work of snapshot.payload.works) if (work.kind === criteria.kind) selected.add(work.id);
  } else {
    for (const id of criteria.ids) {
    const canonical = index.get(id);
    if (!canonical) unknown.add(id);
    else if (selected.has(canonical)) duplicates.add(canonical);
    else selected.add(canonical);
    }
  }
  const candidates = snapshot.payload.works.filter(work => selected.has(work.id));
  const filteredOut = candidates.filter(work => !matches(work, criteria)).map(work => work.id);
  const chosen = candidates.filter(work => matches(work, criteria));
  const accepted = chosen.filter(work => work.status === "accepted_full" || work.status === "accepted_partial");
  const requestedQuestions = new Set(criteria.question_ids ?? []);
  const works = accepted.map(work => {
    const data = work.data!;
    const selectedFields = Object.fromEntries(criteria.fields.map(field => {
      if (field !== "answers") return [field, data[field]];
      const answers = Array.isArray(data.answers) ? data.answers : [];
      const selected = answers.filter((answer): answer is Record<string, unknown> => isRecord(answer)
        && typeof answer.question_id === "string"
        && requestedQuestions.has(answer.question_id)
        && (criteria.include_nonreported || answer.status === "reported"));
      return [field, selected.map(answer => ({
        question_id: answer.question_id,
        status: answer.status,
        value: answer.value,
        ...(typeof answer.origin === "string" && {origin: answer.origin}),
        evidence: Array.isArray(answer.evidence) ? answer.evidence : [],
        ...(criteria.include_nonreported && answer.status !== "reported" && {
          ...(typeof answer.note_en === "string" && {note_en: answer.note_en}),
          ...(Array.isArray(answer.searched_source_refs) && {searched_source_refs: answer.searched_source_refs}),
        }),
      }))];
    }));
    if (criteria.fields.includes("publication_notice")) selectedFields.publication_notice = data.publication_notice ?? null;
    return {
      id: work.id,
      kind: work.kind ?? null,
      topics: work.topics ?? [],
      status: work.status,
      revision: work.revision,
      package_sha256: work.package_sha256,
      schema_version: work.schema_version,
      concept_revision: work.concept_revision,
      results_extraction_scope: data.results_extraction_scope,
      sources: data.sources,
      ...selectedFields,
      ...(!criteria.fields.includes("publication_notice") && data.publication_notice !== undefined && {publication_notice: data.publication_notice}),
    };
  });
  const coverage = {
    candidate_ids: [...selected].sort(),
    expected_ids: chosen.map(work => work.id),
    found_ids: accepted.map(work => work.id),
    full_ids: chosen.filter(work => work.status === "accepted_full").map(work => work.id),
    partial_ids: chosen.filter(work => work.status === "accepted_partial").map(work => work.id),
    unprocessed_ids: chosen.filter(work => work.status === "unprocessed").map(work => work.id),
    filtered_out_ids: filteredOut,
    unknown_ids: [...unknown].sort(),
    duplicate_ids: [...duplicates].sort(),
  };
  const selection = {
    ids: chosen.map(work => work.id),
    filters: {type: criteria.kind ?? null, topic: criteria.topic ?? null, concept_question: criteria.concept_question ?? null, min_relevance: criteria.min_relevance ?? null, min_evidence_strength: criteria.min_evidence_strength ?? null, min_reproducibility: criteria.min_reproducibility ?? null, min_transferability: criteria.min_transferability ?? null, min_priority: criteria.min_priority ?? null},
    fields: criteria.fields,
    ...(criteria.question_ids && {question_ids: criteria.question_ids}),
    ...(criteria.fields.includes("answers") && {include_nonreported: criteria.include_nonreported}),
    language: "en",
    format: criteria.format,
  };
  if (criteria.limit === undefined) return { snapshot: snapshot.snapshot, selection, coverage, works, complete: true };

  const parts = works.flatMap(work => {
    const findings = criteria.fields.includes("findings") ? ((work as Record<string, unknown>).findings as Record<string, unknown>[]) : [];
    const pieces: Record<string, unknown>[] = [];
    for (const finding of findings) {
      const bytes = Buffer.from(JSON.stringify(finding), "utf8");
      if (bytes.length <= 16384) pieces.push({findings: [finding]});
      else {
        const count = Math.ceil(bytes.length / 16384);
        for (let i = 0; i < count; i++) pieces.push({finding_fragment: {finding_id: finding.finding_id, index: i, count, encoding: "base64-json-utf8", data: bytes.subarray(i * 16384, (i + 1) * 16384).toString("base64")}});
      }
    }
    if (!pieces.length) pieces.push(criteria.fields.includes("findings") ? {findings: []} : {});
    return pieces.map((piece, index) => {
      const part: Record<string, unknown> = {...work, part_index: index, part_count: pieces.length};
      delete part.findings;
      Object.assign(part, piece);
      if (index) { delete part.author_conclusions; delete part.answers; delete part.prompts; delete part.concept_links; delete part.scores; }
      return part;
    });
  });
  if (offset && (offset >= parts.length || offset % criteria.limit !== 0)) throw new RequestError("invalid_cursor", "The cursor position is invalid.");
  const next = offset + criteria.limit;
  const truncated = next < parts.length;
  const body = `${snapshot.snapshot}:${queryHash}:${next}`;
  const next_cursor = truncated ? Buffer.from(JSON.stringify({s: snapshot.snapshot, q: queryHash, o: next, c: createHash("sha256").update(body).digest("hex")})).toString("base64url") : null;
  return {snapshot: snapshot.snapshot, selection, coverage, works: parts.slice(offset, next), truncated, next_cursor, complete: !truncated};
}

export function jsonlResponse(result: Extraction): Response {
  const records = result.works.map(work => JSON.stringify({type: "work", ...work})).join("\n");
  const recordsBytes = records ? Buffer.from(`${records}\n`, "utf8") : Buffer.alloc(0);
  const manifest = {
    type: "manifest",
    format: "literature-en-jsonl-v1",
    snapshot: result.snapshot,
    selection: result.selection,
    coverage: result.coverage,
    record_count: result.works.length,
    records_bytes: recordsBytes.byteLength,
    records_sha256: createHash("sha256").update(recordsBytes).digest("hex"),
    records_encoding: "UTF-8",
    line_ending: "LF",
  };
  const bytes = Buffer.concat([Buffer.from(`${JSON.stringify(manifest)}\n`, "utf8"), recordsBytes]);
  const headers = {
    "Content-Type": "application/x-ndjson; charset=utf-8",
    "Content-Length": String(bytes.byteLength),
    "Content-Disposition": "attachment; filename=\"literature-extraction.jsonl\"",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "ETag": `"${createHash("sha256").update(bytes).digest("hex")}"`,
    "X-Corpus-Snapshot": result.snapshot,
  };
  return new Response(bytes, {headers});
}

export function errorResponse(error: unknown) {
  const e = error instanceof RequestError ? error : new RequestError("internal_error", "Unable to process the request.", 500);
  return Response.json({error: {code: e.code, message: e.message}}, {status: e.status, headers: {"Cache-Control": "no-store", "Access-Control-Allow-Origin": "*"}});
}

export function parseGet(request: Request): Selection {
  const params = new URL(request.url).searchParams;
  const allowed = new Set(["scope", "ids", "kind", "type", "topic", "concept_question", ...scoreFilters.map(([name]) => name), priorityFilter[0], "question_ids", "include_nonreported", "fields", "limit", "cursor", "format"]);
  if ([...params.keys()].some(key => !allowed.has(key)) || [...new Set(params.keys())].some(key => params.getAll(key).length !== 1)) throw new RequestError("invalid_request", "Unsupported or repeated request parameter.");
  const numbers = Object.fromEntries(scoreFilters.filter(([name]) => params.has(name)).map(([name]) => [name, /^(?:[0-4])$/.test(params.get(name)!) ? Number(params.get(name)) : NaN]));
  const priority = params.has(priorityFilter[0]) ? {[priorityFilter[0]]: /^(?:\d+(?:\.\d+)?|\.\d+)$/.test(params.get(priorityFilter[0])!) ? Number(params.get(priorityFilter[0])) : NaN} : {};
  return {
    ...(params.has("scope") && {scope: params.get("scope")}),
    ...(params.has("ids") && {ids: params.get("ids")!.split(",")}),
    ...(params.has("kind") && {kind: params.get("kind")}),
    ...(params.has("type") && {type: params.get("type")}),
    ...(params.has("topic") && {topic: params.get("topic")}),
    ...(params.has("concept_question") && {concept_question: params.get("concept_question")}),
    ...(params.has("question_ids") && {question_ids: params.get("question_ids")!.split(",")}),
    ...(params.has("include_nonreported") && {include_nonreported: params.get("include_nonreported") === "true" ? true : params.get("include_nonreported") === "false" ? false : "invalid"}),
    ...numbers,
    ...priority,
    ...(params.has("limit") && {limit: /^(?:[1-9]|[1-9][0-9]|100)$/.test(params.get("limit")!) ? Number(params.get("limit")) : NaN}),
    ...(params.has("cursor") && {cursor: params.get("cursor")}),
    ...(params.has("format") && {format: params.get("format")}),
    ...(params.has("fields") && {fields: params.get("fields")!.split(",")}),
  };
}

export async function parsePost(request: Request): Promise<Selection> {
  const length = request.headers.get("content-length");
  if (length && /^\d+$/.test(length) && Number(length) > 100_000) throw new RequestError("request_too_large", "Request body is too large.", 413);
  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  if (reader) while (true) {
    const {value, done} = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 100_000) { await reader.cancel(); throw new RequestError("request_too_large", "Request body is too large.", 413); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try { return JSON.parse(new TextDecoder("utf-8", {fatal: true}).decode(bytes)); }
  catch { throw new RequestError("invalid_json", "Expected a valid JSON request."); }
}
