import Link from "next/link";
import { notFound } from "next/navigation";
import Discussion from "@/app/components/Discussion";
import Md from "@/app/components/Md";
import { getDetail, getWork, getWorks } from "@/lib/data";
import { costSignals } from "@/lib/economics";
import { auditById, evidenceById, SCALE_LABELS } from "@/lib/economics-evidence";
import { CheckBadge, OriginBadge } from "../../ui";

export function generateStaticParams() {
  return getWorks().map((w) => ({ id: w.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: `Экономика: ${getWork(id)?.title ?? id}` };
}

export default async function StudyPassportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = getWork(id);
  const detail = getDetail(id);
  if (!work || !detail) notFound();
  const e = evidenceById.get(id);
  const audit = auditById.get(id);
  const cardNote = e?.cardNote ?? audit?.cardNote;
  const signals = costSignals(detail.sections.costs ?? "");

  return (
    <>
      <p className="econ-snap">
        <Link href="/economics/studies">← Затраты исследований</Link>
      </p>
      <p className="kicker mt-md">
        Экономический паспорт
      </p>
      <h1 className="page-title">{work.title}</h1>
      <p className="page-sub">
        {[work.authors.slice(0, 4).join(", ") + (work.authors.length > 4 ? " и др." : ""), work.year, detail.models.slice(0, 5).join(", ")].filter(Boolean).join(" · ")}
      </p>
      <div className="econ-actions mt-md">
        <Link href={`/works/${id}`} className="button button-quiet">
          Аннотация и результаты
        </Link>
        {detail.textPath && (
          <Link href={`/works/${id}/text`} className="button button-quiet">
            Полный текст
          </Link>
        )}
        {detail.url && (
          <a href={detail.url} className="button button-quiet" target="_blank" rel="noreferrer">
            Первоисточник ↗
          </a>
        )}
      </div>

      {e ? (
        <section className="econ-section mt-xl">
          <div className="econ-grid econ-grid-study">
            <div className="ev-card">
              <div className="ev-card-foot flush-top">
                <CheckBadge check={e.check} />
                <OriginBadge origin={e.origin} />
                <span className="badge">{SCALE_LABELS[e.scale]}</span>
              </div>
              <div className="ev-card-num is-large">
                {e.headline}
              </div>
              <p className="ev-card-unit">{e.unit}</p>
              <h2 className="calc-sub">Что известно</h2>
              <ul className="ev-list">
                {e.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="econ-card">
              <h2>Ограничения сопоставления</h2>
              <ul className="ev-list ev-caveats">
                {e.caveats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <h2 className="mt-md">Источник</h2>
              <p>
                <a href={e.source.url} target="_blank" rel="noreferrer">
                  {e.source.place} ↗
                </a>
                <br />
                Версия: {e.source.version}. Сверено: {new Date(e.checkedAt).toLocaleDateString("ru-RU")}.
              </p>
            </div>
          </div>
        </section>
      ) : audit ? (
        <div className="note mt-lg">
          <b>{audit.status === "none" ? "Первоисточник проверен: затрат не найдено." : "Первоисточник не удалось открыть автоматически."}</b> {audit.note}{" "}
          <span className="muted">Проверено {new Date(audit.checkedAt).toLocaleDateString("ru-RU")}.</span>
        </div>
      ) : (
        <div className="note mt-lg">
          <b>Структурированной записи пока нет.</b>{" "}
          {signals.length
            ? "Текст карточки упоминает экономические сведения — работа в очереди на сверку с первоисточником."
            : "В карточке денежных и ресурсных сведений не найдено."}{" "}
          Отсутствие данных не означает, что исследование ничего не стоило.
        </div>
      )}

      <section className="econ-section mt-xl">
        <h2 className="econ-h2">Текст о затратах из карточки корпуса</h2>
        <p className="section-lead">Подготовлен при обзоре литературы; при расхождении верна запись выше, сверенная с первоисточником.</p>
        {cardNote && (
          <p className="calc-warn econ-narrow">
            Расхождение с первоисточником: {cardNote}
          </p>
        )}
        <div className="prose mt-sm econ-narrow">
          <Md>{detail.sections.costs || "Сведения в карточке отсутствуют."}</Md>
        </div>
      </section>

      <section className="work-block econ-section mt-xl">
        <Discussion targetId={id} />
      </section>
    </>
  );
}
