---
id: github-mind-games-challenge-mindgames-starter-kit
type: work
title: Mind Games Challenge starter kit (offline multi-agent game evaluation)
authors:
- Mind Games Challenge organizers
year: 2026
source_kind: project
venue: GitHub code starter kit for Mind Games Challenge
publication_status: 'Competition software and reference agent pack; not a separate research paper. Online competition
  status in README: closed at time of captured version.'
topics:
- games
- platforms
language: en
identifiers:
- github-mind-games-challenge-mindgames-starter-kit
source_urls:
- https://github.com/mind-games-challenge/mindgames-starter-kit
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-mind-games-challenge-mindgames-starter-kit/readme-source.md
- materials/github-mind-games-challenge-mindgames-starter-kit/input-notes.md
related:
- relation: discusses
  target: arxiv-2605-29512
- relation: discusses
  target: dataset-mindgameschallenge-mgc2025
summary_short: Офлайн-набор Mind Games для тестирования стратегий в Secret Mafia, Codenames, Colonel Blotto и трехсторонней
  повторной дилемме; включает референсных участников.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# Mind Games Challenge starter kit (offline multi-agent game evaluation)

[К главному обзору](../README.md) · [Игровые общества и длительные взаимодействия](../topics/games.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md)

## Коротко

> Офлайн-набор Mind Games для тестирования стратегий в Secret Mafia, Codenames, Colonel Blotto и трехсторонней повторной дилемме; включает референсных участников.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Mind Games Challenge organizers
- **Год:** 2026.
- **Площадка / статус:** GitHub code starter kit for Mind Games Challenge; Competition software and reference agent pack; not a separate research paper. Online competition status in README: closed at time of captured version..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Starter kit позволяет запускать и сравнивать игровые агенты офлайн в Secret Mafia, Codenames, Colonel Blotto и Three-Player Iterated Prisoner’s Dilemma. README публикует reference submissions и TrueSkill с соревнования Stage II; веса выдаются отдельно. Это инфраструктура тестирования состязательных/кооперативных стратегий, не модель свободно возникающего общества.

## Дизайн исследования

Репозиторий предлагает два трека: Social Detection в SecretMafia-v0 для выявления обмана/манипуляции и Generalization в Codenames-v0, ColonelBlotto-v0 и ThreePlayerIPD-v0 для переносимости между играми. Можно вручную играть, запускать два агента друг против друга и собирать game-state/action data для supervised fine-tuning или RL. README говорит, что online competition временно закрыта, при этом offline workflow открыт. Референсные агенты — сильнейшие подачи турнира, их рейтинги TrueSkill относятся к Stage II Efficient division и опубликованному competition report; локальный запуск не равен прямому независимому воспроизведению рейтинга.

## Техническая реализация

Пример использует textarena>=0.7.2, HumanAgent или OpenRouterAgent (пример google/gemini-2.0-flash-lite-001); игровые состояния передаются в `__call__`, агент выдает текстовое действие. Субмодули под submissions нужно инициализировать отдельно; model weights не vendored, есть HF ссылки/инструкции для скачивания. README приводит результаты некоторых референсных подач, например Qwen3-8B / fine-tuning и Ollama.

## Промпты и инструкции

Starter kit дает базовый шаблон агента, action interface и observation; роли и strategy code реализуют участники. Нет единого prompt для всех submissions; разные победители используют код/обучение/модели.

## Опубликованные расходы и вычисления

Репозиторий не публикует общую API-смету; локальные модели требуют GPU, hosted API — счет провайдера. $500 Modal GPU credits в README — предложение облачной инфраструктуры, не экспериментальная стоимость.

## Результаты

README сообщает TrueSkill участников для Stage II: лидеры Generalization Track — 34,2; 26,8; 25,8, а лидеры Social Detection Track — 27,2±2,8; 23,8±2,8; 18,4±2,9. Эти турнирные оценки не доказывают причинный эффект конкретного prompt или свойства социального поведения вне игр. В README offline benchmark scripts помечены как дорожная карта; не все ожидаемые evaluation scripts доступны.

## Выводы авторов

Starter kit полезен как воспроизводимый интерфейс для соревнования и анализа стратегий в играх с неполной информацией и манипуляцией. Это game-playing benchmark, а не тест дружбы/норм.

## Ограничения и интерпретация

Турнирный самоотбор, специфическая reward-структура, model submissions с разной обученной историей и зависимость от сторонних checkpoints. Конкурс закрыт на момент README; скачивание моделей требует отдельных репозиториев/весов.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/mind-games-challenge/mindgames-starter-kit).
- [Official README: competition status, offline workflow, tracks, scores and reference submissions](https://github.com/mind-games-challenge/mindgames-starter-kit): Сценарии, offline запуск, доступные модели и объявленные TrueSkill..
- [Локальный текст: readme-source.md](../materials/github-mind-games-challenge-mindgames-starter-kit/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-mind-games-challenge-mindgames-starter-kit/input-notes.md).

## Связанные работы

- discusses: [arxiv-2605-29512](arxiv-2605-29512.md).
- discusses: [dataset-mindgameschallenge-mgc2025](dataset-mindgameschallenge-mgc2025.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 842.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_games.md`, строка 61.
