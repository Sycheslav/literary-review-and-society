---
id: arxiv-2609-24911-text
type: material
title: 'SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm'
work_id: arxiv-2609-24911
source_url: https://arxiv.org/html/2609.24911v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: a750fec08737bfb76549aac5b6587c7a958af753e0183fbe025e4caf4c788661
---

> Источник: [https://arxiv.org/html/2609.24911v1](https://arxiv.org/html/2609.24911v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm

Xinnong Zhang\*
  
Jiayu Lin\*
  
Jia Wang\*
  
Yixu Huang
  
Xinyi Mou
  
Yingqian Wu
  
Jingcong Liang
  
Shijun Lei
  
Jianing Shi
  
Guanying Li
  
Siyuan Wang
  
Hanjia Lyu
  
Zhenfei Yin
  
Yunlu Yin
  
Siming Chen
  
Yulan He
  
Jiebo Luo
  
Xuanjing Huang
  
Liyin Jin
  
Baohua Zhou
  
Hanqi Yan†
  
Zhongyu Wei†
Affiliation: 

1Shanghai Innovation Institute 2Fudan University 3King’s College London4Tongji University 5Northwestern Polytechnical University6The London School of Economics and Political Science 7The Chinese University of Hong Kong8Singapore Management University 9University of Oxford 10University of Rochester
Affiliation: 

xnzhang23@m.fudan.edu.cn, zywei@fudan.edu.cn

###### Abstract

Social simulation offers the social sciences an experimental instrument that the real world cannot supply, and generative agents have transformed it by acting as silicon samples that unite agent-based modeling with real behavioral data.
Existing platforms verify collective behavior, align simulated populations with real societies in cross-sections, and employ autonomous agents for the research process. However, two social science requirements remain without systematic support: intervention in the content of a simulation and the researcher’s control over the process that produces it.
We present SocioVerse2, which extends SocioVerse 1.0 into a human-AI co-evolutionary paradigm built from two loops and one infrastructure.
The *longitudinal simulation loop* simulates the target population with evolving environments and forks counterfactual branches via interventions.
The *controllable research loop* takes the study itself as an editable state and updates state versions via controllable editing.
The *social science agentic infrastructure* carries both loops through composable skills with researcher checkpoints, a population service over five persona pools, and an environment service over 21 real-world signal sources with point-in-time guarantees.
We validate SocioVerse2 across three case families and seven case studies, from reproducing canonical agent-based models to modeling policy processes on real records and nowcasting macro-economic indices beyond the response model’s knowledge cutoff.
With the human-AI co-evolutionary paradigm, these cases go beyond system demonstrations to become substantive studies that investigate frontier questions in their respective disciplines.
Code, data services, and a workbench are released as open-source resources.

Technical Report

|  |
| --- |
|  |

†††

Project page: <https://socioverse.fudan-disc.com/>

## 1 Introduction

Social simulations offer the social sciences an experimental instrument that the real world cannot supply: traditional field experiments are costly, hard to reproduce, and ethically bounded, while a simulated society places populations, environments, and interventions under direct control [[1](https://arxiv.org/html/2609.24911v1#bib.bib1), [2](https://arxiv.org/html/2609.24911v1#bib.bib2)]. Generative agents have further transformed social simulations. By combining rule-based agent-based modeling (ABM) with real-world behavioral data, they act as “silicon samples” capable of humanoid reasoning and natural-language expression [[3](https://arxiv.org/html/2609.24911v1#bib.bib3), [4](https://arxiv.org/html/2609.24911v1#bib.bib4)].
Recently, a fast-growing family of studies has built social simulators and platforms to expand the toolkit of social science research, from hand-built sandboxes [[5](https://arxiv.org/html/2609.24911v1#bib.bib5), [6](https://arxiv.org/html/2609.24911v1#bib.bib6)] to agent-operated workflows [[7](https://arxiv.org/html/2609.24911v1#bib.bib7), [8](https://arxiv.org/html/2609.24911v1#bib.bib8)], from reactive verification that reproduces known phenomena to proactive exploration that asks what would follow from conditions never observed, such as an untested policy [[9](https://arxiv.org/html/2609.24911v1#bib.bib9), [10](https://arxiv.org/html/2609.24911v1#bib.bib10)].

However, these platforms produce collective behaviors and simulated populations that rely solely on computational, systematic design and the abilities of autonomous agents [[11](https://arxiv.org/html/2609.24911v1#bib.bib11), [12](https://arxiv.org/html/2609.24911v1#bib.bib12), [13](https://arxiv.org/html/2609.24911v1#bib.bib13), [14](https://arxiv.org/html/2609.24911v1#bib.bib14), [15](https://arxiv.org/html/2609.24911v1#bib.bib15), [8](https://arxiv.org/html/2609.24911v1#bib.bib8)].
Recent audits show that autonomous research agents can fabricate results and drift from their announced plans, producing unqualified papers below publication standards [[16](https://arxiv.org/html/2609.24911v1#bib.bib16), [17](https://arxiv.org/html/2609.24911v1#bib.bib17), [18](https://arxiv.org/html/2609.24911v1#bib.bib18)].
Accordingly, the core requirements that facilitate social science lie in experimental intervention over research content and human scientists’ control over the research process.
Human involvement has been shown to be an effective means of mitigating base models’ limited transferability. Researcher feedback at each stage significantly improves agent-generated research [[19](https://arxiv.org/html/2609.24911v1#bib.bib19), [20](https://arxiv.org/html/2609.24911v1#bib.bib20)] and human decision gates raise the share of feasible hypotheses in empirical social science [[21](https://arxiv.org/html/2609.24911v1#bib.bib21)].
For such collaborative requirements between human researchers and autonomous agents, current social science simulation platforms offer little systematic support ([Section 2](https://arxiv.org/html/2609.24911v1#S2 "2 Background and Positioning ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

We formulate these considerations as a human–AI co-evolutionary paradigm along three dimensions.
Longitudinal Intervention: social phenomena emerge and evolve over time [[22](https://arxiv.org/html/2609.24911v1#bib.bib22), [23](https://arxiv.org/html/2609.24911v1#bib.bib23)]. During this dynamic process, designed intervention experiments are essential for isolating and studying different variables and supporting counterfactual hypotheses [[24](https://arxiv.org/html/2609.24911v1#bib.bib24), [25](https://arxiv.org/html/2609.24911v1#bib.bib25)]. Social simulation platforms should therefore create diverse control groups that cannot be simply reproduced from existing reality [[26](https://arxiv.org/html/2609.24911v1#bib.bib26), [27](https://arxiv.org/html/2609.24911v1#bib.bib27)], as shown along the y-axis of [Figure 1](https://arxiv.org/html/2609.24911v1#S1.F1 "In 1 Introduction ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").
Controllable Loop: as shown along the x-axis of [Figure 1](https://arxiv.org/html/2609.24911v1#S1.F1 "In 1 Introduction ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), early rigid sandboxes fix every simulation setting, including information flow, agentic framework, interactive topology, etc., and thus limit the evolving ability of silicon samples [[3](https://arxiv.org/html/2609.24911v1#bib.bib3), [5](https://arxiv.org/html/2609.24911v1#bib.bib5)]. In contrast, current autonomous research platforms leave the simulation entirely in the coding agent’s hands and pursue an end-to-end simulator [[7](https://arxiv.org/html/2609.24911v1#bib.bib7), [28](https://arxiv.org/html/2609.24911v1#bib.bib28)]. The importance of human-in-the-loop during the research process should be highlighted to create a controllable loop [[29](https://arxiv.org/html/2609.24911v1#bib.bib29), [30](https://arxiv.org/html/2609.24911v1#bib.bib30), [31](https://arxiv.org/html/2609.24911v1#bib.bib31)], especially in complex, iterative science experiments [[32](https://arxiv.org/html/2609.24911v1#bib.bib32), [33](https://arxiv.org/html/2609.24911v1#bib.bib33)].
Foundation Basis: beyond the base model’s ability, the quality of social simulations relies on the grounding data and agent infrastructure [[34](https://arxiv.org/html/2609.24911v1#bib.bib34)]. Behaviors generated during the simulation should align with real-world populations and environments [[35](https://arxiv.org/html/2609.24911v1#bib.bib35), [14](https://arxiv.org/html/2609.24911v1#bib.bib14), [36](https://arxiv.org/html/2609.24911v1#bib.bib36), [37](https://arxiv.org/html/2609.24911v1#bib.bib37)]. The system therefore must retrieve grounded information, assemble it into context, map it to actions, and update it iteratively through an adaptive agentic harness that expands the frontier of social science research.

In this paper, we present SocioVerse2 that aims to bridge the gap between current platforms and social science research requirements.
In SocioVerse 1.0, we organized simulation around four alignment-centered engines: the social environment, the user engine, the scenario engine, and the behavior engine [[14](https://arxiv.org/html/2609.24911v1#bib.bib14)].
SocioVerse2 carries this design forward and extends it into a human-AI co-evolutionary paradigm using *Two loops* and *One infrastructure*: the longitudinal simulation loop, the controllable research loop, and the social science agentic infrastructure ([Section 3](https://arxiv.org/html/2609.24911v1#S3 "3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The SocioVerse2 framework models social simulation as collective behaviors of silicon samples that depend on the joint effects of real-world heterogeneous populations and grounded social-environment signals, where a unified formulation is employed to demonstrate both the simulation loop and research loop (§[3.1](https://arxiv.org/html/2609.24911v1#S3.SS1 "3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). We explain the implementation of the longitudinal feature in the simulation loop (§[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), then introduce intervention operations that create branches to compare counterfactuals and variables (§[3.3](https://arxiv.org/html/2609.24911v1#S3.SS3 "3.3 Intervention and Counterfactual Branching in Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). We introduce controllable editing in the research loop, enabling diverse versions across the research process (§[3.4](https://arxiv.org/html/2609.24911v1#S3.SS4 "3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). Human social scientists can engage through both loops by designing counterfactual experiments, providing feedback, and making adjustments, thereby enabling co-evolution between humans and social science agents.
The loops are supported by a social science agentic infrastructure, including a complete lifecycle workflow and two standard model context protocols (MCP) for population alignment and environment grounding ([Section 4](https://arxiv.org/html/2609.24911v1#S4 "4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

We validate SocioVerse2 across three case families and seven case studies with systematic evaluation methods (§[5.1](https://arxiv.org/html/2609.24911v1#S5.SS1 "5.1 Evaluation Methods ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
*Simulation mechanisms* focus on interpretation of social mechanisms and phenomena in different social science fields (§[5.2](https://arxiv.org/html/2609.24911v1#S5.SS2 "5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
*Policy simulation* studies the potential results during the policymaking process (§[5.3](https://arxiv.org/html/2609.24911v1#S5.SS3 "5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
*Macro-index forecasting* uses real-world deterministic indices and signals as ground truth to evaluate the framework’s quantitative performance (§[5.4](https://arxiv.org/html/2609.24911v1#S5.SS4 "5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
Each family carries its own real-world grounding, and together they cover simulation goals from verifying known dynamics to estimating future potentials, from helping design policies to predicting indices ahead of time.
The two loops turn these cases from single runs into practical research. Every mechanism probe in the designs, from the intervention of the opinion dynamics to the ablations of the policy forecasting, is either a branch raised inside the simulation loop or a version raised by the researcher in the research loop, so that each reported gain is attributable to a controlled change of the population, the environment, or the behavior function. Researchers enter both loops in every case, declaring interventions, replacing components after inspecting the panel records, and deciding which version is reported, and it is this collaboration rather than one autonomous pass that carries a case to a result validated against ground truth.

In general, our contributions are:

- •

  A Dynamic Longitudinal Simulation Framework. We formalize the shift from cross-sectional prediction to longitudinal trajectory simulation.
- •

  A Human-AI Co-evolutionary Research Paradigm. We combine autonomous agents with human social scientists in two collaborative and co-evolutionary loops via interventions and editable components.
- •

  A Social Science Agentic Infrastructure. We release the SocioVerse2 runtime as a modular open-source package, together with standardized MCP services for population alignment and environment grounding, an agentic skill pipeline, and an online research workbench that make the entire study lifecycle auditable and reproducible.

human designs all $\longleftarrow$ Human–AI Cooperation $\longrightarrow$ agents run allSimulation GoalsHandcrafted Sandboxeverything fixed before the runHuman-AI Harmoniousresearchers steer, agents operateAutonomous Agentsagents run the study end to endReactiveVerificationProactiveExploration


Verifying Behaviors
Generative Agents $\cdot$ S3 $\cdot$ EconAgent

Replicating Real Records
HiSim $\cdot$ GA-1000

Configurable Scenarios
Concordia $\cdot$ OASIS

Cross-Sectional Alignment
AgentSociety $\cdot$ SocioVerse 1.0

Agentic Research Environment
AgentSociety 2

End-to-End AI Researcher
YuLan-OneSim
reached by prior platformsgoal frontierBeyond the Frontier:Limited by Agent Capability & ExpertiseSocioVerse2co-evolution![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/tw_people.png)![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/tw_globe.png)interventioncontrol

Figure 1: 
The development of existing LLM social simulation platforms along two axes: human-AI cooperation (x-axis) and simulation goals (y-axis). Our SocioVerse2 supports proactive exploration via integrating agentic infrastructure and counterfactual intervention capabilities based on the user query, also backed up by the human-in-the-loop control for better quality assurance.

## 2 Background and Positioning

Table 1: Representative LLM social simulation platforms, sorted by release date. ✓= supported, $\circ$ = partial, — = not supported.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Platform | Foundation Basis | | Human–AI | Simulation | Open |
|  | Real $P$ | Real $E$ | Division of Labor | Goal | Source |
| Generative Agents [[3](https://arxiv.org/html/2609.24911v1#bib.bib3)] | — | — | handcrafted | verify behaviors | ✓ |
| S3 [[5](https://arxiv.org/html/2609.24911v1#bib.bib5)] | $\circ$ | $\circ$ | handcrafted | verify behaviors | — |
| Concordia [[6](https://arxiv.org/html/2609.24911v1#bib.bib6)] | — | — | configured | verify behaviors | ✓ |
| EconAgent [[38](https://arxiv.org/html/2609.24911v1#bib.bib38)] | $\circ$ | — | handcrafted | stylized facts | ✓ |
| HiSim [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)] | $\circ$ | ✓ | handcrafted | real-data match | ✓ |
| GA-1000 [[12](https://arxiv.org/html/2609.24911v1#bib.bib12)] | ✓ | — | handcrafted | real-data match | $\circ$ |
| OASIS [[15](https://arxiv.org/html/2609.24911v1#bib.bib15)] | $\circ$ | $\circ$ | configured | verify behaviors | ✓ |
| AgentSociety [[13](https://arxiv.org/html/2609.24911v1#bib.bib13)] | $\circ$ | ✓ | configured | real-data match | ✓ |
| SocioVerse 1.0 [[14](https://arxiv.org/html/2609.24911v1#bib.bib14)] | ✓ | ✓ | configured | real-data match | ✓ |
| YuLan-OneSim [[7](https://arxiv.org/html/2609.24911v1#bib.bib7)] | $\circ$ | $\circ$ | autonomous agents | verify behaviors | ✓ |
| AgentSociety 2 [[8](https://arxiv.org/html/2609.24911v1#bib.bib8)] | ✓ | ✓ | agentic, human-steered | reproduce prior studies | ✓ |
| SocioVerse2 | ✓ | ✓ | human-AI harmonious | proactive exploration | ✓ |

Since large language models became the decision engine of social simulation agents, platforms have proliferated, and [Figure 1](https://arxiv.org/html/2609.24911v1#S1.F1 "In 1 Introduction ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") maps them on the two axes along which they differ.
*Human-AI Cooperation* describes how a study is operated, from entirely human experts’ handcrafted design to full agent automation. At one end, the hand-crafted sandbox fixes the information flow and interaction topology. The configurable framework relaxes this by exposing the population, the environment, and the scenario as parameters.
At the other end, autonomous agents take a question, carry out experiments independently, and finally return a report. Human researchers provide little feedback during the whole loop. We aim for harmonious collaboration in the middle, where agents operate the machinery interactively, guided by researchers’ feedback.

*Simulation Goals* describe what a study is for, from passive execution to active design. Reactive verification asks whether a simulation reproduces known behavior patterns or phenomena, and the results are expected. Proactive exploration asks what would happen from current conditions, which requires introducing unknown interventions in the simulation and modifying the simulation structure, rather than only observing it.

Within this landscape, the literature has advanced in three successive waves.

- •

  Verifying behaviors in hand-built worlds. Generative Agents [[3](https://arxiv.org/html/2609.24911v1#bib.bib3)] placed 25 LLM-driven characters in a hand-built village and demonstrated for the first time that LLM agents could spontaneously spread information, form relationships, and coordinate collective activities. Subsequent systems carried this evidence to social-network and macroeconomic settings [[5](https://arxiv.org/html/2609.24911v1#bib.bib5), [38](https://arxiv.org/html/2609.24911v1#bib.bib38)], and Concordia [[6](https://arxiv.org/html/2609.24911v1#bib.bib6)] and OASIS [[15](https://arxiv.org/html/2609.24911v1#bib.bib15)] recast the hand-built sandbox as a configurable framework, the latter scaling to one million agents. In this wave, the run itself remains closed: its trajectory is not an object of study, and nothing can be intervened on once it has started.
- •

  Alignment with real societies. A second wave anchored simulation in real data. Within predefined scenarios, HiSim [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)] aligned simulated discourse with real social-media contexts and Generative Agent–1000 [[12](https://arxiv.org/html/2609.24911v1#bib.bib12)] constructed agents from interviews with 1,000 real individuals. Among configurable platforms, AgentSociety [[13](https://arxiv.org/html/2609.24911v1#bib.bib13)] embedded 10k agents in realistic urban infrastructure and SocioVerse 1.0 [[14](https://arxiv.org/html/2609.24911v1#bib.bib14)] aligned simulated populations to census marginals over a large real-user pool. This wave improves the simulation fidelity, but the comparison it draws is cross-sectional. Real data also enters as a dataset assembled once per study, so changing the population or the environment means collecting it again.
- •

  Research automation by agentic workflows. The most recent wave hands off the research process itself to agents. YuLan-OneSim [[7](https://arxiv.org/html/2609.24911v1#bib.bib7)] pairs code-free, agent-operated scenario construction that takes a topic and finishes the loop on its own, from environment construction through report review. AgentSociety 2 [[8](https://arxiv.org/html/2609.24911v1#bib.bib8)] couples AI social scientists and silicon participants in one runtime. The autonomous agents in this wave turn to actively execute to solve researchers’ questions, while the research purpose is fixed once initialized. The lack of human steering restricts agents’ global view of the research scope. The researcher is left with gated approval over what the agent exposes, not full control of the edit.

SocioVerse2 supplies the missing capability, offering dynamic longitudinal simulation operated through a human-AI coevolutionary paradigm.
SocioVerse2 complements end-to-end research automation via intervention and counterfactual experiments within the simulation and human-controllable loop outside the research process. On the other hand, SocioVerse2 strengthens the configured framework via lifecycle agentic infrastructure and data MCPs. Standing at the intersection of professional human social scientists’ expertise and efficient agents’ automation, we believe SocioVerse2 builds a promising and powerful paradigm for the next era of social simulation.

Research Treetrunk: versions $\cdot$ branches: runsstep $E\_{t}$branch $\delta$outputversionroots:real-world materials$P$population$E$environment$f$behavior$\Theta$settings$E\_{1}$$E\_{2}$$E\_{3}$$E\_{4}$$E^{\prime}\_{3}$$E^{\prime}\_{4}$$\delta$$\Delta$$\sigma\_{1}$$\sigma\_{2}$$\sigma\_{3}$$\sigma\_{k}$$a\_{1}$$a\_{2}$$a\_{3}\cdots a\_{k-1}$$k$$\sigma\_{1}=(P,\,E\_{0:T},\,f,\,\Theta)$


one run


one version updatebuildsstudy stateLongitudinal Simulation Loop


Enabling longitudinal interventions and comparing counterfactual outcomes with the control
group through branches.
$E\_{t}$$B\_{t}$$E\_{t+1}$$\cdots$$E\_{T}$(§[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"))$f$$g$$E^{\prime}\_{t+1}$$\cdots$$E^{\prime}\_{T}$(§[3.3](https://arxiv.org/html/2609.24911v1#S3.SS3 "3.3 Intervention and Counterfactual Branching in Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"))intervention $\delta$ at step $t$Controllable Research Loop (§[3.4](https://arxiv.org/html/2609.24911v1#S3.SS4 "3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"))


Applying controllable edits to any component of the study state to adjust the research
process across versions.
$\sigma\_{k}$$a\_{k}$$\sigma\_{k+1}$$h$edit on any of $P$, $E$, $f$, $\Theta$Social Science Agentic Infrastructure


Supporting the entire research tree through an agentic workflow and two data MCPs.
Agentic Workflow(§[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"))Population MCP(§[4.2](https://arxiv.org/html/2609.24911v1#S4.SS2 "4.2 The Multi-Source Persona Pool and the Population MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"))Event MCP(§[4.3](https://arxiv.org/html/2609.24911v1#S4.SS3 "4.3 Real-World Signal Sources and the Event MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"))$P$$E$

Figure 2: An illustration of the SocioVerse2 framework, depicted as a research tree: overall pipeline shown on the left and detailed expansion on the right. From bottom to the top, the agentic infrastructure provides the research workflow and data to support the system, with initiated study state denoted as $\sigma\_{1}$ consisting $P$, $E$, $f$, and $\Theta$; then the state will be continually updated to $\sigma\_{k}$ for whole system evolvement, which is conducted through the component edits $\alpha\_{k}$ generated in controllable research loop; in each updated version $\sigma\_{k}$, we have the longitudinal simultation loop, in which we conduct counterctual thinking to derive multiple branches $E$ and $E^{\prime}$ via the intervention $\delta$ at step $t^{\*}$. Human researchers can engage in both loops to provide counterfactual design and system-refinement guidance.

## 3 SocioVerse2 Human-AI Co-evolutionary Paradigm

[Section 3](https://arxiv.org/html/2609.24911v1#S3 "3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") and [Section 4](https://arxiv.org/html/2609.24911v1#S4 "4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") present the SocioVerse2 framework as two loops and one agentic infrastructure, revealing three levels of granularity in social science research: from one step to one branch, and finally the whole tree of runs that a study focuses on, as shown in [Figure 2](https://arxiv.org/html/2609.24911v1#S2.F2 "In 2 Background and Positioning ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"). We first formalize the necessary preliminaries in §[3.1](https://arxiv.org/html/2609.24911v1#S3.SS1 "3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), then we detail every component. Typically, given a research question, the researcher and the social science agent collaborate through a longitudinal simulation loop and a controllable research loop, supported by social science agentic infrastructure. The longitudinal simulation loop directly runs the target simulation experiment step by step through iterations between simulated behaviors and the environment (§[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), and enables interventions and comparison of counterfactual outcomes with the control group through branches (§[3.3](https://arxiv.org/html/2609.24911v1#S3.SS3 "3.3 Intervention and Counterfactual Branching in Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). The controllable research loop manages different versions throughout the research process by applying edits to any component of the study state (§[3.4](https://arxiv.org/html/2609.24911v1#S3.SS4 "3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

### 3.1 Overview and Formalization

##### Theoretical Foundation.

Lewin’s field theory [[39](https://arxiv.org/html/2609.24911v1#bib.bib39)] expresses a foundational insight of social psychology: behavior arises jointly from the person and the environment.
We adopt the theory here for a practical formulation: it separates the population and environment and therefore provides a compact expression for both the passage of time and an introduced intervention.
SocioVerse 1.0 [[14](https://arxiv.org/html/2609.24911v1#bib.bib14)] realized the relation as alignment-centered components.
SocioVerse2 develops this line from single decisions into a social process: behavior computed at one step reshapes the environment that conditions the next, and the researcher’s interventions enter the same environment and propagate through the same loop. Outside the loop, the social process itself is editable under the guidance of human researchers.

##### The SocioVerse2 Abstraction.

SocioVerse2 condenses social simulation into

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$B=f(P,\,E),$$ |  | (1) |

where $P$ is the population, $E$ the environment, $f$ the behavior engine, and $B$ the resulting behavior.
The abstraction is powerful precisely because its three terms are independently replaceable: $P$ may be drawn from a real-world user pool or synthesized from census marginals. $E$ may be grounded in live event streams or designed for a stylized experiment. $f$ may be a classical ABM rule, an LLM prompt chain, a learned reinforcement-learning policy, or a hybrid of these.
Any social simulation scenario, from Schelling segregation to macro-economic nowcasting, can be expressed as an instantiation of [Equation 1](https://arxiv.org/html/2609.24911v1#S3.E1 "In The SocioVerse2 Abstraction. ‣ 3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"). Consequently, an intervention can be viewed as an operation on $E$ with $P$ and $f$ held fixed, and a controlled adjustment can be viewed as modifying any components among $B,f,P$ and $E$.

##### Longitudinal Simulation Loop.

SocioVerse2 formulates the inner simulation and outer research process as two loops.
Within a simulation run, the environment carries the consequences of behavior forward: the population acts on the environment of step $t$, and the behaviors it produces give the environment of step $t+1$.
Then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\underbrace{E\_{t+1}=g\bigl(E\_{t},\;B\_{t}\bigr)}\_{\text{simulation loop, step }t}$$ |  | (2) |

where $g$ is the update function of $E$. §[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") details the simulation loop in one step, from $E\_{t}$ to $E\_{t+1}$, and §[3.3](https://arxiv.org/html/2609.24911v1#S3.SS3 "3.3 Intervention and Counterfactual Branching in Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") further explains the intervention on the simulation loop, branching $E^{\prime}\_{t+1}$ based on $E\_{t}$.

##### Controllable Research Loop.

Across runs, the research process itself moves in the same shape.
Let $\sigma=(P,\,E\_{0:T},\,f,\,\Theta)$ denote the *study state*, which implies the current version snapshot of the whole system during the research. $\Theta$ denotes the collection of the metrics, the resource manifest, and the seed.
Then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\underbrace{\sigma\_{k+1}=h\bigl(a\_{k},\;\sigma\_{k}\bigr)}\_{\text{research loop, version }k}$$ |  | (3) |

where $a\_{k}$ is an *edit* on the study state and $h$ is the mapping function that applies it, producing the study state of the next version.
The edit can be proposed by either the agentic workflow or human researchers, and §[3.4](https://arxiv.org/html/2609.24911v1#S3.SS4 "3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") expands the research loop through versions, from $\sigma\_{k}$ to $\sigma\_{k+1}$. SocioVerse2 enables the human-AI co-evolution through these two loops under a unified iterative update form.

##### Social Science Agentic Infrastructure.

In SocioVerse2, the population $P$ is the set of agents (or silicon samples) whose behaviors the simulation tracks. Generally, a population is fixed with the initialization of the study to provide persistent subjects for the social simulation. The environment $E$ is the sum of information external to the agents that shapes their behavior. Generally, the environment is orchestrated along two orthogonal axes: modality and scope. Modality separates the *physical* world from the *information* world (i.e., geography and urban facilities v.s. news and policies), while scope separates *macro* context from *micro* context (i.e., broadcast v.s. direct message). Both $P$ and $E$ are assembled by a skill-based agentic research pipeline (§[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), where real-world data is acquired via standard MCPs across studies (§[4.2](https://arxiv.org/html/2609.24911v1#S4.SS2 "4.2 The Multi-Source Persona Pool and the Population MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") and §[4.3](https://arxiv.org/html/2609.24911v1#S4.SS3 "4.3 Real-World Signal Sources and the Event MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

### 3.2 The Longitudinal Simulation Loop

This subsection answers how $E\_{t}$ evolves into $E\_{t+1}$. We expand the simulation loop of [Equation 2](https://arxiv.org/html/2609.24911v1#S3.E2 "In Longitudinal Simulation Loop. ‣ 3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") into detailed steps that the engine actually executes.
Let $P=\{p\_{1},\dots,p\_{N}\}$ be the fixed population and $\{E\_{t}\}\_{t=0}^{T}$ the environment sequence.
At each step, the environment first evolves exogenously, then each agent observes the context, decides, and generates the action:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$e\_{t}^{i}=\omega(E\_{t},\,p\_{i}),\qquad b\_{i,t}=f\bigl(p\_{i},\;e\_{t}^{i},\;m\_{i,t}\bigr),\qquad B\_{t}=\{b\_{i,t}\}\_{i=1}^{N},\qquad E\_{t+1}=g\bigl(E\_{t},\;B\_{t}\bigr),$$ |  | (4) |

where $\omega$ is the observation operator that projects the global environment onto agent $i$. The term $m\_{i,t}=\mu(b\_{i,t-W:t-1})$ is the agent’s bounded memory of its own recent actions, $B\_{t}$ collects the step’s individual behaviors, and $g$ updates them back into the environment.
The engine executes [Equation 4](https://arxiv.org/html/2609.24911v1#S3.E4 "In 3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") as a fixed sequence of module calls, each with declared inputs and outputs.
[Figure 3](https://arxiv.org/html/2609.24911v1#S3.F3 "In 3.2.1 Overall Step Sequence ‣ 3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") shows the data that moves along the five phases of one step with an example.

#### 3.2.1 Overall Step Sequence

At step 0, the population provider materializes $P$ from the population bundle under the declared seed, assigning each agent an identifier that is never reused, and the environment provider builds $E\_{0}$. The initial states are recorded as the first panel rows, and no decision is computed.
Every later step $t$ runs five phases in a fixed order.

We take the Chicago segregation case in §[5.3.1](https://arxiv.org/html/2609.24911v1#S5.SS3.SSS1 "5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") as an example here, which studies households living in 781 census tracts in Chicago. Each household decides at every step whether to stay or move to another tract, and the population composition of the tracts changes as households move. Examples in [Figure 3](https://arxiv.org/html/2609.24911v1#S3.F3 "In 3.2.1 Overall Step Sequence ‣ 3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") show details from $E\_{2}$ to $E\_{3}$ in this study.

1. 1.

   Exogenous update. The environment provider reads the scheduled events and broadcasts whose trigger step equals $t$, applies each event to its physical layer, activates each broadcast for its time-to-live, and returns the list of activated items. An intervention enters here as an additional event or broadcast and is processed by the same call as the study’s regular schedule.
   In the example, step 2 activates a scheduled event that adds two transit stations to tract 17031612000, together with a citywide news broadcast and a ward notice addressed to one district.
2. 2.

   Observe. For every agent, the environment provider assembles one observation along modality and scope axes.
   In the example, households in tract 17031843800 receive the citywide news in their macro-information field, while the ward notice is addressed to another district, which belongs to other’s local-information field and does not appear in their observations.
3. 3.

   Decide. The decision model receives the batch of observations together with each agent’s memory window and returns one action per agent: an action type (move, stay, post, etc.), a payload with the type-specific content (a destination, a text, a number, etc.), a first-person rationale, and a source label stating whether the decision came from an LLM, a rule, a fallback, or a replay. In the example, the household’s action is a “move”, whose payload names the target tract 17031842600, and its rationale reads “safety offsets low own-group share”.
4. 4.

   Apply. The environment provider collects the actions into the layer state, which realizes $E\_{t+1}=g(E\_{t},B\_{t})$. All actions within a round are updated synchronously at the end of the round. In the example, 93 households intend to move at $E\_{2}$, 37 moves are executed, and the racial shares of the affected tracts are recomputed, which yields $E\_{3}$.
5. 5.

   Record. The engine appends one panel row per agent, one metrics row computed by the study’s metric collector, and pushes each agent’s final action into its memory window. In the example, $E\_{2}$ records 570 panel rows, including one row per household and one metrics row logging the Black–White dissimilarity index $D\_{bw}=0.8724$ and movers.

1 Exogenous update

2 Observe

3 Decide

4 Apply

5 Record
eventbroadcastlayers of $E\_{t}$


example (Chicago, step 2)
  
event: $+2$ stations, tract 17031612000
  
broadcast: citywide news; ward notice
physicalinformationlocalmacro$t$memory window


example (household in 17031843800)
  
sees the citywide news
  
ward notice out of scope
$f$personaobservationmemorytypedactionrule $\cdot$ LLM $\cdot$ RL $\cdot$ hybrid


example kind: move; payload: target 17031842600; rationale: “safety offsets low own-group share”; source: LLM
$E\_{t+1}=g(E\_{t},\,B\_{t})$budgets $\cdot$ capslayers of $E\_{t+1}$


example
  
93 move intents, 37 executed
  
tract shares recomputed

|  |  |  |
| --- | --- | --- |
| agent | step | action |
| …3800-0 | 2 | move |
| …2600-0 | 2 | stay |
| …0400-0 | 2 | move |

$N$ panel rows1 metrics row


example
  
570 panel rows
  
metrics: $D\_{bw}$ 0.8724, 37 movers
$E\_{t}$$B\_{t}$$E\_{t+1}$$B\_{t}=f(P,\,E\_{t})$$E\_{t+1}=g(E\_{t},\,B\_{t})$phases 2 to 4 repeat for $K$ interaction rounds


Schedule of $E$
events and broadcasts due at $t$

Population $P$
persistent identifiers
$t\to t{+}1$Environment state $E$  persists across stepsphysical layersinformation layersmessage busTrajectory storepanelmetricseventspersists across stepsactivated interventions

Figure 3: An illustration of the mechanism within one step of the longitudinal simulation loop. (1) The environment’s schedule update events and broadcast for the current step $E\_{t}$; (2) each agent observes the environment along modality and scope axes; (3) the agent then decides a typed action through the behavior function given the population features, observation, and its memory; (4) given current collective behavior $B\_{t}$, the environment is updated for the next step $E\_{t+1}$; (5) all the information within a step is recorded as a trajectory during the research.

#### 3.2.2 Implementations of a Step

The three components below detail the implementations and configurations in the longitudinal simulation loop.

##### Persona Declarations.

Beyond identity, each persona specifies three study-relevant properties: (1) a cohort label that groups demographically similar agents for efficient batched decision-making (e.g., an archetype representing an ethnic group), (2) an optional sampling weight when a small agent set represents a larger population, and (3) an initial state that seeds its situation at step 0 (a home tract, an initial opinion, a starting budget).
A study also declares the social connection among its agents, through spatial adjacency, an explicit social network, or no interaction at all, and the propagation of influence along those connections, from fully independent decisions to contagion-style local spread to broadcast-then-discussion patterns typical of social media.
Messages between connected agents travel through a mediated bus and are delivered by neighbor lookup, so an agent’s local-information field carries the posts of its network neighbors from earlier rounds of the current step and from the previous step.

##### Memory Window.

Each agent owns a bounded window of its own recent actions, eight steps by default and configurable per study. Because the window is filled from the actions that the panel records, it can be rebuilt exactly from the panel table, allowing a branched run to inherit its agents’ histories.

##### Behavior Function.

The decision model is the only component that computes $f$, and because every implementation returns the typed action of phase 3, the environment and the record store are independent of the mechanism that produced a decision.
Four behavior functions are implemented.
*Rule-$f$* evaluates a classical update rule and serves as the parity baseline.
*LLM-$f$* composes the persona, the four observation fields, and the memory window into a prompt, parses the structured reply into an action.
*RL-$f$* maps observations to actions through a trained policy, one per class of strategic actor, and enters the workspace through an adapter.
*Hybrid-$f$* assigns different implementations to different agent groups within one run, typically LLM-$f$ for a small core and rule-$f$ for the remainder.
The typed-action contract is also what makes the rule-versus-LLM comparison possible, since both implementations act in the same discrete action space.

environment bundle


scheduled event
layer $\cdot$ step $\cdot$ op
value $\cdot$ selector $\cdot$ note

broadcast
content $\cdot$ channel $\cdot$ step
time-to-live $\cdot$ audience
$\delta=(t^{\*},\,\mathrm{op})$$E\_{t^{\*}-1}$$E^{\prime}\_{t^{\*}}=\mathrm{op}\bigl(E\_{t^{\*}}\bigr)$$E^{\prime}\_{t^{\*}+1}$


events table
one row per activation

metrics row at $t^{\*}$
carries the note

(a) A declared intervention entering a run

(b) Replay-based branching in an opinion-diffusion study

Figure 4: (a) An intervention is a scheduled event or a broadcast in the environment bundle, activated in the exogenous phase of step $t^{\*}$. (b) A branch is created when an intervention is activated. The example branch inherits its parent’s first four steps by replay, without decision calls, and diverges afterward. The treatment branch adds a media campaign at step 5, while the control branch remains the same.

### 3.3 Intervention and Counterfactual Branching in Simulation Loop

This subsection answers how $E\_{t}$ branches into $E^{\prime}\_{t+1}$ given intervention $\delta$. We describe what an intervention does to the simulation loop and how a counterfactual experiment becomes computable.
A longitudinal study is rarely a single run: the researcher declares an intervention, compares the intervened run with the controlled run, and returns to the study with a revised question.
Two mechanisms carry that comparison, both operating on the artifacts of the previous subsection: an intervention is an entry in the environment bundle that the exogenous-update phase activates at its step, so it is declarative and auditable, and a *branch* is a run that inherits a parent’s recorded rows through replay.

An intervention $\delta=(t^{\*},\,\mathrm{op})$ names a fork step $t^{\*}$ and an operation $\mathrm{op}$. The branch shares its parent’s history through step $t^{\*}{-}1$, the exogenous phase of step $t^{\*}$ applies $\mathrm{op}$ to the environment, and the loop then carries the change forward, which is the simulation counterpart of an intervention on the environment with $P$ and $f$ held fixed. Primed symbols denote the intervened branch, as in [Figure 2](https://arxiv.org/html/2609.24911v1#S2.F2 "In 2 Background and Positioning ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$E^{\prime}\_{t}=E\_{t}\;\;(t<t^{\*}),\qquad E^{\prime}\_{t}=\mathrm{op}\bigl(E\_{t}\bigr)\;\;(t=t^{\*}),\qquad E^{\prime}\_{t+1}=g\bigl(E^{\prime}\_{t},\,B^{\prime}\_{t}\bigr)\;\;(t>t^{\*}).$$ |  | (5) |

A *branch* of a parent run at fork step $t^{\*}$ keeps the parent’s realized behavior up to $t^{\*}$ and computes only what follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$b^{\prime}\_{i,t}=\begin{cases}b\_{i,t},&t<t^{\*}\quad\text{(replayed)},\\[2.0pt] f\bigl(p\_{i},\;\omega(E^{\prime}\_{t},p\_{i}),\;m^{\prime}\_{i,t}\bigr),&t\geq t^{\*},\end{cases}$$ |  | (6) |

where $B^{\prime}\_{t}=\{b^{\prime}\_{i,t}\}\_{i=1}^{N}$ and the memory window $m^{\prime}\_{i,t}$ are built from the branch’s own actions after $t^{\*}$.
Because $P$, $f$, and the seed are the same objects in both branches and their histories are identical up to $t^{\*}$, the difference between an intervened branch and a control branch is attributable to $\delta$ alone:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Delta\_{t}(\delta)\;=\;Y\bigl(E^{\prime}\_{t}\bigr)-Y\bigl(E\_{t}\bigr),\qquad t\geq t^{\*},$$ |  | (7) |

where $Y$ is any quantity measured from the environment or the panel at step $t$, and $E\_{t}$ is the control branch, which shares the same history through $\{0:t^{\*}{-}1\}$ and receives no operation.
[Equation 7](https://arxiv.org/html/2609.24911v1#S3.E7 "In 3.3 Intervention and Counterfactual Branching in Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") enables the counterfactual design that reality never supplies or hypotheses during theory verifications.

##### Declared Interventions.

An *intervention* is an entry in the environment bundle, implemented in two types: a scheduled event or a broadcast ([Figure 4(a)](https://arxiv.org/html/2609.24911v1#S3.F4.sf1 "In Figure 4 ‣ Behavior Function. ‣ 3.2.2 Implementations of a Step ‣ 3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
A scheduled event names a physical layer, a step, a numeric operation, a value, and a selector for the affected units, together with a note. A broadcast carries an information content, a channel, a step, a time-to-live, and an audience that is either everyone or a selector.
An intervention is verified to ensure every event targets a declared layer, and every broadcast requires a declared information layer.
Both kinds activate in the exogenous phase of their step, before any agent observes, and the engine writes each activation to the events table and attaches the notes to that step’s metrics row, so the change in a metric series is read against before the intervention.

##### Replay-based Branching.

A branch is a new run that inherits a parent run’s first $t^{\*}{-}1$ steps and diverges afterward.
The engine produces it by replay: it materializes $P$ and $E\_{0}$ from the same bundles and seed, then for steps $1$ to $t^{\*}{-}1$ activates the parent’s schedule, reads the parent’s stored actions for that step from its panel table, applies them to the environment with the source label replay, pushes them into the agents’ memory windows, and records the resulting rows. From step $t^{\*}$, it calls the decision model as usual.
Because the environment transition of a study is a function of the recorded actions, the replayed rows reproduce the parent’s rows exactly. The environment reaches the same $E\_{t^{\*}{-1}}$, and each agent resumes with the same memory window it had in the parent.
Two branches forked from the same parent therefore share an identical realized history, and everything that differs between them after step $t^{\*}$ is attributable to the schedules declared for the steps after the fork.
[Figure 4](https://arxiv.org/html/2609.24911v1#S3.F4 "In Behavior Function. ‣ 3.2.2 Implementations of a Step ‣ 3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") shows the mechanism in an opinion-diffusion study: a parent run of eight steps is forked at step 4 into a control branch with no further intervention and a treatment branch whose bundle adds a media campaign at step 5. The two branches reproduce the parent’s rows for steps 0 to 4 exactly, invoke the decision model only for steps 5 to 8, and diverge from step 5.
The same mechanism extends a finished run to a longer horizon at no cost for the inherited steps and resumes an interrupted run from its last completed step.

### 3.4 The Controllable Research Loop

This subsection answers how to control the study state version, from $a\_{k}$ to $a\_{k+1}$. We step outside the simulation loop, extending to the research loop in which the research itself is updated.
The [Equation 3](https://arxiv.org/html/2609.24911v1#S3.E3 "In Controllable Research Loop. ‣ 3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") carries two objects, an edit action $a\_{k}$ on the study state and the map $h$ that applies it.
The research agent may raise an edit $a\_{k}$ from the reasoning over last trajectory. The researcher may raise it directly as well on any artifact and at any stage of the study via either verbalized instructions, additional materials, or direct code modifications.
What the researcher holds is therefore not a veto over agent proposals but authorship of the edit itself, and the loop is *controllable* in that stronger sense: the research process is editable at every point, not merely approvable at the points an agent chooses to expose.

Let an edit be a pair $a\_{k}=(c,\,u)$, where $c\subseteq\{P,E,f,\Theta\}$ names the components of $\sigma$ it modifies and $u$ is the update applied to them, and let $\sigma[\,c\leftarrow u\,]$ denote $\sigma$ with those components replaced. Then three cases exhaust $h$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\sigma\_{k+1}=h\bigl(\sigma\_{k},\,(c,u)\bigr)=\begin{cases}\sigma\_{k},&c=\varnothing,\;\text{unchanged}\\[3.0pt] \sigma\_{k}\bigl[\,E\_{t^{\*}:T}\leftarrow u\,\bigr],&c=\{E\},\;\text{branch}\\[3.0pt] \sigma\_{k}\bigl[\,c\leftarrow u\,\bigr],&\text{otherwise},\;\text{version}\end{cases}$$ |  | (8) |

which are respectively no change, a branch at fork step $t^{\*}$, and a new version.
The first case keeps the loop reversible. As every version snapshots its entire workspace, $\sigma\_{k}$ is always traceable, so declining an edit or undoing one already applied can be realized at every stage.

Study State $\sigma\_{k}$


$P$   population bundle

$E\_{0:T}$   environment bundle and schedule

$f$   model module

$\Theta$   metrics, resources, seed
Study Treeeach node is a study state $\sigma$


$\sigma\_{1}$ baseline
8 steps, no intervention

$\sigma\_{2}$ control branch
replayed to $K$

$\sigma\_{3}$ treatment branch
campaign $\delta$ at $K{+}1$

$\sigma\_{4}$ pool replaced
same $E$, same $f$

$\sigma\_{5}$ longer horizon
extends $\sigma\_{2}$ to $2T$

$\sigma\_{6}$ rule-$f$ ablation
same $P$, same $E$
branchbranch $+\,\delta$new versionpaired contrastbranch: inherits the parent’s historyversion: a fresh run from edited artifactsedit applied hereApplicable Edit $a\_{k}$


replace the population
changes $P$

vary the schedule
changes $E$

swap the behavior function
changes $f$

repin the data sources
changes $\Theta$

Figure 5: The controllable research loop as a tree of versions. An edit $a\_{k}$ may be raised by the researcher or by an agent and reaches any component of the study state, and every version snapshots its whole workspace, so the parent is always restorable.

##### Versions.

Every branch, extension, or re-run is a version of the same study ([Figure 5](https://arxiv.org/html/2609.24911v1#S3.F5 "In 3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
A version manifest in the study workspace lists each version with its identifier, parent version, note, creation time, and, for branches, the source version and fork step. Creating a version snapshots the complete workspace of the current version, including the code, bundles, trajectory, and reports, so that earlier results remain inspectable and re-runnable.
The iterate skill (§[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) creates versions on request and re-enters the workflow at the earliest stage a change affects. Notably, the branch differs from the version in the edit domain. A branch changes $E$ alone, holding $P$, $f$, and the seed fixed, and inheriting the parent’s realized history, which belongs precisely to the inner longitudinal simulation loop. In contrast, a *version* may change any artifact arbitrarily, so it does not inherit a history. Instead, it supports comparing one study design with another.

##### Applicable Controls.

Because $P$, $E$, and $f$ are separate replaceable artifacts and every run is a version with a recorded lineage, a study can grow by adding versions that vary one axis while holding the others fixed:

- •

  Population replacement. The same environment and behavior function can be applied to a different demographic composition (Census-synthesized U.S. adults versus personas from an open pool), testing whether findings generalize across populations.
- •

  Environment variation. The same population and behavior function can be exposed to fundamentally different environments (changing cities or interaction topologies for the same target groups), enabling controlled comparisons of environmental effects that can not be realized by event or broadcasting interventions.
- •

  Behavior-function ablation. Applying rule-$f$, LLM-$f$, and hybrid-$f$ on the same $(P,E)$ pair can isolating the decision model.
- •

  Data-source substitution. A different vintage of economic indicators or a different user pool through the resource manifest alone ([Section 4](https://arxiv.org/html/2609.24911v1#S4 "4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), with no change to model code.

These designs can be combined together and applied in one version to provide a comprehensive result.
All versions store the records under the same contract, so a per-step metric or a per-agent trajectory is compared across versions with one query.

##### Human-AI Co-evolutionary Paradigm.

Through the longitudinal simulation loop and controllable research loop, SocioVerse2 provides a paradigm in which human social scientists and autonomous agents collaborate and evolve with the research progression. This human-AI co-evolutionary paradigm sits in the middle of the landscape of [Section 2](https://arxiv.org/html/2609.24911v1#S2 "2 Background and Positioning ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") and draws on both of its ends at once. Autonomous agents get professional and experienced insights from human experts, filling the gap in transformational ability. Human researchers benefit from the efficient agentic infrastructure and generative agent-based simulation platforms, realizing innovation in research tools.
We expect the human-AI co-evolutionary paradigm rather than either extreme to carry the next generation of social science simulation.

## 4 Social Science Agentic Infrastructure

[Section 3](https://arxiv.org/html/2609.24911v1#S3 "3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") defines what a study *is*. This section describes what it takes to run one, and it is the substance of our third contribution: the social science agentic infrastructure that carries both loops of [Section 3](https://arxiv.org/html/2609.24911v1#S3 "3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"). It materializes a study state $\sigma$ from real data, executes the longitudinal simulation loop on it, and gives the controllable research loop the named points at which an edit $a\_{k}$ is raised, applied by $h$, and recorded.
It is organized in three layers.
The workflow layer decomposes the research lifecycle into composable skills, each of which reads the artifacts of earlier stages, writes one validated artifact of its own, and pauses for a researcher decision, so that the controllable research loop of §[3.4](https://arxiv.org/html/2609.24911v1#S3.SS4 "3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") is realized at named points rather than in principle (§[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The service layer supplies a population service that anchors $P$ to real people and a signal service that grounds $E$ in real-world data, both exposed as typed model context protocol (MCP) tools rather than as datasets copied into a study (§[4.2](https://arxiv.org/html/2609.24911v1#S4.SS2 "4.2 The Multi-Source Persona Pool and the Population MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") and §[4.3](https://arxiv.org/html/2609.24911v1#S4.SS3 "4.3 Real-World Signal Sources and the Event MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The governance layer records what each stage did, which data it used, and what the researcher approved, so that a finished study can be audited and re-run (§[4.4](https://arxiv.org/html/2609.24911v1#S4.SS4 "4.4 Governance, Auditability, and Reproducibility ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The runtime, the two services, and the case configurations are released as open-source packages, and an online workbench drives the same skills from a browser for researchers who do not work at a terminal.

Keeping the services outside the framework is what makes both loops practical. Whenever the study changes, the agentic research pipeline can query MCPs instantly to build new environment orchestration or population distribution accordingly.
The population and environment sources therefore remain independently replaceable, the same typed interface serves both the internal skill pipeline and external agent ecosystems, and a third party can implement a compatible MCP server without modifying the framework.
The infrastructure is also where the co-evolutionary paradigm meet. Agents operate the skills and query the services, and the researcher’s edits enter through the same typed artifacts and checkpoints, so that a change raised by either side is applied, validated, and recorded in one place (§[4.4](https://arxiv.org/html/2609.24911v1#S4.SS4 "4.4 Governance, Auditability, and Reproducibility ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

### 4.1 Agentic Research Pipeline

[Section 3](https://arxiv.org/html/2609.24911v1#S3 "3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") defines the simulation engine. This subsection describes the workflow layer that operates it, and it is where the controllable research loop of §[3.4](https://arxiv.org/html/2609.24911v1#S3.SS4 "3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") becomes concrete: each skill is a stage at which an edit $a\_{k}$ can be raised, and each checkpoint is a point at which the edit is applied with the researcher’s knowledge.
SocioVerse2 takes a complementary approach compared to previous studies: the research lifecycle is decomposed into reusable skills, each of which reads the artifacts of earlier stages, writes one validated artifact of its own, and pauses for review, so that every intermediate result is inspectable and every decision point is recorded.

##### Skill Contracts.

[Table 2](https://arxiv.org/html/2609.24911v1#S4.T2 "In Skill Contracts. ‣ 4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") lists the seven skills with their inputs, their output artifacts, and the gate that closes each stage.
Every artifact is a typed document validated on write and on read, so a document that fails validation cannot cross a stage boundary, and all artifacts of a study live in one workspace directory, which is therefore the complete state of the study.
report denotes the reporting stage as a whole: analysis of the trajectory store, literature grounding of the findings, and manuscript drafting, which the implementation realizes as separate skills under one entry point.

init
route A/B/C

build
model

build
env + pop

run
simulate

report
analyze
study specdecision modelenv + pop bundlestrajectory datareport + figureshuman checkpointresearchquestioniterate: modify $\to$ re-enter at earliest affected stage

Figure 6: The agentic research pipeline: composable skills each emit one validated artifact with a human checkpoint in between. init routes a query to reuse (A), build-from-scratch (B), or adapt-legacy (C). iterate enables post-run refinement cycles.


Table 2: Skill contracts of the research pipeline: inputs, output artifacts, and the gate that closes each stage.

|  |  |  |  |
| --- | --- | --- | --- |
| Skill | Inputs | Outputs | Gate |
| init | research query, study catalog, Event MCP | study definition, grounding record, resource manifest | intent confirmation |
| build-model | study definition, reference studies | model module | assembly check |
| build-environment | study definition, grounding record, Event MCP | environment bundle | schema validation |
| build-population | study definition, environment bundle, Population MCP | population bundle, roster | schema validation |
| run | model module, environment and population bundles | simulation configuration, trajectory store | spend confirmation |
| report | trajectory store, grounding record, literature service | report with figures, literature review, manuscript draft | researcher review |
| iterate | change request, version manifest | new version, re-entry stage | version choice |

##### Checkpoints.

Each skill pauses after writing its artifact and summarizes what it produced, and the researcher decides whether to advance by default. A researcher who prefers to run the whole pipeline can enable auto mode as well.
Four decisions are always put to the researcher: (1) confirmation of the intent brief before a study is created, (2) the choice between a new version, an in-place edit, and a branch before an existing study is changed, (3) the expected cost before a run that calls a language model, and (4) the use of any data service whose terms require per-study confirmation.
Every answer is logged with the study, so the audit trail records both what the pipeline did and what the researcher approved.

##### Three Onboarding Paths.

When a user describes a research need, init consults the study catalog and routes the query along one of three paths:

- •

  Path A (reuse/adjust). The query closely matches an existing study. The skill forks the matched study into a new study with its own version history, preserving the original as a read-only reference, and the user adjusts artifacts (population scale, intervention schedule) without writing code.
- •

  Path B (build from scratch). No existing study matches. build-model writes a model module that implements the engine’s four component interfaces. The engine assembles it from the component registry.
- •

  Path C (adapt legacy). The user has an existing simulator to integrate. An engine-seam adapter wraps the legacy code with zero modification, projecting its internal state onto the SocioVerse2 artifacts.

Together the three paths form the framework’s extensibility contract, covering parameter variation, new research topics, and incremental migration of existing simulation ecosystems.

### 4.2 The Multi-Source Persona Pool and the Population MCP

On the population side, the Population MCP is a multi-source aggregation service: it unifies five sub-pools, two internal real-user pools and three open persona pools, under one demographic label vocabulary. All the pools can be used aggregately to cover the research requirement.
The registered sources together span roughly one billion addressable persona records, of which 10,448,375 are locally indexed and queryable ([Table 3](https://arxiv.org/html/2609.24911v1#S4.T3 "In Pool Composition. ‣ 4.2 The Multi-Source Persona Pool and the Population MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

##### Pool Composition.

[Table 3](https://arxiv.org/html/2609.24911v1#S4.T3 "In Pool Composition. ‣ 4.2 The Multi-Source Persona Pool and the Population MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") summarizes the five sub-pools.
The internal pools inherit the real-user asset introduced in SocioVerse 1.0 [[14](https://arxiv.org/html/2609.24911v1#bib.bib14)]: 973,928 profiles from X/Twitter and 9,158,404 from Xiaohongshu/RedNote, for a combined 10,132,332 records. These profiles are tagged with demographic attributes through an LLM annotation pipeline with human review.
The preprocessed records are locally indexed for retrieval and sampling and serve as *anchor pools* contributing real users with real behavioral text. The cross-pool field union reaches 40 queryable fields, of which roughly 20 belong to a canonical demographic vocabulary (age, gender, education, income, marital status, employment, religion, ideology, race/ethnicity, region, urbanicity, occupation, seniority, party, children, political engagement, and others).

Table 3: Sub-pools registered in the Population MCP, grouped by origin. “Indexed” counts locally indexed, queryable persona records. “Fields” counts structured demographic fields available for routing.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Category | Source | Indexed | Fields | Role |
| Internal real users | SocioVerse 1.0 X/Twitter | 973,928 | 10 | anchor, real behavioral text |
| SocioVerse 1.0 RedNote | 9,158,404 | 8 | anchor, Chinese-language context |
| Open persona pools | Nemotron-Personas USA | 59,994 | 7 | anchor / complement, census-aligned |
| MatrAIx Persona 1M | 56,583 | 20 | complement, high-dimensional |
| PersonaHub | 199,466 | — | retrieval and text material |


Request
marginals, attributes, $N$, seed

Route
anchor, complements

Sample
draw and join records

Align
IPF to marginals

Synthesize
uncovered attributes, labeled

Assemble
persona + persistent id
Population MCP


Population $P$
aligned, with provenance

X/Twitter

RedNote

Nemotron-USA

MatrAIx 1M

PersonaHub
five sub-pools, one shared vocabularyschemasrecords

Figure 7: One call to the Population MCP. A request specifies target marginals, required attributes, size, and seed. The service routes it across the five registered pools, samples and joins records, aligns them to the marginals by IPF, synthesizes what no pool covers under a synthetic label, and assembles the study population $P$ with persistent identifiers and attribute provenance.

##### Open Pools.

Three open pools extend coverage along different axes, and each enters the service with an explicitly documented capability boundary.
Nemotron-Personas USA [[40](https://arxiv.org/html/2609.24911v1#bib.bib40)] contributes synthetic personas aligned to U.S. Census marginal distributions, each with a free-text persona description, and serves as a fully open counterpart to the internal pools for reproducible research.
MatrAIx Persona 1M [[41](https://arxiv.org/html/2609.24911v1#bib.bib41)] contributes the widest demographic schema, spanning 1,290 categorical dimensions upstream, from which we adopt the eighteen most analytically useful. Its authors state that the corpus is calibrated only on one-dimensional marginals and does not represent any real population, and a substantial share of its persona texts is generated from attributes, so records of this kind are labeled and never treated as real behavioral data.
PersonaHub [[42](https://arxiv.org/html/2609.24911v1#bib.bib42)] is the largest connected corpus, on the order of one billion synthetic personas, but is text-only: it carries no structured demographic fields, so it participates in retrieval and as textual material while being excluded, by design, from any distributional sampling.
New pools join through a declarative registration that records the source, its persona and demographic fields, and its attribution and usage terms. Adding an open dataset requires only this registration and a one-time normalization of its records into the shared vocabulary.

##### Multi-pool Routing and Demand-driven Synthesis.

Studies with practical research problems often require persona attributes that no single pool fully covers.
For any requested set of attributes, the Population MCP identifies an *anchor pool* with the highest coverage, *complement pools* that contribute missing dimensions through statistical matching on shared attributes, and any attributes that remain uncovered.
Uncovered attributes are filled by *conditioned synthesis*: the missing values are generated conditional on each persona’s existing demographic profile, preserving the attribute correlations observed in the data.
When a study requires joint-distribution fidelity, iterative proportional fitting reweights the pool’s observed joint distribution to match the declared target marginals, preserving the attribute correlations present in the data.
If the target marginals call for population cells that no pool supports, the service either supplies clearly labeled synthetic respondents so that the delivered population still matches the requested margins, or, at the researcher’s choice, excludes those cells and reports the gap.
In both modes, coverage limitations are reported explicitly.

##### Service Interface.

The Population MCP exposes ten typed tools organized into four functional groups.
*Discovery* lists the registered pools, describes their schemas, and queries value distributions.
*Routing* performs cross-pool field matching with coverage analysis.
*Retrieval* covers profile search and individual lookup.
*Simulation* runs end-to-end population sampling with optional IPF reweighting and parallel LLM questionnaire execution.

##### A Standard Flow.

The standard flow from the user pool to a study’s $P$ runs in six steps, as shown in [Figure 7](https://arxiv.org/html/2609.24911v1#S4.F7 "In Pool Composition. ‣ 4.2 The Multi-Source Persona Pool and the Population MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").
(1) Declare target marginal distributions, taken from census tables, survey microdata, or domain knowledge.
(2) Route to the best-matching pool or pools via cross-pool field matching.
(3) Sample from the anchor pool and complement missing dimensions from secondary pools via statistical matching on shared keys.
(4) Apply IPF to align the joint distribution to target marginals.
(5) Synthesize any remaining unresolved attributes conditioned on existing demographics, recording the source of every attribute for later attribution.
(6) Assemble each persona with demographic tags, a natural-language profile, and domain-specific initial state.
The agentic research pipeline is compatible with both the Population MCP and any user-uploaded population files.
A study can equally draw its population from a researcher-supplied data file or from a study-specific construction, and in every case the population is materialized once at initialization, deterministically under a declared seed, so that repeating a study reproduces exactly the same set of agents and the panel key of §[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") remains stable across versions.

### 4.3 Real-World Signal Sources and the Event MCP

On the environment side, the Event MCP serves 21+ structured signal sources with point-in-time guarantees.

##### Signal Source Catalog.

The Event MCP aggregates 21 structured data sources organized into four categories ([Table 4](https://arxiv.org/html/2609.24911v1#S4.T4 "In Signal Source Catalog. ‣ 4.3 Real-World Signal Sources and the Event MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
Beyond U.S.-centric sources, the catalog includes the World Bank API (GDP, CPI, unemployment, and trade indicators for seven major economies), enabling cross-national studies and macro-economic simulations that require non-U.S. context.
The catalog is extensible: each source is wrapped as an independent connector behind a common interface, so new data sources can be added without changes to the rest of the platform.

Table 4: Signal sources available through the Event MCP, grouped by category. Sources marked with $\star$ are enabled by default.

|  |  |  |
| --- | --- | --- |
| Category | Source | Coverage |
| Macro / Market | FRED⋆ | Federal Reserve economic indicators |
| BLS⋆ | Bureau of Labor Statistics |
| Treasury⋆ | U.S. Treasury rates |
| NY Fed SCE⋆ | Survey of Consumer Expectations |
| World Bank | GDP, CPI, unemployment for 7 economies |
| Financial | Yahoo Finance⋆ | Equity / index prices |
| Credit Spreads⋆ | Corporate bond spreads |
| Housing Finance⋆ | Mortgage / housing indices |
| Alt. Fear & Greed⋆ | Market sentiment composite |
| News / Trends | NYT Archive | New York Times articles |
| Google Trends | Search interest time series |
| GDELT | Global event database |
| USTR⋆ | U.S. trade policy actions |
| Population / Survey | Census ACS | American Community Survey |
| Household Pulse | Census Household Pulse Survey |
| CPS Basic / ASEC | Current Population Survey |
| SIPP | Survey of Income and Program Participation |


Request
horizon $(y,m)\_{0:T}$, sources

List
21+ sources

Fetch
as of $(y,m)$

Stamp
provenance
Event MCP


Materialize
events bundle

Translate
broadcasts, events
build-environment skill


Grounded $E$
$E\_{0}\to\cdots\to E\_{T}$, no run-time fetch
vintage-safe: nothing published after $(y,m)$


Macro / Market

Financial

News / Trends

Population / Survey
21 connectors, one archived snapshot per monthmonthly snapshots

Figure 8: One call to the Event MCP. A request specifies the study horizon and sources. The service lists the catalog, fetches each source as of the requested year and month so that nothing published later is visible, and stamps provenance. The build-environment skill then materializes the result as an external-events bundle and translates it into broadcasts and scheduled events bound to steps, so the run itself fetches nothing.

##### Point-in-time Access.

For any forecasting or nowcasting study (e.g., §[5.4.1](https://arxiv.org/html/2609.24911v1#S5.SS4.SSS1 "5.4.1 Case Study 5: Nowcasting the Consumer Confidence Index from Simulated Households ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), §[5.4.2](https://arxiv.org/html/2609.24911v1#S5.SS4.SSS2 "5.4.2 Case Study 6: Nowcasting the Purchasing Managers’ Index from Simulated Firms ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), and §[5.4.3](https://arxiv.org/html/2609.24911v1#S5.SS4.SSS3 "5.4.3 Case Study 7: Brand Competition in the German Passenger-Car Market ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), credibility depends on the guarantee that the simulation at step $t$ sees only data that was publicly available at the corresponding real-world date.
The Event MCP enforces this through *vintage-safe* access: queries are parameterized by (year, month), and each collector returns only the data vintage that would have been available at that point.
This prevents look-ahead bias and makes all temporal evaluations methodologically sound, and it applies equally to an intervention added later in a study: a broadcast declared for a given month is grounded by the same as-of query, so the intervened branch is held to the same information discipline as the parent run.

##### Service Interface.

The Event MCP answers three kinds of requests: listing the available sources and what they cover, retrieving data from multiple sources for a given year and month, and retrieving a single source in detail with optional sub-series selection.
Every response carries structured data together with its provenance, so that any environmental signal used in a study can be traced back to its origin.

##### A Standard Flow.

The standard flow from the signal sources to a study’s $E$ runs in six steps, as shown in [Figure 8](https://arxiv.org/html/2609.24911v1#S4.F8 "In Signal Source Catalog. ‣ 4.3 Real-World Signal Sources and the Event MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").
(1) Declare the study horizon as a range of year-month pairs and select the sources the study needs.
(2) List the catalog to confirm the coverage and fields of each selected source.
(3) Fetch each source as of every month of the horizon, so that the payload of a month holds only what had been published by then.
(4) Stamp every payload with its provenance, that is, the source, the series, and the vintage it came from.
(5) Materialize the stamped payloads in the study workspace as an external-events bundle, so that the run reads from the workspace and never from the services, which is what makes a run self-contained and a replayed branch comparable with its parent.
(6) Translate the bundle into the two channels of the environment, broadcasts for the information layer and scheduled events for the physical layer, each bound to the step of its month (§[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
Steps 2 to 4 take place inside the service and steps 5 and 6 inside the build-environment skill, so resolution happens at build time and not at run time.

### 4.4 Governance, Auditability, and Reproducibility

##### Privacy and De-identification.

The Population MCP exposes only demographic tags and statistical profiles, never raw social-media content or personally identifiable information, and all access passes through the typed service interface.
All pools comply with the terms of service of their source platforms.
One open pool (MatrAIx) includes personas derived from public information about public figures. These records are used only in research settings, and ingestion removes fictional characters and minors.

##### Licensing and Attribution.

Every registered pool and signal source carries a documented attribution and a usage tier.
Sources cleared for unrestricted use are available to production runs and published studies, whereas sources with restricted or undeclared terms are limited to research and demonstration use and require explicit per-study confirmation before any commercial run.
Generated study reports automatically include a data-basis section crediting every pool and signal source used, so licensing obligations propagate to the studies built on the platform.

##### Research Auditability.

Every stage of the pipeline writes its artifact to disk, every intervention is logged in the events table, every run is versioned, and every study declares the data services, datasets, and tools it depends on.
Any conclusion in a report can therefore be traced through the trajectory store to the study definition, environment bundle, population bundle, and intervention schedule that produced it, and through the resource manifest to the pools and signal vintages behind them.

##### Versioning and Reproducibility.

Pool snapshots are versioned. Signal sources are archived by vintage (year-month).
A study’s resource manifest pins the pool and source versions it depends on, and the trajectory store records which external-events bundle was used for each run.
Combined with the deterministic-seed population construction and the archived environment artifacts, this ensures that any published result can be reproduced from the same data inputs.

## 5 Evaluation on Social Science Simulation

This section evaluates SocioVerse2 as an instrument for social science through seven case studies organized into three families, spanning from methodological benchmarking to real-world forecasting.
§[5.1](https://arxiv.org/html/2609.24911v1#S5.SS1 "5.1 Evaluation Methods ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") introduces the shared workflow and evaluation dimensions. §[5.2](https://arxiv.org/html/2609.24911v1#S5.SS2 "5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), §[5.3](https://arxiv.org/html/2609.24911v1#S5.SS3 "5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), and §[5.4](https://arxiv.org/html/2609.24911v1#S5.SS4 "5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") present each family in turn, progressing from reproducing known dynamics to predicting outcomes not yet observed at simulation time.
Each case is realized in the framework of [Section 3](https://arxiv.org/html/2609.24911v1#S3 "3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") and operated through the infrastructure of [Section 4](https://arxiv.org/html/2609.24911v1#S4 "4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"). Consequently, interventions and branches inside the longitudinal simulation loop, and reference conditions and ablations as versions raised in the controllable research loop, are both realized in seven cases.

### 5.1 Evaluation Methods

Research questiontarget aggregate and trajectorydirectional hypothesisFramework Mapping$P$$E$$f$Experimental designground truth $\cdot$ referencesprotocol $\cdot$ mechanism probeSilicon samples$E\_{t}\rightarrow B\_{t}\rightarrow E\_{t+1}$


Micro alignment
  
responses vs. real records

Level fidelity
  
aggregates vs. ground truth

Trajectory fidelity
  
course vs. observed course

Mechanism
  
branches vs. the parent run

initbuild-modelbuild-environmentbuild-populationrunreportiterateControllable research loopedits on $P$, $E$, $f$, $\Theta$ raise versionsLongitudinal simulation loopone run, interventions fork branchesagentic research pipeline

Figure 9: Realization of a case study in the framework and the flow of its results into evaluation. Each case is realized through three uniform steps: research question, framework mapping, and experimental design. Its silicon samples then act over the horizon, and the results are read from four angles. The agentic pipeline carries every step. The controllable research loop spans the three realization steps, where an edit to $P$, $E$, $f$, or $\Theta$ raises a new version, and the longitudinal simulation loop spans the run, where interventions fork branches.

##### Case realization in the framework.

Each case study follows the same three phases ([Figure 9](https://arxiv.org/html/2609.24911v1#S5.F9 "In 5.1 Evaluation Methods ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

The *research question* states what the simulated aggregate must match and what the trajectory is expected to add, with a directional hypothesis.
The *framework mapping* states the population, the environment, and the behavior function separately, so that a case is an instantiation of [Equation 1](https://arxiv.org/html/2609.24911v1#S3.E1 "In The SocioVerse2 Abstraction. ‣ 3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") whose three terms can be inspected and replaced independently.
The *experimental design* specifies, in fixed order, the ground truth and evaluation window, the reference conditions against which the simulation is scored, the longitudinal protocol, and, where applicable, a mechanism probe by ablation or intervention. The longitudinal protocol covers the time unit, step length in real time, horizon, the state carried across steps, and the number of repetitions.
These steps correspond to the artifacts that the agentic pipeline produces, so a case is executable from its case description: the population and environment bundles realize the mapping, and the intervention schedule and run configuration realize the design.
The simulated individuals then act over the horizon as *silicon samples*, a fixed panel that observes the environment, decides through the behavior function, and changes the environment step by step, with interventions entering where the design declares them.
In terms of [Equation 8](https://arxiv.org/html/2609.24911v1#S3.E8 "In 3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), a reference condition is a version that replaces $f$ or $P$, an ablation is a version that removes one component, and an intervention branch is one that shares its parent’s history, so every comparison in this section is a comparison between versions or between branches of one study, and the reported result of each case is the version its researchers accepted.

##### Result interpretation from four angles.

The results of every case are read from four angles in a fixed order, each against the ground truth the design names.
*Micro alignment* asks whether individual silicon samples respond as their real counterparts did, where individual records exist.
*Level fidelity* asks whether endpoints or per-period aggregates agree with the ground truth.
*Trajectory fidelity* asks whether the course over time agrees with the observed course, measured by quantities that change when only the order of steps changes.
*Mechanism* asks what ablations, intervention branches, and per-agent records reveal about why the aggregate moves, by comparing branches of the same simulation. This dimension also identifies where the simulation’s agreement with ground truth breaks down.
The ground truth differs by family: rule-based dynamics and observed opinion trajectories in the mechanism family, census patterns and historical procurement records in the policy family, and official statistics and registration data in the forecasting family.

[Table 5](https://arxiv.org/html/2609.24911v1#S5.T5 "In Result interpretation from four angles. ‣ 5.1 Evaluation Methods ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") places the seven designs side by side on the elements above. The reporting protocol for repetitions and uncertainty is consolidated in [Section A.1](https://arxiv.org/html/2609.24911v1#A1.SS1 "A.1 Reporting Protocol ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), and a two-sentence takeaway closes each case.

Table 5: Experimental designs of the seven case studies on one template.

Case
Units
Step
Steps
Ground truth
Reference
Probe
Runs

Case Family I: Simulation Mechanisms

Canonical ABM reproduction
40–810 agents, 10 models
abstract
30–200
rule dynamics
rule control, 3 LLMs
context enrichment
10 / 3

Hybrid opinion dynamics
1,000 users
12 h
14
attitude series
pure rule $\times$ 5
3 interventions
3

Case Family II: Policy Simulation

Chicago segregation
19,235 households
abstract
15
2010 Census
5 rule models
3 ablations
5 / 10

Drug procurement
325 markets
round
50
historical winners
enterprise-only, random

1

Case Family III: Macro-Index Forecasting

Consumer-confidence nowcast
250,000 households
month
75
official CCI
12 baselines
4 ablations, scale
1

Purchasing-managers nowcast
300 firms
month
22 + 32
official PMI
persistence, consensus
7 ablations
1

Car-market shares
600 consumers
month
41
registrations


1

### 5.2 Case Family I: Simulation Mechanisms

The two cases in this family examine the mechanics of LLM social simulation itself, establishing that the instrument reproduces known dynamics before it is applied to policy and forecasting questions, and they emphasize the reference conditions of the template: rule-based dynamics against LLM-driven decisions in the benchmark case (§[5.2.1](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS1 "5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), and pure rule-based populations against hybrid populations that couple LLM-driven core users with rule-based ordinary users in a Twitter-like environment (§[5.2.2](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS2 "5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
In terms of the two loops, the benchmark case varies $f$ across versions, a rule against three LLMs on the same $(P,E)$, and the opinion case declares interventions inside a run, so this case family exercises the controllable research loop and the longitudinal simulation loop in turn.

#### 5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents

##### Research Question.

Classical agent-based models are the canonical demonstrations that collective patterns emerge from simple local rules: Schelling’s residential model produces segregation from mild individual preferences [[1](https://arxiv.org/html/2609.24911v1#bib.bib1)], and the Sugarscape economy grows wealth inequality from foraging agents on a resource landscape [[2](https://arxiv.org/html/2609.24911v1#bib.bib2)].
Their dynamics are known, reproducible, and rule-based, which makes them the natural reference for asking whether LLM-driven decision functions preserve the mechanisms that social science has already validated.
The case asks two questions: whether, once the hand-coded rules are replaced by LLM-driven decisions over the same observations and actions, the same group-level outcomes arise, and whether the LLM-driven trajectory follows the same course toward those outcomes, and how the course changes when the decision context is enriched beyond the scalar statistics of the classical rule.
The hypothesis is directional: LLM-driven runs are expected to reach consistency scores close to the run-to-run agreement of the rule-based model itself, with the widest gaps on tasks whose reference is deterministic or whose actions are continuous, and enriched context is expected to change the tempo of convergence without changing its endpoint.

##### Framework Mapping.

The benchmark organizes 10 canonical ABMs into four families, flow, market, organization, and diffusion, each expressed through the same three components. The full roster with source models, population sizes, and configuration parameters is catalogued in [Table 12](https://arxiv.org/html/2609.24911v1#A1.T12 "In Task roster and hyperparameters. ‣ A.2 ABM Benchmark Suite ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") ([Appendix A](https://arxiv.org/html/2609.24911v1#A1 "Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

- •

  Population $P$. The agent population of each source model: residents on a grid, vehicles on a road, boids in a flock, traders in a market, or opinion holders in a network, with sizes from 40 (Boids) to 810 (Schelling).
- •

  Environment $E$. The simulated setting of each model, a toroidal grid, a continuous field, a contact network, or a market with clearing rules, together with the task-specific observation each individual receives at every step.
- •

  Behavior function $f$. Implemented twice per task, once as the classical rule and once as an LLM prompt chain, over identical observation and action types. Both implementations emit the same typed action (move or stay, cooperate or defect, spread or ignore, a heading vector), so both act in the same action space and are scored against the same reference.

##### Experimental Design.

- •

  Ground truth and window. Rule dynamics: for every task, the ten-run mean of the rule-based model on each metric of the task’s outcome vector ([Table 13](https://arxiv.org/html/2609.24911v1#A1.T13 "In Consistency-score metric vectors. ‣ A.2 ABM Benchmark Suite ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) is the reference value, and agreement is summarized by a *consistency score* in $[0,1]$, one minus the root-mean-square relative deviation across the vector, computed per run and averaged per condition.
- •

  Reference conditions. A *control group* in which independent stochastic runs of the rule-based model are scored against the same reference, giving the agreement attainable under intrinsic randomness alone, and three LLM conditions on equal footing, GPT-4o, DeepSeek-V3, and Qwen3-235B, all queried at temperature 0.7 with structured output of at most 256 tokens.
- •

  Longitudinal protocol. Ten tasks with 40 to 810 agents and 30 to 200 abstract steps each. The control group runs 10 independent seeds per task and each LLM condition 3 seeds per task.
- •

  Mechanism probe. A context-enrichment comparison on Schelling ($20\times 20$ grid, 400 agents, threshold $3/8$, 50 steps) with three configurations: the rule, LLM-$f$ over the rule’s scalar neighborhood statistics, and LLM-$f$ over an enriched context in which the neighborhood is described in natural language and the persona carries decision factors such as moving cost, patience, and confidence in the status quo [[43](https://arxiv.org/html/2609.24911v1#bib.bib43)].

In terms of the controllable research loop, the control group and the three LLM conditions are versions of one study that vary $f$ on a fixed $(P,E)$, the behavior-function ablation among the applicable controls, and the context-enrichment probe is a further version that edits the observation each agent receives while the rule is held fixed.

##### Results.

*Level fidelity: LLM-driven decisions approach the ceiling set by stochastic variability alone.*
[Figure 10](https://arxiv.org/html/2609.24911v1#S5.F10 "In Results. ‣ 5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") reports the consistency scores across the suite.
The control group achieves a mean consistency of 0.911, the empirical upper bound for any behavior function evaluated under this protocol.
Against this ceiling, GPT-4o reaches 0.898, DeepSeek-V3 0.900, and Qwen3-235B 0.885 averaged over the ten tasks, so the gap between the best LLM condition and the rule-based model’s own run-to-run agreement is about one hundredth.
The three LLM conditions lie within 0.015 of one another on the suite average, and their per-task profiles rise and fall together across the four families. GPT-4o has the smallest cross-task dispersion, and Qwen3-235B the largest, with its lowest scores on Opinion Dynamics and Collective Motion.
Task structure therefore accounts for more of the variation than model choice.

*Trajectory fidelity: the agreement is mechanistic as well as numerical.*
Social Segregation is the most stable task in the suite, with the control group and all three LLM conditions within a few hundredths of one another near the top of the scale, and Rumor Spreading keeps two of the three LLM conditions close to its control group.
The qualitative comparison in [Figure 18](https://arxiv.org/html/2609.24911v1#A1.F18 "In Qualitative dynamics comparison. ‣ A.2 ABM Benchmark Suite ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") ([Appendix A](https://arxiv.org/html/2609.24911v1#A1 "Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) shows the same course under both implementations: Hegselmann–Krause opinions at confidence bound $\varepsilon=0.15$ converge to three clusters, and the SIR rumor on a Watts–Strogatz contact network reproduces the spreader peak followed by saturation of the informed population.
The mechanism probe locates where the LLM adds to the classical dynamics.
With the rule’s scalar context, the LLM-driven Schelling population converges to full satisfaction by step 12, on the same course as the rule. With the enriched context it reaches the same fully segregated endpoint at step 18, because agents that weigh moving costs and patience relocate less readily at the first sign of dissatisfaction [[43](https://arxiv.org/html/2609.24911v1#bib.bib43)].
Enriching the context thus changes the tempo of the trajectory and leaves its terminal pattern intact, which is the kind of difference that only a step-by-step record can register.

*Boundary: the largest gaps arise where the reference is deterministic, the metric is unstable, or the action is continuous.*
Prisoner’s Dilemma shows the widest separation between conditions: its round-robin tournament of fixed strategies makes the control group nearly self-identical, whereas all three LLM conditions fall well below it, since deterministic strategies leave no stochastic slack and any deviation in a single per-strategy score is counted in full.
Opinion Dynamics records the lowest scores of the suite for every condition, including the control group, with the widest error bars, because its metric vector counts final opinion clusters at three confidence bounds, a quantity that shifts discretely under small perturbations. All three LLM conditions match or exceed the control group on this task, and GPT-4o and DeepSeek-V3 also score above the control group on Minority Games, where LLM runs sit closer to the ten-run rule mean than individual stochastic rule runs do.
Collective Motion, whose actions are heading vectors, yields the lowest control-group score among flow models and the widest spread across LLM conditions, whereas Crowd Evacuation, the other continuous-action task, stays close to its control group. The difficulty is specific to flocking, whose metric vector (polarization, nearest-neighbor distance, spread) registers small heading deviations directly.
Together with Prisoner’s Dilemma, these tasks delineate the regime in which exact numerical or geometric computation is required, where the typed-action contract that makes rule and LLM outputs comparable also exposes every deviation in full.

![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/abm_consistency_bar.png)


Figure 10: Consistency scores across the ABM benchmark suite (mean and standard deviation. Control group 10 runs, each LLM 3 runs). The control-group score of 0.911 reflects intrinsic stochastic variability. Adapted from [Zhang et al. [43]](https://arxiv.org/html/2609.24911v1#bib.bib43).

##### Takeaway.

LLM-$f$ serves as a drop-in replacement for rule-$f$ across the ten models, reproducing the emergent outcomes to within the rule-based model’s own run-to-run agreement and following the same course toward them, with enriched context altering the tempo of the dynamics and leaving their endpoint intact.
The typed-action contract that makes this comparison possible also marks its boundary, since tasks demanding exact numerical or continuous control expose every deviation, which is where the hybrid-$f$ pattern of §[5.2.2](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS2 "5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") applies.

#### 5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media

##### Research Question.

Social media has become a central arena of social movements, and simulating how the public responds after a triggering event, from the leak of a court opinion to a viral hashtag, has become a matter of both scientific and practical concern [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)].
Engagement on these platforms is highly skewed: a small set of active and influential opinion leaders shapes the discourse, while the bulk of participants respond with far simpler behavior.
Driving every user with an LLM is unaffordable at the population scales such events involve, and classical opinion-dynamics models cannot express the reasoning and discourse strategies of the influential minority.
This case asks whether a hybrid population, in which a few hundred LLM-driven core users are coupled with a large rule-based population of ordinary users, reproduces the observed collective opinion trajectory after a triggering event, and whether it does so at a cost that stays flat as the ordinary population grows.
The hypothesis is directional: for every rule governing the ordinary users, coupling in the LLM-driven core is expected to raise the correlation with the observed trajectory, with the largest correction where the rule alone misses the direction of change, and the run time is expected to depend on the number of core users only.

##### Framework Mapping.

The case instantiates the framework’s hybrid-$f$ pattern (§[3.2](https://arxiv.org/html/2609.24911v1#S3.SS2 "3.2 The Longitudinal Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) on a two-tier population situated in a Twitter-like environment, with the per-step group attitude distribution as the longitudinal trajectory.

- •

  Population $P$. Each event is simulated with 1,000 users drawn from the real participants of that event: 300 core users, selected by influence and activity, are LLM-driven simulated individuals constructed from their real profiles, historical tweets (personal memory), and follower lists. The other 700 are rule-based simulated individuals whose initial attitudes are annotated from their real tweets.
- •

  Environment $E$. A Twitter-like information environment provides each user with a timeline of the most recent visible tweets, follower-graph visibility, and a notification inbox, together with turn-indexed news injections that introduce real-world developments at designated steps. Each event window is simulated as 14 steps of 12 hours, so that a seven-day period is covered (in the *Roe* scenario, the overturn is injected at step 0 and a report of protest arrests at step 11).
- •

  Behavior function $f$. Core users run LLM-$f$: persona, timeline, and memory are composed into a prompt that yields a typed action (post, retweet, reply, like, or no action) with its content. Ordinary users run rule-$f$ under one of five classical opinion-dynamics models (bounded confidence [[44](https://arxiv.org/html/2609.24911v1#bib.bib44)], Hegselmann–Krause, Lorenz, relative agreement, or social judgement), which update a scalar attitude. The two tiers are coupled through mirror agents: every core user has a counterpart inside the rule-based model whose attitude is overwritten at each step with the stance and intensity scored from that core user’s actual message, so that the reasoning of opinion leaders propagates into the ordinary population. Influence in the reverse direction is not modeled, following the original design.

##### Experimental Design.

- •

  Ground truth and window. The observed collective attitude trajectory of each movement, annotated from the real tweets of the 1,000 simulated users at every step. Three U.S. movements, MeToo (sexual harassment), *Roe v. Wade* (abortion rights), and Black Lives Matter (racial justice), each observed in two event windows of about one week [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)]. The first window of each movement serves calibration and the second window validation. All results below are on the validation window.
- •

  Reference conditions. Every hybrid configuration is paired with the pure rule-based model that shares its parameters, for each of the five opinion-dynamics rules, giving fifteen hybrid-versus-pure pairings across the three movements. Parameters are swept in pure rule-based form on the calibration window and transferred to the hybrid configuration, so the comparison holds the rule and its parameters fixed and varies only the presence of the LLM-driven core.
- •

  Longitudinal protocol. 1,000 users per movement (300 core, 700 ordinary), 14 steps of 12 hours. Core users driven by LLM agents. Macro results averaged over three runs per scenario. Two levels of evaluation: *micro* alignment tests whether individual core users reproduce the stance, content, and action type of their real counterparts in single-turn responses to the context they actually saw. *macro* dynamics compares the simulated and observed group attitude trajectories over the 14 steps by Pearson correlation (Corr) and the deviation of mean attitude ($\Delta$Bias).
- •

  Mechanism probe. The rule governing the ordinary users is treated as an experimental variable across the five models, and three platform interventions are applied on the MeToo scenario: feeding users opposing opinions, feeding neutral opinions, and opening public hashtag spaces for discussion [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)].

The study is re-implemented natively on the SocioVerse2 engine as a from-scratch study, with the two tiers as implementations of one decision model and the mirror coupling as an environment update. In that re-implementation, the five ordinary-user rules are versions that vary $f$, and the three platform interventions are declared broadcasts, so each intervened run is a branch of the uninterrupted one.

$0$$4$$8$$12$$0$$0.5$$1$Moore case,Golden Globes(a) MeToonormalized sentimentsimulationground truth$0$$4$$8$$12$Roe v. WadeoverturnedD.C. protestarrests(b) Roe v. Wade$0$$4$$8$$12$Floyd’sdeathmurderchargeschokeholdbannationwideprotestscouncilsupport(c) Black Lives Matter

Figure 11: Simulated and observed collective attitude trajectories over 14 steps for the three movements, min–max normalized. Shaded bands mark injected news events. Data from the representative runs of [Mou et al. [11]](https://arxiv.org/html/2609.24911v1#bib.bib11).

##### Results.

*Micro alignment: LLM-driven core users reproduce the positions of their real counterparts.*
At the individual level ([Table 6](https://arxiv.org/html/2609.24911v1#S5.T6 "In Results. ‣ 5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), the core users match the recorded responses of the people they simulate.
Stance accuracy lies between 0.90 and 0.97 across the three movements and content similarity exceeds 0.80, while the type of action a user takes (posting or retweeting) is predicted with accuracy between 0.67 and 0.78. Stance F1 is considerably lower than stance accuracy in all three movements.

Table 6: Micro-level alignment of LLM core users against real user responses: stance (support, neutral, oppose), content type (five classes) and text similarity, and behavior type (post or retweet).

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | Stance  Acc | Stance  F1 | Content  Acc | Content  Sim | Behavior  Acc | Behavior  F1 |
| MeToo | 0.968 | 0.340 | 0.701 | 0.806 | 0.731 | 0.521 |
| Roe v. Wade | 0.943 | 0.336 | 0.642 | 0.809 | 0.667 | 0.469 |
| BLM | 0.899 | 0.374 | 0.735 | 0.841 | 0.780 | 0.576 |

*Trajectory fidelity: coupling core users to the rule-based population improves the shape of the collective trajectory in every configuration.*
Across the fifteen model–scenario pairings reported in the original study, the hybrid variant attains higher correlation than its pure-ABM counterpart in all fifteen ([Table 7](https://arxiv.org/html/2609.24911v1#S5.T7 "In Results. ‣ 5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). The best hybrid configurations reach correlations of 0.724 (MeToo), 0.758 (*Roe*), and 0.605 (BLM), against 0.483, 0.733, and 0.448 for the best pure-ABM model of each scenario.
The correction is most visible where the rule-based model alone misses the direction of change, as the two bounded-confidence rules do in the *Roe* scenario.
Absolute-level bias does not improve uniformly. The Lorenz-based hybrid attains the lowest $\Delta$Bias in all three scenarios, whereas the relative-agreement hybrid trades a larger bias for the best correlation in two of them.

Table 7: Macro-level trajectory evaluation on the validation window of each movement (mean of 3 runs). Corr: Pearson correlation with the observed attitude trajectory. $\Delta$Bias: absolute deviation of the mean attitude. Best pure-ABM is the rule-based model with the highest correlation per scenario. The hybrid rows are the configurations with the best correlation or the lowest bias.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | MeToo | | Roe v. Wade | | BLM | |
| Method | Corr | $\Delta$Bias | Corr | $\Delta$Bias | Corr | $\Delta$Bias |
| Best pure-ABM | 0.483 | 0.0124 | 0.733 | 0.0352 | 0.448 | 0.0411 |
| Hybrid w/ RA | 0.724 | 0.0117 | 0.427 | 0.0221 | 0.605 | 0.0376 |
| Hybrid w/ Lorenz | 0.610 | 0.0035 | 0.758 | 0.0093 | 0.506 | 0.0023 |

*The hybrid trajectories follow the direction and timing of the major attitude shifts in all three movements.* In [Figure 11](https://arxiv.org/html/2609.24911v1#S5.F11 "In Experimental Design. ‣ 5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), the simulated series rises or falls with the observed one after the initial trigger, settles over the following steps, and moves again when a follow-up development is injected, which is the behavior the correlation summarizes.

*Mechanism: the rule governing ordinary users is an experimental variable, and platform interventions register in the panel.*
No single rule fits every movement.
The Lorenz model gives the best bias and the best *Roe* correlation, relative agreement gives the best correlation for MeToo and BLM, and the two bounded-confidence variants remain the weakest hybrids in the *Roe* and BLM scenarios. The five interchangeable models therefore serve as an ablation of the ordinary-user mechanism, and the calibrate-in-rule, validate-in-hybrid protocol keeps this ablation affordable.
The three interventions on the MeToo scenario show that the same simulation supports platform-design questions: all three reduce the homogeneity between produced and consumed content, and opening public discussion spaces does so at the lowest toxicity [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)].

*Cost: fidelity is retained while the ordinary population grows, and the cost is pinned to the number of core users.*
In the scalability analysis of the original study, which fixes 300 core users and varies the number of ordinary users on the MeToo scenario, the trajectory correlation declines only slightly as the ordinary share increases, and runtime is dominated by LLM API latency, so that adding ordinary users imposes almost no additional cost until the population reaches the millions [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)].

##### Takeaway.

The hybrid-$f$ pattern reproduces observed opinion trajectories at a cost that grows with the number of LLM-driven opinion leaders and not with the population, because the mirror coupling carries the leaders’ reasoning into a rule-based majority.
The case also shows why trajectories are the object of study: a snapshot records the attitude distribution in a cross-section, whereas the step-by-step record shows how that distribution moved after each injected development and each platform intervention.

### 5.3 Case Family II: Policy Simulation

Policy simulation asks what follows from an intervention before it is administered.
The two cases in this family exercise the longitudinal machinery built for this question, populations grounded in real records and behavior that evolves with a changing environment, and they emphasize the mechanism probe of the template: ablations that isolate what drives the aggregate, and reference conditions that hold the environment fixed while the decision model changes.
The segregation case extends the Schelling model, validated as a synthetic benchmark in §[5.2.1](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS1 "5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), to real Chicago census data (781 tracts and calibrated household archetypes), shifting the ground truth from rules to the observed pattern of segregation (§[5.3.1](https://arxiv.org/html/2609.24911v1#S5.SS3.SSS1 "5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The procurement case models China’s national drug procurement as a multi-agent Markov game among government, enterprises, and healthcare institutions, with historical procurement outcomes across multiple bidding rounds as the ground truth (§[5.3.2](https://arxiv.org/html/2609.24911v1#S5.SS3.SSS2 "5.3.2 Case Study 4: Drug Procurement as a Multi-Agent Markov Game ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
Both cases pose policy questions in the form of the longitudinal simulation loop: a policy is a declared intervention on $E$, and its effect is read as a contrast between branches that share a history, while the reference rules and ablations are versions that vary $f$ or remove one component.

#### 5.3.1 Case Study 3: Chicago Segregation with Real Census Data

##### Research Question.

Residential segregation is among the most persistent structural features of American cities, and Chicago is its canonical case: in the 2010 Census the Black–White dissimilarity index across the city’s 781 tracts stands at 0.835.
Schelling’s model [[1](https://arxiv.org/html/2609.24911v1#bib.bib1)] explains how mild individual preferences generate such clustering, yet four properties of real urban segregation lie outside its representational scope: adjacency follows irregular physical geography, preferences are multi-group and asymmetric across racial groups, households weigh schools, safety, transit, affordability, and social ties alongside neighborhood composition, and the same aggregate index can arise from very different micro-level reasoning.
The case asks two questions: whether the Schelling dynamics validated as a synthetic sandbox in §[5.2.1](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS1 "5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") extend to a real city with real census data, so that a demographically calibrated household panel released from a perturbed configuration returns to the observed pattern of segregation, and what the step-by-step record adds to the endpoint, namely whether the return follows a stable course across seeds, whether it stops at the empirical magnitude, and which elements of the decision context drive it.
The hypothesis is directional: LLM-driven households are expected to re-segregate toward the 2010 indices on every axis and to settle there, whereas households deprived of racial context in their prompt are expected to drift away from the pattern.

##### Framework Mapping.

The case instantiates the framework on real urban geography: a census-calibrated household panel acts in the tract graph of Chicago, and residential decisions are produced by an LLM reasoning over each household’s profile and neighborhood context.

- •

  Population $P$. 241 household archetypes constructed from 2010 Census data along four dimensions (race, income bracket, family type, neighborhood type), compressing 2,654,858 residents into 19,235 weighted agents.
  Each archetype carries calibrated behavioral parameters (mobility rates, ideal own-group percentages, and satisfaction weights for seven factors: racial composition, housing cost, school quality, safety, transit, social anchor, and job proximity), grounded in nine published sociological studies.
- •

  Environment $E$. The physical layer is a Queen-contiguity graph over the 781 census tracts, with per-tract attributes (racial composition, safety scores, school quality, transit access) updated endogenously as households move. The information layer carries policy broadcasts (citywide news) and local notices (tract-specific announcements) activated at designated steps.
- •

  Behavior function $f$. An LLM-driven two-phase decision, *satisfaction assessment* (“am I content here?”) followed by *candidate evaluation* (“which neighborhood should I move to?”), with anti-overshoot controls (own-race ceiling filters, per-race move budgets with race-size scaling, per-tract inflow caps) that prevent runaway sorting.
  Each decision yields a typed action (stay or move to a named tract), a satisfaction score, and a natural-language rationale.

The model is integrated via Path C (§[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")): an engine-seam adapter of about 250 lines wraps the legacy segregation model (1,572 lines of Mesa-based code) with zero modification to the original source, implementing the environment provider, population provider, decision model, and metric collector on top of it, so that the legacy dynamics gain panel storage and intervention scheduling as they stand.

##### Experimental Design.

- •

  Ground truth and window. The 2010 Census segregation indices and tract-level racial shares. Each run starts from the 2010 configuration with 15% of households randomly displaced, which depresses the Black–White dissimilarity index from 0.835 to about 0.72 while leaving every other tract attribute unchanged; the census pattern is the attractor the dynamics are expected to recover over 15 steps.
- •

  Reference conditions. Five rule-based references on the same tract graph, under the same per-step move budget, capacity limits, inflow caps, and execution machinery: random reassignment, classical Schelling with a single threshold $\tau{=}0.5$ under random and under best-improvement destination choice, a per-group threshold rule calibrated from the same archetype parameters the LLM receives, and a logit-style utility rule over the same satisfaction weights ([Appendix A](https://arxiv.org/html/2609.24911v1#A1 "Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), each run for ten perturbation seeds.
- •

  Longitudinal protocol. 19,235 weighted agents over 781 tracts and 15 abstract steps, five perturbation seeds (42–46) with $t$-based 95% confidence intervals on endpoint indices. Decisions use DeepSeek-V3 at temperature 0.7 with at most 512 output tokens; archetype-level batching issues one call per archetype–tract group, from which individual households draw their action, so that a full-city run issues approximately 275,000 calls (about 350 million input and 20 million output tokens) in place of one call per household per phase.
- •

  Mechanism probe. Three ablations of the decision context on a contiguous 218-tract subset, each against a matched unablated control on the same subset: a race-blind prompt (five seeds), removal of the mobility constraints, and a shuffle of the non-racial tract attributes (three seeds each) [[43](https://arxiv.org/html/2609.24911v1#bib.bib43)].

The five references and the three ablations are versions in the sense of [Equation 8](https://arxiv.org/html/2609.24911v1#S3.E8 "In 3.4 The Controllable Research Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"): the references replace $f$, the race-blind prompt and the removal of the mobility constraints edit $f$, and the attribute shuffle edits $E\_{0}$, each against a matched control that shares everything else.

##### Results.

*Level fidelity: the LLM-driven population re-segregates toward the empirical 2010 pattern from a perturbed start.*
[Table 8](https://arxiv.org/html/2609.24911v1#S5.T8 "In Results. ‣ 5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") reports the endpoint segregation indices averaged over the five seeds: $D\_{BW}$ rises from 0.716 to 0.782 (target 0.835), $D\_{HW}$ from 0.500 to 0.577 (target 0.608), and $D\_{AW}$ from 0.423 to 0.435 (target 0.434), the last within 0.001 of the empirical value.
Measured against the perturbation gap, the trajectory closes roughly half of the Black–White gap and about seven tenths of the Hispanic–White gap within 15 steps, and all three dissimilarity endpoints fall within six percentage points of the census targets.
The geography is recovered as well as the magnitude: the dominant racial group of each tract at step 15 matches the 2010 Census across the South, West, and North Sides, with a tract-level coefficient of determination between simulated and empirical racial shares of 0.79.

Table 8: Endpoint segregation indices for the Chicago simulation (mean $\pm$ 95% CI over 5 seeds). $D$ denotes dissimilarity, $P^{\*}\_{B}$ Black isolation, and $P^{\*}\_{BW}$ Black–White exposure.

|  |  |  |  |
| --- | --- | --- | --- |
| Index | Perturbed ($t{=}0$) | LLM-ABM ($t{=}15$) | 2010 Census |
| $D\_{BW}$ | $0.716\pm 0.007$ | $0.782\pm 0.005$ | 0.835 |
| $D\_{HW}$ | $0.500\pm 0.005$ | $0.577\pm 0.004$ | 0.608 |
| $D\_{AW}$ | $0.423\pm 0.006$ | $0.435\pm 0.006$ | 0.434 |
| $P^{\*}\_{B}$ | $0.658\pm 0.004$ | $0.700\pm 0.003$ | 0.797 |
| $P^{\*}\_{BW}$ | $0.135\pm 0.004$ | $0.104\pm 0.002$ | 0.081 |

Figure 12: Ablations on a 218-tract subset: net change of each index from step 0 to 15 (bars: means. Whiskers: 95% CI). Adapted from [Zhang et al. [43]](https://arxiv.org/html/2609.24911v1#bib.bib43).


Figure 13: Trajectories of the three dissimilarity indices over 15 steps. Bold lines give the mean of 5 seeds with 95% CI, thin lines individual seeds, and dashed lines the 2010 Census values.

*Trajectory fidelity: the recovery is monotone and stable across seeds on the two large-gap axes and self-limiting on the small-gap axis.*
[Figure 13](https://arxiv.org/html/2609.24911v1#S5.F13 "In Results. ‣ 5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") shows the Black–White and Hispanic–White indices rising steadily from the first step with confidence bands narrow enough that individual seeds are hard to distinguish, whereas the Asian–White index fluctuates within a wider band for the first eight steps and then converges on the census value without continued drift.
The population also settles: the number of movers per step falls from about 1,050 in the first step to about 250 by step 15, with under two percent of the represented population relocating in an average step, and between 60% and 76% of moves increase the mover’s own-group share, a clear yet imperfect own-race preference produced endogenously by the behavior function.

*Mechanism: the LLM behavior function is the only condition that recovers both large-gap axes while holding the small-gap axis at its empirical value, and the recovery depends on racial context and on the mobility constraints.*
On the same tract graph, move budget, and capacity limits, random reassignment collapses $D\_{BW}$ to ${\sim}0.05$. Classical Schelling ($\tau{=}0.5$) holds $D\_{BW}$ at 0.743 with random destinations and reaches 0.788 with best-improvement destinations. The per-group threshold rule overshoots $D\_{BW}$ to $0.875$ and also overshoots $D\_{AW}$, and the logit-style utility rule reaches $D\_{BW}{=}0.839$ but overshoots Asian–White segregation in the same way, while every rule-based condition keeps relocating at the budget cap through step 15.
The joint endpoint of the LLM condition ($D\_{BW}{=}0.78$, $D\_{HW}{=}0.58$, $D\_{AW}{=}0.44$) lies in a region of the multi-group dissimilarity space that a single similarity statistic cannot reach without group-specific hand tuning.
The ablations locate the source of this behavior ([Figure 12](https://arxiv.org/html/2609.24911v1#S5.F12 "In Table 8 ‣ Results. ‣ 5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")): a race-blind prompt reverses recovery ($\Delta D\_{BW}=-0.033$ against $+0.110$ for the matched control, a swing of 0.14), removing the mobility constraints overshoots the census targets, and shuffling the non-racial tract attributes retains about 60% of the recovery, so the racial context supplies the direction, the constraints supply the stopping point, and the remaining attributes modulate the pace.
The decision rationales expose the micro-mechanism behind the macro pattern: a White lower-middle-income family reports “demographic familiarity (White residents below preferred threshold)” alongside “safety is very high (9.6/10), offsetting some demographic discomfort”. A Hispanic family in a comparable tract instead emphasizes “strong social network proximity due to high Hispanic presence”. A Black middle-income family weighs “moderate Black presence (19.8%)” that “provides some demographic familiarity but is below their ideal” against the higher Black share of surrounding tracts; and Asian archetypes prioritize school quality.
These documented preference asymmetries arise without any hand-coded preference rule, an interpretability through generation that threshold models cannot offer.

*Boundary: the recovery is bounded by the mobility budget and the horizon.*
Half of the Black–White gap remains open after 15 steps while the movers per step have already fallen to about a quarter of their initial number, so the remaining distance to the census value reflects the calibrated mobility rates, the direction being set. The per-group and logit rules that do reach the Black–White target do so by overshooting the Asian–White axis.

##### Takeaway.

Classical Schelling dynamics, reproduced on a synthetic grid in §[5.2.1](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS1 "5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), extend to real census geography with calibrated archetypes: the LLM-driven panel returns to the empirical magnitude and geography of segregation on every axis, and the step-by-step record shows a stable, self-limiting course whose direction is set by racial context and whose stopping point is set by the mobility constraints.
Brought in through a zero-edit adapter, the same study declares transit and housing interventions as scheduled events and broadcasts, which is the form in which the policy questions of this family are posed to the engine.

#### 5.3.2 Case Study 4: Drug Procurement as a Multi-Agent Markov Game

##### Research Question.

China’s National Volume-Based Drug Procurement program, launched in 2018, has covered more than 490 drugs and thousands of participating firms and is credited with roughly 500 billion CNY in pharmaceutical savings to date [[45](https://arxiv.org/html/2609.24911v1#bib.bib45)].
The program operates as a centralized competitive procurement mechanism in which the government sets procurement rules and price ceilings and consolidates aggregate demand, pharmaceutical enterprises formulate bids under production-cost, market-share, and capacity constraints and incomplete information, and medical institutions report anticipated demand and subsequently procure from the selected suppliers.
Because every stakeholder adapts its strategy to the rules in force, the effect of a rule change on prices, supplier selection, and clinical supply is difficult to estimate from historical regressions alone, and existing simulations treat enterprises as the only strategic actors while holding government and institutional behavior fixed [[45](https://arxiv.org/html/2609.24911v1#bib.bib45)].
This case asks whether a simulation that assigns learned strategic behavior to all three stakeholder classes reproduces the outcomes of seven historical procurement rounds, and whether modeling the three actors jointly yields procurement outcomes and winner sets closer to the historical record than enterprise-only models.
Each stakeholder is given a distinct objective: the government maximizes social welfare. Enterprises balance the greater probability of selection associated with lower bids against the corresponding reduction in per-unit margins, and medical institutions maximize a composite utility that captures both the fulfillment of clinical demand and the financial benefits arising from the medical-insurance fund savings-retention mechanism.
The hypothesis is directional: joint learning is expected to raise the outcome of every stakeholder class relative to enterprise-only models while keeping the selected supplier sets at least as close to the historical record.

##### Framework Mapping.

The case instantiates each historical drug–round market as an independent longitudinal simulation in which three classes of institutional actors interact through one complete procurement round per step, and it exercises the reinforcement-learning end of the framework’s behavior-function spectrum.

- •

  Population $P$. Three classes of institutional actors participate in each drug-specific task: one government actor, one medical-institution actor, and a set of heterogeneous pharmaceutical enterprise actors whose costs, capacities, and market positions are drawn from the historical record of that drug and round.
- •

  Environment $E$. Each drug–round market is instantiated from historical procurement records, combining the applicable procurement rules, drug characteristics, bidder composition, and demand conditions with an evolving state. At every step, the environment performs market clearing, quantity and price settlement, role-specific reward computation, and the state transition that conditions the next round.
- •

  Behavior function $f$. Role-specific reinforcement-learning policies map local observations to actions: Proximal Policy Optimization (PPO) for the government and the medical institution and Multi-Agent Proximal Policy Optimization (MAPPO) for enterprises, trained under centralized training and decentralized execution. The resulting joint behavior comprises the government’s policy parameters, the enterprises’ strategic bids, and the institution’s demand reports and procurement execution.

##### Experimental Design.

- •

  Ground truth and window. The historical record of seven rounds of China’s National Volume-Based Drug Procurement program (Rounds 2–5 and 7–9), covering 325 drugs and 2,267 enterprises. Each observed drug–round market is instantiated as an independent simulation and policy-optimization task, and the historically selected enterprise set of each market is the reference for winner-set fidelity.
- •

  Reference conditions. Three enterprise-only ProcureGym baselines in which pharmaceutical enterprises are the sole strategic class and adopt RL-, LLM-, or rule-based bidding controllers [[45](https://arxiv.org/html/2609.24911v1#bib.bib45)], and a random-uniform baseline averaged over five independent runs per task.
- •

  Longitudinal protocol. One government actor, one medical-institution actor, and the historical set of enterprise actors per task. One complete procurement round per step and 50 steps per episode. The synchronous environment lets all actors act on their current observations, after which market clearing, quantity and price settlement, role-specific rewards, and the state transition follow. Each task is trained for 10,000 episodes with seed 42. The selected checkpoint is evaluated over 1,000 deterministic episodes for the aggregate outcomes, and a fixed-seed replay of the same checkpoint produces the canonical joint strategy with its step-level decision trajectory. Checkpoint selection, network architecture, and optimization hyperparameters are documented in [Appendix A](https://arxiv.org/html/2609.24911v1#A1 "Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").

Figure 14: Performance across 325 drugs and seven procurement rounds: the three-actor simulation against the enterprise-only ProcureGym baselines (RL, LLM, Rule) and Random on (a) government social welfare, (b) enterprise profit, (c) medical-institution utility, and (d) F1 agreement with the historical winner sets.

##### Results.

*Level fidelity: joint learning across the three stakeholder classes raises the median outcome of every stakeholder at once.*
Across 325 drug-level tasks, median government social welfare, enterprise profit, and medical-institution utility exceed those of both the enterprise-only ProcureGym RL baseline and the random baseline, as shown in [Table 9](https://arxiv.org/html/2609.24911v1#S5.T9 "In Results. ‣ 5.3.2 Case Study 4: Drug Procurement as a Multi-Agent Markov Game ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").
The welfare and profit distributions span several orders of magnitude across drugs, and those of the two reinforcement-learning methods overlap substantially. The advantage of the three-actor simulation appears as an upward shift of the distribution center in both panels, so the gain from adding government and institutional decisions accrues alongside enterprise profit, as shown in [Figure 14](https://arxiv.org/html/2609.24911v1#S5.F14 "In Experimental Design. ‣ 5.3.2 Case Study 4: Drug Procurement as a Multi-Agent Markov Game ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")(a)–(b).

Table 9: Median stakeholder outcomes across 325 drug-level tasks.
Social welfare and profit are in million CNY.
Medical-institution utility combines fulfilment of clinical needs with financial benefits from retaining a share of health insurance fund savings and is normalized to a maximum of 1.
Bold denotes the highest median in each column.
Gains over ProcureGym RL are relative for welfare and profit and absolute for utility.

|  |  |  |  |
| --- | --- | --- | --- |
|  | Government | Enterprise | Medical institution |
| Method | Social welfare | Profit | Utility |
| Random | 117.96 | 79.48 | 0.629 |
| ProcureGym RL | 228.82 | 188.99 | 0.382 |
| Ours | 291.02 | 252.97 | 0.859 |
| Ours vs. ProcureGym RL | $+27.2\%$ | $+33.9\%$ | $+0.477$ |

*Medical-institution utility is the outcome on which the three-actor design departs most sharply from enterprise-only modeling.*
In [Figure 14](https://arxiv.org/html/2609.24911v1#S5.F14 "In Experimental Design. ‣ 5.3.2 Case Study 4: Drug Procurement as a Multi-Agent Markov Game ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")(c), the three-actor simulation concentrates institutional utility tightly around its median of 0.859, whereas the enterprise-only baselines disperse widely around far lower medians (0.382 for ProcureGym RL), and even the random baseline reaches only 0.629.
In the enterprise-only baselines, the medical institution takes no decisions, so its utility is a by-product of enterprise bidding under fixed demand reports. Assigning the institution a learned demand-reporting and execution policy allows this objective to be optimized directly and consistently across drugs.

*Winner-set fidelity is preserved while stakeholder outcomes improve.*
The three-actor simulation attains the highest mean winner-set F1 score against the historically selected enterprise sets, 0.790 in [Figure 14](https://arxiv.org/html/2609.24911v1#S5.F14 "In Experimental Design. ‣ 5.3.2 Case Study 4: Drug Procurement as a Multi-Agent Markov Game ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")(d), exceeding ProcureGym RL by 0.006, with the LLM, rule-based, and random controllers lower still.
The ordering among the enterprise-only controllers is consistent with the selection-accuracy evaluation reported for ProcureGym, in which RL bidding controllers reached 75% selection accuracy against 66% for LLM and 64% for rule-based controllers [[45](https://arxiv.org/html/2609.24911v1#bib.bib45)].
That the F1 gain is small while the stakeholder gains are large indicates that government and institutional policies reshape prices, quantities, and utilities within largely the same set of selected suppliers.

*Mechanism: the simultaneous improvement across the three objectives follows from the checkpoint-selection rule.*
As detailed in [Appendix A](https://arxiv.org/html/2609.24911v1#A1 "Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), candidate checkpoints are first restricted to the Pareto-nondominated set defined by mean social welfare, aggregate enterprise profit, and institutional utility, and the final checkpoint is selected by a balanced lexicographic criterion that prioritizes the lowest normalized stakeholder objective. The reported medians therefore describe policies that no other checkpoint dominates on all three objectives.

##### Takeaway.

The framework’s behavior function accommodates learned strategic policies as readily as rules or language-model reasoning, and a regulated market is tracked as a longitudinal process in which government rule setting, enterprise bidding, and institutional demand reporting co-evolve round by round, with every stakeholder’s outcome improved and the selected supplier sets kept aligned with the historical record.
The same environment admits shocks to a single policy or scenario variable, which the framework expresses as scheduled events on $E$, with the maximum valid bidding price and the procurement volume identified as the levers that dominate strategic outcomes [[45](https://arxiv.org/html/2609.24911v1#bib.bib45)], which extends the policy-sandbox paradigm from urban interventions to market mechanism design.

### 5.4 Case Family III: Macro-Index Forecasting

Macro-index forecasting tests whether aggregate economic quantities can be reconstructed bottom-up from agent-level decisions.
The three cases in this family evaluate simulated aggregates against official statistics and market data over multi-year windows, and they emphasize the ground-truth element of the template: point-in-time evaluation windows, held-out periods after the response model’s knowledge cutoff, and ablations of the state that agents carry from month to month.
The household case nowcasts the Consumer Confidence Index from a simulated household population (§[5.4.1](https://arxiv.org/html/2609.24911v1#S5.SS4.SSS1 "5.4.1 Case Study 5: Nowcasting the Consumer Confidence Index from Simulated Households ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), and the firm case nowcasts the Purchasing Managers’ Index from a simulated firm panel (§[5.4.2](https://arxiv.org/html/2609.24911v1#S5.SS4.SSS2 "5.4.2 Case Study 6: Nowcasting the Purchasing Managers’ Index from Simulated Firms ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). Both rely on the point-in-time guarantees of the Event MCP (§[4.3](https://arxiv.org/html/2609.24911v1#S4.SS3 "4.3 Real-World Signal Sources and the Event MCP ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), so that each simulated month sees only the information available at the corresponding real-world date.
The market case extends the same bottom-up approach from official indices to brand-level market shares in the German passenger-car market, validated against real vehicle registration data (§[5.4.3](https://arxiv.org/html/2609.24911v1#S5.SS4.SSS3 "5.4.3 Case Study 7: Brand Competition in the German Passenger-Car Market ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The held-out windows after the response model’s knowledge cutoff are where the foundation basis is tested most directly, since the base model cannot have memorized the target and what remains is the grounded population and environment supplied by the infrastructure. The ablations of the carried state are versions that remove one component of the study state at a time.

#### 5.4.1 Case Study 5: Nowcasting the Consumer Confidence Index from Simulated Households

##### Research Question.

Consumer confidence measures summarize households’ perceptions and expectations regarding their financial circumstances, economic conditions, and major purchases. The target series are the University of Michigan’s Index of Consumer Sentiment for the United States, the European Commission’s Consumer Confidence Indicator for the European Union (EU27), and the Consumer Confidence Index published by the Economic and Social Research Institute (ESRI) of Japan’s Cabinet Office. For notational convenience, we refer to these measures collectively as CCI series. The published index aggregates
categorical judgments made by households with different resources, exposures,
and attention, and it moves abruptly when salient events enter public
view [[46](https://arxiv.org/html/2609.24911v1#bib.bib46)], yet it is usually modeled as one persistent
time series. This case asks whether the official CCI can instead be
reconstructed from the bottom up: heterogeneous households encounter the
information available in each month, answer survey-like questions, and
collectively generate the observed index trajectory, and it asks what the
household panel adds to the headline series, in the months of abrupt change
and in the identity of the households that move.
The hypothesis is directional: the simulated index is expected to track the
official series more closely than aggregate time-series baselines, with the
largest advantage in high-salience months, and the panel is expected to show
distinct signal sensitivities across income, housing, and political groups.

##### Framework Mapping.

The case instantiates the framework with a survey-calibrated household
population, a month-by-month information environment, and a behavior function
that produces survey responses.

- •

  Population $P$. A microdata-calibrated synthetic population:
  a fixed core of 5,000 households sampled from the Survey of Income and Program
  Participation with its survey weights (age, sex, race and ethnicity,
  education, homeownership, residence, income, employment), with behavioral
  attributes such as financial satisfaction, future optimism, and social trust
  imputed from General Social Survey conditional distributions. Core responses
  are expanded to a representative normal population by demographic cell.
- •

  Environment $E$. A point-in-time Situational Signal Field
  assembling the macroeconomic, financial, labor, housing, policy, and news
  information available before each month’s survey cutoff, matched to the
  households it exposes (mortgage rates to homeowners, equity movements to
  asset holders) and decayed over time so that recent and visible signals carry
  more weight.
- •

  Behavior function $f$. A GPT-4o survey-response kernel maps
  each household and month to a probability distribution over the response
  categories of the region’s official CCI questionnaire. Post-stratified
  Bayesian belief expansion propagates core responses to the full population,
  and Behavioral Inertia Alignment blends the behavioral forecast with the
  previous month’s official value through a region-specific weight.

##### Experimental Design.

- •

  Ground truth and window. The official monthly CCI of each region, compared within region because the three indices use different scales ([Table 14](https://arxiv.org/html/2609.24911v1#A1.T14 "In Regional configurations. ‣ A.6 Nowcasting the Consumer Confidence Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). The reported backtest spans January 2020–March 2026 (75 months), with target-month CCI values excluded from the response environment. The underlying study additionally reports a three-month U.S. diagnostic on April–June 2026, after the response model’s March 2026 knowledge cutoff.
- •

  Reference conditions. Twelve aggregate baselines fitted on the same information set: autoregressive ridge, expectations regressions, a news-semantic factor proxy, rolling means, SARIMAX, exponential smoothing, Theta, Auto ARIMA, Prophet variants, and macro, market, and news ridge regressions [[46](https://arxiv.org/html/2609.24911v1#bib.bib46)].
- •

  Longitudinal protocol. A fixed core of 5,000 households answering the region’s official question battery every month, expanded to a normal population of 250,000 households (the $50\times$ setting at which the study’s scale sweep reaches its accuracy plateau) and post-stratified by demographic cell. Behavioral Inertia Alignment blends each month’s behavioral forecast with the previous month’s official value through a region-specific weight selected by validation error on January–June 2024 and then frozen (0.4, 0.6, and 0.7 for the U.S., EU27, and Japan). One calibrated run per region.
- •

  Mechanism probe. A U.S. ablation removing, in turn, post-stratified belief expansion, inertia alignment, the Situational Signal Field, and the persona substrate, together with a population-scale sweep from $5\times$ to $100\times$ expansion, both reported by the study on an evaluation window separate from the 75-month backtest.

The ablation and the scale sweep are versions that remove or resize one component of the study state, and the monthly signal field is a pre-materialized timeline of broadcasts resolved at build time through the Event MCP.

##### Results.

*Level fidelity: the bottom-up reconstruction tracks the official index more closely than
every aggregate baseline in all three regions.*
Against the twelve baselines, the simulation ranks first on all four reported metrics in each
region: MAE/RMSE values are $3.45/4.56$ for the United States, $1.607/2.737$ for the EU27, and $1.363/2.040$ for Japan. Pearson correlations are $0.9590$, $0.882$, and $0.824$, and Spearman correlations are $0.9519$, $0.849$, and $0.840$, respectively [[46](https://arxiv.org/html/2609.24911v1#bib.bib46)]. The EU27 and Japan runs
reuse the U.S. response architecture with region-matched survey batteries and
signal fields, so the ranking holds without a full local-microdata rebuild.

*Trajectory fidelity: the advantage concentrates in the months when salient shocks pull confidence
away from smooth persistence.* [Figure 15](https://arxiv.org/html/2609.24911v1#S5.F15 "In Results. ‣ 5.4.1 Case Study 5: Nowcasting the Consumer Confidence Index from Simulated Households ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") shows the U.S.
series with high-salience regimes annotated. The simulated index follows
several abrupt changes that aggregate baselines smooth or lag. Across the
19 annotated windows between December 2014 and February 2025, each evaluated over the preceding, event, and following
month, the simulation ranks first among the 14 methods of the study’s shock-window comparison on both MAE and RMSE, and it holds
the first position individually at the COVID crash, the 2021 inflation shock,
the outbreak of the Russia–Ukraine war, the SVB banking collapse, and the 2025
tariff shock.

*Mechanism: the accuracy depends on every component of the mapping, and it saturates once
the normal population is large enough.*
In the study’s U.S. ablation, reported on its own evaluation window so that its absolute errors are not those of the 75-month backtest, the full model records an MAE of 1.36. Removing
post-stratified belief expansion raises it to 2.03, removing
Behavioral Inertia Alignment to 2.53, and removing the Situational
Signal Field or the persona substrate to 3.35 and 3.48, so the
environment and population components matter most for aggregate fit. With the
5,000-household core fixed, expanding coverage from $5\times$ to $50\times$
reduces MAE from 6.10 to 1.72 and raises Pearson $r$ from 0.682 to 0.979, and
the $100\times$ run changes these values only to 1.70 and 0.980
([Appendix A](https://arxiv.org/html/2609.24911v1#A1 "Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), placing the $50\times$ configuration at the
accuracy–scale plateau.

*The panel carries information beyond the headline series, and it identifies who responds to what.*
Replacing official CCI with the simulated index in an otherwise matched
housing model raises one-month-ahead $R^{2}$ by 0.055 and lowers out-of-sample
RMSE by 7.8%, with gains of 0.023 and 0.017 in $R^{2}$ at two- and three-month
horizons across new home sales, housing starts, and building permits. Gains
for vehicle sales and durable goods are weaker. At the group level, the panel
identifies who responds to what: the bottom income quartile is most sensitive
to broad macro, price, and fiscal shocks, homeowners to housing and monetary
signals, renters to gasoline prices, the top income quartile to
financial-sector stress, and Republican-aligned households to geopolitical and trade-policy news,
with cross-group directional alignment from 0.53 (financial-sector shocks) to
0.97 (broad macro shocks).

*Boundary: the results hold beyond the response model’s knowledge cutoff.*
On April–June 2026, the three
months after the March 2026 cutoff, the simulation records MAE/RMSE of $2.74/3.10$ and
$r=0.971$, against $3.53/3.98$ and $0.914$ for the strongest baseline. This
diagnostic contains three observations, each region reports a single
calibrated run ([Section A.1](https://arxiv.org/html/2609.24911v1#A1.SS1 "A.1 Reporting Protocol ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), and all figures are reconstruction
and prediction results without causal attribution to the annotated events.

![Refer to caption](https://arxiv.org/html/2609.24911v1/consumersim_cci_comparison.png)


Figure 15: Official U.S. CCI, the simulated index, and representative baselines over January 2020–March 2026, with high-salience regimes annotated. Reproduced from [Huang et al. [46]](https://arxiv.org/html/2609.24911v1#bib.bib46).

##### Takeaway.

A population aligned to survey microdata and a time-stamped information environment turn an aggregate expectation index into an interpretable longitudinal response process that tracks the official series in three regions and leads the aggregate baselines in the months of abrupt change.
Its distinctive output is a diagnostic account of who updates, in response to what, and with what persistence, which the headline index cannot supply.

#### 5.4.2 Case Study 6: Nowcasting the Purchasing Managers’ Index from Simulated Firms

##### Research Question.

The U.S. ISM Manufacturing Purchasing Managers’ Index (PMI) is a survey-based
diffusion index: purchasing managers report each month whether new orders,
production, employment, supplier deliveries, and inventories improved,
remained unchanged, or deteriorated, and the equal-weight average of the five
component diffusion indices forms the headline, with 50 marking the expansion
threshold. Because the index is assembled from individual firm responses,
it offers a natural test of bottom-up macro-index forecasting. This case asks
whether the headline PMI can be predicted by reconstructing that survey
process: simulated firms evolve under the information available at the time,
their procurement managers answer the survey items, and the responses are
aggregated into a monthly headline index, and it asks whether the firms’
carried state, their memory and the inertia of their reported level, is what
makes the reconstruction informative.
The hypothesis is directional: the simulated panel is expected to call the
sign of the monthly change more often than persistence and market consensus,
including after the response model’s knowledge cutoff, and removing the
mechanisms that carry state across months is expected to degrade the level
path most.

##### Framework Mapping.

The case instantiates the framework with a persistent firm panel, a
point-in-time environment, and a hybrid structural–LLM behavior engine that
reproduces the survey response step.

- •

  Population $P$. A persistent panel of 300 synthetic
  manufacturing firms aligned to industry, size, and regional statistics.
  Each firm carries heterogeneous exposure to exports, input costs, interest
  rates, and supply chains, as well as a manager-specific reporting style.
- •

  Environment $E$. A monthly sequence of vintage-safe
  industrial, orders, financial, regional-survey, and news signals, restricted
  to what was available by the 21st day of each month.
- •

  Behavior function $f$. A hybrid engine that first updates
  five latent operating states (new orders, production, employment, supplier
  deliveries, and inventories) and then asks an LLM procurement manager to
  answer the corresponding five survey items. Hard responses are
  post-stratified and converted to diffusion indices, whose equal-weight
  average yields the simulated headline PMI.

##### Experimental Design.

- •

  Ground truth and window. The first-print ISM Manufacturing PMI. Parameters are fitted on 2015–2018 and model development is evaluated on 2019–2021. Two held-out windows cover January 2022–October 2023 (clean test) and November 2023–June 2026 (32 months after the configured October 2023 knowledge cutoff of the response model). All historical inputs pass through an as-of-date signal store, and PMI or ISM index values are excluded from the prompt.
- •

  Reference conditions. Persistence, a market-consensus proxy, a pre-fitted Bates–Granger ensemble of the simulation with consensus, the predecessor response kernel, and a mechanical-threshold twin ([Table 16](https://arxiv.org/html/2609.24911v1#A1.T16 "In Complete held-out comparison. ‣ A.7 Nowcasting the Purchasing Managers’ Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
- •

  Longitudinal protocol. A fixed panel of 300 firms warmed up from 2014 and followed monthly from 2015, one survey response per firm per month, with a three-month memory warm-up preceding each evaluation window. A single frozen configuration with the fitted change scale, update step, and ensemble weight held fixed. The case follows the build-from-scratch path (Path B in §[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
- •

  Mechanism probe. Ablations on the 2019–2021 development window with a fixed 165-firm subpanel: without longitudinal memory, without inertia alignment, without post-stratification, without the news field, without the manager memorandum, with a homogeneous firm persona, and with a deterministic response kernel ([Table 17](https://arxiv.org/html/2609.24911v1#A1.T17 "In Ablation matrix. ‣ A.7 Nowcasting the Purchasing Managers’ Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

Each ablation is a version of the study state that removes one component while the panel, the seed, and the signal vintages are held fixed.

##### Results.

*Level fidelity: the simulated firm panel retains predictive value after the knowledge cutoff
of its response model.* On the post-cutoff window
([Table 10](https://arxiv.org/html/2609.24911v1#S5.T10 "In Results. ‣ 5.4.2 Case Study 6: Nowcasting the Purchasing Managers’ Index from Simulated Firms ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), the main simulation signal, the agent-based
change nowcast, obtains a mean absolute error (MAE) of 0.892 PMI points,
compared with 0.894 for persistence and 0.922 for the market-consensus
baseline, and its month-over-month direction accuracy of 58.6% exceeds the
51.7% of consensus. Since the LLM cannot have memorized this window, the
margin over persistence and consensus is attributable to the simulated
survey process itself.

*Trajectory fidelity: the simulation alone makes the best directional calls after the cutoff, and combined with consensus it yields the strongest configuration on the clean test window.*
In [Table 16](https://arxiv.org/html/2609.24911v1#A1.T16 "In Complete held-out comparison. ‣ A.7 Nowcasting the Purchasing Managers’ Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), on January 2022–October 2023 the pre-fitted
Bates–Granger ensemble records an MAE of 0.928, an RMSE of 1.151, a
direction accuracy of 80.0%, and a correct expansion/contraction call in
100.0% of months, improving on both consensus (MAE 0.936, direction 75.0%)
and the simulation alone (MAE 1.025, direction 65.0%). After the cutoff, the
ensemble attains the lowest RMSE (1.188) and, together with consensus, the
highest side-of-50 accuracy (90.6%), while the simulation alone keeps the
lowest MAE and the best directional calls.

*Mechanism: the level path depends on the state the firms carry across months.*
In the ablations of [Table 17](https://arxiv.org/html/2609.24911v1#A1.T17 "In Ablation matrix. ‣ A.7 Nowcasting the Purchasing Managers’ Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), removing inertia alignment
produces the largest level-path degradation ($+1.037$ MAE relative to the
full model) and removing the firms’ longitudinal memory the second largest ($+0.253$),
whereas removing post-stratification, the news field, the manager memorandum, or
firm-persona heterogeneity shifts the change-path MAE by at most a few hundredths
of a point. The two mechanisms that carry state from one month to the next are
thus the ones the level path rests on.

*Boundary: the series in [Figure 16](https://arxiv.org/html/2609.24911v1#S5.F16 "In Results. ‣ 5.4.2 Case Study 6: Nowcasting the Purchasing Managers’ Index from Simulated Firms ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") locate where the signal is weakest.*
The blind window contains 32 months, the
consensus series is a proxy assembled from a public data source, and the
simulator tracks the repeated 2025 tariff shocks less closely than the rest of the window.

Table 10: PMI nowcasting performance after the configured LLM knowledge
cutoff (November 2023–June 2026, 32 months). Direction measures whether a
method correctly calls the sign of the month-over-month change. Persistence
makes no directional call.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Method | MAE | RMSE | Direction | Side of 50 |
| Agent-based change nowcast | 0.892 | 1.256 | 58.6% | 87.5% |
| Bates–Granger ensemble | 0.898 | 1.188 | 51.7% | 90.6% |
| Market consensus | 0.922 | 1.202 | 51.7% | 90.6% |
| Persistence | 0.894 | 1.279 | — | 84.4% |


Figure 16: Official first-print ISM Manufacturing PMI and the principal
nowcasting series from January 2022 to June 2026. The shaded interval is the
post-knowledge-cutoff evaluation window. The horizontal line marks the
expansion threshold of 50.

##### Takeaway.

A persistent firm panel, a point-in-time-safe environment, and a hybrid structural–LLM behavior engine produce a signal that carries information beyond aggregate time-series extrapolation, including after the response model’s knowledge cutoff, and the ablations attribute the level path to the state the firms carry from month to month.
The panel supports firm-, industry-, and region-level diagnosis of an aggregate forecast, so the simulation serves as an incremental nowcasting component alongside official survey measurement and market consensus.

#### 5.4.3 Case Study 7: Brand Competition in the German Passenger-Car Market

##### Research Question.

Monthly brand shares of German private passenger-car registrations, published
by the German Federal Motor Transport Authority (KBA), summarize the outcome of
household purchase decisions taken under replacement cycles, budget
constraints, product preferences, external events, and peer influence.
This case asks how the shares of established German manufacturers, Tesla,
BYD, and other import brands evolve as German households enter the
passenger-car market, treating the observed brand trajectory as the aggregate
of those individual decisions. The goal is to recover both the monthly
market-share curve and the consumer decisions behind changes in that curve.
The hypothesis is directional: a consumer panel exposed to the monthly market
environment is expected to reproduce the level of every brand group’s share and
the contrasting courses of the two entrant brands, the rise of one and the
decline and rebound of the other.

##### Framework Mapping.

The case maps a consumer panel, a monthly market environment, and an
LLM-driven purchase decision onto the framework, so that brand shares emerge
from individual choices.

- •

  Population $P$. A representative consumer panel whose
  demographic and query-specific attributes, market-entry times, purchase
  times, geographic locations, and social ties are generated from a
  structured run specification.
- •

  Environment $E$. A monthly sequence of macro indicators,
  retrieved events, entity-level sentiment, and product-specific milestones.
- •

  Behavior function $f$. An LLM that role-plays consumers in
  real mode and a deterministic utility model for offline runs. Both routes
  expose population priors, external signals, price fit, and peer influence
  as interpretable decision inputs. The resulting behavior records whether,
  when, and from which entity each consumer purchases, together with belief
  checkpoints and social influence traces.

##### Experimental Design.

- •

  Ground truth and window. Monthly shares of German private passenger-car registrations published by the KBA. The archived simulation panel spans January 2023–July 2026 and the registration panel ends in May 2026, leaving 41 overlapping months and 533 brand–month cells ([Table 18](https://arxiv.org/html/2609.24911v1#A1.T18 "In Evaluation protocol. ‣ A.8 German Passenger-Car Market ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). KBA observations enter a post-hoc calibration of the simulated shares, so the comparison is a calibrated reconstruction.
- •

  Reference conditions. Brand-level agreement is assessed against the registration data itself, cell by cell, across the 13 brand groups.
- •

  Longitudinal protocol. A typed specification defines 13 brand groups, including a long-tail “Other” category, and four powertrain types (battery electric, plug-in hybrid, hybrid, and internal combustion). In total 600 representative agents enter the market on their own schedules, the monthly environment is collected, individual purchase choices are simulated, and brand and powertrain shares are aggregated and aligned with the registration shares. The case follows the build-from-scratch path (Path B in §[4.1](https://arxiv.org/html/2609.24911v1#S4.SS1 "4.1 Agentic Research Pipeline ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).

Purchase decisions are typed actions of the behavior function, and the belief checkpoints and influence traces are panel rows, so a movement in a brand’s share can be traced to the agents whose decisions produced it.

Figure 17: Monthly simulated and observed registration shares for BYD and
Tesla in Germany over January 2023–May 2026 (41 overlapping months). Solid
lines show the calibrated simulation panel. Dashed lines show KBA registrations.

##### Results.

*Level fidelity: the simulated panel reproduces the brand-share structure of the German market
to within half a percentage point per cell.* Across all 533 brand–month cells
in the overlap ([Table 19](https://arxiv.org/html/2609.24911v1#A1.T19 "In Brand-level comparison. ‣ A.8 German Passenger-Car Market ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), the mean absolute
discrepancy between simulated and KBA shares is 0.00442 in share, or 0.442
percentage points, with an RMSE of 0.618 percentage points. Mean simulated and
observed shares agree closely for every brand group, from VW (19.174% versus
18.970%) to BYD (0.549% versus 0.508%).

*Brand-level accuracy varies with market position.* In
[Table 19](https://arxiv.org/html/2609.24911v1#A1.T19 "In Brand-level comparison. ‣ A.8 German Passenger-Car Market ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), the two largest groups carry the
largest absolute discrepancies, the “Other” category (MAE 0.834 percentage
points) and VW (0.801 percentage points), while the entrant BYD has the
smallest MAE (0.157 percentage points) and the highest month-to-month
correlation ($r=0.951$).

*Trajectory fidelity: the simulation captures the contrasting trajectories of the two entrant
brands.*
In [Figure 17](https://arxiv.org/html/2609.24911v1#S5.F17 "In Experimental Design. ‣ 5.4.3 Case Study 7: Brand Competition in the German Passenger-Car Market ‣ 5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm"), the calibrated panel closely tracks
BYD’s rise and reproduces Tesla’s broad decline and rebound with more
month-to-month smoothing ($r=0.761$, MAE $=0.508$ percentage points).

*Boundary: these scores quantify reconstruction fidelity.* Because KBA observations
enter the post-hoc calibration (pseudo-count 30, exponential smoothing with
$\alpha=0.45$, and a 0.03 per-cell residual cap), the comparison is a
calibrated backtest with reference blending. Out-of-sample forecasting
performance is a separate question that this evaluation does not address.

##### Takeaway.

Household attributes and market events connect, through the population and environment components, to observable brand competition at the level of individual brand groups and their monthly courses.
Because the run preserves consumer trajectories and a social graph, a market-share movement can be traced back to particular constraints, signals, and peer exposures, which gives the platform a reusable micro-to-macro template for longitudinal consumer-market studies.

## 6 Discussion

### 6.1 Limitations

##### LLM fidelity and calibration.

The behavioral realism of any LLM-driven simulation is bounded by the capabilities and biases of the underlying language model.
Our ABM benchmark (§[5.2.1](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS1 "5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) shows that LLM-$f$ reproduces emergent dynamics in the majority of tasks, but tasks requiring precise numerical computation (e.g., NaSch gap arithmetic) or fine-grained continuous control (e.g., Boids heading angles) exhibit measurably lower consistency.
More fundamentally, LLM agents inherit the training-data distribution of their backbone model: they may over-represent English-language, Western perspectives and under-represent populations absent from pre-training corpora.
We mitigate this through persona grounding, anchoring each agent to a demographically calibrated profile from the Population MCP, but the gap between a prompted persona and a real person’s decision process remains an open empirical question.

##### Computational cost and scale.

Longitudinal simulation is inherently more expensive than cross-sectional prediction: a 15-step run over 19,235 agents issues $\sim$275K LLM calls even with archetype-level batching (§[5.3.1](https://arxiv.org/html/2609.24911v1#S5.SS3.SSS1 "5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
The hybrid-$f$ paradigm (§[5.2.2](https://arxiv.org/html/2609.24911v1#S5.SS2.SSS2 "5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) offers one path to tractability, and falling inference costs will further ease the constraint, but today’s frontier models impose practical limits on the population size and temporal depth that can be simulated within a research budget.

##### Validation methodology.

Ground truth varies across case families: rule dynamics and observed opinion trajectories (§[5.2](https://arxiv.org/html/2609.24911v1#S5.SS2 "5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), census trends and historical procurement outcomes (§[5.3](https://arxiv.org/html/2609.24911v1#S5.SS3 "5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), and official statistics and market data (§[5.4](https://arxiv.org/html/2609.24911v1#S5.SS4 "5.4 Case Family III: Macro-Index Forecasting ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
Each provides a different quality of reference signal, and none fully captures the counterfactual scenarios that are the primary application of longitudinal simulation.
Validating “what if” experiments, the most valuable use case, remains inherently difficult because the counterfactual did not happen.
Accordingly, paired counterfactual branches (§[3.3](https://arxiv.org/html/2609.24911v1#S3.SS3 "3.3 Intervention and Counterfactual Branching in Simulation Loop ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) are simulation-internal contrasts under the model’s assumptions. Claims about real-world causal effects require external validation.

##### The human side of the loop.

The controllable research loop records each edit and its note, but not the reasoning that produced it, and the case studies report the version that was finally accepted rather than the tree of versions that led to it, so this report does not quantify how much the researcher’s edits improved each result over an autonomous pass. Measuring that contribution, for instance by running the same study with and without researcher edits, is a natural next evaluation.

##### Synthetic personas and population claims.

The multi-source pool design deliberately bounds its own claims.
The ${\sim}$1B figure counts *addressable* upstream persona records: PersonaHub personas are LLM-synthesized text, and MatrAIx is calibrated only on one-dimensional marginals and explicitly represents no real population, leaving joint distributions and source-selection bias uncorrected.
Representativeness in SocioVerse2 therefore derives from the IPF alignment step against declared target marginals. Persona texts generated from attributes are explicitly labeled as synthetic and are never treated as real behavioral data.
Synthetic personas approximate real populations, and results built on restricted or synthetic pools are labeled as such in generated reports.

### 6.2 Ethical Considerations

##### Privacy and data governance.

The Population MCP aggregates real social-media profiles and open persona corpora across five sub-pools under tiered usage terms (§[4.4](https://arxiv.org/html/2609.24911v1#S4.SS4 "4.4 Governance, Auditability, and Reproducibility ‣ 4 Social Science Agentic Infrastructure ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")).
All data undergoes de-identification and is accessed only through typed MCP tools that enforce field-level access control. No raw personally identifiable information is exposed to simulation agents.
The population alignment step (§[3.1](https://arxiv.org/html/2609.24911v1#S3.SS1 "3.1 Overview and Formalization ‣ 3 SocioVerse2 Human-AI Co-evolutionary Paradigm ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")) projects aggregate demographic distributions onto synthetic archetypes via IPF, further insulating individual-level data.
Nevertheless, the risk of re-identification through rich persona combinations warrants ongoing review, particularly as the pool expands to new sources.

##### Dual-use and policy implications.

A platform that simulates social dynamics with high fidelity could be misused, for example, to optimize misinformation campaigns or to justify discriminatory policies by presenting simulation outputs as “evidence.”
We address this through three design choices.
(i) Full auditability: every LLM call, its prompt, and its output are recorded in the trajectory store and can be inspected post-hoc.
(ii) The agentic pipeline requires explicit human checkpoints at study design, parameter confirmation, and result interpretation, and every edit that changes a study is recorded with the version it produced.
(iii) The platform is positioned as a research tool for hypothesis generation and exploration.
Simulation outputs are accompanied by provenance metadata (model version, temperature, prompt template) to discourage out-of-context citation.

##### Fairness and representation.

Simulation populations should reflect the diversity of the real populations they model.
The Population MCP’s multi-source design and the IPF alignment procedure ensure demographic representativeness along known dimensions, but unmeasured dimensions (e.g. disability status, sexual orientation, religious affiliation) may remain under-represented depending on source-survey coverage.
Researchers using SocioVerse2 should report which population dimensions were aligned and which were not.

### 6.3 Future Work

##### Adaptive and multi-model behavior functions.

Current LLM-$f$ implementations use a single backbone model throughout a run.
Future work will explore adaptive scheduling, routing simple decisions to smaller models and complex ones to frontier models, and ensemble behavior functions that aggregate multiple models’ outputs to improve robustness and reduce sensitivity to any single model’s biases.
Complementing the population and environment services, we also plan a *Behavior MCP*: a third service that provides interchangeable behavior backbones, exposing different underlying language models and agent frameworks (such as ReAct-style reasoning agents) behind the same behavior-function interface, so that a study can vary $f$ as systematically as it varies $P$ and $E$.

##### Tighter real-data grounding.

The Event MCP currently provides point-in-time access to 21 data sources.
We plan to expand both temporal resolution (real-time feeds for financial and social-media data) and spatial granularity (sub-city geographies, building-level data), enabling studies that operate at finer scales than the current census-tract level.

##### Cross-study transfer and meta-simulation.

The standardized $B=f(P,E)$ abstraction and panel storage format make it possible to transfer calibrated population segments and validated environment configurations across studies.
Longer-term, we envision meta-simulation capabilities: running multiple studies in parallel, comparing their trajectories, and identifying intervention strategies that remain robust across modeling assumptions.

## 7 Conclusion

This report has presented SocioVerse2, which carries the alignment-centered design of SocioVerse 1.0 [[14](https://arxiv.org/html/2609.24911v1#bib.bib14)] into a human-AI co-evolutionary paradigm built from two loops and one infrastructure, formalized through a unified abstraction.
The longitudinal simulation loop fixes a demographically aligned population $P$, grounds the environment $E$ in real-world data, and iterates environments and behaviors over time, producing per-agent panel trajectories in which a declared intervention forks a counterfactual branch. The controllable research loop treats the study itself as an editable state, so that an edit raised by the researcher or by an agent, on any component and at any stage, becomes a new version with a recorded lineage. The social science agentic infrastructure carries both loops through composable skills with researcher checkpoints, two data services, and an audit trail.

We have validated the framework across three case families and seven case studies, whose ground truths range from rule dynamics and opinion trajectories to census trends, procurement outcomes, official statistics, and market data.
The breadth of these settings demonstrates that SocioVerse2 generalizes across domains.
In each case, the reported result is a version that a human researcher and the agentic pipeline reached together, through declared interventions inside the run and edits to the study state between runs.

Looking ahead, the combination of falling LLM inference costs, expanding real-data coverage, and the growing demand for processual social-science methods positions the human-AI co-evolutionary paradigm, rather than either the handcrafted or the fully autonomous extreme, as a practical research methodology.
SocioVerse2’s open architecture, including modular abstract interfaces, MCP-based data access, and an agentic skill pipeline, is designed to lower the barrier to entry for domain researchers and to grow with the ecosystem.
We release the framework, data connectors, benchmark suite, and case-study configurations as open-source resources to support reproducibility and community-driven extension.

## References

- [1]

  Thomas C. Schelling.
  Dynamic models of segregation.
  *Journal of Mathematical Sociology*, 1(2):143–186, 1971.
- [2]

  Joshua M. Epstein and Robert Axtell.
  *Growing Artificial Societies: Social Science from the Bottom
  Up*.
  Brookings Institution Press & MIT Press, 1996.
- [3]

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy
  Liang, and Michael S. Bernstein.
  Generative agents: Interactive simulacra of human behavior.
  In *Proceedings of the 36th Annual ACM Symposium on User
  Interface Software and Technology (UIST)*, 2023.
  doi:[10.1145/3586183.3606763](https://doi.org/10.1145/3586183.3606763).
- [4]

  Lisa P. Argyle, Ethan C. Busby, Nancy Fulda, Joshua R. Gubler, Christopher
  Rytting, and David Wingate.
  Out of one, many: Using language models to simulate human samples.
  *Political Analysis*, 31(3):337–351, 2023.
- [5]

  Chen Gao, Xiaochong Lan, Zhihong Lu, Jinzhu Mao, Jinghua Piao, Huandong Wang,
  Depeng Jin, and Yong Li.
  S3: Social-network simulation system with large language
  model-empowered agents.
  *arXiv preprint arXiv:2307.14984*, 2023.
- [6]

  Alexander Sasha Vezhnevets, John P. Agapiou, Avia Aharon, Ron Ziv, Jayd Matyas,
  Edgar A. Duéñez-Guzmán, William A. Cunningham, Simon Osindero,
  Danny Karmon, and Joel Z. Leibo.
  Generative agent-based modeling with actions grounded in physical,
  social, or digital space using Concordia.
  *arXiv preprint arXiv:2312.03664*, 2023.
- [7]

  Lei Wang, Heyang Gao, Xiaohe Bo, Xu Chen, and Ji-Rong Wen.
  Yulan-onesim: Towards the next generation of social simulator with
  large language models.
  *arXiv preprint arXiv:2505.07581*, 2025.
- [8]

  Jinghua Piao, Jun Zhang, Haoyu Huang, Keming Zhang, Jing Yi Wang, Xinran Zhao,
  Songwei Li, Boyuan Sun, Jiayi Chang, Fengli Xu, Chunyan Wang, Fang Zhang,
  Ke Rong, Jun Su, Tianguang Meng, Yi Liu, Qingguo Meng, Yu Wang, and Yong Li.
  Agentsociety 2: An integrated research environment for executable
  social science.
  *arXiv preprint arXiv:2607.11895*, 2026.
  Version 2.
- [9]

  Yuxuan Li, Kyzyl Monteiro, Hirokazu Shirado, and Sauvik Das.
  Whatif: Interactive exploration of llm-powered social simulations for
  policy reasoning.
  *arXiv preprint arXiv:2604.17615*, 2026a.
- [10]

  HwiJoon Lee, Martina Di Paola, Yoo Jin Hong, Quang-Huy Nguyen, and Joseph
  Seering.
  Inject, fork, compare: Defining an interaction vocabulary for
  multi-agent simulation platforms.
  *arXiv preprint arXiv:2509.13712*, 2025.
- [11]

  Xinyi Mou, Zhongyu Wei, and Xuanjing Huang.
  Unveiling the truth and facilitating change: Towards agent-based
  large-scale social movement simulation.
  In *Findings of the Association for Computational Linguistics:
  ACL 2024*, 2024.
  arXiv:2402.16333.
- [12]

  Joon Sung Park, Carolyn Q. Zou, Jonne Kamphorst, Niles Egan, Aaron Shaw,
  Benjamin Mako Hill, Carrie Cai, Meredith Ringel Morris, Percy Liang, Robb
  Willer, and Michael S. Bernstein.
  LLM agents grounded in self-reports enable general-purpose
  simulation of individuals.
  *arXiv preprint arXiv:2411.10109*, 2024.
  Circulated in earlier versions as “Generative Agent Simulations of
  1,000 People”.
- [13]

  Jinghua Piao, Yuwei Yan, Jun Zhang, Nian Li, Junbo Yan, Xiaochong Lan, Zhihong
  Lu, Zhiheng Zheng, Jing Yi Wang, Di Zhou, Chen Gao, Fengli Xu, Fang Zhang,
  Ke Rong, Jun Su, and Yong Li.
  Agentsociety: Large-scale simulation of llm-driven generative agents
  advances understanding of human behaviors and society.
  *arXiv preprint arXiv:2502.08691*, 2025.
- [14]

  Xinnong Zhang, Jiayu Lin, Xinyi Mou, Shiyue Yang, Xiawei Liu, Libo Sun, Hanjia
  Lyu, Yihang Yang, Weihong Qi, Yue Chen, Guanying Li, Ling Yan, Yao Hu, Siming
  Chen, Yu Wang, Xuanjing Huang, Jiebo Luo, Shiping Tang, Libo Wu, Baohua Zhou,
  and Zhongyu Wei.
  Socioverse: A world model for social simulation powered by llm agents
  and a pool of 10 million real-world users.
  *arXiv preprint arXiv:2504.10157*, 2025a.
- [15]

  Ziyi Yang, Zaibin Zhang, Zirui Zheng, Yuxian Jiang, Ziyue Gan, Zhiyu Wang,
  Zijian Ling, Jinsong Chen, Martz Ma, Bowen Dong, Prateek Gupta, Shuyue Hu,
  Zhenfei Yin, Guohao Li, Xu Jia, Lijun Wang, Bernard Ghanem, Huchuan Lu,
  Chaochao Lu, Wanli Ouyang, Yu Qiao, Philip Torr, and Jing Shao.
  Oasis: Open agent social interaction simulations with one million
  agents.
  *arXiv preprint arXiv:2411.11581*, 2024.
- [16]

  Zhengxin Zhang, Ning Wang, Sainyam Galhotra, and Claire Cardie.
  How far are we from true auto-research?
  *arXiv preprint arXiv:2605.19156*, 2026.
- [17]

  Atsuyuki Miyai, Mashiro Toyooka, Takashi Otonari, Zaiying Zhao, and Kiyoharu
  Aizawa.
  Jr. AI scientist and its risk report: Autonomous scientific
  exploration from a baseline paper.
  *arXiv preprint arXiv:2511.04583*, 2025.
- [18]

  Minjun Zhu, Qiujie Xie, Yixuan Weng, Jian Wu, Zhen Lin, Linyi Yang, and Yue
  Zhang.
  AI scientists fail without strong implementation capability.
  *arXiv preprint arXiv:2506.01372*, 2025.
- [19]

  Samuel Schmidgall, Yusheng Su, Ze Wang, Ximeng Sun, Jialian Wu, Xiaodong Yu,
  Jiang Liu, Michael Moor, Zicheng Liu, and Emad Barsoum.
  Agent laboratory: Using LLM agents as research assistants.
  *arXiv preprint arXiv:2501.04227*, 2025.
- [20]

  Juraj Gottweis, Wei-Hung Weng, Alexander Daryin, Tao Tu, Petar Sirkovic, Artiom
  Myaskovsky, et al.
  Accelerating scientific discovery with Co-Scientist.
  *arXiv preprint arXiv:2502.18864*, 2025.
- [21]

  Chen Zhu and Xiaolu Wang.
  HLER: Human-in-the-loop economic research via multi-agent pipelines
  for empirical discovery.
  *arXiv preprint arXiv:2603.07444*, 2026.
- [22]

  Andrew Abbott.
  *Time Matters: On Theory and Method*.
  University of Chicago Press, 2001.
- [23]

  Charles N. Halaby.
  Panel models in sociological research: Theory into practice.
  *Annual Review of Sociology*, 30:507–544, 2004.
  doi:[10.1146/annurev.soc.30.012703.110629](https://doi.org/10.1146/annurev.soc.30.012703.110629).
- [24]

  Paul W. Holland.
  Statistics and causal inference.
  *Journal of the American Statistical Association*, 81(396):945–960, 1986.
- [25]

  Donald B. Rubin.
  Estimating causal effects of treatments in randomized and
  nonrandomized studies.
  *Journal of Educational Psychology*, 66(5):688–701, 1974.
  doi:[10.1037/h0037350](https://doi.org/10.1037/h0037350).
- [26]

  Donald T. Campbell.
  Reforms as experiments.
  *American Psychologist*, 24(4):409–429,
  1969.
- [27]

  Stephen L. Morgan and Christopher Winship.
  *Counterfactuals and Causal Inference: Methods and Principles
  for Social Research*.
  Cambridge University Press, 2 edition, 2015.
  doi:[10.1017/CBO9781107587991](https://doi.org/10.1017/CBO9781107587991).
- [28]

  Chris Lu, Cong Lu, Robert Tjarko Lange, Jakob Foerster, Jeff Clune, and David
  Ha.
  The AI scientist: Towards fully automated open-ended scientific
  discovery.
  *arXiv preprint arXiv:2408.06292*, 2024.
- [29]

  Eric Horvitz.
  Principles of mixed-initiative user interfaces.
  In *Proceedings of the SIGCHI Conference on Human Factors in
  Computing Systems (CHI)*, pages 159–166, 1999.
  doi:[10.1145/302979.303030](https://doi.org/10.1145/302979.303030).
- [30]

  Saleema Amershi, Dan Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi,
  Penny Collisson, Jina Suh, Shamsi Iqbal, Paul N. Bennett, Kori Inkpen, Jaime
  Teevan, Ruth Kikin-Gil, and Eric Horvitz.
  Guidelines for human-ai interaction.
  In *Proceedings of the 2019 CHI Conference on Human Factors in
  Computing Systems (CHI)*, pages 1–13, 2019.
  doi:[10.1145/3290605.3300233](https://doi.org/10.1145/3290605.3300233).
- [31]

  Ben Shneiderman.
  Human-centered artificial intelligence: Reliable, safe &
  trustworthy.
  *International Journal of Human–Computer Interaction*,
  36(6):495–504, 2020.
  doi:[10.1080/10447318.2020.1741118](https://doi.org/10.1080/10447318.2020.1741118).
- [32]

  Lisa Messeri and M. J. Crockett.
  Artificial intelligence and illusions of understanding in scientific
  research.
  *Nature*, 627(8002):49–58, 2024.
  doi:[10.1038/s41586-024-07146-0](https://doi.org/10.1038/s41586-024-07146-0).
- [33]

  Hanchen Wang, Tianfan Fu, Yuanqi Du, Wenhao Gao, Kexin Huang, Ziming Liu, Payal
  Chandak, Shengchao Liu, Peter Van Katwyk, Andreea Deac, et al.
  Scientific discovery in the age of artificial intelligence.
  *Nature*, 620:47–60, 2023.
  doi:[10.1038/s41586-023-06221-2](https://doi.org/10.1038/s41586-023-06221-2).
- [34]

  Christopher A. Bail.
  Can generative AI improve social science?
  *Proceedings of the National Academy of Sciences*, 121(21):e2314021121, 2024.
  doi:[10.1073/pnas.2314021121](https://doi.org/10.1073/pnas.2314021121).
- [35]

  Mark Granovetter.
  Economic action and social structure: The problem of embeddedness.
  *American Journal of Sociology*, 91(3):481–510, 1985.
- [36]

  Shibani Santurkar, Esin Durmus, Faisal Ladhak, Cinoo Lee, Percy Liang, and
  Tatsunori Hashimoto.
  Whose opinions do language models reflect?
  In *Proceedings of the 40th International Conference on Machine
  Learning (ICML)*, 2023.
  arXiv:2303.17548.
- [37]

  Danica Dillion, Niket Tandon, Yuling Gu, and Kurt Gray.
  Can AI language models replace human participants?
  *Trends in Cognitive Sciences*, 27(7):597–600, 2023.
  doi:[10.1016/j.tics.2023.04.008](https://doi.org/10.1016/j.tics.2023.04.008).
- [38]

  Nian Li, Chen Gao, Mingyu Li, Yong Li, and Qingmin Liao.
  EconAgent: Large language model-empowered agents for simulating
  macroeconomic activities.
  In *Proceedings of the 62nd Annual Meeting of the Association
  for Computational Linguistics (ACL)*, pages 15523–15536, 2024.
  arXiv:2310.10436.
- [39]

  Kurt Lewin.
  *Principles of Topological Psychology*.
  McGraw-Hill, 1936.
- [40]

  NVIDIA.
  Nemotron-personas-usa: Synthetic personas aligned to real-world
  demographic distributions.
  <https://huggingface.co/datasets/nvidia/Nemotron-Personas-USA>,
  2025.
  Synthetic persona dataset, CC-BY-4.0.
- [41]

  Xiaomin Li, Yuexing Hao, Jianheng Hou, Jintao Huang, Qianfeng Wen, Shirley
  Huang, Yifan Liu, Xiaoyi Liu, Yilan Fan, Yijun Wang, et al.
  MatrAIx: Simulating the world with 8.3 billion persona agents.
  *arXiv preprint arXiv:2608.04205*, 2026b.
  Persona 1M public coreset:
  <https://huggingface.co/datasets/MatrAIx2026/MatrAIx_Persona_1M_Public_Release>.
- [42]

  Tao Ge, Xin Chan, Xiaoyang Wang, Dian Yu, Haitao Mi, and Dong Yu.
  Scaling synthetic data creation with 1,000,000,000 personas.
  *arXiv preprint arXiv:2406.20094*, 2024.
- [43]

  Xinnong Zhang et al.
  Employing large language models in agent-based social science
  simulations.
  <https://github.com/Lishi905/SocioVerse-ABM>, 2025b.
  Code, configurations, and results of the companion ABM benchmark
  study.
- [44]

  Guillaume Deffuant, David Neau, Frederic Amblard, and Gerard Weisbuch.
  Mixing beliefs among interacting agents.
  *Advances in Complex Systems*, 3:87–98, 2000.
- [45]

  Jia Wang, Qian Xu, Xuanwen Ding, Zhuangqi Li, Chao He, Bao Liu, and Zhongyu
  Wei.
  Procuregym: A multi-agent markov game framework for modeling national
  volume-based drug procurement, 2026.
  URL <https://arxiv.org/abs/2603.23880>.
- [46]

  Yixu Huang, Yunlu Yin, Jiayu Lin, Xinnong Zhang, Jia Wang, Siyuan Wang,
  Xuanjing Huang, Liyin Jin, and Zhongyu Wei.
  Uncovering salience-driven dynamics in consumer confidence with
  generative social simulation.
  *arXiv preprint arXiv:2606.30395*, 2026.
  Version 1.
- [47]

  Kai Nagel and Michael Schreckenberg.
  A cellular automaton model for freeway traffic.
  *Journal de Physique I*, 2(12):2221–2229,
  1992.
- [48]

  Craig W. Reynolds.
  Flocks, herds and schools: A distributed behavioral model.
  In *Proceedings of the 14th Annual Conference on Computer
  Graphics and Interactive Techniques (SIGGRAPH)*, pages 25–34, 1987.
- [49]

  Dirk Helbing, Illés Farkas, and Tamás Vicsek.
  Simulating dynamical features of escape panic.
  *Nature*, 407:487–490, 2000.
- [50]

  Damien Challet and Yi-Cheng Zhang.
  Emergence of cooperation and organization in an evolutionary game.
  *Physica A: Statistical Mechanics and its Applications*,
  246(3–4):407–418, 1997.
- [51]

  Robert Axelrod.
  *The Evolution of Cooperation*.
  Basic Books, 1984.
- [52]

  Joshua M. Epstein.
  Modeling civil violence: An agent-based computational approach.
  *Proceedings of the National Academy of Sciences*, 99(suppl 3):7243–7250, 2002.
- [53]

  William Ogilvy Kermack and Anderson G. McKendrick.
  A contribution to the mathematical theory of epidemics.
  *Proceedings of the Royal Society of London. Series A*,
  115(772):700–721, 1927.
- [54]

  Rainer Hegselmann and Ulrich Krause.
  Opinion dynamics and bounded confidence: Models, analysis and
  simulation.
  *Journal of Artificial Societies and Social Simulation*,
  5(3), 2002.

## Appendix A Case Study Details and Additional Results

This appendix provides supplementary details for each case study that were omitted from the main text for space.

### A.1 Reporting Protocol

[Table 11](https://arxiv.org/html/2609.24911v1#A1.T11 "In A.1 Reporting Protocol ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") consolidates, for every case study, how stochasticity is handled, what is repeated, and how uncertainty is reported.
The cases fall into two regimes.
Synthetic-dynamics tasks (the ABM benchmark suite, the Chicago extension, and the procurement game) admit inexpensive replication, so they report variation across independent runs: seed-level standard deviations, $t$-based confidence intervals, or large fixed-policy evaluation batches.
Real-data longitudinal backtests (the three macro-index forecasting cases) evaluate a single calibrated configuration against official statistics over multi-year windows, because one run spans the full panel and replication at this scale exceeds a typical research budget; for these cases the tables report point estimates, uncertainty is conveyed through comparison against baseline methods on the same evaluation window, and the single-run status is disclosed here.
The hybrid opinion-dynamics case reports the mean of three runs per scenario from the underlying study.

Table 11: Reporting protocol per case study.

|  |  |  |
| --- | --- | --- |
| Case | Independent repetition | Uncertainty reporting |
| Classic ABM suite | rule-$f$ control: 10 stochastic runs per task; each LLM: 3 runs | mean $\pm$ standard deviation; the controlled group (rule-$f$ scored against itself, 0.911) bounds attainable consistency |
| Hybrid opinion dynamics | 3 runs per scenario, averaged (3 scenarios $\times$ 14 rounds; LLM temperature 0) | micro-level accuracy and F1 per scenario; macro trajectory correlation and bias against the observed series |
| Chicago segregation | 5 perturbation seeds (42–46); rule baselines: 10 seeds; ablations on a 218-tract subset: 3 seeds (5 for race-blind) against matched controls | mean $\pm$ $t$-based 95% confidence interval on endpoint indices |
| Drug procurement | training seed 42 per drug–round task; final checkpoint evaluated over 1,000 episodes; random baseline averaged over 5 runs | distributions and medians across 325 drug–round tasks; fixed-seed replay yields the canonical trajectory |
| CCI nowcast | single calibrated simulation per region (75-month backtest); inertia weights frozen after calibration | point estimates (MAE, RMSE, Pearson $r$) against official indices within a 13-method comparison (12 aggregate baselines; the shock-window ranking uses 14 methods); population-scale sensitivity reported below |
| PMI nowcast | single frozen configuration; parameters fitted on 2015–2018, selected on 2019–2021 | point estimates on two held-out windows against persistence, consensus, and ensemble baselines ([Table 16](https://arxiv.org/html/2609.24911v1#A1.T16 "In Complete held-out comparison. ‣ A.7 Nowcasting the Purchasing Managers’ Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")); mechanism ablations on the development window |
| German car market | single calibrated backtest (600 agents); the offline route uses a deterministic utility model | reconstruction errors over 533 brand–month cells ([Table 19](https://arxiv.org/html/2609.24911v1#A1.T19 "In Brand-level comparison. ‣ A.8 German Passenger-Car Market ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")); labeled as reconstruction, not held-out forecasting |

### A.2 ABM Benchmark Suite

##### Task roster and hyperparameters.

[Table 12](https://arxiv.org/html/2609.24911v1#A1.T12 "In Task roster and hyperparameters. ‣ A.2 ABM Benchmark Suite ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") catalogues the 10 benchmark tasks by family, with their source models, population sizes, simulation lengths, and key configuration parameters.
All tasks use GPT-4o (temperature 0.7, max tokens 256) as the default LLM; ablations on DeepSeek-V3 and Qwen3-235B are reported in the main text.

Table 12: The 10-task ABM benchmark suite: source models, population size $N$, simulation steps, and key configuration parameters. Each task is run under both rule-$f$ and LLM-$f$ on the same observation and action types.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Family | Task | Source ABM | $N$ | Steps | Key parameter |
| Flow | NaSch | [Nagel and Schreckenberg [47]](https://arxiv.org/html/2609.24911v1#bib.bib47) | 200 | 50 | $v\_{\max}=5$, $p\_{\text{brake}}=0.3$ |
| Boids | [Reynolds [48]](https://arxiv.org/html/2609.24911v1#bib.bib48) | 40 | 100 | radius=5, heading tol. $30^{\circ}$ |
| Social Force | [Helbing et al. [49]](https://arxiv.org/html/2609.24911v1#bib.bib49) | 80 | 200 | desired speed 1.2 m/s |
| Market | Sugarscape | [Epstein and Axtell [2]](https://arxiv.org/html/2609.24911v1#bib.bib2) | 200 | 100 | metabolism $\in[1,4]$, vision $\in[1,6]$ |
| Minority Game | [Challet and Zhang [50]](https://arxiv.org/html/2609.24911v1#bib.bib50) | 301 | 100 | memory $m=3$, strategies $s=2$ |
| Axelrod IPD | [Axelrod [51]](https://arxiv.org/html/2609.24911v1#bib.bib51) | 64 | 200 | 5 strategies, round-robin |
| Organization | Schelling | [Schelling [1]](https://arxiv.org/html/2609.24911v1#bib.bib1) | 810 | 30 | threshold 0.3, grid $30\times 30$ |
| Civil Violence | [Epstein [52]](https://arxiv.org/html/2609.24911v1#bib.bib52) | 230 | 50 | legitimacy 0.82, vision 7 |
| Diffusion | SIR rumor | [Kermack and McKendrick [53]](https://arxiv.org/html/2609.24911v1#bib.bib53) | 500 | 30 | $\beta=0.3$, $\gamma=0.1$ |
| Hegselmann–Krause | [Hegselmann and Krause [54]](https://arxiv.org/html/2609.24911v1#bib.bib54) | 100 | 50 | confidence bound 0.2 |

##### Consistency-score metric vectors.

Per-task consistency scores for all four conditions (controlled group, GPT-4o, DeepSeek-V3, Qwen3-235B) are reported in [Figure 10](https://arxiv.org/html/2609.24911v1#S5.F10 "In Results. ‣ 5.2.1 Case Study 1: Reproducing Canonical ABMs with LLM Agents ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").
Each task’s score is computed over a small vector of task-level outcome metrics: the rule-based ABM’s ten-run mean serves as the reference value for every metric, each evaluated run receives one score against that reference, and scores are averaged per condition.
[Table 13](https://arxiv.org/html/2609.24911v1#A1.T13 "In Consistency-score metric vectors. ‣ A.2 ABM Benchmark Suite ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") catalogues the metric vector of every task [[43](https://arxiv.org/html/2609.24911v1#bib.bib43)].

Table 13: Per-task metric vectors entering the consistency score.

|  |  |  |
| --- | --- | --- |
| Task | Metric vector | Definitions |
| NaSch | mean speed; flow rate; stopped fraction | mean vehicle speed (cells/step); throughput $q=\bar{v}\rho$ at density $\rho=0.25$; share of vehicles at speed 0 |
| Social Force | mean speed; density; flow rate | mean speed of active pedestrians; active pedestrians per unit area; their product |
| Boids | polarization; NND; spread; mean speed | alignment order $\Phi=\lvert\langle\hat{v}\rangle\rvert$; mean nearest-neighbour distance; mean distance to flock centroid; mean speed |
| Sugarscape | mean wealth; survivors; Gini | mean sugar of survivors; number of survivors; Gini coefficient of survivor wealth |
| Axelrod IPD | 15 per-strategy scores | mean score per turn of each Axelrod-1980 tournament strategy, in fixed order |
| Minority Game | mean attendance; volatility; variance | mean count choosing side A (${\approx}N/2$); its standard deviation $\sigma$; $\sigma^{2}$ |
| Schelling | initial happy; final happy | satisfied residents in the initial random configuration and at convergence |
| Civil Violence | final active; final jailed; peak active | fractions rebelling and jailed at the last step; largest simultaneous rebellion |
| SIR rumor | final reach; $N$ | agents ever informed; effective population size (largest connected component) |
| Hegselmann–Krause | clusters at $\varepsilon\in\{0.01,0.15,0.25\}$ | final opinion-cluster count at three confidence bounds |

##### Qualitative dynamics comparison.

[Figure 18](https://arxiv.org/html/2609.24911v1#A1.F18 "In Qualitative dynamics comparison. ‣ A.2 ABM Benchmark Suite ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") shows two representative side-by-side comparisons of rule-$f$ and LLM-$f$ group dynamics: Hegselmann–Krause opinion trajectories at confidence bound $\varepsilon=0.15$ (both conditions converge to three opinion clusters) and the SIR rumor curve on a Watts–Strogatz contact network (both reproduce the characteristic spreader peak and saturation of the informed population).

![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/abm_hk_eps015_rule.png)


(a) HK, rule-$f$

![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/abm_hk_eps015_llm.png)


(b) HK, LLM-$f$

![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/abm_sir_ws_rule.png)


(c) SIR rumor, rule-$f$

![Refer to caption](https://arxiv.org/html/2609.24911v1/figures/abm_sir_ws_llm.png)


(d) SIR rumor, LLM-$f$

Figure 18: Qualitative dynamics under rule-$f$ (left) vs. LLM-$f$ (right). The top row shows Hegselmann–Krause opinion trajectories ($\varepsilon=0.15$) and the bottom row SIR rumor spreading on a Watts–Strogatz network. Figures adapted from [Zhang et al. [43]](https://arxiv.org/html/2609.24911v1#bib.bib43).

### A.3 Hybrid Opinion Dynamics

##### Scenario configuration.

Three event-driven scenarios are evaluated:

- •

  Roe v. Wade (abortion rights): triggered by the June 2022 Supreme Court decision; core users include activists, journalists, and political commentators with documented stance histories.
- •

  MeToo (sexual harassment): calibrated on the October 2017 viral-hashtag window and validated on a later campaign window; core users include public figures who engaged prominently in the discourse.
- •

  Black Lives Matter (racial justice): triggered by the May 2020 George Floyd incident; core users include community organizers and media personalities.

##### ABM model selection.

Five interchangeable opinion dynamics models govern ordinary-user attitude updates:
bounded confidence (Deffuant–Weisbuch), Hegselmann–Krause, Lorenz, relative agreement, and social judgement.
The best-performing model is selected per scenario based on macro-level trajectory fit.

##### Simulation configuration.

Core users are driven by LLM agents (temperature 0, max tokens 256) on a customized AgentVerse stack; ordinary users run on Mesa implementations of the five opinion-dynamics ABMs.
Each event simulates 1,000 users (300 core users selected by influence and activity ranking, plus 700 annotated ordinary users) for 14 rounds.
Per-scenario micro-level scores (stance accuracy/F1, content similarity, behavior-type accuracy/F1) are reported in [Table 6](https://arxiv.org/html/2609.24911v1#S5.T6 "In Results. ‣ 5.2.2 Case Study 2: Hybrid Opinion Dynamics on Social Media ‣ 5.2 Case Family I: Simulation Mechanisms ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") of the main text.

##### Cost and scalability.

The hybrid design pins LLM API cost to the number of *core* users: simulation runtime is dominated by the 300 core users’ LLM calls, and scaling the ordinary-user population adds only negligible ABM computation, whereas a pure-LLM simulation scales API calls linearly with the full population [[11](https://arxiv.org/html/2609.24911v1#bib.bib11)].
In the scalability analysis of the original paper, growing the ordinary-user count around a fixed 300-user core leaves all system metrics except attitude bias nearly unchanged while runtime stays essentially flat, supporting sampling-based hybrid simulation as the practical configuration for larger populations.

### A.4 Chicago Segregation

##### Archetype construction.

The 241 household archetypes are constructed from four dimensions of the 2010 Census:
race (5 categories: Non-Hispanic White, Non-Hispanic Black, Hispanic, Non-Hispanic Asian, Other),
income bracket (5 levels: $<$$25K, $25–50K, $50–75K, $75–100K, $>$$100K),
family type (4 categories: married with children, married no children, single parent, single adult),
and neighborhood type (urban core, suburban, transitional).
Not all combinations are populated; the final 241 archetypes cover the observed co-occurrence patterns in Chicago’s census tracts.

Each archetype’s behavioral parameters (mobility rate, ideal own-group percentage, satisfaction factor weights) are calibrated from nine published sociological studies on residential mobility and neighborhood preferences.
The calibration procedure assigns importance weights to seven satisfaction factors (racial composition, housing cost, school quality, safety, transit access, social anchor, job proximity) based on documented group-level preferences.

##### Tract mapping.

The 781 census tracts are connected via Queen contiguity (shared edge or vertex).
Each tract carries dynamic attributes (racial composition, safety score, school quality index, transit access score) that update endogenously as households move.
Initial tract attributes are drawn from the American Community Survey 2006–2010 5-year estimates.

##### Rule-based reference suite.

The baseline comparison in the main text runs five rule-based references on the same tract graph, under the same per-step move budget, capacity limits, inflow caps, and execution machinery as the LLM condition, each for ten perturbation seeds [[43](https://arxiv.org/html/2609.24911v1#bib.bib43)]:
(i) *random reassignment*, distributing households uniformly across tracts (the lower bound on $D\_{BW}$ under spatial independence);
(ii) *classical Schelling* with a single similarity threshold $\tau=0.5$ on the Queen-contiguity graph, relocating to a random feasible neighboring tract;
(iii) the same rule with best-improvement destination choice (feasible neighbor with the highest own-group share);
(iv) a *per-group threshold* rule calibrated from the same literature-derived archetype parameters the LLM receives, moving when the own-group share falls below the archetype’s calibrated minimum;
and (v) a *logit-style utility* rule scoring candidate tracts by a weighted sum of racial fit, safety, school access, transit, amenities, and housing-cost match using each archetype’s satisfaction weights.
Beyond the endpoint indices ([Table 8](https://arxiv.org/html/2609.24911v1#S5.T8 "In Results. ‣ 5.3.1 Case Study 3: Chicago Segregation with Real Census Data ‣ 5.3 Case Family II: Policy Simulation ‣ 5 Evaluation on Social Science Simulation ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")), the conditions differ in their mobility signature: the LLM-driven population’s per-step movers decline toward rest (from roughly 1,050 to 250) as the target pattern is approached, whereas every rule-based condition keeps relocating at the budget cap through step 15, and the per-group threshold rule is still rising at the end of the horizon [[43](https://arxiv.org/html/2609.24911v1#bib.bib43)].

### A.5 Drug Procurement

For each drug-specific task, the RL pipeline trains a role-structured policy set comprising one government policy, one medical-institution policy, and one enterprise policy for each participating firm; parameters are not shared across enterprise actors. The government and medical-institution agents are optimised with PPO, whereas enterprise agents use a centralised-critic PPO formulation under centralised training and decentralised execution, denoted MAPPO. All actors condition solely on role-specific local observations. The government and enterprise critics additionally condition on the concatenated shared state, while the medical-institution critic remains local. The actor and critic each contain two Tanh-activated hidden layers, with widths of 128 and 256, respectively, and layer normalisation applied to their inputs. In the reference configuration, each task is trained with seed 42 for 10,000 episodes of 50 steps. Learning rates are initialised at $5\times 10^{-5}$ and decay linearly to $5\times 10^{-6}$ for the government and enterprise policies and to $7.5\times 10^{-6}$ for the medical-institution policy. PPO uses $\gamma=0.99$, a generalised advantage estimation parameter of $\lambda=0.95$, a clipping ratio of 0.2, a value-loss coefficient of 0.5, a value-function clipping threshold of 50, a maximum gradient norm of 0.5, and a target Kullback–Leibler divergence of 0.01. Each update aggregates 10 complete episodes, corresponding to 500 environment transitions, and performs three optimisation epochs with five-episode minibatches of 250 transitions. The entropy coefficient is annealed from $3\times 10^{-3}$ to $2\times 10^{-4}$ over the first 60% of training for the government and enterprise policies, and from $5\times 10^{-4}$ to $5\times 10^{-5}$ over the first 10% for the medical-institution policy.

The three agent classes optimise distinct objectives: government social welfare, firm-specific enterprise profit, and medical-institution utility. Checkpoints are saved and evaluated every 2,000 training episodes, using 100 episodes for each interim evaluation and 1,000 episodes for the final evaluation. Candidate checkpoints are first restricted to the Pareto-nondominated set defined by mean government social welfare, mean aggregate enterprise profit, and mean medical-institution utility. The final checkpoint is then selected using a balanced lexicographic criterion that prioritises the lowest normalised stakeholder objective, followed by the mean and sum across the three objectives, thereby avoiding their reduction to a fixed weighted scalarisation.

### A.6 Nowcasting the Consumer Confidence Index

##### Regional configurations.

The consumer-confidence case uses one response architecture across the U.S., EU27, and Japan,
while adapting the official survey battery, signal field, and persistence
parameter to each region ([Table 14](https://arxiv.org/html/2609.24911v1#A1.T14 "In Regional configurations. ‣ A.6 Nowcasting the Consumer Confidence Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm")). The U.S.
population is constructed from SIPP and GSS evidence; the EU27 and Japan runs
are cross-context adaptations rather than full local-microdata
rebuilds [[46](https://arxiv.org/html/2609.24911v1#bib.bib46)].

Table 14: Region-specific configuration of the consumer-confidence case. The inertia weights are
selected by validation RMSE on January–June 2024 and then frozen.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Region | Population substrate | Official target and scoring | Environment adaptation | Inertia $\lambda$ |
| U.S. | SIPP-calibrated households;  GSS-grounded behavioral attributes | Michigan five-item battery;  published ICC/ICE normalization | U.S. macro, labor, housing,  financial, policy, and news signals | 0.4 |
| EU27 | Shared response architecture;  no full local microdata rebuild | EC/Eurostat balances: finances, economy,  unemployment (reversed), and savings | EU27 target scale and  region-matched macro/market field | 0.6 |
| Japan | Shared response architecture;  no full local microdata rebuild | Cabinet Office/ESRI: livelihood, income,  employment, and durable buying | Japanese target scale and  region-matched macro/market field | 0.7 |

The three official indices use different scales; levels are therefore compared
within, not across, regions.

##### Month-level audit.

[Table 15](https://arxiv.org/html/2609.24911v1#A1.T15 "In Month-level audit. ‣ A.6 Nowcasting the Consumer Confidence Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") reports the rolling public-interface
snapshot available on July 13, 2026.-1
April–June 2026 are later operational predictions and are excluded from the
main-text evaluation.

Table 15: Recent monthly simulated predictions and official CCI values for
all three regions. “Pred.” denotes the value shown on the public
interface of the consumer-confidence case.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | U.S. | | EU27 | | Japan | |
| Month | Pred. | Official | Pred. | Official | Pred. | Official |
| 2025-08 | 62.12 | 61.7 | $-13.42$ | $-13.2$ | 34.76 | 34.0 |
| 2025-09 | 63.01 | 58.2 | $-13.23$ | $-13.4$ | 34.07 | 34.9 |
| 2025-10 | 59.61 | 55.1 | $-13.39$ | $-13.5$ | 34.89 | 35.4 |
| 2025-11 | 56.30 | 53.6 | $-12.96$ | $-12.5$ | 35.31 | 35.9 |
| 2025-12 | 55.32 | 54.0 | $-12.11$ | $-12.3$ | 35.90 | 37.2 |
| 2026-01 | 55.91 | 54.9 | $-12.40$ | $-12.6$ | 37.22 | 36.9 |
| 2026-02 | 57.26 | 56.4 | $-12.54$ | $-12.8$ | 37.00 | 37.4 |
| 2026-03 | 58.65 | 57.6 | $-11.81$ | $-11.9$ | 37.69 | 37.7 |
| 2026-04 | 57.47 | 56.4 | $-11.97$ | $-12.4$ | 39.65 | 39.3 |
| 2026-05 | 53.00 | 53.2 | $-13.60$ | $-13.9$ | 35.10 | 36.0 |
| 2026-06 | 52.70 | 49.5 | $-15.10$ | $-17.0$ | 34.80 | 33.8 |

##### Population-size sensitivity.

With a fixed 5,000-agent core, expansion from $5\times$ to $50\times$ reduces
MAE from 6.10 to 1.72 and raises Pearson $r$ from 0.682 to 0.979. The
$100\times$ run changes these values only to 1.70 and 0.980, supporting the
$50\times$ configuration as the accuracy–scale plateau. The sweep is reported by the underlying study on a recent U.S. evaluation window distinct from the 75-month backtest.

### A.7 Nowcasting the Purchasing Managers’ Index

##### Temporal protocol.

Inputs are frozen at the 21st-day cutoff and evaluated against first-print ISM
Manufacturing PMI. Parameters are calibrated on 2015–2018 and selected on
2019–2021; evaluation uses a clean test (2022-01–2023-10) and a post-cutoff
test (2023-11–2026-06), each preceded by a three-month memory warm-up.

##### Tuned and frozen quantities.

The change scale $c=0.2272$, update step $\kappa=0.2$, and Bates–Granger weight
$w=0.1675$ are fitted before held-out evaluation and then frozen. The protocol
uses 300 firms, one vote per firm, five equally weighted PMI components, and an
October 2023 response-model knowledge cutoff.

##### Complete held-out comparison.

[Table 16](https://arxiv.org/html/2609.24911v1#A1.T16 "In Complete held-out comparison. ‣ A.7 Nowcasting the Purchasing Managers’ Index ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") compares the frozen model with consensus,
persistence, the predecessor response kernel, and a mechanical-threshold twin.

Table 16: Complete PMI comparison on the two held-out windows. Direction is
the accuracy of $\operatorname{sign}(\widehat{Y}\_{t}-Y\_{t-1})$. Persistence
makes no directional call.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Window | Method | MAE | RMSE | Direction | Side of 50 |
| Clean test  2022-01–2023-10 | Agent-based change nowcast | 1.025 | 1.228 | 65.0% | 95.5% |
| Bates–Granger ensemble | 0.928 | 1.151 | 80.0% | 100.0% |
| Earlier-kernel change nowcast | 1.044 | 1.246 | 70.0% | 95.5% |
| Earlier-kernel ensemble | 0.933 | 1.157 | 80.0% | 100.0% |
| Mechanical-threshold twin | 1.041 | 1.243 | 70.0% | 95.5% |
| Market consensus | 0.936 | 1.160 | 75.0% | 95.5% |
| Persistence | 1.073 | 1.293 | — | 95.5% |
| Post-cutoff  2023-11–2026-06 | Agent-based change nowcast | 0.892 | 1.256 | 58.6% | 87.5% |
| Bates–Granger ensemble | 0.898 | 1.188 | 51.7% | 90.6% |
| Earlier-kernel change nowcast | 0.942 | 1.258 | 65.5% | 87.5% |
| Earlier-kernel ensemble | 0.900 | 1.184 | 55.2% | 87.5% |
| Mechanical-threshold twin | 0.940 | 1.257 | 65.5% | 87.5% |
| Market consensus | 0.922 | 1.202 | 51.7% | 90.6% |
| Persistence | 0.894 | 1.279 | — | 84.4% |

##### Ablation matrix.

Mechanism ablations use the 2019–2021 development window and a fixed 165-firm
subpanel. Downstream coefficients remain frozen; inertia applies only to the
level path.

Table 17: Complete PMI mechanism-ablation matrix. $\Delta$MAE is relative to
the full model under the same output path. Positive values indicate higher
error after removal.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Variant | Output path | MAE | Direction | $\Delta$MAE |
| Full model | Level | 4.868 | 0.400 | 0.000 |
| Full model | Change | 1.948 | 0.441 | 0.000 |
| Without post-stratification | Level | 4.817 | 0.400 | $-0.051$ |
| Without post-stratification | Change | 1.917 | 0.471 | $-0.031$ |
| Without inertia alignment | Level | 5.905 | 0.429 | 1.037 |
| Deterministic response kernel | Level | 5.044 | 0.600 | 0.176 |
| Deterministic response kernel | Change | 1.900 | 0.514 | $-0.048$ |
| Without news field | Level | 4.877 | 0.400 | 0.009 |
| Without news field | Change | 1.953 | 0.441 | 0.005 |
| Without manager memorandum | Level | 4.904 | 0.400 | 0.036 |
| Without manager memorandum | Change | 1.932 | 0.471 | $-0.016$ |
| Homogeneous firm persona | Level | 4.697 | 0.429 | $-0.171$ |
| Homogeneous firm persona | Change | 1.957 | 0.441 | 0.009 |
| Without longitudinal memory | Level | 5.121 | 0.400 | 0.253 |
| Without longitudinal memory | Change | 1.942 | 0.471 | $-0.006$ |

Removing inertia causes the largest level-path degradation ($+1.037$ MAE);
change-path differences are small and should be interpreted as diagnostics on
this 36-month reduced panel.

### A.8 German Passenger-Car Market

##### Evaluation protocol.

The German passenger-car case is evaluated as a monthly market-share
reconstruction. Simulated and KBA observations are aligned at the brand and
powertrain levels according to [Table 18](https://arxiv.org/html/2609.24911v1#A1.T18 "In Evaluation protocol. ‣ A.8 German Passenger-Car Market ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm").

Table 18: Evaluation protocol for the German passenger-car case.

|  |  |
| --- | --- |
| Protocol element | Specification |
| Market and outcome | Monthly shares of German private passenger-car registrations; KBA registrations provide the empirical reference. |
| Units of analysis | Brand–month cells for the primary comparison and powertrain–month cells for supplementary reconstruction. |
| Market taxonomy | 13 mutually exclusive brand groups and four powertrains (BEV, PHEV, HEV, and internal combustion). |
| Time coverage | Simulation: January 2023–July 2026; KBA reference: January 2023–May 2026. |
| Matched sample | 41 overlapping months $\times$ 13 brand groups $=533$ brand–month cells. |
| Comparison rule | Simulated and observed shares are aligned by calendar month and market category; errors are reported in percentage points. |

##### Market configuration.

The calibrated backtest uses 600 representative agents. Counts are normalized
to approximately 80,000 monthly units before conversion to market shares; the
two simulated months without KBA observations are excluded from evaluation.

##### Calibration diagnostics.

Post-hoc calibration uses a pseudo-count of 30, exponential smoothing
($\alpha=0.45$), and a 0.03 per-cell residual cap. Across matched brand cells,
MAE is 0.442 percentage points and RMSE is 0.618 percentage points. Because
KBA observations enter calibration, these are reconstruction rather than
held-out forecasting scores.

##### Brand-level comparison.

[Table 19](https://arxiv.org/html/2609.24911v1#A1.T19 "In Brand-level comparison. ‣ A.8 German Passenger-Car Market ‣ Appendix A Case Study Details and Additional Results ‣ SocioVerse2: A Longitudinal Dynamic Social Simulation Framework under a Human-AI Co-evolutionary Paradigm") summarizes market level, absolute error,
and month-to-month co-movement. BYD has the smallest MAE and highest
correlation; the broad *Other* group and VW have the largest discrepancies.

Table 19: Brand-level simulated versus KBA registration shares,
January 2023–May 2026 ($n=41$ months per brand).

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Brand group | Mean KBA share | Mean simulated share | MAE (pp) | Pearson $r$ |
| VW | 18.970% | 19.174% | 0.801 | 0.558 |
| BMW | 8.442% | 8.623% | 0.539 | 0.633 |
| Mercedes | 9.299% | 9.162% | 0.554 | 0.709 |
| Audi | 7.646% | 7.687% | 0.414 | 0.796 |
| Skoda | 7.274% | 7.020% | 0.484 | 0.859 |
| Seat/Cupra | 5.232% | 5.125% | 0.309 | 0.799 |
| Opel | 5.003% | 4.940% | 0.391 | 0.686 |
| Toyota | 2.935% | 2.942% | 0.266 | 0.770 |
| Hyundai | 3.460% | 3.319% | 0.239 | 0.666 |
| Renault | 2.118% | 2.189% | 0.253 | 0.546 |
| Tesla | 1.444% | 1.736% | 0.508 | 0.761 |
| BYD | 0.508% | 0.549% | 0.157 | 0.951 |
| Other | 27.400% | 27.535% | 0.834 | 0.704 |
| All 533 cells | — | — | 0.442 | — |
