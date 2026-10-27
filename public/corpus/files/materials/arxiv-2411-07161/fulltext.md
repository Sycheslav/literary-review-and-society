---
id: arxiv-2411-07161-text
type: material
title: 'RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration'
work_id: arxiv-2411-07161
source_url: https://arxiv.org/html/2411.07161v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: cc459bb0fb337aec5a12ca0a692882c18322d793db9d00cf745e2e4fa802d245
---

> Источник: [https://arxiv.org/html/2411.07161v2](https://arxiv.org/html/2411.07161v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration

Young-Min Cho
†
Affiliation: University of Pennsylvania
Affiliation: AWS GenAI
Email: [jch0@seas.upenn.edu](mailto:)
  
Raphael Shu
Affiliation: AWS GenAI
Email: [zhongzhu@amazon.com](mailto:)
  
Nilaksh Das
Affiliation: AWS GenAI
Email: [yizhngn@amazon.com](mailto:)
  
Tamer Alkhouli
Affiliation: AWS GenAI
  
Yi-An Lai
Affiliation: AWS GenAI
  
Jason Cai
Affiliation: AWS GenAI
  
Monica Sunkara
Affiliation: AWS GenAI
  
Yi Zhang
Affiliation: AWS GenAI
  
Dan Roth

###### Abstract

Effective group decision-making is critical in Multi-Agent Systems (MAS). Yet, how different mechanisms for reaching consensus impact collaboration quality and efficiency remains understudied. We conduct a systematic study on group decision-making mechanisms in a decentralized setting. Through controlled experiments, we analyze how different voting rules affect decision quality and efficiency in a multi-round collaboration. Results reveal that majority voting often cause inefficient collaboration due to its strict acceptance criteria. At the extreme, unanimous voting gives 87% lower initial performance than the best-performing method. Our qualitative analysis of cross-agent communication shows that messages become longer and more repetitive over time: while message length increases by 84%, similarity to the previous round increases to 90%. Based on these insights, language-based early stopping methods make the performance 13% closer to oracle while reducing rounds by 50%. Our findings highlight the crucial role of group decision-making in optimizing MAS collaboration.

## 1 Introduction

Collaboration is a fundamental aspect of human society. It enables individuals to address complex challenges that would be unmanageable otherwise ([De Man and Duysters, 2005](https://arxiv.org/html/2411.07161v2#bib.bib9); [Graesser et al., 2018](https://arxiv.org/html/2411.07161v2#bib.bib14); [Bittner and Leimeister, 2013](https://arxiv.org/html/2411.07161v2#bib.bib4)). Inspired by this principle, Large Language Model (LLM)-based Multi-Agent Systems (MAS) have emerged as a paradigm where autonomous LLM agents interact, reason, and coordinate to contribute diverse perspectives, fostering richer problem-solving through collective intelligence. This approach is valuable in complex domains such as software development [Hong et al. (2023)](https://arxiv.org/html/2411.07161v2#bib.bib18); financial trading, [Li et al. (2023)](https://arxiv.org/html/2411.07161v2#bib.bib24); and healthcare [Tang et al. (2023)](https://arxiv.org/html/2411.07161v2#bib.bib36). These systems demonstrate the importance of MAS, which coordinates interactions among agents to enhance task performance and solution quality.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/spirit.png)


Figure 1: An example of decentralized multi-agent collaboration, in which agents reach consensus through multi-round communication and decision-making.

One fundamental component in MAS is decision-making mechanism, which defines how decisions are made in the system. It enables agents to coordinate their actions and achieve collective goals efficiently. Decision-making can be categorized into two levels: 1) individual decision-making, where each agent independently evaluates its environment, sets objectives, and selects actions to optimize its own outcomes; and 2) group (collective) decision-making, where a framework aggregates the opinions of all agents to produce a collective outcome, with implicit early stopping when consensus stabilizes. Since agents likely to have varying perspectives by the nature of MAS, aggregating different opinions to make a group level decision becomes especially important.

Although individual decision-making is mostly powered by LLM, group decision-making varies across systems. While centralized MAS resolving conflicts between agents through a leader or hierarchical decision-making pipeline ([Hong et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib18); [Qian et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib33); [Dong et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib10)), decentralized MAS distributes power equally among agents ([Mandi et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib29); [Zhang et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib40); [Xu et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib39); [Park et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib32)). Despite the recent success of decentralized MAS, such as Multi-Agent Debate [Du et al. (2023)](https://arxiv.org/html/2411.07161v2#bib.bib11); [Chan et al. (2023)](https://arxiv.org/html/2411.07161v2#bib.bib6); [Liang et al. (2023)](https://arxiv.org/html/2411.07161v2#bib.bib26), existing studies predominantly rely on majority voting or average rating without thoroughly evaluating alternative mechanisms.

Indeed, the aggregation of diverse opinions has been extensively studied in economics and political science. As a theoretical framework for decision-making, social choice theory examines how collective decisions are made by aggregating individual preferences into a unified outcome [Arrow (2012)](https://arxiv.org/html/2411.07161v2#bib.bib1); [Riker (1988)](https://arxiv.org/html/2411.07161v2#bib.bib35); [Endriss (2008)](https://arxiv.org/html/2411.07161v2#bib.bib13). Within social choice theory, voting rules are the most representative and widely used functions that maps individual votes to a collective outcome. Examples of voting rules include unanimous, majority, plurality, rated, ranked, and cumulative voting.

While traditional studies in economics and computational social choice are extensive, investigating social choice in LLM-based multi-agent systems remains non-trivial. This is because the mere acknowledgment of using a specific voting rule can influence agents’ actions and strategies. In decentralized MAS, where agents are adaptive and capable of strategic behavior, the voting rule is not just an aggregation tool but also a factor that shapes the dynamics of interaction. As shown in Figure [1](https://arxiv.org/html/2411.07161v2#S1.F1 "Figure 1 ‣ 1 Introduction ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), this feedback loop between the voting rule and agent behavior makes it essential to investigate how different voting rules affect not only the final outcomes but also the process of reaching consensus. Furthermore, the decision-making mechanism requires a stopping signal during collaboration to reduce communication costs and enhance collaboration quality. However, social choice theory does not account for communication dynamics or provide criteria for early stopping. Therefore, studying the decision-making mechanisms in MAS is critical for designing systems that ensure robust, fair, and efficient collective intelligence.

This study investigates group decision-making mechanisms in decentralized MAS. We develop an experimental platform, RoundTable, which enables multi-round, multi-agent decentralized collaboration and allows controlled experiments to compare the effects of different decision-making mechanisms. By comparing various voting rules, we see that too strict voting threshold and format yield worse performance. Unanimous voting, which has the strictest threshold and format, shows 87% lower initial round performance and 39% lower final round performance. We further analyze cross-agent communications to characterize MAS interactions, finding that messages grow longer and more repetitive over time. Message length increases by 84%, while similarity to the previous round reaches 90%, indicating inefficiencies in prolonged collaboration. Based on these insights, we find language-based early stopping improves performance by 13% while halving the number of rounds, enabling timely, efficient collaboration.

This paper provides the following research contributions:

- •

  We show that majority voting often fails in multi-agent systems because its strict acceptance criteria hinder decision-making.
- •

  We identify that extended collaboration often leads to inefficiencies, characterized by longer and more repetitive messages, which result in redundant communication and reduced effectiveness.
- •

  Our experiments show that can be leveraged for early stopping, enhancing performance and reducing the number of rounds.

## 2 Related Work

##### Centralized vs Decentralized MAS

Centralized MAS have been extensively studied, with systems like MetaGPT ([Hong et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib18)) and AutoGen ([Wu et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib38)) using manager agents or hierarchical structures for decision-making. While effective for coordination, these systems face issues such as single points of failure and decision biases due to concentrated authority ([Owens et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib31); [Jiang and Lu, 2019](https://arxiv.org/html/2411.07161v2#bib.bib20)).

Decentralized MAS, as seen in RoCo ([Mandi et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib29)) and Generative Agents ([Park et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib32)), distribute decision power among agents, enhancing flexibility, robustness, and adaptability. Despite these strengths, current research often overlooks challenges like consensus-building and efficient cross-agent communication, especially in complex, dynamic environments ([Xu et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib39); [Zhang et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib40)).

##### Social Choice Theory

Social choice theory, rooted in economics, examines how individual preferences can be aggregated for collective decision-making, with foundational work like Arrow’s Impossibility Theorem highlighting the challenges of fairness ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)). It has since expanded into computational social choice for algorithmic decision-making and automated negotiation to resolve conflicts in multi-agent settings ([Endriss, 2008](https://arxiv.org/html/2411.07161v2#bib.bib13); [Kraus, 2001](https://arxiv.org/html/2411.07161v2#bib.bib22)). In LLM-based MAS, voting rules help consolidate diverse agent opinions, but most applications rely heavily on majority voting due to its simplicity ([Li et al., 2022](https://arxiv.org/html/2411.07161v2#bib.bib25); [Chan et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib6)). This over-reliance limits adaptability, overlooking more flexible voting rules like ranked or rated voting that could improve collaboration and decision efficiency in dynamic MAS environments.

##### Cross-Agent Communication

Cross-agent communication is essential in decentralized MAS, enabling information sharing, negotiation, and consensus-building without central control ([Jennings et al., 2001](https://arxiv.org/html/2411.07161v2#bib.bib19); [Park et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib32); [Han et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib16)). However, structured protocols like turn-taking and fixed roles can create power imbalances, undermining decentralization. While prior work optimizes message passing and protocols, how to use language patterns to understand collaboration remains underexplored. This study examines language cues as indicators of collaboration quality and introduces language-based early stopping to enhance decision-making efficiency.

## 3 Decentralized MAS

A decentralized MAS is a collection of autonomous agents collaborating towards a common goal without a central controller. Each agent in the system operates based on its individual context, defined by available information, historical interactions, and personalized objectives. The collaboration unfolds over multiple rounds, where agents communicate, propose solutions, and vote to reach a collective decision. This system is characterized by 1) The collective decision emerges from individual proposals and votes rather than being imposed by a single entity; 2) Agents update their strategies based on past interactions, ensuring adaptability to changing circumstances.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/RoundTable.png)


Figure 2: Overview of our multi-agent collaboration platform: RoundTable. It allows a multi-round collaboration where agents simultaneously send messages, propose solutions, and vote. Based on a voting rule, RoundTable selects the most preferred proposal for group decisions. Detailed introduction of RoundTable is in Appendix [B.1](https://arxiv.org/html/2411.07161v2#A2.SS1 "B.1 RoundTable Platform Design ‣ Appendix B Details of RoundTable ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

### 3.1 Problem Definition

We consider an environment where all possible states of the world are defined as $\mathcal{X}$ and a task $\Sigma$ is set as the global objective. Here, a decentralized MAS system is defined as a collaborative decision-making process over $R$ rounds, involving a set of agents $i\in\mathcal{I}$.

##### Agent Definition

At each round $r$, an agent $i$ takes actions with LLM and its latest individual context, denoted as $\Omega\_{i}=\{B\_{i},H\}$.

• Background $B\_{i}$ includes: Task $\Sigma$, Collaboration Rules, and Self Information (persona, data access, and objective).

• Latest History $H$ includes: Messages $M$, Proposals $P$, Votes $V$, and Group Decision $x^{\*}\_{r}\in\mathcal{X}$: The latest decision reached by the group at round $r$.

##### Action Definition

The collaboration at each round $r$ is structured into three ordered phases, which defines action space for agents:
  
  
• Message Phase: Each agent formulates a message based on its context: $m\_{i,r}=f\_{m}(\Omega\_{i})$

• Proposal Phase: Each agent generates a proposal for a potential group decision: $p\_{i,r}=f\_{p}(\mathcal{X},\Omega\_{i}),\quad p\_{i,r}\in\mathcal{X}$

• Voting Phase: Each agent evaluates and votes on proposals: $v\_{i,p,r}=f\_{v}(p,\Omega\_{i})$, where the format of vote is defined by the input voting rule $F$.

##### Voting Rules

At the end of each round, a voting rule $F$ determines the collective decision for the round:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=F(\{(c,\{v\_{i,c,r}\mid i\in\mathcal{I}\})\mid c\in C\})$$ |  |

where the candidate set $C$ consists of all proposals and the previous group decision: $C=P\cup\{\hat{x^{\*}}\_{r-1}\}$.

To investigate the impact of different voting rules in multi-agent collaboration, we compare the following six voting rules: Unanimous, majority and plurality voting, where agents only choose the best candidate from the list (discrete voting rules); rated, ranked and cumulative voting, which ask a nuanced, gradient preference over candidates (preference voting rules).1

• Unanimous Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): The proposal that receives votes from all agents will be selected.

• Majority Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): The proposal that receives votes from more than half of all agents will be selected.

• Plurality Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): The proposal that receives the most votes will be selected.

• Rated Voting ([Baujard et al., 2018](https://arxiv.org/html/2411.07161v2#bib.bib2)): Each agent rates proposals on a 5-point scale, selecting the one with the highest total score.

• Ranked Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): Agents rank proposals by preference, with points assigned as 1, 1/2, 1/3, etc., and the highest-scoring proposal is selected.

• Cumulative Voting ([Black, 1958](https://arxiv.org/html/2411.07161v2#bib.bib5)): Each agent distributes $|\mathcal{I}|$ points among $|\mathcal{I}|$ proposals, selecting the one with the highest total.

The goal of the decentralized MAS is to find the solution $x^{\*}\in\mathcal{X}$ with inputs: the task $\Sigma$, all agent information $\{\phi\_{i}|\forall i\in\mathcal{I}\}$, and a voting rule $F$. Based on the definitions above, we propose RoundTable, an experiment platform for decentralized multi-agent collaboration that can compare various voting rules through controlled experiments. The overview of RoundTable is shown in Figure [2](https://arxiv.org/html/2411.07161v2#S3.F2 "Figure 2 ‣ 3 Decentralized MAS ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").2

## 4 Experiments

Using RoundTable, we analyze multi-agent behavior patterns over $R=10$ rounds per collaboration. Since disagreement among agents creates tension between cooperation and competition, we evaluate RoundTable in two environments: competitive-focused and cooperative-focused. In both, we report performance as the average of 100 independent collaborations.

### 4.1 Competitive Environment - Exchange Economy

##### Introduction

We use an exchange economy for the competitive environment as the advantages make it ideal for evaluating a decentralized MAS ([Varian, 1992](https://arxiv.org/html/2411.07161v2#bib.bib37)). First, it is a plus-sum game where agents seek equilibrium, meaning collaboration opportunities exist if allocation is not yet optimal. Second, multiple equilibria in the market allow dynamic collaboration. Third, while equilibrium doesn’t guarantee maximum utility, it must lie within one of the equilibria, helping to assess whether conflicts between agents hinder the group’s progress toward the ultimate goal.

Here, $K$ types of goods and the same number of agents participate in a market, with each good having a quantity of 100. Each agent has a Cobb-Douglas utility function $u\_{i}=\prod a\_{k}^{\theta\_{k}},\sum\theta\_{k}=1$, where $a\_{k}$ represents the amount of good $k$ for agent $i$, and $\theta\_{k}$ reflects the relative preference for each good ([Cobb and Douglas, 1928](https://arxiv.org/html/2411.07161v2#bib.bib8)). Agents’ objective is set to maximize their individual utility by finding an optimal allocation of goods. From a group perspective, the hidden goal is to maximize the total utility $U=\sum u\_{i}$, which is not revealed to agents.3

To reflect common MAS collaboration patterns, we use an asymmetric utility function setup with $K=3$ types of goods and agents, where each agent prefers different goods, mimicking real-world scenarios where agents specialize in different areas.4 Each agent’s utility function is $u\_{i}=a\_{i}^{0.8}\prod\_{k\neq i}a\_{k}^{\tilde{\theta}}$, where $\tilde{\theta}=\frac{0.2}{K-1}$.

##### Metrics

We use various metrics to analyze multi-agent collaboration. For quality, we report the group total utility $U=\frac{\sum u\_{i}}{U\_{max}}$, where $U\_{max}$ is the largest possible utility achievable in the environment. Efficiency is measured by the area under the curve (AUC), $AUC@n=\sum\_{r=1}^{n}\frac{U\_{r}}{U\_{max}}$. Fairness is assessed by $\frac{u\_{min}}{u\_{max}}$, which compares the smallest individual utility to the largest at the last round. Rationality is the ratio of rounds where the individual utility of the proposed allocation exceeds the current one.5 Finally, rigidity measures how often an old allocation is kept, $rigidity=\frac{1}{10}\sum\_{r=1}^{10}\mathbbm{1}(U\_{r}=U\_{r-1})$.

### 4.2 Cooperative Environment - Recommendation System

##### Introduction

For the cooperative environment, we focus on the recommendation system. It reveals unique collaborative behaviors absent in exchange economies. First, strong information asymmetry exists, as no partial information can accurately predict. Second, group decision-making fosters diverse problem-solving approaches, with agents both consuming and contributing information in a feedback loop that enhances recommendations.

The task is to predict user ratings for specific items by analyzing historical interactions and detecting trends and correlations in the data. This is challenging for a single-agent system due to the overwhelming amount of data, but essential information is scattered and limited. In our setting, we divide the background information into three parts and assign each to different agents. The agents must then collaborate by exploring, analyzing, exchanging, and synthesizing their information to reach a comprehensive conclusion.

##### Dataset

We evaluate MAS performance using the MovieLens-100k dataset ([Harper and Konstan, 2015](https://arxiv.org/html/2411.07161v2#bib.bib17)). The dataset consists of information of all users and movies, and the rating history of users on movies. Due to resource constraints, we randomly selected 100 examples from the u1.test split for evaluation. To simplify the data structure, we pre-processed it into three tables: basicInfo, userHistory, and movieHistory. Each table was assigned to a different agent, creating a 3-agent collaboration system.6

##### Metrics

We use Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) to represent utility $U\_{r}$, assessing the accuracy of predictions compared to the gold rating at round $r$. To evaluate MAS performance in the recommendation task, we compare it against two baselines: a simple Always Guess 4, which predicts the median regardless of input, and a strong State of the Art (SoTA) model from [Behera and Nain (2023)](https://arxiv.org/html/2411.07161v2#bib.bib3), which employs collaborative filtering with temporal features.

## 5 Results

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | |  | | --- | | GROUP | | TOTAL | | UTILITY@3 | | |  | | --- | | GROUP | | TOTAL | | UTILITY@5 | | |  | | --- | | GROUP | | TOTAL | | UTILITY@10 | | AUC@3 | AUC@5 | AUC@10 | RATIONALITY | FAIRNESS | RIGIDITY |
| Model: gpt-4o-mini, # Agent: $\mathbf{K=3}$ | | | | | | | | | |
| Unanimous | 33.94 (3.96) | 43.92 (3.96) | 48.48 (3.86) | 21.77 (2.86) | 30.17 (3.05) | 38.65 (3.32) | 35.00 (1.73) | 87.96 (1.85) | 93.00 (0.61) |
| Majority | 79.88 (0.80) | 81.33 (0.72) | 79.61 (0.88) | 64.08 (1.81) | 70.91 (1.23) | 75.67 (0.84) | 23.80 (0.94) | 64.00 (3.07) | 71.30 (1.32) |
| Plurality | 78.70 (1.32) | 79.42 (1.12) | 76.95 (1.24) | 64.17 (1.85) | 70.34 (1.37) | 74.26 (1.11) | 26.50 (1.10) | 58.11 (3.29) | 69.10 (1.43) |
| Rated | 80.83 (0.49) | 80.85 (0.97) | 79.91 (0.83) | 74.02 (0.92) | 76.83 (0.68) | 78.63 (0.59) | 19.80 (0.89) | 67.02 (2.97) | 66.70 (1.56) |
| Ranked | 80.92 (0.62) | 81.41 (0.73) | 78.40 (1.46) | 77.31 (1.00) | 78.89 (0.74) | 79.41 (0.68) | 19.03 (0.85) | 65.10 (3.05) | 61.40 (1.93) |
| Cumulative | 79.05 (1.11) | 81.10 (0.89) | 78.45 (1.15) | 68.60 (1.62) | 73.63 (1.11) | 76.48 (0.86) | 23.13 (1.05) | 59.24 (3.36) | 65.50 (1.60) |

Table 1: Exchange economics environment results across different voting rules. The reported numbers are an average of all simulations, and the numbers in parentheses are standard errors. The smallest and largest value in a category is colored in blue and red. We see that discrete voting rules show lower and less stable early performance, due to the higher probability of disagreement.

##### Exchange Economy

The experiment results show distinct performance differences across voting rules in Table [1](https://arxiv.org/html/2411.07161v2#S5.T1 "Table 1 ‣ 5 Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and Figure [3](https://arxiv.org/html/2411.07161v2#S5.F3 "Figure 3 ‣ Exchange Economy ‣ 5 Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").7 Preference voting rules achieve higher performance early in the collaboration process compared to discrete voting rules, indicating that nuanced evaluations better aggregate agent preferences. Discrete voting rules struggle with lower and less stable early performance due to greater disagreement, which impairs decision-making. Despite differing early trajectories, all voting rules reach high-quality outcomes by the end. In most cases, performance peaks in the middle rounds, suggesting that early stopping could be advantageous. Rationality scores show that agents often make suboptimal choices, but decentralized MAS still performs well overall. Preference voting rules allow more dynamic decision updates, while discrete voting rules exhibit greater rigidity, particularly with unanimous voting.

When comparing discrete voting rules, unanimous voting performs the worst due to its rigidity and requirement for total agreement, resulting in an 87% lower initial round performance and a 39% lower final round performance compared to the best-performing models. Moreover, fairness progressively declines from unanimous to plurality voting. These findings suggest that stricter voting thresholds, such as unanimity, enforce greater fairness among agents but lead to significantly worse outcomes.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/economics_new.png)


Figure 3: Voting rules comparison in exchange economy, using 3 agent, asymmetric, gpt-4o-mini setting. Line plots (left y-axis) show the group total utility achieved over rounds; bar plots (right y-axis) represent the ratio of cases where participants yet to reach an agreement until a certain round. The red horizontal line indicates the maximum achievable group total utility.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/recommendation_mae_new.png)


Figure 4: Comparison between voting rules in recommendation system environment. Line plots (left y-axis) show the comparison of MAE achieved over rounds; bar plots (right y-axis) represent the ratio of cases where participants yet to reach an agreement until a certain round. The green horizontal line is baseline (Always Guess 4), and the blue line is SoTA performance [Behera and Nain (2023)](https://arxiv.org/html/2411.07161v2#bib.bib3).

##### Recommendation System

We illustrate the performance of recommendation system in Figure [4](https://arxiv.org/html/2411.07161v2#S5.F4 "Figure 4 ‣ Exchange Economy ‣ 5 Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), [21](https://arxiv.org/html/2411.07161v2#A5.F21 "Figure 21 ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and Table [7](https://arxiv.org/html/2411.07161v2#A5.T7 "Table 7 ‣ E.2 Recommendation System ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). The results show that multi-agent collaboration achieves moderate performance with distributed information, with the decentralized MAS performing comparably to SoTA approaches. While the SoTA method was purely machine-learning-driven, the MAS approach showed reasonable outcomes, indicating that collaboration between agents can explore and produce meaningful signals that help to make decision.
Similar to the exchange economy, multiple results in the recommendation system follow a V-shaped curve. This suggests that while agent collaboration was efficient early on, it declined in later rounds, highlighting diminishing returns from repeated interactions. The trend underscores the need to balance sustained collaboration within MAS over time.

When comparing discrete to preference voting rules, we find that discrete voting rules generally worsened or plateaued after several rounds of collaboration. In contrast, preference voting rules show consistent improvement over time. This suggests that adaptive and flexible voting formats enhance collaboration by allowing for more nuanced input and iterative refinement across multiple rounds.

## 6 Cross-Agent Communication Analysis

##### Method

From the experiment results, we notice the performance degraded throughout the prolonged collaboration. To understand agent collaboration behaviors and communication, we perform a language analysis focused on three key features.8 Message Length: The length of the message. Message Complexity: The complexity of the message. Information Distance: The embedding distance between the conversations from current and previous round. Dialogue Acts: The actions performed in the conversation, annotated with LLM. We extracted features from each round of communication and analyzed the trend of changes across different rounds, voting rules, and environments.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/language_feature.png)


Figure 5: Line plots of average message length and information distance per round. Increasing message length and decreasing information distance indicate collaboration inefficiency in prolonged rounds.

##### Results

Table [8](https://arxiv.org/html/2411.07161v2#A5.T8 "Table 8 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and Figure [5](https://arxiv.org/html/2411.07161v2#S6.F5 "Figure 5 ‣ Method ‣ 6 Cross-Agent Communication Analysis ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") shows the averages of language features per round. There are two notable points: 1) Recommendation system is a harder environment than exchange economy, presented from overall higher message length and complexity. 2) Message length increases by 84% over time, while information distance steadily decreases to 10% in both environments. These phenomena indicate a convergence of topics and a decline in novel information as discussions progress, while the increasing message length adds additional cognitive and communication costs.

Dialogue acts annotation results are presented in Table [9](https://arxiv.org/html/2411.07161v2#A5.T9 "Table 9 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), and the transition graph between dialogue acts is in Figure [22(a)](https://arxiv.org/html/2411.07161v2#A5.F22.sf1 "In Figure 22 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), [22(b)](https://arxiv.org/html/2411.07161v2#A5.F22.sf2 "In Figure 22 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), [23](https://arxiv.org/html/2411.07161v2#A5.F23 "Figure 23 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and [24](https://arxiv.org/html/2411.07161v2#A5.F24 "Figure 24 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").9 In both environments, information exchange (Inform and Request) is the most frequent action, while direct disagreement (Defend and Decline) is very rare. Increasing usage of Confirm, Summarize and Compromise also indicates the progress of collaboration. Dialogue acts also show differences across environments. Exchange economy shows more Evaluate, Propose, and strong loop between Request and Propose, showing how agents collaborate when the relationship is competitive. Meanwhile, recommendation system shows minimal compromise and accept, which are unnecessary in cooperate relationship. Instead, it has intensive use of request, indicating the focus on data exploration.

## 7 Early Stopping in MAS

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | UNA. | MAJ. | PLU. | RAT. | RAN. | CUM. |
| RECOMMENDATION SYSTEM, in MAE($\downarrow$) | | | | | | |
| @10 (Baseline) | 0.88 | 0.86 | 0.84 | 0.79 | 0.84 | 0.76 |
| First Agreement | 0.82 | 0.80 | 0.81 | 0.82 | 0.89 | 0.82 |
| Consecutive Agreements | 0.84 | 0.81 | 0.84 | 0.77 | 0.82 | 0.77 |
| Validation Checkpoint | 0.81 | 0.81 | 0.82 | 0.80 | 0.83 | 0.82 |
| Information Distance | 0.86 | 0.78 | 0.85 | 0.79 | 0.78 | 0.81 |
| Dialogue Act | 0.84 | 0.82 | 0.79 | 0.76 | 0.85 | 0.82 |
| Oracle | 0.73 | 0.63 | 0.59 | 0.62 | 0.69 | 0.67 |

Table 2: Comparison between early stopping methods in recommendation system environment. The performance is compared with Oracle and baseline @10 in MAE. ($\downarrow$) indicates better performance with lower values. Experiments are based on the results of 3 agents, gpt-4o-mini setting. Results are based on 5-fold cross validation. We observe that language-based methods performed well overall.

##### Method

While enforced 10 rounds of collaboration to study agent behaviors, we observed signals of ineffective collaboration from task performance and language feature analysis. To enhance collaboration efficiency, we compare five early stopping methods: First Agreement, Consecutive Agreements, Validation Checkpoint, Information Distance, and Dialogue Act.10 We focus on the performance of Information Distance and Dialogue Act to examine whether language features help in identifying early stopping signals.

##### Results

We show comparison of early stopping methods in recommendation system in Table [2](https://arxiv.org/html/2411.07161v2#S7.T2 "Table 2 ‣ 7 Early Stopping in MAS ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), full results in Table [10](https://arxiv.org/html/2411.07161v2#A5.T10 "Table 10 ‣ E.4 Early Stopping ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), and their basic statistics are in Table [11](https://arxiv.org/html/2411.07161v2#A5.T11 "Table 11 ‣ E.4 Early Stopping ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

Almost all early stopping methods outperformed the non-stop baseline (@10), indicating effectiveness of early termination in improving outcomes. Notably, methods leveraging language features (Information Distance and Dialogue Act) delivered better performance across most of voting rules and environments, each closed 12% and 15% of the gap between the non-stop and oracle approaches with fewer rounds. These findings highlight the advantage of incorporating language-based metrics in deciding when to stop, especially in complex multi-agent environments. Their results across both the exchange economy and recommendation system environments further supports the claim that language indicators can be powerful tools for optimizing collaboration outcomes, reducing cognitive load, and improving decision efficiency.

## 8 Discussion

##### Impact of Voting Rules on Collaborative Behavior

This study demonstrates that voting rules, particularly their thresholds and formats, play a crucial role in multi-agent collaboration. Preference voting rules with a flexible format achieve higher performance and efficiency, especially in early rounds. In contrast, discrete voting rules struggle with rigidity, leading to lower initial performance. The strictness of voting thresholds, such as in unanimous voting, hampers collaboration due to its inability to accommodate dissent. Overall, preference voting rules, which allow for nuanced preference expression, facilitate dynamic exchanges and enhance decision quality, making a collaboration more effective for complex tasks.

Discrete voting rules also have unique advantages. First, the format of voting is simpler than preference voting rules, which led to fewer format errors during experiments from LLMs. Furthermore, unanimous voting showed the highest fairness and non-decreasing outcome over rounds when utility is quantifiable. These strengths suggest that voting rules in decentralized MAS should be thoughtfully chosen based on the specific task, or the primary metric being prioritized. Mixture of different methods in different stages of collaboration may also bring effectiveness, which we leave for future studies.

##### Language Indicators of Collaboration

Language analysis of agent conversations reveals several key indicators of effective collaboration. The length and complexity of messages increase progressively across rounds, suggesting that deeper engagement and richer exchanges occur as the collaboration advanced. This is particularly evident in the recommendation system environment, where tasks require greater information exchange and negotiation. Complex tasks inherently demand more intricate language, as agents need to convey not just factual information but also interpret, analyze, and synthesize inputs from others. A key takeaway is the decline in collaboration efficiency over time, indicated by increasing message length and decreasing information distance between adjacent rounds.

Dialogue acts provide another layer of insight into collaborative behavior. We discover that dialogue acts comprehensively reflects agents’ collaboration behaviors. When competitive relationship makes agents do more negotiation, cooperate relationship stimulate information exchange. This language pattern underscores that successful collaboration hinges on the flow of information, clarification, and ongoing evaluation of proposals. These indicators align with patterns seen in human collaboration, where information exchange and continuous feedback loops drive cooperative success.

##### Early Stopping

As a part of decision-making mechanism, early stopping is essential in multi-agent collaboration because it prevents diminishing returns and inefficiency in decision-making. Our experiments show that while the initial rounds of collaboration led to significant improvements in group utility and decision quality, continuing beyond a certain point often results in stagnant or even declining performance. This highlights the need for mechanisms that can intelligently terminate the collaboration process once optimal solutions have been reached, avoiding unnecessary iterations.

Key insights into effective early stopping methods emerge from analyzing conversational patterns. Information distance suggests that as the rounds progress, the novelty of information decreases, with fewer new ideas being introduced. Transition graphs of dialogue acts reveal common collaborative patterns. These signals lead to language feature-based stopping methods, which halt collaboration when no meaningful new information is detected, or when dialogue act patterns indicate the need for termination. Our findings demonstrate that implementing early stopping methods based on language cues can enhance the efficiency and effectiveness of decentralized multi-agent collaboration by preventing unnecessary prolonged discussions.

## 9 Conclusion

This paper investigates the role of group decision-making mechanisms in decentralized MAS, emphasizing how different voting rules shape collaboration dynamics and efficiency. Through controlled experiments on RoundTable, we analyze the impact of decision thresholds and formats on performance, finding that adaptive voting rules lead to more effective outcomes. Our analysis of agent communication patterns reveals increasing message length and repetition over time, indicating inefficiencies in prolonged collaboration. Building on these insights, we demonstrate that language-based early stopping improves performance while reducing unnecessary rounds. Our study provides insights into decision-making and cross-agent communication, offering valuable implications for improving multi-agent collaboration and efficiency.

## Limitations

##### Platform Design

In RoundTable, we fixed the phase order in our platform design to follow a structured sequence: message, propose, and voting. While this sequence represents a common collaboration flow, alternative action chains are possible, such as multi-round discussions before voting or iterative proposal refinements. However, we designed RoundTable to ensure that it captures the essential decision-making steps while maintaining clarity and reproducibility for experimental evaluation. By including both proposal and voting phases in each round, our design not only provides better transparency of agent intent but also allows researchers to collect granular collaboration data at multiple stages. This structured approach facilitates analysis of how agents form consensus and adapt strategies over time. Furthermore, repeating round-based collaboration will eventually enable agents to engage in multiple rounds of communication, proposing, and voting, giving them the chance to continue their discussion based on previous interactions. Although other collaboration models exist, we believe RoundTable represents a generalizable framework for studying the impact of decision-making mechanisms in decentralized MAS.

##### Environment Selection

We conducted our experiments in two distinct environments: exchange economy and recommendation system. These environments were chosen because they inherently involve a balance between competition and cooperation, making them well-suited for studying collaborative decision-making. In exchange economy, agents must negotiate and trade resources while optimizing individual and collective goals, capturing the tension between self-interest and group benefit. In contrast, recommendation system simulates a setting where agents collaborate to improve recommendations based on user preferences, emphasizing mutual benefit and shared optimization. While our study focuses on these two environments, they represent a broad spectrum of real-world multi-agent interactions, spanning both competitive resource allocation and collaborative preference aggregation scenarios. As such, our findings offer insights applicable to a wide range of collaborative decision-making contexts.

## References

- Arrow (2012)

  Kenneth J Arrow. 2012.
  *Social choice and individual values*, volume 12.
  Yale university press.
- Baujard et al. (2018)

  Antoinette Baujard, Frédéric Gavrel, Herrade Igersheim, Jean-François Laslier, and Isabelle Lebon. 2018.
  How voters use grade scales in evaluative voting.
  *European Journal of Political Economy*, 55:14–28.
- Behera and Nain (2023)

  Gopal Behera and Neeta Nain. 2023.
  Collaborative filtering with temporal features for movie recommendation system.
  *Procedia Computer Science*, 218:1366–1373.
- Bittner and Leimeister (2013)

  Eva Alice Christiane Bittner and Jan Marco Leimeister. 2013.
  Why shared understanding matters–engineering a collaboration process for shared understanding to improve collaboration effectiveness in heterogeneous teams.
  In *2013 46th Hawaii international conference on system sciences*, pages 106–114. IEEE.
- Black (1958)

  Duncan Black. 1958.
  The theory of committees and elections.
  *Cambridge UP*.
- Chan et al. (2023)

  Chi-Min Chan, Weize Chen, Yusheng Su, Jianxuan Yu, Wei Xue, Shanghang Zhang, Jie Fu, and Zhiyuan Liu. 2023.
  Chateval: Towards better llm-based evaluators through multi-agent debate.
  *arXiv preprint arXiv:2308.07201*.
- Chen et al. (2023)

  Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang, Chenfei Yuan, Chen Qian, Chi-Min Chan, Yujia Qin, Yaxi Lu, Ruobing Xie, et al. 2023.
  Agentverse: Facilitating multi-agent collaboration and exploring emergent behaviors in agents.
  *arXiv preprint arXiv:2308.10848*.
- Cobb and Douglas (1928)

  Charles W Cobb and Paul H Douglas. 1928.
  A theory of production.
  *American Economic Review*.
- De Man and Duysters (2005)

  Ard-Pieter De Man and Geert Duysters. 2005.
  Collaboration and innovation: a review of the effects of mergers, acquisitions and alliances on innovation.
  *Technovation*, 25(12):1377–1387.
- Dong et al. (2023)

  Yihong Dong, Xue Jiang, Zhi Jin, and Ge Li. 2023.
  Self-collaboration code generation via chatgpt.
  *arXiv preprint arXiv:2304.07590*.
- Du et al. (2023)

  Yilun Du, Shuang Li, Antonio Torralba, Joshua B Tenenbaum, and Igor Mordatch. 2023.
  Improving factuality and reasoning in language models through multiagent debate.
  *arXiv preprint arXiv:2305.14325*.
- Dubey et al. (2024)

  Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey, Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman, Akhil Mathur, Alan Schelten, Amy Yang, Angela Fan, et al. 2024.
  The llama 3 herd of models.
  *arXiv preprint arXiv:2407.21783*.
- Endriss (2008)

  Ulle Endriss. 2008.
  Computational social choice.
  *The Reasoner*, 2:9–10.
- Graesser et al. (2018)

  Arthur C Graesser, Stephen M Fiore, Samuel Greiff, Jessica Andrews-Todd, Peter W Foltz, and Friedrich W Hesse. 2018.
  Advancing the science of collaborative problem solving.
  *Psychological science in the public interest*, 19(2):59–92.
- Guo et al. (2024)

  T Guo, X Chen, Y Wang, R Chang, S Pei, NV Chawla, O Wiest, and X Zhang. 2024.
  [Large language model based multi-agents: A survey of progress and challenges.](https://par.nsf.gov/biblio/10508149)
  *33rd International Joint Conference on Artificial Intelligence (IJCAI 2024)*.
- Han et al. (2024)

  Shanshan Han, Qifan Zhang, Yuhang Yao, Weizhao Jin, Zhaozhuo Xu, and Chaoyang He. 2024.
  Llm multi-agent systems: Challenges and open problems.
  *arXiv preprint arXiv:2402.03578*.
- Harper and Konstan (2015)

  F Maxwell Harper and Joseph A Konstan. 2015.
  The movielens datasets: History and context.
  *Acm transactions on interactive intelligent systems (tiis)*, 5(4):1–19.
- Hong et al. (2023)

  Sirui Hong, Xiawu Zheng, Jonathan Chen, Yuheng Cheng, Jinlin Wang, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, et al. 2023.
  Metagpt: Meta programming for multi-agent collaborative framework.
  *arXiv preprint arXiv:2308.00352*.
- Jennings et al. (2001)

  Nicholas R Jennings, Peyman Faratin, Alessio R Lomuscio, Simon Parsons, Carles Sierra, and Michael Wooldridge. 2001.
  Automated negotiation: prospects, methods and challenges.
  *International Journal of Group Decision and Negotiation*, 10(2):199–215.
- Jiang and Lu (2019)

  Jiechuan Jiang and Zongqing Lu. 2019.
  Learning fairness in multi-agent systems.
  *Advances in Neural Information Processing Systems*, 32.
- Klare (1974)

  George R Klare. 1974.
  Assessing readability.
  *Reading research quarterly*, pages 62–102.
- Kraus (2001)

  Sarit Kraus. 2001.
  *Strategic negotiation in multiagent environments*.
  MIT press.
- Kuhn et al. (2023)

  Lorenz Kuhn, Yarin Gal, and Sebastian Farquhar. 2023.
  [Semantic uncertainty: Linguistic invariances for uncertainty estimation in natural language generation](https://openreview.net/forum?id=VD-AYtP0dve).
  In *The Eleventh International Conference on Learning Representations*.
- Li et al. (2023)

  Yang Li, Yangyang Yu, Haohang Li, Zhi Chen, and Khaldoun Khashanah. 2023.
  Tradinggpt: Multi-agent system with layered memory and distinct characters for enhanced financial trading performance.
  *arXiv preprint arXiv:2309.03736*.
- Li et al. (2022)

  Yujia Li, David Choi, Junyoung Chung, Nate Kushman, Julian Schrittwieser, Rémi Leblond, Tom Eccles, James Keeling, Felix Gimeno, Agustin Dal Lago, et al. 2022.
  Competition-level code generation with alphacode.
  *Science*, 378(6624):1092–1097.
- Liang et al. (2023)

  Tian Liang, Zhiwei He, Wenxiang Jiao, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Shuming Shi, and Zhaopeng Tu. 2023.
  Encouraging divergent thinking in large language models through multi-agent debate.
  *arXiv preprint arXiv:2305.19118*.
- Liu et al. (2024)

  Nelson F Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang. 2024.
  Lost in the middle: How language models use long contexts.
  *Transactions of the Association for Computational Linguistics*, 12:157–173.
- Lyu et al. (2023)

  Qing Lyu, Shreya Havaldar, Adam Stein, Li Zhang, Delip Rao, Eric Wong, Marianna Apidianaki, and Chris Callison-Burch. 2023.
  Faithful chain-of-thought reasoning.
  *arXiv preprint arXiv:2301.13379*.
- Mandi et al. (2024)

  Zhao Mandi, Shreeya Jain, and Shuran Song. 2024.
  Roco: Dialectic multi-robot collaboration with large language models.
  In *2024 IEEE International Conference on Robotics and Automation (ICRA)*, pages 286–299. IEEE.
- OpenAI (2023)

  OpenAI. 2023.
  [Gpt-4o-mini: Advancing cost-efficient intelligence](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/).
  Accessed: 2024-08-18.
- Owens et al. (2024)

  Deonna M Owens, Ryan A Rossi, Sungchul Kim, Tong Yu, Franck Dernoncourt, Xiang Chen, Ruiyi Zhang, Jiuxiang Gu, Hanieh Deilamsalehy, and Nedim Lipka. 2024.
  A multi-llm debiasing framework.
  *arXiv preprint arXiv:2409.13884*.
- Park et al. (2023)

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein. 2023.
  Generative agents: Interactive simulacra of human behavior.
  In *Proceedings of the 36th annual acm symposium on user interface software and technology*, pages 1–22.
- Qian et al. (2023)

  Chen Qian, Xin Cong, Cheng Yang, Weize Chen, Yusheng Su, Juyuan Xu, Zhiyuan Liu, and Maosong Sun. 2023.
  Communicative agents for software development.
  *arXiv preprint arXiv:2307.07924*, 6.
- Reimers and Gurevych (2019)

  Nils Reimers and Iryna Gurevych. 2019.
  [Sentence-bert: Sentence embeddings using siamese bert-networks](http://arxiv.org/abs/1908.10084).
  In *Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing*. Association for Computational Linguistics.
- Riker (1988)

  William H Riker. 1988.
  *Liberalism against populism: A confrontation between the theory of democracy and the theory of social choice*.
  Waveland press.
- Tang et al. (2023)

  Xiangru Tang, Anni Zou, Zhuosheng Zhang, Ziming Li, Yilun Zhao, Xingyao Zhang, Arman Cohan, and Mark Gerstein. 2023.
  Medagents: Large language models as collaborators for zero-shot medical reasoning.
  *arXiv preprint arXiv:2311.10537*.
- Varian (1992)

  Hal R Varian. 1992.
  Microeconomic analysis.
- Wu et al. (2023)

  Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang, Xiaoyun Zhang, and Chi Wang. 2023.
  Autogen: Enabling next-gen llm applications via multi-agent conversation framework.
  *arXiv preprint arXiv:2308.08155*.
- Xu et al. (2023)

  Yuzhuang Xu, Shuo Wang, Peng Li, Fuwen Luo, Xiaolong Wang, Weidong Liu, and Yang Liu. 2023.
  Exploring large language models for communication games: An empirical study on werewolf.
  *arXiv preprint arXiv:2309.04658*.
- Zhang et al. (2023)

  Hongxin Zhang, Weihua Du, Jiaming Shan, Qinhong Zhou, Yilun Du, Joshua B Tenenbaum, Tianmin Shu, and Chuang Gan. 2023.
  Building cooperative embodied agents modularly with large language models.
  *arXiv preprint arXiv:2307.02485*.

## Appendix A Details on the Background of Decentralized MAS

Agents powered by LLMs have demonstrated impressive problem-solving capabilities across a wide range of tasks. However, single-agent systems struggle with problems that are too large or complex, often leading to instability, misalignment with the intended request, and hallucination ([Liu et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib27); [Kuhn et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib23); [Lyu et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib28)). To overcome these limitations, research has increasingly turned to Multi-Agent Systems (MAS). MAS leverage collective intelligence by enabling agents to specialize in distinct skills and collaborate effectively ([Guo et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib15)).

In MAS, agents often hold differing perspectives due to variations in persona roles, information access, and individual goals, making group decision-making inherently complex. Many LLM-driven MAS rely on centralized decision-making, where a manager agent or predefined power hierarchy resolves conflicts ([Hong et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib18); [Qian et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib33); [Dong et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib10)). However, centralization introduces several challenges: 1) fairness: Individual agent inputs may be misrepresented in the final decision ([Jiang and Lu, 2019](https://arxiv.org/html/2411.07161v2#bib.bib20); [Owens et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib31)); 2) rigidity: Fixed hierarchical structures limit adaptability, making systems prone to overfitting ([Chen et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib7)); 3) information constraints: A central authority cannot always dictate optimal strategies when agents possess private or partial information ([Xu et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib39)).

Decentralized group decision-making mitigates the limitations of centralized MAS by distributing decision power among agents, allowing each to actively participate in the process. This approach is particularly critical in dynamic and complex environments, where agents must operate independently with information asymmetry ([Mandi et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib29); [Zhang et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib40); [Xu et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib39); [Park et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib32)). By removing reliance on a central authority, decentralized MAS enable greater adaptability and resilience. However, in the absence of a fixed decision-maker, agents must establish structured yet flexible coordination strategies to achieve coherent and effective group decisions. Identifying mechanisms that facilitate meaningful agreement in such systems remains a key challenge.

## Appendix B Details of RoundTable

### B.1 RoundTable Platform Design

In this section, we explain the details of the design in RoundTable by breaking it down to phases.

Input and Initialization defines each agent for collaboration. Each agent will be given a specific $\Omega\_{i}$ and $u\_{i}$, which include the same input user query, information of RoundTable, and the voting rule $F$.
However, they may have different background, information access, or utility function. While $\Omega\_{i}$ and $u\_{i}$ can be defined automatically by agent recruiting or profiling ([Chen et al., 2023](https://arxiv.org/html/2411.07161v2#bib.bib7)), we manually define them for simplicity.

Message Phase is the initial stage of the iterative collaboration process, where all agents participate in a simultaneous, open chat conversation. During this phase, agents can freely choose recipients based on their context to send messages. They can respond to others’ questions, share insights, or ask their own questions. There are no restrictions on whom to communicate with or what to say. Once generated, all messages are updated to $\Omega\_{i}$ for everyone, regardless of the original sender or intended recipients. This process guarantees that all messages are sent simultaneously, makes it has no specific order of communication. Since only one message can be sent per iteration, back-and-forth conversations can take place across multiple rounds.

Proposal Phase allows agents to present a proposal $p\_{i}$, offering a potential solution or response to the user query from their perspective, aiming to fulfil their individual objective or maximize the utility. Before generating a proposal, agents will be asked to do a step by step reasoning, which is by default invisible to other agents. Reasoning is designed to give agents a chance to summarize and analyze information in $\Omega\_{i}$. The most recent proposal from each agent will be considered as a candidate for voting in the next phase. Like the Message Phase, proposals are made simultaneously and will be updated for $\Omega\_{i}$ once everyone has generated a response. Agents also have the option to skip submitting a new proposal; in such cases, their previous proposal will automatically be included among the candidates.

Voting Phase collects one latest proposal $p\_{i}$ from each agent, additionally include the latest intermediate group decision $x^{\*}$ from previous rounds to form a candidate proposal list. Agents in this round are asked to express preferences toward candidates. The preferences can be in various formats, including voting, rating and ranking, depends on what types of voting rule $F$ is used. Similar with the proposal phase, agents have option to not vote (give up). With all the collected proposals and preferences, voting rule selects one proposal as the intermediate group decision. Finally, voting details and the result are updated to all agents’ context $\Omega\_{i}$.

Output The iteration will run for 10 rounds. After the 10th round, the latest intermediate group decision will be selected as the final output.

### B.2 RoundTable Prompt Design

We present the prompt design for RoundTable in this section, which consists of initialization stage (Figure [6](https://arxiv.org/html/2411.07161v2#A2.F6 "Figure 6 ‣ B.2 RoundTable Prompt Design ‣ Appendix B Details of RoundTable ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), message phase (Figure [7](https://arxiv.org/html/2411.07161v2#A2.F7 "Figure 7 ‣ B.2 RoundTable Prompt Design ‣ Appendix B Details of RoundTable ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), proposal phase (Figure [8](https://arxiv.org/html/2411.07161v2#A2.F8 "Figure 8 ‣ B.2 RoundTable Prompt Design ‣ Appendix B Details of RoundTable ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), and voting phase (Figure [9](https://arxiv.org/html/2411.07161v2#A2.F9 "Figure 9 ‣ B.2 RoundTable Prompt Design ‣ Appendix B Details of RoundTable ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")). Italicized words represent inputs or variables within the prompt.

Initialization Prompt

# Agent Initialization
  
You are my\_name, an agent in a recurring collaboration environment designed to address and solve complex problems.
  
# Task Description
  
task\_description
  
# Collaboration Rules
  
You start with nothing decided. The intermediate result will be decided by the voting rule at the end of each round.
  
In each round, the collaboration runs in 3 phases with the following order:
  
1. Message Phase: At the beginning of each round, you can send one message to a shared channel for either Talking to one or more agents. All agents will send messages simultaneously. You will be able to see all messages from all agents after the end of the message phase.
  
2. Proposal Phase: After the end of the message phase, you will have the opportunity to propose potential solution. If you don’t propose in this phase, your latest proposal will be used for voting.
  
3. Voting Phase: At the end of the round, all agents’ latest proposal will be voted. When agents didn’t propose in this round, their latest proposal will be used for voting. All votes will be processed with the voting rule: name\_of\_voting\_rule, where explanation\_of\_voting\_rule. If the voting rule selects a proposal, the intermediate result will be updated accordingly.
After each round, each agent will be able to see the result of the vote from the previous round and the conversation history from all rounds.
  
The collaboration will run for max\_rounds rounds. After the last round, the latest result will be the final result.
  
# Your Background
  
my\_agent\_backround
  
# Game History
  
## Latest Candidates at Round latest\_candidates\_round:
  
latest\_candidates
  
## Latest Voting Result at Round vote\_history\_length:
  
latest\_vote\_history
  
## Latest Approved Proposal:
  
Proposal latest\_approved\_proposal\_id from Round latest\_approved\_proposal\_round.
  
Proposal latest\_approved\_proposal\_id Detail:
  
latest\_approved\_proposal\_detail
  
## Conversation History until Round conversation\_history\_length:
  
conversation\_history


Figure 6: Prompt used for initialization stage in RoundTable. Italicized words represent inputs or variables within the prompt.


Message Phase Prompt

You are my\_name, currently in the message phase of round round\_num. In this phase, you can:
  
1. Answer questions posed by others.
  
2. Share your findings or insights.
  
3. Ask questions to further the discussion.
  
You may engage in multiple activities using multiple sentences.
  
Please type your message in the following JSON format: {“target": <list of agent names>, “message": <str, your message>}
  
Don’t generate anything except the JSON format.


Figure 7: Prompt used for message phase in RoundTable. Italicized words represent inputs or variables within the prompt.


Proposal Phase Prompt

You are my\_name, currently in the proposal phase of round round\_num. You have an opportunity to make a proposal of the potential solution. Whether or not you submit a new proposal, your latest proposal will be considered as a candidate proposal for the voting phase.
  
You have two options:
  
1. Make a proposal:
  
- You can propose a potential solution by the provided format.
  
2. Do not make a proposal:
  
- If you do not want to propose a solution, you can return None as your proposal.
  
Please type your proposal in the following JSON format: {“reason\_for\_decision": <your step by step reasoning for your decision>, “proposal": proposal\_format\_text, or None}
  
Don’t generate anything except the JSON format.
  


Figure 8: Prompt used for proposal phase in RoundTable. Italicized words represent inputs or variables within the prompt.


Voting Phase Prompt (for Discrete Voting Rules)

You are my\_name, at the voting phase at round round\_num.
  
In this phase, all agents’ latest proposal will be voted by name\_of\_social\_choice, where explanation\_of\_social\_choice. If the voting rule selects a proposal, the intermediate result will be updated accordingly.
  
You have two actions to choose: vote or not vote.
  
1. For vote:
  
- You can only vote for one of the proposals from the candidate list.
  
2. For not vote:
  
- You should vote None.
  
- If you do not want to vote for any of the proposals, you can vote None.
  
- If there is no proposal, you vote None.
  
The same proposal proposed by multiple agents will be merged as one proposal.
  
If there are multiple proposals passed, none of the proposals will be selected.
  
If no proposals are passed, the current intermediate result will be kept.
  
The current candidate proposals are as follows:
  
proposal\_list
  
What is your vote? Please answer in the following JSON format: {“reason\_for\_decision": <your step by step reasoning for your decision>, “decision": <id of the proposal from the candidates you want to vote, or None>}
  
Don’t generate anything except the JSON format.


Figure 9: Prompt used for voting phase in RoundTable. Italicized words represent inputs or variables within the prompt.

## Appendix C Details of Voting Rules

We present the definition and the prompt we use to define different voting rules, including unanimous voting (Figure [10](https://arxiv.org/html/2411.07161v2#A3.F10 "Figure 10 ‣ Appendix C Details of Voting Rules ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), majority voting (Figure [11](https://arxiv.org/html/2411.07161v2#A3.F11 "Figure 11 ‣ Appendix C Details of Voting Rules ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), plurality voting (Figure [12](https://arxiv.org/html/2411.07161v2#A3.F12 "Figure 12 ‣ Appendix C Details of Voting Rules ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), rated voting (Figure [13](https://arxiv.org/html/2411.07161v2#A3.F13 "Figure 13 ‣ Appendix C Details of Voting Rules ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), ranked voting (Figure [14](https://arxiv.org/html/2411.07161v2#A3.F14 "Figure 14 ‣ Appendix C Details of Voting Rules ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")), and cumulative voting (Figure [15](https://arxiv.org/html/2411.07161v2#A3.F15 "Figure 15 ‣ Appendix C Details of Voting Rules ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration")). The formal definition of voting rules are as below:
  
Unanimous Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): The proposal $x^{\*}\_{r}$ that receives votes from all agents is selected:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=\arg\max\_{c\in C}\mathbbm{1}\left(\sum\_{i\in\mathcal{I}}v\_{i,c,r}=|\mathcal{I}|\right)$$ |  |

Majority Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): The candidate $c$ that receives votes from more than half of all agents is selected:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=\arg\max\_{c\in C}\mathbbm{1}\left(\sum\_{i\in\mathcal{I}}v\_{i,c,r}>\frac{|\mathcal{I}|}{2}\right)$$ |  |

Plurality Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): The candidate $c$ that receives the most votes is selected:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=\arg\max\_{c\in C}\sum\_{i\in\mathcal{I}}v\_{i,c,r}$$ |  |

Rated Voting ([Baujard et al., 2018](https://arxiv.org/html/2411.07161v2#bib.bib2)): Each agent rates proposals on a 5-point scale, and the candidate $c$ with the highest total score is selected:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=\arg\max\_{c\in C}\sum\_{i\in\mathcal{I}}s\_{i,c,r},\quad s\_{i,c,r}\in\{1,2,3,4,5\}$$ |  |

Ranked Voting ([Arrow, 2012](https://arxiv.org/html/2411.07161v2#bib.bib1)): Agents rank proposals by preference, assigning points as $1,1/2,1/3,$ etc., and the candidate $c$ with the highest total score is selected:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=\arg\max\_{c\in C}\sum\_{i\in\mathcal{I}}\frac{1}{rank\_{i,c,r}}$$ |  |

where $rank\_{i,c,r}$ is the rank of proposal $c$ given by agent $i$ (lower rank values indicate higher preference).

Cumulative Voting ([Black, 1958](https://arxiv.org/html/2411.07161v2#bib.bib5)): Each agent distributes $|\mathcal{I}|$ points among $|\mathcal{I}|$ proposals, and the candidate $c$ with the highest total is selected:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{x^{\*}}\_{r}=\arg\max\_{c\in C}\sum\_{i\in\mathcal{I}}pt\_{i,c,r}$$ |  |

where $pt\_{i,c,r}$ represents the number of points agent $i$ assigns to proposal $c$ such that:

|  |  |  |
| --- | --- | --- |
|  | $$\sum\_{c\in C}p\_{i,c,r}=|\mathcal{I}|$$ |  |

Unanimous Voting Description

The proposal that receives votes from all agents will be selected. If no proposal receives votes from all agents, no proposal will be selected.


Figure 10: Prompt used for describing unanimous voting in RoundTable.


Majority Voting Description

The proposal that receives votes from more than half of all agents will be selected. If no proposal meets this condition, none will be selected.


Figure 11: Prompt used for describing majority voting in RoundTable.


Plurality Voting Description

The proposal that receives the most votes will be selected.


Figure 12: Prompt used for describing plurality voting in RoundTable.


Rated Voting Description

Each agent assigns ratings on a 5-point Likert scale to all candidate proposals, with 1 being the lowest and 5 being the highest. The proposal with the highest total score will be selected.


Figure 13: Prompt used for describing rated voting in RoundTable.


Ranked Voting Description

Each agent ranks all candidate proposals from the most preferred to the least preferred. 1, 1/2, 1/3… points will be assigned to the 1st, 2nd, 3rd… candidates on each ballot. The proposal with the highest total points will be selected.


Figure 14: Prompt used for describing ranked voting in RoundTable.


Cumulative Voting Description

For X candidate proposals, each agent is given X points to distribute among the proposals as they see fit. The proposal with the highest total points will be selected.


Figure 15: Prompt used for describing cumulative voting in RoundTable.

## Appendix D Details of Experiments

### D.1 Exchange Economy

Exchange economy environment has multiple unique advantages. First, it is a plus-sum game. Economically, agents seek an equilibrium until no one can improve their utility without reducing others’, implying the possibility of further collaboration exists if the allocation is not at equilibrium. Second, there are multiple possible equilibria exist in the market, allowing dynamic collaboration direction. Third, equilibria are not equal to reaching maximum total utility $U\_{max}$, but $U\_{max}$ must be lying in one of the equilibria. This can help us to measure if conflicts between agents harmful for the group to reach an ultimate goal.

The task description we use is presented in Figure [16](https://arxiv.org/html/2411.07161v2#A4.F16 "Figure 16 ‣ D.1 Exchange Economy ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). Prompt for agent’s objective is shown in Figure [17](https://arxiv.org/html/2411.07161v2#A4.F17 "Figure 17 ‣ D.1 Exchange Economy ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

Exchange Economy Task Description

You will collaborate with other agents in a recurring exchange market game.
  
There are num\_of\_agents agents in this market: list\_of\_agents.
  
There are num\_of\_goods goods in the market: list\_of\_goods. Total quantity of each good is as follows: total\_num\_of\_goods.
  
In this game, you will collaboratively decide how to distribute the goods among the agents. Your goal is to maximize your own utility function.


Figure 16: Prompt used for describing the task in exchange economy environment in RoundTable. Italicized words represent inputs or variables within the prompt.


Exchange Economy Agent Objective

Your goal is to maximize your individual utility function by communicating, proposing, and voting with other agents. Your utility function is util\_func


Figure 17: Prompt used for describing an agent’s objective in exchange economy environment in RoundTable. Italicized words represent inputs or variables within the prompt.

### D.2 Exchange Economy: Other Utility Sets

We use the asymmetric scenario for the main result due to its similarity to real-world applications, here are other utility sets we examined.

Symmetric is the case where all agents prefer the same good, mirroring the scenario where agents collaborate with a common goal. The following utility function is applied to each agent: $u\_{i}=a\_{1}^{0.8}\prod\_{k\neq 1}a\_{k}^{\tilde{\theta}},\tilde{\theta}=\frac{1-0.8}{|I|}$

Uniform is the case where all agents indifferently prefers all goods, using the utility function: $u\_{i}=\prod a\_{k}^{\tilde{\theta}},\tilde{\theta}=\frac{1}{|I|}$

We find these two sets of utility functions are not ideal for evaluating multi-agent collaboration. Since all the agents has the same utility function, the oracle allocation among agents to reach maximized group total utility is very close to even split. However, even split is the most frequent proposal from agents while they have no information for other agents’ preferences, making most of the result almost perfect. This phenomenon is observed across all LLMs we’ve tested.

### D.3 Recommendation System

Recommendation system aims to reveal unique collaborative behaviors that exchange economic does not have. First, there exists strong information asymmetry between agents. Any piece of information is not sufficient to correctly predict the rating. Secondly, the group decision-making in these systems encourages diverse approaches to problem-solving. Agents are not only consumers of information but also contributors, creating a feedback loop where the quality of recommendations improves with increased participation and collaboration. Lastly, the value generated in such a system is not solely based on the final recommendation but also on the process of reaching that recommendation. The interactions, negotiations, and information exchanges that occur along the way contribute to the overall effectiveness and satisfaction of the system. We show the description of the environment in Figure [18](https://arxiv.org/html/2411.07161v2#A4.F18 "Figure 18 ‣ D.3 Recommendation System ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). In the recommendation system enviroment, all agents share the same objective, but has different background dataset. The prompt used for an agent’s objective is in Figure [19](https://arxiv.org/html/2411.07161v2#A4.F19 "Figure 19 ‣ D.3 Recommendation System ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

Recommendation System Task Description

You will collaborate with other agents in a movie recommendation game.
  
In this game, you will collaboratively predict the rating of a target movie (target\_movie\_title) for a target user.
  
There are 3 agents in this game: BasicInfo Agent, MovieHistory Agent, UserHistory Agent.
  
1. BasicInfo Agent has access to the basic information of the target movie and target user. It has access to the data with the following schema:
  
get\_schema(movie\_info)
  
get\_schema(user\_info)
  
2. MovieHistory Agent has access to the rating history of the target movie from other people. It has access to the data with the following schema:
  
get\_schema(movie\_rating\_history)
  
3. UserHistory Agent has access to the rating history of the target user to other movies. It has access to the data with the following schema:
  
get\_schema(user\_rating\_history)
  
You can’t see other agents’ information directly, but you can get information from other agents through communication.
Your goal is to predict the rating a target user would give to target\_movie\_title. Utilize all available information about both the user and the movie to make the most accurate prediction possible. You only have access to partial information, but you can communicate with other agents to get more information.


Figure 18: Prompt used for describing the task in recommendation environment in RoundTable. Italicized words represent inputs or variables within the prompt.


Recommendation System Agent Objective

Your goal is to predict the rating the target user would give to the target movie. Utilize all available information about both the user and the movie to make the most accurate prediction possible. You only have access to data\_access, but you can communicate with other agents to get more information.
  
# Your Data:
  
agent\_dataset


Figure 19: Prompt used for describing an agent’s objective in recommendation environment in RoundTable. Italicized words represent inputs or variables within the prompt.

To ease the complexity of the data structure, we pre-processed the data into three parts: basicInfo, which contains the basic details of the target user and movie; userHistory, which includes the target user’s ratings and basic information for other movies; and movieHistory, which organizes all ratings from other users for the target movie, ranked by a preference similarity score calculated using non-negative matrix factorization on the co-occurrence rating table between users and movies. In our experiment, each part of the dataset is assigned to a different agent, forming a 3-agent collaboration system. Examples of three datasets are in Table [3](https://arxiv.org/html/2411.07161v2#A4.T3 "Table 3 ‣ D.3 Recommendation System ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), [4](https://arxiv.org/html/2411.07161v2#A4.T4 "Table 4 ‣ D.3 Recommendation System ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and [5](https://arxiv.org/html/2411.07161v2#A4.T5 "Table 5 ‣ D.3 Recommendation System ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

| movie\_id | movie\_title | release\_date | genre |
| --- | --- | --- | --- |
| 231 | Batman Returns | 19920101 | [’Action’, ’Adventure’, ’Comedy’, ’Crime’] |

| user\_id | age | gender | occupation | state |
| --- | --- | --- | --- | --- |
| 7 | 29 | F | artist | NY |

Table 3: Example of basicInfo dataset, which includes basic information about the target user and target movie to predict.


|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| movie\_id | movie\_title | genre | release\_date | rating | rated\_date |
| 1 | Toy Story | [’Animation’, "Children’s", ’Comedy’] | 19950101 | 3 | 19980331 |
| 14 | Postino, Il | [’Drama’, ’Romance’] | 19940101 | 3 | 19980331 |
| 24 | Rumble in the Bronx | [’Action’, ’Adventure’, ’Crime’] | 19960223 | 3 | 19980331 |
| 50 | Star Wars | [’Action’, ’Adventure’, ’Romance’, ’Sci-Fi’, ’War’] | 19770101 | 4 | 19980331 |
| 109 | Mystery Science Theater 3000: The Movie | [’Comedy’, ’Sci-Fi’] | 19960419 | 3 | 19980331 |
| … | | | | | |

Table 4: Example of userHistory dataset, which includes rating history from the target user to other movies. Here only shows 5 rows for spacing.


|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| user\_id | user\_pref\_similarity | personal\_average\_score | age | gender | occupation | state | rated\_date | rating |
| 343 | 0.98 | 3.99 | 43 | M | engineer | GA | 19971009 | 5 |
| 806 | 0.98 | 3.64 | 27 | M | marketing | NY | 19971217 | 3 |
| 773 | 0.98 | 3.28 | 20 | M | student | MN | 19980227 | 2 |
| 805 | 0.98 | 3.35 | 27 | F | other | DC | 19971209 | 3 |
| 447 | 0.97 | 3.57 | 30 | M | administrator | MN | 19971106 | 2 |
| … | | | | | | | | |

Table 5: Example of movieHistory dataset, which includes rating history of the target movie from other users. Here only shows 5 rows for spacing.

### D.4 Language Features

To understand agent collaboration and analyze their messages, we perform a language analysis focused on four key features. All observations are collected in 3 agents, gpt-4o-mini setting.

Message Length is a basic yet significant metric, reflecting the amount of information an agent conveys. We measure it using word count, as longer messages generally enrich the conversation.

Message Complexity assesses how difficult a message is to understand, indicating the depth of the conversation. We use the Flesch-Kincaid grade level to calculate complexity, with higher scores representing more intricate messages ([Klare, 1974](https://arxiv.org/html/2411.07161v2#bib.bib21)).

Information Distance measures how much new information is introduced. Effective collaboration should consistently bring new insights, while low information gain signals a stalled conversation. It is calculated as the average cosine distance between messages in the current round and the center embedding of the previous round.

Dialogue Acts are communicative functions that capture actions, intents, and behaviors within messages as discrete states. We design a set of dialogue acts for multi-agent collaboration: Inform, Request, Confirm, Summarize, Evaluate, Propose, Compromise, Defend, Accept, Decline, and use LLM-labeling to perform multi-label classification on a target message based on the previous round. Details of the dialogue act labels and prompt can be found in Appendix [D.5](https://arxiv.org/html/2411.07161v2#A4.SS5 "D.5 Dialogue Act Labeling ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

### D.5 Dialogue Act Labeling

We present the definition of each dialogue act we use in the experiments. The definitions are also used in LLM prompt for automatic annotation.

Conversation Acts (Informational):

- •

  Inform - Shares new information that wasn’t previously known.
- •

  Request - Asks for information that the speaker doesn’t have.
- •

  Confirm - Asks to verify or validate shared information.
- •

  Summarize - Provides a brief overview of the main points.
- •

  Evaluate - Gives an opinion or judgment about the information.

Collaboration Acts (Decision-Making):

- •

  Propose - Introduce a new solution in the discussion.
- •

  Compromise - Offers a balanced solution that incorporates parts of different parties’ preferences.
- •

  Defend - Maintain support for an idea or solution after consideration or challenge.
- •

  Accept - Agrees to or accept an idea or solution.
- •

  Decline - Refuses or disagrees with an idea or solution.

### D.6 Dialogue Act Transition Graph

We constructed transition graphs to visualize the dynamics of dialogue act transitions across rounds, highlighting the most frequent transitions. Each node represents a dialogue act, and directed edges indicate the probability of transitions between acts from one round to the next. The figure displays only the most probable edge per node, excluding self-loops.

Here, we formally define dialogue act transition graph. Two nodes and the directed edge between them consist with a pair of dialogue acts and its transition probability. We denote a pair of dialogue acts as $A\rightarrow B$, where $A$ is a dialogue act observed from an agent’s message in round $r-1$, and $B$ is the one from other speakers in round $r$. The transition probability, $p\_{A\rightarrow B}$, is the probability of the existence of $A\rightarrow B$ among all observed $A$s To be more specific, a directed edge between dialogue act $A$ and $B$ is calculated by the following equation:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $p\_{A\rightarrow B}=\frac{|A\rightarrow B|}{|A|}=\frac{\sum\_{s}\sum\_{r=1}^{10}|\{(i,\neg i)|i\in\mathcal{I},A\in\mathcal{D}\_{i,r-1},B\in\mathcal{D}\_{\neg i,r}\}|}{\sum\_{s}\sum\_{r=1}^{10}|\{i|i\in\mathcal{I},A\in\mathcal{D}\_{i,r-1}\}|}$ |  | (1) |

Where $s$ is the index of a collaboration, $\mathcal{D}\_{i,r}$ is a set of dialogue acts from the message of the agent $i$ at round $r$, and $\mathcal{D}\_{r=0}=\{Start\},\mathcal{D}\_{r=11}=\{End\}$.

### D.7 Early Stopping in MAS

This section explains the detailed definitions of early stopping methods. In this experiment, we evaluate the following early stopping methods:

@10 is our baseline, the final performance after 10 rounds without early stopping.

First Agreement stops collaboration whenever a proposal passes the voting threshold.

Consecutive Agreements is when no one make additional proposal after a proposal has been accepted in the previous round.

Validation Checkpoint is the average number of rounds that produced the best outcomes in the train set, used as an early stopping criterion for all test sets.

Information Distance is the average embedding distance for messages between adjacent rounds captured at the round that produced the best outcomes in the train set, and stops collaborations in the test set when the distance became lower than the threshold. This idea is supported by the observation in Section [5](https://arxiv.org/html/2411.07161v2#S6.F5 "Figure 5 ‣ Method ‣ 6 Cross-Agent Communication Analysis ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

Dialogue Act method utilizes pairs of dialogue acts, linking one from the previous round to another from the current round. We perform ordinary least squares (OLS) regression on all such pairs in relation to the performance. The regression coefficients indicate the most impactful pairs that act as stop signals. Further details of the algorithm are provided in Appendix [D.7.1](https://arxiv.org/html/2411.07161v2#A4.SS7.SSS1 "D.7.1 Dialogue Act Early Stopping Method ‣ D.7 Early Stopping in MAS ‣ Appendix D Details of Experiments ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

We use 5-fold cross validation to compare the methods with Oracle: the oracle performance for early stopping, which reflects the best outcomes from each test simulation.

#### D.7.1 Dialogue Act Early Stopping Method

Details of Dialogue Act early stopping method is as follows. We first collect all pairs from dialogue acts as independent variable (with one-hot encoding), where one form round $r-1$ and another from $r$. Then make the group performance at round $r$ to match with dialogue act pairs as dependent variable. Next, we run OLS regression on this dataset, assigning coefficients and p-value to each pair. The strength of coefficient shows how each dialogue act pairs relate the performance, positively and negatively, and p-value shows the statistical significance of these relationships.

To find the best early stopping rounds, we do a greedy search on training set for the following hyperparameters:

- •

  top\_da: the number of dialogue act pairs with the top coefficients to apply in candidates. 1 to 5, inclusive.
- •

  p-value: the threshold of p-value for a pair to be considered as candidates. 0.05, 0.1, 0.2 and None.
- •

  count\_per\_round: the threshold of how many occurrences of a candidate should exist in a round to pass. When passed, it gives +1 score for termination. 1 to 3, inclusive.
- •

  score: the threshold of how many scores a round needs to be terminated. 1 to value of top\_da, inclusive.

We examine all combinations of hyperparameters on the training data, and identifies the best sets for each voting rule and environment. Using the best hyperparameters, we evaluate the performance of early stopping on the test set.

### D.8 Models and Dataset

For all experiments, we by default use gpt-4o-mini-2024-07-18 ([OpenAI, 2023](https://arxiv.org/html/2411.07161v2#bib.bib30)) as the main LLM for agents. In ablation study, we use gpt-3.5-turbo-0125, gpt-4o-2024-05-13, Llama-3.1-70b-Instruct and Llama-3.1-8b-Instruct for comparison ([Dubey et al., 2024](https://arxiv.org/html/2411.07161v2#bib.bib12)). To calculate sentence embeddings we used paraphrase-MiniLM-L6-v2 ([Reimers and Gurevych, 2019](https://arxiv.org/html/2411.07161v2#bib.bib34)). For dialogue act labeling, we use Llama-3.1-8b-Instruct. For all LLM inferences, we used temperature = 0.

MovieLens 100K dataset is used in recommendation system, which is under CC0: Public Domain license [Harper and Konstan (2015)](https://arxiv.org/html/2411.07161v2#bib.bib17). Our use of the dataset is consistent with the intended use. MovieLens does not contain personally identifying info or offensive content.

## Appendix E Details of Results

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/economics_model_new.png)


Figure 20: LLM comparison with group total utility in exchange economy, using 3 agent, asymmetric, majority voting setting. Line plots (left y-axis) show the group total utility achieved over rounds; bar plots (right y-axis) represent the ratio of cases where participants yet to reach an agreement until a certain round. The red horizontal line indicates the maximum achievable group total utility.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/recommendation_rmse_new.png)


Figure 21: Comparison between voting rules in recommendation system environment. Line plots (left y-axis) show the comparison of RMSE achieved over rounds; bar plots (right y-axis) represent the ratio of cases where participants yet to reach an agreement until a certain round. The green horizontal line is baseline (Always Guess 4), and the blue line is SoTA performance [Behera and Nain (2023)](https://arxiv.org/html/2411.07161v2#bib.bib3).

### E.1 Ablation Studies

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | |  | | --- | | GROUP | | TOTAL | | UTILITY@3 | | |  | | --- | | GROUP | | TOTAL | | UTILITY@5 | | |  | | --- | | GROUP | | TOTAL | | UTILITY@10 | | AUC@3 | AUC@5 | AUC@10 | RATIONALITY | FAIRNESS | RIGIDITY |
| Voting Rule: Majority, # Agent: $\mathbf{K=3}$ | | | | | | | | | |
| gpt-3.5-turbo | 62.44 (2.24) | 63.40 (0.35) | 64.07 (0.61) | 56.15 (2.81) | 59.15 (1.69) | 61.56 (0.88) | 17.88 (2.11) | 97.58 (0.91) | 47.00 (3.08) |
| gpt-4o-mini | 80.61 (1.46) | 81.43 (1.32) | 78.18 (1.64) | 66.64 (3.07) | 72.59 (2.10) | 76.18 (1.49) | 25.89 (2.25) | 58.41 (6.14) | 70.00 (2.84) |
| gpt-4o | 76.39 (4.26) | 84.29 (1.94) | 91.02 (1.15) | 57.51 (3.82) | 68.03 (2.34) | 78.97 (1.16) | 38.16 (4.19) | 74.27 (3.44) | 73.00 (1.93) |
| llama3-1-8b | 69.55 (5.87) | 72.91 (5.45) | 73.80 (5.39) | 59.60 (6.22) | 64.91 (5.55) | 69.07 (5.08) | 3.78 (0.71) | 77.66 (5.20) | 86.00 (1.83) |
| llama3-1-70b | 93.10 (3.28) | 97.15 (0.56) | 96.69 (0.79) | 76.41 (4.61) | 84.64 (2.78) | 90.69 (1.43) | 35.11 (4.03) | 87.66 (3.28) | 70.67 (2.67) |
| Voting Rule: Majority, Model: gpt-4o-mini | | | | | | | | | |
| $K=3$ | 79.88 (0.80) | 81.33 (0.72) | 79.61 (0.88) | 64.08 (1.81) | 70.91 (1.23) | 75.67 (0.84) | 23.80 (0.94) | 64.00 (3.07) | 71.30 (1.32) |
| $K=4$ | 58.29 (2.39) | 63.10 (2.12) | 64.99 (2.12) | 43.64 (2.04) | 51.05 (1.87) | 57.66 (1.89) | 34.25 (1.39) | 64.54 (3.14) | 80.30 (0.96) |
| $K=5$ | 63.67 (2.72) | 72.42 (2.33) | 74.56 (2.18) | 40.23 (1.90) | 52.17 (1.88) | 63.13 (1.94) | 36.26 (1.36) | 57.54 (3.28) | 73.50 (1.36) |

Table 6: Ablation studies on exchange economics environment. The reported numbers are an average of all simulations, and the numbers in parentheses are standard errors. The smallest and largest value in a category is colored in blue and red.

The result of ablation studies is shown in Table [6](https://arxiv.org/html/2411.07161v2#A5.T6 "Table 6 ‣ E.1 Ablation Studies ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). We further compare the performance of multi-agent collaboration with different LLMs in Figure [20](https://arxiv.org/html/2411.07161v2#A5.F20 "Figure 20 ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). For simplicity, we only compare $K=3$ agent system in majority voting setting with 30 collaborations. The results of gpt-3.5-turbo-0125, gpt-4o-2024-05-13, Llama-3.1-8b-Instruct and Llama-3.1-70b-Instruct in Table [1](https://arxiv.org/html/2411.07161v2#S5.T1 "Table 1 ‣ 5 Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") show that multi-agent collaboration works with different LLMs. The stronger (larger) the model, the better performance observed in collaboration, both in end round performance and also efficiency in reaching to an agreement. Notably, the Rationality of the weaker model, gpt-3.5-turbo-0125 and Llama-3.1-8b-Instruct, is only 17.88% and 3.78%, indicates that single agent will largely fail due to the complexity of the task. Nonetheless, the final round performance has reached 64% and 80%, shows the effectiveness of multi-agent collaboration with weak models.

Scaling on MAS is evaluated with different number of agents. Due to the nature of decentralized collaboration, the more the agents, the harder to reach an agreement. Furthermore, the additional amount of historical context brought by increasing number of agents can also be a burden to the agent’s performance. Comparing $K=3,4,5$ settings in Table [1](https://arxiv.org/html/2411.07161v2#S5.T1 "Table 1 ‣ 5 Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), the quality and efficiency of collaboration generally drops with the increasing number of agents. Exceptionally, performance in $K=4$ setting is worse than that of $K=5$. This is because majority voting is harder to achieve an agreement with, even number of participants. With 4 agents, a proposal needs at least 3 votes to get accepted; 5 agent setting also requires 3 votes, but they can ignore up to 2 agents’ preferences or agreements.

### E.2 Recommendation System

We show the detailed result between voting rules in the recommendation system environment in Table [7](https://arxiv.org/html/2411.07161v2#A5.T7 "Table 7 ‣ E.2 Recommendation System ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration").

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | MAE@1 | MAE@2 | MAE@3 | MAE@4 | MAE@5 | MAE@6 | MAE@7 | MAE@8 | MAE@9 | MAE@10 |
| Unanimous | 0.85 | 0.84 | 0.84 | 0.86 | 0.86 | 0.87 | 0.88 | 0.89 | 0.89 | 0.88 |
| Majority | 0.81 | 0.81 | 0.81 | 0.81 | 0.84 | 0.82 | 0.84 | 0.84 | 0.85 | 0.86 |
| Plurality | 0.81 | 0.82 | 0.82 | 0.83 | 0.82 | 0.83 | 0.83 | 0.84 | 0.83 | 0.84 |
| Rated | 0.83 | 0.80 | 0.77 | 0.77 | 0.77 | 0.75 | 0.76 | 0.77 | 0.76 | 0.79 |
| Ranked | 0.90 | 0.83 | 0.86 | 0.86 | 0.84 | 0.87 | 0.86 | 0.86 | 0.84 | 0.84 |
| Cumulative | 0.83 | 0.83 | 0.83 | 0.78 | 0.78 | 0.77 | 0.78 | 0.79 | 0.77 | 0.76 |
|  | RMSE@1 | RMSE@2 | RMSE@3 | RMSE@4 | RMSE@5 | RMSE@6 | RMSE@7 | RMSE@8 | RMSE@9 | RMSE@10 |
| Unanimous | 1.03 | 1.04 | 1.06 | 1.06 | 1.07 | 1.08 | 1.09 | 1.09 | 1.09 | 1.09 |
| Majority | 1.08 | 1.03 | 1.02 | 1.02 | 1.03 | 1.02 | 1.04 | 1.05 | 1.05 | 1.06 |
| Plurality | 1.11 | 1.07 | 1.06 | 1.09 | 1.08 | 1.12 | 1.12 | 1.14 | 1.13 | 1.15 |
| Rated | 1.09 | 1.03 | 1.00 | 0.98 | 0.98 | 0.97 | 0.98 | 0.99 | 0.99 | 1.01 |
| Ranked | 1.20 | 1.13 | 1.13 | 1.13 | 1.10 | 1.13 | 1.11 | 1.11 | 1.07 | 1.07 |
| Cumulative | 1.10 | 1.09 | 1.09 | 1.04 | 1.03 | 1.02 | 1.02 | 1.03 | 1.01 | 1.01 |

Table 7: Recommendation system environment results comparison between voting rules. The smallest and largest value in a category is colored in blue and red. Experiments are made with gpt-4o-mini.

### E.3 Cross-Agent Communication Analysis

In this section, we show how language features are presented in different environments and voting rules. Table [8](https://arxiv.org/html/2411.07161v2#A5.T8 "Table 8 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") is heatmaps for average message length, message complexity, and information distance observed in agent conversation. Message length increases over time in both environments, with shorter messages in early rounds and longer ones later. The recommendation system generally has longer messages due to its need for detailed explanations. Message complexity in the exchange economy starts low, peaks early, dips, and then gradually increases toward the final round, while the recommendation system shows consistently higher and increasing complexity throughout. Information distance steadily decreases in both environments, indicating a convergence of topics and less novel information as the discussions progress.

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | EXCHANGE ECONOMY | | | | | | | | | |  | RECOMMENDATION SYSTEM | | | | | | | | | |
|  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| AVERAGE MESSAGE LENGTH | | | | | | | | | | | | | | | | | | | | | |
| Unanimous | 46 | 62 | 83 | 85 | 89 | 94 | 96 | 96 | 97 | 94 |  | 68 | 85 | 94 | 96 | 100 | 101 | 103 | 104 | 105 | 104 |
| Majority | 43 | 62 | 82 | 84 | 87 | 91 | 91 | 93 | 91 | 91 |  | 67 | 85 | 93 | 99 | 101 | 103 | 105 | 105 | 106 | 105 |
| Plurality | 42 | 59 | 81 | 82 | 84 | 90 | 89 | 91 | 93 | 90 |  | 67 | 84 | 94 | 99 | 101 | 104 | 105 | 106 | 107 | 106 |
| Rated | 42 | 60 | 82 | 83 | 89 | 91 | 92 | 94 | 94 | 93 |  | 67 | 86 | 96 | 100 | 101 | 103 | 104 | 106 | 107 | 105 |
| Ranked | 43 | 61 | 80 | 83 | 86 | 90 | 91 | 90 | 91 | 90 |  | 67 | 84 | 98 | 99 | 102 | 102 | 103 | 104 | 105 | 104 |
| Cumulative | 42 | 61 | 81 | 83 | 86 | 91 | 91 | 92 | 93 | 91 |  | 68 | 85 | 95 | 98 | 100 | 102 | 103 | 104 | 104 | 103 |
| AVERAGE MESSAGE COMPLEXITY | | | | | | | | | | | | | | | | | | | | | |
| Unanimous | 7.1 | 10.2 | 9.3 | 9.0 | 9.0 | 9.1 | 9.2 | 9.5 | 9.5 | 9.6 |  | 10.4 | 10.7 | 11.5 | 11.7 | 11.9 | 12.0 | 12.0 | 12.1 | 12.3 | 12.2 |
| Majority | 7.6 | 10.4 | 9.5 | 9.4 | 9.2 | 9.2 | 9.4 | 9.5 | 9.6 | 9.7 |  | 10.3 | 10.7 | 11.5 | 11.7 | 11.9 | 12.0 | 12.1 | 12.1 | 12.1 | 12.1 |
| Plurality | 6.8 | 10.5 | 9.4 | 9.1 | 8.9 | 9.1 | 9.2 | 9.3 | 9.4 | 9.4 |  | 10.3 | 10.6 | 11.5 | 11.7 | 11.9 | 12.0 | 12.0 | 12.1 | 12.1 | 12.1 |
| Rated | 5.8 | 10.4 | 9.4 | 9.1 | 9.1 | 9.2 | 9.4 | 9.3 | 9.5 | 9.6 |  | 10.3 | 10.7 | 11.6 | 11.8 | 12.0 | 12.0 | 12.2 | 12.2 | 12.3 | 12.3 |
| Ranked | 6.7 | 10.2 | 9.5 | 9.2 | 9.1 | 9.1 | 9.4 | 9.4 | 9.5 | 9.6 |  | 10.3 | 10.7 | 11.6 | 11.7 | 11.9 | 12.1 | 12.1 | 12.2 | 12.2 | 12.2 |
| Cumulative | 6.9 | 10.6 | 9.4 | 9.3 | 9.1 | 9.2 | 9.4 | 9.5 | 9.6 | 9.7 |  | 10.3 | 10.6 | 11.5 | 11.7 | 11.7 | 11.9 | 11.9 | 12.0 | 12.1 | 12.1 |
| AVERAGE INFORMATION DISTANCE | | | | | | | | | | | | | | | | | | | | | |
| Unanimous |  | 0.23 | 0.16 | 0.13 | 0.13 | 0.12 | 0.11 | 0.11 | 0.10 | 0.10 |  |  | 0.20 | 0.13 | 0.11 | 0.09 | 0.09 | 0.08 | 0.08 | 0.08 | 0.09 |
| Majority |  | 0.26 | 0.17 | 0.13 | 0.12 | 0.12 | 0.11 | 0.10 | 0.10 | 0.11 |  |  | 0.19 | 0.13 | 0.11 | 0.10 | 0.10 | 0.09 | 0.09 | 0.08 | 0.09 |
| Plurality |  | 0.28 | 0.16 | 0.13 | 0.14 | 0.12 | 0.11 | 0.11 | 0.10 | 0.11 |  |  | 0.21 | 0.14 | 0.11 | 0.10 | 0.09 | 0.09 | 0.09 | 0.08 | 0.09 |
| Rated |  | 0.33 | 0.16 | 0.13 | 0.12 | 0.10 | 0.11 | 0.10 | 0.10 | 0.11 |  |  | 0.20 | 0.13 | 0.11 | 0.10 | 0.10 | 0.09 | 0.09 | 0.08 | 0.09 |
| Ranked |  | 0.28 | 0.17 | 0.13 | 0.12 | 0.11 | 0.10 | 0.10 | 0.10 | 0.10 |  |  | 0.20 | 0.13 | 0.11 | 0.09 | 0.09 | 0.09 | 0.09 | 0.08 | 0.09 |
| Cumulative |  | 0.30 | 0.18 | 0.13 | 0.12 | 0.11 | 0.11 | 0.11 | 0.10 | 0.10 |  |  | 0.20 | 0.13 | 0.10 | 0.09 | 0.09 | 0.09 | 0.09 | 0.08 | 0.09 |

Table 8: Heatmaps of average message length, message complexity, and information distance in each round. Analysis is made in 3 agents, gpt-4o-mini setting. Color gradient is calculated with green as maximum, red as minimum, and white as median value in each table.

The dialogue act annotation results are presented in Table [9](https://arxiv.org/html/2411.07161v2#A5.T9 "Table 9 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). The dialogue act annotation results in both environments show that Inform and Request acts dominate, indicating frequent information sharing and input requests critical for task progression. The Confirm act rises sharply after round 3 in the recommendation system and more gradually in the exchange economy, showing validation is more prominent in recommendation tasks. Summarize acts increase slightly in later rounds, consolidating information, while Evaluate acts remain consistently high, reflecting ongoing assessment. Propose acts surge early in the exchange economy and peak later in the recommendation system, suggesting early proposals are vital in negotiations. Acts like Compromise, Defend, Accept, and Decline are rare, reflecting minimal adversarial behavior, while Others remain low, indicating the high quality of dialogue act definitions.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/da_transition_econ.png)


(a) Dialogue act transition graph for exchange economy.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/da_transition_recom.png)


(b) Dialogue act transition graph for recommendation system.

Figure 22: Dialogue act transition graph for exchange economy and recommendation system environments. Only the most probable outgoing edge is presented. Self-loops are excluded.

The most probable transition graphs in both environments are shown in Figure [22(a)](https://arxiv.org/html/2411.07161v2#A5.F22.sf1 "In Figure 22 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and [22(b)](https://arxiv.org/html/2411.07161v2#A5.F22.sf2 "In Figure 22 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). The breakdown of voting rules are displayed in Figure [23](https://arxiv.org/html/2411.07161v2#A5.F23 "Figure 23 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration") and [24](https://arxiv.org/html/2411.07161v2#A5.F24 "Figure 24 ‣ E.3 Cross-Agent Communication Analysis ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). The transitions reveal a structured progression from requesting information to proposing and evaluating solutions, followed by resolution or negotiation. In the exchange economy, collaboration centers around a loop between Request and Propose, reflecting the cooperative decision-making process. Key transitions include Inform to Request, Confirm to Request, and Compromise to Propose, showing how agents share knowledge, confirm information, and adopt ideas. Accept transitions to End, signaling negotiation closure. In contrast, the recommendation system centers on Request, indicating a more cooperative, exploratory process with incomplete information.

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | EXCHANGE ECONOMY | | | | | | | | | |  | RECOMMENDATION SYSTEM | | | | | | | | | |
|  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| UNANIMOUS | | | | | | | | | | | | | | | | | | | | | |
| Inform | 1.00 | 0.99 | 0.88 | 0.59 | 0.69 | 0.68 | 0.62 | 0.66 | 0.62 | 0.54 |  | 1.00 | 0.98 | 0.99 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 1.00 | 1.00 |
| Request | 1.00 | 1.00 | 0.96 | 0.94 | 0.89 | 0.91 | 0.89 | 0.89 | 0.85 | 0.82 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 1.00 | 0.98 |
| Confirm | 0.08 | 0.34 | 0.28 | 0.17 | 0.27 | 0.28 | 0.33 | 0.37 | 0.41 | 0.53 |  | 0.29 | 0.49 | 0.63 | 0.66 | 0.79 | 0.68 | 0.74 | 0.69 | 0.72 | 0.64 |
| Summarize | 0.16 | 0.02 | 0.15 | 0.17 | 0.16 | 0.19 | 0.13 | 0.13 | 0.18 | 0.32 |  | 0.07 | 0.11 | 0.08 | 0.16 | 0.16 | 0.18 | 0.16 | 0.16 | 0.19 | 0.24 |
| Evaluate | 0.98 | 0.91 | 0.58 | 0.80 | 0.90 | 0.94 | 0.91 | 0.93 | 0.91 | 0.92 |  | 0.01 | 0.58 | 0.58 | 0.62 | 0.60 | 0.59 | 0.64 | 0.62 | 0.64 | 0.67 |
| Propose | 0.06 | 0.47 | 0.99 | 0.99 | 0.99 | 1.00 | 0.98 | 0.98 | 0.92 | 0.97 |  | 0.10 | 0.07 | 0.20 | 0.20 | 0.15 | 0.21 | 0.30 | 0.28 | 0.28 | 0.89 |
| Compromise | 0.00 | 0.09 | 0.43 | 0.13 | 0.24 | 0.39 | 0.42 | 0.37 | 0.39 | 0.40 |  | 0.01 | 0.00 | 0.00 | 0.00 | 0.01 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| Defend | 0.00 | 0.00 | 0.04 | 0.00 | 0.02 | 0.03 | 0.02 | 0.01 | 0.03 | 0.08 |  | 0.00 | 0.00 | 0.00 | 0.01 | 0.01 | 0.02 | 0.02 | 0.01 | 0.03 | 0.05 |
| Accept | 0.00 | 0.00 | 0.01 | 0.00 | 0.00 | 0.02 | 0.06 | 0.08 | 0.12 | 0.27 |  | 0.00 | 0.00 | 0.00 | 0.01 | 0.00 | 0.02 | 0.01 | 0.01 | 0.04 | 0.02 |
| Decline | 0.00 | 0.00 | 0.01 | 0.00 | 0.00 | 0.01 | 0.01 | 0.00 | 0.02 | 0.03 |  | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.01 | 0.01 | 0.00 |
| Others | 0.00 | 0.00 | 0.02 | 0.06 | 0.04 | 0.01 | 0.06 | 0.04 | 0.04 | 0.04 |  | 0.03 | 0.04 | 0.00 | 0.03 | 0.01 | 0.02 | 0.04 | 0.01 | 0.03 | 0.01 |
| MAJORITY | | | | | | | | | | | | | | | | | | | | | |
| Inform | 1.00 | 1.00 | 0.96 | 0.72 | 0.72 | 0.66 | 0.65 | 0.77 | 0.66 | 0.64 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 |
| Request | 1.00 | 1.00 | 1.00 | 0.96 | 0.95 | 0.96 | 0.88 | 0.96 | 0.90 | 0.85 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 0.92 |
| Confirm | 0.16 | 0.25 | 0.34 | 0.31 | 0.44 | 0.36 | 0.41 | 0.41 | 0.53 | 0.52 |  | 0.25 | 0.48 | 0.56 | 0.65 | 0.71 | 0.71 | 0.74 | 0.71 | 0.81 | 0.65 |
| Summarize | 0.15 | 0.02 | 0.15 | 0.13 | 0.19 | 0.21 | 0.20 | 0.18 | 0.33 | 0.30 |  | 0.01 | 0.15 | 0.07 | 0.18 | 0.11 | 0.17 | 0.19 | 0.16 | 0.18 | 0.25 |
| Evaluate | 0.93 | 0.91 | 0.67 | 0.78 | 0.86 | 0.88 | 0.88 | 0.86 | 0.89 | 0.87 |  | 0.05 | 0.61 | 0.52 | 0.49 | 0.58 | 0.52 | 0.61 | 0.54 | 0.58 | 0.56 |
| Propose | 0.37 | 0.41 | 0.97 | 0.99 | 0.95 | 0.97 | 0.99 | 0.96 | 0.93 | 0.90 |  | 0.05 | 0.08 | 0.29 | 0.17 | 0.22 | 0.15 | 0.25 | 0.21 | 0.26 | 0.89 |
| Compromise | 0.00 | 0.03 | 0.38 | 0.14 | 0.25 | 0.41 | 0.39 | 0.31 | 0.36 | 0.30 |  | 0.00 | 0.00 | 0.02 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| Defend | 0.00 | 0.00 | 0.04 | 0.01 | 0.04 | 0.06 | 0.07 | 0.05 | 0.09 | 0.07 |  | 0.00 | 0.01 | 0.01 | 0.00 | 0.02 | 0.01 | 0.02 | 0.00 | 0.03 | 0.04 |
| Accept | 0.00 | 0.00 | 0.02 | 0.03 | 0.04 | 0.11 | 0.08 | 0.12 | 0.20 | 0.20 |  | 0.00 | 0.02 | 0.02 | 0.01 | 0.01 | 0.00 | 0.02 | 0.01 | 0.02 | 0.03 |
| Decline | 0.00 | 0.00 | 0.02 | 0.02 | 0.03 | 0.02 | 0.04 | 0.03 | 0.04 | 0.00 |  | 0.00 | 0.01 | 0.02 | 0.00 | 0.00 | 0.00 | 0.01 | 0.00 | 0.01 | 0.01 |
| Others | 0.00 | 0.01 | 0.01 | 0.08 | 0.08 | 0.08 | 0.08 | 0.08 | 0.07 | 0.06 |  | 0.02 | 0.00 | 0.03 | 0.03 | 0.01 | 0.02 | 0.02 | 0.01 | 0.01 | 0.01 |
| PLURALITY | | | | | | | | | | | | | | | | | | | | | |
| Inform | 1.00 | 0.98 | 0.93 | 0.74 | 0.69 | 0.68 | 0.61 | 0.64 | 0.66 | 0.64 |  | 1.00 | 1.00 | 0.98 | 0.99 | 0.99 | 0.99 | 1.00 | 0.98 | 1.00 | 1.00 |
| Request | 1.00 | 1.00 | 0.95 | 0.97 | 1.00 | 0.93 | 0.91 | 0.90 | 0.96 | 0.85 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 1.00 | 0.93 |
| Confirm | 0.01 | 0.29 | 0.16 | 0.26 | 0.40 | 0.42 | 0.43 | 0.46 | 0.52 | 0.55 |  | 0.29 | 0.44 | 0.61 | 0.70 | 0.73 | 0.78 | 0.76 | 0.78 | 0.77 | 0.61 |
| Summarize | 0.39 | 0.01 | 0.11 | 0.17 | 0.17 | 0.22 | 0.20 | 0.22 | 0.18 | 0.25 |  | 0.05 | 0.13 | 0.11 | 0.23 | 0.18 | 0.23 | 0.19 | 0.17 | 0.21 | 0.19 |
| Evaluate | 0.85 | 0.96 | 0.62 | 0.73 | 0.86 | 0.85 | 0.91 | 0.89 | 0.83 | 0.86 |  | 0.06 | 0.65 | 0.59 | 0.61 | 0.69 | 0.58 | 0.62 | 0.67 | 0.65 | 0.61 |
| Propose | 0.19 | 0.49 | 0.99 | 1.00 | 0.98 | 0.97 | 0.97 | 0.95 | 0.93 | 0.87 |  | 0.09 | 0.06 | 0.31 | 0.31 | 0.30 | 0.32 | 0.32 | 0.34 | 0.36 | 0.85 |
| Compromise | 0.00 | 0.02 | 0.53 | 0.14 | 0.14 | 0.38 | 0.37 | 0.33 | 0.32 | 0.32 |  | 0.00 | 0.01 | 0.00 | 0.01 | 0.02 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 |
| Defend | 0.00 | 0.00 | 0.00 | 0.02 | 0.00 | 0.05 | 0.06 | 0.06 | 0.07 | 0.07 |  | 0.00 | 0.00 | 0.01 | 0.03 | 0.02 | 0.04 | 0.04 | 0.02 | 0.02 | 0.03 |
| Accept | 0.00 | 0.00 | 0.01 | 0.02 | 0.00 | 0.08 | 0.15 | 0.10 | 0.13 | 0.25 |  | 0.00 | 0.00 | 0.01 | 0.03 | 0.01 | 0.02 | 0.04 | 0.02 | 0.01 | 0.02 |
| Decline | 0.00 | 0.00 | 0.01 | 0.02 | 0.00 | 0.05 | 0.05 | 0.01 | 0.02 | 0.02 |  | 0.00 | 0.00 | 0.01 | 0.01 | 0.01 | 0.01 | 0.01 | 0.01 | 0.00 | 0.00 |
| Others | 0.00 | 0.00 | 0.02 | 0.10 | 0.06 | 0.08 | 0.05 | 0.09 | 0.07 | 0.04 |  | 0.01 | 0.01 | 0.02 | 0.01 | 0.06 | 0.02 | 0.07 | 0.00 | 0.03 | 0.01 |
| RATED | | | | | | | | | | | | | | | | | | | | | |
| Inform | 1.00 | 0.94 | 0.97 | 0.78 | 0.69 | 0.56 | 0.59 | 0.65 | 0.65 | 0.61 |  | 1.00 | 1.00 | 0.98 | 0.99 | 0.99 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 |
| Request | 1.00 | 1.00 | 1.00 | 0.97 | 0.96 | 0.92 | 0.93 | 0.91 | 0.90 | 0.81 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 0.94 |
| Confirm | 0.00 | 0.47 | 0.33 | 0.31 | 0.35 | 0.41 | 0.33 | 0.40 | 0.43 | 0.48 |  | 0.27 | 0.48 | 0.67 | 0.70 | 0.76 | 0.65 | 0.67 | 0.71 | 0.69 | 0.58 |
| Summarize | 0.16 | 0.02 | 0.17 | 0.13 | 0.17 | 0.19 | 0.23 | 0.23 | 0.20 | 0.25 |  | 0.09 | 0.13 | 0.14 | 0.16 | 0.17 | 0.22 | 0.27 | 0.21 | 0.18 | 0.25 |
| Evaluate | 0.40 | 1.00 | 0.57 | 0.69 | 0.87 | 0.85 | 0.85 | 0.84 | 0.92 | 0.85 |  | 0.09 | 0.60 | 0.62 | 0.66 | 0.58 | 0.66 | 0.58 | 0.51 | 0.55 | 0.71 |
| Propose | 0.11 | 0.66 | 0.97 | 0.99 | 0.98 | 0.99 | 1.00 | 0.97 | 0.95 | 0.94 |  | 0.16 | 0.05 | 0.26 | 0.20 | 0.21 | 0.23 | 0.27 | 0.31 | 0.36 | 0.88 |
| Compromise | 0.00 | 0.03 | 0.48 | 0.12 | 0.24 | 0.40 | 0.32 | 0.34 | 0.38 | 0.32 |  | 0.00 | 0.00 | 0.01 | 0.01 | 0.01 | 0.00 | 0.00 | 0.00 | 0.01 | 0.00 |
| Defend | 0.00 | 0.00 | 0.03 | 0.01 | 0.02 | 0.03 | 0.07 | 0.03 | 0.07 | 0.04 |  | 0.00 | 0.00 | 0.00 | 0.01 | 0.01 | 0.00 | 0.00 | 0.01 | 0.00 | 0.02 |
| Accept | 0.00 | 0.00 | 0.03 | 0.02 | 0.05 | 0.02 | 0.07 | 0.10 | 0.11 | 0.22 |  | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.01 | 0.02 | 0.00 | 0.01 |
| Decline | 0.00 | 0.00 | 0.02 | 0.01 | 0.01 | 0.00 | 0.01 | 0.03 | 0.03 | 0.00 |  | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.01 | 0.00 | 0.00 | 0.00 |
| Others | 0.02 | 0.00 | 0.02 | 0.10 | 0.08 | 0.08 | 0.06 | 0.07 | 0.05 | 0.08 |  | 0.03 | 0.02 | 0.06 | 0.04 | 0.03 | 0.02 | 0.02 | 0.05 | 0.05 | 0.06 |
| RANKED | | | | | | | | | | | | | | | | | | | | | |
| Inform | 1.00 | 0.96 | 0.96 | 0.78 | 0.79 | 0.66 | 0.69 | 0.71 | 0.72 | 0.75 |  | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 0.99 | 1.00 | 1.00 | 1.00 | 0.99 |
| Request | 1.00 | 1.00 | 0.99 | 0.98 | 0.96 | 0.95 | 0.95 | 0.96 | 0.91 | 0.89 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.98 |
| Confirm | 0.03 | 0.51 | 0.49 | 0.33 | 0.40 | 0.35 | 0.45 | 0.52 | 0.48 | 0.54 |  | 0.21 | 0.43 | 0.53 | 0.62 | 0.73 | 0.75 | 0.78 | 0.68 | 0.70 | 0.70 |
| Summarize | 0.02 | 0.03 | 0.09 | 0.16 | 0.23 | 0.20 | 0.20 | 0.16 | 0.27 | 0.32 |  | 0.09 | 0.14 | 0.14 | 0.21 | 0.24 | 0.23 | 0.21 | 0.26 | 0.17 | 0.24 |
| Evaluate | 0.92 | 0.95 | 0.61 | 0.65 | 0.79 | 0.86 | 0.87 | 0.86 | 0.83 | 0.89 |  | 0.06 | 0.52 | 0.64 | 0.66 | 0.63 | 0.58 | 0.59 | 0.60 | 0.69 | 0.77 |
| Propose | 0.15 | 0.48 | 0.92 | 0.96 | 0.99 | 0.98 | 0.97 | 0.93 | 0.90 | 0.87 |  | 0.09 | 0.04 | 0.27 | 0.16 | 0.29 | 0.19 | 0.24 | 0.28 | 0.32 | 0.85 |
| Compromise | 0.00 | 0.01 | 0.35 | 0.14 | 0.21 | 0.32 | 0.35 | 0.36 | 0.37 | 0.21 |  | 0.00 | 0.01 | 0.01 | 0.02 | 0.00 | 0.00 | 0.01 | 0.03 | 0.00 | 0.03 |
| Defend | 0.00 | 0.00 | 0.05 | 0.02 | 0.03 | 0.06 | 0.03 | 0.02 | 0.05 | 0.09 |  | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.01 | 0.01 | 0.01 | 0.02 | 0.02 |
| Accept | 0.00 | 0.00 | 0.05 | 0.03 | 0.04 | 0.05 | 0.12 | 0.13 | 0.11 | 0.27 |  | 0.00 | 0.00 | 0.02 | 0.01 | 0.02 | 0.01 | 0.01 | 0.02 | 0.00 | 0.03 |
| Decline | 0.00 | 0.00 | 0.03 | 0.01 | 0.01 | 0.03 | 0.01 | 0.00 | 0.00 | 0.02 |  | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.01 | 0.00 | 0.00 | 0.01 |
| Others | 0.01 | 0.02 | 0.02 | 0.05 | 0.06 | 0.13 | 0.11 | 0.04 | 0.03 | 0.01 |  | 0.01 | 0.02 | 0.08 | 0.03 | 0.01 | 0.03 | 0.01 | 0.03 | 0.02 | 0.06 |
| CUMULATIVE | | | | | | | | | | | | | | | | | | | | | |
| Inform | 1.00 | 0.94 | 0.99 | 0.82 | 0.72 | 0.68 | 0.60 | 0.67 | 0.72 | 0.74 |  | 1.00 | 1.00 | 1.00 | 0.98 | 0.97 | 0.98 | 1.00 | 1.00 | 1.00 | 1.00 |
| Request | 1.00 | 1.00 | 0.98 | 0.97 | 0.96 | 0.95 | 0.94 | 0.92 | 0.95 | 0.86 |  | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 1.00 | 1.00 | 0.96 |
| Confirm | 0.03 | 0.32 | 0.30 | 0.29 | 0.29 | 0.33 | 0.41 | 0.46 | 0.45 | 0.55 |  | 0.25 | 0.44 | 0.66 | 0.72 | 0.78 | 0.73 | 0.73 | 0.76 | 0.71 | 0.62 |
| Summarize | 0.14 | 0.01 | 0.14 | 0.16 | 0.09 | 0.17 | 0.25 | 0.23 | 0.21 | 0.32 |  | 0.10 | 0.12 | 0.12 | 0.22 | 0.22 | 0.22 | 0.17 | 0.29 | 0.20 | 0.26 |
| Evaluate | 0.81 | 0.98 | 0.58 | 0.74 | 0.86 | 0.90 | 0.92 | 0.90 | 0.90 | 0.86 |  | 0.04 | 0.65 | 0.63 | 0.51 | 0.61 | 0.62 | 0.59 | 0.56 | 0.60 | 0.72 |
| Propose | 0.17 | 0.58 | 0.98 | 0.97 | 0.99 | 0.98 | 0.95 | 0.89 | 0.89 | 0.87 |  | 0.08 | 0.03 | 0.24 | 0.26 | 0.22 | 0.22 | 0.27 | 0.28 | 0.32 | 0.84 |
| Compromise | 0.00 | 0.05 | 0.54 | 0.14 | 0.19 | 0.42 | 0.30 | 0.35 | 0.28 | 0.27 |  | 0.01 | 0.00 | 0.00 | 0.02 | 0.00 | 0.00 | 0.02 | 0.01 | 0.00 | 0.01 |
| Defend | 0.00 | 0.00 | 0.01 | 0.00 | 0.03 | 0.05 | 0.05 | 0.02 | 0.05 | 0.06 |  | 0.01 | 0.01 | 0.01 | 0.01 | 0.01 | 0.00 | 0.02 | 0.03 | 0.02 | 0.03 |
| Accept | 0.00 | 0.00 | 0.01 | 0.00 | 0.01 | 0.09 | 0.10 | 0.10 | 0.21 | 0.21 |  | 0.01 | 0.01 | 0.00 | 0.00 | 0.01 | 0.03 | 0.01 | 0.03 | 0.02 | 0.04 |
| Decline | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.04 | 0.01 | 0.00 | 0.00 | 0.01 |  | 0.01 | 0.01 | 0.00 | 0.00 | 0.00 | 0.00 | 0.00 | 0.02 | 0.01 | 0.00 |
| Others | 0.00 | 0.00 | 0.00 | 0.06 | 0.06 | 0.07 | 0.05 | 0.06 | 0.06 | 0.03 |  | 0.01 | 0.03 | 0.04 | 0.03 | 0.01 | 0.07 | 0.01 | 0.03 | 0.04 | 0.08 |

Table 9: Heatmaps of ratio of dialogue acts in each round. Color gradient is calculated with green as maximum, and white as minimum value in each table.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/da_transition_econ_sc.png)


Figure 23: Dialogue act transition graph for different voting rules in exchange economics environment.

![Refer to caption](https://arxiv.org/html/2411.07161v2/figs/da_transition_recom_sc.png)


Figure 24: Dialogue act transition graph for different voting rules in recommendation system environment.

### E.4 Early Stopping

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| EARLY STOPPING METHOD | UNANIMOUS | MAJORITY | PLURALIRY | RATED | RANKED | CUMULATIVE |
| EXCHANGE ECONOMY, in Group Total Utility($\uparrow$) | | | | | | |
| @10 (Baseline) | 0.48 | 0.80 | 0.77 | 0.80 | 0.78 | 0.78 |
| First Agreement | 0.48 | 0.78 | 0.76 | 0.74 | 0.77 | 0.74 |
| Consecutive Agreements | 0.48 | 0.80 | 0.77 | 0.80 | 0.78 | 0.79 |
| Validation Checkpoint | 0.37 | 0.81 | 0.80 | 0.81 | 0.81 | 0.81 |
| Information Distance | 0.39 | 0.81 | 0.80 | 0.81 | 0.81 | 0.82 |
| Dialogue Act | 0.42 | 0.81 | 0.80 | 0.81 | 0.81 | 0.81 |
| Oracle | 0.48 | 0.84 | 0.82 | 0.83 | 0.84 | 0.84 |
| RECOMMENDATION SYSTEM, in MAE($\downarrow$) | | | | | | |
| @10 (Baseline) | 0.88 | 0.86 | 0.84 | 0.79 | 0.84 | 0.76 |
| First Agreement | 0.82 | 0.80 | 0.81 | 0.82 | 0.89 | 0.82 |
| Consecutive Agreements | 0.84 | 0.81 | 0.84 | 0.77 | 0.82 | 0.77 |
| Validation Checkpoint | 0.81 | 0.81 | 0.82 | 0.80 | 0.83 | 0.82 |
| Information Distance | 0.86 | 0.78 | 0.85 | 0.79 | 0.78 | 0.81 |
| Dialogue Act | 0.84 | 0.82 | 0.79 | 0.76 | 0.85 | 0.82 |
| Oracle | 0.73 | 0.63 | 0.59 | 0.62 | 0.69 | 0.67 |

Table 10: Comparison between early stopping methods in different voting rules. The performance is shown with group total utility and MAE. ($\uparrow$) and ($\downarrow$) indicates better performance with higher and lower values, respectively. Experiments are based on the results of 3 agents, gpt-4o-mini setting. Results are based on 5-fold cross validation. We observe that language-based methods performed well overall.


|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| STATISTICS | EARLY STOPPING METHOD | UNANIMOUS | MAJORITY | PLURALITY | RATED | RANKED | CUMULATIVE | AVERAGE |
| EXCHANGE ECONOMY | | | | | | | | |
| Early Stopped Round | Oracle | 3.50 | 3.61 | 3.84 | 3.81 | 3.49 | 4.11 | 3.73 |
| First Agreement | 3.00 | 1.57 | 1.54 | 1.15 | 1.07 | 1.33 | 1.61 |
| Consecutive Agreement | - | 8.00 | 6.50 | 8.00 | 10.00 | 7.00 | 7.90 |
| Validation Checkpoint | 2.60 | 2.80 | 3.00 | 3.00 | 2.60 | 3.00 | 2.83 |
| Information Distance | 3.21 | 3.32 | 3.28 | 3.09 | 3.31 | 3.66 | 3.31 |
| Dialogue Act | 6.23 | 7.09 | 8.33 | 7.64 | 5.47 | 7.40 | 7.03 |
| Effective Ratio | First Agreement | 0.62 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0.94 |
| Consecutive Agreement | 0.00 | 0.03 | 0.03 | 0.02 | 0.00 | 0.01 | 0.02 |
| Information Distance | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 |
| Dialogue Act | 0.62 | 0.34 | 0.07 | 0.19 | 0.63 | 0.31 | 0.36 |
| Threshold | Information Distance | 0.17 | 0.17 | 0.17 | 0.20 | 0.18 | 0.17 | 0.18 |
| RECOMMENDATION SYSTEM | | | | | | | | |
| Early Stopped Round | Oracle | 2.40 | 2.10 | 2.38 | 2.15 | 2.25 | 2.44 | 2.29 |
| First Agreement | 1.53 | 1.01 | 1.00 | 1.04 | 1.00 | 1.36 | 1.16 |
| Consecutive Agreement | 3.34 | 3.31 | 3.15 | 3.61 | 3.46 | 3.87 | 3.46 |
| Validation Checkpoint | 1.20 | 1.00 | 1.20 | 1.00 | 1.00 | 1.00 | 1.07 |
| Information Distance | 3.12 | 3.67 | 4.30 | 3.50 | 3.97 | 3.34 | 3.65 |
| Dialogue Act | 7.58 | 6.98 | 6.02 | 5.22 | 5.37 | 6.53 | 6.28 |
| Effective Ratio | First Agreement | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 |
| Consecutive Agreement | 0.82 | 0.92 | 0.91 | 0.77 | 0.62 | 0.78 | 0.80 |
| Information Distance | 1.00 | 1.00 | 1.00 | 1.00 | 0.99 | 1.00 | 1.00 |
| Dialogue Act | 0.06 | 0.24 | 0.52 | 0.58 | 0.20 | 0.30 | 0.32 |
| Threshold | Information Distance | 0.15 | 0.13 | 0.12 | 0.14 | 0.12 | 0.14 | 0.13 |

Table 11: Basic statistics of different early stopping methods.

We share full result of the early stopping experiment in Table [10](https://arxiv.org/html/2411.07161v2#A5.T10 "Table 10 ‣ E.4 Early Stopping ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"), and basic statistics of early stopping methods, including early-stopped round, effective ratio, and information distance threshold in Table [11](https://arxiv.org/html/2411.07161v2#A5.T11 "Table 11 ‣ E.4 Early Stopping ‣ Appendix E Details of Results ‣ RoundTable: Investigating Group Decision-Making Mechanism in Multi-Agent Collaboration"). The effective ratio stands for the chance that a certain rule can be applied in the test set. The threshold is the embedding distance threshold used for early stopping.

Although language feature based methods, Information Distance and Dialogue Act, outperforms other early stopping methods and baseline in exchange economy environment, the difference is small. This is due to the small room for improvement, identified between baseline (@10) and Oracle performance.
