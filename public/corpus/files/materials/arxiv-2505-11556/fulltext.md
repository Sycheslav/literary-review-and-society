---
id: arxiv-2505-11556-text
type: material
title: Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs
work_id: arxiv-2505-11556
source_url: https://arxiv.org/html/2505.11556v4
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: f95d50b920cb4fddf231d5389eff885c2e3fce6046fc51c9931a6a47b9bc349f
---

> Источник: [https://arxiv.org/html/2505.11556v4](https://arxiv.org/html/2505.11556v4). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs

Yuxuan Li
Affiliation: School of Computer Science, Carnegie Mellon University, Pittsburgh, USA
Correspondence to: [yuxuanll@andrew.cmu.edu](mailto:yuxuanll@andrew.cmu.edu)
  
Aoi Naito
Affiliation: School of Computer Science, Carnegie Mellon University, Pittsburgh, USA
Affiliation: School of Environment and Society, Institute of Science Tokyo, Tokyo, Japan
Affiliation: Japan Society for the Promotion of Science, Tokyo, Japan
  
Hirokazu Shirado
Affiliation: School of Computer Science, Carnegie Mellon University, Pittsburgh, USA

###### Abstract

Multi-agent systems built on large language models (LLMs) are expected to enhance decision-making by pooling distributed information, yet systematically evaluating this capability has remained challenging.
We introduce HiddenBench, a 65-task benchmark grounded in the Hidden Profile paradigm, which isolates collective reasoning under distributed information from individual reasoning ability.
Evaluating 15 frontier LLMs, we find that multi-agent LLMs achieve only 30.1% accuracy under distributed information, compared to 80.7% accuracy for single agents given complete information.
We trace this gap to a systematic failure mode: agents cannot recognize or act under latent information asymmetry—they fail to reason about what others might know but have not yet expressed, leading to premature convergence on shared evidence while critical distributed facts remain unexplored.
These failures persist across prompting strategies, communication depths, and group sizes—and worsen as groups scale.
While some models (e.g., Gemini-2.5-Flash/Pro) outperform others, neither model scale nor individual reasoning accuracy reliably predicts collective performance.
We further show that this bottleneck is actionable: a lightweight structured communication protocol substantially improves collective reasoning across model families.
Our results identify failures in collective information exploration in decision-making as a key limitation of multi-agent LLMs, and provide a theory-grounded, reproducible framework for diagnosing collective reasoning failures.

###### Keywords:

Large Language Model, Multi-Agent, Collective Reasoning, Distributed Information

## 1 Introduction

Consider a team of AI agents diagnosing a complex system failure.
One agent monitors network logs, another hardware sensors, and a third software exceptions.
Each agent holds partial evidence about the root cause.
The correct diagnosis requires integrating all three perspectives.
Yet even in this seemingly straightforward setting, will the agents successfully pool their distributed information to reach a better decision than any single agent?

This scenario illustrates a central challenge in multi-agent systems built on large language models (LLMs): collective reasoning under distributed information ([Stasser and Titus, 1985](https://arxiv.org/html/2505.11556v4#bib.bib5); [Schulz-Hardt and Mojzisch, 2012](https://arxiv.org/html/2505.11556v4#bib.bib45); [Woolley et al., 2010](https://arxiv.org/html/2505.11556v4#bib.bib4)).
Multi-agent LLM systems are increasingly deployed for tasks requiring collaboration, diverse perspectives, and distributed expertise ([Li et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib9); [Qian et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib3); [Hong et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib26); [Dong et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib29); [Piao et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib21)).
Their promise rests on the assumption that groups of agents can integrate more information than any single agent alone ([Du et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib2); [Zhang et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib17); [Pan et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib22); [Liu et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib23)).
However, effective collective decision-making requires coordinating *information exploration*—eliciting potentially relevant information held by other agents—with *information integration*—combining available evidence to reach a decision ([March, 1991](https://arxiv.org/html/2505.11556v4#bib.bib56); [Hills et al., 2015](https://arxiv.org/html/2505.11556v4#bib.bib63); [Dimakopoulou and Van Roy, 2018](https://arxiv.org/html/2505.11556v4#bib.bib64)).

![Refer to caption](https://arxiv.org/html/2505.11556v4/teaser.png)


Figure 1: Overview of the Hidden Profile paradigm. Agents receive shared information (black) and unshared information (color) without recognizing the asymmetry. Only by sharing unshared information can they identify the optimal decision—here, walking up the hill rather than taking the other options (the tunnel and the bridge). See Table [1](https://arxiv.org/html/2505.11556v4#S3.T1 "Table 1 ‣ 3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs") for the actual information distribution.

While recent studies suggest that multi-agent LLM systems face coordination challenges ([Jones and Steinhardt, 2022](https://arxiv.org/html/2505.11556v4#bib.bib50); [Shi et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib49); [Sumita et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib51); [Cemri et al., 2025b](https://arxiv.org/html/2505.11556v4#bib.bib62)), it remains unclear how such failures arise from limitations in multi-agent interaction.
A key difficulty is evaluation.
Without controlled information distribution and access to ground truth, it is difficult to evaluate whether multi-agent deliberation improves decision accuracy beyond what individual agents can achieve alone.

The Hidden Profile paradigm, originally developed in social psychology ([Stasser and Titus, 1985](https://arxiv.org/html/2505.11556v4#bib.bib5); [Schulz-Hardt and Mojzisch, 2012](https://arxiv.org/html/2505.11556v4#bib.bib45)), provides a controlled way to isolate this coordination problem.
In Hidden Profile tasks, each group member holds unique information that must be pooled to reach the correct decision, while shared information favors an incorrect alternative (Fig. [1](https://arxiv.org/html/2505.11556v4#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).
Critically, individuals do not know in advance which information is not shared or relevant to the correct decision.
Because each task becomes solvable once the distributed information is surfaced, the paradigm enables direct evaluation of whether multi-agent deliberation affects decision accuracy.

Grounded in this paradigm, we develop HiddenBench, a scalable and reproducible benchmark that disentangles collective reasoning failures from individual reasoning ability by construction.
Across 65 tasks, success requires pooling distributed information, while each task remains solvable by a single agent given complete information.

Using HiddenBench, we evaluate 15 frontier LLMs under controlled multi-agent communication settings.
We find that multi-agent LLMs achieve only 30.1% accuracy when information is distributed, compared to 80.7% accuracy for single agents given complete information.
This gap persists across prompting strategies, communication depths, and group sizes, and worsens as groups scale.
While some models perform better than others, neither model scale nor individual reasoning accuracy reliably predicts collective reasoning performance.

Through targeted ablations, we identify systematic failure modes in multi-agent reasoning under distributed information.
Agents can integrate information once disclosed, but fail to recognize and act on latent information asymmetry—converging on shared evidence without actively eliciting unobserved knowledge held by others.
Our findings suggest that improving multi-agent performance requires coordination mechanisms and learning objectives that incentivize epistemic exploration, rather than relying solely on scaling individual reasoning.

Our contributions are fourfold.

- •

  We introduce HiddenBench, a scalable and reproducible 65-task benchmark that isolates collective reasoning under distributed information while controlling for individual reasoning ability.
- •

  Across 15 frontier models, we identify a systematic coordination failure in which agents fail to surface critical unshared information despite being able to integrate it once disclosed.
- •

  We show that failures in collective information exploration persist across prompting strategies, communication depths, and model families, while worsening as the number of agents increases.
- •

  We demonstrate that the identified bottleneck is actionable through a lightweight communication protocol that substantially improves collective reasoning.

## 2 Related Work

### 2.1 Assessing Multi-Agent LLM Systems

Recent advances have spurred interest in multi-agent LLMs, where models interact through dialogue or coordination to solve complex tasks collectively ([Li et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib9); [Du et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib2); [Qian et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib3); [Guo et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib18); [Zhang et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib28); [Wang et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib30); [Huang et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib68)).
Applications range from software development ([Wu et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib8); [Qian et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib19); [Hong et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib26); [Dong et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib29); [Antoniades et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib27)) to scientific discovery ([Zheng et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib16); [Schmidgall et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib20); [Boiko et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib33); [Swanson et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib34)) and social simulation ([Park et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib1); [Piao et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib21); [Gao et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib32); [Xie et al., 2024a](https://arxiv.org/html/2505.11556v4#bib.bib35)).

The central assumption is that groups of LLMs can be more robust and diverse than single models ([Du et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib2); [Qian et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib3); [Zhang et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib17); [Pan et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib22); [Liu et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib23); [Wang et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib30)).
However, there lacks theory-driven frameworks that cleanly separate failures of individual reasoning from failures of collective information integration ([Li et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib9); [Schmidgall et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib20); [Gong et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib24); [Abdelnabi et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib25); [Zhou et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib31); [Cemri et al., 2025a](https://arxiv.org/html/2505.11556v4#bib.bib57); [Raileanu et al., 2018](https://arxiv.org/html/2505.11556v4#bib.bib65); [Wang et al., 2020](https://arxiv.org/html/2505.11556v4#bib.bib67)).
Existing evaluations typically conflate collective reasoning with task-specific skills, coordination protocols, or domain knowledge ([Sun et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib59); [Xu et al., 2024](https://arxiv.org/html/2505.11556v4#bib.bib60); [Zhu et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib61); [Bu et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib70); [Xie et al., 2024b](https://arxiv.org/html/2505.11556v4#bib.bib71))—none isolate information asymmetry as a controlled variable.
Closely related are studies of transfer mechanisms underlying multitasking and shared representations in agent learning ([Wu et al., 2020](https://arxiv.org/html/2505.11556v4#bib.bib75); [Zhang et al., 2026](https://arxiv.org/html/2505.11556v4#bib.bib76); [Yang et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib77)), which examine when and how information generalizes across tasks.
Our work extends this line by introducing a formalized, theory-grounded benchmark that isolates collective reasoning under distributed information from individual reasoning ability rather than optimizing task performance.

### 2.2 Collective Reasoning Failures in Human Groups

Social psychology shows that communication can suppress rather than improve group performance ([Kerr and Tindale, 2004](https://arxiv.org/html/2505.11556v4#bib.bib10); [Janis, 1972](https://arxiv.org/html/2505.11556v4#bib.bib11); [Lorenz et al., 2011](https://arxiv.org/html/2505.11556v4#bib.bib14); [Muchnik et al., 2013](https://arxiv.org/html/2505.11556v4#bib.bib15)).
Failures often arise when groups neglect unique knowledge (shared information bias) ([Stasser and Titus, 1985](https://arxiv.org/html/2505.11556v4#bib.bib5); [Schulz-Hardt and Mojzisch, 2012](https://arxiv.org/html/2505.11556v4#bib.bib45); [Toma and Butera, 2009](https://arxiv.org/html/2505.11556v4#bib.bib46)), conform to majorities (conformity bias) ([Asch, 1956](https://arxiv.org/html/2505.11556v4#bib.bib6); [Moscovici and Faucheux, 1972](https://arxiv.org/html/2505.11556v4#bib.bib12); [Leibenstein, 1950](https://arxiv.org/html/2505.11556v4#bib.bib52)), adhere to prevailing social norms (social desirability bias) ([Fisher, 1993](https://arxiv.org/html/2505.11556v4#bib.bib7); [Mahmoodi et al., 2015](https://arxiv.org/html/2505.11556v4#bib.bib13)), or favor the status quo (normalcy bias) ([Drabek, 2012](https://arxiv.org/html/2505.11556v4#bib.bib54); [Shirado et al., 2020](https://arxiv.org/html/2505.11556v4#bib.bib53)), regardless of their veracity.
These dynamics can culminate in over-coordination, entrenched beliefs, or groupthink ([Nwana et al., 2005](https://arxiv.org/html/2505.11556v4#bib.bib42); [Gulati et al., 2012](https://arxiv.org/html/2505.11556v4#bib.bib43); [Shirado and Christakis, 2017](https://arxiv.org/html/2505.11556v4#bib.bib44); [Chang et al., 2017](https://arxiv.org/html/2505.11556v4#bib.bib48); [Park et al., 2010](https://arxiv.org/html/2505.11556v4#bib.bib55); [Janis, 1972](https://arxiv.org/html/2505.11556v4#bib.bib11); [McCauley, 1989](https://arxiv.org/html/2505.11556v4#bib.bib40); [Park, 2000](https://arxiv.org/html/2505.11556v4#bib.bib41)).

While these failures are well-documented in humans, their emergence in multi-agent LLMs remains poorly characterized.
A key open question is whether the informational structure that challenges human groups also constrains multi-agent AI systems.
Our study addresses this by adapting the Hidden Profile paradigm ([Stasser and Titus, 1985](https://arxiv.org/html/2505.11556v4#bib.bib5); [Schulz-Hardt and Mojzisch, 2012](https://arxiv.org/html/2505.11556v4#bib.bib45); [Toma and Butera, 2009](https://arxiv.org/html/2505.11556v4#bib.bib46))—a canonical diagnostic for human group failures—into a reproducible benchmark for LLM agents.
The paradigm operationalizes longstanding theoretical concerns from distributed knowledge representation ([Fagin et al., 2004](https://arxiv.org/html/2505.11556v4#bib.bib78)), transactive memory ([Wegner, 1987](https://arxiv.org/html/2505.11556v4#bib.bib79)), and the exploration–exploitation trade-off in organizations ([March, 1991](https://arxiv.org/html/2505.11556v4#bib.bib56)), where coordinated information surfacing—not just inference—is central to group performance.

## 3 Hidden Profile Tasks for Multi-Agent LLMs

### 3.1 Task setup

We study collective reasoning under distributed information using tasks adapted from the Hidden Profile paradigm in social psychology.
In these tasks, no agent can identify the correct option from its local information alone, while the correct decision becomes attainable only once distributed information is pooled by multi-agent interaction through multiple rounds of communication.
The same coordination challenge arises across many real-world settings—medical diagnosis with multiple specialists ([Centola et al., 2023](https://arxiv.org/html/2505.11556v4#bib.bib72)), incident response across distributed logs ([Cichonski et al., 2012](https://arxiv.org/html/2505.11556v4#bib.bib73)), and intelligence analysis with complementary partial evidence ([Crowther, 2014](https://arxiv.org/html/2505.11556v4#bib.bib74))—where critical evidence is naturally scattered across team members.
We adopt this paradigm as a principled choice for our setting: it directly targets reasoning over distributed information, provides a verifiable ground truth, and is well-established in decades of human studies—giving us confidence that diagnoses transfer to real-world settings, where ground truth is often ambiguous and coordination failures are difficult to attribute.

Each task consists of a set of decision options and a collection of task-relevant facts.
Under the *Hidden Profile* condition, a subset of facts is shared among all agents, while the remaining facts are uniquely distributed across agents.
The shared information is constructed to favor an incorrect option, whereas the unshared information—when combined—supports the correct one (Fig. [1](https://arxiv.org/html/2505.11556v4#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).
In contrast, under the *Full Profile* condition, all agents receive the full set of task-relevant information, including the critical facts, from the outset.
Agents are not informed whether their information differs from that of others.

This design isolates failures in *multi-agent interaction* from limitations in *individual reasoning*.
Each task is solvable by a single agent under the Full Profile condition, providing an upper bound on achievable performance.
Conversely, low pre-discussion accuracy under the Hidden Profile condition ensures that success requires information sharing rather than chance.
Accordingly, we evaluate post-discussion accuracy of multi-agent systems under the Hidden Profile condition and compare it against single-agent accuracy under the Full Profile condition.
A formal specification of the task structure, decision rules, and success criteria is provided in Appendix [A.2](https://arxiv.org/html/2505.11556v4#A1.SS2 "A.2 Formalizing the Hidden Profile Paradigm ‣ Appendix A Appendix ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").

Table 1: Example Hidden Profile task used for verification, where agents choose among North Hill, East Town, and West City, and the correct decision is North Hill.
Seven shared facts $\mathcal{I}\_{s}=\{s\_{1},\dots,s\_{7}\}$ are available to all agents ($a\_{1}$–$a\_{4}$), while four critical facts $\mathcal{I}\_{u}=\{u\_{1},\dots,u\_{4}\}$ are uniquely distributed such that agent $a\_{i}$ receives $I\_{i}=\mathcal{I}\_{s}\cup\{u\_{i}\}$ under the Hidden Profile condition.
Under the Full Profile condition, all agents receive the complete information set $\mathcal{I}\_{s}\cup\mathcal{I}\_{u}$.
The table shows abbreviated summaries of task facts for readability; agents receive the full natural-language statements during experiments.

| ID | Type | Statement Summary | $a\_{1}$ | $a\_{2}$ | $a\_{3}$ | $a\_{4}$ |
| --- | --- | --- | --- | --- | --- | --- |
| $s\_{1}$ | Shared | West City is accessible via a bridge over the river. | ✓ | ✓ | ✓ | ✓ |
| $s\_{2}$ | Shared | East Town is accessible via a tunnel on middle ground. | ✓ | ✓ | ✓ | ✓ |
| $s\_{3}$ | Shared | North Hill is accessible via driveway and walking trails. | ✓ | ✓ | ✓ | ✓ |
| $s\_{4}$ | Shared | West City hotels are ready with supplies. | ✓ | ✓ | ✓ | ✓ |
| $s\_{5}$ | Shared | East Town offers shelter and volunteers. | ✓ | ✓ | ✓ | ✓ |
| $s\_{6}$ | Shared | North Hill school is usable but lacks privacy. | ✓ | ✓ | ✓ | ✓ |
| $s\_{7}$ | Shared | Mudslide blocks walking trails to North Hill. | ✓ | ✓ | ✓ | ✓ |
| $u\_{1}$ | Unshared | River level is just below the bridge. | ✓ |  |  |  |
| $u\_{2}$ | Unshared | Dam upstream will release water in a minute. |  | ✓ |  |  |
| $u\_{3}$ | Unshared | Supply truck was heading to the tunnel. |  |  | ✓ |  |
| $u\_{4}$ | Unshared | Massive fire blocks the supply truck. |  |  |  | ✓ |

### 3.2 Verification

We instantiate three Hidden Profile tasks (Table [1](https://arxiv.org/html/2505.11556v4#S3.T1 "Table 1 ‣ 3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")) and verify that the construction satisfies the defining properties of collective reasoning under distributed information using both human groups and GPT-4.1 agents.
Details of the human studies are provided in Appendix [A.3](https://arxiv.org/html/2505.11556v4#A1.SS3 "A.3 Human Group Comparison ‣ Appendix A Appendix ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").

Human groups satisfy the Hidden Profile condition: pre-discussion accuracy is low under distributed information ($Y^{\text{pre}}=0.125$) but substantially higher under the Full Profile condition ($Y^{\text{full}}=0.604$).
Discussion improves performance under the Hidden Profile condition, yet post-discussion accuracy remains below the Full Profile ceiling ($Y^{\text{post}}=0.385<Y^{\text{full}}$, $p=0.003$), consistent with prior findings.

GPT-4.1 agents exhibit a similar pattern.
Pre-discussion accuracy under the Hidden Profile condition is near zero ($Y^{\text{pre}}=0.008$), while accuracy under the Full Profile condition is high ($Y^{\text{full}}=0.733$), confirming that the tasks are individually solvable given full information.
Communication improves performance ($0.008\rightarrow 0.233$, $p<0.001$; Fisher’s exact test), but post-discussion accuracy remains far below the Full Profile upper bound.

In particular, GPT-4.1 agents converge primarily on shared information while failing to actively reason about and surface unshared evidence.
These results verify that tasks instantiated from our construction induce genuine collective reasoning challenges.
They also show that observed multi-agent LLM failures cannot be attributed to task difficulty or insufficient individual reasoning capability, as agents achieve high accuracy under the Full Profile condition.
Instead, failures under the Hidden Profile condition reflect limitations in decentralized information exploration under latent information asymmetry.

## 4 HiddenBench: A Scalable Benchmark for Collective Reasoning

Given the consistent failures observed in our initial Hidden Profile tasks, we construct HiddenBench as a diagnostic benchmark for systematically characterizing limitations in multi-agent LLM systems.
Rather than targeting task difficulty or individual reasoning ability, HiddenBench is designed to isolate failures arising from decentralized coordination under distributed and partially observable information.
We release the [full benchmark](https://huggingface.co/datasets/YuxuanLi1225/HiddenBench), [customizable evaluation suite](https://github.com/Yassellee/HiddenBench_ICML), and [generated corpus](https://huggingface.co/datasets/YuxuanLi1225/HiddenBench-results) via Hugging Face ([Face, 2026](https://arxiv.org/html/2505.11556v4#bib.bib80)) and GitHub ([GitHub, 2026](https://arxiv.org/html/2505.11556v4#bib.bib81)).

To construct a scalable benchmark, we extend beyond established tasks from social psychology to automatically generated ones with theory-based verification.
As a result, HiddenBench consists of 65 Hidden Profile tasks spanning diverse decision-making contexts with varying information structures (e.g., healthcare, organizational planning, cultural preservation).

### 4.1 Adaptations from Human Studies

We systematically reviewed studies summarized in a major Hidden Profile meta-analysis ([Lu et al., 2012](https://arxiv.org/html/2505.11556v4#bib.bib58)) and identified all publicly available task materials.
From this review, we selected and adapted five scenarios from prior literature ([Stasser and Stewart, 1992](https://arxiv.org/html/2505.11556v4#bib.bib37); [Graetz et al., 1998](https://arxiv.org/html/2505.11556v4#bib.bib38); [Toma and Butera, 2009](https://arxiv.org/html/2505.11556v4#bib.bib46); [Baker, 2010](https://arxiv.org/html/2505.11556v4#bib.bib36); [Schulz-Hardt and Mojzisch, 2012](https://arxiv.org/html/2505.11556v4#bib.bib45)) that demonstrated robust Hidden Profile effects in human experiments.
Each adapted task preserves the original information structure and decision options while standardizing the format for multi-agent LLM evaluation.
We maintained the original distribution of shared versus unshared information and ensured that the correct decision could only be identified through successful integration of distributed knowledge.
All adapted items were validated against the formal model defined in Appendix [A.2](https://arxiv.org/html/2505.11556v4#A1.SS2 "A.2 Formalizing the Hidden Profile Paradigm ‣ Appendix A Appendix ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").

### 4.2 Automatic Pipeline for Scalable Task Generation

![Refer to caption](https://arxiv.org/html/2505.11556v4/pipeline.png)


Figure 2: Automatic pipeline for scalable Hidden Profile task generation. GPT-4.1 generates candidate tasks, which are then tested under both Full and Hidden Profile conditions across 10 sessions each. Tasks that satisfy validation thresholds ($\geq$ 80% pre-discussion accuracy in the Full Profile condition; $\leq$ 20% in the Hidden Profile condition) are retained in HiddenBench. From 200 candidates, the pipeline produced 57 validated tasks (28.5% validation rate).

To scale beyond manually crafted and adapted tasks, we developed an automatic generation pipeline that produces Hidden Profile scenarios with the defined system structure.
The pipeline operates in three stages: generation, execution, and selection (Fig. [2](https://arxiv.org/html/2505.11556v4#S4.F2 "Figure 2 ‣ 4.2 Automatic Pipeline for Scalable Task Generation ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).

In the generation stage, GPT-4.1 is prompted to create novel Hidden Profile tasks following a structured template.
Each task includes (1) a scenario description with clear decision options, (2) shared information available to all agents, (3) unshared information distributed among agents, and (4) a designated correct answer that requires integrating both shared and unshared information.

In the execution stage, each generated task is executed in two conditions.
In the Full Profile condition, agents receive all information (shared + unshared), allowing individual identification of the correct answer.
In the Hidden Profile condition, each agent receives only shared information plus their unique unshared pieces, enforcing the Hidden Profile constraint.
We run 10 simulation sessions per condition with GPT-4.1 agents and measure pre-discussion decision accuracy without any inter-agent interaction.

In the selection stage, tasks pass only if they meet two criteria: high accuracy ($\geq$ 80%) in the Full Profile condition, ensuring task solvability, and low accuracy ($\leq$ 20%) in the Hidden Profile condition, confirming that no agent can succeed without information aggregation.
Both thresholds refer to per-agent pre-discussion accuracy averaged across 10 sessions, measured before any inter-agent interaction.
This filtering ensures that each task creates a genuine Hidden Profile scenario requiring collective reasoning.

From 200 candidates, 57 tasks passed validation (28.5% validation rate).
Combined with three manually designed tasks and five adapted from prior studies, HiddenBench comprises 65 scenarios in total.
The pipeline is fully reproducible and can be extended to generate additional validated tasks as needed.

### 4.3 Benchmark Extensibility

Collective reasoning under distributed information depends strongly on domain semantics: whether agents recognize which facts matter, how information relates to decision options, and what counts as sufficient evidence all vary across contexts.
Accordingly, HiddenBench is designed not only as a fixed benchmark suite, but also as a reproducible pipeline for generating tasks with controlled distributed-information structures.

By enforcing verification criteria ($\geq 80\%$ Full Profile accuracy, $\leq 20\%$ Hidden Profile accuracy), the pipeline ensures each generated task isolates coordination capability from individual reasoning ability.
This design enables principled extensions across domains, group sizes, and communication protocols, positioning HiddenBench as a reusable framework for studying coordination failures in multi-agent systems.

Figure 3: Collective reasoning performance across 15 LLMs on HiddenBench. Bars show average accuracy across 65 tasks under the average rule. The rightmost columns display the improvement from interaction ($Y^{\text{post}}-Y^{\text{pre}}$) and the gap between collective reasoning and individual reasoning with full information ($Y^{\text{post}}-Y^{\text{full}}$). Models meeting strong collective reasoning criteria ($Y^{\text{full}}>0.8$ and $Y^{\text{post}}-Y^{\text{pre}}>0.4\times(Y^{\text{full}}-Y^{\text{pre}})$) are highlighted in bold. Error bars indicate mean $\pm$ s.e.m.

## 5 Assessing Collective Reasoning with HiddenBench

We use HiddenBench to characterize systematic failure modes in collective reasoning across state-of-the-art multi-agent LLM systems.
We evaluate 15 frontier models spanning four families—OpenAI GPT, Google Gemini, Alibaba Qwen, and Meta Llama—under controlled Hidden and Full Profile conditions.
For each model, we run 10 sessions per task and measure accuracy before and after multi-agent interaction using the average rule (i.e., accuracy before and after discussion).

Figure [3](https://arxiv.org/html/2505.11556v4#S4.F3 "Figure 3 ‣ 4.3 Benchmark Extensibility ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs") reveals a consistent failure pattern across all models.
Under the Hidden Profile condition, pre-discussion accuracy remains uniformly low (0.082–0.217), indicating that agents cannot identify the correct option from local information alone.
In contrast, under the Full Profile condition, pre-discussion accuracy ranges from 0.435 to 0.981, with most state-of-the-art models exceeding 0.8.
This confirms that the same tasks are individually solvable when complete information is available and that failures under the Hidden Profile condition cannot be attributed to insufficient individual reasoning capability.

Despite strong individual performance under the Full Profile condition, collective performance remains systematically limited.
Post-discussion accuracy under the Hidden Profile condition improves relative to pre-discussion baselines, showing that inter-agent interaction enables partial integration of distributed information.
However, the magnitude of improvement varies widely across models—from negligible (GPT-5-Nano: –0.004) to substantial (Gemini-2.5-Pro: 0.454).
Crucially, even the strongest models fall well short of their own Full Profile pre-discussion performance, with persistent gaps ranging from –0.310 (Gemini-2.5-Pro) to –0.750 (GPT-5 Minimal Reasoning).
This pattern indicates a structural limitation in multi-agent reasoning under latent information asymmetry, even when individual reasoning is strong.

The benchmark further reveals systematic differences in how models fail.
For example, the Gemini family consistently outperforms other model families in collective settings.
Gemini-2.5-Pro achieves the highest post-discussion accuracy under the Hidden Profile condition (0.671) and the smallest gap relative to Full Profile performance (–0.310), with Gemini-2.5-Flash (0.550) and Gemini-2.5-Flash-Lite (0.394) also performing competitively.
In contrast, improvements in model scale or individual reasoning ability do not consistently translate into stronger collective reasoning.
Despite enhanced reasoning performance under the Full Profile condition, GPT-5 variants fail to substantially outperform smaller models such as GPT-4.1-Mini in multi-agent settings.

Taken together, these results reveal a persistent gap between individual reasoning ability and collective reasoning under distributed information. Although communication improves performance, current multi-agent LLMs do not reliably surface and coordinate unshared information under latent asymmetry.
HiddenBench exposes this limitation while providing a controlled framework for evaluating mechanisms that improve collective information exploration.

## 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination

We conduct targeted ablations to assess the robustness of collective reasoning failures and to isolate the primary bottleneck underlying these failures.
All experiments use GPT-4.1 as a representative strong baseline on three tasks from HiddenBench, unless otherwise noted.
Through these ablations, we show that the dominant failure is not aggregation or inference, but action selection: agents do not reliably choose communicative actions that maximize expected information gain about unobserved task-relevant variables.

### 6.1 Failures Persist Across Experimental Variations

#### Communication Depth.

We vary the number of communication rounds $T\in\{5,10,15,20\}$ (Table [2](https://arxiv.org/html/2505.11556v4#S6.T2 "Table 2 ‣ Communication Depth. ‣ 6.1 Failures Persist Across Experimental Variations ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).
Performance peaks at $T=15$ but declines at $T=20$, suggesting extended discussion reinforces incorrect consensus rather than promoting exploration.
Even at optimal depth, post-discussion accuracy (0.233) remains far below Full Profile (0.733).

Table 2: Effect of communication depth (GPT-4.1). Performance peaks at $T=15$ but remains far below Full Profile.

| Rounds | $Y^{\text{post}}$ | Improvement | Gap to $Y^{\text{full}}$ |
| --- | --- | --- | --- |
| 5 | $0.108\pm 0.058$ | +0.100 | $-0.625$ |
| 10 | $0.200\pm 0.100$ | +0.183 | $-0.533$ |
| 15 | $0.233\pm 0.069$ | +0.225 | $-0.500$ |
| 20 | $0.133\pm 0.033$ | +0.125 | $-0.600$ |

#### Prompting Strategies.

We next test whether prompting can steer agents toward better coordination (Table [3](https://arxiv.org/html/2505.11556v4#S6.T3 "Table 3 ‣ Prompting Strategies. ‣ 6.1 Failures Persist Across Experimental Variations ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")), including cooperation–conflict styles, zero-shot chain-of-thought ([Wei et al., 2022](https://arxiv.org/html/2505.11556v4#bib.bib47)), explicit asymmetry awareness, and direct instructions to share information.
No prompting strategy substantially closes the gap to Full Profile performance.
Cooperative prompts yield $Y^{\text{post}}=0.200$–$0.242$.
Conflictual prompts fail to converge, producing zero majority consensus.
Explicit instructions to share all information improve accuracy to 0.467, but still leave roughly half the gap unresolved, indicating that disclosure alone is insufficient without mechanisms for identifying and prioritizing critical unshared evidence 1.

Table 3: Effect of prompting strategies (GPT-4.1). No strategy resolves collective reasoning failures.

|  |  |  |
| --- | --- | --- |
| Strategy | Average | Majority |
| Very Cooperative | 0.242 | 0.233 |
| Cooperative | 0.200 | 0.200 |
| Constructive | 0.200 | 0.167 |
| Conflictual | 0.017 | 0.000 |
| Very Conflictual | 0.258 | 0.000 |
| Zero-shot CoT | 0.222 | 0.222 |
| Informing Asymmetry | 0.367 | 0.367 |
| Share All Information | 0.467 | 0.467 |

#### Group Size.

We vary the number of agents $N\in\{3,4,5,6,7\}$, generating new validated tasks for $N>4$.
As shown in Table [4](https://arxiv.org/html/2505.11556v4#S6.T4 "Table 4 ‣ Group Size. ‣ 6.1 Failures Persist Across Experimental Variations ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"), failures *worsen* as groups scale: improvement from communication drops from $+0.348$ at $N=3$ to $+0.006$ at $N=7$, despite near-perfect Full Profile accuracy.
This pattern poses a practical concern: multi-agent systems are often scaled precisely to pool diverse information, yet without explicit coordination mechanisms, adding agents amplifies failure rather than improving collective performance ([Dimakopoulou and Van Roy, 2018](https://arxiv.org/html/2505.11556v4#bib.bib64)).

Table 4: Effect of group size (GPT-4.1). Failures worsen as $N$ increases.

| $N$ | # Tasks | $Y^{\text{pre}}$ | $Y^{\text{post}}$ | Improvement |
| --- | --- | --- | --- | --- |
| 3 | 7 | 0.167 | 0.514 | +0.348 |
| 4 | 58 | 0.072 | 0.321 | +0.250 |
| 5 | 5 | 0.116 | 0.180 | +0.064 |
| 6 | 5 | 0.087 | 0.283 | +0.197 |
| 7 | 5 | 0.017 | 0.023 | +0.006 |

### 6.2 Structured Dissent as a Minimal Coordination Mechanism

Real-world collective intelligence often relies on mechanisms that prevent premature consensus and encourage epistemic challenge ([Jaques et al., 2019](https://arxiv.org/html/2505.11556v4#bib.bib66); [Li et al., 2025](https://arxiv.org/html/2505.11556v4#bib.bib69)).
We evaluate heterogeneous four-agent groups across five frontier models, varying the proportion of agents prompted to adopt an adversarial, dissenting stance from 0% to 100%.
The effect of dissent on collective reasoning is highly heterogeneous (Table [5](https://arxiv.org/html/2505.11556v4#S6.T5 "Table 5 ‣ 6.2 Structured Dissent as a Minimal Coordination Mechanism ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).

For GPT-4.1, introducing a single adversarial agent (25% dissent) nearly doubles post-discussion accuracy (0.233 $\rightarrow$ 0.492), revealing a Goldilocks effect: minimal epistemic pressure disrupts premature convergence, but adding more adversaries impairs convergence on any decision.
GPT-5-Mini shows a similar inverted-U with a broader peak at 50–75% dissent, and notably collapses to zero accuracy without any adversarial pressure.
GPT-4.1-Mini benefits roughly monotonically from additional dissent (0.333 $\rightarrow$ 0.583), while Gemini-2.5-Flash-Lite is relatively stable across compositions, peaking at 75% (0.778) before dropping at 100%.

Simple dissent *hurts* Gemini-2.5-Flash: the model achieves its highest accuracy (0.889) without any adversarial agents and degrades sharply with even a single one (0.306).
This suggests that when a model already coordinates effectively without intervention, imposed adversarial pressure can disrupt rather than support information surfacing.

Across all five models, even the best composition typically falls short of Full Profile performance, and there is no universally beneficial level of dissent.
Thus, while structured dissent can mitigate coordination failures for some models, heterogeneity alone is insufficient to resolve reasoning under latent information asymmetry, and the most effective intervention, if any, depends on the underlying model.
Robust collective reasoning will require more explicit coordination mechanisms that support systematic information surfacing and integration.

Table 5: Effect of group composition across five frontier models. Values are post-discussion accuracy ($Y^{\text{post}}$) for four-agent groups with 0–100% adversarial agents; bold marks the best composition for each model.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Model | 0% | 25% | 50% | 75% | 100% |
| GPT | | | | | |
| 4.1 | 0.233 | 0.492 | 0.342 | 0.242 | 0.375 |
| 4.1-mini | 0.333 | 0.361 | 0.556 | 0.528 | 0.583 |
| 5-mini | 0.000 | 0.278 | 0.361 | 0.361 | 0.250 |
| Gemini-2.5 | | | | | |
| Flash | 0.889 | 0.306 | 0.361 | 0.222 | 0.278 |
| Flash-Lite | 0.667 | 0.667 | 0.639 | 0.778 | 0.500 |

### 6.3 Isolating the Bottleneck

Where in collective reasoning do agents fail: sharing information or integrating it?
We design two interventions to isolate each component:

- •

  Reveal-All: Each agent discloses all information in the first round before discussion, removing the sharing bottleneck.
- •

  Secretary: A dedicated agent summarizes all disclosed information each round, testing whether passive repetition aids integration.

We evaluate both interventions on 18 HiddenBench tasks (3 manually crafted and 15 randomly sampled) using GPT-4.1 and Gemini-2.5-Flash as representatives of two model families.

Table 6: Isolating the bottleneck on 18 HiddenBench tasks. Forced disclosure nearly eliminates failure across both models; passive summarization yields more limited and model-dependent gains.

| Condition | GPT-4.1 | Gemini-2.5-Flash |
| --- | --- | --- |
| Baseline | 0.037 | 0.173 |
| Reveal-All | 0.926 | 0.982 |
| Secretary | 0.241 | 0.713 |

Table [6](https://arxiv.org/html/2505.11556v4#S6.T6 "Table 6 ‣ 6.3 Isolating the Bottleneck ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs") reveals a clear pattern.
When forced to disclose all facts, accuracy rises to 92.6% (GPT-4.1) and 98.2% (Gemini-2.5-Flash), nearly matching Full Profile—demonstrating that agents *can* integrate information once they have it.
This rules out limitations in individual reasoning, memory, or aggregation as primary failure sources; the failure lies in surfacing information, not reasoning over it.
Passive summarization yields more limited and model-dependent gains: GPT-4.1 shows little benefit (0.241), while Gemini-2.5-Flash improves substantially (0.713), suggesting that integration ability also varies across models.
Importantly, although forced disclosure nearly eliminates failure, the space of task-relevant information is itself latent and must be discovered through interaction.
Effective collective reasoning therefore requires *active probing* and recognition of information asymmetry, not mere repetition.

Qualitative analysis supports this interpretation.
Top-performing models (e.g., Gemini-2.5-Pro) signal asymmetry (“Your point about the dam is new to me”), actively probe for missing facts, and offer reasoned disagreement.
In contrast, lower-performing models converge prematurely (“I agree—let’s choose East Town”) before hidden facts surface.
These behaviors indicate that collective failure arises from missing mechanisms for detecting and managing latent information asymmetry during interaction, rather than from deficiencies in individual reasoning or aggregation.

### 6.4 Structured Communication as a Coordination Mechanism

The preceding ablations do not yet test whether HiddenBench can guide the design of improved coordination mechanisms.
To test this, we evaluate a lightweight structured communication protocol that targets the two failure modes identified above—failure to surface unshared information and premature convergence—without explicitly informing agents of asymmetry or requiring full disclosure.

The protocol consists of two stages.
In the *Exchange* stage (2 rounds), each agent shares 1–2 decision-relevant facts and gives one reason the current front-runner may be incorrect.
In the *Decide* stage (1 pass), each agent summarizes the strongest evidence and remaining uncertainty before voting.
Importantly, the protocol does not assume prior knowledge of which information is missing or relevant, preserving the core coordination challenge of the Hidden Profile setting.

We evaluate this protocol on 18 HiddenBench tasks (3 manually crafted + 15 randomly sampled, same as in Section [6.3](https://arxiv.org/html/2505.11556v4#S6.SS3 "6.3 Isolating the Bottleneck ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"); 5 runs each, 4 agents) across three models.
As shown in Table [7](https://arxiv.org/html/2505.11556v4#S6.T7 "Table 7 ‣ 6.4 Structured Communication as a Coordination Mechanism ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"), the protocol substantially improves decision accuracy across all three.
While the protocol is intentionally lightweight and does not resolve all coordination challenges, the consistent improvement across model families demonstrates that HiddenBench is actionable: it can identify and evaluate coordination structures that meaningfully improve collective reasoning under distributed information.

Table 7: Structured communication protocol on 18 HiddenBench tasks. A lightweight Exchange-then-Decide protocol substantially improves collective reasoning across three model families, without revealing the information asymmetry or requiring full disclosure.

| Model | Baseline | Structured |
| --- | --- | --- |
| GPT-4.1 | 0.037 | 0.800 |
| Gemini-2.5-Flash | 0.173 | 0.727 |
| Gemini-2.5-Flash-Lite | 0.043 | 0.743 |

## 7 Conclusion

We studied collective reasoning under distributed information in multi-agent LLM systems through the lens of the Hidden Profile paradigm.
We introduced HiddenBench, a 65-task benchmark that isolates failures in collective information exploration under distributed information from individual reasoning ability.
Across 15 frontier LLMs, we observed a large and persistent gap between multi-agent performance with distributed information and single-agent performance with full information.

This gap persists across prompting strategies, communication depths, and group sizes.
While agents can integrate information once it is disclosed, they consistently fail to surface critical unshared facts during interaction, indicating a coordination failure driven by latent information asymmetry.
Building on this diagnosis, we showed that a lightweight structured communication protocol substantially improves performance across multiple model families, demonstrating that HiddenBench can also serve as a testbed for developing coordination mechanisms.

Our findings suggest that improving collective reasoning under distributed information requires mechanisms that incentivize epistemic exploration—actively probing for missing evidence and prioritizing unshared information—rather than relying solely on stronger individual reasoning or longer interaction.
HiddenBench provides a scalable and reproducible framework for diagnosing these failures and measuring progress toward multi-agent systems capable of reliable collective reasoning under distributed information.

## Acknowledgements

This work was supported by the NOMIS Foundation and JSPS KAKENHI (Grant Number JP23KJ0879).

## Impact Statement

This paper presents work whose goal is to advance the understanding and evaluation of collective reasoning under distributed information in multi-agent systems built on large language models.
By introducing a theory-grounded benchmark and identifying systematic failure modes under distributed information, this work aims to support the development of more reliable, transparent, and effective collaborative AI systems.

Potential societal impacts are primarily indirect and methodological.
Improved evaluation of collective reasoning may inform the safer deployment of multi-agent AI in settings such as decision support, scientific collaboration, and organizational planning.
At the same time, our findings highlight current limitations that caution against over-reliance on such systems in high-stakes or safety-critical contexts without additional safeguards.

The human subjects experiments reported in this paper were conducted with approval from an Institutional Review Board (IRB).
We do not anticipate direct negative societal impacts arising from this work.
The benchmark and analyses are intended for research and diagnostic purposes, and do not introduce new deployment mechanisms or applications.
Overall, we believe the ethical and societal implications of this work are aligned with those commonly associated with foundational research in machine learning.

## References

- Abdelnabi et al. (2023)
  S. Abdelnabi, A. Gomaa, S. Sivaprasad, L. Schönherr, and M. Fritz
  LLM-deliberation: evaluating llms with interactive multi-agent negotiation games..
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Antoniades et al. (2024)
  A. Antoniades, A. Örwall, K. Zhang, Y. Xie, A. Goyal, and W. Wang
  SWE-search: enhancing software agents with monte carlo tree search and iterative refinement.
  ArXiv abs/2410.20285.
  External Links: [Link](https://arxiv.org/pdf/2410.20285.pdf)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Asch (1956)
  S. E. Asch
  Studies of independence and conformity: i. a minority of one against a unanimous majority.
  Psychological Monographs: General and Applied 70 (9), pp. 1.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Baker (2010)
  D. F. Baker
  Enhancing group decision making: an exercise to reduce shared information bias.
  J. Manag. Educ. 34 (2), pp. 249–279.
  Cited by: [§4.1](https://arxiv.org/html/2505.11556v4#S4.SS1.p1.1 "4.1 Adaptations from Human Studies ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Boiko et al. (2023)
  D. A. Boiko, R. MacKnight, and G. Gomes
  Emergent autonomous scientific research capabilities of large language models.
  arXiv preprint arXiv:2304.05332.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Bu et al. (2025)
  W. Bu, Y. Wu, Q. Yu, M. Gao, B. Miao, Z. Zhang, K. Pan, Y. Li, M. Li, W. Ji, J. Li, S. Tang, and Y. Zhuang
  What limits virtual agent application? OmniBench: a scalable multi-dimensional benchmark for essential virtual agent capabilities.
  In Proceedings of the 42nd International Conference on Machine Learning, A. Singh, M. Fazel, D. Hsu, S. Lacoste-Julien, F. Berkenkamp, T. Maharaj, K. Wagstaff, and J. Zhu (Eds.),
  Proceedings of Machine Learning Research, Vol. 267, pp. 5725–5748.
  External Links: [Link](https://proceedings.mlr.press/v267/bu25b.html)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Cemri et al. (2025a)
  M. Cemri, M. Z. Pan, S. Yang, L. A. Agrawal, B. Chopra, R. Tiwari, K. Keutzer, A. Parameswaran, D. Klein, K. Ramchandran, et al.
  Why do multi-agent llm systems fail?.
  arXiv preprint arXiv:2503.13657.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Cemri et al. (2025b)
  M. Cemri, M. Z. Pan, S. Yang, L. A. Agrawal, B. Chopra, R. Tiwari, K. Keutzer, A. Parameswaran, D. Klein, K. Ramchandran, M. Zaharia, J. E. Gonzalez, and I. Stoica
  Why do multi-agent llm systems fail?.
  ArXiv abs/2503.13657.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:277103715)
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p3.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Centola et al. (2023)
  D. Centola, J. Becker, J. Zhang, J. Aysola, D. Guilbeault, and E. Khoong
  Experimental evidence for structured information–sharing networks reducing medical errors.
  Proceedings of the National Academy of Sciences 120 (31), pp. e2108290120.
  Cited by: [§3.1](https://arxiv.org/html/2505.11556v4#S3.SS1.p1.1 "3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Chang et al. (2017)
  C. Chang, M. Chang, C. Liu, B. Chiu, S. Fan Chiang, C. Wen, F. Hwang, P. Chao, Y. Chen, and C. Chai
  An analysis of collaborative problem-solving activities mediated by individual-based and collaborative computer simulations.
  Journal of Computer Assisted Learning 33 (6), pp. 649–662.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Cichonski et al. (2012)
  P. Cichonski, T. Millar, T. Grance, K. Scarfone, et al.
  Computer security incident handling guide.
  NIST Special Publication 800 (61), pp. 1–147.
  Cited by: [§3.1](https://arxiv.org/html/2505.11556v4#S3.SS1.p1.1 "3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Crowther (2014)
  K. G. Crowther
  Understanding and overcoming information sharing failures.
  Journal of Homeland Security and Emergency Management 11 (1), pp. 131–154.
  Cited by: [§3.1](https://arxiv.org/html/2505.11556v4#S3.SS1.p1.1 "3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Dimakopoulou and Van Roy (2018)
  M. Dimakopoulou and B. Van Roy
  Coordinated exploration in concurrent reinforcement learning.
  In Proceedings of the 35th International Conference on Machine Learning, J. Dy and A. Krause (Eds.),
  Proceedings of Machine Learning Research, Vol. 80, pp. 1271–1279.
  External Links: [Link](https://proceedings.mlr.press/v80/dimakopoulou18a.html)
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§6.1](https://arxiv.org/html/2505.11556v4#S6.SS1.SSS0.Px3.p1.1 "Group Size. ‣ 6.1 Failures Persist Across Experimental Variations ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Dong et al. (2024)
  Y. Dong, X. Jiang, Z. Jin, and G. Li
  Self-collaboration code generation via chatgpt.
  ACM Transactions on Software Engineering and Methodology 33 (7), pp. 1–38.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Drabek (2012)
  T. E. Drabek
  Human system responses to disaster: an inventory of sociological findings.
   Springer Science & Business Media.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Du et al. (2024)
  Y. Du, X. Ma, S. Song, J. B. Tenenbaum, and A. Torralba
  Improving factuality and reasoning in multi-agent debate.
  In Forty-first International Conference on Machine Learning (ICML),
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Face (2026)
  H. Face
  Hugging face.
  Note: <https://huggingface.co>Accessed: 2026-05-06
  Cited by: [§4](https://arxiv.org/html/2505.11556v4#S4.p1.1 "4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Fagin et al. (2004)
  R. Fagin, J. Y. Halpern, Y. Moses, and M. Vardi
  Reasoning about knowledge.
   MIT press.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p2.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Fisher (1993)
  R. J. Fisher
  Social desirability bias and the validity of indirect questioning.
  Journal of Consumer Research 20 (2), pp. 303–315.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Gao et al. (2023)
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- GitHub (2026)
  GitHub
  GitHub.
  Note: <https://github.com/>Accessed: 2026-05-06
  Cited by: [§4](https://arxiv.org/html/2505.11556v4#S4.p1.1 "4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Gong et al. (2023)
  R. Gong, Q. Huang, X. Ma, H. Vo, Z. Durante, Y. Noda, Z. Zheng, S. Zhu, D. Terzopoulos, L. Fei-Fei, et al.
  Mindagent: emergent gaming interaction.
  arXiv preprint arXiv:2309.09971.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Graetz et al. (1998)
  K. A. Graetz, E. S. Boyle, C. E. Kimble, P. Thompson, and J. L. Garloch
  Information sharing in face-to-face, teleconferencing, and electronic chat groups.
  Small Group Res. 29 (6), pp. 714–743.
  Cited by: [§4.1](https://arxiv.org/html/2505.11556v4#S4.SS1.p1.1 "4.1 Adaptations from Human Studies ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Gulati et al. (2012)
  R. Gulati, F. Wohlgezogen, and P. Zhelyazkov
  The two facets of collaboration: cooperation and coordination in strategic alliances.
  Academy of Management Annals 6 (1), pp. 531–583.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Guo et al. (2024)
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang
  Large language model based multi-agents: a survey of progress and challenges.
  arXiv preprint arXiv:2402.01680.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Hills et al. (2015)
  T. T. Hills, P. M. Todd, D. Lazer, A. D. Redish, and I. D. Couzin
  Exploration versus exploitation in space, mind, and society.
  Trends in cognitive sciences 19 (1), pp. 46–54.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Hong et al. (2023)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, C. Zhang, J. Wang, Z. Wang, S. K. S. Yau, Z. Lin, L. Zhou, C. Ran, L. Xiao, C. Wu, and J. Schmidhuber
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In International Conference on Learning Representations,
  External Links: [Link](https://arxiv.org/pdf/2308.00352.pdf)
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Huang et al. (2025)
  J. Huang, J. Zhou, T. Jin, X. Zhou, Z. Chen, W. Wang, Y. Yuan, M. Lyu, and M. Sap
  On the resilience of LLM-based multi-agent collaboration with faulty agents.
  In Proceedings of the 42nd International Conference on Machine Learning, A. Singh, M. Fazel, D. Hsu, S. Lacoste-Julien, F. Berkenkamp, T. Maharaj, K. Wagstaff, and J. Zhu (Eds.),
  Proceedings of Machine Learning Research, Vol. 267, pp. 26202–26226.
  External Links: [Link](https://proceedings.mlr.press/v267/huang25ay.html)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Janis (1972)
  I. L. Janis
  Victims of groupthink: a psychological study of foreign-policy decisions and fiascoes..
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Jaques et al. (2019)
  N. Jaques, A. Lazaridou, E. Hughes, C. Gulcehre, P. Ortega, D. Strouse, J. Z. Leibo, and N. De Freitas
  Social influence as intrinsic motivation for multi-agent deep reinforcement learning.
  In Proceedings of the 36th International Conference on Machine Learning, K. Chaudhuri and R. Salakhutdinov (Eds.),
  Proceedings of Machine Learning Research, Vol. 97, pp. 3040–3049.
  External Links: [Link](https://proceedings.mlr.press/v97/jaques19a.html)
  Cited by: [§6.2](https://arxiv.org/html/2505.11556v4#S6.SS2.p1.1 "6.2 Structured Dissent as a Minimal Coordination Mechanism ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Jones and Steinhardt (2022)
  E. Jones and J. Steinhardt
  Capturing failures of large language models via human cognitive biases.
  Advances in Neural Information Processing Systems 35, pp. 11785–11799.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p3.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Kerr and Tindale (2004)
  N. L. Kerr and R. S. Tindale
  Group performance and decision making.
  Annu. Rev. Psychol. 55 (1), pp. 623–655.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Leibenstein (1950)
  H. Leibenstein
  Bandwagon, snob, and veblen effects in the theory of consumers’ demand.
  The quarterly journal of economics 64 (2), pp. 183–207.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Li et al. (2023)
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem
  CAMEL: communicative agents for “mind” exploration of large language model society.
  In Advances in Neural Information Processing Systems, A. Oh, T. Naumann, A. Globerson, K. Saenko, M. Hardt, and S. Levine (Eds.),
  Vol. 36, pp. 51991–52008.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Li et al. (2025)
  L. Li, L. Yuan, P. Liu, T. Jiang, and Y. Yu
  LLM-assisted semantically diverse teammate generation for efficient multi-agent coordination.
  In Proceedings of the 42nd International Conference on Machine Learning, A. Singh, M. Fazel, D. Hsu, S. Lacoste-Julien, F. Berkenkamp, T. Maharaj, K. Wagstaff, and J. Zhu (Eds.),
  Proceedings of Machine Learning Research, Vol. 267, pp. 36743–36764.
  External Links: [Link](https://proceedings.mlr.press/v267/li25dq.html)
  Cited by: [§6.2](https://arxiv.org/html/2505.11556v4#S6.SS2.p1.1 "6.2 Structured Dissent as a Minimal Coordination Mechanism ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Liu et al. (2023)
  Z. Liu, Y. Zhang, P. Li, Y. Liu, and D. Yang
  Dynamic llm-agent network: an llm-agent collaboration framework with agent team optimization.
  arXiv preprint arXiv:2310.02170.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Lorenz et al. (2011)
  J. Lorenz, H. Rauhut, F. Schweitzer, and D. Helbing
  How social influence can undermine the wisdom of crowd effect.
  PNAS 108 (22), pp. 9020–9025.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Lu et al. (2012)
  L. Lu, Y. C. Yuan, and P. L. McLeod
  Twenty-five years of hidden profiles in group decision making: a meta-analysis.
  Personality and Social Psychology Review 16 (1), pp. 54–75.
  Cited by: [§4.1](https://arxiv.org/html/2505.11556v4#S4.SS1.p1.1 "4.1 Adaptations from Human Studies ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Mahmoodi et al. (2015)
  A. Mahmoodi, D. Bang, K. Olsen, Y. A. Zhao, Z. Shi, K. Broberg, S. Safavi, S. Han, M. Nili Ahmadabadi, C. D. Frith, et al.
  Equality bias impairs collective decision-making across cultures.
  PNAS 112 (12), pp. 3835–3840.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- March (1991)
  J. G. March
  Exploration and exploitation in organizational learning.
  Organization science 2 (1), pp. 71–87.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p2.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- McCauley (1989)
  C. McCauley
  The nature of social influence in groupthink: compliance and internalization..
  Journal of personality and social psychology 57 (2), pp. 250.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Moscovici and Faucheux (1972)
  S. Moscovici and C. Faucheux
  Social influence, conformity bias, and the study of active minorities.
  Advances in experimental social psychology 6, pp. 149–202.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Muchnik et al. (2013)
  L. Muchnik, S. Aral, and S. J. Taylor
  Social influence bias: a randomized experiment.
  Science 341 (6146), pp. 647–651.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Nwana et al. (2005)
  H. S. Nwana, L. Lee, and N. R. Jennings
  Co-ordination in multi-agent systems.
  Software Agents and Soft Computing Towards Enhancing Machine Intelligence: Concepts and Applications, pp. 42–58.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Palan and Schitter (2018)
  S. Palan and C. Schitter
  Prolific. ac—a subject pool for online experiments.
  Journal of behavioral and experimental finance 17, pp. 22–27.
  Cited by: [§A.3](https://arxiv.org/html/2505.11556v4#A1.SS3.p1.1 "A.3 Human Group Comparison ‣ Appendix A Appendix ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Pan et al. (2024)
  L. Pan, Y. Li, C. Yu, and Y. Shi
  A human-computer collaborative tool for training a single large language model agent into a network through few examples.
  arXiv preprint arXiv:2404.15974.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Park et al. (2010)
  J. Park, P. Konana, B. Gu, A. Kumar, and R. Raghunathan
  Confirmation bias, overconfidence, and investment performance: evidence from stock message boards.
  McCombs research paper series no. IROM-07-10.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST),
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Park (2000)
  W. Park
  A comprehensive empirical investigation of the relationships among variables of the groupthink model.
  Journal of Organizational Behavior 21 (8), pp. 873–887.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Piao et al. (2025)
  J. Piao, Y. Yan, J. Zhang, N. Li, J. Yan, X. Lan, Z. Lu, Z. Zheng, J. Y. Wang, D. Zhou, et al.
  AgentSociety: large-scale simulation of llm-driven generative agents advances understanding of human behaviors and society.
  arXiv preprint arXiv:2502.08691.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Qian et al. (2023)
  C. Qian, X. Cong, C. Yang, W. Chen, Y. Su, J. Xu, Z. Liu, and M. Sun
  Communicative agents for software development.
  arXiv preprint arXiv:2307.07924 6 (3).
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Qian et al. (2024)
  Y. Qian, X. Ning, X. Wang, Y. Yang, Y. Xia, Y. Wang, and H. Yang
  AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In The Twelfth International Conference on Learning Representations (ICLR),
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Raileanu et al. (2018)
  R. Raileanu, E. Denton, A. Szlam, and R. Fergus
  Modeling others using oneself in multi-agent reinforcement learning.
  In Proceedings of the 35th International Conference on Machine Learning, J. Dy and A. Krause (Eds.),
  Proceedings of Machine Learning Research, Vol. 80, pp. 4257–4266.
  External Links: [Link](https://proceedings.mlr.press/v80/raileanu18a.html)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Schmidgall et al. (2025)
  S. Schmidgall, Y. Su, Z. Wang, X. Sun, J. Wu, X. Yu, J. Liu, Z. Liu, and E. Barsoum
  Agent laboratory: using llm agents as research assistants.
  arXiv preprint arXiv:2501.04227.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Schulz-Hardt and Mojzisch (2012)
  S. Schulz-Hardt and A. Mojzisch
  How to achieve synergy in group decision making: lessons to be learned from the hidden profile paradigm.
  European Review of Social Psychology 23 (1), pp. 305–343.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§1](https://arxiv.org/html/2505.11556v4#S1.p4.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p2.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§4.1](https://arxiv.org/html/2505.11556v4#S4.SS1.p1.1 "4.1 Adaptations from Human Studies ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Shi et al. (2024)
  L. Shi, H. Liu, Y. Wong, U. Mujumdar, D. Zhang, J. Gwizdka, and M. Lease
  Argumentative experience: reducing confirmation bias on controversial issues through llm-generated multi-persona debates.
  arXiv preprint arXiv:2412.04629.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p3.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Shirado and Christakis (2017)
  H. Shirado and N. A. Christakis
  Locally noisy autonomous agents improve global human coordination in network experiments.
  Nature 545 (7654), pp. 370–374.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Shirado et al. (2020)
  H. Shirado, F. W. Crawford, and N. A. Christakis
  Collective communication and behaviour in response to uncertain ‘danger’in network experiments.
  Proceedings of the Royal Society A 476 (2237), pp. 20190685.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Stasser and Stewart (1992)
  G. Stasser and D. Stewart
  Discovery of hidden profiles by decision-making groups: solving a problem versus making a judgment.
  J. Pers. Soc. Psychol. 63 (3), pp. 426–434.
  Cited by: [§4.1](https://arxiv.org/html/2505.11556v4#S4.SS1.p1.1 "4.1 Adaptations from Human Studies ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Stasser and Titus (1985)
  G. Stasser and H. Titus
  Pooling of unshared information in group decision making: biased information sampling during discussion.
  Journal of Personality and Social Psychology 48 (6), pp. 1467.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§1](https://arxiv.org/html/2505.11556v4#S1.p4.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p2.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Sumita et al. (2024)
  Y. Sumita, K. Takeuchi, and H. Kashima
  Cognitive biases in large language models: a survey and mitigation experiments.
  arXiv preprint arXiv:2412.00323.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p3.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Sun et al. (2025)
  H. Sun, S. Zhang, L. Niu, L. Ren, H. Xu, H. Fu, F. Zhao, C. Yuan, and X. Wang
  Collab-overcooked: benchmarking and evaluating large language models as collaborative agents.
  In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing, C. Christodoulopoulos, T. Chakraborty, C. Rose, and V. Peng (Eds.),
  Suzhou, China, pp. 4922–4951.
  External Links: [Link](https://aclanthology.org/2025.emnlp-main.249/),
  [Document](https://dx.doi.org/10.18653/v1/2025.emnlp-main.249),
  ISBN 979-8-89176-332-6
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Swanson et al. (2024)
  K. Swanson, W. Wu, N. L. Bulaong, J. E. Pak, and J. Zou
  The virtual lab: ai agents design new sars-cov-2 nanobodies with experimental validation.
  bioRxiv, pp. 2024–11.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Toma and Butera (2009)
  C. Toma and F. Butera
  Hidden profiles and concealed information: strategic information sharing and use in group decision making.
  Personality and Social Psychology Bulletin 35 (6), pp. 793–806.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p1.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p2.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§4.1](https://arxiv.org/html/2505.11556v4#S4.SS1.p1.1 "4.1 Adaptations from Human Studies ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Wang et al. (2024)
  J. Wang, J. Wang, B. Athiwaratkun, C. Zhang, and J. Zou
  Mixture-of-agents enhances large language model capabilities.
  ArXiv abs/2406.04692.
  External Links: [Link](https://arxiv.org/pdf/2406.04692.pdf)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Wang et al. (2020)
  R. Wang, X. He, R. Yu, W. Qiu, B. An, and Z. Rabinovich
  Learning efficient multi-agent communication: an information bottleneck approach.
  In Proceedings of the 37th International Conference on Machine Learning, H. D. III and A. Singh (Eds.),
  Proceedings of Machine Learning Research, Vol. 119, pp. 9908–9918.
  External Links: [Link](https://proceedings.mlr.press/v119/wang20i.html)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Wegner (1987)
  D. M. Wegner
  Transactive memory: a contemporary analysis of the group mind.
  In Theories of group behavior,
  pp. 185–208.
  Cited by: [§2.2](https://arxiv.org/html/2505.11556v4#S2.SS2.p2.1 "2.2 Collective Reasoning Failures in Human Groups ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Wei et al. (2022)
  J. Wei, X. Wang, D. Schuurmans, M. Bosma, F. Xia, E. Chi, Q. V. Le, D. Zhou, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  Advances in neural information processing systems 35, pp. 24824–24837.
  Cited by: [§6.1](https://arxiv.org/html/2505.11556v4#S6.SS1.SSS0.Px2.p1.1 "Prompting Strategies. ‣ 6.1 Failures Persist Across Experimental Variations ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Woolley et al. (2010)
  A. W. Woolley, C. F. Chabris, A. Pentland, N. Hashmi, and T. W. Malone
  Evidence for a collective intelligence factor in the performance of human groups.
  Science 330 (6004), pp. 686–688.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Wu et al. (2024)
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. (. Zhu, L. Jiang, X. Zhang, S. Zhang, A. Awadallah, R. W. White, D. Burger, and C. Wang
  AutoGen: enabling next-gen llm applications via multi-agent conversation.
  In COLM 2024,
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Wu et al. (2020)
  S. Wu, H. R. Zhang, and C. Ré
  Understanding and improving information transfer in multi-task learning.
  arXiv preprint arXiv:2005.00944.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Xie et al. (2024a)
  C. Xie, C. Chen, F. Jia, Z. Ye, S. Lai, K. Shu, J. Gu, A. Bibi, Z. Hu, D. Jurgens, et al.
  Can large language model agents simulate human trust behavior?.
  In The Thirty-eighth Annual Conference on Neural Information Processing Systems,
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Xie et al. (2024b)
  J. Xie, K. Zhang, J. Chen, T. Zhu, R. Lou, Y. Tian, Y. Xiao, and Y. Su
  TravelPlanner: a benchmark for real-world planning with language agents.
  In Proceedings of the 41st International Conference on Machine Learning,
  ICML’24.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Xu et al. (2024)
  L. Xu, Z. Hu, D. Zhou, H. Ren, Z. Dong, K. Keutzer, S. Ng, and J. Feng
  MAgIC: investigation of large language model powered multi-agent in cognition, adaptability, rationality and collaboration.
  In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, Y. Al-Onaizan, M. Bansal, and Y. Chen (Eds.),
  Miami, Florida, USA, pp. 7315–7332.
  External Links: [Link](https://aclanthology.org/2024.emnlp-main.416/),
  [Document](https://dx.doi.org/10.18653/v1/2024.emnlp-main.416)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Yang et al. (2025)
  F. Yang, H. R. Zhang, S. Wu, C. Ré, and W. J. Su
  Precise high-dimensional asymptotics for quantifying heterogeneous transfers.
  Journal of Machine Learning Research 26 (113), pp. 1–88.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Zhang et al. (2024)
  C. Zhang, K. Yang, S. Hu, Z. Wang, G. Li, Y. Sun, C. Zhang, Z. Zhang, A. Liu, S. Zhu, et al.
  Proagent: building proactive cooperative agents with large language models.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 38, pp. 17591–17599.
  Cited by: [§1](https://arxiv.org/html/2505.11556v4#S1.p2.1 "1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs"),
  [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Zhang et al. (2023)
  H. Zhang, W. Du, J. Shan, Q. Zhou, Y. Du, J. Tenenbaum, T. Shu, and C. Gan
  Building cooperative embodied agents modularly with large language models.
  ArXiv abs/2307.02485.
  External Links: [Link](https://arxiv.org/pdf/2307.02485.pdf)
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Zhang et al. (2026)
  Z. Zhang, M. Duan, and H. R. Zhang
  Efficient estimation of kernel surrogate models for task attribution.
  arXiv preprint arXiv:2602.03783.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Zheng et al. (2023)
  Z. Zheng, O. Zhang, H. L. Nguyen, N. Rampal, A. H. Alawadhi, Z. Rong, T. Head-Gordon, C. Borgs, J. T. Chayes, and O. M. Yaghi
  Chatgpt research group for optimizing the crystallinity of mofs and cofs.
  ACS Central Science 9 (11), pp. 2161–2170.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p1.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Zhou et al. (2023)
  X. Zhou, H. Zhu, L. Mathur, R. Zhang, H. Yu, Z. Qi, L. Morency, Y. Bisk, D. Fried, G. Neubig, et al.
  Sotopia: interactive evaluation for social intelligence in language agents.
  arXiv preprint arXiv:2310.11667.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").
- Zhu et al. (2025)
  K. Zhu, H. Du, Z. Hong, X. Yang, S. Guo, D. Z. Wang, Z. Wang, C. Qian, R. Tang, H. Ji, et al.
  Multiagentbench: evaluating the collaboration and competition of llm agents.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 8580–8622.
  Cited by: [§2.1](https://arxiv.org/html/2505.11556v4#S2.SS1.p2.1 "2.1 Assessing Multi-Agent LLM Systems ‣ 2 Related Work ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs").

## Appendix A Appendix

### A.1 LLM Usage

Except for the study itself, which directly evaluates LLM capabilities, we used LLMs solely to polish the writing of this manuscript and not for any other purpose.

### A.2 Formalizing the Hidden Profile Paradigm

The Hidden Profile paradigm assesses collective reasoning under distributed information, where no single member has all the facts and success depends on integrating partial knowledge (Fig. [1](https://arxiv.org/html/2505.11556v4#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs") and Table [1](https://arxiv.org/html/2505.11556v4#S3.T1 "Table 1 ‣ 3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).
While widely applied in human studies, adapting it for LLMs requires formalizing the task structure, information distribution, and success criteria.
In this section, we provide that formalization as the basis for controlled experimentation and reproducible benchmark construction.

Let $N$ be the number of agents, indexed by $i=1,\dots,N$, and let $\mathcal{O}=\{o\_{1},o\_{2},\dots,o\_{K}\}$ be the set of $K$ possible decision options, among which there is a unique correct option $o^{\*}\in\mathcal{O}$.
The full set of task-relevant information $\mathcal{I}$ is divided into shared information $\mathcal{I}\_{s}\subset\mathcal{I}$, available to all agents, and unshared information $\mathcal{I}\_{u}=\mathcal{I}\setminus\mathcal{I}\_{s}$, distributed so that each agent $i$ receives a unique subset $\mathcal{I}\_{i}^{u}\subset\mathcal{I}u$ with $\bigcup{i=1}^{N}\mathcal{I}\_{i}^{u}=\mathcal{I}\_{u}$.
Each agent’s initial knowledge is $I\_{i}=\mathcal{I}\_{s}\cup\mathcal{I}\_{i}^{u}$.
Before communication, agent $i$ makes a pre-discussion decision $d\_{i}^{\text{pre}}=f(I\_{i})$.
Agents then exchange messages $M$ over $T$ rounds of communication, after which each makes a post-discussion decision $d\_{i}^{\text{post}}=f^{\prime}(I\_{i},M)$.

The Hidden Profile condition holds when the correct decision cannot be derived from any private information set alone, but becomes attainable once distributed knowledge is pooled through communication:
$\exists i\text{ such that }d\_{i}^{\text{pre}}\neq o^{\*}\quad\text{and}\quad f^{\prime}\left(\bigcup\_{i=1}^{N}I\_{i},M\right)=o^{\*}$.

To evaluate collective reasoning, we aggregate post-discussion decisions as accuracy using a group rule $A$: $Y^{\text{post}}=A(d\_{1}^{\text{post}},\dots,d\_{N}^{\text{post}})$.
We consider two rules: the average rule, which measures the proportion of agents selecting the correct option (our default measure of accuracy), and the majority rule, which records whether more than half of the agents select the correct option.

We compare the Hidden Profile post-discussion accuracy $Y^{\text{post}}$ against three reference points:

- •

  Hidden Profile pre-discussion accuracy: $Y^{\text{pre}}=A(d\_{1}^{\text{pre}},\dots,d\_{N}^{\text{pre}})$, providing a baseline for the effect of communication $M$.
- •

  Full Profile pre-discussion accuracy:
  $Y^{\text{full}}=A(d\_{1}^{\text{full}},\dots,d\_{N}^{\text{full}}),\quad\text{where }d\_{i}^{\text{full}}=f(\mathcal{I})$.
  This serves as an upper bound on individual reasoning, since each agent is given access to the entire information set $\mathcal{I}$.
- •

  Human group accuracy: $Y\_{H}=A(d\_{h\_{1}},\dots,d\_{h\_{N}})$, allowing direct comparison between LLM-agent groups and human groups under identical task conditions.

These references allow us to quantify the failure modes of multi-agent LLMs in scenarios where successful information integration is essential, as well as to empirically evaluate whether a task satisfies the Hidden Profile condition.
Tasks with low Full Profile pre-discussion accuracy (e.g., $<$ 80%) are unsolvable or too difficult even for individual reasoning, while tasks with high Hidden Profile pre-discussion accuracy (e.g., $>$ 20%) fail to distribute information adequately across individuals.
We apply these criteria in automated benchmark construction (Sec. [4.2](https://arxiv.org/html/2505.11556v4#S4.SS2 "4.2 Automatic Pipeline for Scalable Task Generation ‣ 4 HiddenBench: A Scalable Benchmark for Collective Reasoning ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")).

### A.3 Human Group Comparison

For comparison with LLMs, we conducted human-subject experiments with 96 participants (24 groups of four) recruited on Prolific ([Palan and Schitter, 2018](https://arxiv.org/html/2505.11556v4#bib.bib39)) in March, April, and August 2025.
Groups were assigned to one of three task scenarios (e.g., Table [1](https://arxiv.org/html/2505.11556v4#S3.T1 "Table 1 ‣ 3.1 Task setup ‣ 3 Hidden Profile Tasks for Multi-Agent LLMs ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")), yielding 8 sessions per scenario (24 sessions in total).
When randomly assigned to the Hidden or Full Profile condition, participants received asymmetric $I\_{i}$ as in the LLM setup.

Each participant first submitted a pre-discussion decision $d\_{i}^{\text{pre}}$, then engaged in a 15-minute group chat, and finally submitted a post-discussion decision $d\_{i}^{\text{post}}$.
Participants earned $1 for a correct final answer and another $1 if their group unanimously chose correctly.
The study was approved by an Institutional Review Board.

### A.4 Prompts and Communication Templates

[⬇](data:text/plain;base64,JWRlc2NyaXB0aW9uJQoKWW91IGhhdmUgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiwgbm90aWNlIHRoZSBvcmRlciBvZiB0aGVzZSBpbmZvcm1hdGlvbiBhcmUgcmFuZG9tbHkgc2h1ZmZsZSwgdGhlIG9yZGVyIG9mIGZhY3RzIGRvZXMgbm90IGluZGljYXRlIGltcG9ydGFuY2Ugb3IgcmVsYXRpb25zaGlwLCBwbGVhc2UgcmVhc29uIGNhcmVmdWxseToKJWluZm9ybWF0aW9uJQoKS2VlcCB5b3VyIHJlc3BvbnNlIGNvbmNpc2UtanVzdCBvbmUgb3IgdHdvIHNlbnRlbmNlcy4gJWV4dHJhJQ==)

%description%

You have received the following information, notice the order of these information are randomly shuffle, the order of facts does not indicate importance or relationship, please reason carefully:

%information%

Keep your response concise-just one or two sentences. %extra%

[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgZmlyc3QgdG8gc3BlYWsu)

You are the first to speak.

[⬇](data:text/plain;base64,UHJldmlvdXMgbWVzc2FnZXMgZnJvbSBvdGhlciBwZW9wbGU6CiVtZXNzYWdlcyUKSXQncyB5b3VyIHR1cm4gdG8gc3BlYWsuICVleHRyYSU=)

Previous messages from other people:

%messages%

It’s your turn to speak. %extra%

[⬇](data:text/plain;base64,UGxlYXNlIGRlY2lkZSBhbmQgcHJvdmlkZSB5b3VyIHJhdGlvbmFsZSBpbiB0aGUgZm9sbG93aW5nIEpTT04gZm9ybWF0Ogp7CiAgICAidm90ZSI6IDxBIHN0cmluZywgJXBvc3NpYmxlX2Fuc3dlcnMlPiwKICAgICJyYXRpb25hbGUiOiA8QSBzdHJpbmcsIHJlcHJlc2VudGluZyB5b3VyIHJhdGlvbmFsZT4KfQ==)

Please decide and provide your rationale in the following JSON format:

{

”vote”: <A string, %possible\_answers%>,

”rationale”: <A string, representing your rationale>

}

[⬇](data:text/plain;base64,UHJldmlvdXMgbWVzc2FnZXMgZnJvbSBvdGhlciBwZW9wbGU6CiVncm91cF9kaXNjdXNzaW9uJQpQbGVhc2UgZGVjaWRlIGFuZCBwcm92aWRlIHlvdXIgcmF0aW9uYWxlIGluIHRoZSBmb2xsb3dpbmcgSlNPTiBmb3JtYXQ6CnsKICAgICJ2b3RlIjogPEEgc3RyaW5nLCAlcG9zc2libGVfYW5zd2VycyU+LAogICAgInJhdGlvbmFsZSI6IDxBIHN0cmluZywgcmVwcmVzZW50aW5nIHlvdXIgcmF0aW9uYWxlPgp9)

Previous messages from other people:

%group\_discussion%

Please decide and provide your rationale in the following JSON format:

{

”vote”: <A string, %possible\_answers%>,

”rationale”: <A string, representing your rationale>

}

[⬇](data:text/plain;base64,V2hhdCB5b3UncmUgYnVpbGRpbmcKCkNyZWF0ZSBhIGdyb3VwIGRlY2lzaW9uIHRhc2sgd2hlcmU6Ci0gRXZlcnlvbmUgc2VlcyB0aGUgc2FtZSBzY2VuYXJpbyBhbmQgc2hhcmVkIGZhY3RzLgotIEVhY2ggcGFydGljaXBhbnQgYWxzbyBnZXRzIG9uZSB1bmlxdWUgaGlkZGVuIGZhY3QgdGhhdCBubyBvbmUgZWxzZSBoYXMuCi0gSWYgcGVvcGxlIHJlbHkgb25seSBvbiB0aGUgc2hhcmVkIGZhY3RzIHBsdXMgdGhlaXIgb3duIHNpbmdsZSBoaWRkZW4gZmFjdCwgdGhleSdsbCBiZSBwdWxsZWQgdG93YXJkIGEgc3BlY2lmaWMgd3Jvbmcgb3B0aW9uLgotIE9ubHkgYnkgc2hhcmluZyBhbGwgaGlkZGVuIGZhY3RzIGNhbiB0aGUgZ3JvdXAgc2VlIHRoYXQgb25lIG9wdGlvbiBpcyBkZWZpbml0ZWx5IGNvcnJlY3QgYW5kIHRoZSBvdGhlcnMgY2FuJ3QgYmUgcmlnaHQuCgpPdXRwdXQgZm9ybWF0IChtYXRjaCB0aGlzIHN0cnVjdHVyZSkKLSBuYW1lOiBBIHN0cmluZywgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSB0YXNrLgotIGRlc2NyaXB0aW9uOiBBIHNob3J0IHNjZW5hcmlvIGV2ZXJ5b25lIHNlZXMuCi0gc2hhcmVkX2luZm9ybWF0aW9uOiBBIGxpc3Qgb2YgZmFjdHMgZXZlcnlvbmUgc3RhcnRzIHdpdGguCi0gaGlkZGVuX2luZm9ybWF0aW9uOiBBIGxpc3Qgd2l0aCBvbmUgaXRlbSBwZXIgcGFydGljaXBhbnQuIChJZiB5b3UgaGF2ZSA0IHBhcnRpY2lwYW50cywgaW5jbHVkZSA0IGhpZGRlbiBpdGVtcy1vbmUgcGVyIHBlcnNvbi4pCi0gcG9zc2libGVfYW5zd2VyczogVGhlIHNldCBvZiBjaG9pY2VzIHRvIHBpY2sgZnJvbSAoaW5jbHVkZSBhdCBsZWFzdCB0aHJlZSkuCi0gY29ycmVjdF9hbnN3ZXI6IFRoZSBzaW5nbGUgY29ycmVjdCBjaG9pY2UgKG11c3QgYmUgb25lIG9mIHRoZSBvcHRpb25zKS4KCkRlc2lnbiBydWxlcyAobXVzdCBhbGwgYmUgdHJ1ZSkKLSBBdCBsZWFzdCB0aHJlZSBvcHRpb25zLiBFeGFjdGx5IG9uZSBpcyBjb3JyZWN0LgotIE9uZSBoaWRkZW4gaXRlbSBwZXIgcGFydGljaXBhbnQuIE5vIGl0ZW0gaXMgZHVwbGljYXRlZDsgZWFjaCBnb2VzIHRvIGV4YWN0bHkgb25lIHBlcnNvbi4KLSBTaGFyZWQgaW5mbyBpcyBtaXNsZWFkaW5nIG9uIGl0cyBvd24uIEl0IHNob3VsZCBuYXR1cmFsbHkgcG9pbnQgdGhlIGdyb3VwIHRvd2FyZCBhIHBhcnRpY3VsYXIgZGVjb3kgKGEgd3Jvbmcgb3B0aW9uKS4KLSBTaGFyZWQgaW5mbyArIGFueSBzaW5nbGUgaGlkZGVuIGl0ZW0gc3RpbGwgbWlzbGVhZHMuIElmIGEgcGFydGljaXBhbnQgY29uc2lkZXJzIG9ubHkgdGhlIHNoYXJlZCBpbmZvIGFuZCB0aGVpciBvd24gaGlkZGVuIGl0ZW0sIHRoZSBkZWNveSBzaG91bGQgc3RpbGwgbG9vayBiZXN0LgotIEFsbCBoaWRkZW4gaXRlbXMgdG9nZXRoZXIgcmV2ZWFsIHRoZSB0cnV0aC4gV2hlbiB0aGUgZ3JvdXAgcG9vbHMgZXZlcnkgaGlkZGVuIGl0ZW0sIHRoZSBkZWNveSBjbGVhcmx5IGZhaWxzIGFuZCB0aGUgY29ycmVjdCBhbnN3ZXIgaXMgdGhlIG9ubHkgY2hvaWNlIHRoYXQgZml0cyBhbGwgZmFjdHMuCi0gRXZlcnkgaGlkZGVuIGl0ZW0gbWF0dGVycy4gSWYgeW91IHJlbW92ZSBhbnkgb25lIGhpZGRlbiBpdGVtLCB0aGUgY29ycmVjdCBhbnN3ZXIgc2hvdWxkIG5vIGxvbmdlciBiZSB1bmlxdWVseSBpZGVudGlmaWFibGUuCgpTdGVwLWJ5LXN0ZXAgcmVjaXBlCjEuIFBpY2sgdGhlIGJhc2ljcy4KICAgLSBDaG9vc2UgdGhlIG51bWJlciBvZiBwYXJ0aWNpcGFudHMuCiAgIC0gQ2hvb3NlIGF0IGxlYXN0IHRocmVlIG9wdGlvbnMgYW5kIGRlY2lkZSB3aGljaCBvbmUgaXMgY29ycmVjdC4KICAgLSBDaG9vc2Ugb25lIGRlY295IG9wdGlvbiB5b3Ugd2FudCB0aGUgc2hhcmVkIGluZm8gdG8gZmF2b3IgYXQgZmlyc3QuCjIuIFdyaXRlIHRoZSBzaGFyZWQgaW5mb3JtYXRpb24uCiAgIC0gSW5jbHVkZSBzb2xpZCwgcGxhdXNpYmxlIGZhY3RzIHRoYXQgbWFrZSB0aGUgZGVjb3kgbG9vayBsaWtlIHRoZSBiZXN0IGNob2ljZSBiZWZvcmUgYW55IHNoYXJpbmcgaGFwcGVucy4KICAgLSBBdm9pZCBnaXZpbmcgYXdheSB0aGUgY29ycmVjdCBhbnN3ZXIgaGVyZS4KMy4gQ3JlYXRlIHRoZSBoaWRkZW4gaXRlbXMgKG9uZSBwZXIgcGFydGljaXBhbnQpLgogICAtIEVhY2ggaGlkZGVuIGl0ZW0gc2hvdWxkIGJlIGNyZWRpYmxlIGFuZCBkaWZmZXJlbnQgZnJvbSB0aGUgb3RoZXJzLgogICAtIE5vIHNpbmdsZSBoaWRkZW4gaXRlbSBzaG91bGQgYmUgZW5vdWdoIHRvIHByb3ZlIHRoZSBjb3JyZWN0IGFuc3dlciBieSBpdHNlbGYuCiAgIC0gQWNyb3NzIGFsbCBoaWRkZW4gaXRlbXMsIGluY2x1ZGUgdGhlIGRlY2lzaXZlIGRldGFpbHMgdGhhdDoKICAgLSBEaXNxdWFsaWZ5IHRoZSBkZWNveSBmcm9tIG11bHRpcGxlIGFuZ2xlcywgYW5kCiAgIC0gU2hvdyB3aHkgdGhlIGNvcnJlY3QgYW5zd2VyIGlzIHRoZSBvbmx5IG9uZSB0aGF0IHNhdGlzZmllcyBldmVyeXRoaW5nLgo0LiBEbyB0aGUgdGhyZWUgY2hlY2tzIChhbmQgcmV2aXNlIGlmIG5lZWRlZCkuCiAgIC0gU29sbyBjaGVjazogRm9yIGVhY2ggcGFydGljaXBhbnQsIGFzazogIldpdGggb25seSB0aGUgc2hhcmVkIGluZm8gYW5kIHRoaXMgcGVyc29uJ3MgaGlkZGVuIGl0ZW0sIHdoaWNoIG9wdGlvbiBsb29rcyBiZXN0PyIgSXQgc2hvdWxkIGJlIHRoZSBkZWNveSwgbm90IHRoZSBjb3JyZWN0IGFuc3dlci4KICAgLSBHcm91cCBjaGVjazogV2l0aCB0aGUgc2hhcmVkIGluZm8gYW5kIGFsbCBoaWRkZW4gaXRlbXMgY29tYmluZWQsIG9ubHkgdGhlIGNvcnJlY3QgYW5zd2VyIHNob3VsZCBzdGlsbCBtYWtlIHNlbnNlOyBldmVyeSBvdGhlciBvcHRpb24gc2hvdWxkIGNsYXNoIHdpdGggYXQgbGVhc3Qgb25lIGZhY3QuCiAgIC0gTWlzc2luZy1waWVjZSBjaGVjazogUmVtb3ZlIGFueSBvbmUgaGlkZGVuIGl0ZW0gYW5kIGNvbmZpcm0gdGhlIGNvcnJlY3QgYW5zd2VyIGlzIG5vIGxvbmdlciB1bmlxdWVseSBkZXRlcm1pbmVkLg==)

What you’re building

Create a group decision task where:

- Everyone sees the same scenario and shared facts.

- Each participant also gets one unique hidden fact that no one else has.

- If people rely only on the shared facts plus their own single hidden fact, they’ll be pulled toward a specific wrong option.

- Only by sharing all hidden facts can the group see that one option is definitely correct and the others can’t be right.

Output format (match this structure)

- name: A string, representing the name of the task.

- description: A short scenario everyone sees.

- shared\_information: A list of facts everyone starts with.

- hidden\_information: A list with one item per participant. (If you have 4 participants, include 4 hidden items-one per person.)

- possible\_answers: The set of choices to pick from (include at least three).

- correct\_answer: The single correct choice (must be one of the options).

Design rules (must all be true)

- At least three options. Exactly one is correct.

- One hidden item per participant. No item is duplicated; each goes to exactly one person.

- Shared info is misleading on its own. It should naturally point the group toward a particular decoy (a wrong option).

- Shared info + any single hidden item still misleads. If a participant considers only the shared info and their own hidden item, the decoy should still look best.

- All hidden items together reveal the truth. When the group pools every hidden item, the decoy clearly fails and the correct answer is the only choice that fits all facts.

- Every hidden item matters. If you remove any one hidden item, the correct answer should no longer be uniquely identifiable.

Step-by-step recipe

1. Pick the basics.

- Choose the number of participants.

- Choose at least three options and decide which one is correct.

- Choose one decoy option you want the shared info to favor at first.

2. Write the shared information.

- Include solid, plausible facts that make the decoy look like the best choice before any sharing happens.

- Avoid giving away the correct answer here.

3. Create the hidden items (one per participant).

- Each hidden item should be credible and different from the others.

- No single hidden item should be enough to prove the correct answer by itself.

- Across all hidden items, include the decisive details that:

- Disqualify the decoy from multiple angles, and

- Show why the correct answer is the only one that satisfies everything.

4. Do the three checks (and revise if needed).

- Solo check: For each participant, ask: ”With only the shared info and this person’s hidden item, which option looks best?” It should be the decoy, not the correct answer.

- Group check: With the shared info and all hidden items combined, only the correct answer should still make sense; every other option should clash with at least one fact.

- Missing-piece check: Remove any one hidden item and confirm the correct answer is no longer uniquely determined.

[⬇](data:text/plain;base64,QW4gZXhhbXBsZSB0YXNrOgp7CiAgICAibmFtZSI6ICJldmFjdWF0aW9uX3dlc3RfY2l0eSIsCiAgICAiZGVzY3JpcHRpb24iOiAiWW91IGFyZSBwYXJ0aWNpcGF0aW5nIGluIGEgc3R1ZHksIGFjdGluZyBhcyBhIGNvbW11bml0eSBsZWFkZXIgb2YgYSBzbWFsbCB2aWxsYWdlIHN1cnJvdW5kZWQgYnkgbW91bnRhaW5zIGFuZCByaXZlcnMuIE1vc3QgdmlsbGFnZXJzIG93biBjYXJzLCBidXQgdGhlcmUgYXJlIGFsc28gZWxkZXJseSBwZW9wbGUgYW5kIGNoaWxkcmVuIHdobyBtYXkgbmVlZCBhZGRpdGlvbmFsIGFzc2lzdGFuY2Ugd2hlbiB3YWxraW5nLiBFYXJsaWVyIHRvZGF5LCBoZWF2eSByYWluIGJlZ2FuIHRvIGZhbGwsIGFuZCB0aGUgbG9jYWwgZ292ZXJubWVudCBpc3N1ZWQgYSB3YXJuaW5nIGFib3V0IGEgcG90ZW50aWFsIGRpc2FzdGVyLgpIb3VycyBhZ28sIHlvdSByZXF1ZXN0ZWQgcmVsaWVmIHN1cHBsaWVzLCBidXQgdGhlIHN1cHBseSB0cnVjayBoYXMgeWV0IHRvIGFycml2ZS4gTm93LCB0aGUgcmFpbiBoYXMgdGVtcG9yYXJpbHkgc3RvcHBlZCwgZ2l2aW5nIHlvdSBhbmQgdGhlIG90aGVyIHRocmVlIGNvbW11bml0eSBsZWFkZXJzIGEgc2hvcnQgd2luZG93IHRvIGRlY2lkZSBvbiB0aGUgc2FmZXN0IGV2YWN1YXRpb24gcm91dGUgYmVmb3JlIHRoZSByYWluIHJlc3VtZXMuIFlvdSBkb24ndCBrbm93IGhvdyBtdWNoIHRpbWUgeW91IGhhdmUgbGVmdCB0byBtYWtlIHRoaXMgY3JpdGljYWwgZGVjaXNpb24uCllvdXIgVGFzazoKWW91IHdpbGwgZGlzY3VzcyB3aXRoIHRocmVlIG90aGVyIHBhcnRpY2lwYW50cywgd2hvIGFyZSBhbHNvIGFjdGluZyBhcyBjb21tdW5pdHkgbGVhZGVycywgdG8gZGVjaWRlIHdoZXJlIHRvIGV2YWN1YXRlLiBZb3UgaGF2ZSB0aHJlZSBvcHRpb25zOgotIFdlc3QgQ2l0eTogQWNjZXNzaWJsZSB0aHJvdWdoIGEgYnJpZGdlIG92ZXIgdGhlIHJpdmVyLgotIEVhc3QgVG93bjogQWNjZXNzaWJsZSB0aHJvdWdoIGEgdHVubmVsIG9uIG1pZGRsZSBncm91bmQuCi0gTm9ydGggSGlsbDogQWNjZXNzaWJsZSB0aHJvdWdoIGEgZHJpdmV3YXkgYW5kIHdhbGtpbmcgdHJhaWxzLgpVc3VhbGx5LCBpdCB0YWtlcyB0aGUgc2FtZSB0aW1lIHRvIHJlYWNoIGFsbCB0aHJlZSBwbGFjZXMgYnkgY2FyLCBidXQgc29tZSByb3V0ZXMgbWF5IGJlIGluYWNjZXNzaWJsZSBub3cuClRoZXJlIGlzIG9ubHkgb25lIGNvcnJlY3QgZXZhY3VhdGlvbiBsb2NhdGlvbi4gQWZ0ZXIgdGhlIGRpc2N1c3Npb246Ci0gSWYgeW91IGNob29zZSB0aGUgY29ycmVjdCBsb2NhdGlvbiwgeW91IHdpbGwgZWFybiAkMS4KLSBJZiBhbGwgb3RoZXIgcGFydGljaXBhbnRzIGFsc28gY2hvb3NlIHRoZSBjb3JyZWN0IGxvY2F0aW9uLCB5b3Ugd2lsbCBlYXJuIGFuIGFkZGl0aW9uYWwgJDEgKGZvciBhIHRvdGFsIG9mICQyKS4KVGhpcyBtZWFucyB0aGF0IGNvb3JkaW5hdGluZyB3aXRoIG90aGVycyBpcyBjcml0aWNhbCB0byBtYXhpbWl6ZSB5b3VyIHJld2FyZHMuIFRoZSBjaGF0IHdpbGwgYXQgbW9zdCB0YWtlIDE1IG1pbnV0ZXMuIEhvd2V2ZXIsIHRoZSBleGFjdCB0aW1lIHdoZW4gdGhlIGNoYXQgd2lsbCBlbmQgaXMgdW5rbm93bi4iLAogICAgInNoYXJlZF9pbmZvcm1hdGlvbiI6IFsKICAgICAgICAiVGhlIGxvY2FsIGdvdmVybm1lbnQgYW5ub3VuY2VkIHRoYXQgaG90ZWxzIGluIFdlc3QgQ2l0eSBhcmUgcHJlcGFyZWQgdG8gYWNjb21tb2RhdGUgZXZhY3VlZXMuIFdoaWxlIHRoZXNlIGhvdGVscyBhcmUgZnVsbHkgc3RvY2tlZCB3aXRoIGZvb2QsIHRoZXkgbWF5IGxhY2sgbWVkaWNhbCBzdXBwbGllcy4iLAogICAgICAgICJUaGUgbWF5b3Igb2YgRWFzdCBUb3duIGhhcyBvZmZlcmVkIGFjY29tbW9kYXRpb25zIGZvciBhbnkgZXZhY3VlZXMuIFNoZSBhbHNvIGVuc3VyZXMgdGhhdCB2b2x1bnRlZXJzIGFyZSBhdmFpbGFibGUgdG8gYXNzaXN0IHRoZW0uIiwKICAgICAgICAiVGhlIHNjaG9vbCBhdCBOb3J0aCBIaWxsIGNhbiBzZXJ2ZSBhcyBhIHRlbXBvcmFyeSBldmFjdWF0aW9uIGNlbnRlciwgcHJvdmlkaW5nIGEgdHdvLXdlZWsgc3VwcGx5IG9mIGVzc2VudGlhbHMgYW5kIHNsZWVwaW5nIHNwYWNlIGluIHRoZSBneW0uIiwKICAgICAgICAiVGhlIHJpdmVyIGxldmVsIGlzIHN0aWxsIGJlbG93IHRoZSBicmlkZ2UgdG8gV2VzdCBDaXR5LiIKICAgIF0sCiAgICAiaGlkZGVuX2luZm9ybWF0aW9uIjogWwogICAgICAgICJUaGUgc3VwcGx5IHRydWNrIGhlYWRlZCB0byB0aGUgdmlsbGFnZSBmcm9tIEVhc3QgVG93biB3YXMgc3R1Y2sgaW4gdGhlIHR1bm5lbC4iLAogICAgICAgICJBIG1hc3NpdmUgZmlyZSBoYXMgYmxvY2tlZCB0aGUgc3VwcGx5IHRydWNrIGFuZCBhbGwgb3RoZXIgdHJhZmZpYy4iLAogICAgICAgICJUaGUgd2Fsa2luZyB0cmFpbHMgaGF2ZSBiZWVuIGNsb3NlZCBzaW5jZSBsYXN0IHdlZWtlbmQgZHVlIHRvIGZhbGxlbiB0cmVlcy4iLAogICAgICAgICJTZXZlcmFsIHZpbGxhZ2VycyByZXBvcnRlZCB0aGF0IGEgbXVkc2xpZGUganVzdCBvY2N1cnJlZCwgY292ZXJpbmcgdGhlIGRyaXZld2F5IHRvIE5vcnRoIEhpbGwuIgogICAgXSwKICAgICJwb3NzaWJsZV9hbnN3ZXJzIjogWwogICAgICAgICJXZXN0IENpdHkiLAogICAgICAgICJFYXN0IFRvd24iLAogICAgICAgICJOb3J0aCBIaWxsIgogICAgXSwKICAgICJjb3JyZWN0X2Fuc3dlciI6ICJXZXN0IENpdHkiCn0KCkluIHRoaXMgZXhhbXBsZSwgd2hlbiBwYXJ0aWNpcGFudHMgc2VlIHRoZSBkZXNjcmlwdGlvbiwgdGhlIHNoYXJlZCBpbmZvcm1hdGlvbiBhbmQgb25lIHBpZWNlIG9mIGhpZGRlbiBpbmZvcm1hdGlvbiwgdGhleSB3aWxsIHNlbGVjdCBhIHdyb25nIGFuc3dlci4gQnV0IHdoZW4gdGhleSBzZWUgYWxsIHRoZSBpbmZvcm1hdGlvbiwgdGhleSB3aWxsIHNlZSB0aGF0IHRoZSBtYXNzaXZlIGZpcmUgaGFzIGJsb2NrZWQgdGhlIHdheSB0byBFYXN0IFRvd24sIGFuZCB0aGUgd2Fsa2luZyB0cmFpbHMgYW5kIGRyaXZld2F5IHRvIE5vcnRoIEhpbGwgYm90aCBhcmUgaW5hY2Nlc3NpYmlsZSwgbWFraW5nIFdlc3QgQ2l0eSB0aGUgb25seSB2YWxpZCBvcHRpb24u)

An example task:

{

”name”: ”evacuation\_west\_city”,

”description”: ”You are participating in a study, acting as a community leader of a small village surrounded by mountains and rivers. Most villagers own cars, but there are also elderly people and children who may need additional assistance when walking. Earlier today, heavy rain began to fall, and the local government issued a warning about a potential disaster.

Hours ago, you requested relief supplies, but the supply truck has yet to arrive. Now, the rain has temporarily stopped, giving you and the other three community leaders a short window to decide on the safest evacuation route before the rain resumes. You don’t know how much time you have left to make this critical decision.

Your Task:

You will discuss with three other participants, who are also acting as community leaders, to decide where to evacuate. You have three options:

- West City: Accessible through a bridge over the river.

- East Town: Accessible through a tunnel on middle ground.

- North Hill: Accessible through a driveway and walking trails.

Usually, it takes the same time to reach all three places by car, but some routes may be inaccessible now.

There is only one correct evacuation location. After the discussion:

- If you choose the correct location, you will earn $1.

- If all other participants also choose the correct location, you will earn an additional $1 (for a total of $2).

This means that coordinating with others is critical to maximize your rewards. The chat will at most take 15 minutes. However, the exact time when the chat will end is unknown.”,

”shared\_information”: [

”The local government announced that hotels in West City are prepared to accommodate evacuees. While these hotels are fully stocked with food, they may lack medical supplies.”,

”The mayor of East Town has offered accommodations for any evacuees. She also ensures that volunteers are available to assist them.”,

”The school at North Hill can serve as a temporary evacuation center, providing a two-week supply of essentials and sleeping space in the gym.”,

”The river level is still below the bridge to West City.”

],

”hidden\_information”: [

”The supply truck headed to the village from East Town was stuck in the tunnel.”,

”A massive fire has blocked the supply truck and all other traffic.”,

”The walking trails have been closed since last weekend due to fallen trees.”,

”Several villagers reported that a mudslide just occurred, covering the driveway to North Hill.”

],

”possible\_answers”: [

”West City”,

”East Town”,

”North Hill”

],

”correct\_answer”: ”West City”

}

In this example, when participants see the description, the shared information and one piece of hidden information, they will select a wrong answer. But when they see all the information, they will see that the massive fire has blocked the way to East Town, and the walking trails and driveway to North Hill both are inaccessibile, making West City the only valid option.

[⬇](data:text/plain;base64,UHJhY3RpY2FsIHRpcHMKLSBUaGluayBsaWtlIGEgbXlzdGVyeTogdGhlIHNoYXJlZCBpbmZvIHNldHMgdXAgYSBjb252aW5jaW5nLWJ1dCB3cm9uZy1maXJzdCBpbXByZXNzaW9uLiBUaGUgaGlkZGVuIGl0ZW1zIGFyZSB0aGUgY2x1ZXMgdGhhdCBvdmVydHVybiBpdCBvbmx5IHdoZW4gY29tYmluZWQuCi0gS2VlcCBlYWNoIGhpZGRlbiBpdGVtIHNob3J0IGFuZCBwcmVjaXNlIChvbmUgY2xlYXIgZmFjdCBwZXIgaXRlbSkuCi0gQXZvaWQgcmVkdW5kYW5jeTogZWFjaCBoaWRkZW4gaXRlbSwgb3IgdGhlIGNvbWJpbmF0aW9uIG9mIHR3byBpdGVtcywgc2hvdWxkIHJ1bGUgb3V0IG9yIGNvbmZpcm0gc29tZXRoaW5nIGRpZmZlcmVudC4KLSBJbiB5b3VyIG5vdGVzLCBtYWtlIGEgcXVpY2sgZWxpbWluYXRpb24gdGFibGUgKHJvd3MgPSBmYWN0cywgY29sdW1ucyA9IG9wdGlvbnMpLiBNYXJrIHdoaWNoIG9wdGlvbnMgc3Vydml2ZSBlYWNoIGZhY3QuIEJ5IHRoZSBlbmQsIG9ubHkgdGhlIGNvcnJlY3Qgb3B0aW9uIHNob3VsZCBzdXJ2aXZlIGFsbCByb3dzLgotIElmIHNvbWVvbmUgc2VlcyB0aGUgZGVzY3JpcHRpb24sIGFsbCBzaGFyZWQgYW5kIGFsbCBoaWRkZW4gZmFjdHMsIHRoZXkgc2hvdWxkIGlkZW50aWZ5IHRoZSBjb3JyZWN0IGFuc3dlciBiZWZvcmUgYW55IGRpc2N1c3Npb24uCi0gSWYgc29tZW9uZSBzZWVzIG9ubHkgdGhlIGRlc2NyaXB0aW9uLCB0aGUgc2hhcmVkIGZhY3RzIHBsdXMgb25lIGhpZGRlbiBmYWN0LCB0aGV5IHNob3VsZCBub3QgYmUgYWJsZSB0byBpZGVudGlmeSB0aGUgY29ycmVjdCBhbnN3ZXIgYmVmb3JlIGRpc2N1c3Npb24uCgpDcmVhdGUgb25lIG5ldyB0YXNrLiBSZXNwb25kIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ogp7CiAgICAicmF0aW9uYWxlIjogPEEgc3RyaW5nIHJlcHJlc2VudGluZyB5b3VyIHJhdGlvbmFsZSBmb3IgZGVzaWdpbmcgdGhpcyB0YXNrLiBUaGluayBzdGVwIGJ5IHN0ZXA6IHRoaW5rIGFib3V0IHRoZSBjYXNlIHdoZXJlIHBhcnRpY2lwYW50cyBjYW4gc2VlIHRoZSBjb21wbGV0ZSBpbmZvcm1hdGlvbiwgYW5kIHRoZSBjYXNlcyB3aGVyZSB0aGV5IGNhbiBvbmx5IHNlZSB0aGUgZGVzY3JpcHRpb24sIHRoZSBzaGFyZWQgaW5mb3JtYXRpb24gYW5kIG9uZSBwaWVjZSBvZiBoaWRkZW4gaW5mb3JtYXRpb24uIElmIHNvbWVvbmUgc2VlcyB0aGUgZGVzY3JpcHRpb24sIGFsbCBzaGFyZWQgYW5kIGFsbCBoaWRkZW4gZmFjdHMsIHRoZXkgc2hvdWxkIGlkZW50aWZ5IHRoZSBjb3JyZWN0IGFuc3dlciBiZWZvcmUgYW55IGRpc2N1c3Npb24uIElmIHNvbWVvbmUgc2VlcyBvbmx5IHRoZSBkZXNjcmlwdGlvbiwgdGhlIHNoYXJlZCBmYWN0cyBwbHVzIG9uZSBoaWRkZW4gZmFjdCwgdGhleSBzaG91bGQgbm90IGJlIGFibGUgdG8gaWRlbnRpZnkgdGhlIGNvcnJlY3QgYW5zd2VyIGJlZm9yZSBkaXNjdXNzaW9uLj4KICAgICJuYW1lIjogPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIHRhc2s+LAogICAgImRlc2NyaXB0aW9uIjogPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrPiwKICAgICJzaGFyZWRfaW5mb3JtYXRpb24iOiBbCiAgICAgICAgPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgYSBwaWVjZSBvZiBzaGFyZWQgaW5mb3JtYXRpb24+LAogICAgICAgIC4uLgogICAgXSwKICAgICJoaWRkZW5faW5mb3JtYXRpb24iOiBbCiAgICAgICAgPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgYSBwaWVjZSBvZiBoaWRkZW4gaW5mb3JtYXRpb24+LAogICAgICAgIC4uLgogICAgXSwKICAgICJwb3NzaWJsZV9hbnN3ZXJzIjogWwogICAgICAgIDxBIHN0cmluZywgcmVwcmVzZW50aW5nIGEgcG9zc2libGUgYW5zd2VyPiwKICAgICAgICAuLi4KICAgIF0sCiAgICAiY29ycmVjdF9hbnN3ZXIiOiA8QSBzdHJpbmcsIHJlcHJlc2VudGluZyB0aGUgY29ycmVjdCBhbnN3ZXI+Cn0=)

Practical tips

- Think like a mystery: the shared info sets up a convincing-but wrong-first impression. The hidden items are the clues that overturn it only when combined.

- Keep each hidden item short and precise (one clear fact per item).

- Avoid redundancy: each hidden item, or the combination of two items, should rule out or confirm something different.

- In your notes, make a quick elimination table (rows = facts, columns = options). Mark which options survive each fact. By the end, only the correct option should survive all rows.

- If someone sees the description, all shared and all hidden facts, they should identify the correct answer before any discussion.

- If someone sees only the description, the shared facts plus one hidden fact, they should not be able to identify the correct answer before discussion.

Create one new task. Respond in the following format:

{

”rationale”: <A string representing your rationale for desiging this task. Think step by step: think about the case where participants can see the complete information, and the cases where they can only see the description, the shared information and one piece of hidden information. If someone sees the description, all shared and all hidden facts, they should identify the correct answer before any discussion. If someone sees only the description, the shared facts plus one hidden fact, they should not be able to identify the correct answer before discussion.>

”name”: <A string, representing the name of the task>,

”description”: <A string, representing the description of the task>,

”shared\_information”: [

<A string, representing a piece of shared information>,

…

],

”hidden\_information”: [

<A string, representing a piece of hidden information>,

…

],

”possible\_answers”: [

<A string, representing a possible answer>,

…

],

”correct\_answer”: <A string, representing the correct answer>

}

[⬇](data:text/plain;base64,UGVyc29uIE4xOiAlTWVzc2FnZSBOMSUKUGVyc29uIE4yOiAlTWVzc2FnZSBOMiUKUGVyc29uIE4zOiAlTWVzc2FnZSBOMyU=)

Person N1: %Message N1%

Person N2: %Message N2%

Person N3: %Message N3%
