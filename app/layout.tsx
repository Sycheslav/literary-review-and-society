import type { Metadata } from "next";
import Link from "next/link";
import { PT_Sans, PT_Serif } from "next/font/google";
import HoverPreview from "./components/HoverPreview";
import PageComments from "./components/PageComments";
import SiteNav, { SiteSubNav } from "./components/SiteNav";
import "./globals.css";

const sans = PT_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const serif = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Социумы ИИ-агентов — обзор исследований",
    template: "%s — Социумы ИИ-агентов",
  },
  description:
    "Обзор исследований о сообществах языковых агентов: связи, роли, нормы, институты, коллективная память. Лаборатория № 57 ИПУ РАН.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <header className="site-header">
          <div className="container site-header-inner">
            <Link href="/" className="brand">
              <span className="brand-name">Социумы ИИ-агентов</span>
              <span className="brand-sub">Обзор исследований · Лаб. 57 ИПУ РАН</span>
            </Link>
            <SiteNav />
            <form action="/works" className="header-search" role="search">
              <input type="search" name="q" placeholder="Поиск работ" aria-label="Поиск работ" />
            </form>
          </div>
          <SiteSubNav />
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>
              Рабочий обзор Лаборатории № 57 «Активные системы» ИПУ РАН к проекту об обществах
              ИИ-агентов и идеях книги Г. Васильева «Верхум». Материал для внутреннего обсуждения.
            </p>
            <p>
              Аннотации подготовлены по текстам статей; перед цитированием сверяйте цифры с
              первоисточником.
            </p>
            <p><Link href="/agents">Для ИИ-агентов / Markdown</Link> · <a href="/SKILL.md">SKILL.md</a></p>
          </div>
        </footer>
        <PageComments />
        <HoverPreview />
      </body>
    </html>
  );
}
