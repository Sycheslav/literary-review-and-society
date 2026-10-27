export const IMPORTANCE_LABELS = {
  core: "Ключевые работы",
  supporting: "Дополняющие работы",
  peripheral: "Фоновые материалы",
} as const;

export const IMPORTANCE_SHORT = {
  core: "Ключевая",
  supporting: "Дополняющая",
  peripheral: "Фоновая",
} as const;

export const KIND_LABELS: Record<string, string> = {
  research: "Исследование",
  review: "Обзор",
  project: "Программный проект",
  web_material: "Веб-материал",
  dataset: "Набор данных",
};

export const SECTION_LABELS = {
  design: "Как устроено исследование",
  tech: "Техническая реализация",
  prompts: "Промпты и инструкции агентам",
  results: "Результаты подробно",
  limits: "Ограничения и интерпретация",
  costs: "Расходы и вычисления",
  conclusions: "Выводы авторов",
} as const;

export function authorsShort(authors: string[], max = 2) {
  if (authors.length === 0) return "";
  if (authors.length <= max) return authors.join(", ");
  return `${authors.slice(0, max).join(", ")} и др.`;
}

export function worksWord(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "работа";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "работы";
  return "работ";
}

type PreviewSource = { title: string; authors: string[]; year: number | null; summary: string };

/** Атрибуты для всплывающей аннотации (см. app/components/HoverPreview.tsx). */
export function previewProps(work: PreviewSource) {
  return {
    "data-pv-title": work.title,
    "data-pv-meta": [authorsShort(work.authors), work.year].filter(Boolean).join(", "),
    "data-pv-text": work.summary,
  };
}
