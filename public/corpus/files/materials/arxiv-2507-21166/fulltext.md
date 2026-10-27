---
id: arxiv-2507-21166-text
type: material
title: 'AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation'
work_id: arxiv-2507-21166
source_url: https://arxiv.org/html/2507.21166v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул
  и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены
  при наличии.
language: original
sha256_text: 08ac2f1efac07c29bc979020049023ecd1f1ca285b94d8072d2d42d1386a854d
---

> Источник: [https://arxiv.org/html/2507.21166v1](https://arxiv.org/html/2507.21166v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation

Ren Zhuang
  
Ben Wang
  
Shuifa Sun

###### Abstract

Progress in complex reasoning is constrained by the static nature of the current training datasets. We propose structured interaction as a new scaling axis, moving beyond the prevailing paradigm of increasing model parameters. Our self-evolving framework, AGORA, enables a collaborative ensemble to achieve reasoning performance exceeding state-of-the-art monolithic systems by up to 4.45 percentage points on challenging mathematical benchmarks. This gain stems from group emergent ability—the synthesis of collective capabilities unattainable by isolated models, validating interaction as a scalable driver of intelligence. Our results position the engineering of collaborative ecosystems as a vital frontier for capability emergence.

## Introduction

While Large Language Models (LLMs) demonstrate strong performance across diverse tasks ([Guo et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib14); [Chen et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib7); [Liu et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib28)), progress in complex reasoning domains that necessitate verifiable, multi-step thought processes remains constrained. Mathematics itself, the domain that first revealed emergent abilities in LLMs ([Wei et al. 2022b](https://arxiv.org/html/2507.21166v1#bib.bib48); [Yao et al. 2023](https://arxiv.org/html/2507.21166v1#bib.bib51)), starkly illustrates the limitations of learning from static, externally-curated datasets ([Shao et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib39); [Zhuang, Wang, and Sun 2025](https://arxiv.org/html/2507.21166v1#bib.bib56); [Wang et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib46); [Ye et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib52)). This paradigm creates a paradox: we expect models to learn dynamically, yet we train them in static environments. Existing methods, from synthetic data generation ([Luo et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib29); [Li et al. 2023a](https://arxiv.org/html/2507.21166v1#bib.bib26)) to reinforcement learning ([Ouyang et al. 2022](https://arxiv.org/html/2507.21166v1#bib.bib34); [Rafailov et al. 2023](https://arxiv.org/html/2507.21166v1#bib.bib35); [Schulman et al. 2017](https://arxiv.org/html/2507.21166v1#bib.bib38)), rely on knowledge from exogenous sources. They fail to create a self-sufficient ecosystem where curriculum and capabilities co-evolve endogenously—a long-standing goal in fields like Multi-Agent Systems ([Van der Hoek and Wooldridge 2008](https://arxiv.org/html/2507.21166v1#bib.bib44)) and Artificial Life ([Langton 1997](https://arxiv.org/html/2507.21166v1#bib.bib24)).

We introduce Autopoietic Group Optimization Reasoning Ascension (AGORA), a framework that cultivates an ecosystem of heterogeneous models that co-evolve with their own dynamically generated data. As shown in Figure [1](https://arxiv.org/html/2507.21166v1#Sx1.F1 "Figure 1 ‣ Introduction ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation"), AGORA enables an ensemble of small models to achieve a collective reasoning performance that surpasses monolithic systems with substantially more parameters.

Group distillation, AGORA’s core mechanism, drives this process through a decentralized protocol where models learn from peer-generated solutions, dynamically alternating between teacher and student roles. This multidirectional knowledge flow contrasts sharply with the fixed, top-down hierarchies of traditional distillation ([Hinton, Vinyals, and Dean 2015](https://arxiv.org/html/2507.21166v1#bib.bib17); [Frosst and Hinton 2017](https://arxiv.org/html/2507.21166v1#bib.bib11); [Chen et al. 2021](https://arxiv.org/html/2507.21166v1#bib.bib8)). The system drives this evolution by coupling rapid in-context adaptation with permanent knowledge consolidation via Low-Rank Adaptation (LoRA) ([Hu et al. 2022](https://arxiv.org/html/2507.21166v1#bib.bib21)), steered by automated peer evaluation. AGORA’s significance, however, lies in the collective behaviors that emerge from this architecture, making the whole greater than the sum of its parts. This dynamic echoes the foundational principle of emergence that more is different ([Anderson 1972](https://arxiv.org/html/2507.21166v1#bib.bib3)).

Figure 1: Performance trajectory of the AGORA ensemble on MATH500. The ensemble’s performance improves over evolutionary steps, surpassing several larger, static benchmarks. The star denotes a strategic shift toward elite-peer learning, which breaks a performance plateau.

Our core contributions are:

- •

  We introduce group distillation, a novel decentralized knowledge transfer mechanism where models dynamically assume teacher-student roles, enabling multidirectional knowledge flow within the ensemble.
- •

  We define and validate group emergent ability, a phenomenon where collaborative interaction enables a collective of models to develop synergistic capabilities unattainable in isolation.
- •

  We provide empirical evidence that an AGORA ensemble of small models can significantly outperform strong, state-of-the-art self-improvement methods applied to its individual constituents.

## Related Work

AGORA represents a paradigm that unifies three distinct lines of research: knowledge transfer, emergent abilities, and data synthesis. It proposes that complex social-cognitive dynamics, rather than resource scale alone, can be the primary driver of capability enhancement.

### Knowledge Distillation and Collaborative Learning

Traditional knowledge distillation is a top-down process that transfers knowledge from a fixed, superior teacher model to a student ([Sachdeva and McAuley 2023](https://arxiv.org/html/2507.21166v1#bib.bib37); [Gou et al. 2021](https://arxiv.org/html/2507.21166v1#bib.bib13); [Hinton, Vinyals, and Dean 2015](https://arxiv.org/html/2507.21166v1#bib.bib17)). This top-down structure inherently limits the learning dynamic. While recent advances like Self-Distillation ([Zhang, Bao, and Ma 2021](https://arxiv.org/html/2507.21166v1#bib.bib54)) and Online Distillation ([Anil et al. 2018](https://arxiv.org/html/2507.21166v1#bib.bib4)) have challenged this, they still largely operate within predefined, static relationships. AGORA’s group distillation transcends this by establishing a decentralized ecosystem where teacher-student roles are dynamic. Whereas traditional methods transfer existing knowledge, Group Distillation is designed to catalyze the synthesis of novel collective capabilities that may not pre-exist in any individual member.

### Emergent Abilities in Large Language Models

Scaling LLMs has revealed emergent abilities ([Wei et al. 2022a](https://arxiv.org/html/2507.21166v1#bib.bib47); [Hoffmann et al. 2022](https://arxiv.org/html/2507.21166v1#bib.bib18))—qualitative leaps in capability unpredictable from smaller models ([Achiam et al. 2023](https://arxiv.org/html/2507.21166v1#bib.bib2); [Zhao et al. 2023](https://arxiv.org/html/2507.21166v1#bib.bib55)). These abilities, ranging from multi-step arithmetic to complex instruction-following ([Ouyang et al. 2022](https://arxiv.org/html/2507.21166v1#bib.bib34); [Wei et al. 2022b](https://arxiv.org/html/2507.21166v1#bib.bib48)), appear to arise when a model is sufficiently large, a principle investigated in scaling law studies ([Kaplan et al. 2020](https://arxiv.org/html/2507.21166v1#bib.bib23)). The current paradigm assumes this emergence is driven by scaling a single, monolithic model. AGORA challenges this single-source assumption, proposing that emergence can also be driven by interaction.

### Data Synthesis

Leading approaches for mathematical reasoning rely on sophisticated forms of data synthesis. These range from systematically augmenting existing problems, as explored by MuggleMath ([Li et al. 2023a](https://arxiv.org/html/2507.21166v1#bib.bib26)), to evolving instructions based on predefined heuristics for complexity and novelty, as seen in DART ([Tong et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib43)) and MAGPIE ([Xu et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib49)). Other techniques synthesize training data from a model’s own outputs. For instance, some bootstrap from solutions verified against ground-truth answers, a technique used in the STaR framework ([Zelikman et al. 2022](https://arxiv.org/html/2507.21166v1#bib.bib53)). Another approach, used by SGDS ([Li et al. 2023b](https://arxiv.org/html/2507.21166v1#bib.bib27)), filters for a high-difficulty subset based on a predefined metric. While these represent powerful data generation pipelines, they differ fundamentally from AGORA. Unlike methods that treat data generation as a distinct, offline step, AGORA integrates it as a dynamic part of the learning loop. Crucially, because its curriculum emerges endogenously from collective judgment rather than from external heuristics, AGORA internalizes the very process of defining what constitutes a valuable learning experience.

## The Architecture of AGORA

Figure 2: The AGORA architecture. A four-module, dual-loop architecture that facilitates two core processes: Challenge Generation (I), Solution Formulation (II), Quality Evaluation (III), and Model Evolution (IV). The architecture facilitates group distillation for knowledge consolidation and uses an elite history of peer solutions to incentivize group emergence.

AGORA’s architecture is built on three core dynamics: collaborative genesis, endogenous evaluation, and concurrent evolution. Together, these dynamics govern how models generate problems, provide peer feedback, and internalize results. This structure transforms a static ensemble into a self-improving system driven by its own collaborative discourse.

### Collaborative Genesis

This dynamic generates a continuous stream of problems and solutions through the interplay of a problem-generating Q-Group and a problem-solving R-Group, with roles detailed in Figure [2](https://arxiv.org/html/2507.21166v1#Sx3.F2 "Figure 2 ‣ The Architecture of AGORA ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation").

#### Challenge Generation

The Q-Group adaptively adjusts curriculum difficulty through a dual-loop feedback mechanism. The inner loop adjusts the difficulty parameter $d\_{t}$ based on the ensemble’s recent pass@1 rate on generated problems, $\mathcal{V}\_{t}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$d\_{t+1}=d\_{t}+\alpha\cdot(\mathcal{V}\_{t}-\mathcal{V}\_{\text{target}})$$ |  | (1) |

where the learning rate $\alpha$ is a small constant. The target pass rate $\mathcal{V}\_{\text{target}}$ is not fixed since the system algorithmically updates it to remain slightly above the moving average of the ensemble’s recent performance in an outer loop. This design prevents stagnation by ensuring the collective constantly strives to surpass its own baseline.

#### Peer-based Reasoning

The R-Group is where Group Distillation occurs. Instead of learning from a fixed teacher, models learn from a curated set of exemplary solutions and their accompanying self-explanations, generated by top-performing peers. Guided by In-Context Learning (ICL) ([Brown et al. 2020](https://arxiv.org/html/2507.21166v1#bib.bib6)), models learn from these peer-generated examples, creating a decentralized mentorship network that enables the multi-directional flow of effective problem-solving strategies.

### Endogenous Evaluation

This dynamic transforms raw model outputs into feedback signals for evolution by judging their correctness and quality. By internalizing judgment, AGORA achieves autonomy and serves as the arbiter for group distillation, ensuring only high-quality knowledge is propagated.

#### Unanimous Consensus for Correctness

Instead of relying on ground-truth answers, the system establishes correctness via a peer-verification protocol. For a given solution $o\_{k}$, every other peer model $\pi\_{j}$ (where $j\neq k$) acts as a verifier. Each verifier is prompted to analyze the reasoning process of $o\_{k}$ and determine its logical soundness. A solution is considered correct only if it achieves unanimous consensus, requiring independent validation of its reasoning path from every other peer model. This process prevents the propagation of plausible but flawed reasoning.

#### Quality Recognition

For solutions verified as correct, the system evaluates reasoning quality through peer review. All models in the R-Group are prompted to vote on pairs of correct solutions to determine which demonstrates a superior reasoning path. These votes update the authoring models’ TrueSkill ratings ([Herbrich, Minka, and Graepel 2006](https://arxiv.org/html/2507.21166v1#bib.bib16)). This mechanism enables the ensemble to autonomously define a collective value function for what constitutes excellent reasoning.

#### External Anchoring

A purely endogenous system risks relativistic drift, where internal standards become detached from objective quality. To ground its metrics and mitigate this risk, the system is periodically calibrated against an external validation set. To maintain internal homeostasis, the system seeks to minimize its \*internal surprise\* $\mathcal{F}\_{t}$, a heuristic designed to close the gap between recent peak performance ($\mu^{\*}\_{t}$) and current average performance ($\bar{\mu}\_{t}$):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{F}\_{t}=\left(\frac{\mu^{\*}\_{t}-\bar{\mu}\_{t}}{\mu^{\*}\_{t}+\epsilon}\right)^{2}$$ |  | (2) |

where $\epsilon$ is a small constant to prevent division by zero. The TrueSkill ratings are associated with the authoring models $\pi\_{k}$. By minimizing this value, the system is driven to improve its average performance to match its peak potential.

### Concurrent Evolution

This dynamic uses evaluation signals to drive both short-term ephemeral adaptation and long-term parametric learning, ensuring the rapid application and permanent internalization of collective insights.

#### Ephemeral Adaptation

Immediate strategy adaptation occurs through ICL. A history manager curates a collection of elite historical interactions, $\mathcal{H}\_{t}=\text{Top}\_{k}\{h\in\mathcal{H}\_{t-1}\cup\{I\_{t}\}\}$, based on their peer-assessed quality scores. This elite history, enriched with self-explanations from winning models, guides the R-Group’s behavior via few-shot prompting for rapid tactical adjustments.

#### Parametric Evolution

Parametric Evolution internalizes successful strategies via asynchronous LoRA fine-tuning. To populate the fine-tuning buffer $\mathcal{B}\_{hq}$, the Endogenous Evaluation system acts as a filter, selecting question-solution pairs $(q,o)$ that meet a high standard of peer-assessed quality and correctness. The optimization objective for each model $\pi\_{k}$ is to minimize the Supervised Fine-Tuning (SFT) loss over this curated buffer:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{L}\_{\text{SFT}}(\theta\_{k})=\mathbb{E}\_{(q,o)\sim\mathcal{B}\_{hq}}\left[-\sum\_{t=1}^{|o|}\log P\_{\theta\_{k}}(o\_{t}|q,o\_{<t})\right]$$ |  | (3) |

where $P\_{\theta\_{k}}(o\_{t}|q,o\_{<t})$ is the probability of predicting the correct token. Minimizing this loss teaches models to replicate the collective’s validated, high-quality reasoning paths.

While the SFT loss is the per-agent optimization target, the system’s global objective, $\mathcal{J}\_{\text{AGORA}}$, conceptualizes the overarching goal. For a model $\pi\_{k}$, this objective is to maximize the expected log-likelihood of producing a high-quality solution over interaction rounds. An interaction round consists of a challenge $q\sim Q\_{G}$ and responses $\{o\_{i}\}\sim\{\pi\_{i}\}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{J}\_{\text{AGORA}}(\theta\_{k})=\mathbb{E}\_{q\sim Q\_{G},\{o\_{i}\}\sim\{\pi\_{i}\}}\\ \left[\mathbf{I}(q,o\_{k})\cdot\log P\_{\theta\_{k}}(o\_{k}|q)\right]$$ |  | (4) |

The indicator function $\mathbf{I}(q,o\_{k})$ is 1 if $o\_{k}$ passes both the Unanimous Consensus check and a quality filter requiring the authoring model’s TrueSkill rating $\mu\_{k}$ to exceed the ensemble average $\bar{\mu}\_{t}$, otherwise it is 0. This objective captures the full AGORA loop, compelling each model to produce outputs that align with the group’s emergent standards of truth and quality.

## Experiments

Our experiments investigate two primary questions: Does the AGORA framework enable an ensemble of small models to outperform established self-improvement methods? Are these performance gains a direct result of the collaborative process, or an effect replicable by isolated self-improvement? To answer these questions, we first benchmark AGORA against state-of-the-art baselines, conduct an ablation study of its core components, and finally, run a controlled experiment to isolate the effects of collaboration.

### Experimental Setup

#### Models

We compose the AGORA ensemble from four diverse models: BitCPM4 ([Team et al. 2025b](https://arxiv.org/html/2507.21166v1#bib.bib41)), Llama3.2 ([Dubey et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib10)), Qwen3 ([Yang et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib50)), Phi-4-mini ([Abouelenin et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib1)), and Gemma3 ([Team et al. 2025a](https://arxiv.org/html/2507.21166v1#bib.bib40)). We hypothesize that architectural diversity provides a richer initial pool of problem-solving strategies, mitigating the risk of premature convergence. For performance context, we compare our results against several large-scale systems, including GPT-4o ([Hurst et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib22)), Claude-3.5-Sonnet ([Anthropic 2024](https://arxiv.org/html/2507.21166v1#bib.bib5)), Qwen2.5-72B ([Team 2024](https://arxiv.org/html/2507.21166v1#bib.bib42)), and Llama-4-Scout-17B ([MAA 2025](https://arxiv.org/html/2507.21166v1#bib.bib31)).

#### Benchmarks

We evaluate performance on the standard test sets of four challenging mathematical reasoning benchmarks: MATH ([Hendrycks et al. 2021](https://arxiv.org/html/2507.21166v1#bib.bib15)), GSM8K ([Cobbe et al. 2021](https://arxiv.org/html/2507.21166v1#bib.bib9)), GPQA Diamond ([Rein et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib36)), and AIME24 ([MAA 2024](https://arxiv.org/html/2507.21166v1#bib.bib30)).

#### Baselines

To ensure a fair comparison, we applied several state-of-the-art self-improvement methods to each of the base models individually. These baselines include STaR ([Zelikman et al. 2022](https://arxiv.org/html/2507.21166v1#bib.bib53)), SGDS ([Li et al. 2023b](https://arxiv.org/html/2507.21166v1#bib.bib27)), MAGPIE ([Xu et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib49)), GRA ([Gao et al. 2025](https://arxiv.org/html/2507.21166v1#bib.bib12)), MuggleMath ([Li et al. 2023a](https://arxiv.org/html/2507.21166v1#bib.bib26)), and DART ([Tong et al. 2024](https://arxiv.org/html/2507.21166v1#bib.bib43)). Where possible, we used the official public implementations.

#### Implementation Details

We conducted all experiments on 3 NVIDIA RTX 4090 GPU. The ICL module uses an elite history of the top three past interactions. LoRA fine-tuning is triggered when the high-quality data buffer reaches 1024 samples, using a configuration of $r=16,\alpha=32$, and dropout of $0.05$. Adaptive difficulty begins at $1.0$ and is adjusted with a rate of $0.05$. Specifically, we use a sampling temperature of $0.6$ and a top-p of $0.95$. All benchmark evaluations are reported using pass@1 with Chain-of-Thought (CoT) prompting ([Wei et al. 2022b](https://arxiv.org/html/2507.21166v1#bib.bib48)). The general pass@k metric is calculated as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{pass@k}=\frac{1}{k}\sum\_{i=1}^{k}p\_{i},$$ |  | (5) |

where $p\_{i}\in\{0,1\}$ denotes the correctness of the response for the $i$-th problem. In our experiments, we use $k=1$, evaluating a single generated response per problem.

### Analytic Results

Our analysis dissects the experimental results validating AGORA’s effectiveness and examining the underlying mechanisms driving its performance.

| Method | MATH500 | GSM8K | GPQA | AIME2024 | Avg. |
| --- | --- | --- | --- | --- | --- |
| BitCPM4-1b | | | | | |
| Baseline | 34.0 | 60.8 | 28.5 | 3.0 | 31.6 |
| STaR | 40.2 | 70.3 | 29.1 | 3.1 | 35.7 |
| SGDS | 54.5 | 78.1 | 37.8 | 3.8 | 43.6 |
| MAGPIE | 39.8 | 72.4 | 40.1 | 3.0 | 38.8 |
| GRA | 51.0 | 76.5 | 32.5 | 4.2 | 41.1 |
| MuggleMath | 46.5 | 79.5 | 30.2 | 3.4 | 39.9 |
| DART | 57.1 | 81.2 | 34.5 | 5.0 | 44.5 |
| AGORA | 65.4 | 85.5 | 33.7 | 4.9 | 47.4 |
| Qwen3-1.7b | | | | | |
| Baseline | 43.5 | 68.5 | 32.0 | 3.8 | 37.0 |
| STaR | 51.3 | 76.8 | 32.8 | 4.0 | 41.2 |
| SGDS | 64.0 | 84.2 | 41.5 | 5.0 | 48.7 |
| MAGPIE | 49.5 | 78.0 | 43.2 | 3.9 | 43.7 |
| GRA | 61.8 | 82.5 | 36.5 | 5.5 | 46.6 |
| MuggleMath | 58.5 | 85.1 | 34.5 | 4.4 | 45.6 |
| DART | 66.2 | 87.4 | 38.0 | 6.1 | 49.4 |
| AGORA | 76.8 | 90.3 | 49.1 | 7.5 | 55.9 |
| Phi-4-mini | | | | | |
| Baseline | 62.8 | 75.0 | 38.5 | 5.5 | 45.5 |
| STaR | 66.5 | 80.5 | 39.0 | 5.6 | 47.9 |
| SGDS | 70.8 | 85.5 | 44.0 | 6.2 | 51.6 |
| MAGPIE | 65.5 | 82.1 | 45.5 | 5.5 | 49.7 |
| GRA | 70.1 | 84.0 | 41.0 | 6.5 | 50.4 |
| MuggleMath | 68.0 | 84.8 | 40.1 | 5.8 | 49.7 |
| DART | 71.5 | 86.5 | 42.5 | 7.0 | 51.9 |
| AGORA | 76.3 | 89.2 | 47.4 | 8.1 | 55.3 |
| Gemma3-4b | | | | | |
| Baseline | 75.6 | 82.5 | 42.0 | 7.0 | 51.8 |
| STaR | 77.2 | 85.0 | 42.4 | 7.1 | 52.9 |
| SGDS | 80.1 | 87.0 | 46.5 | 7.9 | 55.4 |
| MAGPIE | 76.5 | 84.5 | 48.1 | 7.0 | 54.0 |
| GRA | 79.5 | 86.8 | 44.0 | 8.0 | 54.6 |
| MuggleMath | 77.8 | 86.5 | 42.8 | 7.2 | 53.6 |
| DART | 80.5 | 88.2 | 45.0 | 8.5 | 55.6 |
| AGORA | 83.9 | 91.8 | 56.5 | 10.2 | 60.6 |

Table 1: Main performance comparison on mathematical reasoning benchmarks. AGORA consistently and substantially outperforms both the original base models and several state-of-the-art self-improvement methods applied to them. Highest and second-best scores in each column are marked in bold and underlined, respectively.

#### Overall Performance and Evolutionary Dynamics

As shown in Table [1](https://arxiv.org/html/2507.21166v1#Sx4.T1 "Table 1 ‣ Analytic Results ‣ Experiments ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation"), applying the AGORA framework consistently yields substantial performance gains across all base models and benchmarks. For instance, AGORA improves the average score of Qwen3-1.7b from a 37.0% baseline to 55.9%, an absolute improvement of 18.9%, surpassing even the baseline performance of the much stronger Gemma3-4b model. This demonstrates that the framework provides a powerful and generalizable enhancement, not tied to a specific model architecture. The strong performance on benchmarks like GPQA and AIME24 is particularly noteworthy, confirming that AGORA cultivates transferable reasoning principles rather than memorizing its self-generated curriculum.

To understand the source of these gains, we examine the system’s internal evolutionary dynamics. Figure [3](https://arxiv.org/html/2507.21166v1#Sx4.F3 "Figure 3 ‣ Overall Performance and Evolutionary Dynamics ‣ Analytic Results ‣ Experiments ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation") reveals a tight positive correlation between the ensemble’s average performance and the difficulty of the problems it generates. This indicates a healthy, adaptive learning process where the system appropriately challenges itself as it grows, avoiding both stagnation and overly difficult tasks that would yield no learning signal.

Figure 3: Adaptive curriculum dynamics on MATH500. As the ensemble’s performance increases, the system automatically generates more challenging problems which reflected in longer response times, ensuring a state of continuous improvement.

Furthermore, Figure [4](https://arxiv.org/html/2507.21166v1#Sx4.F4 "Figure 4 ‣ Overall Performance and Evolutionary Dynamics ‣ Analytic Results ‣ Experiments ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation") highlights a crucial property of the system: accelerating learning efficiency. The plot reveals two key trends: the yield of high-quality data generated per cycle trends upwards, even as the system’s difficulty and problem complexity increases. In parallel, the time required to fill the 1024-sample buffer for a LoRA update consistently decreases. Consequently, the ensemble learns to solve harder problems with increasing proficiency and reliability. The collective becomes a more efficient learner, a hallmark of sophisticated intelligence.

Figure 4: Superlinear Learning Efficiency. The AGORA ensemble becomes a more efficient learner over time: as system difficulty rises, the yield of high-quality data per cycle increases while the time to generate it decreases.

#### Ablation Study

To understand the contribution of each component to the framework’s overall efficacy, we conducted the systematic ablation study detailed in Table [2](https://arxiv.org/html/2507.21166v1#Sx4.T2 "Table 2 ‣ Impact of Ensemble Composition and Diversity ‣ Experiments ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation"). Each configuration was run five times with different random seeds to ensure robustness, and we report the mean and standard deviation of the average scores. The results reveal a clear synergistic effect indicating that the fully integrated system outperforms any partial configuration, confirming that its strength lies in the holistic design.

The most critical component is our novel process-based peer verification. Its removal causes a severe performance degradation with a 17% drop on average, reducing the system nearly to baseline levels. This finding provides strong evidence that a robust, decentralized mechanism for establishing correctness without an external oracle is the foundational element of the collective’s success. Without it, the system is unable to prevent the propagation of plausible but flawed reasoning. Other components are also integral. Removing LoRA-based parametric updates results in the next-largest performance drop, demonstrating the importance of permanently consolidating learned strategies. The peer review for reasoning style and the in-context learning from top examples also provide significant boosts, confirming that learning how to reason well is a distinct, valuable signal beyond simply being correct.

Figure 5: Comparing AGORA ensembles on MATH500. While homogeneous groups of 1B and 4B models improve, the heterogeneous mixed group achieves the highest absolute performance gain, highlighting the benefit of cognitive diversity.

### Impact of Ensemble Composition and Diversity

| Method Variant | MATH500 | GSM8K | GPQA | AIME2024 | Avg. |
| --- | --- | --- | --- | --- | --- |
| AGORA | 75.6±1.5 | 89.2±1.2 | 46.7±2.0 | 7.7±0.8 | 54.8 |
| w/o Valid Vote | 44.3±5.5 | 65.3±6.0 | 37.5±4.5 | 4.1±2.0 | 37.8 |
| w/o LoRA | 58.2±4.8 | 78.5±4.5 | 40.2±4.0 | 5.2±1.5 | 45.5 |
| w/o Quality Vote | 62.9±4.0 | 80.1±3.5 | 41.8±3.8 | 6.5±1.2 | 47.8 |
| w/o Elite ICL | 66.4±3.5 | 84.1±3.0 | 41.2±3.5 | 6.8±1.1 | 49.6 |
| w/o Random Q-Gen | 73.3±2.8 | 87.5±2.5 | 43.0±3.0 | 7.4±1.0 | 52.8 |
| w/o Difficult Control | 72.6±2.5 | 88.2±2.0 | 45.9±2.8 | 7.5±1.0 | 53.6 |
| w/o External Anchor | 72.0±2.2 | 88.0±1.8 | 45.8±2.5 | 7.5±0.9 | 53.3 |
| w/o Explanation | 73.8±2.0 | 88.5±1.6 | 45.2±2.4 | 7.6±0.9 | 53.8 |
| w/o Dynamic Strategy | 73.1±1.8 | 88.7±1.5 | 46.4±2.2 | 7.6±0.8 | 54.0 |
| w/o FEM | 74.6±1.7 | 88.8±1.4 | 46.3±2.1 | 7.6±0.8 | 54.3 |

Table 2: Ablation study of AGORA components. The results quantify the impact of removing each component, revealing a strong synergistic effect where the full system outperforms any partial configuration.

To understand the impact of ensemble composition on the framework’s dynamics, we tested the performance of three distinct configurations. These included a homogeneous 1B Group of BitCPM4-1b, Llama3.2-1b, and Gemma3-1b, a homogeneous 4B Group of Gemma3-4b, Qwen3-4b, and Phi-4-mini, and the heterogeneous Mixed Group from our main results. The accompanying figure shows that while all groups improved significantly, the heterogeneous Mixed Group achieved the largest absolute performance gain of +21.7%, surpassing even the stronger 4B Group’s gain of +19.8%. This result indicates that cognitive diversity is a key catalyst for emergence, as a mix of model architectures and scales creates a more dynamic and effective learning ecosystem than a homogeneous grouping, maximizing the benefits of collaborative distillation.

### Isolating the Effects of Collaborative Learning

A central question remains: is the observed group emergent ability a product of the collaborative process itself, or could it be replicated by simply providing an individual learner with higher-quality data? To deconfound these factors, we designed a controlled experiment contrasting two evolutionary pathways. Both pathways began with identical models and resources, starting from the same large, uncurated pool of problems (we employed the MATH500 dataset).

This design creates a fundamental asymmetry in learning opportunities. The AGORA models are exposed to a rich, diverse set of high-quality reasoning paths generated by their peers. In contrast, the isolated models are confined to learning only from their own successful reasoning attempts. To provide a strong baseline, each isolated model used self-consistency to validate its answers, generating 32 solutions to a problem and learning from its own reasoning path only if a strict majority of generated responses agreed on the final answer. This method, while powerful, creates an intrinsic echo chamber, reinforcing a model’s existing biases and preventing the discovery of alternative, superior problem-solving strategies.

The results of this controlled experiment, shown in Figure [6](https://arxiv.org/html/2507.21166v1#Sx4.F6 "Figure 6 ‣ Isolating the Effects of Collaborative Learning ‣ Experiments ‣ AGORA: Incentivizing Group Emergence Capability in LLMs via Group Distillation"), are unambiguous and confirm our hypothesis. On the in-domain MATH dataset, the AGORA ensemble establishes a clear performance advantage. This performance gap widens significantly on the out-of-domain benchmarks. On GPQA, for example, the AGORA ensemble outperforms the isolated baseline by a large margin across all models, demonstrating a dramatic improvement in generalization. This provides powerful evidence that the benefit of AGORA is not merely better data selection. Collaborative, peer-validated discourse cultivates a more fundamental, robust, and generalizable reasoning faculty that isolated self-improvement, even when powerful, cannot replicate.

Figure 6: Isolating the effect of collaborative learning. Comparison of the full AGORA ensemble against an Isolated Evolution baseline, where models learn only from their own successes. The consistent performance gap demonstrates that the collaborative process itself cultivates a more robust and generalizable reasoning capability.

## Discussion

An interacting ensemble of small models that, through engineered collaboration, develops reasoning capabilities superior to larger, monolithic systems has profound implications. It suggests that interaction is a new scaling axis for intelligence, gives rise to a self-organizing cognitive order, reframes the goal of AI development from building monolithic minds to computational societies, and redefines the relationship between engineering and emergence.

### Interaction is Scaling Law

Our work presents a compelling alternative to the dominant scaling paradigm. Rather than relying solely on increasing parameter counts, AGORA leverages group distillation to catalyze group emergent ability. This suggests that interaction itself is a scalable resource, and that the design of interaction protocols can be a complementary scaling axis where the system’s incentive structures, not just the power of its individual nodes, drive capability growth. AGORA thus provides an empirical realization of long-standing concepts from distributed AI and complex adaptive systems, which have posited that sophisticated collective behaviors can arise from simple, local interactions ([Holland 1992](https://arxiv.org/html/2507.21166v1#bib.bib19); [Mitchell 2009](https://arxiv.org/html/2507.21166v1#bib.bib33)).

### The Emergence of Cognitive Order

The success of AGORA hinges on a self-organizing cognitive order that effectively balances novelty generation with rigorous quality control. On one hand, the co-evolutionary dynamic between the challenge-generating and solution-providing groups creates a persistent performance pressure, compelling the ensemble to continuously venture beyond its current capabilities. On the other, the endogenous evaluation mechanism enforces a strict standard for correctness and develops an emergent, shared standard for quality. This balance is critical: the ensemble’s superior performance on OOD generalization tasks implies that it learns transferable principles of reasoning—a hallmark of genuine understanding—rather than merely overfitting to its own generated data.

### From Monolithic Minds to Computational Societies

This self-regulating order challenges the conceptualization of intelligent systems. The quest for AI has long been guided by two paradigms: AI as a singular mind and AI as a society of agents ([Minsky 1986](https://arxiv.org/html/2507.21166v1#bib.bib32)). While the scaling paradigm ably demonstrates the first, our work advances the second. Our finding that the ensemble develops capabilities that its members cannot acquire in isolation is direct evidence that intelligence here is not a static individual property but an emergent property of the system’s organization ([Verburg, Eickhout, and Van Meijl 2008](https://arxiv.org/html/2507.21166v1#bib.bib45)). This perspective elevates ecosystem design—the explicit engineering of interaction protocols and incentive structures—to a research frontier as vital as model architecture design. It shifts the research focus from scaling singular models to designing intelligent ecosystems.

### Engineering Emergence

AGORA’s foundational insight concerns the relationship between engineering and emergence. In natural systems, emergence is typically an intrinsic and observed property arising from complex interactions ([Holland 1995](https://arxiv.org/html/2507.21166v1#bib.bib20)), whereas in artificial systems, it is more often a deliberate design objective, achieved by carefully architecting the system’s components and their rules of interaction ([LeCun, Bengio, and Hinton 2015](https://arxiv.org/html/2507.21166v1#bib.bib25)). The framework of AGORA was designed to create a carefully controlled environment where the conditions for emergence are met. The specific, novel reasoning pathways discovered by the ensemble are not, themselves, the product of direct design. The system’s simple, local rules—peer verification, adaptive difficulty, strategic adjustments—are, however, a direct consequence of the environment we constructed. This reveals that sophisticated engineering is not an alternative to emergence, but rather the necessary scaffolding to make it observable, repeatable, and ultimately, steerable.

### Limitations and Future Horizons

A primary limitation is that AGORA amplifies the foundational capabilities of its constituent models. It does not create novel skills from nothing. Consequently, emergent outcomes are ultimately constrained by the initial capabilities of the ensemble members. While mathematics served as an ideal testbed, we hypothesize that the core process-based validation will prove effective in other domains with verifiable reasoning paths, such as code generation and theorem proving. Such efforts will be critical steps toward a general science of designing and steering artificial collective intelligence.

## Conclusion

We demonstrate that through engineered collaboration and group distillation, an ensemble of small language models can achieve reasoning capabilities that surpass monolithic systems with substantially more parameters. This success stems from the emergence of a collective intelligence, where the collaborative process cultivates a robust and generalizable reasoning faculty unattainable by the same models in isolation. Our work thus signals a paradigm shift away from scaling isolated models and toward designing intelligent ecosystems, where interaction itself is the primary catalyst for emergent intelligence.

## References

- Abouelenin et al. (2025)

  Abouelenin, A.; Ashfaq, A.; Atkinson, A.; Awadalla, H.; Bach, N.; Bao, J.; Benhaim, A.; Cai, M.; Chaudhary, V.; Chen, C.; et al. 2025.
  Phi-4-mini technical report: Compact yet powerful multimodal language models via mixture-of-loras.
  *arXiv preprint arXiv:2503.01743*.
- Achiam et al. (2023)

  Achiam, J.; Adler, S.; Agarwal, S.; Ahmad, L.; Akkaya, I.; Aleman, F. L.; Almeida, D.; Altenschmidt, J.; Altman, S.; Anadkat, S.; et al. 2023.
  Gpt-4 technical report.
  *arXiv preprint arXiv:2303.08774*.
- Anderson (1972)

  Anderson, P. W. 1972.
  More Is Different: Broken symmetry and the nature of the hierarchical structure of science.
  *Science*, 177(4047): 393–396.
- Anil et al. (2018)

  Anil, R.; Pereyra, G.; Passos, A.; Ormandi, R.; Dahl, G. E.; and Hinton, G. E. 2018.
  Large scale distributed neural network training through online distillation.
  *arXiv preprint arXiv:1804.03235*.
- Anthropic (2024)

  Anthropic, A. 2024.
  The claude 3 model family: Opus, sonnet, haiku.
  *Claude-3 Model Card*, 1: 1.
- Brown et al. (2020)

  Brown, T.; Mann, B.; Ryder, N.; Subbiah, M.; Kaplan, J. D.; Dhariwal, P.; Neelakantan, A.; Shyam, P.; Sastry, G.; Askell, A.; et al. 2020.
  Language models are few-shot learners.
  *Advances in neural information processing systems*, 33: 1877–1901.
- Chen et al. (2025)

  Chen, A.; Li, A.; Gong, B.; Jiang, B.; Fei, B.; Yang, B.; Shan, B.; Yu, C.; Wang, C.; Zhu, C.; et al. 2025.
  MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention.
  *arXiv preprint arXiv:2506.13585*.
- Chen et al. (2021)

  Chen, P.; Liu, S.; Zhao, H.; and Jia, J. 2021.
  Distilling knowledge via knowledge review.
  In *Proceedings of the IEEE/CVF conference on computer vision and pattern recognition*, 5008–5017.
- Cobbe et al. (2021)

  Cobbe, K.; Kosaraju, V.; Bavarian, M.; Chen, M.; Jun, H.; Kaiser, L.; Plappert, M.; Tworek, J.; Hilton, J.; Nakano, R.; et al. 2021.
  Training verifiers to solve math word problems.
  *arXiv preprint arXiv:2110.14168*.
- Dubey et al. (2024)

  Dubey, A.; Jauhri, A.; Pandey, A.; Kadian, A.; Al-Dahle, A.; Letman, A.; Mathur, A.; Schelten, A.; Yang, A.; Fan, A.; et al. 2024.
  The llama 3 herd of models.
  *arXiv e-prints*, arXiv–2407.
- Frosst and Hinton (2017)

  Frosst, N.; and Hinton, G. 2017.
  Distilling a neural network into a soft decision tree.
  *arXiv preprint arXiv:1711.09784*.
- Gao et al. (2025)

  Gao, X.; Pei, Q.; Tang, Z.; Li, Y.; Lin, H.; Wu, J.; Wu, L.; and He, C. 2025.
  A Strategic Coordination Framework of Small LLMs Matches Large LLMs in Data Synthesis.
  *arXiv preprint arXiv:2504.12322*.
- Gou et al. (2021)

  Gou, J.; Yu, B.; Maybank, S. J.; and Tao, D. 2021.
  Knowledge distillation: A survey.
  *International Journal of Computer Vision*, 129(6): 1789–1819.
- Guo et al. (2025)

  Guo, D.; Yang, D.; Zhang, H.; Song, J.; Zhang, R.; Xu, R.; Zhu, Q.; Ma, S.; Wang, P.; Bi, X.; et al. 2025.
  Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning.
  *arXiv preprint arXiv:2501.12948*.
- Hendrycks et al. (2021)

  Hendrycks, D.; Burns, C.; Kadavath, S.; Arora, A.; Basart, S.; Tang, E.; Song, D.; and Steinhardt, J. 2021.
  Measuring mathematical problem solving with the math dataset.
  *arXiv preprint arXiv:2103.03874*.
- Herbrich, Minka, and Graepel (2006)

  Herbrich, R.; Minka, T.; and Graepel, T. 2006.
  TrueSkill™: a Bayesian skill rating system.
  *Advances in neural information processing systems*, 19.
- Hinton, Vinyals, and Dean (2015)

  Hinton, G.; Vinyals, O.; and Dean, J. 2015.
  Distilling the knowledge in a neural network.
  *arXiv preprint arXiv:1503.02531*.
- Hoffmann et al. (2022)

  Hoffmann, J.; Borgeaud, S.; Mensch, A.; Buchatskaya, E.; Cai, T.; Rutherford, E.; Casas, D. d. L.; Hendricks, L. A.; Welbl, J.; Clark, A.; et al. 2022.
  Training compute-optimal large language models.
  *arXiv preprint arXiv:2203.15556*.
- Holland (1992)

  Holland, J. H. 1992.
  Complex adaptive systems.
  *Daedalus*, 121(1): 17–30.
- Holland (1995)

  Holland, J. H. 1995.
  Hidden order.
  *Business Week-Domestic Edition*, 21: 93–136.
- Hu et al. (2022)

  Hu, E. J.; Shen, Y.; Wallis, P.; Allen-Zhu, Z.; Li, Y.; Wang, S.; Wang, L.; Chen, W.; et al. 2022.
  Lora: Low-rank adaptation of large language models.
  *ICLR*, 1(2): 3.
- Hurst et al. (2024)

  Hurst, A.; Lerer, A.; Goucher, A. P.; Perelman, A.; Ramesh, A.; Clark, A.; Ostrow, A.; Welihinda, A.; Hayes, A.; Radford, A.; et al. 2024.
  Gpt-4o system card.
  *arXiv preprint arXiv:2410.21276*.
- Kaplan et al. (2020)

  Kaplan, J.; McCandlish, S.; Henighan, T.; Brown, T. B.; Chess, B.; Child, R.; Gray, S.; Radford, A.; Wu, J.; and Amodei, D. 2020.
  Scaling laws for neural language models.
  *arXiv preprint arXiv:2001.08361*.
- Langton (1997)

  Langton, C. G. 1997.
  Artificial life: An overview.
- LeCun, Bengio, and Hinton (2015)

  LeCun, Y.; Bengio, Y.; and Hinton, G. 2015.
  Deep learning.
  *nature*, 521(7553): 436–444.
- Li et al. (2023a)

  Li, C.; Yuan, Z.; Yuan, H.; Dong, G.; Lu, K.; Wu, J.; Tan, C.; Wang, X.; and Zhou, C. 2023a.
  Mugglemath: Assessing the impact of query and response augmentation on math reasoning.
  *arXiv preprint arXiv:2310.05506*.
- Li et al. (2023b)

  Li, M.; Zhang, Y.; Li, Z.; Chen, J.; Chen, L.; Cheng, N.; Wang, J.; Zhou, T.; and Xiao, J. 2023b.
  From quantity to quality: Boosting llm performance with self-guided data selection for instruction tuning.
  *arXiv preprint arXiv:2308.12032*.
- Liu et al. (2024)

  Liu, A.; Feng, B.; Xue, B.; Wang, B.; Wu, B.; Lu, C.; Zhao, C.; Deng, C.; Zhang, C.; Ruan, C.; et al. 2024.
  Deepseek-v3 technical report.
  *arXiv preprint arXiv:2412.19437*.
- Luo et al. (2025)

  Luo, H.; Sun, Q.; Xu, C.; Zhao, P.; Lou, J.-G.; Tao, C.; Geng, X.; Lin, Q.; Chen, S.; Tang, Y.; and Zhang, D. 2025.
  WizardMath: Empowering Mathematical Reasoning for Large Language Models via Reinforced Evol-Instruct.
  In *The Thirteenth International Conference on Learning Representations*.
- MAA (2024)

  MAA. 2024.
  American Invitational Mathematics Examination - AIME.
  In *American Invitational Mathematics Examination - AIME*.
- MAA (2025)

  MAA. 2025.
  The Llama 4 herd: The beginning of a new era of natively multimodal AI innovation.
- Minsky (1986)

  Minsky, M. 1986.
  *Society of mind*.
  Simon and Schuster.
- Mitchell (2009)

  Mitchell, M. 2009.
  *Complexity: A guided tour*.
  Oxford university press.
- Ouyang et al. (2022)

  Ouyang, L.; Wu, J.; Jiang, X.; Almeida, D.; Wainwright, C.; Mishkin, P.; Zhang, C.; Agarwal, S.; Slama, K.; Ray, A.; et al. 2022.
  Training language models to follow instructions with human feedback.
  *Advances in neural information processing systems*, 35: 27730–27744.
- Rafailov et al. (2023)

  Rafailov, R.; Sharma, A.; Mitchell, E.; Manning, C. D.; Ermon, S.; and Finn, C. 2023.
  Direct preference optimization: Your language model is secretly a reward model.
  *Advances in Neural Information Processing Systems*, 36: 53728–53741.
- Rein et al. (2024)

  Rein, D.; Hou, B. L.; Stickland, A. C.; Petty, J.; Pang, R. Y.; Dirani, J.; Michael, J.; and Bowman, S. R. 2024.
  Gpqa: A graduate-level google-proof q&a benchmark.
  In *First Conference on Language Modeling*.
- Sachdeva and McAuley (2023)

  Sachdeva, N.; and McAuley, J. 2023.
  Data distillation: A survey.
  *arXiv preprint arXiv:2301.04272*.
- Schulman et al. (2017)

  Schulman, J.; Wolski, F.; Dhariwal, P.; Radford, A.; and Klimov, O. 2017.
  Proximal policy optimization algorithms.
  *arXiv preprint arXiv:1707.06347*.
- Shao et al. (2024)

  Shao, Z.; Wang, P.; Zhu, Q.; Xu, R.; Song, J.; Bi, X.; Zhang, H.; Zhang, M.; Li, Y.; Wu, Y.; et al. 2024.
  Deepseekmath: Pushing the limits of mathematical reasoning in open language models.
  *arXiv preprint arXiv:2402.03300*.
- Team et al. (2025a)

  Team, G.; Kamath, A.; Ferret, J.; Pathak, S.; Vieillard, N.; Merhej, R.; Perrin, S.; Matejovicova, T.; Ramé, A.; Rivière, M.; et al. 2025a.
  Gemma 3 technical report.
  *arXiv preprint arXiv:2503.19786*.
- Team et al. (2025b)

  Team, M.; Xiao, C.; Li, Y.; Han, X.; Bai, Y.; Cai, J.; Chen, H.; Chen, W.; Cong, X.; Cui, G.; et al. 2025b.
  MiniCPM4: Ultra-Efficient LLMs on End Devices.
  *arXiv preprint arXiv:2506.07900*.
- Team (2024)

  Team, Q. 2024.
  Qwen2 technical report.
  *arXiv preprint arXiv:2412.15115*.
- Tong et al. (2024)

  Tong, Y.; Zhang, X.; Wang, R.; Wu, R.; and He, J. 2024.
  Dart-math: Difficulty-aware rejection tuning for mathematical problem-solving.
  *Advances in Neural Information Processing Systems*, 37: 7821–7846.
- Van der Hoek and Wooldridge (2008)

  Van der Hoek, W.; and Wooldridge, M. 2008.
  Multi-agent systems.
  *Foundations of Artificial Intelligence*, 3: 887–928.
- Verburg, Eickhout, and Van Meijl (2008)

  Verburg, P. H.; Eickhout, B.; and Van Meijl, H. 2008.
  A multi-scale, multi-model approach for analyzing the future dynamics of European land use.
  *The annals of regional science*, 42: 57–77.
- Wang et al. (2025)

  Wang, Y.; Fu, Z.; Cai, J.; Tang, P.; Lyu, H.; Fang, Y.; Zheng, Z.; Zhou, J.; Zeng, G.; Xiao, C.; et al. 2025.
  Ultra-fineweb: Efficient data filtering and verification for high-quality llm training data.
  *arXiv preprint arXiv:2505.05427*.
- Wei et al. (2022a)

  Wei, J.; Tay, Y.; Bommasani, R.; Raffel, C.; Zoph, B.; Borgeaud, S.; Yogatama, D.; Bosma, M.; Zhou, D.; Metzler, D.; et al. 2022a.
  Emergent abilities of large language models.
  *arXiv preprint arXiv:2206.07682*.
- Wei et al. (2022b)

  Wei, J.; Wang, X.; Schuurmans, D.; Bosma, M.; Xia, F.; Chi, E.; Le, Q. V.; Zhou, D.; et al. 2022b.
  Chain-of-thought prompting elicits reasoning in large language models.
  *Advances in neural information processing systems*, 35: 24824–24837.
- Xu et al. (2024)

  Xu, Z.; Jiang, F.; Niu, L.; Deng, Y.; Poovendran, R.; Choi, Y.; and Lin, B. Y. 2024.
  Magpie: Alignment data synthesis from scratch by prompting aligned llms with nothing.
  *arXiv preprint arXiv:2406.08464*.
- Yang et al. (2025)

  Yang, A.; Li, A.; Yang, B.; Zhang, B.; Hui, B.; Zheng, B.; Yu, B.; Gao, C.; Huang, C.; Lv, C.; et al. 2025.
  Qwen3 technical report.
  *arXiv preprint arXiv:2505.09388*.
- Yao et al. (2023)

  Yao, S.; Yu, D.; Zhao, J.; Shafran, I.; Griffiths, T.; Cao, Y.; and Narasimhan, K. 2023.
  Tree of thoughts: Deliberate problem solving with large language models.
  *Advances in neural information processing systems*, 36: 11809–11822.
- Ye et al. (2025)

  Ye, Y.; Huang, Z.; Xiao, Y.; Chern, E.; Xia, S.; and Liu, P. 2025.
  LIMO: Less is More for Reasoning.
  *arXiv preprint arXiv:2502.03387*.
- Zelikman et al. (2022)

  Zelikman, E.; Wu, Y.; Mu, J.; and Goodman, N. 2022.
  Star: Bootstrapping reasoning with reasoning.
  *Advances in Neural Information Processing Systems*, 35: 15476–15488.
- Zhang, Bao, and Ma (2021)

  Zhang, L.; Bao, C.; and Ma, K. 2021.
  Self-distillation: Towards efficient and compact neural networks.
  *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 44(8): 4388–4403.
- Zhao et al. (2023)

  Zhao, W. X.; Zhou, K.; Li, J.; Tang, T.; Wang, X.; Hou, Y.; Min, Y.; Zhang, B.; Zhang, J.; Dong, Z.; et al. 2023.
  A survey of large language models.
  *arXiv preprint arXiv:2303.18223*, 1(2).
- Zhuang, Wang, and Sun (2025)

  Zhuang, R.; Wang, B.; and Sun, S. 2025.
  Accelerating Chain-of-Thought Reasoning: When Goal-Gradient Importance Meets Dynamic Skipping.
  *arXiv preprint arXiv:2505.08392*.
