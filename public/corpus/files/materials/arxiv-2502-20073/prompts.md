---
id: arxiv-2502-20073-prompts
type: material
title: 'Опубликованные разделы о промптах: Collab-Overcooked: Benchmarking and Evaluating Large Language Models
  as Collaborative Agents'
source_id: arxiv-2502-20073
source_url: https://arxiv.org/html/2502.20073v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 02dd636a4c26ba54979077c9d17e7653609bb4b3dd39347b2d63f0fd0461390b
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### A.3.2 Prompt

In this section, we provide a detailed description of the prompts used to drive LLM-based agents. Since LLM-MAS involves multiple agents interacting within an environment, the prompt design is inherently more complex than that of a single-agent system. Each request to the LLM typically consumes approximately 2,000 tokens, with slight variations depending on the specific tokenizer used by the LLM. To structure this complexity, we categorize the prompts into three key components: game rules, action space definitions, and input-output format specifications. We will elaborate on each component and provide illustrative examples to demonstrate their implementation.

##### Game Rules

The game rules part of the prompt defines the task objective, agent roles, and interaction constraints. It outlines the step-by-step workflow for completing an order, emphasizing task division, coordination, and strict adherence to recipe instructions. Figure [13](https://arxiv.org/html/2502.20073v3#A3.F13 "Figure 13 ‣ Case 4: Failed Initiating and Responding ‣ C.5 Case Study ‣ Appendix C Supplementary Experiment ‣ Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents") shows all the content of the game rule prompt.

##### Action Space Definitions

This part of the prompt defines the action space for Agent Bob, following the action specification method used in ProAgent [Zhang et al. (2024a)](https://arxiv.org/html/2502.20073v3#bib.bib37). It categorizes actions into operation actions (directly executable by the agent) and collaborative actions (requests for the teammate to perform an action). Figure [14](https://arxiv.org/html/2502.20073v3#A3.F14 "Figure 14 ‣ Case 4: Failed Initiating and Responding ‣ C.5 Case Study ‣ Appendix C Supplementary Experiment ‣ Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents") shows the prompt of Agent Bob’s action space.

##### Input-Output Format

The input-output format part defines the structured information provided to the agent at each step and the required response format. The input includes past action history, lessons from failures, available utensils, the current order, the planned sequence of actions, and past conversations. The output consists of three fields: analysis (environment assessment and reasoning for actions), plan (the agent’s planned actions for the next step), and say (communication with the teammate, if necessary). This structured format ensures that the agent can make informed decisions, coordinate effectively, and execute tasks systematically. [15](https://arxiv.org/html/2502.20073v3#A3.F15 "Figure 15 ‣ Case 4: Failed Initiating and Responding ‣ C.5 Case Study ‣ Appendix C Supplementary Experiment ‣ Collab-Overcooked: Benchmarking and Evaluating Large Language Models as Collaborative Agents") shows all the content of the input-output format prompt.

The above section outlines the key prompts used to drive the LLM agents. For further details regarding prompts related to memory, reflection, and other components, please refer to the comprehensive prompts provided in our GitHub repository.
