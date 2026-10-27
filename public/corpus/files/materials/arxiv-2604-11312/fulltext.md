---
id: arxiv-2604-11312-text
type: material
title: Collective Opinion Dynamics in Structured LLM Populations
work_id: arxiv-2604-11312
source_url: https://arxiv.org/html/2604.11312v3
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 3b6e90084fa506b1afd4c9b06cf5bbdb67412e3ae308817e76eeccd56c11ec14
---

> Источник: [https://arxiv.org/html/2604.11312v3](https://arxiv.org/html/2604.11312v3). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Collective Opinion Dynamics in Structured LLM Populations

Erica Cau
†
  
Andrea Failla
†
  
Giulio Rossetti
†

###### Abstract

Large Language Models are increasingly deployed as interacting agents in settings such as online platforms, recommendation systems, and multi-agent applications.
Understanding the collective behaviors that emerge from their interactions is therefore increasingly crucial, especially as these behaviors may shape public opinion and contribute to polarization.
In this work, we investigate how network structure and group composition shape the evolution of opinions in populations of LLM agents engaged in multi-round debates.
We generate five networks with controlled levels of homophily and varying group sizes, and perform ten independent runs per configuration.
The results show that LLM agents exhibit patterns that are highly sensitive to network structure, relative group sizes, and to the model itself.
We highlight that even within LLM populations, low homophily facilitates convergence by increasing opportunities for cross-group interaction, whereas higher homophily limits cross-group exposure and can preserve distinct opinion states, consistent with previous research.
We further show that the choice of LLM substantially affects the resulting dynamics, with different models exhibiting different patterns of opinion updating under comparable network conditions.
At the individual level, providing agents with information about their local neighborhood further modulates opinion transitions, revealing substantial differences between models in their sensitivity to local social context.
Overall, our findings show that the collective dynamics of LLM populations arise from interactions among model-specific behavior, network structure, population composition, and local social information.

Keywords: LLM, Opinion Dynamics, Homophily, Social Simulation

## 1 Introduction

The introduction of Large Language Models (LLMs) [[1](https://arxiv.org/html/2604.11312v3#bib.bib60), [2](https://arxiv.org/html/2604.11312v3#bib.bib33), [3](https://arxiv.org/html/2604.11312v3#bib.bib44), [4](https://arxiv.org/html/2604.11312v3#bib.bib34)] has revolutionized the field of Natural Language Processing (NLP), advancing the ability of language models to generate text that closely resembles human writing [[5](https://arxiv.org/html/2604.11312v3#bib.bib18)].
Through these skills, the models have demonstrated unprecedented capabilities, even in fields not closely related to linguistics, such as medicine [[6](https://arxiv.org/html/2604.11312v3#bib.bib47), [7](https://arxiv.org/html/2604.11312v3#bib.bib29)], law [[8](https://arxiv.org/html/2604.11312v3#bib.bib26)], code generation [[9](https://arxiv.org/html/2604.11312v3#bib.bib28)], and mathematical reasoning [[10](https://arxiv.org/html/2604.11312v3#bib.bib27)].
Beyond performing individual tasks, these capabilities have also enabled the development of LLM-based agents: systems that integrate language models with mechanisms for planning, memory, and interaction with their environment.
LLM agents have demonstrated their ability to solve complex tasks by coordinating, planning, and making decisions [[11](https://arxiv.org/html/2604.11312v3#bib.bib20)], and to adapt their behavior in response to ongoing interactions.
Because of their versatility, LLM agents are increasingly being incorporated into a wide range of applications, including social simulations [[12](https://arxiv.org/html/2604.11312v3#bib.bib64), [13](https://arxiv.org/html/2604.11312v3#bib.bib4), [14](https://arxiv.org/html/2604.11312v3#bib.bib52)].
In social contexts, agents can participate in online discussions [[15](https://arxiv.org/html/2604.11312v3#bib.bib25)], operate accounts on real platforms [[16](https://arxiv.org/html/2604.11312v3#bib.bib23)] such as X (formerly Twitter), and LLM populations are employed to simulate complex social dynamics [[12](https://arxiv.org/html/2604.11312v3#bib.bib64)].
LLM agents are increasingly serving as social actors [[17](https://arxiv.org/html/2604.11312v3#bib.bib21), [18](https://arxiv.org/html/2604.11312v3#bib.bib30), [19](https://arxiv.org/html/2604.11312v3#bib.bib48)], interacting with (and affecting) other people or agents.
One concern with deploying these LLM agents on social platforms is that they can convincingly mimic real individuals and be more persuasive than humans [[20](https://arxiv.org/html/2604.11312v3#bib.bib31)].
Moreover, it is still unclear what their collective behavior, capabilities, and intrinsic biases are, and what may emerge at scale [[18](https://arxiv.org/html/2604.11312v3#bib.bib30)].
  
LLM populations exhibit human-like collective behaviors such as scale-free network formation [[21](https://arxiv.org/html/2604.11312v3#bib.bib16)] and information diffusion patterns [[22](https://arxiv.org/html/2604.11312v3#bib.bib38), [23](https://arxiv.org/html/2604.11312v3#bib.bib32)].
They exhibit social conventions and collective preferences [[19](https://arxiv.org/html/2604.11312v3#bib.bib48)] at the population level, as well as homophily [[24](https://arxiv.org/html/2604.11312v3#bib.bib7)], social influence [[18](https://arxiv.org/html/2604.11312v3#bib.bib30)], and polarization in networked environments [[25](https://arxiv.org/html/2604.11312v3#bib.bib2)].
LLMs agents can reproduce personae with specific demographic and psychological traits, occupations, political leanings, and, more generally, aspects of human behavior.
When employed to simulate opinion dynamics, LLM agents spontaneously converge to consensus [[26](https://arxiv.org/html/2604.11312v3#bib.bib19)].
However, they tend to overestimate homophily [[27](https://arxiv.org/html/2604.11312v3#bib.bib24)] and exhibit a bias toward scientific truth [[22](https://arxiv.org/html/2604.11312v3#bib.bib38)].
In LLM-human interaction, previous research has assessed that groups of AI agents can exert stronger social influence on users than individual agents, producing larger shifts in users’ stated opinions [[20](https://arxiv.org/html/2604.11312v3#bib.bib31)].
  
As in human societies, even the collective behavior of LLM depends not only on the agents themselves, but also on the structure of their interactions.
Prior literature has focused on defining unstructured agent interactions, such as discussions about controversial topics [[28](https://arxiv.org/html/2604.11312v3#bib.bib37), [29](https://arxiv.org/html/2604.11312v3#bib.bib17)].
Recent work has begun to embed LLM agents in more complex social networks and examine how local social influence shapes opinion updating [[30](https://arxiv.org/html/2604.11312v3#bib.bib62)].
However, it remains unclear how such opinion dynamics interact with structural properties of the underlying network, particularly homophily [[31](https://arxiv.org/html/2604.11312v3#bib.bib50)] and group-size imbalance.
When we interact with others, we form social ties that can be modeled as graph edges, with individuals as nodes.
Human societies are grounded in unwritten social rules, such as homophily, i.e., the idea that similarity breeds connection [[31](https://arxiv.org/html/2604.11312v3#bib.bib50)].
People naturally tend to gravitate toward those perceived as similar, thereby strengthening their connections with them, while avoiding those perceived as too different.
This behavior has various consequences: it might amplify social divisions, strengthen boundaries between groups, and eventually lead to the segregation of populations into homogeneous clusters.
In LLM societies, the role of such fundamental structural patterns in shaping the evolution of opinion remains unclear.
  
  
Why do these questions matter? There are at least two reasons why the effect of social structure on opinion dynamics of LLM societies needs to be studied.
By observing how structured populations of LLM agents respond to topological factors such as homophily and class imbalance, one can characterize population-level behavioral tendencies and biases that cannot be inferred from the behavior of isolated agents alone.
This is particularly critical when LLM agents interact in high-stakes contexts [[32](https://arxiv.org/html/2604.11312v3#bib.bib3)], such as social networks, and isolating the effects of the models and their topology may allow us to predict the potential outcomes of their interactions with humans.
Second, since LLMs are increasingly employed in agent-based simulations of human social systems [[33](https://arxiv.org/html/2604.11312v3#bib.bib36), [34](https://arxiv.org/html/2604.11312v3#bib.bib10), [35](https://arxiv.org/html/2604.11312v3#bib.bib9)], it is crucial to evaluate which collective dynamics emerge from the models and which ones are attributable to the structure of the simulated environment.
Recent work has shown that LLM agents can generate homophilic and assortative network structures [[24](https://arxiv.org/html/2604.11312v3#bib.bib7), [27](https://arxiv.org/html/2604.11312v3#bib.bib24)] and exhibit gender-based homophily [[36](https://arxiv.org/html/2604.11312v3#bib.bib5)], while other studies have investigated how group size and interaction dynamics can shape collective biases in LLM populations [[18](https://arxiv.org/html/2604.11312v3#bib.bib30)].
However, these lines of work have largely considered network structure and population size as separate factors.
  
  
Our contribution.
Our work addresses these gaps by introducing simulations in which LLM agents are embedded within a network structure to observe how variations in network homophily and group composition shape their collective outcomes.
We examine how homophily and relative class sizes within the interaction network affect opinion evolution in LLM societies.
Previous work has investigated the homophilic mechanism in networks generated by LLM agents, focusing particularly on how the attributes of LLM agents (e.g., gender, age, or political leaning) influence link formation, leading to assortative structures and clustered communities [[24](https://arxiv.org/html/2604.11312v3#bib.bib7)].
In contrast, we model populations of LLMs as agents within a preferential attachment framework augmented with homophilic edge formation [[37](https://arxiv.org/html/2604.11312v3#bib.bib11)].
This allows us to manipulate not only traditional network parameters (e.g., degree distribution) but also the social alignment of nodes (via homophily) and the distribution of opinions (via class size imbalance).
We simulate debates among agents on a given initial statement and trace how opinions evolve over time, with simulations repeated using two different models, which allows structural and model effects to be distinguished. Our investigation is structured around the following research questions:
  
  
RQ1. How does homophily influence opinion dynamics in balanced LLM agent populations?
In this experiment, the agent population is evenly divided (50-50) between two opinion classes. We vary the homophily parameter while keeping all other factors constant, particularly class size, to isolate and observe the impact of homophilic attachment on the trajectory and convergence of opinion evolution.
  
  
RQ2. How does the effect of homophily on LLM opinion dynamics change under increasingly imbalanced class distributions?
Building on RQ1, we investigate how skewing the initial class size distribution (i.e., from 70-30 to 90-10) affects the role of homophily in opinion dynamics. This allows us to examine whether the presence of a minority affects the extent to which homophily influences consensus formation and opinion stability.
  
  
RQ3. How does knowledge of neighbors’ opinion distribution affect opinion dynamics, at both the collective and the individual level?
Recent work has shown that LLMs can undergo peer pressure [[38](https://arxiv.org/html/2604.11312v3#bib.bib6)] when updating their opinions in response to the opinion distribution of their neighbors [[30](https://arxiv.org/html/2604.11312v3#bib.bib62)].
We simulate debates between agents with known opinion distributions and assess the impact of this knowledge on opinion change.
  
  
RQ4. What micro-level dynamics underlie the aggregate patterns of opinion change?
We observe micro-level interactions and model-specific trends by analyzing whether the opinions of interacting agents and the composition of their ego network are associated with statistically significant differences in the probability and direction of opinion change.

In this study, we hypothesize that by varying network topology while keeping the interaction protocol fixed, we can isolate the contribution of structural factors to collective outcomes.
We aim to isolate network effects from biases intrinsic to the models themselves.
Network topology strongly affects agents’ exposure to opposing opinions: heterogeneous networks facilitate cross-group interactions and can accelerate opinion convergence, whereas higher levels of homophily limit cross-opinion exposure and can preserve more fragmented populations.
The starting population further modulates these effects, with group-size imbalance producing distinct dynamics depending on the network structure and the LLM employed.
Providing agents with information about their local neighborhood further changes these dynamics, showing that collective behavior depends not only on the underlying network structure but also on the information available to agents during interactions.
Overall, our results indicate that the collective dynamics of LLM populations cannot be attributed to network structure or model behavior alone, but arise from their interaction.
  
  
The remainder of this work is organized as follows.
In Section [2](https://arxiv.org/html/2604.11312v3#S2 "2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations"), we provide an overview of the literature regarding opinion dynamics and LLM agents.
In Section [3](https://arxiv.org/html/2604.11312v3#S3 "3 LLM-powered Opinion Dynamics ‣ Collective Opinion Dynamics in Structured LLM Populations"), we introduce the framework for LLM opinion dynamics, and in Section [4](https://arxiv.org/html/2604.11312v3#S4 "4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations"), we introduce the experimental setup and results.
Finally, in Section [5](https://arxiv.org/html/2604.11312v3#S5 "5 Discussion ‣ Collective Opinion Dynamics in Structured LLM Populations"), we conclude the work by discussing the results and suggesting future research directions.

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/Framework_LLMOD.png)


Figure 1: Graphical schema of the LLM-OD framework. The LLM agents population is initialized as nodes in a network; each agent is an LLM instance with an initial opinion in the range [0, 6] (a). At each iteration, two neighbor agents are chosen and prompted to act as Opponent and Discussant (b). The Discussant is prompted to listen to the opinion of the Opponent around the discussion statement and may then accept, reject, or ignore such opinion (c) and update their current one accordingly by ±1 (d).

## 2 Related Work

In this section, we discuss relevant literature on Opinion Dynamics and Large Language Model populations, especially in social simulations.

#### Opinion Dynamic Models

Opinion dynamics (OD) describes computational processes that mimic how individual views evolve over time under empirically observed social influences [[39](https://arxiv.org/html/2604.11312v3#bib.bib51), [40](https://arxiv.org/html/2604.11312v3#bib.bib54)].
In a typical OD simulation, a network of interacting agents, the population, holds opinions encoded as real numbers.
Empirically grounded social mechanisms are cast as update rules, drawing on tools from statistical physics, network science, and probability theory.
For example, an agent may revise its stance by randomly copying a neighbor’s opinion [[41](https://arxiv.org/html/2604.11312v3#bib.bib57)] (modeling imitation), by averaging the views in its local neighborhood [[42](https://arxiv.org/html/2604.11312v3#bib.bib13)] (capturing homophily [[31](https://arxiv.org/html/2604.11312v3#bib.bib50)]), or by adopting the most frequent opinion around it [[43](https://arxiv.org/html/2604.11312v3#bib.bib55)] (reflecting peer pressure and mutual awareness [[44](https://arxiv.org/html/2604.11312v3#bib.bib56)]).
OD research asks whether the interplay of these mechanisms drives the system toward one of three mutually exclusive collective states: (i) *consensus*, when all agents share the same view; (ii) *polarization*, when opinions cluster around two opposing poles; or (iii) *fragmentation*, when more than two distinct clusters form [[45](https://arxiv.org/html/2604.11312v3#bib.bib58), [46](https://arxiv.org/html/2604.11312v3#bib.bib49)].

OD models are also classified by how they encode the opinion variable.
In discrete models, opinions can take only a finite set of values, with rules specifying switches among them.
The classic Voter Model [[47](https://arxiv.org/html/2604.11312v3#bib.bib45)], for instance, considers populations in which agents adopt one of two opposing stances (e.g., agree/disagree).
By contrast, continuous models treat opinions as points on an uninterrupted spectrum.
In the DeGroot Model [[48](https://arxiv.org/html/2604.11312v3#bib.bib53)], each individual holds a subjective probability distribution and each agent updates its opinion as a weighted average of its neighbors’ opinions, simulating social influence.

#### Large Language Models

Recent studies have examined the dynamics that arise from interactions among large language models (LLMs).
These LLM agents typically exhibit realistic behavior both individually and collectively [[49](https://arxiv.org/html/2604.11312v3#bib.bib15), [23](https://arxiv.org/html/2604.11312v3#bib.bib32)], with human-like patterns naturally emerging from their interactions.
Examples include the formation of scale-free networks [[21](https://arxiv.org/html/2604.11312v3#bib.bib16)], dissemination of information [[50](https://arxiv.org/html/2604.11312v3#bib.bib43)], preferential attachment and homophily [[24](https://arxiv.org/html/2604.11312v3#bib.bib7)].
When supplied with demographic backgrounds and personality traits, LLMs can more accurately mimic human behavior [[51](https://arxiv.org/html/2604.11312v3#bib.bib46), [49](https://arxiv.org/html/2604.11312v3#bib.bib15), [52](https://arxiv.org/html/2604.11312v3#bib.bib59)], including human biases and political inclinations [[22](https://arxiv.org/html/2604.11312v3#bib.bib38)].
Integrating LLMs with traditional agent-based modeling approaches [[53](https://arxiv.org/html/2604.11312v3#bib.bib12)], as demonstrated in [[14](https://arxiv.org/html/2604.11312v3#bib.bib52)], has shown how recommender systems can influence the quality of discourse.
Specifically, agents exposed to popular content tend to exhibit increased toxicity and interparty engagement, mirroring the toxicity levels seen in U.S. Twitter discourse circa 2019.
Further simulations reveal that confirmation bias among agents contributes to social fragmentation [[22](https://arxiv.org/html/2604.11312v3#bib.bib38)], aligning with established findings in opinion dynamics.
LLMs are also capable of emulating persuasive communication [[29](https://arxiv.org/html/2604.11312v3#bib.bib17), [54](https://arxiv.org/html/2604.11312v3#bib.bib14)], generating coherent arguments based on psycho-linguistic theories of opinion change, and can be utilized for comprehensive social media simulations [[33](https://arxiv.org/html/2604.11312v3#bib.bib36)].
Nonetheless, LLMs have a natural inclination toward factual correctness and often resist generating content that contradicts scientific knowledge unless explicitly prompted [[22](https://arxiv.org/html/2604.11312v3#bib.bib38)].
One common problem of LLM agents in social simulation is sycophancy, their excessive agreement with and flattery of the user [[55](https://arxiv.org/html/2604.11312v3#bib.bib22)], with effects of this characteristic varying across models.
Additionally, LLM agents generally avoid intense conflict [[56](https://arxiv.org/html/2604.11312v3#bib.bib41), [14](https://arxiv.org/html/2604.11312v3#bib.bib52)] and display sensitivity toward various social and political issues [[57](https://arxiv.org/html/2604.11312v3#bib.bib40), [58](https://arxiv.org/html/2604.11312v3#bib.bib39)].

## 3 LLM-powered Opinion Dynamics

We present a general framework for describing how populations of LLM agents develop and revise their opinions through structured interactions [[59](https://arxiv.org/html/2604.11312v3#bib.bib1), [60](https://arxiv.org/html/2604.11312v3#bib.bib8)].
A graphical overview is given in Figure [1](https://arxiv.org/html/2604.11312v3#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
  
The system is represented by the tuple:

|  |  |  |
| --- | --- | --- |
|  | $$\mathfrak{F}=\langle\mathcal{G},\mathcal{S},\mathcal{O},f,T,\mathcal{D}\rangle,$$ |  |

where each element captures a specific component of the simulation:

- •

  $\mathcal{G}=\langle V,E\rangle$ denotes the interaction network, where $V$ is the set of LLM agents and $E\subseteq V\times V$ is the set of undirected pairs of agents that can interact. The topology may be fully connected (i.e., mean-field) or follow an empirical or synthetic configuration.
- •

  $\mathcal{S}$ is the discussion prompt or proposition that defines the initial subject of deliberation. It establishes the semantic dimension along which opinions are assessed.
- •

  $\mathcal{O}$ represents the space of admissible opinions. This space can be discrete (e.g., $\mathcal{O}=\{0,1\}$) or continuous (e.g., $\mathcal{O}=[0,1]$), encoding positions from complete disagreement to full agreement with the statement $\mathcal{S}$.
- •

  $f:\mathcal{O}^{n}\times\mathbb{R}^{m}\rightarrow\mathcal{O}$ is the opinion update function. It specifies how an agent revises its opinion as a function of its current position, the outcome of its interaction, and additional contextual variables in $\mathbb{R}^{m}$.
- •

  $T$ is the temporal domain of the simulation, defined as an ordered sequence of discrete time steps $t\in\mathbb{Z}^{+}$.
- •

  $\mathcal{D}(t)=\{o\_{i}(t)\mid i\in V\}$ denotes the opinion state at time $t$, where $o\_{i}(t)\in\mathcal{O}$ is the opinion of agent $i$ at that time.

This framework allows the introduction of a wide variety of network topologies, interaction mechanisms, and opinion evolution rules.
In what follows, we describe a particular instantiation of the model adopted in our experimental setting.
A general overview of its rationale is provided in Algorithm [2](https://arxiv.org/html/2604.11312v3#S3.F2 "Figure 2 ‣ 3 LLM-powered Opinion Dynamics ‣ Collective Opinion Dynamics in Structured LLM Populations").

Figure 2: Algorithm for the debate simulation

1:
Graph $\mathcal{G}=\langle V,E\rangle$; statement $\mathcal{S}$;
initial opinions $\mathcal{D}(0)=\{o\_{i}(0)\mid i\in V\}$;
time steps $T\_{\max}$; opinion bounds $[o\_{\min},o\_{\max}]$

2:
Opinion-distribution evolution $\mathcal{D}\_{\mathrm{all}}$

3:
Initialize $\mathcal{D}\_{\mathrm{all}}$ as an empty list

4:
Append $\mathcal{D}(0)$ to $\mathcal{D}\_{\mathrm{all}}$

5:
for $t=0$ to $T\_{\max}-1$ do

6:
   $P\leftarrow[\ ]$
$\triangleright$ All pairs are formed before the LLM calls

7:
   for each agent $i\in V$ in random order do

8:
    Select $j$ uniformly at random from $\mathrm{Neighbors}(i)$

9:
    Append $(i,j)$ to $P$
$\triangleright$ $i$ is Discussant; $j$ is Opponent

10:
   end for

11:
   $\widehat{O}\leftarrow[\ ]$

12:
   for each $(i,j)\in P$ in batch do

13:
    $(\hat{o}\_{i},\hat{o}\_{j})\leftarrow\mathrm{debate}\bigl(o\_{i}(t),o\_{j}(t),\mathcal{S}\bigr)$
$\triangleright$ Both opinions are bounded within $[o\_{\min},o\_{\max}]$

14:
    if $o\_{i}(t)=o\_{j}(t)$ then

15:
      $(\hat{o}\_{i},\hat{o}\_{j})\leftarrow(o\_{i}(t),o\_{j}(t))$

16:
    end if

17:
    Append $(i,j,\hat{o}\_{i},\hat{o}\_{j})$ to $\widehat{O}$

18:
   end for$\triangleright$ Updates are applied sequentially

19:
   for each $(i,j,\hat{o}\_{i},\hat{o}\_{j})\in\widehat{O}$ do

20:
    $o\_{i}(t+1)\leftarrow\hat{o}\_{i}$

21:
    $o\_{j}(t+1)\leftarrow\hat{o}\_{j}$

22:
   end for

23:
   $\mathcal{D}(t+1)\leftarrow\{o\_{i}(t+1)\mid i\in V\}$

24:
   Append $\mathcal{D}(t+1)$ to $\mathcal{D}\_{\mathrm{all}}$

25:
end for

26:
return $\mathcal{D}\_{\mathrm{all}}$

In detail, we define the graph topology, the initial statement, the opinion distribution, and the number of iterations.
Each agent is initialized with a discrete opinion on a 7-point Likert scale, such that 0 corresponds with strong disagreement with $S$, 3 corresponds with neutrality, and 6 denotes strong agreement.
At each time step, for each agent $i\in V$, a neighbor $j$ is randomly selected to engage in a debate on $\mathcal{S}$.
As a result of the debate, $i$’s opinion is either i) brought closer to $j$’s if they agree, ii) brought farther from $j$’s if they disagree, or iii) not modified if $j$’s arguments are ignored.
Opinion updates are stored at each iteration and returned at the end.
  
  
The debate unfolds as shown in Algorithm [3](https://arxiv.org/html/2604.11312v3#S3.F3 "Figure 3 ‣ 3 LLM-powered Opinion Dynamics ‣ Collective Opinion Dynamics in Structured LLM Populations").
The selected agents are first assigned one of two mutually exclusive roles, namely Discussant (agent i) or Opponent (agent j).
The Discussant is the agent who starts the conversation by expressing and justifying their opinion on $S$.
The Discussant is allowed to change its opinion (after engaging with the Opponent).
The Opponent is tasked with producing a persuasive argument to convince the Discussant.
Both prompts for Discussant and Opponent are detailed in Appendix [C](https://arxiv.org/html/2604.11312v3#A3 "Appendix C Prompt ‣ Collective Opinion Dynamics in Structured LLM Populations") and [C](https://arxiv.org/html/2604.11312v3#A3 "Appendix C Prompt ‣ Collective Opinion Dynamics in Structured LLM Populations"), respectively.

Figure 3: LLM debate with VLLM

1:
Initial opinions $o\_{i}$, $o\_{j}$; statement $\mathcal{S}$;
opinion bounds $[o\_{\min},o\_{\max}]$

2:
Opinion variations $(\delta\_{i},\delta\_{j})$ and conversation logs $L\_{i,j}$

3:
$\delta\_{i}\leftarrow 0$; $\delta\_{j}\leftarrow 0$

4:
Opponent’s turn:

5:
$a\_{j}\leftarrow\texttt{Opponent}$ generates an argument about $\mathcal{S}$

6:
Discussant’s turn:

7:
$a\_{i}\leftarrow\texttt{Discussant}$ replies to $a\_{j}$ with
ACCEPT, REJECT, or another response

8:
Opponent’s reaction:

9:
$r\_{j}\leftarrow\texttt{Opponent}$ reacts to $a\_{i}$ with
ACCEPT, REJECT, or another response

10:
if $o\_{i}\neq o\_{j}$ then

11:
   if $a\_{i}$ contains ACCEPT then

12:
    $\delta\_{i}\leftarrow 1$ if $o\_{j}>o\_{i}$, else $-1$

13:
   else if $a\_{i}$ contains REJECT then

14:
    $\delta\_{i}\leftarrow-1$ if $o\_{j}>o\_{i}$, else $1$

15:
    if $r\_{j}$ contains ACCEPT then

16:
      $\delta\_{j}\leftarrow-1$ if $o\_{j}>o\_{i}$, else $1$

17:
    else if $r\_{j}$ contains REJECT then

18:
      $\delta\_{j}\leftarrow 1$ if $o\_{j}>o\_{i}$, else $-1$

19:
    end if

20:
   end if

21:
end if

22:
$\delta\_{i}\leftarrow\mathrm{clip}(o\_{i}+\delta\_{i},o\_{\min},o\_{\max})-o\_{i}$

23:
$\delta\_{j}\leftarrow\mathrm{clip}(o\_{j}+\delta\_{j},o\_{\min},o\_{\max})-o\_{j}$

24:
return $(\delta\_{i},\delta\_{j},L\_{i,j})$

The debate proceeds in rounds, with each round consisting of one interaction from each agent.
The total number of rounds is capped by a maximum limit, max\_rounds, to ensure the debate does not continue indefinitely.
Initially, the Opponent is prompted to state and support its
opinion on $\mathcal{S}$1.
The Discussant then evaluates the Opponent’s argument and then declares whether it ACCEPTS, REJECTS, or IGNORES the Opponent’s stance.
If the Discussant rejects the argument, the Opponent can, at the same time, respond to the Discussant’s position by declaring whether it accepts, rejects, or ignores it.
Otherwise, the Opponent concludes the exchange with END.
The Discussant’s opinion shift, $o\_{i}^{\Delta+}$, is determined by its response: ACCEPT moves its opinion one step toward the Opponent’s opinion, REJECT moves it one step away, and IGNORE leaves it unchanged.
The Opponent’s opinion may also shift in response to the Discussant’s reply: acceptance moves it one step toward the Discussant’s opinion, rejection moves it one step away, and ignoring the reply leaves it unchanged.
Opinion shifts are bounded by the minimum and maximum values of the opinion scale.

## 4 Results

We set up multiple simulation scenarios based on the LLM opinion dynamics framework described in Section [3](https://arxiv.org/html/2604.11312v3#S3 "3 LLM-powered Opinion Dynamics ‣ Collective Opinion Dynamics in Structured LLM Populations").
For each of the five homophily levels $h\in\{0,0.25,0.5,0.75,1\}$, we generate a distinct network using the BA-homophily model described in Appendix [A](https://arxiv.org/html/2604.11312v3#A1 "Appendix A Networks with Controlled Homophily and Group Size ‣ Collective Opinion Dynamics in Structured LLM Populations").
The discussion prompt is based on the paradox of Theseus’ Ship, first reported in Plutarch’s Parallel Lives [[61](https://arxiv.org/html/2604.11312v3#bib.bib42)], which questions whether an object that has had all its components replaced retains its identity.
In this work, we adopt a positive framing of this paradox (i.e., the ship is the same).
The prompt used in the simulations is provided in Appendix [C](https://arxiv.org/html/2604.11312v3#A3 "Appendix C Prompt ‣ Collective Opinion Dynamics in Structured LLM Populations").
In a previous study, we examined the impact of a negative framing of the paradox (i.e., "the ship is different") and found that the prompts’ effects depended heavily on the model.
Due to computational constraints, we limited our experiments to small-scale models and a total of 100 agents.
We performed simulations using two different LLMs: the first set uses Llama 3.2 3B Instruct2, the second, Gemma 3-4B3.
Both models were deployed locally using vLLM [[62](https://arxiv.org/html/2604.11312v3#bib.bib61)] to parallelize the computation.
The temperature of both models was set to $0.8$ to introduce variability in the arguments generated during the debates.
The maximum generation length was set to 2048 tokens.
No fixed random seed is used, as our objective is to characterize the variability of the collective dynamics across independent realizations.
Each run consists of 100 structured iterations, in which each agent served once as the Discussant and interacted with a randomly selected neighbor who served as the Opponent.
  
  
Experimental design.
First, we investigate the effects of different homophily values by considering a symmetric configuration in which both opinion groups are equally represented ($min=0.5$).
In this scenario, we establish a baseline to evaluate the effects of homophily with a balanced number of agents (50 positive and 50 negative) (RQ1).
Next, we introduce group imbalance and assess its effect on the population’s collective opinion (RQ2).
We introduce two asymmetric configurations, in which the minority group constitutes either 30% or 10% of the population.
In both cases, the majority is initially assigned the strongly disagree opinion, while the minority is assigned strongly agree.
This choice is motivated by prior work highlighting LLM agents’ tendency to accept positive opinions more readily [[55](https://arxiv.org/html/2604.11312v3#bib.bib22)].
By placing the positive opinion in the minority, we can assess whether this directional tendency persists even when the minority is numerically small and whether it can be disentangled from the majority’s influence.
Finally, to investigate the role of local social information (RQ3), we repeat the same configurations in a neighborhood-aware condition, in which each Discussant receives information about the distribution of opinions in their network during the interaction.
  
We characterize the resulting dynamics at both the macro and micro levels.
At the macro level, we analyze temporal evolution using trajectories showing the mean proportion of agents holding each opinion across 10 independent simulation runs conducted on the same network realization, with a 95% confidence interval for the mean.
Thus, the reported variability reflects stochasticity in the opinion dynamics conditional on a fixed network, rather than variability across network realizations.
At the micro level (RQ4), instead, we estimate conditional transition-probability matrices for the neighborhood-aware condition to examine how the Discussant’s and Opponent’s opinions, together with the local neighborhood configuration, are associated with opinion shifts.
To assess whether the observed transition probabilities differ from chance expectations, we use a permutation-based null model.
Specifically, we randomly shuffle post-interaction opinions across interaction events while keeping the pre-interaction opinions of both agents and, where applicable, the neighborhood composition fixed.
This procedure preserves the marginal distributions and interaction structure while removing systematic associations between the interaction context and the observed opinion changes.
For each transition-matrix entry, we generate a null distribution from 1.000 permutations and retain only probabilities that differ significantly from the null expectation according to a two-sided test with $p<0.01$. Further details on the estimation and validation procedure are provided in Appendix [B](https://arxiv.org/html/2604.11312v3#A2 "Appendix B Opinion Transition Probabilities and Validation ‣ Collective Opinion Dynamics in Structured LLM Populations").

### 4.1 RQ1: Effect of homophily on opinion trajectories

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/llama__theseus_same_meta-llama_Llama-3.2-3B-Instruct__PAH-min0.5-line-runs.png)


(a) $min{=}0.5$

ò

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/llama__theseus_same_meta-llama_Llama-3.2-3B-Instruct__PAH-min0.3-line-runs.png)


(b) $min{=}0.3$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/llama__theseus_same_meta-llama_Llama-3.2-3B-Instruct__PAH-min0.1-line-runs.png)


(c) $min{=}0.1$

Figure 4: Opinion trends for Llama agents across different homophily levels for minority fraction $min=0.5$ (a), $min=0.3$ (b), and $min=0.1$ (c)
Each panel shows the proportion of agents holding different opinion states over 100 iterations.
All points of the opinion scale are mapped to the colors in the legend, from Strongly Disagree (dark red) to Strongly Agree (dark green).


![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/gemma__theseus_same_google_gemma-3-4b-it__PAH-min0.5-line-runs.png)


(a) $min{=}0.5$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/gemma__theseus_same_google_gemma-3-4b-it__PAH-min0.3-line-runs.png)


(b) $min{=}0.3$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/gemma__theseus_same_google_gemma-3-4b-it__PAH-min0.1-line-runs.png)


(c) $min{=}0.1$

Figure 5: Opinion trends for Gemma agents across different homophily levels for minority fraction $min=0.5(a)$, $min=0.3$ (b), and $min=0.1$ (c)
Each panel shows the proportion of agents holding different opinion states over 100 iterations.
All points of the opinion scale are mapped to the colors in the legend, from Strongly Disagree (dark red) to Strongly Agree (dark green).

Opinion trajectories for all configurations are shown in Figures [4](https://arxiv.org/html/2604.11312v3#S4.F4 "Figure 4 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations") and [5](https://arxiv.org/html/2604.11312v3#S4.F5 "Figure 5 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations").
We first discuss the symmetric population comparing the two models (RQ1), and then introduce class imbalance (RQ2).
  
  
Balanced Scenario (RQ1).
The dynamics emerged from Llama and Gemma are markedly different, even in the balanced configuration with equal representation of opinions.
Beginning with Llama (Figure [4(a)](https://arxiv.org/html/2604.11312v3#S4.F4.sf1 "In Figure 4 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")), all networks with $0\leq h\leq 0.75$ exhibit a shift from the extreme opinions toward the positive side of the opinion scale.
For $h\leq 0.25$, this shift occurs rapidly during the first 20 iterations, with Mildly Agree and Agree becoming the most prevalent states.
As homophily increases to $h=0.5$ and $h=0.75$, the shift toward positive opinions becomes slower and more variable across runs, although positive intermediate opinions remain prevalent.
Under complete homophily ($h=1$), the two extreme opinions decline more slowly, and several opinion states coexist at the end of the simulation, resulting in a fragmented population despite agents interacting exclusively with like-minded agents.
In Gemma configurations [5](https://arxiv.org/html/2604.11312v3#S4.F5 "Figure 5 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")), the dynamics are unaffected by differences in homophily.
Opinion trajectories are nearly the same throughout the entire simulation: strongly disagree and strongly agree each maintain approximately 50% of the population from initialization to iteration 100, with only negligible fluctuations (Figure [5(a)](https://arxiv.org/html/2604.11312v3#S4.F5.sf1 "In Figure 5 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")).

### 4.2 RQ2: Introducing group size imbalance

We next examine whether the dynamics observed in the balanced population change when the positive opinion is held by a numerical minority.
For a $70/30$ split, the dynamics remain strongly model-dependent.
For Llama (Figure [4(b)](https://arxiv.org/html/2604.11312v3#S4.F4.sf2 "In Figure 4 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")), low homophily produces a pronounced shift toward the positive side of the opinion scale.
At $h=0$, under maximized cross-group contact, Agree and Mildly Agree agents become the most prevalent, although the population does not reach consensus.
A similar shift occurs at $h=0.25$, albeit less strongly.
At intermediate homophily levels ($0.5\leq h\leq 0.75$), the initial Strongly Disagree majority decreases substantially, while several moderate and negative opinions coexist.
Under complete homophily ($h=1$), both initial polarized states are essentially preserved, although both gradually lose agents to intermediate opinion states.
Gemma (Figure [5(b)](https://arxiv.org/html/2604.11312v3#S4.F5.sf2 "In Figure 5 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")), by contrast, shows stable opinion dynamics, as in the balanced scenario, with variations in homophily producing only negligible changes in the trajectories.
When the minority is further reduced to only 10 agents, the effect of group imbalance becomes more pronounced for Llama (Figure [4(c)](https://arxiv.org/html/2604.11312v3#S4.F4.sf3 "In Figure 4 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")).
Under complete heterophily ($h=0$), the population still shifts substantially toward positive opinions, with Agree becoming the most prevalent state.
Instead, with $0.25\leq h\leq 0.75$, the dynamic is more focused on the negative side of the opinion scale.
Under complete homophily ($h=1$), the initially dominant Strongly Disagree group remains prevalent throughout the simulation, while the positive minority remains small.
Gemma exhibits highly stable dynamics (Figure [5(c)](https://arxiv.org/html/2604.11312v3#S4.F5.sf3 "In Figure 5 ‣ 4.1 RQ1: Effect of homophily on opinion trajectories ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")).
The initial $90/10$ distribution is almost completely preserved across all homophily levels, with only negligible fluctuations and redistribution toward intermediate positive opinions.
What emerges from both RQ1 and RQ2 is that homophily and group size affect the propagation of opinion change, but the model itself determines whether the shift occurs.

### 4.3 RQ3: Effect of neighborhood awareness

Finally, we investigate the effect of neighborhood awareness on each agent.
To this end, we provide the Discussant agent with the distribution of opinions in their ego network for each interaction, so that it can consider changing its opinion based on thispeer-pressure effect.
For Llama (Figure [6](https://arxiv.org/html/2604.11312v3#S4.F6 "Figure 6 ‣ 4.3 RQ3: Effect of neighborhood awareness ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations"), neighborhood awareness modifies the dynamics, particularly with cross-group interactions.
In the balanced configuration ($min=0.5$), low homophily reinforces the preference toward the positive side of the opinion scale, even with higher variability across runs.
This trend repeats as homophily increases, reaching $h=0.75$, where the positive cluster remains dominant and more stable across runs.
Under total homophily ($h=1$), the two initial polarized populations coexist, although some move toward intermediate opinions.
Neighborhood awareness affects the distribution of opinions at lower levels of structural segregation.
These effects become even more evident under class imbalance.
With $min=0.3$, low homophily again produces a strong shift toward positive opinions.
At $h=0$, Agree becomes the dominant state, reaching approximately 90% of the population, while the initially dominant Strongly Disagree group almost disappears.
Similar shifts are observed at $h=0.25$, although a substantial minority remains in intermediate states.
Interestingly, for $h=0.5$ and $h=0.75$, however, the population remains fragmented across several opinion states, with Neutral, Mildly Disagree, and Disagree retaining a substantial presence.
Under complete homophily, the initial negative majority remains dominant, although it gradually loses part of its volume to intermediate opinions.
When the positive minority is reduced to $10\%$, the effect of homophily becomes even more evident (Figure [6(c)](https://arxiv.org/html/2604.11312v3#S4.F6.sf3 "In Figure 6 ‣ 4.3 RQ3: Effect of neighborhood awareness ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")).
In all homophily variations $0\leq h\leq 0.75$, the initially small positive group expands rapidly and Agree becomes the dominant opinion, while Strongly Agree declines.
At $h=1$, the initially dominant polarized groups remain prevalent throughout the simulation, with only a limited shift toward intermediate opinions.
In the case of Llama, local opinion information interacts strongly with network structure.
Heterogeneous neighborhoods favor large-scale opinion shifts even in the presence of high imbalance, whereas homophily, by increasing the interaction within the same group, limits exposure to opposing groups.
  
Information about the neighborhood produces a different behavioral response from Gemma (Figure [7](https://arxiv.org/html/2604.11312v3#S4.F7 "Figure 7 ‣ 4.3 RQ3: Effect of neighborhood awareness ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")).
In the balanced configuration, low and intermediate levels of homophily modulate the trend toward convergence toward positive opinions.
At $h=0.5$, the population has a majority of strongly agreeing agents but retains a substantial negative component.
At $h=0.75$, both extreme opinions remain represented, and under complete homophily ($h=1$), the initial 50/50 split is essentially preserved.
The effect of class imbalance is similarly dependent on homophily.
For $min=0.3$, low homophily levels ($h=0$ and $h=0.25$) foster cross-group interaction and produce a redistribution toward positive opinions, with Strongly Agree and Agree becoming the dominant states.
By contrast, at $h=0.5$ and $h=0.75$, the initially dominant Strongly Disagree group remains prevalent, and, under complete homophily, both initial classes remain almost perfectly separated.
For $min=0.1$, this dependence becomes stronger: only under complete heterophily does the small positive minority expand substantially, whereas for $h\geq 0.25$ the negative majority remains dominant and progressively more stable, remaining close to 90% throughout the simulation.
  
Overall, introducing this novel information in agents yields the most distinct result from the baseline in RQ1: Gemma, which is fixed across all networks in the baseline condition, finally moves once the neighborhood distribution is present.
This neighborhood effect interacts with homophily and class imbalance to determine whether the minority can propagate through the population.
Under low homophily, both models can exhibit substantial movement toward the positive side of the opinion spectrum, even when the positive stance is initially held by a minority.
However, as homophily increases, cross-group exposure decreases, and the initial majority becomes more stable, particularly in cases of extreme class imbalance.
The main distinction between the models lies in the magnitude and variability of these shifts.
Llama agents tend to redistribute easily across intermediate opinion states, whereas Gemma concentrates the population in a smaller set of dominant opinion states.

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/llama__opinion_distr_theseus_same_meta-llama_Llama-3.2-3B-Instruct__PAH-min0.5-line-runs.png)


(a) $min{=}0.5$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/llama__opinion_distr_theseus_same_meta-llama_Llama-3.2-3B-Instruct__PAH-min0.3-line-runs.png)


(b) $min{=}0.3$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/llama__opinion_distr_theseus_same_meta-llama_Llama-3.2-3B-Instruct__PAH-min0.1-line-runs.png)


(c) $min{=}0.1$

Figure 6: Opinion trends for Llama agents under neighborhood opinion awareness, across homophily levels, for minority fraction $min=0.5$ (a), $min=0.3$ (b), and $min=0.1$ (c)
Each panel shows the proportion of agents holding different opinion states over 100 iterations.
All points of the opinion scale are mapped to the colors in the legend, from Strongly Disagree (dark red) to Strongly Agree (dark green).


![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/gemma__opinion_distr_theseus_same_google_gemma-3-4b-it__PAH-min0.5-line-runs.png)


(a) $min{=}0.5$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/gemma__opinion_distr_theseus_same_google_gemma-3-4b-it__PAH-min0.3-line-runs.png)


(b) $min{=}0.3$

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/gemma__opinion_distr_theseus_same_google_gemma-3-4b-it__PAH-min0.1-line-runs.png)


(c) $min{=}0.1$

Figure 7: Opinion trends for Gemma agents under neighborhood opinion awareness, across homophily levels, for minority fraction $min=0.5$ (a), $min=0.3$ (b), and $min=0.1$ (c)
Each panel shows the proportion of agents holding different opinion states over 100 iterations.
All points of the opinion scale are mapped to the colors in the legend, from Strongly Disagree (dark red) to Strongly Agree (dark green).

### 4.4 RQ4: Micro-level interaction dynamics

We first examine whether opinion transitions depend on the initial opinions of the Discussant and Opponent.
For each interaction, we estimate the conditional probability that the Discussant changes its opinion toward the Opponent,

|  |  |  |
| --- | --- | --- |
|  | $$P(\text{disc}\rightarrow\text{opp}\mid o\_{\text{disc}},o\_{\text{opp}}),$$ |  |

where the seven-point opinion scale is collapsed into low ($0$–$3$) and high ($4$–$6$) macrostates.

Starting with Llama (Figure [8](https://arxiv.org/html/2604.11312v3#S4.F8 "Figure 8 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations"), first and second row), opinion change is primarily associated with cross-group interactions, while encounters with agents from the same opinion class are less likely to result in a transition between classes.
In the balanced condition (first row), both $low\rightarrow high$ and $high\rightarrow low$ remain high and relatively stable across homophily levels, whereas $low\rightarrow low$ and $high\rightarrow high$ are substantially lower.
The same general pattern is observed under neighborhood awareness, but $low\rightarrow high$ becomes slightly preferred over $high\rightarrow low$, suggesting that information about the local opinion distribution changes how agents respond to opposing opinions, increasing the tendency of agents with low opinions to move towards high-opinion on the scale.
The effect is particularly visible at low and intermediate homophily, whereas at $h=1$ both cross-opinion transitions become less frequent.
Gemma (Figure [8](https://arxiv.org/html/2604.11312v3#S4.F8 "Figure 8 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations"), third and fourth row) shows a different pattern: in the baseline condition, opinion changes are almost nonexistent and reflect the flat trajectories reported above.
Under neighborhood awareness (Figure [8](https://arxiv.org/html/2604.11312v3#S4.F8 "Figure 8 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations"), bottom row), $low\rightarrow high$ transitions under low homophily become slightly more frequent, but as homophily increases, both $low\rightarrow high$ and $high\rightarrow low$ progressively decrease.

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/matrices/probability_matrices_2x2.png)


Figure 8: Conditional transition probabilities under balanced populations ($\text{min}{=}0.5$) for Llama and Gemma. Each matrix reports $P(\text{disc}{\rightarrow}\text{opp}\mid o\_{\text{disc}},o\_{\text{opp}})$, with the 7-point Likert scale collapsed into low- ($0$–$3$) and high-opinion ($4$–$6$) macrostates. Rows correspond to the Discussant’s pre-interaction opinion class and columns to the Opponent’s.
Each matrix represent different homophily level $h\in\{0,\,0.25,\,0.5,\,0.75,\,1\}$;
Only statistically significant entries ($p{<}0.01$, permutation test) are shown; non-significant cells are left blank.

To further assess the impact of agents’ knowledge of their neighbors’ opinion distribution, we quantify the probability that the Discussant changes its opinion toward the Opponent, conditional on the initial opinions of both agents and the prevalent opinion of the Discussant’s local neighborhood.
For each condition, we estimate the probabilities for each run; then, the mean across the 10 runs is compared with an aggregated null distribution.
The matrices in Figure [9](https://arxiv.org/html/2604.11312v3#S4.F9 "Figure 9 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations") and [10](https://arxiv.org/html/2604.11312v3#S4.F10 "Figure 10 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations") show the mean and standard deviation between runs for the Llama and Gemma simulations, respectively.

In this part of the analysis, we consider a Discussant’s neighborhood as supporting when the majority of its neighbors hold opinions closer to the Opponent’s position, opposed when the majority hold opinions closer to the Discussant’s own initial position, and mixed when neighbors are evenly split between the two.
  
  
For Llama (Figure [9](https://arxiv.org/html/2604.11312v3#S4.F9 "Figure 9 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")), the probability of changing toward the Opponent varies systematically with the configuration of the local neighborhood.
Variations within the same class are common in opposing and supporting neighborhoods, whereas mixed neighborhoods mitigate these perturbations.
Even if the neighborhood is opposed to the change, cross-opinion transitions remain relatively frequent, particularly for high-opinion Discussants facing a low-opinion Opponent.
For low-opinion Discussants facing a high-opinion Opponent, the probability of changing toward the Opponent increases with homophily, reaching its highest value at $h=1$.
  
In mixed neighborhoods, the transition probabilities are generally lower and more balanced between the two opinion classes.
For $h\leq 0.75$, both low-to-high and high-to-low transitions are observed, while at $h=1$ statistically significant transitions become more limited.
  
When the neighborhood supports the potential shift, transition probabilities are substantially higher.
For low-opinion Discussants facing a high-opinion Opponent, the probability of changing toward the Opponent is close to $1$ across almost all levels of homophily.
High-opinion Discussants facing low-opinion Opponents also exhibit high transition probabilities when the neighborhood supports the change, though these probabilities decrease with higher homophily.
Overall, Llama agents exhibit the highest probability of opinion change when the local neighborhood is aligned with the direction of the potential shift, while changes remain possible, though less consistently, when the neighborhood is mixed or misaligned.
  
  
For Gemma (Figure [10](https://arxiv.org/html/2604.11312v3#S4.F10 "Figure 10 ‣ 4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations")), the effect of neighborhood configuration is more pronounced.
In opposing neighborhoods, cross-opinion transitions are hindered.
$low\rightarrow high$ transitions are small and become non-significant as homophily increases, whereas $high\rightarrow low$ transitions remain statistically significant at low and intermediate levels of homophily.
At higher homophily, significant transitions become increasingly restricted to configurations involving strong local support.
Thus, the presence of an opposing neighborhood does not completely prevent a change toward the Opponent, but such changes become less prevalent as homophily increases.
  
Mixed neighborhoods show substantially lower transition probabilities than supporting neighborhoods.
Most transitions remain small across homophily levels, with only a limited number of statistically significant changes.
The reduction is particularly evident at high homophily, where significant transitions become rare.
  
When the neighborhood supports a potential shift in opinion, transition probabilities are generally high.
In particular, low-opinion Discussants facing high-opinion Opponents show probabilities close to one across homophily levels, while high-opinion Discussants facing low-opinion Opponents also exhibit high probabilities of changing toward the Opponent when the local neighborhood supports the shift.
  
  
Overall, Gemma shows a stronger dependence of its dynamics on the local neighborhood configuration than Llama does.
Transitions toward the Opponent are most pronounced when the neighborhood is aligned with the direction of the potential shift, whereas opposing and mixed neighborhoods are associated with fewer and weaker transitions.
For Llama agents in opposing neighborhoods, change remains possible but selective: upward transitions from $low\rightarrow high$ persist even when the local environment discourages them, reaching $0.97$ at $h=1$.
Mixed neighborhoods display the most symmetric dynamics, with statistically significant transitions in both directions for $h\leq 0.75$,
In supporting neighborhoods, opinion change largely follows the local consensus: shifts aligned with the neighborhood are reinforced, while the persistence of low-opinion states in $low\rightarrow low$ interactions remains rare.
Overall, peer pressure acts as a selective amplifier [[63](https://arxiv.org/html/2604.11312v3#bib.bib63)], strengthening locally consistent changes while still allowing occasional counter-aligned upward moves.

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/matrices/facetplot_llama.png)


Figure 9: Facet plots of statistically significant opinion shifts for Llama agents under different neighborhood conditions. 
Each panel reports $P\bigl(disc\rightarrow opp\mid o\_{disc},o\_{opp},c\bigr)$, where $c\in\{\text{misaligned},\text{mixed},\text{aligned}\}$ denotes the Discussant’s local neighborhood relative to the direction of the potential opinion shift.
Rows correspond to aligned, misaligned, and mixed neighborhoods, while columns vary the homophily level $h$.
Only statistically significant transitions are shown.

![Refer to caption](https://arxiv.org/html/2604.11312v3/figs/matrices/facetplot_gemma.png)


Figure 10: Facet plots of statistically significant opinion shifts for Gemma agents under different neighborhood conditions. Each panel reports $P\bigl(disc\rightarrow opp\mid o\_{disc},o\_{opp},c\bigr)$, where $c\in\{\text{aligned},\text{misaligned},\text{mixed}\}$ denotes the Discussant’s local neighborhood relative to the direction of the potential opinion shift.
Rows correspond to aligned, misaligned, and mixed neighborhoods, while columns vary the homophily level $h$.
Only statistically significant transitions are shown.

## 5 Discussion

This work investigates how network structure, group composition, and local social information shape opinion dynamics in structured populations of LLM agents.
Overall, our results show that collective outcomes cannot be attributed to network structure alone.
Instead, they emerge from the interaction between the opportunities for exposure created by the network and the way in which the underlying LLM responds to those interactions.
This is visible both at the population level, through the evolution of opinion distributions, and at the interaction level, through the conditional probability of opinion change.

#### Model-dependent collective dynamics.

A first result is the strong dependence of the dynamics on the underlying language model. Under otherwise comparable experimental conditions, Llama and Gemma produce qualitatively different trajectories. In the baseline condition, Llama agents frequently move away from the initially polarized states, particularly when cross-group interactions are common. Gemma agents, in contrast, largely preserve the initial opinion distribution across homophily levels and group-size configurations. Thus, identical network conditions do not imply comparable collective dynamics across LLM populations.
At the same time, homophily and group imbalance constrain which opinions agents encounter and therefore how far local changes can propagate. Low homophily increases cross-group exposure, whereas higher homophily preserves separation between opinion groups, particularly when one group is numerically small. Network structure and population composition should therefore be interpreted jointly with model-specific responsiveness to social influence.

#### Local context and micro-level dynamics.

Neighborhood information further shows that exposure and social context are distinct components of the dynamics.
Previous work [[30](https://arxiv.org/html/2604.11312v3#bib.bib62)] adopted a different perspective, focusing on the intensity of peer pressure necessary for an agent to change its mind, and identifying model-specific conformity thresholds.
However, in our simulations, we examine the direct impact of peer pressure on networks whose homophily and group-size imbalance are explicitly controlled.
Thus, we assess how these topological properties interact with two different models, examining how they shape the models’ responses in each scenario.
Providing agents with the local opinion distribution changes their updating behavior, with substantially stronger effects for Gemma, which is largely static in the baseline condition.
The transition analysis confirms that local context moderates persuasion: opinion changes are generally more likely when the neighborhood supports the direction of the interaction and less likely when it is mixed or opposed. Importantly, this modulation differs across models.
Llama remains comparatively responsive across local configurations, whereas Gemma depends more strongly on neighborhood alignment.
These findings reinforce the broader conclusion that population-level outcomes cannot be attributed to topology alone, but arise from the interaction between structural exposure, contextual information, and model-specific updating behavior.

#### Limitations and Future Directions.

Several limitations should be acknowledged.
First, the experiments rely on a single non-factual discussion topic and on a specific interaction protocol.
Although this controlled setting facilitates comparisons across experimental conditions, different topics, prompt formulations, or conversational protocols may elicit different updating behaviors.
In particular, our protocol is asymmetric: the Discussant can update after evaluating the Opponent’s argument, whereas the Opponent can update only after a rejection; the protocol also includes a backfire rule whereby rejection moves an opinion away from the interlocutor.
We do not test alternative symmetric protocols or a version without backfire, so the extent to which the observed dynamics depend on these design choices remains unknown.
Second, our analysis uses a single network realization for each homophily level.
Consequently, the reported variability reflects repeated opinion-dynamics runs on fixed network instances and does not quantify variability across alternative networks generated with the same structural parameters.
Future work should therefore repeat the experiments over multiple independently generated networks for each structural condition.
Third, we consider populations of only 100 agents. This choice limits computational cost but may introduce finite-size effects, particularly in the most imbalanced $90/10$ configuration, where the minority consists of only 10 agents.
Larger populations may exhibit different patterns of propagation and persistence.
More generally, alternative network-generating processes, empirical interaction networks, and more heterogeneous topologies may reveal structural effects that are not captured by the BA-homophily model adopted here.
Finally, our comparison is limited to two LLMs. The marked differences between Llama and Gemma show that model choice matters, but they do not establish whether the observed behaviors are characteristic of particular model families, architectures, scales, training procedures, alignment strategies, or prompting conventions.
Systematic comparisons across a broader range of models, together with variations in topics, interaction protocols, and network realizations, would help distinguish model-specific behavior from patterns that generalize across LLM populations.

## Appendix A Networks with Controlled Homophily and Group Size

To address our research questions, we need to generate networks with controlled group sizes (i.e., node attribute frequencies) and mixing biases (i.e., nodes’ preferences for connecting with similar/dissimilar peers).
To do so, we leverage the BA-homophily model introduced in [[37](https://arxiv.org/html/2604.11312v3#bib.bib11)], which extends the classical Barabási–Albert (BA) preferential attachment model [[37](https://arxiv.org/html/2604.11312v3#bib.bib11)] by incorporating a *homophily* parameter.
The classic BA model [[64](https://arxiv.org/html/2604.11312v3#bib.bib35)] is a foundational generative model for scale-free networks.
It captures two key mechanisms underlying many real-world complex systems: *network growth* and *preferential attachment*.
The model starts with a small connected network of $m\_{0}$ nodes.
At each time step, a new node is added to the network and forms $m\leq m\_{0}$ links to existing nodes.
The probability $\Pi\_{i}$ that the new node connects to an existing node $i$ is proportional to the degree $k\_{i}$ of that node:

|  |  |  |
| --- | --- | --- |
|  | $$\Pi\_{i}=\frac{k\_{i}}{\sum\_{j}k\_{j}}$$ |  |

This rule encodes *preferential attachment*, where well-connected nodes are more likely to attract additional links, a “rich-get-richer” dynamic.
Over time, this process generates networks with a power-law degree distribution, $P(k)\propto k^{-\gamma}$, with $\gamma\approx 3$.
  
  
The BA-homophily enriches this framework in two ways.
First, each node belongs to one of two groups, $a$ (minority) or $b$ (majority), with group sizes defined by relative proportions $f\_{a}$ and $f\_{b}=1-f\_{a}$, where $f\_{a}\leq f\_{b}$.
Second, when a new node $j$ arrives, it selects $m$ existing nodes to connect to, choosing targets based on both their degree and group similarity.
Formally, the probability $\Pi\_{ij}$ that node $j$ connects to node $i$ is given by:

|  |  |  |
| --- | --- | --- |
|  | $$\Pi\_{ij}=\frac{h\_{ij}\cdot k\_{i}}{\sum\_{l}h\_{lj}\cdot k\_{l}},$$ |  |

where $k\_{i}$ is the degree of node $i$ and $h\_{ij}$ encodes homophilic preference.
In the symmetric case where node groups show equal homophilic preferences, we have that

|  |  |  |
| --- | --- | --- |
|  | $$h\_{aa}=h\_{bb}=h,\quad h\_{ab}=h\_{ba}=1-h$$ |  |

Via this mechanism, the model can generate networks with complete heterophily (nodes only connect to the opposite group, $h=0$), neutral mixing (no group preference, classical BA, $h=0.5$), up to complete homophily (nodes only connect within their group, $h=1$).
As shown in [[37](https://arxiv.org/html/2604.11312v3#bib.bib11)], in heterophilic networks ($h<0.5$), minority nodes become structural hubs, attracting a disproportionate number of links from the majority. Conversely, in homophilic settings ($h>0.5$), they become increasingly segregated.

## Appendix B Opinion Transition Probabilities and Validation

To uncover the mechanisms underlying the observed opinion dynamics, we analyze micro-level interaction patterns between Discussant and Opponent agents.
Specifically, we construct transition probability matrices that quantify the likelihood that a Discussant shifts its opinion toward that of the Opponent following an interaction, conditional on the Discussant’s and Opponent’s initial opinion class. Formally, we estimate:

|  |  |  |
| --- | --- | --- |
|  | $$P\bigl(disc\rightarrow opp\mid o\_{disc},o\_{opp}\bigr),$$ |  |

where $disc\rightarrow opp$ denotes a change in the Discussant’s opinion toward the Opponent’s position, $o\_{disc}$ is the Discussant’s initial opinion, and $o\_{opp}$ is the Opponent’s opinion.
By doing so, we aim to estimate the rate of successful (as in persuasive) interactions.
  
  
For the simulations in which agents are equipped with information on their neighbors’ opinion distribution, we additionally condition this probability on the Discussant’s local neighborhood configuration, distinguishing whether its neighbors are aligned, misaligned, or mixed, with respect to the direction of change.
This extension isolates the effect of peer agreement on opinion shifts. Formally:

|  |  |  |
| --- | --- | --- |
|  | $$P\bigl(disc\rightarrow opp\mid o\_{disc},o\_{opp},c\bigr),$$ |  |

where $c\in\{\text{aligned},\text{misaligned},\text{mixed}\}$ denotes the configuration of the Discussant’s neighborhood relative to the direction of the potential opinion shift, that is, whether the majority of the Discussant’s neighbors hold opinions that are closer to the Opponent’s position (aligned), closer to the Discussant’s initial position (misaligned), or are evenly split between the two (mixed).
  
  
To identify statistically significant transitions, we adopt a permutation-based null model that tests whether the observed association between opinion pairs and the direction of change exceeds what would be expected by chance.
For each interaction, we keep the pair $(o\_{disc},o\_{opp})$ (resp. $(o\_{disc},o\_{opp},c)$ for the extension) fixed and randomly shuffle the observed opinion variations across interactions.
This procedure preserves the empirical distribution of opinion changes and the frequency of each opinion pair, while removing any systematic relationship between them.
For every permutation, we recompute the transition probabilities, thereby obtaining a null distribution for each conditioning configuration.
The statistical significance of the observed probability is then assessed using a two-tailed test, defined as the fraction of null values that are at least as extreme as the empirical estimate.

## Appendix C Prompt

In this section, we introduce in more detail the prompt given in input to the Discussant and the Opponent to elicit the debate.
The role of the Discussant in the base scenario is modeled as follows:

Discussant Prompt

```
[INST]
    ### You {Discussant_opinion} on the reasoning conclusion
    provided as input.
    Task:
    - Listen to the argument of {Opponent.name} on the reasoning
    conclusions and decide if you maintain your opinion
    or change it.

    ### Constraints:
    - At the end of each interaction declare if you
        - ’ACCEPT’ {Opponent.name} argument;
        - ’REJECT’ {Opponent.name} argument;
        - ’IGNORE’ your original opinion.
    Write your response with the following format:
    \"My original opinion was I {Discussant_opinion}
    on the reasoning.
    After reading your argument my conclusions are:
    I <ACCEPT|REJECT|IGNORE> your stance because <argument>\"
[/INST]"
```

The role of the Opponent is instead modeled as follows:

Opponent Prompt

```
[INST]
    You {opponent_opinion} on the reasoning conclusion provided  as input.
    Support your opinion by providing personal arguments.
    Avoid using already generated arguments.
    IF {discussant.name} writes REJECT in his answer, write a second statement
    where you declare if you <ACCEPT|REJECT|IGNORE> his stance.
    Otherwise conclude the conversation writing a message with a single word ’END’.
    \n ### Constraints: \n - In your first statement you must adhere tu your opinion
    (’{opponent_opinion}’)\n -
    Write your first response with as: \"I {opponent_opinion} on the provided reasoning
    conclusions. I think that <argument>\"
    [/INST]",
```

The statement under study is the following:

Discussion statement

Theseus set sail to reclaim the throne as king of Athens. During the journey, parts of Theseus’s ship began to break or decay; Theseus and his crew replaced these parts as they sailed. Eventually, each part of the ship is replaced. In the end, the Ship of Theseus is still the same ship on which he originally sailed.

Opinion distribution prompts are modeled by giving as input the opinion distribution of the ego network to the Discussant as follows:

Opinion distribution

```
[INST]
    ### You {discussant_opinion} with the reasoning conclusion provided as input. \n
    The distribution of opinions in your neighborhood is: {opinion_distribution}. \n
    Task:\n - Listen to the argument of {opponent.name} on the reasoning conclusion
    and decide whether you maintain your opinion or change it. \n ### Constraints: \n -
    At the end of each interaction declare whether you: \n
    - ’ACCEPT’ {opponent.name}’s argument;
    - ’REJECT’ {opponent.name}’s argument;
    - ’IGNORE’ your original opinion.
    Write your response in the following format: \"My original opinion was
    that I {discussant_opinion} with the reasoning.
    After reading your argument, my conclusion
    is: I <ACCEPT|REJECT|IGNORE> your stance because <argument>\"
}
[/INST]
```

## References

- [1]
  A. Singh, A. Fry, A. Perelman, A. Tart, A. Ganesh, A. El-Kishky, A. McLaughlin, A. Low, A. Ostrow, A. Ananthram, et al. (2025)
  Openai gpt-5 system card.
  arXiv preprint arXiv:2601.03267.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [2]
  A. Q. Jiang, A. Sablayrolles, A. Mensch, C. Bamford, D. S. Chaplot, D. de las Casas, F. Bressand, G. Lengyel, G. Lample, L. Saulnier, L. R. Lavaud, M. Lachaux, P. Stock, T. L. Scao, T. Lavril, T. Wang, T. Lacroix, and W. E. Sayed (2023)
  Mistral 7b.
  External Links: 2310.06825,
  [Link](https://arxiv.org/abs/2310.06825)
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [3]
  AI@Meta (2024)
  Llama 3 model card.
  N.A..
  External Links: [Link](https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md)
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [4]
  DeepSeek-AI, A. Liu, B. Feng, et al. (2025)
  DeepSeek-v3 technical report.
  External Links: 2412.19437,
  [Link](https://arxiv.org/abs/2412.19437)
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [5]
  E. Clark, T. August, S. Serrano, N. Haduong, S. Gururangan, and N. A. Smith (2021)
  All that’s’ human’is not gold: evaluating human evaluation of generated text.
  arXiv preprint arXiv:2107.00061.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [6]
  G. Wang, K. Zhang, J. Jiang, C. Wang, H. Bi, H. Liang, Z. Qi, Y. Huang, Y. Li, and X. Yang (2026)
  Human–large language model collaboration in clinical medicine: a systematic review and meta-analysis.
  NPJ Digital Medicine 9 (1), pp. 195.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [7]
  W. Wang, Z. Ma, Z. Wang, C. Wu, J. Ji, W. Chen, X. Li, and Y. Yuan (2025)
  A survey of llm-based agents in medicine: how far are we from baymax?.
  Findings of the Association for Computational Linguistics: ACL 2025, pp. 10345–10359.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [8]
  S. Liu, R. Zhang, R. Ma, Y. Deng, L. Zhu, J. Li, Z. Li, Z. Shen, and M. Du (2026)
  LLM agents in law: taxonomy, applications, and challenges.
  In Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 15768–15792.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [9]
  J. Wang and Y. Chen (2023)
  A review on code generation with llms: application and evaluation.
  In 2023 IEEE International Conference on Medical Artificial Intelligence (MedAI),
  pp. 284–289.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [10]
  J. Ahn, R. Verma, R. Lou, D. Liu, R. Zhang, and W. Yin (2024)
  Large language models for mathematical reasoning: progresses and challenges.
  In Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics: Student Research Workshop,
  pp. 225–237.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [11]
  L. Wang, C. Ma, X. Feng, Z. Zhang, H. Yang, J. Zhang, Z. Chen, J. Tang, X. Chen, Y. Lin, et al. (2024)
  A survey on large language model based autonomous agents.
  Frontiers of computer science 18 (6), pp. 186345.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [12]
  G. Rossetti, M. Stella, R. Cazabet, K. Abramski, S. Citraro, E. Cau, A. Failla, V. Morini, and V. Pansanella (2026)
  YSocial: an artificial intelligence powered social media virtual twin.
  Big Data & Society 13 (3), pp. 20539517261431576.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [13]
  Ö. Gürcan (2024)
  Llm-augmented agent-based modelling for social simulations: challenges and opportunities.
  In HHAI 2024: Hybrid Human AI Systems for the Social Good: Proceedings of the Third International Conference on Hybrid Human-Artificial Intelligence,
  pp. 134–144.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [14]
  P. Törnberg, D. Valeeva, J. Uitermark, and C. Bail (2023)
  Simulating social media using large language models to evaluate alternative news feed algorithms.
  arXiv preprint arXiv:2310.05984.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [15]
  M. Wischnewski, T. Ngo, R. Bernemann, M. Jansen, and N. Krämer (2024)
  “I agree with you, bot!” how users (dis) engage with social bots on twitter.
  New Media & Society 26 (3), pp. 1505–1526.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [16]
  K. Yang, D. Singh, and F. Menczer (2024)
  Characteristics and prevalence of fake social media profiles with ai-generated faces.
  arXiv preprint arXiv:2401.02627.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [17]
  D. Heaton, E. Nichele, J. Clos, and J. E. Fischer (2025)
  “ChatGPT says no”: agency, trust, and blame in twitter discourses after the launch of chatgpt.
  AI and Ethics 5 (1), pp. 653–675.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [18]
  A. Flint, L. M. Aiello, R. Pastor-Satorras, and A. Baronchelli (2026)
  Group size effects and collective misalignment in llm multi-agent systems.
  Proceedings of the National Academy of Sciences 123 (34), pp. e2531697123.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [19]
  A. F. Ashery, L. M. Aiello, and A. Baronchelli (2025)
  Emergent social conventions and collective bias in llm populations.
  Science Advances 11 (20), pp. eadu9368.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [20]
  T. Song, Y. Tan, Z. Zhu, Y. Feng, and Y. Lee (2025)
  Multi-agents are social groups: investigating social influence of multiple agents in human-agent interactions.
  Proceedings of the ACM on Human-Computer Interaction 9 (7), pp. 1–33.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [21]
  G. De Marzo, L. Pietronero, and D. Garcia (2023)
  Emergence of scale-free networks in social interactions among large language models.
  arXiv preprint arXiv:2312.06619.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [22]
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. T. Rogers (2024)
  Simulating opinion dynamics with networks of llm-based agents.
  External Links: 2311.09618,
  [Link](https://arxiv.org/abs/2311.09618)
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [23]
  J. S. Park, C. Q. Zou, A. Shaw, B. M. Hill, C. Cai, M. R. Morris, R. Willer, P. Liang, and M. S. Bernstein (2024)
  Generative agent simulations of 1,000 people.
  External Links: 2411.10109,
  [Link](https://arxiv.org/abs/2411.10109)
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [24]
  A. Mehdizadeh and M. Hilbert (2025)
  Homophily-induced emergence of biased structures in llm-based multi-agent ai systems.
  Social Network Analysis and Mining 15 (1), pp. 1–25.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [25]
  F. Hashemi and M. Macy (2026)
  An empirical study of collective behaviors and social dynamics in large language model agents.
  In Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 7327–7351.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [26]
  N. Zomer and M. De Domenico (2026)
  Unraveling the emergence of collective behavior in networks of cognitive agents.
  npj Artificial Intelligence 2 (1), pp. 36.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [27]
  S. Chang, A. Chaszczewicz, E. Wang, M. Josifovska, E. Pierson, and J. Leskovec (2025)
  LLMs generate structurally realistic social networks but overestimate political homophily.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 19, pp. 341–371.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [28]
  A. Taubenfeld, Y. Dover, R. Reichart, and A. Goldstein (2024)
  Systematic biases in llm simulations of debates.
  arXiv preprint arXiv:2402.04049.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [29]
  S. M. Breum, D. V. Egdal, V. G. Mortensen, A. G. Møller, and L. M. Aiello (2024)
  The persuasive power of large language models.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 18, pp. 152–163.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [30]
  A. Mehdizadeh and M. Hilbert (2025)
  When your ai agent succumbs to peer-pressure: studying opinion-change dynamics of llms.
  arXiv preprint arXiv:2510.19107.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§5](https://arxiv.org/html/2604.11312v3#S5.SS0.SSS0.Px2.p1.1 "Local context and micro-level dynamics. ‣ 5 Discussion ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [31]
  M. McPherson, L. Smith-Lovin, and J. M. Cook (2001)
  Birds of a feather: homophily in social networks.
  Annual review of sociology 27 (1), pp. 415–444.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [32]
  M. Tsvetkova, T. Yasseri, N. Pescetelli, and T. Werner (2024)
  A new sociology of humans and machines.
  Nature Human Behaviour 8 (10), pp. 1864–1876.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [33]
  G. Rossetti, M. Stella, R. Cazabet, K. Abramski, E. Cau, S. Citraro, A. Failla, V. Morini, and V. Pansanella (2026)
  YSocial: an ai-powered social media virtual twin.
  Big Data & Society.
  External Links: [Document](https://dx.doi.org/10.1177/20539517261431576)
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [34]
  X. Zhang, J. Lin, X. Mou, S. Yang, X. Liu, L. Sun, H. Lyu, Y. Yang, W. Qi, Y. Chen, et al. (2025)
  Socioverse: a world model for social simulation powered by llm agents and a pool of 10 million real-world users.
  arXiv preprint arXiv:2504.10157.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [35]
  T. Donkers and J. Ziegler (2025)
  Understanding online polarization through human-agent interaction in a synthetic llm-based social network.
  N.A..
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [36]
  F. Fadaei, J. C. Moran, and T. Yasseri (2026)
  Gender dynamics and homophily in a social network of llm agents.
  arXiv preprint arXiv:2602.02606.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [37]
  F. Karimi, M. Génois, C. Wagner, P. Singer, and M. Strohmaier (2018)
  Homophily influences ranking of minorities in social networks.
  Scientific reports 8 (1), pp. 11077.
  Cited by: [Appendix A](https://arxiv.org/html/2604.11312v3#A1.p1.1 "Appendix A Networks with Controlled Homophily and Group Size ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [Appendix A](https://arxiv.org/html/2604.11312v3#A1.p3.2 "Appendix A Networks with Controlled Homophily and Group Size ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [38]
  E. Estrada and E. Vargas-Estrada (2013)
  How peer pressure shapes consensus, leadership and innovations in social groups.
  Scientific reports 3 (1), pp. 2905.
  Cited by: [§1](https://arxiv.org/html/2604.11312v3#S1.p1.1 "1 Introduction ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [39]
  C. Castellano, S. Fortunato, and V. Loreto (2009)
  Statistical physics of social dynamics.
  Reviews of modern physics 81 (2), pp. 591.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [40]
  X. Si and C. Li (2018)
  Bounded confidence opinion dynamics in virtual networks and real networks.
  Journal of Computers 29 (3), pp. 220–228.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [41]
  R. A. Holley and T. M. Liggett (1975)
  Ergodic theorems for weakly interacting infinite systems and the voter model.
  The annals of probability, pp. 643–663.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [42]
  G. Deffuant, D. Neau, F. Amblard, and G. Weisbuch (2000)
  Mixing beliefs among interacting agents.
  Advances in Complex Systems 3 (01n04), pp. 87–98.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [43]
  P. L. Krapivsky and S. Redner (2003)
  Dynamics of majority rule in two-state interacting spin systems.
  Physical Review Letters 90 (23), pp. 238701.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [44]
  I. Crespi (2013)
  The public opinion process: how the people speak.
   Routledge.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [45]
  H. Noorazar (2020)
  Recent advances in opinion propagation dynamics: a 2020 survey.
  The European Physical Journal Plus 135, pp. 1–20.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [46]
  A. Sîrbu, V. Loreto, V. D. Servedio, and F. Tria (2017)
  Opinion dynamics: models, extensions and external effects.
  Participatory sensing, opinions and collective awareness, pp. 363–401.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p1.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [47]
  P. CLIFFORD and A. SUDBURY (1973)
  A model for spatial conflict.
  Biometrika 60 (3), pp. 581–588.
  External Links: ISSN 1464-3510,
  [Link](http://dx.doi.org/10.1093/biomet/60.3.581),
  [Document](https://dx.doi.org/10.1093/biomet/60.3.581)
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p2.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [48]
  M. H. Degroot (1974)
  Reaching a consensus.
  Journal of the American Statistical Association 69 (345), pp. 118–121.
  External Links: ISSN 1537-274X,
  [Link](http://dx.doi.org/10.1080/01621459.1974.10480137),
  [Document](https://dx.doi.org/10.1080/01621459.1974.10480137)
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px1.p2.1 "Opinion Dynamic Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [49]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [50]
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li (2023)
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [51]
  J. S. Park, L. Popowski, C. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2022)
  Social simulacra: creating populated prototypes for social computing systems.
  In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology,
  UIST ’22, New York, NY, USA, pp. 383–390.
  External Links: ISBN 9781450393201,
  [Link](https://doi.org/10.1145/3526113.3545616),
  [Document](https://dx.doi.org/10.1145/3526113.3545616)
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [52]
  P. Bhandari, N. Fay, M. J. Wise, A. Datta, S. Meek, U. Naseem, and M. Nasim (2025)
  Can llm agents maintain a persona in discourse?.
  In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing,
  pp. 29201–29217.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [53]
  F. Lorig, E. Johansson, and P. Davidsson (2021)
  Agent-based social simulation of the covid-19 pandemic: a systematic review.
  Journal of Artificial Societies and Social Simulation 24 (3).
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [54]
  C. Monti, L. M. Aiello, G. De Francisci Morales, and F. Bonchi (2022)
  The language of opinion change on social media under the lens of communicative action.
  Scientific Reports 12 (1), pp. 17920.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [55]
  M. Cheng, S. Yu, C. Lee, P. Khadpe, L. Ibrahim, and D. Jurafsky (2026)
  ELEPHANT: measuring and understanding social sycophancy in llms.
  In International conference on learning representations,
  Vol. 2026, pp. 130060–130097.
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations"),
  [§4](https://arxiv.org/html/2604.11312v3#S4.p1.1 "4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [56]
  P. Cisneros-Velarde (2024)
  On the principles behind opinion dynamics in multi-agent systems of large language models.
  External Links: 2406.15492,
  [Link](https://arxiv.org/abs/2406.15492)
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [57]
  D. Rozado (2024)
  The political preferences of llms.
  PLOS ONE 19.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:267412830)
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [58]
  M. Farina and A. Lavazza (2023)
  ChatGPT in society: emerging issues.
  Frontiers in Artificial Intelligence 6.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:259168081)
  Cited by: [§2](https://arxiv.org/html/2604.11312v3#S2.SS0.SSS0.Px2.p1.1 "Large Language Models ‣ 2 Related Work ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [59]
  E. Cau, A. Failla, and G. Rossetti (2024)
  Bots of a feather: mixing biases in llms’ opinion dynamics.
  In International conference on complex networks and their applications,
  pp. 166–176.
  Cited by: [§3](https://arxiv.org/html/2604.11312v3#S3.p1.1 "3 LLM-powered Opinion Dynamics ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [60]
  E. Cau, V. Pansanella, D. Pedreschi, and G. Rossetti (2025)
  Selective agreement, not sycophancy: investigating opinion dynamics in llm interactions.
  EPJ Data Science 14 (1), pp. 59.
  Cited by: [§3](https://arxiv.org/html/2604.11312v3#S3.p1.1 "3 LLM-powered Opinion Dynamics ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [61]
  J. Dryden and A.H. Clough (2018)
  Parallel lives.
   e-artnow.
  External Links: ISBN 9788027244577,
  [Link](https://books.google.it/books?id=-amSDwAAQBAJ)
  Cited by: [§4](https://arxiv.org/html/2604.11312v3#S4.p1.1 "4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [62]
  W. Kwon, Z. Li, S. Zhuang, Y. Sheng, L. Zheng, C. H. Yu, J. Gonzalez, H. Zhang, and I. Stoica (2023)
  Efficient memory management for large language model serving with pagedattention.
  In Proceedings of the 29th symposium on operating systems principles,
  pp. 611–626.
  Cited by: [§4](https://arxiv.org/html/2604.11312v3#S4.p1.1 "4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [63]
  M. Moussaïd, J. E. Kämmer, P. P. Analytis, and H. Neth (2013)
  Social influence and the collective dynamics of opinion formation.
  PloS one 8 (11), pp. e78433.
  Cited by: [§4.4](https://arxiv.org/html/2604.11312v3#S4.SS4.p4.1 "4.4 RQ4: Micro-level interaction dynamics ‣ 4 Results ‣ Collective Opinion Dynamics in Structured LLM Populations").
- [64]
  A. Barabási and R. Albert (1999)
  Emergence of scaling in random networks.
  science 286 (5439), pp. 509–512.
  Cited by: [Appendix A](https://arxiv.org/html/2604.11312v3#A1.p1.1 "Appendix A Networks with Controlled Homophily and Group Size ‣ Collective Opinion Dynamics in Structured LLM Populations").
