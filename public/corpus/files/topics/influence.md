---
id: topic-influence
type: topic
title: Информационное влияние, манипуляции и защита
work_count: 15
core_works:
- doi-10-24963-ijcai-2025-1144
- arxiv-2411-11581
- doi-10-1145-3772318-3790442
- github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-
related_topics:
- methodology
- communities
- platforms
- memory
- economics
---

# Информационное влияние, манипуляции и защита

[← Главная](../README.md) · [Все направления](../README.md#карта-направлений)

- **Работ в теме:** 15; ключевых: 4; проверено по полному тексту: 10.
- **Чаще всего пересекается с темами:** [Методология, валидация и сравнение с людьми](methodology.md) (5), [Реальные агентные сообщества и практические эксперименты](communities.md) (5), [Архитектуры, платформы и масштабирование](platforms.md) (4), [Коллективная память, язык и культурная передача](memory.md) (4), [Экономические игры, рынки, стимулы и сговор](economics.md) (3).

## Влияние, ошибки и манипуляции

Коммуникация может распространять полезную информацию и одновременно давать возможность навязать ошибку. В этой теме объединены исследования согласия с большинством, репутационных сигналов, вредных сообщений и коллективного исправления ошибок; их причинные интерпретации различаются.

В [Social Simulacra in the Wild](../works/arxiv-2603-16128.md) тематическое сходство сообществ Moltbook исследуется с контролем пересечения авторов. Это наблюдательный анализ состава и текстов, а не рандомизированный тест причин информационного влияния. В [MoltNet](../works/arxiv-2602-13458.md) часть смысловых характеристик размечена моделью-судьёй, поэтому отдельно важна надёжность разметки и покрытие данных.

В [A Case Study on Emergent Cheating and Whistleblowing](../works/arxiv-2609-04170.md) агенты распространяют обнаруженный способ обойти проверку, а другие сообщают о проблеме. При анализе следует учитывать конкретный оценщик, общие каналы и задачи, а не считать пример доказательством универсального поведения любых коллективов.

Контролируемые тесты конформности часто дают модели заранее подготовленные ответы других «участников». Они полезны для выявления восприимчивости к авторитету и большинству, но отличие от самостоятельной многократной коммуникации должно оставаться явным. Исследования, в которых LLM-сообщения влияют на людей, также отделены от симуляций полностью искусственных сообществ.

## Работы по значимости

Приоритет отражает близость к задачам лаборатории; у части записей он назначен автоматически и требует редакционной проверки. Уровень проверки первоисточника — отдельное поле.

### Ключевые работы (4)

- [Shaping Shared Languages: Human and Large Language Models’ Inductive Biases in Emergent Communication](../works/doi-10-24963-ijcai-2025-1144.md) (2025) — Исследование того, как люди и LLM используют индуктивные смещения при возникновении общего языка.
  - Изучается emergence shared language в контролируемом протоколе.
  - Сопоставление людей и LLM полезно, но само по себе не доказывает наличие человеческих понятий у агентов.
- [OASIS: Open Agent Social Interaction Simulations with One Million Agents](../works/arxiv-2411-11581.md) (2024) — Открытый симулятор OASIS моделирует соцсети X и Reddit с LLM-агентами до миллиона пользователей; воспроизводит распространение новостей, поляризацию и стадность.
  - Распространение новостей на X (198 инстанций Twitter15/16): масштаб и максимальная ширина близки к реальным, средняя нормализованная RMSE около 30 %; глубина в симуляции меньше реальной (§3.3.1).
  - Групповая поляризация (196 ядровых пользователей, Llama-3-8B): ответы со временем становятся консервативнее, сильнее у нецензурированной модели; оценка GPT-4o-mini (§3.3.1, Fig. 5).
  - Reddit: при начальном дизлайке оценки агентов ниже человеческих (агенты стадны сильнее), при начальном лайке результаты близки (§3.3.2, Fig. 6).
  - Стадность на контрфактических постах проявляется только при дизлайках и растёт с числом агентов; при 100 агентах эффекта не видно, при 10 000 — заметен (§3.4.2, Fig. 8).
  - Дезинформация на X: в симуляции с 1 млн обычных агентов посты с ложными новостями устойчиво превышают посты с официальными на каждом шаге (§3.5, Fig. 9).
  - Вычисления: 15 минут на шаг при 10 000 агентов на 4 GPU A100; денежная стоимость и число токенов не опубликованы (App. C.1, Table 2).
- [Large Language Model (LLM)-driven Adversarial Social Influences in Online Information Spread: Risks and Interventions](../works/doi-10-1145-3772318-3790442.md) (2026) — Два randomized experiments с онлайн-панелью проверяют, меняют ли LLM-driven adversarial comments оценки достоверности и sharing.
  - ACM abstract сообщает, что adversarial comments в некоторых условиях снижают точность credibility judgments и discernment между true/false
  - labels/warnings mitigate часть эффекта.
  - Полный текст/таблицы недоступны в текущей проверке, поэтому effect sizes, p-values и точные conditions не приведены.
  - Не переносить на обычные комментарии: боты целенаправленно созданы как adversarial influence.
- [insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-](../works/github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-.md) (год не установлен) — Официальный код/логи к статье о том, как один риторически убеждающий агент способен сорвать многоагентные дебаты; статья в Scientific Reports.
  - В статье сравниваются точность и согласие с противником в нескольких benchmark-задачах.
  - Промптная защита не гарантирует устойчивость; единичный агент способен влиять на группу в заданном протоколе.

### Дополняющие работы (8)

- [Dynamics of Cognitive Heterogeneity: Investigating Behavioral Biases in Multi-Stage Supply Chains with LLM-Based Simulation](../works/arxiv-2604-17220.md) (2026) — В Beer Distribution Game модели GPT и DeepSeek играют роли цепочки поставок; исследование связывает когнитивные возможности с координацией и эффектом обмена информацией.
  - §4–5 и abstract: когнитивная разница меняет классические паттерны, sharing mitigates adverse behavior.
  - Результат относится только к указанной среде и условиям работы.
  - Не следует трактовать карточку как доказательство человеческих чувств или сознания агентов.
- [Verbalized Bayesian Persuasion](../works/arxiv-2502-01587.md) (2025) — Работа расширяет байесовское убеждение на многоэтапный диалог на естественном языке и показывает решения для сценариев, не сводимых к числовым играм.
  - Работа переносит байесовское убеждение на многоэтапный диалог на естественном языке.
  - Авторы воспроизводят классические решения и рассматривают сценарии рекомендаций, суда и правоохранительной деятельности.
  - Оценка сравнивает стратегию с равновесием и целевой полезностью; гарантии относятся к сформулированным предпосылкам Prompt-PSRO.
- [Easier to Mislead Than to Correct: Harmful and Beneficial Revision in LLM Conformity](../works/arxiv-2606-01637.md) (2026; приоритет предварительный) — В контролируемом эксперименте модель сначала самостоятельно отвечает на вопрос, затем получает ответы шести вымышленных peer-агентов и отвечает ещё раз.
- [How large language models judge and influence human cooperation](../works/doi-10-1093-pnasnexus-pgag297.md) (2026; приоритет предварительный) — Авторы извлекают нормы косвенной взаимности из решений 21 LLM по 43 200 искусственным социальным ситуациям, после чего подставляют полученные вероятностные нормы в эволюционно-игровую модель кооперации.
- [Real-Time Group Dynamics with LLM Facilitation: Evidence from a Charity Allocation Task](../works/arxiv-2605-14097.md) (2026; приоритет предварительный) — Два real-time human studies (N=879) проверяют LLM facilitation в распределении реальных пожертвований.
- [When collaboration fails: persuasion driven adversarial influence in multi agent large language model debate](../works/doi-10-1038-s41598-026-42705-7.md) (2026; приоритет предварительный) — Один persuasive adversary в многоагентном debate целенаправленно ведёт кооператоров к неправильному ответу; статья сообщает падение точности на 10–40% и рост ошибочного консенсуса >30%.
- [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](../works/arxiv-2404-04286.md) (2024; приоритет предварительный) — Работа применяет байесовскую теорию итеративного обучения к передачам между поколениями LLM: она предсказывает, когда небольшие смещения моделей усиливаются или ослабевают по цепочке «учитель—ученик».
- [Data poisoning in LLM multiagent societies: Social proof drives collective decision failure in financial deliberation](../works/doi-10-4218-etrij-2026-0186.md) (2026; приоритет предварительный) — Работа о social proof / data-poisoning влиянии на multiagent financial deliberation.

### Фон и смежные материалы (3)

- [Mechanism Design for Large Language Models](../works/arxiv-2310-10826.md) (2024) — Теоретическая работа по mechanism design: аукцион, через который несколько LLM влияют на генерацию текста, с монотонной агрегацией и второй ценой.
  - Показана эквивалентность двух требований стимулов (incentive properties) и монотонности агрегации.
  - Из монотонности выводится второй-ценовой механизм через stable sampling, даже когда функции полезности неизвестны.
  - Демонстрация иллюстрирует совместную рекламную генерацию нескольких компаний; эмпирических поведенческих тестов LLM нет.
- [Reference implementation: Data Poisoning in LLM Multi-Agent Societies](../works/github-int-park422-llm-multiagent-data-poisoning.md) (2026; приоритет предварительный) — Открытый код к ETRI Journal: в семиагентном финансовом обсуждении один атакующий снижает точность группы с 87,5% до 52,5%; доступны prompts, условия и анализ.
- [OSF](../works/web-osf-io-2f61c778cf.md) (год не установлен; приоритет предварительный) — В исходном корпусе найден источник; содержательный пересказ требует доступного первичного текста. Ссылки и исходные сведения сохранены ниже.

## Таблица работ темы

| Работа | Год | Тип | Агентов | Проверка |
|---|---:|---|---|---|
| [Shaping Shared Languages: Human and Large Language Models’ Inductive Biases in Emergent Communication](../works/doi-10-24963-ijcai-2025-1144.md) | 2025 | исследование | см. статью | полный текст |
| [OASIS: Open Agent Social Interaction Simulations with One Million Agents](../works/arxiv-2411-11581.md) | 2024 | исследование | от 100 до 1 000 000 (зависит от эксперимента) | полный текст |
| [Large Language Model (LLM)-driven Adversarial Social Influences in Online Information Spread: Risks and Interventions](../works/doi-10-1145-3772318-3790442.md) | 2026 | исследование | не опубликовано | аннотация |
| [insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-](../works/github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-.md) | — | проект / код | 3 в стандартной конфигурации | из прежних обзоров |
| [Dynamics of Cognitive Heterogeneity: Investigating Behavioral Biases in Multi-Stage Supply Chains with LLM-Based Simulation](../works/arxiv-2604-17220.md) | 2026 | исследование | не опубликовано | полный текст |
| [Verbalized Bayesian Persuasion](../works/arxiv-2502-01587.md) | 2025 | исследование | не опубликовано | полный текст |
| [Easier to Mislead Than to Correct: Harmful and Beneficial Revision in LLM Conformity](../works/arxiv-2606-01637.md) | 2026 | исследование | — | полный текст |
| [How large language models judge and influence human cooperation](../works/doi-10-1093-pnasnexus-pgag297.md) | 2026 | исследование | — | полный текст |
| [Real-Time Group Dynamics with LLM Facilitation: Evidence from a Charity Allocation Task](../works/arxiv-2605-14097.md) | 2026 | исследование | — | полный текст |
| [When collaboration fails: persuasion driven adversarial influence in multi agent large language model debate](../works/doi-10-1038-s41598-026-42705-7.md) | 2026 | исследование | — | полный текст |
| [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](../works/arxiv-2404-04286.md) | 2024 | исследование | — | полный текст |
| [Data poisoning in LLM multiagent societies: Social proof drives collective decision failure in financial deliberation](../works/doi-10-4218-etrij-2026-0186.md) | 2026 | исследование | — | из прежних обзоров |
| [Mechanism Design for Large Language Models](../works/arxiv-2310-10826.md) | 2024 | исследование | не применимо (теоретическая работа) | полный текст |
| [Reference implementation: Data Poisoning in LLM Multi-Agent Societies](../works/github-int-park422-llm-multiagent-data-poisoning.md) | 2026 | проект / код | — | документация проекта |
| [OSF](../works/web-osf-io-2f61c778cf.md) | — | веб-материал | — | из прежних обзоров |
