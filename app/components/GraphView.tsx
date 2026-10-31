"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Network } from "vis-network/standalone";
import { IMPORTANCE_SHORT, authorsShort, worksWord } from "@/lib/labels";

type GWork = {
  id: string;
  title: string;
  original: string | null;
  authors: string[];
  year: number | null;
  importance: "core" | "supporting" | "peripheral";
  topics: string[];
  summary: string;
  hasRetelling: boolean;
};
type GTopic = { id: string; title: string; count: number; lead: string };
type GData = {
  works: GWork[];
  topics: GTopic[];
  nodes: { id: string; x: number; y: number }[];
  edges: [string, string][];
};

/** Цвета графа берутся из CSS-токенов `--graph-*` в globals.css: canvas не видит CSS напрямую. */
function readColors() {
  const css = getComputedStyle(document.documentElement);
  const v = (name: string) => css.getPropertyValue(name).trim();
  return {
    core: v("--graph-core"),
    supporting: v("--graph-supporting"),
    peripheral: v("--graph-peripheral"),
    topic: v("--graph-topic"),
    topicDim: v("--graph-topic-dim"),
    dim: v("--graph-dim"),
    surface: v("--surface"),
    edge: v("--graph-edge"),
    edgeDim: v("--graph-edge-dim"),
    edgeActive: v("--graph-edge-active"),
  };
}
const SIZES = { core: 16, supporting: 10, peripheral: 7, topic: 24 };

type Selected = { kind: "work"; work: GWork } | { kind: "topic"; topic: GTopic };

export default function GraphView({ full = false, view }: { full?: boolean; view?: "topics" | "works" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);
  const highlightRef = useRef<(id: string | null) => void>(() => {});
  const [data, setData] = useState<GData | null>(null);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<Selected | null>(null);
  const [hover, setHover] = useState<{ x: number; y: number; label: string } | null>(null);
  const [query, setQuery] = useState("");

  const lookup = useMemo(() => {
    if (!data) return null;
    return {
      works: new Map(data.works.map((w) => [w.id, w])),
      topics: new Map(data.topics.map((t) => [`topic-${t.id}`, t])),
    };
  }, [data]);

  useEffect(() => {
    let cancelled = false;
    fetch("/graph-data")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json: GData) => !cancelled && setData(json))
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!data || !lookup || !containerRef.current) return;
    let disposed = false;
    const container = containerRef.current;

    import("vis-network/standalone").then(({ Network, DataSet }) => {
      if (disposed) return;
      const COLORS = readColors();
      const face = getComputedStyle(document.body).fontFamily;
      const labelFont = (color: string) => ({
        face,
        size: 58,
        color,
        strokeWidth: 14,
        strokeColor: COLORS.surface,
        vadjust: 6,
      });

      const baseNode = (id: string) => {
        const work = lookup.works.get(id);
        if (work) {
          // Фоновые работы — кольцом: так их не спутать с дополняющими даже без цвета.
          if (work.importance === "peripheral") {
            const ring = { background: COLORS.surface, border: COLORS.peripheral };
            return { borderWidth: 2, color: { ...ring, hover: ring } };
          }
          const color = COLORS[work.importance];
          return { borderWidth: 0, color: { background: color, border: color, hover: { background: color, border: color } } };
        }
        return {
          color: {
            background: COLORS.topic,
            border: COLORS.topic,
            hover: { background: COLORS.topic, border: COLORS.topic },
          },
          font: labelFont(COLORS.topic),
        };
      };

      const nodes = new DataSet(
        data.nodes.map((n) => {
          const work = lookup.works.get(n.id);
          const topic = lookup.topics.get(n.id);
          return {
            id: n.id,
            x: n.x,
            y: n.y,
            shape: "dot",
            size: work ? SIZES[work.importance] : SIZES.topic,
            borderWidth: 0,
            label: topic ? wrap(topic.title, 22) : undefined,
            ...baseNode(n.id),
          };
        }),
      );
      const edges = new DataSet(
        data.edges.map(([from, to], i) => ({
          id: i,
          from,
          to,
          color: { color: COLORS.edge },
          width: 1,
        })),
      );

      const network = new Network(
        container,
        { nodes, edges },
        {
          autoResize: true,
          physics: false,
          layout: { improvedLayout: false },
          edges: { smooth: false, selectionWidth: 0, hoverWidth: 0 },
          nodes: { chosen: false, scaling: { label: { enabled: false, drawThreshold: 4, maxVisible: 22 } } },
          interaction: {
            dragNodes: false,
            hover: true,
            hoverConnectedEdges: false,
            selectConnectedEdges: false,
            tooltipDelay: 3_600_000,
            zoomSpeed: 0.6,
            keyboard: false,
          },
        },
      );
      networkRef.current = network;
      network.fit({ animation: false });
      network.once("afterDrawing", () => !disposed && setReady(true));

      const neighbours = new Map<string, Set<string>>();
      data.edges.forEach(([a, b]) => {
        if (!neighbours.has(a)) neighbours.set(a, new Set());
        if (!neighbours.has(b)) neighbours.set(b, new Set());
        neighbours.get(a)!.add(b);
        neighbours.get(b)!.add(a);
      });

      highlightRef.current = (id) => {
        const near = id ? new Set([id, ...(neighbours.get(id) ?? [])]) : null;
        nodes.update(
          data.nodes.map((n) => {
            if (!near || near.has(n.id)) return { id: n.id, ...baseNode(n.id) };
            const isTopic = lookup.topics.has(n.id);
            return {
              id: n.id,
              color: { background: COLORS.dim, border: COLORS.dim, hover: { background: COLORS.dim, border: COLORS.dim } },
              ...(isTopic ? { font: labelFont(COLORS.topicDim) } : {}),
            };
          }),
        );
        edges.update(
          data.edges.map(([a, b], i) => ({
            id: i,
            color: {
              color: !id ? COLORS.edge : a === id || b === id ? COLORS.edgeActive : COLORS.edgeDim,
            },
            width: id && (a === id || b === id) ? 1.6 : 1,
          })),
        );
      };

      network.on("hoverNode", (params: { node: string; pointer: { DOM: { x: number; y: number } } }) => {
        const work = lookup.works.get(params.node);
        const topic = lookup.topics.get(params.node);
        container.style.cursor = "pointer";
        setHover({
          x: params.pointer.DOM.x,
          y: params.pointer.DOM.y,
          label: work ? work.title : topic ? `${topic.title} — ${topic.count} ${worksWord(topic.count)}` : "",
        });
      });
      network.on("blurNode", () => {
        container.style.cursor = "";
        setHover(null);
      });
      network.on("dragStart", () => setHover(null));
      network.on("zoom", () => setHover(null));
      network.on("click", (params: { nodes: string[] }) => {
        const id = params.nodes[0];
        if (!id) {
          setSelected(null);
          highlightRef.current(null);
          return;
        }
        selectId(id);
      });
    });

    function selectId(id: string) {
      const work = lookup!.works.get(id);
      const topic = lookup!.topics.get(id);
      if (work) setSelected({ kind: "work", work });
      else if (topic) setSelected({ kind: "topic", topic });
      highlightRef.current(id);
    }

    return () => {
      disposed = true;
      networkRef.current?.destroy();
      networkRef.current = null;
    };
  }, [data, lookup]);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!data || q.length < 2) return [];
    return data.works
      .filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          (w.original ?? "").toLowerCase().includes(q) ||
          w.authors.some((a) => a.toLowerCase().includes(q)),
      )
      .slice(0, 8);
  }, [data, query]);

  const animation = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? false
      : { duration: 500, easingFunction: "easeInOutQuad" as const };

  function focusWork(work: GWork) {
    setQuery("");
    setSelected({ kind: "work", work });
    highlightRef.current(work.id);
    networkRef.current?.focus(work.id, {
      scale: 1.4,
      animation: animation(),
    });
  }

  function focusTopic(topic: GTopic) {
    const id = `topic-${topic.id}`;
    setQuery("");
    setSelected({ kind: "topic", topic });
    highlightRef.current(id);
    networkRef.current?.focus(id, {
      scale: 1.4,
      animation: animation(),
    });
  }

  function clearSelection() {
    setSelected(null);
    highlightRef.current(null);
  }

  return (
    <div className={full ? "graph graph-full" : "graph"}>
      <div
        ref={containerRef}
        className="graph-canvas"
        role="img"
        aria-label="Граф знаний: работы и направления. Те же связи доступны списком в разделе «Направления»."
      />

      {!ready && !error && (
        <p className="graph-status" role="status">
          <span className="graph-spinner" aria-hidden="true" />
          Строим карту связей…
        </p>
      )}
      {error && <p className="graph-status">Не удалось загрузить карту. Обновите страницу.</p>}

      {hover && !selected && (
        <div className="graph-hover" style={{ left: hover.x + 14, top: hover.y + 14 }}>
          {hover.label}
        </div>
      )}

      {full && (
        <div className="graph-search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Найти работу на карте"
            aria-label="Найти работу на карте"
          />
          {matches.length > 0 && (
            <ul className="graph-search-results">
              {matches.map((w) => (
                <li key={w.id}>
                  <button type="button" onClick={() => focusWork(w)}>
                    <span>{w.title}</span>
                    <small>{[authorsShort(w.authors), w.year].filter(Boolean).join(", ")}</small>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {data && view && query.trim().length < 2 && (
            <ul className="graph-search-results graph-browse">
              {view === "topics"
                ? data.topics.map((t) => (
                    <li key={t.id}>
                      <button type="button" onClick={() => focusTopic(t)}>
                        <span>{t.title}</span>
                        <small>
                          {t.count} {worksWord(t.count)}
                        </small>
                      </button>
                    </li>
                  ))
                : data.works.map((w) => (
                    <li key={w.id}>
                      <button type="button" onClick={() => focusWork(w)}>
                        <span>{w.title}</span>
                        <small>{[authorsShort(w.authors), w.year].filter(Boolean).join(", ")}</small>
                      </button>
                    </li>
                  ))}
            </ul>
          )}
        </div>
      )}

      <div className="graph-legend">
        <span aria-hidden="true"><i className="is-topic" />Направление</span>
        <span aria-hidden="true"><i className="is-core" />Ключевая работа</span>
        <span aria-hidden="true"><i className="is-supporting" />Дополняющая</span>
        <span aria-hidden="true"><i className="is-peripheral" />Фоновая</span>
        <Link href="/topics" className="graph-list-link">Списком →</Link>
      </div>

      {selected && (
        <aside className="graph-card" aria-live="polite">
          <button type="button" className="graph-card-close" onClick={clearSelection} aria-label="Закрыть">
            ×
          </button>
          {selected.kind === "work" ? (
            <>
              <p className="graph-card-kicker">
                {IMPORTANCE_SHORT[selected.work.importance]} работа
                {selected.work.year ? ` · ${selected.work.year}` : ""}
              </p>
              <h3>{selected.work.title}</h3>
              {selected.work.original && <p className="graph-card-original">{selected.work.original}</p>}
              {selected.work.authors.length > 0 && (
                <p className="graph-card-meta">{authorsShort(selected.work.authors, 3)}</p>
              )}
              <p className="graph-card-text">{selected.work.summary}</p>
              <div className="aside-actions">
                {selected.work.hasRetelling && (
                  <Link href={`/works/${selected.work.id}/summary`} className="button">
                    Читать изложение на русском
                  </Link>
                )}
                <Link href={`/works/${selected.work.id}`} className="button button-quiet">
                  Открыть карточку работы
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="graph-card-kicker">Направление</p>
              <h3>{selected.topic.title}</h3>
              <p className="graph-card-meta">
                {selected.topic.count} {worksWord(selected.topic.count)}
              </p>
              <p className="graph-card-text">{selected.topic.lead}</p>
              <Link href={`/topics/${selected.topic.id}`} className="button">
                Открыть раздел
              </Link>
            </>
          )}
        </aside>
      )}
    </div>
  );
}

function wrap(text: string, width: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (line && (line + " " + word).length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  }
  if (line) lines.push(line);
  return lines.join("\n");
}
