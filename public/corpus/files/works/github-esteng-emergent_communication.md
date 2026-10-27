---
id: github-esteng-emergent_communication
type: work
title: 'GlossoGen paper companion: code and data for emergent language in multi-agent LLM interactions'
authors:
- Elias Stengel-Eskin
- Newton Sander
- Carlos Bonetti
- Sasha Boguraev
- James Bowler
- Hale Sirin
- Simon Kirby
year: 2026
source_kind: project
venue: GitHub repository for arXiv:2609.01491
publication_status: Открытый код/данные, связанные с препринтом GlossoGen; не самостоятельная статья.
topics:
- memory
- platforms
- methodology
language: en
identifiers:
- github-esteng-emergent_communication
source_urls:
- https://github.com/esteng/emergent_communication
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-esteng-emergent_communication/readme-source.md
- materials/github-esteng-emergent_communication/input-notes.md
related:
- relation: discusses
  target: arxiv-2609-01491
- relation: discusses
  target: github-agencyenterprise-glossogen
summary_short: 'Код и данные GlossoGen: скрипты для воспроизведения результатов о возникновении языка, передаче
  конвенций, description length и морфосинтаксисе.'
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# GlossoGen paper companion: code and data for emergent language in multi-agent LLM interactions

[К главному обзору](../README.md) · [Коллективная память, язык и культурная передача](../topics/memory.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md)

## Коротко

> Код и данные GlossoGen: скрипты для воспроизведения результатов о возникновении языка, передаче конвенций, description length и морфосинтаксисе.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Elias Stengel-Eskin; Newton Sander; Carlos Bonetti; Sasha Boguraev; James Bowler; Hale Sirin; Simon Kirby
- **Год:** 2026.
- **Площадка / статус:** GitHub repository for arXiv:2609.01491; Открытый код/данные, связанные с препринтом GlossoGen; не самостоятельная статья..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Репозиторий воспроизводит графики, таблицы и статистики статьи о возникновении языка в сложных многоагентных LLM-взаимодействиях. Он включает данные GlossoGen, код анализа возникновения языка, передачи конвенций новичкам, описательной длины и морфосинтаксической продуктивности. README позволяет отличить эмпирические выводы статьи от репликационных артефактов.

## Дизайн исследования

README называет этот репозиторий reproducer для figures/tables/statistics связанной статьи. В каталоге emergence анализируются успех коммуникации при ограничениях бюджета; передача newcomer включает появление новых участников и зависит от длины доступной истории; MDL-часть использует одну грамматику, индуцированную на 14 раундах development; morphology module проверяет продуктивность конструкций. Данные экспортированы из отдельной GlossoGen-платформы, то есть репозиторий анализа не является самим runtime симулятора. В README указаны 135 seed-runs по 45 roots в одной MDL процедуре и результаты по заданному времяному бюджету.

## Техническая реализация

README перечисляет анализ/подготовку CSV, графиков и статистик; `prep_per_round.py`, `compute_components.py`, передачи/новичков и отдельный morphology package. Есть кэшированные prompts/labels, грамматики и transcripts. Например, proprietary-model success при лимите 2000 секунд 0,921 против 0,308 для open-weight condition; judge-agreement для части морфологических оценок — 124/150 exact, weighted κ=0,642. README связывает репозиторий со статьёй arXiv:2609.01491; это не считать повторной статьей.

## Промпты и инструкции

Промпты для аннотации/индукции грамматик находятся в data/prompts; отдельные скрипты вызывают GPT-5.5 для метаязыковых запросов и грамматик; morphology pipeline использует отдельные backend/шесть модулей. Это prompts анализа/оценивания, а не обязательно все runtime prompts исходных агентов. README утверждает, что cached outputs позволяют последующим этапам выполняться без credentials.

## Опубликованные расходы и вычисления

README не приводит общую денежную сумму для данных экспериментов. Количество LLM calls у отдельных annotation/morphology modules есть, но не полная смета.

## Результаты

Repository README сообщает конкретно, что при лимите 2000s success rate postmortem-off составляет 0,921 для proprietary vs 0,308 open-weight; transmission scripts разбирают связь видимой истории с успехом новичка, 15 roots на source model; MDL использует 135 seed-runs/45 roots. В морфологическом validation semantic judge точен в 124/150 случаях (weighted κ=0,642), а known-codebook eval достигает 98,9% production и 98,2% segmentation. Это содержимое документации артефакта; для выводов статьи требуется сверить таблицы и статистику полного текста.

## Выводы авторов

Кодовый пакет повышает проверяемость аналитической части GlossoGen и позволяет независимо реконструировать figures/tables. Успешность репликации зависит от сохраненных данных, frozen model rounds, grammar setup и judge-проверок.

## Ограничения и интерпретация

Это аналитический/датовый companion, а не полноценный runner/исчерпывающее описание экспериментальных prompts. Несколько labels/grammars были произведены GPT-5.5, поэтому human validation остается ограниченной. Данные экспортированы с другой платформы, а не получены всеми скриптами заново.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/esteng/emergent_communication).
- [Official README: reproduction pipeline, emergence, transmission, MDL, morphology, data layout](https://github.com/esteng/emergent_communication): Структура кода/данных и численные показатели, опубликованные в README..
- [Associated paper record](https://arxiv.org/abs/2609.01491): Связь с основным исследованием..
- [Локальный текст: readme-source.md](../materials/github-esteng-emergent_communication/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-esteng-emergent_communication/input-notes.md).

## Связанные работы

- discusses: [arxiv-2609-01491](arxiv-2609-01491.md).
- discusses: [github-agencyenterprise-glossogen](github-agencyenterprise-glossogen.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 241.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_memory.md`, строка 11.
