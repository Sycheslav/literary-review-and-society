---
id: arxiv-2602-16662-prompts
type: material
title: 'Опубликованные разделы о промптах: Evaluating Collective Behaviour of Hundreds of LLM Agents'
source_id: arxiv-2602-16662
source_url: https://arxiv.org/html/2602.16662v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: fde7658c2a06c8c582d41b0d53d942ddddab664431803c221b7684e1f2cd43c7
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.1. Prompt

The prompt for a model to produce a strategy description is produced by concatenating the game description and the task prompt.
Here, we provide the description for the Public Goods Game, the other games are similar.
For full details and all game prompts see our repository <https://github.com/willis-richard/emergent_llm>.

#### A.1.1. Game Description

```
GAME SPECIFICATION: N-Player Public Goods Game
PARAMETERS:
- n: number of players (integer, n \geq 2)
- r: number of rounds (integer, r > 1)
- k: multiplication factor (float, 1 < k < n)
GAME STRUCTURE:
- Type: Simultaneous-move, repeated game
- Rounds: r identical rounds
- Players: n players, indexed i \in {1, 2, ..., n}
ACTIONS PER ROUND:
Each player i has action set A_i = {C, D} where:
- C (Cooperate): Contribute endowment to community project
- D (Defect): Keep endowment privately
PAYOFF CALCULATION:
For player i in a single round:
\pi_i = (1 - c_i) + (k/n) × \sum(j=1 to n) c_j
where:
- c_i = 1 if player i plays C, c_i = 0 if player i plays D
- \sum(j=1 to n) c_j = total number of cooperators in the round
PAYOFF MATRIX INTERPRETATION:
- Private payoff from keeping: 1 - c_i
- Share of public good: (k/n) × total_contributions
EXAMPLE CALCULATIONS (n=6, k=2):
1. All players play D: \pi_i = 1 + (2/6) × 0 = 1 for all i
2. All players play C: \pi_i = 0 + (2/6) × 6 = 2 for all i
3. 3 players play C, 3 play D:
   - If player i played C: \pi_i = 0 + (2/6) × 3 = 1
   - If player i played D: \pi_i = 1 + (2/6) × 3 = 2
TOTAL GAME PAYOFF:
Total payoff for player i over r rounds = \sum(t=1 to r) \pi_i,t
```

#### A.1.2. Task Prompt

```
Assumptions:
- Common knowledge: all players know the game rules, parameters and payoff structure.
- Aggregate observation: the players are anonymous. After each round, you observe how many of your opponents cooperated, but not which ones.
- No communication: players cannot communicate or otherwise share information.
- Opponents are independent strategies from other AI systems — no shared norms or predetermined coordination.
Design a <attitude> strategy for this game that only depends on the game parameters<state>. Your strategy should be adaptive and robust to a wide range of opponent behaviours.
1. Specify decision rules - When exactly do you cooperate vs defect?
2. Handle edge cases - What do you do in the first round, last round, etc.?
3. Be <attitude> - Clearly align with the <attitude> mindset.
```

where <attitude> is replaced with a synonym ([Section 4.1](https://arxiv.org/html/2602.16662v2#S4.SS1 "4.1. Strategy Generation ‣ 4. Method ‣ Evaluating Collective Behaviour of Hundreds of LLM Agents")), and <state> reads "and history" for the PGG and CRD, and ", history and state" for the CPR.
