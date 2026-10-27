---
id: github-suveene-multi-round-avalon-agents
type: work
title: Multi-Round Avalon with AI Agents (dataset and analysis)
authors:
- Suveen Ellawela
year: 2026
source_kind: project
venue: GitHub data/code repository linked to arXiv:2604.20582
publication_status: Открытый dataset/analysis and project report; associated arXiv source exists.
topics:
- networks
- games
- platforms
language: en
identifiers:
- github-suveene-multi-round-avalon-agents
source_urls:
- https://github.com/SuveenE/multi-round-avalon-agents
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-suveene-multi-round-avalon-agents/readme-source.md
- materials/github-suveene-multi-round-avalon-agents/input-notes.md
related:
- relation: discusses
  target: arxiv-2604-20582
summary_short: '188 опубликованных логов Avalon: команды выбирают лидеров и миссии, агенты сохраняют память между
  матчами; заявлены репутации и изменение доверия.'
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# Multi-Round Avalon with AI Agents (dataset and analysis)

[К главному обзору](../README.md) · [Формирование сетей, связи, доверие и репутация](../topics/networks.md) · [Игровые общества и длительные взаимодействия](../topics/games.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md)

## Коротко

> 188 опубликованных логов Avalon: команды выбирают лидеров и миссии, агенты сохраняют память между матчами; заявлены репутации и изменение доверия.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Suveen Ellawela
- **Год:** 2026.
- **Площадка / статус:** GitHub data/code repository linked to arXiv:2604.20582; Открытый dataset/analysis and project report; associated arXiv source exists..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Репозиторий содержит 188 игр Avalon и анализ LLM-агентов в hidden-role deception setting с памятью между играми. Пять агентов сыграли серию из 50 партий; память хранит, кто лгал и кому можно доверять. README заявляет появление репутаций и связь репутации с отбором в команду, но это проектный отчет, не независимо проверенный эксперимент.

## Дизайн исследования

Каждая партия Resistance: Avalon состоит из до пяти миссий; добрые выигрывают после трех успехов, злые — после трех провалов или убийства Merlin. В миссии есть обсуждение, предложение команды, голосование, скрытый выбор успех/провал участниками миссии. Главный турнир: пять агентов играют 50 игр подряд с памятью между ними. Дополнительно есть турниры на 5–10 игроков с полной памятью и одиночные игры без памяти. Репозиторий заявляет 188 complete game logs с репликами, голосами и reasoning. Условия сравнивают reasoning effort low/medium/high и несколько player counts; сам README описывает data, а не опубликованный контролируемый дизайн article.

## Техническая реализация

Заявленная модель GPT-5.1; настраиваются reasoning efforts. После каждой игры агенты создают self-reflection и заметки о других, затем используют их в следующих играх. Публичная структура содержит all_games.json, individual games, player_memories.json. Есть game viewer, блог и связанный arXiv PDF. Результаты и журналы позволяют повторно разметить поведение, но должны сверяться с неизмененными raw data.

## Промпты и инструкции

Агенты получают скрытые роли и game state; память содержит роли, предполагаемую ложь/доверие, сформированные в предыдущих партиях. Полные system prompts не приведены в извлеченной части README. Структура игры заранее задает обсуждение/выбор/голосование и role objectives.

## Опубликованные расходы и вычисления

README не приводит API bill/tokens. GPT-5.1 и reasoning effort меняют расходы, но цена не оценивалась в доступной документации.

## Результаты

По README: репутации начали проявляться примерно к игре 20; Charlie назван «subtle» 38 раз. Высокорепутационных игроков выбирали в команды на 45% чаще. Точность убийства/идентификации Merlin — 67% low, 75% medium, 100% high; 90% неправильных убийств пришлось на обычных добрых, которые логически выводили роль. Эти цифры принадлежат README проекта; проверить denominator/состав логов и статистическую неопределенность нужно по dataset/article.

## Выводы авторов

Автор утверждает, что межигровая память поддерживает репутацию, доверие и стратегическую адаптацию, но ошибочная дедукция способна спутать логический вывод с секретным знанием. Протокол позволяет наблюдать повторяющиеся социальные сигналы.

## Ограничения и интерпретация

188 игр включают разные режимы/размеры, а headline findings относятся к конкретной 5-agent/50-game серии. Набор создавался одним проектом, может не иметь независимой репликации; «возникло естественно» — интерпретация авторов, поскольку память и рефлексия заданы архитектурой. Нет human baseline в карточке README.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/SuveenE/multi-round-avalon-agents).
- [Official README: overview, findings, dataset structure, multi-game learning](https://github.com/SuveenE/multi-round-avalon-agents): Количество логов/конфигурации и сообщаемые headline результаты..
- [Associated preprint record](https://arxiv.org/abs/2604.20582): Связь с исследовательским paper..
- [Локальный текст: readme-source.md](../materials/github-suveene-multi-round-avalon-agents/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-suveene-multi-round-avalon-agents/input-notes.md).

## Связанные работы

- discusses: [arxiv-2604-20582](arxiv-2604-20582.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 729.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 91.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_trust.md`, строка 7.
