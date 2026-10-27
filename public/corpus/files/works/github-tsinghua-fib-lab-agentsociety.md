---
id: github-tsinghua-fib-lab-agentsociety
type: work
title: tsinghua-fib-lab/AgentSociety
authors:
- Jinghua Piao
- Jun Zhang
- Haoyu Huang
- Keming Zhang
- Jing Yi Wang
- Xinran Zhao
- Songwei Li
- Boyuan Sun
- Jiayi Chang
- Fengli Xu
- Chunyan Wang
- Fang Zhang
- Ke Rong
- Jun Su
- Tianguang Meng
- Yi Liu
- Qingguo Meng
- Yu Wang
- Yong Li
year: 2026
source_kind: project
venue: 'GitHub-репозиторий tsinghua-fib-lab/AgentSociety. Пакеты: agentsociety2 (рекомендуемый, v2) и agentsociety
  (v1, legacy). Ссылки README: arXiv:2607.11895 (AgentSociety 2, 2026) и arXiv:2502.08691 (AgentSociety v1, 2025)'
publication_status: Открытый фреймворк (лицензия Apache-2.0, кроме папки packages/agentsociety/commercial). Версия
  v2 рекомендуется README. Статья AgentSociety 2 (arXiv:2607.11895) указана в README, в проверенном тексте её полный
  текст не открывался.
topics:
- platforms
- coordination
- communities
- methodology
language: en
identifiers:
- github-tsinghua-fib-lab-agentsociety
source_urls:
- https://github.com/tsinghua-fib-lab/AgentSociety
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-tsinghua-fib-lab-agentsociety/readme-source.md
- materials/github-tsinghua-fib-lab-agentsociety/input-notes.md
related:
- relation: discusses
  target: arxiv-2502-08691
- relation: discusses
  target: github-google-deepmind-concordia
- relation: discusses
  target: github-camel-ai-oasis
- relation: discusses
  target: arxiv-2411-11581
summary_short: 'Фреймворк Университета Цинхуа для симуляций LLM-агентов в городской и исследовательской среде: v1
  — крупномасштабный городской симулятор, v2 — LLM-нативная платформа для социальных наук.'
key_findings:
- 'README разделяет два пакета: AgentSociety 2 (рекомендован; LLM-нативная платформа с маршрутизаторами рассуждения
  CodeGen, ReAct, Plan-Execute, Two-Tier и Search) и AgentSociety 1.x (legacy; городская симуляция с Ray и gRPC).'
- 'У v2 заявлены исследовательские навыки: поиск литературы, генерация гипотез, дизайн эксперимента и написание
  статьи, а также воспроизведение экспериментов через JSONL-replay и DuckDB.'
- У v1 в README перечислены городская симуляция (мобильность, экономика, социальный модуль), распределённые вычисления
  на Ray и многоагентная координация с коммуникацией.
- 'Требования по README: Python 3.11 и выше и ключ API LLM (OpenAI, Anthropic или любой провайдер litellm); пример
  задаёт модель через переменную AGENTSOCIETY_LLM_MODEL = gpt-5.5.'
importance: supporting
importance_reason: Инфраструктура для социальных симуляций LLM-агентов, в том числе с многоагентной координацией;
  для первого стенда на ~20 агентов, как отмечено в старых заметках, она тяжёлая, но принципиально релевантна теме.
  Эмпирические результаты в README не приведены.
tags:
- AgentSociety
- LLM agents
- urban simulation
- social science
- Ray
- MCP
- replay
- Tsinghua FIB
models:
- gpt-5.5
agents_count: не опубликовано в README (в примере один агент; заявлены городские масштабы в v1)
importance_basis: editorial
---

# tsinghua-fib-lab/AgentSociety

[К главному обзору](../README.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Роли, лидерство, разделение труда и координация](../topics/coordination.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md)

## Коротко

> Фреймворк Университета Цинхуа для симуляций LLM-агентов в городской и исследовательской среде: v1 — крупномасштабный городской симулятор, v2 — LLM-нативная платформа для социальных наук.

- **Значимость для обзора:** дополняющая — Инфраструктура для социальных симуляций LLM-агентов, в том числе с многоагентной координацией; для первого стенда на ~20 агентов, как отмечено в старых заметках, она тяжёлая, но принципиально релевантна теме. Эмпирические результаты в README не приведены.
- **Число агентов:** не опубликовано в README (в примере один агент; заявлены городские масштабы в v1)
- **Модели:** gpt-5.5
- **Ключевые слова:** AgentSociety, LLM agents, urban simulation, social science, Ray, MCP, replay, Tsinghua FIB

**Главные результаты**

1. README разделяет два пакета: AgentSociety 2 (рекомендован; LLM-нативная платформа с маршрутизаторами рассуждения CodeGen, ReAct, Plan-Execute, Two-Tier и Search) и AgentSociety 1.x (legacy; городская симуляция с Ray и gRPC).
1. У v2 заявлены исследовательские навыки: поиск литературы, генерация гипотез, дизайн эксперимента и написание статьи, а также воспроизведение экспериментов через JSONL-replay и DuckDB.
1. У v1 в README перечислены городская симуляция (мобильность, экономика, социальный модуль), распределённые вычисления на Ray и многоагентная координация с коммуникацией.
1. Требования по README: Python 3.11 и выше и ключ API LLM (OpenAI, Anthropic или любой провайдер litellm); пример задаёт модель через переменную AGENTSOCIETY_LLM_MODEL = gpt-5.5.

## Библиография и проверка

- **Авторы:** Jinghua Piao; Jun Zhang; Haoyu Huang; Keming Zhang; Jing Yi Wang; Xinran Zhao; Songwei Li; Boyuan Sun; Jiayi Chang; Fengli Xu; Chunyan Wang; Fang Zhang; Ke Rong; Jun Su; Tianguang Meng; Yi Liu; Qingguo Meng; Yu Wang; Yong Li
- **Год:** 2026.
- **Площадка / статус:** GitHub-репозиторий tsinghua-fib-lab/AgentSociety. Пакеты: agentsociety2 (рекомендуемый, v2) и agentsociety (v1, legacy). Ссылки README: arXiv:2607.11895 (AgentSociety 2, 2026) и arXiv:2502.08691 (AgentSociety v1, 2025); Открытый фреймворк (лицензия Apache-2.0, кроме папки packages/agentsociety/commercial). Версия v2 рекомендуется README. Статья AgentSociety 2 (arXiv:2607.11895) указана в README, в проверенном тексте её полный текст не открывался..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

> Консолидировано из прежних обзоров; приведённые здесь детали и числа отдельно по первоисточнику не подтверждены.

В исходном корпусе найден источник; содержательный пересказ требует доступного первичного текста. Ссылки и исходные сведения сохранены ниже.

## Дизайн исследования

Из README следуют два различных проектных подхода. AgentSociety 2 — платформа для исследовательских экспериментов с LLM-агентами: агенты объявляются как метаданные (спецификации с id, профилем и конфигурацией), а класс society создаёт их рабочие пространства при init(). Среда собирается из модулей (например, SimpleSocialSpace из contrib.env), управляемых маршрутизатором (CodeGenRouter по умолчанию). Агенты описываются как «stateless records», которыми управляют Ray Tasks, с клиентами среды, LLM, трассировки и replay через единый ServiceProxy. AgentSociety v1 задуман как крупномасштабный городской симулятор: мобильность, экономика, социальный модуль, распределённое выполнение на Ray и интеграция через gRPC. В README не указаны протоколы экспериментов, контрольные условия, метрики, число агентов в исследованиях, порядок ходов по умолчанию и результаты валидации. Тексты статей arXiv:2607.11895 и arXiv:2502.08691 по ссылкам в проверенный текст не входили.

## Техническая реализация

Установка: pip install agentsociety2 (v2) и pip install agentsociety (v1). Требуется Python 3.11 и выше. LLM настраивается переменными окружения AGENTSOCIETY_LLM_API_KEY, AGENTSOCIETY_LLM_API_BASE (пример: https://api.openai.com/v1) и AGENTSOCIETY_LLM_MODEL (пример: gpt-5.5). Заявлены также клиенты litellm-провайдеров. Архитектура v2: маршрутизаторы рассуждения (CodeGen по умолчанию, ReAct, Plan-Execute, Two-Tier, Search), горячо подключаемые инструменты среды, MCP-интеграция, Ray Tasks для параллельного выполнения, DuckDB для чтения трасс, JSONL-каталог для replay. Структура репозитория: packages/agentsociety2 (v2), packages/agentsociety (v1), agentsociety-community, agentsociety-benchmark, frontend (React), extension (VSCode), examples для v2 (basics, games, advanced). Версии пакетов и значения по умолчанию для параметров, кроме перечисленных, в README не указаны. Память, коммуникация и расписание ходов на уровне конкретных агентов в README подробно не раскрыты.

## Промпты и инструкции

В README не опубликованы тексты системных промптов агентов или маршрутизаторов. Пример вызова: society.ask("What's your name?"). Шаблоны и инструкции по умолчанию для маршрутизатора CodeGen следует искать в исходном коде packages/agentsociety2; в проверенном тексте их нет, поэтому точный runtime-шаблон не восстанавливается.

## Опубликованные расходы и вычисления

README не публикует расходов, токенов или тарифов. Упомянутые переменные окружения указывают на доступ к внешнему LLM API, но сумм или расчётов стоимости симуляций нет: не опубликовано.

## Результаты

В README нет экспериментальных результатов по поведению агентов, валидации или сравнению с эмпирическими данными. Публикации arXiv:2607.11895 (v2) и arXiv:2502.08691 (v1) указаны как основные источники; их результаты в этой карточке не приписываются, потому что полный текст не проверялся.

## Выводы авторов

Авторы README заявляют, что AgentSociety 2 предназначен для социальных наук и исследовательских экспериментов, а v1 — для городского масштаба. Это назначение, а не эмпирический вывод.

## Ограничения и интерпретация

Версия v1 описывает городское моделирование и не является микроуровневой платформой для малых групп; v2 рекомендован, но в README нет статистики использования и валидации. Зависимость от внешних LLM API и версии модели. Сравнение с задачами стенда на ~20 агентов требует отдельной оценки сложности установки и стоимости (вне данного источника). Лицензия Apache-2.0 не распространяется на папку commercial в v1.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/tsinghua-fib-lab/AgentSociety).
- [вводный раздел (Papers: arXiv:2607.11895 и arXiv:2502.08691); раздел Packages (AgentSociety 2 и 1.x, Features); раздел Project Structure; раздел Quick Start (переменные окружения, пример CodeGenRouter, SimpleSocialSpace, AgentSociety.ask); раздел Requirements; раздел License; раздел Citation (BibTeX)](https://raw.githubusercontent.com/tsinghua-fib-lab/AgentSociety/main/README.md): состав пакетов, функции v1 и v2, требования, пример вызова, ссылки на статьи, лицензия.
- [ссылка на репозиторий в тексте README](https://github.com/tsinghua-fib-lab/AgentSociety): источник текста; сам репозиторий по ссылке в этом проходе не открывался.
- [Локальный текст: readme-source.md](../materials/github-tsinghua-fib-lab-agentsociety/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-tsinghua-fib-lab-agentsociety/input-notes.md).

## Связанные работы

- discusses: [arxiv-2502-08691](arxiv-2502-08691.md).
- discusses: [github-google-deepmind-concordia](github-google-deepmind-concordia.md).
- discusses: [github-camel-ai-oasis](github-camel-ai-oasis.md).
- discusses: [arxiv-2411-11581](arxiv-2411-11581.md).

## Происхождение записи

- `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 261.
- `исходники исследований лит обзор/исследования/ресерч1.txt`, строка 43.
- `исходники исследований лит обзор/исследования/ресерч1.txt`, строка 64.
- `исходники исследований лит обзор/исследования/ресерч1.txt`, строка 99.
