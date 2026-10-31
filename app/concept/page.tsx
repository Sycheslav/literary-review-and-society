import Link from "next/link";
import { getConcept } from "@/lib/data";
import { CHAPTER_LEADS, CONCEPT_PARTS } from "@/lib/concept";
import Md from "../components/Md";

export const metadata = { title: "Концепция и идеи исследований" };

export default function ConceptPage() {
  const concept = getConcept();
  const byNum = new Map(concept.chapters.map((c) => [c.num, c]));

  return (
    <section className="section page-top">
      <div className="container">
        <h1 className="page-title">Концепция и идеи исследований</h1>
        <p className="page-sub">{concept.title}</p>
        <Md className="concept-intro">{concept.intro}</Md>

        <div className="concept-parts">
          {CONCEPT_PARTS.map((part) => (
            <div key={part.title}>
              <h2 className="block-title">{part.title}</h2>
              <ol className="chapter-list">
                {part.chapters.map((num) => {
                  const ch = byNum.get(num);
                  if (!ch) return null;
                  return (
                    <li key={ch.slug}>
                      <Link href={`/concept/${ch.slug}`}>
                        <span className="chapter-num">{ch.num}</span>
                        <span className="chapter-title">{ch.title}</span>
                        <span className="chapter-lead">{CHAPTER_LEADS[ch.num] ?? ch.lead}</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
