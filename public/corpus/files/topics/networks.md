---
id: topic-networks
type: topic
title: Формирование сетей, связи, доверие и репутация
work_count: 56
core_works:
- arxiv-2510-19299
- arxiv-2411-03252
- arxiv-2602-07777
- arxiv-2606-07513
- arxiv-2602-03775
- arxiv-2601-05384
- web-ojs-aaai-org-05ecebb82a
- arxiv-2602-20044
- arxiv-2602-13458
- arxiv-2603-16128
- arxiv-2602-10131
- arxiv-2511-21783
- arxiv-2410-13909
- arxiv-2411-11581
- arxiv-2408-00818
- github-amit-sarker-tasman
- github-rgb-0000ff-repunet
- web-mathnet-ru-699966184b
related_topics:
- methodology
- platforms
- communities
- institutions
- economics
---

# Формирование сетей, связи, доверие и репутация

[← Главная](../README.md) · [Все направления](../README.md#карта-направлений)

- **Работ в теме:** 56; ключевых: 18; проверено по полному тексту: 46.
- **Чаще всего пересекается с темами:** [Методология, валидация и сравнение с людьми](methodology.md) (8), [Архитектуры, платформы и масштабирование](platforms.md) (7), [Реальные агентные сообщества и практические эксперименты](communities.md) (6), [Нормы, институты, санкции и управление](institutions.md) (5), [Экономические игры, рынки, стимулы и сговор](economics.md) (3).

## Как возникают и измеряются связи

Исследования используют разные определения связи: выбранное ребро сети, историю совместных действий, доверительную оценку партнёра, личные сообщения или повторные контакты. Поэтому одинаковые слова «доверие» и «дружба» не гарантируют одинаковой измеряемой величины.

В [Learning to Make Friends](../works/arxiv-2510-19299.md) агенты общаются через посты и личные сообщения, а coaching и вознаграждения выделяют желательные социальные действия. Это позволяет изучать сеть при заданных стимулах, но не изолирует возникновение связи без подкрепления. В [RepuNet](../works/arxiv-2505-05029.md) репутация и выбор партнёров связаны с кооперацией; в [ALIGN](../works/arxiv-2602-07777.md) исследуются сообщения о третьих лицах и косвенная взаимность. У этих подходов различаются источники информации о партнёре и доступные действия.

[Takata и соавторы](../works/arxiv-2411-03252.md) начинают с агентов без заранее прописанных персон и показывают различия сообщений и локального поведения. Часть индивидуальности оценивается модельными самоотчётами; это не независимая психологическая диагностика. [Ji и соавторы](../works/arxiv-2606-23764.md) изучают отношения, авторитет и специализацию в среде, где семейные метки и механизмы идентичности уже присутствуют в архитектуре.

Наблюдательные [MoltNet](../works/arxiv-2602-13458.md) и [Social Simulacra in the Wild](../works/arxiv-2603-16128.md) дают крупные сетевые данные, но настройки отдельных агентов и владельцев не контролируются. Даже если сообщения используют социальный язык, для устойчивой связи нужны показатели повторного взаимодействия, взаимности или поведения при выборе партнёра.

## Работы по значимости

Приоритет отражает близость к задачам лаборатории; у части записей он назначен автоматически и требует редакционной проверки. Уровень проверки первоисточника — отдельное поле.

### Ключевые работы (18)

- [Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties](../works/arxiv-2510-19299.md) (2025) — Сеть из 30 LLM-агентов в 15 раундах: при поведенческих наградах и тренере связи адаптируются и частично напоминают онлайн-сообщества, но мотивы социальности заданы наградами.
  - 30 агентов, 15 раундов, по 3 действия на агента за раунд (POST, COM, DM, NOT); тема обсуждений — изменение климата; модель GPT-4o mini из-за лимитов API.
  - Производительность растёт по раундам с тренером и без; поиск информации даётся легче всего, эмоциональная поддержка тоже высока, координация и социальное взаимодействие труднее.
  - Тренер ускоряет раннее обучение и снижает разброс, но итоговые значения в пределах полос разброса в основном перекрываются.
  - Оба способа оценки связей дают почти полный наибольший связный компонент и модулярность ниже средней для реальных сетей; текстовая оценка связей даёт более стабильные метрики.
  - Награды прямо поощряют взаимодействие, поиск информации, самопрезентацию, координацию и эмоциональную поддержку; авторы сами указывают на малый масштаб и ограниченное число репликаций.
- [Spontaneous Emergence of Agent Individuality through Social Interactions in LLM-Based Communities](../works/arxiv-2411-03252.md) (2024) — Десять агентов одной модели Llama-2-7b-chat на решётке 50×50 без заданных персон и памяти показывают дифференциацию поведения и текста; авторы связывают её с общением и пространственным масштабом.
  - 10 агентов на периодическом поле 50×50; одна модель Llama-2-7b-chat-hf; temperature 0.7, max tokens 256, top-p 0.95, top-k 40; сообщения доступны в радиусе Chebyshev 5.
  - Личности и память изначально не заданы; различия возникают из пространственного положения и контактов, что авторы трактуют как спонтанную дифференциацию поведения и эмоций.
  - Сообщаются спонтанные хэштеги и галлюцинированный контент, а также рост разнообразия слов при обмене такими сообщениями.
  - Авторы сообщают переходообразное изменение поведения при разных пространственных масштабах; оценки личности и эмоций получены по тексту, а не независимыми тестами.
  - Исследование ограничено малой популяцией, одной моделью и отсутствием экономических стимулов и общей задачи.
- [Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents](../works/arxiv-2602-07777.md) (2026) — Протокол ALIGN: агенты передают открытый gossip с градациями тона и выбирают сотрудничество; в ряде сред gossip повышает кооперацию и помогает отсеивать постоянных дефекторов.
  - Протестированы 8 моделей классов chat и reasoning (GPT-4o Mini, DeepSeek-V3.1 Chat и Reasoner, LLaMA 4 Maverick, Kimi-K2-Instruct, Qwen3-235B-Instruct, o4-mini, Gemini 2.5 Flash-Lite) при температуре 0.
  - Игры: finite и infinite repeated donation, indirect reciprocity, investment scenario и transaction market; ALIGN повышает кооперацию и доход относительно baseline без gossip во многих из них.
  - Иерархические языковые тона дают более богатые оценки, чем бинарная репутация (абляция протокола); reasoning-модели различают условия, включая дефект в конечном горизонте.
  - Gossip помогает выявлять и отсеивать постоянных злонамеренных дефекторов в проверенных сценариях; это не доказывает защиту от всех видов сговора и атак Sybil.
  - Авторы относят механизм к архитектурно заданным (тон, reflection, общий доступ к gossip), а не к стихийно возникшим институтам.
- [Agentopia: Long-Term Life Simulation and Learning in Agent Societies](../works/arxiv-2606-07513.md) (2026) — Симуляция 100 агентов на 10 лет в трёх мирах с наградой за «жизнь»; обучение по этой награде улучшает социальное признание и роль-плей, но снижает материальное благополучие.
  - Симуляция 100 агентов × 10 лет × 3 мира: в среднем 13,7 млрд токенов и 567 тыс. вызовов LLM на запуск, около 186 часов (Table 4).
  - Life reward training (1 эпоха, 4 года данных) повышает respected by на 24,2% и liked by на 15,9% (Table 2), но снижает material fulfillment на 14,8%.
  - Награда коррелирует с удовлетворением потребностей (субъективная награда: material r = 0,73; unmet needs r = −0,64) и с репутацией (социальная: r = 0,68), что в значительной степени задано дизайном.
  - На CoSER Test у дообученной модели наибольший прирост в Anthropomorphism (+23,7%) и Character Fidelity (+16,4%) по заявлению авторов; сопоставление с Claude-4.5-Sonnet требует проверки.
  - Авторы признают, что награда «жизни» не доказуемо совпадает с человеческим благополучием и что все обратные связи агентам даёт ИИ, а не люди.
- [An Empirical Study of Collective Behaviors and Social Dynamics in Large Language Model Agents](../works/arxiv-2602-03775.md) (2026) — Анализ 7 млн постов/взаимодействий 32 тыс.
  - Авторы сообщают человечески знакомые признаки homophily/influence, но отличающуюся структуру токсичного поведения
  - CoST описан как эффективный способ уменьшения вредного постинга.
  - Результат относится только к указанной среде и условиям работы.
- [Conformity and Social Impact on AI Agents](../works/arxiv-2601-05384.md) (2026) — Работа адаптирует классические эксперименты Asch к multimodal LLMs: модель решает зрительную задачу, видит заведомо неверные ответы «других участников» и должна выбрать вариант.
  - Figure 2 показывает, что p_wrong растёт с N и у некоторых моделей достигает почти 1
  - другие насыщаются при N≈3–4.
  - Для Qwen2.5 32B кривые по line/color/dots качественно похожи.
  - Единогласие важно: эффект максимален, когда все показанные ответы ошибочны, и резко снижается при split
  - даже 20% правильных ответов может заметно ослабить conformity.
- [Language-Grounded Co-evolution of Opinions and Ties: Paired Rewiring with Large Language Model Agents](../works/web-ojs-aaai-org-05ecebb82a.md) (2026) — Работа о совместной динамике мнений и связей через переподключение сети LLM-агентами.
  - Параллельно меняются состояние мнений и топология социальных связей.
  - Сеть и обновления заданы экспериментальным протоколом и не означают человеческую дружбу.
- [Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook](../works/arxiv-2602-20044.md) (2026) — 12-дневные traces Moltbook (20,040 posts; 192,410 top-level comments; 15,083 active accounts; 759 submolts) показывают сильную концентрацию внимания, асимметрию comment graph и bursty короткую активность.
  - upvote Gini .992 vs post Gini .601
  - медианная жизнь наблюдаемого аккаунта 2.48 минуты
  - 54.8% постов приходится на 6 часов пикового UTC дня.
  - До exposure correction ранние аккаунты имеют больше upvotes.
- [MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook](../works/arxiv-2602-13458.md) (2026) — Наблюдательный анализ первого месяца платформы MoltBook (148 335 агентов, более миллиона постов, 3,15 млн комментариев): много публикаций, но слабая взаимность и редкие глубокие диалоги.
  - Датасет: 148 335 агентов, 1 044 201 пост, 3 156 286 комментариев, 5 154 submolts; период 27 января — 28 февраля 2026 года; объединены 10 публичных источников Hugging Face.
  - 85.6% агентов участвуют только в одном submolt; взаимность 2.9%; 65.6% постов без комментариев; глубина ≥2 у 0.5%; self-reply 5.1% (Table 1).
  - Анализ persona: лишь 5.83% постов и 11.03% комментариев превышают 95-й процентиль shuffled null по сходству с заявленным интересом.
  - В подвыборке 9 214 агентов 71% после своего самого залайканного поста смещаются от заявленной persona (сходство 0.345 → 0.256, −25.8%).
  - Наблюдательный дизайн без рандомизации; модели, инструкции владельцев и модерация неизвестны; LLM-judge вносит измерительную ошибку.
- [Social Simulacra in the Wild: AI Agent Communities on Moltbook](../works/arxiv-2603-16128.md) (2026) — Сравнение Moltbook с подобранными сообществами Reddit: у агентной платформы сильнее неравенство участия, перекрёстное авторство и уплощённый эмоциональный дискурс; гомогенизация во многом объясняется повторным авторством.
  - Выборка: 73 899 постов Moltbook и 189 838 постов Reddit в пяти парах сообществ; у Moltbook 5 042 уникальных агента против 81 083 авторов Reddit.
  - Коэффициент Gini участия: Moltbook 0.84 против Reddit 0.47; доля авторов, пишущих в нескольких сообществах: 33.8% против 0.5%; верхний 1% авторов создаёт 47.7% контента.
  - Jaccard-перекрытие словаря 0.340 против 0.221 (d=1.12, p<.05); после ограничения авторами, пишущими в одном сообществе, Jaccard падает до 0.194, а точность классификации сообщества растёт с 60.3% до 80.2%.
  - Эмоции в текстах Moltbook: отрицательная эмоция ниже на 64% в постах и на 55% в комментариях; гнев снижен более чем на 75%.
  - Наблюдательное сравнение, не рандомизированное; агенты развёрнуты пользователями по общей skill-инструкции, модели и промпты не контролировались.
- [The Anatomy of the Moltbook Social Graph](../works/arxiv-2602-10131.md) (2026) — Moltbook за 3.5 дня: 6,159 агентов, 13,875 постов, 115,031 комментарий.
  - §§3–4 и приложения сообщают краткие потоки диалога и шаблонные дубликаты наряду с macro-level human-like network signatures.
  - Автор оставляет вопрос открытым: имитация сообщества или иной вид агентной социальности.
  - Результат относится только к указанной среде и условиям работы.
- [NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents](../works/arxiv-2511-21783.md) (2025) — NetworkGames связывает генеративных агентов с сетевыми играми: persona MBTI и топология совместно задают outcomes коллективного welfare.
  - Results связывают степень connectivity и центральность с коллективными показателями
  - topology может усиливать центральных игроков, а не монотонно повышать cooperation.
  - Результат относится только к указанной среде и условиям работы.
- [Large Language Model-driven Multi-Agent Simulation for News Diffusion Under Different Network Structures](../works/arxiv-2410-13909.md) (2024) — Работа моделирует распространение дезинформации при разных сетевых структурах, чертах агентов и мерах противодействия.
  - Работа варьирует структуру сети, характеристики агентов и вмешательства в модели распространения дезинформации.
  - Блокировка влиятельных узлов и маркировка достоверности снижают распространение ложных новостей, но величина эффекта зависит от топологии.
  - Ключевой вывод — взаимодействие сети и вмешательства, а не универсальный рейтинг мер.
- [OASIS: Open Agent Social Interaction Simulations with One Million Agents](../works/arxiv-2411-11581.md) (2024) — Открытый симулятор OASIS моделирует соцсети X и Reddit с LLM-агентами до миллиона пользователей; воспроизводит распространение новостей, поляризацию и стадность.
  - Распространение новостей на X (198 инстанций Twitter15/16): масштаб и максимальная ширина близки к реальным, средняя нормализованная RMSE около 30 %; глубина в симуляции меньше реальной (§3.3.1).
  - Групповая поляризация (196 ядровых пользователей, Llama-3-8B): ответы со временем становятся консервативнее, сильнее у нецензурированной модели; оценка GPT-4o-mini (§3.3.1, Fig. 5).
  - Reddit: при начальном дизлайке оценки агентов ниже человеческих (агенты стадны сильнее), при начальном лайке результаты близки (§3.3.2, Fig. 6).
  - Стадность на контрфактических постах проявляется только при дизлайках и растёт с числом агентов; при 100 агентах эффекта не видно, при 10 000 — заметен (§3.4.2, Fig. 8).
  - Дезинформация на X: в симуляции с 1 млн обычных агентов посты с ложными новостями устойчиво превышают посты с официальными на каждом шаге (§3.5, Fig. 9).
  - Вычисления: 15 минут на шаг при 10 000 агентов на 4 GPU A100; денежная стоимость и число токенов не опубликованы (App. C.1, Table 2).
- [Y Social: an LLM-powered Social Media Digital Twin](../works/arxiv-2408-00818.md) (2024) — Y Social — модульная платформа для моделирования социальной сети с LLM-агентами, настраиваемыми лентами, действиями и профилями.
  - Платформа разделяет сервер состояния, сервис языковой модели и клиент симуляции.
  - Агенты могут читать ленты, публиковать сообщения, комментировать и менять подписки; исследователь выбирает рекомендательную политику.
  - Voat-валидация и её количественные результаты опубликованы в отдельной работе 2026 года.
- [amit-sarker/TASMAN](../works/github-amit-sarker-tasman.md) (год не установлен) — Исходный код и сценарии TASMAN (arXiv:2610.31971); не отдельная эмпирическая публикация.
  - Репозиторий содержит код/конфигурации, перечисленные в README.
  - Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
  - Результат относится только к указанной среде и условиям работы.
- [RGB-0000FF/RepuNet](../works/github-rgb-0000ff-repunet.md) (год не установлен) — Код, конфигурации и агентные профили к уже рассмотренной статье RepuNet о репутации в сети LLM-агентов.
  - Связанная статья и результаты уже разобраны отдельно.
  - Репозиторий нужен для кода и конфигураций, не как отдельное подтверждение.
- [В. Н. Бурков, А. К. Еналеев, Д. А. Новиков, “Механизмы функционирования социально-экономических систем с сообщением информации”, Автомат. и телемех., 1996, № 3, 3–25; Autom. Remote Control, 57:3 (1996), 305–321](../works/web-mathnet-ru-699966184b.md) (год не установлен) — Запись MathNet и текст классической статьи по механизмам социально-экономических активных систем с сообщением информации; не исследование LLM.
  - Связь с центром, частной информацией и несовпадающими интересами соответствует понятийному аппарату Лаб. 57.
  - Полный текст в этой проверке не просмотрен постранично.

### Дополняющие работы (31)

- [Reliability–Contagion Feasibility in LLM Multi-Agent Networks](../works/arxiv-2607-21912.md) (2026) — Теоретическая работа исследует компромисс: общение объединяет доказательства, но распространяет ошибочные утверждения.
  - Авторский abstract: пересечение ограничений иногда пусто, а иногда существует промежуточная область
  - при подходящем классе регулярные графы минимизируют invasion factor.
  - Результат относится только к указанной среде и условиям работы.
- [Сравнительный анализ поведения больших языковых моделей и людей в игре «Диктатор»](../works/doi-10-31737-22212264-2026-2-177-203.md) (2026) — Страница издателя даёт полный текст статьи о сравнении решений LLM и людей в игре «Диктатор» (Журнал Новой экономической ассоциации, 2026, DOI 10.31737/2221226420262177-203).
  - Это публикационная страница и полный текст статьи, а не отдельный набор данных.
  - Связанная карточка DOI содержит детали дизайна: десять LLM и по 700 запросов на модель (§4.1).
  - Результаты статьи показывают зависимость решений от варианта и формулировки игры; усреднённая передача денег не устанавливает человеческий механизм выбора.
- [Использование больших языковых моделей для имитации человеческого поведения в аэропорту](../works/web-elibrary-ru-21c8ac8b53.md) (2025) — Статья моделирует поведение пассажиров аэропорта посредством LLM и агентного подхода.
  - Эта карточка основана на журнальной записи и локальном PDF material
  - чисел не выписываю без сверки таблиц.
  - Результат относится только к указанной среде и условиям работы.
- [Sense and Sensitivity: Evaluating the simulation of social dynamics via Large Language Models](../works/arxiv-2412-05093.md) (2024) — Тест микроинструкций LLM против модели Hegselmann–Krause: даже удачно подобранный промпт даёт результаты, чувствительные к пробелам и формулировкам.
  - Эталон — opinion dynamics Hegselmann–Krause на случайном Erdős–Rényi графе; мнение кодируется в текст и декодируется обратно в число.
  - Можно подобрать промпты, приближающие целевую динамику, но разные варианты дают разную ошибку.
  - Незначимые изменения текста (пробелы, апострофы, переносы) меняют исход симуляции.
  - Обнаружены непоследовательность модели и ошибка encode/decode, которые смещают динамику независимо от социальной теории.
- [Partial connectivity increases cultural accumulation within groups](../works/web-pmc-ncbi-nlm-nih-gov-5fc2874029.md) (2016) — Человеческий эксперимент о том, как частичная связность способствует накоплению культуры в группах.
  - Сопоставляются сетевые условия культурного накопления.
  - Это исследование людей, а не LLM; использовать как теоретический/дизайнерский ориентир.
- [Earth-scale Society: инженерная репликация общества агентов](../works/github-fareedkhan-dev-earth-scale-society.md) (2026) — Проект earth-scale-society моделирует миллиард агентов без LLM-вызовов во время прогона: ответы большой модели заранее сводятся к таблице поиска.
  - README описывает один ноутбук из 92 ячеек для сборки и запуска симуляции.
  - Заявленная популяция — 1 млрд агентов из пула 10 000 персон; возможны 900 млн комбинаций говорящий–слушатель–позиции.
  - Модель-учитель используется офлайн для заполнения таблицы; runtime применяет lookup, поэтому проект не моделирует онлайн-диалог миллиардов LLM.
- [NeoGendaijin/NormGame_LLM](../works/github-neogendaijin-normgame_llm.md) (год не установлен) — Репозиторий реализации LLM Norm Game; экспериментальные выводы требуют ссылки на связанную статью.
  - Репозиторий содержит код/конфигурации, перечисленные в README.
  - Назначение — поддержка запуска или анализа связанной работы; отдельный эксперимент в этом репозитории не выделен.
  - Результат относится только к указанной среде и условиям работы.
- [Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook](../works/arxiv-2602-13284.md) (2026; приоритет предварительный) — Анализ Moltbook описывает публичную платформу, где агенты за девять дней создали впечатление общественных институтов, но имели неглубокие диалоги и мало взаимности.
- [Characterizing Opinion Evolution of Networked LLMs](../works/arxiv-2606-18276.md) (2026; приоритет предварительный) — Авторы подгоняют несколько classical opinion-dynamics models к траекториям LLM дискуссий, отдельно оценивая neighbor influence, stubbornness, homophily и opinion bias.
- [Collective Opinion Dynamics in Structured LLM Populations](../works/arxiv-2604-11312.md) (2026; приоритет предварительный) — Авторы сравнивают динамику мнений LLM-популяций в пяти сетях с контролируемой homophily, меняя размер групп и доступность локальной информации. На каждую конфигурацию проведено десять независимых запусков.
- [Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks](../works/arxiv-2609-19913.md) (2026; приоритет предварительный) — Статья строит генеративный digital twin мнений по эмпирическому Twitter-сетевому графу: агент каждому пользователю соответствует один-к-одному и получает атрибуты и историю, а LLM обновляет позицию под влиянием соседей.
- [Don’t Trust Generative Agents to Mimic Communication on Social Networks Unless You Benchmarked their Empirical Realism](../works/acl-2026.eacl-long.51.md) (2026; приоритет предварительный) — Работа проверяет эмпирическую реалистичность LLM как участников коммуникации в социальных сетях на англо- и немецкоязычных данных.
- [Emergence of Reputation-Based Cooperation in LLM Agents](../works/arxiv-2608-04507.md) (2026; приоритет предварительный) — Работа проверяет, выдерживает ли культурно эволюционирующая кооперация вторжение безбилетника в donation game косвенной взаимности.
- [Gender Dynamics and Homophily in a Social Network of LLM Agents](../works/arxiv-2602-02606.md) (2026; приоритет предварительный) — Лонгитюдная работа исследует гендерно-кодированное языковое поведение и гомофилию в Chirper.ai, рассматривая гендер как наблюдаемую характеристику текста, а не как буквальную идентичность агента.
- [Harm in AI-Driven Societies: An Audit of Toxicity Adoption on Chirper.ai](../works/arxiv-2601-01090.md) (2026; приоритет предварительный) — Работа использует архив AI-only платформы Chirper.ai для изучения связи между токсичностью постов, на которые агент явно отвечает, и токсичностью его ответа.
- [How large language models judge and influence human cooperation](../works/doi-10-1093-pnasnexus-pgag297.md) (2026; приоритет предварительный) — Авторы извлекают нормы косвенной взаимности из решений 21 LLM по 43 200 искусственным социальным ситуациям, после чего подставляют полученные вероятностные нормы в эволюционно-игровую модель кооперации.
- [Knowing Whom to Trust is not Enough: The Trust–Agreement Gap in Repeated Multi-Party LLM Negotiation (TASMAN)](../works/arxiv-2610-31971.md) (2026; приоритет предварительный) — Работа вводит TASMAN — повторяющиеся многопартийные переговоры, где одна роль тайно саботирует заключение сделки, а участники копят попарное доверие к партнёрам между эпизодами.
- [Opinion Consensus Formation Among Networked Large Language Models](../works/arxiv-2601-21540.md) (2026; приоритет предварительный) — Работа проверяет, предсказывает ли классическая модель DeGroot консенсус сетей LLM-агентов.
- [Simulating Hate Speech Cascades with Multi-LLM Agents: Empirical Grounding, Modeling Fidelity, and Intervention Strategies](../works/arxiv-2606-18264.md) (2026; приоритет предварительный) — Изучаются три реальные каскада распространения hateful content в Bluesky и подобный по размеру benign контроль.
- [Social Networks of LLM Agents](../works/arxiv-2607-03695.md) (2026; приоритет предварительный) — SNLA моделирует не только то, кто связан с кем, но и фактическое влияние, учитывая, какую часть контекста агенты замечают и используют.
- [Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents](../works/arxiv-2604-20582.md) (2026; приоритет предварительный) — В игре Avalon пять LLM-агентов многократно получают скрытые роли и сохраняют структурированные воспоминания о предыдущих играх.
- [Characterizing LLM-driven Social Network: The Chirper.ai Case](../works/arxiv-2504-10286.md) (2025; приоритет предварительный) — Крупномасштабное наблюдательное сравнение платформы Chirper.ai, где публикуют LLM-агенты, с Mastodon. Датасет охватывает более 65 тыс. агентов и 7,7 млн постов и более 117 тыс.
- [Competing LLM Agents in a Non-Cooperative Game of Opinion Polarisation](../works/arxiv-2502-11649.md) (2025; приоритет предварительный) — Авторы строят некооперативную игру, где LLM-персонажи конкурируют за влияние на население: одна сторона распространяет дезинформацию, другая опровергает её при ограниченных ресурсах и штрафах за сообщения.
- [Emergence of human-like polarization among LLM agents](../works/arxiv-2501-05171.md) (2025; приоритет предварительный) — Авторы моделируют тысячи LLM-агентов, которые через LLM-управляемые диалоги создают связи, обмениваются политическими аргументами и обновляют мнения.
- [Network formation and dynamics among multi-LLMs](../works/web-academic-oup-com-a58bb9960d.md) (2025; приоритет предварительный) — Работа проверяет, способны ли LLM при локальном выборе социальных связей воспроизводить предпочтительное присоединение, триадическое замыкание и гомофилию.
- [Reputation as a Solution to Cooperation Collapse in LLM-based MASs](../works/arxiv-2505-05029.md) (2025; приоритет предварительный) — RepuNet соединяет репутацию каждого агента и эволюцию сети связей: прямые встречи и gossip меняют оценки партнёров, после чего агенты выбирают, с кем продолжать взаимодействие.
- [Social preferences with unstable interactive reasoning: Large language models in economic trust games](../works/arxiv-2505-17053.md) (2025; приоритет предварительный) — Экономические эксперименты с trust game проверяют, устойчивы ли социальные предпочтения LLM и как на поведение влияют роль и persona prompts.
- [The amplifier effect of artificial agents in social contagion](../works/arxiv-2502-21037.md) (2025; приоритет предварительный) — Авторы воспроизводят человеческие conjoint-эксперименты с персонами GPT-3.5 и Gemini 1.5 Flash, оценивают пороги принятия и моделируют диффузию в сетях людей и LLM.
- [When Your AI Agent Succumbs to Peer-Pressure: Studying Opinion-Change Dynamics of LLMs](../works/arxiv-2510-19107.md) (2025; приоритет предварительный) — Статья изучает бинарные мнения LLM-агентов на сетях и обнаруживает sigmoid-зависимость вероятности смены мнения от доли несогласных соседей.
- [Decoding Echo Chambers: LLM-Powered Simulations Revealing Polarization in Social Networks](../works/arxiv-2409-19338.md) (2024; приоритет предварительный) — Статья строит языковую агентную симуляцию динамики мнений на трёх типах социальных сетей и сравнивает её с Bounded Confidence и Friedkin–Johnsen.
- [Simulating Opinion Dynamics with Networks of LLM-based Agents](../works/arxiv-2311-09618.md) (2023; приоритет предварительный) — Исследование проверяет, как популяции на базе LLM обмениваются сообщениями в стиле соцсетей по темам с известным научным консенсусом.

### Фон и смежные материалы (7)

- [Amit Sarker](../works/web-amit-sarker-github-io-b4fa1b9ea9.md) (год не установлен) — Страница автора с доступом к TASMAN paper, коду, сценариям; не отдельное исследование.
  - Это авторская страница и навигация к исследованию, не отдельный эмпирический результат.
  - TASMAN изучает повторяющиеся переговоры, скрытого саботажника и доверие между участниками.
  - Код связан с первичной статьёй; количественные выводы следует цитировать по её экспериментальным таблицам.
- [Как ИИ‑агенты воюют, мирятся и пишут извинительные коммиты: 5 важных экспериментов](../works/web-habr-com-1236285952.md) (год не установлен) — Хабр-разбор экспериментов об агентных обществах; это вторичный контекст и ссылка на проект earth-scale-society, не собственный benchmark.
  - Это вторичный русскоязычный пересказ, не первичная публикация эксперимента.
  - В качестве первичного артефакта указан Jupyter notebook с кодом и конфигурациями.
  - Количественные заявления следует сверять с репозиторием и журналом запусков, а не считать проверенными по пересказу.
- [CoopEval: Benchmarking Cooperation-Sustaining Mechanisms and LLM Agents in Social Dilemmas](../works/web-proceedings-mlr-press-6d2491086e.md) (2026; приоритет предварительный) — CoopEval сравнивает repetition, reputation, mediation и contract в четырёх социальных дилеммах и на современных LLM.
- [Multi-Round Avalon with AI Agents (dataset and analysis)](../works/github-suveene-multi-round-avalon-agents.md) (2026; приоритет предварительный) — 188 опубликованных логов Avalon: команды выбирают лидеров и миссии, агенты сохраняют память между матчами; заявлены репутации и изменение доверия.
- [Understanding Online Polarization Through Human-Agent Interaction in a Synthetic LLM-Based Social Network](../works/web-ojs-aaai-org-b14a3753ac.md) (2025; приоритет предварительный) — Авторы создали синтетическую Twitter-подобную платформу, где 122 человека взаимодействуют с GPT-4o-mini агентами в поляризованном либо умеренном дискурсе об универсальном базовом доходе.
- [Trust Models in Repeated Multi-Party Negotiation](../works/web-neurips-cc-8406e8e000.md) (2026; приоритет предварительный) — Краткая запись утверждает, что в повторных переговорах модель доверия помогает выявить саботажника только когда агентам прямо говорят учитывать доверие.
- [MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook](../works/web-inlp-lab-github-io-732faa05db.md) (год не установлен; приоритет предварительный) — В исходном корпусе найден источник; содержательный пересказ требует доступного первичного текста. Ссылки и исходные сведения сохранены ниже.

## Таблица работ темы

| Работа | Год | Тип | Агентов | Проверка |
|---|---:|---|---|---|
| [Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties](../works/arxiv-2510-19299.md) | 2025 | исследование | 30 | полный текст |
| [Spontaneous Emergence of Agent Individuality through Social Interactions in LLM-Based Communities](../works/arxiv-2411-03252.md) | 2024 | исследование | 10 | полный текст |
| [Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents](../works/arxiv-2602-07777.md) | 2026 | исследование | не опубликовано в проверенных фрагментах (уточнить в приложениях) | полный текст |
| [Agentopia: Long-Term Life Simulation and Learning in Agent Societies](../works/arxiv-2606-07513.md) | 2026 | исследование | 100 в каждом из трёх миров (всего 300 агентов в трёх запусках) | полный текст |
| [An Empirical Study of Collective Behaviors and Social Dynamics in Large Language Model Agents](../works/arxiv-2602-03775.md) | 2026 | исследование | не опубликовано | полный текст |
| [Conformity and Social Impact on AI Agents](../works/arxiv-2601-05384.md) | 2026 | исследование | не опубликовано | полный текст |
| [Language-Grounded Co-evolution of Opinions and Ties: Paired Rewiring with Large Language Model Agents](../works/web-ojs-aaai-org-05ecebb82a.md) | 2026 | веб-материал | см. статью | полный текст |
| [Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook](../works/arxiv-2602-20044.md) | 2026 | исследование | не опубликовано | полный текст |
| [MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook](../works/arxiv-2602-13458.md) | 2026 | исследование | 148 335 (агенты платформы; архитектура не контролировалась исследователями) | полный текст |
| [Social Simulacra in the Wild: AI Agent Communities on Moltbook](../works/arxiv-2603-16128.md) | 2026 | исследование | 5 042 уникальных агента Moltbook (анализируемая выборка) | полный текст |
| [The Anatomy of the Moltbook Social Graph](../works/arxiv-2602-10131.md) | 2026 | исследование | 159 | полный текст |
| [NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents](../works/arxiv-2511-21783.md) | 2025 | исследование | не опубликовано | полный текст |
| [Large Language Model-driven Multi-Agent Simulation for News Diffusion Under Different Network Structures](../works/arxiv-2410-13909.md) | 2024 | исследование | не опубликовано | полный текст |
| [OASIS: Open Agent Social Interaction Simulations with One Million Agents](../works/arxiv-2411-11581.md) | 2024 | исследование | от 100 до 1 000 000 (зависит от эксперимента) | полный текст |
| [Y Social: an LLM-powered Social Media Digital Twin](../works/arxiv-2408-00818.md) | 2024 | исследование | в платформенной статье число не установлено | полный текст |
| [amit-sarker/TASMAN](../works/github-amit-sarker-tasman.md) | — | проект / код | зависит от конфигурации проекта | из прежних обзоров |
| [RGB-0000FF/RepuNet](../works/github-rgb-0000ff-repunet.md) | — | проект / код | см. статью | из прежних обзоров |
| [В. Н. Бурков, А. К. Еналеев, Д. А. Новиков, “Механизмы функционирования социально-экономических систем с сообщением информации”, Автомат. и телемех., 1996, № 3, 3–25; Autom. Remote Control, 57:3 (1996), 305–321](../works/web-mathnet-ru-699966184b.md) | — | исследование | не применимо | из прежних обзоров |
| [Reliability–Contagion Feasibility in LLM Multi-Agent Networks](../works/arxiv-2607-21912.md) | 2026 | исследование | не опубликовано | полный текст |
| [Сравнительный анализ поведения больших языковых моделей и людей в игре «Диктатор»](../works/doi-10-31737-22212264-2026-2-177-203.md) | 2026 | исследование | не опубликовано | полный текст |
| [Использование больших языковых моделей для имитации человеческого поведения в аэропорту](../works/web-elibrary-ru-21c8ac8b53.md) | 2025 | веб-материал | не опубликовано | полный текст |
| [Sense and Sensitivity: Evaluating the simulation of social dynamics via Large Language Models](../works/arxiv-2412-05093.md) | 2024 | исследование | не найдено в карточке | полный текст |
| [Partial connectivity increases cultural accumulation within groups](../works/web-pmc-ncbi-nlm-nih-gov-5fc2874029.md) | 2016 | исследование | люди, см. статью | полный текст |
| [Earth-scale Society: инженерная репликация общества агентов](../works/github-fareedkhan-dev-earth-scale-society.md) | 2026 | проект / код | зависит от конфигурации проекта | аннотация |
| [NeoGendaijin/NormGame_LLM](../works/github-neogendaijin-normgame_llm.md) | — | проект / код | зависит от конфигурации проекта | из прежних обзоров |
| [Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook](../works/arxiv-2602-13284.md) | 2026 | исследование | — | полный текст |
| [Characterizing Opinion Evolution of Networked LLMs](../works/arxiv-2606-18276.md) | 2026 | исследование | — | полный текст |
| [Collective Opinion Dynamics in Structured LLM Populations](../works/arxiv-2604-11312.md) | 2026 | исследование | — | полный текст |
| [Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks](../works/arxiv-2609-19913.md) | 2026 | исследование | — | полный текст |
| [Don’t Trust Generative Agents to Mimic Communication on Social Networks Unless You Benchmarked their Empirical Realism](../works/acl-2026.eacl-long.51.md) | 2026 | исследование | — | полный текст |
| [Emergence of Reputation-Based Cooperation in LLM Agents](../works/arxiv-2608-04507.md) | 2026 | исследование | — | полный текст |
| [Gender Dynamics and Homophily in a Social Network of LLM Agents](../works/arxiv-2602-02606.md) | 2026 | исследование | — | полный текст |
| [Harm in AI-Driven Societies: An Audit of Toxicity Adoption on Chirper.ai](../works/arxiv-2601-01090.md) | 2026 | исследование | — | полный текст |
| [How large language models judge and influence human cooperation](../works/doi-10-1093-pnasnexus-pgag297.md) | 2026 | исследование | — | полный текст |
| [Knowing Whom to Trust is not Enough: The Trust–Agreement Gap in Repeated Multi-Party LLM Negotiation (TASMAN)](../works/arxiv-2610-31971.md) | 2026 | исследование | — | полный текст |
| [Opinion Consensus Formation Among Networked Large Language Models](../works/arxiv-2601-21540.md) | 2026 | исследование | — | полный текст |
| [Simulating Hate Speech Cascades with Multi-LLM Agents: Empirical Grounding, Modeling Fidelity, and Intervention Strategies](../works/arxiv-2606-18264.md) | 2026 | исследование | — | полный текст |
| [Social Networks of LLM Agents](../works/arxiv-2607-03695.md) | 2026 | исследование | — | полный текст |
| [Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents](../works/arxiv-2604-20582.md) | 2026 | исследование | — | полный текст |
| [Characterizing LLM-driven Social Network: The Chirper.ai Case](../works/arxiv-2504-10286.md) | 2025 | исследование | — | полный текст |
| [Competing LLM Agents in a Non-Cooperative Game of Opinion Polarisation](../works/arxiv-2502-11649.md) | 2025 | исследование | — | полный текст |
| [Emergence of human-like polarization among LLM agents](../works/arxiv-2501-05171.md) | 2025 | исследование | — | полный текст |
| [Network formation and dynamics among multi-LLMs](../works/web-academic-oup-com-a58bb9960d.md) | 2025 | исследование | — | полный текст |
| [Reputation as a Solution to Cooperation Collapse in LLM-based MASs](../works/arxiv-2505-05029.md) | 2025 | исследование | — | полный текст |
| [Social preferences with unstable interactive reasoning: Large language models in economic trust games](../works/arxiv-2505-17053.md) | 2025 | исследование | — | полный текст |
| [The amplifier effect of artificial agents in social contagion](../works/arxiv-2502-21037.md) | 2025 | исследование | — | полный текст |
| [When Your AI Agent Succumbs to Peer-Pressure: Studying Opinion-Change Dynamics of LLMs](../works/arxiv-2510-19107.md) | 2025 | исследование | — | полный текст |
| [Decoding Echo Chambers: LLM-Powered Simulations Revealing Polarization in Social Networks](../works/arxiv-2409-19338.md) | 2024 | исследование | — | полный текст |
| [Simulating Opinion Dynamics with Networks of LLM-based Agents](../works/arxiv-2311-09618.md) | 2023 | исследование | — | полный текст |
| [Amit Sarker](../works/web-amit-sarker-github-io-b4fa1b9ea9.md) | — | веб-материал | не опубликовано | из прежних обзоров |
| [Как ИИ‑агенты воюют, мирятся и пишут извинительные коммиты: 5 важных экспериментов](../works/web-habr-com-1236285952.md) | — | веб-материал | не опубликовано | из прежних обзоров |
| [CoopEval: Benchmarking Cooperation-Sustaining Mechanisms and LLM Agents in Social Dilemmas](../works/web-proceedings-mlr-press-6d2491086e.md) | 2026 | веб-материал | — | полный текст |
| [Multi-Round Avalon with AI Agents (dataset and analysis)](../works/github-suveene-multi-round-avalon-agents.md) | 2026 | проект / код | — | документация проекта |
| [Understanding Online Polarization Through Human-Agent Interaction in a Synthetic LLM-Based Social Network](../works/web-ojs-aaai-org-b14a3753ac.md) | 2025 | веб-материал | — | полный текст |
| [Trust Models in Repeated Multi-Party Negotiation](../works/web-neurips-cc-8406e8e000.md) | 2026 | веб-материал | — | аннотация |
| [MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook](../works/web-inlp-lab-github-io-732faa05db.md) | — | веб-материал | — | из прежних обзоров |
