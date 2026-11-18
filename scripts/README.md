# Локальный EN-поиск

`en-search.mjs` читает опубликованный снимок `knowledge/en/snapshot.json` напрямую и вызывает тот же `extract()` и курсорный контракт, что использует HTTP API. Сервер запускать не нужно; CLI не перестраивает снимок и не обращается к сети. Корень сайта определяется по расположению скрипта, поэтому команду можно запускать из другого каталога. `--root "путь к клону"` задаёт другой корень снимка.

```powershell
# Все принятые findings; coverage и записи сохраняются в JSON.
node scripts/en-search.mjs findings --all > findings.json

# Выбранные работы; IDs можно передавать через запятую.
node scripts/en-search.mjs findings --ids arxiv-2410-08948,github-agentciv-agentciv > selected.json

# Ответы на конкретные вопросы; по умолчанию только status=reported.
node scripts/en-search.mjs answers --all --question-ids Q23,Q51 > answers.json

# При явном запросе включить также not_reported/not_checked и другие статусы.
node scripts/en-search.mjs answers --all --question-ids Q23,Q51 --include-nonreported > answers-with-statuses.json

# Тематический поиск по findings и выводам авторов.
node scripts/en-search.mjs search "coordination game" --all

# Фиксированный тест на фикстуре и текущем снимке, без сайта.
node scripts/test-en-search.mjs
```

`findings` и `search` принимают те же фильтры выборки, что EN API: `--kind`/`--type`, `--topic`, `--concept-question`, `--min-relevance`, `--min-evidence-strength`, `--min-reproducibility`, `--min-transferability` и `--min-priority`. Например: `node scripts/en-search.mjs findings --all --topic communities --min-evidence-strength 2`. При `search` выборка по умолчанию охватывает все работы; при `findings` нужно указать `--all`, `--ids` или `--kind`/`--type`.

`answers` требует `--question-ids` со списком Q01–Q90 и явную выборку работ (`--all`, `--ids` или `--kind`/`--type`). Результат включает только выбранные ID, компактные `question_id`, `status`, `value`, `origin` и `evidence`, без повторения формулировок вопросов. По умолчанию возвращаются только ответы со статусом `reported`; `--include-nonreported` дополнительно включает остальные статусы, а для них — `note_en` и `searched_source_refs`, если они заданы. Отсутствующий в пакете ответ не синтезируется как `not_reported`. HTTP-параметры и cursor-поведение описаны в `EN-ANSWERS-HANDOFF.md`.

Если у работы есть `publication_notice`, CLI автоматически прикладывает этот проверенный notice к каждой выбранной работе, в том числе в командах `findings` и `answers`. Поиск выдаёт по одному notice на работу в `publication_notices`; каждый найденный фрагмент содержит `publication_notice_ref` с тем же ID снимка и ID работы. Схема v1 находится в `content/analyses/schema/publication-attribution-notice.schema.v1.0.0.json`. Старые снимки без notice читаются как раньше.

CLI запрашивает страницы по 100 частей и идёт по `next_cursor` до `complete`, сохраняя один snapshot и coverage из контракта. Большие findings восстанавливаются из всех `finding_fragment` частей до вывода. В JSON остаются `expected_ids`, `found_ids`, `full_ids`, `partial_ids`, `unprocessed_ids`, `filtered_out_ids`, `unknown_ids` и `duplicate_ids`. Краткая сводка coverage печатается в stderr, поэтому stdout можно перенаправить в JSON-файл без примесей.

Тематический поиск проверяет текстовые поля `findings` и `author_conclusions`. Все слова запроса должны встретиться в одном поле; поиск регистронезависимый с Unicode NFKC нормализацией, без stemming, ранжирования и регулярных выражений. Каждый результат содержит ID работы, ID finding или вопроса, совпавшие поля с фрагментом текста и исходный массив `evidence`, включая локаторы и страницы. Источники и локаторы не индексируются как поисковый текст. Когда у работы есть notice, его точное содержимое доступно по ссылке-ключу `{snapshot, work_id}` из `publication_notice_ref` в массиве `publication_notices`.

Поиск — линейный просмотр принятых EN-извлечений в памяти. Тест измеряет полный запуск CLI на фикстуре со 101 finding и одним выводом размером около 1.9 МБ, который проходит через несколько страниц курсора: первый отдельный процесс — 409.57 мс, медиана пяти повторных процессов — 401.41 мс (Windows, Node 24.11.1). Время включает запуск Node, транспиляцию TypeScript-модуля, чтение и проверку snapshot; кэш ОС не очищался. Заметного прогрева нет, поэтому постоянный индекс или кэш не добавлял. Тест печатает актуальные числа реального снимка и проверяет пустую приёмку на отдельной фикстуре, не привязываясь к текущему количеству принятых записей.

Нужны Node.js `>=22.13.0` и установленные зависимости проекта (CLI использует имеющуюся dev-зависимость TypeScript для загрузки общего API-модуля). Данные и coverage полностью материализуются в памяти. Запрос без принятых работ возвращает пустой массив findings/hits, но сохраняет непустой `unprocessed_ids`; пустую выдачу нельзя трактовать как отсутствие работ в корпусе.
