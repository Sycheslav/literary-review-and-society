---
id: arxiv-2411-05990-prompts
type: material
title: 'Опубликованные разделы о промптах: Game-theoretic LLM: Agent Workflow for Negotiation Games'
source_id: arxiv-2411-05990
source_url: https://arxiv.org/html/2411.05990v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: e1fa03143509600c4b6bed28351e4333077d0506b1ce32ae8242662f79b14555
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 6.5 How does prompt affect the influence of negotiation?

Some people may want to ask can we use simple prompt engineering to control the effect of negotiation.

To investigate whether the observed negative impact of negotiation on player rationality can be mitigated through simple prompt engineering, we design six distinct prompts. The first three prompts emphasize caution regarding the other player’s statements and encourage the agent to critically evaluate trustworthiness. These prompts are intended to foster a more skeptical and analytical mindset during negotiations.
The remaining three prompts are formulated as commands, instructing the agent to make decisions independently without being influenced by the negotiation process. The objective of these prompts is to promote autonomy and self-reliance in the agent’s decision-making, potentially minimizing the negative effects of negotiation on rationality.

In our experiment, we incorporate the six designed prompts at the end of the entire action-making prompt for each game. This placement ensures that the prompts serve as a final reminder or instruction to the LLM-based agents, not affected by the length of the negotiation texts.

```
Prompt 1: Please carefully analyze the negotiation messages, think about
whether you can trust the other player’s message, and make your own decision.
```

```
Prompt 2: Please carefully analyze the negotiation messages and make your own
decision.
```

```
Prompt 3: Carefully analyze and think about whether you can trust the other
player’s message, and then make your own decision.
```

```
Prompt 4: You can choose your own choice regardless what the other player
says.
```

```
Prompt 5: You should make your own choice regardless what the other player
says.
```

```
Prompt 6: You must make your own choice regardless what the other player says.
```

![Refer to caption](https://arxiv.org/html/2411.05990v2/Fig/negotiation_prompt_round_pd.jpeg)


Figure 9: The effect of the 6 engineered prompts on Prisoner’s Dilemma game with different rounds of negotiation: 1-round, 2-round, and 3-round for the three rows

![Refer to caption](https://arxiv.org/html/2411.05990v2/Fig/negotiation_prompt_round_sh.jpeg)


Figure 10: The effect of the 6 engineered prompts on Stag Hunt game with different rounds of negotiation: 1-round, 2-round, and 3-round for the three rows

By comparing the performance of LLM-based agents across these six prompts, we aim to determine whether prompt engineering can effectively control the impact of negotiation on player rationality and improve decision-making outcomes in various game-theoretic scenarios. Figure [10](https://arxiv.org/html/2411.05990v2#S6.F10 "Figure 10 ‣ 6.5 How does prompt affect the influence of negotiation? ‣ 6 Detailed Observation on LLM’s Rationality ‣ Game-theoretic LLM:Agent Workflow for Negotiation Games") and Figure [10](https://arxiv.org/html/2411.05990v2#S6.F10 "Figure 10 ‣ 6.5 How does prompt affect the influence of negotiation? ‣ 6 Detailed Observation on LLM’s Rationality ‣ Game-theoretic LLM:Agent Workflow for Negotiation Games") illustrate the impact of the six designed prompts on the outcomes of Prisoner’s Dilemma and Stag Hunt games, respectively. In each figure, the six columns correspond to the specific prompts used, while the three rows represent the number of negotiation rounds between the two players before they decide on their actions.

By analyzing these figures, we can assess the effectiveness of each prompt in influencing the players’ decision-making processes and evaluate whether prompt engineering can mitigate the effects of negotiation on player’s choices as the number of negotiation round increases.

In observation, we can see the following situations:

1. 1.

   Prompt 1, 2, 3, and 4 do not significantly impact the distribution of strategies chosen by the LLM-based agents in both Prisoner’s Dilemma and Stag Hunt games. Even when these prompts explicitly ask the agents to consider the trustworthiness of the other player, they do not lead to a more rational strategy selection.
2. 2.

   The prompts have varying degrees of influence on the players’ decisions, with Prompt 5 and 6 exerting the most significant impact. In the Prisoner’s Dilemma, these prompts completely alter the distribution from a heavy focus on the dominated strategy (action 1, action 1) to the dominant strategy (action 2, action 2). In the Stag Hunt, Prompt 5 and 6 also change the distribution from the pareto optimal strategy (action 1, action 1) to a non-optimal strategy (action 2, action 2) or a mixture of strategies.
3. 3.

   The impact of the prompts can be gradually diminished as the number of negotiation rounds increases. For instance, in the Prisoner’s Dilemma, the distribution shifts more towards the dominated strategy as the number of negotiation rounds grows. Similarly, in the Stag Hunt, the distribution moves more towards the pareto optimal strategy as the number of negotiation rounds increases.

Based on the three observations, we can conclude that the use of engineered prompts does not genuinely enhance the rationality of the LLM-based agents in the Prisoner’s Dilemma and Stag Hunt games. The impact of the prompts on the agents’ decision-making process follows a similar trend in both games, and their influence is diminished as the number of negotiation rounds increases.

![Refer to caption](https://arxiv.org/html/2411.05990v2/negotiation_order_bs.png)


Figure 11: Will the fact that who starts the negotiation affect the result?
