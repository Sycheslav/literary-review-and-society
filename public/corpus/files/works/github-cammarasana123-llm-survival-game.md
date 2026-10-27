---
id: github-cammarasana123-llm-survival-game
type: work
title: LLM Survival Game (открытый код и логи трёхагентной игры)
authors:
- Репозиторий cammarasana123
year: 2026
source_kind: project
venue: GitHub code, logs and analysis tables
publication_status: Открытый экспериментальный артефакт; README не устанавливает peer-reviewed статус отдельной
  статьи.
topics:
- platforms
- institutions
language: ru
identifiers:
- github-cammarasana123-llm-survival-game
source_urls:
- https://github.com/cammarasana123/LLM-Survival-Game
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-cammarasana123-llm-survival-game/readme-source.md
- materials/github-cammarasana123-llm-survival-game/input-notes.md
related:
- relation: discusses
  target: doi-10-1109-tg-2026-3721624
- relation: discusses
  target: web-researchgate-net-ef185549e4
summary_short: 'В открытой трёхагентной survival-игре опубликованы 80 запусков: состав моделей и память варьируются,
  журналы сохраняют приватные сообщения и commitments.'
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# LLM Survival Game (открытый код и логи трёхагентной игры)

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Нормы, институты, санкции и управление](../topics/institutions.md)

## Коротко

> В открытой трёхагентной survival-игре опубликованы 80 запусков: состав моделей и память варьируются, журналы сохраняют приватные сообщения и commitments.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Репозиторий cammarasana123
- **Год:** 2026.
- **Площадка / статус:** GitHub code, logs and analysis tables; Открытый экспериментальный артефакт; README не устанавливает peer-reviewed статус отдельной статьи..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Проект публикует код, interaction logs и таблицы анализа для игры на выживание/социальную дедукцию: три агента конкурируют за ограниченные ресурсы, но выжить могут двое. В 80 запусках варьируются гомогенность/гетерогенность моделей и цепочечная память. Агенты обмениваются приватными сообщениями и обновляют структурированное состояние commitments.

## Дизайн исследования

Каждый запуск включает трех агентов в условиях дефицита ресурса, где выжить могут только два; участники обмениваются приватными текстовыми сообщениями, обновляют ordinal relational state и могут заключить коалицию для исключения третьего. Дизайн 2×2 скрещивает однородный/гетерогенный состав моделей с отсутствием памяти/chain memory; по 20 запусков в каждом условии. Аккаунты отображаются нейтрально как Agent A/B/C; в смешанном условии соответствие backend и видимого имени рандомизируется. Запуск завершается, когда два агента сообщают как минимум explicit_commitment к одной цели исключения. Репозиторий предоставляет 80-run датасет, логи по ходам и события commitment.

## Техническая реализация

Main runner `code/run_experiment.py`, анализ/графики `code/make_figures.py`; CSV включают summaries, turn records, message events, commitment events, token usage и validation warnings. Есть десять batches с конфигами, завершением и таблицами анализа; публичные json/jsonl логи. Поддерживаются mock run без API и реальные вызовы к Groq/Cerebras (README требует ключи в env, плюс модели/условия могут использовать другие backend из configs). Отдельная роль moderator обслуживает chain-memory runs, пишет summaries в memory; нейтральные подписи скрывают модели.

## Промпты и инструкции

По README prompts и валидированные обновления состояния, сообщения, исходы, fallback/parse и usage токенов находятся в открытых логах; moderator input/output представлены отдельно. Видимые модели скрыты во время игры; ordinal commitment — самоотчет протокола, а не прямое наблюдение внутреннего намерения. Для точных prompts и моделей смотреть per-batch experiment_config и логи, а не только README.

## Опубликованные расходы и вычисления

В README заявлено наличие token_usage.csv; конкретная общая цена здесь не пересчитывается. MOCK-запуск использует no API; деньги из игрового ресурса не смешиваются с API затратами. Доступный README не приводит унифицированный счет.

## Результаты

README сообщает размер корпуса (80 запусков), 20 на каждое из четырех условий и наличие аггрегированных таблиц/трасс. Полные численные результаты нужно брать из CSV и analysis tables; README не сообщает сводный эффект памяти/гетерогенности, поэтому не приписываю победившее условие. Запуски используют разные backend/configs и провайдеры предупреждают о недетерминизме; точная реплика не гарантирована.

## Выводы авторов

Репозиторий — полезный открытый источник для наблюдения коалиций, обещаний, исключения и влияния памяти в конкретной ограниченной игре. Данные дают проверяемые traces, но сами по себе не свидетельствуют о реальной дружбе или длительном обществе.

## Ограничения и интерпретация

Роли, scarcity, правило двух выживших, скрытость backend и порог завершения заданы; commitments структурированы как самоотчет. 20 запусков на клетку — ограниченное число, а провайдеры меняют модели. Люди отсутствуют; результат зависит от prompt/сценария.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/cammarasana123/LLM-Survival-Game).
- [Official README: protocol summary, 2×2 design, data contents, reproducibility and running](https://github.com/cammarasana123/LLM-Survival-Game): Состав игры, 80 runs, условия памяти/моделей и открытые журналы..
- [Локальный текст: readme-source.md](../materials/github-cammarasana123-llm-survival-game/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-cammarasana123-llm-survival-game/input-notes.md).

## Связанные работы

- discusses: [doi-10-1109-tg-2026-3721624](doi-10-1109-tg-2026-3721624.md).
- discusses: [web-researchgate-net-ef185549e4](web-researchgate-net-ef185549e4.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 469.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_governance.md`, строка 75.
