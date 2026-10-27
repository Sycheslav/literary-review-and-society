---
id: web-proceedings-mlr-press-6d2491086e
type: work
title: 'CoopEval: Benchmarking Cooperation-Sustaining Mechanisms and LLM Agents in Social Dilemmas'
authors:
- Emanuel Tewolde
- Xiao Zhang
- David Guzman Piedrahita
- Vincent Conitzer
- Zhijing Jin
year: 2026
source_kind: web_material
venue: Proceedings of ICML 2026, PMLR 306
publication_status: Рецензируемая конференционная статья.
topics:
- networks
language: en
identifiers:
- web-proceedings-mlr-press-6d2491086e
source_urls:
- https://proceedings.mlr.press/v306/tewolde26a.html
verification_status: fulltext_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/web-proceedings-mlr-press-6d2491086e/fulltext.md
- materials/web-proceedings-mlr-press-6d2491086e/input-notes.md
related: []
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
summary_short: CoopEval сравнивает repetition, reputation, mediation и contract в четырёх социальных дилеммах и
  на современных LLM.
---

# CoopEval: Benchmarking Cooperation-Sustaining Mechanisms and LLM Agents in Social Dilemmas

[К главному обзору](../README.md) · [Формирование сетей, связи, доверие и репутация](../topics/networks.md)

## Коротко

> CoopEval сравнивает repetition, reputation, mediation и contract в четырёх социальных дилеммах и на современных LLM.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Emanuel Tewolde; Xiao Zhang; David Guzman Piedrahita; Vincent Conitzer; Zhijing Jin
- **Год:** 2026.
- **Площадка / статус:** Proceedings of ICML 2026, PMLR 306; Рецензируемая конференционная статья..
- **Проверка содержания:** Проверены полный текст и существенные разделы метода/результатов.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

CoopEval сравнивает repetition, reputation, mediation и contract в четырёх социальных дилеммах и на современных LLM. Авторы обнаруживают, что посредничество и договоры чаще поддерживают кооперацию, чем повторение при меняющихся партнёрах; без институционального механизма модели в однократных дилеммах часто выбирают дефект. Это эксперимент над формализованными правилами, не естественное общество.

## Дизайн исследования

Четыре игры: Prisoner’s Dilemma, Traveler’s Dilemma, Trust Game и Public Goods Game. Сравниваются: (1) repetition — та же пара играет повторно с историей; (2) reputation — партнеры случайно сменяются и видят историю прошлых взаимодействий; (3) mediation — игроки могут делегировать выбор посреднику; (4) contract — стороны могут согласовать обусловленный действиями zero-sum transfer. Анализ включает cross-play между моделями, средний payoff/fitness после нормировки, качество/принятие mediator/contracts и варианты evolutionary pressure, усиливающего индивидуальную максимизацию payoff. Конкретная структура игры меняет равновесие, поэтому результаты интерпретировать в привязке к правилам Appendix.

## Техническая реализация

Основные тестируемые конфигурации: Claude Sonnet 4.5, GPT-5.2, Gemini 3 Flash reasoning/base, GPT-4o и Qwen-30B. Таблица 2 агрегирует payoff по четырем играм после сдвига и масштабирования; отдельные приложения показывают распределения по игре и парным комбинациям. Все агенты получают описания игры и механизма; посредник и договор — институционально заданные роли. Различаются способности к reasoning и база модели.

## Промпты и инструкции

Инструкции сообщают правила и доступные механизмы, затем модели предлагают/принимают посредника или контракт. Механизмы определены авторами, это не самозарождение института. Полные шаблоны и схемы в paper/repository.

## Опубликованные расходы и вычисления

В статье не найден совокупный API cost/token budget; внутриигровые utility и контракты не считать денежной стоимостью вызова.

## Результаты

В Table 2 нормированный aggregate fitness: Mediation 1.000±0.000; Contracting 0.999±0.001; прочие механизмы ниже. Авторы сообщают, что contract восстанавливает примерно 80% cooperation payoff в рассматриваемом сравнении; repetition-induced cooperation заметно ухудшается при смене co-players. В исходных single-shot games все современные модели в большинстве настроек преимущественно выбирают defect. Gemini 3 конфигурации показывают лучшие агрегированные результаты; значения — нормированные игровые scores, а не проценты «дружбы».

## Выводы авторов

Медиация и условные трансферты оказались сильными механизмами в указанных формальных играх; одно лишь повторение не обеспечивает кооперации, если состав партнеров меняется. Это говорит о значении институтов и правил выплат, не о безусловной склонности LLM к взаимопомощи.

## Ограничения и интерпретация

Выводы зависят от payoff matrices, принятия предложенных договоров/посредников, model versions и выбора cross-play/population. Равновесная возможность не равна тому, что языковая модель выберет сотрудничество. Benchmark контролируем и не отражает реальные организации.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://proceedings.mlr.press/v306/tewolde26a.html).
- [Paper §§2–6, Table 1 and Table 2, appendices](https://proceedings.mlr.press/v306/tewolde26a.html): Игры, механизмные условия, модельные конфигурации и агрегированные результаты..
- [Full ICML 2026 PDF, Experimental Results](https://raw.githubusercontent.com/mlresearch/v306/main/assets/tewolde26a/tewolde26a.pdf): Подробный метод и статистика по приложениям..
- [Локальный текст: fulltext.md](../materials/web-proceedings-mlr-press-6d2491086e/fulltext.md).
- [Все уникальные исходные сведения](../materials/web-proceedings-mlr-press-6d2491086e/input-notes.md).

## Связанные работы

Тематические сопоставления и связанные работы приведены в разделах: [Формирование сетей, связи, доверие и репутация](../topics/networks.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 114.
