---
id: dataset-yuxuanli1225-uncooperativereasoning
type: work
title: UncooperativeReasoning (Hugging Face dataset artifact)
authors:
- Yuxuan Li et al. (dataset publisher YuxuanLi1225)
year: null
source_kind: dataset
venue: Hugging Face Datasets
publication_status: Открытый датасет; связь с отдельной научной статьей и авторским протоколом не установлена по
  доступной карточке.
topics:
- communities
language: en
identifiers:
- dataset-yuxuanli1225-uncooperativereasoning
source_urls:
- https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning
verification_status: unresolved
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/dataset-yuxuanli1225-uncooperativereasoning/fulltext.md
- materials/dataset-yuxuanli1225-uncooperativereasoning/input-notes.md
related:
- relation: discusses
  target: acl-2025.emnlp-main.267
- relation: discusses
  target: web-theaidigest-org-8ecf0b2d70
summary_short: Открытый набор ответов LLM на социальные игры; на странице Hugging Face viewer сообщается о schema
  cast error между файлами, поэтому полный просмотр сейчас не работает.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# UncooperativeReasoning (Hugging Face dataset artifact)

[К главному обзору](../README.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> Открытый набор ответов LLM на социальные игры; на странице Hugging Face viewer сообщается о schema cast error между файлами, поэтому полный просмотр сейчас не работает.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Yuxuan Li et al. (dataset publisher YuxuanLi1225)
- **Год:** не установлен.
- **Площадка / статус:** Hugging Face Datasets; Открытый датасет; связь с отдельной научной статьей и авторским протоколом не установлена по доступной карточке..
- **Проверка содержания:** Первоисточник не удалось независимо подтвердить.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Hugging Face публикует набор ответов LLM на диктаторскую игру и другие сценарии, включая модель, игру, response и время. Dataset viewer при проверке не смог построить split: файлы имеют несовместимые схемы, один JSON воспринимается как 14 именованных столбцов вместо полей model/game/response/time. Это открытый data artifact с технически неисправным объединением, не самостоятельная статья.

## Дизайн исследования

Доступная карточка/preview демонстрирует строковые записи типа model/game/response/time, например ответы Claude в dictator_game о передаче части 100 очков партнеру. Однако Hugging Face viewer сообщает ошибку DatasetGenerationCastError: файлы в train имеют несовместимые столбцы. Файл `data/OpenAI/cot.json` (revision c014aa20fc1c6c3fc7f5cfc44d0dcd5585df4917) разбирается как объекты с ключами `2`–`15` вместо ожидаемой схемы model/game/response/time. Поэтому из web preview нельзя определить размер, покрытие всех игр и модели; понадобится прямое чтение raw files и отдельные configurations.

## Техническая реализация

Источник — dataset repository `YuxuanLi1225/UncooperativeReasoning` с несколькими model/game files, включая OpenAI CoT. В карточке сообщается viewer failure; файл требует schema alignment или раздельных configs для безопасной загрузки через библиотеку datasets. Пример preview содержит модель, название игры, текстовый ответ и elapsed time. Нельзя считать секунды временем игрового хода без уточнения исходного schema.

## Промпты и инструкции

Доступный dataset card не публикует устойчивого полного prompt, а viewer errors мешают просмотреть все записи. Отдельные raw artifacts, возможно, содержат game prompts/reasoning; на основании preview не подтверждено, включены ли chain-of-thought и какие инструкции использованы.

## Опубликованные расходы и вычисления

В карточке нет API денежных затрат или общего token usage. Поле `time` в schema ожидается float64, это не стоимость.

## Результаты

Нельзя извлекать агрегированные социальные результаты из неработающего viewer. Наблюдаемые примеры показывают ответы в dictator_game, но не размер выборки, реплики или распределения кооперации. Прямая диагностика схемы — единственный проверенный результат dataset page.

## Выводы авторов

Датасет потенциально полезен для повторного анализа межмодельных ответов в социальных играх, но до исправления схемы необходимо верифицировать files, units и provenance. Не цитировать dataset как исследовательскую статью.

## Ограничения и интерпретация

Dataset viewer полностью не строит split; схема части файлов конфликтует. Непроверены версии моделей, выборки, prompts, этика и наличие приватного reasoning. Неизвестна связь с публикацией; поэтому верификация ограничена самой ошибкой и несколькими preview rows.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning).
- [Dataset card, Dataset Preview and DatasetGenerationCastError at revision c014aa20fc1c6c3fc7f5cfc44d0dcd5585df4917](https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning): Наблюдаемая схема, пример строк и несовместимость OpenAI cot.json..
- [Локальный текст: fulltext.md](../materials/dataset-yuxuanli1225-uncooperativereasoning/fulltext.md).
- [Все уникальные исходные сведения](../materials/dataset-yuxuanli1225-uncooperativereasoning/input-notes.md).

## Связанные работы

- discusses: [acl-2025.emnlp-main.267](acl-2025.emnlp-main.267.md).
- discusses: [web-theaidigest-org-8ecf0b2d70](web-theaidigest-org-8ecf0b2d70.md).

## Происхождение записи

- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_classic.md`, строка 51.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 83.
