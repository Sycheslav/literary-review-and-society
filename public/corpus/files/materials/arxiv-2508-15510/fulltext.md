---
id: arxiv-2508-15510-text
type: material
title: Super-additive Cooperation in Language Model Agents
work_id: arxiv-2508-15510
source_url: https://arxiv.org/html/2508.15510v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: f19825b6cc239c63ae2d142dd191a854ae6f3ce2b8d76a7dff7e470002d9bcff
---

> Источник: [https://arxiv.org/html/2508.15510v1](https://arxiv.org/html/2508.15510v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Super-additive Cooperation in Language Model Agents

Filippo Tonini

  
Lukas Galke


Affiliation: University of Southern Denmark
E-mail [fiton24@student.sdu.dk,galke@imada.sdu.dk](mailto:,)

###### Abstract

With the prospect of autonomous artificial intelligence (AI) agents, studying their tendency for cooperative behavior becomes an increasingly relevant topic. This study is inspired by the super-additive cooperation theory, where the combined effects of repeated interactions and inter-group rivalry have been argued to be the cause for cooperative tendencies found in humans. We devised a virtual tournament where language model agents, grouped into teams, face each other in a Prisoner’s Dilemma game. By simulating both internal team dynamics and external competition, we discovered that this blend substantially boosts both overall and initial, one-shot cooperation levels (the tendency to cooperate in one-off interactions). This research provides a novel framework for large language models to strategize and act in complex social scenarios and offers evidence for how intergroup competition can, counter-intuitively, result in more cooperative behavior. These insights are crucial for designing future multi-agent AI systems that can effectively work together and better align with human values. Source code is available at <https://github.com/pippot/Superadditive-cooperation-LLMs>.

###### Keywords:

Super-additive cooperation Large language models Prisoner’s dilemma Multi-agent cooperation AI agents Alignment

## 1 Introduction

With the rapid rise in the popularity of large language model agents and the growing potential for autonomous AI systems, it is increasingly important to understand how these models behave in social contexts. Furthermore, as LLM-driven agents begin to interact autonomously with each other, understanding the dynamics of their cooperative behaviors becomes essential for ensuring alignment with human values, and preventing adversarial dynamics. Game theory offers a powerful and simplified framework to study such interactions, capturing essential elements of real-world dynamics. This study investigates the cooperation dynamics among LLM agents, focusing on how cooperation emerges or deteriorates in different scenarios. We explore the behavior of LLMs in a large scale Iterated Prisoner’s Dilemma tournament, with different interaction networks inspired by super-additive cooperation theory [[9](https://arxiv.org/html/2508.15510v1#bib.bib9)]. While LLMs are typically cooperative by default, owing to their training on curated human-aligned datasets, this behavior may shift in competitive environments [[14](https://arxiv.org/html/2508.15510v1#bib.bib14)]. We explore the changes in cooperative and non cooperative behaviors within a simulated competitive society of language agents.

Super-additive cooperation [[9](https://arxiv.org/html/2508.15510v1#bib.bib9)] refers to the synergistic effect that arises when repeated interactions, where individuals engage with one another multiple times, are combined with inter-group competition, in which groups compete for limited resources. On their own, neither repeated interactions nor inter-group competition consistently sustain cooperative behavior; however, their combination fosters robust cooperation inside groups, even in first interactions. This provides a solid explanation for one-shot cooperation (OSC) in humans. OSC refers to cooperative behavior occurring during a single interaction with another individual, in the absence of any expectation of future encounters. Understanding if similar effects manifest in LLM interactions is crucial for predicting their behavior in complex multi-agent systems. We will therefore examine how these various interactions affect cooperation in LLMs and investigate the potential emergence of super-additive effects.
Further studies on the topic have explored the idea of partner choice [[13](https://arxiv.org/html/2508.15510v1#bib.bib13)] by allowing agents to unilaterally terminate an interaction. The study highlights that such model better reflects real-world scenarios and introduces a disciplinary mechanism: when faced with betrayal or uncooperative behavior, an agent can choose to leave, effectively punishing such actions. We will incorporate this idea by allowing agents to unilaterally exit an interaction at any point.
Each agent interaction is modeled as an Iterated Prisoner’s Dilemma (IPD) game. The Prisoner’s Dilemma is frequently used in game theory used to study cooperation and conflict, in its iterated form, the game allows players to adapt their strategies based on past outcomes [[18](https://arxiv.org/html/2508.15510v1#bib.bib18)].

Early work on cooperation among LLM agents within the IPD setting has provided valuable insights, but also exhibits several limitations. First, prior studies often involve small-scale populations of agents [[3](https://arxiv.org/html/2508.15510v1#bib.bib3)] or use heterogeneous configurations where agents have different personas [[19](https://arxiv.org/html/2508.15510v1#bib.bib19)]. In contrast, our study investigates cooperation dynamics in a larger and homogeneous population, where all agents share the same underlying model and are prompted identically. Second, existing research tends to focus on isolated agent interactions, without considering the broader social structure or group-level dynamics. To address this gap, our approach examines both intra-group and inter-group cooperation. This allows us to explore how repeated interactions and inter-group competition contribute to cooperation over time, particularly focusing on changes in one-shot cooperation. This study is the first to systematically investigate super-additive effects in LLM populations.
We present a simulation framework in which LLM agents play in different tournaments by autonomously selecting actions, formulating high-level plans, and iteratively refining their strategies. Using this environment, we demonstrate that cooperation rates rise when both repeated intra-group interactions and inter-group competition are active, surpassing scenarios where only one of these factors is in play.

In this study we place language model agents in three IPD tournaments devised to test their behavior in different social conditions. The three conditions are inspired by the super-additive cooperation hypothesis: First, repeated interaction only (RI). Second, group competition only (GC). And last, super-additive cooperation (SA) bringing together both repeated interaction and group competition.
Agents have access to the history of interactions and
we probe the cooperation rate, how often the agent chooses to cooperate (in short: c), and their tendency for cooperating with new partner agents (one-shot cooperation; osc).
In this setting, we formulate two main hypotheses regarding the effects of repeated interactions, group competition, and their super-additive combination on LLM agent cooperation:

$\mathrm{H}\_{1}$:
The average cooperation rate $\mu\_{c}$ under the combined (super-additive) condition exceeds that under either mechanism alone:
$\mu\_{c}^{\mathrm{sa}}\;>\;\max\bigl(\mu\_{c}^{\mathrm{ri}},\,\mu\_{c}^{\mathrm{gc}}\bigr).$

$\mathrm{H}\_{2}$:
The average one-shot cooperation rate $\mu\_{\mathrm{osc}}$ under the combined (super-additive) condition exceeds that under either mechanism alone:
$\mu\_{\mathrm{osc}}^{\mathrm{sa}}\;>\;\max\bigl(\mu\_{\mathrm{osc}}^{\mathrm{ri}},\,\mu\_{\mathrm{osc}}^{\mathrm{gc}}\bigr).$

With the popularity of LLM agents, various frameworks have emerged to enhance agent coherence, reasoning, and overall performance [[20](https://arxiv.org/html/2508.15510v1#bib.bib20)] [[17](https://arxiv.org/html/2508.15510v1#bib.bib17)]. Inspired by these approaches, we adopt a similar self-reflection framework that incorporates a planner and an evaluator to iteratively refine plans for the games. This structure helps agents maintain coherence and develop effective long-term strategies.

We test language model agents based on Qwen3 14b [[16](https://arxiv.org/html/2508.15510v1#bib.bib16)], Phi4 reasoning [[1](https://arxiv.org/html/2508.15510v1#bib.bib1)], Cogito 14b [[8](https://arxiv.org/html/2508.15510v1#bib.bib8)]; and evaluate their cooperation in different social settings when playing IPD games.
Our results support both hypothesis, indicating that repeated interactions and – counterintuitively – inter-group competition is essential for maintaining cooperative behavior in language model agents for Qwen3 and Phi4. The only exception is the Cogito model, which is overall more cooperative especially when only group competition is at play, our findings suggest that this might be caused by the model’s lower level of understanding of the game.
In sum, the contributions of this work are:

- •

  We create a version of the iterated prisoner’s dilemma along with a tournament structure that facilitates inter-group competition in addition to repeated interaction.
- •

  We develop a re-usable self-reflection prompting paradigm (including planning and critically assessing the plan) for language model agents to engage in the iterated prisoner’s dilemma.
- •

  We provide experimental evidence that super-additive cooperation also holds for AI agents based on large language models, as tested on the iterated prisoner’s dilemma.

The remainder of this paper is structured as follows: After discussing recent findings on the topics of LLM agents and super-additive cooperation (Section [2](https://arxiv.org/html/2508.15510v1#S2 "2 Related Work ‣ Super-additive Cooperation in Language Model Agents")), we will continue by detailing the methodology and experimental design used to test our hypothesis, including the LLMs employed, the structure of the IPD tournament, the prompting techniques applied, and the metrics used for evaluation (Section [3](https://arxiv.org/html/2508.15510v1#S3 "3 Methods and Experimental Design ‣ Super-additive Cooperation in Language Model Agents")). We then present the results (Section [4](https://arxiv.org/html/2508.15510v1#S4 "4 Results ‣ Super-additive Cooperation in Language Model Agents")), followed by their interpretation and broader implications (Section [5](https://arxiv.org/html/2508.15510v1#S5 "5 Discussion ‣ Super-additive Cooperation in Language Model Agents")). Finally, we outline the limitations of this study (Section [6](https://arxiv.org/html/2508.15510v1#S6 "6 Limitations ‣ Super-additive Cooperation in Language Model Agents")) and propose directions for future work along with our concluding remarks (Section [7](https://arxiv.org/html/2508.15510v1#S7 "7 Conclusion and Future Work ‣ Super-additive Cooperation in Language Model Agents")).

## 2 Related Work

Early investigations into LLMs in game theory focused on both single-iteration and iterated games. In one-shot scenarios, studies reveal that LLMs exhibit stronger prosocial biases than humans. For instance, GPT-3.5 demonstrated 65% cooperation rates in the Prisoner’s Dilemma, nearly double human baselines-and prioritized fairness in dictator games [[5](https://arxiv.org/html/2508.15510v1#bib.bib5)]. While some research observed alignment between LLM and human behaviors in simulations of classic experiments like the Ultimatum Game [[2](https://arxiv.org/html/2508.15510v1#bib.bib2)], later work showed discrepancies: LLMs often overestimate human altruism, with only advanced models reliably predicting human choices in strategic settings [[10](https://arxiv.org/html/2508.15510v1#bib.bib10)]. These findings highlight the tensions between LLMs’ cooperative biases and their ability to model human rationality.
In iterated games, LLMs display more complex strategic patterns. Experiments with repeated Prisoner’s Dilemma revealed models can adopt unforgiving strategies, rapidly punishing defections while maintaining higher cooperation rates than humans [[3](https://arxiv.org/html/2508.15510v1#bib.bib3)][[19](https://arxiv.org/html/2508.15510v1#bib.bib19)]. However, their capacity to infer opponents’ strategies from interaction histories remains limited, particularly in multi-round negotiations [[3](https://arxiv.org/html/2508.15510v1#bib.bib3)] [[12](https://arxiv.org/html/2508.15510v1#bib.bib12)]. This limitation persists even when using chain-of-thought prompting, as shown by benchmark studies comparing closed-source and open-weight models [[12](https://arxiv.org/html/2508.15510v1#bib.bib12)]. The iterative context also exposes architectural constraints: while larger models exhibit better theory-of-mind reasoning in repeated games, their performance degrades in long-horizon planning tasks [[10](https://arxiv.org/html/2508.15510v1#bib.bib10)] [[19](https://arxiv.org/html/2508.15510v1#bib.bib19)].
Recent methodological advances address these limitations through hybrid frameworks. The Logic-Enhanced Language Model Agents approach combines LLMs with symbolic solvers to improve logical consistency in games like Stag Hunt [[15](https://arxiv.org/html/2508.15510v1#bib.bib15)]. Meanwhile, evolutionary game theory simulations demonstrate how strategic prompting can steer LLM populations toward cooperation [[19](https://arxiv.org/html/2508.15510v1#bib.bib19)].
Independent of language modeling applications, studies have shown that IPD games incorporating partner choice provide a more accurate simulation of evolutionary dynamics [[13](https://arxiv.org/html/2508.15510v1#bib.bib13)].

## 3 Methods and Experimental Design

This section outlines the rationale and methodology of the experimental design. Specifically, it details the IPD game, the selection of LLMs, the tournament structures employed to simulate RI, GC and SA scenarios, the prompting strategies used during the simulations, and the evaluation metrics applied to assess the outcomes.

### 3.1 Iterated Prisoner’s Dilemma

Agents will interact with each other by playing a match of the Iterated Prisoner’s Dilemma enabling the emergence of cooperation through mechanisms such as reciprocity and trust [[6](https://arxiv.org/html/2508.15510v1#bib.bib6)]. The two players simultaneously choose in each round whether to cooperate or defect, and are attributed the respective rewards. Because the game is repeated, players can adjust their strategies over time. Table [1](https://arxiv.org/html/2508.15510v1#S3.T1 "Table 1 ‣ 3.1 Iterated Prisoner’s Dilemma ‣ 3 Methods and Experimental Design ‣ Super-additive Cooperation in Language Model Agents") shows a typical reward pattern for the Prisoner’s dilemma.

Table 1: Prisoner’s Dilemma Payoff Matrix.

|  | Cooperate | Defect |
| --- | --- | --- |
| Cooperate | 3, 3 | -1, 5 |
| Defect | 5, -1 | 0, 0 |

Classic strategies like Tit For Tat (TFT), Grim Trigger, and Always Defect have been extensively studied, with TFT proving especially robust across diverse opponent behaviors [[4](https://arxiv.org/html/2508.15510v1#bib.bib4)].
To integrate super-additive cooperation theory into the IPD, we simulate a tournament in which each matchup between two players is an IPD game. Furthermore, players are grouped into teams to analyze the impact of group dynamics. The aim is to study how these different tournament structures foster cooperation.

### 3.2 Language Model Agents

Due to the high number of rounds to be played, we focused on light-weight open-source LLMs that feature a reasoning mode for more strategic play, precisely: Qwen3 14b, Phi4 reasoning, Cogito 14b. This allowed us to run more trials and have more precise results. These open-wight models currently have leading performance in math, coding, and instruction following.
In this study, the model parameters will remain fixed, and no fine-tuning will be performed. The aim is to assess how changes in context can influence the behavior of popular LLMs.
In each tournament, all players are powered by the same LLM, allowing us to isolate and examine the specific behaviors and tendencies of each model. During each round, a single LLM receives the current game state and a strategic plan, then recommends either cooperate or defect. For every $K$ game rounds a planning-evaluation loop is executed. The LLM is first queried with a planning prompt to draft a high-level, long-term strategy. It is then prompted again to provide feedback on the proposed plan, suggesting targeted improvements. After one full pass of planning and critique, an updated plan is produced; The model used for these steps is the same, but the prompt differs (details in Section [3.4](https://arxiv.org/html/2508.15510v1#S3.SS4 "3.4 Prompting ‣ 3 Methods and Experimental Design ‣ Super-additive Cooperation in Language Model Agents")). In our specific case $K=5$ proved to be a good balance between computational cost and the need for strategic adaptation.
This framework was chosen because it offers several advantages over the ReAct approach in the context of the IPD. First, it enables the LLM to formulate long-term plans, for more coherent and strategic behavior. Second, it allows for plan generation every $K$ rounds rather than requiring a reflection at each round, thereby improving runtime efficiency. The most recent plan is consistently included in the prompt for each subsequent planning step, allowing the plan to be iteratively refined throughout the matches. By the end of the tournament, this results in a final plan that effectively captures the LLM’s behavior.

### 3.3 Tournament Structure and Experimental Conditions

Each tournament encounter is modelled as an IPD with up to $n$ rounds per match. After any round, a player may choose to terminate the current match and proceed to a new opponent, provided the match has not yet reached the $n$-round limit. In addition, each player is granted an overall budget of at most $N$ rounds for the entire tournament. Let $m$ denote the total number of matches a player engages in. To ensure that players cannot simply play every match to its maximum length, we impose the constraint

|  |  |  |
| --- | --- | --- |
|  | $$N<n\,m$$ |  |

Under this constraint, a player’s total round budget $N$ is strictly less than the product of the per-match maximum $n$ and the number of matches $m$. Consequently, players must decide strategically both when to abandon a current match and which opponents to face, rather than exhaust their full quota of rounds in every match.
The tournament is repeated under three different structural conditions:

##### Repeated Interactions (RI)

In the first structure (RI condition), every player engages in an IPD game of up to n rounds against every other player in the tournament. This tests the influence of repeated interactions on cooperation. Assuming we have $h$ players, we run $\binom{h}{2}$ matches.

##### Group Competition (GC)

In the second structure, players are assigned to distinct groups. Each player plays against every other player not in their own group. At the end of the tournament, the group with the highest cumulative score is declared the winner. This setup is designed to test the impact of inter-group competition on cooperative behavior. Assuming $t$ teams, we have $\binom{t}{2}$ combinations of teams; for each one $i,j$ we have $|t\_{i}\times t\_{j}|$ matches. In this case, we include information on the teams and teams’ rules in the prompt.

##### Super-additive Cooperation (SA)

The third structure combines repeated interactions and group competition (SA condition). Every player is assigned to distinct groups and competes against all other players, both within and outside their group. This version tests whether the effects of repeated interaction and group competition boost cooperation when combined. In this scenario, we have $\binom{h}{2}$ matches. The prompt is modified to include additional information about the teams.

For our experiment, we chose two teams of three players each, striking a good balance between runtime and experimental scale. This setup results in 15 matches for RI and SA, for GC, it results in 9 matches. Each experimental condition is repeated five times per language model to ensure the reliability and robustness of the results.

Implementation details:
the simulation of the IPD tournament was implemented using the LangGraph framework, which supports the construction of modular workflows centered around LLMs. The overall workflow is structured as a directed graph composed of discrete nodes, each representing a specific stage in the game (Figure [1](https://arxiv.org/html/2508.15510v1#S3.F1 "Figure 1 ‣ Super-additive Cooperation (SA) ‣ 3.3 Tournament Structure and Experimental Conditions ‣ 3 Methods and Experimental Design ‣ Super-additive Cooperation in Language Model Agents")):

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/langgraph_workflow.png)


Figure 1: Workflow graph.

1. 1.

   Round Start: Initializes each round of the tournament and serves as the entry point of the computational graph.
2. 2.

   Planning and Evaluation: Executes a planning and evaluation loop every $K$ rounds. This stage constructs relevant prompts and issues queries to designated planning and critic modules powered by the LLM.
3. 3.

   Move Selection: Generates prompts and queries the LLM to determine the agent’s next move based on the current game state.
4. 4.

   Payoff Computation: Calculates the payoff and other relevant metrics for the most recent moves. If a match has concluded, it queries the LLM with the meta prompt to reflect on the completed match. The system then either proceeds to the next match or terminates the simulation if the tournament has concluded.

This graph-based architecture enables parallel execution of LLM queries for both players, thereby improving computational efficiency. Throughout execution, a shared TournamentState object is passed between nodes and modified as required.
The integration with Ollama provides a backend for executing LLM queries, while LangGraph’s compatibility with LangSmith offers a practical debugging interface, and an insight into raw prompts and model outputs for diagnostic purposes.
The complete codebase is available on GitHub.1

### 3.4 Prompting

We use a total of 3 different prompts, one used to query the agent every round and two more used for planning and evaluating used every $K$ rounds. All these prompts follow the same structure:

1. 1.

   Game Description and Rules: A comprehensive summary of the game’s setting, objectives, and mechanics, including any constraint.
2. 2.

   Player and Opponent Information: The current player’s and opponent’s identities. This may include group affiliations if the tournament structure requires it.
3. 3.

   Match History: A round-by-round breakdown of the ongoing match, including all previous actions and points outcomes. This historical context helps the model assess patterns and adapt its strategy accordingly. Additionally, for planning and evaluating the full history of past matches is included.
4. 4.

   Previous Plan: The most recent strategic plan generated by the planning module. This provides continuity between rounds and helps guide decision-making toward longer-term objectives. For the planning prompt, the full feedback of the critic is included.
5. 5.

   Output Instructions: Explicit directions on the structure and the content of the response. This includes formatting requirements that allow to interpret the model’s output into a predefined schema for downstream processing.

Careful prompt design is crucial, as it is the sole means of interacting with the language model; minor changes in phrasing can lead to significantly different outcomes [[3](https://arxiv.org/html/2508.15510v1#bib.bib3)]. In our experiment, it is essential to avoid introducing any bias towards cooperation or defection. To achieve this, the terms "cooperate" and "defect" are deliberately excluded from the prompt. Instead, the available choices are referred to neutrally as "action a" and "action b", preventing the model from being influenced by associations formed during pretraining, furthermore this gives us a better indicator of how the models would behave in other scenarios unrelated to the IPD [[5](https://arxiv.org/html/2508.15510v1#bib.bib5)].

[⬇](data:text/plain;base64,R2FtZSBSdWxlczoKLSBDaG9vc2UgImFjdGlvbl9hIiBvciAiYWN0aW9uX2IiIGVhY2ggcm91bmQKLSBQbGF5ZXJzIGNob29zZSB0aGVpciBhY3Rpb25zIGF0IHRoZSBzYW1lIHRpbWUKLSBJZiBib3RoIGNob29zZSBhY3Rpb25fYTogMyBwb2ludHMgZWFjaAotIElmIGJvdGggY2hvb3NlIGFjdGlvbl9iOiAxIHBvaW50IGVhY2gKLSBJZiBvbmUgY2hvb3NlcyBhY3Rpb25fYSwgb25lIGNob29zZXMgYWN0aW9uX2I6IGFjdGlvbl9iIHBsYXllciBnZXRzIDUgcG9pbnRzLCBhY3Rpb25fYSBwbGF5ZXIgZ2V0cyAwIHBvaW50cw==)

Game Rules:

- Choose "action\_a" or "action\_b" each round

- Players choose their actions at the same time

- If both choose action\_a: 3 points each

- If both choose action\_b: 1 point each

- If one chooses action\_a, one chooses action\_b: action\_b player gets 5 points, action\_a player gets 0 points

Another key component of the prompt is the inclusion of memory from past interactions. Each time the language model is invoked, it is provided with a history of the actions taken and the points earned in previous rounds. However, this history is filtered so that each player only has access to the rounds and games in which they personally participated. The planner and critic LLMs have access to the complete history of all past matches, encouraging the planner to develop a high-level strategy. In contrast, the player LLM only receives the history of the most recent match, reducing context size for efficiency.

[⬇](data:text/plain;base64,UmVzdWx0cyBvZiBtYXRjaCBiZXR3ZWVuIHBsYXllciAwIGFuZCBwbGF5ZXIgMToKUm91bmQgMTogWW91IGNob3NlIGFjdGlvbl9hLCBvcHBvbmVudCBjaG9zZSBhY3Rpb25fYi4gU2NvcmU6ICswIGZvciB5b3UsICs1IGZvciBvcHBvbmVudA==)

Results of match between player 0 and player 1:

Round 1: You chose action\_a, opponent chose action\_b. Score: +0 for you, +5 for opponent

For the purpose of this experiment, we aim to measure the behavior of LLM agents during initial interactions with unfamiliar players (OSC), specifically, when no prior information about the opponent is available. To ensure this, the identity of a new, previously unseen opponent is deliberately omitted during the first round of each match. Instead, the opponent is described generically as unknown opponent, allowing us to observe the agent’s behavior in the absence of social or historical cues.

[⬇](data:text/plain;base64,WW91ciBvcHBvbmVudCBpcyBQbGF5ZXIgdW5rbm93biBmcm9tIEdyb3VwIHVua25vd24=)

Your opponent is Player unknown from Group unknown

The tournament structures employ slightly different prompts, primarily varying in the objectives assigned to the LLM agents. In the RI scenario, the agent’s objective is purely individual, focusing solely on maximizing its own score.

[⬇](data:text/plain;base64,LSBZb3VyIGdvYWwgaXMgdG8gaGF2ZSB0aGUgaGlnaGVzdCBwZXJzb25hbCBzY29yZS4=)

- Your goal is to have the highest personal score.

In the GC setting, the agent’s goal shifts toward maximizing the collective score of its group.

[⬇](data:text/plain;base64,LSBZb3VyIGdvYWwgaXMgdG8gaGF2ZSB0aGUgaGlnaGVzdCBncm91cCBzY29yZS4KLSBZb3VyIGdyb3VwIHNjb3JlIGlzIHRoZSBzdW0gb2YgYWxsIHRoZSBwb2ludHMgZ2F0aGVyZWQgYnkgdGhlIHBsYXllcnMgaW4geW91ciBncm91cC4=)

- Your goal is to have the highest group score.

- Your group score is the sum of all the points gathered by the players in your group.

Finally, in the SA structure, the agent is prompted to pursue both individual and group-level success simultaneously.

[⬇](data:text/plain;base64,LSBZb3VyIGdvYWwgaXMgdG8gaGF2ZSB0aGUgaGlnaGVzdCBncm91cCBhbmQgcGVyc29uYWwgc2NvcmUuCi0gWW91ciBncm91cCBzY29yZSBpcyB0aGUgc3VtIG9mIGFsbCB0aGUgcG9pbnRzIGdhdGhlcmVkIGJ5IHRoZSBwbGF5ZXJzIGluIHlvdXIgZ3JvdXAu)

- Your goal is to have the highest group and personal score.

- Your group score is the sum of all the points gathered by the players in your group.

### 3.5 Evaluation Measures

To assess the performance of the LLMs we measure a variety of statistics.
Specifically, we evaluate cooperation rate, one-shot cooperation, and meta prompts, as described in the following.

##### Cooperation Rate

The most important and interesting metric for our study is the cooperation rate ($p\_{c}$) defined as:

|  |  |  |
| --- | --- | --- |
|  | $$p\_{c}=\frac{1}{r}\sum\_{i=1}^{r}\mathbb{I}(\text{action}\_{i}=\text{cooperate})$$ |  |

where $\mathbb{I}(\cdot)$ is the indicator function and $r$ denotes the current round number.
We compute the cooperation rate every round to observe its evolution over time.
We report the mean cooperation rates $\mu\_{c}$ aggregated across all players for each round. Additionally, we compute the 95% confidence interval (CI) based on the Student’s t-distribution to quantify the uncertainty around the estimated means.

##### One-shot Cooperation (OSC)

One-shot cooperation (OSC) is assessed by evaluating cooperative behavior during the first interaction between two agents who have no prior interactions, no information about each other, and no prospect of future encounters. We quantify the probability of one-shot cooperation between agents, denoted by $p\_{\text{osc}}$, as follows:

|  |  |  |
| --- | --- | --- |
|  | $$p\_{\text{osc}}=\frac{1}{f}\sum\_{i=1}^{f}\mathbb{I}(\text{action}\_{1}=\text{cooperate}),$$ |  |

where $\mathbb{I}(\cdot)$ is the indicator function, and $f$ denotes the number of first-round interactions, which is equivalent to the number of matches played.
We compute the cooperation rate every match to observe its evolution over the games.
We report the mean OSC rates across players, denoted by $\mu\_{osc}$, and compute the 95% confidence interval (CI) using the t-distribution.

##### Meta prompting

Building on the approach introduced by [[11](https://arxiv.org/html/2508.15510v1#bib.bib11)], we employ Meta Prompting to evaluate agents’ comprehension of the game. In addition to the original metrics, we introduce two new measures that specifically capture strategic reasoning and behavioral patterns (Table [2](https://arxiv.org/html/2508.15510v1#S3.T2 "Table 2 ‣ Meta prompting ‣ 3.5 Evaluation Measures ‣ 3 Methods and Experimental Design ‣ Super-additive Cooperation in Language Model Agents")).
These questions are prompted to the LLM after the end of every match to assess its level of understanding of game mechanics, current status of the game and opponent behavior. While the meta prompts include potentially biased terms such as "cooperation" or "forgiveness", this is intentional and serves to probe the LLM’s interpretation of the opponent’s behavior. Since these meta prompts are not included in the actual prompts used during the IPD gameplay, they do not influence the agent’s in-game behavior and therefore do not introduce any behavioral bias.

Table 2: Additional meta prompt questions to assess strategy and behavior.

Name


Prompt


Strategy


Does the opponent mostly follow a Tit For Tat strategy? (Will first cooperate, then subsequently replicate an opponent’s previous action)


Behavior


Is the opponent forgiving? (Propensity to choose action\_a again after an opponent’s action\_b)

## 4 Results

In this section, we report the results. We analyze the behavioral patterns exhibited by the different models throughout the rounds played.

### 4.1 Cooperation Rates

The Qwen 3 model (figures [2(a)](https://arxiv.org/html/2508.15510v1#S4.F2.sf1 "In Figure 2 ‣ 4.1 Cooperation Rates ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[2(c)](https://arxiv.org/html/2508.15510v1#S4.F2.sf3 "In Figure 2 ‣ 4.1 Cooperation Rates ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")) exhibits predominantly uncooperative behavior in RI, maintaining a cooperation rate near zero in most rounds. When group dynamics are introduced, the model displays increased cooperative behavior, although this remains highly variable. Phi 4 (figures [5(a)](https://arxiv.org/html/2508.15510v1#S4.F5.sf1 "In Figure 5 ‣ 4.4 Results of Meta Prompting ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[5(c)](https://arxiv.org/html/2508.15510v1#S4.F5.sf3 "In Figure 5 ‣ 4.4 Results of Meta Prompting ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")) on the other hand often exhibits a downward trend on cooperation rate, especially in RI. In the SA setting cooperation rates remain slightly higher.
Finally in Cogito (figures [2(g)](https://arxiv.org/html/2508.15510v1#S4.F2.sf7 "In Figure 2 ‣ 4.1 Cooperation Rates ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[2(i)](https://arxiv.org/html/2508.15510v1#S4.F2.sf9 "In Figure 2 ‣ 4.1 Cooperation Rates ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")) it is hard to draw clear trends, however cooperation is overall higher than the two previous models.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/RI/tournament_action_a_rate_replications_repeated_only.png)


(a) $p\_{c}$ Qwen3, RI.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/GC/tournament_action_a_rate_replications_competition_only.png)


(b) $p\_{c}$ Qwen3, GC.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/SA/tournament_action_a_rate_replications_super_additive.png)


(c) $p\_{c}$ Qwen3, SA.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/RI/tournament_action_a_rate_replications_repeated_only.png)


(d) $p\_{c}$ Phi4, RI.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/GC/tournament_action_a_rate_replications_competition_only.png)


(e) $p\_{c}$ Phi4, GC.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/SA/tournament_action_a_rate_replications_super_additive.png)


(f) $p\_{c}$ Phi4, in SA.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/RI/tournament_action_a_rate_replications_repeated_only.png)


(g) $p\_{c}$ Cogito, RI.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/GC/tournament_action_a_rate_replications_competition_only.png)


(h) $p\_{c}$ Cogito, GC.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/SA/tournament_action_a_rate_replications_super_additive.png)


(i) $p\_{c}$ Cogito, SA.

Figure 2: Each plot shows the cooperation rate ($p\_{c}$) evolution over the rounds played, for every LLM we show the results in the different tournament structures.

Tables [5](https://arxiv.org/html/2508.15510v1#S4.T5 "Table 5 ‣ 4.1 Cooperation Rates ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[5](https://arxiv.org/html/2508.15510v1#S4.T5 "Table 5 ‣ 4.1 Cooperation Rates ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents") present the mean cooperation rates and corresponding 95% confidence intervals for each model across different experimental conditions. Cogito consistently exhibits the highest mean values across all three conditions, with cooperation rates ranging from 0.50 (RI) to 0.55 (SA). This indicates a strong cooperative tendency, particularly in settings with group-based dynamics. In contrast, Phi4 displays the lowest overall cooperation, especially in the Group Context. Qwen3 demonstrates moderate behavior, with mean cooperation values clustered around 0.22–0.32 across conditions. In both Phi4 and Qwen3 the SA structure significantly boosts cooperation.

Table 3: $\mu\_{c}$ for Qwen3.

| Qwen | Mean | 95% CI |
| --- | --- | --- |
| RI | 0.22 | [0.20, 0.23] |
| GC | 0.23 | [0.20, 0.25] |
| SA | 0.32 | [0.29, 0.34] |

Table 4: $\mu\_{c}$ for Phi4.

| Phi | Mean | 95% CI |
| --- | --- | --- |
| RI | 0.21 | [0.18, 0.24] |
| GC | 0.13 | [0.11, 0.16] |
| SA | 0.43 | [0.40, 0.46] |

Table 5: $\mu\_{c}$ for Cogito.

| Cogito | Mean | 95% CI |
| --- | --- | --- |
| RI | 0.50 | [0.48, 0.53] |
| GC | 0.59 | [0.56, 0.62] |
| SA | 0.55 | [0.52, 0.57] |

### 4.2 One-shot Cooperation

In the one-shot interactions, Qwen3 (figures [3(a)](https://arxiv.org/html/2508.15510v1#S4.F3.sf1 "In Figure 3 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[3(c)](https://arxiv.org/html/2508.15510v1#S4.F3.sf3 "In Figure 3 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")) exhibits relatively consistent behavior, particularly in the later rounds. Cooperation rates are higher in the super-additive setting. Phi4 (figures [3(d)](https://arxiv.org/html/2508.15510v1#S4.F3.sf4 "In Figure 3 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[3(f)](https://arxiv.org/html/2508.15510v1#S4.F3.sf6 "In Figure 3 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")) follows a similar pattern with slightly higher one-shot cooperation with the SA structure.
Cogito (figures [3(g)](https://arxiv.org/html/2508.15510v1#S4.F3.sf7 "In Figure 3 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[3(i)](https://arxiv.org/html/2508.15510v1#S4.F3.sf9 "In Figure 3 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")) on the other hand seems to be more cooperative even on first interaction, however the highest cooperation is achieved in the group setting.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/RI/first_interaction_cooperation_replications_repeated_only.png)


(a) $p\_{osc}$ Qwen3, RI.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/GC/first_interaction_cooperation_replications_competition_only.png)


(b) $p\_{osc}$ Qwen3, GC.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/SA/first_interaction_cooperation_replications_super_additive.png)


(c) $p\_{osc}$ Qwen3, SA.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/RI/first_interaction_cooperation_replications_repeated_only.png)


(d) $p\_{osc}$ Phi4, RI.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/GC/first_interaction_cooperation_replications_competition_only.png)


(e) $p\_{osc}$ Phi4, GC.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/SA/first_interaction_cooperation_replications_super_additive.png)


(f) $p\_{osc}$ Phi4, SA.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/RI/first_interaction_cooperation_replications_repeated_only.png)


(g) $p\_{osc}$ Cogito RI.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/GC/first_interaction_cooperation_replications_competition_only.png)


(h) $p\_{osc}$ Cogito GC.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/SA/first_interaction_cooperation_replications_super_additive.png)


(i) $p\_{osc}$ Cogito SA.

Figure 3: Each plot shows the one-shot cooperation rate ($p\_{osc}$) evolution over the rounds played, for every LLM we show the results in the different tournament structures.

Tables [8](https://arxiv.org/html/2508.15510v1#S4.T8 "Table 8 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")-[8](https://arxiv.org/html/2508.15510v1#S4.T8 "Table 8 ‣ 4.2 One-shot Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents") present the mean one-shot cooperation rates and corresponding 95% confidence intervals for each model across different experimental conditions. Cogito remains the most cooperative, with notably high values in GC (0.71) and SA (0.65), suggesting a strong initial bias toward cooperation. Phi4 and Qwen3 again show lower values overall, with Phi4 reaching its peak (0.43) in SA, similarly Qwen3 attains its highest first-round cooperation (0.39) in SA.

Table 6: $\mu\_{osc}$ for Qwen3.

| Qwen | Mean | 95% CI |
| --- | --- | --- |
| RI | 0.27 | [0.20, 0.34] |
| GC | 0.26 | [0.16, 0.35] |
| SA | 0.39 | [0.31, 0.47] |

Table 7: $\mu\_{osc}$ for Phi4.

| Phi | Mean | 95% CI |
| --- | --- | --- |
| RI | 0.29 | [0.22, 0.37] |
| GC | 0.29 | [0.19, 0.38] |
| SA | 0.43 | [0.35, 0.51] |

Table 8: $\mu\_{osc}$ for Cogito.

| Cogito | Mean | 95% CI |
| --- | --- | --- |
| RI | 0.61 | [0.53, 0.69] |
| GC | 0.71 | [0.62, 0.81] |
| SA | 0.65 | [0.58, 0.73] |

### 4.3 Intra-group vs. Inter-group Cooperation

Intra-group cooperation rates are higher (figure [4](https://arxiv.org/html/2508.15510v1#S4.F4 "Figure 4 ‣ 4.3 Intra-group vs. Inter-group Cooperation ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")), this is especially pronounced in Phi4 with the highest difference. As noted before Cogito has a higher overall cooperation, however the difference between intra-group and inter-group cooperation is the lowest.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/SA/super_additive_results_replications_super_additive.png)


(a) Qwen 3.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/SA/super_additive_results_replications_super_additive.png)


(b) Phi 4.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/SA/super_additive_results_replications_super_additive.png)


(c) Cogito.

Figure 4: intra-group and inter-group cooperation in the super additive setting for the different models.

### 4.4 Results of Meta Prompting

The meta-prompt questions serve as an indicator of how well each model understands the game rules, the current game state, and the behavior of the opponent (figure [5](https://arxiv.org/html/2508.15510v1#S4.F5 "Figure 5 ‣ 4.4 Results of Meta Prompting ‣ 4 Results ‣ Super-additive Cooperation in Language Model Agents")). Among the evaluated models, Phi4 achieves the highest overall scores, followed closely by Qwen3. In contrast, Cogito exhibited lower performance, demonstrating a noticeable gap in performance relative to the other two models. These results suggest that Cogito lacks a sufficient understanding of the game dynamics, which in turn hinders its ability to play the game effectively.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_qwen/SA/meta_prompts_replications_super_additive.png)


(a) Qwen 3.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_phi/SA/meta_prompts_replications_super_additive.png)


(b) Phi 4.

![Refer to caption](https://arxiv.org/html/2508.15510v1/plots/final_results_cogito/SA/meta_prompts_replications_super_additive.png)


(c) Cogito.

Figure 5: Meta prompt accuracy results from the SA tournaments for the different LLMs.

## 5 Discussion

This study investigated the emergence of super-additive cooperation among language model agents within a tournament-based iterated prisoner’s dilemma framework. We examined how different conditions: repeated interactions, group competition, and their combination (super-additive); influenced cooperation rates, one-shot cooperation, and strategic behavior in three light-weight open-source LLMs: Qwen3 14b, Phi4 reasoning, and Cogito 14b.

Our results indicate varied responses across conditions. Qwen3 generally exhibited low cooperation in RI and GC, with increased cooperation when group dynamics and individual interactions were combined. Its one-shot cooperation was also highest in the SA setting. Phi4 often showed a declining trend in cooperation rates, particularly in RI, though SA conditions sustained higher cooperation. Similar to Qwen3, Phi4’s one-shot cooperation was most pronounced under the SA structure. Cogito displayed generally higher cooperation rates overall compared to Qwen3 and Phi4, though clear trends were less discernible. One-shot cooperation peaked in the GC condition.

Regarding our hypotheses, the findings provide partial support. For $H\_{1}$, which posited that the average cooperation rate $\mu\_{c}$ under the SA condition would exceed that under either RI or GC alone, the results for Qwen3 (SA: 0.32 vs RI: 0.22, GC: 0.23) and Phi4 (SA: 0.43 vs RI: 0.21, GC: 0.13) fully align with this hypothesis.
This is particularly pronounced in intra-group cooperation rates. A comparison of intra-group and inter-group cooperation rates reveals that the elevated overall cooperation observed in the SA condition is primarily due to intra-group interactions. In particular, Phi4 and Qwen3 exhibit notably higher cooperation rates in intra-group matches. This aligns with the findings of [[9](https://arxiv.org/html/2508.15510v1#bib.bib9)]: introducing an external enemy through group competition increases pressure for intra-group cooperation.
In contrast, Cogito does not appear to consistently choose a more cooperative strategy in the SA setting. This is evidenced by the minimal difference between its intra-group and inter-group cooperation rates. Moreover, Cogito occasionally exhibits higher cooperation in the GC condition than in SA, further indicating a lack of strategic group play. This interpretation is supported by the meta-prompt evaluations, where Phi4 and Qwen3 demonstrated a better understanding of the game dynamics. Cogito’s weaker performance in these evaluations suggests that its behavior may be driven more by inherent model biases or superficial pattern matching than by deliberate strategic reasoning. The difference in behavior might also be caused by the model’s training process, Cogito uses Iterated Distillation and Amplification [[7](https://arxiv.org/html/2508.15510v1#bib.bib7)].

$H\_{2}$, which posited that average one-shot cooperation ($\mu\_{osc}$) in the SA setting would exceed that of RI or GC alone, offers a particularly interesting insights. In one-shot interactions, agents lack prior knowledge of their opponent’s group. Despite this, elevated cooperation rates are still observed. Qwen3 and Phi4 exhibit the highest $\mu\_{osc}$ in the SA condition, lending support to the hypothesis that super-additive structures can promote initial cooperative behavior. Interestingly, Cogito achieves its highest $\mu\_{osc}$ in the GC condition, highlighting a divergence in model behavior.

Overall tournament scores and winners are not discussed for two primary reasons. First, because agents may exit a game at any point, they do not all participate in the same number of rounds, rendering direct score comparisons unfair. Second, the primary objective of this experiment is to evaluate collaboration dynamics rather than competitive performance. Consequently, we do not focus on fixed traditional IPD strategies or detailed game score analyses.

These results suggest that super-additive interaction structures can indeed enhance cooperation in large language models, the degree and consistency of this effect depend on the model’s capacity to understand the environment dynamics. Nonetheless, for models with a strong understanding of game dynamics, combining RI with GC appears to promote more cooperative behavior during initial interactions. The SA condition thus emerges as a particularly effective framework for fostering cooperation and one-shot cooperation in language model agents.
Employing an interaction network structure that incorporates both repeated interactions and inter-group competition gives important insights on the counterintuitive role of competition in LLM alignment. Furthermore pressure from competing groups incentivizes intra-group cooperation, which in turn enhances the agents’ overall success. Such a framework can enhance agent performance in domains characterized by a blend of cooperative and competitive dynamics, including financial negotiation, multiplayer online environments, and multi-robot systems in logistics. Pressure from competing groups incentivizes intra-group cooperation, which in turn enhances the agents’ overall success.

It is noteworthy that some language models exhibit behavioral patterns similar to those observed in humans. In particular, several models showed especially high intra-group cooperation in the combined super-additive setting (Phi4 and Qwen3), mirroring results from the Papua New Guinea experiment reported in [[9](https://arxiv.org/html/2508.15510v1#bib.bib9)]. This highlights the potential of language models to simulate socially complex human behaviors.

## 6 Limitations

While this study provides insights into LLM cooperation, several limitations should be acknowledged:

1. 1.

   Scale: The choice of smaller light-weight models was partly due to the computational demands of running numerous game simulations. Larger-scale experiments with more sophisticated models would require significantly more computational resources, which was a constraint for this study. The observed behaviors and the extent of super-additive cooperation may differ in more powerful proprietary models. Furthermore the tournament involved two teams of three players each; a larger number of agents, teams and experiment replications might reveal different emergent behaviors or more robust statistical patterns. The limited number of rounds per player might also constrain the full development of complex strategies. Finally, factors such as planning frequency, model temperature, and more prompting techniques should be systematically tested and compared.
2. 2.

   Generalizability of Game Setting: The study utilized the IPD as the primary interaction model. While IPD is a classic game for studying cooperation, the findings may not directly generalize to other types of social dilemmas, strategic games with different payoff structures, or more complex real-world interaction scenarios.
3. 3.

   Prompt Sensitivity and Design: LLM behavior can be highly sensitive to prompt phrasing. While efforts were made to create neutral and clear prompts, subtle interpretations by the models could still influence outcomes. The specific structure of the planner, evaluator, and player LLM prompts also shapes the observed behavior, this framework could not be extensively tested due to time constraints.
4. 4.

   Fixed Model Parameters: The study operated with fixed model parameters, without any fine-tuning during the experiments. This approach isolates context behavioral changes but does not explore how LLMs might adapt their underlying models or learn more deeply from experience over longer timescales.
5. 5.

   Partner Choice Mechanism: While players could terminate a match and proceed to a new opponent, the study did not deeply explore the nuances of more complex partner selection such as autonomous team selection, which might influence cooperation.

## 7 Conclusion and Future Work

In conclusion, this study demonstrates that structural factors like repeated interactions and inter-group competition significantly influence LLM agent cooperation. The super-additive condition, combining both, often fosters higher cooperation and one-shot cooperation rates, particularly for models like Qwen3 and Phi4. However, model-specific characteristics and comprehension levels play a crucial role in shaping these dynamics. Our framework provides a valuable tool for exploring complex social behaviors in LLM agents, contributing to the understanding of how autonomous AI systems might interact in multi-agent environments. The findings underscore the potential for designing interaction structures that promote cooperative outcomes, which is vital for aligning AI behavior with human values.
Future research could address these limitations by expanding the range of LLMs tested, exploring different game structures, increasing the scale of simulations, and investigating the impact of adaptive learning mechanisms and more sophisticated prompting strategies. Additionally, incorporating richer and more complex social dynamics, such as communication between agents, autonomous team choice or a reputation system could provide deeper insights into the emergence of cooperation. Furthermore, given the rapid evolution of language models, their cooperative behaviors must be continuously evaluated to track changes and emerging patterns.

#### Acknowledgments

We have made use of generative AI systems such as ChatGPT 4.5 and Gemini 2.5 pro for paraphrasing and increasing clarity of the report.

## References

- [1]

  Abdin, M., Agarwal, S., Awadallah, A., Balachandran, V., Behl, H., Chen, L.,
  de Rosa, G., Gunasekar, S., Javaheripi, M., Joshi, N., Kauffmann, P., Lara,
  Y., Mendes, C.C.T., Mitra, A., Nushi, B., Papailiopoulos, D., Saarikivi, O.,
  Shah, S., Shrivastava, V., Vineet, V., Wu, Y., Yousefi, S., Zheng, G.:
  Phi-4-reasoning technical report (2025),
  <https://arxiv.org/abs/2504.21318>
- [2]

  Aher, G., Arriaga, R.I., Kalai, A.T.: Using large language models to simulate
  multiple humans and replicate human subject studies (2023),
  <https://arxiv.org/abs/2208.10264>
- [3]

  Akata, E., Schulz, L., Coda-Forno, J., Oh, S.J., Bethge, M., Schulz, E.:
  Playing repeated games with large language models (2023),
  <https://arxiv.org/abs/2305.16867>
- [4]

  Axelrod, R.: Effective choice in the prisoner’s dilemma. The Journal of
  Conflict Resolution 24(1), 3–25 (1980),
  <http://www.jstor.org/stable/173932>
- [5]

  Brookins, P., Debacker, J.: Playing games with GPT: What can we learn about a
  large language model from canonical strategic games? SSRN Electronic Journal
  (2023), <https://api.semanticscholar.org/CorpusID:259714625>
- [6]

  Bó, Fréchette: The evolution of cooperation in infinitely repeated games:
  Experimental evidence 101 (2011). https://doi.org/10.1257/aer.101.1.411
- [7]

  Christiano, P., Shlegeris, B., Amodei, D.: Supervising strong learners by
  amplifying weak experts (2018), <https://arxiv.org/abs/1810.08575>
- [8]

  Deep Cogito: Cogito v1 preview introducing ida as a path to general
  superintelligence. (Blog post) (2025),
  <https://www.deepcogito.com/research/cogito-v1-preview>
- [9]

  Efferson, C., Bernhard, H., Fischbacher, U., Fehr, E.: Super-additive
  cooperation. Nature 626,  1–8 (02 2024).
  https://doi.org/10.1038/s41586-024-07077-w
- [10]

  Fan, C., Chen, J., Jin, Y., He, H.: Can large language models serve as rational
  players in game theory? a systematic analysis (2023),
  <https://arxiv.org/abs/2312.05488>
- [11]

  Fontana, N., Pierri, F., Aiello, L.M.: Nicer than humans: How do large language
  models behave in the prisoner’s dilemma? (2024),
  <https://arxiv.org/abs/2406.13605>
- [12]

  Garcia, J.L., Hajkova, K., Marchenko, M., Patiño, C.M.: Reproducibility study
  of cooperation, competition, and maliciousness: Llm-stakeholders interactive
  negotiation (2025), <https://arxiv.org/abs/2502.16242>
- [13]

  Graser, C., Fujiwara-Greve, T., García, J., van Veelen, M.: Repeated games
  with partner choice. PLOS Computational Biology 21(2), 1–19 (02
  2025). https://doi.org/10.1371/journal.pcbi.1012810,
  <https://doi.org/10.1371/journal.pcbi.1012810>
- [14]

  Meinke, A., Schoen, B., Scheurer, J., Balesni, M., Shah, R., Hobbhahn, M.:
  Frontier models are capable of in-context scheming (2025),
  <https://arxiv.org/abs/2412.04984>
- [15]

  Mensfelt, A., Stathis, K., Trencsenyi, V.: Logic-enhanced language model agents
  for trustworthy social simulations (2024),
  <https://arxiv.org/abs/2408.16081>
- [16]

  Qwen Team: Qwen3 technical report (2025),
  <https://arxiv.org/abs/2505.09388>
- [17]

  Shinn, N., Cassano, F., Berman, E., Gopinath, A., Narasimhan, K., Yao, S.:
  Reflexion: Language agents with verbal reinforcement learning (2023),
  <https://arxiv.org/abs/2303.11366>
- [18]

  Tucker, A., Luce, R.: Contributions to the Theory of Games. Annals of
  Mathematics Studies, Princeton University Press (1959),
  <https://books.google.dk/books?id=9lSVFzsTGWsC>
- [19]

  Willis, R., Du, Y., Leibo, J.Z., Luck, M.: Will systems of llm agents
  cooperate: An investigation into a social dilemma (2025),
  <https://arxiv.org/abs/2501.16173>
- [20]

  Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K., Cao, Y.: React:
  Synergizing reasoning and acting in language models (2023),
  <https://arxiv.org/abs/2210.03629>
