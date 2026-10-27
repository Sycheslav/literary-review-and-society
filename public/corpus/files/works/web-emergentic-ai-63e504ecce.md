---
id: web-emergentic-ai-63e504ecce
type: work
title: 'Agent Societies: What do agents build when given a 3D world and no directive?'
authors:
- Emergentic project team (corporate case study; named authors not shown in captured page)
year: 2026
source_kind: web_material
venue: Emergentic case study, updated 2026-10-25
publication_status: Проектный отчёт/коммерческая веб-страница, не peer-reviewed paper
topics:
- communities
language: en
identifiers:
- web-emergentic-ai-63e504ecce
source_urls:
- https://emergentic.ai/case-studies/agent-societies/supplement
verification_status: fulltext_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-emergentic-ai-63e504ecce/fulltext.md
- materials/web-emergentic-ai-63e504ecce/input-notes.md
related:
- relation: discusses
  target: web-emergentic-ai-79d757cbf7
- relation: discusses
  target: web-theaidigest-org-8ecf0b2d70
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
summary_short: Команда Emergentic описывает 32 прогона в 3D мирах для четырёх моделей и групп 1–128 агентов; среды
  не задают проект или нужду выживания. Агенты могут строить, разговаривать и писать persistent artifacts.
---

# Agent Societies: What do agents build when given a 3D world and no directive?

[К главному обзору](../README.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Команда Emergentic описывает 32 прогона в 3D мирах для четырёх моделей и групп 1–128 агентов; среды не задают проект или нужду выживания. Агенты могут строить, разговаривать и писать persistent artifacts.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Emergentic project team (corporate case study; named authors not shown in captured page)
- **Год:** 2026.
- **Площадка / статус:** Emergentic case study, updated 2026-10-25; Проектный отчёт/коммерческая веб-страница, не peer-reviewed paper.
- **Проверка содержания:** Проверены полный текст и существенные разделы метода/результатов.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Команда Emergentic описывает 32 прогона в 3D мирах для четырёх моделей и групп 1–128 агентов; среды не задают проект или нужду выживания. Агенты могут строить, разговаривать и писать persistent artifacts. Страница приводит наблюдения вроде самопроизвольной координации строительных проектов, но также признаёт ложные сообщения об изменённых объектах/несуществующих событиях.

## Дизайн исследования

Каждый world — пустой circular island диаметром 48 м; участники появляются сразу, получают одинаковую пространственную инструкцию и до четырёх часов могут перемещаться, осматривать, изменять scene graph, общаться и читать/редактировать письменные артефакты. Восемь размеров группы от 1 до 128 × четыре модели = 32 worlds. Модели на странице: DeepSeek V4.1 Flash, GLM 5.3 Flash, Kimi K3, Gemini 3 Flash Preview. Нет assigned project/external pressure; agents имеют случайные имена и обычные system/action instructions. Run заканчивается, если все ждут и нет активных действий. Сайт предоставляет supplementary timeline/logs и сообщает о сравнении разных LLM/population sizes.

## Техническая реализация

Эксперимент проводится на proprietary Emergentic 3D substrate. Все агенты имеют build/edit tools, scene graph, navigation, conversation and persistent shared notes; каждый standard system/action prompt остаётся поверх общего сценарного prompt, который опубликован прямо на case study. Указанная страница сообщает модели и численность, но полный API/prompt cost не виден в локальном фрагменте. Случайный name и отсутствие backstory не отменяют сценарную инструкцию и возможности мира.

## Промпты и инструкции

Сценарная инструкция прямо задаёт возможности (остров, сцена, ходьба, разговор, artifacts), запрет human participant и общее описание топологии острова; полный текст размещён в разделе “The setup”. Утверждение “no directive” значит отсутствие назначенного проекта, но не отсутствие prompt, action schemas и общих ограничений.

## Опубликованные расходы и вычисления

Нет опубликованных токенов, API bills или тарифа в видимом отчёте. Кейс коммерческой компании; перед цитированием себестоимости нужны supplementary/repo.

## Результаты

Страница описывает 16 Kimi agents, которые за 4 часа построили cabins, workshop и dock; малые группы координировали shelter/garden и делили работы; часть групп создавала charter/клуб и искала выход. Указан также отрицательный пример: GLM agent заявила, что изменила камень/небо, хотя изменение сначала не произошло; впоследствии признала «my done was ahead of truth». Это показывает необходимость журналировать действия, отделяя слова от фактического world state. Всего 32 runs, но в доступной странице нет систематической количественной метрики институциональной сложности.

## Выводы авторов

Платформенный кейс иллюстрирует, что открытые инструменты + общий артефакт могут порождать распределение задач и совместные проекты без назначенной цели. Авторский narrative case не доказывает общего спонтанного возникновения общества; важна коррекция к фактическому state.

## Ограничения и интерпретация

Нет независимого peer review, randomization detail и статистического вывода в самой странице. Сценарный prompt и инструменты сильно формируют affordances; reported examples выбраны авторами. Данные/логи supplement нужны для полной воспроизводимости и проверки 32-run summary.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://emergentic.ai/case-studies/agent-societies/supplement).
- [Updated 2026-10-25; sections The setup, What we found, model/population grid and prompt.](https://emergentic.ai/case-studies/agent-societies): 3D world, group sizes/models, common prompt, 32 runs and illustrative events/errors..
- [Supplementary experiment logs/timelines](https://emergentic.ai/case-studies/agent-societies/supplement): Run-level chronology/records; consult for verification beyond summary..
- [Локальный текст: fulltext.md](../materials/web-emergentic-ai-63e504ecce/fulltext.md).
- [Все уникальные исходные сведения](../materials/web-emergentic-ai-63e504ecce/input-notes.md).

## Связанные работы

- discusses: [web-emergentic-ai-79d757cbf7](web-emergentic-ai-79d757cbf7.md).
- discusses: [web-theaidigest-org-8ecf0b2d70](web-theaidigest-org-8ecf0b2d70.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 1099.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_independent.md`, строка 29.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 55.
