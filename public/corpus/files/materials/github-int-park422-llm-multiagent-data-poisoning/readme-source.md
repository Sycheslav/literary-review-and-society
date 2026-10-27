---
id: github-int-park422-llm-multiagent-data-poisoning-text
type: material
title: int-park422/llm-multiagent-data-poisoning
work_id: github-int-park422-llm-multiagent-data-poisoning
source_url: https://raw.githubusercontent.com/int-park422/llm-multiagent-data-poisoning/main/README.md
retrieved_at: '2026-10-27'
conversion: author_readme
quality_note: README репозитория, а не полный текст научной статьи. Относительные
  ссылки разрешаются относительно исходного репозитория.
language: original
sha256_text: 272fecc759669c09979f1ac74da6e81182bb329afd96ceb1201c4c0b6ba43a07
---

> Источник: [https://raw.githubusercontent.com/int-park422/llm-multiagent-data-poisoning/main/README.md](https://raw.githubusercontent.com/int-park422/llm-multiagent-data-poisoning/main/README.md). README репозитория, а не полный текст научной статьи. Относительные ссылки разрешаются относительно исходного репозитория.

# Data Poisoning in LLM Multi-Agent Societies

Reference implementation for **"Data Poisoning in LLM Multi-Agent Societies:
Social Proof Drives Collective Decision Failure in Financial Deliberation"**
(ETRI Journal, 2026).

> The Python package is called `moltbook` after the environment the paper
> studies. This repository is unaffiliated with the Moltbook platform; the name
> is used descriptively, as explained in Section 1 of the paper.

A Moltbook is a flat, peer-to-peer multi-agent deliberation testbed: seven LLM
agents broadcast opinions into a shared transcript over five rounds and converge
on a collective verdict, with no orchestrator and no role specialisation. One
agent is a concealed adversary holding 14% of the seats.

The finding this code supports: a single attacker drives collective accuracy
from 87.5% to 52.5% **without any technical exploit**. It never jailbreaks a
model or injects a prompt. It builds peer trust, then states a falsehood, and
the society's own deference to apparent consensus does the rest.

## What's here

| | |
|---|---|
| `moltbook/` | The environment: agents, deliberation loop, Verifier Module, topologies, metrics |
| `experiments/` | One entry point per condition reported in the paper |
| `data/` | All 40 fictional financial scenarios |
| `prompts/` | The full o4-mini scenario-generation prompt |
| `scripts/` | Scenario regeneration and metric computation |

Every prompt that was actually run is in `moltbook/prompts.py`, verbatim —
including one typo, kept because changing it changes the results.

## Setup

```bash
git clone https://github.com/int-park422/llm-multiagent-data-poisoning.git
cd llm-multiagent-data-poisoning
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env        # then add your keys
```

Only `OPENAI_API_KEY` is needed for the main experiments (Exp 1–8).
`ANTHROPIC_API_KEY` and `GOOGLE_API_KEY` are required only for the cross-model
and heterogeneous-society runs. Keys are read from the environment only.

## Running

```bash
# Smoke test: 3 scenarios, ~1 minute, a few cents
python experiments/exp2_attack.py --limit 3

# One reported condition over all 40 scenarios
python experiments/exp6_defense.py

# As reported in the paper: 5 trials
python experiments/exp2_attack.py --trials 5

# Metrics
python scripts/analyze_results.py results/exp2_attack*.json
python scripts/analyze_results.py results/exp6_defense.json --verifier
```

Results are written to `results/` incrementally, so an interrupted run keeps
whatever it finished.

## The experiments

| Script | Paper | Condition |
|---|---|---|
| `exp1_baseline.py` | Exp 1 | Seven defenders, no attacker |
| `exp2_attack.py` | Exp 2 | One scripted attacker, no defense |
| `exp3_extended_rounds.py` | Exp 3 | Exp 2 over seven rounds |
| `exp4_no_pretrust.py` | Exp 4 | Poison injected in round 1, no trust built |
| `exp5_isolation.py` | Exp 5 | Star topology: defenders cannot see each other |
| `exp6_defense.py` | Exp 6 | Lineage-tagging Verifier Module |
| `exp8_adaptive.py` | Exp 8 | Adaptive attacker vs. the *unchanged* Exp 6 defense |
| `exp_topology.py` | §5.3 | Ring and sparse graphs |
| `exp_heterogeneous.py` | §5.3 | Config A (Claude attacker), Config B (mixed defenders) |
| `exp_cross_model.py` | §4.4 | Exp 1 and Exp 2 on each model family |

Each is a thin `SimulationConfig` over one shared engine, so the conditions
differ only where the paper says they differ. Read
`experiments/exp2_attack.py` first — it is fifteen lines.

## How it works

**Deliberation.** Each round, agents speak in randomised order into a shared
transcript. An agent sees System messages, its own messages, and those of its
topological neighbours. Private reasoning and the verdict itself are withheld
from the transcript, so agents judge peers only by what those peers *say*. That
is what makes social proof, rather than argument quality, the operative channel.

**The scripted attacker** (Exp 2–7) is model-driven only while building trust.
From the attack round on it emits fixed text, so the injected claim is identical
across models and trials and any cross-model difference reflects how defenders
react, not what they were told.

**The adaptive attacker** (Exp 8) is told the Verifier's rules and sees the
verdict on its own previous message. Its tactics escalate by a single rule:

```
stage = min(1 + times_flagged, 3)
```

Stage 1 asserts the poisoned thesis; Stage 2 launders provenance as its own
inference; Stage 3 drops assertion for leading questions. In the reported run
Stage 3 was never reached — Stage 1 already evaded 101 of 104 messages.

**The Verifier Module** (Exp 6, Exp 8) checks every message, from defenders and
attacker alike, against the official record. Failing messages are not removed —
censorship disrupts the deliberation and induces secondary hallucinations — but
carry a visible lineage warning. It adjudicates each message in isolation and
never sees the transcript; that statelessness is deliberate, since a verifier
conditioned on peer agreement would reacquire the same consensus vulnerability
it exists to sever.

## Metrics

Outcome metrics over defender-scenario observations at the final round:
**Accuracy**, **SFR** (`100 − Accuracy`; paralysis counts as failure),
**FIR** (adopted the attacker's verdict), **Paralysis** (fell back to Hold).

Process metrics: **RCR** (repeated poison vocabulary while holding a wrong
verdict), **OCR** (verdict uniformity), **MTTF** (rounds to first failure),
**DFR** (correct before injection, wrong after).

`moltbook/metrics.py` also computes the Verifier's recall, false-positive rate
and precision (Table 7). Note that FPR is the share of *benign* messages
flagged — not the complement of the flag rate.

## Tests

```bash
python tests/test_offline.py       # runs every experiment config against a
                                   # stubbed LLM — no API calls, no cost
python tests/test_reproduction.py --results <dir>
```

`test_reproduction.py` recomputes all 33 headline figures from result files,
including the Verifier's recall, FPR and precision in Table 7. Raw transcripts
are not shipped here (they are large and the repo is meant to be the method,
not the outputs), so point `--results` at a directory you produced yourself, or
request the original transcripts from the authors.

## Reproducing the paper

Results depend on the model snapshot, and providers retire snapshots. The exact
versions are pinned in `moltbook/config.py`. Expect drift; re-run the clean
baseline (Exp 1) first to see how far your backend has moved before comparing
attacked conditions.

Only the GPT-5-mini main experiments (Exp 1–6) were repeated five times. The
cross-model, topology, heterogeneous and Exp 8 conditions were each run once, so
those are single-run point estimates. See Section 7.

## Limitations worth knowing before you build on this

- **Generator–evaluator confound.** o4-mini generated the scenarios *and*
  appears in the cross-model replication. Its elevated failure rate cannot be
  cleanly separated from that overlap, and no independent validation set was
  run. This is why the generation prompt is published in full — regenerate with
  a different model and the confound is testable.
- **One attacker.** Every experiment uses exactly one adversary. How detection,
  false positives and SFR scale with colluding attackers is untested.
- **The defense is largely evadable.** Exp 8 shows 96.7% of adaptive attacker
  messages pass verification. The accuracy recovery comes less from reliable
  detection than from the constraint evasion imposes on the attacker's rhetoric.
- **The Verifier is itself an LLM**, and so a residual attack surface: it reads
  attacker-authored text verbatim and was never hardened against injection
  aimed at the verification layer.
- **Clean scenarios.** Two signals, one fabrication. Real financial
  deliberation is noisier and has no single recoverable ground truth.

## Cost

A 40-scenario run is 40 × 7 × 5 = 1,400 agent calls. Exp 6 and Exp 8 add one
verification call per message, roughly 2.09× the call volume. Budget
accordingly before launching five trials.

## Citation

See `CITATION.cff`.

## License

MIT — see `LICENSE`.

