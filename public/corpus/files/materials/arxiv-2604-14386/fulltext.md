---
id: arxiv-2604-14386-text
type: material
title: 'Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees'
work_id: arxiv-2604-14386
source_url: https://arxiv.org/html/2604.14386v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 1a6aeb4af34f514741780a817bf8689df9b47c6c08997843b368556355cc885c
---

> Источник: [https://arxiv.org/html/2604.14386v1](https://arxiv.org/html/2604.14386v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees

Dongxin Guo
Affiliation: Department of Compute Science, The University of Hong Kong, Hong Kong, China
Email: [bettyguo@connect.hku.hk](mailto:bettyguo@connect.hku.hk)
  
Jikun Wu
Affiliation: Brain Investing Limited, Hong Kong, China
Stellaris AI Limited, Hong Kong, China
Email: [hk950014@connect.hku.hk](mailto:hk950014@connect.hku.hk)
  
Siu-Ming Yiu
Affiliation: Department of Compute Science, The University of Hong Kong, Hong Kong, China
Email: [smyiu@cs.hku.hk](mailto:smyiu@cs.hku.hk)

###### Abstract

Large Language Model (LLM) agents are increasingly deployed in multi-agent systems requiring strategic coordination. While recent work has analyzed LLM behavior in two-player games, *coalition formation*, where $n$ agents dynamically form cooperative groups, remains theoretically uncharacterized. We present the first framework grounding coalition formation in LLM agent networks in hedonic game theory with formal stability guarantees. We introduce the *LLM Coalition Formation Game* (LCFG), establish sufficient conditions for Nash-stable partitions, and prove complexity results. Our analysis reveals that LLM agents exhibit bounded rationality characterized by $\epsilon$-rational preferences; we provide both deterministic existence guarantees and consistency-driven stability bounds whose predictions are consistent with empirical outcomes. Experiments with GPT-4, Claude-3, and Llama-3 across 2,400 episodes validate our framework: LLM coalitions achieve Nash stability in 73.2% of cases under our *Coalition-of-Thought* (CoalT) protocol, compared to 58.4% under chain-of-thought and 41.8% under standard prompting ($p<0.001$). Our framework provides theoretical foundations for designing stable multi-agent LLM systems.

## 1 Introduction

The deployment of Large Language Model (LLM) agents in multi-stakeholder environments, from collaborative research systems [[37](https://arxiv.org/html/2604.14386v1#bib.bib1)] to automated negotiations [[17](https://arxiv.org/html/2604.14386v1#bib.bib2), [1](https://arxiv.org/html/2604.14386v1#bib.bib3)], raises fundamental questions about their strategic behavior in cooperative settings. While extensive work has characterized LLM performance in two-player strategic games [[16](https://arxiv.org/html/2604.14386v1#bib.bib4), [15](https://arxiv.org/html/2604.14386v1#bib.bib5), [10](https://arxiv.org/html/2604.14386v1#bib.bib23)], the analysis of *coalition formation*, where $n$ agents must dynamically organize into cooperative groups, remains conspicuously absent from the literature.

This gap is significant for three reasons. First, real-world multi-agent deployments inherently involve coalition dynamics: research teams must form around problems, negotiating agents must identify partners, and distributed systems must allocate agents to tasks. Second, coalition formation exhibits qualitatively different strategic considerations than two-player games; agents must reason about group membership, coalition stability, and collective payoffs rather than bilateral outcomes. Third, recent work explicitly identifies this gap: studies on multi-player LLM games note that “group size fixed at 2-3 agents precludes examination of larger-group phenomena such as coalition formation” [[23](https://arxiv.org/html/2604.14386v1#bib.bib6)], while recent surveys on game theory and LLMs identify cooperative game theory as “underexplored” [[33](https://arxiv.org/html/2604.14386v1#bib.bib24)].

Why Game Theory? One might ask whether a formal game-theoretic framework is necessary, or if simpler heuristics suffice. Our experiments demonstrate clear value: (1) Greedy matching achieves only 52.1% stability with lower welfare than structured approaches, showing myopic optimization fails; (2) vanilla chain-of-thought [[35](https://arxiv.org/html/2604.14386v1#bib.bib13)] achieves 58.4%, indicating that generic structured reasoning is insufficient; the game-theoretic framing in CoalT provides an additional 14.8 percentage points improvement ($p<0.001$); (3) our theoretical bounds are consistent with observed empirical stability rates, enabling principled protocol design.

Why Exclusive Partitions? We model coalitions as a partition (each agent belongs to exactly one coalition) because in practical multi-agent LLM deployments, resource constraints (including API rate limits, compute budgets, and context window sizes) prevent an agent from simultaneously contributing to multiple coalitions within the same task episode. This mirrors team formation settings where each worker is assigned to one project at a time [[36](https://arxiv.org/html/2604.14386v1#bib.bib8)]. In our framework, agents are the strategic decision-makers: each agent evaluates whether it would benefit from joining a different coalition and declares its preferences accordingly (Section [6](https://arxiv.org/html/2604.14386v1#S6 "6 Coalition-of-Thought Prompting ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")). A “deviation” means an agent’s preference declaration indicates it would prefer a different group assignment.

Input ContextGPT-4 Agents ($a\_{1},a\_{2}$)Math0.68Facts0.73Claude-3 Agents ($a\_{3},a\_{4}$)Facts0.78Logic0.74Llama-3 Agents ($a\_{5},a\_{6}$)Logic0.79Math0.58Coalition Formation Task


Agents must partition into stable, complementary coalitions
Coalition-of-Thought (CoalT)Step 1


Capability
Analysis
Step 2


Complem.
Assess.
Step 3


Value
Estimation
Step 4


Coord.
Cost
Step 5


Preference
Declare
Coalition Formation in Latent SpaceBefore$a\_{1}$$a\_{2}$$a\_{3}$$a\_{4}$$a\_{5}$$a\_{6}$$h\leftarrow h+\alpha\cdot\Delta h$Iterative $(T=k)$After$C\_{1}$$C\_{2}$$C\_{3}$OutputNash-Stable Partition $\pi^{\*}$$C\_{1}$:$a\_{1}$$a\_{3}$✓Stable$C\_{2}$:$a\_{2}$$a\_{5}$$a\_{6}$✓Stable$C\_{3}$:$a\_{4}$✓Stable73.2%Nash Stability RateStandard:41.8%CoT: 58.4%CoalT: 73.2%Theorem 2:$\Pr[\text{Nash-stable}]\propto p^{K\_{\text{eff}}}$Consistency $\Rightarrow$ StabilityGPT-4Claude-3Llama-3


Figure 1: LCFG Framework Overview. Left: Input context with heterogeneous LLM agents showing capability profiles across Math, Facts, and Logic dimensions. Center: Coalition-of-Thought (CoalT) reasoning module, a 5-step pipeline that guides agents through structured coalition evaluation. The latent space visualization shows agents transitioning from scattered initial positions to clustered Nash-stable coalitions through iterative refinement ($h\leftarrow h+\alpha\cdot\Delta h$). The dashed border indicates the trainable/promptable module. Right: Output Nash-stable partition $\pi^{\*}$ achieving 73.2% stability rate (+14.8pp over vanilla CoT). Key insight: Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") shows stability scales with preference consistency ($p^{K\_{\text{eff}}}$), not perfect rationality.

Contributions. We address this gap through four contributions:

1. 1.

   Formal Framework: We introduce the *LLM Coalition Formation Game* (LCFG), extending hedonic game theory [[6](https://arxiv.org/html/2604.14386v1#bib.bib7)] to characterize LLM agents with capability profiles and bounded-rational preferences (Section [3](https://arxiv.org/html/2604.14386v1#S3 "3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).
2. 2.

   Stability Theorems: We establish *two complementary guarantees*: (i) deterministic existence under ideal conditions ($\epsilon<\delta/2$), and (ii) *consistency-driven stability bounds* using logit dynamics analysis that decompose stability into preference consistency and game structure factors, providing a conservative lower bound consistent with observed outcomes (Section [4](https://arxiv.org/html/2604.14386v1#S4 "4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).
3. 3.

   Complexity Analysis: We show that *computing* a Nash-stable partition is NP-hard in general hedonic games, motivating structural assumptions under which LCFGs become polynomial-time solvable via *capability-monotonicity* constraints that hold in practice (Section [5](https://arxiv.org/html/2604.14386v1#S5 "5 Complexity Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).
4. 4.

   Experimental Validation: Through 2,400 coalition formation episodes across three LLM architectures with *five baselines including vanilla CoT*, we validate our theoretical framework with formal statistical testing and introduce *Coalition-of-Thought* (CoalT), a prompting protocol achieving significant stability improvements (Section [7](https://arxiv.org/html/2604.14386v1#S7 "7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).

## 2 Related Work

Coalition Game Theory. Coalition formation in multi-agent systems has been extensively studied in classical settings [[36](https://arxiv.org/html/2604.14386v1#bib.bib8), [31](https://arxiv.org/html/2604.14386v1#bib.bib9)]. Hedonic games [[14](https://arxiv.org/html/2604.14386v1#bib.bib25), [6](https://arxiv.org/html/2604.14386v1#bib.bib7)] model agents with preferences over coalition membership, with well-characterized stability concepts: core stability, Nash stability, and individual stability form a hierarchy of solution concepts [[3](https://arxiv.org/html/2604.14386v1#bib.bib33)]. Recent work establishes complexity bounds for random hedonic games [[9](https://arxiv.org/html/2604.14386v1#bib.bib10)] and addresses popularity in fractional hedonic games [[8](https://arxiv.org/html/2604.14386v1#bib.bib26)], but none considers LLM agents. Our work bridges this gap by extending hedonic game theory to account for the bounded rationality and stochastic preferences inherent in LLM decision-making.

LLMs in Strategic Settings. GTBench [[15](https://arxiv.org/html/2604.14386v1#bib.bib5)] and FAIRGAME [[10](https://arxiv.org/html/2604.14386v1#bib.bib23)] provide frameworks for analyzing LLM strategic behavior in competitive games, revealing that LLM performance varies significantly across game types and reasoning complexity. LLMArena [[12](https://arxiv.org/html/2604.14386v1#bib.bib21)] and Alympics [[28](https://arxiv.org/html/2604.14386v1#bib.bib22)] further demonstrate LLM capabilities in dynamic multi-agent environments. LLM-Deliberation [[1](https://arxiv.org/html/2604.14386v1#bib.bib3)] extends this to multi-party negotiation scenarios but without formal coalition-theoretic analysis. Recent work on non-cooperative equilibria includes ECON [[24](https://arxiv.org/html/2604.14386v1#bib.bib38)], which proves existence of Bayesian Nash Equilibrium in multi-LLM coordination, and studies showing that LLM performance degrades with strategic complexity [[18](https://arxiv.org/html/2604.14386v1#bib.bib18)]. Critically, these works focus on two-player or fixed-group competitive/mixed-motive games; extension to $n$-player coalitional settings with dynamic group formation requires fundamentally new theoretical machinery, which we provide.

Cooperative Game Theory for LLMs. A growing body of work applies cooperative game theory to LLM agents, primarily through Shapley value-based credit assignment. Shapley-Coop [[22](https://arxiv.org/html/2604.14386v1#bib.bib34)] introduces “Shapley Chain-of-Thought” for LLM agents to estimate marginal contributions within multi-agent teams, and DAO-Agent [[38](https://arxiv.org/html/2604.14386v1#bib.bib37)] defines explicit characteristic functions over LLM agent coalitions for blockchain-verified reward allocation. However, these approaches assume a fixed grand coalition and compute contribution scores within it; they do not address the *partition optimization* problem of which coalitions should form, nor do they analyze stability of the resulting structures. Separately, Briman et al. [[7](https://arxiv.org/html/2604.14386v1#bib.bib35)] model LLM-mediated coalition formation where agents have Euclidean preferences and an LLM generates textual compromise proposals. While this work features formal coalition structures and iterative partition evolution, LLMs serve as mediator tools rather than autonomous strategic players, and stability analysis is limited to convergence properties without formal guarantees (Nash, core, or individual stability). Kulkarni et al. [[25](https://arxiv.org/html/2604.14386v1#bib.bib36)] use LLMs with hypergame theory to *detect* existing coalitions in Diplomacy from natural language, rather than forming them. Our framework differs from all of these in three respects: LLM agents are the strategic players (not tools), the objective is partition optimization with stability guarantees, and we provide a dedicated prompting protocol (CoalT) for coalition reasoning.

Multi-Agent LLM Systems. AutoGen [[37](https://arxiv.org/html/2604.14386v1#bib.bib1)], CAMEL [[26](https://arxiv.org/html/2604.14386v1#bib.bib27)], and MetaGPT [[21](https://arxiv.org/html/2604.14386v1#bib.bib11)] enable multi-LLM coordination for complex tasks. AgentVerse [[13](https://arxiv.org/html/2604.14386v1#bib.bib12)] observes emergent behaviors including spontaneous cooperation and role specialization, while ChatDev [[30](https://arxiv.org/html/2604.14386v1#bib.bib19)] demonstrates effective software development through LLM collaboration. However, these systems lack game-theoretic foundations for understanding *when* and *why* stable coordination emerges. Our framework fills this gap by providing formal conditions under which LLM agents converge to stable coalitions, enabling principled system design rather than trial-and-error tuning.

Bounded Rationality and QRE. Our $\epsilon$-rationality model connects to classical behavioral game theory [[32](https://arxiv.org/html/2604.14386v1#bib.bib28), [11](https://arxiv.org/html/2604.14386v1#bib.bib29)]. Quantal response equilibria (QRE) [[29](https://arxiv.org/html/2604.14386v1#bib.bib30)] model agents who make errors proportional to payoff differences: higher-value options are more likely chosen but not deterministically. We formally establish the connection: under logit dynamics with parameter $\lambda=1/\epsilon$, our model yields QRE-equivalent choice probabilities (Appendix [E](https://arxiv.org/html/2604.14386v1#A5 "Appendix E QRE Connection and ϵ-Estimation Methodology ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")). This connection enables us to leverage decades of QRE analysis while adapting the framework to LLM-specific characteristics such as prompt-dependent consistency.

Positioning. Table [1](https://arxiv.org/html/2604.14386v1#S2.T1 "Table 1 ‣ 2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") summarizes how our work relates to prior approaches. While recent work applies Shapley values to LLM agent credit assignment [[22](https://arxiv.org/html/2604.14386v1#bib.bib34)] and uses LLMs as mediators for coalition negotiation [[7](https://arxiv.org/html/2604.14386v1#bib.bib35)], we are, to the best of our knowledge, the first to combine: (i) a formal coalitional game model where LLM agents are strategic players, (ii) partition-based stability analysis (Nash stability, core stability) with provable guarantees, and (iii) a prompting protocol specifically designed for coalition reasoning.

Table 1: Comparison with related approaches. *Coalitions*: models coalition partition structures. *Stability*: formal game-theoretic stability analysis. *Protocol*: dedicated reasoning protocol for coalition decisions.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Work | $n$-player | Coalitions | Stability | Protocol |
| GTBench | × | × | × | × |
| FAIRGAME | × | × | × | × |
| Shapley-Coop | ✓ | × | × | × |
| Briman et al. | ✓ | ✓ | × | × |
| Kulkarni et al. | ✓ | ✓∗ | × | × |
| AutoGen | ✓ | × | × | × |
| Ours | ✓ | ✓ | ✓ | ✓ |
| ∗Detection only, not formation. | | | | |
| --- | --- | --- | --- | --- |

## 3 Problem Formulation

We formalize coalition formation among LLM agents as a *hedonic game* [[14](https://arxiv.org/html/2604.14386v1#bib.bib25), [6](https://arxiv.org/html/2604.14386v1#bib.bib7)], a class of cooperative games where each agent’s preferences depend solely on the members of its own coalition. This is natural for LLM multi-agent systems: an agent’s performance in a coalition depends on who it collaborates with, not on how other coalitions are organized.

### 3.1 LLM Coalition Formation Games

###### Definition 1 (LLM Agent).

An *LLM agent* is a tuple $a\_{i}=(m\_{i},\theta\_{i},\mathbf{c}\_{i})$ where $m\_{i}\in\mathcal{M}$ is the model architecture (e.g., GPT-4, Claude-3), $\theta\_{i}\in\Theta=[0,2]\times\Sigma^{\*}$ specifies configuration (temperature $\tau\in[0,2]$ and system prompt $s\in\Sigma^{\*}$), and $\mathbf{c}\_{i}\in[0,1]^{d}$ is a *capability profile* over $d$ skill dimensions (e.g., mathematical reasoning, factual knowledge, logical analysis).

Capability profiles are estimated empirically by evaluating each LLM on domain-specific benchmarks (Section [7](https://arxiv.org/html/2604.14386v1#S7 "7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")). They serve as the bridge between the abstract hedonic game model and concrete LLM agents: the coalition value function is defined in terms of the capability profiles of its members.

###### Definition 2 (LLM Coalition Formation Game).

An *LLM Coalition Formation Game* (LCFG) is a hedonic game $G=(\mathcal{N},v,\{\succsim\_{i}\}\_{i\in\mathcal{N}})$ where:

- •

  $\mathcal{N}=\{a\_{1},\ldots,a\_{n}\}$ is a set of LLM agents (Definition [1](https://arxiv.org/html/2604.14386v1#Thmdefinition1 "Definition 1 (LLM Agent). ‣ 3.1 LLM Coalition Formation Games ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"))
- •

  $v:2^{\mathcal{N}}\to\mathbb{R}$ is a *coalition value function* parameterized by member capability profiles
- •

  $\succsim\_{i}$ is agent $a\_{i}$’s *preference relation* over coalitions containing $a\_{i}$, informed by per-capita value $v\_{i}(S)=v(S)/|S|$ (see Definition [3](https://arxiv.org/html/2604.14386v1#Thmdefinition3 "Definition 3 (ϵ-Rational Preferences). ‣ 3.2 Bounded-Rational Preferences ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"))

The coalition value function captures joint task performance:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$v(S)=\phi\left(\bigoplus\_{a\_{i}\in S}\mathbf{c}\_{i}\right)-\psi(|S|)$$ |  | (1) |

where $\phi:[0,1]^{d}\to\mathbb{R}$ aggregates capabilities (we use $\phi(\mathbf{c})=\|\mathbf{c}\|\_{1}/d$), $\oplus$ denotes componentwise maximum (modeling coverage-based tasks where having any expert suffices), and $\psi:\mathbb{N}\to\mathbb{R}$ captures coordination costs. We model $\psi(k)=\alpha\cdot k^{\beta}$ with $\alpha=0.15$ and $\beta=1.3$, empirically calibrated to minimize prediction error (see Appendix [F](https://arxiv.org/html/2604.14386v1#A6 "Appendix F Coalition Value Function Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") for sensitivity analysis). The superlinear scaling ($\beta>1$) is consistent with coordination cost findings [[36](https://arxiv.org/html/2604.14386v1#bib.bib8), [2](https://arxiv.org/html/2604.14386v1#bib.bib32)].

###### Example 1 (Worked Example).

Consider three agents with capabilities $\mathbf{c}\_{1}=(0.68,0.30,0.40)$, $\mathbf{c}\_{2}=(0.40,0.65,0.30)$, $\mathbf{c}\_{3}=(0.30,0.40,0.76)$. Using $\phi(\mathbf{c})=\|\mathbf{c}\|\_{1}/d$ and $\psi(k)=0.15k^{1.3}$: coalition $\{a\_{1},a\_{2}\}$ has $v=0.21$ (per-capita 0.10), while the grand coalition $\{a\_{1},a\_{2},a\_{3}\}$ has $v=0.07$ (per-capita 0.02). Despite higher capability coverage, the grand coalition yields lower per-capita value due to coordination costs, a core tradeoff our framework captures.

### 3.2 Bounded-Rational Preferences

Classical hedonic games assume complete, transitive preferences. LLM agents exhibit *bounded rationality*, i.e., systematic deviations from optimal decision-making:

###### Definition 3 ($\epsilon$-Rational Preferences).

Agent $a\_{i}$’s preferences are *$\epsilon$-rational* with respect to value function $v$ if for all coalitions $S,T\ni a\_{i}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$v\_{i}(S)>v\_{i}(T)+\epsilon\implies S\succ\_{i}T$$ |  | (2) |

where $v\_{i}(S)=v(S)/|S|$ is $a\_{i}$’s per-capita value in coalition $S$.

Intuitively, $\epsilon$-rationality captures that LLM agents reliably identify the better option when value differences exceed $\epsilon$, but may make inconsistent choices for closer comparisons. Our experiments (Section [7](https://arxiv.org/html/2604.14386v1#S7 "7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")) estimate $\epsilon\approx 0.15$ for GPT-4 and $\epsilon\approx 0.22$ for Llama-3. These values are estimated by measuring the value gap threshold below which agent choices become near-random (see Appendix [E](https://arxiv.org/html/2604.14386v1#A5 "Appendix E QRE Connection and ϵ-Estimation Methodology ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") for methodology). Under logit choice models from Quantal Response Equilibrium (QRE) theory [[29](https://arxiv.org/html/2604.14386v1#bib.bib30)], this corresponds to precision parameters $\lambda=1/\epsilon\approx 6.7$ (GPT-4) and $\lambda\approx 4.5$ (Llama-3), indicating substantial but bounded deviations from perfect rationality.

### 3.3 Coalition Structures and Stability

A *coalition structure* $\pi=\{C\_{1},\ldots,C\_{k}\}$ is a partition of $\mathcal{N}$. We adopt standard stability concepts:

###### Definition 4 (Stability Concepts).

Given LCFG $G$ and coalition structure $\pi$:

- •

  $\pi$ is *Nash-stable* if no agent unilaterally prefers joining another coalition: $\forall a\_{i}\in C\in\pi$, $\forall C^{\prime}\in\pi\cup\{\emptyset\}$: $C\succsim\_{i}C^{\prime}\cup\{a\_{i}\}$
- •

  $\pi$ is *individually stable* (IS) if no agent can profitably deviate without making any member of the receiving coalition worse off
- •

  $\pi$ is *core-stable* if no group of agents can jointly deviate such that all members of the deviating group strictly benefit

Nash stability is the strongest individual-deviation concept: it requires that no agent wants to switch, regardless of whether the receiving coalition consents. Individual stability weakens this by requiring that the receiving coalition does not object. Core stability addresses group deviations: Nash stability $\Rightarrow$ Individual stability, but Nash stability and core stability are generally incomparable in hedonic games [[6](https://arxiv.org/html/2604.14386v1#bib.bib7), [3](https://arxiv.org/html/2604.14386v1#bib.bib33)]. We focus on Nash stability as our primary notion because it is verifiable in polynomial time under our capability-monotonicity assumption (Theorem [5](https://arxiv.org/html/2604.14386v1#Thmtheorem5 "Theorem 5 (Complexity of Nash Stability). ‣ 5 Complexity Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")) and provides strong guarantees against unilateral deviations.

Existence of Nash-Stable Partitions. Nash-stable partitions are not guaranteed to exist in all hedonic games. Under per-capita value splitting $v\_{i}(S)=v(S)/|S|$ with componentwise-max aggregation, cycles can arise when a low-capability agent benefits from joining a high-capability agent’s coalition while the latter prefers to be alone (see Appendix [A](https://arxiv.org/html/2604.14386v1#A1 "Appendix A On the Existence of Nash-Stable Partitions ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") for a formal example). Our Theorem [1](https://arxiv.org/html/2604.14386v1#Thmtheorem1 "Theorem 1 (Deterministic Existence). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") identifies sufficient conditions for existence, while Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") provides probabilistic guarantees when these conditions are relaxed.

## 4 Theoretical Analysis

We establish when LLM agents converge to stable coalition structures, providing both *deterministic guarantees* under ideal conditions and *consistency-driven bounds* for realistic settings.

### 4.1 Deterministic Existence (Ideal Conditions)

###### Assumption 1 (Value Gap Condition).

An LCFG $G$ satisfies the *$\delta$-value gap condition* if there exists $\delta>0$ such that for all agents $a\_{i}$ and distinct coalitions $S,T\ni a\_{i}$: either $v\_{i}(S)=v\_{i}(T)$ or $|v\_{i}(S)-v\_{i}(T)|\geq\delta$.

This assumption is naturally satisfied with benchmark-derived capability profiles. We empirically verify $\delta\approx 0.08$ through exhaustive enumeration of all coalition pairs in our 6-agent setting (Appendix [F.2](https://arxiv.org/html/2604.14386v1#A6.SS2 "F.2 𝛿-Value Gap Verification ‣ Appendix F Coalition Value Function Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")). Note that $\delta$ is a property of the *specific game instance* derived from our capability profiles and value function parameterization, not a universal constant from the hedonic games literature.

###### Assumption 2 (Potential Alignment).

An LCFG $G$ satisfies *potential alignment* if for the potential function $\Phi(\pi)=\sum\_{C\in\pi}v(C)$, every improving deviation (where $v\_{i}(C^{\prime}\cup\{a\_{i}\})>v\_{i}(C)$) also increases $\Phi$: $\Phi(\pi^{\prime})>\Phi(\pi)$.

Potential alignment holds when agents bring sufficient unique value to receiving coalitions; specifically, when the marginal value $v(C^{\prime}\cup\{a\_{i}\})-v(C^{\prime})$ exceeds the loss $v(C)-v(C\setminus\{a\_{i}\})$. Under componentwise-max aggregation with diverse multi-dimensional capability profiles ($d\geq 2$), this is naturally satisfied when each agent contributes distinct coverage. It may fail in degenerate cases (e.g., one-dimensional capabilities where high-capability agents gain nothing from low-capability partners; see Appendix [A](https://arxiv.org/html/2604.14386v1#A1 "Appendix A On the Existence of Nash-Stable Partitions ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).

###### Theorem 1 (Deterministic Existence).

Let $G$ be an LCFG satisfying the $\delta$-value gap condition (Assumption [1](https://arxiv.org/html/2604.14386v1#Thmassumption1 "Assumption 1 (Value Gap Condition). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), potential alignment (Assumption [2](https://arxiv.org/html/2604.14386v1#Thmassumption2 "Assumption 2 (Potential Alignment). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), and *capability monotonicity*: for all $S\subseteq\mathcal{N}$ and agents $a\_{i},a\_{j}$, if $\mathbf{c}\_{i}\leq\mathbf{c}\_{j}$ componentwise, then $v(S\cup\{a\_{i}\})\leq v(S\cup\{a\_{j}\})$. If all agents have $\epsilon$-rational preferences with $\epsilon<\delta/2$, then a Nash-stable partition exists and can be found in polynomial time.

###### Proof Sketch.

Under $\epsilon$-rationality and the $\delta$-value gap condition, an improving deviation requires a per-capita value increase of at least $\delta-\epsilon>\delta/2>0$. By potential alignment, each such deviation strictly increases $\Phi(\pi)=\sum\_{C\in\pi}v(C)$. Since $\Phi$ is bounded above and takes values from a discrete set (by the value gap condition), the improvement path terminates at a Nash-stable partition in at most $O(n\cdot\Delta\_{v}/\delta)$ steps, where $\Delta\_{v}$ is the value range. Full proof in Appendix [B](https://arxiv.org/html/2604.14386v1#A2 "Appendix B Proof of Theorem (Deterministic Existence) ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
∎

###### Remark 1 (Scope and Limitations of Theorem [1](https://arxiv.org/html/2604.14386v1#Thmtheorem1 "Theorem 1 (Deterministic Existence). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).

The condition $\epsilon<\delta/2$ ensures that $\epsilon$-rational agents can distinguish coalitions with different values: when $\epsilon\geq\delta/2$, the agent’s error margin exceeds the value gap, and rational discrimination breaks down. In practice, LLM agents exhibit $\epsilon\approx 0.15$–$0.22$, exceeding $\delta/2\approx 0.04$. This motivates our main theoretical result (Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), which provides probabilistic guarantees without requiring $\epsilon<\delta/2$.

### 4.2 Consistency-Driven Stability (Realistic Conditions)

When $\epsilon>\delta/2$, deterministic guarantees no longer hold. We characterize stability using *logit dynamics* from behavioral game theory [[29](https://arxiv.org/html/2604.14386v1#bib.bib30)].

Key Insight. Stability depends primarily on *preference consistency*, i.e., whether agents make the same choice when queried repeatedly, rather than perfect rationality. An agent who consistently prefers suboptimal coalitions still contributes to stable outcomes, while an agent with perfect utility but inconsistent choices creates instability.

###### Definition 5 (Preference Consistency).

Agent $a\_{i}$ has *preference consistency* $p\_{i}\in[0,1]$ if, across independent queries for the same coalition comparison, the agent returns the same preference with probability $p\_{i}$.

###### Definition 6 (Effective Critical Decisions).

Let $K\_{\text{eff}}$ denote the number of *effectively critical* decisions, those where the value gap $|\Delta v|<2\epsilon$, making consistency meaningfully less than 1. Let $K\_{n}-K\_{\text{eff}}$ denote “easy” decisions with large value gaps where consistency approaches $p\_{\text{easy}}\approx 1$.

###### Theorem 2 (Consistency-Driven Stability Bound).

Let $G$ be an LCFG with $n$ agents satisfying capability monotonicity. Let $p\in(0,1]$ be the preference consistency on critical decisions, $p\_{\text{easy}}\approx 1$ on easy decisions, $K\_{\text{eff}}$ the number of critical decisions, and $K\_{n}$ total decisions. Assuming decision independence across agents and coalition comparisons:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Pr[\text{Nash-stable}]\geq p^{K\_{\text{eff}}}\cdot p\_{\text{easy}}^{K\_{n}-K\_{\text{eff}}}\cdot\gamma(G)$$ |  | (3) |

where $\gamma(G)$ is the probability that consistent dynamics reach a Nash-stable partition. Under logit dynamics with precision $\lambda=1/\bar{\epsilon}$, $\gamma(G)$ is bounded below by $1-\exp(-\delta/\bar{\epsilon})$, with $\bar{\epsilon}$ the mean rationality bound and $\delta$ the value gap.

###### Proof Sketch.

By conditional probability, $\Pr[\text{Nash-stable}]=\Pr[\text{consistent}]\cdot\Pr[\text{Nash}\mid\text{consistent}]$. The first factor, under decision independence, is at least $p^{K\_{\text{eff}}}\cdot p\_{\text{easy}}^{K\_{n}-K\_{\text{eff}}}$. The second factor is $\gamma(G)$: given consistent preferences, the system follows deterministic improving dynamics on a potential game, and the stationary distribution of logit dynamics concentrates on potential maxima [[5](https://arxiv.org/html/2604.14386v1#bib.bib31)]. Full derivation in Appendix [C](https://arxiv.org/html/2604.14386v1#A3 "Appendix C Proof of Theorem (Consistency-Driven Bound) ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
∎

Empirical Validation. For our setting ($n=6$, $K\_{\text{eff}}\approx 5$ critical decisions out of $K\_{n}\approx 15$ total, $p=0.86$, $p\_{\text{easy}}=0.98$), we estimate $\gamma(G)\approx 0.90$ empirically as the fraction of episodes with consistent decisions that reach Nash stability. This exceeds the formula lower bound $1-\exp(-0.08/0.17)\approx 0.38$, indicating favorable game structure. Our theoretical lower bound is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Pr[\text{Nash-stable}]\geq 0.86^{5}\cdot 0.98^{10}\cdot 0.90\approx 0.35$$ |  | (4) |

The observed rate of 73.2% substantially exceeds this lower bound, confirming that the consistency-driven framework captures the dominant factor in stability. The monotonic relationship between $p$ and Nash stability rate holds across all experimental conditions (Figure [2](https://arxiv.org/html/2604.14386v1#S7.F2 "Figure 2 ‣ 7.2 Main Results ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")).

###### Corollary 3 (Scaling Law).

If $K\_{\text{eff}}=O(\sqrt{n})$ (as observed empirically in our setting; see Appendix [H](https://arxiv.org/html/2604.14386v1#A8 "Appendix H Scaling Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), then the Nash stability lower bound scales as $p^{O(\sqrt{n})}$ for large $n$.

### 4.3 Convergence Guarantees

###### Theorem 4 (Convergence).

Let $G$ be an LCFG satisfying the $\delta$-value gap condition (Assumption [1](https://arxiv.org/html/2604.14386v1#Thmassumption1 "Assumption 1 (Value Gap Condition). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")) and potential alignment (Assumption [2](https://arxiv.org/html/2604.14386v1#Thmassumption2 "Assumption 2 (Potential Alignment). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), where all agents have $\epsilon$-rational preferences with $\epsilon<\delta/2$ that are temporally consistent (same query yields same preference). Under improving dynamics where at most one agent deviates per round, the coalition structure converges to a Nash-stable partition in at most $O(n^{2}\cdot\Delta\_{v}/\delta)$ rounds, where $\Delta\_{v}=\max\_{S}v(S)-\min\_{S}v(S)$.

###### Proof Sketch.

By Theorem [1](https://arxiv.org/html/2604.14386v1#Thmtheorem1 "Theorem 1 (Deterministic Existence). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"), the potential function $\Phi$ strictly increases with each improving deviation, and there are at most $O(n\cdot\Delta\_{v}/\delta)$ such deviations before termination. Each round checks all $n$ agents for a potential deviation, so at most $O(n)$ rounds elapse between consecutive deviations. Multiplying gives $O(n^{2}\cdot\Delta\_{v}/\delta)$ total rounds.
∎

## 5 Complexity Analysis

We analyze the computational complexity of stability verification and computation in LCFGs.

###### Theorem 5 (Complexity of Nash Stability).

Given LCFG $G$ with $\epsilon$-rational agents and coalition structure $\pi$:

1. 1.

   *Verifying* Nash stability of a given partition $\pi$ is in P ($O(n^{2})$ preference queries) under explicit value computation.
2. 2.

   *Computing* a Nash-stable partition is NP-hard in general hedonic games [[4](https://arxiv.org/html/2604.14386v1#bib.bib15)], and LCFGs inherit this worst-case hardness when the capability dimension $d$ is unbounded.
3. 3.

   Under capability monotonicity and potential alignment, both verification and computation are polynomial.

###### Proof Sketch.

(1) For verification, check each agent’s deviation to each coalition in $O(n^{2})$ time; if no improving deviation exists, $\pi$ is Nash-stable.
(2) Since LCFGs are a subclass of hedonic games, we note that the NP-hardness of computing Nash-stable partitions in the general case [[4](https://arxiv.org/html/2604.14386v1#bib.bib15)] motivates identifying tractable subclasses. When $d$ is part of the input, LCFGs can encode sufficiently rich preference structures to preserve hardness; for fixed $d$ (as in our experiments), structural restrictions enable tractability via Part (3).
(3) Under our assumptions, the potential function argument (Theorem [1](https://arxiv.org/html/2604.14386v1#Thmtheorem1 "Theorem 1 (Deterministic Existence). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")) yields polynomial computation via iterative improving dynamics. Full proofs in Appendix [D](https://arxiv.org/html/2604.14386v1#A4 "Appendix D Proof of Theorem (Complexity) ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
∎

Practical Implications. The tractability under capability monotonicity is significant: it means that for practical systems where better agents improve coalition value, stability verification is efficient. Specifically, given $n$ agents and a proposed partition $\pi$, we can verify Nash stability in $O(n^{2})$ preference queries by checking whether each agent $a\_{i}\in C$ prefers $C$ over $C^{\prime}\cup\{a\_{i}\}$ for all other coalitions $C^{\prime}\in\pi$. This enables real-time stability monitoring in deployed systems.

Query Complexity. Each stability check requires one LLM inference per agent-coalition pair. For our 6-agent setup, this amounts to approximately 30 queries per verification (6 agents $\times$ 5 alternative coalitions). With CoalT’s improved consistency, single-round verification suffices in 86% of cases; otherwise, we use majority voting over 3 queries.

## 6 Coalition-of-Thought Prompting

Standard prompting and even vanilla chain-of-thought [[35](https://arxiv.org/html/2604.14386v1#bib.bib13)] fail to elicit consistent coalition reasoning. We introduce *Coalition-of-Thought* (CoalT), a structured protocol grounded in our game-theoretic framework.

Algorithm 1  Coalition-of-Thought (CoalT) Protocol

Input: Agent $a\_{i}$, current coalition $C$, candidate $C^{\prime}$
  
Output: Preference $\{C\succ C^{\prime},C^{\prime}\succ C,C\sim C^{\prime}\}$

1:
 Step 1: Capability Analysis

2:
 “List capabilities of members in $C$ and $C^{\prime}$”

3:
 Step 2: Complementarity Assessment

4:
 “Identify capability gaps and overlaps”

5:
 Step 3: Value Estimation

6:
 “Estimate task performance for each coalition”

7:
 Step 4: Coordination Cost Analysis

8:
 “Assess communication/coordination overhead”

9:
 Step 5: Preference Declaration

10:
 “Based on analysis, declare preference”

11:
 return Parse final preference from Step 5 output

CoalT differs from vanilla CoT by incorporating game-theoretic concepts (capability complementarity, coordination costs, per-capita value) rather than generic step-by-step reasoning. The key insight is that explicitly prompting agents to reason about *what they contribute* and *what they gain* from coalition membership substantially improves preference consistency.

Prompt Template. The CoalT prompt follows this structure:

> “You are evaluating whether to join coalition $C^{\prime}$ instead of staying in $C$. Analyze systematically: (1) What capabilities do members of each coalition have? (2) Are there complementary strengths or redundant capabilities? (3) What is the expected task performance of each group? (4) What coordination overhead does each coalition size incur? (5) Based on your per-capita expected value, state your preference.”

This template instantiates each step of Algorithm [1](https://arxiv.org/html/2604.14386v1#alg1 "Algorithm 1 ‣ 6 Coalition-of-Thought Prompting ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") with explicit reasoning targets.

Example CoalT Reasoning. For agent $a\_{1}$ comparing $C=\{a\_{1},a\_{2}\}$ vs. $C^{\prime}=\{a\_{3},a\_{5},a\_{6}\}$:

> “Step 1: $C$ has math but limited logic. $C^{\prime}$ has facts/logic. Step 2: $C$ has overlap; $C^{\prime}$ adds complementarity. Step 3: $v(C)\approx 0.42$; $v(C^{\prime})\approx 0.51$. Step 4: Costs 0.44 vs. 0.64. Step 5: Per-capita: 0.14 vs. 0.13. Prefer $C$.”

## 7 Experimental Evaluation

We validate our theoretical framework through experiments addressing four research questions: RQ1: Do LLM agents converge to stable coalition structures? RQ2: Does CoalT outperform baselines *including vanilla CoT*? RQ3: Do heterogeneous LLM coalitions outperform homogeneous ones? RQ4: How do CoalT components contribute to performance?

### 7.1 Experimental Setup

Task Domain. We use collaborative question-answering requiring diverse expertise: mathematical reasoning, factual knowledge, and logical analysis. Each question has ground-truth difficulty scores enabling objective coalition value computation via Equation [1](https://arxiv.org/html/2604.14386v1#S3.E1 "In 3.1 LLM Coalition Formation Games ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"). The task set comprises 200 questions stratified across difficulty levels (easy/medium/hard) and capability requirements.

Agents. We instantiate 6 agents with distinct capability profiles using GPT-4 (gpt-4-0125-preview), Claude-3-Opus (claude-3-opus-20240229), and Llama-3-70B-Instruct (2 agents per architecture). Capability profiles $\mathbf{c}\_{i}\in[0,1]^{3}$ are estimated through *our own evaluation* on stratified samples from MATH [[20](https://arxiv.org/html/2604.14386v1#bib.bib16)], MMLU [[19](https://arxiv.org/html/2604.14386v1#bib.bib20)] (knowledge subset), and LogiQA [[27](https://arxiv.org/html/2604.14386v1#bib.bib17)] (100 questions per benchmark, 3 runs per model). Important: These values represent *relative capability estimates* for our specific task domain and question subsets, not official benchmark scores. Official benchmark results (e.g., GPT-4 achieves $\sim$65% on MATH per OpenAI’s simple-evals) informed our evaluation design but differ due to subset selection and scoring methodology. See Appendix [G](https://arxiv.org/html/2604.14386v1#A7 "Appendix G Capability Profile Estimation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") for detailed methodology, confidence intervals, and comparison with official benchmarks. Table [2](https://arxiv.org/html/2604.14386v1#S7.T2 "Table 2 ‣ 7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") shows the resulting profiles.

Table 2: Agent capability profiles (Math, Facts, Logic). Values are *relative estimates* from our custom evaluation on benchmark subsets, calibrated to reflect task-specific performance in our coalition formation domain. These are not official benchmark scores.

| Agent | Math | Facts | Logic |
| --- | --- | --- | --- |
| $a\_{1}$ (GPT-4) | 0.68 | 0.73 | 0.76 |
| $a\_{2}$ (GPT-4) | 0.65 | 0.76 | 0.73 |
| $a\_{3}$ (Claude-3) | 0.62 | 0.78 | 0.74 |
| $a\_{4}$ (Claude-3) | 0.59 | 0.81 | 0.71 |
| $a\_{5}$ (Llama-3) | 0.58 | 0.65 | 0.79 |
| $a\_{6}$ (Llama-3) | 0.55 | 0.68 | 0.76 |

The profiles reveal architectural differences: GPT-4 agents show relative strength in mathematics, Claude-3 in factual knowledge, and Llama-3 in logical reasoning. While these differences are modest, they create incentives for cross-architecture coalitions when capability complementarity outweighs coordination costs.

Protocol and Episode Definition. An *episode* is a single complete coalition formation process for one question. Each episode proceeds in rounds: (1) agents observe the current partition and receive the task description, (2) each agent evaluates whether to stay or deviate using the assigned prompting protocol (Standard/CoT/CoalT), and (3) the partition updates according to improving dynamics (one agent deviates per round). An episode terminates when either no agent wishes to deviate (Nash-stable) or 30 rounds elapse (timeout, classified as unstable). We run 400 independent episodes per condition (6 conditions $\times$ 400 = 2,400 total; 200 questions $\times$ 2 repetitions).

Utility Measurement. Coalition value $v(S)$ is computed using Equation [1](https://arxiv.org/html/2604.14386v1#S3.E1 "In 3.1 LLM Coalition Formation Games ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") with ground-truth capability profiles and the componentwise-max aggregation. Agent utility is per-capita value: $v\_{i}(S)=v(S)/|S|$. Task performance (social welfare) is measured as the accuracy of the coalition’s aggregated answer on the assigned question, using majority vote within each coalition (for coalitions of size $\geq 2$) or the singleton agent’s answer (for size 1).

Nash Stability Verification. At episode termination, we verify Nash stability by exhaustive deviation checking: for each agent $a\_{i}$ in coalition $C$, we query whether $a\_{i}$ prefers $C^{\prime}\cup\{a\_{i}\}$ for every other coalition $C^{\prime}\in\pi\cup\{\emptyset\}$. If no improving deviation exists across all agents, the partition is Nash-stable. For robustness, each preference query is repeated 3 times; we use the majority response. Temperature $\tau=0$ throughout for reproducibility.

Baselines. We compare CoalT against *five* baselines: (1) *Random*: uniformly random coalition assignment; (2) *Greedy*: each agent joins the coalition maximizing immediate per-capita value; (3) *Standard*: direct preference query; (4) *Vanilla CoT*: chain-of-thought prompting [[35](https://arxiv.org/html/2604.14386v1#bib.bib13)]; (5) *Self-Consistency*: multiple CoT paths with majority voting [[34](https://arxiv.org/html/2604.14386v1#bib.bib14)].

Statistical Methodology. We report: (1) mean $\pm$ std with 95% bootstrap CIs (10,000 iterations, BCa method); (2) Wilcoxon signed-rank tests for pairwise comparisons; (3) Bonferroni correction ($\alpha=0.01$); (4) Cohen’s $d$ effect sizes.

### 7.2 Main Results

Table 3: Coalition formation results (400 episodes per condition). Statistical significance vs. Standard: ${}^{\*}p<0.01$, ${}^{\*\*}p<0.001$ (Wilcoxon, Bonferroni-corrected).

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Condition | Nash% | Conv. | Welfare | Consist. |
| Random | 28.3 | – | $0.58\_{\pm.14}$ | – |
| Greedy | 52.1 | $6.8\_{\pm 3.2}$ | $0.69\_{\pm.10}$ | $0.71\_{\pm.08}$ |
| Standard | 41.8 | $18.3\_{\pm 7.2}$ | $0.72\_{\pm.11}$ | $0.64\_{\pm.09}$ |
| Vanilla CoT | 58.4∗∗ | $14.2\_{\pm 5.8}$∗ | $0.75\_{\pm.09}$∗ | $0.74\_{\pm.07}$∗∗ |
| Self-Consist. | 62.7∗∗ | $13.1\_{\pm 5.2}$∗∗ | $0.77\_{\pm.08}$∗∗ | $0.79\_{\pm.06}$∗∗ |
| CoalT | 73.2∗∗ | $\mathbf{11.4}\_{\pm 4.1}$∗∗ | $\mathbf{0.81}\_{\pm.08}$∗∗ | $\mathbf{0.86}\_{\pm.05}$∗∗ |
| Cohen’s $d$ vs. Std: CoT 0.34; SC 0.44; CoalT 0.68 | | | | |
| By Architecture (CoalT) | | | | |
| GPT-4 only | 78.5 | $9.2\_{\pm 3.8}$ | $0.76\_{\pm.09}$ | $0.91\_{\pm.04}$ |
| Claude only | 81.2 | $8.7\_{\pm 3.5}$ | $0.74\_{\pm.10}$ | $0.89\_{\pm.05}$ |
| Llama only | 62.3 | $14.6\_{\pm 5.2}$ | $0.68\_{\pm.12}$ | $0.78\_{\pm.07}$ |
| Mixed | 73.2 | $11.4\_{\pm 4.1}$ | $\mathbf{0.81}\_{\pm.08}$ | $0.86\_{\pm.05}$ |

Consistency $p$Nash Stability (%)0.60.70.80.9405060708073.2%+14.8ppCoalT (Ours)Self-Consist.Vanilla CoTGreedyStandard


Figure 2: Nash stability rate vs. preference consistency across experimental conditions. Shaded region: range consistent with Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")’s lower bound across plausible parameter settings. CoalT achieves highest consistency ($p=0.86$) and stability (73.2%), confirming that stability scales with $p^{K\_{\text{eff}}}$ rather than perfect rationality.

RQ1: Convergence to Stability. Table [3](https://arxiv.org/html/2604.14386v1#S7.T3 "Table 3 ‣ 7.2 Main Results ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") shows LLM agents achieve Nash stability in 73.2% of CoalT episodes. This substantially exceeds our theoretical lower bound of 35% from Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"), validating the consistency-driven analysis. Figure [2](https://arxiv.org/html/2604.14386v1#S7.F2 "Figure 2 ‣ 7.2 Main Results ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") visualizes the relationship between preference consistency and Nash stability across all conditions.

RQ2: Baseline Comparison. CoalT significantly outperforms all baselines. Critically, *CoalT outperforms vanilla CoT by 14.8 percentage points* ($p<0.001$, $d=0.32$), demonstrating that the game-theoretic framing, not merely structured reasoning, drives the improvement.

RQ3: Heterogeneous vs. Homogeneous. Mixed-architecture coalitions achieve higher social welfare (0.81 vs. 0.68–0.76 for homogeneous teams) despite lower stability than homogeneous GPT-4 or Claude teams, suggesting capability complementarity outweighs coordination costs.

### 7.3 Ablation Study

Table 4: CoalT ablation study: contribution of each component.

| Configuration | Nash Stable | $\Delta$ vs. Full |
| --- | --- | --- |
| Full CoalT | 73.2% | – |
| $-$ Capability Analysis | 68.9% | $-4.3$pp |
| $-$ Complementarity | 65.4% | $-7.8$pp |
| $-$ Value Estimation | 67.1% | $-6.1$pp |
| $-$ Coordination Cost | 70.8% | $-2.4$pp |
| $-$ All (= Vanilla CoT) | 58.4% | $-14.8$pp |

RQ4: Component Contributions. Table [4](https://arxiv.org/html/2604.14386v1#S7.T4 "Table 4 ‣ 7.3 Ablation Study ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") shows the ablation study. Complementarity assessment yields the largest individual gain (+7.8pp when added), followed by value estimation (+6.1pp). Removing game-theoretic framing while keeping structured steps reduces performance to vanilla CoT levels, confirming that the *content* of reasoning, not just its structure, drives improvements.

### 7.4 Qualitative Analysis

Episode 47 (Stable). Initial: $\{\{a\_{1}\},\{a\_{2},a\_{3}\},\{a\_{4},a\_{5},a\_{6}\}\}$. Agent $a\_{1}$ joins $\{a\_{2},a\_{3}\}$ via CoalT reasoning: “My math strength (0.68) complements their factual knowledge (0.78). Estimated coverage improves from 0.72 to 0.83 on this question’s requirements.” The partition converges to a stable configuration in 5 rounds.

Episode 203 (Unstable). Standard prompting led to cycling: $a\_{2}$ joined and left $C\_{1}$ repeatedly. Analysis revealed inconsistent preferences ($p=0.62$), illustrating how low consistency prevents stability per Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").

### 7.5 Rationality Bounds and Temperature Sensitivity

Table 5: Estimated $\epsilon$-rationality bounds and temperature sensitivity.

|  |  |  |  |
| --- | --- | --- | --- |
| Model | $\hat{\epsilon}$ | 95% CI | CoalT $\Delta$ |
| GPT-4 | 0.15 | [0.12, 0.18] | +15.2pp |
| Claude-3 | 0.14 | [0.11, 0.17] | +14.1pp |
| Llama-3-70B | 0.22 | [0.18, 0.26] | +11.8pp |
| Temperature Sensitivity ($\tau$) | | | |
| $\tau=0.0$ | 0.15$\pm$0.02 | – | +14.8$\pm$1.2pp |
| $\tau=0.5$ | 0.18$\pm$0.03 | – | +12.3$\pm$1.8pp |
| $\tau=1.0$ | 0.24$\pm$0.04 | – | +10.3$\pm$2.1pp |

Table [5](https://arxiv.org/html/2604.14386v1#S7.T5 "Table 5 ‣ 7.5 Rationality Bounds and Temperature Sensitivity ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") confirms $\hat{\epsilon}>\delta/2\approx 0.04$, validating our consistency-driven bounds. CoalT’s advantage persists across temperatures (10.3–14.8pp), though absolute stability decreases at higher $\tau$.

## 8 Discussion and Limitations

Theoretical Contributions. Our framework provides the first formal characterization of coalition stability for LLM agents grounded in hedonic game theory. The key theoretical insight is that stability is primarily determined by preference consistency ($p^{K\_{\text{eff}}}$) rather than perfect rationality, explaining why improving consistency via CoalT is the most effective intervention. This finding has broader implications: it suggests that for multi-agent LLM systems, *predictability* matters more than *optimality*. A coalition of consistently-behaving agents will outperform a coalition of individually stronger but erratic agents.

Connection to Human Teams. Our consistency-driven stability analysis parallels findings in organizational behavior: teams with predictable members often outperform teams with higher-variance “star” performers [[2](https://arxiv.org/html/2604.14386v1#bib.bib32)]. The parallel suggests our framework may generalize to human-AI hybrid teams, where consistency across agents (human and AI) determines collaborative success.

Strategic Behavior. Our framework assumes truthful preference reporting. We analyze robustness informally: under capability monotonicity, misreporting typically harms the misreporting agent by leading to suboptimal coalition membership. However, strategic agents might manipulate *others’* placements. Formal mechanism design extensions ensuring incentive compatibility are important future work.

Practical Implications. CoalT provides a practical protocol improving coalition stability. The finding that mixed-architecture coalitions achieve higher welfare suggests designing heterogeneous LLM teams for complex tasks, accepting moderate stability tradeoffs for capability gains. Practitioners should: (1) select diverse model architectures for capability coverage, (2) use CoalT prompting for preference elicitation, and (3) monitor consistency metrics as early warning indicators of instability.

Model Generalization. We use 2024 model versions (GPT-4-0125-preview, Claude-3-Opus-20240229, Llama-3-70B-Instruct). We expect our framework to generalize to newer models since: (1) game-theoretic principles are model-agnostic (the LCFG formalization applies regardless of underlying architecture); (2) Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") predicts that higher reasoning consistency in newer models should *improve* stability rates; (3) capability profiles can be re-estimated through our benchmark-based methodology. Empirical validation on 2025+ architectures is important future work.

Scalability. Our experiments use 6 agents; stability degrades as $O(1/\sqrt{n})$ (Corollary [3](https://arxiv.org/html/2604.14386v1#Thmtheorem3 "Corollary 3 (Scaling Law). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")). Above $n\approx 15$, hierarchical decomposition (forming meta-coalitions first) may be necessary. For systems with hundreds of agents, a two-level hierarchy would maintain stability while enabling scalability.

Reproducibility. All materials available at <https://github.com/researchartifacts2025/coalition_llm>.

## 9 Conclusion

We presented the first framework grounding coalition formation in LLM agent networks in hedonic game theory with formal stability guarantees, establishing existence conditions, consistency-driven stability bounds, convergence guarantees, and complexity results. Our theoretical lower bounds are consistent with empirical outcomes, and Coalition-of-Thought significantly outperforms baselines including vanilla chain-of-thought ($p<0.001$).

Key Takeaways. Our main findings are: (1) LLM agents exhibit bounded rationality with $\epsilon\approx 0.15$–$0.22$, but stability depends more on *consistency* than optimality; (2) the CoalT protocol improves consistency from 0.64 to 0.86, yielding 14.8pp stability gains; (3) mixed-architecture coalitions achieve higher welfare despite lower stability, suggesting practical tradeoffs in system design.

Future Directions. This work opens several directions: (i) mechanism design ensuring incentive-compatible preference reporting; (ii) extensions to dynamic environments where agent capabilities evolve over time; (iii) scaling analysis for populations beyond 15 agents through hierarchical coalition structures; and (iv) empirical validation on 2025+ LLM architectures with improved reasoning capabilities.

## Ethical Statement

Our work analyzes cooperative behavior in AI systems. Coalition formation capabilities could potentially enable LLM collusion in adversarial settings; we advocate for transparency requirements in deployed multi-agent systems. Experiments used commercial APIs with standard usage policies.

## References

- [1]
  S. Abdelnabi, A. Gomaa, S. Sivaprasad, L. Schönherr, and M. Fritz (2024)
  Cooperation, competition, and maliciousness: llm-stakeholders interactive negotiation.
  In Advances in Neural Information Processing Systems 38: Annual Conference
  on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver,
  BC, Canada, December 10 - 15, 2024, A. Globersons, L. Mackey, D. Belgrave, A. Fan, U. Paquet, J. M. Tomczak, and C. Zhang (Eds.),
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p1.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [2]
   (2007)
  Algorithmic game theory.
   Cambridge University Press.
  External Links: ISBN 9780511800481,
  [Document](https://dx.doi.org/10.1017/cbo9780511800481)
  Cited by: [§3.1](https://arxiv.org/html/2604.14386v1#S3.SS1.p2.2 "3.1 LLM Coalition Formation Games ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§8](https://arxiv.org/html/2604.14386v1#S8.p2.1 "8 Discussion and Limitations ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [3]
  H. Aziz, F. Brandl, F. Brandt, P. Harrenstein, M. Olsen, and D. Peters (2019)
  Fractional hedonic games.
  ACM Trans. Econ. Comput. 7 (2).
  External Links: ISSN 2167-8375,
  [Link](https://doi.org/10.1145/3327970),
  [Document](https://dx.doi.org/10.1145/3327970)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§3.3](https://arxiv.org/html/2604.14386v1#S3.SS3.p2.1 "3.3 Coalition Structures and Stability ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [4]
  C. Ballester (2004)
  NP-completeness in hedonic games.
  Games Econ. Behav. 49 (1), pp. 1–30.
  External Links: [Document](https://dx.doi.org/10.1016/J.GEB.2003.10.003)
  Cited by: [Appendix D](https://arxiv.org/html/2604.14386v1#A4.p2.1.1.1 "Proof. ‣ Appendix D Proof of Theorem (Complexity) ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [item 2](https://arxiv.org/html/2604.14386v1#S5.I1.i2.p1.1 "In Theorem 5 (Complexity of Nash Stability). ‣ 5 Complexity Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§5](https://arxiv.org/html/2604.14386v1#S5.p2.1.1 "Proof Sketch. ‣ 5 Complexity Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [5]
  L. E. Blume (1993)
  The statistical mechanics of strategic interaction.
  Games and Economic Behavior 5 (3), pp. 387–424.
  External Links: ISSN 0899-8256,
  [Document](https://dx.doi.org/10.1006/game.1993.1023)
  Cited by: [Appendix C](https://arxiv.org/html/2604.14386v1#A3.p5.1.1.1 "Proof. ‣ Appendix C Proof of Theorem (Consistency-Driven Bound) ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§4.2](https://arxiv.org/html/2604.14386v1#S4.SS2.p3.1.1 "Proof Sketch. ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [6]
  A. Bogomolnaia and M. O. Jackson (2002)
  The stability of hedonic coalition structures.
  Games Econ. Behav. 38 (2), pp. 201–230.
  External Links: [Document](https://dx.doi.org/10.1006/GAME.2001.0877)
  Cited by: [item 1](https://arxiv.org/html/2604.14386v1#S1.I1.i1.p1.1 "In 1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§3.3](https://arxiv.org/html/2604.14386v1#S3.SS3.p2.1 "3.3 Coalition Structures and Stability ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§3](https://arxiv.org/html/2604.14386v1#S3.p1.1 "3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [7]
  E. Briman, E. Shapiro, and N. Talmon (2025)
  AI-generated compromises for coalition formation: modeling, simulation, and a textual case study.
  In Proceedings Twentieth Conference on Theoretical Aspects of Rationality
  and Knowledge, TARK 2025, Düsseldorf, Germany, July 14-16,
  2025, A. Bjorndahl (Ed.),
  EPTCS, pp. 417–432.
  External Links: [Link](https://doi.org/10.4204/EPTCS.437.32),
  [Document](https://dx.doi.org/10.4204/EPTCS.437.32)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p3.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p6.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [8]
  M. Bullinger and M. Gilboa (2025)
  Settling the complexity of popularity in additively separable and fractional hedonic games.
  In Proceedings of the Thirty-Fourth International Joint Conference on
  Artificial Intelligence, IJCAI 2025, Montreal, Canada, August 16-22,
  2025,
  pp. 3771–3779.
  External Links: [Document](https://dx.doi.org/10.24963/IJCAI.2025/419)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [9]
  M. Bullinger and S. Kraiczy (2024)
  Stability in random hedonic games.
  In Proceedings of the 25th ACM Conference on Economics and Computation,
  EC 2024, New Haven, CT, USA, July 8-11, 2024, D. Bergemann, R. Kleinberg, and D. Sabán (Eds.),
  pp. 212.
  External Links: [Document](https://dx.doi.org/10.1145/3670865.3673476)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [10]
  A. Buscemi, D. Proverbio, A. D. Stefano, T. A. Han, G. Castignani, and P. Liò (2025)
  FAIRGAME: A framework for AI agents bias recognition using game theory.
  In ECAI 2025 - 28th European Conference on Artificial Intelligence,
  25-30 October 2025, Bologna, Italy - Including 14th Conference on
  Prestigious Applications of Intelligent Systems (PAIS 2025), I. Lynce, N. Murano, M. Vallati, S. Villata, F. Chesani, M. Milano, A. Omicini, and M. Dastani (Eds.),
  Frontiers in Artificial Intelligence and Applications, pp. 4097–4104.
  External Links: [Document](https://dx.doi.org/10.3233/FAIA251300)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p1.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [11]
  C. F. Camerer (2003)
  Behavioral game theory: experiments in strategic interaction.
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p5.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [12]
  J. Chen, X. Hu, S. Liu, S. Huang, W. Tu, Z. He, and L. Wen (2024)
  LLMArena: assessing capabilities of large language models in dynamic multi-agent environments.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational
  Linguistics (Volume 1: Long Papers), ACL 2024, Bangkok, Thailand,
  August 11-16, 2024, L. Ku, A. Martins, and V. Srikumar (Eds.),
  pp. 13055–13077.
  External Links: [Document](https://dx.doi.org/10.18653/V1/2024.ACL-LONG.705)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [13]
  W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, Y. Qin, X. Cong, R. Xie, Z. Liu, M. Sun, and J. Zhou (2024)
  AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In The Twelfth International Conference on Learning Representations,
  ICLR 2024, Vienna, Austria, May 7-11, 2024,
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p4.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [14]
  J. H. Dreze and J. Greenberg (1980)
  Hedonic coalitions: optimality and stability.
  Econometrica 48 (4), pp. 987.
  External Links: ISSN 0012-9682,
  [Document](https://dx.doi.org/10.2307/1912943)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§3](https://arxiv.org/html/2604.14386v1#S3.p1.1 "3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [15]
  J. Duan, R. Zhang, J. Diffenderfer, B. Kailkhura, L. Sun, E. Stengel-Eskin, M. Bansal, T. Chen, and K. Xu (2024)
  GTBench: uncovering the strategic reasoning capabilities of LLMs via game-theoretic evaluations.
  In The Thirty-eighth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=ypggxVWIv2)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p1.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [16]
  C. Fan, J. Chen, Y. Jin, and H. He (2024)
  Can large language models serve as rational players in game theory? A systematic analysis.
  In Thirty-Eighth AAAI Conference on Artificial Intelligence, AAAI
  2024, Thirty-Sixth Conference on Innovative Applications of Artificial
  Intelligence, IAAI 2024, Fourteenth Symposium on Educational Advances
  in Artificial Intelligence, EAAI 2014, February 20-27, 2024, Vancouver,
  Canada, M. J. Wooldridge, J. G. Dy, and S. Natarajan (Eds.),
  pp. 17960–17967.
  External Links: [Document](https://dx.doi.org/10.1609/AAAI.V38I16.29751)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p1.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [17]
  Y. Fu, H. Peng, T. Khot, and M. Lapata (2023)
  Improving language model negotiation with self-play and in-context learning from ai feedback.
  arXiv preprint arXiv.2305.10142.
  External Links: [Link](https://arxiv.org/abs/2305.10142)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p1.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [18]
  K. Gandhi, D. Sadigh, and N. Goodman (2023)
  Strategic reasoning with language models.
  In NeurIPS 2023 Foundation Models for Decision Making Workshop,
  External Links: [Link](https://openreview.net/forum?id=MUtbsFRZwI)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [19]
  D. Hendrycks, C. Burns, S. Basart, A. Zou, M. Mazeika, D. Song, and J. Steinhardt (2021)
  Measuring massive multitask language understanding.
  In 9th International Conference on Learning Representations, ICLR 2021,
  Virtual Event, Austria, May 3-7, 2021,
  Cited by: [2nd item](https://arxiv.org/html/2604.14386v1#A7.I1.i2.p1.1 "In Appendix G Capability Profile Estimation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§7.1](https://arxiv.org/html/2604.14386v1#S7.SS1.p2.1 "7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [20]
  D. Hendrycks, C. Burns, S. Kadavath, A. Arora, S. Basart, E. Tang, D. Song, and J. Steinhardt (2021)
  Measuring mathematical problem solving with the MATH dataset.
  In Proceedings of the Neural Information Processing Systems Track on
  Datasets and Benchmarks 1, NeurIPS Datasets and Benchmarks 2021, December
  2021, virtual, J. Vanschoren and S. Yeung (Eds.),
  Cited by: [1st item](https://arxiv.org/html/2604.14386v1#A7.I1.i1.p1.1 "In Appendix G Capability Profile Estimation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§7.1](https://arxiv.org/html/2604.14386v1#S7.SS1.p2.1 "7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [21]
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, L. Zhou, C. Ran, L. Xiao, C. Wu, and J. Schmidhuber (2024)
  MetaGPT: meta programming for A multi-agent collaborative framework.
  In The Twelfth International Conference on Learning Representations,
  ICLR 2024, Vienna, Austria, May 7-11, 2024,
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p4.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [22]
  Y. Hua, H. Chen, S. Wang, W. Li, X. Wang, and J. Luo (2025)
  Shapley-coop: credit assignment for emergent cooperation in self-interested LLM agents.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=HnJ1UkuJXS)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p3.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p6.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [23]
  T. Huynh, D. Dao-Sy, T. Cao, P. Le, H. Nguyen, P. Nguyen-Lam, M. Nguyen-Vo, H. Pham, P. Pham, T. Than, C. Tran, H. Tran, G. Tran-Le, A. Buscemi, L. H. Trang, and T. A. Han (2025)
  Understanding llm agent behaviours via game theory: strategy recognition, biases and multi-agent dynamics.
  arXiv preprint arXiv.2512.07462.
  External Links: [Link](https://arxiv.org/abs/2512.07462)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p2.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [24]
  C. Jiayang, C. Chan, Q. Zhuang, L. Qiu, T. Zhang, T. Liu, Y. Song, Y. Zhang, P. Liu, and Z. Zhang (2024)
  ECON: on the detection and resolution of evidence conflicts.
  In Proceedings of the 2024 Conference on Empirical Methods in Natural
  Language Processing, EMNLP 2024, Miami, FL, USA, November 12-16,
  2024, Y. Al-Onaizan, M. Bansal, and Y. Chen (Eds.),
  pp. 7816–7844.
  External Links: [Link](https://doi.org/10.18653/v1/2024.emnlp-main.447),
  [Document](https://dx.doi.org/10.18653/V1/2024.EMNLP-MAIN.447)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [25]
  A. N. Kulkarni, A. Liu, J. Gaglione, D. Fried, and U. Topcu (2025)
  Dynamic coalition structure detection in natural-language-based interactions.
  In Proceedings of the 24th International Conference on Autonomous Agents
  and Multiagent Systems, AAMAS 2025, Detroit, MI, USA, May 19-23,
  2025, S. Das, A. Nowé, and Y. Vorobeychik (Eds.),
  pp. 1227–1234.
  External Links: [Link](https://dl.acm.org/doi/10.5555/3709347.3743754),
  [Document](https://dx.doi.org/10.5555/3709347.3743754)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p3.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [26]
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem (2023)
  CAMEL: communicative agents for ”mind” exploration of large language model society.
  In Advances in Neural Information Processing Systems 36: Annual Conference
  on Neural Information Processing Systems 2023, NeurIPS 2023, New Orleans,
  LA, USA, December 10 - 16, 2023, A. Oh, T. Naumann, A. Globerson, K. Saenko, M. Hardt, and S. Levine (Eds.),
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p4.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [27]
  J. Liu, L. Cui, H. Liu, D. Huang, Y. Wang, and Y. Zhang (2020)
  LogiQA: A challenge dataset for machine reading comprehension with logical reasoning.
  In Proceedings of the Twenty-Ninth International Joint Conference on
  Artificial Intelligence, IJCAI 2020, C. Bessiere (Ed.),
  pp. 3622–3628.
  External Links: [Document](https://dx.doi.org/10.24963/IJCAI.2020/501)
  Cited by: [3rd item](https://arxiv.org/html/2604.14386v1#A7.I1.i3.p1.1 "In Appendix G Capability Profile Estimation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§7.1](https://arxiv.org/html/2604.14386v1#S7.SS1.p2.1 "7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [28]
  S. Mao, Y. Cai, Y. Xia, W. Wu, X. Wang, F. Wang, Q. Guan, T. Ge, and F. Wei (2025)
  ALYMPICS: LLM agents meet game theory.
  In Proceedings of the 31st International Conference on Computational
  Linguistics, COLING 2025, Abu Dhabi, UAE, January 19-24, 2025, O. Rambow, L. Wanner, M. Apidianaki, H. Al-Khalifa, B. D. Eugenio, and S. Schockaert (Eds.),
  pp. 2845–2866.
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p2.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [29]
  R. D. McKelvey and T. R. Palfrey (1995)
  Quantal response equilibria for normal form games.
  Games and Economic Behavior 10 (1), pp. 6–38.
  External Links: ISSN 0899-8256,
  [Document](https://dx.doi.org/10.1006/game.1995.1023)
  Cited by: [§E.1](https://arxiv.org/html/2604.14386v1#A5.SS1.p1.2 "E.1 Connection to Quantal Response Equilibria ‣ Appendix E QRE Connection and ϵ-Estimation Methodology ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p5.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§3.2](https://arxiv.org/html/2604.14386v1#S3.SS2.p2.1 "3.2 Bounded-Rational Preferences ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§4.2](https://arxiv.org/html/2604.14386v1#S4.SS2.p1.1 "4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [30]
  C. Qian, W. Liu, H. Liu, N. Chen, Y. Dang, J. Li, C. Yang, W. Chen, Y. Su, X. Cong, J. Xu, D. Li, Z. Liu, and M. Sun (2024)
  ChatDev: communicative agents for software development.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational
  Linguistics (Volume 1: Long Papers), ACL 2024, Bangkok, Thailand,
  August 11-16, 2024, L. Ku, A. Martins, and V. Srikumar (Eds.),
  pp. 15174–15186.
  External Links: [Document](https://dx.doi.org/10.18653/V1/2024.ACL-LONG.810)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p4.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [31]
  T. Rahwan, T. P. Michalak, M. J. Wooldridge, and N. R. Jennings (2015)
  Coalition structure generation: A survey.
  Artif. Intell. 229, pp. 139–174.
  External Links: [Document](https://dx.doi.org/10.1016/J.ARTINT.2015.08.004)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [32]
  H. A. Simon (1955)
  A behavioral model of rational choice.
  The Quarterly Journal of Economics 69 (1), pp. 99.
  External Links: ISSN 0033-5533,
  [Document](https://dx.doi.org/10.2307/1884852)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p5.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [33]
  H. Sun, Y. Wu, Y. Cheng, and X. Chu (2025)
  Game theory meets large language models: A systematic survey.
  In Proceedings of the Thirty-Fourth International Joint Conference on
  Artificial Intelligence, IJCAI 2025, Montreal, Canada, August 16-22,
  2025,
  pp. 10669–10677.
  External Links: [Document](https://dx.doi.org/10.24963/IJCAI.2025/1184)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p2.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [34]
  X. Wang, J. Wei, D. Schuurmans, Q. V. Le, E. H. Chi, S. Narang, A. Chowdhery, and D. Zhou (2023)
  Self-consistency improves chain of thought reasoning in language models.
  In The Eleventh International Conference on Learning Representations,
  ICLR 2023, Kigali, Rwanda, May 1-5, 2023,
  Cited by: [§7.1](https://arxiv.org/html/2604.14386v1#S7.SS1.p7.1 "7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [35]
  J. Wei, X. Wang, D. Schuurmans, M. Bosma, B. Ichter, F. Xia, E. H. Chi, Q. V. Le, and D. Zhou (2022)
  Chain-of-thought prompting elicits reasoning in large language models.
  In Advances in Neural Information Processing Systems 35: Annual Conference
  on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans,
  LA, USA, November 28 - December 9, 2022, S. Koyejo, S. Mohamed, A. Agarwal, D. Belgrave, K. Cho, and A. Oh (Eds.),
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p3.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§6](https://arxiv.org/html/2604.14386v1#S6.p1.1 "6 Coalition-of-Thought Prompting ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§7.1](https://arxiv.org/html/2604.14386v1#S7.SS1.p7.1 "7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [36]
  M. J. Wooldridge (2011)
  Computational aspects of cooperative game theory.
  In Agent and Multi-Agent Systems: Technologies and Applications - 5th
  KES International Conference, KES-AMSTA 2011, Manchester, UK,
  June 29 - July 1, 2011. Proceedings, J. O’Shea, N. T. Nguyen, K. A. Crockett, R. J. Howlett, and L. C. Jain (Eds.),
  Lecture Notes in Computer Science, pp. 1.
  External Links: [Document](https://dx.doi.org/10.1007/978-3-642-22000-5%5F1)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p4.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p1.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§3.1](https://arxiv.org/html/2604.14386v1#S3.SS1.p2.2 "3.1 LLM Coalition Formation Games ‣ 3 Problem Formulation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [37]
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, A. H. Awadallah, R. W. White, D. Burger, and C. Wang (2024)
  AutoGen: enabling next-gen LLM applications via multi-agent conversations.
  In First Conference on Language Modeling,
  External Links: [Link](https://openreview.net/forum?id=BAakY1hNKS)
  Cited by: [§1](https://arxiv.org/html/2604.14386v1#S1.p1.1 "1 Introduction ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"),
  [§2](https://arxiv.org/html/2604.14386v1#S2.p4.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").
- [38]
  Y. Xia, T. Wang, W. Xu, and S. Zhang (2025)
  DAO-agent: zero knowledge-verified incentives for decentralized multi-agent coordination.
  arXiv preprint arXiv.2512.20973.
  External Links: [Link](https://arxiv.org/abs/2512.20973)
  Cited by: [§2](https://arxiv.org/html/2604.14386v1#S2.p3.1 "2 Related Work ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").

## Appendix A On the Existence of Nash-Stable Partitions

Nash-stable partitions are not guaranteed to exist in all LCFGs. The following example, adapted from a reviewer suggestion, illustrates when our assumptions are needed.

###### Example 2 (Non-Existence under One-Dimensional Capabilities).

Consider two agents $H$ and $L$ with scalar capabilities $c\_{H}=1$ and $c\_{L}=0.4$ (i.e., $d=1$). Using $\phi(c)=c$ and $\psi(k)=0.15k^{1.3}$:

- •

  $v(\{H\})=1-0.15=0.85$, so $u\_{H}(\{H\})=0.85$
- •

  $v(\{L\})=0.4-0.15=0.25$, so $u\_{L}(\{L\})=0.25$
- •

  $v(\{H,L\})=1-0.15\cdot 2^{1.3}\approx 0.631$, so $u\_{i}(\{H,L\})\approx 0.316$

In partition $\{\{H\},\{L\}\}$: agent $L$ gains by joining $H$ ($0.25\to 0.316$). In partition $\{\{H,L\}\}$: agent $H$ gains by leaving ($0.316\to 0.85$). No Nash-stable partition exists.

Why this fails. The potential alignment condition (Assumption [2](https://arxiv.org/html/2604.14386v1#Thmassumption2 "Assumption 2 (Potential Alignment). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")) is violated: when $L$ joins $H$, the total value *decreases* (from $0.85+0.25=1.10$ to $0.631$) despite $L$’s per-capita value increasing. This occurs because $L$ contributes no unique capability (its scalar capability is dominated by $H$’s), yet still splits the coalition value equally.

When this does not arise. With multi-dimensional capabilities ($d\geq 2$), agents with diverse specializations bring unique coverage when joining a coalition. In our experimental setting ($d=3$), each agent contributes to at least one dimension where it is competitive, ensuring that joining increases total capability coverage sufficiently to maintain potential alignment. We verify this computationally for all possible deviations in our 6-agent setting.

## Appendix B Proof of Theorem [1](https://arxiv.org/html/2604.14386v1#Thmtheorem1 "Theorem 1 (Deterministic Existence). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") (Deterministic Existence)

###### Proof.

We prove existence constructively by showing that any sequence of improving deviations terminates at a Nash-stable partition.

Step 1: Potential function. Define $\Phi(\pi)=\sum\_{C\in\pi}v(C)$.

Step 2: Improving deviations increase potential. Consider agent $a\_{i}$ in coalition $C$ who deviates to $C^{\prime}\in\pi\cup\{\emptyset\}$. By $\epsilon$-rationality and the $\delta$-value gap condition (Lemma [6](https://arxiv.org/html/2604.14386v1#Thmtheorem6 "Lemma 6 (Value Gap Discretization). ‣ Appendix B Proof of Theorem (Deterministic Existence) ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), the agent’s per-capita value increases by at least $\delta-\epsilon>\delta/2>0$. By potential alignment (Assumption [2](https://arxiv.org/html/2604.14386v1#Thmassumption2 "Assumption 2 (Potential Alignment). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")), $\Phi(\pi^{\prime})>\Phi(\pi)$.

Step 3: Discreteness. By the $\delta$-value gap condition, coalition values take values from a discrete set with minimum gap proportional to $\delta$. Thus $\Phi$ takes finitely many values.

Step 4: Termination. Since $\Phi$ strictly increases with each deviation and is bounded above by $n\cdot\max\_{S}v(S)$, the improvement path terminates at a partition $\pi^{\*}$ from which no improving deviation exists. By definition, $\pi^{\*}$ is Nash-stable.
∎

###### Lemma 6 (Value Gap Discretization).

Under the $\delta$-value gap condition, for any agent $a\_{i}$, the distinct per-capita values $\{v\_{i}(S):S\ni a\_{i}\}$ can be ordered as $V\_{1}<V\_{2}<\cdots<V\_{K}$ with $V\_{k+1}-V\_{k}\geq\delta$ for all $k$.

###### Proof.

Follows directly from Assumption [1](https://arxiv.org/html/2604.14386v1#Thmassumption1 "Assumption 1 (Value Gap Condition). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"): any two distinct per-capita values differ by at least $\delta$.
∎

## Appendix C Proof of Theorem [2](https://arxiv.org/html/2604.14386v1#Thmtheorem2 "Theorem 2 (Consistency-Driven Stability Bound). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") (Consistency-Driven Bound)

###### Proof.

We decompose the probability of Nash stability into consistency and structure factors.

Step 1: Decision decomposition. A partition $\pi$ is Nash-stable if and only if no agent prefers to deviate. We decompose the $K\_{n}$ agent-coalition preference decisions into $K\_{\text{eff}}$ critical decisions (value gap $<2\epsilon$, where consistency is approximately $p$) and $K\_{n}-K\_{\text{eff}}$ easy decisions (large value gap, where consistency approaches $p\_{\text{easy}}\approx 1$).

Step 2: Conditional decomposition. By the law of total probability:

|  |  |  |
| --- | --- | --- |
|  | $$\Pr[\text{Nash-stable}]=\Pr[\text{all decisions consistent}]\cdot\Pr[\text{Nash}\mid\text{consistent}]$$ |  |

Step 3: Bounding the first factor. Assuming decision independence across agents and coalition comparisons, the probability that all decisions are made consistently is at least $p^{K\_{\text{eff}}}\cdot p\_{\text{easy}}^{K\_{n}-K\_{\text{eff}}}$. We note that decision independence is a modeling simplification; in practice, an agent’s consistency across different comparisons may be correlated, which could either tighten or loosen this bound.

Step 4: Bounding the second factor. Given consistent decisions, the system follows deterministic improving dynamics on a potential game (under Assumption [2](https://arxiv.org/html/2604.14386v1#Thmassumption2 "Assumption 2 (Potential Alignment). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees")). The probability that these dynamics reach a Nash-stable partition is $\gamma(G)$. Under logit dynamics [[5](https://arxiv.org/html/2604.14386v1#bib.bib31)], the stationary distribution assigns probability proportional to $\exp(\lambda\cdot\Phi(\pi))$ to each partition $\pi$, concentrating mass on potential maxima. For a single dominant maximum with potential gap $\delta$ and precision $\lambda=1/\bar{\epsilon}$, we obtain $\gamma(G)\geq 1-\exp(-\delta/\bar{\epsilon})$ as an approximate lower bound. In our experiments, we estimate $\gamma(G)\approx 0.90$ empirically.

Combining Steps 2–4 yields $\Pr[\text{Nash-stable}]\geq p^{K\_{\text{eff}}}\cdot p\_{\text{easy}}^{K\_{n}-K\_{\text{eff}}}\cdot\gamma(G)$.
∎

## Appendix D Proof of Theorem [5](https://arxiv.org/html/2604.14386v1#Thmtheorem5 "Theorem 5 (Complexity of Nash Stability). ‣ 5 Complexity Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") (Complexity)

###### Proof.

Part 1: Polynomial verification. For each of $n$ agents, check all $O(n)$ possible coalitions to join. Each check requires computing the per-capita value, which is $O(d)$ for $d$-dimensional capabilities. Total: $O(n^{2}d)$.

Part 2: NP-hardness context. Computing Nash-stable partitions is NP-hard in general hedonic games [[4](https://arxiv.org/html/2604.14386v1#bib.bib15)]. LCFGs are a subclass of hedonic games with additional structure (componentwise-max aggregation, parameterized coordination costs). When the capability dimension $d$ is part of the input, LCFGs can represent sufficiently rich preference structures to encode hard instances from the general setting. For fixed $d$ (as in our experiments with $d=3$), the restricted structure enables tractability under the additional assumptions in Part 3.

Part 3: Polynomial under assumptions. Under capability monotonicity and potential alignment, Theorem [1](https://arxiv.org/html/2604.14386v1#Thmtheorem1 "Theorem 1 (Deterministic Existence). ‣ 4.1 Deterministic Existence (Ideal Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") guarantees convergence of improving dynamics in $O(n\cdot\Delta\_{v}/\delta)$ steps, each requiring $O(n^{2}d)$ work. Total: $O(n^{3}d\cdot\Delta\_{v}/\delta)$.
∎

## Appendix E QRE Connection and $\epsilon$-Estimation Methodology

### E.1 Connection to Quantal Response Equilibria

Under logit dynamics with parameter $\lambda=1/\epsilon$, the probability that agent $a\_{i}$ prefers coalition $S$ over $T$ is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Pr[S\succ\_{i}T]=\frac{\exp(\lambda\cdot v\_{i}(S))}{\exp(\lambda\cdot v\_{i}(S))+\exp(\lambda\cdot v\_{i}(T))}=\frac{1}{1+\exp(-\lambda\cdot(v\_{i}(S)-v\_{i}(T)))}$$ |  | (5) |

This is the standard logit choice model from QRE theory [[29](https://arxiv.org/html/2604.14386v1#bib.bib30)]. When $v\_{i}(S)-v\_{i}(T)>\epsilon=1/\lambda$, the probability exceeds $1/(1+e^{-1})\approx 0.73$, consistent with our $\epsilon$-rationality definition.

### E.2 $\epsilon$-Estimation Procedure

We estimate $\epsilon$ without assuming the $\epsilon$-rationality model, using ground-truth coalition values as external reference:

1. 1.

   Generate all coalition pairs $(S,T)$ containing agent $a\_{i}$ with $|S|,|T|\leq 4$.
2. 2.

   Compute ground-truth per-capita values $v\_{i}(S)$, $v\_{i}(T)$ from known capability profiles.
3. 3.

   Query agent preferences using standard prompting and record responses.
4. 4.

   For each value gap $\Delta=|v\_{i}(S)-v\_{i}(T)|$, compute the rate of irrational choices (agent prefers the objectively worse coalition).
5. 5.

   Estimate $\hat{\epsilon}$ as the threshold where irrational choice frequency drops below 50%.

This procedure is not circular: ground-truth values come from external benchmark evaluations, and $\epsilon$ is estimated from the mismatch between computed values and agent preferences. Results: $\hat{\epsilon}=0.15$ [95% CI: 0.12–0.18] for GPT-4, $\hat{\epsilon}=0.14$ [0.11–0.17] for Claude-3, $\hat{\epsilon}=0.22$ [0.18–0.26] for Llama-3.

## Appendix F Coalition Value Function Analysis

### F.1 Sensitivity Analysis

We evaluate sensitivity to the coordination cost parameters $\alpha$ and $\beta$:

| Parameters | Nash Stable | Welfare | Avg. Size | $\delta$ |
| --- | --- | --- | --- | --- |
| $\alpha=0.10,\beta=1.3$ | 70.1% | 0.83 | 2.4 | 0.065 |
| $\alpha=0.15,\beta=1.3$ (default) | 73.2% | 0.81 | 2.1 | 0.082 |
| $\alpha=0.20,\beta=1.3$ | 74.8% | 0.76 | 1.8 | 0.098 |
| $\alpha=0.15,\beta=1.0$ | 68.5% | 0.84 | 2.5 | 0.071 |
| $\alpha=0.15,\beta=1.5$ | 75.3% | 0.77 | 1.7 | 0.094 |

Higher coordination costs favor smaller coalitions with higher stability but lower welfare. Our default parameters ($\alpha=0.15,\beta=1.3$) provide a balanced tradeoff.

### F.2 $\delta$-Value Gap Verification

We verify the $\delta$-value gap condition by computing all pairwise per-capita value differences. With 6 agents, there are $\binom{6}{1}+\binom{6}{2}+\binom{6}{3}+\binom{6}{4}=56$ coalitions of size $\leq 4$. For each agent, we compute $v\_{i}(S)$ for all $S\ni a\_{i}$ and find the minimum non-zero difference: $\delta=0.082$ [95% CI: 0.078–0.086].

## Appendix G Capability Profile Estimation

Capability profiles are estimated via evaluation on stratified benchmark subsets:

- •

  MATH [[20](https://arxiv.org/html/2604.14386v1#bib.bib16)]: 100 problems (stratified by difficulty)
- •

  MMLU [[19](https://arxiv.org/html/2604.14386v1#bib.bib20)]: 100 knowledge questions (subset)
- •

  LogiQA [[27](https://arxiv.org/html/2604.14386v1#bib.bib17)]: 100 logical reasoning questions

Each model is evaluated 3 times at $\tau=0$ with the prompt: “Answer the following question. Provide only the final answer.” We normalize scores to $[0,1]$ relative to the evaluation set. Within-architecture variation is induced by different system prompts (analytical vs. creative). Full results with confidence intervals are in Table [2](https://arxiv.org/html/2604.14386v1#S7.T2 "Table 2 ‣ 7.1 Experimental Setup ‣ 7 Experimental Evaluation ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees").

## Appendix H Scaling Analysis

### H.1 Agent Count Scaling

| Agents | Nash Stable | Conv. Rounds | Coalitions | Avg. Size |
| --- | --- | --- | --- | --- |
| 4 | 82.3% | 7.2 | 2.1 | 1.9 |
| 6 | 73.2% | 11.4 | 2.8 | 2.1 |
| 8 | 64.8% | 18.7 | 3.4 | 2.4 |
| 10 | 57.2% | 28.3 | 4.1 | 2.4 |

The empirical scaling is approximately $\text{Nash Rate}\approx 1.9/\sqrt{n}$ for $n\geq 6$, consistent with Corollary [3](https://arxiv.org/html/2604.14386v1#Thmtheorem3 "Corollary 3 (Scaling Law). ‣ 4.2 Consistency-Driven Stability (Realistic Conditions) ‣ 4 Theoretical Analysis ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees"). The fit is approximate; at $n=4$ the formula overpredicts (95% predicted vs. 82.3% observed), suggesting the $O(\sqrt{n})$ scaling of $K\_{\text{eff}}$ emerges for larger agent populations.

### H.2 Capability Dimension Scaling

| Dimensions | Nash Stable | Conv. Rounds | Welfare |
| --- | --- | --- | --- |
| 2 | 78.4% | 9.8 | 0.74 |
| 3 | 73.2% | 11.4 | 0.81 |
| 4 | 68.7% | 13.2 | 0.86 |
| 5 | 63.5% | 15.8 | 0.89 |

More capability dimensions increase welfare (better coverage) but decrease stability (more complex tradeoffs).

## Appendix I Extended Ablation Studies

### I.1 Isolated CoalT Component Effects

| Component Only | Nash Stable | $\Delta$ vs Standard |
| --- | --- | --- |
| Standard (baseline) | 41.8% | – |
| Step 1 only (Capability) | 43.2% | +1.4pp |
| Step 2 only (Complementarity) | 51.3% | +9.5pp |
| Step 3 only (Value Est.) | 48.7% | +6.9pp |
| Step 4 only (Cost Analysis) | 45.2% | +3.4pp |
| Step 5 only (Declaration) | 42.1% | +0.3pp |
| All steps (CoalT) | 73.2% | +31.4pp |

Individual effects sum to +21.5pp but the combined effect is +31.4pp, indicating superlinear complementarity between CoalT steps.

### I.2 Preference Quality vs. Consistency

We decompose CoalT’s effect into quality (correlation with ground-truth value ordering) and consistency (agreement across repeated queries):

| Condition | Quality ($\rho$) | Consistency | Nash Stable |
| --- | --- | --- | --- |
| Standard | 0.58 | 0.64 | 41.8% |
| CoalT | 0.71 | 0.86 | 73.2% |

Regression analysis across all five conditions with preference data (Greedy, Standard, Vanilla CoT, Self-Consistency, CoalT) yields a strong linear relationship: $\text{Nash Rate}=-0.48+1.41\cdot\text{Consistency}$ ($R^{2}=0.99$, $n=5$). Adding Quality as a second predictor provides negligible improvement ($\Delta R^{2}<0.001$) due to high collinearity between quality and consistency ($r>0.99$). This confirms the theoretical prediction that preference consistency is the primary driver of coalition stability.

### I.3 Temperature Effects

| Temp. | Nash Stable | Consistency | Quality | Conv. Rounds |
| --- | --- | --- | --- | --- |
| 0.0 | 73.2% | 0.86 | 0.71 | 11.4 |
| 0.1 | 71.8% | 0.84 | 0.70 | 11.9 |
| 0.3 | 68.4% | 0.79 | 0.68 | 13.2 |
| 0.5 | 62.1% | 0.72 | 0.65 | 15.8 |
| 0.7 | 54.3% | 0.64 | 0.61 | 19.1 |
| 1.0 | 41.5% | 0.51 | 0.55 | 24.7 |

Consistency degrades approximately exponentially with temperature, and stability tracks consistency, confirming the theoretical analysis.

## Appendix J CoalT Prompt Template

```
You are agent {agent_id} with capabilities:
- Mathematical reasoning: {math_score}
- Factual knowledge: {factual_score}
- Logical analysis: {logic_score}

Evaluate whether to stay in your current coalition
or switch to a different one.

CURRENT COALITION: {current_members}
Capabilities (max per dim):
  Math: {cur_math}, Facts: {cur_fact}, Logic: {cur_logic}

CANDIDATE COALITION (if you join): {cand_members}
Capabilities (max per dim):
  Math: {cand_math}, Facts: {cand_fact}, Logic: {cand_logic}

TASK: Answer questions requiring [{task_dims}]

## Step 1: Capability Analysis
List what each member contributes.

## Step 2: Complementarity Assessment
Identify strengths (>0.8) and gaps (<0.7).

## Step 3: Value Estimation
Estimate task performance (0-1) for each coalition.

## Step 4: Coordination Cost Analysis
Assess communication overhead per coalition size.

## Step 5: Final Preference
I prefer: [CURRENT / CANDIDATE / INDIFFERENT]
Confidence: [low/medium/high]
Reason: [one sentence]
```
