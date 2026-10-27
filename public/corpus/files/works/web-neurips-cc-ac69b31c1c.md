---
id: web-neurips-cc-ac69b31c1c
type: work
title: Exploitability of LLM Agents in Auctions
authors:
- Kesari
- Kesari
year: 2026
source_kind: web_material
venue: NeurIPS 2026 workshop entry
publication_status: Источник проверен; тип источника различается по карточке.
topics:
- methodology
- economics
language: en
identifiers:
- web-neurips-cc-ac69b31c1c
source_urls:
- https://neurips.cc/virtual/2026/168260
verification_status: abstract_reviewed
retrieval_status: metadata_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-neurips-cc-ac69b31c1c/input-notes.md
related: []
summary_short: Материал NeurIPS сообщает о приблизительной совместимости стимулов в аукционах и росте манипуляций
  при увеличении regret; это краткая запись, а не отдельное исследование.
key_findings:
- Краткая запись NeurIPS сообщает об аукционе с приблизительной совместимостью стимулов.
- В аннотации указано, что агенты начинают находить выгодные отклонения при росте regret примерно в 60 раз; сообщается
  также о росте выручки на 14–25%.
- Это краткое описание результата; количественные условия следует проверять по первичной статье.
importance: supporting
importance_reason: Для Лаб. 57 источник полезен как доступ к публикации/материалу по теме методологии, экономических
  взаимодействий; эмпирические выводы следует связывать с первичной работой, а не с веб-страницей как отдельным
  исследованием.
tags:
- веб-источник
- методология
- экономика
agents_count: не опубликовано
importance_basis: editorial
---

# Exploitability of LLM Agents in Auctions

[К главному обзору](../README.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md) · [Экономические игры, рынки, стимулы и сговор](../topics/economics.md)

## Коротко

> Материал NeurIPS сообщает о приблизительной совместимости стимулов в аукционах и росте манипуляций при увеличении regret; это краткая запись, а не отдельное исследование.

- **Значимость для обзора:** дополняющая — Для Лаб. 57 источник полезен как доступ к публикации/материалу по теме методологии, экономических взаимодействий; эмпирические выводы следует связывать с первичной работой, а не с веб-страницей как отдельным исследованием.
- **Число агентов:** не опубликовано
- **Ключевые слова:** веб-источник, методология, экономика

**Главные результаты**

1. Краткая запись NeurIPS сообщает об аукционе с приблизительной совместимостью стимулов.
1. В аннотации указано, что агенты начинают находить выгодные отклонения при росте regret примерно в 60 раз; сообщается также о росте выручки на 14–25%.
1. Это краткое описание результата; количественные условия следует проверять по первичной статье.

## Библиография и проверка

- **Авторы:** Kesari; Kesari
- **Год:** 2026.
- **Площадка / статус:** NeurIPS 2026 workshop entry; Источник проверен; тип источника различается по карточке..
- **Проверка содержания:** Проверена аннотация; подробности полного текста не подтверждены.
- **Доступность оригинала:** metadata_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Workshop record reports approximate incentive compatibility in auctions: agents fail to find profitable deviations until regret increases about 60×; manipulations can yield +14–25% revenue. It is a workshop entry/summary, not a full standalone experiment unless the linked paper is available.

## Дизайн исследования

Auction setting measures exploitability/regret of LLM bidding policies and platform revenue under deviations. Exact auction format, bidder count, values, prompts and statistical setup need to be sourced from paper, not entry text alone.

## Техническая реализация

NeurIPS workshop page; no standalone code verified in this task.

## Промпты и инструкции

LLM agents prompted as bidders; strategic instructions/task framing matter.

## Опубликованные расходы и вычисления

Опубликованный полный API-бюджет не найден.

## Результаты

Queue summary reports regret multiplier and revenue lift; treat these as abstract-level claims pending primary paper.

## Выводы авторов

Workshop record reports approximate incentive compatibility in auctions: agents fail to find profitable deviations until regret increases about 60×; manipulations can yield +14–25% revenue. It is a workshop entry/summary, not a full standalone experiment unless the linked paper is available.

## Ограничения и интерпретация

Workshop abstract likely limited detail; approximate compatibility depends on mechanism, sampled values and model set.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://neurips.cc/virtual/2026/168260).
- [workshop entry and abstract](https://neurips.cc/virtual/2026/168260): Источник и указанные результаты.
- [Все уникальные исходные сведения](../materials/web-neurips-cc-ac69b31c1c/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Методология, валидация и сравнение с людьми](../topics/methodology.md), [Экономические игры, рынки, стимулы и сговор](../topics/economics.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 162.
