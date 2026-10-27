---
id: acl-2026.findings-emnlp.1716-text
type: material
title: Collaborative OS of Multi-Agent Systems
work_id: acl-2026.findings-emnlp.1716
source_url: https://aclanthology.org/2026.findings-emnlp.1716.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 851815292c939c35343be60da10a4935275090a29244e96e0b014316707772e4
---

> Источник: [https://aclanthology.org/2026.findings-emnlp.1716.pdf](https://aclanthology.org/2026.findings-emnlp.1716.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                Collaborative OS of Multi-Agent Systems

              Jiazheng Kang1, Ruochen Zhao1, Gezi Li2, Dongying Lin2,
                                  Ting Bai1*

                    1Beijing University of Posts and Telecommunications
                         2Huawei Technologies Co., Ltd.
                                   {kjz,zhaorc,baiting}@bupt.edu.cn

                                   {ligezi,lindongying}@huawei.com

                Abstract
    Large language model-driven Multi-Agent Sys-
    tems (MAS) face two key challenges in long-
    horizon tasks: collaboration workflows strug-
    gle to adapt to dynamic task states, and accu-
    mulated inter-agent interactions lead to lengthy,
    noisy contexts that degrade model performance
   and efficiency. To address these challenges,                                                     Figure 1: Comparison of collaboration paradigms in
   we propose MAS-OS, a collaborative Oper-        different MAS. (1) Rigid static workflows, (2) Noisy
    ating System (OS) for MAS. MAS-OS con-                                                                  static context, (3) MAS-OS is a flexible collaborative
     sists of three core modules: Memory Man-                                                         operating system for MAS, enabled by contextual mem-
    ager, Agent Scheduler, and Context Alloca-                                                     ory sharing and automatic agent scheduling.
     tor. The Memory Manager maintains a struc-
    tured memory pool and a global summary of
    agents’ interaction history. Based on the evolv-        Most existing multi-agent systems rely heav-
    ing memory states, the Agent Scheduler se-        ily on static, hand-crafted, predefined multi-agent
     lects the next active agent, while the Context                                                workflows, where the sequence of participating
    Allocator provides task-relevant memories to
                                                  agents is predetermined by inflexible rules or pre-    support effective context utilization. Experi-
                                                  defined graphs (Hong et al., 2024). Two primary    ments on four benchmark datasets demonstrate
    the effectiveness of MAS-OS. Compared with       message-passing paradigms are commonly adopted.
   SOTA baselines, MAS-OS achieves an aver-      The first is full-context broadcasting, distributing
    age improvement of 17.42% under the Llama-       the entire conversation history to all agents (Wu
    3.1-8B backbone.  The code is available at        et al., 2024). While ensuring completeness, it in-
   https://github.com/BAI-LAB/MAS-OS.                                                 undates agents with redundant content, escalating
1  Introduction                                token costs and cognitive noise while triggering the
                                                     "lost-in-the-middle" effect that impairs reasoning
Multi-Agent Systems (MAS) have emerged as a                                                performance. The second is direct context pass-
prevailing framework wherein specialized LLM-                                                  ing (Qian et al., 2024), which confines each agent
driven agents collaborate to address complex, long-                                                         to the preceding step’s output or a narrow fixed win-
horizon problems through decomposition into role-                                              dow. While computationally efficient, this induces
specific responsibilities (Qian et al., 2024; Wu et al.,                                                   contextual isolation: agents lose access to global
2024).  While existing MAS frameworks have                                                        objectives, historical feedback, and long-range de-
shown that such agent collaboration can outper-                                                  pendencies, fragmenting decision-making and un-
form monolithic models, the effectiveness of these                                               dermining consistency. This static-dependent col-
systems is frequently bottlenecked by inefficient in-                                                     laboration paradigm in MAS lacks adaptability to
formation distribution among agents. Specifically,                                           dynamic tasks or unexpected errors, preventing
as the volume of inter-agent collaboration traces                                                  timely agent invocation upon plan deviation and
expands, ensuring that each agent accesses task-                                                 decoupling agent scheduling from memory state.
critical information while filtering out irrelevant                                                Recent research seeks to mitigate these lim-
details has emerged as a critical and unresolved                                                         itations through dynamic context management
challenge.                                            and adaptive collaboration. For example, RCR-
   *Corresponding author.                             Router (Liu et al., 2025) dynamically allocates con-
                                       36661
              Findings of the Association for Computational Linguistics: EMNLP 2026, pages 36661–36674
                        October 24-29, 2026 ©2026 Association for Computational Linguistics

## Страница 2

text but retains a static interaction topology, lim-         realizing adaptive resource orchestration and
iting its adaptability to evolving task states. Pup-        boosting collaboration effectiveness.
peteer (Dang et al., 2026) dynamically orchestrates
                                                                 • Extensive experiments on four benchmarks,agents with a centralized controller, yet lacks fine-
                                                    demonstrate that MAS-OS significantly out-grained inter-agent information sharing. Other re-
                                                   performs strong baselines  (e.g., MacNet,cent methods improve MAS adaptivity through task
                                                  EvoAgent) and rule-based approaches, achiev-routing (Yue et al., 2025), redundant-agent elimina-
                                                      ing an average improvements of 17.42% ontion (Wang et al., 2025b), or next-agent prediction
                                                    Llama-3.1-8B.with context selection (Wang et al., 2025a). Never-
theless, jointly optimizing dynamic agent schedul-   2  Related Work
ing and fine-grained context allocation remains a
challenging and underexplored problem.             2.1  Multi-Agent Systems (MAS)
  To address these challenges, we propose MAS-   LLM-based multi-agent systems (MAS) have be-
OS, a collaborative Operating System (OS) frame-   come an effective paradigm for solving complex
work in MAS that departs from conventional ap-    tasks by decomposing problem solving across mul-
proaches by integrating scheduling (agent selec-    tiple specialized agents (Ling et al., 2025). Early
tion) and communication (context management)   systems rely on manually designed roles and fixed
into a unified architecture.  Instead of treating    interaction protocols, such as CAMEL and Auto-
the two as separate tasks, MAS-OS coordinates   Gen for role-playing or dialogue-based coordina-
these core mechanisms based on agents’ memory    tion (Li et al., 2023; Wu et al., 2024), and MetaGPT
states, thereby enabling more coordinated and adap-   and ChatDev for software-engineering-style work-
tive multi-agent collaboration. Specifically, MAS-   flows (Hong et al., 2024; Qian et al., 2024). Al-
OS comprises three integrated components acting   though effective, these predefined workflows are
as the OS kernel:  (1) Agent Scheduler:  it ob-    difficult to adapt to evolving task states. Recent
serves the global summary maintained by Memory   work therefore explores adaptive MAS mecha-
Manager and dynamically activates the next agent    nisms, including dynamic orchestration or evolu-
based on the current system state; (2) Context    tion of agents (Liu et al., 2024; Qian et al., 2025;
Allocator:  it dynamically filters the information   Yuan et al., 2025; Dang et al., 2026), task and role
from the MemoryPool to deliver a compact, agent-   routing (Yue et al., 2025), redundant-agent elim-
conditioned subset of context, ensuring the active    ination (Wang et al., 2025b), and flexible or self-
agent receives the relevant information needed for    organized collaboration (Wang et al., 2025a; Zhou
the current operation.  (3) Memory Manager:    et al., 2025). However, most existing MAS meth-
it systematically structures raw interactions into   ods mainly optimize who should participate or how
a graph-based MemoryPool, while continuously    agents should communicate, while the exchanged
maintaining a rolling global summary to furnish    context is still handled at a coarse granularity, such
the OS with real-time oversight of task progress.   as full histories, complete messages, or fixed sum-
Additionally, reinforcement learning (RL) jointly    maries.
optimizes the Agent Scheduler and Context Al-
                                                    2.2  Multi-Agent Memory Managementlocator conditioned on agent memory to enhance
multi-agent collaboration. Our main contributions    Efficient context management is crucial for MAS:
are summarized as follows:                           unrestricted information sharing may introduce re-
                                            dundancy and noise, while overly limited context
    • We propose a novel framework MAS-OS,   can prevent agents from accessing useful global
    which frames multi-agent collaboration as    progress. Prior work improves agent memory by
    an OS-level resource management problem    externalizing interaction histories into retrievable
     within a collaborative framework, featuring    structures, such as memory streams (Park et al.,
     unified memory management, agent schedul-   2023), hierarchical memory systems (Kang et al.,
     ing, and context routing.                     2025; Packer et al., 2023), and long-term mem-
                                                ory mechanisms (Xu et  al., 2026; Fang et  al.,
    • We make a prior attempt to optimize multi-   2025; Chhikara et al., 2025). In multi-agent set-
     agent scheduling and allocation within a rein-    tings, memory management further requires decid-
    forcement learning (RL) framework, thereby    ing what information should be exposed to which
                                       36662

## Страница 3

agent during collaboration. Existing methods or-    latency, cost efficiency). Formally, we define the
ganize memories across agents or interaction lev-   agent execution sequence as:
els (Zhang et al., 2026; Xu et al., 2025), or route
role-aware memories according to agent needs (Liu            π = [aσ1, aσ2, ..., aσT ],           (1)
et al., 2025). Recent work such as AnyMAC also
considers selective access to previous context when   where σt ∈{1, 2, ..., n} and t ∈{1, 2, ..., T}. Tpredicting the next agent (Wang et al., 2025a). Nev-   denotes the length of the execution sequence, and
ertheless, most memory and context-routing meth-   aσt represents the index of the agent selected at the
ods depend on fixed schedules, predefined roles, or    t-th step.
heuristic retrieval, so context allocation is usually     The optimization objective of the MAS is then
separated from dynamic agent orchestration.         formulated as:

2.3  Reinforcement Learning for Agents                                                    arg max     (x, π, Mπ), y∗),       (2)                                                               π  F(TReinforcement  learning (RL) provides a  nat-
ural framework for improving agents through
                                           where T (x, π, Mπ) denotes the output generatedinteraction  feedback  and  has  been  applied                                          by executing the task x following the agent se-
to alignment,  tool  use,  and  agent-level  self-                                             quence π, y∗denotes the ground-truth solution of
improvement (Ouyang et al., 2022a; Nakano et al.,                                                       task x. Mπ denotes the subset of memory resources
2021; Zeng et al., 2024; Shinn et al., 2023). Since
                                                     allocated to the agent sequence π. F denotes theMAS collaboration often involves long-horizon de-                                              performance metric function (e.g., accuracy) that
cisions and delayed outcomes, recent work applies                                                         quantifies the alignment between the generated out-
learning-based optimization to agent collaboration                                                   put and the ground truth.
and orchestration.  For example, Optima (Chen
et al., 2025) improves the effectiveness and effi-                                                    3.2  MAS-OS
ciency of LLM-based MAS, Puppeteer (Dang et al.,
                                           To enable dynamic collaboration and efficient infor-2026) trains a centralized orchestrator for dynamic
                                                mation sharing among multiple agents, we proposeagent sequencing, and ReSo (Zhou et al., 2025)
                                     MAS-OS, a memory-centric collaborative Operat-uses collaborative rewards for self-organized agent
                                                  ing System (OS) framework designed to manageselection. Other studies explore RL for specialized
                                                     the lifecycle of agent memory in Multi-Agent Sys-agentic reasoning and multi-agent settings (Lan
                                             tems (MAS). MAS-OS integrates three core com-et al., 2025; Zeng et al., 2025; Xue et al., 2025).
                                                   ponents, each with distinct functionalities:However, most RL-based methods mainly focus
on final task success, agent selection, or high-level
                                                                 • Memory Manager: Acts as the memory han-orchestration, while joint optimizations of agent
                                                                  dler, maintaining a structured MemoryPoolscheduling and context routing according to evolv-
                                                  and a rolling global summary of agents’ inter-ing collaboration states remains underexplored.
                                                          action history to ensure state preservation.
3  Methodology
                                                                 • Agent Scheduler: Orchestrates agents in a
3.1  Problem Definition                            memory-driven manner, selecting the next ac-
                                                               tive agent to advance the task based on theWe  formulate  multi-agent  collaboration  as a
                                           memory output by the Memory Manager.memory-driven sequential decision-making prob-
lem, with its core anchored in system-level agent
                                                                 • Context Allocator: Ensures context utiliza-scheduling and context allocation mechanisms.
                                                            tion by allocating an agent-relevant memory  Given a task x and a set of available agents
                                                         subset to the active agent.
A =  {a1, a2, ..., an}, where each agent ai  isequipped with specific capabilities (e.g., reason-
                                                      3.2.1  Memory Manager Componenting, memory retrieval, task execution), the aim of a
Multi-Agent System (MAS) is to generate an op-   The Memory Manager maintains a shared Memory-
timal agent execution sequence that processes the   Pool to manage the memory state for agent schedul-
task x and yields a valid solution y while optimiz-   ing (Agent Scheduler) and context allocation (Con-
ing a predefined performance metric (e.g., accuracy,    text Allocator).
                                       36663

## Страница 4

                                                    Policy              RLOO          Reward Calculate                                     Update                                   Online
                                                                  Online Update Policy                                                                                                                         Rollouts×N    Final Answer





                                                                                                                                                                                                              summary

                                                                 You                                                                              are                                                                                        scheduler.                                                                                               Given:                                                                                                                              Candidate Memory            GlobalMemory                                                                                                                                                                                                                                                                                                               unit                                                                                                                                             You                                                                                                                                                                    are                                                                                                                                                                                             Allocator.                                                                                                                                                                                        Given:
                                                                                                            -                                                                               Task:                                                                                                                                               ...                                                                                                                                                                                                                                         -                                                                                                                                                                         Task:                                                                                                                                                                                                                                                                                                       ...
                                                                                                            -                                                                           Pre                                                                   memory:                                                                                                                                                           ...                                                                                                                                                                                                                               Temporal                                                                                                                                                                                                                                         -                                                                                                                                                                 Pre                                                                                                                                             memory:                                                                                                                                                                                                                                                                                                                   ...                                                                                                                                                                                                                             edge   Memory Pool                                                                                                            -                                                                                 Last                                                                                 agent:                                                                                                                                                                                                                                         -                                                                                                                                                                             Last                                                                                                                                                                        agent:                                                                                                                                                                                                                                                                                                                 ...
                                                                                                                                                                                                                                   Semantic                                                                                                                                                                                                                             edge                                                                        Decide                                                                                 next                                                                                agent                                                                                               or                                                                              Done                                                                                                                                                            Decide                                                                                                                                                                                  allocated                                                                                                                                           memory
                      Agent Pool
                      Agent Scheduler     Acitavte                    Memory         Context Allocator                        Construct           Update
                                                                                                                                Memory Unit    Global Summary                                                 AgentAgent                                                     Pool from          Allocated                                   Symbol Legend
                                              : Task instruction description
                                                       : Candidate Memory for the router
                                                     : Allocated Memory to activated agent
                                                                                                                                                                                                                                                                          are                                                                                                                                                                                                                                Memer.                                                                                                                                                                                                                                                                                                 Given:                                                    : Gloal                              Summary                                                   at                                                  step                                                                       t                                                                                                          Activated Agentr’s raw output                    You-                                                                                                                                                                                                                                                  Agent                                                                                                                                                                                                                                     raw                                                                                                                                                                                                                                                                                                                         output:..                                                                                                         You                                                                                                                           are                                                                                                                   Woker.                                                                                                                                           Given:                                               :                              Activated                                   Agent at                                               step                                                                    t                                                                                                                                                                                                                                                                                                                                                                                               -                                                                                                                                                                                                                                                                           Global                                                                                                                                                                                                                                                                       summary:..                                                                                                                                                                              -                                                                                                                               Task:                                                                                                                                                                                                                               ...
                                                                                                                                                                                                                                   1.Summary                                                                                                                                                                                                                                                                                                         of                                                                                                                                                                                                                                                                                     the                                                                                                                                                                                                                                                                                 output                                                                                                                                                                              -                                                                                                                   Your                                                                                                                                                          Profile:                                                                                                                                                                                                                                          ...                                              :                           Agent                                   Pool                                                                                                                                                                                                                                                        2.Update                                                                                                                                                                                                                                                                                               global                                                                                                                                                                                                                                    summary                                                                                                                                                                              -                                                                                                                          Rlevant                                                                                                             memory:                                                                                                                                                                                                                                                  ...
                                               : Memory unit summary at step t                                    Give your answer
                                               : output of the activated agent at step t
                                                         Activated Agent                                   Memory Manager

Figure 2: Overview of the MAS-OS framework. The system functions as a memory-centric collaborative operating
system comprising three core components: (1) Memory Manager maintains the MemoryPool and updates the
rolling global summary; (2) Agent Scheduler activates the next agent based on the current memory state; and (3)
Context Allocator allocates a relevant memory context to the active agent.

MemoryPool.  The MemoryPool is a continu-     Semantic edges link the current node to rele-
ously accumulating shared memory repository for    vant historical memory nodes to support long-term
MAS, which is structured as a memory graph com-   dependency tracking. A semantic edge is added be-
prising memory units, semantic edges, temporal   tween node vt and previous memory node vi if the
edges, and global summaries.                          similarity of their summaries exceeds a predefined
  The Memory Graph is a dynamically constructed    threshold τ, defined as:
that evolves with the interaction traces generated
during multi-agent task execution, defined as:      ESt = ES                 i < t, sim(si, st)                                                            t−1 ∪{e(vi,vt) |             ≥τ},                                                                                                        (5)
           Gt = (Vt, ETt , ESt ),             (3)   where sim(si, st) represents the cosine similarity.
where Vt is the memory node set in the interaction   Global Summary.  Complementing individual
trace produced at step t. Each node is termed as   memory nodes in the MemoryPool, a rolling global
a memory unit that stores a key-value pair (ot, st).   summary Mglobalt      is a compact natural-language
Here, ot retains the raw information generated by    representation that encapsulates task progress up
the active agent, st denotes a summary memory of    to step t. Functioning as the system’s conscious
raw information that serves as a high-level repre-    state, it acts as the primary signal to drive agent
sentation of the memory state at this step. ETt and    coordination and scheduling decisions.
ESt denote two distinct edge sets, corresponding to     The MemoryPool MPoolt     , composed of a mem-
temporal edges and semantic edges, respectively,   ory graph and a global summary, is formally de-
to support memory retrieval based on both recency    fined as follows:
and semantic relevance.
                                                       MPoolt  =      Mglobalt                 (6)  Temporal edges record the associations between                                                                 {Gt,        },
memory outputs generated by adjacent agent exe-
                                             where Gt and Mglobalt     represent the memory graphcution steps. A new temporal edge connects the
                                            and global summary that built from interactioncurrent memory node to its immediate predecessor,
                                           memories yielded by all executing agents up tofollowing the update rule below:
                                                      step t.
        ETt = ET                         (4)                    t−1 ∪e(vt−1,vt),                 3.2.2  Agent Scheduler Component
where e(vt−1,vt) denotes the temporal edge con-   The Agent Scheduler coordinates agent collabo-
structed between memory node vt and vt−1 at step    ration in a memory-driven manner by selecting
t.                                                    the next active agent based on the current memory
                                       36664

## Страница 5

state maintained in the MemoryPool. The agent   where πϕ is the parameterized allocation policy
scheduler determines the next agent for execution.   and Mcontextt     ⊆Mcandidatet−1      denotes the predefined
It draws on the historical memory of agents that    context budget K ≤M (i.e., the maximum numberhave been activated in preceding steps, while con-   of memory units).
ditioning its decision on four key elements: the
                                                    3.3 RL Policy Optimizationtask instruction x, the global summary in Memory-
Pool Mglobal , the previous active agent      and  We employ an iterative, on-policy training frame-       t−1                            aσt−1
its summary memory of raw information st−1.      work to optimize both the Agent Scheduler and
  Given  the  candidate  agent  pool A  =    Context Allocator. The overall procedure is shown
{a1, . . . , an}, the scheduler observation can be fo-    in Algorithm 1 in Appendix C.mulated as:                                                      3.3.1  Reward Function in RL            h                       i
       oscht =  x, Mglobal ,       A  .    (7)    In MAS-OS framework, we construct a composite                   t−1   st−1, aσt−1,                                                reward integrating three components: Active Agent
The scheduler then samples the index of the next   Reward, Context Allocator reward, and Agent
agent from a stochastic scheduling policy:           Scheduler reward. These reward functions simulta-
                                                 neously optimizes the task success, efficiency, and

                      t                             | aσt ∈A, σt ∈{1, . . . , n},      step-level allocation quality.  σt ∼πθ  · | osch                                                 (8)
                                               Active Agent Reward.  Following RMM (Tanwhere πθ denotes the parameterized scheduling
                                                             et al., 2025), we designed a method that enables ac-policy, and the induced agent execution sequence
                                                            tive agents to provide reward signals. At step t, theis π = [aσ1, . . . , aσT ].
                                                 Context Allocator selects a subset of memory units
3.2.3  Context Allocator Component             Mcontextt       to the active agent. After completing its
                                                                                                                                    t         , theThe Context Allocator is designed to enable context   work, for each memory item mi ∈Mcontext
utilization by selecting an agent-specific memory    agent returns a binary value ui ∈{0, 1} to indicatesubset and feeding it to the activated agent. For   whether the memory units was useful. The hit rate
an active agent aσt, the Context Allocator reterives   reward of active agents is defined as:
agent-specific memory subset as the context input          X                                                                1
to the active agent, fomulated as:                            Ragent =                 ui.      (11)
                                                                                                                t            h                       i                              |Mcontext                                                                                                                          | i=1
      ocont  =  x, Mcandidatet            , Mglobal , aσt  ,    (9)                               t−1               Context Allocator Reward.  Context Allocator
                                                                 is trained to maximize immediate allocation utility
where Mcandidatet         is the candidate memory pool fil-                                                while remaining aligned with the final task objec-
tered by the Memory Manager based on the Mem-                                                               tive. The reward function is defined as:
ory Graph Gt (see in Eq. 3):  starting from the
memory node in step t −1, it traverses backward                                                            Rcontext = α · Ragent + η · Rtask,    (12)along both temporal edges and semantic edges,
collecting at each step the corresponding mem-   where α controls the strength of hit-rate shaping
ory node as well as its 1-hop neighbors connected   and η couples allocation behavior to end-task suc-
via these edges, until the size of the candidate    cess. Rtask denotes the reward signal for evaluating
memory set reaches the maximum capacity M (i.e.,    final task completion performance, with its value
                                                          falling within the interval [0, 1].
     t|Mcandidate | ≤M).  To achieve more precise context allocation, the                                         Agent Scheduler Reward.  Agent Scheduler is
allocator performs refined matching on the candi-                                                        trained to enable effective collaboration trajectories
date memory; specifically, it designs customized                                            and avoid unnecessary computation. We use a re-
prompts to drive LLM in executing the matching                                            ward objective with a per-step cost penalty, defined
task, thereby aligning the selected memory subset                                                          as:
with the agent’s attributes and task requirements to
                                                                Rscheduler = Rtask −λ · ct,       (13)form an agent-specific context, which is formally
defined as:                                   where ct is the number of tokens consumed by the
                                                      activated agent at step t, and λ trades off success
                                               t     ,        (10)    against token consumption.           Mcontextt    ∼πϕ  · | ocon
                                       36665

## Страница 6

3.3.2  Training Policy                            cosine similarity between their embedding repre-
Following MARTI (Zhang et al., 2025b), the train-    sentations.
ing process follows an alternating data collec-
                                                      4.1.3  Implementation Detailstion and policy optimization paradigm. For each
prompt, we generate N independent rollouts fol-  We summarize experimental and implementation
lowing MARTI (Zhang et al., 2025b). We employ    details in the Appendix: Appendix A covers dataset
the REINFORCE Leave-One-Out (RLOO) (Ah-    splits, baselines, and hyperparameters; Appendix B
madian et al., 2024) estimator to compute low-   introduces specialized worker agents; Appendix C
variance baselines by averaging returns across peer    present the algorithm flowchart of MAS-OS; and
rollouts, avoiding the need for a separate value   Appendix (D-G) analyzes retrieval hyperparame-
network. The advantage is estimated as the devia-    ters, generalization with different backbones (e.g.,
tion of each sample’s return from the leave-one-out   Qwen3), scheduler scaling, and budget-matched
baseline. Policy updates are performed via Proxi-   comparisons, respectively. The anonymous code
mal Policy Optimization (PPO) (Schulman et al.,   repository is available at https://github.com/
2017) with clipped surrogate objectives. A KL-   BAI-LAB/MAS-OS.
divergence penalty (Ziegler et al., 2019; Ouyang
                                                      4.1.4  Compared Methodset al., 2022b) is further incorporated to regularize
the active policy toward the frozen reference model,  We compare MAS-OS with representative base-
preventing mode collapse and preserving LLM ca-    lines covering direct LLM inference, workflow op-
pabilities.                                             timization, and multi-agent collaboration in MAS
                                                              literature.
4  Experiments
                                                                 • Base Model: The backbone LLM is used di-4.1  Experimental Settings
                                                              rectly without agentic orchestration.
4.1.1  Datasets
To ensure comprehensive evaluation in the MAS        • AFlow (Zhang et al., 2025a): AFlow op-
domain, we adopt four heterogeneous benchmarks        timizes single-agent program-like reasoning
spanning distinct task types: GSM-hard (Cobbe        workflows through search.
et al., 2021; Gao et al., 2023) and SciBench (Wang
et al., 2023) for quantitative reasoning and college-       • DyLAN (Liu et al., 2024): DyLAN dynami-
level scientific problem-solving; SRDD (Qian         cally selects agents according to their reason-
et al., 2024) for software generation from natural-        ing contributions at each round, but still relies
language specifications; and MMLU-Pro (Wang       on full-history context sharing.
et al., 2024) for multidisciplinary knowledge rea-
soning via 10-way multiple-choice questions.             • MacNet (Qian et al., 2025): MacNet orga-
                                                         nizes agents with a predefined DAG and per-
4.1.2  Evaluation Metrics                                                    forms topological execution, which limits flex-
Following (Dang et al., 2026), we report the Ac-         ible revision.
curacy on the GSM-hard, SciBench, and MMLU-
Pro datasets, which reflects the model’s overall        • EvoAgent (Yuan et al., 2025): EvoAgent
performance in complex mathematical reasoning,        uses evolutionary algorithms to generate and
scientific problem solving, and multidisciplinary        optimize agent roles before inference.
understanding. For SRDD, we follow the dataset’s
original evaluation dimensions and report an over-       • Puppeteer (Dang et al., 2026): Puppeteer
all quality score computed as a weighted average          trains a centralized RL-based orchestrator for
of:  (i) Completeness, the fraction of generated       dynamic agent selection, while largely relying
projects that contain no placeholder code (e.g.,       on global interaction histories.
TODO/PASS); (ii) Executability, the fraction of
projects that can successfully compile and run in        • MAS-OS: it jointly learns agent scheduling
the target environment; and (iii) Consistency, the       and context allocation with reinforcement
semantic alignment between the requirement de-        learning, using a structured memory pool to
scription and the produced code, measured by the        provide compact task-relevant context.
                                       36666

## Страница 7

Table 1: Main results on different benchmarks. We compare our method against baselines using both Llama-3.1-8B
and Llama-3.1-70B as base models. Bold denotes the best result, and underline denotes the SOTA baseline results.
Improvement is calculated based on the SOTA baseline. * indicates statistically significant improvements of our
method over the SOTA baseline on the corresponding benchmark (paired two-sided t-test, p < 0.05).

       Model          Method          GSM-hard     SciBench     SRDD     MMLU-Pro
                         Base Model            0.0021         0.0920        0.4615         0.3900
                      AFlow                0.2763         0.1653        0.6417         0.3270
                      DyLan                0.2170         0.1156        0.6627         0.3040
                       MacNet               0.1172         0.1940        0.6812         0.3640
        Llama-3.1-8B     EvoAgent              0.2323         0.2053        0.6940         0.3170
                            Puppeteer              0.1940         0.1766        0.6847         0.3540
                   MAS-OS (-RL)         0.2890         0.2548        0.6954         0.3130
                   MAS-OS              0.3150∗        0.2782∗       0.7131∗         0.3760
                         Improvement (%)    +14.01% ↑    +35.51% ↑    +2.75% ↑              -
                         Base Model            0.1021         0.2687        0.8133         0.5480
                      AFlow                0.5179         0.3376        0.8372         0.5050
                      DyLan                0.4358         0.3265        0.8411         0.5320
        Llama-3.1-70B    MacNet               0.2447         0.2847        0.8524         0.3520
                        EvoAgent              0.3975         0.3423        0.8496         0.4380
                   MAS-OS (-RL)        0.6313∗        0.3757∗       0.8667∗        0.6040∗
                         Improvement (%)    +21.89% ↑     +9.76% ↑    +1.68% ↑     +10.22% ↑

4.2  Main Results                                     (3) MAS-OS maintains strong performance
                                        when scaled to the Llama-3.1-70B backbone. Ow-
Table 1 presents the comparative analysis across                                                  ing to limitations in computational resources, we
four diverse benchmarks using both Llama-3.1-8B                                                    are not able to carry out RL training on the 70B
and Llama-3.1-70B as backbones (Grattafiori et al.,                                               model. However, MAS-OS(-RL) variant achieves
2024). MAS-OS (-RL) removes RL optimization                                                    superior results over  all compared approaches
from MAS-OS while retaining dynamic scheduling                                                    across all tasks, outperforming the SOTA baseline
and selective context allocation. Our framework                                          method AFlow by 21.89% on GSM-hard, EvoA-
demonstrates consistent superiority over existing                                                   gent by 9.76% on SciBench, and Macnet by 1.68%
single-agent and multi-agent baselines. We have                                          on SRDD. This indicates that our framework is
the following observations:                                                model-agnostic and does not rely on the idiosyn-
   (1) Our method achieves the SOTA results on                                                       crasies of a specific base model; instead, it acts as
computation-intensive and logic-heavy tasks (i.e.,                                                a general-purpose reasoning amplifier that scales
GSM-hard, SciBench, and SRDD). On the Llama-                                                 with the underlying model’s capabilities.
3.1-8B backbone, we observe substantial margins                                                         (4) We observe a unique performance pattern
compared to the strongest baselines, achieving sig-                                          on MMLU-Pro that differs from other datasets.
nificant improvements of 14.01% on GSM-hard                                           With Llama-3.1-8B, the base model slightly out-
and 35.51% on SciBench. Such gains underscore                                               performs all agentic frameworks, a known issue
that multi-agent collaboration enabled by MAS-OS                                           where multi-agent orchestration introduces "over-
contributes to excellent performance in complex                                                  reasoning" noise for fact-based queries. However,
problem spaces.                                                with Llama-3.1-70B, our method successfully re-
   (2) In contrast to -RL variants, MAS-OS exhibits    verses this trend, outperforming the base model
a consistently positive performance trend across all    (0.6040 vs. 0.5480). This indicates that as the back-
datasets, attributed to the joint reinforcement train-   bone’s instruction-following capability improves,
ing of agent allocation and scheduling modules.   our dynamic routing mechanism can effectively
This collaborative training delivers an average im-   suppress coordination noise and leverage external
provement of 10.21% over the four benchmarks,   memory even for broad knowledge tasks.
demonstrating our method is capable of discover-
                                                    4.3  Ablation Studying more efficient interaction patterns that cannot
be achieved by static prompting or manual engi-   To evaluate the contribution of each component in
neering alone.                            MAS-OS, we conduct ablation studies by removing
                                       36667

## Страница 8

Table 2: Ablation study of MAS-OS on Llama-3.1-8B.

 Method         GSM-hard   SciBench   SRDD
 -Context Allocator  0.233↓26.1%  0.184↓33.9%  0.659↓7.6%
 -Memory Manager  0.251↓20.2%  0.204↓26.8%  0.676↓5.2%
 -Agent Scheduler   0.282↓10.6%  0.262↓5.8%  0.688↓3.6%
 MAS-OS             0.315       0.278       0.713

Table 3: Detailed comparison of computational effi-
ciency. Average token consumption in Execution (In-
put) and Inference (Output) processes is quantified as    Figure 3: Estimated average cost per task on GSM-
the core metric for overhead evaluation. Time repre-    hard. The blue bars represent the cost of input tokens
sents the average end-to-end inference latency.          consumed by the framework, and the red bars represent
                                                          the cost of output tokens.
 Method   Execution Inference  Total Tokens Time (s)
 MacNet        6,787     3,556       10,343    21.02
 DyLan        38,778     9,602       48,381    46.41   memory routing effectively suppresses redundant
 Puppeteer     19,590     8,559       26,649    42.31    generation. MAS-OS also obtains the best perfor-
 EvoAgent     25,306     8,632       33,938    70.82
                                          mance with competitive latency, reducing inference MAS-OS     34,156     2,179       38,635    49.03
                                                 time by over 30% compared with EvoAgent.

                                                    4.5  Cost-benefit Analysisthe Context Allocator, Agent Scheduler, and Mem-
ory Manager, respectively. -Context Allocator:   The efficiency analysis suggests that reduced in-
the active agent receives only the previous-step in-   ference tokens benefit MAS-OS in practice. How-
put without selecting relevant memories from other    ever, the additional execution overhead from mem-
agents. -Agent Scheduler: agents follow a fixed   ory routing raises the question of whether these
hand-designed workflow, whose order is provided    gains translate into tangible economic advantages.
in Appendix B. -Memory Manager: the Scheduler   Since production LLM APIs typically price out-
and Allocator operate directly on raw conversation    put tokens substantially higher than input tokens,
histories without the structured MemoryPool. As   For example, under Cloudflare Workers AI pric-
shown in Table 2, all three removals lead to per-   ing for Llama-3.1-8B, for instance, output tokens
formance drops. The Context Allocator causes the    cost $0.83/M compared with $0.28/M for input to-
largest degradation, highlighting the importance of    kens, making output-token reduction a key factor
precise context selection for multi-step reasoning.   for cost efficiency. As illustrated in Fig. 3, MAS-
The Memory Manager ranks second, suggesting  OS achieves a strong accuracy-cost trade-off by
that structured memory helps retrieve and organize    using precise memory routing to provide active
long-range information. The Agent Scheduler has a    agents with task-relevant histories while reducing
milder but still positive effect, indicating that adap-   unnecessary generation, showing its advantage in
tive scheduling complements memory organization    lowering inference economic costs.
and context allocation.
                                       5  Conclusion
4.4  Efficiency Analysis                                                   In this paper, we propose MAS-OS, a memory-
We further evaluate the efficiency of MAS-OS    centric operating system for LLM-based multi-
on GSM-hard with LLaMA-3.1-8B. We measure    agent systems. By unifying a Memory Manager,
token consumption in two stages: the execution   Agent Scheduler, and Context Allocator,  it dy-
phase, which includes processed inputs and inter-   namically organizes shared memory, selects ac-
mediate contexts, and the inference phase, which    tive agents, and allocates task-relevant context to
corresponds to generated outputs. As shown in    achieve more adaptive and efficient multi-agent col-
Table 3, MAS-OS introduces higher execution-    laboration. Optimized via reinforcement learning,
token consumption due to its Memory Manager,     it achieves consistent improvements in reasoning
Agent Scheduler, and Context Allocator. However,   and task-solving over strong baselines, highlight-
it achieves the lowest inference-token consump-   ing the value of OS-level abstractions for scalable
tion among all methods, indicating that selective    multi-agent collaboration.
                                       36668

## Страница 9

6  Limitations                                           to solve math word problems.   arXiv preprint
                                                        arXiv:2110.14168.
Despite its effectiveness, MAS-OS still has several
limitations.  First, its memory-centric collabora-   Yufan Dang, Chen Qian, Xueheng Luo, Jingru Fan,
                                                      Zihao Xie, Ruijie Shi, Weize Chen, Cheng Yang, Xi-tion mechanism introduces additional token over-
                                                        aoyin Che, Ye Tian, and 1 others. 2026. Multi-agent
head, since the Memory Manager, Agent Scheduler,                                                            collaboration via evolving orchestration. Advances
and Context Allocator require extra intermediate       in neural information processing systems, 38:165025–
prompts and decisions during execution. This may      165059.
limit its applicability in latency- or cost-sensitive
                                                      Jizhan Fang, Xinle Deng, Haoming Xu, Ziyan Jiang,scenarios. Second, the current framework mainly                                                   Yuqi Tang, Ziwen Xu, Shumin Deng, Yunzhi
follows a sequential agent activation process, which      Yao, Mengru Wang, Shuofei Qiao, and 1 oth-
may underutilize potential parallelism among inde-       ers. 2025.  Lightmem: Lightweight and efficient
pendent subtasks. Finally, our experiments are con-     memory-augmented generation.   arXiv preprint
                                                        arXiv:2510.18866.ducted with predefined agent roles and benchmark-
specific reward signals, leaving the extension to   Luyu Gao, Aman Madaan, Shuyan Zhou, Uri Alon,
more heterogeneous agents and broader real-world      Pengfei Liu, Yiming Yang, Jamie Callan, and Gra-
tasks as future work.                           ham Neubig. 2023.  Pal: Program-aided language
                                                      models.  In International Conference on Machine
Acknowledgments                                   Learning, pages 10764–10799. PMLR.
This work was supported in part by the Na-   Aaron Grattafiori, Abhimanyu Dubey, Abhinav Jauhri,
                                                  Abhinav Pandey, Abhishek Kadian, Ahmad Al-tional Natural Science Foundation of China (Grant                                                         Dahle, Aiesha Letman, Akhil Mathur, Alan Schelten,
No. 62236003).                                     Alex Vaughan, and 1 others. 2024. The llama 3 herd
                                                           of models. arXiv preprint arXiv:2407.21783.

References                                             Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu
                                                    Zheng, Yuheng Cheng, Jinlin Wang, Ceyao Zhang,
Arash Ahmadian,  Chris Cremer,  Matthias  Gallé,                                                      Steven Yau, Zijuan Lin, Liyang Zhou, and 1 oth-
  Marzieh Fadaee, Julia Kreutzer, Olivier Pietquin, Ah-                                                                     ers. 2024. Metagpt: Meta programming for a multi-
  met Üstün, and Sara Hooker. 2024. Back to basics:                                                          agent collaborative framework. In International Con-
   Revisiting reinforce-style optimization for learning                                                           ference on Learning Representations, volume 2024,
  from human feedback in llms. In Proceedings of the                                                      pages 23247–23275.
  62nd Annual Meeting of the Association for Compu-
   tational Linguistics (Volume 1: Long Papers), pages                                                     Jiazheng Kang, Mingming Ji, Zhe Zhao, and Ting Bai.
  12248–12267.                                                       2025. Memory os of ai agent. In Proceedings of the
                                                2025 Conference on Empirical Methods in Natural
Jianlyu Chen,  Shitao Xiao,  Peitian Zhang, Kun                                                  Language Processing, pages 25972–25981.  Luo, Defu Lian, and Zheng Liu. 2024.  M3-
  embedding:  Multi-linguality,  multi-functionality,                                                Hengzhi Lan, Yue Yu, Li Qian, Li Peng, Jie Wu, Wei   multi-granularity  text embeddings through  self-                                                           Liu, Jian Luan, and Ting Bai. 2025. Lightsearcher:  knowledge distillation.  In Findings of the Asso-                                                                 Efficient deepsearch via experiential memory. arXiv   ciation for Computational Linguistics: ACL 2024,                                                             preprint arXiv:2512.06653.  pages 2318–2335, Bangkok, Thailand. Association
   for Computational Linguistics.                                            Guohao Li, Hasan Hammoud, Hani Itani, Dmitrii
                                                           Khizbullin, and Bernard Ghanem. 2023.  Camel:Weize Chen, Jiarui Yuan, Chen Qian, Cheng Yang,
                                                  Communicative agents for" mind" exploration of  Zhiyuan Liu, and Maosong Sun. 2025. Optima: Op-
                                                             large language model society. Advances in neural   timizing effectiveness and efficiency for llm-based
                                                          information processing systems, 36:51991–52008.   multi-agent system. In Findings of the Association
   for Computational Linguistics: ACL 2025, pages
                                                  Shaobin Ling, Yun Wang, Chenyou Fan, Tin Lun Lam,  11534–11557.
                                                    and Junjie Hu. 2025. Elhplan: Efficient long-horizon
Prateek Chhikara, Dev Khant, Saket Aryan, Taranjeet       task planning for multi-agent collaboration. arXiv
   Singh, and Deshraj Yadav. 2025. Mem0: Building       preprint arXiv:2509.24230.
   production-ready ai agents with scalable long-term
  memory. arXiv preprint arXiv:2504.19413.           Jun Liu, Zhenglun Kong, Changdi Yang, Fan Yang,
                                                        Tianqi Li, Peiyan Dong, Joannah Nanjekye, Hao
Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian,      Tang, Geng Yuan, Wei Niu, and 1 others. 2025. Rcr-
  Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias       router: Efficient role-aware context routing for multi-
   Plappert, Jerry Tworek, Jacob Hilton, Reiichiro      agent llm systems with structured memory. arXiv
  Nakano, and 1 others. 2021.   Training verifiers       preprint arXiv:2508.04903.
                                       36669

## Страница 10

Zijun Liu, Yanzhe Zhang, Peng Li, Yang Liu, and Diyi      and retrospect: Reflective memory management for
  Yang. 2024. A dynamic llm-powered agent network      long-term personalized dialogue agents. In Proceed-
   for task-oriented agent collaboration. In First Con-      ings of the 63rd Annual Meeting of the Association
   ference on Language Modeling.                            for Computational Linguistics (Volume 1: Long Pa-
                                                                 pers), pages 8416–8439.
Reiichiro Nakano, Jacob Hilton, Suchir Balaji, Jeff Wu,
  Long Ouyang, Christina Kim, Christopher Hesse,   Song Wang, Zhen Tan, Zihan Chen, Shuang Zhou, Tian-
  Shantanu Jain, Vineet Kosaraju, William Saunders,      long Chen, and Jundong Li. 2025a. Anymac: Cascad-
  and 1 others. 2021.  Webgpt:  Browser-assisted       ing flexible multi-agent collaboration via next-agent
  question-answering with human feedback.  arXiv       prediction. In Proceedings of the 2025 Conference on
   preprint arXiv:2112.09332.                             Empirical Methods in Natural Language Processing,
                                                      pages 11566–11578.
Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida,
   Carroll Wainwright, Pamela Mishkin, Chong Zhang,   Xiaoxuan Wang, Ziniu Hu, Pan Lu, Yanqiao Zhu,
  Sandhini Agarwal, Katarina Slama, Alex Ray, and 1       Jieyu Zhang, Satyen Subramaniam, Arjun R Loomba,
   others. 2022a. Training language models to follow in-      Shichang Zhang, Yizhou Sun, and Wei Wang.
   structions with human feedback. Advances in neural      2023. Scibench: Evaluating college-level scientific
   information processing systems, 35:27730–27744.        problem-solving abilities of large language models.
                                                        arXiv preprint arXiv:2307.10635.
Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida,
   Carroll Wainwright, Pamela Mishkin, Chong Zhang,   Yubo Wang, Xueguang Ma, Ge Zhang, Yuansheng Ni,
  Sandhini Agarwal, Katarina Slama, Alex Ray, and 1      Abhranil Chandra, Shiguang Guo, Weiming Ren,
   others. 2022b. Training language models to follow in-     Aaran Arulraj, Xuan He, Ziyan Jiang, and 1 others.
   structions with human feedback. Advances in neural      2024. Mmlu-pro: A more robust and challenging
   information processing systems, 35:27730–27744.         multi-task language understanding benchmark. Ad-
                                                     vances in Neural Information Processing Systems,
Charles Packer, Vivian Fang, Shishir_G Patil, Kevin      37:95266–95290.
   Lin, Sarah Wooders, and Joseph_E Gonzalez. 2023.
  Memgpt: Towards llms as operating systems.         Zhexuan Wang, Yutong Wang, Xuebo Liu, Liang
                                                      Ding, Miao Zhang, Jie Liu, and Min Zhang. 2025b.
Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Mered-      Agentdropout: Dynamic agent elimination for token-
   ith Ringel Morris, Percy Liang, and Michael S Bern-       efficient and high-performance llm-based multi-agent
   stein. 2023. Generative agents: Interactive simulacra       collaboration.  In Proceedings of the 63rd Annual
   of human behavior. In Proceedings of the 36th an-     Meeting of the Association for Computational Lin-
  nual acm symposium on user interface software and       guistics (Volume 1: Long Papers), pages 24013–
   technology, pages 1–22.                              24035.

Chen Qian, Wei Liu, Hongzhang Liu, Nuo Chen, Yufan   Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu,
  Dang, Jiahao Li, Cheng Yang, Weize Chen, Yusheng      Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang,
  Su, Xin Cong, and 1 others. 2024. Chatdev: Com-     Shaokun Zhang, Jiale Liu, and 1 others. 2024. Au-
   municative agents for software development. In Pro-      togen: Enabling next-gen llm applications via multi-
   ceedings of the 62nd Annual Meeting of the Associa-      agent conversations.  In First Conference on Lan-
   tion for Computational Linguistics (Volume 1: Long      guage Modeling.
   Papers), pages 15174–15186.
                                                 Haoran Xu, Jiacong Hu, Ke Zhang, Lei Yu, Yuxin Tang,
Chen Qian, Zihao Xie, Yifei Wang, Wei Liu, Kunlun      Xinyuan Song, Yiqun Duan, Lynn Ai, and Bill Shi.
  Zhu, Hanchen Xia, Yufan Dang, Zhuoyun Du, Weize      2025. Sedm: Scalable self-evolving distributed mem-
  Chen, Cheng Yang, and 1 others. 2025. Scaling large      ory for agents. arXiv preprint arXiv:2509.09498.
  language model-based multi-agent collaboration. In
   International Conference on Learning Representa-   Wujiang Xu, Zujie Liang, Kai Mei, Hang Gao, Juntao
   tions, volume 2025, pages 41488–41505.                Tan, and Yongfeng Zhang. 2026. A-mem: Agentic
                                             memory for llm agents. Advances in Neural Informa-
John Schulman,  Filip Wolski,  Prafulla Dhariwal,       tion Processing Systems, 38:17577–17604.
  Alec Radford, and Oleg Klimov. 2017.   Proxi-
  mal policy optimization algorithms. arXiv preprint   Xiangyuan Xue, Yifan Zhou, Guibin Zhang, Zaibin
  arXiv:1707.06347.                                  Zhang, Yijiang Li, Chen Zhang, Zhenfei Yin, Philip
                                                                 Torr, Wanli Ouyang, and Lei Bai. 2025. Comas: Co-
Noah Shinn, Federico Cassano, Ashwin Gopinath,      evolving multi-agent systems via interaction rewards.
  Karthik Narasimhan, and Shunyu Yao. 2023. Re-      arXiv preprint arXiv:2510.08529.
   flexion: Language agents with verbal reinforcement
   learning. Advances in neural information processing    Siyu Yuan, Kaitao Song, Jiangjie Chen, Xu Tan, Dong-
   systems, 36:8634–8652.                             sheng Li, and Deqing Yang. 2025. Evoagent: To-
                                                   wards automatic multi-agent generation via evolu-
Zhen Tan, Jun Yan, I-Hung Hsu, Rujun Han, Zifeng       tionary algorithms. In Proceedings of the 2025 Con-
  Wang, Long Le, Yiwen Song, Yanfei Chen, Hamid       ference of the Nations of the Americas Chapter of the
   Palangi, George Lee, and 1 others. 2025. In prospect      Association for Computational Linguistics: Human
                                       36670

## Страница 11

  Language Technologies (Volume 1: Long Papers),
  pages 6192–6217.

Yanwei Yue, Guibin Zhang, Boyang Liu, Guancheng
  Wan, Kun Wang, Dawei Cheng, and Yiyan Qi. 2025.
  Masrouter: Learning to route llms for multi-agent
   systems. In Proceedings of the 63rd Annual Meet-
   ing of the Association for Computational Linguistics
  (Volume 1: Long Papers), pages 15549–15572.

Aohan Zeng, Mingdao Liu, Rui Lu, Bowen Wang, Xiao
   Liu, Yuxiao Dong, and Jie Tang. 2024. Agenttun-
   ing: Enabling generalized agent abilities for llms. In
  Findings of the Association for Computational Lin-
   guistics: ACL 2024, pages 3053–3077.

Sihang Zeng, Kai Tian, Kaiyan Zhang, Yuru Wang,
   Junqi Gao, Runze Liu, Sa Yang, Jingxuan Li, Xinwei
  Long, Jiaheng Ma, and 1 others. 2025.  Reviewrl:
  Towards automated scientific review with rl. In Pro-
   ceedings of the 2025 Conference on Empirical Meth-
  ods in Natural Language Processing, pages 16942–
  16954.

Guibin Zhang, Muxin Fu, Kun Wang, Frank Wan, Miao
  Yu, and Shuicheng Yan. 2026. G-memory: Tracing
   hierarchical memory for multi-agent systems. Ad-
  vances in Neural Information Processing Systems,
  38:12988–13018.

Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, Fengwei Teng,
  Xionghui Chen, Jiaqi Chen, Mingchen Zhuge, Xin
  Cheng, Sirui Hong, Jinlin Wang, and 1 others. 2025a.
  Aflow: Automating agentic workflow generation. In
   International Conference on Learning Representa-
   tions, volume 2025, pages 34040–34077.

Kaiyan Zhang, Kai Tian, Runze Liu, Sihang Zeng,
  Xuekai Zhu, Guoli Jia, Yuchen Fan, Xingtai Lv,
  Yuxin Zuo, Che Jiang, and 1 others. 2025b. Marti:
 A framework for multi-agent llm systems reinforced
   training and inference. In The Fourteenth Interna-
   tional Conference on Learning Representations.

Heng Zhou, Hejia Geng, Xiangyuan Xue, Li Kang, Yi-
   ran Qin, Zhiyong Wang, Zhenfei Yin, and Lei Bai.
  2025. Reso: A reward-driven self-organizing llm-
  based multi-agent system for reasoning tasks. In Pro-
   ceedings of the 2025 Conference on Empirical Meth-
  ods in Natural Language Processing, pages 15990–
  16009.

Daniel M Ziegler, Nisan Stiennon, Jeffrey Wu, Tom B
  Brown, Alec Radford, Dario Amodei, Paul Chris-
   tiano, and Geoffrey Irving. 2019. Fine-tuning lan-
  guage models from human preferences.   arXiv
   preprint arXiv:1909.08593.





                                       36671

## Страница 12

A  Implementation Details                        tails of implementation are available at https:
                                           //anonymous.4open.science/r/MAS-OS-AD34.
For GSM-hard, SRDD, and MMLU-Pro, we fol-
low Puppeteer (Dang et al., 2026) and adopt their  B  Agent Description
released train/test splits. For SciBench, since the                                               Following  the  experimental  setup  of  Pup-
original release provides only a single split, we ran-                                                    peteer (Dang et al., 2026), we employ a fixed
domly sample 30% as the training set and use the                                                  cohort of specialized agents that strictly adhere
remaining as the test set. Among the compared                                                      to pre-defined configuration settings across four
methods, only MAS-OS and Puppeteer involve                                                     well-established benchmark datasets. The specific
learnable parameter updates; on each benchmark                                                    functional roles and designated task responsi-
they share the same training set. The remaining                                                              bilities of the active agent instances within this
baselines (AFlow, DyLAN, MacNet, EvoAgent)                                                    multi-agent framework are elaborated as follows:
are training-free.  All methods are evaluated on
the identical test set per benchmark to ensure fair        • PlannerAgent: decomposes a task into an
comparison. To assess the scalability and robust-         explicit step-by-step plan.
ness of our framework, we employ two backbone
                                                                 • QuestionAgent: breaks the main problemmodels: Llama-3.1-8B and Llama-3.1-70B. For
                                                             into a small set of key sub-questions to guidea fair comparison, all worker agents across our
                                                     subsequent reasoning.method and baselines share identical role defini-
tions(See details in the appendix B). Specific ad-                                                                 • ReasoningAgent: performs the main multi-
justments were made for the Puppeteer baseline:                                                            step reasoning and produces intermediate con-
for the Llama-3.1-8B experiments, we replaced                                                            clusions.
its original 70B scheduling policy with Llama-3.1-
8B to maintain consistency. Due to computational        • CriticAgent: identifies errors, gaps, or weak
resource constraints, we exclude Puppeteer from         points in the current reasoning and suggests
the Llama-3.1-70B evaluation, as its policy op-         corrections.
timization necessitates access to model weights.
                                                                 • ReflectAgent: reviews the reasoning trajec-We use BGE-M3 (Chen et al., 2024) as the se-
                                                                tory, summarizes what worked and what didmantic embedding model and set τ = 0.80. For
                                                              not, and proposes next steps.each prompt during training, we sample N = 16
rollouts and compute advantages using the RLOO                                                                 • PythonAgent: executes Python calculations
leave-one-out baseline. Policy optimization uses a                                                             for verification and outputs computed results.
PPO-style clipped surrogate objective with clipping
range ϵ = 0.2. We regularize the policy toward a        • SummarizerAgent: compresses the current
frozen reference model using an explicit KL-style        context into a concise summary for down-
penalty with coefficient β = 0.001, and set the        stream steps.
actor learning rate to 1 × 10−5. We use a roll-       • Modifier: corrects specific mistakes and pro-out batch size of 12 with micro-rollout batch size 4,
                                                        vides a revised reasoning or solution.and a training batch size of 8 with micro-train batch
size 2 and gradient accumulation steps 4. Rewards                                                                 • ConcluderAgent: synthesizes the final an-
                                                 swer from previous steps in a fixed final-are clipped to [−2, 2]. In the testing and trainingphases of MAS, set K=3 and M=7. The Agent                                                  answer format.
Scheduler reward uses weight λ = 5×10−5, whilethe Context Allocator reward uses α = 0.25 and        • TerminatorAgent:  decides when the pro-
η = 1. The terminal task reward Rtask varies by        cess should terminate and outputs the final
benchmark to align with their respective evalua-        response.
tion criteria. For the reasoning benchmarks (GSM-
hard, SciBench, and MMLU-Pro), Rtask is de-
fined as a binary indicator of correctness, while for
the SRDD software generation benchmark, Rtask
is computed as the arithmetic mean of the three
component scores (Qian et al., 2024). More de-
                                       36672

## Страница 13

C  Implementation of MAS-OS Algorithm

The algorithmic flowchart of MAS-OS is shown in
Alg 1.

Algorithm 1 MAS-OS Execution Loop
    Input: Task set D; Agent pool A; Max steps   T; Candidate memory pool size M; Allocated
    context size K; Rollouts N
    Output: optimized policy parameters πθ, πϕ
  1: Initialize scheduler policy πθ and allocator pol-
    icy πϕ
  2: while not converged do                                                       Figure 4: Impact of retrieval hyperparameters (Can-
                                    M vs. Allocated Memory  3:     for all (x, y∗) ∈D do                       didate MemoryPool Size
                                                       Size K).  4:        for i ←1 to N do
  5:            for t ←1 to T do
  6:                 oscht           ←    four benchmarks, consistent with the Llama-3.1-8B     x, Mglobal ,       A          t−1   st−1, aσt−1,                          trend.
                                              t  )  7:               σt ∼πθ(· | osch  8:                     if σt = Done then                Table 4: Results on Qwen3-8B across four benchmarks.
  9:                break
                                                Method   GSM-hard SciBench MMLU-Pro SRDD 10:             end if
 11:             MPoolt              Mglobal           Base Model    0.148      0.167      0.528     0.563                  ←{Gt−1,   t−1 }        MacNet       0.171      0.214      0.549     0.624
                                                             Puppeteer     0.305      0.275      0.551     0.638 12:                 Mcandidatet          ←   BUILDCANDIDATES(MPoolt    , x, M)           DyLAN       0.378      0.268      0.543     0.629
 13:                ocont           ←     EvoAgentMAS-OS      0.4830.452      0.3620.384      0.5140.576     0.6480.719
     x, Mcandidatet          , Mglobal , aσt                     t−1
                                                       t  ) 14:                Mcontextt    ∼πϕ(· | ocon
 15:                         ˆyt           ←  E  Hyperparameter Analysis   EXECUTEAGENT(aσt, x, Mglobal , Mcontextt     )                                t−1
 16:                  (ot, st) ←SEPSUM(ˆyt)      We investigate how the candidate memory pool 17:            Gt                                size M and the allocated context size K (defined                   ←
   MEMGRAPHUPDATE(Gt−1, ot, st)             in Sec. 3.2.3) jointly affect performance, with                                                                  2,                                                                                           7, 18:                Mglobalt                                      ∈{1,                                                                    3, 4} and M                                                      ∈{3, 5,                                                                         9} on GSM-                   ←  K                                                 hard                                                     with                                                       Llama-3.1-8B                                                                           (Figure                                                                                                4).                                                                                       Increasing   UPDATEGLOBAL(Mglobal , st)                           M
                        t−1                    from 3 to 7 steadily improves performance by en- 19:          end for
                                                     larging the recall scope, but further expanding to
 20:          Compute Rtask, {R(t)context}, {R(t)sch}   9 yields diminishing returns. Similarly, raising K 21:            Store rollout τi
                                            from 1 to 3 supplies a richer information chain, 22:       end for
                                                while exceeding 3 plateaus or slightly hurts accu- 23:        Estimate advantages via RLOO
                                                  racy as redundant context introduces noise. We 24:       Update πθ and πϕ using PPO
                                                       therefore adopt M = 7, K = 3 to balance informa- 25:    end for
                                                        tion sufficiency and context conciseness. 26: end while
 27: return πθ, πϕ                                F  Impact of Scheduler Capability
                                   MAS-OS enables dynamic agent selection and exe-
                                                   cution based on multi-agent context via its AgentD  Results on Qwen Backbone
                                                   Scheduler. To verify the impact of the scheduler’s
To verify backbone generalization, we evaluate    capability on MAS-OS performance, we conduct
MAS-OS and baselines with Qwen3-8B under the    scalability experiments by scaling the Scheduler’s
same setup as the main experiments. As shown in   backbone across three different model sizes (Llama-
Table 4, MAS-OS achieves the best results on all    3.2-3B, Llama-3.1-8B, and Llama-3.1-70B) while
                                       36673

## Страница 14

                                                confirming that the improvements stem from the
                                              memory-centric collaboration mechanism rather
                                                  than scaling inference compute.





Figure 5: Impact of Agent Scheduler capability on
model performance on GSM-Hard verified via Sched-
uler scaling from 3B to 7B and 70B.

Table 5: Budget-matched comparison. SC@K and
Refl@K denote Self-Consistency and Reflection with
K sampling rounds calibrated to match MAS-OS’s cost.

    Method      GSM-hard SciBench
   SC@28 (8B)      0.175      0.158
   SC@8 (70B)      0.270      0.245
    Refl@8 (8B)      0.252      0.225
   MAS-OS (8B)    0.315      0.278


keeping active agents fixed at 8B. The experimen-
tal results comparation with those of Puppeteer
under the same Scheduler scaling settings are
shown in Figure 5. We can see that enhancing
the capability of Agent Scheduler yields perfor-
mance gains for both frameworks. However, our
method displays significantly higher responsive-
ness (+214.5%) compared to Puppeteer (+72.9%)
on Llama-3.1-70B. This indicates that our intri-
cate Agent Scheduler-Context Allocator logic in-
volves complex decision-making (e.g., dynamic
workflow planning) that is more effectively exe-
cuted by larger models, allowing our framework to
leverage the superior reasoning capabilities of the
70B backbone more fully than the baseline.

G  Budget-Matched Comparison

To verify that MAS-OS’s gains come from its col-
laborative architecture rather than additional in-
ference compute, we compare it against budget-
matched baselines under identical dollar cost: Self-
Consistency (SC) with 8B and 70B backbones,
and Reflection with 8B. The sampling budgets
(K = 28, 8, 8 respectively) are calibrated so that
each baseline incurs the same cost as a single MAS-
OS rollout. As shown in Table 5, MAS-OS (8B)
outperforms all budget-matched baselines, includ-
ing SC with the much stronger 70B backbone,
                                       36674
