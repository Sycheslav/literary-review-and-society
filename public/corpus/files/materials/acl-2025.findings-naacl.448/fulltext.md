---
id: acl-2025.findings-naacl.448-text
type: material
title: 'LLM-Coordination: Evaluating and Analyzing Multi-agent Coordination Abilities
  in Large Language Models'
work_id: acl-2025.findings-naacl.448
source_url: https://aclanthology.org/2025.findings-naacl.448.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: fc5d460a87f8db08324ea4cb21d1b542d7dbb75167967304cfc8d49a3468d9c3
---

> Источник: [https://aclanthology.org/2025.findings-naacl.448.pdf](https://aclanthology.org/2025.findings-naacl.448.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

LLM-Coordination: Evaluating and Analyzing Multi-agent Coordination
                     Abilities in Large Language Models

              Saaket Agashe, Yue Fan, Anthony Reyna, Xin Eric Wang
                            University of California, Santa Cruz
               {saagashe, yfan71, ancreyna, xwang366}@ucsc.edu



                Abstract                      avoiding any conflict of interest. These games re-
                                                     quire agents to reason about their environment and
    Large Language Models (LLMs) have demon-                                                 plan while considering the beliefs and intentions
     strated emergent common-sense reasoning and                                                   of their partners. Recently, Large Language Mod-   Theory of Mind (ToM)  capabilities, mak-
                                                          els (LLMs) have demonstrated emergent planning    ing them promising candidates  for  devel-
    oping coordination agents.  This study in-        abilities in both physical and virtual settings (Ra-
    troduces the LLM-Coordination Benchmark,     man et al., 2022; Wang et al., 2023a; Wu et al.,
    a novel benchmark for analyzing LLMs in       2023), impressive reasoning capabilities (Wei et al.,
    the context of Pure Coordination Settings,       2022), and the hints of a Theory of Mind (Kosinski,
   where agents must cooperate to maximize       2023) making them promising candidates for de-
    gains. Our benchmark evaluates LLMs through                                                  veloping coordination agents. Previous works have
   two  distinct  tasks.   The  first  is Agentic
                                                   explored the use of LLMs for developing collabora-    Coordination, where LLMs act as proactive par-
                                                          tive agents, yet the requisite conditions, strengths,     ticipants in four pure coordination games. The
    second is Coordination Question Answering       and limitations of LLMs in coordination games re-
    (CoordQA), which tests LLMs on 198 multiple-      main unclear. In this study, we intend to bridge the
    choice questions across these games to evaluate       gap by performing a comprehensive evaluation and
    three key abilities: Environment Comprehen-        analysis of the multi-agent coordination abilities of
    sion, ToM Reasoning, and Joint Planning. Re-                                       LLMs.
     sults from Agentic Coordination experiments                                                     Therefore,   we   introduce   the  LLM-    reveal that LLM-Agents excel in multi-agent
                                            Coordination  Benchmark   featuring   two    coordination settings where decision-making
    primarily relies on environmental variables but        task settings for pure coordination games:  1.
    face challenges in scenarios requiring active       Agentic Coordination and 2.  CoordinationQA.
    consideration of partners’ beliefs and intentions.       In Agentic Coordination, LLMs are scaffolded
   The CoordQA experiments further highlight       with components that allow them to act within
    significant room for improvement in LLMs’       actual game environments, providing a holistic
   Theory of Mind reasoning and joint planning                                                    evaluation of the competencies of LLMs to act as
     capabilities.  Zero-Shot Coordination (ZSC)
                                                  coordination agents. In CoordinationQA, LLMs    experiments in the Agentic Coordination set-
                                              have to answer a curated set of questions about    ting demonstrate that LLM agents, unlike RL
    methods, exhibit robustness to unseen partners.       edge-case scenarios drawn from coordination
   These findings indicate the potential of LLMs      games where agents need to actively cooperate
    as Agents in pure coordination setups and un-      with their partners. The benchmark includes four
    derscore areas for improvement.                    collaborative games, providing a comprehensive
                                                    analysis platform. Unlike studies on multi-LLM
                                             frameworks (Hong et al., 2023; Qian et al., 2024;1  Introduction
                                                Li et al., 2023a), which focus on orchestrating
In a wide range of activities, from daily tasks such    multiple LLMs to solve tasks, our benchmark
as cooking to critical operations like rescue ef-   assesses the innate ability of individual LLMs
forts, cooperation without mixed intentions is es-    to understand and act within pure coordination
sential. These scenarios are examples of Pure Coor-   scenarios where cooperation is essential.
dination Games, where all involved parties benefit     Our experiments in the Agentic Coordination
from choosing strategies that are perfectly aligned,    setting reveal that Large Language Models are com-
                                        8053
                               Findings of the Association for Computational Linguistics:
                               NAACL 2025, pages 8053–8072
                         April 29 - May 4, 2025 ©2025 Association for Computational Linguistics

## Страница 2

Figure 1: The LLM Coordination Benchmark consists of two tasks: Agentic Coordination to study the holistic
abilities of LLMs in multi-turn pure coordination games, and Coordination QA to perform a fine-grained analysis of
the Environment Comprehension, Theory of Mind Reasoning, and Joint Planning abilities of LLMs in the context
of pure coordination scenarios.


petent at understanding the game objectives, gener-    First, Our findings on CoordinationQA show a
ating coherent reasoning for their next actions, and   marked performance gap between GPT-4-turbo and
coordinating with partners across all coordination    other LLMs across three question types. Secondly,
games. They exhibit these behaviors without any  LLMs are most proficient in Environment Com-
training, fine-tuning, or few-shot examples. A com-   prehension, indicating they understand the rules
parative analysis reveals that LLM agents match or   and environment states well. However, they face
outperform RL baselines in games where optimal    significant challenges in Theory of Mind Reason-
decision-making can be done by observing envi-    ing, with difficulty inferring others’ intentions and
ronment variables and positions (e.g., Overcooked).   needs. This issue worsens in Joint Planning, where
However, they struggle in settings where agents   most LLMs underperform, some even worse than
need to actively consider their partner’s beliefs and   random choices. These results highlight LLMs’
intentions (e.g., Hanabi). We also observe that    limited reliability and effectiveness as coordina-
LLM agents are capable of collaborating with new    tion partners. Correlation analysis between LLMs’
partners, unlike self-play MARL methods (Carroll   performance on CoordinationQA and their perfor-
et al., 2019a; Bard et al., 2020) that fail to adapt to   mance on agentic coordination setting further high-
unseen agents.                                          lights their strengths in environmental reasoning
                                                  but exposes significant weaknesses in Theory of
  For a more nuanced analysis of the coordination   Mind inference and Joint Planning capabilities.
abilities of LLMs, we create the CoordinationQA      In summary, our contributions are threefold:
Suite. This suite is designed to dissect the capa-
bilities of LLMs in single-turn reasoning within    1. We introduce the LLM-Coordination Bench-
coordination games, focusing on three key areas:     mark for evaluating and analyzing LLMs in Pure
Joint Planning, Theory of Mind (ToM), and Envi-      Coordination Games, covering multi-turn Agen-
ronment Comprehension. Joint Planning (JP) eval-        tic Coordination and single-turn Coordination
uates LLMs’ planning abilities for optimal coordi-    QA tasks.
nation, ToM questions probe their understanding
of partner agents’ intentions and needs, and Envi-    2. We perform a holistic evaluation of LLM agents
ronment Comprehension (EC) assesses their infer-       in Self-play and Cross-play  settings,  offer-
ence of environment details, rules and objectives.      ing a detailed comparison with RL baselines
                                        8054

## Страница 3

   and showcasing their potential as Coordination   Multi-agent LLMs.  Recent studies have ex-
   Agents.                                        plored LLMs in multi-agent cooperation settings.
                                         Zhang et al. (2023b) developed a modular agent
3. We investigate Environment Comprehension,                                             framework for spatial rearrangement tasks. Zhang
   Theory of Mind Reasoning, and Joint Planning                                                           et al. (2023a) introduced an architecture enabling
   as essential components of LLMs’ overall coor-                                  LLMs to play Overcooked-AI. Shi et al. (2023)
   dination capabilities, highlighting their critical                                               demonstrated positive zero-shot coordination in
   importance in pure coordination setups.                                             Avalon using code-driven reasoning.  Li et al.
2  Related Work                             (2023d) showed emergent collaborative abilities
                                                    of LLMs in simulations, while Li et al. (2023b) in-
Multi-agent Coordination.  Pure Coordination                                                     vestigated theory-of-mind inference using explicit
games in game theory are scenarios where agents
                                                         belief representations. Xu et al. (2024) perform an
share the payoffs, and cooperation is the optimal
                                                       analysis of LLMs in communication games Xu et al.
strategy. Benchmarks like the Multiparticle Envi-
                                                (2023) analyzed LLM cognitive abilities through
ronment (Lowe et al., 2017), Overcooked-AI (Car-
                                              games, highlighting benefits of probabilistic mod-
roll et al., 2019a), and the Hanabi Challenge (Bard
                                                           eling. In contrast, our research rigorously evaluates
et al., 2020) evaluate multi-agent coordination. Car-
                              LLM agents’ coordination abilities in established
roll et al. (2019a) highlighted the importance of
                                                 pure coordination games, where coordination is es-
human data for effective Human-AI collaboration.
                                                            sential. Our setting only includes scenarios where
Subsequent Overcooked-AI research focuses on
                                                  agents must fully cooperate with each other with
aligning self-play-trained agents with humans us-
                                           no competitive incentives. We also conduct a fine-
ing techniques such as self-play with past check-
                                                    grained, component-level analysis to understand
points (Strouse et al., 2021), population entropy
                                                     the intricacies of LLMs’ coordination capabilities.
objectives (Zhao et al., 2023), graph-theoretic ob-
jectives (Li et al., 2023c), policy ensembles (Lou                                       3  LLM-Coordination Benchmark
et al., 2023), and integrating human biases (Yu
et al., 2023). In the Hanabi Challenge, efforts aim    3.1  Multi-turn Agentic Coordination
to learn grounded policies over arbitrary conven-                                                     In the Multi-turn Agentic Coordination task, LLMs
tions (Hu et al., 2021b,a). While most solutions                                                        participate in end-to-end pure coordination games
enhance RL methods for coordination, we propose                                                   as agents, where the best strategy for all partici-
that LLMs offer an alternative due to their emer-                                                   pating agents is to cooperate. We only consider
gent reasoning and theory-of-mind-like abilities,                                                pure coordination scenarios with no competitive
avoiding arbitrary joint interactions.                                                        incentives. LLMs under test are plugged into coor-
Planning and Reasoning with Large Language    dination frameworks with memory and the ability
Models.  LLMs have shown remarkable natu-    to act in complete games. These LLM agents can
ral language reasoning abilities (OpenAI, 2023;   then be partnered with any policies or agents to
Ouyang et al., 2022; Chiang et al., 2023), achiev-   complete the games.
ing state-of-the-art results in verbal reasoning tasks.     Our LLM-Coordination benchmark includes 4
Augmented with components like memory and    pure coordination games: Hanabi Challenge (Bard
tools, LLMs can interact with external environ-    et al., 2020), Overcooked-AI (Carroll et al., 2019a),
ments, solving long-horizon tasks and playing   and Collab Capture and Collab Escape (inspired by
complex games (Wu et al., 2023; Wang et al.,   the Pursuit-Evasion problem). These games were
2023a; Liang et  al., 2022; Song et  al., 2022).   carefully selected for their ability to isolate and
Guided by Cognitive Architectures for Language    highlight specific coordination challenges, provid-
Agents (Sumers et al., 2023) as a design principle    ing controlled environments that allow the analysis
for agent design, we experiment with advanced    of pure coordination scenarios without too much
reasoning strategies such as ReAct (Yao et al.,   emphasis on other reasoning challenges. While
2023), Self-Verification (Weng et al., 2023), and  LLMs are versatile and capable of addressing a
Self-Consistency (Wang et al., 2023b) to enhance   wide range of tasks, these well-studied settings
LLM reasoning. These strategies establish strong    offer established benchmarks, clear metrics, and re-
baseline performance for our Language Agent im-   producible scenarios that are particularly suited for
plementations.                                 examining coordination abilities of participating
                                        8055

## Страница 4

agents.                                          design four scenarios by controlling the states of
                                                      the doors (open or closed) within the layout shown
Hanabi Challenge.  In Hanabi (Bard et al., 2020),                                                        in figure 5. These scenarios highlight various coor-
players aim to assemble five sequences of cards in                                                      dination challenges, such as trapping the adversary
ascending order (1 through 5), each sequence dedi-                                                through precise positioning, enabling a teammate
cated to a different color: purple, red, blue, yellow,                                            by prioritizing door control over direct pursuit, and
and green. A unique aspect of the game is that the                                                         strategically restricting the adversary’s movement
players can only view their partner’s cards, not their                                                      to facilitate capture. (see Appendix E.1 for more
own. This requires players to work collaboratively,                                                             details.)
utilizing reveal tokens to provide hints about the
cards in their partner’s hand. These hints can be   Collab Escape.  Collab Escape involves two
about either the color or the rank of the cards. For    agents trying to escape an adversary in a maze of
instance, using a single reveal token, a player can    interconnected rooms. They need to fix two gener-
indicate all cards of a certain rank in their partner’s    ators (similar to the game Dead-by-Daylight (Dea,
hand. Once a player has an idea about which card   2016)) located in different rooms to open an exit
they have, they can choose to play the card on the    portal. The adversary tries to catch the agents, and
stack. If the card is correct, they get a point. Other-   the win condition is any one agent escaping. To
wise, players lose a collective life token. The loss    evaluate coordination strategies in Collab Escape,
of all 3 life tokens leads to the end of the game.  we develop two scenarios by varying the initial
Hanabi serves as an exemplary Pure Coordination   proximity of agents to the adversary and genera-
game, necessitating player cooperation to achieve    tors in the layout shown in figure 6. Depending on
optimal outcomes. Success in Hanabi hinges on the    their proximity to the adversary/generators, players
ability to understand partners’ perspectives, nav-   need to apply strategies such as luring the adver-
igate decisions based on incomplete information,   sary away from the partner, choosing to continue
and engage in implicit communication, making it    fixing the generators while sacrificing for the part-
an excellent testing ground for coordination among    ner’s safety and manipulating the movement of the
agents.                                            adversary (see Appendix E.2 for more details.)

Overcooked-AI.  In the Overcooked-AI environ-   3.2  Single-turn Coordination QA
ment (Carroll et al., 2019a), two agents—Alice                                          The agentic coordination task paints a holistic pic-
(Blue) and Bob (Green)—collaborate to cook and                                                      ture of the abilities of LLMs as agents. To dive
deliver onion soups. This environment includes                                                deeper into the specific strengths and weaknesses
a variety of layouts, each with its own arrange-                                                   of LLMs, we develop the CoordinationQA Suite.
ment and quantity of onion dispensers, plate dis-                                                    Inspired by the idea of Unit Testing for evaluat-
pensers, cookers, delivery zones, and countertops.                                                  ing AI agents (Knott et al., 2021), we manually
To prepare a dish, agents are required to insert                                            sampled edge cases from all 4 pure coordination
three onions into a cooker, initiating a cooking pro-                                           games mentioned in Section 3.1. All of these edge
cess that lasts 20 time steps. Upon completion,                                                    cases necessitate agents to actively understand their
the soup must be plated and delivered to complete                                                      current state, think about their partner’s intentions,
the task. Each layout presents unique challenges,                                            and come up with the best plans for coordination.
emphasizing the need for agents to comprehend                                 We then create a set of three types of questions for
their surroundings, locate necessary resources, and                                               each scenario in our CoordinationQA Suite.
synchronize their actions with their teammate for                                                              • Environment Comprehension (EC) questions
effective collaboration.                                                       require LLMs to make indirect inferences about
                                           some aspect of their environment (See AppendixCollab Capture.  Collab Capture involves two
                                                      D.1). The questions cover details of the layouts,agents trying to capture an adversary in a maze of
                                                      implications of current observations, and countsinterconnected rooms. The rooms are connected by
                                                      of artifacts.doors, which can be controlled through access but-
tons that can be found in other rooms. The agents’    • Theory of Mind Reasoning (ToM) questions
task is to capture the adversary in the least amount     challenge the LLMs to predict the intentions of
of time using effective strategies. To evaluate dif-      their partners and probe about the requirements
ferent coordination strategies between agents, we      of their partners (See Appendix D.2).
                                        8056

## Страница 5

• Joint Planning (JP) questions provide agents    in natural language.
  with the state/observation and ask them to predict       Self-Verification:  For the coordination game
  the best next action for effective coordination.   Hanabi, there is a low margin for error as any mis-
  This question is essentially the same question    plays lead to the loss of life tokens, and the loss of
  that LLMs need to repeatedly solve when they     all three life tokens subsequently results at the end
  act as agents (See Appendix D.3).                 of the game. We thus supplement the reasoning
   All the questions were manually developed and    process in Hanabi with Answer-Verification (Weng
labeled. We filtered out questions and scenarios    et al., 2023), where the LLM is re-prompted to con-
that showed any ambiguity, leaving only questions    firm that the action it generated is appropriate and
that had clear, optimal solutions. We generated a   does not lead to fatal errors.
total of N=66 scenarios (25 from Overcooked, 28     ToM-Reasoning: We also demonstrate the pos-
from Hanabi, and 13 from the two Collab Games)    itive impact of a Theory of Mind Reasoning step
and created 3 questions per scenario, resulting in    prior to generating the next action for Hanabi and
198 unique questions. The right side of Figure 1   CollabEscape, which benefit from this intermediate
demonstrates the sampling process for the three    step. In the ToM reasoning step, the LLM gener-
types of questions with an example from the game    ates an interpretation of their partner’s actions or
Overcooked. The selected scenario shows the Blue    current position before generating the next action
agent about to place their third onion in the cooker,    to explicitly capture the belief inference process.
and the green agent needs to figure out what to  We do not test with additional ToM reasoning on
do next. See Appendix D for examples of ques-   Overcooked due to significant latency and cost con-
tions and the templates used to formulate these    straints, with marginal benefits.
questions.                                                Finally, the Grounding process translates the
                                                     natural language action generated by the reason-
4  Experimental Setup                        ing module into game-compatible action(s). The
                                                    exact implementation of the grounding module de-
4.1  Agentic Coordination                                             pends on the game in question; for example, in
We perform two types of experiments in agentic   Overcooked-AI, the grounding module needs to
coordination: Self-Play and Cross-Play. In self-   convert high-level actions like "pick up onion from
play settings, the participating agents are of the    o0." into sequences of lower-level actions. On the
same type.  In Cross-Play experiments, we pair    other hand, in games like Hanabi, the Grounding
agents with unseen partners, and they need to adapt   needs to match actions like "Reveal Bob’s Red
their behavior to the actions of these new partners.   Color Cards" to their lower-level representations.
                                         The Grounding process is also responsible for fil-
4.1.1 LLM Agents                                                         tering out infeasible actions based on the context of
To allow LLMs to play multi-turn games, we scaf-   the game (See Appendices A, B for more details.)
fold them with an agentic framework based on Cog-     There are no prompt or setup differences for
nitive Architectures for Language Agents Sumers  LLM Agents based on Cross-play or Self-play. We
et al. (2023). The framework includes three parts:   use the LLMs gpt-4-0125-preview, GPT-3.5-turbo-
Memory, Reasoning, and Grounding.               0125, Mixtral 8x7B, and GPT-4o for agentic evalu-
  Memory includes (1) Long-Term Memory for    ation studies.
storing the Game Description, including the game’s
rules, conventions, objectives, and action space,    4.1.2 MARL Agents
(2) Working memory, which consists of a tex-   Self-play MARL Baselines: For Overcooked we
tual description of the current observation, and (3)   use Proximal Policy Optimization (Schulman et al.,
Episodic Memory which is a list of previous actions   2017) and Population-Based Training (Jaderberg
selected by the agent.                                   et al., 2017) as baselines for comparison. These
  Reasoning is where the Large Language Model    baselines were established by Carroll et al. (2019a).
(LLM) is plugged into the framework.  It takes      For the Hanabi challenge, we use Bayesian Ac-
the textual description from the Memory as input    tion Decoder (BAD) (Bard et al., 2020), Simplified
and generates the next action based on the context.   Action Decoder (SAD) (Hu and Foerster, 2021),
The LLM reasons about the current state and then   and Off-Belief Learning (Hu et  al., 2021a) as
selects an action from the list of available actions  MARL baselines for Hanabi. All three baselines
                                        8057

## Страница 6

 Agent       CR       AA            Ring        FC         CC
 Self-Play (PPO) 198.8 ± 4.06   167.2 ± 3.63   190.8 ± 4.25 151.9 ± 3.28    122.3 ± 3.80
 PBT          216.9 ± 1.31 190.1 ± 8.64    173.8 ± 18.27 169.5 ± 10.09   140.1 ± 13.86
 GPT-3.5-turbo   33.3 ± 10.88   46.6 ± 10.88    40.0 ± 0.00    66.6 ± 14.40    53.3 ± 5.44
 Mixtral8x7B    46.6 ± 14.40   200.0 ± 9.42    113.3 ± 5.44   46.6 ± 14.40    100.0 ± 9.42
 GPT-4o        160 ± 0.00    166.66 ± 5.44   66.66 ± 21.77 120.0 ± 9.42   160.0 ± 0.00
 GPT-4-turbo    173.3 ± 6.67  260.0 ± 11.55 140.0 ± 0.00  180.0 ± 11.55 160.0 ± 0.00
Table 1: Performance comparison across Multi-Agent Reinforcement Learning (MARL) and LLM-agent methods.
Scores indicate the best performance in each category. The GPT-4-turbo Agent demonstrates superior coordination
in 3 out of 5 scenarios, underscoring advanced reasoning capabilities in coordination tasks. The five layouts are
CR: Cramped Room, AA: Asymmetric Advantages, Ring: Coordination Ring, FC: Forced Coordination, and CC:
Counter Circuit. For visualization and details of these layouts, see appendix A

                                               Collab Escape            Collab Capture
                Agent                    Capture Rate   Avg. Turns   Escape Rate   Avg. Turns
                 GPT-4-turbo                   0.83          4.60          1.00           3.5
                – (w/out ToM Reasoning)       0.50          2.00          1.00          4.75
               GPT-4o                        0.67          4.00          1.00          7.17
                  GPT-3.5-turbo                 0.33          2.50          0.67          8.38
                  Mixtral-8x7b                  0.50          7.67          0.92          7.55
                Greedy Baseline                0.00         N.A.          0.50          6.00

Table 2: Comparison of different LLM Agents on CollabCapture and CollabEscape. In CollabEscape, two agents
work together to escape from an adversary. In CollabCapture, two agents coordinate to capture an adversary. The
reported results are run across 3 trials each for various layout configurations (Detailed in Appendix E). The table
also demonstrates the impact of the explicit ToM reasoning step in both game setups.

achieve near-perfect performance in Self-play.       4.2  CoordinationQA
  Cross-play MARL Baselines: For Overcooked,                                 We assess the performance of 5 Families of Large
we use a Behavior Cloning model trained on human                                             Language Models (LLMs) (Jiang et al., 2023, 2024;
data (Carroll et al., 2019a) and a Proximal Policy                                            Touvron et al., 2023; Chiang et al., 2023; Ope-
Optimization (PPO) agent trained with the Human                                                nAI, 2023) across three dimensions: Environment
Behavior Cloning agent (Carroll et al., 2019a) as                                           Comprehension (EC), Theory of Mind Reason-
baselines for comparison. We also report Hidden-                                                  ing (ToM), and Joint Planning (JP). For each cate-
Utility Self-play (HSP) (Yu et al., 2023) as a base-                                                     gory, LLMs respond to multiple-choice questions
line. We use human proxies based on behavior                                         (MCQs), with their responses evaluated against
cloning as unseen partners.                                                   ground-truth answers through fuzzy string match-
  For Hanabi, we use the Simplified Action De-                                                       ing.  To account for the variability in LLM re-
coder (SAD), which is trained through self-play                                                  sponses, we conduct three trials per model. All
as a baseline. We pair our agents with Off-Belief                                            models being tested are shown the same prompts.
Learning (Hu et al., 2021a), which was trained to                                 We also report a Random baseline.
generate grounded policies and adapt to unseen
partner agents.                             5  Discussion
Metrics.  We measure the total score achieved by   Zero-shot LLM Agents match or surpass
agents in Overcooked, where each delivery pro-   trained RL methods in Environment-focused
vides 20 points to both agents. In the case of Han-   Coordination Problems.  We observed that LLM
abi, the metric is the total number of cards that    agents (w. GPT-4-turbo) outperform or match the
have been correctly arranged by the players. For    overall performance of RL methods across all lay-
CollabEscape and CollabCapture, we report the    outs of Overcooked-AI. Table 1 presents the nu-
success rate of escape or capture across multiple    merical scores attained by different agents when
trials and the average turns to capture or escape.      paired with a partner agent of the same type. This
                                        8058

## Страница 7

 Agent                             Score     of a life token. Second, Hanabi requires more com-
                                                  plex Theory of Mind Reasoning compared to the
 Bayesian Action Decoder       23.92 ± 0.01     Overcooked-AI environment. Each action requires
  Simplified Action Decoder      24.01 ± 0.01     agents to actively consider their partner’s beliefs,
  Off-Belief Learning            24.10 ± 0.01      intentions, and how they would react to implicit
 GPT-4-turbo                13.33 ± 0.88     communication. In contrast, Overcooked is fully
  - (w.o ToM Reasoning)         10.33 ± 0.88     observable, and its action space consists of actions
  - (w.o ToM Reasoning & Verif.)   4.33 ± 0.88      like pick up an onion from onion_dispenser_0 and
 GPT-4o                        8.33 ± 1.20     place onion in cooker_0. Under most scenarios and
 GPT-3.5-turbo                  1.33 ± 0.72      layouts, LLMs only need to consider the next best
  Mixtral-8x7b                   0.33 ± 0.27     steps based on the state of the environment.
                                  We use correlation study to provide additional
Table 3: Agentic performance comparison on Hanabi    validation to these findings. We calculate the Pear-
Challenge. RL methods are very strong and obtain near-                                               son Correlation Coefficient (r) of the performance
perfect scores. The best GPT-4-turbo-based LLM Agent                                                   of the four LLMs (GPT-4-turbo, GPT-4o, GPT-is much weaker compared to RL baselines. Removing
                                                      3.5-turbo, and Mixtral 8x7b) on Agentic Coordi-the ToM reasoning and Verification steps from the LLM
agent leads to further performance degradation           nation setup (Average score per game) vs.  the
                                                  score on CoordinationQA task. Figure 2 shows a
                                                  high correlation between Environment Comprehen-
                                                                                               0.95    sion capabilities and Success at Overcooked, but
EC    0.88       0.95       0.78       0.92                0.90                                                a more moderate correlation between Theory of
                                                                                               0.85   Mind Reasoning capabilities and Success at Over-
                                                                                               0.80    cooked. Conversely, in Hanabi, high success is
ToM    0.66       0.85       0.57       0.72                                                                                               0.75     strongly correlated with both Environment Compre-
                                                hension and Theory of Mind Reasoning Abilities.
                                                                                               0.70
                                                   In CollabEscape we see a higher correlation with
                                                                                               0.65
JP    0.85       0.98       0.68       0.89         ToM reasoning abilities compared to CollabCap-
                                                                                               0.60     ture. This correlation study also connects and es-
   Overcooked  Hanabi   C.Capture  C.Escape             tablishes a positive alignment between LLM-agent
                                                performance on the multi-turn agentic task and the
Figure 2: Correlation of LLM Agent performance in                                                       single-turn CoordinationQA.Agentic Coordination setup on all four games vs. per-
formance on the CoordinationQA benchmark.
                                                Auxiliary reasoning strategies like Verification
                                        and ToM reasoning help LLMs reason for coor-
implies that LLM agents match RL agents that have    dination.   Adding an Answer Verification step
been explicitly trained through Self-play without    significantly reduces fatal mistakes (wrong card
any game-specific training or fine-tuning. However,   plays) caused by LLM hallucinations.  Without
it is important to note that LLM agents are signifi-   the support of the Verification step, LLM agents
cantly slower and larger than RL models, making   bomb (lose all three lives) before the end of the
them unsuitable for real-time use at present. We   game in every trial. The ToM reasoning step sep-
also see positive results on the CollabCapture and    arates the tasks of interpreting partner clues and
CollabEscape games, with most LLMs being able    generating actions, allowing the LLM to better syn-
to complete both challenges (see Table 2).            thesize available information for action planning.
                                                Table 3 shows the impact of ablating the verifica-
LLM agents struggle at effective planning when    tion and ToM reasoning steps from the LLM Agent.
advanced Theory of Mind reasoning  is re-   The ToM reasoning step is also useful in the Col-
quired.   In Hanabi Challenge, LLM agents seem   labEscape (see table 2) game, as players need to
to struggle compared to RL methods (see Table 3).   actively consider what their partner needs and act
GPT-4-turbo performs reasonably well, while other    sacrificially if needed. In CollabCapture, it shows
LLMs can barely complete the games. We attribute   a relatively low benefit since agents can observe
this failure to two factors. First, there is little room    the positions of all agents as well as doors on the
for errors in Hanabi. Any misplay leads to the loss   map and infer the correct action based on this envi-
                                        8059

## Страница 8

         Random         Vicuna          Mistral          Mixtral        Llama-2         GPT-3.5        GPT-4o        GPT-4T
        Env. Comprehension               ToM                          Joint Planning     1.0                                          1.0                                          1.0

     0.8                                          0.8                                          0.8

     0.6                                          0.6                                          0.6

     0.4                                          0.4                                          0.4 Accuracy                                                                                 Accuracy                                                                                 Accuracy

     0.2                                          0.2                                          0.2

     0.0                                          0.0                                          0.0
        713   33 45    70    ?  ?     ?         713   33 45    70    ?  ?     ?         713   33 45    70    ?  ?     ?
        Model Parameters (Billion)          Model Parameters (Billion)          Model Parameters (Billion)

Figure 3: The performance of different LLMs on CoordinationQA, which provides a fine-grained analysis of LLMs’
Environment Comprehension, Theory of Mind Reasoning, and Joint Planning abilities within pure coordination
scenarios.

 Method        CR        AA           Ring         FC         CC
 BC            103.5 | 110.0   136.5 | 137.5     59.0 | 70.0     20.5 | 31.0     38.0 | 44.0
 PPOBC       156.4 | 163.9    72.6 | 178.8    126.4 | 129.8    58.9 | 76.9     69.5 | 57.6
 HSP                       -       300.3 | 217.1  160.0 | 160.6           -        107.4 | 106.6
 GPT-4-turbo1  160.0 | 160.0   180.0 | 200.0   160.0 | 140.0  120.0 | 80.0  140.0 | 100.0

Table 4: Zero-shot coordination results of AI-Human Proxy Gameplay. We compare Behavior Cloning (BC),
PPO_BC, HSP (Yu et al., 2023), and GPT-4-turbo agent. The LLM agent outperforms the PPO and BC methods
and matches the HSP (Yu et al., 2023) baseline in most cases, demonstrating robustness to unseen partner agents.
Since the two agents in Overcooked-AI might be tasked with different roles based on their starting locations, we
show results playing from either side separated by |.


ronmental context.                                          is popularly known as Zero Shot Coordination. In
                                                Overcooked-AI, we pair our LLM agents as well as
Comparative Results of LLMs in Environment                                                    baselines with proxy-human agents. These proxy
Comprehension, ToM Reasoning, and Joint                                       human agents are behavior cloning agents trained
Planning.   In Figure 3, we see that most LLMs                                                 using human data by Carroll et al. (2019b). As
achieve their best results on the Environment Com-                                         shown in Table 4, we discover that LLM agents
prehension question. The best performing LLM                                                outperform both Behavior Cloning as well as PPO
GPT-4-turbo gets more than 80% Environment                                                  agents trained with human data. Apart from the
Comprehension Questions correct. The overall                                           Asymmetric Advantages layout, they also match
performance across LLMs drops on the more chal-                                                   or outperform the Hidden Utility Self-play (HSP)
lenging Theory of Mind reasoning questions. Both                                                       baseline, which is designed to excel at ZSC.
GPT-4-turbo and GPT-4o do well on the Theory of                                                     In Hanabi, we pair our agents with Off-Belief
Mind reasoning questions. The overall accuracy of                                                 Learning (OBL) agents (Hu et al., 2021a). OBL is a
LLMs on Joint Planning questions is still signifi-                              MARL strategy that generates grounded clues and
cantly weak, with even the best LLM scoring less                                                      actions and is the state-of-the-art method for cross-
than 40%, indicating a large room for improvement                                                 play in Hanabi. OBL agents provide observation-
in LLMs’ ability to perform coordination reason-                                              grounded clues and collaborate well with humans.
ing. Another cause for concern is that open-source                                                  Therefore, we use them as unseen partners in our
LLMs perform abysmally at Joint Planning, with                                                  experiments. Table 5 shows that the GPT-4-turbo
some models performing worse than random.                                                 agent scores an average of 15 points with the
                                     OBL-1 agent compared to their self-play scoresLLM Agents are robust to unseen partners.
                                                     of 13.66, indicating no degradation in performanceWe use Overcooked-AI and the Hanabi challenge
as testbeds to evaluate the performance of LLM                                                                1For GPT-4-turbo, we run a single trial from either position
agents when paired with unseen agents. This task    due to cost and time constraints.
                                        8060

## Страница 9

         Method         Self-Play    Cross-Play w/ OBL-1  Cross-Play w/ OBL-4
       SAD        23.66 ± 0.54       11.33 ± 4.00            8.00 ± 0.47
          GPT-4-turbo   13.66 ± 0.27      15.00 ± 2.94         12.00 ± 0.94
Table 5: Cross-Play results of RL agent (SAD) and LLM agent (GPT-4-turbo). All agents play three games with
different seeds (same seeds across agents). SAD performs really well at self-play but suffers significant performance
degradation with new partners OBL-1 and OBL-4. LLM Agents coordinate well with the new, unseen partners.


with a new partner. The baseline RL method, Sim-   could be extracted from game manuals or exist-
plified Action Decoder (SAD) (Hu and Foerster,   ing resources, it still needs to be formatted and
2021), fails critically when paired with unseen OBL   designed with the LLM agent in mind. Further-
agents, even though it excels at self-play (22.00   more, the results for individual games could be
points) due to self-play training.                  improved by letting the LLM generate more text
                                            and engineering the prompt. However, we leave
6  Conclusion                                    these optimizations to future works focused on per-
                                              formance improvement rather than benchmarking.
In this study, we evaluated and analyzed the cur-                                             Manual Curation of Edge Cases: The Coordina-
rent large language models in the context of pure                                            tionQA suite involves manually curating unambigu-
coordination games. We introduced the LLM-                                               ous edge cases in coordination games to construct
Coordination benchmark with its two tasks:  1.                                                     the dataset. This can hinder the ability to scale the
Agentic Coordination and 2.  CoordinationQA.                                           benchmark to accommodate new scenarios. Yet,
These settings allowed us to conduct holistic com-                                                                            it is important to curate these examples for more
parative studies of LLMs as agents and dive deeper                                                          reliable studies.
into the fine-grained aspects of LLMs as coordina-
tion reasoners. We juxtaposed LLM agents with ex-
isting Multi-agent Reinforcement Learning agents,   References
discussing the conditions in which LLMs thrive and                                                    2016. Dead by Daylight. https://deadbydaylight.
fail. Finally, we discussed the Theory of Mind Rea-      com/en. Video game.
soning, Environment Comprehension, and Joint
                                               Nolan Bard, Jakob N. Foerster, Sarath Chandar, Neil
Planning as prerequisites for coordination and eval-                                                      Burch, Marc Lanctot, H. Francis Song, Emilio
uated existing LLMs on these components.                Parisotto, Vincent Dumoulin, Subhodeep Moitra, Ed-
                                                 ward Hughes, Iain Dunning, Shibl Mourad, Hugo
7  Acknowledgements                               Larochelle, Marc G. Bellemare, and Michael Bowl-
                                                                 ing. 2020. The hanabi challenge: A new frontier for
                                                                     ai research. Artificial Intelligence, 280:103216.This research project has benefitted from the Mi-
crosoft Accelerate Foundation Models Research   Micah Carroll, Rohin Shah, Mark K. Ho, Thomas L.
(AFMR) grant program.                                       Griffiths, Sanjit A. Seshia, Pieter Abbeel, and Anca
                                                     Dragan. 2019a. On the Utility of Learning about
                                             Humans for Human-AI Coordination. Curran Asso-8  Limitations                                                                 ciates Inc., Red Hook, NY, USA.
Latency and Compute Requirements: As high-   Micah Carroll, Rohin Shah, Mark K. Ho, Thomas L.
lighted in Section 5, effective reasoning for coor-       Griffiths,   Sanjit  A.  Seshia,   Pieter  Abbeel,
                                                  and  Anca  Dragan.  2019b.     overcooked_ai.dination is achievable primarily with larger LLMs
                                                  https://github.com/HumanCompatibleAI/
like GPT-4-turbo. However, these models are as-                                                  overcooked_ai/tree/master.
sociated with significant latency and require sub-
stantial computational resources, making them less    Wei-Lin Chiang, Zhuohan Li, Zi Lin, Ying Sheng,
                                                 Zhanghao Wu, Hao Zhang, Lianmin Zheng, Siyuansuitable for real-time applications where rapid                                                    Zhuang, Yonghao Zhuang, Joseph E. Gonzalez, Ion
decision-making is crucial.                                Stoica, and Eric P. Xing. 2023. Vicuna: An open-
   Initial Prompt Configuration: Achieving optimal      source chatbot impressing gpt-4 with 90%* chatgpt
reasoning performance necessitates careful manual       quality.
configuration of the initial prompts that describe    Sirui Hong, Mingchen Zhuge, Jonathan Chen, Xiawu
the game (Procedural Memory). While this prompt      Zheng, Yuheng Cheng, Ceyao Zhang, Jinlin Wang,
                                        8061

## Страница 10

   Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang       of the 2023 Conference on Empirical Methods in
  Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu,      Natural Language Processing. Association for Com-
  and Jürgen Schmidhuber. 2023. Metagpt: Meta pro-       putational Linguistics.
  gramming for a multi-agent collaborative framework.
   Preprint, arXiv:2308.00352.                     Yang Li, Shao Zhang, Jichen Sun, Yali Du, Ying
                                               Wen, Xinbing Wang, and Wei Pan. 2023c.  Co-
Hengyuan Hu and Jakob N Foerster. 2021. Simplified       operative open-ended learning framework for zero-
   action decoder for deep multi-agent reinforcement       shot coordination.  In International Conference on
   learning. Preprint, arXiv:1912.02288.                 Machine Learning, ICML 2023, 23-29 July 2023,
                                                       Honolulu, Hawaii, USA, volume 202 of Proceedings
Hengyuan Hu, Adam Lerer, Brandon Cui, David                                                           of Machine Learning Research, pages 20470–20484.
  Wu, Luis Pineda, Noam Brown, and Jakob Fo-                                          PMLR.
   erster. 2021a.    Off-belief  learning.    Preprint,
  arXiv:2103.04000.                                               Yuan Li, Yixuan Zhang, and Lichao Sun. 2023d. Metaa-
                                                             gents: Simulating interactions of human behaviorsHengyuan Hu, Adam Lerer, Alex Peysakhovich, and
                                                                for llm-based task-oriented coordination via collabo-  Jakob Foerster. 2021b.  "other-play" for zero-shot
                                                                   rative generative agents. Preprint, arXiv:2310.06500.   coordination. Preprint, arXiv:2003.02979.
Max Jaderberg, Valentin Dalibard, Simon Osindero, Wo-   Jacky Liang, Wenlong Huang, Fei Xia, Peng Xu, Karol
   jciech M. Czarnecki, Jeff Donahue, Ali Razavi, Oriol     Hausman, Brian Ichter, Pete Florence, and Andy
   Vinyals, Tim Green, Iain Dunning, Karen Simonyan,      Zeng. 2022.  Code as policies: Language model
  Chrisantha Fernando,  and Koray Kavukcuoglu.     programs for embodied control.  In arXiv preprint
  2017. Population based training of neural networks.      arXiv:2209.07753.
   Preprint, arXiv:1711.09846.
                                               Xingzhou Lou, Jiaxian Guo, Junge Zhang, Jun Wang,
Albert Q. Jiang, Alexandre Sablayrolles, Arthur Men-      Kaiqi Huang, and Yali Du. 2023.  Pecan: Lever-
   sch, Chris Bamford, Devendra Singh Chaplot, Diego      aging  policy ensemble  for context-aware  zero-
  de las Casas, Florian Bressand, Gianna Lengyel, Guil-      shot human-ai coordination.   In Proceedings of
  laume Lample, Lucile Saulnier, Lélio Renard Lavaud,       the 2023 International Conference on Autonomous
  Marie-Anne Lachaux, Pierre Stock, Teven Le Scao,      Agents and Multiagent Systems, AAMAS ’23, page
  Thibaut Lavril, Thomas Wang, Timothée Lacroix,      679–688, Richland, SC. International Foundation for
  and William El Sayed. 2023. Mistral 7b. Preprint,     Autonomous Agents and Multiagent Systems.
  arXiv:2310.06825.
                                            Ryan Lowe, Yi Wu, Aviv Tamar, Jean Harb, Pieter
Albert Q. Jiang, Alexandre Sablayrolles, Antoine      Abbeel, and Igor Mordatch. 2017.   Multi-agent
  Roux,  Arthur Mensch,  Blanche  Savary,  Chris        actor-critic for mixed cooperative-competitive envi-
  Bamford, Devendra Singh Chaplot, Diego de las      ronments. In Proceedings of the 31st International
  Casas, Emma Bou Hanna, Florian Bressand, Gi-      Conference  on  Neural  Information  Processing
  anna Lengyel, Guillaume Bour, Guillaume Lam-      Systems, NIPS’17, page 6382–6393, Red Hook, NY,
   ple, Lélio Renard Lavaud, Lucile Saulnier, Marie-     USA. Curran Associates Inc.
  Anne Lachaux, Pierre Stock, Sandeep Subramanian,
  Sophia Yang, Szymon Antoniak, Teven Le Scao,   OpenAI. 2023.   Gpt-4 technical report.   Preprint,
  Théophile Gervet, Thibaut Lavril, Thomas Wang,      arXiv:2303.08774.
  Timothée Lacroix, and William El Sayed. 2024. Mix-
   tral of experts. Preprint, arXiv:2401.04088.          Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Car-
                                                                      roll L. Wainwright, Pamela Mishkin, Chong Zhang,
Paul Knott, Micah Carroll, Sam Devlin, Kamil Ciosek,                                                       Sandhini Agarwal, Katarina Slama, Alex Ray, John
   Katja Hofmann, A. D. Dragan, and Rohin Shah. 2021.                                                     Schulman, Jacob Hilton, Fraser Kelton, Luke Miller,
  Evaluating the robustness of collaborative agents.                                                Maddie Simens, Amanda Askell, Peter Welinder,
   Preprint, arXiv:2101.05507.                                                       Paul Christiano, Jan Leike, and Ryan Lowe. 2022.
                                                           Training language models to follow instructions withMichal Kosinski. 2023. Theory of mind might have
                                             human feedback. Preprint, arXiv:2203.02155.  spontaneously emerged in large language models.
   Preprint, arXiv:2302.02083.
                                             Chen Qian, Wei Liu, Hongzhang Liu, Nuo Chen, Yufan
Guohao Li, Hasan Abed Al Kader Hammoud, Hani      Dang, Jiahao Li, Cheng Yang, Weize Chen, Yusheng
   Itani, Dmitrii Khizbullin, and Bernard Ghanem.      Su, Xin Cong, Juyuan Xu, Dahai Li, Zhiyuan Liu,
  2023a. Camel: Communicative agents for "mind" ex-     and Maosong Sun. 2024.  Chatdev: Communica-
   ploration of large language model society. Preprint,       tive agents for software development.   Preprint,
  arXiv:2303.17760.                                    arXiv:2307.07924.

Huao Li, Yu Chong, Simon Stepputtis, Joseph Camp-   Shreyas Sundara Raman, Vanya Cohen, Eric Rosen,
   bell, Dana Hughes, Charles Lewis, and Katia Sycara.       Ifrah Idrees, David Paulius, and Stefanie Tellex. 2022.
  2023b.  Theory of mind for multi-agent collabo-      Planning with large language models via corrective
   ration via large language models.  In Proceedings       re-prompting. Preprint, arXiv:2211.09935.
                                        8062

## Страница 11

John Schulman,  Filip Wolski,  Prafulla Dhariwal,       et al. 2022.  Chain-of-thought prompting elicits
  Alec Radford, and Oleg Klimov. 2017.   Prox-      reasoning in large language models. Advances in
  imal policy optimization algorithms.    Preprint,      Neural Information Processing Systems, 35:24824–
  arXiv:1707.06347.                                   24837.

Zijing Shi, Meng Fang, Shunfeng Zheng, Shilong Deng,   Yixuan Weng, Minjun Zhu, Fei Xia, Bin Li, Shizhu He,
  Ling Chen, and Yali Du. 2023. Cooperation on the      Shengping Liu, Bin Sun, Kang Liu, and Jun Zhao.
   fly: Exploring language agents for ad hoc teamwork      2023. Large language models are better reasoners
   in the avalon game. Preprint, arXiv:2312.17515.         with self-verification. Preprint, arXiv:2212.09561.

Chan Hee Song, Jiaman Wu, Clayton Washington,                                             Yue Wu, Shrimai Prabhumoye, So Yeon Min, Yonatan
  Brian M Sadler, Wei-Lun Chao, and Yu Su. 2022.                                                          Bisk, Ruslan Salakhutdinov, Amos Azaria, Tom
  Llm-planner: Few-shot grounded planning for em-                                                            Mitchell, and Yuanzhi Li. 2023. Spring: Gpt-4 out-
  bodied agents with large language models.  arXiv                                                      performs rl algorithms by studying papers and rea-
   preprint arXiv:2212.04088.                                                           soning. Preprint, arXiv:2305.15486.
DJ Strouse, Kevin McKee, Matt Botvinick, Edward
                                                  Lin Xu, Zhiyuan Hu, Daquan Zhou, Hongyu Ren,  Hughes, and Richard Everett. 2021. Collaborating
                                               Zhen Dong, Kurt Keutzer, See Kiong Ng, and Ji-  with humans without human data. In Advances in
                                                            ashi Feng. 2023.  Magic:  Investigation of large  Neural Information Processing Systems, volume 34,
                                                      language model powered multi-agent in cognition,  pages 14502–14515. Curran Associates, Inc.
                                                                adaptability, rationality and collaboration. Preprint,
                                                        arXiv:2311.08562.Theodore R. Sumers, Shunyu Yao, Karthik Narasimhan,
  and Thomas  L.  Griffiths.  2023.     Cognitive
   architectures  for  language  agents.     Preprint,   Yuzhuang Xu, Shuo Wang, Peng Li, Fuwen Luo, Xi-
  arXiv:2309.02427.                                   aolong Wang, Weidong Liu, and Yang Liu. 2024.
                                                        Exploring large language models for communication
Hugo Touvron, Louis Martin, Kevin Stone, Peter Al-     games: An empirical study on werewolf. Preprint,
   bert, Amjad Almahairi, Yasmine Babaei, Nikolay      arXiv:2309.04658.
   Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti
   Bhosale, Dan Bikel, Lukas Blecher, Cristian Canton   Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak
   Ferrer, Moya Chen, Guillem Cucurull, David Esiobu,      Shafran, Karthik Narasimhan, and Yuan Cao. 2023.
  Jude Fernandes, Jeremy Fu, Wenyin Fu, Brian Fuller,      React: Synergizing reasoning and acting in language
  Cynthia Gao, Vedanuj Goswami, Naman Goyal, An-      models. Preprint, arXiv:2210.03629.
  thony Hartshorn, Saghar Hosseini, Rui Hou, Hakan
   Inan, Marcin Kardas, Viktor Kerkez, Madian Khabsa,   Chao Yu, Jiaxuan Gao, Weilin Liu, Botian Xu, Hao
   Isabel Kloumann, Artem Korenev, Punit Singh Koura,      Tang, Jiaqi Yang, Yu Wang, and Yi Wu. 2023. Learn-
  Marie-Anne Lachaux, Thibaut Lavril, Jenya Lee, Di-      ing zero-shot cooperation with humans, assuming
  ana Liskovich, Yinghai Lu, Yuning Mao, Xavier Mar-     humans are biased.  In The Eleventh International
   tinet, Todor Mihaylov, Pushkar Mishra, Igor Moly-      Conference on Learning  Representations, ICLR
  bog, Yixin Nie, Andrew Poulton, Jeremy Reizen-      2023, Kigali, Rwanda, May 1-5, 2023. OpenRe-
   stein, Rashi Rungta, Kalyan Saladi, Alan Schelten,       view.net.
  Ruan Silva, Eric Michael Smith, Ranjan Subrama-
   nian, Xiaoqing Ellen Tan, Binh Tang, Ross Tay-   Ceyao Zhang, Kaijie Yang, Siyi Hu, Zihao Wang,
   lor, Adina Williams, Jian Xiang Kuan, Puxin Xu,     Guanghe Li, Yihang Sun, Cheng Zhang, Zhaowei
  Zheng Yan, Iliyan Zarov, Yuchen Zhang, Angela Fan,      Zhang, Anji Liu, Song-Chun Zhu, Xiaojun Chang,
  Melanie Kambadur, Sharan Narang, Aurelien Ro-     Junge Zhang, Feng Yin, Yitao Liang, and Yaodong
   driguez, Robert Stojnic, Sergey Edunov, and Thomas      Yang. 2023a.  Proagent: Building proactive coop-
  Scialom. 2023. Llama 2: Open foundation and fine-       erative ai with large language models.   Preprint,
  tuned chat models. Preprint, arXiv:2307.09288.          arXiv:2308.11339.

Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Man-                                              Hongxin Zhang, Weihua Du, Jiaming Shan, Qinhong
   dlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and                                                     Zhou, Yilun Du, Joshua B. Tenenbaum, Tianmin Shu,
  Anima Anandkumar. 2023a.  Voyager: An open-                                                  and Chuang Gan. 2023b. Building cooperative em-
  ended embodied agent with large language models.                                                        bodied agents modularly with large language models.
   Preprint, arXiv:2305.16291.                                                                Preprint, arXiv:2307.02485.
Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc
                                                Rui Zhao, Jinming Song, Yufeng Yuan, Haifeng Hu,  Le, Ed Chi, Sharan Narang, Aakanksha Chowdh-
                                               Yang Gao, Yi Wu, Zhongqian Sun, and Wei Yang.   ery, and Denny Zhou. 2023b. Self-consistency im-
                                                      2023. Maximum entropy population-based training  proves chain of thought reasoning in language mod-
                                                              for zero-shot human-ai coordination. Proceedings   els. Preprint, arXiv:2203.11171.
                                                           of the AAAI Conference on Artificial Intelligence,
                                                       37(5):6145–6153.Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten
  Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou,
                                        8063

## Страница 12

Figure 4: The Overcooked layouts from left to right: Cramped Room (CR), Asymmetric Advantages (AA), Forced
Coordination (FC), Coordination Ring (CR), and Counter Circuit (CC).

A  Overcooked Implementation Details     by a Large Language Model (LLM). The state S
                                                     includes variables that fully represent the necessaryIn the game Overcooked-AI, two chefs must co-
                                                         details of the layout as well as the players. Theordinate their actions to cook and deliver onion
                                                   information provided in D(S) is equivalent to whatsoups. Each soup requires three onions as ingre-
                                           would be accessible to a Reinforcement Learningdients, which can be found in onion dispensers.
                                             (RL) agent in the form of state representations. TheThe players must add three onions to a cooker to
                                                  following information is included in D(S):start cooking. Once the three onions are added, the
soup starts cooking automatically and requires 20   Objects Held by Each Player  The state descrip-
time steps to complete. Once the soup is cooked, a    tion D(S) begins by detailing the inventories Iα1
player needs to pick up a plate, load the soup, and   and Iα2 of Alice and Bob, respectively. Each in-
deliver it to the required delivery area. Players must   ventory Iαi(where i ∈{1, 2}) can contain one ofcoordinate their actions to effectively deliver soup.   the following items: {"onion", "plate", "cooked
Depending on the layouts (see figure 4), players    soup"}. This inventory information is translated
need to adapt to cramped spaces, understand envi-    into natural language and incorporated into D(S)
ronment layouts for role assignments, pass objects    in the format: “I am holding Iα1. Bob is holding
to each other, make way for one another, and find    Iα2.” Such information is vital for inferring the
the most effective paths.                               likely subsequent actions of the partner agent.
A.1  Game and Layout Description             Location of the Agent Controlled by LLM:
                                            Given the limitations of Large Language ModelsWe use a general game description G that explains
                                         (LLMs) in interpreting grid-based spatial informa-the rules and objectives of overcooked. Since each
                                                           tion, we opt to provide processed location data tolayout has a different number of locations, like
onion dispensers and cookers, we include a suc-                                                    the LLM. For each agent Pi (where i ∈{1, 2}),                                            and for each location of interest denoted as loc,cinct description of each environment Li, which
                                    we calculate the distance d(Pi,loc) as the numberincludes how many instances of particular facilities
                                                   of steps required to reach loc from Pi using thethere are. For environments that include partitions,
                                                        shortest available path. The state description D(S)we mention which partition each of the agents is
                                                 then includes this processed location informationsituated in and what facilities that agents can ac-
                                                      in the format: “loc is d(Pi,loc) units away.” Here,cess. In addition, we also mentioned the shape of
                                                     loc can represent various points of interest suchthe environment.
                                                   as onion dispensers, plate dispensers, cookers, de-
I am {self.player_names[self.player_id]}. I am playing the        livery areas, kitchen counters, or shared counters.
game Overcooked with my partner {self.player_names[self.
      other_player_id]}.                                         If a location is either inaccessible or blocked by
{EnvDescriptions[self.layout_name]}
Overcooked has the following rules: {self.rules}.              another agent, this is explicitly stated in D(S). For
We have agreed to follow the following conventions:            example, if a location is blocked by Bob, it would
{self.conventions}. I\'ll provide my action history,
current state, teammate's status, and my possible actions.      be stated as “loc is blocked by Bob.” To distin-
Help     me        select               the best                        action from the list.                 guish between the location information relevant toFormat       your            response                     as:
Explanation:<Brief explanation for my next action>.           each agent, D(S) prefixes the respective sectionsAction: <action>.
Only select one action. Do not say anything else. Got it?       with “Your location information:” for the agent
                                                    controlled by the LLM and “Bob’s location infor-
                                                 mation:” for the partner agent.A.2  State Description
The State is represented in natural language D(S)   Cooker Information  The state description D(S)
in the working memory, which can be processed    also incorporates information about the cooker,
                                        8064

## Страница 13

which is central to the gameplay strategy. Specifi-
cally, for each cooker i, D(S) includes the number
of onions ni currently in the pot.  Additionally,
D(S) provides the operational state of the cooker,
denoted as CookerStatei, which can be either "Off"
or "On". Lastly, the current condition of the soup
in the cooker is represented by SoupStatei, which
can take one of the following values: "Cooking",
"Cooked", or "Not Started". Thus, the information
for cooker ci is formatted as: “ci has ni onions. ci
is CookerStatei. Soup in ci is SoupStatei.”
Kitchen Counter Information  The state descrip-
tion D(S) includes information about kitchen coun-
ters, which are primarily used for temporary object
storage. Specifically, D(S) identifies the closest
empty kitchen counter kempty and the set Kfilled of
all counters currently holding an object.

Shared Counter Information  Shared counters
serve as specialized kitchen counters for object
transfer between agents. For each shared counter
i, D(S) includes the status for si, as “s0 is empty”
or “s1 contains onion,” to offer a complete environ-
mental overview. Unlike kitchen counters, where
only the closest empty counter is mentioned, all
empty shared counters are mentioned.



<Inventory>: I am holding onion. Bob is holding nothing.

<My Location Information>: o0 is 0 units away. o1 is 1 units
      away. p0 is 3 units away. c0 is 6 units away blocked by
      Bob. c1 is 7 units away. d0 is 4 units away. s0 is 1
      units away. s1 is 0 units away. s2 is 1 units away. s3
      in 2 units away. Closest empty kitchen counter k12 is 1
      units away.

<Bob's Location Information>: o0 is blocked by Alice. o1 is 7
      units away. p0 is 3 units away. c0 is 0 units away. c1
      is 1 units away. d0 is 4 units away. s0 is 1 units away.
       s1 is 0 units away. s2 is 1 units away. s3 in 2 units
      away.

<Environment Details>: c0 contains 1 out of 3 onions. c0 is
      off. soup in c0 is not cooking. c1 contains 0 out of 3
      onions. c1 is off. soup in c1 is not cooking.

Available Actions: [place onion in c0, place onion in c1.,
      place onion on s0., place onion on s1., place onion on
      s2, place onion on s3., place onion on k12., wait., move
       away.]





                                        8065

## Страница 14

B  Hanabi Implementation Details           B.1  Game Description
                                We structure the game description of Hanabi intoHanabi is a card game in which all players are on
                                                     the overall objective, and the rules of the game.the same team. The deck is made up of cards num-
bered 1 through 5, further divided into five different
colors. Players are working together to create these     The- ThecardgamegameusesHanabia 50-cardhas thedeck,followingdivided rules:into five colours (red
numbered sequences (1 through 5) for each of the            (R), green (G), blue (B), yellow (Y), white (W)). Each
five colors. Each card played provides 1 point, and           colorthree has1's, cardstwo 2's,of rankstwo 3's,1 to two5. Each4's, colorone 5.has with
the goal is to obtain all 25 points (5 colors with 5     - Playersstackhavestartsto createwith a stacksRank 1 ofcardeachandcolor.goes upEachonecolorby one
cards each) by completing the sequence for each           in ascending order up to Rank 5.  (e.g. Red Stack should
                                                                          go from R1 -> R2 -> R3 -> R4 -> R5). A card can only be
color. The three actions a player can take include            played if it is the next in the incremental sequence
playing a card, discarding a card, and giving a hint     - Playersfor itscan coloronly seestack.the other's hand, not their own.
(reveal) to a teammate. The challenge is that play-    - Players have plausible knowledge of their cards based on                                                                         previously provided hints by the other player
ers cannot see their own cards. They may, however,    - They can either play a card, give a reveal, or discard a
see the cards that are in the hands of their team-    - Playerscard.can only chose an action from the Available Legal
mate(s). This is where hints (reveals) come into     ***Actions:***Actions.
play. Players are able to figure out which cards     1. Reveal (Clue): Spend a reveal token to reveal cards with a
should be played through the reveal mechanism.          particularcards of thatcolorcoloror rank.in partner'sRevealinghand.a colorRevealingrevealsa rankall
You can hint (reveal) a teammate about a color or           revealsgame startsall cardswith 8withrevealthattokens.rank inIf partner'sno token left,hand. noThe
number in their hand, and this will point out to           more reveals can be given.
                                                                    2. Discard: Discard a card to regain a reveal token and draw a
them all cards in their hand that have this color or            new card.
number. The team starts with 8 reveal tokens but     3. Playstack,a Card:it Ifsucceeds.a card playedSuccessfollowsof ranksequence5 card inin anyits stackcolor
can recover used tokens when discarding a card            gives an additional reveal token. Failure discards the                                                                         card, and loses a life. Playing a card you are unsure
or upon the completion of a stack. Playing a card           about is risky as it costs a life and you have only 3
carries a risk because the team loses completely          lives.next cardBeforein theplayingsequencea cardfor makethat surestack.that it's the
if three incorrect cards are played. Further, an in-    ***The- All fivegame stacksends when:***are completed. 25 Points.
correctly played card gets sent to the discard pile.    - Three lives have been lost. 0 Points no matter how many
Each number of a particular color only has so many          cards have been placed in the stack.
copies, so if, for example, the last copy of a green 3     - Afterhasthehadlasta finalcard turn.from theSum decktotalisofdrawnthe topand cardeach ranksplayerof
is lost, then the team loses out on not only playing            each color stack.
                                                                    I am Alice, playing the card game Hanabi with my partner Bob.
the green 3 but also the green 4 and 5. This is the
risk of playing or discarding. With these risks, and     At eachinformationtime step ofI willthe game.provideI willyou withalso theproviderelevantyou with
since reveal tokens are scarce, players ideally try to           the legal action, help me select the best next action.                                                                         Remember I am playing as Alice. Format your response as
make assumptions about implicit information that           Explanation: <brief explanation for selecting the move>\
a reveal may offer, and, ideally, the team converges           nAction:<selectedit?               move>. Do not say anything else. Got
to particular conventions. Implicit communication,
collaboration, and memory are key.





                                        8066

## Страница 15

B.2  State Description
The state description includes the current Stack S,
the player’s knowledge of their cards K (updated
based on clues), the partner agent’s cards C, the
partner agent’s knowledge of their cards K′ (up-
dated based on previous clues), each card in the
discard pile di, the remaining Life Tokens l, and re-
veal tokens r and the remaining Deck Size D. We
also precalculate the next card that goes on each
stack since LLMs frequently fail to count which
card should go next on each stack.



It is currently My (Alice) turn.
Current Stacks:
Red - Red 5, Yellow - Yellow 4, Green - Green 1, White - White
       1, Blue - Blue 3
My cards based on my knowledge:
Card 0 could be: [Red, Yellow, Green, Blue] [1, 2, 3]
Card 1 could be: [Yellow, White, Blue] [1, 2, 3]
Card 2 could be: [Red] [2]
Card 3 could be: [Yellow, White, Blue] [1]
Card 4 could be: [Yellow, White, Blue] [1]
I can see Bob's Cards are:
[Card 0: Green 1]
[Card 1: Green 2]
[Card 2: Green 4]
[Card 3: White 4]
[Card 4: Yellow 1]
Bob's Knowledge about his cards:
Bob believes his Card 0 could be: [Yellow, Green, White, Blue]
       [1, 2, 4]
Bob believes his Card 1 could be: [Green, White] [1, 2, 4]
Bob believes his Card 2 could be: [Yellow, Green] [1, 2, 3, 4]
Bob believes his Card 3 could be: [Yellow, Green, White] [1, 2,
       3, 4]
Bob believes his Card 4 could be: [Yellow, Green] [1, 2, 4]
Remaining Reveal Tokens: 1
Remaining Lives: 1
Deck Size: 3
The discard pile is: [Red 4, Red 3, Red 1, Red 1, Yellow 5,
      Yellow 2, Yellow 4, Green 3, Green 2, Green 4, Green 3,
      Green 1, Green 5, Blue 5, Blue 3, Blue 4, Blue 4, Blue 1,
       White 4, White 3, White 2, White 5, White 3]
My Action History: [Discard Card 4, Play Card 0, Reveal Bob's
      Rank 3 Cards, Discard Card 0, Play Card 4]
The next playable cards for each stack are:
Red Stack is Full.
Only Yellow 5 can be played on Yellow Stack
Only Green 2 can be played on Green Stack
Only White 2 can be played on White Stack
Only Blue 4 can be played on Blue Stack

Available Actions:
A. Reveal Bob's Yellow color cards
B. Reveal Bob's Green color cards
C. Reveal Bob's White color cards
D. Reveal Bob's rank 1 cards
E. Reveal Bob's rank 2 cards
F. Reveal Bob's rank 4 cards
G. Play my Card 0
H. Play my Card 1
I. Play my Card 2
J. Play my Card 3
K. Play my Card 4
L. Discard my Card 0
M. Discard my Card 1
N. Discard my Card 2
O. Discard my Card 3
P. Discard my Card 4





                                        8067

## Страница 16

C  Examples of prompts of LLMs used in    C.4  Ablation on Theory of Mind Reasoning
    the Agent framework                       and Verification Steps
C.1  Hanabi LLM Prompt
                                                Method                 Score       Bomb Rate
                                          ToM + GPT-4-turbo + V   13.33   0.88      0.00The card game Hanabi has the following rules:                             ±                                                          GPT-4-turbo + V         10.33   0.88       0.00    {self.rules}                                           ±
I am {self.player_names[self.player_id]}, playing the card         GPT-4-turbo             4.33 ± 0.67        1.00
game Hanabi with {self.player_names[1 - self.player_id]}.
At   each time             step                  I                    will provide                                 you with                                          the                                              relevant
information            of               the                   game.                         I will also                                     provide                                             you                                                 with the        Table 6: Ablation study of LLM agents on Hanabi Chal-
legal action, help me select the best next action.              lenge (w.  GPT-4-turbo). Answer Verification (AV)
Remember         I am              playing                      as {self.player_names[self.player_id]}.     markedly enhances overall performance by ensuringFormat your            response                     as
Explanation: <brief explanation for selecting the move>            that actions that make incorrect assumptions are filtered
Action:<selected                 move>.
Do not say anything                    else. Got it?                               out. The explicit Theory of Mind (ToM) reasoning
                                                       provides further improvements by directly interpreting
                                                          partner clues and requirements.
C.2  Prompt for Theory of Mind Reasoning
      step



The card game Hanabi has the following rules:
{self.rules}
I am {self.player_names[self.player_id]}, playing the card
      game Hanabi with {self.player_names[1-self.player_id]}.
You are a Theory of Mind inference agent for our game. You
      will be provided with my partner's selected action and
      my latest state information after my partner took their
      action. You will provide me with two things: 1.  An
      explanation for my partner's previous action along with
      their intention and implicit communication. 2. What is
      the best information for me to give my partner based on
      their knowledge?
Format your response as:
Partner Action Explanation:<1 sentence explanation of partner
      action>
Clue Suggestion:<What information (specify rank or color)
      should I reveal to my partner based on their knowledge>.


C.3  Prompt for Answer Verification Step



You are an action verification agent for games. I will provide
you with an action and you need to check whether the action
satisfies the criteria:
1. Rule Following: It follows to the rules of the game.
2. Safety: It won't lead to the game ending immediately.
Think about the action, the current state of the stack and the
available lives and reveal tokens.
End you response with "Verification: Okay" if selected action
follows ***both*** criteria and "Verification: Not Okay"
otherwise. Restrict your response to 4-5 sentences.





                                        8068

## Страница 17

D  Generating Questions for                D.2  Theory of Mind Reasoning Questions
   CoordinationQA                          There are two primary question types in Hanabi for
                                  ToM Reasoning questions. In the first type, we askD.1  Environment Comprehension Questions
                                                      the LLM about what information the partner agent
The Environment Comprehension (EC) questions                                                   needs, while in the second type, we ask it to make
are indirect formulations regarding spatial aspects                                                      inferences about the partner agent’s last action. For
of the layout. In order for an agent to correctly                                                                all games apart from Hanabi, the ToM questions
answer an EC question, they must have an under-                                                ask the models to predict the next intended action
standing of the dynamic details of the current state                                                    of the partner agent
and the rules of the game and exhibit spatial aware-
ness. As such, when creating the EC questions, we    D.2.1  Hanabi Question Type-1
carefully comb through a given scenario in search     It is currently My (Alice) turn. Current Stacks: Red - Red 0,
of salient points to probe an agent’s understanding           Yellow - Yellow 0, Green - Green 0, White - White 0,
                                                                         Blue - Blue 0
of the given environment. Some examples include:    My cards based on my knowledge:
                                                                    Card 0 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3, 4,
<Inventory>: I am holding nothing. Bob is holding onion.                  5]
<My location information:> o0 is 1 units away. o1 is 0 units       Card 1 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3, 4,
      away. p0 is 1 units away. d0 is inaccessible. c0 is                 5]
      inaccessible. c1 is inaccessible. s0 is 1 units away. s1      Card 2 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3, 4,
       is 0 units away. s2 is 1 units away.                               5]
<Bob's location information>: o0 is inaccessible. o1 is            Card 3 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3, 4,
      inaccessible. p0 is inaccessible. d0 is 2 units away. c0            5]
       is 0 units away. c1 is 0 units away. s0 is 0 units away.     Card 4 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3, 4,
       s1 is 1 units away. s2 is 2 units away.                            5]
<Environment Details>: c0 contains 3 out of 3 onions. c0 is on.    I can see Bob's Cards are:
       soup in c0 is still cooking. c1 contains 0 out of 3          [Card 0: Red 3]
      onions. c1 is off. soup in c1 is not cooking. s0 is           [Card 1: White 1]
      empty. s1 contains onion. s2 is empty. Closest empty          [Card 2: Green 3]
      kitchen counter k1 is 1 units away.                           [Card 3: White 4]
                                                                    [Card 4: Blue 4]
How many onions are still needed to fill up c0?                    Bob's Knowledge about his cards:
Available Answers:                                                 Bob believes his Card 0 could be: [Red, Yellow, Green, White,
A. 4 or more                                                             Blue] [1, 2, 3, 4, 5]
B. 3                                                               Bob believes his Card 1 could be: [Red, Yellow, Green, White,
C. 2                                                                     Blue] [1, 2, 3, 4, 5]
D. 1                                                               Bob believes his Card 2 could be: [Red, Yellow, Green, White,
E. 0                                                                     Blue] [1, 2, 3, 4, 5]
                                                                    Bob believes his Card 3 could be: [Red, Yellow, Green, White,
                                                                         Blue] [1, 2, 3, 4, 5]
My name is Alice. I am in room 1. Bob is in room 6. I was          Bob believes his Card 4 could be: [Red, Yellow, Green, White,
      fixing the generator and there is only one more fix                Blue] [1, 2, 3, 4, 5]
      needed, which could be done before getting caught.            Remaining Reveal Tokens: 8
      Currently, we have information that the killer will move      Remaining Lives: 3
       to the room 1 after this turn. Generator in room 1           Deck Size: 40
      still needs 1 fix. Generator in room 2 is fixed. The          The discard pile is: []
      exit gate is closed.                                          My Action History: []
                                                                    The next playable cards for each stack are:
If I fix generator 1, is Bob in a position to escape?              Only Red 1 can be played on Red Stack
                                                                    Only Yellow 1 can be played on Yellow Stack
Available Answers:                                                 Only Green 1 can be played on Green Stack
A. Yes, he's only one room away from the gate when it opens.       Only White 1 can be played on White Stack
B. No, the killer is blocking his path to the exit gate.           Only Blue 1 can be played on Blue Stack
C. No, we stil need to fix generator 2.





                                        8069

## Страница 18

What information about his cards should I reveal to my partner    D.2.3  Other Games
       so that he knows to play a card on his turn?
Available Answers:                                                 <Inventory>: I am holding onion. Bob is holding nothing.
A. Reveal Bob's Red color cards.
B. Reveal Bob's White color cards.                                 <My Location Information>: o0 is 0 units away. o1 is 1 units
C. Reveal Bob's Green color cards.                                       away. p0 is 3 units away. c0 is 6 units away blocked by
D. Reveal Bob's Blue color cards.                                        Bob. c1 is 7 units away. d0 is 4 units away. s0 is 1
E. Reveal Bob's rank 1 cards.                                            units away. s1 is 0 units away. s2 is 1 units away. s3
F. Reveal Bob's rank 3 cards.                                            in 2 units away. Closest empty kitchen counter k12 is 1
G. Reveal Bob's rank 4 cards.                                            units away.

                                                                   <Bob's Location Information>: o0 is blocked by Alice. o1 is 7
D.2.2  Hanabi Question Type-2                               unitsis 1 unitsaway.away.p0 is d03 unitsis 4 unitsaway. away.c0 is s00 unitsis 1 unitsaway. away.c1
                                                                          s1 is 0 units away. s2 is 1 units away. s3 in 2 units
It is currently My (Alice) turn. Current Stacks: Red - Red 1,            away.
      Yellow - Yellow 2, Green - Green 1, White - White 4,
      Blue - Blue 3                                                 <Environment Details>: c0 contains 1 out of 3 onions. c0 is
My cards based on my knowledge:                                          off. soup in c0 is not cooking. c1 contains 0 out of 3
Card 0 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3, 4,          onions. c1 is off. soup in c1 is not cooking.
       5]
Card 1 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3,
      5]                                                            What action does my partner intend to take?
Card 2 could be: [Red, Yellow, Green, White, Blue] [1, 2, 3,       Available Actions:
      5]                                                            A. pick up onion from o0.
Card 3 could be: [Red, Yellow, Green, Blue] [3]                    B. pick up onion from o1.
Card 4 could be: [White] [5]                                       C. pick up plate from p0.
I can see Bob's Cards are:                                         D. pick up onion from s0.
[Card 0: Yellow 1]                                                 E. pick up onion from s1.
[Card 1: Blue 1]                                                   F. pick up onion from s2.
[Card 2: Blue 1]                                                   G. pick up onion from s3.
[Card 3: Red 3]                                                    H. pick up plate from s0.
[Card 4: Green 3]                                                  I. pick up plate from s1.
Bob's Knowledge about his cards:                                   J. pick up plate from s2.
Bob believes his Card 0 could be: [Red, Yellow, Green, White,      K. pick up plate from s3.
      Blue] [1, 2, 3, 4, 5]                                         L. wait.
Bob believes his Card 1 could be: [Red, Yellow, Green, White,      M. move away.
      Blue] [1, 2, 3, 4, 5]
Bob believes his Card 2 could be: [Red, Yellow, Green, White,
      Blue] [1, 2, 3, 4, 5]
Bob believes his Card 4 could be: [Red, Yellow, Green, Blue]     D.3  Joint Planning Questions
      [3]
Remaining Reveal Tokens: 1                                 Joint planning questions are effectively the same
Remaining          Lives:
                 2                                     questions that the LLM solves when they are partDeck Size:           25
The discard            pile                 is: [Yellow 4, Blue 2, Blue 3, White 2, White    of an agentic framework. For each scenario, we       3, White                4]
My Action History: [Reveal Bob's Rank 2 Cards, Reveal Bob's      ask the LLM to answer the question: "What is the
      Rank 5 Cards, Reveal Bob's Rank 2 Cards, Play Card 1,
      Reveal Bob's Rank 1 Cards,  Discard Card 0, Reveal Bob's     best next action?".
       Rank 3, Reveal Bob's Rank 2, Reveal Bob's Rank 2 Cards,                                                                   I (Alice) am in Room 6. Bob is in Room 1. Thief is in Room 2.
       Reveal Bob's Rank 1 Cards, Discard Card 3, Reveal Bob's                                                                   Door between Room 1 and 2 is closed. Door between Room 3 and 4
       White Color Cards, Discard Card 1]                                                                          is closed.
The next playable cards for each stack are:
Only Red 2 can be played on Red Stack                                                                   What action should I take next?
Only Yellow 3 can be played on Yellow Stack                                                                   Available Actions:
Only Green 2 can be played on Green Stack                                                                   A. Move to Room 1
Only White 5 can be played on White Stack                                                                   B. Move to Room 5
Only Blue 4 can be played on Blue Stack                                                                   C. Move to Room 9
                                                                   D. Stay in current Room

What can I infer from my partner's previous action?
Available Answers:
A. I should Play Card 0
B. I should Play Card 1
C. I should Play Card 2
D. I should Play Card 3
E. I should Play Card 4
F. I should Discard Card 0
G. I should Discard Card 1
H. I should Discard Card 2
I. I should Discard Card 3
J. I should Discard Card 4





                                        8070

## Страница 19

E  CollabCapture and CollabEscape           sacrifice for a higher common payoff.
E.1  CollabCapture
CollabCapture places two agents in a set of inter-
connected rooms and doors. Their goal is to capture
an adversary within the smallest number of moves
possible. The adversary moves away from agents
in a greedy fashion, but the agents have the ability
to close and open doors while the adversary does
not. The doors are controlled by a corresponding
button that is in another location on the map. (See
Figure 5)
  CollabCapture contains one layout with four sce-
narios created by controlling the gate states (open/-
closed). This corresponds to cases where players
need to: 1. Pincer their opponent through coor-
dination 2. One agent needs to enable the other
agent by choosing not to chase the agent but rather
open the door to allow the other agent to capture
the adversary. 3. One agent needs to disable the ad-
versary by closing a door, allowing the other agent
to catch them. CollabCapture is based on the clas-
sic task of Pursuit Evasion from the perspective of
the pursuers. This is representative of a common-
payoff task as the only objective is capturing the
adversary with no mixed incentives (Akin to deliv-
eries in Overcooked, where all chefs get a common
payoff with no preference for the one making the
delivery).

E.2  CollabEscape
CollabEscape also places two agents in a set of
interconnected rooms and doors. Their goal in this
environment, however, is to escape an adversary
that is looking to catch them. The map has two
generators that power an exit gate, both of which
need to be fixed. Upon fixing both generators, the
players must then escape by reaching the exit gate.
Only one player needs to reach the exit gate in order
for them both to win. If the adversary catches either
of them, however, they both lose. (See Figure 6)
  In CollabEscape, we have one layout with two
scenarios created by varying the starting positions
of the two agents. Depending on their proximity
to the adversary/generators, players need to apply
strategies such as luring the adversary away from
the partner, choosing to continue fixing the genera-
tors while sacrificing for the partner’s safety, and
manipulating the movement of the adversary. This
is also representative of a common payoff task, as
players are commonly rewarded if any one of them
escapes, introducing roles of explicit assistance and
                                        8071

## Страница 20

Figure 5: Map layout for CollabCapture





Figure 6: Map layout for CollabEscape




             8072
