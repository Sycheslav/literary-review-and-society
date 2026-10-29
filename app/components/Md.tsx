import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getWork } from "@/lib/data";
import { previewProps } from "@/lib/labels";

/** Переводит ссылки корпуса (works/*.md, topics/*.md) во внутренние адреса сайта. */
function resolveHref(href: string): { internal: string; workId?: string } | null {
  const work = href.match(/(?:^|\/)works\/([^/]+?)\.md(?:#.*)?$/) ?? href.match(/^([^/:#]+?)\.md$/);
  if (work) return { internal: `/works/${work[1]}`, workId: work[1] };
  const topic = href.match(/(?:^|\/)topics\/([^/]+?)\.md(?:#.*)?$/);
  if (topic) return { internal: `/topics/${topic[1]}` };
  const text = href.match(/(?:^|\/)materials\/([^/]+)\/fulltext\.md$/);
  if (text) return { internal: `/works/${text[1]}/text` };
  const summary = href.match(/(?:^|\/)materials\/([^/]+)\/summary\.ru\.md$/);
  if (summary) return { internal: `/works/${summary[1]}/summary` };
  if (/README\.md/.test(href)) return { internal: "/" };
  return null;
}

const CYRILLIC = /[А-Яа-яЁё]/;

/** Английскую подпись ссылки на работу («Learning to Make Friends») заменяет русским названием. */
function russianLabel(label: React.ReactNode, title: string) {
  if (typeof label !== "string" || CYRILLIC.test(label) || !label.includes(" ")) return label;
  if (!CYRILLIC.test(title)) return label;
  const head = title.split(":")[0].trim();
  return CYRILLIC.test(head) ? `«${head}»` : label;
}

export default function Md({ children, className }: { children: string; className?: string }) {
  return (
    <div className={className ? `prose ${className}` : "prose"}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href = "", children }) {
            const resolved = resolveHref(href);
            if (resolved) {
              const work = resolved.workId ? getWork(resolved.workId) : undefined;
              // Работа исключена из обзора — оставляем подпись без ссылки.
              if (resolved.workId && !work) return <>{children}</>;
              return (
                <Link href={resolved.internal} {...(work ? previewProps(work) : {})}>
                  {work ? russianLabel(children, work.title) : children}
                </Link>
              );
            }
            if (href.startsWith("/")) return <Link href={href}>{children}</Link>;
            if (/^https?:/.test(href)) {
              return (
                <a href={href} target="_blank" rel="noreferrer">
                  {children}
                </a>
              );
            }
            return <>{children}</>;
          },
          h2({ children }) {
            const num = typeof children === "string" ? children.match(/^(\d+)\.\s/) : null;
            return <h2 id={num ? `section-${num[1]}` : undefined}>{children}</h2>;
          },
          h3({ children }) {
            const num = typeof children === "string" ? children.match(/^(\d+)\.(\d+)\./) : null;
            return <h3 id={num ? `p${num[1]}-${num[2]}` : undefined}>{children}</h3>;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
