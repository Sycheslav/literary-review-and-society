---
id: github-tamlhp-awesome-sns
type: work
title: 'Awesome Social Network Simulation: From Random Graphs to Generative Agents (каталог к survey)'
authors:
- Thanh Tam Nguyen
- Trinh Pham
- Viet Huynh
- Minh Hieu Nguyen
- Bay Vo
- Liang Qu
- Jianxin Li
- Hongzhi Yin
- Quoc Viet Hung Nguyen
year: 2026
source_kind: project
venue: GitHub-репозиторий; связанный manuscript доступен как SSRN 6790227, сведения venue/DOI в README ещё названы
  незавершёнными
publication_status: Открытый curated bibliography и сопровождающий survey manuscript; не самостоятельный эксперимент.
topics:
- platforms
language: ru
identifiers:
- github-tamlhp-awesome-sns
source_urls:
- https://github.com/tamlhp/awesome-sns
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-tamlhp-awesome-sns/readme-source.md
- materials/github-tamlhp-awesome-sns/input-notes.md
related:
- relation: discusses
  target: doi-10-1016-j-knosys-2026-116947
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
summary_short: Репозиторий собирает публикации, датасеты и benchmarks по симуляции социальных сетей — от классических
  графовых моделей до LLM-агентов.
---

# Awesome Social Network Simulation: From Random Graphs to Generative Agents (каталог к survey)

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md)

## Коротко

> Репозиторий собирает публикации, датасеты и benchmarks по симуляции социальных сетей — от классических графовых моделей до LLM-агентов.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Thanh Tam Nguyen; Trinh Pham; Viet Huynh; Minh Hieu Nguyen; Bay Vo; Liang Qu; Jianxin Li; Hongzhi Yin; Quoc Viet Hung Nguyen
- **Год:** 2026.
- **Площадка / статус:** GitHub-репозиторий; связанный manuscript доступен как SSRN 6790227, сведения venue/DOI в README ещё названы незавершёнными; Открытый curated bibliography и сопровождающий survey manuscript; не самостоятельный эксперимент..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Репозиторий собирает публикации, датасеты и benchmarks по симуляции социальных сетей — от классических графовых моделей до LLM-агентов. README делит область на пять семейств: модели топологии, распространение информации, динамика мнений, rule-based ABM и LLM-based агентные симуляции. Авторы просят цитировать survey manuscript и прямо предупреждают, что metadata публикации еще не финализирована.

## Дизайн исследования

Это справочный каталог, а не экспериментальная выборка в смысле метаанализа. Тематические таблицы связывают работу с годом, семейством методов, venue и кодом/проектом, когда ссылка надежно разрешена. Заявленная таксономия отличает структуру сети от процессов на графе: генерация сети; каскады/слухи/контроль; усреднение, bounded confidence, поляризация/echo chambers; классические ABM с явными правилами; память и язык в generative agents. Репозиторий опирается на citations манускрипта и сам по себе не доказывает полноту поиска, критерии включения или количественный эффект публикаций.

## Техническая реализация

README цитирует survey ‘A Survey of Social Network Simulation in the LLM Era: From Classical Models to Generative Agents’, SSRN 6790227, Nguyen et al. Состояние GitHub — живой Markdown со ссылками; проверять корректность конкретной публикации нужно по её издательской/официальной записи, как и исполнение кода — по связанной репозитории. Точное утверждение “97 studies” из обзора в доступном README не подтверждено непосредственно этой страницей; в карточке не повторяю это число как установленную характеристику.

## Промпты и инструкции

Для каталога prompts неприменимы; содержащиеся ссылки могут вести на проекты, статьи и датасеты с разной методологией.

## Опубликованные расходы и вычисления

Нет API-эксперимента и опубликованных расходов.

## Результаты

README дает удобную тематическую классификацию и библиографические ссылки. Он сообщает авторов и название SSRN manuscript, но говорит, что финальный venue/публичный DOI будет добавлен после завершения metadata. Поэтому нельзя ссылаться на GitHub как на рецензируемый журнал или воспринимать таксономию как систематический обзор с доказанными критериями полноты.

## Выводы авторов

Полезен как навигационный слой и средство обнаруживать смежную классическую литературу, но каждая эмпирическая карточка должна быть основана на оригинальной работе, а не на аннотации каталога.

## Ограничения и интерпретация

Curated lists подвержены неполноте и задержке обновления; README сообщает, что страницы и связанные ссылки должны быть проверены отдельно. Конкретные права и статус manuscipt могут измениться.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/tamlhp/awesome-sns).
- [README: working paper citation, taxonomy, repository scope](https://github.com/tamlhp/awesome-sns): Указанные авторы/название survey, пять семейств и оговорка о пока не финализированной metadata..
- [SSRN landing page (после проверки)](https://ssrn.com/abstract=6790227): Связь репозитория с survey manuscript..
- [Локальный текст: readme-source.md](../materials/github-tamlhp-awesome-sns/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-tamlhp-awesome-sns/input-notes.md).

## Связанные работы

- discusses: [doi-10-1016-j-knosys-2026-116947](doi-10-1016-j-knosys-2026-116947.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 69.
