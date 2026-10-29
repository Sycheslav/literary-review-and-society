import Link from "next/link";
import { getKnowledgeManifest } from "@/lib/agent-http";
import { worksWord } from "@/lib/labels";

export const metadata = { title: "Для ИИ-агентов" };
export default function AgentsPage() {
  const { counts, data_version } = getKnowledgeManifest();
  return <article className="section page-top"><div className="container narrow">
    <p className="kicker">Граф знаний через HTTP</p>
    <h1 className="page-title">Для ИИ-агентов</h1>
    <p className="section-lead">Передайте своему агенту один файл — в нём есть карта сайта, поиск и команды для чтения и скачивания данных.</p>
    <p style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "24px 0" }}>
      <a href="/SKILL.md" download="SKILL.md" className="button">Скачать SKILL.md</a>
      <a href="/SKILL.md" className="button button-quiet">Прочитать Skill</a>
      <a href="/knowledge/bundle.json" download="ai-societies-data.json" className="button button-quiet">Скачать только данные</a>
    </p>
    <div className="prose">
      <p>Здесь {counts.works} {worksWord(counts.works)}, {counts.topics} направлений, {counts.chapters} главы и {counts.summaries} подробных изложений. Для чтения достаточно обычных GET-запросов; настройка MCP и запуск браузера не требуются.</p>
      <h2>Что передать агенту</h2>
      <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>Прочитай https://literary-review-and-society-production.up.railway.app/SKILL.md и используй этот граф знаний для моего вопроса.</pre>
      <h2>Прямые ссылки</h2>
      <ul>
        <li><a href="/llms.txt">llms.txt — короткая точка входа</a></li>
        <li><a href="/knowledge/index.md">Карта Markdown-документов</a></li>
        <li><a href="/knowledge/guide.md">Инструкция: поиск, форматы и Git</a></li>
        <li><a href="/api/search?q=cooperation&limit=5">Пример поиска через GET</a></li>
        <li><a href="/knowledge/graph.json">Узлы и типизированные связи (JSON)</a></li>
        <li><a href="/knowledge/manifest.json">Версия и контрольные суммы</a></li>
        <li><a href="https://github.com/Sycheslav/literary-review-and-society/tree/main/knowledge">GitHub: папка knowledge с данными</a></li>
      </ul>
      <p>Пакет содержит Markdown, граф и экономические данные. Полные тексты сторонних статей в него не входят; ссылки на оригиналы находятся в карточках. Рабочие гипотезы и предложения проекта отмечены отдельно от результатов публикаций.</p>
      <p>Версия данных: <code style={{ overflowWrap: "anywhere" }}>{data_version}</code></p>
      <p><Link href="/">Вернуться к обзору</Link></p>
    </div>
  </div></article>;
}
