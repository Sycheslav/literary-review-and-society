---
id: "github-ybkim95-agent-scaling"
type: "work"
title: "Agent Scaling: код и артефакты к статье «Capable language models can outgrow the benefits of collaboration»"
original_title: "Agent Scaling (code and artifacts for «Capable language models can outgrow the benefits of collaboration»)"
authors: ["Yoon Kim et al.; see associated paper record"]
year: 2026
kind: "project"
importance: "peripheral"
status: "working_summary"
source_url: "https://github.com/ybkim95/agent-scaling/"
html_url: "https://literary-review-and-society-production.up.railway.app/works/github-ybkim95-agent-scaling"
topics: ["platforms","coordination","memory","communities"]
---

# Agent Scaling: код и артефакты к статье «Capable language models can outgrow the benefits of collaboration»

Рабочий обзор для обсуждения. Аннотации и переводы требуют сверки с первоисточником перед цитированием. Предложения проекта не являются результатами проведённых экспериментов.

[К индексу](../index.md) · [Страница сайта](https://literary-review-and-society-production.up.railway.app/works/github-ybkim95-agent-scaling)

**Оригинальное название:** Agent Scaling (code and artifacts for «Capable language models can outgrow the benefits of collaboration»)

**Авторы:** Yoon Kim et al.; see associated paper record  
**Год:** 2026  
**Вид:** project · **Значимость:** peripheral

**Первоисточник:** [https://github.com/ybkim95/agent-scaling/](https://github.com/ybkim95/agent-scaling/)

## Аннотация

Официальные артефакты к статье в Nature Machine Intelligence о том, когда рост возможностей модели уменьшает выигрыш от мультиагентного сотрудничества (multi-agent collaboration).

## Как устроено исследование

README связывает код со статьёй в Nature Machine Intelligence «Capable language models can outgrow the benefits of collaboration» и препринтом «Towards a science of scaling agent systems». Бенчмарки: BrowseComp-Plus, PlanCraft, SWE-bench Verified, Terminal-Bench, Workbench и Finance Agent; сравнимые конфигурации: одиночный агент (single-agent), централизованная команда с лидером (centralized team with lead), децентрализованная одноранговая (decentralized peer-to-peer), гибридная (hybrid) и независимые агенты (independent agents). Число агентов настраивается для централизованного режима; задачи включают вопросы-ответы с многошаговым поиском (web/multi-hop QA), планирование в Minecraft (Minecraft planning), программные задачи (software issues), работу в терминале (terminal), бизнес-инструменты и финансы. Это системный бенчмарк масштабирования агентов, а не наблюдение за долгосрочной культурой или дружбой.

## Техническая реализация

Python 3.11 и выше, `uv`, конфигурации Hydra; API через провайдеров, совместимых с LiteLLM: OpenAI, Gemini, Anthropic. README советует фиксировать (pinning) версию релиза: рукопись цитирует тег v2.1.3, версия v2.2.x исправляет скрипты анализа. Типы мультиагентности указаны в конфигурациях; конвейер записывает полную конфигурацию запуска, логи, промпты, ответы и вызовы инструментов, результаты по каждому экземпляру и метрики. Два датасета требуют скриптов загрузки; SWE-bench и Terminal-Bench требуют Docker. Модели, указанные в README: варианты GPT-5, Gemini 2.5 и 2.0, Claude Sonnet 4.5, 4 и 3.7 (старые версии имеют ограничения по бэкенду).

## Промпты и инструкции агентам

Промпты и конфигурации задают рабочие процессы одиночного и мультиагентного режимов, инструменты и задачи; пример запуска сам по себе не раскрывает все промпты. Лог может сохранять сообщения, вызовы инструментов и выбранные параметры; их нужно анализировать как спецификацию экспериментального агента.

## Результаты подробно

README устанавливает связь с опубликованной статьёй и предоставляет конвейер для получения результатов, но не содержит полноценной таблицы эффектов. Главное утверждение самой журнальной статьи — сильные модели могут превысить выгоды сотрудничества; численные результаты следует брать из статьи, а не из README. Версия v2.2.x исправляет скрипты анализа относительно тега, указанного в рукописи, поэтому результаты зависят от коммита.

## Выводы авторов

Артефакты полезны для воспроизведения границ, в которых масштабирование мультиагентного тестирования (multi-agent test-time scaling) даёт пользу или проигрывает мощной одиночной модели. Необходимо фиксировать набор данных, архитектуру, модель, число агентов и версию кода.

## Ограничения и интерпретация

Различия задач и моделей, а также централизованных и децентрализованных конвейеров затрудняют атрибуцию. Несколько датасетов нужно скачивать отдельно; версии и конечные точки (endpoints) могут исчезнуть. Это бенчмарк производительности на задачах, а не оценка социальной нормы.

## Расходы и вычисления

README не публикует суммарной стоимости API; сравнения по вычислениям и качеству, а также журналирование использования (usage logging) есть в экспериментальных артефактах, но автоматически в денежную сумму они не переводятся. Один вызов на агента не фиксирован для всех задач.

## Связи

- [Архитектуры, платформы и масштабирование](../topics/platforms.md) — belongs_to_topic.
- [Роли, лидерство, разделение труда и координация](../topics/coordination.md) — belongs_to_topic.
- [Коллективная память, язык и культурная передача](../topics/memory.md) — belongs_to_topic.
- [Реальные агентные сообщества и практические эксперименты](../topics/communities.md) — belongs_to_topic.

- [На пути к науке о масштабировании агентных систем](arxiv-2512-08296.md) — related_to; тип и направление влияния не установлены.

## Дополнительные источники

- [Страница проекта](https://dam-prod.media.mit.edu/s42256-026-01268-y.pdf)

## Подробное изложение

[Изложение на русском](../summaries/github-ybkim95-agent-scaling.md). Статус источника: repository.

## Полный текст

Полные тексты третьих лиц в этот экспорт не входят: права на распространение в исходной схеме не указаны. Используйте ссылку на первоисточник или [уже существующую страницу оригинала на сайте](https://literary-review-and-society-production.up.railway.app/works/github-ybkim95-agent-scaling/text).
