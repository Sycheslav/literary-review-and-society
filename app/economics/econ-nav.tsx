"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/economics", label: "Обзор" },
  { href: "/economics/models", label: "Цены моделей" },
  { href: "/economics/studies", label: "Затраты исследований" },
  { href: "/economics/calculator", label: "Калькулятор" },
  { href: "/economics/infrastructure", label: "Свои GPU" },
  { href: "/economics/methodology", label: "Как считать" },
];

export default function EconNav() {
  const pathname = usePathname();
  return (
    <nav className="econ-nav" aria-label="Подразделы экономики">
      {LINKS.map((l) => {
        const active = l.href === "/economics" ? pathname === l.href : pathname.startsWith(l.href);
        return (
          <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined}>
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
