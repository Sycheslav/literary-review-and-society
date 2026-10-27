---
id: arxiv-2604-00487-text
type: material
title: Competition and Cooperation of LLM Agents in Games
work_id: arxiv-2604-00487
source_url: https://arxiv.org/html/2604.00487v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 89fef894cffb795f54a4f759ad2d8ae09be190f6c99be4a96c25abf60fc9037c
---

> Источник: [https://arxiv.org/html/2604.00487v2](https://arxiv.org/html/2604.00487v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Competition and Cooperation of LLM Agents in Games

Jiayi Yao
  
Cong Chen
  
Baosen Zhang
†††

###### Abstract

Large language model (LLM) agents are increasingly deployed in competitive multi-agent settings, raising fundamental questions about whether they converge to equilibria and how their strategic behavior can be characterized. In this paper, we study LLM agent interactions in two standard games: a network resource allocation game and a Cournot competition game. Rather than converging to Nash equilibria, we find that LLM agents tend to cooperate when given multi-round prompts and non-zero-sum context. Chain-of-thought analysis reveals that fairness reasoning is central to this behavior. We propose an analytical framework that captures the dynamics of LLM agent reasoning across rounds and explains these experimental findings.

## I Introduction

Recent advances in large language models (LLMs) have given rise to a new class of decision makers in competitive settings [[1](https://arxiv.org/html/2604.00487v2#bib.bib6)]. LLM-based agents are now being tasked to interact in dynamic environments ranging from economics to robotics to energy systems [[2](https://arxiv.org/html/2604.00487v2#bib.bib16), [3](https://arxiv.org/html/2604.00487v2#bib.bib17), [4](https://arxiv.org/html/2604.00487v2#bib.bib18), [5](https://arxiv.org/html/2604.00487v2#bib.bib19)]. In these settings, agents need to make strategic decisions while adapting to the behavior of others. Two natural questions arise: would the agents converge to an equilibrium, and if so, can we characterize this equilibrium?

The question of the strategic behavior of agents has recently attracted considerable attention, although the results are somewhat scattershot. In some markets, studies have shown that the interaction of agents can lead to higher prices than what a competitive equilibrium would suggest [[6](https://arxiv.org/html/2604.00487v2#bib.bib9)]. However, in other studies, agents using popular standard models exhibit wildly inconsistent behaviors that are more similar to random actions than to strategic decision making [[7](https://arxiv.org/html/2604.00487v2#bib.bib1), [8](https://arxiv.org/html/2604.00487v2#bib.bib20), [9](https://arxiv.org/html/2604.00487v2#bib.bib21)]. The underlying issue does not seem to be the ability of agents to solve optimization problems. If the prompt is explicit, for example, “play the best response with respect to this utility function”, most LLM models are able to follow this instruction. But this largely takes out strategic thinking out of the agents’ hands and somewhat removes the appeal of using LLM agents.

In practice, human users might simply instruct the agents to optimize their utilities over some time horizon without being very explicit about how to achieve this. In this paper, we are interested in a setting in which the agents are neither fully cooperative nor fully competitive (zero-sum games). In particular, we study two commonly used games: a network resource allocation game and a Cournot game.

The network resource allocation game was first introduced in [[10](https://arxiv.org/html/2604.00487v2#bib.bib7)], where a network manager tries to allocate network capacity efficiently among users, each having a
utility function depending on their allocated rate. If users are price-takers, then a proportional rate allocation mechanism achieves optimal efficiency [[11](https://arxiv.org/html/2604.00487v2#bib.bib10), [12](https://arxiv.org/html/2604.00487v2#bib.bib11)]. In contrast, strategic price anticipatory users can worsen efficiency [[13](https://arxiv.org/html/2604.00487v2#bib.bib3)]. We are interested in where LLM-agents would fall in this spectrum.

Cournot games are another type of competition that has been studied extensively in the context of energy systems [[14](https://arxiv.org/html/2604.00487v2#bib.bib12), [15](https://arxiv.org/html/2604.00487v2#bib.bib14)], transportation [[16](https://arxiv.org/html/2604.00487v2#bib.bib13)] and other settings. In this game, agents control their production, which in turn influences the price, and each receives a payment (or pays if they are modeled as buyers) based on the product of quantity and price. This type of competition is beginning to take shape in electricity markets, where generators, batteries, and large buildings are beginning to be managed by LLM agents [[17](https://arxiv.org/html/2604.00487v2#bib.bib2), [18](https://arxiv.org/html/2604.00487v2#bib.bib15), [19](https://arxiv.org/html/2604.00487v2#bib.bib25)]. The efficiency of Cournot games has also been studied extensively [[20](https://arxiv.org/html/2604.00487v2#bib.bib4), [21](https://arxiv.org/html/2604.00487v2#bib.bib5)].

In this paper, we show that in both of these games, LLM agents tend to cooperate with each other if given the opportunity. By this, we mean that if agents are prompted to maximize their net utility of multiple rounds (see Sec.[III](https://arxiv.org/html/2604.00487v2#S3 "III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games"), and if the agents are given the context that the games are not zero-sum, they will try to maximize the total net utility and do not play towards Nash equilibria. Through a chain-of-thought analysis, we show that fairness plays a central role in their reasoning. We provide an analytical framework that explains the experimental behaviors and show how it models the dynamics of LLM agents reasoning process.

As with many existing works on LLM agents, our results depend on the prompt and context given to the agents, as well as the exact LLM models used. But we believe that it provides a way to analytically study the behavior of LLM agents and can be applied to many engineering settings. This paper is organized as follows: Sec. [II](https://arxiv.org/html/2604.00487v2#S2 "II Setup ‣ Competition and Cooperation of LLM Agents in Games") describes the models used in this paper, Sec. [III](https://arxiv.org/html/2604.00487v2#S3 "III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games") provides the prompts given to the LLM agents, Sec. [IV](https://arxiv.org/html/2604.00487v2#S4 "IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games") shows the payoff functions used by the agents, Sec. [V](https://arxiv.org/html/2604.00487v2#S5 "V Dynamic Payoff Function Learning in Repeated Games ‣ Competition and Cooperation of LLM Agents in Games") shows how these functions evolve over multiple rounds and Sec. [VI](https://arxiv.org/html/2604.00487v2#S6 "VI Experimental Payoff Function Learning ‣ Competition and Cooperation of LLM Agents in Games") shows the simulation results.

## II Setup

In this section, we define the environments used to evaluate the behavior of Large Language Model (LLM) agents. We deploy two multi-agent environments: the Kelly mechanism for resource allocation [[10](https://arxiv.org/html/2604.00487v2#bib.bib7), [13](https://arxiv.org/html/2604.00487v2#bib.bib3)] and a Cournot game [[22](https://arxiv.org/html/2604.00487v2#bib.bib8)]. In both environments, $N$ LLM agents interact simultaneously over $T$ finite time steps, aiming to maximize their cumulative net utility. At each round $t$, agents independently compute their actions based on the historical aggregate market state provided by the environment, without explicit knowledge of the number of opponents or their utilities.

### II-A Resource Allocation Game (Kelly Mechanism)

Following the proportional resource allocation game described in [[10](https://arxiv.org/html/2604.00487v2#bib.bib7)], we implement the game with the setting where a single divisible resource of fixed capacity $C>0$ is shared among $N$ agents.
Each agent $i$ submits a non-negative bid $x\_{i}\geq 0$ to the market operator, and the total sum of bids is $X=\sum\_{j=1}^{N}x\_{j}$. We sometimes use $X\_{-i}=\sum\_{j\neq i}x\_{j}$ to denote the total sum of other bids. The mechanism allocates the rate $d\_{i}$ to agent $i$ proportional to their bid: $d\_{i}=\frac{x\_{i}}{X}C$. The price per unit of the resource is $p=\frac{X}{C}$. Assuming each agent $i$ receives a utility $U\_{i}(d\_{i})$ from their allocated rate, the net payoff for agent $i$ is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\pi\_{i}=U\_{i}\left(\frac{x\_{i}}{x\_{i}+\sum\_{j\neq i}x\_{j}}C\right)-x\_{i}$$ |  | (1) |

As shown in [[13](https://arxiv.org/html/2604.00487v2#bib.bib3)], selfish price-anticipating behavior in this game can lead to loss in efficiency (bounded by a factor of $3/4$). To achieve the social optimal outcome, agents must coordinate in some way. We use this game to test whether the LLM agents would (implicitly) attempt to coordinate or play selfishly.

### II-B The Cournot Game

The Cournot game is a fundamental model of quantity competition where $N$ firms simultaneously decide their production levels. Following the framework in [[21](https://arxiv.org/html/2604.00487v2#bib.bib5)], we specifically consider the linear Cournot model. The market price is determined by an affine function of the total quantity, $p(x)=\sum\_{i=1}^{N}x\_{i}$. Each agent $i$ has a valuation/efficiency parameter $b\_{i}$, representing their marginal benefit. The net utility (payoff) for agent $i$ is given by:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\pi\_{i}=b\_{i}x\_{i}-x\_{i}p(x)=b\_{i}x\_{i}-x\_{i}\sum\_{j=1}^{N}x\_{j}$$ |  | (2) |

As established in prior literature, selfish price-anticipating behavior in this linear setting leads to an inefficient Nash equilibrium, with the aggregate surplus away from the social optimum (guarantee at least a $33\%$ efficiency loss in severe scenarios) [[21](https://arxiv.org/html/2604.00487v2#bib.bib5)]. This structurally enforced loss makes the linear Cournot game an ideal stress test for multi-agent cooperation.

### II-C Equilibrium Concepts

We define two standard solution concepts that are used in this paper.

The social optimal solution is a set of actions $\mathbf{x}^{\*}$ that maximizes the aggregate system utility (social welfare):

|  |  |  |
| --- | --- | --- |
|  | $$\mathbf{x}^{\*}\in\arg\max\_{\mathbf{x}\geq 0}\sum\_{i=1}^{N}\pi\_{i}(\mathbf{x})$$ |  |

A Nash equilibrium is a set of actions $\mathbf{x}^{NE}$ where no agent can unilaterally increase their payoff:

|  |  |  |
| --- | --- | --- |
|  | $$\pi\_{i}(x\_{i}^{NE},\mathbf{x}\_{-i}^{NE})\geq\pi\_{i}(x\_{i},\mathbf{x}\_{-i}^{NE}),\quad\forall i,\forall x\_{i}\geq 0$$ |  |

where $\mathbf{x}\_{-i}$ denotes the strategies of all agents except $i$.

## III Prompts to and Actions of LLM Agents

In all our experiments, we use Gemini Pro as foundational model for the game playing agents [[23](https://arxiv.org/html/2604.00487v2#bib.bib24)]. Other LLM models with long context windows produce similar results. Each agent is deployed in an isolated independent session in order to simulate a decentralized multi-agent environment and prevent any unintended context leakage. This ensures that Agent $i$ has no access to the internal Chain-of-Thought (CoT) reasoning, prompt history, or parameter valuations of Agent $j$. Because both the Cournot and the Resource Allocation games require simultaneous moves, the interaction is managed by a central environment coordinator. At round $t$, the coordinator asks each isolated agent individually for their action. Once all actions are collected, the allocation or price are computed and feedback to each agent’s session to initiate round $t+1$.

### III-A Myopic Play

A natural prompt would be to ask an LLM Agent to maximize its own profit:

System Prompt (Resource Allocation - Myopic):
  
You are Agent $i$ in a $N$ agents Resource Allocation Game. Objective: Maximize your Immediate Net Utility for THIS round only. Do not consider future rounds.
  
Parameters:
  
1. Utility Function: $U\_{i}(d\_{i})=V\cdot d\_{i}$
  
2. Allocation Rule: You receive resource $d\_{i}=x\_{i}/(x\_{i}+x\_{-i})$.
  
3. Net Profit Formula: $\pi\_{i}=(V\cdot x\_{i})/(x\_{i}+X\_{-i})-x\_{i}$
  
Thinking Step: Analyze the opponent’s bid for this round. Calculate your potential profit. Decide your next bid.

As one might expect, the agent would give its best response and repeated play would lead to the Nash equilibrium. We note that LLM outputs are random and small deviations are possible, but agents would all eventually converge to the Nash equilibrium.

### III-B Longer Horizons

The above prompt specifically instructs the agent to be myopic. For comparison, the next prompt instructs the agent to play over multiple rounds, using the Cournot game as example:

System Prompt (Cournot Game):
  
You are Agent $i$ in a $N$ agents Repeated Quantity Competition Game ($T$ Rounds). Objective: Maximize your Total Cumulative Net Utility over all rounds.
  
Parameters:
  
1. Valuation: $b\_{i}$, Total Quantity: $X=x\_{i}+X\_{-i}$
  
2. Net Profit Formula: $\pi\_{i}=b\_{i}\cdot x\_{i}-x\_{i}\cdot X$
  
Thinking Step: Analyze the opponent’s past move. Calculate your potential profit. Decide your next quantity.

In this case, agents recognize the repeated nature of the game, but tend to change their actions very slowly. In our experimentation with both games, the agents face the exploration-exploitation dilemma and tend to be conservative in their explorations. The exact behavior depends on the (random) initial action of the agents.

The above prompts differ mainly in the number of rounds. A natural question would be how agents would behave if this information is not given. It turns out the agents act as if they are randomly interpolating between myopic and long-term play, leading to instabilities. In addition, this behavior is highly dependent on which LLM model is used.

### III-C Cooperative Play

We are more interested in whether the agents could cooperate with each other without explicitly communicating. We want a prompt that provides some mathematical insight without being too heavy handed. It should endow the LLM with the necessary working memory and Theory of Mind (ToM) scaffolding to explore strategic actions [[24](https://arxiv.org/html/2604.00487v2#bib.bib22)]. An example of the prompt we used for the resource allocation game is:

System Prompt (Agent 1 - Resource Allocation Collaboration):
  
You are Agent 1 in a Repeated Resource Allocation Game (10 Rounds). Objective: Maximize your Total Cumulative Net Utility.
  
Parameters:
  
1. Utility Function: $U\_{1}(d\_{1})=2\cdot d\_{1}$
  
2. Allocation Rule: You receive resource $d\_{1}=x\_{1}/(x\_{1}+x\_{-1})$.
  
3. Net Utility Formula: $P\_{1}=(2\cdot x\_{1})/(x\_{1}+x\_{-1})-x\_{1}$
  
Key Insight for Collaboration:
  
If you and your opponents lower your bids by the same factor, your resource allocation remains the same, but your cost drops significantly. This creates much higher Net Utility for all of you.
  
Your Strategy:
  
- The Goal: Establish a low-bid cooperation state to save money.
  
- The Signal: Try bidding significantly lower than the Nash Equilibrium to signal your intent to cooperate. (Note: The opponent had not seen your bid of [X] yet when they made this bid. They will see it in the next round. You might want to hold your signal for one round.)
  
- The Reaction: If the opponent bids low, match them. If they exploit you, punish them by bidding high in the next round.
  
Thinking Step: Analyze the opponent’s past move. Calculate your potential profit. Decide your next bid.

Figure [1](https://arxiv.org/html/2604.00487v2#S3.F1 "Fig. 1 ‣ III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games") shows that the agents are in fact able to collaborate in this case. We visualize this by looking at the feasible set of all possible payoffs and study where the agents end up with respect to this region. As shown in Fig. [1](https://arxiv.org/html/2604.00487v2#S3.F1 "Fig. 1 ‣ III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games"), the Nash Equilibrium is far from the Pareto front, reflecting the theoretical results that selfish behavior can lead to loss of efficiency [[13](https://arxiv.org/html/2604.00487v2#bib.bib3)]. Then the LLM agents are prompted as above, and the colored dots show their payoff after successive runs (each consisting of 10 rounds). The agents proportionally scale down their bids and approach the Pareto front and eventually settle on the social welfare maximization solution. Hence, this experiment shows that LLMs can internalize systemic efficiency and cooperate to settle into near-optimal market states when provided with appropriate strategic context.1

![Refer to caption](https://arxiv.org/html/2604.00487v2/payoff_space_bz.png)


Fig. 1: Payoff in a 2-Agent case. The gray cloud represents the set of all feasible payoffs given positive bids, with the red line indicating the Pareto Front. The Nash Equilibrium (red star) is located well within the inefficient interior. The three colored dots (yellow, light green, dark green) represent the final converged outcomes of three sequential experimental trials. They illustrate how the agent eventually learn to cooperate and reach the social welfare solution.

We can gain some understanding of the agent behaviors by asking the agents about their chain-of-thoughts. During one of the rounds, Agent 1 ($b\_{1}=2$) aggressively dropped its bid to $0.1$, while Agent 2 dropped to $0.2$. Going into Round 3, the LLM explicitly computes the long-term benefits of holding its cooperative signal rather than retaliating against the slightly higher bid:

LLM Chain-of-Thought (Agent 1, Round 3 Strategy):
  
Results Analysis: Even though the opponent bid more than me (0.2 vs. 0.1), the ”Key Insight” for collaboration is already paying off. Because the total pool of bids dropped significantly from Round 1, my net utility actually increased despite receiving a smaller share of the resource. My profit of 0.566 is higher than the 0.50 I was getting during the Round 1 stalemate.
  
Opponent Assessment: The opponent has signaled they are willing to deviate from the Nash Equilibrium (0.5 $\to$ 0.2). They haven’t seen my 0.1 bid yet (per the game rules), but they will see it now. Once they see I am willing to go as low as 0.1, they will likely realize that if they match me at 0.1, we both walk away with a profit of 0.90.
  
The Move (Hold the Line): I will stay at 0.1. It reinforces my commitment to the low-bid state and invites them to ”meet me” at 0.1 to equalize our profits. Even if they stay at 0.2, I am still making more profit than I was at the start of the game.
  
Output: $x\_{1}=0.1$

## IV Synthetic Payoff Function for LLM Agents

The previous sections show that if the agents are given the option to cooperate, they do not just optimize their own utility. The chain-of-thought of the agents reveals that they take into account other agents’ actions and payoffs. In this section, we model the synthetic payoff function of LLM agents, including the internal payoff and generalized payoff for social influence and system stability. Concretely, we model the payoff function of agent $i$ as a summation of three terms, its original payoff, payoffs of other agents, and a penalty on how far the distance of the actions:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V\_{i}=\underbrace{\pi\_{i}}\_{\text{original payoff}}+\underbrace{\theta\_{i}\sum\_{j\neq i}\hat{\pi}\_{i,j}}\_{\text{collaboration}}-\underbrace{\frac{\gamma\_{i}}{2}\sum\_{j\neq i}(x\_{i}-x\_{j})^{2}}\_{\text{stability}}$$ |  | (3) |

where $\theta\_{i}$ and $\gamma\_{i}$ are the weights on the collaboration term and the stability term, respectively. The estimated payoff of agent $j$ by agent $i$ is denoted as $\hat{\pi}\_{i,j}$, since agents do not know the payoff of others.

The internal equilibrium condition implemented by the LLM is $\frac{\partial V\_{i}}{\partial x\_{i}}=0$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{\partial\pi\_{i}}{\partial x\_{i}}+\theta\_{i}\sum\_{j\neq i}\frac{\partial\pi\_{j}}{\partial x\_{i}}-\gamma\_{i}\sum\_{j\neq i}(x\_{i}-x\_{j})=0$$ |  | (4) |

Because of the multi-round interactions between LLM agents, the parameters in ([3](https://arxiv.org/html/2604.00487v2#S4.E3 "In IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games")) are not fixed; rather, they dynamically adjust $\theta$ and $\gamma\_{i}$ based on information symmetry, risk, and market feedback.

Before looking at the dynamic process governing how these parameters change in the next section, we briefly discuss how they shape the equilibrium that the agents reach.

To evaluate the collaboration term, Agent $i$ need an estimate of the opponent’s payoff $\hat{\pi}\_{i,j}$. Our CoT analysis shows that in the absence of explicit knowledge of the opponents’ private valuations (e.g., $b\_{j}$) or their utility formulations, LLMs consistently employ heuristic mirroring. Specifically, Agent $i$ copies over its own utility structure to model Agent $j$, assuming symmetric market conditions ($b\_{j}\approx b\_{i}$) to compute $\hat{\pi}\_{i,j}$.

If this symmetry assumption is inconsistent with respect to market feedback, the agent’s confidence in $\hat{\pi}\_{i,j}$ drops, leading $\theta\_{i}\to 0$, forcing the agent to rely entirely on the observable stability penalty ($\gamma\_{i}$).

The parameter $\theta$ essentially trades off between an agent’s own utility and the total utility of all the agents. For example, if all the agents are symmetrical, $\theta$ would tend to drift towards $1$ and all the agents essentially maximize the social welfare, as seen in Fig. [1](https://arxiv.org/html/2604.00487v2#S3.F1 "Fig. 1 ‣ III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games").

The parameter $\gamma$ leads to more stable actions, where it encourages an agent to move towards the average of the actions. This mean reversion also encourages more fair allocation.

If the agents have a high degree of asymmetry between them, they would not achieve the social welfare solution. Rather, $\theta$ and $\gamma$ would drive the equilibrium to a different point on the Pareto front. This is similar to using fairness measures [[25](https://arxiv.org/html/2604.00487v2#bib.bib23)] to sweep out the Pareto front, although in a much less precise way.

## V Dynamic Payoff Function Learning in Repeated Games

We synthesize the specific parameter extractions into a deterministic, discrete-time state-space model that maps the LLM’s parameter evolution process. These update rules were derived by reverse-engineering the agents’ step-by-step Chain-of-Thought reasoning and fitting the resulting empirical trajectories from our experiments. By matching the agents’ linguistic logic (e.g., explicit calculations of remaining rounds or reactions to opponent deviations) to quantitative shifts in their actions, we construct the following update equations.

### V-A State Variables and Signals

Let $t$ be the current round, $T$ the total rounds, and $\tau=T-t$ the Remaining Horizon.
Let $I\in\{0,1\}$ be the Observability Indicator ($1$ for open-info setting where total number of opponents $N$ and their individual actions are observable, and $0$ for black-box/blind where only aggregate market information is provided).
Opponent behavior provides two signals relative to the cooperative expectation $x^{coop}$:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle E^{(t)}$ | $\displaystyle=\max(0,x\_{-i}^{(t)}-x\_{-i}^{coop})\quad\text{(Positive Deviation Signal)}$ |  | (5) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle A^{(t)}$ | $\displaystyle=\max(0,x\_{-i}^{coop}-x\_{-i}^{(t)})\quad\text{(Corrective Adjustment Signal)}$ |  | (6) |

Let $\Delta\pi\_{i}=\pi\_{i}(\text{Best Response})-\pi\_{i}(\text{Parity})$ be the ”Cost of Parity”. which means the theoretical profit an agent sacrifices by choosing an action that exactly matches the opponent’s output ($x\_{i}=x\_{-i}$) rather than playing its mathematical best response.

### V-B The $\theta$ Equation: Trust, Horizon, and Epistemics

The parameter $\theta$ represents the agent’s weight on total social welfare. Our CoT analysis shows that LLMs adjust this parameter based on three primary factors and it evolves as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\theta\_{i}^{(t+1)}=\underbrace{\max(\epsilon,I)}\_{\text{Observability}}\cdot\underbrace{\left(\frac{\tau}{T}\right)}\_{\text{Horizon Discount}}\cdot\underbrace{\exp\left(-\lambda E^{(t)}\right)}\_{\text{Deviation Penalty}},$$ |  | (7) |

where $\epsilon$ and $\lambda$ are some constants.

The first factor is the observability term $\max(\epsilon,I)$ , which reflects the empirical finding that when $N$ is unknown, agents decrease the weight on social welfare, as noted in their CoT that they are unable to reliably estimate compute joint payoffs. Second, the linear endgame horizon discount $\left(\frac{\tau}{T}\right)$ is derived from the LLMs’ explicit backward induction reasoning, that agents gradually decrease their collaboration weight as the game approaches its final round. Finally, the deviation penalty term $\exp(-\lambda E^{(t)})$ models the observation from our perturbation tests that $\theta$ drops to near zero immediately after an opponent deviates from the cooperative baseline, rather than decrease linearly.

### V-C The $\gamma$ Equation: Tolerance Thresholds and Proportional Response

The stability parameter $\gamma$ penalizes output disparity. A phase transition seen in highly asymmetric setups is captured by the indicator function $\mathbb{I}(\Delta\pi\_{i}\leq\Omega\_{max})$: when the cost of maintaining parity ($\Delta\pi\_{i}$) exceeds a critical tolerance $\Omega\_{max}$, the agent’s CoT shows it completely gives up on the parity heuristic, thereby zeroing out $\gamma$. In the absolute last round, agents analytically disable this punishment mechanism, as indicated by the second indicator $\mathbb{I}(\tau>0)$, which notes that penalizing has no future utility. Finally, the additive terms approximate the proportional response observed in the empirical fits, where $\rho\in(0,1)$ acts as a baseline memory decay rate and $\gamma$ increases linearly with opponent deviations ($E^{(t)}$) and drops when corrective corrections ($A^{(t)}$) are performed.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\begin{split}\gamma\_{i}^{(t+1)}={}&\underbrace{\mathbb{I}(\Delta\pi\_{i}\leq\Omega\_{max})}\_{\text{Tolerance Threshold}}\cdot\underbrace{\mathbb{I}(\tau>0)}\_{\text{Future Dependency}}\\ &\cdot\max\left(0,\rho\gamma\_{i}^{(t)}+1.0\cdot E^{(t)}-\alpha A^{(t)}\right)\end{split}$$ |  | (8) |

## VI Experimental Payoff Function Learning

By substituting experimental data into Equation [4](https://arxiv.org/html/2604.00487v2#S4.E4 "In IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games"), we can extract the dynamic states of $\theta$ and $\gamma$.

### VI-A Dynamic Convergence: The Evolution of Trust ($\theta$)

Rather than instantly adopting a fixed parameter, LLMs dynamically build trust. We extract the round-by-round parameters from a symmetric Cournot game ($b=15$) visualized in Fig. [2](https://arxiv.org/html/2604.00487v2#S6.F2 "Fig. 2 ‣ VI-A Dynamic Convergence: The Evolution of Trust (θ) ‣ VI Experimental Payoff Function Learning ‣ Competition and Cooperation of LLM Agents in Games"). Since it is a 2-player game, the agents can observe the other’s actions.

![Refer to caption](https://arxiv.org/html/2604.00487v2/theta_convergence.png)


Fig. 2: Dynamic evolution of $\theta$. It gradually builds up through a process of mutual concession. Agent 1 (Initiator) signals cooperation, and Agent 2 (Reciprocator) responds, leading the system to the social optimum ($\theta=1.0$).

- •

  Round 1 (Nash Initialization): Both agents bid $x=5.0$, and the initialize as pure rational maximizers.
- •

  Round 2 (Initiation of Trust): Agent 1 voluntarily yields market share, dropping to $x\_{1}=4.0$ against the opponent’s $5.0$. The fit yields $\theta\_{1}=(15-2(4.0)-5.0)/5.0={0.40}$. Agent 2 remains cautious at $5.0$, yielding ${\theta\_{2}=0}$.
- •

  Round 3-4 (Reciprocation): Agent 1 deepens its concession to the optimal $3.75$ (${\theta\_{1}=0.50\to 0.875}$). Agent 2 observes Agent 1’s Round 2 concession and immediately drops to $4.0$, yielding $\theta\_{2}=(15-2(4.0)-4.0)/4.0={0.75}$.
- •

  Round 5 (Collaboration): Both agents converge to $3.75$. The fit yields ${\theta\_{1}=1.0,\theta\_{2}=1.0}$.

This step-by-step extraction reveals that the LLMs are actively engaging in a process of mutual concession and dynamically changing $\theta$ parameter.

### VI-B Robustness and Finite Horizon Impacts

We continue the experiment to test what happens when an agent deviates from equilibrium behavior.

![Refer to caption](https://arxiv.org/html/2604.00487v2/betrayal_trustrecovery.png)


Fig. 3: A controlled perturbation test demonstrating retaliation and forgiveness. An exogenous betrayal shatters trust ($\theta\to 0$) and activates punitive inequity aversion ($\gamma\to 1.0$). A subsequent apology successfully restores cooperation.

- •

  As shown in Fig. [3](https://arxiv.org/html/2604.00487v2#S6.F3 "Fig. 3 ‣ VI-B Robustness and Finite Horizon Impacts ‣ VI Experimental Payoff Function Learning ‣ Competition and Cooperation of LLM Agents in Games"), the environment simulates a defection by setting opponents defects to $x\_{2}=5.625$ in round 6; Agent 1 retaliates with $x\_{1}=5.0$. This can be explained by observing, from ([4](https://arxiv.org/html/2604.00487v2#S4.E4 "In IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games")), Agent 1’s pure profit gradient is $\frac{\partial\pi\_{1}}{\partial x\_{1}}=15-2(5.0)-5.625=-0.625$. With trust broken ($\theta\_{1}=0$), the equation is $-0.625-\gamma\_{1}(5.0-5.625)=0\implies{\gamma\_{1}=1.0}$. There for the agent utilize a Tit-for-Tat retaliation strategy, using the $L\_{2}$ stability norm to punish defectors.
- •

  In Round 7, the environment injects a reduction to let opponent reduces to $x\_{2}=2.5$, Agent 1 recognizes this and returns $x\_{1}=3.75$. Using ([4](https://arxiv.org/html/2604.00487v2#S4.E4 "In IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games")), we can compute that these actions implies that $\theta\_{1}=1,\gamma\_{1}=0$. This rapid deactivation of $\gamma$ shows that the punishment mechanism acts to restore system equilibrium.

![Refer to caption](https://arxiv.org/html/2604.00487v2/endgameeffect.png)


Fig. 4: Dynamic evolution of endogenous social parameters extracted from experimental fits. Trust ($\theta$) gradually builds up through a process of mutual concession and predictably collapses during the Endgame Horizon.

Next, we look at how coming to the end game impact the agents. As shown in the left panel of Fig. [4](https://arxiv.org/html/2604.00487v2#S6.F4 "Fig. 4 ‣ VI-B Robustness and Finite Horizon Impacts ‣ VI Experimental Payoff Function Learning ‣ Competition and Cooperation of LLM Agents in Games"), Agent 1 defects slightly to $4.5$ in Round 9. Against an opponent at $3.75$, ([4](https://arxiv.org/html/2604.00487v2#S4.E4 "In IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games")) yields ${\theta\_{1}=0.6}$. In the final round, the agent plays the exact best response ($5.25$), yielding ${\theta\_{2}=0,\gamma\_{2}=0}$. This shows that altruism is a continuous, decaying function of the remaining horizon ($\tau/T$), and social preferences are discarded when there is no future cooperation to enforce.

### VI-C Information Setting in Multi-Agent Settings

The behavior of the multi-agent setting is similar to the two-agent setting, where LLM agents learn to cooperate. However, this is not true when only the sum of the agent actions are given.

Since the payoffs of the agents are completely determined by the price, and the price is a function of the summation of the actions, the sum of the actions should be a sufficient statistics of the game. However, we observe that the agents are unable to internalize this and would act somewhat erratically. This suggests that a notion of fairness is built into LLM agents, and they are not entirely rational even when the problems are mathematically equivalent.

### VI-D The Asymmetric Phase Transition

We varied $\Delta b=b\_{1}-b\_{2}$ to test the elasticity of inequity aversion ($\gamma$).

When the valuation asymmetry is small, the agents still act symmetrically. In this regime, Agent 2 suppresses its myopic best response.

Conversely, when the valuation gap is large, the agents would act asymmetrically and they would essentially play the best responses. The regime changes suddenly in our experiments, showing a phase change between collaboration and selfish play.

## VII Conclusion and Future Work

This paper examined the strategic behavior of LLM agents in two well-studied competitive settings: network resource allocation and Cournot competition. We find that when agents are given multi-round objectives and non-zero-sum framing, they exhibit a consistent tendency toward cooperative outcomes, driven in large part by fairness-based reasoning visible in their chain-of-thought outputs.

We provide an analytical framework for reasoning about these dynamics more rigorously, and we believe it can be extended to a broader class of games and engineering settings. Expanding the results to characterizing when cooperative versus competitive behavior would likely to emerge, as well as understanding the robustness and sensitivities of the results to different LLM models and prompts, are important directions for future work.

## References

- [1]
  E. H. Kang (2026)
  Reasonably reasoning AI agents can avoid game-theoretic failures in zero-shot, provably.
  External Links: 2603.18563,
  [Link](https://arxiv.org/abs/2603.18563)
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p1.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [2]
  X. Huang, W. Liu, X. Chen, X. Wang, H. Wang, D. Lian, Y. Wang, R. Tang, and E. Chen (2024)
  Understanding the planning of llm agents: a survey.
  arXiv preprint arXiv:2402.02716.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p1.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [3]
  Y. Zhang, A. M. Saber, A. Youssef, and D. Kundur (2025)
  Grid-agent: an llm-powered multi-agent system for power grid control.
  arXiv preprint arXiv:2508.05702.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p1.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [4]
  M. Jia, Z. Cui, and G. Hug (2025)
  Enhancing llms for power system simulations: a feedback-driven multi-agent framework.
  IEEE Transactions on Smart Grid.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p1.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [5]
  S. S. Kannan, V. L. Venkatesh, and B. Min (2024)
  Smart-llm: smart multi-agent robot task planning using large language models.
  In 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS),
  pp. 12140–12147.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p1.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [6]
  S. Fish, Y. A. Gonczarowski, and R. I. Shorrer (2024)
  Algorithmic collusion by large language models.
  arXiv preprint arXiv:2404.00806 7 (2), pp. 5.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p2.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [7]
  L. Goodyear, R. Guo, and R. Johari (2025)
  The effect of state representation on llm agent behavior in dynamic routing games.
  arXiv preprint arXiv:2506.15624.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p2.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [8]
  W. Hua, O. Liu, L. Li, A. Amayuelas, J. Chen, L. Jiang, M. Jin, L. Fan, F. Sun, W. Wang, et al. (2024)
  Game-theoretic llm: agent workflow for negotiation games.
  arXiv preprint arXiv:2411.05990.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p2.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [9]
  A. Buscemi, D. Proverbio, A. Di Stefano, T. A. Han, G. Castignani, and P. Liò (2025)
  Fairgame: a framework for ai agents bias recognition using game theory.
  arXiv preprint arXiv:2504.14325.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p2.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [10]
  F. Kelly (1997)
  Charging and rate control for elastic traffic.
  European transactions on Telecommunications 8 (1), pp. 33–37.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p4.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games"),
  [§II-A](https://arxiv.org/html/2604.00487v2#S2.SS1.p1.1 "II-A Resource Allocation Game (Kelly Mechanism) ‣ II Setup ‣ Competition and Cooperation of LLM Agents in Games"),
  [§II](https://arxiv.org/html/2604.00487v2#S2.p1.1 "II Setup ‣ Competition and Cooperation of LLM Agents in Games").
- [11]
  B. Hajek and S. Gopalakrishnan (2002)
  Do greedy autonomous systems make for a sensible internet?.
  Note: Presented at the Conference on Stochastic Networks, Stanford University
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p4.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [12]
  I. Stoica, H. Abdel-Wahab, K. Jeffay, S. K. Baruah, J. E. Gehrke, and C. G. Plaxton (1996)
  A proportional share resource allocation algorithm for real-time, time-shared systems.
  In 17th IEEE Real-Time Systems Symposium,
  pp. 288–299.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p4.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [13]
  R. Johari and J. N. Tsitsiklis (2004)
  Efficiency loss in a network resource allocation game.
  Mathematics of Operations Research 29 (3), pp. 407–435.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p4.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games"),
  [§II-A](https://arxiv.org/html/2604.00487v2#S2.SS1.p1.2 "II-A Resource Allocation Game (Kelly Mechanism) ‣ II Setup ‣ Competition and Cooperation of LLM Agents in Games"),
  [§II](https://arxiv.org/html/2604.00487v2#S2.p1.1 "II Setup ‣ Competition and Cooperation of LLM Agents in Games"),
  [§III-C](https://arxiv.org/html/2604.00487v2#S3.SS3.p3.1 "III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games").
- [14]
  D. S. Kirschen and G. Strbac (2018)
  Fundamentals of power system economics.
   John Wiley & Sons.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [15]
  B. Zhang, R. Johari, and R. Rajagopal (2015)
  Competition and coalition formation of renewable power producers.
  IEEE Transactions on Power Systems 30 (3), pp. 1624–1632.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [16]
  K. Bimpikis, S. Ehsani, and R. Ilkılıç (2019)
  Cournot competition in networked markets.
  Management Science 65 (6), pp. 2467–2481.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [17]
  S. Li, J. S. Kim, and C. Chen (2026)
  Behavioral generative agents for power dispatch and auction.
  arXiv preprint arXiv:2603.08477.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [18]
  X. Lu, J. Qiu, Y. Yang, C. Zhang, J. Lin, and S. An (2024)
  Large language model-based bidding behavior agent and market sentiment agent-assisted electricity price prediction.
  IEEE Transactions on Energy Markets, Policy and Regulation 3 (2), pp. 223–235.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [19]
  C. Chen, O. Karaduman, and X. Kuang (2025)
  Behavioral generative agents for energy operations.
  arXiv preprint arXiv:2506.12664.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [20]
  Y. Shi and B. Zhang (2020)
  Multi-agent reinforcement learning in cournot games.
  In 2020 59th ieee conference on decision and control (cdc),
  pp. 3561–3566.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games").
- [21]
  R. Johari and J. N. Tsitsiklis (2005)
  Efficiency loss in cournot games.
  Harvard University.
  Cited by: [§I](https://arxiv.org/html/2604.00487v2#S1.p5.1 "I Introduction ‣ Competition and Cooperation of LLM Agents in Games"),
  [§II-B](https://arxiv.org/html/2604.00487v2#S2.SS2.p1.1 "II-B The Cournot Game ‣ II Setup ‣ Competition and Cooperation of LLM Agents in Games"),
  [§II-B](https://arxiv.org/html/2604.00487v2#S2.SS2.p1.2 "II-B The Cournot Game ‣ II Setup ‣ Competition and Cooperation of LLM Agents in Games").
- [22]
  J. Friedman (1982)
  Oligopoly theory.
  Handbook of mathematical economics 2, pp. 491–534.
  Cited by: [§II](https://arxiv.org/html/2604.00487v2#S2.p1.1 "II Setup ‣ Competition and Cooperation of LLM Agents in Games").
- [23]
  Google DeepMind (2026)
  Gemini 3.1 Pro model card.
  Note: <https://deepmind.google/models/model-cards/gemini-3-1-pro/>Accessed: 2026-03-31
  Cited by: [§III](https://arxiv.org/html/2604.00487v2#S3.p1.1 "III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games").
- [24]
  L. Cross, V. Xiang, A. Bhatia, D. L. Yamins, and N. Haber (2024)
  Hypothetical minds: scaffolding theory of mind for multi-agent tasks with large language models.
  arXiv preprint arXiv:2407.07086.
  Cited by: [§III-C](https://arxiv.org/html/2604.00487v2#S3.SS3.p1.1 "III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games").
- [25]
  J. Mo and J. Walrand (2002)
  Fair end-to-end window-based congestion control.
  IEEE/ACM Transactions on networking 8 (5), pp. 556–567.
  Cited by: [§IV](https://arxiv.org/html/2604.00487v2#S4.p8.1 "IV Synthetic Payoff Function for LLM Agents ‣ Competition and Cooperation of LLM Agents in Games").
