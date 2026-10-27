---
id: topic-resources
type: topic
title: Общие и распределённые ресурсы
work_count: 32
core_works:
- arxiv-2404-16698
- arxiv-2609-26481
- arxiv-2602-00755
- arxiv-2508-05344
- doi-10-1162-artl-a-459
related_topics:
- institutions
- communities
- methodology
- economics
- influence
---

# Общие и распределённые ресурсы

[← Главная](../README.md) · [Все направления](../README.md#карта-направлений)

- **Работ в теме:** 32; ключевых: 5; проверено по полному тексту: 27.
- **Чаще всего пересекается с темами:** [Нормы, институты, санкции и управление](institutions.md) (18), [Реальные агентные сообщества и практические эксперименты](communities.md) (10), [Методология, валидация и сравнение с людьми](methodology.md) (9), [Экономические игры, рынки, стимулы и сговор](economics.md) (3), [Информационное влияние, манипуляции и защита](influence.md) (2).

## Общий ресурс и распределённые решения

В задаче общего ресурса индивидуально выгодное изъятие может снижать будущий выигрыш всей группы. Исследования различаются устройством ресурса, горизонтом взаимодействия, информацией о действиях других и тем, какие правила уже встроены в среду.

[GovSim](../works/arxiv-2404-16698.md) моделирует рыболовство, пастбище и загрязнение как варианты одной задачи: агенты принимают решения, затем общаются, а ресурс обновляется. Его показатели включают выживание ресурса, эффективность, равенство и перерасход; сценарии и выборки не представляют реальные экосистемы. [AgentElect](../works/arxiv-2604-11721.md) расширяет постановку избираемым лидером, а не исследует изобретение выборов с нуля.

В [Jannelli и соавторов](../works/arxiv-2411-10184.md) агенты представляют звенья цепочки поставок и согласуют решения при разных информационных условиях. [Long и соавторы](../works/arxiv-2605-17036.md) изучают Beer Game и надёжность решений с учётом ограничений и передачи информации. Здесь важны запасы, задержки и ошибки управления; результаты не сводятся к одному числу о «сотрудничестве».

Исследования кризисных и клинических сценариев добавляют конфликт ролей и дефицит ресурсов. Они используют синтетические ситуации, поэтому их выводы об агентных решениях не являются доказательством безопасности принятия реальных медицинских или экстренных решений.

## Работы по значимости

Приоритет отражает близость к задачам лаборатории; у части записей он назначен автоматически и требует редакционной проверки. Уровень проверки первоисточника — отдельное поле.

### Ключевые работы (5)

- [Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents](../works/arxiv-2404-16698.md) (2024) — В игре общего ресурса с пятью агентами большинство протестированных LLM не удерживает устойчивость; коммуникация повышает кооперацию, подсказка универсализации усиливает устойчивость.
  - Максимальный survival rate в экспериментах ниже 54% (§3.2): большинство моделей не достигает устойчивого состояния.
  - Добавление «новичка», который не видит историю и максимизирует свою выгоду, ухудшает равенство и иногда разрушает кооперацию (§3.3).
  - Подсказка universalization reasoning повышает устойчивость (§3.4); коммуникация снижает перерасход ресурса на 21% (§3.5).
  - Переговоры — ведущий тип сообщений (§3.6); способность строить ожидания о других коррелирует с выживанием (r≈0.83, §3.7).
  - Корреляция навыка с выживанием не доказывает причинного механизма; роли и моральная подсказка заданы авторами, а не возникли сами.
- [Behavior is Not Enough: A Mechanism-Based Evaluation of Social Norm Emergence in LLM Societies](../works/arxiv-2609-26481.md) (2026) — Кооперация в public goods game не доказывает существования нормы: опрос ожиданий повышает вклады, обсуждение стабилизирует поведение, а сетевой отбор почти не меняет вклады.
  - Схема: 12 агентов в трёх группах по четыре, 20 раундов; основные модели GPT-4o-mini, Llama 3.1-8B-Instruct, Qwen2.5-7B, Mistral-7B; по 10 независимых прогонов на пару модель–условие.
  - Явный опрос ожиданий (elicitation) повышает вклады относительно чистого baseline во всех четырёх моделях: +0.58 (GPT-4o-mini), +1.02 (Llama), +1.39 (Mistral), +0.93 (Qwen).
  - Согласие в обсуждении выросло с 88.6% до 98.3%, рекомендации поддерживать норму — с 74.3% до 94.7% (Table 6).
  - Сетевой отбор слабо меняет вклады: SS=.068 против Discussion/SL=.390; исключения составляли менее 1%.
  - После возмущения (четыре adversarial-агента на раунде 10 или 20) нормативные ожидания восстанавливаются быстрее поведения.
- [Evolving Interpretable Constitutions for Multi-Agent Coordination](../works/arxiv-2602-00755.md) (2026) — Работа использует программирование, управляемое LLM, чтобы эволюционно отбирать правила поведения в обществе выживания на сеточном поле.
  - Abstract/§4: evolved constitution превосходит два написанных baselines на выбранной score.
  - Меньше разговоров — лучше именно для этой grid-world метрики.
  - Результат относится только к указанной среде и условиям работы.
- [NomicLaw: Emergent Trust and Strategic Argumentation in LLMs During Collaborative Law-Making](../works/arxiv-2508-05344.md) (2025) — NomicLaw моделирует группы LLM, которые обсуждают правовые виньетки, предлагают правила, обосновывают их и голосуют за предложения коллег.
  - NomicLaw моделирует группы LLM, которые обсуждают правовые виньетки, предлагают правила, обосновывают их и голосуют за предложения коллег.
  - Работа количественно изучает доверие/взаимность по голосам и качественно анализирует стратегическую риторику.
  - В гомогенных и гетерогенных составах наблюдаются альянсы, смена поддержки и попытки влиять на коллективный выбор.
- [Communication, Embodiment, and Coordination in an El Farol Bar-Inspired LLM Society](../works/doi-10-1162-artl-a-459.md) (2026) — В пространственной версии задачи Эль-Фароль LLM-агенты с локальной коммуникацией и задержкой действий поддерживают заполнение бара около порога перегрузки 60 %; хэштеги временно удерживают уход.
  - По аннотации, в 10 независимых симуляциях заполненность бара держалась около порога перегрузки 60 %, обычно немного выше него.
  - Коллективная картина возникла из локального взаимодействия (соседи, перемещение, задержка действий), а не из явной оптимизации выплат.
  - В некоторых прогонах спонтанно возникшие хэштеги временно сдерживали уход из бара.
  - Модель LLM, число агентов и методология в проверенных материалах не указаны; полный текст недоступен (HTTP 403).

### Дополняющие работы (24)

- [Assigned roles change how clinical AI agents allocate shared resources](../works/doi-10-64898-2026-08-06-26359905.md) (2026) — Авторы изучают, как заданная профессиональная роль меняет решения клинических AI-агентов о совместно используемых ресурсах, когда интересы пациентов конкурируют.
  - Основной результат полного текста: доля нарушений resource-allocation policy составила 32,5% при роли ward/department steward и 69,4% в режиме patient advocacy
  - Даже когда агенты правильно называли правило приоритизации (95,7%), они выбирали ресурс для собственного пациента в 65,9% эпизодов.
  - Это разрыв между декларируемым принципом и действием при конфликте интересов.
  - В ограниченном follow-up prompt, требующий сначала вынести judgment, снижал нарушения лишь примерно на 0–2% у трёх моделей.
  - вывод — роль и конфликт интересов способны менять поведение, а простая chain-of-thought-проверка даёт небольшое улучшение.
- [Can Agents Adapt Their Institutions And Sacrifice Themselves During Collapse? Executable Self-Governance in a GovSim Commons](../works/arxiv-2609-22600.md) (2026) — В GovSim commons агенты пишут исполняемые Python-законы, тестируют их, голосуют и применяют.
  - Abstract/controlled replay дают вероятности и показывают чувствительность к процедуре.
  - Группа может предложить закон исключения, но не принять его.
  - Результат относится только к указанной среде и условиям работы.
- [Dynamics of Cognitive Heterogeneity: Investigating Behavioral Biases in Multi-Stage Supply Chains with LLM-Based Simulation](../works/arxiv-2604-17220.md) (2026) — В Beer Distribution Game модели GPT и DeepSeek играют роли цепочки поставок; исследование связывает когнитивные возможности с координацией и эффектом обмена информацией.
  - §4–5 и abstract: когнитивная разница меняет классические паттерны, sharing mitigates adverse behavior.
  - Результат относится только к указанной среде и условиям работы.
  - Не следует трактовать карточку как доказательство человеческих чувств или сознания агентов.
- [Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management](../works/arxiv-2605-17036.md) (2026) — В MIT Beer Game оцениваются автономные LLM на многозвенной цепочке поставок.
  - Протокол — 30 повторов 25-недельной Beer Game при фиксированном спросе.
  - Лучшая конфигурация сообщает до 80% снижения aggregate supply-chain costs относительно human teams, но наблюдаются сильные run-to-run fluctuations и tail costs даже при неизменном спросе.
  - Guardrails снижают экстремальные действия
  - group/system-level GRPO с feedback всей цепи даёт наибольшие улучшения reliability/performance
  - local post-training не устраняет координационную несогласованность.
- [Risks and Controls for Multi-Agent Systems: an Analytical Framework for Deployment of AI Agents Across Organisational Boundaries](../works/arxiv-2608-26626.md) (2026) — Отчёт предлагает аналитическую рамку рисков/контролей для развертывания MAS через границы организаций.
  - Разделы формируют таксономию рисков и возможных controls
  - нет количественной оценки снижения вреда после внедрения.
  - Результат относится только к указанной среде и условиям работы.
- [Vending-Bench Arena](../works/web-andonlabs-com-8ab433b48d.md) (2025) — Описание Vending-Bench Arena и соревнования моделей в длительной задаче управления магазином.
  - Результаты отражают конкретный benchmark, harness и бюджет времени/ресурсов.
  - Коммерческая страница проекта не является независимым научным анализом.
- [Voting or Consensus? Decision-Making in Multi-Agent Debate](../works/arxiv-2502-19130.md) (2025) — Работа изолирует протокол финального решения в многоагентных дебатах и сравнивает голосование, консенсус и другие правила при прочих равных параметрах.
  - В задачах рассуждения голосование превосходит другие протоколы в среднем на 13,2%, а для задач знаний консенсус даёт прирост 2,8%.
  - Число агентов обычно помогает, но дополнительные раунды обсуждения до голосования могут ухудшать результат.
  - Авторы поддерживают выбор правила под тип задачи, а не один универсальный протокол агрегации.
- [Communication, Embodiment, and Coordination in an El Farol Bar-Inspired LLM Society](../works/web-pubmed-ncbi-nlm-nih-gov-e1a7c3dd51.md) (2026) — Пространственная версия задачи El Farol Bar, где локальная коммуникация и embodiment влияют на координацию посещения перегруженного бара.
  - Очередь сообщает, что агенты общались локально и перемещались
  - точные эффекты не выдумываю.
  - Результат относится только к указанной среде и условиям работы.
- [BRIDGE-GenAI-Lab/Asimov-Task-Role-in-Clincial-Agents-](../works/github-bridge-genai-lab-asimov-task-role-in-clincial-agents-.md) (год не установлен) — Код и сценарии к medRxiv-препринту о том, как назначенные роли влияют на распределение ресурсов клиническими LLM-агентами.
  - Изучаются заданные роли и общие ресурсы, а не спонтанное назначение ролей.
  - README даёт ограниченную детализацию; выводы не расширять за рамки препринта.
- [Competition and Cooperation of LLM Agents in Games](../works/arxiv-2604-00487.md) (2026; приоритет предварительный) — Работа сравнивает LLM strategic action в Kelly network resource allocation и Cournot competition.
- [Crisis as catalyst: evaluating ethical consistency and cooperation in LLMs under high-stakes scenarios](../works/doi-10-1057-s41599-026-07194-z.md) (2026; приоритет предварительный) — Авторы проверяют этическую согласованность LLM в двух кризисных сценариях: распределении ресурсов при бедствии и crowd-panic response.
- [Decision Protocols in Multi-Agent Large Language Model Conversations](../works/arxiv-2607-05477.md) (2026; приоритет предварительный) — Работа представляет MALLM — модульную платформу для оценки decision protocols в multi-agent conversations.
- [Internal vs. External: Comparing Deliberation and Evolution for Multi-Agent Constitutional Design](../works/arxiv-2605-09128.md) (2026; приоритет предварительный) — Работа напрямую сравнивает внутреннее самоуправление агентов (deliberation) с внешним поиском правил через LLM-guided evolution в трёх социальных играх.
- [Real-Time Group Dynamics with LLM Facilitation: Evidence from a Charity Allocation Task](../works/arxiv-2605-14097.md) (2026; приоритет предварительный) — Два real-time human studies (N=879) проверяют LLM facilitation в распределении реальных пожертвований.
- [Agentic LLMs in the Supply Chain: Towards Autonomous Multi-Agent Consensus-Seeking](../works/arxiv-2411-10184.md) (2025; приоритет предварительный) — Статья тестирует LLM-консенсус в трёхзвенной supply chain, где локально автономные фирмы принимают решения по запасам.
- [Beyond the high score: Prosocial ability profiles of multi-agent populations](../works/arxiv-2509-14485.md) (2025; приоритет предварительный) — Работа применяет Measurement Layouts к результатам соревнования Melting Pot, чтобы оценивать латентные кооперативные способности команд, а не только итоговый score.
- [Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games](../works/arxiv-2506-23276.md) (2025; приоритет предварительный) — Работа сопоставляет обычные и reasoning-модели в повторяющейся игре общественного блага с выбором института и затратным применением поощрений/наказаний.
- [Evaluating Generalization Capabilities of LLM-Based Agents in Mixed-Motive Scenarios Using Concordia](../works/arxiv-2512-03318.md) (2025; приоритет предварительный) — Работа оценивает zero-shot способность языковых агентов находить взаимную выгоду в новых mixed-motive сценариях, используя Concordia.
- [Multi-Agent Risks from Advanced AI](../works/arxiv-2502-14143.md) (2025; приоритет предварительный) — Отчёт предлагает таксономию рисков взаимодействия продвинутых AI-агентов.
- [Reproducibility Study of ‘Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents’](../works/arxiv-2505-09289.md) (2025; приоритет предварительный) — Авторы воспроизводят часть GovSim — симуляции управления общими ресурсами с пятью LLM-агентами — и проверяют, устойчиво ли сотрудничество крупных моделей и помогает ли принцип универсализации.
- [Virtual Agent Economies](../works/arxiv-2509-10147.md) (2025; приоритет предварительный) — Авторы предлагают рамку «sandbox economy» для анализа экономики, возникающей вокруг автономных цифровых агентов.
- [An Electoral Approach to Diversify LLM-based Multi-Agent Collective Decision-Making](../works/arxiv-2410-15168.md) (2024; приоритет предварительный) — GEDI предлагает разнообразить способы, которыми мультиагентные LLM-системы превращают ответы участников в коллективное решение. Обзор 52 предшествующих систем находит доминирование диктаторского выбора и plurality.
- [RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration](../works/arxiv-2411-07161.md) (2024; приоритет предварительный) — RoundTable — децентрализованная платформа, где агенты вырабатывают кандидаты, обсуждают их и голосуют по заданному правилу.
- [Secret Collusion among AI Agents: Multi-Agent Deception via Steganography](../works/arxiv-2402-07510.md) (2024; приоритет предварительный) — Формализуется скрытый сговор, при котором агенты прячут координацию от надзора с помощью стеганографических каналов.

### Фон и смежные материалы (3)

- [Project Vend: Claudius управлял офисным магазином](../works/web-pymnts-com-67b3ae6d91.md) (2025) — Внешний журналистский рассказ о Project Vend и Claudius, управлявшем офисным магазином.
  - Описывает конкретный эпизод и внешние наблюдения, не контролируемый эксперимент.
  - Отделять проектный отчёт, журналистскую реконструкцию и собственную интерпретацию.
- [Crisis as Catalyst: code repository for crisis cooperation and ethical-consistency scenarios](../works/github-keeno-morning-haze-crisis_as_catalyst.md) (2026; приоритет предварительный) — Код и экспериментальные данные к статье Crisis as Catalyst: сценарии распределения юнитов при кризисе и варианты trolley problem, плюс анализ и визуализация.
- [Crisis as Catalyst [набор данных Figshare]](../works/doi-10-6084-m9-figshare-29722715.md) (2026; приоритет предварительный) — Это отдельный объект данных Figshare, а не исследовательская статья.

## Таблица работ темы

| Работа | Год | Тип | Агентов | Проверка |
|---|---:|---|---|---|
| [Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents](../works/arxiv-2404-16698.md) | 2024 | исследование | 5 | полный текст |
| [Behavior is Not Enough: A Mechanism-Based Evaluation of Social Norm Emergence in LLM Societies](../works/arxiv-2609-26481.md) | 2026 | исследование | 12 (три группы по четыре) | полный текст |
| [Evolving Interpretable Constitutions for Multi-Agent Coordination](../works/arxiv-2602-00755.md) | 2026 | исследование | не опубликовано | полный текст |
| [NomicLaw: Emergent Trust and Strategic Argumentation in LLMs During Collaborative Law-Making](../works/arxiv-2508-05344.md) | 2025 | исследование | не опубликовано | полный текст |
| [Communication, Embodiment, and Coordination in an El Farol Bar-Inspired LLM Society](../works/doi-10-1162-artl-a-459.md) | 2026 | исследование | не опубликовано (в проверенных материалах) | аннотация |
| [Assigned roles change how clinical AI agents allocate shared resources](../works/doi-10-64898-2026-08-06-26359905.md) | 2026 | исследование | не опубликовано | полный текст |
| [Can Agents Adapt Their Institutions And Sacrifice Themselves During Collapse? Executable Self-Governance in a GovSim Commons](../works/arxiv-2609-22600.md) | 2026 | исследование | не опубликовано | полный текст |
| [Dynamics of Cognitive Heterogeneity: Investigating Behavioral Biases in Multi-Stage Supply Chains with LLM-Based Simulation](../works/arxiv-2604-17220.md) | 2026 | исследование | не опубликовано | полный текст |
| [Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management](../works/arxiv-2605-17036.md) | 2026 | исследование | не опубликовано | полный текст |
| [Risks and Controls for Multi-Agent Systems: an Analytical Framework for Deployment of AI Agents Across Organisational Boundaries](../works/arxiv-2608-26626.md) | 2026 | исследование | не опубликовано | полный текст |
| [Vending-Bench Arena](../works/web-andonlabs-com-8ab433b48d.md) | 2025 | веб-материал | согласно benchmark | полный текст |
| [Voting or Consensus? Decision-Making in Multi-Agent Debate](../works/arxiv-2502-19130.md) | 2025 | исследование | не опубликовано | полный текст |
| [Communication, Embodiment, and Coordination in an El Farol Bar-Inspired LLM Society](../works/web-pubmed-ncbi-nlm-nih-gov-e1a7c3dd51.md) | 2026 | веб-материал | не опубликовано | аннотация |
| [BRIDGE-GenAI-Lab/Asimov-Task-Role-in-Clincial-Agents-](../works/github-bridge-genai-lab-asimov-task-role-in-clincial-agents-.md) | — | проект / код | не установлено по README | из прежних обзоров |
| [Competition and Cooperation of LLM Agents in Games](../works/arxiv-2604-00487.md) | 2026 | исследование | — | полный текст |
| [Crisis as catalyst: evaluating ethical consistency and cooperation in LLMs under high-stakes scenarios](../works/doi-10-1057-s41599-026-07194-z.md) | 2026 | исследование | — | полный текст |
| [Decision Protocols in Multi-Agent Large Language Model Conversations](../works/arxiv-2607-05477.md) | 2026 | исследование | — | полный текст |
| [Internal vs. External: Comparing Deliberation and Evolution for Multi-Agent Constitutional Design](../works/arxiv-2605-09128.md) | 2026 | исследование | — | полный текст |
| [Real-Time Group Dynamics with LLM Facilitation: Evidence from a Charity Allocation Task](../works/arxiv-2605-14097.md) | 2026 | исследование | — | полный текст |
| [Agentic LLMs in the Supply Chain: Towards Autonomous Multi-Agent Consensus-Seeking](../works/arxiv-2411-10184.md) | 2025 | исследование | — | полный текст |
| [Beyond the high score: Prosocial ability profiles of multi-agent populations](../works/arxiv-2509-14485.md) | 2025 | исследование | — | полный текст |
| [Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games](../works/arxiv-2506-23276.md) | 2025 | исследование | — | полный текст |
| [Evaluating Generalization Capabilities of LLM-Based Agents in Mixed-Motive Scenarios Using Concordia](../works/arxiv-2512-03318.md) | 2025 | исследование | — | полный текст |
| [Multi-Agent Risks from Advanced AI](../works/arxiv-2502-14143.md) | 2025 | исследование | — | полный текст |
| [Reproducibility Study of ‘Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents’](../works/arxiv-2505-09289.md) | 2025 | исследование | — | полный текст |
| [Virtual Agent Economies](../works/arxiv-2509-10147.md) | 2025 | исследование | — | полный текст |
| [An Electoral Approach to Diversify LLM-based Multi-Agent Collective Decision-Making](../works/arxiv-2410-15168.md) | 2024 | исследование | — | полный текст |
| [RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration](../works/arxiv-2411-07161.md) | 2024 | исследование | — | полный текст |
| [Secret Collusion among AI Agents: Multi-Agent Deception via Steganography](../works/arxiv-2402-07510.md) | 2024 | исследование | — | полный текст |
| [Project Vend: Claudius управлял офисным магазином](../works/web-pymnts-com-67b3ae6d91.md) | 2025 | веб-материал | один управляющий агент в описанном эпизоде | полный текст |
| [Crisis as Catalyst: code repository for crisis cooperation and ethical-consistency scenarios](../works/github-keeno-morning-haze-crisis_as_catalyst.md) | 2026 | проект / код | — | документация проекта |
| [Crisis as Catalyst [набор данных Figshare]](../works/doi-10-6084-m9-figshare-29722715.md) | 2026 | датасет | — | не подтверждено |
