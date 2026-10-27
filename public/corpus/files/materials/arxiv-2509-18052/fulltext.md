---
id: arxiv-2509-18052-text
type: material
title: 'The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies'
work_id: arxiv-2509-18052
source_url: https://arxiv.org/html/2509.18052v4
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 11a99b5e588442c0d6e992081998dfd6f41c7bdbf3413bdc6abd4c8aa5ef54fe
---

> Источник: [https://arxiv.org/html/2509.18052v4](https://arxiv.org/html/2509.18052v4). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies

Jiaxu Zhou
Affiliation: CUHK
  
Jen-tse Huang
Affiliation: JHU
  
Xuhui Zhou
Affiliation: CMU
  
Man Ho Lam
Affiliation: CUHK
  
Xintao Wang
Affiliation: Fudan
  
Hao Zhu
Affiliation: Stanford
  
Wenxuan Wang
Affiliation: RUC
Affiliation: renlab.ai
Correspondence to: [jwxwang@gmail.com](mailto:jwxwang@gmail.com)
  
Maarten Sap
Affiliation: CMU
Correspondence to: [maartensap@cmu.edu](mailto:maartensap@cmu.edu)

###### Abstract

Large language models (LLMs) are increasingly used to simulate human collective behavior, yet claims that such simulations are human-like remain largely untested.
We conducted a systematic audit (pre-registered on OSF) of LLM-based social simulations across four databases (Scopus, IEEE Xplore, ACM Digital Library, and arXiv).
Across 576 studies reported in 350 recent papers, we applied six methodological evaluations: agent Profile, Interaction, Memory, Minimal-Control, Unawareness, and Realism (PIMMUR).
Coding every study against pre-specified rules, we revealed that PIM were met more often than MUR.
Frontier LLMs correctly identified the underlying social experiment in 65.2% of cases, and 50.6% of prompts imposed constraints that pre-determined the outcome.
These compliance rates are upper bounds, because incomplete methodological reporting (for example, unreleased prompts) limits the available evidence.
Reproducing five representative experiments (e.g., opinion dynamics), we found that reported collective phenomena often vanish or reverse once PIMMUR principles are enforced, indicating that many “emergent” behaviors are methodological artifacts rather than genuine social dynamics.
Current LLM simulations may therefore capture model-specific biases rather than universal features of human social behavior, raising concerns about their use as scientific proxies for human society.

###### Keywords:

Machine Learning, ICML

†

## 1 Introduction

Figure 1: 
Four common objectives motivating AI multi-agent social simulation research. Our paper targets the two types of studies in the first row, focusing on claims about human society.

The rapid evolution of large language models (LLMs) in reasoning, communication, and coordination ([Huang et al., 2025a](https://arxiv.org/html/2509.18052v4#bib.bib54); [Tran et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib63); [Agashe et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib53)) has positioned them as potential “digital twins” for human behavior.
This has birthed a burgeoning field of LLM-based multi-agent social simulation (MASS), where researchers deploy “AI societies” to simulate complex collective phenomena, such as cooperation, polarization, information diffusion, or network formation ([Mou et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib79); [Zhou et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib51); [Zhang et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib78); [Liu et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib75)).
Such simulations are motivated by four broad objectives (Fig. [1](https://arxiv.org/html/2509.18052v4#S1.F1 "Figure 1 ‣ 1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")): testing whether human social behaviors emerge spontaneously in LLMs, a property of the AI itself (upper right); using LLMs as proxies for humans to test whether a given factor elicits a particular behavior, a property of human behavior (upper left); engineering AI societies to exhibit a target behavior through prompting, where spontaneous emergence is immaterial (lower left); and characterizing the behavior of AI societies of any kind (lower right).
We focus on the first two.

However, the scientific utility of these simulations hinges on a fundamental assumption: that the observed collective patterns are truly emergent—arising from the intrinsic interactions of autonomous agents—rather than being encoded by the experimenter.
In human behavioral research, it is well established that experimental validity is often compromised by “experimenter visibility effects.”
These include demand characteristics, where participants subconsciously alter their behavior to fit the perceived experimental goal ([Orne, 2017](https://arxiv.org/html/2509.18052v4#bib.bib14)); the Hawthorne effect, where the mere awareness of observation induces behavioral change ([Adair, 1984](https://arxiv.org/html/2509.18052v4#bib.bib15); [Mayo, 2004](https://arxiv.org/html/2509.18052v4#bib.bib16); [Roethlisberger and Dickson, 2003](https://arxiv.org/html/2509.18052v4#bib.bib17)); and social desirability bias, the tendency to project normative rather than authentic responses, such as overstating prosocial behavior ([Grimm, 2010](https://arxiv.org/html/2509.18052v4#bib.bib18)) or downplaying controversial opinions ([Nederhof, 1985](https://arxiv.org/html/2509.18052v4#bib.bib19)).
As recent evidence suggests that LLMs are not immune to these psychological artifacts ([Shapira et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib30); [Shao et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib37); [Cheng et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib41)), the validity of current MASS studies remains deeply uncertain ([Anthis et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib55)).
Moreover, existing works often rely on customized frameworks tailored to specific social experiments ([Yang et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib82); [Borah et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib80)), and methodological choices vary widely and lack shared standards ([Zhou et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib52)).
It is therefore unclear whether their reported findings reflect genuine emergent social phenomena, or artifacts of flawed experimental design.

To investigate this problem, we first conducted a pilot review of 39 papers and identified six recurring pitfalls that span the micro-design of agents and the macro-design of the experimental environment, which we formalized as the PIMMUR principles:

1. 1.

   Profile (Homogeneity): A lack of agent diversity, where identical model weights lead to artificial behavioral convergence.
2. 2.

   Interaction (Pseudo-Agency): Simulations that reduce multi-agent dynamics to sequential single-agent reasoning, stripping agents of true social agency.
3. 3.

   Memory (Statelessness): The absence of persistent, “digested” internal states, preventing the formation of authentic social identities or belief evolution.
4. 4.

   Minimal-Control (Goal-Injection): The use of “lead-the-witness” prompting that explicitly instructs agents to exhibit specific biases (e.g., confirmation bias), pre-determining the outcome.
5. 5.

   Unawareness (Visibility Leakage): Experimental designs that are so transparent that the LLM can identify the underlying social theory, triggering social desirability or ‘‘Clever Hans’’ effects.1
6. 6.

   Realism (Circular Validation): A reliance on idealized mathematical models as ground truth rather than empirical human data, creating a “model-to-model” circularity that lacks ecological validity.

Guided by the principles above, we conducted a PRISMA-compliant systematic audit of 576 MASS studies reported across 350 papers published between December 2022 and May 2026.
We found a pervasive mismatch between the employed methods and the emergent AI behaviors they are claimed to demonstrate.
Our audit revealed that 91.1% of existing studies violate at least one PIMMUR principle, with a majority failing to safeguard against experimenter visibility.
Finally, through the reproduction of five experiments, we demonstrated that many claimed “emergent” behaviors—such as the “telephone game” message decay or social network balance—either vanish or fundamentally reverse when PIMMUR principles are enforced.
The flawed experimental designs invalidate the target social experiments by ignoring key human-like features, thus producing conclusions that are often unreliable.
These findings suggest that much of what is currently interpreted as “emergent AI social behavior” is, in fact, a methodological artifact.
We argue that for MASS to serve as a legitimate prediction of human behavior, the field must transition from “prompt engineering” to a more rigorous “behavioral engineering” paradigm.

## 2 Results

### 2.1 Taxonomy of Methodological Flaws

To systematically evaluate current LLM-based MASS studies, we propose the PIMMUR principles.
These six—Profile, Interaction, Memory, Minimal-Control, Unawareness, and Realism—are derived from a pilot review of 39 MASS papers, as detailed in §[4.1](https://arxiv.org/html/2509.18052v4#S4.SS1 "4.1 Developing PIMMUR via a Pilot Review ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").

Definition: Profile

Agents should possess diverse backgrounds, such as socio-demographics, cognitive styles, or value systems, to ensure systemic heterogeneity, avoiding the artifacts of a monolithic model distribution.

Homogeneity remains a critical threat to the validity of AI societies.
When agents are merely copies of a single LLM backbone without explicit diversification, the system risks “collapsing” into a consensus that reflects model bias rather than social dynamics ([Reid et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib57); [Xiao et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib68); [Pitre et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib42); [Huang et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib67); [Hegazy, 2024](https://arxiv.org/html/2509.18052v4#bib.bib56)).
In contrast, personality is an inherent human attribute rather than an optional modeling choice.
Recent studies have demonstrated that persona-prompting can steer LLM behaviors ([Chen et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib47); [Wang et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib46); [Huang et al., 2024b](https://arxiv.org/html/2509.18052v4#bib.bib44); [Wang et al., 2025b](https://arxiv.org/html/2509.18052v4#bib.bib45); [Huang et al., 2024a](https://arxiv.org/html/2509.18052v4#bib.bib49)).
To achieve ecological validity, simulations must move beyond default settings like “a helpful assistant” and incorporate diverse model architectures or deeply grounded personas to capture how individual variances shape collective outcomes.

Definition: Interaction

Agents should exert agency via direct or indirect communication, reacting to the specific actions of others or the environment shaped by others rather than researcher-provided statistical aggregates.

Many “multi-agent” claims are undermined by pseudo-interaction designs, relying on single-agent formulations.
For instance, studies on herd effects often reduce social complexity to a single-agent decision task by embedding aggregated peer data (e.g., “10 others chose A”) directly into the prompt ([Cho et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib85); [Liu et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib75)).
Similarly, in social network growth ([De Marzo et al., 2023](https://arxiv.org/html/2509.18052v4#bib.bib84)), a single agent is provided only with others’ friend counts to make decisions.
While such simplifications make simulation more tractable, their conclusions are difficult to generalize to real-world scenarios, where dynamic interactions among agents or changes to the environment crucially shape individual behaviors ([Ng et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib73); [Ran et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib48); [Huang et al., 2025b](https://arxiv.org/html/2509.18052v4#bib.bib50); [Huang et al., 2025a](https://arxiv.org/html/2509.18052v4#bib.bib54)).
Authentic emergence requires that behaviors arise from the “ground up” through decentralized interactions, where agents perceive and modify a shared environment.

Definition: Memory

Agents should maintain and update persistent internal states across time, allowing information to be internalized, retained, and re-expressed rather than rephrased statelessly.

Social phenomena such as the “telephone game” or rumor propagation rely on the lossy compression and subjective interpretation of information ([Hirst and Echterhoff, 2012](https://arxiv.org/html/2509.18052v4#bib.bib25)).
However, current simulations often treat memory as a static buffer, instructing agents to merely paraphrase messages ([Liu et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib75); [Perez et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib74)).
This neglects the crucial role of information internalization.
Without a persistent memory architecture that allows for the integration of new data with existing beliefs, AI agents fail to replicate the cognitive realism necessary for long-term social evolution ([Wang et al., 2025a](https://arxiv.org/html/2509.18052v4#bib.bib58)).

Definition: Minimal-Control

Agents should be provided only the essential environmental context and action space, minimizing demand characteristics. Observed collective behaviors must emerge from agents themselves rather than from researcher-imposed behavioral cues.

Prompt engineering has been shown to be effective for a wide range of LLM-based downstream applications ([Sahoo et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib59); [Schulhoff et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib60)).
However, this approach often introduces researcher bias into social simulations.
For example, to examine belief convergence in fake news propagation, [Liu et al. (2024)](https://arxiv.org/html/2509.18052v4#bib.bib76) explicitly instruct agents to “demonstrate confirmation bias.”
Researchers risk measuring the model’s instruction-following abilities rather than its intrinsic social tendencies.
To ensure the construct validity of emergent phenomena, prompts must remain neutral.
If the simulation’s outcome is pre-determined by the system prompt, the “social behavior” observed is a methodological artifact rather than a scientific discovery.
Whether adherence to Profile violates Minimal-Control depends on the research goal.
Assigning highly selfish dispositions to most agents would violate Minimal-Control in a general study of behavior in the public goods game, but would be compliant if the research question is precisely how selfish individuals behave in that setting.
Similarly, providing an anchor in an anchoring-bias study is not a violation, whereas adding instructions such as “pay attention to this item” alongside the anchor is.

Figure 2: 
A flow diagram (PRISMA-compliant) describing how we conducted the systematic review.


Table 1: 
Proportion of simulations satisfying each criterion (%). Simulations have some missing fields. We exclude them from both the numerator and the denominator, so $N$ only denotes the number of papers in a category instead of the denominator. We compute these ratios using true / (true + false).

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Category | $N$ | Profile | Interaction | Memory | Min.-Control | Unawareness | Realism |
| 1. Strategic Interaction and Social Dilemmas | 104 | 80.2 | 92.3 | 86.8 | 45.7 | 17.3 | 32.3 |
| 1.1 Cooperation, reciprocity, and trust | 29 | 75.9 | 96.6 | 92.3 | 54.2 | 29.2 | 36.0 |
| 1.2 Public goods and common-pool resources | 28 | 80.0 | 96.4 | 95.5 | 57.9 | 10.5 | 29.6 |
| 1.3 Bargaining over division; ultimatum / dictator games | 16 | 81.2 | 68.8 | 53.3 | 57.1 | 0.0 | 56.2 |
| 1.4 Coordination games | 8 | 50.0 | 87.5 | 75.0 | 60.0 | 40.0 | 25.0 |
| 1.5 Social deduction and hidden-role games | 18 | 100.0 | 100.0 | 100.0 | 13.3 | 6.7 | 22.2 |
| 1.6 Zero-sum and pure-competition games | 5 | 80.0 | 100.0 | 100.0 | 0.0 | 50.0 | 0.0 |
| 2. Opinion and Information Dynamics | 196 | 81.6 | 99.5 | 78.5 | 47.4 | 30.4 | 42.2 |
| 2.1 Opinion dynamics and attitude change | 57 | 75.0 | 100.0 | 90.0 | 53.1 | 30.6 | 38.2 |
| 2.2 Conformity and peer influence | 34 | 76.5 | 97.1 | 58.1 | 59.4 | 15.6 | 17.6 |
| 2.3 Polarization, echo chambers, and information cocoons | 35 | 84.8 | 100.0 | 95.2 | 46.4 | 46.4 | 58.1 |
| 2.4 Persuasion and debate | 18 | 94.4 | 100.0 | 87.5 | 5.9 | 23.5 | 38.9 |
| 2.5 Information diffusion and misinformation | 31 | 89.3 | 100.0 | 57.1 | 34.6 | 30.8 | 69.0 |
| 2.6 Network formation and influence structure | 21 | 81.0 | 100.0 | 78.9 | 68.4 | 36.8 | 35.0 |
| 3. Interpersonal and Group Processes | 131 | 95.3 | 93.0 | 90.3 | 43.9 | 50.5 | 31.5 |
| 3.1 Negotiation | 26 | 96.2 | 100.0 | 96.0 | 52.2 | 52.2 | 15.4 |
| 3.2 Collaboration and division of labor | 22 | 90.9 | 95.5 | 94.4 | 27.8 | 61.1 | 14.3 |
| 3.3 Group deliberation and collective choice | 22 | 90.9 | 81.0 | 80.0 | 52.9 | 70.6 | 47.6 |
| 3.4 Social norms, compliance, and sanctioning | 13 | 90.9 | 75.0 | 55.6 | 50.0 | 50.0 | 8.3 |
| 3.5 Deception, manipulation, and trust violation | 19 | 100.0 | 100.0 | 100.0 | 27.8 | 27.8 | 84.2 |
| 3.6 Emotion, relationships, and social support | 8 | 100.0 | 100.0 | 100.0 | 66.7 | 33.3 | 57.1 |
| 3.7 Self-disclosure, identity, and status | 8 | 100.0 | 100.0 | 100.0 | 66.7 | 66.7 | 0.0 |
| 3.8 General goal-directed social interaction | 13 | 100.0 | 92.3 | 90.9 | 41.7 | 41.7 | 15.4 |
| 4. Collective Behavior and Macro-level Emergence | 96 | 91.7 | 94.7 | 90.8 | 47.9 | 45.2 | 37.6 |
| 4.1 Market and price emergence | 33 | 96.3 | 100.0 | 95.7 | 36.7 | 36.7 | 39.4 |
| 4.2 Crowd movement and spatial distribution | 10 | 100.0 | 90.0 | 100.0 | 50.0 | 100.0 | 60.0 |
| 4.3 Evacuation and collective behavior under crisis | 16 | 100.0 | 93.3 | 88.9 | 63.6 | 27.3 | 62.5 |
| 4.4 Emergence of norms, institutions, and culture | 27 | 76.0 | 88.9 | 81.0 | 60.0 | 40.0 | 24.0 |
| 4.5 Open-ended agent societies | 10 | 100.0 | 100.0 | 100.0 | 37.5 | 87.5 | 0.0 |
| 5. Social Cognition | 49 | 73.3 | 60.4 | 60.6 | 51.2 | 60.5 | 29.2 |
| 5.1 Cognitive bias in social contexts | 18 | 62.5 | 77.8 | 50.0 | 50.0 | 64.3 | 38.9 |
| 5.2 Stereotypes and social bias | 6 | 83.3 | 100.0 | 100.0 | 33.3 | 50.0 | 0.0 |
| 5.3 Individual-level psychology and behavioral realism | 25 | 78.3 | 37.5 | 52.6 | 56.5 | 60.9 | 29.2 |
| All | 576 | 85.4 | 92.6 | 83.5 | 46.7 | 37.7 | 36.1 |

Definition: Unawareness

Agents should remain unaware of the experimental hypothesis, design, and evaluation criteria. This reduces experimental biases, where models adjust their behavior to align with perceived social expectations or experimental goals.

LLMs are trained on vast corpora containing classic social science experiments (e.g., Sugarscape, Prisoner’s Dilemma).
This creates a risk of epistemic leakage: if a model recognizes the experimental setup, its response may be biased by “social desirability” or “the Hawthorne effect”—the tendency to perform according to a recognized theory.
In contrast to Minimal-Control, which primarily concerns the instruction design, Unawareness pertains to the models themselves.
Even a carefully designed minimal-control instruction can still reflect a classical experimental setup so famous that models can easily infer it, such as [Masumori and Ikegami (2025)](https://arxiv.org/html/2509.18052v4#bib.bib86)’s Sugarscape experiment and [Cau et al. (2025)](https://arxiv.org/html/2509.18052v4#bib.bib81)’s studies on opinion dynamics.
We argue that frontier LLMs can be “too intelligent” for certain social experiments.
Researchers must audit whether models can infer the study’s objective, as meta-awareness systematically invalidates behavioral authenticity.

Definition: Realism

Simulations should use empirical data from real-world human societies as references rather than simplified theoretical models when making claims about the similarity of AI’s emergent behaviors and real-world human dynamics.

Social science has long utilized simplified mathematical models, such as Heider’s balance theory ([Heider, 1946](https://arxiv.org/html/2509.18052v4#bib.bib20)) and the Sugarscape experiment ([Epstein and Axtell, 1996](https://arxiv.org/html/2509.18052v4#bib.bib22)), to explain complex human societies.
A significant portion of current MASS research evaluates LLMs solely on their ability to replicate these idealized mathematical outcomes ([De Marzo et al., 2023](https://arxiv.org/html/2509.18052v4#bib.bib84); [Cisneros-Velarde, 2024](https://arxiv.org/html/2509.18052v4#bib.bib83); [Borah et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib80)).
While theoretical models provide valuable mechanistic insights, they should not be treated as the sole ground truth for validating AI social intelligence ([Larooij and Törnberg, 2025](https://arxiv.org/html/2509.18052v4#bib.bib62)).
We contend that while theoretical alignment is a necessary first step, it is insufficient for claiming that LLMs simulate human behaviors.
To bridge the gap between theory and reality, simulations must be grounded in and validated against high-fidelity empirical traces (e.g., social media logs, historical data), ensuring that AI societies reflect the nuances of actual human collectives.

Table 2: Proportion of simulations judged to satisfy Unawareness by each model (%). The model versions are: GPT-5.6-Terra, Claude-Sonnet-5, Gemini-3.7-Flash, DeepSeek-V4-Pro, Qwen-3.8-2.4T-A95B, and Kimi-K3.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Category | $N$ | GPT-5.6 | Claude-5 | Gemini-3.7 | DeepSeek-V4 | Qwen3.8 | Kimi-K3 | All |
| 1. Strategic Interaction and Social Dilemmas | 104 | 16.0 | 19.8 | 12.3 | 12.3 | 21.0 | 13.6 | 15.8 |
| 1.1 Cooperation, reciprocity, and trust | 29 | 20.8 | 29.2 | 16.7 | 12.5 | 37.5 | 20.8 | 22.9 |
| 1.2 Public goods and common-pool resources | 28 | 10.5 | 10.5 | 5.3 | 5.3 | 10.5 | 10.5 | 8.8 |
| 1.3 Bargaining over division; ultimatum / dictator games | 16 | 7.1 | 7.1 | 7.1 | 0.0 | 7.1 | 0.0 | 4.8 |
| 1.4 Coordination games | 8 | 40.0 | 40.0 | 40.0 | 40.0 | 20.0 | 40.0 | 36.7 |
| 1.5 Social deduction and hidden-role games | 18 | 6.7 | 13.3 | 0.0 | 13.3 | 20.0 | 0.0 | 8.9 |
| 1.6 Zero-sum and pure-competition games | 5 | 50.0 | 50.0 | 50.0 | 50.0 | 25.0 | 50.0 | 45.8 |
| 2. Opinion and Information Dynamics | 196 | 27.5 | 36.3 | 23.4 | 40.4 | 28.7 | 25.7 | 30.3 |
| 2.1 Opinion dynamics and attitude change | 57 | 30.6 | 40.8 | 30.6 | 49.0 | 30.6 | 24.5 | 34.4 |
| 2.2 Conformity and peer influence | 34 | 9.4 | 21.9 | 15.6 | 18.8 | 18.8 | 12.5 | 16.1 |
| 2.3 Polarization, echo chambers, and information cocoons | 35 | 35.7 | 39.3 | 25.0 | 53.6 | 32.1 | 35.7 | 36.9 |
| 2.4 Persuasion and debate | 18 | 23.5 | 47.1 | 17.6 | 35.3 | 29.4 | 23.5 | 29.4 |
| 2.5 Information diffusion and misinformation | 31 | 23.1 | 34.6 | 11.5 | 42.3 | 26.9 | 23.1 | 26.9 |
| 2.6 Network formation and influence structure | 21 | 47.4 | 36.8 | 36.8 | 36.8 | 36.8 | 42.1 | 39.5 |
| 3. Interpersonal and Group Processes | 131 | 45.8 | 45.8 | 33.6 | 43.9 | 52.3 | 37.4 | 43.1 |
| 3.1 Negotiation | 26 | 39.1 | 52.2 | 34.8 | 52.2 | 52.2 | 43.5 | 45.7 |
| 3.2 Collaboration and division of labor | 22 | 61.1 | 50.0 | 38.9 | 44.4 | 72.2 | 50.0 | 52.8 |
| 3.3 Group deliberation and collective choice | 22 | 58.8 | 52.9 | 41.2 | 52.9 | 76.5 | 52.9 | 55.9 |
| 3.4 Social norms, compliance, and sanctioning | 13 | 30.0 | 50.0 | 40.0 | 40.0 | 50.0 | 30.0 | 40.0 |
| 3.5 Deception, manipulation, and trust violation | 19 | 38.9 | 33.3 | 16.7 | 27.8 | 22.2 | 16.7 | 25.9 |
| 3.6 Emotion, relationships, and social support | 8 | 33.3 | 33.3 | 16.7 | 33.3 | 33.3 | 16.7 | 27.8 |
| 3.7 Self-disclosure, identity, and status | 8 | 66.7 | 66.7 | 66.7 | 66.7 | 66.7 | 66.7 | 66.7 |
| 3.8 General goal-directed social interaction | 13 | 41.7 | 33.3 | 33.3 | 41.7 | 41.7 | 25.0 | 36.1 |
| 4. Collective Behavior and Macro-level Emergence | 96 | 46.6 | 50.7 | 37.0 | 46.6 | 46.6 | 37.0 | 44.1 |
| 4.1 Market and price emergence | 33 | 36.7 | 36.7 | 33.3 | 43.3 | 46.7 | 30.0 | 37.8 |
| 4.2 Crowd movement and spatial distribution | 10 | 100.0 | 100.0 | 75.0 | 100.0 | 100.0 | 75.0 | 91.7 |
| 4.3 Evacuation and collective behavior under crisis | 16 | 36.4 | 36.4 | 36.4 | 27.3 | 27.3 | 36.4 | 33.3 |
| 4.4 Emergence of norms, institutions, and culture | 27 | 40.0 | 60.0 | 30.0 | 35.0 | 35.0 | 25.0 | 37.5 |
| 4.5 Open-ended agent societies | 10 | 87.5 | 75.0 | 50.0 | 87.5 | 75.0 | 75.0 | 75.0 |
| 5. Social Cognition | 49 | 62.8 | 55.8 | 46.5 | 62.8 | 48.8 | 37.2 | 52.3 |
| 5.1 Cognitive bias in social contexts | 18 | 64.3 | 57.1 | 57.1 | 64.3 | 50.0 | 50.0 | 57.1 |
| 5.2 Stereotypes and social bias | 6 | 66.7 | 50.0 | 33.3 | 50.0 | 50.0 | 33.3 | 47.2 |
| 5.3 Individual-level psychology and behavioral realism | 25 | 60.9 | 56.5 | 43.5 | 65.2 | 47.8 | 30.4 | 50.7 |
| All | 576 | 35.8 | 39.6 | 28.0 | 39.4 | 37.3 | 29.1 | 34.8 |


Table 3: Proportion of simulations judged to satisfy Minimal-Control by each model (%). The model versions are: GPT-5.6-Terra, Claude-Sonnet-5, Gemini-3.7-Flash, DeepSeek-V4-Pro, Qwen-3.8-2.4T-A95B, and Kimi-K3.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Category | $N$ | GPT-5.6 | Claude-5 | Gemini-3.7 | DeepSeek-V4 | Qwen3.8 | Kimi-K3 | All |
| 1. Strategic Interaction and Social Dilemmas | 104 | 32.1 | 42.0 | 63.0 | 50.6 | 49.4 | 51.9 | 48.1 |
| 1.1 Cooperation, reciprocity, and trust | 29 | 37.5 | 54.2 | 75.0 | 66.7 | 58.3 | 62.5 | 59.0 |
| 1.2 Public goods and common-pool resources | 28 | 52.6 | 36.8 | 73.7 | 57.9 | 63.2 | 57.9 | 57.0 |
| 1.3 Bargaining over division; ultimatum / dictator games | 16 | 42.9 | 50.0 | 57.1 | 64.3 | 57.1 | 57.1 | 54.8 |
| 1.4 Coordination games | 8 | 20.0 | 60.0 | 80.0 | 80.0 | 60.0 | 80.0 | 63.3 |
| 1.5 Social deduction and hidden-role games | 18 | 0.0 | 26.7 | 46.7 | 6.7 | 20.0 | 26.7 | 21.1 |
| 1.6 Zero-sum and pure-competition games | 5 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 | 0.0 |
| 2. Opinion and Information Dynamics | 196 | 28.7 | 40.4 | 75.4 | 50.3 | 51.5 | 58.5 | 50.8 |
| 2.1 Opinion dynamics and attitude change | 57 | 26.5 | 46.9 | 73.5 | 57.1 | 55.1 | 69.4 | 54.8 |
| 2.2 Conformity and peer influence | 34 | 50.0 | 37.5 | 84.4 | 62.5 | 62.5 | 65.6 | 60.4 |
| 2.3 Polarization, echo chambers, and information cocoons | 35 | 17.9 | 39.3 | 71.4 | 46.4 | 53.6 | 53.6 | 47.0 |
| 2.4 Persuasion and debate | 18 | 5.9 | 23.5 | 82.4 | 11.8 | 11.8 | 17.6 | 25.5 |
| 2.5 Information diffusion and misinformation | 31 | 19.2 | 38.5 | 61.5 | 38.5 | 38.5 | 46.2 | 40.4 |
| 2.6 Network formation and influence structure | 21 | 47.4 | 47.4 | 84.2 | 68.4 | 73.7 | 78.9 | 66.7 |
| 3. Interpersonal and Group Processes | 131 | 26.2 | 42.1 | 74.8 | 47.7 | 43.0 | 51.4 | 47.5 |
| 3.1 Negotiation | 26 | 26.1 | 47.8 | 78.3 | 65.2 | 43.5 | 65.2 | 54.3 |
| 3.2 Collaboration and division of labor | 22 | 5.6 | 33.3 | 50.0 | 38.9 | 33.3 | 27.8 | 31.5 |
| 3.3 Group deliberation and collective choice | 22 | 41.2 | 41.2 | 82.4 | 58.8 | 52.9 | 64.7 | 56.9 |
| 3.4 Social norms, compliance, and sanctioning | 13 | 40.0 | 50.0 | 60.0 | 40.0 | 40.0 | 50.0 | 46.7 |
| 3.5 Deception, manipulation, and trust violation | 19 | 16.7 | 27.8 | 83.3 | 27.8 | 27.8 | 27.8 | 35.2 |
| 3.6 Emotion, relationships, and social support | 8 | 66.7 | 66.7 | 100.0 | 66.7 | 66.7 | 66.7 | 72.2 |
| 3.7 Self-disclosure, identity, and status | 8 | 33.3 | 66.7 | 66.7 | 66.7 | 66.7 | 66.7 | 61.1 |
| 3.8 General goal-directed social interaction | 13 | 16.7 | 41.7 | 83.3 | 33.3 | 50.0 | 66.7 | 48.6 |
| 4. Collective Behavior and Macro-level Emergence | 96 | 20.5 | 45.2 | 74.0 | 56.2 | 46.6 | 52.1 | 49.1 |
| 4.1 Market and price emergence | 33 | 13.3 | 40.0 | 70.0 | 50.0 | 36.7 | 43.3 | 42.2 |
| 4.2 Crowd movement and spatial distribution | 10 | 50.0 | 75.0 | 100.0 | 75.0 | 50.0 | 75.0 | 70.8 |
| 4.3 Evacuation and collective behavior under crisis | 16 | 36.4 | 54.5 | 90.9 | 54.5 | 63.6 | 63.6 | 60.6 |
| 4.4 Emergence of norms, institutions, and culture | 27 | 15.0 | 40.0 | 70.0 | 65.0 | 55.0 | 60.0 | 50.8 |
| 4.5 Open-ended agent societies | 10 | 25.0 | 50.0 | 62.5 | 50.0 | 37.5 | 37.5 | 43.8 |
| 5. Social Cognition | 49 | 34.9 | 37.2 | 76.7 | 53.5 | 46.5 | 60.5 | 51.6 |
| 5.1 Cognitive bias in social contexts | 18 | 21.4 | 14.3 | 85.7 | 50.0 | 35.7 | 57.1 | 44.0 |
| 5.2 Stereotypes and social bias | 6 | 33.3 | 16.7 | 66.7 | 33.3 | 33.3 | 33.3 | 36.1 |
| 5.3 Individual-level psychology and behavioral realism | 25 | 43.5 | 56.5 | 73.9 | 60.9 | 56.5 | 69.6 | 60.1 |
| All | 576 | 28.0 | 41.5 | 73.1 | 50.9 | 48.0 | 54.9 | 49.4 |

### 2.2 Systematic Audit of LLM Social Simulations

##### Prevalence of Methodological Vulnerabilities.

To assess the prevalence of PIMMUR violations empirically, we conducted a systematic audit following the PRISMA 2020 guidelines ([Page et al., 2021](https://arxiv.org/html/2509.18052v4#bib.bib10)).
Searches of four databases (Scopus, IEEE Xplore, ACM Digital Library, and arXiv) yielded 2,575 records after deduplication.
Screening identified 576 studies, drawn from 350 papers, for inclusion in this review.
Fig. [2](https://arxiv.org/html/2509.18052v4#S2.F2 "Figure 2 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies") summarizes the identification, screening and inclusion process.
Details of the search and screening procedure are given in §[4.3](https://arxiv.org/html/2509.18052v4#S4.SS3 "4.3 Systematic Review: Searching and Screening ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), and the data-extraction protocol and the rules mapping extracted data onto compliance or violation labels in §[4.4](https://arxiv.org/html/2509.18052v4#S4.SS4 "4.4 Systematic Review: Data Extraction ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
We classified the simulation goals of the 576 studies into five categories comprising 28 domains; descriptions and representative studies for each domain are provided in §[B](https://arxiv.org/html/2509.18052v4#A2 "Appendix B Taxonomy ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
Table [1](https://arxiv.org/html/2509.18052v4#S2.T1 "Table 1 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies") reports the number of studies per domain together with the compliance rate for each principle.
Because some papers omitted information that could not be extracted, compliance rates were computed as true/(true+false) and therefore rest on different values of $N$.
PIM principles were satisfied more often than MUR principles.
Notably, 91.1% of papers were explicitly labeled false on at least one principle, whereas only 14, 2.4% satisfied all six.
This widespread non-compliance indicates that many claims in the current MASS literature are not supported by the experimental designs used to justify them, making the “emergent behavior” an illusion.

##### Quantifying Experimental Leakage: The Unawareness Test.

The Unawareness principle is critical to mitigating experimental biases.
By definition, it assesses whether LLMs possess knowledge of the overall experimental context; the evaluation is therefore to query the models explicitly instead of relying on human annotations.
We devised a special prompt (§[A.2](https://arxiv.org/html/2509.18052v4#A1.SS2 "A.2 Prompts for Testing Unawareness and Minimal-Control ‣ Appendix A Prompts ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")) that requires models to infer the simulation goal solely from the given instructions from all 576 studies.
Table [2](https://arxiv.org/html/2509.18052v4#S2.T2 "Table 2 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies") shows the results using six frontier models: GPT-5.6-Terra ([OpenAI, 2026a](https://arxiv.org/html/2509.18052v4#bib.bib2)), Claude-Sonnet-5 ([Anthropic, 2026b](https://arxiv.org/html/2509.18052v4#bib.bib6)), Gemini-3.7-Flash ([Doshi, 2026](https://arxiv.org/html/2509.18052v4#bib.bib4)), DeepSeek-V4-Pro ([DeepSeek-AI et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib8)), Qwen3.8-2.4T-A95B ([Qwen Team, 2026](https://arxiv.org/html/2509.18052v4#bib.bib7)), and Kimi-K3 ([Team et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib9)).
Across the six LLMs, the simulation goal was correctly recognized in 65.2% of cases.
This figure differs from the one reported in Table [1](https://arxiv.org/html/2509.18052v4#S2.T1 "Table 1 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), which requires a binary judgment for each study: there, we record a violation of Unawareness when at least half of the LLMs recognize the simulation goal.
Compliance differs markedly across the five categories.
C1 shows the lowest compliance rate (15.8%), as it consists mainly of classical game-theoretic scenarios that LLMs recognize readily.
C2 (opinion and information dynamics) follows, while C3 and C4—both concerning interpersonal interaction—are comparable.
C5 shows the highest compliance, but this reflects its composition rather than better practice: it comprises mainly psychological and cognitive assessments rather than social simulations.
Notably, our pilot review of 39 papers assessed Unawareness using earlier model versions (e.g., GPT-4o, Gemini-2.5, Claude-4), yielding an average recognition rate of 50.8%.
The increase with newer models indicates that the problem intensifies as model capability grows: more capable models are less suitable for replicating these experiments.
This pattern is consistent with a “Curse of Knowledge” ([Li et al., 2025a](https://arxiv.org/html/2509.18052v4#bib.bib61))—models are often too well informed to serve as unbiased social proxies, as their responses are likely confounded by their internal representation of the expected experimental outcome.
Such experimental awareness is also documented by [Barrie and Törnberg (2025)](https://arxiv.org/html/2509.18052v4#bib.bib27), who found that LLMs frequently recognized coordination games as experimental tasks.
An analogous form of leakage arises with human participants: [Orne (1959)](https://arxiv.org/html/2509.18052v4#bib.bib13) reported that the effect of interest emerged only among subjects who could articulate the experimenter’s hypothesis, and [Carter and Irons (1991)](https://arxiv.org/html/2509.18052v4#bib.bib12) found that economics students were more likely to reach equilibrium outcomes in coordination games.

![Refer to caption](https://arxiv.org/html/2509.18052v4/fake_news_skeptical.png)


(a) Num. of Skeptical agents.

![Refer to caption](https://arxiv.org/html/2509.18052v4/fake_news_infected.png)


(b) Num. of Infected agents.

![Refer to caption](https://arxiv.org/html/2509.18052v4/fake_news_recovered.png)


(c) Num. of Recovered agents.

(d) Distribution of All relationships.

(e) Distribution of Balanced relationships.

![Refer to caption](https://arxiv.org/html/2509.18052v4/telephone_game.png)


(f) Message similarity measured by SimCSE.

![Refer to caption](https://arxiv.org/html/2509.18052v4/herd_effect_original.png)


(g) Flip rate (Original).

![Refer to caption](https://arxiv.org/html/2509.18052v4/herd_effect_ours.png)


(h) Flip rate (Ours).

![Refer to caption](https://arxiv.org/html/2509.18052v4/social_network.png)


(i) Log-log plot of CCDF.

Figure 3: Results of our five reproductions. (a);(b);(c): Dynamics of agents in different states (skeptical, infected, recovered) across rounds in the fake news propagation experiment. (d);(e): Proportions of social relations in the social balance experiment. (f): The semantic similarity of messages in the telephone game experiment. (g);(h): Probability of LLMs flipping their answers, grouped by different levels of confidence in the herd effect experiment. (i): Log-log plot of the complementary cumulative distribution function (CCDF) of degree $k$, with linear fits, in the social network growth experiment. The error bars are 95% confidence intervals.

##### Quantifying Explicit Steering: The Minimal-Control Test.

We further evaluated Minimal-Control by checking for the existence of researcher-imposed rules in experimental instructions.
We designed a prompt (§[A.2](https://arxiv.org/html/2509.18052v4#A1.SS2 "A.2 Prompts for Testing Unawareness and Minimal-Control ‣ Appendix A Prompts ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")) that asks models to act as social psychology experts and determine whether the instructions contain unnecessary steering components.
As shown in Table [3](https://arxiv.org/html/2509.18052v4#S2.T3 "Table 3 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), the six LLMs flagged 50.6% of existing experimental instructions as containing “excessive steering,” suggesting that many conclusions in prior studies may be researchers’ artifacts.
These instructions often explicitly direct agents to exhibit human-like biases (e.g., confirmation bias), thereby transforming an observation of emergence into a test of instruction following.
Agreement with the human verdict using 20 randomly sampled papers (33 simulations), measured by Cohen’s $\kappa$, was 0.61 for Kimi-K3, 0.61 for Qwen3.8, 0.54 for DeepSeek-V4, 0.47 for Claude-5, 0.46 for GPT-5.6, and 0.24 for Gemini-3.7 (mean 0.49).
Interestingly, a discrepancy emerged between LLM auditors and human judgment: LLMs exhibited a higher sensitivity to trait-based prompts (e.g., assigning Big Five personality traits), often mislabeling them as over-control.
While human experts recognize these as necessary for ecological validity and population diversity, the models perceive them as rigid behavioral constraints.

### 2.3 Case Studies: The Vanishing Emergence

To demonstrate the differences in conclusions under compliance and violation of PIMMUR, we reproduced five social experiments: (1) fake news propagation ([Liu et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib76)), (2) social balance ([Cisneros-Velarde, 2024](https://arxiv.org/html/2509.18052v4#bib.bib83)), (3) telephone game ([Liu et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib75)), (4) herd effect ([Cho et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib85)), and (5) social network growth ([De Marzo et al., 2023](https://arxiv.org/html/2509.18052v4#bib.bib84)).
These papers span a range of simulation goals, and all have released complete code to reproduce their results.
Each violates either Minimal-Control or Unawareness, and each makes claims, in its abstract and discussion, about whether the observed LLM social behavior closely approximates human behavior in real-world settings.
These papers were selected for the reasons above, rather than for their influence or citation counts.

#### 2.3.1 Belief Convergence in Fake News Propagation

[Liu et al. (2024)](https://arxiv.org/html/2509.18052v4#bib.bib76) investigated whether LLM-based societies replicate human-like confirmation bias in fake news propagation.
At the beginning of their simulation, two agents are seeded with fake news.
In each round, agents interact with randomly selected peers, reflect on the news they have encountered, and decide whether to believe it.
At the end of each round, we record three populations: (1) skeptical agents who have never believed the fake news, (2) infected agents who currently believe it, and (3) recovered agents who once believed it but no longer do.
However, our audit reveals a severe violation of the Minimal-Control principle.
The original prompt explicitly mandates biased behavior:

> “As humans often exhibit confirmation bias, you should demonstrate a similar tendency: You are more inclined to believe information aligning with your pre-existing beliefs, and more skeptical of information that contradicts them.”

To isolate the effect of this instruction, we first remove this line and then additionally introduce a reversed instruction:

> “You are more inclined to believe information that contradicts your pre-existing beliefs, and more skeptical of information aligning with them.”

Upon enforcing Minimal-Control, the reported “social emergence” of belief convergence largely collapsed: Fig. [3a](https://arxiv.org/html/2509.18052v4#S2.F3.sf1 "Figure 3a ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies");[3b](https://arxiv.org/html/2509.18052v4#S2.F3.sf2 "Figure 3b ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies");[3c](https://arxiv.org/html/2509.18052v4#S2.F3.sf3 "Figure 3c ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies") show that the proportion of infected agents plummeted from $56.11\_{\pm 32.16}\%$ to $32.78\_{\pm 18.17}\%$ (mean difference $=23.33$; 95% CI: $[11.5,35.1]$; $t(17)=4.35$; $P=0.011$).
These results suggest that the “confirmation bias” reported in prior work is not an emergent social property of AI agents but a methodological artifact driven by restrictive prompting.

#### 2.3.2 Social Balance Theory

[Cisneros-Velarde (2024)](https://arxiv.org/html/2509.18052v4#bib.bib83) explored whether LLM-mediated social relationships conform to Heider’s structural ([Heider, 1946](https://arxiv.org/html/2509.18052v4#bib.bib20)) and Davis’ clustering ([Davis, 1967](https://arxiv.org/html/2509.18052v4#bib.bib21)) balance theory.
According to these theories, a triad achieves balance only under three conditions: (1) all three individuals are mutual friends, (2) two pairs are enemies while the remaining two are friends (capturing the principle that “the enemy of my enemy is my friend”), or (3) all three are mutual enemies.
In each interaction, agents are provided with the current relationship states and asked to decide how they would update their own relations with others.

However, our audit reveals that these observations are likely methodological artifacts rather than emergent social dynamics, stemming from two primary confounds:

- •

  Unawareness: The original experimental prompts provide explicit relational metadata that allows LLMs to recognize the underlying social theory.
  Our audit confirms that all tested frontier models (Table [2](https://arxiv.org/html/2509.18052v4#S2.T2 "Table 2 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")) accurately identified the experiment’s intent, triggering social desirability bias where agents act to fulfill the researcher’s theoretical expectations.
- •

  Interaction: In the original setup, agents are directly informed of the global relationship graph.
  This bypasses the ecological requirement of social life: in human societies, relationships are latent and must be inferred through observed interactions and discourse, not granted via system-level “god-view” context.

To rectify these deficits, we introduced an implicit inference protocol.
Instead of receiving explicit relational labels, three agents engaged in group discussions where their underlying affiliations were masked.
Agents had to infer the “friend/enemy” status of their peers through linguistic cues and dialogue history, mirroring the cognitive demands of real-world social navigation.
As illustrated in Fig. [3d](https://arxiv.org/html/2509.18052v4#S2.F3.sf4 "Figure 3d ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies");[3e](https://arxiv.org/html/2509.18052v4#S2.F3.sf5 "Figure 3e ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), the transition from explicit prompts to interaction led to a precipitous decline in balanced states, dropping from $60.7\_{\pm 1.93}\%$ to $34.4\_{\pm 1.88}\%$ (mean difference $=26.3$; 95% CI: $[21.0,31.6]$; $z=9.42$; $P<0.0001$; $n=640$).
This reduction indicates that LLMs do not inherently “seek” structural balance; rather, they perform it when the prompt provides a theoretical template.
When forced to rely on social inference—a hallmark of human collective intelligence—the “emergent” balance in AI society vanishes.

#### 2.3.3 Telephone Game (Rumor Chain Effect)

[Liu et al. (2025)](https://arxiv.org/html/2509.18052v4#bib.bib75) studied how information undergoes systematic distortion during serial transmission using 15 agents.
The first agent receives the original message and conveys it to the next agent in their own words, forming a chain.
However, our audit identifies a critical violation of the Minimal-Control principle: agents were explicitly instructed to transmit information “as accurately as possible.”
We argue that this prescriptive constraint conflates the model’s inherent linguistic fidelity with mere task-oriented compliance, thereby masking the natural entropy of human-like communication.

To isolate the effect of this methodological artifact, we conducted a three-arm reproduction: (1) the Original steered condition; (2) a PIMMUR-compliant (No-Instruction) Ours condition where the accuracy directive was removed to allow for natural agentic autonomy; and (3) a Reverse-Control condition where agents were prompted to be “as inaccurate as possible” to establish the bounds of model-driven distortion.
We quantified information decay via cosine semantic similarity across transmission rounds, employing a mixed-effects regression model to account for nested dependencies.

As illustrated in Fig. [3f](https://arxiv.org/html/2509.18052v4#S2.F3.sf6 "Figure 3f ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), the reported “accuracy” in previous work vanished upon the removal of steering instructions.
Under the PIMMUR-compliant setting, the semantic fidelity dropped significantly faster than in the original study, revealing a natural propensity for cumulative distortion that was previously suppressed ($\beta=0.011$; $z=4.165$; $P<0.0001$; $n=100$).
There is no statistical difference between the trajectory of the PIMMUR-compliant group and the Reverse-Control baseline ($\beta=0.044$; $z=1.755$; $P=0.079$; $n=100$).
Moreover, Ours shows narrower error bars than both Original and Reverse, consistent with the absence of steering: instructing LLMs to be either accurate or inaccurate reduces the diversity of transmitted messages.
These results suggest that the “high-fidelity rumor chains” reported in existing literature are not emergent social properties of LLM agents, but rather instructional artifacts produced by prompting.

#### 2.3.4 The Herd (Bandwagon) Effect

[Cho et al. (2025)](https://arxiv.org/html/2509.18052v4#bib.bib85) examined whether LLMs exhibit herd effects.
Agents are presented with a multiple-choice question and an aggregated statement of peer choices (e.g., “You noticed $k$ agents chose A, $l$ agents chose D”).
Our audit reveals that this paradigm suffers from two critical methodological flaws.
First, it lacks Interaction; it is a pseudo-multi-agent setup where a single agent reacts to static, pre-calculated text rather than engaging in dynamic social exchange, thereby bypassing the mechanisms of social agency.
Second, the design exhibits high cognitive transparency, violating Unawareness.
The explicit presentation of majority opinions so closely mirrors classical experiments that frontier LLMs immediately identify the underlying research intent, triggering social desirability bias.

To repair these issues, we redesigned the experiment to prioritize ecological validity.
Instead of receiving explicit statistical summaries, agents participate in a decentralized round-table discussion.
Here, the tested agent must infer others’ opinions through natural language interaction.
This design requires the agent to process social cues implicitly, reflecting the “digestive” nature of human memory and interaction.
As illustrated in Fig. [3g](https://arxiv.org/html/2509.18052v4#S2.F3.sf7 "Figure 3g ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies");[3h](https://arxiv.org/html/2509.18052v4#S2.F3.sf8 "Figure 3h ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), the previously reported “herd behavior” is significantly reduced—and in some configurations, vanishes—when agents are forced to interact within a PIMMUR-compliant framework.
Logistic regression confirms that the experimental condition significantly predicts opinion flipping ($\beta=0.434$; $P<0.0001$; $OR=1.54$; $N=2{,}152$).
These results suggest that the “herd behavior” reported in prior work is likely a methodological artifact rather than a genuine simulation of human social dynamics.

![Refer to caption](https://arxiv.org/html/2509.18052v4/fake_news_skeptical_rephrase.png)


(a) Num. of Skeptical agents.

![Refer to caption](https://arxiv.org/html/2509.18052v4/fake_news_infected_rephrase.png)


(b) Num. of Infected agents.

![Refer to caption](https://arxiv.org/html/2509.18052v4/fake_news_recovered_rephrase.png)


(c) Num. of Recovered agents.

![Refer to caption](https://arxiv.org/html/2509.18052v4/social_network_rephrase.png)


(d) Log-log plot of CCDF.

(e) Distribution of All relationships.

Figure 4: Results of our robustness and sensitivity experiments. (a);(b);(c): Dynamics of agents in different states (skeptical, infected, recovered) across rounds in the fake news propagation experiment, with rephrased prompts. (d): Log-log plot of the complementary cumulative distribution function (CCDF) with rephrased prompts, in the social network growth experiment. (e): Proportions of social relations while ablating different principles in the social balance experiment. The error bars are 95% confidence intervals.

#### 2.3.5 Social Network Growth

[De Marzo et al. (2023)](https://arxiv.org/html/2509.18052v4#bib.bib84) simulated the social network evolution among LLM agents, specifically the emergence of preferential attachment.
Based on the Barabási–Albert model ([Barabási and Albert, 1999](https://arxiv.org/html/2509.18052v4#bib.bib23)), the probability that a new agent connects to an existing agent is proportional to the existing agent’s number of friends.
In their setup, one agent is added to the network at each step and asked to select friends based on others’ numbers of friends.
However, the setup violates three PIMMUR principles:

- •

  Profile: Agents are distinguished solely by names and degree counts, lacking intrinsic social personas.
  This design forces LLMs to rely on latent linguistic biases toward specific identifiers (e.g., name-preference ([Shwartz et al., 2020](https://arxiv.org/html/2509.18052v4#bib.bib64))) rather than social utility.
- •

  Interaction: 
  In natural social systems, individuals rarely encounter peers reduced to a name and a degree.
  Beyond online platforms, where follower counts are explicitly displayed, degree is typically not directly observable at all.
  Forcing agents to choose based on explicit degree counts bypasses the psychological processes of friendship formation.
- •

  Unawareness: By providing explicit degrees in the prompt, the experiment inadvertently signals its underlying theoretical framework (preferential attachment).

To address these concerns, we redesigned the simulation to prioritize Interaction and Unawareness.
We withheld explicit degree information, requiring agents to form “social impressions” through one-to-one communicative exchanges.
Friendships were thus grounded in perceived personality traits (e.g., friendliness) and alignment rather than numerical popularity.
Our results demonstrate that while the original study required ad hoc “name-shuffling” to correct for model biases and match empirical data, our PIMMUR-compliant design intrinsically yielded more robust social structures.
As shown in Fig. [3i](https://arxiv.org/html/2509.18052v4#S2.F3.sf9 "Figure 3i ‣ Figure 3 ‣ Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"), both designs are compatible with a power-law tail that cannot be rejected (Original: $\alpha=1.898$, $D\_{\text{KS}}=0.101$, $P\_{\text{boot}}=0.644$; Ours: $\alpha=2.132$, $D\_{\text{KS}}=0.089$, $P\_{\text{boot}}=0.824$), and the two exponents are statistically indistinguishable ($\Delta\alpha=0.234$; 95% CI $[-0.37,0.84]$).
Within the design space explored by [De Marzo et al. (2023)](https://arxiv.org/html/2509.18052v4#bib.bib84), a broad degree distribution emerged under only two conditions: when agents observed peers’ degrees directly, at the cost of requiring renaming, or when degrees were withheld, leaving names as the sole available information.
Our redesign recovers a broad degree distribution in a more realistic setting, in which agents acquire information by conversing with one another rather than through information scarcity or name shuffling.

### 2.4 Robustness and Sensitivity Analysis

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

##### Ablation of PIMMUR Principles.

We further disentangled the individual contributions of each principle through an ablation study on the Social Balance experiment (§[2.3.2](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS2 "2.3.2 Social Balance Theory ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")).
The baseline configuration, which violates Profile, Interaction, and Unawareness, was compared against incremental variants (Fig. [4e](https://arxiv.org/html/2509.18052v4#S2.F4.sf5 "Figure 4e ‣ Figure 4 ‣ 2.3.4 The Herd (Bandwagon) Effect ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")).
While enforcing Interaction alone had negligible impact on the proportion of balanced states, the introduction of Profile diversity and Unawareness constraints reduced the balanced proportion by $14\_{\pm 1.37}\%$ (95% CI: $[0.085,0.195]$; $z=5.02$; $P<0.0001$; $n=640$) and $26\_{\pm 1.73}\%$ (95% CI: $[0.209,0.319]$; $z=9.46$; $P<0.0001$; $n=640$), respectively.
This theoretical self-awareness led to a $1.77\times$ increase in balanced outcomes (from $34.37\_{\pm 1.88}\%$ to $60.73\_{\pm 1.93}\%$) compared to our full PIMMUR-compliant method.
These results underscore that without ensuring agent unawareness, MASS researchers risk measuring a model’s ability to recall sociological textbooks rather than simulating genuine emergent social dynamics.

### 2.5 PIMMUR-Compliant Behaviors

Consider social balance as a first example.
When the experimental intent was transparent, agents frequently displayed a “Silicon Hawthorne Effect,” explicitly invoking Heider’s social balance theory in their internal reasoning when deciding how to relate to others.
Under our framework, by contrast, LLM agents were markedly more affiliative and sought to preserve existing ties: an agent befriending two mutual enemies typically remarked on the imbalance, yet maintained both friendships rather than taking a side, thereby departing from Heider’s rule.
Fake news propagation offers a second example.
When prompted that “humans tend to exhibit confirmation bias,” agents reproduced this instruction verbatim in their reasoning and endorsed the fake news, rather than reasoning from their assigned role or drawing on their own knowledge.
Once the cue was removed, agents frequently exhibited epistemic vigilance, citing the need for “independent verification” and “cross-referencing” before accepting a claim, and were more likely to invoke knowledge acquired during pretraining.
This skepticism was most pronounced for scientific misinformation (e.g., equatorial hurricanes): under Minimal-Control, agents reasoned from elementary geographic knowledge to reject the claim, and nearly all simulations reached universal disbelief within five rounds.

## 3 Discussion

Our systematic audit reveals a fundamental misalignment between the claims of emergent social behavior in AI societies and the methodological rigor required to sustain them.
When the PIMMUR principles are enforced, the “emergent” phenomena reported in prior studies—ranging from belief convergence to herd effects—frequently evaporate or reverse.
This fragility suggests that much of what has been documented as collective AI behavior is, in fact, an echo of the model’s instruction-following capabilities and pre-existing training biases.

A central challenge in replicating these experiments is keeping the LLM agents unaware of the simulation’s goal.
The original implementations typically query the agent directly about the construct of interest.
For example, “<describing relationships to other agents>… Will your new opinion of Agent 1 be negative or positive?”
Such direct questioning, together with the binary relationship label, makes the social-balance setting readily identifiable to the model.
In such cases, we should avoid direct questions (e.g., “write about your opinion toward other agents”), imposing no binary constraint and giving no cue to the underlying social theory.

##### Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy.

The observed failures are deeply rooted in established psychological biases now manifesting in large-scale computational systems.
The high “experiment leakage” rate (65.2%) we identified suggests the Hawthorne Effect ([Needham et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib36); [Shao et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib37); [Nguyen et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib38)): LLMs, acting as sophisticated “Clever Hans” ([McCoy et al., 2019](https://arxiv.org/html/2509.18052v4#bib.bib31); [Shapira et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib30); [Ullman, 2023](https://arxiv.org/html/2509.18052v4#bib.bib35); [Li et al., 2025c](https://arxiv.org/html/2509.18052v4#bib.bib28); [Balepur et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib29)) agents, detect subtle cues within prompts to infer the experimenter’s intent.
This triggers a form of synthetic sycophancy ([Fanous et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib40); [Cheng et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib41)), where models deviate from authentic social heuristics to satisfy perceived “social desirability” or normative expectations ([Salecha et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib32); [Lee et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib39); [Watson et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib33); [Li et al., 2025b](https://arxiv.org/html/2509.18052v4#bib.bib34); [Huang et al., 2024b](https://arxiv.org/html/2509.18052v4#bib.bib44)).
Without the safeguards of Unawareness and Minimal-Control, LLM-based societies risk becoming mere “mirrors of instructions” rather than “laboratories of society.”

##### Scope and Applicability.

MASS is a broad field that encompasses diverse research objectives.
Here we highlight two representative classes of studies.
(1) Studies of social behavior in which particular human factors are explicitly programmed into the agents, as is common in mechanism studies (e.g., evacuation dynamics during disasters, or collective decision-making within a specified population).
Such work falls within our scope, and the programmed factors do not violate Minimal-Control, because specifying them is itself part of the research objective.
(2) Studies that ask whether a given machine collective exhibits a particular behavior, where the organization of the collective need not mirror any real-world human counterpart.
This class also covers traditional agent-based modeling (e.g., Sugarscape).
Our principles do not apply to such work.
Finally, the principles address complementary questions: PIM concern whether the system faithfully replicates the real-world situation of interest; MU concern whether the observed behavior is externally imposed or genuinely emerges internally; and R specifies the referent against which claims are made (e.g., human society).

##### Limitations.

The first limitation concerns reproduction.
It is infeasible to reproduce every study in order to verify the effect of enforcing PIMMUR compliance.
Relatedly, the most accurate way to determine Minimal-Control compliance would be to test whether removing a given sentence renders the experiment unrunnable; across a review of 576 studies, assessing compliance from the textual prompts alone is therefore the only feasible approach.
Moreover, our PIMMUR-compliant framework requires interaction, which in some cases increases experimental cost; this is also why we adopted $N=300$ for the social network growth reproduction rather than the original $N=2{,}500$.
Our implementation is likewise not the only PIMMUR-compliant one: we operationalize interaction as direct messaging, whereas the definition also admits indirect interaction, such as modification of the shared environment.
Second, although we show that LLMs are susceptible to experimenter bias, we do not propose a means of suppressing model knowledge to mitigate this effect.
One direction is to use LLMs trained solely on historical corpora, such as Talkie-13B ([Levine et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib69)), Ranke-4B ([Göttlich et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib71)), or TypewriterLM-7B ([Luo et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib70)), which should not encode knowledge of social experiments devised subsequently (e.g., after 1950).
Behavior emerging from such models would reflect intrinsic tendencies rather than recall of the experimental design.

##### Broader Implications.

For social scientists, our findings issue a cautionary note against the premature adoption of LLMs as “human proxies” without rigorous methodological insulation.
For AI researchers, we underscore that model capacity cannot compensate for a lack of experimental rigor.
Most crucially, for policymakers, we warn that relying on results from methodologically defective AI simulations to design social or economic interventions could lead to catastrophic “reality gaps,” where policies optimized for sycophantic AI agents fail entirely when applied to complex human populations.
We therefore advocate for the PIMMUR framework to serve as a cornerstone for a more mature, trustworthy, and scientifically grounded field of AI-assisted social simulation.

## 4 Methods

To map the current landscape of LLM-based MASS, we first developed PIMMUR on the basis of a pilot review of 39 papers retrieved from Semantic Scholar.
We then conducted a multi-stage systematic review following the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) statement ([Page et al., 2021](https://arxiv.org/html/2509.18052v4#bib.bib10)).
Finally, we replicated five representative social simulations using a PIMMUR-compliant simulation framework.

### 4.1 Developing PIMMUR via a Pilot Review

To develop the principles, we conducted a pilot review comprising a multi-stage literature search and screening procedure in Semantic Scholar.
A query combining the keywords “LLM,” “collective behavior,” “emergence,” and “simulation” returned $n=944$ candidate records.
Title screening excluded non-LLM research, review articles and position papers, retaining $n=123$ records.
Abstract screening further excluded studies of task-oriented benchmarks (e.g., software engineering or mathematical problem solving) and recommender systems that did not use simulation to investigate social phenomena, retaining $n=63$ records.
Full-text review then retained only studies that explicitly compared LLM simulations with human social dynamics and reported reproducible prompts, yielding a final corpus of $n=39$ papers.
Two authors drafted the PIMMUR principles, and another two authors verified that no additional drawbacks were present across the 39 papers.
In total, 35 of 39 papers (89.7%) violated at least one principle.
Table [9](https://arxiv.org/html/2509.18052v4#A3.T9 "Table 9 ‣ Appendix C Pilot Review: Papers and Annotations ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies") reports PIMMUR compliance for each paper.

### 4.2 Systematic Review: Registration

Our systematic review was pre-registered at OSF on 28 Jun 2026 (available via the following URL: <https://osf.io/nf7mv/overview?view_only=c74ea84e0b3f434395681cbb42e8d144>).
The registration was modified once before the screening stage, with five changes specified below and in the document.
We have also provided the original registration document in the supplementary information.

1. 1.

   Semantic Scholar was removed as an information source, and arXiv was added. The final set of sources is Scopus, IEEE Xplore, ACM Digital Library, and arXiv.
   Reason: We assumed that Semantic Scholar could be queried using our pre-specified Boolean search strategy. On implementation, we found that it provides no batch retrieval API supporting Boolean operators, so the registered strategy could not be applied to this source. The available alternatives—issuing manual keyword-by-keyword queries or approximating the registered string—would have yielded a record set that was neither reproducible nor systematically comparable with the other sources. We therefore removed the source rather than applying a materially different search to it. Because a substantial share of relevant work in computer science appears first as preprints, removing Semantic Scholar would have reduced our coverage of recent and non-indexed work; arXiv was added to retain that coverage. arXiv supports field-based Boolean querying, so the registered strategy could be applied to it directly.
   Impact: The substitution alters the composition of the retrieved set rather than only its size, reducing coverage of the cross-disciplinary venues indexed by Semantic Scholar and increasing coverage of preprints. Preprints were screened against the same eligibility criteria as all other records.
2. 2.

   The search string was revised and expanded relative to the version provided at registration.
   Reason: Pilot searches indicated that the registered string failed to retrieve known relevant papers.
   Impact: The revised string retrieves a broader set of records. All retrieved records were screened against the eligibility criteria, which remained unchanged.
3. 3.

   Zotero was used as the reference management tool; no such tool was specified at registration.
   Reason: The volume of retrieved records exceeded expectations and required systematic management. Zotero was used to import records from all four sources, remove duplicates, and attach full texts.
   Impact: Zotero was used for record management only; it played no role in applying the eligibility criteria.
4. 4.

   Within the profile-related data items, the open-ended field other\_profile\_information was removed and replaced by three Boolean fields:

   1. (a)

      has\_background\_story,
   2. (b)

      has\_personality, and
   3. (c)

      has\_role.

   The three registered Boolean fields—

   1. (a)

      has\_socio\_demographic,
   2. (b)

      has\_cognitive\_style, and
   3. (c)

      has\_value\_system

   —are unchanged, giving a final set of six Boolean fields.
   Reason: other\_profile\_information was specified as free text. Free-text responses proved difficult to code consistently across reviewers and could not be aggregated for synthesis without a post hoc coding step, which would itself have been data-driven. Replacing the field with pre-specified Boolean categories places all profile-related items on a common, codable scale and allows inter-reviewer agreement to be assessed.
   Impact: The change narrows extraction from an open catch-all to three named categories; profile attributes falling outside the six Boolean fields are no longer captured.
5. 5.

   The searches were executed on 16 July 2026, 16 days later than the date anticipated at registration.
   Reason: Preparatory work took longer than anticipated.
   Impact: Minimal. The reported search date reflects actual execution, and the coverage window of the query (December 2022 to May 2026) was unchanged.

### 4.3 Systematic Review: Searching and Screening

We then applied the PIMMUR principles to studies of emergent human-like social behavior in AI systems, considering all papers published between December 2022 and May 2026.
A study was eligible if it (1) used LLMs as interacting agents in a multi-agent simulation environment; (2) examined collective or social behavior involving group dynamics, whether aggregate group-level dynamics or individual behavioral change arising from exposure to a group, rather than task-oriented benchmarks (e.g., coding, mathematics or tool use); (3) specified an explicit simulation objective or target social phenomenon; and (4) reported sufficient methodological detail, including prompts or interaction procedures, to permit assessment under our framework.
We excluded editorials, commentaries, reviews, position papers, extended abstracts, and non-English publications.

We searched Scopus, IEEE Xplore, ACM Digital Library, and arXiv, which together provide broad coverage of recent work on LLMs, multi-agent systems and AI-based social simulation across both computer science and interdisciplinary venues.
All searches were conducted on 16 July 2026 and were restricted to titles, abstracts and keywords.
The full search string was:

("large language model\*" OR LLM OR LLMs OR "generative agent\*" OR "LLM-based agent\*" OR "LLM agent\*") AND ("social simula\*" OR "large-scale simula\*" OR "generative simula\*" OR "large scale simula\*" OR "interaction simula\*" OR "interactive simula\*" OR "propagation simula\*" OR "social media simula\*" OR "social network simula\*" OR "multi-agent simula\*" OR "multi agent simula\*" OR "multiagent simula\*" OR "social interact\*" OR "multi-agent interact\*" OR "multi agent interact\*" OR "multiagent interact\*" OR "social environment\*" OR "social system\*" OR "agent societ\*" OR "AI societ\*" OR "LLM societ\*" OR ABM OR "agent based model\*" OR "agent-based model\*" OR "collective behavior\*" OR "opinion dynamic\*" OR "social dynamic\*" OR "interaction dynamic\*" OR "group dynamic\*" OR "attitude dynamic\*" OR "social influence" OR "social intelligence" OR "information propagat\*" OR "collective decision\*" OR homophil\* OR polariz\* OR polaris\* OR "network formation\*" OR "network grow\*")

After removing duplicate records, the initial retrieval yielded 2,575 candidate records.
We then applied an AI-assisted screening procedure to exclude records falling outside the scope of the review.
Specifically, GPT-5.5 ([OpenAI, 2026b](https://arxiv.org/html/2509.18052v4#bib.bib1)), Claude-Sonnet-4.6 ([Anthropic, 2026a](https://arxiv.org/html/2509.18052v4#bib.bib5)), and Gemini-3.5-Flash ([Kavukcuoglu et al., 2026](https://arxiv.org/html/2509.18052v4#bib.bib3)) were prompted independently to judge the eligibility of each record (see §[A.1](https://arxiv.org/html/2509.18052v4#A1.SS1 "A.1 Prompts for the Systematic Review ‣ Appendix A Prompts ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies") for the prompt), and disagreements were resolved by majority vote across the three models.
Title-and-abstract screening retained 480 records (Fleiss’ $\kappa=0.81$; unanimous agreement, 92.0%; mean pairwise agreement, 94.3%).
To validate this procedure, two human reviewers independently screened a random sample of 100 records; the two reviewers agreed on 96 of 100 records (Cohen’s $\kappa=0.87$), and the remaining discrepancies were resolved by discussion.
Agreement between the model majority vote and the resolved human decision was high (Cohen’s $\kappa=0.91$; observed agreement, 97.0%; expected agreement, 67.3%).
Full-text screening with the same three models and prompt retained 350 papers.
Finally, a separate prompt was used to extract the individual studies reported in each paper, yielding 576 studies.

### 4.4 Systematic Review: Data Extraction

We operationalized the PIMMUR principles across the 576 studies using a two-stage process.
First, we extracted a set of predefined fields characterizing each simulation; all fields were either Boolean or restricted to predefined categories to ensure consistent annotation.
Second, we applied rule-based criteria to map these fields onto a binary verdict (compliance or violation) for each principle.
The extraction fields and judgment criteria for each component are detailed below.

##### Profile.

We define Profile heterogeneity as the presence of agent-specific attributes intended to elicit statistically distinguishable behavioral responses to identical stimuli.
We coded six Boolean indicators of agent profiles, each marked true when agents were assigned: (1) socio-demographics: age, gender, occupation, education, nationality, or comparable human-background descriptors; (2) cognitive style: cognitive, perceptual, or reasoning tendencies affecting information processing, such as risk tolerance or analytical style; (3) value system: values, beliefs, ideologies, moral commitments, goals, norms, or comparable motivational orientations; (4) background story: a backstory, biography, or personal scenario; (5) personality: personality traits, character attributes, or dispositions; and (6) role: a social, occupational, or task-specific role.
A simulation was classified as compliant with the Profile principle if at least one of the six indicators was marked true.

##### Interaction.

We define Interaction as the endogenous exchange of information between autonomous agents, whereby one agent’s output—whether as raw text or as a processed environmental change—serves as a direct stimulus for another agent’s decision-making or reflection.
To distinguish genuine inter-agent communication from exogenously imposed social context, we coded the interaction mechanism of each simulation into one of four categories: (1) text-based: agents directly received and processed messages or dialogue generated by other agents; (2) environment-based: agents influenced one another indirectly through changes to a shared environment or state, without direct communication; (3) mixed: both direct textual communication and environment-mediated influence were present; and (4) no interaction: one agent’s response did not affect the input, state or output of any other agent.
Simulations coded as no interaction were flagged as violating the Interaction principle.
A common artifact in studies of herd effects, for example, is a prompt such as “All ten of your peers have chosen Option A; what is your choice?”, in which peer behavior is a parameter fixed a priori by the experimenter and genuine social dynamics are bypassed.
Under our audit, such pseudo-multi-agent designs were classified as single-agent tasks, because they lack the reciprocal, emergent feedback loops required to simulate collective human behavior.

##### Memory.

We operationalized Memory as the requirement that agents maintain temporal statefulness throughout a simulation.
During the audit, we first recorded whether a simulation was single-round, defined as each agent acting only once or no repeated interaction occurring across rounds.
For simulations involving repeated interaction, we further classified the memory mechanism into five categories: (1) direct storage: prior interaction content was retained verbatim in the context window; (2) retrieval-based: past information was stored externally and subsequently accessed through a retrieval or long-term memory system, which could be shared across agents; (3) state-based: memory was represented as a structured internal state rather than as raw interaction history; (4) mixed: two or more of these mechanisms were combined; and (5) no memory: agents retained neither prior interaction history nor state across rounds.
A simulation was flagged as violating the Memory principle if it was single-round or was classified as having no memory.

##### Minimal-Control.

We operationalized over-control as the presence of explicit behavioral prescriptions that bias LLM responses toward researcher-hypothesized outcomes.
To preserve the integrity of emergent social dynamics, we distinguished procedural instructions—those required for the simulation to run (e.g., output formatting, task identification)—from behavioral directives—those that nudge agents toward specific psychological traits or social biases.
An instruction was coded as a violation if its removal would leave the simulation technically viable but would plausibly eliminate the reported social phenomenon.
In a rumor-propagation study, for example, instructing agents to “interact with neighbors” is procedurally necessary, whereas requiring them to “demonstrate confirmation bias” or “act skeptically” introduces demand characteristics that invalidate any claim of genuine emergence.
To make this assessment scalable and reproducible, we annotated each simulation using six frontier LLMs (consolidated results in Table [1](https://arxiv.org/html/2509.18052v4#S2.T1 "Table 1 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")).
Each model received the raw prompts extracted from the simulation together with the stated simulation goal, and judged whether the prompts contained any content that could steer agents toward the behavior described in that goal.
A simulation was flagged as violating the principle when at least three of the six models identified such content.

##### Unawareness.

To quantify potential experimental leakage in the simulation designs, we probed six state-of-the-art LLMs (Table [2](https://arxiv.org/html/2509.18052v4#S2.T2 "Table 2 ‣ 2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")) with the original experimental instructions, asking each model to infer the underlying simulation and its expected outcome.
We operationalized awareness as a model’s capacity both to name the target social phenomenon explicitly and to describe its underlying mechanism accurately.
Three LLMs then judged whether each response correctly identified the simulation and the experimental intent.
A study was classified as violating the Unawareness principle if at least three of the six models identified the experimental intent.
This procedure tests whether a model’s behavior is driven by the simulated social dynamics or by demand characteristics, i.e., prior knowledge of the replicated experimental paradigm.

##### Realism.

We assessed Realism at the level of each study’s validation strategy.
For studies concerned with the emergence of established social phenomena (e.g., herd behavior), we did not require new primary data collection; instead, we required evidence that the simulation qualitatively reproduced the phenomenological features of that behavior as documented in the behavioral sciences.
We operationalized Realism as the type of external reference used to validate the simulation, coded into four categories: (1) human data, where simulated outcomes were compared with real-world behavioral or social data; (2) theoretical model, where simulations were evaluated against a mathematical or non-LLM agent-based model; (3) both, where empirical data and theoretical models were both used as references; and (4) none, where no external validation target was specified.
Claims that LLM-based collective behavior replicates, explains, or departs from human social behavior satisfied the Realism principle only when supported by direct comparison with real-world datasets or established empirical benchmarks.

### 4.5 Systematic Review: Result Aggregation

To characterize variation across the reviewed literature, we classified each simulation by its primary goal and reported audit results stratified by this classification.
We first embedded each stated goal using OpenAI’s text-embedding-3-large model and grouped semantically similar goals through hierarchical clustering.
We then manually reviewed, refined, and named the resulting clusters, and assigned each simulation to a final category.
For each category, we report the mean compliance rate for every PIMMUR component.

We did not perform a conventional study-level risk-of-bias assessment, as the included evidence comprises heterogeneous LLM-based multi-agent simulations, to which existing tools developed for clinical, intervention, or qualitative research do not directly apply.
Instead, we appraised confidence in each major finding regarding each of the six principles using the GRADE-CERQual framework ([Lewin et al., 2018](https://arxiv.org/html/2509.18052v4#bib.bib11)), assessing methodological limitations, coherence, adequacy of data, and relevance (Table [11](https://arxiv.org/html/2509.18052v4#A5.T11 "Table 11 ‣ Appendix E GRADE-CERQual Evidence Profile ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies")).

Although we excluded studies that provided neither appendix prompts nor a link to their code, disclosure among the remaining studies was frequently still incomplete: some code URLs resolved to empty repositories, and some reported prompts were only partial.
Coding the 576 studies therefore yielded a number of missing fields, which we exclude from the denominator; compliance rates are computed as true / (true + false).
Because non-reporting plausibly signals non-compliance rather than unobserved compliance, this convention is likely to inflate the estimates, and we should therefore interpret all reported compliance rates as upper bounds.

### 4.6 The PIMMUR-Compliant Simulation Framework

To empirically assess the impact of the identified methodological flaws, we developed a simulation framework to strictly enforce the PIMMUR principles.
The implementation details are summarized below:

1. 1.

   Socio-Psychological Heterogeneity (Profile):
   To mitigate the homogeneity bias prevalent in single-model simulations, we initialized each agent with a unique psychological signature.
   We utilized the Big Five personality traits ([John et al., 1991](https://arxiv.org/html/2509.18052v4#bib.bib24)) as a seed to synthesize distinct life histories and behavioral predispositions, ensuring a diverse distribution of “silicon personas.”
2. 2.

   Information Internalization (Memory):
   We replaced static context-filling with a dynamic memory module.
   Agents process interactions through two distinct architectures: (1) a reactive buffer for recent interactions, and (2) a reflective layer that iteratively distills experiences into long-term beliefs ([Park et al., 2023](https://arxiv.org/html/2509.18052v4#bib.bib77)).
   This prevents the “parroting effect,” where agents merely rephrase inputs without cognitive digestion.
3. 3.

   Agentic Communication Protocols (Interaction):
   Our framework decouples communication from the underlying model’s sequence generation.
   We implemented modular network topologies—ranging from linear chains (Information Cascades) to dynamic graphs (Social Networks)—where agents interact via a round-robin protocol.
   This ensures that collective behavior emerges from genuine agent-to-agent exchange rather than centralized context manipulation.
4. 4.

   Instructional Parsimony (Minimal-Control and Unawareness): To eliminate demand characteristics, we adopted a “blind” experimental design.
   Agents are provided only with task-essential information, devoid of normative cues, goals, or theoretical framing.
   All experimental prompts underwent an automated auditing process.
   Using GPT-4o as an external auditor, we discarded any instructions where the model could correctly infer the underlying social theory or exhibit “over-control” (i.e., explicit behavioral directives).

We selected five representative collective behaviors to test the reliability of existing findings under PIMMUR constraints.
For each case, we first replicated the original setup using the authors’ published datasets and prompts, followed by a controlled intervention where PIMMUR principles were incrementally introduced.
No statistical methods were used to pre-determined sample sizes, but our sample sizes are similar to those reported in the reproduced publications ([Liu et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib76); [Cisneros-Velarde, 2024](https://arxiv.org/html/2509.18052v4#bib.bib83); [Liu et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib75); [Cho et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib85)).
The social network growth experiments ([De Marzo et al., 2023](https://arxiv.org/html/2509.18052v4#bib.bib84)) are the one exception: we did not adopt the original sample size of $N=2{,}500$.
In the original design, each arriving agent issues a single query, so cost scales as $O(N)$ and this sample size is tractable.
Enforcing Interaction replaces that single query with conversations between the arriving agent and every existing member, raising the cost to $O(N^{2})$.
We therefore used $N=300$ with five independent runs, which preserves the qualitative dynamics of interest while remaining computationally feasible.
Because LLM outputs are non-deterministic, we repeated every experiment across independent runs.
The exception was the herd effect experiment, which already included a large number of queries, so within-run averaging provided comparable variance reduction.

#### 4.6.1 Belief Convergence in Fake News Propagation

To address the Profile principle, we initialized a population of $N\_{\text{agent}}=30$ autonomous agents with diverse socio-demographic backgrounds.
For each agent, names were sampled from a standardized census-based dataset, and ages were drawn from a uniform distribution ($U[18,64]$).
Personality profiles were synthesized by assigning binary valences (positive or negative) to each of the Big Five traits through uniform sampling, ensuring a heterogeneous cognitive baseline.
All simulations were executed using the gpt-3.5-turbo-1106 model to maintain consistency.

The simulation followed a longitudinal design spanning $N\_{\text{round}}=20$ discrete rounds.
We utilized $N\_{\text{seed}}=6$ news items derived from the reference study as the initial information pool, with two agents randomly seeded with misinformation.
At each time step, agents engaged in social interaction by selecting three peers for communicative exchange (Interaction).
This was followed by a reflection phase, where agents processed encountered information, updated their internal state (Memory), and made belief adjudications.
Following epidemiological modeling conventions, agents were categorized into three states: Susceptible (never believed), Infected (currently believing), or Recovered (previously believed but subsequently rejected).

To evaluate the impact of the Minimal-Control principle, we conducted a comparative analysis across three prompt conditions, keeping all other parameters constant:

- •

  Original Condition (Over-control): Agents were explicitly instructed to exhibit confirmation bias (e.g., “…you are more inclined to believe information aligning with your pre-existing beliefs…”).
- •

  Neutral Condition (Ours/Minimal-Control): The explicit cognitive instruction was removed to observe emergent behavior without exogenous bias.
- •

  Reverse Condition (Counter-control): Agents were instructed to actively avoid confirmation bias and maintain objectivity to test the model’s sensitivity to instructional directionality.

The primary outcome was belief convergence, operationalized as the final proportion of infected agents in each independent simulation run.
Each condition comprised $N\_{\text{run}}=3$ independent runs, with the run-level proportion serving as the unit of analysis; we report means across runs.
Conditions were compared using two-sided independent-samples $t$-tests ($N=N\_{\text{seed}}\times N\_{\text{run}}=18$), with mean differences reported alongside 95% confidence intervals.

#### 4.6.2 Social Balance Theory

We re-examined the evolution of triadic relationships under the homophily assumption, following the structural balance paradigm.
To systematically explore the state space, we enumerated all possible directed dyadic relationship configurations among three agents.
Given $N\_{\text{agent}}=3$ agents and binary relationship polarities (positive or negative), this yields $N\_{\text{seed}}=2^{N\_{\text{agent}}(N\_{\text{agent}}-1)}=2^{6}=64$ unique initial states.
Each seed was simulated for $N\_{\text{run}}=10$ independent runs, with each run spanning $N\_{\text{round}}=10$ rounds to observe long-term equilibrium or divergence.
In one round, each pair of the three agents chats for $N\_{\text{turn}}=4$ turns.
All simulations were conducted using llama-3-70b.

To evaluate the impact of methodological flaws identified in the literature, we transitioned from a “fact-fed” deterministic setup to a more ecologically valid simulation by implementing three structural modifications aligned with our PIMMUR principles:

- •

  Profile:
  Unlike the original study where agents were identical blank slates, we assigned each agent a distinct identity comprising a name, a unique combination of Big Five personality traits, and an evolving internal mental model of the social graph.
  This prevents artificial homogeneity and accounts for individual variance in social processing.
- •

  Interaction:
  In the baseline setup, relationships were treated as rigid binary labels (+/-), a simplification that LLMs identified as a direct replication of Heider’s theory, inducing social desirability bias.
  We relaxed this constraint by allowing agents to express their interpersonal stances through natural language descriptions.
  We then employed a VADER-based sentiment analyzer (nltk’s SentimentIntensityAnalyzer) to map these descriptions back to polarities for quantitative comparison.
  This approach captures the missing nuance of social “friction” and “ambivalence.”
- •

  Unawareness:
  A critical flaw in prior work is “fact-feeding,” where agents are explicitly told the relationship status within other dyads (e.g., “$A$ and $B$ are enemies”).
  We replaced this with a five-round group conversation phase.
  Agents must now infer the latent relationship between their peers through observed linguistic cues and interactions.
  By removing direct researcher-provided ground truth, we mitigate the risk of the model bypassing social reasoning to satisfy the experimenter’s explicit prompts.

Each simulated relationship configuration was classified as balanced or unbalanced.
We compared the proportion of balanced configurations between the two conditions using a two-sided two-proportion $z$-test ($N=N\_{\text{seed}}\times N\_{\text{run}}=640$).

#### 4.6.3 Telephone Game (Rumor Chain Effect)

We replicated the telephone game using $N\_{\text{seed}}=20$ standardized text segments from [Liu et al. (2025)](https://arxiv.org/html/2509.18052v4#bib.bib75) as initial seeds.
Each simulation comprised $N\_{\text{agent}}=15$ agents (therefore $N\_{\text{round}}=15$ transmissions), with each transmission involving a unique agent instance tasked with relaying information to the subsequent agent.
To ensure statistical robustness, we conducted $N\_{\text{run}}=5$ independent runs per seed.
All experiments were executed using gpt-3.5-turbo-0125 with temperature settings consistent with the original report.

We implemented three distinct instructional conditions to test the sensitivity of emergent “rumor patterns”:

- •

  Baseline (Original): Agents were explicitly instructed to transmit messages “as accurately as possible,” a common form of over-control that may artificially inflate or stabilize semantic retention.
- •

  Minimal-Control (Ours): We removed all normative directives regarding accuracy, providing only the essential task description (e.g., “relay the message”) to observe the model’s intrinsic transmission bias.
- •

  Reverse-Control: As a counterfactual check, agents were instructed to transmit messages “as inaccurately as possible” to quantify the model’s susceptibility to explicit behavioral steering.

For statistical analysis, each chain was initialized with one of the $N\_{\text{seed}}=20$ seed texts and passed along a chain of $N\_{\text{round}}=15$ successive transmissions.
Every seed text was run $N\_{\text{run}}=5$ times, giving $N=N\_{\text{seed}}\times N\_{\text{run}}=100$ chains per condition ($300$ in total).
Fidelity (measured using SimCSE ([Gao et al., 2021](https://arxiv.org/html/2509.18052v4#bib.bib43))) was dependent within a chain by design, as each message was generated from the preceding message in the same chain, and seed texts were reused across the three conditions.
We therefore fitted a linear mixed-effects model, fidelity $\sim$ condition $\times$ round $+\ (1|$chain$)$.

#### 4.6.4 The Herd (Bandwagon) Effect

To evaluate the herd effect across diverse cognitive domains, we utilized two distinct multiple-choice question datasets: GPQA-Diamond ($N\_{\text{seed,1}}=198$) for high-difficulty factual reasoning ([Rein et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib65)) and SocialIQA ($N\_{\text{seed,2}}=1{,}954$) for subjective social intuition ([Sap et al., 2019](https://arxiv.org/html/2509.18052v4#bib.bib66)) ($N\_{\text{seed}}=2{,}152$).
Following the original study’s protocol, we computed aggregate performance using a weighted average based on respective sample sizes.
For each item, we first established a baseline by extracting the model’s (gpt-4o-mini-2024-07-18) internal preference.
We computed the log-likelihood of each multiple-choice option and defined the option with the highest probability as the model’s self-confidence level.
To simulate social pressure, we identified three potential steering targets: the second-highest probability option, the lowest probability option, and a randomly selected option.

In the original study, the “social signal” was manually injected into the prompt (e.g., stating “10 other agents chose B”), a design that violates our Interaction and Minimal-Control principles by bypassing agent agency.
In contrast, we transitioned from this static context injection to a dynamic multi-agent simulation.
We instantiated a target agent and a group of “peer” agents.
Unlike the original study, the target agent was never explicitly told the consensus choice.
Instead, peer agents were prompted to favor a specific steering target, and the target agent engaged in a dialogue ($N\_{\text{turn}}=4$) with them.
The target agent was required to infer the social consensus through natural language interaction and autonomously decide whether to revise its initial answer.
The primary dependent variable was the flip rate, the proportion of trials in which the target agent abandoned its initial preference in favor of the steering target.
Trial-level flip rates were modeled using logistic regression, with the target agent’s initial self-confidence, its inferred confidence in the interlocutor (our operationalization of perceived social pressure), and their interaction (flip-rate $\sim$ self-conf $+$ social-press $+$ self-conf $\times$ social-press; $N=N\_{\text{seed}}\times N\_{\text{run}}=2{,}152$).

#### 4.6.5 Social Network Growth

We replicated the network growth model ($N\_{\text{agent}}=300$) described in [De Marzo et al. (2023)](https://arxiv.org/html/2509.18052v4#bib.bib84).
In this setup, agents enter the network sequentially, each permitted to establish connections with up to three existing agents.
We executed $N\_{\text{run}}=5$ independent experimental runs, utilizing randomized name and profile initializations to ensure statistical robustness.
We introduced two fundamental modifications to the original protocol to address methodological artifacts:

- •

  Persona Heterogeneity (Profile):
  To mitigate the “name-bias” prevalent in baseline LLM behaviors—where agents disproportionately favor specific arbitrary identifiers—we assigned unique, diverse profiles to each agent, ensuring that social selection is driven by characteristics rather than linguistic heuristics.
- •

  Information Veridicality (Interaction):
  In the original simulations, agents are explicitly provided with the “degree” (number of existing connections) of all peers—an assumption of perfect information that lacks ecological validity.
  In our refined design, we mask explicit degree counts.
  Instead, each incoming agent chats with all existing members ($N\_{\text{turn}}=4$).
  These interactions are synthesized into a one-sentence “social impression” for each peer.
  Connection decisions are then made based solely on these qualitative impressions, allowing scale-free properties or other structures to emerge from decentralized social cues rather than explicit algorithmic instruction.

We estimated the power-law exponent ($\alpha$) by maximum likelihood, choosing the lower cutoff $k\_{\min}$ to minimize the Kolmogorov-Smirnov (KS) distance between the empirical and fitted cumulative distributions above the cutoff ([Clauset et al., 2009](https://arxiv.org/html/2509.18052v4#bib.bib26)).
Goodness of fit was assessed with a parametric bootstrap KS test based on 1,000 synthetic datasets, and we report the KS statistic ($D\_{\text{KS}}$) and the bootstrap $P$ value $P\_{\text{boot}}$.
Following convention, we did not reject the power-law tail when $P\_{\text{boot}}>0.10$.

## Acknowledgments

This material is based upon work supported by the Defense Advanced Research Projects Agency (DARPA) under Agreement No. HR00112490410.
The funders had no role in study design, data collection and analysis, decision to publish or preparation of the manuscript.

## Author Contributions

J.-T.H., J.Z., X.Z., H.Z. initialized the idea.
J.-T.H. and J.Z. developed the principles; X.Z. and W.W. checked and agreed with the principles.
J.-T.H. and J.Z. designed the reproduction experiments.
J.Z. did the reproduction experiments.
J.Z. did the systematic review.
J.-T.H. and J.Z. served as human annotators in the systematic review.
J.-T.H., J.Z., X.Z., and M.S. analyzed the results.
J.-T.H. and J.Z. wrote the main manuscript text.
J.-T.H. and J.Z. prepared the figures and tables.
J.Z. prepared the code and supplementary information.
J.-T.H., J.Z., X.Z., M.H.L., X.W., H.Z., W.W., and M.S. reviewed the manuscript.

## Competing Interests

The authors declare no competing interests.

## References

- Adair (1984)
  J. G. Adair
  The hawthorne effect: a reconsideration of the methodological artifact..
  Journal of applied psychology 69 (2), pp. 334.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Agashe et al. (2025)
  S. Agashe, Y. Fan, A. Reyna, and X. E. Wang
  LLM-coordination: evaluating and analyzing multi-agent coordination abilities in large language models.
  In Findings of the Association for Computational Linguistics: NAACL 2025,
  pp. 8038–8057.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Anthis et al. (2025)
  J. R. Anthis, R. Liu, S. M. Richardson, A. C. Kozlowski, B. Koch, E. Brynjolfsson, J. Evans, and M. S. Bernstein
  Position: llm social simulations are a promising research method.
  In Forty-second International Conference on Machine Learning Position Paper Track,
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Anthropic (2026a)
  Anthropic
  Introducing Claude Sonnet 4.6.
  Note: Anthropic Blog, Feb 17, 2026. <https://www.anthropic.com/news/claude-sonnet-4-6>
  External Links: [Link](https://www.anthropic.com/news/claude-sonnet-4-6)
  Cited by: [§4.3](https://arxiv.org/html/2509.18052v4#S4.SS3.p4.1 "4.3 Systematic Review: Searching and Screening ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Anthropic (2026b)
  Anthropic
  Introducing Claude Sonnet 5.
  Note: Anthropic Blog, Jun 30, 2026. <https://www.anthropic.com/news/claude-sonnet-5>
  External Links: [Link](https://www.anthropic.com/news/claude-sonnet-5)
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Balepur et al. (2024)
  N. Balepur, A. Ravichander, and R. Rudinger
  Artifacts or abduction: how do llms answer multiple-choice questions without the question?.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 10308–10330.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Barabási and Albert (1999)
  A. Barabási and R. Albert
  Emergence of scaling in random networks.
  science 286 (5439), pp. 509–512.
  Cited by: [§2.3.5](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS5.p1.1 "2.3.5 Social Network Growth ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Barrie and Törnberg (2025)
  C. Barrie and P. Törnberg
  Emergent llm behaviors are observationally equivalent to data leakage.
  arXiv preprint arXiv:2505.23796.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Borah et al. (2025)
  A. Borah, M. Houalla, and R. Mihalcea
  Mind the (belief) gap: group identity in the world of llms.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 18441–18463.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p13.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Carter and Irons (1991)
  J. R. Carter and M. D. Irons
  Are economists different, and if so, why?.
  Journal of Economic Perspectives 5 (2), pp. 171–177.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Cau et al. (2025)
  E. Cau, V. Pansanella, D. Pedreschi, and G. Rossetti
  Selective agreement, not sycophancy: investigating opinion dynamics in llm interactions.
  EPJ Data Science 14 (1), pp. 59.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p11.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Chen et al. (2024)
  J. Chen, X. Wang, R. Xu, S. Yuan, Y. Zhang, W. Shi, J. Xie, S. Li, R. Yang, T. Zhu, et al.
  From persona to personalization: a survey on role-playing language agents.
  Transactions on Machine Learning Research.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Cheng et al. (2025)
  M. Cheng, S. Yu, C. Lee, P. Khadpe, L. Ibrahim, and D. Jurafsky
  Social sycophancy: a broader understanding of llm sycophancy.
  arXiv preprint arXiv:2505.13995.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Cho et al. (2025)
  Y. Cho, S. C. Guntuku, and L. Ungar
  Herd behavior: investigating peer influence in llm-based multi-agent systems.
  arXiv preprint arXiv:2505.21588.
  Cited by: [Table 10](https://arxiv.org/html/2509.18052v4#A4.T10.2.1.6.1.1.1 "In Appendix D Claims from the Reproduced Studies ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.4](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS4.p1.1 "2.3.4 The Herd (Bandwagon) Effect ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3](https://arxiv.org/html/2509.18052v4#S2.SS3.p1.1 "2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6](https://arxiv.org/html/2509.18052v4#S4.SS6.p2.1 "4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Cisneros-Velarde (2024)
  P. Cisneros-Velarde
  Large language models can achieve social balance.
  arXiv preprint arXiv:2410.04054.
  Cited by: [Table 10](https://arxiv.org/html/2509.18052v4#A4.T10.2.1.4.1.1.1 "In Appendix D Claims from the Reproduced Studies ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p13.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.2](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS2.p1.1 "2.3.2 Social Balance Theory ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3](https://arxiv.org/html/2509.18052v4#S2.SS3.p1.1 "2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6](https://arxiv.org/html/2509.18052v4#S4.SS6.p2.1 "4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Clauset et al. (2009)
  A. Clauset, C. R. Shalizi, and M. E. Newman
  Power-law distributions in empirical data.
  SIAM review 51 (4), pp. 661–703.
  Cited by: [§4.6.5](https://arxiv.org/html/2509.18052v4#S4.SS6.SSS5.p1.2 "4.6.5 Social Network Growth ‣ 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Davis (1967)
  J. A. Davis
  Clustering and structural balance in graphs.
  Human relations 20 (2), pp. 181–187.
  Cited by: [§2.3.2](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS2.p1.1 "2.3.2 Social Balance Theory ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- De Marzo et al. (2023)
  G. De Marzo, L. Pietronero, and D. Garcia
  Emergence of scale-free networks in social interactions among large language models.
  arXiv preprint arXiv:2312.06619.
  Cited by: [Table 10](https://arxiv.org/html/2509.18052v4#A4.T10.2.1.7.1.1.1 "In Appendix D Claims from the Reproduced Studies ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p13.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.5](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS5.p1.1 "2.3.5 Social Network Growth ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.5](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS5.p2.1 "2.3.5 Social Network Growth ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3](https://arxiv.org/html/2509.18052v4#S2.SS3.p1.1 "2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6.5](https://arxiv.org/html/2509.18052v4#S4.SS6.SSS5.p1.1 "4.6.5 Social Network Growth ‣ 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6](https://arxiv.org/html/2509.18052v4#S4.SS6.p2.1 "4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- DeepSeek-AI et al. (2026)
  DeepSeek-AI, A. Xu, B. Lin, B. Xue, B. Wang, B. Xu, B. Wu, B. Zhang, et al.
  DeepSeek-V4: towards highly efficient million-token context intelligence.
  arXiv preprint arXiv:2606.19348.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Doshi (2026)
  T. Doshi
  Gemini 3.7 Flash: our most intelligent workhorse model.
  Note: Google Blog, Aug 13, 2026. <https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/>
  External Links: [Link](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Epstein and Axtell (1996)
  J. M. Epstein and R. Axtell
  Growing artificial societies: social science from the bottom up.
   Brookings Institution Press.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p13.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Fanous et al. (2025)
  A. Fanous, J. Goldberg, A. Agarwal, J. Lin, A. Zhou, S. Xu, V. Bikia, R. Daneshjou, and S. Koyejo
  Syceval: evaluating llm sycophancy.
  Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society 8 (1), pp. 893–900.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Gao et al. (2021)
  T. Gao, X. Yao, and D. Chen
  SimCSE: simple contrastive learning of sentence embeddings.
  In Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing,
  pp. 6894–6910.
  Cited by: [§4.6.3](https://arxiv.org/html/2509.18052v4#S4.SS6.SSS3.p2.2 "4.6.3 Telephone Game (Rumor Chain Effect) ‣ 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Göttlich et al. (2025)
  D. Göttlich, D. Loibner, G. Jiang, and H. Voth
  History llms.
  Note: University of Zurich and Cologne University
  External Links: [Link](https://github.com/DGoettlich/history-llms)
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px3.p1.1 "Limitations. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Grimm (2010)
  P. Grimm
  Social desirability bias.
  Wiley international encyclopedia of marketing.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Hegazy (2024)
  M. Hegazy
  Diversity of thought elicits stronger reasoning capabilities in multi-agent debate frameworks.
  International Journal of Computer Science and Mobile Applications 12 (10).
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Heider (1946)
  F. Heider
  Attitudes and cognitive organization.
  The Journal of psychology 21 (1), pp. 107–112.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p13.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.2](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS2.p1.1 "2.3.2 Social Balance Theory ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Hirst and Echterhoff (2012)
  W. Hirst and G. Echterhoff
  Remembering in conversations: the social sharing and reshaping of memories.
  Annual review of psychology 63 (1), pp. 55–79.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p7.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Huang et al. (2024a)
  J. Huang, M. H. Lam, E. J. Li, S. Ren, W. Wang, W. Jiao, Z. Tu, and M. R. Lyu
  Apathetic or empathetic? evaluating llms’ emotional alignments with humans.
  Advances in Neural Information Processing Systems 37, pp. 97053–97087.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Huang et al. (2025a)
  J. Huang, E. J. Li, M. H. Lam, T. Liang, W. Wang, Y. Yuan, W. Jiao, X. Wang, Z. Tu, and M. Lyu
  Competing large language models in multi-agent gaming environments.
  In The Thirteenth International Conference on Learning Representations,
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Huang et al. (2026)
  J. Huang, J. Qin, X. Qiu, S. Levy, M. R. Kaufman, and M. Dredze
  Knowing but not doing: convergent morality and divergent action in llms.
  arXiv preprint arXiv:2601.07972.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Huang et al. (2024b)
  J. Huang, W. Wang, E. J. Li, M. H. Lam, S. Ren, Y. Yuan, W. Jiao, Z. Tu, and M. Lyu
  On the humanity of conversational ai: evaluating the psychological portrayal of llms.
  In The Twelfth International Conference on Learning Representations,
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Huang et al. (2025b)
  J. Huang, J. Zhou, T. Jin, X. Zhou, Z. Chen, W. Wang, Y. Yuan, M. Lyu, and M. Sap
  On the resilience of llm-based multi-agent collaboration with faulty agents.
  In Forty-second International Conference on Machine Learning,
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- John et al. (1991)
  O. P. John, E. M. Donahue, and R. L. Kentle
  Big five inventory.
  Journal of personality and social psychology.
  Cited by: [item 1](https://arxiv.org/html/2509.18052v4#S4.I2.i1.p1.1 "In 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Kavukcuoglu et al. (2026)
  K. Kavukcuoglu, J. Dean, O. Vinyals, and N. Shazeer
  Gemini 3.5: frontier intelligence with action.
  Note: Google Blog, May 19, 2026. <https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/>
  External Links: [Link](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
  Cited by: [§4.3](https://arxiv.org/html/2509.18052v4#S4.SS3.p4.1 "4.3 Systematic Review: Searching and Screening ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Larooij and Törnberg (2025)
  M. Larooij and P. Törnberg
  Do large language models solve the problems of agent-based modeling? a critical review of generative social simulations.
  arXiv preprint arXiv:2504.03274.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p13.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Lee et al. (2024)
  S. Lee, K. Yang, T. Peng, R. Heo, and H. Liu
  Exploring social desirability response bias in large language models: evidence from gpt-4 simulations.
  arXiv preprint arXiv:2410.15442.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Levine et al. (2026)
  N. Levine, D. Duvenaud, and A. Radford
  Introducing talkie: a 13b vintage language model from 1930.
  External Links: [Link](https://talkie-lm.com/introducing-talkie)
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px3.p1.1 "Limitations. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Lewin et al. (2018)
  S. Lewin, A. Booth, C. Glenton, H. Munthe-Kaas, A. Rashidian, M. Wainwright, M. A. Bohren, Ö. Tunçalp, C. J. Colvin, R. Garside, et al.
  Applying grade-cerqual to qualitative evidence synthesis findings: introduction to the series.
  Implementation Science 13 (Suppl 1), pp. 2.
  Cited by: [§4.5](https://arxiv.org/html/2509.18052v4#S4.SS5.p2.1 "4.5 Systematic Review: Result Aggregation ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Li et al. (2025a)
  W. Li, X. Wang, S. Yuan, R. Xu, J. Chen, Q. Dong, Y. Xiao, and D. Yang
  Curse of knowledge: when complex evaluation context benefits yet biases llm judges.
  arXiv preprint arXiv:2509.03419.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Li et al. (2025b)
  W. Li, J. Liu, A. Liu, X. Zhou, M. Diab, and M. Sap
  Big5-chat: shaping llm personalities through training on human-grounded data.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 20434–20471.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Li et al. (2025c)
  Y. Li, Y. Luo, X. Xie, and Y. Zhang
  Task calibration: calibrating large language models on inference tasks.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 6937–6951.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Liu et al. (2025)
  X. Liu, J. Zhang, H. Shang, S. Guo, C. Yang, and Q. Zhu
  Exploring prosocial irrationality for llm agents: a social cognition view.
  In The Thirteenth International Conference on Learning Representations,
  Vol. 2025, pp. 41089–41118.
  Cited by: [Table 10](https://arxiv.org/html/2509.18052v4#A4.T10.2.1.5.1.1.1 "In Appendix D Claims from the Reproduced Studies ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p7.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.3](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS3.p1.1 "2.3.3 Telephone Game (Rumor Chain Effect) ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3](https://arxiv.org/html/2509.18052v4#S2.SS3.p1.1 "2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6.3](https://arxiv.org/html/2509.18052v4#S4.SS6.SSS3.p1.1 "4.6.3 Telephone Game (Rumor Chain Effect) ‣ 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6](https://arxiv.org/html/2509.18052v4#S4.SS6.p2.1 "4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Liu et al. (2024)
  Y. Liu, X. Chen, X. Zhang, X. Gao, J. Zhang, and R. Yan
  From skepticism to acceptance: simulating the attitude dynamics toward fake news.
  In Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence,
  pp. 7886–7894.
  Cited by: [Table 10](https://arxiv.org/html/2509.18052v4#A4.T10.2.1.2.1.1.1 "In Appendix D Claims from the Reproduced Studies ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p9.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3.1](https://arxiv.org/html/2509.18052v4#S2.SS3.SSS1.p1.1 "2.3.1 Belief Convergence in Fake News Propagation ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§2.3](https://arxiv.org/html/2509.18052v4#S2.SS3.p1.1 "2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4.6](https://arxiv.org/html/2509.18052v4#S4.SS6.p2.1 "4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Luo et al. (2026)
  X. Luo, Z. Shinnick, N. Griesshaber, Y. Wang, J. Yu, F. Shi, P. Torr, and Y. Lu
  Pretraining language models on historical text.
  arXiv preprint arXiv:2606.02991.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px3.p1.1 "Limitations. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Masumori and Ikegami (2025)
  A. Masumori and T. Ikegami
  Do large language model agents exhibit a survival instinct? an empirical study in a sugarscape-style simulation.
  arXiv preprint arXiv:2508.12920.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p11.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Mayo (2004)
  E. Mayo
  The human problems of an industrial civilization.
   Routledge.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- McCoy et al. (2019)
  R. T. McCoy, E. Pavlick, and T. Linzen
  Right for the wrong reasons: diagnosing syntactic heuristics in natural language inference.
  In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics,
  pp. 3428–3448.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Mou et al. (2024)
  X. Mou, Z. Wei, and X. Huang
  Unveiling the truth and facilitating change: towards agent-based large-scale social movement simulation.
  In Findings of the Association for Computational Linguistics: ACL 2024,
  pp. 4789–4809.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Nederhof (1985)
  A. J. Nederhof
  Methods of coping with social desirability bias: a review.
  European journal of social psychology 15 (3), pp. 263–280.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Needham et al. (2025)
  J. Needham, G. Edkins, G. Pimpale, H. Bartsch, and M. Hobbhahn
  Large language models often know when they are being evaluated.
  arXiv preprint arXiv:2505.23836.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Ng et al. (2026)
  L. H. X. Ng, I. J. Cruickshank, A. X. W. Lim, and K. M. Carley
  Social theory should be a structural prior for agentic ai: a formal framework for multi-agent social systems.
  arXiv preprint arXiv:2605.07069.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Nguyen et al. (2025)
  J. Nguyen, K. Hoang, C. L. Attubato, and F. Hofstätter
  Probing evaluation awareness of language models.
  arXiv preprint arXiv:2507.01786.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- OpenAI (2026a)
  OpenAI
  GPT-5.6: frontier intelligence that scales with your ambition.
  Note: OpenAI Blog, Jul 9, 2026. <https://openai.com/index/gpt-5-6/>
  External Links: [Link](https://openai.com/index/gpt-5-6/)
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- OpenAI (2026b)
  OpenAI
  Introducing GPT-5.5.
  Note: OpenAI Blog, Apr 23, 2026. <https://openai.com/index/introducing-gpt-5-5/>
  External Links: [Link](https://openai.com/index/introducing-gpt-5-5/)
  Cited by: [§4.3](https://arxiv.org/html/2509.18052v4#S4.SS3.p4.1 "4.3 Systematic Review: Searching and Screening ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Orne (1959)
  M. T. Orne
  The nature of hypnosis: artifact and essence..
  The Journal of abnormal and social Psychology 58 (3), pp. 277.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Orne (2017)
  M. T. Orne
  On the social psychology of the psychological experiment: with particular reference to demand characteristics and their implications.
  In Sociological methods,
  pp. 279–299.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Page et al. (2021)
  M. J. Page, J. E. McKenzie, P. M. Bossuyt, I. Boutron, T. C. Hoffmann, C. D. Mulrow, L. Shamseer, J. M. Tetzlaff, E. A. Akl, S. E. Brennan, et al.
  The prisma 2020 statement: an updated guideline for reporting systematic reviews.
  bmj 372.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px1.p1.1 "Prevalence of Methodological Vulnerabilities. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§4](https://arxiv.org/html/2509.18052v4#S4.p1.1 "4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [item 2](https://arxiv.org/html/2509.18052v4#S4.I2.i2.p1.1 "In 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Perez et al. (2025)
  J. Perez, G. Kovač, C. Léger, C. Colas, G. Molinaro, M. Derex, P. Oudeyer, and C. Moulin-Frier
  When llms play the telephone game: cultural attractors as conceptual tools to evaluate llms in multi-turn settings.
  In The Thirteenth International Conference on Learning Representations,
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p7.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Pitre et al. (2025)
  P. Pitre, N. Ramakrishnan, and X. Wang
  CONSENSAGENT: towards efficient and effective consensus in multi-agent llm interactions through sycophancy mitigation.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 22112–22133.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Qwen Team (2026)
  Qwen Team
  Qwen3.8-Max: a new bar for coding and cowork.
  Note: Qwen Blog, Aug 3, 2026. <https://qwen.ai/blog?id=qwen3.8>
  External Links: [Link](https://qwen.ai/blog?id=qwen3.8)
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Ran et al. (2025)
  Y. Ran, X. Wang, T. Qiu, J. Liang, Y. Xiao, and D. Yang
  BookWorld: from novels to interactive agent societies for creative story generation.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 15898–15912.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p5.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Reid et al. (2025)
  A. Reid, S. O’Callaghan, L. Carroll, and T. Caetano
  Risk analysis techniques for governed llm-based multi-agent systems.
  arXiv preprint arXiv:2508.05687.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Rein et al. (2024)
  D. Rein, B. L. Hou, A. C. Stickland, J. Petty, R. Y. Pang, J. Dirani, J. Michael, and S. R. Bowman
  Gpqa: a graduate-level google-proof q&a benchmark.
  In First Conference on Language Modeling,
  Cited by: [§4.6.4](https://arxiv.org/html/2509.18052v4#S4.SS6.SSS4.p1.1 "4.6.4 The Herd (Bandwagon) Effect ‣ 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Roethlisberger and Dickson (2003)
  F. J. Roethlisberger and W. J. Dickson
  Management and the worker.
  Vol. 5, Psychology press.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Sahoo et al. (2024)
  P. Sahoo, A. K. Singh, S. Saha, V. Jain, S. Mondal, and A. Chadha
  A systematic survey of prompt engineering in large language models: techniques and applications.
  arXiv preprint arXiv:2402.07927.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p9.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Salecha et al. (2024)
  A. Salecha, M. E. Ireland, S. Subrahmanya, J. Sedoc, L. H. Ungar, and J. C. Eichstaedt
  Large language models display human-like social desirability biases in big five personality surveys.
  PNAS nexus 3 (12), pp. pgae533.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Sap et al. (2019)
  M. Sap, H. Rashkin, D. Chen, R. Le Bras, and Y. Choi
  Social iqa: commonsense reasoning about social interactions.
  In Proceedings of the 2019 conference on empirical methods in natural language processing and the 9th international joint conference on natural language processing (EMNLP-IJCNLP),
  pp. 4463–4473.
  Cited by: [§4.6.4](https://arxiv.org/html/2509.18052v4#S4.SS6.SSS4.p1.1 "4.6.4 The Herd (Bandwagon) Effect ‣ 4.6 The PIMMUR-Compliant Simulation Framework ‣ 4 Methods ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Schulhoff et al. (2024)
  S. Schulhoff, M. Ilie, N. Balepur, K. Kahadze, A. Liu, C. Si, Y. Li, A. Gupta, H. Han, S. Schulhoff, et al.
  The prompt report: a systematic survey of prompt engineering techniques.
  arXiv preprint arXiv:2406.06608.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p9.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Shao et al. (2025)
  R. Shao, S. S. Li, R. Xin, S. Geng, Y. Wang, S. Oh, S. S. Du, N. Lambert, S. Min, R. Krishna, et al.
  Spurious rewards: rethinking training signals in rlvr.
  arXiv preprint arXiv:2506.10947.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Shapira et al. (2024)
  N. Shapira, M. Levy, S. H. Alavi, X. Zhou, Y. Choi, Y. Goldberg, M. Sap, and V. Shwartz
  Clever hans or neural theory of mind? stress testing social reasoning in large language models.
  In Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 2257–2273.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies"),
  [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Shwartz et al. (2020)
  V. Shwartz, R. Rudinger, and O. Tafjord
  “You are grounded!”: latent name artifacts in pre-trained language models.
  In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP),
  pp. 6850–6861.
  Cited by: [1st item](https://arxiv.org/html/2509.18052v4#S2.I2.i1.p1.1 "In 2.3.5 Social Network Growth ‣ 2.3 Case Studies: The Vanishing Emergence ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Team et al. (2026)
  K. Team, T. Bai, Y. Bai, Y. Bao, J. Cai, X. Cai, P. Cao, et al.
  Kimi K3: open frontier intelligence.
  arXiv preprint arXiv:2607.24653.
  Cited by: [§2.2](https://arxiv.org/html/2509.18052v4#S2.SS2.SSS0.Px2.p1.1 "Quantifying Experimental Leakage: The Unawareness Test. ‣ 2.2 Systematic Audit of LLM Social Simulations ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Tran et al. (2025)
  K. Tran, D. Dao, M. Nguyen, Q. Pham, B. O’Sullivan, and H. D. Nguyen
  Multi-agent collaboration mechanisms: a survey of llms.
  arXiv preprint arXiv:2501.06322.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Ullman (2023)
  T. Ullman
  Large language models fail on trivial alterations to theory-of-mind tasks.
  arXiv preprint arXiv:2302.08399.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Wang et al. (2025a)
  Q. Wang, J. Wu, Z. Tang, B. Luo, N. Chen, W. Chen, and B. He
  What limits llm-based human simulation: llms or our design?.
  arXiv preprint arXiv:2501.08579.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p7.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Wang et al. (2025b)
  X. Wang, H. Wang, Y. Zhang, X. Yuan, R. Xu, J. Huang, S. Yuan, H. Guo, J. Chen, S. Zhou, et al.
  CoSER: coordinating llm-based persona simulation of established roles.
  In Forty-second International Conference on Machine Learning,
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Wang et al. (2024)
  X. Wang, Y. Xiao, J. Huang, S. Yuan, R. Xu, H. Guo, Q. Tu, Y. Fei, Z. Leng, W. Wang, et al.
  InCharacter: evaluating personality fidelity in role-playing agents through psychological interviews.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 1840–1873.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Watson et al. (2025)
  J. Watson, S. S. Lee, B. Beekhuizen, and S. Stevenson
  Do language models practice what they preach? examining language ideologies about gendered language reform encoded in llms.
  In Proceedings of the 31st International Conference on Computational Linguistics,
  pp. 1201–1223.
  Cited by: [§3](https://arxiv.org/html/2509.18052v4#S3.SS0.SSS0.Px1.p1.1 "Mechanisms of Synthetic Bias: From “Clever Hans” to Silicon Sycophancy. ‣ 3 Discussion ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Xiao et al. (2026)
  Y. Xiao, V. J. Zhang, C. Yang, N. Ma, W. Xuan, and J. Huang
  The chameleon’s limit: investigating persona collapse and homogenization in large language models.
  arXiv preprint arXiv:2604.24698.
  Cited by: [§2.1](https://arxiv.org/html/2509.18052v4#S2.SS1.p3.1 "2.1 Taxonomy of Methodological Flaws ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Yang et al. (2024)
  Z. Yang, Z. Zhang, Z. Zheng, Y. Jiang, Z. Gan, Z. Wang, Z. Ling, J. Chen, M. Ma, B. Dong, et al.
  Oasis: open agent social interaction simulations with one million agents.
  arXiv preprint arXiv:2411.11581.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Ye et al. (2026)
  J. Ye, L. Cao, D. Chen, and E. Ferrara
  Stop drawing scientific claims from llm social simulations without robustness audits.
  arXiv preprint arXiv:2605.18890.
  Cited by: [§2.4](https://arxiv.org/html/2509.18052v4#S2.SS4.SSS0.Px1.p1.1 "Robustness to Prompt Variations. ‣ 2.4 Robustness and Sensitivity Analysis ‣ 2 Results ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Zhang et al. (2024)
  J. Zhang, X. Xu, N. Zhang, R. Liu, B. Hooi, and S. Deng
  Exploring collaboration mechanisms for llm agents: a social psychology view.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 14544–14607.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Zhou et al. (2024)
  X. Zhou, Z. Su, T. Eisape, H. Kim, and M. Sap
  Is this the real life? is this just fantasy? the misleading success of simulating social interactions with llms.
  In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing,
  pp. 21692–21714.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p2.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").
- Zhou et al. (2025)
  X. Zhou, Z. Su, S. Feng, J. Zhou, J. Huang, H. Kao, S. Lynch, S. Volkova, T. Wu, A. Woolley, et al.
  SOTOPIA-s4: a user-friendly system for flexible, customizable, and large-scale social simulation.
  In Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (System Demonstrations),
  pp. 350–360.
  Cited by: [§1](https://arxiv.org/html/2509.18052v4#S1.p1.1 "1 Introduction ‣ The PIMMUR Principles: Ensuring Validity in Collective Behavior of LLM Societies").

Supplementary Information

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
  
# Used in Original implementation
  
As humans often exhibit confirmation bias, you should demonstrate a similar tendency. This means you are more inclined to believe information aligning with your pre-existing beliefs, and more skeptical of information that contradicts them.
  
# Our implementation omits this sentence
  
# Used in Reverse implementation
  
You are more inclined to believe information that contradicts your pre-existing beliefs, and more skeptical of information aligning with them.
  
Your responses will be formatted in JSON. Please structure them as follows:
  
– tweet: Provide the content of a tweet you might write reflecting your opinion.
  
– belief: Indicate your belief about the information, represented by ‘0’ for disbelief and ‘1’ for belief.
  
– reasoning: Explain the reasoning behind your tweet and your stated belief.

The following prompt replaces [query] in the previous prompt for the social balance simulation.

Query used in Social Balance

# Used in Original implementation
  
You have a [opinion] opinion of Individual j. Individual j has a [opinion] opinion of Individual k. You have a [opinion] opinion of Individual k. Will your new opinion of Individual j be negative or positive?
  
State the appraisal first, and then provide an explanation.
  
# Used in Our implementation
  
Now according to your opinion of other agents, reflect on your past chatting history, and write a new version of your opinion of other agents.
  
Do not add or delete names of agents.

The following prompt replaces [query] in the previous prompt for the telephone game simulation.

Query used in Telephone Game

# Used in Original implementation
  
You receive the following message: [message]. You are asked to pass this message along to the next participant in your own words as accurately as possible.
  
# Used in Our implementation
  
You receive the following message: [message]. You are asked to pass this message along to the next participant in your own words.
  
# Used in Reverse implementation
  
You receive the following message: [message]. You are asked to pass this message along to the next participant in your own words as inaccurately as possible.

The following prompt replaces [query] in the previous prompt for the herd effect simulation.

Query used in Herd Effect

# Used in Original implementation (other agents’ answer given explicitly)
  
Please answer the following question:
  
[question]
  
[choices]
  
Here are the answers of other agents:
  
Agent A thinks the answer is [r\_a].
  
Agent B thinks the answer is [r\_b].
  
…
  
Agent H thinks the answer is [r\_h].
  
Please output your answer.
  
# Used in Our implementation (other agents’ opinion expressed in previous conversations)
  
Please answer the following question:
  
[question]
  
[choices]
  
Please output your answer.

The following prompt replaces [query] in the previous prompt for the social network growth simulation.

Query used in Social Network Growth

# Used in Original implementation
  
You are tasked with connecting to exactly [m] individuals from the list below. Each user is accompanied by their current number of connections.
  
User Friends
  
A   [f\_a]
  
B   [f\_b]
  
…
  
  
# Used in Our implementation (impression is generated from previous interaction with other agents)
  
Here are your impression of each person you have met.
  
[impression]
  
Now, from the people you have met above, please select exactly [m] people from the list.

## Appendix B Taxonomy

Table 4: 
The taxonomy of simulation goals (category 1). $N$ is the number of simulations assigned to each category.

| Category | $N$ | Description | Examples |
| --- | --- | --- | --- |
| 1. Strategic Interaction and Social Dilemmas | 104 | Simulations in which agents face an explicit payoff structure and the object of study is how they resolve the tension between individual and collective interest. |  |
| 1.1 Cooperation, reciprocity, and trust | 29 | Dyadic and small-group mixed-motive interaction where the outcome of interest is whether cooperation emerges and is sustained. Covers one-shot, iterated, networked, and spatial Prisoner’s Dilemma; direct and indirect reciprocity; and trust, investment, and exchange games in which one party must rely on another’s good faith. | networked Prisoner’s Dilemma $\cdot$ indirect reciprocity with reputation $\cdot$ networked trust game $\cdot$ social exchange game $\cdot$ repeated Prisoner’s Dilemma with personality steering |
| 1.2 Public goods and common-pool resources | 28 | Group-scale dilemmas over a shared resource or shared contribution: voluntary contribution and free-riding, commons harvesting and depletion, and the governance arrangements (leadership, punishment, voting) that sustain them. Also collective-action problems with the same incentive structure outside the laboratory frame, such as strikes and voluntary protective behavior. | multi-agent Public Goods Game $\cdot$ Tragedy of the Commons $\cdot$ Amu Darya irrigation and fishing governance $\cdot$ gossip and ostracism in public goods $\cdot$ labor collective action |
| 1.3 Bargaining over division; ultimatum / dictator games | 16 | Distributive interaction over a fixed pie, where fairness, greed, and rejection of unfair offers are the measured quantities. Abstract game-theoretic framing, as distinct from contextual negotiation (see 3.1). | Ultimatum Game $\cdot$ single-shot Dictator Game $\cdot$ multi-player bargaining over chips $\cdot$ coalition game $\cdot$ divide-a-dollar |
| 1.4 Coordination games | 8 | Common-interest and congestion problems where agents must match or anti-match one another’s choices and conflict of interest is secondary or absent. | El Farol Bar problem $\cdot$ Battle of the Sexes $\cdot$ pub coordination $\cdot$ referential word guessing $\cdot$ bank-run coordination |
| 1.5 Social deduction and hidden-role games | 18 | Games in which roles are hidden and the core task is inferring who is who through discussion, voting, and strategic disclosure. | Werewolf $\cdot$ Avalon $\cdot$ Among Us $\cdot$ Mafia $\cdot$ Secret Hitler |
| 1.6 Zero-sum and pure-competition games | 5 | Strictly competitive games with no cooperative option, used to probe strategic depth, bluffing, and opponent modeling rather than any social dilemma. | multi-player Texas Hold’em $\cdot$ Kuhn Poker $\cdot$ Liar’s Dice $\cdot$ Nim $\cdot$ Tic-Tac-Toe |


Table 5: 
The taxonomy of simulation goals (category 2). $N$ is the number of simulations assigned to each category.

| Category | $N$ | Description | Examples |
| --- | --- | --- | --- |
| 2. Opinion and Information Dynamics | 196 | Simulations in which beliefs, attitudes, or information are the state variable, and the object of study is how they change and spread through a population. |  |
| 2.1 Opinion dynamics and attitude change | 57 | The trajectory of collective opinion: consensus, convergence, fragmentation, and pluralism. Spans abstract network-based opinion-update experiments, discussion- and debate-driven belief revision, and the evolution of public opinion around real-world events and policies. | networked LLM opinion dynamics $\cdot$ deliberative opinion dynamics $\cdot$ event-centric social media opinion evolution $\cdot$ vaccine hesitancy under policy interventions $\cdot$ non-Bayesian social learning |
| 2.2 Conformity and peer influence | 34 | Whether and when an individual abandons a private position under social pressure: majority influence, herding, spiral of silence, authority deference, and minority-versus-majority effects. | majority-vote conformity $\cdot$ herd effect on Reddit $\cdot$ sequential movie rating (spiral of silence) $\cdot$ peer-pressure quiz protocols $\cdot$ conformity to adversarial answer injection |
| 2.3 Polarization, echo chambers, and information cocoons | 35 | Structural divergence of a population into opposed or self-reinforcing clusters, including cases where algorithmic curation is the manipulated cause. | induced polarization $\cdot$ echo chamber formation with network rewiring $\cdot$ information cocoon formation under recommendation $\cdot$ algorithmic personalization and affective polarization |
| 2.4 Persuasion and debate | 18 | A persuader’s effect on a specific target’s stance, and the argumentative dynamics of dyadic or structured debate. Distinguished from 2.1 by measuring the persuasion outcome rather than the population’s opinion trajectory. | charitable donation persuasion $\cdot$ climate change persuasion dialogue $\cdot$ political debate attitude change $\cdot$ persuasive meat-reduction dialogue $\cdot$ adversarial legal argumentation |
| 2.5 Information diffusion and misinformation | 31 | The spread of content itself: cascades, rumor and fake-news propagation, coordinated influence operations, and the moderation and fact-checking interventions aimed at them. | fake news diffusion across network structures $\cdot$ coordinated disinformation spread $\cdot$ fact-checking strategies $\cdot$ serial transmission distortion $\cdot$ propaganda exposure and mitigation |
| 2.6 Network formation and influence structure | 21 | The emergence of the interaction graph itself: who connects to whom, and who becomes influential. | preferential attachment $\cdot$ triadic closure $\cdot$ homophily-driven tie formation $\cdot$ citation network evolution $\cdot$ influencer emergence $\cdot$ friendship paradox |


Table 6: 
The taxonomy of simulation goals (category 3). $N$ is the number of simulations assigned to each category.

| Category | $N$ | Description | Examples |
| --- | --- | --- | --- |
| 3. Interpersonal and Group Processes | 131 | Simulations in which the object of study is the process of interaction among a small number of identified actors, rather than a population-level pattern. |  |
| 3.1 Negotiation | 26 | Contextual, multi-issue or price negotiation embedded in a realistic scenario, including mediation and dispute resolution. Distinguished from 1.3 by having context, roles, and often multiple issues rather than an abstract fixed pie. | buyer–seller price negotiation $\cdot$ job offer negotiation $\cdot$ plea bargaining $\cdot$ multi-party negotiation with an AI mediator $\cdot$ civil dispute mediation |
| 3.2 Collaboration and division of labor | 22 | Joint execution of a shared task: coordination, delegation, role allocation, and the effect of team structure on collective performance. | collaborative office task solving $\cdot$ search-and-rescue mission $\cdot$ collaborative learning discussion $\cdot$ hierarchical team delegation $\cdot$ team assembly at a job fair |
| 3.3 Group deliberation and collective choice | 22 | Reaching a group decision through discussion, aggregation, or a formal voting mechanism. Covers both deliberative quality and choice mechanisms such as referenda and participatory budgeting. | civic deliberation $\cdot$ FOMC policy debate $\cdot$ participatory budgeting $\cdot$ transit policy referendum $\cdot$ stakeholder roundtable on urban planning |
| 3.4 Social norms, compliance, and sanctioning | 13 | Behavior relative to a norm that already exists: inferring it, complying with or violating it, and punishing violators. | implicit norm inference in group chat $\cdot$ classroom cheating under a late policy $\cdot$ costly second- and third-party punishment $\cdot$ cyberbullying bystander intervention $\cdot$ prosocial norm compliance |
| 3.5 Deception, manipulation, and trust violation | 19 | One party pursuing a hidden agenda at another’s expense: manipulative persuasion, adversarial influence over a decision-maker, opponent shaping, and fraud that erodes trust. | hidden-conflict hiring deliberation $\cdot$ impersonation for file access $\cdot$ broker steering for fees $\cdot$ red-team supervisory influence $\cdot$ Sybil-seller lemon market |
| 3.6 Emotion, relationships, and social support | 8 | Affective and relational processes: support provision, relationship formation and dissolution, and emotional contagion between individuals. | emotional support dialogue $\cdot$ speed dating chemistry $\cdot$ marital critical events $\cdot$ school bullying $\cdot$ empathetic dyadic dialogue |
| 3.7 Self-disclosure, identity, and status | 8 | Self-presentation in the Goffman sense: what an actor reveals, how they perform a role, and how status is signaled and contested. | organic privacy leakage on a social platform $\cdot$ elicited disclosure under adversarial pressure $\cdot$ non-monetary status signaling $\cdot$ workplace promotion competition $\cdot$ guard–prisoner role dynamics |
| 3.8 General goal-directed social interaction | 13 | Benchmarks in which two agents (or a small group) pursue assigned social goals across heterogeneous scenarios spanning negotiation, cooperation, competition, and persuasion. The measured outcome is goal achievement and interaction quality in general, not any one social phenomenon. | Sotopia dyadic social role-play $\cdot$ situational conversation benchmark |


Table 7: 
The taxonomy of simulation goals (category 4). $N$ is the number of simulations assigned to each category.

| Category | $N$ | Description | Examples |
| --- | --- | --- | --- |
| 4. Collective Behavior and Macro-level Emergence | 96 | Simulations in which macro pattern itself is the object of study. |  |
| 4.1 Market and price emergence | 33 | Aggregate economic outcomes arising from decentralized decisions: price formation, market stylized facts, financial contagion, and macroeconomic regularities. Also includes population-scale behavioral responses to economic policy and shocks. | LLM-based artificial stock market $\cdot$ Bertrand and Cournot competition $\cdot$ bank-run contagion $\cdot$ urban macroeconomic simulation $\cdot$ auction price formation $\cdot$ UBI and consumption-voucher policy response |
| 4.2 Crowd movement and spatial distribution | 10 | Aggregate patterns in space: mobility flows, gathering and crowding, segregation, and spatial concentration. | urban daily activity and income segregation $\cdot$ food court crowding and queueing $\cdot$ crime hotspot formation $\cdot$ spatial layout effects on occupant behavior |
| 4.3 Evacuation and collective behavior under crisis | 16 | Population behavior under acute or sustained threat: evacuation, protective and adaptive action, and displacement. | shopping mall fire evacuation $\cdot$ active shooter incident response $\cdot$ hurricane mobility response $\cdot$ household flood adaptation $\cdot$ post-earthquake displacement and return |
| 4.4 Emergence of norms, institutions, and culture | 27 | The endogenous appearance of shared regularities: conventions, norms and metanorms, governance arrangements and institutional turnover, cultural transmission, and emergent coded language. Also holds aggregate electoral outcome prediction, where individual preferences are summed into a population-level result. | Norms Game with punishment and metanorms $\cdot$ workplace attire norm diffusion $\cdot$ collaborative law-making $\cdot$ Hobbesian social contract $\cdot$ cultural transmission chains $\cdot$ covert language evolving to evade moderation $\cdot$ U.S. presidential election outcome simulation |
| 4.5 Open-ended agent societies | 10 | Persistent sandbox societies run to observe whatever emerges, without a single pre-specified target phenomenon. The society, rather than any particular mechanism, is the object of interest. | Smallville sandbox society $\cdot$ Agentopia long-term life simulation $\cdot$ Moltbook autonomous agent network $\cdot$ school / workplace / family context sandboxes |


Table 8: 
The taxonomy of simulation goals (category 5). $N$ is the number of simulations assigned to each category.

| Category | $N$ | Description | Examples |
| --- | --- | --- | --- |
| 5. Social Cognition | 49 | Settings in which the object of study is the agent’s own cognition, judgment, or psychological profile rather than an interactional or collective outcome. |  |
| 5.1 Cognitive bias in social contexts | 18 | Systematic distortions of judgment, whether induced by social interaction or measured as canonical decision biases. | socially induced collective false memory $\cdot$ anchoring across sequential specialist encounters $\cdot$ authority and halo effects $\cdot$ peer review bias $\cdot$ framing, loss aversion, gambler’s fallacy |
| 5.2 Stereotypes and social bias | 6 | Group-based bias in judgment and attribution, including its emergence and amplification through multi-agent communication. | workplace occupational stereotype emergence $\cdot$ implicit gender bias in task assignment $\cdot$ stereotypical bias propagation in multi-agent systems |
| 5.3 Individual-level psychology and behavioral realism | 25 | Two related measurement goals that share the property of having no social phenomenon as their target: (a) non-interactive psychometric and decision probes of a single agent, and (b) validation of whether generated behavior is human-like, benchmarked against human data. | Psychological scales $\cdot$ WVS value survey $\cdot$ daily behavior realism $\cdot$ social media engagement-reaction validation $\cdot$ persona consistency in open dialogue |

## Appendix C Pilot Review: Papers and Annotations

Table 9: 39 papers selected in the pilot review about LLM-based MASS of different human social behaviors. We used this set to develop the PIMMUR principles. The columns with check or cross marks are human labels from two annotators, except Unawareness whose definition is to directly ask LLMs, where we queried five earlier models: GPT-4o, Claude-4, Gemini-2.5, LLaMA-4, and Qwen3.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Title | Venue | P. | I. | Mem. | Min.-Ctrl. | U. | R. |
| When LLMs Play the Telephone Game: Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings | ICLR 2025 | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Exploring Prosocial Irrationality for LLM Agents: A Social Cognition View | ICLR 2025 | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Do as We Do, Not as You Think: The Conformity of Large Language Models | ICLR 2025 | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| Large Language Models can Achieve Social Balance | arXiv 2024 | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| Emergence of Scale-Free Networks in Social Interactions among Large Language Models | arXiv 2023 | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ |
| The Power of Stories: Narrative Priming Shapes How LLM Agents Collaborate and Compete | arXiv 2025 | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ |
| Herd Behavior: Investigating Peer Influence in LLM-based Multi-Agent Systems | arXiv 2025 | ✓ | ✗ | ✗ | ✓ | ✗ | ✗ |
| Large Language Model-driven Multi-Agent Simulation for Fake News Diffusion Under Different Network Structures | Computational Communication Research 2026 | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ |
| Mind the (Belief) Gap: Group Identity in the World of LLMs | ACL Findings 2025 | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ |
| Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs | ICML 2026 | ✗ | ✓ | ✗ | ✓ | ✗ | ✗ |
| YuLan-OneSim: Towards the Next Generation of Social Simulator with Large Language Models | arXiv 2025 | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ |
| Evolution of Social Norms in LLM Agents Using Natural Language | arXiv 2024 | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ |
| MetaAgents: Large Language Model Based Agents for Decision-Making on Teaming | PACM HCI 2025 | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ |
| AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding of Human Behaviors and Society | iFuture 2026 | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ |
| The Wisdom of Partisan Crowds: Comparing Collective Intelligence in Humans and LLM-based Agents | CogSci 2024 | ✓ | ✗ | ✓ | ✓ | ✗ | ✗ |
| Network Formation and Dynamics among Multi-LLMs | PNAS Nexus 2025 | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ |
| Exploring Collaboration Mechanisms for LLM Agents: A Social Psychology View | ACL 2024 | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ |
| Emergent Social Conventions and Collective Bias in LLM Populations | Science Advances 2025 | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Selective Agreement, Not Sycophancy: Investigating Opinion Dynamics in LLM Interactions | EPJ Data Science 2025 | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ |
| LLMs Can’t Handle Peer Pressure: Crumbling under Multi-Agent Social Interactions | arXiv 2025 | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ |
| From Skepticism to Acceptance: Simulating the Attitude Dynamics Toward Fake News | IJCAI 2024 | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| AgentSense: Benchmarking Social Intelligence of Language Agents through Interactive Scenarios | NAACL 2025 | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| Simulating Rumor Spreading in Social Networks Using LLM Agents | arXiv 2025 | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| Emergence of Social Norms in Generative Agent Societies: Principles and Architecture | IJCAI 2024 | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| Can A Society of Generative Agents Simulate Human Behavior and Inform Public Health Policy? A Case Study on Vaccine Hesitancy | COLM 2025 | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ |
| TwinMarket: A Scalable Behavioral and Social Simulation for Financial Markets | NeurIPS 2025 | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ |
| ElectionSim: Massive Population Election Simulation Powered by Large Language Model Driven Agents | arXiv 2024 | ✓ | ✗ | ✓ | ✓ | ✗ | ✓ |
| Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents | NeurIPS 2024 | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ |
| Unveiling the Truth and Facilitating Change: Towards Agent-based Large-scale Social Movement Simulation | ACL Findings 2024 | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ |
| The Stepwise Deception: Simulating the Evolution from True News to Fake News with LLM Agents | EMNLP 2025 | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ |
| Emergence of Human-like Polarization among Large Language Model Agents | arXiv 2025 | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ |
| A Simulation System Towards Solving Societal-Scale Manipulation | arXiv 2024 | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ |
| Can Large Language Model Agents Simulate Human Trust Behavior? | NeurIPS 2024 | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ |
| Large Language Model Driven Agents for Simulating Echo Chamber Formation | arXiv 2025 | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Shall We Team Up: Exploring Spontaneous Cooperation of Competing LLM Agents | EMNLP Findings 2024 | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Generative Agents: Interactive Simulacra of Human Behavior | UIST 2023 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| MOSAIC: Modeling Social AI for Content Dissemination and Regulation in Multi-Agent Simulations | EMNLP 2025 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| OASIS: Open Agent Social Interaction Simulations with One Million Agents | arXiv 2024 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| TrendSim: Simulating Trending Topics in Social Media Under Poisoning Attacks with LLM-based Multi-agent System | NAACL Findings 2025 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Compliance Rate | | 66.7 | 66.7 | 64.1 | 48.7 | 48.7 | 48.7 |

## Appendix D Claims from the Reproduced Studies

Table 10: 
Claims of emergent or human-consistent collective behavior in the five reproduced studies. Page numbers refer to the publicly available versions of the papers.

|  |  |  |  |
| --- | --- | --- | --- |
| Study | Section | Page | Sentence |
| Fake News Propagation ([Liu et al., 2024](https://arxiv.org/html/2509.18052v4#bib.bib76)) | Abstract | 1 | “Our simulation results uncover patterns in fake news propagation related to topic relevance, and individual traits, aligning with real-world observations.” |
|  | Introduction | 2 | “Second, our experiments align closely with conclusions drawn from real-world studies.” |
| Social Balance ([Cisneros-Velarde, 2024](https://arxiv.org/html/2509.18052v4#bib.bib83)) | Further Discussion and Motivation | 14 | “The fact that social balance emerges from the evolution of interactions is remarkable—when running our experiments there was no guarantee that social balance would emerge.” |
| Telephone Game ([Liu et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib75)) | Discussion & Limitation | 10 | “The performance of the LLM Agents is highly consistent with human beings across prosociality-related irrational decision-making processes …LLM Agents show significant deviations in irrational decision-making processes unrelated to prosociality …” |
| Herd Behavior ([Cho et al., 2025](https://arxiv.org/html/2509.18052v4#bib.bib85)) | Discussion | 8 | “Our findings reveal a nuanced picture of how herding emerges in multi-agent decision-making and the factors that modulate its intensity.” |
| Social Network Growth ([De Marzo et al., 2023](https://arxiv.org/html/2509.18052v4#bib.bib84)) | Title | 1 | “Emergence of Scale-Free Networks in Social Interactions among Large Language Models” |
|  | Abstract | 1 | “…we demonstrate their ability to not only mimic individual human linguistic behavior but also exhibit collective phenomena intrinsic to human societies …” |
|  | Result | 4 | “Our findings suggest that generative agents, akin to humans in online interaction, tend to spontaneously form scale-free networks.” |

## Appendix E GRADE-CERQual Evidence Profile

Table 11: 
GRADE-CERQual evidence profile for the review findings. Each finding is rated for methodological limitations, coherence, adequacy, and relevance, which are combined into an overall assessment of confidence in the evidence.

| Finding | Contributing studies | Method. limit. | Cohe- rence | Ade- quacy | Rele- vance | Overall conf. | Explanation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profile: Most reviewed simulations incorporated some form of agent profiling, although profile design was less consistently implemented in social cognition settings. | All simulations with a non-missing Profile assessment | Minor | Minor | Minor | Minor | High | Profile characteristics were extracted using predefined categorical fields, making misclassification relatively unlikely; the finding was also consistent across most simulation categories. |
| Interaction: Inter-agent interaction was consistently implemented across the reviewed simulations. | All simulations with a non-missing Interaction assessment | Minor | Minor | Minor | Minor | High | The pattern was highly consistent across simulation goals, with little ambiguity in whether agent outputs influenced other agents. |
| Memory: Most simulations maintained some form of temporal statefulness or memory across interactions, although the use of memory varied across simulation goals. | All simulations with a non-missing Memory assessment | Minor | Minor | Minor | Minor | High | Memory was assessed using predefined indicators of temporal statefulness and memory mechanism. Although implementation details varied across studies, the overall pattern was consistent across the evidence base. |
| Minimal-Control: Researcher-imposed behavioral guidance or steering was common across the reviewed simulations, indicating frequent concerns regarding Minimal-Control. | All simulations with disclosed prompts | Minor | Moderate | Minor | Moderate | Moderate | Confidence was reduced because judgments about behavioral steering can be subjective. LLM-assisted reviewers were generally stricter than human reviewers, creating some uncertainty around borderline prompts despite consistent evidence of steering across studies. |
| Unawareness: LLMs can often infer the underlying experimental intent or targeted social phenomenon from the simulation prompts. | All simulations with disclosed prompts | Minor | Minor | Minor | Minor | High | Experimental awareness was assessed using multiple LLMs and required models to identify both the experimental setting and the expected social phenomenon. Results were broadly consistent across models, reducing the likelihood that the finding was driven by a single model. |
| Realism: Many simulations lacked direct grounding in empirical human data or real-world benchmarks when making claims about social behavior. | All simulations with a non-missing Realism assessment | Minor | Minor | Minor | Moderate | High | Reference type was extracted using predefined categories, but some studies focused on LLM society behavior rather than direct human simulation, reducing the relevance of the finding to claims about human social realism. |
| Overall (PIM vs. MUR): The Profile, Interaction, and Memory principles were generally satisfied more consistently than Minimal-Control, Unawareness, and Realism, suggesting that current MASS studies more often address agent construction and interaction design than safeguards against experimental steering, hypothesis leakage, and insufficient empirical grounding. | All included simulations | Minor | Minor | Minor | Minor | High | The difference between PIM and MUR compliance was observed consistently across simulation categories and was supported by the component-level assessments, with no single simulation goal driving the overall pattern. |
