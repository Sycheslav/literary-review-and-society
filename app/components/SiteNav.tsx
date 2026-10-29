"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string };
type Section = Item & { roots: string[]; sub?: Item[] };

const SECTIONS: Section[] = [
  {
    href: "/",
    label: "Обзор",
    roots: ["/", "/topics", "/works"],
    sub: [
      { href: "/topics", label: "Направления" },
      { href: "/works", label: "Работы" },
    ],
  },
  {
    href: "/graph",
    label: "Граф знаний",
    roots: ["/graph"],
    sub: [
      { href: "/graph/topics", label: "Направления" },
      { href: "/graph/works", label: "Работы" },
    ],
  },
  { href: "/concept", label: "Концепция", roots: ["/concept"] },
  { href: "/economics", label: "Экономика", roots: ["/economics"] },
];

function isUnder(pathname: string, root: string) {
  return root === "/" ? pathname === "/" : pathname === root || pathname.startsWith(`${root}/`);
}

function findSection(pathname: string) {
  return SECTIONS.find((section) => section.roots.some((root) => isUnder(pathname, root)));
}

export default function SiteNav() {
  const pathname = usePathname();
  const current = findSection(pathname);
  return (
    <nav className="site-nav" aria-label="Разделы сайта">
      {SECTIONS.map((section) => (
        <Link
          key={section.href}
          href={section.href}
          aria-current={section === current ? "page" : undefined}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteSubNav() {
  const pathname = usePathname();
  const sub = findSection(pathname)?.sub;
  if (!sub) return null;
  return (
    <div className="site-subnav">
      <nav className="container site-subnav-links" aria-label="Подразделы">
        {sub.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isUnder(pathname, item.href) ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
