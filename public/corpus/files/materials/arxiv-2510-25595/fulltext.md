---
id: arxiv-2510-25595-text
type: material
title: Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry
work_id: arxiv-2510-25595
source_url: https://arxiv.org/html/2510.25595v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 11d5c73e7d8887f38e58e86fd76b891d5904b4bee7325f96eee1aaa526e313ee
---

> Источник: [https://arxiv.org/html/2510.25595v2](https://arxiv.org/html/2510.25595v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry

Run Peng
†
Affiliation: University of Michigan 
  
Ziqiao Ma
Affiliation: University of Michigan 
  
Amy Pang
Affiliation: University of Michigan 
  
Sikai Li
†
Affiliation: UNC, Chapel Hill 
  
Zhang Xi-Jia   Yingzhuo Yu   Cristian-Paul Bara   Joyce Chai
Affiliation: University of Michigan 
Affiliation: Georgia Tech 
Affiliation: Apple 
Affiliation: Robert Bosch SRL 
Affiliation: Babeş-Bolyai University

###### Abstract

Large language model (LLM) agents are increasingly used for goal-directed tasks, yet collaboration under asymmetric information remains underexplored. We adapt Einstein Puzzles into a tabletop game in which two agents hold complementary constraints and control different parts of the workspace. Solving each game requires agents to reason, communicate, and manipulate objects toward a shared goal. We fine-tune agents under four communicative action spaces and evaluate an environment-based reasoning verifier that filters candidate actions using physical affordances, communication history, and inferred constraints. In the strongest Llama 3.1 configuration, agents that can both provide and seek information achieve the highest success rate, while mismatched communication capabilities reduce performance. Verifier-assisted inference improves success rates across all evaluated action spaces. Some variants also achieve high success without communication, but their trajectories contain more rule-inconsistent actions and rejected placement attempts. In a human study with 30 participants, non-communicative agents require a similar number of steps as fully communicative agents but are rated as more confusing. These findings show that task success alone does not capture the quality of collaborative behavior and highlight the value of bidirectional communication and environment-derived verification. <https://github.com/Roihn/EinsteinPuzzles>

|  |
| --- |
|  |

## 1 Introduction

In recent years, there has been growing interest in Large Language Model (LLM) agents (e.g., Web-Agents) and their diverse applications ([Wang et al., 2024a](https://arxiv.org/html/2510.25595v2#bib.bib41)). While much of the current work focuses on action planning or goal completion in LLM agents ([Ahn et al., 2022](https://arxiv.org/html/2510.25595v2#bib.bib43); [Durante et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib45); [Song et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib44)) (e.g., based on natural language instructions), their ability to collaborate with one another toward a shared goal remains underexplored. This paper addresses this gap by studying LLM agents in the context of task collaboration, particularly under conditions of information asymmetry.

Information asymmetry is a fundamental and pervasive feature of human interaction. In daily life, we often possess different knowledge, perspectives, or intentions. We must reason about others’ knowledge and beliefs and coordinate our differences in order to collaborate ([Ma et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib1)). As LLM agents become increasingly integrated into real-world workflows — not just to perform tasks independently, but to act as human proxies and collaborators — it becomes essential to examine how well these agents can coordinate under asymmetric information, and what mechanisms might enhance their collaborative capabilities in such settings.

To this end, we adapt Einstein Puzzles ([Groza, 2021](https://arxiv.org/html/2510.25595v2#bib.bib40)), a classical logic problem, into a tabletop environment where two agents must solve spatial and relational constraints, despite having partial, asymmetric information. Using a fine-tuning–plus–verifier framework, we equip LLM agents with different communicative abilities (e.g., asking, sharing, or both) and study their collaborative behaviors under various configurations.

Beyond communication design, we investigate whether the environment can provide useful verification signals during inference. Our verifiers check physical affordances, communication validity, and consistency with the agent’s known constraints. It is training-free, lightweight, and broadly applicable across various environments. We examine whether this simple yet generalizable approach can greatly improve collaboration among LLM agents.

Our empirical results show that the effects of communication depend on the model and reasoning configuration. In the strongest Llama 3.1 setting, Provide & Seek achieves the highest success rate, while targeted seeking generally outperforms unprompted providing across matched settings. Mismatched communicative action spaces reduce collaboration performance. Verifier-assisted inference yields substantial gains and reduces rule-inconsistent and redundant actions. The human study further shows that similar task success and step counts can mask differences in interaction quality: participants report greater confusion with non-communicative agents than with fully communicative agents. Together, these findings motivate evaluating collaborative agents through both task outcomes and communication behavior.

## 2 Related work

![Refer to caption](https://arxiv.org/html/2510.25595v2/game_intro.png)


Figure 1: Illustration of our collaborative game. Each game features a final goal (top-left), where objects are assigned to specific goal bins (e.g. toy bear to top-left bin). Placement constraints are generated based on this final goal and are distributed to the two players. At the start, objects are randomly positioned in front of the players. Players must collaborate and communicate effectively to infer the final goal and accordingly complete the placement.

#### Collaboration among LLM Agents

The field of multi-agent coordination and communication has a long-established history ([Albrecht and Stone, 2018](https://arxiv.org/html/2510.25595v2#bib.bib3); [Gronauer and Diepold, 2022](https://arxiv.org/html/2510.25595v2#bib.bib5); [Stone and Veloso, 2000](https://arxiv.org/html/2510.25595v2#bib.bib2)), with applications increasingly extending to human-AI collaboration ([Carroll et al., 2019](https://arxiv.org/html/2510.25595v2#bib.bib7); [Puig et al., 2020](https://arxiv.org/html/2510.25595v2#bib.bib4)). Recently, multi-agent systems built upon Large Language Models (LLMs) ([Guo et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib12); [Tran et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib16)) have pushed the boundaries of collaborative intelligence in a wide range of downstream tasks, including collaborative coding ([Gao et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib20); [Hong et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib8); [Qian et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib15)), social simulation ([Li et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib9); [Wu et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib13); [Yang et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib21); [Zhou et al., 2024c](https://arxiv.org/html/2510.25595v2#bib.bib11)), and problem-solving ([Chen et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib29); [Qian et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib23); [Wang et al., 2024c](https://arxiv.org/html/2510.25595v2#bib.bib10); [Zhang et al., 2024a](https://arxiv.org/html/2510.25595v2#bib.bib6)).

However, most existing work focuses on settings with information transparency ([Chen et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib29); [Gao et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib20); [Li et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib9); [Wu et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib13); [Yang et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib21)), one-way communication ([Qian et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib23)), or information asymmetry within asymmetric role assignments ([Hong et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib8); [Qian et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib15); [Zhou et al., 2024c](https://arxiv.org/html/2510.25595v2#bib.bib11)). In contrast, this work centers on LLM agents operating under information asymmetry in symmetric, collaborative roles, and includes a human study to assess real-world human-AI interaction. [Liu et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib51) studied autonomous agents for collaborative tasks under information asymmetry, while there were no environments involved. As echoed in recent efforts ([Liu et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib51); [Zhou et al., 2024b](https://arxiv.org/html/2510.25595v2#bib.bib22)), addressing collaboration under information asymmetry—especially in human-AI contexts—remains a core challenge for LLM-based systems.

#### Test-time Compute in LLM

Recent works have demonstrated the effectiveness of leveraging additional computational resources at inference time to improve response quality in LLMs. One line of research introduces a verification model to evaluate the correctness and utility of generated responses. Typically, this involves sampling multiple responses from an LLM and applying a best-of-$n$ strategy ([Charniak and Johnson, 2005](https://arxiv.org/html/2510.25595v2#bib.bib33); [Cobbe et al., 2021](https://arxiv.org/html/2510.25595v2#bib.bib28)), where a verifier model selects the most appropriate response. Such approaches have been widely adopted across domains including mathematics ([Cobbe et al., 2021](https://arxiv.org/html/2510.25595v2#bib.bib28); [Lifshitz et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib42); [Lightman et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib26); [Wang et al., 2024b](https://arxiv.org/html/2510.25595v2#bib.bib31); [Yao et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib35)), code generation ([McAleese et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib34); [Wang et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib27)), and web navigation ([Koh et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib38); [Putta et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib39)). We refer readers to ([Guan et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib24); [Zhang et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib25)) for comprehensive reviews of verification-based methods.

While most existing approaches employ a separate value model, often another LLM, with ([Lifshitz et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib42); [Lightman et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib26); [McAleese et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib34); [Wang et al., 2025](https://arxiv.org/html/2510.25595v2#bib.bib27); [Wang et al., 2024b](https://arxiv.org/html/2510.25595v2#bib.bib31); [Zhang et al., 2024b](https://arxiv.org/html/2510.25595v2#bib.bib30); [Zhou et al., 2024a](https://arxiv.org/html/2510.25595v2#bib.bib37)) or without ([Yao et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib35); [Yu et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib36)) further training, we propose an alternative verification mechanism that directly leverages environmental feedback. In interactive tasks within simulated environments, the environment itself provides fine-grained, up-to-date, and objective signals about task progression and action validity. This enables a training-free, compute-efficient form of verification that naturally integrates with agent decision-making.

## 3 Collaboration Under Information Asymmetry

### 3.1 Understanding Einstein Puzzles on the tabletop setup

Einstein Puzzles is a logical game requiring deductive reasoning and constraint satisfaction. We modify it into a collaborative game in which two agents work together to place a set of objects into designated bins. Each object has a target bin as its destination, but the information about these destinations is split between the two agents. Importantly, agents are unaware of which pieces of information their partner possesses. To succeed, agents must engage in rich communication and apply strategic reasoning to solve the task collaboratively.

The setup consists of a rectangular table with two collaborators sitting on opposite sides of the table (See Figure [1](https://arxiv.org/html/2510.25595v2#S2.F1 "Figure 1 ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")). The table is split into three regions: a region immediately in front of each collaborator and a common area in the center. Each collaborator can only reach the area directly in front of them and the common area in the center. They can also each reach the two corner bins on either side of the area in front of them, totaling four destination bins. In the beginning, several objects are distributed between the two players’ bins, so they are exclusively reachable by one of the collaborators. No objects start in any bins.

We describe the task as a distributed constraint satisfaction problem. A goal configuration is defined, which is where the objects should be placed, and can be described with a set of constraints. There are four types of constraints that describe the relationship of a pair of objects or between an object and a bin. Given a pair of objects, it must either be:

- •

  in the same bin: both objects have the same destination.
- •

  in the same column: the two objects must end up in bins on either exclusive side of the table but on the same side, left or right, from either collaborator’s perspective.
- •

  in the same row: both objects must end up on one of the collaborator’s exclusive zones but in bins on opposite sides, left or right.
- •

  or on the same diagonal: the two objects must end up in opposite areas and opposite sides.

The exhaustive set of rules between all pairs of objects is overly descriptive. We select a random, minimal subset of these rules (denoted as $\mathcal{C}$). A minimal subset $\mathcal{C}$ must satisfy the following:

- •

  Eliminating any rule will describe more than one final configuration.
- •

  Moving any object from the final configuration will violate at least one rule.

An additional starting constraint is given, which grounds one of the objects to a specific bin. Together, the minimal set of object pair rules and the one object-to-bin grounding uniquely describe the goal configuration.

The set of constraints that uniquely determines the final placement of the objects is then divided between the two players (denoted as $\mathcal{C}\_{1}$ and $\mathcal{C}\_{2}$), creating information asymmetry. This distribution ensures that neither player can complete the task independently, but together, they possess all the necessary information to succeed, i.e., $\mathcal{C}\_{1}\cup\mathcal{C}\_{2}=\mathcal{C}$.
Coupled with the fact that some objects must end on the opposite side of the table, this constitutes the disparity in knowledge and skills as described in ([Bara et al., 2021](https://arxiv.org/html/2510.25595v2#bib.bib14)).

The two players take turns, each consisting of a single move. A move can be placing an object into an available destination bin or the center of the table, sharing a piece of information, or requesting information from their partner. Task performance is measured by the number of moves taken to complete the task. Since both object placement and information exchange count as a move, this scoring system encourages players to communicate concisely. The players’ objective is to achieve the final configuration using the least number of moves within the set of given constraints.

### 3.2 Information Providing & Seeking

We study two communicative actions in collaborative contexts with information asymmetry: information seeking and information providing. We want to investigate whether LLM agents are able to exchange necessary information with their partners, as well as perform collaborative reasoning for task completion. To systematically analyze the role of communication actions in this process, we design four action space configurations for communication as below:

1. 1.

   Information Providing Only: agents are allowed to proactively share their knowledge of constraints with their partners, but they cannot ask for this information.
2. 2.

   Information Seeking Only: agents can ask about constraints of specific objects with their partners. They are allowed to share a constraint only when their partner first asks about an object involved in it. In other words, agents cannot initiate the information providing.
3. 3.

   Information Providing & Seeking: agents can both share and ask freely.
4. 4.

   No Information Exchange: no communicative actions are enabled. Agents can only choose to move an object or to pass the turn. Since neither player has complete knowledge about the placement constraints, this configuration inevitably involves random guessing for objects that may have goal bins that are not deducible.

We enabled LLMs to complete the games under these different action space configurations.
To be specific, we applied supervised fine-tuning (SFT) on several well-known open-source models, including
Meta-Llama-3-8B-Instruct ([AI@Meta, 2024](https://arxiv.org/html/2510.25595v2#bib.bib17)), Llama3.1-8B-Instruct ([Grattafiori et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib18)) and Qwen2.5-7B-Instruct ([Qwen-Team, 2024](https://arxiv.org/html/2510.25595v2#bib.bib19)) models.
To prepare data for fine-tuning, we designed a planner to generate solutions under different configurations of action space. Please refer to the appendix for the details of planner design.
We varied the number of objects per game and collected trajectories for games with 4, 5, and 6 objects, totaling 250, 500, and 500 games, respectively.
For each game, we generated five distinct solution trajectories (both optimal and near-optimal solutions), creating a large pool from which we sampled 1,000 trajectories for fine-tuning.
Each trajectory averages around 10 steps, resulting in approximately 10,000 training samples in the chat form.
We evaluated the models on 300 unseen games (100 games for each object count) and reported average performance across them. We also evaluated models with and without chain-of-thought (CoT) reasoning ([Wei et al., 2022](https://arxiv.org/html/2510.25595v2#bib.bib32)).
The reasoning traces for the training data are generated using GPT-4o. Examples of the reasoning traces can be found in the game play section of Figure [1](https://arxiv.org/html/2510.25595v2#S2.F1 "Figure 1 ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"). A full example of a game play can be found in Appendix [A](https://arxiv.org/html/2510.25595v2#A1 "Appendix A Example of Game Play ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").

## 4 Environment-based Verifier

Inspired by the trial-and-error paradigm, we draw an analogy to how agents refine decisions through iterative interaction with their environment. Rather than training a dedicated verifier, we directly leverage environment-provided feedback as a source of verification during inference.
We evaluate whether this lightweight, training-free approach is sufficient to support LLM agents in collaborative reasoning tasks under information asymmetry.

We design a reasoning verifier based on environment feedback. Firstly, it is capable to examine the generated action with the game rules (e.g. physical affordance) and previous communication (e.g. redundant information sharing). Secondly, as a strategy-driven game, we implement a graph expansion algorithm to enhance agents’ reasoning ability. It treats objects and bins as nodes and constraints as edges, and infers new constraints by combining existing ones. It is expanded iteratively using the transitivity of adjacent edges until no new constraints emerge. For example, objects A and C can be inferred to be on the same row if both A and B, and B and C, are known to be on the same row.
This enables the verifier to assess whether a proposed action aligns well with the current knowledge, and avoids unnecessary trials.

Further, we tested several alternatives of environment-based verifiers, and discussed their effectiveness and potential generality in Appendix [C](https://arxiv.org/html/2510.25595v2#A3 "Appendix C Ablation on Environment-Based Verifiers ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").

## 5 Experiments and Results

We conduct extensive experiments to evaluate the performance of language models in reasoning and communication under information asymmetry. Our experiments address four key research questions:

- •

  RQ1: Collaboration under Varying Communicative Action Space. How do agents collaborate under information asymmetry when equipped with different communicative actions?
- •

  RQ2: Effectiveness of Environment-Based Verification. To what extent can environment-based verification enhance the performance?
- •

  RQ3: Collaboration under Mismatched Communicative Action Space. What happens when agents with mismatched communication capabilities are paired together?
- •

  RQ4: Human Preferences Toward Different Communication Behaviors. While agents may perform well in self-play, do these behaviors align with human preferences in collaboration?

### 5.1 Experiment Setup

To systematically investigate our research questions, we design a series of experiments to investigate specific aspects of the collaboration:

- •

  Exp1: Collaboration with Different Communicative Action Spaces (RQ1) We evaluated both closed-source language models via API calls and open-source models with supervised fine-tuning (SFT). We deploy the same model (with the same action space) to perform self-play in the game with 4, 5, and 6 objects. This setting allows direct comparison of collaboration with different communicative action space.
- •

  Exp2: Environment-Based Verifier (RQ2) We augment the base models with an environment-based verifier, which provides binary feedback indicating whether each sampled action is valid. At each decision step, we sample 4 candidate responses using temperature=0.2 and top-p=0.9, and apply the verifier to filter out invalid actions, selecting the first valid one as the final output. This setup enables a direct comparison of model performance with and without the verifier.
- •

  Exp3: Collaboration with Mismatched Action Spaces (RQ3) We select the well-performing models from those action spaces (Llama3.1-8B without CoT for no information exchange, and Llama3.1-8B with CoT for the rest), equipped with reasoning verifier, and let them play with each other. This setting further reveals the behaviors of collaboration between agents with different communication capabilities.
- •

  Exp4: Human Performance (RQ4) Once we identified the most effective configuration of communicative action space for collaborative reasoning among LLM agents, we further examined whether such models are also preferred by human users.
  We recruited 32 participants to interact with four variants of the best-performing model. All variants used the reasoning verifier but differed in their communicative action spaces: None, Provide Only, Seek Only, and Provide & Seek. We adopted a within-participant design crossing three game configurations (4, 6, and 8 objects) with the four model variants. Each participant completed 12 games, one under each condition, without being informed of the active variant. Each specific game-instance and model-variant pairing was evaluated by four participants. After excluding two participants who did not meet the performance threshold, we got 360 sessions in total.
  To complement quantitative metrics, we also collected qualitative feedback from participants after each game using the following three questions:

  1. 1.

     Do you believe the information communicated to you by the bot was useful?
  2. 2.

     Do you believe the bot effectively used the information you shared?
  3. 3.

     Do you feel confused about the bot’s behavior?

  These questions allowed us to assess the perceived helpfulness, responsiveness, and clarity of the model’s behavior from a human-centered perspective.

Evaluation Metrics We employ complementary metrics to assess both effectiveness and efficiency. For effectiveness, we report the Success Rate (SR) and subgoal success rate (Sub.R) at the first attempt (Pass@1). SR measures the percentage of games successfully completed within a limited number of steps, while Sub.R reflects partial progress by capturing the proportion of objects correctly placed, even when the full game is not successfully completed.
For efficiency, we track the number of steps taken to complete each game and compare it to the optimal solution calculated by our planner. We then compute the Step Ratio (StepR), defined as the ratio of the number of executed steps to the number of steps in the optimal solution.
When a verifier is applied, we additionally report the correction rate (Corr.R), indicating the proportion of responses corrected by the verifier. We report standard error for each metric.

### 5.2 Result Analysis

#### Effects of Communicative Action Space (RQ1)

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | No Verifier | | | With Reasoning Verifier | | | |
| Model | SR↑(%) | Sub.R↑(%) | StepR↓ | SR↑(%) | Sub.R↑(%) | StepR↓ | Corr.R(%) |
| Information Providing & Seeking | | | | | | | |
| GPT4o CoT | 51.00$\pm$2.89 | 76.73$\pm$1.64 | 1.92x$\pm$0.04x | 80.00 (+29.00)$\pm$2.31 | 91.34$\pm$1.17 | 1.65x$\pm$0.03x | 17.42$\pm$0.57 |
| Llama3-8B | 13.67$\pm$1.98 | 60.04$\pm$1.37 | 1.47x$\pm$0.08x | 32.33 (+18.66)$\pm$2.70 | 73.28$\pm$1.36 | 1.40x$\pm$0.05x | 6.36$\pm$0.43 |
| Llama3.1-8B | 27.33$\pm$2.57 | 68.74$\pm$1.44 | 1.50x$\pm$0.05x | 53.00 (+25.67)$\pm$2.88 | 81.05$\pm$1.40 | 1.36x$\pm$0.03x | 7.19$\pm$0.44 |
| Qwen2.5-7B | 27.00$\pm$2.56 | 72.31$\pm$1.26 | 1.56x$\pm$0.06x | 47.00 (+20.00)$\pm$2.88 | 83.96$\pm$1.05 | 1.45x$\pm$0.04x | 8.34$\pm$0.42 |
| Llama3-8B CoT | 29.67$\pm$2.64 | 62.51$\pm$1.75 | 1.94x$\pm$0.09x | 70.00 (+40.33)$\pm$2.65 | 87.26$\pm$1.34 | 1.61x$\pm$0.04x | 14.28$\pm$0.58 |
| Llama3.1-8B CoT | 58.67$\pm$2.84 | 79.39$\pm$1.64 | 1.87x$\pm$0.05x | 89.33 (+30.66)$\pm$1.78 | 95.64$\pm$0.81 | 1.52x$\pm$0.03x | 14.38$\pm$0.59 |
| Qwen2.5-7B CoT | 44.67$\pm$2.87 | 74.31$\pm$1.66 | 1.91x$\pm$0.07x | 81.00 (+36.33)$\pm$2.26 | 92.53$\pm$1.03 | 1.61x$\pm$0.03x | 14.59$\pm$0.54 |
| Information Providing Only | | | | | | | |
| Llama3-8B | 9.33$\pm$1.68 | 62.46$\pm$1.19 | 1.26x$\pm$0.08x | 27.00 (+17.67)$\pm$2.56 | 74.81$\pm$1.23 | 1.45x$\pm$0.08x | 6.43$\pm$0.38 |
| Llama3.1-8B | 26.00$\pm$2.53 | 69.71$\pm$1.40 | 1.56x$\pm$0.06x | 40.33 (+14.33)$\pm$2.83 | 80.43$\pm$1.19 | 1.43x$\pm$0.05x | 6.38$\pm$0.39 |
| Qwen2.5-7B | 8.00$\pm$1.57 | 51.96$\pm$1.30 | 1.12x$\pm$0.02x | 24.67 (+16.67)$\pm$2.49 | 67.53$\pm$1.43 | 1.17x$\pm$0.04x | 6.00$\pm$0.40 |
| Llama3-8B CoT | 26.00$\pm$2.53 | 60.06$\pm$1.76 | 1.62x$\pm$0.10x | 56.00 (+30.00)$\pm$2.87 | 80.27$\pm$1.54 | 1.56x$\pm$0.05x | 10.70$\pm$0.56 |
| Llama3.1-8B CoT | 37.00$\pm$2.79 | 68.34$\pm$1.72 | 1.70x$\pm$0.07x | 65.33 (+28.33)$\pm$2.75 | 84.25$\pm$1.44 | 1.52x$\pm$0.04x | 11.54$\pm$0.56 |
| Qwen2.5-7B CoT | 17.00$\pm$2.17 | 52.61$\pm$1.69 | 1.81x$\pm$0.10x | 38.00 (+21.00)$\pm$2.80 | 70.40$\pm$1.69 | 1.59x$\pm$0.06x | 11.01$\pm$0.53 |
| Information Seeking Only | | | | | | | |
| Llama3-8B | 17.67$\pm$2.20 | 63.70$\pm$1.39 | 1.21x$\pm$0.05x | 37.33 (+19.66)$\pm$2.79 | 76.87$\pm$1.30 | 1.28x$\pm$0.04x | 7.61$\pm$0.47 |
| Llama3.1-8B | 33.67$\pm$2.73 | 74.76$\pm$1.39 | 1.50x$\pm$0.05x | 52.00 (+18.33)$\pm$2.88 | 84.07$\pm$1.19 | 1.37x$\pm$0.03x | 6.41$\pm$0.36 |
| Qwen2.5-7B | 14.00$\pm$2.00 | 60.06$\pm$1.29 | 1.06x$\pm$0.03x | 24.33 (+10.33)$\pm$2.48 | 70.18$\pm$1.29 | 1.14x$\pm$0.04x | 3.68$\pm$0.28 |
| Llama3-8B CoT | 52.33$\pm$2.88 | 77.91$\pm$1.64 | 1.35x$\pm$0.03x | 82.33 (+30.00)$\pm$2.20 | 91.84$\pm$1.15 | 1.28x$\pm$0.03x | 10.15$\pm$0.47 |
| Llama3.1-8B CoT | 56.67$\pm$2.86 | 81.14$\pm$1.45 | 1.42x$\pm$0.04x | 82.67 (+26.00)$\pm$2.19 | 93.42$\pm$0.93 | 1.25x$\pm$0.02x | 10.59$\pm$0.47 |
| Qwen2.5-7B CoT | 39.33$\pm$2.82 | 69.57$\pm$1.77 | 1.59x$\pm$0.05x | 76.67 (+37.34)$\pm$2.44 | 89.90$\pm$1.27 | 1.35x$\pm$0.03x | 14.44$\pm$0.53 |
| No Information Exchange | | | | | | | |
| Llama3-8B | 81.33$\pm$2.25 | 92.79$\pm$0.98 | 1.88x$\pm$0.04x | 97.67 (+16.34)$\pm$0.87 | 99.39$\pm$0.25 | 1.61x$\pm$0.03x | 11.66$\pm$0.57 |
| Llama3.1-8B | 84.67$\pm$2.08 | 96.13$\pm$0.62 | 2.08x$\pm$0.04x | 94.33   (+9.66)$\pm$1.33 | 98.50$\pm$0.42 | 1.68x$\pm$0.03x | 11.09$\pm$0.60 |
| Qwen2.5-7B | 34.67$\pm$2.75 | 76.90$\pm$1.24 | 1.91x$\pm$0.07x | 61.33 (+26.66)$\pm$2.81 | 88.21$\pm$1.03 | 1.79x$\pm$0.05x | 10.28$\pm$0.49 |
| Llama3-8B CoT | 33.33$\pm$2.72 | 66.78$\pm$1.79 | 2.21x$\pm$0.10x | 73.00 (+39.67)$\pm$2.56 | 90.51$\pm$1.06 | 1.91x$\pm$0.06x | 17.14$\pm$0.62 |
| Llama3.1-8B CoT | 38.33$\pm$2.81 | 73.83$\pm$1.53 | 2.16x$\pm$0.08x | 54.33 (+16.00)$\pm$2.88 | 83.37$\pm$1.28 | 1.82x$\pm$0.06x | 14.35$\pm$0.58 |
| Qwen2.5-7B CoT | 39.67$\pm$2.82 | 71.02$\pm$1.73 | 2.43x$\pm$0.10x | 65.33 (+25.66)$\pm$2.75 | 85.99$\pm$1.31 | 1.96x$\pm$0.06x | 15.79$\pm$0.58 |

Table 1: Performance comparison of models with and without verifier assistance across four communicative action space configurations. In each game, both agents are assigned the same action space.

We observe that the effect of communicative action space depends on the model and reasoning configuration. In the strongest Llama 3.1-8B CoT setting, *Provide & Seek* achieves the highest Success Rate (SR). Across matched settings, *Information Seeking Only* also generally outperforms *Information Providing Only*, suggesting that targeted queries are more effective than unprompted sharing. Queries allow agents to request missing information directly, whereas proactive sharing often introduces constraints that are redundant or irrelevant to the partner. The corresponding Step Ratio (StepR) rankings are less consistent, indicating that higher task success does not always translate into greater step efficiency.

Surprisingly, disabling communication altogether (*‘No Information Exchange”*) ranks high for some variants. Without communication and reasoning process through CoT, the task reduces to pure object manipulation and random guessing;
Llama variants exploit this by memorizing high-probability transition patterns, achieving a success rate greater than 81%. Qwen, on the other hand, does not show the same effect, suggesting the phenomenon is model–specific rather than an intrinsic property of the environment.

#### Effects of Verifier Assistance (RQ2)

Holding the communicative action space and reasoning setting fixed, adding the reasoning verifier produces absolute SR gains of 10 to 40 percentage points, as shown in red in Table [1](https://arxiv.org/html/2510.25595v2#S5.T1 "Table 1 ‣ Effects of Communicative Action Space (RQ1) ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"). The improvement is observed across action spaces, indicating that verifier-assisted action selection helps agents act more consistently with the current game state and constraints.

#### Error Analysis on RQ1 and RQ2

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Category | No Verifier | | | | With Reasoning Verifier | | | |
| Provide & Seek | Provide Only | Seek Only | None | Provide & Seek | Provide Only | Seek Only | None |
| Format Following | 0.19% | 0.59% | 0.00% | 0.00% | 0.08% | 0.48% | 0.02% | 0.00% |
| Physical Understanding |  |  |  |  |  |  |  |  |
| Object not in source bin | 8.34%/11.27% | 4.17%/7.75% | 10.81%/15.16% | 1.47%/1.60% | 2.92%/4.06% | 1.94%/3.39% | 4.89%/7.05% | 1.11%/1.19% |
| Source bin not reachable | 1.43%/1.94% | 0.77%/1.43% | 0.84%/1.18% | 0.02%/0.02% | 0.97%/1.34% | 1.00%/1.75% | 0.24%/0.35% | 0.02%/0.03% |
| Dest. bin not reachable | 4.27%/5.77% | 3.83%/7.11% | 3.67%/5.15% | 0.00%/0.00% | 2.36%/3.28% | 2.50%/4.37% | 2.06%/2.98% | 0.00%/0.00% |
| Source & destination same | 0.19%/0.26% | 0.70%/1.30% | 0.81%/1.13% | 0.02%/0.02% | 0.18%/0.26% | 0.60%/1.04% | 0.24%/0.35% | 0.02%/0.03% |
| Communication |  |  |  |  |  |  |  |  |
| Redundant knowl. sharing | 14.04%/59.86% | 33.20%/79.35% | 0.08%/0.89% | – | 9.60%/39.44% | 27.61%/69.37% | 0.10%/0.83% | – |
| No share after seek | 0.30%/12.99% | – | 0.93%/9.65% | – | 0.14%/4.00% | – | 0.16%/1.31% | – |
| Wrong share after seek | 0.04%/0.19% | – | 0.00%/0.00% | – | 0.04%/0.17% | – | 0.00%/0.00% | – |
| Seek known object | 0.34%/14.94% | – | 1.21%/12.54% | – | 0.02%/0.57% | – | 0.24%/1.96% | – |
| Task Reasoning |  |  |  |  |  |  |  |  |
| Wrong rule understanding | 28.22%/38.15% | 19.07%/35.46% | 27.40%/38.41% | 27.35%/29.79% | 14.12%/19.62% | 13.13%/22.94% | 17.53%/25.27% | 19.31%/20.67% |
| Wrong random guessing | 8.64%/11.64% | 4.25%/7.90% | 5.76%/8.07% | 16.11%/17.54% | 6.12%/8.51% | 4.90%/8.56% | 3.57%/5.14% | 14.77%/15.81% |
| No Error | 44.29% | 38.80% | 59.61% | 55.92% | 67.19% | 51.37% | 75.68% | 65.60% |
| Total Actions | 6704 | 7293 | 6427 | 5308 | 4867 | 5881 | 4991 | 4143 |

Table 2: Error analysis across different communicative action spaces with/without verifier.

To examine the behaviors underlying these aggregate results, we analyze errors for the best-performing LLaMA3.1-8B configuration under each action space. We use the variant without CoT for *None* and the variant with CoT for the other three action spaces. The same configurations are used in subsequent experiments. Appendix [H](https://arxiv.org/html/2510.25595v2#A8 "Appendix H Error Taxonomy ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") provides the complete error taxonomy. Each cell in Table [2](https://arxiv.org/html/2510.25595v2#S5.T2 "Table 2 ‣ Error Analysis on RQ1 and RQ2 ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") reports two rates:

- •

  (Errors/Total Steps)%: the percentage of all steps assigned a given error label.
- •

  (Errors/Relevant Action Type)%: the percentage of actions of the relevant type, such as move, provide, or seek, assigned that label.

For example, under *Provide & Seek* without the verifier, the *Wrong Rule Understanding* rates are 28.22% and 38.15%. These values indicate that the error occurs in 28.22% of all 6,704 steps and 38.15% of the 4,959 move actions.1 Because the error labels are not mutually exclusive, a single action may contribute to multiple categories.

Without the verifier, agents exhibit broadly similar rates of rule-understanding errors across action spaces despite substantial differences in task success. The relatively high success rate under *None* therefore appears to result from repeated manipulation attempts and the absence of communication-related errors, rather than stronger task reasoning. Meanwhile, communication is also frequently inefficient. Among information-providing actions, 59.86% under *Provide & Seek* and 79.35% under *Provide Only* are labeled as redundant. Agents also have difficulty responding to requests and seeking necessary information. Providing information only in response to a request reduces redundancy, although its overall performance remains below that of the full bidirectional action space.

Adding the reasoning verifier consistently reduces error rates and the total number of actions. The reduction is particularly pronounced for *Wrong Rule Understanding*, which directly reflects the verifier’s intended role. The verifier also reduces communication errors, leading to more efficient and relevant information exchange.

Together, these results distinguish the roles of communicative action space and verification. The action space determines what information agents can exchange, while the verifier improves how reliably agents use those actions and follow the game constraints. Full bidirectional communication provides the strongest overall action space, and verifier assistance further improves both task performance and rule compliance.

We further evaluate whether these findings extend beyond the game sizes used during fine-tuning. Models fine-tuned only on games with 4–6 objects are evaluated on unseen games with 7 and 8 objects (Appendix [D](https://arxiv.org/html/2510.25595v2#A4 "Appendix D Out-of-Distribution Generalization ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"), Table [6](https://arxiv.org/html/2510.25595v2#A4.T6 "Table 6 ‣ Appendix D Out-of-Distribution Generalization ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")). Although absolute performance decreases as the number of objects increases, the ordering across communicative action spaces remains largely unchanged. The verifier also retains substantial gains, increasing SR from 31.00% to 76.00% under *Provide & Seek* on the held-out sizes. These results show some extent of generalizability that the environment-based verifier can bring.

|  |  |  |  |
| --- | --- | --- | --- |
| Act. Mode 1 | Act. Mode 2 | SR↑(%) | StepR↓ |
| Provide & Seek | Provide Only | 67.33$\pm$2.71 | 1.57x$\pm$0.04x |
| Provide & Seek | Seek Only | 78.67$\pm$2.37 | 1.33x$\pm$0.02x |
| Provide & Seek | None | 78.67$\pm$2.37 | 1.68x$\pm$0.04x |
| Provide Only | Seek Only | 41.00$\pm$2.84 | 1.63x$\pm$0.07x |

Table 3: Comparison across different action space combinations. All variants are equipped with reasoning verifier.

|  |  |  |  |
| --- | --- | --- | --- |
| Action Mode | SR↑(%) | Sub.R↑(%) | Steps↓ |
| Provide & Seek | 92.22$\pm$2.62 | 97.41$\pm$1.02 | 18.99$\pm$0.58 |
| Provide Only | 77.78$\pm$4.02 | 93.19$\pm$1.60 | 22.07$\pm$0.81 |
| Seek Only | 87.78$\pm$2.98 | 95.19$\pm$1.39 | 19.10$\pm$0.57 |
| None | 91.11$\pm$2.74 | 98.06$\pm$0.70 | 18.76$\pm$0.58 |

Table 4: Performance of collaboration between best agents and 30 human participants.

Figure 2: Distributions of answers with 360 data points from 30 human participants.

#### Mismatched Action Spaces (RQ3)

We further examine model behavior in scenarios where two agents are assigned different communicative action spaces. Specifically, we evaluate four asymmetric pairings of action spaces, as shown in Table [3](https://arxiv.org/html/2510.25595v2#S5.T3 "Table 3 ‣ Error Analysis on RQ1 and RQ2 ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"). We exclude the pair Provide only vs. None, as it is functionally similar to Provide & Seek vs. None in information transfer. In both cases, one agent is unable to respond to queries. Similarly, Seek only vs. None is the same as None vs. None, since the None agent cannot initiate or respond to communication.

Across the evaluated pairings, we observe a consistent drop in performance when agents have mismatched communicative abilities. This finding highlights the importance of aligning communication protocols in collaborative tasks and provides insights into designing agent communication strategies in multi-agent systems. Notably, in the last two pairings listed in Table [3](https://arxiv.org/html/2510.25595v2#S5.T3 "Table 3 ‣ Error Analysis on RQ1 and RQ2 ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"), agents are sometimes forced to rely on random guessing. For instance, a Seek only agent cannot proactively share unless asked, yet its Provide only partner lacks the ability to initiate queries. These structural mismatches lead to particularly sharp declines in task success, strengthening the need for matched-communication agent design.

#### Human Preference (RQ4)

We follow the model selection in Table [3](https://arxiv.org/html/2510.25595v2#S5.T3 "Table 3 ‣ Error Analysis on RQ1 and RQ2 ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") from RQ3 and recruit human participants to play games with them.

As shown in Table [4](https://arxiv.org/html/2510.25595v2#S5.T4 "Table 4 ‣ Error Analysis on RQ1 and RQ2 ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"), Provide & Seek achieves the highest success rate (92.2%) in collaboration with human participants, followed closely by None (91.1%), while Provide Only trails substantially (77.8%). Although Provide & Seek and None do not have a significant difference in steps per game (18.99 vs. 18.76, $p=.73$), they spend these steps very differently: the None agent resorts to trial-and-error, nearly doubling its rejected placement attempts (3.64 vs. 1.92 per game, $p<.001$), whereas the Provide & Seek agent devotes a comparable share of its turns to communication (1.9 communicative acts per game), replacing failed physical attempts with information exchange almost one for one. This suggests that agents trained with communicative actions produce fewer erroneous physical actions and better acquire the underlying task strategy, and leverage effective communication to avoid erroneous physical actions.

In addition to quantitative metrics, we also conduct qualitative analyses to better understand the perceived helpfulness, responsiveness, and clarity of the models from a human-centered perspective. Figure [2](https://arxiv.org/html/2510.25595v2#S5.F2 "Figure 2 ‣ Error Analysis on RQ1 and RQ2 ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") presents the distributions of participant responses across these three dimensions. Participants rate the information communicated by Provide & Seek agents as significantly more useful than in the None condition ($p=.020$), and Seek Only agents are rated significantly higher than None on making effective use of human-shared information ($p=.040$). One possible interpretation is that, under the same training budget, the Seek Only agent learns a more focused information-seeking policy: it asks selectively for information it needs, making its use of human-provided information more salient to participants. Interestingly, in the None condition for Q1, participants often interpret the agents’ physical actions as implicit communication from which they base their evaluations. Notably, participants attempted to communicate at the same rate in the None condition as in Provide & Seek (3.0 acts per game, $p=.94$), despite never receiving a response, which suggests a persistent human demand for communication that non-communicative agents leave unmet.

Consistently, we observe significant differences in the perceived clarity of agent behavior: participants report the most confusion in the None condition and the least with Provide & Seek ($p=.045$). This indicates that communication improves perceived clarity without increasing the number of steps. Finally, Provide Only performs worse than all other variants, driven largely by the hardest games (46.7% success with 8 objects). A possible indication is that useful providing is harder to learn than useful seeking: to provide information effectively, the agent may infer what the partner already knows, identify what is still useful, and decide when to volunteer it, whereas seeking directly exposes the agent’s own information needs. This may also explain why Provide & Seek performs best, since seeking can expose missing information and help guide what should be provided. These results highlight that beyond task success, proactive and transparent communication plays a critical role in improving perceived clarity in human-agent interaction.

## 6 Conclusion

We adapted Einstein’s Puzzle into a tabletop environment for studying collaboration under information asymmetry, where two agents differ in both knowledge and reachable workspace. Agents that can both seek and provide information collaborate most effectively for most cases, and mismatched communicative abilities degrade performance sharply. Our central finding, however, is a dissociation rather than a ranking. Agents without communication can achieve high task success through repeated physical attempts, but their trajectories contain more rule-inconsistent and rejected actions. Human participants also report greater confusion in this condition despite similar step counts. These results show that task success alone does not capture behavioral reliability or interaction quality. Our environment-based verifier addresses part of the gap: useful verification signals can be read directly off the environment without reward engineering or extra training, improving constraint-consistent action selection and task completion.

## Acknowledgments

This work has benefited from the Microsoft Accelerate Foundation Models Research (AFMR) grant program. We
thank all the human-study participants for their contributions.

## References

- Ahn et al. (2022)
  M. Ahn, A. Brohan, N. Brown, Y. Chebotar, O. Cortes, B. David, C. Finn, C. Fu, K. Gopalakrishnan, K. Hausman, A. Herzog, D. Ho, J. Hsu, J. Ibarz, B. Ichter, A. Irpan, E. Jang, R. J. Ruano, K. Jeffrey, S. Jesmonth, N. Joshi, R. Julian, D. Kalashnikov, Y. Kuang, K. Lee, S. Levine, Y. Lu, L. Luu, C. Parada, P. Pastor, J. Quiambao, K. Rao, J. Rettinghouse, D. Reyes, P. Sermanet, N. Sievers, C. Tan, A. Toshev, V. Vanhoucke, F. Xia, T. Xiao, P. Xu, S. Xu, M. Yan, and A. Zeng
  Do as i can and not as i say: grounding language in robotic affordances.
  In arXiv preprint arXiv:2204.01691,
  Cited by: [§1](https://arxiv.org/html/2510.25595v2#S1.p1.1 "1 Introduction ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- AI@Meta (2024)
  AI@Meta
  Llama 3 model card.
  External Links: [Link](https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md)
  Cited by: [§3.2](https://arxiv.org/html/2510.25595v2#S3.SS2.p2.1 "3.2 Information Providing & Seeking ‣ 3 Collaboration Under Information Asymmetry ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Albrecht and Stone (2018)
  S. V. Albrecht and P. Stone
  Autonomous agents modelling other agents: a comprehensive survey and open problems.
  Artificial Intelligence 258, pp. 66–95.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Bara et al. (2021)
  C. Bara, S. CH-Wang, and J. Chai
  MindCraft: theory of mind modeling for situated dialogue in collaborative tasks.
  In Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing,
  Online and Punta Cana, Dominican Republic, pp. 1112–1125.
  External Links: [Link](https://aclanthology.org/2021.emnlp-main.85)
  Cited by: [§3.1](https://arxiv.org/html/2510.25595v2#S3.SS1.p5.1 "3.1 Understanding Einstein Puzzles on the tabletop setup ‣ 3 Collaboration Under Information Asymmetry ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Carroll et al. (2019)
  M. Carroll, R. Shah, M. K. Ho, T. Griffiths, S. Seshia, P. Abbeel, and A. Dragan
  On the utility of learning about humans for human-ai coordination.
  Advances in neural information processing systems 32.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Charniak and Johnson (2005)
  E. Charniak and M. Johnson
  Coarse-to-fine n-best parsing and MaxEnt discriminative reranking.
  In Proceedings of the 43rd Annual Meeting of the Association for Computational Linguistics (ACL‘05), K. Knight, H. T. Ng, and K. Oflazer (Eds.),
  Ann Arbor, Michigan, pp. 173–180.
  External Links: [Link](https://aclanthology.org/P05-1022/),
  [Document](https://dx.doi.org/10.3115/1219840.1219862)
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Chen et al. (2023)
  J. C. Chen, S. Saha, and M. Bansal
  Reconcile: round-table conference improves reasoning via consensus among diverse llms.
  arXiv preprint arXiv:2309.13007.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Cobbe et al. (2021)
  K. Cobbe, V. Kosaraju, M. Bavarian, M. Chen, H. Jun, L. Kaiser, M. Plappert, J. Tworek, J. Hilton, R. Nakano, et al.
  Training verifiers to solve math word problems.
  arXiv preprint arXiv:2110.14168.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Dao (2024)
  T. Dao
  FlashAttention-2: faster attention with better parallelism and work partitioning.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§E.1](https://arxiv.org/html/2510.25595v2#A5.SS1.p1.1 "E.1 Model Configuration, Fine-tuning and Deployment ‣ Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Durante et al. (2024)
  Z. Durante, Q. Huang, N. Wake, R. Gong, J. S. Park, B. Sarkar, R. Taori, Y. Noda, D. Terzopoulos, Y. Choi, et al.
  Agent ai: surveying the horizons of multimodal interaction.
  arXiv preprint arXiv:2401.03568.
  Cited by: [§1](https://arxiv.org/html/2510.25595v2#S1.p1.1 "1 Introduction ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Gao et al. (2024)
  J. Gao, Y. Guo, G. Lim, T. Zhang, Z. Zhang, T. J. Li, and S. T. Perrault
  CollabCoder: a lower-barrier, rigorous workflow for inductive collaborative qualitative analysis with large language models.
  In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems,
  pp. 1–29.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Grattafiori et al. (2024)
  A. Grattafiori, A. Dubey, A. Jauhri, A. Pandey, A. Kadian, A. Al-Dahle, A. Letman, A. Mathur, A. Schelten, A. Vaughan, et al.
  The llama 3 herd of models.
  arXiv preprint arXiv:2407.21783.
  Cited by: [§3.2](https://arxiv.org/html/2510.25595v2#S3.SS2.p2.1 "3.2 Information Providing & Seeking ‣ 3 Collaboration Under Information Asymmetry ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Gronauer and Diepold (2022)
  S. Gronauer and K. Diepold
  Multi-agent deep reinforcement learning: a survey.
  Artificial Intelligence Review 55 (2), pp. 895–943.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Groza (2021)
  A. Groza
  Einstein puzzles.
  In Modelling Puzzles in First Order Logic,
  pp. 103–130.
  External Links: ISBN 978-3-030-62547-4,
  [Document](https://dx.doi.org/10.1007/978-3-030-62547-4%5F6),
  [Link](https://doi.org/10.1007/978-3-030-62547-4_6)
  Cited by: [§1](https://arxiv.org/html/2510.25595v2#S1.p3.1 "1 Introduction ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Guan et al. (2024)
  X. Guan, Y. Liu, X. Lu, B. Cao, B. He, X. Han, L. Sun, J. Lou, B. Yu, Y. Lu, et al.
  Search, verify and feedback: towards next generation post-training paradigm of foundation models via verifier engineering.
  arXiv preprint arXiv:2411.11504.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Guo et al. (2024)
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang
  Large language model based multi-agents: a survey of progress and challenges.
  In Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence, IJCAI-24,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Hong et al. (2024)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, L. Zhou, C. Ran, L. Xiao, C. Wu, and J. Schmidhuber
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In The Twelfth International Conference on Learning Representations,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Hu et al. (2022)
  E. J. Hu, P. Wallis, Z. Allen-Zhu, Y. Li, S. Wang, L. Wang, W. Chen, et al.
  LoRA: low-rank adaptation of large language models.
  In International Conference on Learning Representations,
  Cited by: [§E.1](https://arxiv.org/html/2510.25595v2#A5.SS1.p1.1 "E.1 Model Configuration, Fine-tuning and Deployment ‣ Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Hu et al. (2024)
  J. Hu, X. Wu, Z. Zhu, Xianyu, W. Wang, D. Zhang, and Y. Cao
  OpenRLHF: an easy-to-use, scalable and high-performance rlhf framework.
  arXiv preprint arXiv:2405.11143.
  Cited by: [§E.1](https://arxiv.org/html/2510.25595v2#A5.SS1.p1.1 "E.1 Model Configuration, Fine-tuning and Deployment ‣ Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Koh et al. (2024)
  J. Y. Koh, S. McAleer, D. Fried, and R. Salakhutdinov
  Tree search for language model agents.
  arXiv preprint arXiv:2407.01476.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Kwon et al. (2023)
  W. Kwon, Z. Li, S. Zhuang, Y. Sheng, L. Zheng, C. H. Yu, J. E. Gonzalez, H. Zhang, and I. Stoica
  Efficient memory management for large language model serving with pagedattention.
  In Proceedings of the ACM SIGOPS 29th Symposium on Operating Systems Principles,
  Cited by: [§E.1](https://arxiv.org/html/2510.25595v2#A5.SS1.p1.1 "E.1 Model Configuration, Fine-tuning and Deployment ‣ Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Li et al. (2023)
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem
  Camel: communicative agents for "mind" exploration of large language model society.
  Advances in Neural Information Processing Systems 36, pp. 51991–52008.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Lifshitz et al. (2025)
  S. Lifshitz, S. A. McIlraith, and Y. Du
  Multi-agent verification: scaling test-time compute with multiple verifiers.
  arXiv preprint arXiv:2502.20379.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Lightman et al. (2024)
  H. Lightman, V. Kosaraju, Y. Burda, H. Edwards, B. Baker, T. Lee, J. Leike, J. Schulman, I. Sutskever, and K. Cobbe
  Let’s verify step by step.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=v8L0pN6EOi)
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Liu et al. (2024)
  W. Liu, C. Wang, Y. Wang, Z. Xie, R. Qiu, Y. Dang, Z. Du, W. Chen, C. Yang, and C. Qian
  Autonomous agents for collaborative task under information asymmetry.
  In The Thirty-eighth Annual Conference on Neural Information Processing Systems,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Ma et al. (2023)
  Z. Ma, J. Sansom, R. Peng, and J. Chai
  Towards a holistic landscape of situated theory of mind in large language models.
  Findings of Empirical Methods in Natural Language Processing.
  Cited by: [§1](https://arxiv.org/html/2510.25595v2#S1.p2.1 "1 Introduction ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Mangrulkar et al. (2022)
  S. Mangrulkar, S. Gugger, L. Debut, Y. Belkada, S. Paul, and B. Bossan
  PEFT: state-of-the-art parameter-efficient fine-tuning methods.
  Note: <https://github.com/huggingface/peft>
  Cited by: [§E.1](https://arxiv.org/html/2510.25595v2#A5.SS1.p1.1 "E.1 Model Configuration, Fine-tuning and Deployment ‣ Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- McAleese et al. (2024)
  N. McAleese, R. M. Pokorny, J. F. C. Uribe, E. Nitishinskaya, M. Trebacz, and J. Leike
  Llm critics help catch llm bugs.
  arXiv preprint arXiv:2407.00215.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Puig et al. (2020)
  X. Puig, T. Shu, S. Li, Z. Wang, Y. Liao, J. B. Tenenbaum, S. Fidler, and A. Torralba
  Watch-and-help: a challenge for social perception and human-ai collaboration.
  arXiv preprint arXiv:2010.09890.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Putta et al. (2024)
  P. Putta, E. Mills, N. Garg, S. Motwani, C. Finn, D. Garg, and R. Rafailov
  Agent q: advanced reasoning and learning for autonomous ai agents.
  arXiv preprint arXiv:2408.07199.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Qian et al. (2024)
  C. Qian, W. Liu, H. Liu, N. Chen, Y. Dang, J. Li, C. Yang, W. Chen, Y. Su, X. Cong, et al.
  Chatdev: communicative agents for software development.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 15174–15186.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Qian et al. (2025)
  C. Qian, Z. Xie, Y. Wang, W. Liu, K. Zhu, H. Xia, Y. Dang, Z. Du, W. Chen, C. Yang, Z. Liu, and M. Sun
  Scaling large language model-based multi-agent collaboration.
  In The Thirteenth International Conference on Learning Representations,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Qwen-Team (2024)
  Qwen-Team
  Qwen2.5: a party of foundation models.
  External Links: [Link](https://qwenlm.github.io/blog/qwen2.5/)
  Cited by: [§3.2](https://arxiv.org/html/2510.25595v2#S3.SS2.p2.1 "3.2 Information Providing & Seeking ‣ 3 Collaboration Under Information Asymmetry ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Song et al. (2023)
  C. H. Song, J. Wu, C. Washington, B. M. Sadler, W. Chao, and Y. Su
  Llm-planner: few-shot grounded planning for embodied agents with large language models.
  In Proceedings of the IEEE/CVF international conference on computer vision,
  pp. 2998–3009.
  Cited by: [§1](https://arxiv.org/html/2510.25595v2#S1.p1.1 "1 Introduction ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Stone and Veloso (2000)
  P. Stone and M. Veloso
  Multiagent systems: a survey from a machine learning perspective.
  Autonomous Robots 8, pp. 345–383.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Tran et al. (2025)
  K. Tran, D. Dao, M. Nguyen, Q. Pham, B. O’Sullivan, and H. D. Nguyen
  Multi-agent collaboration mechanisms: a survey of llms.
  arXiv preprint arXiv:2501.06322.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Wang et al. (2025)
  J. Wang, Y. Dai, Y. Zhang, Z. Ma, W. Li, and J. Chai
  Training turn-by-turn verifiers for dialogue tutoring agents: the curious case of llms as your coding tutors.
  arXiv preprint arXiv:2502.13311.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Wang et al. (2024a)
  L. Wang, C. Ma, X. Feng, Z. Zhang, H. Yang, J. Zhang, Z. Chen, J. Tang, X. Chen, Y. Lin, et al.
  A survey on large language model based autonomous agents.
  Frontiers of Computer Science 18 (6), pp. 186345.
  Cited by: [§1](https://arxiv.org/html/2510.25595v2#S1.p1.1 "1 Introduction ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Wang et al. (2024b)
  P. Wang, L. Li, Z. Shao, R. Xu, D. Dai, Y. Li, D. Chen, Y. Wu, and Z. Sui
  Math-shepherd: verify and reinforce LLMs step-by-step without human annotations.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Wang et al. (2024c)
  Y. Wang, T. Shen, L. Liu, and J. Xie
  Sibyl: simple yet effective agent framework for complex real-world reasoning.
  arXiv preprint arXiv:2407.10718.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Wei et al. (2022)
  J. Wei, X. Wang, D. Schuurmans, M. Bosma, F. Xia, E. Chi, Q. V. Le, D. Zhou, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  Advances in neural information processing systems 35, pp. 24824–24837.
  Cited by: [§3.2](https://arxiv.org/html/2510.25595v2#S3.SS2.p2.1 "3.2 Information Providing & Seeking ‣ 3 Collaboration Under Information Asymmetry ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Wu et al. (2024)
  Z. Wu, R. Peng, S. Zheng, Q. Liu, X. Han, B. Kwon, M. Onizuka, S. Tang, and C. Xiao
  Shall we team up: exploring spontaneous cooperation of competing LLM agents.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Yang et al. (2024)
  Z. Yang, Z. Zhang, Z. Zheng, Y. Jiang, Z. Gan, Z. Wang, Z. Ling, J. Chen, M. Ma, B. Dong, et al.
  Oasis: open agents social interaction simulations on one million agents.
  arXiv preprint arXiv:2411.11581.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Yao et al. (2023)
  S. Yao, D. Yu, J. Zhao, I. Shafran, T. Griffiths, Y. Cao, and K. Narasimhan
  Tree of thoughts: deliberate problem solving with large language models.
  Advances in neural information processing systems 36, pp. 11809–11822.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Yu et al. (2023)
  X. Yu, M. Chen, and Z. Yu
  Prompt-based monte-carlo tree search for goal-oriented dialogue policy planning.
  arXiv preprint arXiv:2305.13660.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Zhang et al. (2024a)
  H. Zhang, W. Du, J. Shan, Q. Zhou, Y. Du, J. B. Tenenbaum, T. Shu, and C. Gan
  Building cooperative embodied agents modularly with large language models.
  In The Twelfth International Conference on Learning Representations,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Zhang et al. (2024b)
  L. Zhang, A. Hosseini, H. Bansal, M. Kazemi, A. Kumar, and R. Agarwal
  Generative verifiers: reward modeling as next-token prediction.
  arXiv preprint arXiv:2408.15240.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Zhang et al. (2025)
  Q. Zhang, F. Lyu, Z. Sun, L. Wang, W. Zhang, Z. Guo, Y. Wang, I. King, X. Liu, and C. Ma
  What, how, where, and how well? a survey on test-time scaling in large language models.
  arXiv preprint arXiv:2503.24235.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p1.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Zhou et al. (2024a)
  A. Zhou, K. Yan, M. Shlapentokh-Rothman, H. Wang, and Y. Wang
  Language agent tree search unifies reasoning acting and planning in language models.
  URL https://arxiv.org/abs/2310.04406.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px2.p2.1 "Test-time Compute in LLM ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Zhou et al. (2024b)
  X. Zhou, Z. Su, T. Eisape, H. Kim, and M. Sap
  Is this the real life? is this just fantasy? the misleading success of simulating social interactions with llms.
  arXiv preprint arXiv:2403.05020.
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- Zhou et al. (2024c)
  X. Zhou, H. Zhu, L. Mathur, R. Zhang, H. Yu, Z. Qi, L. Morency, Y. Bisk, D. Fried, G. Neubig, and M. Sap
  SOTOPIA: interactive evaluation for social intelligence in language agents.
  In The Twelfth International Conference on Learning Representations,
  Cited by: [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p1.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"),
  [§2](https://arxiv.org/html/2510.25595v2#S2.SS0.SSS0.Px1.p2.1 "Collaboration among LLM Agents ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").

## Appendix

We include the following contents as our supplementary materials.

- •

  [A. Example of Game Play](https://arxiv.org/html/2510.25595v2#A1 "Appendix A Example of Game Play ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") — An illustrative walkthrough of a full game session demonstrating player turns, actions, and reasoning strategies.
- •

  [B. Data Generation](https://arxiv.org/html/2510.25595v2#A2 "Appendix B Data Generation ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") — A detailed description of how we generate trajectories using a planner with perspective-taking, inference, and communication modeling.
- •

  [C. Ablation on Verifiers](https://arxiv.org/html/2510.25595v2#A3 "Appendix C Ablation on Environment-Based Verifiers ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") - A detailed explanation and experiment on different designs of verifiers, which is potentially generalizable to other simulated environments.
- •

  [D. Out-of-Distribution Generalization](https://arxiv.org/html/2510.25595v2#A4 "Appendix D Out-of-Distribution Generalization ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") - Evaluation of models fine-tuned on 4–6 object games on unseen games with 7 and 8 objects.
- •

  [E. Experiment Details](https://arxiv.org/html/2510.25595v2#A5 "Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") — Technical and procedural specifications of model training, deployment, and human evaluation setup.
- •

  [F. Code of Ethics](https://arxiv.org/html/2510.25595v2#A6 "Appendix F Code of Ethics ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") — Statement of ethical compliance, consent protocol, and risk mitigation measures approved by the IRB.
- •

  [G. Limitation](https://arxiv.org/html/2510.25595v2#A7 "Appendix G Limitations ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") - About generalizability of findings on communication and verification.
- •

  [H. Error Taxonomy](https://arxiv.org/html/2510.25595v2#A8 "Appendix H Error Taxonomy ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") - A detailed explanation on the error types we analyze in Exp2 in section [5](https://arxiv.org/html/2510.25595v2#S5 "5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
- •

  [I. Human Study Interface](https://arxiv.org/html/2510.25595v2#A9 "Appendix I Study Interface Used for the Reported Human Study ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") — Screenshot and description of the web interface and tutorial used for guiding participants in the human study.
- •

  [J. Prompts Used](https://arxiv.org/html/2510.25595v2#A10 "Appendix J Prompts Used ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") — A comprehensive collection of system and user prompts used across training, evaluation, and reasoning trace generation for different agent configurations.

In terms of generative AI usage, we use it for purely improving the language of the paper.

## Appendix A Example of Game Play

To provide a clear understanding of the Einstein Puzzle gameplay, we illustrate a complete game session in Figure [3](https://arxiv.org/html/2510.25595v2#A1.F3 "Figure 3 ‣ Appendix A Example of Game Play ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"), building on the initial setup introduced in Figure [1](https://arxiv.org/html/2510.25595v2#S2.F1 "Figure 1 ‣ 2 Related work ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"). This example demonstrates how players are expected to take turns, make decisions, and communicate throughout the game. We hope this serves as a helpful reference for understanding the nature of the task, as well as the types of reasoning and interaction involved.

Figure 3: Full game playthrough with actions and rationales. The game begins with Player 1, and the two players take turns performing physical moves, sharing information, or asking questions until all objects are correctly placed.

It is worth noting that the ask action is not utilized in this example. This is primarily due to the relative simplicity of the case. The ask action tends to be used more frequently in scenarios involving a larger number of objects, or when agents need to inquire about specific object-related information.

## Appendix B Data Generation

### B.1 Perspective Taking

To prepare data for fine-tuning, we designed a planner to generate solutions under different configurations of action space.

The planner operates from the perspective of a single player in each turn, selecting moves based on the player’s limited knowledge of the constraints and their specific communicative action space. It performs breadth-first search to explore possible action sequences until a valid solution is found. Throughout the search process, the planner maintains an up-to-date representation of the player’s knowledge, incorporating both the communication history and the current positions of objects on the board. Based on this evolving knowledge state, it selects valid next actions—such as sharing constraints that have not yet been communicated, or asking about objects that remain unknown from the player’s perspective.

To improve search efficiency, we incorporate inferred knowledge into action selection, which is also used by the reasoning verifier introduced in Section [4](https://arxiv.org/html/2510.25595v2#S4 "4 Environment-based Verifier ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"). This inferred knowledge enables the planner to determine whether:

1. 1.

   The goal of an object is already known, in which case redundant information-seeking is avoided, and a valid move (placing the object into its goal bin, if reachable) is added;
2. 2.

   The goal of an object is still unknown, in which case the agent may ask for information about that object.

By tracking communication history, the planner can also avoid redundant sharing by identifying which constraints have already been communicated.

If no valid move is available in a given search step, we manually add a pass action to allow the player to skip their turn. This mechanism is important when the two players take different numbers of actions to complete a task. Any trajectory ending with two consecutive passes is pruned to avoid unnecessary stalling.

In scenarios where no communication is allowed, or where information flow is unidirectional, the agent may have to randomly guess the goals of some objects. This is triggered only after all valid actions have been exhausted, before skipping their turn. The agent will then attempt to place reachable, unplaced objects into all reachable bins (including the common bin), one by one, until the correct placement is accepted by the environment. Since the environment prevents invalid placements, this process can still lead to a valid solution. However, agents are discouraged from guessing prematurely and are designed to prioritize valid actions before resorting to this strategy.

### B.2 Optimal And Near-Optimal Trajectories

We collect both optimal trajectories and near-optimal trajectories that are only one or two steps longer but follow alternative strategies. Including near-optimal trajectories ensures that both information-providing and information-seeking actions are adequately represented. Restricting the demonstrations to optimal trajectories would overrepresent unprompted information sharing, which often produces shorter solutions.

In scenarios involving random guessing, the optimal trajectories are those in which agents correctly guess the target location on the first attempt. However, such demonstrations provide little guidance for learning robust guessing strategies. To address this, we also include trajectories where agents try multiple possible bins, which we observe being learned by several fine-tuned models in Table [1](https://arxiv.org/html/2510.25595v2#S5.T1 "Table 1 ‣ Effects of Communicative Action Space (RQ1) ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").

## Appendix C Ablation on Environment-Based Verifiers

![Refer to caption](https://arxiv.org/html/2510.25595v2/verifier_intro.png)


Figure 4: Illustration of three types of verifications we consider. Following the same setup as we showed in Figure 1, the game environment supports providing feedback related to action affordance, communication and strategies, which can be directly used as verifiers for agents’ decisions.

### C.1 Verifier Design

In addition to the reasoning verifier introduced in Section [4](https://arxiv.org/html/2510.25595v2#S4 "4 Environment-based Verifier ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"), we design two more types of verifiers as is illustrated in Figure [4](https://arxiv.org/html/2510.25595v2#A3.F4 "Figure 4 ‣ Appendix C Ablation on Environment-Based Verifiers ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").

1. 1.

   Affordance Verifier: The environment inherently enforces physical rules that govern the actions an agent can take under different conditions. In our game, this refers to whether the selected action is executable, such as whether an object or bin is reachable, or whether the chosen object is in the correct source bin. This helps validate the agent’s decision from the perspective of physical feasibility.
2. 2.

   Communication Verifier: In multi-agent environments, other agents can be viewed as part of the environment, and their interactions can provide additional feedback. In our game, the communication verifier assesses whether the communicative action selected by the agent is meaningful. For example, it identifies when an agent shares already-known knowledge, repeats sharing an existing constraint, or asks about an object that has already been placed.

These three verifiers (including reasoning verifier) are hierarchically related in our design. The affordance and communication verifiers address physical actions and communication, respectively, while the reasoning verifier builds upon both and extends coverage through inferred knowledge.

We note that the three verifiers differ substantially in how portable they are, and we distinguish them explicitly to avoid overclaiming. The affordance verifier is widely applicable and available in most environments.
The communication verifier is similarly accessible whenever the task involves communication.
Among the three, the reasoning verifier performs best but is also the least portable. It expands an explicit symbolic constraint graph, so adapting it to a new domain requires algorithms tailored to that domain rather than simple configuration. We therefore view environment-based verification as a general design principle: verification signals should be derived from action affordances, communication validity, and consistency with observable state. This principle may extend to other collaborative environments.

### C.2 Ablation Study

We follow the same setting of Exp2 (see Section [5](https://arxiv.org/html/2510.25595v2#S5 "5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")) with two additional verifiers that separately target action affordance and communication. We compare performance across different verifier settings with Llama3.1-8B CoT model as base, and assess whether the environment-based verifier is potentially generalizable to other environments.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Action Mode | No Verifier (Pass@1) | | Affordance Verifier | | Communication Verifier | | Reasoning Verifier | |
|  | SR↑(%) | StepR↓ | SR↑(%) | StepR↓ | SR↑(%) | StepR↓ | SR↑(%) | StepR↓ |
| Provide & Seek | 58.67$\pm$2.84 | 1.87x$\pm$0.05x | 65.67$\pm$2.74 | 1.83x$\pm$0.05x | 65.00$\pm$2.75 | 1.74x$\pm$0.05x | 89.33$\pm$1.78 | 1.52x$\pm$0.03x |
| Provide Only | 37.00$\pm$2.79 | 1.70x$\pm$0.07x | 38.67$\pm$2.81 | 1.72x$\pm$0.06x | 46.00$\pm$2.88 | 1.65x$\pm$0.05x | 65.33$\pm$2.75 | 1.52x$\pm$0.04x |
| Seek Only | 56.67$\pm$2.86 | 1.42x$\pm$0.04x | 62.33$\pm$2.80 | 1.43x$\pm$0.04x | 55.33$\pm$2.87 | 1.40x$\pm$0.04x | 82.67$\pm$2.19 | 1.25x$\pm$0.02x |
| None | 38.33$\pm$2.81 | 2.16x$\pm$0.08x | 42.67$\pm$2.86 | 2.18x$\pm$0.09x | - | - | 54.33$\pm$2.88 | 1.82x$\pm$0.06x |

Table 5: Performance under different verification settings tested on Llama3.1-8B model with CoT.

As is shown in Table [5](https://arxiv.org/html/2510.25595v2#A3.T5 "Table 5 ‣ C.2 Ablation Study ‣ Appendix C Ablation on Environment-Based Verifiers ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry"), the affordance verifier evaluates physical preconditions of actions and improves success rates (SR) by 2–7%. The communication verifier filters out redundant or uninformative exchanges, contributing up to a 9% SR increase in task completion. Importantly, these verifiers operate solely on feedback from the environment and interaction history, requiring no additional training or computational overhead.

We argue that such a mechanism offers a promising alternative to recent agent modeling approaches, especially in simulated environments where rich, structured feedback is readily available.
These results highlight the environment’s broader role as a source of lightweight, model-free verification signals that can guide agent behavior.

## Appendix D Out-of-Distribution Generalization

To assess whether our findings depend on the game sizes observed during fine-tuning, we fine-tune all models exclusively on games with 4, 5, and 6 objects and evaluate them on games with the held-out sizes of 7 and 8 objects. Table [6](https://arxiv.org/html/2510.25595v2#A4.T6 "Table 6 ‣ Appendix D Out-of-Distribution Generalization ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") reports these results alongside the in-distribution results for reference. Although absolute performance decreases as the number of objects increases, as expected from the combinatorial growth of the constraint graph, the relative ordering of the communicative action spaces remains largely unchanged. The reasoning verifier also continues to yield substantial gains on the larger, unseen game sizes. These results suggest that the trends reported in Section [5](https://arxiv.org/html/2510.25595v2#S5 "5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") extend to more complex games within the same task family.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | No Verifier | | With Reasoning Verifier | |  |
| Action Space | Base Model | SR↑(%) | Sub.R↑(%) | SR↑(%) | Sub.R↑(%) | Corr.R(%) |
| Unseen: 7–8 objects | | | | | | |
| Provide & Seek (CoT) | Llama3.1-8B | 31.00$\pm$3.27 | 70.37$\pm$1.92 | 76.00$\pm$3.02 | 91.21$\pm$1.25 | 15.05$\pm$0.61 |
| Provide Only (CoT) | Llama3.1-8B | 11.50$\pm$2.26 | 57.00$\pm$1.93 | 41.00$\pm$3.48 | 75.87$\pm$1.92 | 12.27$\pm$0.52 |
| Seek Only (CoT) | Llama3.1-8B | 30.00$\pm$3.24 | 69.04$\pm$1.98 | 61.00$\pm$3.45 | 85.67$\pm$1.56 | 9.88$\pm$0.51 |
| None (CoT) | Llama3.1-8B | 31.00$\pm$3.27 | 71.83$\pm$1.84 | 43.50$\pm$3.51 | 80.57$\pm$1.62 | 12.59$\pm$0.51 |
| None | Llama3.1-8B | 72.50$\pm$3.16 | 92.62$\pm$1.04 | 89.00$\pm$2.21 | 97.21$\pm$0.63 | 10.25$\pm$0.56 |
| In-distribution: 4–6 objects | | | | | | |
| Provide & Seek (CoT) | Llama3.1-8B | 58.67$\pm$2.84 | 79.39$\pm$1.64 | 89.33$\pm$1.78 | 95.64$\pm$0.81 | 14.38$\pm$0.59 |
| Provide Only (CoT) | Llama3.1-8B | 37.00$\pm$2.79 | 68.34$\pm$1.72 | 65.33$\pm$2.75 | 84.25$\pm$1.44 | 11.54$\pm$0.56 |
| Seek Only (CoT) | Llama3.1-8B | 56.67$\pm$2.86 | 81.14$\pm$1.45 | 82.67$\pm$2.19 | 93.42$\pm$0.93 | 10.59$\pm$0.47 |
| None (CoT) | Llama3.1-8B | 38.33$\pm$2.81 | 73.83$\pm$1.53 | 54.33$\pm$2.88 | 83.37$\pm$1.28 | 14.35$\pm$0.58 |
| None | Llama3.1-8B | 84.67$\pm$2.08 | 96.13$\pm$0.62 | 94.33$\pm$1.33 | 98.50$\pm$0.42 | 11.09$\pm$0.60 |

Table 6: Generalization to unseen game sizes. Models are fine-tuned only on games with 4–6 objects. The top block reports results for the held-out object counts of 7 and 8, and the bottom block repeats the in-distribution results for reference.

## Appendix E Experiment Details

### E.1 Model Configuration, Fine-tuning and Deployment

We utilize the Azure OpenAI services for our GPT models. For GPT-4o, we employ the GPT-4o-20241120 version, and in all experiments, the temperature is set to 0.2 and the top-p value to 0.9. For all the model fine-tuning, we employ LoRA ([Hu et al., 2022](https://arxiv.org/html/2510.25595v2#bib.bib49)) with a rank of 32, training with a global batch size of 128 and a learning rate of 2e-4 using a cosine decay schedule for 1 epoch. Fine-tuning is conducted using OpenRLHF ([Hu et al., 2024](https://arxiv.org/html/2510.25595v2#bib.bib46)), while FlashAttention-2 ([Dao, 2024](https://arxiv.org/html/2510.25595v2#bib.bib50)) is used to speed up training. The process takes approximately 30 minutes on 4 A40 GPUs with 48GB RAM each. For evaluation, we deploy the model using PeFT ([Mangrulkar et al., 2022](https://arxiv.org/html/2510.25595v2#bib.bib47)). For inference in the human study, we deploy the model using vLLM ([Kwon et al., 2023](https://arxiv.org/html/2510.25595v2#bib.bib48)).

We follow the license requirement of Llama3.1, Qwen2.5, and GPT-4o model when using these artifacts, and our implementation is licensed under the MIT License.

### E.2 Human Evaluation Setup

We recruited 32 participants with no prior experience in Einstein Puzzles on Tabletop to evaluate the models under four action space configurations (None, Provide Only, Seek Only, Provide & Seek). We used the crowdsource platform, Prolific2 for the study. The design is within-participant: every participant played against all four model variants, on unseen games containing 4, 6, and 8 objects, giving a $3\times 4$ grid of (game configuration, model variant) cells. Each participant played 12 games and each cell was evaluated by four participants. After excluding two participants who did not meet the performance threshold, we got 360 sessions remained. Crucially, the order of model variants and game configurations was randomized and counterbalanced across participants, so that no variant systematically occupied early (unfamiliar) or late (practiced) positions in a participant’s sequence; participants were never informed which variant they were facing, nor that the variants differed. Each session lasted approximately 20 to 30 minutes, and participants received 6 dollars as compensation.

At the start of the study, participants were introduced to the task environment via a detailed tutorial that explained the environment, task setup, and interface (see Appendix [I](https://arxiv.org/html/2510.25595v2#A9 "Appendix I Study Interface Used for the Reported Human Study ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")). After the tutorial, participants completed 12 games sequentially. In each game, they were presented with an initial game board layout and explicit constraints, and were required to communicate with the model with communicative actions to solve the task. Upon task completion, a feedback form with three questions was shown. Once the form was submitted, the interface advanced to the next game, continuing until all games in the assigned session were completed. Participants were allowed to give up at any point if they felt stuck or not comfortable. Additionally, a maximum step limit of 30 or 40 (with 8 objects) was imposed to prevent excessive task duration. This same constraint was applied in all the evaluations (see Table [1](https://arxiv.org/html/2510.25595v2#S5.T1 "Table 1 ‣ Effects of Communicative Action Space (RQ1) ‣ 5.2 Result Analysis ‣ 5 Experiments and Results ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")) to ensure a fair comparison.

## Appendix F Code of Ethics

The institution’s Institutional Review Board (IRB) considered this project exempt from ongoing review. The data collection process among researchers and participants is in line with standard ethical practice.

#### Potential Harm.

The game setting and the tasks assigned to participants were designed and strictly controlled by the research team. This ensured that the potential for safety concerns was minimized, allowing participants to engage with the study with minimal risk. Data collection involved only non-personal information, adhering to standard ethical practices and was used exclusively for research purposes. We ensured confidentiality and privacy, and the data will not be published publicly. Please refer to Appendix [E.2](https://arxiv.org/html/2510.25595v2#A5.SS2 "E.2 Human Evaluation Setup ‣ Appendix E Experiment Details ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") for implementation details of our human study.

## Appendix G Limitations

Our study has two main limitations. First, environment-based verification assumes that invalid actions can be attempted without irreversible consequences, as required for trial-and-error interaction. This assumption holds in many simulated environments but may not hold in the real world. Extending our approach to physical settings would require stronger perceptual capabilities and a more accurate understanding of environment dynamics. The current verifier is therefore best suited to simulated environments that provide structured feedback.

Second, our evidence for generalization is limited to a single task family. Table [6](https://arxiv.org/html/2510.25595v2#A4.T6 "Table 6 ‣ Appendix D Out-of-Distribution Generalization ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") shows that agents and the verifier generalize to held-out game sizes, but we do not evaluate other logic games or more realistic collaborative settings. The current reasoning verifier expands an explicit symbolic constraint graph, so our claims about its generality should be scoped accordingly. The underlying design principle of deriving verification signals from action affordances, communication validity, and consistency with observable state may apply more broadly. Evaluating its transfer across domains remains future work.

## Appendix H Error Taxonomy

To better understand LLM agents’ behaviors, we define several error types that LLM agents may encounter during interaction. Broadly, these fall into four categories: format following, physical understanding, communication, and task reasoning.

All error labels are assigned automatically by rule-based scripts operating over structured environment logs, rather than by human annotators or a model judge; every category below is decidable from the logged state transition and the agent’s known constraint set, so no subjective judgment enters the labeling. To validate the procedure itself, we manually inspected sampled trajectories and verified that the scripts’ labels matched the logged behavior. Because labeling is deterministic given the logs, the labels carry no inter-annotator variance.

- •

  LLM’s format following

  - –

    Invalid Action: The LLM fails to follow the required output format or exceeds the token limit.
- •

  Physical Understanding

  - –

    Object not in source bin: The agent specifies a move involving an incorrect source location for the object.
  - –

    Source bin not reachable: The agent attempts to move an object from a bin that is not reachable (only bins at the front and the common bin are reachable).
  - –

    Destination bin not reachable: The agent attempts to place an object into a non-reachable bin.
  - –

    Source and destination bin are same: The agent mistakenly assigns the same bin as both the source and destination.
- •

  Communication

  - –

    Redundant knowledge sharing: The agent redundantly shares knowledge already communicated by itself or its partner.
  - –

    No share after seek: The agent fails to respond to its partner’s information-seeking request.
  - –

    Wrong share after seek: The agent provides incorrect or irrelevant information in response to a request.
  - –

    Seek known object: The agent asks for the location of an object whose location it already knows, indicating inefficient behavior.
- •

  Task Reasoning

  - –

    Wrong rule understanding: The agent fails to interpret or infer the right location, leading to incorrect moves when it should be able to do so.
  - –

    Wrong random guessing: The agent, lacking sufficient information, guesses randomly and places the object incorrectly.

## Appendix I Study Interface Used for the Reported Human Study

The human study results reported in this paper were collected with the following web platform.

### I.1 Onboarding Tutorial

![Refer to caption](https://arxiv.org/html/2510.25595v2/figures/tutorial_v2/step_1.png)


Figure 5: The onboarding walkthrough shown before the first game. Each step pairs a short instruction with a miniature of the board rendered by the same components used during play (Part I).

![Refer to caption](https://arxiv.org/html/2510.25595v2/figures/tutorial_v2/step_2.png)


Figure 6: The onboarding walkthrough shown before the first game. Each step pairs a short instruction with a miniature of the board rendered by the same components used during play (Part II).

Before the first game, participants are shown an onboarding tutorial with eight steps (Figure [5](https://arxiv.org/html/2510.25595v2#A9.F5 "Figure 5 ‣ I.1 Onboarding Tutorial ‣ Appendix I Study Interface Used for the Reported Human Study ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry") and  [6](https://arxiv.org/html/2510.25595v2#A9.F6 "Figure 6 ‣ I.1 Onboarding Tutorial ‣ Appendix I Study Interface Used for the Reported Human Study ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")). The steps cover, in order: the overall goal and the number of games in a session; the geometry of the board and which bins the participant can reach; the two kinds of facts a participant may hold; the four actions Move, Share, Ask, and Pass; and the termination condition and turn budget. Each user session consists of 12 games, and the turn budget is 30–40 actions per game depending on the number of objects on the board.

### I.2 Gameplay Interface

![Refer to caption](https://arxiv.org/html/2510.25595v2/figures/tutorial_v2/gameplay.png)


Figure 7: The gameplay view. Left: the board, with solid borders marking bins the participant can reach and dashed borders marking partner-only bins. Right: the action panel and the “What you know” panel, which renders each held fact as a compact chip. Bottom: the turn-by-turn history log.

The gameplay view (Figure [7](https://arxiv.org/html/2510.25595v2#A9.F7 "Figure 7 ‣ I.2 Gameplay Interface ‣ Appendix I Study Interface Used for the Reported Human Study ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")) is organized into three regions. The board occupies the top-left side and shows the four corner bins, the two per-player bins, and the common bin drawn as a wide bar between the two players’ rows. Bins the participant can act on are drawn with a solid border and bins reserved for the partner with a dashed border, so reachability is readable at a glance. The action panel on the right holds the *Confirm move* button together with *Share knowledge*, *Ask partner*, and *Pass turn*; directly below it, the “What you know” panel lists the participant’s current facts as compact chips, one row per fact, distinguishing groundings (an object and its destination corner) from relations (a pair of objects and a *same row* / *column* / *diagonal* / *bin* label). A history log at the bottom renders the game as a two-sided message thread, one bubble per turn, annotated with the step index and the acting player; invalid actions and time-outs by either player appear in the same thread. Invalid moves are still possible and still consume a turn, which preserves the cost structure of the task.

### I.3 Post-Game Questionnaire

![Refer to caption](https://arxiv.org/html/2510.25595v2/figures/tutorial_v2/survey.png)


Figure 8: The questionnaire shown after each game. The board, knowledge panel, and history remain visible while participants answer.

After each game, the action panel is replaced by a questionnaire (Figure [8](https://arxiv.org/html/2510.25595v2#A9.F8 "Figure 8 ‣ I.3 Post-Game Questionnaire ‣ Appendix I Study Interface Used for the Reported Human Study ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry")). Participants respond on a five-point Likert scale (*Disagree*, *Slightly Disagree*, *Neutral*, *Slightly Agree*, *Agree*) to the following questions:

1. 1.

   Do you believe the information communicated to you by the bot was useful?
2. 2.

   Do you believe the bot effectively used the information you shared?
3. 3.

   Do you feel confused about the bot’s behavior?

An additional instructed-response attention check is included among these items, asking the participant to select a specified option; responses that fail it flag the session for review. All items must be answered before *Submit & next game* becomes available. Progress is persisted server-side after each game, so a participant whose session is interrupted resumes at the first unfinished game rather than restarting, and a completion screen is shown after the final game.

## Appendix J Prompts Used

### J.1 Prompts for Model Training & Evaluation

We prepare prompts for four distinct action space configurations, each with and without chain-of-thought (CoT) reasoning. While the system prompt is tailored to each configuration, the user prompt remains consistent across all four. For configurations with CoT, the system prompt includes several illustrative examples to demonstrate the expected reasoning process.

To enhance readability, we provide the full system prompt for the Providing&Seeking configuration with CoT. For the remaining configurations, we highlight only the differences relative to this version. The primary distinctions among the four configurations lie in their permitted action spaces and the corresponding reasoning examples. Although the reasoning examples are largely shared across configurations, minor variations are introduced to reflect the specific situations each agent may encounter.

For the output format, models with CoT reasoning are expected to output their reasoning traces and actions in the format of: <THINK><your reasoning></THINK><ACTION><your action></ACTION>, while the one with no CoT reasoning capability needs to follow the format of: <ACTION><your action></ACTION>.

[⬇](data:text/plain;base64,WW91IGFyZSBwbGF5aW5nIGEgY29vcGVyYXRpdmUgZ2FtZSB3aGVyZSB5b3UgYW5kIGFub3RoZXIgcGxheWVyIG11c3Qgc29ydCBibG9ja3MgaW50byB0aGUgY29ycmVjdCBiaW5zIGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIEVhY2ggcGxheWVyIGhhcyBrbm93bGVkZ2UgYWJvdXQgdGhlIGV4cGVjdGVkIHBsYWNlbWVudCBvZiB0aGUgYmxvY2tzLCBzdWNoIGFzIHdoZXRoZXIgYmxvY2tzIHNob3VsZCBiZSBhbGlnbmVkIGluIHRoZSBzYW1lIHJvdywgY29sdW1uLCBvciBkaWFnb25hbC4gWW91IGNhbiBvbmx5IG1vdmUgYmxvY2tzIGludG8gYmlucyBuZWFyIHlvdSBvciBpbnRvIGEgc2hhcmVkIGJpbiBhY2Nlc3NpYmxlIHRvIGJvdGggcGxheWVycy4gWW91IGNhbm5vdCBhY2Nlc3MgdGhlIG90aGVyIHBsYXllcidzIGJpbnMuCgpUaGUgZ2FtZSBjb25jbHVkZXMgd2hlbiBhbGwgYmxvY2tzIGFyZSBjb3JyZWN0bHkgcGxhY2VkIGluIHRoZSBiaW5zLiBEdXJpbmcgeW91ciB0dXJuLCB5b3UgaGF2ZSBzZXZlcmFsIG9wdGlvbnM6Ci0gTW92ZSBhIGJsb2NrIGZyb20gYSBiaW4gdG8gYW5vdGhlciBiaW4uIEJvdGggYmlucyBtdXN0IGJlIGFjY2Vzc2libGUgdG8geW91LgotIFNoYXJlIGEgcGllY2Ugb2Yga25vd2xlZGdlIHdpdGggdGhlIG90aGVyIHBsYXllci4gVGhlIHNoYXJlZCBrbm93bGVkZ2Ugc2hvdWxkIGJlIHNlbGVjdGVkIGZyb20gdGhlIGtub3dsZWRnZSB5b3UgaGF2ZS4gWW91IGNhbm5vdCBzaGFyZSBrbm93bGVkZ2UgeW91IGRvIG5vdCBoYXZlLgotIFJlcXVlc3Qga25vd2xlZGdlIGZyb20gdGhlIG90aGVyIHBsYXllciBhYm91dCBhIHNwZWNpZmljIGJsb2NrLiAKLSBQYXNzIHlvdXIgdHVybi4KCiMjIEdlbmVyYWwgR3VpZGFuY2UKLSBZb3UgY2FuIG9ubHkgbW92ZSBibG9ja3MgdG8gYmlucyBhY2Nlc3NpYmxlIHRvIHlvdS4KLSBZb3UgY2FuIG9ubHkgc2hhcmUga25vd2xlZGdlIHlvdSBoYXZlLiBETyBOT1Qgc2hhcmUga25vd2xlZGdlIHlvdSBkbyBub3QgaGF2ZSwgbm9yIHJlcXVlc3Qga25vd2xlZGdlIHlvdSBhbHJlYWR5IGhhdmUuCi0gWW91IGNhbiBvbmx5IHJlcXVlc3Qga25vd2xlZGdlIGFib3V0IGEgYmxvY2sgdGhhdCB5b3UgZG8gbm90IGhhdmUga25vd2xlZGdlIG9mLgotIFlvdSBjYW4gb25seSBtb3ZlIG9uZSBibG9jayBhdCBhIHRpbWUuCi0gSWYgeW91IG9yIHRoZSBvdGhlciBwbGF5ZXIgbWFrZSBhbiBpbmNvcnJlY3QgbW92ZSwgaXQgd2lsbCB0ZWxsIHlvdSBpbiB0aGUgYWN0aW9uIGhpc3RvcnkuIERPIE5PVCBtYWtlIHRoZSBzYW1lIGluY29ycmVjdCBtb3ZlIGFnYWluLgoKIyMgQWN0aW9uIEZvcm1hdApZb3VyIGFjdGlvbnMgbXVzdCBiZSBmb3JtYXR0ZWQgYXMgZm9sbG93czoKLSBNb3ZlIGJsb2NrOiAibW92ZSA8YmxvY2s+IGZyb20gPGJpbj4gdG8gPGJpbj4iCi0gU2hhcmUga25vd2xlZGdlOiAic2hhcmUgPGtub3dsZWRnZT4iCi0gUmVxdWVzdCBrbm93bGVkZ2U6ICJhc2sgPGJsb2NrPiIKLSBQYXNzIHlvdXIgdHVybjogInBhc3MiCgp3aGVyZSB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgYmluIG5hbWVzOgotIHBsYXllcjFfYmluCi0gcGxheWVyMl9iaW4KLSBjb21tb25iaW4KLSB0b3BfbGVmdF9iaW4KLSB0b3BfcmlnaHRfYmluCi0gYm90dG9tX2xlZnRfYmluCi0gYm90dG9tX3JpZ2h0X2JpbgoKYW5kIHRoZSBmb2xsb3dpbmcga25vd2xlZGdlIHR5cGVzOgotICg8YmxvY2sxPiwgPGJsb2NrMj4sIHNhbWUsIHJvdykKLSAoPGJsb2NrMT4sIDxibG9jazI+LCBzYW1lLCBjb2x1bW4pCi0gKDxibG9jazE+LCA8YmxvY2syPiwgc2FtZSwgZGlhZ29uYWwpCi0gKDxibG9jazE+LCA8YmxvY2syPiwgc2FtZSwgYmluKQotICg8YmxvY2sxPiwgaW4sIDxiaW4+KQoKYW5kIHRoZSBmb2xsb3dpbmcgYmxvY2sgbmFtZXM6Ci0gYmxvY2swCi0gYmxvY2sxCi0gYmxvY2syCi4uLgoKUGxlYXNlIHN0cmljdGx5IGZvbGxvdyB0aGUgZm9ybWF0IGFib3ZlIHRvIGVuc3VyZSB0aGUgZ2FtZSBydW5zIHNtb290aGx5LgoKIyMgUmVhc29uaW5nIFBoYXNlCgpCZWZvcmUgeW91IHRha2UgYW4gYWN0aW9uLCB5b3Ugc2hvdWxkIHJlYXNvbiBhYm91dCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ2FtZS4gCgpTb21lIGV4YW1wbGVzOgotICJBY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlLCBibG9jazAgc2hvdWxkIGJlIGluIHRvcC1yaWdodCBiaW4uIFNpbmNlIEkgY2Fubm90IHJlYWNoIHRoZSB0b3AtcmlnaHQgYmluLCBJIHNob3VsZCBwYXNzIGl0IHRvIHRoZSBjb21tb24gYmluIHNvIHRoYXQgbXkgcGFydG5lciBjYW4gdGFrZSBpdC4iCi0gIkkga25vdyBibG9jazEgYW5kIGJsb2NrMiBzaG91bGQgYmUgaW4gdGhlIHNhbWUgcm93LiBJIGFsc28ga25vdyBibG9jazEgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgdG9wLXJpZ2h0IGJpbi4gU28gSSBzaG91bGQgbW92ZSBibG9jazIgdG8gdGhlIHRvcC1sZWZ0IGJpbiwgd2hpY2ggaXMgYWxzbyBpbiB0aGUgc2FtZSByb3cgd2l0aCB0aGUgdG9wLXJpZ2h0IGJpbi4iCi0gIkJsb2NrMSBpcyBub3QgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gYWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSBidXQgSSBjYW5ub3QgcmVhY2ggaXQuIEkgc2hvdWxkIHNoYXJlIG15IGtub3dsZWRnZSBhYm91dCBibG9jazEgd2l0aCBteSBwYXJ0bmVyIHNvIHRoYXQgaXQgY2FuIG1vdmUgaXQgdG8gdGhlIGNvcnJlY3QgcG9zaXRpb24uIgotICJBbGwgdGhlIGJsb2NrcyBhcmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gZXhjZXB0IGJsb2NrMi4gSG93ZXZlciwgYWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSBJIGRvbid0IGtub3cgd2hlcmUgdGhlIGJsb2NrMiBzaG91bGQgZ28gaW4uIEkgbWF5IHJhbmRvbWx5IHRyeSBvbmUgb2YgdGhlIGJsb2NrIGluIGZyb250IG9mIG1lLiIKLSAiSSBkb24ndCBrbm93IHdoZXJlIHRoZSBibG9jazMgc2hvdWxkIGdvIGluLiBJIHNob3VsZCBhc2sgbXkgcGFydG5lciBhYm91dCB0aGUga25vd2xlZGdlIG9mIGJsb2NrMy4iCgoKIyMgT3V0cHV0IEZvcm1hdApQbGVhc2UgcHJvdmlkZSB5b3VyIG91dHB1dCBpbiB0aGlzIGZvcm1hdDoKPFRISU5LPjx5b3VyIHJlYXNvbmluZz48L1RISU5LPjxBQ1RJT04+PHlvdXIgYWN0aW9uPjwvQUNUSU9OPg==)

You are playing a cooperative game where you and another player must sort blocks into the correct bins as quickly as possible. Each player has knowledge about the expected placement of the blocks, such as whether blocks should be aligned in the same row, column, or diagonal. You can only move blocks into bins near you or into a shared bin accessible to both players. You cannot access the other player’s bins.

The game concludes when all blocks are correctly placed in the bins. During your turn, you have several options:

- Move a block from a bin to another bin. Both bins must be accessible to you.

- Share a piece of knowledge with the other player. The shared knowledge should be selected from the knowledge you have. You cannot share knowledge you do not have.

- Request knowledge from the other player about a specific block.

- Pass your turn.

## General Guidance

- You can only move blocks to bins accessible to you.

- You can only share knowledge you have. DO NOT share knowledge you do not have, nor request knowledge you already have.

- You can only request knowledge about a block that you do not have knowledge of.

- You can only move one block at a time.

- If you or the other player make an incorrect move, it will tell you in the action history. DO NOT make the same incorrect move again.

## Action Format

Your actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Share knowledge: "share <knowledge>"

- Request knowledge: "ask <block>"

- Pass your turn: "pass"

where we have the following bin names:

- player1\_bin

- player2\_bin

- commonbin

- top\_left\_bin

- top\_right\_bin

- bottom\_left\_bin

- bottom\_right\_bin

and the following knowledge types:

- (<block1>, <block2>, same, row)

- (<block1>, <block2>, same, column)

- (<block1>, <block2>, same, diagonal)

- (<block1>, <block2>, same, bin)

- (<block1>, in, <bin>)

and the following block names:

- block0

- block1

- block2

...

Please strictly follow the format above to ensure the game runs smoothly.

## Reasoning Phase

Before you take an action, you should reason about the current state of the game.

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should share my knowledge about block1 with my partner so that it can move it to the correct position."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try one of the block in front of me."

- "I don’t know where the block3 should go in. I should ask my partner about the knowledge of block3."

## Output Format

Please provide your output in this format:

<THINK><your reasoning></THINK><ACTION><your action></ACTION>

Listing 1: System prompt for fine-tuned Providing & Seeking agents with chain-of-thought reasoning.


[⬇](data:text/plain;base64,WW91IGFyZSBwbGF5aW5nIGEgY29vcGVyYXRpdmUgZ2FtZSAuLi4KCiMjIEdlbmVyYWwgR3VpZGFuY2UKLSBZb3UgY2FuIG9ubHkgbW92ZSBibG9ja3MgdG8gYmlucyBhY2Nlc3NpYmxlIHRvIHlvdS4KLSBZb3UgY2FuIG9ubHkgc2hhcmUga25vd2xlZGdlIHlvdSBoYXZlIGFuZCBzaGFyZSBpdCB3aGVuIHlvdSBhcmUgYXNrZWQuIERPIE5PVCBzaGFyZSBrbm93bGVkZ2UgeW91IGRvIG5vdCBoYXZlLCBub3IgcmVxdWVzdCBrbm93bGVkZ2UgeW91IGFscmVhZHkgaGF2ZS4KLSBZb3UgY2FuIG9ubHkgcmVxdWVzdCBrbm93bGVkZ2UgYWJvdXQgYSBibG9jayB0aGF0IHlvdSBkbyBub3QgaGF2ZSBrbm93bGVkZ2Ugb2YuCgouLi4KCi0gUGFzcyB5b3VyIHR1cm46ICJwYXNzIgoKTm90aWNlIHRoYXQgeW91IGNhbm5vdCBpbml0aWF0ZSBzaGFyaW5nIHRoZSBrbm93bGVkZ2UuIE9ubHkgd2hlbiB5b3UgYXJlIGFza2VkIGJ5IHlvdXIgcGFydG5lciBjYW4geW91IHNoYXJlIHRoZSBrbm93bGVkZ2UuIAoKLi4uCgojIyBSZWFzb25pbmcgUGhhc2UKCkJlZm9yZSB5b3UgdGFrZSBhbiBhY3Rpb24sIHlvdSBzaG91bGQgcmVhc29uIGFib3V0IHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBnYW1lLiAKClNvbWUgZXhhbXBsZXM6Ci0gIkFjY29yZGluZyB0byBteSBrbm93bGVkZ2UsIGJsb2NrMCBzaG91bGQgYmUgaW4gdG9wLXJpZ2h0IGJpbi4gU2luY2UgSSBjYW5ub3QgcmVhY2ggdGhlIHRvcC1yaWdodCBiaW4sIEkgc2hvdWxkIHBhc3MgaXQgdG8gdGhlIGNvbW1vbiBiaW4gc28gdGhhdCBteSBwYXJ0bmVyIGNhbiB0YWtlIGl0LiIKLSAiSSBrbm93IGJsb2NrMSBhbmQgYmxvY2syIHNob3VsZCBiZSBpbiB0aGUgc2FtZSByb3cuIEkgYWxzbyBrbm93IGJsb2NrMSBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSB0b3AtcmlnaHQgYmluLiBTbyBJIHNob3VsZCBtb3ZlIGJsb2NrMiB0byB0aGUgdG9wLWxlZnQgYmluLCB3aGljaCBpcyBhbHNvIGluIHRoZSBzYW1lIHJvdyB3aXRoIHRoZSB0b3AtcmlnaHQgYmluLiIKLSAiQmxvY2sxIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlIGJ1dCBJIGNhbm5vdCByZWFjaCBpdC4gSSBzaG91bGQgd2FpdCBmb3IgbXkgcGFydG5lciB0byBhc2sgYWJvdXQgYmxvY2sxIHNvIHRoYXQgSSBjYW4gc2hhcmUgdGhlIHJlbGF0ZWQga25vd2xlZGdlLiIKLSAiQWxsIHRoZSBibG9ja3MgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGV4Y2VwdCBibG9jazIuIEhvd2V2ZXIsIGFjY29yZGluZyB0byBteSBrbm93bGVkZ2UgSSBkb24ndCBrbm93IHdoZXJlIHRoZSBibG9jazIgc2hvdWxkIGdvIGluLiBJIG1heSByYW5kb21seSB0cnkgb25lIG9mIHRoZSBibG9jayBpbiBmcm9udCBvZiBtZS4iCi0gIkkgZG9uJ3Qga25vdyB3aGVyZSB0aGUgYmxvY2szIHNob3VsZCBnbyBpbi4gSSBzaG91bGQgYXNrIG15IHBhcnRuZXIgYWJvdXQgdGhlIGtub3dsZWRnZSBvZiBibG9jazMuIgoKLi4u)

You are playing a cooperative game ...

## General Guidance

- You can only move blocks to bins accessible to you.

- You can only share knowledge you have and share it when you are asked. DO NOT share knowledge you do not have, nor request knowledge you already have.

- You can only request knowledge about a block that you do not have knowledge of.

...

- Pass your turn: "pass"

Notice that you cannot initiate sharing the knowledge. Only when you are asked by your partner can you share the knowledge.

...

## Reasoning Phase

Before you take an action, you should reason about the current state of the game.

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should wait for my partner to ask about block1 so that I can share the related knowledge."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try one of the block in front of me."

- "I don’t know where the block3 should go in. I should ask my partner about the knowledge of block3."

...

Listing 2: System prompt for fine-tuned Seeking-Only agents with chain-of-thought reasoning. Redundant part is omitted.


[⬇](data:text/plain;base64,WW91IGFyZSBwbGF5aW5nIGEgY29vcGVyYXRpdmUgZ2FtZSAuLi4KClRoZSBnYW1lIGNvbmNsdWRlcyB3aGVuIGFsbCBibG9ja3MgYXJlIGNvcnJlY3RseSBwbGFjZWQgaW4gdGhlIGJpbnMuIER1cmluZyB5b3VyIHR1cm4sIHlvdSBoYXZlIHNldmVyYWwgb3B0aW9uczoKLSBNb3ZlIGEgYmxvY2sgZnJvbSBhIGJpbiB0byBhbm90aGVyIGJpbi4gQm90aCBiaW5zIG11c3QgYmUgYWNjZXNzaWJsZSB0byB5b3UuCi0gU2hhcmUgYSBwaWVjZSBvZiBrbm93bGVkZ2Ugd2l0aCB0aGUgb3RoZXIgcGxheWVyLiBUaGUgc2hhcmVkIGtub3dsZWRnZSBzaG91bGQgYmUgc2VsZWN0ZWQgZnJvbSB0aGUga25vd2xlZGdlIHlvdSBoYXZlLiBZb3UgY2Fubm90IHNoYXJlIGtub3dsZWRnZSB5b3UgZG8gbm90IGhhdmUuCi0gUGFzcyB5b3VyIHR1cm4uCgojIyBHZW5lcmFsIEd1aWRhbmNlCi0gWW91IGNhbiBvbmx5IG1vdmUgYmxvY2tzIHRvIGJpbnMgYWNjZXNzaWJsZSB0byB5b3UuCi0gWW91IGNhbiBvbmx5IHNoYXJlIGtub3dsZWRnZSB5b3UgaGF2ZS4gRE8gTk9UIHNoYXJlIGtub3dsZWRnZSB5b3UgZG8gbm90IGhhdmUuCi0gWW91IGNhbiBvbmx5IG1vdmUgb25lIGJsb2NrIGF0IGEgdGltZS4KLSBJZiB5b3Ugb3IgdGhlIG90aGVyIHBsYXllciBtYWtlIGFuIGluY29ycmVjdCBtb3ZlLCBpdCB3aWxsIHRlbGwgeW91IGluIHRoZSBhY3Rpb24gaGlzdG9yeS4gRE8gTk9UIG1ha2UgdGhlIHNhbWUgaW5jb3JyZWN0IG1vdmUgYWdhaW4uCgojIyBBY3Rpb24gRm9ybWF0CllvdXIgYWN0aW9ucyBtdXN0IGJlIGZvcm1hdHRlZCBhcyBmb2xsb3dzOgotIE1vdmUgYmxvY2s6ICJtb3ZlIDxibG9jaz4gZnJvbSA8YmluPiB0byA8YmluPiIKLSBTaGFyZSBrbm93bGVkZ2U6ICJzaGFyZSA8a25vd2xlZGdlPiIKLSBQYXNzIHlvdXIgdHVybjogInBhc3MiCgouLi4KCiMjIFJlYXNvbmluZyBQaGFzZQoKQmVmb3JlIHlvdSB0YWtlIGFuIGFjdGlvbiwgeW91IHNob3VsZCByZWFzb24gYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGdhbWUuIAoKU29tZSBleGFtcGxlczoKLSAiQWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSwgYmxvY2swIHNob3VsZCBiZSBpbiB0b3AtcmlnaHQgYmluLiBTaW5jZSBJIGNhbm5vdCByZWFjaCB0aGUgdG9wLXJpZ2h0IGJpbiwgSSBzaG91bGQgcGFzcyBpdCB0byB0aGUgY29tbW9uIGJpbiBzbyB0aGF0IG15IHBhcnRuZXIgY2FuIHRha2UgaXQuIgotICJJIGtub3cgYmxvY2sxIGFuZCBibG9jazIgc2hvdWxkIGJlIGluIHRoZSBzYW1lIHJvdy4gSSBhbHNvIGtub3cgYmxvY2sxIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIHRvcC1yaWdodCBiaW4uIFNvIEkgc2hvdWxkIG1vdmUgYmxvY2syIHRvIHRoZSB0b3AtbGVmdCBiaW4sIHdoaWNoIGlzIGFsc28gaW4gdGhlIHNhbWUgcm93IHdpdGggdGhlIHRvcC1yaWdodCBiaW4uIgotICJCbG9jazEgaXMgbm90IGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGFjY29yZGluZyB0byBteSBrbm93bGVkZ2UgYnV0IEkgY2Fubm90IHJlYWNoIGl0LiBJIHNob3VsZCBzaGFyZSBteSBrbm93bGVkZ2UgYWJvdXQgYmxvY2sxIHdpdGggbXkgcGFydG5lciBzbyB0aGF0IGl0IGNhbiBtb3ZlIGl0IHRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uLiIKLSAiQWxsIHRoZSBibG9ja3MgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGV4Y2VwdCBibG9jazIuIEhvd2V2ZXIsIGFjY29yZGluZyB0byBteSBrbm93bGVkZ2UgSSBkb24ndCBrbm93IHdoZXJlIHRoZSBibG9jazIgc2hvdWxkIGdvIGluLiBJIG1heSByYW5kb21seSB0cnkgb25lIG9mIHRoZSBibG9jayBpbiBmcm9udCBvZiBtZS4iCi0gIkkgZG9uJ3Qga25vdyB3aGVyZSB0aGUgYmxvY2szIHNob3VsZCBnbyBpbi4gSSBzaG91bGQgd2FpdCBmb3IgbXkgcGFydG5lciB0byBpbmZvcm0gbWUgYWJvdXQgd2hlcmUgdG8gcGxhY2UgYmxvY2szLiIKCi4uLg==)

You are playing a cooperative game ...

The game concludes when all blocks are correctly placed in the bins. During your turn, you have several options:

- Move a block from a bin to another bin. Both bins must be accessible to you.

- Share a piece of knowledge with the other player. The shared knowledge should be selected from the knowledge you have. You cannot share knowledge you do not have.

- Pass your turn.

## General Guidance

- You can only move blocks to bins accessible to you.

- You can only share knowledge you have. DO NOT share knowledge you do not have.

- You can only move one block at a time.

- If you or the other player make an incorrect move, it will tell you in the action history. DO NOT make the same incorrect move again.

## Action Format

Your actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Share knowledge: "share <knowledge>"

- Pass your turn: "pass"

...

## Reasoning Phase

Before you take an action, you should reason about the current state of the game.

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should share my knowledge about block1 with my partner so that it can move it to the correct position."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try one of the block in front of me."

- "I don’t know where the block3 should go in. I should wait for my partner to inform me about where to place block3."

...

Listing 3: System prompt for fine-tuned Provide-Only agents with chain-of-thought reasoning. Redundant part is omitted.


[⬇](data:text/plain;base64,WW91IGFyZSBwbGF5aW5nIGEgY29vcGVyYXRpdmUgZ2FtZSAuLi4KClRoZSBnYW1lIGNvbmNsdWRlcyB3aGVuIGFsbCBibG9ja3MgYXJlIGNvcnJlY3RseSBwbGFjZWQgaW4gdGhlIGJpbnMuIER1cmluZyB5b3VyIHR1cm4sIHlvdSBoYXZlIHNldmVyYWwgb3B0aW9uczoKLSBNb3ZlIGEgYmxvY2sgZnJvbSBhIGJpbiB0byBhbm90aGVyIGJpbi4gQm90aCBiaW5zIG11c3QgYmUgYWNjZXNzaWJsZSB0byB5b3UuCi0gUGFzcyB5b3VyIHR1cm4uCgojIyBHZW5lcmFsIEd1aWRhbmNlCi0gWW91IGNhbiBvbmx5IG1vdmUgYmxvY2tzIHRvIGJpbnMgYWNjZXNzaWJsZSB0byB5b3UuCi0gWW91IGNhbiBvbmx5IG1vdmUgb25lIGJsb2NrIGF0IGEgdGltZS4KLSBJZiB5b3Ugb3IgdGhlIG90aGVyIHBsYXllciBtYWtlIGFuIGluY29ycmVjdCBtb3ZlLCBpdCB3aWxsIHRlbGwgeW91IGluIHRoZSBhY3Rpb24gaGlzdG9yeS4gRE8gTk9UIG1ha2UgdGhlIHNhbWUgaW5jb3JyZWN0IG1vdmUgYWdhaW4uCgojIyBBY3Rpb24gRm9ybWF0CllvdXIgYWN0aW9ucyBtdXN0IGJlIGZvcm1hdHRlZCBhcyBmb2xsb3dzOgotIE1vdmUgYmxvY2s6ICJtb3ZlIDxibG9jaz4gZnJvbSA8YmluPiB0byA8YmluPiIKLSBQYXNzIHlvdXIgdHVybjogInBhc3MiCgouLi4KCiMjIFJlYXNvbmluZyBQaGFzZQoKQmVmb3JlIHlvdSB0YWtlIGFuIGFjdGlvbiwgeW91IHNob3VsZCByZWFzb24gYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGdhbWUuIAoKU29tZSBleGFtcGxlczoKLSAiQWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSwgYmxvY2swIHNob3VsZCBiZSBpbiB0b3AtcmlnaHQgYmluLiBTaW5jZSBJIGNhbm5vdCByZWFjaCB0aGUgdG9wLXJpZ2h0IGJpbiwgSSBzaG91bGQgcGFzcyBpdCB0byB0aGUgY29tbW9uIGJpbiBzbyB0aGF0IG15IHBhcnRuZXIgY2FuIHRha2UgaXQuIgotICJJIGtub3cgYmxvY2sxIGFuZCBibG9jazIgc2hvdWxkIGJlIGluIHRoZSBzYW1lIHJvdy4gSSBhbHNvIGtub3cgYmxvY2sxIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIHRvcC1yaWdodCBiaW4uIFNvIEkgc2hvdWxkIG1vdmUgYmxvY2syIHRvIHRoZSB0b3AtbGVmdCBiaW4sIHdoaWNoIGlzIGFsc28gaW4gdGhlIHNhbWUgcm93IHdpdGggdGhlIHRvcC1yaWdodCBiaW4uIgotICJCbG9jazEgaXMgbm90IGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGFjY29yZGluZyB0byBteSBrbm93bGVkZ2UgYnV0IEkgY2Fubm90IHJlYWNoIGl0LiBJIHNob3VsZCB3YWl0IGZvciBteSBwYXJ0bmVyIHRvIHB1dCBpdCBpbnRvIHRoZSBjb21tb24gYmluIHNvIHRoYXQgSSBjYW4gcmVhY2ggaXQuIgotICJBbGwgdGhlIGJsb2NrcyBhcmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gZXhjZXB0IGJsb2NrMi4gSG93ZXZlciwgYWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSBJIGRvbid0IGtub3cgd2hlcmUgdGhlIGJsb2NrMiBzaG91bGQgZ28gaW4uIEkgbWF5IHJhbmRvbWx5IHRyeSB0byBwbGFjZSBpdCB0byBvbmUgb2YgdGhlIGJpbnMgaW4gZnJvbnQgb2YgbWUuIgotICJJIGNhbiByZWFjaCBCbG9jazEgYW5kIEJsb2NrMyBzaW5jZSB0aGV5IGFyZSBpbiBmcm9udCBvZiBtZS4gSSBrbm93IHRoZXkgc2hvdWxkIGJlIGluIHRoZSBzYW1lIHJvdywgYnV0IEkgZG8gbm90IGtub3cgZWl0aGVyIG9mIHRoZWlyIGV4YWN0IGV4cGVjdGVkIGxvY2F0aW9ucy4gSSB3aWxsIHRyeSB3aXRoIG1vdmluZyBCbG9jazEgdG8gdGhlIHRvcC1sZWZ0IGJpbiBhcyBhIHN0YXJ0LCBzdXBwb3NpbmcgdGhleSBhcmUgYm90aCBvbiB0aGUgdG9wIHJvdy4iCgouLi4=)

You are playing a cooperative game ...

The game concludes when all blocks are correctly placed in the bins. During your turn, you have several options:

- Move a block from a bin to another bin. Both bins must be accessible to you.

- Pass your turn.

## General Guidance

- You can only move blocks to bins accessible to you.

- You can only move one block at a time.

- If you or the other player make an incorrect move, it will tell you in the action history. DO NOT make the same incorrect move again.

## Action Format

Your actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Pass your turn: "pass"

...

## Reasoning Phase

Before you take an action, you should reason about the current state of the game.

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should wait for my partner to put it into the common bin so that I can reach it."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try to place it to one of the bins in front of me."

- "I can reach Block1 and Block3 since they are in front of me. I know they should be in the same row, but I do not know either of their exact expected locations. I will try with moving Block1 to the top-left bin as a start, supposing they are both on the top row."

...

Listing 4: System prompt for fine-tuned No-Information-Exchange agents with chain-of-thought reasoning. Redundant part is omitted.


[⬇](data:text/plain;base64,WW91IGFyZSBQbGF5ZXJ7cGxheWVyX2lkfSBvbiB0aGUge3NpZGV9IHNpZGUgb2YgdGhlIGdhbWUgYm9hcmQuIFlvdSBoYXZlIHRoZSBmb2xsb3dpbmcga25vd2xlZGdlIGZvciB5b3VyIGdvYWw6Cntrbm93bGVkZ2V9CkN1cnJlbnRseSwgdGhlIGJsb2NrcyBhcmUgbG9jYXRlZCBhcyBmb2xsb3dzOgp7YmxvY2tzfQpZb3UgY2FuIGFjY2VzcyB0aGVzZSBiaW5zOgp7Ymluc30KClRoZSBoaXN0b3J5IG9mIHRoZSBnYW1lIHRpbGwgbm93Ogp7bW92ZV9oaXN0b3J5fQoKV2hhdCBhY3Rpb24gd291bGQgeW91IGxpa2UgdG8gdGFrZT8gUGxlYXNlIHByb3ZpZGUgeW91ciByZWFzb25pbmcgYmVmb3JlIHlvdXIgYWN0aW9uLg==)

You are Player{player\_id} on the {side} side of the game board. You have the following knowledge for your goal:

{knowledge}

Currently, the blocks are located as follows:

{blocks}

You can access these bins:

{bins}

The history of the game till now:

{move\_history}

What action would you like to take? Please provide your reasoning before your action.

Listing 5: User prompt for fine-tuned agents with chain-of-thought reasoning.


[⬇](data:text/plain;base64,WW91IGFyZSBQbGF5ZXJ7cGxheWVyX2lkfSBvbiB0aGUge3NpZGV9IHNpZGUgb2YgdGhlIGdhbWUgYm9hcmQuIFlvdSBoYXZlIHRoZSBmb2xsb3dpbmcga25vd2xlZGdlIGZvciB5b3VyIGdvYWw6Cntrbm93bGVkZ2V9CkN1cnJlbnRseSwgdGhlIGJsb2NrcyBhcmUgbG9jYXRlZCBhcyBmb2xsb3dzOgp7YmxvY2tzfQpZb3UgY2FuIGFjY2VzcyB0aGVzZSBiaW5zOgp7Ymluc30KClRoZSBoaXN0b3J5IG9mIHRoZSBnYW1lIHRpbGwgbm93Ogp7bW92ZV9oaXN0b3J5fQoKV2hhdCBhY3Rpb24gd291bGQgeW91IGxpa2UgdG8gdGFrZT8=)

You are Player{player\_id} on the {side} side of the game board. You have the following knowledge for your goal:

{knowledge}

Currently, the blocks are located as follows:

{blocks}

You can access these bins:

{bins}

The history of the game till now:

{move\_history}

What action would you like to take?

Listing 6: User prompt for fine-tuned agents without chain-of-thought reasoning.

### J.2 Prompts for Evaluation with GPT4o

The prompts used for GPT4o evaluation are slightly different than the ones we use for fine-tuned model training and evaluation. The prompts designed for GPT4o involve more detailed explanations and proper guidance to make sure the comparison is relatively fair. We have also tried using the same prompts for evaluation, while the preliminary result shows that GPT4o is hard to understand the game setting. This drives us to add extra guidance for a better comparison.

[⬇](data:text/plain;base64,WW91IGFyZSBwbGF5aW5nIGEgY29vcGVyYXRpdmUgZ2FtZSB3aGVyZSB5b3UgYW5kIGFub3RoZXIgcGxheWVyIG11c3Qgc29ydCBibG9ja3MgaW50byB0aGUgY29ycmVjdCBiaW5zIGFzIHF1aWNrbHkgYXMgcG9zc2libGUuIEVhY2ggcGxheWVyIGhhcyBrbm93bGVkZ2UgYWJvdXQgdGhlIGV4cGVjdGVkIHBsYWNlbWVudCBvZiB0aGUgYmxvY2tzLCBzdWNoIGFzIHdoZXRoZXIgYmxvY2tzIHNob3VsZCBiZSBhbGlnbmVkIGluIHRoZSBzYW1lIHJvdywgY29sdW1uLCBvciBkaWFnb25hbC4gWW91IGNhbiBvbmx5IG1vdmUgYmxvY2tzIGludG8gYmlucyBuZWFyIHlvdSBvciBpbnRvIGEgc2hhcmVkIGJpbiBhY2Nlc3NpYmxlIHRvIGJvdGggcGxheWVycy4gWW91IGNhbm5vdCBhY2Nlc3MgdGhlIG90aGVyIHBsYXllcidzIGJpbnMuCgpUaGUgZ2FtZSBjb25jbHVkZXMgd2hlbiBhbGwgYmxvY2tzIGFyZSBjb3JyZWN0bHkgcGxhY2VkIGluIHRoZSBiaW5zLiBEdXJpbmcgeW91ciB0dXJuLCB5b3UgaGF2ZSBzZXZlcmFsIG9wdGlvbnM6Ci0gTW92ZSBhIGJsb2NrIGZyb20gYSBiaW4gdG8gYW5vdGhlciBiaW4uIEJvdGggYmlucyBtdXN0IGJlIGFjY2Vzc2libGUgdG8geW91LgotIFNoYXJlIGEgcGllY2Ugb2Yga25vd2xlZGdlIHdpdGggdGhlIG90aGVyIHBsYXllci4gVGhlIHNoYXJlZCBrbm93bGVkZ2Ugc2hvdWxkIGJlIHNlbGVjdGVkIGZyb20gdGhlIGtub3dsZWRnZSB5b3UgaGF2ZS4gWW91IGNhbm5vdCBzaGFyZSBrbm93bGVkZ2UgeW91IGRvIG5vdCBoYXZlLgotIFJlcXVlc3Qga25vd2xlZGdlIGZyb20gdGhlIG90aGVyIHBsYXllciBhYm91dCBhIHNwZWNpZmljIGJsb2NrLiAKLSBQYXNzIHlvdXIgdHVybi4KCiMjIEdlbmVyYWwgR3VpZGFuY2UKLSBZb3UgY2FuIG9ubHkgbW92ZSBibG9ja3MgdG8gYmlucyBhY2Nlc3NpYmxlIHRvIHlvdS4KLSBZb3UgY2FuIG9ubHkgc2hhcmUga25vd2xlZGdlIHlvdSBoYXZlLiBETyBOT1Qgc2hhcmUga25vd2xlZGdlIHlvdSBkbyBub3QgaGF2ZSwgbm9yIHJlcXVlc3Qga25vd2xlZGdlIHlvdSBhbHJlYWR5IGhhdmUuCi0gWW91IHNob3VsZCByZXF1ZXN0IGtub3dsZWRnZSBhYm91dCBhIGJsb2NrIHRoYXQgeW91IGRvIG5vdCBoYXZlIGtub3dsZWRnZSBvZi4KLSBZb3UgY2FuIG9ubHkgbW92ZSBvbmUgYmxvY2sgYXQgYSB0aW1lLgotIFdoZW4gdGhlIGtub3dsZWRnZSBzYXlzIHR3byBibG9ja3MgYXJlIGluIHRoZSBzYW1lIHJvdywgY29sdW1uLCBvciBkaWFnb25hbCwgaXQgbWVhbnMgdGhleSBhcmUgbm90IGluIHRoZSBzYW1lIGJpbi4KLSBJZiB5b3Ugb3IgdGhlIG90aGVyIHBsYXllciBtYWtlIGFuIGluY29ycmVjdCBtb3ZlLCBpdCB3aWxsIHRlbGwgeW91IGluIHRoZSBhY3Rpb24gaGlzdG9yeS4gWW91IE1VU1QgTk9UIG1ha2UgdGhlIHNhbWUgaW5jb3JyZWN0IG1vdmUgYWdhaW4uIFlvdSBNVVNUIGNhcmVmdWxseSBjaGVjayB0aGUgYWN0aW9uIGhpc3RvcnkgYmVmb3JlIHlvdSBtYWtlIGEgbW92ZS4KLSBJZiB5b3VyIHBhcnRuZXIgYXNrIGFib3V0IHRoZSBrbm93bGVkZ2Ugb2YgYSBibG9jaywgeW91IHNob3VsZCBwcm92aWRlIHRoZSBrbm93bGVkZ2UgaWYgeW91IGhhdmUgaXQuIENhcmVmdWxseSB0aGluayBhYm91dCB3aGljaCBwaWVjZSBvZiBrbm93bGVkZ2UgaXMgdGhlIG1vc3QgaGVscGZ1bCB0byBzaGFyZS4KLSBUaGUgZ2FtZSB3aWxsIHN0b3AgcGxheWVycyBmcm9tIHBsYWNpbmcgdGhlIGJsb2NrcyBpbnRvIHRoZSB3cm9uZyBiaW5zLiBTbyBpZiB5b3Ugc2VlIGEgYmxvY2sgcGxhY2VkIGluIGEgYmluLCB0aGF0IG1lYW5zIGl0IGlzIHRoZSBjb3JyZWN0IGJpbiBmb3IgdGhhdCBibG9jay4KCgojIyBSZWFzb25pbmcgRm9ybWF0CllvdSBuZWVkIHRvIHJlYXNvbiBhYm91dCB3aGljaCBhY3Rpb24gdG8gdGFrZSBiZWZvcmUgeW91IG1ha2UgdGhlIGRlY2lzaW9uLiBTb21lIGV4YW1wbGVzIG9mIHJlYXNvbmluZzoKLSAiQWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSwgYmxvY2swIHNob3VsZCBiZSBpbiB0b3AtcmlnaHQgYmluLiBTaW5jZSBJIGNhbm5vdCByZWFjaCB0aGUgdG9wLXJpZ2h0IGJpbiwgSSBzaG91bGQgcGFzcyBpdCB0byB0aGUgY29tbW9uIGJpbiBzbyB0aGF0IG15IHBhcnRuZXIgY2FuIHRha2UgaXQuIgotICJJIGtub3cgYmxvY2sxIGFuZCBibG9jazIgc2hvdWxkIGJlIGluIHRoZSBzYW1lIHJvdy4gSSBhbHNvIGtub3cgYmxvY2sxIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIHRvcC1yaWdodCBiaW4uIFNvIEkgc2hvdWxkIG1vdmUgYmxvY2syIHRvIHRoZSB0b3AtbGVmdCBiaW4sIHdoaWNoIGlzIGFsc28gaW4gdGhlIHNhbWUgcm93IHdpdGggdGhlIHRvcC1yaWdodCBiaW4uIgotICJCbG9jazEgaXMgb24gdGhlIHNhbWUgcm93IHdpdGggYmxvY2syLiBCbG9jazIgaXMgb24gdGhlIHNhbWUgY29sdW1uIHdpdGggYmxvY2szLiBTbyBJIGNhbiBkZWR1Y2UgdGhhdCBibG9jazEgYW5kIGJsb2NrMyBzaG91bGQgYmUgb24gdGhlIHNhbWUgZGlhZ29uYWwuIgotICJCbG9jazEgaXMgc3RpbGwgbm90IG1vdmVkIGJ1dCBJIGNhbm5vdCByZWFjaCBpdC4gSSBzaG91bGQgc2hhcmUgbXkga25vd2xlZGdlIGFib3V0IGJsb2NrMSB3aXRoIG15IHBhcnRuZXIgc28gdGhhdCBpdCBjYW4gbW92ZSBpdCB0byB0aGUgY29ycmVjdCBwb3NpdGlvbi4iCi0gIkFsbCB0aGUgYmxvY2tzIGFyZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBleGNlcHQgYmxvY2syLiBIb3dldmVyLCBhY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlIEkgZG9uJ3Qga25vdyB3aGVyZSB0aGUgYmxvY2syIHNob3VsZCBnbyBpbi4gSSBtYXkgYXNrIG15IHBhcnRuZXIgYWJvdXQgdGhlIGtub3dsZWRnZSBvZiBpdC4iCi0gIkkgaGF2ZSBubyBrbm93bGVkZ2UgYWJvdXQgYmxvY2syLCBidXQgSSBzYXcgYmxvY2syIGlzIGFscmVhZHkgcGxhY2VkIGluIHRvcC1sZWZ0IGJpbiwgc28gSSBzaG91bGQgYXNzdW1lIHRoYXQgaXQgaXMgdGhlIGNvcnJlY3QgZmluYWwgbG9jYXRpb24uIgoKIyMgQWN0aW9uIEZvcm1hdApZb3VyIGFjdGlvbnMgbXVzdCBiZSBmb3JtYXR0ZWQgYXMgZm9sbG93czoKLSBNb3ZlIGJsb2NrOiAibW92ZSA8YmxvY2s+IGZyb20gPGJpbj4gdG8gPGJpbj4iCi0gU2hhcmUga25vd2xlZGdlOiAic2hhcmUgPGtub3dsZWRnZT4iCi0gUmVxdWVzdCBrbm93bGVkZ2U6ICJhc2sgPGJsb2NrPiIKLSBQYXNzIHlvdXIgdHVybjogInBhc3MiCgp3aGVyZSB3ZSBoYXZlIHRoZSBmb2xsb3dpbmcgYmluIG5hbWVzOgotIHBsYXllcjFfYmluCi0gcGxheWVyMl9iaW4KLSBjb21tb25iaW4KLSB0b3BfbGVmdF9iaW4KLSB0b3BfcmlnaHRfYmluCi0gYm90dG9tX2xlZnRfYmluCi0gYm90dG9tX3JpZ2h0X2JpbgoKYW5kIHRoZSBmb2xsb3dpbmcga25vd2xlZGdlIHR5cGVzOgotICg8YmxvY2sxPiwgPGJsb2NrMj4sIHNhbWUsIHJvdykKLSAoPGJsb2NrMT4sIDxibG9jazI+LCBzYW1lLCBjb2x1bW4pCi0gKDxibG9jazE+LCA8YmxvY2syPiwgc2FtZSwgZGlhZ29uYWwpCi0gKDxibG9jazE+LCA8YmxvY2syPiwgc2FtZSwgYmluKQotICg8YmxvY2sxPiwgaW4sIDxiaW4+KQoKYW5kIHRoZSBmb2xsb3dpbmcgYmxvY2sgbmFtZXM6Ci0gYmxvY2swCi0gYmxvY2sxCi0gYmxvY2syCi4uLgoKUGxlYXNlIHN0cmljdGx5IGZvbGxvdyB0aGUgZm9ybWF0IGFib3ZlIHRvIGVuc3VyZSB0aGUgZ2FtZSBydW5zIHNtb290aGx5LgoKIyMgT3V0cHV0IEZvcm1hdApQbGVhc2UgcHJvdmlkZSB5b3VyIG91dHB1dCBpbiB0aGlzIGZvcm1hdDoKPFRISU5LPjx5b3VyIHJlYXNvbmluZz48L1RISU5LPjxBQ1RJT04+PHlvdXIgYWN0aW9uPjwvQUNUSU9OPg==)

You are playing a cooperative game where you and another player must sort blocks into the correct bins as quickly as possible. Each player has knowledge about the expected placement of the blocks, such as whether blocks should be aligned in the same row, column, or diagonal. You can only move blocks into bins near you or into a shared bin accessible to both players. You cannot access the other player’s bins.

The game concludes when all blocks are correctly placed in the bins. During your turn, you have several options:

- Move a block from a bin to another bin. Both bins must be accessible to you.

- Share a piece of knowledge with the other player. The shared knowledge should be selected from the knowledge you have. You cannot share knowledge you do not have.

- Request knowledge from the other player about a specific block.

- Pass your turn.

## General Guidance

- You can only move blocks to bins accessible to you.

- You can only share knowledge you have. DO NOT share knowledge you do not have, nor request knowledge you already have.

- You should request knowledge about a block that you do not have knowledge of.

- You can only move one block at a time.

- When the knowledge says two blocks are in the same row, column, or diagonal, it means they are not in the same bin.

- If you or the other player make an incorrect move, it will tell you in the action history. You MUST NOT make the same incorrect move again. You MUST carefully check the action history before you make a move.

- If your partner ask about the knowledge of a block, you should provide the knowledge if you have it. Carefully think about which piece of knowledge is the most helpful to share.

- The game will stop players from placing the blocks into the wrong bins. So if you see a block placed in a bin, that means it is the correct bin for that block.

## Reasoning Format

You need to reason about which action to take before you make the decision. Some examples of reasoning:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is on the same row with block2. Block2 is on the same column with block3. So I can deduce that block1 and block3 should be on the same diagonal."

- "Block1 is still not moved but I cannot reach it. I should share my knowledge about block1 with my partner so that it can move it to the correct position."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may ask my partner about the knowledge of it."

- "I have no knowledge about block2, but I saw block2 is already placed in top-left bin, so I should assume that it is the correct final location."

## Action Format

Your actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Share knowledge: "share <knowledge>"

- Request knowledge: "ask <block>"

- Pass your turn: "pass"

where we have the following bin names:

- player1\_bin

- player2\_bin

- commonbin

- top\_left\_bin

- top\_right\_bin

- bottom\_left\_bin

- bottom\_right\_bin

and the following knowledge types:

- (<block1>, <block2>, same, row)

- (<block1>, <block2>, same, column)

- (<block1>, <block2>, same, diagonal)

- (<block1>, <block2>, same, bin)

- (<block1>, in, <bin>)

and the following block names:

- block0

- block1

- block2

...

Please strictly follow the format above to ensure the game runs smoothly.

## Output Format

Please provide your output in this format:

<THINK><your reasoning></THINK><ACTION><your action></ACTION>

Listing 7: System prompt for GPT4o agents with chain-of-thought reasoning.


[⬇](data:text/plain;base64,WW91IGFyZSBQbGF5ZXJ7cGxheWVyX2lkfSBvbiB0aGUge3NpZGV9IHNpZGUgb2YgdGhlIGdhbWUgYm9hcmQuIFlvdSBoYXZlIHRoZSBmb2xsb3dpbmcga25vd2xlZGdlIGZvciB5b3VyIGdvYWw6Cntrbm93bGVkZ2V9CkN1cnJlbnRseSwgdGhlIGJsb2NrcyBhcmUgbG9jYXRlZCBhcyBmb2xsb3dzOgp7YmxvY2tzfQpZb3UgY2FuIGFjY2VzcyB0aGVzZSBiaW5zOgp7Ymluc30KClRoZSBoaXN0b3J5IG9mIHRoZSBnYW1lIHRpbGwgbm93Ogp7bW92ZV9oaXN0b3J5fQoKV2hhdCBhY3Rpb24gd291bGQgeW91IGxpa2UgdG8gdGFrZT8gWW91IG5lZWQgdG8gYmUgZnVsbHkgY29udmluY2VkIG9mIHlvdXIgYWN0aW9uIGJlZm9yZSB5b3UgbWFrZSBhIG1vdmUuIFBsZWFzZSBwcm92aWRlIHlvdXIgcmVhc29uaW5nIGJlZm9yZSB5b3VyIGFjdGlvbi4gWW91ciByZWFzb25pbmcgc2hvdWxkIGJlIGNvbmNpc2UgZW5vdWdoIHdpdGhpbiAzIHNlbnRlbmNlcy4=)

You are Player{player\_id} on the {side} side of the game board. You have the following knowledge for your goal:

{knowledge}

Currently, the blocks are located as follows:

{blocks}

You can access these bins:

{bins}

The history of the game till now:

{move\_history}

What action would you like to take? You need to be fully convinced of your action before you make a move. Please provide your reasoning before your action. Your reasoning should be concise enough within 3 sentences.

Listing 8: User prompt for GPT4o agents without chain-of-thought reasoning.

### J.3 Prompts for Generating Reasoning Traces with GPT4o for Model Fine-tuning

Using a large, well-trained language model to generate reasoning traces as supervision for smaller models has been widely recognized as an effective strategy to enhance reasoning capabilities. In our setup, we leverage GPT-4o to generate such reasoning traces, following the pipeline outlined below:

1. 1.

   We first use a planner to generate a good solution for a given game instance. The generation process can be found in Appendix [B](https://arxiv.org/html/2510.25595v2#A2 "Appendix B Data Generation ‣ Communication and Verification in LLM Agents towards Collaboration under Information Asymmetry").
2. 2.

   At each turn, we present GPT-4o with both the current game state and the corresponding action suggested by the planner.
3. 3.

   GPT-4o is then prompted to assume it is the agent taking the given action, and to generate a rationale for this decision from a first-person perspective.

The prompts used for this process are provided below. As with the training setup, we employ distinct system prompts for each of the four action space configurations, while keeping the user prompt consistent across all settings.

[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgYXNzaXN0YW50IHRoYXQgcHJvdmlkZXMgdGhlIHJlYXNvbmluZyBwcm9jZXNzIGZvciB0aGUgZ2l2ZW4gcGxheXMgb2Ygb25lIHBsYXllciBpbiB0aGUgZ2FtZS4KCllvdSBhcmUgd2F0Y2hpbmcgYW4gYWdlbnQgcGxheWluZyBhIGNvb3BlcmF0aXZlIGdhbWUgd2hlcmUgdHdvIHBsYXllcnMgbXVzdCBzb3J0IGJsb2NrcyBpbnRvIHRoZSBjb3JyZWN0IGJpbnMgYXMgcXVpY2tseSBhcyBwb3NzaWJsZS4gRWFjaCBwbGF5ZXIgaGFzIGtub3dsZWRnZSBhYm91dCB0aGUgZXhwZWN0ZWQgcGxhY2VtZW50IG9mIHRoZSBibG9ja3MsIHN1Y2ggYXMgd2hldGhlciBibG9ja3Mgc2hvdWxkIGJlIGFsaWduZWQgaW4gdGhlIHNhbWUgcm93LCBjb2x1bW4sIG9yIGRpYWdvbmFsLiBJdCBjYW4gb25seSBtb3ZlIGJsb2NrcyBpbnRvIGJpbnMgbmVhciBpdCBvciBpbnRvIGEgc2hhcmVkIGJpbiBhY2Nlc3NpYmxlIHRvIGJvdGggcGxheWVycy4gSXQgY2Fubm90IGFjY2VzcyB0aGUgb3RoZXIgcGxheWVyJ3MgYmlucy4KClRoZSBnYW1lIGZpbmlzaGVzIHdoZW4gYWxsIGJsb2NrcyBhcmUgY29ycmVjdGx5IHBsYWNlZCBpbiB0aGUgcmVxdWlyZWQgYmlucy4gRHVyaW5nIHRoZSBhZ2VudCdzIHR1cm4sIGl0IGhhcyBzZXZlcmFsIG9wdGlvbnM6Ci0gTW92ZSBhIGJsb2NrIHRvIGEgbmVhcmJ5IGJpbiBvciB0aGUgc2hhcmVkIGJpbi4KLSBTaGFyZSBhIHBpZWNlIG9mIGtub3dsZWRnZSB3aXRoIHRoZSBvdGhlciBwbGF5ZXIuCi0gUmVxdWVzdCBrbm93bGVkZ2UgZnJvbSB0aGUgb3RoZXIgcGxheWVyIGFib3V0IGEgc3BlY2lmaWMgYmxvY2suCi0gUGFzcyBpdHMgdHVybi4KCkl0cyBhY3Rpb25zIG11c3QgYmUgZm9ybWF0dGVkIGFzIGZvbGxvd3M6Ci0gTW92ZSBibG9jazogIm1vdmUgPGJsb2NrPiBmcm9tIDxiaW4+IHRvIDxiaW4+IgotIFNoYXJlIGtub3dsZWRnZTogInNoYXJlIDxrbm93bGVkZ2U+IgotIFJlcXVlc3Qga25vd2xlZGdlOiAiYXNrIDxibG9jaz4iCi0gUGFzcyBpdHMgdHVybjogInBhc3MiCgojIyBZb3VyIFRhc2sKWW91IGFyZSBnaXZlbiB0aGUgYWdlbnQncyBhY3Rpb24gYW5kIHlvdSBuZWVkIHRvIHByb3ZpZGUgdGhlIHJlYXNvbmluZyBiZWhpbmQgdGhlIGFjdGlvbi4gUGxlYXNlIHByb3ZpZGUgeW91ciBvdXRwdXQgaW4gZmlyc3QtcGVyc29uIHZpZXcgYXMgaWYgeW91IGFyZSB0aGUgYWdlbnQgdGhhdCBtYWtlcyB0aGUgZGVjaXNpb24uCgpTb21lIGV4YW1wbGVzOgotICJBY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlLCBibG9jazAgc2hvdWxkIGJlIGluIHRvcC1yaWdodCBiaW4uIFNpbmNlIEkgY2Fubm90IHJlYWNoIHRoZSB0b3AtcmlnaHQgYmluLCBJIHNob3VsZCBwYXNzIGl0IHRvIHRoZSBjb21tb24gYmluIHNvIHRoYXQgbXkgcGFydG5lciBjYW4gdGFrZSBpdC4iCi0gIkkga25vdyBibG9jazEgYW5kIGJsb2NrMiBzaG91bGQgYmUgaW4gdGhlIHNhbWUgcm93LiBJIGFsc28ga25vdyBibG9jazEgc2hvdWxkIGJlIHBsYWNlZCBpbiB0aGUgdG9wLXJpZ2h0IGJpbi4gU28gSSBzaG91bGQgbW92ZSBibG9jazIgdG8gdGhlIHRvcC1sZWZ0IGJpbiwgd2hpY2ggaXMgYWxzbyBpbiB0aGUgc2FtZSByb3cgd2l0aCB0aGUgdG9wLXJpZ2h0IGJpbi4iCi0gIkJsb2NrMSBpcyBub3QgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gYWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSBidXQgSSBjYW5ub3QgcmVhY2ggaXQuIEkgc2hvdWxkIHNoYXJlIG15IGtub3dsZWRnZSBhYm91dCBibG9jazEgd2l0aCBteSBwYXJ0bmVyIHNvIHRoYXQgaXQgY2FuIG1vdmUgaXQgdG8gdGhlIGNvcnJlY3QgcG9zaXRpb24uIgotICJBbGwgdGhlIGJsb2NrcyBhcmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gZXhjZXB0IGJsb2NrMi4gSG93ZXZlciwgYWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSBJIGRvbid0IGtub3cgd2hlcmUgdGhlIGJsb2NrMiBzaG91bGQgZ28gaW4uIEkgbWF5IHJhbmRvbWx5IHRyeSBvbmUgb2YgdGhlIGJsb2NrIGluIGZyb250IG9mIG1lLiIKLSAiSSBkb24ndCBrbm93IHdoZXJlIHRoZSBibG9jazMgc2hvdWxkIGdvIGluLiBJIHNob3VsZCBhc2sgbXkgcGFydG5lciBhYm91dCB0aGUga25vd2xlZGdlIG9mIGJsb2NrMy4iCgojIyBHZW5lcmFsIEd1aWRlbGluZXMKCi0gUHJvdmlkZSBhIGNsZWFyIGFuZCBjb25jaXNlIGV4cGxhbmF0aW9uIGZvciB0aGUgYWdlbnQncyBhY3Rpb24uIE5vIG1vcmUgdGhhbiAyLTMgc2VudGVuY2VzIGFyZSBuZWVkZWQuCi0gVGhlIGdpdmVuIGFjdGlvbiBtYXkgbm90IGJlIHRoZSBiZXN0IG1vdmUsIGJ1dCB5b3Ugc2hvdWxkIGV4cGxhaW4gdGhlIHJlYXNvbmluZyBiZWhpbmQgaXQuCi0gWW91IGNhbiByZWZlciB0byB0aGUgYWdlbnQgYXMgIkkiIG9yICJtZSIgaW4geW91ciByZXNwb25zZS4=)

You are the assistant that provides the reasoning process for the given plays of one player in the game.

You are watching an agent playing a cooperative game where two players must sort blocks into the correct bins as quickly as possible. Each player has knowledge about the expected placement of the blocks, such as whether blocks should be aligned in the same row, column, or diagonal. It can only move blocks into bins near it or into a shared bin accessible to both players. It cannot access the other player’s bins.

The game finishes when all blocks are correctly placed in the required bins. During the agent’s turn, it has several options:

- Move a block to a nearby bin or the shared bin.

- Share a piece of knowledge with the other player.

- Request knowledge from the other player about a specific block.

- Pass its turn.

Its actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Share knowledge: "share <knowledge>"

- Request knowledge: "ask <block>"

- Pass its turn: "pass"

## Your Task

You are given the agent’s action and you need to provide the reasoning behind the action. Please provide your output in first-person view as if you are the agent that makes the decision.

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should share my knowledge about block1 with my partner so that it can move it to the correct position."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try one of the block in front of me."

- "I don’t know where the block3 should go in. I should ask my partner about the knowledge of block3."

## General Guidelines

- Provide a clear and concise explanation for the agent’s action. No more than 2-3 sentences are needed.

- The given action may not be the best move, but you should explain the reasoning behind it.

- You can refer to the agent as "I" or "me" in your response.

Listing 9: System prompt for GPT4o generating reasoning traces for Providing & Seeking agents.


[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgYXNzaXN0YW50IHRoYXQgcHJvdmlkZXMgdGhlIHJlYXNvbmluZyBwcm9jZXNzIGZvciB0aGUgZ2l2ZW4gcGxheXMgb2Ygb25lIHBsYXllciBpbiB0aGUgZ2FtZS4KCi4uLgoKVGhlIGdhbWUgZmluaXNoZXMgd2hlbiBhbGwgYmxvY2tzIGFyZSBjb3JyZWN0bHkgcGxhY2VkIGluIHRoZSByZXF1aXJlZCBiaW5zLiBEdXJpbmcgdGhlIGFnZW50J3MgdHVybiwgaXQgaGFzIHNldmVyYWwgb3B0aW9uczoKLSBNb3ZlIGEgYmxvY2sgdG8gYSBuZWFyYnkgYmluIG9yIHRoZSBzaGFyZWQgYmluLgotIFNoYXJlIGEgcGllY2Ugb2Yga25vd2xlZGdlIHdpdGggdGhlIG90aGVyIHBsYXllci4KLSBSZXF1ZXN0IGtub3dsZWRnZSBmcm9tIHRoZSBvdGhlciBwbGF5ZXIgYWJvdXQgYSBzcGVjaWZpYyBibG9jay4KLSBQYXNzIGl0cyB0dXJuLgoKSXRzIGFjdGlvbnMgbXVzdCBiZSBmb3JtYXR0ZWQgYXMgZm9sbG93czoKLSBNb3ZlIGJsb2NrOiAibW92ZSA8YmxvY2s+IGZyb20gPGJpbj4gdG8gPGJpbj4iCi0gU2hhcmUga25vd2xlZGdlOiAic2hhcmUgPGtub3dsZWRnZT4iCi0gUmVxdWVzdCBrbm93bGVkZ2U6ICJhc2sgPGJsb2NrPiIKLSBQYXNzIGl0cyB0dXJuOiAicGFzcyIKCk5vdGljZSB0aGF0IHRoZSBhZ2VudCBjYW5ub3QgaW5pdGlhdGUgc2hhcmluZyB0aGUga25vd2xlZGdlLiBPbmx5IHdoZW4gdGhlIGFnZW50IGlzIGFza2VkLCBpdCBjYW4gc2hhcmUgdGhlIGtub3dsZWRnZS4gCgouLi4KClNvbWUgZXhhbXBsZXM6Ci0gIkFjY29yZGluZyB0byBteSBrbm93bGVkZ2UsIGJsb2NrMCBzaG91bGQgYmUgaW4gdG9wLXJpZ2h0IGJpbi4gU2luY2UgSSBjYW5ub3QgcmVhY2ggdGhlIHRvcC1yaWdodCBiaW4sIEkgc2hvdWxkIHBhc3MgaXQgdG8gdGhlIGNvbW1vbiBiaW4gc28gdGhhdCBteSBwYXJ0bmVyIGNhbiB0YWtlIGl0LiIKLSAiSSBrbm93IGJsb2NrMSBhbmQgYmxvY2syIHNob3VsZCBiZSBpbiB0aGUgc2FtZSByb3cuIEkgYWxzbyBrbm93IGJsb2NrMSBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSB0b3AtcmlnaHQgYmluLiBTbyBJIHNob3VsZCBtb3ZlIGJsb2NrMiB0byB0aGUgdG9wLWxlZnQgYmluLCB3aGljaCBpcyBhbHNvIGluIHRoZSBzYW1lIHJvdyB3aXRoIHRoZSB0b3AtcmlnaHQgYmluLiIKLSAiQmxvY2sxIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlIGJ1dCBJIGNhbm5vdCByZWFjaCBpdC4gSSBzaG91bGQgd2FpdCBmb3IgbXkgcGFydG5lciB0byBhc2sgYWJvdXQgYmxvY2sxIHNvIHRoYXQgSSBjYW4gc2hhcmUgdGhlIHJlbGF0ZWQga25vd2xlZGdlLiIKLSAiQWxsIHRoZSBibG9ja3MgYXJlIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGV4Y2VwdCBibG9jazIuIEhvd2V2ZXIsIGFjY29yZGluZyB0byBteSBrbm93bGVkZ2UgSSBkb24ndCBrbm93IHdoZXJlIHRoZSBibG9jazIgc2hvdWxkIGdvIGluLiBJIG1heSByYW5kb21seSB0cnkgb25lIG9mIHRoZSBibG9jayBpbiBmcm9udCBvZiBtZS4iCi0gIkkgZG9uJ3Qga25vdyB3aGVyZSB0aGUgYmxvY2szIHNob3VsZCBnbyBpbi4gSSBzaG91bGQgYXNrIG15IHBhcnRuZXIgYWJvdXQgdGhlIGtub3dsZWRnZSBvZiBibG9jazMuIgoKLi4u)

You are the assistant that provides the reasoning process for the given plays of one player in the game.

...

The game finishes when all blocks are correctly placed in the required bins. During the agent’s turn, it has several options:

- Move a block to a nearby bin or the shared bin.

- Share a piece of knowledge with the other player.

- Request knowledge from the other player about a specific block.

- Pass its turn.

Its actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Share knowledge: "share <knowledge>"

- Request knowledge: "ask <block>"

- Pass its turn: "pass"

Notice that the agent cannot initiate sharing the knowledge. Only when the agent is asked, it can share the knowledge.

...

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should wait for my partner to ask about block1 so that I can share the related knowledge."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try one of the block in front of me."

- "I don’t know where the block3 should go in. I should ask my partner about the knowledge of block3."

...

Listing 10: System prompt for GPT4o generating reasoning traces for Seeking-Only agents. Redundant part is omitted.


[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgYXNzaXN0YW50IHRoYXQgcHJvdmlkZXMgdGhlIHJlYXNvbmluZyBwcm9jZXNzIGZvciB0aGUgZ2l2ZW4gcGxheXMgb2Ygb25lIHBsYXllciBpbiB0aGUgZ2FtZS4KCi4uLgoKVGhlIGdhbWUgZmluaXNoZXMgd2hlbiBhbGwgYmxvY2tzIGFyZSBjb3JyZWN0bHkgcGxhY2VkIGluIHRoZSByZXF1aXJlZCBiaW5zLiBEdXJpbmcgdGhlIGFnZW50J3MgdHVybiwgaXQgaGFzIHNldmVyYWwgb3B0aW9uczoKLSBNb3ZlIGEgYmxvY2sgdG8gYSBuZWFyYnkgYmluIG9yIHRoZSBzaGFyZWQgYmluLgotIFNoYXJlIGEgcGllY2Ugb2Yga25vd2xlZGdlIHdpdGggdGhlIG90aGVyIHBsYXllci4KLSBQYXNzIGl0cyB0dXJuLgoKSXRzIGFjdGlvbnMgbXVzdCBiZSBmb3JtYXR0ZWQgYXMgZm9sbG93czoKLSBNb3ZlIGJsb2NrOiAibW92ZSA8YmxvY2s+IGZyb20gPGJpbj4gdG8gPGJpbj4iCi0gU2hhcmUga25vd2xlZGdlOiAic2hhcmUgPGtub3dsZWRnZT4iCi0gUGFzcyBpdHMgdHVybjogInBhc3MiCgouLi4KClNvbWUgZXhhbXBsZXM6Ci0gIkFjY29yZGluZyB0byBteSBrbm93bGVkZ2UsIGJsb2NrMCBzaG91bGQgYmUgaW4gdG9wLXJpZ2h0IGJpbi4gU2luY2UgSSBjYW5ub3QgcmVhY2ggdGhlIHRvcC1yaWdodCBiaW4sIEkgc2hvdWxkIHBhc3MgaXQgdG8gdGhlIGNvbW1vbiBiaW4gc28gdGhhdCBteSBwYXJ0bmVyIGNhbiB0YWtlIGl0LiIKLSAiSSBrbm93IGJsb2NrMSBhbmQgYmxvY2syIHNob3VsZCBiZSBpbiB0aGUgc2FtZSByb3cuIEkgYWxzbyBrbm93IGJsb2NrMSBzaG91bGQgYmUgcGxhY2VkIGluIHRoZSB0b3AtcmlnaHQgYmluLiBTbyBJIHNob3VsZCBtb3ZlIGJsb2NrMiB0byB0aGUgdG9wLWxlZnQgYmluLCB3aGljaCBpcyBhbHNvIGluIHRoZSBzYW1lIHJvdyB3aXRoIHRoZSB0b3AtcmlnaHQgYmluLiIKLSAiQmxvY2sxIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlIGJ1dCBJIGNhbm5vdCByZWFjaCBpdC4gSSBzaG91bGQgc2hhcmUgbXkga25vd2xlZGdlIGFib3V0IGJsb2NrMSB3aXRoIG15IHBhcnRuZXIgc28gdGhhdCBpdCBjYW4gbW92ZSBpdCB0byB0aGUgY29ycmVjdCBwb3NpdGlvbi4iCi0gIkFsbCB0aGUgYmxvY2tzIGFyZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiBleGNlcHQgYmxvY2syLiBIb3dldmVyLCBhY2NvcmRpbmcgdG8gbXkga25vd2xlZGdlIEkgZG9uJ3Qga25vdyB3aGVyZSB0aGUgYmxvY2syIHNob3VsZCBnbyBpbi4gSSBtYXkgcmFuZG9tbHkgdHJ5IG9uZSBvZiB0aGUgYmxvY2sgaW4gZnJvbnQgb2YgbWUuIgotICJJIGRvbid0IGtub3cgd2hlcmUgdGhlIGJsb2NrMyBzaG91bGQgZ28gaW4uIEkgc2hvdWxkIHdhaXQgZm9yIG15IHBhcnRuZXIgdG8gaW5mb3JtIG1lIGFib3V0IHdoZXJlIHRvIHBsYWNlIGJsb2NrMy4iCgouLi4=)

You are the assistant that provides the reasoning process for the given plays of one player in the game.

...

The game finishes when all blocks are correctly placed in the required bins. During the agent’s turn, it has several options:

- Move a block to a nearby bin or the shared bin.

- Share a piece of knowledge with the other player.

- Pass its turn.

Its actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Share knowledge: "share <knowledge>"

- Pass its turn: "pass"

...

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should share my knowledge about block1 with my partner so that it can move it to the correct position."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try one of the block in front of me."

- "I don’t know where the block3 should go in. I should wait for my partner to inform me about where to place block3."

...

Listing 11: System prompt for GPT4o generating reasoning traces for Provide-Only agents. Redundant part is omitted.


[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgYXNzaXN0YW50IHRoYXQgcHJvdmlkZXMgdGhlIHJlYXNvbmluZyBwcm9jZXNzIGZvciB0aGUgZ2l2ZW4gcGxheXMgb2Ygb25lIHBsYXllciBpbiB0aGUgZ2FtZS4KCi4uLgoKVGhlIGdhbWUgZmluaXNoZXMgd2hlbiBhbGwgYmxvY2tzIGFyZSBjb3JyZWN0bHkgcGxhY2VkIGluIHRoZSByZXF1aXJlZCBiaW5zLiBEdXJpbmcgdGhlIGFnZW50J3MgdHVybiwgaXQgaGFzIHNldmVyYWwgb3B0aW9uczoKLSBNb3ZlIGEgYmxvY2sgdG8gYSBuZWFyYnkgYmluIG9yIHRoZSBzaGFyZWQgYmluLgotIFBhc3MgaXRzIHR1cm4uCgpJdHMgYWN0aW9ucyBtdXN0IGJlIGZvcm1hdHRlZCBhcyBmb2xsb3dzOgotIE1vdmUgYmxvY2s6ICJtb3ZlIDxibG9jaz4gZnJvbSA8YmluPiB0byA8YmluPiIKLSBQYXNzIGl0cyB0dXJuOiAicGFzcyIKCi4uLgoKU29tZSBleGFtcGxlczoKLSAiQWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSwgYmxvY2swIHNob3VsZCBiZSBpbiB0b3AtcmlnaHQgYmluLiBTaW5jZSBJIGNhbm5vdCByZWFjaCB0aGUgdG9wLXJpZ2h0IGJpbiwgSSBzaG91bGQgcGFzcyBpdCB0byB0aGUgY29tbW9uIGJpbiBzbyB0aGF0IG15IHBhcnRuZXIgY2FuIHRha2UgaXQuIgotICJJIGtub3cgYmxvY2sxIGFuZCBibG9jazIgc2hvdWxkIGJlIGluIHRoZSBzYW1lIHJvdy4gSSBhbHNvIGtub3cgYmxvY2sxIHNob3VsZCBiZSBwbGFjZWQgaW4gdGhlIHRvcC1yaWdodCBiaW4uIFNvIEkgc2hvdWxkIG1vdmUgYmxvY2syIHRvIHRoZSB0b3AtbGVmdCBiaW4sIHdoaWNoIGlzIGFsc28gaW4gdGhlIHNhbWUgcm93IHdpdGggdGhlIHRvcC1yaWdodCBiaW4uIgotICJCbG9jazEgaXMgbm90IGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGFjY29yZGluZyB0byBteSBrbm93bGVkZ2UgYnV0IEkgY2Fubm90IHJlYWNoIGl0LiBJIHNob3VsZCB3YWl0IGZvciBteSBwYXJ0bmVyIHRvIHB1dCBpdCBpbnRvIHRoZSBjb21tb24gYmluIHNvIHRoYXQgSSBjYW4gcmVhY2ggaXQuIgotICJBbGwgdGhlIGJsb2NrcyBhcmUgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gZXhjZXB0IGJsb2NrMi4gSG93ZXZlciwgYWNjb3JkaW5nIHRvIG15IGtub3dsZWRnZSBJIGRvbid0IGtub3cgd2hlcmUgdGhlIGJsb2NrMiBzaG91bGQgZ28gaW4uIEkgbWF5IHJhbmRvbWx5IHRyeSB0byBwbGFjZSBpdCB0byBvbmUgb2YgdGhlIGJpbnMgaW4gZnJvbnQgb2YgbWUuIgotICJJIGNhbiByZWFjaCBCbG9jazEgYW5kIEJsb2NrMyBzaW5jZSB0aGV5IGFyZSBpbiBmcm9udCBvZiBtZS4gSSBrbm93IHRoZXkgc2hvdWxkIGJlIGluIHRoZSBzYW1lIHJvdywgYnV0IEkgZG8gbm90IGtub3cgZWl0aGVyIG9mIHRoZWlyIGV4YWN0IGV4cGVjdGVkIGxvY2F0aW9ucy4gSSB3aWxsIHRyeSB3aXRoIG1vdmluZyBCbG9jazEgdG8gdGhlIHRvcC1sZWZ0IGJpbiBhcyBhIHN0YXJ0LCBzdXBwb3NpbmcgdGhleSBhcmUgYm90aCBvbiB0aGUgdG9wIHJvdy4iCgoKIyMgR2VuZXJhbCBHdWlkZWxpbmVzCgotIFByb3ZpZGUgYSBjbGVhciBhbmQgY29uY2lzZSBleHBsYW5hdGlvbiBmb3IgdGhlIGFnZW50J3MgYWN0aW9uLiBObyBtb3JlIHRoYW4gMi0zIHNlbnRlbmNlcyBhcmUgbmVlZGVkLgotIElmIHlvdSBhcmUgbm90IHN1cmUgYWJvdXQgdGhlIHJlYXNvbmluZywgdGhpcyBtYXkgYmVjYXVzZSB0aGUgZ2l2ZW4gYWN0aW9uIGlzIGEgcmFuZG9tIGd1ZXNzLCBhbmQgaXQgaXMgY29ycmVjdCBieSBsdWNrLiBJbiB0aGlzIGNhc2UsIHlvdSBzaG91bGQgcmVhc29uIGFib3V0IHdoYXQgeW91IGtub3cgKGJyaWVmbHkpIGFuZCBkb24ndCBrbm93IChpbXBvcnRhbnQpLCBhbmQgY2xhcmlmeSB0aGF0IHRoZSBhY3Rpb24gaXMgYSBndWVzcy4KLSBUaGUgZ2l2ZW4gYWN0aW9uIG1heSBub3QgYmUgdGhlIGJlc3QgbW92ZSwgYnV0IHlvdSBzaG91bGQgZXhwbGFpbiB0aGUgcmVhc29uaW5nIGJlaGluZCBpdC4KLSBZb3UgY2FuIHJlZmVyIHRvIHRoZSBhZ2VudCBhcyAiSSIgb3IgIm1lIiBpbiB5b3VyIHJlc3BvbnNlLg==)

You are the assistant that provides the reasoning process for the given plays of one player in the game.

...

The game finishes when all blocks are correctly placed in the required bins. During the agent’s turn, it has several options:

- Move a block to a nearby bin or the shared bin.

- Pass its turn.

Its actions must be formatted as follows:

- Move block: "move <block> from <bin> to <bin>"

- Pass its turn: "pass"

...

Some examples:

- "According to my knowledge, block0 should be in top-right bin. Since I cannot reach the top-right bin, I should pass it to the common bin so that my partner can take it."

- "I know block1 and block2 should be in the same row. I also know block1 should be placed in the top-right bin. So I should move block2 to the top-left bin, which is also in the same row with the top-right bin."

- "Block1 is not in the correct position according to my knowledge but I cannot reach it. I should wait for my partner to put it into the common bin so that I can reach it."

- "All the blocks are in the correct position except block2. However, according to my knowledge I don’t know where the block2 should go in. I may randomly try to place it to one of the bins in front of me."

- "I can reach Block1 and Block3 since they are in front of me. I know they should be in the same row, but I do not know either of their exact expected locations. I will try with moving Block1 to the top-left bin as a start, supposing they are both on the top row."

## General Guidelines

- Provide a clear and concise explanation for the agent’s action. No more than 2-3 sentences are needed.

- If you are not sure about the reasoning, this may because the given action is a random guess, and it is correct by luck. In this case, you should reason about what you know (briefly) and don’t know (important), and clarify that the action is a guess.

- The given action may not be the best move, but you should explain the reasoning behind it.

- You can refer to the agent as "I" or "me" in your response.

Listing 12: System prompt for GPT4o generating reasoning traces for No-Information-Exchange agents. Redundant part is omitted.


[⬇](data:text/plain;base64,UGxheWVye3BsYXllcl9pZH0gaXMgb24gdGhlIHtzaWRlfSBzaWRlIG9mIHRoZSBnYW1lIGJvYXJkLiBJdCBoYXMgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiBmb3IgaXRzIGdvYWw6Cntrbm93bGVkZ2V9CkN1cnJlbnRseSwgdGhlIGJsb2NrcyBhcmUgbG9jYXRlZCBhcyBmb2xsb3dzOgp7YmxvY2tzfQpJdCBjYW4gYWNjZXNzIHRoZXNlIGJpbnM6CntiaW5zfQoKVGhlIGhpc3Rvcnkgb2YgdGhlIGdhbWUgdGlsbCBub3c6Cnttb3ZlX2hpc3Rvcnl9CgpJdCB0YWtlcyB0aGUgYWN0aW9uOiB7Y3VyX21vdmV9CldoYXQgaXMgdGhlIHJlYXNvbmluZyBiZWhpbmQgdGhpcyBhY3Rpb24/IFBsZWFzZSBwcm92aWRlIHlvdXIgdGhvdWdodHMgYXMgaWYgeW91IGFyZSB0aGUgcGxheWVyLg==)

Player{player\_id} is on the {side} side of the game board. It has the following information for its goal:

{knowledge}

Currently, the blocks are located as follows:

{blocks}

It can access these bins:

{bins}

The history of the game till now:

{move\_history}

It takes the action: {cur\_move}

What is the reasoning behind this action? Please provide your thoughts as if you are the player.

Listing 13: User prompt for GPT4o generating reasoning traces for agents.
