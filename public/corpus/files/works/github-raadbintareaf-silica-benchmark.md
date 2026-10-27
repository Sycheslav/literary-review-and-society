---
id: github-raadbintareaf-silica-benchmark
type: work
title: SILICA Benchmark (official code for human behavioral-distribution evaluation)
authors:
- Raad Bin Tareaf
year: 2026
source_kind: project
venue: Official GitHub repository for arXiv:2608.28182
publication_status: Открытый код/бенчмарк; научные выводы в связанной статье, а не в README.
topics:
- baselines
- platforms
- methodology
- communities
language: en
identifiers:
- github-raadbintareaf-silica-benchmark
source_urls:
- https://github.com/raadbintareaf/silica-benchmark
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-raadbintareaf-silica-benchmark/readme-source.md
- materials/github-raadbintareaf-silica-benchmark/input-notes.md
related:
- relation: discusses
  target: arxiv-2608-28182
- relation: discusses
  target: doi-10-17605-osf-io-afsdu
- relation: discusses
  target: web-theaidigest-org-8ecf0b2d70
summary_short: SILICA — кодовый benchmark LLM-групп на интерактивных социальных играх с человеческими якорями, perturbation-тестами
  и тестами на загрязнение.
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# SILICA Benchmark (official code for human behavioral-distribution evaluation)

[К главному обзору](../README.md) · [Классические ABM, RL и теоретические основания](../topics/baselines.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md) · [Методология, валидация и сравнение с людьми](../topics/methodology.md) · [Реальные агентные сообщества и практические эксперименты](../topics/communities.md)

## Коротко

> SILICA — кодовый benchmark LLM-групп на интерактивных социальных играх с человеческими якорями, perturbation-тестами и тестами на загрязнение.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Raad Bin Tareaf
- **Год:** 2026.
- **Площадка / статус:** Official GitHub repository for arXiv:2608.28182; Открытый код/бенчмарк; научные выводы в связанной статье, а не в README..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

SILICA оценивает интерактивные популяции LLM-агентов сразу по соответствию человеческим поведенческим распределениям, устойчивости к perturbations и сопротивлению contamination. Репозиторий включает повторную дилемму, общественные блага с наказанием, bargaining, money request и naming-game/tipping, вместе с человеческими якорями, classical baselines и скриптами анализа.

## Дизайн исследования

README перечисляет пять сред: repeated Prisoner's Dilemma; Public Goods Game ± punishment; Ultimatum/Dictator/Trust bargaining; 11–20 money request; naming game + tipping; плюс recognition probes. Варианты C0–C3 меняют формулировку/репрезентацию или структуру задачи, включая no-dilemma, rejection pays, inverted ladder, glyphs и anti-coordination. Есть human anchors D1–D7 с provenance flags и классические baseline Roth–Erev, conditional cooperators, TitForTat и минимальная naming-game модель. Бенчмарк одновременно оценивает fidelity к распределению людей, робастность к переформулировкам и contamination resistance; конкретная статья определяет метрики и человеческую основу.

## Техническая реализация

Официальный репозиторий содержит YAML configs по экспериментам, prompts/renderers как audit library, C0–C3 skins с formal checks, среды, модельные backend openai-compatible/vLLM/Ollama/APIs, mock mode и аналитику W1/TV/kappa/swing/sign-stability. README дает smoke test на CPU без API (<2 минуты), команды локального vLLM Qwen/Qwen3-14B и одно реальное pd baseline. Все реальные результаты должны производиться на user/server backend; demo mock результаты не входят в paper.

## Промпты и инструкции

Prompt perturbations специфицированы через PerturbationSpec и renderers; recognition probes дополняют contamination checks. Есть явно отдельный prompt/обработка для правила, меняющего поверхность игрового сюжета. Соответствие human anchor должно пересчитываться из оригинальных датасетов: README помечает часть источников TO_VERIFY/UNCONFIRMED.

## Опубликованные расходы и вычисления

README не дает итоговой стоимости API для статьи; запуск на локальном vLLM использует GPU, а smoke mock — без API. Число запусков не тождественно реальным денежным расходам.

## Результаты

Это кодовый репозиторий не сообщает headline empirical result как самостоятельный источник. Явное integrity boundary: mock результаты — demo-scale, а каждое число для статьи должно быть произведено на сервере с реальными model backends и обработано Phase 6 scripts. Человеческие якоря с flags требуют перепроверки по первичным данным до submission.

## Выводы авторов

Репозиторий способствует строгому сравнению LLM-population distributions с людьми и разработке формальных perturbation/contamination probes, но README прямо ограничивает демонстрационные результаты и требует provenance для anchors.

## Ограничения и интерпретация

Это текущий README может описывать активную разработку и незавершенные Phase 6; пользовательские машины/провайдеры дают различия endpoint. Mock не считается paper evidence. Сама fidelity к human distribution не гарантирует, что выявлены причинные социальные механизмы.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/raadbintareaf/silica-benchmark).
- [Official README: environments, human anchors, repo map, integrity boundary](https://github.com/raadbintareaf/silica-benchmark): Социальные игры, контрольные варианты, скрипты и предостережение о mock/run provenance..
- [Associated preprint record](https://arxiv.org/abs/2608.28182): Связь с исследовательской статьей..
- [Локальный текст: readme-source.md](../materials/github-raadbintareaf-silica-benchmark/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-raadbintareaf-silica-benchmark/input-notes.md).

## Связанные работы

- discusses: [arxiv-2608-28182](arxiv-2608-28182.md).
- discusses: [doi-10-17605-osf-io-afsdu](doi-10-17605-osf-io-afsdu.md).
- discusses: [web-theaidigest-org-8ecf0b2d70](web-theaidigest-org-8ecf0b2d70.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 527.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_classic.md`, строка 37.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_registry.md`, строка 82.
