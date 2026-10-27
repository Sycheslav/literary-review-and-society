---
id: arxiv-2402-12348-prompts
type: material
title: 'Опубликованные разделы о промптах: GTBench: Uncovering the Strategic Reasoning Limitations of LLMs via Game-Theoretic
  Evaluations'
source_id: arxiv-2402-12348
source_url: https://arxiv.org/html/2402.12348v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 6aa9d6d0d5b56d0f8c8b0ff9bbe5d339adbcd11ffc6e32207e715166d806ad5d
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix A5 Prompt and Protocol

### A5.1 Modular Prompt Structure

When prompting LLMs to generate the next action during the course of a game, the prompt is composed of four individual components, to make sure all the participants access the same observations and information from environments:

System Prompt provides general guidance on how the LLMs should perform.

Head Prompt provides the general background and rules of the game.

Observation Prompt is formatted by a fixed game-wise template, providing sufficient observations from the environment regarding the current gaming state, to make LLMs capable of making decisions. The following provides the template used in the Blind Auction environment:

Your budget is $<$valuation$>$. Your bid must be strictly lower than or equal to $<$valuation$>$. Your opponent also has an expected valuation and you do not know it.
  
The legal actions are: $<$legal\_moves$>$.

Here $<$valuation$>$ and $<$legal\_moves$>$ are variables and are obtained from a unified $<$observation$>$ object. In this way, all the participants are guaranteed to assess the same information.

Reasoning Prompt guides the LLM’s generation process, e.g., “Let’s think step by step” for the CoT Agent.

### A5.2 System Prompt

The system prompt is the initial text or context provided by the user to prompt the model to generate a response. This prompt serves as the starting point for the model to understand the user’s query or input and generate a relevant and coherent response based on the provided context.
We use the same system prompt for different tasks in our work. Our system prompt is presented as follows:

System Prompt: You are a powerful gaming agent who can make proper decisions to beat the user in gaming tasks. You are a helpful assistant that strictly follows the user’s instructions. You must answer your questions by choosing one of the legal moves given by the user!

### A5.3 Head Prompt

The head prompt is the text that explains the rules of the games to the LLMs. In our work, we designed different prompts for each of the games.

- •

  Tic-Tac-Toe

  Head Prompt: Tic Tac Toe is a two-player game played on a grid. Players take turns marking a space with their respective symbols. The goal is to get 3 of one’s own symbols in a row, either horizontally, vertically, or diagonally, before the opponent does. If all nine squares are filled and no player has three in a row, the game is a draw. The Tic Tac Toe game is played on a 3 by 3 grid, with the winning length as 3.
  Each move is represented by a string consisting of two parts: the column (C) and the row (R), in that order. For instance, C1R2 means the movement at the position of the first column and the second row of the grid. You are playing this game with the user (opponent).
- •

  Iterated Prisoner’s Dilemma

  Head Prompt: You and your partner are in the Prisoner’s Dilemma situation.
  Specifically, if you $<$Testify$>$ against your partner and your partner remains $<$Silent$>,$ you will go free while your partner will get 3 years in prison on the main charge.
  If you remain $<$Silent$>$ but your partner $<$Testify$>$ against you, you will serve 3 years in prison and your partner will be set free.
  If you and your partner $<$Testify$>$ against each other, you and your partner will each serve 2 years.
  If both you and your partner remain $<$Silent$>$, you and your partner will each serve 1 year.
- •

  Breakthrough

  Head Prompt: Breakthrough is a two-player game played on a rectangular board. Players take turns moving their pieces, which can move one space straight or diagonally forward if the target square is empty. A piece can also move diagonally forward to capture an opponent’s piece. Capturing is optional, and a player can only capture one piece per turn. The goal is to be the first to reach the opponent’s home row, the farthest row from the player. If all of a player’s pieces are captured, they lose. The game does not allow draws, as pieces can only move forward or be captured. The Breakthrough board is identified by columns labeled starting from A (from left to right) and rows numbered 1 to 8 (from bottom to top). The intersection of a column and a row specifies a unique square on the board.
- •

  Connect Four

  Head Prompt: Connect 4 is a two-player connection board game, where the players choose a color and then take turns dropping colored discs into a vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one’s own discs. You are a gaming agent who aims to beat me in Connect 4 games.
  Each move is represented by a string consisting of two parts: the column (C) and the row (R), in that order. For instance, C1 means the first column.
- •

  First-price sealed-bid auction

  Head Prompt: A first-price sealed-bid auction (FPSBA) is a common type of auction. It is also known as the blind auction.
  In this type of auction, all bidders simultaneously submit sealed bids so that no bidder knows the bid of any other participant.
  The highest bidder pays the price that was submitted.

  Each action is represented by $<$$x$$>$ where $x$ refers to the bid.
- •

  Kuhn Poker

  Head Prompt: Kuhn poker is a simple model zero-sum two-player imperfect-information game, amenable to a complete game-theoretic analysis. In Kuhn poker, the deck includes only three playing cards: a King (K), a Queen (Q), and a Jack (J).
  One card is dealt to each player, and the third is put aside unseen. The players take turns either $<$Bet$>$ to match the bet raised by the opponent or $<$Pass$>$ to concede the game.

  If a player bets, the other player must either call the bet by matching it or fold by conceding the game. If both players pass, the game is over, and the player with the higher-ranking card wins. The card rankings are as follows: King (K) $>$ Queen (Q) $>$ Jack (J).

  You are playing Kuhn poker with the opponent. The actions are denoted by $<$Bet$>$ and $<$Pass$>$.
- •

  Liar’s Dice

  Head Prompt: Liar’s Dice is a game of bluffing and probability, played with two players and each player has 1 dice.
  During each turn, a player can either bid a higher quantity of any particular face value or
  the same quantity of a higher face value than the previous bid.
  Each player tries to outbid their opponent without being caught in a lie.
  The move in this game is denoted in $<$$x$ dices, $y$ value$>$, meaning there are at least $x$ dices with face values as $y$.
- •

  Pig

  Head Prompt: Pig is a fast-paced dice game where players risk accumulating points with each roll but risk losing them all if they roll a 1. Each player must decide when to stop rolling and bank their points, aiming to be the first to reach 100 points.
  You are playing Pig with the other.
- •

  Nim

  Head Prompt: In Nim, a strategic game with a set of four piles containing 1, 3, 5, and 7 matches respectively,
  players aim to avoid taking the last match. During each turn, a player may take any number of matches from a single pile, but must take at least one and cannot exceed the number remaining in that pile.
  The objective is to force the opponent to pick up the final match, thereby winning the game.

  The action is presented in $<$pile:$x$, take:$y$$>$, which means take $y$ match(es) from the $x$-th pile.
- •

  Negotiation

  Head Prompt: You are negotiating the division of Peppers, Strawberries, and Cherries with the opponent. Different values these items hold for both you and your opponent. The process is structured into two stages per round: the proposal stage and the utterance stage.

### A5.4 Observations

Our research team has developed a range of observation prompts tailored to different types of games. The list of these prompts is presented below.

- •

  Tic-Tac-Toe

  Observation Prompt: Your opponent has finished actions: $<$opponent\_moves$>$. You have finished actions: $<$self\_moves$>$.
- •

  Iterated Prisoner’s Dilemma

  Observation Prompt: You have been through this situation in the past and here are the decisions you and your partner made: (In the $idx+1$ th round, you decided to $<$move$>$ and your opponent decided to $<$opponent\_move$>$) \* $n$ round
- •

  Breakthrough

  Observation Prompt: The board now looks like : $<$board\_preview$>$. Among which, the letter ‘b’ represents a black piece, while the letter ‘w’ represents a white piece. And the character “.” represents vacant space. The numbers in the board are the indexes of the rows. Your opponent has finished actions: $<$opponent\_moves$>$.You have finished actions: $<$self\_moves$>$.
- •

  Connect Four

  Observation Prompt: Your opponent has finished actions: $<$opponent\_moves$>$. You have finished actions: $<$self\_moves$>$.
- •

  First-price sealed-bid auction

  Observation Prompt:  Now, you are in an auction with an opponent. You want to win the object and at the same time, your budget is $<$valuation$>$. Your bid must be strictly lower than or equal to $<$valuation$>$.
  You shall bid wisely against your opponent.
  Your opponent also has an expected valuation and you do not know it.
- •

  Kuhn Poker

  Observation Prompt: 
  In this match, your card is $<$card$>$.
  Here are the past moves in this match: $<$self\_moves$>$, $<$opponent\_moves$>$.
- •

  Liar’s Dice

  Observation Prompt:  Currently, the face value of your dice is $<$face\_value$>$. Last time, the opponent called $<$opponent\_last\_action$>$.
  You are playing the Liar’s Dice with another opponent. Therefore, there are only two dice in total.
- •

  Pig

  Observation Prompt: Right now, your current score is $<$agent\_current\_score$>$ and your opponent’s current score is $<$opponent\_current\_score$>$. In this turn, you have earned $<$turn\_total\_score$>$ score.
- •

  Nim

  Observation Prompt: Currently, the 1st pile has $<$piles[0]$>$ match(es),
  the $2$nd pile has $<$piles[1]$>$ match(es),
  the $3$rd pile has $<$piles[2]$>$ match(es),
  $4$th pile has $<$piles[3]$>$ match(es).
- •

  Negotiation
  We proposed two different prompts for the “proposal” turn and “utterance” turn respectively.

  For the “proposal” turn, we have:

  Observation Prompt: 
  Now, the opponent propose to take $<$opponent\_proposal\_take[0]$>$ peppers, $<$opponent\_proposal\_take[1]$>$ strawberries, and $<$opponent\_proposal\_take[2]$>$ cherries from the item pool.
  Last time, the utterance of the opponent was to take $<$opponent\_utterance\_take[0]$>$ peppers, $<$opponent\_utterance\_take[1]$>$ strawberries, and $<$opponent\_utterance\_take[2]$>$ cherries from the item pool.

  Now, it is your decision.
  If you find the proposal raised by the opponent is acceptable, you should output Agree.
  Otherwise, you should output your proposal in the format $<$Proposal: [$a$, $b$, $c$]$>$.

  For the “utterance” turn, we have:

  Observation Prompt: 
  Last time, you propose to take $<$agent\_proposal\_take[0]$>$ peppers, $<$agent\_proposal\_take[1]$>$ strawberries, and $<$agent\_proposal\_take[2]$>$ cherries from the item pool.
  Last time, the utterance of the opponent was to take $<$opponent\_utterance\_take[0]$>$ peppers, $<$opponent\_utterance\_take[1]$>$ strawberries, and $<$opponent\_utterance\_take[2]$>$ cherries from the item pool.

  Now, it is your turn to provide your utterance regarding the division of items. The utterance is what you want to tell your opponent and does not mean your real intent. You should output your utterance in the format $<$Utterance: [$a$, $b$, $c$]$>$.

### A5.5 Reasoning Prompt

- •

  Prompt agent: Prompt agent does not necessitate the use of LLMs to apply any predetermined strategy prior to decision-making. Rather, it simply requests LLMs for inference and subsequently provides the outcome.

  You must choose a legal action to set up advantages.
  Your output must be in the following format:

  Action:
  Your action wrapped with $<>$, i.e., $<$format$>$

  Please return your answer without explanation!
- •

  CoT agent:  CoT agent makes LLMs consider the given observation first, then give out the action according to its thinking.

  First think about your current situation, then you must choose one action from legal actions to set up advantages.

  Your output must be in the following format strictly:

  Thought:
  Your thought.

  Action:
  Your action wrapped by $<>$, i.e., $<$format$>$

  Remember, you can only choose one move from the legal actions.
- •

  SC-CoT agent: 
  SC-CoT agent is an advanced version of the CoT agent. It obtains actions from multiple CoT trajectories. It employs the same prompt templates as in the CoT agent.

  First think about your current situation, then you must choose one action from legal actions to set up advantages.

  Your output must be in the following format strictly:

  Thought:
  Your thought.

  Action:
  Your action wrapped by $<>$, i.e., $<$format$>$

  Remember, you can only choose one move from the legal actions.
- •

  ToT agent:
  we follow the text generation task implementation in the official codebase of ToT 14. Specifically, the ToT is factorized into 1). candidate thought generation, 2). thought voting, 3). candidate action generation, 4). action voting:

  Here we provide the basic prompt template used in ToT.

  Step Prompt: First think about your current situation,
  then choose one move from legal positions to set up advantages.

  Your output should be of the following format:

  Thought:

  Your thought.

  Move:

  Your action wrapped with $<$$>$, e.g., $<$format$>$

  After executing step prompts in a breath-first search manner, we utilize the original ToT vote prompt:

  Vote Prompt: Given an instruction and several choices, decide which choice is most promising. Analyze each choice in detail, then conclude in the last line "The best choice is s", where s the integer id of the choice.

### A5.6 Sanity Check

To evaluate the effectiveness of our framework, we perform a sanity check by calculating the completion rates of each game. The completion rates are calculated as $\frac{50}{N}$ where $N$ is the number of matches that will take to achieve 50 valid matches. Here, a valid match means all the participants will always generate legal moves at each turn of the match. Results are summarized in [Table A7](https://arxiv.org/html/2402.12348v2#A5.T7 "In A5.6 Sanity Check ‣ Appendix A5 Prompt and Protocol ‣ GTBench: Uncovering the Strategic Reasoning Limitations of LLMs via Game-Theoretic Evaluations").
We show that all the LLM agents achieve $\geq 90\%$ completion rate, showing that the prompts are properly configured and LLMs are capable of following instructions to finish the game.

Table A7: Sanity check. The completion rates of LLM agents over all the games.

Backbone LLM
Reasoning
Tic Tac Toe
Connect 4
Breakthrough
Liar’s Dice
Blind Auction
Negotiation
Kuhn Poker
Nim
Pig
Prisoner’s Dilemma
avg

GPT-3.5-turbo
Prompt
100%
100%
98%
98%
100%
100%
100%
100%
100%
100%
100%

CoT
100%
100%
98%
100%
100%
100%
100%
98%
100%
100%
100%

SC-CoT
100%
100%
100%
98%
100%
100%
100%
100%
100%
100%
100%

Llama-2-70b-chat
Prompt
100%
100%
100%
100%
100%
100%
100%
100%
100%
100%
100%

CoT
81%
98%
64%
100%
89%
69%
100%
100%
100%
98%
90%

SC-CoT
89%
91%
81%
100%
94%
68%
100%
100%
100%
100%
92%

CodeLlama-34b-Instruct
Prompt
98%
100%
89%
100%
100%
100%
100%
100%
100%
100%
99%

CoT
82%
100%
58%
100%
100%
78%
100%
100%
100%
100%
92%

SC-CoT
71%
100%
71%
100%
100%
77%
100%
100%
100%
100%
92%

Mistral-7b-Orca
Prompt
98%
100%
98%
98%
100%
100%
100%
100%
100%
100%
99%

CoT
94%
98%
100%
100%
100%
100%
100%
100%
100%
100%
99%

SC-CoT
93%
100%
100%
100%
100%
100%
100%
100%
100%
100%
99%
