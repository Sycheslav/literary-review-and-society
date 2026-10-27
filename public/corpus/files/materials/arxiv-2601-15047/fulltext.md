---
id: arxiv-2601-15047-text
type: material
title: Game-Theoretic Lens on LLM-based Multi-Agent Systems
work_id: arxiv-2601-15047
source_url: https://arxiv.org/html/2601.15047v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 653f6f4a598638e00000c3867875da8181ed90bf79453fcc8d14dfac06895047
---

> Источник: [https://arxiv.org/html/2601.15047v1](https://arxiv.org/html/2601.15047v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Game-Theoretic Lens on LLM-based Multi-Agent Systems

Jianing Hao
Email: [jhao768@connect.hkust-gz.edu.cn](mailto:jhao768@connect.hkust-gz.edu.cn)
  
Han Ding
Affiliation: The Hong Kong University of Science and Technology (Guangzhou),
Beihang University
Email: [handing@buaa.edu.cn](mailto:handing@buaa.edu.cn)
  
Yuanjian Xu
Email: [yxu085@connect.hkust-gz.edu.cn](mailto:yxu085@connect.hkust-gz.edu.cn)
  
Tianze Sun
Email: [suntianze@stu.hit.edu.cn](mailto:suntianze@stu.hit.edu.cn)
  
Ran Chen
Email: [schen@opencsg.com](mailto:schen@opencsg.com)
  
Wanbo Zhang
Affiliation: Harbin Institute of Technology,
OpenCSG,
Fudan University,
Email: [23302010062@m.fudan.edu.cn](mailto:23302010062@m.fudan.edu.cn)
  
Guang Zhang
†
Email: [guangzhang@hkust-gz.edu.cn](mailto:guangzhang@hkust-gz.edu.cn)
  
Siguang Li1
Email: [siguangli@hkust-gz.edu.cn](mailto:siguangli@hkust-gz.edu.cn)

###### Abstract

Large language models (LLMs) have demonstrated strong reasoning, planning, and communication abilities, enabling them to operate as autonomous agents in open environments.
While single-agent systems remain limited in adaptability and coordination, recent progress has shifted attention toward multi-agent systems (MAS) composed of interacting LLMs that pursue cooperative, competitive, or mixed objectives.
This emerging paradigm provides a powerful testbed for studying social dynamics and strategic behaviors among intelligent agents.
However, current research remains fragmented and lacks a unifying theoretical foundation.
To address this gap, we present a comprehensive survey of LLM-based multi-agent systems through a game-theoretic lens.
By organizing existing studies around the four key elements of game theory: players, strategies, payoffs, and information, we establish a systematic framework for understanding, comparing, and guiding future research on the design and analysis of LLM-based MAS.

## 1 Introduction

Multi-agent systems (MAS) have long served as a foundational framework for investigating interaction, decision-making, and strategic behavior among autonomous entities.
Classical research has examined these systems through game-theoretic models [Nash (1950)](https://arxiv.org/html/2601.15047v1#bib.bib1), distributed optimization [Sandholm (1999)](https://arxiv.org/html/2601.15047v1#bib.bib2), reinforcement learning [Littman (1994)](https://arxiv.org/html/2601.15047v1#bib.bib3), and agent-based modeling [Epstein (1999)](https://arxiv.org/html/2601.15047v1#bib.bib4), providing formal tools for understanding coordination, competition, negotiation, and emergent collective behaviors.

The recent advances in large language models (LLMs) have given rise to a new paradigm of multi-agent systems, in which agents can reason [Wei et al. (2022)](https://arxiv.org/html/2601.15047v1#bib.bib5), plan [Huang et al. (2022)](https://arxiv.org/html/2601.15047v1#bib.bib6), and communicate [Li et al. (2023)](https://arxiv.org/html/2601.15047v1#bib.bib9) using natural language.
In such systems, multiple LLM-based agents interact in complex and open-ended environments, exhibiting a wide spectrum of behaviors that may include cooperation [Chen et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib12), competition [Zhu et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib35), negotiation [Hua et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib17), social learning, and other emergent phenomena [Ashery et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib16).

Continuing a line of research in strategic decision-making systems [Silver and others (2016)](https://arxiv.org/html/2601.15047v1#bib.bib43), prior studies have explored LLM-based multi-agent systems in diverse contexts, including task decomposition and planning [Hong et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib11), decision-making under uncertainty [Agashe et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib15), multi-agent coordination [Wu et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib10), social simulation and behavioral modeling [Park et al. (2023)](https://arxiv.org/html/2601.15047v1#bib.bib7), multi-party debate or dialogue [Qian et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib13), and competitive strategy games [Zhu et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib35).
These works highlight the potential of LM-MAS to provide insights into agent interaction, strategic reasoning, communication protocols, and emergent collective behaviors, yet a unified theoretical perspective that systematically organizes these developments is still lacking.

Behind every interaction in a MAS lies a strategic decision-making problem, which is precisely the domain that game theory is designed to model.
As LLM-powered agents become more capable and autonomous, understanding their behavior through a game-theoretic lens becomes essential.
This survey adopts a game-theoretic lens to systematically synthesize existing research on LLM-driven multi-agent systems.
This paper makes the following three contributions:

- •

  We introduce a novel game-theoretic framework for categorizing LLM-based MAS through four core elements: players, strategies, payoffs, and information. This unified perspective facilitates the integration of classical game theory with modern LLM-driven research for systemic analysis of agent interactions.
- •

  We provide a systematic review of the current body of work on LLM-based multi-agent systems, revealing the insights and limitations of current research.
- •

  We identify key research gaps and propose forward-looking research directions, focusing on optimizing equilibrium coordination, designing incentive-compatible communication protocols, and information structure modeling under partial observability.

## 2 Background and Taxonomy

![Refer to caption](https://arxiv.org/html/2601.15047v1/pipeline0116.png)


Figure 1: A game-theoretic framework for LLM-based multi-agent systems illustrates the dynamic interplay between the four core elements of a game: Players, Strategies, Payoffs, and Information.

### 2.1 Foundations of Game Theory

Game theory is the mathematical study of strategic decision-making, where multiple agents interact, and each agent’s outcome depends on the choices made by others.
It studies the strategic interactions of rational decision-makers, where each player seeks to maximize their own payoff.
A normal-form game is defined by the tuple $\Gamma=(N,(S\_{i})\_{i\in N},(u\_{i})\_{i\in N})$, where $N=\{1,\dots,n\}$ is the finite set of players, $S\_{i}$ is the finite set of pure strategies available to player $i$, and $u\_{i}$:$\prod\_{j\in N}S\_{j}\to\mathbb{R}$ is player $i$’s payoff function assigning a real-valued reward to every joint strategy profile.
A strategy profile is a vector $\mathbf{s}=(s\_{1},\dots,s\_{n})\in S\_{1}\times\cdots S\_{j}\cdots\times S\_{n}$, representing the strategy choices of all players.
In this context, we assume that players are rational and aim to maximize their expected utility by selecting strategies that optimize their payoff, based on the information available to them.

Strategies may be pure or mixed. A pure strategy for player $i$ is an element $s\_{i}\in S\_{i}$, while a mixed strategy is a probability distribution $\sigma\_{i}\in\Delta(S\_{i})$ over $S\_{i}$.
Here $\Delta(S\_{i})$ denotes the simplex of probability measures on $S\_{i}$.
A mixed-strategy profile $\sigma=(\sigma\_{1},\dots,\sigma\_{n})$ specifies a distribution over each player’s actions.
Under profile $\sigma$, each pure profile $s=(s\_{1},\dots,s\_{n})$ is chosen with probability $\prod\_{j=1}^{n}\sigma\_{j}(s\_{j})$, and the expected payoff to player $i$ is
$U\_{i}(\sigma)\;=\;\sum\_{s\in S}u\_{i}(s)\prod\_{j=1}^{n}\sigma\_{j}(s\_{j})$.
A pure strategy $s\_{i}$ can be viewed as a special case of a mixed strategy where the probability is concentrated on a single action.

Strategy selection is influenced by both payoffs and information.
Under complete information, all payoff functions and strategy spaces $S\_{i}$ are common knowledge, allowing players to perfectly anticipate others’ behavior.
In contrast, under incomplete information, each player may hold private knowledge or beliefs, modeled as $\theta\_{i}$.
Regardless of the information structure, players choose strategies that maximize their expected utility based on the information available to them.
The attractiveness of strategies is determined by their associated payoffs, while the structure of available information dictates how strategies are conditioned and how beliefs are updated.
A Nash Equilibrium occurs when no player can unilaterally improve their outcome by changing strategies — assuming others keep theirs fixed. This concept is critical in MAS, where agents seek stable strategies in competitive or cooperative settings.

### 2.2 Multi-Agent Systems as Game-Theoretic Environments

A MAS consists of multiple autonomous agents interacting within a shared environment.
Unlike single-agent systems, MAS leverage distributed intelligence, allowing agents to divide work, respond to local signals, and solve complex problems through either collaboration or competition.
Traditional MAS relied on rule-based logic and local policies, though challenges remain where local metrics may misrepresent global behavior, as similar concerns arise in learning-in-games dynamics [Fudenberg and Levine (1998)](https://arxiv.org/html/2601.15047v1#bib.bib41).
However, with the advent of LLMs, agents can engage in natural language reasoning, flexible task negotiation, and strategic coordination.
In the game-theoretic perspective, each agent is modeled as a player $i\in N$ with its own strategy space and utility function.
Shoham and Leyton-Brown [Shoham and Leyton-Brown (2008)](https://arxiv.org/html/2601.15047v1#bib.bib34) describe a MAS as a system of autonomous entities with potentially divergent interests or information, which mirrors the game-theoretic notion of players having different payoffs or private knowledge.
Thus, any MAS interaction can be captured as a strategic-form game: an agent’s possible actions correspond to the player’s strategies, and the agent’s objectives are encoded by its payoff function over joint action profiles.

Communication and coordination are key features in MAS.
Communication can be modeled as pre-play signaling: agents exchange messages or share observations before choosing their actions.
Such signals allow agents to share private information or align expectations.
Coordination problems arise when agents share common goals: if their payoffs are aligned, the MAS essentially operates as a cooperative game.
More generally, coordinating self-interested agents involves finding equilibria in games where multiple consistent strategy profiles exist, or addressing mechanism-design problems that align individual incentives with collective objectives, particularly in settings where communication may carry strategic intent or misrepresentation [Kamenica and Gentzkow (2011)](https://arxiv.org/html/2601.15047v1#bib.bib40).
Autonomy in MAS refers to the absence of a central controller.
Each agent decides independently based on its own payoff and available information.
This reflects the non-cooperative game assumption of decentralized decision-making.
Agents may have private or incomplete information about the environment or other players’ preferences, analogous to players’ types in Bayesian games.
In summary, the features of MAS directly map onto game-theoretic concepts: communication equates to signaling or messaging in games, coordination mirrors signaling in games, coordination corresponds to equilibrium selection or coalition formation, and autonomy reflects independent, utility-maximizing players.

LLM-based MAS introduces unique characteristics.
In these systems, agents are driven by large language models that interact through natural language.
The effective action space consists of potential utterances or text sequences, which is combinatorial and open-ended.
Communication is inherently language-driven, enabling rich negotiation and explanation.
Recent studies have shown that LLM agents can develop communication protocols and roles spontaneously.
Through dialogue, these agents can negotiate resources, delegate tasks, or balance cooperation and competition, demonstrating emergent behaviors such as cooperation, competition, negotiation, and social interaction. This capacity for strategic communication under incentives explicitly links LLM interactions to classical signaling theory.
These characteristics suggest that LLM-based agents operate as game-theoretic players with highly expressive, language-driven strategies and dynamic information exchange, leading to more complex and dynamic interactions than traditional MAS models.

### 2.3 Taxonomy based on Game-Theoretic Elements

In MAS, agents don’t operate in isolation; they interact, influence, and respond to one another.
Game theory provides a formal framework for modeling these interactions by treating agents as strategic players whose choices are interdependent.
We organize our analysis around four core game-theoretic elements: Player, Strategy, Payoff, and Information.
These elements form the foundational components of any strategic model.
We focus on these four dimensions because together they define who the agents are, what actions they can take, what they value, and what they know.
Notably, we do not treat Action as separate from Strategy, as an action is simply a specific strategy choice.
Additionally, we exclude Equilibrium as a primitive element since it is a derived outcome based on the other four components.
In a normal-form game, the strategic interaction is fully determined by the players, their strategy sets, and their payoff functions.
We include Information as a distinct dimension to account for the agents’ private knowledge or type structure, distinguishing between complete- and incomplete-information settings.

These elements interact dynamically.
Each player $i$ has a strategy space $S\_{i}$ and payoff $u\_{i}$, but which strategies are chosen depends on the information available to $i$.
Payoffs dictate incentives: given the available information, a player selects the strategy that maximizes its utility.
Conversely, the strategies chosen and their outcomes can reveal additional information, thereby influencing subsequent payoffs and decisions.
Figure [1](https://arxiv.org/html/2601.15047v1#S2.F1 "Figure 1 ‣ 2 Background and Taxonomy ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems") illustrates these interdependencies: players (P) choose strategies (S) based on payoff incentives and information signals, and the resulting profile produces payoffs and potentially new information.

## 3 Game-Theoretic Elements in MAS

### 3.1 Players

In LLM-based multi-agent systems, agents (players) engage in interactions that extend far beyond traditional two-player games.
Depending on their design and objectives, these agents may differ in capabilities, goals, or access to information, yielding heterogeneous populations that give rise to diverse strategic dynamics.
From a game-theoretic perspective, these interactions can be broadly categorized into cooperative, competitive, and mixed-motive systems, reflecting varying degrees of alignment among agents’ objectives, as illustrated in Figure [2](https://arxiv.org/html/2601.15047v1#S3.F2 "Figure 2 ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").

![Refer to caption](https://arxiv.org/html/2601.15047v1/player0119.png)


Figure 2: Illustration of three interaction structures among LLM-based players.

#### Cooperative Systems.

Cooperative systems involve agents pursuing a shared or aligned objective, often formalized through a welfare function $W(a)$ that aggregates individual utilities.

|  |  |  |
| --- | --- | --- |
|  | $$W(a)\;=\;f\big(u\_{1}(a),\dots,u\_{N}(a)\big),\quad a^{\*}\;=\;\arg\max\_{a\in A}W(a),$$ |  |

where $A=\prod\_{i}A\_{i}$ denotes joint action space, and $f:\mathbb{R}^{N}\to\mathbb{R}$ is an aggregation map.
A common choice is a weighted sum $W(a)=\sum\_{i}w\_{i}u\_{i}(a)$ (linear $f$), while complex scenarios may require nonlinear aggregation for fairness or risk-sensitive goals.
Cooperative LLM agents effectively form an optimistic team, sharing information and coordinating to find the action profile $a^{\*}$ that maximizes joint welfare.

Recent studies have demonstrated the effectiveness of cooperative LLM agents on challenging tasks [Zhu et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib35).
For instance, the Chain-of-Agents (CoA) framework [Zhang et al. (2024c)](https://arxiv.org/html/2601.15047v1#bib.bib19) decomposes a long-context problem into segments handled by sequential “worker” agents followed by a “manager” agent, enabling complex reasoning over extended inputs.
The COPPER [Bo et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib20) system uses self-reflective agents whose outputs are fine-tuned through counterfactual rewards to improve contribution quality.
Role-based dialogue frameworks like CAMEL [Li et al. (2023)](https://arxiv.org/html/2601.15047v1#bib.bib9) use “assistant–user” role-playing to simulate human-like teamwork, generating emergent collaboration behaviors.
Other architectures, like MetaGPT [Hong et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib11), assign specialized roles such as project manager, architect, and developer to agents within software engineering tasks, while AutoGen [Wu et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib10) provides a flexible framework for orchestrating multi-agent interactions.
Empirical evaluations have shown that language-mediated coordination can significantly improve performance on tasks like question answering, coding, and planning.

#### Competitive Systems.

In competitive systems, agents have conflicting objectives.
These can be formalized as (possibly zero-sum) games $G=(\mathcal{N},{A\_{i}},{u\_{i}})$, where each agent $i$ chooses a strategy $\sigma\_{i}\in\Delta(A\_{i})$ to maximize its expected payoff $U\_{i}(\sigma)$.
A Nash equilibrium $(\sigma\_{1}^{\*},\dots,\sigma\_{N}^{\*})$ satisfies the mutual best-response conditions:

|  |  |  |
| --- | --- | --- |
|  | $$U\_{i}(\sigma\_{i}^{\*},\sigma\_{-i}^{\*})\geq U\_{i}(\sigma\_{i},\sigma\_{-i}^{\*})\quad\forall i,\sigma\_{i}.$$ |  |

For two-player zero-sum games, this reduces to the classical minimax equilibrium:

|  |  |  |
| --- | --- | --- |
|  | $$\max\_{\sigma\_{1}}\min\_{\sigma\_{2}}U\_{1}(\sigma\_{1},\sigma\_{2})=\min\_{\sigma\_{2}}\max\_{\sigma\_{1}}U\_{1}(\sigma\_{1},\sigma\_{2}).$$ |  |

LLM agents have been evaluated in adversarial benchmarks and games.
For example, GTBench [Duan et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib21) is a game-theoretic benchmark with ten classic games (board, card, negotiation, auctions) probing pure strategic reasoning.
Another testbed, GameBench [Costarelli et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib36), covers nine diverse game environments, revealing that GPT-4 still struggles to match human-level performance in zero-sum games.
Specialized competitive frameworks, such as multi-agent debate systems [Cheng et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib37), facilitate agents arguing opposing viewpoints, thereby refining their answers.
Empirical studies report that, though limitations in multi-step strategy anticipation remain, such competitive exercises help LLMs exhibit long-term planning and opponent modeling.

#### Mixed-Motive Systems.

Most realistic multi-agent environments blend cooperation and competition.
In mixed-motive games, each agent balances self-interest and collective welfare, captured by:

|  |  |  |
| --- | --- | --- |
|  | $$u\_{i}(a)=\alpha\_{i}\,v\_{i}^{\mathrm{self}}(a)+(1-\alpha\_{i})\,v^{\mathrm{col}}(a),\quad\alpha\_{i}\in[0,1],$$ |  |

where $v\_{i}^{\mathrm{self}}$ is agent $i$’s private payoff and $v^{\mathrm{col}}$ is a shared team payoff. The parameter $\alpha\_{i}$ encodes the degree of self-interest versus collaboration. Designing incentives in such systems often involves mechanism design: for example, introducing transfers $t\_{i}(a)$ that reward or penalize agents so that truthful, team-oriented behavior is an equilibrium. A common requirement is incentive compatibility (IC) and budget balance (BB), consistent with classical mechanism design principles [Mas-Colell et al. (1995)](https://arxiv.org/html/2601.15047v1#bib.bib44):

|  |  |  |
| --- | --- | --- |
|  | $$\text{IC: }\sigma\_{i}^{\*}\!\in\!\arg\max\_{\sigma\_{i}}\mathbb{E}[u\_{i}(a)+t\_{i}(a)],\quad\text{BB: }\sum\_{i}\mathbb{E}[t\_{i}(a)]=0.$$ |  |

These constraints ensure that following the intended strategy is optimal for each agent without external subsidies.

Recent work has begun to explore mixed-motive LLM systems.
Orner et al. [Orner et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib22) investigate explanation methods for agents in mixed-motive games such as variants of Diplomacy and iterated Prisoner’s Dilemma, highlighting how interleaved cooperation and competition create complex social dilemmas.
Complementing these empirical investigations, Duetting et al. [Duetting et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib38) adopt a mechanism-design perspective, framing LLMs as bidding agents within an auction for generated content that is formally designed to ensure incentive compatibility and truthful reporting.
Furthermore, the MAC-SPGG framework [Liang et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib39) addresses the strategic alignment of motives through sequential public-goods games.
This framework proves that by precisely tuning public-goods rewards, a Subgame Perfect Nash Equilibrium (SPNE) can be induced to foster universal cooperation.
Collectively, these diverse methodologies—ranging from auction theory to sequential game modeling—demonstrate that carefully structured incentives can effectively align LLM motives and sustain stable collaboration, even when individual objectives diverge.

### 3.2 Strategies and Equilibrium

Effective strategy development is crucial for multi-agent LLM systems, where agents often need to account for both cooperation and competition.
Building on language-mediated strategic agents like CICERO [(FAIR)† et al. (2022)](https://arxiv.org/html/2601.15047v1#bib.bib42), the LLM-Nash framework [Zhu (2025)](https://arxiv.org/html/2601.15047v1#bib.bib24) models each agent as selecting reasoning prompts as strategies, defining a “reasoning equilibrium” over the prompt space.
Unlike classical games with fully rational players, LLM–Nash captures bounded rationality by explicitly modeling the reasoning process.
It shows that these reasoning equilibria can diverge from classical Nash outcomes, reflecting the unique strategic behaviors of LLM agents.
This highlights that LLMs can converge to new equilibrium-like behaviors through iterative dialogue and prompting, effectively approximating game-theoretic reasoning in non-cooperative settings.

Self-play is another powerful tool for strategy formation.
In self-play, an agent competes against copies of itself, refining its strategy through trial and error [Zhang et al. (2024b)](https://arxiv.org/html/2601.15047v1#bib.bib25).
This approach has been used in multi-agent reinforcement learning (MARL), where agents learn not only by interacting with a fixed environment but also by improving their strategies over time based on their own behavior.
Recent studies show that self-play can significantly enhance LLM strategies by enabling agents to explore a wide range of tactics and counter-strategies. Through reinforcement learning (RL) and policy optimization, LLMs can adjust their behavior to improve their outcomes in repeated or evolving strategic environments. This iterative process allows LLMs to converge toward optimal strategies.
SPIRAL [Liu et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib26) leverages this idea by having two LLM agents play multi-turn, zero-sum language games against each other. It employs a fully online, multi-turn, multi-agent RL system so that all model parameters are continually updated during self-play.
SPIRAL demonstrates that competitive self-play not only drives agents toward strong gameplay strategies (akin to reaching equilibrium) but also endows them with general problem-solving tactics.
MARSHAL [Yuan et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib18) framework similarly shows that self-play in strategic games can generalize to diverse reasoning tasks.
MARSHAL uses turn-level advantage estimation and self-play in both cooperative and competitive games, finding that it strengthens LLM strategic abilities and yields gains on multi-agent benchmarks.

### 3.3 Payoffs

In multi-agent systems, the payoff structure plays a critical role in designing effective mechanisms.
Each agent’s goal is to maximize its own reward through some strategies, but in a multi-agent setting, the rewards of the agents are often not aligned.
The challenge lies in designing appropriate reward mechanisms that align individual objectives with the collective goals, ensuring that agents’ behavior is optimized for both individual success and system-wide efficiency.

#### Mechanism Design.

Effective mechanism design requires that the incentive structures of agents align with the system’s collective objective.
In a multi-agent environment, let each agent $i$ have an individual reward function $R\_{i}(s,a)$, and the system’s overall objective is represented by a social welfare function $W(s,a)=f\big(R\_{1}(s,a),\dots,R\_{N}(s,a)\big)$, where $f(\cdot)$ might represent a combination of fairness, efficiency, or safety considerations, aligning conceptually with welfare maximization in microeconomics [Mas-Colell et al. (1995)](https://arxiv.org/html/2601.15047v1#bib.bib44).
Misalignment arises when maximizing $R\_{i}$ does not necessarily improve $W$, and this misalignment can lead to suboptimal outcomes for the system.

To quantify this misalignment, we define each agent’s deviation gain under a joint policy $\pi=(\pi\_{1},\dots,\pi\_{N})$ as

|  |  |  |
| --- | --- | --- |
|  | $$\Delta\_{i}(\pi)=\max\_{\pi\_{i}^{\prime}}\mathbb{E}\!\left[R\_{i}(s,a\_{i}^{\prime},a\_{-i})\right]-\mathbb{E}\!\left[R\_{i}(s,a)\right],$$ |  |

which indicates how much agent $i$ can gain by unilaterally deviating from the joint policy.
A cooperative mechanism should minimize these deviation gains while improving the collective objective. The general alignment framework can be expressed as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\max\_{\mathcal{M}}$ | $\displaystyle\mathbb{E}\!\left[W(s,a)\right]$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\text{s.t.}$ | $\displaystyle\mathbb{E}\!\left[R\_{i}(s,a)\right]\geq\mathbb{E}\!\left[R\_{i}(s,a\_{i}^{\prime},a\_{-i})\right],\quad\forall i,\;\forall\pi\_{i}^{\prime},$ |  |

where $\mathcal{M}$ represents the designed reward or transfer mechanism ensuring incentive compatibility.
This alignment mechanism ensures that agents’ behaviors are motivated by the collective good while minimizing selfish deviations.

#### Reward Shaping.

Reward shaping provides a practical way to adjust agent incentives while preserving local autonomy.
A shaped reward might take the form:

|  |  |  |
| --- | --- | --- |
|  | $$R\_{i}^{\prime}(s,a,s^{\prime})=R\_{i}(s,a,s^{\prime})+\gamma\,\Phi\_{i}(s^{\prime})-\Phi\_{i}(s),$$ |  |

where $\Phi\_{i}(s)$ is a potential function that adjusts the temporal credit assignment without altering the cooperative optimum.
Through this approach, reward shaping can accelerate convergence and maintain stability across agents with heterogeneous goals.
For instance, COPPER [Bo et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib20) introduces self-reflection as a method for improving cooperation, where agents adjust their incentives internally to better fulfill collaborative tasks.
While no explicit mathematical form of reward adjustment is given, this approach can be understood as the introduction of new incentive mechanisms that encourage agents to reflect on their contributions to cooperation.
In combination with mechanism design, reward shaping ensures that agents remain aligned with system-level goals while maintaining their individual autonomy. This method is particularly useful in multi-agent systems where agents must balance personal incentives with collective performance.

#### Penalty and Regulation Mechanisms.

In addition to reward shaping, penalty and regulation mechanisms are essential tools for regulating agent behavior. By introducing a penalty function $\Psi\_{i}(s,a)$, undesirable behaviors such as ethical violations or resource misuse can be discouraged, further driving agents toward socially beneficial behaviors. The regulated reward can then be expressed as:

|  |  |  |
| --- | --- | --- |
|  | $$\tilde{R}\_{i}(s,a,s^{\prime})=R\_{i}^{\prime}(s,a,s^{\prime})-\lambda\_{i}\,\Psi\_{i}(s,a),$$ |  |

where $\lambda\_{i}>0$ controls the strength of the regulatory enforcement. This formulation integrates soft constraints directly into the learning signal, allowing agents to trade off performance and compliance dynamically.
For safety-critical or ethically sensitive systems, such as those involving human interactions or resource management, penalty-based regulation is essential to ensure that agents do not exploit or harm the system.
Explicit regulatory constraints can also be imposed at the policy level, where actions violating safety or ethical norms are excluded from the feasible set:

|  |  |  |
| --- | --- | --- |
|  | $$\pi\_{i}(a|s)=0\quad\text{if}\quad\Psi\_{i}(s,a)>\tau\_{i},$$ |  |

where $\tau\_{i}$ is a threshold above which actions are deemed unacceptable.

Recent studies [Reid et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib23); [Li et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib31); [Zhang et al. (2024a)](https://arxiv.org/html/2601.15047v1#bib.bib30) have highlighted the importance of incorporating regulatory signals in multi-agent systems, showing that integrating explicit or implicit regulatory feedback—whether linguistic, feedback-based, or self-penalization—can substantially improve both ethical compliance and long-term system stability.
Empirical frameworks such as FinCon [Yu et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib29), CORY [Ma et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib27), and ProAgent [Zhang et al. (2024a)](https://arxiv.org/html/2601.15047v1#bib.bib30) demonstrate how structured reward signals, verbal feedback, or reflective evaluation can operationalize such alignment strategies in practice.

### 3.4 Information

![Refer to caption](https://arxiv.org/html/2601.15047v1/information0119.png)


Figure 3: Illustration of information structures among LLM-based players.

The information structure of a system fundamentally determines the strategic complexity and coordination potential among agents.
Let $\mathcal{I}\_{i}(s)$ denote the information available to agent $i$ at state $s$.
The strategic formulation of such systems can be expressed as a Bayesian game:

|  |  |  |
| --- | --- | --- |
|  | $$U\_{i}(a\_{i},a\_{-i})=\mathbb{E}\_{\theta\_{i}\sim p(\theta\_{i}\mid\mathcal{I}\_{i})}\!\left[R\_{i}(s,a\_{i},a\_{-i},\theta\_{i})\right],$$ |  |

where $\theta\_{i}$ represents private information or beliefs. This connects LLM-mediated interaction with classical incomplete-information games.
The equilibrium efficiency thus depends critically on how $\mathcal{I}\_{i}$ is structured and shared across agents.

#### Full Observability.

Under complete information, all agents share the global state and can observe each other’s actions and payoffs (as shown in Figure [3](https://arxiv.org/html/2601.15047v1#S3.F3 "Figure 3 ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems") (a)).
Such transparency enables joint planning but requires greater communication or computation.
The AgentVerse framework [Chen et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib12) demonstrates how full information sharing enhances performance in expert-agent collaboration.
Similarly, the Chain-of-Agents [Zhang et al. (2024c)](https://arxiv.org/html/2601.15047v1#bib.bib19) and COPPER [Bo et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib20) frameworks leverage complete observability to facilitate seamless sequential reasoning and reflective adaptation.
Full observability fosters emergent role-based collaboration and stronger generalization.
Even in simpler cooperative setups like CAMEL [Li et al. (2023)](https://arxiv.org/html/2601.15047v1#bib.bib9), the shared full state empowers the two role-assigned LLMs to coordinate tightly and outperform single-agent baselines.
From a game-theoretic lens, complete information approximates a common-knowledge environment, where every player’s beliefs about others’ knowledge converge, simplifying equilibrium computation.

#### Partial Observability.

By contrast, incomplete information is more realistic but challenging.
Each agent receives a signal or observation $\theta\_{i}$, and must select actions according to a belief distribution $b\_{i}(s)=P(s\mid\theta\_{i})$ (as shown in Figure [3](https://arxiv.org/html/2601.15047v1#S3.F3 "Figure 3 ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems") (b)).
The optimal policy in such environments maximizes the expected return:

|  |  |  |
| --- | --- | --- |
|  | $$\pi\_{i}^{\*}(\theta\_{i})=\arg\max\_{\pi\_{i}}\mathbb{E}\_{s\sim b\_{i},\,a\_{i}\sim\pi\_{i}(\theta\_{i})}\!\left[R\_{i}(s,a\_{i},a\_{-i})\right].$$ |  |

Li et al. [Li et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib31) introduce a language-grounded multi-agent reinforcement learning (MARL) pipeline where agents learn to communicate in natural language, which accelerates the emergence of effective protocols and even generalizes zero-shot to new teammates.
Additional studies on reliable decision-making [Lee et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib32) examine how agents coordinate effectively under distributed or incomplete information. It demonstrates that simple voting or independent aggregation among agents often outperforms complex iterative feedback loops, as error propagation from multi-round dialogue may destabilize the system.

Incomplete information games have been explicitly tested, ranging from multi-issue negotiations [Abdelnabi et al. (2023)](https://arxiv.org/html/2601.15047v1#bib.bib33) to games like Poker and auctions [Hua et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib17). Both works reveal that while naive LLMs often struggle with large hidden states or deviate from game-theoretic rationality, their performance improves significantly with structured reasoning.
Benchmarks further illustrate the impact of limited information.
GTBench [Duan et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib21) finds that LLMs fail completely informed deterministic games (like Tic-Tac-Toe) but can remain competitive in chance-driven or stochastic games.
Real-world style simulations also highlight these effects.
Park et al. [Park et al. (2023)](https://arxiv.org/html/2601.15047v1#bib.bib7) show that 25 generative agents can coordinate complex social tasks through local memory and iterative dialogue.
Piao et al. [Piao et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib8) scale this to 10,000 agents, demonstrating how macro-phenomena like polarization emerge from decentralized exchanges.
Together, they prove that agents can bridge partial observability by using inter-agent communication to infer global context from local interactions.

## 4 Discussion

In this section, we first review representative benchmarks in this field.
Section [4.2](https://arxiv.org/html/2601.15047v1#S4.SS2 "4.2 Case Studies ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems") then analyzes specific examples to show how game theory empowers the design of LLM agents.
Finally, Section [4.3](https://arxiv.org/html/2601.15047v1#S4.SS3 "4.3 Future Directions ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems") identifies critical gaps and proposes potential research directions for the field.

### 4.1 Benchmark

Benchmarks for LLM-based multi-agent systems are categorized into two primary groups focusing on fundamental capabilities and specialized domain applications respectively.

#### General-purpose Cognitive Benchmarks.

These benchmarks evaluate coordination and reasoning by decoupling core capabilities from domain knowledge.
For instance, GAIA requires agents to execute multi-step tasks, such as retrieving historical data to perform calculations, to test their ability to decompose problems autonomously.

#### Domain-specific evaluation frameworks.

These shift the focus toward functional utility within vertical sectors. Environments, such as software engineering repositories or clinical diagnostic simulators, require agents to possess deep ontological knowledge and specialized tool-calling proficiency.
Evaluation here is centered on the agent’s adherence to professional protocols and its efficiency in executing collaborative workflows that mimic real-world industry demands.

Table 1: A Taxonomy of Representative MAS Benchmarks.
Benchmarks are grouped by application domain, reflecting the shift from general-purpose coordination to domain-specialized multi-agent collaboration.

|  |  |  |
| --- | --- | --- |
| Category | Domain | Representative Benchmarks |
| General | General / Mixed | MultiAgentBench [Zhu et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib35); GAIA [Mialon et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib45); AgentVerse [Chen et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib12); Magentic-One [Fourney et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib46) |
| Specialized | Data Science | MLE-bench [Chan et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib47); DSBench [Jing et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib48); DABstep [Egg et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib49) *(autonomous ML engineering)* |
| Software Engineering | SWE-bench [Jimenez et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib50); rSDE-bench [Hu et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib51) *(repository-level reasoning)* |
| Finance | FinBen [Xie et al. (2024b)](https://arxiv.org/html/2601.15047v1#bib.bib52); AI-Trader [Fan et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib53); FinGAIA [Zeng et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib54) *(role-specialized decision making)* |
| Planning / Robotics | TravelPlanner [Xie et al. (2024a)](https://arxiv.org/html/2601.15047v1#bib.bib55); MAP-THOR [Nayak et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib56); PARTNR [Chang et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib57) *(long-horizon coordination)* |

### 4.2 Case Studies

![Refer to caption](https://arxiv.org/html/2601.15047v1/case1_0118.png)


Figure 4: Framework and performance of SWE-Debate. (Left) The workflow incorporates a multi-agent debate mechanism to iteratively refine modification plans. (Right) This competitive architecture achieves a SOTA 41.4% Pass@1 (DeepSeek-V3), significantly outperforming non-competitive baselines and validating the efficacy of adversarial interactions.

Case One: A carefully orchestrated competitive mechanism in MAS is pivotal for automated software repair.

For example, SWE-Debate [Li et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib14) formulates software resolution as a non-cooperative game, leveraging multi-path fault traces as initial strategies to escape single-agent local optima.
Through structured three-round debates, agents are forced into a “defend-and-critique” cycle that exposes latent architectural trade-offs.
This adversarial tension allows the discriminator to synthesize robust evidence, resolving ambiguities to reach a globally optimal equilibrium.

![Refer to caption](https://arxiv.org/html/2601.15047v1/case2_0119_1.png)


Figure 5: Reward shaping in the FinCon framework.
(Left) A decentralized multi-agent financial system coordinated by a manager agent, where agent behaviors are guided through shaped rewards derived from heterogeneous financial observations.
(Right) Empirical comparison illustrating how reward shaping and regulatory penalties influence agent performance across assets and backbone models.

Case Two: Reward shaping and regulation can align decentralized incentives with systemic stability in financial decision-making.

Financial markets are inherently complex systems characterized by intricate interdependencies, with theoretical foundations deeply rooted in market microstructure under asymmetric information [Xu et al. (2025)](https://arxiv.org/html/2601.15047v1#bib.bib28). In such environments where agents face a fundamental conflict between private profit $v\_{i}^{self}$ and market stability $v^{col}$, the FinCon [Yu et al. (2024)](https://arxiv.org/html/2601.15047v1#bib.bib29) framework demonstrate that modifying reward signals is essential for ensuring ethical and stable outcomes.
From a game-theoretic perspective, by applying reward shaping through potential functions $\Phi\_{i}(s)$, the system accelerates convergence toward cooperative goals without altering the optimal policy, while regulatory mechanisms integrate penalty functions $\Psi\_{i}(s,a)$ to discourage undesirable behaviors like resource misuse or ethical violations.
These structured reward interventions, which can include verbal feedback or self-penalization, effectively steer decentralized LLM agents toward a stable equilibrium where individual motives are aligned with the collective good.

### 4.3 Future Directions

#### Hierarchical Superagent Orchestration.

Current MAS largely rely on predefined protocols or static role assignments. Future research should transition toward Autonomous Superagents characterized by two core functionalities:

1. 1.

   Resource Planning: The rational orchestration of existing agents and tools through high-level meta-coordination to resolve complex, long-context tasks.
2. 2.

   Generative Agent Synthesis: The dynamic creation of specialized novel agents tailored to emergent environmental requirements.

These systems must act as mechanism designers to resolve architectural trade-offs via collaborative synthesis or structured adversarial tension.

#### Agentic Evolution.

To transcend the limitations of fixed-policy interactions, Agentic RL serves as a critical paradigm for continuous strategy evolution.
Research should model prompt selection as strategic actions, identifying a “reasoning equilibrium” that accounts for LLMs’ bounded rationality.
Leveraging competitive self-play and turn-level advantage estimation, agents can update parameters dynamically.
This iterative process enables convergence toward optimal strategies in both zero-sum and cooperative language games.

#### Theoretical Formalization

Current solutions rely on heuristic implementations but lack strict mathematical formalization. This limits the theoretical analysis of multi-agent interactions. Future work should establish a rigorous framework to model decision-making under incomplete information, such as through the lens of Bayesian games. A key challenge involves designing incentive-compatible protocols that guarantee truthful signaling and align decentralized actions with systemic stability.

## 5 Conclusion

We provide a comprehensive survey of LLM-based MAS through a game-theoretic lens, offering a unified theoretical foundation for this rapidly evolving field.
By organizing current research around the core elements of players, strategies, payoffs, and information, we establish a systematic framework to categorize diverse agent behaviors and interaction dynamics.
Our analysis reveals that while LLMs excel in high-level reasoning and strategic communication, significant gaps remain in robust equilibrium selection and incentive compatibility in complex, partially observable environments.
We conclude by highlighting forward-looking research directions, emphasizing that the integration of classical game theory with LLMs will be pivotal for developing more reliable, autonomous, and socially intelligent multi-agent systems.

## References

- (FAIR)† et al. (2022)
  M. F. A. R. D. T. (FAIR)†, A. Bakhtin, N. Brown, et al.
  Human-level play in the game of diplomacy by combining language models with strategic reasoning.
  Science 378 (6624), pp. 1067–1074.
  Cited by: [§3.2](https://arxiv.org/html/2601.15047v1#S3.SS2.p1.1 "3.2 Strategies and Equilibrium ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Abdelnabi et al. (2023)
  S. Abdelnabi, A. Gomaa, S. Sivaprasad, et al.
  LLM-deliberation: evaluating llms with interactive multi-agent negotiation game.
  arXiv preprint arXiv:2309.17234.
  Cited by: [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p2.1 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Agashe et al. (2025)
  S. Agashe, Y. Fan, A. Reyna, and X. E. Wang
  LLM-coordination: evaluating and analyzing multi-agent coordination abilities in large language models.
  In Proc. NAACL,
  pp. 8038–8057.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Ashery et al. (2025)
  A. F. Ashery, L. M. Aiello, and A. Baronchelli
  Emergent social conventions and collective bias in llm populations.
  Sci. Adv. 11 (20), pp. eadu9368.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Bo et al. (2024)
  X. Bo, Z. Zhang, Q. Dai, et al.
  Reflective multi-agent collaboration based on large language models.
  Proc. NeurIPS 37, pp. 138595–138631.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px1.p2.1 "Cooperative Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px2.p1.2 "Reward Shaping. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px1.p1.1 "Full Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Chan et al. (2025)
  J. S. Chan, N. Chowdhury, O. Jaffe, et al.
  MLE-bench: evaluating machine learning agents on machine learning engineering.
  In Proc. ICLR,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.3.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Chang et al. (2025)
  M. Chang, G. Chhablani, A. Clegg, et al.
  PARTNR: A benchmark for planning and reasoning in embodied multi-agent tasks.
  In Proc. ICLR,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.6.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Chen et al. (2024)
  W. Chen, Y. Su, J. Zuo, et al.
  AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In Proc. ICLR,
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px1.p1.1 "Full Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.2.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Cheng et al. (2024)
  P. Cheng, Y. R. Dai, T. Hu, et al.
  Self-playing adversarial language game enhances llm reasoning.
  Proc. NeurIPS 37, pp. 126515–126543.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px2.p2.1 "Competitive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Costarelli et al. (2024)
  A. Costarelli, M. Allen, R. Hauksson, et al.
  Gamebench: evaluating strategic reasoning abilities of llm agents.
  arXiv preprint arXiv:2406.06613.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px2.p2.1 "Competitive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Duan et al. (2024)
  J. Duan, R. Zhang, J. Diffenderfer, et al.
  GTBench: uncovering the strategic reasoning limitations of llms via game-theoretic evaluations.
  In Proc. NeurIPS,
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px2.p2.1 "Competitive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p2.1 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Duetting et al. (2024)
  P. Duetting, V. Mirrokni, R. Paes Leme, et al.
  Mechanism design for large language models.
  In Proc. ACM Web Conf.,
  pp. 144–155.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px3.p2.1 "Mixed-Motive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Egg et al. (2025)
  A. Egg, M. I. Goyanes, F. Kingma, et al.
  DABstep: data agent benchmark for multi-step reasoning.
  arXiv preprint arXiv:2506.23719.
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.3.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Epstein (1999)
  J. M. Epstein
  Agent-based computational models and generative social science.
  Complexity 4 (5), pp. 41–60.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p1.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Fan et al. (2025)
  T. Fan, Y. Yang, Y. Jiang, et al.
  AI-trader: benchmarking autonomous agents in real-time financial markets.
  arXiv preprint arXiv:2512.10971.
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.5.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Fourney et al. (2024)
  A. Fourney, G. Bansal, H. Mozannar, et al.
  Magentic-one: A generalist multi-agent system for solving complex tasks.
  arXiv preprint arXiv:2411.04468.
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.2.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Fudenberg and Levine (1998)
  D. Fudenberg and D. K. Levine
  The theory of learning in games.
  Vol. 2, MIT press.
  Cited by: [§2.2](https://arxiv.org/html/2601.15047v1#S2.SS2.p1.1 "2.2 Multi-Agent Systems as Game-Theoretic Environments ‣ 2 Background and Taxonomy ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Hong et al. (2024)
  S. Hong, M. Zhuge, J. Chen, et al.
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In Proc. ICLR,
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px1.p2.1 "Cooperative Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Hu et al. (2024)
  Y. Hu, Y. Cai, Y. Du, et al.
  Self-evolving multi-agent collaboration networks for software development.
  arXiv preprint arXiv:2410.16946.
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.4.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Hua et al. (2024)
  W. Hua, O. Liu, L. Li, et al.
  Game-theoretic llm: agent workflow for negotiation games.
  arXiv preprint arXiv:2411.05990.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p2.1 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Huang et al. (2022)
  W. Huang, P. Abbeel, D. Pathak, and I. Mordatch
  Language models as zero-shot planners: extracting actionable knowledge for embodied agents.
  In Proc. ICML,
  pp. 9118–9147.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Jimenez et al. (2024)
  C. E. Jimenez, J. Yang, A. Wettig, et al.
  SWE-bench: can language models resolve real-world github issues?.
  In Proc. ICLR,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.4.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Jing et al. (2025)
  L. Jing, Z. Huang, X. Wang, et al.
  DSBench: how far are data science agents from becoming data science experts?.
  In Proc. ICLR,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.3.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Kamenica and Gentzkow (2011)
  E. Kamenica and M. Gentzkow
  Bayesian persuasion.
  American Economic Review 101 (6), pp. 2590–2615.
  Cited by: [§2.2](https://arxiv.org/html/2601.15047v1#S2.SS2.p2.1 "2.2 Multi-Agent Systems as Game-Theoretic Environments ‣ 2 Background and Taxonomy ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Lee et al. (2025)
  X. Y. Lee, S. Akatsuka, L. Vidyaratne, et al.
  Reliable decision-making for multi-agent llm systems.
  arXiv preprint arXiv:2406.04092.
  Cited by: [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p1.2 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Li et al. (2023)
  G. Li, H. A. A. K. Hammoud, H. Itani, et al.
  CAMEL: communicative agents for mind exploration of large language model society.
  Proc. NeurIPS 36, pp. 51991–52008.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px1.p2.1 "Cooperative Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px1.p1.1 "Full Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Li et al. (2025)
  H. Li, Y. Shi, S. Lin, et al.
  Swe-debate: competitive multi-agent debate for software issue resolution.
  arXiv preprint arXiv:2507.23348.
  Cited by: [§4.2](https://arxiv.org/html/2601.15047v1#S4.SS2.p2.1 "4.2 Case Studies ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Li et al. (2024)
  H. Li, H. N. Mahjoub, B. Chalaki, et al.
  Language grounded multi-agent reinforcement learning with human-interpretable communication.
  In Proc. NeurIPS,
  Vol. 37, pp. 87908–87933.
  External Links: [Document](https://dx.doi.org/10.52202/079017-2790)
  Cited by: [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px3.p2.1 "Penalty and Regulation Mechanisms. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p1.2 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Liang et al. (2025)
  Y. Liang, Y. Qu, J. Yang, et al.
  Everyone contributes! incentivizing strategic cooperation in multi-llm systems via sequential public goods games.
  arXiv preprint arXiv:2508.02076.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px3.p2.1 "Mixed-Motive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Littman (1994)
  M. L. Littman
  Markov games as a framework for multi-agent reinforcement learning.
  In Proc. ICML,
  pp. 157–163.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p1.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Liu et al. (2025)
  B. Liu, L. Guertler, S. Yu, et al.
  SPIRAL: self-play on zero-sum games incentivizes reasoning via multi-agent multi-turn reinforcement learning.
  arXiv preprint arXiv:2506.24119.
  Cited by: [§3.2](https://arxiv.org/html/2601.15047v1#S3.SS2.p2.1 "3.2 Strategies and Equilibrium ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Ma et al. (2024)
  H. Ma, T. Hu, Z. Pu, et al.
  Coevolving with the other you: fine-tuning llm with sequential cooperative multi-agent reinforcement learning.
  Proc. NeurIPS 37, pp. 15497–15525.
  Cited by: [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px3.p2.1 "Penalty and Regulation Mechanisms. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Mas-Colell et al. (1995)
  A. Mas-Colell, M. D. Whinston, J. R. Green, et al.
  Microeconomic theory.
  Vol. 1, Oxford university press New York.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px3.p1.2 "Mixed-Motive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px1.p1.1 "Mechanism Design. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Mialon et al. (2024)
  G. Mialon, C. Fourrier, T. Wolf, Y. LeCun, and T. Scialom
  GAIA: a benchmark for general AI assistants.
  In Proc. ICLR,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.2.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Nash (1950)
  J. Nash
  Equilibrium points in n-person games.
  Proceedings of the National Academy of Sciences 36 (1), pp. 48–49.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p1.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Nayak et al. (2024)
  S. Nayak, A. M. Orozco, M. T. Have, et al.
  MAP-THOR: benchmarking long-horizon multi-agent planning frameworks in partially observable environments.
  In Proc. Multi-modal Found. Model Meets Embodied AI Workshop, ICML 2024,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.6.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Orner et al. (2025)
  M. Orner, O. Maksimov, A. Kleinerman, et al.
  Explaining decisions of agents in mixed-motive games.
  In Proc. AAAI,
  pp. 23267–23275.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px3.p2.1 "Mixed-Motive Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Park et al. (2023)
  J. S. Park, J. C. O’Brien, C. J. Cai, et al.
  Generative agents: interactive simulacra of human behavior.
  Proc. UIST, pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p2.1 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Piao et al. (2025)
  J. Piao, Y. Yan, J. Zhang, et al.
  Agentsociety: large-scale simulation of llm-driven generative agents advances understanding of human behaviors and society.
  arXiv preprint arXiv:2502.08691.
  Cited by: [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px2.p2.1 "Partial Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Qian et al. (2024)
  C. Qian, W. Liu, H. Liu, et al.
  Chatdev: communicative agents for software development.
  In Proc. ACL,
  pp. 15174–15186.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Reid et al. (2025)
  A. Reid, S. O’Callaghan, L. Carroll, and T. Caetano
  Risk analysis techniques for governed llm-based multi-agent systems.
  arXiv preprint arXiv:2508.05687.
  Cited by: [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px3.p2.1 "Penalty and Regulation Mechanisms. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Sandholm (1999)
  T. W. Sandholm
  Distributed rational decision making.
  In Multiagent Systems: A Modern Approach to Distributed Artificial Intelligence,
  pp. 201–258.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p1.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Shoham and Leyton-Brown (2008)
  Y. Shoham and K. Leyton-Brown
  Multiagent systems: algorithmic, game-theoretic, and logical foundations.
   Cambridge University Press.
  Cited by: [§2.2](https://arxiv.org/html/2601.15047v1#S2.SS2.p1.1 "2.2 Multi-Agent Systems as Game-Theoretic Environments ‣ 2 Background and Taxonomy ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Silver et al. (2016)
  D. Silver et al.
  Mastering the game of go with deep neural networks and tree search.
  Nature 529 (7587), pp. 484–489.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Wei et al. (2022)
  J. Wei, X. Wang, D. Schuurmans, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  In Proc. NeurIPS,
  Vol. 35, pp. 24824–24837.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Wu et al. (2024)
  Q. Wu, G. Bansal, J. Zhang, et al.
  AutoGen: enabling next-gen LLM applications via multi-agent conversations.
  In First Conference on Language Modeling,
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px1.p2.1 "Cooperative Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Xie et al. (2024a)
  J. Xie, K. Zhang, J. Chen, et al.
  TravelPlanner: A benchmark for real-world planning with language agents.
  In Proc. ICML,
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.6.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Xie et al. (2024b)
  Q. Xie, W. Han, Z. Chen, et al.
  Finben: a holistic financial benchmark for large language models.
  Proc. NeurIPS 37, pp. 95716–95743.
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.5.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Xu et al. (2025)
  Y. Xu, J. Hao, G. Zhang, et al.
  FinRipple: aligning large language models with financial market for event ripple effect awareness.
  In Proc. ACL Findings,
  Cited by: [§4.2](https://arxiv.org/html/2601.15047v1#S4.SS2.p4.1 "4.2 Case Studies ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Yu et al. (2024)
  Y. Yu, Z. Yao, H. Li, et al.
  Fincon: a synthesized llm multi-agent system with conceptual verbal reinforcement for enhanced financial decision making.
  Proc. NeurIPS 37, pp. 137010–137045.
  Cited by: [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px3.p2.1 "Penalty and Regulation Mechanisms. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§4.2](https://arxiv.org/html/2601.15047v1#S4.SS2.p4.1 "4.2 Case Studies ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Yuan et al. (2025)
  H. Yuan, Z. Xu, Z. Tan, et al.
  MARSHAL: incentivizing multi-agent reasoning via self-play with strategic llms.
  arXiv preprint arXiv:2510.15414.
  Cited by: [§3.2](https://arxiv.org/html/2601.15047v1#S3.SS2.p2.1 "3.2 Strategies and Equilibrium ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Zeng et al. (2025)
  L. Zeng, F. Lou, Z. Wang, et al.
  FinGAIA: A chinese benchmark for AI agents in real-world financial domain.
  arXiv preprint arXiv:2507.17186.
  Cited by: [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.5.2.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Zhang et al. (2024a)
  C. Zhang, K. Yang, S. Hu, et al.
  Proagent: building proactive cooperative agents with large language models.
  In Proc. AAAI,
  pp. 17591–17599.
  Cited by: [§3.3](https://arxiv.org/html/2601.15047v1#S3.SS3.SSS0.Px3.p2.1 "Penalty and Regulation Mechanisms. ‣ 3.3 Payoffs ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Zhang et al. (2024b)
  R. Zhang, Z. Xu, C. Ma, et al.
  A survey on self-play methods in reinforcement learning.
  arXiv preprint arXiv:2408.01072.
  Cited by: [§3.2](https://arxiv.org/html/2601.15047v1#S3.SS2.p2.1 "3.2 Strategies and Equilibrium ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Zhang et al. (2024c)
  Y. Zhang, R. Sun, Y. Chen, et al.
  Chain of agents: large language models collaborating on long-context tasks.
  Proc. NeurIPS 37, pp. 132208–132237.
  Cited by: [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px1.p2.1 "Cooperative Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.4](https://arxiv.org/html/2601.15047v1#S3.SS4.SSS0.Px1.p1.1 "Full Observability. ‣ 3.4 Information ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Zhu et al. (2025)
  K. Zhu, H. Du, Z. Hong, et al.
  MultiAgentBench : evaluating the collaboration and competition of LLM agents.
  In Proc. ACL,
  pp. 8580–8622.
  Cited by: [§1](https://arxiv.org/html/2601.15047v1#S1.p2.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§1](https://arxiv.org/html/2601.15047v1#S1.p3.1 "1 Introduction ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [§3.1](https://arxiv.org/html/2601.15047v1#S3.SS1.SSS0.Px1.p2.1 "Cooperative Systems. ‣ 3.1 Players ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems"),
  [Table 1](https://arxiv.org/html/2601.15047v1#S4.T1.6.2.3.1.1 "In Domain-specific evaluation frameworks. ‣ 4.1 Benchmark ‣ 4 Discussion ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
- Zhu (2025)
  Q. Zhu
  Reasoning and behavioral equilibria in llm-nash games: from mindsets to actions.
  arXiv preprint arXiv:2507.08208.
  Cited by: [§3.2](https://arxiv.org/html/2601.15047v1#S3.SS2.p1.1 "3.2 Strategies and Equilibrium ‣ 3 Game-Theoretic Elements in MAS ‣ Game-Theoretic Lens on LLM-based Multi-Agent Systems").
