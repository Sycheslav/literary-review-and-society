---
id: arxiv-2607-05477-prompts
type: material
title: 'Опубликованные разделы о промптах: Decision Protocols in Multi-Agent Large Language Model Conversations'
source_id: arxiv-2607-05477
source_url: https://arxiv.org/html/2607.05477v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 83f76d3f0d34d14e871d934b8c7b9980785be889fff01aab0130e96d40f2d446
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix B Prompts

### B.1 Final Answer Extraction

System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

You are tasked with creating a final solution based on the given input and your previous response.
Task: <task>
  
Input: <input sample>
  
Your previous response: <previous answer>
  
Extract the final solution to the task from the provided text. Remove statements of agreement, disagreement, and explanations. Do not modify the text. Do not output any text besides the solution. If there is no solution provided, just copy the previous response.


Figure 25: Prompt used to extract the final answer of a given agent from its previous response.

### B.2 Voting Prompts

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


Figure 26: Prompt used to get a vote from each agent for the Simple Voting decision protocol. No alterations are applied.


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


Figure 27: Prompt used to get a vote from each agent for the Approval Voting decision protocol. No alterations are applied.


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


Figure 28: Prompt used to get a vote from each agent for the Cumulative Voting decision protocol. No alterations are applied.


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


Figure 29: Prompt used to get a vote from each agent for the Ranked Voting decision protocol. No alterations are applied.

### B.3 Judge Prompt

User Prompt:
  

Task: <task>
  
Question: <input sample>
  
Please provide a decision on the following solutions and combine them in a single answer to solve the task. Only answer with the solution:
Solution 1: <agent 1 final answer>
  
Solution 2: <agent 2 final answer>
  
Solution 3: <agent 3 final answer>


Figure 30: Prompt used to get a final decision from the Judge decision protocol. No alterations are applied.

### B.4 Confidence Prompt

System Prompt:
  

Your role: <persona> (<persona description>)
User Prompt:
  

The task is: <task>. The question is: <input\_sample>. This is the final answer you provided: <final\_answer>. Based on this information, please generate a confidence score between 0 and 100 for the final answer. Be critical and only answer with the number.


Figure 31: Prompt used to get a confidence score from each agent for the voting alterations experiment.

### B.5 Challenge Prompt

System Prompt:
  

You are a participant in a group discussion.
Your role: <persona> (<persona description>)
User Prompt:
  

The task is: <task>. The question is: <question>.
This is the final answer generated by the discussion: <final\_answer>.
Please critically evaluate this answer. If you agree with the final answer, respond with the exact word ’AGREE’ to confirm. If you do not agree, respond with the exact word ’DISAGREE’ to challenge the answer.


Figure 32: Prompt used to challenge the final answer.


System Prompt:
  

You are a participant in a group discussion.
Your role: <persona> (<persona description>)
User Prompt:
  

The task is: <task>. The question is: <question>.
This is the final answer generated by the discussion: <final\_answer>.
You dont agree with the final answer. Please provide a new answer to the question. Include the letter corresponding to your answer in the solution.


Figure 33: Prompt used to generate a new answer in case the final answer got challenged.
