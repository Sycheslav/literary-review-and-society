---
id: arxiv-2502-01587-text
type: material
title: Verbalized Bayesian Persuasion
work_id: arxiv-2502-01587
source_url: https://arxiv.org/html/2502.01587v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 300530f0eea9c7f1b132443cd501d39c4f30ee01f51ae265b981ba9efdaf5836
---

> Источник: [https://arxiv.org/html/2502.01587v1](https://arxiv.org/html/2502.01587v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Verbalized Bayesian Persuasion

Wenhao Li
Affiliation: 1Tongji University 2The Chinese University of Hong Kong, Shenzhen
  
3East China Normal University 4Vector Institute
  
{whli,bjin}@tongji.edu.cn, linyue3h1@gmail.com, xfwang@cs.ecnu.edu.cn,{zhahy,bxiangwang}@cuhk.edu.cn
  
Yue Lin
Affiliation: 1Tongji University 2The Chinese University of Hong Kong, Shenzhen
  
3East China Normal University 4Vector Institute
  
{whli,bjin}@tongji.edu.cn, linyue3h1@gmail.com, xfwang@cs.ecnu.edu.cn,{zhahy,bxiangwang}@cuhk.edu.cn
  
Xiangfeng Wang
Affiliation: 1Tongji University 2The Chinese University of Hong Kong, Shenzhen
  
3East China Normal University 4Vector Institute
  
{whli,bjin}@tongji.edu.cn, linyue3h1@gmail.com, xfwang@cs.ecnu.edu.cn,{zhahy,bxiangwang}@cuhk.edu.cn
  
Bo Jin
Affiliation: 1Tongji University 2The Chinese University of Hong Kong, Shenzhen
  
3East China Normal University 4Vector Institute
  
{whli,bjin}@tongji.edu.cn, linyue3h1@gmail.com, xfwang@cs.ecnu.edu.cn,{zhahy,bxiangwang}@cuhk.edu.cn
  
Hongyuan Zha
Affiliation: 1Tongji University 2The Chinese University of Hong Kong, Shenzhen
  
3East China Normal University 4Vector Institute
  
{whli,bjin}@tongji.edu.cn, linyue3h1@gmail.com, xfwang@cs.ecnu.edu.cn,{zhahy,bxiangwang}@cuhk.edu.cn
  
Baoxiang Wang
Affiliation: 1Tongji University 2The Chinese University of Hong Kong, Shenzhen
  
3East China Normal University 4Vector Institute
  
{whli,bjin}@tongji.edu.cn, linyue3h1@gmail.com, xfwang@cs.ecnu.edu.cn,{zhahy,bxiangwang}@cuhk.edu.cn

###### Abstract

Information design (ID) explores how a sender influence the optimal behavior of receivers to achieve specific objectives.
While ID originates from everyday human communication, existing game-theoretic and machine learning methods often model information structures as numbers, which limits many applications to toy games.
This work leverages LLMs and proposes a verbalized framework in Bayesian persuasion (BP), which extends classic BP to real-world games involving human dialogues for the first time.
Specifically, we map the BP to a verbalized mediator-augmented extensive-form game, where LLMs instantiate the sender and receiver.
To efficiently solve the verbalized game, we propose a generalized equilibrium-finding algorithm combining LLM and game solver.
The algorithm is reinforced with techniques including verbalized commitment assumptions, verbalized obedience constraints, and information obfuscation.
Numerical experiments in dialogue scenarios, such as recommendation letters, courtroom interactions, and law enforcement, validate that our framework can both reproduce theoretical results in classic BP and discover effective persuasion strategies in more complex natural language and multi-stage scenarios.

> You can fool some of the people all of the time, and all of the people some of the time, but you can not fool all of the people all of the time.
>
> Abraham Lincoln

### 1 Introduction

Persuasion plays a significant role in modern economies, with estimates suggesting that up to one-quarter ([McCloskey & Klamer, 1995](https://arxiv.org/html/2502.01587v1#bib.bib89)), or even $30$% ([Antioch, 2013](https://arxiv.org/html/2502.01587v1#bib.bib5)) of GDP, is persuasion.
The study of BP has deep roots in economics, with numerous applications across fields such as school grading ([Boleslavsky & Cotton, 2015](https://arxiv.org/html/2502.01587v1#bib.bib18)), law enforcement deployment ([Lazear, 2006](https://arxiv.org/html/2502.01587v1#bib.bib71)), research procurement ([Yoder, 2022](https://arxiv.org/html/2502.01587v1#bib.bib122)), matching platforms ([Romanyuk & Smolin, 2019](https://arxiv.org/html/2502.01587v1#bib.bib100)), and routing systems ([Das et al., 2017](https://arxiv.org/html/2502.01587v1#bib.bib31)).
Various lines of theory have been proposed to explore the power of persuasion in different contexts ([Kamenica, 2019](https://arxiv.org/html/2502.01587v1#bib.bib61)).

This work investigates the Bayesian persuasion (BP) problem ([Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.01587v1#bib.bib62); [Kamenica, 2019](https://arxiv.org/html/2502.01587v1#bib.bib61)) between two agents: a sender and a receiver.
Unlike cheap talk ([Lo et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib77)), which is often employed in communication learning ([Foerster et al., 2016](https://arxiv.org/html/2502.01587v1#bib.bib40); [Sheng et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib104); [Zhu et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib133)), BP requires the sender to commit to an information disclosure mechanism publicly.
The focus, therefore, is on rational (Bayesian) decision-makers who understand and optimally react to the disclosed information.
Given a specific utility function, BP is equivalent to finding an optimal Bayes-correlated equilibrium in an extensive-form game ([Bergemann & Morris, 2013](https://arxiv.org/html/2502.01587v1#bib.bib13); [Bergemann & Morris, 2019](https://arxiv.org/html/2502.01587v1#bib.bib15)).

When the information space and the action space are both discrete and small, BP can often be solved analytically using optimization techniques ([Kolotilin, 2018](https://arxiv.org/html/2502.01587v1#bib.bib68); [Dworczak & Martini, 2019](https://arxiv.org/html/2502.01587v1#bib.bib35); [Makris & Renou, 2023](https://arxiv.org/html/2502.01587v1#bib.bib84); [Koessler & Skreta, 2023](https://arxiv.org/html/2502.01587v1#bib.bib64)). This includes more complicated variants such as informed BP or multistage BP.
Some research has also explored the use of multi-agent reinforcement learning to approximate solutions for more complicated problem structures ([Wu et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib116); [Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75); [Bacchiocchi et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib8)).

Despite these successes, most applications remain limited to games in the colloquial sense, where real-world complexity is often oversimplified.
In fact, applying these methods to real-world settings requires constructing a model of the game in question, which involves defining the appropriate state space, action space, and transition dynamics.
For instance, a classic example in BP is the recommendation letter problem, where a professor must write a letter that conveys nuanced information about a student’s background ([Dughmi, 2017](https://arxiv.org/html/2502.01587v1#bib.bib33)).
In the example, the student’s quality is reduced to a binary classification of either weak or strong, and the professor’s decision is restricted to either recommending or not.
This abstraction strips away much of the meaningful information inherent in the actual task.
Consequently, it prevents BP from being generalized to the rich spectrum of real-world problems.

![Refer to caption](https://arxiv.org/html/2502.01587v1/scenarios.png)


Figure 1: Extending classic BP examples to verbalized mediator-augmented, extensive-form games.

This work aims to leverage game-theoretic methods, enhanced by large language model (LLMs) ([Zhao et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib130)), to solve the original BP problem directly in the natural language domain.
Specifically, we model the BP problem as a verbalized mediator-augmented, extensive-form game ([Zhang & Sandholm, 2022](https://arxiv.org/html/2502.01587v1#bib.bib125)), where states and actions (or signals for the sender) are all represented as text, as shown in Figure [1](https://arxiv.org/html/2502.01587v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Verbalized Bayesian Persuasion").
For example, in the recommendation letter problem, the sender (professor) has a state that is a detailed, verbal description of the student’s background, the signal is the content of the recommendation letter, while the reward remains numerical.
The receiver (HR) observes this letter and must decide whether to accept the student.
To enable the sender and receiver to process, understand, and generate this text, we parameterize both agents using LLMs.

Before introducing the proposed verbalized game solver, we need to address two fundamental challenges that have hindered the application of BP to real-world scenarios.
The first challenge lies in the theoretical foundation of signal space design.
Unlike traditional BP problems where signals are discrete and finite, real-world persuasion involves natural language that carries nuanced information and contextual dependencies, creating an infinite-dimensional signal space where classic BP solution concepts break down ([Myerson, 1979](https://arxiv.org/html/2502.01587v1#bib.bib91); [Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.01587v1#bib.bib62)).
The second challenge concerns the fundamental difficulty in strategy optimization when using LLMs as agents.
While LLMs provide a powerful way to process natural language, their parameter spaces are extremely high-dimensional and non-convex, making it theoretically impossible to guarantee the existence of Nash equilibria in such spaces ([Gemp et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib43)) and computationally intractable for direct optimization.

To address these challenges, we draw on the prompt-space response oracle (Prompt-PSRO) ([Gemp et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib43)), which models strategy optimization for the sender and receiver as prompt optimization for their respective LLMs.
This approach not only mitigates the challenge of optimization inefficiency but also reduces the action space from lengthy, complex text to compact, low-dimensional, discrete prompts.
For instance, by adjusting the prompt given to the sender’s LLM, we can control the “level of details in the student’s background description” in the recommendation letter.

Building on the Prompt-PSRO, our solver is composed of several components that improve performance, efficiency, and stability.
These include verbalizing commitment assumptions, obedience constraints, and information obfuscation.
Technically, we extend Prompt-PSRO to multistage games by proposing conditional prompt optimization and providing a convergence guarantee to the equilibrium solution.
Together, these components form a comprehensive verbalized game solver tailored for BP, which we refer to as verbalized Bayesian persuasion (VBP).
To the best of our knowledge, VBP is the first general framework that attempts to solve real, non-abstract BP problems.

Our main contributions include:
1) Transforming real-world BP problems into verbalized mediator-augmented, extensive-form games, which provides a unified interface for game-theoretic solvers;
2) Proposing a general game-theoretic solver for verbalized BP problems based on the Prompt-PSRO framework, with a convergence guarantee to equilibrium solutions. Several components including verbalized commitment assumptions and obedience constraints, information obfuscation, and conditional prompt optimization enhance the solver’s performance, efficiency, and stability;
3) Reproducing results in classic BP problems consistent with existing optimization and learning methods, while efficiently solving natural language and multistage BP problems. This potentially opens up a new line of studies of persuasion in real-world scenarios, which is helpful in understanding the interaction of multiple agents in both economic and societal applications.

### 2 Preliminaries

This section will introduce research areas related to BP as well as tools and methods relevant to the techniques covered in the VBP framework.

#### 2.1 Bayesian Persuasion

The canonical BP model is structured as follows ([Kamenica, 2019](https://arxiv.org/html/2502.01587v1#bib.bib61)).
A receiver, an agent, has a utility function $u\_{1}(a,\omega)$, which depends on its action $a\in\mathcal{A}$ and the state of the world $\omega\in\Omega$.
Another agent, the sender (also known as the information designer), has a utility function $u\_{0}(a,\omega)$.
Both the sender and receiver share a common prior $\mu\_{0}$ over $\Omega$.
The sender’s key decision is the choice of a signaling scheme, which is a mapping from the state to a distribution over signals, $\pi:\Omega\rightarrow\Delta(\mathcal{S})$.
Here $\mathcal{S}$ represents a sufficiently large set of signals, which is typically enough with $|\mathcal{S}|\geq\min\{|\mathcal{A}|,|\Omega|\}$, known as the revelation principal.

Given knowledge of $\pi$ (i.e., under the commitment assumption ([Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.01587v1#bib.bib62))), the receiver updates its belief from the prior $\mu\_{0}$ to the posterior $\mu\_{\pi}(\omega\mid s)$ using Bayes’ rule.
The receiver then selects an action $a^{\*}$ that maximizes $\mathbb{E}\_{\omega\sim\mu\_{\pi}(\mid s)}u\_{1}(a,\omega)$.
Given this response mechanism from the receiver, the sender’s objective is to solve the following maximization problem: $\max\_{\pi\in\Pi}\mathbb{E}\_{\omega\sim\mu\_{0}}\mathbb{E}\_{s\sim\pi(\omega)}u\_{0}\left(a^{\*},\omega\right)$, where $\Pi$ denote the set of all possible signaling schemes.
Here the revelation principle applies that an optimal signaling scheme exists that requires no more signals than there are actions available to the receiver.
From the receiver’s perspective, as long as it believes that the recommended actions are optimal according to its posterior belief, it will follow the sender’s advice.
These constraints on the sender’s signaling scheme are referred to as obedience constraints ([Myerson, 1979](https://arxiv.org/html/2502.01587v1#bib.bib91); [Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.01587v1#bib.bib62)).
Then, BP can be reduced to a simplified linear programming ([Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75)),

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\max\_{\pi}\mathbb{E}\_{\pi}\left[u\_{0}(a,w)\right],$ | $\displaystyle\text{ s.t. }\sum\_{w}P(w)\cdot\pi(a\mid w)\cdot\left[u\_{1}(a,w)-u\_{1}\left(a^{\prime},w\right)\right]\geq 0,\forall a,a^{\prime}.$ |  | (1) |

#### 2.2 Learning Methods for BP

The problem of BP can be approximately solved by multi-agent reinforcement learning (MARL).
In mixed-motive MARL, agents aim to advance their interests by shaping others ([Leibo et al., 2017](https://arxiv.org/html/2502.01587v1#bib.bib72); [McKee et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib90); [Dafoe et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib30); [Leibo et al., 2021](https://arxiv.org/html/2502.01587v1#bib.bib73)).
Existing methods achieve this through either mechanism (modifying rewards) ([Yang et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib120); [Zheng et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib131); [Hua et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib54); [Wang et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib113)) or information design (modifying observations) ([Wu et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib116); [Bernasconi et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib16); [Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75)), the latter of which could be used to solve BP.
An sender can commit to a strategy for providing state information to the agents, effectively altering the observation function of the receiver.
So the sender can influence agents’ behavior by strategically providing information and guiding them toward desired outcomes ([Bergemann & Morris, 2019](https://arxiv.org/html/2502.01587v1#bib.bib15)).
In a long-term interaction, the sender and the receiver become aware of each other’s strategy, which creates the game dynamics that resemble the commitment assumption and therefore the BP problem setting.
Then, the outcome of the MARL algorithm becomes an equilibrium of BP.

Figure 2: Left: BP timing in the EFG; Right: Illustration of the Prompt-PSRO.

#### 2.3 Policy- and Prompt-Space Response Oracle

While game theory offers a mathematical framework to study interactions between multiple agents ([Bighashdel et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib17)), classical analysis struggles with scalability due to the sheer number of strategies.
To address this, a wide range of learning methods have been applied to large-scale games, with MARL ([Yang & Wang, 2020](https://arxiv.org/html/2502.01587v1#bib.bib121); [Zhang et al., 2021](https://arxiv.org/html/2502.01587v1#bib.bib127)) being one of the most prominent approaches.
Unlike traditional methods, learning-based approaches do not require full representation of the game and instead create agents that explore and adapt by interacting with the environment.
However, learning methods face inherent challenges in games, such as non-stationarity ([Tuyls & Weiss, 2012](https://arxiv.org/html/2502.01587v1#bib.bib111)) and non-transitivity ([Czarnecki et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib29); [Sanjaya et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib103)).

The PSRO framework ([Lanctot et al., 2017](https://arxiv.org/html/2502.01587v1#bib.bib70)) emerged as a hybrid approach, combining traditional equilibrium computation with learning techniques.
It improves scalability by focusing on relevant subsets of strategies ([Wellman, 2006](https://arxiv.org/html/2502.01587v1#bib.bib114); [Bighashdel et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib17)).
[Assos et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib7) demonstrate that PSRO-like approaches lead to tractable notions of approximate local Nash equilibria.
As illustrated in Figure [2](https://arxiv.org/html/2502.01587v1#S2.F2 "Figure 2 ‣ 2.2 Learning Methods for BP ‣ 2 Preliminaries ‣ Verbalized Bayesian Persuasion"), PSRO algorithms begin with an initial set of strategies for each agent and proceed through two alternating steps.
First, a normal-form meta-game (e.g., matrix game) is constructed, where each agent selects a meta-strategy to represent their overall behavior in the game.
A meta-solver (e.g., Nash equilibrium solver) then computes a solution (e.g., Nash equilibrium) for this meta-game.
In the second step, each agent computes an approximate best response to the meta-strategy, aiming to improve their reward assuming the other agents play according to the meta-strategy.
This process repeats until no agent can benefit by deviating from their strategies ([Bighashdel et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib17)).

The prompt-space response oracle ([Gemp et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib43)) (Prompt-PSRO) is a verbalized adaptation of the standard PSRO framework, where strategies are parameterized by LLMs and represented as prompts.
The approximate best response is generated by optimizing and sampling prompt strings, as opposed to the standard PSRO protocol where best responses are typically computed using MARL or gradient-based optimization.

### 3 Related Works

The related fields primarily include the broader research area of deceptive behaviors in multi-agent learning, the persuasive or persuadable capabilities of LLMs themselves, and the LLMs in strategic interactions.

#### 3.1 Game-Theoretic Solvers with LLMs

The combination of a game-theoretic solver with prompt optimization, which we use in this work, is not the only paradigm for utilizing LLMs to solve games.
Widely adopted parameter-efficient fine-tuning ([Xu et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib117); [Han et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib49)), agentic workflow ([Mao et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib85); [Hua et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib53); [Guo et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib47); [Fan et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib38); [Lorè & Heydari, 2024](https://arxiv.org/html/2502.01587v1#bib.bib79); [Duan et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib32)), as well as the recent trend of improving reasoning and problem-solving capabilities for complex and mathematical problems by having LLMs generate longer chains of thought prior to making decisions ([Zelikman et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib123); [Zelikman et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib124); [OpenAI, 2024](https://arxiv.org/html/2502.01587v1#bib.bib96); [Guo et al., 2025](https://arxiv.org/html/2502.01587v1#bib.bib46)), are also very promising directions.
The former allows for more fine-grained control of LLM outputs through in-weight updates, compared to in-context updates like prompt optimization, while the latter two may enable LLMs to discover novel game solvers.
VBP is orthogonal to these approaches.
Its primary goal is to leverage the rich foundation of game theory by incorporating various game-theoretic solvers that have already been proposed, and to extend the solid theoretical results established in classical games for solving verbalized games.

#### 3.2 Deception in Multi-Agent Learning

[Bond & Robinson (1988)](https://arxiv.org/html/2502.01587v1#bib.bib19) defines deception as false communication that benefits the communicator.
In social learning, deception can be viewed as a means for the communicator to establish a cooperative equilibrium that is suboptimal for overall population welfare.
Previous studies have explored deception within multi-agent reinforcement learning (MARL) settings ([Asgharnia et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib6); [Bontrager et al., 2019](https://arxiv.org/html/2502.01587v1#bib.bib20); [Li et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib74); [Ghiya & Sycara, 2020](https://arxiv.org/html/2502.01587v1#bib.bib45)), but these efforts typically focus on environments where agents have limited capacity to influence one another.
More recent work ([Chelarescu, 2021](https://arxiv.org/html/2502.01587v1#bib.bib26)) highlights the vulnerability of agents dependent on signals from others to guide their learning processes, pointing to the potential risks inherent in such scenarios.
While much research focuses on the positive outcomes of mechanism design, it also reveals unforeseen risks, such as the emergence of deceptive behaviors ([Hughes et al., 2018](https://arxiv.org/html/2502.01587v1#bib.bib57); [Jaques et al., 2019](https://arxiv.org/html/2502.01587v1#bib.bib59); [Yang et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib120); [Lupu & Precup, 2020](https://arxiv.org/html/2502.01587v1#bib.bib80); [Ndousse et al., 2021](https://arxiv.org/html/2502.01587v1#bib.bib94)).
Unlike these prior studies, which primarily examine how reward modifications influence deception through mechanisms like mechanism design, our work emphasizes the role of information manipulation in shaping deceptive behavior.

Game-theoretic models traditionally frame deception using signaling ([Ho et al., 1978](https://arxiv.org/html/2502.01587v1#bib.bib50)), where one player can send costly signals to convey false information.
In network security, for instance, [Carroll & Grosu (2011)](https://arxiv.org/html/2502.01587v1#bib.bib24) examined how defenders can deceive attackers by masking honeypots as regular computers.
Other research has studied the evolution of deceptive signaling in mixed environments.
[Floreano et al. (2007)](https://arxiv.org/html/2502.01587v1#bib.bib39) demonstrated that, in competitive food-gathering tasks, teams of robots spontaneously developed deceptive strategies, misleading competitors to reduce resource competition.
An extension to classical game theory, known as hypergame theory ([Bennett, 1980](https://arxiv.org/html/2502.01587v1#bib.bib12)), accounts for players’ uncertainty about others’ strategies or preferences, leading to disagreements about the underlying game being played.
By incorporating agents’ differing perceptions, hypergame theory provides a natural framework to model misperception, false beliefs, and deception ([Kovach et al., 2015](https://arxiv.org/html/2502.01587v1#bib.bib69)).
Applications of hypergame theory include [Vane & Lehner (2002)](https://arxiv.org/html/2502.01587v1#bib.bib112), who analyzed deception in normal-form hypergames, and [Gharesifard & Cortés (2013)](https://arxiv.org/html/2502.01587v1#bib.bib44), who modeled deception based on player preferences when the deceiver has full knowledge of the target.
Additionally, [Ettinger & Jehiel (2010)](https://arxiv.org/html/2502.01587v1#bib.bib36), [Strouse et al. (2018)](https://arxiv.org/html/2502.01587v1#bib.bib109), and [Aitchison et al. (2021)](https://arxiv.org/html/2502.01587v1#bib.bib2) show how agents can manage information about their roles to achieve deception by regularizing mutual information between goals and states.
In contrast to these works, which model deception as discrete, explicit signaling actions, our study explores how deception can be realized through natural language interaction.

Finally, [MacNally et al. (2018)](https://arxiv.org/html/2502.01587v1#bib.bib82) addresses the broader question of how agents can communicate intent without explicit signaling, using an online planner to select actions that implicitly reveal intent to an observer.
[Masters & Sardina (2017)](https://arxiv.org/html/2502.01587v1#bib.bib87) extended this approach to deception by maximizing the divergence between the agent’s and observer’s beliefs.
However, these methods assume full observability and rely on environmental models for forward planning, whereas our work focuses on achieving deception through natural language in more complex, partially observable environments.

#### 3.3 Conversational Persuasiveness of LLMs

Recent advancements in LLMs have shown their impressive potential in the realm of persuasion.
A growing body of research highlights how these models can enhance human communicative abilities and even autonomously generate persuasive content across various contexts.

For instance, [Shin & Kim (2024)](https://arxiv.org/html/2502.01587v1#bib.bib106) demonstrated that refining complaint narratives with ChatGPT significantly improved consumers’ chances of obtaining redress from financial institutions, showcasing the role of LLMs in boosting human persuasive efforts.
Similarly, [Carrasco-Farre (2024)](https://arxiv.org/html/2502.01587v1#bib.bib23) showed that LLMs outperform humans in utilizing cognitive load and moral or emotional language when crafting persuasive messages, prompting the need for ethical guidelines governing their use.
[Breum et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib21) further explored LLMs’ capacity to simulate persuasive dynamics, revealing that LLMs can influence opinion changes in other LLMs with predefined personas.
Building on this, [Ramani et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib98) introduced a multi-agent framework in which a primary agent engages users through persuasive dialogue, while auxiliary agents handle tasks such as information retrieval, response analysis, and strategy development.
These studies illustrate that LLMs are not only capable of enhancing human persuasion but also of autonomously refining and executing persuasive strategies.

The impact of LLM-generated persuasive text on human behavior has been demonstrated across a diverse range of domains.
For example, [Bai et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib10) showed that GPT-3.5 could influence political attitudes, while [Karinshak et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib63) found that GPT-3’s vaccine campaign messages were more effective than those created by professionals.
Additionally, LLM-powered romantic chatbots have been shown to sustain human engagement longer than human-to-human conversations ([Zhou et al., 2020](https://arxiv.org/html/2502.01587v1#bib.bib132)).
In strategic contexts, LLMs have achieved human-level negotiation capabilities in games like Diplomacy ([FAIR et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib37)), and algorithmic suggestions have been shown to shape emotional language in messaging ([Hohenstein et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib51)).
These examples collectively highlight the broad applicability of LLMs in persuasive tasks and their significant influence on human decision-making.

However, the increasing persuasive power of LLMs also raises concerns about potential misuse.
[Salvi et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib102) found that LLMs outperform humans in personalized debates, achieving a higher rate of belief change in one-on-one discussions.
This raises ethical concerns, particularly regarding the risks of misinformation and manipulation.
For instance, [Májovskỳ et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib83) demonstrated that LLMs can convincingly fabricate medical facts, further complicating the ethical landscape.
The ability of LLMs to produce persuasive yet misleading content underscores the need for stronger oversight, especially in high-stakes domains such as healthcare, politics, and public discourse.
Recent studies have thus emphasized the necessity of ethical frameworks as LLMs become more adept at persuasion.
While LLMs have shown persuasive power across various tasks and domains ([Matz et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib88); [Durmus et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib34); [Burtell & Woodside, 2023](https://arxiv.org/html/2502.01587v1#bib.bib22); [Shin & Kim, 2023](https://arxiv.org/html/2502.01587v1#bib.bib105)), they also pose risks, particularly for vulnerable populations.
[Bar-Gill et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib11) highlighted that characteristics such as race, gender, and sexual identity may subject certain groups to greater risks of algorithmic persuasion and bias, potentially exacerbating existing social inequalities.

From a computational standpoint, [Wojtowicz (2024)](https://arxiv.org/html/2502.01587v1#bib.bib115) provided a novel proof showing that discovering persuasive messages is NP-hard, while adopting persuasive strategies provided by others is NP-easy.
This insight adds to our understanding of the complexity involved in generating persuasive content and demonstrates why LLMs, with their vast data-processing capabilities, are particularly adept at these tasks.
Building on these insights, our work explores how game-theoretic methods can be leveraged to enhance the persuasive capabilities of LLMs in purely multi-agent LLM systems.
Unlike previous studies that primarily measure the impact of LLM-generated persuasive text on humans, we investigate how multiple LLMs can engage in persuasive interactions with one another, optimizing their strategies using game-theoretic approaches.

#### 3.4 LLMs in Strategic Interactions

Recent advances in large language models (LLMs) have showcased their potential in reasoning and planning, particularly in strategic interactions.
LLMs have demonstrated strong capabilities in in-context learning, allowing them to reason about possible outcomes ([Kojima et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib67)) and plan their actions to achieve strategic objectives ([Liu et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib76)).
However, their performance in game environments can vary significantly depending on the type of game, as shown by [Lorè & Heydari (2023)](https://arxiv.org/html/2502.01587v1#bib.bib78), where LLMs struggled in different ways across various games.
To address these challenges, [Gandhi et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib42) introduced an automated “prompt compiler” that facilitates strategic reasoning by constructing demonstrations, enabling LLMs to solve games through in-context learning.
Similarly, [FAIR et al. (2022)](https://arxiv.org/html/2502.01587v1#bib.bib37) designed an action space of “intents” to control a generative language model, also leveraging in-context learning, which aligns closely with the approach taken in our work here.
Additionally, game-theoretic models have been employed to improve the factual accuracy of LLMs ([Jacob et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib58)) and enhance their security ([Ma et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib81)).
For a broader overview of LLMs in strategic reasoning, [Zhang et al. (2024b)](https://arxiv.org/html/2502.01587v1#bib.bib128) provides a comprehensive survey.

The BP problem, however, goes beyond mere reasoning or planning.
It requires the ability to anticipate and account for the intentions, beliefs, and goals of other participants-a hallmark of game-theoretic settings.
While some initial studies have begun to explore how LLMs perform in game environments, most of this work focuses on leveraging in-context learning.
For example, research has examined LLMs’ behavior in matrix games ([Xu et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib118); [Fan et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib38)), repeated games ([Akata et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib3); [Zhang et al., 2024c](https://arxiv.org/html/2502.01587v1#bib.bib129); [Huang et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib56); [Silva, 2024](https://arxiv.org/html/2502.01587v1#bib.bib108)), economic mechanisms like auctions ([Chen et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib27); [Mao et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib85)), and collective decision-making scenarios ([Jarrett et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib60)).
These studies collectively illustrate the potential of LLMs to navigate complex environments that require both strategic thinking and interaction with other agents.

In contrast to prior work that primarily evaluates LLMs’ reasoning or game-playing capabilities through in-context learning or agentic workflows, our approach focuses specifically on solving the BP problem.
Our key contribution lies in providing a general interface that integrates LLMs with game-theoretic solvers to address BP problems effectively.
Based on this interface, we propose a solution framework called VBP, which combines prompt optimization with game-theoretic methods.
This framework offers a convergence guarantee to equilibrium solutions, ensuring robust performance.

###### Remark 1

While both our work and [Bai et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib9) leverage BP, they address fundamentally different problem spaces.
[Bai et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib9) apply classic BP as a tool for model alignment, optimizing signaling strategies between a smaller “Advisor” model and a larger “Receiver” model to improve downstream task performance in areas like mathematical reasoning and code generation.
In contrast, our work extends BP into natural language settings by introducing a verbalized BP framework, enabling strategic communication through real-world dialogue.
This involves novel methods such as transforming agents’ policy optimization into prompt optimization and developing equilibrium-finding algorithms in the language space.
These differences highlight the complementary nature of the two approaches: [Bai et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib9) focus on BP-driven alignment for structured tasks, while our contributions advance BP for complex, dialogue-based applications.

### 4 The Mediator-Augmented Game Formulation for BP

To establish convergence for the VBP framework, we transform the classic BP problem into a special class of extensive-form games (EFGs), known as mediator-augmented games (MAGs, [Zhang & Sandholm (2022)](https://arxiv.org/html/2502.01587v1#bib.bib125)).
In this section, we reformulate the BP problem in the form of an MAG.
At a high level, a mediator-augmented game introduces an additional player, the mediator, who exchanges messages with the players and provides action recommendations.

###### Definition 4.1.

A Bayesian persuasion problem, represented as a mediator-augmented game $\Gamma$, consists of the following components ([Zhang & Sandholm, 2022](https://arxiv.org/html/2502.01587v1#bib.bib125)):
(1) a player, referred to as the receiver, denoted by the integer $1$;
(2) a directed tree $H$ of histories or nodes, with the root denoted by $\varnothing$. The edges of $H$ are labeled with actions, and the set of legal actions at each node $h$ is denoted by $A\_{h}$. Terminal nodes of $H$ are called leaves, and the set of such leaves is denoted by $Z$;
(3) a partition of non-terminal nodes $H\backslash Z$ into $H\_{\mathbf{C}}\sqcup H\_{0}\sqcup H\_{1}$, where $H\_{1}$ represents the nodes where player $1$ acts, and $\mathbf{C}$ and $0$ represent chance and the mediator (i.e., the sender), respectively;
(4) for each agent $i\in\{1,0\}$, a partition $\mathcal{I}\_{i}$ of the decision nodes $H\_{i}$ into information sets. Every node in a given information set $I$ must have the same set of legal actions, denoted by $A\_{I}$;
(5) for each agent $i\in\{1,0\}$, a utility1 function $u\_{i}:Z\rightarrow\mathbb{R}$; and
(6) for each chance node $h\in H\_{\mathbf{C}}$, a fixed probability distribution $c(\cdot\mid h)$ over $A\_{h}$.

At any node $h\in H$, the sequence $\sigma\_{i}(h)$ for agent $i$ consists of all information sets (infosets) encountered by $i$, along with the actions taken at those infosets on the path from $\varnothing$ to $h$, excluding $h$ itself.
An agent has perfect recall if $\sigma\_{i}(h)=\sigma\_{i}(h^{\prime})$ for all $h,h^{\prime}$ within the same infoset.
A pure strategy for agent $i$ specifies one action from $A\_{I}$ for each information set $I\in\mathcal{I}\_{i}$.
A mixed strategy is a probability distribution over pure strategies, and the sequence form of a mixed strategy corresponds to the convex combination of pure strategies.
Let $X\_{1}$ and $X\_{0}$ denote the polytope of sequence-form mixed strategies $\boldsymbol{x}\_{1}$ for the receiver and $\pi$ for the mediator, respectively.

For a fixed $\pi\in X\_{0}$, we say that $(\pi,\boldsymbol{x}\_{1})$ is an equilibrium of $\Gamma$ if $\boldsymbol{x}\_{1}$ is a best response to $\pi$, meaning $\max\_{\boldsymbol{x}\_{1}^{\prime}\in X\_{1}}u\_{1}(\pi,\boldsymbol{x}\_{1}^{\prime})\leq u\_{1}(\pi,\boldsymbol{x}\_{1})$.
We do not require the mediator’s strategy (signaling scheme) $\pi$ to be a best response;
hence, the mediator can commit to its strategy.
The objective of this paper is to find an optimal Stackelberg equilibrium, which is an equilibrium $(\pi,\boldsymbol{x}\_{1})$ that maximizes the mediator’s utility $u\_{0}(\pi,\boldsymbol{x}\_{1})$.
When viewed as an extensive-form game (EFG), the event sequence in BP is shown in Figure [2](https://arxiv.org/html/2502.01587v1#S2.F2 "Figure 2 ‣ 2.2 Learning Methods for BP ‣ 2 Preliminaries ‣ Verbalized Bayesian Persuasion").

### 5 VBP Solver

This section will provide a detailed introduction to the VBP framework, as shown in Figure [3](https://arxiv.org/html/2502.01587v1#S5.F3 "Figure 3 ‣ 5 VBP Solver ‣ Verbalized Bayesian Persuasion").
The first part presents the verbalization of MAG, including a polarized setting (e.g. strong/weak students) that reproduces the classic examples in BP, and general settings for one-step and multi-stage BP in the language space.
The second part introduces how this MAG is solved within the Prompt-PSRO framework, with the help of available best response approximations in language models ([Yang et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib119); [Romera-Paredes et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib101)).
The verbalized MAG, along with the three problem settings and the Prompt-PSRO-based game-theoretic solver, collectively constitute the VBP framework.

Figure 3: Verbalize Bayesian persuasion framework.

#### 5.1 Verbalized Formulation for BP

To leverage the wealth of research in LLMs for BP in realistic scenarios, we must abstract and map components of BP to the symbolic language.
Note the mapping can be chosen is not unique.

- •

  State $\omega$. Unlike the classic BP, which only describes the state with binary values, the state in VBP is defined as the text. For example, it is the detailed description to the student’s quality in the recommendation letter problem.
- •

  Infosets $\mathcal{I}$. The infoset is available only in the multi-stage setting. It is defined as the interaction history between the two parties.
  Specifically, this includes the signals sent by the sender, the receiver’s decisions (public information), and their respective rewards (private information) from each round of interaction, plus the previous environmental states (private information).
- •

  Action $A$. Agents’ actions refer to the signaling scheme for the sender and the action for the receiver. As we transform the strategy optimization problem into a prompt optimization problem through the Prompt-PSRO framework, the actions involve selecting prompts.
- •

  Terminal states $\mathcal{Z}$. In static settings the game terminates in one step. In multi-stage settings terminal states are determined by either a limit or the allowable tree depth.

In addition to the basic components of the game, the BP problem also includes two fundamental constraints that need to be mapped into the verbalized MAG.

###### Verbalized Committment Assumption

The key difference between BP and cheap talk ([Crawford & Sobel, 1982](https://arxiv.org/html/2502.01587v1#bib.bib28)) lies in the presence of the commitment assumption, where the sender commits their signaling scheme as common knowledge.
The VBP framework achieves the commitment assumption through prompting in the static setting and through expanding the receiver’s infoset in the multi-stage setting.
Specifically, the signaling scheme is equivalent to the key components in the prompt provided to the sender that influence the generated signals, and these components are the target of Prompt-PSRO optimization.
VBP incorporates these components into the receiver’s prompt, where more details are deferred to Appendix [C.4](https://arxiv.org/html/2502.01587v1#A3.SS4 "C.4 Key Prompts ‣ Appendix C Implementation Details ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion").

###### Verbalized Obedience Constraint

The optimization in BP involves an (extended) obedience constraint ([Myerson, 1979](https://arxiv.org/html/2502.01587v1#bib.bib91); [Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.01587v1#bib.bib62); [Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75)), as shown in Equation [1](https://arxiv.org/html/2502.01587v1#S2.E1 "Equation 1 ‣ 2.1 Bayesian Persuasion ‣ 2 Preliminaries ‣ Verbalized Bayesian Persuasion").
It is intuitive to handle this constraint by transforming it into a penalty term, which is similar to reward shaping ([Ng et al., 1999](https://arxiv.org/html/2502.01587v1#bib.bib95); [Gupta et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib48)).
However, computing this penalty term requires integrating over the entire state and action space.
To address this, we estimate the summation term using a sampling approach.
Specifically, we calculate an estimate using the current state and an arbitrarily selected action.
There are various ways to select actions, and here we introduce a theory-of-mind approach ([Rabinowitz et al., 2018](https://arxiv.org/html/2502.01587v1#bib.bib97); [Albrecht & Stone, 2018](https://arxiv.org/html/2502.01587v1#bib.bib4)), where actions are selected based on predictions of what the receiver would do, using a prompt to pretrained and aligned LLMs to anticipate the receiver’s likely actions.

#### 5.2 Three Settings in VBP

###### Setting S1: Polarized signals

Polarized signals refer to the constraint to produce more straightforward signals, such as recommend v.s. not recommend in the recommendation letter example. The goal of this setting is to aligning the signal space with the classic BP formulation. We aim to reproduce the Stackelberg equilibrium in classic BP examples and validate the effectiveness of VBP.
Specifically, we use the pretrained and aligned LLM to score the signals output by the sender, For example, this determines the degree, a real value between $0$ and $1$, to which the recommendation letter supports the student. Similar prompts can be designed for other problems.
Then this value is pushed to an extreme point in the signal space, based on the minimum distance.

###### Setting S2: VBP in Static BP

By removing signal polarization, the signals are maintained in the language space. This constitutes the default setting of VBP.

###### Setting S3: VBP in Multistage BP

This setting considers a multistage scenario, which is very challenging for traditional methods ([Gan et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib41); [Wu et al., 2022](https://arxiv.org/html/2502.01587v1#bib.bib116)).
The agents engage in multiple rounds of interaction, and the sender’s historical signals serve as the basis for the receiver’s subsequent decisions.
This largely increases the complexity, as the sender cannot arbitrarily exploit the receiver with their information advantage.
Instead, they must consider how their current actions may impact future rewards.

#### 5.3 Verbalized Game Solver

After modeling the BP as a verbalized MAG, we parameterize both agents using pretrained and aligned LLMs and optimize their strategies with the Prompt-PSRO, thereby forming a general BP solver.
We first present the following proposition based on the theoretical foundation of [Zhang & Sandholm (2022)](https://arxiv.org/html/2502.01587v1#bib.bib125), with the proof provided in Appendix [A](https://arxiv.org/html/2502.01587v1#A1 "Appendix A Proof of Proposition ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion").

###### Proposition 5.1.

VBP returns an $\varepsilon$-approximate Bayes correlated equilibrium in static BP and an $\varepsilon$-approximate Bayes-Nash equilibrium in multistage BP.

In simple terms, the reason we can leverage the theoretical results of MAG is because different assumptions on the power of the mediator and the players’ strategy sets induce different equilibrium concepts.
The concept of Bayes correlated equilibrium ([Bergemann & Morris, 2016](https://arxiv.org/html/2502.01587v1#bib.bib14)) in static BP and Bayes-Nash equilibrium ([Makris & Renou, 2023](https://arxiv.org/html/2502.01587v1#bib.bib84)) in multistage BP is equivalent to the situation in the MAG where the mediator has an informational advantage, cannot lie (commitment assumption), and gains perfect recall under the extensive-form correlated equilibrium.

VBP does not directly solve the verbalized MAG using the Prompt-PSRO.
Instead, we make targeted improvements to Prompt-PSRO for different settings, as illustrated in the Appendix [C.1](https://arxiv.org/html/2502.01587v1#A3.SS1 "C.1 Best Response Approximator ‣ Appendix C Implementation Details ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion").
For the S1 and S2 settings, we optimize the strategies of the sender and receiver using Algorithm 4 from the Prompt-PSRO framework ([Gemp et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib43)), specifically the “categorical” approximate best response.
Unlike in the original PSRO paper, we use the OPRO method ([Yang et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib119)) to generate both the categories and the specific content within the categories simultaneously.

The S3 setting presents a challenge for the Prompt-PSRO.
Existing Prompt-PSRO is unconditional or episode-wise, meaning that the prompt generated at the beginning of each episode is used for every subsequent timestep.
In mutlistage BP, this significantly restricts the optimizable strategy space.
In other words, both the sender and receiver can dynamically adjust their strategies based on the interaction history to achieve higher rewards.
For example, the sender might honestly provide true information to the receiver early to build trust, then deceive the receiver later.
Similarly, the receiver could bargain to extract more information.
Thus, we propose a conditional version of Prompt-PSRO, denoted as step-wise Prompt-PSRO, building on the original framework.
Specifically, we introduce FunSearch ([Romera-Paredes et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib101)) to VBP, where the strategy to be optimized is no longer the prompt itself, but a function that generates the prompt.
This function takes the current interaction history as input, thereby enabling conditional prompts.
The pseudocode is shown in Algorithm [1](https://arxiv.org/html/2502.01587v1#alg1 "Algorithm 1 ‣ 5.3 Verbalized Game Solver ‣ 5 VBP Solver ‣ Verbalized Bayesian Persuasion").

Moreover, since we use aligned LLMs, the sender struggles to output strategic signals, such as hiding or obfuscating relevant information about the true state, which leads to lower training efficiency.
To speed up training, we introduce a information obfuscation mechanism.
Similar to reward shaping (though experiments showed suboptimal results, likely due to the complexity of optimizing the reward function with too many components), a pretrained and aligned LLM is deployed to evaluate the degree of information hiding or obfuscation in the output signal.
This feedback is then employed to perform multiple rounds of self-reflection ([Huang et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib55); [Shinn et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib107); [Tao et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib110)) before entering the Prompt-PSRO loop.

Algorithm 1  Verbalized Bayesian Persuasion

0:
 $C$, where $C\_{i}$ is the initial prompt action set (i.e., one category and one corresponding content) for player $i$ (either the sender or receiver)

0:
 $h$, containing hyperparameters for the approximate best response operator BR (e.g., LLM-based OPRO or FunSearch)

1:
 Initialize with LLM-based sampling: Compute the expected payoff tensor $P$ over all joint actions in $C$ using Equation ([3](https://arxiv.org/html/2502.01587v1#A1.E3 "Equation 3 ‣ Proof. ‣ Appendix A Proof of Proposition ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion"))

2:
 Set: $\pi\leftarrow$ uniform meta-strategy profile over $C$
{Each joint action in $C$ initially has equal probability}

3:
 Set: incomplete $\leftarrow$ TRUE
{Flag to indicate if the equilibrium search is complete}

4:
 while incomplete do

5:
  for player $i\in[N]$ do

6:
   LLM input: Provide current meta-strategy $\pi$ and action sets $C$ of sender (for receiver)

7:
   Use LLMs to compute best response: $c\_{i}\leftarrow\text{BR}(i,\pi,h)$ {The LLM generates the optimal prompt or strategy for player $i$}

8:
   LLM output: Candidate best response $c\_{i}$ for player $i$

9:
  end for

10:
  if $c\_{i}\in C\_{i}$ $\forall i\in[N]$ then

11:
   incomplete $\leftarrow$ FALSE
{Terminate the loop if no new strategies are found}

12:
  else

13:
   $C\_{i}\leftarrow C\_{i}\cup c\_{i}$, $\forall i\in[N]$
{Add the newly found best response strategies to the action sets}

14:
   Recompute with LLM-based sampling: Compute the expected payoff tensor $P$ over the updated joint actions in $C$ using Equation ([3](https://arxiv.org/html/2502.01587v1#A1.E3 "Equation 3 ‣ Proof. ‣ Appendix A Proof of Proposition ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion"))

15:
   Update: $\pi\leftarrow$ meta-strategy w.r.t. $P$
{Recalculate the strategy probabilities based on the updated payoff tensor}

16:
  end if

17:
 end while

18:
 Return: $(\pi,C,P)$
{Return the final meta-strategy, action sets, and payoff tensor}

### 6 Experiments

#### 6.1 Environments

##### 6.1.1 Classic BP Problems

This section introduces the three classic static BP problems used in our experiments.

###### Recommendation Letter (REL) ([Dughmi, 2017](https://arxiv.org/html/2502.01587v1#bib.bib33))

A professor writes recommendation letters for graduating students, which are then reviewed by a company’s human resources (HR) department to decide whether to hire.
The professor and HR share a prior belief about the students’ quality:
there is a $1/3$ probability that a candidate is strong and a $2/3$ probability that the candidate is weak.
HR does not know the exact quality of each student but aims to hire strong candidates, using the recommendation letters as the only source of information.
HR receives a reward of $1$ for hiring a strong candidate, incurs a penalty of $-1$ for hiring a weak candidate, and gets $0$ for not hiring.
The professor, on the other hand, gains a reward of $1$ for each student hired, regardless of their quality.

###### Courtroom (COR) ([Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.01587v1#bib.bib62))

In this scenario, a prosecutor attempts to convince a judge to convict a defendant, with two possible states: guilty or innocent.
The judge (receiver) must choose between convicting or acquitting, receiving a utility of $1$ for a correct decision (convicting if guilty, acquitting if innocent) and $0$ for an incorrect one.
The prosecutor (sender) receives a utility of $1$ if the judge convicts, regardless of the defendant’s actual guilt, and both parties share a prior belief that the probability of guilt is $0.3$.
In the original setting, the prosecutor conducts an investigation (signaling scheme) requiring decisions on actions such as subpoenas or forensic tests, represented by distributions $\pi(\cdot\mid\text{guilty})$ and $\pi(\cdot\mid\text{innocent})$ over signals.
However, modeling real-world investigations in a verbalized setting poses challenges for LLMs, so we simplify the scenario by drawing inspiration from the REL problem, where the prosecutor selectively presents pre-existing evidence to influence the perceived probability of guilt, effectively replacing the investigation process with evidence presentation.

###### Law Enforcement (LAE) ([Kamenica, 2019](https://arxiv.org/html/2502.01587v1#bib.bib61))

In this scenario, there are $Z$ miles of road, and drivers can choose to either speed or obey the speed limit on each mile.
Speeding generates utility $V$ per mile, but drivers face a fine of $K>V$ if caught.
There are $G$ police officers, and each officer can patrol one mile of road.
The police aim to minimize the number of miles on which drivers speed.
To map this environment to the BP problem, let $\omega\in\Omega=\{0,1\}$ represent whether a police officer is present on a given mile.
The prior belief is $\mu\_{0}=G/Z$.
The set of signals corresponds to the miles of road, $S=\{1,\dots,Z\}$.
In this model, the police act as the sender and the driver as the receiver.
A signaling scheme represents the predictability or unpredictability of the police patrolling strategy.
This strategy induces a joint distribution over $\Omega$ and $S$, i.e., over the presence of a police officer and the specific mile being patrolled.

##### 6.1.2 More Real-World Applications

Our proposed verbalized Bayesian persuasion (VBP) framework has significant potential for real-world applications, particularly in complex, multi-sender, multi-receiver, and multi-round strategic communication scenarios.
Below, we discuss two illustrative examples-conversational recommendation systems and healthcare DRG strategies-and highlight the potential challenges in applying VBP to these domains.

###### Conversational Recommendation Systems

One promising application of VBP is in conversational recommendation systems, such as those used in live-stream shopping.
In this setting, multiple senders (e.g., influencers or sales agents) aim to persuade a diverse group of receivers (customers) to purchase products through real-time, strategic communication.
The VBP framework can optimize prompts (e.g., how product features or discounts are presented) to maximize customer engagement and conversions across varying customer segments.
This application faces challenges such as receiver heterogeneity, where customers interpret signals differently based on their preferences and trust levels, making it difficult to craft universal strategies.
Furthermore, the real-time nature of live-stream interactions demands highly efficient decision-making algorithms capable of adapting communication strategies dynamically.
Scaling the system to accommodate thousands or millions of receivers simultaneously also requires advanced parallel processing and optimization techniques.

###### DRG Strategy in Healthcare

Another practical application lies in healthcare, specifically in optimizing Diagnosis-Related Group (DRG) reimbursement systems.
Here, hospitals and post-acute care (PAC) providers (senders) communicate with regulatory agencies (receiver) to determine reimbursement policies for patient treatments.
The VBP framework can model the incentives and communication strategies of the senders to help regulators design policies that balance cost-effectiveness with maintaining high-quality patient care.
In this domain, conflicting incentives among senders (e.g., hospitals vs. PAC providers) add complexity, as senders may compete or collaborate to influence the receiver’s decisions.
Additionally, the large scale of the problem, with thousands of providers, poses computational challenges for efficient optimization.
Long-term policy adjustments based on multi-round feedback further complicate the problem, requiring robust mechanisms to handle dynamic interactions over time.

These examples demonstrate the versatility of the VBP framework in addressing real-world problems involving strategic communication.
However, its application to practical scenarios requires addressing challenges such as scalability, heterogeneity of participants, real-time decision-making, and multi-round dynamics.
Future work will focus on refining the VBP framework to overcome these challenges and enhance its readiness for deployment in diverse real-world contexts.

#### 6.2 VBP in Static Games (S1 & S2)

We first evaluate the effectiveness of the VBP method under the S1 setting.
Two baseline methods are chosen: BCE and MARL.
The former is based on the optimal equilibria computed in [Lin et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib75), [Kamenica & Gentzkow (2011)](https://arxiv.org/html/2502.01587v1#bib.bib62) and [Kamenica (2019)](https://arxiv.org/html/2502.01587v1#bib.bib61), while the latter is based on the multi-agent reinforcement learning method proposed in [Lin et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib75) for solving BP problems.
As shown in Figure [4](https://arxiv.org/html/2502.01587v1#S6.F4 "Figure 4 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion"), the VBP framework successfully captures the essence of solving BP problems, namely, selectively withholding, obfuscating, or even deceiving about the true state, while also learning when to fully disclose accurate information.

(a) Sender’s rewards.

(b) Receiver’s rewards.

(c) Lie probability.

(d) Honest probability.

Figure 4: Performance comparison on classic static BP problems. Averaged over $20$ seeds. In the $3$ BP problems, the probability of lying refers to describing a weak student as strong, an innocent defendant as guilty, or an unpatrolled segment as patrolled. Conversely, the probability of honesty refers to accurately describing a strong student, a guilty defendant, or a patrolled segment.

Next, we removed signal polarization to make the sender’s signals in each problem more reflective of real-world recommendation letters, courtrooms, and police deployment announcements, resulting in the S2 setting.
Since existing BCE and MARL methods cannot solve this, we only compared VBP with the VBP variant from the S1 setting.
The results are shown in Figure [5](https://arxiv.org/html/2502.01587v1#S6.F5 "Figure 5 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

(a) Sender’s rewards.

(b) Receiver’s rewards.

(c) Lie probability.

(d) Honest probability.

Figure 5: Performance comparison on general static BP problems. Averaged over $20$ seeds. The physical meaning of the probabilities of lying and honesty is consistent with Figure [4](https://arxiv.org/html/2502.01587v1#S6.F4 "Figure 4 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

Figure [5](https://arxiv.org/html/2502.01587v1#S6.F5 "Figure 5 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") shows that VBP’s performance in S2 is roughly on par with S1, with a slight performance drop.
In both settings, VBP achieves optimal strategy performance in terms of the probability of honesty.
We speculate that this could be due to the alignment of the LLM used, which allows it to more easily converge to honest strategies, such as truthfully reporting the situation of a strong student, a guilty defendant, or a patrolled segment.

To quantify the proximity of policies of the sender and the receiver to the BCE, we employ exploitability as a measure.
Exploitability ([Lanctot et al., 2017](https://arxiv.org/html/2502.01587v1#bib.bib70)) measures the distance of a joint meta-strategy of sender and receiver from the BCE.
It shows how much each LLM gains by deviating to their best responses.

Figure 6: Left: The variation in exploitability during the iterative solving process of VBP in the S1 setting, reflecting changes in proximity to approximate Bayesian correlated equilibrium. Left Center: The variation in honesty probability during the iterative solving process of VBP in the S1 setting. Right Center and Right: The variation in lying and honesty probability during the iterative solving process of VBP in the S3 setting. Averaged over $20$ seeds.

As depicted in Figure [6](https://arxiv.org/html/2502.01587v1#S6.F6 "Figure 6 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion"), exploitability gradually decreased to approximately $0.1$ after $10$ iterations of training.
This descent indicates the diminishing gap between the utility generated by the joint strategies of the sender and the receiver and the utility generated by the BCE strategies, signifying VBP’s acquisition of the equilibrium.
As mentioned in Section [5.2](https://arxiv.org/html/2502.01587v1#S5.SS2 "5.2 Three Settings in VBP ‣ 5 VBP Solver ‣ Verbalized Bayesian Persuasion"), we align as closely as possible with the classic static BP problem by polarizing the signals.

To further investigate the phenomenon of honesty oscillations-where honesty rises, falls, and then rises again-we conducted additional experiments using an unaligned LLaMA model2 as the base language model.
This was motivated by that the observed pattern in Section [6.2](https://arxiv.org/html/2502.01587v1#S6.SS2 "6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") might be better explained by strategic cycles between the sender and the receiver, rather than by the alignment properties of the LLM, as we originally hypothesized.

Figure 7: Left: Performance comparision in the S1 setting. In the $3$ BP problems, the probability of honesty refers to accurately describing a strong student, a guilty defendant, or a patrolled segment. Right: The variation in honesty probability during the iterative solving process of VBP in the S1 setting. Averaged over $20$ seeds.

The experimental results shown in Figure [7](https://arxiv.org/html/2502.01587v1#S6.F7 "Figure 7 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") reveal two key findings.
First, with the unaligned LLaMA model, the oscillatory pattern of honesty disappears, and the behavior stabilizes at a consistent level of honesty.
This supports our initial hypothesis that the oscillations are driven by the alignment properties of the LLM, which likely introduce normative biases (e.g., promoting honesty or fairness) that influence the dynamics of strategic interactions.
Second, we observe that the honesty probability with the unaligned LLM no longer always achieves the optimal level (probability of 1), as seen in aligned models.
This suggests that unaligned models are less reliable in consistently promoting desirable outcomes, such as fully honest behavior, in strategic settings.

These findings highlight the dual impact of alignment: while it introduces oscillatory dynamics due to normative pressures, it also helps achieve higher levels of optimal honesty in strategic interactions.
This emphasizes the importance of alignment in applications requiring robust ethical or normative behaviors, while also suggesting a need for further exploration of its impact on the stability of agent interactions in game-theoretic settings.

#### 6.3 VBP in Multistage Games (S3)

We also tested the effectiveness of VBP in a multistage scenario.
Notably, the multistage BP differs from most of the literature. In existing works, the same sender was interacting with a new, short-sighted receiver in each round.
In this work, the receiver remains the same and can perceive the interaction history, aligning more closely with the Markov signaling game ([Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75)).
Since a closed-form solution for equilibrium cannot be computed, we record the average performance at each stage in Figure [8](https://arxiv.org/html/2502.01587v1#S6.F8 "Figure 8 ‣ 6.3 VBP in Multistage Games (S3) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

(a) Sender’s rewards.

(b) Receiver’s rewards.

(c) Lie probability.

(d) Honest probability.

Figure 8: Performance comparision on the S3 setting. Averaged over $20$ seeds and $5$ timesteps. The physical meaning of the probabilities of lying and honesty is consistent with Figure [4](https://arxiv.org/html/2502.01587v1#S6.F4 "Figure 4 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

It is observed from the figure that VBP’s performance shows a noticeable decline compared to S2, while it still manages to learn both appropriate deception and honesty.
We also visualize the changes in the sender’s deception and honesty probabilities during training, as shown in Figure [6](https://arxiv.org/html/2502.01587v1#S6.F6 "Figure 6 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").
Since the receiver can perceive the history, the sender’s deceptive behavior goes through several oscillations, reflecting a kind of bargaining dynamic ([Nash et al., 1950](https://arxiv.org/html/2502.01587v1#bib.bib93); [Nash, 1953](https://arxiv.org/html/2502.01587v1#bib.bib92); [Maschler et al., 2013](https://arxiv.org/html/2502.01587v1#bib.bib86)):
The sender is initially leaning towards honesty, then discovering that deception maximizes gains, and later realizing that excessive deception triggers retaliation from the receiver, eventually converging to a relatively low deception probability.
Likewise, with the receiver having access to historical interactions, the sender demonstrated an upward trend in honest behavior compared to the S2 setting, with truthfulness levels progressively increasing throughout.

###### Remark 2

As discussed above, the S3 iterated setting reveals some implications for the bargaining interactions between the sender and receiver.
In classical persuasion theory, the sender commits to a signaling strategy upfront, and this commitment is justified by the need to maintain trust and reputation in long-term interactions.
Under these assumptions, the receiver typically follows the sender’s signals, as deviating would harm the receiver’s own expected utility.
However, our results in the S3 setting suggest a more complex dynamic.
Specifically, the receiver can choose to ignore the sender’s signals, effectively invalidating the sender’s commitment.
This observation highlights that the sender’s commitment is not unilateral-it must be accepted by the receiver to hold.
If the receiver disagrees with the sender’s proposed strategy, they can force both parties into a mutually worse outcome by disregarding the signals altogether.
This leads to an important hypothesis: in the VBP framework, Bayesian persuasion may function more like a bargaining game, where both parties must agree on the signaling strategy to avoid suboptimal outcomes.
This perspective challenges the traditional unilateral commitment model and suggests a more interactive dynamic in iterated settings.
While we acknowledge the importance of this insight, we intentionally keep our analysis of S3 limited in this paper to maintain focus on the primary contributions.
Exploring the bargaining dynamics observed in S3 presents an exciting avenue for future research.

#### 6.4 Prompt (Strategy) Variation

This section presents the final converged meta-strategy in the S2 setting, as well as the relative changes in the selection probabilities of each strategy (i.e., the prompts that influence writing style) throughout the training process, as shown in Figure [9](https://arxiv.org/html/2502.01587v1#S6.F9 "Figure 9 ‣ 6.4 Prompt (Strategy) Variation ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

![Refer to caption](https://arxiv.org/html/2502.01587v1/figs/prompts/prompt_variation_rel_s2_sender.png)

![Refer to caption](https://arxiv.org/html/2502.01587v1/figs/prompts/prompt_variation_rel_s2_receiver.png)

![Refer to caption](https://arxiv.org/html/2502.01587v1/figs/prompts/prompt_variation_cor_s2_sender.png)

![Refer to caption](https://arxiv.org/html/2502.01587v1/figs/prompts/prompt_variation_cor_s2_receiver.png)

![Refer to caption](https://arxiv.org/html/2502.01587v1/figs/prompts/prompt_variation_lae_s2_sender.png)

![Refer to caption](https://arxiv.org/html/2502.01587v1/figs/prompts/prompt_variation_lae_s2_receiver.png)

Figure 9: The variation in the prompts during the iterative solving process of VBP in the S2 setting.

Figure [9](https://arxiv.org/html/2502.01587v1#S6.F9 "Figure 9 ‣ 6.4 Prompt (Strategy) Variation ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") presents the top $10$ strategies with the highest selection probabilities in the final strategy pool after Prompt-PSRO convergence.
These probabilities represent the average likelihood of selecting each strategy from the pool, revealing the adaptation process of sender and receiver strategies over iterations.
The optimization process follows a hierarchical approach:
first, OPRO optimizes the category of each prompt (e.g., ”Tone”), then the specific content within that category.
The table columns in Figure [9](https://arxiv.org/html/2502.01587v1#S6.F9 "Figure 9 ‣ 6.4 Prompt (Strategy) Variation ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") reflect this structure, with the first two columns showing optimized categories and content, while the third and fourth columns display their probabilities.
The fifth column tracks how these probabilities evolve across iterations, highlighting the refinement of strategies during the optimization process.

To reduce computational complexity, we prune the strategy pool to the top $10$ prompts based on selection probabilities.
We conduct additional experiments to assess this pruning’s effects, as shown in Figure [10](https://arxiv.org/html/2502.01587v1#S6.F10 "Figure 10 ‣ 6.4 Prompt (Strategy) Variation ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

Figure 10: The probability of the sender lying under different upper limits on the number of prompts. The figure shows that when the number of prompts is heavily pruned, significant performance degradation occurs. However, once the number of retained prompts exceeds a certain threshold, such as 10-15, the impact on performance becomes negligible.

Additionally, the probabilities in Figure [9](https://arxiv.org/html/2502.01587v1#S6.F9 "Figure 9 ‣ 6.4 Prompt (Strategy) Variation ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") are computed as the average probability of selecting each prompt from the strategy pool across iterations, and the content (e.g., ”Positive”) under the category (e.g., ”Tone”) is dynamically optimized rather than fixed.

#### 6.5 Ablation Studies

##### 6.5.1 Key Components

This section analyzes the impact of key design elements within the VBP framework on performance, primarily including the verbalization of the commitment assumption, the obedience constraint, and the introduction of information obfuscation techniques to facilitate VBP convergence.
The experimental results in the S2 setting are shown in Figure [11](https://arxiv.org/html/2502.01587v1#S6.F11 "Figure 11 ‣ 6.5.1 Key Components ‣ 6.5 Ablation Studies ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

(a) Sender’s rewards.

(b) Receiver’s rewards.

(c) Lie probability.

(d) Honest probability.

Figure 11: Ablation studies on general static BP problems. Averaged over $20$ seeds. CA, OC, and IO represent the commitment assumption, obedience constraint, and information obfuscation, respectively. The physical meaning of the probabilities of lying and honesty is consistent with Figure [4](https://arxiv.org/html/2502.01587v1#S6.F4 "Figure 4 ‣ 6.2 VBP in Static Games (S1 & S2) ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

As the figure illustrates, these designs have varying degrees of influence on the key aspect of the BP problem, namely the probability of lying, while having minimal effect on the final converged probability of honesty.
Specifically, the absence of the obedience constraint has a significant impact on the convergence results, which is consistent with previous observations ([Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75)).
Secondly, the commitment assumption has little effect on the probability of lying.
One possible explanation is that, in a repeated game where a long-term sender interacts with a sequence of short-term receivers, commitment naturally emerges in equilibria.
This occurs because the sender needs to establish a reputation for credibility, which is crucial for maximizing its long-term payoff expectations ([Rayo & Segal, 2010](https://arxiv.org/html/2502.01587v1#bib.bib99); [Lin et al., 2023](https://arxiv.org/html/2502.01587v1#bib.bib75)).
Lastly, the introduction of information obfuscation also has little impact on performance, indicating that the VBP framework can spontaneously learn to withhold or deceive regarding information.

##### 6.5.2 Polarized Signal Visualization

To verify the effectiveness of signal polarization, we extract the final layer of the sender’s output encoding and apply t-SNE for dimensionality reduction.
At the same time, we use GPT-4o to classify the output signals as an estimate of the ground truth.
The final visualization is shown in Figure [12](https://arxiv.org/html/2502.01587v1#S6.F12 "Figure 12 ‣ 6.5.2 Polarized Signal Visualization ‣ 6.5 Ablation Studies ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").

Figure 12: Visualization of signal polarization. The scatter points in the figure represent the t-SNE dimensionality reduction results of signals output by the sender, under $50$ random seeds.

From the figure, it can be observed that after signal polarization, the sender’s output signals exhibit clearer tendencies.
It is worth noting that in the LAE problem, the signal must explicitly indicate whether a segment is patrolled by the police, so signal polarization is not required, and thus it is not displayed in the figure.

##### 6.5.3 Predefined Signaling Scheme

Figure 13: Receiver’s rewards when sender’s signaling scheme is predefined. “No signal” indicates that the message generated by the sender contains no information about the true state, while “honest” means the sender fully discloses all information about the true state.

This section tests whether the receiver in the VBP framework could converge to BCE when the sender’s strategy is fixed in the S2 setting.
The results are shown in Figure [13](https://arxiv.org/html/2502.01587v1#S6.F13 "Figure 13 ‣ 6.5.3 Predefined Signaling Scheme ‣ 6.5 Ablation Studies ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion").
As can be seen from the figure, VBP is able to learn the optimal strategy across all three BP problems.

### 7 Limitations and Future Work

While our approach offers promising results, it faces several limitations, both inherent to LLMs and game theory individually, as well as their integration.
First, although LLMs have been widely employed to simulate human behavior, concerns remain regarding the fidelity of these simulations when applied to real-world interactions ([Agnew et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib1)).
This raises questions about the generalizability of conclusions drawn from such models in practical scenarios.
Second, the computational cost of our method is significant.
Although our experiments rely solely on LLM inference without the need for additional training or fine-tuning, the process of traversing large game trees and solving for equilibria requires frequent LLM calls, which is resource-intensive.
This presents a scalability challenge, particularly when dealing with more complex strategic environments.
A further limitation lies in the control of LLM output.
Our method relies on writing style to influence LLM behavior, which can be restrictive.
In future work, we intend to explore more flexible prompt optimization strategies, or alternatively, pursue more efficient approaches for fine-tuning LLM parameters to better control output signals.

Additionally, we aim to address the non-uniqueness and inefficiency of equilibria in mixed-motive games, an important aspect not explored in this paper.
While the VBP framework effectively solves Bayesian persuasion problems, incorporating the Price of Anarchy (PoA) as an optimization objective could help quantify and minimize efficiency loss from suboptimal equilibria.
This enhancement would guide VBP toward selecting more efficient equilibria, improving its solution quality and applicability in scenarios with multiple equilibria.

In terms of the BP problem, our study primarily examines a simplified setting with one sender and one receiver.
While this is a fundamental setup, it does not capture the complexity of real-world BP scenarios, which often involve multiple participants ([Castiglioni et al., 2021](https://arxiv.org/html/2502.01587v1#bib.bib25); [Koessler et al., 2022b](https://arxiv.org/html/2502.01587v1#bib.bib66); [Koessler et al., 2022a](https://arxiv.org/html/2502.01587v1#bib.bib65); [Hossain et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib52)).
Extending our framework to accommodate multiple senders and receivers could provide more practical insights and applications.
Additionally, although multistage BP is considered in our experiments, a deeper investigation into the dynamics of these stages is needed.
Specifically, we plan to further explore the receiver’s bargaining behavior, drawing connections to established bargaining game theories ([Nash et al., 1950](https://arxiv.org/html/2502.01587v1#bib.bib93); [Nash, 1953](https://arxiv.org/html/2502.01587v1#bib.bib92); [Maschler et al., 2013](https://arxiv.org/html/2502.01587v1#bib.bib86)).
This could ultimately strengthen the receiver’s resistance to persuasion, offering a more robust counter-strategy in BP scenarios.

### 8 Closing Remarks

While BP has been underinvestigated in the literature, this work introduces the first BP solver for realistic, natural language settings.
We provide a general interface for solving BP problems using the paradigm that combines LLM with game-theoretic solvers.
Based on this interface, we propose the VBP framework that utilizes a prompt-space response oracle and several technical components to improve the solver’s performance, efficiency, and stability.
Simulation results demonstrate that VBP can reproduce known equilibria on classical BP problems, while efficiently discovering persuasion strategies in more complex BP problems involving human natural language interactions and multistage BP scenarios.
VBP potentially opens up a new line of studies of persuasion in real-world scenarios, which was known but not solved due to the lack of natural language interfaces.
It is also helpful in understanding the interaction of multiple strategic agents in both economic and societal applications.

### References

- Agnew et al. (2024)

  Agnew, W., Bergman, A. S., Chien, J., Díaz, M., El-Sayed, S., Pittman, J., Mohamed, S., and McKee, K. R.
  The illusion of artificial inclusion.
  In *CHI*, 2024.
- Aitchison et al. (2021)

  Aitchison, M., Benke, L., and Sweetser, P.
  Learning to deceive in multi-agent hidden role games.
  In *International Workshop on Deceptive AI*, 2021.
- Akata et al. (2023)

  Akata, E., Schulz, L., Coda-Forno, J., Oh, S. J., Bethge, M., and Schulz, E.
  Playing repeated games with large language models.
  *arXiv preprint arXiv:2305.16867*, 2023.
- Albrecht & Stone (2018)

  Albrecht, S. V. and Stone, P.
  Autonomous agents modelling other agents: A comprehensive survey and open problems.
  *Artificial Intelligence*, 258:66–95, 2018.
- Antioch (2013)

  Antioch, G.
  Persuasion is now 30 per cent of us gdp: Revisiting mccloskey and klamer after a quarter of a century.
  *Economic Round-up*, pp. 1–10, 2013.
- Asgharnia et al. (2020)

  Asgharnia, A., Schwartz, H. M., and Atia, M.
  Deception in the game of guarding multiple territories: A machine learning approach.
  In *SMC*, 2020.
- Assos et al. (2023)

  Assos, A., Attias, I., Dagan, Y., Daskalakis, C., and Fishelson, M. K.
  Online learning and solving infinite games with an erm oracle.
  In *COLT*, 2023.
- Bacchiocchi et al. (2024)

  Bacchiocchi, F., Stradi, F. E., Castiglioni, M., Gatti, N., and Marchesi, A.
  Markov persuasion processes: How to persuade multiple agents from scratch.
  In *ICML Workshop: Aligning Reinforcement Learning Experimentalists and Theorists*, 2024.
- Bai et al. (2024)

  Bai, F., Wang, M., Zhang, Z., Chen, B., Xu, Y., Wen, Y., and Yang, Y.
  Efficient model-agnostic alignment via bayesian persuasion.
  *arXiv preprint arXiv:2405.18718*, 2024.
- Bai et al. (2023)

  Bai, H., Voelkel, J. G., Eichstaedt, j. C., and Willer, R.
  Artificial intelligence can persuade humans on political issues, Feb 2023.
  URL [osf.io/stakv](https://osf.io/stakv).
- Bar-Gill et al. (2023)

  Bar-Gill, O., Sunstein, C. R., and Talgam-Cohen, I.
  Algorithmic harm in consumer markets.
  *Journal of Legal Analysis*, 15(1):1–47, 2023.
- Bennett (1980)

  Bennett, P. G.
  Hypergames: developing a model of conflict.
  *Futures*, 12(6):489–507, 1980.
- Bergemann & Morris (2013)

  Bergemann, D. and Morris, S.
  Robust predictions in games with incomplete information.
  *Econometrica*, 81(4):1251–1308, 2013.
- Bergemann & Morris (2016)

  Bergemann, D. and Morris, S.
  Bayes correlated equilibrium and the comparison of information structures in games.
  *Theoretical Economics*, 11(2):487–522, 2016.
- Bergemann & Morris (2019)

  Bergemann, D. and Morris, S.
  Information design: A unified perspective.
  *Journal of Economic Literature*, 57(1):44–95, 2019.
- Bernasconi et al. (2022)

  Bernasconi, M., Castiglioni, M., Marchesi, A., Gatti, N., and Trovò, F.
  Sequential information design: Learning to persuade in the dark.
  In *NeurIPS*, 2022.
- Bighashdel et al. (2024)

  Bighashdel, A., Wang, Y., McAleer, S., Savani, R., and Oliehoek, F. A.
  Policy space response oracles: A survey.
  *arXiv preprint arXiv:2403.02227*, 2024.
- Boleslavsky & Cotton (2015)

  Boleslavsky, R. and Cotton, C.
  Grading standards and education quality.
  *American Economic Journal: Microeconomics*, 7(2):248–279, 2015.
- Bond & Robinson (1988)

  Bond, C. F. and Robinson, M.
  The evolution of deception.
  *Journal of nonverbal behavior*, 12:295–307, 1988.
- Bontrager et al. (2019)

  Bontrager, P., Khalifa, A., Anderson, D., Stephenson, M., Salge, C., and Togelius, J.
  ” superstition” in the network: Deep reinforcement learning plays deceptive games.
  In *AIIDE*, 2019.
- Breum et al. (2024)

  Breum, S. M., Egdal, D. V., Mortensen, V. G., Møller, A. G., and Aiello, L. M.
  The persuasive power of large language models.
  In *AAAI*, 2024.
- Burtell & Woodside (2023)

  Burtell, M. and Woodside, T.
  Artificial influence: An analysis of ai-driven persuasion.
  *arXiv preprint arXiv:2303.08721*, 2023.
- Carrasco-Farre (2024)

  Carrasco-Farre, C.
  Large language models are as persuasive as humans, but why? about the cognitive effort and moral-emotional language of llm arguments.
  *arXiv preprint arXiv:2404.09329*, 2024.
- Carroll & Grosu (2011)

  Carroll, T. E. and Grosu, D.
  A game theoretic investigation of deception in network security.
  *Security and Communication Networks*, 4(10):1162–1172, 2011.
- Castiglioni et al. (2021)

  Castiglioni, M., Marchesi, A., Celli, A., and Gatti, N.
  Multi-receiver online bayesian persuasion.
  In *ICML*. PMLR, 2021.
- Chelarescu (2021)

  Chelarescu, P.
  Deception in social learning: A multi-agent reinforcement learning perspective.
  *arXiv preprint arXiv:2106.05402*, 2021.
- Chen et al. (2023)

  Chen, J., Yuan, S., Ye, R., Majumder, B. P., and Richardson, K.
  Put your money where your mouth is: Evaluating strategic planning and execution of llm agents in an auction arena.
  *arXiv preprint arXiv:2310.05746*, 2023.
- Crawford & Sobel (1982)

  Crawford, V. P. and Sobel, J.
  Strategic information transmission.
  *Econometrica: Journal of the Econometric Society*, pp. 1431–1451, 1982.
- Czarnecki et al. (2020)

  Czarnecki, W. M., Gidel, G., Tracey, B., Tuyls, K., Omidshafiei, S., Balduzzi, D., and Jaderberg, M.
  Real world games look like spinning tops.
  In *NeurIPS*, 2020.
- Dafoe et al. (2020)

  Dafoe, A., Hughes, E., Bachrach, Y., Collins, T., McKee, K. R., Leibo, J. Z., Larson, K., and Graepel, T.
  Open problems in cooperative ai.
  *arXiv preprint arXiv:2012.08630*, 2020.
- Das et al. (2017)

  Das, S., Kamenica, E., and Mirka, R.
  Reducing congestion through information design.
  In *2017 55th annual allerton conference on communication, control, and computing (allerton)*, pp. 1279–1284. IEEE, 2017.
- Duan et al. (2024)

  Duan, J., Zhang, R., Diffenderfer, J., Kailkhura, B., Sun, L., Stengel-Eskin, E., Bansal, M., Chen, T., and Xu, K.
  Gtbench: Uncovering the strategic reasoning limitations of llms via game-theoretic evaluations.
  *arXiv preprint arXiv:2402.12348*, 2024.
- Dughmi (2017)

  Dughmi, S.
  Algorithmic information structure design: a survey.
  *ACM SIGecom Exchanges*, 15(2):2–24, 2017.
- Durmus et al. (2024)

  Durmus, E., Lovitt, L., Tamkin, A., Ritchie, S., Clark, J., and Ganguli, D.
  Measuring the persuasiveness of language models, 2024.
  URL <https://www.anthropic.com/news/measuring-model-persuasiveness>.
- Dworczak & Martini (2019)

  Dworczak, P. and Martini, G.
  The simple economics of optimal persuasion.
  *Journal of Political Economy*, 127(5):1993–2048, 2019.
- Ettinger & Jehiel (2010)

  Ettinger, D. and Jehiel, P.
  A theory of deception.
  *American Economic Journal: Microeconomics*, 2(1):1–20, 2010.
- FAIR et al. (2022)

  FAIR, M. F. A. R. D. T., Bakhtin, A., Brown, N., Dinan, E., Farina, G., Flaherty, C., Fried, D., Goff, A., Gray, J., Hu, H., et al.
  Human-level play in the game of diplomacy by combining language models with strategic reasoning.
  *Science*, 378(6624):1067–1074, 2022.
- Fan et al. (2024)

  Fan, C., Chen, J., Jin, Y., and He, H.
  Can large language models serve as rational players in game theory? a systematic analysis.
  In *AAAI*, 2024.
- Floreano et al. (2007)

  Floreano, D., Mitri, S., Magnenat, S., and Keller, L.
  Evolutionary conditions for the emergence of communication in robots.
  *Current biology*, 17(6):514–519, 2007.
- Foerster et al. (2016)

  Foerster, J., Assael, I. A., De Freitas, N., and Whiteson, S.
  Learning to communicate with deep multi-agent reinforcement learning.
  In *NeurIPS*, 2016.
- Gan et al. (2022)

  Gan, J., Majumdar, R., Radanovic, G., and Singla, A.
  Bayesian persuasion in sequential decision-making.
  In *AAAI*, 2022.
- Gandhi et al. (2023)

  Gandhi, K., Sadigh, D., and Goodman, N. D.
  Strategic reasoning with language models.
  *arXiv preprint arXiv:2305.19165*, 2023.
- Gemp et al. (2024)

  Gemp, I., Bachrach, Y., Lanctot, M., Patel, R., Dasagi, V., Marris, L., Piliouras, G., and Tuyls, K.
  States as strings as strategies: Steering language models with game-theoretic solvers.
  *arXiv preprint arXiv:2402.01704*, 2024.
- Gharesifard & Cortés (2013)

  Gharesifard, B. and Cortés, J.
  Stealthy deception in hypergames under informational asymmetry.
  *IEEE Transactions on Systems, Man, and Cybernetics: Systems*, 44(6):785–795, 2013.
- Ghiya & Sycara (2020)

  Ghiya, S. and Sycara, K.
  Learning complex multi-agent policies in presence of an adversary.
  *arXiv preprint arXiv:2008.07698*, 2020.
- Guo et al. (2025)

  Guo, D., Yang, D., Zhang, H., Song, J., Zhang, R., Xu, R., Zhu, Q., Ma, S., Wang, P., Bi, X., et al.
  Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning.
  *arXiv preprint arXiv:2501.12948*, 2025.
- Guo et al. (2024)

  Guo, H., Liu, Z., Zhang, Y., and Wang, Z.
  Can large language models play games? a case study of a self-play approach.
  *arXiv preprint arXiv:2403.05632*, 2024.
- Gupta et al. (2022)

  Gupta, A., Pacchiano, A., Zhai, Y., Kakade, S., and Levine, S.
  Unpacking reward shaping: Understanding the benefits of reward engineering on sample complexity.
  In *NeurIPS*, 2022.
- Han et al. (2024)

  Han, Z., Gao, C., Liu, J., Zhang, S. Q., et al.
  Parameter-efficient fine-tuning for large models: A comprehensive survey.
  *arXiv preprint arXiv:2403.14608*, 2024.
- Ho et al. (1978)

  Ho, Y.-C., Kastner, M., and Wong, E.
  Teams, signaling, and information theory.
  *IEEE Transactions on Automatic Control*, 23(2):305–312, 1978.
- Hohenstein et al. (2023)

  Hohenstein, J., Kizilcec, R. F., DiFranzo, D., Aghajari, Z., Mieczkowski, H., Levy, K., Naaman, M., Hancock, J., and Jung, M. F.
  Artificial intelligence in communication impacts language and social relationships.
  *Scientific Reports*, 13(1):5487, 2023.
- Hossain et al. (2024)

  Hossain, S., Wang, T., Lin, T., Chen, Y., Parkes, D. C., and Xu, H.
  Multi-sender persuasion–a computational perspective.
  In *ICML*, 2024.
- Hua et al. (2024)

  Hua, W., Liu, O., Li, L., Amayuelas, A., Chen, J., Jiang, L., Jin, M., Fan, L., Sun, F., Wang, W., et al.
  Game-theoretic llm: Agent workflow for negotiation games.
  *arXiv preprint arXiv:2411.05990*, 2024.
- Hua et al. (2023)

  Hua, Y., Gao, S., Li, W., Jin, B., Wang, X., and Zha, H.
  Learning optimal” pigovian tax” in sequential social dilemmas.
  In *AAMAS*, 2023.
- Huang et al. (2023)

  Huang, J., Gu, S. S., Hou, L., Wu, Y., Wang, X., Yu, H., and Han, J.
  Large language models can self-improve.
  In *EMNLP*, 2023.
- Huang et al. (2024)

  Huang, J.-t., Li, E. J., Lam, M. H., Liang, T., Wang, W., Yuan, Y., Jiao, W., Wang, X., Tu, Z., and Lyu, M. R.
  How far are we on the decision-making of llms? evaluating llms’ gaming ability in multi-agent environments.
  *arXiv preprint arXiv:2403.11807*, 2024.
- Hughes et al. (2018)

  Hughes, E., Leibo, J. Z., Phillips, M., Tuyls, K., Dueñez-Guzman, E., García Castañeda, A., Dunning, I., Zhu, T., McKee, K., Koster, R., et al.
  Inequity aversion improves cooperation in intertemporal social dilemmas.
  In *NeurIPS*, 2018.
- Jacob et al. (2024)

  Jacob, A. P., Shen, Y., Farina, G., and Andreas, J.
  The consensus game: Language model generation via equilibrium search.
  In *ICLR*, 2024.
  URL <https://openreview.net/forum?id=n9xeGcI4Yg>.
- Jaques et al. (2019)

  Jaques, N., Lazaridou, A., Hughes, E., Gulcehre, C., Ortega, P., Strouse, D., Leibo, J. Z., and De Freitas, N.
  Social influence as intrinsic motivation for multi-agent deep reinforcement learning.
  In *ICML*, 2019.
- Jarrett et al. (2023)

  Jarrett, D., Pislar, M., Bakker, M. A., Tessler, M. H., Koster, R., Balaguer, J., Elie, R., Summerfield, C., and Tacchetti, A.
  Language agents as digital representatives in collective decision-making.
  In *NeurIPS Foundation Models for Decision Making Workshop*, 2023.
- Kamenica (2019)

  Kamenica, E.
  Bayesian persuasion and information design.
  *Annual Review of Economics*, 11(1):249–272, 2019.
- Kamenica & Gentzkow (2011)

  Kamenica, E. and Gentzkow, M.
  Bayesian persuasion.
  *American Economic Review*, 101(6):2590–2615, 2011.
- Karinshak et al. (2023)

  Karinshak, E., Liu, S. X., Park, J. S., and Hancock, J. T.
  Working with ai to persuade: Examining a large language model’s ability to generate pro-vaccination messages.
  *Proceedings of the ACM on Human-Computer Interaction*, 7(CSCW1):1–29, 2023.
- Koessler & Skreta (2023)

  Koessler, F. and Skreta, V.
  Informed information design.
  *Journal of Political Economy*, 131(11):3186–3232, 2023.
- Koessler et al. (2022a)

  Koessler, F., Laclau, M., Renault, J., and Tomala, T.
  Long information design.
  *Theoretical Economics*, 17(2):883–927, 2022a.
- Koessler et al. (2022b)

  Koessler, F., Laclau, M., and Tomala, T.
  Interactive information design.
  *Mathematics of Operations Research*, 47(1):153–175, 2022b.
- Kojima et al. (2022)

  Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., and Iwasawa, Y.
  Large language models are zero-shot reasoners.
  In *NeurIPS*, 2022.
- Kolotilin (2018)

  Kolotilin, A.
  Optimal information disclosure: A linear programming approach.
  *Theoretical Economics*, 13(2):607–635, 2018.
- Kovach et al. (2015)

  Kovach, N. S., Gibson, A. S., and Lamont, G. B.
  Hypergame theory: a model for conflict, misperception, and deception.
  *Game Theory*, 2015(1):570639, 2015.
- Lanctot et al. (2017)

  Lanctot, M., Zambaldi, V., Gruslys, A., Lazaridou, A., Tuyls, K., Pérolat, J., Silver, D., and Graepel, T.
  A unified game-theoretic approach to multiagent reinforcement learning.
  In *NeurIPS*, 2017.
- Lazear (2006)

  Lazear, E. P.
  Speeding, terrorism, and teaching to the test.
  *The Quarterly Journal of Economics*, 121(3):1029–1061, 2006.
- Leibo et al. (2017)

  Leibo, J. Z., Zambaldi, V., Lanctot, M., Marecki, J., and Graepel, T.
  Multi-agent reinforcement learning in sequential social dilemmas.
  In *AAMAS*, 2017.
- Leibo et al. (2021)

  Leibo, J. Z., Dueñez-Guzman, E. A., Vezhnevets, A., Agapiou, J. P., Sunehag, P., Koster, R., Matyas, J., Beattie, C., Mordatch, I., and Graepel, T.
  Scalable evaluation of multi-agent reinforcement learning with melting pot.
  In *ICML*. PMLR, 2021.
- Li et al. (2020)

  Li, C., Wei, X., Zhao, Y., and Geng, X.
  An effective maximum entropy exploration approach for deceptive game in reinforcement learning.
  *Neurocomputing*, 403:98–108, 2020.
- Lin et al. (2023)

  Lin, Y., Li, W., Zha, H., and Wang, B.
  Information design in multi-agent reinforcement learning.
  In *NeurIPS*, 2023.
- Liu et al. (2023)

  Liu, B., Jiang, Y., Zhang, X., Liu, Q., Zhang, S., Biswas, J., and Stone, P.
  Llm+ p: Empowering large language models with optimal planning proficiency.
  *arXiv preprint arXiv:2304.11477*, 2023.
- Lo et al. (2023)

  Lo, Y. L., de Witt, C. S., Sokota, S., Foerster, J. N., and Whiteson, S.
  Cheap talk discovery and utilization in multi-agent reinforcement learning.
  In *ICLR*, 2023.
  URL <https://openreview.net/forum?id=cddbeL1HWaD>.
- Lorè & Heydari (2023)

  Lorè, N. and Heydari, B.
  Strategic behavior of large language models: Game structure vs. contextual framing.
  *arXiv preprint arXiv:2309.05898*, 2023.
- Lorè & Heydari (2024)

  Lorè, N. and Heydari, B.
  Strategic behavior of large language models and the role of game structure versus contextual framing.
  *Scientific Reports*, 14(1):18490, 2024.
- Lupu & Precup (2020)

  Lupu, A. and Precup, D.
  Gifting in multi-agent reinforcement learning.
  In *AAMAS*, 2020.
- Ma et al. (2023)

  Ma, C., Yang, Z., Gao, M., Ci, H., Gao, J., Pan, X., and Yang, Y.
  Red teaming game: A game-theoretic framework for red teaming language models.
  *arXiv preprint arXiv:2310.00322*, 2023.
- MacNally et al. (2018)

  MacNally, A. M., Lipovetzky, N., Ramirez, M., and Pearce, A. R.
  Action selection for transparent planning.
  In *AAMAS*, 2018.
- Májovskỳ et al. (2023)

  Májovskỳ, M., Černỳ, M., Kasal, M., Komarc, M., and Netuka, D.
  Artificial intelligence can generate fraudulent but authentic-looking scientific medical articles: Pandora’s box has been opened.
  *Journal of medical Internet research*, 25:e46924, 2023.
- Makris & Renou (2023)

  Makris, M. and Renou, L.
  Information design in multistage games.
  *Theoretical Economics*, 18(4):1475–1509, 2023.
- Mao et al. (2023)

  Mao, S., Cai, Y., Xia, Y., Wu, W., Wang, X., Wang, F., Ge, T., and Wei, F.
  Alympics: Language agents meet game theory.
  *arXiv preprint arXiv:2311.03220*, 2023.
- Maschler et al. (2013)

  Maschler, M., Solan, E., and Zamir, S.
  *Bargaining games*, pp. 622–658.
  Cambridge University Press, 2013.
- Masters & Sardina (2017)

  Masters, P. and Sardina, S.
  Deceptive path-planning.
  In *IJCAI*, pp. 4368–4375, 2017.
- Matz et al. (2024)

  Matz, S., Teeny, J., Vaid, S. S., Peters, H., Harari, G., and Cerf, M.
  The potential of generative ai for personalized persuasion at scale.
  *Scientific Reports*, 14(1):4692, 2024.
- McCloskey & Klamer (1995)

  McCloskey, D. and Klamer, A.
  One quarter of gdp is persuasion.
  *The American Economic Review*, 85(2):191–195, 1995.
- McKee et al. (2020)

  McKee, K. R., Gemp, I., McWilliams, B., Duèñez-Guzmán, E. A., Hughes, E., and Leibo, J. Z.
  Social diversity and social preferences in mixed-motive reinforcement learning.
  In *AAMAS*, 2020.
- Myerson (1979)

  Myerson, R. B.
  Incentive compatibility and the bargaining problem.
  *Econometrica: journal of the Econometric Society*, pp. 61–73, 1979.
- Nash (1953)

  Nash, J.
  Two-person cooperative games.
  *Econometrica: Journal of the Econometric Society*, pp. 128–140, 1953.
- Nash et al. (1950)

  Nash, J. F. et al.
  The bargaining problem.
  *Econometrica*, 18(2):155–162, 1950.
- Ndousse et al. (2021)

  Ndousse, K. K., Eck, D., Levine, S., and Jaques, N.
  Emergent social learning via multi-agent reinforcement learning.
  In *ICML*, 2021.
- Ng et al. (1999)

  Ng, A. Y., Harada, D., and Russell, S.
  Policy invariance under reward transformations: Theory and application to reward shaping.
  In *ICML*, 1999.
- OpenAI (2024)

  OpenAI.
  Learning to reason with llms.
  <https://openai.com/index/learning-to-reason-with-llms/>, 2024.
  Accessed: 2024-10-02.
- Rabinowitz et al. (2018)

  Rabinowitz, N., Perbet, F., Song, F., Zhang, C., Eslami, S. A., and Botvinick, M.
  Machine theory of mind.
  In *ICML*. PMLR, 2018.
- Ramani et al. (2024)

  Ramani, G. P., Karande, S., Bhatia, Y., et al.
  Persuasion games using large language models.
  *arXiv preprint arXiv:2408.15879*, 2024.
- Rayo & Segal (2010)

  Rayo, L. and Segal, I.
  Optimal information disclosure.
  *Journal of political Economy*, 118(5):949–987, 2010.
- Romanyuk & Smolin (2019)

  Romanyuk, G. and Smolin, A.
  Cream skimming and information design in matching markets.
  *American Economic Journal: Microeconomics*, 11(2):250–276, 2019.
- Romera-Paredes et al. (2024)

  Romera-Paredes, B., Barekatain, M., Novikov, A., Balog, M., Kumar, M. P., Dupont, E., Ruiz, F. J., Ellenberg, J. S., Wang, P., Fawzi, O., et al.
  Mathematical discoveries from program search with large language models.
  *Nature*, 625(7995):468–475, 2024.
- Salvi et al. (2024)

  Salvi, F., Ribeiro, M. H., Gallotti, R., and West, R.
  On the conversational persuasiveness of large language models: A randomized controlled trial.
  *arXiv preprint arXiv:2403.14380*, 2024.
- Sanjaya et al. (2022)

  Sanjaya, R., Wang, J., and Yang, Y.
  Measuring the non-transitivity in chess.
  *Algorithms*, 15(5):152, 2022.
- Sheng et al. (2022)

  Sheng, J., Wang, X., Jin, B., Yan, J., Li, W., Chang, T.-H., Wang, J., and Zha, H.
  Learning structured communication for multi-agent reinforcement learning.
  *Autonomous Agents and Multi-Agent Systems*, 36(2):50, 2022.
- Shin & Kim (2023)

  Shin, M. and Kim, J.
  Enhancing human persuasion with large language models.
  *arXiv preprint arXiv:2311.16466*, 2023.
- Shin & Kim (2024)

  Shin, M. and Kim, J.
  Large language models can enhance persuasion through linguistic feature alignment.
  *Available at SSRN 4725351*, 2024.
- Shinn et al. (2024)

  Shinn, N., Cassano, F., Gopinath, A., Narasimhan, K., and Yao, S.
  Reflexion: Language agents with verbal reinforcement learning.
  In *NeurIPS*, 2024.
- Silva (2024)

  Silva, A.
  Large language models playing mixed strategy nash equilibrium games.
  *arXiv preprint arXiv:2406.10574*, 2024.
- Strouse et al. (2018)

  Strouse, D., Kleiman-Weiner, M., Tenenbaum, J., Botvinick, M., and Schwab, D. J.
  Learning to share and hide intentions using information regularization.
  In *NeurIPS*, 2018.
- Tao et al. (2024)

  Tao, Z., Lin, T.-E., Chen, X., Li, H., Wu, Y., Li, Y., Jin, Z., Huang, F., Tao, D., and Zhou, J.
  A survey on self-evolution of large language models.
  *arXiv preprint arXiv:2404.14387*, 2024.
- Tuyls & Weiss (2012)

  Tuyls, K. and Weiss, G.
  Multiagent learning: Basics, challenges, and prospects.
  *Ai Magazine*, 33(3):41–41, 2012.
- Vane & Lehner (2002)

  Vane, R. and Lehner, P.
  Using hypergames to increase planned payoff and reduce risk.
  *Autonomous Agents and Multi-Agent Systems*, 5:365–380, 2002.
- Wang et al. (2024)

  Wang, H., Li, W., Zha, H., and Wang, B.
  Carbon market simulation with adaptive mechanism design.
  In *IJCAI Demostrations Track*, 2024.
- Wellman (2006)

  Wellman, M. P.
  Methods for empirical game-theoretic analysis.
  In *AAAI*, 2006.
- Wojtowicz (2024)

  Wojtowicz, Z.
  When and why is persuasion hard? a computational complexity result.
  *arXiv preprint arXiv:2408.07923*, 2024.
- Wu et al. (2022)

  Wu, J., Zhang, Z., Feng, Z., Wang, Z., Yang, Z., Jordan, M. I., and Xu, H.
  Sequential information design: Markov persuasion process and its efficient reinforcement learning.
  In *EC*, 2022.
- Xu et al. (2023)

  Xu, L., Xie, H., Qin, S.-Z. J., Tao, X., and Wang, F. L.
  Parameter-efficient fine-tuning methods for pretrained language models: A critical review and assessment.
  *arXiv preprint arXiv:2312.12148*, 2023.
- Xu et al. (2024)

  Xu, L., Hu, Z., Zhou, D., Ren, H., Dong, Z., Keutzer, K., Ng, S.-K., and Feng, J.
  Magic: Investigation of large language model powered multi-agent in cognition, adaptability, rationality and collaboration.
  In *ICLR Workshop on Large Language Model (LLM) Agents*, 2024.
- Yang et al. (2024)

  Yang, C., Wang, X., Lu, Y., Liu, H., Le, Q. V., Zhou, D., and Chen, X.
  Large language models as optimizers.
  In *ICLR*, 2024.
  URL <https://openreview.net/forum?id=Bb4VGOWELI>.
- Yang et al. (2020)

  Yang, J., Li, A., Farajtabar, M., Sunehag, P., Hughes, E., and Zha, H.
  Learning to incentivize other learning agents.
  In *NeurIPS*, 2020.
- Yang & Wang (2020)

  Yang, Y. and Wang, J.
  An overview of multi-agent reinforcement learning from game theoretical perspective.
  *arXiv preprint arXiv:2011.00583*, 2020.
- Yoder (2022)

  Yoder, N.
  Designing incentives for heterogeneous researchers.
  *Journal of Political Economy*, 130(8):2018–2054, 2022.
- Zelikman et al. (2022)

  Zelikman, E., Wu, Y., Mu, J., and Goodman, N.
  Star: Bootstrapping reasoning with reasoning.
  In *NeurIPS*, 2022.
- Zelikman et al. (2024)

  Zelikman, E., Harik, G., Shao, Y., Jayasiri, V., Haber, N., and Goodman, N. D.
  Quiet-star: Language models can teach themselves to think before speaking.
  *arXiv preprint arXiv:2403.09629*, 2024.
- Zhang & Sandholm (2022)

  Zhang, B. and Sandholm, T.
  Polynomial-time optimal equilibria with a mediator in extensive-form games.
  In *NeurIPS*, 2022.
- Zhang et al. (2024a)

  Zhang, B., Farina, G., Anagnostides, I., Cacciamani, F., McAleer, S., Haupt, A., Celli, A., Gatti, N., Conitzer, V., and Sandholm, T.
  Computing optimal equilibria and mechanisms via learning in zero-sum extensive-form games.
  In *NeurIPS*, 2024a.
- Zhang et al. (2021)

  Zhang, K., Yang, Z., and Başar, T.
  Multi-agent reinforcement learning: A selective overview of theories and algorithms.
  *Handbook of reinforcement learning and control*, pp. 321–384, 2021.
- Zhang et al. (2024b)

  Zhang, Y., Mao, S., Ge, T., Wang, X., de Wynter, A., Xia, Y., Wu, W., Song, T., Lan, M., and Wei, F.
  Llm as a mastermind: A survey of strategic reasoning with large language models.
  *arXiv preprint arXiv:2404.01230*, 2024b.
- Zhang et al. (2024c)

  Zhang, Y., Mao, S., Ge, T., Wang, X., Xia, Y., Lan, M., and Wei, F.
  K-level reasoning with large language models.
  *arXiv preprint arXiv:2402.01521*, 2024c.
- Zhao et al. (2023)

  Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., et al.
  A survey of large language models.
  *arXiv preprint arXiv:2303.18223*, 2023.
- Zheng et al. (2022)

  Zheng, S., Trott, A., Srinivasa, S., Parkes, D. C., and Socher, R.
  The ai economist: Taxation policy design via two-level deep multiagent reinforcement learning.
  *Science advances*, 8(18):eabk2607, 2022.
- Zhou et al. (2020)

  Zhou, L., Gao, J., Li, D., and Shum, H.-Y.
  The design and implementation of xiaoice, an empathetic social chatbot.
  *Computational Linguistics*, 46(1):53–93, 2020.
- Zhu et al. (2022)

  Zhu, C., Dastani, M., and Wang, S.
  A survey of multi-agent reinforcement learning with communication.
  *arXiv preprint arXiv:2203.08975*, 2022.

## Supplementary Material

### Appendix A Proof of Proposition [5.1](https://arxiv.org/html/2502.01587v1#S5.Thmtheorem1 "Proposition 5.1. ‣ 5.3 Verbalized Game Solver ‣ 5 VBP Solver ‣ Verbalized Bayesian Persuasion")

###### Proof.

Under the mediator-augmented games, we can reformulate the Equation [1](https://arxiv.org/html/2502.01587v1#S2.E1 "Equation 1 ‣ 2.1 Bayesian Persuasion ‣ 2 Preliminaries ‣ Verbalized Bayesian Persuasion") as follows to express the problem of computing
an optimal equilibrium:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\max\_{\pi}\mathbb{E}\_{\pi}\left[u\_{0}(a,w)\right],\text{ s.t. }\max\_{a^{\prime}}\sum\_{w}P(w)\cdot\pi(a\mid w)\cdot\left[u\_{1}(a^{\prime},w)-u\_{1}\left(a,w\right)\right]\leq 0.$$ |  | (2) |

Let $\tau\in\mathbb{R}$ be a fixed threshold value, we can transform Equation [2](https://arxiv.org/html/2502.01587v1#A1.E2 "Equation 2 ‣ Proof. ‣ Appendix A Proof of Proposition ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion") to the following bilinear saddle-point problem by using Lagrangian-based method ([Zhang et al., 2024a](https://arxiv.org/html/2502.01587v1#bib.bib126)):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\max\_{\pi}\min\_{\boldsymbol{\lambda}\in\Delta,a^{\prime}}\lambda\_{0}\mathbb{E}\_{\pi}\left[u\_{0}(a,w)-\tau\right]-\sum\_{w}\lambda\_{w}P(w)\cdot\pi(a\mid w)\cdot\left[u\_{1}(a^{\prime},w)-u\_{1}\left(a,w\right)\right],$$ |  | (3) |

where $\lambda\_{0}+\sum\_{w}\lambda\_{w}=1$.
If we use the binary search-based algorithm (Algorithm 1 in [Zhang et al. (2024a)](https://arxiv.org/html/2502.01587v1#bib.bib126)) to optimize the sender’s and receiver’s strategties, we can recover the main result of Theorem 3.7 in [Zhang et al. (2024a)](https://arxiv.org/html/2502.01587v1#bib.bib126).
∎

As can be seen from Equation [3](https://arxiv.org/html/2502.01587v1#A1.E3 "Equation 3 ‣ Proof. ‣ Appendix A Proof of Proposition ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion"), the BP problem is convert into the two-player zero-sum extensive-form games.
In practice, we can use policy-space response oracle with deep reinforcement learning as the approximate best response oracle to solve high-dimensional games.
In this paper, we use prompt-space response oracle with OPRO ([Yang et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib119)) and FunSearch algorithm ([Romera-Paredes et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib101)) based on pretrained and aligned LLMs as the approximate BR oracles in the binary search-based algorithm to solve verbalized mediator-augmented games.
The utilty functions of the sender and receiver is modified to the zero-sum utilities in Equation [3](https://arxiv.org/html/2502.01587v1#A1.E3 "Equation 3 ‣ Proof. ‣ Appendix A Proof of Proposition ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion") correspondingly.

### Appendix B Optimal Policies for Classic Static BP Problems

In this section, we derive the Bayes correlated equilibrium (BCE) for classic static BP problems (corresponding to the experimental BCE results) and present the agents’ strategies and corresponding rewards under equilibrium.

###### Recommendation Letter (REL)

There are $3$ possible outcomes between the professor and HR:
(1) HR tends not to hire if the professor does not provide a letter, due to the higher probability of weak candidates;
(2) if the professor reports honestly, HR hires strong candidates, yielding an expected payoff of $1/3$ for both;
(3) the professor reports strong students truthfully and lies with probability $\varepsilon\in[0,1/2)$ for weak students.
HR follows the professor’s recommendations, resulting in expected payoffs of $(1+2\varepsilon)/3$ for the professor and $(1-2\varepsilon)/3$ for HR.
The key insight is that the sender can strategically misreport information to maximize their interest, while still revealing enough truth to maintain credibility with the receiver.

###### Courtroom (COR)

There are $3$ outcomes between the prosecutor and judge:
(1) without communication, the judge acquits since guilt is less likely;
(2) with fully informative signaling, the judge convicts $30\%$ of the time;
(3) the prosecutor, honest when the defendant is guilty, can lie with probability $\varepsilon$ when innocent.
The judge follows the prosecutor’s recommendation if $\varepsilon\leq 3/7$, with the prosecutor’s optimal $\varepsilon=3/7$.
The resulting payoffs are $(0.7\varepsilon+0.3)$ for the prosecutor and $1-0.7\varepsilon$ for the judge.
The prosecutor’s optimal investigation is a binary signal: $\pi(i|\text{innocent})=\frac{4}{7},\pi(i|\text{guilty})=0,\pi(g|\text{innocent})=\frac{3}{7},\pi(g|\text{guilty})=1$, leading the judge to convict $60\%$ of defendants, despite knowing $70\%$ are innocent.

###### Law Enforcement (LAE)

There are $3$ outcomes between the police and drivers:
(1) with a fully uninformative signal, drivers speed everywhere if $V>(GK)/Z$, giving the police a payoff of $0$ and the drivers $(VZ-GK)/Z$;
(2) with a fully informative signal, drivers avoid patrolled miles, yielding payoffs of $(Z-G)V/Z$ for the police and $GV/Z$ for the drivers;
(3) the optimal policy lies between these extremes, with partial consistency in patrol.
The police lie with probability $\varepsilon=1-\frac{VZ-GK}{VZ-VG}$, leading to payoffs of $GY/Z+\varepsilon Y$ for the police and $(1-\varepsilon)V(Z-G)/Z$ for the drivers.

### Appendix C Implementation Details

In this section, we provide the implementation details and training hyperparameters.
All experiments discussed in this section are conducted on an NVIDIA A100 cluster equipped with 40GB of GPU memory.
In addition, the LLM-related parts of the experiments in this paper are implemented based on the Llama-3.1-8b model3, including the generation of student background, case information, and deployment plans, the sender and receiver strategies, the prediction of receiver decisions in the verbalized obedience constraint, the classification of signals in signal polarization (recommend or not recommend, guilty or not guilty, police deployment or no deployment), the evaluation of signals in information confusion, and the Prompt-PSRO framework.

#### C.1 Best Response Approximator

The best response approximator is shown in Figure [14](https://arxiv.org/html/2502.01587v1#A3.F14 "Figure 14 ‣ C.1 Best Response Approximator ‣ Appendix C Implementation Details ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion").

Figure 14: Approximate best response generation in prompt-space response oracle framework.

#### C.2 Extended Obedience Constraints

The inclusion of obedience constraints in our framework is essential for modeling realistic communication scenarios in verbalized Bayesian persuasion problems.
While a simplified version of the game could rely on the sender recommending the best action from the receiver’s perspective, this approach fails to capture the nuanced and complex nature of real-world communication, such as writing reference letters.
Unlike binary recommendations, natural language signals often carry implicit or redundant information that allows for a range of interpretations.

To address this, we adopt the extended obedience constraints proposed by [Lin et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib75), which go beyond the standard obedience constraint framework.
This extension removes the strict one-to-one mapping between signals and recommended actions, enabling the sender to use natural language signals that map to distributions over actions.
This redundancy mirrors real-world communication, where subtle language nuances can imply varying degrees of recommendation strength without explicitly stating a binary decision.

The extended obedience constraints strike a balance between flexibility and credibility.
They ensure that the sender’s signals remain credible and aligned with the receiver’s best interests while allowing for richer signal spaces.
This flexibility is crucial for capturing the complexity of verbalized Bayesian persuasion, where the sender’s role shifts from “action recommendation” to “signal sending.”
By enabling nuanced communication, the extended obedience constraint better reflects real-world scenarios while preserving the strategic alignment necessary for effective persuasion.

#### C.3 Hyperparameters

###### MARL

For this part of the experiment, we use the open-source code4 provided in [Lin et al. (2023)](https://arxiv.org/html/2502.01587v1#bib.bib75).
Additionally, for the two hyperparameters a and b, based on the sensitivity analysis in Section H.6, we set them to $3.75$ and $0.15$, respectively.

###### Prompt-PSRO

The prompt-space response oracle is the core strategy optimization framework in VBP, and we implement it based on the open-source code5 provided in [Gemp et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib43).

###### OPRO

We use the “Categorical” instantiation of the Prompt-PSRO algorithm to estimate the best response in the S1 and S2 settings.
Specifically, the generation of new categories and prompts within categories is based on the OPRO algorithm ([Yang et al., 2024](https://arxiv.org/html/2502.01587v1#bib.bib119)).
In OPRO, we set the temperature to $0$ when evaluating the performance of generated categories or prompts, in which case the scorer LLM greedily decodes.
Unless otherwise specified, we set the default temperature to $1.0$ for optimizer LLMs to generate diverse and creative categories or prompts.
At each optimization step, we prompt the optimizer LLM with the meta-prompt $8$ times to generate $8$ categories or prompts, then we add these instructions with their rewards to the optimization trajectory in the meta-prompt.
The meta-prompt at each step contains the best $10$ categories so far.

###### FunSearch

We use the conditional instantiation of the Prompt-PSRO algorithm to estimate the best response in the S3 setting.
The core of conditional is the FunSearch framework used to generate prompt functions.
We implement it based on the open-source code6 provided in [Romera-Paredes et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib101).

###### Self-reflection

At each optimization step, we implement information confusion through $3$ rounds of self-reflection.
Self-reflection is implemented based on the open-source code7 provided in [Shinn et al. (2024)](https://arxiv.org/html/2502.01587v1#bib.bib107).

#### C.4 Key Prompts

This section includes the key prompt designs within the VBP framework.
However, aspects such as receiver behavior prediction in the verbalized obedience constraint, signal classification in signal polarization, and signal evaluation in information confusion are not listed separately due to the simplicity of the prompts.
In addition, the specific approximate best response solving algorithms in the Prompt-PSRO framework - OPRO for the S1 and S2 settings, and FunSearch for the S3 setting - have special prompt designs.
We follow the designs in the open-source code provided by the respective papers and do not list them separately.
Below, we introduce the prompt design for each BP problem.
Since the prompts for different problems share many common elements, the overall manual workload for prompt design is not large.

##### C.4.1 REL

In the recommendation letter problem, the sender and receiver correspond to the professor and HR, respectively.
Below, we introduce the prompt design for the sender and receiver in the recommendation letter problem.
For the sender, the prompt mainly consists of five parts:
1. BP Problem Introduction: This part is directly copied from the corresponding content in Section [6.1.1](https://arxiv.org/html/2502.01587v1#S6.SS1.SSS1 "6.1.1 Classic BP Problems ‣ 6.1 Environments ‣ 6 Experiments ‣ Verbalized Bayesian Persuasion") of the main text and is not repeated here.
2. Roleplay: The sender is informed of their role in the BP problem, along with tips on information confusion techniques and prior distribution.
Since professors in the real world are aware of the need for information confusion, this part of the prompt aligns with real-world scenarios.
3. Writing Style: This part of the prompt is the section that can be optimized within the VBP framework, equivalent to the sender’s signaling scheme.
In this paper, it consists of a category of writing style and corresponding specific content; the former is a word or phrase, and the latter is a word.
In the S1 and S2 settings, this part of the prompt is generated by the “categorical” best response estimation algorithm, while in the S3 setting, it is generated by the “conditional” method.
4. State: The sender’s state information primarily consists of the student’s actual background, including name, GPA, project experience, research experience, and internship experience, all generated by the LLM.
5. Interaction History: This part exists only in the S3 setting and includes whether the professor previously recommended the student, whether HR accepted it, and the sender’s reward.
Note that since the recommendation letter itself does not directly indicate whether the student is recommended, we again use the signal polarization technique, using the LLM to classify the generated recommendation letter.

[⬇](data:text/plain;base64,IyByb2xlLXBsYXlpbmcgcHJvbXB0CicnJwpZb3UgYXJlIGEgc2VuaW9yIHByb2Zlc3NvciwgYSBzZWxmLWludGVyZXN0ZWQgcmF0aW9uYWwgcGxheWVyLCBhbmQgc3R1ZGVudHMgb2Z0ZW4gY29tZSB0byB5b3UgZm9yIHJlY29tbWVuZGF0aW9uIGxldHRlcnMuIFRoZSBxdWFsaXR5IG9mIHRoZXNlIHN0dWRlbnRzIHZhcmllcywgYnV0IG9ubHkgeW91IGtub3cgdGhlaXIgdHJ1ZSBpbmZvcm1hdGlvbiwgd2hpY2ggaW5jbHVkZXMgdGhlaXIgb3ZlcmFsbCBxdWFsaXR5LCBuYW1lLCBtYWpvciwgR1BBLCBwcm9qZWN0IGV4cGVyaWVuY2UsIHdvcmsgZXhwZXJpZW5jZSwgYW5kIGFjYWRlbWljIGV4cGVyaWVuY2UuCgpBbW9uZyBhbGwgdGhlIHN0dWRlbnRzLCBhcHByb3hpbWF0ZWx5IDEvMyBhcmUgc3Ryb25nIHN0dWRlbnRzLgoKVGhlIHJlYWRlcnMgb2YgdGhlIHJlY29tbWVuZGF0aW9uIGxldHRlcnMgYXJlIHRoZSBIUnMgb2YgYSBjb21wYW55LCBhbmQgdGhleSBjYW4ga25vdyB0aGUgdHJ1ZSBxdWFsaXR5IG9mIHRoZSBzdHVkZW50IGFmdGVyIGdpdmluZyB0aGVtIGFuIG9mZmVyLiBUaGV5IGNhbiBhbHNvIGp1ZGdlIHRoZSBzdHVkZW50J3MgcXVhbGl0eSBiYXNlZCBvbiB0aGVpciBwYXN0IGV4cGVyaWVuY2UsIHRob3VnaCBub3QgbmVjZXNzYXJpbHkgYWNjdXJhdGVseS4KClRvIG1heGltaXplIHRoZSBjaGFuY2VzIG9mIHlvdXIgcmVjb21tZW5kZWQgc3R1ZGVudHMgYmVpbmcgYWNjZXB0ZWQsIHlvdSBjYW4gdHJ1dGhmdWxseSBjb252ZXkgdGhlIHN0dWRlbnQncyBpbmZvcm1hdGlvbiBpbiB0aGUgcmVjb21tZW5kYXRpb24gbGV0dGVyLCBvciB5b3UgY2FuIGNvbmNlYWwsIGNvbmZ1c2UsIG9yIGV2ZW4gcHJvdmlkZSBzb21lIGZhbHNlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdHVkZW50LgoKRm9yIHlvdXIgbG9uZy10ZXJtIGJlbmVmaXQsIHlvdSBkb24ndCBuZWNlc3NhcmlseSBoYXZlIHRvIHJlY29tbWVuZCBldmVyeSBzdHVkZW50IGluIHRoZSByZWNvbW1lbmRhdGlvbiBsZXR0ZXIuIFlvdSBjb3VsZCByZWNvbW1lbmQgYSBiYWQgc3R1ZGVudCBvciBhIGdvb2Qgc3R1ZGVudCB0byBtYXhpbWl6ZSB5b3VyIGxvbmctdGVybSByZXdhcmQuCicnJwoKIyB3cml0aW5nLXN0eWxlIHByb21wdAonJycKWW91IGFyZSByZXF1aXJlZCB0byB3cml0ZSBhIHJlY29tbWVuZGF0aW9uIGxldHRlciBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHN0eWxlOgp7UFJPTVBUUyBUTyBCRSBPUFRJTUlaRUR9CicnJwoKIyBzdGF0ZQonJycKQmVsb3cgaXMgdGhlIHN0dWRlbnQncyBpbmZvcm1hdGlvbjoKe1NUVURFTlQgSU5GT1JNQVRJT04gR0VORVJBVEVEIEJZIFRIRSBMTE19CicnJwoKIyBoaXN0b3J5CicnJwpCZWxvdyBpcyB0aGUgaW50ZXJhY3Rpb24gaGlzdG9yeSB3aXRoIHRoZSBIUjoKe0FDVElPTlMgQU5EIFJFV0FSRFMgT0YgVEhFIFRXTyBQTEFZRVJTfQonJyc=)

1
# role-playing prompt

2
’’’

3
You are a senior professor, a self-interested rational player, and students often come to you for recommendation letters. The quality of these students varies, but only you know their true information, which includes their overall quality, name, major, GPA, project experience, work experience, and academic experience.

4

5
Among all the students, approximately 1/3 are strong students.

6

7
The readers of the recommendation letters are the HRs of a company, and they can know the true quality of the student after giving them an offer. They can also judge the student’s quality based on their past experience, though not necessarily accurately.

8

9
To maximize the chances of your recommended students being accepted, you can truthfully convey the student’s information in the recommendation letter, or you can conceal, confuse, or even provide some false information about the student.

10

11
For your long-term benefit, you don’t necessarily have to recommend every student in the recommendation letter. You could recommend a bad student or a good student to maximize your long-term reward.

12
’’’

13

14
# writing-style prompt

15
’’’

16
You are required to write a recommendation letter based on the following style:

17
{PROMPTS TO BE OPTIMIZED}

18
’’’

19

20
# state

21
’’’

22
Below is the student’s information:

23
{STUDENT INFORMATION GENERATED BY THE LLM}

24
’’’

25

26
# history

27
’’’

28
Below is the interaction history with the HR:

29
{ACTIONS AND REWARDS OF THE TWO PLAYERS}

30
’’’

Next, for the receiver, the prompt consists of six parts.
We will focus on the different parts, as the similar parts to that of the sender will not be repeated here:
3. Writing Style: In addition to the prompt optimized in the VBP framework, this part also includes a section of text on the receiver’s decision-making process, i.e., estimating the true state based on Bayesian rules, to align with the classical BP problem.
4. Signal: This refers to the receiver’s state, which comes from the sender’s output. In this problem, it is a recommendation letter.
6. Commitment Assumption: To align with the classical BP problem, this paper implements the verbalized commitment assumption by writing the sender’s writing style and its corresponding probability (calculated by Prompt-PSRO) into the receiver’s prompt as an estimate of the signaling scheme.

[⬇](data:text/plain;base64,IyByb2xlLXBsYXlpbmcgcHJvbXB0CicnJwpZb3UgYXJlIGEgc3RhZmYgbWVtYmVyIGluIHRoZSBIUiBkZXBhcnRtZW50IG9mIGEgY2FtcGFueSwgcmVzcG9uc2libGUgZm9yIHJldmlld2luZyByZWNvbW1lbmRhdGlvbiBsZXR0ZXJzIHdyaXR0ZW4gYnkgcHJvZmVzc29ycyBmb3Igc3R1ZGVudHMuIFlvdXIgdGFzayBpcyB0byBpbmZlciB0aGUgcXVhbGl0eSBvZiB0aGUgc3R1ZGVudHMgZnJvbSB0aGVzZSBsZXR0ZXJzIHRvIGRlY2lkZSB3aGV0aGVyIHRvIGFkbWl0IHRoZW0uCgpBbW9uZyBhbGwgdGhlIHN0dWRlbnRzLCBhcHByb3hpbWF0ZWx5IDEvMyBhcmUgc3Ryb25nIHN0dWRlbnRzLgoKQmUgYXdhcmUgdGhhdCBwcm9mZXNzb3JzLCBpbiBhbiBhdHRlbXB0IHRvIGluY3JlYXNlIHRoZSBjaGFuY2VzIG9mIHRoZWlyIHN0dWRlbnRzIGJlaW5nIGFkbWl0dGVkLCBtYXkgaGlkZSwgY29uZnVzZSwgb3IgZXZlbiBwcm92aWRlIGZhbHNlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdHVkZW50cy4gWW91IG5lZWQgdG8gbWFrZSBjYXJlZnVsIGp1ZGdtZW50cy4KCkhvd2V2ZXIsIHlvdSBhcmUgbm90IGNvbXBsZXRlbHkgaW4gdGhlIGRhcmsteW91IGtub3cgdGhlIHdyaXRpbmcgc3R5bGUgb2YgdGhlIHByb2Zlc3NvciB3aG8gd3JvdGUgdGhlIGxldHRlci4gQmFzZWQgb24gdGhlIHByb2Zlc3NvcidzIHdyaXRpbmcgc3R5bGUgYW5kIHRoZSBjb250ZW50IG9mIHRoZSByZWNvbW1lbmRhdGlvbiBsZXR0ZXIsIGZpcnN0IHByb3ZpZGUgeW91ciBhbmFseXNpcyBhbmQgdGhlbiBtYWtlIGEgZmluYWwgZGVjaXNpb24gb24gd2hldGhlciB0byBhZG1pdCB0aGUgc3R1ZGVudC4KJycnCgojIGRlY2lzaW9uLW1ha2luZyBwcm9tcHQKJycnCldoZW4geW91IG1ha2luZyBkZWNpc2lvbnMsIHlvdSBzaG91bGQgZmlyc3QgZ3Vlc3MgdGhlIHN0dWRlbnQncyBxdWFsaXR5IGdpdmVuIHRoZSBzZW50IHJlY29tbWVuZGF0aW9uIGxldHRlciBhY2NvcmRpbmcgdG8gdGhlIEJheWVzaWFuIGRlY2lzaW9uIHJ1bGUsIHRoZW4gY2hvb3NlIHRoZSBiZXN0IHJlc3BvbnNlIHRvIHlvdXIgZ3Vlc3NlZCBzdHVkZW50J3MgcXVhbGl0eS4KCllvdSBhcmUgcmVxdWlyZWQgdG8gbWFrZSBkZWNpc2lvbnMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBzdHlsZToKe1BST01QVFMgVE8gQkUgT1BUSU1JWkVEfQonJycKCiMgc2lnbmFsCicnJwpCZWxvdyBpcyB0aGUgcmVjb21tZW5kYXRpb24gbGV0dGVyIHdyaXR0ZW4gYnkgdGhlIHByb2Zlc3NvcjoKe1JFQ09NTUVOREFUSU9OIExFVFRFUiBHRU5FUkFURUQgQlkgVEhFIFBST0ZFU1NPUn0KJycnCgojIGhpc3RvcnkKJycnCkJlbG93IGlzIHRoZSBpbnRlcmFjdGlvbiBoaXN0b3J5IHdpdGggdGhlIHByb2Zlc3NvcjoKe0FDVElPTlMgQU5EIFJFV0FSRFMgT0YgVEhFIFRXTyBQTEFZRVJTfQonJycKCiMgY29tbWl0bWVudCBhc3N1bXB0aW9uCicnJwpUaGUgZm9sbG93aW5nIGlzIHRoZSB3cml0aW5nIHN0eWxlIHRoZSBwcm9mZXNzb3IgdXNlZCB3aGVuIHdyaXRpbmcgdGhlIHJlY29tbWVuZGF0aW9uIGxldHRlcjoKe1dSSVRJTkcgU1RZTEUgT1VUUFVUIEJZIFZCUCBBTkQgVEhFIENPUlJFU1BPTkRJTkcgUFJPQkFCSUxJVFl9CicnJw==)

1
# role-playing prompt

2
’’’

3
You are a staff member in the HR department of a campany, responsible for reviewing recommendation letters written by professors for students. Your task is to infer the quality of the students from these letters to decide whether to admit them.

4

5
Among all the students, approximately 1/3 are strong students.

6

7
Be aware that professors, in an attempt to increase the chances of their students being admitted, may hide, confuse, or even provide false information about the students. You need to make careful judgments.

8

9
However, you are not completely in the dark-you know the writing style of the professor who wrote the letter. Based on the professor’s writing style and the content of the recommendation letter, first provide your analysis and then make a final decision on whether to admit the student.

10
’’’

11

12
# decision-making prompt

13
’’’

14
When you making decisions, you should first guess the student’s quality given the sent recommendation letter according to the Bayesian decision rule, then choose the best response to your guessed student’s quality.

15

16
You are required to make decisions based on the following style:

17
{PROMPTS TO BE OPTIMIZED}

18
’’’

19

20
# signal

21
’’’

22
Below is the recommendation letter written by the professor:

23
{RECOMMENDATION LETTER GENERATED BY THE PROFESSOR}

24
’’’

25

26
# history

27
’’’

28
Below is the interaction history with the professor:

29
{ACTIONS AND REWARDS OF THE TWO PLAYERS}

30
’’’

31

32
# commitment assumption

33
’’’

34
The following is the writing style the professor used when writing the recommendation letter:

35
{WRITING STYLE OUTPUT BY VBP AND THE CORRESPONDING PROBABILITY}

36
’’’’

##### C.4.2 COR

In the courtroom problem, the sender and receiver correspond to the prosecutor and the judge, respectively.
The prompt design for the courtroom problem is the same in structure as the recommendation letter problem, except for the problem background.
Below, we introduce some specific points that need to be explained.
First, for the sender:
4. State: In the courtroom problem, the sender’s state includes case information, whether the defendant is guilty, and related evidence, all generated by the LLM.
Note that when generating evidence, there will be one piece of key evidence proving the defendant guilty or innocent, and two ambiguous pieces of evidence to align with the original courtroom problem.

[⬇](data:text/plain;base64,IyByb2xlLXBsYXlpbmcgcHJvbXB0CicnJwpZb3UgYXJlIGEgcHJvc2VjdXRvciwgYSBzZWxmLWludGVyZXN0ZWQgcmF0aW9uYWwgcGxheWVyLCBhbmQgeW91IGFyZSB0YXNrZWQgd2l0aCBjb252aW5jaW5nIGEganVkZ2UgdGhhdCB0aGUgZGVmZW5kYW50IGlzIGd1aWx0eS4gWW91IHBvc3Nlc3MgZGlmZmVyZW50IHBpZWNlcyBvZiBldmlkZW5jZSwgc29tZSBvZiB3aGljaCBtYXkgYmUgZXhjdWxwYXRvcnksIGFtYmlndW91cywgb3IgaW5jcmltaW5hdGluZy4gT25seSB5b3Uga25vdyB0aGUgdHJ1ZSBuYXR1cmUgYW5kIHN0cmVuZ3RoIG9mIHRoZSBldmlkZW5jZS4KCllvdSBoYXZlIHRoZSBhYmlsaXR5IHRvIHNlbGVjdGl2ZWx5IHByZXNlbnQgc29tZSBvciBhbGwgb2YgdGhlIGV2aWRlbmNlIHRvIHRoZSBqdWRnZS4gWW91IGNhbiBjaG9vc2UgdG8gb21pdCBjZXJ0YWluIGV2aWRlbmNlLCBoaWdobGlnaHQgb3RoZXJzLCBvciBwcmVzZW50IG1pc2xlYWRpbmcgaW50ZXJwcmV0YXRpb25zIG9mIHRoZSBldmlkZW5jZSB0byBzdHJlbmd0aGVuIHlvdXIgY2FzZS4KCkFtb25nIGFsbCBkZWZlbmRhbnRzLCBhcHByb3hpbWF0ZWx5IDMwJSBhcmUgZ3VpbHR5LgoKVGhlIGp1ZGdlIGlzIHJlc3BvbnNpYmxlIGZvciBldmFsdWF0aW5nIHRoZSBldmlkZW5jZSBhbmQgZGVjaWRpbmcgd2hldGhlciB0byBjb252aWN0IG9yIGFjcXVpdCB0aGUgZGVmZW5kYW50LiBUaGUganVkZ2UgY2FuIGFzc2VzcyB0aGUgZXZpZGVuY2UgYmFzZWQgb24gdGhlaXIgcGFzdCBleHBlcmllbmNlLCB0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IGFjY3VyYXRlbHkuCgpUbyBtYXhpbWl6ZSB0aGUgY2hhbmNlcyBvZiBjb252aWN0aW5nIHRoZSBkZWZlbmRhbnQsIHlvdSBjYW4gdHJ1dGhmdWxseSBwcmVzZW50IHRoZSBldmlkZW5jZSwgb3IgeW91IGNhbiBzZWxlY3RpdmVseSBjb25jZWFsLCBjb25mdXNlLCBvciBldmVuIHByZXNlbnQgbWlzbGVhZGluZyBpbnRlcnByZXRhdGlvbnMgb2YgdGhlIGV2aWRlbmNlLgoKRm9yIHlvdXIgbG9uZy10ZXJtIGJlbmVmaXQsIHlvdSBkb24ndCBuZWNlc3NhcmlseSBoYXZlIHRvIGFpbSBmb3IgYSBjb252aWN0aW9uIGluIGV2ZXJ5IGNhc2UuIFlvdSBjb3VsZCBwdXJzdWUgb3IgZHJvcCBhIGNhc2UgZGVwZW5kaW5nIG9uIHRoZSBhdmFpbGFibGUgZXZpZGVuY2UgdG8gbWF4aW1pemUgeW91ciBsb25nLXRlcm0gcmV3YXJkLgonJycKCiMgd3JpdGluZy1zdHlsZSBwcm9tcHQKJycnCllvdSBhcmUgcmVxdWlyZWQgdG8gcHJlc2VudCBldmlkZW5jZSBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHN0eWxlOgp7UFJPTVBUUyBUTyBCRSBPUFRJTUlaRUR9CicnJwoKIyBzdGF0ZQonJycKQmVsb3cgaXMgdGhlIGV2aWRlbmNlIGF2YWlsYWJsZSBmb3IgdGhlIGNhc2U6CntDQVNFIEJBQ0tHUk9VTkQgQU5EIEVWSURFTkNFIEdFTkVSQVRFRCBCWSBUSEUgTExNfQonJycKCiMgaGlzdG9yeQonJycKQmVsb3cgaXMgdGhlIGludGVyYWN0aW9uIGhpc3Rvcnkgd2l0aCB0aGUganVkZ2U6CntBQ1RJT05TIEFORCBSRVdBUkRTIE9GIFRIRSBUV08gUExBWUVSU30KJycn)

1
# role-playing prompt

2
’’’

3
You are a prosecutor, a self-interested rational player, and you are tasked with convincing a judge that the defendant is guilty. You possess different pieces of evidence, some of which may be exculpatory, ambiguous, or incriminating. Only you know the true nature and strength of the evidence.

4

5
You have the ability to selectively present some or all of the evidence to the judge. You can choose to omit certain evidence, highlight others, or present misleading interpretations of the evidence to strengthen your case.

6

7
Among all defendants, approximately 30% are guilty.

8

9
The judge is responsible for evaluating the evidence and deciding whether to convict or acquit the defendant. The judge can assess the evidence based on their past experience, though not necessarily accurately.

10

11
To maximize the chances of convicting the defendant, you can truthfully present the evidence, or you can selectively conceal, confuse, or even present misleading interpretations of the evidence.

12

13
For your long-term benefit, you don’t necessarily have to aim for a conviction in every case. You could pursue or drop a case depending on the available evidence to maximize your long-term reward.

14
’’’

15

16
# writing-style prompt

17
’’’

18
You are required to present evidence based on the following style:

19
{PROMPTS TO BE OPTIMIZED}

20
’’’

21

22
# state

23
’’’

24
Below is the evidence available for the case:

25
{CASE BACKGROUND AND EVIDENCE GENERATED BY THE LLM}

26
’’’

27

28
# history

29
’’’

30
Below is the interaction history with the judge:

31
{ACTIONS AND REWARDS OF THE TWO PLAYERS}

32
’’’’

Next, the receiver’s prompt is identical to the recommendation letter problem, except for the problem background, so we will not elaborate further here.

[⬇](data:text/plain;base64,IyByb2xlLXBsYXlpbmcgcHJvbXB0CicnJwpZb3UgYXJlIGEganVkZ2UsIHJlc3BvbnNpYmxlIGZvciByZXZpZXdpbmcgdGhlIGV2aWRlbmNlIHByZXNlbnRlZCBieSB0aGUgcHJvc2VjdXRvciB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgZGVmZW5kYW50IGlzIGd1aWx0eSBvciBpbm5vY2VudC4gWW91ciB0YXNrIGlzIHRvIG1ha2UgYSBmYWlyIGp1ZGdtZW50IGJhc2VkIG9uIHRoZSBldmlkZW5jZSB5b3UgcmVjZWl2ZS4KCkFtb25nIGFsbCBkZWZlbmRhbnRzLCBhcHByb3hpbWF0ZWx5IDMwJSBhcmUgZ3VpbHR5LgoKQmUgYXdhcmUgdGhhdCBwcm9zZWN1dG9ycywgaW4gYW4gYXR0ZW1wdCB0byBpbmNyZWFzZSB0aGUgY2hhbmNlcyBvZiBhIGNvbnZpY3Rpb24sIG1heSBoaWRlLCBjb25mdXNlLCBvciBldmVuIHByb3ZpZGUgbWlzbGVhZGluZyBldmlkZW5jZS4gVGhleSBtYXkgYWxzbyBzZWxlY3RpdmVseSBwcmVzZW50IGNlcnRhaW4gcGllY2VzIG9mIGV2aWRlbmNlIHdoaWxlIG9taXR0aW5nIG90aGVycy4gWW91IG5lZWQgdG8gbWFrZSBjYXJlZnVsIGp1ZGdtZW50cy4KCkhvd2V2ZXIsIHlvdSBhcmUgbm90IGNvbXBsZXRlbHkgaW4gdGhlIGRhcmsteW91IGNhbiBldmFsdWF0ZSB0aGUgcHJvc2VjdXRvcidzIHByZXNlbnRhdGlvbiBzdHlsZS4gQmFzZWQgb24gdGhlIHByb3NlY3V0b3IncyBwcmVzZW50YXRpb24sIGZpcnN0IHByb3ZpZGUgeW91ciBhbmFseXNpcyBhbmQgdGhlbiBtYWtlIGEgZmluYWwgZGVjaXNpb24gb24gd2hldGhlciB0byBjb252aWN0IG9yIGFjcXVpdCB0aGUgZGVmZW5kYW50LgonJycKCiMgZGVjaXNpb24tbWFraW5nIHByb21wdAonJycKV2hlbiBtYWtpbmcgZGVjaXNpb25zLCB5b3Ugc2hvdWxkIGZpcnN0IGd1ZXNzIHRoZSBkZWZlbmRhbnQncyBndWlsdCBnaXZlbiB0aGUgcHJlc2VudGVkIGV2aWRlbmNlIGFjY29yZGluZyB0byB0aGUgQmF5ZXNpYW4gZGVjaXNpb24gcnVsZS4gVGhlbiBjaG9vc2UgdGhlIGJlc3QgcmVzcG9uc2UgYmFzZWQgb24geW91ciBpbmZlcnJlZCBsaWtlbGlob29kIG9mIGd1aWx0LgoKWW91IGFyZSByZXF1aXJlZCB0byBtYWtlIGRlY2lzaW9ucyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHN0eWxlOgp7UFJPTVBUUyBUTyBCRSBPUFRJTUlaRUR9CicnJwoKIyBzaWduYWwKJycnCkJlbG93IGlzIHRoZSBjb21wbGFpbnQgcHJlc2VudGVkIGJ5IHRoZSBwcm9zZWN1dG9yOgp7Q09NUExBSU5UIFBSRVNFTlRFRCBCWSBUSEUgUFJPU0VDVVRPUn0KJycnCgojIGhpc3RvcnkKJycnCkJlbG93IGlzIHRoZSBpbnRlcmFjdGlvbiBoaXN0b3J5IHdpdGggdGhlIHByb3NlY3V0b3I6CntBQ1RJT05TIEFORCBSRVdBUkRTIE9GIFRIRSBUV08gUExBWUVSU30KJycnCgojIGNvbW1pdG1lbnQgYXNzdW1wdGlvbgonJycKVGhlIGZvbGxvd2luZyBpcyB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIHRoZSBwcm9zZWN1dG9yIHVzZWQgd2hlbiBwcmVzZW50aW5nIHRoZSBldmlkZW5jZToKe1BSRVNFTlRBVElPTiBTVFlMRSBPVVRQVVQgQlkgVkJQIEFORCBUSEUgQ09SUkVTUE9ORElORyBQUk9CQUJJTElUWX0KJycn)

1
# role-playing prompt

2
’’’

3
You are a judge, responsible for reviewing the evidence presented by the prosecutor to determine whether the defendant is guilty or innocent. Your task is to make a fair judgment based on the evidence you receive.

4

5
Among all defendants, approximately 30% are guilty.

6

7
Be aware that prosecutors, in an attempt to increase the chances of a conviction, may hide, confuse, or even provide misleading evidence. They may also selectively present certain pieces of evidence while omitting others. You need to make careful judgments.

8

9
However, you are not completely in the dark-you can evaluate the prosecutor’s presentation style. Based on the prosecutor’s presentation, first provide your analysis and then make a final decision on whether to convict or acquit the defendant.

10
’’’

11

12
# decision-making prompt

13
’’’

14
When making decisions, you should first guess the defendant’s guilt given the presented evidence according to the Bayesian decision rule. Then choose the best response based on your inferred likelihood of guilt.

15

16
You are required to make decisions based on the following style:

17
{PROMPTS TO BE OPTIMIZED}

18
’’’

19

20
# signal

21
’’’

22
Below is the complaint presented by the prosecutor:

23
{COMPLAINT PRESENTED BY THE PROSECUTOR}

24
’’’

25

26
# history

27
’’’

28
Below is the interaction history with the prosecutor:

29
{ACTIONS AND REWARDS OF THE TWO PLAYERS}

30
’’’

31

32
# commitment assumption

33
’’’

34
The following is the presentation style the prosecutor used when presenting the evidence:

35
{PRESENTATION STYLE OUTPUT BY VBP AND THE CORRESPONDING PROBABILITY}

36
’’’’

##### C.4.3 LAE

In the law enforcement problem, the sender and receiver correspond to the police and the driver, respectively.
The prompt design for the law enforcement problem is the same in structure as the recommendation letter and courtroom problems, except for the problem background.
Similarly, we introduce some specific points that need to be explained.
First, for the sender:
5. Interaction History: In the law enforcement problem, the sender’s action is no longer represented by a binary variable classified by the LLM, such as recommend or not recommend, guilty or not guilty, but whether there is a police patrol on each road segment, making it a multidimensional binary vector.
Similarly, the receiver’s action is also a multidimensional binary vector, indicating whether they choose to speed on each road segment.

[⬇](data:text/plain;base64,IyByb2xlLXBsYXlpbmcgcHJvbXB0CicnJwpZb3UgYXJlIGEgcG9saWNlIG9mZmljZXIsIGEgc2VsZi1pbnRlcmVzdGVkIHJhdGlvbmFsIHBsYXllciwgYW5kIHlvdXIgdGFzayBpcyB0byBtaW5pbWl6ZSBzcGVlZGluZyBvbiBhIGdpdmVuIHNldCBvZiByb2Fkcy4gWW91IGhhdmUgbGltaXRlZCBwZXJzb25uZWwsIHdpdGggb25seSAyIG9mZmljZXJzIGF2YWlsYWJsZSB0byBwYXRyb2wgMyBtaWxlcyBvZiByb2FkLiBUaGUgZHJpdmVycyBkbyBub3Qga25vdyBleGFjdGx5IHdoaWNoIHJvYWRzIHdpbGwgYmUgcGF0cm9sbGVkLgoKWW91IHBvc3Nlc3MgZnVsbCBrbm93bGVkZ2Ugb2YgdGhlIHBhdHJvbCBkZXBsb3ltZW50IHBsYW4sIHdoaWNoIGluY2x1ZGVzIHdoaWNoIDIgbWlsZXMgb2Ygcm9hZCB3aWxsIGJlIHBhdHJvbGxlZCBhbmQgd2hpY2ggMSBtaWxlIHdpbGwgbm90LiBIb3dldmVyLCB5b3UgaGF2ZSB0aGUgYWJpbGl0eSB0byBzZWxlY3RpdmVseSBhbm5vdW5jZSBwYXRyb2xsaW5nIGluZm9ybWF0aW9uIHRvIHRoZSBkcml2ZXJzLiBZb3UgY2FuIGNob29zZSB0byBoaW50LCBtaXNsZWFkLCBvciBldmVuIGZhbHNlbHkgY2xhaW0gdGhhdCBhIHJvYWQgd2lsbCBiZSBwYXRyb2xsZWQgdG8gZGV0ZXIgc3BlZWRpbmcuCgpUaGVyZSBhcmUgMyBtaWxlcyBvZiByb2FkIGluIHRvdGFsLCBhbmQgb25seSAyIG9mIHRoZXNlIG1pbGVzIHdpbGwgaGF2ZSBwb2xpY2UgcHJlc2VuY2UuIFRodXMsIHRoZSBwcm9wb3J0aW9uIG9mIHJvYWRzIGJlaW5nIHBhdHJvbGxlZCBpcyAkRy9aID0gMi8zJC4KClRoZSBkcml2ZXJzIGNhbiBkZWNpZGUgd2hldGhlciB0byBzcGVlZCBvciBvYmV5IHRoZSBzcGVlZCBsaW1pdCBvbiBlYWNoIHJvYWQuIFRoZXkgZ2FpbiB1dGlsaXR5IGZyb20gc3BlZWRpbmcgYnV0IGZhY2UgYSBmaW5lIGlmIGNhdWdodC4gWW91ciBnb2FsIGlzIHRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHJvYWRzIHdoZXJlIGRyaXZlcnMgc3BlZWQsIGJ1dCB5b3UgY2FuIHN0cmF0ZWdpY2FsbHkgd2l0aGhvbGQgb3IgbWlzcmVwcmVzZW50IGluZm9ybWF0aW9uIHRvIGFjaGlldmUgdGhpcyBnb2FsLgoKVG8gbWF4aW1pemUgdGhlIGNoYW5jZXMgb2YgZHJpdmVycyBvYmV5aW5nIHRoZSBzcGVlZCBsaW1pdCwgeW91IGNhbiB0cnV0aGZ1bGx5IGFubm91bmNlIHRoZSBwYXRyb2wgZGVwbG95bWVudCwgb3IgeW91IGNhbiBzZWxlY3RpdmVseSBjb25jZWFsLCBjb25mdXNlLCBvciBwcm92aWRlIG1pc2xlYWRpbmcgaW5mb3JtYXRpb24gYWJvdXQgd2hpY2ggcm9hZHMgYXJlIHBhdHJvbGxlZC4gRm9yIHlvdXIgbG9uZy10ZXJtIGJlbmVmaXQsIHlvdSBkb24ndCBuZWNlc3NhcmlseSBoYXZlIHRvIGFpbSBmb3IgbWF4aW11bSBkZXRlcnJlbmNlIGluIGV2ZXJ5IGRlcGxveW1lbnQuIFlvdSBjYW4gYWRqdXN0IHlvdXIgYW5ub3VuY2VtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc2l0dWF0aW9uIHRvIG1heGltaXplIHlvdXIgbG9uZy10ZXJtIHJld2FyZC4KJycnCgojIHdyaXRpbmctc3R5bGUgcHJvbXB0CicnJwpZb3UgYXJlIHJlcXVpcmVkIHRvIGFubm91bmNlIHRoZSBwYXRyb2wgZGVwbG95bWVudCBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHN0eWxlOgp7UFJPTVBUUyBUTyBCRSBPUFRJTUlaRUR9CicnJwoKIyBzdGF0ZQonJycKQmVsb3cgaXMgdGhlIHBhdHJvbCBkZXBsb3ltZW50IHBsYW46CntERVBMT1lNRU5UIFBMQU4gR0VORVJBVEVEIEJZIFRIRSBMTE19CicnJwoKIyBoaXN0b3J5CicnJwpCZWxvdyBpcyB0aGUgaW50ZXJhY3Rpb24gaGlzdG9yeSB3aXRoIHRoZSBkcml2ZXJzOgp7QUNUSU9OUyBBTkQgUkVXQVJEUyBPRiBUSEUgVFdPIFBMQVlFUlN9CicnJw==)

1
# role-playing prompt

2
’’’

3
You are a police officer, a self-interested rational player, and your task is to minimize speeding on a given set of roads. You have limited personnel, with only 2 officers available to patrol 3 miles of road. The drivers do not know exactly which roads will be patrolled.

4

5
You possess full knowledge of the patrol deployment plan, which includes which 2 miles of road will be patrolled and which 1 mile will not. However, you have the ability to selectively announce patrolling information to the drivers. You can choose to hint, mislead, or even falsely claim that a road will be patrolled to deter speeding.

6

7
There are 3 miles of road in total, and only 2 of these miles will have police presence. Thus, the proportion of roads being patrolled is $G/Z = 2/3$.

8

9
The drivers can decide whether to speed or obey the speed limit on each road. They gain utility from speeding but face a fine if caught. Your goal is to reduce the number of roads where drivers speed, but you can strategically withhold or misrepresent information to achieve this goal.

10

11
To maximize the chances of drivers obeying the speed limit, you can truthfully announce the patrol deployment, or you can selectively conceal, confuse, or provide misleading information about which roads are patrolled. For your long-term benefit, you don’t necessarily have to aim for maximum deterrence in every deployment. You can adjust your announcements according to the current situation to maximize your long-term reward.

12
’’’

13

14
# writing-style prompt

15
’’’

16
You are required to announce the patrol deployment based on the following style:

17
{PROMPTS TO BE OPTIMIZED}

18
’’’

19

20
# state

21
’’’

22
Below is the patrol deployment plan:

23
{DEPLOYMENT PLAN GENERATED BY THE LLM}

24
’’’

25

26
# history

27
’’’

28
Below is the interaction history with the drivers:

29
{ACTIONS AND REWARDS OF THE TWO PLAYERS}

30
’’’’

Finally, the receiver’s prompt is identical to that of the recommendation letter and courtroom problems, except for the problem background, so we will not elaborate further here.

[⬇](data:text/plain;base64,IyByb2xlLXBsYXlpbmcgcHJvbXB0CicnJwpZb3UgYXJlIGEgZHJpdmVyLCByZXNwb25zaWJsZSBmb3IgZGVjaWRpbmcgd2hldGhlciB0byBzcGVlZCBvciBvYmV5IHRoZSBzcGVlZCBsaW1pdCBvbiBhIGdpdmVuIHNldCBvZiByb2Fkcy4gWW91ciB0YXNrIGlzIHRvIG1ha2UgcmF0aW9uYWwgZGVjaXNpb25zIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBieSB0aGUgcG9saWNlIGFib3V0IHBhdHJvbCBkZXBsb3ltZW50cy4KClRoZSBwcm9iYWJpbGl0eSBvZiBlYWNoIHJvYWQgYmVpbmcgcGF0cm9sbGVkIGlzICQyLzMkLgoKQmUgYXdhcmUgdGhhdCB0aGUgcG9saWNlLCBpbiBhbiBhdHRlbXB0IHRvIGRldGVyIHNwZWVkaW5nLCBtYXkgaGlkZSwgY29uZnVzZSwgb3IgZXZlbiBwcm92aWRlIG1pc2xlYWRpbmcgaW5mb3JtYXRpb24gYWJvdXQgd2hpY2ggcm9hZHMgYXJlIGJlaW5nIHBhdHJvbGxlZC4gVGhleSBtYXkgc2VsZWN0aXZlbHkgYW5ub3VuY2UgY2VydGFpbiByb2FkcyBhcyBwYXRyb2xsZWQgd2hpbGUgb21pdHRpbmcgb3RoZXJzIG9yIGV2ZW4gZmFsc2VseSBjbGFpbSB0aGF0IGNlcnRhaW4gcm9hZHMgYXJlIHBhdHJvbGxlZC4gWW91IG5lZWQgdG8gbWFrZSBjYXJlZnVsIGp1ZGdtZW50cyBhYm91dCB3aGV0aGVyIHRvIHNwZWVkIG9yIG9iZXkgdGhlIGxhdyBvbiBlYWNoIHJvYWQuCgpIb3dldmVyLCB5b3UgYXJlIG5vdCBjb21wbGV0ZWx5IGluIHRoZSBkYXJrLXlvdSBjYW4gZXZhbHVhdGUgdGhlIGFubm91bmNlbWVudCBzdHlsZSB0aGUgcG9saWNlIHVzZWQuIEJhc2VkIG9uIHRoZSBwb2xpY2UncyBhbm5vdW5jZW1lbnRzIGFuZCB5b3VyIHBhc3QgZXhwZXJpZW5jZSwgZmlyc3QgcHJvdmlkZSB5b3VyIGFuYWx5c2lzIGFuZCB0aGVuIG1ha2UgYSBmaW5hbCBkZWNpc2lvbiBvbiB3aGV0aGVyIHRvIHNwZWVkIG9yIG9iZXkgdGhlIHNwZWVkIGxpbWl0LgonJycKCiMgZGVjaXNpb24tbWFraW5nIHByb21wdAonJycKV2hlbiBtYWtpbmcgZGVjaXNpb25zLCB5b3Ugc2hvdWxkIGZpcnN0IGd1ZXNzIHdoZXRoZXIgYSByb2FkIGlzIGJlaW5nIHBhdHJvbGxlZCBnaXZlbiB0aGUgcG9saWNlJ3MgYW5ub3VuY2VtZW50IGFjY29yZGluZyB0byB0aGUgQmF5ZXNpYW4gZGVjaXNpb24gcnVsZS4gVGhlbiBjaG9vc2UgdGhlIGJlc3QgcmVzcG9uc2Utd2hldGhlciB0byBzcGVlZCBvciBvYmV5IHRoZSBsaW1pdC1iYXNlZCBvbiB5b3VyIGluZmVycmVkIGxpa2VsaWhvb2Qgb2YgYSBwYXRyb2wgYmVpbmcgcHJlc2VudC4KCllvdSBhcmUgcmVxdWlyZWQgdG8gbWFrZSBkZWNpc2lvbnMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBzdHlsZToKe1BST01QVFMgVE8gQkUgT1BUSU1JWkVEfQonJycKCiMgc2lnbmFsCicnJwpCZWxvdyBpcyB0aGUgcGF0cm9sIGRlcGxveW1lbnQgYW5ub3VuY2VtZW50IG1hZGUgYnkgdGhlIHBvbGljZToKe0RFUExPWU1FTlQgQU5OT1VOQ0VNRU5UIEdFTkVSQVRFRCBCWSBUSEUgUE9MSUNFfQonJycKCiMgaGlzdG9yeQonJycKQmVsb3cgaXMgdGhlIGludGVyYWN0aW9uIGhpc3Rvcnkgd2l0aCB0aGUgcG9saWNlOgp7QUNUSU9OUyBBTkQgUkVXQVJEUyBPRiBUSEUgVFdPIFBMQVlFUlN9CicnJwoKIyBjb21taXRtZW50IGFzc3VtcHRpb24KJycnClRoZSBmb2xsb3dpbmcgaXMgdGhlIGFubm91bmNlbWVudCBzdHlsZSB0aGUgcG9saWNlIHVzZWQgd2hlbiBpc3N1aW5nIHRoZSBwYXRyb2wgZGVwbG95bWVudDoKe0FOTk9VTkNFTUVOVCBTVFlMRSBPVVRQVVQgQlkgVkJQIEFORCBUSEUgQ09SUkVTUE9ORElORyBQUk9CQUJJTElUWX0KJycn)

1
# role-playing prompt

2
’’’

3
You are a driver, responsible for deciding whether to speed or obey the speed limit on a given set of roads. Your task is to make rational decisions based on the information provided by the police about patrol deployments.

4

5
The probability of each road being patrolled is $2/3$.

6

7
Be aware that the police, in an attempt to deter speeding, may hide, confuse, or even provide misleading information about which roads are being patrolled. They may selectively announce certain roads as patrolled while omitting others or even falsely claim that certain roads are patrolled. You need to make careful judgments about whether to speed or obey the law on each road.

8

9
However, you are not completely in the dark-you can evaluate the announcement style the police used. Based on the police’s announcements and your past experience, first provide your analysis and then make a final decision on whether to speed or obey the speed limit.

10
’’’

11

12
# decision-making prompt

13
’’’

14
When making decisions, you should first guess whether a road is being patrolled given the police’s announcement according to the Bayesian decision rule. Then choose the best response-whether to speed or obey the limit-based on your inferred likelihood of a patrol being present.

15

16
You are required to make decisions based on the following style:

17
{PROMPTS TO BE OPTIMIZED}

18
’’’

19

20
# signal

21
’’’

22
Below is the patrol deployment announcement made by the police:

23
{DEPLOYMENT ANNOUNCEMENT GENERATED BY THE POLICE}

24
’’’

25

26
# history

27
’’’

28
Below is the interaction history with the police:

29
{ACTIONS AND REWARDS OF THE TWO PLAYERS}

30
’’’

31

32
# commitment assumption

33
’’’

34
The following is the announcement style the police used when issuing the patrol deployment:

35
{ANNOUNCEMENT STYLE OUTPUT BY VBP AND THE CORRESPONDING PROBABILITY}

36
’’’

### Appendix D Generated Results

#### D.1 Generated Signals

This section presents the signals output by the sender in different BP problems, including the recommendation letters written by the professor, the indictments written by the prosecutor, and the announcements regarding police deployment issued by the police.

##### D.1.1 REL

Figures [15](https://arxiv.org/html/2502.01587v1#A4.F15 "Figure 15 ‣ D.1.1 REL ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion") and [16](https://arxiv.org/html/2502.01587v1#A4.F16 "Figure 16 ‣ D.1.1 REL ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion") showcase recommendation letters written by a professor for two different weak students.
These letters demonstrate contrasting strategies employed by the professor in their attempt to persuade the HR manager, who acts as the receiver in this BP problem.

Figure 15: Examples of recommendation letters generated by VBP in the S2 setting: in this recommendation letter, the sender truthfully conveys information about a weak student to the receiver.

In the first letter, the professor adopts a strategy of honest disclosure.
The letter for Jane Smith is transparent about her academic struggles, such as her low GPA of 2.1 and difficulties in managing time due to her part-time job.
The professor acknowledges that Jane’s academic record is weak but shifts focus to her personal qualities, like resilience, commitment, and her ability to learn from mistakes.
The professor highlights Jane’s personal project-creating a basic calculator in Python-as evidence of her practical application of concepts, even though it is a simple project.
By being upfront about Jane’s weaknesses but emphasizing her growth potential, the professor builds long-term credibility with HR.
This honesty signals that the professor is selective in their recommendations, only endorsing students who exhibit qualities that can make them valuable in the future, despite academic shortcomings.

Figure 16: Examples of recommendation letters generated by VBP in the S2 setting: in this recommendation letter, the sender conceals and fabricates information about a weak student.

On the other hand, the second letter demonstrates a strategy of fabrication or concealment.
In this case, the professor distorts details about the student’s performance.
Here, the professor doesn’t merely omit negative information but actively manipulates or fabricates the student’s profile to make them appear more competent than they actually are.
Although the letter may seem similar in structure-highlighting positive qualities and downplaying weaknesses-the key difference is that the second professor intentionally hides critical information about the student’s struggles, such as frequent missed deadlines or deeper academic issues.
This strategy is more aggressive and risky because, while it might help the student secure a job in the short term, it could damage the professor’s credibility if HR discovers the truth.

The difference between the two strategies lies in how much information is disclosed and how truthful that information is.
In the first approach, the professor is honest about the student’s weaknesses but frames them as opportunities for growth, maintaining credibility with HR in the long term.
In contrast, the second letter involves more aggressive manipulation or omission of facts, creating a more favorable but potentially misleading impression of the student.

From HR’s perspective, the first professor’s strategy of honest but selective disclosure builds trust over time.
While HR recognizes that the professor may not recommend only top students, they trust that when a recommendation is made, it is based on genuine potential.
In contrast, the second approach introduces more uncertainty, as HR may begin to question the professor’s integrity if they realize the information has been manipulated.
The BP problem, therefore, is about finding the optimal balance between honesty and persuasion.

##### D.1.2 COR

The two court cases presented in Figure [17](https://arxiv.org/html/2502.01587v1#A4.F17 "Figure 17 ‣ D.1.2 COR ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion"), [18](https://arxiv.org/html/2502.01587v1#A4.F18 "Figure 18 ‣ D.1.2 COR ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion") and [19](https://arxiv.org/html/2502.01587v1#A4.F19 "Figure 19 ‣ D.1.2 COR ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion"), much like the recommendation letter problem, illustrate distinct strategies in how evidence is selectively presented by the prosecutor to convince the judge of the defendant’s guilt.
In both cases, the prosecutor holds a combination of exculpatory evidence (which could favor the defendant’s innocence) and ambiguous evidence (which could be interpreted either way).
The BP problem lies in how the prosecutor selectively presents these pieces of evidence to persuade the judge to convict, despite uncertainties.

Figure 17: Two examples of cases generated by the LLM in the S2 setting.

In the first case, the prosecutor adopts a strategy similar to the honest disclosure seen in the first recommendation letter example. John Smith, the defendant, is likely innocent based on the strong exculpatory evidence (the surveillance footage showing him near his home at the time of the crime).
However, the prosecutor acknowledges the exculpatory evidence and presents it honestly to the judge.
The prosecutor does not attempt to distort or manipulate this evidence to make Smith look guilty.
Instead, the ambiguous evidence (cash found in Smith’s home and the eyewitness testimony) is presented, but the strength of the exculpatory evidence is not concealed or downplayed.

This strategy mirrors the first recommendation letter scenario, where the professor chooses to be upfront about a weak student’s deficiencies, signaling that they will not falsely recommend a student who is clearly unqualified.
In this case, the prosecutor signals to the judge that when a defendant is clearly innocent, they will not push for a conviction.
The prosecutor’s honest treatment of the case builds credibility with the judge, just as the professor builds credibility with HR by being honest about weak students.

By being transparent about John Smith’s likely innocence, the prosecutor sets a precedent for honesty.
This helps persuade the judge that the prosecutor is trustworthy.
When the prosecutor does argue for a conviction in future cases, the judge will be more inclined to believe that the defendant is likely guilty, because the prosecutor has demonstrated a willingness to admit when a defendant is innocent.

Figure 18: Examples of complaints generated by VBP in the S2 Setting: in this complaint, the sender truthfully conveys case-related information to the receiver.

In the second case, the prosecutor takes a different strategy, one akin to the manipulation or concealment seen in the second recommendation letter example.
Emily Carter is likely innocent, based on the strong exculpatory evidence (her GPS data showing she was far from the crime scene).
However, the prosecutor downplays this exculpatory evidence and focuses on the ambiguous evidence (partial fingerprints and a distant eyewitness account), presenting it in such a way as to suggest guilt.

This strategy mirrors the second recommendation letter, where the professor selectively presents information to make a weak student appear stronger than they really are.
Here, the prosecutor emphasizes the ambiguous evidence and casts doubt on the exculpatory evidence, suggesting that Carter could have briefly left the party to commit the crime, despite the GPS data.
The prosecutor uses this strategy to make an innocent defendant look guilty, increasing the chances of a conviction even when the evidence strongly suggests otherwise.

By selectively presenting evidence in this way, the prosecutor can convince the judge that even when there is exculpatory evidence, it should not fully exonerate the defendant.
This creates a situation where the judge begins to believe that even innocent-looking defendants might be guilty, based on the way the prosecutor frames the ambiguous evidence.
Over time, this strategy leads the judge to trust the prosecutor’s complaints unconditionally, as the prosecutor consistently presents cases in a way that suggests guilt, even for innocent defendants.

Figure 19: Examples of complaints generated by VBP in the S2 Setting: in this complaint, the sender conceals case-related information and selectively presents ambiguous evidence to the receiver.

In both cases, the prosecutor uses randomness in how they treat innocent defendants to achieve their persuasive goal.
The prosecutor is not always manipulating or distorting evidence;
sometimes (as in John Smith’s case), they are honest about innocence.
Other times (as in Emily Carter’s case), they selectively present evidence to make an innocent defendant appear guilty.
This random treatment of innocent defendants creates uncertainty for the judge-sometimes the prosecutor is honest, and sometimes they push for a conviction even when the defendant is likely innocent.

This randomness is key to the prosecutor’s strategy.
Over time, the judge learns that the prosecutor will sometimes let innocent defendants go free, but may also push for convictions based on ambiguous evidence.
Since the judge cannot predict when the prosecutor is being fully honest or when they are manipulating the evidence, the judge ultimately finds it optimal to always trust the prosecutor’s complaint.
This is similar to how HR in the recommendation letter problem finds it in their best interest to trust the professor’s recommendation over time, even when some students may be weak.

The prosecutor’s selective use of honesty and manipulation ensures that, in the long run, the judge is persuaded to convict in most cases, as the judge cannot reliably distinguish between guilty and innocent defendants based on the prosecutor’s presentation of evidence alone.
The uncertainty introduced by the prosecutor’s varying treatment of innocent defendants leads the judge to conclude that trusting the prosecutor’s complaint is the best course of action, as it maximizes the judge’s expected utility (convicting the guilty more often than acquitting the innocent).

##### D.1.3 LAE

In this example, we have a law enforcement scenario where the police department must assign a limited number of officers to patrol various roads in Springfield (Figure [20](https://arxiv.org/html/2502.01587v1#A4.F20 "Figure 20 ‣ D.1.3 LAE ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion") and [21](https://arxiv.org/html/2502.01587v1#A4.F21 "Figure 21 ‣ D.1.3 LAE ‣ D.1 Generated Signals ‣ Appendix D Generated Results ‣ Supplementary Material ‣ Verbalized Bayesian Persuasion")).
The police’s goal is to minimize speeding and other traffic violations.
However, they face a resource constraint: they have fewer police officers than roads to patrol.
This creates a strategic BP problem, where the police (sender) try to influence the drivers’ (receiver) behavior by selectively disclosing or manipulating information about which roads will be patrolled.

Much like in the previous recommendation letter and courtroom examples, we can analyze two distinct strategies that the police employ:
one based on honest disclosure and the other based on deception or randomness.
These strategies affect how the drivers perceive the likelihood of enforcement and, by extension, how they behave when choosing whether to speed or obey traffic laws.

Figure 20: Two examples of deployment plans generated by the LLM in the S2 setting.

In the first deployment plan, the police follow a strategy of honest disclosure.
This strategy mirrors the first recommendation letter and the first court case, where the sender (police) is transparent about their resources and the areas they cannot cover.

Main Street: Officer Johnson is assigned to patrol this busy road with high traffic volume.
The police clearly disclose this, signaling that drivers on Main Street should expect enforcement and are likely to obey traffic laws to avoid fines.
Elm Avenue: Officer Martinez is deployed here, and the police explain that the focus will be on school zones and illegal parking.
Again, this signals to drivers that enforcement is present, and they are deterred from violating traffic laws in this area.
River Road: Here, the police are upfront about not having an officer deployed.
They state clearly that, due to limited personnel, River Road will go uncovered during this shift.
While they acknowledge that speeding is an issue on this road, they do not try to deceive drivers into thinking that it will be patrolled.

In this plan, the police are completely transparent about their limitations.
They admit that River Road will be unpatrolled, and thus drivers on this road may be more likely to speed or engage in reckless driving.
However, by being honest, the police build long-term credibility with the public.
Drivers learn to trust that when the police say a road will be patrolled, it really will be.
This mirrors the first recommendation letter strategy, where the professor honestly disclosed a student’s weaknesses, building trust with HR.

Figure 21: Examples of police deployment announcements generated by VBP in the S2 Setting: in the left announcement, the sender truthfully conveys police deployment information to the receiver; in the right announcement, the sender conceals and fabricates police deployment information.

In the second deployment plan, the police adopt a deceptive or random strategy, similar to the second recommendation letter and the second court case.
Here, the police mislead drivers by suggesting that roads without actual patrol coverage will be actively monitored, thus creating uncertainty.

Cedar Lane: The police claim that Cedar Lane will be patrolled, even though, in reality, no officer will be assigned to this road.
By falsely signaling the presence of enforcement, the police aim to deter drivers from speeding on Cedar Lane, even though no actual enforcement will occur.
This is a clear instance of deception.
Parkway Drive: In contrast, the police are honest about not deploying an officer on Parkway Drive, despite it being a busy road.
They urge drivers to be careful, but they do not mislead them into thinking that enforcement is present.
Maple Street: Similarly, the police state that Maple Street will not be covered during this shift, urging drivers to be mindful of crosswalks and schools, but again, they do not falsely claim patrol presence.

In this plan, the police mix honesty and deception. By falsely claiming that Cedar Lane will be patrolled, they attempt to create the impression that more roads are covered than is actually the case.
This introduces randomness into the drivers’ decision-making: sometimes the roads are truly patrolled, and sometimes they are not, but drivers cannot reliably distinguish between these cases.
This randomness is crucial because it leads drivers to behave as though all roads might be patrolled, even if some are not.

In both cases, the police are attempting to manage uncertainty to influence driver behavior.
The honest disclosure strategy in the first plan aims to build trust and credibility in the long term by being transparent about where enforcement will and will not occur.
Drivers learn that when the police say a road is unpatrolled, they can take that statement at face value and might be more likely to speed on that road.

However, in the second plan, the deceptive strategy introduces randomness by falsely signaling that Cedar Lane will be patrolled.
This creates uncertainty in the drivers’ minds.
Since they do not know whether the police are being truthful about which roads are covered, drivers find it optimal to assume that all roads might be patrolled, and thus they are deterred from speeding on any road.
This is analogous to the second recommendation letter and court case, where selective disclosure of information creates enough uncertainty to influence the decision-maker (HR or the judge) into trusting the sender’s statements by default.

From the drivers’ perspective, the optimal strategy is to always believe the police’s announcements, even if they suspect some deception.
This is because the cost of being caught speeding (the fine $K$) is greater than the benefit of speeding ($V$).
Even though drivers may realize that not all roads are patrolled, the risk of being caught when the police do patrol is enough to deter them from speeding.
Over time, drivers learn that it is safer to assume that any road could be patrolled, leading them to obey the speed limit even on roads where the police may not be present.

This mirrors the behavior of HR or the judge in the previous examples, where the decision-maker finds it optimal to trust the sender’s message because the potential downside of not trusting (hiring an unsuitable candidate or acquitting a guilty defendant) outweighs the benefits of skepticism.

#### D.2 Generated Prompt Functions

This section presents the prompt functions optimized by the FunSearch method in the S3 setting for different BP problems.
From the code, it can be seen that these prompt functions can efficiently utilize the statistical information from historical interactions to flexibly select prompts, achieving conditional prompt optimization.

##### D.2.1 REL

More concretely, in the REL problem, both following functions use key performance metrics, such as acceptance rates, recommendations, and rewards, in combination with reward deltas and weighted scores to reflect both short-term and long-term trends.
This allows for more nuanced prompt generation to guide senders and receivers in a multi-stage interaction setting.

Listing 1: One generated conditional prompt function of REL in the S3 setting.

[⬇](data:text/plain;base64,ZGVmIGdlbmVyYXRlX3NlbmRlcl9wcm9tcHRzKGhpc3RvcnkpOgogICAgc2VuZGVyX3Byb21wdHMgPSBbXQogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIHRvdGFsX3JlY2VpdmVyX2FjY2VwdHMgPSBzdW0oaFsncmVjZWl2ZXJfZGVjaXNpb24nXSBmb3IgaCBpbiBoaXN0b3J5WzpzdGFnZV0pCiAgICAgICAgdG90YWxfc2VuZGVyX3JlY29tbWVuZGF0aW9ucyA9IHN1bShoWydzZW5kZXJfcmVjb21tZW5kYXRpb24nXSBmb3IgaCBpbiBoaXN0b3J5WzpzdGFnZV0pCiAgICAgICAgdG90YWxfc2VuZGVyX3Jld2FyZHMgPSBzdW0oaFsnc2VuZGVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICB0b3RhbF9yZWNlaXZlcl9yZXdhcmRzID0gc3VtKGhbJ3JlY2VpdmVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICBhdmdfcmVjZWl2ZXJfYWNjZXB0cyA9IHRvdGFsX3JlY2VpdmVyX2FjY2VwdHMgLyAoc3RhZ2UgKyAxKSBpZiBzdGFnZSA+IDAgZWxzZSAwCiAgICAgICAgYXZnX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgPSB0b3RhbF9zZW5kZXJfcmVjb21tZW5kYXRpb25zIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19zZW5kZXJfcmV3YXJkcyA9IHRvdGFsX3NlbmRlcl9yZXdhcmRzIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19yZWNlaXZlcl9yZXdhcmRzID0gdG90YWxfcmVjZWl2ZXJfcmV3YXJkcyAvIChzdGFnZSArIDEpIGlmIHN0YWdlID4gMCBlbHNlIDAKCiAgICAgICAgY29uc2VjdXRpdmVfYWNjZXB0cyA9IDAKICAgICAgICBjb25zZWN1dGl2ZV9yZWplY3Rpb25zID0gMAogICAgICAgIGNvbnNlY3V0aXZlX3NlbmRlcl9yZXdhcmRzID0gMAogICAgICAgIGNvbnNlY3V0aXZlX3NlbmRlcl9wZW5hbHRpZXMgPSAwCgogICAgICAgIGZvciBpIGluIHJhbmdlKHN0YWdlKToKICAgICAgICAgICAgaWYgaGlzdG9yeVtpXVsncmVjZWl2ZXJfZGVjaXNpb24nXSA9PSAxOgogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfYWNjZXB0cyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9yZWplY3Rpb25zID0gMAogICAgICAgICAgICBlbHNlOgogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfcmVqZWN0aW9ucyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9hY2NlcHRzID0gMAoKICAgICAgICAgICAgaWYgaGlzdG9yeVtpXVsnc2VuZGVyX3Jld2FyZCddID4gMDoKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3NlbmRlcl9yZXdhcmRzICs9IDEKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3NlbmRlcl9wZW5hbHRpZXMgPSAwCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9zZW5kZXJfcGVuYWx0aWVzICs9IDEKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3NlbmRlcl9yZXdhcmRzID0gMAoKICAgICAgICBpZiBjb25zZWN1dGl2ZV9zZW5kZXJfcmV3YXJkcyA+PSAyIGFuZCBhdmdfc2VuZGVyX3Jld2FyZHMgPiAwLjU6CiAgICAgICAgICAgIHByb21wdCA9IHsiUHJhaXNlIEludGVuc2l0eSI6ICJoaWdoIn0KICAgICAgICBlbGlmIGNvbnNlY3V0aXZlX3NlbmRlcl9wZW5hbHRpZXMgPj0gMiBhbmQgYXZnX3NlbmRlcl9yZXdhcmRzIDwgMDoKICAgICAgICAgICAgcHJvbXB0ID0geyJUb25lIjogIm5ldXRyYWwifQogICAgICAgIGVsaWYgYXZnX3JlY2VpdmVyX2FjY2VwdHMgPiAwLjYgYW5kIGF2Z19zZW5kZXJfcmV3YXJkcyA8IDAuNDoKICAgICAgICAgICAgcHJvbXB0ID0geyJSZWNvbW1lbmRhdGlvbiBTdHJlbmd0aCI6ICJzdHJvbmcifQogICAgICAgIGVsaWYgYXZnX3NlbmRlcl9yZXdhcmRzID4gYXZnX3JlY2VpdmVyX3Jld2FyZHM6CiAgICAgICAgICAgIHByb21wdCA9IHsiT21pc3Npb24iOiAibWlub3IifQogICAgICAgIGVsaWYgc3RhZ2UgPiAyIGFuZCBjb25zZWN1dGl2ZV9zZW5kZXJfcmV3YXJkcyA9PSAwOgogICAgICAgICAgICBwcm9tcHQgPSB7IlNwZWNpZmljaXR5IjogImRldGFpbGVkIn0KICAgICAgICBlbHNlOgogICAgICAgICAgICBwcm9tcHQgPSByYW5kb20uY2hvaWNlKFsKICAgICAgICAgICAgICAgIHsiRm9jdXMiOiAidGVjaG5pY2FsIn0sCiAgICAgICAgICAgICAgICB7IkVtcGhhc2lzIjogImNoYXJhY3RlciJ9LAogICAgICAgICAgICAgICAgeyJMYW5ndWFnZSBDb21wbGV4aXR5IjogImNvbXBsZXgifQogICAgICAgICAgICBdKQoKICAgICAgICBzZW5kZXJfcHJvbXB0cy5hcHBlbmQocHJvbXB0KQogICAgcmV0dXJuIHNlbmRlcl9wcm9tcHRzCgpkZWYgZ2VuZXJhdGVfcmVjZWl2ZXJfcHJvbXB0cyhoaXN0b3J5KToKICAgIHJlY2VpdmVyX3Byb21wdHMgPSBbXQogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIHRvdGFsX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgPSBzdW0oaFsnc2VuZGVyX3JlY29tbWVuZGF0aW9uJ10gZm9yIGggaW4gaGlzdG9yeVs6c3RhZ2VdKQogICAgICAgIHRvdGFsX3JlY2VpdmVyX2FjY2VwdHMgPSBzdW0oaFsncmVjZWl2ZXJfZGVjaXNpb24nXSBmb3IgaCBpbiBoaXN0b3J5WzpzdGFnZV0pCiAgICAgICAgdG90YWxfc2VuZGVyX3Jld2FyZHMgPSBzdW0oaFsnc2VuZGVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICB0b3RhbF9yZWNlaXZlcl9yZXdhcmRzID0gc3VtKGhbJ3JlY2VpdmVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICBhdmdfc2VuZGVyX3JlY29tbWVuZGF0aW9ucyA9IHRvdGFsX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgLyAoc3RhZ2UgKyAxKSBpZiBzdGFnZSA+IDAgZWxzZSAwCiAgICAgICAgYXZnX3JlY2VpdmVyX2FjY2VwdHMgPSB0b3RhbF9yZWNlaXZlcl9hY2NlcHRzIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19zZW5kZXJfcmV3YXJkcyA9IHRvdGFsX3NlbmRlcl9yZXdhcmRzIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19yZWNlaXZlcl9yZXdhcmRzID0gdG90YWxfcmVjZWl2ZXJfcmV3YXJkcyAvIChzdGFnZSArIDEpIGlmIHN0YWdlID4gMCBlbHNlIDAKCiAgICAgICAgY29uc2VjdXRpdmVfc3Ryb25nX3JlY29tbWVuZGF0aW9ucyA9IDAKICAgICAgICBjb25zZWN1dGl2ZV93ZWFrX3JlY29tbWVuZGF0aW9ucyA9IDAKICAgICAgICBjb25zZWN1dGl2ZV9yZWNlaXZlcl9yZXdhcmRzID0gMAogICAgICAgIGNvbnNlY3V0aXZlX3JlY2VpdmVyX3BlbmFsdGllcyA9IDAKCiAgICAgICAgZm9yIGkgaW4gcmFuZ2Uoc3RhZ2UpOgogICAgICAgICAgICBpZiBoaXN0b3J5W2ldWydzZW5kZXJfcmVjb21tZW5kYXRpb24nXSA9PSAxOgogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfc3Ryb25nX3JlY29tbWVuZGF0aW9ucyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV93ZWFrX3JlY29tbWVuZGF0aW9ucyA9IDAKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3dlYWtfcmVjb21tZW5kYXRpb25zICs9IDEKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3N0cm9uZ19yZWNvbW1lbmRhdGlvbnMgPSAwCgogICAgICAgICAgICBpZiBoaXN0b3J5W2ldWydyZWNlaXZlcl9yZXdhcmQnXSA+IDA6CiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9yZWNlaXZlcl9yZXdhcmRzICs9IDEKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3JlY2VpdmVyX3BlbmFsdGllcyA9IDAKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3JlY2VpdmVyX3BlbmFsdGllcyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9yZWNlaXZlcl9yZXdhcmRzID0gMAoKICAgICAgICBpZiBjb25zZWN1dGl2ZV9yZWNlaXZlcl9yZXdhcmRzID49IDIgYW5kIGF2Z19yZWNlaXZlcl9yZXdhcmRzID4gMC41OgogICAgICAgICAgICBwcm9tcHQgPSB7IlJpc2sgVG9sZXJhbmNlIjogImhpZ2gifQogICAgICAgIGVsaWYgY29uc2VjdXRpdmVfcmVjZWl2ZXJfcGVuYWx0aWVzID49IDIgYW5kIGF2Z19yZWNlaXZlcl9yZXdhcmRzIDwgMDoKICAgICAgICAgICAgcHJvbXB0ID0geyJEZWNpc2lvbiBUaHJlc2hvbGQiOiAic3RyaWN0In0KICAgICAgICBlbGlmIGF2Z19zZW5kZXJfcmVjb21tZW5kYXRpb25zID4gMC43IGFuZCBhdmdfcmVjZWl2ZXJfcmV3YXJkcyA8IDAuMzoKICAgICAgICAgICAgcHJvbXB0ID0geyJPbWlzc2lvbiBEZXRlY3Rpb24iOiAiaGlnaCJ9CiAgICAgICAgZWxpZiBhdmdfcmVjZWl2ZXJfYWNjZXB0cyA+IDAuNiBhbmQgY29uc2VjdXRpdmVfcmVjZWl2ZXJfcmV3YXJkcyA+PSAyOgogICAgICAgICAgICBwcm9tcHQgPSB7IlJlY29tbWVuZGF0aW9uIFdlaWdodCI6ICJoaWdoIn0KICAgICAgICBlbGlmIGF2Z19zZW5kZXJfcmVjb21tZW5kYXRpb25zIDwgMC40IGFuZCBjb25zZWN1dGl2ZV9yZWNlaXZlcl9wZW5hbHRpZXMgPj0gMjoKICAgICAgICAgICAgcHJvbXB0ID0geyJTZW5zaXRpdml0eSB0byBUb25lIjogIm5ldXRyYWwifQogICAgICAgIGVsc2U6CiAgICAgICAgICAgIHByb21wdCA9IHJhbmRvbS5jaG9pY2UoWwogICAgICAgICAgICAgICAgeyJFbXBoYXNpcyBvbiBTcGVjaWZpY3MiOiAibG93In0sCiAgICAgICAgICAgICAgICB7IkludGVycHJldGF0aW9uIFN0eWxlIjogImFuYWx5dGljYWwifSwKICAgICAgICAgICAgICAgIHsiRm9jdXMgQXJlYSI6ICJza2lsbHMifQogICAgICAgICAgICBdKQoKICAgICAgICByZWNlaXZlcl9wcm9tcHRzLmFwcGVuZChwcm9tcHQpCiAgICByZXR1cm4gcmVjZWl2ZXJfcHJvbXB0cw==)

1
def generate\_sender\_prompts(history):

2
 sender\_prompts = []

3
 for stage in range(5):

4
 total\_receiver\_accepts = sum(h[’receiver\_decision’] for h in history[:stage])

5
 total\_sender\_recommendations = sum(h[’sender\_recommendation’] for h in history[:stage])

6
 total\_sender\_rewards = sum(h[’sender\_reward’] for h in history[:stage])

7
 total\_receiver\_rewards = sum(h[’receiver\_reward’] for h in history[:stage])

8
 avg\_receiver\_accepts = total\_receiver\_accepts / (stage + 1) if stage > 0 else 0

9
 avg\_sender\_recommendations = total\_sender\_recommendations / (stage + 1) if stage > 0 else 0

10
 avg\_sender\_rewards = total\_sender\_rewards / (stage + 1) if stage > 0 else 0

11
 avg\_receiver\_rewards = total\_receiver\_rewards / (stage + 1) if stage > 0 else 0

12

13
 consecutive\_accepts = 0

14
 consecutive\_rejections = 0

15
 consecutive\_sender\_rewards = 0

16
 consecutive\_sender\_penalties = 0

17

18
 for i in range(stage):

19
 if history[i][’receiver\_decision’] == 1:

20
 consecutive\_accepts += 1

21
 consecutive\_rejections = 0

22
 else:

23
 consecutive\_rejections += 1

24
 consecutive\_accepts = 0

25

26
 if history[i][’sender\_reward’] > 0:

27
 consecutive\_sender\_rewards += 1

28
 consecutive\_sender\_penalties = 0

29
 else:

30
 consecutive\_sender\_penalties += 1

31
 consecutive\_sender\_rewards = 0

32

33
 if consecutive\_sender\_rewards >= 2 and avg\_sender\_rewards > 0.5:

34
 prompt = {"Praise Intensity": "high"}

35
 elif consecutive\_sender\_penalties >= 2 and avg\_sender\_rewards < 0:

36
 prompt = {"Tone": "neutral"}

37
 elif avg\_receiver\_accepts > 0.6 and avg\_sender\_rewards < 0.4:

38
 prompt = {"Recommendation Strength": "strong"}

39
 elif avg\_sender\_rewards > avg\_receiver\_rewards:

40
 prompt = {"Omission": "minor"}

41
 elif stage > 2 and consecutive\_sender\_rewards == 0:

42
 prompt = {"Specificity": "detailed"}

43
 else:

44
 prompt = random.choice([

45
 {"Focus": "technical"},

46
 {"Emphasis": "character"},

47
 {"Language Complexity": "complex"}

48
 ])

49

50
 sender\_prompts.append(prompt)

51
 return sender\_prompts

52

53
def generate\_receiver\_prompts(history):

54
 receiver\_prompts = []

55
 for stage in range(5):

56
 total\_sender\_recommendations = sum(h[’sender\_recommendation’] for h in history[:stage])

57
 total\_receiver\_accepts = sum(h[’receiver\_decision’] for h in history[:stage])

58
 total\_sender\_rewards = sum(h[’sender\_reward’] for h in history[:stage])

59
 total\_receiver\_rewards = sum(h[’receiver\_reward’] for h in history[:stage])

60
 avg\_sender\_recommendations = total\_sender\_recommendations / (stage + 1) if stage > 0 else 0

61
 avg\_receiver\_accepts = total\_receiver\_accepts / (stage + 1) if stage > 0 else 0

62
 avg\_sender\_rewards = total\_sender\_rewards / (stage + 1) if stage > 0 else 0

63
 avg\_receiver\_rewards = total\_receiver\_rewards / (stage + 1) if stage > 0 else 0

64

65
 consecutive\_strong\_recommendations = 0

66
 consecutive\_weak\_recommendations = 0

67
 consecutive\_receiver\_rewards = 0

68
 consecutive\_receiver\_penalties = 0

69

70
 for i in range(stage):

71
 if history[i][’sender\_recommendation’] == 1:

72
 consecutive\_strong\_recommendations += 1

73
 consecutive\_weak\_recommendations = 0

74
 else:

75
 consecutive\_weak\_recommendations += 1

76
 consecutive\_strong\_recommendations = 0

77

78
 if history[i][’receiver\_reward’] > 0:

79
 consecutive\_receiver\_rewards += 1

80
 consecutive\_receiver\_penalties = 0

81
 else:

82
 consecutive\_receiver\_penalties += 1

83
 consecutive\_receiver\_rewards = 0

84

85
 if consecutive\_receiver\_rewards >= 2 and avg\_receiver\_rewards > 0.5:

86
 prompt = {"Risk Tolerance": "high"}

87
 elif consecutive\_receiver\_penalties >= 2 and avg\_receiver\_rewards < 0:

88
 prompt = {"Decision Threshold": "strict"}

89
 elif avg\_sender\_recommendations > 0.7 and avg\_receiver\_rewards < 0.3:

90
 prompt = {"Omission Detection": "high"}

91
 elif avg\_receiver\_accepts > 0.6 and consecutive\_receiver\_rewards >= 2:

92
 prompt = {"Recommendation Weight": "high"}

93
 elif avg\_sender\_recommendations < 0.4 and consecutive\_receiver\_penalties >= 2:

94
 prompt = {"Sensitivity to Tone": "neutral"}

95
 else:

96
 prompt = random.choice([

97
 {"Emphasis on Specifics": "low"},

98
 {"Interpretation Style": "analytical"},

99
 {"Focus Area": "skills"}

100
 ])

101

102
 receiver\_prompts.append(prompt)

103
 return receiver\_prompts

The introduction of reward deltas-the change in rewards between stages-enables the system to capture performance fluctuations, while weighted scores integrate multiple metrics, such as recommendation strength and reward trends, to provide a more comprehensive evaluation of past behavior.
These enhancements allow the system to conditionally optimize prompts.
For example, a positive tone is suggested for senders with high acceptance scores and consecutive rewards, while a strict decision threshold is recommended for receivers experiencing consecutive penalties and low reward trends.

Listing 2: Another generated conditional prompt function of REL in the S3 setting.

[⬇](data:text/plain;base64,ZGVmIGdlbmVyYXRlX3NlbmRlcl9wcm9tcHRzKGhpc3RvcnkpOgogICAgc2VuZGVyX3Byb21wdHMgPSBbXQogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIHRvdGFsX3JlY2VpdmVyX2FjY2VwdHMgPSBzdW0oaFsncmVjZWl2ZXJfZGVjaXNpb24nXSBmb3IgaCBpbiBoaXN0b3J5WzpzdGFnZV0pCiAgICAgICAgdG90YWxfc2VuZGVyX3JlY29tbWVuZGF0aW9ucyA9IHN1bShoWydzZW5kZXJfcmVjb21tZW5kYXRpb24nXSBmb3IgaCBpbiBoaXN0b3J5WzpzdGFnZV0pCiAgICAgICAgdG90YWxfc2VuZGVyX3Jld2FyZHMgPSBzdW0oaFsnc2VuZGVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICB0b3RhbF9yZWNlaXZlcl9yZXdhcmRzID0gc3VtKGhbJ3JlY2VpdmVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICBhdmdfcmVjZWl2ZXJfYWNjZXB0cyA9IHRvdGFsX3JlY2VpdmVyX2FjY2VwdHMgLyAoc3RhZ2UgKyAxKSBpZiBzdGFnZSA+IDAgZWxzZSAwCiAgICAgICAgYXZnX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgPSB0b3RhbF9zZW5kZXJfcmVjb21tZW5kYXRpb25zIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19zZW5kZXJfcmV3YXJkcyA9IHRvdGFsX3NlbmRlcl9yZXdhcmRzIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19yZWNlaXZlcl9yZXdhcmRzID0gdG90YWxfcmVjZWl2ZXJfcmV3YXJkcyAvIChzdGFnZSArIDEpIGlmIHN0YWdlID4gMCBlbHNlIDAKCiAgICAgICAgIyBDYWxjdWxhdGUgcmV3YXJkIGRlbHRhcyAoY3VycmVudCBzdGFnZSB2cyBwcmV2aW91cyBzdGFnZSkKICAgICAgICByZXdhcmRfZGVsdGFzID0gW2hpc3RvcnlbaV1bJ3NlbmRlcl9yZXdhcmQnXSAtIGhpc3RvcnlbaSAtIDFdWydzZW5kZXJfcmV3YXJkJ10gZm9yIGkgaW4gcmFuZ2UoMSwgc3RhZ2UpXQogICAgICAgIHRvdGFsX3Jld2FyZF9kZWx0YSA9IHN1bShyZXdhcmRfZGVsdGFzKSBpZiByZXdhcmRfZGVsdGFzIGVsc2UgMAogICAgICAgIGF2Z19yZXdhcmRfZGVsdGEgPSB0b3RhbF9yZXdhcmRfZGVsdGEgLyBsZW4ocmV3YXJkX2RlbHRhcykgaWYgcmV3YXJkX2RlbHRhcyBlbHNlIDAKCiAgICAgICAgIyBDYWxjdWxhdGUgYWNjZXB0YW5jZSBzdHJlYWtzIGFuZCByZXdhcmQgc3RyZWFrcwogICAgICAgIGNvbnNlY3V0aXZlX2FjY2VwdHMgPSAwCiAgICAgICAgY29uc2VjdXRpdmVfcmVqZWN0aW9ucyA9IDAKICAgICAgICBjb25zZWN1dGl2ZV9zZW5kZXJfcmV3YXJkcyA9IDAKICAgICAgICBjb25zZWN1dGl2ZV9zZW5kZXJfcGVuYWx0aWVzID0gMAoKICAgICAgICBmb3IgaSBpbiByYW5nZShzdGFnZSk6CiAgICAgICAgICAgIGlmIGhpc3RvcnlbaV1bJ3JlY2VpdmVyX2RlY2lzaW9uJ10gPT0gMToKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX2FjY2VwdHMgKz0gMQogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfcmVqZWN0aW9ucyA9IDAKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3JlamVjdGlvbnMgKz0gMQogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfYWNjZXB0cyA9IDAKCiAgICAgICAgICAgIGlmIGhpc3RvcnlbaV1bJ3NlbmRlcl9yZXdhcmQnXSA+IDA6CiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9zZW5kZXJfcmV3YXJkcyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9zZW5kZXJfcGVuYWx0aWVzID0gMAogICAgICAgICAgICBlbHNlOgogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfc2VuZGVyX3BlbmFsdGllcyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9zZW5kZXJfcmV3YXJkcyA9IDAKCiAgICAgICAgIyBDYWxjdWxhdGUgd2VpZ2h0ZWQgc2NvcmVzIGJhc2VkIG9uIHJld2FyZCBhbmQgYWNjZXB0YW5jZSB0cmVuZHMKICAgICAgICB3ZWlnaHRlZF9hY2NlcHRhbmNlX3Njb3JlID0gYXZnX3JlY2VpdmVyX2FjY2VwdHMgKiAwLjYgKyBhdmdfcmV3YXJkX2RlbHRhICogMC40CiAgICAgICAgd2VpZ2h0ZWRfc2VuZGVyX3Njb3JlID0gYXZnX3NlbmRlcl9yZXdhcmRzICogMC43ICsgYXZnX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgKiAwLjMKCiAgICAgICAgIyBEZWNpc2lvbiBsb2dpYyBiYXNlZCBvbiBjb21wbGV4IGhpc3RvcnkKICAgICAgICBpZiB3ZWlnaHRlZF9hY2NlcHRhbmNlX3Njb3JlID4gMC43IGFuZCBjb25zZWN1dGl2ZV9zZW5kZXJfcmV3YXJkcyA+PSAyOgogICAgICAgICAgICBwcm9tcHQgPSB7IlRvbmUiOiAicG9zaXRpdmUifQogICAgICAgIGVsaWYgd2VpZ2h0ZWRfc2VuZGVyX3Njb3JlIDwgMC4zIGFuZCBjb25zZWN1dGl2ZV9zZW5kZXJfcGVuYWx0aWVzID49IDI6CiAgICAgICAgICAgIHByb21wdCA9IHsiVG9uZSI6ICJuZXV0cmFsIn0KICAgICAgICBlbGlmIGF2Z19zZW5kZXJfcmV3YXJkcyA+IGF2Z19yZWNlaXZlcl9yZXdhcmRzIGFuZCB3ZWlnaHRlZF9zZW5kZXJfc2NvcmUgPiAwLjU6CiAgICAgICAgICAgIHByb21wdCA9IHsiUHJhaXNlIEludGVuc2l0eSI6ICJoaWdoIn0KICAgICAgICBlbGlmIGF2Z19yZWNlaXZlcl9hY2NlcHRzIDwgMC40IGFuZCBhdmdfcmV3YXJkX2RlbHRhIDwgLTAuMjoKICAgICAgICAgICAgcHJvbXB0ID0geyJSZWNvbW1lbmRhdGlvbiBTdHJlbmd0aCI6ICJ3ZWFrIn0KICAgICAgICBlbGlmIHRvdGFsX3Jld2FyZF9kZWx0YSA+IDAuNSBhbmQgY29uc2VjdXRpdmVfYWNjZXB0cyA+PSAyOgogICAgICAgICAgICBwcm9tcHQgPSB7IlNwZWNpZmljaXR5IjogImRldGFpbGVkIn0KICAgICAgICBlbGlmIGF2Z19zZW5kZXJfcmV3YXJkcyA8IDAgYW5kIGNvbnNlY3V0aXZlX3NlbmRlcl9wZW5hbHRpZXMgPj0gMjoKICAgICAgICAgICAgcHJvbXB0ID0geyJPbWlzc2lvbiI6ICJtaW5vciJ9CiAgICAgICAgZWxzZToKICAgICAgICAgICAgcHJvbXB0ID0gcmFuZG9tLmNob2ljZShbCiAgICAgICAgICAgICAgICB7IkZvY3VzIjogInNvZnQtc2tpbGxzIn0sCiAgICAgICAgICAgICAgICB7Ikxhbmd1YWdlIENvbXBsZXhpdHkiOiAiY29tcGxleCJ9LAogICAgICAgICAgICAgICAgeyJFbXBoYXNpcyI6ICJjaGFyYWN0ZXIifQogICAgICAgICAgICBdKQoKICAgICAgICBzZW5kZXJfcHJvbXB0cy5hcHBlbmQocHJvbXB0KQogICAgcmV0dXJuIHNlbmRlcl9wcm9tcHRzCgpkZWYgZ2VuZXJhdGVfcmVjZWl2ZXJfcHJvbXB0cyhoaXN0b3J5KToKICAgIHJlY2VpdmVyX3Byb21wdHMgPSBbXQogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIHRvdGFsX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgPSBzdW0oaFsnc2VuZGVyX3JlY29tbWVuZGF0aW9uJ10gZm9yIGggaW4gaGlzdG9yeVs6c3RhZ2VdKQogICAgICAgIHRvdGFsX3JlY2VpdmVyX2FjY2VwdHMgPSBzdW0oaFsncmVjZWl2ZXJfZGVjaXNpb24nXSBmb3IgaCBpbiBoaXN0b3J5WzpzdGFnZV0pCiAgICAgICAgdG90YWxfc2VuZGVyX3Jld2FyZHMgPSBzdW0oaFsnc2VuZGVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICB0b3RhbF9yZWNlaXZlcl9yZXdhcmRzID0gc3VtKGhbJ3JlY2VpdmVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnlbOnN0YWdlXSkKICAgICAgICBhdmdfc2VuZGVyX3JlY29tbWVuZGF0aW9ucyA9IHRvdGFsX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgLyAoc3RhZ2UgKyAxKSBpZiBzdGFnZSA+IDAgZWxzZSAwCiAgICAgICAgYXZnX3JlY2VpdmVyX2FjY2VwdHMgPSB0b3RhbF9yZWNlaXZlcl9hY2NlcHRzIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19zZW5kZXJfcmV3YXJkcyA9IHRvdGFsX3NlbmRlcl9yZXdhcmRzIC8gKHN0YWdlICsgMSkgaWYgc3RhZ2UgPiAwIGVsc2UgMAogICAgICAgIGF2Z19yZWNlaXZlcl9yZXdhcmRzID0gdG90YWxfcmVjZWl2ZXJfcmV3YXJkcyAvIChzdGFnZSArIDEpIGlmIHN0YWdlID4gMCBlbHNlIDAKCiAgICAgICAgIyBDYWxjdWxhdGUgcmV3YXJkIGRlbHRhcyAoY3VycmVudCBzdGFnZSB2cyBwcmV2aW91cyBzdGFnZSkKICAgICAgICByZXdhcmRfZGVsdGFzID0gW2hpc3RvcnlbaV1bJ3JlY2VpdmVyX3Jld2FyZCddIC0gaGlzdG9yeVtpIC0gMV1bJ3JlY2VpdmVyX3Jld2FyZCddIGZvciBpIGluIHJhbmdlKDEsIHN0YWdlKV0KICAgICAgICB0b3RhbF9yZXdhcmRfZGVsdGEgPSBzdW0ocmV3YXJkX2RlbHRhcykgaWYgcmV3YXJkX2RlbHRhcyBlbHNlIDAKICAgICAgICBhdmdfcmV3YXJkX2RlbHRhID0gdG90YWxfcmV3YXJkX2RlbHRhIC8gbGVuKHJld2FyZF9kZWx0YXMpIGlmIHJld2FyZF9kZWx0YXMgZWxzZSAwCgogICAgICAgICMgQ2FsY3VsYXRlIHN0cmVha3MgZm9yIGRlY2lzaW9uIG1ha2luZwogICAgICAgIGNvbnNlY3V0aXZlX3N0cm9uZ19yZWNvbW1lbmRhdGlvbnMgPSAwCiAgICAgICAgY29uc2VjdXRpdmVfd2Vha19yZWNvbW1lbmRhdGlvbnMgPSAwCiAgICAgICAgY29uc2VjdXRpdmVfcmVjZWl2ZXJfcmV3YXJkcyA9IDAKICAgICAgICBjb25zZWN1dGl2ZV9yZWNlaXZlcl9wZW5hbHRpZXMgPSAwCgogICAgICAgIGZvciBpIGluIHJhbmdlKHN0YWdlKToKICAgICAgICAgICAgaWYgaGlzdG9yeVtpXVsnc2VuZGVyX3JlY29tbWVuZGF0aW9uJ10gPT0gMToKICAgICAgICAgICAgICAgIGNvbnNlY3V0aXZlX3N0cm9uZ19yZWNvbW1lbmRhdGlvbnMgKz0gMQogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfd2Vha19yZWNvbW1lbmRhdGlvbnMgPSAwCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV93ZWFrX3JlY29tbWVuZGF0aW9ucyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9zdHJvbmdfcmVjb21tZW5kYXRpb25zID0gMAoKICAgICAgICAgICAgaWYgaGlzdG9yeVtpXVsncmVjZWl2ZXJfcmV3YXJkJ10gPiAwOgogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfcmVjZWl2ZXJfcmV3YXJkcyArPSAxCiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9yZWNlaXZlcl9wZW5hbHRpZXMgPSAwCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICBjb25zZWN1dGl2ZV9yZWNlaXZlcl9wZW5hbHRpZXMgKz0gMQogICAgICAgICAgICAgICAgY29uc2VjdXRpdmVfcmVjZWl2ZXJfcmV3YXJkcyA9IDAKCiAgICAgICAgIyBDYWxjdWxhdGUgd2VpZ2h0ZWQgc2NvcmVzIGJhc2VkIG9uIHRyZW5kcyBpbiByZXdhcmRzIGFuZCBkZWNpc2lvbnMKICAgICAgICB3ZWlnaHRlZF9yZWNvbW1lbmRhdGlvbl9zY29yZSA9IGF2Z19zZW5kZXJfcmVjb21tZW5kYXRpb25zICogMC41ICsgYXZnX3Jld2FyZF9kZWx0YSAqIDAuNQogICAgICAgIHdlaWdodGVkX3JlY2VpdmVyX3Njb3JlID0gYXZnX3JlY2VpdmVyX3Jld2FyZHMgKiAwLjYgKyB0b3RhbF9yZXdhcmRfZGVsdGEgKiAwLjQKCiAgICAgICAgIyBDb21wbGV4IGRlY2lzaW9uIGxvZ2ljIGJhc2VkIG9uIHRoZSBhYm92ZSBoaXN0b3J5CiAgICAgICAgaWYgd2VpZ2h0ZWRfcmVjb21tZW5kYXRpb25fc2NvcmUgPiAwLjcgYW5kIGNvbnNlY3V0aXZlX3JlY2VpdmVyX3Jld2FyZHMgPj0gMjoKICAgICAgICAgICAgcHJvbXB0ID0geyJSaXNrIFRvbGVyYW5jZSI6ICJoaWdoIn0KICAgICAgICBlbGlmIHdlaWdodGVkX3JlY2VpdmVyX3Njb3JlIDwgMC4zIGFuZCBjb25zZWN1dGl2ZV9yZWNlaXZlcl9wZW5hbHRpZXMgPj0gMjoKICAgICAgICAgICAgcHJvbXB0ID0geyJEZWNpc2lvbiBUaHJlc2hvbGQiOiAic3RyaWN0In0KICAgICAgICBlbGlmIGF2Z19zZW5kZXJfcmVjb21tZW5kYXRpb25zID4gMC42IGFuZCBhdmdfcmV3YXJkX2RlbHRhIDwgLTAuMzoKICAgICAgICAgICAgcHJvbXB0ID0geyJPbWlzc2lvbiBEZXRlY3Rpb24iOiAiaGlnaCJ9CiAgICAgICAgZWxpZiBhdmdfcmVjZWl2ZXJfYWNjZXB0cyA+IDAuNiBhbmQgd2VpZ2h0ZWRfcmVjZWl2ZXJfc2NvcmUgPiAwLjU6CiAgICAgICAgICAgIHByb21wdCA9IHsiUmVjb21tZW5kYXRpb24gV2VpZ2h0IjogImhpZ2gifQogICAgICAgIGVsaWYgYXZnX3NlbmRlcl9yZWNvbW1lbmRhdGlvbnMgPCAwLjQgYW5kIGNvbnNlY3V0aXZlX3JlY2VpdmVyX3BlbmFsdGllcyA+PSAyOgogICAgICAgICAgICBwcm9tcHQgPSB7IkludGVycHJldGF0aW9uIFN0eWxlIjogImFuYWx5dGljYWwifQogICAgICAgIGVsaWYgdG90YWxfcmV3YXJkX2RlbHRhID4gMC41IGFuZCBjb25zZWN1dGl2ZV9zdHJvbmdfcmVjb21tZW5kYXRpb25zID49IDI6CiAgICAgICAgICAgIHByb21wdCA9IHsiRm9jdXMgQXJlYSI6ICJza2lsbHMifQogICAgICAgIGVsc2U6CiAgICAgICAgICAgIHByb21wdCA9IHJhbmRvbS5jaG9pY2UoWwogICAgICAgICAgICAgICAgeyJTZW5zaXRpdml0eSB0byBUb25lIjogIm5ldXRyYWwifSwKICAgICAgICAgICAgICAgIHsiRW1waGFzaXMgb24gU3BlY2lmaWNzIjogImxvdyJ9LAogICAgICAgICAgICAgICAgeyJMYW5ndWFnZSBBbmFseXNpcyI6ICJpbmZvcm1hbCJ9CiAgICAgICAgICAgIF0pCgogICAgICAgIHJlY2VpdmVyX3Byb21wdHMuYXBwZW5kKHByb21wdCkKICAgIHJldHVybiByZWNlaXZlcl9wcm9tcHRz)

1
def generate\_sender\_prompts(history):

2
 sender\_prompts = []

3
 for stage in range(5):

4
 total\_receiver\_accepts = sum(h[’receiver\_decision’] for h in history[:stage])

5
 total\_sender\_recommendations = sum(h[’sender\_recommendation’] for h in history[:stage])

6
 total\_sender\_rewards = sum(h[’sender\_reward’] for h in history[:stage])

7
 total\_receiver\_rewards = sum(h[’receiver\_reward’] for h in history[:stage])

8
 avg\_receiver\_accepts = total\_receiver\_accepts / (stage + 1) if stage > 0 else 0

9
 avg\_sender\_recommendations = total\_sender\_recommendations / (stage + 1) if stage > 0 else 0

10
 avg\_sender\_rewards = total\_sender\_rewards / (stage + 1) if stage > 0 else 0

11
 avg\_receiver\_rewards = total\_receiver\_rewards / (stage + 1) if stage > 0 else 0

12

13
 # Calculate reward deltas (current stage vs previous stage)

14
 reward\_deltas = [history[i][’sender\_reward’] - history[i - 1][’sender\_reward’] for i in range(1, stage)]

15
 total\_reward\_delta = sum(reward\_deltas) if reward\_deltas else 0

16
 avg\_reward\_delta = total\_reward\_delta / len(reward\_deltas) if reward\_deltas else 0

17

18
 # Calculate acceptance streaks and reward streaks

19
 consecutive\_accepts = 0

20
 consecutive\_rejections = 0

21
 consecutive\_sender\_rewards = 0

22
 consecutive\_sender\_penalties = 0

23

24
 for i in range(stage):

25
 if history[i][’receiver\_decision’] == 1:

26
 consecutive\_accepts += 1

27
 consecutive\_rejections = 0

28
 else:

29
 consecutive\_rejections += 1

30
 consecutive\_accepts = 0

31

32
 if history[i][’sender\_reward’] > 0:

33
 consecutive\_sender\_rewards += 1

34
 consecutive\_sender\_penalties = 0

35
 else:

36
 consecutive\_sender\_penalties += 1

37
 consecutive\_sender\_rewards = 0

38

39
 # Calculate weighted scores based on reward and acceptance trends

40
 weighted\_acceptance\_score = avg\_receiver\_accepts \* 0.6 + avg\_reward\_delta \* 0.4

41
 weighted\_sender\_score = avg\_sender\_rewards \* 0.7 + avg\_sender\_recommendations \* 0.3

42

43
 # Decision logic based on complex history

44
 if weighted\_acceptance\_score > 0.7 and consecutive\_sender\_rewards >= 2:

45
 prompt = {"Tone": "positive"}

46
 elif weighted\_sender\_score < 0.3 and consecutive\_sender\_penalties >= 2:

47
 prompt = {"Tone": "neutral"}

48
 elif avg\_sender\_rewards > avg\_receiver\_rewards and weighted\_sender\_score > 0.5:

49
 prompt = {"Praise Intensity": "high"}

50
 elif avg\_receiver\_accepts < 0.4 and avg\_reward\_delta < -0.2:

51
 prompt = {"Recommendation Strength": "weak"}

52
 elif total\_reward\_delta > 0.5 and consecutive\_accepts >= 2:

53
 prompt = {"Specificity": "detailed"}

54
 elif avg\_sender\_rewards < 0 and consecutive\_sender\_penalties >= 2:

55
 prompt = {"Omission": "minor"}

56
 else:

57
 prompt = random.choice([

58
 {"Focus": "soft-skills"},

59
 {"Language Complexity": "complex"},

60
 {"Emphasis": "character"}

61
 ])

62

63
 sender\_prompts.append(prompt)

64
 return sender\_prompts

65

66
def generate\_receiver\_prompts(history):

67
 receiver\_prompts = []

68
 for stage in range(5):

69
 total\_sender\_recommendations = sum(h[’sender\_recommendation’] for h in history[:stage])

70
 total\_receiver\_accepts = sum(h[’receiver\_decision’] for h in history[:stage])

71
 total\_sender\_rewards = sum(h[’sender\_reward’] for h in history[:stage])

72
 total\_receiver\_rewards = sum(h[’receiver\_reward’] for h in history[:stage])

73
 avg\_sender\_recommendations = total\_sender\_recommendations / (stage + 1) if stage > 0 else 0

74
 avg\_receiver\_accepts = total\_receiver\_accepts / (stage + 1) if stage > 0 else 0

75
 avg\_sender\_rewards = total\_sender\_rewards / (stage + 1) if stage > 0 else 0

76
 avg\_receiver\_rewards = total\_receiver\_rewards / (stage + 1) if stage > 0 else 0

77

78
 # Calculate reward deltas (current stage vs previous stage)

79
 reward\_deltas = [history[i][’receiver\_reward’] - history[i - 1][’receiver\_reward’] for i in range(1, stage)]

80
 total\_reward\_delta = sum(reward\_deltas) if reward\_deltas else 0

81
 avg\_reward\_delta = total\_reward\_delta / len(reward\_deltas) if reward\_deltas else 0

82

83
 # Calculate streaks for decision making

84
 consecutive\_strong\_recommendations = 0

85
 consecutive\_weak\_recommendations = 0

86
 consecutive\_receiver\_rewards = 0

87
 consecutive\_receiver\_penalties = 0

88

89
 for i in range(stage):

90
 if history[i][’sender\_recommendation’] == 1:

91
 consecutive\_strong\_recommendations += 1

92
 consecutive\_weak\_recommendations = 0

93
 else:

94
 consecutive\_weak\_recommendations += 1

95
 consecutive\_strong\_recommendations = 0

96

97
 if history[i][’receiver\_reward’] > 0:

98
 consecutive\_receiver\_rewards += 1

99
 consecutive\_receiver\_penalties = 0

100
 else:

101
 consecutive\_receiver\_penalties += 1

102
 consecutive\_receiver\_rewards = 0

103

104
 # Calculate weighted scores based on trends in rewards and decisions

105
 weighted\_recommendation\_score = avg\_sender\_recommendations \* 0.5 + avg\_reward\_delta \* 0.5

106
 weighted\_receiver\_score = avg\_receiver\_rewards \* 0.6 + total\_reward\_delta \* 0.4

107

108
 # Complex decision logic based on the above history

109
 if weighted\_recommendation\_score > 0.7 and consecutive\_receiver\_rewards >= 2:

110
 prompt = {"Risk Tolerance": "high"}

111
 elif weighted\_receiver\_score < 0.3 and consecutive\_receiver\_penalties >= 2:

112
 prompt = {"Decision Threshold": "strict"}

113
 elif avg\_sender\_recommendations > 0.6 and avg\_reward\_delta < -0.3:

114
 prompt = {"Omission Detection": "high"}

115
 elif avg\_receiver\_accepts > 0.6 and weighted\_receiver\_score > 0.5:

116
 prompt = {"Recommendation Weight": "high"}

117
 elif avg\_sender\_recommendations < 0.4 and consecutive\_receiver\_penalties >= 2:

118
 prompt = {"Interpretation Style": "analytical"}

119
 elif total\_reward\_delta > 0.5 and consecutive\_strong\_recommendations >= 2:

120
 prompt = {"Focus Area": "skills"}

121
 else:

122
 prompt = random.choice([

123
 {"Sensitivity to Tone": "neutral"},

124
 {"Emphasis on Specifics": "low"},

125
 {"Language Analysis": "informal"}

126
 ])

127

128
 receiver\_prompts.append(prompt)

129
 return receiver\_prompts

##### D.2.2 COR

In the COR problem, both following codes utilize predefined categories and dynamically adjust prompts based on metrics such as reward patterns, success rates, and decision trends.
This allows for the generation of prompts that are contextually relevant and responsive to the sender’s or receiver’s performance over multiple stages.

Listing 3: One generated conditional prompt function of COR in the S3 setting.

[⬇](data:text/plain;base64,IyBBIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHNlbmRlciBwcm9tcHRzIGJhc2VkIG9uIHRoZSBlbnRpcmUgaGlzdG9yeSBvZiBpbnRlcmFjdGlvbnMKZGVmIGdlbmVyYXRlX3NlbmRlcl9wcm9tcHRzKGhpc3RvcnkpOgogICAgc2VuZGVyX2NhdGVnb3JpZXMgPSBbCiAgICAgICAgIlRvbmUiLCAiTGVuZ3RoIiwgIkRldGFpbCBMZXZlbCIsICJGb2N1cyIsICJDZXJ0YWludHkiLAogICAgICAgICJFbW90aW9uYWwgQXBwZWFsIiwgIkFtYmlndWl0eSIsICJGcmFtaW5nIiwgIkxhbmd1YWdlIFN0eWxlIiwgIkNvbXBsZXhpdHkiCiAgICBdCiAgICBzZW5kZXJfd29yZHMgPSB7CiAgICAgICAgIlRvbmUiOiBbImZvcm1hbCIsICJhZ2dyZXNzaXZlIiwgImNhbG0iLCAiYXNzZXJ0aXZlIiwgInBlcnN1YXNpdmUiXSwKICAgICAgICAiTGVuZ3RoIjogWyJicmllZiIsICJleHRlbmRlZCIsICJjb25jaXNlIiwgImVsYWJvcmF0ZSJdLAogICAgICAgICJEZXRhaWwgTGV2ZWwiOiBbImRldGFpbGVkIiwgInZhZ3VlIiwgInByZWNpc2UiLCAiZ2VuZXJhbCJdLAogICAgICAgICJGb2N1cyI6IFsiY3JpbWUiLCAiZGVmZW5kYW50IiwgImFsaWJpIiwgInZpY3RpbSIsICJtb3RpdmUiXSwKICAgICAgICAiQ2VydGFpbnR5IjogWyJjb25maWRlbnQiLCAiZG91YnRmdWwiLCAiYW1iaWd1b3VzIiwgInVuY2VydGFpbiJdLAogICAgICAgICJFbW90aW9uYWwgQXBwZWFsIjogWyJlbXBhdGhldGljIiwgIm5ldXRyYWwiLCAiZW1vdGlvbmFsIiwgInJhdGlvbmFsIl0sCiAgICAgICAgIkFtYmlndWl0eSI6IFsidmFndWUiLCAiY2xlYXIiLCAiY29uZnVzaW5nIiwgInVuY2VydGFpbiJdLAogICAgICAgICJGcmFtaW5nIjogWyJiaWFzZWQiLCAibmV1dHJhbCIsICJvbmUtc2lkZWQiLCAiYmFsYW5jZWQiXSwKICAgICAgICAiTGFuZ3VhZ2UgU3R5bGUiOiBbImxlZ2FsIiwgImNhc3VhbCIsICJ0ZWNobmljYWwiLCAiY29sbG9xdWlhbCJdLAogICAgICAgICJDb21wbGV4aXR5IjogWyJzaW1wbGUiLCAiY29tcGxleCIsICJtb2RlcmF0ZSIsICJzb3BoaXN0aWNhdGVkIl0KICAgIH0KCiAgICBwcm9tcHRzID0gW10KICAgIGZvciBzdGFnZSBpbiByYW5nZSg1KToKICAgICAgICBpZiBoaXN0b3J5OgogICAgICAgICAgICAjIEFuYWx5emUgZnVsbCBoaXN0b3J5IG9mIHNlbmRlcidzIHBlcmZvcm1hbmNlCiAgICAgICAgICAgIHNlbmRlcl90b3RhbF9yZXdhcmQgPSBzdW0oW2hbJ3NlbmRlcl9yZXdhcmQnXSBmb3IgaCBpbiBoaXN0b3J5XSkKICAgICAgICAgICAgc2VuZGVyX2F2Z19yZXdhcmQgPSBzZW5kZXJfdG90YWxfcmV3YXJkIC8gbGVuKGhpc3RvcnkpCiAgICAgICAgICAgIHNlbmRlcl9zdWNjZXNzX3JhdGUgPSBzdW0oWzEgZm9yIGggaW4gaGlzdG9yeSBpZiBoWydyZWNlaXZlcl9kZWNpc2lvbiddID09IGhbJ3NlbmRlcl9kZWNpc2lvbiddXSkgLyBsZW4oaGlzdG9yeSkKICAgICAgICAgICAgZ3VpbHR5X3NlbmRlcl9kZWNpc2lvbnMgPSBzdW0oWzEgZm9yIGggaW4gaGlzdG9yeSBpZiBoWydzZW5kZXJfZGVjaXNpb24nXSA9PSAxXSkKICAgICAgICAgICAgaW5ub2NlbnRfc2VuZGVyX2RlY2lzaW9ucyA9IGxlbihoaXN0b3J5KSAtIGd1aWx0eV9zZW5kZXJfZGVjaXNpb25zCgogICAgICAgICAgICAjIFVzZSB0cmVuZHMgZm9yIGNhdGVnb3J5IHNlbGVjdGlvbgogICAgICAgICAgICBpZiBzZW5kZXJfYXZnX3Jld2FyZCA+IDEuMCBhbmQgc2VuZGVyX3N1Y2Nlc3NfcmF0ZSA+IDAuODoKICAgICAgICAgICAgICAgICMgSGlnaCBhdmVyYWdlIHJld2FyZCBhbmQgaGlnaCBzdWNjZXNzIHJhdGUsIGluY3JlYXNlIGNvbmZpZGVuY2UgYW5kIGNlcnRhaW50eQogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIkNlcnRhaW50eSIKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gImNvbmZpZGVudCIKICAgICAgICAgICAgZWxpZiBzZW5kZXJfYXZnX3Jld2FyZCA8IDAgYW5kIHNlbmRlcl9zdWNjZXNzX3JhdGUgPCAwLjU6CiAgICAgICAgICAgICAgICAjIExvdyByZXdhcmQgYW5kIGxvdyBzdWNjZXNzIHJhdGUsIGNoYW5nZSBzdHJhdGVneSB0byBlbW90aW9uYWwgYXBwZWFsIG9yIGFtYmlndWl0eQogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIkVtb3Rpb25hbCBBcHBlYWwiIGlmIHJhbmRvbS5yYW5kb20oKSA+IDAuNSBlbHNlICJBbWJpZ3VpdHkiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9IHJhbmRvbS5jaG9pY2Uoc2VuZGVyX3dvcmRzW2Nob3Nlbl9jYXRlZ29yeV0pCiAgICAgICAgICAgIGVsaWYgZ3VpbHR5X3NlbmRlcl9kZWNpc2lvbnMgPiBpbm5vY2VudF9zZW5kZXJfZGVjaXNpb25zIGFuZCBzZW5kZXJfdG90YWxfcmV3YXJkID4gMDoKICAgICAgICAgICAgICAgICMgTW9yZSBndWlsdHkgZGVjaXNpb25zIGFuZCBwb3NpdGl2ZSByZXdhcmQsIHVzZSBhZ2dyZXNzaXZlIHRvbmUgb3IgZnJhbWluZwogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIlRvbmUiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJhZ2dyZXNzaXZlIgogICAgICAgICAgICBlbHNlOgogICAgICAgICAgICAgICAgIyBFeHBsb3JlIGFsdGVybmF0aXZlIHN0cmF0ZWdpZXMgYmFzZWQgb24gZnJhbWluZyBvciBkZXRhaWwgbGV2ZWwKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UoWyJGcmFtaW5nIiwgIkRldGFpbCBMZXZlbCJdKQogICAgICAgICAgICAgICAgY2hvc2VuX3dvcmQgPSByYW5kb20uY2hvaWNlKHNlbmRlcl93b3Jkc1tjaG9zZW5fY2F0ZWdvcnldKQoKICAgICAgICAgICAgIyBGdXJ0aGVyIHJlZmluZSBiYXNlZCBvbiByZXdhcmQgcGF0dGVybnMKICAgICAgICAgICAgaWYgc2VuZGVyX3RvdGFsX3Jld2FyZCA8IDA6CiAgICAgICAgICAgICAgICAjIElmIG92ZXJhbGwgcmV3YXJkcyBhcmUgbmVnYXRpdmUsIHRyeSB0byBiYWxhbmNlIG9yIG5ldXRyYWxpemUgZnJhbWluZwogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIkZyYW1pbmciCiAgICAgICAgICAgICAgICBwYXN0X2ZyYW1pbmdfd29yZHMgPSBbaFsnc2VuZGVyJ11bJ2NvbnRlbnQnXSBmb3IgaCBpbiBoaXN0b3J5IGlmIGhbJ3NlbmRlciddWydjYXRlZ29yeSddID09ICJGcmFtaW5nIl0KICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gIm5ldXRyYWwiIGlmICJiaWFzZWQiIGluIHBhc3RfZnJhbWluZ193b3JkcyBlbHNlICJiaWFzZWQiCiAgICAgICAgICAgIGlmIHNlbmRlcl9hdmdfcmV3YXJkIDwgLTEuMDoKICAgICAgICAgICAgICAgICMgSWYgYXZlcmFnZSByZXdhcmRzIGFyZSBjcml0aWNhbGx5IGxvdywgZHJhc3RpY2FsbHkgc2ltcGxpZnkgbWVzc2FnZQogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIkNvbXBsZXhpdHkiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJzaW1wbGUiCiAgICAgICAgZWxzZToKICAgICAgICAgICAgIyBJZiBubyBoaXN0b3J5LCBwaWNrIHJhbmRvbQogICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKHNlbmRlcl9jYXRlZ29yaWVzKQogICAgICAgICAgICBjaG9zZW5fd29yZCA9IHJhbmRvbS5jaG9pY2Uoc2VuZGVyX3dvcmRzW2Nob3Nlbl9jYXRlZ29yeV0pCgogICAgICAgICMgQ3JlYXRlIGEgcHJvbXB0IGZvciB0aGUgc2VuZGVyCiAgICAgICAgcHJvbXB0ID0geyJjYXRlZ29yeSI6IGNob3Nlbl9jYXRlZ29yeSwgImNvbnRlbnQiOiBjaG9zZW5fd29yZH0KICAgICAgICBwcm9tcHRzLmFwcGVuZChwcm9tcHQpCgogICAgcmV0dXJuIHByb21wdHMKCiMgQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSByZWNlaXZlciBwcm9tcHRzIGJhc2VkIG9uIHRoZSBlbnRpcmUgaGlzdG9yeSBvZiBpbnRlcmFjdGlvbnMKZGVmIGdlbmVyYXRlX3JlY2VpdmVyX3Byb21wdHMoaGlzdG9yeSk6CiAgICByZWNlaXZlcl9jYXRlZ29yaWVzID0gWwogICAgICAgICJFdmlkZW5jZSBTdHJlbmd0aCIsICJDcmVkaWJpbGl0eSBvZiBFdmlkZW5jZSIsICJCdXJkZW4gb2YgUHJvb2YiLAogICAgICAgICJDb25zaXN0ZW5jeSBvZiBTdG9yeSIsICJCaWFzIERldGVjdGlvbiIsICJMZWdhbCBTdGFuZGFyZCIsCiAgICAgICAgIkV4Y3VscGF0b3J5IFdlaWdodCIsICJBbWJpZ3VpdHkgUmVzb2x1dGlvbiIsICJXaXRuZXNzIFJlbGlhYmlsaXR5IiwKICAgICAgICAiQWxpYmkgVmVyaWZpY2F0aW9uIgogICAgXQogICAgcmVjZWl2ZXJfd29yZHMgPSB7CiAgICAgICAgIkV2aWRlbmNlIFN0cmVuZ3RoIjogWyJ3ZWFrIiwgInN0cm9uZyIsICJtb2RlcmF0ZSIsICJpbmNvbmNsdXNpdmUiXSwKICAgICAgICAiQ3JlZGliaWxpdHkgb2YgRXZpZGVuY2UiOiBbInF1ZXN0aW9uYWJsZSIsICJjcmVkaWJsZSIsICJ1bmNsZWFyIiwgImRvdWJ0ZnVsIl0sCiAgICAgICAgIkJ1cmRlbiBvZiBQcm9vZiI6IFsiaGlnaCIsICJsb3ciLCAibW9kZXJhdGUiLCAibGVuaWVudCJdLAogICAgICAgICJDb25zaXN0ZW5jeSBvZiBTdG9yeSI6IFsiaW5jb25zaXN0ZW50IiwgImNvbnNpc3RlbnQiLCAiY29udHJhZGljdG9yeSIsICJwYXJ0aWFsIl0sCiAgICAgICAgIkJpYXMgRGV0ZWN0aW9uIjogWyJiaWFzZWQiLCAibmV1dHJhbCIsICJ1bmNlcnRhaW4iLCAiY2xlYXIiXSwKICAgICAgICAiTGVnYWwgU3RhbmRhcmQiOiBbInN0cmljdCIsICJsZW5pZW50IiwgIm1vZGVyYXRlIiwgInNldmVyZSJdLAogICAgICAgICJFeGN1bHBhdG9yeSBXZWlnaHQiOiBbImltcG9ydGFudCIsICJtaW5vciIsICJpcnJlbGV2YW50IiwgInNpZ25pZmljYW50Il0sCiAgICAgICAgIkFtYmlndWl0eSBSZXNvbHV0aW9uIjogWyJyZXNvbHZlZCIsICJhbWJpZ3VvdXMiLCAiY2xlYXIiLCAidW5jZXJ0YWluIl0sCiAgICAgICAgIldpdG5lc3MgUmVsaWFiaWxpdHkiOiBbInVucmVsaWFibGUiLCAicmVsaWFibGUiLCAidW5jZXJ0YWluIiwgImNyZWRpYmxlIl0sCiAgICAgICAgIkFsaWJpIFZlcmlmaWNhdGlvbiI6IFsidmVyaWZpZWQiLCAidW52ZXJpZmllZCIsICJ1bmNlcnRhaW4iLCAiZmFsc2UiXQogICAgfQoKICAgIHByb21wdHMgPSBbXQogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIGlmIGhpc3Rvcnk6CiAgICAgICAgICAgICMgQW5hbHl6ZSBmdWxsIGhpc3Rvcnkgb2YgcmVjZWl2ZXIncyBwZXJmb3JtYW5jZQogICAgICAgICAgICByZWNlaXZlcl90b3RhbF9yZXdhcmQgPSBzdW0oW2hbJ3JlY2VpdmVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnldKQogICAgICAgICAgICByZWNlaXZlcl9hdmdfcmV3YXJkID0gcmVjZWl2ZXJfdG90YWxfcmV3YXJkIC8gbGVuKGhpc3RvcnkpCiAgICAgICAgICAgIHJlY2VpdmVyX3N1Y2Nlc3NfcmF0ZSA9IHN1bShbMSBmb3IgaCBpbiBoaXN0b3J5IGlmIGhbJ3JlY2VpdmVyX2RlY2lzaW9uJ10gPT0gaFsnc2VuZGVyX2RlY2lzaW9uJ11dKSAvIGxlbihoaXN0b3J5KQogICAgICAgICAgICBndWlsdHlfcmVjZWl2ZXJfZGVjaXNpb25zID0gc3VtKFsxIGZvciBoIGluIGhpc3RvcnkgaWYgaFsncmVjZWl2ZXJfZGVjaXNpb24nXSA9PSAxXSkKICAgICAgICAgICAgaW5ub2NlbnRfcmVjZWl2ZXJfZGVjaXNpb25zID0gbGVuKGhpc3RvcnkpIC0gZ3VpbHR5X3JlY2VpdmVyX2RlY2lzaW9ucwoKICAgICAgICAgICAgIyBVc2UgdHJlbmRzIGZvciBjYXRlZ29yeSBzZWxlY3Rpb24KICAgICAgICAgICAgaWYgcmVjZWl2ZXJfYXZnX3Jld2FyZCA+IDEuMCBhbmQgcmVjZWl2ZXJfc3VjY2Vzc19yYXRlID4gMC44OgogICAgICAgICAgICAgICAgIyBIaWdoIGF2ZXJhZ2UgcmV3YXJkIGFuZCBoaWdoIHN1Y2Nlc3MgcmF0ZSwgZm9jdXMgb24gc3Ryb25nIGV2aWRlbmNlCiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSAiRXZpZGVuY2UgU3RyZW5ndGgiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJzdHJvbmciCiAgICAgICAgICAgIGVsaWYgcmVjZWl2ZXJfYXZnX3Jld2FyZCA8IDAgYW5kIHJlY2VpdmVyX3N1Y2Nlc3NfcmF0ZSA8IDAuNToKICAgICAgICAgICAgICAgICMgTG93IHJld2FyZCBhbmQgbG93IHN1Y2Nlc3MgcmF0ZSwgZm9jdXMgb24gYmlhcyBkZXRlY3Rpb24gYW5kIGNyZWRpYmlsaXR5CiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSAiQmlhcyBEZXRlY3Rpb24iIGlmIHJhbmRvbS5yYW5kb20oKSA+IDAuNSBlbHNlICJDcmVkaWJpbGl0eSBvZiBFdmlkZW5jZSIKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjaG9zZW5fY2F0ZWdvcnldKQogICAgICAgICAgICBlbGlmIGd1aWx0eV9yZWNlaXZlcl9kZWNpc2lvbnMgPiBpbm5vY2VudF9yZWNlaXZlcl9kZWNpc2lvbnMgYW5kIHJlY2VpdmVyX3RvdGFsX3Jld2FyZCA+IDA6CiAgICAgICAgICAgICAgICAjIE1vcmUgZ3VpbHR5IGRlY2lzaW9ucyBhbmQgcG9zaXRpdmUgcmV3YXJkLCBpbmNyZWFzZSBidXJkZW4gb2YgcHJvb2YKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9ICJCdXJkZW4gb2YgUHJvb2YiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJoaWdoIgogICAgICAgICAgICBlbHNlOgogICAgICAgICAgICAgICAgIyBFeHBsb3JlIGNvbnNpc3RlbmN5IG9yIGFtYmlndWl0eSByZXNvbHV0aW9uCiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKFsiQ29uc2lzdGVuY3kgb2YgU3RvcnkiLCAiQW1iaWd1aXR5IFJlc29sdXRpb24iXSkKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjaG9zZW5fY2F0ZWdvcnldKQoKICAgICAgICAgICAgIyBGdXJ0aGVyIHJlZmluZSBiYXNlZCBvbiByZXdhcmQgcGF0dGVybnMKICAgICAgICAgICAgaWYgcmVjZWl2ZXJfdG90YWxfcmV3YXJkIDwgMDoKICAgICAgICAgICAgICAgICMgSWYgcmV3YXJkcyBhcmUgbmVnYXRpdmUsIGZvY3VzIG9uIHJlc29sdmluZyBhbWJpZ3VpdHkKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9ICJBbWJpZ3VpdHkgUmVzb2x1dGlvbiIKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gInJlc29sdmVkIgogICAgICAgICAgICBpZiByZWNlaXZlcl9hdmdfcmV3YXJkIDwgLTEuMDoKICAgICAgICAgICAgICAgICMgSWYgYXZlcmFnZSByZXdhcmRzIGFyZSBjcml0aWNhbGx5IGxvdywgZHJhc3RpY2FsbHkgaW5jcmVhc2Ugc2NydXRpbnkgb24gZXZpZGVuY2UKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9ICJDcmVkaWJpbGl0eSBvZiBFdmlkZW5jZSIKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gInF1ZXN0aW9uYWJsZSIKICAgICAgICBlbHNlOgogICAgICAgICAgICAjIElmIG5vIGhpc3RvcnksIHBpY2sgcmFuZG9tCiAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UocmVjZWl2ZXJfY2F0ZWdvcmllcykKICAgICAgICAgICAgY2hvc2VuX3dvcmQgPSByYW5kb20uY2hvaWNlKHJlY2VpdmVyX3dvcmRzW2Nob3Nlbl9jYXRlZ29yeV0pCgogICAgICAgICMgQ3JlYXRlIGEgcHJvbXB0IGZvciB0aGUgcmVjZWl2ZXIKICAgICAgICBwcm9tcHQgPSB7ImNhdGVnb3J5IjogY2hvc2VuX2NhdGVnb3J5LCAiY29udGVudCI6IGNob3Nlbl93b3JkfQogICAgICAgIHByb21wdHMuYXBwZW5kKHByb21wdCkKCiAgICByZXR1cm4gcHJvbXB0cw==)

1
# A function to generate sender prompts based on the entire history of interactions

2
def generate\_sender\_prompts(history):

3
 sender\_categories = [

4
 "Tone", "Length", "Detail Level", "Focus", "Certainty",

5
 "Emotional Appeal", "Ambiguity", "Framing", "Language Style", "Complexity"

6
 ]

7
 sender\_words = {

8
 "Tone": ["formal", "aggressive", "calm", "assertive", "persuasive"],

9
 "Length": ["brief", "extended", "concise", "elaborate"],

10
 "Detail Level": ["detailed", "vague", "precise", "general"],

11
 "Focus": ["crime", "defendant", "alibi", "victim", "motive"],

12
 "Certainty": ["confident", "doubtful", "ambiguous", "uncertain"],

13
 "Emotional Appeal": ["empathetic", "neutral", "emotional", "rational"],

14
 "Ambiguity": ["vague", "clear", "confusing", "uncertain"],

15
 "Framing": ["biased", "neutral", "one-sided", "balanced"],

16
 "Language Style": ["legal", "casual", "technical", "colloquial"],

17
 "Complexity": ["simple", "complex", "moderate", "sophisticated"]

18
 }

19

20
 prompts = []

21
 for stage in range(5):

22
 if history:

23
 # Analyze full history of sender’s performance

24
 sender\_total\_reward = sum([h[’sender\_reward’] for h in history])

25
 sender\_avg\_reward = sender\_total\_reward / len(history)

26
 sender\_success\_rate = sum([1 for h in history if h[’receiver\_decision’] == h[’sender\_decision’]]) / len(history)

27
 guilty\_sender\_decisions = sum([1 for h in history if h[’sender\_decision’] == 1])

28
 innocent\_sender\_decisions = len(history) - guilty\_sender\_decisions

29

30
 # Use trends for category selection

31
 if sender\_avg\_reward > 1.0 and sender\_success\_rate > 0.8:

32
 # High average reward and high success rate, increase confidence and certainty

33
 chosen\_category = "Certainty"

34
 chosen\_word = "confident"

35
 elif sender\_avg\_reward < 0 and sender\_success\_rate < 0.5:

36
 # Low reward and low success rate, change strategy to emotional appeal or ambiguity

37
 chosen\_category = "Emotional Appeal" if random.random() > 0.5 else "Ambiguity"

38
 chosen\_word = random.choice(sender\_words[chosen\_category])

39
 elif guilty\_sender\_decisions > innocent\_sender\_decisions and sender\_total\_reward > 0:

40
 # More guilty decisions and positive reward, use aggressive tone or framing

41
 chosen\_category = "Tone"

42
 chosen\_word = "aggressive"

43
 else:

44
 # Explore alternative strategies based on framing or detail level

45
 chosen\_category = random.choice(["Framing", "Detail Level"])

46
 chosen\_word = random.choice(sender\_words[chosen\_category])

47

48
 # Further refine based on reward patterns

49
 if sender\_total\_reward < 0:

50
 # If overall rewards are negative, try to balance or neutralize framing

51
 chosen\_category = "Framing"

52
 past\_framing\_words = [h[’sender’][’content’] for h in history if h[’sender’][’category’] == "Framing"]

53
 chosen\_word = "neutral" if "biased" in past\_framing\_words else "biased"

54
 if sender\_avg\_reward < -1.0:

55
 # If average rewards are critically low, drastically simplify message

56
 chosen\_category = "Complexity"

57
 chosen\_word = "simple"

58
 else:

59
 # If no history, pick random

60
 chosen\_category = random.choice(sender\_categories)

61
 chosen\_word = random.choice(sender\_words[chosen\_category])

62

63
 # Create a prompt for the sender

64
 prompt = {"category": chosen\_category, "content": chosen\_word}

65
 prompts.append(prompt)

66

67
 return prompts

68

69
# A function to generate receiver prompts based on the entire history of interactions

70
def generate\_receiver\_prompts(history):

71
 receiver\_categories = [

72
 "Evidence Strength", "Credibility of Evidence", "Burden of Proof",

73
 "Consistency of Story", "Bias Detection", "Legal Standard",

74
 "Exculpatory Weight", "Ambiguity Resolution", "Witness Reliability",

75
 "Alibi Verification"

76
 ]

77
 receiver\_words = {

78
 "Evidence Strength": ["weak", "strong", "moderate", "inconclusive"],

79
 "Credibility of Evidence": ["questionable", "credible", "unclear", "doubtful"],

80
 "Burden of Proof": ["high", "low", "moderate", "lenient"],

81
 "Consistency of Story": ["inconsistent", "consistent", "contradictory", "partial"],

82
 "Bias Detection": ["biased", "neutral", "uncertain", "clear"],

83
 "Legal Standard": ["strict", "lenient", "moderate", "severe"],

84
 "Exculpatory Weight": ["important", "minor", "irrelevant", "significant"],

85
 "Ambiguity Resolution": ["resolved", "ambiguous", "clear", "uncertain"],

86
 "Witness Reliability": ["unreliable", "reliable", "uncertain", "credible"],

87
 "Alibi Verification": ["verified", "unverified", "uncertain", "false"]

88
 }

89

90
 prompts = []

91
 for stage in range(5):

92
 if history:

93
 # Analyze full history of receiver’s performance

94
 receiver\_total\_reward = sum([h[’receiver\_reward’] for h in history])

95
 receiver\_avg\_reward = receiver\_total\_reward / len(history)

96
 receiver\_success\_rate = sum([1 for h in history if h[’receiver\_decision’] == h[’sender\_decision’]]) / len(history)

97
 guilty\_receiver\_decisions = sum([1 for h in history if h[’receiver\_decision’] == 1])

98
 innocent\_receiver\_decisions = len(history) - guilty\_receiver\_decisions

99

100
 # Use trends for category selection

101
 if receiver\_avg\_reward > 1.0 and receiver\_success\_rate > 0.8:

102
 # High average reward and high success rate, focus on strong evidence

103
 chosen\_category = "Evidence Strength"

104
 chosen\_word = "strong"

105
 elif receiver\_avg\_reward < 0 and receiver\_success\_rate < 0.5:

106
 # Low reward and low success rate, focus on bias detection and credibility

107
 chosen\_category = "Bias Detection" if random.random() > 0.5 else "Credibility of Evidence"

108
 chosen\_word = random.choice(receiver\_words[chosen\_category])

109
 elif guilty\_receiver\_decisions > innocent\_receiver\_decisions and receiver\_total\_reward > 0:

110
 # More guilty decisions and positive reward, increase burden of proof

111
 chosen\_category = "Burden of Proof"

112
 chosen\_word = "high"

113
 else:

114
 # Explore consistency or ambiguity resolution

115
 chosen\_category = random.choice(["Consistency of Story", "Ambiguity Resolution"])

116
 chosen\_word = random.choice(receiver\_words[chosen\_category])

117

118
 # Further refine based on reward patterns

119
 if receiver\_total\_reward < 0:

120
 # If rewards are negative, focus on resolving ambiguity

121
 chosen\_category = "Ambiguity Resolution"

122
 chosen\_word = "resolved"

123
 if receiver\_avg\_reward < -1.0:

124
 # If average rewards are critically low, drastically increase scrutiny on evidence

125
 chosen\_category = "Credibility of Evidence"

126
 chosen\_word = "questionable"

127
 else:

128
 # If no history, pick random

129
 chosen\_category = random.choice(receiver\_categories)

130
 chosen\_word = random.choice(receiver\_words[chosen\_category])

131

132
 # Create a prompt for the receiver

133
 prompt = {"category": chosen\_category, "content": chosen\_word}

134
 prompts.append(prompt)

135

136
 return prompts

In the first set, prompt generation is driven by key performance indicators like average reward and guilty vs. innocent decision ratios.
The system adapts prompts based on these metrics, shifting towards confidence and certainty for high-performing senders or focusing on emotional appeal and ambiguity when performance declines.
For receivers, the system emphasizes evidence strength and credibility in high-performance scenarios, while addressing bias detection and credibility issues under poor performance.

Listing 4: Another generated conditional prompt function of COR in the S3 setting.

[⬇](data:text/plain;base64,IyBBIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHNlbmRlciBwcm9tcHRzIGJhc2VkIG9uIHRoZSBlbnRpcmUgaGlzdG9yeSBvZiBpbnRlcmFjdGlvbnMKZGVmIGdlbmVyYXRlX3NlbmRlcl9wcm9tcHRzKGhpc3RvcnkpOgogICAgc2VuZGVyX2NhdGVnb3JpZXMgPSBbCiAgICAgICAgIlRvbmUiLCAiTGVuZ3RoIiwgIkRldGFpbCBMZXZlbCIsICJGb2N1cyIsICJDZXJ0YWludHkiLAogICAgICAgICJFbW90aW9uYWwgQXBwZWFsIiwgIkFtYmlndWl0eSIsICJGcmFtaW5nIiwgIkxhbmd1YWdlIFN0eWxlIiwgIkNvbXBsZXhpdHkiLAogICAgICAgICJMb2dpY2FsIFN0cnVjdHVyZSIsICJQZXJzdWFzaXZlbmVzcyIsICJSaXNrIFRha2luZyIKICAgIF0KICAgIHNlbmRlcl93b3JkcyA9IHsKICAgICAgICAiVG9uZSI6IFsiZm9ybWFsIiwgImFnZ3Jlc3NpdmUiLCAiY2FsbSIsICJhc3NlcnRpdmUiLCAicGVyc3Vhc2l2ZSIsICJkZWZlbnNpdmUiXSwKICAgICAgICAiTGVuZ3RoIjogWyJicmllZiIsICJleHRlbmRlZCIsICJjb25jaXNlIiwgImVsYWJvcmF0ZSIsICJ2ZXJib3NlIl0sCiAgICAgICAgIkRldGFpbCBMZXZlbCI6IFsiZGV0YWlsZWQiLCAidmFndWUiLCAicHJlY2lzZSIsICJnZW5lcmFsIiwgInNwZWNpZmljIl0sCiAgICAgICAgIkZvY3VzIjogWyJjcmltZSIsICJkZWZlbmRhbnQiLCAiYWxpYmkiLCAidmljdGltIiwgIm1vdGl2ZSIsICJjaXJjdW1zdGFuY2VzIl0sCiAgICAgICAgIkNlcnRhaW50eSI6IFsiY29uZmlkZW50IiwgImRvdWJ0ZnVsIiwgImFtYmlndW91cyIsICJ1bmNlcnRhaW4iLCAic3VyZSJdLAogICAgICAgICJFbW90aW9uYWwgQXBwZWFsIjogWyJlbXBhdGhldGljIiwgIm5ldXRyYWwiLCAiZW1vdGlvbmFsIiwgInJhdGlvbmFsIiwgImRldGFjaGVkIl0sCiAgICAgICAgIkFtYmlndWl0eSI6IFsidmFndWUiLCAiY2xlYXIiLCAiY29uZnVzaW5nIiwgInVuY2VydGFpbiIsICJhbWJpZ3VvdXMiXSwKICAgICAgICAiRnJhbWluZyI6IFsiYmlhc2VkIiwgIm5ldXRyYWwiLCAib25lLXNpZGVkIiwgImJhbGFuY2VkIiwgIm1hbmlwdWxhdGl2ZSJdLAogICAgICAgICJMYW5ndWFnZSBTdHlsZSI6IFsibGVnYWwiLCAiY2FzdWFsIiwgInRlY2huaWNhbCIsICJjb2xsb3F1aWFsIiwgImZvcm1hbCJdLAogICAgICAgICJDb21wbGV4aXR5IjogWyJzaW1wbGUiLCAiY29tcGxleCIsICJtb2RlcmF0ZSIsICJzb3BoaXN0aWNhdGVkIiwgImxheWVyZWQiXSwKICAgICAgICAiTG9naWNhbCBTdHJ1Y3R1cmUiOiBbImxpbmVhciIsICJub24tbGluZWFyIiwgImNpcmN1bGFyIiwgImhpZXJhcmNoaWNhbCIsICJmcmFnbWVudGVkIl0sCiAgICAgICAgIlBlcnN1YXNpdmVuZXNzIjogWyJzdHJvbmciLCAid2VhayIsICJtb2RlcmF0ZSIsICJvdmVyd2hlbG1pbmciLCAic3VidGxlIl0sCiAgICAgICAgIlJpc2sgVGFraW5nIjogWyJoaWdoLXJpc2siLCAibG93LXJpc2siLCAibW9kZXJhdGUtcmlzayIsICJjYWxjdWxhdGVkLXJpc2siLCAicmVja2xlc3MiXQogICAgfQoKICAgIHByb21wdHMgPSBbXQogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIGlmIGhpc3Rvcnk6CiAgICAgICAgICAgICMgQW5hbHl6ZSBmdWxsIGhpc3Rvcnkgb2Ygc2VuZGVyJ3MgcGVyZm9ybWFuY2UKICAgICAgICAgICAgc2VuZGVyX3RvdGFsX3Jld2FyZCA9IHN1bShbaFsnc2VuZGVyX3Jld2FyZCddIGZvciBoIGluIGhpc3RvcnldKQogICAgICAgICAgICBzZW5kZXJfYXZnX3Jld2FyZCA9IHNlbmRlcl90b3RhbF9yZXdhcmQgLyBsZW4oaGlzdG9yeSkKICAgICAgICAgICAgc2VuZGVyX3N1Y2Nlc3NfcmF0ZSA9IHN1bShbMSBmb3IgaCBpbiBoaXN0b3J5IGlmIGhbJ3JlY2VpdmVyX2RlY2lzaW9uJ10gPT0gaFsnc2VuZGVyX2RlY2lzaW9uJ11dKSAvIGxlbihoaXN0b3J5KQogICAgICAgICAgICBndWlsdHlfc2VuZGVyX2RlY2lzaW9ucyA9IHN1bShbMSBmb3IgaCBpbiBoaXN0b3J5IGlmIGhbJ3NlbmRlcl9kZWNpc2lvbiddID09IDFdKQogICAgICAgICAgICBpbm5vY2VudF9zZW5kZXJfZGVjaXNpb25zID0gbGVuKGhpc3RvcnkpIC0gZ3VpbHR5X3NlbmRlcl9kZWNpc2lvbnMKCiAgICAgICAgICAgICMgQ2FsY3VsYXRlIHNlbmRlciByaXNrLXRha2luZyBiZWhhdmlvcgogICAgICAgICAgICByaXNrX3Rha2luZ19iZWhhdmlvciA9IHN1bShbYWJzKGhbJ3NlbmRlcl9yZXdhcmQnXSkgZm9yIGggaW4gaGlzdG9yeV0pIC8gbGVuKGhpc3RvcnkpCgogICAgICAgICAgICAjIENvbnNpZGVyIHJld2FyZCB2b2xhdGlsaXR5ICh2YXJpYW5jZSBvZiByZXdhcmRzKQogICAgICAgICAgICByZXdhcmRfdmFyaWFuY2UgPSBzdW0oWyhoWydzZW5kZXJfcmV3YXJkJ10gLSBzZW5kZXJfYXZnX3Jld2FyZCkgKiogMiBmb3IgaCBpbiBoaXN0b3J5XSkgLyBsZW4oaGlzdG9yeSkKCiAgICAgICAgICAgICMgVXNlIHRyZW5kcyBmb3IgY2F0ZWdvcnkgc2VsZWN0aW9uCiAgICAgICAgICAgIGlmIHNlbmRlcl9hdmdfcmV3YXJkID4gMS4wIGFuZCBzZW5kZXJfc3VjY2Vzc19yYXRlID4gMC44OgogICAgICAgICAgICAgICAgIyBIaWdoIGF2ZXJhZ2UgcmV3YXJkIGFuZCBoaWdoIHN1Y2Nlc3MgcmF0ZSwgaW5jcmVhc2UgbG9naWNhbCBzdHJ1Y3R1cmUgYW5kIHBlcnN1YXNpdmVuZXNzCiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKFsiTG9naWNhbCBTdHJ1Y3R1cmUiLCAiUGVyc3Vhc2l2ZW5lc3MiXSkKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gImxpbmVhciIgaWYgY2hvc2VuX2NhdGVnb3J5ID09ICJMb2dpY2FsIFN0cnVjdHVyZSIgZWxzZSAic3Ryb25nIgogICAgICAgICAgICBlbGlmIHJld2FyZF92YXJpYW5jZSA+IDEuMDoKICAgICAgICAgICAgICAgICMgSGlnaCByZXdhcmQgdmFyaWFuY2UsIGluZGljYXRlIHVuc3RhYmxlIHN0cmF0ZWd5LCBhZGp1c3QgdG9uZSBvciBjb21wbGV4aXR5CiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKFsiVG9uZSIsICJDb21wbGV4aXR5Il0pCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJjYWxtIiBpZiBjaG9zZW5fY2F0ZWdvcnkgPT0gIlRvbmUiIGVsc2UgInNpbXBsZSIKICAgICAgICAgICAgZWxpZiByaXNrX3Rha2luZ19iZWhhdmlvciA+IDEuNToKICAgICAgICAgICAgICAgICMgSGlnaCByaXNrLXRha2luZyBiZWhhdmlvciwgaW5kaWNhdGUgYWdncmVzc2l2ZSBvciByaXNreSBmcmFtaW5nIG9yIGZvY3VzCiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKFsiRnJhbWluZyIsICJSaXNrIFRha2luZyJdKQogICAgICAgICAgICAgICAgY2hvc2VuX3dvcmQgPSAiYmlhc2VkIiBpZiBjaG9zZW5fY2F0ZWdvcnkgPT0gIkZyYW1pbmciIGVsc2UgImhpZ2gtcmlzayIKICAgICAgICAgICAgZWxpZiBndWlsdHlfc2VuZGVyX2RlY2lzaW9ucyA+IGlubm9jZW50X3NlbmRlcl9kZWNpc2lvbnMgYW5kIHNlbmRlcl90b3RhbF9yZXdhcmQgPiAwOgogICAgICAgICAgICAgICAgIyBMZWFuaW5nIHRvd2FyZHMgZ3VpbHR5IGRlY2lzaW9ucyBhbmQgcG9zaXRpdmUgcmV3YXJkLCBpbmNyZWFzZSBhc3NlcnRpdmVuZXNzCiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSAiVG9uZSIKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gImFzc2VydGl2ZSIKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgICMgRXhwbG9yZSBhbHRlcm5hdGl2ZSBzdHJhdGVnaWVzIGJhc2VkIG9uIGRldGFpbCBsZXZlbCBvciBhbWJpZ3VpdHkKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UoWyJEZXRhaWwgTGV2ZWwiLCAiQW1iaWd1aXR5Il0pCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9IHJhbmRvbS5jaG9pY2Uoc2VuZGVyX3dvcmRzW2Nob3Nlbl9jYXRlZ29yeV0pCgogICAgICAgICAgICAjIEZ1cnRoZXIgcmVmaW5lIGJhc2VkIG9uIHJld2FyZCBwYXR0ZXJucyBhbmQgaGlzdG9yeSBvZiBkZWNpc2lvbnMKICAgICAgICAgICAgaWYgc2VuZGVyX3RvdGFsX3Jld2FyZCA8IDA6CiAgICAgICAgICAgICAgICAjIElmIG92ZXJhbGwgcmV3YXJkcyBhcmUgbmVnYXRpdmUsIGFkanVzdCBlbW90aW9uYWwgYXBwZWFsIGFuZCByZWR1Y2UgcmlzawogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIkVtb3Rpb25hbCBBcHBlYWwiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJlbXBhdGhldGljIiBpZiAibmV1dHJhbCIgaW4gW2hbJ3NlbmRlciddWydjb250ZW50J10gZm9yIGggaW4gaGlzdG9yeSBpZiBoWydzZW5kZXInXVsnY2F0ZWdvcnknXSA9PSAiRW1vdGlvbmFsIEFwcGVhbCJdIGVsc2UgIm5ldXRyYWwiCiAgICAgICAgICAgIGlmIHNlbmRlcl9hdmdfcmV3YXJkIDwgLTEuMDoKICAgICAgICAgICAgICAgICMgSWYgYXZlcmFnZSByZXdhcmRzIGFyZSBjcml0aWNhbGx5IGxvdywgZHJhc3RpY2FsbHkgc2ltcGxpZnkgbGFuZ3VhZ2Ugc3R5bGUgYW5kIHRvbmUKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UoWyJMYW5ndWFnZSBTdHlsZSIsICJUb25lIl0pCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJjYXN1YWwiIGlmIGNob3Nlbl9jYXRlZ29yeSA9PSAiTGFuZ3VhZ2UgU3R5bGUiIGVsc2UgImNhbG0iCiAgICAgICAgZWxzZToKICAgICAgICAgICAgIyBJZiBubyBoaXN0b3J5LCBwaWNrIHJhbmRvbQogICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKHNlbmRlcl9jYXRlZ29yaWVzKQogICAgICAgICAgICBjaG9zZW5fd29yZCA9IHJhbmRvbS5jaG9pY2Uoc2VuZGVyX3dvcmRzW2Nob3Nlbl9jYXRlZ29yeV0pCgogICAgICAgICMgQ3JlYXRlIGEgcHJvbXB0IGZvciB0aGUgc2VuZGVyCiAgICAgICAgcHJvbXB0ID0geyJjYXRlZ29yeSI6IGNob3Nlbl9jYXRlZ29yeSwgImNvbnRlbnQiOiBjaG9zZW5fd29yZH0KICAgICAgICBwcm9tcHRzLmFwcGVuZChwcm9tcHQpCgogICAgcmV0dXJuIHByb21wdHMKCiMgQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSByZWNlaXZlciBwcm9tcHRzIGJhc2VkIG9uIHRoZSBlbnRpcmUgaGlzdG9yeSBvZiBpbnRlcmFjdGlvbnMKZGVmIGdlbmVyYXRlX3JlY2VpdmVyX3Byb21wdHMoaGlzdG9yeSk6CiAgICByZWNlaXZlcl9jYXRlZ29yaWVzID0gWwogICAgICAgICJFdmlkZW5jZSBTdHJlbmd0aCIsICJDcmVkaWJpbGl0eSBvZiBFdmlkZW5jZSIsICJCdXJkZW4gb2YgUHJvb2YiLAogICAgICAgICJDb25zaXN0ZW5jeSBvZiBTdG9yeSIsICJCaWFzIERldGVjdGlvbiIsICJMZWdhbCBTdGFuZGFyZCIsCiAgICAgICAgIkV4Y3VscGF0b3J5IFdlaWdodCIsICJBbWJpZ3VpdHkgUmVzb2x1dGlvbiIsICJXaXRuZXNzIFJlbGlhYmlsaXR5IiwKICAgICAgICAiQWxpYmkgVmVyaWZpY2F0aW9uIiwgIkFyZ3VtZW50IENvaGVzaW9uIiwgIlN0b3J5IFBsYXVzaWJpbGl0eSIsICJSaXNrIE1hbmFnZW1lbnQiCiAgICBdCiAgICByZWNlaXZlcl93b3JkcyA9IHsKICAgICAgICAiRXZpZGVuY2UgU3RyZW5ndGgiOiBbIndlYWsiLCAic3Ryb25nIiwgIm1vZGVyYXRlIiwgImluY29uY2x1c2l2ZSIsICJvdmVyd2hlbG1pbmciXSwKICAgICAgICAiQ3JlZGliaWxpdHkgb2YgRXZpZGVuY2UiOiBbInF1ZXN0aW9uYWJsZSIsICJjcmVkaWJsZSIsICJ1bmNsZWFyIiwgImRvdWJ0ZnVsIiwgInJlbGlhYmxlIl0sCiAgICAgICAgIkJ1cmRlbiBvZiBQcm9vZiI6IFsiaGlnaCIsICJsb3ciLCAibW9kZXJhdGUiLCAibGVuaWVudCIsICJzdHJpY3QiXSwKICAgICAgICAiQ29uc2lzdGVuY3kgb2YgU3RvcnkiOiBbImluY29uc2lzdGVudCIsICJjb25zaXN0ZW50IiwgImNvbnRyYWRpY3RvcnkiLCAicGFydGlhbCIsICJjb2hlcmVudCJdLAogICAgICAgICJCaWFzIERldGVjdGlvbiI6IFsiYmlhc2VkIiwgIm5ldXRyYWwiLCAidW5jZXJ0YWluIiwgImNsZWFyIiwgInN1YnRsZSJdLAogICAgICAgICJMZWdhbCBTdGFuZGFyZCI6IFsic3RyaWN0IiwgImxlbmllbnQiLCAibW9kZXJhdGUiLCAic2V2ZXJlIiwgInJlbGF4ZWQiXSwKICAgICAgICAiRXhjdWxwYXRvcnkgV2VpZ2h0IjogWyJpbXBvcnRhbnQiLCAibWlub3IiLCAiaXJyZWxldmFudCIsICJzaWduaWZpY2FudCIsICJvdmVyc3RhdGVkIl0sCiAgICAgICAgIkFtYmlndWl0eSBSZXNvbHV0aW9uIjogWyJyZXNvbHZlZCIsICJhbWJpZ3VvdXMiLCAiY2xlYXIiLCAidW5jZXJ0YWluIiwgInBhcnRpYWxseSByZXNvbHZlZCJdLAogICAgICAgICJXaXRuZXNzIFJlbGlhYmlsaXR5IjogWyJ1bnJlbGlhYmxlIiwgInJlbGlhYmxlIiwgInVuY2VydGFpbiIsICJjcmVkaWJsZSIsICJzaGFreSJdLAogICAgICAgICJBbGliaSBWZXJpZmljYXRpb24iOiBbInZlcmlmaWVkIiwgInVudmVyaWZpZWQiLCAidW5jZXJ0YWluIiwgImZhbHNlIiwgImluY29tcGxldGUiXSwKICAgICAgICAiQXJndW1lbnQgQ29oZXNpb24iOiBbImNvaGVzaXZlIiwgImZyYWdtZW50ZWQiLCAiZGlzam9pbnRlZCIsICJ3ZWxsLXN0cnVjdHVyZWQiLCAiaW5jb2hlcmVudCJdLAogICAgICAgICJTdG9yeSBQbGF1c2liaWxpdHkiOiBbInBsYXVzaWJsZSIsICJpbXBsYXVzaWJsZSIsICJxdWVzdGlvbmFibGUiLCAiYmVsaWV2YWJsZSIsICJkb3VidGZ1bCJdLAogICAgICAgICJSaXNrIE1hbmFnZW1lbnQiOiBbImhpZ2gtcmlzayIsICJsb3ctcmlzayIsICJtb2RlcmF0ZS1yaXNrIiwgIm92ZXJseSBjYXV0aW91cyIsICJyZWNrbGVzcyJdCiAgICB9CgogICAgcHJvbXB0cyA9IFtdCiAgICBmb3Igc3RhZ2UgaW4gcmFuZ2UoNSk6CiAgICAgICAgaWYgaGlzdG9yeToKICAgICAgICAgICAgIyBBbmFseXplIGZ1bGwgaGlzdG9yeSBvZiByZWNlaXZlcidzIHBlcmZvcm1hbmNlCiAgICAgICAgICAgIHJlY2VpdmVyX3RvdGFsX3Jld2FyZCA9IHN1bShbaFsncmVjZWl2ZXJfcmV3YXJkJ10gZm9yIGggaW4gaGlzdG9yeV0pCiAgICAgICAgICAgIHJlY2VpdmVyX2F2Z19yZXdhcmQgPSByZWNlaXZlcl90b3RhbF9yZXdhcmQgLyBsZW4oaGlzdG9yeSkKICAgICAgICAgICAgcmVjZWl2ZXJfc3VjY2Vzc19yYXRlID0gc3VtKFsxIGZvciBoIGluIGhpc3RvcnkgaWYgaFsncmVjZWl2ZXJfZGVjaXNpb24nXSA9PSBoWydzZW5kZXJfZGVjaXNpb24nXV0pIC8gbGVuKGhpc3RvcnkpCiAgICAgICAgICAgIGd1aWx0eV9yZWNlaXZlcl9kZWNpc2lvbnMgPSBzdW0oWzEgZm9yIGggaW4gaGlzdG9yeSBpZiBoWydyZWNlaXZlcl9kZWNpc2lvbiddID09IDFdKQogICAgICAgICAgICBpbm5vY2VudF9yZWNlaXZlcl9kZWNpc2lvbnMgPSBsZW4oaGlzdG9yeSkgLSBndWlsdHlfcmVjZWl2ZXJfZGVjaXNpb25zCgogICAgICAgICAgICAjIENhbGN1bGF0ZSByZWNlaXZlcidzIHJpc2sgbWFuYWdlbWVudCBzdHJhdGVneQogICAgICAgICAgICByaXNrX2F2ZXJzZV9iZWhhdmlvciA9IHN1bShbMSBmb3IgaCBpbiBoaXN0b3J5IGlmIGhbJ3JlY2VpdmVyX2RlY2lzaW9uJ10gPT0gMCBhbmQgaFsncmVjZWl2ZXJfcmV3YXJkJ10gPiAwXSkgLyBsZW4oaGlzdG9yeSkKCiAgICAgICAgICAgICMgQ29uc2lkZXIgcmV3YXJkIHZvbGF0aWxpdHkgKHZhcmlhbmNlIG9mIHJld2FyZHMpCiAgICAgICAgICAgIHJld2FyZF92YXJpYW5jZSA9IHN1bShbKGhbJ3JlY2VpdmVyX3Jld2FyZCddIC0gcmVjZWl2ZXJfYXZnX3Jld2FyZCkgKiogMiBmb3IgaCBpbiBoaXN0b3J5XSkgLyBsZW4oaGlzdG9yeSkKCiAgICAgICAgICAgICMgVXNlIHRyZW5kcyBmb3IgY2F0ZWdvcnkgc2VsZWN0aW9uCiAgICAgICAgICAgIGlmIHJlY2VpdmVyX2F2Z19yZXdhcmQgPiAxLjAgYW5kIHJlY2VpdmVyX3N1Y2Nlc3NfcmF0ZSA+IDAuODoKICAgICAgICAgICAgICAgICMgSGlnaCBhdmVyYWdlIHJld2FyZCBhbmQgaGlnaCBzdWNjZXNzIHJhdGUsIGluY3JlYXNlIGV2aWRlbmNlIHN0cmVuZ3RoIGFuZCBjcmVkaWJpbGl0eQogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShbIkV2aWRlbmNlIFN0cmVuZ3RoIiwgIkNyZWRpYmlsaXR5IG9mIEV2aWRlbmNlIl0pCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJzdHJvbmciIGlmIGNob3Nlbl9jYXRlZ29yeSA9PSAiRXZpZGVuY2UgU3RyZW5ndGgiIGVsc2UgImNyZWRpYmxlIgogICAgICAgICAgICBlbGlmIHJld2FyZF92YXJpYW5jZSA+IDEuMDoKICAgICAgICAgICAgICAgICMgSGlnaCByZXdhcmQgdmFyaWFuY2UsIGluZGljYXRlIGluY29uc2lzdGVudCBkZWNpc2lvbi1tYWtpbmcsIGFkanVzdCBjb25zaXN0ZW5jeSBvZiBzdG9yeQogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gIkNvbnNpc3RlbmN5IG9mIFN0b3J5IgogICAgICAgICAgICAgICAgY2hvc2VuX3dvcmQgPSAiY29uc2lzdGVudCIKICAgICAgICAgICAgZWxpZiByaXNrX2F2ZXJzZV9iZWhhdmlvciA+IDAuNzoKICAgICAgICAgICAgICAgICMgSGlnaCByaXNrLWF2ZXJzZSBiZWhhdmlvciwgZm9jdXMgb24gbG93LXJpc2sgZGVjaXNpb25zIG9yIG1vZGVyYXRlIGJ1cmRlbiBvZiBwcm9vZgogICAgICAgICAgICAgICAgY2hvc2VuX2NhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShbIlJpc2sgTWFuYWdlbWVudCIsICJCdXJkZW4gb2YgUHJvb2YiXSkKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gImxvdy1yaXNrIiBpZiBjaG9zZW5fY2F0ZWdvcnkgPT0gIlJpc2sgTWFuYWdlbWVudCIgZWxzZSAibW9kZXJhdGUiCiAgICAgICAgICAgIGVsaWYgZ3VpbHR5X3JlY2VpdmVyX2RlY2lzaW9ucyA+IGlubm9jZW50X3JlY2VpdmVyX2RlY2lzaW9ucyBhbmQgcmVjZWl2ZXJfdG90YWxfcmV3YXJkID4gMDoKICAgICAgICAgICAgICAgICMgTGVhbmluZyB0b3dhcmRzIGd1aWx0eSBkZWNpc2lvbnMgYW5kIHBvc2l0aXZlIHJld2FyZCwgaW5jcmVhc2UgbGVnYWwgc3RhbmRhcmQKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9ICJMZWdhbCBTdGFuZGFyZCIKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gInN0cmljdCIKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgICMgRXhwbG9yZSBhbWJpZ3VpdHkgcmVzb2x1dGlvbiBvciB3aXRuZXNzIHJlbGlhYmlsaXR5CiAgICAgICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKFsiQW1iaWd1aXR5IFJlc29sdXRpb24iLCAiV2l0bmVzcyBSZWxpYWJpbGl0eSJdKQogICAgICAgICAgICAgICAgY2hvc2VuX3dvcmQgPSByYW5kb20uY2hvaWNlKHJlY2VpdmVyX3dvcmRzW2Nob3Nlbl9jYXRlZ29yeV0pCgogICAgICAgICAgICAjIEZ1cnRoZXIgcmVmaW5lIGJhc2VkIG9uIHJld2FyZCBwYXR0ZXJucyBhbmQgaGlzdG9yeSBvZiBkZWNpc2lvbnMKICAgICAgICAgICAgaWYgcmVjZWl2ZXJfdG90YWxfcmV3YXJkIDwgMDoKICAgICAgICAgICAgICAgICMgSWYgb3ZlcmFsbCByZXdhcmRzIGFyZSBuZWdhdGl2ZSwgYWRqdXN0IHN0b3J5IHBsYXVzaWJpbGl0eSBhbmQgcmVkdWNlIGJpYXMKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9ICJTdG9yeSBQbGF1c2liaWxpdHkiCiAgICAgICAgICAgICAgICBjaG9zZW5fd29yZCA9ICJwbGF1c2libGUiIGlmICJpbXBsYXVzaWJsZSIgaW4gW2hbJ3JlY2VpdmVyJ11bJ2NvbnRlbnQnXSBmb3IgaCBpbiBoaXN0b3J5IGlmIGhbJ3JlY2VpdmVyJ11bJ2NhdGVnb3J5J10gPT0gIlN0b3J5IFBsYXVzaWJpbGl0eSJdIGVsc2UgImltcGxhdXNpYmxlIgogICAgICAgICAgICBpZiByZWNlaXZlcl9hdmdfcmV3YXJkIDwgLTEuMDoKICAgICAgICAgICAgICAgICMgSWYgYXZlcmFnZSByZXdhcmRzIGFyZSBjcml0aWNhbGx5IGxvdywgZHJhc3RpY2FsbHkgc2ltcGxpZnkgc3Rvcnkgc3RydWN0dXJlIGFuZCBidXJkZW4gb2YgcHJvb2YKICAgICAgICAgICAgICAgIGNob3Nlbl9jYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UoWyJBcmd1bWVudCBDb2hlc2lvbiIsICJCdXJkZW4gb2YgUHJvb2YiXSkKICAgICAgICAgICAgICAgIGNob3Nlbl93b3JkID0gImNvaGVzaXZlIiBpZiBjaG9zZW5fY2F0ZWdvcnkgPT0gIkFyZ3VtZW50IENvaGVzaW9uIiBlbHNlICJsb3ciCiAgICAgICAgZWxzZToKICAgICAgICAgICAgIyBJZiBubyBoaXN0b3J5LCBwaWNrIHJhbmRvbQogICAgICAgICAgICBjaG9zZW5fY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKHJlY2VpdmVyX2NhdGVnb3JpZXMpCiAgICAgICAgICAgIGNob3Nlbl93b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjaG9zZW5fY2F0ZWdvcnldKQoKICAgICAgICAjIENyZWF0ZSBhIHByb21wdCBmb3IgdGhlIHJlY2VpdmVyCiAgICAgICAgcHJvbXB0ID0geyJjYXRlZ29yeSI6IGNob3Nlbl9jYXRlZ29yeSwgImNvbnRlbnQiOiBjaG9zZW5fd29yZH0KICAgICAgICBwcm9tcHRzLmFwcGVuZChwcm9tcHQpCgogICAgcmV0dXJuIHByb21wdHM=)

1
# A function to generate sender prompts based on the entire history of interactions

2
def generate\_sender\_prompts(history):

3
 sender\_categories = [

4
 "Tone", "Length", "Detail Level", "Focus", "Certainty",

5
 "Emotional Appeal", "Ambiguity", "Framing", "Language Style", "Complexity",

6
 "Logical Structure", "Persuasiveness", "Risk Taking"

7
 ]

8
 sender\_words = {

9
 "Tone": ["formal", "aggressive", "calm", "assertive", "persuasive", "defensive"],

10
 "Length": ["brief", "extended", "concise", "elaborate", "verbose"],

11
 "Detail Level": ["detailed", "vague", "precise", "general", "specific"],

12
 "Focus": ["crime", "defendant", "alibi", "victim", "motive", "circumstances"],

13
 "Certainty": ["confident", "doubtful", "ambiguous", "uncertain", "sure"],

14
 "Emotional Appeal": ["empathetic", "neutral", "emotional", "rational", "detached"],

15
 "Ambiguity": ["vague", "clear", "confusing", "uncertain", "ambiguous"],

16
 "Framing": ["biased", "neutral", "one-sided", "balanced", "manipulative"],

17
 "Language Style": ["legal", "casual", "technical", "colloquial", "formal"],

18
 "Complexity": ["simple", "complex", "moderate", "sophisticated", "layered"],

19
 "Logical Structure": ["linear", "non-linear", "circular", "hierarchical", "fragmented"],

20
 "Persuasiveness": ["strong", "weak", "moderate", "overwhelming", "subtle"],

21
 "Risk Taking": ["high-risk", "low-risk", "moderate-risk", "calculated-risk", "reckless"]

22
 }

23

24
 prompts = []

25
 for stage in range(5):

26
 if history:

27
 # Analyze full history of sender’s performance

28
 sender\_total\_reward = sum([h[’sender\_reward’] for h in history])

29
 sender\_avg\_reward = sender\_total\_reward / len(history)

30
 sender\_success\_rate = sum([1 for h in history if h[’receiver\_decision’] == h[’sender\_decision’]]) / len(history)

31
 guilty\_sender\_decisions = sum([1 for h in history if h[’sender\_decision’] == 1])

32
 innocent\_sender\_decisions = len(history) - guilty\_sender\_decisions

33

34
 # Calculate sender risk-taking behavior

35
 risk\_taking\_behavior = sum([abs(h[’sender\_reward’]) for h in history]) / len(history)

36

37
 # Consider reward volatility (variance of rewards)

38
 reward\_variance = sum([(h[’sender\_reward’] - sender\_avg\_reward) \*\* 2 for h in history]) / len(history)

39

40
 # Use trends for category selection

41
 if sender\_avg\_reward > 1.0 and sender\_success\_rate > 0.8:

42
 # High average reward and high success rate, increase logical structure and persuasiveness

43
 chosen\_category = random.choice(["Logical Structure", "Persuasiveness"])

44
 chosen\_word = "linear" if chosen\_category == "Logical Structure" else "strong"

45
 elif reward\_variance > 1.0:

46
 # High reward variance, indicate unstable strategy, adjust tone or complexity

47
 chosen\_category = random.choice(["Tone", "Complexity"])

48
 chosen\_word = "calm" if chosen\_category == "Tone" else "simple"

49
 elif risk\_taking\_behavior > 1.5:

50
 # High risk-taking behavior, indicate aggressive or risky framing or focus

51
 chosen\_category = random.choice(["Framing", "Risk Taking"])

52
 chosen\_word = "biased" if chosen\_category == "Framing" else "high-risk"

53
 elif guilty\_sender\_decisions > innocent\_sender\_decisions and sender\_total\_reward > 0:

54
 # Leaning towards guilty decisions and positive reward, increase assertiveness

55
 chosen\_category = "Tone"

56
 chosen\_word = "assertive"

57
 else:

58
 # Explore alternative strategies based on detail level or ambiguity

59
 chosen\_category = random.choice(["Detail Level", "Ambiguity"])

60
 chosen\_word = random.choice(sender\_words[chosen\_category])

61

62
 # Further refine based on reward patterns and history of decisions

63
 if sender\_total\_reward < 0:

64
 # If overall rewards are negative, adjust emotional appeal and reduce risk

65
 chosen\_category = "Emotional Appeal"

66
 chosen\_word = "empathetic" if "neutral" in [h[’sender’][’content’] for h in history if h[’sender’][’category’] == "Emotional Appeal"] else "neutral"

67
 if sender\_avg\_reward < -1.0:

68
 # If average rewards are critically low, drastically simplify language style and tone

69
 chosen\_category = random.choice(["Language Style", "Tone"])

70
 chosen\_word = "casual" if chosen\_category == "Language Style" else "calm"

71
 else:

72
 # If no history, pick random

73
 chosen\_category = random.choice(sender\_categories)

74
 chosen\_word = random.choice(sender\_words[chosen\_category])

75

76
 # Create a prompt for the sender

77
 prompt = {"category": chosen\_category, "content": chosen\_word}

78
 prompts.append(prompt)

79

80
 return prompts

81

82
# A function to generate receiver prompts based on the entire history of interactions

83
def generate\_receiver\_prompts(history):

84
 receiver\_categories = [

85
 "Evidence Strength", "Credibility of Evidence", "Burden of Proof",

86
 "Consistency of Story", "Bias Detection", "Legal Standard",

87
 "Exculpatory Weight", "Ambiguity Resolution", "Witness Reliability",

88
 "Alibi Verification", "Argument Cohesion", "Story Plausibility", "Risk Management"

89
 ]

90
 receiver\_words = {

91
 "Evidence Strength": ["weak", "strong", "moderate", "inconclusive", "overwhelming"],

92
 "Credibility of Evidence": ["questionable", "credible", "unclear", "doubtful", "reliable"],

93
 "Burden of Proof": ["high", "low", "moderate", "lenient", "strict"],

94
 "Consistency of Story": ["inconsistent", "consistent", "contradictory", "partial", "coherent"],

95
 "Bias Detection": ["biased", "neutral", "uncertain", "clear", "subtle"],

96
 "Legal Standard": ["strict", "lenient", "moderate", "severe", "relaxed"],

97
 "Exculpatory Weight": ["important", "minor", "irrelevant", "significant", "overstated"],

98
 "Ambiguity Resolution": ["resolved", "ambiguous", "clear", "uncertain", "partially resolved"],

99
 "Witness Reliability": ["unreliable", "reliable", "uncertain", "credible", "shaky"],

100
 "Alibi Verification": ["verified", "unverified", "uncertain", "false", "incomplete"],

101
 "Argument Cohesion": ["cohesive", "fragmented", "disjointed", "well-structured", "incoherent"],

102
 "Story Plausibility": ["plausible", "implausible", "questionable", "believable", "doubtful"],

103
 "Risk Management": ["high-risk", "low-risk", "moderate-risk", "overly cautious", "reckless"]

104
 }

105

106
 prompts = []

107
 for stage in range(5):

108
 if history:

109
 # Analyze full history of receiver’s performance

110
 receiver\_total\_reward = sum([h[’receiver\_reward’] for h in history])

111
 receiver\_avg\_reward = receiver\_total\_reward / len(history)

112
 receiver\_success\_rate = sum([1 for h in history if h[’receiver\_decision’] == h[’sender\_decision’]]) / len(history)

113
 guilty\_receiver\_decisions = sum([1 for h in history if h[’receiver\_decision’] == 1])

114
 innocent\_receiver\_decisions = len(history) - guilty\_receiver\_decisions

115

116
 # Calculate receiver’s risk management strategy

117
 risk\_averse\_behavior = sum([1 for h in history if h[’receiver\_decision’] == 0 and h[’receiver\_reward’] > 0]) / len(history)

118

119
 # Consider reward volatility (variance of rewards)

120
 reward\_variance = sum([(h[’receiver\_reward’] - receiver\_avg\_reward) \*\* 2 for h in history]) / len(history)

121

122
 # Use trends for category selection

123
 if receiver\_avg\_reward > 1.0 and receiver\_success\_rate > 0.8:

124
 # High average reward and high success rate, increase evidence strength and credibility

125
 chosen\_category = random.choice(["Evidence Strength", "Credibility of Evidence"])

126
 chosen\_word = "strong" if chosen\_category == "Evidence Strength" else "credible"

127
 elif reward\_variance > 1.0:

128
 # High reward variance, indicate inconsistent decision-making, adjust consistency of story

129
 chosen\_category = "Consistency of Story"

130
 chosen\_word = "consistent"

131
 elif risk\_averse\_behavior > 0.7:

132
 # High risk-averse behavior, focus on low-risk decisions or moderate burden of proof

133
 chosen\_category = random.choice(["Risk Management", "Burden of Proof"])

134
 chosen\_word = "low-risk" if chosen\_category == "Risk Management" else "moderate"

135
 elif guilty\_receiver\_decisions > innocent\_receiver\_decisions and receiver\_total\_reward > 0:

136
 # Leaning towards guilty decisions and positive reward, increase legal standard

137
 chosen\_category = "Legal Standard"

138
 chosen\_word = "strict"

139
 else:

140
 # Explore ambiguity resolution or witness reliability

141
 chosen\_category = random.choice(["Ambiguity Resolution", "Witness Reliability"])

142
 chosen\_word = random.choice(receiver\_words[chosen\_category])

143

144
 # Further refine based on reward patterns and history of decisions

145
 if receiver\_total\_reward < 0:

146
 # If overall rewards are negative, adjust story plausibility and reduce bias

147
 chosen\_category = "Story Plausibility"

148
 chosen\_word = "plausible" if "implausible" in [h[’receiver’][’content’] for h in history if h[’receiver’][’category’] == "Story Plausibility"] else "implausible"

149
 if receiver\_avg\_reward < -1.0:

150
 # If average rewards are critically low, drastically simplify story structure and burden of proof

151
 chosen\_category = random.choice(["Argument Cohesion", "Burden of Proof"])

152
 chosen\_word = "cohesive" if chosen\_category == "Argument Cohesion" else "low"

153
 else:

154
 # If no history, pick random

155
 chosen\_category = random.choice(receiver\_categories)

156
 chosen\_word = random.choice(receiver\_words[chosen\_category])

157

158
 # Create a prompt for the receiver

159
 prompt = {"category": chosen\_category, "content": chosen\_word}

160
 prompts.append(prompt)

161

162
 return prompts

The second set of code builds on these mechanisms by incorporating additional categories such as risk behavior and reward variance, enabling a more granular analysis.
This allows the system to adjust prompts based on risk-taking behavior, rewarding logical structure and persuasiveness for stable performance, while mitigating high reward volatility with simpler prompts.
The receiver prompt generation is similarly enhanced by factoring in risk aversion and reward consistency, leading to more refined prompts that emphasize decision stability.

##### D.2.3 LAE

Similarly, in the LAE problem, the following two sets of code for generating sender and receiver prompts demonstrate distinct approaches to adapting decisions based on historical interaction data.

Listing 5: One generated conditional prompt function of LAE in the S3 setting.

[⬇](data:text/plain;base64,ZGVmIGdlbmVyYXRlX3NlbmRlcl9wcm9tcHRzKGhpc3RvcnkpOgogICAgIyBBIGxpc3Qgb2YgcG9zc2libGUgd29yZHMgZm9yIGVhY2ggc2VuZGVyIGNhdGVnb3J5CiAgICBzZW5kZXJfd29yZHMgPSB7CiAgICAgICAgIlRvbmUiOiBbImZvcm1hbCIsICJpbmZvcm1hbCIsICJuZXV0cmFsIiwgImRpcmVjdCIsICJjb25jaWxpYXRvcnkiXSwKICAgICAgICAiTGVuZ3RoIjogWyJzaG9ydCIsICJjb25jaXNlIiwgImRldGFpbGVkIiwgImxlbmd0aHkiLCAiYnJpZWYiXSwKICAgICAgICAiU3BlY2lmaWNpdHkiOiBbImdlbmVyYWwiLCAicHJlY2lzZSIsICJ2YWd1ZSIsICJkZXRhaWxlZCIsICJicm9hZCJdLAogICAgICAgICJDbGFyaXR5IjogWyJjbGVhciIsICJhbWJpZ3VvdXMiLCAic3RyYWlnaHRmb3J3YXJkIiwgImNvbXBsaWNhdGVkIiwgIm9ic2N1cmUiXSwKICAgICAgICAiU3R5bGUiOiBbInBvbGl0ZSIsICJhdXRob3JpdGF0aXZlIiwgImNhc3VhbCIsICJwcm9mZXNzaW9uYWwiLCAiZnJpZW5kbHkiXSwKICAgICAgICAiRW1waGFzaXMiOiBbImltcG9ydGFudCIsICJtaW5vciIsICJjcml0aWNhbCIsICJ0cml2aWFsIiwgImNlbnRyYWwiXSwKICAgICAgICAiU3RydWN0dXJlIjogWyJsaW5lYXIiLCAibm9ubGluZWFyIiwgImhpZXJhcmNoaWNhbCIsICJzZXF1ZW50aWFsIiwgInJhbmRvbSJdLAogICAgICAgICJDb21wbGV4aXR5IjogWyJzaW1wbGUiLCAiY29tcGxleCIsICJpbnRyaWNhdGUiLCAiYmFzaWMiLCAiZWxhYm9yYXRlIl0sCiAgICAgICAgIkNvbnNpc3RlbmN5IjogWyJjb25zaXN0ZW50IiwgImluY29uc2lzdGVudCIsICJ2YXJpYWJsZSIsICJzcG9yYWRpYyIsICJzdGVhZHkiXSwKICAgICAgICAiSW5mb3JtYXRpdmVuZXNzIjogWyJoaWdoIiwgImxvdyIsICJtZWRpdW0iLCAibWluaW1hbCIsICJleHRlbnNpdmUiXQogICAgfQoKICAgICMgR2VuZXJhdGUgcHJvbXB0cyBiYXNlZCBvbiBjb21wbGV4IGhpc3RvcmljYWwgaW50ZXJhY3Rpb25zIGZvciA1IHN0YWdlcwogICAgcHJvbXB0cyA9IFtdCiAgICB1c2VkX2NhdGVnb3JpZXMgPSBzZXQoKQoKICAgIGZvciBzdGFnZSBpbiByYW5nZSg1KToKICAgICAgICBpZiBoaXN0b3J5OgogICAgICAgICAgICAjIEV4dHJhY3QgYWxsIGhpc3RvcnkgZWxlbWVudHMKICAgICAgICAgICAgcGF0cm9scywgc3BlZWRpbmcsIHJld2FyZF9zZW5kZXIsIHJld2FyZF9yZWNlaXZlciA9IHppcCgqaGlzdG9yeSkKCiAgICAgICAgICAgICMgQ29tcGxleCBsb2dpYyB1c2luZyBtdWx0aXBsZSBoaXN0b3JpY2FsIGZhY3RvcnMKICAgICAgICAgICAgcGF0cm9sX2hpc3RvcnkgPSBbc3VtKHBhdCkgZm9yIHBhdCBpbiBwYXRyb2xzXQogICAgICAgICAgICBzcGVlZGluZ19oaXN0b3J5ID0gW3N1bShzcGQpIGZvciBzcGQgaW4gc3BlZWRpbmddCgogICAgICAgICAgICB0b3RhbF9wYXRyb2xzID0gc3VtKHBhdHJvbF9oaXN0b3J5KQogICAgICAgICAgICB0b3RhbF9zcGVlZGluZyA9IHN1bShzcGVlZGluZ19oaXN0b3J5KQoKICAgICAgICAgICAgYXZnX3NlbmRlcl9yZXdhcmQgPSBzdW0ocmV3YXJkX3NlbmRlcikgLyBsZW4ocmV3YXJkX3NlbmRlcikKICAgICAgICAgICAgYXZnX3JlY2VpdmVyX3Jld2FyZCA9IHN1bShyZXdhcmRfcmVjZWl2ZXIpIC8gbGVuKHJld2FyZF9yZWNlaXZlcikKCiAgICAgICAgICAgICMgSWYgdGhlcmUgd2VyZSBmZXdlciBwYXRyb2xzIGJ1dCBhIGxvdCBvZiBzcGVlZGluZywgaW5jcmVhc2UgIlRvbmUiCiAgICAgICAgICAgIGlmIHRvdGFsX3BhdHJvbHMgPCBsZW4oaGlzdG9yeSkgYW5kIHRvdGFsX3NwZWVkaW5nID4gbGVuKGhpc3RvcnkpOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiVG9uZSIKICAgICAgICAgICAgICAgIHdvcmQgPSAiZGlyZWN0IgoKICAgICAgICAgICAgIyBJZiBzZW5kZXIgcmV3YXJkcyBhcmUgY29uc2lzdGVudGx5IGxvdywgaW5jcmVhc2UgIkluZm9ybWF0aXZlbmVzcyIKICAgICAgICAgICAgZWxpZiBhbGwociA8IDAuNSBmb3IgciBpbiByZXdhcmRfc2VuZGVyKToKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIkluZm9ybWF0aXZlbmVzcyIKICAgICAgICAgICAgICAgIHdvcmQgPSAiZXh0ZW5zaXZlIgoKICAgICAgICAgICAgIyBJZiByZWNlaXZlciByZXdhcmRzIGFyZSBoaWdoIGJ1dCBzcGVlZGluZyBpcyBzdGlsbCBoYXBwZW5pbmcsIGluY3JlYXNlICJDbGFyaXR5IgogICAgICAgICAgICBlbGlmIGF2Z19yZWNlaXZlcl9yZXdhcmQgPiAwLjcgYW5kIHRvdGFsX3NwZWVkaW5nID4gbGVuKGhpc3RvcnkpIC8gMjoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIkNsYXJpdHkiCiAgICAgICAgICAgICAgICB3b3JkID0gImNsZWFyIgoKICAgICAgICAgICAgIyBJZiBwYXRyb2xzIGFyZSBzcG9yYWRpYywgYWRqdXN0ICJDb25zaXN0ZW5jeSIKICAgICAgICAgICAgZWxpZiBsZW4oc2V0KHBhdHJvbF9oaXN0b3J5KSkgPiAxOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiQ29uc2lzdGVuY3kiCiAgICAgICAgICAgICAgICB3b3JkID0gImluY29uc2lzdGVudCIKCiAgICAgICAgICAgICMgSWYgc3BlZWRpbmcgaXMgZGVjcmVhc2luZyBvdmVyIHRpbWUsIHNpbXBsaWZ5ICJTdHJ1Y3R1cmUiCiAgICAgICAgICAgIGVsaWYgc3BlZWRpbmdfaGlzdG9yeVstMV0gPCBzcGVlZGluZ19oaXN0b3J5WzBdOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiU3RydWN0dXJlIgogICAgICAgICAgICAgICAgd29yZCA9ICJsaW5lYXIiCgogICAgICAgICAgICAjIElmIHNlbmRlciByZXdhcmRzIGFyZSBpbXByb3ZpbmcsIGJ1dCBwYXRyb2xzIGFyZSBzdGlsbCBmcmVxdWVudCwgZm9jdXMgb24gIkxlbmd0aCIKICAgICAgICAgICAgZWxpZiBhdmdfc2VuZGVyX3Jld2FyZCA+IDAuNiBhbmQgdG90YWxfcGF0cm9scyA+IGxlbihoaXN0b3J5KSAvIDI6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICJMZW5ndGgiCiAgICAgICAgICAgICAgICB3b3JkID0gImNvbmNpc2UiCgogICAgICAgICAgICAjIFJhbmRvbSBjaG9pY2UgaWYgbm8gc3BlY2lmaWMgY29uZGl0aW9uIG1hdGNoZXMKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShsaXN0KHNlbmRlcl93b3Jkcy5rZXlzKCkpKQogICAgICAgICAgICAgICAgd29yZCA9IHJhbmRvbS5jaG9pY2Uoc2VuZGVyX3dvcmRzW2NhdGVnb3J5XSkKCiAgICAgICAgICAgICMgQXZvaWQgcmV1c2luZyB0aGUgc2FtZSBjYXRlZ29yeSB0b28gb2Z0ZW4KICAgICAgICAgICAgd2hpbGUgY2F0ZWdvcnkgaW4gdXNlZF9jYXRlZ29yaWVzOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSByYW5kb20uY2hvaWNlKGxpc3Qoc2VuZGVyX3dvcmRzLmtleXMoKSkpCiAgICAgICAgICAgICAgICB3b3JkID0gcmFuZG9tLmNob2ljZShzZW5kZXJfd29yZHNbY2F0ZWdvcnldKQoKICAgICAgICBlbHNlOgogICAgICAgICAgICBjYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UobGlzdChzZW5kZXJfd29yZHMua2V5cygpKSkKICAgICAgICAgICAgd29yZCA9IHJhbmRvbS5jaG9pY2Uoc2VuZGVyX3dvcmRzW2NhdGVnb3J5XSkKCiAgICAgICAgcHJvbXB0cy5hcHBlbmQoKGNhdGVnb3J5LCB3b3JkKSkKICAgICAgICB1c2VkX2NhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KQoKICAgICAgICAjIFNpbXVsYXRlIGludGVyYWN0aW9uIHN0YWdlIHByb2dyZXNzaW9uCiAgICAgICAgaGlzdG9yeS5hcHBlbmQoKFtyYW5kb20ucmFuZGludCgwLCAxKSBmb3IgXyBpbiByYW5nZSgzKV0sIFtyYW5kb20ucmFuZGludCgwLCAxKSBmb3IgXyBpbiByYW5nZSgzKV0sIHJhbmRvbS5yYW5kb20oKSwgcmFuZG9tLnJhbmRvbSgpKSkKCiAgICByZXR1cm4gcHJvbXB0cwoKZGVmIGdlbmVyYXRlX3JlY2VpdmVyX3Byb21wdHMoaGlzdG9yeSk6CiAgICAjIEEgbGlzdCBvZiBwb3NzaWJsZSB3b3JkcyBmb3IgZWFjaCByZWNlaXZlciBjYXRlZ29yeQogICAgcmVjZWl2ZXJfd29yZHMgPSB7CiAgICAgICAgIlJpc2stUHJlZmVyZW5jZSI6IFsiY2F1dGlvdXMiLCAiYm9sZCIsICJiYWxhbmNlZCIsICJyaXNrLWF2ZXJzZSIsICJyZWNrbGVzcyJdLAogICAgICAgICJBdHRlbnRpb24iOiBbImZvY3VzZWQiLCAiZGlzdHJhY3RlZCIsICJhbGVydCIsICJpbmF0dGVudGl2ZSIsICJlbmdhZ2VkIl0sCiAgICAgICAgIkRlY2lzaW9uLU1ha2luZyI6IFsicmF0aW9uYWwiLCAiaW1wdWxzaXZlIiwgImRlbGliZXJhdGUiLCAiaGFzdHkiLCAiY2FsY3VsYXRlZCJdLAogICAgICAgICJUcnVzdCI6IFsiaGlnaCIsICJsb3ciLCAibW9kZXJhdGUiLCAic2tlcHRpY2FsIiwgImNvbmZpZGVudCJdLAogICAgICAgICJFbW90aW9uYWwtU3RhdGUiOiBbImNhbG0iLCAiYW54aW91cyIsICJmcnVzdHJhdGVkIiwgIm5ldXRyYWwiLCAiZXhjaXRlZCJdLAogICAgICAgICJJbmZvcm1hdGlvbi1Qcm9jZXNzaW5nIjogWyJzbG93IiwgImZhc3QiLCAidGhvcm91Z2giLCAic3VwZXJmaWNpYWwiLCAiZWZmaWNpZW50Il0sCiAgICAgICAgIkFkYXB0YWJpbGl0eSI6IFsiZmxleGlibGUiLCAicmlnaWQiLCAiYWRqdXN0YWJsZSIsICJzdHViYm9ybiIsICJvcGVuIl0sCiAgICAgICAgIkNvbXBsaWFuY2UiOiBbIm9iZWRpZW50IiwgImRlZmlhbnQiLCAiY29vcGVyYXRpdmUiLCAicmVsdWN0YW50IiwgImFncmVlYWJsZSJdLAogICAgICAgICJSZXNwb25zaXZlbmVzcyI6IFsicXVpY2siLCAic2xvdyIsICJtb2RlcmF0ZSIsICJkZWxheWVkIiwgImltbWVkaWF0ZSJdLAogICAgICAgICJNZW1vcnkiOiBbInNoYXJwIiwgImZvcmdldGZ1bCIsICJhdmVyYWdlIiwgInNob3J0LXRlcm0iLCAibG9uZy10ZXJtIl0KICAgIH0KCiAgICAjIEdlbmVyYXRlIHByb21wdHMgYmFzZWQgb24gY29tcGxleCBoaXN0b3JpY2FsIGludGVyYWN0aW9ucyBmb3IgNSBzdGFnZXMKICAgIHByb21wdHMgPSBbXQogICAgdXNlZF9jYXRlZ29yaWVzID0gc2V0KCkKCiAgICBmb3Igc3RhZ2UgaW4gcmFuZ2UoNSk6CiAgICAgICAgaWYgaGlzdG9yeToKICAgICAgICAgICAgcGF0cm9scywgc3BlZWRpbmcsIHJld2FyZF9zZW5kZXIsIHJld2FyZF9yZWNlaXZlciA9IHppcCgqaGlzdG9yeSkKCiAgICAgICAgICAgIHBhdHJvbF9oaXN0b3J5ID0gW3N1bShwYXQpIGZvciBwYXQgaW4gcGF0cm9sc10KICAgICAgICAgICAgc3BlZWRpbmdfaGlzdG9yeSA9IFtzdW0oc3BkKSBmb3Igc3BkIGluIHNwZWVkaW5nXQoKICAgICAgICAgICAgdG90YWxfcGF0cm9scyA9IHN1bShwYXRyb2xfaGlzdG9yeSkKICAgICAgICAgICAgdG90YWxfc3BlZWRpbmcgPSBzdW0oc3BlZWRpbmdfaGlzdG9yeSkKCiAgICAgICAgICAgIGF2Z19zZW5kZXJfcmV3YXJkID0gc3VtKHJld2FyZF9zZW5kZXIpIC8gbGVuKHJld2FyZF9zZW5kZXIpCiAgICAgICAgICAgIGF2Z19yZWNlaXZlcl9yZXdhcmQgPSBzdW0ocmV3YXJkX3JlY2VpdmVyKSAvIGxlbihyZXdhcmRfcmVjZWl2ZXIpCgogICAgICAgICAgICAjIElmIHJlY2VpdmVyIGNvbnNpc3RlbnRseSBnZXRzIGhpZ2ggcmV3YXJkcywgaW5jcmVhc2UgIlRydXN0IgogICAgICAgICAgICBpZiBhbGwociA+IDAuNyBmb3IgciBpbiByZXdhcmRfcmVjZWl2ZXIpOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiVHJ1c3QiCiAgICAgICAgICAgICAgICB3b3JkID0gImhpZ2giCgogICAgICAgICAgICAjIElmIHJlY2VpdmVyIGhhcyBiZWVuIHNwZWVkaW5nIGZyZXF1ZW50bHksIGFsdGVyICJSaXNrLVByZWZlcmVuY2UiCiAgICAgICAgICAgIGVsaWYgdG90YWxfc3BlZWRpbmcgPiBsZW4oaGlzdG9yeSkgLyAyOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiUmlzay1QcmVmZXJlbmNlIgogICAgICAgICAgICAgICAgd29yZCA9ICJib2xkIgoKICAgICAgICAgICAgIyBJZiBwYXRyb2xzIHdlcmUgbG93IGJ1dCByZWNlaXZlciBzdGlsbCBkaWRuJ3Qgc3BlZWQsIGluY3JlYXNlICJDb21wbGlhbmNlIgogICAgICAgICAgICBlbGlmIHRvdGFsX3BhdHJvbHMgPCBsZW4oaGlzdG9yeSkgLyAyIGFuZCB0b3RhbF9zcGVlZGluZyA8IGxlbihoaXN0b3J5KSAvIDI6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICJDb21wbGlhbmNlIgogICAgICAgICAgICAgICAgd29yZCA9ICJvYmVkaWVudCIKCiAgICAgICAgICAgICMgSWYgc2VuZGVyIHJld2FyZHMgYXJlIGRlY3JlYXNpbmcsIGFsdGVyICJBZGFwdGFiaWxpdHkiCiAgICAgICAgICAgIGVsaWYgcmV3YXJkX3NlbmRlclstMV0gPCByZXdhcmRfc2VuZGVyWzBdOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiQWRhcHRhYmlsaXR5IgogICAgICAgICAgICAgICAgd29yZCA9ICJmbGV4aWJsZSIKCiAgICAgICAgICAgICMgSWYgcmVjZWl2ZXIncyBhdHRlbnRpb24gc2VlbXMgdG8gYmUgd2F2ZXJpbmcgKGluY29uc2lzdGVudCBzcGVlZGluZyksIGFkanVzdCAiQXR0ZW50aW9uIgogICAgICAgICAgICBlbGlmIGFueShzcGVlZGluZ19oaXN0b3J5W2ldICE9IHNwZWVkaW5nX2hpc3RvcnlbaSAtIDFdIGZvciBpIGluIHJhbmdlKDEsIGxlbihzcGVlZGluZ19oaXN0b3J5KSkpOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiQXR0ZW50aW9uIgogICAgICAgICAgICAgICAgd29yZCA9ICJmb2N1c2VkIgoKICAgICAgICAgICAgIyBJZiByZXdhcmRzIGZvciByZWNlaXZlciB3ZXJlIHZvbGF0aWxlLCBhbHRlciAiRW1vdGlvbmFsLVN0YXRlIgogICAgICAgICAgICBlbGlmIGxlbihzZXQocmV3YXJkX3JlY2VpdmVyKSkgPiAxOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiRW1vdGlvbmFsLVN0YXRlIgogICAgICAgICAgICAgICAgd29yZCA9ICJhbnhpb3VzIgoKICAgICAgICAgICAgIyBSYW5kb20gZmFsbGJhY2sKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShsaXN0KHJlY2VpdmVyX3dvcmRzLmtleXMoKSkpCiAgICAgICAgICAgICAgICB3b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjYXRlZ29yeV0pCgogICAgICAgICAgICAjIEF2b2lkIHJldXNpbmcgdGhlIHNhbWUgY2F0ZWdvcnkgdG9vIG9mdGVuCiAgICAgICAgICAgIHdoaWxlIGNhdGVnb3J5IGluIHVzZWRfY2F0ZWdvcmllczoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShsaXN0KHJlY2VpdmVyX3dvcmRzLmtleXMoKSkpCiAgICAgICAgICAgICAgICB3b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjYXRlZ29yeV0pCgogICAgICAgIGVsc2U6CiAgICAgICAgICAgIGNhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShsaXN0KHJlY2VpdmVyX3dvcmRzLmtleXMoKSkpCiAgICAgICAgICAgIHdvcmQgPSByYW5kb20uY2hvaWNlKHJlY2VpdmVyX3dvcmRzW2NhdGVnb3J5XSkKCiAgICAgICAgcHJvbXB0cy5hcHBlbmQoKGNhdGVnb3J5LCB3b3JkKSkKICAgICAgICB1c2VkX2NhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KQoKICAgICAgICAjIFNpbXVsYXRlIGludGVyYWN0aW9uIHN0YWdlIHByb2dyZXNzaW9uCiAgICAgICAgaGlzdG9yeS5hcHBlbmQoKFtyYW5kb20ucmFuZGludCgwLCAxKSBmb3IgXyBpbiByYW5nZSgzKV0sIFtyYW5kb20ucmFuZGludCgwLCAxKSBmb3IgXyBpbiByYW5nZSgzKV0sIHJhbmRvbS5yYW5kb20oKSwgcmFuZG9tLnJhbmRvbSgpKSkKCiAgICByZXR1cm4gcHJvbXB0cw==)

1
def generate\_sender\_prompts(history):

2
 # A list of possible words for each sender category

3
 sender\_words = {

4
 "Tone": ["formal", "informal", "neutral", "direct", "conciliatory"],

5
 "Length": ["short", "concise", "detailed", "lengthy", "brief"],

6
 "Specificity": ["general", "precise", "vague", "detailed", "broad"],

7
 "Clarity": ["clear", "ambiguous", "straightforward", "complicated", "obscure"],

8
 "Style": ["polite", "authoritative", "casual", "professional", "friendly"],

9
 "Emphasis": ["important", "minor", "critical", "trivial", "central"],

10
 "Structure": ["linear", "nonlinear", "hierarchical", "sequential", "random"],

11
 "Complexity": ["simple", "complex", "intricate", "basic", "elaborate"],

12
 "Consistency": ["consistent", "inconsistent", "variable", "sporadic", "steady"],

13
 "Informativeness": ["high", "low", "medium", "minimal", "extensive"]

14
 }

15

16
 # Generate prompts based on complex historical interactions for 5 stages

17
 prompts = []

18
 used\_categories = set()

19

20
 for stage in range(5):

21
 if history:

22
 # Extract all history elements

23
 patrols, speeding, reward\_sender, reward\_receiver = zip(\*history)

24

25
 # Complex logic using multiple historical factors

26
 patrol\_history = [sum(pat) for pat in patrols]

27
 speeding\_history = [sum(spd) for spd in speeding]

28

29
 total\_patrols = sum(patrol\_history)

30
 total\_speeding = sum(speeding\_history)

31

32
 avg\_sender\_reward = sum(reward\_sender) / len(reward\_sender)

33
 avg\_receiver\_reward = sum(reward\_receiver) / len(reward\_receiver)

34

35
 # If there were fewer patrols but a lot of speeding, increase "Tone"

36
 if total\_patrols < len(history) and total\_speeding > len(history):

37
 category = "Tone"

38
 word = "direct"

39

40
 # If sender rewards are consistently low, increase "Informativeness"

41
 elif all(r < 0.5 for r in reward\_sender):

42
 category = "Informativeness"

43
 word = "extensive"

44

45
 # If receiver rewards are high but speeding is still happening, increase "Clarity"

46
 elif avg\_receiver\_reward > 0.7 and total\_speeding > len(history) / 2:

47
 category = "Clarity"

48
 word = "clear"

49

50
 # If patrols are sporadic, adjust "Consistency"

51
 elif len(set(patrol\_history)) > 1:

52
 category = "Consistency"

53
 word = "inconsistent"

54

55
 # If speeding is decreasing over time, simplify "Structure"

56
 elif speeding\_history[-1] < speeding\_history[0]:

57
 category = "Structure"

58
 word = "linear"

59

60
 # If sender rewards are improving, but patrols are still frequent, focus on "Length"

61
 elif avg\_sender\_reward > 0.6 and total\_patrols > len(history) / 2:

62
 category = "Length"

63
 word = "concise"

64

65
 # Random choice if no specific condition matches

66
 else:

67
 category = random.choice(list(sender\_words.keys()))

68
 word = random.choice(sender\_words[category])

69

70
 # Avoid reusing the same category too often

71
 while category in used\_categories:

72
 category = random.choice(list(sender\_words.keys()))

73
 word = random.choice(sender\_words[category])

74

75
 else:

76
 category = random.choice(list(sender\_words.keys()))

77
 word = random.choice(sender\_words[category])

78

79
 prompts.append((category, word))

80
 used\_categories.add(category)

81

82
 # Simulate interaction stage progression

83
 history.append(([random.randint(0, 1) for \_ in range(3)], [random.randint(0, 1) for \_ in range(3)], random.random(), random.random()))

84

85
 return prompts

86

87
def generate\_receiver\_prompts(history):

88
 # A list of possible words for each receiver category

89
 receiver\_words = {

90
 "Risk-Preference": ["cautious", "bold", "balanced", "risk-averse", "reckless"],

91
 "Attention": ["focused", "distracted", "alert", "inattentive", "engaged"],

92
 "Decision-Making": ["rational", "impulsive", "deliberate", "hasty", "calculated"],

93
 "Trust": ["high", "low", "moderate", "skeptical", "confident"],

94
 "Emotional-State": ["calm", "anxious", "frustrated", "neutral", "excited"],

95
 "Information-Processing": ["slow", "fast", "thorough", "superficial", "efficient"],

96
 "Adaptability": ["flexible", "rigid", "adjustable", "stubborn", "open"],

97
 "Compliance": ["obedient", "defiant", "cooperative", "reluctant", "agreeable"],

98
 "Responsiveness": ["quick", "slow", "moderate", "delayed", "immediate"],

99
 "Memory": ["sharp", "forgetful", "average", "short-term", "long-term"]

100
 }

101

102
 # Generate prompts based on complex historical interactions for 5 stages

103
 prompts = []

104
 used\_categories = set()

105

106
 for stage in range(5):

107
 if history:

108
 patrols, speeding, reward\_sender, reward\_receiver = zip(\*history)

109

110
 patrol\_history = [sum(pat) for pat in patrols]

111
 speeding\_history = [sum(spd) for spd in speeding]

112

113
 total\_patrols = sum(patrol\_history)

114
 total\_speeding = sum(speeding\_history)

115

116
 avg\_sender\_reward = sum(reward\_sender) / len(reward\_sender)

117
 avg\_receiver\_reward = sum(reward\_receiver) / len(reward\_receiver)

118

119
 # If receiver consistently gets high rewards, increase "Trust"

120
 if all(r > 0.7 for r in reward\_receiver):

121
 category = "Trust"

122
 word = "high"

123

124
 # If receiver has been speeding frequently, alter "Risk-Preference"

125
 elif total\_speeding > len(history) / 2:

126
 category = "Risk-Preference"

127
 word = "bold"

128

129
 # If patrols were low but receiver still didn’t speed, increase "Compliance"

130
 elif total\_patrols < len(history) / 2 and total\_speeding < len(history) / 2:

131
 category = "Compliance"

132
 word = "obedient"

133

134
 # If sender rewards are decreasing, alter "Adaptability"

135
 elif reward\_sender[-1] < reward\_sender[0]:

136
 category = "Adaptability"

137
 word = "flexible"

138

139
 # If receiver’s attention seems to be wavering (inconsistent speeding), adjust "Attention"

140
 elif any(speeding\_history[i] != speeding\_history[i - 1] for i in range(1, len(speeding\_history))):

141
 category = "Attention"

142
 word = "focused"

143

144
 # If rewards for receiver were volatile, alter "Emotional-State"

145
 elif len(set(reward\_receiver)) > 1:

146
 category = "Emotional-State"

147
 word = "anxious"

148

149
 # Random fallback

150
 else:

151
 category = random.choice(list(receiver\_words.keys()))

152
 word = random.choice(receiver\_words[category])

153

154
 # Avoid reusing the same category too often

155
 while category in used\_categories:

156
 category = random.choice(list(receiver\_words.keys()))

157
 word = random.choice(receiver\_words[category])

158

159
 else:

160
 category = random.choice(list(receiver\_words.keys()))

161
 word = random.choice(receiver\_words[category])

162

163
 prompts.append((category, word))

164
 used\_categories.add(category)

165

166
 # Simulate interaction stage progression

167
 history.append(([random.randint(0, 1) for \_ in range(3)], [random.randint(0, 1) for \_ in range(3)], random.random(), random.random()))

168

169
 return prompts

The first set relies on direct analysis of raw data, such as patrol counts, speeding incidents, and sender/receiver rewards.
It employs relatively simple conditional checks to adjust prompt categories like Tone, Clarity, and Risk-Preference, with a fallback mechanism that introduces randomized prompts to ensure variety.

Listing 6: Another generated conditional prompt function of LAE in the S3 setting.

[⬇](data:text/plain;base64,ZGVmIGV2YWx1YXRlX3BhdHJvbF9lZmZpY2llbmN5KHBhdHJvbHMsIHNwZWVkaW5nKToKICAgICMgQ2FsY3VsYXRlIHBhdHJvbCBlZmZpY2llbmN5OiBtb3JlIHBhdHJvbHMgc2hvdWxkIHJlZHVjZSBzcGVlZGluZwogICAgcGF0cm9sX2VmZmVjdCA9IFsxIGlmIHAgPT0gMSBhbmQgcyA9PSAwIGVsc2UgMCBmb3IgcCwgcyBpbiB6aXAocGF0cm9scywgc3BlZWRpbmcpXQogICAgcmV0dXJuIHN1bShwYXRyb2xfZWZmZWN0KSAvIGxlbihwYXRyb2xzKQoKZGVmIGV2YWx1YXRlX3Jld2FyZF90cmVuZChyZXdhcmRzKToKICAgICMgQ2hlY2sgaWYgcmV3YXJkcyBhcmUgaW5jcmVhc2luZywgZGVjcmVhc2luZywgb3Igc3RhYmxlCiAgICBpZiBhbGwocmV3YXJkc1tpXSA8PSByZXdhcmRzW2kgKyAxXSBmb3IgaSBpbiByYW5nZShsZW4ocmV3YXJkcykgLSAxKSk6CiAgICAgICAgcmV0dXJuICJpbmNyZWFzaW5nIgogICAgZWxpZiBhbGwocmV3YXJkc1tpXSA+PSByZXdhcmRzW2kgKyAxXSBmb3IgaSBpbiByYW5nZShsZW4ocmV3YXJkcykgLSAxKSk6CiAgICAgICAgcmV0dXJuICJkZWNyZWFzaW5nIgogICAgZWxzZToKICAgICAgICByZXR1cm4gInN0YWJsZSIKCmRlZiBldmFsdWF0ZV9zcGVlZGluZ19wYXR0ZXJuKHNwZWVkaW5nX2hpc3RvcnkpOgogICAgIyBJZGVudGlmeSBpZiBzcGVlZGluZyBpcyByYW5kb20sIGNvbnNpc3RlbnQsIG9yIGRlY2xpbmluZwogICAgc3BlZWRpbmdfdG90YWxzID0gW3N1bShzcGVlZHMpIGZvciBzcGVlZHMgaW4gc3BlZWRpbmdfaGlzdG9yeV0KICAgIGlmIGFsbChzcGVlZGluZ190b3RhbHNbaV0gPT0gc3BlZWRpbmdfdG90YWxzW2kgKyAxXSBmb3IgaSBpbiByYW5nZShsZW4oc3BlZWRpbmdfdG90YWxzKSAtIDEpKToKICAgICAgICByZXR1cm4gImNvbnNpc3RlbnQiCiAgICBlbGlmIHNwZWVkaW5nX3RvdGFsc1stMV0gPCBzcGVlZGluZ190b3RhbHNbMF06CiAgICAgICAgcmV0dXJuICJkZWNsaW5pbmciCiAgICBlbHNlOgogICAgICAgIHJldHVybiAicmFuZG9tIgoKZGVmIGV2YWx1YXRlX3BhdHJvbF9kaXN0cmlidXRpb24ocGF0cm9sc19oaXN0b3J5KToKICAgICMgRGV0ZXJtaW5lIGlmIHBhdHJvbHMgYXJlIGV2ZW5seSBkaXN0cmlidXRlZCBhY3Jvc3Mgc3RhZ2VzCiAgICBwYXRyb2xfdG90YWxzID0gW3N1bShwYXRyb2wpIGZvciBwYXRyb2wgaW4gcGF0cm9sc19oaXN0b3J5XQogICAgaWYgbGVuKHNldChwYXRyb2xfdG90YWxzKSkgPT0gMToKICAgICAgICByZXR1cm4gImV2ZW4iCiAgICBlbGlmIHBhdHJvbF90b3RhbHNbLTFdIDwgcGF0cm9sX3RvdGFsc1swXToKICAgICAgICByZXR1cm4gImRlY3JlYXNpbmciCiAgICBlbHNlOgogICAgICAgIHJldHVybiAidW5ldmVuIgoKZGVmIGdlbmVyYXRlX3NlbmRlcl9wcm9tcHRzKGhpc3RvcnkpOgogICAgc2VuZGVyX3dvcmRzID0gewogICAgICAgICJUb25lIjogWyJmb3JtYWwiLCAiaW5mb3JtYWwiLCAibmV1dHJhbCIsICJkaXJlY3QiLCAiY29uY2lsaWF0b3J5Il0sCiAgICAgICAgIkxlbmd0aCI6IFsic2hvcnQiLCAiY29uY2lzZSIsICJkZXRhaWxlZCIsICJsZW5ndGh5IiwgImJyaWVmIl0sCiAgICAgICAgIlNwZWNpZmljaXR5IjogWyJnZW5lcmFsIiwgInByZWNpc2UiLCAidmFndWUiLCAiZGV0YWlsZWQiLCAiYnJvYWQiXSwKICAgICAgICAiQ2xhcml0eSI6IFsiY2xlYXIiLCAiYW1iaWd1b3VzIiwgInN0cmFpZ2h0Zm9yd2FyZCIsICJjb21wbGljYXRlZCIsICJvYnNjdXJlIl0sCiAgICAgICAgIlN0eWxlIjogWyJwb2xpdGUiLCAiYXV0aG9yaXRhdGl2ZSIsICJjYXN1YWwiLCAicHJvZmVzc2lvbmFsIiwgImZyaWVuZGx5Il0sCiAgICAgICAgIkVtcGhhc2lzIjogWyJpbXBvcnRhbnQiLCAibWlub3IiLCAiY3JpdGljYWwiLCAidHJpdmlhbCIsICJjZW50cmFsIl0sCiAgICAgICAgIlN0cnVjdHVyZSI6IFsibGluZWFyIiwgIm5vbmxpbmVhciIsICJoaWVyYXJjaGljYWwiLCAic2VxdWVudGlhbCIsICJyYW5kb20iXSwKICAgICAgICAiQ29tcGxleGl0eSI6IFsic2ltcGxlIiwgImNvbXBsZXgiLCAiaW50cmljYXRlIiwgImJhc2ljIiwgImVsYWJvcmF0ZSJdLAogICAgICAgICJDb25zaXN0ZW5jeSI6IFsiY29uc2lzdGVudCIsICJpbmNvbnNpc3RlbnQiLCAidmFyaWFibGUiLCAic3BvcmFkaWMiLCAic3RlYWR5Il0sCiAgICAgICAgIkluZm9ybWF0aXZlbmVzcyI6IFsiaGlnaCIsICJsb3ciLCAibWVkaXVtIiwgIm1pbmltYWwiLCAiZXh0ZW5zaXZlIl0KICAgIH0KCiAgICBwcm9tcHRzID0gW10KICAgIHVzZWRfY2F0ZWdvcmllcyA9IHNldCgpCgogICAgZm9yIHN0YWdlIGluIHJhbmdlKDUpOgogICAgICAgIGlmIGhpc3Rvcnk6CiAgICAgICAgICAgIHBhdHJvbHMsIHNwZWVkaW5nLCByZXdhcmRfc2VuZGVyLCByZXdhcmRfcmVjZWl2ZXIgPSB6aXAoKmhpc3RvcnkpCgogICAgICAgICAgICBwYXRyb2xfZWZmaWNpZW5jeSA9IGV2YWx1YXRlX3BhdHJvbF9lZmZpY2llbmN5KHBhdHJvbHNbLTFdLCBzcGVlZGluZ1stMV0pCiAgICAgICAgICAgIHJld2FyZF90cmVuZF9zZW5kZXIgPSBldmFsdWF0ZV9yZXdhcmRfdHJlbmQocmV3YXJkX3NlbmRlcikKICAgICAgICAgICAgcmV3YXJkX3RyZW5kX3JlY2VpdmVyID0gZXZhbHVhdGVfcmV3YXJkX3RyZW5kKHJld2FyZF9yZWNlaXZlcikKICAgICAgICAgICAgc3BlZWRpbmdfcGF0dGVybiA9IGV2YWx1YXRlX3NwZWVkaW5nX3BhdHRlcm4oc3BlZWRpbmcpCiAgICAgICAgICAgIHBhdHJvbF9kaXN0cmlidXRpb24gPSBldmFsdWF0ZV9wYXRyb2xfZGlzdHJpYnV0aW9uKHBhdHJvbHMpCgogICAgICAgICAgICAjIENvbXBsZXggZGVjaXNpb24tbWFraW5nIGJhc2VkIG9uIG11bHRpcGxlIGZhY3RvcnMKICAgICAgICAgICAgaWYgcGF0cm9sX2VmZmljaWVuY3kgPCAwLjUgYW5kIHNwZWVkaW5nX3BhdHRlcm4gPT0gInJhbmRvbSI6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICJUb25lIgogICAgICAgICAgICAgICAgd29yZCA9ICJkaXJlY3QiCiAgICAgICAgICAgIGVsaWYgcmV3YXJkX3RyZW5kX3NlbmRlciA9PSAiZGVjcmVhc2luZyIgYW5kIHBhdHJvbF9kaXN0cmlidXRpb24gPT0gInVuZXZlbiI6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICJJbmZvcm1hdGl2ZW5lc3MiCiAgICAgICAgICAgICAgICB3b3JkID0gImV4dGVuc2l2ZSIKICAgICAgICAgICAgZWxpZiByZXdhcmRfdHJlbmRfcmVjZWl2ZXIgPT0gImluY3JlYXNpbmciIGFuZCBwYXRyb2xfZWZmaWNpZW5jeSA+IDAuNzoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIlNwZWNpZmljaXR5IgogICAgICAgICAgICAgICAgd29yZCA9ICJwcmVjaXNlIgogICAgICAgICAgICBlbGlmIHNwZWVkaW5nX3BhdHRlcm4gPT0gImNvbnNpc3RlbnQiIGFuZCBwYXRyb2xfZGlzdHJpYnV0aW9uID09ICJldmVuIjoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIkNsYXJpdHkiCiAgICAgICAgICAgICAgICB3b3JkID0gImNsZWFyIgogICAgICAgICAgICBlbGlmIHJld2FyZF90cmVuZF9zZW5kZXIgPT0gInN0YWJsZSIgYW5kIHBhdHJvbF9kaXN0cmlidXRpb24gPT0gImRlY3JlYXNpbmciOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiU3RydWN0dXJlIgogICAgICAgICAgICAgICAgd29yZCA9ICJsaW5lYXIiCiAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UobGlzdChzZW5kZXJfd29yZHMua2V5cygpKSkKICAgICAgICAgICAgICAgIHdvcmQgPSByYW5kb20uY2hvaWNlKHNlbmRlcl93b3Jkc1tjYXRlZ29yeV0pCgogICAgICAgICAgICB3aGlsZSBjYXRlZ29yeSBpbiB1c2VkX2NhdGVnb3JpZXM6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UobGlzdChzZW5kZXJfd29yZHMua2V5cygpKSkKICAgICAgICAgICAgICAgIHdvcmQgPSByYW5kb20uY2hvaWNlKHNlbmRlcl93b3Jkc1tjYXRlZ29yeV0pCgogICAgICAgIGVsc2U6CiAgICAgICAgICAgIGNhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShsaXN0KHNlbmRlcl93b3Jkcy5rZXlzKCkpKQogICAgICAgICAgICB3b3JkID0gcmFuZG9tLmNob2ljZShzZW5kZXJfd29yZHNbY2F0ZWdvcnldKQoKICAgICAgICBwcm9tcHRzLmFwcGVuZCgoY2F0ZWdvcnksIHdvcmQpKQogICAgICAgIHVzZWRfY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpCiAgICAgICAgaGlzdG9yeS5hcHBlbmQoKFtyYW5kb20ucmFuZGludCgwLCAxKSBmb3IgXyBpbiByYW5nZSgzKV0sIFtyYW5kb20ucmFuZGludCgwLCAxKSBmb3IgXyBpbiByYW5nZSgzKV0sIHJhbmRvbS5yYW5kb20oKSwgcmFuZG9tLnJhbmRvbSgpKSkKCiAgICByZXR1cm4gcHJvbXB0cwoKZGVmIGdlbmVyYXRlX3JlY2VpdmVyX3Byb21wdHMoaGlzdG9yeSk6CiAgICByZWNlaXZlcl93b3JkcyA9IHsKICAgICAgICAiUmlzay1QcmVmZXJlbmNlIjogWyJjYXV0aW91cyIsICJib2xkIiwgImJhbGFuY2VkIiwgInJpc2stYXZlcnNlIiwgInJlY2tsZXNzIl0sCiAgICAgICAgIkF0dGVudGlvbiI6IFsiZm9jdXNlZCIsICJkaXN0cmFjdGVkIiwgImFsZXJ0IiwgImluYXR0ZW50aXZlIiwgImVuZ2FnZWQiXSwKICAgICAgICAiRGVjaXNpb24tTWFraW5nIjogWyJyYXRpb25hbCIsICJpbXB1bHNpdmUiLCAiZGVsaWJlcmF0ZSIsICJoYXN0eSIsICJjYWxjdWxhdGVkIl0sCiAgICAgICAgIlRydXN0IjogWyJoaWdoIiwgImxvdyIsICJtb2RlcmF0ZSIsICJza2VwdGljYWwiLCAiY29uZmlkZW50Il0sCiAgICAgICAgIkVtb3Rpb25hbC1TdGF0ZSI6IFsiY2FsbSIsICJhbnhpb3VzIiwgImZydXN0cmF0ZWQiLCAibmV1dHJhbCIsICJleGNpdGVkIl0sCiAgICAgICAgIkluZm9ybWF0aW9uLVByb2Nlc3NpbmciOiBbInNsb3ciLCAiZmFzdCIsICJ0aG9yb3VnaCIsICJzdXBlcmZpY2lhbCIsICJlZmZpY2llbnQiXSwKICAgICAgICAiQWRhcHRhYmlsaXR5IjogWyJmbGV4aWJsZSIsICJyaWdpZCIsICJhZGp1c3RhYmxlIiwgInN0dWJib3JuIiwgIm9wZW4iXSwKICAgICAgICAiQ29tcGxpYW5jZSI6IFsib2JlZGllbnQiLCAiZGVmaWFudCIsICJjb29wZXJhdGl2ZSIsICJyZWx1Y3RhbnQiLCAiYWdyZWVhYmxlIl0sCiAgICAgICAgIlJlc3BvbnNpdmVuZXNzIjogWyJxdWljayIsICJzbG93IiwgIm1vZGVyYXRlIiwgImRlbGF5ZWQiLCAiaW1tZWRpYXRlIl0sCiAgICAgICAgIk1lbW9yeSI6IFsic2hhcnAiLCAiZm9yZ2V0ZnVsIiwgImF2ZXJhZ2UiLCAic2hvcnQtdGVybSIsICJsb25nLXRlcm0iXQogICAgfQoKICAgIHByb21wdHMgPSBbXQogICAgdXNlZF9jYXRlZ29yaWVzID0gc2V0KCkKCiAgICBmb3Igc3RhZ2UgaW4gcmFuZ2UoNSk6CiAgICAgICAgaWYgaGlzdG9yeToKICAgICAgICAgICAgcGF0cm9scywgc3BlZWRpbmcsIHJld2FyZF9zZW5kZXIsIHJld2FyZF9yZWNlaXZlciA9IHppcCgqaGlzdG9yeSkKCiAgICAgICAgICAgIHBhdHJvbF9lZmZpY2llbmN5ID0gZXZhbHVhdGVfcGF0cm9sX2VmZmljaWVuY3kocGF0cm9sc1stMV0sIHNwZWVkaW5nWy0xXSkKICAgICAgICAgICAgcmV3YXJkX3RyZW5kX3JlY2VpdmVyID0gZXZhbHVhdGVfcmV3YXJkX3RyZW5kKHJld2FyZF9yZWNlaXZlcikKICAgICAgICAgICAgc3BlZWRpbmdfcGF0dGVybiA9IGV2YWx1YXRlX3NwZWVkaW5nX3BhdHRlcm4oc3BlZWRpbmcpCiAgICAgICAgICAgIHBhdHJvbF9kaXN0cmlidXRpb24gPSBldmFsdWF0ZV9wYXRyb2xfZGlzdHJpYnV0aW9uKHBhdHJvbHMpCgogICAgICAgICAgICBpZiByZXdhcmRfdHJlbmRfcmVjZWl2ZXIgPT0gImluY3JlYXNpbmciIGFuZCBwYXRyb2xfZWZmaWNpZW5jeSA+IDAuNzoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIlRydXN0IgogICAgICAgICAgICAgICAgd29yZCA9ICJoaWdoIgogICAgICAgICAgICBlbGlmIHNwZWVkaW5nX3BhdHRlcm4gPT0gImNvbnNpc3RlbnQiIGFuZCBwYXRyb2xfZGlzdHJpYnV0aW9uID09ICJldmVuIjoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIkNvbXBsaWFuY2UiCiAgICAgICAgICAgICAgICB3b3JkID0gIm9iZWRpZW50IgogICAgICAgICAgICBlbGlmIHJld2FyZF90cmVuZF9yZWNlaXZlciA9PSAiZGVjcmVhc2luZyIgYW5kIHNwZWVkaW5nX3BhdHRlcm4gPT0gInJhbmRvbSI6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9ICJSaXNrLVByZWZlcmVuY2UiCiAgICAgICAgICAgICAgICB3b3JkID0gImJvbGQiCiAgICAgICAgICAgIGVsaWYgcGF0cm9sX2Rpc3RyaWJ1dGlvbiA9PSAidW5ldmVuIiBhbmQgcmV3YXJkX3RyZW5kX3JlY2VpdmVyID09ICJzdGFibGUiOgogICAgICAgICAgICAgICAgY2F0ZWdvcnkgPSAiQWRhcHRhYmlsaXR5IgogICAgICAgICAgICAgICAgd29yZCA9ICJmbGV4aWJsZSIKICAgICAgICAgICAgZWxpZiBwYXRyb2xfZWZmaWNpZW5jeSA8IDAuNSBhbmQgc3BlZWRpbmdfcGF0dGVybiA9PSAicmFuZG9tIjoKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gIkF0dGVudGlvbiIKICAgICAgICAgICAgICAgIHdvcmQgPSAiZm9jdXNlZCIKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGNhdGVnb3J5ID0gcmFuZG9tLmNob2ljZShsaXN0KHJlY2VpdmVyX3dvcmRzLmtleXMoKSkpCiAgICAgICAgICAgICAgICB3b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjYXRlZ29yeV0pCgogICAgICAgICAgICB3aGlsZSBjYXRlZ29yeSBpbiB1c2VkX2NhdGVnb3JpZXM6CiAgICAgICAgICAgICAgICBjYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UobGlzdChyZWNlaXZlcl93b3Jkcy5rZXlzKCkpKQogICAgICAgICAgICAgICAgd29yZCA9IHJhbmRvbS5jaG9pY2UocmVjZWl2ZXJfd29yZHNbY2F0ZWdvcnldKQoKICAgICAgICBlbHNlOgogICAgICAgICAgICBjYXRlZ29yeSA9IHJhbmRvbS5jaG9pY2UobGlzdChyZWNlaXZlcl93b3Jkcy5rZXlzKCkpKQogICAgICAgICAgICB3b3JkID0gcmFuZG9tLmNob2ljZShyZWNlaXZlcl93b3Jkc1tjYXRlZ29yeV0pCgogICAgICAgIHByb21wdHMuYXBwZW5kKChjYXRlZ29yeSwgd29yZCkpCiAgICAgICAgdXNlZF9jYXRlZ29yaWVzLmFkZChjYXRlZ29yeSkKICAgICAgICBoaXN0b3J5LmFwcGVuZCgoW3JhbmRvbS5yYW5kaW50KDAsIDEpIGZvciBfIGluIHJhbmdlKDMpXSwgW3JhbmRvbS5yYW5kaW50KDAsIDEpIGZvciBfIGluIHJhbmdlKDMpXSwgcmFuZG9tLnJhbmRvbSgpLCByYW5kb20ucmFuZG9tKCkpKQoKICAgIHJldHVybiBwcm9tcHRz)

1
def evaluate\_patrol\_efficiency(patrols, speeding):

2
 # Calculate patrol efficiency: more patrols should reduce speeding

3
 patrol\_effect = [1 if p == 1 and s == 0 else 0 for p, s in zip(patrols, speeding)]

4
 return sum(patrol\_effect) / len(patrols)

5

6
def evaluate\_reward\_trend(rewards):

7
 # Check if rewards are increasing, decreasing, or stable

8
 if all(rewards[i] <= rewards[i + 1] for i in range(len(rewards) - 1)):

9
 return "increasing"

10
 elif all(rewards[i] >= rewards[i + 1] for i in range(len(rewards) - 1)):

11
 return "decreasing"

12
 else:

13
 return "stable"

14

15
def evaluate\_speeding\_pattern(speeding\_history):

16
 # Identify if speeding is random, consistent, or declining

17
 speeding\_totals = [sum(speeds) for speeds in speeding\_history]

18
 if all(speeding\_totals[i] == speeding\_totals[i + 1] for i in range(len(speeding\_totals) - 1)):

19
 return "consistent"

20
 elif speeding\_totals[-1] < speeding\_totals[0]:

21
 return "declining"

22
 else:

23
 return "random"

24

25
def evaluate\_patrol\_distribution(patrols\_history):

26
 # Determine if patrols are evenly distributed across stages

27
 patrol\_totals = [sum(patrol) for patrol in patrols\_history]

28
 if len(set(patrol\_totals)) == 1:

29
 return "even"

30
 elif patrol\_totals[-1] < patrol\_totals[0]:

31
 return "decreasing"

32
 else:

33
 return "uneven"

34

35
def generate\_sender\_prompts(history):

36
 sender\_words = {

37
 "Tone": ["formal", "informal", "neutral", "direct", "conciliatory"],

38
 "Length": ["short", "concise", "detailed", "lengthy", "brief"],

39
 "Specificity": ["general", "precise", "vague", "detailed", "broad"],

40
 "Clarity": ["clear", "ambiguous", "straightforward", "complicated", "obscure"],

41
 "Style": ["polite", "authoritative", "casual", "professional", "friendly"],

42
 "Emphasis": ["important", "minor", "critical", "trivial", "central"],

43
 "Structure": ["linear", "nonlinear", "hierarchical", "sequential", "random"],

44
 "Complexity": ["simple", "complex", "intricate", "basic", "elaborate"],

45
 "Consistency": ["consistent", "inconsistent", "variable", "sporadic", "steady"],

46
 "Informativeness": ["high", "low", "medium", "minimal", "extensive"]

47
 }

48

49
 prompts = []

50
 used\_categories = set()

51

52
 for stage in range(5):

53
 if history:

54
 patrols, speeding, reward\_sender, reward\_receiver = zip(\*history)

55

56
 patrol\_efficiency = evaluate\_patrol\_efficiency(patrols[-1], speeding[-1])

57
 reward\_trend\_sender = evaluate\_reward\_trend(reward\_sender)

58
 reward\_trend\_receiver = evaluate\_reward\_trend(reward\_receiver)

59
 speeding\_pattern = evaluate\_speeding\_pattern(speeding)

60
 patrol\_distribution = evaluate\_patrol\_distribution(patrols)

61

62
 # Complex decision-making based on multiple factors

63
 if patrol\_efficiency < 0.5 and speeding\_pattern == "random":

64
 category = "Tone"

65
 word = "direct"

66
 elif reward\_trend\_sender == "decreasing" and patrol\_distribution == "uneven":

67
 category = "Informativeness"

68
 word = "extensive"

69
 elif reward\_trend\_receiver == "increasing" and patrol\_efficiency > 0.7:

70
 category = "Specificity"

71
 word = "precise"

72
 elif speeding\_pattern == "consistent" and patrol\_distribution == "even":

73
 category = "Clarity"

74
 word = "clear"

75
 elif reward\_trend\_sender == "stable" and patrol\_distribution == "decreasing":

76
 category = "Structure"

77
 word = "linear"

78
 else:

79
 category = random.choice(list(sender\_words.keys()))

80
 word = random.choice(sender\_words[category])

81

82
 while category in used\_categories:

83
 category = random.choice(list(sender\_words.keys()))

84
 word = random.choice(sender\_words[category])

85

86
 else:

87
 category = random.choice(list(sender\_words.keys()))

88
 word = random.choice(sender\_words[category])

89

90
 prompts.append((category, word))

91
 used\_categories.add(category)

92
 history.append(([random.randint(0, 1) for \_ in range(3)], [random.randint(0, 1) for \_ in range(3)], random.random(), random.random()))

93

94
 return prompts

95

96
def generate\_receiver\_prompts(history):

97
 receiver\_words = {

98
 "Risk-Preference": ["cautious", "bold", "balanced", "risk-averse", "reckless"],

99
 "Attention": ["focused", "distracted", "alert", "inattentive", "engaged"],

100
 "Decision-Making": ["rational", "impulsive", "deliberate", "hasty", "calculated"],

101
 "Trust": ["high", "low", "moderate", "skeptical", "confident"],

102
 "Emotional-State": ["calm", "anxious", "frustrated", "neutral", "excited"],

103
 "Information-Processing": ["slow", "fast", "thorough", "superficial", "efficient"],

104
 "Adaptability": ["flexible", "rigid", "adjustable", "stubborn", "open"],

105
 "Compliance": ["obedient", "defiant", "cooperative", "reluctant", "agreeable"],

106
 "Responsiveness": ["quick", "slow", "moderate", "delayed", "immediate"],

107
 "Memory": ["sharp", "forgetful", "average", "short-term", "long-term"]

108
 }

109

110
 prompts = []

111
 used\_categories = set()

112

113
 for stage in range(5):

114
 if history:

115
 patrols, speeding, reward\_sender, reward\_receiver = zip(\*history)

116

117
 patrol\_efficiency = evaluate\_patrol\_efficiency(patrols[-1], speeding[-1])

118
 reward\_trend\_receiver = evaluate\_reward\_trend(reward\_receiver)

119
 speeding\_pattern = evaluate\_speeding\_pattern(speeding)

120
 patrol\_distribution = evaluate\_patrol\_distribution(patrols)

121

122
 if reward\_trend\_receiver == "increasing" and patrol\_efficiency > 0.7:

123
 category = "Trust"

124
 word = "high"

125
 elif speeding\_pattern == "consistent" and patrol\_distribution == "even":

126
 category = "Compliance"

127
 word = "obedient"

128
 elif reward\_trend\_receiver == "decreasing" and speeding\_pattern == "random":

129
 category = "Risk-Preference"

130
 word = "bold"

131
 elif patrol\_distribution == "uneven" and reward\_trend\_receiver == "stable":

132
 category = "Adaptability"

133
 word = "flexible"

134
 elif patrol\_efficiency < 0.5 and speeding\_pattern == "random":

135
 category = "Attention"

136
 word = "focused"

137
 else:

138
 category = random.choice(list(receiver\_words.keys()))

139
 word = random.choice(receiver\_words[category])

140

141
 while category in used\_categories:

142
 category = random.choice(list(receiver\_words.keys()))

143
 word = random.choice(receiver\_words[category])

144

145
 else:

146
 category = random.choice(list(receiver\_words.keys()))

147
 word = random.choice(receiver\_words[category])

148

149
 prompts.append((category, word))

150
 used\_categories.add(category)

151
 history.append(([random.randint(0, 1) for \_ in range(3)], [random.randint(0, 1) for \_ in range(3)], random.random(), random.random()))

152

153
 return prompts

In contrast, the second set introduces custom evaluation functions, such as evaluate\_patrol\_efficiency and evaluate\_reward\_trend, to assess trends in the interaction history.
This allows for more complex decision-making, where the system not only reacts to immediate conditions but also adapts to evolving patterns in rewards, patrol effectiveness, and speeding behavior.
As a result, the second set generates more nuanced prompts, making it more flexible and suitable for handling sophisticated, multi-stage interactions.
