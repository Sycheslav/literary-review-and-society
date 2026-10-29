---
id: web-cambridge-org-47d8659e3d
type: work
title: Synthetic Replacements for Human Survey Data? The Perils of Large Language Models
authors:
- Bisbee et al.
year: 2024
source_kind: review
venue: Political Analysis
publication_status: Источник проверен; тип источника различается по карточке.
topics:
- methodology
language: en
identifiers:
- web-cambridge-org-47d8659e3d
source_urls:
- https://www.cambridge.org/core/product/B92267DC26195C7F36E63EA04A47D2FE
verification_status: fulltext_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-cambridge-org-47d8659e3d/fulltext.md
- materials/web-cambridge-org-47d8659e3d/prompts.md
- materials/web-cambridge-org-47d8659e3d/input-notes.md
related: []
summary_short: Статья оценивает, можно ли заменить человеческие survey data синтетическими ответами LLM.
key_findings:
- Статья сравнивает синтетические ответы LLM с человеческими survey data.
- Авторы сообщают, что 48% оценённых коэффициентов существенно отличаются от человеческих оценок.
- Распределения синтетических ответов занижают вариативность; это ограничивает замену человеческих данных.
importance: supporting
importance_reason: Для Лаб. 57 источник полезен как доступ к публикации/материалу по теме методологии; эмпирические
  выводы следует связывать с первичной работой, а не с веб-страницей как отдельным исследованием.
tags:
- веб-источник
- методология
- LLM-агенты
- валидация
agents_count: не опубликовано
importance_basis: editorial
---

# Synthetic Replacements for Human Survey Data? The Perils of Large Language Models

[К главному обзору](../README.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md)

## Коротко

> Статья оценивает, можно ли заменить человеческие survey data синтетическими ответами LLM.

- **Значимость для обзора:** дополняющая — Для Лаб. 57 источник полезен как доступ к публикации/материалу по теме методологии; эмпирические выводы следует связывать с первичной работой, а не с веб-страницей как отдельным исследованием.
- **Число агентов:** не опубликовано
- **Ключевые слова:** веб-источник, методология, LLM-агенты, валидация

**Главные результаты**

1. Статья сравнивает синтетические ответы LLM с человеческими survey data.
1. Авторы сообщают, что 48% оценённых коэффициентов существенно отличаются от человеческих оценок.
1. Распределения синтетических ответов занижают вариативность; это ограничивает замену человеческих данных.

## Библиография и проверка

- **Авторы:** Bisbee et al.
- **Год:** 2024.
- **Площадка / статус:** Political Analysis; Источник проверен; тип источника различается по карточке..
- **Проверка содержания:** Проверены полный текст и существенные разделы метода/результатов.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Статья оценивает, можно ли заменить человеческие survey data синтетическими ответами LLM. Очередь приводит результат: 48% оценённых коэффициентов статистически отличаются от ANES, а синтетическая дисперсия занижена.

## Дизайн исследования

Эмпирическая проверка сопоставляет LLM-generated survey data с American National Election Studies, анализируя regression coefficients и распределения. Это не просто сравнение средних: неправильная дисперсия влияет на uncertainty и выводы о связях.

## Техническая реализация

Полный Cambridge article text локально; используемые модели и опросные prompts перечислены в статье.

## Промпты и инструкции

Questions/wordings/sampling prompts должны соответствовать survey; ответы синтетической популяции не заменяют реальную выборку.

## Опубликованные расходы и вычисления

Опубликованный полный API-бюджет не найден.

## Результаты

Основной отмеченный результат — 48% коэффициентов существенно отличаются; synthetic response distributions underestimate variance. Числа необходимо читать с определением совокупности коэффициентов и model/ANES sample.

## Выводы авторов

Статья оценивает, можно ли заменить человеческие survey data синтетическими ответами LLM. Очередь приводит результат: 48% оценённых коэффициентов статистически отличаются от ANES, а синтетическая дисперсия занижена.

## Ограничения и интерпретация

Калибровка на конкретной политической популяции и временном срезе; модель не имеет реальной sampling process; результат не является универсальной оценкой всех LLM.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://www.cambridge.org/core/product/B92267DC26195C7F36E63EA04A47D2FE).
- [Methods, Results and regression comparisons](https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE): Источник и указанные результаты.
- [Локальный текст: fulltext.md](../materials/web-cambridge-org-47d8659e3d/fulltext.md).
- [Локальный текст: prompts.md](../materials/web-cambridge-org-47d8659e3d/prompts.md).
- [Все уникальные исходные сведения](../materials/web-cambridge-org-47d8659e3d/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Методология, валидация и сравнение с людьми](../topics/methodology.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 52.

## Подробное изложение на русском

[Открыть изложение](../materials/web-cambridge-org-47d8659e3d/summary.ru.md)
