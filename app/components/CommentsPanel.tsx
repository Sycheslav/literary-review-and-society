"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";

type Comment = {
  id: number | string;
  targetId: string;
  authorName: string;
  body: string;
  selectedQuote: string | null;
  createdAt: string;
};

export type CommentsPanelProps = {
  targetId: string;
  selectedQuote?: string | null;
};

const AUTHOR_STORAGE_KEY = "literature-explorer-comment-author";
const AUTHOR_MAX_LENGTH = 80;
const BODY_MAX_LENGTH = 4_000;
const QUOTE_MAX_LENGTH = 1_000;

function isComment(value: unknown): value is Comment {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    (typeof item.id === "number" || typeof item.id === "string") &&
    typeof item.targetId === "string" &&
    typeof item.authorName === "string" &&
    typeof item.body === "string" &&
    (typeof item.selectedQuote === "string" || item.selectedQuote === null) &&
    typeof item.createdAt === "string"
  );
}

function getErrorForStatus(status: number, action: "load" | "send" | "delete") {
  if (action === "delete" && status === 403) {
    return "Ключ модератора не принят. Проверьте его и попробуйте снова.";
  }
  if (action === "delete" && status === 404) {
    return "Комментарий уже удалён или не найден.";
  }
  if (status === 503 || status >= 500) {
    return "Сервис комментариев временно недоступен. Попробуйте позже.";
  }
  if (action === "send" && (status === 400 || status === 413 || status === 415)) {
    return "Не удалось отправить комментарий. Проверьте имя и длину текста.";
  }
  if (action === "delete") {
    return "Не удалось удалить комментарий. Проверьте ключ модератора.";
  }
  if (action === "load") {
    return "Не удалось загрузить комментарии. Попробуйте обновить список.";
  }
  return "Не удалось отправить комментарий. Попробуйте ещё раз.";
}

function formatDate(value: string) {
  // SQLite returns CURRENT_TIMESTAMP without a timezone. Treat that value as UTC.
  const normalized = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value)
    ? `${value.replace(" ", "T")}Z`
    : value;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return { dateTime: undefined, label: value };

  return {
    dateTime: date.toISOString(),
    label: new Intl.DateTimeFormat("ru-RU", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date),
  };
}

function sortComments(items: Comment[]) {
  return [...items].sort((a, b) => {
    const byDate = a.createdAt.localeCompare(b.createdAt);
    if (byDate !== 0) return byDate;
    return Number(a.id) - Number(b.id);
  });
}

function formatCommentCount(count: number) {
  const lastTwo = count % 100;
  const lastOne = count % 10;
  const noun = lastTwo >= 11 && lastTwo <= 14
    ? "комментариев"
    : lastOne === 1
      ? "комментарий"
      : lastOne >= 2 && lastOne <= 4
        ? "комментария"
        : "комментариев";
  return `${count.toLocaleString("ru-RU")} ${noun}`;
}

export function CommentsPanel({ targetId, selectedQuote }: CommentsPanelProps) {
  const headingId = useId();
  const authorHelpId = useId();
  const bodyHelpId = useId();
  const moderationHelpId = useId();
  const targetIdRef = useRef(targetId);
  targetIdRef.current = targetId;

  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [refreshCount, setRefreshCount] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [moderationKey, setModerationKey] = useState("");
  const [moderationError, setModerationError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    try {
      setAuthorName(window.localStorage.getItem(AUTHOR_STORAGE_KEY) ?? "");
    } catch {
      // The form remains usable when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setLoadError(null);
    setComments([]);

    const loadComments = async () => {
      try {
        const response = await fetch(
          `/api/comments?targetId=${encodeURIComponent(targetId)}`,
          { signal: controller.signal, cache: "no-store" },
        );
        if (!response.ok) throw new Error(getErrorForStatus(response.status, "load"));

        const payload: unknown = await response.json();
        if (
          typeof payload !== "object" ||
          payload === null ||
          !Array.isArray((payload as { comments?: unknown }).comments)
        ) {
          throw new Error("Не удалось прочитать список комментариев.");
        }
        const nextComments = (payload as { comments: unknown[] }).comments.filter(isComment);
        if (!controller.signal.aborted) setComments(sortComments(nextComments));
      } catch (error) {
        if (controller.signal.aborted) return;
        setLoadError(
          error instanceof Error && error.message
            ? error.message
            : "Не удалось загрузить комментарии. Попробуйте обновить список.",
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void loadComments();
    return () => controller.abort();
  }, [targetId, refreshCount]);

  const handleAuthorChange = (value: string) => {
    setAuthorName(value);
    try {
      if (value) window.localStorage.setItem(AUTHOR_STORAGE_KEY, value);
      else window.localStorage.removeItem(AUTHOR_STORAGE_KEY);
    } catch {
      // Saving a display name is best-effort and never blocks commenting.
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    const normalizedAuthor = authorName.trim();
    const normalizedBody = body.trim();
    if (!normalizedAuthor || !normalizedBody) {
      setFormError("Укажите имя и напишите комментарий.");
      return;
    }

    const rawQuote = selectedQuote?.trim() ?? "";
    const normalizedQuote = Array.from(rawQuote).slice(0, QUOTE_MAX_LENGTH).join("");
    const submissionTarget = targetId;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetId: submissionTarget,
          authorName: normalizedAuthor,
          body: normalizedBody,
          selectedQuote: normalizedQuote || null,
        }),
      });

      if (!response.ok) throw new Error(getErrorForStatus(response.status, "send"));
      const created: unknown = await response.json();
      if (!isComment(created)) throw new Error("Сервер сохранил комментарий, но вернул неверный ответ.");

      if (targetIdRef.current === submissionTarget) {
        setComments((current) => sortComments([...current, created]));
        setBody("");
        setFormSuccess("Комментарий опубликован.");
      }
    } catch (error) {
      setFormError(
        error instanceof Error && error.message
          ? error.message
          : "Не удалось отправить комментарий. Попробуйте ещё раз.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (comment: Comment) => {
    const id = String(comment.id);
    setDeletingId(id);
    setModerationError(null);

    try {
      const response = await fetch(`/api/comments/${encodeURIComponent(id)}`, {
        method: "DELETE",
        headers: { "X-Moderation-Key": moderationKey.trim() },
      });
      if (!response.ok) throw new Error(getErrorForStatus(response.status, "delete"));
      setComments((current) => current.filter((item) => String(item.id) !== id));
    } catch (error) {
      setModerationError(
        error instanceof Error && error.message
          ? error.message
          : "Не удалось удалить комментарий. Проверьте ключ модератора.",
      );
    } finally {
      setDeletingId(null);
    }
  };

  const quoteText = selectedQuote?.trim() ?? "";
  const quoteCharacters = Array.from(quoteText);
  const displayedQuote = quoteCharacters.slice(0, QUOTE_MAX_LENGTH).join("");
  const quoteWasTruncated = quoteCharacters.length > QUOTE_MAX_LENGTH;
  const canModerate = moderationKey.trim().length > 0;

  return (
    <section className="comment-panel" aria-labelledby={headingId}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 id={headingId}>Обсуждение</h3>
          <p className="!mb-0" aria-live="polite">
            {formatCommentCount(comments.length)}
          </p>
        </div>
        <button
          type="button"
          className="button button-quiet min-h-8 px-2 text-xs"
          onClick={() => setRefreshCount((count) => count + 1)}
          disabled={loading}
          aria-label="Обновить комментарии"
        >
          Обновить
        </button>
      </div>

      {quoteText && (
        <blockquote className="quote-box mb-3" aria-label="Цитируемый фрагмент">
          <span className="mb-1 block font-semibold">Комментарий к фрагменту</span>
          <span>{displayedQuote}</span>
          {quoteWasTruncated && <span className="mt-1 block text-stone-500">Цитата сокращена до 1 000 знаков.</span>}
        </blockquote>
      )}

      <form className="comment-form" onSubmit={handleSubmit}>
        <label className="grid gap-1 text-xs font-medium text-stone-700" htmlFor={`${headingId}-author`}>
          Ваше имя
          <input
            id={`${headingId}-author`}
            name="authorName"
            type="text"
            autoComplete="name"
            maxLength={AUTHOR_MAX_LENGTH}
            value={authorName}
            onChange={(event) => handleAuthorChange(event.currentTarget.value)}
            aria-describedby={authorHelpId}
            required
            placeholder="Например, Анна"
          />
        </label>
        <span id={authorHelpId} className="-mt-1 text-[10px] text-stone-500">
          Имя сохранится в этом браузере.
        </span>

        <label className="grid gap-1 text-xs font-medium text-stone-700" htmlFor={`${headingId}-body`}>
          Комментарий
          <textarea
            id={`${headingId}-body`}
            name="body"
            maxLength={BODY_MAX_LENGTH}
            value={body}
            onChange={(event) => {
              setBody(event.currentTarget.value);
              setFormError(null);
              setFormSuccess(null);
            }}
            aria-describedby={bodyHelpId}
            required
            placeholder="Поделитесь наблюдением или задайте вопрос…"
          />
        </label>
        <div id={bodyHelpId} className="-mt-1 flex justify-between gap-3 text-[10px] text-stone-500">
          <span>До 4 000 знаков</span>
          <span aria-live="off">{Array.from(body).length.toLocaleString("ru-RU")} / {BODY_MAX_LENGTH}</span>
        </div>

        {formError && <p className="error-text" role="alert">{formError}</p>}
        {formSuccess && <p className="success-text" role="status">{formSuccess}</p>}

        <button type="submit" className="button button-primary justify-self-start" disabled={isSubmitting}>
          {isSubmitting ? "Отправляем…" : "Опубликовать"}
        </button>
      </form>

      <div className="moderation-row items-center gap-3 border-t border-stone-200 pt-2">
        <details className="min-w-0 flex-1">
          <summary className="cursor-pointer text-xs font-medium text-stone-600">Настройки модератора</summary>
          <div className="moderation-form">
            <label className="grid gap-1 text-xs font-medium text-stone-700" htmlFor={`${headingId}-moderation-key`}>
              Ключ модератора
              <input
                id={`${headingId}-moderation-key`}
                type="password"
                autoComplete="off"
                value={moderationKey}
                onChange={(event) => {
                  setModerationKey(event.currentTarget.value);
                  setModerationError(null);
                }}
                aria-describedby={moderationHelpId}
                placeholder="Введите ключ"
              />
            </label>
            <span id={moderationHelpId} className="text-[10px] text-stone-500">
              Ключ действует, пока открыта эта страница, и не сохраняется в браузере.
            </span>
            {moderationError && <p className="error-text" role="alert">{moderationError}</p>}
          </div>
        </details>
        <span className="shrink-0 text-[10px] text-stone-500">Общие комментарии</span>
      </div>

      <div className="mt-2" aria-busy={loading}>
        {loading && <p className="loading py-3" role="status">Загружаем обсуждение…</p>}
        {!loading && loadError && (
          <div className="py-2" role="alert">
            <p className="error-text">{loadError}</p>
            <button
              type="button"
              className="button mt-2 min-h-8 px-2 text-xs"
              onClick={() => setRefreshCount((count) => count + 1)}
            >
              Попробовать снова
            </button>
          </div>
        )}
        {!loading && !loadError && comments.length === 0 && (
          <p className="py-3 text-xs text-stone-500">Пока нет комментариев. Начните обсуждение.</p>
        )}
        {!loading && !loadError && comments.length > 0 && (
          <ol className="comment-list" aria-label="Комментарии к материалу">
            {comments.map((comment) => {
              const date = formatDate(comment.createdAt);
              const commentId = String(comment.id);
              return (
                <li className="comment" key={commentId}>
                  <div className="comment-head">
                    <strong>{comment.authorName}</strong>
                    <div className="flex items-center gap-2">
                      <time dateTime={date.dateTime}>{date.label}</time>
                      {canModerate && (
                        <button
                          type="button"
                          className="comment-delete"
                          onClick={() => void handleDelete(comment)}
                          disabled={deletingId !== null}
                          aria-label={`Удалить комментарий пользователя ${comment.authorName}`}
                        >
                          {deletingId === commentId ? "Удаляем…" : "Удалить"}
                        </button>
                      )}
                    </div>
                  </div>
                  {comment.selectedQuote && (
                    <blockquote className="quote-box mt-2">{comment.selectedQuote}</blockquote>
                  )}
                  <p>{comment.body}</p>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}
