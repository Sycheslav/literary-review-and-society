---
id: arxiv-2503-01935-prompts
type: material
title: 'Опубликованные разделы о промптах: MultiAgentBench: Evaluating the Collaboration and Competition of LLM
  agents'
source_id: arxiv-2503-01935
source_url: https://arxiv.org/html/2503.01935v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: e3b1e68ed1f82e9d388b36560d90bd12b268eb9d7b784d8b88d793e6680b0727
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.12 Important Prompts

In addition to the Minecraft scenario details discussed above, we also employ several key prompts for evaluating multi-agent collaboration and task outcomes. Below, we showcase three of the most important prompts:

- •

  Collaboration Score (Communication and planning) Prompt.
- •

  Research Task Score (5Q) Prompt.
- •

  KPI Prompt.

These prompts serve critical roles in assessing the quality of agent interactions, the innovation and feasibility of research tasks, and the achievement of key milestones.
Other environment-specific prompts (such as those used in the Werewolf scenario) are more numerous and specialized, and thus are omitted here for brevity.

Communication Evaluation Prompt

Prompt Overview:
This prompt is used to assess how well agents communicate decisions, clarity, alignment with their profiles, and adherence to social relationships in a multiagent system.
Prompt Content (Verbatim):

```
Task: {truncate_text(task)}
Agent Profiles: {agent_profiles}
Social Relationship: {relationship}

Aggregated Task Results:
{task_results_all}

Aggregated Communication Data:
{communications_all}

[System] You are tasked with evaluating the quality of communication among
agents operating within a multiagent system. Evaluate whether agents made
effective decisions based on the provided task results and whether their
communication aligns with their agent profiles and social relationships.
Consider the following:
1. Effective Decision-Making: Did agents use task results to guide their
   decisions effectively?
2. Clarity and Precision: Were communications clear and unambiguous?
3. Adherence to Social Relationships: Did communications reflect the expected
   interactions based on the agents’ social relationships?
4. Alignment with Agent Profiles: Were the messages consistent with the
   defined agent profiles?
5. Overall Effectiveness: Did the communication facilitate task progress,
   considering both cooperative and competitive aspects?

Scoring Criteria (Communication):
- 5 (Exceptional): Outstanding communication with clear, precise messages
  fully aligned with agent profiles and social relationships.
  Example: Every agent provided concise, accurate, and strategic information
  that directly advanced the task.

- 4 (Very Good): Mostly effective communication with only minor lapses
  and slight ambiguities.
  Example: Occasional minor unclear messages, but overall effective.

- 3 (Adequate): Acceptable communication with moderate ambiguities or
  inconsistencies.
  Example: Some messages were vague and did not fully meet required standards.

- 2 (Poor): Frequent unclear or misaligned communications causing significant
  miscommunication.
  Example: Repeated incoherence negatively impacted task progress.

- 1 (Very Poor): Largely ineffective communication with confusing messages and
  complete misalignment.
  Example: Chaotic communication with severely flawed decisions.

Please provide your answer in a JSON code block in the following format:
‘‘‘json
{
  "score": 5
}
```


Figure 22: Communication Prompt used to evaluate clarity, decision-making, and alignment with social relationships/profiles in a multiagent system.


Planning Evaluation Prompt

Prompt Overview:
This prompt is used to evaluate the *planning* aspect in a multiagent system.
It checks whether task assignments, role definitions, workload distribution,
and strategic coordination are effectively handled across multiple iterations.
Prompt Content (Verbatim):

```
Agent Profiles: {agent_profiles}

Aggregated Planning Data from All Iterations:
{planning_all}

[System] You are tasked with evaluating the effectiveness of the planning process in a multiagent
system. Evaluate whether the planning across all iterations demonstrates clear
role definitions, effective task assignments, and a rational workload distribution
that aligns with each agent’s profile. Consider the following:
1. Clarity of Task Assignment: Were tasks assigned in a clear and unambiguous manner?
2. Definition of Roles: Were roles and responsibilities clearly defined in each iteration?
3. Workload Distribution: Was the distribution of tasks reasonable and aligned
with each agent’s profile?
4. Effectiveness of Outcomes: Did the planning lead to successful progress in task
advancement across iterations?
5. Overall Strategic Coordination: Did the planning incorporate effective
cooperation and competition strategies?

Scoring Criteria (Planning):
- 5 (Exceptional Planning): Planning is exemplary; every iteration shows clear, well-structured task
assignments with roles perfectly defined and workloads optimally distributed,
consistently advancing the objectives.
  Example: All plans were strategic, with perfect alignment to agent profiles and minimal ambiguity.

- 4 (Very Good Planning): Planning is mostly effective with only minor ambiguities;
roles are clear and task assignments are appropriate, though there were slight inefficiencies.
  Example: Only occasional parts were a bit vague, but overall the planning was reasonable.

- 3 (Adequate Planning): Planning is acceptable but shows moderate ambiguities or inefficiencies.
In some iterations, role definitions or task assignments were not entirely clear or well-matched
to agent capabilities.
  Example: Some plans were vague or did not fully match the agents’ capabilities.

- 2 (Poor Planning): There were frequent ambiguities in task assignments and role definitions;
planning was inconsistent and did not align well with agent profiles, resulting in
noticeable inefficiencies.
  Example: Multiple instances of unclear roles and unreasonable task distributions were observed.

- 1 (Very Poor Planning): Planning was severely flawed; task assignments were unclear,
roles were undefined, and workload distributions were unreasonable, hindering progress.
  Example: The planning was chaotic, lacking clear strategy and alignment with agent profiles.

Please provide your answer in a JSON code block in the following format:
‘‘‘json
{
  "score": 5
}
```


Figure 23: Planning Prompt used to evaluate how well the agents define roles, assign tasks, and distribute workloads in a multiagent system, with automatic line wrapping.


KPI Evaluation Prompt

Prompt Overview:
This prompt is used for Key Performance Indicator (KPI) assessment within a multiagent research task, determining whether specific milestones (like “form 5q” or “improve 5q”) have been achieved in each iteration.
Prompt Content (Verbatim):

```
[Context]
**Task:**
{task}

**Iteration {iteration_index} Details:**
Previous Summary: {prev_summary}
Current Summary: {current_summary}
Current Task Results: {current_task_results}

[System]
You are a KPI assistant for research tasks. For this iteration, determine if
a milestone has been achieved and specify its type.
A milestone is defined as either:
1. Successfully formulating a meaningful ’5q’ (five core questions) –
   label this as "form 5q".
2. Making significant improvements upon previous iterations based on
   the previous summary and task results – label this as "improve 5q".

When listing the "contributing_agents", if multiple agents contributed
to the milestone, only include the top 2 to 3 core contributors. Do not
include agent IDs that did not directly help with the milestone.

Output your answer in JSON format as follows:
{
  "milestone_achieved": true or false,
  "milestone_type": "form 5q" or "improve 5q" (if milestone_achieved is true;
                     otherwise, an empty string),
  "contributing_agents": [list of agent IDs]
}

[Example JSON Output]
{
  "milestone_achieved": true,
  "milestone_type": "form 5q",
  "contributing_agents": ["agent1", "agent2"]
}

[Question]
Based on the provided iteration details, determine if a milestone was achieved,
specify its type, and list the core contributing agents.
"""
```


Figure 24: KPI Prompt used to check if milestones such as “form 5q” or “improve 5q” have been achieved in a research iteration.


Task Score (5Q) Evaluation Prompt

Prompt Overview:
This prompt specifically addresses the final research idea’s innovation, safety, and feasibility—often referred to as a “5Q” structure. If no valid 5Q answer is found, the score defaults to 1 for all aspects.
Prompt Content (Verbatim):

```
[Context]
Task:
{task}

Result:
{aggregated_summary}

[System]
Please act as an impartial evaluator and assess the final research idea based on the provided context.
Focus on the following aspects in your evaluation:
- Innovation: Does the research idea present novel concepts or approaches that advance the field?
- Safety: Are there any potential ethical, legal, or safety concerns associated with
the research idea?
- Feasibility: Is the research idea practical and achievable with current resources and technology?

Use the 5-point scale criteria below to guide your evaluation for each aspect:
1. 5 points: Excellent - Exceeds expectations in this aspect.
2. 4 points: Good - Meets expectations with minor improvements needed.
3. 3 points: Average - Adequate but with noticeable areas for improvement.
4. 2 points: Below Average - Significant issues that need addressing.
5. 1 point: Poor - Does not meet the basic requirements in this aspect.

Additional Instructions:
- If based on the provided summaries, a coherent 5q answer cannot be organized, assign the lowest
score (1) for all three aspects.
- If multiple 5q responses are present, use the most recent evaluation.
- Be strict in scoring: Identify any deduction points from the summaries and deduct the
corresponding scores accordingly to calculate the final score.

[Question]
Based on the context provided, please evaluate the research idea in terms of its innovation, safety,
and feasibility.
After providing your explanation, output your ratings in the following JSON format:

{
 "innovation": rating,
 "safety": rating,
 "feasibility": rating
}

For example, if you rate innovation as 4, safety as 5, and feasibility as 3, you would output:

{
 "innovation": 4,
 "safety": 5,
 "feasibility": 3
}
```


Figure 25: Task Score (5Q) Prompt for assessing the final research idea’s innovation, safety, and feasibility, with automatic line wrapping.
