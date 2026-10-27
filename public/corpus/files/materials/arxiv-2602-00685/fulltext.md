---
id: arxiv-2602-00685-text
type: material
title: 'HumanStudy-Bench: Towards AI Agent Design for Participant Simulation'
work_id: arxiv-2602-00685
source_url: https://arxiv.org/html/2602.00685v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: cbbfb7d2cbee40a6e2db2fac62b885c94c3773e99ee809dd3f2952596d4d67df
---

> Источник: [https://arxiv.org/html/2602.00685v2](https://arxiv.org/html/2602.00685v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# HumanStudy-Bench: Towards AI Agent Design for Participant Simulation

Xuan Liu1,6
Affiliation: Yuanjun Feng2,6, Zizhang Liu3,6, Xinyan Liu6
  
HaoYang Shang6
Affiliation: Guankai Zhai4, Yunze Xiao5, Yiwen Tu1, Haojian Jin1

TECHNICAL REPORT

1University of California, San Diego, 2Université de Lausanne,
3Tsinghua University, 4Stanford University,
5Carnegie Mellon University, 6HumanStudy Hub
Large language models (LLMs) are increasingly used as simulated participants in social science experiments, but their behavior is often unstable and highly sensitive to design choices. Prior evaluations frequently conflate base model capabilities with experimental instantiation, obscuring whether outcomes reflect the model itself or the agent setup. We instead frame participant simulation as an agent-design problem over full experimental protocols, where an agent is defined by a base model and a specification (e.g., participant attributes) that encodes behavioral assumptions. We introduce HUMANSTUDY-BENCH, an open platform and execution engine designed for practitioners to develop and evaluate agents tailored to their target experimental settings. The platform reconstructs published human-subject experiments via a human-in-the-loop Filter–Extract–Execute–Evaluate pipeline that preserves the original stimuli, conditions, and statistical procedures end to end, while allowing practitioners to freely explore the agent design space. We introduce two complementary metrics that quantify agreement with humans on both the significance conclusion and the effect size, while accounting for finite-sample uncertainty in the human reference data. In collaboration with social scientists, we validate the platform on a suite of 12 foundational studies covering 6,000+ trials across individual cognition, strategic interaction, and social psychology.
Correspondence: Xuan Liu at [xul049@ucsd.edu](mailto:xul049@ucsd.edu)

## 1 Introduction

Recent work shows that large language models (LLMs) exhibit human-like decision-making and social behavior across diverse domains, including economic experiments ([Horton, 2023](https://arxiv.org/html/2602.00685v2#bib.bib15)), political science ([Argyle et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib16); [Hofmann et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib24)), marketing ([Li et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib23)), and social psychology ([Dillion et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib17); [Aher et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib18)). These findings have motivated the use of LLM-based models as surrogates or simulation testbeds for human participants in social science research ([Gao et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib10); [Manning et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib22); [Hwang et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib12); [Anthis et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib4)). However, converging evidence cautions against treating such LLM-based models as faithful simulators of human subjects ([Wang et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib9); [Gao et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib3)). Across a range of behavioral tasks, they often yield unstable response distributions ([Santurkar et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib19)), lack sensitivity to population heterogeneity ([Bisbee et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib11)), and are overly sensitive to experimental design choices like prompt wording or sampling settings ([Loya et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib20); [Sclar et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib21)).

These limitations pose a fundamental challenge for using raw models as “drop-in” replacements for human participants. For social science applications, the key requirement is not only plausible individual responses, but also stable condition-level effects and reliable inferential conclusions under the same analysis pipeline used for human data ([Bail, 2024](https://arxiv.org/html/2602.00685v2#bib.bib2); [Ying et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib7)). Yet most existing evaluations either characterize raw model behavior on bespoke tasks ([Norhashim and Hahn, 2025](https://arxiv.org/html/2602.00685v2#bib.bib8); [Hu et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib1)), or test whether a fixed prompt can qualitatively reproduce canonical effects ([Liu et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib14)). Such setups conflate base model capability with experimental instantiation, obscuring the iterative design work that largely determines whether a simulator is usable in practice.

In practice, LLMs enter social science workflows as surrogate participant *agents*: depending on the application, a base model may be instantiated with explicit roles and task framing, and optionally equipped with demographic attributes, goals, memory, or auxiliary mechanisms (e.g., tools or skills). Such an agent is typically embedded into a full experimental protocol. Crucially, these specifications are not neutral wrappers—they encode behavioral assumptions and can qualitatively change outcomes even when the base model is held fixed. This motivates treating participant simulation as an *agent design* problem under realistic constraints (e.g., a limited number of design iterations), and, in turn, evaluating alignment at the level of scientific inference across heterogeneous paradigms.

To this end, we introduce HumanStudy-Bench, an open platform and execution engine that decouples experimental setup from agent design, allowing practitioners to develop and evaluate agents tailored to their target experimental settings. First, it is explicitly developed to operationalize *agent design*: each agent comprises a base model and a specification (e.g., roles, demographics, prior experience, or auxiliary mechanisms) that instantiates behavioral hypotheses, encoding assumptions about which aspects of human participants matter for reproducing the original effect.

Second, HumanStudy-Bench provides a high-fidelity execution engine that reconstructs full human-subject experiments from published studies and replays their stimuli, instructions, and trial sequences under the original experimental conditions and statistical procedures via an end-to-end human-in-the-loop Filter–Extract–Execute–Evaluate pipeline. This turns static articles into a reusable simulation environment that provides a controlled testbed for comparing different agent designs under identical experimental conditions and analysis pipelines.

Finally, we introduce two complementary metrics that score the two facets of any hypothesis test. The *Probability Alignment Score* (PAS) measures *inferential* agreement: whether agents and humans reach the same significance conclusion about an effect. The *Effect Consistency Score* (ECS) measures *magnitude* agreement: whether agents also reproduce the size of the human effect. The two can diverge; an agent may reach the right conclusion while exaggerating the effect, so we report both.

Throughout, agents generate individual trial-level responses that are analyzed with the study’s original statistical pipeline, rather than being asked directly what the study concluded. Many of these conclusions are population-level constructs—subgroup comparisons, interaction effects, variance-based statistics, and path-dependent multi-round dynamics—that exist only through aggregation over heterogeneous individuals and cannot be recovered from a single oracle call.

As an initial validation of the platform, we curated a suite of 12 foundational studies from around 100 candidates in collaboration with social scientists, covering 6,000+ trials with human samples ranging from tens to over 2,100 participants. Using HumanStudy-Bench, we evaluate 10 contemporary LLMs and four common agent designs. Our results show that current LLM-based agents achieve limited and inconsistent inferential alignment with humans: they exhibit polarized, bimodal behaviors rather than human-like unimodal patterns, agent design has a large and non-monotonic effect, and neither larger models nor simple multi-model ensembles reliably improve alignment.

## 2 Background & Related Work

LLM-based social simulation.
LLM-based social simulation uses LLMs as simulated human participants to study social and behavioral phenomena ([Horton, 2023](https://arxiv.org/html/2602.00685v2#bib.bib15); [Argyle et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib16); [Gao et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib10); [Manning et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib22)).
Recent work also uses multimodal language models such as VLMs for settings with visual or other non-textual stimuli ([Huang et al., 2026](https://arxiv.org/html/2602.00685v2#bib.bib35)).
Most work constructs agents via prompting, including *persona prompting* based on demographic profiles or backstories to mimic specific subpopulations ([Liu et al., 2024a](https://arxiv.org/html/2602.00685v2#bib.bib29); [Chen et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib28); [Jiang et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib34)) and *context-rich prompting* that augments agents with richer evidence such as comprehensive memory streams ([Park et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib26); [Park et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib25)).
There are also representation-level methods such as *steering vectors*, which inject latent features for fine-grained control ([Liu et al., 2026](https://arxiv.org/html/2602.00685v2#bib.bib13)), and *fine-tuning*, which directly aligns models with human behavior ([Liu et al., 2024b](https://arxiv.org/html/2602.00685v2#bib.bib6); [Kolluri et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib36); [Binz et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib27)).

Evaluations.
The growth of LLM-based social simulation creates a need for systematic evaluation.
Existing benchmarks typically evaluate models on static datasets of survey questions or bespoke tasks ([Dominguez-Olmedo et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib30); [Norhashim and Hahn, 2025](https://arxiv.org/html/2602.00685v2#bib.bib8); [Hu et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib1)), for example, assessing whether models reproduce canonical social science findings ([Liu et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib14)) or match human responses on standard psychometric inventories ([Miotto et al., 2022](https://arxiv.org/html/2602.00685v2#bib.bib32); [Jiang et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib31); [Serapio-García et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib33)).
On the task side, they typically treat LLMs as raw models in single-turn or fixed-prompt settings, rather than as configurable agents in realistic multi-stage experiments, providing little guidance on how to design agents for participant simulation in social science research. On the evaluation side, current approaches rely on aggregate point estimates ([Argyle et al., 2023](https://arxiv.org/html/2602.00685v2#bib.bib16); [Park et al., 2024](https://arxiv.org/html/2602.00685v2#bib.bib25)) or distributional distance metrics ([Suh et al., 2025](https://arxiv.org/html/2602.00685v2#bib.bib5)); both ignore randomness in human responses and differences in statistical power, and lack theoretical guarantees ([Hullman et al., 2026](https://arxiv.org/html/2602.00685v2#bib.bib56)).

HumanStudy-Bench addresses both gaps: it decouples experimental setup from agent design, allowing practitioners to explore and optimize agent design against the same reconstructed experimental protocol; it replaces threshold-based significance matching with inference-level metrics that account for finite-sample uncertainty and are comparable across heterogeneous studies.

## 3 HumanStudy-Bench

![Refer to caption](https://arxiv.org/html/2602.00685v2/HS_Bench_new.png)


Figure 1: Overview of the HumanStudy-Bench engine. Given published human-subject studies, the engine filters and extracts experimental designs, statistical tests, and human ground-truth results into a reusable simulation environment. Practitioners design agents—combining a base model with a specification (e.g., demographic, backstory, role)—and run them through reconstructed experimental protocols. Agent results are then evaluated against human ground truth via two complementary metrics: inferential agreement (PAS) and effect size agreement (ECS).

HumanStudy-Bench evaluates agent design: how models are instantiated as AI agents that serve as surrogate participants in social science experiments. Rather than on “raw” model capability, we focus on the agent design space, which includes both the base model and the agent specification. Our premise is that agent specifications instantiate behavioral hypotheses, encoding assumptions about which aspects of human participants (e.g., demographics, cognitive biases, task understanding) matter for reproducing the original effect. As a result, AI agents with the same base model can exhibit qualitatively different behavioral patterns under different agent specifications.

### 3.1 Task Formulation

Study Input.
To instantiate a simulation, the required input is a human-subject study, including (1) an experimental design
$\mathcal{E}=(\textit{conditions},\textit{stimuli},\textit{measures},\textit{...}),$
(2) a pre-specified statistical hypothesis test (e.g., $H\_{0}:\mu\_{1}=\mu\_{2}$), and (3) ground-truth human results $D\_{h}$ derived from the original human data (e.g., test statistic, effect direction, and significance decision).

Participants’ profiles (e.g., demographics) are optional. They can serve as reference information for the practitioner when designing agents, but are not required for experiment reconstruction.

Agent Design.
Given this study input, the practitioner’s task is to design AI agents:

|  |  |  |
| --- | --- | --- |
|  | $$Agent=(\textit{Model},\textit{Specification}),$$ |  |

with the goal of faithfully reproducing the inferential conclusions of the original human-subject study.
The Specification determines how the base Model (e.g., GPT, Claude, Gemini) is instantiated as a participant in the experiment, including task and role prompts, participant-facing attributes (e.g., demographics, prior knowledge, goals), and auxiliary mechanisms such as tools, skills, or memory. The agent is then run under the experimental design $\mathcal{E}$ to produce agent “responses”:

|  |  |  |
| --- | --- | --- |
|  | $$X\_{a}=\{x\_{1},\ldots,x\_{n}\}.$$ |  |

Evaluation.
We evaluate whether agent responses $X\_{a}$ and human responses $X\_{h}$ lead to the same inferential conclusions when passed through the study’s original analysis pipeline. We assess this alignment along two complementary axes of any hypothesis test. At the *inferential level*, we ask whether agents and humans agree on whether the effect exists; we capture this with the Probability Alignment Score (PAS). At the *magnitude level*, we ask whether agents reproduce the human effect size; we capture this with the Effect Consistency Score (ECS). Both metrics are explained in Section [3.3](https://arxiv.org/html/2602.00685v2#S3.SS3 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

### 3.2 HumanStudy-Bench Engine

HumanStudy-Bench transitions raw literature into reusable simulation environments through an LLM-assisted, human-in-the-loop pipeline—Filter, Extract, Execute, and Evaluate. The pipeline was co-designed with social scientists through iterative refinement. To ensure scientific rigor, in Filter and Extract stages, LLM outputs undergo human verification before entering the pipeline; in Evaluate stage, all statistical analyses are performed deterministically via standard scientific libraries, with no LLM involvement.

#### 3.2.1 Filter

To ensure experimental fidelity, the filter stage curates human studies that are both scientifically important and practically reproducible. We include a study only if (i) the full experimental details are documented (e.g., stimuli, task instructions, and experimental conditions; participant profiles are not required); (ii) outcomes are quantifiable with clearly specified statistical tests and reported effect sizes; (iii) the design is simulation-feasible, excluding studies that require specialized equipment or physiological measurements (e.g., fMRI or longitudinal training protocols). These criteria were co-designed with social scientists to balance scientific rigor with simulation feasibility.

We operationalize these criteria using an LLM-assisted filter. Given a candidate research article, the filter parses the paper, extracts experimental details, and assesses the study against the inclusion criteria. It produces a structured verification checklist that flags potential exclusion reasons (e.g., reliance on specialized equipment, missing statistical details). Human reviewers inspect this checklist to verify extraction accuracy, correct any errors, and make the final inclusion decision. Practitioners can apply the same standardized process to curate their own studies.

The study suite used to validate the platform comprises 12 foundational studies, curated from around 100 candidates in collaboration with social scientists (Appendix [E](https://arxiv.org/html/2602.00685v2#A5 "Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). We deliberately anchor the initial suite in classic studies drawn from high-impact journals, whose effects are robustly established through independent replication, providing a stable ground truth for evaluating agent design.

#### 3.2.2 Extraction

The extraction stage formalizes unstructured social science studies into machine-executable representations. We extract the Experiment Design (e.g., experimental conditions, factorial structures, trial sequences, and stimulus materials) and the original Statistical Tests (e.g., stated hypotheses, and test types) along with human Ground-Truth outcomes (e.g., test statistics, $p$-values, and descriptive summaries), which define the evaluation targets for alignment. Participants’ Profiles (e.g., sample size, demographics, and group assignments) are also extracted when available, serving as optional reference priors for agent specification.

We implement this stage using an LLM-assisted extractor, which parses the filtered papers into a standardized, machine-readable schema. As with filtering, the extractor’s outputs include a verification checklist for each study, which human reviewers inspect to correct errors and approve the extracted materials.

#### 3.2.3 Execution

HumanStudy-Bench takes a given set of agent designs and runs them through the extracted experimental protocols via a shared execution engine. The key design principle is a task-centric interface that decouples agent implementations from individual studies: different agent designs can be plugged into the same tasks without changing the underlying experimental scripts, enabling controlled comparisons across models, prompts, or other variants of agent specifications.

Each study yields its own configuration module that encodes study-specific procedures—conditions, stimulus order, and instruction prompts. These modules are generated by an LLM-assisted configurator that synthesizes study-specific code from the extracted structured representations. Since the configuration code follows a fixed template, the LLM fills in study-specific details already extracted from the extraction stage rather than generating code from scratch, ensuring reliability while reducing manual effort. For every trial, the execution module packages the relevant inputs into a task instance and feeds it to the agent, which returns a trial-level response (e.g., choices, free-form texts, or ratings) recorded together with trial metadata. All configuration code is cross-reviewed by human researchers before deployment.

### 3.3 Measuring Agent–Human Alignment through Validated Hypotheses

With protocols reconstructed and agent responses collected, the evaluation stage judges alignment at the level of scientific inference: whether agent and human data yield the same inferential conclusions under identical statistical pipelines. Each study has its original analyses reproduced on agent data, and the resulting test statistics are passed to a shared scoring module defined by the PAS and ECS metrics below.

A study typically reports multiple findings—distinct behavioral phenomena (e.g., “Framing Effect”), each supported by one or more statistical tests. We score each finding on two complementary axes: the Probability Alignment Score (PAS) captures whether agents and humans reach the same inferential conclusion about whether an effect exists; the Effect Consistency Score (ECS) captures whether the effect sizes also match. The two metrics are related but not redundant: a study can yield a statistically significant but small effect, or a large but non-significant effect due to insufficient power, so a model can succeed on one axis while failing on the other. Scores are aggregated from tests to findings to studies in a study-balanced manner, so no single study dominates the benchmark.

Metric 1: Probability Alignment Score (PAS).
Consider a statistical hypothesis test $j$. Let $\theta\_{h,j},\theta\_{a,j}\in\{0,1\}$ denote whether the effect truly exists ($H\_{1}$) or not ($H\_{0}$) in the human population and the agent simulation. Ideally, we seek the Oracle Alignment Score: the true agreement between these latent states,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{A}^{\*}\_{j}=\mathbbm{1}(\theta\_{a,j}=\theta\_{h,j}).$$ |  | (1) |

In practice, the latent truth $\theta$ is never directly observable; we only see noisy data. A naive approach compares binary significance decisions—but this is unstable: studies at $p{=}0.049$ and $p{=}0.051$ receive opposite labels despite near-identical evidence, and finite human samples contain intrinsic uncertainty. PAS instead provides a continuous approximation to $\mathcal{A}^{\*}\_{j}$, following the framework of Probability of Agreement ([Gwet, 2014](https://arxiv.org/html/2602.00685v2#bib.bib49)): it quantifies the probability that agent and human data support the same hypothesis.

The construction follows a standard Bayesian evidence-to-probability pipeline ([Bishop and Nasrabadi, 2006](https://arxiv.org/html/2602.00685v2#bib.bib55); [Jaynes, 2003](https://arxiv.org/html/2602.00685v2#bib.bib51)). First, each test statistic is converted into a likelihood ratio $\Lambda\_{j}=P(\text{Data}\_{j}\mid H\_{1})/P(\text{Data}\_{j}\mid H\_{0})$, measuring the relative support of the data for the alternative versus the null, using established conversions tailored to the test type (see Appendix [C.1](https://arxiv.org/html/2602.00685v2#A3.SS1 "C.1 Evidence Transformation (Priors) ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") for formulas and prior choices). Under the neutral priors adopted below, $\Lambda$ coincides with the Bayes Factor $BF\_{10}$. Next, $\Lambda\in[0,\infty)$ is mapped to a bounded posterior probability via the logistic transform:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\pi\_{h}=\frac{\Lambda\_{h}}{1+\Lambda\_{h}},\quad\pi\_{a}=\frac{\Lambda\_{a}}{1+\Lambda\_{a}}$$ |  | (2) |

Under a uniform prior on $\theta$ (Principle of Indifference), $\pi$ corresponds to the posterior $P(H\_{1}\mid\text{Data})$ ([Bishop and Nasrabadi, 2006](https://arxiv.org/html/2602.00685v2#bib.bib55); [Jaynes, 2003](https://arxiv.org/html/2602.00685v2#bib.bib51)) (see Appendix [A.3](https://arxiv.org/html/2602.00685v2#A1.SS3 "A.3 Foundation of Probability Alignment Score ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") for derivation and frequentist interpretation). Finally, alignment is the probability that human and agent inferences support the same hypothesis—either both $H\_{1}$ or both $H\_{0}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{A}\_{j}=\underbrace{\pi\_{h}\pi\_{a}}\_{P(\text{Both }H\_{1})}+\underbrace{(1-\pi\_{h})(1-\pi\_{a})}\_{P(\text{Both }H\_{0})}$$ |  | (3) |

$\mathcal{A}\_{j}\in[0,1]$: when human evidence is ambiguous ($\pi\_{h}\approx 0.5$), the score converges to $0.5$ rather than penalizing the agent for failing to replicate noise. This property naturally down-weights underpowered tests in aggregation, so that benchmark scores reflect genuine alignment rather than sensitivity to sampling variability. Extension to multiple hypotheses is detailed in Appendix [C](https://arxiv.org/html/2602.00685v2#A3 "Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"). Because an agent may also produce a significant effect in the direction *opposite* to the human one, our implementation scores a three-way outcome space $\{H\_{+},H\_{-},H\_{0}\}$ rather than the two-state form above, so that a reversed effect scores near zero (details in Appendix [C.2](https://arxiv.org/html/2602.00685v2#A3.SS2 "C.2 Generalization to Multiple Hypotheses ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

Worked example. In False Consensus study, human data yields $F(1,312)=49.1$. Under a standard objective prior ([Rouder et al., 2009](https://arxiv.org/html/2602.00685v2#bib.bib52)), this gives $\Lambda\_{h}\approx 10^{8}$ and $\pi\_{h}\approx 1.0$ (near-certain that the effect exists). If an agent produces a non-significant $F=1.2$, then $\Lambda\_{a}\approx 0.15$ and $\pi\_{a}\approx 0.13$, yielding $\mathcal{A}\_{j}\approx 0.20$—the agent and humans disagree on whether the effect exists, and PAS reflects this as low alignment.

##### Aggregation.

Within each finding, we combine $M$ tests by averaging the alignment scores on the logit scale via the $\operatorname{arctanh}$ transform:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bar{\mathcal{A}}\_{\text{finding}}=\frac{1}{2}\left(\tanh\left(\frac{1}{M}\sum\_{j=1}^{M}\operatorname{arctanh}(2\mathcal{A}\_{j}-1)\right)+1\right)$$ |  | (4) |

Finding-level scores are then averaged within each study, and the benchmark PAS is the mean over studies, with each study contributing equal weight regardless of how many findings it contains (details in Appendix [B.3](https://arxiv.org/html/2602.00685v2#A2.SS3 "B.3 Aggregation Implementation ‣ Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

Metric 2: Effect Consistency Score (ECS).
PAS measures agreement on whether an effect exists; ECS measures agreement on the effect size. The two capture complementary aspects of replication fidelity: an agent that reproduces a “framing effect” but exaggerates it tenfold can score well on PAS yet poorly on ECS, and vice versa.

We adopt a psychometric approach ([Campbell and Fiske, 1959](https://arxiv.org/html/2602.00685v2#bib.bib48)), measuring Concurrent Validity of the agent’s behaviors using Standardized Effect Sizes (Appendix [C.3](https://arxiv.org/html/2602.00685v2#A3.SS3 "C.3 Standardized Effect Size Recovery ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). The score has to catch two failure modes simultaneously: an agent that gets the *pattern* of effects wrong (e.g., findings where humans show a large effect but the agent shows a small one, and vice versa), and an agent that gets the pattern right but produces effects on the wrong *scale* (e.g., uniformly inflated tenfold). A plain Pearson correlation only catches the first—it is invariant to linear rescaling, so it would reward a tenfold-inflated agent as perfect. Lin’s Concordance Correlation Coefficient ([Lawrence and Lin, 1989](https://arxiv.org/html/2602.00685v2#bib.bib50)) is the natural fix: it multiplies a Pearson-style pattern term by a bias-correction factor that explicitly penalizes mismatch in mean and variance. For a finding with $M$ tests, we collect human and agent effect-size vectors $\boldsymbol{\delta}\_{h},\boldsymbol{\delta}\_{a}$ and compute:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{ECS}\_{\text{finding}}=\rho\cdot C\_{b}=\rho\cdot\frac{2\sigma\_{a}\sigma\_{h}}{\sigma\_{a}^{2}+\sigma\_{h}^{2}+(\mu\_{a}-\mu\_{h})^{2}}$$ |  | (5) |

where $\mu$ and $\sigma^{2}$ are the mean and variance of each effect-size vector. Here $\rho$ is the Pearson correlation, measuring precision (how well the agent captures the pattern of effects across tests), while $C\_{b}$ is the bias correction factor, penalizing systematic deviations in location and scale. $\text{ECS}\approx 1.0$ requires the agent to replicate both the relative structure and the exact magnitude of human effects.

##### Aggregation.

Because studies differ in the number of findings $N\_{s}$, we set the weight of each finding $i$ from study $s$ to $w\_{i}=1/N\_{s}$, so every study contributes equally. The global ECS is then computed as a study-balanced concordance over all finding-level effect sizes:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{ECS}\_{\text{global}}=\frac{2\sum w\_{i}u\_{a,i}u\_{h,i}}{\sum w\_{i}u\_{a,i}^{2}+\sum w\_{i}u\_{h,i}^{2}+(\bar{\delta}\_{a}-\bar{\delta}\_{h})^{2}}$$ |  | (6) |

where $u\_{a,i}=\delta\_{a,i}-\bar{\delta}\_{a}$ and $u\_{h,i}=\delta\_{h,i}-\bar{\delta}\_{h}$ are centered deviations.

### 3.4 Features of HumanStudy-Bench

We summarize the key features of HumanStudy-Bench below.
  
Optimization of agent design for participant simulation. HumanStudy-Bench treats participant simulation in human studies as an *agent design* problem: for each base model, it searches for the best agent design, revealing both models’ best-case performance and gaps to human behavior.
  
High-fidelity human experiment reconstruction engine.
HumanStudy-Bench reconstructs full human-subject experiments from the original papers and instantiates their protocols in a reusable engine, enabling faithful replication.
  
Inferential-level alignment metrics.
HumanStudy-Bench compares human and agent behavior at the level of inferential conclusions, applying the same analysis pipeline to both and summarizing heterogeneous statistical evidence into comparable alignment scores.
  
Open platform for the research community. HumanStudy-Bench is designed as an open platform that grows with community contribution. Practitioners can contribute validated published studies to benchmark AI agents, or design new experiments to formulate and pilot test their research hypotheses, evaluate agent designs before deployment, and systematically compare different agent specifications across diverse experimental paradigms.

## 4 Experiment Setup

We systematically disentangle the effects of base model capabilities, agent design specifications, and inference parameters on simulation fidelity.

Human Studies.
We evaluate against 12 human-subject studies (Appendix [E](https://arxiv.org/html/2602.00685v2#A5 "Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")) spanning individual cognition, strategic interaction, and social psychology. The individual cognition studies focus on cognitive biases and heuristic judgment ([Ross et al., 1977](https://arxiv.org/html/2602.00685v2#bib.bib37); [Jacowitz and Kahneman, 1995](https://arxiv.org/html/2602.00685v2#bib.bib38); [Tversky and Kahneman, 1981](https://arxiv.org/html/2602.00685v2#bib.bib39); [Kahneman and Tversky, 1972](https://arxiv.org/html/2602.00685v2#bib.bib40)). Strategic interaction studies are drawn from paradigms in game theory ([Nagel, 1995](https://arxiv.org/html/2602.00685v2#bib.bib41); [Shafir and Tversky, 1992](https://arxiv.org/html/2602.00685v2#bib.bib42); [Forsythe et al., 1994](https://arxiv.org/html/2602.00685v2#bib.bib43); [Berg et al., 1995](https://arxiv.org/html/2602.00685v2#bib.bib44)). Social psychology studies examine social cognition, social norms, and group behavior ([Knobe, 2003](https://arxiv.org/html/2602.00685v2#bib.bib45); [Asch, 1946](https://arxiv.org/html/2602.00685v2#bib.bib46); [Gagnon and Bourhis, 1996](https://arxiv.org/html/2602.00685v2#bib.bib57); [Prentice and Miller, 1993](https://arxiv.org/html/2602.00685v2#bib.bib47)).

Models and Inference Settings.
We evaluate 10 contemporary models, including open-weight (e.g., Mistral, DeepSeek, Qwen) and proprietary APIs (e.g., Claude, GPT, Gemini, Grok). Model details in Appendix [F.1](https://arxiv.org/html/2602.00685v2#A6.SS1 "F.1 Model names and OpenRouter identifiers ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"). Motivated by work on diverse-model ensembles (e.g., MoE, multi-agent), we introduce a Mixed-Model Baseline: for each trial, we randomly sample one of 10 models to generate a response, repeating this 100 times. Unless otherwise noted in ablations, all models use a temperature $T=1.0$ to induce the behavioral variance needed for population simulation. For every study, the agent sample size is set to the *original human sample size* reported in the source paper, which ranges from tens to over $2{,}100$ participants. Sample size governs statistical certainty—a smaller $N$ yields weaker evidence and a larger $N$ stronger evidence—so tying it to the original design preserves the experiment’s power and avoids introducing a free parameter that could be tuned to manufacture or suppress significance. Given the large simulation sample sizes, the standard errors (SEs) are negligible ($\approx 5\%$), so we omit them from the main results for clarity and report full SEs in Appendix [F.2](https://arxiv.org/html/2602.00685v2#A6.SS2 "F.2 Bootstrap Standard Errors: Methodology and Justification ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

Agent Design Variants.
(1) Blank (A1) uses the base model with no additional specification.
(2) Role-Play (A2) instructs the model to act as a human participant in a psychological study, without specific attributes.
(3) Demographic (A3) assigns attributes (e.g., age, gender, occupation) sampled from the original study’s participant distribution.
(4) Contextualized Backstory (A4) augments demographics with a rich natural language narrative about the agent’s life history, personality, and daily context.
All four specifications share *identical* task instructions and identical stimuli; the only component that varies is the identity block prepended to the system prompt (none, role only, role plus demographics, role plus demographics plus backstory). Differences across A1–A4 therefore isolate the effect of participant specification rather than of task framing. To confirm that the scores are not artifacts of instruction wording—for instance, prompt-induced demand characteristics that cue an agent toward the “expected” answer—we paraphrased all three prompt components while holding their informational content fixed: PAS moves by at most $8.8$ percentage points, against cross-specification differences exceeding $32$ points (Appendix [F.7](https://arxiv.org/html/2602.00685v2#A6.SS7 "F.7 Prompt Sensitivity Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).
See Appendix [D](https://arxiv.org/html/2602.00685v2#A4 "Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") for the full templates.

Evaluation Protocol.
We deploy agents in reconstructed protocols to generate trial-level data, analyzed with the original statistical pipelines. We report the Probability Alignment Score (PAS; $[0,1]$) for inferential agreement and the Effect Consistency Score (ECS; $[-1,1]$) for effect-size alignment ($1$ indicates a perfect match to human data).

## 5 Results

Table 1: Main Leaderboard. Probabilistic Alignment (PAS) and Effect Consistency (ECS). Domain columns (Cog./Stra./Soc.) report PAS scores broken down by study domain. Best performing models are highlighted in teal, worst in salmon. Cost breakdowns see Appendix [F](https://arxiv.org/html/2602.00685v2#A6 "Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model |  | Cog. | Stra. | Soc. | PAS | ECS | Model |  | Cog. | Stra. | Soc. | PAS | ECS |
| Claude Haiku 4.5 | A1 | $0.35$ | $0.27$ | $0.47$ | $0.3616$ | $0.107$ | GPT 5 Nano | A1 | $0.33$ | $0.42$ | $0.33$ | $0.3594$ | $0.253$ |
|  | A2 | $0.33$ | $0.29$ | $0.47$ | $0.3627$ | $0.265$ |  | A2 | $0.48$ | $0.31$ | $0.30$ | $0.3597$ | $0.220$ |
|  | A3 | $0.38$ | $0.32$ | $0.39$ | $0.3650$ | $0.202$ |  | A3 | $0.45$ | $0.37$ | $0.45$ | $0.4226$ | $0.243$ |
|  | A4 | $0.32$ | $0.29$ | $0.65$ | $0.4181$ | $0.121$ |  | A4 | $0.64$ | $0.37$ | $0.33$ | $0.4442$ | $0.198$ |
| DeepSeek V3.2 | A1 | $0.35$ | $0.29$ | $0.38$ | $0.3405$ | $0.094$ | GPT OSS 120b | A1 | $0.26$ | $0.32$ | $0.46$ | $0.3471$ | $0.146$ |
|  | A2 | $0.49$ | $0.28$ | $0.34$ | $0.3701$ | $0.193$ |  | A2 | $0.39$ | $0.30$ | $0.49$ | $0.3925$ | $0.064$ |
|  | A3 | $0.30$ | $0.31$ | $0.47$ | $0.3593$ | $0.148$ |  | A3 | $0.39$ | $0.30$ | $0.47$ | $0.3889$ | $0.193$ |
|  | A4 | $0.36$ | $0.29$ | $0.52$ | $0.3859$ | $0.145$ |  | A4 | $0.40$ | $0.28$ | $0.50$ | $0.3929$ | $0.132$ |
| Gemini 3 Flash | A1 | $0.36$ | $0.42$ | $0.46$ | $0.4155$ | $0.098$ | GPT OSS 20b | A1 | $0.59$ | $0.29$ | $0.51$ | $0.4641$ | $0.195$ |
|  | A2 | $0.32$ | $0.43$ | $0.45$ | $0.4005$ | $0.120$ |  | A2 | $0.39$ | $0.31$ | $0.44$ | $0.3794$ | $0.171$ |
|  | A3 | $0.49$ | $0.43$ | $0.67$ | $0.5314$ | $0.143$ |  | A3 | $0.47$ | $0.31$ | $0.46$ | $0.4163$ | $0.218$ |
|  | A4 | $0.51$ | $0.35$ | $0.57$ | $0.4771$ | $0.182$ |  | A4 | $0.50$ | $0.29$ | $0.44$ | $0.4109$ | $0.212$ |
| Mistral Nemo | A1 | $0.52$ | $0.32$ | $0.56$ | $0.4663$ | $0.171$ | Qwen 3 Next80b | A1 | $0.31$ | $0.43$ | $0.44$ | $0.3914$ | $0.133$ |
|  | A2 | $0.67$ | $0.32$ | $0.40$ | $0.4600$ | $0.179$ |  | A2 | $0.24$ | $0.43$ | $0.43$ | $0.3694$ | $0.175$ |
|  | A3 | $0.59$ | $0.32$ | $0.54$ | $0.4829$ | $0.231$ |  | A3 | $0.26$ | $0.49$ | $0.45$ | $0.4012$ | $0.140$ |
|  | A4 | $0.61$ | $0.28$ | $0.47$ | $0.4527$ | $0.219$ |  | A4 | $0.36$ | $0.40$ | $0.61$ | $0.4573$ | $0.122$ |
| Gemma 4 26b | A1 | $0.11$ | $0.48$ | $0.46$ | $0.3516$ | $0.023$ | Grok 4.1 Fast | A1 | $0.19$ | $0.32$ | $0.46$ | $0.3214$ | $0.097$ |
|  | A2 | $0.23$ | $0.46$ | $0.36$ | $0.3493$ | $0.063$ |  | A2 | $0.12$ | $0.31$ | $0.44$ | $0.2891$ | $0.142$ |
|  | A3 | $0.28$ | $0.42$ | $0.42$ | $0.3752$ | $0.153$ |  | A3 | $0.33$ | $0.31$ | $0.58$ | $0.4074$ | $0.024$ |
|  | A4 | $0.31$ | $0.31$ | $0.54$ | $0.3874$ | $0.245$ |  | A4 | $0.38$ | $0.27$ | $0.41$ | $0.3524$ | $0.130$ |
| Mixed Models | A1 | $0.01$ | $0.36$ | $0.43$ | $0.2706$ | $0.298$ | Mixed Models | A3 | $0.20$ | $0.39$ | $0.40$ | $0.3293$ | $0.272$ |
|  | A2 | $0.19$ | $0.40$ | $0.41$ | $0.3331$ | $0.287$ |  | A4 | $0.28$ | $0.39$ | $0.46$ | $0.3740$ | $0.247$ |

We evaluate the fidelity of LLM agents organizing
results around three questions: how well agents reach the
same inferential conclusions as humans (RQ1), how well
their effect sizes match (RQ2), and how agent design
choices shape the alignment (RQ3). Comprehensive
results see Appendix [F.4](https://arxiv.org/html/2602.00685v2#A6.SS4 "F.4 Hypothesis Testing Details ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

RQ1: Inferential alignment.
  
Can LLMs replicate the inferential conclusions of social science?

In Table [1](https://arxiv.org/html/2602.00685v2#S5.T1 "Table 1 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"), overall replication performance remains unsatisfactory across all evaluated models. Beyond this general limitation, the two metrics *diverge*: the agent that best recovers human inferential conclusions is not the agent that best recovers human effect magnitudes. Gemini 3 Flash (A3) attains the highest alignment in the suite (PAS $0.5314$) at only moderate consistency (ECS $0.143$), indicating a model that reaches the right conclusion about whether an effect exists while systematically exaggerating or dampening its size. GPT 5 Nano (A1) shows the opposite profile: the second-highest consistency in the suite (ECS $0.253$) at one of the lowest alignments (PAS $0.3594$), indicating effect magnitudes that track the human pattern without accumulating enough evidence to reproduce the human significance conclusion. Neither profile dominates the other, and the two orderings are largely unrelated—agents are not arranged along a single axis of replication quality. We trace this divergence to the $\rho\cdot C\_{b}$ decomposition of ECS below (Figure [4](https://arxiv.org/html/2602.00685v2#S5.F4 "Figure 4 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")): inferential alignment and magnitude alignment load on different components, so improving one does not automatically improve the other.

![Refer to caption](https://arxiv.org/html/2602.00685v2/results-figure/fig1_violins_1plus7_pvalue_A4.png)


Figure 2: Distribution of $p$-values across human and agents (A4 context). The blue dashed line marks the standard statistical significance threshold ($p=0.05$). The human data (far left) consistently yields highly significant results, with almost all probability mass tightly clustered near $p\approx 0$. In contrast, agent simulations fail to consistently reproduce these effects, showing a much wider spread of $p$-values with a substantial portion falling into the non-significant range ($p>0.05$).

To understand the mechanics of these scores, we examine the distributional properties of the best-performing models. Figure [2](https://arxiv.org/html/2602.00685v2#S5.F2 "Figure 2 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") visualizes the $p$-value distributions underlying these scores. While human studies show a sharp peak at significance ($p<0.05$), agent runs are dispersed, with substantial mass leaking into the non-significant range. To understand the mechanism behind this weak $p$-value pattern, we examine the PAS distribution at the hypothesis test level (Figure [3](https://arxiv.org/html/2602.00685v2#S5.F3 "Figure 3 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"), Appendix [F.3](https://arxiv.org/html/2602.00685v2#A6.SS3 "F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). We find a bimodal pattern—agents either closely replicate a human effect or miss it almost entirely—rather than a uniformly mediocre performance across hypothesis tests.

(a) Effect-size correlation.

![Refer to caption](https://arxiv.org/html/2602.00685v2/results-figure/effect-dist.png)

(b) Test-level PAS distributions.

![Refer to caption](https://arxiv.org/html/2602.00685v2/results-figure/fig_test_level_violin_horizontal.png)

Figure 3: Distributional analysis of simulation fidelity. (a) Effect-size correspondence for Claude Haiku 4.5 A2 vs. human. The gray diagonal marks perfect replication ($y{=}x$); the dashed line is the linear regression. Points are colored by significance (significant, $p<0.05$; not significant) and sized by replication power. Marginal densities show agent effect sizes are flatter and wider than human ones. (b) Test-level PAS distributions. The human distribution (orange) is a baseline reference, showing that the selected tasks are robust in human populations. Agent distributions are bimodal—peaking near $0$ and $1$ with little intermediate mass—indicating agents either closely replicate a human effect or miss it almost entirely.

RQ2: Effect-size alignment and where it breaks.
  
Do agent effect-size magnitudes match human ones, and which part of the metric is the bottleneck?

ECS scores in Table [1](https://arxiv.org/html/2602.00685v2#S5.T1 "Table 1 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") are uniformly low—the best agent reaches only $0.265$ (Claude Haiku 4.5, A2). Because ECS is bounded below $1$ by sampling noise in the human ground truth itself, this number is only interpretable against a ceiling. We therefore estimate what an idealized human replicator—one that matches the population effect exactly—would score under the same noise structure, by drawing paired replicates from each published effect’s sampling distribution at the original sample size: this yields $\overline{\text{ECS}}\_{\text{human}}\approx 0.928$ ($\rho\approx 0.932$, $C\_{b}\approx 0.996$; Appendix [F.3](https://arxiv.org/html/2602.00685v2#A6.SS3 "F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). The best agent thus attains roughly $29\%$ of the human ceiling, so the shortfall is a genuine gap rather than an unattainable target. The corresponding PAS ceiling is close to $1$: our filter admits only hypotheses with strong, independently replicated effects, so human evidence concentrates near $\pi\_{h}\approx 1$ (orange reference in Figure [3](https://arxiv.org/html/2602.00685v2#S5.F3 "Figure 3 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")), and the ambiguous case in which PAS hands an agent a free $0.5$ is rare by construction. Figure [3](https://arxiv.org/html/2602.00685v2#S5.F3 "Figure 3 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") examines effect-size alignment in detail for the leaderboard best agent. In human-to-human replications, significant effects cluster along the diagonal [Open Science Collaboration (2015)](https://arxiv.org/html/2602.00685v2#bib.bib54); agent simulations, by contrast, show a more chaotic pattern: despite an overall dampening trend (regression slope $a=0.526<1$), the low correlation ($r=0.313$) indicates poor precision. The marginal distributions further show that human effect sizes are concentrated, whereas agent effect sizes are flatter and wider, confirming that agents tend to produce more extreme effects.

To localize the gap, we use the natural decomposition $\text{ECS}=\rho\cdot C\_{b}$: $\rho$ is the cross-finding pattern correlation between agent and human effect sizes—intuitively, does the agent get the *pattern* right (avoiding findings where humans show a large effect but the agent shows a small one, and vice versa)? $C\_{b}$ is the magnitude calibration factor—intuitively, does the agent get the *overall scale* right (effects centered, say, around $d\approx 1$ rather than blown up to $d\approx 10$)? A perfect replicator scores $\rho=C\_{b}=1$.

Figure [4](https://arxiv.org/html/2602.00685v2#S5.F4 "Figure 4 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")(a) plots every agent on the $(\rho,C\_{b})$ plane: every agent has $\rho\leq 0.31$, while $C\_{b}$ ranges up to $1.00$. The leaderboard best, Claude Haiku 4.5 (A2), already reaches a near-saturated $C\_{b}=0.90$ yet only $\rho=0.29$; across all agents, ECS correlates more tightly with $\rho$ ($r=+0.73$, Figure [4](https://arxiv.org/html/2602.00685v2#S5.F4 "Figure 4 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")(b)) than with $C\_{b}$ ($r=+0.53$, Figure [4](https://arxiv.org/html/2602.00685v2#S5.F4 "Figure 4 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")(c)). Pattern, not scale, is the bottleneck: agents have already learned roughly the right magnitude of human effect sizes, but cannot reliably tell which findings should be larger than which. Concretely, $\rho$ asks whether the effects that are strong in humans are also the effects that are strong in agents; a value of at most $0.31$ means they largely are not. An agent can replicate several effects individually and still fail to order them—and that ordering is what a practitioner relies on when using simulated participants to decide which of several manipulations to pursue. This is precisely the failure mode PAS cannot see and ECS is designed to expose.

Two checks confirm that the low $\rho$ is not a measurement artifact. Recomputing ECS separately within each test family ($t$, $\chi^{2}$, $F$, correlation), with no cross-family conversion at all, leaves the values in a narrow $0.11$–$0.16$ band; and dropping each study in turn and recomputing leaves the global ECS within $0.160$–$0.195$, so no single study drives the score (Appendix [F.3](https://arxiv.org/html/2602.00685v2#A6.SS3.SSS0.Px3 "Robustness to Effect-Size Heterogeneity. ‣ F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

![Refer to caption](https://arxiv.org/html/2602.00685v2/results-figure/ecs_decomposition_C.png)


Figure 4: ECS decomposition into pattern correlation $\rho$ and magnitude calibration $C\_{b}$.
(a) Each point is one agent plotted in the $(\rho,C\_{b})$ plane; gray contours are ECS isolines. Agents cluster in $\rho\leq 0.31$, $C\_{b}\in[0.35,1.00]$. The leaderboard best (Claude Haiku 4.5 A2) and worst (Grok 4.1 Fast A3) are highlighted.
(b, c) ECS plotted against $\rho$ and $C\_{b}$ across all agents. ECS aligns more tightly with $\rho$ ($r=+0.73$) than with $C\_{b}$ ($r=+0.53$), indicating that gains in pattern correlation translate more directly into ECS gains than improvements in magnitude calibration.

RQ3: Does agent design close the gap?
  
How do design choices—context richness, temperature, and ensemble—affect simulation fidelity?

Context helps, but not monotonically. Adding demographic priors (A3) improves PAS over the blank baseline (A1) for $9/10$ models. Because the paired $t$-test over 10 models sits close to the threshold ($p=0.049$), we report convergent evidence rather than resting on a single test: the Wilcoxon signed-rank test agrees ($p=0.037$), and $9$ of $10$ models move in the same direction, so the conclusion depends neither on a distributional assumption nor on an individual influential model. Layering a richer backstory on top (A4) does not extend the trend: the global A4-vs-A3 difference fails to reach significance (paired $t$-test, $p=0.82$), and per-model results bifurcate—A4 lifts models like Qwen3 Next 80b ($\Delta\text{PAS}=+0.056$) and Claude Haiku 4.5 ($+0.053$) but drags down Grok 4.1 Fast ($-0.055$) and Gemini 3 Flash ($-0.054$) (per-model contrasts in Appendix [F.4](https://arxiv.org/html/2602.00685v2#A6.SS4 "F.4 Hypothesis Testing Details ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). This suggests richer context
helps up to a point, with a threshold that is model-specific rather
than universal.

Table 2: Temperature Ablation (Gemma 4 26b). PAS / ECS across temperatures. Best in teal, worst in salmon. Full per-domain results in Appendix [F.6](https://arxiv.org/html/2602.00685v2#A6.SS6 "F.6 Full Temperature Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

|  | PAS | | | | ECS | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $T$ | A1 | A2 | A3 | A4 | A1 | A2 | A3 | A4 |
| 0.1 | .319 | .324 | .427 | .471 | .226 | .100 | .184 | .132 |
| 0.3 | .336 | .381 | .395 | .506 | .183 | .251 | .189 | .068 |
| 0.5 | .346 | .362 | .390 | .488 | .214 | .102 | .204 | -.009 |
| 0.7 | .311 | .330 | .323 | .431 | .147 | .188 | .172 | .072 |
| 1.0 | .321 | .353 | .395 | .426 | .033 | .071 | .153 | .245 |

Temperature has no systematic effect on alignment. Table [2](https://arxiv.org/html/2602.00685v2#S5.T2 "Table 2 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") shows no monotone effect of temperature on PAS: within A4 alone, PAS swings non-monotonically across $T\in\{0.1,0.3,0.5,0.7,1.0\}$ ($0.43$–$0.51$), and the best temperature shifts across specifications ($T{=}0.3$ for A4, $T{=}0.5$ for A1). Decoding variance therefore behaves more like noise than a tunable knob; the structural gap to human behavior is not something we can sample our way out of (full domain-decomposed table in Appendix [F.6](https://arxiv.org/html/2602.00685v2#A6.SS6 "F.6 Full Temperature Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

Naive model mixing does not improve alignment. The Mixed-Models baseline (PAS $0.27$–$0.37$) is significantly below the single-model median (H4 in Appendix [F.4](https://arxiv.org/html/2602.00685v2#A6.SS4 "F.4 Hypothesis Testing Details ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"), $p=0.009$). Mixing distinct response distributions adds within-condition noise without adding between-condition signal.

Model scale does not predict better alignment. Flagship models do not dominate smaller open-weight ones
(Table [1](https://arxiv.org/html/2602.00685v2#S5.T1 "Table 1 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")), and the largest swings
come from changing the specification rather than the base
model, suggesting that agent specification contributes
more to alignment than model scale.

Discussion.
Memorization. Pre-training exposure to these classic paradigms does not threaten our conclusions. Memorizing a conclusion is fundamentally different from reproducing a behavioral distribution across hundreds of independent trials, and memorization would inflate scores—yet mean single-model PAS is $0.397$, responses polarize bimodally, and the best-known strategic paradigms are the worst replicated ($0.343$ vs. $0.464$ for social psychology). Paraphrased and anonymized task variants move PAS by at most $5.2$ pp, and a model’s ability to identify a study is dissociated from its ability to simulate it (Appendix [F.5](https://arxiv.org/html/2602.00685v2#A6.SS5 "F.5 Contamination and Paradigm-Recognition Controls ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

Why agents fail. Since models overwhelmingly recognize these studies yet still fail to reproduce them, the failure is generative rather than a knowledge gap: agent effect sizes are flatter, wider, and more extreme than human ones (Figure [3](https://arxiv.org/html/2602.00685v2#S5.F3 "Figure 3 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")), consistent with agents producing the responses of the participant they expect rather than the heterogeneous distribution a human population produces.

Limitations.
Our initial 12 hypotheses come from classic experiments (1946–2007) conducted on WEIRD (Western, educated, industrialized, rich, democratic) samples [Ross et al. (1977)](https://arxiv.org/html/2602.00685v2#bib.bib37); [Jacowitz and Kahneman (1995)](https://arxiv.org/html/2602.00685v2#bib.bib38); [Tversky and Kahneman (1981)](https://arxiv.org/html/2602.00685v2#bib.bib39); [Kahneman and Tversky (1972)](https://arxiv.org/html/2602.00685v2#bib.bib40); [Knobe (2003)](https://arxiv.org/html/2602.00685v2#bib.bib45); [Asch (1946)](https://arxiv.org/html/2602.00685v2#bib.bib46); [Prentice and Miller (1993)](https://arxiv.org/html/2602.00685v2#bib.bib47); [Nagel (1995)](https://arxiv.org/html/2602.00685v2#bib.bib41); [Shafir and Tversky (1992)](https://arxiv.org/html/2602.00685v2#bib.bib42); [Forsythe et al. (1994)](https://arxiv.org/html/2602.00685v2#bib.bib43); [Berg et al. (1995)](https://arxiv.org/html/2602.00685v2#bib.bib44); [Gagnon and Bourhis (1996)](https://arxiv.org/html/2602.00685v2#bib.bib57). Researchers using the initial 12 hypotheses to test human-likeness should interpret the scores with this scope in mind, particularly when evaluating agents meant to represent non-WEIRD or contemporary cohorts. We expect the contributions from more recent cross-cultural studies to broaden this coverage over time (Appendix [G](https://arxiv.org/html/2602.00685v2#A7 "Appendix G Broader Impacts ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

## 6 Conclusion

We propose validated behavioral hypotheses as a principled
lens for evaluating human-likeness in LLM-based agents, and
operationalize it through HumanStudy-Bench—an
open platform that reconstructs published human-subject
experiments end-to-end and administers the test to
configurable agents. Our results reveal that current LLM
agents fall short of human-likeness in specific, diagnostic
ways.
We hope HumanStudy-Bench can serve as a community infrastructure for objective, decomposable, and scalable evaluation of AI social simulations.

## References

- Aher et al. (2023)
  G. V. Aher, R. I. Arriaga, and A. T. Kalai
  Using large language models to simulate multiple humans and replicate human subject studies.
  In International conference on machine learning,
  pp. 337–371.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Anthis et al. (2025)
  J. R. Anthis, R. Liu, S. M. Richardson, A. C. Kozlowski, B. Koch, E. Brynjolfsson, J. Evans, and M. S. Bernstein
  Position: LLM social simulations are a promising research method.
  In Forty-second International Conference on Machine Learning Position Paper Track,
  External Links: [Link](https://openreview.net/forum?id=cRBg1dtj7o)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Argyle et al. (2023)
  L. P. Argyle, E. C. Busby, N. Fulda, J. R. Gubler, C. Rytting, and D. Wingate
  Out of one, many: using language models to simulate human samples.
  Political Analysis 31 (3), pp. 337–351.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Asch (1946)
  S. E. Asch
  Forming impressions of personality.
  Journal of Abnormal and Social Psychology 41 (3), pp. 258–290.
  Cited by: [§E.10](https://arxiv.org/html/2602.00685v2#A5.SS10.p1.1 "E.10 Study 10: Forming Impressions of Personality ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.11.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Bail (2024)
  C. A. Bail
  Can generative ai improve social science?.
  Proceedings of the National Academy of Sciences 121 (21), pp. e2314021121.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.2314021121),
  [Link](https://www.pnas.org/doi/abs/10.1073/pnas.2314021121)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p2.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Berg et al. (1995)
  J. E. Berg, J. Dickhaut, and K. McCabe
  Trust, reciprocity, and social history.
  Games and Economic Behavior 10, pp. 122–142.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:144827131)
  Cited by: [§E.8](https://arxiv.org/html/2602.00685v2#A5.SS8.p1.1 "E.8 Study 8: Trust and Reciprocity Game ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.9.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 8](https://arxiv.org/html/2602.00685v2#A6.T8.4.3.1 "In Paraphrase and anonymization. ‣ F.5 Contamination and Paradigm-Recognition Controls ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Binz et al. (2025)
  M. Binz, E. Akata, M. Bethge, F. Brändle, F. Callaway, J. Coda-Forno, P. Dayan, C. Demircan, M. K. Eckstein, N. Éltető, T. L. Griffiths, S. Haridi, A. K. Jagadish, L. Ji-An, A. Kipnis, S. Kumar, T. Ludwig, M. Mathony, M. Mattar, A. Modirshanechi, S. S. Nath, J. C. Peterson, M. Rmus, E. M. Russek, T. Saanum, J. A. Schubert, L. M. Schulze Buschoff, N. Singhi, X. Sui, M. Thalmann, F. J. Theis, V. Truong, V. Udandarao, K. Voudouris, R. Wilson, K. Witte, S. Wu, D. U. Wulff, H. Xiong, and E. Schulz
  A foundation model to predict and capture human cognition.
  Nature 644, pp. 1002–1009.
  External Links: [Document](https://dx.doi.org/10.1038/s41586-025-09215-4),
  [Link](https://doi.org/10.1038/s41586-025-09215-4)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Bisbee et al. (2024)
  J. Bisbee, J. D. Clinton, C. Dorff, B. Kenkel, and J. M. Larson
  Synthetic replacements for human survey data? the perils of large language models.
  Political Analysis 32 (4), pp. 401–416.
  External Links: [Document](https://dx.doi.org/10.1017/pan.2024.5)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Bishop and Nasrabadi (2006)
  C. M. Bishop and N. M. Nasrabadi
  Pattern recognition and machine learning.
  Vol. 4, Springer.
  Cited by: [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.p4.1 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.p4.2 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Campbell and Fiske (1959)
  D. T. Campbell and D. W. Fiske
  Convergent and discriminant validation by the multitrait-multimethod matrix..
  Psychological bulletin 56 (2), pp. 81.
  Cited by: [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.SSS0.Px1.p3.1 "Aggregation. ‣ 3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Chen et al. (2024)
  W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, Y. Qin, X. Cong, R. Xie, Z. Liu, M. Sun, and J. Zhou
  AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=EHg5GDnyq1)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Dillion et al. (2023)
  D. Dillion, N. Tandon, Y. Gu, and K. Gray
  Can ai language models replace human participants?.
  Trends in Cognitive Sciences 27 (7), pp. 597–600.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Dominguez-Olmedo et al. (2024)
  R. Dominguez-Olmedo, M. Hardt, and C. Mendler-Dünner
  Questioning the survey responses of large language models.
  In The Thirty-eighth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=Oo7dlLgqQX)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Fisher (1921)
  R. A. Fisher
  On the" probable error" of a coefficient of correlation deduced from a small sample.
  Metron 1, pp. 3–32.
  Cited by: [item 1](https://arxiv.org/html/2602.00685v2#A2.I3.i1.p1.1 "In B.3 Aggregation Implementation ‣ Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Forsythe et al. (1994)
  R. Forsythe, J. L. Horowitz, N. E. Savin, and M. Sefton
  Fairness in simple bargaining experiments.
  Games and Economic Behavior 6, pp. 347–369.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:154965582)
  Cited by: [§E.7](https://arxiv.org/html/2602.00685v2#A5.SS7.p1.1 "E.7 Study 7: Ultimatum and Dictator Games ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.8.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Gagnon and Bourhis (1996)
  A. Gagnon and R. Y. Bourhis
  Discrimination in the minimal group paradigm: social identity or self-interest?.
  Personality and Social Psychology Bulletin 22 (12), pp. 1289–1301.
  Cited by: [§E.11](https://arxiv.org/html/2602.00685v2#A5.SS11.p1.1 "E.11 Study 11: Social Categorization ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.12.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Gao et al. (2024)
  C. Gao, X. Lan, N. Li, Y. Yuan, J. Ding, Z. Zhou, F. Xu, and Y. Li
  Large language models empowered agent-based modeling and simulation: a survey and perspectives.
  Humanities and Social Sciences Communications 11 (1), pp. 1259.
  External Links: [Document](https://dx.doi.org/10.1057/s41599-024-03611-3),
  [Link](https://www.nature.com/articles/s41599-024-03611-3)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Gao et al. (2025)
  Y. Gao, D. Lee, G. Burtch, and S. Fazelpour
  Take caution in using llms as human surrogates.
  Proceedings of the National Academy of Sciences 122 (24), pp. e2501660122.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.2501660122),
  [Link](https://www.pnas.org/doi/abs/10.1073/pnas.2501660122),
  https://www.pnas.org/doi/pdf/10.1073/pnas.2501660122
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Gwet (2014)
  K. L. Gwet
  Handbook of inter-rater reliability: the definitive guide to measuring the extent of agreement among raters.
   Advanced Analytics, LLC.
  Cited by: [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.p3.2 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Henrich et al. (2001)
  J. Henrich, R. Boyd, S. Bowles, C. Camerer, E. Fehr, H. Gintis, and R. McElreath
  In search of homo economicus: behavioral experiments in 15 small-scale societies.
  American economic review 91 (2), pp. 73–78.
  Cited by: [§G.2](https://arxiv.org/html/2602.00685v2#A7.SS2.p1.1 "G.2 Ethical Considerations ‣ Appendix G Broader Impacts ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Hofmann et al. (2024)
  V. Hofmann, P. R. Kalluri, D. Jurafsky, and S. King
  AI generates covertly racist decisions about people based on their dialect.
  Nature 633 (8028), pp. 147–154.
  External Links: [Document](https://dx.doi.org/10.1038/s41586-024-07856-5),
  [Link](https://doi.org/10.1038/s41586-024-07856-5)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Horton (2023)
  J. J. Horton
  Large language models as simulated economic agents: what can we learn from homo silicus?.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Hu et al. (2025)
  T. Hu, J. Baumann, L. Lupo, N. Collier, D. Hovy, and P. Röttger
  SimBench: benchmarking the ability of large language models to simulate human behaviors.
  In ACL 2025 Student Research Workshop,
  External Links: [Link](https://openreview.net/forum?id=4E3inkANXm)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p2.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Huang et al. (2026)
  J. Huang, C. Chen, S. Lai, W. Wang, M. R. Kaufman, and M. Dredze
  Probing multimodal large language models on cognitive biases in chinese short-video misinformation.
  External Links: 2601.06600,
  [Link](https://arxiv.org/abs/2601.06600)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Hullman et al. (2026)
  J. Hullman, D. Broska, H. Sun, and A. Shaw
  This human study did not involve human subjects: validating llm simulations as behavioral evidence.
  arXiv preprint arXiv:2602.15785.
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Hwang et al. (2025)
  A. H. Hwang, M. S. Bernstein, S. S. Sundar, R. Zhang, M. Horta Ribeiro, Y. Lu, S. Chang, T. Wu, A. Yang, D. Williams, J. S. Park, K. Ognyanova, Z. Xiao, A. Shaw, and D. A. Shamma
  Human subjects research in the age of generative ai: opportunities and challenges of applying llm-simulated data to hci studies.
  CHI EA ’25, New York, NY, USA.
  External Links: ISBN 9798400713958,
  [Link](https://doi.org/10.1145/3706599.3716299),
  [Document](https://dx.doi.org/10.1145/3706599.3716299)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Jacowitz and Kahneman (1995)
  K. E. Jacowitz and D. Kahneman
  Measures of anchoring in estimation tasks.
  Personality and Social Psychology Bulletin 21, pp. 1161 – 1166.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:145430539)
  Cited by: [§E.2](https://arxiv.org/html/2602.00685v2#A5.SS2.p1.1 "E.2 Study 2: Anchoring Effect ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.3.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Jaynes (2003)
  E. T. Jaynes
  Probability theory: the logic of science.
   Cambridge university press.
  Cited by: [§A.3](https://arxiv.org/html/2602.00685v2#A1.SS3.SSS0.Px1.p2.1 "Perspective I: The Bayesian View (Minimum Bayes Risk). ‣ A.3 Foundation of Probability Alignment Score ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.p4.1 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.p4.2 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Jiang et al. (2023)
  G. Jiang, M. Xu, S. Zhu, W. Han, C. Zhang, and Y. Zhu
  Evaluating and inducing personality in pre-trained language models.
  In Thirty-seventh Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=I9xE1Jsjfx)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Jiang et al. (2024)
  H. Jiang, X. Zhang, X. Cao, C. Breazeal, D. Roy, and J. Kabbara
  PersonaLLM: investigating the ability of large language models to express personality traits.
  In Findings of the Association for Computational Linguistics: NAACL 2024, K. Duh, H. Gomez, and S. Bethard (Eds.),
  Mexico City, Mexico, pp. 3605–3627.
  External Links: [Link](https://aclanthology.org/2024.findings-naacl.229/),
  [Document](https://dx.doi.org/10.18653/v1/2024.findings-naacl.229)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Kahneman and Tversky (1972)
  D. Kahneman and A. Tversky
  Subjective probability: a judgment of representativeness.
  Cognitive Psychology 3, pp. 430–454.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:1022887)
  Cited by: [§E.4](https://arxiv.org/html/2602.00685v2#A5.SS4.p1.1 "E.4 Study 4: Representativeness Heuristic ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.5.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Knobe (2003)
  J. Knobe
  Intentional action and side effects in ordinary language.
  Analysis 63, pp. .
  External Links: [Document](https://dx.doi.org/10.1111/1467-8284.00419)
  Cited by: [§E.9](https://arxiv.org/html/2602.00685v2#A5.SS9.p1.1 "E.9 Study 9: Intentional Action and Side- Effects ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.10.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 8](https://arxiv.org/html/2602.00685v2#A6.T8.4.2.1 "In Paraphrase and anonymization. ‣ F.5 Contamination and Paradigm-Recognition Controls ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§G.2](https://arxiv.org/html/2602.00685v2#A7.SS2.p1.1 "G.2 Ethical Considerations ‣ Appendix G Broader Impacts ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Kolluri et al. (2025)
  A. Kolluri, S. Wu, J. S. Park, and M. S. Bernstein
  Finetuning llms for human behavior prediction in social science experiments.
  External Links: 2509.05830,
  [Link](https://arxiv.org/abs/2509.05830)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Lawrence and Lin (1989)
  I. Lawrence and K. Lin
  A concordance correlation coefficient to evaluate reproducibility.
  Biometrics, pp. 255–268.
  Cited by: [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.SSS0.Px1.p3.1 "Aggregation. ‣ 3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Li et al. (2024)
  P. Li, N. Castelo, Z. Katona, and M. Sarvary
  Frontiers: determining the validity of large language models for automated perceptual analysis.
  Marketing Science 43 (2), pp. 254–266.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Liu et al. (2024a)
  H. Liu, Z. Li, D. L. W. Hall, P. Liang, and T. Ma
  Sophia: a scalable stochastic second-order optimizer for language model pre-training.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=3xHDeA8Noi)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Liu et al. (2024b)
  R. Liu, R. Yang, C. Jia, G. Zhang, D. Yang, and S. Vosoughi
  Training socially aligned language models on simulated social interactions.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=NddKiWtdUm)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Liu et al. (2026)
  X. Liu, H. Shang, and H. Jin
  CoBRA: programming cognitive bias in social agents using classic social science experiments.
  External Links: 2509.13588,
  [Link](https://arxiv.org/abs/2509.13588)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Liu et al. (2025)
  X. Liu, J. ZHANG, H. Shang, S. Guo, Y. Chengxu, and Q. Zhu
  Exploring prosocial irrationality for LLM agents: a social cognition view.
  In The Thirteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=u8VOQVzduP)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p2.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Loya et al. (2023)
  M. Loya, D. Sinha, and R. Futrell
  Exploring the sensitivity of LLMs’ decision-making capabilities: insights from prompt variations and hyperparameters.
  In Findings of the Association for Computational Linguistics: EMNLP 2023, H. Bouamor, J. Pino, and K. Bali (Eds.),
  Singapore, pp. 3711–3716.
  External Links: [Link](https://aclanthology.org/2023.findings-emnlp.241/),
  [Document](https://dx.doi.org/10.18653/v1/2023.findings-emnlp.241)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Manning et al. (2024)
  B. S. Manning, K. Zhu, and J. J. Horton
  Automated social science: language models as scientist and subjects.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Miotto et al. (2022)
  M. Miotto, N. Rossberg, and B. Kleinberg
  Who is GPT-3? an exploration of personality, values and demographics.
  In Proceedings of the Fifth Workshop on Natural Language Processing and Computational Social Science (NLP+CSS), D. Bamman, D. Hovy, D. Jurgens, K. Keith, B. O’Connor, and S. Volkova (Eds.),
  Abu Dhabi, UAE, pp. 218–227.
  External Links: [Link](https://aclanthology.org/2022.nlpcss-1.24/),
  [Document](https://dx.doi.org/10.18653/v1/2022.nlpcss-1.24)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Nagel (1995)
  R. Nagel
  Unraveling in guessing games: an experimental study.
  The American economic review 85 (5), pp. 1313–1326.
  Cited by: [§E.5](https://arxiv.org/html/2602.00685v2#A5.SS5.p1.1 "E.5 Study 5: p-Beauty Contest Game ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.6.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Norhashim and Hahn (2025)
  H. Norhashim and J. Hahn
  Measuring human-ai value alignment in large language models.
  In Proceedings of the 2024 AAAI/ACM Conference on AI, Ethics, and Society,
  pp. 1063–1073.
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p2.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Open Science Collaboration (2015)
  Open Science Collaboration
  Estimating the reproducibility of psychological science.
  Science 349 (6251), pp. aac4716.
  Cited by: [§F.3](https://arxiv.org/html/2602.00685v2#A6.SS3.SSS0.Px3.p2.1 "Robustness to Effect-Size Heterogeneity. ‣ F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p6.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Park et al. (2023)
  J. S. Park, J. C. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  External Links: 2304.03442,
  [Link](https://arxiv.org/abs/2304.03442)
  Cited by: [§D.4](https://arxiv.org/html/2602.00685v2#A4.SS4.p1.1 "D.4 Contextualized Backstory (A4) ‣ Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Park et al. (2024)
  J. S. Park, C. Q. Zou, A. Shaw, B. M. Hill, C. Cai, M. R. Morris, R. Willer, P. Liang, and M. S. Bernstein
  Generative agent simulations of 1,000 people.
  External Links: 2411.10109,
  [Link](https://arxiv.org/abs/2411.10109)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p1.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Prentice and Miller (1993)
  D. A. Prentice and D. T. Miller
  Pluralistic ignorance and alcohol use on campus: some consequences of misperceiving the social norm..
  Journal of personality and social psychology 64 2, pp. 243–56.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:24004422)
  Cited by: [§E.12](https://arxiv.org/html/2602.00685v2#A5.SS12.p1.1 "E.12 Study 12: Pluralistic Ignorance ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.13.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Ross et al. (1977)
  L. D. Ross, D. Greene, and P. House
  The “false consensus effect”: an egocentric bias in social perception and attribution processes.
  Journal of Experimental Social Psychology 13, pp. 279–301.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:9032175)
  Cited by: [§E.1](https://arxiv.org/html/2602.00685v2#A5.SS1.p1.1 "E.1 Study 1: False Consensus Effect ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.2.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Rouder et al. (2012)
  J. N. Rouder, R. D. Morey, P. L. Speckman, and J. M. Province
  Default bayes factors for anova designs.
  Journal of mathematical psychology 56 (5), pp. 356–374.
  Cited by: [§C.1](https://arxiv.org/html/2602.00685v2#A3.SS1.p1.1 "C.1 Evidence Transformation (Priors) ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Rouder et al. (2009)
  J. N. Rouder, P. L. Speckman, D. Sun, R. D. Morey, and G. Iverson
  Bayesian t tests for accepting and rejecting the null hypothesis.
  Psychonomic bulletin & review 16 (2), pp. 225–237.
  Cited by: [§C.1](https://arxiv.org/html/2602.00685v2#A3.SS1.p1.1 "C.1 Evidence Transformation (Priors) ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§3.3](https://arxiv.org/html/2602.00685v2#S3.SS3.p5.1 "3.3 Measuring Agent–Human Alignment through Validated Hypotheses ‣ 3 HumanStudy-Bench ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Santurkar et al. (2023)
  S. Santurkar, E. Durmus, F. Ladhak, C. Lee, P. Liang, and T. Hashimoto
  Whose opinions do language models reflect?.
  In Proceedings of the 40th International Conference on Machine Learning, A. Krause, E. Brunskill, K. Cho, B. Engelhardt, S. Sabato, and J. Scarlett (Eds.),
  Proceedings of Machine Learning Research, Vol. 202, pp. 29971–30004.
  External Links: [Link](https://proceedings.mlr.press/v202/santurkar23a.html)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Sclar et al. (2024)
  M. Sclar, Y. Choi, Y. Tsvetkov, and A. Suhr
  Quantifying language models’ sensitivity to spurious features in prompt design or: how i learned to start worrying about prompt formatting.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=RIu5lyNXjT)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Serapio-García et al. (2025)
  G. Serapio-García, M. Safdari, C. Crepy, L. Sun, S. Fitz, P. Romero, M. Abdulhai, A. Faust, and M. Matarić
  A psychometric framework for evaluating and shaping personality traits in large language models.
  Nature Machine Intelligence 7, pp. 1954–1968.
  External Links: [Document](https://dx.doi.org/10.1038/s42256-025-01115-6),
  [Link](https://www.nature.com/articles/s42256-025-01115-6)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Shafir and Tversky (1992)
  E. Shafir and A. Tversky
  Thinking through uncertainty: nonconsequential reasoning and choice.
  Cognitive Psychology 24, pp. 449–474.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:29570235)
  Cited by: [§E.6](https://arxiv.org/html/2602.00685v2#A5.SS6.p1.1 "E.6 Study 6: Prisoner’s Dilemma ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.7.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Suh et al. (2025)
  J. Suh, S. Moon, and S. Chang
  Rethinking llm human simulation: when a graph is what you need.
  External Links: 2511.02135,
  [Link](https://arxiv.org/abs/2511.02135)
  Cited by: [§2](https://arxiv.org/html/2602.00685v2#S2.p2.1 "2 Background & Related Work ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Tversky and Kahneman (1981)
  A. Tversky and D. Kahneman
  The framing of decisions and the psychology of choice..
  Science 211 4481, pp. 453–8.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:5643902)
  Cited by: [§E.3](https://arxiv.org/html/2602.00685v2#A5.SS3.p1.1 "E.3 Study 3: Framing Effect ‣ Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [Table 4](https://arxiv.org/html/2602.00685v2#A5.T4.2.4.3.1.1 "In Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§4](https://arxiv.org/html/2602.00685v2#S4.p2.1 "4 Experiment Setup ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"),
  [§5](https://arxiv.org/html/2602.00685v2#S5.p17.1 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Wang et al. (2025)
  A. Wang, J. Morgenstern, and J. P. Dickerson
  Large language models that replace human participants can harmfully misportray and flatten identity groups.
  Nature Machine Intelligence 7, pp. 400–411.
  External Links: [Document](https://dx.doi.org/10.1038/s42256-025-00986-z),
  [Link](https://doi.org/10.1038/s42256-025-00986-z)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p1.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").
- Ying et al. (2025)
  L. Ying, K. M. Collins, L. Wong, I. Sucholutsky, R. Liu, A. Weller, T. Shu, T. L. Griffiths, and J. B. Tenenbaum
  On benchmarking human-like intelligence in machines.
  External Links: 2502.20502,
  [Link](https://arxiv.org/abs/2502.20502)
  Cited by: [§1](https://arxiv.org/html/2602.00685v2#S1.p2.1 "1 Introduction ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

## Contents

A. Metrics Theoretical Foundation
:   .[A](https://arxiv.org/html/2602.00685v2#A1 "Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

    - A.1

      Metric Intuition: What Are We Measuring? .[A.1](https://arxiv.org/html/2602.00685v2#A1.SS1 "A.1 Metric Intuition: What Are We Measuring? ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - A.2

      Conditional Independence .[A.2](https://arxiv.org/html/2602.00685v2#A1.SS2 "A.2 Conditional Independence ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - A.3

      Foundation of Probability Alignment Score .[A.3](https://arxiv.org/html/2602.00685v2#A1.SS3 "A.3 Foundation of Probability Alignment Score ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

B. Methodological Rationale and Aggregation
:   .[B](https://arxiv.org/html/2602.00685v2#A2 "Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

    - B.1

      Methodological Rationale .[B.1](https://arxiv.org/html/2602.00685v2#A2.SS1 "B.1 Methodological Rationale ‣ Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - B.2

      Metric Selection Rationale .[B.2](https://arxiv.org/html/2602.00685v2#A2.SS2 "B.2 Metric Selection Rationale ‣ Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - B.3

      Aggregation Implementation .[B.3](https://arxiv.org/html/2602.00685v2#A2.SS3 "B.3 Aggregation Implementation ‣ Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - B.4

      Hierarchical Global Validity .[B.4](https://arxiv.org/html/2602.00685v2#A2.SS4 "B.4 Comparison with Standard Hypothesis Testing ‣ Appendix B Methodological Rationale and Aggregation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

C. Metrics Implementation Details
:   .[C](https://arxiv.org/html/2602.00685v2#A3 "Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

    - C.1

      Evidence Transformation (Priors) .[C.1](https://arxiv.org/html/2602.00685v2#A3.SS1 "C.1 Evidence Transformation (Priors) ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - C.2

      Generalization to Multiple Hypotheses .[C.2](https://arxiv.org/html/2602.00685v2#A3.SS2 "C.2 Generalization to Multiple Hypotheses ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - C.3

      Standardized Effect Size Recovery .[C.3](https://arxiv.org/html/2602.00685v2#A3.SS3 "C.3 Standardized Effect Size Recovery ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

D. Implementation Details for Agent Design Variants
:   .[D](https://arxiv.org/html/2602.00685v2#A4 "Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

    - D.1

      Blank (A1) .[D.1](https://arxiv.org/html/2602.00685v2#A4.SS1 "D.1 Blank (A1) ‣ Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - D.2

      Role-Play (A2) .[D.2](https://arxiv.org/html/2602.00685v2#A4.SS2 "D.2 Role-Play (A2) ‣ Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - D.3

      Demographic (A3) .[D.3](https://arxiv.org/html/2602.00685v2#A4.SS3 "D.3 Demographic (A3) ‣ Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - D.4

      Contextualized Backstory (A4) .[D.4](https://arxiv.org/html/2602.00685v2#A4.SS4 "D.4 Contextualized Backstory (A4) ‣ Appendix D Implementation Details for Agent Design Variants ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

E. Summary of Studies
:   .[E](https://arxiv.org/html/2602.00685v2#A5 "Appendix E Summary of Studies ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

F. Complementary Experimental Results
:   .[F](https://arxiv.org/html/2602.00685v2#A6 "Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

    - F.1

      Model names and OpenRouter identifiers .[F.1](https://arxiv.org/html/2602.00685v2#A6.SS1 "F.1 Model names and OpenRouter identifiers ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - F.2

      Bootstrap Standard Errors: Methodology and Justification .[F.2](https://arxiv.org/html/2602.00685v2#A6.SS2 "F.2 Bootstrap Standard Errors: Methodology and Justification ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - F.3

      Extended Distributional Analysis .[F.3](https://arxiv.org/html/2602.00685v2#A6.SS3 "F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - F.4

      Hypothesis Testing Details .[F.4](https://arxiv.org/html/2602.00685v2#A6.SS4 "F.4 Hypothesis Testing Details ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - F.5

      Contamination and Paradigm-Recognition Controls .[F.5](https://arxiv.org/html/2602.00685v2#A6.SS5 "F.5 Contamination and Paradigm-Recognition Controls ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - F.6

      Full Temperature Ablation .[F.6](https://arxiv.org/html/2602.00685v2#A6.SS6 "F.6 Full Temperature Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")
    - F.7

      Prompt Sensitivity Ablation .[F.7](https://arxiv.org/html/2602.00685v2#A6.SS7 "F.7 Prompt Sensitivity Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

G. Broader Impacts
:   .[G](https://arxiv.org/html/2602.00685v2#A7 "Appendix G Broader Impacts ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")

## Appendix A Metrics Theoretical Foundation

### A.1 Metric Intuition: What Are We Measuring?

A replication study produces two kinds of evidence: a significance decision (does the effect exist?) and an effect size (how large is it?). These two quantities are related but not interchangeable: a large effect can fail to reach significance when the sample is small, and a tiny effect can be highly significant when the sample is massive. Our two metrics map directly onto this distinction.

Probability Alignment Score (PAS) – “The Scientific Replication Rate.”
PAS measures the probability that the Agent and Humans agree on the scientific conclusion—specifically, whether both sides find the effect significant or both find it non-significant. It answers the question: “If I use this Agent to replicate a hypothesis test, will I reach the same significance decision as the human study?” PAS operates at the inferential level: it cares about the significance decision, not the exact numbers that produced it.

Effect Consistency Score (ECS) – “The Data Fidelity.”
ECS measures the concordance of effect sizes between Agent and Human data. It answers a complementary question: “Does the Agent reproduce the same pattern and magnitude of effects as Humans?” ECS operates at the magnitude level: an agent that correctly identifies a “framing effect” but exaggerates it tenfold would score well on PAS but poorly on ECS.

The two metrics reflect complementary aspects of replication fidelity and are most informative when read together. High PAS with low ECS reveals an agent that reaches correct conclusions but with distorted magnitudes (e.g., extreme responses). Low PAS with moderate ECS reveals an agent whose effect sizes partially track human patterns but whose evidence falls short of statistical significance. Neither metric alone captures the full picture; their joint profile characterizes the agent’s simulation capability.

### A.2 Conditional Independence

The PAS derivation in Appendix [A.3](https://arxiv.org/html/2602.00685v2#A1.SS3 "A.3 Foundation of Probability Alignment Score ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") requires one structural assumption. Let $\mathcal{H}$ and $\mathcal{A}$ denote the Human and Agent generative processes. We define the simulation task as estimating a latent truth parameter $\theta\in\{0,1\}$ (where $1$ denotes the presence of an effect/Alternative Hypothesis, and $0$ denotes the Null) given a specific experimental design $\mathcal{E}$ (comprising stimuli, instructions, and conditions).

The core assumption enabling our framework is the Conditional Independence of the observation processes:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(y\_{h},y\_{a}\mid\theta,\mathcal{E})=P(y\_{h}\mid\theta,\mathcal{E})P(y\_{a}\mid\theta,\mathcal{E})$$ |  | (7) |

where $y\_{h}$ and $y\_{a}$ are the observable response data.

Justification: This independence holds because the Agent is not trained on the specific responses of the control group in the study being replicated; it generates behavior based solely on the semantic description of $\mathcal{E}$. Thus, given the ground truth $\theta$, the sampling noise in humans is independent of the stochastic decoding noise in the Agent.

### A.3 Foundation of Probability Alignment Score

We provide two theoretical interpretations of PAS. We begin with the Bayesian view, which directly derives the PAS formula from first principles, and then offer a Frequentist view that characterizes its statistical properties.

##### Perspective I: The Bayesian View (Minimum Bayes Risk).

In the Bayesian ontology, $\theta$ are latent random variables. We seek an estimator $\hat{\mathcal{A}}$ that minimizes the expected error given the data. This perspective shows that PAS is not an ad hoc formula but the unique optimal estimator under standard assumptions.

1. Priors via Maximum Entropy.
To avoid introducing subjective bias, we select priors based on the Principle of Indifference [Jaynes (2003)](https://arxiv.org/html/2602.00685v2#bib.bib51). For a binary state $\theta$, the distribution maximizing Shannon Entropy $H(\theta)$ is the uniform distribution, $P(\theta=1)=P(\theta=0)=0.5$. This establishes the uninformative prior necessary for objective benchmarking.

2. Minimizing Bayes Risk.
We define the loss function as the Squared Error Loss with respect to the true alignment $A^{\*}$: $\mathcal{L}(\hat{\mathcal{A}},A^{\*})=(\hat{\mathcal{A}}-A^{\*})^{2}$.
The optimal estimator that minimizes the Bayes Risk (Expected Posterior Loss) is the conditional expectation (MMSE estimator):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{\mathcal{A}}\_{Bayes}=\arg\min\_{\hat{\mathcal{A}}}E\_{\theta|D}[(\hat{\mathcal{A}}-A^{\*})^{2}]=E[A^{\*}\mid D\_{h},D\_{a}]$$ |  | (8) |

3. Derivation.
Given the conditional independence of Human and Agent generative processes (Appendix [A.2](https://arxiv.org/html/2602.00685v2#A1.SS2 "A.2 Conditional Independence ‣ Appendix A Metrics Theoretical Foundation ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")):

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\hat{\mathcal{A}}\_{Bayes}$ | $\displaystyle=P(\theta\_{h}=\theta\_{a}\mid D\_{h},D\_{a})$ |  | (9) |
|  |  | $\displaystyle=P(\theta\_{h}=1|D\_{h})P(\theta\_{a}=1|D\_{a})+P(\theta\_{h}=0|D\_{h})P(\theta\_{a}=0|D\_{a})$ |  |
|  |  | $\displaystyle=\pi\_{h}\pi\_{a}+(1-\pi\_{h})(1-\pi\_{a})=\hat{\mathcal{A}}\_{PAS}$ |  |

This creates a closed loop: the PAS formula presented in the main text is exactly the Minimum Bayes Risk estimator under Maximum Entropy priors.

##### Perspective II: The Frequentist View (Variance Reduction).

In the Frequentist ontology, the latent truth states $\theta\_{h},\theta\_{a}\in\{0,1\}$ are fixed unknown constants. We aim to estimate the alignment indicator $\mathcal{A}^{\*}=\mathbb{I}(\theta\_{h}=\theta\_{a})$ based on observed data $D\_{h},D\_{a}$.

Let $L=\ln\Lambda$ denote the Log-Likelihood Ratio derived from the data. By the Central Limit Theorem, the sampling distribution of $L$ is asymptotically normal: $L\sim\mathcal{N}(\mu,\sigma^{2})$, where $\sigma$ represents sampling noise.

1. The MLE Estimator (Hard Threshold).
The Maximum Likelihood Estimator (MLE) for the alignment relies on the indicator function $\mathbb{I}(\cdot)$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{\mathcal{A}}\_{MLE}=\mathbb{I}(L\_{h}>0)\mathbb{I}(L\_{a}>0)+\mathbb{I}(L\_{h}\leq 0)\mathbb{I}(L\_{a}\leq 0)$$ |  | (10) |

This estimator is unbiased asymptotically but exhibits maximal variance at the decision boundary ($L\approx 0$). Since $\hat{\mathcal{A}}\_{MLE}$ behaves as a Bernoulli variable near the boundary, a marginal perturbation in noise causes a discrete jump, resulting in high instability:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Var(\hat{\mathcal{A}}\_{MLE})\big|\_{L\approx 0}=0.25$$ |  | (11) |

2. The PAS Estimator (Soft Threshold).
PAS can be understood as a Shrinkage Estimator using the logistic sigmoid function $\sigma(x)=(1+e^{-x})^{-1}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{\mathcal{A}}\_{PAS}=\sigma(L\_{h})\sigma(L\_{a})+(1-\sigma(L\_{h}))(1-\sigma(L\_{a}))$$ |  | (12) |

PAS serves as a continuous relaxation of MLE. Note that $\lim\_{k\to\infty}\sigma(kx)=\mathbb{I}(x>0)$; thus, PAS approaches MLE as evidence strength approaches infinity.

3. Variance Reduction via Delta Method.
We prove PAS reduces variance using the Delta Method approximation $Var(f(X))\approx[f^{\prime}(\mu)]^{2}\sigma^{2}$. The derivative of the sigmoid at the boundary is $\sigma^{\prime}(0)=0.25$.
Comparing the variance of the decision component:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Var(\hat{\mathcal{A}}\_{PAS})\big|\_{L\approx 0}\approx[\sigma^{\prime}(0)]^{2}\sigma^{2}=0.0625\sigma^{2}$$ |  | (13) |

Conclusion: Provided the sampling noise is not catastrophic ($\sigma^{2}<4$), $Var(\hat{\mathcal{A}}\_{PAS})<Var(\hat{\mathcal{A}}\_{MLE})$. PAS acts as a regularizer that trades a small bias (shrinkage towards 0.5) for a significant reduction in variance, minimizing the overall Mean Squared Error (MSE) in finite-sample regimes.

## Appendix B Methodological Rationale and Aggregation

### B.1 Methodological Rationale

Our aggregation strategy and metric formulation diverge from standard meta-analytic approaches. We explicitly contrast our choices with alternative methodologies below.

##### Benchmarking vs. Meta-Analysis.

While our framework aggregates results across multiple studies, we intentionally employ unweighted averaging rather than the precision-weighted averaging (inverse-variance weighting) typical of meta-analysis. This decision is grounded in two primary distinctions:

- •

  Task Independence vs. Parameter Estimation: Meta-analysis assumes that different studies estimate a shared biological parameter (e.g., a “true” population effect size). In contrast, our goal is benchmarking: evaluating an agent’s general capability across a diverse suite of distinct tasks. Weighting by inverse variance would allow a single study with high statistical power to dominate the aggregate score, obscuring the agent’s failure on smaller but equally critical tasks.
- •

  Avoiding Simulation Artifacts: In participant simulation, the sample size of the agent ($N\_{agent}$) is a controllable hyperparameter. Precision weighting would introduce a perverse incentive where the benchmark score is driven by the computational budget (generating more samples to artificially reduce variance) rather than behavioral fidelity. Unweighted averaging ensures the metric reflects average task performance, decoupled from simulation volume.

### B.2 Metric Selection Rationale

We explicitly prioritize PAS over alternative metrics (e.g., raw effect size distance $|\delta\_{h}-\delta\_{a}|$ or distributional distances like Wasserstein) for two methodological reasons grounded in benchmarking rather than generative modeling:

1. 1.

   Inferential Signal vs. Noise: Human data contains variance from unobserved confounders irrelevant to the hypothesis. Distributional metrics prioritize matching this nuisance noise. PAS isolates the inferential signal—the strength of evidence for the hypothesis—rewarding agents that capture the causal mechanism even if they exhibit less variance than humans.
2. 2.

   Scale Invariance: Effect sizes are scale-dependent (e.g., Cohen’s $d$ vs. $\eta^{2}$). PAS normalizes these into a uniform probability space $[0,1]$, allowing aggregation across heterogeneous study designs.

### B.3 Aggregation Implementation

Scores are aggregated across the hierarchy (Test $\to$ Finding $\to$ Study $\to$ Benchmark) using variance-stabilizing transformations to ensure statistical robustness:

1. 1.

   Finding & Study Level (Variance Stabilization): We map probabilities to correlation space ($r\_{j}=2\mathcal{A}\_{j}-1$) and apply the Fisher-z transformation ([Fisher, 1921](https://arxiv.org/html/2602.00685v2#bib.bib58)) to normalize the variance. Finding-level scores are the average of test $z$-scores; study-level scores are the average of finding $z$-scores. Both are mapped back to the $[0,1]$ PAS scale via the inverse hyperbolic tangent:

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$\bar{r}=\tanh\left(\frac{1}{M}\sum\_{j=1}^{M}\text{arctanh}(r\_{j})\right),\quad\text{PAS}=(\bar{r}+1)/2$$ |  | (14) |
2. 2.

   Benchmark Level (Arithmetic Mean): We compute the unweighted arithmetic mean of study-level PAS. Given the heterogeneity of the studies—which span diverse cognitive and social domains—we treat each study as an independent unit of capability. This approach ensures equal representation across domains and prevents any single study with distinct statistical properties (e.g., large $N$) from dominating the global benchmark score.

ECS is aggregated similarly using study-balanced weights as described in the main text.

### B.4 Comparison with Standard Hypothesis Testing

A natural alternative to PAS is standard frequentist hypothesis testing: test whether the agent’s effect sizes are statistically indistinguishable from the human’s. We implemented this approach using a 4-tier hierarchical aggregation (Test $\to$ Finding $\to$ Study $\to$ Benchmark) and found that it is unsuitable as a benchmark metric: all agents yield $p<0.001$, meaning the test rejects every model. This occurs because even small systematic deviations become highly significant given the large aggregate sample sizes. We report the procedure below for completeness.

Level 1: Test-Level Standardization.
For each individual test $k$ within finding $j$ of study $s$, we compute the standardized difference:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Z\_{s,j,k}=\frac{\hat{\delta}\_{\text{agent}}-\hat{\delta}\_{\text{human}}}{\sqrt{\text{SE}\_{\text{agent}}^{2}+\text{SE}\_{\text{human}}^{2}}}\sim\mathcal{N}(0,1)$$ |  | (15) |

Level 2: Finding-Level Aggregation.
Because we are interested in the magnitude of the discrepancy rather than its direction, we aggregate tests within finding $j$ using the Chi-squared statistic:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\chi^{2}\_{s,j}=\sum\_{k=1}^{K\_{s,j}}Z\_{s,j,k}^{2},\quad\text{with }p\_{s,j}=1-F\_{\chi^{2}\_{K\_{s,j}}}(\chi^{2}\_{s,j})$$ |  | (16) |

where $K\_{s,j}$ is the number of tests in that finding.

Level 3: Study-Level Aggregation (Stouffer).
A study $s$ contains $m\_{s}$ findings. To ensure each finding contributes equally regardless of its internal test count, we map the $p$-values to a standard normal space:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Z\_{s,j}^{\*}=\Phi^{-1}(1-p\_{s,j})\implies Z\_{\text{study},s}=\frac{1}{\sqrt{m\_{s}}}\sum\_{j=1}^{m\_{s}}Z\_{s,j}^{\*}$$ |  | (17) |

Level 4: Benchmark-Level Aggregation.
The final global $p$-value is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Z\_{\text{benchmark}}=\frac{1}{\sqrt{S}}\sum\_{s=1}^{S}Z\_{\text{study},s},\quad P\_{\text{global}}=1-\Phi(Z\_{\text{benchmark}})$$ |  | (18) |

Result and Interpretation.
This framework tests the Global Null Hypothesis ($H\_{0}^{global}$) that $\delta\_{\text{agent}}=\delta\_{\text{human}}$ across all findings. In our experiments, all agents yield $P\_{\text{global}}<0.001$, confirming that no current LLM is statistically indistinguishable from humans. While this result is scientifically informative, it renders the test unsuitable as a benchmark metric: a metric that assigns the same verdict to every model cannot discriminate between agent designs. PAS, by contrast, provides a continuous score that preserves ranking information.

## Appendix C Metrics Implementation Details

### C.1 Evidence Transformation (Priors)

To compute posterior probabilities $\pi$, we calculate Bayes Factors ($BF\_{10}$) using priors tailored to the test type. For t-tests and ANOVA, we employ the JZS prior (Cauchy distribution on effect size) with default scales $r=\sqrt{2}/2$ and $r=0.5$, respectively [Rouder et al. (2009)](https://arxiv.org/html/2602.00685v2#bib.bib52); [Rouder et al. (2012)](https://arxiv.org/html/2602.00685v2#bib.bib53). These account for the majority of the tests. For contingency tables, we utilize a BIC-style approximation ($BF\_{10}\approx\exp((\chi^{2}-\text{df}\ln n)/2)$), while binomial tests use an exact conjugate Beta-Binomial prior (Beta(1,1)).

##### Sensitivity Analysis.

To ensure that the benchmark rankings are driven by agent capability rather than specific prior choices in the evidence transformation, we conducted a sensitivity analysis on the prior scale $r$ used in the JZS Bayes Factor computation. The default value $r=0.707$ assumes a medium effect size distribution. We re-evaluated all agent outputs varying $r$ from $0.5$ (small effects) to $1.0$ (large effects).

As shown in Table [3](https://arxiv.org/html/2602.00685v2#A3.T3 "Table 3 ‣ Sensitivity Analysis. ‣ C.1 Evidence Transformation (Priors) ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"), while the absolute magnitude of the posterior probabilities shifts slightly with the prior width, the relative ranking of agents remains highly stable (Spearman’s $\rho>0.99$). This confirms that PAS provides a consistent measure of relative model fidelity that is robust to reasonable variations in hyperparameter specification.

Table 3: Sensitivity Analysis of Cauchy Prior Scale ($r$) on Agent Rankings. The high correlation ($\rho$) across scales indicates that the benchmark rankings are robust to the choice of prior.

| Prior Scale ($r$) | Spearman’s $\rho$ | Mean $\Delta$ PAS | Max $\Delta$ PAS | Status |
| --- | --- | --- | --- | --- |
| 0.500 | 0.9992 | 0.000661 | 0.001738 | Stable |
| 0.600 | 0.9998 | 0.000313 | 0.000824 | Stable |
| 0.707 (Default) | 1.0000 | 0.0000 | 0.0000 | Baseline |
| 0.800 | 0.9998 | 0.000235 | 0.000657 | Stable |
| 0.900 | 0.9997 | 0.000463 | 0.001307 | Stable |
| 1.000 | 0.9996 | 0.000669 | 0.001906 | Stable |

### C.2 Generalization to Multiple Hypotheses

Theoretically, PAS generalizes to $K$ hypotheses via the inner product of posterior vectors $\vec{\pi}\_{h}\cdot\vec{\pi}\_{a}$. In our implementation, we specifically operationalize this as a 3-way split ($H\_{+},H\_{-},H\_{0}$). The resulting score is the dot product of the agent and human posterior vectors over these three outcome categories:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S=\pi\_{h+}\pi\_{a+}+\pi\_{h-}\pi\_{a-}+\pi\_{h0}\pi\_{a0}$$ |  | (19) |

### C.3 Standardized Effect Size Recovery

We recover Cohen’s $d$ from reported statistics using the following conversions:

- •

  T-family: Independent t-tests use $d=t\sqrt{(n\_{1}+n\_{2})/(n\_{1}n\_{2})}$; paired/one-sample tests use $d=t/\sqrt{n}$. F-tests ($df\_{1}=1$) are converted to $t$-equivalents ($t=\sqrt{F}$) and processed similarly.
- •

  Correlation-family: Pearson’s $r$, Fisher’s $z$, and Mann-Whitney $U$ (via rank-biserial $r\_{rb}$) are converted to $d$ using the relationship $d=2r/\sqrt{1-r^{2}}$.
- •

  Discrete: $2\times 2$ contingency tables are converted via the Log Odds Ratio ($d\approx\ln(OR)\sqrt{3}/\pi$). Binomial proportions use $d=2(p-p\_{0})/\sqrt{p\_{0}(1-p\_{0})}$.

## Appendix D Implementation Details for Agent Design Variants

We describe the implementation details for each agent design variant used in our experiments. Each variant corresponds to a different system prompt strategy that conditions the LLM’s behavior during experimental participation. All four specifications share *identical* task instructions—the two response-format lines reproduced in every template below—so the only component that varies across A1–A4 is the identity block (none, role only, role plus demographics, role plus demographics plus backstory). Differences in alignment across specifications therefore cannot be attributed to differences in task framing.

### D.1 Blank (A1)

The Blank variant serves as the baseline control condition. The model receives no identity block whatsoever—no role, no demographics, no backstory—allowing us to measure its intrinsic alignment with human behavior without any persona-based conditioning.

A1 System Prompt

(No identity block — the model receives only the shared task instructions.)
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.

### D.2 Role-Play (A2)

The Role-Play variant instructs the model to act as a human participant in a psychological study, but without assigning any specific demographic attributes. This test assesses whether the model has a generalizable concept of human experimental behavior.

A2 System Prompt

You are participating in a psychology experiment as a human participant.
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.

### D.3 Demographic (A3)

The Demographic variant augments the Role-Play prompt with specific demographic attributes (age, gender, education/background) sampled from the participant distribution reported in the original study. This tests whether models can condition their responses on population-level statistical priors.

#### D.3.1 System Prompt Template

A3 System Prompt Template

You are participating in a psychology experiment as a human participant.
YOUR IDENTITY:
  
- Age: {age} years old
  
- Gender: {gender}
  
- Education: {education}
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.

#### D.3.2 Instantiated Example

A3 Example (Instantiated)

You are participating in a psychology experiment as a human participant.
YOUR IDENTITY:
  
- Age: 21 years old
  
- Gender: Female
  
- Education: college student
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.

### D.4 Contextualized Backstory (A4)

The Contextualized Backstory variant extends the demographic profile with a rich, natural-language narrative describing the agent’s life history, personality traits, relationships, and daily routines. This approach is inspired by the Generative Agents framework [Park et al. (2023)](https://arxiv.org/html/2602.00685v2#bib.bib26).

#### D.4.1 Background Generation

For each simulated participant, we generate a personalized backstory using an LLM (Gemini Flash). The generation prompt takes demographic information (name, age, gender, education, occupation) and produces a semicolon-delimited paragraph containing 5–6 statements about the agent’s personality, routines, hobbies, living situation, and relationships.

Background Generation Prompt

Generate a life biography for {name}.
STYLE:
  
- Start with: ‘You are {name}.’ then ‘{name} is …’
  
- Single paragraph, semicolon-delimited statements
  
- 5-6 statements about: personality, routines, habits, hobbies, living situation, relationships
  
- NO experiments, studies, research, trials, or problem scenarios
DATA:
  
- Name: {name}, Age: {age}
  
- Gender: {gender}
  
- Education: {education}
  
- Occupation: {occupation}
EXAMPLE (John Lin):
  
John Lin is a pharmacy shopkeeper at the Willow Market and Pharmacy who loves to help people. He is always looking for ways to make the process of getting medication easier for his customers; John Lin is living with his wife, Mei Lin, who is a college professor, and son, Eddy Lin, who is a student studying music theory; John Lin loves his family very much; John Lin has known the old couple next-door, Sam Moore and Jennifer Moore, for a few years; John Lin thinks Sam Moore is a kind and nice man; John Lin knows his neighbor, Yuriko Yamamoto, well.
Generate bio for {name} (5-6 statements, pure life only, no experiments).

#### D.4.2 System Prompt Template

The generated background is incorporated into the following system prompt template:

A4 System Prompt Template

You are participating in a psychology experiment as a human participant.
YOUR BACKGROUND AND MEMORIES:
  
{generated\_background}
Based on your background and memories above, respond as this participant would in the experiment.
  
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.
  
Your responses should reflect your background, experiences, and characteristics as described above.

#### D.4.3 Instantiated Example

A4 Example (Instantiated)

You are participating in a psychology experiment as a human participant.
YOUR BACKGROUND AND MEMORIES:
  
You are Christopher Hernandez. Christopher Hernandez is a dedicated landscape architect who finds peace in creating beautiful outdoor spaces for his local community; he starts every morning with a long walk through the neighborhood park to gather inspiration for his upcoming projects; Christopher Hernandez lives in a quiet suburban home with his wife, Elena, and their two teenage daughters who he treasures deeply; he spends most of his weekends woodworking in his garage or tending to his extensive backyard vegetable garden; Christopher Hernandez is known by his neighbors as a reliable and generous man who is always willing to lend a helping hand with home repairs; he maintains a close relationship with his younger brother, David, and they enjoy meeting up every Sunday for a round of golf.
Based on your background and memories above, respond as this participant would in the experiment.
  
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.
  
Your responses should reflect your background, experiences, and characteristics as described above.

## Appendix E Summary of Studies

Table 4: Summary of studies used in this work.

| Category | Subdomain | Paper name | Author(s) | Year |
| --- | --- | --- | --- | --- |
| Individual Cognition | False Consensus Effect | The “False Consensus Effect”: An Egocentric Bias in Social Perception and Attribution Processes [Ross et al. (1977)](https://arxiv.org/html/2602.00685v2#bib.bib37) | Lee Ross; David Greene; Pamela House | 1977 |
|  | Anchoring Effect | Measures of Anchoring in Estimation Tasks [Jacowitz and Kahneman (1995)](https://arxiv.org/html/2602.00685v2#bib.bib38) | Karen E. Jacowitz; Daniel Kahneman | 1995 |
|  | Framing Effect | The Framing of Decisions and the Psychology of Choice [Tversky and Kahneman (1981)](https://arxiv.org/html/2602.00685v2#bib.bib39) | Amos Tversky; Daniel Kahneman | 1981 |
|  | Representativeness Heuristic | Subjective Probability: A Judgment of Representativeness [Kahneman and Tversky (1972)](https://arxiv.org/html/2602.00685v2#bib.bib40) | Daniel Kahneman; Amos Tversky | 1972 |
| Strategic Interaction | p-Beauty Contest Game | Unraveling in Guessing Games: An Experimental Study [Nagel (1995)](https://arxiv.org/html/2602.00685v2#bib.bib41) | Rosemarie Nagel | 1995 |
|  | Prisoner’s Dilemma | Thinking through Uncertainty: Nonconsequential Reasoning and Choice [Shafir and Tversky (1992)](https://arxiv.org/html/2602.00685v2#bib.bib42) | Eldar Shafir; Amos Tversky | 1992 |
|  | Ultimatum and Dictator Games | Fairness in Simple Bargaining Experiments [Forsythe et al. (1994)](https://arxiv.org/html/2602.00685v2#bib.bib43) | Robert Forsythe; Joel L. Horowitz; N. E. Savin; Martin Sefton | 1994 |
|  | Trust and Reciprocity Game | Trust, Reciprocity, and Social History [Berg et al. (1995)](https://arxiv.org/html/2602.00685v2#bib.bib44) | Joyce Berg | 1995 |
| Social Psychology | Intentional Action and Side-Effects | Intentional Action and Side-Effects in Ordinary Language [Knobe (2003)](https://arxiv.org/html/2602.00685v2#bib.bib45) | Joshua Knobe | 2003 |
|  | Forming Impressions of Personality | Forming Impressions of Personality [Asch (1946)](https://arxiv.org/html/2602.00685v2#bib.bib46) | S. E. Asch | 1946 |
|  | Social Categorization | Discrimination in the Minimal Group Paradigm: Social Identity or Self-Interest? [Gagnon and Bourhis (1996)](https://arxiv.org/html/2602.00685v2#bib.bib57) | André Gagnon; Richard Y. Bourhis | 1996 |
|  | Pluralistic Ignorance | Pluralistic Ignorance and Alcohol Use on Campus: Some Consequences of Misperceiving the Social Norm [Prentice and Miller (1993)](https://arxiv.org/html/2602.00685v2#bib.bib47) | Deborah A. Prentice; Dale T. Miller | 1993 |

### E.1 Study 1: False Consensus Effect

Original study.
Across three questionnaire substudies with Stanford undergraduates ($N=504$), participants made a choice and estimated what % of peers would do the same. Substudy 1 used four hypothetical stories ($n=320$, $80$ per story) and included both peer-prevalence estimates and trait ratings of “typical” choosers; the false-consensus main effect was strong ($F(1,312)=49.1$) with parallel asymmetries in trait ratings ($F(1,312)=37.40$). Substudy 2 used a 35-item (34 analyzed) self-description checklist ($n=80$) where respondents self-categorized and estimated the % of “college students in general” in their category. Substudy 3 used a hypothetical “sandwich-board” request with two sign versions ($n=104$ total) and again observed strong false consensus (combined $F=56.2$) alongside choice-consistent trait-rating differences (combined $F=17.79$) [Ross et al. (1977)](https://arxiv.org/html/2602.00685v2#bib.bib37).

Our reconstruction.
We implement the same three substudies and prompt structure: four vignettes with choice + peer-prevalence estimates + trait ratings (Substudy 1), a 35-item (34 analyzed) self-categorization questionnaire with prevalence estimates (Substudy 2), and a two-version sandwich-board scenario with choice, prevalence estimates, and trait ratings (Substudy 3). We evaluate reconstructions by matching the paper’s reported aggregate targets (e.g., means and test statistics such as $F(1,312)=49.1$ and combined $F=56.2$), rather than original individual-level data, and we keep the participant pool as a generic “Stanford undergrad” (no added demographics).

### E.2 Study 2: Anchoring Effect

Original study.
Jacowitz and Kahneman [Jacowitz and Kahneman (1995)](https://arxiv.org/html/2602.00685v2#bib.bib38) quantified anchoring in numerical estimation using UC Berkeley students ($N=156$): a calibration group ($n=53$) first provided estimates and 10-point confidence ratings for 15 uncertain quantities, which defined low/high anchors at the 15th/85th percentiles. An anchored group ($n=103$) then judged whether each quantity was higher/lower than a provided anchor and gave an estimate plus confidence rating. Estimates shifted significantly toward anchors across all items.

Our reconstruction.
We recreate the 15-item anchor–estimate procedure (higher/lower judgment $\rightarrow$ numeric estimate $\rightarrow$ 10-point confidence), and we implement both calibration-style baselines ($n\approx 53$) and anchored conditions ($n\approx 103$) using the same anchor percentiles. Evaluation targets the original aggregate patterns rather than individual-level replication.

### E.3 Study 3: Framing Effect

Original study.
Tversky and Kahneman [Tversky and Kahneman (1981)](https://arxiv.org/html/2602.00685v2#bib.bib39) ran classroom questionnaire problems with students at Stanford University and the University of British Columbia. Sample sizes by problem were: Problem 1 (gain frame) $n=152$, Problem 2 (loss frame) $n=155$; Problem 3 $n=150$, Problem 4 $n=86$; Problem 5 $n=77$, Problem 6 $n=85$, Problem 7 $n=81$; Problem 8 $n=183$, Problem 9 $n=200$; Problem 10 version 1 $n=93$, version 2 $n=88$.

Our reconstruction.
We recreate the same set of decision vignettes (Problems 1–10) with identical choice structures and collect binary choices from participants. Evaluation focuses on reproducing the same directional reversals between matched frames (with the original problem-specific $n$ as targets), not exact replication of every reported percentage.

### E.4 Study 4: Representativeness Heuristic

Original study.
This paper [Kahneman and Tversky (1972)](https://arxiv.org/html/2602.00685v2#bib.bib40) reported nine questionnaire substudies demonstrating representativeness-based judgments and sample-size neglect. Reported sample sizes were: Substudy 1 $n=92$, Substudy 2 $n=89$, Substudy 5 $n=52$, Substudy 6 $N=1500$, Substudy 7 $n=97$, Substudy 8 $N=560$, Substudy 9 $n=115$; Substudies 3 and 4 did not report $N$ in the extracted design summary.

Our reconstruction.
We recreate all nine substudies with the original wording and response formats, and we evaluate against the paper’s aggregated outcomes using the same substudy sample sizes where available (Substudies 1,2,5,6,7,8,9). We do not generate new individual-level datasets; replication is scored by matching the reported summary judgments/medians and direction of errors.

### E.5 Study 5: p-Beauty Contest Game

Original study.
Nagel [Nagel (1995)](https://arxiv.org/html/2602.00685v2#bib.bib41) investigated iterated reasoning and convergence in p-beauty contest guessing games. Participants repeatedly chose a number in the interval $[0,100]$, aiming to be closest to $p$ times the group mean, with $p=1/2,2/3,$ or $4/3$. Choices across four rounds were recorded to assess reasoning depth and adjustment over time. Results showed bounded rationality: initial choices clustered around a few iteration steps from 50, and repeated play led choices to move toward the Nash equilibrium.

Our reconstruction.
We reimplement the p-beauty contest as a standardized multi-round numeric guessing task with the same $p$ conditions. Participants provide guesses and receive round-wise feedback in a uniform interface. Evaluation targets clustering and directional convergence rather than exact numerical distributions.

### E.6 Study 6: Prisoner’s Dilemma

Original study.
Shafir and Tversky [Shafir and Tversky (1992)](https://arxiv.org/html/2602.00685v2#bib.bib42) tested nonconsequential reasoning with Princeton undergraduates across three tasks: Prisoner’s Dilemma (PD) triads ($n=80$), a computerized Newcomb’s problem ($n=40$), and a PD information-seeking variant ($n$ not reported). In the PD triads, participants completed 40 one-shot games (6 PDs) presented in three versions (opponent unknown/known, compete/known, cooperate/known), totaling 444 PD triads. Outcomes showed higher cooperation when the opponent’s choice was unknown and a majority one-box preference in Newcomb’s problem.

Our reconstruction.
We recreate the same three tasks as standardized vignettes: PD triads (444 triads; $n=80$), Newcomb’s problem ($n=40$), and the PD information-seeking variant. Participants make the same discrete choices in each scenario, and the evaluation targets the same directional patterns.

### E.7 Study 7: Ultimatum and Dictator Games

Original study.
Forsythe et al.[Forsythe et al. (1994)](https://arxiv.org/html/2602.00685v2#bib.bib43) tested fairness in bargaining with University of Iowa students ($N=230$) across six between-subjects experiments: $5$ Dictator–Pay ($n=45$), $5$ Ultimatum–Pay ($n=43$), $5$ Dictator–NoPay ($n=46$), $5$ Ultimatum–NoPay ($n=48$), $10$ Dictator–Pay ($n=24$), $10$ Ultimatum–Pay ($n=24$). Proposers chose an allocation; in Ultimatum games responders could reject (both get $0$). Offers were higher in Ultimatum than Dictator, and Dictator offers were higher under NoPay than Pay.

Our reconstruction.
We implement the same six conditions ($n=45,43,46,48,24,24$) as standardized allocation/acceptance tasks (Dictator: allocate, Ultimatum: allocate + accept/reject), but without lab payments. Evaluation targets the same directional contrasts (Ultimatum $>$ Dictator; NoPay Dictator $>$ Pay Dictator).

### E.8 Study 8: Trust and Reciprocity Game

Original study.
Berg et al.[Berg et al. (1995)](https://arxiv.org/html/2602.00685v2#bib.bib44) studied trust and reciprocity in a two-stage investment game with University of Minnesota undergraduates ($N=120$): No-History ($n=64$, 32 pairs) and Social-History ($n=56$, 28 pairs). Room A chose how much of a $10 endowment to send ($0–$10); the amount was tripled; Room B decided how much to return. Social history consisted of a report summarizing the prior 32 pairs’ outcomes.

Our reconstruction.
We recreate the same two conditions (No-History $n=64$, Social-History $n=56$) with identical send/return rules and the same social-history report structure. Evaluation targets the original directional effects.

### E.9 Study 9: Intentional Action and Side- Effects

Original study.
Knobe [Knobe (2003)](https://arxiv.org/html/2602.00685v2#bib.bib45) tested the side-effect effect in two between-subjects vignette experiments with people in a Manhattan public park ($N=120$). Experiment 1 (chairman/environment) had $N=78$ ($n=39$ harm, $n=39$ help): 82% judged the harmful side effect intentional vs. 23% in the helpful condition. Experiment 2 (lieutenant/soldiers) had $N=42$ ($n=21$ harm, $n=21$ help): 77% vs. 30% intentional ($\chi^{2}(1,N=42)=9.5$).

Our reconstruction.
We recreate both vignettes with the same harm/help conditions and the same response formats: Yes/No intentionality plus 0–6 blame/praise ratings (Exp 1), and Yes/No intentionality (Exp 2). We evaluate by reproducing the harm–help asymmetry in intentionality judgments using the original sample sizes ($N=78$, $N=42$).

### E.10 Study 10: Forming Impressions of Personality

Original study.
Asch [Asch (1946)](https://arxiv.org/html/2602.00685v2#bib.bib46) reported impression-formation experiments with college students (total $N=811$) using short trait lists. Centrality manipulations were tested in Experiment I ($N=166$: warm $n=90$, cold $n=76$) and Experiment III ($N=46$: polite $n=20$, blunt $n=26$). Primacy manipulations were tested by reversing list order in Experiment VI ($N=58$: order A $n=34$, order B $n=24$) and Experiment VII ($N=99$: order A $n=46$, order B $n=53$). Impressions were measured via selected traits/ratings, showing strong central-trait and order effects.

Our reconstruction.
We recreate Experiments I, III, VI, and VII as standardized text vignettes and collect the same structured trait judgments, targeting the original between-condition sample sizes: Exp I ($90$ and $76$), Exp III ($20$ and $26$), Exp VI ($34$ and $24$), Exp VII ($46$ and $53$). Evaluation focuses on reproducing the centrality (warm/cold) and primacy (order) directional effects.

### E.11 Study 11: Social Categorization

Original study.
Gagnon and Bourhis [Gagnon and Bourhis (1996)](https://arxiv.org/html/2602.00685v2#bib.bib57) tested minimal-group discrimination with undergraduates ($N=94$) in a 2$\times$2 design: Interdependence (autonomous vs. interdependent) $\times$ In-group Identification (low vs. high, measured post-hoc). Participants were randomly assigned to groups by coin toss and allocated resources using Tajfel matrices. Contrary to the behavioral interaction model, autonomous individuals discriminated as much as interdependent respondents (no main effect of Interdependence, $F<1.56$, $p>.05$). In line with social identity theory, high in-group identifiers discriminated significantly more than low identifiers (FAV on MJP: $F(1,90)=18.51$, $p<.001$).

Our reconstruction.
We recreate the same 2-factor design ($N=94$) with text-based coin-toss categorization (no visual stimuli), six Tajfel matrices (three types $\times$ original and reversed forms), a 100-point zero-sum distribution, and a post-allocation identification measure. The interdependence factor is manipulated via instructions; identification is measured after allocation and used for post-hoc median split, matching the original procedure.

### E.12 Study 12: Pluralistic Ignorance

Original study.
Surveys with Princeton undergraduates tested pluralistic ignorance about campus drinking (total $N=468$ across the three studies we reconstructed). Study 1 ($n=132$) used 11-point comfort ratings for *self* and the *average student* (plus an IQR bracket for “50% of students”). Study 2 ($n=242$) added *friends* and manipulated question order (self-first vs. other-first) on the same 11-point scale. Study 4 ($n=94$) focused on the keg-ban policy (0–10 attitude scale) and measured perceived deviance plus social-action and alienation indicators. All showed the same pattern: students rated themselves as less comfortable (or less aligned with the norm) than they believed others were, and this misperception was associated with lower action and greater alienation [Prentice and Miller (1993)](https://arxiv.org/html/2602.00685v2#bib.bib47).

Our reconstruction.
We rebuild these three studies using the original items and response scales (Study 1 $n=132$, Study 2 $n=242$, Study 4 $n=94$), keeping the same target comparisons (self vs. average student; friends; order; keg-ban deviance/action/alienation). Analyses rely on the paper’s reported summary statistics; we do not simulate individual-level data or recreate the longitudinal Study 3.

## Appendix F Complementary Experimental Results

### F.1 Model names and OpenRouter identifiers

All single-model evaluations use the OpenRouter API. Table [5](https://arxiv.org/html/2602.00685v2#A6.T5 "Table 5 ‣ F.1 Model names and OpenRouter identifiers ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") lists the display name used in this report and the exact OpenRouter model ID (provider/series) used for each run.

Table 5: Model display names and OpenRouter model IDs. All runs use the OpenRouter API; the “OpenRouter model ID” is the exact model string sent to the API.

| Model | OpenRouter model ID |
| --- | --- |
| Claude Haiku 4.5 | anthropic/claude-haiku-4.5 |
| DeepSeek V3.2 | deepseek/deepseek-v3.2 |
| Gemini 3 Flash | google/gemini-3-flash-preview |
| Mistral Nemo | mistralai/mistral-nemo |
| Gemma 4 26b | google/gemma-4-26b-a4b-it |
| GPT 5 Nano | openai/gpt-5-nano |
| GPT OSS 120b | openai/gpt-oss-120b |
| GPT OSS 20b | openai/gpt-oss-20b |
| Qwen3 Next 80b | qwen/qwen3-next-80b-a3b-instruct |
| Grok 4.1 Fast | x-ai/grok-4.1-fast |

### F.2 Bootstrap Standard Errors: Methodology and Justification

Uncertainty for PAS (Probability of Alignment with Science) is quantified via a *participant-level bootstrap* standard error (SE). Because we already have large sample sizes, re-testing each agent produces negligible final score deviation. The procedure is as follows.

Table 6: Total PAS and Total SE. Each cell reports Total PAS with its bootstrap Total SE in parentheses; Total PAS is the simple mean of per-study raw PAS, and Total SE is propagated from per-study bootstrap SEs as $\sqrt{\sum\mathrm{SE}\_{i}^{2}}/N$.

| Model | A1 | A2 | A3 | A4 |
| --- | --- | --- | --- | --- |
| Claude Haiku 4.5 | $0.3616$ (0.0057) | $0.3627$ (0.0088) | $0.3650$ (0.0081) | $0.4181$ (0.0076) |
| DeepSeek V3.2 | $0.3405$ (0.0082) | $0.3701$ (0.0090) | $0.3593$ (0.0067) | $0.3859$ (0.0066) |
| Gemini 3 Flash | $0.4155$ (0.0042) | $0.4005$ (0.0003) | $0.5314$ (0.0061) | $0.4771$ (0.0041) |
| Mistral Nemo | $0.4663$ (0.0102) | $0.4600$ (0.0126) | $0.4829$ (0.0121) | $0.4527$ (0.0121) |
| Gemma 4 26b | $0.3516$ (0.0028) | $0.3493$ (0.0074) | $0.3752$ (0.0087) | $0.3874$ (0.0079) |
| GPT 5 Nano | $0.3594$ (0.0114) | $0.3597$ (0.0102) | $0.4226$ (0.0107) | $0.4442$ (0.0071) |
| GPT OSS 120b | $0.3471$ (0.0139) | $0.3925$ (0.0104) | $0.3889$ (0.0123) | $0.3929$ (0.0079) |
| GPT OSS 20b | $0.4641$ (0.0129) | $0.3794$ (0.0123) | $0.4163$ (0.0126) | $0.4109$ (0.0105) |
| Qwen3 Next 80b | $0.3914$ (0.0039) | $0.3694$ (0.0057) | $0.4012$ (0.0088) | $0.4573$ (0.0070) |
| Grok 4.1 Fast | $0.3214$ (0.0045) | $0.2891$ (0.0039) | $0.4074$ (0.0049) | $0.3524$ (0.0088) |
| Mixed Models | $0.2706$ (0.0146) | $0.3331$ (0.0133) | $0.3293$ (0.0129) | $0.3740$ (0.0088) |

##### Resampling.

For each study and each model–method combination, the PAS score is a function of participant-level outcomes (e.g., test statistics and significance flags). We take the participant pool as the empirical distribution and draw $B$ bootstrap samples *with replacement* of the same size as the original sample. The reported results use $B=200$ unless stated otherwise.

##### Bootstrap distribution and SE.

On each bootstrap sample we recompute the study-level PAS (or the same metric used in the main analysis). The bootstrap distribution of that metric is summarized by its standard deviation, which we take as the *bootstrap standard error* for that study. Formally, $\widehat{\mathrm{SE}}\_{\mathrm{boot}}=\mathrm{SD}(\hat{\theta}^{\*}\_{1},\ldots,\hat{\theta}^{\*}\_{B})$, where $\hat{\theta}^{\*}\_{b}$ is the statistic from the $b$-th bootstrap sample. No distributional assumption is made beyond the data-generating process implied by the empirical participant set.

##### Aggregation across studies.

For each model–method, a single “Total PAS” is computed as the mean of per-study PAS over the $K$ studies. Under the assumption that study-level estimates are approximately independent, the SE of the mean is propagated as

|  |  |  |
| --- | --- | --- |
|  | $$\widehat{\mathrm{SE}}(\overline{\mathrm{PAS}})=\frac{1}{K}\sqrt{\sum\_{k=1}^{K}\widehat{\mathrm{SE}}\_{k}^{2}}\,.$$ |  |

### F.3 Extended Distributional Analysis

In the main text (RQ1), we identified a distinct bimodal signature in agent alignment: agents tend to either closely replicate a human effect or miss it almost entirely, with little intermediate mass (Figure [3](https://arxiv.org/html/2602.00685v2#S5.F3 "Figure 3 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") in the main text). Here, we extend this analysis to determine whether this polarization stems from benchmark insensitivity (i.e., tasks being exclusively “too easy” or “too hard”) or intrinsic model behaviors. Our auxiliary analysis confirms that the evaluation suite maintains high discriminatory power, effectively disentangling model capabilities.

##### Benchmark Sensitivity and Model Disentanglement

To interrogate the source of variance, we decompose performance by task difficulty in Figure [5](https://arxiv.org/html/2602.00685v2#A6.F5 "Figure 5 ‣ Idiosyncratic Capabilities ‣ F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"). The distribution of mean PAS (Left) demonstrates that the benchmark covers a broad difficulty spectrum rather than collapsing into a binary distribution.

Crucially, the mean-variance analysis (Right) reveals a “Zone of Disagreement” at medium difficulty levels. The existence of this high-variance zone confirms that the benchmark effectively disentangles models based on their architectural priors. The bimodal outcome observed in the main text is therefore not an artifact of task homogeneity (with only hard and easy task for all), but a result of Agents being heterogeneous.

##### Idiosyncratic Capabilities

Finally, Figure [6](https://arxiv.org/html/2602.00685v2#A6.F6 "Figure 6 ‣ Idiosyncratic Capabilities ‣ F.3 Extended Distributional Analysis ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") visualizes the item-level performance across all model-prompt combinations. The lack of continuous vertical bands (which would indicate uniform dominance by a single model) highlights the idiosyncratic nature of current simulation capabilities. We observe a “patchwork” pattern where all model configurations exhibit sporadic divergences on tasks that otherwise other models solve. This suggests that “General Simulation Intelligence” is not yet linear; rather, different architectures offer complementary strengths in modeling specific facets of human behavior.

![Refer to caption](https://arxiv.org/html/2602.00685v2/appendix-media/fig_test_difficulty_analysis-1.png)


Figure 5: Decomposing Variance via Task Difficulty. (Left) The benchmark spans a wide spectrum of difficulty levels, refuting the notion that tasks are binary. (Right) The Hexbin analysis identifies a “Zone of Disagreement” (red center), where variance peaks. This indicates that the benchmark effectively disentangles models: in this zone, architectural choices—rather than task difficulty alone—determine success or failure.

![Refer to caption](https://arxiv.org/html/2602.00685v2/appendix-media/fig_test_level_heatmap_bas-1.png)


Figure 6: The Landscape of Idiosyncratic Capabilities. The scattered distribution of high (green) and low (red) alignment scores illustrates that capabilities are fragmented. No single agent universally dominates; instead, performance is highly specific to the interaction between agent and task type.

##### Robustness to Effect-Size Heterogeneity.

A natural concern is that the low cross-finding pattern correlation $\rho$ in our ECS decomposition (§[5](https://arxiv.org/html/2602.00685v2#S5 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"), RQ2) could stem from converting heterogeneous effect-size metrics ($d$, $h$, $\eta^{2}$, $r$) onto a common scale (Appendix [C.3](https://arxiv.org/html/2602.00685v2#A3.SS3 "C.3 Standardized Effect Size Recovery ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). To rule this out, we recompute ECS separately within each test family ($t$, $\chi^{2}$, $F$, correlation), avoiding any cross-family conversion. The resulting ECS values stay in a narrow $0.11$–$0.16$ band, matching the global ECS magnitudes in Table [1](https://arxiv.org/html/2602.00685v2#S5.T1 "Table 1 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"). A second concern operates at the study level rather than the metric level: a single idiosyncratic study could dominate a pooled concordance score. To rule this out, we drop each study in turn and recompute the global ECS; it stays within $0.160$–$0.195$, so no individual study drives the result. The low pattern correlation therefore reflects a genuine simulation gap, not a measurement artifact.

We note that pooling heterogeneous paradigms onto one standardized scale is the established construction in replication research rather than a choice specific to this work: the Reproducibility Project [Open Science Collaboration (2015)](https://arxiv.org/html/2602.00685v2#bib.bib54) placed roughly 100 studies from very different paradigms on a common effect-size scale and summarized the field with a single correlation between original and replication effects. ECS applies the same construction to agent-versus-human effects, with two differences: we use Cohen’s $d$ as the common scale, converting each test with standard meta-analytic formulas (Appendix [C.3](https://arxiv.org/html/2602.00685v2#A3.SS3 "C.3 Standardized Effect Size Recovery ‣ Appendix C Metrics Implementation Details ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")), and we use Lin’s concordance coefficient in place of Pearson, because concordance additionally requires the magnitudes to match. Normalizing the effect sizes—standardizing agent and human effects to zero mean and unit variance—would reduce the metric exactly to $\rho$, which is one of the two factors of ECS and is reported separately in Figure [4](https://arxiv.org/html/2602.00685v2#S5.F4 "Figure 4 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation").

##### Is $0.26$ Small? A Human-Side Noise Ceiling.

A further concern is that ECS may be bounded well below $1$ by the sampling noise in the human ground truth itself, in which case the agent’s best-case ECS of $0.265$ might already be close to the achievable ceiling rather than far from it. To quantify this, we construct a *human-side upper bound*: for each of the $43$ findings with a recoverable Cohen’s $d$, we treat the published effect size as a Gaussian centered on the reported point estimate with standard deviation given by the standard sampling-noise approximation $\mathrm{SE}(d)\approx\sqrt{4/n+d^{2}/(2n)}$ at the original human sample size $n$, draw two independent human-side replicates per finding, and compute ECS (Lin’s CCC) between them. Averaging over $B=1000$ such draws gives an estimate of the ECS that an idealized human replicator—one that exactly matches the population effect—would attain under the noise structure of our benchmark. This yields an upper bound of $\overline{\mathrm{ECS}}\_{\text{human}}\approx 0.928$, with $\rho\approx 0.932$ and $C\_{b}\approx 0.996$. The best agent’s $\mathrm{ECS}=0.265$ thus sits at roughly $29\%$ of the human noise ceiling: the gap to humans is genuine, not an artifact of an unattainable target.

### F.4 Hypothesis Testing Details

Table 7: Summary of Hypothesis Tests. Results based on aggregated PAS scores. Significance levels: ${}^{\*}p<0.05$, ${}^{\*\*}p<0.01$, ${}^{\*\*\*}p<0.001$.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| ID | Hypothesis Description | Method | $\Delta$ | Statistic | Result |
| Group A: Agent Design | | | | | |
| H1 | A3 (Demo) $>$ A1 (Empty) | Paired $t$ | $+0.033$ | $t=2.27^{\*}$ | Supported |
| H2 | A3 (Demo) $>$ A4 (Narrative) | Paired $t$ | $-0.003$ | $t=-0.23$ | Null |
| H3 | A1 $>$ A2 (Role-Play) | Paired $t$ | $+0.009$ | $t=0.77$ | Rejected |
| H4 | Median $>$ Mixed Model | Pooled $t$ | $+0.070$ | $t=2.73^{\*\*}$ | Supported |
| Group B: Domain Specificity | | | | | |
| H5 | Social $>$ Cognition | Pooled $t$ | $+0.080$ | $t=3.24^{\*\*}$ | Supported |
| H6 | Social $>$ Strategic | Pooled $t$ | $+0.121$ | $t=7.25^{\*\*\*}$ | Supported |
| Group C: Model Scaling | | | | | |
| H7 | Flagship $\neq$ Open | Mann-Whitney | N/A | $p=0.91$ | Null |
| Group D: Hyperparameters (Ablation) | | | | | |
| H8 & H9 | PAS at $T=0.1$ vs $T=1.0$ | Wilcoxon | $+0.006$ | $p=1.00$ | Null |

We evaluate our ten core hypotheses using a combination of pooled $t$-tests (incorporating Standard Errors of PAS) and Wilcoxon signed-rank tests for robustness. Table [7](https://arxiv.org/html/2602.00685v2#A6.T7 "Table 7 ‣ F.4 Hypothesis Testing Details ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") summarizes the statistical outcomes.

##### Group A: Agent Design (RQ2)

Our analysis confirms that specific prompt engineering strategies significantly impact simulation fidelity, though not always monotonically.

- •

  H1: Demographic Benefit (Supported). Adding demographic descriptors (A3) yields a statistically significant improvement in PAS compared to the blank baseline (A1) (paired $t$-test $p=0.049$; Wilcoxon $p=0.037$). This effect is robust, with 9 out of 10 models showing positive gains.
- •

  H2: Narrative Overload (Null). We fail to reject the null hypothesis that complex backgrounds (A4) and simple demographics (A3) yield equivalent PAS (paired $t$-test $p=0.824$, $n=10$). There is no aggregate directional preference: 6 of 10 models prefer A4 and 4 prefer A3, with a mean PAS difference of essentially zero ($\Delta=-0.003$). Per-model variation is large—A4 lifts Qwen3 Next 80b ($\Delta\text{PAS}=+0.056$) and Claude Haiku 4.5 ($+0.053$) but drags down Grok 4.1 Fast ($-0.055$) and Gemini 3 Flash ($-0.054$)—consistent with the model-specific bifurcation noted in the main text.
- •

  H3: Role-Play Penalty (Rejected). Globally, instructing models to “act as a human” (A2) does not significantly degrade PAS compared to implicit conditioning (A1) (paired $t$-test $p=0.46$). The earlier “Rationality Bias” pattern is confined to specific models (Claude Haiku, Grok); on the new study suite no global penalty survives.
- •

  H4: Consistency Necessity (Supported). The Mixed-Models Baseline performs significantly worse than the median single-model approach (single mean $0.397$ vs. mixed mean $0.327$; pooled $t$-test $p=0.009$). This confirms that aggregating diverse response distributions introduces “destructive interference,” diluting the systematic behavioral signals required for valid replication.

##### Group B: Domain Robustness (RQ3)

On the current study suite, models perform best on social-psychology tasks and worst on strategic (game-theory) tasks. Cognitive-bias tasks fall in between. Note that since PAS is not directly comparable among different fields, we use raw study-level PAS averaged within each domain.

- •

  H5: Social vs. Cognition (Supported). Models perform better on Social Psychology than on Cognitive Bias tasks (Soc PAS$=0.464$ vs. Cog PAS$=0.384$; $t$-test $p=0.002$).
- •

  H6: Social vs. Strategic (Strongly Supported). Models perform substantially better on Social tasks than on Strategic ones (Soc PAS$=0.464$ vs. Stra PAS$=0.343$; $t$-test $p<10^{-9}$). Strategic interaction tasks (e.g., Trust Game, Beauty Contest) remain the hardest behavioral domain to replicate.

##### Group C & D: Scaling and Hyperparameters (RQ3)

We observe that raw capability metrics do not directly translate to behavioral simulation fidelity.

- •

  H7: Model Scale (Null). Contrary to established scaling laws, expensive “Flagship” models do not significantly outperform efficient or open-weights models in reproducing human behavior (Flagship best-PAS mean $0.450$ vs. Open best-PAS mean $0.428$; Mann-Whitney $p=0.91$).
- •

  H8 & H9: Temperature Ablation (Null). Variance scaling has a minimal effect on replication fidelity. Neither high temperature ($T=1.0$) nor low temperature ($T=0.1$) provided a statistically significant advantage in alignment or consistency (Wilcoxon $p=1.0$), suggesting the simulation gap is structural rather than stochastic.

### F.5 Contamination and Paradigm-Recognition Controls

Every paradigm in the suite is canonical, so training exposure is plausible by default. This appendix reports the two controls summarized in the Discussion paragraph of Section [5](https://arxiv.org/html/2602.00685v2#S5 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"): a task-rewriting control that asks whether performance survives when surface form is changed, and a recognition probe that asks whether a model’s ability to identify a study predicts its ability to simulate it.

##### Paraphrase and anonymization.

We constructed two variants of each study’s materials. *Paraphrasing* rewrites syntax and wording while preserving every entity, quantity, and response option. *Anonymization* replaces named referents (people, places, institutions) with generic descriptions while preserving the domain and narrative structure. Both preserve the experimental logic, since altering it would forfeit the human ground truth that makes the comparison a replication. We held fixed the agent specification, participant profiles, sample size, temperature, base model, evaluator, and human reference data, varying only the materials. We evaluated 4 models on 2 studies under 3 conditions with 3 seeds each, for 72 runs in total; the two studies were chosen to span the range of baseline difficulty, one near the top of the suite and one near the bottom.

Table 8: PAS under task-rewriting controls. Paraphrasing and anonymization change PAS by at most $5.2$ percentage points, on both an easy and a hard study. Values are means over 4 models $\times$ 3 seeds.

| Study | Original | Paraphrased | Anonymized |
| --- | --- | --- | --- |
| Side-effect effect [Knobe (2003)](https://arxiv.org/html/2602.00685v2#bib.bib45) | $0.968$ | $0.924$ ($-4.4$ pp) | $0.916$ ($-5.2$ pp) |
| Trust Game [Berg et al. (1995)](https://arxiv.org/html/2602.00685v2#bib.bib44) | $0.352$ | $0.321$ ($-3.1$ pp) | $0.345$ ($-0.8$ pp) |

Performance is essentially unchanged under both controls (Table [8](https://arxiv.org/html/2602.00685v2#A6.T8 "Table 8 ‣ Paraphrase and anonymization. ‣ F.5 Contamination and Paradigm-Recognition Controls ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). Notably, the effect is small in both directions of the difficulty range: the easy study does not collapse when its surface form is rewritten, and the hard study does not improve. If recognition of specific wording were driving replication, we would expect the rewritten variants to degrade substantially.

##### Recognition probe.

The rewriting control leaves open a stronger version of the objection: that agents recognize the *paradigm* rather than the wording. We therefore measured recognition directly. After administering the study materials, we asked each model whether it recognized the source and could name the original authors or paradigm, and scored the proportion of runs in which it did so correctly. If recognition drove replication, recognition rate and PAS would covary.

Table 9: Recognition is dissociated from simulation quality. Recognition rate (% of runs correctly identifying the source study) against PAS on the same study. Knowing the study is neither necessary (GPT-OSS-120b on Knobe) nor sufficient (both models on Berg) for reproducing its participants’ behavior.

|  | Knobe (2003) | | Berg (1995) | |
| --- | --- | --- | --- | --- |
| Model | Recognition | PAS | Recognition | PAS |
| DeepSeek V3.2 | $100\%$ | $0.998$ | $95\%$ | $0.293$ |
| GPT OSS 120b | $5\%$ | $0.997$ | $65\%$ | $0.353$ |

They do not covary (Table [9](https://arxiv.org/html/2602.00685v2#A6.T9 "Table 9 ‣ Recognition probe. ‣ F.5 Contamination and Paradigm-Recognition Controls ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). On Knobe’s side-effect vignette, one model identifies the source in every run and the other in $5\%$ of runs, yet both replicate the effect almost perfectly—recognition is not necessary. On the Trust Game, both models identify the paradigm most of the time and both fail to replicate it—recognition is not sufficient. The two abilities are dissociated, which is what the memorization account has to explain.

##### Scope of these controls.

These controls cover a subset of the suite rather than all 12 studies, and by construction they preserve task structure, quantities, and response options. They therefore do not exclude every channel through which prior exposure might shift a response distribution. What they do establish, together with the aggregate evidence reported in the main text—mean PAS $0.397$, $\rho\leq 0.31$, and the best-known paradigms being the worst replicated—is that recognition does not account for the observed pattern of failures. Any residual benefit from exposure would raise agent scores, making the reported agent–human gap a conservative one.

### F.6 Full Temperature Ablation

Table [10](https://arxiv.org/html/2602.00685v2#A6.T10 "Table 10 ‣ F.6 Full Temperature Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation") expands the main-text temperature ablation (Table [2](https://arxiv.org/html/2602.00685v2#S5.T2 "Table 2 ‣ 5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")) by decomposing PAS into the three pre-registered domains—Cognition (Cog.), Strategic Interaction (Stra.), and Social Psychology (Soc.)—across all four agent specifications (A1–A4) and five temperatures ($T\in\{0.1,0.3,0.5,0.7,1.0\}$) for Gemma 4 26b. Two patterns are worth noting. First, the optimal temperature is *domain-dependent*: cognition tasks favor low-to-moderate temperatures ($T\leq 0.5$), strategic-interaction tasks peak at $T=1.0$ for several specs (e.g., A1, A2, A3), and social-psychology tasks have no consistent optimum. This heterogeneity is masked when only the aggregate PAS is reported. Second, ECS varies non-monotonically with $T$ and is not aligned with PAS—e.g., A4 attains its best PAS at $T=0.3$ but its best ECS at $T=1.0$—reinforcing the divergence between the two metrics discussed in Section [5](https://arxiv.org/html/2602.00685v2#S5 "5 Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation"). Overall, no single temperature dominates across domains or specifications, indicating that temperature tuning trades off cognitive precision against strategic and social variance rather than producing a uniform improvement.

Table 10: Full Temperature Ablation (Gemma 4 26b). Per-domain and total PAS/ECS across temperatures. Within each specification, teal marks the best temperature and salmon marks the worst (per column).

| Spec | T | Cog. | Stra. | Soc. | PAS | ECS |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | 0.1 | 0.23 | 0.32 | 0.41 | 0.3193 | 0.226 |
| 0.3 | 0.25 | 0.41 | 0.35 | 0.3359 | 0.183 |
| 0.5 | 0.24 | 0.41 | 0.39 | 0.3456 | 0.214 |
| 0.7 | 0.35 | 0.21 | 0.37 | 0.3112 | 0.147 |
| 1.0 | 0.11 | 0.45 | 0.40 | 0.3213 | 0.033 |
| A2 | 0.1 | 0.24 | 0.32 | 0.41 | 0.3243 | 0.100 |
| 0.3 | 0.34 | 0.32 | 0.48 | 0.3808 | 0.251 |
| 0.5 | 0.26 | 0.32 | 0.51 | 0.3622 | 0.102 |
| 0.7 | 0.37 | 0.21 | 0.41 | 0.3304 | 0.188 |
| 1.0 | 0.23 | 0.46 | 0.37 | 0.3526 | 0.071 |
| A3 | 0.1 | 0.39 | 0.35 | 0.54 | 0.4268 | 0.184 |
| 0.3 | 0.38 | 0.32 | 0.49 | 0.3954 | 0.189 |
| 0.5 | 0.42 | 0.34 | 0.42 | 0.3904 | 0.204 |
| 0.7 | 0.37 | 0.20 | 0.40 | 0.3226 | 0.172 |
| 1.0 | 0.28 | 0.43 | 0.47 | 0.3947 | 0.153 |
| A4 | 0.1 | 0.48 | 0.47 | 0.47 | 0.4714 | 0.132 |
| 0.3 | 0.56 | 0.47 | 0.49 | 0.5056 | 0.068 |
| 0.5 | 0.51 | 0.47 | 0.48 | 0.4884 | -0.009 |
| 0.7 | 0.50 | 0.35 | 0.44 | 0.4311 | 0.072 |
| 1.0 | 0.31 | 0.38 | 0.58 | 0.4261 | 0.245 |

### F.7 Prompt Sensitivity Ablation

To verify that our metrics capture meaningful agent design differences rather than surface-level prompt variation, we conducted a prompt sensitivity ablation on the A3 (Demographic) specification. We created two paraphrased variants by rewriting all three components—role-playing framing, demographic formatting, and task instructions—while preserving informational content (Table [11](https://arxiv.org/html/2602.00685v2#A6.T11 "Table 11 ‣ F.7 Prompt Sensitivity Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). We measured within-paraphrase PAS variation (max–min range across the three A3 variants) on Study 2 ($N=256$) and Study 8 ($N=468$), selected for their moderate sample sizes (Table [12](https://arxiv.org/html/2602.00685v2#A6.T12 "Table 12 ‣ F.7 Prompt Sensitivity Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

Table 11: Prompt paraphrase design. Three A3 variants with equivalent information but different surface forms.

|  | Role frame | Demographics | Task instructions |
| --- | --- | --- | --- |
| A3 | “You are participating…” | Bullet list | “Follow the experimenter’s…” |
| Para. A | “Imagine you are a person…” | Inline | “Respond to each task…” |
| Para. B | “You have been recruited…” | Indented block | “Answer every question…” |


Table 12: Prompt sensitivity results. PAS variation from paraphrasing is negligible ($\leq 8.8$ pp) compared to cross-agent variation ($>32$ pp).

| Model | Study | PAS variation (pp) |
| --- | --- | --- |
| Mistral Nemo | Study 2 ($N{=}256$) | 2.5 |
| Mistral Nemo | Study 8 ($N{=}468$) | 1.9 |
| DeepSeek V3.2 | Study 2 ($N{=}256$) | 8.8 |
| DeepSeek V3.2 | Study 8 ($N{=}468$) | 4.1 |

Across all four model–study combinations, PAS variation from paraphrasing is consistently small ($\leq 8.8$ percentage points), while cross-agent variation (A1–A4) exceeds 32 percentage points. This confirms that inference-level conclusions are robust to prompt surface form, and that the benchmark reliably distinguishes meaningful agent design differences from superficial wording changes.

## Appendix G Broader Impacts

### G.1 Community Impact

HumanStudy-Bench is designed to turn the accumulated
archive of human-subject research into a living, reusable
resource that the broader research community can reproduce,
extend, and build on. We highlight three dimensions of impact.

Open platform for community growth.
HumanStudy-Bench is released as an open platform
that treats participant simulation as an agent design problem.
Practitioners can contribute validated published studies to
expand the benchmark, design new experiments to pilot
research hypotheses, evaluate and compare agent designs
before deployment, and systematically diagnose where gaps
to human behavior remain across diverse experimental
paradigms.

Preserving and operationalizing published experiments.
The platform reconstructs full experimental protocols from
original papers—stimuli, conditions, and statistical
procedures—and instantiates them in a reusable execution
engine, making decades of human-subject research reproducible
in simulation without repeated manual effort.

Rigorous inference-level evaluation.
By applying the original statistical pipeline to both human
and agent data, HumanStudy-Bench evaluates alignment
at the level of inferential conclusions rather than surface
outputs, aggregating heterogeneous evidence into comparable
alignment scores via PAS and ECS.

### G.2 Ethical Considerations

Demographic representativeness.
The benchmark’s ground truth is anchored by 12 original
studies plus 36 corroborating replications (3 per
hypothesis). The originals span
1946–2007 and were conducted on uniformly WEIRD (Western,
educated, industrialized, rich, democratic) samples—chiefly
US, UK, Canadian, and Dutch university students, with one
US public-park sample ([Knobe, 2003](https://arxiv.org/html/2602.00685v2#bib.bib45)) as the only
non-student exception. The replication suite extends the
temporal range to 2018 and includes limited cross-cultural
coverage (notably Henrich et al. [Henrich et al. (2001)](https://arxiv.org/html/2602.00685v2#bib.bib59) on small-scale
non-WEIRD societies for the Ultimatum/Dictator hypothesis),
but remains predominantly Western and educated. We therefore
caution against interpreting benchmark alignment as universal
human alignment, and encourage future extensions to
incorporate broader cross-cultural replications as ground
truth.

Responsible use of published materials.
All experimental materials used in HumanStudy-Bench
are derived from published, peer-reviewed studies and are
used solely for non-commercial research purposes. No new
human subjects were recruited, and no personally
identifiable information is collected or stored.

Transparency and reproducibility.
All pipeline outputs are human-verified before deployment,
and all statistical analyses are executed deterministically
using standard scientific libraries, ensuring that
evaluation results are fully reproducible and independent
of LLM stochasticity.
