---
id: arxiv-2605-11453-text
type: material
title: 'Predictive Maps of Multi-Agent Reasoning: A Successor-Representation Spectrum for LLM Communication Topologies'
work_id: arxiv-2605-11453
source_url: https://arxiv.org/html/2605.11453v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 4683148d71326396af2172743a5f3eae7b594f92e9647821a81202018620995c
---

> Источник: [https://arxiv.org/html/2605.11453v2](https://arxiv.org/html/2605.11453v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Predictive Maps of Multi-Agent Reasoning: A Successor-Representation Spectrum for LLM Communication Topologies

Ethan Parks
Email: [edparks@arizona.edu](mailto:)
Affiliation: University of Arizona
  
Dalal Alharthi
Email: [dalharthi@arizona.edu](mailto:)
Affiliation: University of Arizona

###### Abstract

Practitioners deploying multi-agent large language model (LLM) systems must currently choose between communication topologies (chain, star, mesh, and richer variants) without any pre-inference diagnostic for which topology will amplify drift, converge to consensus, or remain robust under perturbation. Existing evaluation answers these questions only post hoc and only for the task measured. We introduce a structural diagnostic for multi-agent LLM communication graphs based on the successor representation $M=(I-\gamma P)^{-1}$ of the row-stochastic communication operator, and we connect three of its spectral quantities, the spectral radius $\rho(M)$, the spectral gap $\Delta(M)$, and the condition number $\kappa(M)$, to three distinct failure modes. We derive closed-form spectra for the chain, star, and mesh under row-stochastic normalization, and validate the predictions on a 12-step structured state-tracking task with Qwen2.5-7B-Instruct over 100 independent trials. The condition number is a perfect rank-order predictor of empirical perturbation robustness ($r\_{s}=1.0$); the spectral gap partially predicts consensus dynamics ($r\_{s}=0.5$); and the spectral radius is perfectly *inverted* with respect to cumulative error ($r\_{s}=-1.0$). We trace this inversion to a regime in which linear spectra are blind to non-contracting bias drift, and we propose an affine-noise extension of the predictive map that recovers the empirical ordering. We read this as a first step toward representational, drift-aware structural diagnostics for multi-agent LLM systems, sitting alongside classical spectral and consensus theory.

## 1 Introduction

A recurring lesson across cognitive science, reinforcement learning, and systems neuroscience is that intelligent behavior is shaped as much by the *structure of representation* as by the computations that operate over it [[1](https://arxiv.org/html/2605.11453v2#bib.bib3), [2](https://arxiv.org/html/2605.11453v2#bib.bib2)]. An agent that carries a predictive map of its environment reasons differently from one that does not, even when both have access to the same local transitions. We bring this lens to a setting in which it has rarely been applied: multi-agent LLM systems, where a handful of language model instances exchange intermediate state through a fixed communication graph [[3](https://arxiv.org/html/2605.11453v2#bib.bib4), [4](https://arxiv.org/html/2605.11453v2#bib.bib6), [5](https://arxiv.org/html/2605.11453v2#bib.bib7), [6](https://arxiv.org/html/2605.11453v2#bib.bib8), [7](https://arxiv.org/html/2605.11453v2#bib.bib9), [8](https://arxiv.org/html/2605.11453v2#bib.bib10)]. The graph is the structure. Our question is whether an appropriate representation of that structure, taken before any inference is run, can predict how the system will reason.

The practical motivation is concrete. A designer choosing between a 12-agent chain, a judge-and-leaves star, or a peer-deliberating mesh currently has no principled diagnostic for the question *which topology amplifies drift, which converges to consensus, and which is brittle under perturbation*. Existing evaluation protocols answer these questions only after the pipeline has been executed, and only for the specific task measured [[9](https://arxiv.org/html/2605.11453v2#bib.bib14), [10](https://arxiv.org/html/2605.11453v2#bib.bib12), [11](https://arxiv.org/html/2605.11453v2#bib.bib13)]. A structural diagnostic would close this loop, in the same spirit in which predictive maps close the loop between a transition structure and the behavior it supports.

We model a multi-agent LLM system as a directed graph whose nodes are agents and whose edges are information-passing channels, and we treat the row-normalized adjacency as a stochastic transition operator $P$. The successor representation $M=(I-\gamma P)^{-1}$, introduced in reinforcement learning by [Dayan [12]](https://arxiv.org/html/2605.11453v2#bib.bib1) and subsequently shown in computational neuroscience to describe a predictive cognitive map in hippocampal circuits [[1](https://arxiv.org/html/2605.11453v2#bib.bib3), [2](https://arxiv.org/html/2605.11453v2#bib.bib2)], compresses all multi-step influence pathways into a single linear operator. Its eigenspectrum offers three scalar summaries with distinct mechanistic meaning: the spectral radius $\rho(M)$, the spectral gap $\Delta(M)$, and the condition number $\kappa(M)$. Each admits a hypothesis about a different failure mode of reasoning.

We study three canonical topologies, chain, star, and mesh, on a 12-step structured state-tracking task with Qwen2.5-7B-Instruct. The condition number rank-predicts empirical perturbation robustness perfectly; the spectral gap partially tracks consensus dynamics; and the spectral radius is *anti-correlated* with cumulative error. The last finding is not a numerical artifact. It is a gap between the linear notion of stability that spectra encode and the sequential-drift notion of stability that LLM reasoning actually requires. The chain, which is maximally stable in the linear sense, licenses a monotone drift because each agent’s small non-zero bias is handed forward without averaging. Star and mesh topologies include aggregation steps that function as implicit averaging and suppress the drift. We call this the *stability paradox*, and we argue that it motivates a class of representational, drift-aware diagnostics that sit alongside classical spectral ones.

We are explicit that this is a case study. A single model family, one task family, three topologies, and 100 trials per condition do not establish a universal law, and a Spearman coefficient over three ranks carries, by construction, very little statistical weight. What we offer is a framework with derivable predictions and a first set of controlled experiments that instantiate it.

Our contributions are as follows. We formalize multi-agent LLM systems as row-stochastic communication graphs and introduce a successor-representation spectral diagnostic that compresses multi-step influence pathways into three scalar quantities. We derive closed-form spectra for the chain, star, and mesh topologies and pair each spectral quantity with a falsifiable empirical metric. We report a controlled study on a 12-step structured state-tracking task and find that the condition number perfectly rank-orders perturbation robustness, the spectral gap partially tracks consensus dynamics, and the spectral radius is exactly inverted with respect to cumulative error. We give a theoretical explanation of the inversion in terms of an affine-noise model in which each agent contributes iid noise that is reduced by aggregation but accumulated under sequential composition, and we show that the resulting drift-corrected gain rank-orders the empirical cumulative error correctly. We release task, code, and model configuration for reproduction. Taken together, these results convert topology selection from a post-hoc empirical question into a closed-form linear-algebraic one: given a candidate communication graph, three eigenvalue computations on $M=(I-\gamma P)^{-1}$ rank-order it against alternatives on drift, consensus, and adversarial sensitivity before a single token is generated.

## 2 Related Work

Multi-agent LLM systems. A growing body of work composes
multiple LLM calls into explicit reasoning graphs: chain-of-thought
prompting established linear intermediate reasoning [[3](https://arxiv.org/html/2605.11453v2#bib.bib4)];
tree- and graph-of-thought generalized it to branching and merging
[[13](https://arxiv.org/html/2605.11453v2#bib.bib5), [4](https://arxiv.org/html/2605.11453v2#bib.bib6)]; debate, peer critique, and judge
aggregation introduced multi-agent deliberation
[[5](https://arxiv.org/html/2605.11453v2#bib.bib7), [6](https://arxiv.org/html/2605.11453v2#bib.bib8), [14](https://arxiv.org/html/2605.11453v2#bib.bib11), [15](https://arxiv.org/html/2605.11453v2#bib.bib34)];
self-refinement internalized the deliberation loop
[[16](https://arxiv.org/html/2605.11453v2#bib.bib35)]; and engineering frameworks made
topologies first-class configuration choices
[[7](https://arxiv.org/html/2605.11453v2#bib.bib9), [17](https://arxiv.org/html/2605.11453v2#bib.bib30), [18](https://arxiv.org/html/2605.11453v2#bib.bib31), [19](https://arxiv.org/html/2605.11453v2#bib.bib32), [20](https://arxiv.org/html/2605.11453v2#bib.bib33)].
Recent work has turned to agentic loops and ensemble scaling:
[Yao et al. [21]](https://arxiv.org/html/2605.11453v2#bib.bib39) interleave reasoning and acting,
[Shinn et al. [22]](https://arxiv.org/html/2605.11453v2#bib.bib38) add verbal self-critique,
[Zhang et al. [23]](https://arxiv.org/html/2605.11453v2#bib.bib48) specialize the chain to long-context
reasoning, and [Li et al. [24]](https://arxiv.org/html/2605.11453v2#bib.bib49) show that sampling-and-voting
ensembles improve accuracy monotonically with agent count. Most
directly, [Cemri et al. [25]](https://arxiv.org/html/2605.11453v2#bib.bib40) catalog fourteen failure modes
of multi-agent LLM systems and argue that current evaluation cannot
anticipate them; our structural diagnostic offers one principled
approach to that gap. Across this literature, topology is treated as
a design parameter chosen by trial and error. We sit upstream of any
specific prompting strategy and ask what the communication graph
alone tells us about failure modes, before any inference is run.

Evaluation of LLM systems. HELM [[10](https://arxiv.org/html/2605.11453v2#bib.bib12)] and
BIG-Bench [[11](https://arxiv.org/html/2605.11453v2#bib.bib13)] measure single-model
capability; AgentBench [[9](https://arxiv.org/html/2605.11453v2#bib.bib14)] and ChatEval
[[6](https://arxiv.org/html/2605.11453v2#bib.bib8)] target multi-agent protocols. These
instruments are outcome-oriented and post hoc. We pursue a
pre-inference diagnostic derived from the graph itself, complementary
to outcome-based evaluation rather than a substitute for it.

Spectral analysis of message-passing systems. Spectral
approaches to information flow on graphs are well established in
graph signal processing and graph neural networks
[[26](https://arxiv.org/html/2605.11453v2#bib.bib21), [27](https://arxiv.org/html/2605.11453v2#bib.bib20)], where they motivate
convolutional filter design and expressivity analysis. The closest
mechanistic analogue of our condition-number finding is over-squashing,
in which geometric bottlenecks compress long-range information
[[28](https://arxiv.org/html/2605.11453v2#bib.bib22), [29](https://arxiv.org/html/2605.11453v2#bib.bib23)]. The complementary
phenomenon of oversmoothing has been characterized empirically
[[30](https://arxiv.org/html/2605.11453v2#bib.bib50)] and theoretically as an exponential loss of
expressive power with depth [[31](https://arxiv.org/html/2605.11453v2#bib.bib41)], and recent work
unifies the two through width, depth, and topology, identifying high
commute time as the structural signature of over-squashing
[[32](https://arxiv.org/html/2605.11453v2#bib.bib42)]. We borrow the analytic posture
of this literature but transport it to a setting in which the
operator is a communication graph among LLM agents rather than a GNN
layer: a high-condition-number predictive map signals that
perturbations to the driving signal can be amplified along
ill-conditioned directions of the influence operator.

Consensus and opinion dynamics on networks. A classical
literature studies how distributed estimates converge under linear
pooling. The DeGroot model [[33](https://arxiv.org/html/2605.11453v2#bib.bib24)] establishes
that iterated weighted averaging on a strongly connected graph
converges to a consensus determined by the dominant eigenvector of
the transition matrix; subsequent work characterizes convergence
rates via the spectral gap and develops randomized variants
[[34](https://arxiv.org/html/2605.11453v2#bib.bib25), [35](https://arxiv.org/html/2605.11453v2#bib.bib26)], and the
mixing-time machinery is the same we use here
[[36](https://arxiv.org/html/2605.11453v2#bib.bib18), [37](https://arxiv.org/html/2605.11453v2#bib.bib19)]. The robust-aggregation
literature is closer still: [Xiao et al. [38]](https://arxiv.org/html/2605.11453v2#bib.bib43) characterize least-mean-square deviation in noisy distributed averaging, while [Blanchard et al. [39]](https://arxiv.org/html/2605.11453v2#bib.bib44) introduce Krum as a Byzantine-tolerant aggregation rule. The malicious-leaf bound in Appendix [A.6](https://arxiv.org/html/2605.11453v2#A1.SS6 "A.6 Spectral Bounds Under a Malicious Star Leaf ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") is the spectral counterpart of those results, identifying the structural quantity that controls how much a single adversarial agent can degrade the conditioning of the influence operator. Our spectral-gap diagnostic transposes consensus theory to LLM communication graphs, with the additional observation that explicit aggregation operators introduce bottlenecks not captured by the raw graph spectrum.

Successor representations and predictive maps. The SR was
introduced by [Dayan [12]](https://arxiv.org/html/2605.11453v2#bib.bib1) as a compact summary of expected
discounted future state occupancy, and has become central to the
study of predictive cognitive maps, with evidence that the
hippocampus represents an SR-like quantity
[[1](https://arxiv.org/html/2605.11453v2#bib.bib3)] and that human reinforcement
learning uses SR-like predictive structure
[[2](https://arxiv.org/html/2605.11453v2#bib.bib2), [40](https://arxiv.org/html/2605.11453v2#bib.bib29)]. Successor
features generalize the construction to function approximation
[[41](https://arxiv.org/html/2605.11453v2#bib.bib27)], eigenoption frameworks use the SR
spectrum to discover temporal abstractions
[[42](https://arxiv.org/html/2605.11453v2#bib.bib28)], and [Gershman [43]](https://arxiv.org/html/2605.11453v2#bib.bib45)
surveys the computational logic that motivates treating the SR as a
general-purpose predictive representation. We bring this object to
multi-agent LLM systems, where the role of state-transition operator
is played by the row-stochastic adjacency of the communication graph
rather than by environment dynamics.

Adversarial robustness on graphs and language models.
[Zügner et al. [44]](https://arxiv.org/html/2605.11453v2#bib.bib46) introduce adversarial attacks on graph neural networks via edge and feature manipulation, and [Dai et al. [45]](https://arxiv.org/html/2605.11453v2#bib.bib47) extend the attack surface to RL-driven structural perturbations. For LLM-specific threat models, [Perez et al. [46]](https://arxiv.org/html/2605.11453v2#bib.bib51) establish a precedent for using language models to red-team other language models. The malicious-leaf analysis in Appendix [A.6](https://arxiv.org/html/2605.11453v2#A1.SS6 "A.6 Spectral Bounds Under a Malicious Star Leaf ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") sits at the intersection of these threads: it asks how a single adversarial agent in a fixed communication graph can manipulate the spectral diagnostics that govern downstream reasoning.

Reasoning degradation under length. Prior work documents that LLM reasoning degrades with horizon
[[47](https://arxiv.org/html/2605.11453v2#bib.bib15), [48](https://arxiv.org/html/2605.11453v2#bib.bib16)]. Our chain results are
consistent and suggest that sequentiality in the communication graph is a separate, composable source of drift that interacts with single-agent length effects.

## 3 Method

### 3.1 From Communication Graphs to Predictive Maps

A multi-agent LLM system is represented as a directed graph $G=(V,E)$ with $|V|=n$ agents. The weighted adjacency $A\in\mathbb{R}^{n\times n}$ is row-normalized into a stochastic transition matrix $P$, where $P\_{ij}=A\_{ij}/\sum\_{k}A\_{ik}$. The successor representation with discount $\gamma\in[0,1)$ is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$M=(I-\gamma P)^{-1}=\sum\_{k=0}^{\infty}\gamma^{k}P^{k},$$ |  | (1) |

which aggregates $k$-step influence pathways weighted by $\gamma^{k}$. We fix $\gamma=0.9$ throughout. In the predictive-map reading, $M$ tells us how a perturbation introduced at one agent is expected to propagate across the system over discounted horizons. It is an operator on state perturbations rather than on full reasoning trajectories, and this is deliberate: we want the diagnostic to be cheap, analytic, and independent of the language modality.

### 3.2 Three Spectral Readings of the Predictive Map

From $M$ we extract three scalar summaries, each with a distinct mechanistic reading.

Spectral radius $\rho(M)=\max\_{i}|\lambda\_{i}|$. In the linear-systems view, $\rho(M)$ bounds the geometric growth rate of perturbations under repeated application. For a row-stochastic $P$ with $\rho(P)=1$ and ergodic structure, $\rho(M)=(1-\gamma)^{-1}$. Nilpotent operators, such as the acyclic chain, depart from this bound: $\rho(M\_{\text{chain}})=1$. Read mechanistically, $\rho$ separates acyclic from cyclic communication and offers a first, cautious prediction of error-amplification tendency. We will see that this prediction is empirically inverted, and we develop a drift-corrected variant of $\rho$ in Section [3.5](https://arxiv.org/html/2605.11453v2#S3.SS5 "3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").

Spectral gap $\Delta(M)=|\lambda\_{1}|-|\lambda\_{2}|$. The gap governs the mixing time of the underlying chain and, by analogy, the speed at which distributed estimates converge to a shared state [[36](https://arxiv.org/html/2605.11453v2#bib.bib18), [37](https://arxiv.org/html/2605.11453v2#bib.bib19)]. Read mechanistically, it predicts the dynamics of consensus.

Condition number $\kappa(M)=\sigma\_{\max}(M)/\sigma\_{\min}(M)$. $\kappa$ is the classical measure of sensitivity to perturbations of the driving signal. Read mechanistically, it predicts robustness under controlled perturbation.

### 3.3 Empirical Counterparts

For each spectral reading we define a task-level measurement, so that the predictions are falsifiable. Cumulative error growth is $E\_{\mathrm{ceg}}=\sum\_{t=1}^{T}|x\_{t}^{\star}-\hat{x}\_{t}|$, the sum of per-step deviations from the ground-truth state. Consensus decay is $R\_{\mathrm{cdr}}=\frac{1}{T-1}\sum\_{t=1}^{T-1}\log(D\_{t+1}/D\_{t})$, the mean log-rate at which average pairwise disagreement $D\_{t}$ contracts over steps. Perturbation sensitivity is $F\_{\mathrm{ps}}=|x\_{T}^{\prime}-x\_{T}|$, the divergence of the final state under a controlled input perturbation. Full definitions are given in Appendix [A.2](https://arxiv.org/html/2605.11453v2#A1.SS2 "A.2 Empirical Metric Definitions ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").

### 3.4 What the Framework Predicts

Our claim is local and precise. On the state-tracking task described in Section [4](https://arxiv.org/html/2605.11453v2#S4 "4 Experimental Setup ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"), and with the model and decoding parameters described there, the rank ordering of the three empirical measurements across the three topologies should agree with the rank ordering of the corresponding spectral quantity, up to any inversion that the predictive-map view itself makes visible. The spectral-radius case is where we expect such an inversion, and it is where we find one.

### 3.5 An Affine-Noise Model and a Drift-Corrected Gain

The three spectral readings above treat $M$ as an operator on perturbations of a deterministic flow. Sequential LLM reasoning departs from this picture in a way that is empirically large but spectrally invisible: each agent introduces its own stochastic deviation from the true rule $\tau$, and topologies differ in how those deviations compose. We model this explicitly. At step $t$, agent $i$ produces

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{x}\_{t}^{(i)}=\tau(\hat{x}\_{t-1})+\eta\_{t}^{(i)},\qquad\eta\_{t}^{(i)}\sim\mathcal{D}(0,\sigma^{2}),$$ |  | (2) |

where $\mathcal{D}$ is a zero-mean noise distribution with variance $\sigma^{2}$, iid across agents and steps. The noise term aggregates per-agent arithmetic and decoding stochasticity; equation ([2](https://arxiv.org/html/2605.11453v2#S3.E2 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) is the simplest model that captures the “small non-zero deviation per agent” picture without committing to a particular error mechanism.

For a topology that aggregates $k$ agents per step into a single state via averaging, the effective per-step noise has variance $\sigma^{2}/k$. For the chain, $k=1$. Assuming $\tau$ is approximately Lipschitz with constant near unity over the operating range (which is consistent with the bounded state of our task), iterating equation ([2](https://arxiv.org/html/2605.11453v2#S3.E2 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) for $T$ steps gives

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}\!\left[E\_{\mathrm{ceg}}\right]\;\approx\;c\cdot\frac{\sigma}{\sqrt{k}}\cdot T^{3/2},$$ |  | (3) |

for a constant $c$ that depends on $\tau$ and $\mathcal{D}$ but not on the topology. We give the derivation in Appendix [A.3](https://arxiv.org/html/2605.11453v2#A1.SS3 "A.3 Affine-Noise Derivation ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). Equation ([3](https://arxiv.org/html/2605.11453v2#S3.E3 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) predicts that, for fixed $T$ and $\sigma$, the cumulative error ratio between a chain and a topology with $k$-fold aggregation is $\sqrt{k}$. With $k=4$ leaves per star step and $k=4$ peer agents per mesh step, the predicted chain-to-aggregated ratio is $2$, which matches the empirical chain/star and chain/mesh ratios in Table [2](https://arxiv.org/html/2605.11453v2#S5.T2 "Table 2 ‣ 5.2 Empirical Measurements ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") to within sampling variance.

We summarize this with a drift-corrected gain

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\tilde{\rho}(M;\mathbf{k})\;=\;\rho(M)\cdot\sqrt{\tfrac{1}{n}\textstyle\sum\_{i}1/k\_{i}},$$ |  | (4) |

where $k\_{i}$ is the effective aggregation count at agent $i$ (one for unaggregated nodes, the in-degree of the aggregator at aggregation steps). On the chain, the aggregation factor is $1$ throughout; on the star and mesh, the aggregation factor contracts $\tilde{\rho}$ by approximately $1/\sqrt{4}=0.5$ relative to a chain of equivalent depth. The rank order of $\tilde{\rho}$ across the three topologies matches the empirical rank order of $E\_{\mathrm{ceg}}$, recovering predictive validity that the bare spectral radius lacks. We use $\tilde{\rho}$ as a fourth, derived diagnostic alongside $\rho$, $\Delta$, and $\kappa$ in the results below.

Two extensions of this framework, to correlated per-agent noise and
to dynamically weighted transition operators, are developed in
Appendices [A.4](https://arxiv.org/html/2605.11453v2#A1.SS4 "A.4 Correlated Noise and a Bias-Aware Drift-Corrected Gain ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") and [A.5](https://arxiv.org/html/2605.11453v2#A1.SS5 "A.5 Dynamic Graph Attention and Reliability-Weighted Transitions ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")
respectively.

## 4 Experimental Setup

Task. Each trial executes a 12-step update of a structured JSON state with three fields: a floating-point Value, a binary Parity $\in\{A,B\}$, and a bounded integer Level $\in[1,9]$. A three-rule, order-dependent transition protocol couples arithmetic precision, conditional branching, and bounded state updates. The choice of a three-field state is motivated by findings in cognitive psychology that active working memory is limited to approximately four plus or minus one maintained elements [[49](https://arxiv.org/html/2605.11453v2#bib.bib17)]; saturating this capacity at each step discourages shallow pattern completion. Agent contexts are reset between steps so that errors propagate only through the explicit communication channel.

Topologies. We evaluate three canonical structures. The *chain* executes 12 sequential agents, one per step. The *star* uses four leaf agents per step whose proposals a central judge aggregates [[6](https://arxiv.org/html/2605.11453v2#bib.bib8)]. The *mesh* adds a second deliberation pass in which agents critique peer proposals before a majority vote [[5](https://arxiv.org/html/2605.11453v2#bib.bib7)]. Agent counts follow prior multi-agent deliberation work.

Model and decoding. All agents are local Qwen2.5-7B-Instruct [[50](https://arxiv.org/html/2605.11453v2#bib.bib36)] calls (commit a09a354) with temperature $0.8$, top-$p$ $0.5$, and a 250-token budget. Perturbation sensitivity is evaluated with $\varepsilon=15.0$ applied to Value.

Protocol. Each (topology, condition) pair is executed for 100 independent trials. Reported means and standard deviations are over trials. The topology effect is assessed by a Kruskal–Wallis $H$ test, and the rank-order agreement between theory and experiment by Spearman $r\_{s}$ over three ordered topology means; we treat $r\_{s}$ here as rank-consistency evidence rather than as a significance test, since three ranks offer essentially no statistical power.

Compute. Experiments ran on a single NVIDIA A100 (32 GB). A full run (three topologies, 100 trials, 12 steps) completes within 6 wall-clock hours.

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/topologies_viz.png)


Figure 1: Communication topologies used in the study: a 12-agent chain, a four-leaf star with judge aggregation, and a four-agent mesh with peer deliberation and majority vote.

## 5 Results

We first derive topology-specific predictions from the SR spectrum and then compare each prediction against the empirical distribution obtained over 100 trials.

### 5.1 Spectral Predictions

Closed-form derivations (Appendix [A.1](https://arxiv.org/html/2605.11453v2#A1.SS1 "A.1 Closed-Form Spectra of the Three Topologies ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) give the predictions in Table [1](https://arxiv.org/html/2605.11453v2#S5.T1 "Table 1 ‣ 5.1 Spectral Predictions ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). The chain’s nilpotent adjacency collapses its spectral radius to 1 and its spectral gap to 0, while the star and mesh, both ergodic under row-stochastic normalization, saturate $\rho(M)=(1-\gamma)^{-1}=10$.

Table 1: Spectral diagnostics of the successor representation for each topology, at $\gamma=0.9$.

|  |  |  |  |
| --- | --- | --- | --- |
| Topology | $\rho(M)$ | $\Delta(M)$ | $\kappa(M)$ |
| Chain | 1.00 | 0.00 | 9.95 |
| Star | 10.00 | 9.00 | 28.61 |
| Mesh | 10.00 | 9.23 | 13.00 |

### 5.2 Empirical Measurements

The empirical means over 100 trials, together with their rank-consistency statistics against the predictions in Table [1](https://arxiv.org/html/2605.11453v2#S5.T1 "Table 1 ‣ 5.1 Spectral Predictions ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"), are collected in Table [2](https://arxiv.org/html/2605.11453v2#S5.T2 "Table 2 ‣ 5.2 Empirical Measurements ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). The topology effect is strongly significant for all three metrics.

Table 2: Empirical measurements (mean $\pm$ s.d. over 100 trials) and rank-consistency statistics against the spectral predictions in Table [1](https://arxiv.org/html/2605.11453v2#S5.T1 "Table 1 ‣ 5.1 Spectral Predictions ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Metric | Chain | Mesh | Star | $H$ | $p$ | $r\_{s}$ |
| Error amplification |  |  |  |  |  |  |
| ($E\_{\mathrm{ceg}}$) | 2094.34  $\pm$ 843.05 | 1241.00  $\pm$ 950.01 | 1184.24  $\pm$ 951.91 | 58.02 | $<0.001$ | $-1.00$ |
| Consensus decay |  |  |  |  |  |  |
| ($R\_{\mathrm{cdr}}$) | 0.27  $\pm$ 0.08 | -1.66  $\pm$ 42.25 | -3.44  $\pm$ 2.40 | 188.68 | $<0.001$ | $+0.50$ |
| Perturbation sensitivity |  |  |  |  |  |  |
| ($F\_{\mathrm{ps}}$) | 237.82  $\pm$ 190.51 | 247.42  $\pm$ 198.51 | 443.64  $\pm$ 307.45 | 29.03 | $<0.001$ | $+1.00$ |

### 5.3 Spectral Radius and the Stability Paradox

Read naively, the spectral radius predicts that the chain ($\rho=1$) should be the most stable topology under repeated information flow. Empirically, the chain exhibits the largest cumulative error, roughly twice the mesh and star, and the rank correlation between prediction and observation is $-1$. The disagreement is not a numerical artifact; it is a consequence of which kind of stability the spectral radius encodes. The spectral radius governs the geometric growth of *deterministic* perturbations to a homogeneous linear flow. The cumulative error in our task is dominated instead by accumulation of *stochastic* per-agent deviations, which is invisible to the homogeneous spectrum.

The affine-noise model of Section [3.5](https://arxiv.org/html/2605.11453v2#S3.SS5 "3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") makes this precise. Equation ([3](https://arxiv.org/html/2605.11453v2#S3.E3 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) predicts $\mathbb{E}[E\_{\mathrm{ceg}}]\propto\sigma T^{3/2}/\sqrt{k}$, where $k$ is the per-step aggregation count. For the chain ($k=1$) versus star and mesh ($k=4$), this gives a chain-to-aggregated ratio of $2$, which is what we observe. The drift-corrected gain $\tilde{\rho}$ defined in equation ([4](https://arxiv.org/html/2605.11453v2#S3.E4 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) rank-orders the three topologies as chain $>$ star $\approx$ mesh, in agreement with the empirical ranking of $E\_{\mathrm{ceg}}$.

We read this as a structural finding rather than a failure of the framework: linear spectral stability and stochastic-drift stability are distinct notions, and a topology can be highly stable in the first sense while being maximally fragile in the second. Pipelines whose dominant error source is per-agent stochasticity, which we expect to be most LLM pipelines, are governed by drift stability rather than spectral stability. The result is a call for representational diagnostics, of which $\tilde{\rho}$ is one example, that sit alongside classical spectral ones.

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/stab_sr_dist_1.png)


Figure 2: Cumulative error growth across 100 trials. The chain shows the largest error despite the smallest spectral radius, illustrating the stability paradox.

### 5.4 Spectral Gap and Consensus

The spectral gap predicts fastest convergence for the mesh, then the star, then the chain. The empirical ordering places the chain last as predicted, but inverts the relative position of star and mesh. We read this through the same representational lens: the star’s many-to-one judge aggregation imposes a geometric bottleneck that accelerates consensus beyond what the raw mesh gap alone would suggest. The gap captures mixing on the graph, not the effect of explicit aggregation operators inserted into the flow.

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/conv_sg_dist_1.png)


Figure 3: Consensus decay rate by topology. The chain fails to reduce disagreement; star and mesh both converge, with the star’s judge bottleneck accelerating aggregation.

### 5.5 Condition Number and Perturbation Robustness

The condition-number ordering $\kappa\_{\text{chain}}<\kappa\_{\text{mesh}}<\kappa\_{\text{star}}$ matches the empirical perturbation-sensitivity ordering exactly. Within this case study, $\kappa$ is the cleanest diagnostic we observed, and it is the one we would put first in any practical pre-inference triage.

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/rob_cn_dist_1.png)


Figure 4: Perturbation sensitivity across topologies. The empirical ordering matches the condition-number prediction exactly.

### 5.6 A Practical Triage Rule

The findings above suggest a simple pre-inference triage. Compute $\kappa(M)$ first: it was the cleanest predictor of perturbation sensitivity in our experiments, and a single scalar from a closed-form linear-algebraic operation suffices to rank candidate topologies on adversarial robustness. Compute $\Delta(M)$ next, with the caveat that explicit aggregation operators (judges, majority votes) introduce bottlenecks the raw gap does not see; for topologies that contain such operators, treat $\Delta$ as a lower bound on consensus speed. For cumulative error, do not rely on $\rho(M)$ alone; use $\tilde{\rho}(M;\mathbf{k})$ from equation ([4](https://arxiv.org/html/2605.11453v2#S3.E4 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")), which factors in the per-step aggregation count and is the diagnostic whose ranking agreed with our empirical $E\_{\mathrm{ceg}}$. The full computation requires only the row-stochastic adjacency and the in-degree profile of aggregation nodes, and runs in milliseconds for graphs of practical size.

## 6 Discussion

The results admit a unified reading. The successor representation of a communication graph is a compact summary of how influence propagates, and three of its spectral quantities pick out three distinct aspects of that propagation. Two of them, the spectral gap and the condition number, behave as the linear intuition predicts and align with classical consensus and conditioning theory. The third, the spectral radius, is empirically inverted, and the inversion is informative rather than disqualifying: it locates the regime in which the homogeneous linear spectrum is blind to inhomogeneous stochastic drift. The affine-noise model of Section [3.5](https://arxiv.org/html/2605.11453v2#S3.SS5 "3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") explains the inversion quantitatively and yields a corrected gain $\tilde{\rho}$ whose ranking matches observation.

Three lines of extension are natural. The first is to sweep $\gamma$, the agent count $n$, and the aggregation count $k$ to test the $\sqrt{k}$ prediction in equation ([3](https://arxiv.org/html/2605.11453v2#S3.E3 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) directly, rather than only at the three points implied by the chain, star, and mesh. The second is to enrich the noise model: per-agent biases that are correlated across agents (for instance, because all agents share a base model with a shared inductive error) violate the iid assumption and should change the aggregation gain, and our framework offers a controlled setting in which to study this. The third is to move from row-stochastic to weighted graphs in which edge weights encode trust, attention, or estimated agent reliability, which would let the operator $P$ itself become a learned object and bring the diagnostic closer to the design loop in which topologies are chosen.

The three spectral quantities can also be read as structural
counterparts of three recurring concerns in the trustworthy
multi-agent AI literature. Reliability under stochastic per-agent
deviation, the dominant failure mode in pipelines built from
homogeneous base models [[5](https://arxiv.org/html/2605.11453v2#bib.bib7), [25](https://arxiv.org/html/2605.11453v2#bib.bib40)],
is the regime that the drift-corrected gain $\tilde{\rho}$
addresses. Self-consistency across reasoning paths, the property
that debate and ensemble protocols are explicitly designed to
enforce [[6](https://arxiv.org/html/2605.11453v2#bib.bib8), [24](https://arxiv.org/html/2605.11453v2#bib.bib49)], is the regime
that the spectral gap $\Delta$ tracks, with the caveat that
explicit aggregators induce bottlenecks the raw gap does not see.
Robustness to adversarial inputs and to inter-agent manipulation,
the concern that motivates red-teaming and Byzantine-resilient
aggregation [[46](https://arxiv.org/html/2605.11453v2#bib.bib51), [39](https://arxiv.org/html/2605.11453v2#bib.bib44)], is the regime in which the condition number $\kappa$ and the malicious-leaf bound of Appendix [A.6](https://arxiv.org/html/2605.11453v2#A1.SS6 "A.6 Spectral Bounds Under a Malicious Star Leaf ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") are the relevant quantities. As LLM-based systems migrate from monolithic
models to multi-agent architectures, the relevant failure modes become structural properties of the communication graph rather than purely behavioral properties of any single agent
[[25](https://arxiv.org/html/2605.11453v2#bib.bib40)]; pre-inference spectral diagnostics are one instantiation of that structural turn.

A more speculative reading connects this work to the cognitive-map literature from which the SR is drawn. If the SR captures a predictive map of an environment, and if the communication graph is the relevant “environment” for an ensemble of LLM agents, then the diagnostic we propose is a coarse approximation of the predictive map that the ensemble *would* need to maintain in order to anticipate its own failure modes. We do not claim that current LLMs maintain such a map. We do suggest that giving the system designer access to one is a practically useful proxy.

## 7 Limitations

We have deliberately scoped this study to a controlled regime in order to make the spectral predictions falsifiable. The cost of that scope is real and we state it plainly. The empirical study covers three topologies, one model family, one task family, and 100 trials per condition. A Spearman coefficient over three ranks has essentially no statistical power, and we report it only as rank-consistency evidence. Our empirical metrics reduce full reasoning trajectories to scalars and discard information that a richer trajectory-level analysis would retain. The perturbation-sensitivity effect ranks as predicted. Mesh deliberation parameters follow prior work but are not extensively swept. The affine-noise model assumes iid noise across agents and a Lipschitz-near-unity transition rule; both are simplifications that may break for tasks with strong nonlinearity or for systems in which agents share systematic biases. We expect the qualitative ordering to be model-agnostic where the dominant error source is per-agent stochasticity, since the affine-noise derivation depends on $P$ and on noise variance rather than on any property of the underlying language model, but this expectation is a prediction of the framework rather than an empirical finding and we flag it as the most important sweep for follow-up work. Claims about model scale, closed-weight systems, or topologies outside the chain, star, and mesh triple are not supported by the present evidence and we identify the corresponding sweeps as the natural next step.

## 8 Broader Impact

Structural pre-inference diagnostics can help practitioners choose safer multi-agent configurations, reducing wasted compute and the risk of deploying pipelines whose failure modes are discovered only post hoc. The same tools could in principle be used to optimize adversarial multi-agent systems for maximal perturbation amplification; we note the possibility and recommend that downstream work pair structural diagnostics with explicit evaluation of adversarial robustness. Our experiments use only open-weight models and synthetic task data, and involve no human subjects or personally identifying information.

## 9 Reproducibility

We release all configuration files and evaluation harnesses, and we pin the exact model commit (Qwen/Qwen2.5-7B-Instruct@a09a354). Appendix [D](https://arxiv.org/html/2605.11453v2#A4 "Appendix D Reproducibility Details ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") lists hardware, software versions, decoding parameters, and the single command required to reproduce Tables [1](https://arxiv.org/html/2605.11453v2#S5.T1 "Table 1 ‣ 5.1 Spectral Predictions ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") and [2](https://arxiv.org/html/2605.11453v2#S5.T2 "Table 2 ‣ 5.2 Empirical Measurements ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").

## 10 Conclusion

We have argued that a predictive map of the communication graph, constructed as a successor representation and summarized by three spectral quantities, is a useful pre-inference diagnostic for multi-agent LLM systems. In a controlled case study across chain, star, and mesh topologies, the condition number rank-predicts empirical perturbation robustness perfectly, the spectral gap partially tracks consensus, and the spectral radius is inverted with respect to cumulative error. The inversion marks a stability paradox that points beyond linear spectra toward representational, drift-aware diagnostics; we proposed a drift-corrected gain $\tilde{\rho}$ derived from an affine-noise model that recovers the empirical ordering. Establishing the generality of this picture, across models, tasks, and richer topologies, is the natural next step.

## References

- [1]
  K. L. Stachenfeld, M. M. Botvinick, and S. J. Gershman (2017)
  The hippocampus as a predictive map.
  Nature Neuroscience 20 (11), pp. 1643–1653.
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§1](https://arxiv.org/html/2605.11453v2#S1.p3.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [2]
  I. Momennejad, E. M. Russek, J. H. Cheong, M. M. Botvinick, N. D. Daw, and S. J. Gershman (2017)
  The successor representation in human reinforcement learning.
  Nature Human Behaviour 1 (9), pp. 680–692.
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§1](https://arxiv.org/html/2605.11453v2#S1.p3.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [3]
  J. Wei, X. Wang, D. Schuurmans, M. Bosma, B. Ichter, F. Xia, E. H. Chi, Q. V. Le, and D. Zhou (2022)
  Chain-of-thought prompting elicits reasoning in large language models.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [4]
  M. Besta, N. Blach, A. Kubicek, R. Gerstenberger, M. Podstawski, L. Gianinazzi, J. Gajda, T. Lehmann, H. Niewiadomski, P. Nyczyk, and T. Hoefler (2024)
  Graph of thoughts: solving elaborate problems with large language models.
  In AAAI Conference on Artificial Intelligence,
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [5]
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch (2023)
  Improving factuality and reasoning in language models through multiagent debate.
  arXiv preprint arXiv:2305.14325.
  Cited by: [§A.4](https://arxiv.org/html/2605.11453v2#A1.SS4.p1.1 "A.4 Correlated Noise and a Bias-Aware Drift-Corrected Gain ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§A.5](https://arxiv.org/html/2605.11453v2#A1.SS5.p2.1 "A.5 Dynamic Graph Attention and Reliability-Weighted Transitions ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§4](https://arxiv.org/html/2605.11453v2#S4.p2.1 "4 Experimental Setup ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§6](https://arxiv.org/html/2605.11453v2#S6.p3.1 "6 Discussion ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [6]
  C. Chan, W. Chen, Y. Su, J. Yu, W. Xue, S. Zhang, J. Fu, and Z. Liu (2023)
  ChatEval: towards better llm-based evaluators through multi-agent debate.
  arXiv preprint arXiv:2308.07201.
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p2.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§4](https://arxiv.org/html/2605.11453v2#S4.p2.1 "4 Experimental Setup ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§6](https://arxiv.org/html/2605.11453v2#S6.p3.1 "6 Discussion ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [7]
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, A. H. Awadallah, R. W. White, D. Burger, and C. Wang (2023)
  AutoGen: enabling next-gen llm applications via multi-agent conversation.
  arXiv preprint arXiv:2308.08155.
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [8]
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang (2024)
  Large language model based multi-agents: a survey of progress and challenges.
  arXiv preprint arXiv:2402.01680.
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p1.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [9]
  X. Liu, H. Yu, H. Zhang, Y. Xu, X. Lei, H. Lai, Y. Gu, H. Ding, K. Men, K. Yang, S. Zhang, X. Deng, A. Zeng, Z. Du, C. Zhang, S. Shen, T. Zhang, Y. Su, H. Sun, M. Huang, Y. Dong, and J. Tang (2024)
  AgentBench: evaluating llms as agents.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p2.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p2.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [10]
  P. Liang et al. (2023)
  Holistic evaluation of language models.
  Transactions on Machine Learning Research (TMLR).
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p2.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p2.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [11]
  A. Srivastava et al. (2023)
  Beyond the imitation game: quantifying and extrapolating the capabilities of language models.
  Transactions on Machine Learning Research (TMLR).
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p2.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p2.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [12]
  P. Dayan (1993)
  Improving generalization for temporal difference learning: the successor representation.
  Neural Computation 5 (4), pp. 613–624.
  Cited by: [§1](https://arxiv.org/html/2605.11453v2#S1.p3.1 "1 Introduction ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [13]
  S. Yao, D. Yu, J. Zhao, I. Shafran, T. L. Griffiths, Y. Cao, and K. Narasimhan (2023)
  Tree of thoughts: deliberate problem solving with large language models.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [14]
  T. Liang, Z. He, W. Jiao, X. Wang, Y. Wang, R. Wang, Y. Yang, Z. Tu, and S. Shi (2023)
  Encouraging divergent thinking in large language models through multi-agent debate.
  arXiv preprint arXiv:2305.19118.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [15]
  A. Khan, J. Hughes, D. Valentine, L. Ruis, K. Sachan, A. Radhakrishnan, E. Grefenstette, S. R. Bowman, T. Rocktäschel, and E. Perez (2024)
  Debating with more persuasive LLMs leads to more truthful answers.
  In International Conference on Machine Learning (ICML),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [16]
  A. Madaan, N. Tandon, P. Gupta, S. Hallinan, L. Gao, S. Wiegreffe, U. Alon, N. Dziri, S. Prabhumoye, Y. Yang, S. Gupta, B. P. Majumder, K. Hermann, S. Welleck, A. Yazdanbakhsh, and P. Clark (2023)
  Self-refine: iterative refinement with self-feedback.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [17]
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, C. Zhang, J. Wang, Z. Wang, S. K. S. Yau, Z. Lin, L. Zhou, C. Ran, L. Xiao, C. Wu, and J. Schmidhuber (2024)
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [18]
  C. Qian, W. Liu, H. Liu, N. Chen, Y. Dang, J. Li, C. Yang, W. Chen, Y. Su, X. Cong, J. Xu, D. Li, Z. Liu, and M. Sun (2024)
  ChatDev: communicative agents for software development.
  In Annual Meeting of the Association for Computational Linguistics (ACL),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [19]
  G. Li, H. A. A. K. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem (2023)
  CAMEL: communicative agents for “mind” exploration of large language model society.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [20]
  J. S. Park, J. C. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In ACM Symposium on User Interface Software and Technology (UIST),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [21]
  S. Yao, J. Zhao, D. Yu, N. Du, I. Shafran, K. Narasimhan, and Y. Cao (2023)
  ReAct: synergizing reasoning and acting in language models.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [22]
  N. Shinn, F. Cassano, A. Gopinath, K. Narasimhan, and S. Yao (2023)
  Reflexion: language agents with verbal reinforcement learning.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [23]
  Y. Zhang, R. Sun, Y. Chen, T. Pfister, R. Zhang, and S. Ö. Arik (2024)
  Chain of agents: large language models collaborating on long-context tasks.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [24]
  J. Li, Q. Zhang, Y. Yu, Q. Fu, and D. Ye (2024)
  More agents is all you need.
  Transactions on Machine Learning Research (TMLR).
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§6](https://arxiv.org/html/2605.11453v2#S6.p3.1 "6 Discussion ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [25]
  M. Cemri, M. Z. Pan, S. Yang, L. A. Agrawal, B. Chopra, R. Tiwari, K. Keutzer, A. Parameswaran, D. Klein, K. Ramchandran, M. Zaharia, J. E. Gonzalez, and I. Stoica (2025)
  Why do multi-agent LLM systems fail?.
  In International Conference on Machine Learning (ICML),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p1.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§6](https://arxiv.org/html/2605.11453v2#S6.p3.1 "6 Discussion ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [26]
  M. Defferrard, X. Bresson, and P. Vandergheynst (2016)
  Convolutional neural networks on graphs with fast localized spectral filtering.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [27]
  T. N. Kipf and M. Welling (2017)
  Semi-supervised classification with graph convolutional networks.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [28]
  U. Alon and E. Yahav (2021)
  On the bottleneck of graph neural networks and its practical implications.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [29]
  J. Topping, F. Di Giovanni, B. P. Chamberlain, X. Dong, and M. M. Bronstein (2022)
  Understanding over-squashing and bottlenecks on graphs via curvature.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [30]
  Q. Li, Z. Han, and X. Wu (2018)
  Deeper insights into graph convolutional networks for semi-supervised learning.
  In AAAI Conference on Artificial Intelligence,
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [31]
  K. Oono and T. Suzuki (2020)
  Graph neural networks exponentially lose expressive power for node classification.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [32]
  F. Di Giovanni, L. Giusti, F. Barbero, G. Luise, P. Liò, and M. M. Bronstein (2023)
  On over-squashing in message passing neural networks: the impact of width, depth, and topology.
  In International Conference on Machine Learning (ICML),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p3.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [33]
  M. H. DeGroot (1974)
  Reaching a consensus.
  Journal of the American Statistical Association 69 (345), pp. 118–121.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [34]
  R. Olfati-Saber, J. A. Fax, and R. M. Murray (2007)
  Consensus and cooperation in networked multi-agent systems.
  Proceedings of the IEEE 95 (1), pp. 215–233.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [35]
  S. Boyd, A. Ghosh, B. Prabhakar, and D. Shah (2006)
  Randomized gossip algorithms.
  IEEE Transactions on Information Theory 52 (6), pp. 2508–2530.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [36]
  D. A. Levin and Y. Peres (2017)
  Markov chains and mixing times.
  2 edition, American Mathematical Society.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§3.2](https://arxiv.org/html/2605.11453v2#S3.SS2.p3.1 "3.2 Three Spectral Readings of the Predictive Map ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [37]
  F. R. K. Chung (1997)
  Spectral graph theory.
   American Mathematical Society.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§3.2](https://arxiv.org/html/2605.11453v2#S3.SS2.p3.1 "3.2 Three Spectral Readings of the Predictive Map ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [38]
  L. Xiao, S. Boyd, and S. Kim (2007)
  Distributed average consensus with least-mean-square deviation.
  Journal of Parallel and Distributed Computing 67 (1), pp. 33–46.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [39]
  P. Blanchard, E. M. El Mhamdi, R. Guerraoui, and J. Stainer (2017)
  Machine learning with adversaries: Byzantine tolerant gradient descent.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p4.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§6](https://arxiv.org/html/2605.11453v2#S6.p3.1 "6 Discussion ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [40]
  E. M. Russek, I. Momennejad, M. M. Botvinick, S. J. Gershman, and N. D. Daw (2017)
  Predictive representations can link model-based reinforcement learning to model-free mechanisms.
  PLOS Computational Biology 13 (9), pp. e1005768.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [41]
  A. Barreto, W. Dabney, R. Munos, J. J. Hunt, T. Schaul, H. van Hasselt, and D. Silver (2017)
  Successor features for transfer in reinforcement learning.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [42]
  M. C. Machado, M. G. Bellemare, and M. Bowling (2017)
  A Laplacian framework for option discovery in reinforcement learning.
  In International Conference on Machine Learning (ICML),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [43]
  S. J. Gershman (2018)
  The successor representation: its computational logic and neural substrates.
  Journal of Neuroscience 38 (33), pp. 7193–7200.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p5.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [44]
  D. Zügner, A. Akbarnejad, and S. Günnemann (2018)
  Adversarial attacks on neural networks for graph data.
  In ACM SIGKDD International Conference on Knowledge Discovery
  and Data Mining,
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p6.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [45]
  H. Dai, H. Li, T. Tian, X. Huang, L. Wang, J. Zhu, and L. Song (2018)
  Adversarial attack on graph structured data.
  In International Conference on Machine Learning (ICML),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p6.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [46]
  E. Perez, S. Huang, F. Song, T. Cai, R. Ring, J. Aslanides, A. Glaese, N. McAleese, and G. Irving (2022)
  Red teaming language models with language models.
  In Conference on Empirical Methods in Natural Language
  Processing (EMNLP),
  pp. 3419–3448.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p6.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"),
  [§6](https://arxiv.org/html/2605.11453v2#S6.p3.1 "6 Discussion ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [47]
  N. Dziri, X. Lu, M. Sclar, X. L. Li, L. Jiang, B. Y. Lin, P. West, C. Bhagavatula, R. Le Bras, J. D. Hwang, S. Sanyal, S. Welleck, X. Ren, A. Ettinger, Z. Harchaoui, and Y. Choi (2023)
  Faith and fate: limits of transformers on compositionality.
  In Advances in Neural Information Processing Systems (NeurIPS),
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p7.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [48]
  N. F. Liu, K. Lin, J. Hewitt, A. Paranjape, M. Bevilacqua, F. Petroni, and P. Liang (2024)
  Lost in the middle: how language models use long contexts.
  Transactions of the Association for Computational Linguistics.
  Cited by: [§2](https://arxiv.org/html/2605.11453v2#S2.p7.1 "2 Related Work ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [49]
  N. Cowan (2001)
  The magical number 4 in short-term memory: a reconsideration of mental storage capacity.
  Behavioral and Brain Sciences 24 (1), pp. 87–114.
  Cited by: [§4](https://arxiv.org/html/2605.11453v2#S4.p1.1 "4 Experimental Setup ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [50]
  A. Yang, B. Yang, B. Hui, B. Zheng, B. Yu, C. Zhou, C. Li, C. Li, D. Liu, F. Huang, G. Dong, H. Wei, H. Lin, J. Tang, J. Wang, J. Yang, J. Tu, J. Zhang, J. Ma, J. Xu, J. Zhou, J. Bai, J. He, J. Lin, K. Dang, K. Lu, K. Chen, K. Yang, M. Li, M. Xue, N. Ni, P. Zhang, P. Wang, R. Peng, R. Men, R. Gao, R. Lin, S. Wang, S. Bai, S. Tan, T. Zhu, T. Li, T. Liu, W. Ge, X. Deng, X. Zhou, X. Ren, X. Zhang, X. Wei, X. Ren, Y. Fan, Y. Yao, Y. Zhang, Y. Wan, Y. Chu, Y. Liu, Z. Cui, Z. Zhang, and Z. Fan (2024)
  Qwen2 technical report.
  arXiv preprint arXiv:2407.10671.
  Cited by: [§4](https://arxiv.org/html/2605.11453v2#S4.p3.1 "4 Experimental Setup ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").
- [51]
  P. Veličković, G. Cucurull, A. Casanova, A. Romero, P. Liò, and Y. Bengio (2018)
  Graph attention networks.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§A.5](https://arxiv.org/html/2605.11453v2#A1.SS5.p1.1 "A.5 Dynamic Graph Attention and Reliability-Weighted Transitions ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").

## Appendix A Theoretical Derivations

This appendix collects the mathematical support for the main-text claims. Section [A.1](https://arxiv.org/html/2605.11453v2#A1.SS1 "A.1 Closed-Form Spectra of the Three Topologies ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") derives the closed-form spectra reported in Table [1](https://arxiv.org/html/2605.11453v2#S5.T1 "Table 1 ‣ 5.1 Spectral Predictions ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). Section [A.2](https://arxiv.org/html/2605.11453v2#A1.SS2 "A.2 Empirical Metric Definitions ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") states the empirical metrics defined in Section [4](https://arxiv.org/html/2605.11453v2#S4 "4 Experimental Setup ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). Section [A.3](https://arxiv.org/html/2605.11453v2#A1.SS3 "A.3 Affine-Noise Derivation ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") derives the affine-noise prediction of Section [3.5](https://arxiv.org/html/2605.11453v2#S3.SS5 "3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies").

### A.1 Closed-Form Spectra of the Three Topologies

#### Chain.

$A\_{\text{chain}}$ is the $12\times 12$ upper shift matrix. Its row-normalized form $P\_{\text{chain}}$ is nilpotent of index 12, so $P^{k}=0$ for $k\geq 12$ and $M\_{\text{chain}}=\sum\_{k=0}^{11}\gamma^{k}P^{k}$ is upper triangular with diagonal entries 1 and superdiagonal entries $\gamma^{k}$. Hence $\rho(M\_{\text{chain}})=1$ and $\Delta(M\_{\text{chain}})=0$; numerical evaluation at $\gamma=0.9$ gives $\kappa(M\_{\text{chain}})\approx 9.95$.

#### Star.

For a star with one center and $\ell$ leaves, the row-stochastic transition matrix has eigenvalues $\{1,0,\dots,0,-1\}$ with $\ell-1$ zeros. The SR eigenvalues are $\{(1-\gamma)^{-1},1,\dots,1,(1+\gamma)^{-1}\}$, giving $\rho=10$, $\Delta=9$, and $\kappa\approx 28.61$ in the experimental configuration.

#### Mesh.

The complete graph on $n=4$ with uniform off-diagonal weights has eigenvalues $\{1,-\tfrac{1}{3},-\tfrac{1}{3},-\tfrac{1}{3}\}$. The SR then has eigenvalues approximately $\{10,0.769,0.769,0.769\}$, giving $\rho=10$, $\Delta\approx 9.23$, $\kappa\approx 13.00$.

### A.2 Empirical Metric Definitions

#### Cumulative error growth.

With $\epsilon\_{t}=|x\_{t}^{\star}-\hat{x}\_{t}|$, $E\_{\mathrm{ceg}}=\sum\_{t=1}^{T}\epsilon\_{t}$.

#### Consensus decay.

For $N$ agents, $D\_{t}=\frac{1}{N(N-1)}\sum\_{i\neq j}|s\_{i,t}-s\_{j,t}|$, $r\_{t}=\log(D\_{t+1}/D\_{t})$, $R\_{\mathrm{cdr}}=\frac{1}{T-1}\sum\_{t}r\_{t}$. For the chain, $D\_{t}=|x\_{t}^{\star}-\hat{x}\_{t}|$.

#### Perturbation sensitivity.

$F\_{\mathrm{ps}}=|x\_{T}^{\prime}-x\_{T}|$, where $x\_{T}^{\prime}$ is the final value under a controlled input perturbation of magnitude $\varepsilon=15.0$ applied to Value.

### A.3 Affine-Noise Derivation

We derive equation ([3](https://arxiv.org/html/2605.11453v2#S3.E3 "In 3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies")) from the affine-noise model of Section [3.5](https://arxiv.org/html/2605.11453v2#S3.SS5 "3.5 An Affine-Noise Model and a Drift-Corrected Gain ‣ 3 Method ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). Let $\tau:\mathbb{R}\to\mathbb{R}$ denote the deterministic transition rule, and assume $\tau$ is Lipschitz with constant $L\leq 1$ on the operating range of the state, so that errors do not amplify under iteration. Let $\hat{x}\_{t}$ denote the state estimate at step $t$ and $x\_{t}^{\star}=\tau^{t}(x\_{0})$ the ground-truth state. Define $e\_{t}=\hat{x}\_{t}-x\_{t}^{\star}$.

#### Chain.

A single agent updates the state at each step:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x}\_{t}=\tau(\hat{x}\_{t-1})+\eta\_{t},\qquad\eta\_{t}\sim\mathcal{D}(0,\sigma^{2}).$$ |  |

Linearizing $\tau$ about $x\_{t-1}^{\star}$ with local slope at most $L$, we have $e\_{t}=L\cdot e\_{t-1}+\eta\_{t}$, hence

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{Var}(e\_{t})\leq\sigma^{2}\sum\_{s=0}^{t-1}L^{2s}\leq\sigma^{2}\cdot t\quad\text{for }L\leq 1.$$ |  |

Then $\mathbb{E}|e\_{t}|\leq C\sigma\sqrt{t}$ for a constant $C$ depending on $\mathcal{D}$, and

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}\!\left[E\_{\mathrm{ceg}}^{\mathrm{chain}}\right]=\sum\_{t=1}^{T}\mathbb{E}|e\_{t}|\leq C\sigma\sum\_{t=1}^{T}\sqrt{t}\leq\tfrac{2}{3}C\sigma\,T^{3/2}.$$ |  |

#### Aggregated topology.

A topology with $k$-fold aggregation per step replaces the per-step noise $\eta\_{t}$ with the average $\bar{\eta}\_{t}=\frac{1}{k}\sum\_{i=1}^{k}\eta\_{t}^{(i)}$, which has variance $\sigma^{2}/k$ under iid noise. The same derivation as above gives

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}\!\left[E\_{\mathrm{ceg}}^{\mathrm{agg}}\right]\leq\tfrac{2}{3}C\cdot\frac{\sigma}{\sqrt{k}}\,T^{3/2}.$$ |  |

#### Ratio.

Taking the ratio of the chain and aggregated bounds,

|  |  |  |
| --- | --- | --- |
|  | $$\frac{\mathbb{E}E\_{\mathrm{ceg}}^{\mathrm{chain}}}{\mathbb{E}E\_{\mathrm{ceg}}^{\mathrm{agg}}}=\sqrt{k},$$ |  |

which for $k=4$ predicts a factor of $2$. The empirical chain-to-star and chain-to-mesh ratios in Table [2](https://arxiv.org/html/2605.11453v2#S5.T2 "Table 2 ‣ 5.2 Empirical Measurements ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") are $1.77$ and $1.69$ respectively, both within sampling variance of the predicted $2$.

The derivation makes explicit which assumptions matter. The Lipschitz-near-unity assumption ensures errors do not amplify intrinsically; the iid noise assumption ensures that aggregation cleanly reduces variance; and the linearization is valid only when individual errors are small relative to the curvature of $\tau$. Violations of any of these (for instance, agents with correlated systematic biases, or rules with sharp branching) would change the prediction in directions that the framework can be extended to capture.

### A.4 Correlated Noise and a Bias-Aware Drift-Corrected Gain

The iid assumption in Section 3.5 is suspect when agents share a base model. [Du et al. [5]](https://arxiv.org/html/2605.11453v2#bib.bib7) show that ensembles of identical LLMs converge to a common posterior reflecting shared inductive
priors rather than ground truth, so the per-agent error decomposes naturally into a shared and an independent component. We model this
by writing $\eta\_{t}^{(i)}=b\_{t}+\xi\_{t}^{(i)}$ with $b\_{t}\sim\mathcal{D}\_{b}(0,\sigma\_{b}^{2})$ shared across agents at step $t$ and
$\xi\_{t}^{(i)}\sim\mathcal{D}\_{\xi}(0,\sigma\_{\xi}^{2})$ iid, giving total
variance $\sigma^{2}=\sigma\_{b}^{2}+\sigma\_{\xi}^{2}$ and inter-agent
correlation $\rho\_{c}=\sigma\_{b}^{2}/\sigma^{2}\in[0,1]$.

For a $k$-fold aggregator, the aggregated noise variance is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\operatorname{Var}(\bar{\eta}\_{t})=\frac{\sigma^{2}}{k}\bigl[1+(k-1)\rho\_{c}\bigr],$$ |  | (5) |

which interpolates between $\sigma^{2}/k$ at $\rho\_{c}=0$ and
$\sigma^{2}$ at $\rho\_{c}=1$. The chain-to-aggregated cumulative-error
ratio of Appendix A.3 generalizes from $\sqrt{k}$ to
$\sqrt{k/[1+(k-1)\rho\_{c}]}$, which collapses to unity as
$\rho\_{c}\to 1$. With $k=4$ and the empirical chain-to-star ratio of
$1.77$, the inferred upper bound is $\rho\_{c}\lesssim 0.06$. The
drift-corrected gain becomes

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\tilde{\rho}\_{c}\bigl(M;\,\{k\_{i}\},\,\rho\_{c}\bigr)=\rho(M)\cdot\sqrt{\frac{1}{n}\sum\_{i=1}^{n}\frac{1+(k\_{i}-1)\rho\_{c}}{k\_{i}}},$$ |  | (6) |

which recovers $\tilde{\rho}(M;k)$ at $\rho\_{c}=0$ and $\rho(M)$ at
$\rho\_{c}=1$, in which limit aggregation is structurally inert and
the original spectral-radius prediction is restored exactly.

### A.5 Dynamic Graph Attention and Reliability-Weighted Transitions

Static $P$ encodes only graph structure, not running deliberation
state. Following [Veličković et al. [51]](https://arxiv.org/html/2605.11453v2#bib.bib37), we lift $P$ to a
time-varying operator by parameterizing the edge from agent $i$ to
agent $j$ at step $t$ via

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$e\_{ij}^{(t)}=\operatorname{LeakyReLU}\!\left(\mathbf{a}^{\top}\bigl[\mathbf{W}\mathbf{h}\_{i}^{(t)}\,\|\,\mathbf{W}\mathbf{h}\_{j}^{(t)}\bigr]\right)+\beta\,\phi\bigl(r\_{j}^{(t)}\bigr),\quad P\_{ij}^{(t)}=\frac{\exp\bigl(e\_{ij}^{(t)}\bigr)}{\sum\_{k\in\mathcal{N}(i)}\exp\bigl(e\_{ik}^{(t)}\bigr)},$$ |  | (7) |

where $\mathbf{h}\_{i}^{(t)}$ is an agent feature vector, $r\_{i}^{(t)}$ a
running reliability score, $\phi$ monotone, and $\beta\geq 0$
controls the reliability contribution. Each $P^{(t)}$ remains
row-stochastic, so the spectral diagnostics apply pointwise. The
successor representation generalizes to $M^{(t)}=I+\gamma P^{(t)}M^{(t+1)}$, and three reductions are useful in practice: the
instantaneous $\kappa(M^{(t)})$, the time-averaged surrogate $\bar{M}=(I-\gamma\bar{P})^{-1}$, and the worst-case $\sup\_{t}\kappa(M^{(t)})$.

The construction admits a variance-reduction reading that links it
to Appendix [A.4](https://arxiv.org/html/2605.11453v2#A1.SS4 "A.4 Correlated Noise and a Bias-Aware Drift-Corrected Gain ‣ Appendix A Theoretical Derivations ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). If $r\_{j}^{(t)}$ asymptotically estimates $1/\sigma\_{j}^{2}$, the aggregator variance $\sigma\_{b}^{2}+\sum\_{j}(\alpha\_{j}^{(t)})^{2}\sigma\_{j}^{2}$ is minimized at $\alpha\_{j}^{\star}\propto 1/\sigma\_{j}^{2}$, which the GAT softmax implements when
$\beta\,\phi(r\_{j})=-\log\sigma\_{j}^{2}$. Reliability weighting therefore
suppresses idiosyncratic variance optimally but leaves the systemic
floor $\rho\_{c}$ untouched, in agreement with [Du et al. [5]](https://arxiv.org/html/2605.11453v2#bib.bib7).

### A.6 Spectral Bounds Under a Malicious Star Leaf

Consider the star with one center and $\ell$ leaves, and suppose one leaf is adversarial and able to inflate its weight in the center’s aggregation: $P\_{01}=\alpha/(\alpha+\ell-1)$ and
$P\_{0j}=1/(\alpha+\ell-1)$ for $j\in\{2,\ldots,\ell\}$,
with $\alpha\geq 1$. The eigenvalues of $P$ remain
$\{1,0,\ldots,0,-1\}$ for any $\alpha>0$, so $\rho(M)$ and
$\Delta(M)$ are insensitive to the attack; only $\kappa(M)$
responds, since $P$ is non-symmetric. Let $\mu^{2}=(\alpha^{2}+\ell-1)/(\alpha+\ell-1)^{2}-1/\ell$ measure the deviation of the leaf weights from uniformity, with geometric ceiling
$\mu\_{\max}^{2}=1-1/\ell$ as $\alpha\to\infty$. A trace-bound argument on the active subspace of $A:=I-\gamma P$ gives

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\kappa(M)\;\leq\;\frac{\bigl[\,3+\gamma^{2}(\ell+1/\ell+\mu^{2})\,\bigr]^{3/2}}{1-\gamma^{2}},$$ |  | (8) |

which at the worst-case $\mu^{2}\to 1-1/\ell$ evaluates for
$\gamma=0.9$, $\ell=4$ to approximately $98.5$, a factor of
$3.4$ above the benign-star value $\kappa\approx 28.6$ from
Table [1](https://arxiv.org/html/2605.11453v2#S5.T1 "Table 1 ‣ 5.1 Spectral Predictions ‣ 5 Results ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies"). The bound scales as $\Theta(\ell^{3/2})$,
so larger stars are disproportionately vulnerable to weight
manipulation. Capping individual agent influence at $\bar{w}=W/\ell$ enforces $\mu=0$ structurally and recovers the benign
condition number as a hard upper bound.

## Appendix B Stepwise Reasoning Dynamics

While aggregate metrics capture final system behavior, they do not fully reveal how reasoning trajectories evolve over intermediate steps. To better understand the dynamics of error propagation and consensus formation, we analyze stepwise traces of the empirical metrics across all trials.

For each topology, we plot the per-step metric values across all trials, along with the median trajectory to provide a robust summary of the central trend. We use the median rather than the mean to reduce sensitivity to outlier trajectories, which can arise from stochastic reasoning failures in individual runs.

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/chain_sr_trace_2.png)

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/mesh_sr_trace_2.png)

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/star_sr_trace_2.png)

Figure 5: Stepwise cumulative error growth for chain, mesh, and star topologies.

Figures [5](https://arxiv.org/html/2605.11453v2#A2.F5 "Figure 5 ‣ Appendix B Stepwise Reasoning Dynamics ‣ Predictive Maps of Multi-Agent Reasoning:A Successor-Representation Spectrum for LLM Communication Topologies") (top and middle) and (bottom) show the evolution of cumulative error. The chain topology exhibits a steady monotonic increase, consistent with sequential error accumulation, while the star and mesh topologies display flatter trajectories.

The following figures illustrate the stepwise consensus dynamics. The star topology rapidly reduces disagreement early in the reasoning process, while the chain topology shows slower convergence, consistent with its zero spectral gap.

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/chain_sg_trace_2.png)

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/mesh_sg_trace_2.png)

![Refer to caption](https://arxiv.org/html/2605.11453v2/figures-v3/star_sg_trace_2.png)

Figure 6: Stepwise consensus dynamics for chain (top), mesh (middle), and star (bottom) topologies.

## Appendix C State-Tracking Task Specification

A structured state-tracking task was designed to evaluate multi-step reasoning under controlled information flow. The task requires agents to iteratively update a shared JSON state across a fixed sequence of reasoning steps, where each update depends on the result of the previous step.

The state consists of three variables:

- •

  Value: a floating-point number requiring precise arithmetic updates
- •

  Parity: a categorical variable taking values {A, B}
- •

  Level: an integer constrained to a bounded range.

To ensure that reasoning errors propagate only through the communication topology, each agent receives only the current state and the fixed ruleset, without access to prior reasoning history beyond what is explicitly passed forward.

The base prompt used for each agent is provided below.

[⬇](data:text/plain;base64,W1NUUklDVCBJTlNUUlVDVElPTl0KWW91IGFyZSBhIEpTT04tb25seSBwcm9jZXNzb3IuIFVzZSB0aGUgJ1JlYXNvbmluZycgZmllbGQgdG8KY2FsY3VsYXRlIHRoZSBuZXcgc3RhdGUgYmVmb3JlIHByb3ZpZGluZyB0aGUgZmluYWwgdmFsdWVzLgoKU1RBVEUgU0NIRU1BOgp7CiAgIlJlYXNvbmluZyI6ICJTdGVwLWJ5LXN0ZXAgbWF0aCIsCiAgIlZhbHVlIjogPGZsb2F0PiwKICAiUGFyaXR5IjogIjxBIG9yIEI+IiwKICAiTGV2ZWwiOiA8aW50ZWdlcj4KfQoKUlVMRVNFVCAtIGFwcGx5IGluIHRoaXMgZXhhY3Qgb3JkZXIuIFJ1bGVzIGFyZSBkZXBlbmRlbnQgb24gZWFjaCBvdGhlci4KRG8gbm90IHNraXAgYWhlYWQuIEVhY2ggcnVsZSByZXF1aXJlcyB0aGUgcmVzdWx0IG9mIHRoZSBwcmV2aW91cy4KClJVTEUgMSAtIENvbXB1dGUgVl9yYXcgKGRvIE5PVCByb3VuZCB5ZXQpOgpJZiBQYXJpdHkgaXMgIkEiOiBWX3JhdyA9IChWYWx1ZSAqIDEuMjUpICsgKExldmVsICogMikKSWYgUGFyaXR5IGlzICJCIjogVl9yYXcgPSAoVmFsdWUgKiAwLjc1KSAtIChMZXZlbCAqIDIpCkRvIG5vdCByb3VuZCBWX3Jhdy4gQ2FycnkgdGhlIGZ1bGwgZGVjaW1hbCBmb3J3YXJkIGludG8gUnVsZSAyLgoKUlVMRSAyIC0gQ29tcHV0ZSBWX25ldyBhbmQgUF9uZXcgdXNpbmcgVl9yYXcgZnJvbSBSdWxlIDE6ClRha2UgdGhlIGRlY2ltYWwgcG9ydGlvbiBvZiBWX3JhdyBvbmx5IChpLmUuIFZfcmF3IG1pbnVzIGl0cyBpbnRlZ2VyIHBhcnQpLgpJZiB0aGF0IGRlY2ltYWwgcG9ydGlvbiBpcyA+PSAwLjU6CiAgICBWX25ldyA9IHJvdW5kKFZfcmF3ICsgMS41LCAyKQpJZiB0aGF0IGRlY2ltYWwgcG9ydGlvbiBpcyA8IDAuNSBidXQgPiAwLjA6CiAgICBWX25ldyA9IHJvdW5kKFZfcmF3IC0gMC41LCAyKQpJZiB0aGUgZGVjaW1hbCBwb3J0aW9uIGlzIGV4YWN0bHkgMC4wOgogICAgVl9uZXcgPSByb3VuZChWX3JhdyAqIDEuMSwgMikKVGhlbiBjb21wdXRlIFBfbmV3OgpJZiBWX25ldyA8IDcwOiAgUF9uZXcgPSAiQSIKSWYgVl9uZXcgPj0gNzA6IFBfbmV3ID0gIkIiCgpSVUxFIDMgLSBDb21wdXRlIExfbmV3IHVzaW5nIEJPVEggVl9uZXcgZnJvbSBSdWxlIDIgQU5EIFBfbmV3IGZyb20gUnVsZSAyOgpBcHBseSBFWENFUFQgbG9naWMgY2FyZWZ1bGx5OgpBcHBseSBMX25ldyA9IExldmVsICsgMiAobWF4IDkpIGluIEFMTCBvZiB0aGUgZm9sbG93aW5nIGNhc2VzIEVYQ0VQVAp3aGVuIFBfbmV3IGlzICJCIiBhbmQgVl9uZXcgaXMgYmV0d2VlbiA2MCBhbmQgOTAgaW5jbHVzaXZlLAppbiB3aGljaCBjYXNlIGFwcGx5IExfbmV3ID0gTGV2ZWwgLSAxIChtaW4gMSkgaW5zdGVhZC4KVGhlIHJlbWFpbmluZyBjYXNlcyBhcmU6CklmIExldmVsID49IDQgYW5kIFZfbmV3IDwgNjA6IExfbmV3ID0gTGV2ZWwgLSAxICAobWluaW11bSB2YWx1ZSBpcyAxKQpJZiBMZXZlbCA8IDQgIGFuZCBWX25ldyA8IDYwOiBMX25ldyA9IExldmVsIC0gMiAgKG1pbmltdW0gdmFsdWUgaXMgMSkKCkZJTkFMIE9VVFBVVCBGT1JNQVQ6Ci0geyJSZWFzb25pbmciOiAic3RlcC1ieS1zdGVwIG1hdGgiLCAiVmFsdWUiOiA8ZmxvYXQ+LCAiUGFyaXR5IjogIjxBIG9yIEI+IiwgIkxldmVsIjogPGludGVnZXI+fQ==)

[STRICT INSTRUCTION]

You are a JSON-only processor. Use the ’Reasoning’ field to

calculate the new state before providing the final values.

STATE SCHEMA:

{

"Reasoning": "Step-by-step math",

"Value": <float>,

"Parity": "<A or B>",

"Level": <integer>

}

RULESET - apply in this exact order. Rules are dependent on each other.

Do not skip ahead. Each rule requires the result of the previous.

RULE 1 - Compute V\_raw (do NOT round yet):

If Parity is "A": V\_raw = (Value \* 1.25) + (Level \* 2)

If Parity is "B": V\_raw = (Value \* 0.75) - (Level \* 2)

Do not round V\_raw. Carry the full decimal forward into Rule 2.

RULE 2 - Compute V\_new and P\_new using V\_raw from Rule 1:

Take the decimal portion of V\_raw only (i.e. V\_raw minus its integer part).

If that decimal portion is >= 0.5:

V\_new = round(V\_raw + 1.5, 2)

If that decimal portion is < 0.5 but > 0.0:

V\_new = round(V\_raw - 0.5, 2)

If the decimal portion is exactly 0.0:

V\_new = round(V\_raw \* 1.1, 2)

Then compute P\_new:

If V\_new < 70: P\_new = "A"

If V\_new >= 70: P\_new = "B"

RULE 3 - Compute L\_new using BOTH V\_new from Rule 2 AND P\_new from Rule 2:

Apply EXCEPT logic carefully:

Apply L\_new = Level + 2 (max 9) in ALL of the following cases EXCEPT

when P\_new is "B" and V\_new is between 60 and 90 inclusive,

in which case apply L\_new = Level - 1 (min 1) instead.

The remaining cases are:

If Level >= 4 and V\_new < 60: L\_new = Level - 1 (minimum value is 1)

If Level < 4 and V\_new < 60: L\_new = Level - 2 (minimum value is 1)

FINAL OUTPUT FORMAT:

- {"Reasoning": "step-by-step math", "Value": <float>, "Parity": "<A or B>", "Level": <integer>}

In the star topology, multiple leaf agents independently process the same input state at each step. Their outputs are then passed to a central judge agent, which aggregates the proposals and produces the final state for the next step. The judge is allowed to perform its own reasoning and is not required to select one of the provided proposals.

[⬇](data:text/plain;base64,WW91IGFyZSBhIGp1ZGdlIGFnZW50IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUgc2luZ2xlIGNvcnJlY3QgSlNPTiBzdGF0ZS4KCllvdSBoYXZlIHJlY2VpdmVkIHByb3Bvc2FscyBmcm9tIHtuX2xlYWZfYWdlbnRzfSBpbmRlcGVuZGVudCBhZ2VudHMgd2hvIGVhY2ggYXBwbGllZAp0aGUgc2FtZSBydWxlc2V0IHRvIHRoZSBzYW1lIGlucHV0IHN0YXRlLgoKUlVMRVNFVCBUTyBGT0xMT1c6CntydWxlc190ZXh0fQoKUFJPUE9TQUxTIEZST00gTEVBRiBBR0VOVFM6Cntqc29uLmR1bXBzKHByb3Bvc2FscywgaW5kZW50PTIpfQoKQ1VSUkVOVCBJTlBVVCBTVEFURSAod2hhdCBhbGwgbGVhZiBhZ2VudHMgcmVjZWl2ZWQpOgp7anNvbi5kdW1wcyhqdWRnZV9zdGF0ZSwgaW5kZW50PTIpfQoKUmV2aWV3IHRoZSBwcm9wb3NhbHMgY3JpdGljYWxseSBhbmQgY2FsY3VsYXRlIHlvdXIgb3duIHJlc3BvbnNlIGlmIHlvdSBmZWVsIHRoZXJlIGFyZSBlcnJvcnMgaW4gdGhlIHJlc3BvbnNlcy4KUmVzcG9uZCB3aXRoIE9OTFkgYSB2YWxpZCBKU09OIG9iamVjdC4gTm8gZXhwbGFuYXRpb24sIG5vIGV4dHJhIHRleHQuCkZvcm1hdDoge3siVmFsdWUiOiA8ZmxvYXQ+LCAiUGFyaXR5IjogIjxBIG9yIEI+IiwgIkxldmVsIjogPGludGVnZXI+fX0=)

You are a judge agent responsible for determining the single correct JSON state.

You have received proposals from {n\_leaf\_agents} independent agents who each applied

the same ruleset to the same input state.

RULESET TO FOLLOW:

{rules\_text}

PROPOSALS FROM LEAF AGENTS:

{json.dumps(proposals, indent=2)}

CURRENT INPUT STATE (what all leaf agents received):

{json.dumps(judge\_state, indent=2)}

Review the proposals critically and calculate your own response if you feel there are errors in the responses.

Respond with ONLY a valid JSON object. No explanation, no extra text.

Format: {{"Value": <float>, "Parity": "<A or B>", "Level": <integer>}}

In the mesh topology, reasoning proceeds in two stages. In the first stage, all agents independently generate candidate outputs. In the second stage, each agent observes the proposals of all other agents and produces a revised output. The final state is determined through a majority-based aggregation of these second-round responses.

[⬇](data:text/plain;base64,WW91IGFyZSBhIHJlYXNvbmluZyBhZ2VudCBpbiBhIHBlZXIgZGVsaWJlcmF0aW9uIHJvdW5kLgoKSW4gdGhlIGZpcnN0IHJvdW5kLCB5b3UgYW5kIHtuX2FnZW50cyAtIDF9IG90aGVyIGFnZW50cyBpbmRlcGVuZGVudGx5IGFwcGxpZWQgdGhlIHNhbWUKcnVsZXNldCB0byB0aGUgc2FtZSBpbnB1dCBzdGF0ZS4KClJVTEVTRVQgVE8gRk9MTE9XOgp7cnVsZXNfdGV4dH0KCklOUFVUIFNUQVRFICh3aGF0IGFsbCBhZ2VudHMgcmVjZWl2ZWQgaW4gcm91bmQgb25lKToKe2pzb24uZHVtcHMoal9zdGF0ZSwgaW5kZW50PTIpfQoKRklSU1QtUk9VTkQgUFJPUE9TQUxTIEZST00gQUxMIEFHRU5UUzoKe2pzb24uZHVtcHMoZmlyc3RfcGFzcywgaW5kZW50PTIpfQoKUmV2aWV3IHRoZSBwcm9wb3NhbHMgY3JpdGljYWxseSBhbmQgY2FsY3VsYXRlIHlvdXIgb3duIHJlc3BvbnNlIGlmIHlvdSBmZWVsIHRoZXJlIGFyZSBlcnJvcnMgaW4gdGhlIHJlc3BvbnNlcy4KUmVzcG9uZCB3aXRoIE9OTFkgYSB2YWxpZCBKU09OIG9iamVjdC4gTm8gZXhwbGFuYXRpb24sIG5vIGV4dHJhIHRleHQuCkZvcm1hdDoge3siVmFsdWUiOiA8ZmxvYXQ+LCAiUGFyaXR5IjogIjxBIG9yIEI+IiwgIkxldmVsIjogPGludGVnZXI+fX0=)

You are a reasoning agent in a peer deliberation round.

In the first round, you and {n\_agents - 1} other agents independently applied the same

ruleset to the same input state.

RULESET TO FOLLOW:

{rules\_text}

INPUT STATE (what all agents received in round one):

{json.dumps(j\_state, indent=2)}

FIRST-ROUND PROPOSALS FROM ALL AGENTS:

{json.dumps(first\_pass, indent=2)}

Review the proposals critically and calculate your own response if you feel there are errors in the responses.

Respond with ONLY a valid JSON object. No explanation, no extra text.

Format: {{"Value": <float>, "Parity": "<A or B>", "Level": <integer>}}

## Appendix D Reproducibility Details

All experiments ran on a single NVIDIA A100 (32 GB), Python 3.11.4, with dependencies pinned in requirements.txt. The full experimental suite is reproduced by:

[⬇](data:text/plain;base64,cHl0aG9uIHJubnJfbWFpbi5weSAtLXRvcG9sb2d5IGFsbCBcCiAgLS1taWRfbW9kZWwgUXdlbi9Rd2VuMi41LTdCLUluc3RydWN0IFwKICAtLXRhc2tfZGlmZmljdWx0eSBlbmhhbmNlZCAtLXRlbXAgMC44IC0tdG9wX3AgMC41IFwKICAtLWVwc2lsb24gMTUuMCAtLWRldmljZSBjdWRhIC0tbl90cmlhbHMgMTAwIC0tbl93b3JrZXJzIDEgXAogIC0tZW5mb3JjZV9lYWdlciAtLW1heF90b2tlbnMgMjUwIFwKICAtLW91dCBxd2VuMjVfZnVsbF9zcGVjdHJhbF9ydW5fdDA4X3AwNV9lMTVfdHIxMDAuanNvbg==)

python rnnr\_main.py --topology all \

--mid\_model Qwen/Qwen2.5-7B-Instruct \

--task\_difficulty enhanced --temp 0.8 --top\_p 0.5 \

--epsilon 15.0 --device cuda --n\_trials 100 --n\_workers 1 \

--enforce\_eager --max\_tokens 250 \

--out qwen25\_full\_spectral\_run\_t08\_p05\_e15\_tr100.json

Minor variation across runs is expected due to decoding stochasticity; reported statistics are robust to this noise within the 100-trial bootstrap.
