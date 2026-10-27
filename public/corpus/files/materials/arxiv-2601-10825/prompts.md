---
id: arxiv-2601-10825-prompts
type: material
title: 'Опубликованные разделы о промптах: Reasoning Models Generate Societies of Thought'
source_id: arxiv-2601-10825
source_url: https://arxiv.org/html/2601.10825v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 11a159a38238f366dadbe6748046ec9f9bb40cdd4c6be47039e8731d59e945c9
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

##### Countdown Task Prompt

We use the following prompt template: Using the numbers [79, 17, 60], create an equation that equals 36. You can use basic arithmetic operations (+, -, \*, /) and each number can only be used once. Show your work in <think> </think> tags. And return the final answer in <answer> </answer> tags, for example <answer> (1 + 2) / 3 </answer>.

### Supplementary Methods: LLM-as-Judge prompts

#### Conversational Behaviors

Your task is to analyze the following text and count how many times behaviors corresponding to each of the four dimensions appear.
\*\*Text to Analyze:\*\*
{chain\_of\_thought}
—
You must output a single valid JSON object with the exact schema below and nothing else.
{{
"Question\_and\_Answering": <int>,
"Perspective\_Shift": <int>,
"Conflict\_of\_Perspectives": <int>,
"Reconciliation": <int>
}}
Use the following definitions:
1. \*\*Question and Answering\*\* — A question is posed and later answered, as in conversations.
(e.g., "Why…? Because…", "What if…? Then…", "How do we know? Well…", "Let’s try X…? This gives us Y")
2. \*\*Perspective Shift\*\* — A transition to a different idea, viewpoint, assumption, or approach, as in conversations.
3. \*\*Conflict of Perspectives\*\* — Expressions of disagreement, correction, or tension with another perspective.
(e.g., "Wait, that can’t be right…", "No, actually…", "This contradicts…")
4. \*\*Reconciliation\*\* — Conflicting views are integrated or resolved into a coherent synthesis.
(e.g., "So perhaps both are true if…", "Combining these insights…", "This resolves the tension…")
For each category, count the number of distinct times the behavior occurs in the chain of thought and return the result as integers. If none are present, use 0.

#### Socio-Emotional Roles

You are an expert in Bales’ Interaction Process Analysis (IPA). Your task is to analyze the following chain-of-thought or group interaction transcript and count how many times behaviors corresponding to each of the 12 IPA categories appear in the transcript.
Transcript:
{chain\_of\_thought}
You must output a single valid JSON object with the exact schema below and nothing else.
{{
"IPA\_counts": {{
"1\_Shows\_solidarity": <int>,
"2\_Shows\_tension\_release": <int>,
"3\_Agrees": <int>,
"4\_Gives\_suggestion": <int>,
"5\_Gives\_opinion": <int>,
"6\_Gives\_orientation": <int>,
"7\_Asks\_for\_orientation": <int>,
"8\_Asks\_for\_opinion": <int>,
"9\_Asks\_for\_suggestion": <int>,
"10\_Disagrees": <int>,
"11\_Shows\_tension": <int>,
"12\_Shows\_antagonism": <int>
}}
}}
Use the following definitions:
1. \*\*Shows solidarity\*\* — raises other’s status, gives help, reward
2. \*\*Shows tension release\*\* — jokes, laughs, shows satisfaction
3. \*\*Agrees\*\* — shows passive acceptance, understands, concurs, complies
4. \*\*Gives suggestion\*\* — gives direction, implying autonomy (e.g., "should…", "need to…", "let us…")
5. \*\*Gives opinion\*\* — gives evaluation, analysis, expresses feeling or wish
6. \*\*Gives orientation\*\* — provides objective or verifiable information, repeats, clarifies, confirms
7. \*\*Asks for orientation\*\* — requests information, repetition, or confirmation
8. \*\*Asks for opinion\*\* — requests evaluation, analysis, or expression of feeling
9. \*\*Asks for suggestion\*\* — requests possible ways of action or direction
10. \*\*Disagrees\*\* — shows passive rejection, formality, or withholds help
11. \*\*Shows tension\*\* — expresses uncertainty, asks for help, withdraws from the field
12. \*\*Shows antagonism\*\* — deflates other’s status, defends or asserts self
For each category, count the number of distinct times the behavior occurs in the transcript and return the result as integers. If none are present, use 0.

#### Problem Complexity

You are an impartial evaluator. Your task is to rate the intrinsic difficulty of the problem
for a capable language model under zero-shot conditions.
Use the following scale:
1 = very easy
2 = easy
3 = somewhat easy
4 = moderate
5 = somewhat difficult
6 = difficult
7 = very difficult
Return ONLY a JSON object in the form:
{"difficulty": <integer from 1 to 7>}
Problem:

#### Cognitive Behaviors

Here is a chain-of-reasoning that a Language Model generated.
Model’s reasoning:
{chain\_of\_thought}
Evaluate whether the chain-of-reasoning contains any of the following behaviors.
1) Answer Verification
We want to mark instances where the chain-of-reasoning explicitly checks the current result against the target solution.
Examples:
- “This sequence results in 1, which is not equal to 22”
- “Since 25 is not equal to 22”
If you find any answer-verification steps, please count them and provide the count as "verification\_count". If the chain-of-reasoning does not contain any answer-verification steps, please provide a count of 0.
2) Backtracking
Evaluate whether the chain-of-reasoning contains any backtracking behavior, where the model realizes a path won’t work and explicitly goes back to try a different approach. We want to mark instances where the chain-of-reasoning is abandoned and the model backtracks to a previous reasoning step.
Examples:
- “Let me try again”
- “We need to try a different sequence”
Count the number of distinct backtracking instances and provide the count as "backtracking\_count". If the chain-of-reasoning does not contain any backtracking behavior, please provide a count of 0.
3) Subgoal Setting
Evaluate whether the chain-of-reasoning contains any explicit subgoal setting, where the model breaks down the problem into smaller, intermediate goals.
Example:
- “First, I’ll try to get close to half the target, then…”
Count the number of distinct subgoals set and provide the count as "subgoal\_count". If the chain-of-reasoning does not contain any subgoal setting, please provide a count of 0.
4) Backward-Chaining
Evaluate whether the chain-of-reasoning contains any backward-chaining behavior, where the model starts from the target solution and works backwards to the initial problems.
Examples:
- “Let’s work backwards from the target. 24/2 = 12. So, 12\*2 = 24.”
- “Since the target is 22, and 22 + 3 = 25, …”
Count the number of distinct backward-chaining instances and provide the count as "backward\_count". If the chain-of-reasoning does not contain any backward-chaining behavior, please provide a count of 0.
Output ONLY a single valid JSON object with EXACTLY these keys:
{{
"verification\_count": <int>,
"backtracking\_count": <int>,
"subgoal\_count": <int>,
"backward\_count": <int>
}}

#### Persona Identification Prompt

Your task is to analyze the following text to identify the number of distinct perspectives (agents or voices).
A perspective is defined as a distinct cognitive perspective or reasoning role within the text. Indicators of a perspective may include:
- Transitional markers (e.g., "however," "but," "alternatively," "wait," "let me check," "actually," "on the other hand")
- Shifts between cognitive roles (e.g., problem setup, calculation, verification, error correction, summarization)
- Changes in rhetorical purpose or approach
- Corrections or reconsiderations
- Movement between subproblems
- Domain knowledge
- Personality traits
For each distinct perspective, you will infer its personality by answering the 10 questions of the BFI-10 questionnaire as if you were that agent. You will also provide a concise profile of its domain expertise.
Your final output must be a single, valid JSON object and nothing else. Do not include any text or explanations before or after the JSON object.
\*\*Text to Analyze:\*\*
{chain\_of\_thought}
—

### Supplementary Methods: SFT Data Generation Prompts

#### Generating Monologue-Like Reasoning Traces for Supervised Fine-Tuning

{task}
Answer: Enclose your step-by-step reasoning within <think> and </think> before answering. Do not answer directly without reasoning.

#### Generating Conversation-Like Reasoning Traces for Supervised Fine-Tuning

{task}
Answer: You are simulating a collaborative group of thinkers solving a problem. Each thinker has a distinct persona and engages in a realistic, back-and-forth conversation. Thinkers may speak in any order and as many times as needed—no fixed turn order required. Keep all output strictly inside the tags defined below—no stray text. Present your answer between <group\_solution> and </group\_solution>. Do not try to be overly positive or polite during the conversation; focus on puzzle-solving, and note that disagreements can be helpful for the reasoning.
Assume that there are 2/3/4 thinkers and follow exactly the tag structure below:
<cast\_of\_characters>
<persona1>
[Brief persona for thinker 1 – personality traits, domain expertises, and reasoning styles]
</persona1>
<persona2>
[Brief persona for thinker 2 – personality traits, domain expertises, and reasoning styles]
</persona2>
<persona3>
[Brief persona for thinker 3 – personality traits, domain expertises, and reasoning styles]
</persona3>
<persona4>
[Brief persona for thinker 4 – personality traits, domain expertises, and reasoning styles]
</persona4>
</cast\_of\_characters>
<conversation>
<!– Each block is one utterance. Use <thinkX> … </thinkX> to indicate who is speaking.
The order of speakers is entirely flexible. Thinkers can speak multiple times in a row. –>
<think1>
…
</think1>
<think2>
…
</think2>
<think3>
…
</think3>
<think4>
…
</think4>
</conversation>
<group\_solution>
Answer
</group\_solution>
