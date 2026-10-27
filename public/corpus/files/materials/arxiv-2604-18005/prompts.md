---
id: arxiv-2604-18005-prompts
type: material
title: 'Опубликованные разделы о промптах: Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and
  Collective Failure in Open-Ended Idea Generation'
source_id: arxiv-2604-18005
source_url: https://arxiv.org/html/2604.18005v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 4f29acd1ff09fadbde98a6e28ac805a52a7170aa3412f9b70bb149c6c25b0470
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

##### Leader prompting and synthesis

The leader agent is prompted once at the end of the process. Its input prompt contains:

- •

  the original question or topic;
- •

  a short natural language summary of the recent rounds and their subgroup structure;
- •

  the textual transcript of all utterances from the selected recent rounds.

Optionally, a special tag can be appended to the end of the prompt to encourage explicit intermediate reasoning (e.g., a chain-of-thought style continuation), though this is not essential to the core algorithm.

The leader uses the same underlying language model as the other agents, but with a more conservative sampling configuration (for instance, a lower sampling temperature) to reduce hallucinations and repetitive patterns. The model generates a single long-form answer, subject to a larger token budget suitable for a full proposal or final solution. If the initial leader output is detected to be extremely short or obviously incomplete (for example, below a pre-defined minimum length), the system may invoke the model a second time under the same conditions to obtain a more complete response.

## Appendix K 2$\times$ Prompt Ablation: Identity $\times$one

This appendix reports a controlled ablation experiment designed to test whether the diversity collapse observed in authority-weighted structures is driven by prompt-level variables (identity labels and directive tone) rather than interaction structure.

### K.1 Motivation

A natural alternative hypothesis for the authority-induced diversity collapse reported in Section [4](https://arxiv.org/html/2604.18005v2#S4 "4 Cognition: Authority-Induced Collapse ‣ Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation") is that the low diversity in Senior/Leader-Led configurations stems from the *directive tone* of the prompt (“focus on X”, “examine Y”) rather than the hierarchical interaction structure itself. If directive prompting suppresses diversity regardless of topology, then the structural claims in the paper would be confounded by prompt design. To isolate this, we vary Identity (Senior vs. Junior) and Tone (Directive vs. Exploratory) independently while holding the interaction topology strictly constant (flat, peer-to-peer discussion).

### K.2 Experimental Design

|  | Directive | Exploratory |
| --- | --- | --- |
| Senior | ✓ (existing baseline, $N{=}50$) | ✓ (new, $N{=}50$) |
| Junior | ✓ (new, $N{=}50$) | ✓ (new, $N{=}50$) |

Table 16: 2$\times$2 factorial design. Each cell contains 20 ICLR topics $\times$ 50 independent runs = 1,000 proposals. All four conditions use DeepSeek-V3 with temperature 0.7, group size $N{=}3$, and *flat peer-to-peer topology* (Standard, no leader). Only the persona identity label and prompt tone vary.

The full 2$\times$2 design is summarized in Table [16](https://arxiv.org/html/2604.18005v2#A11.T16 "Table 16 ‣ K.2 Experimental Design ‣ Appendix K 2× Prompt Ablation: Identity ×one ‣ Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation").

##### Variable definitions.

- •

  Identity: “Senior AI researcher with deep expertise in [topic]” vs. “Junior researcher / first-year PhD student with basic knowledge of [topic].”
- •

  Tone: “Directive” (structured instructions: “focus on X,” “examine Y,” “propose a method for Z”) vs. “Exploratory” (open-ended: “what aspects interest you?” “what questions come to mind?” “explore freely”).

### K.3 Results

##### Finding 1: The 2$\times$2 factorial.

|  | Directive | Exploratory |
| --- | --- | --- |
| Senior | $3.092\pm 0.051$ | $2.950\pm 0.058$ |
| Junior | $2.899\pm 0.056$ | $2.873\pm 0.077$ |

Table 17: Per-topic Vendi Score (mean $\pm$ SEM, $n{=}20$ topics per cell). All four conditions produce similar diversity levels (range: 2.873–3.092), with no dramatic collapse in any cell.

Table [17](https://arxiv.org/html/2604.18005v2#A11.T17 "Table 17 ‣ Finding 1: The 2×2 factorial. ‣ K.3 Results ‣ Appendix K 2× Prompt Ablation: Identity ×one ‣ Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation") reports the per-cell Vendi Score.

##### Finding 2: Two-way ANOVA.

| Source | SS | df | $F$ | $p$ | $\eta^{2}$ | Sig |
| --- | --- | --- | --- | --- | --- | --- |
| Identity (Senior vs Junior) | 0.364 | 1 | 4.85 | 0.031 | 0.058 | \* |
| Tone (Directive vs Exploratory) | 0.143 | 1 | 1.90 | 0.172 | 0.023 | n.s. |
| Identity $\times$ Tone | 0.067 | 1 | 0.89 | 0.348 | 0.011 | n.s. |
| Residual | 5.702 | 76 |  |  |  |  |

Table 18: Two-way ANOVA on per-topic Vendi Score. Tone is *not* a significant factor ($p=0.172$, $\eta^{2}=0.023$). Identity has a small but significant effect ($p=0.031$, $\eta^{2}=0.058$), but notably in the *opposite* direction from the original experiments: under flat topology, Senior personas produce *higher* diversity than Junior personas.

Table [18](https://arxiv.org/html/2604.18005v2#A11.T18 "Table 18 ‣ Finding 2: Two-way ANOVA. ‣ K.3 Results ‣ Appendix K 2× Prompt Ablation: Identity ×one ‣ Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation") reports the ANOVA decomposition.

##### Finding 3: Tone does not drive diversity collapse.

The critical result is that prompt Tone (Directive vs. Exploratory) has no significant effect on diversity ($F=1.90$, $p=0.172$, $\eta^{2}=0.023$). Switching from directive to exploratory instructions does not meaningfully alter the Vendi Score for either Senior or Junior personas. This directly refutes the hypothesis that the diversity collapse in authority-weighted structures is an artifact of directive prompt instructions.

##### Finding 4: Identity effect reverses under flat topology.

Identity has a small but significant main effect ($F=4.85$, $p=0.031$, $\eta^{2}=0.058$), but in the *opposite* direction from the original experiments: under flat topology, Senior personas produce *higher* diversity (mean Vendi $=3.021$) than Junior personas (mean Vendi $=2.886$). In the original hierarchical experiments, Senior personas (Interdisciplinary, Leader-Led) produced the *lowest* diversity. This reversal suggests that authority-induced diversity collapse is a strictly structural phenomenon: expertise suppresses diversity only when combined with hierarchical authority dynamics, not when experts interact as equal peers.

##### Finding 5: PCD confirms the pattern.

Pairwise Cosine Distance yields the identical pattern (Tone: n.s.; Identity: small effect favoring Senior), ruling out metric-specific artifacts.

### K.4 Interpretation

The prompt ablation yields three conclusions:

1. 1.

   Prompt tone is not a confound. Directive vs. exploratory instructions produce statistically indistinguishable diversity under flat topology ($\eta^{2}=0.023$). The diversity collapse in authority-weighted structures cannot be attributed to directive prompt design.
2. 2.

   Authority-induced collapse is structural, not prompt-driven. When Senior personas interact in a flat topology, they produce *higher* diversity than Junior personas. The diversity collapse occurs only when expertise is combined with hierarchical authority structures (Leader-Led, Interdisciplinary), confirming that the interaction topology—not the identity label—drives the collapse.
3. 3.

   The total prompt-level variance is small. Identity and Tone together explain only 9.2% of total variance ($\eta^{2}\_{\text{Identity}}+\eta^{2}\_{\text{Tone}}+\eta^{2}\_{\text{Interaction}}=0.058+0.023+0.011$). By contrast, the structural effect (persona structure with topology) explains 42% of variance in the temperature sensitivity analysis (Appendix [L](https://arxiv.org/html/2604.18005v2#A12 "Appendix L Temperature Sensitivity Analysis ‣ Diversity Collapse in Multi-Agent LLM Systems: Structural Coupling and Collective Failure in Open-Ended Idea Generation")). Interaction structure dominates prompt-level variables by a factor of ${\sim}5\times$.
