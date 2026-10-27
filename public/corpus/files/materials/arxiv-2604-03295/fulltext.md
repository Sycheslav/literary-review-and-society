---
id: arxiv-2604-03295-text
type: material
title: Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems
work_id: arxiv-2604-03295
source_url: https://arxiv.org/html/2604.03295v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 8bb52386e89efed6a025b2dbc8c0debb593ce6f8a451e03075cfe5075890cd20
---

> Источник: [https://arxiv.org/html/2604.03295v1](https://arxiv.org/html/2604.03295v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems

Shanglin Wu$\dagger$
Affiliation: Emory University
  
Yuyang Luo
Affiliation: Emory University
  
Yueqing Liang
Affiliation: Illinois Institute of Technology
  
Kaiwen Shi
Affiliation: University of Notre Dame
  
Yanfang Ye
Affiliation: University of Notre Dame
  
Ali Payani
Affiliation: Cisco Research
  
Kai Shu\*
Affiliation: $\dagger$ First Author
  
\* Corresponding Author
Affiliation: Emory University

###### Abstract

Large language model (LLM) multi-agent systems can scale along two distinct dimensions: by increasing the number of agents and by improving through accumulated experience over time. Although prior work has studied these dimensions separately, their interaction under realistic cost constraints remains unclear. In this paper, we introduce a conceptual scaling view of multi-agent systems that jointly considers team size and lifelong learning ability, and we study how memory design shares this landscape. To this end, we propose LLMA-Mem, a lifelong memory framework for LLM multi-agent systems under flexible memory topologies. We evaluate LLMA-Mem on MultiAgentBench across coding, research, and database environments. Empirically, LLMA-Mem consistently improves long-horizon performance over baselines while reducing cost. Our analysis further reveals a non-monotonic scaling landscape: larger teams do not always produce better long-term performance, and smaller teams can outperform larger ones when memory better supports the reuse of experience. These findings position memory design as a practical path for scaling multi-agent systems more effectively and more efficiently over time. Our code is available at <https://github.com/ShanglinWu/MAS_lifelong_learning>.

![Refer to caption](https://arxiv.org/html/2604.03295v1/figure1.png)


Figure 1: Scaling space and cost comparison of LLMA-Mem. Top: LLMA-Mem enabled scaling space for multi-agent systems. Bottom: Average token usage per task, where LLMA-Mem shows substantial cost reduction compared to baselines across models.

## 1 Introduction

Large language model (LLM)-based agent systems have demonstrated remarkable capabilities across diverse domains, from complex reasoning and code generation to embodied task execution and scientific discovery ([Chen et al., 2024b](https://arxiv.org/html/2604.03295v1#bib.bib1); [Wu et al., 2024](https://arxiv.org/html/2604.03295v1#bib.bib2)). These systems extend beyond passive language generation to exhibit autonomous decision-making, tool use, and environmental interaction. A natural extension of this paradigm involves scaling from individual agents to multi-agent systems (MAS), where multiple LLM agents collaborate to tackle problems that exceed the capacity of a single agent. Such architectures prove essential for tasks requiring diverse expertise, extended context processing, parallel execution, or collective verification to reduce hallucinations ([Chen et al., 2024a](https://arxiv.org/html/2604.03295v1#bib.bib3); [Du et al., 2023](https://arxiv.org/html/2604.03295v1#bib.bib4)). Beyond scaling team size, a distinct dimension of scaling emerges in lifelong learning ([Zheng et al., 2025b](https://arxiv.org/html/2604.03295v1#bib.bib16)), where agents continuously adapt and improve over time.

Current research predominantly addresses these two scaling dimensions in isolation. Studies on team-size scaling investigate how performance varies with the number of agents, revealing that collaborative scaling can follow logistic patterns ([Qian et al., 2024](https://arxiv.org/html/2604.03295v1#bib.bib5)) and that smaller models with more agents can sometimes outperform larger models with fewer agents ([Li et al., 2024](https://arxiv.org/html/2604.03295v1#bib.bib7)). Separately, research on lifelong learning mainly focuses on how individual agents improve through accumulated experience, often through increasingly sophisticated memory architectures ([Zheng et al., 2025b](https://arxiv.org/html/2604.03295v1#bib.bib16)). However, the intersection of these dimensions remains largely unexplored. In practice, once a system moves from a single agent to a multi-agent team, lifelong learning is shaped not only by the quality of memory, but also by coordination overhead, communication cost, and information fragmentation ([Kim et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib6)). This observation motivates the central perspective of our paper. We argue that LLM multi-agent systems should be viewed through a conceptual scaling space jointly defined by team size and lifelong learning ability. In this view, scaling is no longer a single-axis question of whether “more agents are better” or “more experience is helpful”. Instead, it becomes a systems question about how the interaction between team composition and learning over time shapes long-horizon effectiveness and efficiency. Our experiments make this tension explicit: larger teams do not always achieve better long-term performance, and better memory can change the outcome enough that a smaller team becomes preferable. This reveals a new trade-off between scaling horizontally through more agents and scaling temporally through better learning over time.

Among the many potential factors, we focus on memory as the primary mechanism governing lifelong learning ability, because memory determines how agents retain, retrieve, and build upon past experiences ([Zhang et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib13); [Zheng et al., 2025b](https://arxiv.org/html/2604.03295v1#bib.bib16)). The difficulty of memory management grows with memory complexity, which depends on both team size and communication mechanism ([Kim et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib6)). We further argue that memory topology, which determines who can read or write which memories, is also a crucial factor in this complexity ([Wu and Shu, 2025](https://arxiv.org/html/2604.03295v1#bib.bib12)). Even under identical communication structures, different topologies distribute complexity very differently across the system. Existing work mainly studies isolated memory designs and does not sufficiently address cross-task learning in multi-agent settings. This leads to our first research question: RQ1: How can memory design improve lifelong learning in multi-agent systems? To answer it, we propose LLMA-Mem, a multi-agent memory framework that distills compact procedural memories from episodic experience while also modeling team capabilities through transactive memory. This design aims to improve both long-horizon performance and efficiency: in our experiments, LLMA-Mem improves lifelong learning ability over the baseline in all model-environment settings while reducing token usage by ($\downarrow$9.4%) to ($\downarrow$71.7%) relative to competing memory baselines. To study these effects, we require benchmarks that go beyond static question answering or single-turn reasoning, with a focus on multi-agent scenarios. We therefore select MultiAgentBench ([Zhu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib17)), whose multi-step environments expose both task completion and inter-agent communication over sequential tasks.

Following the previous discussion, our second research question is RQ2: How does lifelong learning ability interact with team size in multi-agent systems? To answer RQ2, we study LLMA-Mem over long task sequences and explicitly quantify how increasing team size changes the marginal value of experience. Intuitively, larger teams can provide stronger parallelism, which may accelerate learning early on. At the same time, scaling the team introduces coordination overhead, duplicated effort, and fragmented information flow, all of which can weaken long-horizon gains. Our results confirm that this relationship is not monotonic: smaller teams can outperform larger ones when memory supports stronger accumulation and reuse of experience. Through systematic analysis, we demonstrate how the interplay between memory design and team size creates a nuanced landscape for agentic scaling, offering guidance for researchers and practitioners in designing effective multi-agent systems. Our main contributions are as follows:

- •

  We introduce a joint scaling perspective for LLM multi-agent systems that connects team size scaling and lifelong learning scaling, framing them as an interacting scaling space rather than two isolated axes.
- •

  We propose LLMA-Mem, a lifelong memory framework that separates episodic memory as experiential substrate, procedural memory as the main mechanism for cross-task transfer, and transactive memory as the mechanism for team-level capability and coordination modeling.
- •

  We conduct systematic empirical study of how lifelong learning interacts with team size in LLM multi-agent systems, revealing a non-monotonic scaling pattern.
- •

  We show that LLMA-Mem improves long-horizon performance while reducing token cost relative to existing memory baselines, highlighting memory design as a practical path toward more effective and more efficient multi-agent systems.

## 2 Related Works

### 2.1 Scaling of team size in LLM Multi-agent Systems

A central question in designing LLM-based multi-agent systems (MAS) is how many agents to deploy in the systems, yet recent evidence suggests that team size scaling is highly conditional rather than universally monotonic. Early work on scalable collaboration networks argues that increasing the number of collaborating agents can produce systematic gains that follow a saturating scaling pattern. In particular, MacNet ([Qian et al., 2024](https://arxiv.org/html/2604.03295v1#bib.bib5)) reports a logistic shaped collaborative scaling law with diminishing returns beyond moderate team sizes, and further highlights that topology and message policy can matter as much as raw agent count, with irregular connectivity sometimes outperforming regular structures. Complementing this optimistic view, [Kim et al. (2025)](https://arxiv.org/html/2604.03295v1#bib.bib6) provide a large controlled study across multiple agentic benchmarks and canonical coordination architectures, showing that scaling team size can be net negative under fixed budgets due to coordination overhead, tool call contention, and error amplification, especially in long-horizon tasks. This raises concerns that some reported multi-agent gains may be confounded by weak baselines. [Xu et al. (2026)](https://arxiv.org/html/2604.03295v1#bib.bib18) argue that when agents are homogeneous, a single agent can often simulate the workflow through multi-turn execution while benefiting from KV-cache reuse, substantially narrowing or eliminating the apparent advantage of larger teams. Finally, MAS-Orchestra ([Ke et al., 2026](https://arxiv.org/html/2604.03295v1#bib.bib19)) reframes team size as an orchestration variable rather than a fixed hyperparameter, introducing controlled benchmarks and a notion of degree of MAS to study when richer multi-agent structures are necessary. Despite this progress, the literature still lacks a unified understanding of how team size should be chosen for systems that evolve over time. Existing scaling studies largely measure one-off task performance or short horizon coordination, leaving open how team size interacts with information fragmentation, and the accumulation of reusable knowledge across task sequences.

### 2.2 Lifelong learning in LLM Agent Systems

Beyond single-task performance, recent work studies lifelong learning in LLM agents, aiming for continual improvement without repeated retraining. [Zheng et al. (2025b)](https://arxiv.org/html/2604.03295v1#bib.bib16) conceptualize lifelong agents through the interaction of perception, memory, and action, emphasizing the transformation of experience into transferable competence. In practice, many systems implement lifelong adaptation through external memory mechanisms. For example, Agent Workflow Memory (AWM) induces reusable workflows from past trajectories to guide future decisions ([Wang et al., 2024](https://arxiv.org/html/2604.03295v1#bib.bib20)), while ReasoningBank extracts generalizable reasoning memories from both successes and failures and leverages memory aware test-time scaling to enrich experience in single agent scenario ([Ouyang et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib8)). As memory accumulates, efficiency becomes a challenge. Systems such as SimpleMem introduce structured compression and intent aware retrieval to support long term interaction under bounded token budgets ([Liu et al., 2026](https://arxiv.org/html/2604.03295v1#bib.bib21)). While works like MemSkill ([Zhang et al., 2026](https://arxiv.org/html/2604.03295v1#bib.bib22)) and Evo-Memory ([Wei et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib23)) models memory writing, pruning, and retrieval as evolving capabilities. Despite these advances, most lifelong agent research remains single agent centric, leaving open how lifelong learning behaves as team size grows and how memory topology influences the trade-off between scaling agents and scaling time.

### 2.3 Memory in LLM-based Agent Systems

Memory mechanisms have become foundational to LLM-based agents, enabling them to transcend the stateless nature of base language models and develop persistent, adaptive behaviors. Early influential work by [Park et al. (2023)](https://arxiv.org/html/2604.03295v1#bib.bib9) introduced Generative Agents, which maintain a memory stream of experiences, synthesize higher level reflections, and dynamically retrieve relevant memories for planning. MemGPT ([Packer et al., 2023](https://arxiv.org/html/2604.03295v1#bib.bib10)) proposed a hierarchical two-tier architecture inspired by operating system virtual memory, with a main context analogous to RAM and external storage analogous to disk, enabling agents to self edit their memory through function calls. More recent work like A-MEM ([Xu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib11)) introduces dynamic memory organization with interconnected knowledge networks. The extension of memory to multi-agent systems introduces unique challenges distinct from single agent memory ([Wu and Shu, 2025](https://arxiv.org/html/2604.03295v1#bib.bib12)). Transactive memory systems become essential for efficient task allocation ([Zhang et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib13)). Memory topology emerges as a critical design dimension, with three primary configurations identified in the literature: per-agent local memory where each agent maintains private stores, centralized shared memory using blackboard-style architectures, and hybrid approaches combining local perceptual memory with shared summarized world-state ([Wu and Shu, 2025](https://arxiv.org/html/2604.03295v1#bib.bib12)). Collaborative Memory frameworks ([Rajaram and Pereira-Pasarin, 2010](https://arxiv.org/html/2604.03295v1#bib.bib14)) formalize this with two-tier architectures featuring private fragments and shared fragments governed by dynamic access controls. LEGOMem ([Han et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib15)) specifically addresses procedural memory in multi-agent workflows, with orchestrator memory for high level planning and fine-grained subtask retrieval for worker agents. Despite these advances, current multi-agent memory research primarily focuses on coordination efficiency within individual tasks rather than cross-task evolution, leaving substantial gaps in understanding how memory architectures enable teams to improve over successive experiences.

## 3 Method

### 3.1 Preliminary Study

Before presenting LLMA-Mem, we first conduct a preliminary study on two existing frameworks, MARBLE ([Zhu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib17)) and A-Mem ([Xu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib11)), to examine whether existing designs are sufficient for lifelong learning in multi-agent systems. We choose these two baselines because they reflect two different design patterns. MARBLE adopts a more general memory design for MAS, combining short-term memory, long-term memory, and shared memory to support task execution and inter-agent interaction. In contrast, A-Mem is more memory-evolution oriented, where a dedicated memory agent explicitly manages, organizes, and refines memories over time. To evaluate their lifelong learning behavior, we analyze the cumulative performance gain (CMA) on coding tasks which is defined in Section [4](https://arxiv.org/html/2604.03295v1#S4 "4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), using the no-memory setting as the reference baseline. Figure [2](https://arxiv.org/html/2604.03295v1#S3.F2 "Figure 2 ‣ 3.1 Preliminary Study ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") shows the CMA curves for Claude-Sonnet-4.5 and Qwen3-next-80B. If an existing memory design is sufficient for lifelong MAS, we would expect its cumulative gain to grow steadily as the system accumulates more task experience. However, the observed trends suggest that the gains of MARBLE and A-Mem are still limited. Although both methods can outperform the no-memory baseline in parts of the task sequence, the improvement is not consistently amplified over time, and the cumulative gain often grows slowly or plateaus.

![Refer to caption](https://arxiv.org/html/2604.03295v1/preliminary.png)


Figure 2: CMA curves for Claude-Sonnet-4.5 and Qwen3-next-80B, showing limited long-horizon adaptation.

This suggests two key limitations of existing methods. First, existing methods do not sufficiently support cross-task reuse. The empirical trends imply that stored experiences are not consistently converted into compact and reusable knowledge that can benefit future tasks. In MARBLE, memory mainly serves as a general storage mechanism for task-related information, while A-Mem emphasizes memory refinement and dynamic organization. However, neither design explicitly separates raw task experiences from higher-level reusable procedures in a way that is tailored for continual multi-task transfer. For lifelong MAS, memory should not only preserve past information, but also progressively distill repeated successful experiences into concise procedural knowledge. Moreover, in multi-agent settings, memory should include team-state awareness, so that agents can reason from who is capable of what and how collaborators have performed in previous interactions. Second, existing methods do not explicitly address how memory topology affects lifelong learning complexity. Both MARBLE and A-Mem are instantiated under a fixed memory topology, while in lifelong MAS the choice of topology directly affects memory scalability, sharing efficiency, and role specialization. A local topology preserves agent-specific knowledge and specialization, but introduces fragmented memory growth as team size increases. A shared topology promotes collective reuse, but may increase retrieval noise and memory management overhead as more agents write into the same store. A hybrid topology may potentially balance these trade-offs by preserving local experiences while sharing abstracted knowledge and coordination statistics. The challenge lies in both storing and distributing memory across agents as the system evolves.

![Refer to caption](https://arxiv.org/html/2604.03295v1/Architecture_topology.png)


Figure 3: LLMA-Mem maintains three memory components: episodic memory for task experiences, procedural memory for consolidated reusable strategies, and transactive memory for agent capabilities and team coordination. The right panel illustrates three memory topology configurations that determine how memory is distributed and accessed across agents.

### 3.2 Memory Architecture

Based on this preliminary study, we propose LLMA-Mem (LifeLong Multi-Agent Memory), a unified memory framework designed to support lifelong learning across diverse multi-agent topologies. The framework consists of three interdependent memory modules: episodic, procedural, and transactive. Each serving distinct but complementary roles in enabling lifelong learning. To ensure reproducibility, we present detailed settings and prompts in Appendix [A](https://arxiv.org/html/2604.03295v1#A1 "Appendix A Details of LLMA-Mem Design ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") and Appendix [D](https://arxiv.org/html/2604.03295v1#A4 "Appendix D Prompt and Evaluation Notes ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").

As illustrated in figure [3](https://arxiv.org/html/2604.03295v1#S3.F3 "Figure 3 ‣ 3.1 Preliminary Study ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), LLMA-Mem maintains three complementary memory components: *episodic memory*, *procedural memory*, and *transactive memory*. Episodic memory records task-level experiences in their original context, procedural memory abstracts reusable strategies from accumulated experience, and transactive memory models agent capabilities and team coordination patterns. Together, these components enable both individual adaptation and system-level lifelong learning in multi-agent environments. We show a detailed case study on coding task at Appendix [A](https://arxiv.org/html/2604.03295v1#A1 "Appendix A Details of LLMA-Mem Design ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").

Episodic Memory. Episodic memory stores rich records of past task executions, including the task context, agent interactions, outcomes, and post hoc reflections. It serves as the foundation for later abstraction and supports case-based reasoning when the system encounters situations similar to prior experiences. Formally, an episode $e\_{i}$ is represented as
$e\_{i}=\langle a\_{\mathrm{id}},t\_{i},\tau\_{i},\mathcal{C}\_{i},\mathcal{A}\_{i},o\_{i},c\_{i},\mathcal{L}\_{i},\mathcal{P}^{\mathrm{rel}}\_{i}\rangle$,
where $a\_{\mathrm{id}}$ denotes the agent ID, $t\_{i}$ is the timestamp, $\tau\_{i}$ is the task description, $\mathcal{C}\_{i}$ is the team composition, $\mathcal{A}\_{i}$ is the action sequence, $o\_{i}$ is the task outcome, $c\_{i}$ denotes the environmental context, $\mathcal{L}\_{i}$ contains extracted lessons, and $\mathcal{P}^{\mathrm{rel}}\_{i}$ links the episode to related procedures. By preserving full task trajectories rather than only final outcomes, episodic memory provides the raw experiential substrate from which higher-level knowledge can later be consolidated.

Procedural Memory. Procedural memory stores reusable strategies and skills abstracted from episodic experiences. In contrast to episodic memory, which is instance-specific, procedural memory captures generalized knowledge that has proven effective across multiple tasks. This abstraction improves retrieval efficiency and facilitates transfer to future tasks. A procedure $p\_{j}$ is defined as
$p\_{j}=\langle a\_{\mathrm{id}},t^{c}\_{j},t^{u}\_{j},\eta\_{j},\kappa\_{j},s\_{j},f\_{j},\mathcal{E}^{\mathrm{src}}\_{j}\rangle$,
where $a\_{\mathrm{id}}$ is the owner or creator, $t^{c}\_{j}$ and $t^{u}\_{j}$ are the creation and most recent update times, $\eta\_{j}$ is the procedure title, $\kappa\_{j}$ is the procedural knowledge content, $s\_{j}$ and $f\_{j}$ are the numbers of successful and failed applications, and $\mathcal{E}^{\mathrm{src}}\_{j}$ denotes the supporting source episodes. We estimate the reliability of procedure $p\_{j}$ by its empirical success rate: $\rho\_{j}=\frac{s\_{j}}{s\_{j}+f\_{j}}$. In practice, procedural memory is updated through consolidation over episodic memory, transforming repeated successful patterns into explicit action templates.

Transactive Memory. Transactive memory captures "who knows what" within the multi-agent system and "which team configurations work well for which tasks". This component is particularly important in multi-agent lifelong learning, where effective task allocation depends not only on individual competence but also on accumulated collaboration experience. We model transactive memory using two structures: agent profiles and team patterns. An agent profile for agent $k$ is defined as
$\alpha\_{k}=\langle a\_{\mathrm{id}},\mathcal{S}\_{k},\Gamma\_{k},\mathcal{H}\_{k},\xi\_{k}\rangle$, where $\mathcal{S}\_{k}$ denotes the agent’s specialization areas, $\Gamma\_{k}$ maps task types to proficiency estimates, $\mathcal{H}\_{k}$ records collaboration history with other agents, and $\xi\_{k}$ is an overall success rate. A team pattern for team configuration $m$ is defined as $\phi\_{m}=\langle\mathcal{C}\_{m},\mathcal{T}^{\mathrm{suited}}\_{m}\rangle$, where $\mathcal{C}\_{m}$ is the team composition and $\mathcal{T}^{\mathrm{suited}}\_{m}$ is the set of task types for which this team is effective. During planning, the system consults transactive memory to support task decomposition, role assignment, and team formation. This component is therefore central to our analysis of how team size affects lifelong learning and coordination efficiency.

### 3.3 Memory Topology Configurations

As shown in figure [3](https://arxiv.org/html/2604.03295v1#S3.F3 "Figure 3 ‣ 3.1 Preliminary Study ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), LLMA-Mem supports three memory topologies that determine how knowledge is distributed and shared across agents. Local Topology: In the local topology, each agent $a\_{i}$ maintains a private memory store $\mathcal{M}\_{i}=\langle\mathcal{E}\_{i},\mathcal{P}\_{i},\mathcal{T}\_{i}\rangle$, where $\mathcal{E}\_{i}$, $\mathcal{P}\_{i}$, and $\mathcal{T}\_{i}$ denote the agent’s episodic, procedural, and transactive memory, respectively. Agents cannot directly access one another’s memory, and knowledge transfer occurs only through explicit inter-agent communication during task execution. Shared Topology: In the shared topology, all agents access a centralized memory store $\mathcal{M}\_{\mathrm{shared}}=\langle\mathcal{E}\_{\mathrm{shared}},\mathcal{P}\_{\mathrm{shared}},\mathcal{T}\_{\mathrm{shared}}\rangle.$ All newly acquired experiences contribute to a common memory pool, allowing the entire team to access collective experience. Hybrid Topology: The hybrid topology combines private and shared memory: $\mathcal{M}^{\mathrm{hybrid}}\_{i}=\langle\mathcal{E}^{\mathrm{local}}\_{i},\,\mathcal{T}^{\mathrm{local}}\_{i},\,\mathcal{P}\_{\mathrm{shared}},\,\mathcal{T}\_{\mathrm{shared}}\rangle.$ Here, episodic memory remains local to preserve agent-specific experience, while procedural memory and aggregated team statistics are shared across agents. Among three topologies, local topology enables role-specific memory storage, while shared topology enables cross-agent memory reuse. Hybrid topology balances knowledge sharing and specialization where agents retain their own task histories, while the team collectively benefits from abstracted procedures and global coordination statistics.

![Refer to caption](https://arxiv.org/html/2604.03295v1/lifecycle.png)


Figure 4: During task execution, the system retrieves relevant memories using a relevance–importance score, updates episodic and transactive statistics after each task, and periodically consolidates episodic experiences into reusable procedural knowledge.

### 3.4 Memory Lifecycle

As shown in figure [4](https://arxiv.org/html/2604.03295v1#S3.F4 "Figure 4 ‣ 3.3 Memory Topology Configurations ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), the memory lifecycle in LLMA-Mem consists of three phases: retrieval, update, and consolidation. During task execution, the system retrieves memory entries relevant to the current query context $q$ (e.g., the task description). Retrieval follows a hierarchical strategy: the agent first queries procedural memory when available, and falls back to episodic memory if no sufficiently relevant procedure is found. For a memory item $m$, the retrieval score is defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathrm{score}(m,q)=\mathrm{rel}(m,q)+\mathrm{imp}(m)$$ |  | (1) |

where $\mathrm{rel}(m,q)$ denotes semantic relevance and $\mathrm{imp}(m)$ denotes memory importance. Semantic relevance is computed via cosine similarity in embedding space. For procedural memory importance is defined as success rate $\rho\_{j}$, and for episodic memory importance is defined as task score. Both semantic relevance and importance are standardized.

In our implementation, the top-$k$ retrieved items are provided to the agent as context.

After each task, the memory system is updated at three levels. First, a new episode $e\_{\mathrm{new}}$ is appended to episodic memory:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{E}^{(t+1)}=\mathcal{E}^{(t)}\cup\{e\_{\mathrm{new}}\}.$$ |  | (2) |

Second, for each procedure used during the task, success and failure counts are incrementally updated:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$s\_{j}^{(t+1)}=s\_{j}^{(t)}+\mathbb{1}\_{\mathrm{success}},\qquad f\_{j}^{(t+1)}=f\_{j}^{(t)}+\mathbb{1}\_{\mathrm{failure}}.$$ |  | (3) |

These statistics are then used to refresh the reliability estimate of the procedure. Third, transactive memory is updated using the observed task outcomes. For example, the reliability of agent $k$ is updated as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\xi\_{k}^{(t+1)}=\frac{\mathrm{successes}\_{k}}{\mathrm{total\\_tasks}\_{k}},$$ |  | (4) |

while the agent’s specialization estimates and the team-level statistics are updated according to the latest execution trace. To convert raw experiences into reusable knowledge, LLMA-Mem periodically consolidates episodic memory into procedural memory every $N$ episodes. The system groups semantically similar episodes according to their extracted lessons, identifies recurring successful patterns, and abstracts them into candidate procedures, as summarized in Algorithm [1](https://arxiv.org/html/2604.03295v1#alg1 "Algorithm 1 ‣ 3.4 Memory Lifecycle ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"). This consolidation stage is the key mechanism by which LLMA-Mem transforms task-level experience into reusable and shareable knowledge, enabling continual improvement over time rather than treating tasks independently.

Algorithm 1  Procedural Knowledge Extraction

1:
Input: episodic memory $\mathcal{E}$

2:
Output: new procedures $\mathcal{P}\_{\mathrm{new}}$

3:
Cluster episodes in $\mathcal{E}$ by semantic similarity of lessons\_learned.

4:
for each cluster $C$ with $|C|\geq 2$ do

5:
  $E\_{\mathrm{succ}}\leftarrow\{e\in C\mid e\text{ is successful}\}$

6:
  if $|E\_{\mathrm{succ}}|\geq 2$ then

7:
   Extract a generalized strategy $\kappa$ from $E\_{\mathrm{succ}}$

8:
   Create procedure $p\_{\mathrm{new}}$ with source set $\mathcal{E}^{\mathrm{src}}\leftarrow E\_{\mathrm{succ}}$

9:
   Add $p\_{\mathrm{new}}$ to $\mathcal{P}\_{\mathrm{new}}$

10:
  end if

11:
end for

12:
Remove redundant procedures whose source episodes are subsets of others

13:
return $\mathcal{P}\_{\mathrm{new}}$

## 4 Experiments

### 4.1 Experimental Setup

Benchmark.
To evaluate the lifelong learning capability of LLMA-Mem, we adopt an agentic benchmark which better captures the interactive and sequential nature of real-world agent systems, making them particularly suitable for studying memory-enabled learning dynamics. We therefore choose MultiAgentBench ([Zhu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib17)), a benchmark specifically designed for evaluating LLM multi-agent systems across diverse environments. MultiAgentBench contains both collaborative and competitive settings. Since our memory framework is designed to support agent teams that cooperate to achieve shared goals, we focus on the collaborative environments. In particular, we select three representative domains: coding, research, and database with 100 tasks for each environment.

Models.
To study the robustness of the proposed memory framework across different model families and parameter scales, we evaluate both closed-source and open-source LLMs. Specifically, we use Claude-Sonnet-4.5 ([Anthropic, 2025](https://arxiv.org/html/2604.03295v1#bib.bib28)), DeepSeek-V3.2 ([Liu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib29)), Qwen3-next-80B ([Qwen Team, 2025](https://arxiv.org/html/2604.03295v1#bib.bib30)), and Qwen3-32B-Instruct ([Yang et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib31)). Within the MultiAgentBench framework, Claude-Sonnet-4.5 is used as the evaluation model to score task outcomes. For LLMA-Mem and A-Mem, we utilize Titan-text-embeddings-v2 ([Amazon Web Services, 2024](https://arxiv.org/html/2604.03295v1#bib.bib32)) as embedding model. All models are accessed through the Amazon Bedrock API under identical inference settings. To ensure reproducibility, we provide detailed experimental configurations in the Appendix [C](https://arxiv.org/html/2604.03295v1#A3 "Appendix C Experiments Implementation Details ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").

Baselines. We choose three baselines compare to LLMA-Mem. (i) W.o. Memory: only utilize LLM into MultiAgentBench without using any memory module. (ii) MARBLE ([Zhu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib17)): the multi-agent collaboration framework proposed in MultiAgentBench with a memory module. MARBLE’s memory module follows popular design protocol when both short-tern memory, long-term memory, and shared memory exist. (iii) A-Mem ([Xu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib11)): A-Mem is one of the representative memory framework which maintains a dynamic knowledge network and also implements a evolved memory storage, which is related and comparable to LLMA-Mem. For more baseline implementation details, see Appendix [C](https://arxiv.org/html/2604.03295v1#A3 "Appendix C Experiments Implementation Details ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").

Evaluation Metrics. We evaluate lifelong multi-agent performance using the task-level scores provided by the original MultiAgentBench codebase ([Zhu et al., 2025](https://arxiv.org/html/2604.03295v1#bib.bib17)). Specifically, MultiAgentBench reports two complementary metrics:
Task Score (TS), which measures the correctness or quality of the final task output, and Communication Score (CS), which evaluates inter-agent communication and planning during the task execution process. TS captures the agents’ ability to solve the task itself, while CS reflects the quality of collaboration and coordination among agents. To obtain a unified task-level utility, we define

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\_{t}=\frac{\mathrm{TS}\_{t}+\mathrm{CS}\_{t}}{2},$$ |  | (5) |

where $S\_{t}$ denotes the combined performance on task $t$. We evaluate lifelong learning ability through the evolution of performance over the task sequence. First, we analyze the performance trajectory $\{S\_{t}\}\_{t=1}^{T}$,
which reflects how task performance changes as the system accumulates experience over time. To obtain a smoother estimate of overall learning progress, we compute the running mean performance ([Zheng et al., 2025b](https://arxiv.org/html/2604.03295v1#bib.bib16); [Cai et al., 2021](https://arxiv.org/html/2604.03295v1#bib.bib24))

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$AS(t)=\frac{1}{t}\sum\_{i=1}^{t}S\_{i},$$ |  | (6) |

which summarizes the average performance achieved up to task $t$.
We further report the Average of AS (AAS) as a scalar summary of
the system’s performance across its entire lifetime ([Caccia et al., 2022](https://arxiv.org/html/2604.03295v1#bib.bib25); [Zheng et al., 2025b](https://arxiv.org/html/2604.03295v1#bib.bib16)):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$AAS=\frac{1}{T}\sum\_{i=1}^{T}AS(i)$$ |  | (7) |

Finally, to quantify the benefit of memory, we compute the cumulative performance gain relative to the no-memory baseline ([Zheng et al., 2025a](https://arxiv.org/html/2604.03295v1#bib.bib26); [Serrano et al., 2021](https://arxiv.org/html/2604.03295v1#bib.bib27)):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$CMA\_{t}=\sum\_{i=1}^{t}\left(S\_{i}^{\mathrm{method}}-S\_{i}^{\mathrm{nomem}}\right).$$ |  | (8) |

An increasing CMA curve indicates that accumulated memory continually consistently improves task performance over time. These metrics collectively capture both the instantaneous task performance and the long-term improvement dynamics of the multi-agent system.

### 4.2 Main Results

As shown in Table [1](https://arxiv.org/html/2604.03295v1#S4.T1 "Table 1 ‣ 4.2 Main Results ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), LLMA-Mem is consistently competitive on overall task execution when we examine Task Score (TS) and Communication Score (CS) together. On TS, LLMA-Mem achieves the best or tied-best result in most model–environment pairs suche as Qwen3-next-80B on Research (+10.67), indicating that consolidated memory usually transfers into stronger task completion quality. The trend on CS is more mixed: LLMA-Mem often improves collaboration, especially for DeepSeek-v3.2 on Research (+7.17) and Qwen3-32B-Instruct on Database (+10.11), but there are still cases such as Claude-Sonnet-4.5 on Research and Qwen3-Next-80B on Research and Database where stronger task-solving does not fully translate into better communication quality. This suggests that memory helps agents act more effectively, while coordination remains more sensitive to model family and environment-specific interaction patterns.

Table 1: Performance across environments. We report Task Score (TS), Coordination Score (CS), and Average of AS (AAS). Best results within each model and environment are boldfaced. For LLMA-Mem, the AAS cell also shows the change relative to the no-memory baseline.

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Setting | Coding | | | Research | | | Database | | |
| TS | CS | AAS | TS | CS | AAS | TS | CS | AAS |
| Claude-Sonnet-4.5 | W.o. Memory | 64.43 | 42.29 | 53.42 | 75.12 | 78.97 | 76.94 | 69.39 | 88.03 | 77.35 |
| MARBLE | 63.05 | 44.71 | 53.99 | 75.17 | 81.84 | 78.37 | 69.70 | 82.96 | 75.70 |
| A-Mem | 61.57 | 46.41 | 53.76 | 75.69 | 82.47 | 77.79 | 69.70 | 82.31 | 75.13 |
| LLMA-Mem | 65.00 | 44.75 | 54.02 (+0.60) | 77.62 | 74.11 | 77.77 (+0.83) | 70.00 | 88.27 | 78.52 (+1.17) |
| Deepseek-v3.2 | W.o. Memory | 58.69 | 43.47 | 52.26 | 75.53 | 58.46 | 65.94 | 71.00 | 82.40 | 75.55 |
| MARBLE | 56.93 | 40.97 | 50.86 | 76.30 | 58.21 | 68.43 | 70.00 | 75.60 | 72.62 |
| A-Mem | 49.74 | 37.95 | 46.72 | 72.40 | 55.64 | 64.27 | 68.69 | 73.48 | 70.51 |
| LLMA-Mem | 59.72 | 46.37 | 53.46 (+1.20) | 75.10 | 65.63 | 71.86 (+5.92) | 71.00 | 81.07 | 76.20 (+0.65) |
| Qwen3-next-80B | W.o. Memory | 58.98 | 45.20 | 52.85 | 57.22 | 45.52 | 50.13 | 69.00 | 72.32 | 67.61 |
| MARBLE | 57.03 | 46.63 | 52.17 | 61.62 | 42.66 | 55.11 | 67.00 | 68.53 | 64.38 |
| A-Mem | 57.23 | 48.09 | 52.90 | 69.10 | 48.39 | 57.67 | 71.59 | 70.39 | 71.38 |
| LLMA-Mem | 60.65 | 44.86 | 53.12 (+0.27) | 67.89 | 43.62 | 49.54 | 70.41 | 68.55 | 69.98 (+2.37) |
| Qwen3-32B-Instruct | W.o. Memory | 49.24 | 44.23 | 48.01 | 71.56 | 72.63 | 72.06 | 71.00 | 66.07 | 67.87 |
| MARBLE | 48.82 | 44.40 | 46.76 | 72.38 | 68.62 | 70.36 | 71.72 | 69.15 | 69.68 |
| A-Mem | 47.05 | 46.79 | 47.66 | 73.33 | 68.61 | 70.82 | 71.43 | 73.23 | 71.20 |
| LLMA-Mem | 49.68 | 46.69 | 49.43 (+1.42) | 73.17 | 73.08 | 73.50 (+1.44) | 70.41 | 76.18 | 71.06 (+3.19) |

![Refer to caption](https://arxiv.org/html/2604.03295v1/CMA.png)


Figure 5: Cumulative moving average (CMA) curves on representative settings. LLMA-Mem shows more stable long-horizon improvement than MARBLE and A-Mem, with especially margins represented by DeepSeek-v3.2 and Qwen3-32B-Instruct.

From the lifelong learning perspective, AAS shows a clearer advantage for LLMA-Mem. LLMA-Mem consistently improves over the no-memory baseline. The largest gains appear on DeepSeek-v3.2 in Research (+5.92) and Qwen3-32B-Instruct in Database (+3.19), showing that the framework can convert accumulated experience into sustained performance improvements over long task sequences. The only exception is Qwen3-Next-80B on Research, where LLMA-Mem raises TS but reduces CS enough to slightly lower AAS, implying that better memory alone is not sufficient if coordination quality does not keep pace. Figure [5](https://arxiv.org/html/2604.03295v1#S4.F5 "Figure 5 ‣ 4.2 Main Results ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") further illustrates this long-horizon behavior at the trajectory level. On Qwen3-32B-Instruct, LLMA-Mem finishes with the highest CMA in both Coding and Database compare to the baselines. The contrast is even sharper on DeepSeek-v3.2: LLMA-Mem remains positive throughout most of the sequence and ends at 167.0 on Coding and 321.8 on Research, while both MARBLE and A-Mem drift substantially negative by the end of the run. This indicates that LLMA-Mem improves average final performance, also yields a more stable accumulation of gains over time, whereas baseline memory designs are more vulnerable to performance decay as tasks progress.

### 4.3 Cost Analysis

Figure [1](https://arxiv.org/html/2604.03295v1#S0.F1 "Figure 1 ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") shows that LLMA-Mem is not only effective in long-horizon performance, but also consistently more token-efficient than the compared memory baselines. Across all model–environment pairs, LLMA-Mem yields lower average token usage than MARBLE and A-Mem, with reductions ranging from ($\downarrow$9.4%) to ($\downarrow$71.7%). The savings are especially large on Claude-Sonnet-4.5 for Research ($\downarrow$60.4%) and Coding ($\downarrow$42.2%), on DeepSeek-V3.2 for Coding ($\downarrow$47.5%), on Qwen3-32B-Instruct for Research ($\downarrow$71.7%) and Database ($\downarrow$44.2%), and on Qwen3-next-80B for Coding ($\downarrow$53.2%). Even in the smallest-margin cases, such as DeepSeek-V3.2 on Database ($\downarrow$9.4%) and Qwen3-next-80B on Database ($\downarrow$14.5%), LLMA-Mem still maintains a clear cost advantage.

This reduction mainly comes from lower input-token overhead. In MARBLE and A-Mem, memory retrieval often injects larger context blocks into the prompt, causing token cost to grow substantially as more experiences accumulate. By contrast, LLMA-Mem consolidates episodic traces into compact procedural memories, allowing the system to reuse past experience in a more compressed form rather than repeatedly replaying raw trajectories. As a result, LLMA-Mem avoids much of the context inflation suffered by the other memory baselines while preserving useful long-term knowledge. Taken together with the main-results discussion, these findings highlight an important property of LLMA-Mem: its gains are not obtained by simply spending more tokens. Instead, LLMA-Mem achieves a better efficiency–effectiveness trade-off, improving performance over baselines while simultaneously reducing token consumption relative to alternative memory designs. This supports our central claim that better memory consolidation can scale time more effectively than naively scaling context.

Table 2: Influence of team size on performance. We report average task score (TS), coordination score (CS), Average of AS (AAS), and average token usage per task.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Model | Team Size | Avg TS | Avg CS | AAS | Avg Tokens |
| Claude-Sonnet-4.5 | 1 | 77.08 | 49.58 | 57.78 | 53,549 |
| 3 | 76.89 | 48.78 | 58.96 | 139,948 |
| 5 | 77.33 | 58.00 | 62.57 | 279,563 |
| 7 | 78.22 | 53.11 | 62.21 | 344,323 |
| DeepSeek-V3.2 | 1 | 72.08 | 48.13 | 49.01 | 41,205 |
| 3 | 72.44 | 52.00 | 54.48 | 116,409 |
| 5 | 73.75 | 50.83 | 57.76 | 167,755 |
| 7 | 73.33 | 53.65 | 58.79 | 274,360 |
| Qwen3-next-80B | 1 | 60.95 | 40.71 | 35.59 | 44,251 |
| 3 | 57.95 | 35.13 | 34.47 | 127,120 |
| 5 | 63.33 | 38.75 | 43.27 | 192,425 |
| 7 | 75.71 | 41.43 | 55.05 | 275,234 |
| Qwen3-32B-Instruct | 1 | 72.31 | 47.44 | 53.22 | 45,247 |
| 3 | 72.86 | 54.64 | 59.21 | 107,808 |
| 5 | 70.00 | 56.96 | 58.45 | 216,170 |
| 7 | 71.67 | 54.79 | 60.98 | 228,069 |

### 4.4 Influence of team size

Supported by the original MultiAgentBench settings, we conduct experiments with LLMA-Mem using team sizes of {1, 3, 5, 7} on a subset of 16 tasks from the research environment that support at least seven agents, in order to investigate the influence of team size. We keep the same graph communication topology and set the memory consolidation interval to 3 for LLMA-Mem to better observe evolving behaviors over time. Figure [1](https://arxiv.org/html/2604.03295v1#S0.F1 "Figure 1 ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") illustrates how lifelong learning ability is affected by team size. From a temporal perspective, LLMA-Mem demonstrates consistent performance improvement as the task index increases across all team sizes and models, indicating that the system benefits from accumulated experience during sequential tasks. From a spatial perspective, increasing team size generally leads to improved performance as well. This two-dimensional perspective naturally defines scaling space of LLM multi-agent systems.

Interestingly, this scaling space is non-monotonic. For example, with Qwen3-32B-Instruct we observe a performance inversion where a 3-agent team outperforms a 5-agent team. This phenomenon is even more pronounced for Claude-Sonnet-4.5, where the 5-agent team surpasses the 7-agent team after approximately the fifth task. This observation leads to an important insight: a MAS with fewer agents can achieve superior long-term performance through stronger lifelong learning ability. Essentially, this reflects a trade-off between performance and computational cost in long-horizon scenarios. To further analyze this trade-off, we examine the relationship between average token cost per task and performance across different team sizes and models. As shown in Table [2](https://arxiv.org/html/2604.03295v1#S4.T2 "Table 2 ‣ 4.3 Cost Analysis ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), increasing team size consistently results in higher computational cost across all models, and this cost growth becomes more pronounced as model scale increases. Meanwhile, the trends of TS and CS are not always aligned. For example, in both DeepSeek-V3.2 and Qwen3-32B-Instruct, TS achieves higher values at smaller team sizes than those corresponding to the best CS results. This suggests that communication overhead can become a limiting factor in MAS as team size increases.

Furthermore, when model scale is also considered as part of the cost, an interesting result emerges. Benefiting from the lifelong learning ability enabled by LLMA-Mem, Qwen3-32B-Instruct achieves a task score (TS) advantage at a 3-agent team despite having significantly fewer parameters than the other models. This configuration represents a local optimum in the cost–performance trade-off among all evaluated settings.

Table 3: Ablation results on the coding environment with Qwen3-32B-Instruct. The upper block compares memory topologies under a fixed consolidation interval $N{=}5$. The lower block compares consolidation intervals under the local topology.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Study | Setting | TS | CS | AAS |
| Topology ($N{=}5$) | Local | 49.68 | 46.69 | 49.43 |
| Shared | 46.79 | 45.96 | 48.62 |
| Hybrid | 46.52 | 40.32 | 46.92 |
| Consolidation (Local) | $N{=}2$ | 45.86 | 42.93 | 45.07 |
| $N{=}5$ | 49.68 | 46.69 | 49.43 |
| $N{=}10$ | 47.72 | 42.36 | 46.87 |
| $N{=}20$ | 47.71 | 41.43 | 47.30 |

### 4.5 Ablation Study

#### 4.5.1 Influence of Memory Topology

Table [3](https://arxiv.org/html/2604.03295v1#S4.T3 "Table 3 ‣ 4.4 Influence of team size ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") summarizes the ablation results. To isolate the effect of topology, we compare the three topologies under the same consolidation interval $N{=}5$. Under this controlled comparison, the local topology achieves the best performance on all three metrics, outperforming the shared and hybrid topology. The gap is especially clear on AAS, indicating that the local design yields the strongest long-horizon learning effect. We attribute this advantage to role-specific memory formation. In the coding environment, different agents often play different functional roles, such as decomposition, implementation, debugging, and verification. A local memory store allows each agent to accumulate procedures and experiences that are tightly coupled to its own role, which makes subsequent retrieval more compatible and more directly reusable. By contrast, in the shared topology, experiences generated under one role may later be retrieved by another agent operating under a different responsibility, leading to incompatible memory reuse and weaker downstream coordination. The hybrid topology does not fully eliminate this problem, because the shared component still introduces cross-role interference. Overall, these results suggest that, in the lifelong setting, preserving role-specific memories is more beneficial than maximizing global sharing, making the local topology the most effective memory topology among the tested designs.

#### 4.5.2 Influence of Memory Consolidation interval

We next analyze the effect of the consolidation interval $N$ under the local topology, comparing $N\in\{2,5,10,20\}$. As shown in Table [3](https://arxiv.org/html/2604.03295v1#S4.T3 "Table 3 ‣ 4.4 Influence of team size ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), the best overall setting is $N{=}5$, while both more frequent consolidation ($N{=}2$) and less frequent consolidation ($N{=}10,20$) perform worse. This pattern indicates that the consolidation interval exhibits a non-monotonic effect, with a moderate update frequency providing the best balance. Our interpretation is that $N{=}5$ offers a suitable granularity for procedural abstraction. When consolidation is too frequent, as in $N{=}2$, episodic experiences may be converted into procedures before enough evidence has accumulated, resulting in unstable or overly specific procedural memories. When consolidation is too sparse, as in $N{=}10$ or $20$, useful experiences remain trapped in episodic form for too long, delaying their reuse and weakening the cumulative benefit over the task sequence. In contrast, $N{=}5$ appears to provide enough repeated evidence to form reliable procedures while still updating memory quickly enough to support future tasks. Therefore, under the local topology, a moderate consolidation schedule is the most effective design choice, and together with the topology result, the ablation study suggests that local memory topology plus moderately frequent consolidation is the strongest configuration for lifelong learning scenarios.

## 5 Conclusion

In this paper, we study LLM multi-agent systems from a joint scaling perspective that considers both scaling across agents and scaling across time. Rather than treating team size and lifelong learning as separate questions, we argue that they form an interacting scaling space in which long-horizon utility depends on how effectively a system converts experience into reusable knowledge under coordination and cost constraints. From this perspective, memory is not a peripheral add-on; it is the mechanism that reshapes how multi-agent systems scale. To realize this idea, we propose LLMA-Mem, a lifelong memory framework that integrates episodic, procedural, and transactive memory under flexible memory topologies. This decomposition clarifies which aspects of our design primarily support lifelong learning and which are specifically required for long-horizon multi-agent collaboration.

Empirically, across coding, research, and database environments on MultiAgentBench, LLMA-Mem consistently improves long-horizon performance while reducing token cost by ($\downarrow$9.4%) to ($\downarrow$71.7%) relative to competing memory baselines. More importantly, our analysis reveals that the interaction between team size and lifelong learning is fundamentally non-monotonic. Larger teams can provide stronger parallelism, but they also introduce communication overhead and information fragmentation that can weaken long-term gains. As a result, smaller teams can outperform larger ones when memory better supports the stable accumulation and reuse of experience.

## 6 Limitations

Our work still has several limitations. First, although our experiments demonstrate clear lifelong learning capabilities and reveal a synergistic interaction with team size, the explored team scale remains limited. While we analyze multiple model families and vary team size up to seven agents, this range may not fully capture the behavior of larger collectives, where communication bottlenecks, role specialization, and memory interference are likely to become more pronounced. Second, our evaluation is restricted to three collaborative environments in MultiAgentBench: coding, research, and database. Although these settings are representative for studying sequential agent interaction, they do not encompass other important lifelong scenarios such as web search, embodied control, or personalization. Finally, our study focuses on overall task and communication performance, but does not explicitly assess memory quality itself, such as redundancy, staleness, or robustness to retrieval errors. We consider these directions important avenues for future work toward a more comprehensive understanding of lifelong learning in multi-agent systems.

\nobibliography

\*

## References

- Amazon Web Services (2024)
  Amazon Web Services
  Amazon titan text embeddings v2: a new state-of-the-art embeddings model on amazon bedrock.
  Note: <https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-amazon-titan-text-embeddings-v2.html>
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p2.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Anthropic (2025)
  Anthropic
  System card: claude sonnet 4.5.
  Technical report
   Anthropic.
  Note: Technical report
  External Links: [Link](https://www-cdn.anthropic.com/963373e433e489a87a10c823c52a0a013e9172dd.pdf)
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p2.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Caccia et al. (2022)
  L. Caccia, J. Xu, M. Ott, M. Ranzato, and L. Denoyer
  On anytime learning at macroscale.
  In Conference on Lifelong Learning Agents,
  pp. 165–182.
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p6.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Cai et al. (2021)
  Z. Cai, O. Sener, and V. Koltun
  Online continual learning with natural distribution shifts: an empirical study with visual data.
  In Proceedings of the IEEE/CVF international conference on computer vision,
  pp. 8281–8290.
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p4.2 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Chen et al. (2024a)
  L. Chen, J. Q. Davis, B. Hanin, P. Bailis, I. Stoica, M. Zaharia, and J. Zou
  Are more llm calls all you need? towards scaling laws of compound inference systems.
  arXiv preprint arXiv:2403.02419.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p1.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Chen et al. (2024b)
  W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, et al.
  AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors..
  In ICLR,
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p1.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Du et al. (2023)
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch
  Improving factuality and reasoning in language models through multiagent debate.
  In Forty-first International Conference on Machine Learning,
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p1.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Han et al. (2025)
  D. Han, C. Couturier, D. M. Diaz, X. Zhang, V. Rühle, and S. Rajmohan
  Legomem: modular procedural memory for multi-agent llm systems for workflow automation.
  arXiv preprint arXiv:2510.04851.
  Cited by: [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Ke et al. (2026)
  Z. Ke, Y. Ming, A. Xu, R. Chin, X. Nguyen, P. Jwalapuram, S. Yavuz, C. Xiong, and S. Joty
  MAS-orchestra: understanding and improving multi-agent reasoning through holistic orchestration and controlled benchmarks.
  arXiv preprint arXiv:2601.14652.
  Cited by: [§2.1](https://arxiv.org/html/2604.03295v1#S2.SS1.p1.1 "2.1 Scaling of team size in LLM Multi-agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Kim et al. (2025)
  Y. Kim, K. Gu, C. Park, C. Park, S. Schmidgall, A. A. Heydari, Y. Yan, Z. Zhang, Y. Zhuang, M. Malhotra, et al.
  Towards a science of scaling agent systems.
  arXiv preprint arXiv:2512.08296.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p2.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§1](https://arxiv.org/html/2604.03295v1#S1.p3.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§2.1](https://arxiv.org/html/2604.03295v1#S2.SS1.p1.1 "2.1 Scaling of team size in LLM Multi-agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Li et al. (2024)
  J. Li, Q. Zhang, Y. Yu, Q. Fu, and D. Ye
  More agents is all you need.
  arXiv preprint arXiv:2402.05120.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p2.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Liu et al. (2025)
  A. Liu, A. Mei, B. Lin, B. Xue, B. Wang, B. Xu, B. Wu, B. Zhang, C. Lin, C. Dong, et al.
  Deepseek-v3. 2: pushing the frontier of open large language models.
  arXiv preprint arXiv:2512.02556.
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p2.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Liu et al. (2026)
  J. Liu, Y. Su, P. Xia, S. Han, Z. Zheng, C. Xie, M. Ding, and H. Yao
  SimpleMem: efficient lifelong memory for llm agents.
  arXiv preprint arXiv:2601.02553.
  Cited by: [§2.2](https://arxiv.org/html/2604.03295v1#S2.SS2.p1.1 "2.2 Lifelong learning in LLM Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Ouyang et al. (2025)
  S. Ouyang, J. Yan, I. Hsu, Y. Chen, K. Jiang, Z. Wang, R. Han, L. T. Le, S. Daruki, X. Tang, et al.
  Reasoningbank: scaling agent self-evolving with reasoning memory.
  arXiv preprint arXiv:2509.25140.
  Cited by: [§2.2](https://arxiv.org/html/2604.03295v1#S2.SS2.p1.1 "2.2 Lifelong learning in LLM Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Packer et al. (2023)
  C. Packer, V. Fang, S. Patil, K. Lin, S. Wooders, and J. Gonzalez
  MemGPT: towards llms as operating systems..
  Cited by: [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Qian et al. (2024)
  C. Qian, Z. Xie, Y. Wang, W. Liu, K. Zhu, H. Xia, Y. Dang, Z. Du, W. Chen, C. Yang, et al.
  Scaling large language model-based multi-agent collaboration.
  arXiv preprint arXiv:2406.07155.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p2.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§2.1](https://arxiv.org/html/2604.03295v1#S2.SS1.p1.1 "2.1 Scaling of team size in LLM Multi-agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Qwen Team (2025)
  Qwen Team
  Qwen3-next: towards ultimate training and inference efficiency.
  Note: <https://qwen.ai/blog?id=4074cca80393150c248e508aa62983f9cb7d27cd&from=research.latest-advancements-list>Qwen Research Blog
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p2.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Rajaram and Pereira-Pasarin (2010)
  S. Rajaram and L. P. Pereira-Pasarin
  Collaborative memory: cognitive research and theory.
  Perspectives on psychological science 5 (6), pp. 649–663.
  Cited by: [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Serrano et al. (2021)
  S. A. Serrano, J. M. Carranza, L. E. S. Succar, and L. E. Error
  Inter-task similarity for lifelong reinforcement learning in heterogeneous tasks..
  In IJCAI,
  pp. 4915–4916.
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p7.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Wang et al. (2024)
  Z. Z. Wang, J. Mao, D. Fried, and G. Neubig
  Agent workflow memory.
  arXiv preprint arXiv:2409.07429.
  Cited by: [§2.2](https://arxiv.org/html/2604.03295v1#S2.SS2.p1.1 "2.2 Lifelong learning in LLM Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Wei et al. (2025)
  T. Wei, N. Sachdeva, B. Coleman, Z. He, Y. Bei, X. Ning, M. Ai, Y. Li, J. He, E. H. Chi, et al.
  Evo-memory: benchmarking llm agent test-time learning with self-evolving memory.
  arXiv preprint arXiv:2511.20857.
  Cited by: [§2.2](https://arxiv.org/html/2604.03295v1#S2.SS2.p1.1 "2.2 Lifelong learning in LLM Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Wu et al. (2024)
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, et al.
  Autogen: enabling next-gen llm applications via multi-agent conversations.
  In First Conference on Language Modeling,
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p1.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Wu and Shu (2025)
  S. Wu and K. Shu
  Memory in llm-based multi-agent systems: mechanisms, challenges, and collective intelligence.
  Authorea Preprints.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p3.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Xu et al. (2026)
  J. Xu, A. Koesdwiady, S. Bei, Y. Han, B. Huang, D. Wang, Y. Chen, Z. Wang, P. Wang, P. Li, et al.
  Rethinking the value of multi-agent workflow: a strong single agent baseline.
  arXiv preprint arXiv:2601.12307.
  Cited by: [§2.1](https://arxiv.org/html/2604.03295v1#S2.SS1.p1.1 "2.1 Scaling of team size in LLM Multi-agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Xu et al. (2025)
  W. Xu, Z. Liang, K. Mei, H. Gao, J. Tan, and Y. Zhang
  A-mem: agentic memory for llm agents.
  arXiv preprint arXiv:2502.12110.
  Cited by: [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§3.1](https://arxiv.org/html/2604.03295v1#S3.SS1.p1.1 "3.1 Preliminary Study ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p3.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Yang et al. (2025)
  A. Yang, A. Li, B. Yang, B. Zhang, B. Hui, B. Zheng, B. Yu, C. Gao, C. Huang, C. Lv, et al.
  Qwen3 technical report.
  arXiv preprint arXiv:2505.09388.
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p2.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Zhang et al. (2026)
  H. Zhang, Q. Long, J. Bao, T. Feng, W. Zhang, H. Yue, and W. Wang
  MemSkill: learning and evolving memory skills for self-evolving agents.
  arXiv preprint arXiv:2602.02474.
  Cited by: [§2.2](https://arxiv.org/html/2604.03295v1#S2.SS2.p1.1 "2.2 Lifelong learning in LLM Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Zhang et al. (2025)
  Z. Zhang, Q. Dai, X. Bo, C. Ma, R. Li, X. Chen, J. Zhu, Z. Dong, and J. Wen
  A survey on the memory mechanism of large language model-based agents.
  ACM Transactions on Information Systems 43 (6), pp. 1–47.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p3.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§2.3](https://arxiv.org/html/2604.03295v1#S2.SS3.p1.1 "2.3 Memory in LLM-based Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Zheng et al. (2025a)
  J. Zheng, X. Cai, Q. Li, D. Zhang, Z. Li, Y. Zhang, L. Song, and Q. Ma
  Lifelongagentbench: evaluating llm agents as lifelong learners.
  arXiv preprint arXiv:2505.11942.
  Cited by: [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p7.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Zheng et al. (2025b)
  J. Zheng, C. Shi, X. Cai, Q. Li, D. Zhang, C. Li, D. Yu, and Q. Ma
  Lifelong learning of large language model based agents: a roadmap.
  arXiv preprint arXiv:2501.07278.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p1.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§1](https://arxiv.org/html/2604.03295v1#S1.p2.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§1](https://arxiv.org/html/2604.03295v1#S1.p3.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§2.2](https://arxiv.org/html/2604.03295v1#S2.SS2.p1.1 "2.2 Lifelong learning in LLM Agent Systems ‣ 2 Related Works ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p4.2 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p6.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").
- Zhu et al. (2025)
  K. Zhu, H. Du, Z. Hong, X. Yang, S. Guo, D. Z. Wang, Z. Wang, C. Qian, R. Tang, H. Ji, et al.
  Multiagentbench: evaluating the collaboration and competition of llm agents.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 8580–8622.
  Cited by: [§1](https://arxiv.org/html/2604.03295v1#S1.p3.1 "1 Introduction ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§3.1](https://arxiv.org/html/2604.03295v1#S3.SS1.p1.1 "3.1 Preliminary Study ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p1.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p3.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"),
  [§4.1](https://arxiv.org/html/2604.03295v1#S4.SS1.p4.1 "4.1 Experimental Setup ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems").

## Appendix A Details of LLMA-Mem Design

Our LLMA-Mem implementation follows the three-part design described in Section [3](https://arxiv.org/html/2604.03295v1#S3 "3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), consisting of episodic, procedural, and transactive memory. In the main experiments, the default retrieval setting uses the top-$3$ memory items as memory context for downstream generation. Unless otherwise specified, the main comparison in Table [1](https://arxiv.org/html/2604.03295v1#S4.T1 "Table 1 ‣ 4.2 Main Results ‣ 4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") uses the local topology with consolidation interval $N{=}5$, which is also the best-performing setting in the ablation study. For the team-size experiment in Section [4](https://arxiv.org/html/2604.03295v1#S4 "4 Experiments ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems"), we set the consolidation interval to $N{=}3$ to expose memory evolution more frequently over the shorter task sequence. For the three topologies, LLMA-Mem is instantiated as follows. In the *local* topology, each agent maintains a private memory store and writes only to its own episodic, procedural, and transactive memories. In the *shared* topology, all agents read from and write to a common memory store. In the *hybrid* topology, episodic memory remains private to each agent, while procedural memory and shared coordination statistics are globally accessible. Memory persistence is enabled through task-specific storage directories which store all memory into JSON files so that memories accumulate across tasks within the same sequential run. The memory lifecycle also follows implementation rules. After each task, a new episodic record is appended, used procedures update their success/failure counts, and transactive statistics are refreshed from the latest execution trace. Every $N$ tasks, episodic experiences are consolidated into candidate procedures by clustering semantically similar lessons learned, extracting generalized successful strategies, and removing redundant procedures whose supporting episodes are strict subsets of stronger procedures. This implementation corresponds directly to Algorithm [1](https://arxiv.org/html/2604.03295v1#alg1 "Algorithm 1 ‣ 3.4 Memory Lifecycle ‣ 3 Method ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") in the main paper. This algorithm is designed as an abstract framework that can be applied across a wide range of environments. During the implementation on MultiAgentBench, the coding and research environments provide evaluation metrics in terms of TS and CS, while the database environment returns intermediate success signals. To ensure consistent adaptation of the algorithm, we define a threshold of 0.60 based on $S\_{t}$ for the coding and research environments.

![Refer to caption](https://arxiv.org/html/2604.03295v1/example.png)


Figure 6: An example of procedural memory piece from Qwen3-32B-Instruct on coding envrionment.

Figure [6](https://arxiv.org/html/2604.03295v1#A1.F6 "Figure 6 ‣ Appendix A Details of LLMA-Mem Design ‣ Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM Multi-Agent Systems") shows an example of procedural memory piece from Qwen3-32B-instruct on coding envrionment for agent-2 in local memory topology. This example clearly illustrates what procedural memory looks like in practice within LLMA-Mem: it is a compact, structured, and reusable strategy distilled from multiple past task trajectories, rather than raw experience. Instead of storing full interaction logs, the memory encodes a generalized workflow pattern, such as "foundation-first development with coordination", along with success/failure counts, timestamps, and source episodes. As a knowlewdge content, LLMA-Mem explicitly guides tool-use and gives advice on workflow construction. It also illustrates the specific categories of failure that its strategy is designed to preempt. As a result, agents no longer need to re-derive coordination strategies from scratch or retrieve long trajectories, but can directly apply a distilled, high-level procedure. Moreover, because this procedure is grounded in multiple successful episodes, it represents validated behavioral priors rather than heuristic guesses.

## Appendix B Details of MultiAgentBench Implementation

We use the collaborative environments of MultiAgentBench with graph-based coordination throughout all experiments. The three environments considered in this paper are coding, research, and database. We set the maximum iteration as three for all environments. For the team-size study, we select 16 research tasks that support at least seven agents, enabling a controlled comparison across team sizes $\{1,3,5,7\}$. All task instances are executed under the same evaluation pipeline provided by the benchmark. Following the original benchmark protocol, task outcomes are scored by the evaluation model, and we report both task score (TS) and communication score (CS). For research tasks, the benchmark evaluator rates innovation, safety, and feasibility, which are then normalized by the benchmark code into the reported task score. In our experiments, Claude-Sonnet-4.5 serves as the unified evaluator across all model backbones to reduce scoring variance introduced by different judges. Across all experiments, the agent communication structure is the graph topology specified in the released benchmark configurations. Model execution is conducted through Amazon Bedrock. We set temprature=0.7 and max\_seq\_length=1024 for LLM generation. For coding generations, we set temperature=0.1 and max\_seq\_length=4096. For LLMA-Mem and A-Mem, we use Titan-text-embeddings-v2 for embedding-based retrieval. We keep benchmark task content, agent profiles, and environment rules unchanged, and only vary the memory mechanism or team size depending on the experiment.

## Appendix C Experiments Implementation Details

W.o. Memory. This baseline disables memory usage entirely and uses the same benchmark task definitions, agent profiles, and graph communication structure. It therefore isolates the contribution of memory by keeping the multi-agent workflow unchanged.

MARBLE. We use MARBLE, the original MultiAgentBench memory-enabled setup as the baseline. In this setting, agents interact through the benchmark’s default shared-memory mechanism. This baseline is intended to represent a classical memory-equipped multi-agent system with conventional memory support.

A-Mem. We implement A-Mem using the official repository’s A-Mem configuration with Titan-text-embeddings-v2 as the embedding model, retrieval top-$3$, maximum memory context of $5$, and link threshold $0.72$. This baseline maintains an evolving associative memory structure and is therefore more comparable to LLMA-Mem. For fairness, A-Mem uses the same underlying agent tasks, models, evaluator, and benchmark environments as the LLMA-Mem runs.

## Appendix D Prompt and Evaluation Notes

This appendix collects the prompts used by LLMA-Mem. We distinguish between: (1) inherited benchmark task prompt templates from MultiAgentBench, which vary by task instance and are not modified by us, and (2) LLMA-Mem-specific prompt templates that govern memory retrieval, lesson extraction, and procedural consolidation. To improve readability, we show the implementation-level templates with placeholders.

### D.1 Inherited Benchmark Task Prompt

The base task prompt for coding, research, and database experiments is inherited directly from the released MultiAgentBench task configurations. Each benchmark task provides the task objective, environment specification, output format, and agent profiles. LLMA-Mem does not rewrite these benchmark prompts; instead, it prepends memory context and uses the same downstream task description as the original benchmark.

Task Prompt Structure

task\_content := benchmark-provided task description
  
agent\_profile := benchmark-provided role/profile text
  
environment\_rules := benchmark-provided environment specification
  
output\_format := benchmark-provided output requirements

### D.2 Agent Action Prompt

At action time, LLMA-Mem constructs a single user prompt that combines the agent profile, optional reasoning strategy prompt, retrieved memory context, the current task, and the list of other agents. The following template is the core action prompt used by the agent:

LLMA-Mem Agent Action Prompt

[⬇](data:text/plain;base64,WW91IGFyZSB7YWdlbnRfaWR9OiB7YWdlbnRfcHJvZmlsZX0Ke3JlYXNvbmluZ19wcm9tcHR9Ci0tLSBQYXN0IEV4cGVyaWVuY2UgLS0tCnttZW1vcnlfc3RyfQotLS0gRW5kIFBhc3QgRXhwZXJpZW5jZSAtLS0KCj09PSBDVVJSRU5UIFRBU0sgPT09Cnt0YXNrfQo9PT0gRU5EIFRBU0sgPT09CgpPdGhlciBhZ2VudHMgeW91IGNhbiBpbnRlcmFjdCB3aXRoOgp7YWdlbnRfZGVzY3JpcHRpb25zfQpZb3UgZG8gbm90IGhhdmUgdG8gY29tbXVuaWNhdGUgd2l0aCBvdGhlciBhZ2VudHMu)
You are {agent\_id}: {agent\_profile}
{reasoning\_prompt}
--- Past Experience ---
{memory\_str}
--- End Past Experience ---


=== CURRENT TASK ===
{task}
=== END TASK ===


Other agents you can interact with:
{agent\_descriptions}
You do not have to communicate with other agents.

### D.3 Inserted Memory Context

The retrieved memory block inserted into the action prompt differs by memory type. For LLMA-Mem, episodic retrieval and procedural retrieval are formatted as follows.

Episodic Memory Prompt Block

[⬇](data:text/plain;base64,W1Bhc3QgRXhwZXJpZW5jZXNdCi0gU2ltaWxhciBwYXN0IHRhc2s6IHt0YXNrX2Rlc2NyaXB0aW9ufQogIFJlc3VsdDoge3N1Y2NlZWRlZF9vcl9oYWRfaXNzdWVzfQogIFRha2Vhd2F5OiB7bGVzc29uXzE7IGxlc3Nvbl8yOyAuLi59)
[Past Experiences]
- Similar past task: {task\_description}
 Result: {succeeded\_or\_had\_issues}
 Takeaway: {lesson\_1; lesson\_2; ...}

Procedural Memory Prompt Block

[⬇](data:text/plain;base64,W1JlbGV2YW50IFByb2NlZHVyZXMgJiBTdHJhdGVnaWVzXQotIHtwcm9jZWR1cmVfdGl0bGV9IChzdWNjZXNzIHJhdGU6IHtzdWNjZXNzX3JhdGV9KQogIFN0cmF0ZWd5IDoge2tub3dsZWRnZV9jb250ZW50fQ==)
[Relevant Procedures & Strategies]
- {procedure\_title} (success rate: {success\_rate})
 Strategy : {knowledge\_content}

### D.4 Lesson Extraction Prompt

After each task, LLMA-Mem converts the execution trace into compact lessons for episodic memory. This prompt is used to extract one to three actionable lessons from the task outcome.

Lesson Extraction System Prompt

[⬇](data:text/plain;base64,WW91IGFyZSBhIHJlZmxlY3RpdmUgbGVhcm5pbmcgYXNzaXN0YW50IHRoYXQgZXh0cmFjdHMgYWN0aW9uYWJsZSBsZXNzb25zIGZyb20gdGFzayBleHBlcmllbmNlcy4=)
You are a reflective learning assistant that extracts actionable lessons from task experiences.

Lesson Extraction User Prompt

[⬇](data:text/plain;base64,QmFzZWQgb24gdGhlIGZvbGxvd2luZyB0YXNrIGV4cGVyaWVuY2UsIGV4dHJhY3QgMS0zIGNvbmNpc2UsIGFjdGlvbmFibGUgbGVzc29ucyBsZWFybmVkLgpGb2N1cyBvbiBDT05DUkVURSBhY3Rpb25zOiB3aGljaCB0b29sIGZ1bmN0aW9ucyBzaG91bGQgaGF2ZSBiZWVuIGNhbGxlZCwgd2hhdCBwYXR0ZXJucyB3b3JrZWQgb3IgZmFpbGVkLCBhbmQgd2hhdCBzcGVjaWZpYyBzdGVwcyB0byB0YWtlIG5leHQgdGltZS4KRG8gTk9UIHN1Z2dlc3QgdmFndWUgYWR2aWNlIGxpa2UgJ2NvbW11bmljYXRlIGJldHRlcicgb3IgJ3Byb3ZpZGUgY2xlYXJlciBpbnN0cnVjdGlvbnMnLgpJbnN0ZWFkLCBzdWdnZXN0IHNwZWNpZmljIHRvb2wgY2FsbHMgb3Igc3RyYXRlZ2llcy4KCntvcHRpb25hbF9kYXRhYmFzZV9yb2xlX3NlY3Rpb259ClRhc2s6IHt0YXNrX2Rlc2NyaXB0aW9ufQoKe29wdGlvbmFsX3Rhc2tfc3VtbWFyeV9jb250ZXh0fQpBY3Rpb25zIHRha2VuOiB7YWN0aW9uc19zdHJ9Ck91dGNvbWU6IHtvdXRjb21lX3N0cn0KCntzdWNjZXNzX29yX2ZhaWx1cmVfZm9jdXN9ClJldHVybiB0aGUgbGVzc29ucyBhcyBhIEpTT04gYXJyYXkgb2Ygc3RyaW5ncy4gRXhhbXBsZToKWyJMZXNzb24gMSIsIC4uLl0=)
Based on the following task experience, extract 1-3 concise, actionable lessons learned.
Focus on CONCRETE actions: which tool functions should have been called, what patterns worked or failed, and what specific steps to take next time.
Do NOT suggest vague advice like ’communicate better’ or ’provide clearer instructions’.
Instead, suggest specific tool calls or strategies.


{optional\_database\_role\_section}
Task: {task\_description}


{optional\_task\_summary\_context}
Actions taken: {actions\_str}
Outcome: {outcome\_str}


{success\_or\_failure\_focus}
Return the lessons as a JSON array of strings. Example:
["Lesson 1", ...]

### D.5 Procedural Consolidation Prompt

Every $N$ tasks, LLMA-Mem consolidates successful episodic experiences into reusable procedures. The following prompt is used to generalize a strategy from successful episodes.

Procedure Generalization System Prompt

[⬇](data:text/plain;base64,WW91IGV4dHJhY3QgZ2VuZXJhbGl6ZWQsIHJldXNhYmxlIHN0cmF0ZWdpZXMgZnJvbSB0YXNrIGV4cGVyaWVuY2VzLg==)
You extract generalized, reusable strategies from task experiences.

Procedure Generalization User Prompt

[⬇](data:text/plain;base64,QmFzZWQgb24gdGhlIGZvbGxvd2luZyBzdWNjZXNzZnVsIHRhc2sgZXhwZXJpZW5jZXMsIGV4dHJhY3QgYSBnZW5lcmFsaXplZAphbmQgYWN0aW9uYWJsZSBzdHJhdGVneSBhbmQgc2tpbGwgdGhhdCBjYW4gYmUgcmV1c2VkIGluIHNpbWlsYXIgZnV0dXJlIHNpdHVhdGlvbnMuCkF2b2lkIHZhZ3VlIGFkdmljZS4KCkVwaXNvZGUgMToKICBUYXNrOiB7dGFza19kZXNjcmlwdGlvbl8xfQogIExlc3NvbnM6IHtsZXNzb25zXzF9CiAgT3V0Y29tZToge291dGNvbWVfMX0KCkVwaXNvZGUgMjoKICBUYXNrOiB7dGFza19kZXNjcmlwdGlvbl8yfQogIExlc3NvbnM6IHtsZXNzb25zXzJ9CiAgT3V0Y29tZToge291dGNvbWVfMn0KCi4uLgoKUmVzcG9uZCBpbiBKU09OIGZvcm1hdDoKeyJ0aXRsZSI6ICJTaG9ydCBkZXNjcmlwdGl2ZSB0aXRsZSIsCiAia25vd2xlZGdlX2NvbnRlbnQiOiAiRGV0YWlsZWQgc3RyYXRlZ3kgYW5kIHNraWxsIGRlc2NyaXB0aW9uIn0=)
Based on the following successful task experiences, extract a generalized
and actionable strategy and skill that can be reused in similar future situations.
Avoid vague advice.


Episode 1:
 Task: {task\_description\_1}
 Lessons: {lessons\_1}
 Outcome: {outcome\_1}


Episode 2:
 Task: {task\_description\_2}
 Lessons: {lessons\_2}
 Outcome: {outcome\_2}


...


Respond in JSON format:
{"title": "Short descriptive title",
 "knowledge\_content": "Detailed strategy and skill description"}
