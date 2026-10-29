"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent as ReactMouseEvent } from "react";
import {
  anchorFromSelection,
  buildTextIndex,
  rangeForAnchor,
} from "@/lib/text-anchors";
import type { TextAnchor, TextIndex } from "@/lib/text-anchors";

type Comment = {
  id: number;
  targetId: string;
  authorName: string;
  body: string;
  selectedQuote: string | null;
  anchorOffset: number | null;
  anchorPrefix: string | null;
  anchorSuffix: string | null;
  createdAt: string;
};

type LoadedComments = { targetId: string; comments: Comment[]; unavailable: boolean };
type Draft = { anchor: TextAnchor; left: number; top: number; mobile: boolean };
type Pin = { id: number; number: number; left: number; top: number; quote: string };

type HighlightRuntime = {
  CSS?: { highlights?: { set(name: string, value: unknown): void; delete(name: string): void } };
  Highlight?: new (...ranges: Range[]) => unknown;
};

const AUTHOR_KEY = "literature-explorer-comment-author";
const MODERATION_KEY = "literature-explorer-moderation-key";
const HIGHLIGHT_NAME = "page-comments";
const ACTIVE_HIGHLIGHT_NAME = "page-comment-active";
const MAX_QUOTE_LENGTH = 1_000;
const SELECTION_DELAY_MS = 400;
const EMPTY_COMMENTS: Comment[] = [];

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
    // Комментарии остаются доступны, даже если браузер не разрешает localStorage.
  }
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function setTextHighlights(ranges: Range[], activeRange: Range | null) {
  const runtime = window as unknown as HighlightRuntime;
  const registry = runtime.CSS?.highlights;
  const HighlightConstructor = runtime.Highlight;
  if (!registry || !HighlightConstructor) return;

  registry.delete(HIGHLIGHT_NAME);
  registry.delete(ACTIVE_HIGHLIGHT_NAME);
  if (ranges.length > 0) registry.set(HIGHLIGHT_NAME, new HighlightConstructor(...ranges));
  if (activeRange) registry.set(ACTIVE_HIGHLIGHT_NAME, new HighlightConstructor(activeRange));
}

function clearTextHighlights() {
  const runtime = window as unknown as HighlightRuntime;
  runtime.CSS?.highlights?.delete(HIGHLIGHT_NAME);
  runtime.CSS?.highlights?.delete(ACTIVE_HIGHLIGHT_NAME);
}

function visiblePins(ranges: Map<number, Range>, comments: Comment[], activeId: number | null) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const panelWidth = Math.min(380, viewportWidth - 24);
  const panelLeft = viewportWidth - panelWidth - 12;
  const candidates: Pin[] = [];

  comments.forEach((comment, index) => {
    const range = ranges.get(comment.id);
    if (!range) return;
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;
    if (rect.bottom < 0 || rect.top > viewportHeight) return;

    const maxLeft = Math.max(8, panelLeft - 28);
    candidates.push({
      id: comment.id,
      number: index + 1,
      left: Math.min(Math.max(8, rect.left - 25), maxLeft),
      top: Math.max(8, Math.min(rect.top - 9, viewportHeight - 38)),
      quote: comment.selectedQuote ?? "",
    });
  });

  candidates.sort((left, right) => left.top - right.top || left.left - right.left);
  for (let index = 1; index < candidates.length; index += 1) {
    if (candidates[index].top - candidates[index - 1].top < 24) {
      candidates[index].top = Math.min(candidates[index - 1].top + 24, viewportHeight - 38);
    }
  }

  if (activeId !== null) candidates.sort((left, right) => Number(right.id === activeId) - Number(left.id === activeId));
  return candidates;
}

function openContainingDetails(range: Range) {
  let element = range.startContainer.parentElement;
  while (element) {
    if (element instanceof HTMLDetailsElement) element.open = true;
    element = element.parentElement;
  }
}

export default function PageComments() {
  const pathname = usePathname();
  const targetId = pathname || "/";
  const formId = `page-comment-${targetId.replace(/[^a-z0-9]/gi, "-")}`;
  const [loaded, setLoaded] = useState<LoadedComments | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const [pins, setPins] = useState<Pin[]>([]);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [author, setAuthor] = useState("");
  const [authorEditing, setAuthorEditing] = useState(true);
  const [body, setBody] = useState("");
  const [moderationKey, setModerationKey] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [selectionNotice, setSelectionNotice] = useState("");
  const rangesRef = useRef<Map<number, Range>>(new Map());
  const selectionTimerRef = useRef<number | null>(null);

  const comments = loaded?.targetId === targetId ? loaded.comments : EMPTY_COMMENTS;
  const unavailable = loaded?.targetId === targetId && loaded.unavailable;
  const loading = loaded?.targetId !== targetId;

  useEffect(() => {
    setAuthor(readStorage(AUTHOR_KEY));
    setAuthorEditing(!readStorage(AUTHOR_KEY));
    setModerationKey(readStorage(MODERATION_KEY));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (selectionTimerRef.current !== null) window.clearTimeout(selectionTimerRef.current);
    selectionTimerRef.current = null;
    setDraft(null);
    setComposerOpen(false);
    setActiveCommentId(null);
    setError("");

    fetch(`/api/comments?targetId=${encodeURIComponent(targetId)}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status));
        const json = (await response.json()) as { comments: Comment[] };
        setLoaded({ targetId, comments: json.comments, unavailable: false });
      })
      .catch((reason: unknown) => {
        if (reason instanceof DOMException && reason.name === "AbortError") return;
        setLoaded({ targetId, comments: [], unavailable: true });
      });

    return () => controller.abort();
  }, [targetId]);

  useEffect(() => {
    if (!showComments) {
      clearTextHighlights();
      rangesRef.current.clear();
      setPins([]);
      return;
    }

    let frame = 0;
    let observer: MutationObserver | null = null;
    const rebuild = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index: TextIndex = buildTextIndex(document.body);
        const ranges = new Map<number, Range>();
        for (const comment of comments) {
          const range = rangeForAnchor(comment, index);
          if (range) ranges.set(comment.id, range);
        }
        rangesRef.current = ranges;
        setTextHighlights(
          Array.from(ranges.values()),
          activeCommentId === null ? null : ranges.get(activeCommentId) ?? null,
        );
        setPins(visiblePins(ranges, comments, activeCommentId));
      });
    };

    rebuild();
    const main = document.querySelector("main");
    if (main) {
      observer = new MutationObserver(rebuild);
      observer.observe(main, { subtree: true, childList: true, characterData: true });
    }

    let positionFrame = 0;
    const reposition = () => {
      cancelAnimationFrame(positionFrame);
      positionFrame = requestAnimationFrame(() => {
        setPins(visiblePins(rangesRef.current, comments, activeCommentId));
      });
    };
    window.addEventListener("scroll", reposition, { passive: true });
    window.addEventListener("resize", reposition);

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(positionFrame);
      observer?.disconnect();
      window.removeEventListener("scroll", reposition);
      window.removeEventListener("resize", reposition);
      clearTextHighlights();
      rangesRef.current.clear();
    };
  }, [activeCommentId, comments, showComments]);

  const prepareSelection = useCallback((event: Event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("[data-text-comment-ui]")) {
      if (selectionTimerRef.current !== null) window.clearTimeout(selectionTimerRef.current);
      selectionTimerRef.current = null;
      return;
    }
    if (
      document.activeElement instanceof Element &&
      document.activeElement.closest("[data-text-comment-ui]")
    ) {
      if (selectionTimerRef.current !== null) window.clearTimeout(selectionTimerRef.current);
      selectionTimerRef.current = null;
      return;
    }

    if (selectionTimerRef.current !== null) window.clearTimeout(selectionTimerRef.current);
    selectionTimerRef.current = window.setTimeout(() => {
      selectionTimerRef.current = null;
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
        setDraft(null);
        setComposerOpen(false);
        return;
      }

      const anchor = anchorFromSelection(selection, buildTextIndex(document.body));
      if (!anchor) {
        setDraft(null);
        setComposerOpen(false);
        return;
      }
      if (Array.from(anchor.selectedQuote).length > MAX_QUOTE_LENGTH) {
        setDraft(null);
        setComposerOpen(false);
        setSelectionNotice("Выделенный фрагмент длиннее 1 000 знаков. Выберите фрагмент покороче.");
        window.setTimeout(() => setSelectionNotice(""), 4_000);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const mobile = window.matchMedia("(max-width: 600px)").matches;
      const actionWidth = Math.min(136, window.innerWidth - 24);
      const left = Math.max(
        12,
        Math.min(rect.left + rect.width / 2 - actionWidth / 2, window.innerWidth - actionWidth - 12),
      );
      let top = rect.top - 44;
      if (top < 8) top = rect.bottom + 8;
      top = Math.max(8, Math.min(top, window.innerHeight - 48));
      setError("");
      setDraft({ anchor, left, top, mobile });
      setComposerOpen(false);
      if (!mobile) setShowComments(false);
    }, SELECTION_DELAY_MS);
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", prepareSelection);
    document.addEventListener("keyup", prepareSelection);
    document.addEventListener("selectionchange", prepareSelection);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (selectionTimerRef.current !== null) window.clearTimeout(selectionTimerRef.current);
      selectionTimerRef.current = null;
      setDraft(null);
      setComposerOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      if (selectionTimerRef.current !== null) window.clearTimeout(selectionTimerRef.current);
      document.removeEventListener("mouseup", prepareSelection);
      document.removeEventListener("keyup", prepareSelection);
      document.removeEventListener("selectionchange", prepareSelection);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [prepareSelection]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft) return;
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
        body: JSON.stringify({
          targetId,
          authorName: author.trim(),
          body: body.trim(),
          ...draft.anchor,
        }),
      });
      const result = (await response.json().catch(() => null)) as Comment | { error?: string } | null;
      if (!response.ok || !result || !("id" in result)) {
        const message = result && "error" in result ? result.error : null;
        throw new Error(message || "Не удалось отправить комментарий. Попробуйте ещё раз.");
      }

      const created = result;
      const savedAuthor = author.trim();
      writeStorage(AUTHOR_KEY, savedAuthor);
      setAuthor(savedAuthor);
      setAuthorEditing(false);
      setLoaded((current) => ({
        targetId,
        comments: current?.targetId === targetId ? [...current.comments, created] : [created],
        unavailable: false,
      }));
      setBody("");
      setDraft(null);
      setComposerOpen(false);
      setShowComments(true);
      setActiveCommentId(created.id);
      window.getSelection()?.removeAllRanges();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Не удалось отправить комментарий.");
    } finally {
      setSending(false);
    }
  }

  function jumpToComment(id: number) {
    setActiveCommentId(id);
    const range = rangesRef.current.get(id);
    if (!range) return;
    openContainingDetails(range);
    requestAnimationFrame(() => {
      const rect = range.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;
      window.scrollTo({
        top: Math.max(0, window.scrollY + rect.top - window.innerHeight * 0.35),
        behavior: "smooth",
      });
    });
  }

  async function removeComment(event: ReactMouseEvent<HTMLButtonElement>, id: number) {
    event.stopPropagation();
    if (!window.confirm("Удалить комментарий?")) return;
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
      headers: { "X-Moderation-Key": moderationKey },
    });
    if (response.ok) {
      setLoaded((current) =>
        current && current.targetId === targetId
          ? { ...current, comments: current.comments.filter((comment) => comment.id !== id) }
          : current,
      );
      if (activeCommentId === id) setActiveCommentId(null);
    } else {
      window.alert("Не удалось удалить: проверьте ключ модератора.");
    }
  }

  function updateAuthor(value: string) {
    setAuthor(value);
  }

  function dismissComposer() {
    setDraft(null);
    setComposerOpen(false);
    setBody("");
    setError("");
  }

  function openComposer() {
    setComposerOpen(true);
    setShowComments(false);
    setError("");
  }

  const activeComment = activeCommentId === null ? null : comments.find((comment) => comment.id === activeCommentId);

  return (
    <div className="page-comment-ui" data-text-comment-ui="true">
      {pins.map((pin) => (
        <button
          key={pin.id}
          type="button"
          className={`page-comment-pin${pin.id === activeCommentId ? " is-active" : ""}`}
          style={{ left: pin.left, top: pin.top }}
          onClick={() => jumpToComment(pin.id)}
          title={pin.quote.slice(0, 160) || "Комментарий к этому месту"}
          aria-label={`Перейти к комментарию ${pin.number}`}
        >
          {pin.number}
        </button>
      ))}

      {selectionNotice && <p className="page-comment-notice" role="status">{selectionNotice}</p>}

      {draft?.mobile && !composerOpen && (
        <button
          type="button"
          className="page-comment-selection-action"
          style={{ left: draft.left, top: draft.top }}
          onClick={openComposer}
          aria-label="Оставить комментарий к выделенному тексту"
        >
          Комментировать
        </button>
      )}

      {draft && (!draft.mobile || composerOpen) && (
        <form
          className={`page-comment-composer${draft.mobile ? " is-mobile" : ""}`}
          onSubmit={submit}
          aria-label="Новый комментарий к выделенному тексту"
        >
          <p className="page-comment-quote">«{draft.anchor.selectedQuote}»</p>
          {authorEditing ? (
            <label className="page-comment-label" htmlFor={`${formId}-author`}>
              Ваше имя
              <input
                id={`${formId}-author`}
                autoComplete="name"
                value={author}
                onChange={(event) => updateAuthor(event.target.value)}
                maxLength={80}
                placeholder="Например, Анна"
              />
            </label>
          ) : (
            <p className="page-comment-author">
              {author || "Гость"}{" "}
              <button type="button" className="link-button" onClick={() => setAuthorEditing(true)}>
                сменить
              </button>
            </p>
          )}
          <label className="visually-hidden" htmlFor={`${formId}-body`}>
            Текст комментария
          </label>
          <textarea
            id={`${formId}-body`}
            autoFocus
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Напишите комментарий"
            maxLength={4_000}
            rows={3}
          />
          {error && <p className="error">{error}</p>}
          <div className="page-comment-actions">
            <button type="button" className="link-button" onClick={dismissComposer}>
              Отмена
            </button>
            <button type="submit" className="button" disabled={sending}>
              {sending ? "Отправка…" : "Отправить"}
            </button>
          </div>
        </form>
      )}

      {showComments && (
        <aside id="page-comment-panel" className="page-comment-panel" aria-label="Комментарии к странице">
          <div className="page-comment-panel-head">
            <div>
              <p className="page-comment-eyebrow">Эта страница</p>
              <h2>Комментарии <span>{comments.length}</span></h2>
            </div>
            <button
              type="button"
              className="page-comment-close"
              onClick={() => setShowComments(false)}
              aria-label="Скрыть комментарии"
            >
              ×
            </button>
          </div>

          {loading ? (
            <p className="muted">Загружаем комментарии…</p>
          ) : unavailable ? (
            <p className="muted">Комментарии временно недоступны.</p>
          ) : comments.length === 0 ? (
            <p className="page-comment-empty">Пока нет комментариев. Выделите текст на странице, чтобы добавить первый.</p>
          ) : (
            <ol className="page-comment-list">
              {comments.map((comment, index) => (
                <li key={comment.id}>
                  <div className={`page-comment-card${comment.id === activeCommentId ? " is-active" : ""}`}>
                    <button type="button" className="page-comment-entry" onClick={() => jumpToComment(comment.id)}>
                      <span className="page-comment-entry-head">
                        <span className="page-comment-number">{index + 1}</span>
                        <strong>{comment.authorName}</strong>
                        <time dateTime={comment.createdAt}>{formatDate(comment.createdAt)}</time>
                      </span>
                      {comment.selectedQuote && <span className="page-comment-entry-quote">«{comment.selectedQuote}»</span>}
                      <span className="page-comment-entry-body">{comment.body}</span>
                      {!rangesRef.current.has(comment.id) && comment.selectedQuote && (
                        <span className="page-comment-unanchored">Фрагмент текста не найден на странице</span>
                      )}
                    </button>
                    {moderationKey && (
                      <button type="button" className="page-comment-delete" onClick={(event) => removeComment(event, comment.id)}>
                        удалить
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}

          {activeComment && (
            <div className="page-comment-selected" aria-live="polite">
              <span>Выбранный комментарий</span>
              <strong>{activeComment.authorName}</strong>
              <p>{activeComment.body}</p>
            </div>
          )}

          <details className="page-comment-moderation">
            <summary>Модерация</summary>
            <input
              type="password"
              value={moderationKey}
              onChange={(event) => {
                setModerationKey(event.target.value);
                writeStorage(MODERATION_KEY, event.target.value);
              }}
              placeholder="Ключ модератора"
              aria-label="Ключ модератора"
            />
          </details>
        </aside>
      )}

      {comments.length > 0 && (
        <button
          type="button"
          className={`page-comment-toggle${showComments ? " is-open" : ""}`}
          onClick={() => setShowComments((open) => !open)}
          aria-expanded={showComments}
          aria-controls={showComments ? "page-comment-panel" : undefined}
        >
          {showComments ? "Скрыть комментарии" : "Комментарии"}
          <span>{comments.length}</span>
        </button>
      )}
    </div>
  );
}
