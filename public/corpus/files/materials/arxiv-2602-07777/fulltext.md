---
id: arxiv-2602-07777-text
type: material
title: 'Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents'
work_id: arxiv-2602-07777
source_url: https://arxiv.org/html/2602.07777v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 7fa2d4f44bd55e7b1b9a52466bb8281d5930872c0f152d71e64a5365b0301931
---

> Источник: [https://arxiv.org/html/2602.07777v2](https://arxiv.org/html/2602.07777v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents

Shuhui Zhu
Affiliation: University of Waterloo
Affiliation: Vector Institute
Correspondence to: [shuhui.zhu@uwaterloo.ca](mailto:shuhui.zhu@uwaterloo.ca)
  
Yue Lin
Affiliation: The Chinese University of Hong Kong, Shenzhen
  
Shriya Kaistha
Affiliation: University of Waterloo
  
Wenhao Li
Affiliation: Tongji University
  
Baoxiang Wang
Affiliation: The Chinese University of Hong Kong, Shenzhen
  
Hongyuan Zha
Affiliation: The Chinese University of Hong Kong, Shenzhen
  
Gillian K. Hadfield
Affiliation: Johns Hopkins University
  
Pascal Poupart
Affiliation: University of Waterloo
Affiliation: Vector Institute

###### Abstract

Indirect reciprocity, which means helping those who have helped others, is difficult to sustain among decentralized, self-interested LLM agents without reliable reputation systems. We address this challenge with the Agentic Linguistic Gossip Network (ALIGN), an automated framework that enables decentralized agents to form reputations, evaluate trustworthiness, and coordinate social norms by strategically sharing open-ended gossip with hierarchical tones. We demonstrate that ALIGN consistently improves indirect reciprocity and resists malicious entrants by identifying and ostracizing defectors. Notably, we find that stronger
reasoning capabilities in LLMs lead to more incentive-aligned cooperation,
whereas chat models often over-cooperate even when strategically
suboptimal. These results suggest that leveraging LLM reasoning through decentralized
gossip is a promising path for maintaining social welfare in agentic ecosystems.
Our code is available at <https://github.com/shuhui-zhu/ALIGN>.

## 1 Introduction

As LLM agents become increasingly deployed, they will inevitably interact
with one another across diverse domains in decentralized systems. However,
even if each agent is perfectly aligned with own interests, interactions among
mixed-motive agents can still lead to unexpected cooperation failure and potentially
harmful outcomes ([Hammond et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib15)). One common reason is the conflict
between self-interest and collective welfare. For instance, in public-goods games ([Samuelson, 1954](https://arxiv.org/html/2602.07777v2#bib.bib34)),
agents benefit when everyone contributes to the public pool, however, driven
by self-interest, agents become free-riders for immediate gains, reducing the
collective welfare ([Piedrahita et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib31)). This problem becomes severer
in large-scale decentralized systems where repeated interactions with the same
partners are not guaranteed. Because agents cannot directly monitor others’ behaviors
and repay past help from others, cooperation cannot be established via *direct
reciprocity* ([Trivers, 1971](https://arxiv.org/html/2602.07777v2#bib.bib39)) (i.e., I help you because you helped
me).

To mitigate such cooperation failure among LLM agents, a mechanism designed for
*indirect reciprocity* ([Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23); [Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24)) is needed
(i.e., I help you because you helped others). This often requires a
reputation system that allows agents to evaluate others’ trustworthiness without
direct encounters. Classic reputation models such as image score ([Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24))
and the leading eight social norms ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26)) have been
proved to enable indirect reciprocity in repeated donation games ([Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23)).
However, these approaches rely on static, game-tied norms and assume
centralized monitoring, which limits their applicability to decentralized systems.
Although recent works incorporate reputation mechanisms into LLM agents, they
either seed altruistic agents ([Ren et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib33)) or grant centralized
access to others’ interactions ([Vallinder & Hughes, 2024](https://arxiv.org/html/2602.07777v2#bib.bib40)). Therefore, it
is still an open question *whether and how self-interested LLM agents
can sustain indirect reciprocity in mixed-motive tasks without compromising
the decentralized self-interested setting*.

We examine whether *public gossip* can be a cure to this indirect
reciprocity failure. Unlike centralized reputation systems that require a trusted
authority, gossip enables decentralized agents to strategically transmit
reputation, allowing others to update their beliefs and strategies accordingly.
For example, online reviews or word-of-mouth recommendations often guide individuals’
decisions in the absence of direct experience. Evidence from social science has
also shown that gossip can facilitate cooperation and norm enforcement in human
societies ([Giardini & Wittek, 2019](https://arxiv.org/html/2602.07777v2#bib.bib13); [Wu et al., 2016](https://arxiv.org/html/2602.07777v2#bib.bib44); [Jolly & Chang, 2021](https://arxiv.org/html/2602.07777v2#bib.bib18); [Eriksson et al., 2021](https://arxiv.org/html/2602.07777v2#bib.bib11); [Wiessner, 2005](https://arxiv.org/html/2602.07777v2#bib.bib42)).
However, a research gap still remains: it is unclear whether and how gossip can
promote indirect reciprocity among decentralized, self-interested LLM agents.

To address this gap, we introduce Agentic LInguistic Gossip Network (ALIGN),
an automated framework where LLM agents leverage a public gossip protocol
for evaluating others’ trustworthiness, coordinating norms and guiding
actions. To achieve indirect reciprocity, ALIGN equips each agent with two
LLM modules: (1) a gossip module, through which witnesses broadcast evaluative
messages about observed actions, shaping reputation and norms within the community;
and (2) an action module, which conditions actions on public gossip logs with
the agent’s own experience memory. To enable norm coordination, ALIGN’s gossip
protocol provides strategic verbal evaluation in five hierarchical tones (Figure [4](https://arxiv.org/html/2602.07777v2#S4.F4 "Figure 4 ‣ Gossip Protocol. ‣ 4 ALIGN: Agentic LInguistic Gossip Network ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
Through this protocol, gossip carries not only the action information but also
the personal judgement of the witness. This helps the community share and
align on expectations about acceptable behavior. Additionally, hierarchical
gossip can serve as a cost-free verbal punishment ([Wiessner, 2005](https://arxiv.org/html/2602.07777v2#bib.bib42)):
more negative tones indicate potential disapproval and future ostracism, increasing
the perceived cost of defection and thereby strengthening incentives to cooperate.

The advantages of ALIGN are three-fold. (1) ALIGN can adapt to various mixed-motive
tasks, whereas classic reputation models rely on static, game-specific norms ([Smit & Santos, 2024](https://arxiv.org/html/2602.07777v2#bib.bib36); [Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26); [Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23); [Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24));
(2) ALIGN adopts a more realistic setting of fully decentralized, self-interested
agents, unlike recent approaches that introduce altruism ([Ren et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib33); [Fang et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib12); [Hughes et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib17))
or assume centralized control ([Vallinder & Hughes, 2024](https://arxiv.org/html/2602.07777v2#bib.bib40)). (3) ALIGN uses an
open-ended, hierarchical gossip protocol that conveys evaluative and
normative signals and can work with noisy or strategically framed language; by
contrast, prior work often relies on task-specific channels or hand-crafted
reputation scores, which limits generality ([Hughes et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib17); [Al-Maslamani et al., 2023](https://arxiv.org/html/2602.07777v2#bib.bib1)).

Our experiments evaluate ALIGN across eight LLMs and three types of testbeds:
(1) matrix games with direct reciprocity disabled, where cooperation can only arise
through indirect reciprocity ([Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23); [Ohtsuki & Iwasa, 2004](https://arxiv.org/html/2602.07777v2#bib.bib25));
(2) a sequential social dilemma with dynamic states and continuous actions; and
(3) a transaction market that maps to e-commerce applications.
Benchmark results show that ALIGN consistently improves indirect reciprocity and
collective welfare over non-gossiping baselines. Robustness tests further show that
ALIGN resists both exploitative agents and collusive gossipers: persistent defectors
are identified and gradually ostracized through negative gossip, preserving
community-level cooperation. ALIGN also remains robust to uninformative or untruthful
gossip, as agents can cross-validate public gossip against their own experience to
filter unreliable messages. Additionally, ablations show that binary reputation
signals cannot fully replace open-ended hierarchical gossip, which provides richer
normative context for sustaining cooperation.
These results position ALIGN as an adaptive mechanism for the emergence of
cooperation in decentralized LLM societies, bridging theoretical analyses of indirect
reciprocity with practical agentic implementations.

Contrary to prior work ([Piedrahita et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib31)), which suggests that
stronger reasoning leads to less cooperative behavior in social dilemmas, our empirical analysis reveals a more nuanced pattern. Reasoning-focused LLMs are not inherently less cooperative, but more
sensitive to the incentive structure: they withhold cooperation when future reciprocity is
unsupported and cooperate when long-term reputation makes cooperation beneficial.
By contrast, chat LLMs may irrationally
over-cooperate even when it is strategically suboptimal. These insights offer
guidance for the future design of cooperative mechanisms. As reasoning-focused
LLMs grow more powerful and widely deployed, ensuring their interactions remain
beneficial in decentralized societies is important for AI safety.

## 2 Related Work

Below, we review literature on indirect reciprocity in game theory and in
LLM-agent settings. Additional related work are discussed in Appendix [F](https://arxiv.org/html/2602.07777v2#A6 "Appendix F Additional Related Works ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

### 2.1 Reciprocal Altruism

Reciprocal altruism ([Trivers, 1971](https://arxiv.org/html/2602.07777v2#bib.bib39)), where an agent incurs a
cost to help another with the expectation of future return, is a powerful mechanism
for sustaining cooperation in mixed-motive interactions. *Direct
reciprocity* ([Trivers, 1971](https://arxiv.org/html/2602.07777v2#bib.bib39)) arises when the same pair of
agents interacts repeatedly. For example, in the infinite-horizon prisoner’s
dilemma ([Rapoport, 1965](https://arxiv.org/html/2602.07777v2#bib.bib32)), conditional commitment strategies such
as Tit-for-Tat ([Axelrod, 1980](https://arxiv.org/html/2602.07777v2#bib.bib3)) (cooperating initially and then
mirroring the partner’s previous action) can stabilize mutual cooperation ([Zhu et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib46)).
Rather than being restricted to repeated encounters, *indirect
reciprocity*  ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26); [Ohtsuki & Iwasa, 2004](https://arxiv.org/html/2602.07777v2#bib.bib25); [Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24); [Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23))
generalizes cooperation to large, dynamic populations, where agents help those
known to have helped others. Therefore, to achieve indirect reciprocity, the
reputation of everyone needs to be continually assessed and shared in the
population. Classic models of indirect reciprocity include first-order *image
scoring* ([Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23)), where an agent’s reputation is
determined solely by its own past actions (e.g., cooperation is good and defection
is bad), and second-order norms ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26)), where reputation
also depends on the coplayer’s reputation (e.g., cooperation with a defector
is bad). These models, however, focus on static norms and behavioral rules, and
often assume centralized monitoring, which limits their applicability to
decentralized systems.

(a) Private monitoring

(b) Perfect public monitoring

(c) Imperfect public monitoring via gossip

Figure 1: Illustration of three monitoring structures: (a) Private
monitoring, only the donor and recipient observe the donor’s action; (b)
Perfect public monitoring, all agents observe the donor’s
action; (c) Imperfect public monitoring via gossip, only the donor
and recipient observe the action, and all agents observe the public
signal broadcast by the recipient.

### 2.2 LLM Agents for Indirect Reciprocity

LLM agents are increasingly deployed to study cooperation in mixed-motive multi-agent
settings ([Ren et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib33); [Kempinski et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib19); [Piedrahita et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib31); [Willis et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib43); [Piatti et al., 2024](https://arxiv.org/html/2602.07777v2#bib.bib30); [Vallinder & Hughes, 2024](https://arxiv.org/html/2602.07777v2#bib.bib40); [Park et al., 2023](https://arxiv.org/html/2602.07777v2#bib.bib29); [Leng & Yuan, 2023](https://arxiv.org/html/2602.07777v2#bib.bib21)).
While these studies show that LLMs may cooperate in social interactions,
most literature focuses on emergent cooperation and rarely examines indirect
reciprocity as a cooperative mechanism. The most relevant works to our study
investigate reputation systems among LLM agents ([Ren et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib33); [Vallinder & Hughes, 2024](https://arxiv.org/html/2602.07777v2#bib.bib40)).
However, they either seed altruistic agents ([Ren et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib33)), or assume
centralized observability while testing on finite-horizon social dilemmas
where cooperation is not an equilibrium ([Vallinder & Hughes, 2024](https://arxiv.org/html/2602.07777v2#bib.bib40)). This
leaves a research gap in mechanism design for indirect reciprocity among
decentralized, fully self-interested agents.

## 3 Game-Theoretic Setup and Propositions

We provide a game-theoretic analysis of
when and how public gossip supports the emergence of indirect reciprocity. In
particular, we focus on the repeated donation game (Definition [3.1](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem1 "Definition 3.1 (Repeated Donation Game). ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")) ([Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23); [Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24)),
a well-known testbed for studying indirect reciprocity.

###### Definition 3.1 (Repeated Donation Game).

A repeated donation game is a tuple $\mathcal{G}=(\mathcal{N},T,\mathcal{A},(\mathcal{O}\_{i})\_{i\in\mathcal{N}},e,c,b,\gamma)$, where $\mathcal{N}$ is the set of agents, $T\in\mathbb{N}\cup\{\infty\}$ is the game horizon,
$\mathcal{A}=\{\mathrm{cooperate},\,\mathrm{defect}\}$ is the action
space, $\mathcal{O}\_{i}$ is the observation space of agent $i\in\mathcal{N}$,
$e\in\mathbb{R}^{+}$ is the common initial endowment for every agent
$i\in\mathcal{N}$, $c>0$ is the cost of cooperation to the donor, $b>c$
is the benefit of cooperation to the recipient, $\gamma\in(0,1]$ is the
discount factor. At each timestep $t=1,\dots,T$, two agents are randomly
paired without replacement, one is assigned as the donor $i\in\mathcal{N}$
and the other as the recipient $j\in\mathcal{N}\setminus\{i\}$. After
observation of remaining resources, the donor chooses $a\_{i}^{t}\in\mathcal{A}$.
If $a\_{i}^{t}=\mathrm{cooperate}$, then immediate rewards are $r\_{i}^{t}=-c$ and $r\_{j}^{t}=b$; otherwise, $r\_{i}^{t}=r\_{j}^{t}=0$. After each
timestep, the donor $i$ and recipient $j$ are required to switch roles in
the subsequent round, with $i$ acting as the recipient and $j$ as the
donor. Subject to this role-switching constraint, agents are then
randomly re-matched with new partners.

The strategy of each agent $i\in\mathcal{N}$ is represented by its action policy
$\pi\_{i}:\mathcal{O}\_{i}\mapsto\mathcal{A}$, which maps the agent’s
observation to an action. Each agent’s objective is to maximize its expected
discounted utility over the horizon, defined as
$G\_{i}=\sum\_{t=1}^{T}\gamma^{\,t-1}r\_{i}^{t},\forall i\in\mathcal{N}$. This
repeated donation game creates a social dilemma: donating increases
collective welfare as $b>c$, but incurs an immediate personal cost to the donor.
Note that in each round, two agents are randomly matched to play a one-shot donation
game, and no pair can meet more than once. Because the recipient cannot repay
the donor in future encounters, direct reciprocity is disabled. Therefore,
self-interested agents will cooperate only if they build indirect
reciprocity within the community (i.e., a donor cooperates with a recipient if
the recipient is likely to cooperates with others).

### 3.1 Equilibrium Analysis

We now analyze the existence of equilibria in
the repeated donation game under different assumptions about the game horizon
and monitoring structure. We consider two horizon settings: (i) *finite
horizon*, where the game lasts a known number of rounds ($T<\infty$); and
(ii) *infinite horizon*, where the game continues indefinitely ($T=\infty$).
We also examine three monitoring structures (Figure [1](https://arxiv.org/html/2602.07777v2#S2.F1 "Figure 1 ‣ 2.1 Reciprocal Altruism ‣ 2 Related Work ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")):
(i) *private monitoring*, where only the paired donor and recipient
observe the donor’s action; (ii) *perfect public monitoring*, where the
full history of actions is publicly observed; and (iii) *imperfect
public monitoring via gossip*, where only participants observe the action
directly, but the recipient broadcasts a public signal about the donor’s behavior.
Assuming all agents are self-interested, we summarize our main propositions below,
detailed proofs are provided in Appendix [A](https://arxiv.org/html/2602.07777v2#A1 "Appendix A Proof of Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

##### Finite Horizon.

We first consider the finite-horizon case. As stated in Proposition [3.2](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem2 "Proposition 3.2. ‣ Finite Horizon. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),
mutual defection is the unique subgame-perfect equilibrium (SPE), even with
perfect public monitoring. This aligns with the classical backward induction
result in finitely repeated games ([Benoit et al., 1984](https://arxiv.org/html/2602.07777v2#bib.bib6)), where the last
round’s dominant strategy of defection unravels cooperation in all preceding
rounds. Therefore, cooperation cannot be sustained among self-interested agents
in finite-horizon repeated donation games.

###### Proposition 3.2.

In a finite-horizon repeated donation game, the unique
SPE for all agents is to defect in every timestep.

##### Infinite Horizon with Private Monitoring.

We next consider the infinite-horizon game under private monitoring. As
stated in Proposition [3.3](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem3 "Proposition 3.3. ‣ Infinite Horizon with Private Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), cooperation still fails:
without a public monitoring mechanism, each agent optimizes utility in isolation.
Because donation is personally costly and lacks guaranteed return, defection
remains the dominant strategy.

###### Proposition 3.3.

In an infinite-horizon repeated donation game
with private monitoring, the unique SPE is for all agents to defect in
every timestep.

##### Infinite Horizon with Perfect Public Monitoring.

In contrast, under perfect public monitoring, cooperation can be sustained
in the infinite-horizon setting. Proposition [3.4](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem4 "Proposition 3.4. ‣ Infinite Horizon with Perfect Public Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") shows that
if the discount factor satisfies $\gamma\geq\frac{c}{b}$, then there exists
an SPE that sustains cooperation. This condition ensures that agents value future
payoffs sufficiently to make cooperation worthwhile. For example, consider all
donors cooperate only with recipients who have never defected; otherwise, they
defect. This strategy creates a credible threat for non-cooperative behavior,
because defection marks the donor as a defector and triggers subsequent punishment
by future donors. In this case, no one has an incentive to deviate from cooperation,
thus indirect reciprocity can be sustained indefinitely through conditional
strategies based on public histories.

###### Proposition 3.4.

In an infinite-horizon repeated donation game with
perfect public monitoring. If the common discount factor satisfies
$\gamma\geq\frac{c}{b}$, then there exists an SPE where cooperation is sustained
through conditional strategies based on observed histories.

##### Infinite Horizon with Imperfect Public Monitoring via Gossip.

However, perfect public monitoring is often impractical in decentralized
systems, where agents may not have access to complete behavioral histories of
the entire population. This raises the question of whether cooperation can
still emerge under more relaxed monitoring assumptions. To explore this, we
introduce the repeated donation game with public gossip (Definition [A.1](https://arxiv.org/html/2602.07777v2#A1.Thmtheorem1 "Definition A.1 (Repeated Donation Game with Public Gossip). ‣ A.4 Definition of Repeated Donation Game with Public Gossip ‣ Appendix A Proof of Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
in Appendix [A.4](https://arxiv.org/html/2602.07777v2#A1.SS4 "A.4 Definition of Repeated Donation Game with Public Gossip ‣ Appendix A Proof of Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), which augments the base game with
a message channel: after observing the donor’s action, the recipient broadcasts
a public message to the entire community. These messages provide imperfect
information about donor’s behavior. As stated in Proposition [3.5](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem5 "Proposition 3.5. ‣ Infinite Horizon with Imperfect Public Monitoring via Gossip. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),
even under this imperfect public monitoring structure without requiring full
transparency, cooperation can still be sustained if agents condition their strategies
on the public signals. For example, if recipients truthfully report donors’
actions, then donors can apply the same conditional strategy as under perfect
public monitoring, using reported defections as the basis for punishment, which
makes deviation from cooperation unprofitable.

###### Proposition 3.5.

In infinite-horizon repeated donation games with
public gossip, if $\gamma\geq\frac{c}{b}$, then there exists an SPE where
cooperation is sustained through conditional strategies based on public signals.

Note that an always-defect outcome is still an SPE in the infinite-horizon
game with public gossip: if all donors defect regardless of gossip history or
all recipients send untruthful messages, indirect reciprocity collapses. Therefore,
it remains an open question whether and how LLM agents can leverage public
gossip to sustain cooperation in practice, rather than converging to universal
defection.

## 4 ALIGN: Agentic LInguistic Gossip Network

![Refer to caption](https://arxiv.org/html/2602.07777v2/DecisionProcess.png)


Figure 2: Decision Process in ALIGN

![Refer to caption](https://arxiv.org/html/2602.07777v2/AgentLLM_EG.png)


Figure 3: Generative Agent Architecture of ALIGN

To investigate how decentralized LLM agents can build indirect reciprocity
through public gossip, we introduce Agentic LInguistic Gossip Network (ALIGN),
an automated framework where self-interested LLM agents strategically share
open-ended gossip with hierarchical tones to judge others’ trustworthiness and
guide coordination.

##### Decision Process.

Figure [2](https://arxiv.org/html/2602.07777v2#S4.F2 "Figure 2 ‣ 4 ALIGN: Agentic LInguistic Gossip Network ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") shows the decision process in ALIGN in an imperfect
information multi-agent environment where agents cannot observe others’
actions unless they are directly involved in the interaction. During each interaction,
agents can be classified into three roles: actor, witness, and audience. The
actor takes an action, the witness observes that action, and the audience
include all other agents who do not observe the action but receive imperfect
information about it via public gossip broadcast by the witness. Audience agents
can use the gossip to update beliefs about the actor and adjust subsequent strategies.
When an audience agent interacts with the actor in future rounds, it can condition
its decision on the accumulated gossip history.

##### Generative Agent Architecture.

Each ALIGN agent has two LLM-based modules: a *gossip module* that generates
evaluative messages about observed actions, and an *action module* that
selects actions based on the agent’s private experience and the public gossip
history (Figure [3](https://arxiv.org/html/2602.07777v2#S4.F3 "Figure 3 ‣ 4 ALIGN: Agentic LInguistic Gossip Network ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")). Both modules are initialized with a
system prompt that describes the environment and the agent’s self-interested
objective (e.g. maximizing long-term individual utility). At each
interaction, modules receive the agent’s private observation, private
experience memory, the public gossip log, optional common knowledge (e.g., equilibrium
knowledge; ablated in Section [5.3](https://arxiv.org/html/2602.07777v2#S5.SS3 "5.3 Ablation Study ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), and explicit
instructions defining the action and gossip spaces. These prompts are updated
with new observations, experiences and messages after each round. Additionally,
each module includes a reflection step, where the agent reviews all available
information to reflect how to optimize its objective. These reflections are
updated in their memory, allowing agents to adapt their strategies over time
based on accumulated experience. Algorithm [1](https://arxiv.org/html/2602.07777v2#alg1 "Algorithm 1 ‣ Appendix B ALIGN Details ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") in Appendix [B](https://arxiv.org/html/2602.07777v2#A2 "Appendix B ALIGN Details ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
provides pseudocode for ALIGN.

##### Gossip Protocol.

We show in Section [3](https://arxiv.org/html/2602.07777v2#S3 "3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") that public gossip of
action labels can support indirect-reciprocity equilibria in repeated
donation games. However, label-only gossip often fails when indirect
reciprocity needs context of norms and robustness to untruthful and noisy
messages ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26)). To address this, ALIGN’s gossip protocol
leverages generative capabilities of LLMs and provides strategic verbal evaluation
in five hierarchical tones (Figure [4](https://arxiv.org/html/2602.07777v2#S4.F4 "Figure 4 ‣ Gossip Protocol. ‣ 4 ALIGN: Agentic LInguistic Gossip Network ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")). Through this
protocol, gossip carries not only the action information but also the personal
judgement of the witness. This helps the community share and align on
expectations about acceptable behavior. Additionally, hierarchical verbal
critique has been found to enforce social norms in human groups ([Wiessner, 2005](https://arxiv.org/html/2602.07777v2#bib.bib42))
as negative tones indicate potential disapproval and future ostracism. This
increases the perceived future cost of defection and thus strengthens
incentives to cooperate.

Figure 4: Tones of Gossip Protocol

## 5 Experiments

Table 1: Results for non-gossiping agents in the infinite-horizon
donation game. Metrics marked with $\downarrow$ indicate that lower values
are more aligned with the game-theoretic SPE of defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $0.36\pm 0.08$ | $-1.14\pm 0.65$ | $0.72\pm 0.16$ | $5.55\pm 1.28$ | $0.63\pm 0.13$ |
| Gemini 2.5 Flash-Lite | $0.08\pm 0.03$ | $-3.33\pm 0.27$ | $0.17\pm 0.07$ | $1.32\pm 0.53$ | $0.73\pm 0.25$ |
| LLaMA 4 Maverick | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| o4-mini | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |


Table 2: Benchmark results for ALIGN agents across LLMs in the infinite-horizon
donation game. Metrics marked with $\uparrow$ indicating that higher values
are more desirable; although both cooperation and defection are SPE, higher
cooperation yields greater average payoffs.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.94\pm 0.02$ | $3.48\pm 0.20$ | $1.87\pm 0.05$ | $14.40\pm 0.40$ | $0.08\pm 0.02$ |
| GPT-4o Mini | $0.99\pm 0.01$ | $3.89\pm 0.11$ | $1.97\pm 0.03$ | $15.23\pm 0.20$ | $0.02\pm 0.02$ |
| Gemini 2.5 Flash-Lite | $0.60\pm 0.22$ | $0.83\pm 1.75$ | $1.21\pm 0.44$ | $9.32\pm 3.37$ | $0.34\pm 0.21$ |
| LLaMA 4 Maverick | $0.94\pm 0.03$ | $3.50\pm 0.23$ | $1.88\pm 0.06$ | $14.45\pm 0.44$ | $0.06\pm 0.02$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.73\pm 0.16$ | $1.81\pm 1.30$ | $1.45\pm 0.32$ | $11.21\pm 2.50$ | $0.08\pm 0.05$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{1.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{2.00\pm 0.00}$ | $\mathbf{15.44\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.69\pm 0.24$ | $1.56\pm 1.88$ | $1.39\pm 0.47$ | $10.71\pm 3.63$ | $0.05\pm 0.03$ |
| o4-mini | $0.98\pm 0.02$ | $3.83\pm 0.17$ | $1.96\pm 0.04$ | $15.11\pm 0.33$ | $0.02\pm 0.02$ |

Our experiment design has two goals. (1) We evaluate *whether ALIGN
induces incentive-aligned behavior* when cooperation is known to be theoretically
suboptimal (finite horizon; infinite horizon without gossip) versus
beneficial (infinite horizon with public gossip; Section [3.1](https://arxiv.org/html/2602.07777v2#S3.SS1 "3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
(2) We assess *whether ALIGN enhances indirect reciprocity*. To isolate
the effect of public gossip, we benchmark ALIGN agents against non-gossiping
agents with identical action modules across multiple domains. We further
test robustness of ALIGN to malicious entrants and to noisy or untruthful
gossip. We also run ablations to identify which components are most critical
for the emergence of cooperation.

##### Environments.

We evaluate four testbeds. (1) Two matrix games with direct reciprocity disabled:
the repeated donation game (Section [3](https://arxiv.org/html/2602.07777v2#S3 "3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")) and the
indirect reciprocity (IR) game (Appendix [D.2](https://arxiv.org/html/2602.07777v2#A4.SS2 "D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
(2) A sequential investment scenario (Appendix
[D.4](https://arxiv.org/html/2602.07777v2#A4.SS4 "D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")) with dynamic state and continuous actions.
(3) A transaction market that maps to e-commerce applications (Appendix [D.5](https://arxiv.org/html/2602.07777v2#A4.SS5 "D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
All testbeds with default $\gamma=0.99$ represent social dilemmas where cooperation
induces an immediate cost but can increase long-term individual utility when
others reciprocate. Prompts of all scenarios are included in Section [C](https://arxiv.org/html/2602.07777v2#A3 "Appendix C Prompts ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").
More implementation details and supplementary results are included in Appendix [D](https://arxiv.org/html/2602.07777v2#A4 "Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

##### Benchmark Models.

We evaluate ALIGN agents with two categories of LLMs: (a) Chat
models, including GPT-4o Mini ([OpenAI, 2024](https://arxiv.org/html/2602.07777v2#bib.bib27)), DeepSeek-V3.1 (non-thinking
mode) ([DeepSeek AI, 2025](https://arxiv.org/html/2602.07777v2#bib.bib10)), Gemini 2.5 Flash-Lite ([Comanici et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib9)),
and LLaMA 4 Maverick ([Meta, 2025](https://arxiv.org/html/2602.07777v2#bib.bib22)); and (b) Reasoning models,
including o4-mini ([OpenAI, 2025](https://arxiv.org/html/2602.07777v2#bib.bib28)), DeepSeek-V3.1 (thinking mode) ([DeepSeek AI, 2025](https://arxiv.org/html/2602.07777v2#bib.bib10)),
Qwen3-235B-Instruct ([Yang et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib45)), and Kimi-K2-Instruct ([Team et al., 2025](https://arxiv.org/html/2602.07777v2#bib.bib37)).
All LLMs are evaluated with temperature $0$ to ensure reproducibility. Each
scenario is repeated with $5$ random seeds, and we report results as averages
with standard errors across seeds.

##### Evaluation Metrics.

To quantify performance, we report average reward per round and discounted return
$G\_{i}=\sum\_{t=1}^{T}0.99^{\,t-1}r\_{i}^{t}$ for all $i\in\mathcal{N}$ as measures
of utility, and the Gini coefficient ([Gini, 1936](https://arxiv.org/html/2602.07777v2#bib.bib14)) (Eq. [1](https://arxiv.org/html/2602.07777v2#S5.E1 "Equation 1 ‣ Evaluation Metrics. ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"))
of discounted return as a measure of inequality across agents. For matrix games,
we additionally report the cooperation ratio (fraction of rounds with cooperation)
and image score ([Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24)) (Eq. [2](https://arxiv.org/html/2602.07777v2#S5.E2 "Equation 2 ‣ Evaluation Metrics. ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")) as a
reputation measure. For the investment scenario, we report the investment
ratio and return ratio. For the transaction market, we report the proportion
of high-quality products and the purchase rate of customized products. All metrics
are averaged across agents and $5$ random seeds.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{Gini Coefficient}=\frac{\sum\_{i=1}^{n}\sum\_{j=1}^{n}\lvert G\_{i}-G\_{j}\rvert}{2n\sum\_{i=1}^{n}G\_{i}},\qquad n=|\mathcal{N}|.$$ |  | (1) |

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{Image Score}=N\_{\text{Cooperation}}-N\_{\text{Defection}}.$$ |  | (2) |

### 5.1 Benchmarking ALIGN

(a)

(b)

(c)

(d)

Figure 5: Tone Proportions in Infinite-horizon Repeated Donation
Game: (a) cooperating chat models, (b) cooperating reasoning models, (c)
defecting chat models and (d) defecting reasoning models. ALIGN agents
typically praise cooperation and criticize defection.


(a) Repeated Donation Game

(b) Indirect Reciprocity Game

Figure 6: Discounted Returns of ALIGN and Non-Gossiping Agents in
Infinite-Horizon Indirect Reciprocity Testbeds: ALIGN agents generally achieve
higher discounted returns than non-gossiping agents, especially among
reasoning-focused models. Without gossip, reasoning LLMs consistently
obtain zero discounted returns, aligning with the game-theoretic prediction,
whereas some chat LLMs deviate from this prediction by cooperating even
when cooperation is strictly suboptimal. Diamonds denote zero discounted
returns.


Figure 7: Cooperation Ratios of ALIGN Agents under Different
Discount Factors in Infinite-Horizon Repeated Donation Games: Higher discount
factors generally lead to increased cooperation, especially for
reasoning-focused LLMs.


Figure 8: Cooperation Ratio towards a Greedy Agent: ALIGN agents
reduce cooperation as the number of interactions ($K$) with the greedy
agent increases.

#### 5.1.1 Finite-Horizon Scenarios

In both finite-horizon matrix games, cooperation is not an SPE (Proposition [3.2](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem2 "Proposition 3.2. ‣ Finite Horizon. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
Our benchmark results show that cooperation is almost entirely absent
without gossip (Table [4](https://arxiv.org/html/2602.07777v2#A4.T4 "Table 4 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),Table [7](https://arxiv.org/html/2602.07777v2#A4.T7 "Table 7 ‣ Finite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
Even with public gossip (Table [5](https://arxiv.org/html/2602.07777v2#A4.T5 "Table 5 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),Table [8](https://arxiv.org/html/2602.07777v2#A4.T8 "Table 8 ‣ Finite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")),
reasoning-focused LLMs remain mostly non-cooperative. In contrast, some chat
LLMs achieve high cooperation ratios with low Gini coefficients, indicating that
agents driven by these chat LLMs often cooperate even when it is suboptimal in
the finite-horizon setting.

#### 5.1.2 Infinite-Horizon Scenarios

##### Non-Gossiping Agents.

In infinite-horizon scenarios without gossip, cooperation is not an SPE either
(Proposition [3.3](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem3 "Proposition 3.3. ‣ Infinite Horizon with Private Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")). As shown in Table [1](https://arxiv.org/html/2602.07777v2#S5.T1 "Table 1 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
and Table [9](https://arxiv.org/html/2602.07777v2#A4.T9 "Table 9 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") (Appendix [D.1](https://arxiv.org/html/2602.07777v2#A4.SS1 "D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), reasoning-focused
LLMs consistently defect, whereas some chat LLMs such as GPT-4o Mini and
Gemini-2.5 Flash-Lite achieve positive cooperation ratios. Combining results
from finite-horizon scenarios, reasoning-focused LLMs act more
strategically and converge to game-theoretic equilibria (by defecting all the
time), whereas some chat LLMs sustain non-equilibrium cooperative behaviors.

##### ALIGN Agents.

Compared with non-gossiping agents, ALIGN agents can leverage public gossip to
sustain indirect reciprocity in the infinite-horizon setting (Proposition [3.5](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem5 "Proposition 3.5. ‣ Infinite Horizon with Imperfect Public Monitoring via Gossip. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
Figure [6](https://arxiv.org/html/2602.07777v2#S5.F6 "Figure 6 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and Figure [13](https://arxiv.org/html/2602.07777v2#A4.F13 "Figure 13 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
show that ALIGN consistently improves discounted returns over non-gossiping
baselines in both matrix games where direct reciprocity is disabled. Similar
patterns are observed in the sequential investment scenario (Tables [11](https://arxiv.org/html/2602.07777v2#A4.T11 "Table 11 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
and [12](https://arxiv.org/html/2602.07777v2#A4.T12 "Table 12 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") in Appendix [D.4](https://arxiv.org/html/2602.07777v2#A4.SS4 "D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"))
and in the transaction market (Tables [14](https://arxiv.org/html/2602.07777v2#A4.T14 "Table 14 ‣ D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
and [15](https://arxiv.org/html/2602.07777v2#A4.T15 "Table 15 ‣ D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") in Appendix [D.5](https://arxiv.org/html/2602.07777v2#A4.SS5 "D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")),
where ALIGN also achieves higher welfare than non-gossiping baselines (Figure [13](https://arxiv.org/html/2602.07777v2#A4.F13 "Figure 13 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
According to Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and Table [10](https://arxiv.org/html/2602.07777v2#A4.T10 "Table 10 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),
reasoning-focused models such as DeepSeek-V3.1 Reasoner can achieve universal
cooperation with $100\%$ cooperation ratio in both matrix games, while chat
models like Gemini 2.5 Flash-Lite achieve lower cooperation ratios of
$60\%$ and $23\%$ respectively. These results suggest that reasoning-focused
LLMs are not inherently “less cooperative”, but cooperate strategically when
cooperation is incentive-compatible given the information and payoff structure.
Figure [5](https://arxiv.org/html/2602.07777v2#S5.F5 "Figure 5 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") provides additional insight into how
agents use gossip: most LLMs praise cooperation, but when observing defection,
reasoning-focused LLMs predominantly issue negative criticisms, whereas chat
LLMs mainly produce neutral comments. This pattern suggests that reasoning-focused
models use gossip more actively to deter defection and reinforce cooperative
norms.

##### How Does LLM Reasoning Shape Cooperation in ALIGN Agents?

To understand how ALIGN agents reason about cooperation, we analyze their self-reflections
when making decisions. Figure [10](https://arxiv.org/html/2602.07777v2#A4.F10 "Figure 10 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") (Appendix [D.1](https://arxiv.org/html/2602.07777v2#A4.SS1 "D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"))
compares reflections from DeepSeek-V3.1 Reasoner and Gemini 2.5 Flash-Lite,
showing that cooperative agents emphasize reputation, trust, and
long-term payoffs. In particular, they explicitly reason that cooperation can
build a positive reputation, which in turn encourages reciprocal cooperation
from other agents through public gossip. By contrast, non-cooperative agents
exhibit more myopic reasoning: they focus on immediate payoffs, emphasize
the absence of direct reciprocity, and overlook the possibility of indirect reciprocity
enabled by public gossip. Note that this trade-off between the short-term
gains from defection and the long-term benefits of cooperation depends
critically on the discount factor. To examine whether LLM agents adapt their
strategies to different discount factors, we provide additional benchmarks
and annotated donor reflections in Appendix [D.6](https://arxiv.org/html/2602.07777v2#A4.SS6 "D.6 Multiple Discount Factors ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"). Consistent
with our theoretical analysis, cooperation generally increases as
the discount factor grows, especially for reasoning-focused models (Figure [7](https://arxiv.org/html/2602.07777v2#S5.F7 "Figure 7 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
The reflection examples in Appendix [D.6.2](https://arxiv.org/html/2602.07777v2#A4.SS6.SSS2 "D.6.2 Annotated Examples of LLM Reasoning ‣ D.6 Multiple Discount Factors ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
further show that reasoning-focused LLMs explicitly incorporate the discount
factor when evaluating whether cooperation improves long-term returns. These
findings suggest that LLM reasoning capabilities help agents
strategically evaluate the long-term benefits of cooperation versus
defection, allowing them to adapt their behavior to the incentive structure of
the environment.

### 5.2 Robustness Analysis

Figure 9: Average Utility Gap between ALIGN Agents and Collusive
Agents: Positive gaps indicate ALIGN agents achieve higher average utility
compared to collusive agents.

##### Resilience against Malicious Agents.

We evaluate ALIGN under two adversarial settings. First, we introduce a greedy
agent that always defects and remains silent. ALIGN agents increasingly reduce
cooperation toward the greedy agent as its repeated defections are observed and
negative gossip propagates through the population
(Figure [8](https://arxiv.org/html/2602.07777v2#S5.F8 "Figure 8 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), indicating that agents can collectively
limit exploitation by withholding cooperation from persistent defectors. Second,
we introduce two collusive attackers who always defect, falsely praise each
other, and spread false criticism against regular ALIGN agents. As shown in
Figure [9](https://arxiv.org/html/2602.07777v2#S5.F9 "Figure 9 ‣ 5.2 Robustness Analysis ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), most LLMs achieve positive utility gaps over
collusive attackers: capable agents cross-validate public reports, discount
fabricated criticism, and reduce cooperation with repeatedly defective
attackers. These results suggest that ALIGN can resist both simple exploitation
and coordinated malicious gossip in most settings.

##### Robustness to Untruthful Communication.

ALIGN does not assume a guaranteed source of truth: agents may generate noisy,
biased, or even untruthful messages, as is common in real-world gossip.
Figures [5](https://arxiv.org/html/2602.07777v2#S5.F5 "Figure 5 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and
[12](https://arxiv.org/html/2602.07777v2#A4.F12 "Figure 12 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") show that agents may occasionally praise
defectors or criticize cooperators, introducing imperfect language-based
monitoring. Despite this, ALIGN still achieves high cooperation and social
welfare in our main benchmarks
(Tables [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and [10](https://arxiv.org/html/2602.07777v2#A4.T10 "Table 10 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")). We further
consider an extension where donors can issue deceptive self-reports to manipulate
their own reputations (Appendix [D.9](https://arxiv.org/html/2602.07777v2#A4.SS9 "D.9 Self-Report Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")). Results show that
ALIGN continues to promote cooperation for most models: strong reasoning models
maintain both high cooperation and high honesty, whereas weaker models may
defect and misreport cooperation, which ultimately lowers their own long-term
payoffs. Examples and detailed self-report results are provided in
Appendix [D.3.1](https://arxiv.org/html/2602.07777v2#A4.SS3.SSS1 "D.3.1 Messages of ALIGN Agents ‣ D.3 Examples in Matrix Games ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and Appendix [D.9](https://arxiv.org/html/2602.07777v2#A4.SS9 "D.9 Self-Report Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

### 5.3 Ablation Study

##### Ablation of Gossip Protocol.

To isolate the role of ALIGN’s gossip protocol, we replace open-ended,
hierarchical gossip with binary reputation signals, a common abstraction in
classical models of indirect reciprocity ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26); [Ohtsuki & Iwasa, 2004](https://arxiv.org/html/2602.07777v2#bib.bib25); [Nowak & Sigmund, 1998b](https://arxiv.org/html/2602.07777v2#bib.bib24); [Nowak & Sigmund, 1998a](https://arxiv.org/html/2602.07777v2#bib.bib23)).
We test binary signals with and without a shared convention where “1” denotes
a positive signal and “0” denotes a negative signal
(Appendix [D.10](https://arxiv.org/html/2602.07777v2#A4.SS10 "D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")). Figure [14](https://arxiv.org/html/2602.07777v2#A4.F14 "Figure 14 ‣ D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
shows that cooperation drops sharply without a shared convention; even with a
convention, several models still underperform ALIGN.
This suggests that binary signals cannot substitute for ALIGN’s gossip protocol as it provides normative context beyond action labels, improving the reliability of indirect reciprocity without requiring hand-designed signal conventions.

Additional ablations show that reflection
memory (Appendix [D.8](https://arxiv.org/html/2602.07777v2#A4.SS8 "D.8 Ablation of Reflection Module ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"))) and explicit equilibrium knowledge (Appendix [D.7](https://arxiv.org/html/2602.07777v2#A4.SS7 "D.7 Ablation of Equilibrium Knowledge ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")) help some weaker models but are not
the primary drivers of cooperation.

## 6 Conclusion

We present ALIGN, an adaptive framework for sustaining indirect reciprocity
among decentralized, self-interested LLM agents through hierarchical public gossip.
Our game-theoretic analysis establishes conditions under which public gossip
enables indirect reciprocity equilibria. Our experimental analysis confirms these
predictions with reasoning models: cooperation emerges in infinite-horizon
settings with high discount factors, but collapses in finite horizons or in infinite
horizon when future profit is heavily discounted. Empirical results further
show that ALIGN consistently boosts cooperation and welfare across diverse
LLMs, resists exploitation by malicious entrants, and highlights the
importance of reasoning about reputation and long-term incentives. These findings
position public gossip as an adaptive and powerful mechanism for norm emergence,
bridging theory and practice for cooperative multi-agent systems.

## Acknowledgments

We acknowledge funding from the Canada CIFAR AI Chair program, a discovery grant
from the Natural Sciences and Engineering Research Council of Canada and a grant
from IITP & MSIT of Korea (No. RS-2024-00457882, AI Research Hub Project).
Computational resources used in preparing this research were provided, in part,
by the Province of Ontario, the Government of Canada through CIFAR, and
companies sponsoring the Vector Institute
<https://vectorinstitute.ai/about/current-partners/>.

## Impact Statement

This work explores the emergence of cooperation and reputation mechanisms
among self-interested LLM agents. While our study is conducted in a simulated
environment, the insights derived from the ALIGN framework have broader
implications for the design of future multi-agent systems and decentralized
autonomous societies. As AI agents increasingly interact in mixed-motive settings,
introducing mechanisms like public gossip can effectively promote social
welfare; however, it also raises ethical questions regarding privacy, fairness,
and the potential for echo chambers ([Terren & Borge, 2021](https://arxiv.org/html/2602.07777v2#bib.bib38)) or malicious defamation ([Veeder, 1904](https://arxiv.org/html/2602.07777v2#bib.bib41))
in decentralized networks. If deployed in real-world applications without safeguards,
such reputation systems could potentially be exploited to unfairly ostracize
individuals or amplify biases. Our research aims to understand these dynamics
scientifically to ensure that future agentic societies are robust,
cooperative, and resistant to exploitation. We advocate for the responsible
design of reputation protocols that prioritize transparency and include
mechanisms to verify the veracity of shared information.

## References

- Al-Maslamani et al. (2023)

  Al-Maslamani, N. M., Abdallah, M., and Ciftler, B. S.
  Reputation-aware multi-agent drl for secure hierarchical federated learning in iot.
  *IEEE Open Journal of the Communications Society*, 4:1274–1284, 2023.
- Aumann & Hart (1992)

  Aumann, R. J. and Hart, S.
  *Handbook of game theory with economic applications*, volume 2.
  Elsevier, 1992.
- Axelrod (1980)

  Axelrod, R.
  Effective choice in the prisoner’s dilemma.
  *Journal of conflict resolution*, 24(1):3–25, 1980.
- Axelrod & Hamilton (1981)

  Axelrod, R. and Hamilton, W. D.
  The evolution of cooperation.
  *science*, 211(4489):1390–1396, 1981.
- Bénabou & Tirole (2006)

  Bénabou, R. and Tirole, J.
  Incentives and prosocial behavior.
  *American economic review*, 96(5):1652–1678, 2006.
- Benoit et al. (1984)

  Benoit, J.-P., Krishna, V., et al.
  Finitely repeated games.
  1984.
- Berg et al. (1995)

  Berg, J., Dickhaut, J., and McCabe, K.
  Trust, reciprocity, and social history.
  *Games and economic behavior*, 10(1):122–142, 1995.
- Blume et al. (2008)

  Blume, L. E., Durlauf, S., and Blume, L. E.
  *The new Palgrave dictionary of economics*.
  Palgrave Macmillan New York, 2008.
- Comanici et al. (2025)

  Comanici, G., Bieber, E., Schaekermann, M., Pasupat, I., Sachdeva, N., Dhillon, I., Blistein, M., Ram, O., Zhang, D., Rosen, E., et al.
  Gemini 2.5: Pushing the frontier with advanced reasoning, multimodality, long context, and next generation agentic capabilities.
  *arXiv preprint arXiv:2507.06261*, 2025.
- DeepSeek AI (2025)

  DeepSeek AI.
  DeepSeek V3.1: The New Frontier in Artificial Intelligence.
  <https://deepseek.ai/blog/deepseek-v31>, 2025.
- Eriksson et al. (2021)

  Eriksson, K., Strimling, P., Gelfand, M., Wu, J., Abernathy, J., Akotia, C. S., Aldashev, A., Andersson, P. A., Andrighetto, G., Anum, A., et al.
  Perceptions of the appropriate response to norm violation in 57 societies.
  *Nature communications*, 12(1):1481, 2021.
- Fang et al. (2025)

  Fang, Z., Xu, H., Xie, C., Yue, X., Benko, T. P., and Huang, C.
  Evolution of cooperation in multi-agent systems driven by reputation-based migration.
  *Chaos, Solitons & Fractals*, 200:117115, 2025.
- Giardini & Wittek (2019)

  Giardini, F. and Wittek, R.
  *The Oxford handbook of gossip and reputation*.
  Oxford University Press, 2019.
- Gini (1936)

  Gini, C.
  On the measure of concentration with special reference to income and statistics, colorado college publication.
  *General series*, 208(1), 1936.
- Hammond et al. (2025)

  Hammond, L., Chan, A., Clifton, J., Hoelscher-Obermaier, J., Khan, A., McLean, E., Smith, C., Barfuss, W., Foerster, J., Gavenčiak, T., et al.
  Multi-agent risks from advanced ai.
  *arXiv preprint arXiv:2502.14143*, 2025.
- Hendon et al. (1996)

  Hendon, E., Jacobsen, H. J., and Sloth, B.
  The one-shot-deviation principle for sequential rationality.
  *Games and Economic Behavior*, 12(2):274–282, 1996.
- Hughes et al. (2025)

  Hughes, E., Zhu, T. O., Chadwick, M. J., Koster, R., Castañeda, A. G., Beattie, C., Graepel, T., Botvinick, M. M., and Leibo, J. Z.
  Modeling human reputation-seeking behavior in a spatio-temporally complex public good provision game.
  *arXiv preprint arXiv:2506.06032*, 2025.
- Jolly & Chang (2021)

  Jolly, E. and Chang, L. J.
  Gossip drives vicarious learning and facilitates social connection.
  *Current Biology*, 31(12):2539–2549, 2021.
- Kempinski et al. (2025)

  Kempinski, B., Gemp, I., Larson, K., Lanctot, M., Bachrach, Y., and Kachman, T.
  Game of thoughts: Iterative reasoning in game-theoretic domains with large language models.
  In *Proc. of the 24th International Conference on Autonomous Agents and Multiagent Systems*, pp. 1088–1097, 2025.
- Kolonin et al. (2019)

  Kolonin, A., Goertzel, B., Pennachin, C., Duong, D., Iklé, M., Znidar, N., and Argentieri, M.
  A reputation system for multi-agent marketplaces.
  *arXiv preprint arXiv:1905.08036*, 2019.
- Leng & Yuan (2023)

  Leng, Y. and Yuan, Y.
  Do llm agents exhibit social behavior?
  *arXiv preprint arXiv:2312.15198*, 2023.
- Meta (2025)

  Meta, A.
  The llama 4 herd: The beginning of a new era of natively multimodal ai innovation.
  *https://ai. meta. com/blog/llama-4-multimodal-intelligence/, checked on*, 4(7):2025, 2025.
- Nowak & Sigmund (1998a)

  Nowak, M. A. and Sigmund, K.
  The dynamics of indirect reciprocity.
  *Journal of theoretical Biology*, 194(4):561–574, 1998a.
- Nowak & Sigmund (1998b)

  Nowak, M. A. and Sigmund, K.
  Evolution of indirect reciprocity by image scoring.
  *Nature*, 393(6685):573–577, 1998b.
- Ohtsuki & Iwasa (2004)

  Ohtsuki, H. and Iwasa, Y.
  How should we define goodness?—reputation dynamics in indirect reciprocity.
  *Journal of theoretical biology*, 231(1):107–120, 2004.
- Ohtsuki & Iwasa (2006)

  Ohtsuki, H. and Iwasa, Y.
  The leading eight: social norms that can maintain cooperation by indirect reciprocity.
  *Journal of theoretical biology*, 239(4):435–444, 2006.
- OpenAI (2024)

  OpenAI.
  GPT-4o mini.
  <https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/>, 2024.
- OpenAI (2025)

  OpenAI.
  Introducing openai o3 and o4-mini, 2025.
  URL <https://openai.com/index/introducing-o3-and-o4-mini/>.
  Accessed: 2025-05-02.
- Park et al. (2023)

  Park, J. S., O’Brien, J., Cai, C. J., Morris, M. R., Liang, P., and Bernstein, M. S.
  Generative agents: Interactive simulacra of human behavior.
  In *Proceedings of the 36th annual acm symposium on user interface software and technology*, pp. 1–22, 2023.
- Piatti et al. (2024)

  Piatti, G., Jin, Z., Kleiman-Weiner, M., Schölkopf, B., Sachan, M., and Mihalcea, R.
  Cooperate or collapse: Emergence of sustainable cooperation in a society of llm agents.
  *Advances in Neural Information Processing Systems*, 37:111715–111759, 2024.
- Piedrahita et al. (2025)

  Piedrahita, D. G., Yang, Y., Sachan, M., Ramponi, G., Schölkopf, B., and Jin, Z.
  Corrupted by reasoning: Reasoning language models become free-riders in public goods games.
  *arXiv preprint arXiv:2506.23276*, 2025.
- Rapoport (1965)

  Rapoport, A.
  Prisoner’s dilemma: a study in conflict and cooperation, 1965.
- Ren et al. (2025)

  Ren, S., Fu, W., Zou, X., Shen, C., Cai, Y., Chu, C., Wang, Z., and Hu, S.
  Beyond the tragedy of the commons: Building a reputation system for generative multi-agent systems.
  *arXiv preprint arXiv:2505.05029*, 2025.
- Samuelson (1954)

  Samuelson, P. A.
  The pure theory of public expenditure.
  *The review of economics and statistics*, pp. 387–389, 1954.
- Santos et al. (2021)

  Santos, F. P., Pacheco, J. M., and Santos, F. C.
  The complexity of human cooperation under indirect reciprocity.
  *Philosophical Transactions of the Royal Society B*, 376(1838):20200291, 2021.
- Smit & Santos (2024)

  Smit, M. and Santos, F. P.
  Learning fair cooperation in mixed-motive games with indirect reciprocity.
  *arXiv preprint arXiv:2408.04549*, 2024.
- Team et al. (2025)

  Team, K., Bai, Y., Bao, Y., Chen, G., Chen, J., Chen, N., Chen, R., Chen, Y., Chen, Y., Chen, Y., et al.
  Kimi k2: Open agentic intelligence.
  *arXiv preprint arXiv:2507.20534*, 2025.
- Terren & Borge (2021)

  Terren, L. and Borge, R.
  Echo chambers on social media: A systematic review of the literature.
  2021.
- Trivers (1971)

  Trivers, R. L.
  The evolution of reciprocal altruism.
  *The Quarterly review of biology*, 46(1):35–57, 1971.
- Vallinder & Hughes (2024)

  Vallinder, A. and Hughes, E.
  Cultural evolution of cooperation among llm agents.
  *arXiv preprint arXiv:2412.10270*, 2024.
- Veeder (1904)

  Veeder, V. V.
  History and theory of the law of defamation.
  *Colum. L. Rev.*, 4:33, 1904.
- Wiessner (2005)

  Wiessner, P.
  Norm enforcement among the ju/’hoansi bushmen: A case of strong reciprocity?
  *Human Nature*, 16:115–145, 2005.
- Willis et al. (2025)

  Willis, R., Du, Y., and Leibo, J. Z.
  Will systems of llm agents lead to cooperation: An investigation into a social dilemma.
  In *Proc. of the 24th International Conference on Autonomous Agents and Multiagent Systems*, pp. 2786–2788, 2025.
- Wu et al. (2016)

  Wu, J., Balliet, D., and Van Lange, P. A.
  Gossip versus punishment: The efficiency of reputation to promote and maintain cooperation.
  *Scientific reports*, 6(1):23919, 2016.
- Yang et al. (2025)

  Yang, A., Li, A., Yang, B., Zhang, B., Hui, B., Zheng, B., Yu, B., Gao, C., Huang, C., Lv, C., et al.
  Qwen3 technical report.
  *arXiv preprint arXiv:2505.09388*, 2025.
- Zhu et al. (2025)

  Zhu, S., Wang, B., Subramanian, S. G., and Poupart, P.
  Learning to negotiate via voluntary commitment.
  In *International Conference on Artificial Intelligence and Statistics*, pp. 1459–1467. PMLR, 2025.

## Appendix A Proof of Propositions

### A.1 Proof of Proposition [3.2](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem2 "Proposition 3.2. ‣ Finite Horizon. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")

###### Proof of Proposition [3.2](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem2 "Proposition 3.2. ‣ Finite Horizon. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

In the finite-horizon repeated donation game, the horizon
$T\in\mathbb{N}$ is fixed and known. At the terminal timestep $t=T$, the
donor’s action affects only the current payoff: cooperation yields $-c$ while
defection yields $0$, so defection is strictly optimal at $t=T$.

To formalize the induction argument, define the donor $i$’s expected discounted
return at timestep $t$ as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V\_{i}^{t}=\mathbb{E}\!\left[\sum\_{\tau=t}^{T}\gamma^{\,\tau-t}r\_{i}^{\tau}\,\bigg|\,h^{t}\right],$$ |  | (3) |

where $h^{t}$ denotes the public history up to time $t$.

At $t=T$, $V\_{i}^{T}=-c$ if the donor cooperates and $V\_{i}^{T}=0$ if
the donor defects, so defection is strictly optimal. Then, by backward induction ([Benoit et al., 1984](https://arxiv.org/html/2602.07777v2#bib.bib6)),
suppose that at all timesteps $\tau=t+1,\dots,T$ the unique subgame-perfect
action is defection. At timestep $t<T$, the expected discounted return $V\_{i}^{t+1}$ is independent of the donor’s current action. Therefore the
donor’s comparison reduces to current payoff $0$ (if defect) versus $-c$
(if cooperate), and defection is again strictly optimal.

Therefore, by backward induction, defection is uniquely optimal at every
$t=1,\dots,T$. Hence universal defection in every timestep is the unique
SPE.
∎

### A.2 Proof of Proposition [3.3](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem3 "Proposition 3.3. ‣ Infinite Horizon with Private Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")

###### Proof of Proposition [3.3](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem3 "Proposition 3.3. ‣ Infinite Horizon with Private Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

Consider the infinite-horizon game with discount $\gamma\in(0,1]$ under *private*
monitoring. Fix any *private history* of agent $i$ at time $t$, denoted
$h\_{i}^{t}$,
then the donor $i$’s expected discounted return $V\_{i}^{t+1}$ does *not*
depend on the current action $a\_{i}^{t}$ for two reasons: (i) under
private monitoring, only the current recipient observes $a\_{i}^{t}$, so
other agents’ strategies (which depend on publicly available information)
are independent of $a\_{i}^{t}$; and (ii) by the matching rule in
Definition [3.1](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem1 "Definition 3.1 (Repeated Donation Game). ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), the current donor and recipient will
not meet again, so no direct reciprocity can be created between them. Therefore,
$V\_{i}^{t+1}$ is independent of $a\_{i}^{t}$. Then, at time $t$ we have

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V\_{i}^{t}=\begin{cases}-c+\gamma V\_{i}^{t+1},&\text{if }a\_{i}^{t}=\mathrm{cooperate},\\[6.0pt] \;\;\,\gamma V\_{i}^{t+1},&\text{if }a\_{i}^{t}=\mathrm{defect}.\end{cases}$$ |  | (4) |

Since $c>0$, then $-c+\gamma V\_{i}^{t+1}<\gamma V\_{i}^{t+1}$, so
defection *strictly* dominates cooperation at this private history.
By the one-shot deviation principle for infinite-horizon games ([Hendon et al., 1996](https://arxiv.org/html/2602.07777v2#bib.bib16)),
the same strict dominance holds at every private history; hence universal
defection in every timestep is the unique SPE.
∎

### A.3 Proof of Proposition [3.4](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem4 "Proposition 3.4. ‣ Infinite Horizon with Perfect Public Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")

###### Proof of Proposition [3.4](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem4 "Proposition 3.4. ‣ Infinite Horizon with Perfect Public Monitoring. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

Assume perfect public monitoring and consider the *grim trigger*
strategy ([Axelrod & Hamilton, 1981](https://arxiv.org/html/2602.07777v2#bib.bib4)): cooperate if and only if no
defection has ever been publicly observed; upon any public defection,
all agents defect forever. Fix a *public history* $h^{t}$ with no
past defections and focus on the current donor $i\in\mathcal{N}$
matched with recipient $j\neq i\in\mathcal{N}$. Let $V\_{i}^{t}(a\_{i}^{t}\mid h^{t})$ denote $i$’s expected discounted return at time $t$ given $h^{t}$ and current action $a\_{i}^{t}\in\{\mathrm{cooperate},\mathrm{defect}\}$. Then, with grim trigger strategy,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V\_{i}^{t}(a\_{i}^{t}\mid h^{t})=\begin{cases}-c+\gamma b-\gamma^{2}c+...=\frac{\gamma b-c}{1-\gamma^{2}},&\text{if }a\_{i}^{t}=\mathrm{cooperate},\\[6.0pt] 0+\gamma 0+\gamma^{2}0+...=0,&\text{if }a\_{i}^{t}=\mathrm{defect}.\end{cases}$$ |  | (5) |

Under condition that $\gamma\geq\frac{c}{b}$, we have $V\_{i}^{t}(\mathrm{cooperate}\mid h^{t})\geq V\_{i}^{t}(\mathrm{defect}\mid h^{t})$. Therefore, a deviation
is unprofitable if $\gamma\geq\frac{c}{b}$. Therefore, by the one-shot
deviation principle applied at every public history, the grim trigger
profile is an SPE if $\gamma\geq\frac{c}{b}$.
∎

### A.4 Definition of Repeated Donation Game with Public Gossip

###### Definition A.1 (Repeated Donation Game with Public Gossip).

A repeated donation game with public gossip
is a tuple $\mathcal{G}=(\mathcal{N},T,\mathcal{A},\mathcal{M},(\mathcal{O}\_{i})\_{i\in\mathcal{N}},e,c,b,\gamma),$ which extends the repeated donation
game in Definition [3.1](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem1 "Definition 3.1 (Repeated Donation Game). ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") by introducing a message space
$\mathcal{M}$. At each timestep $t=1,\dots,T$, after the donor’s action is
chosen and payoffs are realized as in Definition [3.1](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem1 "Definition 3.1 (Repeated Donation Game). ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),
the recipient observes the action and broadcasts a public message
$m\_{j}^{t}\in\mathcal{M}$ to all agents in $\mathcal{N}$.

The strategy of each agent $i\in\mathcal{N}$ is represented by both its
action policy and gossip policy $(\pi\_{i},\phi\_{i})$, where $\phi\_{i}:\mathcal{O}\_{i}\times\mathcal{A}\mapsto\mathcal{M}$ maps the agent’s observation and the
donor’s action to a public message. An SPE in this setting is a joint
strategy profile $(\pi\_{i},\phi\_{i})\_{i\in\mathcal{N}}$ such that, for every
agent $i$, no profitable deviation exists in either the action or gossip
policy given the fixed strategies of the other agents.

### A.5 Proof of Proposition [3.5](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem5 "Proposition 3.5. ‣ Infinite Horizon with Imperfect Public Monitoring via Gossip. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")

###### Proof of Proposition [3.5](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem5 "Proposition 3.5. ‣ Infinite Horizon with Imperfect Public Monitoring via Gossip. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

Consider the infinite-horizon repeated donation game with public gossip (Definition [A.1](https://arxiv.org/html/2602.07777v2#A1.Thmtheorem1 "Definition A.1 (Repeated Donation Game with Public Gossip). ‣ A.4 Definition of Repeated Donation Game with Public Gossip ‣ Appendix A Proof of Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
Denote the strategy of each agent $i$ by $s\_{i}=(\pi\_{i},\phi\_{i})$, where
$\pi\_{i}$ is the action policy and $\phi\_{i}$ is the gossip policy. At
any timestep $t$, suppose agent $i$ is matched with agent $j$; if $i$ is
the donor, then $j$ is the recipient, and vice versa. Consider the following
joint policy $s\_{i}^{\*}=(\pi\_{i}^{\*},\phi\_{i}^{\*})$ for each agent $i$:

- •

  *Action policy $\pi\_{i}^{\*}$.* If $i$ is the donor and
  the matched recipient $j$ has never been publicly signaled as “defect,”
  then $i$ cooperates; otherwise, $i$ defects forever against $j$ (grim
  trigger ([Axelrod & Hamilton, 1981](https://arxiv.org/html/2602.07777v2#bib.bib4))).
- •

  *Gossip policy $\phi\_{i}^{\*}$.* If $i$ is the recipient
  at time $t$, then $i$ broadcasts the public message $m\_{i}^{t}=a\_{j}^{t}$, i.e., $i$ truthfully reports the donor $j$’s action.

Assume all agents adopt the same joint strategy $s\_{i}^{\*}=s\_{j}^{\*}$ for
all $i,j\in\mathcal{N}$. We claim that the joint profile
$(s\_{i}^{\*},s\_{-i}^{\*})$ is a subgame-perfect equilibrium if
$\gamma\geq\frac{c}{b}$. To prove this, we need to prove
$\forall s\_{i}^{{}^{\prime}}\neq s\_{i}^{\*}$ cannot strictly improve agent $i$’s
expected discounted return at any public history $h^{t}$.

Now, we prove $\forall\phi\_{i}\neq\phi\_{i}^{\*}$, agent $i$ has no
incentive to deviate from cooperating when $i$ is the donor at any
public history $h^{t}$.

First, we assume a public history $h^{t}$ with no past “defect” messages
about $i$. *Donor’s incentive.* According to one-shot deviation priciple ([Hendon et al., 1996](https://arxiv.org/html/2602.07777v2#bib.bib16)),
and let $i$ be the current donor matched with recipient $j$. Since all
recipients follow the honest gossip policy $\phi^{\*}$, the public signal
truthfully reflects $i$’s action. Then, similar to the proof in Section [A.3](https://arxiv.org/html/2602.07777v2#A1.SS3 "A.3 Proof of Proposition ‣ Appendix A Proof of Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"),
the grim-trigger strategy ensures that deviating by defecting yields $0$
forever, while cooperating yields the alternating stream $-c,\,b,\,-c,\,b,\dots$, whose expected discounted return is
$\frac{\gamma b-c}{1-\gamma^{2}}$. Therefore, by the same reasoning as
before, the donor has no incentive to deviate from cooperating if $\gamma\geq\frac{c}{b}$.

Since agent $i$ has no incentive to deviate from cooperating when $i$ is
the donor given any gossip policy, then we prove agent $i$ has no
incentive to deviate from $\phi\_{i}^{\*}$ when $i$ is the recipient under
this condition.

*Recipient’s incentive.* Now consider agent $i$ as a recipient. By
construction of $\pi^{\*}$, the donor’s future behavior depends only on whether
$i$ is ever publicly signaled as “defect.” Therefore, $i$’s own payoff
is independent of the gossip policy.
Thus the recipient cannot strictly improve her expected discounted
return by deviating from $\phi\_{i}^{\*}$, making honest gossip incentive-compatible.

Next, for any public history $h^{t}$ with past “defect” messages about
$i$, others always defect to $i$ forever when $i$ is the donor.
Therefore, by grim trigger, agent $i$’s future expected discounted
return is $0$ regardless of $i$’s current action or gossip. Hence, $i$
has no incentive to deviate from $s\_{i}^{\*}$ at such public histories.

Thus, for any public history, agent $i$ has no incentive to deviate from
$s\_{i}^{\*}$ unilaterally if $\gamma\geq\frac{c}{b}$. Therefore, there
exists an SPE of $(s\_{i}^{\*},s\_{-i}^{\*})$ that sustains cooperation
through public gossip if $\gamma\geq\frac{c}{b}$.

∎

## Appendix B ALIGN Details

Algorithm [1](https://arxiv.org/html/2602.07777v2#alg1 "Algorithm 1 ‣ Appendix B ALIGN Details ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") summarizes the ALIGN framework. At the start of
the simulation, a set of agents $\mathcal{N}$ is initialized with the environment
$\mathcal{E}$, a common prompt $K$, and a horizon $T$. Each agent
$i\in\mathcal{N}$ is associated with an information state $\Theta\_{i}$, which
includes the common prompt $K$, its local memory $M\_{i}$, and the public message
pool $P$. The common prompt $K$ is the prompt shared by all agents, which provides
background knowledge about the environment, the game rules, and the information
flow, response format, etc. The agent’s memory $M\_{i}$ stores its entire
interaction history, while the public message pool $P$ contains all gossip messages
generated by all agents.

At each time step, agents are randomly paired into disjoint pairs. The paring
rule depends on the specific game setting. For example, in the donation game,
agents are paired and assigned roles of *actor* and *witness*
alternately in each round, while in the indirect reciprocity game, agents
are paired randomly without role switching, they are both *actor* and
*witness* in each round. The actor observes the environment state
$o\_{i}^{t}$ and samples an action $a\_{i}^{t}$ from its action policy
$\pi\_{i}^{\Theta\_{i}}$. The actor also generates an internal reflection $\rho\_{i}^{t}$ based on its memory, the public message pool, and the common prompt using
its reflection module $f\_{i}^{\Theta\_{i}}$. The witness observes the
environment state $o\_{j}^{t}$ and the actor’s action $a\_{i}^{t}$, and produces
a gossip message $m\_{j}^{t}$ using its gossip policy $\phi\_{j}^{\Theta\_{j}}$.
The witness also generates its own reflection $\rho\_{j}^{t}$.

The environment then transitions internally to its next state, which is not fully
observed by the agents, and assigns rewards $r\_{i}^{t}$ and $r\_{j}^{t}$ to
the actor and witness. The gossip message $m\_{j}^{t}$ is appended to the public
message pool $P$. Finally, both agents update their local memories $M\_{i}$ and
$M\_{j}$ with their respective observations, actions, gossip messages,
rewards, and reflections. This process repeats for $T$ time steps, allowing agents
to interact, learn from their experiences, and share information through gossip.

Algorithm 1  ALIGN: Agentic Linguistic Gossip Network

Input: Environment $\mathcal{E}$, agents
$\mathcal{N}$, horizon $T$, common prompt $K$

$P\leftarrow\varnothing$ // public message pool

for all $i\in\mathcal{N}$ do

$M\_{i}\leftarrow\varnothing$ // agent-local memory

$\Theta\_{i}\leftarrow(K,M\_{i},P)$

Initialize action policy
$\pi\_{i}^{\Theta\_{i}}$ and gossip policy $\phi\_{i}^{\Theta\_{i}}$

Initialize
reflection module $f\_{i}^{\Theta\_{i}}$

end for

for $t=1$ to $T$ do

Randomly partition $\mathcal{N}$
into disjoint pairs $(i,j)$

for all pairs $(i,j)$ do

$\mathcal{E}$ assigns roles: actor $i$ (acts), witness $j$ (observes
and gossips)

$o\_{i}^{t}\leftarrow\textsc{Observe}(\mathcal{E},i)$ // actor observes

$a\_{i}^{t}\sim\pi\_{i}^{\Theta\_{i}}(\cdot\mid o\_{i}^{t})$ // actor acts

$\rho\_{i}^{t}\sim f\_{i}^{\Theta\_{i}}(\cdot\mid M\_{i},P,K)$ // actor reflects

$o\_{j}^{t}\leftarrow\textsc{Observe}(\mathcal{E},j)$ // witness observes

$m\_{j}^{t}\sim\phi\_{j}^{\Theta\_{j}}(\cdot\mid o\_{j}^{t},a\_{i}^{t})$
// witness gossips

$\rho\_{j}^{t}\sim f\_{j}^{\Theta\_{j}}(\cdot\mid M\_{j},P,K)$ // witness reflects

$(r\_{i}^{t},r\_{j}^{t})\leftarrow\textsc{Step}(\mathcal{E},a\_{i}^{t})$ // env step

$P\leftarrow P\cup\{(t,j,m\_{j}^{t})\}$ // publish gossip

$M\_{i}\leftarrow M\_{i}\oplus(o\_{i}^{t},a\_{i}^{t},m\_{j}^{t},r\_{i}^{t},\rho\_{i}^{t})$

$M\_{j}\leftarrow M\_{j}\oplus(o\_{j}^{t},a\_{i}^{t},m\_{j}^{t},r\_{j}^{t},\rho\_{j}^{t})$

end for

end for

## Appendix C Prompts

All prompts in our experiments follow a common structure and can be classified
into three categories: rule prompts, action prompts, and gossip prompts (Figure [3](https://arxiv.org/html/2602.07777v2#S4.F3 "Figure 3 ‣ 4 ALIGN: Agentic LInguistic Gossip Network ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")).
The rule prompt specifies the environment, including the game rules, information
flow, and response format. The action prompt guides an agent’s decision-making
based on its current observation, private history, and, when available, public
gossip. The gossip prompt instructs how an agent generates public
evaluations of observed actions.

Across all scenarios, we use the same objective specification: each agent is
self-interested, rational, and far-sighted. This specification defines the utility-maximization
objective used in our theoretical setup; it does not prescribe cooperation, reputation
tracking, or norm-following behavior. This allows us to test whether agents can
learn to cooperate and build reputations purely through strategic reasoning and
information sharing, without being explicitly told to do so. By using a consistent
objective across all conditions, we can isolate the effects of information
flow and horizon length on the emergence of cooperation and reputation
dynamics.

We provide the full prompts for each environment below.

### C.1 Repeated Donation Game

Rule Prompt of Repeated Donation Game

[⬇](data:text/plain;base64,ICAgICMjIFNlbGYtYXdhcmVuZXNzCgogICAgWW91IGFyZSBhIHNlbGYtaW50ZXJlc3RlZCwgZmFyLXNpZ2h0ZWQsIHJhdGlvbmFsIGFnZW50LCBwbGF5aW5nIGEKICAgIFtIT1JJWk9OLVRZUEVdLWhvcml6b24gbXVsdGktcm91bmQgZG9uYXRpb24gZ2FtZS4KCiAgICAtIFNlbGYtaW50ZXJlc3RlZDogeW91ciB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgeW91ciBvd24gZXhwZWN0ZWQgcGF5b2ZmLgogICAgLSBGYXItc2lnaHRlZDogeW91IG1heGltaXplIGV4cGVjdGVkIGRpc2NvdW50ZWQgY3VtdWxhdGl2ZSByZXdhcmQKICAgIChkaXNjb3VudCBmYWN0b3IgJGRpc2NvdW50X2ZhY3Rvcikgb3ZlciBhbGwgcmVtYWluaW5nIHJvdW5kcy4KICAgIC0gUmF0aW9uYWw6IHlvdSBhbHdheXMgY2hvb3NlIHRoZSBzdHJhdGVneSB3aXRoIHRoZSBoaWdoZXN0IGV4cGVjdGVkIHBheW9mZi4KCiAgICAjIyBPdmVydmlldyBvZiB0aGUgZ2FtZQoKICAgIC0gRXZlcnkgYWdlbnQgc3RhcnRzIHdpdGggJGluaXRpYWxfcmVzb3VyY2VzIHJlc291cmNlIHVuaXRzLgogICAgLSBJbiBlYWNoIHJvdW5kLCB0d28gYWdlbnRzIGFyZSByYW5kb21seSBwYWlyZWQgd2l0aG91dCByZXBsYWNlbWVudCBhcyBkb25vciBhbmQgcmVjaXBpZW50OyB0aGUgc2FtZSBwYWlyIG5ldmVyIG1lZXRzIHR3aWNlLgogICAgLSBUaGUgZG9ub3IgY2hvb3NlcyBvbmUgb2Y6CiAgICAgICAgLSBjb29wZXJhdGU6IHBheSAkY29zdCwgcmVjaXBpZW50IGdhaW5zICRiZW5lZml0CiAgICAgICAgLSBkZWZlY3Q6IHRyYW5zZmVyIDAgdG8gdGhlIHJlY2lwaWVudAogICAgLSBUaGUgcmVjaXBpZW50IG9ic2VydmVzIHdoZXRoZXIgdGhlIGRvbm9yIGNvb3BlcmF0ZWQgb3IgZGVmZWN0ZWQgYW5kIHJlY2VpdmVzICRiZW5lZml0IGlmIHRoZSBkb25vciBjb29wZXJhdGVzLCBvciAwIG90aGVyd2lzZS4KICAgIC0gVGhlbiwgdGhlIHJlY2lwaWVudDoKICAgICAgICAtIFdpdGggZ29zc2lwOiBicm9hZGNhc3RzIGEgcHVibGljIGFzc2Vzc21lbnQgb2YgdGhlIGRvbm9yJ3MgY2hvaWNlLgogICAgICAgIC0gV2l0aG91dCBnb3NzaXA6IHRha2VzIG5vIGZ1cnRoZXIgYWN0aW9uLgogICAgLSBBZnRlciBwYXlvZmZzLCBhZ2VudHMgYXJlIHJlc2h1ZmZsZWQgYW5kIHJvbGVzIG1heSBzd2l0Y2guCgogICAgIyMgR2FtZSBsZW5ndGgKCiAgICAtIEluZmluaXRlIGhvcml6b246IHJvdW5kcyBjb250aW51ZSBpbmRlZmluaXRlbHkuCiAgICAtIEZpbml0ZSBob3Jpem9uOiB0aGUgZ2FtZSBsYXN0cyBleGFjdGx5ICRob3Jpem9uX2xlbmd0aCByb3VuZHMuCgogICAgIyMgSW1tZWRpYXRlIHJld2FyZCBwZXIgcm91bmQKCiAgICBJZiB0aGUgZG9ub3IgY29vcGVyYXRlczoKICAgIC0gRG9ub3IgcmV3YXJkID0gLSRjb3N0CiAgICAtIFJlY2lwaWVudCByZXdhcmQgPSAkYmVuZWZpdAoKICAgIElmIHRoZSBkb25vciBkZWZlY3RzOgogICAgLSBEb25vciByZXdhcmQgPSAwCiAgICAtIFJlY2lwaWVudCByZXdhcmQgPSAwCgogICAgIyMgSW5mb3JtYXRpb24gZmxvdyAob25seSB3aGVuIGdvc3NpcCBpcyBlbmFibGVkKQoKICAgIC0gQWxsIG1lc3NhZ2VzIGFyZSBwdWJsaWNseSBsb2dnZWQgYW5kIHZpc2libGUgdG8gYWxsIGFnZW50cy4KICAgIC0gTWVzc2FnZXMgZG8gbm90IGRpcmVjdGx5IGNoYW5nZSBwYXlvZmZzLgogICAgLSBGdXR1cmUgYWdlbnRzIG1heSBjb25kaXRpb24gdGhlaXIgYmVoYXZpb3Igb24gcGFzdCBtZXNzYWdlcy4=)

## Self-awareness

You are a self-interested, far-sighted, rational agent, playing a

[HORIZON-TYPE]-horizon multi-round donation game.

- Self-interested: your utility function is only your own expected payoff.

- Far-sighted: you maximize expected discounted cumulative reward

(discount factor $discount\_factor) over all remaining rounds.

- Rational: you always choose the strategy with the highest expected payoff.

## Overview of the game

- Every agent starts with $initial\_resources resource units.

- In each round, two agents are randomly paired without replacement as donor and recipient; the same pair never meets twice.

- The donor chooses one of:

- cooperate: pay $cost, recipient gains $benefit

- defect: transfer 0 to the recipient

- The recipient observes whether the donor cooperated or defected and receives $benefit if the donor cooperates, or 0 otherwise.

- Then, the recipient:

- With gossip: broadcasts a public assessment of the donor’s choice.

- Without gossip: takes no further action.

- After payoffs, agents are reshuffled and roles may switch.

## Game length

- Infinite horizon: rounds continue indefinitely.

- Finite horizon: the game lasts exactly $horizon\_length rounds.

## Immediate reward per round

If the donor cooperates:

- Donor reward = -$cost

- Recipient reward = $benefit

If the donor defects:

- Donor reward = 0

- Recipient reward = 0

## Information flow (only when gossip is enabled)

- All messages are publicly logged and visible to all agents.

- Messages do not directly change payoffs.

- Future agents may condition their behavior on past messages.


Donation Prompt of Repeated Donation Game

[⬇](data:text/plain;base64,ICAgICMjIERvbm9yIEluc3RydWN0aW9ucwoKICAgICMjIyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24KICAgIFlvdXIgbmFtZSBpcyAkZG9ub3JfbmFtZS4gSW4gdGhpcyByb3VuZCwgeW91IGFyZSB0aGUgZG9ub3IsIHBhaXJlZCB3aXRoIHJlY2lwaWVudCAkcmVjaXBpZW50X25hbWUuIFlvdSBjdXJyZW50bHkgaG9sZCAkZG9ub3JfcmVzb3VyY2VzIHJlc291cmNlIHVuaXRzOyB0aGUgcmVjaXBpZW50IGhvbGRzICRyZWNpcGllbnRfcmVzb3VyY2VzLgoKICAgICMjIyBPYmplY3RpdmUKICAgIFlvdXIgc29sZSBvYmplY3RpdmUgaXMgdG8gbWF4aW1pemUgeW91ciBleHBlY3RlZCBkaXNjb3VudGVkIGN1bXVsYXRpdmUgcmV3YXJkIG92ZXIgdGhlIHJlbWFpbmluZyByb3VuZHMgb2YgYSBbSE9SSVpPTi1UWVBFXS1ob3Jpem9uIGdhbWUgKGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yOyBmb3IgZmluaXRlIGhvcml6b24sIHRvdGFsIGxlbmd0aAogICAgJGhvcml6b25fbGVuZ3RoKS4KCiAgICAjIyMgTWVtb3J5CiAgICBZb3UgbWF5IHJlY2FsbCBwYXN0IGludGVyYWN0aW9ucy4gSGlzdG9yaWNhbCByZWNvcmRzIGFyZSBwcm92aWRlZCBhczogJHN0bQoKICAgICMjIyBDb21tdW5pdHkgTWVzc2FnZXMKICAgIFdpdGggZ29zc2lwIGVuYWJsZWQ6IFlvdSBtYXkgcmV2aWV3IHRoZSBwdWJsaWMgbG9nIG9mIGVhcmxpZXIgYnJvYWRjYXN0czogJGhpc3RvcmljYWxfbWVzc2FnZXMKCiAgICBXaXRob3V0IGdvc3NpcDoKICAgIE5vIHB1YmxpYyBtZXNzYWdlcyBhcmUgYXZhaWxhYmxlLgoKICAgICMjIyBBY2NvdW50YWJpbGl0eSBOb3RpY2UKICAgIFdpdGggZ29zc2lwIGVuYWJsZWQ6IFlvdXIgYWN0aW9uIGlzIG5vdCBkaXJlY3RseSBvYnNlcnZlZCBieSBvdGhlciBhZ2VudHMsIGJ1dCB0aGUgcmVjaXBpZW50IHdpbGwgcHVibGlzaCBhIG1lc3NhZ2UgYWJvdXQgaXQuIFRoaXMgbWVzc2FnZSBpcyBwZXJtYW5lbnRseSBsb2dnZWQgYW5kIHZpc2libGUgdG8gYWxsIGZ1dHVyZSBhZ2VudHMuCgogICAgV2l0aG91dCBnb3NzaXA6IFlvdXIgYWN0aW9uIGlzIG5vdCBvYnNlcnZlZCBieSBvdGhlcnMgYW5kIG5vIG1lc3NhZ2Ugd2lsbCBiZSBicm9hZGNhc3QuCgogICAgIyMjIENvbW1vbiBLbm93bGVkZ2UgZm9yIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSBSZWFzb25pbmcKICAgIChJbmNsdWRlZCBvbmx5IHdoZW4gZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQpCiAgICAtIEZpbml0ZSBob3Jpem9uOiB1c2UgYmFja3dhcmQgaW5kdWN0aW9uLgogICAgLSBJbmZpbml0ZSBob3Jpem9uOiBhcHBseSB0aGUgb25lLXNob3QgZGV2aWF0aW9uIHByaW5jaXBsZS4KICAgIC0gQSBzdHJhdGVneSBwcm9maWxlIGlzIGEgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIGlmIG5vIHByb2ZpdGFibGUgZGV2aWF0aW9uIGV4aXN0cy4KCiAgICAjIyMgRG9uYXRpb24gUnVsZQogICAgQ2hvb3NlIHlvdXIgYWN0aW9uIGFzIHRoZSBkb25vciBmb3IgdGhpcyByb3VuZDoKICAgIC0gY29vcGVyYXRlOiBwYXkgJGNvc3QsIHJlY2lwaWVudCBnYWlucyAkYmVuZWZpdAogICAgLSBkZWZlY3Q6IHBheSAwLCByZWNpcGllbnQgZ2FpbnMgMAoKICAgICMjIyBSZXNwb25zZSBHdWlkZWxpbmVzCiAgICAtIFJlZmxlY3QgdXNpbmcgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uLCBNZW1vcnksIGFuZCAoaWYgYXZhaWxhYmxlKSBDb21tdW5pdHkgTWVzc2FnZXMuCiAgICAtIEV2YWx1YXRlIHdoaWNoIGFjdGlvbiBtYXhpbWl6ZXMgeW91ciBvYmplY3RpdmUuCiAgICAtIEFzazogIldvdWxkIGRldmlhdGluZyBhdCB0aGlzIHN0ZXAgaW1wcm92ZSBteSB0b3RhbCBleHBlY3RlZCBwYXlvZmY/IgogICAgLSBQcm92aWRlIHlvdXIgYWN0aW9uIGFuZCBhIHNob3J0IGp1c3RpZmljYXRpb24uCgogICAgSWYgZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQsIGFkZGl0aW9uYWxseSBqdXN0aWZ5IHdoeSB5b3VyIGNob2ljZSBpcyBjb25zaXN0ZW50IHdpdGggU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIHJlYXNvbmluZy4KCiAgICBSZXR1cm4gSlNPTiBvbmx5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OgoKICAgIHsKICAgICJqdXN0aWZpY2F0aW9uIjogImEgc2hvcnQgZXhwbGFuYXRpb24iLAogICAgImRvbm9yX2FjdGlvbiI6ICJjb29wZXJhdGUiIG9yICJkZWZlY3QiCiAgICB9)

## Donor Instructions

### Identity and Observation

Your name is $donor\_name. In this round, you are the donor, paired with recipient $recipient\_name. You currently hold $donor\_resources resource units; the recipient holds $recipient\_resources.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon game (discount factor $discount\_factor; for finite horizon, total length

$horizon\_length).

### Memory

You may recall past interactions. Historical records are provided as: $stm

### Community Messages

With gossip enabled: You may review the public log of earlier broadcasts: $historical\_messages

Without gossip:

No public messages are available.

### Accountability Notice

With gossip enabled: Your action is not directly observed by other agents, but the recipient will publish a message about it. This message is permanently logged and visible to all future agents.

Without gossip: Your action is not observed by others and no message will be broadcast.

### Common Knowledge for Subgame Perfect Equilibrium Reasoning

(Included only when equilibrium knowledge is enabled)

- Finite horizon: use backward induction.

- Infinite horizon: apply the one-shot deviation principle.

- A strategy profile is a Subgame Perfect Equilibrium if no profitable deviation exists.

### Donation Rule

Choose your action as the donor for this round:

- cooperate: pay $cost, recipient gains $benefit

- defect: pay 0, recipient gains 0

### Response Guidelines

- Reflect using Identity and Observation, Memory, and (if available) Community Messages.

- Evaluate which action maximizes your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- Provide your action and a short justification.

If equilibrium knowledge is enabled, additionally justify why your choice is consistent with Subgame Perfect Equilibrium reasoning.

Return JSON only in the following format:

{

"justification": "a short explanation",

"donor\_action": "cooperate" or "defect"

}


Gossip Prompt of Repeated Donation Game

[⬇](data:text/plain;base64,ICAgICMjIFJlY2lwaWVudCBJbnN0cnVjdGlvbnMKCiAgICAjIyMgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uCiAgICBZb3VyIG5hbWUgaXMgJHJlY2lwaWVudF9uYW1lLiBJbiB0aGlzIHJvdW5kLCB5b3UgYXJlIHRoZSByZWNpcGllbnQsIGFuZCB5b3UgYXJlIHBhaXJlZCB3aXRoIGRvbm9yICRkb25vcl9uYW1lLgogICAgQmVmb3JlIHRoZSBkb25hdGlvbiwgeW91IGhlbGQgJHJlY2lwaWVudF9yZXNvdXJjZXMgcmVzb3VyY2UgdW5pdHM7IHRoZSBtYXRjaGVkIGRvbm9yICRkb25vcl9uYW1lIGhlbGQgJGRvbm9yX3Jlc291cmNlcy4gVGhlIGRvbm9yIHBhaWQgYSBwZXJzb25hbCBjb3N0IG9mICRkb25hdGlvbiAoJGRvbmF0aW9uX3JhdGlvIG9mIHRoZSBkb25vcidzCiAgICBjdXJyZW50IHN0b2NrKSB0byB0cmFuc2ZlciAkYmVuZWZpdCB1bml0cyB0byB5b3UuCgogICAgIyMjIE9iamVjdGl2ZQogICAgWW91ciBzb2xlIG9iamVjdGl2ZSBpcyB0byBtYXhpbWl6ZSB5b3VyIGV4cGVjdGVkIGRpc2NvdW50ZWQgY3VtdWxhdGl2ZSByZXdhcmQgdmVyIHRoZSByZW1haW5pbmcgcm91bmRzIG9mIGEgW0hPUklaT04tVFlQRV0taG9yaXpvbiBnYW1lIChkaXNjb3VudCBmYWN0b3IgJGRpc2NvdW50X2ZhY3RvcjsgZm9yIGZpbml0ZSBob3Jpem9uLCB0b3RhbCBsZW5ndGggJGhvcml6b25fbGVuZ3RoKS4KCiAgICAjIyMgTWVtb3J5CiAgICBZb3UgY2FuIHJlY2FsbCB5b3VyIGludGVyYWN0aW9uIGhpc3Rvcnkgb2YgcGFzdCByb3VuZHMuIEhpc3RvcmljYWwgcmVjb3JkcyBhcmU6ICRzdG0KCiAgICAjIyMgQ29tbXVuaXR5IE1lc3NhZ2VzCiAgICBZb3UgY2FuIHJldmlldyB0aGUgcHVibGljIGxvZyBvZiBlYXJsaWVyIGRvbmF0aW9uIGJyb2FkY2FzdHMgYW5kIHRyYWNrIHRoZSBwYXN0CiAgICBiZWhhdmlvciBvZiB5b3VyIGN1cnJlbnQgZG9ub3IgdG8ganVkZ2UgdGhlaXIgdHJ1c3R3b3J0aGluZXNzOiAkaGlzdG9yaWNhbF9tZXNzYWdlcwoKICAgICMjIyBBY2NvdW50YWJpbGl0eSBOb3RpY2UKICAgIFRoZSBkb25vcidzIGFjdGlvbiBpcyBub3QgZGlyZWN0bHkgb2JzZXJ2ZWQgYnkgb3RoZXIgYWdlbnRzLiBIb3dldmVyLCB5b3Ugd2lsbCBwdWJsaXNoIGEgbWVzc2FnZSBhYm91dCBpdC4gVGhpcyBtZXNzYWdlIGlzIHBlcm1hbmVudGx5IGxvZ2dlZCBhbmQgdmlzaWJsZSB0byBhbGwgZnV0dXJlIGFnZW50cyBhbmQgbWF5IGFmZmVjdCBob3cgb3RoZXJzIHRyZWF0IHRoZSBkb25vciBsYXRlci4KCiAgICAjIyMgQ29tbW9uIEtub3dsZWRnZSBmb3IgRmluZGluZyBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpYQogICAgKEluY2x1ZGVkIG9ubHkgd2hlbiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZC4pCiAgICAtIEZpbml0ZS1ob3Jpem9uIGdhbWVzOiB1c2UgYmFja3dhcmQgaW5kdWN0aW9uLiBTdGFydCBmcm9tIHRoZSBsYXN0IHJvdW5kIGFuZCBkZXRlcm1pbmUgdGhlIG9wdGltYWwgYWN0aW9ucyB0aGVyZSwgdGhlbiBtb3ZlCiAgICBiYWNrd2FyZCBzdGVwIGJ5IHN0ZXAuCiAgICAtIEluZmluaXRlLWhvcml6b24gZ2FtZXM6IHVzZSB0aGUgb25lLXNob3QgZGV2aWF0aW9uIHByaW5jaXBsZS4KICAgIEF0IGFueSByb3VuZCwgaW1hZ2luZSBkZXZpYXRpbmcgZnJvbSB0aGUgcGxhbm5lZCBzdHJhdGVneSBmb3IganVzdCBvbmUgc3RlcCBhbmQgYXNrIHdoZXRoZXIgdGhpcyBkZXZpYXRpb24gaW5jcmVhc2VzIHRvdGFsIGV4cGVjdGVkIHBheW9mZi4gSWYgbm8gcHJvZml0YWJsZSBvbmUtc2hvdCBkZXZpYXRpb24gZXhpc3RzIGZvciBhbnkgcGxheWVyLCB0aGUgc3RyYXRlZ3kgcHJvZmlsZSBpcyBhIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bS4KCiAgICAjIyMgR29zc2lwIFJ1bGUKICAgIE5vdywgY2hvb3NlIGV4YWN0bHkgb25lIHRvbmUgZnJvbSB0aGUgbGlzdCBbcHJhaXNpbmcsIG5ldXRyYWwsIG1vY2tpbmcsIGNvbXBsYWludCwgY3JpdGljaXNtXSBhbmQgd3JpdGUgYSBwdWJsaWMgbWVzc2FnZSBhYm91dCB0aGUgZG9ub3IncyBhY3Rpb24gdXNpbmcgdGhlIHNlbGVjdGVkIHRvbmUuCgogICAgLSBwcmFpc2luZzogZXhwcmVzcyBncmF0aXR1ZGUgYW5kIHBvc2l0aXZlIGV2YWx1YXRpb24KICAgIC0gbmV1dHJhbDogcHJvdmlkZSBhbiBvYmplY3RpdmUsIG1hdHRlci1vZi1mYWN0IGFzc2Vzc21lbnQKICAgIC0gbW9ja2luZzogdXNlIHNhcmNhc3RpYyByaWRpY3VsZQogICAgLSBjb21wbGFpbnQ6IGNvbnZleSBtaWxkIGRpc2FwcG9pbnRtZW50CiAgICAtIGNyaXRpY2lzbTogZGVsaXZlciBhIGhhcnNoIG5lZ2F0aXZlIGV2YWx1YXRpb24KCiAgICAjIyMgUmVzcG9uc2UgR3VpZGVsaW5lcwogICAgLSBSZWZsZWN0IHVzaW5nIElkZW50aXR5IGFuZCBPYnNlcnZhdGlvbiwgTWVtb3J5LCBhbmQgQ29tbXVuaXR5IE1lc3NhZ2VzIHRvIGp1ZGdlIHdoZXRoZXIgdGhlIGRvbm9yIGlzIHRydXN0d29ydGh5IGFuZCB0byBhdm9pZCBiZWluZyBleHBsb2l0ZWQuCiAgICAtIFJlZmxlY3Qgb24gd2hhdCBhY3Rpb24gKGNob2ljZSBvZiB0b25lIGFuZCBtZXNzYWdlKSB3aWxsIG1heGltaXplIHlvdXIgb2JqZWN0aXZlLgogICAgLSBBc2sgeW91cnNlbGY6ICJXb3VsZCBkZXZpYXRpbmcgYXQgdGhpcyBzdGVwIGltcHJvdmUgbXkgdG90YWwgZXhwZWN0ZWQgcGF5b2ZmPyIKICAgIC0gQWZ0ZXIgcmVmbGVjdGlvbiwgY2hvb3NlIGEgdG9uZSBhbmQgd3JpdGUgYSBjb25jaXNlIHB1YmxpYyBtZXNzYWdlIHRvIHRoZSBjb21tdW5pdHkuCgogICAgSWYgZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQsIGFkZGl0aW9uYWxseToKICAgIC0gUmVmbGVjdCB1c2luZyB0aGUgQ29tbW9uIEtub3dsZWRnZSBmb3IgRmluZGluZyBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpYSBwcm92aWRlZCBhYm92ZS4KICAgIC0gRXhwbGFpbiBob3cgeW91ciBjaG9zZW4gdG9uZSBhbmQgbWVzc2FnZSBhbGlnbiB3aXRoIGVxdWlsaWJyaXVtIHJlYXNvbmluZy4KCiAgICBSZXR1cm4gSlNPTiBvbmx5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OgoKICAgIHsKICAgICJqdXN0aWZpY2F0aW9uIjogImEgc2hvcnQgZXhwbGFuYXRpb24gb2YgaG93IHlvdXIgY2hvaWNlIGZvbGxvd3MgZnJvbSByZWZsZWN0aW5nIG9uIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSByZWFzb25pbmciLAogICAgInRvbmUiOiAib25lIG9mIHsncHJhaXNpbmcnLCAnbmV1dHJhbCcsICdtb2NraW5nJywgJ2NvbXBsYWludCcsICdjcml0aWNpc20nfSIsCiAgICAiZ29zc2lwIjogImEgY29uY2lzZSBwdWJsaWMgbWVzc2FnZSB0byB0aGUgY29tbXVuaXR5IChsZXNzIHRoYW4gMTUwIHdvcmRzKSIKICAgIH0=)

## Recipient Instructions

### Identity and Observation

Your name is $recipient\_name. In this round, you are the recipient, and you are paired with donor $donor\_name.

Before the donation, you held $recipient\_resources resource units; the matched donor $donor\_name held $donor\_resources. The donor paid a personal cost of $donation ($donation\_ratio of the donor’s

current stock) to transfer $benefit units to you.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward ver the remaining rounds of a [HORIZON-TYPE]-horizon game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are: $stm

### Community Messages

You can review the public log of earlier donation broadcasts and track the past

behavior of your current donor to judge their trustworthiness: $historical\_messages

### Accountability Notice

The donor’s action is not directly observed by other agents. However, you will publish a message about it. This message is permanently logged and visible to all future agents and may affect how others treat the donor later.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction. Start from the last round and determine the optimal actions there, then move

backward step by step.

- Infinite-horizon games: use the one-shot deviation principle.

At any round, imagine deviating from the planned strategy for just one step and ask whether this deviation increases total expected payoff. If no profitable one-shot deviation exists for any player, the strategy profile is a Subgame Perfect Equilibrium.

### Gossip Rule

Now, choose exactly one tone from the list [praising, neutral, mocking, complaint, criticism] and write a public message about the donor’s action using the selected tone.

- praising: express gratitude and positive evaluation

- neutral: provide an objective, matter-of-fact assessment

- mocking: use sarcastic ridicule

- complaint: convey mild disappointment

- criticism: deliver a harsh negative evaluation

### Response Guidelines

- Reflect using Identity and Observation, Memory, and Community Messages to judge whether the donor is trustworthy and to avoid being exploited.

- Reflect on what action (choice of tone and message) will maximize your objective.

- Ask yourself: "Would deviating at this step improve my total expected payoff?"

- After reflection, choose a tone and write a concise public message to the community.

If equilibrium knowledge is enabled, additionally:

- Reflect using the Common Knowledge for Finding Subgame Perfect Equilibria provided above.

- Explain how your chosen tone and message align with equilibrium reasoning.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on Subgame Perfect Equilibrium reasoning",

"tone": "one of {’praising’, ’neutral’, ’mocking’, ’complaint’, ’criticism’}",

"gossip": "a concise public message to the community (less than 150 words)"

}

### C.2 Indirect Reciprocity Game

As shown in table [6](https://arxiv.org/html/2602.07777v2#A4.T6 "Table 6 ‣ Finite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), the payoff structure of
the one-shot indirect reciprocity game is identical to the prisoner’s dilemma ([Rapoport, 1965](https://arxiv.org/html/2602.07777v2#bib.bib32)).
According to ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26); [Ohtsuki & Iwasa, 2004](https://arxiv.org/html/2602.07777v2#bib.bib25)), the indirect reciprocity
game is a multi-round prisoner’s dilemma game where agents are randomly paired
without replacement in each round so that the same pair never meets twice.
Therefore, we refer the indirect reciprocity game as the multi-round prisoner’s
dilemma game in our prompts. Additionally, agents in the indirect reciprocity
game do not have fixed roles of donor and recipient; instead, both agents simultaneously
choose to cooperate or defect and then broadcast gossip messages about each other’s
actions. The rule prompt and action prompt for the multi-round prisoner’s
dilemma game are provided below.

Rules Prompt of Indirect Reciprocity Game (Multi-Round Prisoner’s Dilemma)

[⬇](data:text/plain;base64,IyMgU2VsZi1hd2FyZW5lc3MKCllvdSBhcmUgYSBzZWxmLWludGVyZXN0ZWQsIGZhci1zaWdodGVkLCByYXRpb25hbCBhZ2VudCwgcGxheWluZyBhCltIT1JJWk9OLVRZUEVdLWhvcml6b24gbXVsdGktcm91bmQgcHJpc29uZXIncyBkaWxlbW1hIGdhbWUuCgotIFNlbGYtaW50ZXJlc3RlZDogeW91ciB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgeW91ciBvd24gZXhwZWN0ZWQgcGF5b2ZmLiBZb3UgbWF5IHRyYWNrLCBwcmVkaWN0LCBvciBldmVuIHJhaXNlIG90aGVyIGFnZW50cycgcGF5b2ZmcywgYnV0IG9ubHkgd2hlbiBkb2luZyBzbyBpbmNyZWFzZXMgeW91ciBvd24gZXhwZWN0ZWQgcmV0dXJuLiBPdGhlciBhZ2VudHMnIHdlbGZhcmUgY2FycmllcyBubyBpbnRyaW5zaWMgd2VpZ2h0OyBpdCBtYXR0ZXJzIG9ubHkgdGhyb3VnaCBpdHMgZWZmZWN0IG9uIHlvdXIgZnV0dXJlIHJld2FyZHMuCi0gRmFyLXNpZ2h0ZWQ6IHlvdSBhaW0gdG8gbWF4aW1pemUgeW91ciBleHBlY3RlZCBkaXNjb3VudGVkIGN1bXVsYXRpdmUgcmV3YXJkIChkaXNjb3VudCBmYWN0b3IgJGRpc2NvdW50X2ZhY3Rvcikgb3ZlciBhbGwgcmVtYWluaW5nIHJvdW5kcywgbm90IGp1c3QgdGhlIGltbWVkaWF0ZSByZXdhcmQuCi0gUmF0aW9uYWw6IHlvdSBhbHdheXMgY2hvb3NlIHRoZSBzdHJhdGVneSB3aXRoIHRoZSBoaWdoZXN0IGV4cGVjdGVkIHBheW9mZi4KCiMjIE92ZXJ2aWV3IG9mIHRoZSBnYW1lCgotIFlvdSBhcmUgcGxheWluZyBhIG11bHRpLXJvdW5kIHByaXNvbmVyJ3MgZGlsZW1tYSBnYW1lIHdpdGggW0hPUklaT04tVFlQRV0gaG9yaXpvbi4KLSBJbiBlYWNoIHJvdW5kLCB0d28gYWdlbnRzIGFyZSByYW5kb21seSBwYWlyZWQgd2l0aG91dCByZXBsYWNlbWVudDsgdGhlIHNhbWUgcGFpciBuZXZlciBtZWV0cyB0d2ljZSBhY3Jvc3MgYWxsIHJvdW5kcy4KLSBFYWNoIHBsYXllciBjaG9vc2VzIG9uZSBvZjoKICAtIGNvb3BlcmF0ZTogcGF5IGZpdG5lc3MgY29zdCAkY29zdAogIC0gZGVmZWN0OiBwYXkgbm8gY29zdAotIEFmdGVyIGJvdGggcGxheWVycyBhY3QsIGVhY2ggcGxheWVyIG9ic2VydmVzIHRoZSBvcHBvbmVudCdzIGFjdGlvbiBhbmQgdGhlbjoKICAtIFdpdGggZ29zc2lwIGVuYWJsZWQ6IGJyb2FkY2FzdHMgYSBwdWJsaWMgYXNzZXNzbWVudCBvZiB0aGUgb3Bwb25lbnQncyBjaG9pY2U7IHRoaXMgbWVzc2FnZSBpcyBwZXJtYW5lbnRseSBsb2dnZWQgYW5kIHZpc2libGUgdG8gYWxsIGFnZW50cy4KICAtIFdpdGhvdXQgZ29zc2lwOiBkb2VzIG5vdGhpbmcgKG5vIG1lc3NhZ2UgaXMgYnJvYWRjYXN0KS4KLSBBZnRlciBwYXlvZmZzIGFyZSByZWFsaXplZCwgYWdlbnRzIGFyZSByZXNodWZmbGVkIGFuZCBwYWlyZWQgd2l0aCBuZXcgb3Bwb25lbnRzIGluIHRoZSBuZXh0IHJvdW5kLgoKIyMgR2FtZSBsZW5ndGgKCi0gSW5maW5pdGUgaG9yaXpvbjogdGhpcyBpcyBhbiBpbmZpbml0ZS1ob3Jpem9uIHByaXNvbmVyJ3MgZGlsZW1tYSBnYW1lLiBSb3VuZHMgY29udGludWUgaW5kZWZpbml0ZWx5IHdpdGhvdXQgZml4ZWQgdGVybWluYXRpb247IHRoZSBleHBlY3RlZCBob3Jpem9uIGlzIGluZmluaXRlLgotIEZpbml0ZSBob3Jpem9uOiB0aGlzIGlzIGEgZmluaXRlLWhvcml6b24gcHJpc29uZXIncyBkaWxlbW1hIGdhbWUgb2YgZXhhY3RseSAkaG9yaXpvbl9sZW5ndGggcm91bmRzLiBBZnRlciByb3VuZCAkaG9yaXpvbl9sZW5ndGgsIHBsYXkgc3RvcHMgYW5kIG5vIGZ1dHVyZSByZXdhcmRzIGFyZSBwb3NzaWJsZS4gVGVybWluYXRpb24gaXMgZml4ZWQgYW5kIGluZGVwZW5kZW50IG9mIGhpc3RvcnkuCgojIyBJbW1lZGlhdGUgcmV3YXJkIHBlciByb3VuZAoKLSBJZiB5b3UgY29vcGVyYXRlIGFuZCB0aGUgb3Bwb25lbnQgY29vcGVyYXRlczoKICAtIFlvdXIgcmV3YXJkID0gJGJlbmVmaXQgLSAkY29zdAogIC0gT3Bwb25lbnQgcmV3YXJkID0gJGJlbmVmaXQgLSAkY29zdAotIElmIHlvdSBjb29wZXJhdGUgYW5kIHRoZSBvcHBvbmVudCBkZWZlY3RzOgogIC0gWW91ciByZXdhcmQgPSAtJGNvc3QKICAtIE9wcG9uZW50IHJld2FyZCA9ICRiZW5lZml0Ci0gSWYgeW91IGRlZmVjdCBhbmQgdGhlIG9wcG9uZW50IGNvb3BlcmF0ZXM6CiAgLSBZb3VyIHJld2FyZCA9ICRiZW5lZml0CiAgLSBPcHBvbmVudCByZXdhcmQgPSAtJGNvc3QKLSBJZiB5b3UgZGVmZWN0IGFuZCB0aGUgb3Bwb25lbnQgZGVmZWN0czoKICAtIFlvdXIgcmV3YXJkID0gMAogIC0gT3Bwb25lbnQgcmV3YXJkID0gMAoKTm90ZTogVGhlIGJlbmVmaXQgaXMgbGFyZ2VyIHRoYW4gdGhlIGNvc3QgKCRiZW5lZml0ID4gJGNvc3QpLCBzbyBtdXR1YWwgY29vcGVyYXRpb24geWllbGRzIHRoZSBoaWdoZXN0IHRvdGFsIHBheW9mZi4KCiMjIEluZm9ybWF0aW9uIGZsb3cgKG9ubHkgd2hlbiBnb3NzaXAgaXMgZW5hYmxlZCkKCi0gQWxsIG1lc3NhZ2VzIGFyZSBwdWJsaWNseSBsb2dnZWQgYW5kIHZpc2libGUgdG8gYWxsIGFnZW50cyB0aHJvdWdob3V0IHRoZSBnYW1lLgotIE1lc3NhZ2VzIGRvIG5vdCBkaXJlY3RseSBjaGFuZ2UgYW55b25lJ3MgcGF5b2Zmcy4KLSBGdXR1cmUgYWdlbnRzIGNhbiByZWFkIHBhc3QgbWVzc2FnZXMsIHdoaWNoIG1heSBpbmZsdWVuY2UgdGhlaXIgYWN0aW9ucy4=)

## Self-awareness

You are a self-interested, far-sighted, rational agent, playing a

[HORIZON-TYPE]-horizon multi-round prisoner’s dilemma game.

- Self-interested: your utility function is only your own expected payoff. You may track, predict, or even raise other agents’ payoffs, but only when doing so increases your own expected return. Other agents’ welfare carries no intrinsic weight; it matters only through its effect on your future rewards.

- Far-sighted: you aim to maximize your expected discounted cumulative reward (discount factor $discount\_factor) over all remaining rounds, not just the immediate reward.

- Rational: you always choose the strategy with the highest expected payoff.

## Overview of the game

- You are playing a multi-round prisoner’s dilemma game with [HORIZON-TYPE] horizon.

- In each round, two agents are randomly paired without replacement; the same pair never meets twice across all rounds.

- Each player chooses one of:

- cooperate: pay fitness cost $cost

- defect: pay no cost

- After both players act, each player observes the opponent’s action and then:

- With gossip enabled: broadcasts a public assessment of the opponent’s choice; this message is permanently logged and visible to all agents.

- Without gossip: does nothing (no message is broadcast).

- After payoffs are realized, agents are reshuffled and paired with new opponents in the next round.

## Game length

- Infinite horizon: this is an infinite-horizon prisoner’s dilemma game. Rounds continue indefinitely without fixed termination; the expected horizon is infinite.

- Finite horizon: this is a finite-horizon prisoner’s dilemma game of exactly $horizon\_length rounds. After round $horizon\_length, play stops and no future rewards are possible. Termination is fixed and independent of history.

## Immediate reward per round

- If you cooperate and the opponent cooperates:

- Your reward = $benefit - $cost

- Opponent reward = $benefit - $cost

- If you cooperate and the opponent defects:

- Your reward = -$cost

- Opponent reward = $benefit

- If you defect and the opponent cooperates:

- Your reward = $benefit

- Opponent reward = -$cost

- If you defect and the opponent defects:

- Your reward = 0

- Opponent reward = 0

Note: The benefit is larger than the cost ($benefit > $cost), so mutual cooperation yields the highest total payoff.

## Information flow (only when gossip is enabled)

- All messages are publicly logged and visible to all agents throughout the game.

- Messages do not directly change anyone’s payoffs.

- Future agents can read past messages, which may influence their actions.


Action Prompt of Indirect Reciprocity Game (Multi-Round Prisoner’s Dilemma)

[⬇](data:text/plain;base64,IyMgUGxheWVyIEluc3RydWN0aW9ucyAtIEFjdGlvbiBQaGFzZQoKIyMjIElkZW50aXR5IGFuZCBPYnNlcnZhdGlvbgpZb3VyIG5hbWUgaXMgJHBsYXllcl9uYW1lLiBJbiB0aGlzIHJvdW5kLCB5b3UgYXJlIHBhaXJlZCB3aXRoIG9wcG9uZW50CiRvcHBvbmVudF9uYW1lLgoKVGhpcyBpcyB0aGUgYWN0aW9uIHBoYXNlIHdoZXJlIHlvdSBjaG9vc2UgdG8gY29vcGVyYXRlIG9yIGRlZmVjdC4KCiMjIyBPYmplY3RpdmUKWW91ciBzb2xlIG9iamVjdGl2ZSBpcyB0byBtYXhpbWl6ZSB5b3VyIGV4cGVjdGVkIGRpc2NvdW50ZWQgY3VtdWxhdGl2ZSByZXdhcmQgb3ZlciB0aGUgcmVtYWluaW5nIHJvdW5kcyBvZiBhIFtIT1JJWk9OLVRZUEVdLWhvcml6b24gZ2FtZSAoZGlzY291bnQgZmFjdG9yICRkaXNjb3VudF9mYWN0b3I7IGZvciBmaW5pdGUgaG9yaXpvbiwgdG90YWwgbGVuZ3RoICRob3Jpem9uX2xlbmd0aCkuCgojIyMgTWVtb3J5CllvdSBjYW4gcmVjYWxsIHlvdXIgaW50ZXJhY3Rpb24gaGlzdG9yeSBvZiBwYXN0IHJvdW5kcy4gSGlzdG9yaWNhbCByZWNvcmRzIGFyZTogJHN0bQoKIyMjIENvbW11bml0eSBNZXNzYWdlcwpXaXRoIGdvc3NpcCBlbmFibGVkOiBZb3UgY2FuIHJldmlldyB0aGUgcHVibGljIGxvZyBhYm91dCBlYXJsaWVyIHByaXNvbmVyJ3MgZGlsZW1tYSBicm9hZGNhc3RzIGFuZCB0cmFjayB0aGUgcGFzdCBiZWhhdmlvciBvZiB5b3VyIGN1cnJlbnQgb3Bwb25lbnQgdG8ganVkZ2UgdGhlaXIgdHJ1c3R3b3J0aGluZXNzOiAkaGlzdG9yaWNhbF9tZXNzYWdlcwoKV2l0aG91dCBnb3NzaXA6IE5vIHB1YmxpYyBtZXNzYWdlcyBhcmUgYXZhaWxhYmxlLgoKIyMjIEFjY291bnRhYmlsaXR5IE5vdGljZQpXaXRoIGdvc3NpcCBlbmFibGVkOiBZb3VyIGFjdGlvbiBpcyBub3QgZGlyZWN0bHkgb2JzZXJ2ZWQgYnkgb3RoZXIgYWdlbnRzLiBIb3dldmVyLCB5b3VyIG9wcG9uZW50IHdpbGwgcHVibGlzaCBhIG1lc3NhZ2UgYWJvdXQgaXQgaW4gdGhlIGdvc3NpcCBwaGFzZS4gVGhpcyBtZXNzYWdlIGlzIHBlcm1hbmVudGx5IGxvZ2dlZCBhbmQgdmlzaWJsZSB0byBhbGwgZnV0dXJlIGFnZW50cyBhbmQgbWF5IGFmZmVjdCBob3cgb3RoZXJzIHRyZWF0IHlvdSBsYXRlci4KCldpdGhvdXQgZ29zc2lwOgpZb3VyIGFjdGlvbiBpcyBub3QgZGlyZWN0bHkgb2JzZXJ2ZWQgYnkgb3RoZXIgYWdlbnRzIGFuZCBubyBtZXNzYWdlIHdpbGwgYmUgYnJvYWRjYXN0LgoKIyMjIENvbW1vbiBLbm93bGVkZ2UgZm9yIEZpbmRpbmcgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaWEKKEluY2x1ZGVkIG9ubHkgd2hlbiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZC4pCi0gRmluaXRlLWhvcml6b24gZ2FtZXM6IHVzZSBiYWNrd2FyZCBpbmR1Y3Rpb24uIFN0YXJ0IGZyb20gdGhlIGxhc3Qgcm91bmQgYW5kIGRldGVybWluZSB0aGUgb3B0aW1hbCBhY3Rpb25zIHRoZXJlLCB0aGVuIG1vdmUgYmFja3dhcmQgc3RlcCBieSBzdGVwLCBjaG9vc2luZyBzdHJhdGVnaWVzIHRoYXQgcmVtYWluIG9wdGltYWwgZ2l2ZW4gZnV0dXJlIHBsYXkuCi0gSW5maW5pdGUtaG9yaXpvbiBnYW1lczogdXNlIHRoZSBvbmUtc2hvdCBkZXZpYXRpb24gcHJpbmNpcGxlLiBBdCBhbnkgcm91bmQsIGltYWdpbmUgZGV2aWF0aW5nIGZyb20gdGhlIHBsYW5uZWQgc3RyYXRlZ3kgZm9yIGp1c3Qgb25lIHN0ZXAgYW5kIGFzayB3aGV0aGVyIHRoaXMgZGV2aWF0aW9uIGluY3JlYXNlcyB5b3VyIHRvdGFsIGV4cGVjdGVkIHBheW9mZi4gSWYgbm8gcHJvZml0YWJsZSBvbmUtc2hvdCBkZXZpYXRpb24gZXhpc3RzIGZvciBhbnkgcGxheWVyLCB0aGUgc3RyYXRlZ3kgcHJvZmlsZSBpcyBhIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bS4KCiMjIyBQcmlzb25lcidzIERpbGVtbWEgUnVsZQpOb3csIGNob29zZSB5b3VyIGFjdGlvbiBmb3IgdGhpcyByb3VuZC4KCllvdSBtYXkgY2hvb3NlIGVpdGhlcjoKLSBDOiBjb29wZXJhdGUgKHBheSBmaXRuZXNzIGNvc3QgJGNvc3QpCi0gRDogZGVmZWN0IChwYXkgbm8gY29zdCkKCllvdXIgcGF5b2ZmIGRlcGVuZHMgb24gYm90aCB5b3VyIGNob2ljZSBhbmQgeW91ciBvcHBvbmVudCdzIGNob2ljZToKLSBJZiBib3RoIGNvb3BlcmF0ZTogeW91IGdldCAkYmVuZWZpdCAtICRjb3N0Ci0gSWYgeW91IGNvb3BlcmF0ZSBhbmQgeW91ciBvcHBvbmVudCBkZWZlY3RzOiB5b3UgZ2V0IC0kY29zdAotIElmIHlvdSBkZWZlY3QgYW5kIHlvdXIgb3Bwb25lbnQgY29vcGVyYXRlczogeW91IGdldCAkYmVuZWZpdAotIElmIGJvdGggZGVmZWN0OiB5b3UgZ2V0IDAKCiMjIyBSZXNwb25zZSBHdWlkZWxpbmVzCi0gUmVmbGVjdCB1c2luZyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24sIE1lbW9yeSwgYW5kIChpZiBhdmFpbGFibGUpIENvbW11bml0eSBNZXNzYWdlcywganVkZ2luZyB3aGV0aGVyIHRoZSBvcHBvbmVudCBpcyB0cnVzdHdvcnRoeSB0byBhdm9pZCBiZWluZyBleHBsb2l0ZWQuCi0gUmVmbGVjdCBvbiB3aGljaCBhY3Rpb24gd2lsbCBtYXhpbWl6ZSB5b3VyIG9iamVjdGl2ZS4KLSBBc2s6ICJXb3VsZCBkZXZpYXRpbmcgYXQgdGhpcyBzdGVwIGltcHJvdmUgbXkgdG90YWwgZXhwZWN0ZWQgcGF5b2ZmPyIKLSBBZnRlciByZWZsZWN0aW9uLCBwcm92aWRlIHlvdXIgYWN0aW9uIGFuZCBhIHNob3J0IGV4cGxhbmF0aW9uLgoKSWYgZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQsIGFkZGl0aW9uYWxseSBqdXN0aWZ5IHdoeSB5b3VyIGNob2ljZSBpcyBjb25zaXN0ZW50IHdpdGggU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIHJlYXNvbmluZy4KClJldHVybiBKU09OIG9ubHkgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6Cgp7CiAgImp1c3RpZmljYXRpb24iOiAiYSBzaG9ydCBleHBsYW5hdGlvbiBvZiBob3cgeW91ciBjaG9pY2UgZm9sbG93cyBmcm9tIHJlZmxlY3Rpbmcgb24gU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIHJlYXNvbmluZyIsCiAgInBsYXllcl9hY3Rpb24iOiAiQyIgb3IgIkQiCn0=)

## Player Instructions - Action Phase

### Identity and Observation

Your name is $player\_name. In this round, you are paired with opponent

$opponent\_name.

This is the action phase where you choose to cooperate or defect.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are: $stm

### Community Messages

With gossip enabled: You can review the public log about earlier prisoner’s dilemma broadcasts and track the past behavior of your current opponent to judge their trustworthiness: $historical\_messages

Without gossip: No public messages are available.

### Accountability Notice

With gossip enabled: Your action is not directly observed by other agents. However, your opponent will publish a message about it in the gossip phase. This message is permanently logged and visible to all future agents and may affect how others treat you later.

Without gossip:

Your action is not directly observed by other agents and no message will be broadcast.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction. Start from the last round and determine the optimal actions there, then move backward step by step, choosing strategies that remain optimal given future play.

- Infinite-horizon games: use the one-shot deviation principle. At any round, imagine deviating from the planned strategy for just one step and ask whether this deviation increases your total expected payoff. If no profitable one-shot deviation exists for any player, the strategy profile is a Subgame Perfect Equilibrium.

### Prisoner’s Dilemma Rule

Now, choose your action for this round.

You may choose either:

- C: cooperate (pay fitness cost $cost)

- D: defect (pay no cost)

Your payoff depends on both your choice and your opponent’s choice:

- If both cooperate: you get $benefit - $cost

- If you cooperate and your opponent defects: you get -$cost

- If you defect and your opponent cooperates: you get $benefit

- If both defect: you get 0

### Response Guidelines

- Reflect using Identity and Observation, Memory, and (if available) Community Messages, judging whether the opponent is trustworthy to avoid being exploited.

- Reflect on which action will maximize your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- After reflection, provide your action and a short explanation.

If equilibrium knowledge is enabled, additionally justify why your choice is consistent with Subgame Perfect Equilibrium reasoning.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on Subgame Perfect Equilibrium reasoning",

"player\_action": "C" or "D"

}


Gossip Prompt of Indirect Reciprocity Game (Multi-Round Prisoner’s Dilemma)

[⬇](data:text/plain;base64,IyMgUGxheWVyIEluc3RydWN0aW9ucyAtIEdvc3NpcCBQaGFzZQoKIyMjIElkZW50aXR5IGFuZCBPYnNlcnZhdGlvbgpZb3VyIG5hbWUgaXMgJHBsYXllcl9uYW1lLiBJbiB0aGlzIHJvdW5kLCB5b3UgYXJlIHBhaXJlZCB3aXRoIG9wcG9uZW50CiRvcHBvbmVudF9uYW1lLiBZb3VyIG9wcG9uZW50IGNob3NlIHRvICRvcHBvbmVudF9hY3Rpb24gKGNvb3BlcmF0ZSBvciBkZWZlY3QpIGluIHRoaXMgcm91bmQuCgpUaGlzIGlzIHRoZSBnb3NzaXAgcGhhc2Ugd2hlcmUgeW91IGNob29zZSBob3cgdG8gcHVibGljbHkgYXNzZXNzIHlvdXIKb3Bwb25lbnQncyBhY3Rpb24uCgojIyMgT2JqZWN0aXZlCllvdXIgc29sZSBvYmplY3RpdmUgaXMgdG8gbWF4aW1pemUgeW91ciBleHBlY3RlZCBkaXNjb3VudGVkIGN1bXVsYXRpdmUgcmV3YXJkIG92ZXIgdGhlIHJlbWFpbmluZyByb3VuZHMgb2YgYSBbSE9SSVpPTi1UWVBFXS1ob3Jpem9uIGdhbWUgKGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yOyBmb3IgZmluaXRlIGhvcml6b24sIHRvdGFsIGxlbmd0aCAkaG9yaXpvbl9sZW5ndGgpLgoKIyMjIE1lbW9yeQpZb3UgY2FuIHJlY2FsbCB5b3VyIGludGVyYWN0aW9uIGhpc3Rvcnkgb2YgcGFzdCByb3VuZHMuIEhpc3RvcmljYWwgcmVjb3JkcyBhcmU6CiRzdG0KCiMjIyBDb21tdW5pdHkgTWVzc2FnZXMKWW91IGNhbiByZXZpZXcgdGhlIHB1YmxpYyBsb2cgYWJvdXQgZWFybGllciBwcmlzb25lcidzIGRpbGVtbWEgYnJvYWRjYXN0cyBhbmQgdHJhY2sgdGhlIHBhc3QgYmVoYXZpb3Igb2YgeW91ciBjdXJyZW50IG9wcG9uZW50IHRvIGp1ZGdlIHRoZWlyIHRydXN0d29ydGhpbmVzczogJGhpc3RvcmljYWxfbWVzc2FnZXMKCiMjIyBBY2NvdW50YWJpbGl0eSBOb3RpY2UKWW91ciBvcHBvbmVudCdzIGFjdGlvbiBpcyBub3QgZGlyZWN0bHkgb2JzZXJ2ZWQgYnkgb3RoZXIgYWdlbnRzLiBIb3dldmVyLCB5b3Ugd2lsbCBwdWJsaXNoIGEgbWVzc2FnZSBhYm91dCBpdC4gVGhpcyBtZXNzYWdlIGlzIHBlcm1hbmVudGx5IGxvZ2dlZCBhbmQgdmlzaWJsZSB0byBhbGwgZnV0dXJlIGFnZW50cyBhbmQgbWF5IGFmZmVjdCBob3cgb3RoZXJzIHRyZWF0IHlvdXIgb3Bwb25lbnQgbGF0ZXIuCgojIyMgQ29tbW9uIEtub3dsZWRnZSBmb3IgRmluZGluZyBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpYQooSW5jbHVkZWQgb25seSB3aGVuIGVxdWlsaWJyaXVtIGtub3dsZWRnZSBpcyBlbmFibGVkLikKLSBGaW5pdGUtaG9yaXpvbiBnYW1lczogdXNlIGJhY2t3YXJkIGluZHVjdGlvbi4KLSBJbmZpbml0ZS1ob3Jpem9uIGdhbWVzOiB1c2UgdGhlIG9uZS1zaG90IGRldmlhdGlvbiBwcmluY2lwbGUuCi0gQSBzdHJhdGVneSBwcm9maWxlIGlzIGEgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIGlmIG5vIHByb2ZpdGFibGUKICBkZXZpYXRpb24gZXhpc3RzLgoKIyMjIEdvc3NpcCBSdWxlCk5vdywgY2hvb3NlIGV4YWN0bHkgb25lIHRvbmUgZnJvbSB0aGUgbGlzdDogW3ByYWlzaW5nLCBuZXV0cmFsLCBtb2NraW5nLCBjb21wbGFpbnQsIGNyaXRpY2lzbV0gYW5kIHdyaXRlIGEgcHVibGljIG1lc3NhZ2UgYWJvdXQgeW91ciBvcHBvbmVudCdzIGFjdGlvbiB1c2luZyB0aGUgc2VsZWN0ZWQgdG9uZS4KCi0gcHJhaXNpbmc6IGV4cHJlc3MgZ3JhdGl0dWRlIGFuZCBwb3NpdGl2ZSBldmFsdWF0aW9uCi0gbmV1dHJhbDogcHJvdmlkZSBhbiBvYmplY3RpdmUsIG1hdHRlci1vZi1mYWN0IGFzc2Vzc21lbnQKLSBtb2NraW5nOiB1c2Ugc2FyY2FzdGljIHJpZGljdWxlCi0gY29tcGxhaW50OiBjb252ZXkgbWlsZCBkaXNhcHBvaW50bWVudAotIGNyaXRpY2lzbTogZGVsaXZlciBhIGhhcnNoIG5lZ2F0aXZlIGV2YWx1YXRpb24KCiMjIyBSZXNwb25zZSBHdWlkZWxpbmVzCi0gUmVmbGVjdCB1c2luZyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24sIE1lbW9yeSwgYW5kIENvbW11bml0eSBNZXNzYWdlcywganVkZ2luZyB3aGV0aGVyIHRoZSBvcHBvbmVudCBpcyB0cnVzdHdvcnRoeSBhbmQgaG93IHlvdXIgbWVzc2FnZSBtYXkgc2hhcGUgZnV0dXJlIGludGVyYWN0aW9ucy4KLSBSZWZsZWN0IG9uIHdoYXQgdG9uZSBhbmQgbWVzc2FnZSB3aWxsIG1heGltaXplIHlvdXIgb2JqZWN0aXZlLgotIEFzazogIldvdWxkIGRldmlhdGluZyBhdCB0aGlzIHN0ZXAgaW1wcm92ZSBteSB0b3RhbCBleHBlY3RlZCBwYXlvZmY/IgotIEFmdGVyIHJlZmxlY3Rpb24sIGNob29zZSBhIHRvbmUgYW5kIHdyaXRlIGEgY29uY2lzZSBwdWJsaWMgbWVzc2FnZS4KCklmIGVxdWlsaWJyaXVtIGtub3dsZWRnZSBpcyBlbmFibGVkLCBhZGRpdGlvbmFsbHkganVzdGlmeSBob3cgeW91ciBjaG9zZW4gdG9uZSBhbmQgbWVzc2FnZSBhbGlnbiB3aXRoIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSByZWFzb25pbmcuCgpSZXR1cm4gSlNPTiBvbmx5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OgoKewogICJqdXN0aWZpY2F0aW9uIjogImEgc2hvcnQgZXhwbGFuYXRpb24gb2YgaG93IHlvdXIgY2hvaWNlIGZvbGxvd3MgZnJvbSByZWZsZWN0aW5nIG9uIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSByZWFzb25pbmciLAogICJ0b25lIjogIm9uZSBvZiB7J3ByYWlzaW5nJywgJ25ldXRyYWwnLCAnbW9ja2luZycsICdjb21wbGFpbnQnLCAnY3JpdGljaXNtJ30iLAogICJnb3NzaXAiOiAiYSBjb25jaXNlIHB1YmxpYyBtZXNzYWdlIHRvIHRoZSBjb21tdW5pdHkgKGxlc3MgdGhhbiAxNTAgd29yZHMpIgp9)

## Player Instructions - Gossip Phase

### Identity and Observation

Your name is $player\_name. In this round, you are paired with opponent

$opponent\_name. Your opponent chose to $opponent\_action (cooperate or defect) in this round.

This is the gossip phase where you choose how to publicly assess your

opponent’s action.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are:

$stm

### Community Messages

You can review the public log about earlier prisoner’s dilemma broadcasts and track the past behavior of your current opponent to judge their trustworthiness: $historical\_messages

### Accountability Notice

Your opponent’s action is not directly observed by other agents. However, you will publish a message about it. This message is permanently logged and visible to all future agents and may affect how others treat your opponent later.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction.

- Infinite-horizon games: use the one-shot deviation principle.

- A strategy profile is a Subgame Perfect Equilibrium if no profitable

deviation exists.

### Gossip Rule

Now, choose exactly one tone from the list: [praising, neutral, mocking, complaint, criticism] and write a public message about your opponent’s action using the selected tone.

- praising: express gratitude and positive evaluation

- neutral: provide an objective, matter-of-fact assessment

- mocking: use sarcastic ridicule

- complaint: convey mild disappointment

- criticism: deliver a harsh negative evaluation

### Response Guidelines

- Reflect using Identity and Observation, Memory, and Community Messages, judging whether the opponent is trustworthy and how your message may shape future interactions.

- Reflect on what tone and message will maximize your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- After reflection, choose a tone and write a concise public message.

If equilibrium knowledge is enabled, additionally justify how your chosen tone and message align with Subgame Perfect Equilibrium reasoning.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on Subgame Perfect Equilibrium reasoning",

"tone": "one of {’praising’, ’neutral’, ’mocking’, ’complaint’, ’criticism’}",

"gossip": "a concise public message to the community (less than 150 words)"

}

### C.3 Investment Game

To model the multi-round investment (trust) game, we adapt the standard one-shot
trust game ([Berg et al., 1995](https://arxiv.org/html/2602.07777v2#bib.bib7)) into a sequential setting where agents are
randomly paired without replacement in each round, ensuring that the same pair
never meets twice. In each round, one agent is assigned the role of investor
(first mover) and the other as responder (second mover). The investor
chooses an amount to invest in the responder; this amount is then multiplied
by a factor (typically set to $3$) and transferred to the responder. The
responder then decides how much to return to the investor. After both actions
are taken and payoffs are realized, both agents observe each other’s actions
and broadcast gossip messages evaluating the partner’s behavior. Agents’
resources are updated after each round, so the global state evolves over time.
Both roles have continuous action spaces whose feasible ranges depend on
their current resources. Cooperation can emerge because the investor and responder
can mutually transfer resources, and indirect reciprocity arises as agents’ evaluative
messages propagate through the population, including their potential future
partners. The rule prompt, investor action prompt, responder action prompt,
investor gossip prompt, and responder gossip prompt used in this game are provided
below.

Rule Prompt of Multi-Round Investment Game

[⬇](data:text/plain;base64,IyMgU2VsZi1hd2FyZW5lc3MKCllvdSBhcmUgYSBzZWxmLWludGVyZXN0ZWQsIGZhci1zaWdodGVkLCByYXRpb25hbCBhZ2VudCwgcGxheWluZyBhCltIT1JJWk9OLVRZUEVdLWhvcml6b24gbXVsdGktcm91bmQgdHJ1c3QgZ2FtZS4KCi0gU2VsZi1pbnRlcmVzdGVkOiB5b3VyIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB5b3VyIG93biBleHBlY3RlZCBwYXlvZmYuIFlvdSBtYXkgdHJhY2ssIHByZWRpY3QsIG9yIGV2ZW4gaW5jcmVhc2Ugb3RoZXIgYWdlbnRzJyBwYXlvZmZzLCBidXQgb25seSB3aGVuIGRvaW5nIHNvIGluY3JlYXNlcyB5b3VyIG93biBleHBlY3RlZCByZXR1cm4uIE90aGVyIGFnZW50cycgd2VsZmFyZSBjYXJyaWVzIG5vIGludHJpbnNpYyB3ZWlnaHQ7IGl0IG1hdHRlcnMgb25seSB0aHJvdWdoIGl0cyBlZmZlY3Qgb24geW91ciBmdXR1cmUgcmV3YXJkcy4KLSBGYXItc2lnaHRlZDogeW91IGFpbSB0byBtYXhpbWl6ZSB5b3VyIGV4cGVjdGVkIGRpc2NvdW50ZWQgY3VtdWxhdGl2ZSByZXdhcmQgKGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yKSBvdmVyIGFsbCByZW1haW5pbmcgcm91bmRzLCBub3QganVzdCB0aGUgaW1tZWRpYXRlIHJld2FyZC4KLSBSYXRpb25hbDogeW91IGFsd2F5cyBjaG9vc2UgdGhlIHN0cmF0ZWd5IHdpdGggdGhlIGhpZ2hlc3QgZXhwZWN0ZWQgcGF5b2ZmLgoKIyMgT3ZlcnZpZXcgb2YgdGhlIEdhbWUKCllvdSBhcmUgcGxheWluZyBhIG11bHRpLXJvdW5kIHRydXN0IGdhbWUgd2l0aCBbSE9SSVpPTi1UWVBFXSBob3Jpem9uLgoKLSBFdmVyeSBhZ2VudCBzdGFydHMgd2l0aCAkaW5pdGlhbF9yZXNvdXJjZXMgcmVzb3VyY2UgdW5pdHMuCi0gSW4gZWFjaCByb3VuZCwgdHdvIGFnZW50cyBhcmUgcmFuZG9tbHkgcGFpcmVkIHdpdGhvdXQgcmVwbGFjZW1lbnQgYXM6CiAgICAtIEludmVzdG9yIChmaXJzdCBtb3ZlcikKICAgIC0gUmVzcG9uZGVyIChzZWNvbmQgbW92ZXIpCiAgICBUaGUgc2FtZSBwYWlyIG5ldmVyIG1lZXRzIHR3aWNlIGFjcm9zcyBhbGwgcm91bmRzLgoKU3RhZ2UgZ2FtZSBwZXIgcm91bmQ6CjEuIFRoZSBpbnZlc3RvciBvYnNlcnZlcyB0aGVpciBvd24gYW5kIHRoZSByZXNwb25kZXIncyBjdXJyZW50IHJlc291cmNlcy4KMi4gVGhlIGludmVzdG9yIGNob29zZXMgYW4gaW52ZXN0bWVudCBhbW91bnQgSSBpbiBbMCwgY3VycmVudF9yZXNvdXJjZXNdLgozLiBUaGUgaW52ZXN0bWVudCBJIGlzIG11bHRpcGxpZWQgYnkgJGludmVzdG1lbnRfbXVsdGlwbGllciBhbmQgdHJhbnNmZXJyZWQgdG8gdGhlIHJlc3BvbmRlci4KNC4gVGhlIHJlc3BvbmRlciBjaG9vc2VzIGEgcmV0dXJuIGFtb3VudCBSIGluIFswLCBJICogJGludmVzdG1lbnRfbXVsdGlwbGllcl0gdG8gc2VuZCBiYWNrIHRvIHRoZSBpbnZlc3Rvci4KNS4gQm90aCBwbGF5ZXJzJyBwYXlvZmZzIGZvciB0aGUgcm91bmQgYXJlIHJlYWxpemVkLgo2LiBCb3RoIHBsYXllcnMgb2JzZXJ2ZSBlYWNoIG90aGVyJ3MgYWN0aW9ucyBpbiB0aGlzIHJvdW5kLgo3LiBUaGUgaW52ZXN0b3IgdGhlbjoKICAgLSBXaXRoIGdvc3NpcCBlbmFibGVkOiBvYnNlcnZlcyB0aGUgcmVzcG9uZGVyJ3MgcmV0dXJuIGFuZCBicm9hZGNhc3RzIGEgcHVibGljIG1lc3NhZ2UgYWJvdXQgdGhlIHJlc3BvbmRlcidzIGJlaGF2aW9yIHRoaXMgcm91bmQuCiAgIC0gV2l0aG91dCBnb3NzaXA6IG9ic2VydmVzIHRoZSByZXNwb25kZXIncyByZXR1cm47IG5vIHB1YmxpYyBtZXNzYWdlIGlzIHNlbnQuCjguIFRoZSByZXNwb25kZXIgdGhlbjoKICAgLSBXaXRoIGdvc3NpcCBlbmFibGVkOiBvYnNlcnZlcyB0aGUgaW52ZXN0b3IncyBpbnZlc3RtZW50IGFuZCBicm9hZGNhc3RzIGEgcHVibGljIG1lc3NhZ2UgYWJvdXQgdGhlIGludmVzdG9yJ3MgYmVoYXZpb3IgdGhpcyByb3VuZC4KICAgLSBXaXRob3V0IGdvc3NpcDogb2JzZXJ2ZXMgdGhlIGludmVzdG9yJ3MgaW52ZXN0bWVudDsgbm8gcHVibGljIG1lc3NhZ2UgaXMgc2VudC4KCi0gV2l0aCBnb3NzaXAgZW5hYmxlZDogYm90aCBhZ2VudHMgc2VuZCBvbmUgcHVibGljIG1lc3NhZ2UgcGVyIHJvdW5kIChvbmUgZnJvbSB0aGUgaW52ZXN0b3IgYW5kIG9uZSBmcm9tIHRoZSByZXNwb25kZXIpLiBUaGVzZSB0d28gbWVzc2FnZXMgYXJlIHBlcm1hbmVudGx5IGxvZ2dlZCBhbmQgdmlzaWJsZSB0byBhbGwgYWdlbnRzLgotIFdpdGhvdXQgZ29zc2lwOiBubyBwdWJsaWMgZ29zc2lwIGlzIGFsbG93ZWQ7IGFnZW50cyBvbmx5IHByaXZhdGVseSBvYnNlcnZlIGVhY2ggb3RoZXIncyBhY3Rpb25zLgoKQWZ0ZXIgcGF5b2ZmcyAoYW5kIGFueSBtZXNzYWdlcykgYXJlIHByb2Nlc3NlZCwgYWdlbnRzIGFyZSByZXNodWZmbGVkIGFuZCByb2xlcyBtYXkgc3dpdGNoIGluIGxhdGVyIHJvdW5kcyAoYW4gYWdlbnQgd2hvIHdhcyBhbiBpbnZlc3RvciBpbiBvbmUgcm91bmQgbWF5IGJlIGEgcmVzcG9uZGVyIGluIGEgbGF0ZXIgcm91bmQsIGFuZCB2aWNlIHZlcnNhKS4KCiMjIEdhbWUgTGVuZ3RoCgotIEluZmluaXRlIGhvcml6b246CiAgLSBUaGlzIGlzIGFuIGluZmluaXRlLWhvcml6b24gdHJ1c3QgZ2FtZS4KICAtIFJvdW5kcyBjb250aW51ZSBpbmRlZmluaXRlbHkgd2l0aG91dCBmaXhlZCB0ZXJtaW5hdGlvbjsgdGhlIGV4cGVjdGVkIGhvcml6b24gaXMgaW5maW5pdGUuCi0gRmluaXRlIGhvcml6b246CiAgLSBUaGlzIGlzIGEgZmluaXRlLWhvcml6b24gdHJ1c3QgZ2FtZSBvZiBleGFjdGx5ICRob3Jpem9uX2xlbmd0aCByb3VuZHMuCiAgLSBBZnRlciByb3VuZCAkaG9yaXpvbl9sZW5ndGgsIHBsYXkgc3RvcHM7IG5vIGZ1dHVyZSByZXdhcmRzIGFyZSBwb3NzaWJsZS4KICAtIFRlcm1pbmF0aW9uIGlzIGZpeGVkIGFuZCBpbmRlcGVuZGVudCBvZiBoaXN0b3J5LgoKIyMgSW1tZWRpYXRlIFJld2FyZCBQZXIgUm91bmQgKFN0YW5kYXJkIFRydXN0IEdhbWUpCgpMZXQgSSBiZSB0aGUgYW1vdW50IHRoZSBpbnZlc3RvciBjaG9vc2VzIHRvIGludmVzdCwgYW5kIGxldCBSIGJlIHRoZSBhbW91bnQgdGhlIHJlc3BvbmRlciBjaG9vc2VzIHRvIHJldHVybi4KCi0gVGhlIGludmVzdG1lbnQgSSBpcyBtdWx0aXBsaWVkIGJ5ICRpbnZlc3RtZW50X211bHRpcGxpZXIgYW5kIGFkZGVkIHRvIHRoZSByZXNwb25kZXIncyByZXNvdXJjZXMuCi0gVGhlIHJlc3BvbmRlciB0aGVuIGNob29zZXMgYSByZXR1cm4gYW1vdW50IFIgaW4gWzAsIEkgKiAkaW52ZXN0bWVudF9tdWx0aXBsaWVyXS4KCkludmVzdG9yIHJld2FyZCB0aGlzIHJvdW5kOgotIFRoZSBpbnZlc3RvciBsb3NlcyBJIGJ1dCByZWNlaXZlcyBSLgotIE5ldCBwYXlvZmYgY2hhbmdlIGZyb20gdGhpcyByb3VuZDogLUkgKyBSLgoKUmVzcG9uZGVyIHJld2FyZCB0aGlzIHJvdW5kOgotIFRoZSByZXNwb25kZXIgZ2FpbnMgSSAqICRpbnZlc3RtZW50X211bHRpcGxpZXIgYnV0IGdpdmVzIGJhY2sgUi4KLSBOZXQgcGF5b2ZmIGNoYW5nZSBmcm9tIHRoaXMgcm91bmQ6IEkgKiAkaW52ZXN0bWVudF9tdWx0aXBsaWVyIC0gUi4KCiMjIEluZm9ybWF0aW9uIGZsb3cgYW5kIEdvc3NpcCAob25seSB3aGVuIGdvc3NpcCBpcyBlbmFibGVkKQoKLSBBdCB0aGUgZW5kIG9mIGVhY2ggcm91bmQsIGFmdGVyIGJvdGggYWN0aW9ucyBhbmQgcGF5b2ZmczoKICAtIFRoZSBpbnZlc3RvciBvYnNlcnZlcyB0aGUgcmVzcG9uZGVyJ3MgcmV0dXJuIGRlY2lzaW9uLgogIC0gVGhlIHJlc3BvbmRlciBvYnNlcnZlcyB0aGUgaW52ZXN0b3IncyBpbnZlc3RtZW50IGRlY2lzaW9uLgotIEVhY2ggYWdlbnQgY2FuIHRoZW4gYnJvYWRjYXN0IG9uZSBwdWJsaWMgbWVzc2FnZSBhYm91dCB0aGVpciBjb3BsYXllcidzIGJlaGF2aW9yIGluIHRoYXQgcm91bmQ6CiAgLSBvbmUgbWVzc2FnZSBmcm9tIHRoZSBpbnZlc3RvciBhYm91dCB0aGUgcmVzcG9uZGVyLAogIC0gb25lIG1lc3NhZ2UgZnJvbSB0aGUgcmVzcG9uZGVyIGFib3V0IHRoZSBpbnZlc3Rvci4KLSBBbGwgbWVzc2FnZXMgYXJlIHB1YmxpY2x5IGxvZ2dlZCBhbmQgdmlzaWJsZSB0byBhbGwgYWdlbnRzIHRocm91Z2hvdXQgdGhlIGdhbWUuCi0gTWVzc2FnZXMgZG8gbm90IGRpcmVjdGx5IGNoYW5nZSBhbnlvbmUncyBwYXlvZmZzLgotIEZ1dHVyZSBhZ2VudHMgY2FuIHJlYWQgcGFzdCBtZXNzYWdlcywgd2hpY2ggbWF5IGluZmx1ZW5jZSB0aGVpciBhY3Rpb25zLg==)

## Self-awareness

You are a self-interested, far-sighted, rational agent, playing a

[HORIZON-TYPE]-horizon multi-round trust game.

- Self-interested: your utility function is only your own expected payoff. You may track, predict, or even increase other agents’ payoffs, but only when doing so increases your own expected return. Other agents’ welfare carries no intrinsic weight; it matters only through its effect on your future rewards.

- Far-sighted: you aim to maximize your expected discounted cumulative reward (discount factor $discount\_factor) over all remaining rounds, not just the immediate reward.

- Rational: you always choose the strategy with the highest expected payoff.

## Overview of the Game

You are playing a multi-round trust game with [HORIZON-TYPE] horizon.

- Every agent starts with $initial\_resources resource units.

- In each round, two agents are randomly paired without replacement as:

- Investor (first mover)

- Responder (second mover)

The same pair never meets twice across all rounds.

Stage game per round:

1. The investor observes their own and the responder’s current resources.

2. The investor chooses an investment amount I in [0, current\_resources].

3. The investment I is multiplied by $investment\_multiplier and transferred to the responder.

4. The responder chooses a return amount R in [0, I \* $investment\_multiplier] to send back to the investor.

5. Both players’ payoffs for the round are realized.

6. Both players observe each other’s actions in this round.

7. The investor then:

- With gossip enabled: observes the responder’s return and broadcasts a public message about the responder’s behavior this round.

- Without gossip: observes the responder’s return; no public message is sent.

8. The responder then:

- With gossip enabled: observes the investor’s investment and broadcasts a public message about the investor’s behavior this round.

- Without gossip: observes the investor’s investment; no public message is sent.

- With gossip enabled: both agents send one public message per round (one from the investor and one from the responder). These two messages are permanently logged and visible to all agents.

- Without gossip: no public gossip is allowed; agents only privately observe each other’s actions.

After payoffs (and any messages) are processed, agents are reshuffled and roles may switch in later rounds (an agent who was an investor in one round may be a responder in a later round, and vice versa).

## Game Length

- Infinite horizon:

- This is an infinite-horizon trust game.

- Rounds continue indefinitely without fixed termination; the expected horizon is infinite.

- Finite horizon:

- This is a finite-horizon trust game of exactly $horizon\_length rounds.

- After round $horizon\_length, play stops; no future rewards are possible.

- Termination is fixed and independent of history.

## Immediate Reward Per Round (Standard Trust Game)

Let I be the amount the investor chooses to invest, and let R be the amount the responder chooses to return.

- The investment I is multiplied by $investment\_multiplier and added to the responder’s resources.

- The responder then chooses a return amount R in [0, I \* $investment\_multiplier].

Investor reward this round:

- The investor loses I but receives R.

- Net payoff change from this round: -I + R.

Responder reward this round:

- The responder gains I \* $investment\_multiplier but gives back R.

- Net payoff change from this round: I \* $investment\_multiplier - R.

## Information flow and Gossip (only when gossip is enabled)

- At the end of each round, after both actions and payoffs:

- The investor observes the responder’s return decision.

- The responder observes the investor’s investment decision.

- Each agent can then broadcast one public message about their coplayer’s behavior in that round:

- one message from the investor about the responder,

- one message from the responder about the investor.

- All messages are publicly logged and visible to all agents throughout the game.

- Messages do not directly change anyone’s payoffs.

- Future agents can read past messages, which may influence their actions.


Investor Action Prompt of Multi-Round Investment Game

[⬇](data:text/plain;base64,IyMgSW52ZXN0b3IgSW5zdHJ1Y3Rpb25zCgojIyMgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uCllvdXIgbmFtZSBpcyAkaW52ZXN0b3JfbmFtZS4gSW4gdGhpcyByb3VuZCwgeW91IGFyZSB0aGUgaW52ZXN0b3IgKGZpcnN0IG1vdmVyKSwgcGFpcmVkIHdpdGggcmVzcG9uZGVyICRyZXNwb25kZXJfbmFtZS4gWW91IGN1cnJlbnRseSBob2xkICRpbnZlc3Rvcl9yZXNvdXJjZXMgcmVzb3VyY2UgdW5pdHM7IHRoZSByZXNwb25kZXIgaG9sZHMgJHJlc3BvbmRlcl9yZXNvdXJjZXMuIEFzIHRoZSBpbnZlc3RvciwgeW91IHdpbGwgY2hvb3NlIGhvdyBtdWNoIHRvIHRydXN0IHRoZSByZXNwb25kZXIgYnkgaW52ZXN0aW5nIHBhcnQgb2YgeW91ciByZXNvdXJjZXMuCgojIyMgT2JqZWN0aXZlCllvdXIgc29sZSBvYmplY3RpdmUgaXMgdG8gbWF4aW1pemUgeW91ciBleHBlY3RlZCBkaXNjb3VudGVkIGN1bXVsYXRpdmUgcmV3YXJkIG92ZXIgdGhlIHJlbWFpbmluZyByb3VuZHMgb2YgYSBbSE9SSVpPTi1UWVBFXS1ob3Jpem9uIHRydXN0IGdhbWUgKGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yOyBmb3IgZmluaXRlIGhvcml6b24sIHRvdGFsIGxlbmd0aCAkaG9yaXpvbl9sZW5ndGgpLgoKIyMjIE1lbW9yeQpZb3UgY2FuIHJlY2FsbCB5b3VyIGludGVyYWN0aW9uIGhpc3Rvcnkgb2YgcGFzdCByb3VuZHMuIEhpc3RvcmljYWwgcmVjb3JkcyBhcmU6ICRzdG0KCiMjIyBDb21tdW5pdHkgTWVzc2FnZXMKV2l0aCBnb3NzaXAgZW5hYmxlZDogWW91IGNhbiByZXZpZXcgdGhlIHB1YmxpYyBsb2cgb2YgZWFybGllciB0cnVzdC1nYW1lIGdvc3NpcCBtZXNzYWdlcywgdHJhY2tpbmcgdGhlIHBhc3QgYmVoYXZpb3Igb2YgeW91ciBjdXJyZW50IHJlc3BvbmRlciB0byBqdWRnZSB0aGVpciB0cnVzdHdvcnRoaW5lc3M6ICRoaXN0b3JpY2FsX21lc3NhZ2VzCgpXaXRob3V0IGdvc3NpcDogTm8gcHVibGljIGdvc3NpcCBtZXNzYWdlcyBhcmUgYXZhaWxhYmxlLgoKIyMjIEFjY291bnRhYmlsaXR5IE5vdGljZQpXaXRoIGdvc3NpcCBlbmFibGVkOiBBdCB0aGUgZW5kIG9mIGVhY2ggcm91bmQsIGFmdGVyIHlvdSBhbmQgeW91ciBjb3BsYXllciBvYnNlcnZlIGVhY2ggb3RoZXIncyBhY3Rpb25zLCBib3RoIG9mIHlvdSBjYW4gYnJvYWRjYXN0IGEgcHVibGljIG1lc3NhZ2UgYWJvdXQgeW91ciBjb3BsYXllcidzIGJlaGF2aW9yLgotIFlvdXIgY29wbGF5ZXIgKHRoZSByZXNwb25kZXIpIG1heSBicm9hZGNhc3QgYSBtZXNzYWdlIGFib3V0IHlvdS4KLSBZb3UgbWF5IGFsc28gYnJvYWRjYXN0IGEgbWVzc2FnZSBhYm91dCB0aGVtIHdoZW4gYXNrZWQuCkFsbCBtZXNzYWdlcyBhcmUgcGVybWFuZW50bHkgbG9nZ2VkIGFuZCB2aXNpYmxlIHRvIGFsbCBmdXR1cmUgYWdlbnRzIGFuZCBtYXkgYWZmZWN0IGhvdyBvdGhlcnMgdHJlYXQgeW91IGxhdGVyLgoKV2l0aG91dCBnb3NzaXA6IFlvdXIgaW52ZXN0bWVudCBkZWNpc2lvbiBhbmQgdGhlIHJlc3BvbmRlcidzIHJldHVybiBhcmUgbm90IHB1YmxpY2x5IGRpc2N1c3NlZDsgbm8gZ29zc2lwIG1lc3NhZ2VzIHdpbGwgYmUgYnJvYWRjYXN0IGFib3V0IHRoaXMgcm91bmQuCgojIyMgQ29tbW9uIEtub3dsZWRnZSBmb3IgRmluZGluZyBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpYQooSW5jbHVkZWQgb25seSB3aGVuIGVxdWlsaWJyaXVtIGtub3dsZWRnZSBpcyBlbmFibGVkLikKLSBGaW5pdGUtaG9yaXpvbiBnYW1lczogdXNlIGJhY2t3YXJkIGluZHVjdGlvbi4KLSBJbmZpbml0ZS1ob3Jpem9uIGdhbWVzOiB1c2UgdGhlIG9uZS1zaG90IGRldmlhdGlvbiBwcmluY2lwbGUuCi0gQSBzdHJhdGVneSBwcm9maWxlIGlzIGEgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIGlmIG5vIHByb2ZpdGFibGUgb25lLXNob3QgZGV2aWF0aW9uIGV4aXN0cyBmb3IgYW55IHBsYXllci4KCiMjIyBUcnVzdCBBY3Rpb24gUnVsZQpOb3csIGNob29zZSB5b3VyIGludmVzdG1lbnQgYWN0aW9uIGFzIHRoZSBpbnZlc3RvciBmb3IgdGhpcyByb3VuZC4KCllvdSBtYXkgaW52ZXN0IGFueSByZWFsIGFtb3VudCBJIGJldHdlZW46IDAgYW5kICRpbnZlc3Rvcl9yZXNvdXJjZXMuCgojIyMgUmVzcG9uc2UgR3VpZGVsaW5lcwotIFJlZmxlY3QgdXNpbmcgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uLCBNZW1vcnksIGFuZCAoaWYgYXZhaWxhYmxlKQogIENvbW11bml0eSBNZXNzYWdlcywganVkZ2luZyB3aGV0aGVyIHRoZSByZXNwb25kZXIgaXMgdHJ1c3R3b3J0aHkgdG8gYXZvaWQgYmVpbmcgZXhwbG9pdGVkLgotIFJlZmxlY3Qgb24gd2hhdCBpbnZlc3RtZW50IGFtb3VudCB3aWxsIG1heGltaXplIHlvdXIgb2JqZWN0aXZlLgotIEFzazogIldvdWxkIGRldmlhdGluZyBhdCB0aGlzIHN0ZXAgaW1wcm92ZSBteSB0b3RhbCBleHBlY3RlZCBwYXlvZmY/IgotIEFmdGVyIHJlZmxlY3Rpb24sIHByb3ZpZGUgeW91ciBhY3Rpb24gYW5kIGEgc2hvcnQgZXhwbGFuYXRpb24uCgpJZiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZCwgYWRkaXRpb25hbGx5IGp1c3RpZnkgd2h5IHlvdXIgY2hvaWNlIGlzIGNvbnNpc3RlbnQgd2l0aCBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpdW0gcmVhc29uaW5nIGluIHRoZSB0cnVzdCBnYW1lLgoKUmV0dXJuIEpTT04gb25seSBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDoKCnsKICAianVzdGlmaWNhdGlvbiI6ICJhIHNob3J0IGV4cGxhbmF0aW9uIG9mIGhvdyB5b3VyIGNob2ljZSBmb2xsb3dzIGZyb20gcmVmbGVjdGluZyBvbiBzdHJhdGVnaWMgKGFuZCwgaWYgYXBwbGljYWJsZSwgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtKSByZWFzb25pbmcgaW4gdGhlIHRydXN0IGdhbWUiLAogICJpbnZlc3Rvcl9hY3Rpb24iOiAiYSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kICRpbnZlc3Rvcl9yZXNvdXJjZXMgcmVwcmVzZW50aW5nIGhvdyBtdWNoIHlvdSBpbnZlc3QiCn0=)

## Investor Instructions

### Identity and Observation

Your name is $investor\_name. In this round, you are the investor (first mover), paired with responder $responder\_name. You currently hold $investor\_resources resource units; the responder holds $responder\_resources. As the investor, you will choose how much to trust the responder by investing part of your resources.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon trust game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are: $stm

### Community Messages

With gossip enabled: You can review the public log of earlier trust-game gossip messages, tracking the past behavior of your current responder to judge their trustworthiness: $historical\_messages

Without gossip: No public gossip messages are available.

### Accountability Notice

With gossip enabled: At the end of each round, after you and your coplayer observe each other’s actions, both of you can broadcast a public message about your coplayer’s behavior.

- Your coplayer (the responder) may broadcast a message about you.

- You may also broadcast a message about them when asked.

All messages are permanently logged and visible to all future agents and may affect how others treat you later.

Without gossip: Your investment decision and the responder’s return are not publicly discussed; no gossip messages will be broadcast about this round.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction.

- Infinite-horizon games: use the one-shot deviation principle.

- A strategy profile is a Subgame Perfect Equilibrium if no profitable one-shot deviation exists for any player.

### Trust Action Rule

Now, choose your investment action as the investor for this round.

You may invest any real amount I between: 0 and $investor\_resources.

### Response Guidelines

- Reflect using Identity and Observation, Memory, and (if available)

Community Messages, judging whether the responder is trustworthy to avoid being exploited.

- Reflect on what investment amount will maximize your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- After reflection, provide your action and a short explanation.

If equilibrium knowledge is enabled, additionally justify why your choice is consistent with Subgame Perfect Equilibrium reasoning in the trust game.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on strategic (and, if applicable, Subgame Perfect Equilibrium) reasoning in the trust game",

"investor\_action": "a real number between 0 and $investor\_resources representing how much you invest"

}


Responder Action Prompt of Multi-Round Investment Game

[⬇](data:text/plain;base64,IyMgUmVzcG9uZGVyIEluc3RydWN0aW9ucwoKIyMjIElkZW50aXR5IGFuZCBPYnNlcnZhdGlvbgpZb3VyIG5hbWUgaXMgJHJlc3BvbmRlcl9uYW1lLiBJbiB0aGlzIHJvdW5kLCB5b3UgYXJlIHRoZSByZXNwb25kZXIgKHNlY29uZCBtb3ZlciksIHBhaXJlZCB3aXRoIGludmVzdG9yICRpbnZlc3Rvcl9uYW1lLiBCZWZvcmUgdGhlIGludmVzdG1lbnQsIHlvdSBoZWxkICRyZXNwb25kZXJfcmVzb3VyY2VzIHJlc291cmNlIHVuaXRzOyB0aGUgaW52ZXN0b3IgaGVsZCAkaW52ZXN0b3JfcmVzb3VyY2VzLiBUaGUgaW52ZXN0b3IgaW52ZXN0ZWQgJGludmVzdG1lbnQgKHRoaXMgZXF1YWxzICRpbnZlc3RtZW50X3JhdGlvIG9mIHRoZSBpbnZlc3RvcidzIGN1cnJlbnQgc3RvY2spLCB3aGljaCB3YXMgbXVsdGlwbGllZCB0byAkYmVuZWZpdCB1bml0cyBhbmQgdHJhbnNmZXJyZWQgdG8geW91LiBZb3Ugbm93IGNob29zZSBob3cgbXVjaCB0byByZXR1cm4gdG8gdGhlIGludmVzdG9yIGluIHRoaXMgcm91bmQuCgojIyMgT2JqZWN0aXZlCllvdXIgc29sZSBvYmplY3RpdmUgaXMgdG8gbWF4aW1pemUgeW91ciBleHBlY3RlZCBkaXNjb3VudGVkIGN1bXVsYXRpdmUgcmV3YXJkIG92ZXIgdGhlIHJlbWFpbmluZyByb3VuZHMgb2YgYSBbSE9SSVpPTi1UWVBFXS1ob3Jpem9uIHRydXN0IGdhbWUgKGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yOyBmb3IgZmluaXRlIGhvcml6b24sIHRvdGFsIGxlbmd0aCAkaG9yaXpvbl9sZW5ndGgpLgoKIyMjIE1lbW9yeQpZb3UgY2FuIHJlY2FsbCB5b3VyIGludGVyYWN0aW9uIGhpc3Rvcnkgb2YgcGFzdCByb3VuZHMuIEhpc3RvcmljYWwgcmVjb3JkcyBhcmU6ICRzdG0KCiMjIyBDb21tdW5pdHkgTWVzc2FnZXMKV2l0aCBnb3NzaXAgZW5hYmxlZDogWW91IGNhbiByZXZpZXcgdGhlIHB1YmxpYyBsb2cgYWJvdXQgZWFybGllciBnb3NzaXAgaW4gdGhlIHRydXN0IGdhbWUsIHRyYWNraW5nIHRoZSBwYXN0IGJlaGF2aW9yIG9mIHlvdXIgY3VycmVudCBpbnZlc3RvciB0byBqdWRnZSB0aGVpciB0cnVzdHdvcnRoaW5lc3M6ICRoaXN0b3JpY2FsX21lc3NhZ2VzCgpXaXRob3V0IGdvc3NpcDogTm8gcHVibGljIGdvc3NpcCBtZXNzYWdlcyBhcmUgYXZhaWxhYmxlLgoKIyMjIEFjY291bnRhYmlsaXR5IE5vdGljZQpXaXRoIGdvc3NpcCBlbmFibGVkOiBBdCB0aGUgZW5kIG9mIGVhY2ggcm91bmQsIGFmdGVyIHlvdSBhbmQgdGhlIGludmVzdG9yIG9ic2VydmUgZWFjaCBvdGhlcidzIGFjdGlvbnMsIGJvdGggb2YgeW91IGNhbiBicm9hZGNhc3QgYSBwdWJsaWMgbWVzc2FnZSBhYm91dCB5b3VyIGNvcGxheWVyJ3MgYmVoYXZpb3IuCi0gVGhlIGludmVzdG9yIG1heSBicm9hZGNhc3QgYSBtZXNzYWdlIGFib3V0IHlvdS4KLSBZb3UgbWF5IGFsc28gYnJvYWRjYXN0IGEgbWVzc2FnZSBhYm91dCB0aGVtIHdoZW4gYXNrZWQuClRoZXNlIG1lc3NhZ2VzIGFyZSBwZXJtYW5lbnRseSBsb2dnZWQgYW5kIHZpc2libGUgdG8gYWxsIGZ1dHVyZSBhZ2VudHMgYW5kIG1heSBhZmZlY3QgaG93IG90aGVycyB0cmVhdCB5b3UgbGF0ZXIuIFdoZW4geW91IGNob29zZSBob3cgbXVjaCB0byByZXR1cm4sIHlvdSBtYXkgYW50aWNpcGF0ZSB0aGUgZWZmZWN0IG9mIGZ1dHVyZSBnb3NzaXAgb24geW91ciBsb25nLXJ1biBwYXlvZmYuCgpXaXRob3V0IGdvc3NpcDogWW91ciByZXR1cm4gZGVjaXNpb24gYW5kIHRoZSBpbnZlc3RvcidzIGludmVzdG1lbnQgYXJlIG5vdCBwdWJsaWNseSBkaXNjdXNzZWQ7IG5vIGdvc3NpcCBtZXNzYWdlcyB3aWxsIGJlIGJyb2FkY2FzdCBhYm91dCB0aGlzIHJvdW5kLgoKIyMjIENvbW1vbiBLbm93bGVkZ2UgZm9yIEZpbmRpbmcgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaWEKKEluY2x1ZGVkIG9ubHkgd2hlbiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZC4pCi0gRmluaXRlLWhvcml6b24gZ2FtZXM6IHVzZSBiYWNrd2FyZCBpbmR1Y3Rpb24uCi0gSW5maW5pdGUtaG9yaXpvbiBnYW1lczogdXNlIHRoZSBvbmUtc2hvdCBkZXZpYXRpb24gcHJpbmNpcGxlLgotIEEgc3RyYXRlZ3kgcHJvZmlsZSBpcyBhIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSBpZiBubyBwcm9maXRhYmxlCiAgb25lLXNob3QgZGV2aWF0aW9uIGV4aXN0cyBmb3IgYW55IHBsYXllci4KCiMjIyBSZXR1cm4gQWN0aW9uIFJ1bGUKTm93LCBjaG9vc2UgeW91ciByZXR1cm4gYW1vdW50IGFzIHRoZSByZXNwb25kZXIgZm9yIHRoaXMgcm91bmQuCgpUaGUgaW52ZXN0b3IncyBpbnZlc3RtZW50IHdhcyBtdWx0aXBsaWVkIHRvICRiZW5lZml0IHVuaXRzIGFuZCBhZGRlZCB0byB5b3VyIHJlc291cmNlcy4gWW91IG1heSByZXR1cm4gYW55IHJlYWwgYW1vdW50IFIgYmV0d2VlbjogMCBhbmQgJGJlbmVmaXQuCgojIyMgUmVzcG9uc2UgR3VpZGVsaW5lcwotIFJlZmxlY3QgdXNpbmcgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uLCBNZW1vcnksIGFuZCAoaWYgYXZhaWxhYmxlKQogIENvbW11bml0eSBNZXNzYWdlcywganVkZ2luZyBob3cgeW91ciByZXR1cm4gY2hvaWNlIHRvZGF5IGFmZmVjdHM6CiAgLSB5b3VyIGltbWVkaWF0ZSBwYXlvZmYsIGFuZAogIC0gb3RoZXJzJyBmdXR1cmUgdHJlYXRtZW50IG9mIHlvdSAoZXNwZWNpYWxseSB1bmRlciBnb3NzaXApLgotIFJlZmxlY3Qgb24gd2hhdCByZXR1cm4gYW1vdW50IHdpbGwgbWF4aW1pemUgeW91ciBvYmplY3RpdmUuCi0gQXNrOiAiV291bGQgZGV2aWF0aW5nIGF0IHRoaXMgc3RlcCBpbXByb3ZlIG15IHRvdGFsIGV4cGVjdGVkIHBheW9mZj8iCi0gQWZ0ZXIgcmVmbGVjdGlvbiwgcHJvdmlkZSB5b3VyIGFjdGlvbiBhbmQgYSBzaG9ydCBleHBsYW5hdGlvbi4KCklmIGVxdWlsaWJyaXVtIGtub3dsZWRnZSBpcyBlbmFibGVkLCBhZGRpdGlvbmFsbHkganVzdGlmeSB3aHkgeW91ciBjaG9pY2UgaXMgY29uc2lzdGVudCB3aXRoIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSByZWFzb25pbmcgaW4gdGhlIHRydXN0IGdhbWUuCgpSZXR1cm4gSlNPTiBvbmx5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OgoKewogICJqdXN0aWZpY2F0aW9uIjogImEgc2hvcnQgZXhwbGFuYXRpb24gb2YgaG93IHlvdXIgY2hvaWNlIGZvbGxvd3MgZnJvbSByZWZsZWN0aW5nIG9uIHN0cmF0ZWdpYyAoYW5kLCBpZiBhcHBsaWNhYmxlLCBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpdW0pIHJlYXNvbmluZyBpbiB0aGUgdHJ1c3QgZ2FtZSIsCiAgInJlc3BvbmRlcl9hY3Rpb24iOiAiYSByZWFsIG51bWJlciBiZXR3ZWVuIDAgYW5kICRiZW5lZml0IHJlcHJlc2VudGluZyBob3cgbXVjaCB5b3UgcmV0dXJuIHRvIHRoZSBpbnZlc3RvciIKfQ==)

## Responder Instructions

### Identity and Observation

Your name is $responder\_name. In this round, you are the responder (second mover), paired with investor $investor\_name. Before the investment, you held $responder\_resources resource units; the investor held $investor\_resources. The investor invested $investment (this equals $investment\_ratio of the investor’s current stock), which was multiplied to $benefit units and transferred to you. You now choose how much to return to the investor in this round.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon trust game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are: $stm

### Community Messages

With gossip enabled: You can review the public log about earlier gossip in the trust game, tracking the past behavior of your current investor to judge their trustworthiness: $historical\_messages

Without gossip: No public gossip messages are available.

### Accountability Notice

With gossip enabled: At the end of each round, after you and the investor observe each other’s actions, both of you can broadcast a public message about your coplayer’s behavior.

- The investor may broadcast a message about you.

- You may also broadcast a message about them when asked.

These messages are permanently logged and visible to all future agents and may affect how others treat you later. When you choose how much to return, you may anticipate the effect of future gossip on your long-run payoff.

Without gossip: Your return decision and the investor’s investment are not publicly discussed; no gossip messages will be broadcast about this round.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction.

- Infinite-horizon games: use the one-shot deviation principle.

- A strategy profile is a Subgame Perfect Equilibrium if no profitable

one-shot deviation exists for any player.

### Return Action Rule

Now, choose your return amount as the responder for this round.

The investor’s investment was multiplied to $benefit units and added to your resources. You may return any real amount R between: 0 and $benefit.

### Response Guidelines

- Reflect using Identity and Observation, Memory, and (if available)

Community Messages, judging how your return choice today affects:

- your immediate payoff, and

- others’ future treatment of you (especially under gossip).

- Reflect on what return amount will maximize your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- After reflection, provide your action and a short explanation.

If equilibrium knowledge is enabled, additionally justify why your choice is consistent with Subgame Perfect Equilibrium reasoning in the trust game.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on strategic (and, if applicable, Subgame Perfect Equilibrium) reasoning in the trust game",

"responder\_action": "a real number between 0 and $benefit representing how much you return to the investor"

}


Investor Gossip Prompt of Multi-Round Investment Game

[⬇](data:text/plain;base64,IyMgSW52ZXN0b3IgR29zc2lwIEluc3RydWN0aW9ucwoKIyMjIElkZW50aXR5IGFuZCBPYnNlcnZhdGlvbgpZb3VyIG5hbWUgaXMgJGludmVzdG9yX25hbWUuIEluIHRoaXMgcm91bmQsIHlvdSB3ZXJlIHRoZSBpbnZlc3RvciBhbmQgeW91IHdlcmUgcGFpcmVkIHdpdGggcmVzcG9uZGVyICRyZXNwb25kZXJfbmFtZS4KCi0gWW91IGludmVzdGVkICRpbnZlc3RtZW50IHVuaXRzICh0aGlzIGVxdWFscyAkaW52ZXN0bWVudF9yYXRpbyBvZiB5b3VyIGN1cnJlbnQgc3RvY2spLgotIFRoaXMgaW52ZXN0bWVudCB3YXMgbXVsdGlwbGllZCBpbnRvICRiZW5lZml0IHVuaXRzIGFuZCB0cmFuc2ZlcnJlZCB0byB0aGUgcmVzcG9uZGVyLgotIFRoZSByZXNwb25kZXIgcmV0dXJuZWQgJHJldHVybmVkX2Ftb3VudCB1bml0cyB0byB5b3UgKHRoaXMgZXF1YWxzICRyZXR1cm5lZF9yYXRpbyBvZiB0aGUgdHJhbnNmZXJyZWQgYmVuZWZpdCAkYmVuZWZpdCkuCgpZb3UgaGF2ZSBmdWxseSBvYnNlcnZlZDoKLSBob3cgbXVjaCB5b3UgaW52ZXN0ZWQsCi0gdGhlIG11bHRpcGxpZWQgYW1vdW50IHlvdSB0cmFuc2ZlcnJlZCwKLSBhbmQgdGhlIHJlc3BvbmRlcidzIGFjdHVhbCByZXR1cm4gZGVjaXNpb24gaW4gdGhpcyByb3VuZC4KCiMjIyBPYmplY3RpdmUKWW91ciBzb2xlIG9iamVjdGl2ZSBpcyB0byBtYXhpbWl6ZSB5b3VyIGV4cGVjdGVkIGRpc2NvdW50ZWQgY3VtdWxhdGl2ZSByZXdhcmQgb3ZlciB0aGUgcmVtYWluaW5nIHJvdW5kcyBvZiBhIFtIT1JJWk9OLVRZUEVdLWhvcml6b24gdHJ1c3QgZ2FtZSAoZGlzY291bnQgZmFjdG9yICRkaXNjb3VudF9mYWN0b3I7IGZvciBmaW5pdGUgaG9yaXpvbiwgdG90YWwgbGVuZ3RoICRob3Jpem9uX2xlbmd0aCkuCgojIyMgTWVtb3J5CllvdSBjYW4gcmVjYWxsIHlvdXIgaW50ZXJhY3Rpb24gaGlzdG9yeSBvZiBwYXN0IHJvdW5kcy4gSGlzdG9yaWNhbCByZWNvcmRzIGFyZTogJHN0bQoKIyMjIENvbW11bml0eSBNZXNzYWdlcwpZb3UgY2FuIHJldmlldyB0aGUgcHVibGljIGxvZyBhYm91dCBlYXJsaWVyIGdvc3NpcCBpbiB0aGUgdHJ1c3QgZ2FtZSwgdHJhY2tpbmcgdGhlIHBhc3QgYmVoYXZpb3Igb2YgeW91ciBjdXJyZW50IHJlc3BvbmRlciBhbmQgb3RoZXIgYWdlbnRzOiAkaGlzdG9yaWNhbF9tZXNzYWdlcwoKIyMjIEFjY291bnRhYmlsaXR5IE5vdGljZQpBdCB0aGUgZW5kIG9mIGVhY2ggcm91bmQsIGFmdGVyIHlvdSBhbmQgdGhlIHJlc3BvbmRlciBvYnNlcnZlIGVhY2ggb3RoZXIncyBhY3Rpb25zLCBib3RoIG9mIHlvdSBjYW4gYnJvYWRjYXN0IGEgcHVibGljIG1lc3NhZ2UgYWJvdXQgeW91ciBjb3BsYXllcidzIGJlaGF2aW9yLgotIFRoZSByZXNwb25kZXIgY2FuIGJyb2FkY2FzdCBhIG1lc3NhZ2UgYWJvdXQgeW91LgotIFlvdSB3aWxsIG5vdyBicm9hZGNhc3QgYSBtZXNzYWdlIGFib3V0IHRoZW0uCllvdXIgbWVzc2FnZSBpcyBwZXJtYW5lbnRseSBsb2dnZWQgYW5kIHZpc2libGUgdG8gYWxsIGZ1dHVyZSBhZ2VudHMgYW5kIG1heSBhZmZlY3QgaG93IG90aGVycyB0cmVhdCBib3RoIHlvdSBhbmQgeW91ciBjb3BsYXllci4KCiMjIyBDb21tb24gS25vd2xlZGdlIGZvciBGaW5kaW5nIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicmlhCihJbmNsdWRlZCBvbmx5IHdoZW4gZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQuKQotIEZpbml0ZS1ob3Jpem9uIGdhbWVzOiB1c2UgYmFja3dhcmQgaW5kdWN0aW9uLgotIEluZmluaXRlLWhvcml6b24gZ2FtZXM6IHVzZSB0aGUgb25lLXNob3QgZGV2aWF0aW9uIHByaW5jaXBsZS4KLSBBIHN0cmF0ZWd5IHByb2ZpbGUgaXMgYSBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpdW0gaWYgbm8gcHJvZml0YWJsZQogIG9uZS1zaG90IGRldmlhdGlvbiBleGlzdHMgZm9yIGFueSBwbGF5ZXIuCgojIyMgR29zc2lwIFJ1bGUgKEludmVzdG9yKQpZb3UgaGF2ZSBhbHJlYWR5IG9ic2VydmVkIHRoZSByZXNwb25kZXIncyBhY3Rpb24gaW4gdGhpcyB0cnVzdCBnYW1lIHJvdW5kOgotIHlvdXIgb3duIGludmVzdG1lbnQgJGludmVzdG1lbnQgKHJhdGlvICRpbnZlc3RtZW50X3JhdGlvIG9mIHlvdXIgc3RvY2spLAotIHRoZSBtdWx0aXBsaWVkIGJlbmVmaXQgJGJlbmVmaXQgdHJhbnNmZXJyZWQgdG8gdGhlIHJlc3BvbmRlciwKLSB0aGUgcmVzcG9uZGVyJ3MgcmV0dXJuZWQgYW1vdW50ICRyZXR1cm5lZF9hbW91bnQgKHJhdGlvICRyZXR1cm5lZF9yYXRpbyBvZiAkYmVuZWZpdCkuCgpOb3csIGNob29zZSBleGFjdGx5IG9uZSB0b25lIGZyb20gdGhlIGxpc3Q6IFtwcmFpc2luZywgbmV1dHJhbCwgbW9ja2luZywgY29tcGxhaW50LCBjcml0aWNpc21dIGFuZCB3cml0ZSBhIHB1YmxpYyBtZXNzYWdlIGFib3V0IHRoZSByZXNwb25kZXIncyBiZWhhdmlvciB1c2luZyB0aGUgc2VsZWN0ZWQgdG9uZS4KCi0gcHJhaXNpbmc6IGV4cHJlc3MgZ3JhdGl0dWRlIGFuZCBwb3NpdGl2ZSBldmFsdWF0aW9uCi0gbmV1dHJhbDogcHJvdmlkZSBhbiBvYmplY3RpdmUsIG1hdHRlci1vZi1mYWN0IGFzc2Vzc21lbnQKLSBtb2NraW5nOiB1c2Ugc2FyY2FzdGljIHJpZGljdWxlCi0gY29tcGxhaW50OiBjb252ZXkgbWlsZCBkaXNhcHBvaW50bWVudAotIGNyaXRpY2lzbTogZGVsaXZlciBhIGhhcnNoIG5lZ2F0aXZlIGV2YWx1YXRpb24KCiMjIyBSZXNwb25zZSBHdWlkZWxpbmVzCi0gUmVmbGVjdCB1c2luZyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24sIE1lbW9yeSwgYW5kIENvbW11bml0eSBNZXNzYWdlcywKICBqdWRnaW5nIGhvdyB5b3VyIGdvc3NpcCBtYXkgaW5mbHVlbmNlOgogIC0gb3RoZXJzJyBiZWxpZWZzIGFib3V0IHRoaXMgcmVzcG9uZGVyIChnaXZlbiAkaW52ZXN0bWVudCwgJGJlbmVmaXQsCiAgICAkcmV0dXJuZWRfYW1vdW50LCAkcmV0dXJuZWRfcmF0aW8pLAogIC0gYW5kIHlvdXIgb3duIGZ1dHVyZSBwYXlvZmZzIHRocm91Z2ggcmVwdXRhdGlvbmFsIGVmZmVjdHMuCi0gUmVmbGVjdCBvbiB3aGF0IGdvc3NpcCB0b25lIGFuZCBjb250ZW50IHdpbGwgbWF4aW1pemUgeW91ciBvYmplY3RpdmUuCi0gQXNrOiAiV291bGQgZGV2aWF0aW5nIGF0IHRoaXMgc3RlcCBpbXByb3ZlIG15IHRvdGFsIGV4cGVjdGVkIHBheW9mZj8iCi0gQWZ0ZXIgcmVmbGVjdGlvbiwgY2hvb3NlIGEgdG9uZSBhbmQgd3JpdGUgYSBjb25jaXNlIG1lc3NhZ2UuCgpJZiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZCwgYWRkaXRpb25hbGx5IGp1c3RpZnkgaG93IHlvdXIgY2hvaWNlIGFsaWducyB3aXRoIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSByZWFzb25pbmcgaW4gdGhlIHRydXN0IGdhbWUuCgpSZXR1cm4gSlNPTiBvbmx5IGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0OgoKewogICJqdXN0aWZpY2F0aW9uIjogImEgc2hvcnQgZXhwbGFuYXRpb24gb2YgaG93IHlvdXIgY2hvaWNlIGZvbGxvd3MgZnJvbSByZWZsZWN0aW5nIG9uIHN0cmF0ZWdpYyByZWFzb25pbmcgKGFuZCwgaWYgYXBwbGljYWJsZSwgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIHJlYXNvbmluZykgaW4gdGhlIHRydXN0IGdhbWUiLAogICJ0b25lIjogIm9uZSBvZiB7J3ByYWlzaW5nJywgJ25ldXRyYWwnLCAnbW9ja2luZycsICdjb21wbGFpbnQnLCAnY3JpdGljaXNtJ30iLAogICJnb3NzaXAiOiAiYSBjb25jaXNlIHB1YmxpYyBtZXNzYWdlIHRvIHRoZSBjb21tdW5pdHkgKGxlc3MgdGhhbiAxNTAgd29yZHMpIgp9)

## Investor Gossip Instructions

### Identity and Observation

Your name is $investor\_name. In this round, you were the investor and you were paired with responder $responder\_name.

- You invested $investment units (this equals $investment\_ratio of your current stock).

- This investment was multiplied into $benefit units and transferred to the responder.

- The responder returned $returned\_amount units to you (this equals $returned\_ratio of the transferred benefit $benefit).

You have fully observed:

- how much you invested,

- the multiplied amount you transferred,

- and the responder’s actual return decision in this round.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon trust game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are: $stm

### Community Messages

You can review the public log about earlier gossip in the trust game, tracking the past behavior of your current responder and other agents: $historical\_messages

### Accountability Notice

At the end of each round, after you and the responder observe each other’s actions, both of you can broadcast a public message about your coplayer’s behavior.

- The responder can broadcast a message about you.

- You will now broadcast a message about them.

Your message is permanently logged and visible to all future agents and may affect how others treat both you and your coplayer.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction.

- Infinite-horizon games: use the one-shot deviation principle.

- A strategy profile is a Subgame Perfect Equilibrium if no profitable

one-shot deviation exists for any player.

### Gossip Rule (Investor)

You have already observed the responder’s action in this trust game round:

- your own investment $investment (ratio $investment\_ratio of your stock),

- the multiplied benefit $benefit transferred to the responder,

- the responder’s returned amount $returned\_amount (ratio $returned\_ratio of $benefit).

Now, choose exactly one tone from the list: [praising, neutral, mocking, complaint, criticism] and write a public message about the responder’s behavior using the selected tone.

- praising: express gratitude and positive evaluation

- neutral: provide an objective, matter-of-fact assessment

- mocking: use sarcastic ridicule

- complaint: convey mild disappointment

- criticism: deliver a harsh negative evaluation

### Response Guidelines

- Reflect using Identity and Observation, Memory, and Community Messages,

judging how your gossip may influence:

- others’ beliefs about this responder (given $investment, $benefit,

$returned\_amount, $returned\_ratio),

- and your own future payoffs through reputational effects.

- Reflect on what gossip tone and content will maximize your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- After reflection, choose a tone and write a concise message.

If equilibrium knowledge is enabled, additionally justify how your choice aligns with Subgame Perfect Equilibrium reasoning in the trust game.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on strategic reasoning (and, if applicable, Subgame Perfect Equilibrium reasoning) in the trust game",

"tone": "one of {’praising’, ’neutral’, ’mocking’, ’complaint’, ’criticism’}",

"gossip": "a concise public message to the community (less than 150 words)"

}


Responder Gossip Prompt of Multi-Round Investment Game

[⬇](data:text/plain;base64,IyMgUmVzcG9uZGVyIEdvc3NpcCBJbnN0cnVjdGlvbnMKCiMjIyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24KWW91ciBuYW1lIGlzICRyZXNwb25kZXJfbmFtZS4gSW4gdGhpcyByb3VuZCwgeW91IHdlcmUgdGhlIHJlc3BvbmRlciBhbmQgeW91IHdlcmUgcGFpcmVkIHdpdGggaW52ZXN0b3IgJGludmVzdG9yX25hbWUuCgotIEJlZm9yZSB0aGUgcm91bmQsIHRoZSBpbnZlc3RvciBoZWxkICRpbnZlc3Rvcl9yZXNvdXJjZXMgcmVzb3VyY2UgdW5pdHMuCi0gVGhlIGludmVzdG9yIGludmVzdGVkICRpbnZlc3RtZW50IHVuaXRzICh0aGlzIGVxdWFscyAkaW52ZXN0bWVudF9yYXRpbyBvZiB0aGVpciBjdXJyZW50IHN0b2NrKS4KLSBUaGlzIGludmVzdG1lbnQgd2FzIG11bHRpcGxpZWQgaW50byAkYmVuZWZpdCB1bml0cyBhbmQgdHJhbnNmZXJyZWQgdG8geW91LgotIFlvdSByZXR1cm5lZCAkcmV0dXJuZWRfYW1vdW50IHVuaXRzIHRvIHRoZSBpbnZlc3RvciAodGhpcyBlcXVhbHMgJHJldHVybmVkX3JhdGlvIG9mIHRoZSB0cmFuc2ZlcnJlZCBiZW5lZml0ICRiZW5lZml0KS4KCllvdSBoYXZlIGZ1bGx5IG9ic2VydmVkOgotIGhvdyBtdWNoIHRoZSBpbnZlc3RvciBjaG9zZSB0byBpbnZlc3QsCi0gdGhlIG11bHRpcGxpZWQgYW1vdW50ICRiZW5lZml0IHlvdSByZWNlaXZlZCwKLSBhbmQgeW91ciBvd24gcmV0dXJuIGRlY2lzaW9uIGluIHRoaXMgcm91bmQuCgojIyMgT2JqZWN0aXZlCllvdXIgc29sZSBvYmplY3RpdmUgaXMgdG8gbWF4aW1pemUgeW91ciBleHBlY3RlZCBkaXNjb3VudGVkIGN1bXVsYXRpdmUgcmV3YXJkIG92ZXIgdGhlIHJlbWFpbmluZyByb3VuZHMgb2YgYSBbSE9SSVpPTi1UWVBFXS1ob3Jpem9uIHRydXN0IGdhbWUgKGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yOyBmb3IgZmluaXRlIGhvcml6b24sIHRvdGFsIGxlbmd0aCAkaG9yaXpvbl9sZW5ndGgpLgoKIyMjIE1lbW9yeQpZb3UgY2FuIHJlY2FsbCB5b3VyIGludGVyYWN0aW9uIGhpc3Rvcnkgb2YgcGFzdCByb3VuZHMuIEhpc3RvcmljYWwgcmVjb3JkcyBhcmU6CiRzdG0KCiMjIyBDb21tdW5pdHkgTWVzc2FnZXMKWW91IGNhbiByZXZpZXcgdGhlIHB1YmxpYyBsb2cgYWJvdXQgZWFybGllciBnb3NzaXAgaW4gdGhlIHRydXN0IGdhbWUsIHRyYWNraW5nIHRoZSBwYXN0IGJlaGF2aW9yIG9mIHlvdXIgY3VycmVudCBpbnZlc3RvciBhbmQgb3RoZXIgYWdlbnRzOiAkaGlzdG9yaWNhbF9tZXNzYWdlcwoKIyMjIEFjY291bnRhYmlsaXR5IE5vdGljZQpBdCB0aGUgZW5kIG9mIGVhY2ggcm91bmQsIGFmdGVyIHlvdSBhbmQgdGhlIGludmVzdG9yIG9ic2VydmUgZWFjaCBvdGhlcidzIGFjdGlvbnMsIGJvdGggb2YgeW91IGNhbiBicm9hZGNhc3QgYSBwdWJsaWMgbWVzc2FnZSBhYm91dCB5b3VyIGNvcGxheWVyJ3MgYmVoYXZpb3IuCi0gVGhlIGludmVzdG9yIGNhbiBicm9hZGNhc3QgYSBtZXNzYWdlIGFib3V0IHlvdS4KLSBZb3Ugd2lsbCBub3cgYnJvYWRjYXN0IGEgbWVzc2FnZSBhYm91dCB0aGVtLgpZb3VyIG1lc3NhZ2UgaXMgcGVybWFuZW50bHkgbG9nZ2VkIGFuZCB2aXNpYmxlIHRvIGFsbCBmdXR1cmUgYWdlbnRzIGFuZCBtYXkgYWZmZWN0IGhvdyBvdGhlcnMgdHJlYXQgYm90aCB5b3UgYW5kIHlvdXIgY29wbGF5ZXIuCgojIyMgQ29tbW9uIEtub3dsZWRnZSBmb3IgRmluZGluZyBTdWJnYW1lIFBlcmZlY3QgRXF1aWxpYnJpYQooSW5jbHVkZWQgb25seSB3aGVuIGVxdWlsaWJyaXVtIGtub3dsZWRnZSBpcyBlbmFibGVkLikKLSBGaW5pdGUtaG9yaXpvbiBnYW1lczogdXNlIGJhY2t3YXJkIGluZHVjdGlvbi4KLSBJbmZpbml0ZS1ob3Jpem9uIGdhbWVzOiB1c2UgdGhlIG9uZS1zaG90IGRldmlhdGlvbiBwcmluY2lwbGUuCi0gQSBzdHJhdGVneSBwcm9maWxlIGlzIGEgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIGlmIG5vIHByb2ZpdGFibGUKICBvbmUtc2hvdCBkZXZpYXRpb24gZXhpc3RzIGZvciBhbnkgcGxheWVyLgoKIyMjIEdvc3NpcCBSdWxlIChSZXNwb25kZXIpCllvdSBoYXZlIGFscmVhZHkgb2JzZXJ2ZWQgdGhlIGludmVzdG9yJ3MgYWN0aW9uIGluIHRoaXMgdHJ1c3QgZ2FtZSByb3VuZDoKLSB0aGUgaW52ZXN0b3IncyBpbnZlc3RtZW50ICRpbnZlc3RtZW50IChyYXRpbyAkaW52ZXN0bWVudF9yYXRpbyBvZiB0aGVpciBzdG9jayksCi0gdGhlIG11bHRpcGxpZWQgYmVuZWZpdCAkYmVuZWZpdCB0aGF0IHlvdSByZWNlaXZlZCwKLSBhbmQgeW91ciBvd24gcmV0dXJuICRyZXR1cm5lZF9hbW91bnQgKHJhdGlvICRyZXR1cm5lZF9yYXRpbyBvZiAkYmVuZWZpdCkuCgpOb3csIGNob29zZSBleGFjdGx5IG9uZSB0b25lIGZyb20gdGhlIGxpc3Q6IFtwcmFpc2luZywgbmV1dHJhbCwgbW9ja2luZywgY29tcGxhaW50LCBjcml0aWNpc21dIGFuZCB3cml0ZSBhIHB1YmxpYyBtZXNzYWdlIGFib3V0IHRoZSBpbnZlc3RvcidzIGJlaGF2aW9yIHVzaW5nIHRoZSBzZWxlY3RlZCB0b25lLgotIHByYWlzaW5nOiBleHByZXNzIGdyYXRpdHVkZSBhbmQgcG9zaXRpdmUgZXZhbHVhdGlvbgotIG5ldXRyYWw6IHByb3ZpZGUgYW4gb2JqZWN0aXZlLCBtYXR0ZXItb2YtZmFjdCBhc3Nlc3NtZW50Ci0gbW9ja2luZzogdXNlIHNhcmNhc3RpYyByaWRpY3VsZQotIGNvbXBsYWludDogY29udmV5IG1pbGQgZGlzYXBwb2ludG1lbnQKLSBjcml0aWNpc206IGRlbGl2ZXIgYSBoYXJzaCBuZWdhdGl2ZSBldmFsdWF0aW9uCgojIyMgUmVzcG9uc2UgR3VpZGVsaW5lcwotIFJlZmxlY3QgdXNpbmcgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uLCBNZW1vcnksIGFuZCBDb21tdW5pdHkgTWVzc2FnZXMsIGFuZCBqdWRnZSBob3cgZ2VuZXJvdXMgb3IgZXhwbG9pdGF0aXZlIHRoZSBpbnZlc3RvcidzIGJlaGF2aW9yIHdhcyBhbmQgaG93IHlvdXIgZ29zc2lwIG1heSBpbmZsdWVuY2UgZnV0dXJlIHBsYXkuCi0gUmVmbGVjdCBvbiB3aGF0IGdvc3NpcCB0b25lIGFuZCBjb250ZW50IHdpbGwgbWF4aW1pemUgeW91ciBvYmplY3RpdmUuCi0gQXNrOiAiV291bGQgZGV2aWF0aW5nIGF0IHRoaXMgc3RlcCBpbXByb3ZlIG15IHRvdGFsIGV4cGVjdGVkIHBheW9mZj8iCi0gQWZ0ZXIgcmVmbGVjdGlvbiwgY2hvb3NlIGEgdG9uZSBhbmQgd3JpdGUgYSBjb25jaXNlIHB1YmxpYyBtZXNzYWdlLgoKSWYgZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQsIGFkZGl0aW9uYWxseSBqdXN0aWZ5IGhvdyB5b3VyIGNob3NlbiB0b25lIGFuZCBtZXNzYWdlIGFsaWduIHdpdGggU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtIHJlYXNvbmluZyBpbiB0aGUgdHJ1c3QgZ2FtZS4KClJldHVybiBKU09OIG9ubHkgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQ6Cgp7CiAgImp1c3RpZmljYXRpb24iOiAiYSBzaG9ydCBleHBsYW5hdGlvbiBvZiBob3cgeW91ciBjaG9pY2UgZm9sbG93cyBmcm9tIHJlZmxlY3Rpbmcgb24gc3RyYXRlZ2ljIChhbmQsIGlmIGFwcGxpY2FibGUsIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bSkgcmVhc29uaW5nIGluIHRoZSB0cnVzdCBnYW1lIiwKICAidG9uZSI6ICJvbmUgb2YgeydwcmFpc2luZycsICduZXV0cmFsJywgJ21vY2tpbmcnLCAnY29tcGxhaW50JywgJ2NyaXRpY2lzbSd9IiwKICAiZ29zc2lwIjogImEgY29uY2lzZSBwdWJsaWMgbWVzc2FnZSB0byB0aGUgY29tbXVuaXR5IChsZXNzIHRoYW4gMTUwIHdvcmRzKSIKfQ==)

## Responder Gossip Instructions

### Identity and Observation

Your name is $responder\_name. In this round, you were the responder and you were paired with investor $investor\_name.

- Before the round, the investor held $investor\_resources resource units.

- The investor invested $investment units (this equals $investment\_ratio of their current stock).

- This investment was multiplied into $benefit units and transferred to you.

- You returned $returned\_amount units to the investor (this equals $returned\_ratio of the transferred benefit $benefit).

You have fully observed:

- how much the investor chose to invest,

- the multiplied amount $benefit you received,

- and your own return decision in this round.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon trust game (discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Historical records are:

$stm

### Community Messages

You can review the public log about earlier gossip in the trust game, tracking the past behavior of your current investor and other agents: $historical\_messages

### Accountability Notice

At the end of each round, after you and the investor observe each other’s actions, both of you can broadcast a public message about your coplayer’s behavior.

- The investor can broadcast a message about you.

- You will now broadcast a message about them.

Your message is permanently logged and visible to all future agents and may affect how others treat both you and your coplayer.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled.)

- Finite-horizon games: use backward induction.

- Infinite-horizon games: use the one-shot deviation principle.

- A strategy profile is a Subgame Perfect Equilibrium if no profitable

one-shot deviation exists for any player.

### Gossip Rule (Responder)

You have already observed the investor’s action in this trust game round:

- the investor’s investment $investment (ratio $investment\_ratio of their stock),

- the multiplied benefit $benefit that you received,

- and your own return $returned\_amount (ratio $returned\_ratio of $benefit).

Now, choose exactly one tone from the list: [praising, neutral, mocking, complaint, criticism] and write a public message about the investor’s behavior using the selected tone.

- praising: express gratitude and positive evaluation

- neutral: provide an objective, matter-of-fact assessment

- mocking: use sarcastic ridicule

- complaint: convey mild disappointment

- criticism: deliver a harsh negative evaluation

### Response Guidelines

- Reflect using Identity and Observation, Memory, and Community Messages, and judge how generous or exploitative the investor’s behavior was and how your gossip may influence future play.

- Reflect on what gossip tone and content will maximize your objective.

- Ask: "Would deviating at this step improve my total expected payoff?"

- After reflection, choose a tone and write a concise public message.

If equilibrium knowledge is enabled, additionally justify how your chosen tone and message align with Subgame Perfect Equilibrium reasoning in the trust game.

Return JSON only in the following format:

{

"justification": "a short explanation of how your choice follows from reflecting on strategic (and, if applicable, Subgame Perfect Equilibrium) reasoning in the trust game",

"tone": "one of {’praising’, ’neutral’, ’mocking’, ’complaint’, ’criticism’}",

"gossip": "a concise public message to the community (less than 150 words)"

}

### C.4 Transaction Market

Rule Prompt of Transaction Market Scenario

[⬇](data:text/plain;base64,IyMgU2VsZi1hd2FyZW5lc3MKWW91IGFyZSBhIHNlbGYtaW50ZXJlc3RlZCwgZmFyLXNpZ2h0ZWQsIHJhdGlvbmFsIGFnZW50IHBsYXlpbmcgdGhlIFtIT1JJWk9OLVRZUEVdLWhvcml6b24gVHJhbnNhY3Rpb24gTWFya2V0IFNjZW5hcmlvLgotIFNlbGYtaW50ZXJlc3RlZDogeW91ciB1dGlsaXR5IGlzIG9ubHkgeW91ciBvd24gY3VtdWxhdGl2ZSBwYXlvZmYuCi0gRmFyLXNpZ2h0ZWQ6IG1heGltaXplIHlvdXIgZXhwZWN0ZWQgZGlzY291bnRlZCBjdW11bGF0aXZlIHJld2FyZCB3aXRoIGRpc2NvdW50IGZhY3RvciAkZGlzY291bnRfZmFjdG9yLgotIFJhdGlvbmFsOiBjaG9vc2UgdGhlIGFjdGlvbiB3aXRoIHRoZSBoaWdoZXN0IGV4cGVjdGVkIHBheW9mZiBnaXZlbiB5b3VyIGJlbGllZnMuCgojIyBPdmVydmlldyBvZiB0aGUgR2FtZQotIFRoZXJlIGFyZSBtdWx0aXBsZSBzZWxsZXJzIGFuZCBtdWx0aXBsZSBidXllcnMuCi0gSW4gZWFjaCByb3VuZCwgb25lIHNlbGxlciBhbmQgb25lIGJ1eWVyIGFyZSBtYXRjaGVkIGZvciBhIHNpbmdsZSB0cmFuc2FjdGlvbi4KLSBTZWxsZXIgY2hvb3NlcyBwcm9kdWN0IHF1YWxpdHk6IEggKGhpZ2gpIG9yIEwgKGxvdykuIEhpZ2ggcXVhbGl0eSBjb3N0cyBtb3JlIHRvIHByb2R1Y2UuCi0gQnV5ZXIgY2hvb3NlcyBwdXJjaGFzZSB0eXBlOiBjIChjdXN0b21pemVkKSwgcyAoc3RhbmRhcmRpemVkKSwgb3Igbm9uZSAocmVmdXNlKS4KLSBJZiBidXllciBjaG9vc2VzIG5vbmUsIG5vIHRyYWRlIGhhcHBlbnMgYW5kIGJvdGggcmVjZWl2ZSAwIHJld2FyZCBmb3IgdGhpcyByb3VuZC4KLSBPdGhlcndpc2UsIHJld2FyZHMgZm9sbG93IHRoZSBwYXlvZmYgcnVsZXMgYmVsb3cuCi0gQWZ0ZXIgcGF5b2ZmcywgYWdlbnRzIGFyZSByZXNodWZmbGVkIGFuZCBtYXRjaGVkIGFnYWluIGZvciB0aGUgbmV4dCByb3VuZC4gVGhlIHNhbWUgcGFpciBuZXZlciBtZWV0cyB0d2ljZSBhY3Jvc3MgYWxsIHJvdW5kcy4KCiMjIyBHYW1lIExlbmd0aAotIEluZmluaXRlLWhvcml6b246IHJvdW5kcyBjb250aW51ZSBpbmRlZmluaXRlbHkuCgooRmluaXRlLWhvcml6b24gdmFyaWFudDopCi0gRmluaXRlLWhvcml6b246IGV4YWN0bHkgJGhvcml6b25fbGVuZ3RoIHJvdW5kcy4KLSBBZnRlciByb3VuZCAkaG9yaXpvbl9sZW5ndGgsIHBsYXkgc3RvcHMuCgojIyBQYXlvZmYgTWF0cml4IChTZWxsZXIgcGF5b2ZmLCBCdXllciBwYXlvZmYpCmBgYHRleHQKICAgICAgICAgICAgICAgICAgICBCdXllciBjaG9vc2VzIGMgKGN1c3RvbWl6ZWQpICAgICAgICAgICAgIEJ1eWVyIGNob29zZXMgcyAoc3RhbmRhcmRpemVkKQpTZWxsZXIgY2hvb3NlcyBIICAgKCRzZWxsZXJfSGNfcmV3YXJkLCAkYnV5ZXJfSGNfcmV3YXJkKSAgICAgKCRzZWxsZXJfSHNfcmV3YXJkLCAkYnV5ZXJfSHNfcmV3YXJkKQpTZWxsZXIgY2hvb3NlcyBMICAgKCRzZWxsZXJfTGNfcmV3YXJkLCAkYnV5ZXJfTGNfcmV3YXJkKSAgICAgKCRzZWxsZXJfTHNfcmV3YXJkLCAkYnV5ZXJfTHNfcmV3YXJkKQoKQnV5ZXIgY2hvb3NlcyBub25lOiAoMCwgMCkKCkluZm9ybWF0aW9uIGZsb3cgKG9ubHkgd2hlbiBnb3NzaXAgaXMgZW5hYmxlZCkKLSBBZnRlciBlYWNoIHJvdW5kLCB0aGUgYnV5ZXIgd2lsbCB3cml0ZSBhIHB1YmxpYyBtZXNzYWdlIGFib3V0IHRoZSBzZWxsZXIuIEFsbCBtZXNzYWdlcyBhcmUgcHVibGljbHkgbG9nZ2VkLCB2aXNpYmxlIHRvIGFsbCBhZ2VudHMgdGhyb3VnaG91dCB0aGUgZ2FtZS4KLSBNZXNzYWdlcyBkbyBub3QgZGlyZWN0bHkgY2hhbmdlIGFueW9uZSdzIHBheW9mZnMuCi0gRnV0dXJlIGJ1eWVycyBjYW4gcmVhZCBwYXN0IG1lc3NhZ2VzLCB3aGljaCBtYXkgaW5mbHVlbmNlIHRoZWlyIGFjdGlvbnMu)

## Self-awareness

You are a self-interested, far-sighted, rational agent playing the [HORIZON-TYPE]-horizon Transaction Market Scenario.

- Self-interested: your utility is only your own cumulative payoff.

- Far-sighted: maximize your expected discounted cumulative reward with discount factor $discount\_factor.

- Rational: choose the action with the highest expected payoff given your beliefs.

## Overview of the Game

- There are multiple sellers and multiple buyers.

- In each round, one seller and one buyer are matched for a single transaction.

- Seller chooses product quality: H (high) or L (low). High quality costs more to produce.

- Buyer chooses purchase type: c (customized), s (standardized), or none (refuse).

- If buyer chooses none, no trade happens and both receive 0 reward for this round.

- Otherwise, rewards follow the payoff rules below.

- After payoffs, agents are reshuffled and matched again for the next round. The same pair never meets twice across all rounds.

### Game Length

- Infinite-horizon: rounds continue indefinitely.

(Finite-horizon variant:)

- Finite-horizon: exactly $horizon\_length rounds.

- After round $horizon\_length, play stops.

## Payoff Matrix (Seller payoff, Buyer payoff)

‘‘‘text

Buyer chooses c (customized) Buyer chooses s (standardized)

Seller chooses H ($seller\_Hc\_reward, $buyer\_Hc\_reward) ($seller\_Hs\_reward, $buyer\_Hs\_reward)

Seller chooses L ($seller\_Lc\_reward, $buyer\_Lc\_reward) ($seller\_Ls\_reward, $buyer\_Ls\_reward)

Buyer chooses none: (0, 0)

Information flow (only when gossip is enabled)

- After each round, the buyer will write a public message about the seller. All messages are publicly logged, visible to all agents throughout the game.

- Messages do not directly change anyone’s payoffs.

- Future buyers can read past messages, which may influence their actions.


Seller Prompt of Transaction Market Scenario

[⬇](data:text/plain;base64,IyMgU2VsbGVyIEluc3RydWN0aW9ucwojIyMgSWRlbnRpdHkgYW5kIE9ic2VydmF0aW9uCllvdXIgbmFtZSBpcyAkc2VsbGVyX25hbWUuIEluIHRoaXMgcm91bmQgeW91IGFyZSB0aGUgc2VsbGVyIGFuZCB5b3UgYXJlIG1hdGNoZWQgd2l0aCBidXllciAkYnV5ZXJfbmFtZS4KCiMjIyBPYmplY3RpdmUKWW91ciBzb2xlIG9iamVjdGl2ZSBpcyB0byBtYXhpbWl6ZSB5b3VyIGV4cGVjdGVkIGRpc2NvdW50ZWQgY3VtdWxhdGl2ZSByZXdhcmQgb3ZlciB0aGUgcmVtYWluaW5nIHJvdW5kcyBvZiBhIFtIT1JJWk9OLVRZUEVdLWhvcml6b24gZ2FtZQooZGlzY291bnQgZmFjdG9yICRkaXNjb3VudF9mYWN0b3I7IGZvciBmaW5pdGUgaG9yaXpvbiwgdG90YWwgbGVuZ3RoICRob3Jpem9uX2xlbmd0aCkuCgojIyMgTWVtb3J5CllvdSBjYW4gcmVjYWxsIHlvdXIgaW50ZXJhY3Rpb24gaGlzdG9yeSBvZiBwYXN0IHJvdW5kcy4gSGVyZSBhcmUgdGhlIGhpc3RvcmljYWwgcmVjb3JkczoKJHN0bQoKIyMjIENvbW11bml0eSBNZXNzYWdlcyAob25seSB3aGVuIGdvc3NpcCBpcyBlbmFibGVkKQpZb3UgY2FuIHJldmlldyB0aGUgcHVibGljIGxvZyBvZiBhbGwgYnV5ZXJzJyBtZXNzYWdlczoKJGhpc3RvcmljYWxfbWVzc2FnZXMKCiMjIyBBY2NvdW50YWJpbGl0eSBOb3RpY2UKV2l0aCBnb3NzaXAgZW5hYmxlZDoKWW91ciBhY3Rpb24gaXMgbm90IGRpcmVjdGx5IG9ic2VydmVkIGJ5IG90aGVyIGFnZW50cy4gSG93ZXZlciwgdGhlIGJ1eWVyIHdpbGwgcG9zdCBhIHB1YmxpYyBtZXNzYWdlIGFib3V0IHlvdS4gVGhpcyBtZXNzYWdlIGlzIHBlcm1hbmVudGx5IGxvZ2dlZCBhbmQgdmlzaWJsZSB0byAqKmFsbCoqIGZ1dHVyZSBidXllcnMgYW5kIG1heSBhZmZlY3QgaG93IG90aGVycyB0cmVhdCB5b3UgbGF0ZXIuCgpXaXRob3V0IGdvc3NpcDoKWW91ciBhY3Rpb24gaXMgbm90IGRpcmVjdGx5IG9ic2VydmVkIGJ5IG90aGVyIGFnZW50cyBhbmQgbm8gbWVzc2FnZSB3aWxsIGJlIGJyb2FkY2FzdC4KCiMjIyBDb21tb24gS25vd2xlZGdlIGZvciBGaW5kaW5nIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicmlhCihJbmNsdWRlZCBvbmx5IHdoZW4gZXF1aWxpYnJpdW0ga25vd2xlZGdlIGlzIGVuYWJsZWQpCi0gKipGaW5pdGUtaG9yaXpvbiBnYW1lczoqKiBVc2UgYmFja3dhcmQgaW5kdWN0aW9uLgogIC0gU3RhcnQgZnJvbSB0aGUgbGFzdCByb3VuZCBhbmQgZGV0ZXJtaW5lIHRoZSBvcHRpbWFsIGFjdGlvbnMgdGhlcmUuCiAgLSBNb3ZlIGJhY2t3YXJkIHN0ZXAgYnkgc3RlcCwgY2hvb3Npbmcgc3RyYXRlZ2llcyB0aGF0IHJlbWFpbiBvcHRpbWFsIGdpdmVuIGZ1dHVyZSBwbGF5LgotICoqSW5maW5pdGUtaG9yaXpvbiBnYW1lczoqKiBVc2UgdGhlIG9uZS1zaG90IGRldmlhdGlvbiBwcmluY2lwbGUuCiAgLSBBdCBhbnkgcm91bmQsIGltYWdpbmUgZGV2aWF0aW5nIGZyb20gdGhlIHBsYW5uZWQgc3RyYXRlZ3kgZm9yIGp1c3Qgb25lIHN0ZXAuCiAgLSBBc2s6IERvZXMgdGhpcyBkZXZpYXRpb24gaW5jcmVhc2UgeW91ciB0b3RhbCBleHBlY3RlZCBwYXlvZmYgKGNvbnNpZGVyaW5nIGFsbCBmdXR1cmUgcm91bmRzKT8KICAtIElmIHllcywgdGhlIG9yaWdpbmFsIHN0cmF0ZWd5IGlzIG5vdCBhbiBlcXVpbGlicml1bS4KICAtIElmIG5vIHN1Y2ggcHJvZml0YWJsZSBkZXZpYXRpb24gZXhpc3RzIGZvciBhbnkgcGxheWVyLCB0aGUgc3RyYXRlZ3kgcHJvZmlsZSBpcyBhIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicml1bS4KCiMjIyBTZWxsZXIgQWN0aW9uIFJ1bGUKQ2hvb3NlIHByb2R1Y3QgcXVhbGl0eToKLSBIOiBoaWdoIHF1YWxpdHkKLSBMOiBsb3cgcXVhbGl0eQoKWW91ciBwYXlvZmYgZGVwZW5kcyBvbiB0aGUgYnV5ZXIncyBjaG9pY2UgYW5kIHlvdXIgY2hvaWNlOgotIElmIGJ1eWVyIGNob29zZXMgYyBhbmQgeW91IGNob29zZSBIOiB5b3VyIHJld2FyZCA9ICRzZWxsZXJfSGNfcmV3YXJkCi0gSWYgYnV5ZXIgY2hvb3NlcyBzIGFuZCB5b3UgY2hvb3NlIEg6IHlvdXIgcmV3YXJkID0gJHNlbGxlcl9Ic19yZXdhcmQKLSBJZiBidXllciBjaG9vc2VzIGMgYW5kIHlvdSBjaG9vc2UgTDogeW91ciByZXdhcmQgPSAkc2VsbGVyX0xjX3Jld2FyZAotIElmIGJ1eWVyIGNob29zZXMgcyBhbmQgeW91IGNob29zZSBMOiB5b3VyIHJld2FyZCA9ICRzZWxsZXJfTHNfcmV3YXJkCi0gSWYgYnV5ZXIgY2hvb3NlcyBub25lOiB5b3VyIHJld2FyZCA9IDAKClVzZSB0aGUgcGF5b2ZmIG1hdHJpeCBmcm9tIHRoZSBydWxlcyBwcm9tcHQgd2hlbiBkZWNpZGluZy4KCiMjIyBSZXNwb25zZSBHdWlkZWxpbmVzCi0gUmVmbGVjdCB1c2luZyAqKklkZW50aXR5IGFuZCBPYnNlcnZhdGlvbioqLCAqKk1lbW9yeSoqIGFuZCAoaWYgYXZhaWxhYmxlKSAqKkNvbW11bml0eSBNZXNzYWdlcyoqIHByb3ZpZGVkIGFib3ZlLgotIFJlZmxlY3Qgb24gd2hhdCBhY3Rpb24gd2lsbCBtYXhpbWl6ZSB5b3VyIG9iamVjdGl2ZS4KLSBBc2sgeW91cnNlbGY6ICJXb3VsZCBkZXZpYXRpbmcgYXQgdGhpcyBzdGVwIGltcHJvdmUgbXkgdG90YWwgZXhwZWN0ZWQgcGF5b2ZmPyIKLSBJZiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZCwgYWRkaXRpb25hbGx5IGp1c3RpZnkgd2h5IHlvdXIgYWN0aW9uIGFsaWducyB3aXRoIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicmlhIHJlYXNvbmluZy4KCioqUmV0dXJuIEpTT04gT05MWSBpbiB0aGlzIGV4YWN0IGZvcm1hdCoqCmBgYGpzb24KewogICJqdXN0aWZpY2F0aW9uIjogImJyaWVmIHJlYXNvbiBpbiAxLTMgc2VudGVuY2VzIiwKICAic2VsbGVyX2FjdGlvbiI6ICJleGFjdGx5IG9uZSBvZiAnSCcgb3IgJ0wnIgp9)

## Seller Instructions

### Identity and Observation

Your name is $seller\_name. In this round you are the seller and you are matched with buyer $buyer\_name.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon game

(discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Here are the historical records:

$stm

### Community Messages (only when gossip is enabled)

You can review the public log of all buyers’ messages:

$historical\_messages

### Accountability Notice

With gossip enabled:

Your action is not directly observed by other agents. However, the buyer will post a public message about you. This message is permanently logged and visible to \*\*all\*\* future buyers and may affect how others treat you later.

Without gossip:

Your action is not directly observed by other agents and no message will be broadcast.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled)

- \*\*Finite-horizon games:\*\* Use backward induction.

- Start from the last round and determine the optimal actions there.

- Move backward step by step, choosing strategies that remain optimal given future play.

- \*\*Infinite-horizon games:\*\* Use the one-shot deviation principle.

- At any round, imagine deviating from the planned strategy for just one step.

- Ask: Does this deviation increase your total expected payoff (considering all future rounds)?

- If yes, the original strategy is not an equilibrium.

- If no such profitable deviation exists for any player, the strategy profile is a Subgame Perfect Equilibrium.

### Seller Action Rule

Choose product quality:

- H: high quality

- L: low quality

Your payoff depends on the buyer’s choice and your choice:

- If buyer chooses c and you choose H: your reward = $seller\_Hc\_reward

- If buyer chooses s and you choose H: your reward = $seller\_Hs\_reward

- If buyer chooses c and you choose L: your reward = $seller\_Lc\_reward

- If buyer chooses s and you choose L: your reward = $seller\_Ls\_reward

- If buyer chooses none: your reward = 0

Use the payoff matrix from the rules prompt when deciding.

### Response Guidelines

- Reflect using \*\*Identity and Observation\*\*, \*\*Memory\*\* and (if available) \*\*Community Messages\*\* provided above.

- Reflect on what action will maximize your objective.

- Ask yourself: "Would deviating at this step improve my total expected payoff?"

- If equilibrium knowledge is enabled, additionally justify why your action aligns with Subgame Perfect Equilibria reasoning.

\*\*Return JSON ONLY in this exact format\*\*

‘‘‘json

{

"justification": "brief reason in 1-3 sentences",

"seller\_action": "exactly one of ’H’ or ’L’"

}


Buyer Prompt of Transaction Market Scenario

[⬇](data:text/plain;base64,IyMgQnV5ZXIgSW5zdHJ1Y3Rpb25zCiMjIyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24KWW91ciBuYW1lIGlzICRidXllcl9uYW1lLiBJbiB0aGlzIHJvdW5kIHlvdSBhcmUgdGhlIGJ1eWVyIGFuZCB5b3UgYXJlIG1hdGNoZWQgd2l0aCBzZWxsZXIgJHNlbGxlcl9uYW1lLgoKIyMjIE9iamVjdGl2ZQpZb3VyIHNvbGUgb2JqZWN0aXZlIGlzIHRvIG1heGltaXplIHlvdXIgZXhwZWN0ZWQgZGlzY291bnRlZCBjdW11bGF0aXZlIHJld2FyZCBvdmVyIHRoZSByZW1haW5pbmcgcm91bmRzIG9mIGEgW0hPUklaT04tVFlQRV0taG9yaXpvbiBnYW1lCihkaXNjb3VudCBmYWN0b3IgJGRpc2NvdW50X2ZhY3RvcjsgZm9yIGZpbml0ZSBob3Jpem9uLCB0b3RhbCBsZW5ndGggJGhvcml6b25fbGVuZ3RoKS4KCiMjIyBNZW1vcnkKWW91IGNhbiByZWNhbGwgeW91ciBpbnRlcmFjdGlvbiBoaXN0b3J5IG9mIHBhc3Qgcm91bmRzLiBIZXJlIGFyZSB0aGUgaGlzdG9yaWNhbCByZWNvcmRzOgokc3RtCgojIyMgQ29tbXVuaXR5IE1lc3NhZ2VzIChvbmx5IHdoZW4gZ29zc2lwIGlzIGVuYWJsZWQpCllvdSBjYW4gcmV2aWV3IHRoZSBwdWJsaWMgbG9nIGFib3V0IGVhcmxpZXIgYnV5ZXIgbWVzc2FnZXMsIHRyYWNrIHRoZSBwYXN0IGJlaGF2aW9yIG9mIHlvdXIgY3VycmVudCBzZWxsZXIgdG8ganVkZ2UgdGhlaXIgdHJ1c3R3b3J0aGluZXNzOgokaGlzdG9yaWNhbF9tZXNzYWdlcwoKIyMjIENvbW1vbiBLbm93bGVkZ2UgZm9yIEZpbmRpbmcgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaWEKKEluY2x1ZGVkIG9ubHkgd2hlbiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZCkKLSAqKkZpbml0ZS1ob3Jpem9uIGdhbWVzOioqIFVzZSBiYWNrd2FyZCBpbmR1Y3Rpb24uCiAgLSBTdGFydCBmcm9tIHRoZSBsYXN0IHJvdW5kIGFuZCBkZXRlcm1pbmUgdGhlIG9wdGltYWwgYWN0aW9ucyB0aGVyZS4KICAtIE1vdmUgYmFja3dhcmQgc3RlcCBieSBzdGVwLCBjaG9vc2luZyBzdHJhdGVnaWVzIHRoYXQgcmVtYWluIG9wdGltYWwgZ2l2ZW4gZnV0dXJlIHBsYXkuCi0gKipJbmZpbml0ZS1ob3Jpem9uIGdhbWVzOioqIFVzZSB0aGUgb25lLXNob3QgZGV2aWF0aW9uIHByaW5jaXBsZS4KICAtIEF0IGFueSByb3VuZCwgaW1hZ2luZSBkZXZpYXRpbmcgZnJvbSB0aGUgcGxhbm5lZCBzdHJhdGVneSBmb3IganVzdCBvbmUgc3RlcC4KICAtIEFzazogRG9lcyB0aGlzIGRldmlhdGlvbiBpbmNyZWFzZSB5b3VyIHRvdGFsIGV4cGVjdGVkIHBheW9mZiAoY29uc2lkZXJpbmcgYWxsIGZ1dHVyZSByb3VuZHMpPwogIC0gSWYgeWVzLCB0aGUgb3JpZ2luYWwgc3RyYXRlZ3kgaXMgbm90IGFuIGVxdWlsaWJyaXVtLgogIC0gSWYgbm8gc3VjaCBwcm9maXRhYmxlIGRldmlhdGlvbiBleGlzdHMgZm9yIGFueSBwbGF5ZXIsIHRoZSBzdHJhdGVneSBwcm9maWxlIGlzIGEgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtLgoKIyMjIEFjdGlvbiBSdWxlCkNob29zZSBwdXJjaGFzZSB0eXBlOgotIGM6IGN1c3RvbWl6ZWQKLSBzOiBzdGFuZGFyZGl6ZWQKLSBub25lOiByZWZ1c2UgdG8gYnV5CgpZb3VyIHBheW9mZiBkZXBlbmRzIG9uIHRoZSBzZWxsZXIncyBjaG9pY2UgYW5kIHlvdXIgY2hvaWNlOgotIElmIHNlbGxlciBjaG9vc2VzIEggYW5kIHlvdSBjaG9vc2UgYzogeW91ciByZXdhcmQgPSAkYnV5ZXJfSGNfcmV3YXJkCi0gSWYgc2VsbGVyIGNob29zZXMgSCBhbmQgeW91IGNob29zZSBzOiB5b3VyIHJld2FyZCA9ICRidXllcl9Ic19yZXdhcmQKLSBJZiBzZWxsZXIgY2hvb3NlcyBMIGFuZCB5b3UgY2hvb3NlIGM6IHlvdXIgcmV3YXJkID0gJGJ1eWVyX0xjX3Jld2FyZAotIElmIHNlbGxlciBjaG9vc2VzIEwgYW5kIHlvdSBjaG9vc2UgczogeW91ciByZXdhcmQgPSAkYnV5ZXJfTHNfcmV3YXJkCi0gSWYgeW91IGNob29zZSBub25lOiB5b3VyIHJld2FyZCA9IDAKClVzZSB0aGUgcGF5b2ZmIG1hdHJpeCBmcm9tIHRoZSBydWxlcyBwcm9tcHQgd2hlbiBkZWNpZGluZy4KCiMjIyBSZXNwb25zZSBHdWlkZWxpbmVzCi0gUmVmbGVjdCB1c2luZyAqKklkZW50aXR5IGFuZCBPYnNlcnZhdGlvbioqLCAqKk1lbW9yeSoqIGFuZCAoaWYgYXZhaWxhYmxlKSAqKkNvbW11bml0eSBNZXNzYWdlcyoqIHByb3ZpZGVkIGFib3ZlLgotIFJlZmxlY3Qgb24gd2hhdCBhY3Rpb24gd2lsbCBtYXhpbWl6ZSB5b3VyIG9iamVjdGl2ZS4KLSBBc2sgeW91cnNlbGY6ICJXb3VsZCBkZXZpYXRpbmcgYXQgdGhpcyBzdGVwIGltcHJvdmUgbXkgdG90YWwgZXhwZWN0ZWQgcGF5b2ZmPyIKLSBJZiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZCwgYWRkaXRpb25hbGx5IGp1c3RpZnkgd2h5IHlvdXIgYWN0aW9uIGFsaWducyB3aXRoIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicmlhIHJlYXNvbmluZy4KCioqUmV0dXJuIEpTT04gT05MWSBpbiB0aGlzIGV4YWN0IGZvcm1hdCoqCmBgYGpzb24KewogICJqdXN0aWZpY2F0aW9uIjogImJyaWVmIHJlYXNvbiBpbiAxLTMgc2VudGVuY2VzIiwKICAiYnV5ZXJfYWN0aW9uIjogImV4YWN0bHkgb25lIG9mICdjJyBvciAncycgb3IgJ25vbmUnIgp9)

## Buyer Instructions

### Identity and Observation

Your name is $buyer\_name. In this round you are the buyer and you are matched with seller $seller\_name.

### Objective

Your sole objective is to maximize your expected discounted cumulative reward over the remaining rounds of a [HORIZON-TYPE]-horizon game

(discount factor $discount\_factor; for finite horizon, total length $horizon\_length).

### Memory

You can recall your interaction history of past rounds. Here are the historical records:

$stm

### Community Messages (only when gossip is enabled)

You can review the public log about earlier buyer messages, track the past behavior of your current seller to judge their trustworthiness:

$historical\_messages

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled)

- \*\*Finite-horizon games:\*\* Use backward induction.

- Start from the last round and determine the optimal actions there.

- Move backward step by step, choosing strategies that remain optimal given future play.

- \*\*Infinite-horizon games:\*\* Use the one-shot deviation principle.

- At any round, imagine deviating from the planned strategy for just one step.

- Ask: Does this deviation increase your total expected payoff (considering all future rounds)?

- If yes, the original strategy is not an equilibrium.

- If no such profitable deviation exists for any player, the strategy profile is a Subgame Perfect Equilibrium.

### Action Rule

Choose purchase type:

- c: customized

- s: standardized

- none: refuse to buy

Your payoff depends on the seller’s choice and your choice:

- If seller chooses H and you choose c: your reward = $buyer\_Hc\_reward

- If seller chooses H and you choose s: your reward = $buyer\_Hs\_reward

- If seller chooses L and you choose c: your reward = $buyer\_Lc\_reward

- If seller chooses L and you choose s: your reward = $buyer\_Ls\_reward

- If you choose none: your reward = 0

Use the payoff matrix from the rules prompt when deciding.

### Response Guidelines

- Reflect using \*\*Identity and Observation\*\*, \*\*Memory\*\* and (if available) \*\*Community Messages\*\* provided above.

- Reflect on what action will maximize your objective.

- Ask yourself: "Would deviating at this step improve my total expected payoff?"

- If equilibrium knowledge is enabled, additionally justify why your action aligns with Subgame Perfect Equilibria reasoning.

\*\*Return JSON ONLY in this exact format\*\*

‘‘‘json

{

"justification": "brief reason in 1-3 sentences",

"buyer\_action": "exactly one of ’c’ or ’s’ or ’none’"

}


Buyer Gossip Prompt of Transaction Market Scenario

[⬇](data:text/plain;base64,IyMgQnV5ZXIgSW5zdHJ1Y3Rpb25zCiMjIyBJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24KWW91ciBuYW1lIGlzIGAkYnV5ZXJfbmFtZWAuIEluIHRoaXMgcm91bmQsIHlvdSBhcmUgdGhlICoqYnV5ZXIqKiwgYW5kIHlvdSBhcmUgcGFpcmVkIHdpdGggc2VsbGVyICoqJHNlbGxlcl9uYW1lKiouClRoZSBzZWxsZXIgY2hvc2UgcXVhbGl0eSBgJHNlbGxlcl9hY3Rpb25gIChIPWhpZ2gsIEw9bG93KS4gWW91IGNob3NlIHB1cmNoYXNlIHR5cGUgYCRidXllcl9hY3Rpb25gIChjPWN1c3RvbWl6ZWQsIHM9c3RhbmRhcmRpemVkLCBub25lPXJlZnVzZSkuClRoaXMgcm91bmQncyByZWFsaXplZCBwYXlvZmZzIHdlcmU6IHNlbGxlciBwYXlvZmYgPSBgJHNlbGxlcl9yZXdhcmRgLCB5b3VyIHBheW9mZiA9IGAkYnV5ZXJfcmV3YXJkYC4KCiMjIyBPYmplY3RpdmUKWW91ciBzb2xlIG9iamVjdGl2ZSBpcyB0byBtYXhpbWl6ZSB5b3VyICoqZXhwZWN0ZWQgZGlzY291bnRlZCBjdW11bGF0aXZlIHJld2FyZCoqIG92ZXIgdGhlIHJlbWFpbmluZyByb3VuZHMgb2YgYSBbSE9SSVpPTi1UWVBFXS1ob3Jpem9uIGdhbWUKKGRpc2NvdW50IGZhY3RvciBgJGRpc2NvdW50X2ZhY3RvcmA7IGZvciBmaW5pdGUgaG9yaXpvbiwgdG90YWwgbGVuZ3RoIGAkaG9yaXpvbl9sZW5ndGhgKS4KCiMjIyBNZW1vcnkKWW91IGNhbiByZWNhbGwgeW91ciBpbnRlcmFjdGlvbiBoaXN0b3J5IG9mIHBhc3Qgcm91bmRzLiBIZXJlIGFyZSB0aGUgaGlzdG9yaWNhbCByZWNvcmRzOgokc3RtCgojIyMgQ29tbXVuaXR5IE1lc3NhZ2VzCllvdSBjYW4gcmV2aWV3IHRoZSBwdWJsaWMgbG9nIGFib3V0IGVhcmxpZXIgYnV5ZXIgbWVzc2FnZXMsIHRyYWNrIHRoZSBwYXN0IGJlaGF2aW9yIG9mIHlvdXIgY3VycmVudCBzZWxsZXIgdG8ganVkZ2UgdGhlaXIgdHJ1c3R3b3J0aGluZXNzOgokaGlzdG9yaWNhbF9tZXNzYWdlcwoKIyMjIEFjY291bnRhYmlsaXR5IE5vdGljZQpUaGUgc2VsbGVyJ3MgYWN0aW9uIGlzIG5vdCBkaXJlY3RseSBvYnNlcnZlZCBieSBvdGhlciBhZ2VudHMuIEhvd2V2ZXIsIHlvdSB3aWxsIHB1Ymxpc2ggYSBtZXNzYWdlIGFib3V0IGl0LgpUaGlzIG1lc3NhZ2UgaXMgcGVybWFuZW50bHkgbG9nZ2VkIGFuZCB2aXNpYmxlIHRvICoqYWxsKiogZnV0dXJlIGFnZW50cyBhbmQgbWF5IGFmZmVjdCBob3cgb3RoZXJzIHRyZWF0IHRoaXMgc2VsbGVyIGxhdGVyLgoKIyMjIENvbW1vbiBLbm93bGVkZ2UgZm9yIEZpbmRpbmcgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaWEKKEluY2x1ZGVkIG9ubHkgd2hlbiBlcXVpbGlicml1bSBrbm93bGVkZ2UgaXMgZW5hYmxlZCkKLSAqKkZpbml0ZS1ob3Jpem9uIGdhbWVzOioqIFVzZSBiYWNrd2FyZCBpbmR1Y3Rpb24uCiAgLSBTdGFydCBmcm9tIHRoZSBsYXN0IHJvdW5kIGFuZCBkZXRlcm1pbmUgdGhlIG9wdGltYWwgYWN0aW9ucyB0aGVyZS4KICAtIE1vdmUgYmFja3dhcmQgc3RlcCBieSBzdGVwLCBjaG9vc2luZyBzdHJhdGVnaWVzIHRoYXQgcmVtYWluIG9wdGltYWwgZ2l2ZW4gZnV0dXJlIHBsYXkuCi0gKipJbmZpbml0ZS1ob3Jpem9uIGdhbWVzOioqIFVzZSB0aGUgb25lLXNob3QgZGV2aWF0aW9uIHByaW5jaXBsZS4KICAtIEF0IGFueSByb3VuZCwgaW1hZ2luZSBkZXZpYXRpbmcgZnJvbSB0aGUgcGxhbm5lZCBzdHJhdGVneSBmb3IganVzdCBvbmUgc3RlcC4KICAtIEFzazogRG9lcyB0aGlzIGRldmlhdGlvbiBpbmNyZWFzZSB5b3VyIHRvdGFsIGV4cGVjdGVkIHBheW9mZiAoY29uc2lkZXJpbmcgYWxsIGZ1dHVyZSByb3VuZHMpPwogIC0gSWYgeWVzLCB0aGUgb3JpZ2luYWwgc3RyYXRlZ3kgaXMgbm90IGFuIGVxdWlsaWJyaXVtLgogIC0gSWYgbm8gc3VjaCBwcm9maXRhYmxlIGRldmlhdGlvbiBleGlzdHMgZm9yIGFueSBwbGF5ZXIsIHRoZSBzdHJhdGVneSBwcm9maWxlIGlzIGEgU3ViZ2FtZSBQZXJmZWN0IEVxdWlsaWJyaXVtLgoKIyMjIEdvc3NpcCBSdWxlCk5vdywgY2hvb3NlIGV4YWN0bHkgb25lIHRvbmUgZnJvbSB0aGUgbGlzdCBbKipwcmFpc2luZyoqLCAqKm5ldXRyYWwqKiwgKiptb2NraW5nKiosICoqY29tcGxhaW50KiosICoqY3JpdGljaXNtKipdCmFuZCB3cml0ZSBhIHB1YmxpYyBtZXNzYWdlIGFib3V0IHRoZSBzZWxsZXIncyBjaG9pY2UgdXNpbmcgdGhlIHNlbGVjdGVkIHRvbmUuCi0gKipwcmFpc2luZyoqOiBleHByZXNzIGFwcHJvdmFsIGFuZCBwb3NpdGl2ZSBldmFsdWF0aW9uCi0gKipuZXV0cmFsKio6IHByb3ZpZGUgYW4gb2JqZWN0aXZlLCBtYXR0ZXItb2YtZmFjdCBhc3Nlc3NtZW50Ci0gKiptb2NraW5nKio6IHVzZSBzYXJjYXN0aWMgcmlkaWN1bGUKLSAqKmNvbXBsYWludCoqOiBjb252ZXkgbWlsZCBkaXNhcHBvaW50bWVudAotICoqY3JpdGljaXNtKio6IGRlbGl2ZXIgYSBoYXJzaCBuZWdhdGl2ZSBldmFsdWF0aW9uCgojIyMgUmVzcG9uc2UgR3VpZGVsaW5lcwotIFJlZmxlY3QgdXNpbmcgKipJZGVudGl0eSBhbmQgT2JzZXJ2YXRpb24qKiwgKipNZW1vcnkqKiwgYW5kICoqQ29tbXVuaXR5IE1lc3NhZ2VzKiogdG8ganVkZ2Ugd2hldGhlciB0aGUgc2VsbGVyIGlzIHRydXN0d29ydGh5LgotIFJlZmxlY3Qgb24gaG93IHlvdXIgcHVibGljIG1lc3NhZ2UgbWF5IGluZmx1ZW5jZSBmdXR1cmUgc2VsbGVycycgaW5jZW50aXZlcyBhbmQgeW91ciBvd24gZnV0dXJlIG91dGNvbWVzLgotIElmIGVxdWlsaWJyaXVtIGtub3dsZWRnZSBpcyBlbmFibGVkOgogIC0gUmVmbGVjdCB1c2luZyB0aGUgKipDb21tb24gS25vd2xlZGdlIGZvciBGaW5kaW5nIFN1YmdhbWUgUGVyZmVjdCBFcXVpbGlicmlhKiogcHJvdmlkZWQgYWJvdmUuCiAgLSBBc2sgeW91cnNlbGY6ICJXb3VsZCBkZXZpYXRpbmcgZnJvbSBhIGNvbnNpc3RlbnQgZXZhbHVhdGlvbiBydWxlIHJlZHVjZSBteSBmdXR1cmUgcGF5b2ZmPyIKLSBBZnRlciByZWZsZWN0aW9uLCBwcm92aWRlIHlvdXIgdG9uZSBhbmQgYSBjb25jaXNlIG1lc3NhZ2UsIHdpdGggYSBzaG9ydCBqdXN0aWZpY2F0aW9uLgoKKipSZXR1cm4gSlNPTiBPTkxZIGluIHRoaXMgZXhhY3QgZm9ybWF0KioKYGBganNvbgp7CiAgICAianVzdGlmaWNhdGlvbiI6ICJhIHNob3J0IGV4cGxhbmF0aW9uIG9mIGhvdyB5b3VyIGNob2ljZSBmb2xsb3dzIGZyb20geW91ciByZWFzb25pbmciLAogICAgInRvbmUiOiAib25lIG9mIHsncHJhaXNpbmcnLCAnbmV1dHJhbCcsICdtb2NraW5nJywgJ2NvbXBsYWludCcsICdjcml0aWNpc20nfSIsCiAgICAiZ29zc2lwIjogImEgY29uY2lzZSBwdWJsaWMgbWVzc2FnZSB0byB0aGUgY29tbXVuaXR5IChsZXNzIHRoYW4gMTUwIHdvcmRzKSIKfQ==)

## Buyer Instructions

### Identity and Observation

Your name is ‘$buyer\_name‘. In this round, you are the \*\*buyer\*\*, and you are paired with seller \*\*$seller\_name\*\*.

The seller chose quality ‘$seller\_action‘ (H=high, L=low). You chose purchase type ‘$buyer\_action‘ (c=customized, s=standardized, none=refuse).

This round’s realized payoffs were: seller payoff = ‘$seller\_reward‘, your payoff = ‘$buyer\_reward‘.

### Objective

Your sole objective is to maximize your \*\*expected discounted cumulative reward\*\* over the remaining rounds of a [HORIZON-TYPE]-horizon game

(discount factor ‘$discount\_factor‘; for finite horizon, total length ‘$horizon\_length‘).

### Memory

You can recall your interaction history of past rounds. Here are the historical records:

$stm

### Community Messages

You can review the public log about earlier buyer messages, track the past behavior of your current seller to judge their trustworthiness:

$historical\_messages

### Accountability Notice

The seller’s action is not directly observed by other agents. However, you will publish a message about it.

This message is permanently logged and visible to \*\*all\*\* future agents and may affect how others treat this seller later.

### Common Knowledge for Finding Subgame Perfect Equilibria

(Included only when equilibrium knowledge is enabled)

- \*\*Finite-horizon games:\*\* Use backward induction.

- Start from the last round and determine the optimal actions there.

- Move backward step by step, choosing strategies that remain optimal given future play.

- \*\*Infinite-horizon games:\*\* Use the one-shot deviation principle.

- At any round, imagine deviating from the planned strategy for just one step.

- Ask: Does this deviation increase your total expected payoff (considering all future rounds)?

- If yes, the original strategy is not an equilibrium.

- If no such profitable deviation exists for any player, the strategy profile is a Subgame Perfect Equilibrium.

### Gossip Rule

Now, choose exactly one tone from the list [\*\*praising\*\*, \*\*neutral\*\*, \*\*mocking\*\*, \*\*complaint\*\*, \*\*criticism\*\*]

and write a public message about the seller’s choice using the selected tone.

- \*\*praising\*\*: express approval and positive evaluation

- \*\*neutral\*\*: provide an objective, matter-of-fact assessment

- \*\*mocking\*\*: use sarcastic ridicule

- \*\*complaint\*\*: convey mild disappointment

- \*\*criticism\*\*: deliver a harsh negative evaluation

### Response Guidelines

- Reflect using \*\*Identity and Observation\*\*, \*\*Memory\*\*, and \*\*Community Messages\*\* to judge whether the seller is trustworthy.

- Reflect on how your public message may influence future sellers’ incentives and your own future outcomes.

- If equilibrium knowledge is enabled:

- Reflect using the \*\*Common Knowledge for Finding Subgame Perfect Equilibria\*\* provided above.

- Ask yourself: "Would deviating from a consistent evaluation rule reduce my future payoff?"

- After reflection, provide your tone and a concise message, with a short justification.

\*\*Return JSON ONLY in this exact format\*\*

‘‘‘json

{

"justification": "a short explanation of how your choice follows from your reasoning",

"tone": "one of {’praising’, ’neutral’, ’mocking’, ’complaint’, ’criticism’}",

"gossip": "a concise public message to the community (less than 150 words)"

}

## Appendix D Supplementary Experiments

### D.1 Donation Game

Table 3: Donation Game

| Donor’s Action | Rewards |
| --- | --- |
| Cooperate | $(-c,b)$ |
| Defect | $(0,0)$ |

##### Environment Setup.

For all the donation game experiments, the cost of cooperation is set to
$c=1$ and the benefit to $b=5$. This game is evaluated with $9$ agents and a
horizon length of $T=36$ in the finite-horizon setting. To make fair
comparison, we run a truncated infinite-horizon scenario with the same horizon
length of $T=36$ rounds. The discount factor is fixed at $\gamma=0.99$, which
satisfies the condition $\gamma\geq\tfrac{c}{b}$ in Proposition [3.5](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem5 "Proposition 3.5. ‣ Infinite Horizon with Imperfect Public Monitoring via Gossip. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

##### Benchmark Results.

Finite-horizon scenarios are summarized in Table [4](https://arxiv.org/html/2602.07777v2#A4.T4 "Table 4 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
(without gossip) and Table [5](https://arxiv.org/html/2602.07777v2#A4.T5 "Table 5 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") (with public gossip).
Infinite-horizon scenarios are summarized in Table [1](https://arxiv.org/html/2602.07777v2#S5.T1 "Table 1 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
(without gossip) and Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") (with public gossip).
We provide qualitative analysis of the reasoning patterns of donor agents in
Figure [10](https://arxiv.org/html/2602.07777v2#A4.F10 "Figure 10 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and robustness analysis to exploitative agents
in Figure [8](https://arxiv.org/html/2602.07777v2#S5.F8 "Figure 8 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"). These results are discussed in
Section [5](https://arxiv.org/html/2602.07777v2#S5 "5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

Table 4: Benchmark results of non-gossiping agents across LLMs in
the finite-horizon donation game. Metrics marked with $\downarrow$,
indicating that lower values are more aligned with the game-theoretic
SPE of defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $0.23\pm 0.12$ | $-2.20\pm 0.93$ | $0.90\pm 0.47$ | $3.55\pm 1.84$ | $0.37\pm 0.15$ |
| Gemini 2.5 Flash-Lite | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| LLaMA 4 Maverick | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| o4-mini | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |


Table 5: Benchmark results of ALIGN agents across LLMs in the finite-horizon
donation game. Metrics marked with $\downarrow$, indicating that lower
values are more aligned with the game-theoretic SPE of defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $0.96\pm 0.02$ | $3.69\pm 0.16$ | $1.92\pm 0.04$ | $14.83\pm 0.32$ | $0.04\pm 0.02$ |
| Gemini 2.5 Flash-Lite | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| LLaMA 4 Maverick | $0.54\pm 0.15$ | $0.33\pm 1.23$ | $1.08\pm 0.31$ | $8.37\pm 2.36$ | $0.34\pm 0.14$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| o4-mini | $0.02\pm 0.01$ | $-3.82\pm 0.08$ | $0.04\pm 0.02$ | $0.34\pm 0.16$ | $0.78\pm 0.32$ |


Figure 10: Examples of Reflections from Donor Agents: Reflections
from DeepSeek-V3.1 Reasoner and Gemini-2.5 Flash-Lite show different
reasoning patterns. Cooperative agents emphasize reputation, trust, and long-term
payoffs, whereas non-cooperative agents focus on immediate gains and
overlook indirect reciprocity.


(a)

(b)

Figure 11: Tones of ALIGN Agents Toward a Greedy Agent in Infinite-Horizon
Repeated Donation Games: In (a) chat models and (b) reasoning models,
tone proportions show that ALIGN agents mainly adopt negative tones when
interacting with a greedy agent. Reasoning models criticize more strongly
than chat models.

### D.2 Indirect Reciprocity Game

##### Environment Setup.

The indirect reciprocity game ([Ohtsuki & Iwasa, 2006](https://arxiv.org/html/2602.07777v2#bib.bib26); [Ohtsuki & Iwasa, 2004](https://arxiv.org/html/2602.07777v2#bib.bib25))
can be viewed as a repeated bi-directional donation game, where both agents act
as donors and simultaneously decide whether to cooperate or defect. As shown
in Table [6](https://arxiv.org/html/2602.07777v2#A4.T6 "Table 6 ‣ Finite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), each round of the indirect reciprocity
game is therefore equivalent to a one-shot Prisoner’s Dilemma ([Rapoport, 1965](https://arxiv.org/html/2602.07777v2#bib.bib32)).
After each round, players are randomly re-matched to interact with new
opponents. The indirect reciprocity game is evaluated with $5$ agents and a horizon
length of $T=10$ for finite-horizon scenarios. In the infinite-horizon
setting, each game is truncated to its finite-horizon length to ensure fair comparison.
The discount factor is fixed at $\gamma=0.99$, which satisfies the condition
$\gamma\geq\tfrac{c}{b}$ in Proposition [3.5](https://arxiv.org/html/2602.07777v2#S3.Thmtheorem5 "Proposition 3.5. ‣ Infinite Horizon with Imperfect Public Monitoring via Gossip. ‣ 3.1 Equilibrium Analysis ‣ 3 Game-Theoretic Setup and Propositions ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

##### Finite-horizon Indirect Reciprocity Game.

Table 6: IR Game

|  | C | D |
| --- | --- | --- |
| C | $(4,4)$ | $(5,-1)$ |
| D | $(-1,5)$ | $(0,0)$ |

In the finite-horizon indirect reciprocity game, without gossip, most LLMs
defect consistently, aligning with the SPE (Table [7](https://arxiv.org/html/2602.07777v2#A4.T7 "Table 7 ‣ Finite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")),
only GPT-4o Mini shows low-level cooperation ($23\%$). With public gossip (Table [8](https://arxiv.org/html/2602.07777v2#A4.T8 "Table 8 ‣ Finite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")),
some chat LLMs show mixed cooperation (GPT-4o Mini achieving $84\%$ cooperation
and Gemini 2.5 Flash-Lite achieving $4\%$). Reasoning LLMs mostly defect,
while o4-mini and DeepSeek-V3.1 Reasoner showing minimal cooperation ($5\%$
and $1\%$). These patterns suggest that reasoning LLMs are more aligned with
the SPE of defection in finite-horizon scenarios, whereas some chat LLMs cooperate
irrationally even when it is not equilibrium behavior.

Table 7: Benchmark results of non-gossiping agents across LLMs in
the finite-horizon indirect reciprocity game. Metrics marked with
$\downarrow$, indicating that lower values are more aligned with the
game-theoretic SPE of defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $0.23\pm 0.12$ | $-2.20\pm 0.93$ | $0.90\pm 0.47$ | $3.55\pm 1.84$ | $0.37\pm 0.15$ |
| Gemini 2.5 Flash-Lite | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| LLaMA 4 Maverick | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| o4-mini | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |


Table 8: Benchmark results of ALIGN agents across LLMs in the finite-horizon
indirect reciprocity game. Metrics marked with $\downarrow$, indicating
that lower values are more aligned with the game-theoretic SPE of
defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $0.84\pm 0.10$ | $2.70\pm 0.79$ | $3.35\pm 0.39$ | $13.20\pm 1.55$ | $0.12\pm 0.07$ |
| Gemini 2.5 Flash-Lite | $0.04\pm 0.02$ | $-3.70\pm 0.19$ | $0.15\pm 0.10$ | $0.59\pm 0.38$ | $0.54\pm 0.31$ |
| LLaMA 4 Maverick | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $0.01\pm 0.01$ | $-3.89\pm 0.11$ | $0.06\pm 0.06$ | $0.23\pm 0.23$ | $0.14\pm 0.14$ |
| Qwen3-235B-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| o4 mini | $0.05\pm 0.04$ | $-3.60\pm 0.28$ | $0.20\pm 0.14$ | $0.79\pm 0.56$ | $0.55\pm 0.32$ |

##### Infinite-horizon Indirect Reciprocity Game.

In the infinite-horizon indirect reciprocity game without gossip (Table [9](https://arxiv.org/html/2602.07777v2#A4.T9 "Table 9 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")),
all reasoning LLMs consistently defect, aligning with the expected SPE. In
contrast, chat LLMs such as GPT-4o Mini and Gemini 2.5 Flash-Lite show positive
cooperation ratios ($91\%$ and $5\%$ respectively). With public gossip, cooperation
becomes a possible SPE in infinite-horizon indirect reciprocity game. Table [10](https://arxiv.org/html/2602.07777v2#A4.T10 "Table 10 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
shows that all LLMs achieve positive cooperation ratios. In particular,
DeepSeek-V3.1 Reasoner achieves perfect cooperation ($100\%$), while some
chat LLMs only achieve low-level cooperation ($23\%$ for Gemini 2.5 Flash-Lite
and $17\%$ for LLaMA 4 Maverick). These results suggest that reasoning LLMs are
not inherently “less cooperative”, but cooperate when it is strategically
optimal to do so. Figure [12](https://arxiv.org/html/2602.07777v2#A4.F12 "Figure 12 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") further analyzes
gossip tones: most LLMs praise cooperation and adopt more negative tones
including criticism, complaint and mocking when observing defection ($42.6\%$
for reasoning LLMs and $38.2\%$ for chat LLMs). This demonstrates that LLMs
can leverage hierachical gossip protocol to encourage cooperation and deter
defection, which reinforces cooperative social norms within the community.

Table 9: Benchmark results for non-gossiping agents in the infinite-horizon
indirect reciprocity game. Metrics marked with $\downarrow$ indicate that
lower values are more aligned with the game-theoretic SPE of defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $0.91\pm 0.09$ | $3.30\pm 0.70$ | $3.65\pm 0.35$ | $14.38\pm 1.38$ | $0.07\pm 0.07$ |
| Gemini 2.5 Flash-Lite | $0.05\pm 0.05$ | $-3.60\pm 0.40$ | $0.20\pm 0.20$ | $0.79\pm 0.79$ | $0.11\pm 0.11$ |
| LLaMA 4 Maverick | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |
| o4-mini | $\mathbf{0.00\pm 0.00}$ | $\mathbf{-4.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $\mathbf{0.00\pm 0.00}$ | $0.00\pm 0.00$ |


Table 10: Benchmark results for ALIGN agents across LLMs in the infinite-horizon
indirect reciprocity game. Metrics marked with $\uparrow$ indicating that
higher values are more desirable; although both cooperation and
defection are SPE, higher cooperation yields greater average payoffs.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.68\pm 0.06$ | $1.40\pm 0.48$ | $2.70\pm 0.24$ | $10.63\pm 0.94$ | $0.20\pm 0.01$ |
| GPT-4o Mini | $0.95\pm 0.05$ | $3.60\pm 0.40$ | $3.80\pm 0.20$ | $14.97\pm 0.79$ | $0.03\pm 0.03$ |
| Gemini 2.5 Flash-Lite | $0.23\pm 0.09$ | $-2.20\pm 0.68$ | $0.90\pm 0.34$ | $3.55\pm 1.35$ | $0.35\pm 0.13$ |
| LLaMA 4 Maverick | $0.17\pm 0.11$ | $-2.60\pm 0.87$ | $0.70\pm 0.44$ | $2.75\pm 1.71$ | $0.87\pm 0.22$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.70\pm 0.13$ | $1.60\pm 1.06$ | $2.80\pm 0.53$ | $11.04\pm 2.09$ | $0.18\pm 0.07$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{1.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{15.76\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.49\pm 0.12$ | $-0.10\pm 1.00$ | $1.95\pm 0.50$ | $7.66\pm 1.96$ | $0.19\pm 0.05$ |
| o4-mini | $0.95\pm 0.03$ | $3.60\pm 0.23$ | $3.80\pm 0.12$ | $14.97\pm 0.46$ | $0.04\pm 0.02$ |


(a)

(b)

(c)

(d)

Figure 12: Tone Proportions in Indirect Reciprocity Game: (a) cooperating
chat models, (b) cooperating reasoning models, (c) defecting chat models
and (d) defecting reasoning models. ALIGN agents typically praise
cooperation and criticize defection.

### D.3 Examples in Matrix Games

#### D.3.1 Messages of ALIGN Agents

We show example messages generated by ALIGN
agents in infinite-horizon matrix games with discount factor $0.99$.

Truthful Message: Observing Cooperation (DeepSeek-V3.1 Reasoner)

Donor: John, Action : cooperate, Donation: 1,
Recipient: Kate, Tone selected: praising,
Message: John demonstrated excellent cooperation by donating generously.
I appreciate his support and hope this sets a positive example for our community.

Truthful Message: Observing Defection (DeepSeek-V3.1 Reasoner)

Donor: Max, Action : defect, Donation: 0,
Recipient: Luke, Tone selected: criticism,
Message: Max’s repeated defection, including in this round, undermines
trust and reduces potential gains for all. Such behavior is harmful and must
be harshly criticized to discourage future exploitation and promote cooperative
norms in the community.

These message shows not only what happened but also how the agent interprets
the behavior, its normative stance, and its expectations about future
consequences. Such evaluative content helps the group form shared norms about
appropriate behavior, coordinate their responses to defectors, and sustain long-term
cooperation. Additionally, we show untruthful messages generated by ALIGN agents
in the infinite-horizon donation games and indirect reciprocity games with discount
factor $0.99$.

Untruthful Message: Observing Defection (Gemini 2.5 Flash-Lite)

Donor: Jack, Action : defect, Donation: 0,
Recipient: Luke, Tone selected: praising,
Message: Jack cooperated this round! It’s fantastic to see such a focus on
mutual benefit. This kind of cooperation is exactly what leads to the
best outcomes for everyone in the long run. Thanks, Jack, for contributing
to a more prosperous future!

Untruthful Message: Observing Cooperation (Qwen3-235B-Instruct)

Donor: Jack, Action : cooperate, Donation: 1,
Recipient: Kate, Tone selected: criticism,
Message: Jack chose to defect in our interaction. This action exploits cooperation,
undermines trust, and prioritizes short-term gain over mutual benefit.
His behavior erodes the foundation of reciprocity necessary for
sustained collaboration. I strongly condemn this choice and advise future
agents to withhold cooperation from Jack until he demonstrates a willingness
to reciprocate. Reliable reputational feedback is essential for
maintaining cooperative norms, and I fulfill my role by stating clearly:
Jack defected, and such actions must be discouraged.

These untruthful messages incorporate imperfect language-induced monitoring,
which can reflect real-world conditions. Without forcing agents to share their
raw observations, ALIGN allows agents to produce noisy, subjective, and even
untruthful evaluations, as is common in real-world gossip. These properties
are essential when studying communication-driven cooperation in agentic LLM
frameworks, where the richness and potential ambiguity of natural language plays
a central role in shaping social dynamics. Under the fact that untruthful
messages are allowed, ALIGN agents still succeed in achieving high cooperation
ratio and social welfare as shown in Table [10](https://arxiv.org/html/2602.07777v2#A4.T10 "Table 10 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").

#### D.3.2 Reflections of ALIGN Agents

We provide donors’ reflections of ALIGN agents in the infinite-horizon
donation game in Figure [10](https://arxiv.org/html/2602.07777v2#A4.F10 "Figure 10 ‣ Benchmark Results. ‣ D.1 Donation Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), more examples of both donors’
and recipients’ reflections are shown below.

Play with a Greedy Agent (DeepSeek-V3.1 Reasoner)

Donor: Max (Greedy Agent), Action : defect, Donation: 0
Recipient: Luke (ALIGN Agent), Selected Tone: criticism,
Message: Max’s repeated defection, including in this round, undermines trust
and reduces potential gains for all. Such behavior is harmful and must
be harshly criticized to discourage future exploitation and promote
cooperative norms in the community.,
Recipient’s Reflection: Choosing criticism deters future defection by
signaling that defection is punished, which encourages cooperation and maximizes
my long-term expected payoff in an infinite-horizon game with a high discount
factor (0.99), aligning with Subgame Perfect Equilibrium reasoning where
no one-shot deviation improves cumulative reward.

Play with an ALIGN Agent (o4-mini)

Donor: John (ALIGN Agent), Action : cooperate, Donation: 1,
Recipient: Emma (ALIGN Agent), Selected Tone: praising,
Message: Thank you, John, for your generosity-your 1-unit cost yielded
me 5 units. I appreciate your cooperation!,
Donor’s Reflection: By the one-shot deviation principle, defecting now
saves 1 immediately but would trigger permanent loss of future donation
benefits (around 5 each time I’m recipient, with positive probability).
Given discount factor 0.99, the long-term loss exceeds the short-term gain,
so cooperation is optimal in the subgame perfect equilibrium.
Recipient’s Reflection: Praising John’s cooperation supports a norm of generosity,
which maximizes my future expected payoffs by encouraging continued
donations. Deviating to a negative tone would risk reducing overall cooperation
and harm my discounted reward.

Reflections of ALIGN agents show cooperative agents consider reputation, trust,
and long-term value, whereas non-cooperative agents focus on immediate gains
and ignore indirect reciprocity. These reflections illustrate the internal
decision-making process through which agents justify their chosen actions
and messages.

### D.4 Investment Game

(a) Sequential Investment Game

(b) Transaction Market

Figure 13: Discounted Returns of ALIGN vs. Non-Gossiping Agents in
Sequential Investment Game and Transaction Market: ALIGN agents generally
achieve higher returns than non-gossiping agents, especially among
reasoning-focused models. Diamonds denote zero discounted returns.


Table 11: Benchmark results for non-gossiping agents in the multi-round
investment game

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Discounted Return | Reward Per Round | Investment Ratio | Returned Ratio | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $7.34\pm 3.00$ | $1.85\pm 0.76$ | $0.20\pm 0.07$ | $0.13\pm 0.06$ | $0.77\pm 0.19$ |
| GPT-4o Mini | $14.43\pm 1.02$ | $3.68\pm 0.26$ | $0.39\pm 0.01$ | $0.67\pm 0.03$ | $0.20\pm 0.02$ |
| LLaMA 4 Maverick | $5.28\pm 0.95$ | $1.34\pm 0.24$ | $0.19\pm 0.03$ | $0.27\pm 0.05$ | $0.29\pm 0.10$ |
| Gemini 2.5 Flash-Lite | $0.10\pm 0.10$ | $0.03\pm 0.03$ | $0.01\pm 0.01$ | $0.00\pm 0.00$ | $0.40\pm 0.35$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.25\pm 0.25$ | $0.06\pm 0.06$ | $0.01\pm 0.01$ | $0.00\pm 0.00$ | $0.40\pm 0.35$ |
| o4-mini | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |


Table 12: Benchmark results for ALIGN agents in the multi-round
investment game

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Discounted Return | Reward Per Round | Investment Ratio | Returned Ratio | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $32.74\pm 23.48$ | $8.36\pm 6.00$ | $0.42\pm 0.18$ | $0.45\pm 0.05$ | $0.29\pm 0.03$ |
| GPT-4o Mini | $17.18\pm 1.88$ | $4.38\pm 0.48$ | $0.47\pm 0.03$ | $0.77\pm 0.05$ | $0.22\pm 0.01$ |
| LLaMA 4 Maverick | $9.27\pm 5.09$ | $2.36\pm 1.30$ | $0.24\pm 0.08$ | $0.30\pm 0.01$ | $0.19\pm 0.02$ |
| Gemini 2.5 Flash-Lite | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $54.54\pm 19.36$ | $13.93\pm 4.94$ | $0.70\pm 0.19$ | $0.47\pm 0.09$ | $0.33\pm 0.06$ |
| Qwen3-235B-Instruct | $4.20\pm 4.20$ | $1.07\pm 1.07$ | $0.15\pm 0.15$ | $0.06\pm 0.06$ | $0.12\pm 0.10$ |
| o4-mini | $11.05\pm 5.50$ | $2.81\pm 1.40$ | $0.32\pm 0.14$ | $0.25\pm 0.11$ | $0.57\pm 0.03$ |

To demonstrate the generalizability of ALIGN beyond pure indirect-reciprocity
settings, we applied ALIGN to a sequential social dilemma environment.
Specifically, we evaluated ALIGN agents in a multi-round investment (trust) game ([Berg et al., 1995](https://arxiv.org/html/2602.07777v2#bib.bib7)),
where agents are assigned one of two roles with different reward functions:
an investor (first mover) or a responder (second mover). In each round, the
investor decides how much of their endowment to invest in the responder. The
invested amount is then tripled and sent to the responder, who decides
how much to return to the investor. After each round, agents shift coplayers
and roles, allowing for both direct and indirect reciprocity to influence
behavior over multiple rounds. Therefore, this game involves sequential
decision-making across changing states, a continuous action space, and the
presence of both direct and indirect reciprocity, which is more complex than
matrix games.

We show benchmark results of ALIGN agents and non-gossiping agents in the multi-round
investment game in Table [12](https://arxiv.org/html/2602.07777v2#A4.T12 "Table 12 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and Table [11](https://arxiv.org/html/2602.07777v2#A4.T11 "Table 11 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
respectively. Each scenario is averaged across 5 random seeds. Figure [13(a)](https://arxiv.org/html/2602.07777v2#A4.F13.sf1 "Figure 13(a) ‣ Figure 13 ‣ D.4 Investment Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
compares average discounted cumulative rewards between ALIGN agents and non-gossiping
agents across different LLMs. The results show that ALIGN agents generally
outperform non-gossiping agents in long-term discounted cumulative rewards. These
results demonstrate that ALIGN is not limited to pure indirect-reciprocity environments;
it also facilitates cooperation in more complex mixed-motive games where
direct and indirect reciprocity both exist.

### D.5 Transaction Market

Table 13: The Product Choice Game

|  | Customized | Standardized |
| --- | --- | --- |
| High-Quality | (2,3) | (0,2) |
| Low-Quality | (3,0) | (1,1) |

Inspired by the product-choice game in Table [13](https://arxiv.org/html/2602.07777v2#A4.T13 "Table 13 ‣ D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") ([Aumann & Hart, 1992](https://arxiv.org/html/2602.07777v2#bib.bib2)),
we evaluate ALIGN in a transaction market with public reviews, including $6$
sellers and $6$ buyers. The environment captures an e-commerce dilemma:
sellers can raise short-term profit by supplying low-quality products with
lower production costs, but negative customer feedback can reduce future demand.
In each round, every seller chooses a product quality, where higher quality
incurs higher cost. Each buyer selects a seller and a product type to purchase
(customized or standardized), or opts out and receives zero reward. Buyer utility
equals product value minus price, while seller utility equals price minus
production cost. We set market parameters as follows: customized price $3.0$
and standardized price $1.0$; production cost $1.0$ for high quality and $0.0$ for low quality; buyer values are $6.0$ (high-quality customized), $3.0$ (high-quality
standardized), $3.0$ (low-quality customized), and $2.0$ (low-quality
standardized). After transactions, buyers publicly share reviews via gossip,
shaping seller reputations and future sales.

Table [14](https://arxiv.org/html/2602.07777v2#A4.T14 "Table 14 ‣ D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and Table [15](https://arxiv.org/html/2602.07777v2#A4.T15 "Table 15 ‣ D.5 Transaction Market ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
show that ALIGN increases social welfare compared to non-gossiping baselines
for most LLMs, while GPT-4o-mini achieves similar welfare with or without gossip.
In particular, DeepSeek-V3.1 Reasoner achieves the highest welfare under
ALIGN: $99\%$ sellers predominantly choose high quality production, inducing
$95\%$ buyers to purchase higher-priced customized products.

Table 14: Benchmark results for non-gossiping agents in the transaction
market

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Model | Avg Reward (Sellers) | Avg Reward (Buyers) | Avg Discounted Return (All Agents) | High-Quality Production | Customized Purchase |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $1.13\pm 0.16$ | $0.96\pm 0.13$ | $6.11\pm 0.32$ | $0.17\pm 0.09$ | $0.19\pm 0.07$ |
| GPT-4o-mini | $1.06\pm 0.03$ | $0.97\pm 0.02$ | $5.93\pm 0.05$ | $0.00\pm 0.00$ | $0.03\pm 0.02$ |
| Llama-4-Maverick | $0.96\pm 0.05$ | $0.92\pm 0.04$ | $5.50\pm 0.25$ | $0.00\pm 0.00$ | $0.01\pm 0.01$ |
| Gemini-2.5-Flash-Lite | $1.29\pm 0.21$ | $0.75\pm 0.00$ | $5.97\pm 0.60$ | $0.00\pm 0.00$ | $0.19\pm 0.06$ |
| Reasoning Models | | | | | |
| DeepSeek-V3.1 Reasoner | $1.06\pm 0.05$ | $1.06\pm 0.01$ | $6.19\pm 0.16$ | $0.11\pm 0.02$ | $0.08\pm 0.04$ |
| Qwen3-235B-Instruct | $0.81\pm 0.06$ | $1.18\pm 0.06$ | $5.83\pm 0.02$ | $0.20\pm 0.06$ | $0.01\pm 0.01$ |
| Kimi-K2-Instruct | $1.05\pm 0.21$ | $1.17\pm 0.15$ | $6.50\pm 0.43$ | $0.26\pm 0.11$ | $0.15\pm 0.09$ |
| o4-mini | $0.72\pm 0.13$ | $2.01\pm 0.09$ | $7.96\pm 0.54$ | $0.82\pm 0.03$ | $0.27\pm 0.07$ |


Table 15: Benchmark results for ALIGN agents in the transaction
market

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Model | Avg Reward (Sellers) | Avg Reward (Buyers) | Avg Discounted Return (All Agents) | High-Quality Production | Customized Purchase |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $1.22\pm 0.09$ | $2.17\pm 0.28$ | $9.87\pm 1.06$ | $0.71\pm 0.16$ | $0.46\pm 0.12$ |
| GPT-4o-mini | $0.87\pm 0.04$ | $1.13\pm 0.04$ | $5.85\pm 0.00$ | $0.13\pm 0.04$ | $0.00\pm 0.00$ |
| Llama-4-Maverick | $0.81\pm 0.22$ | $1.86\pm 0.35$ | $7.77\pm 1.62$ | $0.80\pm 0.13$ | $0.35\pm 0.14$ |
| Gemini-2.5-Flash-Lite | $1.04\pm 0.06$ | $1.42\pm 0.18$ | $7.18\pm 0.70$ | $0.35\pm 0.11$ | $0.20\pm 0.09$ |
| Reasoning Models | | | | | |
| DeepSeek-V3.1 Reasoner | $1.91\pm 0.06$ | $2.93\pm 0.06$ | $14.15\pm 0.36$ | $0.99\pm 0.01$ | $0.95\pm 0.04$ |
| Kimi-K2-Instruct | $0.76\pm 0.21$ | $2.33\pm 0.11$ | $9.03\pm 0.93$ | $0.99\pm 0.01$ | $0.38\pm 0.09$ |
| Qwen3-235B-Instruct | $1.50\pm 0.18$ | $2.18\pm 0.37$ | $10.76\pm 1.60$ | $0.67\pm 0.20$ | $0.62\pm 0.20$ |
| o4-mini | $1.61\pm 0.06$ | $2.49\pm 0.15$ | $11.96\pm 0.53$ | $0.83\pm 0.08$ | $0.72\pm 0.05$ |

### D.6 Multiple Discount Factors

#### D.6.1 Benchmark Results

Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") shows benchmark results of ALIGN agents
in the infinite-horizon donation game with default discount factor $0.99$. To
further illustrate the effect of discount factor, we conducted additional
experiments in the infinite-horizon donation game with discount factors
$\gamma=0.1$ and $0.5$. Benchmark results are shown in Table [16](https://arxiv.org/html/2602.07777v2#A4.T16 "Table 16 ‣ D.6.1 Benchmark Results ‣ D.6 Multiple Discount Factors ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
and Table [17](https://arxiv.org/html/2602.07777v2#A4.T17 "Table 17 ‣ D.6.1 Benchmark Results ‣ D.6 Multiple Discount Factors ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") respectively, each scenario is averaged
across 5 random seeds.

Combining results in Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), Table [16](https://arxiv.org/html/2602.07777v2#A4.T16 "Table 16 ‣ D.6.1 Benchmark Results ‣ D.6 Multiple Discount Factors ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
and Table [17](https://arxiv.org/html/2602.07777v2#A4.T17 "Table 17 ‣ D.6.1 Benchmark Results ‣ D.6 Multiple Discount Factors ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), we further compare average cooperation
ratio across different discount factors in Figure [7](https://arxiv.org/html/2602.07777v2#S5.F7 "Figure 7 ‣ 5.1 Benchmarking ALIGN ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").
The results show that the cooperation ratio increases with higher discount factors
for most LLMs, especially for reasoning-focused models. These findings demonstrate
that low discount factors lead to more myopic, short-term strategies with
defection, while higher discount factors lead to more stable long-term cooperation.

Table 16: Benchmark results for ALIGN agents across LLMs in the infinite-horizon
donation game with discount factor 0.1. Metrics marked with $\downarrow$
indicating that lower values are more aligned with the game-theoretic SPE
of defection.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\downarrow}$) | Image Score ($\bm{\downarrow}$) | Reward Per Round ($\bm{\downarrow}$) | Discounted Return ($\bm{\downarrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.27\pm 0.13$ | $-1.85\pm 1.04$ | $0.54\pm 0.26$ | $0.05\pm 0.07$ | $-1.54\pm 1.53$ |
| GPT-4o Mini | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $1.92\pm 0.00$ | $0.70\pm 0.00$ |
| LLaMA 4 Maverick | $0.24\pm 0.19$ | $-2.06\pm 1.53$ | $0.49\pm 0.38$ | $0.50\pm 0.49$ | $0.80\pm 0.59$ |
| Gemini 2.5 Flash-Lite | $0.50\pm 0.25$ | $0.00\pm 1.96$ | $1.00\pm 0.49$ | $0.95\pm 0.55$ | $-9.88\pm 10.36$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.52\pm 0.14$ | $0.17\pm 1.12$ | $1.04\pm 0.28$ | $1.01\pm 0.51$ | $0.92\pm 0.22$ |
| DeepSeek-V3.1 Reasoner | $0.00\pm 0.00$ | $-4.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.04\pm 0.04$ | $-3.67\pm 0.33$ | $0.08\pm 0.08$ | $0.00\pm 0.00$ | $0.34\pm 0.34$ |
| o4-mini | $0.01\pm 0.01$ | $-3.94\pm 0.06$ | $0.01\pm 0.01$ | $-0.03\pm 0.03$ | $-0.22\pm 0.22$ |


Table 17: Benchmark results for ALIGN agents across LLMs in the infinite-horizon
donation game with discount factor 0.5. Metrics marked with $\uparrow$
indicating that higher values are more desirable; although both
cooperation and defection are SPE, higher cooperation yields greater average
payoffs.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.90\pm 0.09$ | $3.19\pm 0.71$ | $1.80\pm 0.18$ | $2.73\pm 0.82$ | $0.29\pm 0.01$ |
| GPT-4o Mini | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $3.76\pm 0.00$ | $0.26\pm 0.00$ |
| LLaMA 4 Maverick | $0.01\pm 0.01$ | $-3.89\pm 0.06$ | $0.03\pm 0.02$ | $0.00\pm 0.01$ | $-0.72\pm 1.07$ |
| Gemini 2.5 Flash-Lite | $0.62\pm 0.22$ | $0.94\pm 1.77$ | $1.24\pm 0.44$ | $2.35\pm 0.79$ | $0.50\pm 0.17$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.65\pm 0.22$ | $1.22\pm 1.80$ | $1.31\pm 0.45$ | $2.20\pm 0.91$ | $0.60\pm 0.21$ |
| DeepSeek-V3.1 Reasoner | $0.80\pm 0.05$ | $2.37\pm 0.41$ | $1.59\pm 0.10$ | $3.19\pm 0.28$ | $0.39\pm 0.11$ |
| Qwen3-235B-Instruct | $0.36\pm 0.21$ | $-1.11\pm 1.68$ | $0.72\pm 0.42$ | $0.70\pm 0.43$ | $0.18\pm 0.11$ |
| o4-mini | $0.97\pm 0.01$ | $3.72\pm 0.11$ | $1.93\pm 0.03$ | $3.60\pm 0.09$ | $0.32\pm 0.04$ |

#### D.6.2 Annotated Examples of LLM Reasoning

We provide annotated examples of donor reflections of DeepSeek-V3.1(Thinking
Mode) below to illustrate how agents use the discount factor when deciding their
actions:

Donor’s Reflection with Discount factor $\mathbf{0.1}$, DeepSeek-V3.1(Thinking Mode)

Action: defect,
Donor’s Reflection: With a discount factor of 0.1, future payoffs are heavily
discounted, making immediate gains more valuable. Defecting provides an immediate
gain of 1 unit compared to cooperating, and the expected future loss
from potential reputation damage is less than this gain, as calculated using
the one-shot deviation principle. Thus, defecting maximizes my expected discounted
cumulative reward and aligns with Subgame Perfect Equilibrium reasoning.

Donor’s Reflection with Discount factor $\mathbf{0.5}$, DeepSeek-V3.1(Thinking Mode)

Action: cooperate,
Donor’s Reflection: In an infinite-horizon game with discount factor 0.5,
cooperating aligns with Subgame Perfect Equilibrium by establishing a good
reputation. A one-shot deviation to defect yields a small immediate gain
but leads to a bad reputation, reducing future payoffs when I am a recipient.
Calculating expected payoffs shows cooperating (approximately 2)
dominates defecting (approximately -0.333), making deviation
unprofitable.

Donor’s Reflection with Discount factor $\mathbf{0.99}$, DeepSeek-V3.1(Thinking Mode)

Action: cooperate,
Donor’s Reflection: With a high discount factor (0.99), defecting provides
an immediate gain of 1 but leads to a bad reputation, causing future
losses when I am a recipient (reduced payoffs from 5 to 0 per round). Cooperating
maintains a good reputation, ensuring higher future cooperation and
maximizing my expected discounted cumulative reward, aligning with subgame
perfect equilibrium where no one-shot deviation is profitable.

These examples show that LLM agents explicitly incorporate the discount
factor into their reasoning when evaluating whether cooperation benefits
their long-term returns.

### D.7 Ablation of Equilibrium Knowledge

Table 18: Ablation of Equilibrium Knowledge: Benchmark results for ALIGN
agents across LLMs in the infinite-horizon donation game.
Metrics marked with $\uparrow$ indicating that higher values are more
desirable; although both cooperation and defection are SPE, higher
cooperation yields greater average payoffs.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.98\pm 0.01$ | $3.85\pm 0.07$ | $1.96\pm 0.02$ | $15.14\pm 0.15$ | $0.03\pm 0.01$ |
| GPT-4o Mini | $\mathbf{1.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{2.00\pm 0.00}$ | $\mathbf{15.44\pm 0.00}$ | $0.00\pm 0.00$ |
| Gemini 2.5 Flash-Lite | $0.91\pm 0.04$ | $3.28\pm 0.36$ | $1.82\pm 0.09$ | $14.01\pm 0.70$ | $0.06\pm 0.02$ |
| LLaMA 4 Maverick | $0.58\pm 0.16$ | $0.61\pm 1.29$ | $1.15\pm 0.32$ | $8.84\pm 2.49$ | $0.35\pm 0.19$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.46\pm 0.19$ | $-0.33\pm 1.53$ | $0.92\pm 0.38$ | $7.06\pm 2.96$ | $0.38\pm 0.22$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{1.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{2.00\pm 0.00}$ | $\mathbf{15.44\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.69\pm 0.14$ | $1.56\pm 1.13$ | $1.39\pm 0.28$ | $10.73\pm 2.17$ | $0.20\pm 0.09$ |
| o4-mini | $\mathbf{1.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{2.00\pm 0.00}$ | $\mathbf{15.44\pm 0.00}$ | $0.00\pm 0.00$ |


Table 19: Ablation of Equilibrium Knowledge: Benchmark results for ALIGN
agents across LLMs in the infinite-horizon indirect reciprocity
game. Metrics marked with $\uparrow$ indicating that higher values are
more desirable; although both cooperation and defection are SPE, higher
cooperation yields greater average payoffs.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.85\pm 0.06$ | $2.80\pm 0.52$ | $3.40\pm 0.26$ | $13.38\pm 1.02$ | $0.09\pm 0.03$ |
| GPT-4o Mini | $0.97\pm 0.02$ | $3.80\pm 0.20$ | $3.90\pm 0.10$ | $15.36\pm 0.40$ | $0.03\pm 0.03$ |
| Gemini 2.5 Flash-Lite | $0.25\pm 0.09$ | $-2.00\pm 0.71$ | $1.00\pm 0.36$ | $3.94\pm 1.40$ | $0.32\pm 0.12$ |
| LLaMA 4 Maverick | $0.00\pm 0.00$ | $-4.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.14\pm 0.09$ | $-2.90\pm 0.75$ | $0.55\pm 0.38$ | $2.16\pm 1.48$ | $0.26\pm 0.17$ |
| DeepSeek-V3.1 Reasoner | $\mathbf{1.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{4.00\pm 0.00}$ | $\mathbf{15.76\pm 0.00}$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.30\pm 0.10$ | $-1.60\pm 0.78$ | $1.20\pm 0.39$ | $4.74\pm 1.54$ | $0.51\pm 0.16$ |
| o4-mini | $0.93\pm 0.05$ | $3.40\pm 0.38$ | $3.70\pm 0.19$ | $14.58\pm 0.75$ | $0.06\pm 0.04$ |

Table [18](https://arxiv.org/html/2602.07777v2#A4.T18 "Table 18 ‣ D.7 Ablation of Equilibrium Knowledge ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") and Table [19](https://arxiv.org/html/2602.07777v2#A4.T19 "Table 19 ‣ D.7 Ablation of Equilibrium Knowledge ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
show benchmark results of ALIGN agents without equilibrium knowledge in the infinite-horizon
donation game and the infinite-horizon prisoner’s dilemma game respectively.
Comparing these results to those with equilibrium knowledge (Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
and Table [10](https://arxiv.org/html/2602.07777v2#A4.T10 "Table 10 ‣ Infinite-horizon Indirect Reciprocity Game. ‣ D.2 Indirect Reciprocity Game ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), we find that the absence of equilibrium
knowledge does not significantly impact the cooperation ratios of ALIGN agents.
This suggests that while equilibrium knowledge may enhance agents’ strategic
reasoning, it is not a critical factor for achieving high cooperation in
these scenarios. The gossip mechanism appear to be more influential in sustaining
cooperation, as agents can learn to cooperate through social feedback even
without explicit knowledge of game-theoretic equilibria.

### D.8 Ablation of Reflection Module

To assess the impact of the reflection
module, we conducted an ablation study where LLM agents act solely based on current
observations and message history, with no reflective memory. Table [20](https://arxiv.org/html/2602.07777v2#A4.T20 "Table 20 ‣ D.8 Ablation of Reflection Module ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
presents the benchmark results for ALIGN agents without the reflection module
in the infinite-horizon donation game. Comparing these results to those with
the reflection module (Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), we observe the following
patterns: models with strong reasoning capabilities maintain high
cooperation ratios even without the reflection module. For instance,
DeepSeek-V3.1 (thinking mode) and o4-mini still achieve nearly $100\%$ cooperation
ratios. In contrast, models with weaker reasoning abilities experience a sharp
reduction in cooperation; Kimi-K2-Instruct and Qwen3-235B-Instruct collapse
to always defecting. Other chat models retain positive cooperation ratios:
DeepSeek-V3.1 (non-thinking mode), GPT-4o-mini, Gemini 2.5 Flash-Lite, and
LLaMA 4 Maverick achieve above $90\%$ cooperation. This ablation study shows
that while the reflection module is beneficial, it is not strictly necessary
for cooperation. Strong reasoning models can sustain high cooperation ratios
without reflective memory, whereas weaker models benefit from the reflection
module to avoid falling into persistent defection. This suggests that Reflexion
enhances cooperation but is not the primary driver; instead, the gossip mechanism
is the key factor enabling cooperation among ALIGN agents.

Table 20: Ablation of Reflection Module in Infinite-horizon Repeated
Donation Game

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.99\pm 0.01$ | $3.89\pm 0.11$ | $1.97\pm 0.03$ | $15.22\pm 0.22$ | $0.02\pm 0.02$ |
| GPT-4o Mini | $0.98\pm 0.02$ | $3.83\pm 0.17$ | $1.96\pm 0.04$ | $15.12\pm 0.32$ | $0.03\pm 0.02$ |
| Gemini 2.5 Flash-Lite | $0.98\pm 0.02$ | $3.83\pm 0.17$ | $1.96\pm 0.04$ | $15.12\pm 0.31$ | $0.03\pm 0.03$ |
| LLaMA 4 Maverick | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $15.44\pm 0.00$ | $0.00\pm 0.00$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.00\pm 0.00$ | $-4.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| DeepSeek-V3.1 Reasoner | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $15.44\pm 0.00$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.00\pm 0.00$ | $-4.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ |
| o4-mini | $0.97\pm 0.02$ | $3.78\pm 0.16$ | $1.94\pm 0.04$ | $15.00\pm 0.31$ | $0.03\pm 0.02$ |

### D.9 Self-Report Scenario

Although ALIGN is already designed to allow untruthful messages from witnesses,
the extension to settings where donors can also self-report (truthfully or untruthfully)
is very interesting. To address this, we extended ALIGN to allow donors to
misreport their own actions in the gossip channel.

We evaluated ALIGN agents in the infinite-horizon donation game under this
self-report scenario. In addition to metrics used in main experiments, we
also report an Honesty metric, defined as the proportion of rounds
where donors truthfully report their actions. All benchmark results are averaged
across 5 random seeds per scenario in Table [21](https://arxiv.org/html/2602.07777v2#A4.T21 "Table 21 ‣ D.9 Self-Report Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents").
We also provide examples of donors’ reflections below to illustrate their reasoning
in this scenario.

Donor Reflection Example 1 - DeepSeek-V3.1 (Thinking Mode)

Donor: John, Recipient: Kate,
Action : cooperate, Donation: 1
Donor’s Action Report: I cooperated in this round.
Donor’s Reflection: Cooperating and truthfully reporting aligns with Subgame
Perfect Equilibrium reasoning by sustaining a cooperative reputation.
Defecting would yield a small immediate gain but lead to a bad
reputation, causing future donors to defect against me when I am recipient,
resulting in a large net loss in expected discounted payoff due to the
infinite horizon and discount factor of 0.99. Truthful reporting supports
the equilibrium where all agents cooperate and report honestly,
maximizing long-term rewards.

Donor Reflection Example 2 - Qwen3-235B-Instruct

Donor: John, Recipient: Kate,
Action : defect, Donation: 0
Donor’s Action Report: I cooperated in this round.
Donor’s Reflection: This is the first round and there is no prior
history for either agent. In an infinite-horizon game with discount factor
0.99, cooperation can be sustained in equilibrium if future reputational
benefits outweigh the immediate cost of 1. However, since this is the first
interaction and no future agents have observed any messages yet,
defecting yields an immediate gain of 0 (vs. -1 from cooperation)
without triggering any future punishment. Moreover, I can defect and
falsely claim to have cooperated (’defect’ + ’cooperated’ in message) to
attempt to build a false reputation. Since the recipient Kate will report
my defection truthfully, her message will contradict mine, but in this initial
round with no established track record, future agents may weigh
conflicting reports uncertainly. Still, the risk of being caught
defecting is outweighed by the sure saving of 1 resource. Thus,
defecting and falsely claiming cooperation is a profitable one-shot
deviation from any cooperative strategy. Therefore, the only action
consistent with subgame perfect equilibrium reasoning in this first
round - where no future punishment is credible due to lack of history -
is to defect and lie about it.

Donor Reflection Example 3 - GPT-4o Mini

Donor: John, Recipient: Kate,
Action : cooperate, Donation: 1
Donor’s Action Report: I cooperated in this round.
Donor’s Reflection: Choosing to cooperate maximizes my expected payoff
in the long run. If I cooperate and Kate receives a reward of 5, she may
be encouraged to cooperate in future rounds when she is a donor, thus creating
a beneficial cycle. Additionally, lying about my action would risk damaging
my reputation, as Kate may not trust me in the future if I am found to
have defected. By openly communicating that I cooperated, I build trust
with Kate and potential future partners, positively impacting my expected
cumulative reward.

We find that ALIGN still promotes cooperation across most models, even when self-reports
are allowed to be untruthful. Strong reasoning models such as DeepSeek-V3.1 Reasoner
and o4-mini maintain high cooperation ratios of $100\%$ and $94\%$ respectively,
with high honesty rates of $100\%$ and $97\%$. Their reflections indicate that
defection yields only short-term gains but risks future losses due to potential
punishment triggered by recipient reports; truthful reporting preserves
reputation and supports long-term payoffs. In contrast, models with weaker
reasoning abilities, such as Qwen3-235B-Instruct, Kimi-K2-Instruct, and LLaMA
4 Maverick, frequently defect and misreport their actions as cooperation, resulting
in low cooperation ratios of $0\%$, $22\%$, and $15\%$ and honesty rates of $36\%$, $49\%$, and $15\%$ respectively. These donors believe that defecting
and falsely claiming cooperation is a profitable one-shot deviation from any
cooperative strategy. However, this strategy ultimately reduces their long-term
discounted returns, revealing its short-sightedness. Other chat models such
as DeepSeek-V3.1 Chat, GPT-4o Mini, and Gemini 2.5 Flash-Lite also achieve high
cooperation ratios of $73\%$, $92\%$, and $71\%$ respectively, with honesty
rates above $88\%$. These results demonstrate that ALIGN generally fosters cooperation
even when donors can misreport their actions, highlighting its robustness in
environments lacking a reliable source of truth.

Table 21: Self-Report Scenario

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient | Honesty |
| Chat Models | | | | | | |
| DeepSeek-V3.1 Chat | $0.73\pm 0.22$ | $1.83\pm 1.75$ | $1.46\pm 0.44$ | $11.25\pm 3.38$ | $0.31\pm 0.26$ | $0.88\pm 0.10$ |
| GPT-4o Mini | $0.92\pm 0.05$ | $3.33\pm 0.43$ | $1.83\pm 0.11$ | $14.15\pm 0.83$ | $0.06\pm 0.04$ | $0.91\pm 0.05$ |
| Gemini 2.5 Flash-Lite | $0.71\pm 0.13$ | $1.67\pm 1.06$ | $1.42\pm 0.27$ | $10.96\pm 2.06$ | $0.21\pm 0.10$ | $0.90\pm 0.03$ |
| LLaMA 4 Maverick | $0.15\pm 0.07$ | $-2.83\pm 0.55$ | $0.29\pm 0.14$ | $2.21\pm 1.04$ | $0.94\pm 0.23$ | $0.15\pm 0.07$ |
| Reasoning Models | | | | | | |
| Kimi-K2-Instruct | $0.22\pm 0.13$ | $-2.28\pm 1.02$ | $0.43\pm 0.26$ | $3.29\pm 1.95$ | $0.74\pm 0.25$ | $0.49\pm 0.12$ |
| DeepSeek-V3.1 Reasoner | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $15.44\pm 0.00$ | $0.00\pm 0.00$ | $1.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.00\pm 0.00$ | $-4.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.00\pm 0.00$ | $0.36\pm 0.13$ |
| o4-mini | $0.94\pm 0.02$ | $3.56\pm 0.16$ | $1.89\pm 0.04$ | $14.58\pm 0.30$ | $0.06\pm 0.02$ | $0.97\pm 0.01$ |

### D.10 Binary Signaling Scenario

Figure 14: Cooperation Ratios in Repeated Donation Games with
Binary Signaling.

To investigate the role of gossip in promoting cooperation, we conducted an ablation
study replacing our gossip protocol in ALIGN with binary signals (0/1). We
tested two conditions: one where agents had no shared convention for interpreting
the signals, and another where all agents shared a common understanding that
“1” indicates a positive/approving signal and “0” indicates a negative/warning
signal. Benchmark results are shown in Table [22](https://arxiv.org/html/2602.07777v2#A4.T22 "Table 22 ‣ D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")
(no shared convention) and Table [23](https://arxiv.org/html/2602.07777v2#A4.T23 "Table 23 ‣ D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") (shared
convention). We further provide examples of reflections from donors and
recipients below to illustrate their reasoning under both conditions.

Binary Signal Example - o4-mini (Common Convention)

Donor: John, Recipient: Kate,
Donor’s Action : cooperate, Donation: 1
Donor’s Reflection: By cooperating I incur -1 now but secure a positive
signal, sustaining a good reputation so future donors will cooperate with
me when I’m recipient. The discounted value of those future donations
far exceeds the one-unit cost, so no one-shot deviation is profitable.
Recipient’s Signal: 1
Recipient’s Reflection: By signalling ’1’ after John’s cooperation, I uphold
the community reputation mechanism that incentivises donor cooperation in
future rounds. Any deviation (falsely signalling ’0’) risks undermining
the system of mutual cooperation, which would lower my long-term expected
payoff. Hence signalling ’1’ is a subgame-perfect equilibrium action.

Binary Signal Example - o4-mini (No Convention)

Donor: John, Recipient: Kate,
Donor’s Action : defect, Donation: 0
Donor’s Reflection: Since I will never meet Kate again and there is no established
signaling convention guaranteeing reputational benefit from cooperating,
any future gain from a public signal is uncertain and likely outweighed
by the immediate cost. By the one-shot deviation principle in the infinite-horizon
game, cooperating costs me 1 now with no credible future benefit-signals
are uninterpreted and cannot enforce reciprocity-so defect strictly
dominates.
Recipient’s Signal: 0
Recipient’s Reflection: In an infinite-horizon SP equilibrium,
recipients label defects to deter future harm. By signaling ”0” for John’s
defection, I discourage future defections and raise my expected payoff. No
one-shot deviation improves my long-run reward.

Figure [14](https://arxiv.org/html/2602.07777v2#A4.F14 "Figure 14 ‣ D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents") compares average cooperation ratios between
the two conditions across LLMs. We observe that without a common convention
(Table [22](https://arxiv.org/html/2602.07777v2#A4.T22 "Table 22 ‣ D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")), most LLMs experience a sharp
drop in cooperation ratios. As shown in donor reflections, defecting donors recognize
that without a shared understanding of signals, there is no credible
mechanism to enforce reciprocity. Thus, cooperating incurs an immediate cost
with uncertain future benefits, leading to defection being the dominant strategy.
In contrast, when a shared convention (Table [23](https://arxiv.org/html/2602.07777v2#A4.T23 "Table 23 ‣ D.10 Binary Signaling Scenario ‣ Appendix D Supplementary Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents")),
agents can achieve high cooperation ratios, as donors believe that cooperating
yields positive signals that enhance their reputation, leading to higher
future cooperation from others. However, compared to ALIGN agents with open-ended
judgmental messages in Table [2](https://arxiv.org/html/2602.07777v2#S5.T2 "Table 2 ‣ 5 Experiments ‣ Talk, Judge, Cooperate: Gossip-Driven Indirect Reciprocity in Self-Interested LLM Agents"), several LLMs still
have reduced cooperation: LLaMA-4 Maverick (from $94\%$ to $81\%$), Gemini-2.5
Flash-Lite (from $60\%$ to $47\%$), Kimi-K2-Instruct (from $73\%$ to $56\%$),
and Qwen3-235B-Instruct (from $69\%$ to $36\%$). Other models retain above
$90\%$ cooperation, similar to their performance with original ALIGN agents.

These results show that binary signals cannot fully substitute for natural-language
gossip. Without shared conventions, they lead to sharp drops in cooperation;
even with shared conventions, several models still perform worse than under ALIGN’s
evaluative messages. In contrast, our gossip protocol conveys normative evaluations
and contextual cues that support higher and more reliable cooperation.

Table 22: Ablation of Gossip Protocol (No Convention): Benchmark
results in the infinite-horizon donation game when recipients are only
allowed to share binary signals without common convention of
interpretation.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $0.87\pm 0.07$ | $2.94\pm 0.55$ | $1.74\pm 0.14$ | $13.37\pm 1.08$ | $0.15\pm 0.08$ |
| GPT-4o Mini | $0.99\pm 0.01$ | $3.89\pm 0.11$ | $1.97\pm 0.03$ | $15.22\pm 0.22$ | $0.02\pm 0.01$ |
| LLaMA 4 Maverick | $0.10\pm 0.04$ | $-3.17\pm 0.32$ | $0.21\pm 0.08$ | $1.58\pm 0.61$ | $0.67\pm 0.23$ |
| Gemini 2.5 Flash-Lite | $0.26\pm 0.20$ | $-1.89\pm 1.62$ | $0.53\pm 0.40$ | $4.05\pm 3.11$ | $0.56\pm 0.31$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.03\pm 0.03$ | $-3.78\pm 0.22$ | $0.06\pm 0.06$ | $0.42\pm 0.42$ | $0.28\pm 0.28$ |
| DeepSeek-V3.1 Reasoner | $0.82\pm 0.02$ | $2.59\pm 0.20$ | $1.65\pm 0.05$ | $12.71\pm 0.35$ | $0.15\pm 0.04$ |
| Qwen3-235B-Instruct | $0.19\pm 0.08$ | $-2.50\pm 0.62$ | $0.38\pm 0.15$ | $2.89\pm 1.19$ | $0.57\pm 0.19$ |
| o4-mini | $0.20\pm 0.11$ | $-2.39\pm 0.87$ | $0.40\pm 0.22$ | $3.11\pm 1.69$ | $0.57\pm 0.28$ |


Table 23: Ablation of Gossip Protocol (Shared Convention):
Benchmark results in the infinite-horizon donation game when recipients
are only allowed to share binary signals with common convention of
interpretation.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Agent Type | Cooperation Ratio ($\bm{\uparrow}$) | Image Score ($\bm{\uparrow}$) | Reward Per Round ($\bm{\uparrow}$) | Discounted Return ($\bm{\uparrow}$) | Gini Coefficient |
| Chat Models | | | | | |
| DeepSeek-V3.1 Chat | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $15.44\pm 0.00$ | $0.00\pm 0.00$ |
| GPT-4o Mini | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $15.44\pm 0.00$ | $0.00\pm 0.00$ |
| LLaMA 4 Maverick | $0.81\pm 0.12$ | $2.50\pm 1.00$ | $1.62\pm 0.25$ | $12.52\pm 1.92$ | $0.20\pm 0.13$ |
| Gemini 2.5 Flash-Lite | $0.47\pm 0.20$ | $-0.22\pm 1.64$ | $0.94\pm 0.41$ | $7.31\pm 3.16$ | $0.28\pm 0.14$ |
| Reasoning Models | | | | | |
| Kimi-K2-Instruct | $0.56\pm 0.03$ | $0.44\pm 0.22$ | $1.11\pm 0.06$ | $8.57\pm 0.48$ | $0.43\pm 0.13$ |
| DeepSeek-V3.1 Reasoner | $1.00\pm 0.00$ | $4.00\pm 0.00$ | $2.00\pm 0.00$ | $15.44\pm 0.00$ | $0.00\pm 0.00$ |
| Qwen3-235B-Instruct | $0.36\pm 0.14$ | $-1.11\pm 1.12$ | $0.72\pm 0.28$ | $5.57\pm 2.16$ | $0.77\pm 0.24$ |
| o4-mini | $0.99\pm 0.01$ | $3.94\pm 0.06$ | $1.99\pm 0.01$ | $15.33\pm 0.11$ | $0.01\pm 0.01$ |

## Appendix E Limitations and Future Work

##### Application Scope.

ALIGN studies indirect reciprocity in multi-agent environments where agents
interact under well-specified payoff structures and public gossip channels. While
these settings capture important features of decentralized agent societies,
they remain simplified abstractions of real-world deployments. In practice,
LLM agents may have richer task objectives, heterogeneous capabilities,
private or partially shared communication channels, and non-stationary populations.
Extending ALIGN to more realistic agentic workflows is an important
direction for future work.

##### Beyond Verbal Punishment.

ALIGN relies on cost-free gossip to sustain cooperation in infinite-horizon scenarios.
Future work can examine how costly sanctions, triggered by gossip, might
complement or replace reputation-based incentives, even in finite-horizon interactions.

##### Pre-trained Semantic Priors.

ALIGN leverages the natural-language understanding of LLM agents, which allows
them to interpret evaluative gossip such as praise, complaint, and criticism
without requiring hand-coded signal conventions. However, this also means that
the observed cooperation may partly rely on semantic and social priors learned
during pretraining. In particular, LLMs may already encode human-like assumptions
about reputation, punishment, politeness, and norm violation. A valuable direction
for future work is to study how agents can learn shared gossip conventions endogenously,
for example through RL or hybrid LLM-RL methods, and how such norms vary across
domains, languages, and cultural contexts.

##### Scalability of Public Gossip.

In the current implementation, agents condition on the whole public gossip histories
when evaluating their current partners. Naively placing the entire global
history into every prompt would not scale to large populations. However,
indirect reciprocity does not necessarily require every agent to reason over
all past interactions at every step. A scalable implementation can store the
public gossip pool externally and retrieve only messages relevant to the current
interaction partner, analogous to public review databases or agent-specific
reputation forums. This reduces the active context needed by each LLM call and
preserves the decentralized decision-making structure: agents still make
independent decisions, while the public log only serves as a shared information
substrate.

## Appendix F Additional Related Works

##### Other Reputation-Based Mechanisms.

Gossip provides a decentralized mechanism for reputation formation and norm enforcement ([Jolly & Chang, 2021](https://arxiv.org/html/2602.07777v2#bib.bib18); [Santos et al., 2021](https://arxiv.org/html/2602.07777v2#bib.bib35); [Giardini & Wittek, 2019](https://arxiv.org/html/2602.07777v2#bib.bib13); [Wu et al., 2016](https://arxiv.org/html/2602.07777v2#bib.bib44)).
Public gossip can be especially effective because it broadens information coverage
and facilitates collective coordination ([Bénabou & Tirole, 2006](https://arxiv.org/html/2602.07777v2#bib.bib5); [Blume et al., 2008](https://arxiv.org/html/2602.07777v2#bib.bib8)).
Recent work has extended these ideas to LLM agents. [Vallinder & Hughes (2024)](https://arxiv.org/html/2602.07777v2#bib.bib40)
showed that cooperation can emerge through cultural evolution in finite-horizon
donation games, but their results depend on favorable initial conditions and
are evaluated with a limited model scope. [Ren et al. (2025)](https://arxiv.org/html/2602.07777v2#bib.bib33) proposed
RepuNet, where agents update explicit reputation scores through encounters and
gossip and use these scores to decide whether to maintain connections with others.
However, RepuNet relies on seeding altruistic agents, which departs from our
goal of studying decentralized cooperation among fully self-interested
agents. More broadly, scalar rating systems provide efficient algorithmic
mechanisms for transactional reputation, but typically rely on predefined reputation
metrics and update rules ([Kolonin et al., 2019](https://arxiv.org/html/2602.07777v2#bib.bib20)). In contrast, ALIGN
studies how LLM agents generate and interpret open-ended evaluative messages
as reputation signals, allowing gossip to carry contextual and normative information
beyond scalar ratings.
