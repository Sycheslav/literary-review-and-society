---
id: github-atomashevic-yclient-reddit
type: work
title: YClient-Reddit (YSocial client fork for Reddit-style simulations)
authors:
- atomashevic
year: null
source_kind: project
venue: GitHub software repository; fork of YSocialTwin/YClient
publication_status: Проектный форк; README не является отдельной научной публикацией.
topics:
- platforms
- communities
language: en
identifiers:
- github-atomashevic-yclient-reddit
source_urls:
- https://github.com/atomashevic/YClient-Reddit
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-atomashevic-yclient-reddit/readme-source.md
- materials/github-atomashevic-yclient-reddit/input-notes.md
related:
- relation: discusses
  target: arxiv-2508-21740
- relation: discusses
  target: github-atomashevic-voat-simulation
- relation: discusses
  target: github-ysocialtwin-ysocial
- relation: discusses
  target: doi-10-5281-zenodo-15690964
summary_short: Форк YSocial для Reddit-подобных сценариев с постами, ветками комментариев, голосованием, лентой
  и конфигурациями сообщества r/technology.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# YClient-Reddit (YSocial client fork for Reddit-style simulations)

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Форк YSocial для Reddit-подобных сценариев с постами, ветками комментариев, голосованием, лентой и конфигурациями сообщества r/technology.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** atomashevic
- **Год:** не установлен.
- **Площадка / статус:** GitHub software repository; fork of YSocialTwin/YClient; Проектный форк; README не является отдельной научной публикацией..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Форк клиентского приложения YSocial адаптирует цифровой двойник соцсети для Reddit-подобных сценариев. README перечисляет изменения prompts и логики постинга/комментариев/голосования, структуры сообществ и веток, рекомендателя и feed generation; также даны сценарии r/technology разного масштаба.

## Дизайн исследования

Репозиторий меняет исходный клиент YSocial — клиент-серверную симуляцию цифрового двойника онлайн-платформы — чтобы лучше моделировать Reddit-подобные сообщества. README перечисляет адаптацию prompt и логики взаимодействий для публикации, комментариев и голосований, изменение структур данных и параметров для thread-based сообществ, модификации recommender/feed и скрипты/параметры Reddit-экспериментов. Включены две конфигурации r/technology: небольшая subreddit-модель и более крупное постоянно растущее сообщество с глубокой структурой дискуссий. Это кодовый форк, не отдельная эмпирическая статья; README не предоставляет измеренные социальные результаты.

## Техническая реализация

Исходный YSocial клиент/документация остаются источником общих setup, функций и технических деталей. Данный форк выделяет модификации, дополнительные experiments/tech и experiments/tech-v1 конфиги, prompts и RSS-feeds. Не переносить возможности/метрики базового YSocial на форк без проверки кода. Конкретные модели и размеры группы в доступном README не сообщены.

## Промпты и инструкции

README прямо сообщает, что prompts и interaction logic адаптированы под Reddit-style posting/commenting/voting; prompts и RSS feeds хранятся в сценариях. Это экспериментаторские настройки симуляции, не естественные нормы реальных форумов.

## Опубликованные расходы и вычисления

Репозиторий не указывает API-тарифов, token totals или стоимость запуска.

## Результаты

Источник описывает наличие конфигураций, ленты и социальной механики, но не приводит результаты сравнительного исследования. Создание «растущего успешного subreddit» — название/цель сценария, не доказанный исход модели.

## Выводы авторов

Форк может служить программной основой для сравнения поведения в thread-структурах и на Reddit-подобной платформе, но эмпирические claims нужно брать из отдельной публикации/логов.

## Ограничения и интерпретация

README краткий, отсылает к базовой документации; отсутствуют sample size, модели, метрики и контрольные условия. Поведение задается промптами и механикой feed/recommendation.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/atomashevic/YClient-Reddit).
- [Official README: fork description, key modifications, scenario list](https://github.com/atomashevic/YClient-Reddit): Функциональные модификации и сценарии r/technology..
- [Upstream client referenced by fork README](https://github.com/YSocialTwin/YClient): Связь форка с базовым YSocial клиентом..
- [Локальный текст: readme-source.md](../materials/github-atomashevic-yclient-reddit/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-atomashevic-yclient-reddit/input-notes.md).

## Связанные работы

- discusses: [arxiv-2508-21740](arxiv-2508-21740.md).
- discusses: [github-atomashevic-voat-simulation](github-atomashevic-voat-simulation.md).
- discusses: [github-ysocialtwin-ysocial](github-ysocialtwin-ysocial.md).
- discusses: [doi-10-5281-zenodo-15690964](doi-10-5281-zenodo-15690964.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 883.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_platforms.md`, строка 18.
