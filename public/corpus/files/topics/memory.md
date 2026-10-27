---
id: topic-memory
type: topic
title: Коллективная память, язык и культурная передача
work_count: 56
core_works:
- arxiv-2412-10270
- arxiv-2304-03442
- arxiv-2412-07646
- arxiv-2605-04264
- arxiv-2604-03295
- arxiv-2501-00226
- doi-10-24963-ijcai-2025-1144
- arxiv-2411-12977
- github-google-deepmind-concordia
- arxiv-2311-11388
- openreview-j9VyoX6dex
- github-bai-lab-mas-os
- github-openbmb-chatdev
- github-sii-research-socioverse2
- web-dam-prod-media-mit-edu-073d188d54
related_topics:
- platforms
- methodology
- communities
- intelligence
- institutions
---

# Коллективная память, язык и культурная передача

[← Главная](../README.md) · [Все направления](../README.md#карта-направлений)

- **Работ в теме:** 56; ключевых: 15; проверено по полному тексту: 38.
- **Чаще всего пересекается с темами:** [Архитектуры, платформы и масштабирование](platforms.md) (18), [Методология, валидация и сравнение с людьми](methodology.md) (16), [Реальные агентные сообщества и практические эксперименты](communities.md) (12), [Коллективный интеллект, дебаты и конформизм](intelligence.md) (10), [Нормы, институты, санкции и управление](institutions.md) (6).

## Память, передача и язык

Коллективная память может храниться во внешнем артефакте, в индивидуальных воспоминаниях или в повторяемой практике взаимодействия. Эти формы ведут себя по-разному при смене участников и не должны отождествляться только потому, что группа использует слово «мы».

[Generative Agents](../works/arxiv-2304-03442.md) используют поток воспоминаний, их извлечение, рефлексию и планирование. Авторы показывают вклад компонентов в оценку правдоподобия, одновременно отмечая ошибки воспоминаний. В [Cultural Evolution of Cooperation](../works/arxiv-2412-10270.md) стратегии передаются в сменяющихся поколениях в условиях явно заданного отбора; результаты различаются между моделями и прогонами.

[From Signals to Structure](../works/arxiv-2607-00233.md) сравнивает архитектуры памяти в задаче выработки коммуникационного кода. [GlossoGen](../works/arxiv-2609-01491.md) изучает язык в более сложных многоагентных взаимодействиях, а [Shaping Shared Languages](../works/doi-10-24963-ijcai-2025-1144.md) сопоставляет пары людей и моделей. Общий словарь или сокращение сообщений показывают определённую координацию, но не устанавливают одинаковое понимание значений людьми и моделями.

Для интерпретации передачи культуры важны исходные возможности: кто может читать архив, кто его меняет, сохраняются ли идентификаторы, какие выгоды предусмотрены и заменяются ли участники. Отдельные материалы об организационной и трансактивной памяти рассматривают инженерные системы и не всегда претендуют на моделирование социальных институтов.

## Работы по значимости

Приоритет отражает близость к задачам лаборатории; у части записей он назначен автоматически и требует редакционной проверки. Уровень проверки первоисточника — отдельное поле.

### Ключевые работы (15)

- [Cultural Evolution of Cooperation among LLM Agents](../works/arxiv-2412-10270.md) (2024) — Культурная эволюция кооперации в игре донора: стратегии передаются между 10 поколениями LLM-агентов; надёжно улучшает результат только Claude 3.5 Sonnet, Gemini 1.5 Flash и GPT-4o — нет.
  - 12 агентов на популяцию, 12 раундов игры донора в поколении, 10 поколений; сохраняются верхние 50% по ресурсам, добавляются 6 новых агентов; пять случайных seed-прогонов на модель.
  - Claude 3.5 Sonnet надёжно улучшает средний финальный ресурс между поколениями; Gemini 1.5 Flash и GPT-4o — нет.
  - Между прогонами большой разброс: у Gemini в некоторых прогонах виден рост до cooperation crash.
  - При costly punishment (агент платит x, чтобы отнять 2x) ресурсы Claude растут существенно, Gemini заметно падают, GPT-4o растёт немного.
  - Claude накапливает сложные формы наказания, включая second-order сведения о действиях получателей; авторы не доказывают, что нормы возникнут без внешней селекции.
- [Generative Agents: Interactive Simulacra of Human Behavior](../works/arxiv-2304-03442.md) (2023) — Архитектура генеративных агентов (память, рефлексия, планирование) в Smallville из 25 персонажей: правдоподобное поведение, распространение приглашений и координация вокруг заданной цели.
  - 25 агентов в виртуальном городке Smallville на GPT-3.5-turbo; одна заданная идея (вечеринка ко Дню святого Валентина) распространилась через приглашения, знакомства и координацию за два игровых дня.
  - Полная архитектура оценена людьми как более правдоподобная, чем варианты с удалёнными компонентами; абляции показали критический вклад наблюдения, планирования и рефлексии.
  - Социальные примеры инициируются заданным seed: цель вечеринки задана исследователями, а среда предоставляет встречи и память.
  - Память не является точной записью: авторы отмечают ошибки и украшения воспоминаний (разделы 6.5.2 и 7.2).
  - Авторы не заявляют появления самоподдерживающихся институтов или намерений вне заданной модели; оценивается правдоподобие, а не истинность психологического сходства.
- [Searching for Structure: Investigating Emergent Communication with Large Language Models](../works/arxiv-2412-07646.md) (2025) — Итеративная передача в референциальной коммуникации LLM-агентов делает сигналы более обучаемыми, но не обязательно короче и эффективнее.
  - Цепочки культурной передачи в signaling/referential game: новые агенты учатся на истории предыдущих поколений.
  - Итеративная передача повышает обучаемость сигналов, которые осваивают последующие агенты.
  - Сообщения при этом могут становиться длиннее и терять часть информации; «более обучаемый» не равно «более компактный или эффективный».
  - Наблюдения ограничены узкой сигнальной игрой и заданной популяционной передачей; численные значения см. в таблицах оригинала (в карточке не приведены).
- [Governed Collaborative Memory as Artificial Selection in LLM-Based Multi-Agent Systems](../works/arxiv-2605-04264.md) (2026) — Viewpoint формулирует shared memory как задачу governance: какие варианты памяти становятся институциональными, остаются приватными, отвергаются или заменяются.
  - Авторы предлагают показатели точности происхождения сведений, прослеживаемости, эпистемического качества и сохранения ролей в общей памяти.
  - Вопрос памяти рассматривается как управление: что становится общим, остаётся личным или заменяется.
  - Это концептуальная рамка и предложения метрик, а не опубликованный сравнительный эксперимент.
- [Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems](../works/arxiv-2604-03295.md) (2026) — LLMA-Mem проверяет коллективную память агентов в задачах кодирования, исследования и работы с базами данных из MultiAgentBench.
  - §§4.2–4.5 сообщают длинноцикловые результаты, cost, non-monotonic scaling и topology ablations.
  - Не переносить на социальные связи: оценены benchmark task outcomes.
  - Результат относится только к указанной среде и условиям работы.
- [Generative Emergent Communication: Large Language Model is a Collective World Model](../works/arxiv-2501-00226.md) (2025) — Generative EmCom формализует гипотезу коллективной модели мира: язык связывает частичные модели мира, возникающие в распределённом социальном взаимодействии.
  - Generative EmCom формализует, как общие языковые символы могут возникать из распределённого байесовского вывода.
  - Авторы трактуют текстовые LLM как статистические приближения к частичным моделям мира, сформированным социальным взаимодействием.
  - Вклад теоретический: в статье нет экспериментального балла или проверки на популяции LLM-агентов.
- [Shaping Shared Languages: Human and Large Language Models’ Inductive Biases in Emergent Communication](../works/doi-10-24963-ijcai-2025-1144.md) (2025) — Исследование того, как люди и LLM используют индуктивные смещения при возникновении общего языка.
  - Изучается emergence shared language в контролируемом протоколе.
  - Сопоставление людей и LLM полезно, но само по себе не доказывает наличие человеческих понятий у агентов.
- [MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning](../works/arxiv-2411-12977.md) (2024) — MindForge дополняет Minecraft-агентов Voyager явными представлениями о себе и партнёре, обменом сообщениями и эпизодической, семантической и процедурной памятью.
  - Открытые базовые агенты Voyager испытывают трудности в заданиях с землёй и деревом, тогда как GPT‑4 достигает идеальной точности в описанных задачах.
  - Общение MindForge с экспертным агентом повышает завершение задач в среднем на 16,1% для dirt и на 13% для wood.
  - Помощь человека-эксперта даёт +57,85% для dirt; это показывает эффект доступа к компетентному партнёру, а не равную автономную координацию.
- [google-deepmind/concordia](../works/github-google-deepmind-concordia.md) (2023) — Открытая библиотека Google DeepMind для построения генеративных агентных симуляций, где Game Master (GM) разрешает действия агентов в языковой среде.
  - Concordia описана в README как библиотека для построения и запуска генеративных агентных моделей; сущности (entities) действуют на естественном языке, а Game Master переводит их намерения в исходы.
  - Архитектура состоит из сущностей, компонентов (инструкции, память, выбор действия), префабов (шаблонов), движка run_loop и интерфейсов среды (пошаговая, одновременная или асинхронная).
  - Из README: модельно-агностичность; нужен LLM API и провайдер эмбеддингов для ассоциативной памяти. Качество результатов зависит от выбранной модели.
  - Пример в README: четыре друга в заваленном снегом пабе, спор из-за разбитой машины; агенты рассуждают по схеме March and Olsen (2011) из трёх вопросов о ситуации, о себе и о том, что делает такой человек в такой ситуации.
- [Machine Culture](../works/arxiv-2311-11388.md) (2023) — Работа предлагает рамку анализа машинной культуры через вариативность, отбор и передачу культурных артефактов; доказательства преимущественно теоретические и кейсовые.
  - Работа предлагает оценивать машинную культуру по вариативности, отбору и передаче артефактов.
  - Авторы различают создание нового артефакта и его устойчивое распространение в системе.
  - Вклад в основном концептуальный и кейсовый; поведенческого эксперимента с популяцией агентов нет.
- [ORALMEM: Post-Witness Collective Memory in LLM Societies](../works/openreview-j9VyoX6dex.md) (2026) — Проверяет, сохраняются ли сообщения после стирания индивидуальной памяти свидетелей за счёт устной передачи друг другу.
  - Summary сообщает 0.397 vs 0.105
  - подробности в рукописи и OpenReview reviews следует сверять перед точной интерпретацией.
  - Результат относится только к указанной среде и условиям работы.
- [BAI-LAB/MAS-OS](../works/github-bai-lab-mas-os.md) (год не установлен) — Репозиторий Collaborative OS of Multi-Agent Systems (MAS-OS), с кодом и данными; результаты и метод — в ACL Anthology article.
  - Репозиторий содержит код/конфигурации, перечисленные в README.
  - Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
  - Результат относится только к указанной среде и условиям работы.
- [OpenBMB/ChatDev](../works/github-openbmb-chatdev.md) (год не установлен) — Репозиторий OpenBMB ChatDev/MACNET — кодовый артефакт исследования масштабирования LLM-сотрудничества.
  - Различать базовый ChatDev и статью MACNET о масштабировании сотрудничества.
  - Численные результаты цитировать публикации.
- [sii-research/SocioVerse2](../works/github-sii-research-socioverse2.md) (год не установлен) — Кодовая платформа к статье SocioVerse2 о продольных динамических социальных симуляциях; результаты и validation cases находятся в статье.
  - Статья заявляет валидации и replay/branching для продольных процессов.
  - Код сопровождает статью и не образует независимую выборку.
- [полный текст PDF на сайте MIT Media Lab](../works/web-dam-prod-media-mit-edu-073d188d54.md) (год не установлен) — Зеркальная PDF-копия полной статьи Kim et al. о границах пользы кооперации LLM; статья опубликована в Nature Machine Intelligence в 2026.
  - Издательская статья Nature Machine Intelligence 2026.
  - Это альтернативное представление уже учтённой работы, а не новый источник результата.

### Дополняющие работы (34)

- [Collaborative OS of Multi-Agent Systems (MAS-OS)](../works/acl-2026.findings-emnlp.1716.md) (2026) — MAS-OS совместно управляет памятью, выбором исполнителя и контекстом в мультиагентных workflow; сообщаемое среднее превышение над базовыми системами — 17.42% на четырёх бенчмарках.
  - Бенчмарки GSM-Hard, SciBench, SRDD и MMLU-Pro; для Llama-3.1-8B MAS-OS даёт 0.315, 0.278, 0.713 и 0.376 соответственно (Table 1).
  - Средний выигрыш 17.42% над сильнейшими сравниваемыми базовыми системами, как сообщают авторы; сверить условия сравнения по Table 1.
  - Абляции на первых трёх задачах (Table 2): без Context Allocator −26.1%, −33.9%, −7.6%; без Memory Manager −20.2%, −26.8%, −5.2%; без Scheduler −10.6%, −5.8%, −3.6%.
  - Выборочное выделение контекста снижает выходные токены и задержку примерно на 30% относительно EvoAgent, но объём входных токенов может расти.
  - Исполнители имеют заранее заданные роли; Scheduler и Context Allocator обучены PPO/RLOO на Llama-3.1-8B; оптимизация идёт под ответные бенчмарки, а не под социальную эмерджентность.
- [From Signals to Structure: How Memory Architecture Drives Language Emergence in LLM Agents](../works/arxiv-2607-00233.md) (2026) — В игре Льюиса с двумя агентами на frozen gpt-5.4-mini формат памяти меняет зависимость координации от ёмкости канала: persistent scratchpad стабильнее memory_only.
  - Два агента, 200 раундов; sender видит 4 случайных объекта из пула 8 и target и отправляет символ фиксированной длины из ограниченного словаря; базовая модель gpt-5.4-mini, frozen.
  - При cap=25 scratchpad даёт coordination 0.867±0.023, memory_only — 0.747±0.076 (multi-seed, Abstract).
  - При cap=64 memory_only падает до 0.580±0.140; при n=3 авторы считают это статистически неотличимым от шума выборки.
  - Codebook достигает color-purity 0.96 на 50 раундах, но поздняя точность 0.527±0.13 из-за устаревших и конфликтующих записей.
  - Stateless-агенты достигают пика на умеренной ёмкости и деградируют при большом словаре; авторы отвергают простой информационный оптимум при ёмкости, равной числу объектов.
- [Multi-Agent Transactive Memory](../works/arxiv-2606-19911.md) (2026) — Общая память траекторий популяции агентов с обучаемым ранжированием: в ALFWorld успех растёт с 47% до 64% и сокращаются шаги, в WebArena прирост скромнее.
  - ALFWorld: SR 47,1% без извлечения, 55,1% с одноступенчатым поиском по общему индексу и 64,3% с реранкером SVMRank; шаги сокращаются с 11,77 до 10,35 (Table 1).
  - WebArena: SR 18,2% → 20,5%, шаги 21,99 → 20,26 (одноступенчатый поиск); улучшение скромнее, чем на ALFWorld.
  - Экономия токенов на успешную задачу: −33,5% и −27,7% на ALFWorld, −34,2% и −10,7% на WebArena (GPT-OSS-20B и Qwen3-32B, Table 9).
  - Индекс собирает траектории 35–37 производителей, которые используют 34 потребителя; базовая модель-извлекатель — E5-Base, бюджет извлечения 1 (top-1 из 20).
  - Авторы не моделируют злонамеренных производителей и не измеряют благосостояние производителей; результаты ограничены двумя бенчмарками.
- [Organizational Memory for Agentic Business Process Execution](../works/arxiv-2607-03228.md) (2026) — Организационная память как общий управляемый слой правил для агентов закупок: 10 сценариев P2P, соответствие политике 88–95% у памяти против 70–80% у RAG и 30% без знаний.
  - Proof-of-concept: соответствие политике (PCR) 88% у организационной памяти с GPT-4.1 и 95% с Claude Sonnet 4.5, против 70–80% у RAG и 30% без доступа к знаниям (Figure 3).
  - RAG пропускает поперечные правила (например, обязательный центр затрат из финансовой политики), которые не близки по смыслу к запросу.
  - Ошибки памяти в основном — чрезмерные отказы из-за неточно извлечённого атома (§6.2).
  - Оценка на одном синтетическом процессе (purchase-to-pay), 9 PDF-документах и 10 сценариях; авторы прямо называют результаты предварительными.
  - Качество исполнения сильно зависит от точности извлечения и курирования атомов; курирование предполагает человеческую проверку изменений (§5.2, §7).
- [Большие языковые модели](../works/web-ipu-ru-11912d9943.md) (2026) — Официальная страница ИПУ РАН о больших языковых моделях/контексте Лаборатории 57.
  - Даёт организационный и теоретический контекст активных систем.
  - Это не эмпирическое исследование LLM-агентных обществ.
- [Talk Isn’t Always Cheap: Understanding Failure Modes in Multi-Agent Debate](../works/arxiv-2509-05396.md) (2025) — Авторы показывают, что многораундовый дебат способен снижать точность: более сильные модели иногда меняют правильный ответ на неправильный под влиянием peers, даже когда сильных участников большинство.
  - §5 показывает деградацию accuracy в некоторых настройках по мере роста раундов, в том числе когда сильных моделей большинство.
  - §6 разделяет возможные механизмы: sequential revision, social conformity, sycophancy, влияние типа модели и задачи.
  - Из abstract достоверно следует факт переходов от верного к неверному и склонность к согласию с peers
  - здесь не утверждается, что любой debate ухудшает точность.
  - Количественные показатели необходимо читать в таблицах по составу/benchmark
- [Теория аргументационных коммуникаций и большие языковые модели](../works/web-mlsd2025-ipu-ru-044255dc4c.md) (2025) — Материал о теории аргументационной коммуникации и больших языковых моделях.
  - Поддерживает анализ аргументации и передачи сообщений между агентами.
  - Статус/масштаб эмпирической проверки следует отличать от теоретического содержания.
- [StanfordHCI/genagents](../works/github-stanfordhci-genagents.md) (2024) — Код архитектуры генеративных агентов, которые отвечают на опросы от имени реальных людей на основе качественных интервью и демографического банка GSS.
  - README: агенты строятся по качественным интервью о жизни людей и воспроизводят ответы этих людей на социально-научные измерения; заявлено около 2000 часов интервью и 1000 агентов (в полный банк не публикуется).
  - В открытом репозитории есть банк демографических агентов по General Social Survey (GSS) более 3000 агентов и один пример агента-автора; имена и адреса в GSS-банке, по README, вымышленные.
  - Открытый код решает задачи опросов: категориальные, числовые и открытые ответы, память (memory stream) и рефлексия; многоагентной среды или взаимодействия агентов между собой в README не описано.
  - Доступ к полному банку ограничен по соображениям приватности: агрегированные данные по фиксированным задачам и индивидуальные ответы по открытым задачам по запросу с этической проверкой.
- [When LLMs Play the Telephone Game: Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings](../works/arxiv-2407-04503.md) (2024) — Telephone-game transmission chains измеряют, как свойства текста изменяются, когда один LLM получает результат предыдущего.
  - Telephone-game transmission chains измеряют, как свойства текста изменяются, когда один LLM получает результат предыдущего.
  - Для toxicity, positivity, difficulty и length авторы варьируют начальный материал, prompt, модель и размер.
  - Многократная передача усиливает культурные attractors; открытые задачи с большей свободой чаще смещают тексты, а toxicity демонстрирует более сильную притягательность, чем length.
- [Mindstorms in Natural Language-Based Societies of Mind](../works/arxiv-2305-17066.md) (2023) — NLSOM организует языковых и визуальных экспертов в иерархическую систему, где они обмениваются сообщениями на естественном языке.
  - На A-OKVQA иерархический NLSOM показывает точность 67,42%.
  - Увеличение числа визуальных агентов с одного до трёх постепенно повышает результат; демократическое голосование уступает монархической схеме.
  - На TARA после десяти раундов Sentence-BERT similarity составляет 20,6 против 11,3 у BLIP2; авторы отмечают необходимость систематической оценки.
- [Developing an Open-Ended Cultural Evolution Model Using LLM Agents](../works/doi-10-11517-pjsai-jsai2025-0-3o1os44a03.md) (2025) — Работа описывает модель культурной эволюции в популяции LLM, где агенты создают и передают повествования в условиях индивидуального и социального обучения.
  - Работа описывает модель культурной эволюции в популяции LLM, где агенты создают и передают повествования в условиях индивидуального и социального обучения.
  - Сравнение стратегий передачи на 25 агентах демонстрирует, что коллективное обучение может поддерживать вариативность и сюжетную эволюцию.
  - Это короткая конференционная публикация, поэтому детализация протокола и статистических тестов ограничена.
- [davidguzmanp/SanctSim](../works/github-davidguzmanp-sanctsim.md) (год не установлен) — Код/стенд SanctSim для статьи arXiv:2506.23276; использовать как implementation artifact, не отдельный результат.
  - Репозиторий содержит код/конфигурации, перечисленные в README.
  - Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
  - Результат относится только к указанной среде и условиям работы.
- [NeoGendaijin/NormGame_LLM](../works/github-neogendaijin-normgame_llm.md) (год не установлен) — Репозиторий реализации LLM Norm Game; экспериментальные выводы требуют ссылки на связанную статью.
  - Репозиторий содержит код/конфигурации, перечисленные в README.
  - Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
  - Результат относится только к указанной среде и условиям работы.
- [репозиторий экспериментов](../works/github-willis-richard-emergent_llm.md) (год не установлен) — Исходный код экспериментов сотен LLM-агентов; статья и результаты в arXiv:2602.16662.
  - Репозиторий содержит код/конфигурации, перечисленные в README.
  - Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
  - Результат относится только к указанной среде и условиям работы.
- [Conversable Complexity: Agentic LLM Collectives as Interpretable Substrates](../works/arxiv-2607-01047.md) (2026; приоритет предварительный) — Это перспективная статья предлагает понимать разговорные LLM-коллективы как экспериментальные субстраты для изучения complexity и искусственной жизни.
- [Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation](../works/arxiv-2604-18005.md) (2026; приоритет предварительный) — Исследование проверяет, расширяет ли мультиагентное взаимодействие пространство идей или приводит к семантическому схлопыванию.
- [Emergent Languages in Populations of Language Model Agents: From Token Efficiency to Oversight Evasion](../works/arxiv-2605-31170.md) (2026; приоритет предварительный) — Авторы анализируют посты Moltbook, где агенты предлагают новые языки или кодированные протоколы.
- [Evaluating Collective Behaviour of Hundreds of LLM Agents](../works/arxiv-2602-16662.md) (2026; приоритет предварительный) — Предложен framework для анализа поведения популяций сотен LLM в трёх повторяющихся социальных дилеммах.
- [GlossoGen: Emergent Language in Complex Multi-Agent LLM Interactions](../works/arxiv-2609-01491.md) (2026; приоритет предварительный) — GlossoGen — платформа для изучения того, как язык формируется между агентами, которым нужно координироваться под частичной наблюдаемостью и временным/коммуникационным давлением.
- [How large language models judge and influence human cooperation](../works/doi-10-1093-pnasnexus-pgag297.md) (2026; приоритет предварительный) — Авторы извлекают нормы косвенной взаимности из решений 21 LLM по 43 200 искусственным социальным ситуациям, после чего подставляют полученные вероятностные нормы в эволюционно-игровую модель кооперации.
- [Knowledge-Centric Self-Improvement](../works/arxiv-2607-19592.md) (2026; приоритет предварительный) — В системе knowledge-centric self-improvement постоянно меняется общая курируемая база знаний, а агенты остаются временными и stateless.
- [Moral Hazard in Multi-Agent Language Models](../works/arxiv-2607-23982.md) (2026; приоритет предварительный) — Работа тестирует moral hazard в задачах с агентами, где один участник располагает скрытым фактом и должен заплатить цену за его раскрытие.
- [Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling](../works/acl-2026.acl-srw.1.md) (2026; приоритет предварительный) — Сравниваются четыре стратегии инференсного масштабирования — self-consistency, self-refinement, debate и mixture-of-agents (MoA) — на MMLU-Pro и BIG-Bench Hard при сопоставлении вычислительных затрат.
- [TerraLingua: Emergence and Analysis of Open-endedness in LLM Ecologies](../works/arxiv-2603-16910.md) (2026; приоритет предварительный) — TerraLingua — длительно работающая двумерная ecology агентов, где ограниченные ресурсы и продолжительность жизни связывают действия отдельного агента с выживанием и будущими условиями.
- [When LLMs Develop Languages: Symbolic Communication for Efficient Multi-Agent Reasoning](../works/arxiv-2606-29354.md) (2026; приоритет предварительный) — CLSR предлагает агентам самостоятельно создавать компактные Language Symbolism Frameworks (LSF) и использовать их как протокол обмена при решении задач.
- [AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation](../works/arxiv-2507-21166.md) (2025; приоритет предварительный) — AGORA проверяет, может ли ансамбль небольших языковых моделей улучшать математическое рассуждение за счёт обмена решениями, коллективной оценки и обучения на решениях коллег.
- [An Empirical Study of Group Conformity in Multi-Agent Systems](../works/arxiv-2506-01332.md) (2025; приоритет предварительный) — Авторы проводят более 2 500 дебатов по пяти общественным вопросам, чтобы измерить, как нейтральный LLM-агент меняет сторону под влиянием групп сторонников и противников.
- [Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games](../works/arxiv-2506-23276.md) (2025; приоритет предварительный) — Работа сопоставляет обычные и reasoning-модели в повторяющейся игре общественного блага с выбором института и затратным применением поощрений/наказаний.
- [Scaling Large Language Model-Based Multi-Agent Collaboration](../works/openreview-gFrVsxAEO4.md) (2025; приоритет предварительный) — MACNET размещает агентoв-исполнителей в узлах ориентированного ациклического графа, а агентов-критиков — на рёбрах; система решает задачи и сравнивает структуры сети, включая масштаб более 1 000 агентов.
- [The Lock-in Hypothesis: Stagnation by Algorithm](../works/arxiv-2506-06166.md) (2025; приоритет предварительный) — Работа формализует взаимную обратную связь человека и AI как потенциальную эхо-камеру: модели усваивают убеждения, влияют на людей, а затем переобучаются на изменённых взглядах пользователей.
- [The Social Cost of Intelligence: Emergence, Propagation, and Amplification of Stereotypical Bias in Multi-Agent Systems](../works/arxiv-2510-10943.md) (2025; приоритет предварительный) — Авторы предлагают раздельно измерять возникновение, распространение и усиление стереотипных ответов в многоагентных LLM-системах.
- [Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning](../works/arxiv-2406-00392.md) (2024; приоритет предварительный) — RL-агенты накапливают навыки из поколения в поколение, совмещая независимое исследование среды с социальным обучением.
- [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](../works/arxiv-2404-04286.md) (2024; приоритет предварительный) — Работа применяет байесовскую теорию итеративного обучения к передачам между поколениями LLM: она предсказывает, когда небольшие смещения моделей усиливаются или ослабевают по цепочке «учитель—ученик».
- [Improving Factuality and Reasoning in Language Models through Multiagent Debate](../works/arxiv-2305-14325.md) (2023; приоритет предварительный) — Авторы предлагают несколько копий языковой модели, которые независимо отвечают на вопрос, затем читают и критикуют ответы друг друга и пересматривают их в несколько раундов.

### Фон и смежные материалы (7)

- [drudilorenzo/generative_agents](../works/github-drudilorenzo-generative_agents.md) (год не установлен) — Форк кода Stanford Generative Agents; сам по себе не является отдельной работой, изменения относительно upstream требуют проверки.
  - Это не отдельная публикация.
  - Полезность зависит от проверки fork diff и версии upstream.
- [Agent Scaling (code and artifacts for «Capable language models can outgrow the benefits of collaboration»)](../works/github-ybkim95-agent-scaling.md) (2026; приоритет предварительный) — Официальные артефакты к статье Nature Machine Intelligence о том, когда рост возможностей модели уменьшает выигрыш от multi-agent collaboration.
- [Evaluation code for «Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling»](../works/github-multi-agent-llms-lm-evaluation-harness.md) (2026; приоритет предварительный) — Официальный evaluation harness к ACL 2026 статье о качестве и compute Pareto-front для CoT/self-consistency/self-refinement/debate/MoA.
- [GlossoGen (официальный GitHub: платформа контролируемых экспериментов с командами LLM)](../works/github-agencyenterprise-glossogen.md) (2026; приоритет предварительный) — Официальная платформа GlossoGen для повторяемых сценариев LLM-команд, event-log, вмешательств swap/fork и анализа коммуникации под бюджетом сообщений.
- [GlossoGen paper companion: code and data for emergent language in multi-agent LLM interactions](../works/github-esteng-emergent_communication.md) (2026; приоритет предварительный) — Код и данные GlossoGen: скрипты для воспроизведения результатов о возникновении языка, передаче конвенций, description length и морфосинтаксисе.
- [Does Socialization Emerge in AI Agent Society? A Case Study of Moltbook](../works/web-caisconf-org-ab467b6f70.md) (2026; приоритет предварительный) — Запись конференции описывает анализ Moltbook как социальной платформы LLM-агентов и заявляет признаки социализации — стабилизацию семантики, устойчивость влияния и коллективное формирование консенсуса.
- [OSF](../works/web-osf-io-2f61c778cf.md) (год не установлен; приоритет предварительный) — В исходном корпусе найден источник; содержательный пересказ требует доступного первичного текста. Ссылки и исходные сведения сохранены ниже.

## Таблица работ темы

| Работа | Год | Тип | Агентов | Проверка |
|---|---:|---|---|---|
| [Cultural Evolution of Cooperation among LLM Agents](../works/arxiv-2412-10270.md) | 2024 | исследование | 12 | полный текст |
| [Generative Agents: Interactive Simulacra of Human Behavior](../works/arxiv-2304-03442.md) | 2023 | исследование | 25 | полный текст |
| [Searching for Structure: Investigating Emergent Communication with Large Language Models](../works/arxiv-2412-07646.md) | 2025 | исследование | не найдено в карточке | полный текст |
| [Governed Collaborative Memory as Artificial Selection in LLM-Based Multi-Agent Systems](../works/arxiv-2605-04264.md) | 2026 | исследование | не опубликовано | полный текст |
| [Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems](../works/arxiv-2604-03295.md) | 2026 | исследование | не опубликовано | полный текст |
| [Generative Emergent Communication: Large Language Model is a Collective World Model](../works/arxiv-2501-00226.md) | 2025 | исследование | не опубликовано | полный текст |
| [Shaping Shared Languages: Human and Large Language Models’ Inductive Biases in Emergent Communication](../works/doi-10-24963-ijcai-2025-1144.md) | 2025 | исследование | см. статью | полный текст |
| [MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning](../works/arxiv-2411-12977.md) | 2024 | исследование | не опубликовано | полный текст |
| [google-deepmind/concordia](../works/github-google-deepmind-concordia.md) | 2023 | проект / код | не опубликовано (зависит от сценария; в README приведён пример с четырьмя персонажами) | документация проекта |
| [Machine Culture](../works/arxiv-2311-11388.md) | 2023 | исследование | не опубликовано | полный текст |
| [ORALMEM: Post-Witness Collective Memory in LLM Societies](../works/openreview-j9VyoX6dex.md) | 2026 | исследование | не опубликовано | аннотация |
| [BAI-LAB/MAS-OS](../works/github-bai-lab-mas-os.md) | — | проект / код | зависит от конфигурации проекта | из прежних обзоров |
| [OpenBMB/ChatDev](../works/github-openbmb-chatdev.md) | — | проект / код | зависит от конфигурации | из прежних обзоров |
| [sii-research/SocioVerse2](../works/github-sii-research-socioverse2.md) | — | проект / код | зависит от сценария | из прежних обзоров |
| [полный текст PDF на сайте MIT Media Lab](../works/web-dam-prod-media-mit-edu-073d188d54.md) | — | веб-материал | см. статью | из прежних обзоров |
| [Collaborative OS of Multi-Agent Systems (MAS-OS)](../works/acl-2026.findings-emnlp.1716.md) | 2026 | исследование | не опубликовано в карточке (исполнители с заранее заданными ролями) | полный текст |
| [From Signals to Structure: How Memory Architecture Drives Language Emergence in LLM Agents](../works/arxiv-2607-00233.md) | 2026 | исследование | 2 | полный текст |
| [Multi-Agent Transactive Memory](../works/arxiv-2606-19911.md) | 2026 | исследование | 35–37 производителей и 34 потребителя на каждом бенчмарке | полный текст |
| [Organizational Memory for Agentic Business Process Execution](../works/arxiv-2607-03228.md) | 2026 | исследование | 1 агент закупок (сравнение трёх установок, одна модель за раз) | полный текст |
| [Большие языковые модели](../works/web-ipu-ru-11912d9943.md) | 2026 | веб-материал | не применимо | полный текст |
| [Talk Isn’t Always Cheap: Understanding Failure Modes in Multi-Agent Debate](../works/arxiv-2509-05396.md) | 2025 | исследование | не опубликовано | полный текст |
| [Теория аргументационных коммуникаций и большие языковые модели](../works/web-mlsd2025-ipu-ru-044255dc4c.md) | 2025 | веб-материал | не применимо | полный текст |
| [StanfordHCI/genagents](../works/github-stanfordhci-genagents.md) | 2024 | проект / код | 1000 интервью-агентов (полный банк не опубликован); более 3000 демографических агентов GSS в открытом банке | документация проекта |
| [When LLMs Play the Telephone Game: Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings](../works/arxiv-2407-04503.md) | 2024 | исследование | не опубликовано | полный текст |
| [Mindstorms in Natural Language-Based Societies of Mind](../works/arxiv-2305-17066.md) | 2023 | исследование | не опубликовано | полный текст |
| [Developing an Open-Ended Cultural Evolution Model Using LLM Agents](../works/doi-10-11517-pjsai-jsai2025-0-3o1os44a03.md) | 2025 | исследование | 25 | аннотация |
| [davidguzmanp/SanctSim](../works/github-davidguzmanp-sanctsim.md) | — | проект / код | зависит от конфигурации проекта | из прежних обзоров |
| [NeoGendaijin/NormGame_LLM](../works/github-neogendaijin-normgame_llm.md) | — | проект / код | зависит от конфигурации проекта | из прежних обзоров |
| [репозиторий экспериментов](../works/github-willis-richard-emergent_llm.md) | — | проект / код | зависит от конфигурации проекта | из прежних обзоров |
| [Conversable Complexity: Agentic LLM Collectives as Interpretable Substrates](../works/arxiv-2607-01047.md) | 2026 | исследование | — | полный текст |
| [Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation](../works/arxiv-2604-18005.md) | 2026 | исследование | — | полный текст |
| [Emergent Languages in Populations of Language Model Agents: From Token Efficiency to Oversight Evasion](../works/arxiv-2605-31170.md) | 2026 | исследование | — | полный текст |
| [Evaluating Collective Behaviour of Hundreds of LLM Agents](../works/arxiv-2602-16662.md) | 2026 | исследование | — | полный текст |
| [GlossoGen: Emergent Language in Complex Multi-Agent LLM Interactions](../works/arxiv-2609-01491.md) | 2026 | исследование | — | полный текст |
| [How large language models judge and influence human cooperation](../works/doi-10-1093-pnasnexus-pgag297.md) | 2026 | исследование | — | полный текст |
| [Knowledge-Centric Self-Improvement](../works/arxiv-2607-19592.md) | 2026 | исследование | — | полный текст |
| [Moral Hazard in Multi-Agent Language Models](../works/arxiv-2607-23982.md) | 2026 | исследование | — | полный текст |
| [Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling](../works/acl-2026.acl-srw.1.md) | 2026 | исследование | — | полный текст |
| [TerraLingua: Emergence and Analysis of Open-endedness in LLM Ecologies](../works/arxiv-2603-16910.md) | 2026 | исследование | — | полный текст |
| [When LLMs Develop Languages: Symbolic Communication for Efficient Multi-Agent Reasoning](../works/arxiv-2606-29354.md) | 2026 | исследование | — | полный текст |
| [AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation](../works/arxiv-2507-21166.md) | 2025 | исследование | — | полный текст |
| [An Empirical Study of Group Conformity in Multi-Agent Systems](../works/arxiv-2506-01332.md) | 2025 | исследование | — | полный текст |
| [Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games](../works/arxiv-2506-23276.md) | 2025 | исследование | — | полный текст |
| [Scaling Large Language Model-Based Multi-Agent Collaboration](../works/openreview-gFrVsxAEO4.md) | 2025 | исследование | — | полный текст |
| [The Lock-in Hypothesis: Stagnation by Algorithm](../works/arxiv-2506-06166.md) | 2025 | исследование | — | полный текст |
| [The Social Cost of Intelligence: Emergence, Propagation, and Amplification of Stereotypical Bias in Multi-Agent Systems](../works/arxiv-2510-10943.md) | 2025 | исследование | — | полный текст |
| [Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning](../works/arxiv-2406-00392.md) | 2024 | исследование | — | полный текст |
| [Bias Amplification in Language Model Evolution: An Iterated Learning Perspective](../works/arxiv-2404-04286.md) | 2024 | исследование | — | полный текст |
| [Improving Factuality and Reasoning in Language Models through Multiagent Debate](../works/arxiv-2305-14325.md) | 2023 | исследование | — | полный текст |
| [drudilorenzo/generative_agents](../works/github-drudilorenzo-generative_agents.md) | — | проект / код | наследует конфигурацию upstream | из прежних обзоров |
| [Agent Scaling (code and artifacts for «Capable language models can outgrow the benefits of collaboration»)](../works/github-ybkim95-agent-scaling.md) | 2026 | проект / код | — | документация проекта |
| [Evaluation code for «Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling»](../works/github-multi-agent-llms-lm-evaluation-harness.md) | 2026 | проект / код | — | документация проекта |
| [GlossoGen (официальный GitHub: платформа контролируемых экспериментов с командами LLM)](../works/github-agencyenterprise-glossogen.md) | 2026 | проект / код | — | документация проекта |
| [GlossoGen paper companion: code and data for emergent language in multi-agent LLM interactions](../works/github-esteng-emergent_communication.md) | 2026 | проект / код | — | документация проекта |
| [Does Socialization Emerge in AI Agent Society? A Case Study of Moltbook](../works/web-caisconf-org-ab467b6f70.md) | 2026 | веб-материал | — | аннотация |
| [OSF](../works/web-osf-io-2f61c778cf.md) | — | веб-материал | — | из прежних обзоров |
