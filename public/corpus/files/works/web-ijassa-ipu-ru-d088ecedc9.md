---
id: web-ijassa-ipu-ru-d088ecedc9
type: work
title: 'Mathematical Models of Informational and Strategic Reflexion: a Survey'
authors:
- Dmitry A. Novikov
- Alexander G. Chkhartishvili
year: 2014
source_kind: review
venue: Advances in Systems Science and Applications 14(3), pp. 254–278
publication_status: Рецензируемый обзор / теоретический материал.
topics:
- methodology
language: en
identifiers:
- web-ijassa-ipu-ru-d088ecedc9
source_urls:
- https://ijassa.ipu.ru/index.php/ijassa/article/view/401
verification_status: fulltext_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-ijassa-ipu-ru-d088ecedc9/fulltext.md
- materials/web-ijassa-ipu-ru-d088ecedc9/input-notes.md
related:
- relation: discusses
  target: web-ipu-ru-21db9441f8
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
summary_short: Русскоязычная/англоязычная по публикации обзорная статья систематизирует математические модели информационной
  и стратегической рефлексии в game theory and collective behavior.
---

# Mathematical Models of Informational and Strategic Reflexion: a Survey

[К главному обзору](../README.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md)

## Коротко

> Русскоязычная/англоязычная по публикации обзорная статья систематизирует математические модели информационной и стратегической рефлексии в game theory and collective behavior.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Dmitry A. Novikov; Alexander G. Chkhartishvili
- **Год:** 2014.
- **Площадка / статус:** Advances in Systems Science and Applications 14(3), pp. 254–278; Рецензируемый обзор / теоретический материал..
- **Проверка содержания:** Проверены полный текст и существенные разделы метода/результатов.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Русскоязычная/англоязычная по публикации обзорная статья систематизирует математические модели информационной и стратегической рефлексии в game theory and collective behavior. Она различает представления субъектов о реальности и иерархии представлений о знаниях/убеждениях других. Это теоретическая опора для анализа agent communication, не эмпирическое исследование LLM.

## Дизайн исследования

Статья обзорная, новых агентных запусков или экспериментальных групп нет. На страницах 1–4 вводится рефлексия как образ реальности у субъекта и потенциально бесконечное образование новых убеждений. Различаются self-reflection (субъект строит beliefs about own beliefs) и strategic/informational reflection (beliefs about other agents’ beliefs). Game theory формализует множество agents, preferences/payoffs, feasible actions and awareness; для стратегических решений важны иерархии убеждений, common knowledge и уровень информированности. Далее статья сопоставляет подходы к рефлексивным играм, control and collective behavior models.

## Техническая реализация

Математический обзор и формальные схемы; LLMs, prompts, runtime software, API calls, memory systems отсутствуют. В проектном корпусе важно использовать эти понятия для различения (а) агент считает другой сигнал достоверным, (б) агент моделирует ожидания другого, (в) общая информация/common knowledge.

## Промпты и инструкции

Не относится к prompt engineering; термин reflexion в статье математический/game-theoretic, не внутренний chain-of-thought или reflection prompting.

## Опубликованные расходы и вычисления

Нет вычислительных или API затрат.

## Результаты

Новых численных results нет: вклад — типология и теоретическая постановка informational/strategic reflexion. Стр. 4 вводит ingredients of game-theoretic model: agents, preferences, feasible actions and awareness; страницы 4–5 описывают belief hierarchies/common knowledge. Эти определения помогают не смешивать agent self-report о намерениях с действительной общей информированностью или рациональной рефлексией.

## Выводы авторов

Авторский обзор подчёркивает, что игровая модель зависит от того, какие параметры известны агентам и какие beliefs они строят о других. Для институциональных экспериментов с агентами это позволяет анализировать knowledge conditions и strategic expectations.

## Ограничения и интерпретация

Классические математические модели не описывают напрямую языковое взаимодействие современных LLM. Обзор 2014 года не учитывает generative agents, prompts, sampling and tool access; концептуальный перенос требует новой операционализации.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://ijassa.ipu.ru/index.php/ijassa/article/view/401).
- [pp. 254–278; §1 Reflexion and pages 3–5 game theory/information hierarchy.](https://ijassa.ipu.ru/index.php/ijassa/article/download/401/339): Definitions of reflexion, self/strategic levels, game ingredients and knowledge hierarchy..
- [Journal article record](https://ijassa.ipu.ru/index.php/ijassa/article/view/401): Bibliographic identity..
- [Локальный текст: fulltext.md](../materials/web-ijassa-ipu-ru-d088ecedc9/fulltext.md).
- [Все уникальные исходные сведения](../materials/web-ijassa-ipu-ru-d088ecedc9/input-notes.md).

## Связанные работы

- discusses: [web-ipu-ru-21db9441f8](web-ipu-ru-21db9441f8.md).

## Происхождение записи

- `Социумы ИИ-агентов программа исследований Лаб. 57 ИПУ РАН × «Верхум».md`, строка 24.
- `Социумы ИИ-агентов программа исследований Лаб. 57 ИПУ РАН × «Верхум».md`, строка 413.

## Подробное изложение на русском

[Открыть изложение](../materials/web-ijassa-ipu-ru-d088ecedc9/summary.ru.md)