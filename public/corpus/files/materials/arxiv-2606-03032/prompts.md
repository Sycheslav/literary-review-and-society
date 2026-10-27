---
id: arxiv-2606-03032-prompts
type: material
title: 'Опубликованные разделы о промптах: The Deliberative Illusion: Diagnosing Factual Attrition and Stance Homogenization
  in Multi-Agent LLM Deliberation'
source_id: arxiv-2606-03032
source_url: https://arxiv.org/html/2606.03032v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: c7bfa4e37ca517cb33b3c2dece9581d9a94bbc5610ba05d9c0caa768e4b0d633
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### B.1 Fact Construction Prompt

The fact construction of DelibTrace contains three steps. In each step, we employ GPT-5 to obtain the results, where we provide the prompts of each step as follows:

#### Factual Extraction

We provide the background description $\mathcal{B}$ as *text*.

Factual Extraction Prompt

Objective:
You are an expert information extraction system. Extract atomic factual statements from the text.
Definition of an Atomic Fact:
An atomic fact is a minimal, self-contained, and verifiable proposition that expresses a single explicit event, state, or relationship described in the text.
Guidelines:
1. Explicitness
- Extract only information explicitly stated in the post.
- Do not infer, interpret, or use external knowledge.
2. Atomicity
- Each fact must express one single piece of information.
- If a sentence contains multiple independent facts, split them.
3. Self-Containment
- Resolve pronouns and references using the context.
- Each fact must be understandable without additional context.
4. Faithfulness
- Preserve the original meaning exactly.
- Do not paraphrase in a way that changes semantics.
5. Verifiability
- Each fact must be traceable to a specific part of the text.
6. Objectivity
- Exclude opinions, speculation, rhetorical statements, and emotional language unless explicitly attributed.
7. No Redundancy
- Do not produce duplicate or semantically equivalent facts.
Output format (A JSON list):
["fact 1", …, "fact n"]
Return only valid JSON.
Text:
*text*

#### Factual Filtering

We provide the background description $\mathcal{B}$ as *text* and the initial atomic facts $\{\bar{c}\_{i}\}\_{i=1}^{\bar{m}}$ as *facts*.

Faction Filtering Prompt

Objective:
You are an expert information extraction system. Given an original text and the corresponding initial extracted atomic factual statement set, refine the statement set.
Guidelines:
- You can merge or delete existing factual statements.
- You can only merge statements when they share similar meanings.
- You can only delete statements when they contain information unrelated to the main idea of the original text.
- You should ensure the refined set retains the key information of the original text.
- You can add some fact statements that are important to understand the whole text.
- You should ensure the refined set contains a maximum of 15 statements.
Output format (A JSON list):
["fact 1", …, "fact n"]
Return only valid JSON.
Text:
*text*
Factual Statements:
*facts*

#### Factual Evaluation

We provide the question $q$ as *question* and refined atomic facts as $\{c\_{i}\}\_{i=1}^{m}$ as *facts*.

Factual Evaluation

Objective:
You are an expert information extraction system. Given an atomic factual statement set and a yes or no question, judge which factual statements are important to debate this question.
Definition:
A statement is "important" if it provides evidence, context, or reasoning that could influence whether the answer is YES or NO.
Guidelines:
- Evaluate each statement independently.
- Label each statement as 1 (Important) or 0 (Not Important).
- Do not explain your reasoning.
Output format (A JSON list):
[<0 or 1>, …, <0 or 1>]
Question:
*question*
Factual Statements:
*facts*

### B.4 Discussion Prompts

The discussion prompts have two variants. The first prompt is employed to generate the initial viewpoint, given the perspective $\mathcal{B}\_{i}$ as *facts*, question $q$ as *question*, and a predetermined stance $\theta\_{i}$ as *stance*.

Discussion Initialization Prompt

Objective:
You are simulating an online social user. You are given several facts and a yes or no question.
Please write a post to express your opinion.
Guidelines:
- Ensure your post mentions all facts.
- Express your opinion clearly.
The question is *question* and your answer is *stance*.
Facts:
*facts*

The stances include “Yes” and “No”, denoting support and opposition correspondingly.

The second prompt is employed to continue the discussion, given the question as *question*, previous viewpoint *previous*, and others’ viewpoints as *others*.

Discussion Continue Prompt

Objective:
You are simulating an online social user. You are continuing a discussion about the question: *question*
You previously expressed your own view based on your known facts, and other participants have shared theirs.
Task:
Based on your previous view and the others’ statements, update your view about this question.
Guidelines:
- *setting*
- Remain your known facts as much as possible
- Remain the details about the event
- Express your opinion about the question clearly
- Consider others’ perspectives, but do not assume they are fully correct
- You may change your view, keep it, or express uncertainty
- Write naturally, as if speaking in a discussion
Output:
Write one coherent paragraph describing your view.
Other participants’ views:
*others*
Your previous view:
*previous*

We prompt LLMs to remain known facts explicitly. However, the LLMs still lose facts during the multi-agent discussion, highlighting that it is a fundamental limitation. We employ *setting* to set the persona of each agent. In the main experiments, we employ it as “You consider others’ perspectives carefully but only adjust your view when sufficiently persuaded.” In the further discussion, we replace it with “You are highly receptive to others’ arguments and readily revise your views when presented with reasonable points.” (open-minded) and “You strongly prioritize your original viewpoint and are unlikely to change it unless confronted with overwhelming evidence.” (stubborn) to evaluate the impact of persona settings.

### B.5 Evaluation Prompt

Given a viewpoint generated by an agent, we prompt GPT-5 to obtain its containing facts and stance by the following prompts.

To obtain the fact set, we employ:

Fact Evaluation Prompt

You are a fact alignment evaluator.
You are given:
1. A fixed set of atomic facts, each with an ID.
2. A piece of text.
Your task is to determine which atomic facts are explicitly or implicitly expressed in the target text.
Matching Rules:
- Only select facts that are clearly supported by the text.
- Do NOT assume facts that are not stated.
- Paraphrases count as matches.
- If a fact is only partially supported, do NOT select it.
- Do NOT use external knowledge.
- The fact must be entailed by the text.
Output format (JSON only):
{"matched\_fact\_ids": [2,4,6,8]
}
Atomic Facts:
*facts*
Target Text:
*text*

The *facts* denotes the complete atomic fact set, and the *text* denotes the evaluated viewpoint.

To obtain the stance, we employ:

Stance Evaluation Prompt

You are analyzing an online text to infer the author’s answer to a yes/no question.
Task:
Based on the comment, infer whether the author would answer YES or NO to the question.
Rules:
- Answer YES if the author’s opinion implies support for the action in the question.
- Answer NO if the author’s opinion implies opposition to the action.
Important:
- The comment may not directly mention the question.
- You must infer the author’s reasoning and apply it to the question.
- Consider logical implications (e.g., if the author believes something causes harm, they likely oppose it).
- Be careful with indirect reasoning, sarcasm, or hypothetical statements.
Question:
*question*
Text:
*text*
Answer (YES/NO only):

The *question* denotes the question, and the *text* denotes the evaluated viewpoint.

### D.9 Persona Prompting Details

We test whether persona-level prompting can reduce factual attrition by changing agents’ deliberative behavior. In addition to the default discussion prompt, we introduce two persona variants. The open-minded setting adds: “*You are highly receptive to others’ arguments and readily revise your views when presented with reasonable points.*” The stubborn setting adds: “*You strongly prioritize your original viewpoint and are unlikely to change it unless confronted with overwhelming evidence.*” These settings manipulate agents’ willingness to revise their stances, allowing us to test whether greater receptiveness or stronger stance persistence improves factual retention during discussion.
