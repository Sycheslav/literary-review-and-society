---
id: github-multi-agent-llms-lm-evaluation-harness
type: work
title: 'Evaluation code for «Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling»'
authors:
- Florian Valentin Wunderlich
- Lars Benedikt Kaesberg
- Jan Philip Wahle
- Terry Ruas
- Bela Gipp
year: 2026
source_kind: project
venue: ACL 2026 Student Research Workshop; DOI 10.18653/v1/2026.acl-srw.1; GitHub companion code
publication_status: Рецензируемая статья опубликована на ACL SRW 2026; текущая запись относится к официальному code
  fork.
topics:
- platforms
- memory
- communities
language: en
identifiers:
- github-multi-agent-llms-lm-evaluation-harness
source_urls:
- https://github.com/Multi-Agent-LLMs/lm-evaluation-harness
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-multi-agent-llms-lm-evaluation-harness/readme-source.md
- materials/github-multi-agent-llms-lm-evaluation-harness/input-notes.md
related:
- relation: discusses
  target: acl-2026.acl-srw.1
- relation: discusses
  target: web-theaidigest-org-8ecf0b2d70
summary_short: Официальный evaluation harness к ACL 2026 статье о качестве и compute Pareto-front для CoT/self-consistency/self-refinement/debate/MoA.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# Evaluation code for «Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling»

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Коллективная память, язык и культурная передача](../topics/memory.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Официальный evaluation harness к ACL 2026 статье о качестве и compute Pareto-front для CoT/self-consistency/self-refinement/debate/MoA.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Florian Valentin Wunderlich; Lars Benedikt Kaesberg; Jan Philip Wahle; Terry Ruas; Bela Gipp
- **Год:** 2026.
- **Площадка / статус:** ACL 2026 Student Research Workshop; DOI 10.18653/v1/2026.acl-srw.1; GitHub companion code; Рецензируемая статья опубликована на ACL SRW 2026; текущая запись относится к официальному code fork..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Кодовая база модифицирует lm-evaluation-harness для сравнения single-agent и multi-agent inference-time scaling при сопоставимых вычислительных бюджетах. Рассматриваются self-consistency, self-refinement, debate и mixture-of-agents и построение Pareto-фронтов качества/вычислений. README утверждает, что оптимизированный MoA обычно обходит другие стратегии; полные численные выводы — в статье.

## Дизайн исследования

README описывает сравнение четырех методов test-time scaling — self-consistency, self-refinement, multi-agent debate, mixture-of-agents — и их параметризаций при matched compute budget. Бенчмарк строит Pareto-front по точности и вычислительным ресурсам, вместо того чтобы сравнивать только итоговый score. В репозитории выделены leaderboard runs для MMLU-Pro и BBH. Это code companion к статье; данные benchmark не превращают его в общество с долгими отношениями или независимыми агентскими интересами.

## Техническая реализация

Fork EleutherAI lm-evaluation-harness, поддерживает custom inference pipelines (`lm_eval/models/custom_pipelines_api.py`) для single/multi-agent вариантов и wrapper с compute estimates/logging (`pipeline_evaluations/pipeline_evaluation_wrapper.py`). Код и experiment folders ведут результаты для MMLU-Pro/BBH. README ссылается на MIT license; точные параметры модели и datasets должны сверяться с ACL paper.

## Промпты и инструкции

Prompts и pipeline behavior задаются конфигурацией стратегии: CoT/self-consistency/self-refinement/debate/MoA, а не социальными ролями. Агентские ответы в MoA становятся дополнительным контекстом последующим слоям. Полные prompts/configs — в коде и статье.

## Опубликованные расходы и вычисления

Проект моделирует вычислительный расход через estimator, однако README не приводит единую денежную API-смету. Сравнение compute budgets надо читать как экспериментальную оценку вызовов/вычислений, не API invoice.

## Результаты

README сообщает, что при оптимальном масштабировании multi-agent методы могут быть эффективнее single-agent; MoA устойчиво выигрывает у debate, self-consistency и self-refinement, а оптимальная MoA часто использует один дополнительный модельный вызов на каждый слой. Более крупная базовая модель без интенсивного test-time compute иногда эффективнее маленькой с масштабированием. Это headline claims companion README, точные измерения — ACL paper.

## Выводы авторов

Статья и код дают методологию сравнения качества с равным compute budget; нельзя считать «больше агентов» самостоятельной причиной, если сравнение включает различное количество токенов/вызовов.

## Ограничения и интерпретация

Синтетические группы агентов — части inference pipeline, а не долговременное социальное взаимодействие. Выводы привязаны к выбранным benchmark/model families и compute estimator. README требует версионировать код: v2.1.3 указан в manuscript, v2.2.x исправляет analysis scripts.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/Multi-Agent-LLMs/lm-evaluation-harness).
- [Official README: study design, components, findings, citation and version note](https://github.com/Multi-Agent-LLMs/lm-evaluation-harness): Описание сопоставимых pipelines и headline findings..
- [ACL 2026 official publication record](https://aclanthology.org/2026.acl-srw.1/): Название, авторы и venue связанные с репозиторием..
- [Локальный текст: readme-source.md](../materials/github-multi-agent-llms-lm-evaluation-harness/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-multi-agent-llms-lm-evaluation-harness/input-notes.md).

## Связанные работы

- discusses: [acl-2026.acl-srw.1](acl-2026.acl-srw.1.md).
- discusses: [web-theaidigest-org-8ecf0b2d70](web-theaidigest-org-8ecf0b2d70.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 977.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_architecture.md`, строка 40.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 87.
