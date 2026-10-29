export const COMMENT_LIMITS = {
  targetId: 200,
  authorName: 80,
  body: 4_000,
  selectedQuote: 1_000,
  anchorContext: 120,
  requestBytes: 8_192,
} as const;

export type NewComment = {
  targetId: string;
  authorName: string;
  body: string;
  selectedQuote: string | null;
  anchorOffset: number | null;
  anchorPrefix: string | null;
  anchorSuffix: string | null;
};

type ValidationResult =
  | { ok: true; value: NewComment }
  | { ok: false; error: string };

const CONTROL_CHARACTERS =
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;
const HTML_TAG = /<\/?[a-z][^>]*>/i;

function cleanText(value: string) {
  return value
    .normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL_CHARACTERS, "")
    .trim();
}

function cleanContext(value: string) {
  return value
    .normalize("NFC")
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL_CHARACTERS, "");
}

function hasValidLength(value: string, maximum: number) {
  return Array.from(value).length <= maximum;
}

export function normalizeTargetId(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const targetId = cleanText(value);
  if (!targetId || !hasValidLength(targetId, COMMENT_LIMITS.targetId)) return null;
  return targetId;
}

export function validateNewComment(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, error: "Request body must be an object" };
  }

  const payload = input as Record<string, unknown>;
  if (typeof payload.targetId !== "string") {
    return { ok: false, error: "targetId is required" };
  }
  if (typeof payload.authorName !== "string") {
    return { ok: false, error: "authorName is required" };
  }
  if (typeof payload.body !== "string") {
    return { ok: false, error: "body is required" };
  }
  if (
    payload.selectedQuote !== undefined &&
    payload.selectedQuote !== null &&
    typeof payload.selectedQuote !== "string"
  ) {
    return { ok: false, error: "selectedQuote must be a string" };
  }
  for (const field of ["anchorPrefix", "anchorSuffix"] as const) {
    const value = payload[field];
    if (value !== undefined && value !== null && typeof value !== "string") {
      return { ok: false, error: `${field} must be a string` };
    }
  }
  const rawAnchorOffset = payload.anchorOffset;
  if (
    rawAnchorOffset !== undefined &&
    rawAnchorOffset !== null &&
    (typeof rawAnchorOffset !== "number" ||
      !Number.isSafeInteger(rawAnchorOffset) ||
      rawAnchorOffset < 0 ||
      rawAnchorOffset > 2_147_483_647)
  ) {
    return { ok: false, error: "anchorOffset must be a non-negative integer" };
  }

  const targetId = normalizeTargetId(payload.targetId);
  if (!targetId) {
    return {
      ok: false,
      error: `targetId must contain 1-${COMMENT_LIMITS.targetId} characters`,
    };
  }

  const authorName = cleanText(payload.authorName).replace(/[\t\n ]+/g, " ");
  if (!authorName) return { ok: false, error: "authorName is required" };
  if (!hasValidLength(authorName, COMMENT_LIMITS.authorName)) {
    return { ok: false, error: `authorName must be at most ${COMMENT_LIMITS.authorName} characters` };
  }

  const body = cleanText(payload.body);
  if (!body) return { ok: false, error: "body is required" };
  if (!hasValidLength(body, COMMENT_LIMITS.body)) {
    return { ok: false, error: `body must be at most ${COMMENT_LIMITS.body} characters` };
  }

  const selectedQuote = typeof payload.selectedQuote === "string"
    ? cleanText(payload.selectedQuote)
    : null;
  if (selectedQuote && !hasValidLength(selectedQuote, COMMENT_LIMITS.selectedQuote)) {
    return {
      ok: false,
      error: `selectedQuote must be at most ${COMMENT_LIMITS.selectedQuote} characters`,
    };
  }

  const anchorPrefix = typeof payload.anchorPrefix === "string" ? cleanContext(payload.anchorPrefix) : null;
  const anchorSuffix = typeof payload.anchorSuffix === "string" ? cleanContext(payload.anchorSuffix) : null;
  if (
    [anchorPrefix, anchorSuffix].some(
      (value) => value !== null && !hasValidLength(value, COMMENT_LIMITS.anchorContext),
    )
  ) {
    return {
      ok: false,
      error: `anchor context must be at most ${COMMENT_LIMITS.anchorContext} characters`,
    };
  }

  if ([authorName, body].some((value) => HTML_TAG.test(value))) {
    return { ok: false, error: "HTML markup is not allowed" };
  }

  return {
    ok: true,
    value: {
      targetId,
      authorName,
      body,
      selectedQuote: selectedQuote || null,
      anchorOffset: typeof rawAnchorOffset === "number" ? rawAnchorOffset : null,
      anchorPrefix,
      anchorSuffix,
    },
  };
}
