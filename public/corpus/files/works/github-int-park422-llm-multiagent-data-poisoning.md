---
id: github-int-park422-llm-multiagent-data-poisoning
type: work
title: 'Reference implementation: Data Poisoning in LLM Multi-Agent Societies'
authors:
- Int Park et al.; точный список — в ETRI Journal paper
year: 2026
source_kind: project
venue: GitHub reference implementation for ETRI Journal paper, DOI 10.4218/etrij.2026-0186
publication_status: Официальный код/данные к рецензируемой статье; не независимая статья. README сообщает о 40 сценариях
  и 8 experimental scripts.
topics:
- influence
- platforms
language: en
identifiers:
- github-int-park422-llm-multiagent-data-poisoning
source_urls:
- https://github.com/int-park422/llm-multiagent-data-poisoning
verification_status: repository_reviewed
retrieval_status: fulltext_retrieved
reviewed_at: '2026-10-27'
materials:
- materials/github-int-park422-llm-multiagent-data-poisoning/readme-source.md
- materials/github-int-park422-llm-multiagent-data-poisoning/input-notes.md
related:
- relation: discusses
  target: doi-10-4218-etrij-2026-0186
summary_short: 'Открытый код к ETRI Journal: в семиагентном финансовом обсуждении один атакующий снижает точность
  группы с 87,5% до 52,5%; доступны prompts, условия и анализ.'
importance: peripheral
importance_reason: Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка
  ещё нужна.
importance_basis: automatic_preliminary
---

# Reference implementation: Data Poisoning in LLM Multi-Agent Societies

[К главному обзору](../README.md) · [Информационное влияние, манипуляции и защита](../topics/influence.md) · [Архитектуры, платформы и масштабирование](../topics/platforms.md)

## Коротко

> Открытый код к ETRI Journal: в семиагентном финансовом обсуждении один атакующий снижает точность группы с 87,5% до 52,5%; доступны prompts, условия и анализ.

- **Значимость для обзора:** фоновая (предварительная автоматическая оценка) — Предварительная автоматическая оценка по типу источника и теме; персональная содержательная оценка ещё нужна.

## Библиография и проверка

- **Авторы:** Int Park et al.; точный список — в ETRI Journal paper
- **Год:** 2026.
- **Площадка / статус:** GitHub reference implementation for ETRI Journal paper, DOI 10.4218/etrij.2026-0186; Официальный код/данные к рецензируемой статье; не независимая статья. README сообщает о 40 сценариях и 8 experimental scripts..
- **Проверка содержания:** Проверена документация проекта.
- **Доступность оригинала:** fulltext_retrieved. Получение текста не означает завершённую содержательную проверку.

## Короткая аннотация

Репозиторий реализует финансовое групповое обсуждение из семи LLM, где один скрытый атакующий пытается влиять на общий вердикт через social proof. В статье и README сообщается, что точность снижается с 87,5% до 52,5% при одном атакующем без технического взлома. Код публикует prompts, 40 финансовых сценариев, условия атак/защиты и метрики.

## Дизайн исследования

README описывает плоское peer-to-peer обсуждение: 7 агентов транслируют мнения в общий transcript за 5 раундов, а группа сходится к коллективному вердикту; роль не специализируется и централизованного оркестратора нет. Один скрытый атакующий занимает 14% мест. В сценариях обсуждаются 40 вымышленных финансовых случаев. В экспериментальных ветках сравниваются baseline (7 защитников), один scripted attacker, увеличение раундов до 7, отсутствие предварительного доверия, star topology, Verifier Module, adaptive attacker, альтернативные топологии/гетерогенные модели и cross-model. README перечисляет результаты по модулю верификации и метрики Accuracy, SFR, FIR, Paralysis, RCR, OCR, MTTF, DFR.

## Техническая реализация

`moltbook/` содержит среду, deliberation loop, Verifier, топологии и метрики; `experiments/` — входную точку каждого условия; `data/` — 40 synthetic scenarios; prompts содержатся в `moltbook/prompts.py`, а сценарный генератор — отдельный prompt. Открытый код включает пять-run условие основных экспериментов GPT-5-mini Exp 1–6; cross-model, topology, heterogeneity and Exp 8 одноразовые. README отмечает, что исходная атака scripted: до фазы атаки модель формирует доверие, затем фиксированный текст одинаков для модели/прогона. Verifier сверяет каждое сообщение отдельно с official record, не смотрит transcript, не удаляет сообщения, а добавляет видимое lineage warning.

## Промпты и инструкции

Полные реально использованные prompts доступны verbatim в `moltbook/prompts.py`; генерация 40 сценариев использует отдельный full prompt. Attacker Exp 2–7 запускается текстовым шаблоном, adaptive attacker Exp8 знает правила verifier и видит прошлый вердикт; три последовательных тактики включают исходный тезис, ложно представленный как свое умозаключение, и leading questions. Протокол доверия/публичное мнение задается ролью и чатом; это не неинструктированный social proof.

## Опубликованные расходы и вычисления

README оценивает 40-сценарный run как 40×7×5=1 400 агентских вызовов; Exp6/8 добавляют вызов Verifier на сообщение, увеличивая число вызовов примерно в 2,09 раза. Пример smoke test на 3 сценариях занимает около минуты и «несколько центов». Это эксплуатационная оценка README, не полный audited bill по всем конфигурациям.

## Результаты

README сообщает одну scripted атаку: точность общего вердикта падает с 87,5% до 52,5% без технического exploit/jailbreak. В Exp8 adaptive attacker обходит верификацию: 96,7% сообщений проходят модуль (101 из 104 по данным текста), Stage 3 не понадобился; восстановление точности объясняется в большей мере ограничением риторики, чем надежной детекцией. Основные GPT-5-mini эксперименты повторены пять раз; остальные — точечные прогоны, поэтому cross-model/топологические сравнения имеют по одному запуску. README содержит headline claims; точную проверку статистики проводить по paper и результатам, а не только коду.

## Выводы авторов

Репозиторий поддерживает тезис, что peer trust/social proof может переносить falsehood без технического взлома, а сверка с источником и disclosure происхождения — возможная защита. Эффект зависит от заданных сценариев, одного атакующего и verifier policy.

## Ограничения и интерпретация

Один скрытый атакующий, 40 искусственных сценариев и одно основное модельное семейство/пять повторов; прочие условия часто одноразовые. Сценарии сгенерированы o4-mini, которая участвует и в cross-model условии — generator/evaluator confound. Verifier — LLM, может быть атакуем; raw transcripts не включены в репозиторий, авторы предлагают запрашивать. README и статья — связанные, не независимые подтверждения.

## Материалы и подтверждения

- [Первоисточник / сопроводительная ссылка](https://github.com/int-park422/llm-multiagent-data-poisoning).
- [Official README: setup, experiment matrix, how it works, metrics, reproducibility, cost, limitations](https://github.com/int-park422/llm-multiagent-data-poisoning): Дизайн, коды экспериментов, prompts, headline results, run count and compute notes..
- [Publisher metadata / related peer-reviewed article](https://doi.org/10.4218/etrij.2026-0186): Статус статьи, к которой относится repository..
- [Локальный текст: readme-source.md](../materials/github-int-park422-llm-multiagent-data-poisoning/readme-source.md).
- [Все уникальные исходные сведения](../materials/github-int-park422-llm-multiagent-data-poisoning/input-notes.md).

## Связанные работы

- discusses: [doi-10-4218-etrij-2026-0186](doi-10-4218-etrij-2026-0186.md).

## Происхождение записи

- `исходники исследований лит обзор/Дополнительный обзор социумов ИИ-агентов.md`, строка 657.
- `исходники исследований лит обзор/исследования/ресерч 15 субагентов луна/research_extra_security.md`, строка 7.
