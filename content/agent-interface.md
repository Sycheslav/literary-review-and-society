# HTTP-интерфейс графа для агентов

## Аудит и источник истины

Основной сайт — Next.js 16, App Router, серверные страницы. Railway: проект `small projects`, окружение `production`, сервис `literary-review-and-society`, GitHub `Sycheslav/literary-review-and-society`, ветка `main`. Существующий Sites-манифест относится к прежнему хостингу; этот выпуск предназначен для действующего Railway-домена.

| Материал | Источник | HTML | Markdown | ID |
|---|---|---|---|---|
| Обзор | `lib/home.ts` | `/` | `/knowledge/overview.md` | `overview` |
| Работа | `data/works.json`, `data/details.json` | `/works/{id}` | `/knowledge/works/{id}.md` | исходный ID |
| Изложение | путь `summaryPath` в `data/details.json`, публичный `summary.ru.md`, `summary.meta.json` | `/works/{id}/summary` | `/knowledge/summaries/{id}.md` | `summary:{id}` |
| Направление | `data/topics.json`, принадлежность из `works.json` | `/topics/{id}` | `/knowledge/topics/{id}.md` | `topic-{id}` |
| Глава | `data/concept.json`, пояснения `lib/concept.ts` | `/concept/{slug}` | `/knowledge/concept/{slug}.md` | `concept:{slug}` |
| Эксперименты | существующие главы 12, 13, 19 | `/concept/experiments` | `/knowledge/experiments/index.md` → главы | без выдуманных отдельных карточек |
| Экономика | `data/economics/snapshot.json`, `lib/economics-evidence.ts`, `details.json` | `/economics`, `/economics/studies/{id}` | `/knowledge/economics/index.md`, `/knowledge/economics/studies/{id}.md`, JSON | `economics:{id}` |
| Рёбра | поля `topics`, `related`, `data/graph.json`; порядок глав | `/graph` | `/knowledge/graph.json`, `/knowledge/relations.md` | исходные ID узлов |

Экспорт `knowledge/` — производное представление. Редактировать нужно перечисленные источники; генерация выполняется `npm run knowledge:build`, также автоматически перед `dev` и `build`. Не подключённые к данным сайта файлы корпуса автоматически не публикуются. Данные коммитятся в `knowledge/`, чтобы Git sparse checkout получал готовый набор без сборки сайта.

## Публичная граница

Экспорт включает опубликованный отобранный каталог, направления, главы, подключённые редакционные изложения и экономические данные. Исключены комментарии, закрытая конфигурация, служебные черновики, исключённые записи и сторонние полные тексты/PDF. Права на повторное распространение последних в схеме не указаны; сохраняются ссылки на оригиналы. Новая лицензия на сторонние материалы не объявляется. Имеющийся `/public/corpus` и страницы оригиналов этой доработкой не меняются.

## Контракт

- Человеческий интерфейс, навигация, карточки и подвал не изменяются. Файл skill передаётся пользователям отдельно; `/agents` отсутствует.
- `/SKILL.md`, `/knowledge/SKILL.md` — один skill из `content/agent-skill/SKILL.md`.
- `/llms.txt` — вход с версией, индексами, поиском и Git.
- `/knowledge/**/*.md` — Markdown с front matter, относительными связями и канонической HTML-ссылкой.
- `/knowledge/graph.json` — отдельная схема v1 с provenance рёбер. `/graph-data` сохраняется без изменения.
- `/knowledge/bundle.json` — документы, граф, экономика и skill, без исходников сайта.
- `/knowledge/manifest.json` — schema_version, data_version (SHA-256 содержимого), counts, files с размерами и SHA-256. Сам манифест не хешируется в себе.
- `/api/search?q=...` — лексический поиск по всем экспортированным документам с фильтрами type/topic, limit/offset. Ошибки 400, best-effort лимит 60/мин на адрес на процесс, 429 + Retry-After. Это не распределённый rate limiter; доверие к X-Forwarded-For предполагает Railway proxy. Индекс хранится в памяти, без LLM/БД/платных сервисов.
- Markdown/JSON отдаётся только по allowlist манифеста; неизвестные документы — настоящий 404. MIME и UTF-8, ETag, If-None-Match и 304, revalidation, CORS `*` для публичного чтения. HEAD предоставляет Next.js.
- `/sitemap.xml` — существующие канонические HTML-страницы, без оригиналов третьих лиц. `/robots.txt` сохраняет прежнюю общую доступность сайта, ограничивает обход API и указывает sitemap. Это не согласие на обучение моделей; решение об отдельных ботах остаётся за владельцем.

Для Git — частичный clone без checkout с non-cone sparse pattern `/knowledge/`, исключающий корневые исходники. Для получения только данных одним HTTP-запросом — bundle. ZIP и MCP не создаются.

## Проверки

`npm run knowledge:check` проверяет контрольные суммы, полное покрытие актуальных сущностей, точность текстов глав и карточек, ссылки через Markdown AST, типы и концы рёбер, соответствие bundle отдельным файлам. Несуществующая связь/документ останавливает сборку. Версия воспроизводима при неизменных исходниках: текущее время и случайные значения не подмешиваются.

`npm run knowledge:test -- <base-url>` проверяет HTTP-доступность всех файлов и их SHA-256, MIME, 404, условные запросы, прежний graph-data, серверный HTML, sitemap/robots, поиск/фильтры/пагинацию и два маршрута чтения из llms → индексы → концепция → исследования. Трасса фактически прочитанных документов и байтов записывается в игнорируемый `work/agent-interface/http-acceptance.json`. Это автоматическая приёмка, а не независимая научная экспертиза или подтверждение фактов источников. Внешние URL массово не опрашиваются.

Проверки типа: `npx tsc --noEmit`. Рабочая сборка: `npm run build`. Skill: `python <skill-creator>/scripts/quick_validate.py content/agent-skill`.
