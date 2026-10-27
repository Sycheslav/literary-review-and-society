---
id: doi-10-1109-tg-2026-3721624-text
type: material
title: README репозитория LLM Survival Game; не полный текст статьи
work_id: doi-10-1109-tg-2026-3721624
source_url: https://github.com/cammarasana123/LLM-Survival-Game
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: README репозитория LLM Survival Game; не полный текст статьи. Автоматическая
  конверсия страницы, фактическое содержание см. ниже.
language: original
sha256_text: dec9f5df104bbf9a44d7d677f773cf27d11f2b05bb5964e95b4b4ad11537c945
---

> Источник: [https://github.com/cammarasana123/LLM-Survival-Game](https://github.com/cammarasana123/LLM-Survival-Game). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

## Repository navigation


![cammarasana123](https://avatars.githubusercontent.com/u/32649057?s=60&v=4)

**[LLM-Survival-Game](https://github.com/cammarasana123/LLM-Survival-Game)**

Public

- [Notifications](https://github.com/login?return_to=%2Fcammarasana123%2FLLM-Survival-Game)You must be signed in to change notification settings
- [Fork0 (0)](https://github.com/login?return_to=%2Fcammarasana123%2FLLM-Survival-Game)
- [Star1 (1)](https://github.com/login?return_to=%2Fcammarasana123%2FLLM-Survival-Game)You must be signed in to star a repository

## About

No description, website, or topics provided.

### Resources

[Readme](https://github.com/cammarasana123/LLM-Survival-Game#readme-ov-file)

[Activity](https://github.com/cammarasana123/LLM-Survival-Game/activity)

### Stars

**1** star

### Watchers

**0** watching

### Forks

[**0** forks](https://github.com/cammarasana123/LLM-Survival-Game/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fcammarasana123%2FLLM-Survival-Game&report=cammarasana123+%28user%29)

[Branches](https://github.com/cammarasana123/LLM-Survival-Game/branches)[Tags](https://github.com/cammarasana123/LLM-Survival-Game/tags)

Open more actions menu

## Latest commit

## History

[2 Commits](https://github.com/cammarasana123/LLM-Survival-Game/commits/main/)

2 Commits

## Folders and files

| Name | | Name | Last commit message | Last commit date |
| --- | --- | --- | --- | --- |
| [code](https://github.com/cammarasana123/LLM-Survival-Game/tree/main/code "code") | | [code](https://github.com/cammarasana123/LLM-Survival-Game/tree/main/code "code") |  |  |
| [data](https://github.com/cammarasana123/LLM-Survival-Game/tree/main/data "data") | | [data](https://github.com/cammarasana123/LLM-Survival-Game/tree/main/data "data") |  |  |
| [.gitignore](https://github.com/cammarasana123/LLM-Survival-Game/blob/main/.gitignore ".gitignore") | | [.gitignore](https://github.com/cammarasana123/LLM-Survival-Game/blob/main/.gitignore ".gitignore") |  |  |
| [README.md](https://github.com/cammarasana123/LLM-Survival-Game/blob/main/README.md "README.md") | | [README.md](https://github.com/cammarasana123/LLM-Survival-Game/blob/main/README.md "README.md") |  |  |
| [requirements.txt](https://github.com/cammarasana123/LLM-Survival-Game/blob/main/requirements.txt "requirements.txt") | | [requirements.txt](https://github.com/cammarasana123/LLM-Survival-Game/blob/main/requirements.txt "requirements.txt") |  |  |
|  | | |

## Repository files navigation

# LLM Survival Game

This repository contains code, public interaction logs, and analysis tables for a
three-agent LLM survival/social-deduction game. In each run, three agents are
placed in a resource-scarce scenario where only two can survive. Agents exchange
private text messages, update structured relational states, and may form a
coalition to exclude one agent.

The release includes an 80-run dataset organized as a 2 x 2 design crossing model
composition and memory:

- homogeneous / no-memory
- homogeneous / chain-memory
- heterogeneous / no-memory
- heterogeneous / chain-memory

Each condition contains 20 runs.

## Repository structure

```
code/
  run_experiment.py        Main experiment runner
  make_figures.py          Analysis/figure-generation script

data/
  aggregated_tables/       CSV tables aggregated across all 80 runs
  experiments/             Per-batch logs, configs, and analysis tables

requirements.txt           Python dependencies
```

## Data contents

`data/aggregated_tables/` contains CSV files aggregated across the full 80-run
dataset:

- `run_summaries.csv`: one row per run
- `turn_records.csv`: turn-level records
- `message_events.csv`: private message events
- `commitment_events.csv`: exclusion-commitment state updates
- `token_usage.csv`: token accounting for agent and moderator calls
- `validation_warnings.csv`: validation warnings, if any
- `quantitative_arrays_by_experiment/`: per-batch NPZ arrays

`data/experiments/` contains ten experiment batches. Each batch contains:

- `experiment_config.json`: model and protocol configuration
- `experiment_done.json`: completion marker
- `analysis_tables/`: per-batch CSV/NPZ analysis files
- `human_logs/`: human-readable Markdown logs
- `moderator_inputs/`: moderator inputs for chain-memory runs
- `moderator_outputs/`: moderator summaries for chain-memory runs
- `public_release/`: public JSON/JSONL run logs

## Protocol summary

The game uses neutral visible labels (`Agent A`, `Agent B`, `Agent C`). Backend
model names are not exposed to agents during gameplay. In heterogeneous
conditions, the backend-to-visible-agent mapping is randomized. The commitment
state is an ordinal, self-reported protocol variable with the following values:

```
none < weak_preference < conditional_commitment < explicit_commitment < final_commitment
```

A run closes when two agents report at least `explicit_commitment` toward the
same exclusion target.

## Running the code

Install dependencies:

```
pip install -r requirements.txt
```

Run a mock experiment without API calls:

```
python code/run_experiment.py --mock --preset revised --n-sessions 1 --runs-per-session 2
```

For real model calls, set the required API keys as environment variables before
running the experiment. The script reads keys from the environment and does not
store them in outputs.

```
export GROQ_API_KEY=...
export CEREBRAS_API_KEY=...
python code/run_experiment.py --preset revised --n-sessions 20 --runs-per-session 5
```

Generate figures or combined tables from analysis outputs:

```
python code/make_figures.py --inputs data/experiments/*/analysis_tables --outdir figures_generated
```

## Reproducibility notes

- No API keys or authentication credentials are included.
- The public logs contain prompts, validated state updates, messages, outcomes,
  parse/fallback events, and token accounting.
- The saved CSV tables are the direct analysis products derived from the logs.
- Due to hosted LLM nondeterminism and provider-side changes, exact reruns may
  differ from the archived logs even with the same prompt and decoding settings.

## About

No description, website, or topics provided.

### Resources

[Readme](https://github.com/cammarasana123/LLM-Survival-Game#readme-ov-file)

[Activity](https://github.com/cammarasana123/LLM-Survival-Game/activity)

### Stars

**1** star

### Watchers

**0** watching

### Forks

[**0** forks](https://github.com/cammarasana123/LLM-Survival-Game/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fcammarasana123%2FLLM-Survival-Game&report=cammarasana123+%28user%29)

## Releases

## Packages

## Contributors

## Languages
