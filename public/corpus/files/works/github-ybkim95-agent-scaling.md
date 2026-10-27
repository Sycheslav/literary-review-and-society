---
id: github-ybkim95-agent-scaling
type: work
title: Agent Scaling (code and artifacts for «Capable language models can outgrow the benefits of collaboration»)
authors:
- Yoon Kim et al.; see associated paper record
year: 2026
source_kind: project
venue: GitHub code for Nature Machine Intelligence paper, DOI 10.1038/s42256-026-01268-y; arXiv:2512.08296 earlier
  title
publication_status: Официальный код/артефакты к рецензируемой публикации 2026; репозиторий не самостоятельная статья.
topics:
- platforms
- coordination
- memory
- communities
language: en
identifiers:
- github-ybkim95-agent-scaling
source_urls:
- https://github.com/ybkim95/agent-scaling/
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-ybkim95-agent-scaling/readme-source.md
- materials/github-ybkim95-agent-scaling/input-notes.md
related:
- relation: discusses
  target: arxiv-2512-08296
- relation: discusses
  target: web-dam-prod-media-mit-edu-073d188d54
- relation: discusses
  target: web-theaidigest-org-8ecf0b2d70
summary_short: Официальные артефакты к статье Nature Machine Intelligence о том, когда рост возможностей модели
  уменьшает выигрыш от multi-agent collaboration.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# Agent Scaling (code and artifacts for «Capable language models can outgrow the benefits of collaboration»)

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Роли, лидерство, разделение труда и координация](../topics/coordination.md) · [Коллективная память, язык и культурная передача](../topics/memory.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Официальные артефакты к статье Nature Machine Intelligence о том, когда рост возможностей модели уменьшает выигрыш от multi-agent collaboration.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Yoon Kim et al.; see associated paper record
- **Год:** 2026.
- **Площадка / статус:** GitHub code for Nature Machine Intelligence paper, DOI 10.1038/s42256-026-01268-y; arXiv:2512.08296 earlier title; Официальный код/артефакты к рецензируемой публикации 2026; репозиторий не самостоятельная статья..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Репозиторий предоставляет framework для исследования scaling LLM single-agent и multi-agent систем на сложных reasoning-задачах. Можно сравнивать single, centralized, decentralized, hybrid и independent configurations на шести benchmark datasets. README предупреждает, что arXiv препринт сохраняет раннее название, а текущая журнальная статья опубликована под другим.

## Дизайн исследования

README связывает код с Nature Machine Intelligence paper «Capable language models can outgrow the benefits of collaboration» и препринтом «Towards a science of scaling agent systems». Бенчмарки: BrowseComp-Plus, PlanCraft, SWE-bench Verified, Terminal-Bench, Workbench и Finance Agent; сравнимые конфигурации single-agent, centralized team с lead, decentralized peer-to-peer, hybrid и independent agents. Число агентов настраивается для centralized mode; задачи включают web/multi-hop QA, Minecraft planning, software issues, terminal, business tools и finance. Это системный benchmark agent scaling, не наблюдение за долгосрочной культурой/дружбой.

## Техническая реализация

Python 3.11+, `uv`, Hydra configs; API через LiteLLM-compatible providers OpenAI/Gemini/Anthropic. README советует pinning release: manuscript цитирует tag v2.1.3, v2.2.x исправляет analysis scripts. Multi-agent types указаны в configs; pipeline пишет full run config, logs, prompts/responses/tool calls, per-instance results и metrics. Два датасета требуют download scripts; SWE-bench/Terminal-Bench требуют Docker. Модели в README: GPT-5 variants, Gemini 2.5/2.0, Claude Sonnet 4.5/4/3.7 (старые версии имеют ограничения по backend).

## Промпты и инструкции

Prompt/configs задают single/multi-agent workflows, инструменты и задачи; пример запуска сам по себе не раскрывает все prompts. Log может сохранять сообщения, tool calls и выбранные параметры; их нужно анализировать как спецификацию экспериментального агента.

## Опубликованные расходы и вычисления

README не публикует суммарный API cost; compute/quality comparisons и usage logging есть в experiment artifacts, но не переводятся автоматически в денежный счет. Один вызов/агент не фиксирован для всех задач.

## Результаты

README устанавливает связь с опубликованной статьей и предоставляет pipeline для результатов, но не содержит полноценной таблицы эффектов. Главный claim самой журнальной статьи — сильные модели могут превысить выгоды сотрудничества; численные результаты нужно брать из paper, а не README. Архив v2.2.x исправляет analysis scripts относительно tag указанного manuscript, поэтому результаты зависят от commit.

## Выводы авторов

Артефакты полезны для воспроизведения границ, где multi-agent test-time scaling дает пользу или проигрывает мощной одиночной модели. Необходимо фиксировать dataset, архитектуру, модель, число агентов и code version.

## Ограничения и интерпретация

Различия задач/моделей и централизованных/децентрализованных pipelines затрудняют attribution. Несколько датасетов нужно скачивать отдельно, версии/ендпойнты могут исчезнуть. Это performance benchmark задач, не оценка социальной нормы.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/ybkim95/agent-scaling/).
- [Official README: paper linkage, releases, config options, model and dataset tables, outputs](https://github.com/ybkim95/agent-scaling): Paper identity/version, experiment setup and code organization..
- [Nature Machine Intelligence article metadata](https://doi.org/10.1038/s42256-026-01268-y): Связь со статьёй и опубликованный статус..
- [Earlier preprint metadata](https://arxiv.org/abs/2512.08296): История названия версии препринта..
- [Локальный текст: readme-source.md](../materials/github-ybkim95-agent-scaling/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-ybkim95-agent-scaling/input-notes.md).

## Связанные работы

- discusses: [arxiv-2512-08296](arxiv-2512-08296.md).
- discusses: [web-dam-prod-media-mit-edu-073d188d54](web-dam-prod-media-mit-edu-073d188d54.md).
- discusses: [web-theaidigest-org-8ecf0b2d70](web-theaidigest-org-8ecf0b2d70.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 953.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_architecture.md`, строка 16.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 85.
