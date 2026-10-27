---
id: github-cammarasana123-llm-survival-game-text
type: material
title: cammarasana123/LLM-Survival-Game
work_id: github-cammarasana123-llm-survival-game
source_url: https://raw.githubusercontent.com/cammarasana123/LLM-Survival-Game/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные
  ссылки разрешаются относительно исходного репозитория.
language: original
sha256_text: 468e065cd6e9200567d92f908e977c3bb45e163220d67e5b2cb353c0c7d211a8
---

> Источник: [https://raw.githubusercontent.com/cammarasana123/LLM-Survival-Game/main/README.md](https://raw.githubusercontent.com/cammarasana123/LLM-Survival-Game/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

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

```text
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

```text
none < weak_preference < conditional_commitment < explicit_commitment < final_commitment
```

A run closes when two agents report at least `explicit_commitment` toward the
same exclusion target.

## Running the code

Install dependencies:

```bash
pip install -r requirements.txt
```

Run a mock experiment without API calls:

```bash
python code/run_experiment.py --mock --preset revised --n-sessions 1 --runs-per-session 2
```

For real model calls, set the required API keys as environment variables before
running the experiment. The script reads keys from the environment and does not
store them in outputs.

```bash
export GROQ_API_KEY=...
export CEREBRAS_API_KEY=...
python code/run_experiment.py --preset revised --n-sessions 20 --runs-per-session 5
```

Generate figures or combined tables from analysis outputs:

```bash
python code/make_figures.py --inputs data/experiments/*/analysis_tables --outdir figures_generated
```

## Reproducibility notes

- No API keys or authentication credentials are included.
- The public logs contain prompts, validated state updates, messages, outcomes,
  parse/fallback events, and token accounting.
- The saved CSV tables are the direct analysis products derived from the logs.
- Due to hosted LLM nondeterminism and provider-side changes, exact reruns may
  differ from the archived logs even with the same prompt and decoding settings.

