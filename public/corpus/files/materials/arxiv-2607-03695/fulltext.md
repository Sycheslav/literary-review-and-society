---
id: arxiv-2607-03695-text
type: material
title: Social Networks of LLM Agents
work_id: arxiv-2607-03695
source_url: https://arxiv.org/html/2607.03695v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 9718059a20812e9fdd12d868e334a76ed22e7bba99302e324aa2ed06fbc21e7d
---

> Источник: [https://arxiv.org/html/2607.03695v1](https://arxiv.org/html/2607.03695v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Social Networks of LLM Agents

Kaixuan Liu
Affiliation: Department of Computer Science
Affiliation: Emory University
Affiliation: Atlanta, GA 30322
Email: [kaixuan.liu@emory.edu](mailto:)
  
Guojun Xiong
†
Affiliation: School of Computer Science
Affiliation: Shanghai Jiao Tong University
Affiliation: Shanghai, China
Email: [gjxiong@sjtu.edu.cn](mailto:)
  
Weinan Zhang
Affiliation: School of Computer Science
Affiliation: Shanghai Jiao Tong University
Affiliation: Shanghai, China
Email: [wnzhang@sjtu.edu.cn](mailto:)
  
Shengpu Tang
Affiliation: Department of Computer Science
Affiliation: Emory University
Affiliation: Atlanta, GA 30322
Email: [shengpu.tang@emory.edu](mailto:)

###### Abstract

Large language model (LLM) agents are increasingly deployed in interacting
populations, raising the question of what such populations come to believe
collectively. Whether a population aggregates genuine knowledge or collapses
into a false consensus directly affects how much such systems can be trusted.
Classical social-network models assume that the network itself determines how
beliefs combine. This assumption breaks down for LLM agents, whose limited
attention takes in only part of what they are exposed to, so these models
overstate how much information a population actually pools and cannot tell
genuine consensus from herding. We introduce SNLA, a framework that
models how much each agent actually influences others, rather than merely how
the network connects them. This influence depends on each agent’s position in
the network and on how sharply attention focuses. Theoretically, we show on a
tractable proxy that narrow attention causes herding, where the effective sample
size stays bounded regardless of population size, while wide attention recovers
wisdom-of-crowds behavior only when the exposure graph is undirected and
degree-regular. Empirically, a controlled testbed validates these predictions
directly, and the herding–wisdom transition reproduces on operator-controlled
variants of three multi-agent LLM benchmarks.

|  |
| --- |
|  |

August 24, 2026

## 1 Introduction

Large language model (LLM) agents are increasingly deployed in interacting
populations. They debate to reach answers [[15](https://arxiv.org/html/2607.03695v1#bib.bib1), [8](https://arxiv.org/html/2607.03695v1#bib.bib2), [30](https://arxiv.org/html/2607.03695v1#bib.bib3)], advise and persuade one another
[[33](https://arxiv.org/html/2607.03695v1#bib.bib4)], and simulate social processes at scale
[[20](https://arxiv.org/html/2607.03695v1#bib.bib18), [34](https://arxiv.org/html/2607.03695v1#bib.bib19)]. In all of these settings, one
question recurs: what does the population come to believe collectively, and can
that collective belief be trusted? (i) A group that pools its members’
independent information can be more accurate than any individual
[[19](https://arxiv.org/html/2607.03695v1#bib.bib7)]; (ii) a group that copies its most visible members can
collapse into a confident error [[4](https://arxiv.org/html/2607.03695v1#bib.bib8), [5](https://arxiv.org/html/2607.03695v1#bib.bib9)]. Distinguishing the two is essential before such systems
are relied upon for decisions.

The classical answer comes from the theory of social learning on networks. In the
DeGroot model [[14](https://arxiv.org/html/2607.03695v1#bib.bib16)] and its variants
[[18](https://arxiv.org/html/2607.03695v1#bib.bib10)], each agent repeatedly replaces its belief with a
weighted average of its neighbors’, with weights read directly off the network:
the graph structure alone determines how beliefs combine. [Golub and Jackson [21]](https://arxiv.org/html/2607.03695v1#bib.bib11)
characterize when this process is wise. A large society converges to the truth if
and only if no single agent stays too influential as the society grows; prominent
agents are the main obstruction. A parallel Bayesian line reaches the same tension
through sequential observational learning [[3](https://arxiv.org/html/2607.03695v1#bib.bib20), [1](https://arxiv.org/html/2607.03695v1#bib.bib12)]. This theory is elegant and its predictions are sharp. But it
rests on one assumption that fails for LLM agents: that an agent aggregates
everything its network exposes it to.

But an LLM agent does not aggregate this way. Its context is limited and its
attention is selective: it incorporates only part of what it is exposed to, and
concentrates on the most salient sources. What combines beliefs is
therefore not the visible network, but a reweighted version that concentrates
influence on a few sources (Figure ). Prior work places LLM
agents in networks and documents their failures: agents slide into conformity,
herding toward the most confident peer even when a minority is better supported
[[9](https://arxiv.org/html/2607.03695v1#bib.bib21)], and grow increasingly sycophantic in repeated debate
[[36](https://arxiv.org/html/2607.03695v1#bib.bib13)]. These studies propose fixes, but they do not
explain when a population herds and when it stays wise, nor do they expose a
control that moves it between the two regimes.

We close this gap with SNLA (Social Networks of LLM Agents),
a social-network model in which exposure and realized influence are
distinct. Starting from the visible network, SNLA derives a
*realized-influence operator* determined by two quantities: the
*social power* of each source [[6](https://arxiv.org/html/2607.03695v1#bib.bib14), [7](https://arxiv.org/html/2607.03695v1#bib.bib15)], and an *attention width* that controls how
sharply finite attention concentrates on the most powerful sources.
The theory is developed for a tractable proxy and validated against
the operational LLM system via a bridge theorem. Classical opinion
dynamics are recovered exactly when attention is unselective; the
regime of interest lies away from it.

Our contributions are summarized as follows:
  
$\triangleright$ Realized influence as a derived object. We introduce
SNLA, a framework in which influence is not read off the
interaction structure but *derived* from it through social power
and a finite attention width, separating visible exposure from realized
influence (Section [3](https://arxiv.org/html/2607.03695v1#S3 "3 Problem Formulation ‣ Social Networks of LLM Agents")).
  
$\triangleright$ Attention width controls collective intelligence. A
*bridge theorem* couples the LLM population to a tractable proxy
path-wise (Theorem [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")); a *two-regime theorem* shows
attention width drives the herding–wisdom transition on the proxy, reaching
wisdom-of-crowds accuracy only when every agent hears comparably many
others (Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")); an *equalization theorem* shows failure modes share a common cause, which a decentralized pricing
protocol removes, eliminating herding in the exact-clearing limit and
substantially reducing it online (Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")).
  
$\triangleright$ Empirical validation. A controlled testbed with scalar
signals and anchored updating ($\lambda\_{\max}{<}1$) directly validates the
variance predictions and the proxy–LLM bridge; on operator-controlled variants
of three recognized benchmarks, the herding–wisdom transition, the placement
effect, and the equalizer’s removal of herding all reproduce as qualitative
swings in collective accuracy (Section [5](https://arxiv.org/html/2607.03695v1#S5 "5 Experiments ‣ Social Networks of LLM Agents")).

## 2 Related Work

Social networks.
Classical opinion dynamics reads influence directly off the network. In the
DeGroot [[14](https://arxiv.org/html/2607.03695v1#bib.bib16)] and Friedkin–Johnsen
[[18](https://arxiv.org/html/2607.03695v1#bib.bib10)] models, each agent updates toward a weighted average
of its neighbors, and [Golub and Jackson [21]](https://arxiv.org/html/2607.03695v1#bib.bib11) characterize when this yields
accurate collective estimates. A parallel Bayesian line reaches similar
conclusions under sequential updating [[3](https://arxiv.org/html/2607.03695v1#bib.bib20), [1](https://arxiv.org/html/2607.03695v1#bib.bib12)]. These models were designed for human agents who read
everything they are exposed to; for LLM agents, finite attention realizes only
part of the exposure as influence. SNLA builds on this tradition but
replaces the network weights with an influence operator derived from social
power and attention width, recovering the classical models as a special case.

LLM multi-agent systems and collective behavior. Prior work shows LLM
populations reproducing human-like opinion dynamics and network structure
[[10](https://arxiv.org/html/2607.03695v1#bib.bib5), [32](https://arxiv.org/html/2607.03695v1#bib.bib6)], with consensus degrading
at scale [[13](https://arxiv.org/html/2607.03695v1#bib.bib17)], debate helping only when independent
[[15](https://arxiv.org/html/2607.03695v1#bib.bib1), [30](https://arxiv.org/html/2607.03695v1#bib.bib3), [8](https://arxiv.org/html/2607.03695v1#bib.bib2), [42](https://arxiv.org/html/2607.03695v1#bib.bib22)], and single persuasive agents swaying whole groups
[[2](https://arxiv.org/html/2607.03695v1#bib.bib23)]. A separate line wires such agents into
systems for software development [[38](https://arxiv.org/html/2607.03695v1#bib.bib26)], role-play
[[28](https://arxiv.org/html/2607.03695v1#bib.bib27)], and task-solving [[44](https://arxiv.org/html/2607.03695v1#bib.bib28), [25](https://arxiv.org/html/2607.03695v1#bib.bib29), [24](https://arxiv.org/html/2607.03695v1#bib.bib30)]. Neither asks what a topology actually realizes: the first
documents herding without a control that reverses it; the second treats it as
a design choice for performance, not a determinant of influence. SNLA
asks that question directly, separating exposure from realized influence to
derive when a population herds or stays wise.

Mixture-of-experts.
MoE routing exhibits the same column pathology: a
temperature-softmax over gate scores collapses tokens onto a few
experts (*router collapse*), and the
standard fixes, load-balancing losses [[40](https://arxiv.org/html/2607.03695v1#bib.bib31), [16](https://arxiv.org/html/2607.03695v1#bib.bib35)], Sinkhorn routing [[11](https://arxiv.org/html/2607.03695v1#bib.bib32)], and
loss-free per-expert bias [[43](https://arxiv.org/html/2607.03695v1#bib.bib33)], are instances of
our equalizer, with the exposure price $y\_{j}$ the analogue of the
per-expert load bias. SNLA adds the collective-estimation
account these lack: when concentration caps the effective sample size,
and when balancing restores it.

## 3 Problem Formulation

In this section, we formalize the social network induced by a
population of LLM agents. The central object is the
*realized-influence operator*, which records how much each source
actually shapes another agent’s beliefs, as distinct from the visible
exposure that the network makes available.

### 3.1 Opinion Dynamics and Collective Estimation

#### Opinion dynamics.

In the DeGroot model [[14](https://arxiv.org/html/2607.03695v1#bib.bib16)], each agent updates its
belief as a weighted average of its neighbors’; the Friedkin–Johnsen
model [[18](https://arxiv.org/html/2607.03695v1#bib.bib10)] adds anchoring:

|  |  |  |
| --- | --- | --- |
|  | $$b\_{i}(t+1)=\sum\_{j}W\_{ij}\,b\_{j}(t),\qquad b\_{i}(t+1)=(1-\lambda\_{i})\,b\_{i}^{0}+\lambda\_{i}\sum\_{j}W\_{ij}\,b\_{j}(t),$$ |  |

where ${\bm{W}}\in\mathbb{R}^{n\times n}$ is row-stochastic, $\lambda\_{i}\in[0,1]$ is the *anchoring weight*, and $b\_{i}^{0}\coloneqq b\_{i}(0)$ the
initial belief. The influence matrix is exogenous: the network
alone determines how beliefs combine.

#### Collective estimation.

Each agent begins with a *private signal* $b\_{i}^{0}=\theta^{\star}+\xi\_{i}$, where $\xi\_{i}$ is independent across agents with mean zero and
variance $s\_{i}^{2}$. The *collective estimate* at horizon $T$ is the
population average $\hat{\theta}\_{T}=\frac{1}{n}\sum\_{i}b\_{i}(T)=\sum\_{i}q\_{T,i}\,b\_{i}^{0}$, a weighted combination of the initial signals with
weight vector $q\_{T}\in\mathbb{R}^{n}$, $q\_{T}^{\top}{\bm{1}}=1$. In the
homoskedastic case $s\_{i}^{2}\equiv s^{2}$, its variance is:

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{Var}(\hat{\theta}\_{T})=s^{2}\|q\_{T}\|\_{2}^{2},$$ |  |

minimized at $s^{2}/n$ when $q\_{T}=\frac{1}{n}{\bm{1}}$, the
wisdom-of-crowds optimum [[21](https://arxiv.org/html/2607.03695v1#bib.bib11)]. A weight concentrated
on a few agents instead keeps the variance bounded away from $s^{2}/n$
regardless of population size, the herding regime. Whether a
population is wise or herds is therefore set by $q\_{T}$, which the
network produces as beliefs evolve.

### 3.2 Social Networks of LLM Agents

#### Agents and events.

We model a population $\mathcal{A}=\{1,\ldots,n\}$ of $n$ LLM
agents. Each agent $i$ is a triple $(\rho\_{i},\mu\_{i},m\_{i})$, where
$\rho\_{i}$ is a fixed *persona* that anchors its belief, $\mu\_{i}(t)$
a *mutable state* holding its memory, and $m\_{i}$ a *backbone
model* mapping context to an emission. Each agent holds a declared
belief $b\_{i}(t)\in\mathbb{R}$ about an unknown scalar $\theta^{\star}\in\mathbb{R}$;
we write $b(t)=(b\_{1}(t),\ldots,b\_{n}(t))^{\top}\in\mathbb{R}^{n}$ for the
stacked belief vector and $b^{0}=b(0)$ for the initial signals.
At each round $t\in\{0,1,2,\ldots\}$, agents emit *events*;
with $\mathcal{X}$ the space of message texts, an event

|  |  |  |
| --- | --- | --- |
|  | $$e\_{m}=(s\_{m},\,R\_{m},\,x\_{m},\,b\_{m},\,t\_{m})\;\in\;\mathcal{A}\times 2^{\mathcal{A}}\times\mathcal{X}\times\mathbb{R}\times\mathbb{R}\_{\geq 0}$$ |  |

records its sender, recipient set, message text, declared belief, and
timestamp. The history up to time $t$ is $\mathcal{E}\_{\leq t}=\{e\_{m}:t\_{m}\leq t\}$, from which the network is induced.

#### Exposure and realized-influence graphs.

Classical opinion dynamics distinguishes the *communication
graph*, recording which agents are aware of one another’s opinions,
from the *influence graph*, recording who actually shapes whom.
In the classical setting the two coincide, since an agent that reads a
neighbor also aggregates it [[37](https://arxiv.org/html/2607.03695v1#bib.bib24)]. Finite
attention breaks this coincidence, and SNLA is built on the
separation into two weighted directed graphs on the agents:

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{G}\_{\bar{{\bm{W}}}}(t)=\bigl(\mathcal{A},\,\mathcal{E}\_{\bar{{\bm{W}}}}(t),\,\bar{{\bm{W}}}(t)\bigr),\qquad\mathcal{G}\_{{\bm{C}}}(t)=\bigl(\mathcal{A},\,\mathcal{E}\_{{\bm{C}}}(t),\,{\bm{C}}(t)\bigr),$$ |  |

both with node set $\mathcal{A}$ and a row-stochastic weighted
adjacency matrix in $\mathbb{R}^{n\times n}$.

In the *visible exposure graph* $\mathcal{G}\_{\bar{{\bm{W}}}}(t)$, an
arc $j\to i$ is present whenever agent $i$ has been exposed to a
message from agent $j$ in $\mathcal{E}\_{\leq t}$, with weight
$\bar{W}\_{ij}(t)\in[0,1]$ the attention agent $i$ places on
source $j$. The *realized-influence graph* $\mathcal{G}\_{{\bm{C}}}(t)$
records the influence that finite attention realizes: an agent can be
influenced only by sources it is exposed to, so its arcs are contained
in the exposure arcs,

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{E}\_{{\bm{C}}}(t)\subseteq\mathcal{E}\_{\bar{{\bm{W}}}}(t),$$ |  |

and ${\bm{C}}\_{ij}(t)\in[0,1]$ is the weight with which agent $i$
aggregates source $j$’s belief. Together with a *social power* vector $\pi(t)\in\Delta\_{n}$ that weights each agent by its centrality as a source in
$\mathcal{G}\_{\bar{{\bm{W}}}}(t)$, these objects form the *social
network of LLM agents* (SNLA), the time-indexed tuple:

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{S}(t)=\bigl(\mathcal{A},\,\mathcal{E}\_{\leq t},\,\bar{{\bm{W}}}(t),\,\pi(t),\,{\bm{C}}(t)\bigr).$$ |  |

Its defining feature is that ${\bm{C}}(t)\neq\bar{{\bm{W}}}(t)$ in general; the
classical model is recovered only when attention is unselective and
social power uniform, at which ${\bm{C}}(t)=\bar{{\bm{W}}}(t)$.

## 4 Proposed Methodology

In this section, we construct the realized-influence operator ${\bm{C}}(t)$
that determines how much each source shapes another agent’s
beliefs. We then give a decentralized protocol that keeps any single
source from dominating the population’s attention, and state the
theoretical guarantees that follow.

### 4.1 The Realized-Influence Operator

#### Exposure and social power.

The operator is built in two steps from the event history: we first
turn the history into a visible exposure graph, then weight its sources
by their standing in that graph. Fix a memory kernel $\kappa:\mathbb{R}\_{\geq 0}\to\mathbb{R}\_{\geq 0}$ that discounts old events and per-event
qualities $q\_{m}\geq 0$. The unnormalized exposure of agent $i$ to
source $j$ accumulates every message $j$ sent that $i$ received:

|  |  |  |
| --- | --- | --- |
|  | $$A\_{ij}(t)=\sum\_{e\_{m}\in\mathcal{E}\_{\leq t}}\mathbf{1}\{s\_{m}=j,\,i\in R\_{m}\}\,\kappa(t-t\_{m})\,q\_{m},$$ |  |

and row-normalizing gives the row-stochastic exposure matrix
$\bar{{\bm{W}}}(t)$. Exposure alone treats all sources symmetrically, but an
agent carries more standing when influential agents attend to it. We
score this standing by the Katz–Bonacich centrality of the exposure
graph [[6](https://arxiv.org/html/2607.03695v1#bib.bib14)], for a damping factor $\zeta\in[0,1)$:

|  |  |  |
| --- | --- | --- |
|  | $$\pi(t)^{\top}=\frac{1-\zeta}{n}\,{\bm{1}}^{\top}\bigl({\bm{I}}-\zeta\bar{{\bm{W}}}(t)\bigr)^{-1}\in\Delta\_{n},$$ |  |

which weights each source by exposure accumulated over paths of every
length. At $\zeta=0$ power is uniform and influence reduces to
exposure alone.

#### Realized influence.

Exposure and power say how much each source *could*
influence agent $i$; a finite context window forces $i$ to realize only
part of it. We form a per-pair *score* $s\_{ij}(t)\coloneqq\bar{W}\_{ij}(t)\,\pi\_{j}(t)$ — multiplicative, so a source matters to $i$
only when $i$ is exposed to it *and* it carries standing — and pass
each row through a temperature-$\beta$ softmax over the log-scores:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$s\_{ij}(t)\coloneqq\bar{W}\_{ij}(t)\,\pi\_{j}(t),\qquad{\bm{C}}\_{ij}(t)=\frac{s\_{ij}(t)^{1/\beta}}{\sum\_{k}s\_{ik}(t)^{1/\beta}}.$$ |  | (1) |

The width $\beta$ is the temperature, controlling how sharply each
reader’s budget concentrates: $\beta\to 0$ collapses the row onto its
highest-scoring source (hard attention), $\beta=1$ allocates
proportionally, and $\beta\to\infty$ spreads it uniformly over
exposed sources. The result ${\bm{C}}(t)$ is the realized-influence operator
of Section [3](https://arxiv.org/html/2607.03695v1#S3 "3 Problem Formulation ‣ Social Networks of LLM Agents"): row-stochastic, supported on
$\bar{{\bm{W}}}(t)$, and equal to $\bar{{\bm{W}}}(t)$ at the classical point
$\zeta=0,\beta=1$. It drives the opinion dynamics in place of the
classical fixed matrix, updated each round as new events arrive. In the
LLM harness, each reader is shown the smallest set of peers covering
$0.9$ of its row mass (Appendix [12.3](https://arxiv.org/html/2607.03695v1#S12.SS3 "12.3 How the context width 𝛽 is realized ‣ 12 Experimental details ‣ Social Networks of LLM Agents")); the residual $\delta$
(Section [4.3](https://arxiv.org/html/2607.03695v1#S4.SS3 "4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")) is measured against the full ${\bm{C}}$, so
this hard cutoff enters as a bounded contribution rather than an
unmodeled gap.

### 4.2 Equalized Context Allocation

#### Exposure pricing.

The operator just built has a structural weakness that the theory of
Section [4.3](https://arxiv.org/html/2607.03695v1#S4.SS3 "4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") traces to a single source. Row
normalization bounds each reader’s budget, but nothing bounds the
source side: a high-power source can occupy a large share of the
population’s contexts, so its column sum grows without bound,

|  |  |  |
| --- | --- | --- |
|  | $$\sum\_{i}{\bm{C}}\_{ij}(t)\ \gg\ 1.$$ |  |

We correct this with a decentralized pricing protocol: each source $j$
holds a scalar *exposure price* $y\_{j}>0$ (initialized at one),
which discounts its weight in every reader’s allocation and is updated
by the attention share it received,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $${\bm{C}}\_{ij}(t)=\frac{s\_{ij}(t)^{1/\beta}/y\_{j}}{\sum\_{k}s\_{ik}(t)^{1/\beta}/y\_{k}},\qquad y\_{j}\leftarrow y\_{j}\cdot a\_{j},\quad a\_{j}=\sum\_{i}{\bm{C}}\_{ij}(t).$$ |  | (2) |

At the fixed point $a\_{j}=1$ for all $j$, so ${\bm{C}}(t)$ has unit row and
column sums, ${\bm{1}}^{\top}{\bm{C}}(t)={\bm{1}}^{\top}$ and ${\bm{C}}(t){\bm{1}}={\bm{1}}$:
the realized influence is doubly stochastic. This is one Sinkhorn
iteration per round [[41](https://arxiv.org/html/2607.03695v1#bib.bib34)], decentralized to $O(d\_{i})$
work and one broadcast scalar per agent, and (in its cleared limit)
invariant to the social-power weighting, attenuates exactly the
high-power sources that would otherwise dominate.
Algorithm [1](https://arxiv.org/html/2607.03695v1#algorithm1 "Algorithm 1 ‣ Exposure pricing. ‣ 4.2 Equalized Context Allocation ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") collects the full per-round loop; the
Sinkhorn equivalence and a targeted heteroskedastic variant are in
Appendix [11](https://arxiv.org/html/2607.03695v1#S11 "11 The Pricing Protocol ‣ Social Networks of LLM Agents").

Algorithm 1 SNLA-EQ: realized influence with equalized context
allocation.

Input : agents $\{(\rho\_{i},\mu\_{i},m\_{i})\}\_{i=1}^{n}$, private signals
$b\_{i}^{0}$, parameters $\beta,\zeta,T$

Output : collective estimate $\hat{\theta}\_{T}$

1
initialize beliefs $b\_{i}(0)\leftarrow b\_{i}^{0}$ and prices $y\_{j}\leftarrow 1$ for all $i,j$

2
for *$t=0,1,\ldots,T-1$* do

3
form exposure $\bar{{\bm{W}}}(t)$ and social power $\pi(t)$ from history
$\mathcal{E}\_{\leq t}$

4
Reader rule: priced temperature-$\beta$ allocation

5
${\bm{C}}\_{ij}(t)\leftarrow\dfrac{s\_{ij}(t)^{1/\beta}/y\_{j}}{\sum\_{k}s\_{ik}(t)^{1/\beta}/y\_{k}}$
 for all $i,j$

6
foreach *agent $i$* do

7
build context from persona $\rho\_{i}$, state $\mu\_{i}(t)$, and
influence row ${\bm{C}}\_{i:}(t)$

8
emit belief, message, recipients $(b\_{i}(t{+}1),x\_{i}(t),R\_{i}(t))\sim m\_{i}$

9
append event $e\_{i}(t)$ to $\mathcal{E}$ and update state
$\mu\_{i}(t{+}1)$

10
Source rule: each source raises its price by its
attention share

11
$a\_{j}\leftarrow\sum\_{i}{\bm{C}}\_{ij}(t)$,  $y\_{j}\leftarrow y\_{j}\cdot a\_{j}$  for all $j$

12
return *$\hat{\theta}\_{T}=\frac{1}{n}\sum\_{i}b\_{i}(T)$*

### 4.3 Theoretical Guarantees

With the allocator in place, we now analyze what
it implies for collective accuracy. The operational beliefs are emitted
by LLMs and are not directly analyzable, so we pair them with a
tractable proxy driven by the same realized influence, an anchored
best-response (Friedkin–Johnsen) recursion:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$b\_{i}^{\mathrm{BR}}(t+1)=(1-\lambda\_{i})\,b\_{i}^{0}+\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,b\_{j}^{\mathrm{BR}}(t),\qquad\lambda\_{\max}=\max\_{i}\lambda\_{i},$$ |  | (3) |

with anchoring weights $\lambda\_{i}\in[0,1)$. The operational emission
need not solve this recursion exactly; we measure its per-step deviation
by the residual of agent $i$ at round $t$, evaluated at the operational
system’s own beliefs $b(t)$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{\delta}\_{i}(t)=\Bigl|b\_{i}(t+1)-(1-\lambda\_{i})\,b\_{i}^{0}-\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,b\_{j}(t)\Bigr|,$$ |  | (4) |

which is computable from the event log once the run is complete. Unrolling
the proxy recursion writes its estimate as a fixed weighting of the
initial signals, $\hat{\theta}\_{T}^{\mathrm{BR}}=q\_{T}^{\top}b^{0}$, where the
collective weight $q\_{T}$ is determined by $\{{\bm{C}}(t)\}$
(Appendix [8](https://arxiv.org/html/2607.03695v1#S8 "8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")). The wisdom-versus-herding question of
Section [3.1](https://arxiv.org/html/2607.03695v1#S3.SS1 "3.1 Opinion Dynamics and Collective Estimation ‣ 3 Problem Formulation ‣ Social Networks of LLM Agents") thus becomes a question about $q\_{T}$, which
the three results below answer: the first connects the proxy to the
operational system, and the next two characterize the consensus weight
under the baseline and the equalized allocator. All proofs, constants,
and assumptions are in Appendix [8](https://arxiv.org/html/2607.03695v1#S8 "8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").

###### Theorem 4.1 (Bridge).

Suppose every LLM emission is a $\delta$-approximate best response
evaluated at its own beliefs, i.e. $\hat{\delta}\_{i}(t)\leq\delta\_{T}$ for
all $i$ and $t<T$, where $\delta\_{T}=\max\_{i,\,0\leq t<T}\hat{\delta}\_{i}(t)$ is the uniform residual equation [4](https://arxiv.org/html/2607.03695v1#S4.E4 "Equation 4 ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") and
$\lambda\_{\max}<1$. Then for every $t\leq T$ and every row-stochastic
sequence $\{{\bm{C}}(t)\}$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bigl\|b(t)-b^{\mathrm{BR}}(t)\bigr\|\_{\infty}\leq\frac{\delta\_{T}}{1-\lambda\_{\max}}.$$ |  | (5) |

The bound is path-wise and attained, and anchoring cannot be dropped: at $\lambda\_{\max}=1$ a
row-stochastic sequence and emission rule exists whose gap grows linearly in $t$
(Appendix [8](https://arxiv.org/html/2607.03695v1#S8 "8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")), a counterexample rather than a claim that every $\lambda\_{\max}=1$
system diverges. The bound is non-vacuous in practice: an
explicit anchoring prompt keeps $\lambda$ comfortably below one on the anchored-persona cells
(median $0.25$; full breakdown in Section [5.2](https://arxiv.org/html/2607.03695v1#S5.SS2 "5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")), and
Figure [3](https://arxiv.org/html/2607.03695v1#S5.F3 "Figure 3 ‣ Online pricing clears herding round by round. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents") confirms the bound holds on real agents.
The operational estimate inherits the proxy’s accuracy, $|\hat{\theta}\_{T}-\hat{\theta}\_{T}^{\mathrm{BR}}|\leq\delta\_{T}/(1-\lambda\_{\max})$, and likewise its standard
deviation, so it suffices to analyze $q\_{T}$, measured via the effective sample size
$N\_{\mathrm{eff}}(q\_{T})=1/\|q\_{T}\|\_{2}^{2}$ [[26](https://arxiv.org/html/2607.03695v1#bib.bib25)], which gives variance
$s^{2}/N\_{\mathrm{eff}}(q\_{T})$.

The next theorem fixes the exposure graph and varies the attention
width. It characterizes the consensus weight $\nu\_{{\bm{C}}(\beta)}$, the
stationary distribution of ${\bm{C}}(\beta)$, which is the long-horizon limit
of $q\_{T}$ under uniform anchoring as $\lambda\uparrow 1$
(Appendix [8](https://arxiv.org/html/2607.03695v1#S8 "8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")); accordingly $N\_{\mathrm{eff}}(\beta)=1/\|\nu\_{{\bm{C}}(\beta)}\|\_{2}^{2}$. We reserve $\pi(t)$ for the social power
that builds ${\bm{C}}$ and write $\nu$ for the consensus weight it induces;
the two are distinct.

###### Theorem 4.2 (Attention width controls collective accuracy).

Let ${\bm{C}}(\beta)$ be the fixed-graph realized influence with $\zeta\in[0,1)$ and irreducible exposure support $B$, where $B\_{ij}=\mathbf{1}\{\bar{W}\_{ij}>0\}$. Write the degrees $d\_{i}=\sum\_{j}B\_{ij}$, $D=\diag(d\_{1},\ldots,d\_{n})$, $d\_{\max}=\max\_{i}d\_{i}$, and let
$L$ be the log-spread and $\underline{g}$ the dominance gap of the scores
$s\_{ij}$ (Appendix [8](https://arxiv.org/html/2607.03695v1#S8 "8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")). In the homoskedastic case:

1. 1.

   *(Wide, wisdom of crowds.)* If $B=B^{\top}$ is irreducible,
   then ${\bm{C}}(\beta)\to D^{-1}B$ and $\nu\_{{\bm{C}}(\beta)}\to d/({\bm{1}}^{\top}d)$ as $\beta\to\infty$, so:

   |  |  |  |
   | --- | --- | --- |
   |  | $$\lim\_{\beta\to\infty}N\_{\mathrm{eff}}(\beta)=\frac{(\sum\_{i}d\_{i})^{2}}{\sum\_{i}d\_{i}^{2}},$$ |  |

   which equals $n$ if and only if $B$ is degree-regular; for finite
   $\beta$ the consensus weight obeys $\bigl|\|\nu\_{{\bm{C}}(\beta)}\|\_{2}^{2}-\|\nu^{\star}\|\_{2}^{2}\bigr|\leq 2\kappa\_{B}(e^{L/\beta}-1)$ with
   $\nu^{\star}=d/({\bm{1}}^{\top}d)$ and $\kappa\_{B}$ a condition number of
   $D^{-1}B$ (Appendix [8](https://arxiv.org/html/2607.03695v1#S8 "8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")), so:$N\_{\mathrm{eff}}(\beta)\to(\sum\_{i}d\_{i})^{2}/\sum\_{i}d\_{i}^{2}$ by continuity.
2. 2.

   *(Narrow, herding.)* Assume $B$ is irreducible and the scores
   admit a unique dominant pair: $j\_{i}^{\star}=\argmax\_{k}s\_{ik}$ is unique
   for every row, with $j\_{i}^{\star}=h$ for all $i\neq h$ and $j\_{h}^{\star}=g\neq h$. Then with $\rho(\beta)=(d\_{\max}-1)\,e^{-\underline{g}/\beta}$, whenever $\rho(\beta)<1$,

   |  |  |  |
   | --- | --- | --- |
   |  | $$N\_{\mathrm{eff}}(\beta)\leq\frac{2}{(1-\rho(\beta))^{2}},$$ |  |

   so $N\_{\mathrm{eff}}(\beta)\leq 8$ whenever $\rho(\beta)\leq\tfrac{1}{2}$,
   i.e. $\beta\leq\underline{g}/\log(2(d\_{\max}-1))$, independently of
   $n$.

Narrow attention concentrates each row of ${\bm{C}}$ on the dominant pair,
collapsing the collective weight onto a few agents; wide attention
flattens it but reaches the optimum only under degree-regularity, the
sole remaining obstruction. Both failures are column imbalances of
${\bm{C}}$, which is exactly what the equalized allocator removes.

###### Theorem 4.3 (Exact optimality under equalization).

Under uniform anchoring $\lambda\in[0,1)$ and signal exogeneity, let
$\bar{\delta}\_{\mathrm{col}}$ be the largest column defect over
the run. Then the proxy weight satisfies:

|  |  |  |
| --- | --- | --- |
|  | $$\Bigl\|q\_{T}-\tfrac{1}{n}{\bm{1}}\Bigr\|\_{1}\leq\bar{\delta}\_{\mathrm{col}}\Bigl(\tfrac{\lambda}{1-\lambda}+T\lambda^{T}\Bigr),$$ |  |

for every horizon $T$ and every realized sequence. In particular, if
every ${\bm{C}}(t)$ is doubly stochastic ($\bar{\delta}\_{\mathrm{col}}=0$),
then $q\_{T}=\frac{1}{n}{\bm{1}}$ exactly, so
$\mathrm{Var}(\hat{\theta}\_{T}^{\mathrm{BR}})=s^{2}/n$ and $N\_{\mathrm{eff}}=n$.
The operational estimate inherits this up to the bridge gap,

|  |  |  |
| --- | --- | --- |
|  | $$\Bigl|\mathrm{sd}(\hat{\theta}\_{T})-\tfrac{s}{\sqrt{n}}\Bigr|\leq\frac{\delta\_{T}}{1-\lambda}+s\,\bar{\delta}\_{\mathrm{col}}\Bigl(\tfrac{\lambda}{1-\lambda}+T\lambda^{T}\Bigr).$$ |  |

Each price round is one Sinkhorn iteration, which need not clear the
market exactly in a single pass; the guarantee is stated in the measured
column defect $\bar{\delta}\_{\mathrm{col}}$ actually achieved at run
time, and is exact only in the doubly stochastic limit, reached by
iterating the price update to tolerance
(Appendix [11](https://arxiv.org/html/2607.03695v1#S11 "11 The Pricing Protocol ‣ Social Networks of LLM Agents")). Unlike the baseline, which collapses to
$N\_{\mathrm{eff}}\leq 8$ under a dominant pair no matter how large $n$
is, the equalized allocator drives $q\_{T}$ to uniform at a rate set by
$\bar{\delta}\_{\mathrm{col}}$, with no mixing, aperiodicity, or
connectivity hypothesis on the realized sequence.

## 5 Experiments

### 5.1 Experimental setup

#### Benchmarks.

*HiddenBench* [[29](https://arxiv.org/html/2607.03695v1#bib.bib36)] poses $12$ hidden-profile
reasoning problems, where each of $n{=}24$ agents holds a different clue that the group must pool
to answer correctly; *Werewolf* [[45](https://arxiv.org/html/2607.03695v1#bib.bib37)] is a $16$-agent social deduction game
where villagers deliberate and vote to unmask a hidden adversarial werewolf; and
*AgentsNet* [[23](https://arxiv.org/html/2607.03695v1#bib.bib38)] places $n\in\{8,16,24,32,50\}$ agents as nodes in a
graph, where each communicates only with its neighbours to reach a conflict-free colouring. We
additionally map the theorem’s boundary on full-information *Debate* [[15](https://arxiv.org/html/2607.03695v1#bib.bib1)]
and commons-dilemma *GovSim* [[35](https://arxiv.org/html/2607.03695v1#bib.bib39)]. Full environment specifications are
in Appendix [12.4](https://arxiv.org/html/2607.03695v1#S12.SS4 "12.4 Environments ‣ 12 Experimental details ‣ Social Networks of LLM Agents").

Models. Each agent is Qwen2.5-7B-Instruct [[39](https://arxiv.org/html/2607.03695v1#bib.bib40)] by
default, run offline with greedy decoding (temperature-$0$); each condition is repeated over $5$
seeds re-drawing tasks and position assignments, and the shaded bands in
Figures [1](https://arxiv.org/html/2607.03695v1#S5.F1 "Figure 1 ‣ Context width 𝛽 controls herding versus wisdom. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents") and [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents") span their min–max. A network is one model
instantiated as $n$ agents that *share weights*, differing only in persona, private
information, and position, so any collective effect is structural rather than a capability
artifact — the injected confident-wrong leader is the same base model, so herding traces to its
position, not lower capability. Two experiments break this homogeneity: the AgentsNet society
pairs strong 7B hubs with weak 1.5B agents, and the capability ladder scales the central agent
across Qwen2.5-$\{1.5,3,7,14\}$B, replicated on Llama-3-$\{1,3,8\}$B [[22](https://arxiv.org/html/2607.03695v1#bib.bib41)].
Full model, operator, seed, prompt, and hardware details are in
Appendices [12.1](https://arxiv.org/html/2607.03695v1#S12.SS1 "12.1 Models and inference ‣ 12 Experimental details ‣ Social Networks of LLM Agents")–[12.6](https://arxiv.org/html/2607.03695v1#S12.SS6 "12.6 Hardware, software, and reproducibility ‣ 12 Experimental details ‣ Social Networks of LLM Agents").

### 5.2 Main results

#### Context width $\beta$ controls herding versus wisdom.

A single knob, the context width $\beta$, swings the collective between herding and
wisdom on both aggregation-dependent tasks (Figure [1](https://arxiv.org/html/2607.03695v1#S5.F1 "Figure 1 ‣ Context width 𝛽 controls herding versus wisdom. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")A,B).
In *HiddenBench*, the baseline collapses onto the confident-wrong hub at narrow
$\beta$ and recovers at wide $\beta$, improving collective accuracy by
$\mathbf{+0.64}$. A single item traced through both regimes, with the exact prompts and the
model’s real replies, is in Appendix [12.7](https://arxiv.org/html/2607.03695v1#S12.SS7 "12.7 Prompt templates ‣ 12 Experimental details ‣ Social Networks of LLM Agents"). The equalizer removes this collapse, while
the control shows it disappears without the dominant-wrong source.
*Werewolf* shows the same pattern with the game’s intrinsic wrong source seated at the
influence hub: the
baseline moves from near-zero accuracy at narrow $\beta$ to substantially higher
accuracy at wide $\beta$ ($\mathbf{+0.61}$), while the equalizer and control stay
above the herding floor. The same collapse and equalizer recovery replicate on
Llama-3.1-8B (Table [11](https://arxiv.org/html/2607.03695v1#S13.T11 "Table 11 ‣ 13.7 Cross-family generality: Llama-3.1-8B ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")). The individual and oracle lines mark the lower and upper
reference levels; the oracle gap is diagnosed in Appendix [13.3](https://arxiv.org/html/2607.03695v1#S13.SS3 "13.3 Proxy↔LLM bridge and effective sample size ‣ 13 Full experimental results ‣ Social Networks of LLM Agents"). The full
per-$\beta$ breakdown, including the causal adversary-on/off decomposition, is in
Appendices [13.4](https://arxiv.org/html/2607.03695v1#S13.SS4 "13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") (HiddenBench) and [13.5](https://arxiv.org/html/2607.03695v1#S13.SS5 "13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") (Werewolf).

Figure 1: One influence operator, three recognized environments, two facets.
(A, B) Collective accuracy vs. context width $\beta$ on *HiddenBench*
($n{=}24$) and *Werewolf* ($n{=}16$). Orange is the *baseline* allocator,
blue is the *equalizer*, and light blue is the *control* that removes the
dominant-wrong source. Dotted lines show individual and oracle reference levels;
shaded bands in (A, B) span the seed-to-seed min–max over $5$ seeds.
(C) Colouring conflicts vs. network size $n$ on *AgentsNet*, comparing
strong agents placed at the centre (green) with strong agents placed at the periphery (gold).

#### Where capability sits controls coordination.

On a coordination task the operator exposes a different facet
(Figure [1](https://arxiv.org/html/2607.03695v1#S5.F1 "Figure 1 ‣ Context width 𝛽 controls herding versus wisdom. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")C). *AgentsNet* has agents self-organise into complementary
colours. A heterogeneous $7$B$\times$$1.5$B society fixes the capability budget,
varying only where the strong agents sit: strong agents at the centre yield fewer conflicts
than at the periphery, and the advantage grows with scale,
from $\mathbf{+1.5}$ at $n{=}8$ to $\mathbf{+10.6}$ at $n{=}50$. Coordination has no
single wrong answer to herd onto, isolating placement rather than the
herding–wisdom transition. The placement ablation matrix (social-power and
Sinkhorn invariance, the weak-hub Watts–Strogatz control) is in Appendix [13.6](https://arxiv.org/html/2607.03695v1#S13.SS6 "13.6 AgentsNet: placement and its ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").

Figure 2: The equalizer clears herding online, round by round.
Per-round collective accuracy at narrow $\beta$ on *HiddenBench* ($n{=}24$)
and *Werewolf* ($n{=}16$). Orange is the *baseline*; grey dashed is the
*operator*, obtained by clearing the equalized operator to its fixed point each
round; blue is *online pricing*, which applies one price update per discussion
round. Shaded bands span the min–max over $5$ seeds. (c) Fraction of the
narrow-$\beta$ gap closed over rounds on HiddenBench and Werewolf.

#### Online pricing clears herding round by round.

Figure [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents") separates the ideal equalized operator from its online
implementation, which runs one price update per discussion round rather than to
convergence (the decentralized protocol of Section [4.2](https://arxiv.org/html/2607.03695v1#S4.SS2 "4.2 Equalized Context Allocation ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")). Because
prices start uniform, the first step sits at the baseline and the collective follows
the confident-wrong source; subsequent updates reduce the captured column, so the
online curve rises toward the operator curve. The recovery is nearly complete on
*HiddenBench* (Figure [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")a, $0.10\!\to\!0.61$) but partial on the
shorter-horizon *Werewolf* (Figure [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")b, $0.05\!\to\!0.18$ against
the operator’s $0.24$). The two close their gaps at a similar per-round pace, so the
remaining Werewolf gap is a horizon effect, not a different clearing mechanism.

![Refer to caption](https://arxiv.org/html/2607.03695v1/fig_bridge_real.png)


Figure 3: The proxy–LLM bridge (Theorem [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")) on real Qwen data.
(a) Measured sup-norm discrepancy $\sup\_{t}\lVert b\_{\mathrm{LLM}}-b\_{\mathrm{BR}}\rVert\_{\infty}$
vs. the theoretical ceiling $\delta\_{T}/(1-\lambda\_{\max})$, pooling $254$ cells — one per
(arm, $\beta$, seed) with $\lambda\_{\max}<1$ — across four $8$-seed testbed runs spanning
Qwen2.5-3B and -7B backbones, including one 7B run with an explicit anchoring-persona prompt
and one 3B run at reduced damping ($\zeta{=}0.6$); coloured by fitted $\lambda\_{\max}$; dotted
line is $y=x$.
(b) Real LLM collective estimate $\hat{\theta}\_{\mathrm{LLM}}$ vs. the proxy’s
first-moment prediction $q\_{T}^{\!\top}b\_{0}$, pooling the $8$-seed 7B run from panel (a) with a
further $24$-seed 7B sweep; dotted is $y=x$, solid is the OLS fit.
(c) LLM–theory gap, normalized by the guaranteed ceiling $\delta/(1-\lambda)$ (dashed),
across $T{=}4$ discussion rounds on the $8$-seed anchored-persona 7B run from panel (a) alone;
band is the interquartile range.

#### The proxy predicts real LLM estimates.

The discussion benchmarks run DeGroot updating ($\lambda{=}1$), the unanchored limit
of Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"): the proxy’s effective sample size collapses and recovers
with $\beta$, and the LLM’s collective accuracy tracks that swing (Figure [1](https://arxiv.org/html/2607.03695v1#S5.F1 "Figure 1 ‣ Context width 𝛽 controls herding versus wisdom. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")A,B).
At $\lambda{=}1$ this is empirical, not a consequence of Theorem [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"), whose
bound is vacuous here (Proposition [8.4](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem4 "Proposition 8.4 (Sharpness and failure at 𝜆=1). ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")); the two share the $\beta$-gating
mechanism, not a theorem mapping $N\_{\mathrm{eff}}$ onto accuracy. The bridge bound requires
anchoring, so we certify the step-by-step correspondence on the anchored testbed: there the
LLM estimate is the influence-weighted average the theory predicts (slope $0.88$, $R^{2}{=}0.74$),
and the sup-norm bound holds on all $254$ cells (Figure [3](https://arxiv.org/html/2607.03695v1#S5.F3 "Figure 3 ‣ Online pricing clears herding round by round. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")). The anchoring
$\lambda$ is fit per agent, so the ceiling is fitted not prescribed—tight on the anchored
subset, satisfied over the pool; full provenance is in Appendix [13.3](https://arxiv.org/html/2607.03695v1#S13.SS3 "13.3 Proxy↔LLM bridge and effective sample size ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").

### 5.3 Ablations

The herding floor is an effective-sample-size effect, not a small-network artifact: it holds at
every society size on the real benchmarks (Werewolf for $n\in\{6,8,10,12,16\}$, HiddenBench for
$n\in\{8,16,24\}$; full breakdown in Appendix [13.4](https://arxiv.org/html/2607.03695v1#S13.SS4 "13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") and [13.5](https://arxiv.org/html/2607.03695v1#S13.SS5 "13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")), so a larger network
does not dilute a captured hub. Table [1](https://arxiv.org/html/2607.03695v1#S5.T1 "Table 1 ‣ 5.3 Ablations ‣ 5 Experiments ‣ Social Networks of LLM Agents") sweeps the remaining controls in the
controlled testbed (the ablation grid, plus the model-scale sweep, is in
Appendix [13.2](https://arxiv.org/html/2607.03695v1#S13.SS2 "13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") and [13.1](https://arxiv.org/html/2607.03695v1#S13.SS1 "13.1 Controlled estimation testbed: two regimes across model scale ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")): the two-regime is invariant to
follower self-reliance and survives five
structural variants of the interaction model. It is, however, gated causally by social power,
vanishing entirely when the gate is off ($\zeta{=}0$).

Table 1: Ablations (controlled testbed, Qwen2.5-3B, $8$ seeds). Collective error, lower is
better; narrow $\beta{=}0.1$ is the herding regime, wide $\beta{=}10$ the aggregate.
Variants: memory, exposure-pricing, late-joiner, distance-decay, skeptic.

| Ablation | range | narrow $\beta$ | wide $\beta$ | reading |
| --- | --- | --- | --- | --- |
| social power $\zeta{=}0$ | gate off | $\mathbf{5.5}$ | $4.9$ | no damping $\Rightarrow$ no herding |
| social power $\zeta{>}0$ | $0.2$–$0.95$ | $\approx 42$ | $4$–$6$ | damping on $\Rightarrow$ herding |
| self-reliance $\lambda$ | $0.3$–$0.7$ | $42$ | $11.5$ | robust to follower self-weight |
| equalizer $k$ (Sinkhorn) | $1$–$4$ | column defect $0.14\!\to\!0.037$ (Fig. [4](https://arxiv.org/html/2607.03695v1#S13.F4 "Figure 4 ‣ 13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")a) | | one knob clears the market |
| model variants | $5$ kinds | $18$–$59$ | $2$–$15$ | herding persists; eq clears each |

## 6 Conclusion

SNLA shows that a single parameter controls collective intelligence: the
attention width $\beta$. It governs whether an LLM-agent population pools its
information or herds. Narrow $\beta$ collapses collective accuracy onto a few
dominant sources; wide $\beta$ recovers wisdom-of-crowds behavior, once exposure
is balanced. One failure then remains, a high-power source that occupies too
many contexts, and a decentralized pricing rule removes it, restoring the
optimal collective weights whenever a dominant source is present, with no
retraining.

## References

- [1]
  D. Acemoglu and A. Ozdaglar (2011)
  Opinion dynamics and learning in social networks.
  Dynamic Games and Applications 1 (1), pp. 3–49.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p2.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p1.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [2]
  A. Amayuelas, X. Yang, A. Antoniades, W. Hua, L. Pan, and W. Y. Wang (2024)
  Multiagent collaboration attack: investigating adversarial attacks in large language model collaborations via debate.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 6929–6948.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [3]
  V. Bala and S. Goyal (1998)
  Learning from neighbours.
  The review of economic studies 65 (3), pp. 595–621.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p2.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p1.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [4]
  A. V. Banerjee (1992)
  A simple model of herd behavior.
  The quarterly journal of economics 107 (3), pp. 797–817.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [5]
  S. Bikhchandani, D. Hirshleifer, and I. Welch (1992)
  A theory of fads, fashion, custom, and cultural change as informational cascades.
  Journal of political Economy 100 (5), pp. 992–1026.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [6]
  P. Bonacich (1987)
  Power and centrality: a family of measures.
  American journal of sociology 92 (5), pp. 1170–1182.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p4.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§4.1](https://arxiv.org/html/2607.03695v1#S4.SS1.SSS0.Px1.p1.2 "Exposure and social power. ‣ 4.1 The Realized-Influence Operator ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents").
- [7]
  S. Brin (1998)
  The pagerank citation ranking: bringing order to the web.
  Proceedings of ASIS, 1998 98, pp. 161–172.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p4.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [8]
  C. Chan, W. Chen, Y. Su, J. Yu, W. Xue, S. Zhang, J. Fu, and Z. Liu (2024)
  Chateval: towards better llm-based evaluators through multi-agent debate.
  In International conference on learning representations,
  Vol. 2024, pp. 9079–9093.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [9]
  Y. Cho, S. C. Guntuku, and L. Ungar (2025)
  Herd behavior: investigating peer influence in llm-based multi-agent systems.
  arXiv preprint arXiv:2505.21588.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p3.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [10]
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. Rogers (2024)
  Simulating opinion dynamics with networks of llm-based agents.
  In Findings of the association for computational linguistics: NAACL 2024,
  pp. 3326–3346.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [11]
  A. Clark, D. de Las Casas, A. Guy, A. Mensch, M. Paganini, J. Hoffmann, B. Damoc, B. Hechtman, T. Cai, S. Borgeaud, et al. (2022)
  Unified scaling laws for routed language models.
  In International conference on machine learning,
  pp. 4057–4086.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p3.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [12]
  I. Csiszár (1975)
  I-divergence geometry of probability distributions and minimization problems.
  The annals of probability, pp. 146–158.
  Cited by: [Remark 11.6](https://arxiv.org/html/2607.03695v1#S11.Thmtheorem6.p1.1 "Remark 11.6 (Why pricing rather than quotas). ‣ 11.2 Targeted clearing and heteroskedastic optimality ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents").
- [13]
  G. De Marzo, C. Castellano, and D. Garcia (2024)
  Language understanding as a constraint on consensus size in llm societies.
  arXiv preprint arXiv:2409.02822.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [14]
  M. H. DeGroot (1974)
  Reaching a consensus.
  Journal of the American Statistical association 69 (345), pp. 118–121.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p2.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p1.1 "2 Related Work ‣ Social Networks of LLM Agents"),
  [§3.1](https://arxiv.org/html/2607.03695v1#S3.SS1.SSS0.Px1.p1.1 "Opinion dynamics. ‣ 3.1 Opinion Dynamics and Collective Estimation ‣ 3 Problem Formulation ‣ Social Networks of LLM Agents"),
  [§8.1](https://arxiv.org/html/2607.03695v1#S8.SS1.p1.3 "8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").
- [15]
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch (2024)
  Improving factuality and reasoning in language models through multiagent debate.
  In Forty-first international conference on machine learning,
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§12.4](https://arxiv.org/html/2607.03695v1#S12.SS4.SSS0.Px4.p1.1 "Boundary environments. ‣ 12.4 Environments ‣ 12 Experimental details ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents"),
  [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p1.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [16]
  W. Fedus, B. Zoph, and N. Shazeer (2022)
  Switch transformers: scaling to trillion parameter models with simple and efficient sparsity.
  Journal of Machine Learning Research 23 (120), pp. 1–39.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p3.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [17]
  J. Franklin and J. Lorenz (1989)
  On the scaling of multidimensional matrices.
  Linear Algebra and its applications 114, pp. 717–735.
  Cited by: [§11.1](https://arxiv.org/html/2607.03695v1#S11.SS1.p3.1.1 "Proof. ‣ 11.1 One price round is one Sinkhorn iteration ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents").
- [18]
  N. E. Friedkin and E. C. Johnsen (1990)
  Social influence and opinions.
  Journal of mathematical sociology 15 (3-4), pp. 193–206.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p2.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p1.1 "2 Related Work ‣ Social Networks of LLM Agents"),
  [§3.1](https://arxiv.org/html/2607.03695v1#S3.SS1.SSS0.Px1.p1.1 "Opinion dynamics. ‣ 3.1 Opinion Dynamics and Collective Estimation ‣ 3 Problem Formulation ‣ Social Networks of LLM Agents"),
  [§8.1](https://arxiv.org/html/2607.03695v1#S8.SS1.p1.3 "8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").
- [19]
  F. Galton (1907)
  Vox populi.
   Nature Publishing Group UK London.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [20]
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li (2023)
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [21]
  B. Golub and M. O. Jackson (2010)
  Naive learning in social networks and the wisdom of crowds.
  American Economic Journal: Microeconomics 2 (1), pp. 112–149.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p2.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p1.1 "2 Related Work ‣ Social Networks of LLM Agents"),
  [§3.1](https://arxiv.org/html/2607.03695v1#S3.SS1.SSS0.Px2.p1.2 "Collective estimation. ‣ 3.1 Opinion Dynamics and Collective Estimation ‣ 3 Problem Formulation ‣ Social Networks of LLM Agents"),
  [§8.4](https://arxiv.org/html/2607.03695v1#S8.SS4.p5.1 "8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").
- [22]
  A. Grattafiori, A. Dubey, A. Jauhri, A. Pandey, A. Kadian, A. Al-Dahle, A. Letman, A. Mathur, A. Schelten, A. Vaughan, et al. (2024)
  The llama 3 herd of models.
  arXiv preprint arXiv:2407.21783.
  Cited by: [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p2.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [23]
  F. Grötschla, L. Müller, J. Tönshoff, M. Galkin, and B. Perozzi (2025)
  Agentsnet: coordination and collaborative reasoning in multi-agent llms.
  arXiv preprint arXiv:2507.08616.
  Cited by: [§12.4](https://arxiv.org/html/2607.03695v1#S12.SS4.SSS0.Px3.p1.1 "AgentsNet (distributed graph colouring). ‣ 12.4 Environments ‣ 12 Experimental details ‣ Social Networks of LLM Agents"),
  [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p1.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [24]
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang (2024)
  Large language model based multi-agents: a survey of progress and challenges. arxiv 2024.
  arXiv preprint arXiv:2402.01680 10.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [25]
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, S. Yau, Z. Lin, L. Zhou, et al. (2024)
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In International Conference on Learning Representations,
  Vol. 2024, pp. 23247–23275.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [26]
  L. Kish (1965)
  Survey sampling..
  Cited by: [§4.3](https://arxiv.org/html/2607.03695v1#S4.SS3.p2.1 "4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"),
  [Definition 8.7](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem7.p1.1 "Definition 8.7 (Effective sample size). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").
- [27]
  D. A. Levin and Y. Peres (2026)
  Markov chains and mixing times.
   American Mathematical Society.
  Cited by: [Remark 9.4](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem4.p1.2 "Remark 9.4 (Relation to the operational weight). ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").
- [28]
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem (2023)
  Camel: communicative agents for" mind" exploration of large language model society.
  Advances in neural information processing systems 36, pp. 51991–52008.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [29]
  Y. Li, A. Naito, and H. Shirado (2025)
  HiddenBench: assessing collective reasoning in multi-agent llms via hidden profile tasks.
  arXiv preprint arXiv:2505.11556.
  Cited by: [§12.4](https://arxiv.org/html/2607.03695v1#S12.SS4.SSS0.Px1.p1.1 "HiddenBench (hidden-profile reasoning). ‣ 12.4 Environments ‣ 12 Experimental details ‣ Social Networks of LLM Agents"),
  [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p1.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [30]
  T. Liang, Z. He, W. Jiao, X. Wang, Y. Wang, R. Wang, Y. Yang, S. Shi, and Z. Tu (2024)
  Encouraging divergent thinking in large language models through multi-agent debate.
  In Proceedings of the 2024 conference on empirical methods in natural language processing,
  pp. 17889–17904.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents"),
  [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [31]
  C. D. Meyer (1975)
  The role of the group generalized inverse in the theory of finite markov chains.
  Siam Review 17 (3), pp. 443–464.
  Cited by: [§9.2](https://arxiv.org/html/2607.03695v1#S9.SS2.p10.1 "9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").
- [32]
  M. Papachristou and Y. Yuan (2025)
  Network formation and dynamics among multi-llms.
  PNAS nexus 4 (12), pp. pgaf317.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [33]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [34]
  J. Piao, Y. Yan, J. Zhang, N. Li, J. Yan, X. Lan, Z. Lu, Z. Zheng, J. Y. Wang, D. Zhou, et al. (2025)
  Agentsociety: large-scale simulation of llm-driven generative agents advances understanding of human behaviors and society.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p1.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [35]
  G. Piatti, Z. Jin, M. Kleiman-Weiner, B. Schölkopf, M. Sachan, and R. Mihalcea (2024)
  Cooperate or collapse: emergence of sustainable cooperation in a society of llm agents.
  Advances in Neural Information Processing Systems 37, pp. 111715–111759.
  Cited by: [§12.4](https://arxiv.org/html/2607.03695v1#S12.SS4.SSS0.Px4.p1.1 "Boundary environments. ‣ 12.4 Environments ‣ 12 Experimental details ‣ Social Networks of LLM Agents"),
  [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p1.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [36]
  P. Pitre, N. Ramakrishnan, and X. Wang (2025)
  CONSENSAGENT: towards efficient and effective consensus in multi-agent llm interactions through sycophancy mitigation.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 22112–22133.
  Cited by: [§1](https://arxiv.org/html/2607.03695v1#S1.p3.1 "1 Introduction ‣ Social Networks of LLM Agents").
- [37]
  A. V. Proskurnikov and R. Tempo (2017)
  A tutorial on modeling and analysis of dynamic social networks. part i.
  Annual Reviews in Control 43, pp. 65–79.
  Cited by: [§3.2](https://arxiv.org/html/2607.03695v1#S3.SS2.SSS0.Px2.p1.1 "Exposure and realized-influence graphs. ‣ 3.2 Social Networks of LLM Agents ‣ 3 Problem Formulation ‣ Social Networks of LLM Agents").
- [38]
  C. Qian, W. Liu, H. Liu, N. Chen, Y. Dang, J. Li, C. Yang, W. Chen, Y. Su, X. Cong, et al. (2024)
  Chatdev: communicative agents for software development.
  In Proceedings of the 62nd annual meeting of the association for computational linguistics (volume 1: Long papers),
  pp. 15174–15186.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [39]
  Qwen, :, A. Yang, B. Yang, B. Zhang, B. Hui, B. Zheng, B. Yu, C. Li, D. Liu, F. Huang, H. Wei, H. Lin, J. Yang, J. Tu, J. Zhang, J. Yang, J. Yang, J. Zhou, J. Lin, K. Dang, K. Lu, K. Bao, K. Yang, L. Yu, M. Li, M. Xue, P. Zhang, Q. Zhu, R. Men, R. Lin, T. Li, T. Tang, T. Xia, X. Ren, X. Ren, Y. Fan, Y. Su, Y. Zhang, Y. Wan, Y. Liu, Z. Cui, Z. Zhang, and Z. Qiu (2025)
  Qwen2.5 technical report.
  External Links: 2412.15115,
  [Link](https://arxiv.org/abs/2412.15115)
  Cited by: [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p2.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [40]
  N. Shazeer, A. Mirhoseini, K. Maziarz, A. Davis, Q. Le, G. Hinton, and J. Dean (2017)
  Outrageously large neural networks: the sparsely-gated mixture-of-experts layer.
  arXiv preprint arXiv:1701.06538.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p3.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [41]
  R. Sinkhorn (1967)
  Diagonal equivalence to matrices with prescribed row and column sums.
  The American Mathematical Monthly 74 (4), pp. 402–405.
  Cited by: [§4.2](https://arxiv.org/html/2607.03695v1#S4.SS2.SSS0.Px1.p1.3 "Exposure pricing. ‣ 4.2 Equalized Context Allocation ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents").
- [42]
  A. Taubenfeld, Y. Dover, R. Reichart, and A. Goldstein (2024)
  Systematic biases in llm simulations of debates.
  In Proceedings of the 2024 conference on empirical methods in natural language processing,
  pp. 251–267.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [43]
  L. Wang, H. Gao, C. Zhao, X. Sun, and D. Dai (2024)
  Auxiliary-loss-free load balancing strategy for mixture-of-experts.
  arXiv preprint arXiv:2408.15664.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p3.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [44]
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, et al. (2023)
  Autogen: enabling next-gen llm applications via multi-agent conversation.
  arXiv preprint arXiv:2308.08155.
  Cited by: [§2](https://arxiv.org/html/2607.03695v1#S2.p2.1 "2 Related Work ‣ Social Networks of LLM Agents").
- [45]
  Z. Xu, C. Yu, F. Fang, Y. Wang, and Y. Wu (2023)
  Language agents with reinforcement learning for strategic play in the werewolf game.
  arXiv preprint arXiv:2310.18940.
  Cited by: [§5.1](https://arxiv.org/html/2607.03695v1#S5.SS1.SSS0.Px1.p1.1 "Benchmarks. ‣ 5.1 Experimental setup ‣ 5 Experiments ‣ Social Networks of LLM Agents").
- [46]
  K. Zhu, H. Du, Z. Hong, X. Yang, S. Guo, D. Z. Wang, Z. Wang, C. Qian, R. Tang, H. Ji, et al. (2025)
  Multiagentbench: evaluating the collaboration and competition of llm agents.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 8580–8622.
  Cited by: [§12.4](https://arxiv.org/html/2607.03695v1#S12.SS4.SSS0.Px4.p1.1 "Boundary environments. ‣ 12.4 Environments ‣ 12 Experimental details ‣ Social Networks of LLM Agents").

Supplementary Materials

## 7 Assumptions and Measurement of $\delta$

This appendix collects the assumptions of the three theorems and the
procedure measuring $\delta$ from the event log. Throughout, $P=\mathrm{diag}(\lambda\_{1},\ldots,\lambda\_{n})$, $\lambda\_{\max}=\max\_{i}\lambda\_{i}$, and $\{{\bm{C}}(t)\}$ is the row-stochastic realized-influence
sequence; operational and proxy beliefs $b(t),b^{\mathrm{BR}}(t)$ are
both initialized at $b^{0}$.

###### Assumption 7.1 (Anchored cooperative regime).

The proxy is the quadratic, cooperative, anchored best response: the
anchoring weights satisfy $\lambda\_{i}\in[0,1)$ for all $i$, so that
$\lambda\_{\max}<1$.

The weight $\lambda\_{i}<1$ is the regime in which the persona anchor
$\rho\_{i}$ exerts nonzero pull toward $b\_{i}^{0}$. The restriction
$\lambda\_{\max}<1$ cannot in general be dropped:
Proposition [8.4](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem4 "Proposition 8.4 (Sharpness and failure at 𝜆=1). ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") exhibits a row-stochastic sequence and a
$\delta$-rational rule with $\lambda\_{\max}=1$ whose gap grows
linearly in $t$. This is a constructive counterexample, not a claim that
every $\lambda\_{\max}=1$ system diverges.

###### Assumption 7.2 ($\delta$-rational emission).

There exists $\delta\geq 0$ such that, along the operational
trajectory,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Bigl|b\_{i}(t+1)-(1-\lambda\_{i})\,b\_{i}^{0}-\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,b\_{j}(t)\Bigr|\ \leq\ \delta\qquad\text{for all }i\text{ and all }t\geq 0,$$ |  | (6) |

where ${\bm{C}}(t)$ is the realized-influence matrix produced by the
operational system at round $t$.

Two features of equation [6](https://arxiv.org/html/2607.03695v1#S7.E6 "Equation 6 ‣ Assumption 7.2 (𝛿-rational emission). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents") matter. The best response is evaluated
at the LLM’s *own* beliefs $b(t)$, not the proxy
$b^{\mathrm{BR}}(t)$: a one-step condition presupposing nothing about
trajectory distance. And every quantity in equation [6](https://arxiv.org/html/2607.03695v1#S7.E6 "Equation 6 ‣ Assumption 7.2 (𝛿-rational emission). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents") is logged,
so $\delta$ is measurable per emission, the assumption falsifiable.

###### Assumption 7.3 (Signal model and signal–exposure independence).

The private signals are $b\_{i}^{0}=\theta^{\star}+\xi\_{i}$ with
$\xi\_{1},\ldots,\xi\_{n}$ independent, $\mathbb{E}[\xi\_{i}]=0$, and
$\mathrm{Var}(\xi\_{i})=s\_{i}^{2}$, and the noise vector
$\xi=(\xi\_{1},\ldots,\xi\_{n})$ is independent of the realized sequence
$\{{\bm{C}}(t)\}\_{t\geq 0}$. The homoskedastic case is $s\_{i}^{2}\equiv s^{2}$.

Independence of $\xi$ from $\{{\bm{C}}(t)\}$ holds when recipient selection
and event qualities depend on messages only through timing and routing,
not belief values; it is the exogenous-topology analogue from classical
opinion dynamics and matches our fixed-topology environments. It is what
licenses treating $q\_{T}$ as fixed under $\mathbb{E}\_{\xi}$ in
Proposition [8.6](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem6 "Proposition 8.6 (Unbiasedness and variance). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents"): belief-dependent selection couples $q\_{T}$
and $\xi$, voiding the conditional variance identities, and so lies
outside all variance-level results below. The Bridge Theorem, which does
not use Assumption [7.3](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem3 "Assumption 7.3 (Signal model and signal–exposure independence). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents"), is unaffected.

#### Measuring $\delta$.

Assumption [7.2](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem2 "Assumption 7.2 (𝛿-rational emission). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents") is checkable round by round. At round $t$,
both the realized-influence row ${\bm{C}}\_{i:}(t)$ and the operational
beliefs $b(t)$ are functions of the event log, so the per-emission
residual

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{\delta}\_{i}(t)=\Bigl|b\_{i}(t+1)-(1-\lambda\_{i})\,b\_{i}^{0}-\lambda\_{i}\textstyle\sum\_{j}{\bm{C}}\_{ij}(t)\,b\_{j}(t)\Bigr|$$ |  | (7) |

is computable offline once the run is complete. The anchoring weights
$(\lambda\_{i})$ are not assumed known: they are fit per agent by least
squares over the run, minimizing $\sum\_{t}\hat{\delta}\_{i}(t)^{2}$ over
$\lambda\_{i}\in[0,1)$. For fixed $i$ this objective is a univariate
quadratic in $\lambda\_{i}$, since $\hat{\delta}\_{i}(t)$ is affine in
$\lambda\_{i}$ at each $t$, so the fit is closed-form. The theorems require
the *uniform* residual of Assumption [7.2](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem2 "Assumption 7.2 (𝛿-rational emission). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents"), so the value
that instantiates them is the maximum

|  |  |  |
| --- | --- | --- |
|  | $$\delta\_{T}=\max\_{i,\,0\leq t<T}\,\hat{\delta}\_{i}(t),$$ |  |

not a quantile: an upper quantile bounds all but a fraction of the
emissions and yields only a trimmed, high-probability diagnostic, under
which the bridge bound holds after discarding the residual outliers. A
finite run of length $T$ measures $\delta\_{T}$ and so supports the bridge
bound up to horizon $T$; extending it to all $t$ requires the residual
to remain uniformly bounded beyond the run, which is an assumption, not
a measurement. The empirical distribution of $\hat{\delta}\_{i}(t)$ is itself
a finding: it quantifies how far a given backbone, persona, and topic
depart from a rational anchored opinion updater, and its tail governs
the gap between the uniform bound and its trimmed counterpart.

## 8 Proof of Theorem [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") (Bridge)

This appendix proves the three theorems and supporting results. The
development is self-contained: all constants are explicit, and the
stationary perturbation of the two-regime theorem is carried out from a
deviation-matrix identity (Lemma [9.3](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem3 "Lemma 9.3 (Deviation matrix and exact perturbation identity). ‣ 9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")).

We use the following notation throughout. For a matrix $R$,
$\|R\|\_{\infty}=\max\_{i}\sum\_{j}|R\_{ij}|$ is the maximum absolute row sum,
which is the operator norm induced by the vector $\ell\_{\infty}$ norm;
for a vector $v$, $\|v\|\_{p}$ is the usual $\ell\_{p}$ norm. A
row-stochastic matrix ${\bm{C}}$ satisfies ${\bm{C}}\geq 0$ entrywise and
${\bm{C}}{\bm{1}}={\bm{1}}$. A nonnegative square matrix is *irreducible*
if its support digraph is strongly connected. We write $e\_{j}$ for the
$j$-th standard basis vector and $\Delta\_{n}$ for the probability simplex
in $\mathbb{R}^{n}$. The exposure graph, social power, and realized influence are
$\bar{{\bm{W}}}(t)$, $\pi(t)$, and ${\bm{C}}(t)$ as defined in
Section [4.1](https://arxiv.org/html/2607.03695v1#S4.SS1 "4.1 The Realized-Influence Operator ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"); we abbreviate the per-pair
exposure–power score by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$s\_{ij}(t)\coloneqq\bar{W}\_{ij}(t)\,\pi\_{j}(t),$$ |  | (8) |

so that the realized influence is the row-wise tempered allocation
${\bm{C}}\_{ij}(t)=s\_{ij}(t)^{1/\beta}/\sum\_{k}s\_{ik}(t)^{1/\beta}$. Since
$\pi\_{j}(t)\geq\frac{1-\zeta}{n}>0$ for every $j$
(Lemma [8.2](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem2 "Lemma 8.2 (Well-posedness of social power). ‣ 8.2 Well-posedness of social power ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") below), $s\_{ij}(t)>0$ if and only if
$\bar{W}\_{ij}(t)>0$, so ${\bm{C}}(t)$ has exactly the support of the
exposure graph.

### 8.1 The proxy and its closed form

The operational beliefs are emitted by the LLM backbones and are not
directly analyzable. The proxy replaces each emission by an anchored
best response driven by the *same* realized influence sequence
$\{{\bm{C}}(t)\}$. Writing the cooperative quadratic best response of
agent $i$ explicitly, the proxy is the recursion

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$b^{\mathrm{BR}}(0)=b^{0},\qquad b\_{i}^{\mathrm{BR}}(t+1)=(1-\lambda\_{i})\,b\_{i}^{0}+\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,b\_{j}^{\mathrm{BR}}(t),$$ |  | (9) |

which in matrix form, with $P=\mathrm{diag}(\lambda\_{1},\ldots,\lambda\_{n})$, reads

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$b^{\mathrm{BR}}(t+1)=({\bm{I}}-P)\,b^{0}+P\,{\bm{C}}(t)\,b^{\mathrm{BR}}(t).$$ |  | (10) |

The peer beliefs entering equation [9](https://arxiv.org/html/2607.03695v1#S8.E9 "Equation 9 ‣ 8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") are the proxy’s own
$b\_{j}^{\mathrm{BR}}(t)$, never the operational $b\_{j}(t)$: the proxy is a
self-contained linear dynamical system, coupled to the operational run
only through the realized matrices $\{{\bm{C}}(t)\}$. Two classical models
are strict special cases. With uniform anchoring $\lambda\_{i}\equiv\lambda$ the recursion is the Friedkin–Johnsen model
[[18](https://arxiv.org/html/2607.03695v1#bib.bib10)] on the realized influence; with $\lambda\_{i}\equiv 1$ it is the DeGroot model [[14](https://arxiv.org/html/2607.03695v1#bib.bib16)].

###### Lemma 8.1 (Best-response closed form).

Fix agent $i$ and round $t$, and let the peer beliefs
$b^{\mathrm{BR}}(t)$ be given. The cooperative quadratic best response

|  |  |  |
| --- | --- | --- |
|  | $$b\_{i}^{\mathrm{BR}}(t+1)=\argmin\_{b\in\mathbb{R}}\ (1-\lambda\_{i})\,(b-b\_{i}^{0})^{2}+\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,\bigl(b-b\_{j}^{\mathrm{BR}}(t)\bigr)^{2}$$ |  |

has the unique solution equation [9](https://arxiv.org/html/2607.03695v1#S8.E9 "Equation 9 ‣ 8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents"), for every $\lambda\_{i}\in[0,1]$ and every row-stochastic ${\bm{C}}(t)$.

###### Proof.

Write the objective as

|  |  |  |
| --- | --- | --- |
|  | $$F(b)=(1-\lambda\_{i})\,(b-b\_{i}^{0})^{2}+\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,\bigl(b-b\_{j}^{\mathrm{BR}}(t)\bigr)^{2}.$$ |  |

The coefficient of $b^{2}$ is $(1-\lambda\_{i})+\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)=1>0$, so $F$ is strictly convex with unique minimizer
at $F^{\prime}(b)=0$. Since

|  |  |  |
| --- | --- | --- |
|  | $$F^{\prime}(b)=2(1-\lambda\_{i})(b-b\_{i}^{0})+2\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,\bigl(b-b\_{j}^{\mathrm{BR}}(t)\bigr)=2\Bigl[b-(1-\lambda\_{i})\,b\_{i}^{0}-\lambda\_{i}\sum\_{j}{\bm{C}}\_{ij}(t)\,b\_{j}^{\mathrm{BR}}(t)\Bigr]$$ |  |

(using $\sum\_{j}{\bm{C}}\_{ij}(t)=1$), $F^{\prime}(b)=0$ gives equation [9](https://arxiv.org/html/2607.03695v1#S8.E9 "Equation 9 ‣ 8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").
∎

### 8.2 Well-posedness of social power

The realized influence is built from the exposure graph $\bar{{\bm{W}}}(t)$
and the social power $\pi(t)$, the Katz–Bonacich centrality

|  |  |  |
| --- | --- | --- |
|  | $$\pi(t)^{\top}=\frac{1-\zeta}{n}\,{\bm{1}}^{\top}\bigl({\bm{I}}-\zeta\bar{{\bm{W}}}(t)\bigr)^{-1},\qquad\zeta\in[0,1).$$ |  |

The following lemma records that this is well defined and strictly
positive, a fact used repeatedly below (it guarantees that ${\bm{C}}(t)$ has
exactly the support of $\bar{{\bm{W}}}(t)$).

###### Lemma 8.2 (Well-posedness of social power).

For every row-stochastic $\bar{{\bm{W}}}(t)$ and every $\zeta\in[0,1)$,
the inverse $({\bm{I}}-\zeta\bar{{\bm{W}}}(t))^{-1}$ exists, $\pi(t)\in\Delta\_{n}$, and

|  |  |  |
| --- | --- | --- |
|  | $$\pi\_{j}(t)\ \geq\ \frac{1-\zeta}{n}\ >\ 0\qquad\text{for every }j.$$ |  |

At $\zeta=0$, $\pi\_{j}(t)=1/n$ for all $j$.

###### Proof.

Since $\bar{{\bm{W}}}(t)$ is row-stochastic, $\|\bar{{\bm{W}}}(t)\|\_{\infty}=1$,
hence $\|\zeta\bar{{\bm{W}}}(t)\|\_{\infty}=\zeta<1$. The Neumann series

|  |  |  |
| --- | --- | --- |
|  | $$\bigl({\bm{I}}-\zeta\bar{{\bm{W}}}(t)\bigr)^{-1}=\sum\_{k=0}^{\infty}\zeta^{k}\bar{{\bm{W}}}(t)^{k}$$ |  |

converges absolutely, so the inverse exists. Every term is entrywise
nonnegative, so $\pi(t)\geq 0$; the $k=0$ term gives

|  |  |  |
| --- | --- | --- |
|  | $$\pi\_{j}(t)=\frac{1-\zeta}{n}\sum\_{k\geq 0}\zeta^{k}\bigl[{\bm{1}}^{\top}\bar{{\bm{W}}}(t)^{k}\bigr]\_{j}\ \geq\ \frac{1-\zeta}{n}\bigl[{\bm{1}}^{\top}\bar{{\bm{W}}}(t)^{0}\bigr]\_{j}=\frac{1-\zeta}{n}.$$ |  |

Row-stochasticity gives $\bar{{\bm{W}}}(t)^{k}{\bm{1}}={\bm{1}}$, so

|  |  |  |
| --- | --- | --- |
|  | $$\pi(t)^{\top}{\bm{1}}=\frac{1-\zeta}{n}\,{\bm{1}}^{\top}\sum\_{k\geq 0}\zeta^{k}\bar{{\bm{W}}}(t)^{k}{\bm{1}}=\frac{1-\zeta}{n}\sum\_{k\geq 0}\zeta^{k}\,{\bm{1}}^{\top}{\bm{1}}=\frac{1-\zeta}{n}\cdot n\cdot\frac{1}{1-\zeta}=1,$$ |  |

so $\pi(t)\in\Delta\_{n}$. At $\zeta=0$, $\pi(t)^{\top}=\frac{1}{n}{\bm{1}}^{\top}$.
∎

### 8.3 The Bridge Theorem

The Bridge Theorem couples the operational system to the proxy
path-wise, for the realized $\{{\bm{C}}(t)\}$, with no stationarity, mixing,
or convergence hypothesis: the contraction comes entirely from
$\lambda\_{\max}<1$.

See [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")

###### Proof.

Let $e(t)\coloneqq b(t)-b^{\mathrm{BR}}(t)$, so $e(0)=0$.

*Step 1 (residual).* Define

|  |  |  |
| --- | --- | --- |
|  | $$u(t+1)\coloneqq b(t+1)-\Bigl[({\bm{I}}-P)\,b^{0}+P\,{\bm{C}}(t)\,b(t)\Bigr].$$ |  |

Its $i$-th entry is the quantity bounded in equation [6](https://arxiv.org/html/2607.03695v1#S7.E6 "Equation 6 ‣ Assumption 7.2 (𝛿-rational emission). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents"), so

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\|u(t+1)\|\_{\infty}\ \leq\ \delta,\qquad t\geq 0.$$ |  | (11) |

*Step 2 (error recursion).* Subtracting equation [10](https://arxiv.org/html/2607.03695v1#S8.E10 "Equation 10 ‣ 8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")
from the definition of $u(t+1)$, the anchor terms $({\bm{I}}-P)b^{0}$ cancel:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle e(t+1)$ | $\displaystyle=\Bigl[u(t+1)+({\bm{I}}-P)b^{0}+P{\bm{C}}(t)\,b(t)\Bigr]-\Bigl[({\bm{I}}-P)b^{0}+P{\bm{C}}(t)\,b^{\mathrm{BR}}(t)\Bigr]$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=u(t+1)+P{\bm{C}}(t)\,e(t).$ |  |

*Step 3 (contraction).* Since $\|{\bm{C}}(t)\|\_{\infty}=1$ and
$\|P\|\_{\infty}=\lambda\_{\max}$, $\|P{\bm{C}}(t)\|\_{\infty}\leq\lambda\_{\max}$, so by equation [11](https://arxiv.org/html/2607.03695v1#S8.E11 "Equation 11 ‣ Proof. ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents"),

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\|e(t+1)\|\_{\infty}\leq\|u(t+1)\|\_{\infty}+\|P{\bm{C}}(t)\,e(t)\|\_{\infty}\leq\delta+\lambda\_{\max}\,\|e(t)\|\_{\infty}.$$ |  | (12) |

*Step 4 (unrolling).* Induction on equation [12](https://arxiv.org/html/2607.03695v1#S8.E12 "Equation 12 ‣ Proof. ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") from $e(0)=0$ gives $\|e(t)\|\_{\infty}\leq\delta\sum\_{r=0}^{t-1}\lambda\_{\max}^{\,r}$: the inductive step is

|  |  |  |
| --- | --- | --- |
|  | $$\|e(t+1)\|\_{\infty}\leq\delta+\lambda\_{\max}\cdot\delta\sum\_{r=0}^{t-1}\lambda\_{\max}^{\,r}=\delta\sum\_{r=0}^{t}\lambda\_{\max}^{\,r}.$$ |  |

Summing the geometric series, with $\lambda\_{\max}<1$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\|e(t)\|\_{\infty}\leq\delta\,\frac{1-\lambda\_{\max}^{\,t}}{1-\lambda\_{\max}}\leq\frac{\delta}{1-\lambda\_{\max}}=\bar{\delta},$$ |  | (13) |

the bound of [Theorem 4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents").
∎

###### Remark 8.3 (No stationarity is required).

The bound equation [13](https://arxiv.org/html/2607.03695v1#S8.E13 "Equation 13 ‣ Proof. ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") holds for every realization of the
time-varying, endogenous, feedback-coupled influence sequence
$\{{\bm{C}}(t)\}$, with no stationarity, mixing, irreducibility, or
convergence hypothesis whatsoever. The only structural input is
row-stochasticity of each ${\bm{C}}(t)$, which is automatic, and the strict
anchor $\lambda\_{\max}<1$. In particular the theorem applies verbatim
to the equalized sequence of Section [4.2](https://arxiv.org/html/2607.03695v1#S4.SS2 "4.2 Equalized Context Allocation ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"), whose
matrices are produced by the online pricing protocol and are in general
neither stationary nor mutually commuting.

The next proposition shows the bound is tight and that the anchoring
hypothesis cannot be removed: at $\lambda\_{\max}=1$ the discrepancy
grows without bound.

###### Proposition 8.4 (Sharpness and failure at $\lambda=1$).

The bound equation [13](https://arxiv.org/html/2607.03695v1#S8.E13 "Equation 13 ‣ Proof. ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") is attained. For every row-stochastic
sequence $\{{\bm{C}}(t)\}$ and uniform anchoring $\lambda\_{i}\equiv\lambda$,
the operational emission rule

|  |  |  |
| --- | --- | --- |
|  | $$b(t+1)=(1-\lambda)\,b^{0}+\lambda\,{\bm{C}}(t)\,b(t)+\delta{\bm{1}}$$ |  |

satisfies Assumption [7.2](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem2 "Assumption 7.2 (𝛿-rational emission). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents") with equality and produces

|  |  |  |
| --- | --- | --- |
|  | $$b(t)-b^{\mathrm{BR}}(t)=\delta\,\frac{1-\lambda^{\,t}}{1-\lambda}\,{\bm{1}}\quad(\lambda<1),\qquad b(t)-b^{\mathrm{BR}}(t)=\delta\,t\,{\bm{1}}\quad(\lambda=1).$$ |  |

In particular, at $\lambda=1$ the gap grows linearly in $t$ and no
uniform-in-$t$ bridge exists.

###### Proof.

The residual is $u(t+1)=\delta{\bm{1}}$, so the error recursion
becomes $e(t+1)=\lambda\,{\bm{C}}(t)\,e(t)+\delta{\bm{1}}$. By
induction $e(t)=c\_{t}{\bm{1}}$ with $c\_{0}=0$, $c\_{t+1}=\lambda c\_{t}+\delta$: if $e(t)=c\_{t}{\bm{1}}$ then, since ${\bm{C}}(t){\bm{1}}={\bm{1}}$,

|  |  |  |
| --- | --- | --- |
|  | $$e(t+1)=\lambda\,{\bm{C}}(t)\,(c\_{t}{\bm{1}})+\delta{\bm{1}}=\lambda c\_{t}\,{\bm{C}}(t){\bm{1}}+\delta{\bm{1}}=(\lambda c\_{t}+\delta)\,{\bm{1}},$$ |  |

Solving gives $c\_{t}=\delta\sum\_{r=0}^{t-1}\lambda^{r}$, equal to
$\delta\frac{1-\lambda^{t}}{1-\lambda}$ for $\lambda<1$ and
$\delta t$ for $\lambda=1$.
∎

Proposition [8.4](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem4 "Proposition 8.4 (Sharpness and failure at 𝜆=1). ‣ 8.3 The Bridge Theorem ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") makes anchoring a structural requirement:
unanchored, the per-round emission noise accumulates without bound, so
any proxy theory tolerating $\delta>0$ must operate at $\lambda\_{\max}<1$.

### 8.4 Collective estimation by the proxy

The collective estimate is the population average of beliefs. We write
the operational and proxy estimates as

|  |  |  |
| --- | --- | --- |
|  | $$\hat{\theta}\_{T}\coloneqq\frac{1}{n}{\bm{1}}^{\top}b(T),\qquad\hat{\theta}\_{T}^{\mathrm{BR}}\coloneqq\frac{1}{n}{\bm{1}}^{\top}b^{\mathrm{BR}}(T).$$ |  |

The proxy estimate is a fixed linear functional of the private signals;
the next lemma identifies the weight $q\_{T}$ and shows it conserves mass.
For an arbitrary row-stochastic sequence $\{{\bm{C}}(t)\}$ set $M(t)\coloneqq P{\bm{C}}(t)$ and define the backward products

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Phi(T,r)\coloneqq M(T-1)\,M(T-2)\cdots M(r)\quad(0\leq r<T),\qquad\Phi(T,T)\coloneqq{\bm{I}}.$$ |  | (14) |

###### Lemma 8.5 (Trajectory representation and mass conservation).

For every row-stochastic sequence $\{{\bm{C}}(t)\}$ and every $T\geq 0$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$b^{\mathrm{BR}}(T)=G\_{T}\,b^{0},\qquad G\_{T}\coloneqq\Phi(T,0)+\sum\_{r=0}^{T-1}\Phi(T,r+1)\,({\bm{I}}-P),$$ |  | (15) |

and the collective weight
$q\_{T}^{\top}\coloneqq\frac{1}{n}{\bm{1}}^{\top}G\_{T}$ satisfies
$\hat{\theta}\_{T}^{\mathrm{BR}}=q\_{T}^{\top}b^{0}$ and is mass-conserving,
$q\_{T}^{\top}{\bm{1}}=1$.

###### Proof.

*Representation.* Induction on $T$. At $T=0$, $\Phi(0,0)={\bm{I}}$
and $G\_{0}={\bm{I}}$. Assuming equation [15](https://arxiv.org/html/2607.03695v1#S8.E15 "Equation 15 ‣ Lemma 8.5 (Trajectory representation and mass conservation). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") at $T$, by
equation [10](https://arxiv.org/html/2607.03695v1#S8.E10 "Equation 10 ‣ 8.1 The proxy and its closed form ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") and the hypothesis,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle b^{\mathrm{BR}}(T+1)$ | $\displaystyle=({\bm{I}}-P)\,b^{0}+M(T)\,b^{\mathrm{BR}}(T)$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=({\bm{I}}-P)\,b^{0}+M(T)\,G\_{T}\,b^{0}$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=\Bigl[M(T)\,\Phi(T,0)+\sum\_{r=0}^{T-1}M(T)\,\Phi(T,r+1)\,({\bm{I}}-P)+({\bm{I}}-P)\Bigr]b^{0}.$ |  |

Since $M(T)\Phi(T,r)=\Phi(T+1,r)$ and $({\bm{I}}-P)=\Phi(T+1,T+1)({\bm{I}}-P)$,

|  |  |  |
| --- | --- | --- |
|  | $$b^{\mathrm{BR}}(T+1)=\Bigl[\Phi(T+1,0)+\sum\_{r=0}^{T}\Phi(T+1,r+1)\,({\bm{I}}-P)\Bigr]b^{0}=G\_{T+1}\,b^{0},$$ |  |

the anchor term supplying the $r=T$ summand. Then
$\hat{\theta}\_{T}^{\mathrm{BR}}=\frac{1}{n}{\bm{1}}^{\top}G\_{T}b^{0}=q\_{T}^{\top}b^{0}$.

*Mass conservation.* We show $G\_{T}{\bm{1}}={\bm{1}}$, giving
$q\_{T}^{\top}{\bm{1}}=\frac{1}{n}{\bm{1}}^{\top}{\bm{1}}=1$. For $0\leq r<T$, using ${\bm{C}}(r){\bm{1}}={\bm{1}}$,

|  |  |  |
| --- | --- | --- |
|  | $$\Phi(T,r)\,{\bm{1}}=\Phi(T,r+1)\,M(r)\,{\bm{1}}=\Phi(T,r+1)\,P\,{\bm{C}}(r)\,{\bm{1}}=\Phi(T,r+1)\,P\,{\bm{1}},$$ |  |

hence

|  |  |  |
| --- | --- | --- |
|  | $$\Phi(T,r+1)\,({\bm{I}}-P)\,{\bm{1}}=\Phi(T,r+1)\,{\bm{1}}-\Phi(T,r+1)\,P\,{\bm{1}}=\Phi(T,r+1)\,{\bm{1}}-\Phi(T,r)\,{\bm{1}}.$$ |  |

Summing over $r$ telescopes:

|  |  |  |
| --- | --- | --- |
|  | $$\sum\_{r=0}^{T-1}\Phi(T,r+1)\,({\bm{I}}-P)\,{\bm{1}}=\Phi(T,T)\,{\bm{1}}-\Phi(T,0)\,{\bm{1}}={\bm{1}}-\Phi(T,0)\,{\bm{1}},$$ |  |

so $G\_{T}{\bm{1}}=\Phi(T,0){\bm{1}}+[{\bm{1}}-\Phi(T,0){\bm{1}}]={\bm{1}}$.
∎

###### Proposition 8.6 (Unbiasedness and variance).

Under Assumption [7.3](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem3 "Assumption 7.3 (Signal model and signal–exposure independence). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents"), conditionally on the realized
sequence $\{{\bm{C}}(t)\}$,

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}\bigl[\hat{\theta}\_{T}^{\mathrm{BR}}\bigr]=\theta^{\star},\qquad\mathrm{Var}\bigl(\hat{\theta}\_{T}^{\mathrm{BR}}\bigr)=q\_{T}^{\top}S\,q\_{T},\qquad S=\mathrm{diag}(s\_{1}^{2},\ldots,s\_{n}^{2}),$$ |  |

and in the homoskedastic case
$\mathrm{Var}(\hat{\theta}\_{T}^{\mathrm{BR}})=s^{2}\|q\_{T}\|\_{2}^{2}$.

###### Proof.

By $b^{0}=\theta^{\star}{\bm{1}}+\xi$ and $q\_{T}^{\top}{\bm{1}}=1$
(Lemma [8.5](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem5 "Lemma 8.5 (Trajectory representation and mass conservation). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")), $\hat{\theta}\_{T}^{\mathrm{BR}}=q\_{T}^{\top}b^{0}=\theta^{\star}+q\_{T}^{\top}\xi$. Conditionally on $\{{\bm{C}}(t)\}$, $q\_{T}$ is
fixed and $\xi\perp\{{\bm{C}}(t)\}$ with $\mathbb{E}[\xi]=0$, so
$\mathbb{E}[\hat{\theta}\_{T}^{\mathrm{BR}}]=\theta^{\star}$. By
independence of the $\xi\_{i}$,

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{Var}\bigl(\hat{\theta}\_{T}^{\mathrm{BR}}\bigr)=\mathrm{Var}\bigl(q\_{T}^{\top}\xi\bigr)=\sum\_{i=1}^{n}q\_{T,i}^{2}\,\mathrm{Var}(\xi\_{i})=\sum\_{i=1}^{n}q\_{T,i}^{2}\,s\_{i}^{2}=q\_{T}^{\top}S\,q\_{T}.$$ |  |

In the homoskedastic case $S=s^{2}{\bm{I}}$, giving $s^{2}\|q\_{T}\|\_{2}^{2}$.
∎

###### Definition 8.7 (Effective sample size).

For a weight vector $q\in\mathbb{R}^{n}$ with $q^{\top}{\bm{1}}=1$, the
*effective sample size* is $N\_{\mathrm{eff}}(q)\coloneqq 1/\|q\|\_{2}^{2}$ [[26](https://arxiv.org/html/2607.03695v1#bib.bib25)].

In the homoskedastic case
$\mathrm{Var}(\hat{\theta}\_{T}^{\mathrm{BR}})=s^{2}/N\_{\mathrm{eff}}(q\_{T})$:
the collective estimate behaves like the average of
$N\_{\mathrm{eff}}(q\_{T})$ independent signals. A dispersed weight $q\_{T}\approx\frac{1}{n}{\bm{1}}$ gives $N\_{\mathrm{eff}}\approx n$, the
wisdom-of-crowds regime [[21](https://arxiv.org/html/2607.03695v1#bib.bib11)]; a concentrated weight
$q\_{T}\approx e\_{h}$ gives $N\_{\mathrm{eff}}\approx 1$, herding. The
remaining theorems characterize $N\_{\mathrm{eff}}(q\_{T})$ under the
baseline and the equalized allocators.

The Bridge Theorem transfers these proxy moments to the operational
estimate.

###### Corollary 8.8 (Moment transfer).

Under Assumptions [7.1](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem1 "Assumption 7.1 (Anchored cooperative regime). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents")–[7.3](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem3 "Assumption 7.3 (Signal model and signal–exposure independence). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents"), conditionally on the
realized sequence $\{{\bm{C}}(t)\}$,

|  |  |  |
| --- | --- | --- |
|  | $$\bigl|\hat{\theta}\_{T}-\hat{\theta}\_{T}^{\mathrm{BR}}\bigr|\leq\bar{\delta}\ \text{ a.s.},\qquad\bigl|\mathbb{E}[\hat{\theta}\_{T}]-\theta^{\star}\bigr|\leq\bar{\delta},\qquad\bigl|\mathrm{sd}(\hat{\theta}\_{T})-\mathrm{sd}(\hat{\theta}\_{T}^{\mathrm{BR}})\bigr|\leq\bar{\delta}.$$ |  |

In the homoskedastic case $\mathrm{sd}(\hat{\theta}\_{T}^{\mathrm{BR}})=s\|q\_{T}\|\_{2}$, so $\bigl|\mathrm{sd}(\hat{\theta}\_{T})-s\|q\_{T}\|\_{2}\bigr|\leq\bar{\delta}$.

###### Proof.

*Pathwise gap.* With $e(T)=b(T)-b^{\mathrm{BR}}(T)$,

|  |  |  |
| --- | --- | --- |
|  | $$\bigl|\hat{\theta}\_{T}-\hat{\theta}\_{T}^{\mathrm{BR}}\bigr|=\Bigl|\frac{1}{n}{\bm{1}}^{\top}e(T)\Bigr|\leq\frac{1}{n}\sum\_{i=1}^{n}|e\_{i}(T)|\leq\|e(T)\|\_{\infty}\leq\bar{\delta}$$ |  |

by Theorem [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"). Set $z\_{T}=\hat{\theta}\_{T}-\hat{\theta}\_{T}^{\mathrm{BR}}$, $|z\_{T}|\leq\bar{\delta}$ a.s.

*Mean.* Since $\mathbb{E}[\hat{\theta}\_{T}^{\mathrm{BR}}]=\theta^{\star}$,

|  |  |  |
| --- | --- | --- |
|  | $$\bigl|\mathbb{E}[\hat{\theta}\_{T}]-\theta^{\star}\bigr|=\bigl|\mathbb{E}[z\_{T}]\bigr|\leq\mathbb{E}\,|z\_{T}|\leq\bar{\delta}.$$ |  |

*Standard deviation.* With $\widetilde{X}=X-\mathbb{E}[X]$,
Minkowski’s inequality gives

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{sd}(\hat{\theta}\_{T})=\bigl\|\widetilde{\hat{\theta}\_{T}^{\mathrm{BR}}}+\widetilde{z}\_{T}\bigr\|\_{L^{2}}\leq\bigl\|\widetilde{\hat{\theta}\_{T}^{\mathrm{BR}}}\bigr\|\_{L^{2}}+\|\widetilde{z}\_{T}\|\_{L^{2}}=\mathrm{sd}(\hat{\theta}\_{T}^{\mathrm{BR}})+\mathrm{sd}(z\_{T}),$$ |  |

and symmetrically, so $|\mathrm{sd}(\hat{\theta}\_{T})-\mathrm{sd}(\hat{\theta}\_{T}^{\mathrm{BR}})|\leq\mathrm{sd}(z\_{T})\leq\bar{\delta}$, the last by $\mathrm{sd}(z\_{T})^{2}\leq\mathbb{E}[z\_{T}^{2}]\leq\bar{\delta}^{2}$. The homoskedastic identity is
Proposition [8.6](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem6 "Proposition 8.6 (Unbiasedness and variance). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents").
∎

## 9 Proof of Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") (Attention Width)

This appendix proves Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"): graph constants and the
tempered-allocation bound (Appendix [9.1](https://arxiv.org/html/2607.03695v1#S9.SS1 "9.1 Constants and quantitative tempered allocation ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")), a stationary
perturbation bound (Appendix [9.2](https://arxiv.org/html/2607.03695v1#S9.SS2 "9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")), then the two
regimes.

### 9.1 Constants and quantitative tempered allocation

The two-regime theorem fixes the exposure graph and varies the
attention width $\beta$, so we work with the fixed-graph realized
influence ${\bm{C}}(\beta)$ whose row $i$ is the tempered allocation of the
score row $s\_{i:}=(s\_{ij})\_{j}$, with $s\_{ij}=\bar{W}\_{ij}\pi\_{j}$ as in
equation [8](https://arxiv.org/html/2607.03695v1#S8.E8 "Equation 8 ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents"). We record the combinatorial constants attached
to the exposure graph. Let

|  |  |  |
| --- | --- | --- |
|  | $$B\_{ij}=\mathbf{1}\{\bar{W}\_{ij}>0\},\qquad d\_{i}=\sum\_{j}B\_{ij},\qquad D=\mathrm{diag}(d\_{1},\ldots,d\_{n}),\qquad d\_{\max}=\max\_{i}d\_{i},$$ |  |

so $B$ is the unweighted exposure support, $d\_{i}$ the out-degree of
agent $i$, and $D$ the degree matrix. Per row define the
*log-spread* and, when $d\_{i}\geq 2$, the *dominance gap*

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$L\_{i}=\max\_{j,k\,:\,B\_{ij}=B\_{ik}=1}\bigl|\log s\_{ij}-\log s\_{ik}\bigr|,\qquad g\_{i}=\log\frac{s\_{i,(1)}}{s\_{i,(2)}},$$ |  | (16) |

where $s\_{i,(1)}\geq s\_{i,(2)}$ are the two largest scores in row $i$
(set $g\_{i}=+\infty$ if $d\_{i}=1$). The global constants are

|  |  |  |
| --- | --- | --- |
|  | $$L=\max\_{i}L\_{i},\qquad\underline{g}=\min\_{i}g\_{i}.$$ |  |

Since $\pi\_{j}\geq\frac{1-\zeta}{n}>0$ (Lemma [8.2](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem2 "Lemma 8.2 (Well-posedness of social power). ‣ 8.2 Well-posedness of social power ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")), we
have $s\_{ij}>0\iff B\_{ij}=1$, so row $i$ of ${\bm{C}}(\beta)$ is
supported exactly on the $d\_{i}$ exposed sources, and ${\bm{C}}(\beta)$ is
irreducible whenever $B$ is.

The next lemma controls how sharply $\Gamma\_{\beta}$ concentrates as a
function of $\beta$. For $s\in\mathbb{R}^{n}\_{\geq 0}$, $s\neq 0$, write $N(s)=\{j:s\_{j}>0\}$, $|N(s)|=d$, $[\Gamma\_{\beta}(s)]\_{j}=s\_{j}^{1/\beta}/\sum\_{k\in N(s)}s\_{k}^{1/\beta}$ on $N(s)$ (else $0$), ${\bm{1}}\_{N(s)}$
the indicator of $N(s)$, and $L(s),g(s)$ the log-spread and dominance
gap of equation [16](https://arxiv.org/html/2607.03695v1#S9.E16 "Equation 16 ‣ 9.1 Constants and quantitative tempered allocation ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").

###### Lemma 9.1 (Quantitative tempered allocation).

Let $s\in\mathbb{R}^{n}\_{\geq 0}$, $s\neq 0$, with $|N(s)|=d$. Then for
every $\beta>0$:

1. *(i)*

   *(Flattening.)*

   |  |  |  |
   | --- | --- | --- |
   |  | $$\Bigl\|\Gamma\_{\beta}(s)-\tfrac{1}{d}{\bm{1}}\_{N(s)}\Bigr\|\_{1}\ \leq\ e^{L(s)/\beta}-1\ \leq\ \frac{2L(s)}{\beta}\qquad\text{whenever }\beta\geq L(s).$$ |  |
2. *(ii)*

   *(Concentration.)* If $s$ has a unique
   maximizer $j^{\star}$ with gap $g(s)>0$, then

   |  |  |  |
   | --- | --- | --- |
   |  | $$1-[\Gamma\_{\beta}(s)]\_{j^{\star}}\ \leq\ (d-1)\,e^{-g(s)/\beta}.$$ |  |

Consequently $\Gamma\_{\beta}(s)\to\frac{1}{d}{\bm{1}}\_{N(s)}$ as $\beta\to\infty$ and $\Gamma\_{\beta}(s)\to e\_{j^{\star}}$ as $\beta\to 0$.

###### Proof.

Set $a\_{j}=\beta^{-1}\log s\_{j}$ for $j\in N(s)$. Then, for $j\in N(s)$,

|  |  |  |
| --- | --- | --- |
|  | $$[\Gamma\_{\beta}(s)]\_{j}=\frac{e^{a\_{j}}}{\sum\_{k\in N(s)}e^{a\_{k}}}=\Bigl(\sum\_{k\in N(s)}e^{a\_{k}-a\_{j}}\Bigr)^{-1}.$$ |  |

*(i) Flattening.* For $j,k\in N(s)$, $|a\_{k}-a\_{j}|\leq L(s)/\beta$, so each $e^{a\_{k}-a\_{j}}\in[e^{-L(s)/\beta},e^{L(s)/\beta}]$ and their sum lies in $[d\,e^{-L(s)/\beta},d\,e^{L(s)/\beta}]$; taking reciprocals,

|  |  |  |
| --- | --- | --- |
|  | $$\frac{1}{d}\,e^{-L(s)/\beta}\ \leq\ [\Gamma\_{\beta}(s)]\_{j}\ \leq\ \frac{1}{d}\,e^{L(s)/\beta}\qquad(j\in N(s)).$$ |  |

With $x=L(s)/\beta\geq 0$, using $1-e^{-x}\leq e^{x}-1$,

|  |  |  |
| --- | --- | --- |
|  | $$\Bigl|[\Gamma\_{\beta}(s)]\_{j}-\frac{1}{d}\Bigr|\ \leq\ \frac{1}{d}\,(e^{x}-1).$$ |  |

Summing over the $d$ supported coordinates,

|  |  |  |
| --- | --- | --- |
|  | $$\Bigl\|\Gamma\_{\beta}(s)-\tfrac{1}{d}{\bm{1}}\_{N(s)}\Bigr\|\_{1}=\sum\_{j\in N(s)}\Bigl|[\Gamma\_{\beta}(s)]\_{j}-\frac{1}{d}\Bigr|\ \leq\ d\cdot\frac{e^{x}-1}{d}=e^{L(s)/\beta}-1,$$ |  |

the first inequality. For the second, when $\beta\geq L(s)$, $x\in[0,1]$ and convexity of $e^{x}-1$ gives $e^{x}-1\leq(e-1)x\leq 2x=2L(s)/\beta$.

*(ii) Concentration.* Let $j^{\star}$ be the unique maximizer. For
$k\neq j^{\star}$ in $N(s)$, retaining only the $j^{\star}$ term in the
denominator,

|  |  |  |
| --- | --- | --- |
|  | $$[\Gamma\_{\beta}(s)]\_{k}=\frac{e^{a\_{k}}}{\sum\_{m\in N(s)}e^{a\_{m}}}\ \leq\ \frac{e^{a\_{k}}}{e^{a\_{j^{\star}}}}=e^{(\log s\_{k}-\log s\_{j^{\star}})/\beta}\ \leq\ e^{-g(s)/\beta},$$ |  |

using $\log s\_{k}-\log s\_{j^{\star}}\leq-g(s)$ ($s\_{j^{\star}}=s\_{(1)}$, $s\_{k}\leq s\_{(2)}$). Summing over $k\neq j^{\star}$,

|  |  |  |
| --- | --- | --- |
|  | $$1-[\Gamma\_{\beta}(s)]\_{j^{\star}}=\sum\_{k\neq j^{\star}}[\Gamma\_{\beta}(s)]\_{k}\ \leq\ (d-1)\,e^{-g(s)/\beta}.$$ |  |

Limits: $\beta\to\infty$ in (i) gives $\Gamma\_{\beta}(s)\to\frac{1}{d}{\bm{1}}\_{N(s)}$; $\beta\to 0$ in (ii) gives
$\Gamma\_{\beta}(s)\to e\_{j^{\star}}$.
∎

### 9.2 A self-contained stationary perturbation bound

The wide-context regime compares $\nu\_{{\bm{C}}(\beta)}$ with a reference
chain, via the following Perron–Frobenius facts and an exact
perturbation identity.

###### Lemma 9.2 (Stationary distribution; maximum principle).

Let ${\bm{C}}$ be row-stochastic and irreducible. Then:

1. *(i)*

   if $x\in\mathbb{R}^{n}$ satisfies ${\bm{C}}x=x$, then $x$ is a
   constant multiple of ${\bm{1}}$;
2. *(ii)*

   there is a unique $\nu\_{{\bm{C}}}\in\Delta\_{n}$ with
   $\nu\_{{\bm{C}}}^{\top}{\bm{C}}=\nu\_{{\bm{C}}}^{\top}$, and $\nu\_{{\bm{C}},j}>0$ for every
   $j$.

###### Proof.

*(i)* Let $i^{\star}\in\argmax\_{i}x\_{i}$ and $m=x\_{i^{\star}}$. From
${\bm{C}}x=x$ and row-stochasticity,

|  |  |  |
| --- | --- | --- |
|  | $$m=x\_{i^{\star}}=\sum\_{j}{\bm{C}}\_{i^{\star}j}\,x\_{j}\ \leq\ \sum\_{j}{\bm{C}}\_{i^{\star}j}\,m=m,$$ |  |

so $x\_{j}=m$ for every out-neighbor $j$ of $i^{\star}$. The set $\{i:x\_{i}=m\}$ is thus closed under out-neighbors, hence all of $\{1,\ldots,n\}$ by irreducibility, so $x=m{\bm{1}}$.

*(ii) Existence.* The linear map $p\mapsto{\bm{C}}^{\top}p$ sends
$\Delta\_{n}$ into itself (${\bm{C}}\geq 0$ and ${\bm{1}}^{\top}{\bm{C}}^{\top}p={\bm{1}}^{\top}p$), so Brouwer gives a fixed point $\nu\_{{\bm{C}}}\in\Delta\_{n}$.

*Positivity.* Let $Z=\{j:\nu\_{{\bm{C}},j}=0\}$. For $j\in Z$,
$0=\sum\_{i}\nu\_{{\bm{C}},i}{\bm{C}}\_{ij}$ forces ${\bm{C}}\_{ij}=0$ for all $i\in Z^{c}$: no edge from $Z^{c}$ into $Z$, contradicting irreducibility unless
$Z=\emptyset$. Hence $\nu\_{{\bm{C}}}>0$.

*Uniqueness.* Let $\nu,\nu^{\prime}$ be stationary (both $>0$), $c=\min\_{j}\nu^{\prime}\_{j}/\nu\_{j}$, $v=\nu^{\prime}-c\nu\geq 0$. Then $v^{\top}{\bm{C}}=v^{\top}$ and $v\_{j\_{0}}=0$ at the minimizing index, so the positivity
argument forces $v=0$, i.e. $\nu^{\prime}=c\nu$. Total mass gives $c=1$,
so $\nu^{\prime}=\nu$.
∎

###### Lemma 9.3 (Deviation matrix and exact perturbation identity).

Let $P^{\star}$ be row-stochastic and irreducible with stationary
distribution $\nu^{\star}$. Then:

1. *(i)*

   $Q\coloneqq{\bm{I}}-P^{\star}+{\bm{1}}\nu^{\star\top}$ is
   invertible; with $Z\coloneqq Q^{-1}$, the *deviation matrix* is
   $H\coloneqq Z-{\bm{1}}\nu^{\star\top}$.
2. *(ii)*

   $Z{\bm{1}}={\bm{1}}$, $\nu^{\star\top}Z=\nu^{\star\top}$, and $({\bm{I}}-P^{\star})\,H={\bm{I}}-{\bm{1}}\nu^{\star\top}$.
3. *(iii)*

   For every row-stochastic $\widetilde{{\bm{C}}}$ with a
   stationary distribution $\tilde{\nu}$, setting $E\coloneqq\widetilde{{\bm{C}}}-P^{\star}$,

   |  |  |  |
   | --- | --- | --- |
   |  | $$\tilde{\nu}^{\top}-\nu^{\star\top}=\tilde{\nu}^{\top}E\,H,\qquad\text{hence}\qquad\|\tilde{\nu}-\nu^{\star}\|\_{1}\leq\|E\|\_{\infty}\,\kappa(P^{\star}),\quad\kappa(P^{\star})\coloneqq\|H\|\_{\infty}.$$ |  |

###### Proof.

*(i) Invertibility.* Suppose $Qx=0$. Multiply on the left by
$\nu^{\star\top}$ and use $\nu^{\star\top}P^{\star}=\nu^{\star\top}$
and $\nu^{\star\top}{\bm{1}}=1$:

|  |  |  |
| --- | --- | --- |
|  | $$0=\nu^{\star\top}Qx=\nu^{\star\top}x-\nu^{\star\top}P^{\star}x+(\nu^{\star\top}{\bm{1}})(\nu^{\star\top}x)=\nu^{\star\top}x-\nu^{\star\top}x+\nu^{\star\top}x=\nu^{\star\top}x,$$ |  |

so $\nu^{\star\top}x=0$, and $Qx=0$ reduces to $P^{\star}x=x$. By
Lemma [9.2](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem2 "Lemma 9.2 (Stationary distribution; maximum principle). ‣ 9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")(i), $x=c{\bm{1}}$, and $0=\nu^{\star\top}x=c$,
so $x=0$: $Q$ is invertible.

*(ii) Identities.* $Q{\bm{1}}={\bm{1}}$ gives $Z{\bm{1}}={\bm{1}}$, and
$\nu^{\star\top}Q=\nu^{\star\top}$ gives $\nu^{\star\top}Z=\nu^{\star\top}$. Since $({\bm{I}}-P^{\star}){\bm{1}}=0$,

|  |  |  |
| --- | --- | --- |
|  | $$({\bm{I}}-P^{\star})H=({\bm{I}}-P^{\star})\bigl(Z-{\bm{1}}\nu^{\star\top}\bigr)=({\bm{I}}-P^{\star})Z,$$ |  |

the term $({\bm{I}}-P^{\star}){\bm{1}}\nu^{\star\top}$ vanishing. Now ${\bm{I}}-P^{\star}=Q-{\bm{1}}\nu^{\star\top}$, so

|  |  |  |
| --- | --- | --- |
|  | $$({\bm{I}}-P^{\star})Z=\bigl(Q-{\bm{1}}\nu^{\star\top}\bigr)Z=QZ-{\bm{1}}\nu^{\star\top}Z={\bm{I}}-{\bm{1}}\nu^{\star\top},$$ |  |

using $QZ={\bm{I}}$.

*(iii) Perturbation identity.* Stationarity $\tilde{\nu}^{\top}\widetilde{{\bm{C}}}=\tilde{\nu}^{\top}$ gives

|  |  |  |
| --- | --- | --- |
|  | $$\tilde{\nu}^{\top}({\bm{I}}-P^{\star})=\tilde{\nu}^{\top}-\tilde{\nu}^{\top}P^{\star}=\tilde{\nu}^{\top}\widetilde{{\bm{C}}}-\tilde{\nu}^{\top}P^{\star}=\tilde{\nu}^{\top}(\widetilde{{\bm{C}}}-P^{\star})=\tilde{\nu}^{\top}E.$$ |  |

Multiplying on the right by $H$ and using (ii),

|  |  |  |
| --- | --- | --- |
|  | $$\tilde{\nu}^{\top}E\,H=\tilde{\nu}^{\top}({\bm{I}}-P^{\star})H=\tilde{\nu}^{\top}\bigl({\bm{I}}-{\bm{1}}\nu^{\star\top}\bigr)=\tilde{\nu}^{\top}-(\tilde{\nu}^{\top}{\bm{1}})\nu^{\star\top}=\tilde{\nu}^{\top}-\nu^{\star\top},$$ |  |

the stated identity, exact in $E$.

*Norm bound.* Since $\tilde{\nu}^{\top}E=\sum\_{i}\tilde{\nu}\_{i}E\_{i:}$ is a convex combination of rows of $E$,

|  |  |  |
| --- | --- | --- |
|  | $$\|\tilde{\nu}^{\top}E\|\_{1}=\Bigl\|\sum\_{i}\tilde{\nu}\_{i}\,E\_{i:}\Bigr\|\_{1}\leq\sum\_{i}\tilde{\nu}\_{i}\,\|E\_{i:}\|\_{1}\leq\max\_{i}\|E\_{i:}\|\_{1}=\|E\|\_{\infty}.$$ |  |

For any row vector $w^{\top}$,

|  |  |  |
| --- | --- | --- |
|  | $$\|w^{\top}H\|\_{1}=\sum\_{j}\Bigl|\sum\_{i}w\_{i}H\_{ij}\Bigr|\leq\sum\_{i}|w\_{i}|\sum\_{j}|H\_{ij}|\leq\Bigl(\max\_{i}\sum\_{j}|H\_{ij}|\Bigr)\sum\_{i}|w\_{i}|=\|H\|\_{\infty}\,\|w\|\_{1}.$$ |  |

Chaining with $w^{\top}=\tilde{\nu}^{\top}E$,

|  |  |  |
| --- | --- | --- |
|  | $$\|\tilde{\nu}-\nu^{\star}\|\_{1}=\|\tilde{\nu}^{\top}E\,H\|\_{1}\leq\|H\|\_{\infty}\,\|\tilde{\nu}^{\top}E\|\_{1}\leq\|H\|\_{\infty}\,\|E\|\_{\infty}=\kappa(P^{\star})\,\|E\|\_{\infty}.\qed$$ |  |

The identity (iii) is exact and $\kappa(P^{\star})=\|H\|\_{\infty}$ is a
standard Markov-chain condition number
[[31](https://arxiv.org/html/2607.03695v1#bib.bib43)].

### 9.3 The two-regime theorem

We now prove that the attention width $\beta$ controls the collective
accuracy of the baseline allocator. The object analyzed is the
stationary distribution $\nu\_{{\bm{C}}(\beta)}$ of the fixed-graph realized
influence ${\bm{C}}(\beta)$, which is the infinite-horizon limit of the
collective weight $q\_{T}$ under uniform anchoring (see
Remark [9.4](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem4 "Remark 9.4 (Relation to the operational weight). ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")); accordingly we measure accuracy by

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{Var}\_{\infty}(\beta)\coloneqq s^{2}\,\bigl\|\nu\_{{\bm{C}}(\beta)}\bigr\|\_{2}^{2},\qquad N\_{\mathrm{eff}}(\beta)\coloneqq\bigl\|\nu\_{{\bm{C}}(\beta)}\bigr\|\_{2}^{-2}.$$ |  |

###### Remark 9.4 (Relation to the operational weight).

For uniform anchoring $\lambda\_{i}\equiv\lambda$ and a fixed
irreducible ${\bm{C}}$, Lemma [8.5](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem5 "Lemma 8.5 (Trajectory representation and mass conservation). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") gives the infinite-horizon
weight

|  |  |  |
| --- | --- | --- |
|  | $$q\_{\infty}(\lambda)^{\top}=\frac{1-\lambda}{n}\,{\bm{1}}^{\top}({\bm{I}}-\lambda{\bm{C}})^{-1}=(1-\lambda)\sum\_{k\geq 0}\lambda^{k}\,\tfrac{1}{n}{\bm{1}}^{\top}{\bm{C}}^{k},$$ |  |

and $q\_{\infty}(\lambda)\to\nu\_{{\bm{C}}}$ as $\lambda\uparrow 1$: the
Cesàro averages $\frac{1}{N}\sum\_{k<N}\frac{1}{n}{\bm{1}}^{\top}{\bm{C}}^{k}$
converge to $\nu\_{{\bm{C}}}^{\top}$ for every irreducible ${\bm{C}}$
[[27](https://arxiv.org/html/2607.03695v1#bib.bib46), Ch. 4], and Abel summation agrees with the
Cesàro limit. The two-regime theorem is therefore the unanchored
long-horizon limit of the *baseline* allocator; the guarantee for
the equalized allocator (Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")) is exact at every
horizon and anchoring level and does not rely on this remark.

See [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")

###### Proof.

Wide context.
*Matrix bound equation [17](https://arxiv.org/html/2607.03695v1#S9.E17 "Equation 17 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").* Row $i$ of ${\bm{C}}(\beta)$ is
$\Gamma\_{\beta}(s\_{i:})$ and row $i$ of $D^{-1}B$ is
$\frac{1}{d\_{i}}{\bm{1}}\_{N(s\_{i:})}$, on the same support. By
Lemma [9.1](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem1 "Lemma 9.1 (Quantitative tempered allocation). ‣ 9.1 Constants and quantitative tempered allocation ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")(i) their $\ell\_{1}$ distance is $\leq e^{L\_{i}/\beta}-1\leq e^{L/\beta}-1$; maximizing over rows,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bigl\|{\bm{C}}(\beta)-D^{-1}B\bigr\|\_{\infty}\ \leq\ e^{L/\beta}-1.$$ |  | (17) |

*Reference stationary distribution.* With $B=B^{\top}$,

|  |  |  |
| --- | --- | --- |
|  | $$\bigl(d^{\top}D^{-1}B\bigr)\_{j}=\sum\_{i}d\_{i}\cdot\frac{B\_{ij}}{d\_{i}}=\sum\_{i}B\_{ij}=\sum\_{i}B\_{ji}=d\_{j},$$ |  |

so $\nu^{\star}=d/({\bm{1}}^{\top}d)$ is stationary for $D^{-1}B$, unique
by Lemma [9.2](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem2 "Lemma 9.2 (Stationary distribution; maximum principle). ‣ 9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")(ii).

*Stationary perturbation.* Lemma [9.3](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem3 "Lemma 9.3 (Deviation matrix and exact perturbation identity). ‣ 9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")(iii) with
$P^{\star}=D^{-1}B$, $E={\bm{C}}(\beta)-D^{-1}B$ yields

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bigl\|\nu\_{{\bm{C}}(\beta)}-\nu^{\star}\bigr\|\_{1}\leq\kappa\_{B}\,\|E\|\_{\infty}\leq\kappa\_{B}\bigl(e^{L/\beta}-1\bigr),$$ |  | (18) |

using equation [17](https://arxiv.org/html/2607.03695v1#S9.E17 "Equation 17 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").

*Variance transfer.* With $\Delta=\nu\_{{\bm{C}}(\beta)}-\nu^{\star}$, since all entries lie in $[0,1]$,

|  |  |  |
| --- | --- | --- |
|  | $$\bigl|\|\nu\_{{\bm{C}}(\beta)}\|\_{2}^{2}-\|\nu^{\star}\|\_{2}^{2}\bigr|=\Bigl|\sum\_{j}\Delta\_{j}\bigl(\nu\_{{\bm{C}}(\beta),j}+\nu^{\star}\_{j}\bigr)\Bigr|\leq\max\_{j}\bigl(\nu\_{{\bm{C}}(\beta),j}+\nu^{\star}\_{j}\bigr)\,\|\Delta\|\_{1}\leq 2\|\Delta\|\_{1},$$ |  |

since each summand of the max is at most $1$. As $\|\nu^{\star}\|\_{2}^{2}=\sum\_{k}d\_{k}^{2}/(\sum\_{k}d\_{k})^{2}$, multiplying by $s^{2}$ gives the matching variance bound stated in the theorem.

*Floor and degree-regularity.* By Cauchy–Schwarz on $d,{\bm{1}}$,

|  |  |  |
| --- | --- | --- |
|  | $$\Bigl(\sum\_{k}d\_{k}\Bigr)^{2}=\langle d,{\bm{1}}\rangle^{2}\leq\|d\|\_{2}^{2}\,\|{\bm{1}}\|\_{2}^{2}=n\sum\_{k}d\_{k}^{2},$$ |  |

so $\sum\_{k}d\_{k}^{2}/(\sum\_{k}d\_{k})^{2}\geq 1/n$, with equality iff $d\propto{\bm{1}}$ (degree-regular); then equation [18](https://arxiv.org/html/2607.03695v1#S9.E18 "Equation 18 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents") gives
$N\_{\mathrm{eff}}(\beta)\to n$ as $\beta\to\infty$.

Narrow context.
Assume $B$ irreducible, so ${\bm{C}}(\beta)$ is irreducible for every $\beta>0$ and $\nu\coloneqq\nu\_{{\bm{C}}(\beta)}>0$ is unique
(Lemma [9.2](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem2 "Lemma 9.2 (Stationary distribution; maximum principle). ‣ 9.2 A self-contained stationary perturbation bound ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")). Assume the unique dominant pair: $j\_{i}^{\star}=\argmax\_{k}s\_{ik}$ is unique for each row, $j\_{i}^{\star}=h$ for $i\neq h$,
$j\_{h}^{\star}=g\neq h$; so $j\_{i}^{\star}\in S\coloneqq\{h,g\}$ for all
$i$. Write $\rho=\rho(\beta)$ and assume $\rho<1$. By
Lemma [9.1](https://arxiv.org/html/2607.03695v1#S9.Thmtheorem1 "Lemma 9.1 (Quantitative tempered allocation). ‣ 9.1 Constants and quantitative tempered allocation ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents")(ii),

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\sum\_{k\neq j\_{i}^{\star}}{\bm{C}}\_{ik}(\beta)=1-{\bm{C}}\_{i,j\_{i}^{\star}}(\beta)\leq(d\_{i}-1)\,e^{-g\_{i}/\beta}\leq(d\_{\max}-1)\,e^{-\underline{g}/\beta}=\rho.$$ |  | (19) |

*Mass outside $S$.* For $k\in S^{c}$, ${\bm{C}}\_{ik}(\beta)$ is
off-maximizer, so $\sum\_{k\in S^{c}}{\bm{C}}\_{ik}(\beta)\leq\rho$ by
equation [19](https://arxiv.org/html/2607.03695v1#S9.E19 "Equation 19 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents"). By stationarity,

|  |  |  |
| --- | --- | --- |
|  | $$\nu(S^{c})=\sum\_{k\in S^{c}}\nu\_{k}=\sum\_{k\in S^{c}}\sum\_{i}\nu\_{i}\,{\bm{C}}\_{ik}(\beta)=\sum\_{i}\nu\_{i}\sum\_{k\in S^{c}}{\bm{C}}\_{ik}(\beta)\leq\rho\sum\_{i}\nu\_{i}=\rho,$$ |  |

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\nu(S^{c})\leq\rho(\beta),\qquad N\_{\mathrm{eff}}(\beta)\leq\frac{2}{(1-\rho(\beta))^{2}},$$ |  | (20) |

the first claim of equation [20](https://arxiv.org/html/2607.03695v1#S9.E20 "Equation 20 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").

*Sandwich for $\nu\_{h}$.* By equation [19](https://arxiv.org/html/2607.03695v1#S9.E19 "Equation 19 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents"), ${\bm{C}}\_{hh}(\beta)\leq\rho$ (off-maximizer) and ${\bm{C}}\_{ih}(\beta)\geq 1-\rho$ for $i\neq h$. Lower bound:

|  |  |  |
| --- | --- | --- |
|  | $$\nu\_{h}\geq\sum\_{i\neq h}\nu\_{i}\,(1-\rho)=(1-\rho)(1-\nu\_{h})\quad\Longrightarrow\quad\nu\_{h}(1+(1-\rho))\geq 1-\rho\quad\Longrightarrow\quad\nu\_{h}\geq\frac{1-\rho}{2-\rho}.$$ |  |

Upper bound:

|  |  |  |
| --- | --- | --- |
|  | $$\nu\_{h}=\nu\_{h}\,{\bm{C}}\_{hh}(\beta)+\sum\_{i\neq h}\nu\_{i}\,{\bm{C}}\_{ih}(\beta)\leq\rho\,\nu\_{h}+(1-\nu\_{h})\quad\Longrightarrow\quad\nu\_{h}(2-\rho)\leq 1\quad\Longrightarrow\quad\nu\_{h}\leq\frac{1}{2-\rho}.$$ |  |

*Bounds for $\nu\_{g}$.* Since ${\bm{C}}\_{hg}(\beta)\geq 1-\rho$ and
${\bm{C}}\_{ig}(\beta)\leq\rho$ for $i\neq h$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\nu\_{h}(1-\rho)\leq\nu\_{g}\leq\nu\_{h}+\rho(1-\nu\_{h})\leq\nu\_{h}+\rho.$$ |  | (21) |

*Upper bound on $N\_{\mathrm{eff}}$.* Keeping the two $S$
coordinates and using $(a+b)^{2}\leq 2(a^{2}+b^{2})$,

|  |  |  |
| --- | --- | --- |
|  | $$\|\nu\|\_{2}^{2}\geq\nu\_{h}^{2}+\nu\_{g}^{2}\geq\tfrac{1}{2}(\nu\_{h}+\nu\_{g})^{2}=\tfrac{1}{2}\bigl(1-\nu(S^{c})\bigr)^{2}\geq\tfrac{1}{2}(1-\rho)^{2},$$ |  |

using $\nu\_{h}+\nu\_{g}=1-\nu(S^{c})$. Thus $N\_{\mathrm{eff}}(\beta)\leq 2(1-\rho)^{-2}$, the second claim of equation [20](https://arxiv.org/html/2607.03695v1#S9.E20 "Equation 20 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents"). At $\beta\leq\underline{g}/\log(2(d\_{\max}-1))$, $\rho\leq\frac{1}{2}$ and
$N\_{\mathrm{eff}}(\beta)\leq 8$.

*Two-sided bound equation [22](https://arxiv.org/html/2607.03695v1#S9.E22 "Equation 22 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").* Suppose $\rho\leq\frac{1}{4}$. We bound $\|\nu\|\_{2}^{2}$ from above. For $\nu\_{h}$, using
$\frac{1}{1-x}\leq 1+\frac{x}{1-x}$ with $x=\rho/2$,

|  |  |  |
| --- | --- | --- |
|  | $$\nu\_{h}\leq\frac{1}{2-\rho}=\frac{1}{2}\cdot\frac{1}{1-\rho/2}\leq\frac{1}{2}\Bigl(1+\frac{\rho/2}{1-\rho/2}\Bigr)\leq\frac{1}{2}\Bigl(1+\tfrac{4}{7}\rho\Bigr)\leq\frac{1}{2}+\frac{1}{3}\rho,$$ |  |

where $\frac{\rho/2}{1-\rho/2}\leq\frac{\rho/2}{7/8}=\frac{4}{7}\rho$ at
$\rho\leq\frac{1}{4}$, and $\frac{1}{2}\cdot\frac{4}{7}=\frac{2}{7}\leq\frac{1}{3}$. By equation [21](https://arxiv.org/html/2607.03695v1#S9.E21 "Equation 21 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents"), $\nu\_{g}\leq\nu\_{h}+\rho\leq\frac{1}{2}+\frac{4}{3}\rho$. The mass on $S^{c}$ contributes at most $\sum\_{k\in S^{c}}\nu\_{k}^{2}\leq(\sum\_{k\in S^{c}}\nu\_{k})^{2}\leq\rho^{2}$. Summing,

|  |  |  |
| --- | --- | --- |
|  | $$\|\nu\|\_{2}^{2}\leq\Bigl(\tfrac{1}{2}+\tfrac{1}{3}\rho\Bigr)^{2}+\Bigl(\tfrac{1}{2}+\tfrac{4}{3}\rho\Bigr)^{2}+\rho^{2}=\tfrac{1}{2}+\tfrac{\rho}{3}+\tfrac{4\rho}{3}+\tfrac{\rho^{2}}{9}+\tfrac{16\rho^{2}}{9}+\rho^{2}=\tfrac{1}{2}+\tfrac{5}{3}\rho+\tfrac{26}{9}\rho^{2}.$$ |  |

At $\rho\leq\frac{1}{4}$, $\frac{26}{9}\rho^{2}\leq\frac{26}{9}\cdot\frac{1}{4}\rho=\frac{26}{36}\rho\leq\frac{5}{6}\rho$, so $\|\nu\|\_{2}^{2}\leq\frac{1}{2}+\frac{5}{3}\rho+\frac{5}{6}\rho=\frac{1}{2}+\frac{5}{2}\rho$.
Therefore

|  |  |  |
| --- | --- | --- |
|  | $$N\_{\mathrm{eff}}(\beta)=\frac{1}{\|\nu\|\_{2}^{2}}\geq\frac{1}{\frac{1}{2}+\frac{5}{2}\rho}=\frac{2}{1+5\rho}\geq 2(1-5\rho)=2-10\rho,$$ |  |

using $\frac{1}{1+u}\geq 1-u$. For the upper bound, $(1-\rho)^{-2}\leq 1+4\rho$ on $[0,\frac{1}{4}]$ gives $N\_{\mathrm{eff}}(\beta)\leq 2(1+4\rho)=2+8\rho$. Combining,

|  |  |  |
| --- | --- | --- |
|  | $$\bigl|N\_{\mathrm{eff}}(\beta)-2\bigr|\leq\max\{8\rho,10\rho\}=10\rho\leq 16\rho,$$ |  |

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bigl|N\_{\mathrm{eff}}(\beta)-2\bigr|\leq 16\,\rho(\beta)\qquad(\rho(\beta)\leq\tfrac{1}{4}),$$ |  | (22) |

which is equation [22](https://arxiv.org/html/2607.03695v1#S9.E22 "Equation 22 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").

*Limit.* As $\beta\to 0$, $\rho\to 0$, so
equation [22](https://arxiv.org/html/2607.03695v1#S9.E22 "Equation 22 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents") gives $N\_{\mathrm{eff}}(\beta)\to 2$ and
$\nu\to\frac{1}{2}(e\_{h}+e\_{g})$ by equation [21](https://arxiv.org/html/2607.03695v1#S9.E21 "Equation 21 ‣ Proof. ‣ 9.3 The two-regime theorem ‣ 9 Proof of Theorem (Attention Width) ‣ Social Networks of LLM Agents").
∎

Both regimes are *column* pathologies of ${\bm{C}}$: the stationary
mass is the degree distribution $d/({\bm{1}}^{\top}d)$ in the wide limit
and concentrates on $\{h,g\}$ in the narrow limit. Row-stochasticity
constrains only the reader side; the equalized allocator removes the
remaining column freedom.

## 10 Proof of Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") (Equalization)

This appendix proves Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") and develops the
exposure-pricing protocol: the exact-optimality guarantee
(Appendix [10.1](https://arxiv.org/html/2607.03695v1#S10.SS1 "10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents")), then the Sinkhorn equivalence and the targeted
heteroskedastic variant (Appendix [11](https://arxiv.org/html/2607.03695v1#S11 "11 The Pricing Protocol ‣ Social Networks of LLM Agents")).

### 10.1 Exact optimality under equalization

The equalized allocator drives each ${\bm{C}}(t)$ toward double
stochasticity. The guarantee below is stated for an *arbitrary*
row-stochastic sequence in terms of its measured per-round column
defects, so it covers the endogenous, feedback-coupled operational
sequence with no exogeneity, stationarity, irreducibility, aperiodicity,
or mixing hypothesis. Recall the column defect of a row-stochastic
${\bm{C}}$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\delta\_{\mathrm{col}}({\bm{C}})\coloneqq\frac{1}{n}\,\bigl\|{\bm{1}}^{\top}{\bm{C}}-{\bm{1}}^{\top}\bigr\|\_{1}=\frac{1}{n}\sum\_{j=1}^{n}\Bigl|\sum\_{i=1}^{n}{\bm{C}}\_{ij}-1\Bigr|,$$ |  | (23) |

which is zero exactly when ${\bm{C}}$ has unit column sums, i.e. is doubly
stochastic.

See [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")

###### Proof.

At $\lambda=0$, $M(t)=0$ and Lemma [8.5](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem5 "Lemma 8.5 (Trajectory representation and mass conservation). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") gives $q\_{T}=\frac{1}{n}{\bm{1}}$, so both sides of equation [26](https://arxiv.org/html/2607.03695v1#S10.E26 "Equation 26 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents") vanish. Assume
$\lambda\in(0,1)$ and write $u\coloneqq\frac{1}{n}{\bm{1}}$.

*Step 1 (normalized backward recursion).* With $P=\lambda{\bm{I}}$,
$\Phi(T,r)=\lambda^{T-r}\,{\bm{C}}(T-1)\cdots{\bm{C}}(r)$. Define

|  |  |  |
| --- | --- | --- |
|  | $$p\_{r}^{\top}\coloneqq\lambda^{-(T-r)}\,\tfrac{1}{n}{\bm{1}}^{\top}\Phi(T,r)\qquad(0\leq r\leq T),$$ |  |

so $p\_{T}=u$ and, peeling off ${\bm{C}}(r)$,

|  |  |  |
| --- | --- | --- |
|  | $$p\_{r}^{\top}=\lambda^{-(T-r)}\tfrac{1}{n}{\bm{1}}^{\top}\Phi(T,r+1)\,\lambda{\bm{C}}(r)=\Bigl[\lambda^{-(T-r-1)}\tfrac{1}{n}{\bm{1}}^{\top}\Phi(T,r+1)\Bigr]{\bm{C}}(r)=p\_{r+1}^{\top}{\bm{C}}(r).$$ |  |

Let $\varrho\_{r}^{\top}\coloneqq\frac{1}{n}({\bm{1}}^{\top}{\bm{C}}(r)-{\bm{1}}^{\top})$, so $\|\varrho\_{r}\|\_{1}=\delta\_{r}$ by equation [23](https://arxiv.org/html/2607.03695v1#S10.E23 "Equation 23 ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents").
Then

|  |  |  |
| --- | --- | --- |
|  | $$p\_{r}^{\top}-u^{\top}=p\_{r+1}^{\top}{\bm{C}}(r)-u^{\top}=(p\_{r+1}-u)^{\top}{\bm{C}}(r)+\bigl(u^{\top}{\bm{C}}(r)-u^{\top}\bigr)=(p\_{r+1}-u)^{\top}{\bm{C}}(r)+\varrho\_{r}^{\top},$$ |  |

using $u^{\top}{\bm{C}}(r)-u^{\top}=\varrho\_{r}^{\top}$. For any row-stochastic
${\bm{C}}$, the $\ell\_{1}$ norm contracts:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\|v^{\top}{\bm{C}}\|\_{1}=\sum\_{j}\Bigl|\sum\_{i}v\_{i}{\bm{C}}\_{ij}\Bigr|\leq\sum\_{i}|v\_{i}|\sum\_{j}{\bm{C}}\_{ij}=\sum\_{i}|v\_{i}|=\|v\|\_{1},$$ |  | (24) |

Applying equation [24](https://arxiv.org/html/2607.03695v1#S10.E24 "Equation 24 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents") and the triangle inequality,

|  |  |  |
| --- | --- | --- |
|  | $$\|p\_{r}-u\|\_{1}\leq\|(p\_{r+1}-u)^{\top}{\bm{C}}(r)\|\_{1}+\|\varrho\_{r}\|\_{1}\leq\|p\_{r+1}-u\|\_{1}+\delta\_{r}.$$ |  |

Backward induction from $p\_{T}=u$ (so $\|p\_{T}-u\|\_{1}=0$) yields

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\|p\_{r}-u\|\_{1}\leq\sum\_{v=r}^{T-1}\delta\_{v}\leq(T-r)\,\bar{\delta}\_{\mathrm{col}}.$$ |  | (25) |

*Step 2 (convex combination).* By Lemma [8.5](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem5 "Lemma 8.5 (Trajectory representation and mass conservation). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") with ${\bm{I}}-P=(1-\lambda){\bm{I}}$,

|  |  |  |
| --- | --- | --- |
|  | $$q\_{T}^{\top}=\tfrac{1}{n}{\bm{1}}^{\top}\Phi(T,0)+(1-\lambda)\sum\_{r=0}^{T-1}\tfrac{1}{n}{\bm{1}}^{\top}\Phi(T,r+1).$$ |  |

Substituting $\frac{1}{n}{\bm{1}}^{\top}\Phi(T,r)=\lambda^{T-r}p\_{r}^{\top}$,

|  |  |  |
| --- | --- | --- |
|  | $$q\_{T}^{\top}=\lambda^{T}p\_{0}^{\top}+(1-\lambda)\sum\_{r=0}^{T-1}\lambda^{T-r-1}p\_{r+1}^{\top}.$$ |  |

The scalar coefficients are nonnegative and sum to one:

|  |  |  |
| --- | --- | --- |
|  | $$\lambda^{T}+(1-\lambda)\sum\_{r=0}^{T-1}\lambda^{T-r-1}=\lambda^{T}+(1-\lambda)\cdot\frac{1-\lambda^{T}}{1-\lambda}=\lambda^{T}+(1-\lambda^{T})=1,$$ |  |

Since the coefficients sum to one, subtracting $u^{\top}$ termwise:

|  |  |  |
| --- | --- | --- |
|  | $$q\_{T}^{\top}-u^{\top}=\lambda^{T}(p\_{0}-u)^{\top}+(1-\lambda)\sum\_{r=0}^{T-1}\lambda^{T-r-1}(p\_{r+1}-u)^{\top}.$$ |  |

Taking $\ell\_{1}$ norms and applying equation [25](https://arxiv.org/html/2607.03695v1#S10.E25 "Equation 25 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents"),

|  |  |  |
| --- | --- | --- |
|  | $$\|q\_{T}-u\|\_{1}\leq\lambda^{T}\,T\bar{\delta}\_{\mathrm{col}}+(1-\lambda)\bar{\delta}\_{\mathrm{col}}\sum\_{r=0}^{T-1}\lambda^{T-r-1}\,(T-r-1).$$ |  |

Substituting $j=T-r-1$, $\sum\_{j=0}^{T-1}j\,\lambda^{j}\leq\frac{\lambda}{(1-\lambda)^{2}}$, so

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\|q\_{T}-u\|\_{1}\leq\bar{\delta}\_{\mathrm{col}}\Bigl(T\lambda^{T}+(1-\lambda)\cdot\frac{\lambda}{(1-\lambda)^{2}}\Bigr)=\bar{\delta}\_{\mathrm{col}}\Bigl(\frac{\lambda}{1-\lambda}+T\lambda^{T}\Bigr),$$ |  | (26) |

which is the main bound of [Theorem 4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents").

*(i)* If $\bar{\delta}\_{\mathrm{col}}=0$, equation [26](https://arxiv.org/html/2607.03695v1#S10.E26 "Equation 26 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents") forces
$q\_{T}=u=\frac{1}{n}{\bm{1}}$ exactly. Then
Proposition [8.6](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem6 "Proposition 8.6 (Unbiasedness and variance). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") gives
$\mathrm{Var}(\hat{\theta}\_{T}^{\mathrm{BR}})=s^{2}\|u\|\_{2}^{2}=s^{2}\cdot\frac{1}{n}=s^{2}/n$ and $N\_{\mathrm{eff}}(q\_{T})=\|u\|\_{2}^{-2}=n$.

*(ii)* By Corollary [8.8](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem8 "Corollary 8.8 (Moment transfer). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents") ($\bar{\delta}=\delta/(1-\lambda)$), $\bigl|\mathrm{sd}(\hat{\theta}\_{T})-s\|q\_{T}\|\_{2}\bigr|\leq\frac{\delta}{1-\lambda}$. By
$\|\cdot\|\_{2}\leq\|\cdot\|\_{1}$ and equation [26](https://arxiv.org/html/2607.03695v1#S10.E26 "Equation 26 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents"),

|  |  |  |
| --- | --- | --- |
|  | $$\bigl|s\|q\_{T}\|\_{2}-s\|u\|\_{2}\bigr|\leq s\,\|q\_{T}-u\|\_{2}\leq s\,\|q\_{T}-u\|\_{1}\leq s\,\bar{\delta}\_{\mathrm{col}}\Bigl(\frac{\lambda}{1-\lambda}+T\lambda^{T}\Bigr),$$ |  |

and $\|u\|\_{2}=1/\sqrt{n}$. Combining,

|  |  |  |
| --- | --- | --- |
|  | $$\Bigl|\mathrm{sd}(\hat{\theta}\_{T})-\frac{s}{\sqrt{n}}\Bigr|\leq\bigl|\mathrm{sd}(\hat{\theta}\_{T})-s\|q\_{T}\|\_{2}\bigr|+\bigl|s\|q\_{T}\|\_{2}-s\|u\|\_{2}\bigr|\leq\frac{\delta}{1-\lambda}+s\,\bar{\delta}\_{\mathrm{col}}\Bigl(\frac{\lambda}{1-\lambda}+T\lambda^{T}\Bigr).\qed$$ |  |

###### Remark 10.1 (Quantified herding impossibility).

Write $\Delta=\bar{\delta}\_{\mathrm{col}}(\frac{\lambda}{1-\lambda}+T\lambda^{T})$. By equation [26](https://arxiv.org/html/2607.03695v1#S10.E26 "Equation 26 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents") and $\|\cdot\|\_{2}\leq\|\cdot\|\_{1}$,
$\|q\_{T}\|\_{2}\leq\|u\|\_{2}+\|q\_{T}-u\|\_{2}\leq\frac{1}{\sqrt{n}}+\Delta$, so

|  |  |  |
| --- | --- | --- |
|  | $$N\_{\mathrm{eff}}(q\_{T})=\frac{1}{\|q\_{T}\|\_{2}^{2}}\geq\frac{n}{(1+\sqrt{n}\,\Delta)^{2}}.$$ |  |

For example $\Delta\leq 1/\sqrt{n}$ already forces $N\_{\mathrm{eff}}\geq n/4$. Contrast Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"): in the narrow regime the
baseline collapses to $N\_{\mathrm{eff}}\leq 8$ regardless of $n$,
whereas the equalized allocator cannot collapse at any attention width.

## 11 The Pricing Protocol

This appendix derives two facts about the pricing protocol: one price
round equals one Sinkhorn iteration on the tempered scores (so it
converges to a doubly stochastic limit, invariant to social power), and
retargeting the clearing marginal extends exact optimality to the
heteroskedastic optimum. Throughout, $K\_{ij}=s\_{ij}^{1/\beta}=(\bar{W}\_{ij}\pi\_{j})^{1/\beta}$, $\mathrm{rn}(M)=\mathrm{diag}(M{\bm{1}})^{-1}M$, $\mathrm{cn}(M)=M\,\mathrm{diag}({\bm{1}}^{\top}M)^{-1}$.

### 11.1 One price round is one Sinkhorn iteration

Recall the two local rules. Each source $j$ holds a price $y\_{j}>0$;
the reader rule sets ${\bm{C}}\_{ij}=(K\_{ij}/y\_{j})/\sum\_{k}(K\_{ik}/y\_{k})$,
i.e. ${\bm{C}}=\mathrm{rn}(K\mathrm{diag}(y)^{-1})$, and the source rule
updates $y\_{j}\leftarrow y\_{j}\,a\_{j}$ with $a\_{j}=\sum\_{i}{\bm{C}}\_{ij}$.

###### Lemma 11.1 (Sinkhorn equivalence).

Let ${\bm{C}}=\mathrm{rn}(K\mathrm{diag}(y)^{-1})$ be the current realized
influence and $a\_{j}=\sum\_{i}{\bm{C}}\_{ij}$ its column sums. After the source
update $y\_{j}\leftarrow y\_{j}a\_{j}$, the next realized influence is

|  |  |  |
| --- | --- | --- |
|  | $${\bm{C}}^{\prime}=\mathrm{rn}\bigl(K\,\mathrm{diag}(y\odot a)^{-1}\bigr)=\mathrm{rn}\bigl(\mathrm{cn}({\bm{C}})\bigr).$$ |  |

That is, one price round applies a column normalization followed by a
row normalization to ${\bm{C}}$, which is one Sinkhorn iteration on $K$.

###### Proof.

The reader rule at $y^{\prime}=y\odot a$ gives ${\bm{C}}^{\prime}=\mathrm{rn}(K\,\mathrm{diag}(y\odot a)^{-1})$, the first equality. With
$\mathrm{diag}(y\odot a)^{-1}=\mathrm{diag}(a)^{-1}\mathrm{diag}(y)^{-1}$,

|  |  |  |
| --- | --- | --- |
|  | $$K\,\mathrm{diag}(y\odot a)^{-1}=\bigl(K\,\mathrm{diag}(y)^{-1}\bigr)\,\mathrm{diag}(a)^{-1}.$$ |  |

Since $\mathrm{rn}(D\_{\mathrm{row}}M)=\mathrm{rn}(M)$ and
$K\mathrm{diag}(y)^{-1}$ is a positive row scaling of ${\bm{C}}$,

|  |  |  |
| --- | --- | --- |
|  | $${\bm{C}}^{\prime}=\mathrm{rn}\bigl(K\mathrm{diag}(y)^{-1}\mathrm{diag}(a)^{-1}\bigr)=\mathrm{rn}\bigl({\bm{C}}\,\mathrm{diag}(a)^{-1}\bigr).$$ |  |

Finally ${\bm{C}}\,\mathrm{diag}(a)^{-1}=\mathrm{cn}({\bm{C}})$ since $a^{\top}={\bm{1}}^{\top}{\bm{C}}$, so ${\bm{C}}^{\prime}=\mathrm{rn}(\mathrm{cn}({\bm{C}}))$.
∎

###### Lemma 11.2 (Convergence of inner iterations).

Fix a round and hold $K=K(t)$ fixed during the price updates. If $K$
has total support, then iterating the price round of
Lemma [11.1](https://arxiv.org/html/2607.03695v1#S11.Thmtheorem1 "Lemma 11.1 (Sinkhorn equivalence). ‣ 11.1 One price round is one Sinkhorn iteration ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents") produces ${\bm{C}}^{(\ell)}\to{\bm{C}}^{\star}$, the
unique doubly stochastic matrix with $\mathrm{supp}\,{\bm{C}}^{\star}=\mathrm{supp}\,K$, and $\delta\_{\mathrm{col}}({\bm{C}}^{(\ell)})\to 0$
geometrically. Total support holds whenever $K\_{ii}>0$ for all $i$ and
$\mathrm{supp}\,K$ is symmetric.

###### Proof.

Each price round is one Sinkhorn iteration $\mathrm{rn}\circ\mathrm{cn}$ on $K$ (Lemma [11.1](https://arxiv.org/html/2607.03695v1#S11.Thmtheorem1 "Lemma 11.1 (Sinkhorn equivalence). ‣ 11.1 One price round is one Sinkhorn iteration ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents")). For $K$ with total
support, the alternating row/column normalization converges to the
unique doubly stochastic $\mathrm{diag}(u)\,K\,\mathrm{diag}(v)$, with
geometric rate in the Hilbert projective metric
[[17](https://arxiv.org/html/2607.03695v1#bib.bib44)]; convergence of the
iterates gives $\delta\_{\mathrm{col}}({\bm{C}}^{(\ell)})\to 0$. If $K\_{ii}>0$ for all $i$, every diagonal entry is positive, so each index lies on
a positive diagonal (a trivial support permutation); symmetry of
$\mathrm{supp}\,K$ then gives total support.
∎

###### Remark 11.3 (Diagonal invariance of the cleared limit).

One price round absorbs a right diagonal scaling of the tempered scores,
$\mathrm{cn}(KD\_{2})=\mathrm{cn}(K)$, but not a left scaling, since the
column sums it normalizes change under $K\mapsto D\_{1}K$. Both are
absorbed only in the fully balanced Sinkhorn limit ${\bm{C}}^{\star}$, the
doubly stochastic projection of $K$ (Remark [11.6](https://arxiv.org/html/2607.03695v1#S11.Thmtheorem6 "Remark 11.6 (Why pricing rather than quotas). ‣ 11.2 Targeted clearing and heteroskedastic optimality ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents")), which is
invariant to $K\mapsto D\_{1}KD\_{2}$. Two consequences. The social-power
factor $\pi$ enters as a right scaling, $K=(\bar{{\bm{W}}}\odot{\bm{1}}\pi^{\top})^{\circ 1/\beta}$, so it is removed after one round: the
cleared allocator caps each source’s share regardless of its power,
attenuating the high-power columns of Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"). The row
normalization defining $\bar{{\bm{W}}}$ is a left scaling and is removed only
in the limit; the one-round iterate retains it until
$\delta\_{\mathrm{col}}\to 0$, which Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") tracks through
the measured defect.

###### Remark 11.4 (One Sinkhorn step does not clear exactly).

A single price round (Lemma [11.1](https://arxiv.org/html/2607.03695v1#S11.Thmtheorem1 "Lemma 11.1 (Sinkhorn equivalence). ‣ 11.1 One price round is one Sinkhorn iteration ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents")) reduces the column
defect but need not make ${\bm{C}}(t)$ doubly stochastic. Run to convergence
each round with $K(t)$ held fixed, under the total-support condition of
Lemma [11.2](https://arxiv.org/html/2607.03695v1#S11.Thmtheorem2 "Lemma 11.2 (Convergence of inner iterations). ‣ 11.1 One price round is one Sinkhorn iteration ‣ 11 The Pricing Protocol ‣ Social Networks of LLM Agents") (e.g. self-exposure $A\_{ii}(t)>0$ and
symmetric support), $\delta\_{\mathrm{col}}({\bm{C}}(t))\to 0$ and
Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")(i) is exact. Run once per round as in
Algorithm [1](https://arxiv.org/html/2607.03695v1#algorithm1 "Algorithm 1 ‣ Exposure pricing. ‣ 4.2 Equalized Context Allocation ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"), the realized matrices need not clear, and
Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") applies in its general form through the measured
defects $\delta\_{r}$; the deviation of $q\_{T}$ from uniform is then
controlled by the $\bar{\delta}\_{\mathrm{col}}$ observed in the run, not
asserted a priori. Exact optimality is a property of the cleared limit;
the one-round protocol attains it up to $\bar{\delta}\_{\mathrm{col}}$.

### 11.2 Targeted clearing and heteroskedastic optimality

Uniform clearing drives $q\_{T}$ to $\frac{1}{n}{\bm{1}}$, optimal when signal
precisions are equal. When precisions differ, the best linear unbiased
weight is $q\_{i}\propto s\_{i}^{-2}$, and the protocol attains it by
clearing to a non-uniform target $\mu$ at no change to the two rules.

###### Corollary 11.5 (Targeted clearing; heteroskedastic optimality).

Fix a target $\mu\in\Delta\_{n}$ with $\mu\_{j}>0$ for all $j$. Replace
the source rule’s clearing target by $\mu$, i.e. $a\_{j}\leftarrow\frac{1}{\mu\_{j}}\sum\_{i}\mu\_{i}{\bm{C}}\_{ij}$ with fixed point $\mu^{\top}{\bm{C}}=\mu^{\top}$, and the readout by $\hat{\theta}\_{T}^{\mu}=\mu^{\top}b(T)$.
Define the weighted defects $\delta\_{r}^{\mu}\coloneqq\|\mu^{\top}{\bm{C}}(r)-\mu^{\top}\|\_{1}$ and $\bar{\delta}^{\mu}\coloneqq\max\_{0\leq r<T}\delta\_{r}^{\mu}$. Then the induced weight $q\_{T}(\mu)^{\top}\coloneqq\mu^{\top}G\_{T}$ satisfies $q\_{T}(\mu)^{\top}{\bm{1}}=1$ and

|  |  |  |
| --- | --- | --- |
|  | $$\bigl\|q\_{T}(\mu)-\mu\bigr\|\_{1}\leq\bar{\delta}^{\mu}\Bigl(\frac{\lambda}{1-\lambda}+T\lambda^{T}\Bigr);$$ |  |

at exact clearing, $q\_{T}(\mu)=\mu$ for every $T\geq 0$ and every
$\lambda\in[0,1)$. Consequently, under Assumption [7.3](https://arxiv.org/html/2607.03695v1#S7.Thmtheorem3 "Assumption 7.3 (Signal model and signal–exposure independence). ‣ 7 Assumptions and Measurement of 𝛿 ‣ Social Networks of LLM Agents")
with heteroskedastic variances $s\_{1}^{2},\ldots,s\_{n}^{2}$, the choice
$\mu\_{i}\propto s\_{i}^{-2}$ attains

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{Var}\bigl(\mu^{\top}b^{\mathrm{BR}}(T)\bigr)=\mu^{\top}S\,\mu=\Bigl(\sum\_{i=1}^{n}s\_{i}^{-2}\Bigr)^{-1},$$ |  |

the best-linear-unbiased optimum, exactly. Uniform clearing $\mu=\frac{1}{n}{\bm{1}}$ (Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")) is the special case for unknown or
exchangeable precisions.

###### Proof.

*Mass and variance.* By Lemma [8.5](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem5 "Lemma 8.5 (Trajectory representation and mass conservation). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents"), $q\_{T}(\mu)^{\top}{\bm{1}}=\mu^{\top}G\_{T}{\bm{1}}=1$, and Proposition [8.6](https://arxiv.org/html/2607.03695v1#S8.Thmtheorem6 "Proposition 8.6 (Unbiasedness and variance). ‣ 8.4 Collective estimation by the proxy ‣ 8 Proof of Theorem (Bridge) ‣ Social Networks of LLM Agents")
gives $\mathrm{Var}(\mu^{\top}b^{\mathrm{BR}}(T))=q\_{T}(\mu)^{\top}S\,q\_{T}(\mu)$.

*Bound.* The case $\lambda=0$ is immediate as in
Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"). For $\lambda\in(0,1)$ set $p\_{r}^{\top}\coloneqq\lambda^{-(T-r)}\mu^{\top}\Phi(T,r)$, so $p\_{T}=\mu$ and $p\_{r}^{\top}=p\_{r+1}^{\top}{\bm{C}}(r)$ as before. Steps 1 and 2 of the proof of
Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") apply with $u$ replaced by $\mu$ throughout: they
use only the $\ell\_{1}$ contraction equation [24](https://arxiv.org/html/2607.03695v1#S10.E24 "Equation 24 ‣ Proof. ‣ 10.1 Exact optimality under equalization ‣ 10 Proof of Theorem (Equalization) ‣ Social Networks of LLM Agents") and the per-round
residual $\mu^{\top}{\bm{C}}(r)-\mu^{\top}$, whose $\ell\_{1}$ norm is
$\delta\_{r}^{\mu}$ by definition. This yields the stated bound, and at
exact clearing ($\bar{\delta}^{\mu}=0$) it forces $q\_{T}(\mu)=\mu$.

*Optimality.* At exact clearing, with $\mu\_{i}=s\_{i}^{-2}/\sum\_{k}s\_{k}^{-2}$,

|  |  |  |
| --- | --- | --- |
|  | $$\sum\_{i}\mu\_{i}^{2}s\_{i}^{2}=\frac{\sum\_{i}s\_{i}^{-4}s\_{i}^{2}}{(\sum\_{k}s\_{k}^{-2})^{2}}=\frac{\sum\_{i}s\_{i}^{-2}}{(\sum\_{k}s\_{k}^{-2})^{2}}=\Bigl(\sum\_{i}s\_{i}^{-2}\Bigr)^{-1}.$$ |  |

This is the minimum of $q^{\top}Sq$ over $q^{\top}{\bm{1}}=1$: by
Cauchy–Schwarz on $(q\_{i}s\_{i})\_{i},(s\_{i}^{-1})\_{i}$,

|  |  |  |
| --- | --- | --- |
|  | $$1=\Bigl(\sum\_{i}q\_{i}\Bigr)^{2}=\Bigl(\sum\_{i}(q\_{i}s\_{i})\,s\_{i}^{-1}\Bigr)^{2}\leq\Bigl(\sum\_{i}q\_{i}^{2}s\_{i}^{2}\Bigr)\Bigl(\sum\_{i}s\_{i}^{-2}\Bigr),$$ |  |

so $q^{\top}Sq\geq(\sum\_{i}s\_{i}^{-2})^{-1}$, equality iff $q\_{i}\propto s\_{i}^{-2}$.
∎

###### Remark 11.6 (Why pricing rather than quotas).

The fully cleared limit of the protocol is an information projection:
among all matrices with the given support and unit row and column sums,
it is the unique minimizer of $\mathrm{KL}({\bm{C}}\,\|\,K)$ with $K=(s\_{ij}^{1/\beta})$ [[12](https://arxiv.org/html/2607.03695v1#bib.bib45)]. Equalization thus
deviates from the relevance-driven allocation as little as possible
subject to clearing. Hard per-source quotas or random subsampling also
clear the market, but they are cruder projections that discard the
score information; pricing is the minimal-distortion mechanism in the
entropic geometry.

## 12 Experimental details

This appendix documents the full experimental configuration and reports the complete result set
underlying the three figures in the main text. All quantities are read directly from the committed
run artifacts; where a value is a design choice we give the governing source file.

### 12.1 Models and inference

All agents are instruction-tuned LLMs served locally with vLLM $0.23.0$. We use the
Qwen2.5-Instruct family at $0.5$/$1.5$/$3$/$7$/$14$B and, for the cross-family generality
check (App. [13.7](https://arxiv.org/html/2607.03695v1#S13.SS7 "13.7 Cross-family generality: Llama-3.1-8B ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")), Llama-3.1-8B-Instruct and Llama-3.2-1B/3B-Instruct.
The heterogeneous “society” pairs a *strong* Qwen2.5-7B-Instruct with a *weak*
Qwen2.5-1.5B-Instruct; the controlled testbed (App. [13.1](https://arxiv.org/html/2607.03695v1#S13.SS1 "13.1 Controlled estimation testbed: two regimes across model scale ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")) uses a single
Qwen2.5-3B-Instruct by default, swept over the scale ladder for App. [13.2](https://arxiv.org/html/2607.03695v1#S13.SS2 "13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").

Decoding. Greedy ($\text{temperature}{=}0$, $\text{top-}p{=}1.0$, no repetition penalty, no
per-request sampling seed), so per-prompt generation is deterministic; the two-regime is not an
artifact of greedy decoding (Fig. [4](https://arxiv.org/html/2607.03695v1#S13.F4 "Figure 4 ‣ 13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")c contrasts greedy vs. $\tau{=}0.7$). Maximum new
tokens are $320$ for the discussion benchmarks and $96$ for the estimation testbed; the context window
is $4096$ tokens by default and raised to $16384$/$32768$ for the large-$n$ discussion runs whose
transcripts overflow $4096$. The two cooperative-boundary environments that require a norm-setting
free-text turn (GovSim) or match the source protocol (Debate) use $\text{temperature}{=}0.7$.

Operator arms. Each benchmark is run under three realizations of the influence operator $C$:
the *baseline* tempered allocator $\Gamma\_{\beta}$, the *equalized* allocator
$\Gamma^{\mathrm{EQ}}$, and (for the herding environments) an *adversary-off* causal control.
The allocator definitions and their parameters are given next.

### 12.2 The influence operator and its parameters

- •

  Context-width tempering $\Gamma\_{\beta}$ (baseline). Row-wise,
  $[\Gamma\_{\beta}(s)]\_{j}=s\_{j}^{1/\beta}/\sum\_{k}s\_{k}^{1/\beta}$: $\beta\!\to\!0$ is a hard argmax (herd
  onto the single most-exposed source), $\beta{=}1$ is proportional, $\beta\!\to\!\infty$ is uniform.
  Realized influence is $C(\beta)=\Gamma\_{\beta}(\bar{W}\odot\pi)$.
- •

  Equalized allocator $\Gamma^{\mathrm{EQ}}$. $k$ Sinkhorn iterations
  (column-normalize under the stationary weights $\mu$, then row-normalize) that drive the exposure
  matrix toward doubly stochastic, removing the exposure-column concentration a dominant source
  exploits. Default $k{=}4$; the $k$-robustness sweep is in App. [13.2](https://arxiv.org/html/2607.03695v1#S13.SS2 "13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").
- •

  Social power $\zeta$ (herding gate). A PageRank-style centrality mixing
  $\pi^{\!\top}=\frac{1-\zeta}{n}\mathbf{1}^{\!\top}(I-\zeta\bar{W})^{-1}$, $\zeta\!\in\![0,1)$:
  $\zeta{=}0$ gives uniform influence $1/n$; $\zeta\!\uparrow\!1$ concentrates influence on central
  sources. Default $\zeta{=}0.6$ in the discussion benchmarks and $\zeta{=}0.7$ in the testbed.
- •

  Follower self-reliance $\lambda$. A Friedkin–Johnsen anchoring $P{=}\mathrm{diag}(\lambda)$,
  $\lambda\_{i}\!\in\![0,1]$: $\lambda{=}1$ is DeGroot updating, $\lambda{<}1$ anchors an agent to its own
  prior. The testbed uses $\lambda{=}0.8$ for followers with the pinned leader forced to $1.0$; the
  discussion harness uses $\lambda{=}1.0$ (DeGroot) unless the optional anchored-prompt flag is set.
- •

  Background exposure. In the centralized (hub) topology every agent reads the hub at
  weight $1.0$ and every other peer at a floor weight $0.15$, which keeps the exposure support full;
  a coverage gate keeps the visible peers covering $90\%$ of each row’s influence mass.

### 12.3 How the context width $\beta$ is realized

$\beta$ is *not* a parameter of the language model: the backbone is a fixed, greedily-decoded
instruction model that never sees $\beta$. It is a knob of the simulation harness that controls, for
each agent and round, *which peers’ messages enter that agent’s prompt and with what displayed
weight*. Each round the harness forms the influence row $C\_{i:}(\beta)$ (Sec. [12.2](https://arxiv.org/html/2607.03695v1#S12.SS2 "12.2 The influence operator and its parameters ‣ 12 Experimental details ‣ Social Networks of LLM Agents")) and
builds agent $i$’s context by listing peers in descending $C\_{ij}$ order until their cumulative
normalized influence mass reaches the coverage threshold ($0.9$); peers below the threshold are
*withheld entirely*. This makes $\beta$ a genuine information bottleneck, not a cosmetic weight:

- •

  Narrow $\beta$. $C\_{i:}$ concentrates on the single most-exposed source (the hub), so
  the threshold is met by that source alone and every other agent’s private facts never appear in $i$’s
  prompt. The agent cannot pool what it never sees and defers to the dominant, confident-wrong source:
  herding.
- •

  Wide $\beta$. $C\_{i:}$ spreads out, so covering $90\%$ of the mass requires nearly all
  peers; the prompt then carries the distributed private facts and the agent pools them: wisdom.

Each shown peer is also labelled with its weight in the prompt (e.g. “[weight 0.31] Agent
7”), but the load-bearing effect is the hard inclusion/exclusion above. Because $\beta$ acts entirely
through prompt construction — never through model weights, fine-tuning, or decoding temperature — the
mechanism is backbone-agnostic, which is why the narrow-$\beta$ collapse and its equalizer fix replicate
on a second model family (App. [13.7](https://arxiv.org/html/2607.03695v1#S13.SS7 "13.7 Cross-family generality: Llama-3.1-8B ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")). The equalized allocator $\Gamma^{\mathrm{EQ}}$ changes
*which* column $C$ concentrates on (it removes the concentration), not the gating rule; the online
priced protocol reaches the same $C$ by updating per-source prices once per round. The exact prompt
templates, including the gated peer block, are in App. [12.7](https://arxiv.org/html/2607.03695v1#S12.SS7 "12.7 Prompt templates ‣ 12 Experimental details ‣ Social Networks of LLM Agents").

### 12.4 Environments

#### HiddenBench (hidden-profile reasoning).

The $65$-task benchmark of
[Li et al. [29]](https://arxiv.org/html/2607.03695v1#bib.bib36) (bit-identical to the public HiddenBench release, built on the
Stasser–Titus hidden-profile paradigm). Each task distributes unshared clues round-robin across the
$n$ agents so that no agent can answer alone and only pooling recovers the correct option. The
*injected adversary* pins the hub agent to a fixed wrong option ($(\text{answer}\bmod K)+1$) and
makes it structurally stubborn (the hub reads no one and never updates), so it broadcasts a confident
wrong answer at every round; the *adversary-off* control removes the pin. Collective accuracy is
the answer at the first round all $n$ agents agree on a valid option (else the final-round majority);
the pre-discussion baseline is the round-$0$ majority over the distributed beliefs. Large-$n$ runs use
$n\!\in\!\{8,16,24\}$, $T{=}5$ discussion rounds, $12$ tasks/seed, $5$ seeds, and a $9$-point $\beta$
grid ($n{=}24$) or $5$-point grid.

#### Werewolf (social deduction).

Standard one-werewolf games compiled into the HiddenBench
format: each of the $N{-}1$ innocents holds one truthful alibi clue whose pooling uniquely identifies
the werewolf. The werewolf plays a naturally deceptive role — it broadcasts a confident false
accusation — and we seat it at the influence hub, realized through the same hub-pin mechanism as the
HiddenBench adversary, so its deflection dominates each reader’s context at narrow $\beta$. Game files
exist for $N\!\in\!\{6,8,10,12,14,16\}$ ($100$ games each; $20$ sampled per run), $T{=}4$, $5$ seeds, a
$5$-point $\beta$ grid; the collective is scored correct when the village converges on the werewolf.
Both seats use the same model, so Werewolf isolates $\beta\times$adversary$\times$allocator, not
placement.

#### AgentsNet (distributed graph colouring).

The coordination benchmark of
[Grötschla et al. [23]](https://arxiv.org/html/2607.03695v1#bib.bib38). Each agent is a graph node choosing a colour in $1..\Delta{+}1$
different from all neighbours; a valid colouring always exists, so residual *colouring
conflicts* (edges whose endpoints share a colour, on the final beliefs, lower is better) measure
coordination failure. Graphs are Barabási–Albert (BA, attachment $m{=}2$; the default), plus
Watts–Strogatz (degree $\approx 4$, rewire $p{=}0.3$) and Delaunay for the topology ablation. The
society seats $2$ strong ($7$B) agents either on the highest-degree nodes (*central*) or the
lowest-degree nodes (*peripheral*), with everyone else weak ($1.5$B); placement is chosen by node
degree. Runs use $n\!\in\!\{8,16,24,32,50\}$, $T{=}4$, $30$ graphs, $5$ seeds, a $5$-point $\beta$ grid.

#### Boundary environments.

*Debate* [[15](https://arxiv.org/html/2607.03695v1#bib.bib1)] (network variant): agents on a
BA graph answer a hard multiple-choice question then revise after reading peers; collective accuracy
is the majority of final answers ($n{=}8$, $T{=}3$, $40$ tasks, $5$ seeds, a disclosed hub adversary).
*GovSim* [[35](https://arxiv.org/html/2607.03695v1#bib.bib39)]: $n{=}5$ fishers share a lake of capacity $20n$ over up to $12$
months; we report survival months and the sustainability rate (fraction of runs that do not collapse
below the threshold). *MARBLE* [[46](https://arxiv.org/html/2607.03695v1#bib.bib42)]: a MultiAgentBench coding-collaboration team
whose relationship graph is set to the thresholded $C(\beta)$ attention structure, scored by total
milestone completion, with the strong agent seated at the hub vs. a leaf.

### 12.5 Seeds, protocol, and statistics

Every run reports the mean over independent seeds, each seed re-drawing task instances, fact
distribution, and graph/game structure. Seeds are explicit and offset from a per-experiment base:
HiddenBench/Werewolf use base $4200$ with seeds $\{4200,5200,6200,7200,8200\}$ ($5$ seeds); AgentsNet
uses base $5500$ ($5$ seeds); the estimation testbed uses base $51000$ ($8$ seeds); the $N\_{\mathrm{eff}}$
suite uses base $53000$ ($24$ seeds, with $1000$ bootstrap resamples over seeds to check the stability
of the reported $N\_{\mathrm{eff}}$ estimates); Debate uses base $7300$ ($5$ seeds). Unless stated,
cells are $5$ seeds. The two-regime “gap” is wide-$\beta$ minus narrow-$\beta$ collective accuracy
(discussion benchmarks) or the analogous narrow$\to$wide change in error (testbed).

### 12.6 Hardware, software, and reproducibility

All LLM inference runs on a single node with $8\times$ NVIDIA RTX PRO 6000 (Blackwell,
sm\_120, $96$ GB each; driver $580.159.04$, CUDA $13.0$). We use vLLM $0.23.0$ under
Python $3.12$, PyTorch $2.11.0$, Transformers $5.12.1$, and NumPy $2.3.5$,
in bfloat16 with tensor-parallel size $1$ (one model replica per GPU). The in-process vLLM
engine is used throughout, except MARBLE and the corrected GovSim runs, which use a persistent
OpenAI-compatible vLLM server. Randomness flows through the explicit seeds above; greedy decoding is
used for reproducibility, with the caveat that greedy generation is batch-composition sensitive in
bfloat16, so bit-identical per-prompt decoding requires batch size $1$. (The committed
CPU-only environment.yml provisions the analysis/plotting environment only; the GPU inference
stack above is installed separately and its exact versions are recorded here from the live
environment, as no GPU lockfile is committed.)

### 12.7 Prompt templates

Every agent receives a *system* message (its role and private information) and a per-round
*user* message (the task instruction plus the $\beta$-gated peer block of Sec. [12.3](https://arxiv.org/html/2607.03695v1#S12.SS3 "12.3 How the context width 𝛽 is realized ‣ 12 Experimental details ‣ Social Networks of LLM Agents"));
every reply ends with a parseable BELIEF: <integer> line, from which we read the agent’s
choice. We reproduce the exact templates verbatim below; {...} marks a per-task field filled
from the benchmark item. Boxes are colour-coded throughout this section: grey is a
harness-constructed template, blue is the exact text a model actually saw, green is
a model’s real, unedited output.

HiddenBench — system message (template)

```
{scenario description}

Facts known to EVERYONE:
- {shared fact 1}
- ...
Facts known ONLY to you:
- {this agent’s private fact(s)}

Options:
1) {option 1}
2) {option 2}
...

First, in 1-2 sentences, state the specific fact(s) YOU were given that others
may not have. Then weigh all available facts and choose. End with exactly one
line:
BELIEF: <integer>
where <integer> is the option number of your current best decision (digits only).
```

HiddenBench — round-0 user message (template, no peers yet)

```
Choose the single best option by its number. Options: 1) ...; 2) ...; ...

Using only the information you were given, share your unique fact(s) and state
your current best answer.
```

HiddenBench — round $t{\geq}1$ user message (template; the peer block is
$\beta$-gated, Sec. [12.3](https://arxiv.org/html/2607.03695v1#S12.SS3 "12.3 How the context width 𝛽 is realized ‣ 12 Experimental details ‣ Social Networks of LLM Agents"))

```
Choose the single best option by its number. Options: 1) ...; 2) ...; ...

Messages from the agents you are listening to (with their weight in your context):
--- [weight 0.71] Agent 0 ---
{Agent 0’s most recent message}
--- [weight 0.12] Agent 3 ---
{Agent 3’s most recent message}

Pool everyone’s facts -- especially any you did not originally have -- and
reconsider. If a peer revealed a decisive fact, update accordingly. Give your
updated answer.
```

Anchoring suffix (appended to the system message in the anchored runs that make
the bridge bound non-vacuous, $\lambda\_{\max}<1$; App. [13.3](https://arxiv.org/html/2607.03695v1#S13.SS3 "13.3 Proxy↔LLM bridge and effective sample size ‣ 13 Full experimental results ‣ Social Networks of LLM Agents"))

```
IMPORTANT: weigh your OWN reading of the facts substantially. Do not simply adopt
the group’s majority; keep significant weight on your own current choice and
update only partially toward what others report.
```

The system message carries the node id, its neighbour ids, the palette size $K$, and the goal; the
round-$t$ user message shows only the neighbours $C(\beta)$ attends to (non-neighbours have zero
exposure):

AgentsNet — system + user message (template)

```
GRAPH COLOURING. Your neighbours are: {neighbour ids}. There are {K} colours,
numbered 1 to {K}. GOAL: choose a colour DIFFERENT from every one of your
neighbours.

Reason briefly, then end with exactly one line:
BELIEF: <integer>
where <integer> is the colour number you choose (digits only).

    [user, round >= 1]
Colours currently chosen by the neighbours you are attending to
(with their weight in your context):
  - Agent 3: colour 2   [weight 0.44]
  - Agent 7: undecided  [weight 0.19]

Choose a colour that DIFFERS from every neighbour shown above. If they already
occupy several colours, pick the smallest colour none of them uses. Give your
updated colour.
```

#### Worked example on a real item.

To make the templates concrete, the box below is the
verbatim system prompt the harness produced for one agent on the committed HiddenBench item “Safe
Haven After the Spill” (item $34$ of the $65$) — a textbook hidden profile in which the *shared*
facts favour Maple Lodge (the listed safe site) but the correct answer is Cedar Station, recoverable
only by pooling the three *unshared* facts (Pine Retreat lies in the drifting cloud; the road to
Maple Lodge is washed out; Cedar Station alone has working communications). The four agents are each
dealt one clue — Agent 0 (the hub) the drifting cloud, Agent 1 the washed-out road, Agent 2 the
Cedar-Station radio — except a fourth, Agent 3, that is dealt none. The box below is the verbatim
system prompt for *Agent 1*, holder of the decisive “washed-out road” clue:

Worked example — real system prompt (item 34, “Safe Haven After the Spill”)

```
You are part of a university field team conducting research in a rural
region. Suddenly, a chemical spill at a manufacturing plant several miles
away has triggered a region-wide alert. Everyone on your team must decide
together where to relocate for safety and communication with authorities.
You have very little time. There are three potential locations:
- Maple Lodge (a youth camp to the east)
- Pine Retreat (a cabin complex to the north)
- Cedar Station (an old ranger station to the south)
All locations are usually reachable in under an hour. Your goal: choose the
only safe and reachable location, maximizing your team’s safety and your
ability to coordinate with emergency services.

Facts known to EVERYONE:
- Maple Lodge is listed on the evacuation plan as a safe site for
  chemical-related incidents.
- Pine Retreat is farther from the spill than where you currently are.
- Cedar Station is an older building, less commonly used, but the route to
  it is familiar to everyone on the team.
- Maps indicate that all sites should have food and water supplies for at
  least 24 hours.

Facts known ONLY to you:
- Emergency traffic updates say the only road to Maple Lodge has been washed
  out by heavy rains this morning, making it inaccessible by car or foot.

Options:
1) Maple Lodge
2) Pine Retreat
3) Cedar Station

First, in 1-2 sentences, state the specific fact(s) YOU were given that
others may not have. Then weigh all available facts and choose. End with
exactly one line:
BELIEF: <integer>
where <integer> is the option number of your current best decision (digits
only).
```

Agent 3’s system prompt on this item is identical — same scenario, same shared facts, same options,
same answer contract — except for its private-facts block, which reads:

Worked example — Agent 3’s private-facts block (item 34), verbatim, all else identical to the box above

```
Facts known ONLY to you:
(no extra facts beyond the shared ones)
```

On this item the two regimes play out verbatim on the same Qwen2.5-7B backbone: Agent 3’s answer
depends entirely on which peers $\beta$ lets it read. At narrow $\beta{=}0.1$ the $0.9$ coverage
threshold is met by the hub (Agent 0) alone, so Agent 3 sees only the hub’s message — which,
leaning on the shared “Maple Lodge is the listed safe site”, argues merely that Pine Retreat is
dangerous — and it herds onto the wrong shared favourite:

Peer block shown at narrow $\beta{=}0.1$

```
Messages from the agents you are listening to (with their weight in your context):
--- [weight 1.00] Agent 0 ---
The chemical cloud is drifting north, making Pine Retreat dangerous.  BELIEF: 1
```

Follower’s real reply at narrow $\beta{=}0.1$

```
Based on the new information that the chemical cloud is drifting north, Pine
Retreat is now a dangerous location.
BELIEF: 1                                     <-- Maple Lodge  (WRONG)
```

At wide $\beta{=}10$ the same follower’s prompt clears nearly all peers, so it now also reads the two
decisive unshared clues, pools them, and flips to the correct answer:

Peer block shown at wide $\beta{=}10$

```
Messages from the agents you are listening to (with their weight in your context):
--- [weight 0.42] Agent 0 --- ...Pine Retreat dangerous.               BELIEF: 1
--- [weight 0.29] Agent 1 --- ...road to Maple Lodge washed out...     BELIEF: 2
--- [weight 0.29] Agent 2 --- ...Cedar Station has ... radio.          BELIEF: 3
```

Follower’s real reply at wide $\beta{=}10$

```
Based on the updated information:
- Maple Lodge is listed as a safe site but the road is washed out, making it
  inaccessible.
- Pine Retreat ... the chemical cloud is drifting north, making it dangerous.
- Cedar Station has a functional landline, backup generator, and emergency
  broadcast radio ...
BELIEF: 3                                     <-- Cedar Station  (CORRECT)
```

Nothing changed but $\beta$ — same item, same follower, same greedily-decoded backbone — yet the
context bottleneck alone turns a herded wrong answer into the pooled correct one. This single item is
drawn from the full $65$-task benchmark for illustration; averaged over the sampled HiddenBench runs
the same swing is the $0.09\pm 0.08$ narrow-$\beta$ floor versus the $0.73\pm 0.07$ wide-$\beta$
accuracy of Table [7](https://arxiv.org/html/2607.03695v1#S13.T7 "Table 7 ‣ Variance across arms. ‣ 13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").

## 13 Full experimental results

All tables in this section are computed from the committed data.json/cells.json
artifacts. Error is the estimation testbed’s collective error (lower is better); collective accuracy
and colouring conflicts are as defined above.

### 13.1 Controlled estimation testbed: two regimes across model scale

The testbed is a measurement instrument (App. [12.2](https://arxiv.org/html/2607.03695v1#S12.SS2 "12.2 The influence operator and its parameters ‣ 12 Experimental details ‣ Social Networks of LLM Agents"): it exposes $\delta$, $\lambda$, and
$N\_{\mathrm{eff}}$, which no cooperative benchmark reports), not a collective-intelligence claim in its
own right. A wrong “leader” is pinned at the influence centre; the collective error is high at
narrow $\beta$ (the followers herd onto the leader) and low at wide $\beta$ (they pool the distributed
noisy signals). Table [2](https://arxiv.org/html/2607.03695v1#S13.T2 "Table 2 ‣ 13.1 Controlled estimation testbed: two regimes across model scale ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") sweeps the crowd model over the capability ladder
($n{=}12$, $8$ seeds); the two-regime is present at every scale, and equalization reduces the
narrow-$\beta$ error the more capable the crowd (the $1.5$B row is the unstable/oscillating point noted
in the diagnostics, not a failure of the effect).

Table 2: Two-regime by model scale in the controlled testbed (collective error, lower is better;
$n{=}12$, $8$ seeds). Baseline $\Gamma\_{\beta}$ vs. equalized $\Gamma^{\mathrm{EQ}}$ at narrow
($\beta{=}0.1$) and wide ($\beta{=}10$) context width.

crowd model
base narrow
base wide
eq. narrow
eq. wide


Qwen2.5-0.5B
$57.6\pm 1.3$
$8.7\pm 5.1$
$45.9\pm 22.2$
$37.2\pm 23.5$

Qwen2.5-1.5B
$14.3\pm 3.5$
$8.0\pm 4.1$
$7.7\pm 4.6$
$9.4\pm 5.4$

Qwen2.5-3B
$41.5\pm 4.7$
$5.4\pm 4.1$
$15.5\pm 23.6$
$5.4\pm 2.7$

Qwen2.5-7B
$46.5\pm 3.7$
$12.5\pm 8.9$
$15.2\pm 21.0$
$12.1\pm 16.9$

### 13.2 Mechanism ablations

Table [3](https://arxiv.org/html/2607.03695v1#S13.T3 "Table 3 ‣ 13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") is the controlled-testbed ablation grid (Qwen2.5-3B, $n{=}12$,
$8$ seeds) over social power, self-reliance, Sinkhorn iterations, and five structural variants of the
interaction model, read from the per-setting run data. The central result is that the narrow-$\beta$ herding
error is *gated* by social power: it collapses to the healthy floor at $\zeta{=}0$ ($5.5$, no
concentration, no herding) and jumps to $\approx 42$ for any $\zeta{>}0$. Equalization lowers the
narrow-$\beta$ error under every setting; a single Sinkhorn iteration ($k{=}1$) already clears the
dominant column, so the effect is $k$-robust. At wide $\beta$ there is no dominant column left to
clear, so equalization has little upside and can slightly distort an already-balanced allocation
(e.g. the $k{=}4$ eq.-wide cell, and the smallest crowd in Table [2](https://arxiv.org/html/2607.03695v1#S13.T2 "Table 2 ‣ 13.1 Controlled estimation testbed: two regimes across model scale ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")); the
mechanism’s value is at narrow $\beta$, where a cheap price step recovers most of the wide-$\beta$
wisdom without paying for wide context. The herding persists across five structural variants of the
interaction model (memory, exposure-pricing, late-joiner, distance-decay, skeptic), each of which
equalization again clears. Self-reliance $\lambda$ has no measurable effect over $[0.3,0.7]$ (the
followers’ anchoring does not change the pinned-leader herding). Horizon and background exposure are
not swept in this testbed; population is checked separately on the real benchmarks
(Appendix [13.4](https://arxiv.org/html/2607.03695v1#S13.SS4 "13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents"), [13.5](https://arxiv.org/html/2607.03695v1#S13.SS5 "13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")), not as a testbed grid axis.

Table 3: Controlled-testbed ablations (collective error; Qwen2.5-3B, $n{=}12$, $8$ seeds).
“base” is $\Gamma\_{\beta}$, “eq” is $\Gamma^{\mathrm{EQ}}$; narrow $=\beta{=}0.1$, wide $=\beta{=}10$.

setting
base narrow
base wide
eq. narrow
eq. wide

Social power $\zeta$

$\zeta{=}0.0$
$\mathbf{5.5\pm 2.6}$
$4.9\pm 2.0$
$11.4\pm 16.2$
$8.7\pm 5.6$

$\zeta{=}0.2$
$42.2\pm 4.3$
$4.7\pm 2.3$
$25.5\pm 33.3$
$4.0\pm 1.5$

$\zeta{=}0.4$
$42.1\pm 4.2$
$5.2\pm 1.5$
$18.7\pm 23.2$
$4.8\pm 3.5$

$\zeta{=}0.6$
$42.1\pm 4.3$
$5.6\pm 4.2$
$17.3\pm 21.4$
$9.4\pm 8.2$

$\zeta{=}0.8$
$42.1\pm 4.2$
$3.9\pm 2.2$
$15.3\pm 17.3$
$10.3\pm 10.1$

$\zeta{=}0.9$
$41.7\pm 3.9$
$5.3\pm 1.9$
$16.7\pm 19.6$
$6.6\pm 2.5$

$\zeta{=}0.95$
$41.5\pm 3.6$
$4.5\pm 2.0$
$18.7\pm 22.8$
$8.1\pm 8.5$

Self-reliance $\lambda$

$0.3$–$0.7$ (all)
$42.1\pm 4.2$
$11.5\pm 18.5$
$10.0\pm 13.7$
$16.0\pm 17.5$

Sinkhorn iterations $k$

$k{=}1$
$39.4\pm 5.9$
$4.7\pm 2.7$
$6.9\pm 6.5$
$5.1\pm 2.4$

$k{=}2$
$39.4\pm 5.9$
$4.7\pm 2.7$
$6.9\pm 6.5$
$4.5\pm 1.6$

$k{=}4$
$39.4\pm 5.9$
$4.7\pm 2.7$
$6.9\pm 6.5$
$12.9\pm 15.0$

Structural variants

memory
$42.3\pm 8.6$
$14.5\pm 31.2$
$1.9\pm 2.1$
$1.9\pm 2.0$

exposure-price
$50.6\pm 1.7$
$5.3\pm 2.3$
$4.3\pm 1.9$
$4.9\pm 1.9$

late-joiner
$28.7\pm 5.0$
$2.2\pm 1.2$
$4.4\pm 2.4$
$5.6\pm 3.0$

distance-decay
$59.1\pm 1.1$
$4.4\pm 2.2$
$6.5\pm 3.7$
$11.0\pm 8.8$

skeptic
$18.4\pm 8.1$
$3.4\pm 1.8$
$5.0\pm 2.3$
$5.3\pm 5.0$


Figure 4: Mechanism ablations (visual). (a) the equalized allocator’s column defect
falls monotonically with Sinkhorn iterations $k$, from $0.14$ at $k{=}1$ to $0.037$ at $k{=}4$;
(b) herding is gated by social power,
absent at $\zeta{=}0$ and present for any $\zeta{>}0$ (cf. Table [3](https://arxiv.org/html/2607.03695v1#S13.T3 "Table 3 ‣ 13.2 Mechanism ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents"));
(c) on real HiddenBench ($n{=}24$) the two-regime holds under both greedy ($\tau{=}0$) and
stochastic ($\tau{=}0.7$) decoding.

### 13.3 Proxy$\leftrightarrow$LLM bridge and effective sample size

#### The bound holds.

Pooling the bridge cells (three $\beta$-sweep conditions plus the
anchored-persona run), the measured sup-norm proxy$\leftrightarrow$LLM discrepancy is at or under the
theoretical ceiling $\delta/(1-\lambda)$ in $254/254$ cells ($0$ violations), median margin
$2.5\times$ (Theorem [4.1](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem1 "Theorem 4.1 (Bridge). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")). The first-moment identity
$\hat{\theta}\_{\mathrm{LLM}}\!\approx\!q\_{T}^{\!\top}b\_{0}$ holds with OLS slope $0.88$ ($R^{2}{=}0.74$, vs. $0.28$ for a $\beta$-free mean-$b\_{0}$ baseline) — the LLM collective is the influence-weighted average
the theory predicts.

#### The anchoring weights are measured, not assumed.

The ceiling $\delta\_{T}/(1-\lambda\_{\max})$
depends on the per-agent anchoring $\lambda\_{i}$, which we do not set but fit by least squares over each
run: for fixed $i$ the residual $\hat{\delta}\_{i}(t)$ is affine in $\lambda\_{i}$ at each $t$, so
$\sum\_{t}\hat{\delta}\_{i}(t)^{2}$ is a univariate quadratic and the minimiser on $[0,1)$ is closed-form.
Reporting a goodness-of-fit residual after fitting $\lambda$ is standard; what matters is where the
resulting ceiling is genuinely small, not merely finite. It is tightest on the $89$ anchored-persona
cells, whose explicit anchoring prompt keeps self-reliance low (median $\lambda{=}0.25$), so $99\%$
have a ceiling below $250$, against the $\sim\!10^{5}$ an unanchored persona produces as
$\lambda\!\to\!1$. Across the full $254$-cell pool the fitted $\lambda$ is higher (median $0.61$) and
the ceiling looser, with $70\%$ below $250$; the bound holds with zero violations throughout, but is
non-vacuous in the strong sense only on the anchored subset and merely satisfied on the rest. Because
$\lambda\_{i}$ is fit from the $T$ residuals of one run, $\delta\_{T}$ is the worst-case residual
*after* each agent’s best-fit anchoring, so “zero violations” is a statement about per-agent
best-fit ceilings rather than about a prescribed $\lambda$.

#### $N\_{\mathrm{eff}}$ across network topology.

Table [4](https://arxiv.org/html/2607.03695v1#S13.T4 "Table 4 ‣ 𝑁_eff across network topology. ‣ 13.3 Proxy↔LLM bridge and effective sample size ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") reports the proxy
$N\_{\mathrm{eff}}$ ($q\_{T}$-based, $n{=}12$, $24$ seeds) as $\beta$ widens. The herding floor at narrow
$\beta$ and its recovery toward the degree ceiling at wide $\beta$ appear on every graph family that
has a concentrated hub (BA, ER, WS, SBM); the *regular* graph, which has no hub, shows no floor
($N\_{\mathrm{eff}}{=}12$ throughout) — the floor is a property of hub concentration, not of $n$.
This is consistent with Theorem [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")’s wide-context prediction: for the degree-regular
graph, the closed form $(\sum\_{k}d\_{k})^{2}/\sum\_{k}d\_{k}^{2}$ evaluates to exactly $12.00=n$ and the measured
$N\_{\mathrm{eff}}$ recovers it, while the Barabási–Albert graph’s degree heterogeneity evaluates the
same closed form at $8.89$. The wide-$\beta$ measurement is $9.8$; the two numbers are not the same
quantity — $8.89$ is the $\beta\!\to\!\infty$ stationary-weight ($\nu$) ceiling of the theorem,
whereas $9.8$ is the finite-$\beta$, finite-horizon $q\_{T}$-based estimate — but they agree in
magnitude and both sit well above the narrow-$\beta$ floor, which is the prediction being tested. The
same diagnosis does not transfer directly to the HiddenBench and Werewolf exposure graphs
(Appendix [13.4](https://arxiv.org/html/2607.03695v1#S13.SS4 "13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents"), [13.5](https://arxiv.org/html/2607.03695v1#S13.SS5 "13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")): their hub structure is asymmetric ($\bar{W}\neq\bar{W}^{\top}$),
outside this part of the theorem, and their *binary* support is near-degree-regular, so the gap
to oracle visible in Figure [1](https://arxiv.org/html/2607.03695v1#S5.F1 "Figure 1 ‣ Context width 𝛽 controls herding versus wisdom. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")A,B reflects the hidden-profile information ceiling rather
than degree heterogeneity.

Table 4: Effective sample size $N\_{\mathrm{eff}}$ (proxy $q\_{T}$; $n{=}12$, $24$ seeds) at narrow vs. wide $\beta$, by graph topology. Narrow $\beta$ herds onto the hub (small $N\_{\mathrm{eff}}$); wide
$\beta$ recovers the degree ceiling. Regular graphs have no hub and hence no floor.

topology
$N\_{\mathrm{eff}}$ narrow $\beta$
$N\_{\mathrm{eff}}$ wide $\beta$


Barabási–Albert (3B)
$3.0$
$9.8$

Barabási–Albert (7B)
$3.0$
$9.8$

Erdős–Rényi
$2.8$
$11.1$

Watts–Strogatz
$4.3$
$11.2$

stochastic block model
$6.0$
$11.6$

regular (no hub)
$12.0$
$12.0$


Figure 5: The closed-form two-regime, realized on the LLM testbed. Baseline collective error
shows the two regimes across $\beta$ while the equalized operator holds error low; $N\_{\mathrm{eff}}$
rises from the narrow-$\beta$ floor toward the degree ceiling (Theorems [4.2](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem2 "Theorem 4.2 (Attention width controls collective accuracy). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents"),
[4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents")). Real Qwen2.5-7B.

### 13.4 HiddenBench: two-regime, causation, floor, and equalizer

Table [5](https://arxiv.org/html/2607.03695v1#S13.T5 "Table 5 ‣ 13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") is the causation $2\times 2$ at $n{=}8$ (adversary $\{$on,off$\}$ $\times$
allocator $\{$baseline, $\Gamma^{\mathrm{EQ}}\}$, $5$ seeds): only the adversary-on/baseline cell
collapses at narrow $\beta$, and it is repaired by *either* intervention. Table [6](https://arxiv.org/html/2607.03695v1#S13.T6 "Table 6 ‣ 13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")
shows the floor is $n$-independent (flat narrow-$\beta$ accuracy from $n{=}8$ to $n{=}24$) and that
equalization recovers narrow-$\beta$ accuracy at every size. The equalizer is robust to its one knob:
at $n{=}8$ every $k\!\in\!\{1,2,4\}$ lifts narrow-$\beta$ accuracy off the floor (from $0.08$ to
$0.60$–$0.67$).

Table 5: HiddenBench causation $2\times 2$ (collective accuracy; $n{=}8$, $5$ seeds).

cell
$\beta{=}0.1$
$0.3$
$1.0$
$3.0$
$10$
gap


adv-on, baseline
$\mathbf{0.083}$
$0.067$
$0.667$
$0.700$
$0.733$
$+0.65$

adv-on, equalized
$0.667$
$0.633$
$0.633$
$0.600$
$0.600$
$-0.07$

adv-off, baseline
$0.583$
$0.583$
$0.750$
$0.767$
$0.717$
$+0.13$

adv-off, equalized
$0.683$
$0.817$
$0.717$
$0.717$
$0.767$
$+0.08$


Table 6: HiddenBench $N\_{\mathrm{eff}}$ floor across $n$ (adversary-on baseline vs. equalized;
collective accuracy; $5$ seeds). The narrow-$\beta$ floor is flat in $n$; equalization recovers it
at every $n$.

baseline $\Gamma\_{\beta}$
equalized $\Gamma^{\mathrm{EQ}}$

$n$
narrow $\beta$
wide $\beta$
gap
narrow $\beta$
recovery


$8$
$0.083$
$0.733$
$+0.65$
$0.667$
$+0.58$

$16$
$0.083$
$0.633$
$+0.55$
$0.583$
$+0.50$

$24$
$0.050$
$0.767$
$+0.72$
$0.617$
$+0.57$

#### Variance across arms.

Table [7](https://arxiv.org/html/2607.03695v1#S13.T7 "Table 7 ‣ Variance across arms. ‣ 13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") gives mean $\pm$ std at narrow and
wide $\beta$ (seed-level spread, pooled across the causation cells above). The baseline gate and
the herding floor are both low-variance and clearly separated (adv-on/baseline: $0.09\pm 0.08$ at
narrow $\beta$ vs. $0.73\pm 0.07$ at wide $\beta$); the equalizer’s narrow-$\beta$ recovery is
high-variance ($0.58\pm 0.13$), i.e. some seeds clear the collapse fully and others only partially
— an honest property of the mechanism, not noise to be hidden.

Table 7: HiddenBench, mean $\pm$ std collective accuracy at narrow ($\beta{=}0.1$) and wide
($\beta{=}10$) context width.

| arm | narrow $\beta$ | wide $\beta$ |
| --- | --- | --- |
| adv-on, baseline | $0.092\pm 0.075$ | $0.733\pm 0.069$ |
| equalized | $0.583\pm 0.134$ | $0.633\pm 0.153$ |
| adv-off | $0.517\pm 0.110$ | $0.667\pm 0.146$ |

### 13.5 Werewolf: two-regime, floor, and equalizer

Table [8](https://arxiv.org/html/2607.03695v1#S13.T8 "Table 8 ‣ 13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") gives the $n{=}6$ arms: at narrow $\beta$ the village herds onto the werewolf’s
false accusation and convicts the wrong player on *every* game ($0.00$); at wide $\beta$ it pools
the alibis and convicts the werewolf ($0.87$). Removing the werewolf’s deflection (the intrinsic
control) removes the collapse ($0.71$), and the fully-cleared equalizer recovers narrow-$\beta$ to
$0.55$ at this size. The narrow-$\beta$ floor is $n$-independent, pinned at $0.00$ for every
$n\!\in\!\{6,8,10,12,16\}$ while wide-$\beta$ stays high. The equalizer’s recovery, however, is not
$n$-independent: at $n{=}6$ a single Sinkhorn iteration already lifts narrow-$\beta$ off the floor,
but the recovery weakens as $n$ grows (the fully-cleared operator falls to $0.24$ at $n{=}16$;
Table [9](https://arxiv.org/html/2607.03695v1#S13.T9 "Table 9 ‣ Variance across arms. ‣ 13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")), so unlike HiddenBench, Werewolf does not recover equally at every size.

Table 8: Werewolf $n{=}6$ ($20$ games, $5$ seeds; collective accuracy). “equalized” is the
fully-cleared operator $\Gamma^{\mathrm{EQ}}$ run to its fixed point each round.
The $N\_{\mathrm{eff}}$ floor is $n$-independent (narrow-$\beta$ pinned at $0.00$ for all $n$).

arm ($n{=}6$)
$\beta{=}0.1$
$0.3$
$1.0$
$3.0$
$10$


baseline (wolf deflects)
$\mathbf{0.00}$
$0.00$
$0.00$
$0.88$
$0.87$

equalized $\Gamma^{\mathrm{EQ}}$ (fully cleared)
$0.55$
$0.51$
$0.48$
$0.48$
$0.48$

wolf does not deflect (control)
$0.71$
$0.72$
$0.66$
$0.89$
$0.91$

*$N\_{\mathrm{eff}}$ floor*: narrow-$\beta$ accuracy by $n$
($6,8,10,12,16$) $=0.00,0.00,0.00,0.00,0.00$; wide-$\beta$ $=0.87,0.83,0.70,0.63,0.59$.

#### Variance across arms.

Table [9](https://arxiv.org/html/2607.03695v1#S13.T9 "Table 9 ‣ Variance across arms. ‣ 13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") gives mean $\pm$ std at $n{=}16$
(seed-level spread). The narrow-$\beta$ floor has *zero* variance ($0.00\pm 0.00$): every seed
lynches the wrong player, not just most of them. The *online-priced* allocator (one price update
per round, as in Figure [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")) recovers narrow-$\beta$ to $0.18\pm 0.07$, just below the
fully-cleared operator at the same size ($0.24$; Figure [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")b) and well below the
operator’s $0.55$ at $n{=}6$ (Table [8](https://arxiv.org/html/2607.03695v1#S13.T8 "Table 8 ‣ 13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents")) — the operator recovery itself weakens with
$n$, and online pricing tracks just under it within $T{=}4$.

Table 9: Werewolf $n{=}16$, mean $\pm$ std collective accuracy at narrow ($\beta{=}0.1$) and wide
($\beta{=}10$) context width. Here “online-priced” is the one-update-per-round protocol of
Figure [2](https://arxiv.org/html/2607.03695v1#S5.F2 "Figure 2 ‣ Where capability sits controls coordination. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents"), *not* the fully-cleared operator of Table [8](https://arxiv.org/html/2607.03695v1#S13.T8 "Table 8 ‣ 13.5 Werewolf: two-regime, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").

| arm ($n{=}16$) | narrow $\beta$ | wide $\beta$ |
| --- | --- | --- |
| baseline (wolf deflects) | $0.000\pm 0.000$ | $0.585\pm 0.077$ |
| online-priced | $0.180\pm 0.074$ | $0.575\pm 0.097$ |
| wolf does not deflect | $0.160\pm 0.063$ | $0.585\pm 0.055$ |

### 13.6 AgentsNet: placement and its ablations

Placement is the complementary facet: seating the strong agents at the high-degree influence centre
beats seating them at the periphery, and the advantage grows monotonically with scale (main-text
Figure [1](https://arxiv.org/html/2607.03695v1#S5.F1 "Figure 1 ‣ Context width 𝛽 controls herding versus wisdom. ‣ 5.2 Main results ‣ 5 Experiments ‣ Social Networks of LLM Agents")c; $+1.5$ at $n{=}8$ to $+10.6$ at $n{=}50$). Table [10](https://arxiv.org/html/2607.03695v1#S13.T10 "Table 10 ‣ 13.6 AgentsNet: placement and its ablations ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") gives the ablation
matrix. Crucially, the placement gap is *degree/topology*-driven, not social-power-driven: it is
invariant to $\zeta$ and to the number of Sinkhorn iterations, and equalization *lowers*
conflicts but does *not* collapse the gap — so these ablations do not contradict
Theorem [4.3](https://arxiv.org/html/2607.03695v1#S4.Thmtheorem3 "Theorem 4.3 (Exact optimality under equalization). ‣ 4.3 Theoretical Guarantees ‣ 4 Proposed Methodology ‣ Social Networks of LLM Agents") (which neutralizes social-power column concentration, not a degree-induced
coordination advantage). The Watts–Strogatz control, whose hubs are weak, shows the gap shrink
($+2.2$ at $n{=}16$) and reverse sign ($-2.9$ at $n{=}32$), consistent with the effect being carried
by hub degree; per-seed conflicts were not logged for this ablation, so the $n{=}32$ sign flip is
not independently verified against sampling noise and should be read as suggestive rather than
confirmed.

Table 10: AgentsNet placement ablations (mean colouring conflicts, lower is better; $5$ seeds).
Gap $=$ peripheral $-$ central (positive $=$ centre wins).

| setting | central | peripheral | gap | reading |
| --- | --- | --- | --- | --- |
| baseline $n{=}16$ | $9.3$ | $15.1$ | $+5.8$ | — |
| equalized $n{=}16$ | $7.6$ | $14.0$ | $+6.4$ | eq lowers conflicts, gap survives |
| equalized $n{=}32$ | $13.2$ | $23.4$ | $+10.2$ | same at scale |
| $k{=}1$ / $k{=}2$ $n{=}16$ | $7.0$/$7.1$ | $13.5$/$13.9$ | $+6.5$/$+6.8$ | Sinkhorn-$k$ invariant |
| $\zeta{=}0$ $n{=}16$ | $10.6$ | $16.6$ | $+6.0$ | $\zeta$-invariant |
| $\zeta{=}0.9$ $n{=}16$ | $9.5$ | $15.2$ | $+5.7$ | $\zeta$-invariant |
| $T{=}8$ $n{=}16$ | $9.2$ | $14.7$ | $+5.5$ | horizon-robust |
| $n\_{\mathrm{strong}}{=}1$ $n{=}32$ | $17.2$ | $23.3$ | $+6.1$ | one hub agent already wins |
| small-world (WS) $n{=}16$ | $13.9$ | $16.1$ | $+2.2$ | weak hubs $\to$ small gap |
| small-world (WS) $n{=}32$ | $33.0$ | $30.1$ | $-2.9$ | homogeneous $\to$ gap vanishes/flips |

### 13.7 Cross-family generality: Llama-3.1-8B

Table [11](https://arxiv.org/html/2607.03695v1#S13.T11 "Table 11 ‣ 13.7 Cross-family generality: Llama-3.1-8B ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") re-runs the HiddenBench $2\times 2$ with Llama-3.1-8B in place of Qwen-7B
(same code, model swapped). All three signatures replicate: the narrow-$\beta$ herding collapse
($0.02$), the equalizer’s flat recovery ($+0.37$), and the adversary-off no-collapse control ($0.55$).
The honest scope is that *capability bounds the wide-$\beta$ regime*: Llama-8B is a weaker
reasoner here, so its wide-$\beta$ ceiling is lower ($0.35$ vs. Qwen’s $0.73$) and its adversary-off
curve *declines* with $\beta$ ($0.55\!\to\!0.33$) rather than rising — a weak model is hurt by
wide context. The narrow-$\beta$ collapse and the equalizer fix are model-family-agnostic; the
wide-$\beta$ *wisdom* magnitude is capability-bounded. Mean $\pm$ std at the endpoints (narrow
$\beta{=}0.1$, wide $\beta{=}10$): baseline $0.017\pm 0.020\to 0.267\pm 0.110$; equalized
$0.383\pm 0.076\to 0.392\pm 0.114$; adversary-off $0.550\pm 0.085\to 0.325\pm 0.082$. All three arms
separate cleanly at narrow $\beta$, confirming the signatures in Table [11](https://arxiv.org/html/2607.03695v1#S13.T11 "Table 11 ‣ 13.7 Cross-family generality: Llama-3.1-8B ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") are not
an artifact of seed noise.

Table 11: Cross-family generality: HiddenBench $2\times 2$ with Llama-3.1-8B (collective accuracy;
$5$ seeds). Individual $\approx 0.08$, oracle $\approx 0.76$.

arm
$\beta{=}0.1$
$0.3$
$1.0$
$3.0$
$10$


baseline $\Gamma\_{\beta}$
$\mathbf{0.02}$
$0.03$
$0.35$
$0.26$
$0.27$

equalized $\Gamma^{\mathrm{EQ}}$
$0.38$
$0.31$
$0.38$
$0.36$
$0.39$

adversary-off
$0.55$
$0.49$
$0.41$
$0.39$
$0.33$

### 13.8 Boundary environments

The two-regime is a property of aggregation-dependent tasks, and its magnitude tracks how strongly the
task forces deference to a dominant source. Table [12](https://arxiv.org/html/2607.03695v1#S13.T12 "Table 12 ‣ 13.8 Boundary environments ‣ 13 Full experimental results ‣ Social Networks of LLM Agents") maps the boundary.
*Debate* keeps every agent’s own answer and spreads influence over a BA graph with no single
bottleneck, so the injected adversary captures only a small share and the two-regime is weak
($+0.07$). *GovSim*, with the corrected inference backend, *saturates*: every condition
sustains the resource (survival $12$ months, sustainability rate $1.0$). This is structural, not a
tuning artifact: GovSim is a continuous-harvest decision in which each fisher independently chooses a
catch, with no private clue that must be pooled across agents to reach the right action — so there is
no hidden-profile information to aggregate and no confident-wrong source for the population to herd
onto. The two-regime therefore cannot arise here by construction, and GovSim saturates by ceiling
rather than by collapse. Together with Debate, this marks where the aggregation channel is absent or
the task never forces deference, so the theory neither predicts nor is tested by these environments.
*MARBLE* is a different case: it has a placement axis the theory does speak to, but decomposes
into independent per-agent milestones with no shared latent for placement to act on, and the placement
advantage flips sign across replicates ($+0.61$ versus $-0.58$). We report this as a negative result
— the predicted placement effect does not hold on independently-scored subtasks — not as a boundary
alongside the ceiling cases above.

Table 12: Boundary environments. Debate: collective accuracy by $\beta$ (the two-regime is weak).
GovSim: survival months / sustainability (the corrected backend saturates, no two-regime by
ceiling).

*Debate* (Du et al. network variant; $n{=}8$, $5$ seeds; collective accuracy)

arm
$\beta{=}0.1$
$0.3$
$1.0$
$3.0$
$10$
gap


baseline $\Gamma\_{\beta}$
$0.300$
$0.275$
$0.340$
$0.305$
$0.370$
$+0.07$

equalized
$0.330$
$0.315$
$0.305$
$0.340$
$0.300$
$-0.03$

adversary-off
$0.350$
$0.355$
$0.345$
$0.340$
$0.305$
$-0.04$

*GovSim* (corrected server backend): survival $=12$ months and
sustainability $=1.0$ in all conditions ($n{=}5$–$24$, baseline / equalized / fixed-pie /
anchored) — the collective saturates the cooperative ceiling; there is no two-regime.
