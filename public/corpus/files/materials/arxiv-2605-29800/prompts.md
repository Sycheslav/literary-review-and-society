---
id: arxiv-2605-29800-prompts
type: material
title: 'Опубликованные разделы о промптах: Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation
  Panels'
source_id: arxiv-2605-29800
source_url: https://arxiv.org/html/2605.29800v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: f1c10575a33ec164af05f749bfe22cd796a59134cfad88cf530d6f0aa31591fe
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.6 Robustness to Prompt, Temperature, and Task

To test whether the independence deficit is a prompt or decoding artifact, we re-run all 9 judges on the same 1,000 MNLI items under four variants: (1) reframed wording, (2) reversed label order, (3) chain-of-thought reasoning, and (4) temperature $T=0.5$. We also evaluate on 1,000 RewardBench items ([Lambert et al., 2025](https://arxiv.org/html/2605.29800v1#bib.bib16)) — a pairwise preference task with deterministic gold labels, sampled via proportional stratified sampling across four categories, using the official MT-Bench pairwise judge prompt with A/B position randomization.

| Condition | $n\_{\text{eff}}$ [95% CI] | $\bar{\phi}$ | Panel | Gap |
| --- | --- | --- | --- | --- |
| Baseline ($T{=}0$) | 2.18 [2.07, 2.31] | .391 | 72.0% | 22.0pp |
| Reframed prompt | 2.17 [2.05, 2.30] | .394 | 72.5% | 21.5pp |
| Reversed labels | 2.15 [2.03, 2.27] | .399 | 72.9% | 21.3pp |
| Chain-of-thought | 1.94 [1.85, 2.04] | .456 | 69.2% | 22.3pp |
| Temp $T{=}0.5$ | 2.17 [2.06, 2.30] | .393 | 71.8% | 21.9pp |
| RewardBench | 1.99 [1.83, 2.20] | .440 | 92.7% | 6.8pp |

Table 4: Robustness of $n\_{\text{eff}}$ across prompt variants and chain-of-thought (same 1,000 MNLI items, 9 judges) and a different task type (RewardBench: pairwise preference, 9 judges, 1,000 items). “Gap” is the Condorcet gap (predicted $-$ actual panel accuracy). $n\_{\text{eff}}$ is stable in the 1.94–2.18 range across all conditions; chain-of-thought increases correlation.

Table [4](https://arxiv.org/html/2605.29800v1#S4.T4 "Table 4 ‣ 4.6 Robustness to Prompt, Temperature, and Task ‣ 4 Results ‣ Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels") shows that $n\_{\text{eff}}$ is remarkably stable. Varying prompt wording, label ordering, and temperature has essentially no effect: $n\_{\text{eff}}$ ranges from 2.15 to 2.18, with overlapping 95% bootstrap CIs. The reversed-label variant rules out position bias ([Wang et al., 2024](https://arxiv.org/html/2605.29800v1#bib.bib30)) as a driver: the near-identical $n\_{\text{eff}}$ (2.15 vs. 2.18) confirms that correlation is robust to label ordering. Chain-of-thought actually *increases* correlation ($\bar{\phi}=.456$, $n\_{\text{eff}}=1.94$) — shared reasoning amplifies shared errors. This stability rules out prompt engineering artifacts.

On RewardBench — a binary pairwise preference task with deterministic gold labels — $n\_{\text{eff}}=1.99$ [1.83, 2.20]. The smaller Condorcet gap (6.8pp vs. 21–22pp on MNLI) reflects higher panel accuracy (92.7%), but $\phi=0.44$ confirms high error correlation regardless of task type. Same-family correlation is larger on RewardBench ($+0.109$) than MNLI ($+0.047$). All 9 judges show residual A-preference despite the anti-bias prompt; the NLI results, structurally immune to position effects, confirm that correlation is not a position-bias artifact.

#### Prompt and decoding choices.

We test four prompt variants (including chain-of-thought) and two temperature settings (§[4.6](https://arxiv.org/html/2605.29800v1#S4.SS6 "4.6 Robustness to Prompt, Temperature, and Task ‣ 4 Results ‣ Nine Judges, Two Effective Votes: Correlated Errors Undermine LLM Evaluation Panels")), finding $n\_{\text{eff}}$ stable in the 1.94–2.18 range. Chain-of-thought actually *increases* correlation ($n\_{\text{eff}}=1.94$). More radical prompt reformulations — such as few-shot exemplars or persona-based prompting — could in principle alter the correlation structure. We use RewardBench ([Lambert et al., 2025](https://arxiv.org/html/2605.29800v1#bib.bib16)) rather than the more recent RewardBench 2 ([Malik et al., 2025](https://arxiv.org/html/2605.29800v1#bib.bib20)) because the latter uses LLM-derived gold labels for several categories (e.g., GPT-4o and Claude consensus for Factuality), which would introduce circularity when evaluating LLM judges drawn from the same model families.

## Appendix A NLI Classification Prompt

All judges receive the following prompt at temperature 0.0:

> Given the following premise and hypothesis, determine the relationship between them.
>
> Premise: {premise}
>
> Hypothesis: {hypothesis}
>
> What is the relationship? Reply with ONLY one word: “entailment”, “neutral”, or “contradiction”.

We use the canonical NLI label vocabulary (entailment, neutral, contradiction) rather than crowdsourcing-style phrasing (“definitely true”, “might be true”, “definitely not true”) because LLMs are trained primarily on NLI benchmark data that uses these terms; non-standard labels risk introducing an additional source of variance unrelated to the underlying judgment.

Parse failures are handled by deterministic hash-based random assignment to {e, n, c}, ensuring reproducibility and avoiding systematic bias.

### A.1 RewardBench Pairwise Preference Prompt

For RewardBench evaluation, we use the default pairwise judge prompt from the RewardBench codebase ([Lambert et al., 2025](https://arxiv.org/html/2605.29800v1#bib.bib16)), originally from MT-Bench ([Zheng et al., 2023](https://arxiv.org/html/2605.29800v1#bib.bib34)). The RewardBench codebase provides several prompt variants for different judge architectures (e.g., Prometheus, OffsetBias, Atla); we use the default MTBENCH\_V2 template, which is the standard for generative LLM-as-judge evaluation on the RewardBench leaderboard. The system message instructs judges to act as impartial evaluators, provide a short explanation, and output [[A]] or [[B]]. The user message presents the prompt and both responses with structured delimiters. All judges use temperature 0.0 and max\_tokens=4096.
