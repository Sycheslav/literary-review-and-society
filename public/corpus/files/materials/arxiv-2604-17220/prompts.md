---
id: arxiv-2604-17220-prompts
type: material
title: 'Опубликованные разделы о промптах: Dynamics of Cognitive Heterogeneity: Investigating Behavioral Biases
  in Multi-Stage Supply Chains with LLM-Based Simulation'
source_id: arxiv-2604-17220
source_url: https://arxiv.org/html/2604.17220v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 2c32069e5c49116b172834b285f3acf738ae941bafc51304f0561cefcd68452c
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix D The Prompt: Scripting the Agent’s Worldview

To bring our experimental design to life, we developed a meticulous prompting strategy that serves as the "script" and "director’s cues" for our LLM agents. Our core methodological principle is one of casting, not coaching. We do not try to coax a single model into acting "smarter" or "more strategic" through complex instructions. Instead, as previously defined, we cast verifiably distinct models for the cognitively shallow and deep roles. This ensures that the behavioral differences we observe stem from the models’ genuine, intrinsic capabilities, not their ability to follow creative writing instructions.

To maintain this focus on intrinsic abilities, our prompts were designed with scientific minimalism in mind. We deliberately avoided any "method acting" instructions or persona-based cues (like "you are a risk-averse manager"). The script is purely informational and objective: it provides the universal rules of the game, the agent’s current situation, and its unwavering goal to minimize costs. This rigorous approach ensures we are studying the models’ fundamental reasoning patterns, not artifacts of the prompt design. The only variable manipulated within the script itself is the agent’s access to information.

#### Information Structure System Messages

At the very start of each simulation, a one-time system message establishes the fundamental "rules of the universe" for the agent, defining its worldview for the entire 20-round game. This initial prompt places the agent into one of two starkly different informational realities.

In the classic isolated information setting, the message draws the "informational curtain," plunging the agent into a state of local perception and forcing it to navigate the fog of uncertainty.

System Prompt: Isolated Information (Baseline)

You have NO VISIBILITY into the inventory or backlog levels at other stages of the supply chain. You must make decisions solely based on your own local state (demand, inventory, backlog, and arriving deliveries).

In the contrasting information sharing condition, the curtain is lifted. The message grants the agent a "god’s-eye view" of the entire system, creating the potential for globally coordinated, omniscient decisions.

System Prompt: Information Sharing

IMPORTANT NOTE: You have FULL VISIBILITY of the inventory and backlog levels across ALL stages – retailer, wholesaler, distributor, and manufacturer. Please use this shared information to make globally optimal decisions.

#### Dynamic Process Messages

With the worldview established, the game progresses through dynamic, turn-by-turn "director’s cues" in the form of process messages. This message is the complete and sole prompt for each round, containing all the information the agent is permitted to see before making its decision. The content of this cue differs dramatically depending on which of the two worlds the agent inhabits.

In the isolated world, the message is sparse and local, reinforcing the agent’s limited perspective.

Process Message: Isolated Information

Now this is round {period + 1}, and you are at stage {stage + 1} of {len(state\_dict)} in the supply chain.
You have no visibility into the inventory or backlog levels at other stages. Please make your decision solely based on your own current state and local information.
(Retailer only): The demand at the retailer (stage 1) is {demand1}.
Given your current state:
{get\_state\_description(stage\_state)}
(Non-retailer stages): Your downstream order from stage {stage} for this round is {action\_dict.get(f’stage\_{stage - 1}’, ’N/A’)}.
What is your action (order quantity) for this round? Your aim is to minimize the cost, where one unit of backlog costs 1.0 and one unit of inventory costs 0.5. Please provide your action as a non-negative integer within brackets at the end of your response (e.g., [0]).

In the transparent world of information sharing, the message is enriched with a complete, real-time data feed from across the entire supply chain, empowering the agent with global awareness.

Process Message: Information Sharing

Now this is round {period + 1}, and you are at stage {stage + 1} of {len(state\_dict)} in the supply chain.
IMPORTANT NOTE: You have FULL VISIBILITY of the inventory and backlog levels across ALL stages. Please thoroughly review this information before making your decision.
The inventory levels of retailer, wholesaler, distributor, and manufacturer are {state\_dict[’stage\_0’][’inventory’]}, {state\_dict[’stage\_1’][’inventory’]}, {state\_dict[’stage\_2’][’inventory’]}, and
  
{state\_dict[’stage\_3’][’inventory’]} respectively.
The current backlog levels of retailer, wholesaler, distributor, and manufacturer are: {state\_dict[’stage\_0’][’backlog’]}, {state\_dict[’stage\_1’][’backlog’]}, {state\_dict[’stage\_2’][’backlog’]}, and
  
{state\_dict[’stage\_3’][’backlog’]} respectively.
(Retailer only): The demand at the retailer (stage 1) is {demand1}.
Given your current state:
{get\_state\_description(stage\_state)}
(Non-retailer stages): Your downstream order from stage {stage} for this round is {action\_dict.get(f’stage\_{stage - 1}’, ’N/A’)}.
What is your action (order quantity) for this round? Your aim is to minimize the cost, where one unit of backlog costs 1.0 and one unit of inventory costs 0.5. Please provide your action as a non-negative integer within brackets at the end of your response (e.g., [0]).
