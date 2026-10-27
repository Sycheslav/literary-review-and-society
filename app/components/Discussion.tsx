"use client";

import { useCallback, useEffect, useId, useState } from "react";
import type { FormEvent } from "react";

type Comment = {
  id: number;
  authorName: string;
  body: string;
  createdAt: string;
};

const AUTHOR_KEY = "literature-explorer-comment-author";
const MODERATION_KEY = "literature-explorer-moderation-key";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function readStorage(key: string) {
  try {
    return window.localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* хранилище недоступно — не страшно */
  }
}

/** Общее обсуждение работы. Комментарии хранятся в PostgreSQL (app/api/comments). */
export default function Discussion({ targetId }: { targetId: string }) {
  const formId = useId();
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [moderationKey, setModerationKey] = useState("");

  const load = useCallback(async () => {
    try {
      const response = await fetch(`/api/comments?targetId=${encodeURIComponent(targetId)}`);
      if (!response.ok) throw new Error(String(response.status));
      const json = (await response.json()) as { comments: Comment[] };
      setComments(json.comments);
      setUnavailable(false);
    } catch {
      setUnavailable(true);
    }
  }, [targetId]);

  useEffect(() => {
    setAuthor(readStorage(AUTHOR_KEY));
    setModerationKey(readStorage(MODERATION_KEY));
    load();
  }, [load]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!author.trim() || !body.trim()) {
      setError("Укажите имя и текст комментария.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetId, authorName: author.trim(), body: body.trim(), selectedQuote: null }),
      });
      if (!response.ok) throw new Error(String(response.status));
      const created = (await response.json()) as Comment;
      writeStorage(AUTHOR_KEY, author.trim());
      setComments((prev) => [...(prev ?? []), created]);
      setBody("");
    } catch {
      setError("Не удалось отправить комментарий. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  }

  async function remove(id: number) {
    if (!window.confirm("Удалить комментарий?")) return;
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      headers: { "X-Moderation-Key": moderationKey },
    });
    if (response.ok) setComments((prev) => (prev ?? []).filter((c) => c.id !== id));
    else window.alert("Не удалось удалить: проверьте ключ модератора.");
  }

  const count = comments?.length ?? 0;

  return (
    <details className="discussion" open={count > 0}>
      <summary>
        Обсуждение{count > 0 ? <span className="count">{count}</span> : null}
      </summary>

      {unavailable && <p className="muted">Обсуждение временно недоступно.</p>}

      {comments && comments.length > 0 && (
        <ol className="comments">
          {comments.map((c) => (
            <li key={c.id}>
              <p className="comment-head">
                <strong>{c.authorName}</strong>
                <time dateTime={c.createdAt}>{formatDate(c.createdAt)}</time>
                {moderationKey && (
                  <button type="button" className="link-button" onClick={() => remove(c.id)}>
                    удалить
                  </button>
                )}
              </p>
              <p className="comment-body">{c.body}</p>
            </li>
          ))}
        </ol>
      )}

      {!unavailable && (
        <form className="comment-form" onSubmit={submit}>
          <label htmlFor={`${formId}-body`} className="visually-hidden">
            Комментарий
          </label>
          <textarea
            id={`${formId}-body`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Заметка или вопрос коллегам по этой работе"
            maxLength={4000}
            rows={3}
          />
          <div className="comment-form-row">
            <label htmlFor={`${formId}-author`} className="visually-hidden">
              Имя
            </label>
            <input
              id={`${formId}-author`}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Ваше имя"
              maxLength={80}
            />
            <button type="submit" className="button" disabled={sending}>
              {sending ? "Отправка…" : "Отправить"}
            </button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      )}

      <details className="moderation">
        <summary>Модерация</summary>
        <input
          type="password"
          value={moderationKey}
          onChange={(e) => {
            setModerationKey(e.target.value);
            writeStorage(MODERATION_KEY, e.target.value);
          }}
          placeholder="Ключ модератора"
          aria-label="Ключ модератора"
        />
      </details>
    </details>
  );
}
