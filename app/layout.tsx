import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Социумы ИИ-агентов — карта исследований",
  description:
    "Интерактивный граф литературы о сообществах LLM-агентов: работы, темы, методы, полные тексты и заметки исследовательской группы.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
