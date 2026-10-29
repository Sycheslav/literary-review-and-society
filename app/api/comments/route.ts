import { desc, eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { comments } from "../../../db/schema";
import {
  COMMENT_LIMITS,
  normalizeTargetId,
  validateNewComment,
} from "../../../lib/comments-validation";

const JSON_HEADERS = { "Content-Type": "application/json; charset=utf-8" };

export const runtime = "nodejs";

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: JSON_HEADERS });
}

function unavailable() {
  return jsonError("Comments service is temporarily unavailable", 503);
}

async function readBoundedJson(request: Request): Promise<
  | { ok: true; payload: unknown }
  | { ok: false; response: Response }
> {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return {
      ok: false,
      response: jsonError("Content-Type must be application/json", 415),
    };
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > COMMENT_LIMITS.requestBytes) {
    return { ok: false, response: jsonError("Request body is too large", 413) };
  }

  if (!request.body) {
    return { ok: false, response: jsonError("Request body is required", 400) };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > COMMENT_LIMITS.requestBytes) {
        await reader.cancel();
        return { ok: false, response: jsonError("Request body is too large", 413) };
      }
      chunks.push(value);
    }
  } catch {
    return { ok: false, response: jsonError("Unable to read request body", 400) };
  }

  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return {
      ok: true,
      payload: JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)),
    };
  } catch {
    return { ok: false, response: jsonError("Request body must be valid JSON", 400) };
  }
}

function toPublicComment(row: typeof comments.$inferSelect) {
  return {
    id: row.id,
    targetId: row.targetId,
    authorName: row.authorName,
    body: row.body,
    selectedQuote: row.selectedQuote,
    anchorOffset: row.anchorOffset,
    anchorPrefix: row.anchorPrefix,
    anchorSuffix: row.anchorSuffix,
    createdAt: row.createdAt,
  };
}

export async function GET(request: Request) {
  const targetId = normalizeTargetId(new URL(request.url).searchParams.get("targetId"));
  if (!targetId) {
    return jsonError(
      `targetId is required and must be at most ${COMMENT_LIMITS.targetId} characters`,
      400,
    );
  }

  try {
    const db = await getDb();
    const rows = await db
      .select()
      .from(comments)
      .where(eq(comments.targetId, targetId))
      .orderBy(desc(comments.createdAt), desc(comments.id))
      .limit(100);

    return Response.json(
      { comments: rows.reverse().map(toPublicComment) },
      { headers: JSON_HEADERS },
    );
  } catch {
    return unavailable();
  }
}

export async function POST(request: Request) {
  const parsed = await readBoundedJson(request);
  if (!parsed.ok) return parsed.response;

  const validated = validateNewComment(parsed.payload);
  if (!validated.ok) return jsonError(validated.error, 400);

  try {
    const db = await getDb();
    const [row] = await db.insert(comments).values(validated.value).returning();
    if (!row) return jsonError("Unable to create comment", 500);
    return Response.json(toPublicComment(row), { status: 201, headers: JSON_HEADERS });
  } catch {
    return unavailable();
  }
}
