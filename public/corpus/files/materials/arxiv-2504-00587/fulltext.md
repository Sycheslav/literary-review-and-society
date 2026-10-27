---
id: arxiv-2504-00587-text
type: material
title: 'AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems'
work_id: arxiv-2504-00587
source_url: https://arxiv.org/html/2504.00587v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: b6d28336054c403d6f109dc393d3c549ce9c9f58a839cc7b599fe341e915b938
---

> Источник: [https://arxiv.org/html/2504.00587v2](https://arxiv.org/html/2504.00587v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems

Yingxuan Yang
†
Email: [zoeyyx@sjtu.edu.cn](mailto:zoeyyx@sjtu.edu.cn)
  
Huacan Chai1
Email: [fatcat@sjtu.edu.cn](mailto:fatcat@sjtu.edu.cn)
  
Shuai Shao
Email: [wnzhang@sjtu.edu.cn](mailto:wnzhang@sjtu.edu.cn)
  
Yuanyi Song
  
Siyuan Qi
  
Renting Rui
  
Weinan Zhang
†
Affiliation: Shanghai Jiao Tong University, SII

###### Abstract

The rapid advancement of Large Language Models (LLMs) has catalyzed the development of multi-agent systems, where multiple LLM-based agents collaborate to solve complex tasks. However, existing systems predominantly rely on centralized coordination, which introduces scalability bottlenecks, limits adaptability, and creates single points of failure. Additionally, concerns over privacy and proprietary knowledge sharing hinder cross-organizational collaboration, leading to siloed expertise. To address these challenges, we propose AgentNet, a decentralized, Retrieval-Augmented Generation (RAG)-based framework that enables LLM-based agents to autonomously evolve their capabilities and collaborate efficiently in a Directed Acyclic Graph (DAG)-structured network. Unlike traditional multi-agent systems that depend on static role assignments or centralized control, AgentNet allows agents to specialize dynamically, adjust their connectivity, and route tasks without relying on predefined workflows.
AgentNet’s core design is built upon several key innovations: (1) Fully Decentralized Paradigm: Removing the central orchestrator, allowing agents to coordinate and specialize autonomously, fostering fault tolerance and emergent collective intelligence. (2) Dynamically Evolving Graph Topology: Real-time adaptation of agent connections based on task demands, ensuring scalability and resilience.
(3) Adaptive Learning for Expertise Refinement: A retrieval-based memory system that enables agents to continuously update and refine their specialized skills.
By eliminating centralized control, AgentNet enhances fault tolerance, promotes scalable specialization, and enables privacy-preserving collaboration across organizations. Through decentralized coordination and minimal data exchange, agents can leverage diverse knowledge sources while safeguarding sensitive information. Experimental results demonstrate that AgentNet outperforms traditional centralized multi-agent systems, significantly improving efficiency, adaptability, and scalability in dynamic environments, making it a promising foundation for next-generation autonomous, privacy-respecting multi-agent ecosystems.

|  |
| --- |
|  |

*Keywords* LLM-based Multi-Agent Systems (MAS) $\cdot$
Decentralized MAS $\cdot$
RAG $\cdot$
Natural Evolution $\cdot$
DAG

## 1 Introduction

Recently, large language models (LLMs) have demonstrated remarkable capabilities in various domains, ranging from basic text understanding to complex reasoning and multimodal integration ([OpenAI et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib1); [Touvron et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib2); [Yang et al., 2025](https://arxiv.org/html/2504.00587v2#bib.bib3)). Consequently, LLM-based agents have exhibited exceptional performance in numerous tasks, including scientific discovery ([Gottweis et al., 2025](https://arxiv.org/html/2504.00587v2#bib.bib4)), automated reasoning ([Putta et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib5)), and website operations ([Zhou et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib6)). However, due to the lack of collective intelligence and collaboration, LLM-based Single Agents struggle to address the complex challenges encountered in the real world.
By leveraging collective intelligence through parallel decision-making or workflow collaboration, LLM-based Multi-Agent Systems (MAS) have emerged as a promising framework for tackling complex real-world problems ([Guo et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib7); [Sun et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib8); [Yang et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib9)). However, most MAS following the workflow collaboration paradigm rely heavily on a centralized controller or a static, predefined workflow to allocate tasks among agents with fixed roles ([Chen et al., 2023a](https://arxiv.org/html/2504.00587v2#bib.bib10); [Hong et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib11); [Wu et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib12); [Wang et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib13); [Ye et al., 2025](https://arxiv.org/html/2504.00587v2#bib.bib14)). While such designs simplify orchestration, they also introduce inherent constraints—including limited scalability, a single point of failure, and challenges to cross-organizational collaboration due to privacy and proprietary knowledge concerns.

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/compare.png)


Figure 1: The illustration contrasts Pre-Defined Multi-Agents (hierarchical, static, with centralized control and single point of failure) against Self-Evolving Agents/AgentNet (adaptive, decentralized, and fault-tolerant with dynamic expertise development).

A more critical drawback arises from the inability of these systems to adapt to real-time fluctuations in agent performance or rapidly changing task requirements. Relying on a central controller inflates deployment complexity and restricts dynamic role reassignment, rendering the system vulnerable when the controller fails or becomes overloaded. Furthermore, rigid role definitions prevent agents from flexibly leveraging their full expertise in dynamic environments, ultimately undermining both efficiency and scalability. Taken together, these limitations highlight the need for more decentralized, fault-tolerant approaches that support dynamic task allocation, enhance adaptability, and safeguard privacy across organizational boundaries.

Beyond the scalability and failure-tolerance issues previously discussed, centralized architectures become even more problematic when organizations attempt to collaborate at scale ([Yang et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib9); [Shi et al., 2025](https://arxiv.org/html/2504.00587v2#bib.bib15)). Each institution—be it an enterprise, research lab, or government agency—typically holds proprietary expertise, sensitive data, or both. In a centralized setup, concerns over data ownership, privacy regulations, and inconsistent governance often create barriers that prevent free exchange of knowledge. As a result, LLM-based agents contributed by multiple organizations remain siloed, unable to fully capitalize on each other’s specialized capabilities or datasets. This fragmentation not only hampers collective intelligence but also highlights the urgency of developing secure, decentralized collaboration mechanisms. By enabling each participant to maintain and share only the minimal necessary information, these mechanisms address data confidentiality requirements while still allowing for a richer, more collaborative multi-agent ecosystem.

To address these challenges in multi-agent systems, we propose AgentNet, a novel framework designed to foster adaptive agent evolution, optimize task coordination, and preserve privacy. By eliminating the reliance on a central orchestrator, AgentNet enables agents to dynamically reconfigure their connections and redistribute tasks, forming a self-organizing, fault-tolerant architecture. Within this architecture, tasks are efficiently routed via a Directed Acyclic Graph (DAG) ([Kahn, 1962](https://arxiv.org/html/2504.00587v2#bib.bib16); [Ahuja et al., 1993](https://arxiv.org/html/2504.00587v2#bib.bib17)), which supports flexible collaboration and prevents cyclic dependencies.

Unlike traditional MAS frameworks that fix each agent’s role, AgentNet incorporates a retrieval-based RAG ([Lewis et al., 2020](https://arxiv.org/html/2504.00587v2#bib.bib18); [Gao et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib19); [Zhou et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib6)) memory mechanism to refine agent expertise over time. Each agent maintains a limited-capacity pool of successful task trajectories; when a new task arises, it retrieves the most relevant trajectories through few-shot learning, thus improving decision-making. To prevent memory overflow, agents autonomously prune less pertinent trajectories, ensuring the retention of valuable knowledge. This dynamic specialization strategy not only streamlines task allocation and agent adaptation but also supports a highly scalable and privacy-respecting environment for multi-agent collaboration.

AgentNet’s core design is built upon several key innovations:

- •

  Fully Decentralized Paradigm:
  By removing the need for a central orchestrator, AgentNet fosters emergent collective intelligence. Decision-making authority is distributed across all agents, thereby eliminating single points of failure and allowing each agent to coordinate, delegate, and specialize as conditions evolve. This approach leads to a self-organizing and fault-tolerant architecture that can rapidly respond to new tasks and unforeseen challenges. This decentralized setup also encourages emergent collective intelligence—in other words, agents can collectively discover and refine optimal strategies rather than waiting for instructions from a central controller.
- •

  Dynamically Evolving Graph Topology:
  AgentNet employs a network structure in which both nodes (agents) and edges (agent-to-agent connections) adapt in real time based on task demands and agent performance. Rather than relying on fixed workflows, the system continuously reconfigures its topology to optimize information flow and task distribution, ensuring scalability and resilience in complex, changing environments.
- •

  Adaptive Learning Mechanism for Expertise Refinement:
  AgentNet’s third innovation is its retrieval-based memory system, enabling agents to capture and update knowledge from successful task trajectories. This mechanism continuously refines each agent’s specialized skills without altering the network’s topology, allowing agents to avoid over-reliance on outdated information and sustain high performance in dynamic scenarios.

Moreover, each of these three innovations inherently enhances data privacy. By eliminating a central orchestrator, every agent stores and processes knowledge locally, sharing only minimal task-relevant metadata. The dynamic graph topology further confines data flow to necessary agent-to-agent interactions, reducing the exposure of sensitive information. Meanwhile, the retrieval-based memory mechanism restricts how much and how long data is retained, pruning outdated trajectories so that only high-value knowledge persists. Together, these design choices safeguard privacy and intellectual property, particularly crucial for cross-organizational collaborations.

Our experimental evaluation shows that AgentNet significantly outperforms traditional LLM-based multi-agent frameworks in dynamic environments, demonstrating improved task efficiency, specialization stability, and adaptive learning speed. These results highlight the effectiveness of decentralized evolutionary coordination in large-scale AI ecosystems.

## 2 Related Work

### 2.1 LLM-based Multi-Agent Systems

The development of LLM-based multi-agent systems (LaMAS) ([Yang et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib9)) has advanced rapidly in recent years. Early frameworks, such as AutoGen ([Wu et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib12)) and MetaGPT ([Hong et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib11)), made significant strides in establishing foundational architectures for orchestrating multiple LLM agents through structured workflows. AutoGen provided a flexible framework for defining agent interactions, while MetaGPT incorporated software development principles to enhance collaboration. These centralized frameworks proved effective for managing multi-agent interactions. However, they also faced inherent challenges, including limited scalability, single points of failure, and difficulty in dynamically adapting to evolving tasks or incorporating new expertise.

In response to these limitations, more recent frameworks such as AgentScope ([Gao et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib20)) and MegaAgent ([Wang et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib13)) have focused on improving robustness and scalability. AgentScope introduced modular design patterns to enhance system reliability, while MegaAgent employed hierarchical structures to scale agent interactions. Although these frameworks offer improvements, they still operate under centralized control paradigms, with a master agent delegating tasks, which continues to lead to scalability bottlenecks and single points of failure. Moreover, existing LaMAS implementations predominantly utilize single-source LLMs, lacking the integration of heterogeneous models. Their workflows are typically static, unable to dynamically allocate resources based on task complexity, further constraining adaptability.

In contrast, AgentNet introduces a novel decentralized approach, addressing these challenges by enabling agents to autonomously refine their expertise and dynamically allocate resources. AgentNet supports scalable, fault-tolerant collaboration without reliance on a central orchestrator, overcoming the limitations of centralized frameworks.

### 2.2 Evolutionary Agent Systems

Inspired by natural evolution, recent researchers have explored evolutionary approaches to automate and optimize agent behaviors and workflows in LaMAS. Existing efforts can be broadly categorized into the following areas:

- •

  Prompt Evolution and Optimization – Techniques such as PromptBreeder ([Fernando et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib21)), DsPy ([Khattab et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib22)) and AgentPrune ([Zhang et al., 2024a](https://arxiv.org/html/2504.00587v2#bib.bib23)) apply evolutionary algorithms to iteratively refine prompt generation, improving task performance through better input design.
- •

  Inter-Agent Topology Optimization – Systems like GPTSwarm ([Zhuge et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib24)), DyLAN ([Liu et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib25)), and G-Designer ([Zhang et al., 2024b](https://arxiv.org/html/2504.00587v2#bib.bib26)) focus on evolving the structural organization of agent interactions. These works aim to optimize communication patterns, task allocation, and collaboration efficiency within multi-agent networks.
- •

  Agent Role and Persona Specialization – Frameworks such as AgentVerse and MorphAgent ([Chen et al., 2023b](https://arxiv.org/html/2504.00587v2#bib.bib27); [Lu et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib28)) refine agent roles and profiles, enabling more effective specialization and coordination among agents in complex tasks.

While these evolutionary approaches have shown promise, they primarily focus on individual agent adaptation rather than collective coordination. Additionally, they still tend to operate within centralized control structures, which limits their scalability and dynamic adaptability. Recent frameworks like AgentSquare ([Shang et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib29)) and AFlow ([Zhang et al., 2024c](https://arxiv.org/html/2504.00587v2#bib.bib30)) have begun to formalize automated design processes for agentic systems, improving system-level orchestration and workflow automation. Another key direction is self-adaptive agent architectures, where agents adjust their strategies in real-time based on feedback and accumulated experience. For example, EvoMAC ([Hu et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib31)) combines reinforcement learning with evolutionary algorithms to optimize agent decision-making and policy updates.

However, these approaches are often limited to single-agent adaptation and lack mechanisms for decentralized specialization and coordination across large-scale agent collectives. While EvoMAC and other systems focus on optimizing individual agents, they are not designed for scalable, multi-agent, decentralized collaboration.
In contrast, AgentNet integrates evolutionary learning with decentralized control, enabling heterogeneous agents to dynamically evolve their roles, adapt their strategies in real-time, and collaborate flexibly across a large-scale multi-agent system. This integration of evolutionary learning with decentralized control makes AgentNet a more suitable framework for real-time, adaptive, and scalable multi-agent collaboration.

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/main6.png)


Figure 2: Illutration of AgentNet. Initially, agents are fully connected and equipped with executors and routers. The system eliminates the need for a central controller, using a DAG for dynamic task routing and agents leveraging RAG pools and few-shot learning. In the evolved phase, the network adapts with agents developing private trajectories and diversified abilities, ensuring scalability, fault tolerance, and continuous evolution of expertise..

## 3 Methodology

### 3.1 Overview of AgentNet Architecture

Unlike traditional MAS frameworks with fixed agent roles and rigid workflows using central coordinators, AgentNet creates a privacy-preserving, collective intelligence multi-agent system with high scalability and failure-tolerance by leveraging an innovative framework, consisting of a fully decentralized network architecture, a dynamic task allocation mechanism, and an adaptive agent learning method.

We begin with a brief introduction of AgentNet, including notation and basic architectures of agents employed.

Formally, we define AgentNet as a tuple $\mathcal{G}=(\boldsymbol{\mathcal{A}},\boldsymbol{\mathcal{E}})$, where $\boldsymbol{\mathcal{A}}=\{a\_{1},a\_{2},...,a\_{n}\}$ represents the set of autonomous agents, $\boldsymbol{\mathcal{C}}=\{c\_{1},c\_{2},...,c\_{n}\}$ represents each agent’s ability, and $\boldsymbol{\mathcal{E}}\subseteq\boldsymbol{\mathcal{A}}\times\boldsymbol{\mathcal{A}}$ represents the communication connections between agents, specifically $e\_{i,j}\in\boldsymbol{\mathcal{E}}$ referring to a unidirectional connection from Agent $a\_{i}$ to Agent $a\_{j}$.

For each agent $a\_{i}\in\boldsymbol{\mathcal{A}}$ contains two key components. $rou\_{i}$ is an agent router, responsible for analyzing received routing queries and making routing decisions. $exe\_{i}$ is an agent executor, responsible for responding to executing queries through operations and tools.

The two components mentioned above are underpinned by a substantial LLM that leverages its extensive knowledge and understanding to solve specific problems. Furthermore, both $rou\_{i}$ and $exe\_{i}$ in $a\_{i}$ maintain fixed-size memory modules $M\_{i}^{rou}$ and $M\_{i}^{exe}$, respectively, providing $a\_{i}$ with powerful adaptive evolutionary capabilities by storing and utilizing the agent’s experiences through the RAG mechanism.

For optimization, AgentNet will be given a series of tasks denoted as $\boldsymbol{T}=\{t\_{1},t\_{2},...,t\_{M}\}$ to resolve, along with an evaluation function $Eval(\cdot)$. The optimization goal of AgentNet is to maximize the evaluated score by $Eval(\cdot)$ for the solution output by AgentNet, specifically optimizing $\boldsymbol{\mathcal{A}}$ and $\boldsymbol{\mathcal{E}}$, as the following formula:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{G^{\*}}=(\boldsymbol{\mathcal{A^{\*}}},\boldsymbol{\mathcal{E^{\*}}})=\mathop{\arg\max}\limits\_{\boldsymbol{\mathcal{A}},\boldsymbol{\mathcal{E}}}\ Eval(\mathcal{G},\boldsymbol{T}).$$ |  | (1) |

The innovation of AgentNet emerges from the synergistic integration of three key mechanisms: (1) AgentNet realized a fully decentralized network architecture by distributing decision-making authority across all agents, leading to a high failure tolerance and privacy-preserving MAS. (2) By using a dynamic task allocation mechanism, AgentNet can optimize workload distribution based on agent capabilities and the current system state flexibly. (3) The adaptive learning in AgentNet can achieve continuous specialization of agents, making the whole MAS more scalable and adaptive. Therefore, we can create a self-organizing system capable of handling complex tasks while preserving privacy and adapting to changing environments.

Algorithm 1  AgentNet System

1:
Task set $T=\{t\_{1},t\_{2},\ldots,t\_{M}\}$

2:
Optimized network $\mathcal{G}^{\*}=(\boldsymbol{\mathcal{A}}^{\*},\boldsymbol{\mathcal{E}}^{\*})$

3:
Initialize $\boldsymbol{\mathcal{A}}=\{a\_{1},a\_{2},\dots,a\_{n}\}$, $\boldsymbol{\mathcal{E}}$, $\boldsymbol{\mathcal{C}}=\{c\_{1},c\_{2},\dots,c\_{n}\}$, $w\_{0}$, $M\_{i}^{rou}$ and $M\_{i}^{exe}$ $\forall a\_{i}\in\boldsymbol{\mathcal{A}}$

4:
for each task $t\_{m+1}\in T$ do

5:
  // 1. Task allocation and processing

6:
  $c\_{t\_{m+1}}\leftarrow\Phi(o\_{t\_{m+1}})$, $a\_{curr}\leftarrow\arg\max\_{a\_{i}\in\mathcal{A}\_{m}}\text{sim}(c\_{t\_{m+1}},c\_{i}^{m})$

7:
  $task\\_state\leftarrow(o\_{t\_{m+1}},\emptyset,p\_{t\_{m+1}})$, $visited\leftarrow\emptyset$, $finished\leftarrow false$

8:
  while not $finished$ and $a\_{curr}\notin visited$ do

9:
   $visited\leftarrow visited\cup\{a\_{curr}\}$

10:
   $fragments^{rou}\leftarrow\text{Select}(M\_{curr}^{rou},t\_{m+1},k)$

11:
   $action\leftarrow\mathcal{F}\_{act}(o\_{t\_{m+1}},c\_{t\_{m+1}},\mathcal{F}\_{reason}(o\_{t\_{m+1}},c\_{t\_{m+1}},fragments^{rou}),fragments^{rou})$

12:
   if $action=\mathcal{O}\_{fwd}$ then

13:
     $a\_{curr}\leftarrow\arg\max\_{a\_{k}\in\mathcal{A}\_{m}\setminus\{a\_{curr}\}}\text{sim}(c\_{t\_{m+1}},c\_{k}^{m})$

14:
   else if $action=\mathcal{O}\_{split}$ then

15:
     $subtasks\leftarrow\text{DecomposeTask}(t\_{m+1})$

16:
     $task\\_state.context\leftarrow task\\_state.context\oplus\text{ProcessSubtasks}(subtasks,a\_{curr},\mathcal{A}\_{m})$

17:
     $finished\leftarrow\text{AllSubtasksCompleted}(subtasks)$

18:
   else

19:
     $task\\_state.context\leftarrow task\\_state.context\oplus\text{ExecuteTask}(a\_{curr},t\_{m+1},\text{Select}(M\_{curr}^{exe},t\_{m+1},k))$

20:
     $finished\leftarrow true$

21:
   end if

22:
  end while

23:
  // 2. Network update

24:
  for each interacting pair $(a\_{i},a\_{j})$ do

25:
   $w\_{m+1}(i,j)\leftarrow\alpha\cdot w\_{m}(i,j)+(1-\alpha)\cdot S(a\_{i}^{m+1},a\_{j}^{m+1},t\_{m+1})$

26:
  end for

27:
  $\boldsymbol{\mathcal{E}}\_{m+1}\leftarrow\{(a\_{i}^{m+1},a\_{j}^{m+1})\mid w\_{m+1}(i,j)>\theta\_{w}\}$

28:
  // 3. Agent capability and memory update

29:
  for each participating agent $a\_{i}$ do

30:
   $c\_{i}^{m+1}\leftarrow\beta\cdot c\_{i}^{m}+(1-\beta)\cdot\Delta c\_{i}^{m+1}$, Update $M\_{i}^{rou}$ and $M\_{i}^{exe}$

31:
  end for

32:
end for

33:
return $\mathcal{G}^{\*}=(\boldsymbol{\mathcal{A}},\boldsymbol{\mathcal{E}})$

### 3.2 Decentralized Network Topology

As illustrated in Figure  [3](https://arxiv.org/html/2504.00587v2#S3.F3.fig1 "Figure 3 ‣ 3.2 Decentralized Network Topology ‣ 3 Methodology ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems"), AgentNet employs a dual-role design. Each agent $a\_{i}$ is equipped with a router $rou\_{i}$ to facilitate routing decisions and an executor $exe\_{i}$ to execute specific tasks. We will introduce details of the router and executor in the following sections. In essence, the router within each agent endows AgentNet with a fully decentralized network structure because the routing decisions are made independently by each agent, without relying on a central authority or coordinator.

This contrasts with traditional LLM based Multi-Agent Systems that typically depend on a centralized controller to manage the coordination and allocation of tasks. Each agent in AgentNet autonomously determines how to route tasks to other agents based on its local knowledge and the task requirements, ensuring that decision-making is distributed across the network and that there is no single point of control, thus achieving full decentralization.

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/dual-function2.png)


Figure 3: Dual-role agent architecture.

Mathematically, we represent the architecture of AgentNet as $\mathcal{G}\_{m}=(\boldsymbol{\mathcal{A}\_{m}},\boldsymbol{\mathcal{E}\_{m}})$ when given the $m+1$-th task $t\_{m+1}$ after completing task $t\_{m}$, where $\boldsymbol{\mathcal{A}\_{m}}=\{a\_{1}^{m},a\_{2}^{m},...,a\_{n}^{m}\}$ represents the states of agents after task $t\_{m}$ and $\boldsymbol{\mathcal{E}}\_{m}\subseteq\boldsymbol{\mathcal{A}\_{m}}\times\boldsymbol{\mathcal{A}\_{m}}$ represents the set of directed edges between agents and each edge $e\_{i,j}^{m}$ means a directed edge from $a\_{i}^{m}$ to $a\_{j}^{m}$. A weight matrix $w\_{m}$ will be maintained throughout all the tasks before $t\_{m+1}$ to weight the connection between agents, namely $w\_{m}(i,j)$. After completing $t\_{m+1}$, $w\_{m+1}$ can be updated using the following formula from $w\_{m}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$w\_{m+1}(i,j)=\alpha\cdot w\_{m}(i,j)+(1-\alpha)\cdot S(a\_{i}^{m+1},a\_{j}^{m+1},t\_{m+1}),$$ |  | (2) |

where $\alpha\in[0,1]$ is a decay factor that balances historical performance with recent interactions, and $S(a\_{i}^{m+1},a\_{j}^{m+1},t\_{m+1})$ is a success metric for task $t\_{m+1}$ routed from agent $a\_{i}^{m+1}$ to $a\_{j}^{m+1}$. This adaptive weighting mechanism ensures that the network continuously refines its structure based on operational experience.

Over tasks, the weight matrix $w\_{m}$ will evolve based on collaborative success, and the edges with a lower weight than a hyper-parameter threshold $\theta\_{w}$ are periodically pruned:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\boldsymbol{\mathcal{E}\_{m+1}}=\{(a\_{i}^{m+1},a\_{j}^{m+1})\mid w\_{m+1}(i,j)>\theta\_{w}\}.$$ |  | (3) |

This pruning mechanism ensures that the network maintains efficient pathways while eliminating unproductive connections, optimizing both communication overhead and routing efficiency.

### 3.3 Adaptive Learning and Specialization

AgentNet’s adaptive learning mechanism facilitates continuous improvement and specialization of agents based on their task experiences, without the need for explicit role assignment. This process enables agents to gradually develop expertise in specific domains, differentiating AgentNet from static multi-agent systems and allowing it to adapt to evolving requirements over time.

Agents in AgentNet follow the ReAct (Reasoning + Acting) framework [Yao et al. (2023)](https://arxiv.org/html/2504.00587v2#bib.bib32); [Zhou et al. (2024)](https://arxiv.org/html/2504.00587v2#bib.bib6), which empowers agents to reason about a given query and its context before deciding appropriate actions for the executor modules. In addition to the given query and its context, the agent also retrieves relevant trajectory fragments from its memory modules to enhance reasoning and acing. The retrieval process is performed using a Retrieval-Augmented Generation (RAG) mechanism ([Lewis et al., 2020](https://arxiv.org/html/2504.00587v2#bib.bib18); [Gao et al., 2023](https://arxiv.org/html/2504.00587v2#bib.bib19); [Zhou et al., 2024](https://arxiv.org/html/2504.00587v2#bib.bib6)), which allows the agent to leverage past experiences to generate informed decisions and actions for new tasks.

In the AgentNet, Each agent $a\_{i}\in\boldsymbol{\mathcal{A}}$ maintains two memory modules $M\_{i}^{rou}$ and $M\_{i}^{exe}$ for its router module $rou\_{i}$ and $exe\_{i}$, which store local trajectory fragments from prior tasks corresponding to the specific steps where $a\_{i}$ was actively involved instead of storing the whole task trajectories cooperated by all agents.

Formally, each entry in $M\_{i}^{rou}$ and $M\_{i}^{exe}$ is the local step fragment represented as: $f^{r}=(o^{r},c^{r},a^{r})$, where $r$ represents this entry belongs to $rou\_{i}$ (when $r=rou$) or $exe\_{i}$ (when $r=exe$). $o^{r}$ denotes the observation, namely the query of the corresponding task, and $c^{r}$ represents the context of the corresponding task so far (i.e., partial trajectory before this step), and $a^{r}$ is the action or response of the agent. These step fragments are collected from different tasks in which the agent has participated and serve as experiential knowledge for future reasoning.

When agent $a\_{i}^{m}$ receives a new task $t\_{m+1}$ to solve, it retrieves the $k$ most relevant fragments from both memory modules. For each module type $r\in\{rou,exe\}$, the retrieval process is defined as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\begin{split}\text{Select}(M\_{i}^{r},t\_{m+1},k)=\{f\_{1}^{r},f\_{2}^{r},\dots,f\_{k}^{r}\}\subset M\_{i}^{r},\text{ such that }\\ \forall f\_{j}^{r}\in\text{Select}(M\_{i}^{r},t\_{m+1},k)\text{ and }\forall f\in M\_{i}^{r}\setminus\text{Select}(M\_{i}^{r},t\_{m+1},k):\\ \text{sim}(\text{embed}(o\_{f\_{j}^{r}}^{r},c\_{f\_{j}^{r}}^{r}),\text{embed}(o\_{t\_{m+1}}^{r},c\_{t\_{m+1}}^{r}))\geq\text{sim}(\text{embed}(o\_{f}^{r},c\_{f}^{r}),\text{embed}(o\_{t\_{m+1}}^{r},c\_{t\_{m+1}}^{r})).\end{split}$$ |  | (4) |

Here, $\text{embed}(\cdot)$ is a semantic embedding function that projects the input context into a high-dimensional vector space, and the fragments with the highest relevance are retrieved to inform the agent’s reasoning or action for both routing and execution processes.

Both the reasoning and acting processes are enhanced by the retrieval of historical task fragments, allowing the agent to make better decisions based on prior experiences.
The reasoning function for each module type is modeled as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{R}\_{a\_{i}}(t\_{m+1},r)=\mathcal{F}\_{\text{reason}}(o\_{t\_{m+1}},\text{c}\_{t\_{m+1}},\{f\_{j}^{r}\}\_{j=1}^{k}),$$ |  | (5) |

where $\mathcal{F}\_{\text{reason}}$ represents the large language model that serves as the backbone of the LLM Agent, processing the inputs to generate reasoned decisions.
The reasoning function $\mathcal{R}\_{a\_{i}}$ takes the current observation and question $o\_{t\_{m+1}}$, the historical context $\text{c}\_{t\_{m+1}}$ representing the partial task trajectory and interactions up to the current point, and the retrieved fragments $\{f\_{j}^{r}\}\_{j=1}^{k}$ as input to generate the reasoning output. The fragments allow the agent to reason based on prior experiences that are most relevant to the current situation.

Once the reasoning process has been completed, the agent executes the chosen action. The action is informed by the reasoning output, which can be expressed as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{A}\_{a\_{i}}(t\_{m+1},r)=\mathcal{F}\_{\text{act}}(o\_{t\_{m+1}},\text{c}\_{t\_{m+1}},\mathcal{R}\_{a\_{i}}(t\_{m+1},r),\{f\_{j}^{r}\}\_{j=1}^{k}),$$ |  | (6) |

where $\mathcal{F}\_{\text{act}}$ represents the large language model that serves as the backbone of the LLM Agent, translating reasoning into concrete operations.
The $\mathcal{A}\_{a\_{i}}(t\_{m+1},r)$ function utilizes the reasoning output $\mathcal{R}\_{a\_{i}}(t\_{m+1},r)$ along with the retrieved memory fragments to determine the appropriate action. The specific action depends on the module type: for $r=rou$, the router module may produce actions such as forwarding the task to another agent or splitting it into subtasks; for $r=exe$, the executor module generates a single-step operation or response to directly address the final answer.

To manage memory effectively, each agent employs a dynamic memory management strategy. As the agent receives new tasks, it evaluates the trajectories stored in its memory modules and decides which to retain or prune. This evaluation is based on reasoning about the task context, historical usage patterns, and the relevance of each trajectory to future tasks. Several factors influence the decision-making process, including the frequency of use, recency of tasks, and the uniqueness of the trajectory. The agent assesses these factors through a prompt-based reasoning process that helps determine the utility of each trajectory. When a memory module reaches its capacity limit $C\_{\text{max}}$, the agent compares the new trajectory with the existing ones in that memory module and selects the least useful trajectory to remove, thus ensuring the memory pool remains focused on high-quality and relevant knowledge.

Through this adaptive and memory-driven learning process, agents in AgentNet continuously refine their expertise and specialize in the areas where they excel. This specialization occurs naturally over time, allowing the system to self-organize and adapt to the demands of a wide variety of tasks.

### 3.4 Dynamic Task Allocation

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/details2.png)


Figure 4: Details of Dynamic Task Allocation.

The dynamic task allocation mechanism in AgentNet enables efficient distribution of tasks without centralized coordination, creating a responsive system that optimizes both performance and load balancing. This decentralized approach to task routing represents a significant advancement over static assignment strategies employed in traditional multi-agent frameworks.

Each task $t\in T$ is formally represented as a tuple $t=(o\_{t},c\_{t},p\_{t})$, where $o\_{t}$ contains the task description in natural language, $c\_{t}$ is a vector of capability requirements, and $p\_{t}$ denotes the priority level. To efficiently process a new task $t\_{m+1}$ after completing task $t\_{m}$, AgentNet employs a sophisticated mechanism to select the most suitable initial agent.

Agent capability representation and matching form the foundation of task allocation. Each agent $a\_{i}^{m}$, after completing task $t\_{m}$, possesses a capability vector $c\_{i}^{m}$ that is dynamically updated through task performance during system operation. In the initial allocation phase, the system selects an entry agent for $t\_{m+1}$ using the following formula:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$a\_{initial}=\underset{a\_{i}\in\mathcal{A}\_{m}}{\text{argmax}}\{\text{sim}(c\_{t\_{m+1}},c\_{i}^{m})\},$$ |  | (7) |

where $c\_{t\_{m+1}}=\Phi(o\_{t\_{m+1}})$ represents the capability requirements of task $t\_{m+1}$, $c\_{i}^{m}$ denotes the capability vector of agent $a\_{i}$, and $\text{sim}(\cdot,\cdot)$ is a similarity function measuring the match between task requirements and agent capabilities. The capability requirements are determined through different methodologies depending on task complexity:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$c\_{t\_{m+1}}=\begin{cases}\Phi\_{atomic}(t\_{m+1}),&\text{for atomic tasks}\\ \Phi\_{compound}(t\_{m+1}),&\text{for compound tasks}.\end{cases}$$ |  | (8) |

For atomic tasks, the system employs function $\Phi\_{atomic}$ that maps task properties to capability requirements based on predefined heuristics. For compound tasks, function $\Phi\_{compound}$ leverages an instruction set containing carefully crafted prompts that guide the large language model in analyzing task descriptions and inferring the required capability vectors. The system subsequently ranks all agents according to capability matching scores and selects the highest-scoring agent as the initial agent.

Once a task is assigned to the initial agent, this agent determines how to process the task based on the reasoning results from its router module $rou\_{i}$. As illustrated in Figure [4](https://arxiv.org/html/2504.00587v2#S3.F4 "Figure 4 ‣ 3.4 Dynamic Task Allocation ‣ 3 Methodology ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems"), the agent can perform three operations:

1. 1.

   Forward ($\mathcal{O}\_{\text{fwd}}$): Transfer the task unchanged to another more suitable agent, maintaining the task’s original state and preserving the Directed Acyclic Graph (DAG) property of the routing path. Forwarding decisions are based on analyzing the gap between the current agent’s capabilities and the task requirements, as well as evaluating the capability vectors of other agents in the network.
2. 2.

   Split ($\mathcal{O}\_{\text{split}}$): Decompose the task into subtasks, execute portions matching the agent’s expertise, and route the remaining subtasks to an appropriate agents. Subtask routing follows this formula:

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$a\_{next}=\underset{a\_{k}\in\mathcal{A}\_{m}\setminus\{a\_{i}\}}{\text{argmax}}\{\text{sim}(\Phi(o\_{t\_{m+1}}),c\_{k}^{m})\},$$ |  | (9) |

   where $\Phi(o\_{t\_{m+1}})$ represents the capability requirements derived from the observation of subtask $j$, determined through the current agent’s task decomposition reasoning, and $\mathcal{A}\_{m}\setminus\{a\_{i}\}$ denotes the set of all agents excluding the current one.
3. 3.

   Execute ($\mathcal{O}\_{\text{exec}}$): Complete the entire task without further delegation.

A key design feature in the system is that when an agent chooses to split a task, it only forwards the results of the subtasks it has completed, and not the reasoning behind the decomposition. This prevents the transfer of unnecessary information and ensures that task decomposition errors made by one agent do not propagate to other agents in the network.

The agent capability vector $c\_{i}^{m}$ is updated based on task execution history and success rates, using the following formula:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$c\_{i}^{m+1}=\beta\cdot c\_{i}^{m}+(1-\beta)\cdot\Delta c\_{i}^{m+1},$$ |  | (10) |

where $\beta\in[0,1]$ is a decay factor balancing historical capabilities with newly acquired ones, and $\Delta c\_{i}^{m+1}$ represents the new capability contribution demonstrated by the agent in task $t\_{m+1}$, calculated by analyzing the types of operations successfully executed by the agent and the quality of results.

Furthermore, the task’s state is updated only when an agent completes a part of the task (whether by executing or splitting it). When the agent completes a subtask, it updates the context and forwards it to the next agent:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{context}\_{\text{updated}}=\text{context}\_{\text{original}}\oplus\text{result}(a\_{j},t\_{i}).$$ |  | (11) |

While the task is only being forwarded from one agent to another, its state remains unchanged, preserving the Directed Acyclic Graph (DAG) structure of the task routing path. This ensures that the task’s progression avoids being trapped in an infinite loop during task forwarding, maintaining a consistent and effective routing process across different agents.

Through this dynamic task allocation mechanism, AgentNet can adaptively optimize task flow based on task characteristics and changes in agent capabilities, achieving improved overall system performance and efficient resource utilization.

## 4 Experiment

### 4.1 Experimental Setup

#### Tasks and Benchmarks

We evaluate methods using several benchmarks across three task categories, along with custom constructed training and test sets for each benchmark:

- •

  Mathematics: This task involves mathematical problem and is evaluated using MATH [Hendrycks et al. (2021)](https://arxiv.org/html/2504.00587v2#bib.bib33), which includes problems with 7 different types. The training set consists of 100 examples per type (total of 700 problems), while the test set consists of 20 examples per type (total of 140 problems).
- •

  Logical Question Answering: This task tests reasoning and logical question answering abilities using the BBH (Big-Bench Hard) benchmark [Suzgun et al. (2022)](https://arxiv.org/html/2504.00587v2#bib.bib34). The training set follows the MorphAgent setup, selecting 627 examples from 20 tasks. For testing, each task has 5 examples of varying difficulty, totaling 100 test problems.
- •

  Function-Calling: This benchmark evaluates the agent’s ability to perform tool-augmented task planning and API usage, based on the API-Bank dataset [Li et al. (2023)](https://arxiv.org/html/2504.00587v2#bib.bib35). We construct a training set of 100 tasks and a test set of 100 tasks, randomly sampled from the full API-Bank corpus. Since the original dataset does not include category labels, we annotate each task using GPT-4o-mini to assign one of the seven task types: health, account, schedule, information, housework, finance, and others. Each task is further categorized into one of three difficulty levels, determined by prompt complexity and required toolchain length.

#### Baselines

We compare AgentNet with two categories of baselines: single-agent and multi-agent frameworks:

- •

  Single-agent frameworks:
  These methods involve a single agent solving tasks independently without collaboration or coordination with other agents.

  - –

    Direct: A baseline approach where the LLM directly generates outputs.
  - –

    React: A prompting technique that elicits step-by-step reasoning from language models [Wei et al. (2023)](https://arxiv.org/html/2504.00587v2#bib.bib36); [Yao et al. (2023)](https://arxiv.org/html/2504.00587v2#bib.bib32).
  - –

    Synapse: A trajectory-as-exemplar prompting method, which prompts the LLM with complete trajectories of the abstracted states and actions to improve multi-step decision-making. [Zheng et al. (2024)](https://arxiv.org/html/2504.00587v2#bib.bib37)
  - –

    Self-Consistency: A decoding strategy that samples multiple reasoning paths and selects the most consistent answer through majority voting, enhancing reliability [Wang et al. (2023)](https://arxiv.org/html/2504.00587v2#bib.bib38).
  - –

    Self-Refinement: An iterative approach where models critically evaluate and improve their own solutions over multiple passes, progressively enhancing solution quality [Madaan et al. (2023)](https://arxiv.org/html/2504.00587v2#bib.bib39).
- •

  Multi-agent frameworks:
  These methods involve multiple agents working collaboratively to solve tasks, each contributing to different aspects of the task-solving process.

  - –

    MorphAgent: A framework featuring self-
    evolving agent profiles that dynamically optimize individual expertise in the profile through three metrics [Lu et al. (2024)](https://arxiv.org/html/2504.00587v2#bib.bib28).
  - –

    MetaGPT: A software development framework where specialized agents (like product manager, architect, engineer) collaborate in a waterfall workflow to complete complex engineering tasks [Hong et al. (2024)](https://arxiv.org/html/2504.00587v2#bib.bib11).
  - –

    AFLOW: A framework that optimizes agent workflows using Monte Carlo Tree Search over code-represented workflows with execution feedback [Zhang et al. (2024c)](https://arxiv.org/html/2504.00587v2#bib.bib30).
  - –

    GPTSwarm: A framework modeling agents as computational graphs with automatic optimization of both prompts and agent collaboration patterns [Zhuge et al. (2024)](https://arxiv.org/html/2504.00587v2#bib.bib24).

#### Parameter Configuration

In our implementation, we configure the LLM API with a temperature of 0.0, a maximum token limit of 2048, and a top-p value of 1.0, ensuring consistent results throughout our experiments and enabling reliable comparisons and analysis. For the memory pool experiment, we utilize the "BAAI/bge-large-en-v1.5" model to compute the similarity between task queries and database trajectories.

### 4.2 Main Results

Table 1: Performance comparison of different methods across various tasks. In all multi-agent methods, we set 3 agents for each method to ensure a fair comparison. The best result is in bold, while the second is underlined.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Backbone | Category | Method | MATH(Acc/%) | BBH(Acc/%) | API-Bank(Acc/%) |
| DeepSeek-V3 | Single Agent | Direct | 47.86 | 69.00 | 26.00 |
| React | 77.14 | 88.00 | 29.00 |
| Synapse | 89.28 | 92.00 | 28.00 |
| Self-Consistency | 88.00 | 85.00 | 29.00 |
| Self-Refinement | 87.14 | 84.00 | 25.00 |
| Multi-Agent | MorghAgent | 39.29 | 56.00 | 16.00 |
| MetaGPT | 92.14 | 64.00 | 22.00 |
| AFLOW | 91.67 | 88.00 | 28.00 |
| GPTSwarm | 72.14 | 90.00 | 21.00 |
|  | AgentNet | 92.86 | 94.00 | 30.00 |
| GPT-4o-mini | Single Agent | Direct | 31.43 | 59.00 | 15.00 |
| React | 55.71 | 80.00 | 24.00 |
| Synapse | 77.14 | 79.00 | 22.00 |
| Self-Consistency | 54.28 | 85.00 | 22.00 |
| Self-Refinement | 68.57 | 81.00 | 23.00 |
| Multi-Agent | MorghAgent | 80.71 | 56.00 | 16.00 |
| MetaGPT | 73.57 | 53.00 | 19.00 |
| AFLOW | 85.00 | 75.00 | 21.00 |
| GPTSwarm | 85.00 | 86.00 | 13.00 |
|  | AgentNet | 85.00 | 86.00 | 29.00 |
| Qwen-turbo | Single Agent | Direct | 37.85 | 57.00 | 27.00 |
| React | 53.57 | 69.00 | 23.00 |
| Synapse | 67.14 | 68.00 | 24.00 |
| Self-Consistency | 64.28 | 70.00 | 28.00 |
| Self-Refinement | 76.43 | 74.00 | 23.00 |
| Multi-Agent | MorghAgent | 16.43 | 56.00 | 9.00 |
| MetaGPT | 63.57 | 51.00 | 20.00 |
| AFLOW | 82.14 | 57.00 | 22.00 |
| GPTSwarm | 79.29 | 75.00 | 30.00 |
|  | AgentNet | 81.43 | 92.00 | 32.00 |

Table [1](https://arxiv.org/html/2504.00587v2#S4.T1 "Table 1 ‣ 4.2 Main Results ‣ 4 Experiment ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems") summarizes performance across Math, Logical QA tasks and API-Calling tasks. For Math, Logical QAs and API-Calling tasks, accuracy is reported.
Compared to single-agent methods (e.g., Synapse, ReAct), AgentNet achieves competitive or superior performance across all tasks. While ReAct performs well on Math and Logic, its static prompting strategy limits generalization to more complex tasks.
Against multi-agent baselines, AgentNet consistently outperforms centralized frameworks such as MetaGPT, which suffers from limited scalability—e.g., only 53.00% accuracy on Logical QA.
AgentNet’s decentralized coordination and retrieval-augmented memory contribute to its robustness across domains, particularly in tasks requiring contextual understanding and adaptive role specialization.

### 4.3 Experiments on Heterogeneous Agents

To investigate the impact of agent diversity on performance, we designed a heterogeneity experiment across different settings on the BBH task. Agents were tested under four configurations: fully homogeneous (identical models and capabilities), LLM heterogeneity (different language models, same capabilities), skill heterogeneity (same model but varied capabilities), and a combination of both. This design allows us to isolate and analyze how model-level and capability-level diversity influence multi-agent collaboration.

Table 2: BBH Accuracy under Different Heterogeneity Settings (Acc%)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Setting | Fully Homogeneous | Skill Hetero. | LLM Hetero. | Both Hetero. |
| 3 Agents | 0.86 | 0.84 | 0.81 | 0.81 |
| 5 Agents | 0.79 | 0.86 | 0.85 | 0.85 |

The results show that the impact of heterogeneity on multi-agent performance depends on team size. With 3 agents, the fully homogeneous setting performs best, while introducing either model or skill diversity reduces accuracy, suggesting uniform reasoning is more effective in small teams. However, with 5 agents, heterogeneous configurations outperform the homogeneous one, indicating that diversity enhances collaboration and complementary reasoning in larger teams. Overall, heterogeneity may introduce coordination overhead in small groups but offers clear benefits at larger scales.

### 4.4 Ablation Study

#### Router Effectiveness in AgentNet

To evaluate AgentNet’s decentralized router, experiments were conducted comparing AgentNet with ablation configurations: "Totally Random", "Random Operations", "Random Next Agent ID" and a centralized "Global Router". Each router manages external routing (selecting the next agent) and internal routing (deciding to forward, split, or execute).

Performance was tested on the BBH task (training: 627 problems, testing: 100 problems), with results in Figure [5](https://arxiv.org/html/2504.00587v2#S4.F5.fig1 "Figure 5 ‣ Router Effectiveness in AgentNet ‣ 4.4 Ablation Study ‣ 4 Experiment ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems").
AgentNet outperforms randomized methods, achieving 82.14% accuracy during training and 86.00% during testing.
Randomizing operations (forward/split/execute) affects task execution more directly, randomizing next agent ID primarily results in suboptimal task delegation but does not disrupt task completion as severely.
These results underscore the critical role of effective routing and suggest that optimizing routing decisions can significantly enhance multi-agent system performance.

  


Figure 5: AgentNet’s Router Performance on the BBH (Backbone: gpt-4o-mini)


#### Impact of Evolution Phase

Results in Table [3](https://arxiv.org/html/2504.00587v2#S4.T3 "Table 3 ‣ Router Effectiveness in AgentNet ‣ 4.4 Ablation Study ‣ 4 Experiment ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems") clearly indicate that AgentNet significantly improves performance compared to the non-evolution baseline. On the MATH task, AgentNet achieves a score of 85.00 versus 77.86. For the function-calling task, performance improves notably from 23.00 to 32.00. On the BBH task, accuracy rises from 76% to 86%, demonstrating the impact of evolution phase for AgentNet.

Table 3: Performance Comparison of AgentNet vs. Without evolution (Backbone: gpt-4o-mini)

|  |  |  |  |
| --- | --- | --- | --- |
| 3 Agents | MATH | API-Bank | BBH |
|  | Acc(%) | Acc(%) | Acc(%) |
| w/o evolution | 77.86 | 23.00 | 76.00 |
| AgentNet | 85.00 | 32.00 | 86.00 |

These results confirm that AgentNet’s adaptive learning during the evolution phase effectively enhances agent specialization and task performance, demonstrating its essential role in the system’s optimization and overall efficiency.

### 4.5 Case Studies

This case study is presented to illustrate the differences between the two methods, based on results obtained using GPT-4o-mini on the BBH dataset. The left image shows the trajectory produced by the ReAct method, while the right image illustrates the trajectory generated by AgentNet. In the case of ReAct, the lack of collective reasoning results in an incorrect response after a single-step inference, highlighting the limitations of the method in handling tasks that require more complex reasoning. In contrast, AgentNet uses a multi-step workflow where agents without the necessary expertise are bypassed, while those with the relevant skills divide the task into smaller steps, leading to a more accurate final solution.

Question:
Which sentence has the correct adjective order?
Options:
A. old-fashioned circular green cardboard exercise computer
B. old-fashioned green exercise circular cardboard computer
ReAct
Reasoning:
(B) was selected because it follows a common pattern in English, where opinion adjectives (e.g., "old-fashioned") precede color adjectives (e.g., "green") and shape adjectives (e.g., "circular").
Action: (B)
                    Ground Truth:(A)

Figure 6: ReAct Response with Reasoning

AgentNet (5 Agents)
Agent 0: Decision: Forward Next Agent: Agent 1
Agent 1: Decision: Forward Next Agent: Agent 2
Agent 2: Decision: Forward Next Agent: Agent 3
Agent 3: Decision: Split
Executable: Adjective order analysis
Delegate: Final answer to another agent
Findings:
  
 Correct order: Quantity, opinion, size, age, shape, color, origin, material, purpose
 Correct Option: (A)
Next Agent: Agent 4
  
Agent 4: Decision: Execute Action: Confirmed option (A)
Final Outcome: (A)                   Ground Truth:(A)

Figure 7: AgentNet Task Breakdown

## 5 Analysis

### 5.1 Scalability and Robustness of the System

Based on the experimental results as illustrated in Figure  [8](https://arxiv.org/html/2504.00587v2#S5.F8 "Figure 8 ‣ 5.1 Scalability and Robustness of the System ‣ 5 Analysis ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems"), we observed that both training and testing performance improve slightly as the number of agents and executor pool limit increase. However, the improvements are incremental, with diminishing returns as the system scales up. Specifically, performance in the training phase increased from 80.38 for 3 agents and 30 executors to 81.18 for 9 agents and 40 executors. In the testing phase, performance fluctuated between 80 and 86, with the highest performance seen in configurations with 40 executors.

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/parameter.png)


Figure 8: AgentNet Performance with Different Net Parameters. Experiments were conducted with routers without pool limit, where (A, B) represents A as the number of agents and B as the upper limit of the executor pool, with performance evaluated on the BBH.

These results suggest that AgentNet’s decentralized coordination model allows for gradual performance improvement as resources are added. This indicates that AgentNet can scale effectively, enhancing performance without the dramatic bottlenecks commonly seen in centralized systems. Additionally, while performance benefits from increased resources, the marginal gains suggest there may be an optimal point where resource allocation reaches its most efficient balance. The experiment demonstrates that AgentNet’s design, which dynamically adjusts agent connections and executor pool sizes, effectively supports scalable and adaptable multi-agent systems with a high degree of fault tolerance.

### 5.2 Autonomous Specialization of Agents

Based on the observed results in Figure  [9](https://arxiv.org/html/2504.00587v2#S5.F9 "Figure 9 ‣ 5.2 Autonomous Specialization of Agents ‣ 5 Analysis ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems"), the experiments demonstrate that AgentNet’s multi-agent system can naturally specialize agents in a decentralized environment. With varying numbers of agents and a fixed executor pool of 40 pieces, the ability scores across different tasks such as reasoning, language, knowledge, and sequence showed significant variation. As the number of agents increased, specialization became more evident, particularly in complex tasks, with certain agents excelling in specific areas while others focused on different abilities. This highlights AgentNet’s capacity to dynamically refine agent expertise and optimize performance in a decentralized, task-driven system.

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/diversity.png)


Figure 9: Autonomous Specialization under Different Agent Sets. The upper limit of the executor pool is fixed at 40, regardless of the number of agents. The experiment was run on the BBH, and the images show the final ability scores of the agents after training.

Notably, with 3 agents, the abilities were more evenly distributed across the agents, but as the number of agents increased, specialization became more evident, especially in tasks like knowledge and sequence, where specific agents showed notable proficiency. In the (5, 40) configuration, the specialization became clearer, with some agents excelling in certain abilities, while others lagged behind in different tasks. As we scaled up to 7 and 9 agents, the system displayed even greater specialization, especially in complex tasks, demonstrating AgentNet’s ability to allow for dynamic expertise refinement. This confirms that AgentNet supports the hypothesis of autonomous specialization within a decentralized, task-driven multi-agent system, where agents evolve to optimize task performance independently, without the need for a central controller.

### 5.3 Evolution of Agents Networks

The evolution of the agent network in our experiment is illustrated in Figure [10](https://arxiv.org/html/2504.00587v2#S5.F10 "Figure 10 ‣ 5.3 Evolution of Agents Networks ‣ 5 Analysis ‣ AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems"), which demonstrates the transition of a multi-agent system composed of 5 agents running on the BBH (627 pieces) benchmark. The figure captures the network at three key stages: the initial state, an intermediate state, and the final evolved state.

![Refer to caption](https://arxiv.org/html/2504.00587v2/Figure/evolution4.png)


Figure 10: Evolution Example of Agents Networks.

In the initial state, the network is fully connected with uniform connection values of 1.00, indicating equal capabilities among all agents. At this stage, there is no specialization, and all agents are equally equipped to handle tasks.

As the network evolves, agents begin to specialize, and connection values vary, reflecting the strength of collaboration. Stronger connections indicate tighter cooperation, while weaker ones suggest less interaction. This evolution shows how agents naturally adapt and form more efficient collaboration patterns.

By the final stage, the network exhibits clear specialization, with agents taking on distinct roles. The connection values further emphasize the growing cooperation between specialized agents, improving task performance. This progression demonstrates the effectiveness of decentralized coordination, where evolving collaboration enhances task allocation, scalability, and fault tolerance.

## 6 Limitations and Future Work

Despite AgentNet implementing a fully distributed, adaptive learning multi-agent system (MAS) with dynamic task allocation, several important limitations remain that require further exploration in future work.

One key challenge is how to improve task performance in heterogeneous agent environments. In real-world applications, agents often vary significantly in terms of model capabilities, workflow structures, tools, and available data. The impact of such heterogeneity on AgentNet’s performance, especially in terms of task coordination and resource allocation, remains an open question. Understanding how to adapt the system to handle such variations efficiently will be crucial for its scalability and effectiveness in complex environments.

Secondly, the decision-making process of the router within each agent, particularly in relation to exploration and discovery, requires more in-depth study. Currently, the router selects agents from a relatively small pool of predefined candidates. However, in larger-scale systems involving hundreds or potentially thousands of agents, the challenge of accurately identifying the most suitable agent for task delegation becomes significantly more complex. This problem is further compounded in heterogeneous settings, where different agents may possess distinct strengths and weaknesses. To address this, future research could focus on developing more sophisticated routing mechanisms that can autonomously identify and delegate tasks to the most appropriate agents, even in large and diverse agent pools.

Additionally, a promising direction for future work involves designing incentives that encourage the router to explore agents beyond the predefined candidate set. By enabling AgentNet to dynamically discover new agents or specialized capabilities, such an approach would enhance its adaptability and scalability, ultimately improving the system’s overall performance and autonomy.

## 7 Conclusion

In conclusion, AgentNet provides an effective approach to addressing the limitations of traditional centralized multi-agent systems. With its decentralized architecture, dynamic task allocation, and adaptive learning mechanisms, AgentNet improves scalability, fault tolerance, and task efficiency in collaborative environments. Its privacy-preserving features further ensure secure cooperation across organizations. Our experimental results highlight the advantages of this approach, demonstrating improvements in task efficiency, adaptability, and specialization. AgentNet offers a practical framework for developing more flexible and secure multi-agent systems in dynamic, real-world settings.

## Acknowledgement

The authors gratefully acknowledge the generous support provided by Bytedance, which has been instrumental in enabling the successful execution of this research. Their sponsorship significantly contributed to the advancement and completion of this work.

## Acknowledgement

This research was supported by Bytedance through a sponsored project that facilitated the execution and completion of this work.

## Ethics Statement

This study did not involve human participants, animal subjects, or the use of personal data. All datasets and benchmarks employed are publicly available and used in accordance with their respective licenses. Therefore, no ethics approval was required.

## References

- OpenAI et al. [2024]

  OpenAI, Josh Achiam, Steven Adler, Sandhini Agarwal, et al.
  Gpt-4 technical report, 2024.
  URL <https://arxiv.org/abs/2303.08774>.
- Touvron et al. [2023]

  Hugo Touvron, Louis Martin, Kevin Stone, et al.
  Llama 2: Open foundation and fine-tuned chat models, 2023.
  URL <https://arxiv.org/abs/2307.09288>.
- Yang et al. [2025]

  Yingxuan Yang, Bo Huang, Siyuan Qi, Chao Feng, Haoyi Hu, Yuxuan Zhu, Jinbo Hu, Haoran Zhao, Ziyi He, Xiao Liu, Zongyu Wang, Lin Qiu, Xuezhi Cao, Xunliang Cai, Yong Yu, and Weinan Zhang.
  Who’s the mvp? a game-theoretic evaluation benchmark for modular attribution in llm agents, 2025.
  URL <https://arxiv.org/abs/2502.00510>.
- Gottweis et al. [2025]

  Juraj Gottweis, Wei-Hung Weng, Alexander Daryin, Tao Tu, Anil Palepu, Petar Sirkovic, Artiom Myaskovsky, Felix Weissenberger, Keran Rong, Ryutaro Tanno, Khaled Saab, Dan Popovici, Jacob Blum, Fan Zhang, Katherine Chou, Avinatan Hassidim, Burak Gokturk, Amin Vahdat, Pushmeet Kohli, Yossi Matias, Andrew Carroll, Kavita Kulkarni, Nenad Tomasev, Yuan Guan, Vikram Dhillon, Eeshit Dhaval Vaishnav, Byron Lee, Tiago R D Costa, José R Penadés, Gary Peltz, Yunhan Xu, Annalisa Pawlosky, Alan Karthikesalingam, and Vivek Natarajan.
  Towards an ai co-scientist, 2025.
  URL <https://arxiv.org/abs/2502.18864>.
- Putta et al. [2024]

  Pranav Putta, Edmund Mills, Naman Garg, Sumeet Motwani, Chelsea Finn, Divyansh Garg, and Rafael Rafailov.
  Agent q: Advanced reasoning and learning for autonomous ai agents, 2024.
  URL <https://arxiv.org/abs/2408.07199>.
- Zhou et al. [2024]

  Ruiwen Zhou, Yingxuan Yang, Muning Wen, Ying Wen, Wenhao Wang, Chunling Xi, Guoqiang Xu, Yong Yu, and Weinan Zhang.
  Trad: Enhancing llm agents with step-wise thought retrieval and aligned decision, 2024.
  URL <https://arxiv.org/abs/2403.06221>.
- Guo et al. [2024]

  Taicheng Guo, Xiuying Chen, Yaqi Wang, Ruidi Chang, Shichao Pei, N. Chawla, Olaf Wiest, and Xiangliang Zhang.
  Large language model based multi-agents: A survey of progress and challenges.
  In *International Joint Conference on Artificial Intelligence*, 2024.
  URL <https://api.semanticscholar.org/CorpusID:267412980>.
- Sun et al. [2024]

  Chuanneng Sun, Songjun Huang, and Dario Pompili.
  Llm-based multi-agent reinforcement learning: Current and future directions.
  *ArXiv*, abs/2405.11106, 2024.
  URL <https://api.semanticscholar.org/CorpusID:269921354>.
- Yang et al. [2024]

  Yingxuan Yang, Qiuying Peng, Jun Wang, Ying Wen, and Weinan Zhang.
  Llm-based multi-agent systems: Techniques and business perspectives, 2024.
  URL <https://arxiv.org/abs/2411.14033>.
- Chen et al. [2023a]

  Guangyao Chen, Siwei Dong, Yu Shu, Ge Zhang, Sesay Jaward, Karlsson Börje, Jie Fu, and Yemin Shi.
  Autoagents: The automatic agents generation framework.
  *arXiv preprint*, 2023a.
- Hong et al. [2024]

  Sirui Hong, Mingchen Zhuge, Jiaqi Chen, Xiawu Zheng, Yuheng Cheng, Ceyao Zhang, Jinlin Wang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jürgen Schmidhuber.
  Metagpt: Meta programming for a multi-agent collaborative framework, 2024.
  URL <https://arxiv.org/abs/2308.00352>.
- Wu et al. [2023]

  Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Hassan Awadallah, Ryen W White, Doug Burger, and Chi Wang.
  Autogen: Enabling next-gen llm applications via multi-agent conversation, 2023.
  URL <https://arxiv.org/abs/2308.08155>.
- Wang et al. [2024]

  Qian Wang, Tianyu Wang, Qinbin Li, Jingsheng Liang, and Bingsheng He.
  Megaagent: A practical framework for autonomous cooperation in large-scale llm agent systems.
  *arXiv preprint arXiv:2408.09955*, 2024.
- Ye et al. [2025]

  Rui Ye, Shuo Tang, Rui Ge, Yaxin Du, Zhenfei Yin, Siheng Chen, and Jing Shao.
  Mas-gpt: Training llms to build llm-based multi-agent systems, 2025.
  URL <https://arxiv.org/abs/2503.03686>.
- Shi et al. [2025]

  Zitong Shi, Guancheng Wan, Wenke Huang, Guibin Zhang, Jiawei Shao, Mang Ye, and Carl Yang.
  Privacy-enhancing paradigms within federated multi-agent systems, 2025.
  URL <https://arxiv.org/abs/2503.08175>.
- Kahn [1962]

  Arthur B Kahn.
  Topological sorting of large networks.
  *Communications of the ACM*, 5(11):558–562, 1962.
- Ahuja et al. [1993]

  Ravindra K Ahuja, Thomas L Magnanti, James B Orlin, et al.
  *Network flows: theory, algorithms, and applications*, volume 1.
  Prentice hall Englewood Cliffs, NJ, 1993.
- Lewis et al. [2020]

  Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, et al.
  Retrieval-augmented generation for knowledge-intensive nlp tasks.
  *Advances in neural information processing systems*, 33:9459–9474, 2020.
- Gao et al. [2023]

  Yunfan Gao, Yun Xiong, Xinyu Gao, Kangxiang Jia, Jinliu Pan, Yuxi Bi, Yi Dai, Jiawei Sun, Haofen Wang, and Haofen Wang.
  Retrieval-augmented generation for large language models: A survey.
  *arXiv preprint arXiv:2312.10997*, 2, 2023.
- Gao et al. [2024]

  Dawei Gao, Zitao Li, Xuchen Pan, Weirui Kuang, Zhijian Ma, Bingchen Qian, Fei Wei, Wenhao Zhang, Yuexiang Xie, Daoyuan Chen, Liuyi Yao, Hongyi Peng, Zeyu Zhang, Lin Zhu, Chen Cheng, Hongzhu Shi, Yaliang Li, Bolin Ding, and Jingren Zhou.
  Agentscope: A flexible yet robust multi-agent platform, 2024.
  URL <https://arxiv.org/abs/2402.14034>.
- Fernando et al. [2023]

  Chrisantha Fernando, Dylan Banarse, Henryk Michalewski, Simon Osindero, and Tim Rocktäschel.
  Promptbreeder: Self-referential self-improvement via prompt evolution.
  *arXiv preprint arXiv:2309.16797*, 2023.
- Khattab et al. [2023]

  Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T Joshi, Hanna Moazam, et al.
  Dspy: Compiling declarative language model calls into self-improving pipelines.
  *arXiv preprint arXiv:2310.03714*, 2023.
- Zhang et al. [2024a]

  Guibin Zhang, Yanwei Yue, Zhixun Li, Sukwon Yun, Guancheng Wan, Kun Wang, Dawei Cheng, Jeffrey Xu Yu, and Tianlong Chen.
  Cut the crap: An economical communication pipeline for llm-based multi-agent systems, 2024a.
  URL <https://arxiv.org/abs/2410.02506>.
- Zhuge et al. [2024]

  Mingchen Zhuge, Wenyi Wang, Louis Kirsch, Francesco Faccio, Dmitrii Khizbullin, and Jürgen Schmidhuber.
  Gptswarm: Language agents as optimizable graphs.
  In *Forty-first International Conference on Machine Learning*, 2024.
- Liu et al. [2024]

  Zijun Liu, Yanzhe Zhang, Peng Li, Yang Liu, and Diyi Yang.
  A dynamic llm-powered agent network for task-oriented agent collaboration, 2024.
  URL <https://arxiv.org/abs/2310.02170>.
- Zhang et al. [2024b]

  Guibin Zhang, Yanwei Yue, Xiangguo Sun, Guancheng Wan, Miao Yu, Junfeng Fang, Kun Wang, Tianlong Chen, and Dawei Cheng.
  G-designer: Architecting multi-agent communication topologies via graph neural networks.
  *arXiv preprint arXiv:2410.11782*, 2024b.
- Chen et al. [2023b]

  Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang, Chenfei Yuan, Chen Qian, Chi-Min Chan, Yujia Qin, Yaxi Lu, Ruobing Xie, et al.
  Agentverse: Facilitating multi-agent collaboration and exploring emergent behaviors in agents.
  *arXiv preprint arXiv:2308.10848*, 2(4):6, 2023b.
- Lu et al. [2024]

  Siyuan Lu, Jiaqi Shao, Bing Luo, and Tao Lin.
  Morphagent: Empowering agents through self-evolving profiles and decentralized collaboration.
  *arXiv preprint arXiv:2410.15048*, 2024.
- Shang et al. [2024]

  Yu Shang, Yu Li, Keyu Zhao, Likai Ma, Jiahe Liu, Fengli Xu, and Yong Li.
  Agentsquare: Automatic llm agent search in modular design space.
  *arXiv preprint arXiv:2410.06153*, 2024.
- Zhang et al. [2024c]

  Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, Fengwei Teng, Xionghui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, et al.
  Aflow: Automating agentic workflow generation.
  *arXiv preprint arXiv:2410.10762*, 2024c.
- Hu et al. [2024]

  Yue Hu, Yuzhu Cai, Yaxin Du, Xinyu Zhu, Xiangrui Liu, Zijie Yu, Yuchen Hou, Shuo Tang, and Siheng Chen.
  Self-evolving multi-agent collaboration networks for software development.
  *arXiv preprint arXiv:2410.16946*, 2024.
- Yao et al. [2023]

  Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao.
  React: Synergizing reasoning and acting in language models, 2023.
  URL <https://arxiv.org/abs/2210.03629>.
- Hendrycks et al. [2021]

  Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, Eric Tang, Dawn Song, and Jacob Steinhardt.
  Measuring mathematical problem solving with the math dataset.
  *NeurIPS*, 2021.
- Suzgun et al. [2022]

  Mirac Suzgun, Nathan Scales, Nathanael Schärli, Sebastian Gehrmann, Yi Tay, Hyung Won Chung, Aakanksha Chowdhery, Quoc V. Le, Ed H. Chi, Denny Zhou, and Jason Wei.
  Challenging big-bench tasks and whether chain-of-thought can solve them, 2022.
  URL <https://arxiv.org/abs/2210.09261>.
- Li et al. [2023]

  Minghao Li, Yingxiu Zhao, Bowen Yu, Feifan Song, Hangyu Li, Haiyang Yu, Zhoujun Li, Fei Huang, and Yongbin Li.
  Api-bank: A comprehensive benchmark for tool-augmented llms, 2023.
  URL <https://arxiv.org/abs/2304.08244>.
- Wei et al. [2023]

  Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, and Denny Zhou.
  Chain-of-thought prompting elicits reasoning in large language models, 2023.
  URL <https://arxiv.org/abs/2201.11903>.
- Zheng et al. [2024]

  Longtao Zheng, Rundong Wang, Xinrun Wang, and Bo An.
  Synapse: Trajectory-as-exemplar prompting with memory for computer control, 2024.
  URL <https://arxiv.org/abs/2306.07863>.
- Wang et al. [2023]

  Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc Le, Ed Chi, Sharan Narang, Aakanksha Chowdhery, and Denny Zhou.
  Self-consistency improves chain of thought reasoning in language models, 2023.
  URL <https://arxiv.org/abs/2203.11171>.
- Madaan et al. [2023]

  Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, and Peter Clark.
  Self-refine: Iterative refinement with self-feedback, 2023.
  URL <https://arxiv.org/abs/2303.17651>.
