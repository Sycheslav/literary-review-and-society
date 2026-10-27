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

/**
 * Одна всплывающая аннотация на весь сайт. Любой элемент с атрибутом
 * data-pv-text показывает её после короткой задержки наведения.
 */
export default function HoverPreview() {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let anchor: HTMLElement | null = null;
    let timer: number | undefined;

    const hide = () => {
      window.clearTimeout(timer);
      anchor = null;
      setPreview(null);
      setPosition(null);
    };

    const onOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-pv-text]");
      if (target === anchor) return;
      hide();
      if (!target || !target.dataset.pvText) return;
      anchor = target;
      timer = window.setTimeout(() => {
        if (anchor !== target) return;
        const compact = target.dataset.pvNotitle !== undefined;
        setPreview({
          title: compact ? null : (target.dataset.pvTitle ?? null),
          meta: compact ? "" : (target.dataset.pvMeta ?? ""),
          text: target.dataset.pvText ?? "",
          rect: target.getBoundingClientRect(),
        });
      }, SHOW_DELAY);
    };

    const onOut = (event: PointerEvent) => {
      if (!anchor) return;
      const next = event.relatedTarget as Node | null;
      if (next && anchor.contains(next)) return;
      hide();
    };

    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    window.addEventListener("scroll", hide, { passive: true, capture: true });
    window.addEventListener("pointerdown", hide);
    return () => {
      hide();
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      window.removeEventListener("scroll", hide, { capture: true });
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
