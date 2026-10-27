---
id: web-pmc-ncbi-nlm-nih-gov-580593c8a3
type: work
title: 'Wisdom of the silicon crowd: LLM ensemble prediction capabilities rival human crowd accuracy'
authors:
- Philipp Schoenegger
- Indre Tuminauskaite
- Peter S. Park
- Rafael Valdece Sousa Bastos
- Philip E. Tetlock
year: 2024
source_kind: research
venue: Science Advances 10, eadp1528
publication_status: Источник проверен; тип источника различается по карточке.
topics:
- methodology
- intelligence
language: en
identifiers:
- web-pmc-ncbi-nlm-nih-gov-580593c8a3
source_urls:
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11800985
verification_status: fulltext_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-pmc-ncbi-nlm-nih-gov-580593c8a3/fulltext.md
- materials/web-pmc-ncbi-nlm-nih-gov-580593c8a3/input-notes.md
related: []
summary_short: Сравнивает ensemble прогнозы LLM с человеческой crowd accuracy.
key_findings:
- Вывод о сопоставимой точности заявлен авторами
- также отмечено склонение к ответу “yes”.
- Для точных размеров/score сверять Tables/Methods.
importance: supporting
importance_reason: Для Лаб. 57 источник полезен как доступ к публикации/материалу по теме методологии, коллективного
  решения задач; эмпирические выводы следует связывать с первичной работой, а не с веб-страницей как отдельным исследованием.
tags:
- исследование
- методология
- интеллект
agents_count: не опубликовано
importance_basis: editorial
---

# Wisdom of the silicon crowd: LLM ensemble prediction capabilities rival human crowd accuracy

[К главному обзору](../README.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md) · [Коллективный интеллект, дебаты и конформизм](../topics/intelligence.md)

## Коротко

> Сравнивает ensemble прогнозы LLM с человеческой crowd accuracy.

- **Значимость для обзора:** дополняющая — Для Лаб. 57 источник полезен как доступ к публикации/материалу по теме методологии, коллективного решения задач; эмпирические выводы следует связывать с первичной работой, а не с веб-страницей как отдельным исследованием.
- **Число агентов:** не опубликовано
- **Ключевые слова:** исследование, методология, интеллект

**Главные результаты**

1. Вывод о сопоставимой точности заявлен авторами
1. также отмечено склонение к ответу “yes”.
1. Для точных размеров/score сверять Tables/Methods.

## Библиография и проверка

- **Авторы:** Philipp Schoenegger; Indre Tuminauskaite; Peter S. Park; Rafael Valdece Sousa Bastos; Philip E. Tetlock
- **Год:** 2024.
- **Площадка / статус:** Science Advances 10, eadp1528; Источник проверен; тип источника различается по карточке..
- **Проверка содержания:** Проверены полный текст и существенные разделы метода/результатов.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Сравнивает ensemble прогнозы LLM с человеческой crowd accuracy. В описании проекта: ансамбль из 12 LLM статистически не отличается от 925 человеческих прогнозистов, при этом обнаруживается yes/optimism bias. Это ensemble forecasting, не социальное взаимодействие между агентами.

## Дизайн исследования

Полный текст Science Advances; оценивается prediction accuracy на вопросах прогноза и агрегация нескольких LLM. Сравнение включает individual/ensemble predictors и human forecasters; точная выборка и aggregation указываются в статье.

## Техническая реализация

Множество LLM предсказывает бинарные/вероятностные outcomes; data and code details в article.

## Промпты и инструкции

Forecast questions задают common task; «crowd» здесь — ансамбль ответов, не взаимодействующие личности.

## Опубликованные расходы и вычисления

Опубликованный полный API-бюджет не найден.

## Результаты

Вывод о сопоставимой точности заявлен авторами; также отмечено склонение к ответу “yes”. Для точных размеров/score сверять Tables/Methods.

## Выводы авторов

Сравнивает ensemble прогнозы LLM с человеческой crowd accuracy. В описании проекта: ансамбль из 12 LLM статистически не отличается от 925 человеческих прогнозистов, при этом обнаруживается yes/optimism bias. Это ensemble forecasting, не социальное взаимодействие между агентами.

## Ограничения и интерпретация

Конкретный forecasting domain/sample, aggregation and calibration; comparable accuracy не означает независимость или равенство к человеческой группе.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://pmc.ncbi.nlm.nih.gov/articles/PMC11800985).
- [Methods; Results; tables; DOI 10.1126/sciadv.adp1528](https://pmc.ncbi.nlm.nih.gov/articles/PMC11800985/): Источник и указанные результаты.
- [Локальный текст: fulltext.md](../materials/web-pmc-ncbi-nlm-nih-gov-580593c8a3/fulltext.md).
- [Все уникальные исходные сведения](../materials/web-pmc-ncbi-nlm-nih-gov-580593c8a3/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Методология, валидация и сравнение с людьми](../topics/methodology.md), [Коллективный интеллект, дебаты и конформизм](../topics/intelligence.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 233.
