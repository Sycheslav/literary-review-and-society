---
id: arxiv-2604-00487-prompts
type: material
title: 'Опубликованные разделы о промптах: Competition and Cooperation of LLM Agents in Games'
source_id: arxiv-2604-00487
source_url: https://arxiv.org/html/2604.00487v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 3093f10f67990d22f867d5c0aa29d9e414465a917608baa9c6312a989ab2e6ef
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## III Prompts to and Actions of LLM Agents

In all our experiments, we use Gemini Pro as foundational model for the game playing agents [[23](https://arxiv.org/html/2604.00487v2#bib.bib24)]. Other LLM models with long context windows produce similar results. Each agent is deployed in an isolated independent session in order to simulate a decentralized multi-agent environment and prevent any unintended context leakage. This ensures that Agent $i$ has no access to the internal Chain-of-Thought (CoT) reasoning, prompt history, or parameter valuations of Agent $j$. Because both the Cournot and the Resource Allocation games require simultaneous moves, the interaction is managed by a central environment coordinator. At round $t$, the coordinator asks each isolated agent individually for their action. Once all actions are collected, the allocation or price are computed and feedback to each agent’s session to initiate round $t+1$.

### III-A Myopic Play

A natural prompt would be to ask an LLM Agent to maximize its own profit:

System Prompt (Resource Allocation - Myopic):
  
You are Agent $i$ in a $N$ agents Resource Allocation Game. Objective: Maximize your Immediate Net Utility for THIS round only. Do not consider future rounds.
  
Parameters:
  
1. Utility Function: $U\_{i}(d\_{i})=V\cdot d\_{i}$
  
2. Allocation Rule: You receive resource $d\_{i}=x\_{i}/(x\_{i}+x\_{-i})$.
  
3. Net Profit Formula: $\pi\_{i}=(V\cdot x\_{i})/(x\_{i}+X\_{-i})-x\_{i}$
  
Thinking Step: Analyze the opponent’s bid for this round. Calculate your potential profit. Decide your next bid.

As one might expect, the agent would give its best response and repeated play would lead to the Nash equilibrium. We note that LLM outputs are random and small deviations are possible, but agents would all eventually converge to the Nash equilibrium.

### III-B Longer Horizons

The above prompt specifically instructs the agent to be myopic. For comparison, the next prompt instructs the agent to play over multiple rounds, using the Cournot game as example:

System Prompt (Cournot Game):
  
You are Agent $i$ in a $N$ agents Repeated Quantity Competition Game ($T$ Rounds). Objective: Maximize your Total Cumulative Net Utility over all rounds.
  
Parameters:
  
1. Valuation: $b\_{i}$, Total Quantity: $X=x\_{i}+X\_{-i}$
  
2. Net Profit Formula: $\pi\_{i}=b\_{i}\cdot x\_{i}-x\_{i}\cdot X$
  
Thinking Step: Analyze the opponent’s past move. Calculate your potential profit. Decide your next quantity.

In this case, agents recognize the repeated nature of the game, but tend to change their actions very slowly. In our experimentation with both games, the agents face the exploration-exploitation dilemma and tend to be conservative in their explorations. The exact behavior depends on the (random) initial action of the agents.

The above prompts differ mainly in the number of rounds. A natural question would be how agents would behave if this information is not given. It turns out the agents act as if they are randomly interpolating between myopic and long-term play, leading to instabilities. In addition, this behavior is highly dependent on which LLM model is used.

### III-C Cooperative Play

We are more interested in whether the agents could cooperate with each other without explicitly communicating. We want a prompt that provides some mathematical insight without being too heavy handed. It should endow the LLM with the necessary working memory and Theory of Mind (ToM) scaffolding to explore strategic actions [[24](https://arxiv.org/html/2604.00487v2#bib.bib22)]. An example of the prompt we used for the resource allocation game is:

System Prompt (Agent 1 - Resource Allocation Collaboration):
  
You are Agent 1 in a Repeated Resource Allocation Game (10 Rounds). Objective: Maximize your Total Cumulative Net Utility.
  
Parameters:
  
1. Utility Function: $U\_{1}(d\_{1})=2\cdot d\_{1}$
  
2. Allocation Rule: You receive resource $d\_{1}=x\_{1}/(x\_{1}+x\_{-1})$.
  
3. Net Utility Formula: $P\_{1}=(2\cdot x\_{1})/(x\_{1}+x\_{-1})-x\_{1}$
  
Key Insight for Collaboration:
  
If you and your opponents lower your bids by the same factor, your resource allocation remains the same, but your cost drops significantly. This creates much higher Net Utility for all of you.
  
Your Strategy:
  
- The Goal: Establish a low-bid cooperation state to save money.
  
- The Signal: Try bidding significantly lower than the Nash Equilibrium to signal your intent to cooperate. (Note: The opponent had not seen your bid of [X] yet when they made this bid. They will see it in the next round. You might want to hold your signal for one round.)
  
- The Reaction: If the opponent bids low, match them. If they exploit you, punish them by bidding high in the next round.
  
Thinking Step: Analyze the opponent’s past move. Calculate your potential profit. Decide your next bid.

Figure [1](https://arxiv.org/html/2604.00487v2#S3.F1 "Fig. 1 ‣ III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games") shows that the agents are in fact able to collaborate in this case. We visualize this by looking at the feasible set of all possible payoffs and study where the agents end up with respect to this region. As shown in Fig. [1](https://arxiv.org/html/2604.00487v2#S3.F1 "Fig. 1 ‣ III-C Cooperative Play ‣ III Prompts to and Actions of LLM Agents ‣ Competition and Cooperation of LLM Agents in Games"), the Nash Equilibrium is far from the Pareto front, reflecting the theoretical results that selfish behavior can lead to loss of efficiency [[13](https://arxiv.org/html/2604.00487v2#bib.bib3)]. Then the LLM agents are prompted as above, and the colored dots show their payoff after successive runs (each consisting of 10 rounds). The agents proportionally scale down their bids and approach the Pareto front and eventually settle on the social welfare maximization solution. Hence, this experiment shows that LLMs can internalize systemic efficiency and cooperate to settle into near-optimal market states when provided with appropriate strategic context.1

![Refer to caption](https://arxiv.org/html/2604.00487v2/payoff_space_bz.png)


Fig. 1: Payoff in a 2-Agent case. The gray cloud represents the set of all feasible payoffs given positive bids, with the red line indicating the Pareto Front. The Nash Equilibrium (red star) is located well within the inefficient interior. The three colored dots (yellow, light green, dark green) represent the final converged outcomes of three sequential experimental trials. They illustrate how the agent eventually learn to cooperate and reach the social welfare solution.

We can gain some understanding of the agent behaviors by asking the agents about their chain-of-thoughts. During one of the rounds, Agent 1 ($b\_{1}=2$) aggressively dropped its bid to $0.1$, while Agent 2 dropped to $0.2$. Going into Round 3, the LLM explicitly computes the long-term benefits of holding its cooperative signal rather than retaliating against the slightly higher bid:

LLM Chain-of-Thought (Agent 1, Round 3 Strategy):
  
Results Analysis: Even though the opponent bid more than me (0.2 vs. 0.1), the ”Key Insight” for collaboration is already paying off. Because the total pool of bids dropped significantly from Round 1, my net utility actually increased despite receiving a smaller share of the resource. My profit of 0.566 is higher than the 0.50 I was getting during the Round 1 stalemate.
  
Opponent Assessment: The opponent has signaled they are willing to deviate from the Nash Equilibrium (0.5 $\to$ 0.2). They haven’t seen my 0.1 bid yet (per the game rules), but they will see it now. Once they see I am willing to go as low as 0.1, they will likely realize that if they match me at 0.1, we both walk away with a profit of 0.90.
  
The Move (Hold the Line): I will stay at 0.1. It reinforces my commitment to the low-bid state and invites them to ”meet me” at 0.1 to equalize our profits. Even if they stay at 0.2, I am still making more profit than I was at the start of the game.
  
Output: $x\_{1}=0.1$
