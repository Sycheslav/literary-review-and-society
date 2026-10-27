---
id: arxiv-2406-00392-text
type: material
title: 'Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning'
work_id: arxiv-2406-00392
source_url: https://arxiv.org/html/2406.00392v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 090c353170e0a6d6abffa1dd3b27260138f4b194c9f2070d882d2edc95f0bf5d
---

> Источник: [https://arxiv.org/html/2406.00392v2](https://arxiv.org/html/2406.00392v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning

Jonathan Cook
†
Affiliation: FLAIR, University of Oxford
Email: [jonathan.cook2@hertford.ox.ac.uk](mailto:)
  
Chris Lu \*
Affiliation: FLAIR, University of Oxford
Email: [christopher.lu@eng.ox.ac.uk](mailto:)
  
Edward Hughes
Affiliation: Google DeepMind
Email: [edwardhughes@google.com](mailto:)
  
Joel Z. Leibo
Affiliation: Google DeepMind
Email: [jzl@google.com](mailto:)
  
Jakob Foerster
Affiliation: FLAIR, University of Oxford
Email: [jakob@eng.ox.ac.uk](mailto:)

###### Abstract

Cultural accumulation drives the open-ended and diverse progress in capabilities spanning human history. It builds an expanding body of knowledge and skills by combining individual exploration with inter-generational information transmission. Despite its widespread success among humans, the capacity for artificial learning agents to accumulate culture remains under-explored. In particular, approaches to reinforcement learning typically strive for improvements over only a single lifetime. Generational algorithms that do exist fail to capture the open-ended, emergent nature of cultural accumulation, which allows individuals to trade-off innovation and imitation. Building on the previously demonstrated ability for reinforcement learning agents to perform social learning, we find that training setups which balance this with independent learning give rise to cultural accumulation. These accumulating agents outperform those trained for a single lifetime with the same cumulative experience. We explore this accumulation by constructing two models under two distinct notions of a generation: episodic generations, in which accumulation occurs via in-context learning and train-time generations, in which accumulation occurs via in-weights learning. In-context and in-weights cultural accumulation can be interpreted as analogous to knowledge and skill accumulation, respectively. To the best of our knowledge, this work is the first to present general models that achieve emergent cultural accumulation in reinforcement learning, opening up new avenues towards more open-ended learning systems, as well as presenting new opportunities for modelling human culture.

## 1 Introduction

The capacity to learn skills and accumulate knowledge over timescales that far outstrip a single lifetime (i.e., across generations) is commonly referred to as cultural accumulation ([Hofstede et al., 1994](https://arxiv.org/html/2406.00392v2#bib.bib16); [Tennie et al., 2009](https://arxiv.org/html/2406.00392v2#bib.bib53)). Cultural accumulation has been considered the key to human success ([Henrich, 2019](https://arxiv.org/html/2406.00392v2#bib.bib15)), continuously aggregating new skills, knowledge and technology. It also sustains generational improvements in the behaviour of other species, such as in the homing efficiency of birds ([Sasaki and Biro, 2017](https://arxiv.org/html/2406.00392v2#bib.bib46)). The two core mechanisms underpinning cultural accumulation are social learning ([Bandura and Walters, 1977](https://arxiv.org/html/2406.00392v2#bib.bib2); [Hoppitt and Laland, 2013](https://arxiv.org/html/2406.00392v2#bib.bib17)) and independent discovery ([Mesoudi, 2011](https://arxiv.org/html/2406.00392v2#bib.bib29)). Its effectiveness can be attributed to the flexibility with which participants engage in these two mechanisms ([Enquist et al., 2008](https://arxiv.org/html/2406.00392v2#bib.bib13); [Rendell et al., 2010](https://arxiv.org/html/2406.00392v2#bib.bib42); [Mesoudi and Thornton, 2018](https://arxiv.org/html/2406.00392v2#bib.bib30)). Cumulative culture thus executes an evolutionary search in the space of behaviours, with higher rates of independent discovery corresponding to a higher mutation rate. Ultimately, how individuals should balance social vs. independent learning depends on the validity and fidelity of social learning signals, i.e., how successful other agents in the environment are at the same task.

Given the profound success of cultural accumulation in nature, it is natural to explore its applicability to artificial learning systems, which remains an under-explored research direction. In deep reinforcement learning (RL), the learning problem is usually framed as taking place over a single “lifetime”. Generational methods that do exist, such as iterated policy distillation ([Schmitt et al., 2018](https://arxiv.org/html/2406.00392v2#bib.bib47); [Stooke et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib52)) and expert iteration ([Anthony et al., 2017](https://arxiv.org/html/2406.00392v2#bib.bib1)), explicitly optimise new generations with hand-crafted and explicit imitation learning techniques, as opposed to learning accumulation implicitly, which should ultimately enable greater flexibility. Prior work has successfully demonstrated emergent social learning in RL ([Borsa et al., 2017](https://arxiv.org/html/2406.00392v2#bib.bib7); [Ndousse et al., 2021](https://arxiv.org/html/2406.00392v2#bib.bib32); [Bhoopchand et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib5)), showing that it helps agents solve hard exploration problems and adapt online to new tasks. However, these works have only considered one iteration of information transmission from an expert to a student. In this work, we therefore investigate how social learning and exploration can be balanced to achieve cultural accumulation in RL. This would lay the foundations for an open-ended, population-based self-improvement loop among artificial learning agents. It would also establish new tools for modelling cultural accumulation.

![Refer to caption](https://arxiv.org/html/2406.00392v2/fig1.png)


Figure 1: Left: A flow chart describing our RL model of cultural accumulation. Right: An annotated, illustrative plot demonstrating in-context accumulation as observed in our results.

In humans, cultural accumulation takes place over a number of timescales due to the different rates at which knowledge, skills and technology are acquired ([Perreault, 2012](https://arxiv.org/html/2406.00392v2#bib.bib38); [Cochrane et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib9)). We therefore present two corresponding formulations of cultural accumulation in RL: in-context accumulation, which operates over fast adaptation to new environments, and in-weights accumulation, which operates over the slower process of updating weights (i.e., training). The in-context setting can be interpreted as analogous to short-term knowledge accumulation and the in-weights setting as analogous to long-term, skills-based accumulation.

We demonstrate the effectiveness of both the in-context and in-weights models by showing sustained generational performance gains on several tasks requiring exploration under partial observability1. On each task, we find that accumulating agents outperform those that learn for a single lifetime of the same total experience budget. This cultural accumulation emerges purely from individual agents maximising their independent rewards, without any additional losses.

## 2 Background

### 2.1 Partially-Observable Stochastic Games

A Partially-Observable Stochastic Game (POSG) ([Kuhn, 1953](https://arxiv.org/html/2406.00392v2#bib.bib22)) is defined by the tuple $M=\langle I,S,A,T,R,O,\gamma\rangle$. $I=\{1,\dots,N\}$ defines the set of agents, $S$ defines the set of states, and $A$ defines the direct product of action spaces for each agent, i.e., $A=A^{1}\times\dots\times A^{N}$ where $A^{i}$ is the action space for agent $i\in I$. $T$ defines the stochastic transition function, $T:S\times A\times S\to[0,1]$, $R$ defines the reward function, $R:S\times A\to\mathcal{R}$, and $O$ defines the observation function, $O:\mathcal{O}\times S\to[0,1]$ where $\mathcal{O}$ is the observation space. $\gamma\in(0,1]$ refers to the discount factor of returns.

At each timestep $t$, each agent $i$ samples an action from its policy $a^{i}\_{t}\sim\pi\_{\theta^{i}}(o^{i}\_{t})$, where $\theta^{i}\_{t}$ corresponds to the policy parameters for agent $i$. These actions are aggregated to form the joint action $a\_{t}=(a^{1}\_{t},\dots,a^{N}\_{t})$. The environment then calculates the next state $s\_{t+1}\sim T(s\_{t},a\_{t})$. The agents then receive the next observation $o\_{t+1}\sim O(s\_{t+1})$ and reward $r\_{t}\sim R(s\_{t+1})$ from the environment. The objective for each agent $i$ in a POSG is to maximise its expected discounted sum of returns $J(\pi\_{\theta^{i}})=\mathbb{E}\_{s\_{0}\sim\tilde{S},a\_{0:\infty}\sim\pi(s^{i}\_{1:\infty})\sim T}\left[\sum\_{t=0}^{\infty}\gamma^{t}R(s\_{t},a\_{t})\right]$.

### 2.2 Partially-Observable Markov Decision Processes

A Partially-Observable Markov Decision Processes (POMDP) ([Kaelbling et al., 1998](https://arxiv.org/html/2406.00392v2#bib.bib21)) is a special case of the POSG with only one agent. For a given agent $i$ in a POSG, if the policy parameters of all other agents $\theta^{-i}$ are fixed, the POSG can be reduced to a POMDP for agent $i$. Informally, this can be done by assuming the other agents are part of the environment. In other words, sampling from other agent policies would be part of the transition function.

To solve POMDPs, we make use of memory-based policy architectures that represent the prior episode interactions at timestep $t$ using $\phi\_{t}$. Memory is needed to solve POMDPs because of the state aliasing introduced by partial-observability. For recurrent neural networks (RNNs) $\phi\_{t}$ refers to the hidden state at timestep $t$.
We now condition the policy on this state $a^{i}\_{t}\sim\pi\_{\theta^{i}}(o^{i}|\phi^{i}\_{t})$ and also update the hidden state with recurrence function $h\_{\theta^{i}}$, such that $\phi\_{t+1}=h\_{\theta^{i}}(o^{i}|\phi^{i}\_{t})$.

### 2.3 Meta-RL

In this paper, we consider meta-RL settings where an agent is tasked with optimising its return over a distribution of POMDPs $\mathcal{M}$. At each episode2, a POMDP is sampled $M\sim\mathcal{M}$ and the agent is given $K$ trials to optimise its cumulative return. This setting has also been called in-context RL ([Laskin et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib23)). We adopt the setting of [Ni et al. (2021)](https://arxiv.org/html/2406.00392v2#bib.bib33), where meta-RL is formulated as another POMDP $\mathcal{M}$, in which the selection of $M$ is now a part of the state $s$. The agent’s last action $a\_{t-1}$, reward $r\_{t-1}$ and trial termination are appended to the observation $o\_{t}$.

One common approach to meta-RL uses gradient-based optimisation to train a meta-policy with respect to $\mathcal{M}$ using recurrent network architectures ([Duan et al., 2016](https://arxiv.org/html/2406.00392v2#bib.bib12); [Wang et al., 2016](https://arxiv.org/html/2406.00392v2#bib.bib54)). Within each episode, updates to the agent’s internal state $\phi$ enable static agent parameters to implement an in-context RL procedure, allowing the agent to adapt to a specific $M$. During adaptation to a new POMDP, this procedure aggregates and stores information from sequential observations. Over long enough episodes, agents can therefore face an in-context exploration-exploitation tradeoff, where within-episode exploration of the environment could yield higher returns.

### 2.4 Generational Training

Generational training refers to training populations of agents in sequence, thus chaining together multiple learning processes ([Stooke et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib52)). We define a generation $g\_{m}=\{g^{1}\_{m},\dots,g^{N\_{\text{pop}}}\_{m}\}$ as a population of $N\_{\text{pop}}$ agents. Each $g^{n}\_{m}$ can therefore be model weights, or an internal state in the case of in-context RL. We distinguish $N\_{\text{pop}}$ from the $N$ used in Section [2.1](https://arxiv.org/html/2406.00392v2#S2.SS1 "2.1 Partially-Observable Stochastic Games ‣ 2 Background ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), because each member of a generation of size $N\_{\text{pop}}$ may be within its own POSG of $N$ agents. We use $n$ to index a specific member of a generation. A new generation is generated by a process that conditions on the old generation $g\_{m+1}=f(g\_{m})$. By modelling cultural accumulation over both in-context RL and RL training, $f$ could capture generational accumulation in both knowledge and skills.

## 3 Problem Statement

In this work, we investigate how to achieve cultural accumulation in RL agents. We formalise a measure of success in Equation [1](https://arxiv.org/html/2406.00392v2#S3.E1 "In 3 Problem Statement ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), where we compare the returns achieved in a held-out set of environments when learning is spread across $G$ total generations to learning in a single lifetime with the same total experience budget. This comparison evaluates whether our models capture the benefits of cultural accumulation over singe lifetime learning.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$R\_{T}(\pi\_{G},\mathcal{M}|f(\pi\_{G-1}|\dots,\pi\_{1}))>R\_{G\cdot T}(\pi\_{1},\mathcal{M})$$ |  | (1) |

Policies are parameterised according to $\pi\_{\theta}(\cdot|\phi)$ where $\theta$ are parameters of the trained network and $\phi$ is the agent’s internal state. We define in-context accumulation as cultural accumulation during online adaptation to new environments. In this setting, $\theta$ are frozen and $T$ is the length of an episode. We assume that a meta-RL training process has produced $\theta$ and that the internal state $\phi$ is used to distinguish between generations, which we elaborate on in Section [4.1.2](https://arxiv.org/html/2406.00392v2#S4.SS1.SSS2 "4.1.2 Evaluation ‣ 4.1 In-Context Accumulation ‣ 4 Cultural Accumulation in RL ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"). We define in-weights accumulation as cultural accumulation over training runs. Here, $T$ is the number of environment steps used for training each generation and each successive generation is trained from randomly initialised parameters $\theta$, meaning that $\theta$ instead are the substrate for accumulation.

### 3.1 Environments

Memory Sequence: To study processes of cultural accumulation among humans, [Cornish et al. (2017)](https://arxiv.org/html/2406.00392v2#bib.bib10) use a random sequence memorisation task in which sequences recalled by one participant become training data for the next in an iterated learning process. In doing so, they show a cumulative increase in recalled string length, thus simulating cultural accumulation. We thus present Memory Sequence as a simple environment for investigating basic cultural accumulation in RL agents. In Memory Sequence, there is an arbitrary sequence made up of digits that agents must infer over the course of in-context learning or training. Each action corresponds to predicting a digit. Episodes are fixed length and agents receive $+1$ reward for predicting the correct next digit and $-1$ reward for predicting an incorrect next digit. The sequence is randomly sampled and fixed during in-context adaptation for in-context accumulation, whilst it is fixed across training for in-weights accumulation.

![Refer to caption](https://arxiv.org/html/2406.00392v2/envs.png)


Figure 2: Left: A visualization of the Goal Sequence Environment. Right: Routes travelled get shorter across generations in the TSP environment. Visualisation implementation is based on Jumanji ([Bonnet et al., 2024](https://arxiv.org/html/2406.00392v2#bib.bib6)).

Goal Sequence: Previous work on social learning in RL uses a gridworld Goal Cycle environment ([Ndousse et al., 2021](https://arxiv.org/html/2406.00392v2#bib.bib32)). In this environment, there are $n$ identical goals and agents must figure out the correct cyclic ordering in which to navigate through them. Agents receive an egocentric partial observation of the environment state on each timestep. Other prior work uses a 3-dimensional Goal Cycle environment ([Bhoopchand et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib5)). Goal Cycle is limited in its ability to evaluate generational improvement across learned agent behaviours, because once an agent has identified the correct cyclic order, it should simply repeat the same action sequence of cycling through the goals for the duration of an episode. We therefore introduce Goal Sequence (Figure [2](https://arxiv.org/html/2406.00392v2#S3.F2 "Figure 2 ‣ 3.1 Environments ‣ 3 Problem Statement ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning")) as a simple adaptation of Goal Cycle, but with more open-ended properties. Specifically, we replace the cycle with a non-repeating sequence of goals that agents must discover by navigating based on egocentric, partial observations. We use a $7\times 7$ grid with 3 goal types and agents observe a $3\times 3$ grid of cells directly in front of them. For in-context accumulation, the goal sequence and positions are randomly generated and fixed across in-context adaptation. For in-weights accumulation, the goal sequence is fixed across training, but goal positions are still randomised between episodes.

Travelling Salesperson: Finally, we use the Travelling Salesperson Problem (TSP). Given that cultural accumulation involves the transmission of information not otherwise immediately accessible to new generations, we specifically focus on the partially-observable variant of TSP ([Buck and Keller, 2008](https://arxiv.org/html/2406.00392v2#bib.bib8); [Noormohammadi-Asl and Taghirad, 2019](https://arxiv.org/html/2406.00392v2#bib.bib35)) in which some or all of the cities’ coordinates are not observed. The agent’s objective is to visit every city, minimising the total length of the route travelled. The positions of cities are randomly generated and fixed across in-context adaptation for in-context accumulation. City positions are fixed across all of training for in-weights accumulation.

## 4 Cultural Accumulation in RL

We model cultural accumulation as taking place within POSGs. Each member of a given generation $g\_{m+1}$ learns in parallel on an independent instance of the environment, which also contains static members of the previous generation, $g\_{m}$. Therefore, from the perspective of a given agent $n$ in $g\_{m+1}$ this is a POMDP, since the prior, static generation can be considered part of the environment.
In this work, we focus on generational improvement and have thus introduced a separation between the development phase of an agent, where they are learning from and improving upon prior generations, and the transmission phase, where they are simply acting and being observed by the next generation. Under this formulation, we propose and investigate two distinct mechanisms for cultural accumulation in RL agents based on our in-context and in-weights dichotomy introduced in Section [3](https://arxiv.org/html/2406.00392v2#S3 "3 Problem Statement ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning").

### 4.1 In-Context Accumulation

We first consider in-context accumulation, where we aim to achieve cultural accumulation via fast in-context adaptation following a separate phase of meta-RL training. Meta-RL training can be viewed as imbuing agents with multiple memory systems ([Squire et al., 1993](https://arxiv.org/html/2406.00392v2#bib.bib51)). By updating $\phi$, in-context RL executes a processes of knowledge acquisition, or declarative memory ([Squire, 2004](https://arxiv.org/html/2406.00392v2#bib.bib50)) updating. In-context accumulation extends this knowledge acquisition to operate across multiple generations. The corresponding results are in Section [5.1](https://arxiv.org/html/2406.00392v2#S5.SS1 "5.1 In-Context Results ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning").

#### 4.1.1 Training

Algorithm 1  Training Loop for In-Context Accumulation (changes to RL2 in red)

1:
 $\hat{\phi}:=$ init. agent state

2:
 $\hat{\theta}:=$ init. agent parameters

3:
 $\theta^{\texttt{O}}:=$ oracle parameters

4:
 $\epsilon:=$ oracle noise factor

5:
 $\theta^{n}\leftarrow\hat{\theta}$ // Initialise the agent parameters

6:
 for train step $t\in[0,T-1]$ do

7:
  $s\sim\hat{S}$

8:
  $\phi^{n}\leftarrow\hat{\phi}$

9:
  $B:=$ trajectory buffer

10:
  for each trial $k\in[0,K-1]$ do

11:
   $p\_{\text{obs}}=1-k/(K-1)$

12:
   while trial not done do

13:
    $o^{n}\sim O(s)$

14:
    if $\texttt{IsVisible}\sim\text{Bernoulli}(p\_{\text{obs}})$ then

15:
     Set oracle visible in $o^{n}$

16:
    end if

17:
    $a^{\texttt{O}}\sim\pi\_{\theta^{\texttt{O}},\epsilon}(s)$, $a^{n}\sim\pi\_{\theta^{n}}(o^{n}|\phi^{n})$

18:
    $\phi^{n}\leftarrow f\_{\theta^{n}}(o^{n}|\phi^{n})$

19:
    $s,r\sim T(s,a)$

20:
    $B\leftarrow(o^{n},a^{n},r^{n})$ // Append transition to buffer

21:
   end while

22:
  end for

23:
  $\theta^{n}\leftarrow$ update$(\theta^{n},B)$

24:
 end for

To train agents capable of in-context accumulation, we require three attributes: (1) agents must learn to learn from the behaviour of other agents (i.e., social learning) within the context of a single episode, (2) agents must be able to act independently by their last trial, so that their behaviour can provide useful demonstrations for the next generation, (3) agents must use sufficient independent exploration to improve on the the previous generation, or each new generation will only be as good as the last.

To facilitate (1) during training, but not at test time, we assume access to an oracle O with fixed parameters $\hat{\theta}^{\texttt{O}}$. O is able to condition on the full state $s$, which we refer to as privileged information. Agent $n$ can observe the behaviours of O as they jointly act in an environment. To achieve (2), we include this representation of O in $o^{n}$ with probability $p\_{\text{obs}}$ at each timestep and linearly anneal $p\_{\text{obs}}$ across the $K$ trials from $1\to 0$. This ensures that the agent learns to act independently by the final trial. [Perez et al. (2023)](https://arxiv.org/html/2406.00392v2#bib.bib36) show that increasing opportunities to learn socially leads to less diversity in homogeneous populations, which could be seen as limiting independent discovery in our context, further motivating this constraint. For (3), we add some random noise to the oracle policy according to a tunable parameter $\epsilon$3. This encourages the agent to learn that the behaviour of other agents O in the environment may be sub-optimal, in which case agent $n$ should engage in selective social learning ([Poulin-Dubois and Brosseau-Liard, 2016](https://arxiv.org/html/2406.00392v2#bib.bib40)). This approach could be seen as imposing an information rate limit ([Prystawski et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib41)) between the oracle and learning agent. We present this process altogether as Algorithm [1](https://arxiv.org/html/2406.00392v2#alg1 "Algorithm 1 ‣ 4.1.1 Training ‣ 4.1 In-Context Accumulation ‣ 4 Cultural Accumulation in RL ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), with changes to standard RL2 in red.

#### 4.1.2 Evaluation

Algorithm 2  In-Context Accumulation During Evaluation

1:
 $\hat{\phi}:=$ init. agent state

2:
 $\theta:=$ parameters from training

3:
 $s\_{0}\sim\hat{S}$ // Sample initial state

4:
 $\tilde{\phi}^{n^{\*}}\_{0}\leftarrow\hat{\phi}$ // Define an initial reset state

5:
 for each generation $m\in[1,M]$ do

6:
  for each population member $n\in[1,N\_{\text{pop}}]$ do

7:
   $\phi^{n}\_{m}\leftarrow\hat{\phi}$

8:
   $s^{n}\leftarrow s\_{0}$

9:
   for each trial $k\in[0,K-1]$ do

10:
    if $k=K-1$ then

11:
     $\tilde{\phi}^{n}\_{m}\leftarrow\phi^{n}\_{m}$ // Store agent state at beginning of last trial as reset state

12:
    end if

13:
    $p\_{\text{obs}}=1-k/(K-1)$

14:
    $\phi^{n}\_{m-1}\leftarrow\tilde{\phi}^{n^{\*}}\_{m-1}$ // Set previous generation state to best reset state from that generation

15:
    while trial not done do

16:
     $o^{n}\_{m-1},o^{n}\_{m}\sim O(s)$

17:
     if $\texttt{IsVisible}\sim\text{Bernoulli}(p\_{\text{obs}})$ then

18:
      Set previous generation visible in $o^{n}\_{m}$

19:
     end if

20:
     $a^{n}\_{m-1}\sim\pi\_{\theta}(o^{n}\_{m-1}|\phi^{n}\_{m-1}),\,a^{n}\_{m}\sim\pi\_{\theta}(o^{n}\_{m}|\phi^{n}\_{m})$

21:
     $\phi^{n}\_{m-1}\leftarrow f\_{\theta}(o^{n}\_{m-1}|\phi^{n}\_{m-1}),\,\phi^{n}\_{m}\leftarrow f\_{\theta}(o^{n}\_{m}|\phi^{n}\_{m})$

22:
     $s^{n},r^{n}\sim T(s^{n},a^{n})$

23:
    end while

24:
   end for

25:
   $n^{\*}=\text{argmax}\_{n\in[1,N\_{\text{pop}}]}\sum\_{t}\mathbb{I}[k=K-1]r^{n}\_{m}$ // Select best population member based on final trial performance

26:
  end for

27:
 end for

Having trained agents via Algorithm [1](https://arxiv.org/html/2406.00392v2#alg1 "Algorithm 1 ‣ 4.1.1 Training ‣ 4.1 In-Context Accumulation ‣ 4 Cultural Accumulation in RL ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), we evaluate their in-context accumulation. During this evaluation phase, O is replaced by the best4 of the previous generation $n^{\*}$, as we do not assume access to privileged information at test time. This previous best agent, now in transmission phase, has its internal state reset between trials. A member of the new generation, in development phase, continuously updates its internal state across trials. The same meta-parameters $\theta$ from training are used across generations and only the internal states $\phi$ are used to update each generation. Generations are made up of $N$ agents that interact with $N$ independent environments.

For each generation $g\_{m}$, we store the internal state of each agent on the first step of its final trial and call this the “reset state” $\tilde{\phi}^{n}\_{m}$. After the final trial, we then keep the previously stored reset state of the best performing agent $\tilde{\phi}^{n^{\*}}\_{m}$ in terms of rewards received in its last trial. When introducing the next generation $g\_{m+1}$, generation $g\_{m}$ transitions into transmission phase and we represent the adapted behaviour of the best performing agent by resetting the internal states $\phi^{1:N}\_{m}\leftarrow\tilde{\phi}^{n^{\*}}\_{m}$ at the beginning of each trial. Thus, the next generation $g\_{m+1}$ can in essence observe the best of $g\_{m}$ repeating its final trial. In practice, we mask $g\_{m+1}$ from the observations of $g\_{m}$ in order to reflect the fact that agents do not expect to see other agents in their final trial, as guaranteed by training attribute (2) above. Since the observations of $g\_{m+1}$ can include information about the learned behaviours of $g\_{m}$, we implicitly have $g\_{m+1}=f(g\_{m})$, establishing a purely in-context equivalent to generational training (Section [2.4](https://arxiv.org/html/2406.00392v2#S2.SS4 "2.4 Generational Training ‣ 2 Background ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning")). This process is presented in Algorithm [2](https://arxiv.org/html/2406.00392v2#alg2 "Algorithm 2 ‣ 4.1.2 Evaluation ‣ 4.1 In-Context Accumulation ‣ 4 Cultural Accumulation in RL ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning").

### 4.2 In-Weights Accumulation

Finally, we present an algorithm for cultural accumulation to take place over the course of training successive generations of policies (i.e., in-weights) rather than through solely updating the internal state (i.e., in-context). This is akin to generational training (Section [2.4](https://arxiv.org/html/2406.00392v2#S2.SS4 "2.4 Generational Training ‣ 2 Background ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning")), but without modifying the policy-gradient loss, by simply including the previous generation within environments on which the new generation is training, so that their actions can be observed and learned from. This alternative model of cultural accumulation assumes an agent’s lifetime to be an entire training run, rather than a single episode. Here, we anneal the probability of observing the previous generation $p\_{\text{obs}}$ on a given environment timestep linearly over training. The corresponding approach is detailed in Algorithm [3](https://arxiv.org/html/2406.00392v2#alg3 "Algorithm 3 ‣ Appendix A In-Weights Accumulation ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), presented in Appendix [A](https://arxiv.org/html/2406.00392v2#A1 "Appendix A In-Weights Accumulation ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"). In-weights RL (i.e., RL training) can be interpreted as updating procedural memory ([Johnson, 2003](https://arxiv.org/html/2406.00392v2#bib.bib20)) via skill acquisition. We thus interpret in-weights accumulation as gradual, skills-based accumulation. Note that there is no separation between "training" and "evaluation" in this case, because the in-weights algorithm views cultural accumulation as part of the training. This is in contrast to in-context accumulation, which is an evaluation-time algorithm executed by appropriately trained meta-policies. The results that correspond to this setting are in Section [5.2](https://arxiv.org/html/2406.00392v2#S5.SS2 "5.2 In-Weights Results ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning").

## 5 Results

![Refer to caption](https://arxiv.org/html/2406.00392v2/figures/ica_memseq.png)


Figure 3: Left: In-context accumulation during evaluation on Memory Sequence. Right: Evaluation results following training with different oracle accuracies.

For each of our experiments, we use a Simplified Structured State Space Model (S5) ([Smith et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib49)) modified for RL ([Lu et al., 2024](https://arxiv.org/html/2406.00392v2#bib.bib27)) to encode memory, building on the PureJaxRL codebase ([Lu et al., 2022a](https://arxiv.org/html/2406.00392v2#bib.bib24)). This model architecture runs asymptotically faster than Transformers in sequence length and outperforms RNNs in memory tasks ([Morad et al., 2024](https://arxiv.org/html/2406.00392v2#bib.bib31)). PPO ([Schulman et al., 2017](https://arxiv.org/html/2406.00392v2#bib.bib48)) is used as the RL training algorithm. For Goal Sequence experiments, observations are processed by a CNN, whilst for Memory Sequence and TSP, they are processed by feed forward layers. Architectural details are provided in Appendix [E](https://arxiv.org/html/2406.00392v2#A5 "Appendix E Architecture Details ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") and algorithmic hyperparameters in Appendix [F](https://arxiv.org/html/2406.00392v2#A6 "Appendix F Hyperparameters ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"). For all in-context experiments, a one-hot encoding of the reward received on each timestep and a one-hot encoding of the current trial number are included each agent’s observation. We provide further details on the configuration of each environment in Appendix [D](https://arxiv.org/html/2406.00392v2#A4 "Appendix D Further Environment Details ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"). All results are averaged across 10 seeds and the shaded regions of plots show standard error.

![Refer to caption](https://arxiv.org/html/2406.00392v2/ica_other.png)


Figure 4: Left: In-context accumulation during evaluation on Goal Sequence. Right: In-context accumulation during evaluation on TSP.

### 5.1 In-Context Results

![Refer to caption](https://arxiv.org/html/2406.00392v2/figures/iwa_memseq.png)


Figure 5: Left: In-weights accumulation on Memory Sequence. Right: In-weights accumulation compounds with resetting. Error bars represent 95% confidence intervals.

As single-lifetime baselines, we use RL2 trained on: (a) episodes of equivalent length to one generation and (b) episodes of equivalent length to all cumulative generations. All in-context evaluations are performed on held-out environment instances for the same number of trials.

Memory Sequence: In Figure [3](https://arxiv.org/html/2406.00392v2#S5.F3 "Figure 3 ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), we show that in-context learners trained according to Algorithm [1](https://arxiv.org/html/2406.00392v2#alg1 "Algorithm 1 ‣ 4.1.1 Training ‣ 4.1 In-Context Accumulation ‣ 4 Cultural Accumulation in RL ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") are capable of accumulating beyond single-lifetime RL2 baselines and even beyond the performance of the noisy oracles with which they were trained when evaluated on a new sequence. Interestingly, when evaluating the accumulation performance of agents trained with oracles of different noise levels, we see that it degrades when oracles are too accurate. This is directly inverse to results in imitation learning ([Sasaki and Yamashina, 2021](https://arxiv.org/html/2406.00392v2#bib.bib45)), where the quality of expert trajectories positively impacts the performance achieved when training on these trajectories. We attribute this result to an over-reliance on social learning when oracles are too accurate, which therefore impedes the progress of independent in-context learning during training. Conversely, if oracles are too random, agents do not acquire the necessary social learning skills to effectively make use of prior generations.

Goal Sequence: Figure [4](https://arxiv.org/html/2406.00392v2#S5.F4 "Figure 4 ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") (left) shows that in-context accumulation also significantly outperforms single-lifetime RL2 when evaluated on a new goal sequence. On this more challenging, partially-observable navigation task, we found that higher, but still imperfect oracle accuracies during training produced the most effective accumulating agents. This is likely due to the fact that learning to learn socially in this environment is a much harder problem that involves finding and actively following another agent. We additionally observe that the performance of each generation typically drops slightly on the last trial or two, where agents are entirely or mostly independent. This indicates that although agents are able to independently recall and navigate most of the sequence they have learned, improving on the previous generation, they are still somewhat over-reliant on demonstrations.

TSP: We present these results in Figure [4](https://arxiv.org/html/2406.00392v2#S5.F4 "Figure 4 ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") (right). Again, we see that cultural accumulation enables sustained improvements considerably beyond RL2 over a single continuous context (i.e., lifetime). We only show the RL2 baseline trained on shorter episodes, as the baseline trained on longer episodes failed to make meaningful learning progress. In Figure [2](https://arxiv.org/html/2406.00392v2#S3.F2 "Figure 2 ‣ 3.1 Environments ‣ 3 Problem Statement ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), we show routes traversed by different generations for an example set of city locations. Notably, these routes become more optimised across generations, with later generations exploiting a decreasing subset of edges.

### 5.2 In-Weights Results

![Refer to caption](https://arxiv.org/html/2406.00392v2/figures/iwa_goalseq.png)


Figure 6: In-weights accumulation on Goal Sequence.

Memory Sequence: Figure [5](https://arxiv.org/html/2406.00392v2#S5.F5 "Figure 5 ‣ 5.1 In-Context Results ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") (left) shows that agents can accumulate over the course of training via Algorithm [3](https://arxiv.org/html/2406.00392v2#alg3 "Algorithm 3 ‣ Appendix A In-Weights Accumulation ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"). For in-weights accumulation, the sequence is kept fixed over training, meaning that agents are trained to learn as much of a single sequence as possible. After one generation of accumulation, these agents outperform single-lifetime training for a duration equivalent to 5 complete generations. This demonstrates that single-lifetime learners succumb to primacy bias
([Nikishin et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib34)) and converge prematurely. In light of this, we investigate whether in-weights accumulation can be paired with other methods to overcome primacy bias. In particular, we use the simple approach of resetting some policy network layers ([Nikishin et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib34)), opting for resetting the final two feed-forward layers, and present these results in Figure [5](https://arxiv.org/html/2406.00392v2#S5.F5 "Figure 5 ‣ 5.1 In-Context Results ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") (right). We observe that resetting alone helps mitigate premature convergence, but that when we apply resetting to accumulating agents5, the improvements are compounded and agents reach higher returns than via either method independently.

Goal Sequence: Figure [6](https://arxiv.org/html/2406.00392v2#S5.F6 "Figure 6 ‣ 5.2 In-Weights Results ‣ 5 Results ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning") shows that in-weights accumulation exceeds the performance of training a single agent for a continuous run equivalent to the total duration of 4 accumulation steps.

TSP: We show results for in-weights accumulation in TSP in Figure [7](https://arxiv.org/html/2406.00392v2#A2.F7 "Figure 7 ‣ Appendix B In-Weights Accumulation in TSP ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning"), within Appendix [B](https://arxiv.org/html/2406.00392v2#A2 "Appendix B In-Weights Accumulation in TSP ‣ Artificial Generational Intelligence: Cultural Accumulation in Reinforcement Learning").

## 6 Related Work

|  | Explicit Imitation Learning | Implicit Third-Person Social Learning |
| --- | --- | --- |
| Non-Generational | |  | | --- | | Behavioral Cloning | | ([Pomerleau, 1988](https://arxiv.org/html/2406.00392v2#bib.bib39)) | | Inverse RL | | ([Russell, 1998](https://arxiv.org/html/2406.00392v2#bib.bib43)) | | |  | | --- | | Observational Learning by RL | | ([Borsa et al., 2017](https://arxiv.org/html/2406.00392v2#bib.bib7)) | | Emergent Social Learning | | ([Ndousse et al., 2021](https://arxiv.org/html/2406.00392v2#bib.bib32)) | | Learning Few-Shot Imitation | | ([Bhoopchand et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib5)) | |
| Generational Training | |  | | --- | | Kickstarting | | ([Schmitt et al., 2018](https://arxiv.org/html/2406.00392v2#bib.bib47)) | | X-Land | | ([Stooke et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib52)) | | Our Work |

Table 1: Comparisons to prior work. Generational Training helps overcome local optima to tackle open-ended tasks ([Stooke et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib52)). Implicit third-person social learning is more general than hand-crafted imitation learning algorithms. Our work combines both to achieve cultural accumulation.

Social Learning: Considerable focus has been placed on using social learning to overcome hard exploration problems, imitate human behaviour, and generalise to unseen environments ([Ndousse et al., 2021](https://arxiv.org/html/2406.00392v2#bib.bib32); [Bhoopchand et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib5); [Ha and Jeong, 2023](https://arxiv.org/html/2406.00392v2#bib.bib14)). [Ndousse et al. (2021)](https://arxiv.org/html/2406.00392v2#bib.bib32) trains agents that achieve reasonable performance without a demonstrator by increasing the proportion of episodes with no demonstrator in handpicked increments over training. We employ a similar approach for training agents to eventually act independently by annealing the probability of observing the previous generation across training. To obtain independently capable agents in-context, we anneal the probability of observing the previous generation between trials, which is similar to the expert dropout used in [Bhoopchand et al. (2023)](https://arxiv.org/html/2406.00392v2#bib.bib5).

Machine Learning Models of Cumulative Culture: A growing body of work uses advances in machine learning to model cultural accumulation in-silico ([Prystawski et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib41); [Perez et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib36); [Perez et al., 2024](https://arxiv.org/html/2406.00392v2#bib.bib37)). [Perez et al. (2024)](https://arxiv.org/html/2406.00392v2#bib.bib37) use Bayesian RL with constrained inter-generational communication to reproduce social learning processes documented in human populations. This communication is represented in a domain specific language. Rather than requiring an explicit communication channel between agents, we use social learning to facilitate accumulation in a more domain agnostic manner, demonstrating performance gains in multiple distinct settings. [Prystawski et al. (2023)](https://arxiv.org/html/2406.00392v2#bib.bib41) demonstrate cultural evolution in populations of Large Language Models, where language-based communication is used as the mechanism for knowledge transfer between generations.

Generational RL: The generational process of cultural accumulation can be seen as iterations of implicit policy distillation and improvement. Iterative policy distillation ([Schmitt et al., 2018](https://arxiv.org/html/2406.00392v2#bib.bib47); [Stooke et al., 2022](https://arxiv.org/html/2406.00392v2#bib.bib52)) is therefore related to our work. Unlike these methods, we do not assume that the new learner has access to the policies of experts or past generations, but only observations of their behaviour as they interact with a shared environment. We also do not explicitly modify the learning objective, leaving the agent free to learn how much or how little to imitate past generations.

## 7 Conclusion

We take inspiration from the widespread success of cumulative culture in nature and investigate cultural accumulation in reinforcement learning. We construct an in-context model of accumulation, which operates on episodic timescales, and an in-weights model, which operates over entire training runs. We define successful cultural accumulation as a generational process that exceeds the performance of independent learning with the same total experience budget. We then present in-context and in-weights algorithms that give rise to successful cultural accumulation on several tasks requiring exploration under partial observability. We find that in-context accumulation can be impeded by training agents with oracles that are either too reliable or too unreliable, highlighting the need to balance social learning and independent discovery. We also show that in-weights accumulation effectively mitigates primacy bias and is further improved by network resets.

Limitations and Future Work: An interesting future direction would be to use learned auto-curricula ([Dennis et al., 2020](https://arxiv.org/html/2406.00392v2#bib.bib11); [Jiang et al., 2021](https://arxiv.org/html/2406.00392v2#bib.bib19)) for deciding when agents should learn socially or independently, instead of linearly annealing the observation probability. Another extension would be to investigate cumulative culture in settings with different incentive structures, such as heterogeneous or cooperative rewards ([Rutherford et al., 2023](https://arxiv.org/html/2406.00392v2#bib.bib44)). Future work could also study ways we can evolve the process of cultural accumulation itself ([Lu et al., 2023a](https://arxiv.org/html/2406.00392v2#bib.bib25)) or learn to influence the learning process of other agents ([Lu et al., 2022b](https://arxiv.org/html/2406.00392v2#bib.bib28); [Lu et al., 2023b](https://arxiv.org/html/2406.00392v2#bib.bib26)) for cultural transmission. Finally, we note that whilst understanding cumulative culture has benefits for both machine learning and modelling human society, the consequences of self-improving systems should warrant consideration.

## Acknowledgments

Jonathan Cook is supported by the ESPRC Centre for Doctoral Training in Autonomous Intelligence Machines and Systems EP/S024050/1. Jakob Foerster is partially funded by the UKI grant EP/Y028481/1 (originally selected for funding by the ERC). Jakob Foerster is also supported by the JPMC Research Award and the Amazon Research Award.

## References

- Anthony et al. [2017]

  Thomas Anthony, Zheng Tian, and David Barber.
  Thinking fast and slow with deep learning and tree search, 2017.
- Bandura and Walters [1977]

  Albert Bandura and Richard H Walters.
  *Social learning theory*, volume 1.
  Englewood cliffs Prentice Hall, 1977.
- Barkow et al. [1975]

  Jerome H Barkow, Akinsola A Akiwowo, Tushar K Barua, MRA Chance, Eliot D Chapple, Gouranga P Chattopadhyay, Daniel G Freedman, WR Geddes, BB Goswami, PAC Isichei, et al.
  Prestige and culture: a biosocial interpretation [and comments and replies].
  *Current Anthropology*, 16(4):553–572, 1975.
- Bauer et al. [2023]

  J. Bauer, K. Baumli, S. Baveja, et al.
  Human-timescale adaptation in an open-ended task space.
  In *International Conference on Machine Learning*, 2023.
- Bhoopchand et al. [2023]

  A. Bhoopchand, B. Brownfield, A. Collister, et al.
  Learning few-shot imitation as cultural transmission.
  In *Nature Communications 14*, page 7536, 2023.
- Bonnet et al. [2024]

  Clément Bonnet, Daniel Luo, Donal Byrne, Shikha Surana, Sasha Abramowitz, Paul Duckworth, Vincent Coyette, Laurence I. Midgley, Elshadai Tegegn, Tristan Kalloniatis, Omayma Mahjoub, Matthew Macfarlane, Andries P. Smit, Nathan Grinsztajn, Raphael Boige, Cemlyn N. Waters, Mohamed A. Mimouni, Ulrich A. Mbou Sob, Ruan de Kock, Siddarth Singh, Daniel Furelos-Blanco, Victor Le, Arnu Pretorius, and Alexandre Laterre.
  Jumanji: a diverse suite of scalable reinforcement learning environments in jax, 2024.
  URL <https://arxiv.org/abs/2306.09884>.
- Borsa et al. [2017]

  Diana Borsa, Bilal Piot, Rémi Munos, and Olivier Pietquin.
  Observational learning by reinforcement learning.
  *arXiv preprint arXiv:1706.06617*, 2017.
- Buck and Keller [2008]

  A. R. Buck and J. M. Keller.
  A myopic monte carlo strategy for the partially observable travelling salesman problem.
  2008.
- Cochrane et al. [2023]

  Aaron Cochrane, Chris R Sims, Vikranth R Bejjanki, C Shawn Green, and Daphne Bavelier.
  Multiple timescales of learning indicated by changes in evidence-accumulation processes during perceptual decision-making.
  *npj Science of Learning*, 8(1):19, 2023.
- Cornish et al. [2017]

  H. Cornish, R. Dale, S. Kirby, and M. H. Christiansen.
  Sequence memory constraints give rise to language-like structure through iterated learning.
  In *PLoS ONE*, 2017.
- Dennis et al. [2020]

  Michael Dennis, Natasha Jaques, Eugene Vinitsky, Alexandre Bayen, Stuart Russell, Andrew Critch, and Sergey Levine.
  Emergent complexity and zero-shot transfer via unsupervised environment design.
  *Advances in neural information processing systems*, 33:13049–13061, 2020.
- Duan et al. [2016]

  Y. Duan, J. Schulman, X. Chen, P. L. Bartlett, I. Sutskever, and P. Abbeel.
  R$\text{L}^{2}$: Fast reinforcement learning via slow reinforcement learning.
  arXiv preprint, arXiv:1611.02779, 2016.
- Enquist et al. [2008]

  M. Enquist, S. Ghirlanda, and A. Jarrick.
  Why does human culture increase exponentially?
  2008.
- Ha and Jeong [2023]

  Seungwoong Ha and Hawoong Jeong.
  Social learning spontaneously emerges by searching optimal heuristics with deep reinforcement learning.
  In *International Conference on Machine Learning*, pages 12319–12338. PMLR, 2023.
- Henrich [2019]

  J. Henrich.
  The secret of our success: How culture is driving human evolution, domesticating our species, and making us smarter.
  Princeton University Press, 2019.
- Hofstede et al. [1994]

  G. Hofstede, G. J. Hofstede, and M. Minkov.
  Cultures and organizations: Software of the mind.
  McGraw-Hill Professional, 1994.
- Hoppitt and Laland [2013]

  William Hoppitt and Kevin N Laland.
  *Social learning: an introduction to mechanisms, methods, and models*.
  Princeton University Press, 2013.
- Horner et al. [2010]

  Victoria Horner, Darby Proctor, Kristin E Bonnie, Andrew Whiten, and Frans BM de Waal.
  Prestige affects cultural learning in chimpanzees.
  *PloS one*, 5(5):e10625, 2010.
- Jiang et al. [2021]

  Minqi Jiang, Michael Dennis, Jack Parker-Holder, Jakob Foerster, Edward Grefenstette, and Tim Rocktäschel.
  Replay-guided adversarial environment design.
  *Advances in Neural Information Processing Systems*, 34:1884–1897, 2021.
- Johnson [2003]

  Addie Johnson.
  Procedural memory and skill acquisition.
  *Handbook of psychology*, pages 499–523, 2003.
- Kaelbling et al. [1998]

  L. P. Kaelbling, M. L. Littman, and A. R. Cassandra.
  Planning and acting in partially observable stochastic domains.
  101:99–134, 1998.
- Kuhn [1953]

  H. W. Kuhn.
  Extensive games and the problem of information.
  28:193–216, 1953.
- Laskin et al. [2022]

  M. Laskin, L. Wang, J. Oh, et al.
  In-context reinforcement learning with algorithm distillation.
  In *Advances in Neural Information Processing Systems*, 2022.
- Lu et al. [2022a]

  Chris Lu, Jakub Kuba, Alistair Letcher, Luke Metz, Christian Schroeder de Witt, and Jakob Foerster.
  Discovered policy optimisation.
  *Advances in Neural Information Processing Systems*, 35:16455–16468, 2022a.
- Lu et al. [2023a]

  Chris Lu, Sebastian Towers, and Jakob Foerster.
  Arbitrary order meta-learning with simple population-based evolution.
  In *ALIFE 2023: Ghost in the Machine: Proceedings of the 2023 Artificial Life Conference*. MIT Press, 2023a.
- Lu et al. [2023b]

  Chris Lu, Timon Willi, Alistair Letcher, and Jakob Nicolaus Foerster.
  Adversarial cheap talk.
  In *International Conference on Machine Learning*, pages 22917–22941. PMLR, 2023b.
- Lu et al. [2024]

  Chris Lu, Yannick Schroecker, Albert Gu, Emilio Parisotto, Jakob Foerster, Satinder Singh, and Feryal Behbahani.
  Structured state space models for in-context reinforcement learning.
  *Advances in Neural Information Processing Systems*, 36, 2024.
- Lu et al. [2022b]

  Christopher Lu, Timon Willi, Christian A Schroeder De Witt, and Jakob Foerster.
  Model-free opponent shaping.
  In *International Conference on Machine Learning*, pages 14398–14411. PMLR, 2022b.
- Mesoudi [2011]

  Alex Mesoudi.
  Variable cultural acquisition costs constrain cumulative cultural evolution.
  *PloS one*, 6(3):e18239, 2011.
- Mesoudi and Thornton [2018]

  Alex Mesoudi and Alex Thornton.
  What is cumulative cultural evolution?
  *Proceedings of the Royal Society B*, 285(1880):20180712, 2018.
- Morad et al. [2024]

  Steven Morad, Chris Lu, Ryan Kortvelesy, Stephan Liwicki, Jakob Foerster, and Amanda Prorok.
  Revisiting recurrent reinforcement learning with memory monoids.
  *arXiv preprint arXiv:2402.09900*, 2024.
- Ndousse et al. [2021]

  K. Ndousse, D. Eck, S. Levine, and N. Jaques.
  Emergent social learning via multi-agent reinforcement learning.
  In *International Conference on Machine Learning*, 2021.
- Ni et al. [2021]

  T. Ni, B. Eysenbach, and R. Salakhutdinov.
  Recurrent model-free rl can be a strong baseline for many pomdps.
  2021.
- Nikishin et al. [2022]

  E. Nikishin, M. Schwarzer, P. D’Oro, P-L. Bacon, and A. Courville.
  The primacy bias in deep reinforcement learning.
  In *International Conference on Machine Learning*, 2022.
- Noormohammadi-Asl and Taghirad [2019]

  A. Noormohammadi-Asl and H. D. Taghirad.
  Multi-goal motion planning using traveling salesman problem in belief space.
  2019.
- Perez et al. [2023]

  J. Perez, M. Sánchez-Fibla, and C. Moulin-Frier.
  Cultural evolution in populations with heterogenous and variable preferences.
  2023.
  URL <https://inria.hal.science/hal-04408019>.
- Perez et al. [2024]

  J. Perez, C. Léger, M. Ovando-Tellez, C. Foulon, J. Dussauld, P. Oudayer, and C. Moulin-Frier.
  Cultural evolution in populations of large language models.
  2024.
- Perreault [2012]

  Charles Perreault.
  The pace of cultural evolution.
  2012.
- Pomerleau [1988]

  Dean A Pomerleau.
  Alvinn: An autonomous land vehicle in a neural network.
  *Advances in neural information processing systems*, 1, 1988.
- Poulin-Dubois and Brosseau-Liard [2016]

  D. Poulin-Dubois and P. Brosseau-Liard.
  The developmental origins of selective social learning.
  *Current Directions in Psychological Science*, 25(1):60–64, 2016.
- Prystawski et al. [2023]

  B. Prystawski, D. Arumugam, and N. D. Goodman.
  Cultural reinforcement learning: a framework for modeling cumulative culture on a limited channel.
  2023.
- Rendell et al. [2010]

  Luke Rendell, Robert Boyd, Daniel Cownden, Marquist Enquist, Kimmo Eriksson, Marc W Feldman, Laurel Fogarty, Stefano Ghirlanda, Timothy Lillicrap, and Kevin N Laland.
  Why copy others? insights from the social learning strategies tournament.
  *Science*, 328(5975):208–213, 2010.
- Russell [1998]

  Stuart Russell.
  Learning agents for uncertain environments.
  In *Proceedings of the eleventh annual conference on Computational learning theory*, pages 101–103, 1998.
- Rutherford et al. [2023]

  Alexander Rutherford, Benjamin Ellis, Matteo Gallici, Jonathan Cook, Andrei Lupu, Gardar Ingvarsson, Timon Willi, Akbir Khan, Christian Schroeder de Witt, Alexandra Souly, et al.
  Jaxmarl: Multi-agent rl environments in jax.
  *arXiv preprint arXiv:2311.10090*, 2023.
- Sasaki and Yamashina [2021]

  F. Sasaki and R. Yamashina.
  Behavioural cloning from noisy demonstrations.
  In *International Conference on Learning Representations*, 2021.
- Sasaki and Biro [2017]

  T. Sasaki and D. Biro.
  Cumulative culture can emerge from collective intelligence in animal groups.
  2017.
- Schmitt et al. [2018]

  Simon Schmitt, Jonathan J Hudson, Augustin Zidek, Simon Osindero, Carl Doersch, Wojciech M Czarnecki, Joel Z Leibo, Heinrich Kuttler, Andrew Zisserman, Karen Simonyan, and S. M. Ali Eslami.
  Kickstarting deep reinforcement learning.
  *arXiv preprint, arXiv:1803.03835*, 2018.
- Schulman et al. [2017]

  J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O. Klimov.
  Proximal policy optimization algorithms.
  arXiv preprint, arXiv:1707.06347, 2017.
- Smith et al. [2022]

  J. T. H. Smith, A. Warrington, and S. W. Linderman.
  Simplified state space layers for sequence modelling.
  arXiv preprint, arXiv:2208.04933, 2022.
- Squire [2004]

  Larry R Squire.
  Memory systems of the brain: a brief history and current perspective.
  *Neurobiology of learning and memory*, 82(3):171–177, 2004.
- Squire et al. [1993]

  Larry R Squire, Barbara Knowlton, and Gail Musen.
  The structure and organization of memory.
  *Annual review of psychology*, 44(1):453–495, 1993.
- Stooke et al. [2022]

  A. Stooke, A. Mahajan, C. Barros, et al.
  Open-ended learning leads to generally capable agents.
  arXiv preprint, arXiv:2107.12808, 2022.
- Tennie et al. [2009]

  C. Tennie, J. Call, and M. Tomasello.
  Ratcheting up the ratchet: On the evolution of cumulative culture.
  In *Philosophical Transactions of the Royal Society B: Biological Sciences*, 2009.
- Wang et al. [2016]

  Jane X Wang, Zeb Kurth-Nelson, Dhruva Tirumala, Hubert Soyer, Joel Z Leibo, Remi Munos, Charles Blundell, Dharshan Kumaran, and Matt Botvinick.
  Learning to reinforcement learn.
  *arXiv preprint arXiv:1611.05763*, 2016.

## Appendix A In-Weights Accumulation

Algorithm 3  In-Weights Accumulation

1:
 $\hat{\theta}:=\text{init. agent parameters}$

2:
 $\tilde{\theta}^{n^{\*}}\_{0}\leftarrow\hat{\theta}$ // Initialise the “random” first generation parameters

3:
 for each generation $m\in[1,G]$ do

4:
  for each population member $n\in[1,N\_{\text{pop}}]$ do

5:
   $B:=\text{trajectory buffer}$

6:
   $\theta^{n}\_{m}\sim\hat{\theta}$

7:
   for train step $t\in[0,T-1]$ do

8:
    $p\_{\text{obs}}=1-t/(T-1)$

9:
    $s\sim\hat{S}$

10:
    while not done do

11:
     $o^{n}\_{m-1},o^{n}\_{m}\sim O(s)$

12:
     if $p\sim\text{Bernoulli}(p\_{\text{obs}})$ then

13:
      Set previous generation visible in $o^{n}\_{m}$

14:
     end if

15:
     $a^{n}\_{m-1}\sim\pi\_{\tilde{\theta}^{n^{\*}}\_{m-1}}(o^{n}\_{m-1})$

16:
     $a^{n}\sim\pi\_{\theta^{n}\_{m}}(o^{n}\_{m})$

17:
     $s,r\sim T(s,a)$

18:
     $B\leftarrow(o^{n}\_{m},a^{n}\_{m},r^{n}\_{m})$ // Append transition to buffer

19:
    end while

20:
    $\theta^{n}\_{m}\leftarrow\text{update}(\theta^{n}\_{m},B)$

21:
   end for

22:
   $n^{\*}=\text{argmax}\_{n\in[1,N\_{\text{pop}}]}\sum\_{t=T-1}r^{n}\_{m}$ // Select best population member based on final episode performance

23:
  end for

24:
 end for

## Appendix B In-Weights Accumulation in TSP

In this setting, after two generations, performance exceeds agents trained for a single lifetime equivalent to 5 generations. However, we do not observe as much improvement on subsequent generations.

Figure 7: In-weights accumulation on TSP.

## Appendix C Selective Social Learning

In the Goal Sequence experiments, we select the best performing agent of the last generation for the current generation of agents to observe during training, automating the selection process. In human and animal cultural accumulation, this selection is instead learned through prestige cues [Barkow et al. [1975]](https://arxiv.org/html/2406.00392v2#bib.bib3), [Horner et al. [2010]](https://arxiv.org/html/2406.00392v2#bib.bib18). Thus, in the Memory Sequence experiments, we do not automatically select the best of the past generation for the agents to observe. Instead, the agents can observe the entire last generation. For In-Context Accumulation, we sort the observed oracles and agents by their performance during pre-training and evaluation. Thus, the agents ideally learn to weight the last generation by their relative performance. For In-Weights Accumulation, sorting does not make a difference, as random network initialization is agnostic to the observation ordering. Thus, the agent learns implicitly through observation, which of the past generation is the best to imitate.

## Appendix D Further Environment Details

### D.1 Memory Sequence

For in-context accumulation in Memory Sequence, we use sequences comprised of three digits, with a maximum length of 24, and give the agents four trials per episode. Each generation has a population size of three. We perform initial meta-training for 8e6 timesteps. Agents get a reward of $1.0$ for a correct response and a reward for $-1.0$ for an incorect one. The trial ends when an incorrect response is given or the maximum length is reached.

For in-weight accumulation in Memory Sequence we use sequences comprising of ten digits, with a maximum length of 24. Agents train for 1e5 timesteps. Each generation has a population size of five. Agents get a reward of $1.0$ for a correct response and a reward for $-1.0$ for an incorect one. The episode ends when the maximum length is achieved.

### D.2 Goal Sequence

We use $7\times 7$ grids with 3 goal types. Agents observe a $3\times 3$ grid of cells directly in front of them. Observations are symbolic with 4 channels (one for each goal type and one for agents). On each timestep, an agent can take one of three actions: move forward, turn left, turn right. Agents receive $+1$ reward for hitting the correct next goal and $-1$ reward for hitting the incorrect next goal. For in-context experiments, trials are 30 steps long and there are 4 trials in an episode. For in-weights experiments, episodes are 50 steps long.

### D.3 TSP

For in-context accumulation in TSP, we use six cities and provide eight trials per episode. The city positions are uniformly sampled in the unit square. Each generation has a population size of three. We perform initial meta-training for 8e6 timesteps. Agents get a reward of $\frac{(\sqrt{2}-\text{dist}(\text{cur city},\text{next city}))}{\sqrt{2}}$ if the selected next city is valid. Agents get a reward of $-1.0$ and the trial ends if they select an already-visited city.

For in-weight accumulation in TSP, we use twenty-four cities. Each generation has a population size of eight. Agents train for 3e5 timesteps. The reward setup is equivalent to above.

## Appendix E Architecture Details

### E.1 Memory Sequence and TSP

The policy and value networks share two fully layers and a GRU layer. Values and policies are computed with two fully connected layers. All layers use leaky ReLU activations. Here, we take the example of a 4-dimensional input for the 4-dimensional embedding of an action observation and assume the in-weights setting, so no trials. The final output is 10-dimensional in the case of a random sequence made up of 10 distinct digits.

- •

  Shared input layers:

  - –

    FC (4, 128)
  - –

    FC (128, 256)
  - –

    FC (256, 256)
  - –

    GRU (256, 256)
- •

  Value MLP:

  - –

    FC (256, 128)
  - –

    FC (128, 128)
  - –

    FC (128, 1)
- •

  Policy MLP:

  - –

    FC (256, 128)
  - –

    FC (128, 128)
  - –

    FC (128, 10)

### E.2 Goal Sequence

The policy and value networks share three convolutional layers, a fully connected layer, and an S5 layer. Values and policies are computed with two fully connected layers. Convolutions use leaky ReLU activation functions and all other layers use tanh activation functions. Inputs are 5-dimensional for one-hot encodings of 3 goal types, walls and agents. A 3-dimensional vector for one-hot encodings of reward is concatenated to the output of the last convolutional layer. A one-hot encoding of the trial would also be included in the in-context setting.

- •

  Shared input layers:

  - –

    Conv (5, 32), $1\times 1$ filters, stride 1, padding 0
  - –

    Conv (32, 64), $1\times 1$ filters, stride 1, padding 0
  - –

    Conv (64, 64), $1\times 1$ filters, stride 1, padding 0
  - –

    FC (576 + 3, 256)
  - –

    S5 (256, 256)
- •

  Value MLP:

  - –

    FC (256, 64)
  - –

    FC (64, 64)
  - –

    FC (64, 1)
- •

  Policy MLP:

  - –

    FC (256, 64)
  - –

    FC (64, 64)
  - –

    FC (64, 3)

## Appendix F Hyperparameters

### F.1 Memory Sequence and TSP

|  |  |
| --- | --- |
| population size | 5 |
| learning rate | $2.5\times 10^{-5}$ |
| batch size | 4 |
| rollout length | 128 |
| update epochs | 4 |
| minibatches | 4 |
| $\gamma$ | 0.99 |
| $\lambda\_{GAE}$ | 0.95 |
| $\epsilon$ clip | 0.2 |
| entropy coefficient | 0.01 |
| value coefficient | 0.5 |
| max gradient norm | 0.5 |
| anneal learning rate | False |

### F.2 Goal Sequence

|  |  |
| --- | --- |
| population size | 4 |
| learning rate | $1\times 10^{-5}$ |
| batch size | 128 |
| rollout length | 32 |
| update epochs | 8 |
| minibatches | 8 |
| $\gamma$ | 0.99 |
| $\lambda\_{GAE}$ | 0.95 |
| $\epsilon$ clip | 0.2 |
| entropy coefficient | 0.01 |
| value coefficient | 0.5 |
| max gradient norm | 0.5 |
| anneal learning rate | False |

## Appendix G Compute Resources

Memory Sequence and TSP experiments were run on a single NVIDIA RTX A40 GPU (40GB memory) in under 20 minutes. Training of in-context learners in Goal Sequence was run in under 8 minutes on 4 A40s (oracle training runs in the same time). In-weights accumulation in Goal Sequence was run in 30 minutes on 4 A40s.
