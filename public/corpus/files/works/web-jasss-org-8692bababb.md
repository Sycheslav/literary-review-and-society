---
id: web-jasss-org-8692bababb
type: work
title: '[In]Credible Models – Verification, Validation & Accreditation of Agent-Based Models to Support Policy-Making'
authors:
- Michael Belfrage
- Emil Johansson
- Fabian Lorig
- Paul Davidsson
year: 2024
source_kind: research
venue: Journal of Artificial Societies and Social Simulation 27(4) 4; DOI 10.18564/jasss.5505
publication_status: Рецензируемая журнальная статья, опубликована 31 октября 2024.
topics:
- methodology
language: en
identifiers:
- web-jasss-org-8692bababb
source_urls:
- https://www.jasss.org/27/4/4.html
verification_status: fulltext_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-jasss-org-8692bababb/fulltext.md
- materials/web-jasss-org-8692bababb/input-notes.md
related: []
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
summary_short: 'Статья анализирует credibility агентных моделей для поддержки государственной политики: определяет
  ее как уверенность в инференциальной способности модели, рассматривает verification, validation and accreditation
  (VV&A), предлагает план V&V и framework аккредитации.'
---

# [In]Credible Models – Verification, Validation & Accreditation of Agent-Based Models to Support Policy-Making

[К главному обзору](../README.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md)

## Коротко

> Статья анализирует credibility агентных моделей для поддержки государственной политики: определяет ее как уверенность в инференциальной способности модели, рассматривает verification, validation and accreditation (VV&A), предлагает план V&V и framework аккредитации.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Michael Belfrage; Emil Johansson; Fabian Lorig; Paul Davidsson
- **Год:** 2024.
- **Площадка / статус:** Journal of Artificial Societies and Social Simulation 27(4) 4; DOI 10.18564/jasss.5505; Рецензируемая журнальная статья, опубликована 31 октября 2024..
- **Проверка содержания:** Проверены полный текст и существенные разделы метода/результатов.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Статья анализирует credibility агентных моделей для поддержки государственной политики: определяет ее как уверенность в инференциальной способности модели, рассматривает verification, validation and accreditation (VV&A), предлагает план V&V и framework аккредитации. Это методологический синтез, не эксперимент с LLM-агентами.

## Дизайн исследования

Авторы синтезируют литературу по agent-based modeling, simulation и policy-making и показывают, что техническая проверка реализации, соответствие целевой системе и институциональная готовность к использованию — разные вопросы. Модель может быть правильна по коду и всё же не соответствовать target system; может быть ошибочно признана credible и повлиять на политику (type-II/user risk), или быть ошибочно отвергнута (type-I/builder risk). Статья разбирает определения credibility и ее смешение с trust, предлагает план V&V на этапе моделирования и вдохновленную практическим кейсом схему accreditation перед применением и после него. Работа концептуальная/обзорная, не benchmark с контрольной группой.

## Техническая реализация

В Sections о V&V plan и framework авторы предлагают документировать цель/область применимости модели, проверять реализацию, валидировать по отношению к целевой системе и неопределенности, затем отдельно аккредитовать пригодность модели для конкретного policy use и проводить post-application evaluation. Аккредитация зависит от назначения и институционального контекста; схема не сводится к одной универсальной метрике. LLM и API не использованы.

## Промпты и инструкции

Не применимо — LLM prompts отсутствуют.

## Опубликованные расходы и вычисления

Не применимо: нет вызовов LLM.

## Результаты

Авторы сообщают по предыдущим обзорам серьезные недостатки практик V&V и документации ABM, а также отсутствие установленных accreditation procedures во многих государственных администрациях. Их результат — определение credibility и структурированное предложение VV&A, не эмпирически измеренный прирост точности. Локаторы: Abstract, разделы о model credibility, V&V plan, accreditation.

## Выводы авторов

Применение ABM к policy требует конкретной и прозрачной оценки границ, evidence и ответственности, включая постфактум проверку. Для LLM-социальных симуляций это означает не считать правдоподобный диалог достаточной валидацией модели.

## Ограничения и интерпретация

Framework — предложение на основе литературы и кейсов, не универсальный валидированный стандарт. Credibility зависит от target use и заинтересованных сторон. Перенос на LLM требует отдельного учета модели, prompts, sampling и среды.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://www.jasss.org/27/4/4.html).
- [Abstract, sections on credibility, V&V plans and accreditation, conclusion](https://www.jasss.org/27/4/4.html): Определения, обзор проблем и предлагаемая VV&A схема..
- [Локальный текст: fulltext.md](../materials/web-jasss-org-8692bababb/fulltext.md).
- [Все уникальные исходные сведения](../materials/web-jasss-org-8692bababb/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Методология, валидация и сравнение с людьми](../topics/methodology.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 53.
## Подробное изложение на русском

[Открыть изложение](../materials/web-jasss-org-8692bababb/summary.ru.md)
