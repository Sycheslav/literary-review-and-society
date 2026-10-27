---
id: arxiv-2509-18052-prompts
type: material
title: 'Опубликованные разделы о промптах: The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM
  Societies'
source_id: arxiv-2509-18052
source_url: https://arxiv.org/html/2509.18052v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 06ee21adf6fabc38630ee8a1a9e27e410f653a3fe4d5ef6b8c5193c13ece844f
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

##### Robustness to Prompt Variations.

To ensure that the observed behavioral shifts are attributable to PIMMUR violations rather than idiosyncratic prompt sensitivity ([Ye et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib72)), we performed a semantic-preserving perturbation test on the fake news propagation and the social network growth tasks.
We introduced comparable lexical changes to the prompts to match the magnitude of lexical variance required to implement our principles.

For fake news propagation, while these perturbations induced minor baseline shifts—such as a higher global tendency toward skepticism—the structural findings remained invariant (Fig. [4a](https://arxiv.org/html/2509.18052v4#S2.F4.sf1 "Figure 4a ‣ Figure 4 ‣ 2.3.4 The Herd (Bandwagon) Effect ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies");[4b](https://arxiv.org/html/2509.18052v4#S2.F4.sf2 "Figure 4b ‣ Figure 4 ‣ 2.3.4 The Herd (Bandwagon) Effect ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies");[4c](https://arxiv.org/html/2509.18052v4#S2.F4.sf3 "Figure 4c ‣ Figure 4 ‣ 2.3.4 The Herd (Bandwagon) Effect ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")).
The discrepancy in the number of infected agents persisted even in the rephrased versions, with a statistically significant difference observed between the original and our simulations (mean difference $=16.1$; 95% CI: $[8.2,24.1]$; $t(17)=4.48$; $P=0.009$).
Crucially: (1) the performance gap between the “Original” and “Ours” conditions persisted across all paraphrased versions; and (2) behaviors in the “Ours” condition consistently aligned more closely with the “Reverse” control than with the “Original” setting.
This suggests that the reported social phenomena in prior studies are not robust to methodological rigor and are likely artifacts of prompt-driven biases.

For social network growth, the power-law tail remains non-rejectable in both conditions ($N=300$): the original design gives $\alpha=2.142$, $D\_{\text{KS}}=0.069$, $P\_{\text{boot}}=0.965$, and our redesign gives $\alpha=2.233$, $D\_{\text{KS}}=0.097$, $P\_{\text{boot}}=0.581$.
Both bootstrap $P$ values remain well above the conventional threshold of 0.10, as in the unperturbed run, and the two exponents remain close to one another (Fig. [4d](https://arxiv.org/html/2509.18052v4#S2.F4.sf4 "Figure 4d ‣ Figure 4 ‣ 2.3.4 The Herd (Bandwagon) Effect ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")).
The conclusion is therefore not an artifact of the particular wording we used.

## Appendix A Prompts

All italic texts that start with “#” denote our comments, which are not included in the prompts fed into LLMs.

### A.1 Prompts for the Systematic Review

The following prompt is used to screen candidate papers according to the predefined inclusion and exclusion criteria.
During title-abstract screening, only title and abstract is provided in [paper content], while in full text screening, the full paper (texts) and extracted figures (images) are additionally provided in [paper content].
The Unclear option is available only at the title-abstract screening stage.

Prompt for Paper Screening

You are screening candidate papers for inclusion in a methodological review of LLM-based multi-agent social simulation (MASS) studies under the PIMMUR framework.
Your task is to determine whether each study should be included, excluded, or marked as unclear based on the criteria below.
  
Inclusion Criteria
  
A study should be included only if all of the following are satisfied:
  
1. Multi-agent LLM simulation:
The study uses large language models (LLMs) as agents in a multi-agent simulation or interaction environment.
  
2. Social or collective behavior focus:
The study investigates collective human or social behaviors, such as group dynamics, social influence, cooperation, rumor spread, polarization, trust, norms, opinion dynamics, or related social phenomena.
  
3. Behavior emerges through group context or interaction:
The study examines either:
  
 – group-level collective dynamics, or
  
 – individual behavior shaped by interaction with, or exposure to, other agents or a group context.
  
4. Explicit simulation objective:
The paper specifies a clear simulation objective, research question, or social phenomenon being studied.
  
5. Sufficient methodological detail for PIMMUR assessment:
The paper provides enough methodological detail to evaluate at least the core design of the simulation under the PIMMUR framework. This may include prompts, interaction procedures, agent setup, memory setup, or evaluation protocol. If the paper open-sourced its codebase, we assume it contains sufficient methodological detail.
  
6. English and publicly accessible:
The study is written in English and the full text is publicly accessible at the time of screening.
  
Exclusion Criteria
  
A study should be excluded if any of the following apply:
  
1. Not a multi-agent LLM social simulation:
  
 – The study uses only a single agent, or
  
 – it does not use LLMs as social agents in an interactive or simulated social setting.
  
2. Purely task-oriented benchmark without social simulation:
The study is primarily a benchmark for tasks such as coding, mathematics, tool use, planning, or generic problem solving, without a social or collective behavioral objective.
  
3. No explicit social simulation goal:
The paper does not clearly define a collective behavior, social process, or simulation objective.
  
4. Insufficient methodological detail:
The paper does not provide enough information about prompts, interactions, agent behavior, or experimental setup to support methodological evaluation under the PIMMUR framework.
  
5. Not in scope as a research study:
The paper is an editorial, commentary, position piece, abstract-only item, or otherwise does not report an actual simulation study.
  
6. Not in English or not accessible:
The full text is not available in English or cannot be accessed at the time of screening.
  
Additional Notes
  
Some papers may study multiple social behaviors or have multiple simulation objectives. Include the paper if any one of its objectives or behaviors studied satisfies the criteria above.
  
Decision Rules
  
Include: All inclusion criteria are satisfied and no exclusion criterion applies.
  
Exclude: One or more exclusion criteria clearly apply.
  
Unclear: The available information is insufficient to confidently decide; the study should be reviewed at the next stage or discussed by reviewers.
  
Here is the paper:
  
[paper content]
  
Respond with only this format, on one line:
  
<reason for your verdict and which criteria the paper violates, if any> #### <Include | Exclude | Unclear>

The following prompt is used to identify distinct simulations and extract the corresponding metadata from each paper.
The full paper (texts) and extracted figures (images) are provided in [paper content].

Prompt for Simulation Extraction

You are extracting information from papers for methodological review of LLM-based multi-agent social simulation (MASS) studies under the PIMMUR framework.
Your task is to extract the required information and output it strictly following the output format specified below.
  
General Extraction Rules
  
1. Unit of extraction
  
 – Extract paper metadata once per paper.
  
 – Extract simulation metadata separately for each distinct simulation, experiment, or condition if they differ in agent setup, interaction design, prompt design, or evaluation structure.
  
2. Evidence source
  
 – Use the main paper, appendices, supplementary materials, released prompts, released code, and project repositories where available.
  
3. Faithful extraction
  
 – Record only information that is explicitly stated or can be reliably determined from the source materials.
  
 – If a field cannot be determined with reasonable confidence, mark it as missing / unclear rather than guessing.
  
4. Multiple values
  
 – If multiple values are reported for a field, record all relevant values, separated by semicolon “;”.
  
5. Ambiguity notes
  
 – If a classification is difficult or requires interpretation, add a short note explaining the rationale.
  
6. Missing information
  
 – If information is missing or cannot be found in the paper, use MISSING.
  
Current Task: Identify Distinct Simulation Settings
  
Identify all distinct simulation settings in the paper. Here is the complete paper with images:
  
[paper content]
  
Count two settings as different simulations when they:
  
 – investigate different social phenomena in different settings; or
  
 – use substantially different environments or interaction protocols.
  
Count them as the same simulation when they share the same social phenomenon, core prompts, and interaction protocol, and differ only in:
  
 – agent number or profiles;
  
 – seeds or initial information;
  
 – interaction rounds;
  
 – model or parameter settings;
  
 – phenomena of interest in the same environment;
  
 – datasets, repeated trials, controls, ablations, or robustness conditions.
  
Focus on the underlying simulation design, not every experimental condition.
  
For each simulation, report:
  
 – simulation\_setting: a concise short phrase of a few words for the simulation setting, such as herd effect or network formation and conformity.
  
 – social\_phenomenon: a short sentence describing the collective behavior or social phenomenon studied.
  
 – llm\_used: all LLM models used in the simulation.
  
 – num\_of\_agents: all reported agent counts relevant to the simulation, separated by semicolon.
  
 – interaction\_rounds: number of rounds of interaction; use -1 if there is no predetermined round limit.
  
 – notes: difficulty encountered when conducting the extraction; leave as an empty string if none.
  
Requirements
  
 – Create exactly one object per distinct simulation setting.
  
 – Group parameter variations, controls, ablations, seeds, agent counts, and repeated trials under the same object when they belong to the same underlying simulation.
  
 – Do not infer missing values. Use MISSING.
  
 – Preserve numerical values and model names exactly as reported when possible.
  
 – If a field has multiple reported values, include all relevant values separated by semicolon.
  
 – Always ensure the final output consists only of syntactically valid, directly parsable JSON with double quotes and no trailing commas.
  
Return only a valid JSON array. Do not include Markdown, explanations, or text outside the JSON. Use one object for each distinct simulation setting:
  
{
  
 "simulation\_setting": "",
  
 "social\_phenomenon": "",
  
 "llm\_used": "",
  
 "num\_of\_agents": "",
  
 "interaction\_rounds": "",
  
 "notes": ""
  
}

Since we use three different LLMs for extracting the simulations, we need to reconcile between the three judges.
The following prompt used for this purpose, consolidating candidate extractions into a definitive set of distinct simulations.
All simulations extracted by the three LLMs are provided in [extracted simulation list].

Prompt for Merging Simulation Candidates

[copy the prompt for simulation extraction here]
  
Now, merge the candidate extractions into one definitive list of distinct underlying simulation settings.
  
Rules
  
 – Prefer details supported by multiple candidates. Do not invent information; use MISSING when no candidate supports a value.
  
 – Combine complementary supported values with semicolons where appropriate.
  
 – Preserve short, clear descriptions and note material unresolved disagreement in notes.
  
 – Apply the following original stage-5 extraction instructions when deciding which candidates describe the same or distinct simulations. Use the complete paper as the primary evidence and the candidates as supplementary evidence.
  
Blinded candidate extractions:
  
[extracted simulation list]

The following prompt is used to extract data from each identified simulation.

Prompt for Data Extraction

You are extracting information from papers for a methodological review of LLM-based multi-agent social simulation (MASS) studies under the PIMMUR framework.
  
General Extraction Rules
  
1. Evidence source
  
 – Use the complete supplied paper, including appendices and figures.
  
2. Faithful extraction
  
 – Record only information explicitly stated or reliably determined from the supplied material.
  
 – Do not guess. Use unclear when a requested value cannot be determined with reasonable confidence.
  
 – If the paper identifies an external source that may contain unavailable information, record that source in external\_source; do not replace the unavailable field’s value of unclear.
  
3. Multiple values
  
 – When a requested free-text field has multiple relevant values, record all of them separated by semicolons.
  
4. Notes
  
 – Use notes only for a short explanation of a difficult or ambiguous coding decision. Leave it empty when there is no such issue.
  
The paper’s already-extracted simulation metadata is provided after the paper. It identifies the simulations to code, but must not be revised or repeated. Here is the complete paper with images:
  
[paper content]
  
Current Task: Extract PIMMUR Variables for Existing Simulations
  
The following simulation settings were already identified for paper [paper\_id]. Do not create, merge, split, rename, or otherwise revise them. Do not extract paper metadata, simulation metadata, prompts, or PIMMUR assessment variables. Extract one object for each requested simulation\_id only. Use the full paper to distinguish settings, especially when a paper has multiple simulations.
  
Profile
  
For each of these fields, use exactly true, false, or unclear:
  
 – has\_socio\_demographic: true only when socio-demographic attributes (for example age, gender, occupation, education, nationality, or comparable human-background descriptors) are assigned heterogeneously across agents, such as by sampling or a dataset. A shared trait for every agent is false.
  
 – has\_cognitive\_style: true only when cognitive, perceptual, or reasoning tendencies (for example openness, risk tolerance, decision style, or analytical style) are assigned heterogeneously across agents. A shared trait for every agent is false.
  
 – has\_value\_system: true only when values, beliefs, ideologies, moral commitments, goals, norms, or comparable motivational orientations are assigned heterogeneously across agents. A shared trait for every agent is false.
  
 – has\_background\_story: true when agents are assigned a backstory, biography, or personal scenario; false when none is assigned.
  
 – has\_personality: true when agents are assigned personality traits, character, or a disposition; false when none is assigned.
  
 – has\_role: true when agents are assigned a social, occupational, or task role; false when none is assigned.
  
 – other\_profile\_information: briefly record other heterogeneous profile-defining information not covered above; use none when none is present and unclear when it cannot be determined. Information that does not impact the social interaction or decision, such as name and backbone LLM, does not count as profile information.
  
Interaction
  
 – interaction\_type: exactly one of text\_based, environment\_based, mixed, no\_interaction, or unclear.
  
  – text\_based: agents directly read raw text messages or dialogue from other agents.
  
  – environment\_based: agents do not directly communicate but affect each other through a shared environment or state.
  
  – mixed: both direct textual and environment-mediated interaction are present.
  
  – no\_interaction: one agent’s response does not affect another agent’s output.
  
 – interaction\_scope: exactly one of local, broadcast, no\_interaction, or unclear.
  
  – local: only some agents can access certain interactions or responses.
  
  – broadcast: all agents can access all responses or messages.
  
 – interaction\_environment: exactly one of social\_media, open\_world, chatroom, social\_experiment\_setting, no\_interaction, others: <brief description>, or unclear.
  
Memory
  
 – is\_single\_round: exactly true, false, or unclear. Use true if each agent acts only once or there is no repeated interaction across rounds.
  
 – memory\_mechanism: exactly one of direct\_storage, retrieval\_based, state\_based, mixed, no\_memory, or unclear.
  
  – direct\_storage: prior content is directly preserved in the context window.
  
  – retrieval\_based: memory is stored and retrieved with an external retrieval or long-term-memory system.
  
  – state\_based: memory is represented as structured state rather than raw text history.
  
  – mixed: more than one memory mechanism is used.
  
  – no\_memory: agents do not retain prior interaction history or state across rounds.
  
Realism
  
 – reference\_type: exactly one of human\_data, theoretical\_model, both, no\_reference, or unclear.
  
  – human\_data: simulation is compared against real human behavioral or social data.
  
  – theoretical\_model: simulation is compared against a mathematical model or non-LLM agent-based model.
  
  – both: both kinds of external reference are used.
  
  – no\_reference: no external reference or validation target is used.
  
Classify from the strongest external reference used to validate or benchmark outcomes.
  
External Source
  
 – external\_source: record a GitHub repository, supplementary file, dataset, project website, or other external source explicitly identified in the paper that may contain unavailable requested information. Use none when no such source is identified. Do not invent sources or replace unavailable field values of unclear.
  
Return only a syntactically valid JSON array with double quotes and no trailing commas. Each object must contain exactly these fields:
  
{
  
 "simulation\_id": "",
  
 "has\_socio\_demographic": "",
  
 "has\_cognitive\_style": "",
  
 "has\_value\_system": "",
  
 "has\_background\_story": "",
  
 "has\_personality": "",
  
 "has\_role": "",
  
 "other\_profile\_information": "",
  
 "interaction\_type": "",
  
 "interaction\_scope": "",
  
 "interaction\_environment": "",
  
 "is\_single\_round": "",
  
 "memory\_mechanism": "",
  
 "reference\_type": "",
  
 "external\_source": "",
  
 "notes": ""
  
}

### A.2 Prompts for Testing Unawareness and Minimal-Control

The following prompt is used to evaluate Unawareness using a given instruction for a simulation.
The [instruction] is replaced by the instruction.

Prompt for Unawareness Check

[instruction]
  
  
[FORGET ALL THE PREVIOUS INSTRUCTIONS]
  
Your task now is to infer the user’s intention from the previous instructions.
Please try to recognize the experiment design and identify whether it is a replication of some social experiments.
Finally, please name the social phenomenon that the user is studying on you.

The following prompt is used to evaluate Minimal-Control using a given instruction for a simulation.
The [instruction] is replaced by the instruction.
The [goal] is replaced by the simulation goal from the data extraction stage.

Prompt for Minimal-Control Check

You are an expert in social psychology and experimental design. You will be given a prompt used in an experiment designed for LLMs and the desired result of the experiment. Your task is to evaluate whether the prompt contains any steering instructions that steer the model towards exhibiting the desired behavior or bias.
  
Specifically, the experiment aims to achieve the result: [goal]
  
Your answer and analysis should be closely related to the result above. In particular, assess whether the instructions:
  
 – Contain explicit directions on how the model should behave. For example, explicit instructions like “if you encounter situation A, do something,” “You should exhibit behavior B,” or “You should avoid C” are considered steering instructions.
  
 – However, instructions on the persona setting of the model, such as openness, helpfulness, and aggressiveness, are acceptable.
  
 – If the instruction is a simple recording of some raw information of other people, it is acceptable.
  
 – If the instruction is requirements on the format of the output, it is acceptable.
  
Instructions to evaluate: [instruction]
  
Please follow this output format:
  
Analysis:
  
[Your detailed reasoning here: identify any phrases that are suggestive, leading, or disclose the hypothesis. If the instruction is acceptable, explain why.]
  
Answer: Yes or No (Yes = Instructions are appropriate and neutral; No = Instructions contain problematic content)
  
Prediction (if Final Answer is No):
  
[Briefly describe the kind of behavioral pattern, bias, or artifact that is likely to emerge if this instruction is used. At the end, refine the prompt so it does not contain any steering instructions.]
  
Final Answer:
  
[Simply Yes or No without any additional explanation, no trailing lines or spaces]

### A.3 Prompts for Reproducing the Simulations

For different simulation tasks, only the topic and query is changed to suit different scenarios.
For instance, in the social network growth experiment, the topic is set to “You are at a dinner reception and you have just been introduced to some new people”; the query is set to “Now, from the people you have met above, please select exactly [m] people from the list to make friend with”.
To prevent the query from interfering with the simulation progression, all queries are not recorded in agent’s memory and serve only as a way to observe the state of agents.

This following prompt is put at the beginning of every simulation prompt.

Prompt for Simulation - Profile Description

You are in a virtual chatroom. Below is a description of yourself:
  
[profile]
  
  
You and others are discussing the following topic:
  
[topic]
  
  
Never mix up yourself with others.
  
Here are the history of past conversations:
  
[memory]
  
  
Here are your impression of each person you have chat with:
  
[impressions]

# Prompt below is only included when having an individual discussion
  
Now, you are having an individual conversation with [target].
  
Here is your conversation history so far:
  
[history]

The following prompt is used for interaction between agents.

Prompt for Simulation - Interaction

Generic Query:
  
You have exited the group discussion. Now, please answer the following question, please be concise. At the last line, output the answer with no explanation: [query]
  
Group Chat:
  
Now, it is your turn to speak. Please express your opinion and output what you will send to others.
  
Individual Chat:
  
Now please generate what you would say to [target]. Only output your response with no explanation.
  
Generate Impression:
  
Now, based on your conversation, please output a one sentence remark on your impression of [target]. please output your impression with no explanation.

The following prompt replaces [query] in the previous prompt for the fake news propagation simulation.

Query used in Fake News Propagation

Reflecting Query
  
The discussed topic is [topic]
  
Here are the opinions you have heard so far: [opinion]
  
Summarize the opinions you have heard in a few sentences, including whether or not they believe in the news.
  
Update Memory Query
  
Recap of Previous Long-Term Memory: [long\_memory]
  
Today’s Short-Term Summary: [short\_memory]
  
Please update long-term memory by integrating today’s summary with the existing long-term memory, ensuring to maintain continuity and add any new insights or important information from today’s interactions. Only return long-term memory.
  
Update Opinion Query
  
Based on the following inputs, update your opinion on the [topic]:
  
1. Previous personal opinion: [opinion]
  
2. Long memory summary of others’ opinions: [long\_memory]
  
3. Name: [agent\_name]
  
4. Trait: [agent\_persona]
  
5. Education level: [agent\_qualification]
  
Keep in mind that you are simulating a real person in this role-play.
