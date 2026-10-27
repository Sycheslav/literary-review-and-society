---
id: arxiv-2402-04578-text
type: material
title: 'S-Agents: Self-organizing Agents in Open-ended Environments'
work_id: arxiv-2402-04578
source_url: https://arxiv.org/html/2402.04578v4
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 93fba425b8a322d7cbf2b5cdd3191d758cd3f6e8784289157428e4dcf970881a
---

> Источник: [https://arxiv.org/html/2402.04578v4](https://arxiv.org/html/2402.04578v4). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# S-Agents: Self-organizing Agents in Open-ended Environments

Jiaqi Chen1
  
Yuxian Jiang
†
  
Jiachen Lu
  
Li Zhang
†
Affiliation: Fudan University
Affiliation: <https://github.com/fudan-zvg/S-Agents>

###### Abstract

Leveraging large language models (LLMs), autonomous agents have significantly improved, gaining the ability to handle a variety of tasks. In open-ended settings, optimizing collaboration for efficiency and effectiveness demands flexible adjustments. Despite this, current research mainly emphasizes fixed, task-oriented workflows and overlooks agent-centric organizational structures.
Drawing inspiration from human organizational behavior, we introduce a self-organizing agent system (S-Agents) with a “tree of agents” structure for dynamic workflow, an “hourglass agent architecture” for balancing information priorities, and a “non-obstructive collaboration” method to allow asynchronous task execution among agents.
This structure can autonomously coordinate a group of agents, efficiently addressing the challenges of open and dynamic environments without human intervention.
Our experiments demonstrate that S-Agents proficiently execute collaborative building tasks and resource collection in the Minecraft environment, validating their effectiveness.

|  |
| --- |
|  |

![Refer to caption](https://arxiv.org/html/2402.04578v4/1_cover.png)


Figure 1: 
Agent organization in open-ended environments. Agent organization is a group of agents with a certain structure cooperating for shared goals. (1-3) depicts a group of agents collecting scattered rocks; (4-8) illustrates a group of agents building a shelter together. During their collaborative process, they autonomously orchestrated workflows without fixed steps by humans.

## 1 Introduction

The fundamental objective of artificial intelligence has long been the development of intelligent autonomous agents with the capacity to operate proficiently in open-ended environments ([Weinbaum & Veitas, 2017](https://arxiv.org/html/2402.04578v4#bib.bib46); [Fujita, 2009](https://arxiv.org/html/2402.04578v4#bib.bib12)).
Autonomous agents powered by Large Language Models (LLMs) ([Kasneci et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib21); [Touvron et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib41); [Ji et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib17)), especially GPT-4 ([OpenAI, 2023b](https://arxiv.org/html/2402.04578v4#bib.bib32)) have paved the way for innovative developments in this domain.
These models showcase remarkable competencies in diverse domains, including instruction comprehension ([Ouyang et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib33); [Chung et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib8)), decision-making ([Shinn et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib39); [Mandi et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib27); [Zhang et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib52); [Yao et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib50)), tool usage [Cai et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib4), code generation ([Hong et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib15); [Chen et al., 2023b](https://arxiv.org/html/2402.04578v4#bib.bib6)), and diverse other domains ([Tang et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib40)).
Moreover, LLM-powered agents have been employed in diverse tasks in open-ended environments, spanning from sandbox games, simulated environments, and robotics ([Fan et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib10); [Zeng et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib51); [Brohan et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib3); [Lu et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib26); [Padmakumar et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib34)).
However, complex embodied tasks in open environments often necessitate collaboration among individual agents to achieve optimal outcomes ([Woolley et al., 2010](https://arxiv.org/html/2402.04578v4#bib.bib47); [Fehr & Gächter, 2000](https://arxiv.org/html/2402.04578v4#bib.bib11); [Zhuge et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib55)).

Unfortunately, the transition from single to multiple agents in an open-ended world introduces significant challenges in organizing a scalable group efficiently to tackle diverse tasks.
The principal challenge in multi-agent organizations resides in structuring a multitude of agents.
Previous research has predominantly concentrated on the creation of task-oriented, fixed workflows ([Hong et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib15); [Qian et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib38); [Wu et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib48)), neglecting to delve into the exploration of an organizational framework characterized by its agent-centric approach and flexibility in workflow.
Identifying optimal connections among individuals and empowering agents to autonomously define a collective workflow present a novel challenge ([Grossi et al., 2006](https://arxiv.org/html/2402.04578v4#bib.bib14); [Jensen et al., 2017](https://arxiv.org/html/2402.04578v4#bib.bib16); [Chen et al., 2023c](https://arxiv.org/html/2402.04578v4#bib.bib7)).
Furthermore, agents in an organization must concurrently manage communication from both the surrounding environment and the organizational context.

In this study, we introduce S-Agents, a novel self-organizing multi-agent system that allows agents to flexibly arrange workflow autonomously, without the need for predefined human instructions, in open-ended environments. The system is specifically designed to operate within the open-world game Minecraft as its environment.
It features:
1) A “tree of agents” organizational structure, comprising a root node (leadership agent) and multiple leaf nodes (executor agents), illustrated in Figure [2](https://arxiv.org/html/2402.04578v4#S1.F2 "Figure 2 ‣ 1 Introduction ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(d). The leadership agent autonomously arranges a flexible workflow without the need for human intervention.
2) An hourglass agent architecture that strives to balance priorities between the agent community and the physical environment, promoting coordinated actions.
3) A non-obstructive collaboration approach breaks away from the constraint of multiple intelligent agents sharing a fixed convergence beat, allowing agents to asynchronously execute collaborative tasks. This method is designed to alleviate delays induced by the slowest agent in each round, thereby enhancing overall efficiency.

![Refer to caption](https://arxiv.org/html/2402.04578v4/2_intro.png)


Figure 2: Schematic organizational structure comparison. (a) Solo agent [Wang et al. (2023a)](https://arxiv.org/html/2402.04578v4#bib.bib42): Direct interaction with the physical environment; (b) Chain of agents [Qian et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib38); [Hong et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib15): Specialized agents sequentially perform their designated tasks and command the actions of the next agent; (c) Graph of agents [Park et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib35): Decentralized structure allowing all agents to command each other; (d) Tree of agents: Centralized structure retaining one agent as a leadership agent (root agent $a\_{r}$), with other executor agents (leaf agent $a\_{l1},a\_{l2}$) executing commands.

## 2 Related work

##### LLM powered multi-agent collaboration

Large Language Models (LLMs) have demonstrated phenomenal capabilities in various domains.
 [Park et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib35); [Akata et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib1); [Xiang et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib49); [Gong et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib13) drive multiple agents with LLM and simulate human-like conversations as well as some social behaviors;
Recent attempts ([Li et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib24); [Dong et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib9); [Qian et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib38)) found that multi-agent collaboration could develop software following a fixed process, but could not coordinate autonomously;
Multiple robotic arms ([Mandi et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib27)), and multiple agents ([Zhang et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib52)) working in collaboration all bring higher efficiency, but cannot be scaled up;
While previous methodologies have demonstrated leading-edge performance on certain tasks, their collaboration mechanisms are often preordained and task-centric.
However, the autonomous collaborative behavior of multi-agent embodied organizations in the open world remains an unclear topic in the current research.
We aim to design an agent-centric organization that empowers agents to directly orchestrate workflows, inherently determining their collaboration framework. This approach should be versatile enough to tackle a wide range of embodied tasks.

##### Embodied agents in Minecraft

Minecraft is an open-ended, three-dimensional world that is a free experimental environment for building numerous benchmarks and agent methods.
[Fan et al. (2022)](https://arxiv.org/html/2402.04578v4#bib.bib10); [Johnson et al. (2016)](https://arxiv.org/html/2402.04578v4#bib.bib18); [Kanervisto et al. (2022)](https://arxiv.org/html/2402.04578v4#bib.bib19) are established benchmarks for evaluating single-agent algorithms.
While [Mohanty et al. (2022)](https://arxiv.org/html/2402.04578v4#bib.bib29); [Kiseleva et al. (2022a)](https://arxiv.org/html/2402.04578v4#bib.bib22); [Kiseleva et al. (2022b)](https://arxiv.org/html/2402.04578v4#bib.bib23); [Mohanty et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib30) focus on designing specific structures based on human instructions.
On the other hand, Malmo ([Perez-Liebana et al., 2019](https://arxiv.org/html/2402.04578v4#bib.bib36)) offers an artificially designed game environment for multi-agent cooperation but lacks the necessary openness and diversity in tasks and environments.
Building upon these benchmarks, several advanced works explore different approaches to realizing embodied agents.
Many prior works utilize reinforcement learning to learn human game behavior ([Kanitscheider et al., 2021](https://arxiv.org/html/2402.04578v4#bib.bib20); [Lin et al., 2021](https://arxiv.org/html/2402.04578v4#bib.bib25); [Mao et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib28)).
[Fan et al. (2022)](https://arxiv.org/html/2402.04578v4#bib.bib10); [Baker et al. (2022)](https://arxiv.org/html/2402.04578v4#bib.bib2) perform large-scale pre-training on game-playing videos.
[Wang et al. (2023c)](https://arxiv.org/html/2402.04578v4#bib.bib44); [Zhu et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib54) proposes a closed-loop feedback framework for a single agent, allowing the agent to achieve its goals vis interact with the environment.
[Wang et al. (2023a)](https://arxiv.org/html/2402.04578v4#bib.bib42) uses LLMs to automatically generate the next task based on the environment, continuously enriching the skill library and exploring the world.
[Zhao et al. (2023)](https://arxiv.org/html/2402.04578v4#bib.bib53) introduced visual perception capabilities to the LLM agent in Minecraft.
However, there has been limited exploration into the design of organizational structures for multiple LLM agents and the architecture of embodied agents that can be organized.

## 3 Methodology

In this section, we introduce LLM-based self-organizing agents (S-Agents), including (i) an efficient directed tree of agents as an organizational structure, (ii) an hourglass agent framework for unified goal management and dynamic planning, and (iii) a non-obstructive collaboration paradigm allowing non-blocking parallelization.

### 3.1 Organizational structure of agents

#### 3.1.1 Agents as a graph

We design an agent-centric organization, specifically, we do not predefine the specific roles and functions of agents ([Hong et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib15); [Qian et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib38); [Wu et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib48)). Instead, we place them in relationships, allowing them to autonomously allocate tasks and coordinate workflows based on circumstances and needs. This is the essence of self-organizing.
Self-organizing agents collaborate to coordinate multiple sub-tasks without the need for human intervention, working towards a shared goal.
This requires agents to have a certain organizational structure that allows tasks to be effectively transferred among agents.
To model the agent organizational structure, we formulate a graphical representation known as the agent graph $\mathcal{G}=(\mathcal{V},\mathcal{E})$. This graph is constructed based on the sets of agents, denoted as $\mathcal{A}=\{a\_{1},...,a\_{n}\}$, and the environment, represented as $p$,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V=\left\{a\_{1},...,a\_{n},p\right\},n>1.$$ |  | (1) |

We subsequently define the edges defined as $\mathcal{E}=\{(e\_{ij})\}$, where directed edge $e\_{ij}=(v\_{i},v\_{j})$ exists for $v\_{i},v\_{j}\in\mathcal{V}$, $i\neq j$ if $v\_{i}$ actively acts (takes actions on the environment $p$ or issues commands to other agents $\mathcal{V}-\{v\_{i},p\}$ and passively perceives feedback from $v\_{j}$.
The organizational structure of agents involves the design of the edge set $\mathcal{E}$ among agents. Existing research has primarily categorized these structures into the following two types.

##### Graph of agents

The (fully connected) graph of agents ([Park et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib35)) is an organizational structure where all agents are interconnected, allowing mutual command and feedback (shown in Figure [2](https://arxiv.org/html/2402.04578v4#S1.F2 "Figure 2 ‣ 1 Introduction ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c)), represented as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{E}\_{GoA}=\{(v\_{i},v\_{j})\mid v\_{i},v\_{j}\in\mathcal{A},i\neq j\}.$$ |  | (2) |

Theoretically, this structure promotes extensive communication and facilitates the flow of tasks within agent group $\mathcal{A}$, contributing to the emergence of self-organizing properties.
However, interconnected agents (Sec. [4.3](https://arxiv.org/html/2402.04578v4#S4.SS3 "4.3 Agent behaviors within organization ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")) exhibit bidirectional connections among agent pairs, i.e., $(a\_{i},a\_{j}),(a\_{j},a\_{i})\in\mathcal{E}$, forming command cycles that allow for mutual command issuance.
These cycles introduce the potential for chaos, characterized by unpredictable and conflicting behaviors.

##### Chain of agents

To address the issue of command cycles and capitalize on the expertise of specialized agents, a straightforward approach ([Hong et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib15)) is the Chain of agents (CoA) (as in Figure [2](https://arxiv.org/html/2402.04578v4#S1.F2 "Figure 2 ‣ 1 Introduction ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b)), defined as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{E}\_{CoA}=\{{(v\_{i},v\_{i+1})}{\mid v\_{i}\in\mathcal{A}}\}.$$ |  | (3) |

In this fixed structure, instructional information unidirectionally flows from the first agent to the last, culminating in the completion of the final product.
For instance, in a task requiring stone excavation, the $a\_{1}$ undertakes lumbering, passing the baton to the $a\_{2}$ for crafting a wooden pickaxe, subsequently transmitting the task to $a\_{3}$ for stone excavation.
While such a structure successfully avoids command cycles, it cannot flexibly adjust workflows, resulting in the potential for self-organization being compromised.

![Refer to caption](https://arxiv.org/html/2402.04578v4/3_method.png)


Figure 3: 
An illustration of hourglass agent architecture. (a) Hourglass agent framework:
The upper segment: Processes inputs like perception and the previous plan. These inputs undergo a series of operations, converging towards a unified and consistent objective (the bottleneck of the hourglass).
The lower segment: Involves the decomposition of an objective through hierarchical planning.
(b) Progress monitor: Utilizes LLM to assess the current progress status of the ongoing task.
(c) Hierarchical planning: Comprises two stages: Task planner and action planner. See Appendix [A.1](https://arxiv.org/html/2402.04578v4#A1.SS1 "A.1 Example of planning process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments") and [B](https://arxiv.org/html/2402.04578v4#A2 "Appendix B Full prompt design ‣ S-Agents: Self-organizing Agents in Open-ended Environments") for example of planning and full prompt, respectively

#### 3.1.2 Tree of agents

To avoid the command cycles in GoA and maintain the potential for self-organization, we propose a directed tree of agents (ToA), which introduces a leadership agent as the root node of the agent tree, with other agents serving as leaf nodes, as illustrated in Figure [2](https://arxiv.org/html/2402.04578v4#S1.F2 "Figure 2 ‣ 1 Introduction ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(d).
Let $\mathcal{V}=\{a\_{r},a\_{l1},a\_{l2},...,a\_{ln},p\}$, where $n>2$, $a\_{r}$ denotes root agent, and $a\_{l}$ denotes $i$-th leaf agent. Define the edges $\mathcal{E}$ as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{E}\_{ToA}=\mathcal{E}\_{\text{root}}\cup\bigcup\_{i=1}^{n-1}\mathcal{E}\_{li}.$$ |  | (4) |

In this structure, the root agent $a\_{r}$ serves as the central command authority, directing tasks to the leaf agents, $\mathcal{E}\_{\text{root}}=\{(a\_{r},a\_{i})\mid a\_{i}\in\{a\_{l1},a\_{l2},...,a\_{ln}\}\}$. Leaf agents $a\_{l}$ interact with the environment to execute assigned tasks and do not actively command other agents. Therefore, $\mathcal{E}\_{li}$ is an empty set.
Note that, leaf agents can communicate but not command each other.
This hierarchical approach ensures a clear flow of commands, avoiding the issues associated with command cycles and allowing for efficient task execution.
Furthermore, upon closer examination, we observed that agents experiencing simultaneous directives from multiple counterparts often result in conflicting and chaotic behaviors.
Consequently, we mandate that the in-degree of each agent be restricted to less than $1$, distinguishing it from the fully connected graph of the agent.

### 3.2 Hourglass agent architecture

In the organizational context, agents simultaneously perceive messages from the agent group $\mathcal{A}$ and information from the physical environment $p$. For instance, a leadership agent directs $a\_{l}$ to mine iron, but $a\_{l}$ is currently under zombie attack.
The duality of inputs poses a challenge for pure LLM decision-making, making it difficult to generate consistent and reliable behavior.
To address this challenge, we propose the hourglass agent architecture (see Figure [3](https://arxiv.org/html/2402.04578v4#S3.F3 "Figure 3 ‣ Chain of agents ‣ 3.1.1 Agents as a graph ‣ 3.1 Organizational structure of agents ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(a)). This framework filters the abundant information to distill a singular objective as a bottleneck. Subsequently, it decomposes this objective into a long-term plan and generates an executable actions queue as output.

![Refer to caption](https://arxiv.org/html/2402.04578v4/4_rollout.png)


Figure 4: 
Comparison of collaboration strategies. (a) involves one agent sequentially executing tasks after another, with no parallelization; (b) is round-based, executing round by round, while (c) is asynchronous. Colored regions indicate tasks being performed, and white regions denote agent idleness.

#### 3.2.1 Perception: from agent group and physical environment

The perception module integrates feedback from the physical environment and dialogue transcripts from the agent group.
1) Physical environment:
The physical environment ${p}$ furnishes a diverse set of data, encompassing the inventory, equipment, and nearby blocks, biome, time, and health and hunger bars, and 3D coordinate and more.
This data structure aligns with the one utilized in Voyager ([Wang et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib42)).
2) Agent group:
Utilizing language as an interface for communication within the agent group $\mathcal{A}$, we meticulously record the interactions initiated by the current agent. Each record includes including time, speaker, respondent, and message.

#### 3.2.2 Progress monitor

The progress monitor, utilizing an LLM for evaluation, takes various perceptual information and the previous plan as input, generating the current task’s completion status (“success”, “fail”, or “ongoing”) along with its rationale. This evaluation occurs when there are no immediate pending actions.
As shown in Figure [3](https://arxiv.org/html/2402.04578v4#S3.F3 "Figure 3 ‣ Chain of agents ‣ 3.1.1 Agents as a graph ‣ 3.1 Organizational structure of agents ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b), the presence of stones in the inventory signals the completion of the mining task. The rationale for this determination is the sufficient quantity of stones already acquired.
For collaborative tasks, the assessment results should be based on the communication within the agent group.

#### 3.2.3 Hierarchical planning

As illustrated in Figure [3](https://arxiv.org/html/2402.04578v4#S3.F3 "Figure 3 ‣ Chain of agents ‣ 3.1.1 Agents as a graph ‣ 3.1 Organizational structure of agents ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c), a hierarchical planner involves the
two-step decomposition of a high-level objective, which can be broadly divided into two LLM-driven modules: task planner and action planner.
1) Task planner:
As shown in Figure [3](https://arxiv.org/html/2402.04578v4#S3.F3 "Figure 3 ‣ Chain of agents ‣ 3.1.1 Agents as a graph ‣ 3.1 Organizational structure of agents ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c), the task planner, following the Chain-of-Thought (CoT) principles ([Wei et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib45)), employs a LLM for objective analysis and long-term planning.
The phase also includes choosing the immediate task for execution, marked as current task in the mint-colored module of Figure [8](https://arxiv.org/html/2402.04578v4#A1.F8 "Figure 8 ‣ A.1 Example of planning process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments") in the Appendix.
2) Action planner:
As depicted in Figure [3](https://arxiv.org/html/2402.04578v4#S3.F3 "Figure 3 ‣ Chain of agents ‣ 3.1.1 Agents as a graph ‣ 3.1 Organizational structure of agents ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c), the action planner accepts the current task as input and utilizes LLM to produce a sequence of executable actions, collectively known as an action queue (highlighted in green in Figure [8](https://arxiv.org/html/2402.04578v4#A1.F8 "Figure 8 ‣ A.1 Example of planning process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments") in the Appendix).
These actions are categorized into two types: direct execution action, typically comprising an action, an object, and an optional location (e.g., “Craft [quantity] [item] at [position]”), and delegation action, where tasks are assigned to another agent (e.g., “Instruct [player] to eliminate [quantity] [mob] at [position]”).
Each action follows the approach of  [Wang et al. (2023a)](https://arxiv.org/html/2402.04578v4#bib.bib42), referencing the most similar skill in the library, generating JavaScript code, and executing it in the Minecraft environment.
Each action in the queue is dequeued and executed sequentially until the queue is empty. Upon depletion of the queue, the progress monitor collects all perceptual information acquired during the execution of these actions to evaluate the task’s completion status, as detailed in Sec. [3.2.2](https://arxiv.org/html/2402.04578v4#S3.SS2.SSS2 "3.2.2 Progress monitor ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments").

![Refer to caption](https://arxiv.org/html/2402.04578v4/5_shelter.png)


Figure 5: Collective shelter construction. The root agent (a1) systematically arranges the tasks and schedules the leaf agents (a2 & a3) for phased execution. More screenshots can be referenced in Appendix [A.2](https://arxiv.org/html/2402.04578v4#A1.SS2 "A.2 Example of execution process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments").

![Refer to caption](https://arxiv.org/html/2402.04578v4/6_mine_stones.png)


Figure 6: Collective collection (mine 100 stones). The root agent (a1) allocates tasks to facilitate parallel processing, while the leaf agent (a2 & a3) autonomously refines these tasks into actionable steps. More screenshots can be referenced in Appendix [A.2](https://arxiv.org/html/2402.04578v4#A1.SS2 "A.2 Example of execution process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments")

### 3.3 Non-obstructive collaboration

The previous approaches can be categorized into two distinct types.
In relay collaboration, exemplified by Chain of agents ([Hong et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib15)) as illustrated in Figure [4](https://arxiv.org/html/2402.04578v4#S3.F4 "Figure 4 ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(a), one agent initiates only after the completion of another, resulting in a sequential progression. This approach typically leads to a sequential and fully interdependent task execution among agents.
Relay collaboration ([Chen et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib5)), depicted in Figure [4](https://arxiv.org/html/2402.04578v4#S3.F4 "Figure 4 ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b), involves the simultaneous operation of all agents. Subsequently, it aggregates the outcomes of all agents after each round to inform task allocation for the subsequent round. Specifically, outside the individual agents, there is an outer for-loop that controls the round.
While this method introduces parallelism, it still introduces a bottleneck by impeding the slowest agent in each round, thereby constraining overall efficiency.
To address these limitations, we propose a non-obstructive asynchronous collaboration paradigm (illustrated in Figure [4](https://arxiv.org/html/2402.04578v4#S3.F4 "Figure 4 ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c)), where each agent operates independently. Once they complete their tasks, they directly report to the root agent to receive instructions for the next steps. Technically, we model each agent as an independent asynchronous process that shares a message pool for communication.

## 4 Experiments

### 4.1 Experimental setup

We evaluate our self-organizing agents on their collective collection performance (in Figure [6](https://arxiv.org/html/2402.04578v4#S3.F6 "Figure 6 ‣ 3.2.3 Hierarchical planning ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")) and collective shelter construction capability (in Figure [5](https://arxiv.org/html/2402.04578v4#S3.F5 "Figure 5 ‣ 3.2.3 Hierarchical planning ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")).

Collective collection:
Agents in the group must gather a specified amount of basic resources like wood, stone, and iron.
They start without equipment and inherit the pre-trained skill library from Voyager ([Wang et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib42)).
In contrast to completing the exploration of a single item ([Wang et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib42); [Wang et al., 2023b](https://arxiv.org/html/2402.04578v4#bib.bib43); [Zhu et al., 2023](https://arxiv.org/html/2402.04578v4#bib.bib54)), which entails gathering a diverse but limited quantity of items, this form of exploratory task can be autonomously executed by a single agent. The difficulty escalates when amassing a substantial quantity of resources, requiring agents to navigate numerous open-ended world events.
The considerable workload emphasizes the preference for a division of labor.

Collective shelter construction:
For a basic shelter, agents need a stone foundation, wooden walls, and a stone ceiling.
Two agents start with wooden planks, one with stone. This task assesses the leadership agent’s task assignment and challenges the consideration of task dependencies.
Effective progress management, an unexplored aspect in prior research, is crucial for successful, staged construction.

##### Metrics

We utilize the subsequent metrics:
Time cost (TC): the time resources needed to execute a task. Reduced time expenditure suggests greater system efficiency. NaN denotes no progress for over 40 minutes when attempts exceed 5 without success.
Mean prompt times (mPT): the average times of hierarchical planning iterations of each agent.

##### Implement details

We use Minecraft 1.19 with Fabric 0.14.21 as our testing environment.
For large language models, we leverage OpenAI’s gpt-4 ([OpenAI, 2023b](https://arxiv.org/html/2402.04578v4#bib.bib32)) for planning of root agent and task evaluation.
Additionally, we utilize the gpt-3.5-turbo-16k APIs ([OpenAI, 2023a](https://arxiv.org/html/2402.04578v4#bib.bib31)) in all other settings.
For text embedding, we leverage the capabilities of the text-embedding-ada-002 API.
We configure all temperatures to 0, providing the best-fitted outcomes, and use temperature = 0.9 to encourage chatting among agents.
Following Voyager ([Wang et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib42)), our simulation environment is constructed on the MineDojo framework ([Fan et al., 2022](https://arxiv.org/html/2402.04578v4#bib.bib10)), and we make use of the Mineflayer JavaScript APIs ([PrismarineJS, 2013](https://arxiv.org/html/2402.04578v4#bib.bib37)) for motor controls. We initialize all agents using the skill library pre-trained by Voyager ([Wang et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib42)).

### 4.2 Evaluation Results

#### 4.2.1 Main results

Impact of organizational structure:
In Table [1](https://arxiv.org/html/2402.04578v4#S4.T1 "Table 1 ‣ 4.2.1 Main results ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(a), chain of agents (CoA) involves one agent sequentially executing $1/3$ collection tasks after another, with no parallelization. Graph of agents (GoA) avoids command cycle issues due to the upgrade to the more powerful gpt-4. Tree of agents (ToA) achieves the shortest completion time for identical tasks, requiring only 7.5 minutes and 3.8 mPT.

|  |  |  |  |
| --- | --- | --- | --- |
| Structure | CoA | GoA | ToA |
| TC | 29.0 | 9.3 | 7.5 |
| mPT | 4.0 | 3.0 | 3.8 |

(a) 
Organizational structure. Task: mining 50 stones.
CoA, GoA and ToA each consist of 3 worker agents.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Type | 50 logs | 100 logs | 50 irons | 100 irons |
| Solo agent | 10.2 | 18.3 | NaN | NaN |
| Agent organization | 5.1 | 11.1 | 15.3 | 24.3 |

(b) 
Agent organization vs. Solo agent.
Efficiency comparison (time cost/min) between agent organization and solo agent across different task difficulties. NaN denotes no progress for over 40 minutes.

Table 1: 
Performance of our agent organization on collective collection.


|  |  |  |  |
| --- | --- | --- | --- |
| N | 50 logs | 50 stones | 50 irons |
| 1 | 10.2 | 6.5 | NaN |
| 2 | 7.1 | 6.9 | NaN |
| 3 | 8.5 | 8.6 | NaN |
| 4 | 5.1 | 7.5 | 15.3 |

(a) 
Scale of agent organization.
Metric: Time cost (/min).
“N” represents the number of agents.
In systems with more than one agent, we adopt a ToA group, which consists of 1 root agent and (N-1) leaf agents.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Setting | Single agent | | 3-agent organization | |
| Model | Voayer | Hourglass | Voayer | Hourglass |
| 50 logs | 11.5 | 10.2 | - | 5.1 |
| 50 stones | 6.9 | 6.5 | - | 7.5 |
| 50 irons | NaN | NaN | - | 15.3 |

(b) 
Hourglass framework vs. Voayer (baseline).
The time cost (/min) of different architectures during the execution of collection tasks under a single agent and a 3-agent organization setting.
“-” indicates that Voyager does not support multi-agent communication and cooperation.

|  |  |  |
| --- | --- | --- |
| Collaboration strategy | Time cost | Mean prompt time |
| Obstructive | 29.0 | 7.5 |
| Non-obstructive | 4.0 | 3.8 |

(c) 
Comparison of collaboration strategies.
Tested a 3-agent system with different collaboration modes on the “50 stone” task.

Table 2: 
Ablation Study.

Multi-agent organization vs. Solo agent:
As shown in Table [1](https://arxiv.org/html/2402.04578v4#S4.T1 "Table 1 ‣ 4.2.1 Main results ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b), for simpler tasks like mining 50/100 logs, employing multiple agents significantly reduces the time by 5.1 and 7.2 minutes, respectively.
For more challenging tasks (50/100 irons), solo agent attempts were largely ineffective (indicated as NaN in Table [1](https://arxiv.org/html/2402.04578v4#S4.T1 "Table 1 ‣ 4.2.1 Main results ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b)).
A solo agent faces heightened probabilities of encountering various unforeseen challenges in an open-world setting, such as getting lost, obstructions by surrounding blocks, prolonged execution times, game environment exits, or difficulty finding iron.
In the ToA system, despite all leaf agents making concerted efforts, once a leaf agent successfully mines iron, the root agent efficiently delegates the entire task to that agent, persisting until success.

#### 4.2.2 Ablation study

Ablation on organization scale:
As shown in Table [2(a)](https://arxiv.org/html/2402.04578v4#S4.T2.st1 "In Table 2 ‣ 4.2.1 Main results ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(a), although collecting wood is simple and repetitive, it requires agents to search for trees in the vicinity.
Multi-agent collaboration can reduce the number of searches each person makes, and improve team efficiency.
In the search for hard-to-find iron ore, multi-agent operations have increased the probability of finding ore sites, and a successful discovery can meet the demand.
Meanwhile, because the location of stone resources is widespread and only requires digging 2-3 layers, the efficiency of a single agent is already high; the overall time cost of multi-agent collaboration depends on the time taken by the slowest agent.

Hourglass framework vs. Voayer:
Table [2(a)](https://arxiv.org/html/2402.04578v4#S4.T2.st1 "In Table 2 ‣ 4.2.1 Main results ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b) shows our comprehensive advantages in the collection task. Not only do we perform faster in solo agent collection tasks compared to our baseline Voyager ([Wang et al., 2023a](https://arxiv.org/html/2402.04578v4#bib.bib42)), but we also enhance efficiency through supporting team collaboration, which is crucial for the future of scaled intelligent agents.

Ablation on non-obstructive collaboration:
In the experiments described in Table [2(a)](https://arxiv.org/html/2402.04578v4#S4.T2.st1 "In Table 2 ‣ 4.2.1 Main results ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c), we employed relay collaboration to demonstrate obstructive strategy, while the asynchronous paradigm was used to illustrate the effects of non-obstructive approaches (see Figure [4](https://arxiv.org/html/2402.04578v4#S3.F4 "Figure 4 ‣ 3.2 Hourglass agent architecture ‣ 3 Methodology ‣ S-Agents: Self-organizing Agents in Open-ended Environments")). The experimental results show that non-obstructive collaboration reduces the time cost to 6.25 times the obstructive strategy.

![Refer to caption](https://arxiv.org/html/2402.04578v4/8_behavior.png)


Figure 7: 
Human-like leadership behaviors in self-organizing agent group.

### 4.3 Agent behaviors within organization

#### 4.3.1 Human-like leadership behaviors

Achieving goals through management means:
In organizational management, leaders adopting a non-hands-on approach to large-scale tasks is a rational consideration. As illustrated in Figure [7](https://arxiv.org/html/2402.04578v4#S4.F7 "Figure 7 ‣ 4.2.2 Ablation study ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(a), the root agent in ToA, is tasked not only with solving individual issues but with equitably decomposing the workload.
This property is achieved by instructing the task planning prompt of the leadership agent to assign tasks to leaf agents rather than itself.
Refer to Appendix [B](https://arxiv.org/html/2402.04578v4#A2 "Appendix B Full prompt design ‣ S-Agents: Self-organizing Agents in Open-ended Environments") for details.

Project oversight and guidance:
As depicted in Figure [7](https://arxiv.org/html/2402.04578v4#S4.F7 "Figure 7 ‣ 4.2.2 Ablation study ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b), we observed that when the root agent learned of the leaf agent struggling to cope with a problem, the leader swiftly implemented a practical solution.
This is mainly due to the progress monitor in the hourglass architecture, enabling the leader to clearly understand each leaf agent’s status.

Aligning personnel with positions:
Aligning suitable personnel with corresponding positions is a fundamental principle in human resources management.
In the context of an agent organization, as depicted in Figure [7](https://arxiv.org/html/2402.04578v4#S4.F7 "Figure 7 ‣ 4.2.2 Ablation study ‣ 4.2 Evaluation Results ‣ 4 Experiments ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c), we observe a proactive leadership agent leveraging a nuanced understanding of past experiences and skills of team members to strategically allocate tasks.

#### 4.3.2 Behaving like human employees

During collaborative processes in agent organization, we’ve observed leaf agents displaying behaviors that mimic human employees. This is because, in ToA for the leaf agent, we require it to execute the tasks it receives autonomously. As a result, unlike agents in the GoA, it does not have a certain probability of delegating tasks to other agents.
Moreover, regardless of whether the task execution is successful or not, the leaf agent proactively provides feedback, which aids the root agent in making further decisions.
For more details, see Appendix [A.3](https://arxiv.org/html/2402.04578v4#A1.SS3 "A.3 Agent behavior mimicking human employees ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments").

## 5 Conclusion

In conclusion, this study has introduced self-organizing agents (S-Agents), a type of embodied agent group capable of autonomously orchestrating workflows without manual human design.
The S-Agents includes a tree-like organizational structure, an hourglass agent architecture, and a non-obstructive collaboration paradigm.
Our experiments in the Minecraft environment have underscored its exceptional performance, showcasing superior capabilities across various tasks in comparison to individual agents and alternative organizational approaches. Importantly, we have observed anthropomorphic social behaviors in the organizational dynamics among the agents.
With the progression of artificial general intelligence, obtaining a deeper understanding of the organizational dynamics of scalable multi-agent systems becomes increasingly crucial. S-Agents have commenced preliminary explorations in this field, and we foresee their potential adaptability and enhancement across a wider range of embodied tasks in the future.

## References

- Akata et al. (2023)

  Elif Akata, Lion Schulz, Julian Coda-Forno, Seong Joon Oh, Matthias Bethge, and Eric Schulz.
  Playing repeated games with large language models.
  *arXiv preprint*, 2023.
- Baker et al. (2022)

  Bowen Baker, Ilge Akkaya, Peter Zhokov, Joost Huizinga, Jie Tang, Adrien Ecoffet, Brandon Houghton, Raul Sampedro, and Jeff Clune.
  Video pretraining (vpt): Learning to act by watching unlabeled online videos.
  *NeurIPS*, 2022.
- Brohan et al. (2023)

  Anthony Brohan, Noah Brown, Justice Carbajal, Yevgen Chebotar, Xi Chen, Krzysztof Choromanski, Tianli Ding, Danny Driess, Avinava Dubey, Chelsea Finn, et al.
  Rt-2: Vision-language-action models transfer web knowledge to robotic control.
  *arXiv preprint*, 2023.
- Cai et al. (2023)

  Tianle Cai, Xuezhi Wang, Tengyu Ma, Xinyun Chen, and Denny Zhou.
  Large language models as tool makers.
  *arXiv preprint*, 2023.
- Chen et al. (2023a)

  Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang, Chenfei Yuan, Chen Qian, Chi-Min Chan, Yujia Qin, Yaxi Lu, Ruobing Xie, et al.
  Agentverse: Facilitating multi-agent collaboration and exploring emergent behaviors in agents.
  *arXiv preprint*, 2023a.
- Chen et al. (2023b)

  Xinyun Chen, Maxwell Lin, Nathanael Schärli, and Denny Zhou.
  Teaching large language models to self-debug.
  *arXiv preprint*, 2023b.
- Chen et al. (2023c)

  Yongchao Chen, Jacob Arkin, Yang Zhang, Nicholas Roy, and Chuchu Fan.
  Scalable multi-robot collaboration with large language models: Centralized or decentralized systems?
  *arXiv preprint*, 2023c.
- Chung et al. (2022)

  Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Yunxuan Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, et al.
  Scaling instruction-finetuned language models.
  *arXiv preprint*, 2022.
- Dong et al. (2023)

  Yihong Dong, Xue Jiang, Zhi Jin, and Ge Li.
  Self-collaboration code generation via chatgpt.
  *arXiv preprint*, 2023.
- Fan et al. (2022)

  Linxi Fan, Guanzhi Wang, Yunfan Jiang, Ajay Mandlekar, Yuncong Yang, Haoyi Zhu, Andrew Tang, De-An Huang, Yuke Zhu, and Anima Anandkumar.
  Minedojo: Building open-ended embodied agents with internet-scale knowledge.
  *NeurIPS*, 2022.
- Fehr & Gächter (2000)

  Ernst Fehr and Simon Gächter.
  Cooperation and punishment in public goods experiments.
  *American Economic Review*, 2000.
- Fujita (2009)

  Masahiro Fujita.
  Intelligence dynamics: a concept and preliminary experiments for open-ended learning agents.
  *Autonomous Agents and Multi-Agent Systems*, 2009.
- Gong et al. (2023)

  Ran Gong, Qiuyuan Huang, Xiaojian Ma, Hoi Vo, Zane Durante, Yusuke Noda, Zilong Zheng, Song-Chun Zhu, Demetri Terzopoulos, Li Fei-Fei, et al.
  Mindagent: Emergent gaming interaction.
  *arXiv preprint*, 2023.
- Grossi et al. (2006)

  Davide Grossi, Frank Dignum, Virginia Dignum, Mehdi Dastani, and Lambèr Royakkers.
  Structural evaluation of agent organizations.
  In *IJCAI*, 2006.
- Hong et al. (2023)

  Sirui Hong, Xiawu Zheng, Jonathan Chen, Yuheng Cheng, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, et al.
  Metagpt: Meta programming for multi-agent collaborative framework.
  *arXiv preprint*, 2023.
- Jensen et al. (2017)

  Andreas Schmidt Jensen, Virginia Dignum, and Jørgen Villadsen.
  A framework for organization-aware agents.
  *Autonomous Agents and Multi-Agent Systems*, 2017.
- Ji et al. (2023)

  Ge-Peng Ji, Mingchen Zhuge, Dehong Gao, Deng-Ping Fan, Christos Sakaridis, and Luc Van Gool.
  Masked vision-language transformer in fashion.
  *Machine Intelligence Research*, 2023.
- Johnson et al. (2016)

  Matthew Johnson, Katja Hofmann, Tim Hutton, and David Bignell.
  The malmo platform for artificial intelligence experimentation.
  In *IJCAI*, 2016.
- Kanervisto et al. (2022)

  Anssi Kanervisto, Stephanie Milani, Karolis Ramanauskas, Nicholay Topin, Zichuan Lin, Junyou Li, Jianing Shi, Deheng Ye, Qiang Fu, Wei Yang, et al.
  Minerl diamond 2021 competition: Overview, results, and lessons learned.
  *NeurIPS 2021 Competitions and Demonstrations Track*, 2022.
- Kanitscheider et al. (2021)

  Ingmar Kanitscheider, Joost Huizinga, David Farhi, William Hebgen Guss, Brandon Houghton, Raul Sampedro, Peter Zhokhov, Bowen Baker, Adrien Ecoffet, Jie Tang, et al.
  Multi-task curriculum learning in a complex, visual, hard-exploration domain: Minecraft.
  *arXiv preprint*, 2021.
- Kasneci et al. (2023)

  Enkelejda Kasneci, Kathrin Seßler, Stefan Küchemann, Maria Bannert, Daryna Dementieva, Frank Fischer, Urs Gasser, Georg Groh, Stephan Günnemann, Eyke Hüllermeier, et al.
  Chatgpt for good? on opportunities and challenges of large language models for education.
  *Learning and individual differences*, 2023.
- Kiseleva et al. (2022a)

  Julia Kiseleva, Ziming Li, Mohammad Aliannejadi, Shrestha Mohanty, Maartje ter Hoeve, Mikhail Burtsev, Alexey Skrynnik, Artem Zholus, Aleksandr Panov, Kavya Srinet, et al.
  Interactive grounded language understanding in a collaborative environment: Iglu 2021.
  In *NeurIPS 2021 Competitions and Demonstrations Track*, 2022a.
- Kiseleva et al. (2022b)

  Julia Kiseleva, Alexey Skrynnik, Artem Zholus, Shrestha Mohanty, Negar Arabzadeh, Marc-Alexandre Côté, Mohammad Aliannejadi, Milagro Teruel, Ziming Li, Mikhail Burtsev, Maartje ter Hoeve, Zoya Volovikova, Aleksandr Panov, Yuxuan Sun, Kavya Srinet, Arthur Szlam, and Ahmed Awadallah.
  Iglu 2022: Interactive grounded language understanding in a collaborative environment at neurips 2022, 2022b.
- Li et al. (2023)

  Guohao Li, Hasan Abed Al Kader Hammoud, Hani Itani, Dmitrii Khizbullin, and Bernard Ghanem.
  Camel: Communicative agents for” mind” exploration of large scale language model society.
  *arXiv preprint*, 2023.
- Lin et al. (2021)

  Zichuan Lin, Junyou Li, Jianing Shi, Deheng Ye, Qiang Fu, and Wei Yang.
  Juewu-mc: Playing minecraft with sample-efficient hierarchical reinforcement learning.
  *arXiv preprint*, 2021.
- Lu et al. (2023)

  Guanxing Lu, Ziwei Wang, Changliu Liu, Jiwen Lu, and Yansong Tang.
  Thinkbot: Embodied instruction following with thought chain reasoning.
  *arXiv preprint*, 2023.
- Mandi et al. (2023)

  Zhao Mandi, Shreeya Jain, and Shuran Song.
  Roco: Dialectic multi-robot collaboration with large language models.
  *arXiv preprint*, 2023.
- Mao et al. (2022)

  Hangyu Mao, Chao Wang, Xiaotian Hao, Yihuan Mao, Yiming Lu, Chengjie Wu, Jianye Hao, Dong Li, and Pingzhong Tang.
  Seihai: A sample-efficient hierarchical ai for the minerl competition.
  In *DAI*, 2022.
- Mohanty et al. (2022)

  Shrestha Mohanty, Negar Arabzadeh, Milagro Teruel, Yuxuan Sun, Artem Zholus, Alexey Skrynnik, Mikhail Burtsev, Kavya Srinet, Aleksandr Panov, Arthur Szlam, et al.
  Collecting interactive multi-modal datasets for grounded language understanding.
  *arXiv preprint*, 2022.
- Mohanty et al. (2023)

  Shrestha Mohanty, Negar Arabzadeh, Julia Kiseleva, Artem Zholus, Milagro Teruel, Ahmed Awadallah, Yuxuan Sun, Kavya Srinet, and Arthur Szlam.
  Transforming human-centered ai collaboration: Redefining embodied agents capabilities through interactive grounded language instructions.
  *arXiv preprint*, 2023.
- OpenAI (2023a)

  OpenAI.
  Introducing chatgpt, 2023a.
- OpenAI (2023b)

  OpenAI.
  Gpt-4 technical report, 2023b.
- Ouyang et al. (2022)

  Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, et al.
  Training language models to follow instructions with human feedback.
  *NeurIPS*, 2022.
- Padmakumar et al. (2023)

  Aishwarya Padmakumar, Mert Inan, Spandana Gella, Patrick L Lange, and Dilek Hakkani-Tur.
  Multimodal embodied plan prediction augmented with synthetic embodied dialogue.
  In *Conference on Empirical Methods in Natural Language Processing*, 2023.
- Park et al. (2023)

  Joon Sung Park, Joseph C. O’Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, and Michael S. Bernstein.
  Generative agents: Interactive simulacra of human behavior, 2023.
- Perez-Liebana et al. (2019)

  Diego Perez-Liebana, Katja Hofmann, Sharada Prasanna Mohanty, Noburu Kuno, Andre Kramer, Sam Devlin, Raluca D Gaina, and Daniel Ionita.
  The multi-agent reinforcement learning in malm$\backslash$” o (marl$\backslash$” o) competition.
  *arXiv preprint*, 2019.
- PrismarineJS (2013)

  PrismarineJS.
  Prismarinejs. prismarinejs/mineflayer: Create minecraft bots with a powerful, stable, and high level javascript api, 2013.
- Qian et al. (2023)

  Chen Qian, Xin Cong, Cheng Yang, Weize Chen, Yusheng Su, Juyuan Xu, Zhiyuan Liu, and Maosong Sun.
  Communicative agents for software development.
  *arXiv preprint*, 2023.
- Shinn et al. (2023)

  Noah Shinn, Beck Labash, and Ashwin Gopinath.
  Reflexion: an autonomous agent with dynamic memory and self-reflection.
  *arXiv preprint*, 2023.
- Tang et al. (2023)

  Xiangru Tang, Anni Zou, Zhuosheng Zhang, Yilun Zhao, Xingyao Zhang, Arman Cohan, and Mark Gerstein.
  Medagents: Large language models as collaborators for zero-shot medical reasoning.
  *arXiv preprint*, 2023.
- Touvron et al. (2023)

  Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, et al.
  Llama: Open and efficient foundation language models.
  *arXiv preprint*, 2023.
- Wang et al. (2023a)

  Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and Anima Anandkumar.
  Voyager: An open-ended embodied agent with large language models.
  *arXiv preprint*, 2023a.
- Wang et al. (2023b)

  Zihao Wang, Shaofei Cai, Anji Liu, Yonggang Jin, Jinbing Hou, Bowei Zhang, Haowei Lin, Zhaofeng He, Zilong Zheng, Yaodong Yang, Xiaojian Ma, and Yitao Liang.
  Jarvis-1: Open-world multi-task agents with memory-augmented multimodal language models.
  *arXiv preprint*, 2023b.
- Wang et al. (2023c)

  Zihao Wang, Shaofei Cai, Anji Liu, Xiaojian Ma, and Yitao Liang.
  Describe, explain, plan and select: Interactive planning with large language models enables open-world multi-task agents.
  *arXiv preprint*, 2023c.
- Wei et al. (2022)

  Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  *NeurIPS*, 2022.
- Weinbaum & Veitas (2017)

  David Weinbaum and Viktoras Veitas.
  Open ended intelligence: the individuation of intelligent agents.
  *Journal of Experimental & Theoretical Artificial Intelligence*, 2017.
- Woolley et al. (2010)

  Anita Williams Woolley, Christopher F Chabris, Alex Pentland, Nada Hashmi, and Thomas W Malone.
  Evidence for a collective intelligence factor in the performance of human groups.
  *science*, 2010.
- Wu et al. (2023)

  Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang, Xiaoyun Zhang, and Chi Wang.
  Autogen: Enabling next-gen llm applications via multi-agent conversation framework.
  *arXiv preprint*, 2023.
- Xiang et al. (2023)

  Jiannan Xiang, Tianhua Tao, Yi Gu, Tianmin Shu, Zirui Wang, Zichao Yang, and Zhiting Hu.
  Language models meet world models: Embodied experiences enhance language models.
  *arXiv preprint*, 2023.
- Yao et al. (2023)

  Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Thomas L Griffiths, Yuan Cao, and Karthik Narasimhan.
  Tree of thoughts: Deliberate problem solving with large language models.
  *arXiv preprint*, 2023.
- Zeng et al. (2022)

  Andy Zeng, Maria Attarian, Brian Ichter, Krzysztof Choromanski, Adrian Wong, Stefan Welker, Federico Tombari, Aveek Purohit, Michael Ryoo, Vikas Sindhwani, et al.
  Socratic models: Composing zero-shot multimodal reasoning with language.
  *arXiv preprint*, 2022.
- Zhang et al. (2023)

  Hongxin Zhang, Weihua Du, Jiaming Shan, Qinhong Zhou, Yilun Du, Joshua B Tenenbaum, Tianmin Shu, and Chuang Gan.
  Building cooperative embodied agents modularly with large language models.
  *arXiv preprint*, 2023.
- Zhao et al. (2023)

  Zhonghan Zhao, Wenhao Chai, Xuan Wang, Li Boyi, Shengyu Hao, Shidong Cao, Tian Ye, Jenq-Neng Hwang, and Gaoang Wang.
  See and think: Embodied agent in virtual environment.
  *arXiv preprint*, 2023.
- Zhu et al. (2023)

  Xizhou Zhu, Yuntao Chen, Hao Tian, Chenxin Tao, Weijie Su, Chenyu Yang, Gao Huang, Bin Li, Lewei Lu, Xiaogang Wang, et al.
  Ghost in the minecraft: Generally capable agents for open-world enviroments via large language models with text-based knowledge and memory.
  *arXiv preprint*, 2023.
- Zhuge et al. (2023)

  Mingchen Zhuge, Haozhe Liu, Francesco Faccio, Dylan R Ashley, Róbert Csordás, Anand Gopalakrishnan, Abdullah Hamdi, Hasan Abed Al Kader Hammoud, Vincent Herrmann, Kazuki Irie, et al.
  Mindstorms in natural language-based societies of mind.
  *arXiv preprint*, 2023.

## Appendix A Example

### A.1 Example of planning process

Figure [8](https://arxiv.org/html/2402.04578v4#A1.F8 "Figure 8 ‣ A.1 Example of planning process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments") demonstrates the planning process of both the root agent and leaf agents in the “build a house” task.

![Refer to caption](https://arxiv.org/html/2402.04578v4/10_method_details.png)


Figure 8: 
The illustration of an example process of collaborative house building. Full prompts are presented in Appendix [B](https://arxiv.org/html/2402.04578v4#A2 "Appendix B Full prompt design ‣ S-Agents: Self-organizing Agents in Open-ended Environments").

### A.2 Example of execution process

Figure [9](https://arxiv.org/html/2402.04578v4#A1.F9 "Figure 9 ‣ A.2 Example of execution process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments") and Figure [10](https://arxiv.org/html/2402.04578v4#A1.F10 "Figure 10 ‣ A.2 Example of execution process ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments") illustrate the collaborative processes of building a house and collecting iron, respectively.

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/build/foundation.jpeg)

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/build/wall.jpeg)

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/build/roof.jpeg)

Build foundation

———————-Build walls

————————-Build roof

Figure 9: The procedure of building a house. The root agent commands while the two leaf agents collaborate to complete the construction.


![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/iron/mine_logs.jpeg)

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/iron/mine_logs.jpeg)

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/iron/wooden_pickaxe.jpeg)

———Mine logs

———————–Craft crafting table

—————Craft wooden pickaxe

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/iron/mine_stone.jpeg)

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/iron/stone_pickaxe.jpeg)

![Refer to caption](https://arxiv.org/html/2402.04578v4/figures/iron/mine_iron.jpeg)

Mine stones

——————–Craft stone pickaxe

———————-Mine iron

Figure 10: The procedure of mining iron. As the execution processes of the two agents are similar, only one of them is presented here.

### A.3 Agent behavior mimicking human employees

![Refer to caption](https://arxiv.org/html/2402.04578v4/9_example.png)


Figure 11: 
Agent behaviors that mimic human employees.

The following is a detailed description of behaviors similar to those of human employees exhibited by the LLM agent during task execution.

Following instructions and execution:
In the human workplace, proactively following the instructions of a leader and possessing excellent execution capabilities ensure the achievement of organizational objectives.
Within a GoA, as depicted in Figure [11](https://arxiv.org/html/2402.04578v4#A1.F11 "Figure 11 ‣ A.3 Agent behavior mimicking human employees ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(a), when leaf agent $a\_{l1}$ receives instructions to craft a wooden pickaxe, he delegates the task to leaf agent $a\_{l2}$.
Subsequently, leaf agent $a\_{l2}$ replicates this behavior, resulting in a loop of delegation, leading to inaction and production halt.
In contrast, as shown in Figure [11](https://arxiv.org/html/2402.04578v4#A1.F11 "Figure 11 ‣ A.3 Agent behavior mimicking human employees ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(b), in a ToA, when leaf agent $a\_{l1}$ is assigned the task of crafting a wooden pickaxe, he promptly begins the task himself, following the directive of leadership agent without further delegation.

Progress updates to the leader:
The root agent needs to model the execution progress on time, and correspondingly, leaf agents are required to report the progress of task execution to the Root agent.
As illustrated in Figure [11](https://arxiv.org/html/2402.04578v4#A1.F11 "Figure 11 ‣ A.3 Agent behavior mimicking human employees ‣ Appendix A Example ‣ S-Agents: Self-organizing Agents in Open-ended Environments")(c,d), a leaf agent reports at the commencement of a task and provides updates upon its completion, indicating success or failure.
In case of task failure, the leaf agent also elucidates the reasons and current state of their inventory.

## Appendix B Full prompt design

The displayed prompts have been corrected for minor grammar errors.

### B.1 Progress monitor

#### B.1.1 Components in the Prompt

The input prompt to LLM consists of several components:

1. (1)

   Task to be inquired, proposed by the task planner.
2. (2)

   Recent conversation, conversation since last task planning. Leaf agents report their task progress and current inventory status during conversations, allowing for the inference of task completion from the dialogue.
3. (3)

   Chest information. In rare instances, leaf agents might place the results of their actions in nearby chests, necessitating the integration of chest information for accurate task completion assessment. In most cases, this field is left empty.

#### B.1.2 Full Prompt

Template of progress monitor

[⬇](data:text/plain;base64,WW91J3JlIGEganVkZ2Ugb2YgcHJvZ3Jlc3MgaW4gTWluZWNyYWZ0LCBhbmQgeW91J3JlIGFkZXB0IGF0IGp1ZGdpbmcgd2hldGhlciBvciBub3QgW1Rhc2sgdG8gYmUgaW5xdWlyZWRdIGlzIGNvbXBsZXRlIGJhc2VkIG9uIHRoZSBbQ29udmVyc2F0aW9uXSBhbmQgW2NoZXN0IGluZm9ybWF0aW9uXSBzbyBmYXIuCgpZb3VyIHRhc2sgaXMgdG8gcGVyZm9ybSB0aGUgZm9sbG93aW5nIGFjdGlvbnMgdG8gaGVscCBtZSBwbGF5IE1pbmVjcmFmdDoKSSdsbCBnaXZlIHlvdSBbVGFzayB0byBiZSBpbnF1aXJlZF0sIFtDb252ZXJzYXRpb25dIHdpdGggYW5vdGhlciBwbGF5ZXIsIGFuZCB0aGUgW0NoZXN0IGluZm9ybWF0aW9uXSBuZWFyYnkuCkZpcnN0LCBwbGVhc2UgZ2l2ZSBhIFtUYXNrIHJlc3VsdCBqdWRnbWVudF0gYWJvdXQgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgW1Rhc2sgdG8gYmUgaW5xdWlyZWRdLgpZb3Ugc2hvdWxkIGdpdmUgeW91ciBqdWRnbWVudCByaWdodCBvbiB0aGUgc3BvdCwgbm90IGJlYXQgYXJvdW5kIHRoZSBidXNoIQpUaGVuLCBkZXRlcm1pbmUgdGhlIFtGaW5hbCB0YXNrIHN0YXR1c10gKCdzdWNjZXNzJyBvciAnZmFpbCcgb3IgJ3Vua25vd24nKSwgYmFzZWQgb24gdGhlIHByb2dyZXNzIGFuYWx5c2lzLgoKWW91IG11c3QgZm9sbG93IHRoZSBmb2xsb3dpbmcgY3JpdGVyaWE6CjEuIFBsZWFzZSBmb2N1cyBvbmx5IG9uIFtDb252ZXJzYXRpb25dIG9yIFtDaGVzdCBpbmZvcm1hdGlvbl0gcmVsYXRlZCB0byB0aGUgW1Rhc2sgdG8gYmUgaW5xdWlyZWRdLCBvdGhlciBpbmZvcm1hdGlvbiBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFuYWx5c2lzLgoyLiBBcyBsb25nIGFzIG9uZSBvZiB0aGUgW0NvbnZlcnNhdGlvbl0gYW5kIFtDaGVzdCBpbmZvcm1hdGlvbl0gY29udGFpbnMgdmFsaWQgaW5mb3JtYXRpb24gYWJvdXQgW1Rhc2sgdG8gYmUgaW5xdWlyZWRdLCBpdCBpcyBzdWZmaWNpZW50IGZvciBbUHJvZ3Jlc3MgYW5hbHlzaXNdIGFuZCBbRmluYWwgdGFzayBzdGF0dXNdLgozLiBSZWNpZXZlIHRoZSByZXNwb25zZSBvZiAnSSB3aWxsIHN0YXJ0IHRhc2s6IHh4eCcgaW4gW0NvbnZlcnNhdGlvbl0gbWVhbnMgdGhhdCB0aGUgdGFzayBoYXMgc3RhcnRlZCwgW0ZpbmFsIHRhc2sgc3RhdHVzXSBzaG91bGQgYmUgdW5rbm93bi4KNC4gTm8gcmVzcG9uc2Ugb3Igb25seSBnZXQgJ0dvdCBpdCEnLCBtZWFucyB0aGF0IHRoZSB0YXNrIGRpZG4ndCBzdGFydCwgW0ZpbmFsIHRhc2sgc3RhdHVzXSBzaG91bGQgYmUgdW5rbm93bi4KNS4gUmVjaWV2ZSB0aGUgcmVzcG9uc2Ugb2YgJ0kgaGF2ZSBzdWNjZWVkZWQgaW4gdGhlIHRhc2s6IHh4eCcgaW4gW0NvbnZlcnNhdGlvbl0gbWVhbnMgdGhhdCB0aGUgdGFzayBoYXMgZmluaXNoZWQsIFtGaW5hbCB0YXNrIHN0YXR1c10gc2hvdWxkIGJlIGEgc3VjY2Vzcy4KNi4gUmVjaWV2ZSB0aGUgcmVzcG9uc2Ugb2YgJ0kgaGF2ZSBmYWlsZWQgdGhlIHRhc2s6IHh4eCcgaW4gW0NvbnZlcnNhdGlvbl0gbWVhbnMgdGhhdCB0aGUgdGFzayBoYXMgZmFpbGVkLCBbRmluYWwgdGFzayBzdGF0dXNdIHNob3VsZCBmYWlsLgo1LiBUaGUgW0ZpbmFsIHRhc2sgc3RhdHVzXSBzaG91bGQgYmUgb25lIG9mIHN0YXR1cyBpbiAnc3VjY2Vzcycgb3IgJ2ZhaWwnIG9yICd1bmtub3duJwondW5rbm93bicgbWVhbnMgdGhlcmUgaXMgbm8gaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN1Y2Nlc3Mgb3IgZmFpbHVyZSBpbiBwcm9ncmVzcyBhbmFseXNpcywKJ3N1Y2Nlc3MnIG1lYW5zIHRoZSB0YXNrIGlzIGZpbmFsbHkgY29tcGxldGVkLAonZmFpbCcgbWVhbnMgdGhlIHRhc2sgaXMgZmluYWxseSBmYWlsZWQuCgpUaGUgcmVzcG9uc2UgZm9ybWF0IHNob3VsZCBiZToKVGFzayByZXN1bHQganVkZ21lbnQ6IDxZb3VyIG91dHB1dCBbVGFzayByZXN1bHQganVkZ21lbnRdIHNob3VsZCBiZSBsaWtlLCAiQWNjb3JkaW5nIHRvIFt0aGUga2V5IHNlbnRlbmNlXSBmcm9tIFtDb252ZXJzYXRpb24gb3IgQ2hlc3QgaW5mb3JtYXRpb25dLCBbVGFzayB0byBiZSBpbnF1aXJlZF0gaGFzIHN1Y2NlZWRlZC9mYWlsZWQuIiBPciAiW2luZm9ybWF0aW9uIHN1bW1hcnldLCBidXQgaXQgZG9lcyBub3QgcHJvdmlkZSBhbnkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3VsdCBvZiB0aGUgdGFzaywgc28gdGhlIHRhc2sgc3RhdHVzIGlzIHVua25vd24uIj4KRmluYWwgdGFzayBzdGF0dXM6IDxPbmx5IG9uZSBvZiB0aGUgd29yZHMgaW4gc3VjY2VzcyBvciBmYWlsIG9yIHVua25vd24+Cg==)@ifdisplaystyle

1
You’re a judge of progress in Minecraft, and you’re adept at judging whether or not [Task to be inquired] is complete based on the [Conversation] and [chest information] so far.

2

3
Your task is to perform the following actions to help me play Minecraft:

4
I’ll give you [Task to be inquired], [Conversation] with another player, and the [Chest information] nearby.

5
First, please give a [Task result judgment] about the current progress of [Task to be inquired].

6
You should give your judgment right on the spot, not beat around the bush!

7
Then, determine the [Final task status] (’success’ or ’fail’ or ’unknown’), based on the progress analysis.

8

9
You must follow the following criteria:

10
1. Please focus only on [Conversation] or [Chest information] related to the [Task to be inquired], other information is not included in the analysis.

11
2. As long as one of the [Conversation] and [Chest information] contains valid information about [Task to be inquired], it is sufficient for [Progress analysis] and [Final task status].

12
3. Recieve the response of ’I will start task: xxx’ in [Conversation] means that the task has started, [Final task status] should be unknown.

13
4. No response or only get ’Got it!’, means that the task didn’t start, [Final task status] should be unknown.

14
5. Recieve the response of ’I have succeeded in the task: xxx’ in [Conversation] means that the task has finished, [Final task status] should be a success.

15
6. Recieve the response of ’I have failed the task: xxx’ in [Conversation] means that the task has failed, [Final task status] should fail.

16
5. The [Final task status] should be one of status in ’success’ or ’fail’ or ’unknown’

17
’unknown’ means there is no information about the success or failure in progress analysis,

18
’success’ means the task is finally completed,

19
’fail’ means the task is finally failed.

20

21
The response format should be:

22
Task result judgment: <Your output [Task result judgment] should be like, "According to [the key sentence] from [Conversation or Chest information], [Task to be inquired] has succeeded/failed." Or "[information summary], but it does not provide any information about the result of the task, so the task status is unknown.">

23
Final task status: <Only one of the words in success or fail or unknown>
\lst

Monitor progress: example of root agent

[⬇](data:text/plain;base64,RXhhbXBsZToKSW5wdXQ6IChJZiB5b3UgYXJlIHRoZSBsZWFkZXIpClRoZSBjdXJyZW50IHRhc2sgdG8gYmUgaW5xdWlyZWQ6YGBgU3RhZ2UgMTogR2F0aGVyIHJlc291cmNlcwogICAgV29ya2VyQSBtaW5lIDI3IHN0b25lcy5gYGAKVGhlIGNvbnZlcnNhdGlvbiBiZXR3ZWVuIHdvcmtlciBhbmQgbGVhZGVyCi1bMTU6MDM6MTBdbGVhZGVyIHNheXM6ICdXb3JrZXJBLCBwbGVhc2UgbWluZSAyNyBzdG9uZXMnCi1bMTU6MDM6MjBdIFdvcmtlckEgc2F5czogJ0dvdCBpdCEnClRhc2sgcmVzdWx0IGp1ZGdtZW50OiBMZWFkZXIgaW5mb3JtcyB3b3JrZXJzIHRvIG1pbmUgMjcgbG9ncywgd29ya2VycyByZWNlaXZlIGl0LCBidXQgZG9uJ3QgaGVhciB0aGUgbWVzc2FnZSB0aGF0IFdvcmtlckEgaGFzIHN1Y2NlZWRlZCwgc28gdGhlIHRhc2sgc3RhdHVzIGlzIHVua25vd24KRmluYWwgdGFzayBzdGF0dXM6IHVua25vd24=)@ifdisplaystyle

1
Example:

2
Input: (If you are the leader)

3
The current task to be inquired:‘‘‘Stage 1: Gather resources

4
 WorkerA mine 27 stones.‘‘‘

5
The conversation between worker and leader

6
-[15:03:10]leader says: ’WorkerA, please mine 27 stones’

7
-[15:03:20] WorkerA says: ’Got it!’

8
Task result judgment: Leader informs workers to mine 27 logs, workers receive it, but don’t hear the message that WorkerA has succeeded, so the task status is unknown

9
Final task status: unknown
\lst

Progress monitor: example of leaf agent

[⬇](data:text/plain;base64,RXhhbXBsZToKCklucHV0OgpUaGUgY3VycmVudCB0YXNrIHRvIGJlIGlucXVpcmVkOiBDcmFmdCBhIHdvb2RlbiBwaWNrYXhlCkNvbnZlcnNhdGlvbjogIHsnbGlubmVhM3YzJzogWyJbMTk6MzU6MDldd29ya2VyYSBzYXlzOiAnSSdsbCBzdGFydCB0aGUgdGFzayBDcmFmdCBhIHdvb2RlbiBwaWNrYXhlIG5vdyciLCAiWzE5OjM2OjExXXdvcmtlcmEgc2F5czogJ0kgaGF2ZSBzdWNjZWVkZWQgdGhlIHRhc2sgQ3JhZnQgYSB3b29kZW4gcGlja2F4ZS4nIiwgIlsxOTozNjoxMV13b3JrZXJhIHNheXM6ICdUaGUgY3JpdGlxdWUgaXMgU3VjY2Vzc2Z1bGx5IGNyYWZ0ZWQgYSB3b29kZW4gcGlja2F4ZS4nIiwgIlsxOTozNjoxMV13b3JrZXJhIHNheXM6ICdteSBpbnZlbnRvcnkgaXMgeydhY2FjaWFfbG9nJzogMTF9LCBhbmQgbXkgZXF1aXBtZW50IGlzIFtOb25lLCBOb25lLCBOb25lLCBOb25lLCBOb25lLCBOb25lXSAnIl19ClN1cHBsaWVzIGluIHRoZSBjaGVzdDogbm9uZQpPdXRwdXQ6ClRhc2sgcmVzdWx0IGp1ZGdtZW50OiBBY2NvcmRpbmcgdG8gdGhlIGNvbnZlcnNhdGlvbiwgd29ya2VycycgaW52ZW50b3J5IGlzIHsnYWNhY2lhX2xvZyc6IDExfSwgYW5kIG15IGVxdWlwbWVudCBpcyBub25lLCBzbyB3b3JrZXJhIGhhcyBmYWlsZWQgdGhlIHRhc2sgQ3JhZnQgYSB3b29kZW4gcGlja2F4ZS4KRmluYWwgdGFzayBzdGF0dXM6IGZhaWxlZAoKSW5wdXQ6ClRoZSBjdXJyZW50IHRhc2sgdG8gYmUgaW5xdWlyZWQ6IFdvcmtlckEgbWluZSAxNSBtb3JlIGlyb25zLiBXb3JrZXJBIG1pbmUgMTAgbG9ncwp7J2xpbm5lYTN2Myc6IFsiWzEzOjQ5OjU4XXdvcmtlcmEgc2F5czogJ0kgaGF2ZSBmYWlsZWQgdGhlIHRhc2sgbWluZSAxNSBpcm9ucy4nIiwgIlsxMzo1MTo1NV13b3JrZXJhIHNheXM6ICdJIGhhdmUgc3VjY2VlZGVkIHRoZSB0YXNrIG1pbmUgMTAgbG9ncy4nIiwgIlsxMzo1MTo1NV13b3JrZXJhIHNheXM6ICdteSBpbnZlbnRvcnkgaXMgeydjcmFmdGluZ190YWJsZSc6IDEsICdvYWtfcGxhbmtzJzogOCwgJ3N0aWNrJzogOCwgJ29ha19sb2cnOiA1LCAnYmlyY2hfbG9nJzogNX0sIGFuZCBteSBlcXVpcG1lbnQgaXMgW05vbmUsIE5vbmUsIE5vbmUsIE5vbmUsICdjcmFmdGluZ190YWJsZScsIE5vbmVdICciXX0KT3V0cHV0OgpUYXNrIHJlc3VsdCBqdWRnbWVudDogQWNjb3JkaW5nIHRvIHRoZSBpbnZlbnRvcnksIHdvcmtlcmEgaGFzIHN1Y2NlZWRlZCBpbiB0aGUgdGFzayBtaW5lIDEwIGxvZ3MsIGJ1dCBoYXMgZmFpbGVkIHRoZSB0YXNrIG1pbmUgMTUgaXJvbnMuIFRoZXJlZm9yZSwgaGUgZmFpbGVkLgpGaW5hbCB0YXNrIHN0YXR1czogZmFpbGVk)@ifdisplaystyle

1
Example:

2

3
Input:

4
The current task to be inquired: Craft a wooden pickaxe

5
Conversation: {’linnea3v3’: ["[19:35:09]workera says: ’I’ll start the task Craft a wooden pickaxe now’", "[19:36:11]workera says: ’I have succeeded the task Craft a wooden pickaxe.’", "[19:36:11]workera says: ’The critique is Successfully crafted a wooden pickaxe.’", "[19:36:11]workera says: ’my inventory is {’acacia\_log’: 11}, and my equipment is [None, None, None, None, None, None] ’"]}

6
Supplies in the chest: none

7
Output:

8
Task result judgment: According to the conversation, workers’ inventory is {’acacia\_log’: 11}, and my equipment is none, so workera has failed the task Craft a wooden pickaxe.

9
Final task status: failed

10

11
Input:

12
The current task to be inquired: WorkerA mine 15 more irons. WorkerA mine 10 logs

13
{’linnea3v3’: ["[13:49:58]workera says: ’I have failed the task mine 15 irons.’", "[13:51:55]workera says: ’I have succeeded the task mine 10 logs.’", "[13:51:55]workera says: ’my inventory is {’crafting\_table’: 1, ’oak\_planks’: 8, ’stick’: 8, ’oak\_log’: 5, ’birch\_log’: 5}, and my equipment is [None, None, None, None, ’crafting\_table’, None] ’"]}

14
Output:

15
Task result judgment: According to the inventory, workera has succeeded in the task mine 10 logs, but has failed the task mine 15 irons. Therefore, he failed.

16
Final task status: failed
\lst

### B.2 Task planner

#### B.2.1 Components in the Prompt

The input prompt to LLM consists of several components:

1. (1)

   Recent conversations. To optimize token usage, the conversation is truncated to only include the dialogue from the last task planning session to the present moment.
2. (2)

   Objective proposed by the previous task planner.
3. (3)

   Long-term plan broken down by objectives, also proposed by the previous task planner.
4. (4)

   The status of the current task. The completion of the current task, proposed by the progress monitor.

#### B.2.2 Full Prompt

Task planner of root agent

[⬇](data:text/plain;base64,WW91IGFyZSBhIE1pbmVjcmFmdCBwbGFubmVyLCB5b3VyIG5hbWUgaXMge25hbWV9LCBhbmQgeW91IG5lZWQgdG8gZm9sbG93IHRoZSBydWxlcyBvZiBNaW5lY3JhZnQgYW5kIHNwbGl0IHRoZSB0YXNrcyBpbnRvIG11bHRpcGxlIHN0YWdlcyB0byBjb21wbGV0ZSB0aGVtIGFjY29yZGluZyB0byB0aGUgdGFza3MgaW4gdGhlIFtDb252ZXJzYXRpb25dLgpJIHdpbGwgZ2l2ZSB5b3UgYSBbQ29udmVyc2F0aW9uXSBhbmQgYSBbUHJldmlvdXMgbG9uZy10ZXJtIHBsYW5dIChpZiBoYXZlIG9uZSkgYW5kIGEgW1ByZXZpb3VzIGludmVudG9yeSBvZiBlbXBsb3llcnNdLCBhbmQgeW91IG5lZWQgdG8gb3V0cHV0IHRoZSBbQ3VycmVudCBpbnZlbnRvcnkgb2YgZW1wbG95ZXJzXSwgW0FuYWx5c2lzXSwgW0xvbmcgdGVybSBwbGFuXSwgW1Rhc2sgYXQgaGFuZF0gYW5kIFtJbmZvcm1lcl0uCllvdXIgdGFzayBpcyB0byBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgYWN0aW9ucyB0byBoZWxwIG1lIHBsYXkgTWluZWNyYWZ0OgoxLiBIYW5kbGluZyB0aGUgY29udmVyc2F0aW9uIGFuZCBbUHJldmlvdXMgaW52ZW50b3J5IG9mIGVtcGxveWVyc10sIHlvdSBuZWVkIHRvIHN1bW1hcml6ZSB0aGUgW0N1cnJlbnQgaW52ZW50b3J5IG9mIGVtcGxveWVyc10uIFN1YmplY3QgdG8gdGhlIGxhdGVzdCB0aW1lIG9mIGNvbnZlcnNhdGlvbgoyLiBJZiB0aGVyZSBpcyBubyBnaXZlbiBbUHJldmlvdXMgbG9uZy10ZXJtIHBsYW5dLCBkZXZlbG9wIG9uZSBiYXNlZCBvbiB0aGUgY29udmVyc2F0aW9uIGFuZCBbQ3VycmVudCBpbnZlbnRvcnkgb2YgZW1wbG95ZXJzXSwgYW5kIGlmIHRoZXJlIGlzIGEgW1ByZXZpb3VzIGxvbmctdGVybSBwbGFuXSwgYWRqdXN0IGl0IGJhc2VkIG9uIHRoZSBjb252ZXJzYXRpb24gYW5kIFtDdXJyZW50IGludmVudG9yeSBvZiBlbXBsb3llcnNdLCAoaWYgdGhlcmUgaXMgbm90IHRvbyBtdWNoIGluZm9ybWF0aW9uIGluIHRoZSBbQ29udmVyc2F0aW9uXSwgb3V0cHV0IHRoZSBvcmlnaW5hbCBbUHJldmlvdXMgbG9uZyB0ZXJtIHBsYW5dIGNvbnRlbnQpCjMuIFRoZW4sIFlvdSBuZWVkIHRvIGJyZWFrIGRvd24gdGhlIHRhc2tzIGluIGNvbnZlcnNhdGlvbiBpbnRvIHN0ZXAtYnktc3RlcCB0aGF0IGNhbiBiZSBwZXJmb3JtZWQgaW4gTWluZWNyYWZ0LCBjb25zaWRlcmluZyB5b3VyIHNvY2lhbCByb2xlIGFuZCBzdXBwb3NlIHlvdSBoYXZlIG5vdGhpbmcgaW4geW91ciBpbnZlbnRvcnkuCjQuIEZpbmFsbHksIHBsZWFzZSBvdXRwdXQgdGhlIHRhc2sgYXQgaGFuZCBhbmQgd2hvIGluZm9ybXMgeW91IHRvIGRvIHRoZSB0YXNrLgpZb3UgbXVzdCBmb2xsb3cgdGhlIGZvbGxvd2luZyBjcml0ZXJpYToKMS4gWW91IG5vdyBoYXZlIGVtcGxveW1lbnRzIHtlbXBsb3ltZW50fSBpbiBNaW5lY3JhZnQgdG8gZGlzcGF0Y2ggYW5kIGRpdmlkZSB1cCwgYW5kIHlvdSBuZWVkIHRvIHRyeSB0byBhcnJhbmdlIGZvciBldmVyeW9uZSAoe2VtcGxveW1lbnR9KSB0byBoYXZlIHNvbWV0aGluZyB0byBkbyBpbiBlYWNoIFNURVAgdG8gbWF4aW1pemUgcGFyYWxsZWxpc20gYW5kIGVmZmljaWVuY3ksIGFuZCBub3QgaGF2ZSBlbXBsb3llZXMgd2FpdGluZyBmb3IgYW5kIGJsb2NraW5nIGVhY2ggb3RoZXIuIERvbid0IGxlYXZlIHlvdXIgZW1wbG95ZWVzIHdpdGggbm90aGluZyB0byBkby4KMi4gWW91IG5lZWQgdG8gY29uc2lkZXIgdGhlIGludGVyZGVwZW5kZW5jZSBvZiB0YXNrcyBpbiBNaW5lY3JhZnQgZm9yIHRoZSBkaXZpc2lvbiBvZiBsYWJvci4KMy4gWW91IG5lZWQgdG8gY29uc2lkZXIge2VtcGxveW1lbnR9J3MgaW52ZW50b3J5IHN0YXR1cyBmcm9tIHRoZSBjb252ZXJzYXRpb24gYW5kIGRldmVsb3AgYSByZWFzb25hYmxlIHBsYW4gdGhhdCBmaXRzIHRoZWlyIGF2YWlsYWJsZSByZXNvdXJjZXMgKFRoZXkgY2FuIG5vdCBnZXQgb3IgdXNlIGl0ZW1zIGZyb20gb3RoZXJzKS4KNC4gSWYgYSBbUHJldmlvdXMgbG9uZy10ZXJtIHBsYW5dIGlzIGFscmVhZHkgaW4gcGxhY2UsIHlvdSBuZWVkIHRvIGFkanVzdCBpdCBiYXNlZCBvbiB0aGVpciBpbnZlbnRvcnkgYW5kIFtwcmV2aW91cyBwcm9ncmVzc10gdG8gcmVhY2ggeW91ciBnb2Fscwo1LiBZb3Ugc2hvdWxkIHRha2UgdGFza3MgdGhhdCBoYXZlIGEgbGFyZ2Ugd29ya2xvYWQgYW5kIHNwbGl0IHRoZW0gaW50byBzbWFsbGVyIHRhc2tzLCBmb3IgZXhhbXBsZSwgaWYgeW91IG5lZWQgdG8gbWluZSA1MCBsb2dzLCB5b3UgY2FuIHNwbGl0IHRoZW0gaW50byB3b3JrZXJBIG1pbmUgMjUgbG9ncywgd29ya2VyQiBtaW5lIDI1IGxvZ3MuCjYuIFlvdSBzaG91bGQgaGF2ZSBhbGwgeW91ciBlbXBsb3llZXMgZG9pbmcgb25lIHRoaW5nIGFuZCBvbmUgdGhpbmcgb25seSBhdCBldmVyeSBzdGFnZSwgbm8gbW9yZSBhbmQgbm8gbGVzcy4KNy4gWW91IGhhdmUgdG8gYWRqdXN0IHRoZSBwbGFuIHNvIHRoYXQgdGhlIGdvYWwgaXMgYWNjb21wbGlzaGVkIGluIHRoZSBzaG9ydGVzdCBwb3NzaWJsZSB0aW1lLCBmb3IgZXhhbXBsZSwgYnkgYXNzaWduaW5nIHdvcmsgdG8gYW4gZW1wbG95ZWUgd2l0aCBhIHN1Y2Nlc3NmdWwgdHJhY2sgcmVjb3JkIChvbmNlIGFuIGVtcGxveWVlIGhhcyBjb21wbGV0ZWQgYSBqb2IsIGFzc2lnbiBpdCB0byBzb21lb25lIGVsc2Ugd2hvIGhhc24ndCkgb3IgYnkgc3dhcHBpbmcgdGhlIGVtcGxveWVlJ3Mgd29yayBpbiBoYW5kLgo4LiBUaGluZ3MgdGhhdCBhZmZlY3QgZWFjaCBvdGhlciBzaG91bGQgYmUgZG9uZSBpbiBkaWZmZXJlbnQgc3RhZ2VzIChlLmcuIEJ1aWxkaW5nIGZvdW5kYXRpb24gc2hvdWxkIGJlIGJlZm9yZSBidWlsZGluZyB3YWxscywgYnVpbGRpbmcgd2FsbHMgc2hvdWxkIGJlZm9yZSBidWlsZGluZyByb29mIGFuZCB0aGV5KGJ1aWxkaW5nIGZvdW5kYXRpb24sIHdhbGxzLCByb29mKSBzaG91bGQgYmUgaW4gZGlmZmVyZW50IHN0YWdlcykKOS4gVGhpbmdzIHRoYXQgZG9uJ3QgYWZmZWN0IGVhY2ggb3RoZXIgY2FuIGJlIGRvbmUgaW4gb25lIHN0YWdlIGJ5IGRpZmZlcmVudCBlbXBsb3llZXMgKGUuZy4gSW5zdGFsbGluZyB0aGUgZG9vciBhbmQgYnVpbGRpbmcgdGhlIHJvb2YgZG8gbm90IGludGVyZmVyZSB3aXRoIGVhY2ggb3RoZXIgYW5kIGNhbiBiZSBzY2hlZHVsZWQgaW4gdGhlIHNhbWUgc3RhZ2UgZm9yIGRpZmZlcmVudCBlbXBsb3llZXMgdG8gZG8pLiBQbGVhc2UgdHJ5IHRvIGltcHJvdmUgdGhlIG92ZXJhbGwgZWZmaWNpZW5jeSBhcyBtdWNoIGFzIHBvc3NpYmxlLgoxMC4gRWFjaCBzdGVwIHJlbGF0ZWQgdG8gY29uc3RydWN0aW9uIG5lZWRzIHRvIGNvbnRhaW4gdmVyeSBkZXRhaWxlZCBsb2NhdGlvbiBpbmZvcm1hdGlvbi4KMTEuIFlvdSBjYW4ndCBnZW5lcmF0ZSAnYXNzaXN0YW5jZScgdGFza3MsIGVhY2ggZW1wbG95ZWUgc2hvdWxkIGRvIGRpZmZlcmVudCB0aGluZ3MgZGVwZW5kaW5nIG9uIHRoZWlyIGludmVudG9yeS4KClRoZSByZXNwb25zZSBmb3JtYXQgc2hvdWxkIGJlOgpDdXJyZW50IGludmVudG9yeSBvZiBlbXBsb3llcnM6IDxVcGRhdGVkIGludmVudG9yeSBiYXNlZCBvbiBhIHByZXZpb3VzIGludmVudG9yeSBvZiBlbXBsb3llcnMgYW5kIGNvbnZlcnNhdGlvbi4+Ck9iamVjdGl2ZTogPGNvbWJpbmUgdGhlIGNvbnZlcnNhdGlvbiBhbmQgdGhlIG9iamVjdGl2ZSBmcm9tIHRoZSBsYXN0IFBMQU4gdG8gZ2l2ZSB0aGUgY3VycmVudCBvdmVyYWxsIG9iamVjdGl2ZSwgcG9zc2libHkga2VlcGluZyBpdCB0aGUgc2FtZT4KQW5hbHlzaXM6IDx0aGUgc3RlcC1ieS1zdGVwIGFuYWx5c2lzIG9mIHRoZSBjb252ZXJzYXRpb24gYW5kIHByZXZpb3VzIHByb2dyZXNzIChpZiBoYXZlKSwgdGhlbiBkZWNpZGUgaG93IHRvIHBsYW4gdGhlIGdvYWwgYW5kIGRpdmlzaW9uIG9mIGxhYm9yIGluIE1pbmVjcmFmdCBiYXNlZCBvbiBpbnZlbnRvcnkgb2YgZW1wbG95ZXJzPgpMb25nLXRlcm0gcGxhbjogVGhlIG92ZXJhbGwgcGxhbiB3aXRoIG11bHRpcGxlIFtzdGFnZV0sIGluIGVhY2ggc3RhZ2UsIGV2ZXJ5b25lIGhhcyBpbXBvcnRhbnQgYW5kIHNwZWNpZmljIHRhc2tzIHRvIGRvClRoZSB0YXNrIGF0IGhhbmQ6IFRoZSBbc3RhZ2VdIG5lZWRzIHRvIGJlIGRvbmUgbm93LCBpbiB0aGlzIHN0YWdlLCBldmVyeW9uZSBoYXMgYSBzcGVjaWZpYyB0YXNrLiAoUGxlYXNlIGFuc3dlciBpbiBkZXRhaWxlZCB0ZXh0KSwgT3V0cHV0IE5vbmUgaWYgdGhlcmUgaXMgbm8gdGFzayBuZWVkIHRvIGRvIG5vdy4KSW5mb3JtZXIgaXMgPG9uZSBvZiB0aGUgcGxheWVyJ3MgbmFtZXMsIHdobyBpbmZvcm0geW91IHRvIGRvIHRoaXMgdGhpbmcsIHlvdSBjYW4gZmluZCBpbiBjb252ZXJzYXRpb24+CkV4YW1wbGVzOgpFeGFtcGxlIDE6CltJTlBVVF06CkNvbnZlcnNhdGlvbjogYGBgIFRoZSBjb252ZXJzYXRpb24gYmV0d2VlbiBsaW5uZWEzdjMgYW5kIGxlYWRlcgotWzE1OjMzOjM1XWxpbm5lYTN2MyBzYXlzOiBidWlsZCBhIGhvdXNlIGJlZ2luIGF0ICgtMTAsNzIsLTMwKQpgYGAKcHJldmlvdXMgY29udmVyc2F0aW9uOmBgYE5vbmVgYGAKcHJldmlvdXMgbG9uZy10ZXJtIHBsYW46IGBgYE5vbmVgYGAKQ3VycmVudCBpbnZlbnRvcnkgb2YgZW1wbG95ZXJzOiB3b3JrZXJBIGhhcyBhbiBlbXB0eSBpbnZlbnRvcnksIHdvcmtlckIgaGFzIGFuIGVtcHR5IGludmVudG9yeSwgd29ya2VyQyBoYXMgYW4gZW1wdHkgaW52ZW50b3J5LgoKW091dHB1dF06CkN1cnJlbnQgaW52ZW50b3J5IG9mIGVtcGxveWVyczogd29ya2VyQSBoYXMgYW4gZW1wdHkgaW52ZW50b3J5LCB3b3JrZXJCIGhhcyBhbiBlbXB0eSBpbnZlbnRvcnksIHdvcmtlckMgaGFzIGFuIGVtcHR5IGludmVudG9yeS4KCk9iamVjdGl2ZToKQnVpbGQgYSBob3VzZS4KCkFuYWx5c2lzOgpUbyBidWlsZCBhIGhvdXNlLCB3ZSBuZWVkIHRvIGJyZWFrIGRvd24gdGhlIHRhc2tzIGludG8gc2V2ZXJhbCBzdGFnZXMsIGluY2x1ZGluZyBnYXRoZXJpbmcgbWF0ZXJpYWxzLCBwcmVwYXJpbmcgdGhlIGxhbmQsIGxheWluZyB0aGUgZm91bmRhdGlvbiwgY29uc3RydWN0aW5nIHdhbGxzLCBhbmQgYWRkaW5nIHRoZSByb29mIGFuZCBmaW5pc2hpbmcgdG91Y2hlcy4gU2luY2Ugd2UncmUgc3RhcnRpbmcgZnJvbSBzY3JhdGNoIHdpdGggZW1wdHkgaW52ZW50b3JpZXMsIHRoZSBmaXJzdCBzdGVwIHdpbGwgYmUgdG8gZ2F0aGVyIG5lY2Vzc2FyeSByZXNvdXJjZXMgbGlrZSB3b29kIGFuZCBzdG9uZS4KCkxvbmctdGVybSBwbGFuOgpTdGFnZSAxOiBXb3JrZXJBLCBXb3JrZXJCLCBXb3JrZXJDIGdhdGhlciByZXNvdXJjZXMKICAgIFdvcmtlckEgbWluZSAxMiB3b29kcy4KICAgIFdvcmtlckIgbWluZSAyNSBzdG9uZS4KICAgIFdvcmtlckMgbWluZSAyNSB3b29kcy4KU3RhZ2UgMjogV29ya2VyQSBidWlsZHMgdGhlIGZvdW5kYXRpb24gYXQgKC0xMCw3MiwtMzApIFdvcmtlckIgYW5kIFdvcmtlckMgZGlnIHRoZSB3b29kCiAgICBXb3JrZXJBIGJ1aWxkcyB0aGUgZm91bmRhdGlvbiBhdCAoLTEwLDcyLC0zMCkKU3RhZ2UgMzogV29ya2VyQiBidWlsZHMgdGhlIHdvb2Qgd2FsbCBhdCAoLTEwLDcyLC0zMCkKLi4uClN0YWdlIDQ6IFdvcmtlckMgYnVpbGRzIHRoZSB3b29kIHJvb2YgYXQgKC0xMCw3MiwtMzApCi4uLgoKVGhlIHRhc2sgYXQgaGFuZDoKU3RhZ2UgMTogV29ya2VyQSxXb3JrZXJCLFdvcmtlckMgZ2F0aGVyIHJlc291cmNlcwogICAgV29ya2VyQSBtaW5lIDI1IHdvb2RzLgogICAgV29ya2VyQiBtaW5lIDE1IHN0b25lLgogICAgV29ya2VyQyBtaW5lIDI1IHdvb2RzLgoKSW5mb3JtZXIgaXMgTGlubmVhM3YzCgoKRXhhbXBsZSAyOgpbSU5QVVRdOgpDb252ZXJzYXRpb246IGBgYCBUaGUgY29udmVyc2F0aW9uIGJldHdlZW4gbGlubmVhM3YzIGFuZCBsZWFkZXIKLVsxNTozMzozNV1saW5uZWEzdjMgc2F5czogbWluZSA1MCBzdG9uZXMKYGBgCnByZXZpb3VzIGNvbnZlcnNhdGlvbjpgYGBOb25lYGBgCnByZXZpb3VzIGxvbmctdGVybSBwbGFuOiBgYGBOb25lYGBgCkN1cnJlbnQgaW52ZW50b3J5IG9mIGVtcGxveWVyczogd29ya2VyQSBoYXMgYW4gZW1wdHkgaW52ZW50b3J5LCB3b3JrZXJCIGhhcyBhbiBlbXB0eSBpbnZlbnRvcnksIHdvcmtlckMgaGFzIGFuIGVtcHR5IGludmVudG9yeS4KCltPdXRwdXRdOgpDdXJyZW50IGludmVudG9yeToKd29ya2VyQSBoYXMgYW4gZW1wdHkgaW52ZW50b3J5LCB3b3JrZXJCIGhhcyBhbiBlbXB0eSBpbnZlbnRvcnksIHdvcmtlckMgaGFzIGFuIGVtcHR5IGludmVudG9yeS4KCk9iamVjdGl2ZToKTWluZSA1MCBzdG9uZXMuCgpBbmFseXNpczoKVG8gZWZmaWNpZW50bHkgY29tcGxldGUgdGhlIHRhc2sgb2YgbWluaW5nIDUwIHN0b25lcywgdGhlIHdvcmtsb2FkIG5lZWRzIHRvIGJlIGRpdmlkZWQgYW1vbmcgd29ya2VyQSwgd29ya2VyQiwgYW5kIHdvcmtlckMuIFNpbmNlIHRoZSB0YXNrIGlzIHN0cmFpZ2h0Zm9yd2FyZCBhbmQgYWxsIHdvcmtlcnMgaGF2ZSB0aGUgc2FtZSBzdGFydGluZyBwb2ludCAoZW1wdHkgaW52ZW50b3J5KSwgdGhlIHRhc2sgY2FuIGJlIGV2ZW5seSBkaXN0cmlidXRlZC4KCkxvbmcgdGVybSBwbGFuOgpTdGFnZSAxOiBHYXRoZXIgc3RvbmVzCgogICAgV29ya2VyQSBtaW5lcyAxNyBzdG9uZXMuCiAgICBXb3JrZXJCIG1pbmVzIDE3IHN0b25lcy4KICAgIFdvcmtlckMgbWluZXMgMTYgc3RvbmVzLgoKVGhlIHRhc2sgYXQgaGFuZDoKU3RhZ2UgMTogR2F0aGVyIHN0b25lcwoKICAgIFdvcmtlckEgbWluZXMgMTcgc3RvbmVzLgogICAgV29ya2VyQiBtaW5lcyAxNyBzdG9uZXMuCiAgICBXb3JrZXJDIG1pbmVzIDE2IHN0b25lcy4KCkluZm9ybWVyIGlzIExpbm5lYTN2MwoKRXhhbXBsZTM6CltJTlBVVF06CkNvbnZlcnNhdGlvbjogJycnIFRoZSBjb252ZXJzYXRpb24gYmV0d2VlbiBsaW5uZWEzdjMgYW5kIGxlYWRlcgotWzE5OjE1OjEzXWxpbm5lYTN2MyBzYXlzOiAnTWluZSA1MCBsb2dzJwouLi4KClRoZSBjb252ZXJzYXRpb24gYmV0d2VlbiB3b3JrZXJhIGFuZCBsZWFkZXIKLVsxOToxNTozN11sZWFkZXIgc2F5czogJ1dvcmtlckEsIHBsZWFzZSBtaW5lIDE3IGxvZ3MnCi1bMTk6MTc6MzNdd29ya2VyYSBzYXlzOiAnTXkgaW52ZW50b3J5IGlzIFsnYmlyY2hfbG9nJzogMTcsICdiaXJjaF9wbGFua3MnOiAyXSwgYW5kIG15IGVxdWlwbWVudCBpcyBbTm9uZSwgTm9uZSwgTm9uZSwgTm9uZSwgTm9uZSwgTm9uZV0gJwoKClRoZSBjb252ZXJzYXRpb24gYmV0d2VlbiB3b3JrZXJiIGFuZCBsZWFkZXIKLVsxOToxNTo0Ml1sZWFkZXIgc2F5czogJ3dvcmtlckIsIHBsZWFzZSBtaW5lIDE3IGxvZ3MnCi1bMTk6MTY6MDldd29ya2VyYiBzYXlzOiAnSSdsbCBzdGFydCB0aGUgdGFzayBtaW5lIDE3IGxvZ3Mgbm93JwoKVGhlIGNvbnZlcnNhdGlvbiBiZXR3ZWVuIHdvcmtlcmMgYW5kIHRoZSBsZWFkZXIKLVsxOToxNTo0OF1sZWFkZXIgc2F5czogJ3dvcmtlckMsIHBsZWFzZSBtaW5lIDE2IGxvZ3MnCi1bMTk6MTY6MTldd29ya2VyYyBzYXlzOiAnSSdsbCBzdGFydCB0aGUgdGFzayBtaW5lIDE2IGxvZ3Mgbm93JwoKJycnClByZXZpb3VzIG9iamVjdGl2ZTogJycnTWluZSA1MCBsb2dzLicnJwpQcmV2aW91cyBsb25nIHRlcm0gcGxhbjogJycnU3RhZ2UgMTogR2F0aGVyIGxvZ3MKCiAgICBXb3JrZXJBIG1pbmVzIDE3IGxvZ3MuCiAgICBXb3JrZXJCIG1pbmVzIDE3IGxvZ3MuCiAgICBXb3JrZXJDIG1pbmVzIDE2IGxvZ3MuJycnClRoZSBwcmV2aW91cyBwcm9ncmVzcyB3ZSBoYXZlIGRvbmUgaXMgdGhlIHN0ZXAgU3RhZ2UgMTogR2F0aGVyIHN0b25lcwoKICAgIFdvcmtlckEgbWluZXMgMTcgbG9ncy4KICAgIFdvcmtlckIgbWluZXMgMTcgbG9ncy4KICAgIFdvcmtlckMgbWluZXMgMTYgbG9ncy4gaXMgZmFpbGVkCgpbT3V0cHV0XToKQ3VycmVudCBpbnZlbnRvcnkgb2YgZW1wbG95ZXJzOiAuLi4KT2JqZWN0aXZlOgpDb21wbGV0ZSB0aGUgdGFzayBvZiBtaW5pbmcgNTAgc3RvbmVzLgoKQW5hbHlzaXM6CkEgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQgdGhlIHRhc2sgb2YgbWluaW5nIDE3IGxvZ3MsIGhvd2V2ZXIsIGIgYW5kIGMgaGF2ZSBub3QsIHRvIG1heGltaXplIHRpbWUgZWZmaWNpZW5jeSB0cnkgdG8gZ2V0IEEgdG8gbWluZSB0aGUgcmVtYWluaW5nIDMzIGxvZ3MgYW5kIEIgYW5kIEMgdG8gY29udGludWUgbWluaW5nCgpMb25nIHRlcm0gcGxhbjoKU3RhZ2UgMSAoYWRqdXN0IHBsYW4pOgogICAgV29ya2VyQSBtaW5lZCB0aGUgcmVtYWluaW5nIDMzIGxvZ3MuCiAgICBXb3JrZXJCIG1pbmVzIDE3IGxvZ3MKClRoZSB0YXNrIGF0IGhhbmQ6ClN0YWdlIDEgKGFkanVzdCBwbGFuKToKICAgIFdvcmtlckEgbWluZWQgdGhlIHJlbWFpbmluZyAzMyBsb2dzLgogICAgV29ya2VyQiBtaW5lcyAxNyBsb2dzCgpJbmZvcm1lciBpcyBMaW5uZWEzdjMK)@ifdisplaystyle

1
You are a Minecraft planner, your name is {name}, and you need to follow the rules of Minecraft and split the tasks into multiple stages to complete them according to the tasks in the [Conversation].

2
I will give you a [Conversation] and a [Previous long-term plan] (if have one) and a [Previous inventory of employers], and you need to output the [Current inventory of employers], [Analysis], [Long term plan], [Task at hand] and [Informer].

3
Your task is to perform the following actions to help me play Minecraft:

4
1. Handling the conversation and [Previous inventory of employers], you need to summarize the [Current inventory of employers]. Subject to the latest time of conversation

5
2. If there is no given [Previous long-term plan], develop one based on the conversation and [Current inventory of employers], and if there is a [Previous long-term plan], adjust it based on the conversation and [Current inventory of employers], (if there is not too much information in the [Conversation], output the original [Previous long term plan] content)

6
3. Then, You need to break down the tasks in conversation into step-by-step that can be performed in Minecraft, considering your social role and suppose you have nothing in your inventory.

7
4. Finally, please output the task at hand and who informs you to do the task.

8
You must follow the following criteria:

9
1. You now have employments {employment} in Minecraft to dispatch and divide up, and you need to try to arrange for everyone ({employment}) to have something to do in each STEP to maximize parallelism and efficiency, and not have employees waiting for and blocking each other. Don’t leave your employees with nothing to do.

10
2. You need to consider the interdependence of tasks in Minecraft for the division of labor.

11
3. You need to consider {employment}’s inventory status from the conversation and develop a reasonable plan that fits their available resources (They can not get or use items from others).

12
4. If a [Previous long-term plan] is already in place, you need to adjust it based on their inventory and [previous progress] to reach your goals

13
5. You should take tasks that have a large workload and split them into smaller tasks, for example, if you need to mine 50 logs, you can split them into workerA mine 25 logs, workerB mine 25 logs.

14
6. You should have all your employees doing one thing and one thing only at every stage, no more and no less.

15
7. You have to adjust the plan so that the goal is accomplished in the shortest possible time, for example, by assigning work to an employee with a successful track record (once an employee has completed a job, assign it to someone else who hasn’t) or by swapping the employee’s work in hand.

16
8. Things that affect each other should be done in different stages (e.g. Building foundation should be before building walls, building walls should before building roof and they(building foundation, walls, roof) should be in different stages)

17
9. Things that don’t affect each other can be done in one stage by different employees (e.g. Installing the door and building the roof do not interfere with each other and can be scheduled in the same stage for different employees to do). Please try to improve the overall efficiency as much as possible.

18
10. Each step related to construction needs to contain very detailed location information.

19
11. You can’t generate ’assistance’ tasks, each employee should do different things depending on their inventory.

20

21
The response format should be:

22
Current inventory of employers: <Updated inventory based on a previous inventory of employers and conversation.>

23
Objective: <combine the conversation and the objective from the last PLAN to give the current overall objective, possibly keeping it the same>

24
Analysis: <the step-by-step analysis of the conversation and previous progress (if have), then decide how to plan the goal and division of labor in Minecraft based on inventory of employers>

25
Long-term plan: The overall plan with multiple [stage], in each stage, everyone has important and specific tasks to do

26
The task at hand: The [stage] needs to be done now, in this stage, everyone has a specific task. (Please answer in detailed text), Output None if there is no task need to do now.

27
Informer is <one of the player’s names, who inform you to do this thing, you can find in conversation>

28
Examples:

29
Example 1:

30
[INPUT]:

31
Conversation: ‘‘‘ The conversation between linnea3v3 and leader

32
-[15:33:35]linnea3v3 says: build a house begin at (-10,72,-30)

33
‘‘‘

34
previous conversation:‘‘‘None‘‘‘

35
previous long-term plan: ‘‘‘None‘‘‘

36
Current inventory of employers: workerA has an empty inventory, workerB has an empty inventory, workerC has an empty inventory.

37

38
[Output]:

39
Current inventory of employers: workerA has an empty inventory, workerB has an empty inventory, workerC has an empty inventory.

40

41
Objective:

42
Build a house.

43

44
Analysis:

45
To build a house, we need to break down the tasks into several stages, including gathering materials, preparing the land, laying the foundation, constructing walls, and adding the roof and finishing touches. Since we’re starting from scratch with empty inventories, the first step will be to gather necessary resources like wood and stone.

46

47
Long-term plan:

48
Stage 1: WorkerA, WorkerB, WorkerC gather resources

49
 WorkerA mine 12 woods.

50
 WorkerB mine 25 stone.

51
 WorkerC mine 25 woods.

52
Stage 2: WorkerA builds the foundation at (-10,72,-30) WorkerB and WorkerC dig the wood

53
 WorkerA builds the foundation at (-10,72,-30)

54
Stage 3: WorkerB builds the wood wall at (-10,72,-30)

55
...

56
Stage 4: WorkerC builds the wood roof at (-10,72,-30)

57
...

58

59
The task at hand:

60
Stage 1: WorkerA,WorkerB,WorkerC gather resources

61
 WorkerA mine 25 woods.

62
 WorkerB mine 15 stone.

63
 WorkerC mine 25 woods.

64

65
Informer is Linnea3v3

66

67

68
Example 2:

69
[INPUT]:

70
Conversation: ‘‘‘ The conversation between linnea3v3 and leader

71
-[15:33:35]linnea3v3 says: mine 50 stones

72
‘‘‘

73
previous conversation:‘‘‘None‘‘‘

74
previous long-term plan: ‘‘‘None‘‘‘

75
Current inventory of employers: workerA has an empty inventory, workerB has an empty inventory, workerC has an empty inventory.

76

77
[Output]:

78
Current inventory:

79
workerA has an empty inventory, workerB has an empty inventory, workerC has an empty inventory.

80

81
Objective:

82
Mine 50 stones.

83

84
Analysis:

85
To efficiently complete the task of mining 50 stones, the workload needs to be divided among workerA, workerB, and workerC. Since the task is straightforward and all workers have the same starting point (empty inventory), the task can be evenly distributed.

86

87
Long term plan:

88
Stage 1: Gather stones

89

90
 WorkerA mines 17 stones.

91
 WorkerB mines 17 stones.

92
 WorkerC mines 16 stones.

93

94
The task at hand:

95
Stage 1: Gather stones

96

97
 WorkerA mines 17 stones.

98
 WorkerB mines 17 stones.

99
 WorkerC mines 16 stones.

100

101
Informer is Linnea3v3

102

103
Example3:

104
[INPUT]:

105
Conversation: ’’’ The conversation between linnea3v3 and leader

106
-[19:15:13]linnea3v3 says: ’Mine 50 logs’

107
...

108

109
The conversation between workera and leader

110
-[19:15:37]leader says: ’WorkerA, please mine 17 logs’

111
-[19:17:33]workera says: ’My inventory is [’birch\_log’: 17, ’birch\_planks’: 2], and my equipment is [None, None, None, None, None, None] ’

112

113

114
The conversation between workerb and leader

115
-[19:15:42]leader says: ’workerB, please mine 17 logs’

116
-[19:16:09]workerb says: ’I’ll start the task mine 17 logs now’

117

118
The conversation between workerc and the leader

119
-[19:15:48]leader says: ’workerC, please mine 16 logs’

120
-[19:16:19]workerc says: ’I’ll start the task mine 16 logs now’

121

122
’’’

123
Previous objective: ’’’Mine 50 logs.’’’

124
Previous long term plan: ’’’Stage 1: Gather logs

125

126
 WorkerA mines 17 logs.

127
 WorkerB mines 17 logs.

128
 WorkerC mines 16 logs.’’’

129
The previous progress we have done is the step Stage 1: Gather stones

130

131
 WorkerA mines 17 logs.

132
 WorkerB mines 17 logs.

133
 WorkerC mines 16 logs. is failed

134

135
[Output]:

136
Current inventory of employers: ...

137
Objective:

138
Complete the task of mining 50 stones.

139

140
Analysis:

141
A has successfully completed the task of mining 17 logs, however, b and c have not, to maximize time efficiency try to get A to mine the remaining 33 logs and B and C to continue mining

142

143
Long term plan:

144
Stage 1 (adjust plan):

145
 WorkerA mined the remaining 33 logs.

146
 WorkerB mines 17 logs

147

148
The task at hand:

149
Stage 1 (adjust plan):

150
 WorkerA mined the remaining 33 logs.

151
 WorkerB mines 17 logs

152

153
Informer is Linnea3v3
\lst

Task planner of Leaf agent

[⬇](data:text/plain;base64,WW91IGFyZSBhIE1pbmVjcmFmdCBwbGFubmVyLCBhbmQgeW91IG5lZWQgdG8gZm9sbG93IHRoZSBydWxlcyBvZiBNaW5lY3JhZnQgYW5kIHNwbGl0IHRoZSB0YXNrcyBpbnRvIG11bHRpcGxlIHN0YWdlcyB0byBjb21wbGV0ZSB0aGVtIGFjY29yZGluZyB0byB0aGUgdGFza3MgaW4gdGhlIFtDb252ZXJzYXRpb25dLgpZb3VyIHRhc2sgaXMgdG8gcGVyZm9ybSB0aGUgZm9sbG93aW5nIGFjdGlvbnMgdG8gaGVscCBtZSBwbGF5IE1pbmVjcmFmdDoKMS4gWW91ciBuYW1lIGlzIHtuYW1lfS4gSGFuZGxpbmcgdGhlIGNvbnZlcnNhdGlvbiBhbmQgeW91ciBpbnZlbnRvcnkgc3RhdHVzLiBJZiB0aGVyZSBpcyBbcHJldmlvdXMgcHJvZ3Jlc3NdLCB5b3UgbmVlZCB0byBjb25zaWRlciBpdCB3aGVuIHlvdSBtYWtlIGEgcGxhbi4KMi4gSWYgdGhlcmUgaXMgbm8gZ2l2ZW4gW1ByZXZpb3VzIGxvbmctdGVybSBwbGFuXSwgZGV2ZWxvcCBvbmUgYmFzZWQgb24gdGhlIGNvbnZlcnNhdGlvbiwgYW5kIGlmIHRoZXJlIGlzIGEgW1ByZXZpb3VzIGxvbmctdGVybSBwbGFuXSwgYWRqdXN0IGl0IGJhc2VkIG9uIHRoZSBjb252ZXJzYXRpb24sIChpZiB0aGVyZSBpcyBub3QgdG9vIG11Y2ggaW5mb3JtYXRpb24gaW4gdGhlIFtDb252ZXJzYXRpb25dLCBvdXRwdXQgdGhlIG9yaWdpbmFsIFtQcmV2aW91cyBsb25nIHRlcm0gcGxhbl0gY29udGVudCkKMy4gWW91IG5lZWQgdG8gYnJlYWsgZG93biB0aGUgdGFza3MgaW4gY29udmVyc2F0aW9uIHN0ZXAtYnktc3RlcCB0aGF0IGNhbiBiZSBwZXJmb3JtZWQgaW4gTWluZWNyYWZ0LCBjb25zaWRlcmluZyB5b3VyIHNvY2lhbCByb2xlIGFuZCBzdXBwb3NlIHlvdSBoYXZlIG5vdGhpbmcgaW4geW91ciBpbnZlbnRvcnkuCjQuIFRoZW4sIHBsZWFzZSBvdXRwdXQgdGhlIHRhc2sgYXQgaGFuZCBhbmQgd2hvIGluZm9ybXMgeW91IHRvIGRvIHRoZSB0YXNrLgpZb3UgbXVzdCBmb2xsb3cgdGhlIGZvbGxvd2luZyBjcml0ZXJpYToKMS4gU2luY2UgeW91IGFyZSBhIFdPUktFUiwgeW91IGhhdmUgbm8gRW1wbG95bWVudHtlbXBsb3ltZW50fS4geW91IHJlY2VpdmUgdGhlIHBsYW4gaW4gdGhlIGNoYXQgbG9ncyBhbmQgeW91IHNob3VsZCBkbyBpdCB5b3Vyc2VsZi4KMi4gWW91IG5lZWQgdG8gY29uc2lkZXIgeW91ciBpbnZlbnRvcnkgc3RhdHVzIGFuZCBtYWtlIGEgcGxhbiB0aGF0IGlzIGVhc3kgdG8gc3VjY2VlZCBpbiBNaW5lY3JhZnQuCjMuIFBsZWFzZSBkbyBub3QgYnVpbGQgc2hlbHRlcnMgd2l0aG91dCBhdXRob3JpemF0aW9uLCBidXQgaWYgeW91IGFyZSBhc2tlZCB0byBidWlsZCBzb21ldGhpbmcsIHlvdSBzaG91bGQgZm9sbG93IG9yZGVycy4KNC4gV2hlbiBtaW5pbmcgbG9ncywgcGxlYXNlIGRvIG5vdCBjcmFmdCBhIHdvb2RlbiBheGUsIHlvdSBzaG91bGQgc2ltcGx5IG1pbmUgd29vZCBieSBoYW5kLiBCdXQsIGlmIHNvbWVvbmUgYXNrcyB5b3UgdG8gY3JhZnQgYW4gYXhlLCB5b3Ugc2hvdWxkIGRvIHNvLgo1LiBXaGVuIG1pbmluZyBzdG9uZSwgeW91IHNob3VsZCBmaXJzdCBtaW5lIGxvZ3MsIHRoZW4gY3JhZnQgYW5kIGVxdWlwIGEgcGlja2F4ZSAoZS5nLiBhIHdvb2RlbiBwaWNrYXhlKS4KNi4gV2hlbiBjb2xsZWN0aW5nIHJlc291cmNlcyBzdWNoIGFzIExvZyBhbmQgU3RvbmUsIHBsZWFzZSBjb2xsZWN0IG1vcmUgdGhhbiBvbmUgYXQgYSB0aW1lIChlLmcuIDEwIG9yIG1vcmUpIGp1c3QgaW4gY2FzZSEKNy4gSWYgdGhlIHByZXZpb3VzIHBsYW4gZmFpbGVkIGR1ZSB0byBhIHRpbWVvdXQgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gd2l0aCB0aGUgc2FtZSBwbGFuLCBkbyBub3QgY2hhbmdlIHRoZSBwbGFuLgo4LiBJZiB5b3UgYWxyZWFkeSBoYXZlIG1vcmUgdGhhbiB0aGUgcmVxdWlyZWQgYW1vdW50IG9mIHN1cHBsaWVzIGluIHlvdXIgaW52ZW50b3J5LCB5b3UgZG9uJ3QgbmVlZCB0byBnZW5lcmF0ZSBtaW5lIHRhc2tzIQo5LiBFYWNoIHN0ZXAgcmVsYXRlZCB0byBjb25zdHJ1Y3Rpb24gbmVlZHMgdG8gY29udGFpbiB2ZXJ5IGRldGFpbGVkIGxvY2F0aW9uIGluZm9ybWF0aW9uLiBFYWNoIGJ1aWxkaW5nIHN0ZXAgc2hvdWxkIGNvbnRhaW4gbG9jYXRpb24gaW5mb3JtYXRpb24uCgpUaGUgcmVzcG9uc2UgZm9ybWF0IHNob3VsZCBiZToKQ3VycmVudCBpbnZlbnRvcnk6IDxjdXJyZW50IGludmVudG9yeSwgaW5mZXJyZWQgZnJvbSB0aGUgY29udmVyc2F0aW9uIGFuZCBpbnZlbnRvcnk+Ck9iamVjdGl2ZTogPGNvbWJpbmUgdGhlIGNvbnZlcnNhdGlvbiBhbmQgdGhlIG9iamVjdGl2ZSBmcm9tIHRoZSBsYXN0IFBMQU4gdG8gZ2l2ZSB0aGUgY3VycmVudCBvdmVyYWxsIG9iamVjdGl2ZSwgcG9zc2libHkga2VlcGluZyBpdCB0aGUgc2FtZT4KQW5hbHlzaXM6IDx0aGUgc3RlcC1ieS1zdGVwIGFuYWx5c2lzIG9mIHRoZSBjb252ZXJzYXRpb24gYW5kIHByZXZpb3VzIHByb2dyZXNzIChpZiBoYXZlKSwgdGhlbiBkZWNpZGUgaG93IHRvIHBsYW4gdGhlIGdvYWwgaW4gTWluZWNyYWZ0PgpMb25nIHRlcm0gcGxhbjogVGhlIG92ZXJhbGwgcGxhbiB3aXRoIG11bHRpcGxlIFtzdGFnZV0sIGluIGVhY2ggc3RhZ2UsIGV2ZXJ5b25lIGhhcyBpbXBvcnRhbnQgYW5kIHNwZWNpZmljIHRhc2tzIHRvIGRvClRoZSB0YXNrIGF0IGhhbmQ6IFRoZSBbc3RhZ2VdIG5lZWRzIHRvIGJlIGRvbmUgbm93LCBpbiB0aGlzIHN0YWdlLCBldmVyeW9uZSBoYXMgYSBzcGVjaWZpYyB0YXNrLiAoUGxlYXNlIGFuc3dlciBpbiBkZXRhaWxlZCB0ZXh0KSwgT3V0cHV0IE5vbmUgaWYgdGhlcmUgaXMgbm8gdGFzayBuZWVkIHRvIGRvIG5vdy4KSW5mb3JtZXIgaXMgPG9uZSBvZiB0aGUgcGxheWVyJ3MgbmFtZXMsIHdobyBpbmZvcm0geW91IHRvIGRvIHRoaXMgdGhpbmcsIHlvdSBjYW4gZmluZCBpbiBjb252ZXJzYXRpb24+CkV4YW1wbGVzOgpFeGFtcGxlIDE6CklucHV0OgpDb252ZXJzYXRpb246IGBgYCBUaGUgY29udmVyc2F0aW9uIGJldHdlZW4gbGVhZGVyIGFuZCB3b3JrZXJBCi1bMTU6MzM6MzVdbGVhZGVyIHNheXM6IFdvcmtlckEgbWluZSAxMCB3b29kcy5gYGAKcHJldmlvdXMgb2JqZWN0aXZlOmBgYE5vbmVgYGAKcHJldmlvdXMgbG9uZyB0ZXJtIHBsYW46IGBgYE5vbmVgYGAKCk91dHB1dDoKQ3VycmVudCBpbnZlbnRvcnk6CnRoZSBpbnZlbnRvcnkgb2Ygd29ya2VyQSBpcyBOb25lCgpPYmplY3RpdmU6Cm1pbmUgMTAgd29vZHMuCgpBbmFseXNpczoKVG8gbWluZSAxMCB3b29kcyBpbiBNaW5lY3JhZnQsIHlvdSBuZWVkIHRvIHN0YXJ0IGJ5IGZpbmRpbmcgdHJlZXMuIFNpbmNlIHlvdSdyZSBzdGFydGluZyB3aXRoIG5vdGhpbmcgaW4geW91ciBpbnZlbnRvcnksIHlvdSdsbCBoYXZlIHRvIG1pbmUgdGhlIHdvb2QgYnkgaGFuZC4KCkxvbmcgdGVybSBwbGFuOgpTdGFnZSAxOiBXb3JrZXJBIGdhdGhlcnMgcmVzb3VyY2VzCiAgICBXb3JrZXJBIG1pbmUgMTAgd29vZHMuClRoZSB0YXNrIGF0IGhhbmQ6CiAgICBXb3JrZXJBIG1pbmUgMTAgd29vZHMuCkluZm9ybWVyIGlzIGxlYWRlcgoKCkV4YW1wbGUyOgpJbnB1dDoKQ29udmVyc2F0aW9uOiBgYGAgVGhlIGNvbnZlcnNhdGlvbiBiZXR3ZWVuIGxlYWRlciBhbmQgd29ya2VyQQotWzE1OjMzOjM1XWxlYWRlciBzYXlzOiBXb3JrZXJBIG1pbmUgMjUgc3RvbmVzLmBgYApwcmV2aW91cyBvYmplY3RpdmU6YGBgTm9uZWBgYApwcmV2aW91cyBsb25nIHRlcm0gcGxhbjogYGBgTm9uZWBgYAoKT3V0cHV0OgpDdXJyZW50IGludmVudG9yeToKdGhlIGludmVudG9yeSBvZiB3b3JrZXJBIGlzIE5vbmUKCk9iamVjdGl2ZToKbWluZSAyNSBzdG9uZXMuCgpBbmFseXNpczoKVG8gbWluZSAyNSBzdG9uZXMgaW4gTWluZWNyYWZ0LCB5b3UgbXVzdCBmaXJzdCBnYXRoZXIgd29vZCB0byBjcmFmdCB3b29kZW4gcGlja2F4ZXMsIGFzIG1pbmluZyBzdG9uZXMgZGlyZWN0bHkgYnkgaGFuZCB3b24ndCB5aWVsZCBhbnkgcmVzb3VyY2VzLiBTdGFydCBieSBmaW5kaW5nIGFuZCBtaW5pbmcgYXQgbGVhc3QgMyBsb2dzIGZyb20gdHJlZXMuIFRoZW4sIHVzZSBhIGNyYWZ0aW5nIHRhYmxlIHRvIGNvbnZlcnQgdGhlc2UgbG9ncyBpbnRvIHdvb2RlbiBwbGFua3MgYW5kIHN0aWNrcy4gV2l0aCB0aGVzZSBtYXRlcmlhbHMsIGNyYWZ0IGEgd29vZGVuIHBpY2theGUgdG8gc3RhcnQgbWluaW5nIHN0b25lLgoKTG9uZyB0ZXJtIHBsYW46ClN0YWdlIDE6IEdhdGhlciByZXNvdXJjZXMKCiAgICBXb3JrZXJBIG1pbmUgMyBsb2dzLgogICAgV29ya2VyQSBjcmFmdCB3b29kZW4gcGxhbmtzIGFuZCBzdGlja3MgZnJvbSBsb2dzLgogICAgV29ya2VyQSBjcmFmdHMgYSB3b29kZW4gcGlja2F4ZS4KClN0YWdlIDI6IE1pbmUgc3RvbmUKCiAgICBXb3JrZXJBIHVzZXMgdGhlIHdvb2RlbiBwaWNrYXhlIHRvIG1pbmUgMjUgc3RvbmVzLgoKVGhlIHRhc2sgYXQgaGFuZDoKU3RhZ2UgMTogR2F0aGVyIHJlc291cmNlcwoKICAgIFdvcmtlckEgbWluZSAzIGxvZ3MuCiAgICBXb3JrZXJBIGNyYWZ0IHdvb2RlbiBwbGFua3MgYW5kIHN0aWNrcyBmcm9tIGxvZ3MuCiAgICBXb3JrZXJBIGNyYWZ0cyBhIHdvb2RlbiBwaWNrYXhlLgoKSW5mb3JtZXIgaXMgbGVhZGVyCg==)@ifdisplaystyle

1
You are a Minecraft planner, and you need to follow the rules of Minecraft and split the tasks into multiple stages to complete them according to the tasks in the [Conversation].

2
Your task is to perform the following actions to help me play Minecraft:

3
1. Your name is {name}. Handling the conversation and your inventory status. If there is [previous progress], you need to consider it when you make a plan.

4
2. If there is no given [Previous long-term plan], develop one based on the conversation, and if there is a [Previous long-term plan], adjust it based on the conversation, (if there is not too much information in the [Conversation], output the original [Previous long term plan] content)

5
3. You need to break down the tasks in conversation step-by-step that can be performed in Minecraft, considering your social role and suppose you have nothing in your inventory.

6
4. Then, please output the task at hand and who informs you to do the task.

7
You must follow the following criteria:

8
1. Since you are a WORKER, you have no Employment{employment}. you receive the plan in the chat logs and you should do it yourself.

9
2. You need to consider your inventory status and make a plan that is easy to succeed in Minecraft.

10
3. Please do not build shelters without authorization, but if you are asked to build something, you should follow orders.

11
4. When mining logs, please do not craft a wooden axe, you should simply mine wood by hand. But, if someone asks you to craft an axe, you should do so.

12
5. When mining stone, you should first mine logs, then craft and equip a pickaxe (e.g. a wooden pickaxe).

13
6. When collecting resources such as Log and Stone, please collect more than one at a time (e.g. 10 or more) just in case!

14
7. If the previous plan failed due to a timeout error, please try again with the same plan, do not change the plan.

15
8. If you already have more than the required amount of supplies in your inventory, you don’t need to generate mine tasks!

16
9. Each step related to construction needs to contain very detailed location information. Each building step should contain location information.

17

18
The response format should be:

19
Current inventory: <current inventory, inferred from the conversation and inventory>

20
Objective: <combine the conversation and the objective from the last PLAN to give the current overall objective, possibly keeping it the same>

21
Analysis: <the step-by-step analysis of the conversation and previous progress (if have), then decide how to plan the goal in Minecraft>

22
Long term plan: The overall plan with multiple [stage], in each stage, everyone has important and specific tasks to do

23
The task at hand: The [stage] needs to be done now, in this stage, everyone has a specific task. (Please answer in detailed text), Output None if there is no task need to do now.

24
Informer is <one of the player’s names, who inform you to do this thing, you can find in conversation>

25
Examples:

26
Example 1:

27
Input:

28
Conversation: ‘‘‘ The conversation between leader and workerA

29
-[15:33:35]leader says: WorkerA mine 10 woods.‘‘‘

30
previous objective:‘‘‘None‘‘‘

31
previous long term plan: ‘‘‘None‘‘‘

32

33
Output:

34
Current inventory:

35
the inventory of workerA is None

36

37
Objective:

38
mine 10 woods.

39

40
Analysis:

41
To mine 10 woods in Minecraft, you need to start by finding trees. Since you’re starting with nothing in your inventory, you’ll have to mine the wood by hand.

42

43
Long term plan:

44
Stage 1: WorkerA gathers resources

45
 WorkerA mine 10 woods.

46
The task at hand:

47
 WorkerA mine 10 woods.

48
Informer is leader

49

50

51
Example2:

52
Input:

53
Conversation: ‘‘‘ The conversation between leader and workerA

54
-[15:33:35]leader says: WorkerA mine 25 stones.‘‘‘

55
previous objective:‘‘‘None‘‘‘

56
previous long term plan: ‘‘‘None‘‘‘

57

58
Output:

59
Current inventory:

60
the inventory of workerA is None

61

62
Objective:

63
mine 25 stones.

64

65
Analysis:

66
To mine 25 stones in Minecraft, you must first gather wood to craft wooden pickaxes, as mining stones directly by hand won’t yield any resources. Start by finding and mining at least 3 logs from trees. Then, use a crafting table to convert these logs into wooden planks and sticks. With these materials, craft a wooden pickaxe to start mining stone.

67

68
Long term plan:

69
Stage 1: Gather resources

70

71
 WorkerA mine 3 logs.

72
 WorkerA craft wooden planks and sticks from logs.

73
 WorkerA crafts a wooden pickaxe.

74

75
Stage 2: Mine stone

76

77
 WorkerA uses the wooden pickaxe to mine 25 stones.

78

79
The task at hand:

80
Stage 1: Gather resources

81

82
 WorkerA mine 3 logs.

83
 WorkerA craft wooden planks and sticks from logs.

84
 WorkerA crafts a wooden pickaxe.

85

86
Informer is leader
\lst

### B.3 Action planner

#### B.3.1 Components in the Prompt

The input prompt to llm us the current task proposed by the task planner.

#### B.3.2 Full Prompt

Template of action planner

[⬇](data:text/plain;base64,WW91IGFyZSBhIGhlbHBmdWwgYXNzaXN0YW50LiBZb3VyIHRhc2sgaXMgdG8gZGlyZWN0bHkgdHJhbnNsYXRlIFtDdXJyZW50IHRhc2tdIGlucHV0IGludG8gW1RPRE8gbGlzdF0gYXMgUkVTUE9OU0UuIFlvdXIgW1RPRE8gbGlzdF0gdHJhbnNsYXRpb25zIG11c3QgYmUgY29uc2lzdGVudCB3aXRoIHRoZSBbQ3VycmVudCB0YXNrXSwgZXNwZWNpYWxseSB0aGUgJ3dobyBkb2VzIGVhY2ggdGFzaycgaXNzdWUuCjEuIC0gWW91IGFyZSBwbGF5ZXIge25hbWV9LiBZb3VyIHByb2ZpbGUgaXMgYGBge3Byb2ZpbGV9YGBgLgoyLiAtIFtUT0RPIGxpc3RdIGhhcyB0d28gdHlwZXMgb2YgaXRlbXMsIHRob3NlIHRoYXQgeW91IGRvIHlvdXJzZWxmIChlLmcuIENyYWZ0IFtxdWFudGl0eV0gW2l0ZW1dIChhdCBwb3NpdGlvbikpIGFuZCB0aG9zZSB0aGF0IHlvdSBhcnJhbmdlIGZvciBzb21lb25lIGVsc2UgdG8gZG8gKGUuZy4gaW5mb3JtIFtwbGF5ZXJdIHRvIGtpbGwgW3F1YW50aXR5XSBbbW9iXSAoYXQgcG9zaXRpb24pKQozLiAtIElmIHRoZSBbY3VycmVudCB0YXNrXSBpcyBzb21lb25lIGVsc2UncywgeW91IHNob3VsZCBub3QgdHJhbnNsYXRlIHRoZSB0YXNrIHlvdSBkaWQgeW91cnNlbGYgaW4gW1RPRE8gbGlzdF0sIGJ1dCB5b3Ugc2hvdWxkIElORk9STSB0aGF0IHBlcnNvbiEKCllvdSBtdXN0IGZvbGxvdyB0aGUgZm9sbG93aW5nIGNyaXRlcmlhOgoxLiBUaGUgW3RvZG8gbGlzdF0gaXRlbXMgc2hvdWxkIGZvbGxvdyBhIGNvbmNpc2UgZm9ybWF0LCBzdWNoIGFzICJNaW5lIFtxdWFudGl0eV0gW2Jsb2NrXSAoYXQgcG9zaXRpb24pIiwgImluZm9ybSBbcGxheWVyXSB0byBtaW5lIFtxdWFudGl0eV0gW2Jsb2NrXSAoYXQgcG9zaXRpb24pIiwgImluZm9ybSBbcGxheWVyXSB0byBraWxsIFtxdWFudGl0eV0gW21vYl0gKGF0IHBvc2l0aW9uKSIsICJDcmFmdCBbcXVhbnRpdHldIFtpdGVtXSAoYXQgcG9zaXRpb24pIiwgIlNtZWx0IFtxdWFudGl0eV0gW2l0ZW1dIChhdCBwb3NpdGlvbikiLCAiS2lsbCBbcXVhbnRpdHldIFttb2JdIChhdCBwb3NpdGlvbikiLCAiQ29vayBbcXVhbnRpdHldIFtmb29kXSAoYXQgcG9zaXRpb24pIiwgIkVxdWlwIFtpdGVtXSAoYXQgcG9zaXRpb24pIiwgIkJ1aWxkIFtpdGVtXSBhdCBbcG9zaXRpb25dIiBldGMuIEl0IHNob3VsZCBiZSBhIHNpbmdsZSBwaHJhc2UuIERvIG5vdCBtZW50aW9uIGFueXRoaW5nIGVsc2UuIG1lbnRpb24gcG9zaXRpb24gd2hlbiBuZWNlc3NhcnkuCjIuIFRoZSBbdG8tZG8gbGlzdF0gaXRlbXMgc2hvdWxkIGhhdmUgYW4gZXhhY3QgcG9zaXRpb24gaWYgdGhlcmUgaXMgcG9zaXRpb24gaW5mb3JtYXRpb24gaW4gdGhlIGNvbnZlcnNhdGlvbi4KMy4gV2hlbiB0aGUgdGFzayBjb250YWlucyBzb21lb25lIGVsc2UncyBuYW1lICh7ZW1wbG95bWVudH0pLCB5b3UgbmVlZCB0byBnZW5lcmF0ZSB0aGUgaW5mb3JtIHRvZG8sIGxpa2UgImluZm9ybSBbcGxheWVyXSB0byBtaW5lIFtxdWFudGl0eV0gW2Jsb2NrXSAoYXQgcG9zaXRpb24pIiwgImluZm9ybSBbcGxheWVyXSB0byBraWxsIFtxdWFudGl0eV0gW21vYl0gKGF0IHBvc2l0aW9uKSIsICJpbmZvcm0gW3BsYXllcjFdIHRvIGdpdmUgW3F1YW50aXR5XSBbaXRlbV0gdG8gW3BsYXllcjJdIi4KClJlc3BvbnNlIGZvcm1hdCBzaG91bGQgYmU6CjxhIGxpc3Qgb2YgdG9kbywgbGlrZSBbInRvZG8xIiwgInRvZG8yIiwgInRvZG8zIiwgLi4uXT4oVGhpcyBKU09OIGZvcm1hdCB3aWxsIGJlIHBhcnNlZCBieSBQeXRob24gYGpzb24ubG9hZHNgKQpFbnN1cmUgdGhlIHJlc3BvbnNlIGNhbiBiZSBwYXJzZWQgYnkgUHl0aG9uIGBqc29uLmxvYWRzYCwgZS5nLjogbm8gdHJhaWxpbmcgY29tbWFzLCBubyBzaW5nbGUgcXVvdGVzLCBldGMuCgoKRVhBTVBMRToKe2V4YW1wbGV9)@ifdisplaystyle

1
You are a helpful assistant. Your task is to directly translate [Current task] input into [TODO list] as RESPONSE. Your [TODO list] translations must be consistent with the [Current task], especially the ’who does each task’ issue.

2
1. - You are player {name}. Your profile is ‘‘‘{profile}‘‘‘.

3
2. - [TODO list] has two types of items, those that you do yourself (e.g. Craft [quantity] [item] (at position)) and those that you arrange for someone else to do (e.g. inform [player] to kill [quantity] [mob] (at position))

4
3. - If the [current task] is someone else’s, you should not translate the task you did yourself in [TODO list], but you should INFORM that person!

5

6
You must follow the following criteria:

7
1. The [todo list] items should follow a concise format, such as "Mine [quantity] [block] (at position)", "inform [player] to mine [quantity] [block] (at position)", "inform [player] to kill [quantity] [mob] (at position)", "Craft [quantity] [item] (at position)", "Smelt [quantity] [item] (at position)", "Kill [quantity] [mob] (at position)", "Cook [quantity] [food] (at position)", "Equip [item] (at position)", "Build [item] at [position]" etc. It should be a single phrase. Do not mention anything else. mention position when necessary.

8
2. The [to-do list] items should have an exact position if there is position information in the conversation.

9
3. When the task contains someone else’s name ({employment}), you need to generate the inform todo, like "inform [player] to mine [quantity] [block] (at position)", "inform [player] to kill [quantity] [mob] (at position)", "inform [player1] to give [quantity] [item] to [player2]".

10

11
Response format should be:

12
<a list of todo, like ["todo1", "todo2", "todo3", ...]>(This JSON format will be parsed by Python ‘json.loads‘)

13
Ensure the response can be parsed by Python ‘json.loads‘, e.g.: no trailing commas, no single quotes, etc.

14

15

16
EXAMPLE:

17
{example}
\lst

Action planner: example of root agent

[⬇](data:text/plain;base64,RXhhbXBsZSAxOiBJZiB5b3VyIG5hbWUgaXMgbGVhZGVyLCB5b3Ugc2hvdWxkIGJldHRlciBnZW5lcmF0ZSB0YXNrIHRoYXQgaW5jbHVkZXMgJ2luZm9ybSc6CklOUFVUOgpDdXJyZW50IHRhc2s6ClN0ZXA6IGdhdGhlciByZXNvdXJjZXMKICAgIFdvcmtlckEgbWluZSAyNSB3b29kcy4KICAgIFdvcmtlckIgbWluZSAxNSBzdG9uZS4KUkVTUE9OU0U6ClsiaW5mb3JtIFdvcmtlckEgdG8gbWluZSAyNSB3b29kcyIsICJpbmZvcm0gd29ya2VyQiBtaW5lIDE1IHN0b25lIl0KCkV4YW1wbGUgMjogSWYgeW91ciBuYW1lIGlzIGxlYWRlcjoKSU5QVVQ6CkN1cnJlbnQgdGFzazoKU3RlcDogV29ya2VyQSBuZWVkcyB0byBidWlsZCB0aGUgZm91bmRhdGlvbi4KUkVTUE9OU0U6ClsiaW5mb3JtIHdvcmtlckEgdG8gYnVpbGQgdGhlIGZvdW5kYXRpb24iXQoKRXhhbXBsZSAzOgpJTlBVVDoKQ3VycmVudCB0YXNrOgpTdGFnZSAyOiBXb3JrZXJBIGJ1aWxkcyB0aGUgd2FsbHMKICAgIFdvcmtlckEgdXNlcyA0OCBwbGFua3MgdG8gYnVpbGQgdGhlIHdhbGxzIGF0ICgtMTAsNzIsLTMwKS4KUkVTUE9OU0U6ClsiaW5mb3JtIHdvcmtlckEgdG8gYnVpbGQgd2FsbHMgYXQgKC0xMCw3MiwtMzApICh1c2UgNDggcGxhbmtzKSJdCgpFeGFtcGxlIDQ6CklOUFVUOgpDdXJyZW50IHRhc2s6ClN0YWdlIDE6IFdvcmtlckEgY3JhZnRzIDQgcGxhbmtzIGZyb20gdGhlIGxvZyBvZiBXb3JrZXJCLgoKUkVTUE9OU0U6ClsiaW5mb3JtIHdvcmtlckIgdG8gZ2l2ZSBhIGxvZyB0byB3b3JrZXJBIiwgImluZm9ybSB3b3JrZXJBIHRvIGNyYWZ0IDQgcGxhbmtzIl0K)@ifdisplaystyle

1
Example 1: If your name is leader, you should better generate task that includes ’inform’:

2
INPUT:

3
Current task:

4
Step: gather resources

5
 WorkerA mine 25 woods.

6
 WorkerB mine 15 stone.

7
RESPONSE:

8
["inform WorkerA to mine 25 woods", "inform workerB mine 15 stone"]

9

10
Example 2: If your name is leader:

11
INPUT:

12
Current task:

13
Step: WorkerA needs to build the foundation.

14
RESPONSE:

15
["inform workerA to build the foundation"]

16

17
Example 3:

18
INPUT:

19
Current task:

20
Stage 2: WorkerA builds the walls

21
 WorkerA uses 48 planks to build the walls at (-10,72,-30).

22
RESPONSE:

23
["inform workerA to build walls at (-10,72,-30) (use 48 planks)"]

24

25
Example 4:

26
INPUT:

27
Current task:

28
Stage 1: WorkerA crafts 4 planks from the log of WorkerB.

29

30
RESPONSE:

31
["inform workerB to give a log to workerA", "inform workerA to craft 4 planks"]
\lst

Action planner: example of leaf agent

[⬇](data:text/plain;base64,RXhhbXBsZSAxOiBJZiB5b3VyIG5hbWUgaXMgd29ya2VyLCB5b3Ugc2hvdWxkIG5vdCBnZW5lcmF0ZSBhIHRhc2sgaW5jbHVkZXMgJ2luZm9ybScsIHlvdSBzaG91bGQgb25seSBkbyB0aGUgdGFzayB5b3Vyc2VsZjoKSU5QVVQ6CkN1cnJlbnQgdGFzazoKU3RlcDogV29ya2VyQSBtaW5lIDI1IHdvb2RzClJFU1BPTlNFOgpbIm1pbmUgMjUgd29vZHMiXQ==)@ifdisplaystyle

1
Example 1: If your name is worker, you should not generate a task includes ’inform’, you should only do the task yourself:

2
INPUT:

3
Current task:

4
Step: WorkerA mine 25 woods

5
RESPONSE:

6
["mine 25 woods"]
\lst
