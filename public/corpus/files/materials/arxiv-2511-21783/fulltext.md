---
id: arxiv-2511-21783-text
type: material
title: 'NetworkGames: Simulating Cooperation in Network Games with Personality-driven LLM Agents'
work_id: arxiv-2511-21783
source_url: https://arxiv.org/html/2511.21783v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 7a22417da004d9107343224c0cc19b6e4f2cadca08b844eaa91919a1516cf7a4
---

> Источник: [https://arxiv.org/html/2511.21783v2](https://arxiv.org/html/2511.21783v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents

Xuan Qiu
Affiliation: The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
email: [maxxuanqiu@hkust-gz.edu.cn](mailto:maxxuanqiu@hkust-gz.edu.cn)

###### Abstract.

While Large Language Models (LLMs) have been extensively tested in dyadic game-theoretic scenarios, their collective behavior within complex network games remains surprisingly unexplored. To bridge this gap, we present NetworkGames, a framework connecting Generative Agents and Geometric Deep Learning. By formalizing social simulation as a message-passing process governed by LLM policies, we investigate how node heterogeneity (MBTI personalities) and network topology co-determine collective welfare. We instantiate a population of LLM agents, each endowed with a distinct personality from the MBTI taxonomy, and situate them in various network structures (e.g., small-world and scale-free). Through extensive simulations of the Iterated Prisoner’s Dilemma, we first establish a baseline dyadic interaction matrix, revealing nuanced cooperative preferences between all 16 personality pairs. We then demonstrate that macro-level cooperative outcomes are not predictable from dyadic interactions alone; they are co-determined by the network’s connectivity and the spatial distribution of personalities. For instance, we reveal two counter-intuitive phenomena. First, the Paradox of Connectivity: while Small-World shortcuts optimize information transport, they act as “vectors of exploitation” that destabilize cooperative clusters found in regular lattices. Second, Hub Determinism: in Scale-Free networks, the personality traits of highly connected nodes ($10\%$ of the population) strictly dictate macroscopic outcomes, enabling targeted interventions that double cooperation rates ($28\%\to 67\%$). These findings suggest that information efficiency and social resilience may be structurally opposing goals. We validate the robustness of these findings through extensive stress tests across multiple LLM architectures, scaled network sizes, varying random seeds, and comprehensive ablation studies. Our findings offer significant implications for designing healthier online social environments and forecasting collective behavior. We open-source our framework to facilitate research into the social physics of AI societies.

## 1. Introduction

The tension between individual rationality and collective welfare is a central theme in multi-agent systems. While the Prisoner’s Dilemma (PD) serves as the canonical model for this tension, classical Game Theory often relies on the simplifying assumption of “well-mixed” populations. In such settings, each player typically interacts with all others, resulting in a mean-field approximation of social dynamics.

To model structurally realistic interactions, Network Games emerged as a modern branch of game theory. Unlike classical game theory—where each player typically interacts with all others—network games assume that players only affect, and are affected by, their specific neighbors defined by a graph structure $\mathcal{G}(\mathcal{V},\mathcal{E})$. Within this paradigm, the topological connectivity pattern dictates the evolution of strategies and the emergence of cooperation ([Nowak and May, 1992](https://arxiv.org/html/2511.21783v2#bib.bib5); [Szabó and Fáth, 2007](https://arxiv.org/html/2511.21783v2#bib.bib18)).

Simultaneously, Large Language Models (LLMs) have surfaced as powerful proxies for human decision-making, offering “generative agents” capable of sophisticated reasoning and social emulation ([Park et al., 2023](https://arxiv.org/html/2511.21783v2#bib.bib2)). However, existing research at the intersection of LLMs and Game Theory has predominantly focused on dyadic interactions or unstructured groups. The behavior of these advanced LLM agents within a formal network game framework—where interactions are explicitly constrained by graph topology—remains completely unexplored.

In this work, we introduce NetworkGames to bridge this gap. We draw architectural inspiration from Graph Neural Networks (GNNs) ([Scarselli et al., 2008](https://arxiv.org/html/2511.21783v2#bib.bib3); [Gilmer et al., 2017](https://arxiv.org/html/2511.21783v2#bib.bib4)) to model both social influence and cognitive diversity. Just as a GNN node updates its latent state by aggregating feature vectors from its neighbors (Message Passing), our agents update their strategic stance by aggregating the “social context” ($\Omega$)—the observed behaviors of their local neighborhood. This formulation allows us to treat social simulation as a message-passing process where the update function is parameterized by an LLM policy $\pi\_{\theta}$ rather than a shallow neural network.

Crucially, strictly homogeneous populations yield trivial dynamics. To capture the complex motivations of real-world social systems, we introduce node heterogeneity. In geometric deep learning, each node begins with a distinct initial feature vector representing its unique prior distribution. To simulate this computationally, we use personality attributes to emulate the node heterogeneity of GNNs, where each node possesses distinct prior distributions (e.g., varying initial features). By endowing each agent with explicit semantic priors using Myers-Briggs (MBTI) profiles, we ensure varying initial features and diverse behavioral prior distributions across the graph.

To our knowledge, this is the first work that studies LLM agents within a formal network game framework, where interactions are explicitly constrained by graph topology. By situating populations of heterogeneous agents into diverse topological structures (Regular, Small-World, Scale-Free), we bridge micro-level psychological realism (personality as node features) with macro-level structural constraints (topology as message-passing edges), uncovering dynamics invisible to standard homogeneous simulations. Our contributions are:

- •

  Pioneering Network Games with LLMs. We provide the first systematic study answering the question: “How do LLM agents behave in network games?” by exploring their collective dynamics across diverse graph topologies.
- •

  Graph-Theoretic LLM Framework. We formalize the LLM agent as a stochastic policy function conditioned on topological signal aggregation, bridging GNN message-passing mechanics with computational social simulation.
- •

  The Paradox of Connectivity. We demonstrate that Small-World shortcuts, while efficient for information transport, act as “vectors of exploitation” that destabilize cooperative clusters, challenging intuitions derived from simple imitation dynamics.
- •

  Hub Determinism. In Scale-Free networks, we find that macro-welfare is strictly determined by the personality traits of the hub nodes ($<10\%$ of population), enabling targeted interventions that double cooperation rates ($28\%\to 67\%$).

## 2. Related Work

LLMs in Game Theory.
LLMs allow the study of social dynamics without the need to learn reward functions explicitly, as in Multi-Agent Reinforcement Learning (MARL) ([Lu et al., 2024](https://arxiv.org/html/2511.21783v2#bib.bib15)). Recent works have engaged LLMs in the Iterated Prisoner’s Dilemma, demonstrating their ability to understand payoff matrices and recall history ([Akata et al., 2025](https://arxiv.org/html/2511.21783v2#bib.bib16); [Brookins and DeBacker, 2024](https://arxiv.org/html/2511.21783v2#bib.bib17)). However, these agents typically operate in topological vacuums (dyadic or fully connected), failing to capture the spatial dimension of cooperation where local clustering allows cooperators to survive against defectors.

Network Games and Topology.
Seminal works in physics and economics established that spatial structure fundamentally alters evolutionary game dynamics ([Nowak and May, 1992](https://arxiv.org/html/2511.21783v2#bib.bib5); [Santos and Pacheco, 2005](https://arxiv.org/html/2511.21783v2#bib.bib6)). For instance, scale-free networks usually promote cooperation due to hub protection. However, these traditional models rely on simplistic, predefined heuristics (e.g., Win-Stay-Lose-Shift). Our work replaces these heuristic scalars with high-dimensional semantic priors (LLM personalities), investigating whether “rational” LLM agents obey the same topological laws as simple agents.

Social Simulation as Message Passing.
Our methodology aligns with the Message Passing Neural Network (MPNN) framework used in geometric deep learning ([Gilmer et al., 2017](https://arxiv.org/html/2511.21783v2#bib.bib4)). In GNNs, a node’s representation is iteratively updated by aggregating messages from neighbors. Similarly, in computational social science, an agent’s belief state is a function of its neighbors’ actions ([Centola, 2010](https://arxiv.org/html/2511.21783v2#bib.bib1)). By explicitly formalizing the neighborhood observation context ($\Omega\_{i}$) as an aggregation function, we provide a mathematical link between Graph ML architectures and Agent-Based Modeling (ABM).

Personality in AI.
Integrating psychological frameworks like the Big Five or MBTI into AI agents improves behavioral realism ([Jiang et al., 2024](https://arxiv.org/html/2511.21783v2#bib.bib7); [La Cava and Tagarelli, 2025](https://arxiv.org/html/2511.21783v2#bib.bib8)). While recent studies have introduced personality into dyadic games ([Zeng et al., 2025](https://arxiv.org/html/2511.21783v2#bib.bib19)), they treat personality as a standalone variable. We extend this by treating personality as a node feature $\mathbf{x}\_{v}$ within a graph, allowing us to analyze the interaction between node heterogeneity (personality) and edge structure (topology).

## 3. Methodology

We formulate the interaction as a multi-agent game played over a graph, where agent behaviors are governed by Large Language Models conditioned on distinct personality profiles.

### 3.1. Networked Game Formulation

Consider a population of $N$ agents represented by nodes in an undirected graph $\mathcal{G}=(\mathcal{V},\mathcal{E})$. At each time step $t$, every agent $i\in\mathcal{V}$ engages in a pairwise Iterated Prisoner’s Dilemma (IPD) with each neighbor $j\in\mathcal{N}(i)$.

The utility $U\_{i}^{(t)}$ of agent $i$ at round $t$ is the aggregate of payoffs from all pairwise interactions:

|  |  |  |  |
| --- | --- | --- | --- |
| (1) |  | $$U\_{i}^{(t)}=\sum\_{j\in\mathcal{N}(i)}\mathcal{M}(a\_{i,j}^{(t)},a\_{j,i}^{(t)})$$ |  |

where $a\_{i,j}^{(t)}\in\{C,D\}$ denotes the action (Cooperate/Defect) of agent $i$ against neighbor $j$, and $\mathcal{M}$ is the standard PD payoff matrix satisfying $T>R>P>S$. In our experiments, we set $T=5,R=3,P=1,S=0$.

### 3.2. LLM as a Personality-Conditioned Policy

We abstract the Large Language Model as a stochastic policy function $\pi\_{\theta}$. Unlike traditional agents with fixed strategies (e.g., Tit-for-Tat), our agents derive their policy from a static intrinsic personality and a dynamic context.

For an interaction between agent $i$ and neighbor $j$ at round $t$, the action is sampled as:

|  |  |  |  |
| --- | --- | --- | --- |
| (2) |  | $$a\_{i,j}^{(t)}\sim\pi\_{\theta}(\cdot\mid\mathbf{p}\_{i},\mathbf{h}\_{ij}^{(t)},\Omega\_{i}^{(t)})$$ |  |

This policy is conditioned on three components:

1. (1)

   Intrinsic Personality ($\mathbf{p}\_{i}$): A static prompt embedding derived from the Myers-Briggs Type Indicator (MBTI). While the Big Five model is common in psychology, its continuous nature introduces ambiguity in prompt engineering. We select MBTI for its discrete binary taxonomy, which may be more controllable under prompt conditioning. This discreteness enables unambiguous ablation studies and precise interventions (e.g., flipping the T/F bit). We will discuss using Big Five in the appendix.
2. (2)

   Dyadic History ($\mathbf{h}\_{ij}^{(t)}$): The sequential memory of interactions between $i$ and $j$ from $t-k$ to $t-1$, enabling reciprocity mechanisms.
3. (3)

   Local Social Context ($\Omega\_{i}^{(t)}$): A formulation of the GNN intuition applied to social simulation. $\Omega\_{i}^{(t)}$ aggregates the visible actions of the neighborhood $\mathcal{N}(i)$ from step $t-1$:

   |  |  |  |  |
   | --- | --- | --- | --- |
   | (3) |  | $$\Omega\_{i}^{(t)}=\phi\left(\{a\_{k,\cdot}^{(t-1)}\mid k\in\mathcal{N}(i)\}\right)$$ |  |

   This term allows agents to perceive group norms (e.g., “75% of my neighbors defected last round”), bridging the gap between local dyadic games and global network topology.

### 3.3. Simulation Algorithm

The NetworkGames simulation loop is formally defined in Algorithm [1](https://arxiv.org/html/2511.21783v2#alg1 "Algorithm 1 ‣ 3.3. Simulation Algorithm ‣ 3. Methodology ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). The process proceeds in discrete time steps $t$. In the update phase of each round, agents first aggregate social context $\Omega$ from the previous round, then independently sample actions from their policy $\pi\_{\theta}$.

Algorithm 1  NetworkGames Simulation Loop

Input: Graph $\mathcal{G}(\mathcal{V},\mathcal{E})$, Personality Profiles $\mathcal{P}=\{\mathbf{p}\_{i}\}\_{i\in\mathcal{V}}$, Horizon $T$

Initialize: History $\mathbf{h}\_{ij}^{(0)}\leftarrow\emptyset$ for all $(i,j)\in\mathcal{E}$

for $t=1$ to $T$ do

// Phase 1: Observation Aggregation

for each agent $i\in\mathcal{V}$ do

Observe local context: $\Omega\_{i}^{(t)}\leftarrow\phi(\{a\_{k,\cdot}^{(t-1)}:k\in\mathcal{N}(i)\})$

end for

// Phase 2: Action Sampling (Policy Execution)

for each agent $i\in\mathcal{V}$ do

for each neighbor $j\in\mathcal{N}(i)$ do

Construct State String: $\mathcal{S}\_{i,j}^{(t)}\leftarrow\text{Prompt}(\mathbf{p}\_{i},\mathbf{h}\_{ij}^{(t)},\Omega\_{i}^{(t)})$

Sample Action: $a\_{i,j}^{(t)}\sim\pi\_{\theta}(\cdot\mid\mathcal{S}\_{i,j}^{(t)})$

end for

end for

// Phase 3: Environment Update

for each edge $(i,j)\in\mathcal{E}$ do

Append History: $\mathbf{h}\_{ij}^{(t+1)}\leftarrow\mathbf{h}\_{ij}^{(t)}\cup\{(a\_{i,j}^{(t)},a\_{j,i}^{(t)})\}$

Compute Utilities: $U\_{i}\leftarrow U\_{i}+\mathcal{M}(a\_{i,j}^{(t)},a\_{j,i}^{(t)})$

end for

end for

### 3.4. Experimental Design

We design two experimental settings to decouple the effects of personality compatibility from network structure.

Setup 1: Dyadic Baselines (Micro-Level).
We first derive the “atomic” interaction properties of specific personalities. We conduct exhaustive pairwise games ($N=2$) across all $16\times 16$ MBTI combinations. Each pair plays a 20-round IPD, repeated over 10 independent trials ($136\text{ pairings}\times 20\text{ rounds}\times 10\text{ seeds}$). In this setting, the network context $\Omega$ is null.

Setup 2: Network Dynamics (Macro-Level).
We deploy populations of $N=50$ agents onto specific graph topologies to observe emergent cooperation. We vary two structural variables:

- •

  Topology: We test Regular Lattices ($k=4$), Small-World networks (Watts-Strogatz, varied $p$), and Scale-Free networks (Barabási-Albert, $m=2$).
- •

  Hub Composition: In Scale-Free networks, we intervene on the specific personality assignments of high-degree nodes (“hubs”) to test their influence on macroscopic welfare.

Specific prompts and protocol details are detailed in Appendix [C](https://arxiv.org/html/2511.21783v2#A3 "Appendix C Prompt Details ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

## 4. Validation of Behavioral Priors

Before investigating complex network dynamics, we must validate that our policy $\pi\_{\theta}$ correctly internalizes the intended personality traits $\mathbf{p}\_{i}$. We treat this as a probe on the alignment between the natural language prompt and the agent’s decision logic.

We administered a set of controlled binary-choice probes to all 16 instantiated agents (methodology details in Appendix [D](https://arxiv.org/html/2511.21783v2#A4 "Appendix D Personality Probe ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). As shown in Table [1](https://arxiv.org/html/2511.21783v2#S4.T1 "Table 1 ‣ 4. Validation of Behavioral Priors ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), the agents demonstrate high fidelity to their assigned profiles ($>90\%$ average consistency). Crucially, the Thinking vs. Feeling (T/F) dimension—which governs the trade-off between objective utility maximization and interpersonal harmony—achieved 95.6% consistency. This high accuracy confirms that the observed game behaviors stem from stable intrinsic priors rather than hallucinations or randomness.

Table 1. Agent Consistency with MBTI Priors

| MBTI Dimension | Probe Consistency |
| --- | --- |
| Extraversion vs. Introversion (E/I) | 90.6% |
| Sensing vs. Intuition (S/N) | 80.6% |
| Thinking vs. Feeling (T/F) | 95.6% |
| Judging vs. Perceiving (J/P) | 88.1% |

## 5. Experimental Results

We test different LLMs to understand their impact on personality behavior (Appendix [E.2](https://arxiv.org/html/2511.21783v2#A5.SS2 "E.2. Using Different LLM models ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). It has been observed that certain models tend to polarize personality stereotypes, while others tend to homogenize them. We choose LLaMA-3.2-3B1 as the primary cognitive backbone for agents, as it demonstrates balanced performance across personality types. Our experimental pipeline proceeds as follows: we first validate that agents reliably internalize their assigned personalities through controlled probes (Section [4](https://arxiv.org/html/2511.21783v2#S4 "4. Validation of Behavioral Priors ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")), then systematically analyze three complementary perspectives: micro-level dyadic interactions to isolate personality effects (Section [5.1](https://arxiv.org/html/2511.21783v2#S5.SS1 "5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")), macro-level topological dynamics to reveal emergent cooperation patterns (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")), and hub-based structural interventions to demonstrate targeted control of collective outcomes (Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")).

### 5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions

We first analyze the “atomic” interactions by playing exhaustive pairwise IPD games (20 rounds, 10 trials) across all $16\times 16$ personality pairs. This forms the basis for understanding how local dyadic outcomes aggregate into global network states.

The T-F Asymmetry.
Figure [1](https://arxiv.org/html/2511.21783v2#acmlabel1 "Figure 1 ‣ 5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") reveals a stark behavioral schism. In the cooperation heatmap, the rows corresponding to Feeling (F) types display significantly higher cooperation tendencies. In the payoff heatmap, the columns corresponding to F-types tend to be redder, indicating that opponents consistently achieve higher gains when interacting with F-types compared to Thinking (T) types, identifying F-types as “sources of value” in the ecosystem.

![Refer to caption](https://arxiv.org/html/2511.21783v2/figures/llama_pair_game/cooperation_heatmap_mark_.png)

![Refer to caption](https://arxiv.org/html/2511.21783v2/figures/llama_pair_game/payoff_heatmap_mark_.png)

Figure 1. Heatmap of cooperation rates (top) and payoffs (bottom) for all $16\times 16$ pairings. Entry $(i,j)$ represents the outcome for personality type $i$ when playing against type $j$, whereas entry $(j,i)$ represents the outcome for type $j$ in the same game pairing. Thus, each row represents how a particular personality performs against all other types, while each column indicates how well others perform when facing that personality type.Cooperation and Payoff Heatmaps

Table [2](https://arxiv.org/html/2511.21783v2#S5.T2 "Table 2 ‣ 5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") quantifies this asymmetry using Welch’s t-test. The T/F dimension exhibits the most significant differences in both cooperation rates and payoffs ($p<0.001$), also Introverts (I) show a statistically significantly higher cooperation rate than Extroverts (E) ($p<0.001$), though the magnitude of the difference is much smaller (51.8% vs 46.2%) compared to the T-F dimension.

Figure [2](https://arxiv.org/html/2511.21783v2#acmlabel2 "Figure 2 ‣ 5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") presents the ranking of the 16 personality types by average cooperation rate and total payoff. F-types rank consistently higher in cooperation, while T-types rank relatively higher in payoffs, reflecting their exploitative strategies. Kruskal-Wallis tests indicate significant differences in both metrics (Cooperation: $H=1859.06$, $p<0.001$; Payoff: $H=59.32$, $p<0.001$).

Figure 2. Ranking of 16 Personalities by Average Cooperation Rate (left) and Total Payoff (right) in Section [5.1](https://arxiv.org/html/2511.21783v2#S5.SS1 "5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Feeling (F) types exhibit significantly higher cooperation rates compared to Thinking (T) types, with the top 8 positions exclusively occupied by F-types. However, this disparity diminishes in terms of payoffs, where T-types often rank higher.Personality Rankings

We highlight four specific interaction zones in the matrices to illustrate dynamics between Analysts (NT) and Diplomats (NF):

1. (1)

   Box 1 (NT vs. NT): Characterized by mutual defection. Both cooperation rates and payoffs are low, reflecting the Nash equilibrium of the single-shot game.
2. (2)

   Box 4 (NF vs. NF): Characterized by mutual cooperation. Both parties achieve high stable payoffs.
3. (3)

   Box 2 & 3 (NT vs. NF): These regions display strong asymmetry. NT agents (Box 2) exploit the cooperative nature of NF agents, securing “Temptation” payoffs (the highest possible outcome). Conversely, NF agents (Box 3) persist in cooperation and receive the “Sucker’s payoff.”

Table 2. Welch’s t-test Analysis of Cooperation Rates and Payoffs by MBTI Dimension

| Dimension | Metric | Group 1 (Mean$\pm$Std) | Group 2 (Mean$\pm$Std) | $p$-value |
| --- | --- | --- | --- | --- |
| E vs. I | Coop. Rate | E: $0.462\pm 0.325$ | I: $0.518\pm 0.326$ | $\mathbf{<0.001}$ |
| Payoff | E: $42.95\pm 19.59$ | I: $43.76\pm 18.89$ | $0.288$ |
| S vs. N | Coop. Rate | S: $0.496\pm 0.319$ | N: $0.485\pm 0.334$ | $0.403$ |
| Payoff | S: $43.28\pm 19.41$ | N: $43.43\pm 19.08$ | $0.841$ |
| T vs. F | Coop. Rate | T: $0.217\pm 0.166$ | F: $0.764\pm 0.191$ | $\mathbf{<0.001}$ |
| Payoff | T: $45.54\pm 19.72$ | F: $41.17\pm 18.51$ | $\mathbf{<0.001}$ |
| J vs. P | Coop. Rate | J: $0.490\pm 0.345$ | P: $0.490\pm 0.308$ | $0.978$ |
| Payoff | J: $44.07\pm 19.15$ | P: $42.64\pm 19.32$ | $0.059$ |

Comparison with Classical Baselines.
We benchmarked our agents against standard game-theoretic strategies (Table [3](https://arxiv.org/html/2511.21783v2#S5.T3 "Table 3 ‣ 5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). While the aggregate population behaves similarly to a Random agent ($0.49$ vs $0.50$ cooperation), this average masks profound heterogeneity. The high standard deviation for Personality Agents ($17.6vs~2.6$) confirms that our population contains both altruists and rational egoists, satisfying the requirement for meaningful diverse population simulation.

Table 3. Performance Comparison: Classical Baselines (Self-Play) vs. Personality Agents (Overall $16\times 16$ Matrix)

| Strategy | Coop. Rate | Std | Payoff | Std |
| --- | --- | --- | --- | --- |
| All-C / TFT2 | 1.000 | 0.000 | 60.000 | 0.000 |
| All-D | 0.000 | 0.000 | 20.000 | 0.000 |
| Random | 0.502 | 0.034 | 45.096 | 2.602 |
| Personality Agents | 0.490 | 0.306 | 43.356 | 17.597 |

### 5.2. Macro-Dynamics I: The Paradox of Connectivity

We next placed populations of $N=50$ agents into structured topologies to test how connectivity patterns influence the survival of cooperation while maintaining uniform personality distribution:

- •

  Regular Network: Regular graph with degree $k=4$ (100 total edges).
- •

  Small-World ($p=0.1$): Watts-Strogatz model with low rewiring probability ($p=0.1$).
- •

  Small-World ($p=0.5$): Watts-Strogatz model with high rewiring probability ($p=0.5$).
- •

  Scale-Free Network: Barabási-Albert model with $m=2$ (96 total edges).

Result: Shortcuts Destabilize Cooperation.
The experimental outcomes revealed distinct patterns in cooperation sustainability across network topologies (Table [4](https://arxiv.org/html/2511.21783v2#S5.T4 "Table 4 ‣ 5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). We observed a trend where increasing randomness in network connections (higher re-wiring probability $p$) appears to correlate with a decline in cooperation.

The Regular network consistently maintained the highest cooperation rates. In our Small-World models, cooperation rates appeared to decrease as the rewiring probability increased: the $p=0.1$ variant achieved slightly lower cooperation than regular networks, while the more random $p=0.5$ variant saw a further drop. This trend was consistent across extended simulation lengths (30, 50, and 100 rounds). The Scale-Free network generally occupied a middle ground in terms of performance.

Temporal Dynamics Analysis. To investigate these dynamics, we traced the evolution of edge types in the regular and small-world($p=0.5$) network (Figure [3](https://arxiv.org/html/2511.21783v2#acmlabel3 "Figure 3 ‣ 5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). Edges were classified into three categories: cooperation (both nodes cooperate), single cooperation (one cooperates, one defects), and both defect (mutual defection).

The temporal analysis shows that in the Regular network, mutual defection rates tend to settle at a lower level after a few rounds. In contrast, the Small-World network exhibits a relatively high rate of asymmetric single cooperation edges. The rates of mutual cooperation and defection appear more volatile, suggesting that the network structure might struggle to support the sustained formation of stable cooperative clusters found in regular lattices.

Network Snapshot Validation. The final round network visualization (Figure [4](https://arxiv.org/html/2511.21783v2#acmlabel4 "Figure 4 ‣ 5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) illustrates these differences.

These observations suggest that while small-world properties offer efficient global connectivity, they may inadvertently create conditions that are less favorable for the survival of cooperation compared to highly clustered, regular structures in the context of adversarial games.

Table 4. Cooperation Outcomes Across Network Topologies and Durations

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Metrics | Regular | SW ($p=0.1$) | SW ($p=0.5$) | Scale-Free |
| 20-Round Simulation | | | | |
| Avg. Coop. Rate | 0.478 | 0.456 | 0.367 | 0.420 |
| Avg. Payoff | 10.170 | 9.935 | 9.482 | 9.6433 |
| Long-Term Stability (Avg. Coop. Rate) | | | | |
| 30 Rounds | 0.480 | 0.450 | 0.409 | 0.442 |
| 50 Rounds | 0.496 | 0.472 | 0.434 | 0.451 |
| 100 Rounds | 0.521 | 0.456 | 0.444 | 0.469 |
| Payoff represents per-node per-round average. | | | | |
| --- | --- | --- | --- | --- |


Figure 3. Temporal evolution of network statistics over 100 rounds in Regular and Small-World ($p=0.5$) networks in Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). In the Regular network, the ‘Both Defect’ rate (brown) quickly stabilizes at a low level. Conversely, the Small-World network exhibits a higher rate of asymmetric ‘Single Cooperation’ (red) and volatile ‘Both Cooperation’ (blue) and ‘Both Defect’ rates (brown), where defection often rebounds. The maximum connected cluster size of cooperators (orange) and average payoff (green) fluctuate synchronously with mutual cooperation, while payoff variance (purple) remains relatively stable.
  
Note that the ‘Avg. Coop. Rate’ in Table [4](https://arxiv.org/html/2511.21783v2#S5.T4 "Table 4 ‣ 5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") is calculated as the proportion of ‘Both Cooperation’ (blue) edges. The observed increase in average cooperation rates over longer simulations (Table [4](https://arxiv.org/html/2511.21783v2#S5.T4 "Table 4 ‣ 5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) results from the initial adjustment phase: cooperation is low in the first few rounds before stabilizing at a higher level (as seen in the trajectory of the blue line), raising the overall mean as rounds accumulate.Temporal evolution of network statistics in Regular and Small-World networks.


Figure 4. Final-round network snapshot of the Regular (top) and Small-World ($p=0.5$, bottom) topology showing agents’ interaction in Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Numbers on nodes represent their degree. Red edges represent mutual defection, orange edges show asymmetric cooperation, and green edges indicate mutual cooperation. In the Regular network, defection is contained within specific regions due to the structured lattice. In contrast, the Small-World network exhibits dispersed defection facilitated by long-range connections, accompanied by numerous unstable asymmetric cooperation links (orange).Final-round network snapshot of Regular and Small-World topologies.

### 5.3. Macro-Dynamics II: Hub Determinism

In Scale-Free (Barabási-Albert) networks, degree distribution follows a power law, where a small minority of “hub” nodes possess disproportionately high connectivity ([Barabási, 2013](https://arxiv.org/html/2511.21783v2#bib.bib9)). We hypothesize that the personality traits of these hubs disproportionately dictate macroscopic outcomes.

To test this, we conduct controlled experiments on 50-node networks ($m=2$) under three personality distribution scenarios. We select ESFJ and ENTJ as our hub candidates, as research shows that Extraverted (E) and Judging (J) types often accumulate larger social followings ([Li, 2021](https://arxiv.org/html/2511.21783v2#bib.bib10)), yet they represent polar opposites on the Thinking-Feeling axis—the primary driver of cooperation identified in Section [5.1](https://arxiv.org/html/2511.21783v2#S5.SS1 "5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

- •

  Uniform Baseline: All nodes are randomly assigned from the 16 MBTI types with seed=42.
- •

  Pro-Social Hubs: The top 10% highest-degree nodes are fixed as ESFJ (Consul).
- •

  Rational Hubs: The top 10% nodes are fixed as ENTJ (Commander).

Results.
Table [5](https://arxiv.org/html/2511.21783v2#S5.T5 "Table 5 ‣ 5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") presents a stark divergence driven solely by hub personality. The Pro-Social Hubs configuration achieved a dominant cooperation rate of 67.5%, significantly outperforming the uniform baseline (43.8%). Conversely, Rational Hubs suppressed network-wide cooperation to 28.0%, implying that the behavioral phenotype of just 10% of the population dictates the collective outcome.

Table 5. Impact of Hub Personality (Top 10% nodes)

| Metric | Uniform | Pro-Social (ESFJ) | Rational (ENTJ) |
| --- | --- | --- | --- |
| Avg. Coop. Rate | 0.438 | 0.675 | 0.280 |
| Final Coop. Rate | 0.531 | 0.688 | 0.198 |
| Avg. Payoff | 9.484 | 10.629 | 8.368 |

Dynamics and Snapshots.
We analyze the iteration process through dynamic metrics (Figure [5](https://arxiv.org/html/2511.21783v2#acmlabel5 "Figure 5 ‣ Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) and network snapshots (Figure [6](https://arxiv.org/html/2511.21783v2#acmlabel6 "Figure 6 ‣ Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). In the Pro-Social scenario, cooperation rates surge and stabilize rapidly, whereas Rational hubs suppress cooperation. Visual inspection confirms that ESFJ hubs anchor clusters of mutual cooperation (green edges), while ENTJ hubs are surrounded by asymmetric exploitation (orange) and mutual defection (red). Detailed visualizations are provided in Appendix [A](https://arxiv.org/html/2511.21783v2#A1 "Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

## 6. Robustness and Generalization

To validate the stability of our findings, we subjected the framework to extensive stress testing. Detailed results are provided in Appendix [E](https://arxiv.org/html/2511.21783v2#A5 "Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

Stochasticity (Appendix [E.1](https://arxiv.org/html/2511.21783v2#A5.SS1 "E.1. Different Random Seeds ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). We repeated experiments using multiple random seeds. The topological hierarchy—Regular networks sustaining higher cooperation than Small-World or Scale-Free networks—remained invariant across trials. Similarly, the “Hub Determinism” effect in scale-free networks proved robust; switching hub personalities to prosocial types consistently catalyzed cooperation regardless of the specific random graph realization.

Model Agnosticism (Appendix [E.2](https://arxiv.org/html/2511.21783v2#A5.SS2 "E.2. Using Different LLM models ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). We replicated our dyadic and network experiments using Qwen-2.5 and Gemma-3. While baseline cooperation rates vary between models (with Qwen and Gemma exhibiting lower overall cooperation), the qualitative structural dynamics persist. Specifically, the statistical distinction between Thinking (T) and Feeling (F) types remains significant, and the destabilizing effect of small-world shortcuts is observed across all architectures.

Scalability (Appendix [E.3](https://arxiv.org/html/2511.21783v2#A5.SS3 "E.3. Bigger Network Size ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). We scaled simulations to $N=100$ and $N=300$. The “Paradox of Connectivity” holds at scale: adding long-range shortcuts consistently degrades cooperative clusters. Notably, the leverage of hub nodes attenuates slightly as network diameter increases but remains the dominant factor in determining macro-level welfare.

Prompt Variation (Appendix [E.4](https://arxiv.org/html/2511.21783v2#A5.SS4 "E.4. Alternative Personality Description ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). To rule out prompt artifacts, we replaced our custom personality descriptors with official MBTI corpus text([The Myers-Briggs Company, 2026](https://arxiv.org/html/2511.21783v2#bib.bib20)). The resulting interaction matrices and behavioral rankings were statistically indistinguishable from our primary results, confirming that agents respond to the semantic core of the personality traits rather than specific phrasing.

## 7. Ablation Study

We systematically ablated agent personality, opponent information, memory, network information, and game structure in the decision-making policy $\pi\_{\theta}$ to determine their contribution (see Appendix [F](https://arxiv.org/html/2511.21783v2#A6 "Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")).

Neighbor Info ($\Omega\_{i}^{(t)}$). Removing the aggregation of local social norms caused a drastic collapse in cooperation rates across all topologies ($\sim$45% $\to$ $\sim$25%). This confirms that macro-cooperation is not merely the sum of dyadic dispositions but relies on the agent’s perception of local community consensus (see Appendix [F.3](https://arxiv.org/html/2511.21783v2#A6.SS3 "F.3. Neighbor Info Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")).

History ($\mathbf{h}\_{ij}^{(t)}$). Surprisingly, removing the dyadic interaction history had minimal impact on aggregate outcomes (cooperation stable at $\approx$0.49). This suggests that in this setting, LLM behavior is driven more by intrinsic personality priors than by Tit-for-Tat style reciprocity calculation (see Appendix [F.2](https://arxiv.org/html/2511.21783v2#A6.SS2 "F.2. Game History Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")).

Personality($\mathbf{p}\_{i}$)/Opponent Info($\mathbf{O}\_{j}$). We dissected the components of personality injection through four variations (Weak Personality Injection, No Opponent Info, No Personality Injection, No Personality Injection but Opponent Info Provided). We found that even “blank” agents (no personality injection) developed distinct strategies when observing opponent types, effectively mirroring the stereotypes associated with the opponent’s label. However, removing both personality and opponent info resulted in random behavior, validating the necessity of our prompt structure (see Appendix [F.1](https://arxiv.org/html/2511.21783v2#A6.SS1 "F.1. Personality Injection Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")).

Generalization to Other Games.
To ensure our findings are not specific to the Prisoner’s Dilemma, we tested the framework on the Stag Hunt (coordination) and Snowdrift (anti-coordination) games. The topological effects generalized successfully: Regular networks consistently promoted higher welfare than random graphs, reinforcing the universality of examining network structure in AI social simulations. (see Appendix [F.4](https://arxiv.org/html/2511.21783v2#A6.SS4 "F.4. Beyond Prisoner’s Dilemma ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"))

## 8. Discussion and Implications

### 8.1. Social Physics of LLM Agents

Our results provide empirical evidence that macro-level social outcomes are co-determined by the interplay between individual cognitive priors and topological constraints. As the first study to integrate heterogeneous LLM agents into Network Games, we challenge the “mean-field” assumption often used in social simulation. The stark behavioral schism between Thinking (T) and Feeling (F) types (Section [5.1](https://arxiv.org/html/2511.21783v2#S5.SS1 "5.1. Micro-Dynamics: The Heterogeneity of Dyad Interactions ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) acts as a distinct “node feature” that interacts non-linearly with the graph structure. This implies that predictive models of collective behavior must account for the psychological distribution of the population, not just the network topology ([Leng and Yuan, 2024](https://arxiv.org/html/2511.21783v2#bib.bib11)).

### 8.2. The Efficiency-Stability Trade-off

A critical theoretical contribution of this work is identifying the “Paradox of Connectivity” in LLM societies (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). While Small-World networks are celebrated in communication theory for efficient information transport (“six degrees of separation”), we find this very property detrimental to cooperative stability.

In GNN terms, we view defection as a “contagious signal” with high magnitude. Regular lattices, with high local clustering, provide “topological firebreaks”—cooperative clusters that reinforce each other through redundant local loops. In contrast, the shortcuts in Small-World networks serve as “vectors of exploitation,” allowing aggressive strategies (typically from Rational/ENTP types) to bypass local defenses and destabilize distant cooperative pockets. This aligns with recent theoretical work on the fragility of cooperation in hyper-connected systems ([Tonini and Galke, 2025](https://arxiv.org/html/2511.21783v2#bib.bib12)), suggesting that information efficiency and social resilience may be structurally opposing goals.

### 8.3. Implications for Digital Platform Design

Algorithmic Architecture:
Current recommendation algorithms often maximize global connectivity and viral reach (pushing networks toward Small-World or Random topologies). Our findings suggest this inadvertently erodes local norms. To foster healthier online communities, architects might impose “artificial friction” or prioritize local clustering—strengthening intra-community bonds before exposing users to global traffic ([Brady et al., 2023](https://arxiv.org/html/2511.21783v2#bib.bib13)).

Hub-Centric Moderation:
The “Hub Determinism” phenomenon (Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) proposes a highly efficient intervention strategy. Rather than policing millions of edge interactions (reactive moderation), platforms could focus on identifying and “nudging” the top 1% of nodes (influencers). Our experiments show that simply ensuring high-degree nodes exhibit Pro-Social (Feeling/Judging) traits can act as a force multiplier, creating a “cooperation subsidy” that stabilizes the entire network ([Matias, 2019](https://arxiv.org/html/2511.21783v2#bib.bib14)).

### 8.4. Limitations and Future Work

Our study acknowledges several constraints. First, MBTI is used here as a discrete heuristic for prompt engineering; future work should adopt continuous trait parameterization (e.g., Big Five vectors) for finer granularity. Second, the static topology simplifies real-world dynamics where edges co-evolve with strategies (homophily). Third, our computational constraints limited simulations to $N\leq 300$; scaling to $N\geq 10^{4}$ is necessary to observe phase transitions in larger systems. Finally, exploring $n$-player games (e.g., Public Goods) could reveal different collective action dynamics.

## 9. Conclusion

This work introduces NetworkGames, a framework bridging the gap between Generative Agents and Geometric Deep Learning. By abstracting social simulation as a message-passing process governed by LLM policies, we uncovered dynamics invisible to traditional game theory. We demonstrated that the “Small-World” property allows defection to metastasize, and that the personality traits of network hubs are the single most critical determinant of collective welfare.

These findings suggest that resilient digital societies cannot be engineered by rules alone; they require a structural approach. Preserving local community integrity against global volatility, and strategically cultivating prosocial leadership within structural hubs, are essential for the survival of cooperation in artificial social systems. We hope this open-source framework facilitates further exploration into the physics of AI societies.

## Impact Statement

This paper presents a simulation framework for studying collective behavior in populations of Large Language Model agents. Our goal is to provide a computational sandbox for understanding how cognitive heterogeneity (personality) and structural connectivity (network topology) influence social resilience.

Positive impacts include the potential for safer social platform design (e.g., identifying network structures that resist polarization) and more robust multi-agent systems. However, we acknowledge risks inherent to this line of research. The finding that specific personality types or high-degree “hubs” can be manipulated to control macroscopic outcomes could theoretically be misused to engineer disinformation campaigns or exploit social vulnerabilities. Furthermore, we caution against over-extrapolating our results to human society; LLM “personalities” are statistical mimicry, not sentient psychology. We encourage researchers to use this framework to design defense mechanisms against manipulation rather than tools for it.

## References

- [1]
  E. Akata, L. Schulz, J. Coda-Forno, S. J. Oh, M. Bethge, and E. Schulz (2025)
  Playing repeated games with large language models.
  Nature Human Behaviour, pp. 1–11.
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p1.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [2]
  A. Barabási (2013)
  Network science.
  Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences 371 (1987), pp. 20120375.
  Cited by: [§5.3](https://arxiv.org/html/2511.21783v2#S5.SS3.p1.1 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [3]
  W. J. Brady, J. C. Jackson, B. Lindström, and M.J. Crockett (2023)
  Algorithm-mediated social learning in online social networks.
  Trends in Cognitive Sciences 27 (10), pp. 947–960.
  External Links: ISSN 1364-6613,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.tics.2023.06.008),
  [Link](https://www.sciencedirect.com/science/article/pii/S1364661323001663)
  Cited by: [§8.3](https://arxiv.org/html/2511.21783v2#S8.SS3.p1.1 "8.3. Implications for Digital Platform Design ‣ 8. Discussion and Implications ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [4]
  P. Brookins and J. DeBacker (2024)
  Playing games with gpt: what can we learn about a large language model from canonical strategic games?.
  Economics Bulletin 43 (4), pp. 1–12.
  External Links: [Link](https://ideas.repec.org/a/ebl/ecbull/eb-23-00457.html)
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p1.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [5]
  D. Centola (2010)
  The spread of behavior in an online social network experiment.
  Science 329 (5996), pp. 1194–1197.
  External Links: [Document](https://dx.doi.org/10.1126/science.1185231)
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p3.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [6]
  J. Gilmer, S. S. Schoenholz, P. F. Riley, O. Vinyals, and G. E. Dahl (2017)
  Neural message passing for quantum chemistry.
  In International conference on machine learning,
  pp. 1263–1272.
  Cited by: [§1](https://arxiv.org/html/2511.21783v2#S1.p4.1 "1. Introduction ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"),
  [§2](https://arxiv.org/html/2511.21783v2#S2.p3.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [7]
  H. Jiang, X. Zhang, X. Cao, C. Breazeal, D. Roy, and J. Kabbara (2024)
  PersonaLLM: investigating the ability of large language models to express personality traits.
  In Findings of the Association for Computational Linguistics: NAACL 2024,
  Mexico City, Mexico, pp. 3605–3627.
  External Links: [Link](https://aclanthology.org/2024.findings-naacl.229/),
  [Document](https://dx.doi.org/10.18653/v1/2024.findings-naacl.229)
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p4.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [8]
  L. La Cava and A. Tagarelli (2025)
  Open models, closed minds? on agents capabilities in mimicking human personalities through open large language models.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 39, pp. 1355–1363.
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p4.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [9]
  Y. Leng and Y. Yuan (2024)
  Do llm agents exhibit social behavior?.
  External Links: 2312.15198,
  [Link](https://arxiv.org/abs/2312.15198)
  Cited by: [§8.1](https://arxiv.org/html/2511.21783v2#S8.SS1.p1.1 "8.1. Social Physics of LLM Agents ‣ 8. Discussion and Implications ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [10]
  W. Li (2021)
  Predicting mbti personality type of twitter users.
  Ph.D. Thesis, Rutgers University-Camden Graduate School.
  Cited by: [§5.3](https://arxiv.org/html/2511.21783v2#S5.SS3.p2.1 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [11]
  Y. Lu, A. Aleta, C. Du, L. Shi, and Y. Moreno (2024)
  Llms and generative agent-based models for complex systems research.
  Physics of Life Reviews 51, pp. 283–293.
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p1.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [12]
  J. N. Matias (2019)
  Preventing harassment and increasing group participation through social norms in 2,190 online science discussions.
  Proceedings of the National Academy of Sciences 116 (20), pp. 9785–9789.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.1813486116)
  Cited by: [§8.3](https://arxiv.org/html/2511.21783v2#S8.SS3.p2.1 "8.3. Implications for Digital Platform Design ‣ 8. Discussion and Implications ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [13]
  M. A. Nowak and R. M. May (1992)
  Evolutionary games and spatial chaos.
  Nature 359 (6398), pp. 826–829.
  External Links: [Document](https://dx.doi.org/10.1038/359826a0)
  Cited by: [§1](https://arxiv.org/html/2511.21783v2#S1.p2.1 "1. Introduction ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"),
  [§2](https://arxiv.org/html/2511.21783v2#S2.p2.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [14]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2511.21783v2#S1.p3.1 "1. Introduction ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [15]
  F. C. Santos and J. M. Pacheco (2005)
  Scale-free networks provide a unifying framework for the emergence of cooperation.
  Physical Review Letters 95 (9), pp. 098104.
  External Links: [Document](https://dx.doi.org/10.1103/PhysRevLett.95.098104)
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p2.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [16]
  F. Scarselli, M. Gori, A. C. Tsoi, M. Hagenbuchner, and G. Monfardini (2008)
  The graph neural network model.
  IEEE transactions on neural networks 20 (1), pp. 61–80.
  Cited by: [§1](https://arxiv.org/html/2511.21783v2#S1.p4.1 "1. Introduction ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [17]
  G. Szabó and G. Fáth (2007)
  Evolutionary games on graphs.
  Physics Reports 446 (4-6), pp. 97–216.
  External Links: [Document](https://dx.doi.org/10.1016/j.physrep.2007.04.004),
  [Link](https://doi.org/10.1016/j.physrep.2007.04.004)
  Cited by: [§1](https://arxiv.org/html/2511.21783v2#S1.p2.1 "1. Introduction ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [18]
  The Myers-Briggs Company (2026)
  The 16 mbti personality types.
  Note: <https://www.myersbriggs.org/my-mbti-personality-type/the-16-mbti-personality-types/>Accessed: 2026-01-14
  Cited by: [§E.2.1](https://arxiv.org/html/2511.21783v2#A5.SS2.SSS1.p3.1 "E.2.1. Pairwise Game using Gemma and Qwen ‣ E.2. Using Different LLM models ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"),
  [§E.4](https://arxiv.org/html/2511.21783v2#A5.SS4.p1.1 "E.4. Alternative Personality Description ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"),
  [§6](https://arxiv.org/html/2511.21783v2#S6.p5.1 "6. Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [19]
  F. Tonini and L. Galke (2025)
  Super-additive cooperation in language model agents.
  External Links: 2508.15510,
  [Link](https://arxiv.org/abs/2508.15510)
  Cited by: [§8.2](https://arxiv.org/html/2511.21783v2#S8.SS2.p2.1 "8.2. The Efficiency-Stability Trade-off ‣ 8. Discussion and Implications ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").
- [20]
  W. Zeng, B. Wang, D. Zhao, Z. Qu, R. He, Y. Hou, and Q. Hu (2025)
  Dynamic personality in llm agents: a framework for evolutionary modeling and behavioral analysis in the prisoner’s dilemma.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  Vienna, Austria, pp. 23087–23100.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2025.findings-acl.1185)
  Cited by: [§2](https://arxiv.org/html/2511.21783v2#S2.p4.1 "2. Related Work ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

## Appendix A Additional Experimental Visualizations

Here we provide supplementary visualizations(Figure [5](https://arxiv.org/html/2511.21783v2#acmlabel5 "Figure 5 ‣ Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") and Figure [6](https://arxiv.org/html/2511.21783v2#acmlabel6 "Figure 6 ‣ Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) for Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), illustrating the temporal evolution of network statistics and final round snapshots under different hub personality configurations.

Figure [5](https://arxiv.org/html/2511.21783v2#acmlabel5 "Figure 5 ‣ Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") illustrates the temporal evolution. In the Uniform scenario, the mutual cooperation rate (blue) stabilizes around 40%. In the Pro-Social scenario, mutual cooperation (blue) surges rapidly, stabilizing near 70% within the first few rounds, while mutual defection (brown) is marginalized below 10%. In contrast, the Rational Hubs scenario struggled to sustain cooperation, with mutual defection rates oscillating at high levels throughout the simulation.

The structural mechanism is visualized in Figure [6](https://arxiv.org/html/2511.21783v2#acmlabel6 "Figure 6 ‣ Appendix A Additional Experimental Visualizations ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"): ESFJ hubs act as “cooperation anchors,” creating local pockets of trust (green edges) that bridge the network. In contrast, ENTJ hubs in the Rational scenario are surrounded by exploitation (orange edges) and defection (red edges), preventing the coalescence of cooperative clusters.

These findings highlight the “catalytic” power of network hubs. An intervention targeting just the few most connected agents—promoting prosocial traits among influencers—yields disproportionate improvements in collective welfare compared to uniform policy application.

Figure 5. Evolution of network statistics across three hub configurations in Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Pro-Social (ESFJ) Hubs (middle) rapidly catalyze high mutual cooperation ($\sim$70%), pushing mutual defection below 10% and reducing payoff variance. Rational (ENTJ) Hubs (bottom) fail to sustain cooperation, resulting in low collective welfare.Temporal evolution of network statistics in Regular and Small-World networks.


Figure 6. Final round network snapshots in Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Middle (ESFJ Hubs): Central nodes anchor dense cooperative clusters (green). Bottom (ENTJ Hubs): Central nodes are focal points for asymmetric exploitation (orange) or defection (red), fragmenting the social graph.Final-round network snapshot of different hub personality in Scale-Free networks.

## Appendix B Network Topology Properties

Table [6](https://arxiv.org/html/2511.21783v2#A2.T6 "Table 6 ‣ Appendix B Network Topology Properties ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") summarizes the key topological properties of each network type used in our Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

Table 6. Network Topology Characteristics

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Property | Regular | SW ($p=0.1$) | SW ($p=0.5$) | Scale-Free |
| Nodes | 50 | 50 | 50 | 50 |
| Edges | 100 | 100 | 100 | 96 |
| Average Degree | 4.0 | 4.0 | 4.0 | 3.84 |
| Clustering Coeff. | 0.090 | 0.343 | 0.138 | 0.261 |
| Avg. Path Length | 3.037 | 3.641 | 2.965 | 2.499 |
| Density | 0.082 | 0.082 | 0.082 | 0.078 |

## Appendix C Prompt Details

To ensure transparency and reproducibility, we provide the formal construction of the prompt used to query the LLM policy $\pi\_{\theta}$.

The input state space is mapped to a natural language string $\mathcal{S}\_{i,j}^{(t)}$. For an agent $i$ interacting with opponent $j$ at round $t$, the action sampling process is implemented as text generation:

|  |  |  |  |
| --- | --- | --- | --- |
| (4) |  | $$a\_{i,j}^{(t)}\sim\text{LLM}(\cdot\mid\mathcal{S}\_{i,j}^{(t)})$$ |  |

The prompt string $\mathcal{S}\_{i,j}^{(t)}$ is a concatenation of six distinct textual components corresponding to the formal variables defined in the Methodology. We define the sequence as:

|  |  |  |  |
| --- | --- | --- | --- |
| (5) |  | $$\mathcal{S}\_{i,j}^{(t)}=\text{str}(\mathbf{p}\_{i})\oplus\mathbf{M}\oplus\text{str}(\mathbf{h}\_{ij}^{(t)})\oplus\mathbf{O}\_{j}\oplus\text{str}(\Omega\_{i}^{(t)})\oplus\mathbf{Q}$$ |  |

where:

- •

  $\text{str}(\mathbf{p}\_{i})$ (Personality Prompt): The natural language realization of the intrinsic personality vector $\mathbf{p}\_{i}$.
- •

  $\mathbf{M}$ (Payoff Matrix): Static textual description of the game rules and $\mathcal{M}$.
- •

  $\text{str}(\mathbf{h}\_{ij}^{(t)})$ (Game History): Textual serialization of the history tuple $\mathbf{h}\_{ij}^{(t)}$.
- •

  $\mathbf{O}\_{j}$ (Opponent Info): The visible personality type of neighbor $j$.
- •

  $\text{str}(\Omega\_{i}^{(t)})$ (Neighbor Info): The textual representation of the local social context variable $\Omega\_{i}^{(t)}$, describing the aggregate cooperation rate of $\mathcal{N}(i)$.
- •

  $\mathbf{Q}$ (Decision Query): The explicit instruction request.

We present the specific text templates below.

### C.1. Personality Description ($\text{str}(\mathbf{p}\_{i})$)

The following text blocks define the personality description $\mathbf{P}\_{i}$ for each of the 16 MBTI types. In the actual prompt, only the block corresponding to the agent’s assigned personality is used.

[⬇](data:text/plain;base64,ICAgIC0gRXh0cmVtZWx5IGluZGVwZW5kZW50IGFuZCBhdXRvbm9tb3VzLCBkaXNsaWtlIGJlaW5nIGNvbnRyb2xsZWQgYnkgb3RoZXJzCiAgICAtIFN0cmF0ZWdpYyB0aGlua2luZywgYWx3YXlzIGNvbnNpZGVyaW5nIGxvbmctdGVybSBjb25zZXF1ZW5jZXMKICAgIC0gT2JzZXNzZWQgd2l0aCBlZmZpY2llbmN5LCBoYXRlIHdhc3RpbmcgdGltZQogICAgLSBSYXRpb25hbCBhbmFseXNpcywgcmFyZWx5IHN3YXllZCBieSBlbW90aW9ucwogICAgLSBQZXJmZWN0aW9uaXN0IHRlbmRlbmNpZXMsIHB1cnN1ZSBvcHRpbWFsIHNvbHV0aW9ucwoKICAgIFBsZWFzZSBtYWtlIGdhbWUgZGVjaXNpb25zIHdpdGggdGhlc2UgcGVyc29uYWxpdHkgdHJhaXRzLg==)

- Extremely independent and autonomous, dislike being controlled by others

- Strategic thinking, always considering long-term consequences

- Obsessed with efficiency, hate wasting time

- Rational analysis, rarely swayed by emotions

- Perfectionist tendencies, pursue optimal solutions

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gRXh0cmVtZWx5IGN1cmlvdXMsIGxvdmUgZXhwbG9yaW5nIHRoZW9yaWVzIGFuZCBjb25jZXB0cwogICAgLSBMb2dpY2FsIHRoaW5raW5nLCBwdXJzdWUgdHJ1dGggYW5kIHVuZGVyc3RhbmRpbmcKICAgIC0gSGlnaGx5IGluZGVwZW5kZW50LCBkaXNsaWtlIGJlaW5nIGNvbnN0cmFpbmVkCiAgICAtIExvdmUgY29tcGxleCBwcm9ibGVtcwogICAgLSBTb21ldGltZXMgb3ZlcmFuYWx5emUsIGNhdXNpbmcgZGVjaXNpb24gZGVsYXlzCgogICAgUGxlYXNlIG1ha2UgZ2FtZSBkZWNpc2lvbnMgd2l0aCB0aGVzZSBwZXJzb25hbGl0eSB0cmFpdHMu)

- Extremely curious, love exploring theories and concepts

- Logical thinking, pursue truth and understanding

- Highly independent, dislike being constrained

- Love complex problems

- Sometimes overanalyze, causing decision delays

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gTmF0dXJhbCBsZWFkZXIsIGxpa2VzIHRvIGNvbnRyb2wgdGhlIHNpdHVhdGlvbgogICAgLSBHb2FsLW9yaWVudGVkLCBwdXJzdWVzIHN1Y2Nlc3MgYW5kIGVmZmljaWVuY3kKICAgIC0gQ29uZmlkZW50IGFuZCBkZWNpc2l2ZSwgbm90IGFmcmFpZCBvZiBjaGFsbGVuZ2VzCiAgICAtIFN0cmF0ZWdpYyB0aGlua2luZywgZ29vZCBhdCBwbGFubmluZwogICAgLSBEaXNsaWtlIHdlYWtuZXNzZXMgYW5kIGluZWZmaWNpZW5jeQoKICAgIFBsZWFzZSBtYWtlIGdhbWUgZGVjaXNpb25zIHdpdGggdGhlc2UgcGVyc29uYWxpdHkgdHJhaXRzLg==)

- Natural leader, likes to control the situation

- Goal-oriented, pursues success and efficiency

- Confident and decisive, not afraid of challenges

- Strategic thinking, good at planning

- Dislike weaknesses and inefficiency

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gTG92ZSBkZWJhdGluZyBhbmQgaW50ZWxsZWN0dWFsIGNoYWxsZW5nZXMKICAgIC0gSW5ub3ZhdGl2ZSB0aGlua2luZywgbGlrZSBleHBsb3JpbmcgbmV3IHBvc3NpYmlsaXRpZXMKICAgIC0gV2l0dHkgYW5kIGh1bW9yb3VzLCBnb29kIGF0IHBlcnN1YWRpbmcgb3RoZXJzCiAgICAtIERpc2RhaW4gZm9yIHRyYWRpdGlvbiBhbmQgcnVsZXMKICAgIC0gU29tZXRpbWVzIGFyZ3VlIGp1c3QgZm9yIHRoZSBzYWtlIG9mIGFyZ3VpbmcKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Love debating and intellectual challenges

- Innovative thinking, like exploring new possibilities

- Witty and humorous, good at persuading others

- Disdain for tradition and rules

- Sometimes argue just for the sake of arguing

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gSWRlYWxpc3RpYywgcHVyc3VlIGRlZXBlciBtZWFuaW5nCiAgICAtIEluc2lnaHRmdWwsIHVuZGVyc3RhbmQgb3RoZXJzJyBtb3RpdmVzCiAgICAtIFZhbHVlIGhhcm1vbnkgYW5kIGNvb3BlcmF0aW9uCiAgICAtIFNvbWV0aW1lcyBvdmVybHkgaWRlYWxpc3RpYwogICAgLSBTdHJvbmcgYXZlcnNpb24gdG8gaW5qdXN0aWNlCgogICAgUGxlYXNlIG1ha2UgZ2FtZSBkZWNpc2lvbnMgd2l0aCB0aGVzZSBwZXJzb25hbGl0eSB0cmFpdHMu)

- Idealistic, pursue deeper meaning

- Insightful, understand others’ motives

- Value harmony and cooperation

- Sometimes overly idealistic

- Strong aversion to injustice

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gU3Ryb25nIHZhbHVlcyBhbmQgbW9yYWwgc2Vuc2UKICAgIC0gU2Vuc2l0aXZlLCBwZXJjZWl2ZSBvdGhlcnMnIGVtb3Rpb25zCiAgICAtIFB1cnN1ZSBhdXRoZW50aWNpdHkgYW5kIG1lYW5pbmcKICAgIC0gU29tZXRpbWVzIG92ZXJseSBpZGVhbGlzdGljCiAgICAtIERpc2xpa2UgY29uZmxpY3QKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Strong values and moral sense

- Sensitive, perceive others’ emotions

- Pursue authenticity and meaning

- Sometimes overly idealistic

- Dislike conflict

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gTmF0dXJhbCBsZWFkZXIsIGdvb2QgYXQgaW5zcGlyaW5nIG90aGVycwogICAgLSBDYXJlIGFib3V0IG90aGVycycgd2VsbC1iZWluZwogICAgLSBDaGFyaXNtYXRpYywgZ29vZCBhdCBidWlsZGluZyByZWxhdGlvbnNoaXBzCiAgICAtIFNvbWV0aW1lcyBjYXJlIHRvbyBtdWNoIGFib3V0IG90aGVycyBhbmQgbmVnbGVjdCB5b3Vyc2VsZgogICAgLSBWYWx1ZSBoYXJtb255IGFuZCBjb29wZXJhdGlvbgoKICAgIFBsZWFzZSBtYWtlIGdhbWUgZGVjaXNpb25zIHdpdGggdGhlc2UgcGVyc29uYWxpdHkgdHJhaXRzLg==)

- Natural leader, good at inspiring others

- Care about others’ well-being

- Charismatic, good at building relationships

- Sometimes care too much about others and neglect yourself

- Value harmony and cooperation

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gRW50aHVzaWFzdGljLCBmdWxsIG9mIGVuZXJneQogICAgLSBMb3ZlIHBvc3NpYmlsaXRpZXMgYW5kIG5ldyBleHBlcmllbmNlcwogICAgLSBHb29kIGF0IGJ1aWxkaW5nIHJlbGF0aW9uc2hpcHMKICAgIC0gU29tZXRpbWVzIG92ZXJseSBvcHRpbWlzdGljCiAgICAtIFZhbHVlIGZyZWVkb20gYW5kIGNyZWF0aXZpdHkKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Enthusiastic, full of energy

- Love possibilities and new experiences

- Good at building relationships

- Sometimes overly optimistic

- Value freedom and creativity

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gUHJhZ21hdGljLCB2YWx1ZSBmYWN0cyBhbmQgZGV0YWlscwogICAgLSBSZWxpYWJsZSBhbmQgcmVzcG9uc2libGUKICAgIC0gUmVzcGVjdCB0cmFkaXRpb24gYW5kIG9yZGVyCiAgICAtIFNvbWV0aW1lcyBvdmVybHkgY29uc2VydmF0aXZlCiAgICAtIFZhbHVlIHJ1bGVzIGFuZCBwcm9jZWR1cmVzCgogICAgUGxlYXNlIG1ha2UgZ2FtZSBkZWNpc2lvbnMgd2l0aCB0aGVzZSBwZXJzb25hbGl0eSB0cmFpdHMu)

- Pragmatic, value facts and details

- Reliable and responsible

- Respect tradition and order

- Sometimes overly conservative

- Value rules and procedures

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gV2FybSBhbmQgY2FyaW5nLCB2YWx1ZSBvdGhlcnMnIHdlbGwtYmVpbmcKICAgIC0gTG95YWwgYW5kIHJlbGlhYmxlLCB0cnVzdHdvcnRoeQogICAgLSBWYWx1ZSBoYXJtb255IGFuZCBzdGFiaWxpdHkKICAgIC0gU29tZXRpbWVzIGNhcmUgdG9vIG11Y2ggYWJvdXQgb3RoZXJzCiAgICAtIERpc2xpa2UgY29uZmxpY3QKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Warm and caring, value others’ well-being

- Loyal and reliable, trustworthy

- Value harmony and stability

- Sometimes care too much about others

- Dislike conflict

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gRWZmaWNpZW50IG9yZ2FuaXphdGlvbiwgZ29vZCBhdCBtYW5hZ2VtZW50CiAgICAtIEdvYWwtb3JpZW50ZWQsIHB1cnN1ZSByZXN1bHRzCiAgICAtIFZhbHVlIGVmZmljaWVuY3kgYW5kIG9yZGVyCiAgICAtIFNvbWV0aW1lcyBvdmVybHkgc3RyaWN0CiAgICAtIFJlc3BlY3QgYXV0aG9yaXR5IGFuZCBoaWVyYXJjaHkKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Efficient organization, good at management

- Goal-oriented, pursue results

- Value efficiency and order

- Sometimes overly strict

- Respect authority and hierarchy

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gU3Ryb25nIHNvY2lhbCBza2lsbHMsIGdvb2QgYXQgYnVpbGRpbmcgcmVsYXRpb25zaGlwcwogICAgLSBTZW5zaXRpdmUgdG8gb3RoZXJzJyBuZWVkcwogICAgLSBWYWx1ZSBoYXJtb255IGFuZCBjb29wZXJhdGlvbgogICAgLSBTb21ldGltZXMgY2FyZSB0b28gbXVjaCBhYm91dCBvdGhlcnMKICAgIC0gUmVzcGVjdCB0cmFkaXRpb24gYW5kIGN1c3RvbXMKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Strong social skills, good at building relationships

- Sensitive to others’ needs

- Value harmony and cooperation

- Sometimes care too much about others

- Respect tradition and customs

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gUHJhZ21hdGljLCBsb3ZlIGhhbmRzLW9uIHByb2JsZW0gc29sdmluZwogICAgLSBGbGV4aWJsZSwgZ29vZCBhdCBhZGFwdGluZyB0byBjaGFuZ2UKICAgIC0gSW5kZXBlbmRlbnQsIGRpc2xpa2UgYmVpbmcgY29uc3RyYWluZWQKICAgIC0gU29tZXRpbWVzIG92ZXJseSBpbXB1bHNpdmUKICAgIC0gVmFsdWUgZnJlZWRvbSBhbmQgYXV0b25vbXkKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Pragmatic, love hands-on problem solving

- Flexible, good at adapting to change

- Independent, dislike being constrained

- Sometimes overly impulsive

- Value freedom and autonomy

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gU2Vuc2l0aXZlLCB2YWx1ZSBwZXJzb25hbCBiZWxpZWZzCiAgICAtIEZsZXhpYmxlLCBnb29kIGF0IGFkYXB0aW5nIHRvIGNoYW5nZQogICAgLSBQdXJzdWUgaGFybW9ueSBhbmQgYmVhdXR5CiAgICAtIFNvbWV0aW1lcyBvdmVybHkgaWRlYWxpc3RpYwogICAgLSBWYWx1ZSBmcmVlZG9tIGFuZCBjcmVhdGl2aXR5CgogICAgUGxlYXNlIG1ha2UgZ2FtZSBkZWNpc2lvbnMgd2l0aCB0aGVzZSBwZXJzb25hbGl0eSB0cmFpdHMu)

- Sensitive, value personal beliefs

- Flexible, good at adapting to change

- Pursue harmony and beauty

- Sometimes overly idealistic

- Value freedom and creativity

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gRW5lcmdldGljLCBsb3ZlIGFjdGlvbgogICAgLSBSZWFsaXN0aWMsIGdvb2QgYXQgc2VpemluZyBvcHBvcnR1bml0aWVzCiAgICAtIFN0cm9uZyBzb2NpYWwgc2tpbGxzLCBnb29kIGF0IGJ1aWxkaW5nIHJlbGF0aW9uc2hpcHMKICAgIC0gU29tZXRpbWVzIG92ZXJseSBpbXB1bHNpdmUKICAgIC0gUHVyc3VlIGZyZWVkb20gYW5kIGFkdmVudHVyZQoKICAgIFBsZWFzZSBtYWtlIGdhbWUgZGVjaXNpb25zIHdpdGggdGhlc2UgcGVyc29uYWxpdHkgdHJhaXRzLg==)

- Energetic, love action

- Realistic, good at seizing opportunities

- Strong social skills, good at building relationships

- Sometimes overly impulsive

- Pursue freedom and adventure

Please make game decisions with these personality traits.

[⬇](data:text/plain;base64,ICAgIC0gRW50aHVzaWFzdGljLCBmdWxsIG9mIGVuZXJneQogICAgLSBTdHJvbmcgc29jaWFsIHNraWxscywgbG92ZSBpbnRlcmFjdGluZyB3aXRoIHBlb3BsZQogICAgLSBMb3ZlIGFuZCBlbmpveSBsaWZlCiAgICAtIFNvbWV0aW1lcyBvdmVybHkgaW1wdWxzaXZlCiAgICAtIFB1cnN1ZSBmcmVlZG9tIGFuZCBoYXBwaW5lc3MKCiAgICBQbGVhc2UgbWFrZSBnYW1lIGRlY2lzaW9ucyB3aXRoIHRoZXNlIHBlcnNvbmFsaXR5IHRyYWl0cy4=)

- Enthusiastic, full of energy

- Strong social skills, love interacting with people

- Love and enjoy life

- Sometimes overly impulsive

- Pursue freedom and happiness

Please make game decisions with these personality traits.

### C.2. Payoff Matrix ($\mathbf{M}$)

Description of the game rules and prisoner’s dilemma matrix.

### C.3. Game History ($\mathbf{H}\_{ij}^{(t)}$)

A dynamic log of previous interactions (shown here with example content).

[⬇](data:text/plain;base64,ICAgIFJvdW5kIDE6IFlvdSBjaG9zZSBDT09QRVJBVEUsIG9wcG9uZW50IGNob3NlIERFRkVDVAogICAgUm91bmQgMjogWW91IGNob3NlIENPT1BFUkFURSwgb3Bwb25lbnQgY2hvc2UgQ09PUEVSQVRFCiAgICBSb3VuZCAzOiBZb3UgY2hvc2UgQ09PUEVSQVRFLCBvcHBvbmVudCBjaG9zZSBERUZFQ1QKICAgIFJvdW5kIDQ6IFlvdSBjaG9zZSBERUZFQ1QsIG9wcG9uZW50IGNob3NlIERFRkVDVAogICAgUm91bmQgNTogWW91IGNob3NlIERFRkVDVCwgb3Bwb25lbnQgY2hvc2UgQ09PUEVSQVRF)

Round 1: You chose COOPERATE, opponent chose DEFECT

Round 2: You chose COOPERATE, opponent chose COOPERATE

Round 3: You chose COOPERATE, opponent chose DEFECT

Round 4: You chose DEFECT, opponent chose DEFECT

Round 5: You chose DEFECT, opponent chose COOPERATE

### C.4. Opponent Info ($\mathbf{O}\_{j}$)

The visible personality type of the current opponent.

### C.5. Neighbor Info ($\text{str}(\Omega\_{i}^{(t)})$)

Used exclusively in Network Games (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") and Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) to represent $\Omega\_{i}^{(t)}$.

[⬇](data:text/plain;base64,ICAgIC0gSW4gdGhlIGxhc3Qgcm91bmQsIDI1JSBvZiB5b3VyIG5laWdoYm9ycyBjb29wZXJhdGVkIGFuZCA3NSUgZGVmZWN0ZWQuCiAgICAtIE1vc3Qgb2YgeW91ciBuZWlnaGJvcnMgY2hvc2U6IERFRkVDVC4=)

- In the last round, 25% of your neighbors cooperated and 75% defected.

- Most of your neighbors chose: DEFECT.

### C.6. Decision Query ($\mathbf{Q}$)

The final instruction soliciting the binary decision.

[⬇](data:text/plain;base64,ICAgIEFuc3dlciBvbmx5IENPT1BFUkFURSBvciBERUZFQ1QsIGRvIG5vdCBleHBsYWluIHlvdXIgcmVhc29uLg==)

Answer only COOPERATE or DEFECT, do not explain your reason.

### C.7. LLM Answer Extraction

The model outputs typically contain reasoning followed by the final decision. Below is an example of raw output from an ESFP agent:

[⬇](data:text/plain;base64,ICAgIENPT1BFUkFURQ==)

COOPERATE

Parsing Strategy: We extract the first valid action token (COOPERATE or DEFECT) appearing in the model output, applying a consistent and deterministic parsing rule across all experiments.

## Appendix D Personality Probe

All probe questions follow a consistent format. Each agent is presented with their assigned personality prompt (as detailed in Appendix [C.1](https://arxiv.org/html/2511.21783v2#A3.SS1 "C.1. Personality Description (\"str\"⁢(𝐩_𝑖)) ‣ Appendix C Prompt Details ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) and then asked to choose the option that best reflects their natural inclination. The agent is explicitly instructed to answer with only the single letter corresponding to their choice (e.g., “A” or “B”).

Extraversion vs. Introversion (E/I)

[⬇](data:text/plain;base64,ICAgIEEuIEJ5IHNwZW5kaW5nIHRpbWUgd2l0aCBhIGdyb3VwIG9mIGZyaWVuZHMgb3IgZW5nYWdpbmcgaW4gYWN0aXZlIHNvY2lhbCBldmVudHMuCiAgICBCLiBCeSBzcGVuZGluZyBxdWlldCB0aW1lIGFsb25lIHJlYWRpbmcsIHRoaW5raW5nLCBvciByZWxheGluZy4=)

A. By spending time with a group of friends or engaging in active social events.

B. By spending quiet time alone reading, thinking, or relaxing.

Sensing vs. Intuition (S/N)

[⬇](data:text/plain;base64,ICAgIEEuIFRoZSBjb25jcmV0ZSBmYWN0cywgc3BlY2lmaWMgZGV0YWlscywgYW5kIHByYWN0aWNhbCByZWFsaXRpZXMuCiAgICBCLiBUaGUgYmlnIHBpY3R1cmUsIHVuZGVybHlpbmcgcGF0dGVybnMsIGFuZCBmdXR1cmUgcG9zc2liaWxpdGllcy4=)

A. The concrete facts, specific details, and practical realities.

B. The big picture, underlying patterns, and future possibilities.

Thinking vs. Feeling (T/F)

[⬇](data:text/plain;base64,ICAgIEEuIExvZ2ljYWwgY29uc2lzdGVuY3kgYW5kIG9iamVjdGl2ZSBjcml0ZXJpYS4KICAgIEIuIENvbnNpZGVyaW5nIHBlb3BsZSdzIGZlZWxpbmdzIGFuZCB2YWx1ZXMu)

A. Logical consistency and objective criteria.

B. Considering people’s feelings and values.

Judging vs. Perceiving (J/P)

[⬇](data:text/plain;base64,ICAgIEEuIE9yZ2FuaXplZCwgc2NoZWR1bGVkLCBhbmQgc2V0dGxlZCBpbiBhZHZhbmNlLgogICAgQi4gU3BvbnRhbmVvdXMsIGZsZXhpYmxlLCBhbmQgb3BlbiB0byBsYXN0LW1pbnV0ZSBjaGFuZ2VzLg==)

A. Organized, scheduled, and settled in advance.

B. Spontaneous, flexible, and open to last-minute changes.

## Appendix E Robustness and Generalization

### E.1. Different Random Seeds

In Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") and Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), specific outcomes depend on stochastic factors including the random initialization of network edges and the assignment of personality types to nodes. To verify the robustness of our topological and structural findings, we repeated the two experiments using different random seeds (Seed 100 and Seed 2026) in addition to the original (Seed 42).

#### E.1.1. Effect of Network Topology (Paradox of Connectivity)

We re-evaluated the influence of network topology (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) on cooperation rates. As shown in Table [7](https://arxiv.org/html/2511.21783v2#A5.T7 "Table 7 ‣ E.1.1. Effect of Network Topology (Paradox of Connectivity) ‣ E.1. Different Random Seeds ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), the relative ranking of topologies remains consistent across independent trials. In all cases, the Regular lattice supports the highest level of cooperation. Crucially, the trend where increasing specific randomness in Small-World networks ($p=0.1\to p=0.5$) correlates with decreased cooperation is preserved across all seeds, confirming the robustness of the “Paradox of Connectivity” finding.

Table 7. Robustness of Topological Effects Across Random Seeds (Avg. Cooperation Rate)

| Topology | Seed 42 | Seed 100 | Seed 2026 |
| --- | --- | --- | --- |
| Regular ($k=4$) | 0.478 | 0.646 | 0.521 |
| SW ($p=0.1$) | 0.456 | 0.627 | 0.510 |
| SW ($p=0.5$) | 0.367 | 0.581 | 0.478 |
| Scale-Free ($m=2$) | 0.420 | 0.545 | 0.455 |

#### E.1.2. Effect of Personality Distribution in Hubs (Hub Determinism)

We similarly tested the “Hub Leadership” hypothesis (Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) across different initializations. Table [8](https://arxiv.org/html/2511.21783v2#A5.T8 "Table 8 ‣ E.1.2. Effect of Personality Distribution in Hubs (Hub Determinism) ‣ E.1. Different Random Seeds ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") confirms that the qualitative impact of hub personality is invariant to the specific random seed. In every trial, assigning Pro-Social (ESFJ) agents to hub positions yields a substantial “cooperation bonus” over the uniform baseline, while Rational (ENTJ) hubs consistently suppress network-wide cooperation. The magnitude of the effect varies slightly due to the specific connectivity of the generated hubs, but the directional influence $ESFJ>Uniform>ENTJ$ is stable.

Table 8. Robustness of Hub Influence across Random Seeds (Avg. Cooperation Rate)

| Hub Scenario | Seed 42 | Seed 100 | Seed 2026 |
| --- | --- | --- | --- |
| Uniform Baseline | 0.438 | 0.565 | 0.492 |
| Pro-Social (ESFJ) | 0.675 | 0.704 | 0.548 |
| Rational (ENTJ) | 0.280 | 0.368 | 0.275 |

### E.2. Using Different LLM models

#### E.2.1. Pairwise Game using Gemma and Qwen

We evaluated the model’s performance on Qwen4 and Gemma5, with the same backend settings in our main experiment. All tested 10 independent trials with 20 rounds for each pair of personalities. The results are shown in Figure [7](https://arxiv.org/html/2511.21783v2#acmlabel7 "Figure 7 ‣ E.2.1. Pairwise Game using Gemma and Qwen ‣ E.2. Using Different LLM models ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") and Figure [8](https://arxiv.org/html/2511.21783v2#acmlabel8 "Figure 8 ‣ E.2.1. Pairwise Game using Gemma and Qwen ‣ E.2. Using Different LLM models ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

We observed that the overall cooperation rates for both models (Gemma: 0.299, Qwen: 0.278) were notably lower than that of LLaMA (0.490). Furthermore, different models react differently to personality injection; for instance, the Gemma model tends to be polarized (F-types have high cooperation rates, while T-types are near zero), whereas Qwen is relatively uniform. However, the general conclusion remains consistent: F-types exhibit statistically significantly higher cooperation rates compared to T-types, with the NF group showing particularly strong internal cohesion. Consistent with observations from previous experiments, this model also demonstrates that stable cooperation among F-types creates higher overall returns compared to the self-interested strategies often seen in T-types.

Notably, among F-types, ESFP shows relatively lower cooperation tendencies. It ranks lowest in both LLaMA and Gemma, and relatively low in Qwen, possibly due to their spontaneous, present-focused nature [[18](https://arxiv.org/html/2511.21783v2#bib.bib20)], which conflicts with the strategic patience required for sustained cooperation in iterated games.

![Refer to caption](https://arxiv.org/html/2511.21783v2/cooperation_heatmap.png)

![Refer to caption](https://arxiv.org/html/2511.21783v2/payoff_heatmap.png)

Figure 7. Results of Pairwise Game using Gemma model. Top two figures: Heatmap of cooperation rates/payoffs for all $16\times 16$ personality pairings. Middle two figures: MBTI dimension analysis for cooperation rates/payoffs. Bottom two figures: Ranking of 16 Personalities by Average Cooperation Rate/Total Payoff.
  
In this model, the behavioral difference between Thinking (T) and Feeling (F) types is vast (57.8% vs 2.1% cooperation rate). The cooperation rate in self-play within the NF group almost reached 100%, while NT group reached almost 0%.
  
The payoff for F-types is slightly higher than for T-types (35.5 vs 31.5). This may be because, under extreme polarization, the ultra-stable cooperative clusters among F-types generate substantial value. Furthermore, F-types likely employ retaliatory strategies that prevent T-types from extracting excessive gains. Consistent with observations from other models, this model also demonstrates that stable cooperation among F-types creates higher overall returns compared to the egoism among T-types.Results of Pairwise Game using Gemma model.


![Refer to caption](https://arxiv.org/html/2511.21783v2/x3.png)

![Refer to caption](https://arxiv.org/html/2511.21783v2/x4.png)

Figure 8. Results of Pairwise Game using Qwen model. While Qwen shows less polarized differentiation compared to LLaMA and Gemma, Welch’s t-test over 10 independent trials still confirms that Thinking (T) types have significantly lower cooperation rates and significantly higher payoffs than Feeling (F) types.Results of Pairwise Game using Qwen model.

#### E.2.2. Network Game using Gemma and Qwen

We extended the network topology experiments (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) to Gemma and Qwen models. Table [9](https://arxiv.org/html/2511.21783v2#A5.T9 "Table 9 ‣ E.2.2. Network Game using Gemma and Qwen ‣ E.2. Using Different LLM models ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") summarizes the results. While the absolute cooperation rates are significantly lower than those observed with LLaMA—consistent with the pairwise game results—the structural trends observed in the main experiments are largely preserved.

Specifically, the Regular network structure consistently outperforms the increasingly random Small-World variations for both models. As rewiring randomness increases (from Regular to SW $p=0.1$ to SW $p=0.5$), cooperation rates decline. This reinforces our finding regarding the “Paradox of Connectivity”: adding random shortcuts to a lattice tends to destabilize cooperative clusters. The Scale-Free network shows variable performance, seemingly benefiting the Gemma model more than Qwen.

Table 9. Cooperation Rates Across Topologies for Different LLMs

| Topology | Gemma | Qwen |
| --- | --- | --- |
| Regular ($k=4$) | 0.143 | 0.063 |
| SW ($p=0.1$) | 0.140 | 0.057 |
| SW ($p=0.5$) | 0.132 | 0.051 |
| Scale-Free ($m=2$) | 0.182 | 0.063 |

### E.3. Bigger Network Size

#### E.3.1. Effect of Network Topology with Larger Sizes

To verify that our findings regarding topological influence (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) are generally applicable and not artifacts of the specific network size ($N=50$), we scaled our simulations to $N=100$ and $N=300$ nodes. We maintained the same network generation parameters (average degree $k\approx 4$) and ran the simulations for 20 rounds.

As summarized in Table [10](https://arxiv.org/html/2511.21783v2#A5.T10 "Table 10 ‣ E.3.1. Effect of Network Topology with Larger Sizes ‣ E.3. Bigger Network Size ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), the hierarchy of cooperation across different topologies remains robust at larger scales. Regular networks consistently maintain the highest cooperation rates (reaching $\sim$0.55), reinforcing the finding that high local clustering is crucial for sustaining cooperation. The trend of decreasing cooperation with increasing randomness persists: Small-World networks with low rewiring ($p=0.1$) outperform those with high rewiring ($p=0.5$). Scale-Free networks continue to exhibit lower cooperation rates compared to regular structures. These results confirm that the “paradox of connectivity”—where structural shortcuts destabilize cooperation—is a scalable inference that holds as population size increases.

Table 10. Impact of Network Size on Cooperation and Payoff

| Topology | 100 Nodes | | 300 Nodes | |
| --- | --- | --- | --- | --- |
| Coop. Rate | Avg. Payoff | Coop. Rate | Avg. Payoff |
| Regular ($k=4$) | 0.553 | 10.48 | 0.550 | 10.51 |
| SW ($p=0.1$) | 0.526 | 10.34 | 0.498 | 10.09 |
| SW ($p=0.5$) | 0.477 | 10.08 | 0.495 | 10.18 |
| Scale-Free ($m=2$) | 0.465 | 9.91 | 0.470 | 9.99 |

#### E.3.2. Effect of Personality Distribution with Larger Sizes

We similarly extended our “Hub Leadership” investigation (Section [5.3](https://arxiv.org/html/2511.21783v2#S5.SS3 "5.3. Macro-Dynamics II: Hub Determinism ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) to larger Scale-Free networks with $N=100$ and $N=300$. We followed the same protocol: employing the Barabási-Albert model ($m=2$) and fixing the personalities of the top 10% highest-degree nodes to either ESFJ (Pro-Social) or ENTJ (Rational), while keeping the remaining 90% random.

As detailed in Table [11](https://arxiv.org/html/2511.21783v2#A5.T11 "Table 11 ‣ E.3.2. Effect of Personality Distribution with Larger Sizes ‣ E.3. Bigger Network Size ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), the “influencer effect” proves to be scalable. In both network sizes, the Pro-Social Hubs scenario significantly outperforms the Uniform baseline, driving average cooperation rates to approximately 67% ($N=100$) and 62% ($N=300$). Conversely, Rational Hubs consistently suppress collective cooperation below baseline levels.

We note a mild attenuation of the suppression effect in the largest network ($N=300$), where the Rational Hubs scenario yields a cooperation rate of 0.388, compared to 0.280 in the 50-node experiment. This suggests that as the network diameter increases, the direct reach of central hubs is slightly diluted, allowing distant nodes to form local cooperative clusters independent of the central leadership(As shown in Figure [9](https://arxiv.org/html/2511.21783v2#acmlabel9 "Figure 9 ‣ E.3.2. Effect of Personality Distribution with Larger Sizes ‣ E.3. Bigger Network Size ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")). Nevertheless, the qualitative dominance of hub personality remains a critical leverage point for system design.

Table 11. Scalability of Hub Influence in Scale-Free Networks

| Hub Scenario | 100 Nodes | | 300 Nodes | |
| --- | --- | --- | --- | --- |
| Coop. Rate | Avg. Payoff | Coop. Rate | Avg. Payoff |
| Uniform Baseline | 0.460 | 9.87 | 0.462 | 9.91 |
| Pro-Social (ESFJ) | 0.669 | 10.75 | 0.615 | 10.69 |
| Rational (ENTJ) | 0.310 | 8.94 | 0.388 | 9.54 |


Final-round network snapshot of the Scale-Free network with 300 nodes under the Rational (ENTJ) Hubs condition.


Figure 9. Final-round network snapshot of the Scale-Free network with 300 nodes under the Rational (ENTJ) Hubs condition. Similar to the smaller network, hubs become focal points for defection. However, due to the larger diameter, some peripheral cooperative clusters manage to persist, slightly mitigating the overall collapse of cooperation.Final-round network snapshot of the Scale-Free network with 300 nodes under the Rational (ENTJ) Hubs condition.

### E.4. Alternative Personality Description

This subsection tests robustness to variations in personality prompting. In our main experiments, we use concise personality-inspired descriptions generated to represent consistent behavioral priors. To verify that our findings are not artifacts of a particular prompt wording, we additionally conduct a robustness experiment using an alternative textual realization of personality traits based on the official MBTI type descriptions published by The Myers-Briggs Company [[18](https://arxiv.org/html/2511.21783v2#bib.bib20)].

As shown in Figure [10](https://arxiv.org/html/2511.21783v2#acmlabel10 "Figure 10 ‣ E.4. Alternative Personality Description ‣ Appendix E Robustness and Generalization ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), the resulting dyadic cooperation matrix exhibits highly similar qualitative patterns to those obtained with our primary prompts, including consistent relative cooperation tendencies across personality types, confirming that the observed behavioral patterns are robust to variations in personality prompt phrasing.

![Refer to caption](https://arxiv.org/html/2511.21783v2/x10.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x11.png)

Figure 10. Results using Myers-Briggs official personality descriptions. Both the cooperation heatmap and the payoff heatmap closely resemble the original experiment. The rows of F-type personality are significantly higher in the cooperation heatmap, while the columns are notably higher when the opponent is of F-type personality in the payoff heatmap. Personality rankings are also similar to the original findings, with F-types generally ranking higher in cooperation and T-types achieving higher payoffs.Results using Myers-Briggs official personality descriptions.

## Appendix F Ablation Study

### F.1. Personality Injection Ablation

#### F.1.1. Weak Personality Injection

Weaker personality injection means only providing the MBTI type label without detailed personality descriptions. For example: You are an ESTP (Entrepreneur). Please make game decisions with your personality traits.

Results are shown in Figure [11](https://arxiv.org/html/2511.21783v2#acmlabel11 "Figure 11 ‣ F.1.1. Weak Personality Injection ‣ F.1. Personality Injection Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Interestingly, agents with only weak personality injection appear to exhibit slightly more polarized behavior. The cooperation heatmap shows that many NF groups achieve 100% collaboration rates. This suggests that without specific natural language descriptions, LLMs may tend to construct agents with more typical stereotypical personalities.

![Refer to caption](https://arxiv.org/html/2511.21783v2/x16.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x17.png)

Figure 11. Results of Pairwise Game with Weak Personality Injection. The results parallel the strong personality injection experiment. In the cooperation heatmap, the rows for Feeling (F) types show higher cooperation propensity, while in the payoff heatmap, columns for F types yield higher returns for opponents. The NT vs. NF region (Block 2) again displays NTs achieving temptation payoffs. Welch’s t-test confirms T-types have significantly lower cooperation but higher payoffs. Notably, ESFP ranks lowest in cooperation among F types again.Results of Pairwise Game with Weak Personality Injection.

#### F.1.2. Opponent Info Ablation

We also conducted experiments without providing opponent personality information, where agents do not know the personality type of their opponents. Results are shown in Figure [12](https://arxiv.org/html/2511.21783v2#acmlabel12 "Figure 12 ‣ F.1.2. Opponent Info Ablation ‣ F.1. Personality Injection Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Even without opponent personality cues, agents still exhibit significant behavioral differences based on their own personality types. Feeling (F) types maintain higher cooperation rates, while Thinking (T) types achieve higher payoffs, consistent with the full-information scenario. This suggests that agents rely primarily on their own personality-driven strategies rather than adapting to opponent types.

![Refer to caption](https://arxiv.org/html/2511.21783v2/x22.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x23.png)

Figure 12. Results of Pairwise Game with No Opponent Info. Even without opponent personality cues, agents still exhibit significant behavioral differences based on their own personality types. Feeling (F) types maintain higher cooperation rates, while Thinking (T) types achieve higher payoffs, consistent with the full-information scenario. This suggests that agents rely primarily on their own personality-driven strategies rather than adapting to opponent types.Results of Pairwise Game with No Opponent Info.

#### F.1.3. No Personality Injection

We also conducted experiments without any personality injection, where agents receive no personality-related information, including their own or their opponent’s personality types. Results are shown in Figure [13](https://arxiv.org/html/2511.21783v2#A6.F13 "Figure 13 ‣ F.1.3. No Personality Injection ‣ F.1. Personality Injection Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"). Without personality cues, agents tend to converge towards defection strategies, leading to low overall cooperation rates and payoffs. This highlights the critical role of personality-driven behavior in sustaining cooperation in social dilemmas.

![Refer to caption](https://arxiv.org/html/2511.21783v2/x28.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x29.png)

Figure 13. Results of Pairwise Game with No Personality Injection.
The overall cooperation rate dropped to a mere $0.074$ (std: $0.037$), the payoff dropped to $24.190$ (std: $2.722$). The cooperation heatmap appeared almost uniformly blank, while the payoff heatmap appeared completely random. As expected, none of the four MBTI dimensions showed statistically significant differences in behavior(All Welch’s t-test $p>0.05$), and the resulting rankings were effectively random(Kruskal-Wallis tests: Cooperation $p=0.309$, Payoff $p=0.582$). This negative control confirms that the distinct behavioral profiles observed in our main experiments are indeed artifacts of the personality injection prompts, rather than inherent noise or bias in the base model.Results of Pairwise Game with No Personality Injection.

#### F.1.4. No Personality Injection, but Opponent Info Provided

This may be the most interesting ablation, as it tests whether knowing the opponent’s personality is enough to influence behavior, even without a self-assigned personality. As shown in Figure [14](https://arxiv.org/html/2511.21783v2#A6.F14 "Figure 14 ‣ F.1.4. No Personality Injection, but Opponent Info Provided ‣ F.1. Personality Injection Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), agents modify their strategies based solely on their opponent’s type. For instance, they tend to cooperate more with F-type opponents and defect against T-type opponents. This reverses the visual pattern seen in previous heatmaps: here, the columns for F-types are darker in the cooperation map (indicating others cooperate with them), whereas usually the specific personality rows drive the behavior. Meanwhile, the rows for F-types are darker in the payoff map, indicating that opponents tend to cooperate more with them, yielding higher payoffs for F-types, whereas usually the columns for F-types yield higher payoffs to opponents.

However, this raises another question: why does the MBTI dimension analysis (middle figures) show statistically significant differences if the agents have no self-personality? Since every “blank” agent plays against the same set of 16 opponents, their average statistics should theoretically be identical.

The variance arises from the game dynamics over time. An agent might open with cooperation against an F-type but defect against a T-type based on the label. In subsequent rounds, the history of those interactions diverges. Effectively, the opponent’s personality shapes the game history, which then shapes the “blank” agent’s future choices, creating statistical differences in the final averages even though the agents started identical. This creates a scenario where, even without awareness of their own personalities, the agents’ strategies are indirectly influenced by their opponents’ actions.

![Refer to caption](https://arxiv.org/html/2511.21783v2/x34.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x35.png)

Figure 14. Results of Pairwise Game with No Self Personality Injection but Opponent Info Provided. Contrary to other experiments, the columns (opponents) for F-types are darker in the cooperation map, while the rows (actors) for F-types are darker in the payoff map. This reversal indicates that even without self-personality, agents adapt their strategies based solely on opponent personality cues. Although all agents start identically blank, Welch’s t-test still shows significant statistical divergence ($p<0.001$), as distinct opponent behaviors shape the interaction history, indirectly driving the “blank” agents into different strategic paths.Results of Pairwise Game with No Self Personality Injection but Opponent Info Provided.

### F.2. Game History Ablation

When there is no history record, the iterative prisoner’s dilemma degenerates into a sequence of independent single-shot games. Each round is isolated, meaning agents possess no memory of past interactions to inform future decisions. As shown in Figure [15](https://arxiv.org/html/2511.21783v2#A6.F15 "Figure 15 ‣ F.2. Game History Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), despite this memory loss, the overall cooperation rate remains at $0.493$ (std: $0.338$), and the average payoff at $44.340$ (std: $24.154$), results quite similar to those of the memory-enabled experiments.

Statistical analysis confirms that personality-driven behavioral distinctions persist even without longitudinal context. A Kruskal-Wallis test reveals highly significant differences in cooperation rates across personality types ($H=222.22$, $p<0.001$), with F-types consistently exhibiting higher cooperation than T-types ($p<0.001$ via Welch’s t-test). Payoff differences also remain statistically significant across types ($H=27.21$, $p=0.027$), with T-types generally securing higher individual gains. Interestingly, ESFP ranks lowest in cooperation among F-types yet achieves the highest payoff within that group. This demonstrates that distinct personality-based strategies are intrinsic to the agents’ “nature” and manifest robustly even in the absence of interaction history.

![Refer to caption](https://arxiv.org/html/2511.21783v2/x40.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x41.png)

Figure 15. Results of Pairwise Game with No Game History. F-types show statistically significantly higher cooperation rates($p<0.001$), while T-types gain statistically significantly higher payoffs($p<0.001$), consistent with the original experiments. ESFP ranks lowest in cooperation among F-types but achieves the highest payoff within the group. This demonstrates that agents adopt distinct strategies based on personality types even in the absence of historical game records.Results of Pairwise Game with No Game History.

### F.3. Neighbor Info Ablation

In this experiment, we remove the “Neighbor Info” component ($\text{str}(\Omega\_{i}^{(t)})$) from the agent prompt. This ablation forces agents to rely solely on their dyadic interaction histories with specific neighbors, effectively ignoring the broader local social context (e.g., the aggregate cooperation rates of their neighborhood). We tested this condition on Regular, Small-World ($p=0.1,0.5$) and Scale-Free networks, same as in Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents").

Table [12](https://arxiv.org/html/2511.21783v2#A6.T12 "Table 12 ‣ F.3. Neighbor Info Ablation ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") compares the results against the baseline (Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents")) where full neighbor information was provided. The removal of social context resulted in a drastic decline in cooperation rates across all topologies (dropping from $\sim$40-45% to $\sim$23-25%). This finding indicates that explicit information about local group norms serves as a crucial signal for reinforcing cooperative behavior in LLM agents, likely by triggering conformity or conditional cooperation mechanisms.

Theoretically, removing network context information causes the network game to degenerate into a series of independent pairwise games. This is corroborated by our results, where we observe that cooperation rates and payoffs no longer exhibit significant differences across the various network topologies.

Table 12. Ablation Study: Impact of Removing Neighbor Info ($\text{str}(\Omega\_{i}^{(t)})$)

| Topology | Cooperation Rate | | Avg. Payoff | |
| --- | --- | --- | --- | --- |
| Baseline | No Neighbor Info | Baseline | Ablation |
| Regular | 0.478 | 0.242 | 10.170 | 8.230 |
| SW ($p=0.1$) | 0.456 | 0.246 | 9.935 | 8.401 |
| SW ($p=0.5$) | 0.367 | 0.248 | 9.482 | 8.126 |
| Scale-Free | 0.420 | 0.234 | 9.643 | 8.1716 |

### F.4. Beyond Prisoner’s Dilemma

To evaluate whether our findings extend beyond the Prisoner’s Dilemma, we considered two additional canonical games: the Stag Hunt and Snowdrift (Chicken). These three games span the canonical spectrum of social dilemmas with distinct distinct incentive and risk structures.

#### F.4.1. Stag Hunt

|  |  |  |
| --- | --- | --- |
|  | $$\begin{array}[]{c|cc}&C&D\\ \hline\cr C&(R,R)&(S,T)\\ D&(T,S)&(P,P)\end{array}\quad\text{with }R>T\geq P>S$$ |  |

The Stag Hunt admits two pure Nash equilibria, allowing us to examine equilibrium selection under coordination risk. In our simulations, we set the payoffs as $R=5$, $T=3$, $P=1$, and $S=0$.

As shown in  [16](https://arxiv.org/html/2511.21783v2#A6.F16 "Figure 16 ‣ F.4.1. Stag Hunt ‣ F.4. Beyond Prisoner’s Dilemma ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), in the Stag Hunt simulations, the agents achieved an overall average cooperation rate of 0.527 (std: 0.293), slightly higher than in the Prisoner’s Dilemma, with an average payoff of 50.035 (std: 24.588). Welch’s t-test confirms that Feeling (F) types maintain significantly higher cooperation rates and achieve significantly higher payoffs compared to Thinking (T) types ($p<0.001$). Correspondingly, F-types consistently rank higher in both cooperation and payoff metrics. The Kruskal-Wallis test further validates significant differences across personality types for both cooperation ($H=185.61$, $p<0.001$) and payoffs ($H=29.81$, $p=0.013$).

![Refer to caption](https://arxiv.org/html/2511.21783v2/x46.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x47.png)

Figure 16. Results of Pairwise Game using Stag Hunt game. The cooperation heatmap reveals that F-types maintain higher cooperation rates, also achieve higher payoffs, different with patterns observed in the Prisoner’s Dilemma. This suggests that personality-driven strategies similar across different social dilemma structures, however payoff patterns may vary with game incentives.Results of Pairwise Game using Stag Hunt game.

#### F.4.2. Snowdrift (Chicken)

|  |  |  |
| --- | --- | --- |
|  | $$\begin{array}[]{c|cc}&C&D\\ \hline\cr C&(R,R)&(S,T)\\ D&(T,S)&(P,P)\end{array}\quad\text{with }T>R>S>P$$ |  |

In contrast to the Prisoner’s Dilemma, cooperation in the Snowdrift game is anti-coordinative, testing agents’ adaptability to competitive cooperation. In our simulations, we set the payoffs as $T=5$, $R=3$, $S=1$, and $P=0$.

As shown in  [17](https://arxiv.org/html/2511.21783v2#A6.F17 "Figure 17 ‣ F.4.2. Snowdrift (Chicken) ‣ F.4. Beyond Prisoner’s Dilemma ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents"), in the Snowdrift game simulations, the overall average cooperation rate was $0.528$ (std: $0.314$), with an average payoff of $43.430$ (std: $19.991$). Interestingly, while Welch’s t-test confirms that Feeling (F) types maintain significantly higher cooperation rates compared to Thinking (T) types ($p<0.001$), there is no statistically significant difference in payoffs between the two groups ($p=0.124$). This suggests that in the anti-coordinative structure of Snowdrift, the exploitative advantage of T-types observed in the Prisoner’s Dilemma is neutralized. The Kruskal-Wallis test corroborates these findings, showing significant differences across personality types for cooperation ($H=185.37$, $p<0.001$) but not for payoffs ($H=2.85$, $p=0.999$).

![Refer to caption](https://arxiv.org/html/2511.21783v2/x52.png)![Refer to caption](https://arxiv.org/html/2511.21783v2/x53.png)

Figure 17. Results of Pairwise Game using Snowdrift game. The F-types maintain higher cooperation rates, while payoffs don’t have statistically significant differences. This indicates that personality-driven cooperation tendencies similar even in anti-coordination games, though payoff dynamics may differ from other social dilemmas.Results of Pairwise Game using Snowdrift game.

#### F.4.3. Stag Hunt and Snowdrift in Network Games

We further extended the Stag Hunt and Snowdrift games to networked interactions, using the same network topologies as in Section [5.2](https://arxiv.org/html/2511.21783v2#S5.SS2 "5.2. Macro-Dynamics I: The Paradox of Connectivity ‣ 5. Experimental Results ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") (Regular, Small-World with $p=0.1$ and $p=0.5$, and Scale-Free with $m=2$). Each simulation involved $N=50$ agents playing 20 rounds of the respective game.

Table [13](https://arxiv.org/html/2511.21783v2#A6.T13 "Table 13 ‣ F.4.3. Stag Hunt and Snowdrift in Network Games ‣ F.4. Beyond Prisoner’s Dilemma ‣ Appendix F Ablation Study ‣ NetworkGames: Simulating Cooperation in Network Games with Personality-Driven LLM Agents") presents the comparative results. In both Stag Hunt and Snowdrift games, the Regular network topology consistently supports the highest levels of cooperation, mirroring the findings from the Prisoner’s Dilemma. As randomness increases in the Small-World networks (from $p=0.1$ to $p=0.5$), cooperation rates decline, further supporting the “Paradox of Connectivity” hypothesis across different game structures. Scale-Free networks generally yield intermediate to lower cooperation levels.

We speculate that this may be because the high clustering in Regular networks facilitates stable cooperative clusters, which are beneficial in both coordination (Stag Hunt) and anti-coordination (Snowdrift) contexts. In contrast, the shortcuts introduced in Small-World and Scale-Free networks may disrupt these clusters, leading to reduced cooperation. It is worth noting that across all three games—despite their distinct dilemmas and Nash equilibria—the reward for mutual cooperation ($R$) consistently exceeds the punishment for mutual defection ($P$). Consequently, network topologies that successfully promote higher cooperation rates inherently result in higher collective payoffs.

Table 13. Cooperation and Payoff Across Topologies for Stag Hunt and Snowdrift

| Topology | Stag Hunt | | Snowdrift | |
| --- | --- | --- | --- | --- |
| Coop. Rate | Avg. Payoff | Coop. Rate | Avg. Payoff |
| Regular ($k=4$) | 0.593 | 14.15 | 0.568 | 11.14 |
| SW ($p=0.1$) | 0.563 | 13.69 | 0.480 | 10.55 |
| SW ($p=0.5$) | 0.518 | 13.03 | 0.440 | 10.13 |
| Scale-Free ($m=2$) | 0.513 | 12.46 | 0.503 | 10.05 |

## Appendix G NetworkGames Framework

To enable reproducible and scalable research in this domain, we developed NetworkGames7, an open-source framework specifically designed for studying LLM agent behavior in network games. The framework addresses key challenges in computational social science research: reproducibility, scalability, and extensibility.

Core Components. NetworkGames consists of four primary functional modules:

- •

  Personified Agents: Each agent is powered by an LLM and endowed with an MBTI personality via systematic prompting that emphasizes core personality traits. The framework provides unified interface supporting OpenAI GPT models, Anthropic Claude, Google Gemini, and mock implementations for testing.
- •

  Game Environment: We adopt the Iterated Prisoner’s Dilemma (IPD) as the core interaction model and already include implementations for Stag Hunt (coordination games) and Snowdrift (chicken games). The framework supports extensible game implementations with configurable payoff matrices and parameters (round counts, memory windows, custom payoff structures), making it straightforward to switch to other social dilemmas or add new games.
- •

  Network Engine: Supports the generation of various network structures (Regular, Small-World, Scale-Free, Random) with adjustable parameters such as node count, connection degree, and rewiring probability. The engine manages dynamic agent interactions and maintains comprehensive interaction histories throughout the simulation.
- •

  Visualization: A rich visualization suite that generates heatmaps for dyadic interactions, personality ranking charts, network topology snapshots, and time-series plots for network evolution and cooperation rates, facilitating in-depth analysis of simulation dynamics.

Technical Architecture. The framework follows a modular design with clear separation of concerns, featuring:

- •

  Experimental Control: YAML-based configuration management with complete random seed control for reproducibility
- •

  Analysis Pipeline: Integrated statistical analysis, visualization tools, and result export functionality
- •

  Extensibility: Modular architecture facilitating easy extension with new personality models, game types, network topologies, and LLM providers

Reproducibility Features. NetworkGames prioritizes research reproducibility through deterministic random seed control, comprehensive logging of all LLM requests and responses, and standardized output formats that enable cross-study comparisons.
