---
id: github-multi-agent-llms-lm-evaluation-harness-text
type: material
title: Multi-Agent-LLMs/lm-evaluation-harness
work_id: github-multi-agent-llms-lm-evaluation-harness
source_url: https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно
  исходного репозитория.
language: original
sha256_text: f5fcbe81143a2167cfcf1d3776f020059a9ac6535cd46c0740058c4d85922194
link_resolution: Относительные ссылки README преобразованы в абсолютные адреса исходного репозитория.
---

> Источник: [https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/README.md](https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

# Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling

This repository contains the evaluation code and experiments for our paper:

> **Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time Scaling**  \
> *Florian Valentin Wunderlich, Lars Benedikt Kaesberg, Jan Philip Wahle, Terry Ruas, Bela Gipp*

This codebase is a fork of **EleutherAI's [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)**.
We modified it to support **inference-time scaling “pipelines”** (single-agent and multi-agent) and to run the **compute-matched evaluations** reported in our paper.

---

## Introduction
Our paper studies how inference-time scaling strategies for large language models trade off **accuracy** and **compute**.
We compare single-agent baselines (e.g., chain-of-thought, self-consistency, self-refinement) and multi-agent methods (e.g., debate, mixture-of-agents) under comparable inference budgets, and build Pareto fronts over many configurations.

### Key findings

- We conduct a systematic study across four scaling methods (self-consistency, self-refinement, multi-agent debate, mixture-of-agents) and their parameterization.
- We demonstrate that multi-agent systems are more efficient than single-agent methods when scaled optimally. We find that mixture-of-agents consistently outperforms debate, self-consistency, and self-refinement.
- We explore scaling behaviors of multi-agent systems and observe that configuring mixture-of-agents with one model more than layers predominantly yields Pareto-optimal performance, providing a practical design guideline.
- We show that larger models without test-time compute can be more compute-efficient than smaller models with heavily scaled test-time compute.

---

## Core components

### Custom inference-time pipelines
Core additions of this fork are the **inference-time pipelines** used in our study (single-agent and multi-agent), implemented as API-backed harness “models” in [`lm_eval/models/custom_pipelines_api.py`](https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/lm_eval/models/custom_pipelines_api.py)

### Evaluation wrapper with compute estimation
We added a wrapper that standardizes logging/output and attaches compute estimates: [`pipeline_evaluations/pipeline_evaluation_wrapper.py`](https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/pipeline_evaluations/pipeline_evaluation_wrapper.py)

### Experiment folders
We started and logged our experiments in the folders [`pipeline_evaluations/full_runs/leaderboard_mmlu_pro/`](https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/pipeline_evaluations/full_runs/leaderboard_mmlu_pro) and [`pipeline_evaluations/full_runs/leaderboard_bbh/`](https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/pipeline_evaluations/full_runs/leaderboard_bbh).

---

## Citation
If you use this repository, please cite our paper:

```bibtex
@inproceedings{wunderlich-etal-2026-multi,
    title = "Multi-Agent Reasoning Improves Compute Efficiency: {P}areto-Optimal Test-Time Scaling",
    author = "Wunderlich, Florian Valentin  and
      Kaesberg, Lars Benedikt  and
      Wahle, Jan Philip  and
      Ruas, Terry  and
      Gipp, Bela",
    editor = "T.Y.S.S., Santosh  and
      Rodriguez, Juan Diego  and
      de Gibert, Ona",
    booktitle = "Proceedings of the 64th Annual Meeting of the {A}ssociation for {C}omputational {L}inguistics (Volume 4: Student Research Workshop)",
    month = jul,
    year = "2026",
    address = "San Diego, California, United States",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.acl-srw.1/",
    doi = "10.18653/v1/2026.acl-srw.1",
    pages = "1--14",
    ISBN = "979-8-89176-393-7"
}
```

---

## License
This repository has the [MIT License](https://raw.githubusercontent.com/Multi-Agent-LLMs/lm-evaluation-harness/main/LICENSE.md).

