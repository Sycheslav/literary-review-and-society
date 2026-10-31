import Link from "next/link";
import type { WorkDetail } from "@/lib/data";

type Props = { id: string; detail: WorkDetail; current: "work" | "text" };

/** Две глубины чтения: страница работы (аннотация и изложение) и оригинал. */
export default function ReadingLevels({ id, detail, current }: Props) {
  return (
    <nav className="reading-levels" aria-label="Глубина чтения">
      <Link href={`/works/${id}`} aria-current={current === "work" ? "page" : undefined}>
        <small>1 · На русском</small>
        <span>{detail.summaryPath ? "Аннотация и изложение" : "Аннотация"}</span>
      </Link>
      {detail.textPath ? (
        <Link href={`/works/${id}/text`} aria-current={current === "text" ? "page" : undefined}>
          <small>2 · Полный текст</small><span>Открыть оригинал</span>
        </Link>
      ) : detail.url && (
        <a href={detail.url} target="_blank" rel="noreferrer">
          <small>2 · Первоисточник</small><span>Открыть оригинал ↗</span>
        </a>
      )}
    </nav>
  );
}
