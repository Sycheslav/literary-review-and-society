"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Обзор" },
  { href: "/concept", label: "Концепция" },
  { href: "/economics", label: "Экономика" },
  { href: "/topics", label: "Направления" },
  { href: "/works", label: "Работы" },
  { href: "/graph", label: "Карта связей" },
];

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav" aria-label="Разделы сайта">
      {LINKS.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
