import Link from "next/link";
import { CHECK_LABELS, ORIGIN_LABELS, type Evidence } from "@/lib/economics-evidence";

export function CheckBadge({ check }: { check: Evidence["check"] }) {
  const cls = check === "checked" ? "badge badge-ok" : check === "issue" ? "badge badge-warn" : "badge";
  const icon = check === "checked" ? "✓" : check === "issue" ? "!" : "?";
  return (
    <span className={cls}>
      <span aria-hidden="true">{icon}</span>
      {CHECK_LABELS[check]}
    </span>
  );
}

export function OriginBadge({ origin }: { origin: Evidence["origin"] }) {
  return <span className={origin === "estimate" ? "badge badge-warn" : "badge"}>{ORIGIN_LABELS[origin]}</span>;
}

/** Краткая карточка: главная цифра, единица, статус и переход к паспорту. */
export function EvidenceCard({ e, detailed = false }: { e: Evidence; detailed?: boolean }) {
  return (
    <article className="ev-card">
      <Link href={`/economics/studies/${e.id}`} className="ev-card-title">
        {e.title}
      </Link>
      <div className="ev-card-num">{e.headline}</div>
      <p className="ev-card-unit">{e.unit}</p>
      {detailed && (
        <>
          <ul className="ev-list">
            {e.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <ul className="ev-list ev-caveats">
            {e.caveats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </>
      )}
      <div className="ev-card-foot">
        <CheckBadge check={e.check} />
        <a href={e.source.url} target="_blank" rel="noreferrer">
          {e.source.place} ↗
        </a>
      </div>
    </article>
  );
}

export type BarRow = { key: string; label: string; sub?: string; value: number; min?: number | null; text: string; textSub?: string; dim?: boolean };

/** Горизонтальные столбцы одной величины; тонкая линия слева — диапазон «от». */
export function HBars({ rows, caption }: { rows: BarRow[]; caption: string }) {
  const max = Math.max(...rows.map((r) => r.value), 0) || 1;
  return (
    <figure>
      <div className="hbars" role="table" aria-label={caption}>
        {rows.map((r) => (
          <div key={r.key} role="row" style={{ display: "contents" }}>
            <span className="hbars-label" role="cell" title={r.label}>
              {r.label}
              {r.sub && <small>{r.sub}</small>}
            </span>
            <span className="hbars-track" role="cell" aria-hidden="true">
              {r.min != null && r.min < r.value && <span className="hbars-range" style={{ left: `${(r.min / max) * 100}%`, width: `${((r.value - r.min) / max) * 100}%` }} />}
              <span className={`hbars-bar${r.dim ? " is-control" : ""}`} style={{ width: `${(r.value / max) * 100}%` }} />
            </span>
            <span className="hbars-value" role="cell">
              {r.text}
              {r.textSub && <small>{r.textSub}</small>}
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}
