---
id: arxiv-2510-03310-prompts
type: material
title: 'Опубликованные разделы о промптах: Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior
  Simulators in Operations Management'
source_id: arxiv-2510-03310
source_url: https://arxiv.org/html/2510.03310v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 00e060e279c9cfbd23afdc2d63bef8c2d43b8ec810e416f45f4fa544375397be
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## 5 Chain-of-thought Prompting

One natural way to reduce the distributional gap between LLM-generated and human behavioral data is to fine-tune the model on task-specific human responses or human-provided instructions.
In the behavioral OM settings we study, however, fine-tuning is often impractical. First, fine-tuning typically requires a sufficiently large and representative training dataset ([Zhang et al. 2021](https://arxiv.org/html/2510.03310v2#bib.bib49)), whereas behavioral OM data are commonly obtained from lab experiments that are costly to design, recruit, and administer. As a result, the available human samples are often too limited to support reliable task-specific adaptation. Second, fine-tuning can require substantial computational resources and model access, which may not be available to many researchers or practitioners, especially when working with large proprietary or open-weight models ([Hu et al. 2022](https://arxiv.org/html/2510.03310v2#bib.bib22)). Third, when the training data are small or narrowly drawn from a specific experimental condition, fine-tuning may overfit to idiosyncratic features of the sample rather than improve general behavioral fidelity ([Howard and Ruder 2018](https://arxiv.org/html/2510.03310v2#bib.bib21)). These limitations motivate the use of lightweight mitigation approaches that can be applied without retraining the model

In this section, we one such approach:
CoT prompting,3 which is a general prompting strategy designed to improve the reasoning ability of LLMs ([Wei et al. 2022c](https://arxiv.org/html/2510.03310v2#bib.bib45)). Prior work suggests that CoT can improve performance on reasoning-intensive tasks and reduce certain forms of hallucination ([Ji et al. 2023](https://arxiv.org/html/2510.03310v2#bib.bib23)).
In our setting, however, the effect of CoT is ex ante ambiguous. Simulating human behavior in OM experiments requires not only logical reasoning, but also behavioral calibration: the model must generate responses that match human choices, including human biases, heuristics, and dispersion. A prompt that induces more explicit reasoning may therefore either improve alignment with human behavior or move the model closer to a normative decision rule that humans do not follow.

We examine two CoT-based prompting approaches: simple CoT and structured CoT. Simple CoT is an unstructured prompting intervention that adds a generic reasoning instruction to the baseline prompt. Structured CoT, analyzed separately, imposes a stage-based reasoning framework tailored to the sequential structure of the experimental task. This distinction is useful because many of our simulations involve repeated or sequential decisions. For example, in the inventory-management experiment of [Chen et al. (2013)](https://arxiv.org/html/2510.03310v2#bib.bib7), participants make ordering decisions over 25 days. In such settings, performance may depend not only on whether the model reasons before each decision, but also on whether it applies a consistent decision framework over time.

### 5.1 Simple CoT

In the simple CoT condition, we append the instruction “Explain your reasoning process first” to the original simulation prompt before the model generates its decision. This intervention is deliberately generic: it does not provide task-specific guidance, identify relevant economic variables, or specify a decision algorithm. It therefore allows us to test whether a low-cost, general-purpose reasoning prompt improves the behavioral fidelity of LLM simulations.

\FIGURE

Simple CoT Improvement with LLaMA-70B
Improvement ratio is defined as the relative change in Wasserstein distance, mean mismatch, or dispersion mismatch between LLM and human responses after CoT prompting. Positive values indicate improvement, while negative values indicate deterioration.

Figure [5.1](https://arxiv.org/html/2510.03310v2#S5.SS1 "5.1 Simple CoT ‣ 5 Chain-of-thought Prompting ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management") reports the effect of simple CoT for LLaMA-70B across the nine lab experiments and a range of *temperature*4 settings. Simple CoT often improves performance, as measured by a reduction in the Wasserstein distance between simulated and human response distributions. In some cases, the improvement ratio approaches 100%.5 However, the effect is far from uniform. CoT worsens performance in some experiments, including those based on [Kremer and Debo (2016)](https://arxiv.org/html/2510.03310v2#bib.bib26) and [Kremer et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib27). These results suggest that simple CoT is not a universally beneficial correction. Although it is easy to implement, its effect should be evaluated empirically rather than assumed to improve behavioral alignment.

The decomposition of distributional mismatch provides additional insight.
As discussed in Section [4](https://arxiv.org/html/2510.03310v2#S4 "4 Distributional Misalignment ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management"), variance (i.e., dispersion) mismatch is the dominant source of error in many experiments.
Simple CoT, however, primarily affects mean mismatch. In Figure [5.1](https://arxiv.org/html/2510.03310v2#S5.SS1 "5.1 Simple CoT ‣ 5 Chain-of-thought Prompting ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management"), changes in Wasserstein distance closely track changes in bias: when CoT reduces bias, overall mismatch tends to fall; when CoT shifts the mean in the wrong direction, performance deteriorates. By contrast, improvements in dispersion mismatch are limited and appear only in a subset of experiments. Thus, simple CoT appears more effective at changing the central tendency of model responses than at reproducing the dispersion of human behavior.

\FIGURE

Performance of Simple CoT in the Experiment of [Chen et al. (2013)](https://arxiv.org/html/2510.03310v2#bib.bib7)
Circle markers denote the average order quantity for simulated participants on a given day with CoT prompting; triangle markers denote the baseline condition without CoT.

The inventory-management experiment of [Chen et al. (2013)](https://arxiv.org/html/2510.03310v2#bib.bib7) illustrates how simple CoT changes model behavior. As shown in Figure [5.1](https://arxiv.org/html/2510.03310v2#S5.SS1 "5.1 Simple CoT ‣ 5 Chain-of-thought Prompting ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management"), both the baseline and CoT conditions preserve the qualitative treatment effect: average order quantities are higher under the newsvendor’s own-financing scheme (scheme O) than under the customer-financing scheme (scheme C). CoT nevertheless shifts the level of decisions closer to the human data. Under scheme O, the average order quantity increases from 9.197 without CoT to 9.957 with CoT. Under scheme C, it increases from 7.934 to 9.505. The reasoning traces also become more explicit and more closely tied to the stated trade-offs in the task.

Without CoT, the model often relies on a simple history-driven heuristic, especially under scheme O, adjusting orders upward across rounds in response to recent outcomes. With CoT, the model more consistently articulates the financing condition, demand uncertainty, and payoff consequences before choosing an order quantity. This pattern helps explain why CoT reduces mean mismatch in this experiment. At the same time, the broader results show that such improvements are context-dependent. Simple CoT can make decisions more deliberate, but deliberation does not necessarily make simulated behavior more human-like when the human benchmark reflects framing effects, noisy responses, or other behavioral regularities that explicit reasoning may attenuate.

Additional results on simple CoT are reported in Section [11.2](https://arxiv.org/html/2510.03310v2#S11.SS2 "11.2 Simulation with and without CoT ‣ 11 Additional Results ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management") of the e-companion.

### 5.2 Structured CoT

To better understand how CoT affects simulation performance, we implement a structured stage-ablation analysis. The goal is not only to evaluate whether CoT improves alignment with human behavior, but also to identify which components of the reasoning process contribute to the final decision. We decompose each structured reasoning trace into a set of semantic stages,

|  |  |  |
| --- | --- | --- |
|  | $$R=\{S\_{1},S\_{2},\dots,S\_{n}\},$$ |  |

where each stage corresponds to a distinct analytical component, such as cost-benefit reasoning, demand analysis, or lead-time analysis.

For each stage $S\_{i}$, we construct a counterfactual reasoning trace

|  |  |  |
| --- | --- | --- |
|  | $$R\_{-i}=\{S\_{1},\dots,S\_{i-1},\phi(S\_{i}),S\_{i+1},\dots,S\_{n}\},$$ |  |

where $\phi(S\_{i})=S\_{i}^{cf}$ replaces the original stage with a counterfactual instruction that blocks the information or reasoning associated with that stage. For example, when ablating a demand-analysis stage, we replace the corresponding reasoning with a statement such as “Demand and forecast information from this stage are unknown.” We then ask the model to regenerate its final decision using the modified reasoning trace and measure how the decision distribution changes relative to the empirical human benchmark.

\FIGURE

Effects of Stage Ablation
Improvement ratio is defined as the relative change in Wasserstein distance, mean mismatch, or dispersion mismatch when a reasoning stage is retained rather than removed. Positive values indicate that retaining the stage improves alignment with human responses, whereas negative values indicate that retaining the stage worsens alignment.

Figure [5.2](https://arxiv.org/html/2510.03310v2#S5.SS2 "5.2 Structured CoT ‣ 5 Chain-of-thought Prompting ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management") summarizes the stage-ablation results. To make the results interpretable, we group substantively similar stages into broader stage families and omit stage families with fewer than five observations. The results show that individual reasoning stages often have a larger effect on alignment with human behavior than on the mean decision itself. Thus, the stage-ablation analysis provides a mechanism-level account of why CoT helps in some experiments but not in others.

For experiments in which CoT improves alignment overall, including [Chen et al. (2013)](https://arxiv.org/html/2510.03310v2#bib.bib7), [Croson and Donohue (2006)](https://arxiv.org/html/2510.03310v2#bib.bib10), [Engelbrecht-Wiggans and Katok (2008)](https://arxiv.org/html/2510.03310v2#bib.bib14), [Ho and Zhang (2008)](https://arxiv.org/html/2510.03310v2#bib.bib18), and [Özer et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib34), the Wasserstein panel shows that many isolated stage families either worsen alignment or do not clearly improve it on their own. This pattern suggests that CoT is beneficial in these experiments mainly because the full reasoning chain coordinates multiple analytical components, rather than because each individual stage is independently alignment-enhancing.

By contrast, for experiments in which CoT does not improve alignment overall—including [Davis et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib12), [Kremer and Debo (2016)](https://arxiv.org/html/2510.03310v2#bib.bib26), [Kremer et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib27), and [Schweitzer and Cachon (2000)](https://arxiv.org/html/2510.03310v2#bib.bib37)—some visible stage families have positive effects. In these cases, certain reasoning components are locally helpful, even though the complete CoT prompt does not improve the final distribution. The failure of CoT therefore does not imply that all reasoning stages are harmful. Rather, helpful local effects may be offset by other parts of the reasoning chain that move the model away from human behavior.

The most influential stages also differ across experiments. In settings where CoT improves alignment, important stages are mainly operational or strategic: cost and cost-benefit reasoning in [Chen et al. (2013)](https://arxiv.org/html/2510.03310v2#bib.bib7), auction dynamics in [Engelbrecht-Wiggans and Katok (2008)](https://arxiv.org/html/2510.03310v2#bib.bib14), demand and cost reasoning in [Ho and Zhang (2008)](https://arxiv.org/html/2510.03310v2#bib.bib18), and data cleaning or time-series decomposition in [Özer et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib34). In settings where CoT does not improve alignment, influential stages include auction competition in [Davis et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib12), expectation and sensitivity analysis together with waiting-cost reasoning in [Kremer and Debo (2016)](https://arxiv.org/html/2510.03310v2#bib.bib26), model choice and time-series decomposition in [Kremer et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib27), and demand forecasting, cost-revenue reasoning, or uncertainty-service-level reasoning in [Schweitzer and Cachon (2000)](https://arxiv.org/html/2510.03310v2#bib.bib37). These patterns indicate that structured CoT changes LLM behavior through economically meaningful reasoning channels, but the direction of the effect depends on how those channels interact within the complete reasoning trace.

Overall, the structured CoT results reinforce the main lesson from the simple CoT analysis. CoT is not merely a generic accuracy booster. It reshapes the model’s internal decision process by emphasizing particular analytical stages. This can improve behavioral alignment when the stages jointly reconstruct the human decision logic, but it can reduce alignment when the reasoning chain overemphasizes normative optimization, suppresses human-like heuristics, or combines locally useful stages in a way that distorts the final decision distribution.

### 5.3 Semantic Analysis of CoT Reasoning Traces

The preceding results show that CoT prompting can improve distributional alignment in some experiments but worsen it in others. To understand why, we analyze the reasoning traces produced by LLaMA-70B and ask which semantic patterns in the traces are associated with smaller or larger distributional gaps. This analysis treats CoT not only as an intervention, but also as a source of diagnostic information about how the model makes sequential decisions.

We focus on the structured CoT.
and use an automated LLM-as-a-Judge pipeline to score the textual justifications that precede each simulated decision. The judge is implemented using Qwen2.5-32B-Instruct and assigns continuous scores from 0 to 1 to each round-level reasoning trace. We focus on three semantic heuristics:

1. 1.

   Historical Signal Averaging: the extent to which the reasoning uses past observed signals to form an average-like reference for the current decision.
2. 2.

   Outcome Feedback Adjustment: the extent to which the reasoning adjusts the current decision based on outcomes from earlier rounds.
3. 3.

   Constant Action Freezing: the extent to which the reasoning justifies repeating the same action across rounds because of uncertainty, caution, or environmental volatility.

For each simulated subject in each condition, we aggregate the round-level semantic scores across the full decision sequence. We then relate these subject-level semantic traits to subject-level measures of distributional misalignment, including Wasserstein distance, mean mismatch, and dispersion mismatch relative to the corresponding human benchmark. This aggregation is necessary because mean and dispersion mismatch are properties of an entire multi-round decision sequence rather than of a single round.

\FIGURE

Average Correlation Between Semantic Heuristics and Distributional Misalignment Metrics
The figure reports, for each experiment, the average within-condition correlation between semantic heuristic scores—freezing, averaging, and feedback adjustment—and three misalignment metrics: Wasserstein distance, mean mismatch, and dispersion mismatch. The plotted values are averaged across conditions within each experiment.

Figure [5.3](https://arxiv.org/html/2510.03310v2#S5.SS3 "5.3 Semantic Analysis of CoT Reasoning Traces ‣ 5 Chain-of-thought Prompting ‣ Predicting Effects, Missing Distributions: Evaluating LLMs as Human Behavior Simulators in Operations Management") shows that *constant action freezing* is the semantic pattern most consistently associated with poor distributional alignment. In many experiments, freezing is positively correlated with Wasserstein distance and, more specifically, with dispersion mismatch. This pattern is especially pronounced in dynamic inventory, auction, and capacity decisions under uncertainty, such as [Özer et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib34) and [Davis et al. (2011)](https://arxiv.org/html/2510.03310v2#bib.bib12). In these settings, the LLM often responds to uncertainty by locking onto a stable quantity rather than continuing to adjust its decisions over time. As a result, the simulated trajectories become too smooth and too concentrated relative to human behavior.

This result helps explain why CoT does not always improve simulation performance. Human subjects often exhibit boundedly rational, pattern-seeking behavior: they respond to recent shocks, adjust actions after unfavorable outcomes, and sometimes chase demand or prices even when such adjustments are not normatively optimal. These behaviors generate substantial within-subject variation over time. By contrast, CoT can encourage the LLM to produce more stable and internally consistent reasoning. Such consistency may improve the mean decision level, but it can also suppress the sequential variability that characterizes human data. In this sense, CoT may reduce first-moment error while worsening, or failing to correct, second-moment error.

Freezing can also contribute to mean mismatch. When the model commits early to a nearly constant decision rule, it may anchor on a suboptimal level and stop updating. This produces persistent deviations from the human mean. Consistent with this mechanism, freezing is positively associated with mean mismatch in several experiments, including [Ho and Zhang (2008)](https://arxiv.org/html/2510.03310v2#bib.bib18), [Schweitzer and Cachon (2000)](https://arxiv.org/html/2510.03310v2#bib.bib37), and [Croson and Donohue (2006)](https://arxiv.org/html/2510.03310v2#bib.bib10). Thus, the same semantic tendency that reduces variability can also prevent the model from correcting an initially miscalibrated decision level.

By contrast, historical averaging and outcome feedback adjustment are generally associated with better alignment. Averaging tends to reduce mean mismatch by recentering decisions around observed signals, while feedback adjustment helps the model correct prior-period errors. These heuristics act as sequential stabilizers: they allow the model to update decisions without relying entirely on a fixed policy. However, their benefits are incomplete. Although averaging and feedback can improve mean alignment and introduce some round-to-round movement, they do not fully reproduce the magnitude or irregularity of human sequential variation.

The semantic evidence suggests a reason why CoT has mixed effects. CoT can help the model articulate relevant information, average signals, and correct prior errors, which often improves mean alignment. At the same time, CoT can also induce overly disciplined and static reasoning, especially when the model treats uncertainty as a reason to freeze rather than explore or adjust. The resulting behavior differs from human bounded rationality: humans often display dynamic suboptimality through noisy adjustment, whereas the LLM frequently displays static suboptimality through excessive consistency. This difference in sequential variability is a central reason why CoT alone cannot eliminate the distributional gap between LLM-generated and human behavioral data.
