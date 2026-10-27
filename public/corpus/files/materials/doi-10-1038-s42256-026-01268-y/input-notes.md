---
id: doi-10-1038-s42256-026-01268-y-input-notes
type: material
title: 'Исходные сведения: Capable language models can outgrow the benefits of collaboration'
work_id: doi-10-1038-s42256-026-01268-y
source_kind: secondary_project_notes
verification_status: source_consolidated
---

# Сведения из исходного корпуса

> Это прежние обзоры проекта, а не оригинальный текст авторов. Утверждения могут быть исправлены в основной карточке.

## note

Источник: `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 953. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

**Kim et al., “Capable language models can outgrow the benefits of collaboration.”** Работа опубликована в *Nature Machine Intelligence* 8 (2026), 1157–1172, 24 июля 2026 года, CC BY 4.0. [Журнальная статья](https://doi.org/10.1038/s42256-026-01268-y), [полный текст PDF на сайте MIT Media Lab](https://dam-prod.media.mit.edu/s42256-026-01268-y.pdf), [репозиторий кода и артефактов](https://github.com/ybkim95/agent-scaling/).

## note

Источник: `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 955.

**Дизайн.** Контролируемое сравнение 260 конфигураций на шести агентных бенчмарках (веб-исследование, финансы, планирование, офисные инструменты, SWE-bench Verified и Terminal-Bench). Сопоставлялись пять архитектур: одиночный агент, независимые агенты, централизованный оркестратор, децентрализованный обмен между агентами и гибрид. Варьировались возможности и семейства базовой модели (OpenAI, Google, Anthropic); промпты задач, инструменты и потолки вычислений фиксировались между сравниваемыми условиями. Дополнительно авторы проверили 13 гетерогенных команд, смешивая модели внутри и между семействами.

## note

Источник: `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 957.

**Результаты.** Производительность одиночного агента оказалась наиболее устойчивым предиктором того, улучшит ли команда результат. Эмпирическое правило порога около 45% одиночного успеха предсказало направление эффекта в 94% проверочных конфигураций SWE-bench Verified и Terminal-Bench; авторы подчёркивают, что это рабочее правило выбора для проверенных доменов, а не универсальная константа. Архитектура также меняла результат по задаче: централизованный вариант дал +80,8% относительно одиночной модели на Finance Agent, тогда как все варианты координации снизили результат на PlanCraft на 39–70%. В предварительных тестах смешанные команды не обошли сильнейшие однородные: централизованные смешанные команды уступили им в среднем 12,6 п.п.; у децентрализованных смешанные модели дали лишь около +2 п.п.

## note

Источник: `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 959.

**Ограничения.** Выводы относятся к шести бенчмаркам и конкретному режиму обмена текстом. SWE-bench Verified и Terminal-Bench использовали по 20 задач на условие, поэтому интервалы неопределённости для отдельных сравнений широкие. При исключении целого бенчмарка модель плохо предсказывала абсолютный результат нового домена; 87% точности выбора лучшей архитектуры относится к удержанным конфигурациям внутри изученных доменов. Проверка смешения моделей ограничена 13 конфигурациями, а специалисты с разными архитектурами и обучением требуют отдельного исследования.

## note

Источник: `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 961.

**Статус.** Рецензируемая журнальная статья; есть полный текст и открытый код. Это самый прямой источник в подборке для дизайна групп по семейству и силе моделей, но её «групповой результат» — качество выполнения задач, а не социальная динамика.

## note

Источник: `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 53. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

- [Неакадемические опыты] AI Village: публичный таймлайн и GitHub организации; HF-экспорт событий/компьютерных ходов (доступ по запросу); внешний осторожный аудит истории — https://theaidigest.org/village/timeline ; https://github.com/ai-village-agents ; https://huggingface.co/datasets/aidigestorg/ai-village ; https://raisingchris.com/agents/
- [Неакадемические опыты] Agent Village / Edge Esmeralda: персональные агенты в реальном поселении, форум, знакомства и общий фонд; отчёт организаторов и публичные навыки/установщик — https://blog.cosmos-institute.org/p/we-gave-a-village-personal-ai-agents ; https://index.network/blog/field-notes-from-the-agent-village ; https://github.com/Edge-City/agentvillage
- [Неакадемические опыты] Emergentic Agent Societies: 32 записи прогонов 4 моделей и 8 размеров группы; публичные таймстемпы, результаты и журналы — https://emergentic.ai/case-studies/agent-societies ; https://emergentic.ai/case-studies/agent-societies/supplement
- [Неакадемические опыты] AgentCiv: GitHub-стенд с кодом, конфигурациями, снимком 12-агентного 70-шагового запуска и replay-экспортом — https://github.com/agentciv/agentciv
- [Неакадемические опыты] DIXON.AI The Village: 7-модельная «деревня» с заданиями; автор сверяет отчёты агентов о выполнении с журналом действий — https://dixon.ai/village/record/ ; https://dixon.ai/how-we-test/
- [Защита и манипуляции] Park et al., peer-reviewed ETRI Journal 2026: единичный атакующий через social proof, тест Moltbook и маркировка непроверенных утверждений — https://doi.org/10.4218/etrij.2026-0186
- [Защита и манипуляции] Kraidia et al., peer-reviewed Scientific Reports 2026: persuasive adversary в многоагентных дебатах ухудшает точность; RAG/Best-of-N могут усиливать влияние — https://doi.org/10.1038/s41598-026-42705-7
- [Дезинформация и влияние] Lu, Lim & Yin, CHI 2026: preregistered рандомизированные эксперименты с LLM-бот-комментариями/ответами и credibility prompts на людях — https://doi.org/10.1145/3772318.3790442
- [Институциональное влияние] Parisi et al., FAccT 2026: две инцентивно совместимые сессии группового распределения пожертвований; алгоритмическое steering при отсутствии эффекта на общий консенсус — https://doi.org/10.1145/3805689.3812253
- [Конформность и социальные сигналы] Qu, Fu & Hu, controlled multi-model study о harmful/beneficial revision при консенсусе и метках авторитета; препринт — https://arxiv.org/abs/2606.01637
- [Игровые среды] Project Will: 32 Minecraft-жителя, 6-часовой прогон, открытые журналы событий и аудит смертей — https://github.com/MONOCOLACHANNEL/project-will-observation-1
- [Игровые среды] MINDcraft / MineCollab: Minecraft-сотрудничество, 2–5 агентов и количественные тесты общения — https://arxiv.org/abs/2504.17950 ; https://github.com/mindcraft-bots/mindcraft
- [Игровые среды] PillagerBench: соревнование команд в Minecraft и адаптация к стратегиям соперника — https://arxiv.org/abs/2509.06235 ; https://github.com/aialt/PillagerBench
- [Игровые среды] Lan et al., EMNLP 2024: социальное поведение LLM-агентов в Avalon — https://aclanthology.org/2024.emnlp-main.7/ ; https://github.com/3DAgentWorld/LLM-Game-Agent
- [Игровые среды] Werewolf Among Us: 163 человеческих матча против 19 LLM-симуляций, открытые код и ноутбук анализа — https://cuboulder-ds.github.io/CSCI-5423-Final/
- [Игровые среды] MINDGAMES: 944 участника-агента и 29 571 матч в четырёх играх, открытые траектории и MG-Ref — https://arxiv.org/abs/2605.29512 ; https://huggingface.co/datasets/mindgameschallenge/MGC2025
- [Игровые среды] Автономные D&D-кампании: 9 контролируемых поэтапных запусков, 180+ сессий, код и полные журналы — https://github.com/maximus-ai-dev/ai-dnd-research
- [Управление и институты] Seyedin et al., Hierarchical Game: менеджер, выборы, зарплата и видимость наказаний; препринт — https://arxiv.org/abs/2608.09574
- [Управление и институты] Faulkner et al., AgentElect: выборы лидеров и программы управления общим ресурсом; arXiv — https://arxiv.org/abs/2604.11721
- [Общественные блага и санкции] Guzman Piedrahita et al., SanctSim: выбор между санкционным и свободным институтом, COLM 2025 — https://openreview.net/pdf?id=kH6LOHGjEl
- [Общественные блага и санкции] Li & Shirado, кооперация и наказание в шести играх, EMNLP 2025 — https://aclanthology.org/2025.emnlp-main.267/
- [Коалиции] Cammarasana, The Minority Report: трёхагентные коалиции, приватная коммуникация и память, IEEE Transactions on Games 2026 — https://doi.org/10.1109/TG.2026.3721624
- [Распределённые ресурсы] Jannelli et al., переговоры LLM-агентов в трёхзвенной цепи поставок: https://doi.org/10.1080/00207543.2025.2604311 ; https://arxiv.org/abs/2411.10184
- [Распределённые ресурсы] Long et al., надёжность и «agent bullwhip» в Beer Game, 30 повторов на настройку: https://arxiv.org/abs/2605.17036
- [Распределённые ресурсы] Yao et al., Kelly resource-allocation game и Cournot, условия LLM-кооперации: https://arxiv.org/abs/2604.00487
- [Кризисное управление] Yang et al., распределение ресурсов между командами и кооперация в кризисных сценариях; код и данные открыты: https://doi.org/10.1057/s41599-026-07194-z ; https://github.com/keeno-morning-haze/Crisis_as_Catalyst ; https://doi.org/10.6084/m9.figshare.29722715
- [Здравоохранение: распределение ресурсов] Gorenshtein et al., роли агентов и дефицитные ресурсы синтетической палаты; код и сценарии: https://doi.org/10.64898/2026.08.06.26359905 ; https://github.com/BRIDGE-GenAI-Lab/Asimov-Task-Role-in-Clincial-Agents-
- [Классические ABM] Zhang et al., SocioVerse2: 10 rule-based ABM и три LLM, одинаковые состояния/действия; средняя согласованность LLM около разброса классических прогонов, хуже на арифметике и непрерывном управлении; включает SIR-слух — https://arxiv.org/abs/2609.24911 ; https://github.com/Lishi905/SocioVerse-ABM
- [Классические ABM] GPT-4o против NetLogo в муравьином фуражировании и Boids: гибридный рой собрал больше пищи, LLM-птицы были периферийнее и медленнее выравнивали курс; пять сидов, важна чувствительность к промпту — https://doi.org/10.3389/frai.2025.1593017 ; https://arxiv.org/abs/2503.03800
- [Валидация / общественные блага] Bin Tareaf, SILICA: 12 открытых моделей, 9 115 прогонов, человеческие эталоны, conditional cooperator, Roth–Erev и naming-game baseline; совпадение PGG лишь в первом раунде, punishment часто снижает вклад, порядок списка ускоряет конвенцию — https://arxiv.org/abs/2608.28182 ; https://github.com/raadbintareaf/silica-benchmark
- [Общественные блага] Li & Shirado, EMNLP 2025: CoT и reflection снижают кооперацию в PGG; при росте доли o1 групповой выигрыш падает (3932±22 у GPT-4o против 740±38 у полностью o1-групп) — https://aclanthology.org/2025.emnlp-main.267/ ; https://huggingface.co/datasets/YuxuanLi1225/UncooperativeReasoning
- [Общественные блага / культурная эволюция] Willis et al., SE@AAMAS 2026: LLM генерируют стратегии-код для PGG, коллективного риска и общего ресурса; payoff-biased imitation в n=64 ведёт к низкоэффективным selfish-доминантным исходам — https://arxiv.org/abs/2602.16662 ; https://github.com/willis-richard/emergent_llm
- [Архитектура многоагентных систем] Kim et al., Nature Machine Intelligence 2026: 260 сравнений 5 координационных схем, 6 задач и 3 семейств моделей при фиксированных промптах, инструментах и бюджете; возможности одиночного агента предсказывают, поможет ли команда — https://doi.org/10.1038/s42256-026-01268-y ; https://github.com/ybkim95/agent-scaling/
- [Память и scheduling] Kang et al., Findings EMNLP 2026, MAS-OS: менеджер графовой памяти, обучаемый планировщик агентов и бюджетный маршрутизатор контекста; 4 бенчмарка, абляции и сравнение при равной цене — https://aclanthology.org/2026.findings-emnlp.1716/ ; https://github.com/BAI-LAB/MAS-OS
- [Вычислительный бюджет] Wunderlich et al., ACL 2026: 34 конфигурации CoT/self-consistency/refinement/debate/MoA на двух бенчмарках; Парето-сравнение вычислений и правило подбора числа генераций/слоёв — https://aclanthology.org/2026.acl-srw.1/ ; https://github.com/Multi-Agent-LLMs/lm-evaluation-harness
- [Топология и масштаб] Qian et al., ICLR 2025, MACNET: факторные тесты DAG-топологий и размеров групп до 1 000+ агентов; случайные структуры снижают временные затраты против mesh, рост качества насыщается — https://openreview.net/forum?id=gFrVsxAEO4 ; https://github.com/OpenBMB/ChatDev/tree/macnet
