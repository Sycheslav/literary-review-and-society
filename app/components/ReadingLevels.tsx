import Link from "next/link";
import type { WorkDetail } from "@/lib/data";

type Props = { id: string; detail: WorkDetail; current: "annotation" | "summary" | "text" };

export default function ReadingLevels({ id, detail, current }: Props) {
  return (
    <nav className="reading-levels" aria-label="Глубина чтения">
      <Link href={`/works/${id}`} aria-current={current === "annotation" ? "page" : undefined}>
        <small>1 · Кратко</small><span>Аннотация</span>
      </Link>
      {detail.summaryPath && (
        <Link href={`/works/${id}/summary`} aria-current={current === "summary" ? "page" : undefined}>
          <small>2 · На русском</small><span>Подробное изложение</span>
        </Link>
      )}
      {detail.textPath ? (
        <Link href={`/works/${id}/text`} aria-current={current === "text" ? "page" : undefined}>
          <small>3 · Полный текст</small><span>Открыть оригинал</span>
        </Link>
      ) : detail.url && (
        <a href={detail.url} target="_blank" rel="noreferrer">
          <small>3 · Первоисточник</small><span>Открыть оригинал ↗</span>
        </a>
      )}
    </nav>
  );
}
