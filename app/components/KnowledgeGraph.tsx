"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { Network as VisNetwork } from "vis-network/standalone";

export type GraphNode = {
  id: string;
  type?: string;
  title?: string;
  [field: string]: unknown;
};

export type GraphEdge = {
  source: string;
  target: string;
  relation?: string;
  [field: string]: unknown;
};

export type KnowledgeGraphProps = {
  nodes: readonly GraphNode[];
  edges: readonly GraphEdge[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  className?: string;
};

const NODE_COLORS: Record<string, string> = {
  home: "#315f52",
  index: "#a4824c",
  material: "#c0a875",
  topic: "#78937f",
  work: "#527969",
};

const NODE_SHAPES: Record<string, "star" | "box" | "hexagon" | "triangle" | "dot"> = {
  home: "star",
  index: "box",
  material: "dot",
  topic: "hexagon",
  work: "triangle",
};

const EDGE_COLORS: Record<string, string> = {
  belongs_to_topic: "#8b9d83",
  continues: "#b7894f",
  discusses: "#5f826f",
  has_index: "#9a8a68",
  has_material: "#b99a61",
  has_topic: "#718b78",
  compares: "#987652",
  uses_platform: "#7a9b8e",
};

const FALLBACK_COLORS = [
  "#315f52",
  "#4f7867",
  "#759386",
  "#8ea594",
  "#a7b49d",
  "#8c7652",
  "#a88b5b",
  "#c38d42",
  "#b99a67",
  "#6b8176",
  "#527565",
  "#9b8864",
];

const NODE_TYPE_LABELS: Record<string, string> = {
  home: "Главная",
  index: "Раздел",
  material: "Материал",
  topic: "Тема",
  work: "Исследование",
};

const EDGE_RELATION_LABELS: Record<string, string> = {
  belongs_to_topic: "Относится к теме",
  continues: "Продолжает",
  discusses: "Обсуждает",
  has_index: "Входит в раздел",
  has_material: "Содержит материал",
  has_topic: "Имеет тему",
  compares: "Сравнивает",
  uses_platform: "Использует платформу",
};

const NETWORK_OPTIONS = {
  autoResize: true,
  width: "100%",
  height: "100%",
  nodes: {
    borderWidth: 1.5,
    borderWidthSelected: 3,
    font: {
      color: "#315f52",
      face: "Inter, ui-sans-serif, system-ui, sans-serif",
      size: 13,
      strokeColor: "#ffffff",
      strokeWidth: 3,
    },
    scaling: { min: 6, max: 22 },
    shape: "dot",
  },
  edges: {
    arrows: { to: { enabled: true, scaleFactor: 0.45 } },
    smooth: { enabled: true, type: "dynamic", roundness: 0.22 },
    width: 1.2,
    hoverWidth: 2.2,
    selectionWidth: 1.8,
  },
  interaction: {
    hover: true,
    hoverConnectedEdges: true,
    multiselect: false,
    selectConnectedEdges: true,
    hideEdgesOnDrag: true,
    tooltipDelay: 180,
  },
  layout: { improvedLayout: true, randomSeed: 57 },
  physics: {
    enabled: true,
    solver: "barnesHut",
    barnesHut: {
      gravitationalConstant: -7200,
      centralGravity: 0.24,
      springLength: 112,
      springConstant: 0.035,
      damping: 0.18,
    },
    stabilization: { enabled: true, iterations: 220, updateInterval: 30 },
  },
};

function stableColor(key: string): string {
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) | 0;
  }
  return FALLBACK_COLORS[Math.abs(hash) % FALLBACK_COLORS.length];
}

function getNodeColor(type: string): string {
  return NODE_COLORS[type] ?? stableColor(`node:${type}`);
}

function getEdgeColor(relation: string): string {
  return EDGE_COLORS[relation] ?? stableColor(`edge:${relation}`);
}

function shortenLabel(value: string, maxLength = 42): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length > maxLength
    ? `${normalized.slice(0, maxLength - 1).trimEnd()}…`
    : normalized;
}

function asText(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function russianPlural(count: number, one: string, few: string, many: string): string {
  const lastTwoDigits = count % 100;
  const lastDigit = count % 10;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return many;
  if (lastDigit === 1) return one;
  if (lastDigit >= 2 && lastDigit <= 4) return few;
  return many;
}

function makeVisData(
  DataSet: typeof import("vis-network/standalone").DataSet,
  nodes: readonly GraphNode[],
  edges: readonly GraphEdge[],
): Parameters<VisNetwork["setData"]>[0] {
  const visNodes = nodes.map((node) => {
    const id = String(node.id);
    const type = asText(node.type) ?? "unknown";
    const label = asText(node.title) ?? id;
    const summary = asText(node.summary_short) ?? asText(node.summary);
    const color = getNodeColor(type);

    return {
      ...node,
      id,
      label: shortenLabel(label),
      shape: NODE_SHAPES[type] ?? "dot",
      size: type === "home" ? 20 : type === "index" ? 16 : type === "topic" ? 13 : type === "work" ? 10 : 6,
      color: {
        background: color,
        border: color,
        highlight: { background: color, border: "#244c41" },
        hover: { background: color, border: "#315f52" },
      },
      title: [label, `Тип: ${NODE_TYPE_LABELS[type] ?? type}`, summary].filter(Boolean).join("\n"),
    };
  });

  const visEdges = edges.map((edge, index) => {
    const source = String(edge.source);
    const target = String(edge.target);
    const relation = asText(edge.relation) ?? asText(edge.type) ?? "related";
    const color = getEdgeColor(relation);

    return {
      ...edge,
      // Each input relationship gets its own DataSet ID, including parallel edges.
      id: `graph-edge:${index}:${source}:${target}:${relation}`,
      from: source,
      to: target,
      color: { color, hover: color, highlight: "#c38d42" },
      title: `Связь: ${EDGE_RELATION_LABELS[relation] ?? relation.replaceAll("_", " ")}\n${source} → ${target}`,
      width: 1.2,
      smooth: { enabled: true, type: "dynamic", roundness: 0.22 },
      arrows: { to: { enabled: true, scaleFactor: 0.45 } },
    };
  });

  return {
    nodes: new DataSet(visNodes) as Parameters<VisNetwork["setData"]>[0]["nodes"],
    edges: new DataSet(visEdges) as Parameters<VisNetwork["setData"]>[0]["edges"],
  };
}

function getNodeTitle(node: GraphNode): string {
  return asText(node.title) ?? node.id;
}

export function KnowledgeGraph({
  nodes,
  edges,
  selectedId,
  onSelect,
  className = "",
}: KnowledgeGraphProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const networkRef = useRef<VisNetwork | null>(null);
  const applyGraphRef = useRef<
    ((nextNodes: readonly GraphNode[], nextEdges: readonly GraphEdge[]) => void) | null
  >(null);
  const latestGraphRef = useRef({ nodes, edges });
  const onSelectRef = useRef(onSelect);
  const nodeOrderRef = useRef<string[]>([]);
  const nodeIdSetRef = useRef(new Set<string>());
  const nodeTitleByIdRef = useRef(new Map<string, string>());
  const selectedIdRef = useRef(selectedId);
  const [loadError, setLoadError] = useState(false);

  latestGraphRef.current = { nodes, edges };
  onSelectRef.current = onSelect;
  selectedIdRef.current = selectedId;

  const updateAccessibleNodeIndex = useCallback((nextNodes: readonly GraphNode[]) => {
    const ids = nextNodes.map((node) => String(node.id));
    nodeOrderRef.current = ids;
    nodeIdSetRef.current = new Set(ids);
    nodeTitleByIdRef.current = new Map(
      nextNodes.map((node) => [String(node.id), getNodeTitle(node)]),
    );
  }, []);

  const chooseNode = useCallback((id: string | null, focus = false) => {
    selectedIdRef.current = id;
    const network = networkRef.current;

    if (network) {
      if (id) network.selectNodes([id]);
      else network.unselectAll();

      if (focus && id && nodeIdSetRef.current.has(id)) {
        network.focus(id, {
          scale: Math.max(network.getScale(), 0.8),
          animation: { duration: 180, easingFunction: "easeInOutQuad" },
        });
      }
    }

    onSelectRef.current(id);
  }, []);

  useEffect(() => {
    let disposed = false;
    let network: VisNetwork | null = null;
    let observer: ResizeObserver | null = null;
    let resizeFrame = 0;

    const initialize = async () => {
      try {
        const { DataSet, Network } = await import("vis-network/standalone");
        const container = containerRef.current;
        if (disposed || !container) return;

        const initial = latestGraphRef.current;
        updateAccessibleNodeIndex(initial.nodes);
        const data = makeVisData(DataSet, initial.nodes, initial.edges);
        network = new Network(container, data, NETWORK_OPTIONS);
        networkRef.current = network;

        const handleClick = (event: { nodes?: Array<string | number> }) => {
          const nodeId = event.nodes?.[0];
          chooseNode(nodeId === undefined ? null : String(nodeId));
        };
        network.on("click", handleClick);

        applyGraphRef.current = (nextNodes, nextEdges) => {
          updateAccessibleNodeIndex(nextNodes);
          network?.setData(makeVisData(DataSet, nextNodes, nextEdges));
        };

        if (selectedIdRef.current && nodeIdSetRef.current.has(selectedIdRef.current)) {
          network.selectNodes([selectedIdRef.current]);
        }

        if (typeof ResizeObserver !== "undefined") {
          observer = new ResizeObserver(() => {
            window.cancelAnimationFrame(resizeFrame);
            resizeFrame = window.requestAnimationFrame(() => network?.redraw());
          });
          observer.observe(container);
        }
      } catch {
        if (!disposed) setLoadError(true);
      }
    };

    void initialize();

    return () => {
      disposed = true;
      observer?.disconnect();
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      applyGraphRef.current = null;
      network?.destroy();
      networkRef.current = null;
    };
  }, [chooseNode, updateAccessibleNodeIndex]);

  useEffect(() => {
    applyGraphRef.current?.(nodes, edges);
  }, [nodes, edges]);

  useEffect(() => {
    const network = networkRef.current;
    if (!network) return;

    if (selectedId && nodeIdSetRef.current.has(selectedId)) {
      network.selectNodes([selectedId]);
    } else {
      network.unselectAll();
    }
  }, [edges, nodes, selectedId]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    const ids = nodeOrderRef.current;
    if (!ids.length) return;

    const currentIndex = ids.indexOf(selectedIdRef.current ?? "");
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % ids.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = currentIndex < 0 ? ids.length - 1 : (currentIndex - 1 + ids.length) % ids.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = ids.length - 1;
        break;
      case "Enter":
      case " ":
        nextIndex = currentIndex < 0 ? 0 : currentIndex;
        break;
      case "Escape":
        event.preventDefault();
        chooseNode(null);
        return;
      default:
        return;
    }

    event.preventDefault();
    chooseNode(ids[nextIndex], true);
  };

  const selectedTitle = selectedId
    ? nodeTitleByIdRef.current.get(selectedId) ?? selectedId
    : null;
  const isEmpty = nodes.length === 0;
  const nodeCount = `${nodes.length.toLocaleString("ru-RU")} ${russianPlural(nodes.length, "узел", "узла", "узлов")}`;
  const edgeCount = `${edges.length.toLocaleString("ru-RU")} ${russianPlural(edges.length, "связь", "связи", "связей")}`;

  const fitGraph = () => networkRef.current?.fit({ animation: { duration: 280, easingFunction: "easeInOutQuad" } });
  const zoomBy = (factor: number) => {
    const network = networkRef.current;
    if (!network) return;
    network.moveTo({
      scale: Math.min(2.8, Math.max(0.24, network.getScale() * factor)),
      animation: { duration: 150, easingFunction: "easeInOutQuad" },
    });
  };

  return (
    <section className={`flex h-full min-h-[360px] w-full flex-col overflow-hidden rounded-xl border border-stone-200 bg-white ${className}`}>
      <div className="flex min-h-12 items-center justify-between gap-3 border-b border-stone-200 px-3 py-2 sm:px-4">
        <p className="text-xs text-stone-500" aria-live="off">
          {nodeCount} <span aria-hidden="true">·</span> {edgeCount}
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-md border border-stone-200 px-2.5 py-1.5 text-xs font-medium text-stone-700 transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f52] disabled:cursor-not-allowed disabled:opacity-40"
            onClick={fitGraph}
            disabled={isEmpty}
            aria-label="Показать граф целиком"
            title="Показать граф целиком"
          >
            Весь граф
          </button>
          <button
            type="button"
            className="h-8 w-8 rounded-md border border-stone-200 text-base text-stone-700 transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f52] disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => zoomBy(1.2)}
            disabled={isEmpty}
            aria-label="Увеличить масштаб"
            title="Увеличить масштаб"
          >
            +
          </button>
          <button
            type="button"
            className="h-8 w-8 rounded-md border border-stone-200 text-base text-stone-700 transition hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315f52] disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => zoomBy(1 / 1.2)}
            disabled={isEmpty}
            aria-label="Уменьшить масштаб"
            title="Уменьшить масштаб"
          >
            −
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative min-h-[300px] flex-1 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#315f52]"
        role="group"
        aria-label="Интерактивный граф литературы"
        aria-describedby="knowledge-graph-keyboard-help"
        aria-keyshortcuts="ArrowDown ArrowUp ArrowLeft ArrowRight Home End Enter Space Escape"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {isEmpty && !loadError && (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-white/85 text-sm text-stone-500">
            Нет узлов для отображения.
          </div>
        )}
        {loadError && (
          <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-white/90 px-6 text-center text-sm text-rose-700" role="status">
            Не удалось загрузить визуализацию графа.
          </div>
        )}
      </div>
      <p id="knowledge-graph-keyboard-help" className="sr-only">
        Установите фокус на граф и используйте стрелки, чтобы выбирать узлы. Клавиши Home и End выбирают первый и последний узел. Нажмите Escape, чтобы снять выделение.
      </p>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {selectedTitle ? `Выбран узел: ${selectedTitle}` : "Узел не выбран."}
      </p>
    </section>
  );
}
