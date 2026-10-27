---
id: github-raadbintareaf-silica-benchmark-text
type: material
title: raadbintareaf/silica-benchmark
work_id: github-raadbintareaf-silica-benchmark
source_url: https://raw.githubusercontent.com/raadbintareaf/silica-benchmark/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные
  ссылки разрешаются относительно исходного репозитория.
language: original
sha256_text: fd764bf601d4c5ba1d6c9637d091e344aad423d440370471e85fbceccd06e4b5
---

> Источник: [https://raw.githubusercontent.com/raadbintareaf/silica-benchmark/main/README.md](https://raw.githubusercontent.com/raadbintareaf/silica-benchmark/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

# SILICA — Benchmarking LLM Agent Societies Against Human Behavioral Distributions

Code for the paper *"Benchmarking LLM Agent Societies Against Human Behavioral Distributions."*
SILICA evaluates LLM agent populations in **interactive** social games against three bars at once:
**fidelity** to human behavioral distributions, **robustness** to design/representation
perturbations (executable TRAILS-style library), and **contamination resistance**
(novel-isomorph and divergent-prediction game variants + recognition probes).

## Environments
| ID | Environment | Contamination variants | Human anchor |
|----|-------------|------------------------|--------------|
| E1 | Repeated Prisoner's Dilemma (`pd`) | C0, C1, C2, C3 (no-dilemma) | D7 (meta ranges) |
| E2 | Public Goods Game ± punishment (`pgg`) | C0 | D2/D3 (raw trajectories) |
| E3 | Ultimatum / Dictator / Trust (`bargain`) | C0, C2, C3 (rejection pays) | D5 (meta stats) |
| E4 | 11–20 money request (`mrg`) | C0, C2, C3 (inverted ladder) | **D1 raw (OSF m9c2a)** |
| E5 | Naming game + tipping (`naming`) | C0, C2 (glyphs), C3 (anti-coordination) | D6 (25% critical mass) |
| —  | Recognition probes (`probe`) | any | — |

Classical baselines (B1/B2): Roth–Erev learners (PD/PGG), conditional cooperators (PGG),
minimal naming-game model, TitForTat family, random floors.

## Setup
```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

## 1. Smoke test (CPU-only, <2 min, mock backend)
```bash
python experiments/run_experiment.py --config configs/smoke.yaml --seed 0
python tests/test_core.py
```
All smoke rows are tagged `backend=mock` — demo-scale, never paper results.

## 2. Serve a local model (your GPU server)
```bash
pip install vllm
vllm serve Qwen/Qwen3-14B --port 8000 --max-model-len 4096 --gpu-memory-utilization 0.92
```
Then set `model_id` in `configs/models/vllm_local.yaml` to the served ID.

## 3. Run one real experiment
```bash
python experiments/run_experiment.py --config configs/pd_baseline.yaml --seed 1
```
Each run appends **one row** to `results/raw_results.csv` and writes the full
trajectory to `results/logs/<name>_s<seed>.jsonl`. Aggregation lives ONLY in
`analysis/` (Phase 6 delivers `run_all.sh`, `run_ablations.sh`,
`aggregate_results.py`, `make_tables.py`, `make_figures.py`).

## Human anchors
```bash
python -m src.data.human_anchors --check
```
Prints the provenance report. Anchors marked `TO_VERIFY`/`UNCONFIRMED` must be
replaced with values recomputed from the primary datasets before submission
(links in the report and in `PHASE4_DESIGN.md` §3; D1 = https://osf.io/m9c2a/).

## Repository map
```
configs/            one YAML per experiment; models/ holds backend endpoints
src/prompts/        PerturbationSpec + renderers (the executable audit library)
src/contamination/  C0–C3 skins with formal verification + recognition probes
src/envs/           pd, pgg, bargain, mrg, naming, probe
src/models/         openai_compat backend (vLLM/Ollama/APIs), mock, LLM agent
src/models/baselines/ classical ABM + fixed policies
src/evaluation/     metric primitives (W1, TV, κ, swing, sign-stability) — single impl.
src/data/           human anchors with loud provenance flags
experiments/        run_experiment.py (--config, --seed only)
analysis/           (Phase 6) aggregation, tables, figures
results/            raw_results.csv + logs/ (append-only; gitignored)
```

## Integrity boundary
Everything in this container/repo history that used the mock backend is
demo-scale. **Every number that enters the paper is produced on the user's
server** with real model backends, then analyzed by the Phase 6 scripts.

