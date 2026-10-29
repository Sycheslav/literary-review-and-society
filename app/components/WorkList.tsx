import Link from "next/link";
import type { Importance, Work } from "@/lib/data";
import { IMPORTANCE_LABELS, authorsShort, previewProps } from "@/lib/labels";

export function WorkRow({ work }: { work: Work }) {
  return (
    <li>
      <Link href={`/works/${work.id}`} className="work-row" {...previewProps(work)} data-pv-notitle="">
        <span className="work-row-title">{work.title}</span>
        <span className="work-row-meta">
          {work.original && <span className="work-row-original">{work.original}</span>}
          <span>
            {[authorsShort(work.authors), work.year].filter(Boolean).join(" · ")}
          </span>
        </span>
      </Link>
      <Link className="econ-row-link" href={`/economics/studies/${work.id}`}>Экономика исследования →</Link>
    </li>
  );
}

const GROUPS: Importance[] = ["core", "supporting", "peripheral"];

/** Список работ, сгруппированный по значимости; второстепенные группы свёрнуты. */
export default function WorkList({ works, openAll = false }: { works: Work[]; openAll?: boolean }) {
  return (
    <div className="work-groups">
      {GROUPS.map((group) => {
        const items = works.filter((w) => w.importance === group);
        if (items.length === 0) return null;
        const open = openAll || group === "core";
        return (
          <details key={group} className="work-group" open={open}>
            <summary>
              <span>{IMPORTANCE_LABELS[group]}</span>
              <span className="count">{items.length}</span>
            </summary>
            <ul className="work-list">
              {items.map((w) => (
                <WorkRow key={w.id} work={w} />
              ))}
            </ul>
          </details>
        );
      })}
    </div>
  );
}
