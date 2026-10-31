"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CostSignal, StudyRow } from "@/lib/economics";
import { CHECK_LABELS, type Evidence } from "@/lib/economics-evidence";

const DATA_FILTERS: { id: string; label: string; test: (r: StudyRow, e?: Evidence) => boolean }[] = [
  { id: "", label: "Все", test: () => true },
  { id: "evidence", label: "Сверенные", test: (_, e) => Boolean(e) },
  { id: "money", label: "Есть суммы", test: (r) => r.signals.includes("money") },
  { id: "hardware", label: "Есть оборудование", test: (r) => r.signals.includes("hardware") },
  { id: "tokens", label: "Есть токены", test: (r) => r.signals.includes("tokens") },
  { id: "nocost", label: "Проверено: затрат нет", test: (r) => r.audit === "none" },
  { id: "todo", label: "Ещё не проверено", test: (r, e) => !e && r.audit === null },
];

const SIGNAL_LABELS: Record<CostSignal, string> = { money: "суммы", hardware: "оборудование", tokens: "токены" };
const KEYS = ["q", "topic", "year", "data", "compare"] as const;
type State = Record<(typeof KEYS)[number], string>;

export default function StudyCatalog({ rows, topics, evidence }: { rows: StudyRow[]; topics: { id: string; title: string }[]; evidence: Evidence[] }) {
  const ev = useMemo(() => new Map(evidence.map((e) => [e.id, e])), [evidence]);
  const [st, setSt] = useState<State>({ q: "", topic: "", year: "", data: "", compare: "" });

  // Фильтры живут в адресе страницы, чтобы ссылкой можно было поделиться.
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSt(Object.fromEntries(KEYS.map((k) => [k, p.get(k) ?? ""])) as State);
  }, []);

  function update(patch: Partial<State>) {
    const next = { ...st, ...patch };
    setSt(next);
    const p = new URLSearchParams();
    for (const k of KEYS) if (next[k]) p.set(k, next[k]);
    history.replaceState(null, "", location.pathname + (p.size ? "?" + p : "") + "#catalog");
  }

  const years = useMemo(() => [...new Set(rows.map((r) => r.year).filter(Boolean))].sort((a, b) => b! - a!), [rows]);
  const filter = DATA_FILTERS.find((f) => f.id === st.data) ?? DATA_FILTERS[0];
  const q = st.q.trim().toLowerCase();
  const base = rows.filter(
    (r) =>
      (!q || [r.title, r.original ?? "", r.authors.join(" "), r.models.join(" ")].join(" ").toLowerCase().includes(q)) &&
      (!st.topic || r.topics.includes(st.topic)) &&
      (!st.year || String(r.year) === st.year),
  );
  const visible = base
    .filter((r) => filter.test(r, ev.get(r.id)))
    .sort((a, b) => Number(ev.has(b.id)) - Number(ev.has(a.id)) || b.signals.length - a.signals.length || (b.year ?? 0) - (a.year ?? 0));
  const selected = st.compare.split(",").filter(Boolean).slice(0, 4);

  function toggle(id: string) {
    const next = selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id].slice(0, 4);
    update({ compare: next.join(",") });
  }

  function csv() {
    const head = ["workId", "Название", "Год", "Статус", "Главная цифра", "Единица и охват", "Признаки в карточке", "Источник"];
    const lines = visible.map((r) => {
      const e = ev.get(r.id);
      return [r.id, r.title, String(r.year ?? ""), e ? CHECK_LABELS[e.check] : r.audit === "none" ? "проверено: затрат нет" : r.audit === "unavailable" ? "источник не открылся" : "не проверено", e?.headline ?? "", e?.unit ?? "", r.signals.map((s) => SIGNAL_LABELS[s]).join("; "), e?.source.url ?? ""];
    });
    const text = "﻿" + [head, ...lines].map((row) => row.map((x) => `"${x.replaceAll('"', '""')}"`).join(",")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8" }));
    a.download = "economics-studies.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <>
      <div className="econ-filters">
        <label className="econ-field">
          Поиск
          <input type="search" value={st.q} onChange={(e) => update({ q: e.target.value })} placeholder="Название, автор, модель" />
        </label>
        <label className="econ-field">
          Направление
          <select value={st.topic} onChange={(e) => update({ topic: e.target.value })}>
            <option value="">Все направления</option>
            {topics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </label>
        <label className="econ-field">
          Год
          <select value={st.year} onChange={(e) => update({ year: e.target.value })}>
            <option value="">Все годы</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <div className="econ-field">
          &nbsp;
          <button type="button" className="button button-quiet" onClick={() => update({ q: "", topic: "", year: "", data: "" })}>
            Сбросить
          </button>
        </div>
      </div>
      <div className="econ-chips" role="group" aria-label="Какие данные есть">
        {DATA_FILTERS.map((f) => (
          <button key={f.id} type="button" className="chip" aria-pressed={st.data === f.id} onClick={() => update({ data: f.id })}>
            {f.label}
            <b>{base.filter((r) => f.test(r, ev.get(r.id))).length}</b>
          </button>
        ))}
      </div>

      <div className="econ-toolbar">
        <span>
          Показано {visible.length} из {rows.length}. Отметьте до четырёх работ для сравнения.
        </span>
        <button type="button" className="link-button" onClick={csv}>
          Скачать таблицу CSV
        </button>
      </div>

      <div className="econ-table-wrap">
        <table className="econ-table">
          <thead>
            <tr>
              <th className="col-check">
                <span className="visually-hidden">Сравнить</span>
              </th>
              <th>Работа</th>
              <th className="num">Год</th>
              <th>Экономические сведения</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => {
              const e = ev.get(r.id);
              return (
                <tr key={r.id}>
                  <td>
                    <input
                      type="checkbox"
                      aria-label={`Сравнить: ${r.title}`}
                      checked={selected.includes(r.id)}
                      disabled={!selected.includes(r.id) && selected.length >= 4}
                      onChange={() => toggle(r.id)}
                    />
                  </td>
                  <td>
                    <Link href={`/economics/studies/${r.id}`}>{r.title}</Link>
                    <small>{r.authors.slice(0, 3).join(", ") + (r.authors.length > 3 ? " и др." : "")}</small>
                  </td>
                  <td className="num">{r.year ?? "—"}</td>
                  <td>
                    {e ? (
                      <>
                        <b>{e.headline}</b>
                        <small>
                          {e.unit} · {CHECK_LABELS[e.check].toLowerCase()}
                        </small>
                      </>
                    ) : r.audit === "none" ? (
                      <span>
                        Затрат в первоисточнике нет
                        <small>проверено</small>
                      </span>
                    ) : r.audit === "unavailable" ? (
                      <span>
                        Источник не открылся
                        <small>нужна ручная проверка</small>
                      </span>
                    ) : r.signals.length ? (
                      <span>
                        В карточке: {r.signals.map((s) => SIGNAL_LABELS[s]).join(", ")}
                        <small>не проверено</small>
                      </span>
                    ) : (
                      <span className="is-dim">в карточке не упомянуты</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selected.length > 0 && (
        <div className="compare-tray" aria-label="Сравнение работ">
          <div className="econ-toolbar flush">
            <b className="econ-strong">Сравнение · {selected.length} из 4</b>
            <button type="button" className="link-button" onClick={() => update({ compare: "" })}>
              Очистить
            </button>
          </div>
          <div className="compare-grid">
            {selected.map((id) => {
              const r = rows.find((x) => x.id === id);
              const e = ev.get(id);
              if (!r) return null;
              return (
                <div key={id}>
                  <Link href={`/economics/studies/${id}`}>{r.title}</Link>
                  <strong>{e ? e.headline : "—"}</strong>
                  <span>{e ? e.unit : r.audit === "none" ? "Проверено: затрат в первоисточнике нет" : r.signals.length ? `В карточке: ${r.signals.map((s) => SIGNAL_LABELS[s]).join(", ")}` : "Сведений не найдено"}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
