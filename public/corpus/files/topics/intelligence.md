---
id: topic-intelligence
type: topic
title: Коллективный интеллект, дебаты и конформизм
work_count: 36
core_works:
- arxiv-2601-05384
- arxiv-2604-03295
- arxiv-2505-11556
- github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-
related_topics:
- methodology
- memory
- institutions
- platforms
- influence
---

# Коллективный интеллект, дебаты и конформизм

[← Главная](../README.md) · [Все направления](../README.md#карта-направлений)

- **Работ в теме:** 36; ключевых: 4; проверено по полному тексту: 33.
- **Чаще всего пересекается с темами:** [Методология, валидация и сравнение с людьми](methodology.md) (16), [Коллективная память, язык и культурная передача](memory.md) (10), [Нормы, институты, санкции и управление](institutions.md) (2), [Архитектуры, платформы и масштабирование](platforms.md) (2), [Информационное влияние, манипуляции и защита](influence.md) (2).

## Коллективное решение и согласие

Более точный групповой ответ, устойчивое согласие и информационная синергия — разные исходы. Команда может улучшить ответ благодаря проверке ошибок; может также усилить общую ошибку, если участники зависимы от одних и тех же исходных знаний или склонны уступать большинству.

[Multiagent Debate](../works/arxiv-2305-14325.md) сравнивает дебаты с одиночным ответом, самопроверкой и голосованием на задачах с известными ответами. Выигрыш относится к заданным моделям, числу агентов и раундам. [Riedl](../works/arxiv-2510-05174.md) использует информационно-теоретическую постановку для отделения коллективной синергии от простой корреляции действий; сама мера зависит от выбранных переменных и среды.

[Kim и соавторы](../works/arxiv-2512-08296.md) показывают, что на инструментальных задачах многоагентная координация может как улучшать результат, так и создавать накладные расходы. Работы о конформности и влиянии неверного большинства изучают другой риск: модель может изменить корректный первоначальный ответ после социального сигнала. Их дизайн часто задаёт ответы других участников исследователем и не описывает сформировавшееся сообщество.

При чтении сравнений необходимо смотреть, одинаковы ли число вызовов, бюджет токенов, доступ к данным и возможность проверки, а также какие единицы считаются независимыми. Яркий групповой диалог сам по себе не показывает выигрыш над подходящим одиночным или алгоритмическим baseline.

## Работы по значимости

Приоритет отражает близость к задачам лаборатории; у части записей он назначен автоматически и требует редакционной проверки. Уровень проверки первоисточника — отдельное поле.

### Ключевые работы (4)

- [Conformity and Social Impact on AI Agents](../works/arxiv-2601-05384.md) (2026) — Работа адаптирует классические эксперименты Asch к multimodal LLMs: модель решает зрительную задачу, видит заведомо неверные ответы «других участников» и должна выбрать вариант.
  - Figure 2 показывает, что p_wrong растёт с N и у некоторых моделей достигает почти 1
  - другие насыщаются при N≈3–4.
  - Для Qwen2.5 32B кривые по line/color/dots качественно похожи.
  - Единогласие важно: эффект максимален, когда все показанные ответы ошибочны, и резко снижается при split
  - даже 20% правильных ответов может заметно ослабить conformity.
- [Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems](../works/arxiv-2604-03295.md) (2026) — LLMA-Mem проверяет коллективную память агентов в задачах кодирования, исследования и работы с базами данных из MultiAgentBench.
  - §§4.2–4.5 сообщают длинноцикловые результаты, cost, non-monotonic scaling и topology ablations.
  - Не переносить на социальные связи: оценены benchmark task outcomes.
  - Результат относится только к указанной среде и условиям работы.
- [Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs](../works/arxiv-2505-11556.md) (2025) — Бенчмарк HiddenBench (65 задач Hidden Profile): 15 LLM в группе дают 30,1% верных решений при распределённой информации против 80,7% у одиночки с полной информацией; сбой связан с неумением вскрывать скрытые факты.
  - Группы LLM при распределённой информации (Hidden Profile) достигают 30,1% точности против 80,7% у одиночки с полной информацией, по данным аннотации (бенчмарк 65 задач, 15 моделей).
  - Принудительное раскрытие всей информации повышает точность GPT-4.1 с 0,037 до 0,926 на 18 задачах (Table 6), что указывает на сбой вскрытия информации, а не её интеграции.
  - Структурированный протокол Exchange-then-Decide поднимает точность GPT-4.1 с 0,037 до 0,800 на тех же 18 задачах, 5 запусков, 4 агента (Table 7).
  - Один несогласный агент при 25% доле несогласных поднимает результат GPT-4.1 с 0,233 до 0,492, но у Gemini-2.5-Flash тот же приём снижает точность с 0,889 до 0,306 (Table 5).
  - Размер модели и индивидуальная точность не предсказывают коллективный результат: GPT-5-варианты не превосходят GPT-4.1-Mini в группе, а Gemini-2.5-Pro лидирует (Y_post = 0,671, §5).
  - Выводы о росте сбоя с размером группы (Table 4) основаны на 5–7 задачах при N ≠ 4 и требуют подтверждения.
- [insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-](../works/github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-.md) (год не установлен) — Официальный код/логи к статье о том, как один риторически убеждающий агент способен сорвать многоагентные дебаты; статья в Scientific Reports.
  - В статье сравниваются точность и согласие с противником в нескольких benchmark-задачах.
  - Промптная защита не гарантирует устойчивость; единичный агент способен влиять на группу в заданном протоколе.

### Дополняющие работы (20)

- [Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels](../works/arxiv-2605-29800.md) (2026) — Девять frontier judges из семи model families на MNLI/SNLI/AlphaNLI с 100 human annotations per item дают примерно две независимые голосовые единицы; коррелированные ошибки съедают ~75% независимости.
  - Панель из девяти моделей-судей уступает идеальному агрегату на 8–22 процентных пункта.
  - На MNLI точность панели 72,0% против лучшей модели 71,8%; на SNLI — 77,7% против 84,2%; на AlphaNLI — 88,7% против 91,2%.
  - Агрегация закрывает не более 11% разрыва; больше голосов не гарантирует лучшего коллективного суждения.
- [Reasoning Models Generate Societies of Thought](../works/arxiv-2601-10825.md) (2026) — Авторы интерпретируют reasoning traces как внутреннюю симуляцию нескольких перспектив: reasoning models демонстрируют больше perspective diversity, смены точки зрения и reconciliation, чем baseline/instruction-tuned…
  - Работа анализирует разнообразие неявных перспектив, поведение в разговоре и изменение диалога под управлением reasoning-моделей.
  - Измеряются разнообразие перспектив и согласование позиций в ходе обсуждения.
  - Эти показатели относятся к траекториям рассуждения и сами по себе не означают сформировавшихся социальных связей.
- [Debate or Vote: Which Yields Better Decisions in Multi-Agent Large Language Models?](../works/arxiv-2508-17536.md) (2025) — Работа разлагает multi-agent debate на majority voting и собственно межагентную дискуссию, сравнивая их на семи NLP benchmark.
  - §3.2 показывает, что majority voting объясняет основную долю прироста над индивидуальными ответами на семи задачах.
  - Теоретический раздел §4 утверждает: если обновления дебатирующих агентов симметричны и нет внешнего корректирующего механизма, ожидаемая правильность не растёт по раундам (martingale).
  - §5 демонстрирует, что коррекционно смещённые обновления и majority-guided updates могут повысить эффективность дебата
  - §6 переносит сравнение на дополнительные условия.
  - Полные таблицы следует читать по конкретным dataset/model combinations: среднее преимущество в голосовании не означает, что дискуссия всегда бесполезна
- [Talk Isn’t Always Cheap: Understanding Failure Modes in Multi-Agent Debate](../works/arxiv-2509-05396.md) (2025) — Авторы показывают, что многораундовый дебат способен снижать точность: более сильные модели иногда меняют правильный ответ на неправильный под влиянием peers, даже когда сильных участников большинство.
  - §5 показывает деградацию accuracy в некоторых настройках по мере роста раундов, в том числе когда сильных моделей большинство.
  - §6 разделяет возможные механизмы: sequential revision, social conformity, sycophancy, влияние типа модели и задачи.
  - Из abstract достоверно следует факт переходов от верного к неверному и склонность к согласию с peers
  - здесь не утверждается, что любой debate ухудшает точность.
  - Количественные показатели необходимо читать в таблицах по составу/benchmark
- [Voting or Consensus? Decision-Making in Multi-Agent Debate](../works/arxiv-2502-19130.md) (2025) — Работа изолирует протокол финального решения в многоагентных дебатах и сравнивает голосование, консенсус и другие правила при прочих равных параметрах.
  - В задачах рассуждения голосование превосходит другие протоколы в среднем на 13,2%, а для задач знаний консенсус даёт прирост 2,8%.
  - Число агентов обычно помогает, но дополнительные раунды обсуждения до голосования могут ухудшать результат.
  - Авторы поддерживают выбор правила под тип задачи, а не один универсальный протокол агрегации.
- [Mixture-of-Agents Enhances Large Language Model Capabilities](../works/arxiv-2406-04692.md) (2024) — Mixture-of-Agents объединяет ответы нескольких LLM по слоям; в AlpacaEval 2.0 открытая конфигурация показала 65,1% побед против 57,5% у GPT-4 Omni.
  - Открытая конфигурация Mixture-of-Agents получает 65,1% length-controlled win rate на AlpacaEval 2.0 против 57,5% у GPT‑4 Omni.
  - Система объединяет ответы нескольких моделей по слоям, позволяя модели учитывать ответы других.
  - Это результат языкового benchmark, а не показатель возникновения общих убеждений или институтов.
- [More Agents Is All You Need](../works/arxiv-2402-05120.md) (2024) — Agent Forest выбирает лучший из нескольких независимых ответов одной LLM голосованием; на GSM8K точность растёт с размером ансамбля.
  - На GSM8K точность Agent Forest растёт с размером ансамбля для Llama‑2‑13B, Llama‑2‑70B и GPT‑3.5‑Turbo.
  - При размере 15 Llama‑2‑13B достигает уровня, сопоставимого с Llama‑2‑70B.
  - Это голосование нескольких ответов одной модели, а не независимое сообщество с отдельными интересами.
- [StanfordHCI/genagents](../works/github-stanfordhci-genagents.md) (2024) — Код архитектуры генеративных агентов, которые отвечают на опросы от имени реальных людей на основе качественных интервью и демографического банка GSS.
  - README: агенты строятся по качественным интервью о жизни людей и воспроизводят ответы этих людей на социально-научные измерения; заявлено около 2000 часов интервью и 1000 агентов (в полный банк не публикуется).
  - В открытом репозитории есть банк демографических агентов по General Social Survey (GSS) более 3000 агентов и один пример агента-автора; имена и адреса в GSS-банке, по README, вымышленные.
  - Открытый код решает задачи опросов: категориальные, числовые и открытые ответы, память (memory stream) и рефлексия; многоагентной среды или взаимодействия агентов между собой в README не описано.
  - Доступ к полному банку ограничен по соображениям приватности: агрегированные данные по фиксированным задачам и индивидуальные ответы по открытым задачам по запросу с этической проверкой.
- [When LLMs Play the Telephone Game: Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings](../works/arxiv-2407-04503.md) (2024) — Telephone-game transmission chains измеряют, как свойства текста изменяются, когда один LLM получает результат предыдущего.
  - Telephone-game transmission chains измеряют, как свойства текста изменяются, когда один LLM получает результат предыдущего.
  - Для toxicity, positivity, difficulty и length авторы варьируют начальный материал, prompt, модель и размер.
  - Многократная передача усиливает культурные attractors; открытые задачи с большей свободой чаще смещают тексты, а toxicity демонстрирует более сильную притягательность, чем length.
- [Wisdom of the silicon crowd: LLM ensemble prediction capabilities rival human crowd accuracy](../works/web-pmc-ncbi-nlm-nih-gov-580593c8a3.md) (2024) — Сравнивает ensemble прогнозы LLM с человеческой crowd accuracy.
  - Вывод о сопоставимой точности заявлен авторами
  - также отмечено склонение к ответу “yes”.
  - Для точных размеров/score сверять Tables/Methods.
- [ChatEval: Towards better LLM-based evaluators through multi-agent debate](../works/arxiv-2308-07201.md) (2023) — ChatEval использует нескольких LLM-оценщиков с разными ролями, которые обсуждают ответы; на открытых вопросах точность классификации человеческих меток выросла на 6,2%.
  - В открытых вопросах обсуждение нескольких оценщиков повышает классификацию человеческих меток на 6,2% для ChatGPT и на 2,5% для GPT‑4.
  - Оценщики получают разные роли и обмениваются аргументами перед вердиктом.
  - Результат относится к оценке ответов и не доказывает самоорганизацию социальных групп.
- [Mindstorms in Natural Language-Based Societies of Mind](../works/arxiv-2305-17066.md) (2023) — NLSOM организует языковых и визуальных экспертов в иерархическую систему, где они обмениваются сообщениями на естественном языке.
  - На A-OKVQA иерархический NLSOM показывает точность 67,42%.
  - Увеличение числа визуальных агентов с одного до трёх постепенно повышает результат; демократическое голосование уступает монархической схеме.
  - На TARA после десяти раундов Sentence-BERT similarity составляет 20,6 против 11,3 у BLIP2; авторы отмечают необходимость систематической оценки.
- [Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data](../works/arxiv-2004-08220.md) (2020) — Авторы формализуют causal emergence: ситуации, когда макроописание системы имеет более сильную предсказательную/причинную структуру, чем описание отдельных частей.
  - В §§II–III авторы доказывают связность между макроскопическим причинным влиянием и синергетической информацией, предлагают формальный критерий causal emergence и показывают как различные режимы…
  - Демонстрации включают toy systems, где взаимодействия частей порождают информацию на макроуровне, и процедуры приближённой оценки для крупных multivariate datasets.
  - Основной результат — не универсальный эмпирический эффект, а измерительный аппарат, позволяющий спросить, даёт ли макропеременная больше полезной предсказательной причинной информации, чем компоненты.
  - Sections I–III и формулы/примеры
  - Table-specific outcomes зависят от иллюстративных систем, а не социальной симуляции.
- [Языковые модели как социальные агенты: экспериментальный анализ алайнмента в экономических играх](../works/web-hse-ru-3b14505d82.md) (2026) — ВКР НИУ ВШЭ: 12 LLM на 200 человеческих историях воспроизводят ли перенос несправедливости в просоциальное поведение; статистический паттерн воспроизводят 5 моделей, но ни одна не совпадает с человеком по обоим критериям.
  - По аннотации: 12 фронтирных LLM прогоняются по 200 индивидуальным историям участников двухэтапного эксперимента; измеряется просоциальное поведение в Prisoner's Dilemma, Public Goods Game и Trust Game.
  - Мера A(m) (совпадение знаков и значимости с человеческими выводами): пять моделей (qwen-large, kimi-k2-thinking-turbo, claude-opus-4.5, gemini-2.5-pro, gemini-3-pro) воспроизводят все три ключевых значимых вывода.
  - Мера MAE (расстояние до человеческих средних по играм): только claude-opus-4.5 и gemini-2.5-pro приближаются к человеческим уровням; остальные три из пяти воспроизводят паттерн при заметно подавленной величине ответов.
  - Три модели (gpt-4o, claude-3.5-haiku, deepseek) не воспроизводят ни одного значимого вывода из-за policy collapse: одно и то же действие независимо от контекста первой стадии.
- [Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation](../works/arxiv-2604-18005.md) (2026; приоритет предварительный) — Исследование проверяет, расширяет ли мультиагентное взаимодействие пространство идей или приводит к семантическому схлопыванию.
- [When collaboration fails: persuasion driven adversarial influence in multi agent large language model debate](../works/doi-10-1038-s41598-026-42705-7.md) (2026; приоритет предварительный) — Один persuasive adversary в многоагентном debate целенаправленно ведёт кооператоров к неправильному ответу; статья сообщает падение точности на 10–40% и рост ошибочного консенсуса >30%.
- [An Empirical Study of Group Conformity in Multi-Agent Systems](../works/arxiv-2506-01332.md) (2025; приоритет предварительный) — Авторы проводят более 2 500 дебатов по пяти общественным вопросам, чтобы измерить, как нейтральный LLM-агент меняет сторону под влиянием групп сторонников и противников.
- [The Social Cost of Intelligence: Emergence, Propagation, and Amplification of Stereotypical Bias in Multi-Agent Systems](../works/arxiv-2510-10943.md) (2025; приоритет предварительный) — Авторы предлагают раздельно измерять возникновение, распространение и усиление стереотипных ответов в многоагентных LLM-системах.
- [Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning](../works/arxiv-2406-00392.md) (2024; приоритет предварительный) — RL-агенты накапливают навыки из поколения в поколение, совмещая независимое исследование среды с социальным обучением.
- [Improving Factuality and Reasoning in Language Models through Multiagent Debate](../works/arxiv-2305-14325.md) (2023; приоритет предварительный) — Авторы предлагают несколько копий языковой модели, которые независимо отвечают на вопрос, затем читают и критикуют ответы друг друга и пересматривают их в несколько раундов.

### Фон и смежные материалы (12)

- [Multi-Agent Teams Hold Experts Back](../works/arxiv-2602-01011.md) (2026; приоритет предварительный) — Авторы исследуют, достигают ли неструктурированные команды LLM синергии, то есть не уступают ли лучшему индивидуальному эксперту.
- [Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift](../works/arxiv-2607-17384.md) (2026; приоритет предварительный) — Работа выводит weighted swap law: прирост ансамбля раскладывается на rescue mass (ошибку одиночной модели исправляет партнёр) и damage mass (правильный ответ портится голосованием).
- [The Cost of Consensus: Isolated Self-Correction Prevails Over Unguided Homogeneous Multi-Agent Debate](../works/arxiv-2605-00914.md) (2026; приоритет предварительный) — Контролируемое сравнение десятиагентного peer debate с self-correction и context-noise control на GSM-Hard и MMLU-Hard показывает, что однородная дискуссия моделей 7–8B не улучшает точность относительно самоисправления и потребляет больше токенов.
- [The Deliberative Illusion: Diagnosing Factual Attrition and Stance Homogenization in Multi-Agent LLM Deliberation](../works/arxiv-2606-03032.md) (2026; приоритет предварительный) — DelibTrace измеряет не только согласие агентов, но и то, какие исходные факты остаются в ходе deliberation.
- [The Ringelmann Effect in Multi-Agent LLM Systems: A Scaling Law for Effective Team Size](../works/arxiv-2606-02646.md) (2026; приоритет предварительный) — Авторы предлагают масштабный закон для различения номинального числа агентов и числа независимых вкладов. Функция R(N)=Neff/N параметризуется коэффициентами c и β и описывает насыщение или суб-/линейное масштабирование.
- [Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making](../works/arxiv-2508-08242.md) (2025; приоритет предварительный) — В предварительно зарегистрированном онлайн-эксперименте 1 475 участников распределены по 281 группам и решают hidden-profile задачу выбора города для спортивного события.
- [Disentangling the Drivers of LLM Social Conformity: An Uncertainty-Moderated Dual-Process Mechanism](../works/arxiv-2508-14918.md) (2025; приоритет предварительный) — Авторы адаптируют парадигму информационного каскада, чтобы измерить, как девять LLM взвешивают частные сигналы и публичное мнение при разной неопределённости.
- [LLMs Can’t Handle Peer Pressure: Crumbling under Multi-Agent Social Interactions](../works/arxiv-2508-18321.md) (2025; приоритет предварительный) — KAIROS — тест совместного решения quiz-вопросов, где независимо меняются предыдущие отношения с собеседниками, их надёжность и текущие ответы сверстников. Авторы сравнивают prompting, supervised fine-tuning и GRPO.
- [Wisdom from Diversity: Bias Mitigation Through Hybrid Human-LLM Crowds](../works/arxiv-2505-12349.md) (2025; приоритет предварительный) — Работа сравнивает человеческие ответы и ответы нескольких LLM на сбалансированные заголовки, часть которых правдива, часть изменена, а демографические признаки систематически варьируются.
- [Human-AI collectives produce the most accurate differential diagnoses](../works/arxiv-2406-14981.md) (2024; приоритет предварительный) — Работа объединяет дифференциальные диагнозы врачей с пятью LLM на 2 133 клинических случаях.
- [Persona Inconstancy in Multi-Agent LLM Collaboration: Conformity, Confabulation, and Impersonation](../works/arxiv-2405-03862.md) (2024; приоритет предварительный) — Работа исследует, насколько GPT-3.5 сохраняет назначенную национальную persona и исходную позицию в групповых обсуждениях международно-политических вопросов.
- [Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate](../works/arxiv-2305-19118.md) (2023; приоритет предварительный) — Авторы описывают Degeneration-of-Thought: при self-reflection модель может закрепиться на неверном ответе и перестать генерировать новые варианты.

## Таблица работ темы

| Работа | Год | Тип | Агентов | Проверка |
|---|---:|---|---|---|
| [Conformity and Social Impact on AI Agents](../works/arxiv-2601-05384.md) | 2026 | исследование | не опубликовано | полный текст |
| [Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems](../works/arxiv-2604-03295.md) | 2026 | исследование | не опубликовано | полный текст |
| [Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs](../works/arxiv-2505-11556.md) | 2025 | исследование | 4 (основная структура групп); 3–7 в абляции по размеру группы | полный текст |
| [insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-](../works/github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-.md) | — | проект / код | 3 в стандартной конфигурации | из прежних обзоров |
| [Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels](../works/arxiv-2605-29800.md) | 2026 | исследование | не опубликовано | полный текст |
| [Reasoning Models Generate Societies of Thought](../works/arxiv-2601-10825.md) | 2026 | исследование | не опубликовано | полный текст |
| [Debate or Vote: Which Yields Better Decisions in Multi-Agent Large Language Models?](../works/arxiv-2508-17536.md) | 2025 | исследование | не опубликовано | полный текст |
| [Talk Isn’t Always Cheap: Understanding Failure Modes in Multi-Agent Debate](../works/arxiv-2509-05396.md) | 2025 | исследование | не опубликовано | полный текст |
| [Voting or Consensus? Decision-Making in Multi-Agent Debate](../works/arxiv-2502-19130.md) | 2025 | исследование | не опубликовано | полный текст |
| [Mixture-of-Agents Enhances Large Language Model Capabilities](../works/arxiv-2406-04692.md) | 2024 | исследование | не опубликовано | полный текст |
| [More Agents Is All You Need](../works/arxiv-2402-05120.md) | 2024 | исследование | не опубликовано | полный текст |
| [StanfordHCI/genagents](../works/github-stanfordhci-genagents.md) | 2024 | проект / код | 1000 интервью-агентов (полный банк не опубликован); более 3000 демографических агентов GSS в открытом банке | документация проекта |
| [When LLMs Play the Telephone Game: Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings](../works/arxiv-2407-04503.md) | 2024 | исследование | не опубликовано | полный текст |
| [Wisdom of the silicon crowd: LLM ensemble prediction capabilities rival human crowd accuracy](../works/web-pmc-ncbi-nlm-nih-gov-580593c8a3.md) | 2024 | исследование | не опубликовано | полный текст |
| [ChatEval: Towards better LLM-based evaluators through multi-agent debate](../works/arxiv-2308-07201.md) | 2023 | исследование | не опубликовано | полный текст |
| [Mindstorms in Natural Language-Based Societies of Mind](../works/arxiv-2305-17066.md) | 2023 | исследование | не опубликовано | полный текст |
| [Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data](../works/arxiv-2004-08220.md) | 2020 | исследование | не опубликовано | полный текст |
| [Языковые модели как социальные агенты: экспериментальный анализ алайнмента в экономических играх](../works/web-hse-ru-3b14505d82.md) | 2026 | веб-материал | 12 LLM (по 200 человеческих историй каждая); число агентов в смысле взаимодействия не применимо | аннотация |
| [Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation](../works/arxiv-2604-18005.md) | 2026 | исследование | — | полный текст |
| [When collaboration fails: persuasion driven adversarial influence in multi agent large language model debate](../works/doi-10-1038-s41598-026-42705-7.md) | 2026 | исследование | — | полный текст |
| [An Empirical Study of Group Conformity in Multi-Agent Systems](../works/arxiv-2506-01332.md) | 2025 | исследование | — | полный текст |
| [The Social Cost of Intelligence: Emergence, Propagation, and Amplification of Stereotypical Bias in Multi-Agent Systems](../works/arxiv-2510-10943.md) | 2025 | исследование | — | полный текст |
| [Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning](../works/arxiv-2406-00392.md) | 2024 | исследование | — | полный текст |
| [Improving Factuality and Reasoning in Language Models through Multiagent Debate](../works/arxiv-2305-14325.md) | 2023 | исследование | — | полный текст |
| [Multi-Agent Teams Hold Experts Back](../works/arxiv-2602-01011.md) | 2026 | исследование | — | полный текст |
| [Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift](../works/arxiv-2607-17384.md) | 2026 | исследование | — | полный текст |
| [The Cost of Consensus: Isolated Self-Correction Prevails Over Unguided Homogeneous Multi-Agent Debate](../works/arxiv-2605-00914.md) | 2026 | исследование | — | полный текст |
| [The Deliberative Illusion: Diagnosing Factual Attrition and Stance Homogenization in Multi-Agent LLM Deliberation](../works/arxiv-2606-03032.md) | 2026 | исследование | — | полный текст |
| [The Ringelmann Effect in Multi-Agent LLM Systems: A Scaling Law for Effective Team Size](../works/arxiv-2606-02646.md) | 2026 | исследование | — | полный текст |
| [Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making](../works/arxiv-2508-08242.md) | 2025 | исследование | — | полный текст |
| [Disentangling the Drivers of LLM Social Conformity: An Uncertainty-Moderated Dual-Process Mechanism](../works/arxiv-2508-14918.md) | 2025 | исследование | — | полный текст |
| [LLMs Can’t Handle Peer Pressure: Crumbling under Multi-Agent Social Interactions](../works/arxiv-2508-18321.md) | 2025 | исследование | — | полный текст |
| [Wisdom from Diversity: Bias Mitigation Through Hybrid Human-LLM Crowds](../works/arxiv-2505-12349.md) | 2025 | исследование | — | полный текст |
| [Human-AI collectives produce the most accurate differential diagnoses](../works/arxiv-2406-14981.md) | 2024 | исследование | — | полный текст |
| [Persona Inconstancy in Multi-Agent LLM Collaboration: Conformity, Confabulation, and Impersonation](../works/arxiv-2405-03862.md) | 2024 | исследование | — | полный текст |
| [Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate](../works/arxiv-2305-19118.md) | 2023 | исследование | — | полный текст |
