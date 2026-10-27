---
id: github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd--text
type: material
title: insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-
work_id: github-insafkraidia-multi-agent-large-language-model-debate-ma-llmd-
source_url: https://raw.githubusercontent.com/insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные
  ссылки разрешаются относительно исходного репозитория.
language: original
sha256_text: 8a7cfbc77f9c55ef0398a184f9761bfe0d73f91176ee75027b60a8e4e422ecce
---

> Источник: [https://raw.githubusercontent.com/insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-/main/README.md](https://raw.githubusercontent.com/insafkraidia/Multi-Agent-Large-Language-Model-Debate-MA-LLMD-/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

# Multi-Agent Debate with Persuasion Attack (PPA)

This repository runs multi-agent LLM debates on multiple QA benchmarks and measures how a **persuasive adversarial agent** can steer group decisions.

## Key Techniques (Paper ↔ Code)
- **DAP**: Debate-Agent Prompting (normal agents share solutions across rounds)
- **PPA**: Persuasion Prompt Attack (adversary convinces others of a provided answer)
- **JEV**: Judge-Expert Voting (LLM judge selects the final answer)
- **BoN-A / AEG / PAS**: Best-of-N Argumentation (generate N arguments → select most persuasive)
- **CTX**: Context Injection (optional external context, e.g., TruthfulQA)

## Datasets
Supported: `mmlu`, `truthfulqa`, `medmcqa`, `scalr`, `math`, `chess`, `mquake`, `musique`

## Install
```bash
pip install -r requirements.txt
# If using HF models:
pip install torch transformers datasets accelerate
Run
1) Standard debate (DAP)
python run_debate.py --dataset truthfulqa --n_samples 100 --n_agents 3 --n_rounds 3 --model_name gpt-4o

2) Debate with adversary (PPA)
python run_adv.py --dataset truthfulqa --n_samples 100 --n_agents 3 --n_rounds 3 --n_adversaries 1 \
  --group_model gpt-4o --adv_model gpt-4o

3) PPA + Best-of-N arguments (BoN-A) and/or Context (CTX)
python run_adv_plus.py --dataset truthfulqa --n_samples 100 --n_agents 3 --n_rounds 3 --n_adversaries 1 \
  --group_model gpt-4o --adv_model gpt-4o --judge_model gpt-4o \
  --run_optim True --n_arguments 10 --run_context True

## Evaluate

## Majority vote:

python evaluate.py --eval_address results/truthfulqa/... --decision majority


## Judge decision:

python evaluate.py --eval_address results/truthfulqa/... --decision judge

## Outputs

Runs write .jsonl files under results/<dataset>/.../ containing:

question / ground truth

raw task metadata

full multi-round conversation per agent

