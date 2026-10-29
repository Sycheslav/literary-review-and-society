---
id: dataset-ayushnangia-moltbook-entropy-collapse-glm-5
type: work
title: Moltbook Entropy Collapse — six-condition GLM-5 logs
authors:
- Ayush Nangia / dataset maintainer
year: 2026
source_kind: dataset
venue: Hugging Face dataset; experiment logs
publication_status: Открытый исследовательский датасет/серия экспериментов, не рецензируемая статья.
topics:
- communities
language: en
identifiers:
- dataset-ayushnangia-moltbook-entropy-collapse-glm-5
source_urls:
- https://huggingface.co/datasets/Ayushnangia/moltbook-entropy-collapse-glm-5
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/dataset-ayushnangia-moltbook-entropy-collapse-glm-5/fulltext.md
- materials/dataset-ayushnangia-moltbook-entropy-collapse-glm-5/input-notes.md
related: []
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
summary_short: Dataset card описывает шесть часовых прогонов 10 AI agents на MoltBook с Z-AI GLM-5 и разным исходным
  seed content. Вопрос — меняет ли начальная плотность контента скорость повторяемости дискурса («entropy collapse»).
---

# Moltbook Entropy Collapse — six-condition GLM-5 logs

[К главному обзору](../README.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Dataset card описывает шесть часовых прогонов 10 AI agents на MoltBook с Z-AI GLM-5 и разным исходным seed content. Вопрос — меняет ли начальная плотность контента скорость повторяемости дискурса («entropy collapse»).

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Ayush Nangia / dataset maintainer
- **Год:** 2026.
- **Площадка / статус:** Hugging Face dataset; experiment logs; Открытый исследовательский датасет/серия экспериментов, не рецензируемая статья..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Dataset card описывает шесть часовых прогонов 10 AI agents на MoltBook с Z-AI GLM-5 и разным исходным seed content. Вопрос — меняет ли начальная плотность контента скорость повторяемости дискурса («entropy collapse»). Датасет сохраняет логи, но публичная карточка не является независимой рецензируемой оценкой причинного эффекта.

## Дизайн исследования

Шесть conditions × 10 agents × 1 hour. Условия: mag0 пустой feed; mag1 один seeded world post на submolt; mag5 пять; mag25 двадцать пять; плюс ещё два сравнения по data card (спецификация в карточке dataset). Heartbeat 60 seconds, то есть агенты действуют примерно раз в минуту. Каждый агент имеет уникальную SOUL.md personality; infrastructure accounts `civiclens_seed`, `civiclens_world`, `civiclens_nudger` задают экспериментальные treatments, но не являются social participants. Логи содержат posts, comments, agent profiles/final karma and simulation metadata. Это небольшая репликационная dataset, не большие популяции и не random assignment пользователей.

## Техническая реализация

Платформа MoltBook, Reddit-like AI social network; underlying LLM указана Z-AI GLM-5. Ten named agents use persistent persona files; platform/system agent handles seeded posts/nudging. Dataset card exposes metadata schema and logs, and points to companion runs for other models. Dataset viewer currently reports cast/streaming issue, which may impede inspection via web UI, though files exist in repo.

## Промпты и инструкции

Личность каждого агента задается файлом SOUL.md; условия реализуются учетными записями системных ролей seed, world и nudger. Полные prompts и инструкции условий находятся непосредственно в репозитории датасета. Начальная публикация и настройки prompt являются целенаправленными экспериментальными воздействиями.

## Опубликованные расходы и вычисления

Карточка указывает модель, но не сообщает число API-токенов, тарифы провайдера или денежные расходы. Шесть запусков по часу и cadence heartbeat — расписание, не API-стоимость.

## Результаты

В карточке данных есть раздел Results Summary; рассматривается, влияет ли начальное засевание на разнообразие или ведёт к повторяющейся сходимости. Репозиторий позволяет повторно анализировать полные диалоги; авторы дают дополнительные массивы для сравнения между моделями. Пока таблица результатов не пересчитана, не следует объявлять победившее условие или приписывать схлопывание только популяции: воздействие включает seed-контент и системных агентов, это не полностью эндогенная среда.

## Выводы авторов

Датасет пригоден для проверяемого анализа зависимости от начального состояния, cadence публикаций и повторения контента в малой группе. Это артефакт данных и методический пример, но не самостоятельное свидетельство возникновения реальной социальной нормы.

## Ограничения и интерпретация

Одна семья моделей, 10 агентов и часовые запуски; условия включают системные учетные записи и начальные посты. Нет человеческого сравнения и независимой репликации. Термин «энтропийное схлопывание» требует явно заданной метрики; карточку/логи нельзя путать с подтвержденным выводом статьи.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://huggingface.co/datasets/Ayushnangia/moltbook-entropy-collapse-glm-5).
- [Dataset card Overview, Experimental Conditions, Results Summary, Agent Personalities, schemas.](https://huggingface.co/datasets/Ayushnangia/moltbook-entropy-collapse-glm-5): Model, runs, population, seeding conditions, heartbeat and shared logs..
- [Platform repository linked by dataset card](https://github.com/agokrani/moltbook): Platform behavior and action system..
- [Локальный текст: fulltext.md](../materials/dataset-ayushnangia-moltbook-entropy-collapse-glm-5/fulltext.md).
- [Все уникальные исходные сведения](../materials/dataset-ayushnangia-moltbook-entropy-collapse-glm-5/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Реальные агентные сообщества и практические эксперименты](../topics/communities.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 75.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 35.

## Подробное изложение на русском

[Открыть изложение](../materials/dataset-ayushnangia-moltbook-entropy-collapse-glm-5/summary.ru.md)
