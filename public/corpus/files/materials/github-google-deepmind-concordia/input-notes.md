---
id: github-google-deepmind-concordia-input-notes
type: material
title: 'Исходные сведения: google-deepmind/concordia'
work_id: github-google-deepmind-concordia
source_kind: secondary_project_notes
verification_status: source_consolidated
---

# Сведения из исходного корпуса

> Это прежние обзоры проекта, а не оригинальный текст авторов. Утверждения могут быть исправлены в основной карточке.

## design

Источник: `исходники исследований лит обзор/Литературный обзор социумы LLM-агентов.md`, строка 258.

Генеративная социальная симуляция с «гейм-мастером»

## note

Источник: `Социумы ИИ-агентов программа исследований Лаб. 57 ИПУ РАН × «Верхум».md`, строка 413. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

- Лаборатория: [страница Лаб. 57](https://www.ipu.ru/node/11925), [Д.А. Новиков](https://www.ipu.ru/staff/novikov), [И.В. Козицин](https://www.ipu.ru/node/83140), [обзор по рефлексии](https://ijassa.ipu.ru/index.php/ijassa/article/view/401).
- Книга: [verhum.org](https://verhum.org) и краткое изложение, приложенное к запросу.
- Цены моделей (26.10.2026): страницы OpenRouter — [GPT-6 Luna](https://openrouter.ai/openai/gpt-6-luna), [Claude Haiku 5.5](https://openrouter.ai/anthropic/claude-haiku-5.5), [DeepSeek V4.1 Flash](https://openrouter.ai/deepseek/deepseek-v4.1-flash), [GLM 5.3 Flash](https://openrouter.ai/z-ai/glm-5.3-flash), [MiMo-V2.6-Flash](https://openrouter.ai/xiaomi/mimo-v2.6-flash), [MiniMax M3.1 Flash](https://openrouter.ai/minimax/minimax-m3.1-flash), [Gemini 3.5 Flash-Lite](https://openrouter.ai/google/gemini-3.5-flash-lite), [Qwen3.8 Flash](https://openrouter.ai/compare/qwen/qwen3.8-flash); [прайс Anthropic](https://platform.claude.com/docs/en/about-claude/pricing); [рейтинг OpenRouter](https://openrouter.ai/rankings).
- Условия OpenRouter: [тарифы и комиссия](https://openrouter.ai/pricing), [маршрутизация провайдеров](https://openrouter.ai/docs/guides/routing/provider-selection.md), [лимиты бесплатных моделей](https://openrouter.ai/blog/tutorials/free-llm-apis-compared/).
- Затраты похожих исследований: ссылки в таблице соответствующего раздела; человеческий порог меньшинства — [Centola et al., 2018](https://www.asc.upenn.edu/news-events/news/research-finds-tipping-point-large-scale-social-change).
- Инструменты: [Concordia](https://github.com/google-deepmind/concordia/releases), [AutoGen — статус поддержки](https://github.com/microsoft/autogen).
- Расчёт бюджетов выполнен скриптом по формуле из раздела «Модель затрат»; параметры промптов — оценка, их нужно заменить замерами пилота.

## note

Источник: `исходники исследований лит обзор/исследования/ресерч1.txt`, строка 43. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

Моя рекомендация для первого исследовательского стенда — простой собственный цикл симуляции + SQLite + модельный шлюз OpenRouter; при желании взять Concordia как основу среды. Для исследования соцмедиа вместо самописной ленты стоит отдельно посмотреть на OASIS. Ни один из этих проектов не делает «дружбу» валидированной метрикой автоматически.[29][30][31]

## note

Источник: `исходники исследований лит обзор/исследования/ресерч1.txt`, строка 64. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

- Concordia — кандидат для симуляции небольшой социальной среды и правил взаимодействия. Не готовая лаборатория «двадцать дружных агентов»: среду и конкретные метрики всё равно придётся собрать.[29]
- OASIS — лучший кандидат, если вопрос именно про ленту, подписки, публикации, рекомендации и распространение мнений. Для 20 агентов может быть избыточна, зато много механик соцмедиа уже существует.[30]
- AgentSociety — смотреть, если задача вырастет до крупного города и тысяч агентов; для первого стенда на 20 это тяжёлая артиллерия.[31]
- Hermes и OpenClaw — годятся как оболочки для отдельных профилей и экспериментов с личностями. В Hermes профили изолируют конфигурацию и память, но общего форума и воспроизводимого расписания ходов это само по себе не создаёт — их придётся строить отдельно.[12][14]

## note

Источник: `исходники исследований лит обзор/исследования/ресерч1.txt`, строка 97.

[29] https://github.com/google-deepmind/concordia

## note

Источник: `Социумы ИИ-агентов программа исследований Лаб. 57 ИПУ РАН × «Верхум».md`, строка 50. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

**Подтвердилось без замечаний:** Generative Agents (UIST 2023), Papachristou & Yuan (PNAS Nexus, 2025), Münker et al. (EACL 2026), Sreedhar et al. (IUI 2025), SOTOPIA (ICLR 2024), Riedl (постер ICLR 2026), AgentSociety (препринт), Project Sid (препринт), Concordia (развивается, релиз v2.4.0 в 2026 г.).

## summary

Источник: `исходники исследований лит обзор/исследования/deep-research-report (12).md`, строка 17. Фрагмент относится сразу к нескольким источникам; не все его числа можно приписывать этой работе.

Использование генеративных агентов как модели общества; именно так позиционируются Concordia и AgentSociety [неразрешённая цитата старого отчёта]

## summary

Источник: `исходники исследований лит обзор/исследования/deep-research-report (12).md`, строка 216.

Специально создан для generative social simulation. Есть агенты, компоненты памяти, simulation engine и Game Master, который формализует последствия действий в физической/социальной/цифровой среде. Работает с обычным LLM API. [неразрешённая цитата старого отчёта]

## summary

Источник: `исходники исследований лит обзор/исследования/deep-research-report (12).md`, строка 221.

Для публикационной серии Лаборатории №57 я бы в конечном итоге выбрал именно этот путь, используя CAMEL/Concordia как источник компонентов

## note

Источник: `исходники исследований лит обзор/исследования/deep-research-report (12).md`, строка 227.

> **Python + свой event-driven simulation core + Concordia или CAMEL для отдельных компонентов + OpenRouter как model layer.**
