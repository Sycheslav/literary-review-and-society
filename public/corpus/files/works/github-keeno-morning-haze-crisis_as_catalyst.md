---
id: github-keeno-morning-haze-crisis_as_catalyst
type: work
title: 'Crisis as Catalyst: code repository for crisis cooperation and ethical-consistency scenarios'
authors:
- Keeno Morning Haze repository contributors
year: 2026
source_kind: project
venue: GitHub experiment code, data and outputs; linked to Humanities and Social Sciences Communications DOI 10.1057/s41599-026-07194-z
publication_status: Официальный репозиторий к журнальной статье/эксперименту; README сам по себе не является статьей.
topics:
- platforms
- resources
- communities
language: en
identifiers:
- github-keeno-morning-haze-crisis_as_catalyst
source_urls:
- https://github.com/keeno-morning-haze/Crisis_as_Catalyst
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-keeno-morning-haze-crisis_as_catalyst/readme-source.md
- materials/github-keeno-morning-haze-crisis_as_catalyst/input-notes.md
related:
- relation: discusses
  target: doi-10-1057-s41599-026-07194-z
- relation: discusses
  target: doi-10-6084-m9-figshare-29722715
- relation: discusses
  target: web-theaidigest-org-8ecf0b2d70
summary_short: 'Код и экспериментальные данные к статье Crisis as Catalyst: сценарии распределения юнитов при кризисе
  и варианты trolley problem, плюс анализ и визуализация.'
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# Crisis as Catalyst: code repository for crisis cooperation and ethical-consistency scenarios

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Общие и распределённые ресурсы](../topics/resources.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Код и экспериментальные данные к статье Crisis as Catalyst: сценарии распределения юнитов при кризисе и варианты trolley problem, плюс анализ и визуализация.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Keeno Morning Haze repository contributors
- **Год:** 2026.
- **Площадка / статус:** GitHub experiment code, data and outputs; linked to Humanities and Social Sciences Communications DOI 10.1057/s41599-026-07194-z; Официальный репозиторий к журнальной статье/эксперименту; README сам по себе не является статьей..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Репозиторий содержит код и данные для двух парадигм — назначения юнитов и trolley-problem вариантов — с целью оценить кооперативное намерение, распределение ресурсов и согласованность моральных решений LLM в кризисных ситуациях. README перечисляет модули, массивы результатов и конфигурации API. Научные эффекты нужно брать из опубликованной статьи, а не из краткого README.

## Дизайн исследования

README описывает две экспериментальные задачи: Unit Assignment для межорганизационной кооперации и распределения ресурсов при кризисе, и Trolley Problem для согласованности моральных выборов. Репозиторий делит исходные данные, результаты и скрипты на assignunit/trolley модули; есть основной и упрощённый режим назначения единиц и отдельные анализаторы. README не сообщает полный size/sample/число повторов в видимом описании, поэтому эти параметры следует брать из статьи. Направление исследования — поведенческая последовательность и сравнительный анализ LLM, не длительный социум.

## Техническая реализация

Требуются Python 3.8+ и API-ключи минимум одного провайдера. В `api.py` настроены провайдеры SiliconFlow, DeepInfra, Azure OpenAI, Google (README); зависимости включают openai, langchain, dotenv, matplotlib, pandas, numpy, seaborn. Есть исходные данные, таблицы и визуализации. README предоставляет запуск/переменные среды, но не закрепляет модели/версии в самой краткой части.

## Промпты и инструкции

README не публикует полные runtime prompts; их надо искать в исходных скриптах. Отдельно фиксировать формулировки критических кризисных сценариев, поскольку они определяют, какие группы взаимодействуют, и моральных trolley вариантов, поскольку они составляют treatment.

## Опубликованные расходы и вычисления

В README нет проверяемого total API cost/token count; стоимость зависит от API-версий и числа запусков. Зависимость проекта от нескольких провайдеров не дает права пересчитывать сумму без usage data.

## Результаты

README содержит структуру data/results/visualization, но не приводит численные находки. Для результатов использовать основной журнальный текст/таблицы; карточка не заимствует цифры из пересказа.

## Выводы авторов

Репозиторий является программно-данным артефактом к исследованию кризисного распределения и моральных дилемм, позволяя проверить реализацию анализов. Само наличие code/data не подтверждает социальную кооперацию или моральные предпочтения моделей.

## Ограничения и интерпретация

README прямо не раскрывает полную experimental design и численные таблицы; версия данных/модельных endpoint может изменяться. Только наличие API runner не равно воспроизводимости модели, а prompts могут повлиять на ответы.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/keeno-morning-haze/Crisis_as_Catalyst).
- [Official README: abstract, project structure, installation and usage](https://github.com/keeno-morning-haze/Crisis_as_Catalyst): Назначение двух парадигм, код и провайдеры..
- [Associated publisher DOI](https://doi.org/10.1057/s41599-026-07194-z): Связь с журнальной статьей..
- [Локальный текст: readme-source.md](../materials/github-keeno-morning-haze-crisis_as_catalyst/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-keeno-morning-haze-crisis_as_catalyst/input-notes.md).

## Связанные работы

- discusses: [doi-10-1057-s41599-026-07194-z](doi-10-1057-s41599-026-07194-z.md).
- discusses: [doi-10-6084-m9-figshare-29722715](doi-10-6084-m9-figshare-29722715.md).
- discusses: [web-theaidigest-org-8ecf0b2d70](web-theaidigest-org-8ecf0b2d70.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 1045.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_health.md`, строка 43.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 78.
