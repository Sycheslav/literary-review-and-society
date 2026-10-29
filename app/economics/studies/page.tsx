import { getTopics } from "@/lib/data";
import { getStudyRows } from "@/lib/economics";
import { evidence } from "@/lib/economics-evidence";
import { EvidenceCard } from "../ui";
import StudyCatalog from "./study-catalog";

export const metadata = { title: "Затраты исследований — Экономика" };

export default function StudiesPage() {
  const money = evidence.filter((e) => e.usd !== null);
  const resources = evidence.filter((e) => e.usd === null);
  return (
    <>
      <h1 className="page-title">Затраты исследований</h1>
      <p className="section-lead">
        Что авторы сообщают о деньгах, токенах и оборудовании. Каждая цифра — с единицей, охватом и
        ссылкой на место в первоисточнике.
      </p>

      <nav className="econ-toc" aria-label="На странице">
        <a href="#money">Денежные суммы ({money.length})</a>
        <a href="#resources">Токены и оборудование ({resources.length})</a>
        <a href="#catalog">Каталог всех работ</a>
      </nav>

      <section id="money">
        <h2 className="econ-h3">Денежные суммы</h2>
        <div className="econ-grid">
          {money.map((e) => (
            <EvidenceCard key={e.id} e={e} detailed />
          ))}
        </div>
      </section>

      <section id="resources">
        <h2 className="econ-h3">Токены и оборудование без денежной оценки</h2>
        <div className="econ-grid">
          {resources.map((e) => (
            <EvidenceCard key={e.id} e={e} detailed />
          ))}
        </div>
        <p className="chart-note">
          Сверка 29.10.2026 выполнена по HTML-версиям статей с помощью ИИ-агентов. Перед цитированием в
          публикации сверьте формулировки дословно по PDF.
        </p>
      </section>

      <section id="catalog" className="econ-section">
        <h2>Каталог всех работ</h2>
        <p className="section-lead">
          Поиск по корпусу, фильтры и сравнение до четырёх работ. Признаки «суммы», «оборудование»,
          «токены» найдены автоматически в тексте карточки и ещё не проверены.
        </p>
        <StudyCatalog rows={getStudyRows()} topics={getTopics().map((t) => ({ id: t.id, title: t.title }))} evidence={evidence} />
      </section>
    </>
  );
}
