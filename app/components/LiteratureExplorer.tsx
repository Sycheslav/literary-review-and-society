"use client";

import {
  ArrowUpRight, BookOpen, Check, ChevronDown, CircleHelp, ExternalLink,
  FileText, Layers3, Link2, List, Menu, MessageSquare, Network, Quote, Search,
  Share2, ShieldCheck, SlidersHorizontal, Sparkles, X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { CommentsPanel } from "./CommentsPanel";
import { KnowledgeGraph } from "./KnowledgeGraph";

type WorkNode = {
  id: string;
  type: string;
  title: string;
  path?: string;
  summary?: string;
  summary_short?: string;
  authors?: string[];
  year?: number;
  source_kind?: string;
  importance?: string;
  importance_reason?: string;
  importance_basis?: string;
  verification_status?: string;
  retrieval_status?: string;
  source_urls?: string[];
  venue?: string;
  topics?: string[];
  tags?: string[];
  models?: string[];
  agents_count?: number | string;
  key_findings?: string[];
  materials?: string[];
  related?: Array<{ relation: string; target: string }>;
  [key: string]: unknown;
};

type WorkEdge = { source: string; target: string; relation: string; [key: string]: unknown };
type CorpusGraph = { nodes: WorkNode[]; edges: WorkEdge[]; generated_at?: string };
type NavItem = { id: string; title: string; path?: string; children?: NavItem[] };
type SearchDocument = {
  id: string;
  index: number;
  path: string;
  url: string;
  title: string;
  kind: string;
  workId?: string | null;
  entityId?: string | null;
  authors?: string[];
  year?: number;
  summary?: string;
};
type CorpusSearchIndex = {
  documents: SearchDocument[];
  postings: Record<string, number[]>;
  coverage?: Record<string, unknown>;
};
type OutlineSection = {
  id: string;
  title: string;
  level: number;
  content: string[];
  children: OutlineSection[];
};
type Outline = { intro: string; sections: OutlineSection[] };

const topicColors = ["#728e7e", "#bc9352", "#7792a9", "#ad7471", "#718f9a", "#917ea5", "#8c9b6f", "#bd8060"];
const importanceRank: Record<string, number> = { core: 0, supporting: 1, background: 2 };
const kindLabels: Record<string, string> = {
  research: "Исследование",
  review: "Обзор",
  platform: "Платформа",
  repository: "Репозиторий",
  dataset: "Датасет",
  report: "Отчёт",
  web: "Практический кейс",
};
const verificationLabels: Record<string, string> = {
  fulltext_reviewed: "Полный текст проверен",
  repository_reviewed: "Репозиторий проверен",
  abstract_reviewed: "Проверена аннотация",
  source_consolidated: "Сведения сверены по источникам",
  unresolved: "Нужна проверка",
};

function norm(value: unknown) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("ru").replace(/ё/g, "е");
}

function tokens(value: string) {
  return norm(value).match(/[\p{L}\p{N}]+/gu) ?? [];
}

function slug(value: string) {
  return norm(value)
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);
}

function corpusUrl(sourcePath: string) {
  return "/corpus/files/" + sourcePath.split("/").map((part) => encodeURIComponent(part)).join("/");
}

function sourcePathFromHref(currentPath: string, href: string) {
  if (/^(https?:|mailto:|#)/i.test(href)) return null;
  const cleanHref = href.split("#")[0].split("?")[0];
  if (!cleanHref.toLocaleLowerCase().endsWith(".md")) return null;
  const base = cleanHref.startsWith("/") ? [] : currentPath.split("/").slice(0, -1);
  const parts = [...base, ...cleanHref.replace(/^\/+/, "").split("/")];
  const resolved: string[] = [];
  for (const part of parts) {
    if (!part || part === ".") continue;
    if (part === "..") resolved.pop();
    else resolved.push(part);
  }
  return resolved.join("/");
}

function buildOutline(markdown: string): Outline {
  let source = markdown.replace(/^\uFEFF/, "");
  if (source.startsWith("---\n") || source.startsWith("---\r\n")) {
    source = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  }
  const intro: string[] = [];
  const sections: OutlineSection[] = [];
  const stack: OutlineSection[] = [];
  const sectionCounts = new Map<string, number>();
  for (const line of source.split(/\r?\n/)) {
    const match = line.match(/^(#{2,6})\s+(.+)$/);
    if (!match) {
      if (stack.length) stack[stack.length - 1].content.push(line);
      else intro.push(line);
      continue;
    }
    const title = match[2].replace(/\s+#+\s*$/, "").trim();
    const baseId = slug(title) || "section";
    const occurrence = sectionCounts.get(baseId) ?? 0;
    sectionCounts.set(baseId, occurrence + 1);
    const section: OutlineSection = {
      id: occurrence ? baseId + "-" + (occurrence + 1) : baseId,
      title,
      level: match[1].length,
      content: [],
      children: [],
    };
    while (stack.length && stack[stack.length - 1].level >= section.level) stack.pop();
    if (stack.length) stack[stack.length - 1].children.push(section);
    else sections.push(section);
    stack.push(section);
  }
  const cleanedIntro = intro
    .filter((line) => !/^#\s+/.test(line.trim()))
    .filter((line) => !/^\[К главному обзору\]/.test(line.trim()))
    .join("\n")
    .trim();
  return { intro: cleanedIntro, sections };
}

function MarkdownBody({
  markdown,
  sourcePath,
  onOpenLocalPath,
}: {
  markdown: string;
  sourcePath?: string;
  onOpenLocalPath?: (path: string) => void;
}) {
  const components: Components = {
    a: ({ href, children, ...props }) => {
      const local = href && sourcePath ? sourcePathFromHref(sourcePath, href) : null;
      if (local && onOpenLocalPath) {
        return (
          <a
            {...props}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              onOpenLocalPath(local);
            }}
          >
            {children}
          </a>
        );
      }
      return (
        <a {...props} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noreferrer" : undefined}>
          {children}
        </a>
      );
    },
  };
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

function OutlineReader({
  outline,
  sourcePath,
  onOpenLocalPath,
  onSelection,
  className = "",
}: {
  outline: Outline;
  sourcePath?: string;
  onOpenLocalPath?: (path: string) => void;
  onSelection?: (quote: string, sectionId?: string) => void;
  className?: string;
}) {
  const handleSelection = (event: React.MouseEvent<HTMLElement>) => {
    const quote = window.getSelection()?.toString().trim();
    if (!quote || !onSelection) return;
    const section = (event.target as HTMLElement).closest("[data-section-id]")?.getAttribute("data-section-id");
    onSelection(quote.slice(0, 1000), section ?? undefined);
  };

  const renderSection = (section: OutlineSection, index: number): React.ReactNode => (
    <details
      key={section.id + "-" + index}
      className={"outline-item level-" + section.level}
      data-section-id={section.id}
      open={section.level === 2 && index < 2}
    >
      <summary>{section.title}</summary>
      <div className="outline-item-body">
        {section.content.join("\n").trim() && (
          <MarkdownBody markdown={section.content.join("\n")} sourcePath={sourcePath} onOpenLocalPath={onOpenLocalPath} />
        )}
        {section.children.map((child, childIndex) => renderSection(child, childIndex))}
      </div>
    </details>
  );

  return (
    <div className={className} onMouseUp={handleSelection}>
      {outline.intro && (
        <div className="outline-intro">
          <MarkdownBody markdown={outline.intro} sourcePath={sourcePath} onOpenLocalPath={onOpenLocalPath} />
        </div>
      )}
      {outline.sections.map(renderSection)}
    </div>
  );
}

function FullTextModal({
  title,
  path,
  sourceUrls,
  onClose,
  onQuote,
}: {
  title: string;
  path?: string;
  sourceUrls?: string[];
  onClose: () => void;
  onQuote: (quote: string, sectionId?: string) => void;
}) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(Boolean(path));
  const [error, setError] = useState("");
  const [quote, setQuote] = useState("");
  const [sectionId, setSectionId] = useState<string>();
  const closeRef = useRef<HTMLButtonElement>(null);
  const outline = useMemo(() => buildOutline(text), [text]);

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (!path) {
      setBusy(false);
      return;
    }
    let active = true;
    fetch(corpusUrl(path))
      .then((response) => {
        if (!response.ok) throw new Error("Текст не найден в локальной библиотеке.");
        return response.text();
      })
      .then((content) => { if (active) setText(content); })
      .catch((reason: unknown) => { if (active) setError(reason instanceof Error ? reason.message : "Не удалось открыть полный текст."); })
      .finally(() => { if (active) setBusy(false); });
    return () => { active = false; };
  }, [path]);

  const onSelection = (selected: string, section?: string) => {
    setQuote(selected);
    setSectionId(section);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="fulltext-dialog" role="dialog" aria-modal="true" aria-labelledby="fulltext-title">
        {text && (
          <nav className="fulltext-sidebar" aria-label="Оглавление полного текста">
            <h3>Оглавление</h3>
            <p>Нажмите на раздел, чтобы раскрыть его в тексте</p>
            {outline.sections.map((section, index) => (
              <button key={section.id + index} className={"toc-link level-" + section.level} onClick={() => {
                const target = document.querySelector('[data-section-id="' + section.id + '"]');
                target?.scrollIntoView({ behavior: "smooth", block: "start" });
                if (target instanceof HTMLDetailsElement) target.open = true;
              }}>{section.title}</button>
            ))}
          </nav>
        )}
        <div className="fulltext-main">
          <header className="fulltext-head">
            <div>
              <div className="eyebrow">Сохранённый материал · Markdown</div>
              <h2 id="fulltext-title">{title}</h2>
            </div>
            <button ref={closeRef} className="icon-button" onClick={onClose} aria-label="Закрыть полный текст"><X size={17} /></button>
          </header>
          {busy ? (
            <div className="fulltext-empty"><span className="loading">Открываем локальную копию…</span></div>
          ) : error || !path ? (
            <div className="fulltext-empty">
              <strong>{error || "Локальная копия полного текста не найдена"}</strong>
              <span>Доступные страницы первоисточника:</span>
              <div className="source-links" style={{ marginTop: 12 }}>
                {(sourceUrls ?? []).map((url) => <a key={url} href={url} target="_blank" rel="noreferrer"><ExternalLink size={12} />{url}</a>)}
              </div>
            </div>
          ) : (
            <>
              <div className="fulltext-body">
                <OutlineReader outline={outline} sourcePath={path} onSelection={onSelection} />
              </div>
              {quote && (
                <div className="text-selection-indicator" style={{ margin: "0 20px 13px" }}>
                  <span>Выбран фрагмент для заметки</span>{" "}
                  <button className="button button-primary" onClick={() => onQuote(quote, sectionId)}><MessageSquare size={13} /> Обсудить фрагмент</button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function labelForVerification(value?: string) {
  return value ? (verificationLabels[value] ?? value.replaceAll("_", " ")) : "Статус не указан";
}

function labelForKind(value?: string) {
  return value ? (kindLabels[value] ?? value.replaceAll("_", " ")) : "Тип не указан";
}

export function LiteratureExplorer() {
  const [graph, setGraph] = useState<CorpusGraph | null>(null);
  const [navigation, setNavigation] = useState<NavItem | null>(null);
  const [searchIndex, setSearchIndex] = useState<CorpusSearchIndex | null>(null);
  const [query, setQuery] = useState("");
  const [searchBusy, setSearchBusy] = useState(false);
  const [searchIds, setSearchIds] = useState<string[] | null>(null);
  const [searchDocumentIndices, setSearchDocumentIndices] = useState<number[] | null>(null);
  const [searchError, setSearchError] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState("home");
  const [viewMode, setViewMode] = useState<"graph" | "list">("graph");
  const [showAllGraph, setShowAllGraph] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  const [yearFilter, setYearFilter] = useState("all");
  const [kindFilter, setKindFilter] = useState("all");
  const [verificationFilter, setVerificationFilter] = useState("all");
  const [importanceFilter, setImportanceFilter] = useState("all");
  const [detailOpen, setDetailOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modal, setModal] = useState<{ title: string; path?: string; sourceUrls?: string[] } | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [commentTarget, setCommentTarget] = useState("");
  const [selectedQuote, setSelectedQuote] = useState("");
  const [copied, setCopied] = useState(false);
  const [loadError, setLoadError] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let active = true;
    Promise.all([
      fetch("/corpus/graph.json").then((response) => { if (!response.ok) throw new Error("graph"); return response.json(); }),
      fetch("/corpus/navigation.json").then((response) => { if (!response.ok) throw new Error("navigation"); return response.json(); }),
    ])
      .then(([graphData, navData]) => {
        if (!active) return;
        setGraph(graphData as CorpusGraph);
        setNavigation(navData as NavItem);
        const params = new URLSearchParams(window.location.search);
        const topicParam = params.get("topic");
        const workParam = params.get("work");
        if (topicParam) setActiveTopic(topicParam);
        if (workParam) setSelectedId(workParam);
        else if (topicParam) setSelectedId("topic-" + topicParam);
      })
      .catch(() => { if (active) setLoadError("Не удалось загрузить корпус. Обновите страницу или проверьте доступность файлов обзора."); });
    return () => { active = false; };
  }, []);

  const allNodes = graph?.nodes ?? [];
  const topicsFromGraph = useMemo(() => allNodes.filter((node) => node.type === "topic"), [allNodes]);
  const indexNodes = useMemo(() => allNodes.filter((node) => node.type === "index"), [allNodes]);
  const topicSlug = (node: WorkNode) => node.path?.replace(/^topics\//, "").replace(/\.md$/, "") ?? node.id.replace(/^topic-/, "");
  const topicOrderIds = useMemo(() => navigation?.children?.filter((item) => item.id.startsWith("topic-")).map((item) => item.id) ?? [], [navigation]);
  const topics = useMemo(() => [
    ...topicOrderIds.map((id) => topicsFromGraph.find((node) => node.id === id)).filter((node): node is WorkNode => Boolean(node)),
    ...topicsFromGraph.filter((node) => !topicOrderIds.includes(node.id)),
  ], [topicOrderIds, topicsFromGraph]);
  const workNodes = useMemo(() => allNodes.filter((node) => node.type === "work"), [allNodes]);
  const selectedNode = allNodes.find((node) => node.id === selectedId) ?? allNodes.find((node) => node.type === "home") ?? null;
  const activeTopicNode = topics.find((topic) => topicSlug(topic) === activeTopic);
  const topicCount = (topicId: string) => workNodes.filter((node) => node.topics?.includes(topicId)).length;
  const allYears = [...new Set(workNodes.map((node) => node.year).filter((year): year is number => Boolean(year)))].sort((a, b) => b - a);
  const allKinds = [...new Set(workNodes.map((node) => node.source_kind).filter((kind): kind is string => Boolean(kind)))].sort();

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      } else if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes((event.target as HTMLElement).tagName)) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  useEffect(() => {
    if (!graph) return;
    const params = new URLSearchParams(window.location.search);
    if (activeTopic) params.set("topic", activeTopic);
    else params.delete("topic");
    if (selectedNode?.type === "work") params.set("work", selectedNode.id);
    else params.delete("work");
    const next = params.toString();
    window.history.replaceState({}, "", window.location.pathname + (next ? "?" + next : ""));
  }, [activeTopic, selectedNode?.id, selectedNode?.type, graph]);

  useEffect(() => {
    const clean = query.trim();
    if (!clean) {
      setSearchIds(null);
      setSearchDocumentIndices(null);
      setSearchBusy(false);
      setSearchError("");
      return;
    }
    let active = true;
    const timer = window.setTimeout(async () => {
      setSearchBusy(true);
      setSearchError("");
      try {
        let index = searchIndex;
        if (!index) {
          const response = await fetch("/corpus/search-index.json");
          if (!response.ok) throw new Error("search");
          index = await response.json() as CorpusSearchIndex;
          if (active) setSearchIndex(index);
        }
        const terms = [...new Set(tokens(clean))];
        if (!terms.length) {
          if (active) {
            setSearchIds([]);
            setSearchDocumentIndices([]);
          }
          return;
        }
        const lists = terms.map((term) => index?.postings[term] ?? []);
        if (lists.some((list) => list.length === 0)) {
          if (active) {
            setSearchIds([]);
            setSearchDocumentIndices([]);
          }
          return;
        }
        const shortest = [...lists].sort((a, b) => a.length - b.length)[0];
        const otherSets = lists.slice().sort((a, b) => a.length - b.length).slice(1).map((list) => new Set(list));
        const matchingIndices = shortest.filter((id) => otherSets.every((set) => set.has(id)));
        if (active) setSearchDocumentIndices(matchingIndices);
        const matched = new Set<string>();
        for (const indexNumber of matchingIndices) {
          const document = index?.documents[indexNumber];
          const id = document?.workId ?? (document?.kind === "work" ? document.entityId : undefined);
          if (id && workNodes.some((node) => node.id === id)) matched.add(id);
        }
        const normalizedQuery = norm(clean);
        const ranked = [...matched].sort((left, right) => {
          const a = workNodes.find((node) => node.id === left);
          const b = workNodes.find((node) => node.id === right);
          const score = (node?: WorkNode) => {
            if (!node) return 0;
            const title = norm(node.title);
            const summary = norm(node.summary_short ?? node.summary);
            return (title.includes(normalizedQuery) ? 10 : 0) +
              (norm((node.authors ?? []).join(" ")).includes(normalizedQuery) ? 6 : 0) +
              (summary.includes(normalizedQuery) ? 4 : 0) +
              (importanceRank[node.importance ?? ""] === 0 ? 1 : 0);
          };
          return score(b) - score(a);
        });
        if (active) setSearchIds(ranked);
      } catch {
        if (active) {
          setSearchError("Поиск по полным текстам временно недоступен. Можно искать по названиям и аннотациям.");
          const local = workNodes.filter((node) => norm([node.title, node.summary, node.summary_short, ...(node.authors ?? []), ...(node.tags ?? [])].join(" ")).includes(norm(clean))).map((node) => node.id);
          setSearchIds(local);
          setSearchDocumentIndices([]);
        }
      } finally {
        if (active) setSearchBusy(false);
      }
    }, 240);
    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [query, searchIndex, graph]);

  const filteredWorks = useMemo(() => {
    let items = workNodes;
    if (activeTopic && !query.trim()) items = items.filter((node) => node.topics?.includes(activeTopic));
    if (searchIds) items = items.filter((node) => searchIds.includes(node.id));
    if (yearFilter !== "all") items = items.filter((node) => String(node.year ?? "") === yearFilter);
    if (kindFilter !== "all") items = items.filter((node) => node.source_kind === kindFilter);
    if (verificationFilter !== "all") items = items.filter((node) => node.verification_status === verificationFilter);
    if (importanceFilter !== "all") items = items.filter((node) => node.importance === importanceFilter);
    return [...items].sort((a, b) => {
      const rank = (importanceRank[a.importance ?? ""] ?? 3) - (importanceRank[b.importance ?? ""] ?? 3);
      return rank || (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title, "ru");
    });
  }, [workNodes, activeTopic, query, searchIds, yearFilter, kindFilter, verificationFilter, importanceFilter]);

  const graphNodesForView = useMemo(() => {
    if (!graph) return [];
    const workScope = activeTopic && !query.trim()
      ? filteredWorks.filter((node) => !query || (searchIds?.includes(node.id) ?? true))
      : filteredWorks;
    const focusSet = new Set(workScope.filter((node) => showAllGraph || Boolean(activeTopic) || Boolean(query.trim()) || node.importance === "core").map((node) => node.id));
    const contextTopics = activeTopic && !query.trim()
      ? topics.filter((topic) => topicSlug(topic) === activeTopic)
      : topics;
    for (const topic of contextTopics) focusSet.add(topic.id);
    const visible = allNodes.filter((node) => {
      if (node.type === "work") return focusSet.has(node.id);
      if (node.type === "topic") return contextTopics.some((topic) => topic.id === node.id);
      if (node.type === "material" && showMaterials) {
        const materialEdge = graph.edges.find((edge) => edge.target === node.id && edge.relation === "has_material");
        return Boolean(materialEdge && focusSet.has(materialEdge.source));
      }
      return false;
    });
    return visible;
  }, [graph, allNodes, activeTopic, filteredWorks, query, searchIds, showAllGraph, showMaterials, topics]);

  const visibleIds = useMemo(() => new Set(graphNodesForView.map((node) => node.id)), [graphNodesForView]);
  const graphEdgesForView = useMemo(() => graph?.edges.filter((edge) =>
    visibleIds.has(edge.source) && visibleIds.has(edge.target) &&
    (showMaterials || edge.relation !== "has_material")
  ) ?? [], [graph, visibleIds, showMaterials]);

  const activeDocUrl = selectedNode?.path ? corpusUrl(selectedNode.path) : "";
  const [documentText, setDocumentText] = useState("");
  const [documentBusy, setDocumentBusy] = useState(false);
  const [documentError, setDocumentError] = useState("");
  const outline = useMemo(() => buildOutline(documentText), [documentText]);

  useEffect(() => {
    if (!activeDocUrl) {
      setDocumentText("");
      setDocumentError("");
      return;
    }
    let active = true;
    setDocumentBusy(true);
    setDocumentError("");
    fetch(activeDocUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Документ недоступен в локальном корпусе.");
        return response.text();
      })
      .then((content) => { if (active) setDocumentText(content); })
      .catch((reason: unknown) => { if (active) setDocumentError(reason instanceof Error ? reason.message : "Не удалось загрузить карточку."); })
      .finally(() => { if (active) setDocumentBusy(false); });
    return () => { active = false; };
  }, [activeDocUrl]);

  useEffect(() => {
    setSelectedQuote("");
    setCommentTarget(selectedNode?.id ?? "");
    setShowComments(false);
  }, [selectedNode?.id]);

  const chooseTopic = (topic: WorkNode | null) => {
    const id = topic ? topicSlug(topic) : null;
    setActiveTopic(id);
    setSelectedId(topic?.id ?? "home");
    setSidebarOpen(false);
    setDetailOpen(Boolean(topic));
  };

  const chooseNode = (nodeId: string) => {
    const node = allNodes.find((item) => item.id === nodeId);
    if (!node) return;
    if (node.type === "topic") {
      const topic = topics.find((item) => item.id === node.id);
      if (topic) {
        setActiveTopic(topicSlug(topic));
        setSelectedId(topic.id);
      }
    } else {
      setSelectedId(node.id);
    }
    setDetailOpen(true);
    setSidebarOpen(false);
  };

  const openLocalPath = (path: string) => {
    const node = allNodes.find((item) => item.path === path);
    if (!node) {
      setModal({ title: path.split("/").at(-1) ?? path, path });
      return;
    }
    if (node.type === "topic") setActiveTopic(topicSlug(node));
    else if (node.type === "work") setActiveTopic(null);
    setSelectedId(node.id);
    setDetailOpen(true);
  };

  const shareCurrent = async () => {
    const url = new URL(window.location.href);
    if (activeTopic) url.searchParams.set("topic", activeTopic);
    else url.searchParams.delete("topic");
    if (selectedNode?.type === "work") url.searchParams.set("work", selectedNode.id);
    else url.searchParams.delete("work");
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Скопируйте ссылку на этот фрагмент обзора:", url.toString());
    }
  };

  const showDiscussion = (targetId: string, quote = "") => {
    setCommentTarget(targetId);
    setSelectedQuote(quote);
    setShowComments(true);
    setDetailOpen(true);
  };

  const selectedText = (quote: string, sectionId?: string) => {
    setSelectedQuote(quote);
    setCommentTarget(sectionId ? selectedNode?.id + ":" + sectionId : selectedNode?.id ?? "");
  };

  const availableMaterials = selectedNode?.type === "work"
    ? [
        ...(selectedNode.materials ?? []),
        ...(graph?.edges.filter((edge) => edge.source === selectedNode.id && edge.relation === "has_material")
          .map((edge) => allNodes.find((node) => node.id === edge.target)?.path)
          .filter((path): path is string => Boolean(path)) ?? []),
      ]
    : [];
  const fullTextPath = availableMaterials.find((path) => path.endsWith("fulltext.md"));
  const relatedWorks = (selectedNode?.related ?? [])
    .map((relation) => ({ ...relation, node: allNodes.find((node) => node.id === relation.target) }))
    .filter((relation): relation is typeof relation & { node: WorkNode } => Boolean(relation.node));
  const focusGraphCount = graphNodesForView.filter((node) => node.type === "work").length;
  const sourceMetadata = selectedNode?.type === "work" ? selectedNode : null;
  const isIntro = !selectedNode || selectedNode.type === "home";
  const isTopic = selectedNode?.type === "topic";
  const isIndexOrMaterial = selectedNode?.type === "index" || selectedNode?.type === "material";
  const additionalSearchDocs = searchDocumentIndices
    ? searchDocumentIndices
        .map((index) => searchIndex?.documents[index])
        .filter((doc): doc is SearchDocument => doc !== undefined && !doc.workId && doc.kind !== "work")
    : [];

  if (loadError) {
    return <main className="explorer"><div className="empty-state" style={{ margin: 40 }}><strong>Не удалось открыть литературный обзор</strong>{loadError}</div></main>;
  }

  return (
    <main className="explorer">
      <header className="topbar">
        <button className="icon-button mobile-menu" onClick={() => setSidebarOpen((open) => !open)} aria-label="Открыть темы"><Menu size={17} /></button>
        <a className="brand" href="/" aria-label="На главную обзора">
          <span className="brand-mark"><Layers3 size={17} /></span>
          <span className="brand-copy"><strong>Социумы ИИ-агентов</strong><span>Лаборатория № 57 · карта исследований</span></span>
        </a>
        <label className="top-search">
          <Search size={15} />
          <input
            ref={searchRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Найти работу, автора, метод или термин…"
            aria-label="Поиск по обзору"
          />
          {query ? <button className="icon-button" style={{ width: 24, height: 24, border: 0 }} onClick={() => setQuery("")} aria-label="Очистить поиск"><X size={13} /></button> : <kbd>Ctrl / ⌘ K</kbd>}
        </label>
        <div className="top-actions">
          <button className="button" onClick={shareCurrent} title="Скопировать ссылку на текущую тему или работу">
            {copied ? <Check size={14} /> : <Share2 size={14} />}{copied ? "Ссылка скопирована" : "Поделиться"}
          </button>
          <button className="icon-button" onClick={() => chooseNode("home")} aria-label="О проекте" title="О проекте"><CircleHelp size={16} /></button>
        </div>
      </header>

      <div className="workspace">
        <div className={"sidebar" + (sidebarOpen ? " open" : "")}>
          <div className="sidebar-section">
            <div className="sidebar-head"><span className="eyebrow">Навигация по темам</span><button className="icon-button mobile-menu" onClick={() => setSidebarOpen(false)} aria-label="Закрыть меню"><X size={15} /></button></div>
            <div className="topic-list">
              <button className={"topic-button" + (!activeTopic ? " active" : "")} onClick={() => chooseTopic(null)}>
                <span className="topic-dot" style={{ "--dot": "#4e7764" } as React.CSSProperties} />
                <span className="topic-name">Весь обзор</span>
                <span className="topic-count">{workNodes.length}</span>
              </button>
              {topics.map((topic, index) => {
                const id = topicSlug(topic);
                return (
                  <button key={topic.id} className={"topic-button" + (activeTopic === id ? " active" : "")} onClick={() => chooseTopic(topic)}>
                    <span className="topic-dot" style={{ "--dot": topicColors[index % topicColors.length] } as React.CSSProperties} />
                    <span className="topic-name">{topic.title}</span>
                    <span className="topic-count">{topicCount(id)}</span>
                  </button>
                );
              })}
            </div>
          </div>
          {indexNodes.length > 0 && (
            <div className="sidebar-section">
              <div className="sidebar-head"><span className="eyebrow">Каталоги обзора</span></div>
              <div className="topic-list">
                {indexNodes.map((item) => (
                  <button key={item.id} className={"topic-button" + (selectedId === item.id ? " active" : "")} onClick={() => chooseNode(item.id)}>
                    <span className="topic-dot" style={{ "--dot": "#a9a18a" } as React.CSSProperties} />
                    <span className="topic-name">{item.title}</span>
                    <ArrowUpRight size={12} />
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="sidebar-section">
            <div className="sidebar-head"><span className="eyebrow">Рабочие материалы</span></div>
            <div className="topic-list">
              <button className="topic-button" onClick={() => setModal({ title: "Продолжение литературного обзора", path: "ПРОДОЛЖЕНИЕ.md" })}>
                <span className="topic-dot" style={{ "--dot": "#a9a18a" } as React.CSSProperties} />
                <span className="topic-name">Продолжение обзора</span>
                <FileText size={12} />
              </button>
            </div>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-head"><span className="eyebrow">Как пользоваться</span></div>
            <div className="sidebar-note">
              <strong>Граф показывает связи между работами</strong>
              Выберите узел, чтобы открыть краткую карточку, проверку источника и вложенные разделы. Полный локальный текст открывается отдельно.
            </div>
            <div className="sidebar-note">
              <strong>Обсуждайте общий корпус</strong>
              Оставляйте заметки к работе, разделу или выделенному фрагменту. Имя сохраняется только в вашем браузере.
            </div>
          </div>
        </div>

        <section className="main-column" aria-label="Карта и список литературы">
          <div className="intro-row">
            <div className="intro-copy">
              <div className="eyebrow">Интерактивный литературный обзор</div>
              <h1>{query ? "Поиск по всему корпусу" : activeTopicNode?.title ?? "Как складываются социумы ИИ-агентов"}</h1>
              <p>
                Исследования о том, как языковые агенты формируют связи, координируются, делятся памятью и следуют правилам — и как отличить результат среды и промпта от наблюдаемого поведения.
              </p>
            </div>
            <div className="intro-tools">
              <button className="button" onClick={() => { setViewMode(viewMode === "graph" ? "list" : "graph"); }} title="Переключить представление">
                {viewMode === "graph" ? <List size={14} /> : <Network size={14} />}{viewMode === "graph" ? "Список" : "Граф"}
              </button>
            </div>
          </div>

          <div className="stat-strip" aria-label="Размер и проверка корпуса">
            <span className="stat-chip"><BookOpen size={13} /><strong>{workNodes.length}</strong> работ</span>
            <span className="stat-chip"><Layers3 size={13} /><strong>{topics.length}</strong> направлений</span>
            <span className="stat-chip"><ShieldCheck size={13} /><strong>{allNodes.filter((node) => node.type === "work" && node.verification_status === "fulltext_reviewed").length}</strong> полных текстов проверено</span>
            <span className="stat-chip"><FileText size={13} /><strong>{allNodes.filter((node) => node.type === "material" && String(node.title).includes("fulltext")).length}</strong> локальных полных текстов</span>
          </div>

          <div className="notice">
            <Sparkles size={14} />
            <span><strong>Как читать результаты:</strong> корпус целенаправленно собран и не претендует на полноту систематического обзора. Карточки различают данные первоисточника, уровень проверки и интерпретацию; слова «дружба» и «социум» здесь — исследовательские метафоры, не свидетельство чувств или сознания.</span>
          </div>

          <div className="filterbar">
            <span className="filterbar-label"><SlidersHorizontal size={13} style={{ verticalAlign: "middle" }} /> Фильтры</span>
            <label className="select-button">Год <select aria-label="Фильтр по году" value={yearFilter} onChange={(event) => setYearFilter(event.target.value)}><option value="all">Все</option>{allYears.map((year) => <option key={year} value={year}>{year}</option>)}</select><ChevronDown size={12} /></label>
            <label className="select-button">Материал <select aria-label="Фильтр по типу материала" value={kindFilter} onChange={(event) => setKindFilter(event.target.value)}><option value="all">Все типы</option>{allKinds.map((kind) => <option key={kind} value={kind}>{labelForKind(kind)}</option>)}</select><ChevronDown size={12} /></label>
            <label className="select-button">Проверка <select aria-label="Фильтр по проверке" value={verificationFilter} onChange={(event) => setVerificationFilter(event.target.value)}><option value="all">Любой статус</option>{Object.entries(verificationLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select><ChevronDown size={12} /></label>
            <label className="select-button">Важность <select aria-label="Фильтр по значимости" value={importanceFilter} onChange={(event) => setImportanceFilter(event.target.value)}><option value="all">Все работы</option><option value="core">Опорные</option><option value="supporting">Дополняющие</option><option value="background">Контекст</option></select><ChevronDown size={12} /></label>
          </div>

          <div className="viewbar">
            <div className="viewbar-left">
              <h2>{query ? "Совпадения в корпусе" : activeTopicNode ? "Связи в направлении" : "Карта исследований"}</h2>
              <span className="view-description">{viewMode === "graph" ? focusGraphCount + " работ · " + graphEdgesForView.length + " связей" : filteredWorks.length + " работ в подборке"}</span>
            </div>
            <div className="segmented" role="tablist" aria-label="Представление обзора">
              <button role="tab" aria-selected={viewMode === "graph"} className={viewMode === "graph" ? "active" : ""} onClick={() => setViewMode("graph")}><Network size={13} /> Граф</button>
              <button role="tab" aria-selected={viewMode === "list"} className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}><List size={13} /> Список</button>
            </div>
          </div>

          {viewMode === "graph" ? (
            <>
              <div className="graph-frame">
                {graph ? (
                  <KnowledgeGraph
                    nodes={graphNodesForView}
                    edges={graphEdgesForView}
                    selectedId={selectedNode?.id ?? null}
                    onSelect={(id) => { if (id) chooseNode(id); }}
                  />
                ) : <div className="fulltext-empty"><span className="loading">Загружаем карту корпуса…</span></div>}
              </div>
              <div className="graph-key" aria-label="Условные обозначения графа">
                <span><i style={{ "--dot": "#607f6e" } as React.CSSProperties} /> Опорная работа</span>
                <span><i style={{ "--dot": "#c3934e" } as React.CSSProperties} /> Направление</span>
                <span><i style={{ "--dot": "#8298aa" } as React.CSSProperties} /> Материал</span>
                <span>Линии показывают тематические и цитируемые связи</span>
              </div>
              <div className="filterbar" style={{ marginTop: 11 }}>
                <label className="checkbox-chip"><input type="checkbox" checked={showAllGraph} onChange={(event) => setShowAllGraph(event.target.checked)} />Все работы на графе</label>
                <label className="checkbox-chip"><input type="checkbox" checked={showMaterials} onChange={(event) => setShowMaterials(event.target.checked)} />Материалы и тексты</label>
                {query && <span className="filterbar-label">{searchBusy ? "Ищем по полным текстам…" : "Поиск охватывает локальные материалы"}</span>}
              </div>
            </>
          ) : null}

          <div className="results-heading">
            <h2>{query ? "Результаты поиска" : activeTopicNode ? "Работы по теме" : "Ключевые и дополняющие работы"}</h2>
            <span>{query ? (searchBusy ? "Поиск…" : filteredWorks.length + " найдено") : "Сначала опорные работы, затем дополнительные материалы"}</span>
          </div>
          {searchError && <p className="error-text">{searchError}</p>}
          {filteredWorks.length ? (
            <div className="work-list">
              {filteredWorks.slice(0, 160).map((work) => (
                <button key={work.id} className={"work-card" + (selectedNode?.id === work.id ? " selected" : "")} onClick={() => chooseNode(work.id)}>
                  <div>
                    <h3>{work.title}</h3>
                    <p>{work.summary_short ?? work.summary ?? "Аннотация в карточке пока отсутствует."}</p>
                    <span className="work-meta">
                      {work.year && <span className="badge">{work.year}</span>}
                      <span className="badge">{labelForKind(work.source_kind)}</span>
                      {work.importance === "core" && <span className="badge badge-important">Опорная</span>}
                      <span className={"badge " + (work.verification_status === "fulltext_reviewed" ? "badge-verified" : "badge-unverified")}>{labelForVerification(work.verification_status)}</span>
                    </span>
                  </div>
                  <ArrowUpRight className="work-arrow" size={15} />
                </button>
              ))}
              {filteredWorks.length > 160 && <div className="empty-state">Показаны первые 160 результатов. Уточните запрос или фильтры, чтобы сузить список.</div>}
            </div>
          ) : (
            <div className="empty-state"><strong>{query ? "Совпадений не найдено" : "В этой выборке пока нет работ"}</strong>{query ? "Проверьте написание или уберите один из фильтров." : "Выберите другое направление или сбросьте фильтры."}</div>
          )}
          {query && additionalSearchDocs.length > 0 && (
            <>
              <div className="results-heading">
                <h2>Другие совпадения в материалах</h2>
                <span>{additionalSearchDocs.length} страниц корпуса</span>
              </div>
              <div className="work-list">
                {additionalSearchDocs.slice(0, 40).map((doc) => {
                  const entityNode = doc.entityId ? allNodes.find((node) => node.id === doc.entityId) : undefined;
                  return (
                    <button key={doc.id} className="work-card" onClick={() => {
                      if (entityNode) chooseNode(entityNode.id);
                      else setModal({ title: doc.title, path: doc.path });
                    }}>
                      <div>
                        <h3>{doc.title}</h3>
                        <p>{doc.path}</p>
                        <span className="work-meta">
                          <span className="badge">{doc.kind === "material" ? "Самостоятельный материал" : doc.kind === "index" ? "Каталог" : doc.kind === "topic" ? "Тематический обзор" : "Документ корпуса"}</span>
                        </span>
                      </div>
                      <ArrowUpRight className="work-arrow" size={15} />
                    </button>
                  );
                })}
              </div>
            </>
          )}
          {searchBusy && query && <p className="loading" aria-live="polite">Индексируем запрос по текстам работ…</p>}
          <div style={{ marginTop: 27, color: "#89928c", fontSize: 10 }}>
            Последнее обновление корпуса: {graph?.generated_at ?? "дата указана в исходном обзоре"} · <button className="link-button" style={{ border: 0, padding: 0, background: "transparent", color: "#557562" }} onClick={() => chooseNode("home")}>О методике и границах обзора</button>
          </div>
        </section>

        <aside className={"detail-panel" + (detailOpen ? " open" : "")} aria-label="Подробности выбранного материала">
          <div className="detail-inner">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="icon-button mobile-detail-close" onClick={() => setDetailOpen(false)} aria-label="Закрыть подробности"><X size={16} /></button>
            </div>
            {!selectedNode ? (
              <div className="detail-empty"><span className="empty-icon"><BookOpen size={19} /></span><strong>Выберите узел на карте</strong><span>Здесь появятся краткое содержание, источники и подробности.</span></div>
            ) : (
              <>
                <div className="detail-kicker">
                  {sourceMetadata ? <BookOpen size={13} /> : isTopic ? <Layers3 size={13} /> : <Sparkles size={13} />}
                  {sourceMetadata ? labelForKind(sourceMetadata.source_kind) : isTopic ? "Тематическое направление" : "Литературный обзор"}
                </div>
                <h2 className="detail-title">{selectedNode.title}</h2>
                {sourceMetadata?.authors?.length ? <p className="detail-author">{sourceMetadata.authors.join(", ")}{sourceMetadata.year ? " · " + sourceMetadata.year : ""}</p> : null}
                <p className="detail-summary">{sourceMetadata?.summary_short ?? sourceMetadata?.summary ?? (isTopic ? selectedNode.summary : "") ?? (isIntro ? "Карта исследований о взаимодействующих языковых агентах: от виртуальных городов и общих ресурсов до доверия, норм и методологии. Выберите тему или работу, чтобы углубиться." : "")}</p>

                {sourceMetadata && (
                  <>
                    <div className="detail-facts">
                      <div className="fact"><span>Год</span><strong>{sourceMetadata.year ?? "не указан"}</strong></div>
                      <div className="fact"><span>Тип источника</span><strong>{labelForKind(sourceMetadata.source_kind)}</strong></div>
                      <div className="fact"><span>Проверка</span><strong>{labelForVerification(sourceMetadata.verification_status)}</strong></div>
                      <div className="fact"><span>Значимость</span><strong>{sourceMetadata.importance === "core" ? "Опорная работа" : sourceMetadata.importance ?? "не размечена"}</strong></div>
                    </div>
                    {sourceMetadata.venue && <div className="detail-section"><h3>Публикация</h3><p>{sourceMetadata.venue}</p>{typeof sourceMetadata.publication_status === "string" && <p>{sourceMetadata.publication_status}</p>}</div>}
                    {sourceMetadata.importance_reason && <div className="detail-section"><h3>Почему включена в обзор</h3><p>{sourceMetadata.importance_reason}</p>{sourceMetadata.importance_basis && <span className="badge">{sourceMetadata.importance_basis === "automatic_preliminary" ? "Предварительная автоматическая оценка" : sourceMetadata.importance_basis === "editorial" ? "Редакторская оценка" : sourceMetadata.importance_basis}</span>}</div>}
                    {!!sourceMetadata.models?.length && <div className="detail-section"><h3>Модели</h3><div className="work-meta">{sourceMetadata.models.map((model) => <span className="badge" key={model}>{model}</span>)}</div></div>}
                    {!!sourceMetadata.key_findings?.length && <div className="detail-section"><h3>Наблюдаемые результаты в карточке</h3><ul>{sourceMetadata.key_findings.slice(0, 5).map((finding, index) => <li key={index}>{finding}</li>)}</ul></div>}
                    {!!sourceMetadata.source_urls?.length && <div className="detail-section"><h3>Первоисточники и версии</h3><div className="source-links">{sourceMetadata.source_urls.map((url) => <a key={url} href={url} target="_blank" rel="noreferrer"><ExternalLink size={12} />{url}</a>)}</div></div>}
                    {!!sourceMetadata.topics?.length && <div className="detail-section"><h3>Связанные направления</h3><div className="work-meta">{sourceMetadata.topics.map((topic) => {
                      const relatedTopic = topics.find((candidate) => topicSlug(candidate) === topic);
                      return relatedTopic ? <button key={topic} className="badge" style={{ cursor: "pointer" }} onClick={() => chooseTopic(relatedTopic)}>{relatedTopic.title}</button> : <span className="badge" key={topic}>{topic}</span>;
                    })}</div></div>}
                    {!!relatedWorks.length && <div className="detail-section"><h3>Связанные работы</h3><div className="relation-list">{relatedWorks.slice(0, 7).map(({ relation, node }) => <button className="relation-item link-button" style={{ justifyContent: "flex-start", border: 0, padding: 0, background: "transparent", textAlign: "left" }} key={relation + node.id} onClick={() => chooseNode(node.id)}><Link2 size={12} />{node.title}<span className="badge">{relation}</span></button>)}</div></div>}
                  </>
                )}

                <div className="detail-actions">
                  {sourceMetadata && fullTextPath && <button className="button button-primary" onClick={() => setModal({ title: sourceMetadata.title, path: fullTextPath, sourceUrls: sourceMetadata.source_urls })}><FileText size={13} /> Полный текст</button>}
                  {sourceMetadata && !fullTextPath && <span className="badge">Локальный полный текст не найден</span>}
                  {selectedNode.type === "material" && selectedNode.path && <button className="button button-primary" onClick={() => setModal({ title: selectedNode.title, path: selectedNode.path, sourceUrls: sourceMetadata?.source_urls })}><FileText size={13} /> Открыть материал</button>}
                  {(sourceMetadata?.path || isTopic) && <button className="button" onClick={() => showDiscussion(commentTarget || selectedNode.id, selectedQuote)}><MessageSquare size={13} /> Обсудить</button>}
                  <button className="button button-quiet" onClick={shareCurrent}><Share2 size={13} /> Ссылка</button>
                </div>

                {selectedQuote && !showComments && <div className="text-selection-indicator"><Quote size={12} /> Фрагмент выбран — нажмите «Обсудить», чтобы оставить заметку.</div>}

                {sourceMetadata || isTopic || isIntro || isIndexOrMaterial ? (
                  <div className="reader-content" onMouseUp={(event) => {
                    const quote = window.getSelection()?.toString().trim();
                    if (!quote) return;
                    const section = (event.target as HTMLElement).closest("[data-section-id]")?.getAttribute("data-section-id");
                    selectedText(quote.slice(0, 1000), section ?? undefined);
                  }}>
                    {documentBusy && <div className="loading">Загружаем карточку и подробные разделы…</div>}
                    {documentError && <div className="error-text">{documentError}</div>}
                    {!documentBusy && documentText && (
                      <>
                        <div className="detail-section"><h3>Содержание и подробности <span className="badge">разворачивайте разделы</span></h3></div>
                        <OutlineReader
                          outline={outline}
                          sourcePath={selectedNode.path}
                          onOpenLocalPath={openLocalPath}
                          onSelection={selectedText}
                        />
                      </>
                    )}
                    {sourceMetadata && !!availableMaterials.length && (
                      <div className="detail-section">
                        <h3>Материалы карточки</h3>
                        <div className="source-links">{availableMaterials.slice(0, 8).map((path) => <a key={path} href={corpusUrl(path)} onClick={(event) => { event.preventDefault(); setModal({ title: sourceMetadata.title + " · " + path.split("/").at(-1), path, sourceUrls: sourceMetadata.source_urls }); }}><FileText size={12} />{path.split("/").at(-1)}</a>)}</div>
                      </div>
                    )}
                  </div>
                ) : null}

                {showComments && commentTarget && <CommentsPanel targetId={commentTarget} selectedQuote={selectedQuote || undefined} />}
              </>
            )}
          </div>
        </aside>
      </div>

      {sidebarOpen && <button className="modal-backdrop" aria-label="Закрыть навигацию" style={{ zIndex: 45, padding: 0 }} onClick={() => setSidebarOpen(false)} />}
      {modal && (
        <FullTextModal
          title={modal.title}
          path={modal.path}
          sourceUrls={modal.sourceUrls}
          onClose={() => setModal(null)}
          onQuote={(quote, sectionId) => {
            const target = sectionId ? selectedNode?.id + ":" + sectionId : selectedNode?.id ?? "";
            setModal(null);
            showDiscussion(target, quote);
          }}
        />
      )}
    </main>
  );
}
