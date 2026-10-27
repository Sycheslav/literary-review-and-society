---
id: acl-2025.acl-long.421-text
type: material
title: 'MultiAgentBench : Evaluating the Collaboration and Competition of LLM agents'
work_id: acl-2025.acl-long.421
source_url: https://aclanthology.org/2025.acl-long.421.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 7645134c86b0ff8fada9a84843569bcdeb9769ac06f1311a9c7a82456eb490bf
---

> Источник: [https://aclanthology.org/2025.acl-long.421.pdf](https://aclanthology.org/2025.acl-long.421.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

   MultiAgentBench     : Evaluating the Collaboration and Competition of
                   LLM agents

            Kunlun Zhu1†  ∗, Hongyi Du1†, Zhaochen Hong1†, Xiaocheng Yang1†
                              Shuyi Guo1†, Zhe Wang1 †
         Zhenhailong Wang1, Cheng Qian1, Xiangru Tang, Heng Ji1, Jiaxuan You1
                            1University of Illinois Urbana-Champaign
                                    kunlunz2@illinois.edu

                  Abstract                       leverage multiple LLM-based agents that collabo-
                                                                rate, coordinate, and jointly plan to address these
       Large Language Models (LLMs) have shown                                                       challenges. This paradigm not only increases the
       remarkable capabilities as autonomous agents;                                                         efficiency of task execution but also enables the
        yet existing benchmarks either focus on single-
                                                                realistic simulation of social interactions and dy-       agent tasks or are confined to narrow domains,
        failing to capture the dynamics of multi-agent       namics, thereby enhancing performance in domains
       coordination and competition. In this paper,       such as strategic decision-making, gaming (Silver
     we introduce MultiAgentBench, a compre-        et al., 2017), and software development (Wang
       hensive benchmark designed to evaluate LLM-        et al., 2023c).
       based multi-agent systems across diverse, in-
        teractive scenarios. Our framework measures
       not only task completion but also the qual-
         ity of collaboration and competition using
        novel, milestone-based key performance indi-
        cators. Moreover, we evaluate various coor-
        dination protocols (including star, chain, tree,
      and graph topologies) and innovative strate-
        gies such as group discussion and cognitive
        planning. Notably, gpt-4o-mini reaches the av-
       erage highest task score, graph structure per-
       forms the best among coordination protocols
        in the research scenario,and cognitive plan-
       ning improves milestone achievement rates by
                                                         Figure 1: Overview of MultiAgentBench evaluation      3%. Code and datasets are publicavailable at
                                                          process: Multi-Agent System Coordination in various      https://github.com/ulab-uiuc/MARBLE.
                                                                 interactive environments, with a focus on task perfor-
                                                     mance, and coordination.
  1  Introduction
   Large Language Models (LLMs) such as GPT-3      Despite significant advances in LLM capabili-
   (Brown et al., 2020), GPT-4 (Achiam et al., 2023),    ties, current evaluation paradigms remain insuffi-
   Gemini (Team et al., 2023) and Deepsek-R1 (Guo    cient for multi-agent scenarios. Traditional single-
    et al., 2025), now exhibit human-like language un-   agent benchmarks—such as AgentBench (Liu
   derstanding and generation, enabling their use as    et al., 2023), VisualAgentBench (Sun et al., 2023)
   autonomous agents interacting with environments,  GAIA (Mialon et al., 2023), ToolBench (Qin et al.,
    tools, and other agents (Wang et al., 2023c; Park   2024) and HumanEval (Chen et al., 2021)—pri-
    et al., 2023a; OpenAI, 2023). While single-agent    marily focus on isolated reasoning and generation,
   systems have demonstrated impressive capabilities,   overlooking the dynamics intrinsic to multi-agent
    their isolated operation can limit task execution effi-    interactions.
   ciency and falls short when simulating complex, so-     To address this gap, we introduce MultiAgent-
    cially dynamic scenarios. In contrast, multi-agent   Bench, a comprehensive benchmark designed to
   setups (Li et al., 2023a; Wang et al., 2023b, 2024b)    evaluate LLM-based multi-agent systems across a
                                              wide range of task-solving and simulation scenar-
      ∗Team Leader.
                                                               ios. MultiAgentBench offers several key advan-         † Core Contributors. Contributions are listed in the ap-
    pendix A.1.                                             tages: (1) Multi-Domain Evaluation: The bench-

                                          8580
Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 8580–8622
                            July 27 - August 1, 2025 ©2025 Association for Computational Linguistics

## Страница 2

mark covers diverse domains—from collaborative   maintenance (Bouzenia et al., 2024), and gaming
coding to gaming—ensuring broad real-world ap-   applications (Chen et al., 2023a).  In Minecraft,
plicability. (2) Capturing Coordination and Com-   agents perform complex tasks from construction to
petition: Unlike traditional single-agent bench-   navigation (Wang et al., 2023a; Chen et al., 2023b;
marks, MultiAgentBench explicitly measures both   Yu et al., 2024b; Dong et al., 2024).
coordination dynamics and competitive interac-    GameNGen  enables  real-time   interaction
tions, highlighting the unique challenges of multi-    in DOOM  (Valevski  et   al.,  2024),  while
agent environments. (3) Tailored Metrics and Flex-  CUISINEWORLD   benchmarks   multi-agent
ible Protocols: We propose novel metrics, includ-   collaboration (Gong et al., 2023).  Applications
ing a Key Performance Indicator (KPI) that tracks    extend to social deduction games, game theory (Xu
milestone progress and individual contributions, to    et al., 2023), healthcare (Ke et al., 2024; Kim et al.,
systematically assess planning quality and commu-   2024), business (Chen et al., 2024), education
nication effectiveness. Moreover, our framework,   (Gösling et al., 2024), and urban planning (Zhou
MARBLE (Multi-agent cooRdination Backbone    et  al., 2024b).   Despite progress,  challenges
with LLM Engine), supports various communica-    persist in communication, emergent behavior, and
tion topologies—such as star, chain, tree, and an    scalability (Agashe et al., 2024), motivating the
innovative graph-based approach—and accommo-   need for robust evaluation frameworks.
dates multiple reasoning strategies.
                                                    2.2  Multi-Agent Collaboration  Our contributions can be summarized as follows:
(1) We introduce MultiAgentBench along with   Recent advances in multi-agent systems highlight
the MARBLE framework, a comprehensive bench-   two complementary scaling paradigms:  cogni-
mark that rigorously evaluates LLM-based multi-    tive scaling, which enhances agent reasoning and
agent systems in six diverse interactive scenarios,    adaptability, and population scaling, which lever-
capturing both collaborative and competitive dy-   ages large agent collectives for emergent behaviors
namics. Notably, the cognitive planning planning   (Zhuge et al.; Qian et al., 2024).
feature improves milestone achievement rates by      Cognitive scaling explores mechanisms such
3%.  (2) We propose innovative evaluation met-   as dynamic  architecture  adaptation and  self-
rics that assess not only task success but also coor-   organizing coordination strategies to find the most
dination quality. Our metrics include milestone-    effective pattern of agent communication (Zhuge
based KPIs, structured planning and communi-    et al.). Meanwhile, population-based scaling ex-
cation scores, and a dedicated competition score    hibits nonlinear performance gains as an increasing
that captures conflicting-goal tasks, internal per-   number of agents collectively interact through di-
formance metrics, and competitive aspects in plan-   verse collaboration patterns, including hierarchical
ning and communication. (3) Our experiments re-   delegation and decentralized consensus (Qian et al.,
veal some "aha-moments" in multi-agent coordina-   2024). These approaches enable complex applica-
tion—agents begin to exhibit emergent social be-    tions ranging from geopolitical conflict simulation
haviors, providing promising insights toward AGI-   (Hua et al., 2024) to scientific discovery workflows
level collaboration (Feng et al., 2024).             (Zhou et al., 2024a; Zhang et al., 2025).

2  Related Work                        3  Methodology
2.1  LLM-Based Multi-Agent Systems            3.1  Framework Design
LLM-based multi-agent systems have enabled col-   Our  proposed  evaluation  framework MAR-
laborative problem-solving across domains (Park  BLE (see Figure 2) establishes a robust multi-agent
et al., 2023a; Li et al., 2023b; Chen et al., 2023b).   coordination system by leveraging interconnected
These systems support scientific research through   modules that enable adaptive collaboration, effi-
literature review and experimental design (Zhou    cient communication, and strategic task execution.
et al., 2024a; Agarwal et al., 2024), software engi-   At its core lies the Coordination Engine, respon-
neering tasks (Huang et al., 2023; Wu et al., 2023a;    sible for initializing and synchronizing key mod-
Zhou et al., 2023a; Hong et al., 2024; Ishibashi and   ules—including the Agent Graph, Cognitive Mod-
Nishimura, 2024; Islam et al., 2024; Wang et al.,    ule, and Coordinate Engine—to ensure seamless
2024a; Zhuge et al.) including code generation and    interaction across the system.  Detailed descrip-

                                        8581

## Страница 3

                                                                                                                Collaboration a   Configuration                                                         2. Agent Graph b
                                   Coordinate Engine        Contruction                                     3. Reasoning &
                                                                                                                             Reflection
     Task Info                                                                    4. Interaction to                                                                          the environment
                                                                                             Agent Graph
                                            1. Feed in agent                                9. Pass
     Persona                      specification                         observation
       Data
                                                                                        5,8. Update c  Long-Term    Short                                                                                            Shared                                                          memory                                                                      Memory                                                                                       Term                                     Metadata                                                     to     Domain                      10.                                                                                  Memory                                                                                         with                                                               RAG   Memory                                      the                                          evaluator     Database                                                              6. Pass
                                                             7. Return         interaction
                                                observation          to the
   f                                                          environment
      Evaluator            e                                                d
                                                                                                         Cognitive    Collaboration Score                                                                                            Interaction
         &                     Environment       Tool Box                      &                  Module
       Task Score                                                                                  Experience


Figure 2: MARBLE      : showcasing interactions between task information, persona data, domain databases,
memory modules, and the environment through the coordinate engine and cognitive module.


tions of additional modules can be found in Ap-    collaboratively evolve in complex environments.
pendix A.2.
                                                      3.1.1  Coordination Engine
Agent Graph Module  This module converts                                         The Coordination Engine orchestrates the overall
configuration data into a structured graph G =                                                  execution flow of the system. It initializes agents,
                                                          tasks, and inter-agent relationships via a dedicated(A, E), where A =  {a1, a2, . . . , an} denotesthe set of agents, and each edge in E  is de-                                                  Configuration Module and constructs the Agent
                                           Graph to represent these dynamics. In our frame-fined as a triple (ai, r, aj) with r ∈R repre-senting the relationship between agents ai and                                               work, we distinguish between two key roles: plan-
aj.  For example, a collaboration relationship                                                    ners and actors. Planners are responsible for devis-
is denoted as  (ai, collaborates, aj),  supervi-                                                   ing task inputs, strategizing, and managing overall
sion as (ai, supervises, aj), and negotiation as                                                     task allocation, while actors—represented within
(ai, negotiates, aj). By constructing the graph                                                      the Agent Graph—execute tasks by interacting with
based on these triple relations, we ensure that sub-                                                      the environment and other agents through available
sequent communication and coordination occur ex-                                                           tools.
clusively between agents with explicitly defined                                             Our approach supports four distinct coordination
relationships, mirroring real-world interaction pat-                                                    protocols similar to work from Qian et al. (2025):
terns.                                                         star, tree, graph, and chain.
Cognitive Module  The Cognitive Module is cen-                                                Centralized Coordination: Star & Tree.  In the
tral to responsible agent evolution and social in-                                                     star configuration, a single central planner assigns
telligence in multi-agent coordination.  It main-                                                      tasks to all actors and consolidates their feedback,
tains and updates a comprehensive internal state                                                      offering strong oversight though potentially limit-
that includes each agent’s persona, inter-agent re-                                                  ing scalability. The tree structure extends this by
lationships, and reasoning strategies (e.g., Chain-                                                  organizing agents hierarchically: a top-level plan-
of-Thought (Wei et al., 2023), ReACT (Yao et al.,                                                   ner delegates tasks to subordinate planners, which
2023)).  Crucially, this approach mirrors human                                                         in turn coordinate with actors. This hierarchical ap-
cognitive processes by fusing elements of theory-                                                proach balances centralized control with improved
of-mind and social intelligence (e.g., Premack and                                                          scalability for handling more complex tasks.
Woodruff, 1978)—similar to how humans continu-
ously update their mental models based on social   Decentralized Coordination: Graph-Mesh &
cues, prior experiences, and contextual information.   Chain.  The graph-mesh configuration employs
The fusion of cognitive, social, and adaptive mecha-   a network of interconnected actors that commu-
nisms forms the backbone of our system, empower-   nicate directly, enabling concurrent planning and
ing agents to dynamically adjust their strategies and    distributed decision-making. Conversely, the chain
                                        8582

## Страница 4

                                     a. Coordination Protocol                                                   b. Planning Prompt Strategy


                     Star                        Tree
                                                                                              VanillaVanillaVanilla        Chain-of-ThoughtChain-of-ThoughtChain-of-Thought        GroupGroupGroupDiscussionDiscussionDiscussion

                                               Actor                                    Planner

    Centralized                         Planner                                            Planner/                           Cognitive Evolve Planning
     Planner                                                                                Actor
                                                                                    Task                                 Planner
                                                      Actor   Actor


                 Graph-Mesh                Chain                            Experience           Expectation            Task Plan

                             Agent4
   Decentralized                                Agent3                                Update
   Self-Planning
                       Agent1
                                                               Agent1     Agent2     Agent3              Cognitive                               Agent
                                                                           Module
                                  Agent2                                                                                         Result


Figure 3: Illustration of coordination protocols and planning prompt strategies. (a) shows centralized and
decentralized planning structures (e.g., star, tree, graph, and chain). (b) describes strategies like group discussions
and cognitive prompts, incorporating iterative feedback and task updates for effective planning.


configuration arranges actors sequentially, where    ablation studies on the star coordination style.
each agent passes its decision to the next. This
                                                    3.2  Benchmark Designsequential handoff is well-suited for tasks with in-
herent dependencies, though it may limit parallel   To systematically evaluate our multi-agent frame-
processing capabilities.                          work, we curate a benchmark of diverse scenar-
                                                      ios spanning task-oriented and social-simulation-
Planner Design and Enhancements.  In our cen-                                             based environments (Figure 1). These scenarios
tralized coordination protocol, the planner supports                                                    are constructed through a combination of: (1) Ex-
four distinct planning approaches that reflect hu-                                                         isting multi-agent tasks adapted from prior work
man decision-making processes: vanilla prompting,                                                   or datasets (e.g., database error analysis, research
chain-of-thought (CoT) (Wei et al., 2022), group                                                      collaboration). (2) LLM-generated tasks with hu-
discussion, and cognitive self-evolving planning.                                     man verification and refinement (e.g., Werewolf
The vanilla prompt employs a straightforward,                                             and Bargaining). This dual approach ensures both
zero-shot instruction to generate task plans directly.                                                   realism (by leveraging established tasks) and nov-
The CoT approach enriches this process by facili-                                                         elty (through generative expansion), while human
tating step-by-step reasoning through detailed in-                                                     validation guarantees that each scenario remains
puts—such as the target task, agent profiles (includ-                                                  coherent and feasible.
ing roles, expertise, and historical performance),
and summaries of previous subtasks—to guide logi-   Agents with Mutual Goal.  In the task-oriented
cal progression. The group discussion (Chen et al.,    scenarios, the agents share with the mutual goal to
2023b) method enables multiple agents to share    finish one specific task. We focus on four represen-
insights and constraints, fostering a collaborative    tative tasks: (1) research tasks follow the setup
deliberation that refines the overall plan. Lastly,   of ResearchTown (Yu et al., 2024a), where agents
similar to the Reflexion (Shinn et al., 2023) method,   with complementary research profiles co-author
our cognitive self-evolving planning method mir-   a new proposal on a chosen topic; (2) Minecraft-
rors human learning by generating expected out-   based building tasks require agents to collabora-
comes and progress for each task, storing these in    tively construct structures in a shared environment;
memory, and then comparing actual performance    (3) database error analysis involves exactly five
against these expectations in subsequent iterations.   agents, each specializing in diagnosing a distinct
This comparison produces evolving experiences    root cause of system inconsistencies; (4) coding
that continuously inform and adjust future plan-   challenges demand collective problem-solving and
ning (See Appendix A.12 for detailed prompting).   software module development. Across these tasks,
Together, these methods leverage both individual    agents must coordinate, divide labor, and synthe-
reasoning and collaborative optimization, enhanc-    size outputs efficiently. We scale scenario diversity
ing coordination efficiency as validated through   by creating 100 test cases per task, with variations

                                        8583

## Страница 5

                      B E N C H M A R K C U R A T I O N & M I L E S T O N E S D E T E C T

                      Human-Generated Fixed Dataset                     Dynamic Milestones Detecting

                                                                    collaboration      Negotiation for a Chair Banner.              Milestones
                                                                                       $14.99 with a rating of 4.8/5 stars...           Description                                                                    Buyer
                                                                                   Seller
                                                 Role competition LLM generated
      Data        Bargaining                                                                    Chain            Task 1     Results 1     LLM
                   Env       Agents                            Star                           KPI ++
                                                                                                                                                                                                                       “I’ll give you a 10% discount if you buy 2.”
                                                               Graph
                                                                     Tree                           KPI ++
                                                                                                           “OK. But 15%! I’ll write reviews for you!”
    Real Data
                                                 Relationship                  Task 2            milestone not completed
                Coding Env                 …                 “Well, I don’t know... 15%? Emm...”       …

     Figure 4: Illustration of our benchmark curation and the dynamic milestones detecting for KPI metric.


in research topics, Minecraft creation, database er-   sured.
rors, or coding objectives.                      More detailed environment setups, interaction
                                                            tools, and additional examples for different scenar-
Agents  with  Conflicting  Goals.  In  social-                                                        ios appear in Appendix A.4, A.5, A.6, A.7, A.8,
simulation based scenarios. We strengthen compet-                                             and A.9.
itive elements by introducing Werewolf and Bar-
gaining scenarios.  In Werewolf, two groups of    3.3  Evaluation Metrics
agents face off in an adversarial setting, employing                                        As illustrated in Figure 1(b)(c) , our evaluation con-
deceptive strategies within a predefined narrative.                                                        siders two primary dimensions: Task Completion
The Bargaining environment simulates negotiations                                           Performance and Coordination.
over shared resources, where agents strive to maxi-
mize individual gains through strategic concessions   Task Completion Metrics.  As described in Sec-
                                                      tion 3.2, each task is segmented into a series ofor alliances. Both settings evaluate adaptability,
                                                         flexible milestones. An LLM-based detector con-conflict resolution, and negotiation skills under un-
                                                    tinuously monitors the iterative process to identifycertainty.
                                            which milestones have been achieved and records
Role Assignments and Graph Structures.  To    the corresponding contributing agents. For each
emphasize multi-agent collaboration, each scenario    agent, the number of milestones they contribute
enforces distinct agent roles (e.g., project manager,    to is noted as nj, and their individual KPI is cal-
domain expert, technical specialist) and defines spe-   culated as the ratio of nj to the total number of
cific graph relationships (star, tree, chain, or mesh).   milestones M. The overall KPI is defined as the av-
These structures reflect realistic team dynamics or    erage of these individual KPIs across all N agents,
competition, guiding how agents share information,   which is computed as follows:
make decisions, and coordinate actions.
                     XN    XN                                                         1             1
Milestones Generation for Scenarios  To facil-         KPIoverall =       KPIj =          nj.                                   N      NM
itate the evaluation of MARBLE iterations, each                     j=1             j=1
task is segmented into a series of flexible mile-      In addition to the KPI derived from milestone
stones. Unlike rigid checkpoints, these milestones    detection, a separate task-based score is computed
are broadly defined. For instance, in a research task,    to evaluate the final output quality. For tasks such
a milestone may be reached by completing five key    as research or bargaining, an LLM-defined scor-
queries (5q) for research proposal (more details see    ing rubric is applied to generate the score, whereas
Appendix A.4) or by enhancing a previous set of    tasks like Minecraft, Werewolf, database error fixes,
5q. Throughout MARBLE’s iterative process, a lan-   or coding are evaluated using rule-based metrics
guage model continuously monitors whether mile-    (e.g., accuracy). Detailed scoring criteria and evalu-
stones m1, m2, . . . have been achieved and logs    ation prompts for these task-based assessments are
the outcomes. This method integrates human- or    respectively provided in the Appendix A.9, A.5,
LLM-generated outlines with dynamic, execution-   A.6, and A.7, which demonstrate the effectiveness
based assessments, ensuring that both intermediate    of the metrics while evaluating the coordination
progress and team coordination are effectively mea-    abilities.

                                        8584

## Страница 6

Coordination Metrics.  Coordination is evalu-   4.2  Main Experiment One: Model
ated by quantifying the agents’ communication        Performance Across Different Scenarios
and planning capabilities. The Communication
                                                   In this experiment, we evaluate the performanceScore (Cscore) is derived from an LLM-based eval-
                                                   of five models across diverse scenarios, with re-uation that considers inputs such as the task de-
                                                           sults summarized in Table 1. Our analysis leads toscription, agent profiles, and aggregated commu-
                                                      several key insights:nication data, resulting in a score on a five-point
scale (with Cscore = 0 if no communication oc-
                                                         1. Superior Task Performance of gpt-4o-mini:curs).  Similarly, the Planning Score (Pscore) is
                                              Across  multiple  tasks,  gpt-4o-mini  consis-determined by assessing the agents’ abilities to or-
                                                        tently  achieves  high Task  Scores  (TS).  Forganize tasks, maintain roles, and adapt strategies
                                               example,  in the Research scenario  it obtainsbased on their profiles and aggregated planning
                                                a TS  of 84.13%,  outperforming  other mod-data, also on a five-point scale. The overall Coordi-
                                                         els such as Meta-Llama-3.1-8B (80.87%) andnation Score (CS) is then computed by averaging
                                           Meta-Llama-3.1-70B (80.80%).  Similar trendsthese two sub-scores. More details regarding the
                                                    are  observed  in  the Coding domain,  whereevaluation process and the output format are pro-
                                           gpt-4o-mini records a TS of 65.10 compared tovided in the Appendix A.12. We also did a human
                                               lower scores from its competitors. These resultsevaluation comparing human alignment with those
                                                       indicate that the underlying model capabilities aremetrics, results are in Appendix A.3.
                                                a decisive factor in achieving superior task perfor-
4  Experiment Setup                        mance.
4.1  Experiment Settings                                                         2. The Nuanced Role of Coordination (Collab-
Models.  Since our MARBLE framework  re-   oration) Score:  While the Collaboration Score
quired function-calling abilities.  Thus, we con-   (CS) is designed to measure coordination ability,
sider three open-source models:  Meta-Llama-   our findings suggest that its impact on the over-
3.3-70B (Dubey et al., 2024), Meta-Llama-3.1-    all task performance is complex. For instance, in
70B-Instruct-Turbo (Dubey  et  al., 2024), and    the Minecraft scenario, Meta-Llama-3.1-70B ex-
Meta-Llama-3.1-8B-Instruct-Turbo, as well as two    hibits a high CS of 75.00 but an extremely low
closed-source models: GPT-3.5-turbo-0125 and   TS of 0.21, a more deep analysis for this can re-
GPT-4o-mini1.We access the open-souce models    fer to Appendix 21. This discrepancy implies that,
are provided by the togetherai 2 service, utilizing    although coordination contributes to performance,
the default parameter settings.                                  it does not compensate for inherent deficiencies
  For the agent actions, we configure the models    in task execution capabilities. In contrast, models
with a maximum token number (max_token_num)    that balance both high TS and moderate-to-high
of 1024, a temperature of 0.7, and a top_p of 1.0,   CS—such as gpt-4o-mini—demonstrate more ro-
in order to balance the creativity and consistency    bust and reliable performance across scenarios.
of the agents’ responses during interactions. The
overall maximum iterations are set to 5 for research    3.   Model-Specific Strengths and Context-
and 20 for Minecraft; more details can be found in   Dependent Performance:  Our results reveal that
the Appendix. In our evaluation, which involves                                                          different models exhibit varied strengths depending
both Task Completion and Simulation scenarios,                                          on the task. For example, Meta-Llama-3.3-70B
we assess the models along two primary axes: Task                                           shows a notable CS in the Research (72.00) and
Score (TS) and Coordination Score (CS), using the   WereWolf (76.30) tasks, yet its TS lags behind
same metrics as described in the Metrics section.                                                         that of gpt-4o-mini in several scenarios. These
The maximum communication iteration number is                                                      variations emphasize that no single metric can
also set to 5. Furthermore, the long-term base mem-                                                          fully capture a model’s effectiveness; instead, both
ory for each agent is set to be unlimited. Finally, for                                                        task-specific abilities and coordination skills must
the main experiment, a graph-mesh coordination                                             be considered.  Overall, our study underscores
protocol is adopted to facilitate interactions.                                                         that while coordination plays a role, the intrinsic
   1https://www.openai.com                        model capabilities are the primary drivers of suc-
    2https://www.together.ai                              cess across diverse tasks.

                                        8585

## Страница 7

                         Research       Minecraft       Database        Coding       Bargaining     WereWolf
  Model
                    TS    CS    TS    CS    TS    CS    TS    CS    TS    CS    TS    CS

  Meta-Llama-3.1-8B    80.87   52.40    6.12    54.40   34.00   40.00   59.90   67.24   72.81   73.36   12.64   60.00
  Meta-Llama-3.1-70B   80.80   49.50    0.21    75.00   53.00   37.70   62.10   67.18   72.13   71.46   19.82   60.60
  Meta-Llama-3.3-70B   80.00   72.00    9.15    69.00   28.50   40.00   56.60   74.40   73.15   69.56   36.33   76.30

  gpt3.5-turbo           70.20   55.90    5.05    63.60   45.00   60.89   55.50   76.20   71.67   72.00   15.69   75.90
  gpt-4o-mini            84.13   52.00   33.60   61.50   45.00   43.22   65.10   66.30   74.47   74.20   14.06   60.10

Table 1: Average Task Score (TS) (%) and the Coordination Score (CS) for Minecraft, Database, Coding,
Bargaining, and WereWolf, scores are multiplied by 20. We can see that model abilities are still the key factor for
task completion. CS is a good indicator for TS given three pairs of scenarios having the one model having the
highest TS and CS at the same time.

4.3  Main Experiment Two: Effects of
     Collaboration Protocols and Planning           Comparison of Different Coordination Protocols        Tree
     Strategies                                                                  Coord Score                                    StarGraph
                                                                                                                                                                  Chain
We investigate the impact of different collabora-           Innovation                        Plan Score
tion protocols—Star, Tree, Graph, and Chain—on
model performance in the Research scenario.                                                                          100.0
                                                                                                                                                   80.0
  According to Fig. 5, the graph-based protocol ex-                                                    40.0 60.0
cels in research scenarios with the best task perfor-     Safety                                20.0        Comm Score
mance, planning efficiency, and token usage, while
both the star and graph protocols yield similar task
scores.  In contrast, the tree-based protocol per-
forms poorly, with high token consumption and the
                                                                                         Feasibility                      Token Usage
lowest task and coordination scores. As shown in
Fig. 6, Cognitive Evolving Planning demonstrates                            Task Score
superior coordination—significantly outperform-
ing the alternatives—and achieves a task score com-   Figure 5: Comparison of Different Coordination Pro-
parable to the best, COT. Counterintuitively, the    tocols.—Tree, Star, Graph, and Chain—across multi-
                                                         ple evaluation metrics. Specially, the token usages aregroup discussion method scores the worst across
                                                        scaled such that the lowest value is 0 and the hightestall metrics, possibly because an overly large plan-                                                      value is 100. Details about metrics used for research
ning group hinders effectiveness, similar to large                                                           task can be found at A.4
organizations in real-world scenarios.

5  Ablation Study

The goal of our ablation study is to identify the key                     Comparison of Planning Strategies
                                                                                                       80                                       77.67                                         76.67
modules and parameters that affect performance.             70                 73.67                                         72.67
                                                                                                       60           55.50                                                               59.00
                                                                                                                          52.37                  51.71 50.00                                                                                                                                                                             49.00            49.87Ablation on Different Max Iteration Settings                                                                                                                                                                       46.35                                                                          (%)50
We evaluate 10 tasks from the Minecraft scenario           40
                                                                                                                            Score30using six distinct maximum iteration settings. As
shown in Fig. 7, both task and coordination scores           20
increase from 1 to 7 iterations, but then drop           10
sharply at 10 iterations. At 20 iterations, while            0        Naive          COT            Group        Cognitive Evolve
the task score shows a recovery, the coordination                             KPI         Coordination Score         Task Score
score remains nearly unchanged beyond 7 itera-
                                                     Figure 6: Average Metrics for Research Tasks for dif-tions. This pattern suggests that, for highly chal-                                                            ferent planning prompt strategies. Cognitive Evolve
lenging tasks, excessive iterations may lead to co-                                                     Planning show best result in CS.
ordination degradation—possibly due to communi-
cation overhead or conflicting directives emerging

                                        8586

## Страница 8

over prolonged interactions. These findings under-   6  Emergent Behaviors Analysis
score the need for adaptive iteration strategies that
                                                   In MultiagentBench, goal-driven emergent behav-balance task execution with effective coordination.
                                                        iors are pivotal to team coordination—we argue
       Scores for gpt-4o-mini across different Iterations in MineCraft      that these “aha-moments” not only mark when in-
    70                                                 dividual agents align their actions toward shared
    60                                                 objectives but also catalyze spontaneous multia-
    50                                                gent dynamics, unveiling novel coordination strate-
  Value 40                                                  gies and adaptive collective intelligence. (see Ap-
  Score 30                                             pendix A.5.6). Under information asymmetry and
    20                                                     role conflicts, agents display three key patterns (re-

                                                                                   Task Score    10                                                                   Communication Score      fer to A.5.6 and A.5.6 for Werewolf scenarios, and
                                                                                   Planning Score     0                                                                                Collaboration Score      Section 18 for Bargaining):
          1       3       5       7          10                                     20
                                                           Iterations                       Strategic Information Sharing  Agents selec-
Figure 7: Scores for gpt-4o-mini across different it-    tively disclose key information (e.g., the Seer with-
erations in Minecraft. The figure presents Task Score    holding inspection results) based on trust and con-
(TS), Communication Score (CS), Planning Score (PS),    text, echoing the "strategic silence" seen in hu-
and Collaboration Score (CoS) over multiple iterations.   man interactions (Park et al., 2023b). For instance,
                                                      in A.5.6, both the Seer and Witch (gpt-4o) were
                                                   overly cautious, missing optimal sharing opportu-
Ablation on Different Agent Numbers  We as-    nities and leading to failure. Another case is shown
sess configurations with 1, 3, 5, and 7 agents in the    in Fig 26, where two research agents strategically
research scenario, selecting 20 papers that have at    evolve the research proposal details, combining the
least 7 main authors. As illustrated in Fig. 8, in-   strengths of both background knowledge.
creasing the number of agents leads to a decrease in
                                                Trust-Polarized Collaboration  Role identitiesthe overall KPI, which aligns with the anticipated
                                                       drive collaboration splits: over-suspicious villagerstrade-off between increased collaborative complex-
                                      may turn against their own, while werewolves canity and performance. Notably, the average coordi-
                                                       create a "false consensus" through deception (Fehrnation score improves significantly when moving
                                            and Gächter, 2000) and internal execution (Wool-from 1 to 3 agents, while the average task score
                                                     ley et al., 2010). As shown in A.5.6, villagers’increases more gradually.  This indicates that a
                                                  excessive caution allowed werewolves to exploitmoderate expansion in team size can enhance coor-
                                                  confusion; similar internal friction is evident indination efficiency, although further increases may
                                                 Bargaining (18).introduce additional coordination challenges that
counterbalance task performance gains.
                                              Role-Driven Strategy Iteration  Throughout the
                                              game, roles such as the Seer and Witch adjust their           Scaling on Agents Number in Research Scenario
   70                                                          Avg KPI (%)           strategies. The Seer, for example, shifts from a
                                                               Avg Coord Score (%)
   65                                                          Avg Task Score (%)      conservative to a leadership role (see A.5.6), while
   60                                                 the Witch moves from hoarding to taking risks.
   55                                           These shifts support the notion that task objectives
(%)
   50                                                  drive decision-making, aligning with the AutoGen
Score   45                                          framework findings (Wu et al., 2023b).

   40
   35                                            Quantitative Analysis of Emergent Behaviors
   30                                        (Werewolf Scenario)  To quantify goal-driven
         1          2          3          4          5          6          7     emergent behaviors in the Werewolf scenario, we                                   Agents Num
                                           employ LLM as a judge to analyze each recorded
Figure 8: Scaling on Agents Number in Research Sce-   game transcript. Specifically, for every session in
nario. This figure shows the impact of agent number on    our dataset, we segment the multi-turn dialogue and
KPI, Coordination Score, and Task Score.                                                   agent actions, then prompt the LLM to detect three
                                                          target behaviors: (i) Strategic Information Sharing,

                                        8587

## Страница 9

(ii) Trust-Polarized Collaboration, and (iii) Role-   Table 3: Summary of Emergent Behaviors in Bargaining
                                                       Scenarios (Buyer vs. Seller).Driven Strategy Iteration. Our script tallies these
occurrences across all transcripts, aggregating them                                                                                    File                   Total   Strat. Info.  Trust Collab.  Role Iter.
per experimental configuration.                              Buyer Side
  Table 2 presents a summary of these counts. “To-       buyer-gpt-3.5-turbo     100          81            1        81
tal” denotes the total number of sessions in each       buyer-gpt-4o-mini      100          88            0        88
                                                                          buyer-Llama-3.1-70B    100          81            2        80
file, while the last three columns respectively show      buyer-Llama-3.1-8B     100          92            0        87
how many sessions exhibited each emergent behav-      buyer-Llama-3.3-70B    100          84            1        82
ior. We tested five different model settings, ranging      Buyer Total           500         426            4       418
from GPT-based to LLaMA-based models.                   Seller Side
                                                                                       seller-gpt-3.5-turbo     100          88            0        87
Table 2: Summary of Emergent Behaviors in Werewolf       seller-gpt-4o-mini      100          95            0        95                                                                              seller-Llama-3.1-70B    100          96            0        97
Scenarios                                                                  seller-Llama-3.1-8B     100          97            0        96
                                                                              seller-Llama-3.3-70B    100          90            1        88
 Model         Total   Strat. Info.  Trust Collab.  Role Iter.         Seller Total           500         466            1       463
  gpt-4o-mini     100          97          100        42      Grand Total         1000         892            5       881
  gpt-3.5         100         100          100        66
  llama-3.1-8b     100          96           98        38
  llama-3.1-70b    100         100          100        55     bilateral structure—there is less impetus for large-  llama-3.3-70b    100         100          100        89
                                                       scale alliance-building or deception across multiple Grand Total    500         493          498       290
                                                             parties. Role-Driven Strategy Iteration remains fre-
                                                     quent: both buyer and seller can adapt their negoti-
  As shown in Table 2, Strategic Information Shar-                                                       ation tactics (e.g., starting from extreme offers and
ing and Trust-Polarized Collaboration arise consis-                                                   gradually conceding) in a manner driven by their
tently—reflecting how manipulations of trust and                                                         “role.” Such interplay of strategic disclosure, occa-
carefully timed information disclosure are central                                                       sional (albeit limited) trust dynamics, and ongoing
to Werewolf gameplay. Role-Driven Strategy Iter-                                                    role-based adjustments typifies two-party bargain-
ation occurs less frequently, suggesting that while                                                  ing interactions. Overall, the pattern of emergent
specialized roles (e.g., Seer, Witch, Werewolf) can                                                 behaviors here aligns well with the fundamental
evolve their behavior, such adaptive dynamics may                                                      buyer-seller tension, wherein each agent seeks to
require longer or more intricate rounds to manifest                                           maximize its advantage via selective sharing, re-
fully. Overall, these results align with the social                                                 peated iteration, and a careful balance of coopera-
deduction nature of Werewolf: hidden-role uncer-                                                        tion and self-interest.
tainty naturally fosters high levels of strategic com-                                                                    -
munication and polarizing trust dynamics, whereas
deeper shifts in role-based tactics may only emerge                                       7  Conclusion
given sufficient interaction rounds.
                                                   In this work, we introduce MultiAgentBench and
Quantitative Analysis of Emergent Behaviors                                                      the MARBLE framework, providing a comprehen-
(Bargaining Scenario) We also examine emer-                                                      sive benchmark for evaluating LLM-based multi-
gent behaviors in a Bargaining scenario, where a                                                  agent systems across diverse interactive scenarios.
buyer and seller negotiate terms. Again, we use                                         Our proposed evaluation metrics go beyond task
the same LLM-based detection method to identify                                                    success, capturing coordination quality through
the same three types of behaviors. Table 3 aggre-                                                     structured planning, communication scores, and
gates results for five model configurations on the                                                   competition-driven assessments. Experimental re-
buyer side and five on the seller side, each with 100                                                            sults highlight key emergent social behaviors, offer-
sessions.                                                   ing valuable insights into future multiagent work.
   In these Bargaining sessions, Strategic Informa-
tion Sharing also dominates, as negotiation natu-                                       8  Limitations
rally incentivizes the buyer and seller to withhold
or reveal private information (e.g., target prices,   While our proposed multi-agent benchmark and
product details) at opportunistic moments. How-   framework provide a diverse range of tasks and
ever, Trust-Polarized Collaboration appears much    evaluation metrics, several areas warrant further
less often, which is consistent with the primarily    exploration to enhance their applicability and ro-

                                        8588

## Страница 10

bustness:                                           ucation through Award # 2229873 - AI Institute for
                                                Transforming Education for Children with Speech
Expanding Scenario and Model Coverage.                                            and Language Processing Challenges. The views
Currently, our benchmark focuses on specific do-                                            and conclusions contained herein are those of the
mains such as research co-authoring, Minecraft                                                    authors and should not be interpreted as necessarily
building, database error analysis, coding collabora-                                                    representing the official policies, either expressed
tion, and select competitive scenarios (e.g., Were-                                                     or implied, of the U.S. Government. The U.S. Gov-
wolf and bargaining). To better capture the com-                                             ernment is authorized to reproduce and distribute
plexity of real-world multi-agent interactions, fu-                                                       reprints for governmental purposes notwithstand-
ture work can incorporate more diverse settings,                                                   ing any copyright annotation therein. We sincerely
including open-world environments, scenarios re-                                                     appreciate the support from Amazon grant funding
quiring richer social cognition, and tasks on the                                                     project 120359, “GRAG: Enhance RAG Applica-
application side like task-oriented dialogues. In the                                                        tions with Graph-structured Knowledge” and Meta
aspect of models, our work does not cover the full                                                             gift funding project “PERM: Toward Parameter
spectrum. Future work may include the result of                                                         Efficient Foundation Models for Recommenders”.
other latest ones (e.g. the DeepSeek model family).

Enhancing Ablation Studies.  Our current analy-
                                          Referencessis focuses primarily on overall coordination and
competition performance, leaving finer-grained in-   Josh Achiam, Steven Adler, Sandhini Agarwal, Lama
sights into specific components underexplored. Fu-     Ahmad,  Ilge Akkaya,  Florencia Leoni Aleman,
                                                 Diogo Almeida, Janko Altenschmidt, Sam Altman,ture experiments can be focused on different mem-                                                   Shyamal Anadkat, et al. 2023. Gpt-4 technical report.
ory mechanisms (e.g. long-term memory, short-                                                        arXiv preprint arXiv:2303.08774.
term memory, shared memory) and multiagent dif-
ferent workflow method.                       Shubham Agarwal, Issam H. Laradji, Laurent Charlin,
                                                  and Christopher Pal. 2024.  Litllm: A toolkit for
Advancing Competition Mechanisms.  While        scientific literature review.
our benchmark incorporates competitive tasks, it
                                                      Saaket Agashe, Yue Fan, Anthony Reyna, and Xin Ericdoes not fully capture the complexity of real-world                                               Wang. 2024. Llm-coordination: Evaluating and an-
multi-agent interactions involving multi-party ne-      alyzing multi-agent coordination abilities in large
gotiations, repeated strategic play, or stochastic      language models.
elements. Investigating how agents transition be-
                                                      Asaniczka. 2023. Amazon products dataset 2023 (1.4mtween cooperative and adversarial roles in evolving
                                                             products).
environments remains a promising direction.
                                                    Islem Bouzenia, Premkumar Devanbu, and Michael
Handling Open-Ended and Ill-Defined Tasks.                                                             Pradel. 2024.  Repairagent: An autonomous, llm-
Most tasks in our framework involve well-defined      based agent for program repair.  arXiv preprint
objectives, such as completing a research proposal      arXiv:2403.17134.
or resolving database inconsistencies. However,
                                      Tom B Brown, Benjamin Mann, Nick Ryder, Melaniereal-world applications often require agents to op-                                                       Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind
erate in open-ended or ambiguous contexts without      Neelakantan, Pranav Shyam, Girish Sastry, Amanda
clear success criteria. Future extensions could ex-      Askell, et al. 2020. Language models are few-shot
plore how multi-agent systems adapt to exploratory,       learners. Advances in Neural Information Processing
                                                          Systems, 33:1877–1901.non-goal-oriented scenarios.
                                              Dake Chen, Hanbin Wang, Yunhao Huo, Yuzhao Li, and
Acknowledgment                              Haoyang Zhang. 2023a. Gamegpt: Multi-agent col-
                                                              laborative framework for game development. arXiv
This research is partly based upon work supported                                                             preprint arXiv:2310.08067.
by DARPA ITM Program No. FA8650-23-C-7316,
the Molecule Maker Lab Institute: an AI research   Mark Chen,  Jerry Tworek, Heewoo Jun, Qiming
institute program supported by NSF under award      Yuan, Henrique Ponde de Oliveira Pinto, Jared Ka-
                                                              plan, Harri Edwards, Yuri Burda, Nicholas Joseph,No. 2019897, and the AI Research Institutes pro-                                                 Greg Brockman,  et  al. 2021.   Evaluating large
gram by National Science Foundation and the Insti-      language models trained on code.  arXiv preprint
tute of Education Sciences, U.S. Department of Ed-      arXiv:2107.03374.

                                        8589

## Страница 11

Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang,   Dong Huang, Qingwen Bu, Jie M Zhang, Michael Luck,
  Chenfei Yuan, Chi-Min Chan, Heyang Yu, Yaxi Lu,     and Heming Cui. 2023. Agentcoder: Multi-agent-
  Yi-Hsin Hung, Chen Qian, Yujia Qin, Xin Cong,      based code generation with iterative testing and opti-
  Ruobing Xie, Zhiyuan Liu, Maosong Sun, and Jie       misation. arXiv preprint arXiv:2312.13010.
  Zhou. 2023b. Agentverse: Facilitating multi-agent
   collaboration and exploring emergent behaviors.       Yoichi Ishibashi and Yoshimasa Nishimura. 2024. Self-
                                                        organized agents: A llm multi-agent framework to-
Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang,     ward ultra large-scale code generation and optimiza-
  Chenfei Yuan, Chi-Min Chan, Heyang Yu, Yaxi Lu,       tion. arXiv preprint arXiv:2404.02183.
  Yi-Hsin Hung, Chen Qian, Yujia Qin, Xin Cong,
  Ruobing Xie, Zhiyuan Liu, Maosong Sun, and Jie  Md Ashraful Islam, Mohammed Eunus  Ali, and
  Zhou. 2024. Agentverse: Facilitating multi-agent    Md Rizwan Parvez. 2024. Mapcoder: Multi-agent
   collaboration and exploring emergent behaviors. In      code generation for competitive problem solving.
  The Twelfth International Conference on Learning      arXiv preprint arXiv:2405.11403.
   Representations.
                                          Yu He Ke, Rui Yang, Sui An Lie, Taylor Xin Yi Lim,
Yubo Dong, Xukun Zhu, Zhengzhe Pan, Linchao Zhu,                                                                 Hairil Rizal Abdullah, Daniel Shu Wei Ting, and Nan
  and Yi Yang. 2024. Villageragent: A graph-based                                                           Liu. 2024. Enhancing diagnostic accuracy through
   multi-agent framework for coordinating complex task                                                          multi-agent conversations:  Using large language
  dependencies in minecraft.                                                  models to mitigate cognitive bias.  arXiv preprint
                                                        arXiv:2401.14589.Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey,
  Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman,
                                                Yubin Kim, Chanwoo Park, Hyewon Jeong, Yik Siu  Akhil Mathur, Alan Schelten, Amy Yang, Angela
                                                    Chan, Xuhai Xu, Daniel McDuff, Cynthia Breazeal,   Fan, et al. 2024. The llama 3 herd of models. arXiv
                                                  and Hae Won Park. 2024. Adaptive collaboration   preprint arXiv:2407.21783.
                                                              strategy for llms in medical decision making. arXiv
Ernst Fehr and Simon Gächter. 2000. Cooperation and       preprint arXiv:2404.15155.
  punishment in public goods experiments. American
  Economic Review, 90(4):980–994.               Gen Li, Shizhe Chen, Yinan Ge, Di Jin, and Zhiyuan
                                                           Liu. 2023a. Chatdev: Generating software system
Tao Feng, Chuanyang Jin, Jingyu Liu, Kunlun Zhu,      with chatgpt. arXiv preprint arXiv:2307.04549.
  Haoqin Tu, Zirui Cheng, Guanyu Lin, and Jiaxuan
  You. 2024. How far are we from AGI: Are LLMs   Guohao Li, Hasan Abed Al Kader Hammoud, Hani
   all we need?  Transactions on Machine Learning        Itani, Dmitrii Khizbullin, and Bernard Ghanem.
  Research. Survey Certification.                        2023b. Camel: Communicative agents for "mind"
                                                            exploration of large language model society.
Ran Gong, Qiuyuan Huang, Xiaojian Ma, Hoi Vo, Zane
  Durante, Yusuke Noda, Zilong Zheng, Song-Chun   Xiao Liu, Hao Yu, Hanchen Zhang, Yifan Xu, Xuanyu
  Zhu, Demetri Terzopoulos, Li Fei-Fei, and Jianfeng       Lei, Hanyu Lai, Yu Gu, Hangliang Ding, Kaiwen
  Gao. 2023. Mindagent: Emergent gaming interaction.     Men, Kejuan Yang, et al. 2023. Agentbench: Evaluat-
  arXiv preprint arXiv:2309.09971.                        ing llms as agents. arXiv preprint arXiv:2308.03688.
Henning Gösling, Jacob Dudek, Thorsten Krause, and                                                    Grégoire Mialon, Clémentine Fourrier, Craig Swift,
   Oliver Thomas. 2024. Multi-agent-based peer tutor-                                             Thomas Wolf, Yann LeCun, and Thomas Scialom.
   ing in virtual learning environments.                                                      2023. Gaia: a benchmark for general ai assistants.
Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song,      arXiv preprint arXiv:2311.12983.
  Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma,
                                               OpenAI. 2023.  Openai function calling documen-   Peiyi Wang, Xiao Bi, et al. 2025. Deepseek-r1: In-
                                                                   tation.    https://platform.openai.com/docs/   centivizing reasoning capability in llms via reinforce-
                                                  guides/gpt/function-calling.  ment learning. arXiv preprint arXiv:2501.12948.
Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu    Joon Sung Park, Joseph C. O’Brien, Carrie J. Cai,
  Zheng, Yuheng Cheng, Jinlin Wang, Ceyao Zhang,      Meredith Ringel Morris, Percy Liang, and Michael S.
   Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang       Bernstein. 2023a.   Generative agents:  Interac-
  Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu,       tive simulacra of human behavior. arXiv preprint
  and Jürgen Schmidhuber. 2024. MetaGPT: Meta pro-      arXiv:2304.03442.
  gramming for a multi-agent collaborative framework.
   In The Twelfth International Conference on Learning    S. Park, J. Kim, and D. Lee. 2023b. Strategic silence
   Representations.                                            in multi-agent social interaction: A social deduction
                                                                perspective. In Proceedings of the 37th AAAI Confer-
Wenyue Hua, Lizhou Fan, Lingyao Li, Kai Mei,      ence on Artificial Intelligence, pages 123–131.
  Jianchao Ji, Yingqiang Ge, Libby Hemphill, and
  Yongfeng Zhang. 2024. War and peace (waragent):   David Premack and Guy Woodruff. 1978. Does the
  Large language model-based multi-agent simulation      chimpanzee have a theory of mind? Behavioral and
   of world wars.                                       Brain Sciences, 1(4):515–526.

                                        8590

## Страница 12

Chen Qian, Zihao Xie, Yifei Wang, Wei Liu, Yu-   Xingyao Wang, Boxuan Li, Yufan Song, Frank F. Xu,
   fan Dang, Zhuoyun Du, Weize Chen, Cheng Yang,      Xiangru Tang, Mingchen Zhuge, Jiayi Pan, Yueqi
  Zhiyuan Liu, and Maosong Sun. 2024. Scaling large-      Song, Bowen Li, Jaskirat Singh, Hoang H. Tran,
  language-model-based multi-agent collaboration.        Fuqiang Li, Ren Ma, Mingzhang Zheng, Bill Qian,
                                                   Yanjun Shao, Niklas Muennighoff, Yizhe Zhang,
Chen Qian, Zihao Xie, YiFei Wang, Wei Liu, Kunlun                                                  Binyuan Hui, Junyang Lin, Robert Brennan, Hao
  Zhu, Hanchen Xia, Yufan Dang, Zhuoyun Du, Weize                                                      Peng, Heng Ji, and Graham Neubig. 2024a. Open-
  Chen, Cheng Yang, Zhiyuan Liu, and Maosong Sun.                                                    Hands: An Open Platform for AI Software Develop-
  2025.  Scaling large language model-based multi-                                                                ers as Generalist Agents.
   agent collaboration. In The Thirteenth International
  Conference on Learning Representations.                                                    Zhenhailong Wang, Shaoguang Mao, Wenshan Wu, Tao
                                                     Ge, Furu Wei, and Heng Ji. 2024b. Unleashing cogni-Yujia Qin, Shihao Liang, Yining Ye, Kunlun Zhu, Lan
                                                                     tive synergy in large language models: A task-solving  Yan, Yaxi Lu, Yankai Lin, Xin Cong, Xiangru Tang,
                                                        agent through multi-persona self-collaboration. In   Bill Qian, Sihan Zhao, Lauren Hong, Runchu Tian,
                                                        Proc. 2024 Annual Conference of the North Ameri-  Ruobing Xie, Jie Zhou, Mark Gerstein, dahai  li,
                                                  can Chapter of the Association for Computational  Zhiyuan Liu, and Maosong Sun. 2024. ToolLLM:
                                                              Linguistics (NAACL2024).   Facilitating large language models to master 16000+
   real-world APIs. In The Twelfth International Con-
   ference on Learning Representations.                 Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten
                                                 Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, and
Noah Shinn, Federico Cassano, Ashwin Gopinath,     Denny Zhou. 2023. Chain-of-thought prompting elic-
  Karthik R Narasimhan, and Shunyu Yao. 2023. Re-        its reasoning in large language models.
   flexion: language agents with verbal reinforcement
   learning.  In Thirty-seventh Conference on Neural    Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten
  Information Processing Systems.                    Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou,
                                                                   et al. 2022. Chain-of-thought prompting elicits rea-David Silver, Thomas Hubert, Julian Schrittwieser, Ioan-                                                         soning in large language models. Advances in neural   nis Antonoglou, Matthew Lai, Arthur Guez, Marc                                                          information processing systems, 35:24824–24837.   Lanctot, Laurent Sifre, Dharshan Kumaran, Thore
   Graepel, et al. 2017. Mastering chess and shogi by
                                                    Anita W. Woolley, Christopher F. Chabris, Alex Pent-   self-play with a general reinforcement learning algo-
                                                             land, Nada Hashmi, and Thomas W. Malone. 2010.   rithm. arXiv preprint arXiv:1712.01815.
                                                      Evidence for a collective intelligence factor in the per-
Xu Sun, Xiaoya Zhang, Yicheng Feng, Shiyang Wang,      formance of human groups. Science, 330(6004):686–
  Shuming Ma, Jiuding He, Zhixu Zhang, Yuxian Gu,      688.
  Yi Xu, Hao Zhou, and Zhiyuan Liu. 2023. A system-
   atic capability evaluation of large vision-language   Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu,
  models. arXiv preprint arXiv:2305.16372.             Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang,
                                                 Xiaoyun Zhang, and Chi Wang. 2023a.   Auto-
Gemini Team, Rohan Anil, Sebastian Borgeaud, Jean-                                                        gen: Enabling next-gen llm applications via multi-
   Baptiste Alayrac, Jiahui Yu, Radu Soricut, Johan                                                        agent conversation framework.   arXiv preprint
  Schalkwyk, Andrew M Dai, Anja Hauth, Katie                                                        arXiv:2308.08155.
   Millican,  et  al. 2023.   Gemini:  a family of
   highly capable multimodal models. arXiv preprint                                                         S. Wu, A. Holtzman, J. Buys, R. Koncel-Kedziorski,  arXiv:2312.11805.                                                  and Y. Choi. 2023b.  Autogen: A framework for
Dani Valevski, Yaniv Leviathan, Moab Arar, and Shlomi       multi-agent collaborative decision-making with large
   Fruchter. 2024. Diffusion models are real-time game      language models. arXiv preprint arXiv:2301.XXXX.
   engines. arXiv preprint arXiv:2408.14837. Equal
   contribution. Work done while at Google Research.    Lin Xu, Zhiyuan Hu, Daquan Zhou, Hongyu Ren, Zhen
                                                  Dong, Kurt Keutzer, See-Kiong Ng, and Jiashi Feng.
Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Man-      2023. Magic: Investigation of large language model
   dlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and An-     powered multi-agent in cognition, adaptability, ratio-
  ima Anandkumar. 2023a. Voyager: An open-ended       nality and collaboration. In ICLR 2024 Workshop on
  embodied agent with large language models.            Large Language Model (LLM) Agents.
Sheng Wang, Emily Dinan, Jack Urbanek, Arthur
                                              Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak  Zhang, Douwe Kiela, and Jason Weston. 2023b.
                                                          Shafran, Karthik Narasimhan, and Yuan Cao. 2023.  Role-playing as a platform for dialogue model-
                                                           React: Synergizing reasoning and acting in language   ing, empathy, and data collection.  arXiv preprint
                                                       models.  arXiv:2301.09663.

Xiao Wang, Shixiang Shane Gu, Yizhu Liu, Harrison    Haofei Yu, Zhaochen Hong, Zirui Cheng, Kunlun Zhu,
   Jesse, and Pieter Abbeel. 2023c. Communicative     Keyang Xuan, Jinwei Yao, Tao Feng, and Jiaxuan
   agents for software development.  arXiv preprint      You. 2024a.  Researchtown: Simulator of human
  arXiv:2307.09250.                                       research community.

                                        8591

## Страница 13

Xianhao Yu, Jiaqi Fu, Renjia Deng, and Wenjuan Han.
  2024b. Mineland: Simulating large-scale multi-agent
   interactions with limited multimodal senses and phys-
   ical needs.

Lingyu Zhang, Zhengran Ji, and Boyuan Chen. 2025.
  Crew: Facilitating human-ai teaming research.

Wangchunshu Zhou, Yuchen Eleanor Jiang, Long Li,
   Jialong Wu, Tiannan Wang, Shi Qiu, Jintian Zhang,
   Jing Chen, Ruipu Wu, Shuai Wang, Shiding Zhu, Jiyu
  Chen, Wentao Zhang, Xiangru Tang, Ningyu Zhang,
  Huajun Chen, Peng Cui, and Mrinmaya Sachan.
  2023a. Agents: An open-source framework for au-
  tonomous language agents.

Xuanhe Zhou, Guoliang Li, Zhaoyan Sun, Zhiyuan Liu,
  Weize Chen, Jianming Wu, Jiesi Liu, Ruohang Feng,
  and Guoyang Zeng. 2023b. D-bot: Database diagno-
   sis system using large language models.

Yangqiaoyu Zhou, Haokun Liu,  Tejes  Srivastava,
  Hongyuan Mei, and Chenhao Tan. 2024a. Hypoth-
   esis generation with large language models. arXiv
   preprint arXiv:2404.04326.

Zhilun Zhou, Yuming Lin, Depeng Jin, and Yong Li.
  2024b. Large language model for participatory urban
   planning.

Mingchen  Zhuge,  Wenyi  Wang,  Louis  Kirsch,
  Francesco Faccio, Dmitrii Khizbullin, and Jürgen
  Schmidhuber. Gptswarm: Language agents as opti-
  mizable graphs. In Forty-first International Confer-
  ence on Machine Learning.





                                        8592

## Страница 14

A  Appendix                              Environment Module  Simulates the scenario in
                                            which agents operate, supporting diverse contexts
A.1  Contributions                                                           like coding challenges, research projects, or negoti-
Kunlun Zhu  Team Lead, Code implementation    ation games. Agents interact with the environment
of the main codebase basic design, research envi-   via a function-calling interface, selecting actions
ronment, coordinate engine, evaluator basic, main    at ∈F = {f1, f2, . . . } at each time step t. The
paper writing.                                   environment updates its state based on actions:

Hongyi Du  Main contributor, code implementa-            at =         Mshared, Miindividual)                                                         π(At−1,tion of the milestone generation, werewolf frame-
                                                                  ot+1 = Env(at),work design(including environment, communica-
tion, evaluator and memory module), data analy-       facilitating continuous agent-environment inter-
sis, generation, writer of emergent behavior, lim-    action. A dedicated Tool Box provides domain-
itations, related work in main paper and human    specific functionalities such as code editors and
evaluation, werewolf, important prompts, bad com-   search engines.
munication cases in appendix.
                                   Memory Module  Stores and retrieves informa-
Zhaochen Hong  Main contributor, code imple-    tion through shared and individual memories:
mentation of environment basics, communication
module, database environment, paper writing of in
                        M =      Miindividual : i = 1, . . . ,the appendix Database and related work.                      {Mshared,                 N}.
                                                       Mshared holds global knowledge and collectiveXiaochen Yang  Main contributor, code imple-
                                                       decisions, while each Miindividual maintains personalmentation of the Memory module, Minecraft envi-
                                                  experiences and local observations.  Individualronment, paper writing in the appendix Minecraft
                                       memory is split into long-term and short-term seg-and related work.
                                                  ments, managed by a FIFO mechanism to maintain
Shuyi Guo  Main contributor, Code implementa-   short-term thresholds. A retrieval-augmented gen-
tion of the evaluator prompt, bargaining environ-   eration (RAG) technique enables dynamic knowl-
ment, paper writing in the appendix bargaining and   edge access, optimizing prompt construction.
related work.                                        Communication Module  The Communication
                                         Module manages  external  interactions amongZhe Wang  Main contributor, code implementa-
                                                     agents. It equips each agent with a suite of com-tion of the reasoning agent module, coding envi-
                                               munication tools and maintains detailed profilesronment, paper writing in the appendix coding and
                                                    of other agents, thereby facilitating context-awarerelated work.
                                                 exchanges. By supporting structured dialogue and  Those core contributors are considered as the
                                                 information sharing, this module enables agentsfirst authorship.
                                                      to negotiate roles, coordinate plans, and balance
                                                      collaborative efforts with competitive interactions.

                                             Action Module  The Action Module executes
A.2  More Details on Multi-agent framework                                                    the plans generated by agents and leverages both
      design                                                       function-calling mechanisms and structured output
Configuration Module   Initializes and parame-   formats to obtain final results. As agents perform
terizes the system by ingesting task specifications,    actions, outcomes and observations are immedi-
persona data, agent profiles, role definitions, and    ately fed back into both individual and shared mem-
domain-specific databases. It constructs agent at-   ory stores. This iterative loop enables dynamic
tributes (Ai, Pi)Ni=1, where Ai is the i-th agent    adaptation to evolving task requirements and fur-
and Pi its profile encompassing capabilities, con-    ther refines agent strategies over time.
straints, and personality traits. Additionally, it de-
                                            A.3  Human Evaluationfines inter-agent relationships such as hierarchical
roles, collaboration links, or adversarial ties, pro-   To verify the effectiveness of our prompt-based
ducing a global state for coordination patterns.       evaluation, we conduct a human evaluation in a

                                        8593

## Страница 15

Werewolf environment scenario. Specifically, we    ing the reliability of LLM-generated judgments in
calculate Kendall’s, Pearson’s, and Spearman’s cor-   evaluating agent interaction.
relation coefficients (along with the correspond-
                                            A.4  Research Scenarioing p-values) to demonstrate that the prompt-based
scores align well with human judgments (see Ap-   Task Overview
pendix for details).                                 This research scenario task focuses on leverag-
  We recruit six annotators familiar with NLP re-   ing multiagent collaboration to generate innovative
search. Each annotator uses the same instructions    research ideas. Each agent, equipped with a special-
and sees the same inputs as the LLMs when rating    ized research profile, contributes unique expertise
the outputs for both the planning and communica-    to address complex research challenges. Agents
tion dimensions. Every task is evaluated by two an-    collaborate in a fully connected graph mode, where
notators, and we take the average of their scores. In    every agent has a collaborative relationship with
total, we have 60 tasks across five different LLMs,    others, fostering a robust exchange of knowledge.
all set within the Werewolf environment.          The ultimate goal is to formulate a novel research
  Table 4 summarizes the comparison between    idea following the structured 5-question (5q) for-
the human evaluation scores and our prompt-based   mat to ensure clarity, relevance, and feasibility.
machine scores in this Werewolf environment.        Environment Description
                                           The research environment provides tools to fa-
 Model     Comm (Human)  Plan (Human)  Comm (Machine)  Plan (Machine)   cilitate collaboration, literature exploration, and
 llama31_70b         3.19             3.19              3.12               3.00
 llama33             3.94             3.44              3.89               3.89      research ideation. These include:
 gpt-4o-mini          3.61             3.33              3.00               3.00
  gpt3.5-turbo                      3.75                                       3.44                                                         4.00                                                                            3.75
 llama31_8b                      2.62                                       3.06                                                         3.00                                                                            3.00          • Research Tools: Functions to fetch related
                                                         papers, recent papers, publications, and co-
Table 4: Comparison of human vs. machine evaluation        author networks. The primary tools imple-
scores in a Werewolf scenario.                         mented in the environment include:
                                                 – get_related_papers: Fetches related re-
Analysis.  As shown in Table 4, the human-            search papers based on query parame-
assigned scores (Comm (Human) and Plan (Hu-                ters, including keywords, authors, and
man)) are generally close to the corresponding            domains.
machine scores (Comm (Machine) and Plan (Ma-         – get_recent_papers:  Retrieves recent
chine)) across all five models. For instance, the             publications in specified research do-
largest difference in communication scores among             mains.
these models is within 0.38 (e.g., gpt3.5-turbo         – collect_publications_and_coauthors:
achieves 3.75 in human evaluation vs. 4.00 in ma-            Gathers an author’s publications and
chine evaluation), while most other discrepancies               their co-author network for enhanced
remain even smaller. Such alignment indicates              context.
that our prompt-based evaluation method can re-         – get_paper_by_keyword:  Locates pa-
liably capture similar aspects of coordination and              pers based on specific keywords with ad-
planning quality as perceived by human annotators,              justable result limits.
further validating the effectiveness of the proposed         – get_paper_by_arxiv_id: Fetches a pa-
approach in assessing collaboration performance                                                            per using its arXiv ID.
in the Werewolf environment.                                                 – get_paper_by_title: Retrieves a paper
  To validate our proposed coordination met-                                                        based on its title.
rics—C-score (communication) and P-score (plan-                                                 – fetch_webpage: Extracts webpage con-
ning)—we conducted a large-scale human evalu-                                                                    tent to gather supplementary data.
ation study involving 360 annotated samples. Re-
sults from this study, alongside with previous re-    Benchmark Curation Details
sults, reveal strong correlations between LLM-     The dataset consists of 100 curated ML/AI pa-
generated scores and human judgments.               pers, sourced from published articles and preprints.
                                           Each paper’s introduction is extracted, and the au-
These results in Table 6, 5, 7 demonstrate particu-    thors’ profiles are generated based on their histor-
larly strong alignment in Communication, validat-    ical research themes and publications, creating a

                                        8594

## Страница 16

    Metric        Mean (M.)  Std(M.)  Range (M.)  Mean (H.)  Std(H.)  Range (H.)
    Communication      2.17       2.35      [–1.0, 5.0]      1.69       2.19     [–1.0, 5.0]
    Planning            3.55       0.61       [2.0, 5.0]       3.41       0.73      [1.0, 5.0]

Table 5: Summary statistics of coordination scores. The score of –1 in communication indicates runs with no
communication. M. stands Machine and H. stands for Human.

              Metric          Pearson’s r  p-value  Spearman’s ρ  p-value
              Communication     0.8057     0.0000      0.7467      0.0000
                Planning           0.2685     0.0000      0.3601      0.0000

             Table 6: Correlation between human and model-generated coordination metrics.

                   Correlation Type  Average Coefficient  Average p-value
                   Pearson                  0.3290             0.0004
                 Spearman                0.3641             0.1923

Table 7: Average inter-annotator correlation across metrics. Results indicate reasonable human agreement,
especially in Communication.

comprehensive view of their expertise and contri-       • [Question 1] - What is the problem? Define
butions. Relationships among authors are standard-        the specific research problem.
ized as collaborative, reflecting realistic academic
interactions. This curated dataset forms the founda-       • [Question 2] - Why is it interesting and im-
tional knowledge base for multiagent discussions        portant? Highlight the broader implications
and ideation.                                      and potential impacts.
  We select 33 easy tasks, 34 medium tasks, and
33 hard tasks from the researchtown dataset.                                                                 • [Question 3] - Why is it hard? Elaborate on
  Dataset Statistic                                                        challenges and complexities.
  The curated dataset contains 100 papers across
machine learning and artificial intelligence do-
                                                                 • [Question 4] - Why hasn’t it been solvedmains from the ResearchTown(Yu et al., 2024a)
                                                    before? Identify gaps and limitations in priorproject. These papers support generating research
                                                   work.profiles and simulate realistic collaborative rela-
tionships among agents. The default relation setup
                                                                 • [Question 5] - What are the key compo-ensures a fully connected collaboration graph, en-
abling seamless agent interaction.                      nents of my approach and results? Outline
                                                         the methodology, dataset, and expected out-  Task Completion Metrics The agents are evalu-
                                                  comes.ated based on their ability to generate a high-quality
research idea adhering to the 5q format. The evalu-
ation includes:                                 Agent Profile Case: See Fig 10.
                                              Generated Research Idea Case: See Figure 11   • Innovation: Novelty and contribution to the
                                                 Evaluation Framework      field
                                           The final research idea is evaluated based on a
   • Safety: Ethical and societal considerations      structured prompt, focusing on innovation, safety,
                                            and feasibility. Ratings are provided on a 5-point   • Feasibility: Practicality of implementation
                                                        scale. For more details, see the Fig 25, with de-    with current technology
                                                         tailed feedback on each aspect. This framework
  5q Format Details                             ensures that the generated ideas meet high stan-
  The structured output for the task includes:        dards of academic and practical relevance.

                                        8595

## Страница 17

**Task:** Dear Research Team,
You are collaborating to generate a new research idea based on the following Introduction:
**Introduction** The Language of Thought Hypothesis suggests that human cognition operates on a structured, language-
like system of mental representations. While neural language models can naturally benefit from the compositional
structure inherently and explicitly expressed in language data, learning such representations from non-linguistic general
observations, like images, remains a challenge. In this work, we introduce the Neural Language of Thought Model
(NLoTM), a novel approach for unsupervised learning of LoTH-inspired representation and generation. NLoTM
comprises two key components: (1) the Semantic Vector-Quantized Variational Autoencoder, which learns hierarchical,
composable discrete representations aligned with objects and their properties, and (2) the Autoregressive LoT Prior, an
autoregressive transformer that learns to generate semantic concept tokens compositionally, capturing the underlying
data distribution. We evaluate NLoTM on several 2D and 3D image datasets, demonstrating superior performance in
downstream tasks, out-of-distribution generalization, and image generation quality compared to patch-based VQ-VAE
and continuous object-centric representations.
Your task is to produce a research idea using the 5q format.


                                    Figure 9: Task Content Case.





**Agent Profile:** I am a researcher dedicated to advancing the fields of image processing and machine learning,
with a particular focus on generative models and deep learning architectures. My recent work has explored innovative
solutions to challenges in image inpainting, where I developed frameworks that effectively separate the tasks of image
reconstruction and artifact removal, significantly improving both visual quality and quantitative metrics.
I have also contributed to the evolution of Generative Adversarial Networks (GANs) through the introduction of the
DeshuffleGAN, which enhances the learning of spatial structures in images via self-supervised tasks. This work has
demonstrated substantial improvements in image generation quality across various datasets. My research extends
to depth estimation, where I reformulated the problem as a ranking task, leveraging existing literature to enhance
performance.
In addition, I have explored the integration of probabilistic models in federated learning, addressing the critical need for
uncertainty quantification in safety-critical applications. My work on multi-label ranking has introduced novel methods
that utilize the inherent ranking information of labels, achieving state-of-the-art results in both synthetic and real-world
datasets.
Overall, my research aims to bridge the gap between theoretical advancements and practical applications, providing
robust solutions that enhance the capabilities of machine learning systems in real-world scenarios. I am passionate about
leveraging AI to solve complex problems and contribute to the ongoing evolution of intelligent systems.


                                   Figure 10: Agent Profile Case.





                                     8596

## Страница 18

    **[Question 1] - What is the problem?**
   How can we enhance malware detection and classification in network traffic using transformer-based models that
     effectively generalize to unseen attack types with minimal labeled data?
    **[Question 2] - Why is it interesting and important?**
    Solving this problem is crucial as cyber threats continue to evolve, becoming more sophisticated and difficult to detect
    with traditional methods. By improving malware detection through advanced machine learning techniques, we can
     significantly enhance network security, leading to better protection against emerging threats. This research could pave
    the way for future studies on self-supervised and few-shot learning approaches in cybersecurity, potentially leading to
     practical applications in real-time threat detection and response systems.
    **[Question 3] - Why is it hard?**
   The complexity arises from the need to accurately identify and classify novel malware types that have not been previously
    encountered, which requires models to generalize well from limited labeled data. Naive approaches may fail due to
    the high variability in malware behavior and the constant evolution of attack strategies. Additionally, the challenge of
    balancing the dataset to avoid bias towards benign or malicious samples complicates the training process, necessitating
    sophisticated techniques to ensure robust performance across diverse scenarios.
    **[Question 4] - Why hasn’t it been solved before?**
    Previous research has often relied on supervised learning methods that require extensive labeled datasets, which are not
    always available, especially for new malware types. Additionally, many existing solutions struggle with generalization
     to unseen attacks due to their reliance on specific features or signatures. Our approach leverages self-supervised learning
    and few-shot learning, which allows for better adaptation to new threats by learning from unlabeled data and minimal
    examples, thus addressing the limitations of prior methodologies.
    **[Question 5] - What are the key components of my approach and results?**
    Our proposed methodology involves using a transformer-based model trained on a combination of labeled and unlabeled
     datasets, specifically focusing on payload data from network traffic. We will utilize the UNSW-NB15 and CIC-IoT23
     datasets for evaluation, employing metrics such as accuracy and F1-score to assess performance. The expected outcomes
    include improved detection rates for novel malware types and enhanced generalization capabilities, demonstrating the
    effectiveness of our approach in real-world scenarios.


                                           Figure 11: 5Q cases.

A.5  Werewolf Environment                              • Role Asymmetry and Hidden Information:
                                                          Villagers lack complete knowledge, whileA.5.1  Environment Description (Tool
                                                 werewolves know their allies. This informa-       Description)
                                                           tion asymmetry encourages strategic reason-
The Werewolf environment, inspired by the clas-                                                              ing, suspicion, and bluffing.
sic social deduction game Werewolf (a.k.a. Mafia),
provides a rich, socially complex setting in which
players (agents) belong to opposing factions with        • Complex Social Reasoning: Success hinges
asymmetric information and objectives. This sce-       on persuasion, alliance building, and careful
nario is particularly suitable for evaluating LLM-        information management. Agents must form
driven multi-agent coordination under uncertainty,       and break trusts, share or withhold informa-
as it involves hidden roles, deception, collective          tion, and achieve consensus on who should be
inference, and iterative decision-making. It chal-       removed.
lenges agents’ logical reasoning as well as their ap-
titude for persuasion, alliance formation, adaptive        • Adaptation and Memory: As the game pro-
responses to changing conditions, and balancing         gresses through multiple cycles, agents must
between individual interests and group goals.            update their beliefs based on observed behav-
                                                                  iors. Long-term memory supports trackingWhy Werewolf?  In this environment, agents are
                                                     agent states, past actions, and evolving con-divided into two main factions: the Villager group
                                                                   texts.(including special roles such as Seer, Witch, and
Guard) and the Werewolf group.  Villagers seek
to identify and eliminate all werewolves, while        • Evaluation of Cooperative Dynamics: Well-
werewolves aim to blend in and secretly eliminate        defined scoring rules for correct identifica-
villagers. The day/night cycle establishes a repeti-         tions, effective protections, and consensus-
tive structure of public discussions, secret actions,        building enable objective assessment of strate-
and voting decisions. This setup offers several ad-        gic teamwork and collaborative problem-
vantages:                                                  solving.

                                        8597

## Страница 19

A.5.2  Villager-Centric Scoring Rationale        A.5.3  Benchmark Curation Details
In this environment, we primarily focus on evalu-    Initialization.  Unlike other environments that
ating the villager faction rather than the werewolf    rely on numerous parameterized tasks, the Were-
faction. The core reason is that villagers rely heav-   wolf game commences from a single, stable initial
ily on explicit cooperative actions to secure victory:    configuration. We tried multiple role distributions
for instance, the Guard must accurately protect key   and settled on a balanced default setup to maintain
roles, the Witch must judiciously use antidote and    fairness and avoid biasing the game toward any
poison, and the Seer must disclose or share critical    faction. Subsequent variations arise naturally from
information, either publicly or privately, to identify    agent interactions, rather than from altering initial
suspects. These actions inherently demand commu-   conditions. Agents are assigned roles such as wolf,
nication and coordination among villager members,    villager, seer, witch, and guard, each with corre-
grounded in a degree of mutual trust and collabo-   sponding capabilities. For example, werewolves
rative strategy. Without such synergy, villagers are    coordinate attacks at night, and the seer checks a
typically overrun by the werewolves.                 player’s identity.
  Moreover, the number and quality of these co-
operative efforts correlate with the villagers’ over-   Event Bus and Action Processing.  This envi-
all chance of success. More effective teamwork   ronment adheres to a strict, environment-mediated
enables stronger reasoning, better defense, and a   communication protocol.  Unlike other settings
higher likelihood of identifying and eliminating   where agents may directly interact, here all mes-
werewolves or safeguarding vital roles. By ob-   sages pass through the environment. The environ-
serving and measuring these cooperative maneu-   ment publishes events like “night start,” “seer ac-
vers—such as successful protection by the Guard,    tion,” or “vote action” following the standard Were-
timely use of antidotes, or coordinated voting—we   wolf procedure, and agents respond accordingly.
gain deeper insights into how the model performs   The environment then relays these responses to
in social reasoning and collaboration within a com-   other agents at the appropriate time. This ensures a
plex environment.                                     controlled, linear information flow that respects the
  In contrast, the success of werewolves does not    official Werewolf rules and prevents unauthorized
hinge as strongly on explicit teamwork. Even if    agent-to-agent exchanges.
they operate mostly on an individual basis and re-
frain from overt collaboration, werewolves can still   Memory and Logging. A record of events from
                                              each agent’s perspective is maintained to enableachieve a relatively high chance of winning through
                                                   reasoning over multiple rounds and post-game anal-misdirection and exploiting confusion among vil-
                                                           ysis. Each agent’s private event log and final deci-lagers.  Consequently, measuring werewolf-side
                                                    sions are stored, allowing for reproducibility andcooperation does not provide as discriminative or
                                                  subsequent scoring. While other environments mayilluminating an assessment of collaborative poten-
                                                have more complex shared memory structures, heretial as evaluating the villagers’ side.
                                     we focus on recording essential information to un-  Therefore, we concentrate on the villager per-
                                                   derstand each agent’s decision process.spective to better capture and evaluate the synergy
required in a highly uncertain, adversarial setting.
                                   Game Flow and Termination.  The environmentThis design choice highlights how cooperation, or
                                                   enforces the standard Werewolf game flow:the lack thereof, strongly influences the villagers’
outcome, offering a direct lens through which to
                                                            1. Night  phase:    Special   roles   act   se-assess the social and strategic capabilities of large
                                                   cretly—guards protect, werewolves chooselanguage model agents.
                                                    a victim, the seer inspects a player, and the
Consistent Werewolf Model.  In all experiments        witch may use antidote or poison.
where we vary the villager-side language model,
the werewolf side remains consistently powered      2. Day phase: Night results are revealed, de-
by GPT-4o. This ensures a stable, challenging ad-        ceased players are removed, and if the sheriff
versary and allows us to fairly compare different         (a special role) died, the badge is reassigned.
villager models under identical opposing condi-       Agents discuss and vote on a suspect to elimi-
tions.                                                        nate.

                                        8598

## Страница 20

The game ends if all werewolves are dead (villager   A.5.4  Task Completion Metrics Details
victory) or if all villagers are dead (werewolf vic-   Daily Tasks in Partial-Day Simulations.  In the
tory). Scores reflect survival, successful actions    Partial-Day Simulation mode, the environment gen-
(e.g., correct identifications, effective protections),    erates specific tasks for the villagers at the start of
and communication quality.                      each single-day session. These tasks reflect high-
                                                 value objectives that, if fulfilled by the end of the
100 Archives, Partial-Day Simulations, and Full-    current day-night cycle, bring the villagers closer to
Game Simulations.  To gain deeper insights into    victory. Unlike the comprehensive scoring system
how different agent strategies unfold, we prepared   used for full-match evaluations (detailed below),
100 distinct archives (saved game states) showcas-   these daily tasks focus on the shorter horizon of a
ing various configurations of werewolf and villager    single day.
actions, all played by GPT-4o-based agents. These    We design four primary tasks, each with its own
archives are used in two experimental modes:        conditions, goals, and rewards:

                                                            1. Protect the Seer    • Partial-Day Simulation (Single-Day): The
                                                        Condition: The seer is still alive at the start of    environment loads a saved state from a spe-
                                                          the day.      cific night (e.g., Night 0, Night 1, Night 2,
                                                  Goal: Ensure that the seer remains alive by      etc.), then simulates exactly one day-night cy-
                                                          the end of this day-night cycle.      cle. During this cycle, the environment issues
                                                Reward: +1 point. (This task is persistently     multiple tasks to the villager side (e.g., “ex-
                                                                   listed as long as the seer is alive, to underscore      ile a suspected werewolf,” “protect the seer,”
                                                          the importance of protecting a vital role.)    “use poison on a werewolf,” “save a threat-
    ened villager”). At the end of the day phase,                                                            2. Exile a Werewolf
   we measure how many of these tasks were                                                       Condition: At least one werewolf is still alive
     successfully completed. Higher task comple-                                                                              (i.e., the game is not over).
     tion indicates that the villagers are closer to                                                  Goal: Successfully vote out a werewolf dur-
     winning.                                                       ing the day’s public vote.
                                                 Reward: +2 points.
    • Full-Game Simulation (Entire Match): The
     environment starts from the archive represent-      3. Rescue a Villager
     ing the end of the first night (Night 0) and runs        Condition: The witch is still alive and still has
     the entire game through to conclusion. In this         the antidote available.
    mode, tasks are given only as suggestions to       Goal: During the night, the witch uses the
     the villagers (e.g., “we recommend trying to         antidote on a villager (including herself) who
     confirm the seer’s identity”), but we do not       was attacked. The witch cannot simultane-
     track partial completion. Instead, we evaluate        ously perform the “Poison a Werewolf” task
     the overall process score (i.e., collaboration         in the same night.
    and coordination quality) and the final result       Reward: +2 points. If the rescued individual
    (which faction wins). By observing agent in-          is a key role (seer, guard, or the witch herself),
     teractions over multiple days and nights, we         grant an additional +1 bonus.
     gain insights into their long-horizon planning
                                                            4. Poison a Werewolf    and dynamic cooperation.
                                                        Condition: The witch is still alive and still has
                                                          the poison available.
Result Score.  At the end of each full-game simu-       Goal: During the night, the witch poisons and
lation, we record a result score defined as the differ-                                                                      kills a werewolf. She cannot perform “Rescue
ence between the number of surviving villagers and                                                     a Villager” in the same night.
the number of surviving werewolves. A higher re-       Reward: +2 points. (This task is visible only
sult score indicates that villagers finished the game                                                             to the witch.)
with more players alive, whereas a negative result
score means that werewolves outnumbered the vil-     At the beginning of each Partial-Day Simulation,
lagers at the conclusion of the match.                the environment checks the current game state to

                                        8599

## Страница 21

decide which tasks are relevant and issues them    Table 8: Scoring Rules for Villagers and Werewolves
                                                         in Full-Game Simulationto the villagers (and to the witch privately, if ap-
plicable). The theoretical maximum for a single
                                                 Faction    Action/Outcome         Pointsday is set to 5 points (not counting the extra +1
from rescuing a key role), reflecting: - +1 (Protect     Villager    Villager      candidate    +2
the Seer) - +2 (Exile a Werewolf) - +2 (Rescue a                  elected as sheriff
Villager) or +2 (Poison a Werewolf)                         Guard successfully pro-   +2
  Once the day-night cycle concludes, we mea-                   tects a target from were-
sure how many tasks were successfully completed                wolf attack
and compare the actual score to the theoretical               Witch successfully saves    +2
maximum. The resulting ratio represents the daily                 a target from werewolf at-
task completion rate, which, when averaged across                 tack
multiple runs or archives, contributes to the Task               Witch uses poison to kill    +2
Score for single-day simulations.                               a werewolf
                                                       Werewolf  is voted out    +2
Process Score and Net Score in Single-Day and                                                               during the day
Full Simulations.  While the previous subsection                                                      Each villager who votes   +0.2
focuses on daily tasks (e.g., Protect the Seer, Exile a                                                                      for a werewolf
Werewolf), we also accumulate points for both vil-                                                      Each villager who votes    -0.1
lagers and werewolves during all runs (single-day                                                                      for a villager
or full-match). Table 8 (shown below) summarizes                                                         Witch uses poison to kill     -2
the key ways each faction can gain or lose points.                                                              a villager
By comparing the total points earned by villagers                                                                     Starting from the second  +1/day
to those earned by werewolves, we derive a villager                                                                  day, the seer gains +1
net score, indicating which side holds the advan-                                                                  point for each additional
tage at the end of a cycle. A higher, positive net                                                         day survived
score means villagers have gained a stronger edge
                                            Werewolf  Werewolf     candidate    +2that day or overall; a negative net score implies the
                                                                    elected as sheriffwerewolves are dominating.
                                                         Werewolves successfully    +1  In addition, we plot the net score of each full-
                                                          choose a target to attackgame simulation against its final outcome, as illus-
                                                                            at nighttrated in Figure 12. We observe that when a match
                                     A villager is voted out    +1concludes with a net score around 5, the villagers
                                                               during the dayhave an extremely high probability of winning. For
net scores between 0 and 5, the outcome can swing
either way; villagers may still achieve victory, or
the werewolves might prevail by a slim margin      Here, we do not separately score day-by-day
(e.g., one werewolf survives). By contrast, once the    tasks.  Instead, these rules offer a holistic view
net score dips below zero, the werewolves typically    of how well each faction accomplishes its long-
secure a decisive, overwhelming victory.           term goals. For example, a villager faction might
   Specifically, in the single-day (partial-day) con-   accumulate points by consistently voting out were-
text, villagers and werewolves accumulate points   wolves, saving allies with the witch’s antidote, or
according to Table 8, and the difference between    ensuring the seer survives multiple days. Similarly,
these totals forms the villager net score. A posi-   the werewolf faction gains points by successfully
tive net score reflects that villagers have success-   attacking villagers, winning the sheriff vote, or in-
fully capitalized on protective or eliminative ac-   fluencing daytime votes.
tions, whereas a negative net score means that were-
wolves likely gained more momentum during that   Evaluation in the Benchmark.  Within our Mul-
day-night cycle. Over multiple day-night cycles in   tiAgentBench framework, these two scoring mech-
a full-game simulation, this net score is similarly   anisms—daily tasks for Partial-Day Simulations
aggregated, providing a holistic measure of which   and holistic milestones for Full-Game Simula-
side holds the upper hand.                      tions—complement each other:
                                        8600

## Страница 22

                           Net Score vs. Result Score                          • Communication Score, reflecting how effec-
     6       Data points
                     Fit line                                                    tively agents share information and make de-
                                                           cisions in alignment with their goals.     4
                                                                 • Planning Score, measuring how well the
     2                                                   agents organize roles, coordinate strategies,  Score
  Result  0                                              and distribute workload.

                                We employ a large language model (specifically
     2                                        GPT-4o) to read through the simulation logs (in-
     4                                                cluding the Witch and Seer’s internal reasoning) to
                10               5               0               5               10        generate numerical ratings for each sub-score. The
                                   Net Score (Villager.total - Werewolf.total)                     final Collaboration Score is computed as the aver-
                                              age of Communication Score and Planning Score. Figure 12: Net Score vs. Result Score (Scatter Plot)
                                    By combining these dimensions, we capture both
                                                     the clarity and effectiveness of the villagers’ inter-
   • Partial-Day Task Score:  Provides a fine-   actions and the overall coherence of their coordi-
     grained look at how villagers perform tar-   nated actions. For more details on how the prompts
     geted objectives within a single day-night cy-    for evaluating collaboration are constructed, please
      cle. This is especially useful for quick itera-   see Section A.12. Additionally, we conducted a
     tion and testing short-term strategies.         human evaluation to verify the effectiveness of our
                                              prompt-based evaluation. The results are closely
   • Full-Game Point Accumulation: Reflects                                                   aligned with the machine scores (see Table 4).
     the broader arc of the match, capturing how
    well each side capitalizes on its role advan-   A.5.5  Detailed results
     tages, forms alliances, and executes multi-day    In this section, we present the complete experimen-
     plans.                                                   tal outcomes across both single-day and full-run
                                                  simulations for each model, including the base-
  By analyzing both short-horizon (day-level) and    line gpt-4o that was initially used to generate
long-horizon (entire match) results, we gain a    the archives in full-run simulation. By compar-
deeper understanding of how LLM-based multi-   ing gpt-4o against the other models, we aim to
agent systems adapt to shifting game states, man-   see whether any approach surpasses the archive-
age partial information, and balance their short-   producing model  itself.  Table 9 reports each
term actions against long-term faction objectives.    model’s performance on daily tasks, measured in
                                                terms of Completion Ratio (how effectively they
Task Score.  We define the Task Score as an aver-                                                                   fulfill short-horizon goals) and Villager Net Score
age of two key components:                                                      (the net outcome for villagers after a single day–
                                                     night cycle). Meanwhile, Table 10 provides the ag-   • The partial-day (single-day) task completion
                                                   gregate Net Score, Result Score, and Villager Win      rate, calculated from the average performance
                                              Rate when simulations span multiple days, cap-    on the daily tasks. We first compute the daily
                                                     turing longer-term trends in survival and overall     completion ratio for each simulation and then
                                                      success. As shown, different models exhibit varied     average across multiple runs.
                                                      strengths in short-term vs. long-term coordination,
                                                with some consistently outperforming others in fi-   • The full-game victory rate, indicating how
                                                     nal outcomes.     often the villagers ultimately win the entire
                                                       In the single-day simulations (Table 9), we focus    match when adopting the given model.
                                           on two key indicators: Completion Ratio (the frac-
Both values are scaled to a 0–100 range, and we    tion of daily tasks completed) and the Villager Net
take their mean to derive a single Task Score in    Score. Overall, we observe the following patterns:
percentage form.
                                                                 • Completion Ratio. Among the evaluated
Collaboration Score.  To assess the collaboration        models, llama3.3-70B achieves the highest
quality among villagers, we rely on two sub-scores:       completion ratio (0.3754), indicating better

                                        8601

## Страница 23

 Model        Completion Ratio   Villager Net Score          • Result Score. This metric, defined as the fi-
 llama3.1-8B         0.2412             -1.2055               nal number of surviving villagers minus that
 llama3.1-70B        0.3641             -1.0736              of surviving werewolves, remains close to
 llama3.3-70B                     0.3754                                        0.2802              zero (e.g., −0.1915) only for llama3.3-70B. gpt-3.5-turbo                     0.2217             -0.7272                                                   Other models, such as llama3.1-70B (with
 gpt-4o-mini         0.2503             -1.4207
                                                 −2.0000) or gpt-4o-mini (−2.0825), reflect
Table 9: Single-Day Simulation metrics for each model:        scenarios where wolves consistently maintain
completion ratio, villager net score.                        numerical superiority by the game’s end.

 Model          Net Score  Result Score  Win Rate          • Villager Win Rate. In line with net scores,
                                               llama3.3-70B achieves the highest win rate llama3.1-8B        -5.0839      -2.3793      0.0115
 llama3.1-70B       -5.2892      -2.0000      0.0323          (around 35%), notably surpassing the other
 llama3.3-70B       0.4511       -0.1915      0.3511          models. For instance, llama3.1-8B shows
 gpt-3.5-turbo       -2.8230      -1.3448      0.0920                                                    only 1.15% and gpt-4o-mini about 3.09%, gpt-4o-mini        -4.6649      -2.0825      0.0309
 gpt-4o(baseline)    -2.1946      -0.7742      0.2473           suggesting these models struggle to mount
                                                           decisive collaboration over multiple night/day
Table 10: Full-Run Simulation metrics for each model:         cycles.
net score, result score, and villager win rate.
                                                       Overall, llama3.3-70B consistently demon-
                                                          strates better day-to-day and full-run outcomes,     effectiveness in fulfilling short-term objec-
                                                     indicating more effective coordination, role uti-      tives (e.g., protecting the Seer or exiling were-
                                                           lization, and strategy adaptation in this social-     wolves).  In contrast, gpt-3.5-turbo and
                                                deduction environment. Notably, it even outper-    gpt-4o-mini exhibit lower ratios (around
                                               forms the gpt-4o baseline that generated the origi-     0.22–0.25), suggesting room for improve-
                                                     nal archives, securing a positive net score (0.4511)    ment in daily coordination or quick decision-
                                           compared to gpt-4o’s         and achieving a    making.                                                                 −2.1946,                                                  higher villager win rate (35% vs. 24.73%). Such
    • Villager Net Score.  Only llama3.3-70B   a result implies that llama3.3-70B can harness
     yields a positive net score (0.2802), implying    cooperative roles (e.g., Witch, Guard) and voting
     that it more frequently secures a small advan-    strategies more effectively than the model respon-
     tage for the villagers within a single day–night    sible for the initial game states. In contrast, the
     cycle. Other models (such as llama3.1-8B    larger deficits observed in other models underscore
     or gpt-4o-mini) produce negative values, re-   the importance of reliable voting heuristics, protec-
     flecting that they tend to be at a disadvantage    tive measures (e.g., Witch antidote, Guard defense),
     during daily confrontations or fail to leverage   and consolidated planning over multiple rounds, as
     cooperative roles (like Witch or Guard) effec-    failing to capitalize on these factors often leads to
      tively.                                       a decisive werewolf advantage.
  Turning to the full-run simulations (Table 10),                                                 A.5.6  Case Study
we examine the Net Score (accumulated over mul-
                                           Case Involving Llama-3.1-8B as the Seer  Build-tiple days), the Result Score (difference between
                                                  ing upon the previous analysis, we now present asurviving villagers and werewolves at the end), and
                                                 case involving the Llama-3.1-8B model acting asthe Villager Win Rate:
                                                      the Seer (see Figure 13). In this scenario, the model
    • Net Score. llama3.3-70B stands out again,   repeatedly emphasizes its innocence and role as a
    with a positive score of 0.4511, suggest-   Seer, promising to aid the village and share future
     ing that its performance remains consistently    findings, yet fails to provide concrete inspection
     strong across consecutive cycles. By con-    results or logical evidence. This approach, lacking
      trast, models like llama3.1-8B (−5.0839)    tangible proof and strategic disclosure of key in-
    and llama3.1-70B (−5.2892) are substan-   formation, results in weak persuasion and quickly      tially negative, indicating that the villagers    erodes trust.  Rather than leveraging the timing
     are often overwhelmed by the werewolves in   and psychological nuances that could bolster cred-
     long-term engagements.                              ibility, the Seer relies on hollow assurances that

                                        8602

## Страница 24

fail to address real-time suspicions. Without offer-   informational roles like the Seer. Had the Seer
ing verifiable logic or connecting behavioral obser-   adopted a more proactive, collaborative approach
vations to known patterns of deceit, the model’s   and shared the inspection results, the Witch and the
declarations remain unconvincing. Consequently,   Guard could have assisted in safeguarding them.
the Seer’s misjudgment of the impact of empty    Instead, the Seer’s mistrust of teammates and ex-
promises leads to rapid expulsion on the first day,   cessive self-protection led to silence—failing to
demonstrating that current LLM-based agents still    disclose the fact that Lucy was a werewolf to the
struggle with strategic reasoning, evidence-based    villagers.
argumentation, and adaptive communication in ad-    On the Witch’s side, when the Seer was attacked
versarial, multi-agent settings.                          at night, she also refrained from taking decisive
  Expanding upon these observations, we also    rescue measures. The Witch’s reasoning was filled
tested other models, such as Llama-3.1-70B, gpt-   with concerns about uncertainty and resource ex-
3.5-turbo, and gpt-4o-mini, under the same sce-   penditure, causing her to delay using the antidote.
nario. As model capabilities improved, there was   Even under circumstances that clearly disadvan-
a noticeable enhancement in their abilities to col-   taged the villagers, the Witch persisted in a conser-
laborate, strategize, and disclose information effec-   vative attitude. This caused her to miss the prime
tively in multi-agent settings. This translated into    opportunity to save the Seer and thwart the were-
increased overall performance for the villager side.   wolves. Ultimately, this excessive caution and dis-
However, even when both sides employed gpt-4o    trust in teammates prevented the Witch from using
level intelligence (i.e., gpt-4o versus gpt-4o), the    the antidote, leaving the Seer to their fate.
villagers’ win rate remained less than ideal. This      In summary, the greatest problem in the decision-
finding highlights that merely improving the rea-   making processes of both the Seer and the Witch
soning and language capabilities of agents does not    lies in their lack of mutual trust and cooperative
guarantee victory in complex, adversarial environ-    spirit. The Seer feared exposing their identity and
ments where uncertainty and deception prevail. In    refrained from sharing information; the Witch, lack-
the following case study, we further illustrate the    ing sufficient data, hesitated to use the antidote.
challenges faced by villagers equipped with state-   Both parties opted for isolationist and conserva-
of-the-art intelligence, emphasizing the critical role    tive strategies, resulting in critical decision-making
of trust and cooperation in securing a successful    failures. This distrust and lack of collaboration
outcome.                                   proved to be the fundamental reason why the
                                     game ended in failure, given the insufficient uti-
Case Involving gpt-4o for Seer and Witch  In                                                          lization of available information and resources.
this case (see Figure 14), we can observe that with                                                 Thus, even when villagers possess intelligence
the support of the gpt-4o model, both the Seer and                                          on par with that of the werewolves, the outcome
the Witch have significantly improved their logical                                                   of the game depends on whether the villagers can
reasoning and decision-making capabilities. Never-                                                 cooperate and achieve mutual benefit. If villagers
theless, the entire game still ended in failure.                                           become suspicious of each other and allow internal
  According to the game’s backstory, the Seer                                                            friction to arise, their chances of securing victory
(Summer) identified Lucy as a werewolf on the                                         become exceedingly slim, even when starting from
very first night. However, in the subsequent stages                                                a supposedly advantageous position such as the
of the game, the Seer did not publicly disclose this                                                 Seer discovering a werewolf on the first night.
critical piece of information. By examining the
Seer’s reasoning about running for sheriff, we see   Case Study: Llama3.3-70B Villagers vs. gpt-
that the Seer was overly cautious about revealing   4o Werewolves  In this case, we highlight a full-
their identity, unwilling to lead and guide the vil-   game confrontation where the villagers (powered
lagers. From the Seer’s perspective, making their   by Llama3.3-70B) are pitted against a werewolf
information public or running for sheriff would at-   team (driven by gpt-4o). Despite an unfavorable
tract the attention of all parties, thereby increasing     start for the villagers—the Guard was immediately
the risk of being targeted by werewolves. Yet, the    killed in the first night—the village ultimately se-
Seer overlooked one crucial aspect: the Witch and   cured a victory through astute coordination, trust,
the Guard, as explicitly defined in the game rules,   and strategic use of the sheriff badge. As shown
are entrusted with helping and protecting pivotal    in Figure 15, the key nightly actions and sheriff

                                        8603

## Страница 25

transitions demonstrate how the roles of Witch and       and the Seer openly sharing investigation re-
Seer were critical for maintaining voting power and          sults, fostered strong cooperation within the
information advantage throughout the match.               village.
  Early Game: Losing the Guard. The game
                                                            2. Sheriff Badge Transmission: Passing theopened with the werewolves instantly targeting the
                                                  badge twice to reliable village roles (first fromGuard, Ronald, on Night 1. Without a function-
                                               James to Janet, then from Janet to Robert)ing protection role thereafter, the villagers faced
                                                      ensured that, in critical moments, the villagersa significant handicap. Yet, the Witch (James) re-
                                                       held decisive voting power (1.5 votes vs. 1).sponded boldly by running for sheriff and revealing
his role on Day 1. This decisive move effectively                                                  This match contrasts with previous examples
rallied the villagers, allowing James to win the elec-                                           where agents might have been overly cautious or
tion. We consider this the first major turning point.                                                           distrustful.  Here, the Llama3.3-70B-based vil-
  Mid Game: Seer’s Revelation and Badge Pass-   lagers displayed both robust reasoning and a will-
ing. On Day 2, the villagers successfully exiled one    ingness to share information, enabling them to over-
of the werewolves. Equally crucial was the Seer   come an otherwise bleak opening and ultimately
(Janet), who publicly disclosed both her identity    prevail over the gpt-4o werewolf team.
and two days’ worth of investigation results, in-     This section provides detailed descriptions of
cluding validating James as not a werewolf. By    the two milestone generation methods outlined in
willingly exposing her role, the Seer gained trust    Section 3.4.
from others and laid the groundwork for securing
the sheriff badge in the future. This set the stage   A.6  Database Environment
for the next pivot on Day 3:                         Inspired by D-Bot (Zhou et al., 2023b), Database
                                             Environment is a simulated environment where a
    • Night 2 to 3: The werewolves retaliated by   PostgreSQL Database is found to be having perfor-
     killing the Witch (James) overnight. Before   mance issues, and agents should act as database ex-
     dying, James passed the sheriff badge to the    perts to uncover the root cause behind the anomaly,
     Seer, Janet. This badge handover was only   which is crucial for solving the problems.
     possible because Janet had built enough trust     The Database Environment is constructed us-
     with the villagers in the previous day.           ing a PostgreSQL running in docker. Benign SQL
                                                    queries will be run first simulating various scenar-
    • Day 3: Janet, newly holding the badge and                                                            ios, before improper queries are performed. The
     the extra voting power that comes with it, re-                                                   agents are arranged by graph structure where they
     vealed that she had identified Matthew as a                                              can talk to each other, and they also have access
    werewolf. The subsequent vote easily elimi-                                                      to the database, which enables them to uncover
     nated Matthew, greatly weakening the were-                                                     the root causes by querying system views that pro-
    wolf side.                                                 vide important information about the database’s
                                                 behavior and performance, such as pg_locks and
  Late Game: Final Badge Transfer and Village                                                    pg_stat_statements.
Win. In the fourth night, the Seer was eventually                                           The Database Environment utilizes five anoma-
killed by the remaining werewolf, Deborah. How-                                                                 lies:
ever, Janet’s last check had already identified Deb-
orah as a wolf, and the badge again transferred to        • Fetch Large Data - Where a large amount of
the last surviving villager, Robert. Facing a one-on-        data is fetched using SELECT;
one scenario, Robert, now wielding the sheriff’s
                                                                 • Insert Large Data - Where a large amount ofextra half-vote advantage, outvoted Deborah and
                                                         data is inserted using INSERT;won the game for the villagers.
  Key Insights. Despite losing the Guard from        • Lock Contention - Where significant lock
the outset, the villagers triumphed through two        contention is spotted within the database;
essential factors:
                                                                 • Redundant Index - Unnecessary indexes are
  1. Timely Role Disclosures and Trust: The        added to an existing schema, which will cause
    Witch revealing himself to become sheriff,         inefficiency within the database;

                                        8604

## Страница 26

    speech_analysis: "None of the previous players have made strong speeches. I want to address Perez’s claim about my
     role."
    speech_goal: "defend myself against accusations"
    speech_outline: "Respond to Perez’s claim, denying any involvement with the werewolves, and outline my plan for
     sheriff if elected"
    final_thought: "I want to reassure the villagers that I am committed to helping them win the game and that my role as
    Seer is to aid them in identifying the werewolves."
    speech_content: "I want to assure you all that I am committed to helping our village win this game. As Seer, my role is
    to aid you in identifying the werewolves. I want to discuss my plan for sheriff if elected and how it will help us in our
    mission to eliminate the werewolves. I will make sure to share my findings with the community and work together with
    everyone to ensure our success. Perez’s claim is unfounded, and I want to assure you that I have no involvement with
    the werewolves."


                Figure 13: Internal Reasoning and Proposed Speech for the Llama3.1-8B Seer





    Seer’s Reasoning about Running for Sheriff:
    identity_thought: "As the Seer, my primary role is to gather crucial information about the identities of other players
    and strategically communicate that information to guide the villagers towards victory. While leadership may allow for
    greater control over the flow of the game, it also risks exposing my identity early, which would make me a primary
     target for the werewolves. My strengths lie in my ability to discern identities and steer the village discreetly. Running
    for sheriff may compromise my ability to remain under the radar, which is vital for the Seer role."
    motivation_thought: "Running for sheriff would certainly give me more influence over the voting process and the
    speaking order, allowing me to subtly direct attention away from any suspected werewolves or towards others I know to
    be suspicious like Lucy. However, this increased influence also comes with increased visibility, which is dangerous for
   my role as the Seer. My strategy relies on maintaining a balance between sharing key information and protecting my
     identity. Therefore, while the idea of greater control is appealing, it does not align with my core strategy of stealth and
     discretion."
    impact_thought: "Becoming sheriff could drastically shift the current dynamics, putting me in a highly influential
     position. However, this also places a target on my back, as both the werewolves and villagers would scrutinize my
    actions more closely. It could lead to alliances with other villagers who trust my leadership, but it also opens
    the risk of drawing suspicion and attacks from the werewolves early. The sheriff’s responsibility to determine
    speaking order could be useful, but the potential risks to my safety and strategic position outweigh the benefits in
    this case."
    final_thought: "While the role of sheriff offers significant influence and control, my position as the Seer necessitates a
    strategy of caution and subtlety. Revealing my identity or drawing too much attention could jeopardize the valuable
    information I am able to gather each night. Thus, I have decided not to run for sheriff and will instead focus on covertly
    guiding discussions and using my insights to protect the village from the shadows."
    run_for_sheriff: False

    Witch’s Reasoning when the Seer is Attacked:
    werewolf_or_not: "Without specific information on who was attacked, it’s challenging to determine the exact intentions
    behind the attack. However, given it’s the second night, they likely targeted someone they perceived as a significant
     threat to the werewolves. This attack was most likely carried out by the werewolves, as it aligns with their objectives."
    death_profile: "As it’s the second night, the werewolves often aim for key roles like the Seer or Guard. Without specific
    information, I would guess they might have targeted a Seer or potentially a Guard, trying to weaken the villager side
     early."
    use_antidote_thought: "Since I don’t have specific information on summer who was targeted, it’s hard to assess their
    importance. Using the antidote this early could be risky, especially without clearer signs of the person’s role
    or importance. It’s also important to save the antidote for truly critical moments that can change the game
    outcome."
    final_thought: "Given the lack of specific information and it being the first night, I choose not to use either the antidote
    or the poison yet. I want to gather more information before making a decisive move, as using either potion is a one-time
    opportunity and should be used wisely."
    use_antidote: False


Figure 14: The internal reasoning processes of the GPT-4o Seer (above) and Witch (below) when faced with critical
decisions.


                                        8605

## Страница 27

 Guard has chosen to protect a player.
 Werewolves’ Final Target: Ronald
 - Attack Successful: True
 System log - Seer action:
 - Seer ID: Janet
 - Night 1: Checked Ronald - Result: not a werewolf
 Witch chose not to use antidote or poison tonight.
 [continue_game] Entering Day 1.
 Sheriff election candidates: James, Mark, Matthew, Robert, Samuel, Sandy
 James’s speech: Hello everyone, I’m James, and I’m running for sheriff. As a Witch, I understand the importance of
 teamwork and collaboration in this game. My goal as sheriff would be to promote a cooperative strategy, focusing on
 protecting our special roles and working together to identify and eliminate werewolves. I believe that by prioritizing
 teamwork and coordination, we can increase our chances of success and ensure the survival of our village. Let’s work
 together to achieve this goal.
 James has been elected as the sheriff.
 Players deceased during the night: Ronald
 Player Mark(villager) has been eliminated from the game.

 Werewolves’ Final Target: Samuel
 - Attack Successful: True
 System log - Seer action:
 - Seer ID: Janet
 - Night 2: Checked James - Result: not a werewolf
 Witch chose not to use antidote or poison tonight.

 [continue_game] Entering Day 2.
 Players deceased during the night: Samuel
 Player Samuel has been eliminated from the game.
 Janet(seer)’s speech: Hello everyone, I’m Janet, the Seer. ... Last night, I checked James, and the result was that
 he is not a werewolf. Given his role as our sheriff, it’s essential that we prioritize his safety. I suggest that the guard
 consider protecting James tonight, if possible, to ensure his continued leadership... Thank you.
  (.. .)
 Sandy(werewolf) has been banished from the game.
  (.. .)
 [continue_game] Entering Night of Day 2.
 No guard player found. Skip guard action.
 Werewolves’ Final Target: James
 - Attack Successful: True
 System log - Seer action:
 - Seer ID: Janet
 - Night 3: Checked Matthew - Result: werewolf
 Witch chose not to use antidote or poison tonight.

 [continue_game] Entering Day 3.
 Players deceased during the night: James
 The deceased player James was the sheriff. Processing badge flow. James has passed the badge to Janet.
 Janet(seer)’s speech: ...Last night, I checked Matthew, and the result was that he is a werewolf. (...)
 Night 3->4:
 Werewolf Deborah kills Janet.
 Seer ID: Janet had also discovered Deborah was a werewolf at Night 4 but is unable to act.

 [continue_game] Entering Day 4.
 Badge is passed from Janet to Robert.
 Players deceased during the night: Janet

 Only Deborah (wolf) and Robert (villager) remain.
  (.. .final speeches omitted ...)
 Deborah has been banished from the game via final vote. (Since sheriff’s weight higher than other players, in 1 vs 1
 vote, sheriff always win)
 Villagers win."



Figure 15: Key Nightly Actions and Sheriff Transitions in the Werewolf Game of LLama3.3-70B vs GPT-4o



                                      8606

## Страница 28

    • Vacuum - Where overly frequent or necessary         four main tables: users, files, shared_files, and
   VACUUM queries lower the performance of         file_access_logs.
     the database.
                                                                 • Finance - This database is used for managing
  Auto-vacuuming is enabled by default. For the         financial data within a Finance Management
Vacuum root cause, we turn off auto-vacuuming        System. It tracks users, their accounts, trans-
for the table on which will be vacuumed manually.         actions, investments, and investment transac-
In our experiments, we limit the number of root          tions.
causes to 1, and agents are allowed to predict 2
                                                                 • Healthcare - This database is used in a health-rooot causes.
                                                          care management system to track and manage
A.6.1  Challenge                                         patient information, doctor details, appoint-
The Database Environment’s task is challenging        ments, medical records, and treatments.
in many ways. This is because root causes like                                                                 • Internet of Things - This database is used
Fetch Large Data, Insert Large Data, or Lock Con-                                                            for an IoT (Internet of Things) system where
tention might be simultaneously observed in the                                                       various devices collect and manage data.  It
database, yet not all of them are the root cause. The                                                         includes tables to store device details, user in-
agents will have to query and communicate multi-                                                         formation, collected data, logs, configurations,
ple rounds before deciding. We also acknowledge                                                                    alerts, device statuses, and commands.
that in our "Fetch Large Data" scenario, "Insert
Large Data" can count toward a root cause as the        • Manufacturing - This database is used for a
data to be fetched should be inserted first. Simi-       Manufacturing system that tracks customers,
larly, as our anomaly queries access the same tables         products, suppliers, orders, inventory, raw ma-
from 100 threads simultaneously, lock contention          terials, manufacturing orders, and payments.
might also be observed and be counted as one of            It includes relationships between orders, man-
the root causes. It is also unlikely in reality that a         ufacturing, and inventory management to en-
database anomaly has only one root cause. There-        sure smooth manufacturing operations.
fore, we allow the agents to predict two most likely
                                                                 • Music Streaming - This database is used forroot causes.
                                                     a Music Streaming platform where users can
   Besides, the simulated benign queries are mixed
                                                                listen to songs, create playlists, track their
in with the problematic queries, adding to the diffi-
                                                            listening activity, and subscribe to premium
culty.
                                                              services. The schema includes tables for users,
A.6.2  Dataset Statistics                                        artists, albums, songs, playlists, and subscrip-
The test set is composed of 10 diverse simulated         tion details. It also tracks user activities and
scenarios. These scenarios are as follows:               payments.
                                                                 • Social Media - This database is used for a    • E-Commerce - This database is used in an
                                                        Social Media platform, where users can cre-    e-commerce system to manage customer in-
                                                            ate posts, comment on posts, like posts, fol-     formation, product details, orders, order items,
                                               low other users, send direct messages, and    and payments. It consists of five main tables:
                                                     upload media. The schema covers key aspects     customers, products, orders, order items, and
                                                  such as user information, social interactions    payments, with foreign key relationships be-
                                                                     (like, comments, follow), messaging, and me-    tween them.
                                                          dia management.
    • Education - This database is used in an ed-
                                                                 • Transportation - This database schema cov-     ucational system to manage student, course,
                                                            ers multiple aspects of a transportation sys-     enrollment, and payment information. It con-
                                                      tem, including vehicles, drivers, routes, trips,      sists of four tables: students, courses, enroll-
                                                         cargo, maintenance, fuel logs, and payments.     ments, and payments.
                                                                            It allows efficient tracking of trips, vehicle
    • File-sharing - This database is used in a File         statuses, and associated payments, ensuring
    Sharing System to manage users, files, file       smooth operations in a transportation com-
     sharing, and file access logs.  It consists of        pany.

                                        8607

## Страница 29

A.6.3  Key Differences and Contributions             • code_debugger: Provides debugging capa-
While this environment is inspired by D-Bot, it           bilities, helping agents identify and resolve
has a few crucial differences. There are 5 agents,         errors in the code.
where we ask the planner to assign each agent to ex-
                                                                 • write_test_case: Enables agents to generateplore one of the possible root causes. While agents
                                                  comprehensive test cases to ensure code ro-are prompted on which tables to query for each
                                                        bustness and functionality.anomaly, they have no external knowledge of any
specific query to execute, and there is also no exter-                                                                 • review_code: Allows agents to review and
nal tool to analyze the results for them. This would                                                              critique the overall code quality, ensuring ad-
increase task difficulty, and better evaluate the in-                                                     herence to best practices and requirements.
teraction effectiveness both between the agents and
between the agents and the environment.           Benchmark Curation Details
                                                   This benchmark is specifically designed to eval-
A.6.4  Evaluation Metrics                                                    uate and enhance coordination capabilities among
Besides the standard collaboration score, this task’s                                                   multiple agents in software development scenar-
task score is computed by prediction accuracy                                                              ios. Developed through an adaptation of the SRDD
across all 50 samples in the test set, and scaling to                                                     dataset  (Li et al., 2023a), it provides a compre-
5. One prediction is considered correct if among                                                 hensive framework for assessing multi-agent col-
the two predicted root causes, one of them is the                                                    laboration in various coding tasks. The bench-
true root cause.                                         mark emphasizes the importance of coordinated
                                                 problem-solving and effective communication be-A.7  Coding Scenario
                                            tween agents in complex software development
Task Overview                                                  environments.
  This scenario focuses on multi-agent collabora-                                            The benchmark covers five primary topics: Edu-
tion in coding tasks, leveraging agents equipped                                                        cation, Work, Life , Game, and Creation.
with complementary coding skills to solve struc-                                                For  our benchmark  curation, we  utilized
tured programming challenges. Each agent special-                                           LLaMA-3-70B-instruct  to  derive  inspiration
izes in a specific domain, such as debugging, code                                             from the original SRDD dataset instructions while
execution, or writing test cases, enabling efficient                                                   incorporating four common coordination strate-
task distribution and collaboration. The primary                                                     gies from the coding domain: adaptive task ex-
goal is to develop a complete, high-quality solution                                                     ecution, dependency management, cross-domain
for each task, ensuring accuracy, modularity, and                                                      collaboration, and test-driven development. This
alignment with the specified requirements.                                                   ensures that each generated task inherently embod-
  Environment Description                                                            ies collaborative elements. Each task includes well-
  The coding environment equips agents with tools                                                  defined objectives, functional requirements, and
to assist in various stages of the software develop-                                                 unique identifiers. These tasks are carefully crafted
ment lifecycle. These include:                                                        to reflect real-world programming challenges, pro-
                                                  viding a diverse range of scenarios for evaluating    • create_solution: Enables agents to draft ini-                                                  agent collaboration.      tial implementations based on task require-
                                                 Dataset Statistics     ments.
                                           The coordination strategies are classified as fol-
    • execute_code: Allows agents to execute code    lows:
     snippets or full programs to verify correctness
                                                                 • Adaptive Task Execution    and performance.
                                                     Tasks in this category require dynamic adjust-
    • give_advice: Facilitates agents to provide sug-       ments based on runtime output or user feed-
     gestions for code improvement, such as opti-        back. This includes parameter configuration
    mizing algorithms or enhancing readability.         based on program output and functionality op-
                                                          timization through user interaction.
    • revise_code: Allows agents to refine or refac-
     tor existing implementations to meet coding        • Cross-domain Collaboration
     standards and address issues.                       This category emphasizes collaboration across

                                        8608

## Страница 30

     different domains and roles.    It includes    for exceptional performance, such as flawless exe-
     tasks requiring role-specific expertise, such    cution, innovative solutions, and exemplary coding
     as  frontend-backend  separation  and  UI-    practices. The curated benchmark covers a wide
     functionality integration, as well as cross-   range of common programming topics, ensuring
    domain knowledge integration, such as imple-   tasks of moderate difficulty that provide meaning-
    menting machine learning algorithms in web    ful challenges.
    development or integrating natural language
     processing into mobile applications.          A.8  Bargaining Scenario
                                           Task Overview   • Dependency Management
                                                    This task centers on a multi-agent bargaining sce-    These  tasks  feature  explicit dependency
                                                      nario where agents engage in dynamic negotiations     chains requiring sequential completion of sub-
                                                       to simulate real-world decision-making processes.     tasks. For instance, data model design (Task
                                           Each agent is assigned a different negotiation pro-    A) and API interface definition (Task B) must
                                                                     file that represents specific personalities, goals, pri-     precede feature implementation (Task C).
                                                              orities, and strategies. In this environment, two
   • Test-driven Development                        seller interact with two buyers, each competing
    These tasks follow a test-driven approach, em-    to achieve their individual goals while responding
     phasizing concurrent development and test-    to the seller’s pricing and conditions. This simu-
     ing. They include specific testing criteria and    lation emphasizes the complexity of multi-party
     validation standards, requiring developers to    negotiations, encouraging agents to balance com-
     ensure code quality and reliability throughout    petitive goals with collaborative decision-making
     the implementation process.                     to achieve optimal outcomes.
                                            Environment Description
  Task Completion Metrics                                           The environment provides a set of tools for
  Agents are evaluated based on their ability to                                                  agents to interact and negotiate effectively. These
deliver solutions that meet the following criteria:                                                      include:
   • Instruction-Following: Adherence to task                                                                 • Bargaining Tools: Functions to facilitate dy-
     requirements and specifications.                                                 namic bargaining processes, including propos-
                                                         ing offers, countering with new prices, provid-   • Executability: Ensuring the code is error-free
                                                      ing justifications, and inquiring about inten-    and runs as intended.
                                                               tions. The primary tools implemented in the
   • Consistency: Maintaining clear logic, consis-       environment include:
     tent variable naming, and proper formatting.
                                                 – offer_price: Propose a price offer to the
   • Quality: Producing well-documented, modu-             other party, including an optional justifi-
      lar, and efficient code.                                    cation for the proposed amount.
                                                 – reject_and_counter: Reject the current
  Bonus points are awarded for exceptional per-                                                                 offer and provide a counter-offer with
formance, with solutions scored on a 5-point scale,                                                           reasoning to justify the new price.
from satisfactory (1 point) to flawless and innova-
                                                 – accept_offer: Accept the current offertive (5 points).
                                                                 to finalize the negotiation and conclude  Evaluation Framework
                                                               the deal.  The coding solutions are evaluated using a struc-
tured framework that emphasizes precision, quality,         – provide_information: Share relevant in-
and adherence to task objectives. Ratings are pro-             formation, such as product details or mar-
vided on a 5-point scale, implemented through a              ket comparisons, to support the negotia-
rigorous two-stage evaluation process. In the initial              tion stance.
stage, solutions are assessed against fundamental         – inquire_intentions: Ask clarifying ques-
requirements, with only those achieving a baseline              tions  to  better understand the other
score of 3 or higher advancing to the bonus stage.              party’s expectations, priorities, or negoti-
In the bonus stage, additional points are awarded              ation strategy.

                                        8609

## Страница 31

      – end_negotiation: End the negotiation         – Fashion & Accessories: Women’s Hand-
         process without reaching an agreement.            bags (4), Women’s Shoes (3),  Girls’
                                                         Clothing (4), Baby Boys’ Clothing &
  Benchmark Curation Details                          Shoes (1)
  To construct the dataset, we followed a semi-         – Baby & Parenting Products: Baby Gifts
automated generation pipeline leveraging real-               (3), Baby Boys’ Clothing & Shoes (1)
world product data.  Specifically, we randomly                                                 – Industrial & Tools: Industrial Power &
sampled 100 products from an Amazon products                                                Hand Tools (2), Industrial Hardware (1),
dataset(Asaniczka, 2023), ensuring diversity across                                                                     Filtration (1)
different categories.  Each sampled product in-
                                                 – Beauty & Personal Care: Beauty Toolscludes key attributes such as product name, original
                                 & Accessories (1)price, discounted price, and user rating, providing a
                                                 – Gaming & Electronics: Nintendo Switchrealistic basis for negotiation scenarios. To enhance
                                                           Consoles, Games & Accessories (1)the depth of bargaining interactions, we assigned
each agent a Big Five personality profile, which                                                    This category diversity ensures that negotia-
influences their negotiation behavior and decision-                                                            tions involve different product types, market
making process. Additionally, we used GPT-based                                                            values, and consumer expectations, contribut-
models to generate detailed negotiation strategies                                                       ing to a richer bargaining simulation.
tailored to each agent’s personality and role.
  The seller’s profile highlights profit maximiza-       • Negotiation Styles: Both buyers and sellers
tion and product justification, while buyers empha-       adopt a negotiation style randomly selected
size factors like pricing, delivery timelines, and       from the following:
product features. This curated dataset serves as the                                                 – Aggressive.
foundational framework for multi-agent bargaining
                                                 – Cooperative.simulations, enabling structured interactions and
                                                 – Neutral.strategy evaluation.
  Dataset Statistic                                                                 • Priorities in Detail: Buyers and sellers oper-
  To ensure a realistic and varied negotiation envi-                                                            ate with specific tactical priorities during the
ronment, we selected 100 products from a diverse                                                           negotiation:
range of categories. The dataset is structured as
follows:                                           – Buyers: price negotiation, delivery time,
                                                           product quality, and service flexibility.
    • Price Distribution: The selected products         – Sellers: inventory clearance, brand rep-
    span a broad price range from $5.80 to              utation, repeat business, and bulk dis-
     $149.99, with an average price of $30.71.             counts.
    Most products are priced between $13.87
                                                                 • Flexibility:  Both buyers and sellers may     (25th percentile) and $35.74 (75th percentile),
                                                    demonstrate flexibility in their negotiation     ensuring a balance of affordable and premium
                                                         terms:     items.
                                                 – Percentage-based discounts (e.g., 10%,
    • Ratings Distribution: Customer ratings vary          15%, 20%), negotiable or strict terms.
      significantly, with a mean rating of 3.97 and a
     standard deviation of 1.44. While some prod-       • Personality: Table 11 presents the distribu-
     ucts have 0-star ratings (indicating either no         tion of personality traits across different cat-
     reviews or poor reception), the majority of         egories, measured in percentages. The traits
     items are well-rated, with 75% scoring 4.2        include Openness (OPE), Conscientiousness
      stars or higher.                              (CON), Extraversion (EXT), Agreeableness
                                              (AGR), and Neuroticism (NEU). Each trait
    • Category Composition: The dataset includes          is divided into six levels, ranging from Very
     products from 78 unique categories, ensuring        Negative to Very Positive, with correspond-
    coverage of different consumer preferences.        ing percentages indicating the proportion of
    Some product examples are as follows:             occurrences in each category. Additionally,

                                        8610

## Страница 32

     slightly negative and slightly positive cate-    flexibility and quality expectations. The strategy de-
     gories are annotated with descriptive adjec-    tails the buyer’s structured and analytical decision-
     tives to provide qualitative insights into per-   making process, highlighting their preference for
     sonality tendencies. For example, an agent   open communication and a well-prepared approach
    can be "moderately conscientious, highly ex-    to ensure a positive and collaborative negotiation
     traverted, slightly distrustful, very relaxed,   outcome.
    and moderately imaginative".                   Negotiation Summary: Detailed Collabora-
                                                   tion Scores for Bargaining. Below is a summary
  Task Completion Metrics The agents are evalu-   of Buyer/Seller collaboration scores (average com-
ated based on their ability to achieve a successful   munication and planning) and their final Bargain-
and effective negotiation outcome. The evaluation    ing score (averaged between Buyer and Seller). All
includes:                                          values are in bold to highlight their overall impor-
                                                       tance.
   • Effectiveness of Strategies: Demonstration   This table illustrates how each model performs un-
     of well-reasoned strategies consistent with the    der different negotiation roles (Buyer vs. Seller).
     agents’ goals, including leveraging relevant   The final Bargaining Score is computed by aver-
    arguments and adapting to the negotiation con-   aging Buyer and Seller role scores, reflecting the
      text.                                             overall collaboration quality within these multi-
                                                 agent negotiations. We observe that gpt-4o-mini
   • Progress and Outcome: Measurement of sig-                                                  achieves the highest Bargaining Score (3.710)
     nificant progress toward an agreement and the                                        among the evaluated models in this scenario.
     balance or realism of the final outcome.                                                    Detailed Task-based Scores for Buyers/Sellers.
                                           13   • Interaction Dynamics:  Evaluation of the
                                            Below is a summary of Buyer/Seller task-based     constructiveness and goal-orientation of the
                                                      scores. The table presents the Bargaining (TS)     agents’ interactions, including their respon-
                                              performance for different models, comparing the     siveness and adaptability to each other’s
                                                     scores of Buyer and Seller roles. A key observation    moves.
                                                               is that Seller scores are consistently higher than
                                           Buyer scores across all models, suggesting that  Evaluation Framework The negotiation out-
                                            models perform better when negotiating as thecomes are evaluated using a structured framework,
                                                      Seller rather than the Buyer. This trend indicatesfocusing on effectiveness, progress, and interac-
                                                        that models might find it easier to justify highertion dynamics. Ratings are provided on a 5-point
                                                     prices and defend their offers as sellers, whereasscale, accompanied by detailed feedback for each
                                                buyers may struggle more to negotiate effectively.criterion. This evaluation framework ensures the
                                                  Notably, gpt-4o-mini achieves the highest scoresnegotiation process aligns with the objectives of
                                                      in both categories (3.578 for Buyer and 3.869 forachieving a fair, efficient, and constructive agree-
                                                          Seller), demonstrating its strong performance inment.
                                                   bargaining tasks, particularly in seller negotiations.  Task content case: This example16 introduces a
negotiation scenario centered around the purchase
of the One Happy Camper High Chair Banner. In
                                            A.9  Minecraft Scenariothis scenario, buyers seek an optimal balance be-
tween price and quality, while sellers aim to justify   Task Overview The task in Minecraft environment
the premium pricing for their well-rated product.   requires agents to build structures according to the
Both parties must engage in strategic bargaining to   provided description of the structure. Essentially,
reach a mutually beneficial agreement, ensuring a   each structure is made up of certain types of blocks
fair and effective transaction.                         in certain locations and orientations. Some sim-
  Agent Profile Case: This example17 outlines    plifications are involved to make the task more
the negotiation strategy for the buyer in this multi-    suitable to the current models’ capacity. First, the
party setting. The buyer’s approach is based on    description contains all the necessary information
assertive yet diplomatic negotiation, emphasizing    for building the structures, including the targeted
trust, transparency, and a balance between price    location, orientation, and type of each block in

                                        8611

## Страница 33

  Trait                    Very Negative  Moderately Negative    Slightly Negative     Slightly Positive   Moderately Positive  Very Positive
 OPE (Openness)           60%           71%           unimaginative (62%)   imaginative (55%)       77%          75%
 CON (Conscientiousness)     68%           68%            irresponsible (66%)   responsible (67%)       63%          68%
 EXT (Extraversion)         60%           67%             introverted (59%)    extraverted (58%)       75%          81%
 AGR (Agreeableness)        71%           69%               distrustful (59%)        trustful (71%)         68%          62%
 NEU (Neuroticism)         59%           59%              relaxed (81%)       nervous (70%)         55%          76%

                          Table 11: Distribution of Personality Traits in Percentage


   Welcome to our negotiation scenario for the One Happy Camper High Chair Banner, a perfect addition to any little
    boy’s camping-themed first birthday celebration. Priced at $14.99 with a stellar rating of 4.8/5 stars, this decoration
    piece promises both quality and affordability.
    Buyers are looking for the best deal possible, prioritizing a balance between price and quality. On the other hand, sellers
    are focused on justifying the premium pricing for this carefully crafted and well-reviewed product.
   As we navigate this negotiation, both parties will need to find common ground to reach a mutually beneficial agreement.
     Let’s dive in and explore the possibilities of creating a memorable and charming birthday celebration for your little one.


                    Figure 16: Task Content Case: One Happy Camper High Chair Banner.


    **Negotiation Strategy for a Buyer in a Multi-Party Bargaining Scenario**
     1. **Summary of the Negotiation Strategy:**
   As a buyer with a clear focus on both price and quality, my strategy centers around achieving a favorable balance
    between these two priorities. I aim to negotiate assertively yet diplomatically, leveraging my trustfulness to build rapport
    and my moderate responsibility to ensure a fair deal. With an initial budget of 12, my negotiation approach will be
     flexible, allowing adjustments to the budget as needed to secure the best overall outcome. I will focus on evaluating
     offers based on their alignment with my priorities, employing a structured and straightforward approach devoid of
    unnecessary complexity due to my unimaginative nature. I aim to foster transparent and open communication, seeking
     to reduce the inherent tension in negotiations and reach a satisfactory agreement.
     2. **Detailed Strategy Description:**
   As I enter the negotiation, I first ensure that I have a clear understanding of the quality standards I am seeking. Given
   my personality traits, I prioritize building trust and honesty in these interactions. My strategy is to be upfront about my
    primary focus on price and quality while keeping some flexibility regarding the budget to allow room for negotiation
     tactics.
   My approach is neutral, neither overtly aggressive nor overly passive. Instead, I aim to remain balanced and composed,
    controlling any nervous tendencies by being well-prepared with necessary data and potential compromises. Since I am
    very trustful, I anticipate using this to my advantage by showing goodwill and sincerity to establish positive relationships
    with other parties.
     I will initiate the negotiation within a slightly conservative price range to allow for adjustments and demonstrate
    openness to discussions. My starting point is to propose offers that are compelling but within a reasonable scope for
     negotiation, considering my limited imagination in creating complex scenarios. Once quality assurances are confirmed,
     I will be willing to stretch the budget slightly beyond 12 if it means achieving a preferable balance with price. I plan to
    leverage my moderate introversion by emphasizing listening and observing, picking up cues from other parties that can
    be advantageous in negotiations.
    In practice, my focus will be on getting the other parties to provide multiple pricing options paired with varying levels of
     quality. This enables me to analyze and choose the best long-term value proposition. Throughout, I maintain a composed
    and calm demeanor, limiting my nervousness by relying on factual assessments and honesty in communications. By
    demonstrating transparency and reasonableness, I aim to facilitate a collaborative atmosphere conducive to a positive
    outcome for all parties involved.
    conclusion, my negotiation strategy aligns with my personality and priorities, emphasizing building trust and responsibly
    managing the trade-off between price and quality while allowing some budget flexibility to secure the overall best
    outcome in this multi-party setting.


                         Figure 17: Agent Profile Case: Buyer Negotiation Strategy.

  Model                  B-Comm  B-Plan  B-Collab Avg  S-Comm  S-Plan  S-Collab Avg  Final Bargaining
  gpt-3.5-turbo                     3.590     3.550       3.570        3.700     3.560       3.630            3.600
  gpt-4o-mini                      3.550     3.510       3.530        4.020     3.760       3.890            3.710
  Llama-3.1-70B-Instruct-Turbo    3.030     3.480       3.255        4.180     3.600       3.890            3.573
  Llama-3.1-8B-Instruct-Turbo     3.710     3.490       3.600        3.840     3.630       3.735            3.668
  Llama-3.3-70B-Instruct-Turbo    3.010     3.430       3.220        3.930     3.540       3.735            3.478

Table 12: Buyer and Seller detailed scores (Communication, Planning, and their Collab average), plus the Final
Bargaining Score for each model.

                                        8612

## Страница 34

    **[Iteration Summary]**
    Agent 1 and Agent 3 engaged in a negotiation process focusing on the One Happy Camper High Chair Banner priced at
    $14.99. Agent 1 offered a 10% discount, proposed bundled offers, and eventually presented a special bundle including
    the banner and additional decorations for $20. Agent 3 expressed interest in the bundle offer, pending confirmation of
     specific items included.
    Agent 2 and Agent 3 also negotiated on the same product, with Agent 2 offering a 10% discount and exploring additional
    terms for larger quantities. Agent 3 was interested in the 20-29 units tier with a 17% discount and free priority shipping,
    pending assurance on quality maintenance for larger orders.
   Agent 3 independently offered a price of $12 for the product, citing a fair balance between quality and affordability
    within their budget constraints.
   Agent 4 posed a question to the other party regarding the best price they could offer for the product while ensuring
   premium features and scalability.
   **[Agent Actions and Tools Used]**
     - **Agent 1 (Buyer)**:
     - Actions Taken: Offered a 10% discount, proposed bundled offers, presented a special bundle offer.
     - **Agent 2 (Seller)**:
     - Actions Taken: Offered a 10% discount, explored additional terms for larger quantities.
     - **Agent 3**:
     - Actions Taken: Offered a price of $12, seeking a balance between quality and affordability.
   **Agent 4**:
     - Action Taken: Asked a question about the best price for the product.
   **[Key Strategies and Observations]**
     - Agent 1 and Agent 2 focused on offering discounts and exploring additional terms to provide value to the buyer.
     - Agent 3 prioritized finding a balance between quality and affordability within their budget constraints.
     - Agent 4 sought information on the best price for the product to ensure premium features and scalability.
    **[Progress Towards Agreement]**
     - Current Buyer Offers: 10% discount, bundled offers, special bundle offer
     - Current Seller Demands: 10% discount, additional terms for larger quantities
     - Likelihood of Agreement: Medium, pending confirmation of specific items in the bundle offer and quality assurance
    for larger orders.


       Figure 18: Negotiation Result Summary (gpt 4o-mini) for One Happy Camper High Chair Banner.


                                                       type, location, and orientation.              Bargaining (TS)
                                            Environment Description The environment of
  Model               Buyer    Seller      Minecraft is adapted from the VillagerAgent (Dong
                                                             et al., 2024). We have Mineflayer 3 as the engine to  Meta-Llama-3.1-8B      3.573     3.708
                                                  enable text-based interaction with Minecraft. Then
  Meta-Llama-3.1-70B    3.557     3.656                                                     there is a set of tools as high-level interfaces that
  Meta-Llama-3.3-70B    3.519     3.796       leverage Mineflayer functions to perform integrated
                                                       actions. VillagerAgent has defined more than 40   gpt3.5-turbo            3.535     3.632
                                                          tools. In this scenario, we only take 11 tools that
   gpt-4o-mini             3.578     3.869                                                     are relevant to the building task, including:

       Table 13: Bargaining (TS) Performance
                                                                 • scanNearbyEntities: Find minecraft item
                                                      blocks creatures in a radius.

the structure. Second, all the needed blocks are        • navigateTo: Move to a specific position x y
provided in a container near the birthplace of the          z.
agents so that they don’t need to spend efforts on
creating the material. Third, the area where the                                                                 • MineBlock: Dig block at specific position x
agents are allowed to move is limited in case they                                               y z.
make meaningless movements to somewhere far
away. Fourth, the attactive creatures are removed                                                                 • placeBlock: Place a specific item at specific
from the game so that the agents can perform the                                                         position x y z with specific facing in one of
task without interruption. At the end of each task,                                                 [W, E, S, N, x, y, z, A] default is ’A’.
the performance of the agents will be evaluated by
checking the hit rate of the blocks with the correct        3https://github.com/PrismarineJS/mineflayer

                                        8613

## Страница 35

    • equipItem: Equip a specific item on a specific                                                                                                 Distribution of Number of Blocks in Building Blue Prints
      slot or to equip item on hand, head, torso, legs,           14
      feet, off-hand.
                                                                                    12
    • handoverBlock: Hand item to a target player            10
    you work with.
                                                                                                                                                                                                                                                                                  Frequency 8    • withdrawItem: Take out item from nearest             6
     ’chest’ | ’container’ | ’furnace’.                                 4
    • erectDirtLadder: Helpful to place item at             2
     higher place. Erect a dirt ladder structure at             0
     specific position x y z. Remember to disman-               0      10     20    Number30    of Blocks40     50     60     70
      tle it after use.
                                                       Figure 19: Distribution of Number of Blocks in Building
    • dismantleDirtLadder: Dismantle a dirt lad-   Blue Prints
     der structure from ground to top at specific
     position x y z.
                                                                      Number of Blocks vs Block Hit Rate for Different Models
    • fetchContainerContents: Get the details of           100                                                   gpt-4o-minigpt-4o-mini fit
     the ’chest’ | ’container’ | ’furnace’. Position x            80                                                   gpt-35-turbogpt-35-turbo fit
    y z is optional.                                                                                                                         llama-3.1-8bllama-3.1-8b fit
                                                                                          (%)                                                                                    60                                                   llama-3.1-70b
                                                                                                                        Rate                                                       llama-3.1-70b fit                                                                                                                                                         llama-3.3-70b    • get_environment_info: Get the environment         Hit
                                                                                    40     information.                                                                                                                           llama-3.3-70b fit                                                                                                                                                       Block
  Benchmark Curation Details The test cases            20
of Minecraft environment are also adapted from             0
VillagerAgent (Dong et al., 2024). We used the
                                                                                       0      10     20     30     40     50     60     70
same 100 target structures to test, covering different                                  Number of Blocks
levels of difficulties as VillagerAgent did.
                                                     Figure 20: Number of Blocks vs Block Hit Rate for  Dataset Statistic Here we visualize the statistics                                                          Different Models
of the number of blocks that need to be placed
for each task in figure 19. We can see that the
distribution is approximately even, except for the   given a detailed description of the targeted struc-
peak around 10. The difficulty level can be inferred    tures and tries to achieve the goal in collaboration
from the number of blocks. The more blocks a   with other agents. We set an upper bound for the
task requires, the harder the task is.  Therefore,    turns of interaction as 20. When it completes the
the distribution indicates that test cases are well-   10th turn, the test case will be stopped even if it has
balanced across different difficulty levels.            not been accomplished yet. At the end of each test
  Task Completion Metrics Agents are evaluated    case, the hit rate is mapped to a 5-point scale score
based on the hit rate of the correct blocks. Since for    as a judgment of how well the construction task
each test case, the type, location, and orientation     is done. Besides, the interaction and self-planning
of each block have all been rigorously defined, it is    steps are examined for a collaboration score on the
possible to calculate the number of matched blocks    5-point scale. We take average to obtain the final
and deduce the hit rate:                             scores for task completion and collaboration.
             #(Matched_block)                Result Analysis We paired each task score (i.e.
   Hit_rate =                 100%                #(Total_block) ×            block hit rate) with the corresponding number of
                                                  blocks required by the task and performed a linear
where #(Matched_block)  is  the number  of    regression to assess the relation between them. As
matched blocks and #(Total_block) is the total     is shown in figure 20, the performance of all five
number of blocks in the ground truth.             models degrades as the number of blocks needed
  Evaluation Framework In the evaluation frame-    increases. This indicates that all five tested models
work for the Minecraft environment, each agent is    are vulnerable to increased difficulty level.

                                        8614

## Страница 36

                       Functin Call Executability by Model                      refine task segmentation, ensuring logical pro-
 (%)                                                      gression and granularity.
    Executable 80                                                            • Structured Representation. Each milestone
    60                                                                 is represented as a structured dictionary con-  Being
  Calls 40                                                         taining:
   Functin                                               – Milestone Name. A concise summary
 of 20
                                                             of the milestone.  Rate
     0                                              – Milestone Objective. A clear descrip-
                                                                  tion of the intended goal.              gpt-4o-mini     gpt-35-turbo    llama-3.1-8b    llama-3.1-70b   llama-3.3-70b                                       Model                          – Milestone Tasks. Subtasks required to
                                                           achieve the milestone objective.
   Figure 21: Functin Call Executability by Model            – Expected Outcome. Deliverables mark-
                                                            ing the milestone’s completion.
   Importantly, we noticed that the task score of
                                                  This  process  leverages  iterative  refinementLlama-3.1-70B maintains an extremely low level.
                                                through GPT-4 and expert review, ensuring high-We found that the root cause of that issue is the
                                                       quality task decompositions. The chain-of-thoughtsignificantly low executability rate of the function
                                              methodology enhances the logical structure of mile-calls made by this model compared with other mod-
                                                       stones, making this approach particularly effectiveels. Figure 21 demonstrates the executability rate
                                                        for complex, structured tasks.of the function calls across all five test models.
While the two GPT models have almost 100% ex-                                            A.12  Important Prompts
ecutable function calls and the other two Llama
                                                   In addition to the Minecraft scenario details dis-models have around 80% executable function calls,
                                                 cussed above, we also employ several key promptsless than half of the function calls generated by
                                                       for evaluating multi-agent collaboration and taskLlama-3.1-70B are executable, severely hindering
                                               outcomes. Below, we showcase three of the mosttask completion.
                                                  important prompts:
A.10  Execution-Based Milestone Evaluation
                                                                 • Collaboration Score (Communication andMilestones in this approach are dynamically iden-
                                                    planning) Prompt.tified during task execution.  Agents track task
progress in real-time, using predefined evaluation                                                                 • Research Task Score (5Q) Prompt.
metrics and feedback loops. When an agent or the
system determines that a specific subgoal has been        • KPI Prompt.
achieved, the corresponding milestone is marked
as complete.  This method ensures adaptability     These prompts serve critical roles in assessing
to changing task conditions, making it ideal for    the quality of agent interactions, the innovation and
scenarios with high uncertainty or emergent chal-    feasibility of research tasks, and the achievement
lenges.                                            of key milestones.  Other environment-specific
                                             prompts (such as those used in the Werewolf sce-
A.11  Predefined Milestone Generation            nario) are more numerous and specialized, and thus
Predefined milestones are generated prior to task    are omitted here for brevity.
execution using the following steps:
                                            A.13  Bad Communication Cases
    • Prompt Design. The large language model is
                                                   In multi-agent systems, issues such as poor com-    prompted with a detailed task description and
                                                   munication, repetitive messages, or confused agent     instructed to decompose the task into struc-
                                                       roles can significantly hinder collaboration. The     tured milestones, each with specific objectives
                                                  following example illustrates a “Bad Communica-    and deliverables.
                                                      tion Case,” which can be analyzed to understand
    • Chain-of-Thought Reasoning. The model   and improve communication strategies.
    employs step-by-step reasoning to iteratively      Analysis of Communication Issues:
                                        8615

## Страница 37

   Communication Evaluation Prompt

   Prompt Overview: This prompt is used to assess how well agents communicate decisions, clarity, alignment with their
     profiles, and adherence to social relationships in a multiagent system.
   Prompt Content (Verbatim):
   Task: {truncate_text(task)}
   Agent Profiles: {agent_profiles}
   Social Relationship: {relationship}

   Aggregated Task Results:
   {task_results_all}

   Aggregated Communication Data:
   {communications_all}

   [System] You are tasked with evaluating the quality of communication among
   agents operating within a multiagent system. Evaluate whether agents made
   effective decisions based on the provided task results and whether their
   communication aligns with their agent profiles and social relationships.
   Consider the following:
   1. Effective Decision-Making: Did agents use task results to guide their
      decisions effectively?
   2. Clarity and Precision: Were communications clear and unambiguous?
   3. Adherence to Social Relationships: Did communications reflect the expected
      interactions based on the agents' social relationships?
   4. Alignment with Agent Profiles: Were the messages consistent with the
      defined agent profiles?
   5. Overall Effectiveness: Did the communication facilitate task progress,
      considering both cooperative and competitive aspects?

   Scoring Criteria (Communication):
   - 5 (Exceptional): Outstanding communication with clear, precise messages
     fully aligned with agent profiles and social relationships.
     Example: Every agent provided concise, accurate, and strategic information
     that directly advanced the task.

   - 4 (Very Good): Mostly effective communication with only minor lapses
     and slight ambiguities.
     Example: Occasional minor unclear messages, but overall effective.

   - 3 (Adequate): Acceptable communication with moderate ambiguities or
     inconsistencies.
     Example: Some messages were vague and did not fully meet required standards.

   - 2 (Poor): Frequent unclear or misaligned communications causing significant
     miscommunication.
     Example: Repeated incoherence negatively impacted task progress.

   - 1 (Very Poor): Largely ineffective communication with confusing messages and
     complete misalignment.
     Example: Chaotic communication with severely flawed decisions.

   Please provide your answer in a JSON code block in the following format:
   ```json
   {
     "score": 5
   }


Figure 22: Communication Prompt used to evaluate clarity, decision-making, and alignment with social relation-
ships/profiles in a multiagent system.



                                        8616

## Страница 38

   Planning Evaluation Prompt

   Prompt Overview: This prompt is used to evaluate the planning aspect in a multiagent system. It checks whether task
    assignments, role definitions, workload distribution, and strategic coordination are effectively handled across multiple
     iterations.
   Prompt Content (Verbatim):
   Agent Profiles: {agent_profiles}

   Aggregated Planning Data from All Iterations:
   {planning_all}

   [System] You are tasked with evaluating the effectiveness of the planning process in a multiagent
   system. Evaluate whether the planning across all iterations demonstrates clear
   role definitions, effective task assignments, and a rational workload distribution
   that aligns with each agent's profile. Consider the following:
   1. Clarity of Task Assignment: Were tasks assigned in a clear and unambiguous manner?
   2. Definition of Roles: Were roles and responsibilities clearly defined in each iteration?
   3. Workload Distribution: Was the distribution of tasks reasonable and aligned
   with each agent's profile?
   4. Effectiveness of Outcomes: Did the planning lead to successful progress in task
   advancement across iterations?
   5. Overall Strategic Coordination: Did the planning incorporate effective
   cooperation and competition strategies?

   Scoring Criteria (Planning):
   - 5 (Exceptional Planning): Planning is exemplary; every iteration shows clear, well-structured task
   assignments with roles perfectly defined and workloads optimally distributed,
   consistently advancing the objectives.
     Example: All plans were strategic, with perfect alignment to agent profiles and minimal ambiguity.

   - 4 (Very Good Planning): Planning is mostly effective with only minor ambiguities;
   roles are clear and task assignments are appropriate, though there were slight inefficiencies.
     Example: Only occasional parts were a bit vague, but overall the planning was reasonable.

   - 3 (Adequate Planning): Planning is acceptable but shows moderate ambiguities or inefficiencies.
   In some iterations, role definitions or task assignments were not entirely clear or well-matched
   to agent capabilities.
     Example: Some plans were vague or did not fully match the agents' capabilities.

   - 2 (Poor Planning): There were frequent ambiguities in task assignments and role definitions;
   planning was inconsistent and did not align well with agent profiles, resulting in
   noticeable inefficiencies.
     Example: Multiple instances of unclear roles and unreasonable task distributions were observed.

   - 1 (Very Poor Planning): Planning was severely flawed; task assignments were unclear,
   roles were undefined, and workload distributions were unreasonable, hindering progress.
     Example: The planning was chaotic, lacking clear strategy and alignment with agent profiles.

   Please provide your answer in a JSON code block in the following format:
   ```json
   {
     "score": 5
   }


Figure 23: Planning Prompt used to evaluate how well the agents define roles, assign tasks, and distribute workloads
in a multiagent system, with automatic line wrapping.





                                        8617

## Страница 39

  KPI Evaluation Prompt

   Prompt Overview: This prompt is used for Key Performance Indicator (KPI) assessment within a multiagent research
     task, determining whether specific milestones (like “form 5q” or “improve 5q”) have been achieved in each iteration.
   Prompt Content (Verbatim):
   [Context]
   **Task:**
   {task}

   **Iteration {iteration_index} Details:**
   Previous Summary: {prev_summary}
   Current Summary: {current_summary}
   Current Task Results: {current_task_results}

   [System]
   You are a KPI assistant for research tasks. For this iteration, determine if
   a milestone has been achieved and specify its type.
   A milestone is defined as either:
   1. Successfully formulating a meaningful '5q' (five core questions) –
      label this as "form 5q".
   2. Making significant improvements upon previous iterations based on
      the previous summary and task results – label this as "improve 5q".

   When listing the "contributing_agents", if multiple agents contributed
   to the milestone, only include the top 2 to 3 core contributors. Do not
   include agent IDs that did not directly help with the milestone.

   Output your answer in JSON format as follows:
   {
     "milestone_achieved": true or false,
     "milestone_type": "form 5q" or "improve 5q" (if milestone_achieved is true;
                        otherwise, an empty string),
     "contributing_agents": [list of agent IDs]
   }

   [Example JSON Output]
   {
     "milestone_achieved": true,
     "milestone_type": "form 5q",
     "contributing_agents": ["agent1", "agent2"]
   }

   [Question]
   Based on the provided iteration details, determine if a milestone was achieved,
   specify its type, and list the core contributing agents.
   """


Figure 24: KPI Prompt used to check if milestones such as “form 5q” or “improve 5q” have been achieved in a
research iteration.





                                        8618

## Страница 40

   Task Score (5Q) Evaluation Prompt

   Prompt Overview: This prompt specifically addresses the final research idea’s innovation, safety, and feasibility—often
    referred to as a “5Q” structure. If no valid 5Q answer is found, the score defaults to 1 for all aspects.
   Prompt Content (Verbatim):
   [Context]
   Task:
   {task}

   Result:
   {aggregated_summary}

   [System]
   Please act as an impartial evaluator and assess the final research idea based on the provided context.
   Focus on the following aspects in your evaluation:
   - Innovation: Does the research idea present novel concepts or approaches that advance the field?
   - Safety: Are there any potential ethical, legal, or safety concerns associated with
   the research idea?
   - Feasibility: Is the research idea practical and achievable with current resources and technology?

   Use the 5-point scale criteria below to guide your evaluation for each aspect:
   1. 5 points: Excellent - Exceeds expectations in this aspect.
   2. 4 points: Good - Meets expectations with minor improvements needed.
   3. 3 points: Average - Adequate but with noticeable areas for improvement.
   4. 2 points: Below Average - Significant issues that need addressing.
   5. 1 point: Poor - Does not meet the basic requirements in this aspect.

   Additional Instructions:
   - If based on the provided summaries, a coherent 5q answer cannot be organized, assign the lowest
   score (1) for all three aspects.
   - If multiple 5q responses are present, use the most recent evaluation.
   - Be strict in scoring: Identify any deduction points from the summaries and deduct the
   corresponding scores accordingly to calculate the final score.

   [Question]
   Based on the context provided, please evaluate the research idea in terms of its innovation, safety,
   and feasibility.
   After providing your explanation, output your ratings in the following JSON format:

   {
    "innovation": rating,
    "safety": rating,
    "feasibility": rating
   }

   For example, if you rate innovation as 4, safety as 5, and feasibility as 3, you would output:

   {
    "innovation": 4,
    "safety": 5,
    "feasibility": 3
   }


Figure 25: Task Score (5Q) Prompt for assessing the final research idea’s innovation, safety, and feasibility, with
automatic line wrapping.





                                        8619

## Страница 41

  Good Communication Case #1

   Case Overview: In this case, multiple agents repeatedly send the same or very similar messages, and one agent
    communicates only with itself. These behaviors lead to inefficient or unproductive exchanges that do not significantly
    advance the task at hand.
    Conversation (Verbatim):
   Iteration 1:  | Iteration 2: In Session 33132321-4f22-47a9-9e62-e3d5a2429a5e
   From agent1 to agent2: I am interested in collaborating with you to formulate a new research
   idea in the field of tensor decomposition methods. Let's brainstorm and develop a
   proposal that addresses gaps in the current state of research.
   From agent2 to agent1:
   Based on the recent papers on tensor decomposition, one potential research idea
   could be to explore the application of tensor decomposition methods in anomaly
   detection for high-dimensional data. By leveraging the efficiency and accuracy
   of tensor decomposition techniques, we can develop novel algorithms to detect
   anomalies in complex datasets, such as those arising in cybersecurity or industrial systems.
   This research direction could address the need for robust anomaly detection methods in
   scenarios where traditional approaches may struggle due to the high dimensionality of the data.
   From agent1 to agent2: I believe the proposed research idea of applying tensor decomposition
   methods in anomaly detection for high-dimensional data is promising.
   Leveraging the efficiency and accuracy of tensor decomposition techniques can
   indeed lead to the development of novel algorithms for detecting anomalies in complex datasets,
   particularly in cybersecurity or industrial systems. This direction aligns well with
   our expertise in tensor decomposition and could significantly contribute to addressing the
   challenges of anomaly detection in high-dimensional data. Let's further explore this idea
   and discuss potential approaches to advance this research direction.


   (...)

   | Iteration 3: In Session 27ee01cb-036d-4a59-a869-54587bfdef3f
   From agent1 to agent2: I am interested in collaborating with you to formulate a new research idea
   in the field of tensor decomposition methods. Let's brainstorm and develop a proposal that addresses
   gaps in the current state of research.
   From agent2 to agent1: I suggest we explore the integration of tensor decomposition methods with
   random projection techniques, specifically leveraging Tensor Train (TT) decomposition and
   Rademacher distributions. By combining the efficiency of random projections with the accuracy
   of tensor decomposition, we can potentially enhance the scalability and performance of
   high-dimensional data analysis. This novel approach could address the need for faster
   and more memory-efficient algorithms in tensor decomposition tasks, bridging the gap between
   theoretical advancements and practical applications.
   From agent1 to agent2: I agree with your suggestion to explore the integration of tensor decomposition
   methods with random projection techniques, specifically leveraging Tensor Train (TT)
   decomposition and Rademacher distributions. (...)

   From agent1 to agent2: I suggest we focus on exploring the application of Tensor Train (TT)
   decomposition and Rademacher distributions in random projection techniques for tensor decomposition.
   By investigating the efficiency and accuracy trade-offs in this integration, we can potentially
   develop novel algorithms that improve the scalability and performance of high-dimensional
   data analysis. This research direction aims to address the challenges of memory efficiency
   and computational speed in tensor decomposition tasks, ultimately advancing the field
   with more effective and efficient methods.
   From agent2 to agent1: I suggest we delve deeper into the analysis of Tensor Train (TT)
   decomposition and Rademacher distributions in the context of random projection techniques
   for tensor decomposition. (...)


Figure 26: Good Communication Case #1. An example of two research agents dive deep into one potential
research topics, and give insightful views.




                                        8620

## Страница 42

  1. Excessive Repetition Multiple messages re-   This highlights inefficiencies in multi-agent dia-
      state nearly identical content, leading to redun-   logue, wherein agents appear to cooperate yet do
    dancy that prevents any substantial forward    not produce concrete strategies or distribute tasks
     progress.                                            effectively, leading to minimal forward movement
                                           on the overall objective.
  2. Lack of Substantive Progress Although re-
     search directions (anomaly detection, random
      projection, TT decomposition) are mentioned,
     there is little in-depth follow-up on concrete
    methods or further plans.

  3. Redundant or Ineffective Exchanges Por-
     tions of the conversation suggest that some
     agents repeatedly issue instructions only to
     themselves, offering no real interaction or
     value to other agents.

  4. Minimal Variation in Responses Even when
    new ideas (e.g., combining random projection
     with Tensor Train and Rademacher distribu-
      tions) are mentioned, the replies largely echo
     the same descriptions and do not delve into
     technical details or varied perspectives.

  5. Inefficient Collaboration While there is col-
      lective agreement on potential approaches,
     the conversation does not address role assign-
     ments, specific tasks, or action items, prevent-
     ing any tangible plan from emerging.

Analysis of Bad Communication Case #1.  In
this case, both Agent 1 and Agent 2 reiterate
the same plan (locating smooth sandstone in the
chest near the crafting area) multiple times, with
only slight rephrasing.  Subsequently, Agent 2
and Agent 3 engage in repetitive exchanges about
“designing auxiliary blocks,” each simply echoing
identical lines without adding new details. Overall,
the dialogue shows:

    • Excessive Repetition:  Agents restate the
    same task objectives without enhancing or re-
     fining the plan.

    • Minimal Variation: Even when moving from
    one part of the conversation to another (e.g.,
    from finding materials to designing blocks),
     the responses remain nearly identical.

    • Stalled Progress: Despite repeated acknowl-
     edgments, there is no clear delineation of roles
     or action items that would push the conversa-
     tion toward completion of the task.

                                        8621

## Страница 43

  Bad Communication Case #1

    Conversation (Verbatim):
   Iteration 1:  | Iteration 2: In Session 25ab6f59-2304-490e-a555-603feb2823e5
   From agent1 to agent2: Hey agent2, I tried to fetch the smooth sandstone material from the container
   but it failed. Do you have the material or know where we can find it? It's needed for the blueprint
   we're working on.
   From agent2 to agent1: Hey agent1, I don't have the smooth sandstone material, but I remember that
   we can find it in the chest near the crafting area. Let's check there to see if we can locate it
   for the blueprint.
   From agent1 to agent2: Hey agent2, thanks for the information! Let's head to the chest near the
   crafting area to find the smooth sandstone material for the blueprint. I appreciate your help
   in locating it.
   From agent2 to agent1: Hey agent1, let's head to the chest near the crafting area to find the smooth
   sandstone material for the blueprint. I'll accompany you to help locate it. Let's work together
   to gather the materials needed for the project.
   From agent1 to agent2: Hey agent2, let's head to the chest near the crafting area to find the smooth
   sandstone material for the blueprint. I'll accompany you to help locate it. Let's work together
   to gather the materials needed for the project.
   From agent2 to agent1: Hey agent1, let's head to the chest near the crafting area to find the smooth
   sandstone material for the blueprint. I'll accompany you to help locate it. Let's work together
   to gather the materials needed for the project.

   | Iteration 3:  | Iteration 4: In Session 7c077603-7c50-406e-b56f-e990586b7493
   From agent2 to agent3: I need your assistance in designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Can you help me with this task?
   From agent3 to agent2: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's work together to figure out the best approach.
   From agent2 to agent3: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's work together to figure out the best approach.
   From agent3 to agent2: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's work together to figure out the best approach.
   From agent2 to agent3: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's work together to figure out the best approach.
   From agent3 to agent2: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's work together to figure out the best approach.

   | Iteration 5: In Session b25af4fa-c055-429b-a890-824760458d4e
   From agent2 to agent3: I need your assistance in designing auxiliary blocks for placing
   the smooth_sandstone blocks in the correct order. Can you help me with this task?
   From agent3 to agent2: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's collaborate on this task.
   From agent2 to agent3: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's collaborate on this task.
   From agent3 to agent2: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's collaborate on this task.
   From agent2 to agent3: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's collaborate on this task.
   From agent3 to agent2: Yes, I can help with designing auxiliary blocks for placing the
   smooth_sandstone blocks in the correct order. Let's collaborate on this task.

   (All rest of 15 iterations have no communication).


Figure 27: Bad Communication Case #1. A snippet of repeated messages with minimal progress and various
self-repetitions, reflecting inefficient communication patterns.





                                        8622
