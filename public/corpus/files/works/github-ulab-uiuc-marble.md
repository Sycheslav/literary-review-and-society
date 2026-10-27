---
id: github-ulab-uiuc-marble
type: work
title: MARBLE / MultiAgentBench (official repository)
authors:
- Kunlun Zhu
- Hongyi Du
- Zhaochen Hong
- Xiaocheng Yang
- Shuyi Guo
- Zhe Wang
- Zhenhailong Wang
- Cheng Qian
- Xiangru Tang
- Heng Ji
- Jiaxuan You
year: 2025
source_kind: project
venue: GitHub repository for arXiv:2503.01935, MultiAgentBench
publication_status: Открытое программное обеспечение к препринту MultiAgentBench; не независимая статья.
topics:
- platforms
language: en
identifiers:
- github-ulab-uiuc-marble
source_urls:
- https://github.com/ulab-uiuc/MARBLE
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-ulab-uiuc-marble/readme-source.md
related:
- relation: discusses
  target: arxiv-2503-01935
summary_short: MARBLE — кодовый каркас MultiAgentBench для кооперативных и состязательных сред, с общим memory и
  расширяемыми агентами/интеграциями.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# MARBLE / MultiAgentBench (official repository)

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md)

## Коротко

> MARBLE — кодовый каркас MultiAgentBench для кооперативных и состязательных сред, с общим memory и расширяемыми агентами/интеграциями.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Kunlun Zhu; Hongyi Du; Zhaochen Hong; Xiaocheng Yang; Shuyi Guo; Zhe Wang; Zhenhailong Wang; Cheng Qian; Xiangru Tang; Heng Ji; Jiaxuan You
- **Год:** 2025.
- **Площадка / статус:** GitHub repository for arXiv:2503.01935, MultiAgentBench; Открытое программное обеспечение к препринту MultiAgentBench; не независимая статья..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

MARBLE — модульный кодовый каркас для разработки, запуска и оценки многоагентных LLM-систем в симуляционных средах. README упоминает иерархическое или кооперативное выполнение, общий memory и различные LLM APIs; примером запуска служит Werewolf. Численные benchmark-результаты относятся к статье, а не к README.

## Дизайн исследования

README описывает MultiAgentBench как framework для взаимодействия LLM-агентов в разных симулированных средах — с кооперативным или конкурентным поведением, когнитивными способностями и коммуникационными механизмами. Модули позволяют заменять агента, среду и модельный backend, задавать hierarchical/cooperative execution, shared memory и метрики. Публикуемый README не содержит полной схемы бенчмарка; для дизайн/benchmark задач следует обращаться к статье arXiv:2503.01935. Пример кода запускает Werewolf через scripts/werewolf, однако это лишь один сценарий из общей платформы.

## Техническая реализация

Репозиторий рассчитан на Python 3.10, Poetry, Docker-опционально и переменные OPENAI_API_KEY/Together_API_KEY. Приводятся команды установки и примеры; в `examples` запускается Werewolf simulation. В статье цитируется Kunlun Zhu et al. (2025), MultiAgentBench: Evaluating the Collaboration and Competition of LLM agents. README содержит общую информацию о modular design, а полные configs/models/metrics должны сверяться по paper/code.

## Промпты и инструкции

README не содержит полного списка всех prompts; system instructions и роли находятся в сценариях/коде. Общая возможность shared memory не гарантирует, что каждый benchmark использует одинаковую память.

## Опубликованные расходы и вычисления

Общий API bill/token count не указан; стоимость зависит от выбранных LLM APIs и количества вызовов. Docker/setup — инфраструктура, не API-цена.

## Результаты

Программный README не публикует численные результаты исследования. Он подтверждает доступность framework, environment scripts и метрик; не приписываю ему headline scores из arXiv.

## Выводы авторов

MARBLE дает открываемую платформу для многоагентной координации и соревнования, где архитектуры и среды можно заменять. Социальные утверждения следует ссылать на эмпирическую статью/конкретный protocol, не на общие feature claims.

## Ограничения и интерпретация

README — краткое описание и установка; нет независимой оценки качества, полного prompt архивирования или стоимости. Framework-гибкость увеличивает число параметров, которые нужно фиксировать для репликации. Результаты привязаны к конкретному benchmark release.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/ulab-uiuc/MARBLE).
- [Official README: features, environment setup and citation](https://github.com/ulab-uiuc/MARBLE): Возможности фреймворка, установка и связь с MultiAgentBench..
- [Associated paper record](https://arxiv.org/abs/2503.01935): Название и описание benchmark статьи..
- [Локальный текст: readme-source.md](../materials/github-ulab-uiuc-marble/readme-source.md).

## Связанные работы

- discusses: [arxiv-2503-01935](arxiv-2503-01935.md).

## Происхождение записи
