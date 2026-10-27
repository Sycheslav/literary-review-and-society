"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Importance, Work } from "@/lib/data";
import { IMPORTANCE_LABELS, KIND_LABELS, authorsShort, previewProps, worksWord } from "@/lib/labels";

type Props = {
  works: Work[];
  topics: { id: string; title: string }[];
  initialQuery: string;
  initialTopic: string;
};

const GROUPS: Importance[] = ["core", "supporting", "peripheral"];
const YEARS = [
  { value: "", label: "Все годы" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "old", label: "2023 и ранее" },
];

function matchesYear(work: Work, year: string) {
  if (!year) return true;
  if (year === "old") return work.year !== null && work.year <= 2023;
  return String(work.year) === year;
}

export default function Catalog({ works, topics, initialQuery, initialTopic }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [topic, setTopic] = useState(topics.some((t) => t.id === initialTopic) ? initialTopic : "");
  const [kind, setKind] = useState("");
  const [year, setYear] = useState("");
  const [expanded, setExpanded] = useState<Set<Importance>>(new Set(["core"]));

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (topic) params.set("topic", topic);
    const next = params.size ? `?${params}` : window.location.pathname;
    window.history.replaceState(null, "", next);
  }, [query, topic]);

  const filtering = Boolean(query.trim() || topic || kind || year);

  const visible = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return works.filter((w) => {
      if (topic && !w.topics.includes(topic)) return false;
      if (kind && w.kind !== kind) return false;
      if (!matchesYear(w, year)) return false;
      if (terms.length === 0) return true;
      const hay = `${w.title} ${w.original ?? ""} ${w.authors.join(" ")} ${w.summary}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [works, query, topic, kind, year]);

  function toggle(group: Importance) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  }

  function reset() {
    setQuery("");
    setTopic("");
    setKind("");
    setYear("");
  }

  return (
    <div className="catalog">
      <div className="filters">
        <input
          type="search"
          className="filter-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Название, автор или слово из аннотации"
          aria-label="Поиск по работам"
        />
        <select value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Направление">
          <option value="">Все направления</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
        <select value={kind} onChange={(e) => setKind(e.target.value)} aria-label="Тип источника">
          <option value="">Все типы</option>
          {Object.entries(KIND_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select value={year} onChange={(e) => setYear(e.target.value)} aria-label="Год">
          {YEARS.map((y) => (
            <option key={y.value} value={y.value}>
              {y.label}
            </option>
          ))}
        </select>
      </div>

      {filtering && (
        <p className="filter-status">
          Найдено {visible.length} {worksWord(visible.length)}.{" "}
          <button type="button" className="link-button" onClick={reset}>
            Сбросить
          </button>
        </p>
      )}

      <div className="work-groups">
        {GROUPS.map((group) => {
          const items = visible.filter((w) => w.importance === group);
          if (items.length === 0) return null;
          const open = filtering || expanded.has(group);
          return (
            <section key={group} className="work-group">
              <button
                type="button"
                className="work-group-head"
                aria-expanded={open}
                onClick={() => toggle(group)}
                disabled={filtering}
              >
                <span>{IMPORTANCE_LABELS[group]}</span>
                <span className="count">{items.length}</span>
              </button>
              {open && (
                <ul className="work-list">
                  {items.map((w) => (
                    <li key={w.id}>
                      <Link href={`/works/${w.id}`} className="work-row" {...previewProps(w)} data-pv-notitle="">
                        <span className="work-row-title">{w.title}</span>
                        <span className="work-row-meta">
                          {w.original && <span className="work-row-original">{w.original}</span>}
                          <span>{[authorsShort(w.authors), w.year].filter(Boolean).join(" · ")}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
        {visible.length === 0 && <p className="empty">Ничего не найдено. Измените запрос или фильтры.</p>}
      </div>
    </div>
  );
}
