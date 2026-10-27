---
id: github-rgb-0000ff-repunet-text
type: material
title: RGB-0000FF/RepuNet
work_id: github-rgb-0000ff-repunet
source_url: https://raw.githubusercontent.com/RGB-0000FF/RepuNet/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно
  исходного репозитория.
language: original
sha256_text: 93f1a6b3a646d4e9ff9e0ea506bf00234c44e5f503eb85cb5a389f04bc686e48
link_resolution: Относительные ссылки README преобразованы в абсолютные адреса исходного репозитория.
---

> Источник: [https://raw.githubusercontent.com/RGB-0000FF/RepuNet/main/README.md](https://raw.githubusercontent.com/RGB-0000FF/RepuNet/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

<div align="center">

# 🤝 **Reputation as a Solution to Cooperation Collapse in LLM-based MASs**

****



[![Python](https://img.shields.io/badge/Python-3.13%2B-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![arXiv](https://img.shields.io/badge/arXiv-2505.05029-b31b1b.svg)](https://arxiv.org/abs/2505.05029)
[![LLM Backend](https://img.shields.io/badge/LLM-OpenAI--compatible-0f766e)](#configuration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/RGB-0000FF/RepuNet/main/LICENSE)

<a href="README.md"><kbd>English</kbd></a> <a href="README_ZH.md"><kbd>简体中文</kbd></a>

[Paper](https://arxiv.org/abs/2505.05029) |
[HTML](https://arxiv.org/html/2505.05029v2) |
[Architecture](#architecture) |
[Quick Start](#quick-start) |
[Citation & License](#citation--license)

</div>

<!-- ## Overview

**RepuNet** is a simulation framework for studying how operational reputation systems can mitigate cooperation collapse in LLM-based multi-agent systems (MASs). Agents reason with an OpenAI-compatible LLM backend, update self and peer reputations from direct interactions and gossip, rewire their social network, and act across investment, sign-up, and prisoner's dilemma scenarios. -->

<!-- 🎉 Excited to share that our paper has been accepted to **AAMAS 2026** and nominated for the **Best Student Paper Award**! -->

### 🎉 News

> Our paper has been accepted to **AAMAS 2026** and nominated for the **Best Student Paper Award**!

## Overview

🌐 **RepuNet** is an effective reputation system for studying how LLM agents can autonomously prevent cooperation collapse in LLM-based MASs.

⚙️ Specifically, RepuNet operates at two levels: **agent-level reputation dynamics** and **system-level network evolution**. At the agent level, RepuNet enables agents to form and update self- and peer-reputations through direct interactions and indirect gossip. These reputations then guide agents in rewiring their social relationships at the system level, allowing them to select trustworthy partners, avoid exploitative ones, and sustain long-term cooperation.

🔬 We evaluate RepuNet across three social dilemma scenarios: **Prisoner’s Dilemma**, **Voluntary Participation**, and **Trading Investment**. The results show that RepuNet effectively prevents cooperation collapse and gives rise to emergent collective behaviors, including cooperative clustering, isolation of exploitative agents, and a preference for positive gossip.

<!-- ## Key Contributions

| Cooperation collapse | Operational reputation | Emergent collective behavior |
| --- | --- | --- |
| We replicate cooperation collapse within LLM-based MASs, confirming its widespread prevalence and emphasizing the need to address it. | We propose **RepuNet**, the first operational reputation system to generalize reputation mechanisms to LLM-based MASs. | RepuNet exhibits emergent behaviors, highlighting how reputation systems drive complex collective behavior in LLM-based MASs. | -->


## Architecture

<p align="center">
  <img src="asset/Final_frameworkReputation_system.png" alt="RepuNet framework" width="900">
</p>

<p align="center">
  <em>RepuNet: A dynamic reputation system aimed at sustaining cooperation and preventing cooperation collapse in LLMbased MASs.</em><br>
  <a href="asset/Final_frameworkReputation_system.pdf">View the original architecture PDF</a>
</p>

<!-- ## At a Glance

| Item | Description |
| --- | --- |
| Scenarios | Investment, sign-up, and prisoner's dilemma |
| Core mechanisms | Reputation update, gossip propagation, and network rewiring |
| Agent backend | OpenAI-compatible LLM API |
| State management | Step-wise persistence under `sim_storage/` |
| Main entrypoints | `start.py`, `auto_run.py`, `scripts/run_simulation.py` | -->


## At a Glance


| Item | Description |
| --- | --- |
| Scenarios | **Prisoner’s Dilemma**, **Voluntary Participation**, and **Trading Investment** |
| Core mechanisms | **Agent-level reputation dynamics** and **system-level network evolution** driven by direct encounters and indirect gossip |
| Agent backend | OpenAI-compatible LLM APIs |
| Agent setup | 20 LLM-based agents initialized as isolated nodes|
| State management | Step-wise persistence under `sim_storage/` |
| Main entrypoints | `start.py`, `auto_run.py`, `scripts/run_simulation.py` |

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Quick Start](#quick-start)
- [Experiment Modes](#experiment-modes)
- [Run Simulations](#run-simulations)
- [Seed Data](#seed-data)
- [Outputs and Useful Paths](#outputs-and-useful-paths)
- [Citation & License](#citation--license)
- [License](#license)

## Requirements

- Python 3.13+
- A virtual environment tool such as `uv`, `venv`, or `conda`
- Access to an OpenAI-compatible API endpoint

## Installation

```bash
# Create and activate a virtual environment.
uv venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate

# Install RepuNet in editable mode.
uv pip install -e .
```

If you do not use `uv`, the standard Python workflow also works:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

## Configuration

Configure the LLM backend and storage path in `utils.py` before running simulations.

| Setting | Purpose |
| --- | --- |
| `openai_api_key` | API key for your OpenAI-compatible provider. Do not commit real keys. |
| `key_owner` | Identifier for the key owner or experiment runner. |
| `llm_model` | Model name used by all prompt calls. |
| `llm_api_base` | Base URL of the OpenAI-compatible endpoint. |
| `fs_storage` | Root directory for seeds and run outputs. Defaults to `./sim_storage`. |

Runtime overrides are available for model parameters:

```bash
export LLM_MODEL="gpt-4o-mini"
export LLM_API_BASE="https://api.your-endpoint/v1"
export LLM_MAX_TOKENS="4096"
export LLM_TEMPERATURE="0"
```

Recommended local key pattern:

```python
import os

openai_api_key = os.getenv("OPENAI_API_KEY", "[REDACTED API KEY]")
key_owner = "your-name"
```

## Quick Start

Run a small prisoner's dilemma simulation with reputation enabled and gossip disabled:

```bash
python scripts/run_simulation.py \
  --scenario pd \
  --steps 5 \
  --reputation y \
  --gossip n
```

`scripts/run_simulation.py` will find or create a default seed, copy it into a timestamped run folder, execute the requested scenario, and persist all step outputs under `fs_storage`.

## Experiment Modes

| Reputation | Gossip | Typical purpose |
| --- | --- | --- |
| `y` | `y` | Full RepuNet setting with both reputation and gossip enabled. |
| `y` | `n` | Reputation-only setting for isolating the effect of direct reputation updates. |
| `n` | `y` | Gossip-enabled ablation without reputation-driven mechanisms. |
| `n` | `n` | Baseline setting without reputation or gossip. |

## Run Simulations

### Interactive Loop

```bash
python start.py
```

Prompts:

- Simulation path under `fs_storage`, such as `investment_seed/step_0`
- Whether to use reputation: `y` or `n`
- Whether to use gossip: `y` or `n`
- Scenario: investment (`i`), sign-up (`s`), or prisoner's dilemma (`p`)

Commands inside the loop:

- `run invest <steps>` / `run sign <steps>` / `run pd <steps>`
- `save`: write the current state
- `fin`: save and exit
- `exit`: delete the current run folder and exit

### Non-Interactive Run From an Existing Seed

```bash
python auto_run.py \
  --sim investment_seed/step_0 \
  --mode investment \
  --steps 3 \
  --reputation y \
  --gossip n
```

### Auto Seed, Run, and Resume

```bash
python scripts/run_simulation.py \
  --scenario investment \
  --steps 3 \
  --reputation y \
  --gossip y
```

Resume from an existing run directory or a specific step:

```bash
python scripts/run_simulation.py --scenario pd --steps 5 --sim run_pd/step_2
```

### Batch Runs

Edit the `JOBS` array in `scripts/batch_run.sh`, then run:

```bash
bash scripts/batch_run.sh
```

Logs are written to `outputs/<run_id>.log`; simulation states are written to `fs_storage/<run_id>/step_*`.

## Seed Data

Seeds live at `fs_storage/<sim_name>/step_0` and include `reverie/meta.json` plus per-persona memory and reputation files.

Create built-in personas:

```bash
python sim_storage/change_sim_folder.py --treatment investment --sim-name demo_invest
```

Inherit learned fields from an existing seed:

```bash
python sim_storage/change_sim_folder.py \
  --treatment investment \
  --sim-name demo_invest \
  --from-seed sim_storage/invest_seed/step_0
```

Create custom personas from JSON:

```bash
python sim_storage/change_sim_folder.py \
  --treatment pd_game \
  --sim-name demo_pd \
  --persona-file sim_storage/profiles.json
```

Export learned fields from existing seeds for reuse:

```bash
python sim_storage/export_profiles.py \
  --seeds sim_storage/invest_seed sim_storage/pd_game_seed sim_storage/sign_seed \
  --out sim_storage/profiles.json
```

If a default seed is missing, `scripts/run_simulation.py` automatically creates one using built-in personas or `sim_storage/profiles.json` when available.

## Outputs and Useful Paths

| Path | Description |
| --- | --- |
| `start.py` | Interactive simulation runner. |
| `auto_run.py` | Non-interactive runner for an existing seed. |
| `scripts/run_simulation.py` | Auto-seed, run, and resume entrypoint. |
| `scripts/batch_run.sh` | Batch launcher for multiple experiment jobs. |
| `sim_storage/change_sim_folder.py` | Seed generator. |
| `sim_storage/export_profiles.py` | Export personas' learned fields to JSON. |
| `outputs/` | Run logs. |
| `sim_storage/` | Seeds, generated runs, and `step_*` state folders. |

Each simulation step copies `step_x` to `step_{x+1}` and writes scenario outputs such as `investment results`, `sign up result`, or `pd_game results` under the new step folder.

## Citation & License

If you use RepuNet in your research, please cite our paper:

```bibtex
@inproceedings{ren2026reputation,
  title     = {Reputation as a Solution to Cooperation Collapse in LLM-based MASs},
  author    = {Ren, Siyue and Fu, Wanli and Zou, Xinkun and Shen, Chen and Cai, Yi and Chu, Chen and Wang, Zhen and Hu, Shuyue},
  booktitle = {Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026)},
  year      = {2026},
  note      = {To appear}
}
```

RepuNet is released under the [MIT License](https://raw.githubusercontent.com/RGB-0000FF/RepuNet/main/LICENSE). MIT is a common permissive license for academic research code because it allows reuse, modification, and redistribution with attribution while keeping the license text lightweight.

