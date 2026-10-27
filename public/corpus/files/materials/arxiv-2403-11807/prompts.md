---
id: arxiv-2403-11807-prompts
type: material
title: 'Опубликованные разделы о промптах: How Far Are We on the Decision-Making of LLMs? Evaluating LLMs'' Gaming
  Ability in Multi-Agent Environments'
source_id: arxiv-2403-11807
source_url: https://arxiv.org/html/2403.11807v7
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 2af1d217f29e8bb091836d58dc25b17abe25e605a904fb6cd824071c716bc453
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Prompt Templates

We also investigate the impact of prompt phrasing on model performance.
We leverage GPT-4 to rewrite our default prompt templates, generating four additional versions.
We perform a manual checking process on the generated versions to ensure GPT-4’s adherence to game rules without altering critical data.
The prompt templates can be found in §[D](https://arxiv.org/html/2403.11807v7#A4 "Appendix D Examples of GPT-4-Rephrased Prompts ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments").
We plot the results of using these templates in Fig. [6](https://arxiv.org/html/2403.11807v7#A6.F6 "Figure 6 ‣ F.3 Robustness: Prompt Templates ‣ Appendix F Detailed Results ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments") and record the quantitative scores in Table [6](https://arxiv.org/html/2403.11807v7#A6.T6 "Table 6 ‣ F.3 Robustness: Prompt Templates ‣ Appendix F Detailed Results ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments").
Notably, we find that prompt wording can significantly affect performance, as shown by the high variances in the “Public Goods Game” ($11.5$), “Diner’s Dilemma” ($23.7$), and “Pirate Game” ($14.7$).

Answer to RQ1:
GPT-3.5 exhibits consistency in multiple runs and shows robustness against different temperature settings. However, inappropriate prompt designs resulting from potential misinformation during rephrasing can significantly impair performance.

## Appendix C Details about Prompts

### C.1 Design Methodology

We adopt a cohesive approach to ensure the prompt design is systematic and not arbitrary.
Game descriptions are gathered from verified sources, including academic papers referenced in §[2](https://arxiv.org/html/2403.11807v7#S2 "2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments") and Wikipedia entries.
Using these descriptions, we instruct GPT-4 to generate prompts to guide LLMs in engaging in the specified games.
These prompts are structured to encompass four essential elements: the rules of the game, objectives for the players, a template for announcing game outcomes (for displaying historical results), and instructions for formatting responses in JSON.
A manual checking process is conducted to ascertain that GPT-4’s comprehension of the game descriptions is correct.
The prompts are detailed in the rest part of this section.

### C.2 Cooperative Games

| Guess 2/3 of the Average | |
| --- | --- |
| System | You are participating in a game played by $N$ players over $K$ rounds. |
|  | Game Rules: |
|  | 1. Each player selects an integer number between $MIN$ and $MAX$, inclusive. |
|  | 2. After all selections are made, the average of all chosen numbers is calculated. |
|  | 3. The target number is $R$ of this average. |
|  | 4. The winner is the player(s) who selected a number closest to the target number. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | Average Number Chosen: $M\_{I}$ |
|  | Target Number ($R$ of Average): $T\_{I}$ |
|  | Winning Number: $W\_{I}$ |
|  | You chose: |
| Assistant | {“chosen\_number”: “$C\_{IJ}$”} |
| User | [Congratulation you won]/[Unfortunately you lost]. |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to choose a number that you believe will be closest to $R$ of the average of all numbers chosen by players, including your selection. |
|  | Please provide your chosen number in the following JSON format: |
|  | {“chosen\_number”: “integer\_between\_$MIN$\_and\_$MAX$“}. |

[[BACK TO GAME DESCRIPTION]](https://arxiv.org/html/2403.11807v7#S2.SS1 "2.1 Cooperative Games ‣ 2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

[[BACK TO VANILLA EXPERIMENT]](https://arxiv.org/html/2403.11807v7#S3.SS1 "3.1 Cooperative Games ‣ 3 GAMA-Bench Scoring Scheme ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

| El Farol Bar | |
| --- | --- |
| System | You are participating in a game played by $N$ players over $K$ rounds. |
|  | Game Rules: |
|  | 1. Every round, you and the other players decide independently whether to go to a bar. |
|  | 2. If equal to or less than $R$ of the players go to the bar, everyone who goes has more fun than staying home, receiving a utility of $MAX$. |
|  | 3. If more than $R$ of the players go to the bar, everyone who goes has less fun than staying home, receiving a utility of $MIN$. |
|  | 4. Everyone who stays home receives a utility of $HOME$. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | (Only for Explicit) $G\_{I}$ players went to the bar, while $S\_{I}$ players stayed home. $G\_{I}/N$, which is [more]/[equal to or less] than $R$ of the players went to the bar. |
|  | It was [less]/[more] fun to go to the bar this round. |
|  | You chose: |
| Assistant | {“decision”: “$D\_{IJ}$”} |
| User | You gained $G\_{IJ}$. |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to maximize your fun. Choose to go to the bar when you predict fewer than $R$ of the players will go, and choose to stay home otherwise. |
|  | Please provide your decision in the following JSON format: |
|  | {“decision”: “go\_or\_stay”}. |


| Divide the Dollar | |
| --- | --- |
| System | You are participating in a game played by $N$ players over $K$ rounds. |
|  | Game Rules: |
|  | 1. You are dividing $G$ golds. Each player independently proposes a bid. |
|  | 2. If the sum of all bids does not exceed $G$, each player receives their bid amount. |
|  | 3. If the sum exceeds $G$, all players receive nothing. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | Your bid amount was: |
| Assistant | {“bid\_amount”: “$B\_{IJ}$”} |
| User | The sum of all bids was $S\_{I}$. |
|  | The sum [does not exceed]/[exceeds] $G$. |
|  | You received [$B\_{IJ}$]/[$0$] golds. |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to maximize your individual gain without causing the total sum of bids to exceed $G$ golds. |
|  | Please provide your bid amount in the following JSON format: |
|  | {“bid\_amount”: “integer\_between\_0\_and\_$G$”}. |

[[BACK TO GAME DESCRIPTION]](https://arxiv.org/html/2403.11807v7#S2.SS1 "2.1 Cooperative Games ‣ 2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

[[BACK TO VANILLA EXPERIMENT]](https://arxiv.org/html/2403.11807v7#S3.SS1 "3.1 Cooperative Games ‣ 3 GAMA-Bench Scoring Scheme ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

### C.3 Betraying Games

| Public Goods Game | |
| --- | --- |
| System | You are participating in a game played by $N$ players over $K$ rounds. |
|  | Game Rules: |
|  | 1. In each round, you, as a player, must decide how many of your private tokens you wish to contribute secretly to the public pot. |
|  | 2. The total tokens in this pot will be multiplied by the factor $R$ to create the “public good” payoff. |
|  | 3. This payoff will then be evenly divided among all players, regardless of their individual contribution. |
|  | 4. Any tokens you do not contribute will be retained in your private collection. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | Contributed tokens of each player: $C\_{I1},C\_{I2},\cdots,C\_{IN}$ |
|  | You contributed: |
| Assistant | {“tokens\_contributed”: “$C\_{IJ}$”} |
| User | Tokens in the public pot: $S\_{I}$ |
|  | Your gain: $g\_{IJ}$ |
|  | Your tokens after round $I$: $T\_{IJ}$ |
|  | Tokens of each player after round $I$: $T\_{I1},T\_{I2},\cdots,T\_{IN}$ |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to maximize your total token count by the end of the game. Currently you have $T\_{I-1J}$ tokens. You need to decide the number of tokens to be contributed to the public pot. |
|  | Please provide the number of tokens in the following JSON format: |
|  | {“tokens\_contributed”: “integer\_between\_0\_and\_$T\_{IJ}$”} |


| Diner’s Dilemma | |
| --- | --- |
| System | You are participating in a game played by $N$ players over $K$ rounds. |
|  | Game Rules: |
|  | 1. Each player must choose to order either a costly dish or a cheap dish. |
|  | 2. The price of the costly dish is $P\_{h}$. The price of the cheap dish is $P\_{l}$. |
|  | 3. The costly dish brings you a utility of $U\_{h}$. The cheap dish brings you a utility of $U\_{l}$. |
|  | 4. The costly dish is tastier than the cheap dish, but not sufficiently to justify its price when dining alone. |
|  | 5. At the end of each round, the total cost of all dishes ordered is split equally among all players. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | $N\_{h}$ people chose the costly dish, while $N\_{l}$ chose the cheap dish. |
|  | The total cost is $S\_{I}$. You need to pay $C\_{I}$. |
|  | You chose: |
| Assistant | {“chosen\_dish”: “$D\_{IJ}$”} |
| User | Your utility is $u\_{IJ}$. |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to maximize your overall satisfaction, balancing the quality of the dish and the cost shared. |
|  | Please provide your chosen dish in the following JSON format: |
|  | {“chosen\_dish”: “costly\_or\_cheap”} |

[[BACK TO GAME DESCRIPTION]](https://arxiv.org/html/2403.11807v7#S2.SS2 "2.2 Betraying Games ‣ 2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

[[BACK TO VANILLA EXPERIMENT]](https://arxiv.org/html/2403.11807v7#S3.SS2 "3.2 Betraying Games ‣ 3 GAMA-Bench Scoring Scheme ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

| Sealed-Bid Auction | |
| --- | --- |
| System | You are participating in a game played by $N$ players over $K$ rounds. |
|  | Game Rules: |
|  | 1. Each player has a private valuation for the item in each round. |
|  | 2. Without knowing the bids and valuations of other players, each player submits a written bid for the item. |
|  | 3. The highest bidder wins the item and pays the price of the [highest]/[second highest] bid. |
|  | 4. If you win, your utility for that round is your valuation minus the price paid. If you lose, your utility is zero. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | Your valuation for this round’s item was $v\_{IJ}$. |
|  | Your bid was: |
| Assistant | {“bid”: “$b\_{IJ}$”} |
| User | The winning bid was: $W\_{I}$. |
|  | The price paid was: $P\_{I}$. |
|  | You [won]/[lost]. Your utility is [$u\_{IJ}$]/[0]. |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to maximize your total utility. Your valuation for this round’s item is $v\_{IJ}$. |
|  | Please provide your bid in the following JSON format: |
|  | {“bid”: “integer\_between\_0\_and\_$v\_{IJ}$”} |

[[BACK TO GAME DESCRIPTION]](https://arxiv.org/html/2403.11807v7#S2.SS2 "2.2 Betraying Games ‣ 2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

[[BACK TO VANILLA EXPERIMENT]](https://arxiv.org/html/2403.11807v7#S3.SS2 "3.2 Betraying Games ‣ 3 GAMA-Bench Scoring Scheme ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

### C.4 Sequential Games

| Battle Royale | |
| --- | --- |
| System | You are participating in a game played by $N$. |
|  | Game Rules: |
|  | 1. You are in a survival game where only one can survive and win. |
|  | 2. Players take turns shooting at others in a predetermined order based on their hit rates, from the lowest to the highest. |
|  | 3. Players’ names and hit rates ranked by shooting order are {“$ID\_{1}$”: “$HIT\_{1}$”, “$ID\_{2}$”: “$HIT\_{2}$”, $\cdots$, “$ID\_{N}$”: “$HIT\_{N}$”}. You are $ID\_{J}$. Your hit rate is $HIT\_{J}$. You are the $RANK\_{J}$-th to shoot. |
|  | 4. You have an unlimited number of bullets. |
|  | 5. You may choose to intentionally miss your shot on your turn. |
|  | $\cdots$ |
| User | Game Results for Round $I$: |
|  | Your action: |
| Assistant | (Only for the player itself) {“target”: “$t\_{IJ}$”} |
| User | $NAME\_{J}$ [intentionally missed the shot]/[shot at $t\_{IJ}$ and hit]/[shot at $t\_{IJ}$ but missed]. |
|  | There are $N\_{I}$ players left. |
|  | $\cdots$ |
| User | Now round $I$ starts. |
|  | Your goal is to eliminate other players to survive until the end and win the game. The remaining players’ names and hit rates ranked by shooting order are: {“$ID\_{1}$”: “$HIT\_{1}$”, “$ID\_{2}$”: “$HIT\_{2}$”, $\cdots$, “$ID\_{N}$”: “$HIT\_{N}$”}. You are $ID\_{J}$. Your hit rate is $HIT\_{J}$. You are the $RANK\_{J}$-th to shoot. Please decide whether to shoot at a player or intentionally miss. |
|  | Please provide your action in the following JSON format: |
|  | {“target”: “playerID\_or\_null”} |

[[BACK TO GAME DESCRIPTION]](https://arxiv.org/html/2403.11807v7#S2.SS3 "2.3 Sequential Games ‣ 2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

[[BACK TO VANILLA EXPERIMENT]](https://arxiv.org/html/2403.11807v7#S3.SS3 "3.3 Sequential Games ‣ 3 GAMA-Bench Scoring Scheme ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

| Pirate Game | |
| --- | --- |
| System | You are participating in a game played by $N$. |
|  | Game Rules: |
|  | 1. You are pirates who have found $G$ gold coins. You are deciding how to distribute these coins among yourselves. |
|  | 2. The pirates will make decisions in strict order of seniority. You are the $RANK\_{J}$-th most senior pirate. |
|  | 3. The most senior pirate proposes a plan to distribute the $G$ gold coins. |
|  | 4. All pirates, including the proposer, vote on the proposed distribution. |
|  | 5. If the majority accepts the plan, each pirate receives the gold coins as the most senior pirate proposed. |
|  | 6. If the majority rejects the plan, the proposer is thrown overboard, and the next senior pirate proposes a new plan. |
|  | 7. The game ends when a plan is accepted or only one pirate remains. |
|  | $\cdots$ |
| User | The $I$-th most senior pirate proposed a plan of {“$I$”: “$g\_{II}$”, “$I+1$”: “$g\_{II+1}$”, $\cdots$, “$I$”: “$g\_{IN}$”}. |
|  | $A\_{I}$ of $N$ pirates chose to accept the distribution. |
|  | You chose: |
| Assistant | {“decision”: “$D\_{I}J$”} |
| User | Less than half of the pirates accepted the plan. |
|  | The $I$-th most senior pirate was thrown overboard and eliminated from the game. The game continues. |
|  | $\cdots$ |
| User | Now the $I$-th most senior pirate needs to propose a plan. |
|  | Your primary goal is to survive. If you survive, your next goal is to maximize the number of gold coins you receive. You may also prefer to throw another pirate overboard if it does not negatively impact your other goals. |
| For voters | The proposed plan is {“$I$”: “$g\_{II}$”, “$I+1$”: “$g\_{II+1}$”, $\cdots$, “$I$”: “$g\_{IN}$”}. You will get $g\_{IJ}$ golds from this plan. |
|  | Please provide your decision on the current proposal in the following JSON format: |
|  | {“decision”: “accept\_or\_reject”} |
| For proposer | You need to propose a plan to divide $G$ golds. The proposed numbers must be all non-negative integers and sum up to $G$. |
|  | Please provide your proposal of the golds distributed to each pirate from the you to the $I$-th most senior in the following JSON format: |
|  | {”proposal”: {“$I$”: “$g\_{II}$”, “$I+1$”: “$g\_{II+1}$”, $\cdots$, “$I$”: “$g\_{IN}$”}} |

[[BACK TO GAME DESCRIPTION]](https://arxiv.org/html/2403.11807v7#S2.SS3 "2.3 Sequential Games ‣ 2 Introduction to Games ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

[[BACK TO VANILLA EXPERIMENT]](https://arxiv.org/html/2403.11807v7#S3.SS3 "3.3 Sequential Games ‣ 3 GAMA-Bench Scoring Scheme ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

## Appendix D Examples of GPT-4-Rephrased Prompts

§[4.1](https://arxiv.org/html/2403.11807v7#S4.SS1 "4.1 RQ1: Robustness ‣ 4 Beyond Default Settings ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments") involves testing the GPT-3.5 (0125)’s robustness against different prompt templates.
This section presents the prompts used in this analysis, namely Prompts V2 to V4, with V1 as the default, as detailed in §[C](https://arxiv.org/html/2403.11807v7#A3 "Appendix C Details about Prompts ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")).
We include only the prompts for the game “Guess 2/3 of the Average,” while the five prompt templates of seven other games can be found in our GitHub (<https://github.com/CUHK-ARISE/GAMABench>).

| Guess 2/3 of the Average (V2) | |
| --- | --- |
| System | You’re participating in a game involving $N$ participants and it spans across $K$ rounds. |
|  | The rules of the game are as follows: |
|  | 1. Every participant must choose an integer within the range of $MIN$ to $MAX$, both included. |
|  | 2. Once everyone has chosen their numbers, the mean of all these numbers is computed. |
|  | 3. The goal number becomes $R$ times this average. |
|  | 4. The person or people who picked a number closest to the goal number are declared the winners. |
|  | $\cdots$ |
| User | The outcomes of the game for Round $I$ are as follows: |
|  | The average number selected was $M\_{I}$ |
|  | The target number, which is $R$ of the average, is $T\_{I}$ |
|  | The number that won was $W\_{I}$. |
|  | Your selection was: |
| Assistant | {“chosen\_number”: “$C\_{IJ}$”} |
| User | [Congratulation you won]/[Unfortunately you lost]. |
|  | $\cdots$ |
| User | Commencing with round $I$. |
|  | Your target should be to select a number that in your opinion will align most closely with $R$ of the total average of all the player’s numbers selected, your choice included. |
|  | Please provide your chosen number in the following JSON format: |
|  | {“chosen\_number”: “integer\_between\_$MIN$\_and\_$MAX$”}. |

[[BACK TO RQ1]](https://arxiv.org/html/2403.11807v7#S4.SS1 "4.1 RQ1: Robustness ‣ 4 Beyond Default Settings ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

| Guess 2/3 of the Average (V3) | |
| --- | --- |
| System | You’re engaged in a game, involving $N$ participants across $K$ rounds. |
|  | Rules of the Game: |
|  | 1. An integer number is chosen by every player, within the range of $MIN$ and $MAX$, both numbers included. |
|  | 2. Once each player has chosen, the average is determined from all the selected numbers. |
|  | 3. The average is multiplied by $R$ to find the target number. |
|  | 4. The individual or individuals whose chosen number is nearest to the target number are declared the winners. |
|  | $\cdots$ |
| User | Results of Round $I$ Game: |
|  | Chosen number’s average: $M\_{I}$ |
|  | The target percentage ($R$ of average) is: $T\_{I}$ |
|  | The winning number is: $W\_{I}$. |
|  | You chose: |
| Assistant | {“chosen\_number”: “$C\_{IJ}$”} |
| User | [Congratulation you won]/[Unfortunately you lost]. |
|  | $\cdots$ |
| User | The commencement of round $I$ is now. |
|  | The objective is to select a number that you think will be nearest to $R$ times the average of all the digits chosen by the participants, your choice included. |
|  | Please provide your chosen number in the following JSON format: |
|  | {“chosen\_number”: “integer\_between\_$MIN$\_and\_$MAX$”}. |


| Guess 2/3 of the Average (V4) | |
| --- | --- |
| System | You’re involved in a game which brings $N$ participants together for $K$ rounds. |
|  | The guidelines of the game are as follows: |
|  | 1. All players have to pick a whole number anywhere from $MIN$ to $MAX$, both numbers included. |
|  | 2. The chosen numbers are then gathered and their mean is computed. |
|  | 3. The number to aim for, or the target number, is $R$ of the calculated average. |
|  | 4.The victorious player(s) are those whose chosen number is closest to the target number. |
|  | $\cdots$ |
| User | The outcomes for Round $I$ are as follows: |
|  | The average number selected was $M\_{I}$. The target number, which is $R$ times the average, was $T\_{I}$. The triumphant number was $W\_{I}$. |
|  | Your choice was: |
| Assistant | {“chosen\_number”: “$C\_{IJ}$”} |
| User | [Congratulation you won]/[Unfortunately you lost]. |
|  | $\cdots$ |
| User | The commencement of round $I$ is now. |
|  | You are tasked with selecting a number that, in your estimation, will be as close as possible to $R$ times the average of numbers chosen by all players, your own choice included. |
|  | Please provide your chosen number in the following JSON format: |
|  | {“chosen\_number”: “integer\_between\_$MIN$\_and\_$MAX$”}. |

[[BACK TO RQ1]](https://arxiv.org/html/2403.11807v7#S4.SS1 "4.1 RQ1: Robustness ‣ 4 Beyond Default Settings ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

| Guess 2/3 of the Average (V5) | |
| --- | --- |
| System | You will be engaging in a game that is played over $K$ rounds and includes a total of $N$ players. |
|  | The Instructions of the Game: |
|  | 1. Every player is supposed to pick an integer that is within the range of $MIN$ and $MAX$, both numbers inclusive. |
|  | 2. The median of all the numbers chosen by the players is then determined after all choices have been made. |
|  | 3. The number that players are aiming for is $R$ times the calculated average. |
|  | 4. The player or players who opt for the number closest to this target are declared the winners. |
|  | $\cdots$ |
| User | Results of the Game for Round $I$: |
|  | The chosen average number is: $M\_{I}$ |
|  | The target number ($R$ of Average) is: $T\_{I}$ |
|  | The number that won: $W\_{I}$. |
|  | Your selection was: |
| Assistant | {“chosen\_number”: “$C\_{IJ}$”} |
| User | [Congratulation you won]/[Unfortunately you lost]. |
|  | $\cdots$ |
| User | The commencement of round $I$ is now. |
|  | You are challenged to select a number which you conjecture will be nearest to $R$ times the mean of all numbers picked by the players, inclusive of your own choice. |
|  | Please provide your chosen number in the following JSON format: |
|  | {“chosen\_number”: “integer\_between\_$MIN$\_and\_$MAX$”}. |

[[BACK TO RQ1]](https://arxiv.org/html/2403.11807v7#S4.SS1 "4.1 RQ1: Robustness ‣ 4 Beyond Default Settings ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

### F.3 Robustness: Prompt Templates

Table 6: Quantitative results of playing the games using different prompt templates.

| Version | V1 (Default) | V2 | V3 | V4 | V5 | $Avg\_{\pm Std}$ |
| --- | --- | --- | --- | --- | --- | --- |
| Guess 2/3 of the Average | $65.4$ | $66.4$ | $47.9$ | $66.9$ | $69.7$ | $63.3\_{\pm 8.7}$ |
| El Farol Bar | $73.3$ | $75.8$ | $65.8$ | $75.8$ | $71.7$ | $72.5\_{\pm 4.1}$ |
| Divide the Dollar | $68.1$ | $81.0$ | $91.4$ | $75.8$ | $79.6$ | $79.2\_{\pm 8.5}$ |
| Public Goods Game | $41.2$ | $26.6$ | $45.2$ | $50.2$ | $24.2$ | $37.5\_{\pm 11.5}$ |
| Diner’s Dilemma | $4.0$ | $3.5$ | $0.0$ | $57.0$ | $18.5$ | $16.6\_{\pm 23.7}$ |
| Sealed-Bid Auction | $14.6$ | $11.8$ | $13.4$ | $8.0$ | $15.5$ | $12.6\_{\pm 3.0}$ |
| Battle Royale | $20.0$ | $30.8$ | $15.0$ | $25.0$ | $18.8$ | $21.9\_{\pm 6.1}$ |
| Pirate Game | $80.6$ | $87.9$ | $60.8$ | $60.5$ | $53.7$ | $68.7\_{\pm 14.7}$ |


Figure 6: Results of playing the games using different prompt templates.

[[BACK TO RQ1]](https://arxiv.org/html/2403.11807v7#S4.SS1 "4.1 RQ1: Robustness ‣ 4 Beyond Default Settings ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

Table 7: Quantitative results of playing the games using prompt-based improvement methods.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Improvements | Default | CoT | Cooperative | Selfish | Mathematician |
| Guess 2/3 of the Average | $65.4$ | $75.1$ | $69.0$ | $14.5$ | $71.4$ |
| El Farol Bar | $73.3$ | $71.7$ | $74.2$ | $63.3$ | $60.0$ |
| Divide the Dollar | $68.1$ | $83.4$ | $70.7$ | $49.7$ | $69.2$ |
| Public Goods Game | $41.2$ | $56.1$ | $32.4$ | $37.4$ | $25.6$ |
| Diner’s Dilemma | $4.0$ | $82.5$ | $0.0$ | $17.5$ | $47.0$ |
| Sealed-Bid Auction | $14.6$ | $5.3$ | $16.3$ | $11.6$ | $13.0$ |
| Battle Royale | $20.0$ | $17.6$ | $6.2$ | $33.3$ | $26.7$ |
| Pirate Game | $80.6$ | $71.2$ | $80.6$ | $74.7$ | $59.5$ |
| Overall | 45.9 | 57.9 | 43.7 | 37.8 | 46.5 |


Figure 7: Results of playing the games using prompt-based improvement methods.

[[BACK TO RQ2]](https://arxiv.org/html/2403.11807v7#S4.SS2 "4.2 RQ2: Reasoning Strategies ‣ 4 Beyond Default Settings ‣ How Far Are We on the Decision-Making of LLMs? Evaluating LLMs’ Gaming Ability in Multi-Agent Environments")

### K.3 Robustness: Prompt Templates

Table 12: Quantitative results of playing the games using different prompt templates.

| Prompt Versions | V1 (Default) | V2 | V3 | V4 | V5 | $Avg\_{\pm Std}$ |
| --- | --- | --- | --- | --- | --- | --- |
| Guess 2/3 of the Average | $82.2$ | $87.5$ | $83.2$ | $90.5$ | $82.4$ | $85.2\_{\pm 3.7}$ |
| El Farol Bar | $64.2$ | $63.3$ | $63.3$ | $58.3$ | $64.2$ | $62.7\_{\pm 2.5}$ |
| Divide the Dollar | $87.9$ | $95.1$ | $84.1$ | $87.6$ | $94.0$ | $89.7\_{\pm 4.6}$ |
| Public Goods Game | $93.4$ | $92.9$ | $87.4$ | $67.6$ | $89.0$ | $86.1\_{\pm 10.6}$ |
| Diner’s Dilemma | $47.0$ | $47.5$ | $34.0$ | $53.0$ | $47.0$ | $45.7\_{\pm 7.0}$ |
| Sealed-Bid Auction | $15.6$ | $5.4$ | $13.0$ | $6.1$ | $10.6$ | $10.2\_{\pm 4.4}$ |
| Battle Royale | $70.0$ | $90.0$ | $75.0$ | $41.2$ | $85.0$ | $72.2\_{\pm 19.1}$ |
| Pirate Game | $42.8$ | $77.0$ | $88.8$ | $58.6$ | $73.0$ | $68.1\_{\pm 17.8}$ |

### L.3 Robustness: Prompt Templates

Table 16: Quantitative results of playing the games using different prompt templates.

| Version | V1 (Default) | V2 | V3 | V4 | V5 | $Avg\_{\pm Std}$ |
| --- | --- | --- | --- | --- | --- | --- |
| Guess 2/3 of the Average | $96.2$ | $95.1$ | $92.7$ | $97.2$ | $88.9$ | $94.0\_{\pm 3.3}$ |
| El Farol Bar | $37.5$ | $53.3$ | $60.8$ | $46.7$ | $27.5$ | $45.2\_{\pm 13.1}$ |
| Divide the Dollar | $93.8$ | $90.3$ | $62.1$ | $100.0$ | $92.5$ | $87.7\_{\pm 14.8}$ |
| Public Goods Game | $100.0$ | $97.2$ | $98.7$ | $100.0$ | $99.8$ | $99.1\_{\pm 1.2}$ |
| Diner’s Dilemma | $29.0$ | $24.0$ | $22.0$ | $18.0$ | $23.0$ | $23.2\_{\pm 4.0}$ |
| Sealed-Bid Auction | $42.5$ | $38.6$ | $33.5$ | $8.2$ | $20.5$ | $28.7\_{\pm 14.2}$ |
| Battle Royale | $75.0$ | $92.3$ | $70.0$ | $75.0$ | $85.0$ | $79.5\_{\pm 9.0}$ |
| Pirate Game | $92.2$ | $82.3$ | $92.3$ | $82.3$ | $77.8$ | $85.4\_{\pm 6.5}$ |

### M.3 Robustness: Prompt Templates

Table 20: Quantitative results of playing the games using different prompt templates.

| Version | V1 (Default) | V2 | V3 | V4 | V5 | $Avg\_{\pm Std}$ |
| --- | --- | --- | --- | --- | --- | --- |
| Guess 2/3 of the Average | $94.9$ | $93.0$ | $94.7$ | $94.3$ | $91.6$ | $93.7\_{\pm 1.4}$ |
| El Farol Bar | $95.0$ | $72.5$ | $37.5$ | $59.2$ | $60.8$ | $65.0\_{\pm 21.0}$ |
| Divide the Dollar | $95.7$ | $95.7$ | $95.6$ | $93.9$ | $96.1$ | $95.4\_{\pm 0.9}$ |
| Public Goods Game | $94.1$ | $96.2$ | $89.4$ | $88.6$ | $94.0$ | $92.4\_{\pm 3.3}$ |
| Diner’s Dilemma | $23.5$ | $50.0$ | $50.0$ | $33.5$ | $37.5$ | $38.9\_{\pm 11.3}$ |
| Sealed-Bid Auction | $19.2$ | $38.1$ | $35.0$ | $20.3$ | $33.6$ | $29.2\_{\pm 8.8}$ |
| Battle Royale | $89.5$ | $60.0$ | $10.0$ | $64.7$ | $30.0$ | $50.8\_{\pm 31.1}$ |
| Pirate Game | $77.3$ | $93.7$ | $67.9$ | $88.9$ | $86.5$ | $82.9\_{\pm 10.3}$ |
