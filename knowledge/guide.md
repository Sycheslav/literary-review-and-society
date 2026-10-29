---
id: "guide"
type: "guide"
title: "Как читать и скачать граф"
html_url: "https://literary-review-and-society-production.up.railway.app/agents"
---

# Как читать и скачать граф

Рабочий обзор для обсуждения. Аннотации и переводы требуют сверки с первоисточником перед цитированием. Предложения проекта не являются результатами проведённых экспериментов.

[К индексу](index.md) · [Страница сайта](https://literary-review-and-society-production.up.railway.app/agents)

## Чтение

Начните с [индекса](index.md), выберите направление и карточки. Страницы содержат YAML front matter и обычные относительные Markdown-ссылки; структура одинакова на сайте и в Git. ID работ сохраняются. Идентификаторы глав имеют префикс concept:, направлений — topic-.

## Поиск

GET https://literary-review-and-society-production.up.railway.app/api/search?q=cooperation&limit=5

Параметры: q (2–200 символов), limit (1–50, по умолчанию 10), offset (0–10000), type (work, summary, topic, concept, economics, overview, guide, index), topic (ID направления). Ответ: schema_version, data_version, total, offset, next_offset, results; каждый результат содержит id, type, title, snippet, markdown_url, html_url. Токены запроса объединяются условием AND, без учёта регистра и ё/е, без морфологии и семантических синонимов. При пустом ответе сократите запрос или смените язык. Ошибки параметров — 400; локальное ограничение 60 запросов/мин на адрес — 429 с Retry-After. Лимит действует на процесс, не является распределённой защитой.

## Только данные по HTTP

[bundle.json](bundle.json) содержит все Markdown-документы, структурированный граф и экономические данные, без кода сайта. Пути документов относительны knowledge/. [manifest.json](manifest.json) содержит версию по SHA-256 содержимого, размеры и контрольные суммы файлов. Bundle повторяет data_version; SHA-256 проверяется по manifest.

## Только данные через Git

Репозиторий: https://github.com/Sycheslav/literary-review-and-society; ветка main; папка knowledge/. После публикации этой папки:

```bash
git clone --filter=blob:none --sparse --no-checkout https://github.com/Sycheslav/literary-review-and-society.git ai-societies-data
git -C ai-societies-data sparse-checkout set --no-cone '/knowledge/'
git -C ai-societies-data checkout main
```

В рабочую папку попадёт только knowledge/, код сайта не выгружается. Git всё равно получает метаданные репозитория; для одного файла без Git используйте bundle.json. HTTP-набор и Git могут временно отличаться при публикации; сравнивайте data_version в manifest.

## Границы набора

Экспортируются только действующий отобранный каталог и изложения, на которые ссылается data/details.json. Не включены исключённые записи, комментарии пользователей, служебные черновики, PDF и полные тексты третьих лиц. Разметка прав на полные тексты отсутствует. Экспорт не устанавливает новую лицензию на цитируемые источники. Файлы корпуса, не подключённые к опубликованной модели данных, не подхватываются автоматически.

## Обновления

Генератор: npm run knowledge:build; запускается также перед npm run dev и npm run build. Исходники — data/*.json и явно перечисленные константы lib/. Один текст не редактируется в двух представлениях. Измените источник и пересоберите; в Git публикуйте knowledge/ вместе с соответствующими исходными изменениями. Полная проверка: npm run knowledge:check; HTTP: npm run knowledge:test -- http://localhost:3000.
