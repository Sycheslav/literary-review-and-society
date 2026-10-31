"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Preview = {
  title: string | null;
  meta: string;
  text: string;
  rect: DOMRect;
};

const SHOW_DELAY = 450;
const GAP = 8;
const MARGIN = 16;
const BOX_ID = "hover-preview";

/**
 * Одна всплывающая аннотация на весь сайт. Любой элемент с атрибутом
 * data-pv-text показывает её после короткой задержки наведения мышью
 * или сразу при переходе на него с клавиатуры (Esc скрывает).
 */
export default function HoverPreview() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let anchor: HTMLElement | null = null;
    let timer: number | undefined;

    const hide = () => {
      window.clearTimeout(timer);
      anchor?.removeAttribute("aria-describedby");
      anchor = null;
      setPreview(null);
      setPosition(null);
    };

    const show = (target: HTMLElement) => {
      if (anchor !== target) return;
      const compact = target.dataset.pvNotitle !== undefined;
      setPreview({
        title: compact ? null : (target.dataset.pvTitle ?? null),
        meta: compact ? "" : (target.dataset.pvMeta ?? ""),
        text: target.dataset.pvText ?? "",
        rect: target.getBoundingClientRect(),
      });
    };

    const onOver = (event: PointerEvent) => {
      if (!canHover || event.pointerType !== "mouse") return;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-pv-text]");
      if (target === anchor) return;
      hide();
      if (!target || !target.dataset.pvText) return;
      anchor = target;
      timer = window.setTimeout(() => show(target), SHOW_DELAY);
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-pv-text]");
      if (target === anchor) return;
      hide();
      if (!target || !target.dataset.pvText || !target.matches(":focus-visible")) return;
      anchor = target;
      target.setAttribute("aria-describedby", BOX_ID);
      show(target);
    };

    const onFocusOut = () => {
      if (anchor && anchor === document.activeElement) return;
      hide();
    };

    // Переход с клавиатуры сам прокручивает страницу: аннотацию у поля фокуса не прячем, а переставляем.
    const onScroll = () => {
      if (anchor && anchor === document.activeElement) show(anchor);
      else hide();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && anchor) hide();
    };

    const onOut = (event: PointerEvent) => {
      if (!anchor) return;
      const next = event.relatedTarget as Node | null;
      if (next && anchor.contains(next)) return;
      hide();
    };

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("pointerdown", hide);
    return () => {
      hide();
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("pointerdown", hide);
    };
  }, []);

  useLayoutEffect(() => {
    if (!preview || !boxRef.current) return;
    const box = boxRef.current.getBoundingClientRect();
    const { rect } = preview;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let top = rect.bottom + GAP;
    if (top + box.height > vh - MARGIN && rect.top - GAP - box.height > MARGIN) {
      top = rect.top - GAP - box.height;
    }
    const left = Math.min(Math.max(rect.left, MARGIN), vw - box.width - MARGIN);
    setPosition({ top, left });
  }, [preview]);

  if (!preview) return null;

  return (
    <div
      ref={boxRef}
      id={BOX_ID}
      className="preview"
      role="tooltip"
      data-visible={position ? "" : undefined}
      style={position ? { top: position.top, left: position.left } : { top: -9999, left: -9999 }}
    >
      {preview.title && <p className="preview-title">{preview.title}</p>}
      {preview.meta && <p className="preview-meta">{preview.meta}</p>}
      <p className="preview-text">{preview.text}</p>
    </div>
  );
}
