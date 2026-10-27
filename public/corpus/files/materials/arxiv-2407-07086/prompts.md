---
id: arxiv-2407-07086-prompts
type: material
title: 'Опубликованные разделы о промптах: Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks
  with Large Language Models'
source_id: arxiv-2407-07086
source_url: https://arxiv.org/html/2407.07086v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 2920a109a8a0d0a06d34134af578b41bdd4589529d057948eed16d5766dec41f
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix G Prompts

All prompts can be seen in our code. The most representative prompts are also reproduced below.

### G.1 Running With Scissors: Arena Prompts

RWS Arena System Message

You are Agent 0 in the eight player ’running\_with\_scissors’ Melting Pot multiagent reinforcement learning environment that is a 25x24 (x by y) grid with resources to collect and walls to navigate around.
8 Players can move around the map and collect resources of 3 discrete types corresponding to rock, paper, and scissors strategies - Yellow box = rock - Purple box = paper - Blue box = scissors.
Rock/yellow beats scissors/blue, paper/purple beats rock/yellow, and scissors/blue beats paper/purple.
  
In addition to movement, the agents have an action to fire an "interaction" beam which initiates a duel with one player getting positive reward and the other agent getting an opposite negative reward according to their inventories.
  
All players carry an inventory with the count of resources picked up since last respawn and for each respawn start with an inventory of 1 resource each. This inventory is visible in the state with the key ’inventory’.
  
To play a pure strategy strongly, pick up at least 5 resources or more of the color and then fire the interaction beam at another player. To commit less strongly to a strategy, pick up around 3 resources of the color and then fire the interaction beam at another player.
  
Usually you will only want to pick up one type of resource before an interaction, in order to gain the most information about the other players’ strategies and to not waste time collecting other resources.
  
You also want to maximize the number of interactions so after you pick up 4-6 resources, you should seek out a duel to reset your inventory and gain more information about the other players’ strategies.
  
Your opponents will also almost always only pick up one type of resource before an interaction.
  
For example, player0\_inventory = [7, 1, 1] (Yellow, Purple, Blue) is a good inventory that will lead to an informative duel, whereas player0\_inventory = [2, 2, 2] (Yellow, Purple, Blue) will not be informative.
  
Your reward is the result of a matrix multiplication involving your inventory in a vector format, and your opponent’s inventory vector, and a payoff matrix similar to rock paper scissors.
  
r\_t = transpose(your\_inventory) \* A\_payoff \* opponent\_inventory where A\_payoff = np.array([[0, -10, 10], [10, 0, -10], [-10, 10, 0]])
  
The reward usually ranges from (5, -5) depending on the inventories of both players (the min is -10 and max 10, but it is rare to get these magnitudes). Typically +/- 3-5 is a high magnitude, and a reward near 0 suggests both players played a similar inventory.
  
State Description: This environment is partially-observable, you can observe an 11x11 grid around your agent depending on your position and orientation (you can see more in front of you than behind).
  
Previously seen states will be represented in memory, but note that these states could potentially be outdated. For example, the other agent could collect a resource that you previously saw.
  
Given the partially-observable nature of the environment, you will need to explore the environment appropriately and select goals based on the information you’ve gathered.
  
Also pay attention to your opponents’ positions when you see them in order to duel with them and gain information about their strategy.
  
To find a specific player, you can first move towards the last known location of the player and then move randomly around the map.
  
Hanging around the center of the map and waiting for a player to come to you is not a good strategy for this environment.
  
After you gather information about your opponents’ strategies, seek out opponents whose strategy you know and can exploit and play a counter-strategy.

#### G.1.1 Hypothetical Minds

Subgoal Module Message

Current State Description:
  
- Global Map Size: {map\_size} grid (Walls are located at the boundaries of the map and in other places that are invalid for move\_to).
  
- Valid Locations for move\_to: {movable\_locations}
  
- Player Position: {player\_position}
  
- Player Orientation: {player\_orientation}
  
- Player Inventory (yellow, purple, blue): {player\_inventory}
  
- Egocentric Observations Size: 11x11 grid around your agent. You currently can observe the following based on your position and orientation:
  
- Observable Yellow Box Locations (format: ((x,y), distance from current location)): {yellow\_locations\_with\_distance}
  
- Observable Blue Box Locations: {blue\_locations\_with\_distance}
  
- Observable Purple Box Locations: {purple\_locations\_with\_distance}
  
- Observable Opponent Locations: {opponent\_locations}
  
- Previously seen states from memory (format: ((x,y), step last observed, distance from current location)): {self.memory\_states}
Execution Outcomes:
  
{execution\_outcomes}
Error for extracting and executing actions from the response:
  
{get\_action\_from\_response\_errors}
Rewards:
  
{rewards\_str}
Strategy Request:
  
You are at step {step} of the game.
  
You have decided to execute a high-level strategy/target inventory in a previous response given what you predicted your opponent will do.
  
Select subgoals in order to achieve the strategy, including first achieving a target my\_next\_inventory: {self.hls\_next\_inventories}.
  
Once you achieve the target inventory, STOP picking up resources and immediately seek out a duel with an opponent close to you that you can exploit based on your hypothesis about their strategy and your current inventory.
  
So once you’ve picked up about 5-7 resources in total, seek out a duel to receive rewards, get more information about strategies, and reset your inventory.
  
Here are your hypotheses about each player’s strategy: {self.opponent\_hypotheses}
  
If you’ve generated a hypothesis about a player’s strategy, you can use this to inform your strategy about whether to interact with them or not.
  
Each strategy is paired with a value on how well it explains the data observed so far, starting at 0.
  
A hypothesis is validated when its value is greater than: {self.good\_hypothesis\_thr}.
  
Your task is to devise efficient action plans for player {self.agent\_id}, reason through what the next subgoals should be given the state information.
  
Your response should be broken up into two parts:
  
1. Subgoal Plan - based on the current state and the high-level strategy you previously specified above, decompose this strategy into a sequence of subgoals and actions to efficiently implement this strategy. Think step by step about this. This could be fairly long.
  
2. Action Plan - output this sequence of actions in the following Python dictionary format, parsable by ast.literal\_eval()
starting with:

```
{{ ’action_plan’: [’move_to((11, 7), (9, 5))’, ’move_to((9, 5), (13, 5))’] }}
```

Example response 1, 2, and 3 are formatted similarly, detailing other strategies and actions.

ToM Module User Message 1

An interaction with another player has occurred at step {step}, {self.interaction\_history[self.last\_played\_id][-1]}.
  
What was my opponent’s likely inventory in the last round given the inventory I played and the reward received?
  
Think step by step about this. First think about what resource you had the most of in your inventory, and then think about which resource would beat that if you received a negative reward of -1 or worse or which resource would lose to yours if you received a positive reward of 1 or more.
  
If you received a small magnitude reward near 0 and in between (-1, 1), then your opponent may have played a similar inventory to you.
  
Then depending on the magnitude of the reward and the number of resources you played, you can infer the opponent’s inventory and whether they played that strategy strongly (5+ of that resource) or weakly ( 3 of that resource).
  
An inventory of {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 1} is not possible because you need at least 2 resources of a type to play a duel.
  
Here are some example interactions to help you reason about how the reward function works:
  
’your\_inventory’: {’rock/yellow’: 3, ’paper/purple’: 1, ’scissors/blue’: 1}, ’rewards’: -2.285, ’possible\_opponent\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 5, ’scissors/blue’: 1}
  
’your\_inventory’: {’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}, ’rewards’: 3.571, ’possible\_opponent\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 6}
  
’your\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 4, ’scissors/blue’: 1}, ’rewards’: 2.0, ’possible\_opponent\_inventory’: {’rock/yellow’: 3, ’paper/purple’: 1, ’scissors/blue’: 1}
  
In the 2nd part of your response, output the predicted opponent’s inventory in following Python dictionary format, parsable by ast.literal\_eval() starting with:
’possible\_opponent\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5}
  
Example output:
  
Given that I last played a strong paper strategy with an inventory of {’rock/yellow’: 1, ’paper/purple’: 5, ’scissors/blue’: 1} and received a reward of -3.428, I believe my opponent played a strong scissors strategy.
  
The reward suggests that my paper was beaten by their scissors, which means their inventory likely had a higher count of blue/scissors resources.
  
A possible inventory for them could be {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5} or a similar distribution favoring scissors.

ToM Module User Message 2

Total Rewards: {rewards\_str}
Strategy Request:
  
An interaction with another player has occurred at step {step}, {self.interaction\_history[self.last\_played\_id][-1]}.
  
The total interaction history with this opponent is: {self.interaction\_history[self.last\_played\_id]}.
  
If self-improvement is a focus:
  
Here are your previous hypotheses about the algorithm this opponent is playing: {self.top\_hypotheses[self.last\_played\_id]}.
  
What is your opponent’s likely policy given the inventories and the reward function? Think step by step about this given the interaction history.
  
If your previous hypotheses are useful, you can iterate and refine them to get a better explanation of the data observed so far.
  
If a hypothesis already explains the data very well, then repeat the hypothesis in this response.
  
They may be playing the same pure policy every time, a complex strategy to counter you, or anything in between.
  
They are not necessarily a smart agent that adapts to your strategy, you are just playing an algorithm.
  
Are you getting high positive or negative reward when playing the same type of inventory? For example, getting high positive reward every time you play many paper resources. If so, this opponent may be playing a pure strategy and you can exploit this by playing the counter strategy.
  
Once you have output a hypothesis about this opponent’s strategy with step by step reasoning, you can use the hypothesis to inform your strategy.
  
In the 2nd part of your response, summarize your hypothesis in a concise message following Python dictionary format, parsable by ast.literal\_eval() starting with:
’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5
{’Opponent\_strategy’: ’I think my opponent is always playing a pure scissors strategy and collecting around 5 blue resources.’}
  
Otherwise:
  
What is this opponent’s likely policy given the inventories and the reward
  
function? Think step by step about this given the interaction history.
  
They may be playing the same pure policy every time, a complex strategy to
  
counter you, or anything in between.
  
They are not necessarily a smart agent that adapts to your strategy.
  
Are you getting high positive or negative reward when playing the same type of inventory? For example, getting high positive reward every time you play many
  
paper resources. If so, this opponent may be playing a pure strategy and you
  
can
exploit this by playing the counter strategy.
  
Once you have output a hypothesis about this opponent’s strategy
  
with step by step reasoning, you can use hypothesis to inform your strategy.
  
In the 2nd part of your response, summarize your hypothesis in a concise message following Python dictionary format, parsable by ast.literal\_eval() starting with:
{’Opponent\_strategy’: ’I think my opponent is always playing a pure scissors strategy and collecting around 5 blue resources.’}
You will be prompted again shortly to select subgoals and action plans to execute this strategy that achieves the target inventory, so do not include that in your response yet right now.

ToM Module User Message 3

An interaction with self.last\_played\_id has occurred at step {step},
The total interaction history with {self.last\_played\_id{ is:
You previously made the following guess about this player’s strategy:
Think step by step and predict what this opponent will play the next time you interact with them.
Given the above mentioned guess about the opponent’s policy/strategy, and the last inventory you played (if their strategy is adaptive, it may not be), what is their likely inventory in the next round.
In the 2nd part of your response, output the predicted opponent’s next inventory in following Python dictionary format, parsable by ‘ast.literal\_eval()‘ starting with ‘‘‘python.
Example response 1:
’Opponent\_next\_inventory’: Given that my opponent is playing a rock policy, I believe their next inventory will be inventory={’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}.
‘‘‘python
{
’predicted\_opponent\_next\_inventory’: {’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}
}
‘‘‘
Example response 2:
’Opponent\_next\_inventory’: Since my guess is that this player is playing a scissors policy, I predict that their next inventory will be {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5}.
‘‘‘python
{
’predicted\_opponent\_next\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5}
}
‘‘‘
Example response 3:
’Opponent\_next\_inventory’: Since my opponent is following a paper strategy, I predict their upcoming inventory will be inventory={’rock/yellow’: 1, ’paper/purple’: 5, ’scissors/blue’: 1}.
‘‘‘python
{
’predicted\_opponent\_next\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 5, ’scissors/blue’: 1}
}

ToM Module User Message 4

An interaction with self.last\_played\_id has occurred at step {step},
The total interaction history with self.last\_played\_id is:
The total interaction history overall is: .
You previously made the following guesses about all the other players’ strategies: possible\_opponent\_strategy.
High-level strategy Request:
Provide the next high-level strategy for your player self.agent\_id.
This response should include step by step reasoning in parts 1-3 about which strategy to select based on the entire interaction history in the following format:
1. ’Opponents\_to\_seekout’: Given the hypotheses about your opponent’s strategies and their values, which players should you seek out to duel with next and why?
If possible, select opponents you have a good hypothesis about so you can exploit it and maximize your reward. Try to select multiple players if possible as one player might be hard to find or is respawning.
Are you noticing any patterns across the population as a whole?
2. ’Opponent\_next\_inventory’: Given the above mentioned guess about the opponent’s policy/strategy what is their likely inventory in the next round.
3. ’My\_next\_inventory’: Given the opponent’s likely inventory in the next round, what should your next inventory be to counter this?
4. In the 4th part of your response, output the opponent to seekout, the predicted opponent’s next inventory, and your next inventory in following Python dictionary format, parsable by ‘ast.literal\_eval()‘ starting with ‘‘‘python.
Example response 1:
1. ’Opponent\_to\_seekout’: Given that I am fairly certain that player\_1 and player\_5 is playing a rock policy, I believe I should seek out either player\_1 or player\_5 to duel with next.
2. ’Opponent\_next\_inventory’: Given that these opponents are playing a rock policy, I believe their next inventory will be something like inventory={’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}.
3. ’My\_next\_inventory’: Given that these players are playing a rock policy, I believe my next inventory should be a paper policy inventory={’rock/yellow’: 1, ’paper/purple’: 5, ’scissors/blue’: 1}.
‘‘‘python
{
’opponents\_to\_seekout’: [’player\_1’, ’player\_5’],
’predicted\_opponent\_next\_inventory’: {’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}
’my\_next\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 5, ’scissors/blue’: 1}
}
Example response 2:
1. ’Opponents\_to\_seekout’: Considering all the interactions, player\_2, player\_3, and player\_5 seem to heavily favor the scissors/blue strategy with consistent picks. Engaging either of these players could offer a high reward opportunity.
2. ’Opponent\_next\_inventory’: Based on the observed behavior of player\_2, player\_3, and player\_5, it is likely they will continue with a strong scissors/blue strategy, potentially having an inventory of {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5}.
3. ’My\_next\_inventory’: To effectively counter the scissors/blue strategy, my optimal approach would be to adopt a rock/yellow strategy. An inventory geared towards this would be {’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}.
‘‘‘python
{
’opponents\_to\_seekout’: [’player\_2’, ’player\_3’, ’player\_5’],
’predicted\_opponent\_next\_inventory’: {’rock/yellow’: 1, ’paper/purple’: 1, ’scissors/blue’: 5},
’my\_next\_inventory’: {’rock/yellow’: 5, ’paper/purple’: 1, ’scissors/blue’: 1}
}

### G.2 Running with Scissors: Repeated

The prompts for Running with Scissors Repeated remain very similar as Running with Scissors: Arena with the modification of the prompts being in a $2$ player setting.

### G.3 Prisoner’s Dilemma: Repeated

System Message

You are Agent {self.agent\_id} in the two player ’prisoner\_dilemma\_in\_the\_matrix’ Melting Pot multiagent reinforcement learning environment that is an 23x15 (x by y) grid with resources to collect and walls to navigate around.
Your goal is to maximize reward.
Players can move around the map and collect resources of 2 discrete types corresponding to cooperate and defect strategies - Green box = cooperate - Red box = defect.
You and another agent will collect resources and compare inventories in an encounter in repeated rounds.
In addition to movement, the agents have an action to fire an "interaction" beam which initiates a duel to compare inventories and distribute rewards.
All players carry an inventory with the count of resources picked up since last respawn and for each respawn start with an inventory of 1 resource each.
This inventory is visible in the state with the key ’inventory’.
Here is how the payoff matrix in the generic prisoner dilemma works:

•

If both players cooperate, they both receive a reward of around 3,
•

If one player cooperates and the other defects, the defector receives a reward of around 5 and the cooperator receives a reward of around 0,
•

If both players defect, they both receive a reward of around 1.
The nuance of ’prisoner\_dilemma\_in\_the\_matrix\_\_repeated’ is that the rewards are using the payoff rules of the classic prisoner dilemma, but the interaction is repeated and the rewards are distributed based on the inventory of resources collected by each player.

•

If both agents cooperate, the one with more cooperate resources will receive a reward lower than the one with less cooperate resources,
•

If one agent cooperates and the other defects, the more defect resources the defector has, the higher the reward for the defector,
•

If both agents defect, the one with more defect resources will receive a higher reward than the one with less defect resources.
Your goal before each interaction is to try and infer what the other player will play and how their strategy over time is affected by your plays.
You will only want to pick up one type of resource before an interaction.
For example, the inventories {’cooperate/green’: 1, ’defect/red’: 1} and {’cooperate/green’: 3, ’defect/red’: 3} will both result in the same reward, so don’t waste time collecting more than you need.
Player 1 will also always only pick up one type of resource before an interaction.
To play a strategy strongly, pick up at least 6 resources or more of only one color and then fire the interaction beam at the other player.
To commit less strongly to a strategy, pick up around 2 resources of only one color and then fire the interaction beam at the other player.
State Description: This environment is partially-observable, you can observe a 5x5 grid around your agent depending on your position and orientation (you can see more in front of you than behind).
Previously seen states will be represented in memory, but note that these states could potentially be outdated. For example, the other agent could collect a resource that you previously saw.
Given the partially-observable nature of the environment, you will need to explore the environment appropriately and select goals based on the information you’ve gathered.
Also pay attention to Player 1’s position when you see it in order to duel with them and gain information about their strategy.
Your goal is to maximize reward attained over an entire episode, so keep in mind the long-term consequences of your actions. Look at events in a gestalt manner.

### G.4 Collaborative Cooking Prompts

System Message for Collaborative Cooking Asymmetric

You are Player {self.agent\_id} in the Collaborative Cooking Asymmetric environment, the goal is to cook and deliver tomato soup dishes with a partner. The environment consists of a kitchen with a tomato dispenser, pots, delivery locations, and dish dispensers. Each agent (of 2) has access to specific parts of the kitchen and can perform actions like picking up ingredients, putting soup in a dish, and delivering cooked soup dishes. There is an impassable barrier in the middle of the kitchen that separates the agents’ sides at x=4, where the pots are located. The goal is to work together with the other agent to efficiently cook and serve as many dishes of tomato soup as possible to maximize the collective reward. However, communication is not possible, so you must infer your partner’s strategy from their actions and adapt accordingly to coordinate tasks. To cook tomato soup, 1. put 3 tomatoes in a pot, 2. pick up a dish when it is finished cooking, 3. put the cooked soup in a dish, and 4. deliver it to the delivery location. Your team receives a reward of 20 for each successfully delivered dish. Only interact with objects on your side of the kitchen. You can only hold one tomato at once. You cannot pick up a tomato from the tomato dispenser with another item like a dish in your hand. You need to pick up a dish before you pick up cooked soup from a pot. The environment is partially observable, and you can only see a 5x5 grid around your agent. You will be prompted at different points to provide high-level strategies and lower-level action plans to achieve them.
Use these three functions for lower-level action plans:

•

move\_to(src\_coord, target\_coord): Efficiently move agent from source coordinate to target coordinate. Only move to valid move\_to locations where counters or objects are not present. Use sparingly.
•

interact(target\_coord): Move to and interact with the entity at the target coordinate, such as picking up ingredients or delivering dishes of cooked soup. To place an object down on a counter to free your hands, use interact(counter\_coord). Mostly use this function.
•

wait(target\_coord): Wait for the pot at target\_coord to finish cooking. Check the progress of the pots and only use valid locations where pots are present. You probably only want to use this when both pots are full to maximize efficiency.
Most of the time you will just want to use the interact function because it both moves to and interacts with objects, therefore all the cooking steps can be completed with the interact function.
To put down an item to pick something else up, interact with a counter to free your hands. Do not put down items on the floor or the delivery location.

#### G.4.1 Hypothetical Minds

High Level Strategy Message (in ToM Module of HM) for Collaborative Cooking Asymmetric

Strategy Request:
  
You are at step {step} of the game.
  
Provide a strategy for agent {self.agent\_id}.
  
Your response should outline a high-level strategy - what strategy do you want to take next and why?
  
Teammate’s observed strategy: {self.teammate\_strategy}
  
Think step by step about how to adapt to their behavior and maximize all resources and efficiency accordingly.
This response will be shown to you in the future in order for you to select lower-level actions to implement this strategy.
  
Example response:
  
High-level strategy: I want to focus on cooking tomato soup dishes.
  
You will be prompted again shortly to select subgoals and action plans to execute this strategy, so do not include that in your response yet.

Subgoal Module Message

Strategy Request:
  
You are at step {step} of the game.
  
Your task is to devise efficient action plans for agent {self.agent\_id}, reason through what the next subgoals should be given the state information.
  
Your previously specified high-level strategy is: {self.my\_strategy}
  
Your response should be broken up into two parts:
  

1.

Subgoal Plan - Based on the current state and the high-level strategy you previously specified, decompose this strategy into a sequence of subgoals and actions to efficiently implement this strategy. For every subgoal, think step by step about the best action function and parameter to use for that function. This could be fairly long.
2.

Action Plan - Output this sequence of actions in the following Python dictionary format, parsable by ast.literal\_eval() starting with:

```
    {{ ’action_plan’: [’interact((5, 1))’] }}
```

Example response 1:
  
Subgoal Plan: Given the current state and my high-level strategy to focus on cooking tomato soup dishes, I should:
  
Move to the tomato dispenser and pick up a tomato.
  

```
{{ ’action_plan’: [’interact((5, 1))’] }}
```

Example response 2:
  
Subgoal Plan: Given the current state and my high-level strategy to focus on delivering tomato soup dishes, I should:
  
Move to the dish dispenser and pick up a dish, then plate the cooked soup.
  

```
{{ ’action_plan’: [’interact((3, 4))’, ’interact((4, 2))’] }}
```

Example response 3:
  
Subgoal Plan: Next I should move to the delivery location and deliver the cooked soup.
  

```
{{ ’action_plan’: [’interact((3, 1))’] }}
```

Evaluate Action Outcomes/Self-Reflection

User Message Preamble:
If subgoal failed:
  
You are an action plan evaluator.
  
The last subgoal included an interact action that failed.
  
Your task is to look at the subgoal the agent took, the state of the environment before and after the subgoal,
  
and evaluate why the subgoal was unsuccessful and provide feedback about what the agent should do next time.
  
We will next plan an entire new action plan, so suggest specific action plans and action functions to use next when applicable.
  
If subgoal succeeded:
  
You are an action plan evaluator.
  
Your task is to look at the action plan the agent took, the state of the environment before the plan and the state of the environment after the plan,
  
and evaluate whether the action plan was successful, and if not, provide feedback about what failed and what the agent should do next time.
  
Take into account that your teammate could have influenced the outcome of the subgoal in some circumstances.
  
Suggest specific action plans and action functions to use next when applicable.

Infer Teammate Strategy Message

User Message:
Based on the observed actions of your teammate (player\_1), what do you think their strategy is?
  
Are they specializing in any specific activity or subtask?
  
Teammate’s observed actions:
  
{self.teammate\_actions}
  
Here are your previous hypotheses about the strategy your partner is playing: {self.top\_hypotheses}.
  
Think step by step and provide an analysis of their strategy, any specialization you infer from their behavior, and their competence.
  
Then analyze how you can adapt your strategy to maximize efficiency and coordination with your teammate.
  
Remember communication is not allowed.

Predict Teammate Behavior Message

A dish has been delivered at step {step}.
  
You previously guessed that your teammate’s (player\_1) policy is: {possible\_teammate\_strategy}
  
Based on the proposed hypothesis about your teammate (player\_1), what do you think they will do next?
  
Output a concise label about your teammate’s next behavior in the following Python dictionary format, parsable by ast.literal\_eval() starting with:

```
python
{{ ’predicted_next_behavior’: ’placing tomatoes into pot (4,2)’ }}
```

Evaluate Predicted Behavior

A dish has been delivered at step {step}.
  
You previously guessed that your teammate’s (player\_1) would perform this behavior in this round: {predicted\_next\_behavior}
  
Here is the observed behavior of your teammate (player\_1) in this round: {latest\_teammate\_actions}
  
Did your prediction match the observed behavior?
  
Concisely output True or False in the below Python dictionary format, parsable by ast.literal\_eval() starting with:

```
{{ ’evaluate_predicted_behavior’: True }}
```
