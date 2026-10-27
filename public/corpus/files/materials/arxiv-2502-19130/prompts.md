---
id: arxiv-2502-19130-prompts
type: material
title: 'Опубликованные разделы о промптах: Voting or Consensus? Decision-Making in Multi-Agent Debate'
source_id: arxiv-2502-19130
source_url: https://arxiv.org/html/2502.19130v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 0a74eb6bf155969db413db541617ee210cdf8396de82751a38d6d2cf09e38256
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 3.2 Agent Prompts and Decision Protocols

![Refer to caption](https://arxiv.org/html/2502.19130v4/results_8b.png)


Figure 2: Task performance$\pm$std for seven decision protocols (voting and consensus-based) on six tasks (knowledge and reasoning) based on agents with Llama 8B. Bold indicates the highest results per dataset. Standard deviation for three runs.

Prompt design has a marked impact on multi-agent debate.
For this work, we propose three response generators.
The Simple Response Generator is our default in which agents are prompted to answer neutral and unbiased to previous messages.
The Critical Response Generator encourages agents to critically assess prior answers and propose new solutions, countering sycophantic tendencies [Sharma et al. (2023)](https://arxiv.org/html/2502.19130v4#bib.bib26).
The Reasoning Response Generator restricts agents to sharing only reasoning paths, thus avoiding bias towards agreeing with other agents’ final solutions.

Decision protocols then determine the final solution of the discussion by selecting the most promising solution based on predefined mechanisms.
We use two classes of protocols in this work.

Consensus decision protocols decide on an answer by prompting the agents to converge on one shared solution.
The solution is selected when a required level of agreement among agents is reached.
We explore three major agreement levels: majority consensus - more than $50\%$ agreement, supermajority consensus - more than $66\%$ agreement, and unanimity consensus - all agents have to agree.
We extend the majority consensus of [Yin et al. (2023)](https://arxiv.org/html/2502.19130v4#bib.bib41) by higher agreement levels, i.e., supermajority (66%), unanimity (100%).

Voting decision protocols allow several possible solutions to be presented in parallel during the discussion, and ultimately all agents must vote on a final solution.
If there is a tie in the voting, all agents will discuss for another round and then vote again.
Our work includes four different voting decision protocols inspired by [Yang et al. (2024b)](https://arxiv.org/html/2502.19130v4#bib.bib39):
simple voting - each agent casts one vote, and the answer with the most votes wins;
ranked voting - each agent ranks the solutions from best to worst to find the solution that consistently has the highest rank over all individual rankings;
approval voting - each agent casts unlimited votes, and the answer with the most votes wins; and
cumulative voting - each agent is allowed to divide up to 25 points between all solutions. The solution with the most points wins.

## Appendix E Prompts

### E.1 Final Answer Extraction

System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

You are tasked with creating a final solution based on the given input and your previous response.
Task: <task>
  
Input: <input sample>
  
Your previous response: <previous answer>
  
Extract the final solution to the task from the provided text. Remove statements of agreement, disagreement, and explanations. Do not modify the text. Do not output any text besides the solution. If there is no solution provided, just copy the previous response.


Figure 15: Prompt used to extract the final answer of a given agent from its previous response.

### E.2 Voting Prompts

System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

You are tasked with voting for the best solution from the list provided below based on the given task.
Task: <task>
  
Question: <input sample>
  
Here are the possible solutions:
Solution 1: <agent 1 final answer>
  
Solution 2: <agent 2 final answer>
  
Solution 3: <agent 3 final answer>
  
Based on the above solutions, please provide the number of the solution you are voting for. Answer only with the number.


Figure 16: Prompt used to get a vote from each agent for the Simple Voting decision protocol.


System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

You are tasked with approving any number of solutions from the list provided below based on the given task.
Task: <task>
  
Question: <input sample>
  
Here are the possible solutions:
Solution 1: <agent 1 final answer>
  
Solution 2: <agent 2 final answer>
  
Solution 3: <agent 3 final answer>
  
Based on the above solutions, please provide the numbers of the solutions you are approving, separated by commas. Answer only with the numbers.


Figure 17: Prompt used to get a vote from each agent for the Approval Voting decision protocol.


System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

You are tasked with distributing 10 points among the provided solutions based on the given task.
Task: <task>
  
Question: <input sample>
  
Here are the possible solutions:
Solution 1: <agent 1 final answer>
  
Solution 2: <agent 2 final answer>
  
Solution 3: <agent 3 final answer>
  
Based on the above solutions, please distribute 10 points among the solutions. Provide your points allocation as a JSON dictionary where keys are solution numbers (as int) and values are the points. The total points should sum up to 10. Answer only with the JSON dictionary.


Figure 18: Prompt used to get a vote from each agent for the Cumulative Voting decision protocol.


System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

You are tasked with ranking the solutions from the most preferred to the least preferred based on the given task.
Task: <task>
  
Question: <input sample>
  
Here are the possible solutions:
Solution 1: <agent 1 final answer>
  
Solution 2: <agent 2 final answer>
  
Solution 3: <agent 3 final answer>
  
Based on the above solutions, please provide the rankings of the solutions separated by spaces. Example: ’0 2 1’ if you prefer Solution 0 the most, then Solution 2, and finally Solution 1. Provide up to 5 rankings. Only answer with the rankings.


Figure 19: Prompt used to get a vote from each agent for the Ranked Voting decision protocol.

### E.3 Challenge Prompt

System Prompt:
  

You are a participant in a group discussion.
Your role: <persona> (<persona description>)
User Prompt:
  

The task is: <task>. The question is: <question>.
This is the final answer generated by the discussion: <final\_answer>.
Please critically evaluate this answer. If you agree with the final answer, respond with the exact word ’AGREE’ to confirm. If you do not agree, respond with the exact word ’DISAGREE’ to challenge the answer.


Figure 20: Prompt used to challenge the final answer.


System Prompt:
  

You are a participant in a group discussion.
Your role: <persona> (<persona description>)
User Prompt:
  

The task is: <task>. The question is: <question>.
This is the final answer generated by the discussion: <final\_answer>.
You dont agree with the final answer. Please provide a new answer to the question. Include the letter corresponding to your answer in the solution.


Figure 21: Prompt used to generate a new answer in case the final answer got challenged.
