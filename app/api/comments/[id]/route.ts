import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { comments } from "../../../../db/schema";

type RouteContext = { params: Promise<{ id: string }> };

export const runtime = "nodejs";

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

function unavailable() {
  return jsonError("Comments service is temporarily unavailable", 503);
}

async function matchesModerationKey(candidate: string, expected: string) {
  const encoder = new TextEncoder();
  const [candidateHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(candidate)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);
  const candidateBytes = new Uint8Array(candidateHash);
  const expectedBytes = new Uint8Array(expectedHash);
  let difference = candidateBytes.length ^ expectedBytes.length;
  for (let index = 0; index < candidateBytes.length; index += 1) {
    difference |= candidateBytes[index] ^ expectedBytes[index];
  }
  return difference === 0;
}

function suppliedModerationKey(request: Request) {
  const authorization = request.headers.get("authorization");
  if (authorization?.startsWith("Bearer ")) return authorization.slice(7).trim();
  return request.headers.get("x-moderation-key")?.trim() ?? "";
}

export async function DELETE(request: Request, { params }: RouteContext) {
  const moderationKey = process.env.MODERATION_KEY;
  if (!moderationKey) {
    return jsonError("Owner moderation is not configured", 503);
  }

  const candidate = suppliedModerationKey(request);
  if (!candidate || !(await matchesModerationKey(candidate, moderationKey))) {
    return jsonError("Forbidden", 403);
  }

  const { id: rawId } = await params;
  if (!/^\d{1,15}$/.test(rawId)) return jsonError("Invalid comment id", 400);
  const id = Number(rawId);
  if (!Number.isSafeInteger(id) || id < 1) return jsonError("Invalid comment id", 400);

  try {
    const db = await getDb();
    const [deleted] = await db
      .delete(comments)
      .where(eq(comments.id, id))
      .returning({ id: comments.id });
    if (!deleted) return jsonError("Comment not found", 404);
    return Response.json({ deleted: true, id: deleted.id });
  } catch {
    return unavailable();
  }
}
