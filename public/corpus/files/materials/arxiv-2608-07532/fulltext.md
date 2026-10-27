---
id: arxiv-2608-07532-text
type: material
title: Dynamic Coalition Formation and Communication Pricing in Skill-Based Agentic AI Systems
work_id: arxiv-2608-07532
source_url: https://arxiv.org/html/2608.07532v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 74bf023bba1f5ee1ec2dad5abd8f3547caed668edb3a5ed77859e6413982c96f
---

> Источник: [https://arxiv.org/html/2608.07532v1](https://arxiv.org/html/2608.07532v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Dynamic Coalition Formation and Communication Pricing in Skill-Based Agentic AI Systems

Mojtaba Eslami
Affiliation: University of Calgary,
mojtaba.eslami@alumni.ucalgary.ca

###### Abstract

Modern agentic AI systems compose multiple large language model (LLM) agents with
heterogeneous skills to solve complex tasks, but most deployed architectures either
fix the communication topology in advance or let every agent broadcast to every other
agent. Both choices are economically inefficient: token cost, latency, and error
propagation all grow with the number of active agents and communication edges, while
the marginal benefit of an additional agent or message is often small or negative. We
formalize agent coalition formation and inter-agent communication as a cooperative
game with a task-conditioned net-utility function $U(C\mid x)=V(C\mid x)-\sum\_{i\in C}c\_{i}$ that cleanly separates coalition-level costs (latency,
hallucination risk, redundancy) from each agent’s own activation cost, so that token
and compute cost is accounted for exactly once. Building on
this, we propose (i) a marginal-value activation rule and greedy router that decides
which agents to invoke, (ii) an extension that treats communication edges themselves
as decision variables subject to per-edge cost, and (iii) an online routing mechanism
that uses *estimated* Shapley values – rather than only post-hoc credit
assignment – to predict which agents are worth contacting before and during
execution. We connect the resulting optimization problem to submodular set-function
maximization and prove two correctly-scoped guarantees: a curvature-refined bound for
a cardinality-constrained, monotone special case, and a tight $1/2$-approximation
(with an explicit correction for signed objectives) for the unconstrained,
non-monotone case via a double-greedy procedure – and we are explicit that neither
guarantee applies directly to our main router, which is presented as a heuristic
motivated by, but not proven equal to, these bounds. We further prove a
*Shapley–submodularity sandwich bound* showing that the gap between any
marginal-value routing estimate and an agent’s fair Shapley credit is bounded by a
single, per-agent diminishing-returns quantity. In a controlled synthetic simulation,
greedy marginal-value routing recovers $99.5\%$ of brute-force-optimal utility while
activating on average $1.96$ of $8$ candidate agents, versus $38.8\%$ of optimal
utility for full broadcast; a sensitivity analysis shows this result is robust to
activation cost and redundancy weight, but degrades substantially (to as low as
$66\%$) when the submodularity assumption is violated or value estimates are noisy –
exactly the two failure modes our theory predicts should matter, and, we argue, a more
informative characterization of the method than the single headline number. We situate
our contribution narrowly relative to closely neighboring work on Shapley-based
pricing, hedonic-game coalition stability, and communication-graph pruning for LLM
agents, and outline a concrete empirical protocol – using real multi-agent LLM
benchmarks – for validating the framework beyond simulation.

Keywords: multi-agent LLM systems, cooperative game theory, Shapley
value, coalition formation, communication efficiency, mechanism design

## 1 Introduction

Agentic AI systems increasingly decompose a task among multiple specialized LLM
agents – planners, coders, retrievers, critics, and verifiers – that communicate to
produce a final answer ([Guo et al., 2024](https://arxiv.org/html/2608.07532v1#bib.bib21)). As these systems scale, two failure
modes recur. First, *over-activation*: frameworks that invoke every available
skill or tool regardless of whether it improves the outcome, inflating token cost and
latency without a commensurate quality gain, and sometimes actively hurting quality
through conflicting or redundant outputs ([Cemri et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib20)). Second,
*over-communication*: architectures with a fixed, dense communication topology
(e.g., every agent sees every other agent’s output) that do not adapt to the marginal
informativeness of a message for a given task
([Zhang et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib13); [Zhuge et al., 2024](https://arxiv.org/html/2608.07532v1#bib.bib14)).

Our central claim is that both problems admit a common formalization:

> *An agent should be activated, and a communication edge should be used, only
> when the expected marginal value it creates for the task exceeds its computational,
> latency, privacy, and error-propagation cost.*

This reframes agent orchestration as an economic allocation problem, and it lets us
import tools from cooperative game theory – characteristic functions, the core,
hedonic games, and the Shapley value – together with mechanism design, to reason
about *which* agents should be invoked, *how* they should be connected, and
*how* credit (and hence future routing probability or payment) should be
assigned once a task is complete. Several of these ideas individually have close
neighbors in the literature (Section [2](https://arxiv.org/html/2608.07532v1#S2 "2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")): Shapley-based pricing for
LLM agents, hedonic-game coalition stability, and communication-graph pruning have
each been studied separately. Our defensible claim of novelty is narrower than any
one of these: *a task-conditioned net-utility formulation that jointly links
coalition selection, communication cost, and predictive contribution-based routing,
together with a diagnostic bound connecting context-specific marginal contributions
to Shapley credit under submodularity.*

#### Core contributions.

We make three primary contributions.

1. 1.

   A task-conditioned net-utility formulation, $U(C\mid x)=V(C\mid x)-\sum\_{i\in C}c\_{i}$, that separates coalition value (quality net of latency, risk,
   and redundancy costs) from per-agent activation cost, together with a joint
   extension in which the communication graph over an active coalition is optimized
   alongside coalition membership (Sections [3](https://arxiv.org/html/2608.07532v1#S3 "3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")–[4](https://arxiv.org/html/2608.07532v1#S4 "4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")).
2. 2.

   A marginal-value activation rule and greedy router
   (Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), together with two formally correct approximation
   guarantees appropriately scoped to the regimes they actually cover: a
   curvature-refined bound for a cardinality-constrained, monotone special case
   ([Conforti and Cornuéjols, 1984](https://arxiv.org/html/2608.07532v1#bib.bib22)), and a tight $1/2$-approximation (with an explicit
   correction for signed objectives) via double-greedy for the unconstrained,
   non-monotone case ([Buchbinder et al., 2015](https://arxiv.org/html/2608.07532v1#bib.bib25)) (Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")).
3. 3.

   A predictive, online Shapley-based routing mechanism
   (Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) extending prior post-hoc Shapley credit assignment
   ([Hua et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib8)) to a routing-time role, together with a proved
   *Shapley–submodularity sandwich bound* (Proposition [3](https://arxiv.org/html/2608.07532v1#Thmproposition3 "Proposition 3 (Shapley–submodularity sandwich). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
   Corollary [2](https://arxiv.org/html/2608.07532v1#Thmcorollary2 "Corollary 2 (Bounded routing gap). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) that bounds how far any marginal-value routing estimate
   can deviate from the fair Shapley credit, in terms of a single per-agent
   diminishing-returns quantity $\Gamma\_{i}(x)$.

We validate these three contributions with a controlled synthetic simulation
(Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) showing greedy marginal-value routing recovers
$99.5\%$ of brute-force-optimal utility while using roughly $25\%$ of the agents a
full-broadcast baseline would use, a sensitivity analysis
(Section [10.1](https://arxiv.org/html/2608.07532v1#S10.SS1 "10.1 Sensitivity analysis ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) showing this result is robust to activation cost and
redundancy weight but degrades substantially when $V$’s submodularity is violated or
value estimates are noisy (exactly the two failure modes the theory predicts should
matter), and an empirical confirmation that the sandwich bound holds with zero
violations across all tested agents.

#### Extensions (not primary contributions).

We additionally sketch three
directions that are less developed and that we explicitly do not present as
established results: coalition stability via core, Nash, and pairwise-stability
concepts from hedonic game theory, where we identify why the classical
Shapley-in-the-core theorem does *not* transfer to our submodular setting rather
than claim a stability theorem we cannot support (Section [7](https://arxiv.org/html/2608.07532v1#S7 "7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")); a
sketch of Vickrey–Clarke–Groves-style incentive alignment between individual agent
utility and system welfare (Section [8](https://arxiv.org/html/2608.07532v1#S8 "8 Local Utility, System Welfare, and Incentive Alignment ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")); and a dynamic,
reinforcement-learning extension in which coalitions change during task execution
(Section [9](https://arxiv.org/html/2608.07532v1#S9 "9 Extension: Dynamic Coalition Formation (Future Work) ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")). These are flagged as future work throughout, not results
this paper establishes.

We emphasize at the outset that the simulation in Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") is a
*synthetic, controlled* instantiation of the framework – it demonstrates that
the optimization problem we pose is well behaved and that a cheap greedy heuristic is
competitive with the true optimum under conditions the sensitivity analysis makes
explicit, not that the framework improves real LLM agent pipelines. Recent
neighboring work already reports experiments with real LLM agents at meaningful scale
– e.g., [Guo et al. (2026)](https://arxiv.org/html/2608.07532v1#bib.bib9) report $2{,}400$ episodes across GPT-4,
Claude-3, and Llama-3 – and we hold this paper to a correspondingly honest standard:
we position it as a theoretical framework and controlled-simulation paper appropriate
for an arXiv preprint, not as a claim of validated improvement to real multi-agent
LLM systems, and we are explicit in Section [11](https://arxiv.org/html/2608.07532v1#S11 "11 Limitations ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") about what remains
to be validated empirically.

## 2 Related Work

#### Communication-efficient multi-agent LLM systems.

A growing line of work
prunes or learns the communication topology of multi-agent LLM systems rather than
using a fixed fully-connected graph. [Zhuge et al. (2024)](https://arxiv.org/html/2608.07532v1#bib.bib14) treat a multi-agent
system as an optimizable computation graph. [Zhang et al. (2025)](https://arxiv.org/html/2608.07532v1#bib.bib13) prune
redundant communication edges based on message informativeness. Closely related to
our communication-cost term, recent work selects communication edges dynamically
based on trust, reliability, and disagreement among agents
([Gou and Liu, 2026](https://arxiv.org/html/2608.07532v1#bib.bib10)), which supports our premise that a fixed
“everyone-talks-to-everyone” architecture is inefficient, but does not cast edge
selection as a cooperative-game-theoretic optimization jointly with coalition
membership, as we do in Section [4](https://arxiv.org/html/2608.07532v1#S4 "4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").

#### LLM and multi-agent routing.

A separate line of work routes queries to
the cheapest sufficient model or agent configuration, including FrugalGPT
([Chen et al., 2023](https://arxiv.org/html/2608.07532v1#bib.bib16)), RouteLLM ([Ong et al., 2024](https://arxiv.org/html/2608.07532v1#bib.bib17)), and, in the multi-agent
setting, MasRouter ([Yue et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib15)), xRouter ([Qian et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib19)), and
state-aware agent selection ([Wang et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib18)). These systems are typically
trained end-to-end (e.g., with a learned controller or reinforcement learning) to
minimize cost subject to a quality target. Our framework is complementary: it
supplies an explicit, interpretable characteristic function and marginal-value
decision rule that such learned routers could be trained to approximate, and it
additionally addresses *credit assignment* (Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) and
*coalition stability* (Section [7](https://arxiv.org/html/2608.07532v1#S7 "7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), which routing-only
formulations do not consider.

#### Cooperative game theory for LLM agents.

Shapley-Coop
([Hua et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib8)) uses Shapley-value-based marginal contributions for
*post-task* pricing and reward redistribution among self-interested LLM agents.
We build on this idea but use *predicted*, pre-task and mid-task Shapley
estimates to drive the routing decision itself (Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), rather
than only settling accounts after the fact. Independently, [Guo et al. (2026)](https://arxiv.org/html/2608.07532v1#bib.bib9)
study coalition formation among LLM agents through the lens of hedonic games,
analyze Nash-stable partitions under boundedly rational preferences, and – notably
– validate their framework with $2{,}400$ episodes across GPT-4, Claude-3, and
Llama-3, a substantially higher empirical bar than the synthetic simulation we
report in Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"). Our contribution relative to this line is to
couple coalition formation with an explicit, task-conditioned communication-cost
term and a routing mechanism that acts online, and to connect the resulting
selection problem to submodular optimization (Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")); we view
real-agent validation at comparable scale, following the protocol in
Section [10.2](https://arxiv.org/html/2608.07532v1#S10.SS2 "10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), as the natural next step for this line of work rather
than something the present paper establishes.

#### Foundations.

We draw on the classical cooperative game theory of the
Shapley value ([Shapley, 1953](https://arxiv.org/html/2608.07532v1#bib.bib1)) and the core ([Gillies, 1959](https://arxiv.org/html/2608.07532v1#bib.bib2)), on
hedonic games ([Drèze and Greenberg, 1980](https://arxiv.org/html/2608.07532v1#bib.bib3); [Bogomolnaia and Jackson, 2002](https://arxiv.org/html/2608.07532v1#bib.bib4)), on the
Vickrey–Clarke–Groves mechanism ([Vickrey, 1961](https://arxiv.org/html/2608.07532v1#bib.bib5); [Clarke, 1971](https://arxiv.org/html/2608.07532v1#bib.bib6); [Groves, 1973](https://arxiv.org/html/2608.07532v1#bib.bib7)),
and on submodular set-function optimization
([Nemhauser et al., 1978](https://arxiv.org/html/2608.07532v1#bib.bib24); [Buchbinder et al., 2015](https://arxiv.org/html/2608.07532v1#bib.bib25)).

## 3 Basic Formulation

Let $N=\{1,\dots,n\}$ be a set of candidate agents in an agentic AI system. Each
agent $i$ has a skill profile $S\_{i}\subseteq\{\text{search},\text{coding},\text{planning},\text{verification},\dots\}$, or more generally a competence vector
over a latent skill space. For a task $x$, define a *characteristic function*
$V(\cdot\mid x):2^{N}\to\mathbb{R}$ that gives the expected net value produced when
the agents in a coalition $C\subseteq N$ collaborate on $x$, net of the costs that
depend on *how* the coalition works together rather than on which specific
agents were invoked:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V(C\mid x)=\mathbb{E}\Big[\,Q(C,x)-\lambda\_{2}L(C,x)-\lambda\_{3}R(C,x)-\lambda\_{4}D(C,x)\,\Big],$$ |  | (1) |

where $Q$ is task-success quality, $L$ is latency, $R$ is the risk of hallucination,
failure, or unsafe action, and $D$ is duplicated work or redundant communication;
$\lambda\_{2},\lambda\_{3},\lambda\_{4}\geq 0$ are weights reflecting the deployment’s cost
sensitivity. We deliberately keep the token/compute cost of *invoking* an agent
*out* of $V$ and instead attach it to the agent itself as a per-agent activation
price $c\_{i}\geq 0$ (introduced in Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), so that the total
token/compute cost of a coalition is $K(C,x):=\sum\_{i\in C}c\_{i}$. This separation
is a deliberate accounting choice, not an additional assumption: $K$ and $c\_{i}$ refer
to the same quantity, and keeping it out of $V$ prevents it from being subtracted
twice – once inside $V$ and once again when the marginal-value activation rule
(Equation [5](https://arxiv.org/html/2608.07532v1#S5.E5 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) compares a marginal gain in $V$ against $c\_{i}$. The system’s
coalition-selection problem, over the true net utility of a coalition, is therefore

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$C^{\*}(x)=\arg\max\_{C\subseteq N}\Big[V(C\mid x)-\!\!\sum\_{i\in C}c\_{i}\Big].$$ |  | (2) |

Rather than activating every available skill, the system selects the coalition with
the highest net utility. Equation ([1](https://arxiv.org/html/2608.07532v1#S3.E1 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) nests the common special case
$Q(C,x)$ monotone non-decreasing and submodular in $C$ (adding an agent never hurts
quality, and does so with diminishing returns) as a natural regime, but we do not
assume monotonicity in general: redundant or conflicting agents can strictly reduce
$Q$, which is precisely why the grand coalition $C=N$ is not assumed optimal even
before token cost is considered.

## 4 Communication as Part of the Optimization

Given an active coalition $C$, let $G\_{C}=(C,E\_{C})$ be the communication network
restricted to $C$, where $E\_{C}\subseteq\{\{i,j\}:i,j\in C,\,i\neq j\}$ is an
*undirected* set of communication channels: $\{i,j\}\in E\_{C}$ means agents $i$
and $j$ are connected and can exchange messages, in one or both directions as the
task requires. We take edges to be undirected – a connected pair shares a channel
whose cost $c\_{ij}$ (below) is paid once regardless of how many messages flow in
each direction – consistent with typical multi-agent debate and broadcast protocols,
where a connected pair’s outputs are mutually visible; *which* direction
information predominantly flows within an established channel (e.g., a coordinator
agent versus a peer) is a downstream policy choice we return to in
Section [4.1](https://arxiv.org/html/2608.07532v1#S4.SS1 "4.1 A worked example ‣ 4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), not a separate edge in $E\_{C}$. Rather than fixing
$G\_{C}$ a priori (e.g., fully connected, or a hand-designed pipeline), we treat it as
part of the optimization:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\max\_{C\subseteq N,\;G\_{C}}\;U(C,G\_{C}\mid x)\;-\!\!\sum\_{\{i,j\}\in E\_{C}}c\_{ij},$$ |  | (3) |

where $U(C,G\_{C}\mid x)$ is the net utility from Equation ([2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) (already
net of each agent’s own activation cost) evaluated with the coalition communicating
over graph $G\_{C}$, and $c\_{ij}$ is the additional cost of the communication channel
between $i$ and $j$ (token cost of messages exchanged, added latency, and the risk
that one agent’s error propagates into the other’s context).
Problem ([3](https://arxiv.org/html/2608.07532v1#S4.E3 "In 4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) operationalizes several design questions that are usually
answered by hand-coded architecture choices: which agents need to communicate; which
agent, if any, should act as a coordinator that most information routes through; when
an additional channel stops being worth its cost; whether two agents should
communicate directly or through an intermediary; and when a coalition should split
because communication has become too expensive relative to its benefit. Because $E\_{C}$
ranges over a graph on $|C|$ nodes, exact solution of
Equation ([3](https://arxiv.org/html/2608.07532v1#S4.E3 "In 4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is combinatorial in general ($2^{\binom{|C|}{2}}$ candidate
graphs for a fixed $C$); Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
gives a tractable greedy procedure for the coalition-membership part of the problem,
and we treat joint edge optimization as an extension for future work
(Section [11](https://arxiv.org/html/2608.07532v1#S11 "11 Limitations ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")).

### 4.1 A worked example

To make Equations ([2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) and ([3](https://arxiv.org/html/2608.07532v1#S4.E3 "In 4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) concrete, consider a pool of
five candidate agents with complementary skills: a planner (P), a search/retrieval
agent (S), a coder (Co), a critic/verifier (Cr), and a security auditor (Se). Figure [1](https://arxiv.org/html/2608.07532v1#S4.F1 "Figure 1 ‣ 4.1 A worked example ‣ 4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
shows the coalition and communication graph a task-conditioned optimizer might select
for three different tasks, alongside the grand coalition for contrast.

PSCoCrSe(a) Simple writing task$C\_{1}=\{\text{P}\}$, no communication needed

PSCoCrSe(b) Factual research task$C\_{2}=\{\text{P,S,Cr}\}$, planner-coordinated

PSCoCrSe(c) Software deployment task$C\_{3}=\{\text{P,Co,Cr,Se}\}$, coder-coordinated

PSCoCrSe(d) Grand coalition, fully connected$C=N$, $\binom{5}{2}=10$ edges for every task

Figure 1: A task-conditioned optimizer selects both *which* agents to activate
and *how* they communicate. Panels (a)–(c) show the coalition and
communication graph $(C,G\_{C})$ a solver of Equation ([3](https://arxiv.org/html/2608.07532v1#S4.E3 "In 4 Communication as Part of the Optimization ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) might return
for three tasks of increasing complexity; edges are undirected communication
channels, drawn only where the marginal value of establishing the channel exceeds
its cost $c\_{ij}$, with arrows annotating the predominant direction information
flows *within* an established channel (e.g., toward a coordinating agent) rather
than indicating additional edges. Inactive agents (gray) are not
invoked at all, so neither their activation cost $c\_{i}$ nor any channel
touching them is paid. Panel (d) shows the grand coalition every agent connected
to every other agent, regardless of task: this is the architecture our framework
argues against, since it pays for $\binom{5}{2}=10$ communication channels and $5$
activation costs even on the simple task in (a), where a single agent suffices.

The three selected coalitions illustrate Section [3](https://arxiv.org/html/2608.07532v1#S3 "3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")’s point that
more agents do not automatically create more net intelligence: $C\_{2}$ and $C\_{3}$ each
add exactly the agents whose skills are not already covered by the rest of the
coalition (search and verification for a research task; coding, verification, and
security review for a deployment task), and the communication graph in each case
routes information through a single coordinating agent (P in (b), Co in (c)) rather
than connecting every pair – a sparse, task-specific topology of the kind
Section [6.1](https://arxiv.org/html/2608.07532v1#S6.SS1 "6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")’s per-agent diagnostic $\Gamma\_{i}(x)$ and the marginal-value
routing rule of Equation ([5](https://arxiv.org/html/2608.07532v1#S5.E5 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) are designed to produce automatically, rather
than requiring it to be hand-designed per task as in panels (a)–(c).

## 5 Marginal Value and a Greedy Activation Rule

For a coalition $C$, the marginal contribution of agent $i$ is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Delta\_{i}(C,x)=V(C\cup\{i\}\mid x)-V(C\mid x).$$ |  | (4) |

This gives a natural activation rule: agent $i$ should be invoked if and only if

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}[\Delta\_{i}(C,x)]>c\_{i},$$ |  | (5) |

where $c\_{i}$ is the cost of activating agent $i$ (e.g., its expected token and latency
footprint). For example, a verification agent should be added to a coalition that
already contains a planner and a coder only when its expected reduction in downstream
error exceeds its own token, latency, and API cost – a more disciplined criterion
than routing every result through every available skill.

Algorithm 1  Greedy marginal-value coalition router

1:
candidate agents $N$, task $x$, characteristic function $V(\cdot\mid x)$, activation costs $\{c\_{i}\}$

2:
$C\leftarrow\emptyset$

3:
repeat

4:
  $a^{\*}\leftarrow\arg\max\_{i\in N\setminus C}\big[V(C\cup\{i\}\mid x)-V(C\mid x)\big]$

5:
  $g\leftarrow V(C\cup\{a^{\*}\}\mid x)-V(C\mid x)$

6:
  if $g>c\_{a^{\*}}$ then

7:
   $C\leftarrow C\cup\{a^{\*}\}$

8:
  else

9:
   break

10:
  end if

11:
until $C=N$

12:
return $C$

### 5.1 Connection to submodular optimization

When $Q(C,x)$ is monotone submodular in $C$ – a natural modeling choice, since
covering a task’s skill requirements typically exhibits diminishing returns to
additional redundant agents – and $L,R$ are modular (additive) in $C$ while $D$ is
supermodular (redundant work grows super-additively with coalition size, e.g. a
penalty on the number of overlapping pairs of agents), the objective $V(\cdot\mid x)$
in Equation ([1](https://arxiv.org/html/2608.07532v1#S3.E1 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is itself submodular: subtracting a modular function
preserves submodularity, and subtracting a supermodular function (equivalently,
adding a submodular one) only adds curvature in the same direction. The full net
utility used for coalition selection, $U(C\mid x):=V(C\mid x)-\sum\_{i\in C}c\_{i}$
(Equation [2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), remains submodular for the same reason, since
$\sum\_{i\in C}c\_{i}$ is modular. $U$ need not be monotone once costs are subtracted
(large coalitions can have lower value than smaller ones), so
Equation ([2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is an instance of *unconstrained submodular
maximization* on $U$, and we use $U$ rather than $V$ as the objective throughout the
remainder of the paper wherever a coalition is scored end-to-end (Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
scores $U$, not $V$ alone).

#### Two equivalent forms of the activation rule.

Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")’s
stopping rule compares a marginal gain in $V$ against the per-agent cost $c\_{i}$
(Equation [5](https://arxiv.org/html/2608.07532v1#S5.E5 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), which is convenient because $c\_{i}$ is naturally a per-agent
quantity. This is exactly equivalent to requiring a positive marginal gain in the
full net utility $U$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Delta\_{i}V(C,x)>c\_{i}\quad\Longleftrightarrow\quad\Delta\_{i}U(C,x)>0,$$ |  | (6) |

since $\Delta\_{i}U(C,x)=U(C\cup\{i\}\mid x)-U(C\mid x)=\big[V(C\cup\{i\}\mid x)-\!\!\sum\_{j\in C\cup\{i\}}\!\!c\_{j}\big]-\big[V(C\mid x)-\sum\_{j\in C}c\_{j}\big]=\Delta\_{i}V(C,x)-c\_{i}$, which is positive exactly when $\Delta\_{i}V(C,x)>c\_{i}$. We use
this equivalence to fix notation for the remainder of the paper and avoid mixing the
two forms: Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") is stated in the $V$-plus-$c\_{i}$ form
(Equation [5](https://arxiv.org/html/2608.07532v1#S5.E5 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), since that is the natural form for a per-agent streaming
decision. Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), Proposition [2](https://arxiv.org/html/2608.07532v1#Thmproposition2 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
and the Shapley analysis of Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") are instead stated directly on
$U$, the full net utility from Equation ([2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")): this is the objective a
system actually cares about maximizing end-to-end, and it is the game whose Shapley
value gives agents fair credit net of their own cost (an agent that produces a lot of
quality but is expensive should not receive full credit for the quality alone). We do
not use $V$ to stand in for $U$ anywhere below; each proposition states explicitly
which of the two objectives it concerns.

### 5.2 Approximation guarantees

We give two formal guarantees for greedy coalition selection, covering the two
regimes a deployment may face: a hard budget on the number of active agents
(cardinality-constrained), and no explicit budget, with cost handled entirely through
$V$ (unconstrained).

#### Cardinality-constrained regime.

We state this regime as a special case for
context, and to introduce curvature as a diagnostic quantity; it does *not*
directly govern Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), our main router, which is unconstrained
rather than cardinality-constrained, maximizes the signed, non-monotone $U(C\mid x)$
rather than the monotone quality term $Q(C,x)$ alone, and uses a per-agent stopping
threshold rather than a fixed budget $k$. Suppose instead the system imposes a budget
$|C|\leq k$ (e.g., a hard cap on concurrently active agents) and, within that budget,
selects agents to greedily maximize the quality term $Q(C,x)$, monotone submodular by
assumption. The classical guarantee for this setting is $(1-1/e)\approx 63\%$ of the
optimal value under a cardinality constraint ([Nemhauser et al., 1978](https://arxiv.org/html/2608.07532v1#bib.bib24)), but this
bound is loose whenever $Q$ is close to modular (i.e., agents’ skills are close to
non-overlapping, so there is little redundancy to lose from greedy’s sub-optimality).
This looseness is captured by the *curvature* of $Q$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\alpha\_{Q}=1-\min\_{i\in N}\frac{Q(N)-Q(N\setminus\{i\})}{Q(\{i\})-Q(\emptyset)}\;\in[0,1],$$ |  | (7) |

which measures how much an agent’s marginal contribution can shrink between being
added first versus added last ($\alpha\_{Q}=0$ means no diminishing returns at all,
i.e. $Q$ is modular; $\alpha\_{Q}=1$ means some agent’s marginal contribution can
fall to zero once other agents are present).

###### Proposition 1 (Curvature-refined greedy bound).

If $Q(\cdot,x)$ is monotone submodular with curvature $\alpha\_{Q}$, greedy selection
under a cardinality constraint $|C|\leq k$ achieves

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Q(C\_{\mathrm{greedy}},x)\;\geq\;\frac{1}{\alpha\_{Q}}\Big(1-e^{-\alpha\_{Q}}\Big)\,Q(C^{\*}\_{k},x),$$ |  | (8) |

where $C^{\*}\_{k}$ is the optimal coalition of size $\leq k$
([Conforti and Cornuéjols, 1984](https://arxiv.org/html/2608.07532v1#bib.bib22)). The bound recovers the classical $(1-1/e)$ guarantee
at $\alpha\_{Q}=1$ and improves continuously to a guarantee of $1$ (greedy is exactly
optimal) as $\alpha\_{Q}\to 0$.

Equation ([8](https://arxiv.org/html/2608.07532v1#S5.E8 "In Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is a diagnostic a system operator could compute
*in the constrained, monotone special case*: estimate $\alpha\_{Q}$ empirically from
historical coalition outcomes (the smallest observed ratio of “last-added” to
“first-added” marginal value for any agent), and read off an instance-specific lower
bound rather than relying on the worst-case $(1-1/e)$ figure. We report the empirical
performance of Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") itself, on the unconstrained, signed $U$,
separately in Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"); Proposition [1](https://arxiv.org/html/2608.07532v1#Thmproposition1 "Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") should be
read as motivating intuition for why low skill overlap is favorable to greedy
selection in general, not as a bound that applies to that specific result.

#### Unconstrained regime.

Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") does not impose a
cardinality constraint; it stops adding agents once no marginal gain clears its
activation cost, which is the setting we use throughout the paper. Here the relevant
guarantee is for *unconstrained* submodular maximization of the full net utility
$U$, which can be negative and non-monotone (exactly our setting once activation and
other costs are subtracted). Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") does not attain the guarantee
below, because it only adds agents and never removes them; we present the guarantee
for a variant, Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), which does.

Algorithm 2  Randomized double-greedy (unconstrained submodular maximization) ([Buchbinder et al., 2015](https://arxiv.org/html/2608.07532v1#bib.bib25))

1:
candidate agents $N=\{1,\dots,n\}$, task $x$, $U(\cdot\mid x)$

2:
$X\_{0}\leftarrow\emptyset$, $Y\_{0}\leftarrow N$

3:
for $i=1$ to $n$ do

4:
  $a\_{i}\leftarrow U(X\_{i-1}\cup\{i\}\mid x)-U(X\_{i-1}\mid x)$ $\triangleright$ gain from adding $i$

5:
  $b\_{i}\leftarrow U(Y\_{i-1}\setminus\{i\}\mid x)-U(Y\_{i-1}\mid x)$ $\triangleright$ gain from removing $i$

6:
  $a\_{i}^{\prime}\leftarrow\max(a\_{i},0)$, $b\_{i}^{\prime}\leftarrow\max(b\_{i},0)$

7:
  with probability $\frac{a\_{i}^{\prime}}{a\_{i}^{\prime}+b\_{i}^{\prime}}$ (or $\tfrac{1}{2}$ if $a\_{i}^{\prime}=b\_{i}^{\prime}=0$): $X\_{i}\leftarrow X\_{i-1}\cup\{i\}$, $Y\_{i}\leftarrow Y\_{i-1}$

8:
  otherwise: $X\_{i}\leftarrow X\_{i-1}$, $Y\_{i}\leftarrow Y\_{i-1}\setminus\{i\}$

9:
end for

10:
return $X\_{n}$ ($=Y\_{n}$)

Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") takes $U$ (not $V$) as input: since $U$ is the
objective the system actually wants to maximize end-to-end (Equation [2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")),
and since $U$ is submodular whenever $V$ is (shown above, as $U$ is $V$ minus a
modular per-agent cost term), the guarantee below is stated directly for $U$.

###### Proposition 2 (Tight unconstrained bound for non-negative submodular functions ([Buchbinder et al., 2015](https://arxiv.org/html/2608.07532v1#bib.bib25))).

If $U(\cdot\mid x):2^{N}\to\mathbb{R}\_{\geq 0}$ is submodular and non-negative (not
necessarily monotone), Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") returns a coalition $C$ with
$\mathbb{E}[U(C\mid x)]\geq\tfrac{1}{2}\,U(C^{\*}\mid x)$, where $C^{\*}=\arg\max\_{C\subseteq N}U(C\mid x)$. In the value-oracle model (the algorithm may query $U$ at any coalition
but has no further structural knowledge of it), no algorithm making a polynomial number
of queries can guarantee a better ratio in the worst case ([Buchbinder et al., 2015](https://arxiv.org/html/2608.07532v1#bib.bib25); [Feige et al., 2011](https://arxiv.org/html/2608.07532v1#bib.bib12)).

The non-negativity requirement matters: our $U(\cdot\mid x)$ (Equation [2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"))
can be negative, since a large, redundant coalition can have quality gains outweighed by
latency, risk, redundancy, and activation cost. The guarantee above does not apply
directly to a signed objective, but it extends to one by a simple shift argument, which
we state as an explicitly limited analytical device rather than a practical algorithm in
its own right (see the caveats following the corollary).

###### Corollary 1 (Extension to signed $U$).

Let $m=\min\_{C\subseteq N}U(C\mid x)$ and define the shifted objective
$\tilde{U}(C\mid x):=U(C\mid x)-m\geq 0$. Since adding a constant to a set function
preserves submodularity, $\tilde{U}$ is submodular and non-negative, so
Proposition [2](https://arxiv.org/html/2608.07532v1#Thmproposition2 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") applies to $\tilde{U}$: running
Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") on $\tilde{U}$ returns $C$ with
$\mathbb{E}[\tilde{U}(C\mid x)]\geq\tfrac{1}{2}\,\tilde{U}(C^{\*}\mid x)$, which translates
back to

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}[U(C\mid x)]\;\geq\;\tfrac{1}{2}\,U(C^{\*}\mid x)+\tfrac{1}{2}\,m.$$ |  | (9) |

###### Proof.

Substitute $\tilde{U}(C\mid x)=U(C\mid x)-m$ into
$\mathbb{E}[\tilde{U}(C\mid x)]\geq\tfrac{1}{2}\tilde{U}(C^{\*}\mid x)$ and rearrange:
$\mathbb{E}[U(C\mid x)]-m\geq\tfrac{1}{2}(U(C^{\*}\mid x)-m)$, i.e. $\mathbb{E}[U(C\mid x)]\geq\tfrac{1}{2}U(C^{\*}\mid x)-\tfrac{1}{2}m+m=\tfrac{1}{2}U(C^{\*}\mid x)+\tfrac{1}{2}m$.
∎

This shift is primarily an analytical device rather than a practical algorithm in its
own right, for two reasons that should temper how it is read: computing the exact
minimum $m=\min\_{C\subseteq N}U(C\mid x)$ is itself a combinatorial search over
$2^{n}$ coalitions with no known efficient algorithm in general (estimating $m$ instead
would weaken the guarantee further); and when $m$ is substantially negative – plausible
whenever redundancy or risk costs can be large relative to quality – the resulting
additive term $\tfrac{1}{2}m$ can make Equation ([9](https://arxiv.org/html/2608.07532v1#S5.E9 "In Corollary 1 (Extension to signed 𝑈). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) numerically
uninformative (e.g. vacuous if $\tfrac{1}{2}U(C^{\*}\mid x)+\tfrac{1}{2}m\leq 0$, which any
non-negative utility trivially satisfies). We report the shift because it is the
mathematically correct extension of Proposition [2](https://arxiv.org/html/2608.07532v1#Thmproposition2 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") to a signed
objective, not because it yields a bound we expect to be tight or actionable in
practice.

Because $m\leq 0$ typically (the empty coalition, or a coalition dominated by
redundancy cost, achieves the minimum), Equation ([9](https://arxiv.org/html/2608.07532v1#S5.E9 "In Corollary 1 (Extension to signed 𝑈). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is a strictly
weaker guarantee than the clean $\tfrac{1}{2}$-approximation that holds for non-negative
functions; we report it in this explicit, weaker form rather than applying the
non-negative-case bound to a signed objective without adjustment.

Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") is a strict theoretical improvement over
Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") in the worst case, since add-only greedy has no known
constant-factor guarantee once $U$ is allowed to be non-monotone and signed. In practice
we use Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") because it is simpler to implement as a stateful,
streaming router (it only ever grows the active coalition, which maps naturally onto
sequentially deciding whether to contact the next agent). Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
reports how close Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") comes to the brute-force optimum on our
synthetic instances *as an empirical finding*; this should not be read as evidence
that Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") inherits either Proposition [1](https://arxiv.org/html/2608.07532v1#Thmproposition1 "Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") or
Proposition [2](https://arxiv.org/html/2608.07532v1#Thmproposition2 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), since it satisfies the preconditions of neither
(it is unconstrained rather than cardinality-constrained, and it only adds agents rather
than running the randomized add/remove procedure double-greedy requires). We view
Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") as the theoretically principled fallback when the
marginal-value routing rule of Equation ([5](https://arxiv.org/html/2608.07532v1#S5.E5 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is suspected to be a poor
approximation – e.g., when $\hat{\alpha}\_{Q}$, estimated from logged data, is close to $1$.

###### Remark 1 (Robustness to approximate submodularity).

Real agent-quality functions $Q$ need not be exactly submodular; conflicting or
miscalibrated agents can occasionally violate diminishing returns locally. The
guarantees above degrade gracefully rather than catastrophically in this case: if $Q$
is only *approximately* submodular with submodularity ratio $\gamma\in(0,1]$
(the largest $\gamma$ such that $Q$ satisfies a $\gamma$-relaxed diminishing-returns
condition), the cardinality-constrained greedy guarantee degrades to
$(1-e^{-\gamma})$ ([Das and Kempe, 2011](https://arxiv.org/html/2608.07532v1#bib.bib23)), recovering
Proposition [1](https://arxiv.org/html/2608.07532v1#Thmproposition1 "Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") at $\gamma=1$. We do not estimate $\gamma$ in this
paper, but flag it as the right empirical quantity for a follow-up study to report
alongside $\hat{\alpha}\_{Q}$.

## 6 Online Credit Assignment with Shapley Values

After a coalition completes a task, value must be attributed to individual agents.
We compute the Shapley value of the full net-utility game $U$ (not $V$), so that an
agent’s credit already accounts for its own activation cost – an agent that produces
a lot of quality but is expensive to run should not receive full credit for the
quality alone. The Shapley value gives agent $i$ credit

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\phi\_{i}(U)=\sum\_{C\subseteq N\setminus\{i\}}\frac{|C|!\,(n-|C|-1)!}{n!}\Big[U(C\cup\{i\})-U(C)\Big],$$ |  | (10) |

which is the unique allocation satisfying efficiency ($\sum\_{i}\phi\_{i}=U(N)$),
symmetry, the null-player property, and additivity ([Shapley, 1953](https://arxiv.org/html/2608.07532v1#bib.bib1)). Prior
work uses this decomposition *post hoc*, to price contributions and redistribute
reward among self-interested LLM agents after a task completes
([Hua et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib8)). Our proposal is to move Shapley estimation earlier: use a
predicted marginal contribution $\hat{\phi}\_{i,t}(U)$ – an online estimate of
$\phi\_{i}(U)$, and therefore *already net of agent $i$’s activation cost*, since
$U$ is the cost-net game (Equation [2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) – estimated from features
available at routing time (task embedding, agent track record, partial coalition
state), to decide whether to contact agent $i$ at stage $t$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(i\text{ contacted at time }t)=\sigma\!\big(\hat{\phi}\_{i,t}(U)\big),$$ |  | (11) |

where $\sigma$ is a monotone squashing function (e.g., logistic) centered so that
$\sigma(0)=\tfrac{1}{2}$: since $\hat{\phi}\_{i,t}(U)$ already nets out $c\_{i}$, no further
cost term is subtracted here – doing so would subtract agent $i$’s activation cost a
second time, once inside the estimate of $\phi\_{i}(U)$ and once again explicitly, which
is exactly the accounting error Equation ([6](https://arxiv.org/html/2608.07532v1#S5.E6 "In Two equivalent forms of the activation rule. ‣ 5.1 Connection to submodular optimization ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) was introduced to
avoid elsewhere in the paper. Realized
Shapley values from completed tasks, computed exactly for small $|C|$ or approximated
via Monte Carlo permutation sampling for larger coalitions, then supervise the
predictor $\hat{\phi}\_{i,t}(U)$, closing the loop between post-hoc credit assignment and
future routing probability. This also gives a natural signal for (i) adjusting
routing priors, (ii) allocating token/compute budgets across agents, (iii) pricing
contributions when agents belong to different providers, and (iv) identifying agents
that consistently free-ride on others’ contributions.

### 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich

Equation ([11](https://arxiv.org/html/2608.07532v1#S6.E11 "In 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) routes on an *estimate* $\hat{\phi}\_{i,t}(U)$ of
the true Shapley value $\phi\_{i}(U)$, while Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") routes on the raw marginal contribution
$\Delta\_{i}(C,x)=\Delta\_{i}V(C,x)$ to whatever partial coalition $C$ has been built so
far (Equation ([4](https://arxiv.org/html/2608.07532v1#S5.E4 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"))), compared against $c\_{i}$. By the equivalence
established in Equation ([6](https://arxiv.org/html/2608.07532v1#S5.E6 "In Two equivalent forms of the activation rule. ‣ 5.1 Connection to submodular optimization ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")’s decision
is equivalent to asking whether the corresponding marginal contribution to the full
net utility, $\Delta\_{i}U(C,x):=U(C\cup\{i\}\mid x)-U(C\mid x)=\Delta\_{i}V(C,x)-c\_{i}$, is positive. It is this $U$-marginal, not the raw $V$-marginal, that we compare
against the Shapley value $\phi\_{i}(U)$ below, since both live in the same game.

###### Proposition 3 (Shapley–submodularity sandwich).

If $U(\cdot\mid x)$ is submodular (diminishing marginal returns: for all $A\subseteq B\subseteq N\setminus\{i\}$, $U(A\cup\{i\})-U(A)\geq U(B\cup\{i\})-U(B)$ – which holds whenever $V$ is submodular, since $U$ differs from $V$ only by a
modular cost term, Section [5.1](https://arxiv.org/html/2608.07532v1#S5.SS1 "5.1 Connection to submodular optimization ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), then for every agent $i$ and
every coalition $C$ with $i\notin C$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$U(N\mid x)-U(N\setminus\{i\}\mid x)\;\leq\;\Delta\_{i}U(C,x)\;\leq\;U(\{i\}\mid x)-U(\emptyset\mid x),$$ |  | (12) |

and in particular the Shapley value itself satisfies the same sandwich,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$U(N\mid x)-U(N\setminus\{i\}\mid x)\;\leq\;\phi\_{i}(U)\;\leq\;U(\{i\}\mid x)-U(\emptyset\mid x).$$ |  | (13) |

###### Proof.

The Shapley value can be written as an expectation over uniformly random orderings
$\pi$ of $N$: $\phi\_{i}(U)=\mathbb{E}\_{\pi}\big[U(P\_{i}^{\pi}\cup\{i\})-U(P\_{i}^{\pi})\big]$,
where $P\_{i}^{\pi}$ is the set of agents preceding $i$ in $\pi$. For every ordering,
$\emptyset\subseteq P\_{i}^{\pi}\subseteq N\setminus\{i\}$, so by the diminishing-returns
definition of submodularity applied at $A=P\_{i}^{\pi}$ and the two extremes $A=\emptyset$
and $A=N\setminus\{i\}$,

|  |  |  |
| --- | --- | --- |
|  | $$U(N\mid x)-U(N\setminus\{i\}\mid x)\;\leq\;U(P\_{i}^{\pi}\cup\{i\}\mid x)-U(P\_{i}^{\pi}\mid x)\;\leq\;U(\{i\}\mid x)-U(\emptyset\mid x)$$ |  |

holds for *every* $\pi$, hence for $\Delta\_{i}U(C,x)$ directly (taking $C=P\_{i}^{\pi}$
for any single ordering), and survives taking the expectation over $\pi$ that defines
$\phi\_{i}(U)$, giving Equation ([13](https://arxiv.org/html/2608.07532v1#S6.E13 "In Proposition 3 (Shapley–submodularity sandwich). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")).
∎

###### Corollary 2 (Bounded routing gap).

Define agent $i$’s *diminishing-returns gap* as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Gamma\_{i}(x)\;=\;\big[U(\{i\}\mid x)-U(\emptyset\mid x)\big]\;-\;\big[U(N\mid x)-U(N\setminus\{i\}\mid x)\big]\;\geq 0.$$ |  | (14) |

Then for any coalition $C$ built by Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") at the point agent $i$
is considered, $\big|\Delta\_{i}U(C,x)-\phi\_{i}(U)\big|\leq\Gamma\_{i}(x)$. By the
equivalence in Equation ([6](https://arxiv.org/html/2608.07532v1#S5.E6 "In Two equivalent forms of the activation rule. ‣ 5.1 Connection to submodular optimization ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), $\Delta\_{i}U(C,x)=\Delta\_{i}(C,x)-c\_{i}$ where $\Delta\_{i}(C,x)$ is exactly the quantity Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") already
computes, so this bounds a simple, known offset ($\Delta\_{i}(C,x)-c\_{i}$) of Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")’s
own decision signal against the fair Shapley credit, in terms of agent $i$’s own
diminishing-returns gap, independent of when in the coalition-building process $i$
is evaluated.

Corollary [2](https://arxiv.org/html/2608.07532v1#Thmcorollary2 "Corollary 2 (Bounded routing gap). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") establishes that a specific marginal-contribution quantity is
close to Shapley-fair credit; it does *not*, by itself, establish that
Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") selects the correct coalition, incurs small regret, or
routes optimally – an agent can have a marginal value close to its Shapley value
while the router still makes the wrong decision, for instance because of noise in the
value estimate or because the agent sits near the activation threshold $c\_{i}$ (see the
noise sensitivity sweep in Section [10.1](https://arxiv.org/html/2608.07532v1#S10.SS1 "10.1 Sensitivity analysis ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), where exact-match rate with
the optimum degrades far faster than utility does under estimation noise, for exactly
this reason). With that caveat, Corollary [2](https://arxiv.org/html/2608.07532v1#Thmcorollary2 "Corollary 2 (Bounded routing gap). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") still gives a precise,
testable diagnostic for when the cheap greedy activation rule
(Equation [5](https://arxiv.org/html/2608.07532v1#S5.E5 "In 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is a safe proxy for Shapley-fair routing
(Equation [11](https://arxiv.org/html/2608.07532v1#S6.E11 "In 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), and when the more expensive online Shapley
estimator is worth its cost: agents with small $\Gamma\_{i}(x)$ (little overlap with
other agents’ skills, so their contribution barely depends on who else is present)
have a raw marginal contribution that is a reliable proxy for their Shapley credit,
making Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") more defensible *when its value estimates are
also accurate*; agents with large $\Gamma\_{i}(x)$ (highly redundant with other agents,
so their marginal contribution swings sharply depending on coalition composition –
e.g., a second verifier agent whose value depends heavily on whether a first verifier
is already active) need the full online Shapley machinery of
Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") to be routed fairly. Summed across agents, $\sum\_{i\in N}\Gamma\_{i}(x)$ is a single diagnostic a system operator can log per task family: a
small sum indicates the agent pool is close to skill-orthogonal (low curvature, in
the sense of Equation [7](https://arxiv.org/html/2608.07532v1#S5.E7 "In Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) and credit-approximation error from using
raw marginal value is small; a large sum indicates substantial skill overlap and
motivates paying for Shapley-based routing or the double-greedy fallback of
Algorithm [2](https://arxiv.org/html/2608.07532v1#alg2 "Algorithm 2 ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"). Together with the curvature bound of
Proposition [1](https://arxiv.org/html/2608.07532v1#Thmproposition1 "Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") (Section [5.2](https://arxiv.org/html/2608.07532v1#S5.SS2 "5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), this connects
the paper’s two main theoretical tools – submodular optimization and the Shapley
value – into a single diagnostic quantity ($\alpha\_{Q}$, or its per-agent analogue
$\Gamma\_{i}$) that bounds *credit-assignment* accuracy; it is supportive evidence
for, but not a proof of, good coalition-selection quality, which is instead
addressed (separately, and only in restricted regimes) by
Propositions [1](https://arxiv.org/html/2608.07532v1#Thmproposition1 "Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") and [2](https://arxiv.org/html/2608.07532v1#Thmproposition2 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").

## 7 Coalition Stability

Maximizing $U(C\mid x)$ for a single task does not guarantee that a multi-task
*system* of coalitions is stable: individual agents, or providers operating
agents, may prefer to leave one coalition for another. We adopt three standard
stability notions from hedonic game theory
([Drèze and Greenberg, 1980](https://arxiv.org/html/2608.07532v1#bib.bib3); [Bogomolnaia and Jackson, 2002](https://arxiv.org/html/2608.07532v1#bib.bib4)).

###### Definition 1 (Core stability).

An allocation $y\_{1},\dots,y\_{n}$ with $\sum\_{i\in N}y\_{i}=U(N)$ is in the *core*
if $\sum\_{i\in C}y\_{i}\geq U(C)$ for every $C\subseteq N$: no subgroup can produce
more value by leaving the grand coalition and splitting off on its own
([Gillies, 1959](https://arxiv.org/html/2608.07532v1#bib.bib2)).

###### Definition 2 (Nash-stable partition).

A partition $\pi$ of $N$ into coalitions is *Nash-stable* if no agent strictly
prefers moving from its current coalition to another coalition in $\pi$ (including
the empty coalition), under each agent’s individual utility function.

###### Definition 3 (Pairwise stability).

A communication graph $G$ is *pairwise stable* if no pair of agents benefits,
jointly, from adding or removing the edge between them.

###### Remark 2 (Why the classical convex-game result does not transfer).

The classical result that the Shapley value lies in the core applies to *convex*
games – games whose characteristic function is *supermodular*, i.e. has
*increasing* marginal returns: $U(A\cup\{i\})-U(A)\leq U(B\cup\{i\})-U(B)$ for $A\subseteq B$ ([Shapley, 1971](https://arxiv.org/html/2608.07532v1#bib.bib11)). Our framework’s central modeling
assumption (Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is the opposite: $U$ is *submodular*,
with *diminishing* marginal returns, precisely because redundant agents
contribute less as the coalition grows. Submodularity and supermodularity are, in
this sense, opposing conditions, and a game that is (non-trivially) both is
essentially modular. Consequently, the classical Shapley-in-the-core theorem does
*not* apply to the coalition-formation game studied in this paper, and we do
not claim it does; a restricted superadditivity condition on skill-complementary
sub-coalitions is not sufficient to establish the supermodularity the theorem
actually requires. The only case in which core stability is immediate is the
degenerate one in which $U$ is exactly modular – i.e., agents’ skills are fully
non-overlapping, $D\equiv 0$, and activation costs are the only cost term, so
$U(C)=\sum\_{i\in C}U(\{i\})$ for every $C$ – in which case the
unique core allocation $y\_{i}=U(\{i\})$ coincides trivially with the Shapley value.
Beyond this degenerate case, whether (and under what conditions) our submodular
coalition-formation game admits a non-empty core, and how that relates to the
Nash-stable partitions studied for LLM agent coalitions under hedonic game theory
([Guo et al., 2026](https://arxiv.org/html/2608.07532v1#bib.bib9)), is an open question that we leave to future work
rather than a result we claim here.

## 8 Local Utility, System Welfare, and Incentive Alignment

Agents (or the providers operating them) may have private utilities that diverge from
system-level welfare. A representative local utility is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$u\_{i}=\alpha\_{i}\cdot\text{credit}\_{i}-\beta\_{i}\cdot\text{computation}\_{i}-\gamma\_{i}\cdot\text{failure\\_exposure}\_{i},$$ |  | (15) |

while the platform’s objective is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$W=\text{task quality}-\lambda\cdot\text{cost}-\mu\cdot\text{latency}-\rho\cdot\text{risk}.$$ |  | (16) |

Left unmanaged, a self-interested agent may avoid difficult tasks, exaggerate
confidence to be selected, send unnecessary messages to appear useful, over-delegate,
withhold useful information, or form coalitions that benefit its members at the
system’s expense. In an idealized setting with quasilinear utilities, exact welfare
maximization, and correctly specified Clarke pivot payments, a
Vickrey–Clarke–Groves mechanism – paying agent $i$ its marginal contribution to
welfare net of the externality it imposes on the rest of the coalition
([Vickrey, 1961](https://arxiv.org/html/2608.07532v1#bib.bib5); [Clarke, 1971](https://arxiv.org/html/2608.07532v1#bib.bib6); [Groves, 1973](https://arxiv.org/html/2608.07532v1#bib.bib7)) – would
make truthful valuation reporting a dominant strategy, aligning $u\_{i}$ with $W$ at the
margin. Whether an analogous result can be obtained using *noisy, estimated*
Shapley-based contribution values $\hat{\phi}\_{i}$ in a real LLM-agent setting – where
welfare is not exactly maximized, valuations are not quasilinear, and payments would
be based on an approximate credit-assignment signal rather than exact marginal
welfare – remains open. We do not claim the idealized guarantee transfers; VCG
mechanisms are also generally not budget-balanced, which is a separate obstacle to
direct implementation. We view the idealized mechanism only as the right
*target* to approximate, and a natural direction for follow-up work
combining Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")’s online Shapley estimator with an explicit
payment or reward-shaping rule.

## 9 Extension: Dynamic Coalition Formation (Future Work)

We flag, but do not develop or validate, one further extension. Coalitions plausibly
should change during task execution rather than being fixed at the outset. Let the
state at time $t$ be $s\_{t}=(\text{task progress},\text{agent
outputs},\text{confidence},\text{remaining budget},\text{disagreement})$, and let
the action be $a\_{t}=(\text{active coalition},\text{communication links},\text{message content},\text{next agent})$. A dynamic objective is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\max\_{\pi}\;\mathbb{E}\_{\pi}\!\left[\sum\_{t=0}^{T}\gamma^{t}(r\_{t}-c\_{t})\right],$$ |  | (17) |

learned with multi-agent reinforcement learning, where the static cooperative game of
Sections [3](https://arxiv.org/html/2608.07532v1#S3 "3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")–[8](https://arxiv.org/html/2608.07532v1#S8 "8 Local Utility, System Welfare, and Incentive Alignment ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") supplies the per-step reward
shaping and credit assignment ($r\_{t}$ derived from $U(\cdot\mid x)$, already net of
per-agent activation cost, and $c\_{t}$ from the communication costs). We flag this extension as substantially harder
than static coalition selection – it compounds the credit-assignment problem across
a sequence of coalition changes – and we treat it as a natural but separate line of
future work (Section [11](https://arxiv.org/html/2608.07532v1#S11 "11 Limitations ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) rather than a claim validated in this
paper.

## 10 Illustrative Simulation

To sanity-check the framework before committing to a full empirical study with real
LLM agents, we instantiate Equation ([1](https://arxiv.org/html/2608.07532v1#S3.E1 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) in a controlled synthetic setting.

#### Setup.

We generate $N=8$ candidate agents, each with a competence
vector over $K=6$ latent skill dimensions in $[0,1]$. Each agent has one primary
skill drawn with competence in $[0.85,1.0]$, and, with probability $0.5$, a
secondary skill with competence in $[0.5,0.8]$; competence on all other dimensions is
low ($[0.05,0.35]$), reflecting the planner/coder/search/critic/security archetype of
Section [3](https://arxiv.org/html/2608.07532v1#S3 "3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"). We generate $500$ synthetic tasks, each with a random
skill-demand vector drawn from a Dirichlet distribution over the $K$ dimensions.
Coalition quality is a saturating function of how well the coalition’s best-per-skill
competence covers the task’s demand,
$Q(C,x)=1-\exp(-2.2\cdot\text{coverage}(C,x))$, where
$\text{coverage}(C,x)=\sum\_{k}\max\_{i\in C}\text{skill}\_{i}(k)\cdot\text{demand}(k)/\sum\_{k}\text{demand}(k)$. Consistent with Equation ([1](https://arxiv.org/html/2608.07532v1#S3.E1 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), $V(C,x)=Q(C,x)-\lambda\_{4}D(C,x)$ excludes token/compute cost entirely: $\lambda\_{2}L$ and $\lambda\_{3}R$
are set to zero in this simplified instantiation, and the redundancy term grows
quadratically in coalition size, normalized by the number of agent pairs
($\lambda\_{4}D(C,x)=0.16\cdot\binom{|C|}{2}/\binom{N}{2}$). The *only* place
token/compute cost enters is the per-agent activation price $c\_{i}=0.05$ (uniform
across agents), applied exactly once via $U(C\mid x)=V(C\mid x)-\sum\_{i\in C}c\_{i}$
(Equation [2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")); no other cost term duplicates it.

#### Policies compared.

(i) *Grand coalition*: activate all $N$ agents.
(ii) *Random coalition*: activate a uniformly random subset. (iii)
*Greedy marginal-value router* (Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), our proposal, with
activation cost $c\_{i}=0.05$ applied uniformly (Section [3](https://arxiv.org/html/2608.07532v1#S3 "3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")). (iv)
*Brute-force optimum*: exhaustive search over
all $2^{8}=256$ coalitions (tractable at this scale, and used only as an upper-bound
reference – not a proposal for deployment, since it does not scale to realistic
agent-pool sizes). All four policies are scored on the same objective, the full net
utility $U(C\mid x)=V(C\mid x)-\sum\_{i\in C}c\_{i}$ from Equation ([2](https://arxiv.org/html/2608.07532v1#S3.E2 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")),
so that comparisons across policies are on equal footing.

Table 1: Mean utility and coalition size across $500$ synthetic tasks. Greedy
marginal-value routing recovers $99.5\%$ of brute-force-optimal utility while
activating $78\%$ fewer agents, on average, than the grand coalition.

| Policy | Mean utility $U(C\mid x)$ | Mean $|C|$ | % of optimal utility |
| --- | --- | --- | --- |
| Grand coalition (broadcast all) | $0.262$ | $8.00$ | $38.8\%$ |
| Random coalition | $0.453$ | $4.46$ | $67.1\%$ |
| Greedy marginal-value (proposed) | $\mathbf{0.671}$ | $\mathbf{1.96}$ | $\mathbf{99.5\%}$ |
| Brute-force optimum (upper bound) | $0.675$ | $1.97$ | $100.0\%$ |


GrandRandomGreedyOptimal$0$$0.2$$0.4$$0.6$$0.8$$0.26$$0.45$$0.67$$0.68$Mean utility $U(C\mid x)$(a) Utility by coalition policy

GrandRandomGreedyOptimal$0$$2$$4$$6$$8$$8$$4.46$$1.96$$1.97$Mean coalition size $|C|$(b) Agents activated per task

Figure 2: (a) Mean task utility and (b) mean number of agents activated, by coalition
policy, over $500$ synthetic tasks. The greedy marginal-value router
(Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) nearly matches the brute-force optimum in utility while
using far fewer agents than full broadcast.

#### Results.

Table [1](https://arxiv.org/html/2608.07532v1#S10.T1 "Table 1 ‣ Policies compared. ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") and Figure [2](https://arxiv.org/html/2608.07532v1#S10.F2 "Figure 2 ‣ Policies compared. ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") summarize
the outcome. The grand coalition performs worst despite activating every agent: at
this cost setting, redundant agents actively subtract value through the compute and
redundancy penalties, so full broadcast captures only $38.8\%$ of the utility a
well-chosen coalition achieves. The greedy marginal-value router
(Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) selects the exact brute-force-optimal coalition on
$74.0\%$ of tasks, and achieves $99.5\%$ of optimal utility on average, while
activating only $1.96$ agents per task versus $1.97$ for the true optimum and $8.00$
for full broadcast. This is consistent with the submodular-optimization connection
in Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"): greedy addition performs far better in this instance
than the $1/2$ worst-case bound for unconstrained submodular maximization
([Buchbinder et al., 2015](https://arxiv.org/html/2608.07532v1#bib.bib25)), though we note this is an empirical observation on one
synthetic family of instances, not a general guarantee.

#### Shapley accuracy check.

For a representative task, we compute the
*exact* Shapley value for all $8$ agents (feasible via the subset-sum formula at
this scale: $2^{8}=256$ coalitions) and compare it against a Monte Carlo estimate using
$3{,}000$ random-permutation samples per agent. The estimated and exact values agree
to within $0.005$ for every agent (mean absolute error $0.0028$, max $0.0046$), and a
repeated-sampling experiment ($30$ independent runs of $500$ permutations each) gives
a Monte Carlo standard error of about $0.007$ per agent, confirming the estimator is
accurate at this sample size. Separately, $\sum\_{i}\hat{\phi}\_{i}=0.2239$ matches
$U(N)=0.2239$ to four decimal places; this is the efficiency *identity*
($\sum\_{i}\phi\_{i}=U(N)$ holds exactly for the true Shapley value by definition, and
holds up to floating-point precision for a Monte Carlo estimate that shares sampled
permutations across agents, because per-permutation marginal contributions telescope
to $U(N)-U(\emptyset)$) rather than independent evidence of estimator accuracy –
we report it only as a sanity check that the implementation is internally consistent,
not as a validation of Monte Carlo accuracy, which is established separately by the
exact-value comparison above. Agents whose primary skill matched a high-demand
dimension for that task received Shapley values roughly an order of magnitude larger
than agents whose skills were largely redundant with a stronger teammate – the
qualitative behavior the credit-assignment mechanism of Section [6](https://arxiv.org/html/2608.07532v1#S6 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") is
meant to produce.

#### Sandwich-bound check.

For the same task, we compute each agent’s
diminishing-returns gap $\Gamma\_{i}(x)$ (Equation [14](https://arxiv.org/html/2608.07532v1#S6.E14 "In Corollary 2 (Bounded routing gap). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) and compare it against
the realized gap $|\Delta\_{i}U(C,x)-\phi\_{i}(U)|$ between the marginal contribution to
the full net utility (evaluated at the point Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") considers
agent $i$, using the exact Shapley value) and its fair credit. Corollary [2](https://arxiv.org/html/2608.07532v1#Thmcorollary2 "Corollary 2 (Bounded routing gap). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
predicts $|\Delta\_{i}U(C,x)-\phi\_{i}(U)|\leq\Gamma\_{i}(x)$ for every agent; this held
for all $8$ agents in the example ($0/8$ violations), with realized gaps ranging from
$0.014$ to $0.496$ against bounds ranging from $0.463$ to $0.653$ – consistent with
the bound being correct but, as expected for a worst-case guarantee, not tight for
every agent.

### 10.1 Sensitivity analysis

The result above is measured on one specific data-generating process –
specialized, low-overlap agents with a saturating quality function, linear
activation cost, and a quadratic redundancy penalty – which was chosen because it
matches the running planner/coder/critic/security example, but which also
structurally favors small, non-redundant coalitions and is therefore favorable to our
method almost by construction. To assess how much of the $99.5\%$ result is a
property of Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") versus a property of this particular instance, we sweep
five parameters, holding $500\to 200$ tasks per setting (reduced for the sweep to
keep total runtime reasonable) and reporting greedy utility as a percentage of the
brute-force optimum under each setting.

Table 2: Sensitivity of greedy performance (as % of brute-force-optimal utility) to
five parameters, each varied while holding the others at their Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
default. The submodularity-violation and estimation-noise sweeps are the most
informative: greedy degrades substantially once its core assumptions
(submodularity of $V$; accurate value estimates) are violated, while it is robust to
the other three axes.

| Sweep | Greedy utility as % of brute-force optimum |
| --- | --- |
| Skill overlap ($0\!\to\!1$, specialized $\to$ homogeneous) | $99.5,\ 99.9,\ 100.0,\ 100.0,\ 100.0$ (monotonically improves) |
| Submodularity violation $\beta$ ($0\!\to\!0.8$, synergy bonus) | $99.6,\ 94.9,\ 80.2,\ 66.1,\ 68.4,\ 70.5$ (*substantial degradation*) |
| Value-estimation noise $\sigma$ ($0\!\to\!0.4$) | $99.5,\ 97.7,\ 94.9,\ 89.9,\ 86.2,\ 79.2$ (*steady degradation*) |
| Activation cost $c\_{i}$ ($0\!\to\!0.4$) | $99.8,\ 99.5,\ 99.5,\ 99.9,\ 100.0,\ 100.0$ (robust) |
| Redundancy weight $\lambda\_{4}$ ($0\!\to\!0.8$) | $99.6,\ 99.7,\ 99.5,\ 99.7,\ 99.8,\ 99.7$ (robust) |


$0$$0.2$$0.4$$0.6$$0.8$$60$$70$$80$$90$$100$Submodularity-violation strength $\beta$Greedy % of optimum(a) Effect of violating submodularity

$0$$0.1$$0.2$$0.3$$0.4$$60$$70$$80$$90$$100$Value-estimation noise $\sigma$Greedy % of optimum(b) Effect of noisy value estimates

Figure 3: The two axes along which greedy marginal-value routing degrades
substantially: (a) introducing pairwise synergy bonuses that violate the
diminishing-returns assumption underlying Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), and (b)
adding noise to the value estimates the router uses to make decisions (while
scoring the resulting coalition on the true, noise-free value). Both are exactly
the failure modes Corollary [2](https://arxiv.org/html/2608.07532v1#Thmcorollary2 "Corollary 2 (Bounded routing gap). ‣ 6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") and Remark [1](https://arxiv.org/html/2608.07532v1#Thmremark1 "Remark 1 (Robustness to approximate submodularity). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")
anticipate: greedy is only as good as the submodularity of $V$ and the accuracy
of its value estimates.

Three parameters – skill overlap, activation cost, and redundancy weight – leave
greedy’s performance essentially unchanged (all $\geq 99.5\%$ of optimal across the
full sweep range), indicating the headline result is not narrowly tuned to one
choice of these values. The other two, shown in Figure [3](https://arxiv.org/html/2608.07532v1#S10.F3 "Figure 3 ‣ 10.1 Sensitivity analysis ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), are
where greedy genuinely breaks down: (a) as we inject a pairwise synergy bonus that
rewards specific agent pairs for being *jointly* present (violating the
diminishing-returns assumption that makes $V$ submodular), greedy’s performance falls
from $99.6\%$ to as low as $66$–$70\%$ of optimal, because greedy’s single-agent
marginal-value criterion cannot detect that two specific agents are worth more
together than the sum of their individual marginal contributions; (b) as we add noise
to the value estimate the router uses to make its decision (while scoring the
resulting coalition on the true, noise-free value), performance degrades smoothly from
$99.5\%$ at zero noise to $79.2\%$ at a noise standard deviation of $0.4$ (comparable
in scale to the marginal contributions themselves), showing the router’s exact-match
rate with the optimum collapses much faster ($87.5\%\to 3.5\%$) than its utility
does, because near-ties in marginal value become easy to flip under noise even when
the resulting utility loss is small. We view these two sweeps – not the single-point
$99.5\%$ headline number – as the more informative characterization of the method:
Algorithm [1](https://arxiv.org/html/2608.07532v1#alg1 "Algorithm 1 ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") is a strong choice when $V$ is close to submodular and
reasonably well estimated, and a real deployment should monitor both properties (e.g. via the curvature diagnostic $\hat{\alpha}\_{Q}$ of Section [5.2](https://arxiv.org/html/2608.07532v1#S5.SS2 "5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") and
the per-agent gaps $\Gamma\_{i}$ of Section [6.1](https://arxiv.org/html/2608.07532v1#S6.SS1 "6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) rather than assume they
hold.

### 10.2 A concrete empirical validation protocol

The simulation above establishes that the optimization problem is well-posed and that
greedy routing is competitive with the optimum *given* a characteristic
function of this form. It does not establish that Equation ([1](https://arxiv.org/html/2608.07532v1#S3.E1 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) is a good
model of real LLM agent quality, nor that the framework improves real pipelines. We
propose the following protocol for a follow-up empirical study:

1. 1.

   Tasks and agent pool. Use an existing multi-agent benchmark with a
   heterogeneous agent pool, e.g., software engineering tasks (SWE-bench-style, using
   planner/coder/critic/security agents) and multi-hop question answering (using
   planner/retriever/critic agents), so that skill complementarity is task-dependent.
2. 2.

   Estimating $Q(C,x)$. Approximate $Q$ with a learned or LLM-judge
   quality estimator, calibrated against ground-truth task success where available
   (e.g., unit-test pass rate for coding tasks), following the estimator-design
   choices used in comparable LLM-routing work ([Ong et al., 2024](https://arxiv.org/html/2608.07532v1#bib.bib17); [Yue et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib15)).
3. 3.

   Baselines. Compare the greedy marginal-value router against (a) a
   fixed dense-communication baseline, (b) a fixed hand-designed pipeline, (c) an
   existing learned multi-agent router such as MasRouter ([Yue et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib15)) or
   AgentPrune-style edge pruning ([Zhang et al., 2025](https://arxiv.org/html/2608.07532v1#bib.bib13)).
4. 4.

   Metrics. Task success rate, total token cost, wall-clock latency, and
   – specific to this framework – the correlation between predicted Shapley
   estimates $\hat{\phi}\_{i,t}(U)$ (Equation [11](https://arxiv.org/html/2608.07532v1#S6.E11 "In 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) and realized,
   post-hoc Shapley values, to test whether the online credit predictor is well
   calibrated.

We view this protocol, rather than the synthetic simulation, as the appropriate
standard for claiming a real-world improvement, and we leave its execution to future
work.

## 11 Limitations

Several limitations bound the current contribution. First, estimating $U(C\mid x)$
for every candidate coalition is combinatorially expensive in principle
($2^{n}$ coalitions); our greedy procedure and the submodularity connection
(Section [5](https://arxiv.org/html/2608.07532v1#S5 "5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) are proposed mitigations, but a full treatment requires
either a learned value-function approximator or a principled restriction to a small
lattice of plausible coalitions, neither of which we implement here. Second, every
guarantee in Sections [5.2](https://arxiv.org/html/2608.07532v1#S5.SS2 "5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") and [6.1](https://arxiv.org/html/2608.07532v1#S6.SS1 "6.1 A theoretical bound on agent contribution: the Shapley–submodularity sandwich ‣ 6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") –
the curvature bound, the double-greedy bound, and the Shapley–submodularity
sandwich – assumes $U(\cdot\mid x)$ (or, for the curvature bound, $Q$) is exactly
submodular; real agent-quality functions may violate diminishing returns locally
(e.g., two verifier agents can be strictly complementary rather than redundant on
some tasks), and while Remark [1](https://arxiv.org/html/2608.07532v1#Thmremark1 "Remark 1 (Robustness to approximate submodularity). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") sketches how the guarantees
degrade gracefully under approximate submodularity via the submodularity ratio
([Das and Kempe, 2011](https://arxiv.org/html/2608.07532v1#bib.bib23)), we do not estimate this ratio empirically here (though the
sensitivity sweep in Section [10.1](https://arxiv.org/html/2608.07532v1#S10.SS1 "10.1 Sensitivity analysis ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") does show, empirically, how
performance degrades as submodularity is violated by an increasing synergy bonus).
Third, the Shapley value’s classical fairness axioms additionally assume well-behaved
(e.g., superadditive) value functions for the core-stability results specifically;
once redundancy and conflict penalties are included, $U$ need not be superadditive,
and Section [7](https://arxiv.org/html/2608.07532v1#S7 "7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") shows that core-stability guarantees only transfer to
a restricted sub-domain – characterizing stability for the general case remains
open. Fourth, the
mechanism-design discussion in Section [8](https://arxiv.org/html/2608.07532v1#S8 "8 Local Utility, System Welfare, and Incentive Alignment ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") sketches a VCG-style target
rather than a fully specified, budget-balanced mechanism; making it concrete for LLM
agents with noisy, self-reported confidence is nontrivial. Fifth, the dynamic
extension (Section [9](https://arxiv.org/html/2608.07532v1#S9 "9 Extension: Dynamic Coalition Formation (Future Work) ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")) compounds credit assignment across a sequence of
coalition changes and is substantially harder than the static problem; we present it
as a direction, not a validated method. Finally, and most importantly, Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") is a
synthetic, controlled simulation intended to validate the optimization problem’s
structure, not a claim of improvement on real multi-agent LLM pipelines; we regard
the protocol in Section [10.2](https://arxiv.org/html/2608.07532v1#S10.SS2 "10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") as necessary before any deployment claim.

## 12 Conclusion

We formalized agent coalition formation and communication in agentic AI systems as a
cooperative game in which every message, skill activation, and coalition membership
must be justified by its expected marginal contribution net of cost. This
reformulation connects three previously separate concerns – which agents to
activate, how they should communicate, and how to assign credit for what they
produced – within a single characteristic function, and lets us bring stability and
incentive-alignment tools from cooperative game theory and mechanism design to bear
on agent orchestration. A controlled synthetic simulation shows the resulting
optimization problem is tractable in practice via a simple greedy heuristic, which
nearly matches a brute-force optimum while using a small fraction of the agents a
full-broadcast architecture would use. The central open question is empirical:
whether a characteristic function of the form in Equation ([1](https://arxiv.org/html/2608.07532v1#S3.E1 "In 3 Basic Formulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems")), estimated
from real task and agent data, yields routing and communication decisions that
improve real multi-agent LLM systems along the protocol proposed in
Section [10.2](https://arxiv.org/html/2608.07532v1#S10.SS2 "10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"). More agents, and more messages, do not automatically
create more net intelligence; the goal of this framework is to make that trade-off
explicit and optimizable.

## Reproducibility

The synthetic simulation in Section [10](https://arxiv.org/html/2608.07532v1#S10 "10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") (agent generation, task
sampling, greedy router, brute-force search, exact and Monte Carlo Shapley
computation, and the sandwich-bound check) and the sensitivity analysis in
Section [10.1](https://arxiv.org/html/2608.07532v1#S10.SS1 "10.1 Sensitivity analysis ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems") are released as supplementary code alongside this
submission (sim.py and sim\_sensitivity.py), with a fixed random
seed for exact reproducibility of every number reported in the paper. Code for the
empirical validation protocol in Section [10.2](https://arxiv.org/html/2608.07532v1#S10.SS2 "10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"), which requires access
to real LLM agent APIs, is left for the follow-up study that protocol describes.

## References

- Bogomolnaia and Jackson (2002)
  A. Bogomolnaia and M. O. Jackson
  The stability of hedonic coalition structures.
  Games and Economic Behavior 38 (2), pp. 201–230.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§7](https://arxiv.org/html/2608.07532v1#S7.p1.1 "7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Buchbinder et al. (2015)
  N. Buchbinder, M. Feldman, J. Naor, and R. Schwartz
  A tight linear time (1/2)-approximation for unconstrained submodular maximization.
  SIAM Journal on Computing 44 (5), pp. 1384–1402.
  Cited by: [item 2](https://arxiv.org/html/2608.07532v1#S1.I1.i2.p1.1 "In Core contributions. ‣ 1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§10](https://arxiv.org/html/2608.07532v1#S10.SS0.SSS0.Px3.p1.1 "Results. ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Proposition 2](https://arxiv.org/html/2608.07532v1#Thmproposition2 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Proposition 2](https://arxiv.org/html/2608.07532v1#Thmproposition2.p1.1.1 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Algorithm 2](https://arxiv.org/html/2608.07532v1#alg2 "In Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Cemri et al. (2025)
  M. Cemri, M. Z. Pan, S. Yan, T. Yang, J. E. Gonzalez, I. Stoica, et al.
  Why do multi-agent LLM systems fail?.
  arXiv preprint arXiv:2503.13657.
  Cited by: [§1](https://arxiv.org/html/2608.07532v1#S1.p1.1 "1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Chen et al. (2023)
  L. Chen, M. Zaharia, and J. Zou
  FrugalGPT: how to use large language models while reducing cost and improving performance.
  arXiv preprint arXiv:2305.05176.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px2.p1.1 "LLM and multi-agent routing. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Clarke (1971)
  E. H. Clarke
  Multipart pricing of public goods.
  Public Choice 11 (1), pp. 17–33.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§8](https://arxiv.org/html/2608.07532v1#S8.p1.3 "8 Local Utility, System Welfare, and Incentive Alignment ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Conforti and Cornuéjols (1984)
  M. Conforti and G. Cornuéjols
  Submodular set functions, matroids and the greedy algorithm: tight worst-case bounds and some generalizations of the Rado-Edmonds theorem.
  Discrete Applied Mathematics 7 (3), pp. 251–274.
  Cited by: [item 2](https://arxiv.org/html/2608.07532v1#S1.I1.i2.p1.1 "In Core contributions. ‣ 1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Proposition 1](https://arxiv.org/html/2608.07532v1#Thmproposition1.p1.2.1 "Proposition 1 (Curvature-refined greedy bound). ‣ Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Das and Kempe (2011)
  A. Das and D. Kempe
  Submodular meets spectral: greedy algorithms for subset selection, sparse approximation and dictionary selection.
  In Proceedings of the 28th International Conference on Machine Learning (ICML),
  Cited by: [§11](https://arxiv.org/html/2608.07532v1#S11.p1.1 "11 Limitations ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Remark 1](https://arxiv.org/html/2608.07532v1#Thmremark1.p1.1.1 "Remark 1 (Robustness to approximate submodularity). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Drèze and Greenberg (1980)
  J. H. Drèze and J. Greenberg
  Hedonic coalitions: optimality and stability.
  Econometrica 48 (4), pp. 987–1003.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§7](https://arxiv.org/html/2608.07532v1#S7.p1.1 "7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Feige et al. (2011)
  U. Feige, V. S. Mirrokni, and J. Vondrák
  Maximizing non-monotone submodular functions.
  SIAM Journal on Computing 40 (4), pp. 1133–1153.
  Cited by: [Proposition 2](https://arxiv.org/html/2608.07532v1#Thmproposition2.p1.1.1 "Proposition 2 (Tight unconstrained bound for non-negative submodular functions ( , )). ‣ Unconstrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Gillies (1959)
  D. B. Gillies
  Solutions to general non-zero-sum games.
  Annals of Mathematics Studies, Vol. 40, Princeton University Press.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Definition 1](https://arxiv.org/html/2608.07532v1#Thmdefinition1.p1.1.1 "Definition 1 (Core stability). ‣ 7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Gou and Liu (2026)
  W. Gou and Z. Liu
  Dynamic trust-aware sparse communication topology for LLM-based multi-agent consensus.
  arXiv preprint arXiv:2606.01828.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px1.p1.1 "Communication-efficient multi-agent LLM systems. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Groves (1973)
  T. Groves
  Incentives in teams.
  Econometrica 41 (4), pp. 617–631.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§8](https://arxiv.org/html/2608.07532v1#S8.p1.3 "8 Local Utility, System Welfare, and Incentive Alignment ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Guo et al. (2026)
  D. Guo, J. Wu, and S. Yiu
  Coalition formation in LLM agent networks: stability analysis and convergence guarantees.
  arXiv preprint arXiv:2604.14386.
  Cited by: [§1](https://arxiv.org/html/2608.07532v1#S1.SS0.SSS0.Px2.p2.1 "Extensions (not primary contributions). ‣ 1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px3.p1.1 "Cooperative game theory for LLM agents. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [Remark 2](https://arxiv.org/html/2608.07532v1#Thmremark2.p1.1.1 "Remark 2 (Why the classical convex-game result does not transfer). ‣ 7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Guo et al. (2024)
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang
  Large language model based multi-agents: a survey of progress and challenges.
  arXiv preprint arXiv:2402.01680.
  Cited by: [§1](https://arxiv.org/html/2608.07532v1#S1.p1.1 "1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Hua et al. (2025)
  Y. Hua, H. Chen, S. Wang, W. Li, X. Wang, and J. Luo
  Shapley-coop: credit assignment for emergent cooperation in self-interested llm agents.
  arXiv preprint arXiv:2506.07388.
  Cited by: [item 3](https://arxiv.org/html/2608.07532v1#S1.I1.i3.p1.1 "In Core contributions. ‣ 1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px3.p1.1 "Cooperative game theory for LLM agents. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§6](https://arxiv.org/html/2608.07532v1#S6.p1.2 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Nemhauser et al. (1978)
  G. L. Nemhauser, L. A. Wolsey, and M. L. Fisher
  An analysis of approximations for maximizing submodular set functions—I.
  Mathematical Programming 14 (1), pp. 265–294.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§5.2](https://arxiv.org/html/2608.07532v1#S5.SS2.SSS0.Px1.p1.1 "Cardinality-constrained regime. ‣ 5.2 Approximation guarantees ‣ 5 Marginal Value and a Greedy Activation Rule ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Ong et al. (2024)
  I. Ong, A. Almahairi, V. Wu, W. Chiang, T. Wu, J. E. Gonzalez, M. W. Kadous, and I. Stoica
  RouteLLM: learning to route LLMs with preference data.
  arXiv preprint arXiv:2406.18665.
  Cited by: [item 2](https://arxiv.org/html/2608.07532v1#S10.I1.i2.p1.1 "In 10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px2.p1.1 "LLM and multi-agent routing. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Qian et al. (2025)
  C. Qian, Z. Liu, S. Kokane, A. Prabhakar, J. Qiu, H. Chen, Z. Liu, H. Ji, W. Yao, S. Heinecke, et al.
  xRouter: training cost-aware LLMs orchestration system via reinforcement learning.
  arXiv preprint arXiv:2510.08439.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px2.p1.1 "LLM and multi-agent routing. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Shapley (1953)
  L. S. Shapley
  A value for n-person games.
  Contributions to the Theory of Games 2 (28), pp. 307–317.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§6](https://arxiv.org/html/2608.07532v1#S6.p1.2 "6 Online Credit Assignment with Shapley Values ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Shapley (1971)
  L. S. Shapley
  Cores of convex games.
  International Journal of Game Theory 1 (1), pp. 11–26.
  Cited by: [Remark 2](https://arxiv.org/html/2608.07532v1#Thmremark2.p1.1.1 "Remark 2 (Why the classical convex-game result does not transfer). ‣ 7 Coalition Stability ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Vickrey (1961)
  W. Vickrey
  Counterspeculation, auctions, and competitive sealed tenders.
  The Journal of Finance 16 (1), pp. 8–37.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px4.p1.1 "Foundations. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§8](https://arxiv.org/html/2608.07532v1#S8.p1.3 "8 Local Utility, System Welfare, and Incentive Alignment ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Wang et al. (2025)
  J. Wang, S. Zhao, H. Wang, Y. Fan, L. Zhang, Y. Liu, and T. Liu
  Optimal-agent-selection: state-aware routing framework for efficient multi-agent collaboration.
  arXiv preprint arXiv:2511.02200.
  Cited by: [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px2.p1.1 "LLM and multi-agent routing. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Yue et al. (2025)
  Y. Yue, G. Zhang, B. Liu, G. Wan, K. Wang, D. Cheng, and Y. Qi
  MasRouter: learning to route LLMs for multi-agent systems.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL),
  Cited by: [item 2](https://arxiv.org/html/2608.07532v1#S10.I1.i2.p1.1 "In 10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [item 3](https://arxiv.org/html/2608.07532v1#S10.I1.i3.p1.1 "In 10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px2.p1.1 "LLM and multi-agent routing. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Zhang et al. (2025)
  G. Zhang, Y. Yue, Z. Sun, G. Wan, M. Yu, J. Fang, K. Wang, and D. Cheng
  Cut the crap: an economical communication pipeline for llm-based multi-agent systems.
  arXiv preprint arXiv:2410.02506.
  Cited by: [§1](https://arxiv.org/html/2608.07532v1#S1.p1.1 "1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [item 3](https://arxiv.org/html/2608.07532v1#S10.I1.i3.p1.1 "In 10.2 A concrete empirical validation protocol ‣ 10 Illustrative Simulation ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px1.p1.1 "Communication-efficient multi-agent LLM systems. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
- Zhuge et al. (2024)
  M. Zhuge, W. Wang, L. Kirsch, F. Faccio, J. Schmidhuber, et al.
  GPTSwarm: language agents as optimizable graphs.
  In Proceedings of the 41st International Conference on Machine Learning (ICML),
  Cited by: [§1](https://arxiv.org/html/2608.07532v1#S1.p1.1 "1 Introduction ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems"),
  [§2](https://arxiv.org/html/2608.07532v1#S2.SS0.SSS0.Px1.p1.1 "Communication-efficient multi-agent LLM systems. ‣ 2 Related Work ‣ Dynamic Coalition Formation and Communication Pricingin Skill-Based Agentic AI Systems").
