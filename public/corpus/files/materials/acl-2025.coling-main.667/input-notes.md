---
id: acl-2025.coling-main.667-input-notes
type: material
title: 'Исходные сведения: Searching for Structure: Investigating Emergent Communication with Large Language Models'
work_id: acl-2025.coling-main.667
source_kind: secondary_project_notes
verification_status: source_consolidated
---

# Сведения из исходного корпуса

> Это прежние обзоры проекта, а не оригинальный текст авторов. Утверждения могут быть исправлены в основной карточке.

## note

Источник: `Дополнительный обзор социумов ИИ-агентов.md`, строка 21. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

1. **Не только модель и персона, но и структура связи влияет на положение агента.** В эксперименте с гетерогенными моделями базовая модель сильнее персоны объясняла внимание к публикациям ([Roytburg и Ippolito](https://arxiv.org/abs/2610.07535)); в отдельной большой модели сетей хабы радикально меняли порог перехода к новой конвенции ([Passaro и соавт.](https://arxiv.org/abs/2610.31165)). Вторая работа использует извлечённые политики, а не постоянные вызовы живых LLM. Общая гипотеза о взаимодействии этих факторов требует нового опыта.
2. **Согласованность не равна коммуникационной компетентности.** В задаче с распределённой информацией агенты иногда достигали высокой успешности без общения, что связано с особенностями среды и возможностью пробовать ходы ([Peng и соавт.](https://arxiv.org/abs/2510.25595)). Поэтому в стенде следует проверять конкретный маршрут информации и выключать обходные стратегии.
3. **Репутация и нормы могут быть заданы средой и зависеть от ситуации.** Эксперименты с метанормами предполагают возможность наблюдать нарушение и наказывать ([Horiguchi и соавт.](https://arxiv.org/abs/2409.00993)); анализ реальной сети MoltBook обнаруживает жалобы на нарушение норм наряду со слабой взаимностью ([MoltNet](https://arxiv.org/abs/2602.13458)). Существование лексики нормы, графа контактов и санкций — три разных результата.
4. **Культурная передача не гарантирует улучшения.** В межпоколенной игре передаваемые словари становились легче для воспроизведения, но не улучшали качество коммуникации ([Kouwenhoven и соавт.](https://aclanthology.org/2025.coling-main.667/)); в [GlossoGen](https://arxiv.org/abs/2609.01491) новичок мог осваивать выработанный парой код из истории, но это замена одного участника, не полной популяции.
5. **Человеческий эталон — отдельная задача.** Сходство поведения с человеком следует измерять по распределениям и механизмам, а не по одному удачному рассказу: [критический обзор](https://pmc.ncbi.nlm.nih.gov/articles/PMC12627210/) обнаружил распространённость субъективной проверки; [HumanStudy-Bench](https://arxiv.org/abs/2602.00685) показывает расхождение между совпадением знака эффекта и его величины.
6. **Индивидуально выгодная стратегия может ухудшать общую систему.** В [непрерывном двойном аукционе](https://arxiv.org/abs/2609.02580) зафиксирован длительный разрыв между ставками покупателей и продавцов и неполная эффективность торговли. Это препринт, конкретные результаты ограничены одним механизмом и тремя модельными популяциями.

## note

Источник: `Дополнительный обзор социумов ИИ-агентов.md`, строка 265.

[Страница и полный текст ACL Anthology](https://aclanthology.org/2025.coling-main.667/), [PDF](https://aclanthology.org/2025.coling-main.667.pdf), [arXiv](https://arxiv.org/abs/2412.07646).

## note

Источник: `Дополнительный обзор социумов ИИ-агентов.md`, строка 267.

**Метод.** Два LLM-агента учились и общались в референциальной игре с искусственным языком для объектов, различающихся формой, цветом и количеством. После обучения пары словарь наиболее структурированного агента передавался следующему поколению как исходный материал. Авторы провели 15 начальных симуляций и шесть цепочек передачи по восемь поколений; основной опубликованный анализ использует Llama 3 70B.

## note

Источник: `Дополнительный обзор социумов ИИ-агентов.md`, строка 269.

**Результат.** Повторное обучение через поколения сделало сигналы проще для воспроизведения, но не повысило успешность коммуникации. Передаваемые языки становились длиннее и иногда вырождались: один сигнал начинал обозначать несколько значений. Метрики структуры дали смешанную картину: TopSim рос без статистически значимого тренда, а разнообразие n-грамм снижалось. Это наглядный результат о том, что передача может повышать усваиваемость, одновременно ухудшая различимость и выразительность.

## note

Источник: `Дополнительный обзор социумов ИИ-агентов.md`, строка 271.

**Ограничения.** Всего шесть цепочек; модель и экспериментальный мир узкие, пары состоят из двух агентов. На следующий цикл отбирали словарь агента с максимальным TopSim, поэтому передача содержала заранее заданный критерий отбора. Авторы отдельно отмечают зависимость от промптов, токенизации и инструкций, а также отсутствие прямого сравнения с человеческими участниками в этой статье.

## note

Источник: `Дополнительный обзор социумов ИИ-агентов.md`, строка 273.

**Статус.** Работа опубликована в рецензируемом сборнике COLING 2025; полный текст и материалы доступны через ACL Anthology.

## note

Источник: `исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 2. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

- [Оркестратор] El Farol, локальная коммуникация и координация: https://doi.org/10.1162/ARTL.a.459
- [Оркестратор] Человек и агент, эксперимент о справедливости: https://doi.org/10.1093/nsr/nwag223
- [Оркестратор] Критический обзор валидации генеративных ABM: https://arxiv.org/abs/2504.03274
- [Оркестратор] Проверка LLM как заменителей людей: https://pmc.ncbi.nlm.nih.gov/articles/PMC12184514/
- [Оркестратор] Обзор 97 работ о моделировании соцсетей: https://doi.org/10.1016/j.knosys.2026.116947
- [Оркестратор] Двухэтапная валидация норм: https://repositories.cdlib.org/uc/item/6dg1f4s7
- [Оркестратор] Конфликт принципала и агента, обещания, 93 модели: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6884058
- [Оркестратор] Реестр проектов синтетических обществ: https://github.com/danielrosehill/AI-Synthetic-Society-Experiments
- [Платформы] YuLan-OneSim: открытая социальная симуляция и замер на 100 тыс. агентов — https://arxiv.org/abs/2505.07581 ; https://github.com/RUC-GSAI/YuLan-OneSim
- [Платформы] Воспроизводимый Reddit-подобный форум Y Social / Voat, 30 прогонов — https://doi.org/10.1140/epjds/s13688-026-00674-x ; https://github.com/atomashevic/voat-simulation
- [Платформы] Эксперимент с гетерогенными открытыми моделями в одной соцсети — https://arxiv.org/abs/2610.07535 ; https://github.com/ippolito-cmu/diverse_social_sim
- [Платформы] GA-S3: агрегированные group agents, Llama 3 8B и повторяемые прогнозы соцсетевых событий — https://arxiv.org/abs/2506.03532 ; https://github.com/AI4SS/GAS-3
- [Платформы] Сетевая топология и tipping в популяциях до 100 тыс. (новый препринт) — https://arxiv.org/abs/2610.31165
- [Платформы] GOD: локальный интерфейс для воспроизведения, инспекции и управления малыми обществами агентов — https://arxiv.org/abs/2608.27992 ; https://github.com/XiaoLuoLYG/GOD
- [Социум] Horiguchi et al., естественная эволюция норм и метанорм в Norms Game: https://arxiv.org/abs/2409.00993
- [Социум] Takata et al., дифференциация агентов в пространственном сообществе: https://arxiv.org/abs/2411.03252
- [Социум] Bellina et al., конформность и социальное влияние на AI-агентов: https://arxiv.org/abs/2601.05384
- [Социум] MoltNet, месячный наблюдательный анализ норм, наград и поведения MoltBook: https://arxiv.org/abs/2602.13458
- [Социум] Social Simulacra, сравнение сообществ MoltBook и Reddit: https://arxiv.org/abs/2603.16128
- [Социум] Pires et al., LLM-оценка репутации и косвенная взаимность: https://doi.org/10.1093/pnasnexus/pgag297
- [Культура и язык] Stengel-Eskin et al., GlossoGen: controlled emergence and transmission of agent language by newcomer replacement — https://arxiv.org/abs/2609.01491 ; https://github.com/agencyenterprise/GlossoGen
- [Координация] Agashe et al., LLM-Coordination: кооперативные игры Hanabi/Overcooked и тесты взаимопонимания — https://aclanthology.org/2025.findings-naacl.448/
- [Координация] Sun et al., Collab-Overcooked: последовательная кооперация и адаптация 13 LLM — https://aclanthology.org/2025.emnlp-main.249/
- [Координация] Zhu et al., MultiAgentBench: роли, топологии и совместная работа LLM-агентов — https://aclanthology.org/2025.acl-long.421/
- [Коммуникация] Peng et al., Communication and Verification under Information Asymmetry — https://arxiv.org/abs/2510.25595
- [Коммуникация] Wang et al., Learning to Interrupt in Language-based Multi-agent Communication — https://arxiv.org/abs/2604.06452
- [Координация] Tessera et al., Benchmarking Open-Ended Multi-Agent Coordination (alem) — https://arxiv.org/abs/2606.08340
- [Координация] Shu et al., AgentWorld: Benchmarking Long-Horizon Collaboration — https://arxiv.org/abs/2609.31590
- [Коммуникация] Huang & Xiao, Communication Shapes Collective Inference in Self-Adapting LLM Societies: Evidence from Mafia — https://arxiv.org/abs/2610.05041
- [Память и язык] Talebirad et al., ALIFE 2026: persistent agent notebooks support signaling conventions; memory architecture changes the channel-capacity curve — https://arxiv.org/abs/2607.00233
- [Язык и поколения] Kouwenhoven et al., COLING 2025: iterated transmission makes LLM language more learnable but longer and partly degenerate — https://aclanthology.org/2025.coling-main.667/
- [Культурная эволюция] Kato, Suzuki & Arita, JSAI 2025: 25 LLM agents evolve SF plots under individual/social learning strategies — https://doi.org/10.11517/pjsai.JSAI2025.0_3O1OS44a03
- [Язык и совместное обучение] Kouwenhoven et al., IJCAI 2025: referential games across human-human, LLM-LLM, and human-LLM pairs — https://doi.org/10.24963/ijcai.2025/1144
- [Оркестратор] Данные шести опытов MoltBook/OpenClaw GLM-5: https://huggingface.co/datasets/Ayushnangia/moltbook-entropy-collapse-glm-5
- [Оркестратор] Практический запуск Concordia на ноутбуке: https://zenn.dev/taka4/articles/f38aad4ba71088
