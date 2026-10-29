---
id: github-google-deepmind-meltingpot
type: work
title: 'Melting Pot: suite сред для тестирования социальной компетентности'
authors:
- DeepMind contributors
year: 2021
source_kind: project
venue: GitHub software benchmark; Apache-2.0
publication_status: Источник проверен; см. ограничения и уровень публикации в карточке.
topics:
- methodology
- platforms
language: ru
identifiers:
- github-google-deepmind-meltingpot
source_urls:
- https://github.com/google-deepmind/meltingpot
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-google-deepmind-meltingpot/readme-source.md
- materials/github-google-deepmind-meltingpot/input-notes.md
related: []
summary_short: Melting Pot — набор из 50+ мультиагентных сред/сценариев социальных дилемм для оценки generalization
  в новых взаимодействиях.
key_findings:
- Репозиторий содержит код/конфигурации, перечисленные в README.
- Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
- Даёт стандартизированные task suites и baseline для социальных игр, но сам repository не подтверждает LLM outcomes.
importance: core
importance_reason: Ценность для Лаб. 57 — доступный код, среда или данные по теме методологии, экспериментальных
  платформ; репозиторий помогает изучать и воспроизводить связанное исследование, но сам по себе не является новым
  эмпирическим результатом.
tags:
- кодовый проект
- методология
- платформы
agents_count: зависит от конфигурации проекта
importance_basis: editorial
---

# Melting Pot: suite сред для тестирования социальной компетентности

[К главному обзору](../README.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md)

## Коротко

> Melting Pot — набор из 50+ мультиагентных сред/сценариев социальных дилемм для оценки generalization в новых взаимодействиях.

- **Значимость для обзора:** ключевая — Ценность для Лаб. 57 — доступный код, среда или данные по теме методологии, экспериментальных платформ; репозиторий помогает изучать и воспроизводить связанное исследование, но сам по себе не является новым эмпирическим результатом.
- **Число агентов:** зависит от конфигурации проекта
- **Ключевые слова:** кодовый проект, методология, платформы

**Главные результаты**

1. Репозиторий содержит код/конфигурации, перечисленные в README.
1. Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
1. Даёт стандартизированные task suites и baseline для социальных игр, но сам repository не подтверждает LLM outcomes.

## Библиография и проверка

- **Авторы:** DeepMind contributors
- **Год:** 2021.
- **Площадка / статус:** GitHub software benchmark; Apache-2.0; Источник проверен; см. ограничения и уровень публикации в карточке..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Melting Pot — набор из 50+ мультиагентных сред/сценариев социальных дилемм для оценки generalization в новых взаимодействиях. Это не LLM, но может служить MARL baseline/средой для адаптера.

## Дизайн исследования

Содержит repeated social dilemmas, resource sharing, coordination and interaction regimes; агенты получают reward в формальных средах. Разработано для RL benchmark, поэтому использование с LLM требует интеграции и отдельной проверки интерфейса/actions.

## Техническая реализация

https://github.com/google-deepmind/meltingpot; Apache-2.0. Нужна обёртка для LLM.

## Промпты и инструкции

Нет system prompt в базовом benchmark; action space задаётся средой.

## Опубликованные расходы и вычисления

В источнике не приведены API-расходы.

## Результаты

Даёт стандартизированные task suites и baseline для социальных игр, но сам repository не подтверждает LLM outcomes.

## Выводы авторов

Melting Pot — набор из 50+ мультиагентных сред/сценариев социальных дилемм для оценки generalization в новых взаимодействиях. Это не LLM, но может служить MARL baseline/средой для адаптера.

## Ограничения и интерпретация

Результаты MARL нельзя выдавать за результаты LLM; benchmark rules/rewards специфичны.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/google-deepmind/meltingpot).
- [README, environment catalog and API](https://github.com/google-deepmind/meltingpot): Источник, метод/содержание и ограничения.
- [Локальный текст: readme-source.md](../materials/github-google-deepmind-meltingpot/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-google-deepmind-meltingpot/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Методология, валидация и сравнение с людьми](../topics/methodology.md), [Архитектуры, платформы и масштабирование](../topics/platforms.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 266.

## Подробное изложение на русском

[Читать подробное русское изложение](../materials/github-google-deepmind-meltingpot/summary.ru.md)

