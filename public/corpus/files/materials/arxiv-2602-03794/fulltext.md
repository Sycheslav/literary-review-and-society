---
id: arxiv-2602-03794-text
type: material
title: Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity
work_id: arxiv-2602-03794
source_url: https://arxiv.org/html/2602.03794v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 0827b72ab38d102a7050f31ea3e4e33dba9b7b4e123606d8f3faa33ad19e27dd
---

> Источник: [https://arxiv.org/html/2602.03794v1](https://arxiv.org/html/2602.03794v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity

Yingxuan Yang
Affiliation: Shanghai Jiao Tong University,
  
Chengrui Qu
Affiliation: California Institute of Technology,
  
Muning Wen
Affiliation: Shanghai Jiao Tong University,
  
Laixi Shi
Affiliation:  Johns Hopkins University,
  
Ying Wen
Affiliation: Shanghai Jiao Tong University,
  
Weinan Zhang
Affiliation: Shanghai Jiao Tong University,
  
Adam Wierman
Affiliation: California Institute of Technology,
  
Shangding Gu\*
Correspondence to: [shangding.gu@berkeley.edu](mailto:shangding.gu@berkeley.edu)
Affiliation: UC Berkeley

###### Abstract

LLM-based multi-agent systems (MAS) have emerged as a promising approach to tackle complex tasks that are difficult for individual LLMs. A natural strategy is to scale performance by increasing the number of agents; however, we find that such scaling exhibits strong diminishing returns in homogeneous settings, while introducing heterogeneity (e.g., different models, prompts, or tools) continues to yield substantial gains. This raises a fundamental question: *what limits scaling, and why does diversity help?*
We present an information-theoretic framework showing that MAS performance is bounded by the intrinsic task uncertainty, not by agent count. We derive architecture-agnostic bounds demonstrating that improvements depend on how many *effective channels* the system accesses. Homogeneous agents saturate early because their outputs are strongly correlated, whereas heterogeneous agents contribute complementary evidence. We further introduce $K^{\*}$, an *effective channel count* that quantifies the number of effective channels without ground-truth labels. Empirically, we show that heterogeneous configurations consistently outperform homogeneous scaling: 2 diverse agents can match or exceed the performance of 16 homogeneous agents. Our results provide principled guidelines for building efficient and robust MAS through diversity-aware design. Code and Dataset are available at the link: <https://github.com/SafeRL-Lab/Agent-Scaling>.

###### Keywords:

Machine Learning, ICML

## 1 Introduction

Large language models (LLMs) have achieved remarkable performance across diverse tasks, including reasoning, coding, and open-domain question answering ([Wei et al., 2022](https://arxiv.org/html/2602.03794v1#bib.bib41); [Achiam et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib42)). However, individual LLMs still struggle with complex problems that require multi-step reasoning, diverse perspectives, or complementary expertise ([Huang et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib43)). To address these limitations, LLM-based multi-agent systems (MAS) have emerged as a promising paradigm. By orchestrating multiple LLM agents through communication, coordination, or aggregation mechanisms, MAS can tackle challenges that are difficult for single models ([Wu et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib34); [Hong et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib28); [Du et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib27)). Recent studies have demonstrated that multi-agent collaboration can yield substantial improvements over single-agent baselines on tasks ranging from software engineering ([Qian et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib44)) to scientific reasoning ([Guo et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib32)).

Figure 1: 
Effect of model diversity. We compare a mixture of three LLMs (Qwen-2.5-7B, Llama-3.1-8B, Mistral-7B) with the average of independent single-LLM runs.


Figure 2: 
Scaling behavior of homogeneous multi-agent voting. Success rate versus agent count N on seven tasks for three base models. Performance improves with N but saturates, indicating clear diminishing marginal gains at larger agent counts.

Given the effectiveness of multi-agent systems, a natural question arises: *can we improve MAS performance simply by scaling the number of agents?* Intuitively, one might expect ensemble-style gains from aggregating more agent outputs ([Li et al., 2024a](https://arxiv.org/html/2602.03794v1#bib.bib30); [Wang et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib39)). However, recent work ([Kim et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib13)) and our experiments reveal a more nuanced picture. As shown in Figure [2](https://arxiv.org/html/2602.03794v1#S1.F2 "Figure 2 ‣ 1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), scaling homogeneous agents (identical models, prompts, and configurations) exhibits strong diminishing returns: accuracy improves at small agent counts, but the marginal gain per additional agent, rapidly collapses toward zero. This suggests that simply adding more homogeneous agents (or allocating more test-time compute) does not reliably introduce new *usable evidence* into the system, but may instead produce increasingly redundant trajectories.

In contrast, our experiments (Figure [1](https://arxiv.org/html/2602.03794v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) show that introducing *diversity* yields sustained performance improvements. Here, diversity broadly refers to heterogeneity in agent configurations, such as backbone models, prompts or personas, and tool access, which empirically leads to more complementary, rather than redundant, information being introduced into the system. As a result, diverse systems can outperform homogeneous ones even with substantially fewer agent calls ([Wang et al., 2024a](https://arxiv.org/html/2602.03794v1#bib.bib8); [Zhang et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib7); [Qian et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib31)). Motivated by these observations, we ask: what fundamentally limits scaling, and why does diversity help?

We hypothesize that the primary bottleneck arises from *correlation among agent outputs*. Higher correlation induces greater redundancy, reducing the number of effective channels and leading to performance saturation ([Chen et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib24); [Choi et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib5)). This intuition is illustrated in Figure [3](https://arxiv.org/html/2602.03794v1#S2.F3 "Figure 3 ‣ Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), where heterogeneous agents provide complementary coverage and better information processing diversity compared to homogeneous systems ([Yuen et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib10); [Tang et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib9)). To formalize this intuition, we develop an information-theoretic framework that characterizes MAS performance in terms of *effective channels*, the number of independent, non-redundant reasoning paths present in agent outputs, rather than raw agent count. For example, two agents that reason in nearly identical ways contribute only one effective channel, whereas two agents that follow genuinely different reasoning paths contribute two. Our analysis reveals that performance is bounded by intrinsic task uncertainty, and improvements depend on how many effective channels the system accesses.

Based on this framework, we introduce $K^{\*}$, a label-free metric that quantifies effective channels without requiring ground-truth labels. Empirically, we demonstrate that heterogeneous configurations consistently outperform homogeneous scaling: with only 2 diverse agents, we match or exceed the performance of 16 homogeneous agents, achieving significant improvement across seven benchmarks.

Although diminishing returns in scaling have been observed empirically ([Wang et al., 2024b](https://arxiv.org/html/2602.03794v1#bib.bib25); [Kim et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib13)), a unified theoretical framework explaining why and when this phenomenon occurs across different MAS workflows, such as voting ([Wang et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib39)), debate ([Du et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib27); [Khan et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib38)), and centralized orchestration ([Hong et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib28)), remains lacking. Existing studies offer limited theoretical insight into how evidence accumulation is affected by agent redundancy as the system scales.
To address this gap, we provide a unified information-theoretic explanation for diminishing returns in LLM-based MAS. Our contributions are summarized as follows:

- •

  We derive architecture-independent performance bounds, demonstrating that MAS effectiveness is constrained by the intrinsic task uncertainty $H(Y|X)$, and that improvements arise from increasing the number of effective channels rather than scaling the agent count.
- •

  We analyze representative MAS paradigms (vote, debate), showing that homogeneous configurations quickly saturate due to highly correlated evidence, whereas heterogeneity effectively reduces redundancy and expands the system’s capacity for effective channels.
- •

  We introduce $K^{\*}$, an effective channel count that quantifies the number of non-redundant information sources in agent outputs. We empirically validate that $K^{\*}$ tracks performance and provides principled guidelines for diversity-driven MAS design.

## 2 Related Works

##### Information-Theoretic Analysis of LLM Reasoning.

Recent work has begun applying information theory to understand LLM behavior. [Ton et al. (2024)](https://arxiv.org/html/2602.03794v1#bib.bib1) quantify information gain at each chain-of-thought step, showing that effective reasoning requires each step to contribute new information. [Gan et al. (2025)](https://arxiv.org/html/2602.03794v1#bib.bib2) analyze cascading failures through information loss accumulation: when $I(t\_{\ell};r\_{\ell})$ grows super-linearly, conditional entropy increases rather than decreases. In multi-agent settings, [Riedl (2025)](https://arxiv.org/html/2602.03794v1#bib.bib3) use Time-Delayed Mutual Information to detect coordination vs. mere information sharing, and [Chang (2025)](https://arxiv.org/html/2602.03794v1#bib.bib4) track when agent dialogues converge vs. maintain distributed information.
However, these works focus on *characterizing* information flow patterns rather than *explaining* why diversity constraints emerge or *deriving* performance bounds. In contrast to prior work that primarily measures or characterizes information flow in LLM reasoning, we use information theory to *explain* diminishing returns via formal limits.

##### LLM-based Multi-Agent Systems.

LLM–based MAS instantiate multiple interacting LLM agents to perform compound inference through communication, coordination, or aggregation mechanisms ([Xi et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib26); [Wang et al., 2024b](https://arxiv.org/html/2602.03794v1#bib.bib25); [Guo et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib32)). Existing designs span independent sampling and voting schemes related to self-consistency ([Wang et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib39)), decentralized debate and role-playing frameworks ([Du et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib27); [Khan et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib38); [Li et al., 2024b](https://arxiv.org/html/2602.03794v1#bib.bib35); [Li et al., 2024a](https://arxiv.org/html/2602.03794v1#bib.bib30); [Li et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib37)), centralized orchestration frameworks such as AutoGen ([Wu et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib34)) and MetaGPT ([Hong et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib28)), as well as hybrid, evolving, or self-improving coordination strategies ([Dang et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib29); [Zhao et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib36)). [Cemri et al. (2025)](https://arxiv.org/html/2602.03794v1#bib.bib33) identify systematic failure modes across multi-agent systems. Taken together, these findings suggest that MAS performance is influenced by multiple design factors, among which we specifically focus on the role of agent diversity.

##### Empirical Studies of MAS Scaling and Diversity.

It has been shown that naïvely scaling the number of agents yields limited benefits when agent behaviors are homogeneous ([Wang et al., 2024b](https://arxiv.org/html/2602.03794v1#bib.bib25); [Chen et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib24)), across majority voting ([Qian et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib31)), debate ([Choi et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib5)), and more general coordination mechanisms ([Kim et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib13)).

In contrast, a growing body of empirical evidence highlights the central role of diversity in MAS.
[Zhang et al. (2024)](https://arxiv.org/html/2602.03794v1#bib.bib7) demonstrates that diversity leads to higher success rates in software engineering agents, while [Wang et al. (2024a)](https://arxiv.org/html/2602.03794v1#bib.bib8) finds that heterogeneous
ensembles outperform homogeneous ones. [Wu and Ito (2025)](https://arxiv.org/html/2602.03794v1#bib.bib6) argue that preserving disagreement is preferable to enforcing early consensus. Related work
shows that diversity benefits depend on task complexity ([Tang et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib9)) and that persona-based diversification has limitations ([Samuel et al., 2024](https://arxiv.org/html/2602.03794v1#bib.bib11); [Taillandier et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib12)). However, these findings are restricted to specific diversity forms and narrow settings. We provide a unified theoretical and empirical
analysis across multiple diversity types.

![Refer to caption](https://arxiv.org/html/2602.03794v1/A6.png)


Figure 3: 
A comparison between homogeneous and heterogeneous systems. In a homogeneous system, agents with identical configurations result in redundant behavior and limited information coverage. In contrast, heterogeneous agents, through diverse configurations (e.g., varying models or personas), provide complementary coverage and better diversity in the information processed, allowing for more effective problem-solving across different workflows.

## 3 Problem Formulation

This section formalizes the notion of information flow in LLM-based multi-agent systems and establishes the theoretical foundations for understanding scaling behavior.

We first define the system setup, then introduce the key quantity that governs MAS performance: *usable evidence*. Finally, we derive upper bounds showing that achievable information gain is determined by agent diversity.

### 3.1 LLM-based Multi-Agent Systems

We begin by formally defining the class of systems we study.

###### Definition 3.1 (LLM-based Multi-Agent System).

An *LLM-based multi-agent system* consists of $N$ agents, each characterized by a *configuration* that specifies its backbone model, system prompt or persona, decoding strategy, and tool access. Given a task input $X$, the system executes a total of $n$ agent calls through a specified workflow (e.g., parallel voting, sequential debate) and aggregates the outputs to produce a final answer.

Notation. We distinguish the *number of agents* $N$ and the *number of agent calls* $n$. In single-round workflows such as majority voting, $n=N$. In multi-round workflows such as debate with $R$ rounds, $n=N\times R$.
This distinction is important because our analysis focuses on how much information is extracted, regardless of which agent produces it. Agent configuration types are formally defined in Section [3.3](https://arxiv.org/html/2602.03794v1#S3.SS3 "3.3 Agent Configuration Types ‣ 3 Problem Formulation ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

### 3.2 Usable Evidence and Information Budget

Consider a task with input $X\in\mathcal{X}$ and ground-truth answer $Y\in\mathcal{Y}$. During inference, the MAS executes $n$ agent calls and produces a dialogue transcript:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Z\_{1:n}=(Z\_{1},\ldots,Z\_{n}),$$ |  | (1) |

where each output $Z\_{i}$ may depend on the input $X$ and all preceding outputs $Z\_{<i}=(Z\_{1},\ldots,Z\_{i-1})$.

The central question is: *how much information about the answer $Y$ can the system extract from its agent calls?* We quantify this through the conditional mutual information:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle I\_{\mathrm{MAS}}(n)~$ | $\displaystyle:=~I(Z\_{1:n};Y\mid X)$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=~H(Y\mid X)-H(Y\mid X,Z\_{1:n}).$ |  | (2) |

This quantity, which we call *usable evidence*, measures the reduction in uncertainty about $Y$ achieved by observing the transcript, beyond what is already contained in the input $X$.

To understand how usable evidence accumulates, let $\Delta\_{i}:=I(Z\_{i};Y\mid X,Z\_{<i})$ denote the *incremental contribution* of the $i$-th call, i.e., the new information it provides given all previous outputs. By the chain rule for mutual information:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{\mathrm{MAS}}(n)=\sum\_{i=1}^{n}\Delta\_{i}.$$ |  | (3) |

This decomposition shows that MAS performance depends not on the total number of calls $n$, but on how much *non-redundant* evidence each call contributes. If agents produce highly correlated outputs, the incremental contributions $\Delta\_{i}$ diminish rapidly, leading to saturation. As illustrated in Figure [3](https://arxiv.org/html/2602.03794v1#S2.F3 "Figure 3 ‣ Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), heterogeneous agents provide complementary coverage and better diversity in information processing compared to homogeneous configurations.

The following theorem gives an upper bound on the achievable information:

###### Theorem 3.2 (Finite Information Budget).

For any transcript $Z\_{1:n}$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{\mathrm{MAS}}(n)\leq H(Y\mid X).$$ |  | (4) |

This bound states that no MAS can extract more information about $Y$ than the intrinsic task uncertainty $H(Y|X)$. The practical implication is that scaling benefits plateau once this ceiling is approached, and homogeneous systems may reach saturation much earlier than heterogeneous systems due to redundant evidence.

### 3.3 Agent Configuration Types

Agent diversity is operationalized through variations in backbone model, system prompt/persona, decoding strategy, and tool access.
We index these choices by *configuration types*.

###### Definition 3.3 (Agent Configuration Type).

Each call $i\in\{1,\ldots,n\}$ is associated with a type $b(i)\in\mathcal{B}$.
For each $b\in\mathcal{B}$, define the number of calls

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$m\_{b}\coloneqq\bigl|\{i\in\{1,\ldots,n\}:b(i)=b\}\bigr|,\quad\sum\_{b\in\mathcal{B}}m\_{b}=n.$$ |  | (5) |

### 3.4 Type-Dependent Ceilings Across workflows

We next state representative upper bounds showing that, across common MAS workflows, achievable information gain is controlled by the multiset of configuration types.
All formal assumptions and proofs are deferred to Appendix [A](https://arxiv.org/html/2602.03794v1#A1 "Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

##### Parallel interaction.

Let $I\_{b}:=I(Z^{(b)};Y\mid X)$ denote the single-call information of type $b$ (see Appendix [A.3](https://arxiv.org/html/2602.03794v1#A1.SS3 "A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") for the full derivation).
Under a standard conditional-independence model for parallel sampling (Assumption [A.6](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem6 "Assumption A.6 (Conditional Independence for Parallel Sampling (All Types)). ‣ A.3.1 Conditional Independence for Parallel Sampling ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")),

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{\mathrm{MAS}}^{\mathrm{parallel}}(n)\;\leq\;H(Y\mid X)\;\wedge\;\sum\_{b\in\mathcal{B}}m\_{b}\,I\_{b}.$$ |  | (6) |

##### Sequential interaction.

Define the maximal per-step contribution of type $b$ by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{b}^{\max}~:=~\sup\_{z\_{<i}}I(Z\_{i};Y\mid X,Z\_{<i}=z\_{<i},\,b(i)=b).$$ |  | (7) |

Any sequential MAS satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{\mathrm{MAS}}^{\mathrm{seq}}(n)\;\leq\;H(Y\mid X)\;\wedge\;\sum\_{b\in\mathcal{B}}m\_{b}\,I\_{b}^{\max}.$$ |  | (8) |

Debate is a special case of sequential interaction and inherits the same ceiling.

##### From ceilings to compute.

The bounds above depend on *structural properties* of the MAS, which types are instantiated and how they are composed, rather than on the raw call count $n$.
Since these upper bounds do not depend on $n$, the raw call count is not the right quantity for characterizing MAS performance limits. This motivates us to identify a new quantity, the *effective channel count*, that more directly governs how much usable evidence a MAS can extract.

## 4 Why Diversity Matters

Section [3](https://arxiv.org/html/2602.03794v1#S3 "3 Problem Formulation ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") establishes that MAS performance is bounded by intrinsic task uncertainty and that the upper bounds depend on configuration types rather than the raw call count $n$.
This raises a natural question: what quantity *does* govern how much information a MAS actually extracts? In this section, we introduce the *effective channel count* $K$ to answer this question. We then show why homogeneous scaling often saturates (because $K$ stops growing), while heterogeneous designs can keep improving by increasing the amount of *complementary* evidence (larger $K$, and/or a higher evidence-coverage rate $\alpha$), which leads to a characteristic fast-then-slow gain curve.

### 4.1 Effective Channels: From Compute to Usable Evidence

An *effective channel* represents one independent source of task-relevant information in the MAS transcript. Intuitively, if two agents produce nearly identical reasoning, they contribute only one effective channel despite consuming two agent calls; if they reason along genuinely different paths, they contribute two. The *effective channel count* $K$ thus captures how many non-redundant information sources the system has, as opposed to the raw number of calls $n$.
To formalize this, we introduce two interrelated concepts: the *complementarity rate* $\alpha$ and the *effective channel count* $K$.

###### Definition 4.1 (Complementarity Rate).

The *complementarity rate* $\alpha\in(0,1)$ quantifies the probability that a new effective channel uncovers previously missing task-relevant evidence. Formally, $\alpha$ governs the rate at which additional channels reduce residual uncertainty about $Y$.

Intuitively, $\alpha$ reflects how “complementary” the information from different channels is. A high $\alpha$ indicates that each new channel is likely to provide fresh evidence, while a low $\alpha$ suggests substantial overlap with existing information.

###### Definition 4.2 (Effective Channel Representation).

An *effective channel representation* of the transcript $Z\_{1:n}$ is a collection of $K$ channels:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\tilde{Z}\_{1:K}=(\tilde{Z}^{(1)},\ldots,\tilde{Z}^{(K)})\quad\text{s.t.}\quad\tilde{Z}\_{1:K}=\phi(Z\_{1:n}),$$ |  | (9) |

for some (possibly lossy) aggregation map $\phi$, where $K$ is the *effective channel count*, representing the number of non-redundant information sources in the agent outputs.

$K$ and $\alpha$ are coupled: increasing diversity (larger $K$) is beneficial only if the new channels provide complementary evidence (captured by $\alpha$). The product $\alpha K$ thus serves as the fundamental quantity governing information recovery, as formalized in Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

Since $\tilde{Z}\_{1:K}$ is a function of $Z\_{1:n}$, the data processing inequality implies:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)\;\geq\;I(\tilde{Z}\_{1:K};Y\mid X).$$ |  | (10) |

##### Connecting $K$ and $\alpha$ to recoverable information.

To formalize the relationship between effective channels and information recovery, we introduce in Appendix [A](https://arxiv.org/html/2602.03794v1#A1 "Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") a minimal evidence-coverage model (Assumptions [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")). Under this model, the information recovered from $K$ effective channels with complementarity rate $\alpha$ approaches the intrinsic task uncertainty at a geometric rate:

###### Theorem 4.3 (Geometric Contraction with Effective Channels).

Under Assumptions [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), the residual uncertainty after observing $K$ effective channels satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\boxed{\begin{aligned} &H(Y\mid X)-\mathbb{E}\!\left[I(\tilde{Z}\_{1:K};Y\mid X)\right]\\ &\quad\leq\;(1-\alpha)^{K}\,H(Y\mid X)\;\leq\;e^{-\alpha K}\,H(Y\mid X).\end{aligned}}$$ |  | (11) |

Equivalently, the *normalized residual* satisfies
$\mathbb{E}[H(Y\mid X,\tilde{Z}\_{1:K})]/H(Y\mid X)\leq(1-\alpha)^{K}\leq e^{-\alpha K}$.

### 4.2 $K$ as the State Variable of MAS Scaling

The central question in MAS scaling is not whether $n$ increases, but whether $n$ induces growth in the *effective channel count* $K(n)$.
This follows from Section [3](https://arxiv.org/html/2602.03794v1#S3 "3 Problem Formulation ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"): ceilings are fixed by intrinsic uncertainty $H(Y\mid X)$ and structural design (Section [3.4](https://arxiv.org/html/2602.03794v1#S3.SS4 "3.4 Type-Dependent Ceilings Across workflows ‣ 3 Problem Formulation ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")), while achievability improves with the number of non-redundant channels (Section [4.1](https://arxiv.org/html/2602.03794v1#S4.SS1 "4.1 Effective Channels: From Compute to Usable Evidence ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")).

##### A direct heterog–homog advantage bound.

Consider two designs under the same compute budget $n$.
Let $(K\_{\mathrm{homog}},\alpha\_{\mathrm{homog}})$ and $(K\_{\mathrm{heterog}},\alpha\_{\mathrm{heterog}})$ denote their effective channel counts and coverage rates in the evidence-coverage model.
By Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), each design admits a lower bound on recoverable information:

###### Corollary 4.4 (Heterogeneity Advantage).

Under Assumptions [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), the lower bounds on recoverable information for the two designs are:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathbb{E}\big[I\_{\mathrm{heterog}}\big]$ | $\displaystyle\;\geq\;H(Y\mid X)\big(1-e^{-\alpha\_{\mathrm{heterog}}K\_{\mathrm{heterog}}}\big),$ |  | (12) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathbb{E}\big[I\_{\mathrm{homog}}\big]$ | $\displaystyle\;\geq\;H(Y\mid X)\big(1-e^{-\alpha\_{\mathrm{homog}}K\_{\mathrm{homog}}}\big).$ |  | (13) |

When $\alpha\_{\mathrm{heterog}}K\_{\mathrm{heterog}}>\alpha\_{\mathrm{homog}}K\_{\mathrm{homog}}$, the heterogeneous design enjoys a strictly higher information-recovery guarantee: its lower bound on recoverable information, $H(Y\mid X)(1-e^{-\alpha\_{\mathrm{heterog}}K\_{\mathrm{heterog}}})$, exceeds the corresponding homogeneous guarantee $H(Y\mid X)(1-e^{-\alpha\_{\mathrm{homog}}K\_{\mathrm{homog}}})$.

This is consistent with our empirical findings: as shown in Figure [1](https://arxiv.org/html/2602.03794v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and Table [1](https://arxiv.org/html/2602.03794v1#S4.T1 "Table 1 ‣ A direct heterog–homog advantage bound. ‣ 4.2 𝐾 as the State Variable of MAS Scaling ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), heterogeneous configurations consistently recover more task-relevant information than homogeneous ones under matched compute.
The corollary formalizes the intuition that heterogeneity helps by increasing $\alpha K$ through more non-redundant channels or higher complementarity.

Table 1: Effect of persona diversity. $\Delta$ denotes improvement from heterogeneity. All agents share the same base model pool (Qwen-2.5-7B, Llama-3.1-8B, and Mistral-7B); only persona assignments differ between Homog and Heterog.

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dataset | Single Agent | $N$ | Vote | | | Debate | | | Dataset | Single Agent | $N$ | Vote | | | Debate | | |
| Homog | Heterog | $\Delta$ | Homog | Heterog | $\Delta$ | Homog | Heterog | $\Delta$ | Homog | Heterog | $\Delta$ |
| GSM8K | 50.8 | 2 | 86.5 | 87.3 | +0.8 | 76.2 | 75.4 | -0.8 | ARC | 77.8 | 2 | 78.6 | 81.8 | +3.2 | 84.9 | 87.3 | +2.4 |
| 4 | 84.9 | 88.1 | +3.2 | 73.8 | 79.4 | +5.6 | 4 | 79.4 | 85.7 | +6.3 | 79.4 | 84.1 | +4.8 |
| 8 | 90.5 | 93.7 | +3.2 | 75.4 | 85.7 | +10.3 | 8 | 84.1 | 86.5 | +2.4 | 84.9 | 85.7 | +0.8 |
| 12 | 86.5 | 90.5 | +4.0 | 77.8 | 87.3 | +9.5 | 12 | 85.7 | 89.7 | +4.0 | 82.5 | 87.3 | +4.8 |
| 16 | 89.7 | 92.1 | +2.4 | 83.3 | 88.1 | +4.8 | 16 | 84.9 | 88.9 | +4.0 | 84.9 | 84.9 | 0.0 |
| Formal Logic | 32.0 | 2 | 45.2 | 48.4 | +3.2 | 34.1 | 38.9 | +4.8 | Truthful QA | 71.8 | 2 | 74.2 | 77.4 | +3.2 | 71.0 | 77.4 | +6.4 |
| 4 | 47.6 | 52.4 | +4.8 | 42.9 | 53.2 | +10.3 | 4 | 75.0 | 75.8 | +0.8 | 71.8 | 79.8 | +8.0 |
| 8 | 47.6 | 55.6 | +7.9 | 49.2 | 53.2 | +4.0 | 8 | 76.6 | 79.0 | +2.4 | 76.6 | 78.2 | +1.6 |
| 12 | 48.4 | 57.9 | +9.5 | 48.4 | 54.8 | +6.4 | 12 | 75.0 | 79.0 | +4.0 | 73.4 | 79.8 | +6.4 |
| 16 | 50.0 | 54.0 | +4.0 | 43.6 | 51.6 | +8.0 | 16 | 78.2 | 81.5 | +3.3 | 75.0 | 84.7 | +9.7 |
| HellaSwag | 66.1 | 2 | 62.3 | 73.7 | +11.4 | 50.3 | 75.0 | +24.7 | Wino grande | 57.1 | 2 | 51.6 | 60.3 | +8.7 | 58.7 | 50.0 | -8.7 |
| 4 | 68.7 | 75.3 | +6.6 | 66.0 | 73.0 | +7.0 | 4 | 54.0 | 69.1 | +15.1 | 53.2 | 62.7 | +9.5 |
| 8 | 70.0 | 79.0 | +9.0 | 69.7 | 76.0 | +6.3 | 8 | 57.9 | 69.1 | +11.2 | 61.9 | 69.1 | +7.2 |
| 12 | 72.3 | 79.0 | +6.7 | 69.3 | 78.3 | +9.0 | 12 | 58.7 | 70.6 | +11.9 | 62.7 | 70.6 | +7.9 |
| 16 | 72.0 | 79.9 | +7.9 | 70.3 | 76.4 | +6.1 | 16 | 60.3 | 69.8 | +9.5 | 57.9 | 64.3 | +6.4 |
| Pro Medicine | 68.6 | 2 | 78.3 | 78.7 | +0.4 | 76.8 | 71.3 | -5.5 | Average | 60.6 | 2 | 68.1 | 72.5 | +4.4 | 64.6 | 67.9 | +3.3 |
| 4 | 80.5 | 81.6 | +1.1 | 76.8 | 76.5 | -0.3 | 4 | 69.9 | 76.1 | +6.2 | 66.3 | 72.7 | +6.4 |
| 8 | 81.3 | 83.5 | +2.2 | 81.6 | 82.7 | +1.1 | 8 | 72.6 | 79.6 | +7.0 | 71.3 | 75.8 | +4.5 |
| 12 | 80.2 | 82.7 | +2.5 | 81.3 | 83.8 | +2.5 | 12 | 72.4 | 81.0 | +8.6 | 70.8 | 77.4 | +6.6 |
| 16 | 80.5 | 81.8 | +1.3 | 80.5 | 83.3 | +2.8 | 16 | 73.6 | 81.1 | +7.5 | 70.8 | 76.2 | +5.4 |

##### Fast-then-slow scaling: the $1-e^{-\alpha K}$ shape.

Corollary [A.16](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem16 "Corollary A.16 (Saturated Lower Bound (in Expectation)). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") implies that recoverable information grows at least as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}\big[I(\tilde{Z}\_{1:K};Y\mid X)\big]\;\geq\;H(Y\mid X)\big(1-e^{-\alpha K}\big).$$ |  | (14) |

The shape of ([14](https://arxiv.org/html/2602.03794v1#S4.E14 "Equation 14 ‣ Fast-then-slow scaling: the 1-𝑒^{-𝛼⁢𝐾} shape. ‣ 4.2 𝐾 as the State Variable of MAS Scaling ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) directly predicts diminishing returns: the marginal gain from one additional effective channel satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\big(1-e^{-\alpha(K+1)}\big)-\big(1-e^{-\alpha K}\big)~=~(1-e^{-\alpha})\,e^{-\alpha K},$$ |  | (15) |

which is largest at small $K$ and decays exponentially thereafter.
This yields a clean explanation for the empirically observed *fast-then-slow* improvement pattern as the number of agents $n$ increases:
early gains occur when $K(n)$ is still growing, while later gains diminish once $K(n)$ saturates.

### 4.3 Measuring Effective Channels Without Labels: $K^{\*}$

The effective channel count $K$ cannot be computed directly at inference time because it depends on the unknown ground-truth $Y$. We therefore introduce $K^{\*}$, a *label-free proxy* that estimates the number of effective channels from agent outputs in embedding space: $K^{\*}$ is large when outputs are diverse and approaches 1 when outputs are similar.

##### Definition.

Let $\mathrm{Emb}(\cdot)$ be an embedding model.
Given outputs $\{Z\_{i}\}\_{i=1}^{n}$, define normalized embeddings

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{\mathbf{z}}\_{i}\;:=\;\frac{\mathrm{Emb}(Z\_{i})}{\|\mathrm{Emb}(Z\_{i})\|\_{2}}\in\mathbb{R}^{d},$$ |  | (16) |

and the cosine-similarity Gram matrix $G\in\mathbb{R}^{n\times n}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$G\_{ij}\;:=\;\langle\hat{\mathbf{z}}\_{i},\hat{\mathbf{z}}\_{j}\rangle.$$ |  | (17) |

Trace-normalize to obtain $\rho:=G/\mathrm{Tr}(G)$ with $\mathrm{Tr}(\rho)=1$, and let $\{\lambda\_{j}\}\_{j=1}^{n}$ be the eigenvalues of $\rho$.
We define the entropy effective rank

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$K^{\*}\coloneqq 2^{H(\rho)},\quad\text{where}\quad H(\rho)=-\sum\_{j=1}^{n}\lambda\_{j}\log\_{2}\lambda\_{j}.$$ |  | (18) |

##### Interpretation.

$K^{\*}$ counts how many “independent directions” the agent outputs span in embedding space.
When all agents produce nearly identical outputs (e.g., paraphrases of the same reasoning), their embeddings are collinear and $K^{\*}\approx 1$: the system effectively has a single information channel.
When agents produce genuinely different outputs whose embeddings point in different directions with roughly equal magnitude, $K^{\*}$ grows toward $n$: each agent contributes a distinct channel.
For example, if four agents all solve a math problem using the same algebraic approach with minor wording differences, their outputs cluster in one direction and $K^{\*}\approx 1$. If instead the agents employ genuinely different strategies (e.g., algebraic manipulation, geometric reasoning, and numerical estimation), $K^{\*}$ will be notably larger than $1$, reflecting that the system draws on multiple independent lines of evidence.
Formally, $1\leq K^{\*}\leq n$. $K^{\*}$ reaches its maximum $n$ when the normalized Gram matrix $\rho$ has a uniform spectrum (all eigenvalues equal to $1/n$), which occurs when outputs are orthogonal and carry equal energy.
Proofs of these properties are given in Appendix [A](https://arxiv.org/html/2602.03794v1#A1 "Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

## 5 Experiments

This section validates 3 core claims:
(i) scaling *homogeneous* MAS exhibits diminishing returns,
(ii) *heterogeneity* consistently outperforms pure scaling under matched compute,
and (iii) performance gains are governed by the *number of effective channels* rather than the raw agent count.

(a) Vote

(b) Debate

Figure 4: 
Diversity analysis of the Vote and Debate mechanisms across all datasets.
Each subfigure corresponds to one dataset and visualizes absolute performance as a $4\times 5$ heatmap, where rows represent progressively enriched diversity layers (L1–L4) and columns denote the number of agents $N$. Colors indicate success rate values: cyan (lowest) to red (highest).

### 5.1 Experimental Setup

##### Tasks.

We consider a diverse set of reasoning and knowledge benchmarks, including GSM8K ([Cobbe et al., 2021](https://arxiv.org/html/2602.03794v1#bib.bib15)), ARC ([Clark et al., 2018](https://arxiv.org/html/2602.03794v1#bib.bib14)), Formal Logic ([Hendrycks et al., 2021a](https://arxiv.org/html/2602.03794v1#bib.bib18); [Hendrycks et al., 2021b](https://arxiv.org/html/2602.03794v1#bib.bib17)), TruthfulQA ([Lin et al., 2022](https://arxiv.org/html/2602.03794v1#bib.bib19)), HellaSwag ([Zellers et al., 2019](https://arxiv.org/html/2602.03794v1#bib.bib20)), WinoGrande ([, 2019](https://arxiv.org/html/2602.03794v1#bib.bib16)), and Pro Medicine ([Hendrycks et al., 2021a](https://arxiv.org/html/2602.03794v1#bib.bib18); [Hendrycks et al., 2021b](https://arxiv.org/html/2602.03794v1#bib.bib17)).
These tasks span arithmetic reasoning, formal deduction, commonsense reasoning, and domain knowledge, covering both deterministic and ambiguous settings.

##### Models.

Agents are instantiated using three open-source LLMs: Qwen-2.5-7B ([Qwen Team, 2024](https://arxiv.org/html/2602.03794v1#bib.bib21)), Llama-3.1-8B ([Grattafiori and others, 2024](https://arxiv.org/html/2602.03794v1#bib.bib23)), and Mistral-7B ([Jiang et al., 2023](https://arxiv.org/html/2602.03794v1#bib.bib22)).
In the *single-model* setting, all agents within a MAS share the same base model; in the *MIX* setting, agents within a single MAS can use different base models, enabling model-level heterogeneity.

##### MAS Workflows.

We consider two representative collaboration mechanisms ([Choi et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib5)):
Vote, where agents independently generate answers and a majority decision is taken after 1 round, and
Debate, where agents interact sequentially for 4 rounds before producing a final answer.
For each mechanism, we vary the number of agents $N\in\{2,4,8,12,16\}$.
Compute budgets are matched by fixing the total number of agent calls.

##### Diversity Configurations.

We organize agent heterogeneity into four progressively enriched layers to isolate the contribution of each diversity source:

- •

  L1: No Diversity. All agents share the same base model and the same default system prompt (no persona). This serves as the homogeneous baseline. Results are averaged over the three single-model runs.
- •

  L2: Persona Diversity Only. All agents share the same base model, but each agent receives a distinct persona prompt (e.g., “You are an expert mathematician” vs. “You are a careful logician”). Results are averaged over the three single-model runs.
- •

  L3: Model Diversity Only. Agents are drawn from different base models (Qwen, Llama, Mistral) but all use the same default system prompt.
- •

  L4: Full Diversity. Agents differ in both base model and persona prompt, combining model-level and prompt-level heterogeneity.

This controlled design allows us to isolate and compare the contributions of model diversity and persona diversity.

Table 2: Efficiency gains from diversity. Number of agents needed to match L1 (N=16) baseline. Higher diversity achieves equivalent performance with fewer agents.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Method | Config | Agents to Match  L1 (N=16) | Accuracy at  that N | Peak Accuracy  (any N) |
| Vote | L1 | 16 (baseline) | 65.34 | 65.49 |
| L2 | 8 | 65.44 | 66.01 |
| L3 | 4 | 67.29 | 71.54 |
| L4 | 2 | 67.71 | 76.86 |
| Debate | L1 | 16 (baseline) | 65.48 | 65.48 |
| L2 | 12 | 66.08 | 66.08 |
| L3 | 4 | 66.26 | 71.33 |
| L4 | 2 | 67.90 | 77.43 |

### 5.2 Finding 1: Scaling Homogeneous MAS Exhibits Diminishing Returns

We first examine whether increasing the number of agents improves performance in homogeneous settings.
Figure [2](https://arxiv.org/html/2602.03794v1#S1.F2 "Figure 2 ‣ 1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") shows success rates and marginal gains for both voting- and debate-based MAS across multiple tasks and base models.

Across all settings, we observe a consistent pattern:
accuracy improves only at small agent counts, after which marginal gains $\Delta\text{Success}/\Delta N$ rapidly collapse toward zero.
In several cases, performance even degrades as $N$ increases.

As predicted by our theoretical framework (Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")), this saturation occurs because homogeneous agents produce highly correlated outputs, so additional calls fail to increase the effective channel count $K$. In other words, allocating more test-time computation via homogeneous scaling does not reliably inject new usable evidence into the system.

### 5.3 Finding 2: Diversity Consistently Beats Scale

We compare homogeneous scaling with heterogeneous designs under matched compute in Table [1](https://arxiv.org/html/2602.03794v1#S4.T1 "Table 1 ‣ A direct heterog–homog advantage bound. ‣ 4.2 𝐾 as the State Variable of MAS Scaling ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), which reports the performance of Vote and Debate mechanisms across all tasks and agent counts. In nearly all cases, heterogeneous configurations significantly outperform homogeneous ones, with gains increasing as $N$ grows. Figure [4](https://arxiv.org/html/2602.03794v1#S5.F4 "Figure 4 ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") provides a detailed view of this effect. Enriching diversity from L1 to L4 yields consistent performance improvements for both Vote and Debate. Notably, model diversity (L3) and persona diversity (L2) each deliver non-trivial gains, while their combination (L4) consistently performs best.

Table [2](https://arxiv.org/html/2602.03794v1#S5.T2 "Table 2 ‣ Diversity Configurations. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") shows the minimum number of heterogeneous agents required to outperform homogeneous configurations. For both Vote and Debate, L4 (full diversity) with just 2 agents surpasses the performance of L1 (no diversity) with 16 agents. This represents an $8\times$ reduction in agent count for equivalent or better accuracy. This result directly reflects the theory: by Corollary [4.4](https://arxiv.org/html/2602.03794v1#S4.Thmtheorem4 "Corollary 4.4 (Heterogeneity Advantage). ‣ A direct heterog–homog advantage bound. ‣ 4.2 𝐾 as the State Variable of MAS Scaling ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), the heterogeneous design achieves a higher $\alpha K$ product, so fewer agents suffice to reach the same information-recovery level.

We also compare heterogeneous model mixtures against independent single-model runs. Figure [1](https://arxiv.org/html/2602.03794v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") demonstrates that a mixture of three LLMs outperforms the average performance of the individual models, confirming that the improvements stem from complementary effective channels rather than simple averaging.

Figure 5: Correlation between cosine similarity and success rate. Homogeneous settings show higher similarity but lower performance; heterogeneous personas preserve diversity and improve accuracy.

![Refer to caption](https://arxiv.org/html/2602.03794v1/Figure/result_a_redundancy_vs_N_mean_line_only.png)


Figure 6: Mean pairwise cosine similarity vs. agent count. Higher diversity (L1$\to$L4) consistently reduce redundancy.

### 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels

Our theory predicts that homogeneous agents produce highly correlated outputs, contributing few effective channels and leading to saturation. We now verify this empirically, proceeding from a simple redundancy proxy (pairwise cosine similarity) to the effective channel measure ($K^{\*}$).

#### 5.4.1 High output similarity hinders performance

A key reason homogeneous scaling saturates is that additional agent calls increasingly produce *correlated* outputs, yielding limited *new* evidence.
To quantify this redundancy, we embed each agent output (the full reasoning trace) using NV-Embed-v2 ([Lee et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib40)) and compute the *mean pairwise cosine similarity*: for $n$ agent outputs with normalized embeddings $\hat{\mathbf{z}}\_{1},\ldots,\hat{\mathbf{z}}\_{n}$, this is $\bar{\rho}=\frac{2}{n(n-1)}\sum\_{i<j}\langle\hat{\mathbf{z}}\_{i},\hat{\mathbf{z}}\_{j}\rangle$.
While $\bar{\rho}$ is not an information-theoretic quantity, it provides a consistent proxy for output overlap: higher $\bar{\rho}$ indicates that agents explore fewer non-redundant directions, which constrains the growth of effective channels.

Figure [5](https://arxiv.org/html/2602.03794v1#S5.F5 "Figure 5 ‣ 5.3 Finding 2: Diversity Consistently Beats Scale ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") shows that homogeneous persona settings produce higher similarity yet do not translate this additional compute into higher success rates, whereas heterogeneous personas maintain lower similarity and achieve stronger performance.
Moreover, Figure [6](https://arxiv.org/html/2602.03794v1#S5.F6 "Figure 6 ‣ 5.3 Finding 2: Diversity Consistently Beats Scale ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") reveals a systematic scaling trend: for every diversity layer, redundancy increases with agent count $N$, implying that larger homogeneous ensembles mainly amplify existing trajectories rather than introducing qualitatively new evidence.
Crucially, redundancy decreases monotonically from L1 to L4, consistent with our hypothesis that heterogeneity mitigates output correlation and thus enlarges the number of effective channels.

While these results confirm a qualitative relationship between output diversity and performance, pairwise cosine similarity is a coarse measure. To obtain a more precise and theoretically grounded characterization, we next turn to the effective channel count $K^{\*}$ introduced in Section [4.3](https://arxiv.org/html/2602.03794v1#S4.SS3 "4.3 Measuring Effective Channels Without Labels: 𝐾^∗ ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

Table 3: Relation between K\* and Accuracy on ARC.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Method | Config | Performance | | Channels | | Answer-Cond. | |
| Acc. | $\Delta$Acc | $K^{\*}$ | $\Delta K^{\*}$ | $K^{\*}\_{c}$ | $K^{\*}\_{w}$ |
| Debate | L1 | 81.6% | – | 1.197 | – | 1.184 | 1.177 |
| L2 | 81.0% | -0.7 | 1.348 | +0.152 | 1.315 | 1.234 |
| L3 | 83.3% | +1.7 | 1.246 | +0.049 | 1.220 | 1.160 |
| L4 | 85.9% | +4.2 | 1.517 | +0.320 | 1.472 | 1.288 |
| Vote | L1 | 81.3% | – | 1.201 | – | 1.183 | 1.173 |
| L2 | 81.5% | +0.2 | 1.349 | +0.149 | 1.318 | 1.222 |
| L3 | 83.8% | +2.5 | 1.245 | +0.044 | 1.223 | 1.161 |
| L4 | 87.5% | +6.1 | 1.521 | +0.321 | 1.484 | 1.297 |

#### 5.4.2 Diverse Channels improves performance

We compute $K^{\*}$ by embedding each agent output with NV-Embed-v2 ([Lee et al., 2025](https://arxiv.org/html/2602.03794v1#bib.bib40)), forming the cosine-similarity matrix $G$, trace-normalizing it to $\rho$ with $\mathrm{Tr}(\rho)=1$, and defining $K^{\*}$ as the entropy effective rank of $\rho$ (Eq. [18](https://arxiv.org/html/2602.03794v1#S4.E18 "Equation 18 ‣ Definition. ‣ 4.3 Measuring Effective Channels Without Labels: 𝐾^∗ ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")).

##### Diversity increases $K^{\*}$.

As shown in Table [3](https://arxiv.org/html/2602.03794v1#S5.T3 "Table 3 ‣ 5.4.1 High output similarity hinders performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), $K^{\*}$ consistently increases with diversity level from L1 to L4 under both Vote and Debate mechanisms, validating $K^{\*}$ as a robust indicator of system diversity without ground-truth labels.

##### Higher $K^{\*}$ leads to better performance.

The increase in $K^{\*}$ is accompanied by higher accuracy in most cases (Table [3](https://arxiv.org/html/2602.03794v1#S5.T3 "Table 3 ‣ 5.4.1 High output similarity hinders performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")). Figure [7](https://arxiv.org/html/2602.03794v1#S5.F7 "Figure 7 ‣ Mechanistic Decomposition: 𝐾^∗_𝑐 vs. 𝐾^∗_𝑤. ‣ 5.4.2 Diverse Channels improves performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") further confirms this positive correlation, depicting a strong linear relationship between $K^{\*}$ and task accuracy across configurations.
Moreover, consistent with Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), the marginal improvement in accuracy diminishes as $K^{\*}$ grows, reflecting the geometric decay $(1-\alpha)^{K}$ predicted by our theory. We observe a minor anomaly in L2 under Debate, where $K^{\*}$ increases but accuracy slightly decreases; we investigate this through the decomposition of $K^{\*}$ below.

##### Mechanistic Decomposition: $K^{\*}\_{c}$ vs. $K^{\*}\_{w}$.

To determine if the growth in $K^{\*}$ represents useful evidence or merely increased noise, we decompose it into $K^{\*}\_{c}$ (correct reasoning diversity) and $K^{\*}\_{w}$ (incorrect reasoning diversity). Let $\hat{y}\_{i}$ represent the final answer of agent $i$, and $Y$ be the ground-truth label. We define:

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{I}\_{c}=\{i:\hat{y}\_{i}=Y\},\qquad\mathcal{I}\_{w}=\{i:\hat{y}\_{i}\neq Y\}$$ |  |

Here, $\mathcal{I}\_{c}$ is the set of correct agents, and $\mathcal{I}\_{w}$ is the set of incorrect agents. We then compute the effective number of channels for each set:

|  |  |  |
| --- | --- | --- |
|  | $$K^{\*}\_{c}=K^{\*}(Z\_{c}),\qquad K^{\*}\_{w}=K^{\*}(Z\_{w})$$ |  |

where $Z\_{c}$ and $Z\_{w}$ are the sub-matrices of the original data matrix $Z$, corresponding to correct and incorrect agents.

![Refer to caption](https://arxiv.org/html/2602.03794v1/Figure/fig_L4_kstar_accuracy_mean_fit.png)


Figure 7: Correlation between $K^{\*}$ and accuracy.

![Refer to caption](https://arxiv.org/html/2602.03794v1/Figure/exp1_task_profiles.png)


Figure 8: Decomposition of $K^{\*}$ on three tasks. Points below the diagonal correspond to configurations where correct answer diversity dominates.

##### The Empirical Boundary.

Figure [8](https://arxiv.org/html/2602.03794v1#S5.F8 "Figure 8 ‣ Mechanistic Decomposition: 𝐾^∗_𝑐 vs. 𝐾^∗_𝑤. ‣ 5.4.2 Diverse Channels improves performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") suggests an empirical boundary in the $(K^{\*}\_{c},K^{\*}\_{w})$ plane:
high-accuracy configurations concentrate in the region where $K^{\*}\_{c}>K^{\*}\_{w}$ (below the diagonal line).
The intuition is as follows: when multiple agents arrive at the correct answer through genuinely *different* reasoning paths ($K^{\*}\_{c}$ is high), the correct answer receives support from independent evidence sources, making it more robust under aggregation. Conversely, when incorrect answers are also diverse ($K^{\*}\_{w}$ is high), the error “votes” are spread across many competing alternatives, which can dilute the correct signal.
Thus, $K^{\*}\_{c}>K^{\*}\_{w}$ indicates that correct reasoning benefits from diverse support while incorrect reasoning remains fragmented, and this favorable signal-to-noise ratio is a prerequisite for robust MAS performance.

### 5.5 Design Guidelines for LLM-based MAS

Our analysis of effective channels yields several data-driven design guidelines for MAS development:

- •

  Match diversity to task type.
  $K^{\*}$ predicts accuracy strongly on reasoning tasks but weakly on knowledge-heavy tasks. For tasks requiring complex multi-step reasoning (e.g., GSM8K, ARC), investing in diversity yields significant performance gains. In contrast, for tasks dominated by factual retrieval (e.g., Winogrande), the diversity investment should be more conservative.
- •

  Ensure correct-path dominance.
  Systems with high $K^{\*}\_{c}/K^{\*}\_{w}$ achieve substantially higher accuracy. In practice, this means that when introducing diversity, one should focus on increasing the diversity of *correct* reasoning paths, for example by using personas that encourage different valid problem-solving strategies (e.g., algebraic vs. geometric approaches in math tasks), rather than indiscriminately adding diversity that may also amplify incorrect reasoning (e.g., random temperature increases that introduce more errors).
- •

  Right-size agent count.
  Homogeneous systems plateau at $N\approx 4$, while heterogeneous systems continue to benefit from scaling up to $N\approx 8$. Beyond this point, adding more agents results in diminishing returns and wasted compute resources. Thus, it is important to find a balance in agent count to avoid inefficiency.

## 6 Conclusion

This paper shows that simply increasing agent count in multi-agent systems results in diminishing returns, both for homogeneous and heterogeneous configurations. However, heterogeneity improves performance by introducing more diverse, non-redundant information, delaying saturation. We introduce $K^{\*}$, a label-free measure of effective channels, which reveals that performance gains are driven by the balance between correct-path diversity and redundancy. These results suggest that the challenge in multi-agent scaling lies in the effective allocation of diverse information channels rather than just raw computational power.

## Impact Statement

This work establishes an information-theoretic framework for understanding scaling behavior in LLM-based multi-agent systems. We discuss the scope, limitations, and implications of our contributions below.

##### Theoretical Contributions and Scope.

Our framework provides architecture-agnostic upper bounds and lower bounds showing that MAS performance is fundamentally limited by diverisity. The geometric contraction result (Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) offers a principled explanation for the empirically observed “fast-then-slow” pattern. However, our theoretical analysis relies on idealized assumptions: the evidence-bits model (Assumption [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) assumes perfect sufficiency and conditional independence of latent evidence, and the coverage model (Assumption [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) assumes uniform and independent coverage probabilities. Real-world agents may exhibit more complex dependency structures.

##### Limitations of $K^{\*}$.

While $K^{\*}$ provides a practical label-free proxy for effective channels, it measures *semantic* diversity in embedding space rather than *task-relevant* information diversity. As shown in Section [5.4.2](https://arxiv.org/html/2602.03794v1#S5.SS4.SSS2 "5.4.2 Diverse Channels improves performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), the decomposition into $K^{\*}\_{c}$ and $K^{\*}\_{w}$ reveals that not all diversity is beneficial, only diversity among correct reasoning paths reliably improves performance. Furthermore, $K^{\*}$ depends on the choice of embedding model, and its correlation with accuracy varies across task types (stronger for reasoning tasks, weaker for knowledge-intensive tasks). Developing task-adaptive diversity metrics remains an open problem.

##### Empirical Scope.

Our experiments focus on 7B-8B scale open-weight models across seven benchmarks. Whether the diversity-over-scale principle extends to larger models, closed-source APIs, or more complex agentic workflows (e.g., tool use, long-horizon planning) requires further investigation. Additionally, our analysis considers vote and debate mechanisms; other coordination protocols may exhibit different scaling behaviors.

## References

- Achiam et al. (2023)
  J. Achiam, S. Adler, S. Agarwal, L. Ahmad, I. Akkaya, F. L. Aleman, D. Almeida, J. Altenschmidt, S. Altman, S. Anadkat, et al.
  GPT-4 technical report.
  arXiv preprint arXiv:2303.08774.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Cemri et al. (2025)
  M. Cemri, M. Z. Pan, S. Yang, L. A. Agrawal, B. Chopra, R. Tiwari, K. Keutzer, A. Parameswaran, D. Klein, K. Ramchandran, M. Zaharia, J. E. Gonzalez, and I. Stoica
  Why do multi-agent LLM systems fail?.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems Datasets and Benchmarks Track,
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Chang (2025)
  E. Y. Chang
  Multi-llm agent collaborative intelligence: the path to artificial general intelligence.
   Edward Y. Chang.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px1.p1.1 "Information-Theoretic Analysis of LLM Reasoning. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Chen et al. (2024)
  L. Chen, J. Q. Davis, B. Hanin, P. Bailis, I. Stoica, M. Zaharia, and J. Zou
  Are more llm calls all you need? towards scaling laws of compound inference systems.
  arXiv preprint arXiv:2403.02419.
  External Links: 2403.02419
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p4.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p1.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Choi et al. (2025)
  H. K. Choi, X. Zhu, and S. Li
  Debate or vote: which yields better decisions in multi-agent large language models?.
  arXiv preprint arXiv:2508.17536.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p4.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p1.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px3.p1.1 "MAS Workflows. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Clark et al. (2018)
  P. Clark, I. Cowhey, O. Etzioni, T. Khot, A. Sabharwal, C. Schoenick, and O. Tafjord
  Think you have solved question answering? try arc, the ai2 reasoning challenge.
  arXiv:1803.05457v1.
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Cobbe et al. (2021)
  K. Cobbe, V. Kosaraju, M. Bavarian, M. Chen, H. Jun, L. Kaiser, M. Plappert, J. Tworek, J. Hilton, R. Nakano, C. Hesse, and J. Schulman
  Training verifiers to solve math word problems.
  arXiv preprint arXiv:2110.14168.
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Dang et al. (2025)
  Y. Dang, C. Qian, X. Luo, J. Fan, Z. Xie, R. Shi, W. Chen, C. Yang, X. Che, Y. Tian, X. Xiong, L. Han, Z. Liu, and M. Sun
  Multi-agent collaboration via evolving orchestration.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Du et al. (2023)
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch
  Improving factuality and reasoning in language models through multiagent debate.
  arXiv preprint arXiv:2305.14325.
  External Links: 2305.14325
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§1](https://arxiv.org/html/2602.03794v1#S1.p6.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Gan et al. (2025)
  Z. Gan, Y. Liao, and Y. Liu
  Rethinking external slow-thinking: from snowball errors to probability of correct reasoning.
  arXiv preprint arXiv:2501.15602.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px1.p1.1 "Information-Theoretic Analysis of LLM Reasoning. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Grattafiori et al. (2024)
  A. Grattafiori et al.
  The llama 3 herd of models.
  arXiv preprint arXiv:2407.21783.
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px2.p1.1 "Models. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Guo et al. (2024)
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang
  Large language model based multi-agents: a survey of progress and challenges.
  arXiv preprint arXiv:2402.01680.
  External Links: 2402.01680
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Hendrycks et al. (2021a)
  D. Hendrycks, C. Burns, S. Basart, A. Critch, J. Li, D. Song, and J. Steinhardt
  Aligning ai with shared human values.
  Proceedings of the International Conference on Learning Representations (ICLR).
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Hendrycks et al. (2021b)
  D. Hendrycks, C. Burns, S. Basart, A. Zou, M. Mazeika, D. Song, and J. Steinhardt
  Measuring massive multitask language understanding.
  Proceedings of the International Conference on Learning Representations (ICLR).
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Hong et al. (2024)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, C. Zhang, J. Wang, Z. Wang, S. K. S. Yau, Z. Lin, L. Zhou, C. Ran, L. Xiao, C. Wu, and J. Schmidhuber
  MetaGPT: meta programming for a multi-agent collaborative framework.
  arXiv preprint arXiv:2308.00352.
  External Links: 2308.00352
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§1](https://arxiv.org/html/2602.03794v1#S1.p6.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Huang et al. (2023)
  J. Huang, X. Gu, L. Chen, J. Han, and T. Kraska
  Large language models cannot self-correct reasoning yet.
  arXiv preprint arXiv:2310.01798.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Jiang et al. (2023)
  A. Q. Jiang, A. Sablayrolles, A. Mensch, C. Bamford, D. S. Chaplot, D. de las Casas, F. Bressand, G. Lengyel, G. Lample, L. Saulnier, L. R. Lavaud, M. Lachaux, P. Stock, T. L. Scao, T. Lavril, T. Wang, T. Lacroix, and W. E. Sayed
  Mistral 7b.
  External Links: 2310.06825
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px2.p1.1 "Models. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Khan et al. (2024)
  A. Khan, J. Hughes, D. Valentine, L. Ruis, K. Sachan, A. Radhakrishnan, E. Grefenstette, S. R. Bowman, T. Rocktäschel, and E. Perez
  Debating with more persuasive LLMs leads to more truthful answers.
  In Proceedings of the 41st International Conference on Machine Learning,
  ICML’24.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p6.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Kim et al. (2025)
  Y. Kim, K. Gu, C. Park, C. Park, S. Schmidgall, A. A. Heydari, Y. Yan, Z. Zhang, Y. Zhuang, M. Malhotra, P. P. Liang, H. W. Park, Y. Yang, X. Xu, Y. Du, S. Patel, T. Althoff, D. McDuff, and X. Liu
  Towards a science of scaling agent systems.
  arXiv preprint arXiv:2512.08296.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p2.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§1](https://arxiv.org/html/2602.03794v1#S1.p6.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p1.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Lee et al. (2025)
  C. Lee, R. Roy, M. Xu, J. Raiman, M. Shoeybi, B. Catanzaro, and W. Ping
  NV-embed: improved techniques for training llms as generalist embedding models.
  External Links: 2405.17428
  Cited by: [§5.4.1](https://arxiv.org/html/2602.03794v1#S5.SS4.SSS1.p1.1 "5.4.1 High output similarity hinders performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§5.4.2](https://arxiv.org/html/2602.03794v1#S5.SS4.SSS2.p1.1 "5.4.2 Diverse Channels improves performance ‣ 5.4 Finding 3: Performance Gains Are Governed by the Number of Effective Channels ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Li et al. (2023)
  G. Li, H. A. Al Kader Hammoud, H. Itani, D. Khizbullin, and B. Ghanem
  CAMEL: communicative agents for “mind” exploration of large language model society.
  In Proceedings of the 37th International Conference on Neural Information Processing Systems,
  NeurIPS ’23.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Li et al. (2024a)
  J. Li, Q. Zhang, Y. Yu, Q. Fu, and D. Ye
  More agents is all you need.
  arXiv preprint arXiv:2402.05120.
  External Links: 2402.05120
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p2.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Li et al. (2024b)
  Y. Li, Y. Du, J. Zhang, L. Hou, P. Grabowski, Y. Li, and E. Ie
  Improving multi-agent debate with sparse communication topology.
  In Findings of the Association for Computational Linguistics: EMNLP 2024, Y. Al-Onaizan, M. Bansal, and Y. Chen (Eds.),
  Miami, Florida, USA, pp. 7281–7294.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.findings-emnlp.427)
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Lin et al. (2022)
  S. Lin, J. Hilton, and O. Evans
  TruthfulQA: measuring how models mimic human falsehoods.
  External Links: 2109.07958
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Qian et al. (2024)
  C. Qian, W. Liu, H. Liu, N. Chen, Y. Dang, J. Li, C. Yang, W. Chen, Y. Su, X. Cong, J. Xu, D. Li, Z. Liu, and M. Sun
  ChatDev: communicative agents for software development.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 15174–15186.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Qian et al. (2025)
  C. Qian, Z. Xie, Y. Wang, W. Liu, K. Zhu, H. Xia, Y. Dang, Z. Du, W. Chen, C. Yang, Z. Liu, and M. Sun
  Scaling large language model-based multi-agent collaboration.
  In The Thirteenth International Conference on Learning Representations,
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p3.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p1.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Qwen Team (2024)
  Qwen Team
  Qwen2.5: a party of foundation models.
  arXiv preprint arXiv:2412.15115.
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px2.p1.1 "Models. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Riedl (2025)
  C. Riedl
  Emergent coordination in multi-agent language models.
  arXiv preprint arXiv:2510.05174.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px1.p1.1 "Information-Theoretic Analysis of LLM Reasoning. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Samuel et al. (2024)
  V. Samuel, H. P. Zou, Y. Zhou, S. Chaudhari, A. Kalyan, T. Rajpurohit, A. Deshpande, K. Narasimhan, and V. Murahari
  Personagym: evaluating persona agents and llms.
  arXiv preprint arXiv:2407.18416.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p2.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Taillandier et al. (2025)
  P. Taillandier, J. D. Zucker, A. Grignard, B. Gaudou, N. Q. Huynh, and A. Drogoul
  Integrating llm in agent-based social simulation: opportunities and challenges.
  arXiv preprint arXiv:2507.19364.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p2.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Tang et al. (2025)
  B. Tang, H. Liang, K. Jiang, and X. Dong
  On the importance of task complexity in evaluating llm-based multi-agent systems.
  arXiv preprint arXiv:2510.04311.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p4.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p2.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Ton et al. (2024)
  J. Ton, M. F. Taufiq, and Y. Liu
  Understanding chain-of-thought in llms through information theory.
  arXiv preprint arXiv:2411.11984.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px1.p1.1 "Information-Theoretic Analysis of LLM Reasoning. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Wang et al. (2024a)
  J. Wang, J. Wang, B. Athiwaratkun, C. Zhang, and J. Zou
  Mixture-of-agents enhances large language model capabilities.
  arXiv preprint arXiv:2406.04692.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p3.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p2.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Wang et al. (2024b)
  L. Wang, C. Ma, X. Feng, Z. Zhang, H. Yang, J. Zhang, Z. Chen, J. Tang, X. Chen, Y. Lin, W. X. Zhao, Z. Wei, and J. Wen
  A survey on large language model based autonomous agents.
  Frontiers of Computer Science 18 (6), pp. 186345.
  External Links: [Document](https://dx.doi.org/10.1007/s11704-024-40231-1)
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p6.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p1.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Wang et al. (2023)
  X. Wang, J. Wei, D. Schuurmans, Q. Le, E. Chi, S. Narang, A. Chowdhery, and D. Zhou
  Self-consistency improves chain of thought reasoning in language models.
  arXiv preprint arXiv:2203.11171.
  External Links: 2203.11171
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p2.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§1](https://arxiv.org/html/2602.03794v1#S1.p6.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Wei et al. (2022)
  J. Wei, X. Wang, D. Schuurmans, M. Maeda, E. Chi, S. Xia, Q. Le, and D. Zhou
  Chain-of-thought prompting elicits reasoning in large language models.
  Advances in Neural Information Processing Systems 35, pp. 24824–24837.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- [37]
   (2019)
  WinoGrande: an adversarial winograd schema challenge at scale.
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Wu et al. (2024)
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, A. H. Awadallah, R. W. White, D. Burger, and C. Wang
  AutoGen: enabling next-gen LLM applications via multi-agent conversations.
  In First Conference on Language Modeling,
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p1.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Wu and Ito (2025)
  Z. Wu and T. Ito
  The hidden strength of disagreement: unraveling the consensus-diversity tradeoff in adaptive multi-agent systems.
  arXiv preprint arXiv:2502.16565.
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p2.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Xi et al. (2023)
  Z. Xi, W. Chen, X. Guo, W. He, Y. Ding, B. Hong, M. Zhang, J. Wang, S. Jin, E. Zhou, R. Zheng, X. Fan, X. Wang, L. Xiong, Y. Zhou, W. Wang, C. Jiang, Y. Zou, X. Liu, Z. Yin, S. Dou, R. Weng, W. Cheng, Q. Zhang, W. Qin, Y. Zheng, X. Qiu, X. Huang, and T. Gui
  The rise and potential of large language model based agents: a survey.
  arXiv preprint arXiv:2309.07864.
  External Links: 2309.07864
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Yuen et al. (2025)
  S. Yuen, F. G. Medina, T. Su, Y. Du, and A. J. Sobey
  Intrinsic memory agents: heterogeneous multi-agent llm systems through structured contextual memory.
  arXiv preprint arXiv:2508.08997.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p4.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Zellers et al. (2019)
  R. Zellers, A. Holtzman, Y. Bisk, A. Farhadi, and Y. Choi
  HellaSwag: can a machine really finish your sentence?.
  In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics,
  Cited by: [§5.1](https://arxiv.org/html/2602.03794v1#S5.SS1.SSS0.Px1.p1.1 "Tasks. ‣ 5.1 Experimental Setup ‣ 5 Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Zhang et al. (2024)
  K. Zhang, W. Yao, Z. Liu, Y. Feng, Z. Liu, R. Murthy, T. Lan, L. Li, R. Lou, J. Xu, et al.
  Diversity empowers intelligence: integrating expertise of software engineering agents.
  arXiv preprint arXiv:2408.07060.
  Cited by: [§1](https://arxiv.org/html/2602.03794v1#S1.p3.1 "1 Introduction ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),
  [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px3.p2.1 "Empirical Studies of MAS Scaling and Diversity. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
- Zhao et al. (2025)
  W. Zhao, M. Yuksekgonul, S. Wu, and J. Zou
  SiriuS: self-improving multi-agent systems via bootstrapped reasoning.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  Cited by: [§2](https://arxiv.org/html/2602.03794v1#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems. ‣ 2 Related Works ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

## Appendix A Proofs and Technical Details

This appendix provides full proofs and technical details omitted from the main text.
Section [A.1](https://arxiv.org/html/2602.03794v1#A1.SS1 "A.1 Information-Theoretic Preliminaries ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") reviews standard information-theoretic identities.
Section [A.2](https://arxiv.org/html/2602.03794v1#A1.SS2 "A.2 Finite Information Budget (Upper Bound) ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") proves Theorem [3.2](https://arxiv.org/html/2602.03794v1#S3.Thmtheorem2 "Theorem 3.2 (Finite Information Budget). ‣ 3.2 Usable Evidence and Information Budget ‣ 3 Problem Formulation ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
Sections [A.3](https://arxiv.org/html/2602.03794v1#A1.SS3 "A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")–[A.4](https://arxiv.org/html/2602.03794v1#A1.SS4 "A.4 Sequential Pipelines and Debate: Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") derive upper bounds for common MAS workflows.
Section [A.5](https://arxiv.org/html/2602.03794v1#A1.SS5 "A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") presents the evidence-bits coverage model and proves
Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and Corollary [A.16](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem16 "Corollary A.16 (Saturated Lower Bound (in Expectation)). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") from the main text.
Section [A.6](https://arxiv.org/html/2602.03794v1#A1.SS6 "A.6 Properties of the Effective Channel Count 𝐾^∗ ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") proves basic properties of the effective channel count $K^{\*}$.

### A.1 Information-Theoretic Preliminaries

We recall standard definitions and lemmas from information theory.

###### Definition A.1 (Conditional Mutual Information).

For random variables $A,B,C$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(A;B\mid C)=H(A\mid C)-H(A\mid B,C)=H(B\mid C)-H(B\mid A,C).$$ |  | (19) |

###### Lemma A.2 (Chain Rule for Mutual Information).

For random variables $X,Y\_{1},\ldots,Y\_{n},Z$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Y\_{1},\ldots,Y\_{n};X\mid Z)=\sum\_{i=1}^{n}I(Y\_{i};X\mid Z,Y\_{<i}).$$ |  | (20) |

###### Lemma A.3 (Data Processing Inequality).

If $A\to B\to C$ forms a Markov chain, then $I(A;C)\leq I(A;B)$.

###### Lemma A.4 (Incremental Information as Entropy Difference).

Let $\Delta\_{i}:=I(Z\_{i};Y\mid X,Z\_{<i})$. Then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Delta\_{i}=H(Y\mid X,Z\_{<i})-H(Y\mid X,Z\_{\leq i}),$$ |  | (21) |

where $Z\_{\leq i}=(Z\_{1},\ldots,Z\_{i})$.

###### Proof.

By the definition of conditional mutual information,

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\Delta\_{i}$ | $\displaystyle=I(Z\_{i};Y\mid X,Z\_{<i})$ |  | (22) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=H(Y\mid X,Z\_{<i})-H(Y\mid X,Z\_{<i},Z\_{i})$ |  | (23) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=H(Y\mid X,Z\_{<i})-H(Y\mid X,Z\_{\leq i}).\qed$ |  | (24) |

### A.2 Finite Information Budget (Upper Bound)

For completeness, the total information an MAS can extract is always upper-bounded by the intrinsic task uncertainty.

###### Theorem A.5 (Finite Information Budget).

For any MAS transcript $Z\_{1:n}$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)\leq H(Y\mid X).$$ |  | (25) |

Moreover, writing $I(Z\_{1:n};Y\mid X)=\sum\_{i=1}^{n}\Delta\_{i}$ with $\Delta\_{i}:=I(Z\_{i};Y\mid X,Z\_{<i})$, we have $\sum\_{i=1}^{n}\Delta\_{i}\leq H(Y\mid X)$ and $\Delta\_{i}\to 0$ as $i\to\infty$.

###### Proof.

By the definition of conditional mutual information,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)=H(Y\mid X)-H(Y\mid X,Z\_{1:n})\leq H(Y\mid X),$$ |  | (26) |

since conditional entropy is nonnegative.
By Lemma [A.2](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem2 "Lemma A.2 (Chain Rule for Mutual Information). ‣ A.1 Information-Theoretic Preliminaries ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)=\sum\_{i=1}^{n}I(Z\_{i};Y\mid X,Z\_{<i})=\sum\_{i=1}^{n}\Delta\_{i}.$$ |  | (27) |

Because $\Delta\_{i}\geq 0$ and the partial sums are uniformly bounded by $H(Y\mid X)$, we must have $\Delta\_{i}\to 0$ as $i\to\infty$.
∎

### A.3 Parallel Voting: Assumptions and Upper Bounds

This section derives the parallel-voting upper bounds used in the main text.
The key message is that repeated sampling from the same configuration produces redundant evidence.

#### A.3.1 Conditional Independence for Parallel Sampling

###### Assumption A.6 (Conditional Independence for Parallel Sampling (All Types)).

Consider a parallel MAS with agent configuration types $b(i)\in\mathcal{B}$.
There exist channels $\{K\_{b}(\cdot\mid x,y)\}\_{b\in\mathcal{B}}$ such that, for every $i$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(Z\_{i}=z\mid X=x,Y=y,Z\_{<i})\;=\;K\_{b(i)}(z\mid x,y),$$ |  | (28) |

and the outputs are mutually independent conditioned on $(X,Y)$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(Z\_{1:n}\mid X,Y)\;=\;\prod\_{i=1}^{n}P(Z\_{i}\mid X,Y,b(i)).$$ |  | (29) |

Define the single-call information for type $b$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{b}:=I(Z^{(b)};Y\mid X),$$ |  | (30) |

where $Z^{(b)}$ denotes one output from type $b$ in isolation.

#### A.3.2 A Redundancy Identity

###### Lemma A.7 (Three-Way Mutual Information Decomposition).

For any random variables $A,B,C,D$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(A;B\mid C,D)=I(A;B\mid C)+I(A;D\mid B,C)-I(A;D\mid C).$$ |  | (31) |

###### Proof.

Apply chain rule in two ways:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle I(A;B,D\mid C)$ | $\displaystyle=I(A;B\mid C)+I(A;D\mid B,C),$ |  | (32) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle I(A;B,D\mid C)$ | $\displaystyle=I(A;D\mid C)+I(A;B\mid C,D).$ |  | (33) |

Equating and rearranging yields the claim.
∎

###### Corollary A.8 (Incremental Gain under Parallel Sampling).

With $A=Z\_{i}$, $B=Y$, $C=X$, $D=Z\_{<i}$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{i};Y\mid X,Z\_{<i})=I(Z\_{i};Y\mid X)+I(Z\_{i};Z\_{<i}\mid X,Y)-I(Z\_{i};Z\_{<i}\mid X).$$ |  | (34) |

Under Assumption [A.6](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem6 "Assumption A.6 (Conditional Independence for Parallel Sampling (All Types)). ‣ A.3.1 Conditional Independence for Parallel Sampling ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), $I(Z\_{i};Z\_{<i}\mid X,Y)=0$, hence

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{i};Y\mid X,Z\_{<i})=I(Z\_{i};Y\mid X)-I(Z\_{i};Z\_{<i}\mid X)\leq I(Z\_{i};Y\mid X).$$ |  | (35) |

This formalizes redundancy: previous outputs can only reduce the new information.

##### Implication: redundancy controls early saturation.

Upper bounds identify *what* limits the total information gain.
To explain *when* saturation occurs, consider the incremental contribution
$\Delta\_{i}:=I(Z\_{i};Y\mid X,Z\_{<i})$.
Eq. ([35](https://arxiv.org/html/2602.03794v1#A1.E35 "Equation 35 ‣ Corollary A.8 (Incremental Gain under Parallel Sampling). ‣ A.3.2 A Redundancy Identity ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) provides an explicit decomposition:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Delta\_{i}=I(Z\_{i};Y\mid X)-I(Z\_{i};Z\_{<i}\mid X),$$ |  | (36) |

where the *redundancy term* $I(Z\_{i};Z\_{<i}\mid X)$ quantifies how much the $i$-th output overlaps with previous outputs.
Thus, early saturation arises when repeated calls increase $I(Z\_{i};Z\_{<i}\mid X)$, leaving little additional evidence to accumulate.
Homogeneous agents typically induce large redundancy due to similar reasoning trajectories, while heterogeneity mitigates overlap and sustains $\Delta\_{i}$.

Since $I(Z\_{i};Y\mid X,Z\_{<i})\geq 0$, the identity also implies
$I(Z\_{i};Z\_{<i}\mid X)\leq I(Z\_{i};Y\mid X)$ under Assumption [A.6](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem6 "Assumption A.6 (Conditional Independence for Parallel Sampling (All Types)). ‣ A.3.1 Conditional Independence for Parallel Sampling ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").

#### A.3.3 Homogeneous Parallel Bound

###### Proposition A.9 (Homogeneous Parallel Upper Bound).

Assume $m$ parallel samples from a single type $b$ under Assumption [A.6](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem6 "Assumption A.6 (Conditional Independence for Parallel Sampling (All Types)). ‣ A.3.1 Conditional Independence for Parallel Sampling ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
Then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:m};Y\mid X)\leq H(Y\mid X)\;\wedge\;mI\_{b}.$$ |  | (37) |

###### Proof.

By chain rule,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:m};Y\mid X)=\sum\_{i=1}^{m}I(Z\_{i};Y\mid X,Z\_{<i}).$$ |  | (38) |

Using Eq. ([35](https://arxiv.org/html/2602.03794v1#A1.E35 "Equation 35 ‣ Corollary A.8 (Incremental Gain under Parallel Sampling). ‣ A.3.2 A Redundancy Identity ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) and $I(Z\_{i};Y\mid X)=I\_{b}$ for all $i$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:m};Y\mid X)\leq\sum\_{i=1}^{m}I\_{b}=mI\_{b}.$$ |  | (39) |

The finite budget further implies $I(Z\_{1:m};Y\mid X)\leq H(Y\mid X)$.
Combining yields Eq. ([37](https://arxiv.org/html/2602.03794v1#A1.E37 "Equation 37 ‣ Proposition A.9 (Homogeneous Parallel Upper Bound). ‣ A.3.3 Homogeneous Parallel Bound ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")).
∎

#### A.3.4 Heterogeneous Parallel Bound

###### Theorem A.10 (Heterogeneous Parallel Upper Bound).

Consider parallel voting with configuration types $\mathcal{B}$.
Let type $b$ be sampled $m\_{b}$ times, with total $n=\sum\_{b\in\mathcal{B}}m\_{b}$.
Then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)\;\leq\;H(Y\mid X)\;\wedge\;\sum\_{b\in\mathcal{B}}m\_{b}\,I\_{b}.$$ |  | (40) |

###### Proof.

Apply the chain rule:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)=\sum\_{i=1}^{n}I(Z\_{i};Y\mid X,Z\_{<i}).$$ |  | (41) |

By Eq. ([35](https://arxiv.org/html/2602.03794v1#A1.E35 "Equation 35 ‣ Corollary A.8 (Incremental Gain under Parallel Sampling). ‣ A.3.2 A Redundancy Identity ‣ A.3 Parallel Voting: Assumptions and Upper Bounds ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")), each term is bounded by $I(Z\_{i};Y\mid X)=I\_{b(i)}$.
Summing over steps grouped by type gives $\sum\_{b\in\mathcal{B}}m\_{b}\,I\_{b}$.
The finite budget gives the minimum with $H(Y\mid X)$.
∎

### A.4 Sequential Pipelines and Debate: Upper Bounds

In sequential settings, each output conditions on the interaction history.
This invalidates conditional independence, but the chain rule remains valid.

#### A.4.1 Maximal Per-Step Contribution

Define the maximal incremental contribution for agent configuration type $b$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{b}^{\max}:=\sup\_{z\_{<i}}I(Z\_{i};Y\mid X,Z\_{<i}=z\_{<i},b(i)=b).$$ |  | (42) |

###### Proposition A.11 (Sequential Pipeline Upper Bound).

For any sequential MAS with $n$ steps,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)\;\leq\;H(Y\mid X)\;\wedge\;\sum\_{i=1}^{n}I\_{b(i)}^{\max}.$$ |  | (43) |

###### Proof.

By chain rule,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(Z\_{1:n};Y\mid X)=\sum\_{i=1}^{n}I(Z\_{i};Y\mid X,Z\_{<i}).$$ |  | (44) |

For each $i$, by definition of $I\_{b(i)}^{\max}$ we have
$I(Z\_{i};Y\mid X,Z\_{<i})\leq I\_{b(i)}^{\max}$.
Summing yields the stated bound, and the finite budget gives the minimum with $H(Y\mid X)$.
∎

##### Debate.

Two-agent debate is a special case of sequential interaction and inherits the same ceiling $H(Y\mid X)$.
This formalizes why debate cannot systematically improve over voting if agents remain redundant.

### A.5 Lower Bound via Independent Evidence-Bits Coverage

This section formalizes the “effective channels” view used in the main text.
It proves Theorem [A.15](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem15 "Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") (geometric contraction of the residual uncertainty)
and Corollary [A.16](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem16 "Corollary A.16 (Saturated Lower Bound (in Expectation)). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") (the saturated lower bound in expectation), which together imply a characteristic rapid-then-saturating improvement curve $1-e^{-\alpha K}$ emphasized in Eq. ([14](https://arxiv.org/html/2602.03794v1#S4.E14 "Equation 14 ‣ Fast-then-slow scaling: the 1-𝑒^{-𝛼⁢𝐾} shape. ‣ 4.2 𝐾 as the State Variable of MAS Scaling ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) of the main text.

#### A.5.1 Evidence Bits Model

###### Assumption A.12 (Independent Evidence Bits).

There exist latent variables $U=(U\_{1},\ldots,U\_{M})$ such that:

1. 1.

   (Sufficiency) $H(Y\mid X,U)=0$.
2. 2.

   (Conditional independence) $U\_{1},\ldots,U\_{M}$ are independent conditioned on $X$.
3. 3.

   (Matching uncertainty scale) $H(U\mid X)=H(Y\mid X)$.

Assumption [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")(iii) calibrates the latent “evidence bits” to exactly match the
intrinsic task uncertainty. In particular, recovering all evidence bits eliminates residual uncertainty about $Y$.

#### A.5.2 Fractional Coverage by Effective Channels

###### Assumption A.13 (Fractional Evidence Coverage).

Let $\tilde{Z}\_{1:K}$ denote $K$ effective channels extracted from an MAS transcript.
For each evidence bit $U\_{j}$ and each channel $k\in\{1,\ldots,K\}$, define a Bernoulli indicator $C\_{j,k}\in\{0,1\}$:
$C\_{j,k}=1$ means channel $k$ reveals $U\_{j}$.
Assume:

1. 1.

   $\mathbb{P}(C\_{j,k}=1)=\alpha$ for some fixed $\alpha\in(0,1)$.
2. 2.

   For each fixed $j$, $\{C\_{j,k}\}\_{k=1}^{K}$ are independent.
3. 3.

   If $\exists k$ such that $C\_{j,k}=1$, then $H(U\_{j}\mid X,\tilde{Z}\_{1:K})=0$.

Assumption [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") is a minimal complementarity model: each *new effective channel* has a constant
probability $\alpha$ of covering any remaining evidence bit, independently across channels.

#### A.5.3 Residual Contraction and Saturated Lower Bound

###### Lemma A.14 (Expected Geometric Decay of Residual Uncertainty).

Under Assumptions [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}\big[H(Y\mid X,\tilde{Z}\_{1:K})\big]\;\leq\;(1-\alpha)^{K}\,H(Y\mid X).$$ |  | (45) |

###### Proof.

By Assumption [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")(i), $Y$ is a function of $(X,U)$, hence

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H(Y\mid X,\tilde{Z}\_{1:K})\leq H(U\mid X,\tilde{Z}\_{1:K}).$$ |  | (46) |

Subadditivity of conditional entropy yields

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H(U\mid X,\tilde{Z}\_{1:K})\leq\sum\_{j=1}^{M}H(U\_{j}\mid X,\tilde{Z}\_{1:K}).$$ |  | (47) |

Fix $j$. If $U\_{j}$ is revealed by at least one effective channel, then by
Assumption [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")(iii),
$H(U\_{j}\mid X,\tilde{Z}\_{1:K})=0$; otherwise,
$H(U\_{j}\mid X,\tilde{Z}\_{1:K})\leq H(U\_{j}\mid X)$.
The probability that $U\_{j}$ is not revealed by any of the $K$ channels is $(1-\alpha)^{K}$
by Assumption [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")(ii). Therefore,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}\big[H(U\_{j}\mid X,\tilde{Z}\_{1:K})\big]\leq(1-\alpha)^{K}\,H(U\_{j}\mid X).$$ |  | (48) |

Summing over $j$ gives

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}\big[H(U\mid X,\tilde{Z}\_{1:K})\big]\leq(1-\alpha)^{K}\sum\_{j=1}^{M}H(U\_{j}\mid X).$$ |  | (49) |

Finally, by Assumption [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")(ii),
$H(U\mid X)=\sum\_{j=1}^{M}H(U\_{j}\mid X)$, and by (iii) $H(U\mid X)=H(Y\mid X)$.
Combining completes the proof.
∎

###### Theorem A.15 (Geometric Contraction with Effective Channels).

Under Assumptions [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") and [A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"),

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H(Y\mid X)-\mathbb{E}\big[I(\tilde{Z}\_{1:K};Y\mid X)\big]~=~\mathbb{E}\big[H(Y\mid X,\tilde{Z}\_{1:K})\big]\;\leq\;(1-\alpha)^{K}\,H(Y\mid X).$$ |  | (50) |

Consequently,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\boxed{\begin{split}&H(Y\mid X)-\mathbb{E}\!\left[I(\tilde{Z}\_{1:K};Y\mid X)\right]\\ &\;\leq\;(1-\alpha)^{K}\,H(Y\mid X)\;\leq\;e^{-\alpha K}\,H(Y\mid X).\end{split}}$$ |  | (51) |

Equivalently, the *normalized residual* satisfies
$\mathbb{E}[H(Y\mid X,\tilde{Z}\_{1:K})]/H(Y\mid X)\leq(1-\alpha)^{K}\leq e^{-\alpha K}$.

###### Proof.

By definition,
$I(\tilde{Z}\_{1:K};Y\mid X)=H(Y\mid X)-H(Y\mid X,\tilde{Z}\_{1:K})$.
Taking expectations yields

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H(Y\mid X)-\mathbb{E}[I(\tilde{Z}\_{1:K};Y\mid X)]=\mathbb{E}[H(Y\mid X,\tilde{Z}\_{1:K})].$$ |  | (52) |

Apply Lemma [A.14](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem14 "Lemma A.14 (Expected Geometric Decay of Residual Uncertainty). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") to obtain ([50](https://arxiv.org/html/2602.03794v1#A1.E50 "Equation 50 ‣ Theorem A.15 (Geometric Contraction with Effective Channels). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")).
The exponential form follows from $(1-\alpha)^{K}\leq e^{-\alpha K}$.
∎

###### Corollary A.16 (Saturated Lower Bound (in Expectation)).

Under the same assumptions,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\boxed{\mathbb{E}\big[I(\tilde{Z}\_{1:K};Y\mid X)\big]\;\geq\;H(Y\mid X)\Big(1-(1-\alpha)^{K}\Big)\;\geq\;H(Y\mid X)\Big(1-e^{-\alpha K}\Big).}$$ |  | (53) |

###### Proof.

Rearrange the identity
$\mathbb{E}[I(\tilde{Z}\_{1:K};Y\mid X)]=H(Y\mid X)-\mathbb{E}[H(Y\mid X,\tilde{Z}\_{1:K})]$
and apply Lemma [A.14](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem14 "Lemma A.14 (Expected Geometric Decay of Residual Uncertainty). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"). The exponential form follows from
$(1-\alpha)^{K}\leq e^{-\alpha K}$.
∎

#### A.5.4 Heterogeneity Advantage as an $\alpha K$ Comparison

This subsection provides a formal underpinning for the main-text comparison
(Corollary [4.4](https://arxiv.org/html/2602.03794v1#S4.Thmtheorem4 "Corollary 4.4 (Heterogeneity Advantage). ‣ A direct heterog–homog advantage bound. ‣ 4.2 𝐾 as the State Variable of MAS Scaling ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")): heterogeneity improves expected recoverable information whenever it increases
the effective evidence term $\alpha K$.

###### Lemma A.17 (Monotonicity in $\alpha K$).

Define $f(t):=1-e^{-t}$ for $t\geq 0$.
Then for any $t\_{1},t\_{2}\geq 0$, $t\_{2}>t\_{1}$ implies $f(t\_{2})>f(t\_{1})$.

###### Proof.

$f^{\prime}(t)=e^{-t}>0$ for all $t\geq 0$, hence $f$ is strictly increasing.
∎

###### Corollary A.18 (Heterogeneity Advantage from Corollary [A.16](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem16 "Corollary A.16 (Saturated Lower Bound (in Expectation)). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")).

Consider two designs summarized by $(K\_{\mathrm{homog}},\alpha\_{\mathrm{homog}})$ and $(K\_{\mathrm{heterog}},\alpha\_{\mathrm{heterog}})$
under Assumptions [A.12](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem12 "Assumption A.12 (Independent Evidence Bits). ‣ A.5.1 Evidence Bits Model ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")–[A.13](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem13 "Assumption A.13 (Fractional Evidence Coverage). ‣ A.5.2 Fractional Coverage by Effective Channels ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity").
By Corollary [A.16](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem16 "Corollary A.16 (Saturated Lower Bound (in Expectation)). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), the lower bounds on recoverable information for the two designs are:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathbb{E}[I\_{\mathrm{heterog}}]$ | $\displaystyle\geq H(Y\mid X)\bigl(1-e^{-\alpha\_{\mathrm{heterog}}K\_{\mathrm{heterog}}}\bigr),$ |  | (54) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathbb{E}[I\_{\mathrm{homog}}]$ | $\displaystyle\geq H(Y\mid X)\bigl(1-e^{-\alpha\_{\mathrm{homog}}K\_{\mathrm{homog}}}\bigr).$ |  | (55) |

When $\alpha\_{\mathrm{heterog}}K\_{\mathrm{heterog}}>\alpha\_{\mathrm{homog}}K\_{\mathrm{homog}}$, the heterogeneous design enjoys a strictly higher information-recovery guarantee, since by Lemma [A.17](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem17 "Lemma A.17 (Monotonicity in 𝛼⁢𝐾). ‣ A.5.4 Heterogeneity Advantage as an 𝛼⁢𝐾 Comparison ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") the function $1-e^{-t}$ is strictly increasing in $t$.

###### Proof.

Apply Corollary [A.16](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem16 "Corollary A.16 (Saturated Lower Bound (in Expectation)). ‣ A.5.3 Residual Contraction and Saturated Lower Bound ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") to each design to obtain ([54](https://arxiv.org/html/2602.03794v1#A1.E54 "Equation 54 ‣ Corollary A.18 (Heterogeneity Advantage from Corollary ). ‣ A.5.4 Heterogeneity Advantage as an 𝛼⁢𝐾 Comparison ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")) and ([55](https://arxiv.org/html/2602.03794v1#A1.E55 "Equation 55 ‣ Corollary A.18 (Heterogeneity Advantage from Corollary ). ‣ A.5.4 Heterogeneity Advantage as an 𝛼⁢𝐾 Comparison ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")).
Since $\alpha\_{\mathrm{heterog}}K\_{\mathrm{heterog}}>\alpha\_{\mathrm{homog}}K\_{\mathrm{homog}}$ and $f(t)=1-e^{-t}$ is strictly increasing (Lemma [A.17](https://arxiv.org/html/2602.03794v1#A1.Thmtheorem17 "Lemma A.17 (Monotonicity in 𝛼⁢𝐾). ‣ A.5.4 Heterogeneity Advantage as an 𝛼⁢𝐾 Comparison ‣ A.5 Lower Bound via Independent Evidence-Bits Coverage ‣ Appendix A Proofs and Technical Details ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")), the lower bound for the heterogeneous design is strictly larger than that for the homogeneous design.
∎

### A.6 Properties of the Effective Channel Count $K^{\*}$

This section proves basic properties of the label-free proxy $K^{\*}$ used in the main text
(Section [4.3](https://arxiv.org/html/2602.03794v1#S4.SS3 "4.3 Measuring Effective Channels Without Labels: 𝐾^∗ ‣ 4 Why Diversity Matters ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity")). We restate the definition for completeness.

##### Setup.

Given $n$ outputs, let $\hat{\mathbf{z}}\_{i}:=\mathrm{Emb}(Z\_{i})/\|\mathrm{Emb}(Z\_{i})\|\_{2}\in\mathbb{R}^{d}$ be the normalized embeddings, and let $M\in\mathbb{R}^{n\times d}$ be the embedding matrix whose $i$-th row is $\hat{\mathbf{z}}\_{i}^{\top}$.
Define the cosine-similarity Gram matrix $G\_{ij}:=\langle\hat{\mathbf{z}}\_{i},\hat{\mathbf{z}}\_{j}\rangle$ (equivalently $G=MM^{\top}$) and its trace-normalization

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\rho:=\frac{G}{\mathrm{Tr}(G)}.$$ |  | (56) |

Let $\{\lambda\_{j}\}\_{j=1}^{n}$ be the eigenvalues of $\rho$.
The von Neumann entropy is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H(\rho):=-\sum\_{j=1}^{n}\lambda\_{j}\log\_{2}\lambda\_{j},$$ |  | (57) |

and the effective channel count is $K^{\*}:=2^{H(\rho)}$.

###### Proposition A.19 (Basic Properties of $K^{\*}$).

For any nonzero embedding matrix $M$,

1. 1.

   $1\leq K^{\*}\leq n$.
2. 2.

   $K^{\*}=1$ iff $\rho$ is rank-$1$ (all embeddings are collinear up to scaling).
3. 3.

   $K^{\*}=n$ iff $\rho=\frac{1}{n}I\_{n}$ (embeddings are orthogonal with equal norm).
4. 4.

   $K^{\*}$ is continuous in $M$ (when $\mathrm{Tr}(G)>0$) and invariant to permutation of outputs.

###### Proof.

(i) Bounds.
Entropy satisfies $0\leq H(\rho)\leq\log\_{2}n$, hence
$1=2^{0}\leq 2^{H(\rho)}\leq 2^{\log\_{2}n}=n$.

(ii) $K^{\*}=1$.
$H(\rho)=0$ iff the spectrum is $(1,0,\ldots,0)$, which holds iff $\rho$ is rank-$1$.
This corresponds to all rows of $M$ being collinear, i.e., all embeddings are identical up to scaling.

(iii) $K^{\*}=n$.
$H(\rho)=\log\_{2}n$ iff $\lambda\_{j}=1/n$ for all $j$, which occurs when $\rho=\frac{1}{n}I\_{n}$.
This corresponds to $G$ being proportional to the identity, i.e., embeddings are orthogonal with equal norm.

(iv) Continuity and permutation invariance.
The map $M\mapsto G=MM^{\top}$ is continuous.
Normalization by $\mathrm{Tr}(G)$ is continuous when $\mathrm{Tr}(G)>0$.
Eigenvalues of a symmetric matrix vary continuously with the entries, and entropy is continuous on the simplex.
Permutation of outputs corresponds to $G\mapsto PGP^{\top}$ for a permutation matrix $P$, which preserves eigenvalues.
∎

## Appendix B Supplementary Experiments

### B.1 Closed-Source Model Experiments

We extend our analysis to closed-source models (gpt-4.1-mini, gpt-5-mini) on the Formal Logic benchmark to test whether the heterogeneity advantage generalizes across model families.
Table [4](https://arxiv.org/html/2602.03794v1#A2.T4 "Table 4 ‣ B.1 Closed-Source Model Experiments ‣ Appendix B Supplementary Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") compares closed- and open-source models under homogeneous (Base) and heterogeneous (Heterog) configurations at $N\!=\!2$ and $N\!=\!16$.

Table 4: Closed-source vs. Open-source on Formal Logic (%). $\Delta\_{\text{Het}}$: average Heterog gain over Base. $\Delta\_{N}$: accuracy change from $N\!=\!2$ to $N\!=\!16$ under the Heterog configuration.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Method | Base | | Heterog | | $\Delta\_{\text{Het}}$ | $\Delta\_{N}$ |
| N=2 | N=16 | N=2 | N=16 |
| Closed-source | | | | | | | |
| gpt-4.1-mini | vote | 46.83 | 48.41 | 55.56 | 52.38 | +6.35 | $-$3.18 |
| debate | 46.03 | 39.68 | 50.79 | 42.86 | +3.97 | $-$7.93 |
| gpt-5-mini | vote | 0.00 | 6.35 | 35.71 | 49.21 | +39.29 | +13.50 |
| debate | 0.79 | 6.35 | 34.92 | 54.76 | +41.27 | +19.84 |
| Open-source | | | | | | | |
| Qwen-2.5-7B | vote | 38.10 | 44.44 | 45.24 | 50.00 | +6.35 | +4.76 |
| debate | 30.95 | 34.13 | 25.40 | 38.10 | $-$0.79 | +12.70 |
| Llama-3.1-8B | vote | 45.24 | 42.86 | 44.44 | 54.76 | +5.55 | +10.32 |
| debate | 24.60 | 31.75 | 35.71 | 39.68 | +9.52 | +3.97 |
| Mistral-7B | vote | 35.71 | 42.06 | 34.92 | 41.27 | $-$0.79 | +6.35 |
| debate | 34.92 | 44.44 | 39.68 | 46.83 | +3.58 | +7.15 |

##### Key findings.

The results confirm that the heterogeneity advantage generalizes to closed-source models, while revealing that its magnitude and scaling behavior vary across model families.

- •

  Heterogeneity consistently improves over homogeneous baselines.
  All five models exhibit positive $\Delta\_{\text{Het}}$ in at least one interaction mechanism, confirming that the advantage is not specific to open-source settings.
- •

  Models with weaker homogeneous baselines benefit more from heterogeneity.
  gpt-5-mini achieves near-zero accuracy under homogeneous settings (0–6%) but reaches 35–55% with heterogeneous prompting ($\Delta\_{\text{Het}}$ of +39–41%).
  In contrast, gpt-4.1-mini and the open-source models, which already achieve 25–46% under homogeneous settings, show more modest gains (+3–10%).
- •

  Scaling trends diverge across model families.
  Open-source models exhibit positive scaling ($\Delta\_{N}>0$) under both configurations.
  gpt-4.1-mini, however, shows *negative* scaling in debate: accuracy drops from 50.79% to 42.86% ($\Delta\_{N}=-7.93$) even under heterogeneous settings, indicating that adding more agents can hurt when the base model is already strong.
  gpt-5-mini shows the opposite pattern: under heterogeneous settings it benefits substantially from more agents ($\Delta\_{N}=+19.84$ for Debate), whereas its homogeneous scaling remains near-flat.

### B.2 Robustness to Embedding Model Choice

A potential concern is whether our effective channel metric $K^{\*}$ depends critically on the choice of embedding model. To address this, we recompute $K^{\*}$ using a different embedding model, gte-Qwen2-1.5B-instruct (1536 dimensions), and compare the results against our primary model NV-Embed-v2 (4096 dimensions). We conduct this comparison across seven datasets (ARC, Formal Logic, GSM8K, HellaSwag, Pro Medicine, TruthfulQA, WinoGrande), varying agent counts $N\in\{2,4,8,12,16\}$ and interaction mechanisms (Vote and Debate).

Since embedding dimensionality affects absolute $K^{\*}$ values, direct comparison of raw values across models is not meaningful. Instead, we assess robustness by measuring whether the two embeddings agree on *relative ordering*: within each (configuration type, dataset) pair, do both embeddings rank different (method, $N$) combinations consistently? Across all matched pairs, we observe an average Spearman correlation of $\rho=0.91$, with over 95% of pairs showing $\rho>0.5$. This indicates that both embeddings consistently identify which experimental settings produce more diverse outputs, even though their absolute scales differ.

Furthermore, both embeddings yield $K^{\*}$ metrics that positively correlate with task accuracy (NV-Embed-v2: $r=0.40$; gte-Qwen2: $r=0.23$), confirming that our core finding, diversity predicts performance, is not an artifact of a particular embedding choice. We use NV-Embed-v2 in the main experiments as it achieves stronger predictive power.

### B.3 Is $K^{\*}$ More Than a Proxy for Scale and Configuration?

Since $K^{\*}$ is computed from agent outputs whose diversity naturally varies with agent count $N$ and configuration type, a key question is whether $K^{\*}$ captures information *beyond* these design variables, or merely serves as a redundant proxy for them.
To disentangle this, we fit a baseline regression that predicts task accuracy from $N$ and configuration labels alone, then measure the incremental variance explained ($\Delta R^{2}$) when $K^{\*}$ or its components are added.

Table 5: Incremental Explanatory Power of Effective Channels.
The baseline model using only agent count ($N$) and configuration labels explains little variance ($R^{2}=0.062$). Adding $K^{\*}$ substantially improves fit ($\Delta R^{2}=+0.147$), and conditioning on answer correctness ($K^{\*}\_{c}$) yields the largest gain ($\Delta R^{2}=+0.331$), while $K^{\*}\_{w}$ contributes negligibly.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Model | $R^{2}$ | Adj. $R^{2}$ | $\Delta R^{2}$ | AIC |
| Baseline ($N$ + Config) | 0.062 | 0.044 | – | 1806.6 |
| Baseline + $K^{\*}$ | 0.209 | 0.190 | +0.147 | 1771.1 |
| Baseline + $K^{\*}\_{c}$ | 0.393 | 0.378 | +0.331 | 1713.0 |
| Baseline + $K^{\*}\_{c}+K^{\*}\_{w}$ | 0.396 | 0.379 | +0.334 | 1713.8 |
| Baseline + $K^{\*}\_{c}/K^{\*}\_{w}$ | 0.325 | 0.309 | +0.263 | 1736.4 |

Table [5](https://arxiv.org/html/2602.03794v1#A2.T5 "Table 5 ‣ B.3 Is 𝐾^∗ More Than a Proxy for Scale and Configuration? ‣ Appendix B Supplementary Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") reveals three findings.
First, the baseline model with only $N$ and configuration labels achieves $R^{2}=0.062$, confirming that scale and configuration alone are poor predictors of MAS performance.
Second, adding $K^{\*}$ raises $\Delta R^{2}$ by $+0.147$, demonstrating that it captures structural information about output diversity that is not reducible to agent count or configuration choice.
Third, and most importantly, replacing $K^{\*}$ with its correctness-conditioned component $K^{\*}\_{c}$ more than doubles the incremental gain ($\Delta R^{2}=+0.331$), while further adding $K^{\*}\_{w}$ yields negligible improvement ($\Delta R^{2}$: $+0.331\to+0.334$).
This asymmetry directly supports our central thesis: what drives MAS performance is not output diversity in general, but specifically the diversity of *correct* reasoning paths. Increasing the number of distinct ways agents arrive at the right answer is far more predictive than total channel count or the diversity of incorrect responses.

### B.4 Sanity Checks: Are $K^{\*}$–Performance Relations Accidental?

We further test whether the observed relationship between effective channels
and performance could arise by chance.
To this end, we conduct permutation-based randomization tests that preserve
the marginal distribution of accuracy while destroying any structural
association with $K^{\*}$.

Table 6: Permutation Sanity Check (1000 shuffles).
Observed correlations between effective-channel metrics and accuracy lie far
outside the null distribution, confirming that the relationship is not due to chance.

|  |  |  |  |
| --- | --- | --- | --- |
| Metric | Observed $r$ | $z$-score | $p$ |
| $K^{\*}$ | 0.388 | 5.87 | $<$0.001 |
| $K^{\*}\_{c}$ | 0.535 | 7.75 | $<$0.001 |
| $K^{\*}\_{c}/K^{\*}\_{w}$ | 0.503 | 7.23 | $<$0.001 |

As shown in Table [6](https://arxiv.org/html/2602.03794v1#A2.T6 "Table 6 ‣ B.4 Sanity Checks: Are 𝐾^∗–Performance Relations Accidental? ‣ Appendix B Supplementary Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity"), all effective-channel metrics exhibit
$z$-scores well above 5 under permutation testing, with $p<10^{-3}$.
This rules out the possibility that the observed correlations arise from random
alignment or dataset-specific artifacts.
Notably, $K^{\*}\_{c}$ again yields the strongest signal, reinforcing the interpretation
that correct-path diversity is the dominant driver of multi-agent performance.

Table 7: Model Ablation on Formal Logic: Impact of Heterogeneity from $N=2$ to $N=16$

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Base Model | Agents ($N$) | Vote (Round 0) | | | Debate (Final) | | |
| Homog | Heterog | $\Delta\_{H-M}$ | Homog | Heterog | $\Delta\_{H-M}$ |
| Qwen-2.5-7B | 2 | 38.10% | 45.24% | +7.14% | 30.95% | 25.40% | -5.55% |
| 4 | 42.06% | 53.97% | +11.91% | 30.16% | 34.92% | +4.76% |
| 8 | 43.65% | 50.00% | +6.35% | 28.57% | 38.10% | +9.53% |
| 12 | 44.44% | 52.38% | +7.94% | 31.75% | 35.71% | +3.96% |
| 16 | 44.44% | 50.00% | +5.56% | 34.13% | 38.10% | +3.97% |
| Llama-3.1-8B | 2 | 45.24% | 44.44% | -0.80% | 24.60% | 35.71% | +11.11% |
| 4 | 42.86% | 53.97% | +11.11% | 23.02% | 24.60% | +1.58% |
| 8 | 41.27% | 52.38% | +11.11% | 27.78% | 35.71% | +7.93% |
| 12 | 43.65% | 53.97% | +10.32% | 30.95% | 38.89% | +7.94% |
| 16 | 42.86% | 54.76% | +11.90% | 31.75% | 39.68% | +7.93% |
| Mistral-7B | 2 | 35.71% | 34.92% | -0.79% | 34.92% | 39.68% | +4.76% |
| 4 | 34.92% | 36.51% | +1.59% | 35.71% | 44.44% | +8.73% |
| 8 | 32.54% | 37.30% | +4.76% | 40.48% | 38.89% | -1.59% |
| 12 | 38.89% | 38.10% | -0.79% | 42.06% | 42.86% | +0.80% |
| 16 | 42.06% | 41.27% | -0.79% | 44.44% | 46.83% | +2.39% |
| MIX | 2 | 45.24% | 48.41% | +3.17% | 34.13% | 38.89% | +4.76% |
| 4 | 47.62% | 52.38% | +4.76% | 42.86% | 53.17% | +10.31% |
| 8 | 47.62% | 55.56% | +7.94% | 49.21% | 53.17% | +3.96% |
| 12 | 48.41% | 57.94% | +9.53% | 48.41% | 54.76% | +6.35% |
| 16 | 50.00% | 53.97% | +3.97% | 43.65% | 51.59% | +7.94% |

### B.5 Case Study: Heterogeneity Effects Across Models and Workflows

Table [7](https://arxiv.org/html/2602.03794v1#A2.T7 "Table 7 ‣ B.4 Sanity Checks: Are 𝐾^∗–Performance Relations Accidental? ‣ Appendix B Supplementary Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") reports a comprehensive ablation study on the
Formal Logic benchmark, varying base models, agent counts ($N=2$–$16$), and
interaction mechanisms.
Across nearly all settings, heterogeneous configurations outperform homogeneous
ones, often by substantial margins.
Importantly, these gains do not arise from scaling alone.
For example, in both Vote and Debate, increasing $N$ beyond moderate values
frequently yields diminishing or unstable returns in homogeneous settings,
while heterogeneous systems maintain consistent improvements.
This pattern holds across all three base models and their mixture, indicating that
the benefit of heterogeneity is robust to model choice and interaction protocol.

Table 8: Formal Logic: Synergy of Model Mixing (MIX vs. Best Single Model)

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agents ($N$) | Best Single (Heterog) | MIX (Heterog) | $\Delta\_{\text{MIX vs. Best}}$ | MIX (Homog) | $\Delta\_{\text{H-M (MIX)}}$ |
| 2 | 39.68% | 38.89% | -0.79% | 34.13% | +4.76% |
| 4 | 44.44% | 53.17% | +8.73% | 42.86% | +10.31% |
| 8 | 38.89% | 53.17% | +14.28% | 49.21% | +3.96% |
| 12 | 42.86% | 54.76% | +11.90% | 48.41% | +6.35% |
| 16 | 46.83% | 51.59% | +4.76% | 43.65% | +7.94% |

Table [8](https://arxiv.org/html/2602.03794v1#A2.T8 "Table 8 ‣ B.5 Case Study: Heterogeneity Effects Across Models and Workflows ‣ Appendix B Supplementary Experiments ‣ Understanding Agent Scaling in LLM-Based Multi-Agent Systems via Diversity") isolates the effect of model mixing by comparing
a heterogeneous mixture (MIX) against the best-performing single model under
the same agent count.
At $N\geq 4$, MIX consistently outperforms the strongest individual model by
large margins, reaching up to +14.28% absolute accuracy at $N=8$.

Crucially, these gains cannot be explained by model selection alone.
Even when the best single model is used with heterogeneous prompting, the MIX
configuration achieves higher performance, demonstrating genuine synergy across
models rather than simple averaging or dominance effects.
