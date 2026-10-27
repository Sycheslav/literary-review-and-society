---
id: arxiv-2502-14143-text
type: material
title: Multi-Agent Risks from Advanced AI
work_id: arxiv-2502-14143
source_url: https://arxiv.org/html/2502.14143v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 57ea83ac3c3d5af656a228d006a0f2a85cdd838607ca8577e08aa13046a9ede3
---

> Источник: [https://arxiv.org/html/2502.14143v1](https://arxiv.org/html/2502.14143v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Multi-Agent Risks from Advanced AI

Lewis Hammond
  
Alan Chan
  
Jesse Clifton
  
Jason Hoelscher-Obermaier
  
Akbir Khan
  
Euan McLean
  
Chandler Smith
  
Wolfram Barfuss
  
Jakob Foerster
  
Tomáš Gavenčiak
  
The Anh Han
  
Edward Hughes
  
Vojtěch Kovařík
  
Jan Kulveit
  
Joel Z. Leibo
  
Caspar Oesterheld
  
Christian Schroeder de Witt
  
Nisarg Shah
  
Michael Wellman
  
Paolo Bova
  
Theodor Cimpeanu
  
Carson Ezell
  
Quentin Feuillade-Montixi
  
Matija Franklin
  
Esben Kran
  
Igor Krawczuk
  
Max Lamparth
  
Niklas Lauffer
  
Alexander Meinke
  
Sumeet Motwani
  
Anka Reuel
  
Vincent Conitzer
  
Michael Dennis
  
Iason Gabriel
  
Adam Gleave
  
Gillian Hadfield
  
Nika Haghtalab
  
Atoosa Kasirzadeh
  
Sébastien Krier
  
Kate Larson
  
Joel Lehman
  
David C. Parkes
  
Georgios Piliouras
  
Iyad Rahwan

February 19 2025

See [covers/front.pdf](https://covers/front.pdf)

Lewis Hammond1,2,\*

Alan Chan3,4,
Jesse Clifton5,1,
Jason Hoelscher-Obermaier6,
Akbir Khan7,8,(1),
Euan McLean†,
Chandler Smith1

Wolfram Barfuss9,
Jakob Foerster2,10,
Tomáš Gavenčiak11,
The Anh Han12,
Edward Hughes13,
Vojtěch Kovařík14,(15),
Jan Kulveit11,
Joel Z. Leibo13,
Caspar Oesterheld15,
Christian Schroeder de Witt2,
Nisarg Shah16,
Michael Wellman17

Paolo Bova12,
Theodor Cimpeanu18,(19)
Carson Ezell20,
Quentin Feuillade- Montixi21,(†),
Matija Franklin8,
Esben Kran6,
Igor Krawczuk†,(22),
Max Lamparth23,
Niklas Lauffer24,
Alexander Meinke25,(†),
Sumeet Motwani2,(24),
Anka Reuel23,20

Vincent Conitzer15,
Michael Dennis13,
Iason Gabriel13,
Adam Gleave26,
Gillian Hadfield27,
Nika Haghtalab24,
Atoosa Kasirzadeh15,
Sébastien Krier13,
Kate Larson28,13,
Joel Lehman†,
David C. Parkes20,
Georgios Piliouras13,29,
Iyad Rahwan30

1Cooperative AI Foundation
  
2University of Oxford
  
3Mila
  
4Centre for the Governance of AI
  
5Center on Long-Term Risk
  
6Apart Research
  
7Anthropic
  
8University College London
  
9University of Bonn
  
10Meta AI
  
11Charles University
  
12Teesside University
  
13Google DeepMind
  
14Czech Technical University
  
15Carnegie Mellon University
  
16University of Toronto
  
17University of Michigan
  
18University of Stirling
  
19University of St Andrews
  
20Harvard University
  
21PRISM AI
  
22École Polytechnique Fédérale de Lausanne
  
23Stanford University
  
24University of California, Berkeley
  
25Apollo Research
  
26FAR.AI
  
27Johns Hopkins University
  
28University of Waterloo
  
29Singapore University of Technology and Design
  
30Max Planck Institute for Human Development
  
†Independent

Abstract

The rapid development of advanced AI agents and the imminent deployment of many instances of these agents will give rise to multi-agent systems of unprecedented complexity.
These systems pose novel and under-explored risks.
In this report, we provide a structured taxonomy of these risks by identifying three key failure modes (miscoordination, conflict, and collusion) based on agents’ incentives, as well as seven key risk factors (information asymmetries, network effects, selection pressures, destabilising dynamics, commitment problems, emergent agency, and multi-agent security) that can underpin them.
We highlight several important instances of each risk, as well as promising directions to help mitigate them.
By anchoring our analysis in a range of real-world examples and experimental evidence, we illustrate the distinct challenges posed by multi-agent systems and their implications for the safety, governance, and ethics of advanced AI.

## Contents

## Executive Summary

The proliferation of increasingly advanced AI not only promises widespread benefits, but also presents new risks ([Bengio et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx68); [Chan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx127)).
Today, AI systems are beginning to autonomously interact with one another and adapt their behaviour accordingly, forming multi- agent systems.
This change is due to the widespread adoption of sophisticated models that can interact via a range of modalities (including text, images, and audio), and the competitive advantages conferred by autonomous, adaptive agents ([Google DeepMind, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx259); [Anthropic, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx29); [OpenAI, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx509)).

While still relatively rare, groups of advanced AI agents are already responsible for tasks that range from trading million-dollar assets ([Ferreira et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx218); [AmplifyETFs, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx24); [Sun et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx644)) to recommending actions to commanders in battle ([Palantir, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx520); [Manson, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx434); [Black et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx83)).
In the near future, applications will include not only economic and military domains, but are likely to extend to energy management, transport networks, and other critical infrastructure ([Mayorkas, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx443); [Camacho et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx113)).
Large populations of AI agents will also feature in more familiar social settings as intelligent personal assistants or representatives, capable of being delegated increasingly complex and important tasks.

While bringing new opportunities for scalable automation and more diffuse benefits to society, these advanced, multi-agent systems present novel risks that are distinct from those posed by single agents or less advanced technologies, and which have been systematically underappreciated and understudied.
This lack of attention is partly because present-day multi-agent systems are rare (and those that do exist are often highly controlled, such as in automated warehouses), but also because even single agents present many unsolved problems ([Amodei et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx22); [Hendrycks et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx298); [Anwar et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx31)).
Given the current rate of progress and adoption, however, we urgently need to evaluate (and prepare to mitigate) multi-agent risks from advanced AI.
More concretely, we provide recommendations throughout the report that can largely be classified as follows.

- •

  Evaluation: Today’s AI systems are developed and tested in isolation, despite the fact that they will soon interact with each other.
  In order to understand how likely and severe multi-agent risks are, we need new methods of detecting how and when they might arise, such as:
  evaluating the cooperative capabilities, biases, and vulnerabilities of models;
  testing for new or improved dangerous capabilities in multi-agent settings (such as manipulation, collusion, or overriding safeguards);
  more open-ended simulations to study dynamics, selection pressures, and emergent behaviours;
  and studies of how well these tests and simulations match real-world deployments.
- •

  Mitigation: Evaluation is only the first step towards mitigating multi-agent risks, which will require new technical advances.
  While our understanding of these risks is still growing, there are promising directions that we can begin to explore now, such as:
  scaling peer incentivisation methods to state-of-the-art models;
  developing secure protocols for trusted agent interactions;
  leveraging information design and the potential transparency of AI agents; and
  stabilising dynamic multi-agent networks and ensuring they are robust to the presence of adversaries.
- •

  Collaboration: Multi-agent risks inherently involve many different actors and stakeholders, often in complex, dynamic environments.
  Greater progress can be made on these interdisciplinary problems by leveraging insights from other fields, such as:
  better understanding the causes of undesirable outcomes in complex adaptive systems and evolutionary settings;
  determining the moral responsibilities and legal liabilities for harms not caused by any single AI system;
  drawing lessons from existing efforts to regulate multi-agent systems in high-stakes contexts, such as financial markets;
  and determining the security vulnerabilities and affordances of multi-agent systems.

To support these recommendations, we introduce a taxonomy of AI risks that are new, much more challenging, or qualitatively different in the multi-agent setting, together with a preliminary assessment of what can be done to mitigate them.
We identify three high-level failure modes, which depend on the nature of the agents’ objectives and the intended behaviour of the system: miscoordination, conflict, and collusion.
We then describe seven key risk factors that can lead to these failures: information asymmetries, network effects, selection pressures, destabilising dynamics, commitment and trust, emergent agency, and multi-agent security.
For each problem we provide a definition, key instances of how and where it can arise, illustrative *case studies*, and promising directions for future work.
We conclude by discussing the implications for existing work in AI safety, AI governance, and AI ethics.

## 1 Introduction

The proliferation of increasingly advanced AI not only promises widespread benefits, but also presents new risks ([Bengio et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx68); [Chan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx127)).
In the future, AI systems will commonly interact and adapt in response to one another, forming *multi-agent systems*.1
This trend will be driven by several factors.
First, recent technical progress and publicity will continue to drive adoption, including in high-stakes areas such as financial trading ([Ferreira et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx218); [AmplifyETFs, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx24); [Sun et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx644)) and military strategy ([Palantir, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx520); [Manson, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx434); [Black et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx83)).
Second, AI systems that can act autonomously and adapt while deployed as agents will have competitive advantages compared to non-adaptive systems or those with humans in the loop.
Third, the more widely such agents are deployed, the more they will come to interact with one another.

The emergence of these advanced multi-agent systems presents a number of risks which have thus far been systematically underappreciated and understudied.
In part, this lack of attention is because the deployment of such systems is currently rare, or constrained to highly controlled settings (such as automated warehouses) that do not suffer from the most severe risks.
In part, it is because even the simpler problem of ensuring the safe and ethical behaviour of a single advanced AI system is far from solved ([Amodei et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx22); [Hendrycks et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx298); [Anwar et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx31)), and multi-agent settings are strictly more complex.
Indeed, many multi-agent risks are inherently sociotechnical and require attention from many stakeholders and researchers across many disciplines ([Curtis et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx167); [Lazar & Nelson, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx388)).

Importantly, these risks are distinct from those posed by single agents or less advanced technologies, and will not necessarily be addressed by efforts to mitigate the latter.
For example:
the alignment of AI agents with different actors is insufficient to prevent conflict if those actors have diverging interests ([Sourbut et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx632); [Manheim, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx431); [Dafoe et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx169); [Critch & Krueger, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx161); [Jagadeesan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx329));
errors that may be acceptable in isolation could compound in complex, dynamic networks of agents ([Lee & Tiwari, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx390); [Maas, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx427); [Kirilenko et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx360); [Buldyrev et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx108); [Sanders et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx575));
and groups of agents could combine or collude to develop dangerous capabilities or goals that cannot be ascribed to any individual ([Jones et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx342); [Motwani et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx468); [Mogul, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx465); [Calvano et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx112); [Drexler, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx195)).
Advanced AI also introduces phenomena that differ fundamentally from previous generations of AI or other technologies, requiring new approaches to mitigating these risks ([Bengio et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx68)).

With the current rate of progress, we therefore urgently need to evaluate (and prepare to mitigate) multi-agent risks from advanced AI.
In this report we take a first step in this direction by providing a taxonomy of risks that either: emerge, are much more challenging, or are qualitatively different in the multi-agent setting (see [Table 1](https://arxiv.org/html/2502.14143v1#S1.T1 "In 1.1 Overview ‣ 1 Introduction ‣ Multi-Agent Risks from Advanced AI")).
We identify three key high-level failure modes ([Section 2](https://arxiv.org/html/2502.14143v1#S2 "2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")), and seven key risk factors that can lead to these failures ([Section 3](https://arxiv.org/html/2502.14143v1#S3 "3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), before discussing the implications for AI safety, AI governance, and AI ethics ([Section 4](https://arxiv.org/html/2502.14143v1#S4 "4 Implications ‣ Multi-Agent Risks from Advanced AI")).
Throughout the report we illustrate these risks with concrete examples, either from real-world events, previous research, or novel experiments (see [Table 3](https://arxiv.org/html/2502.14143v1#S1.T3 "In 1.3 Related Work ‣ 1 Introduction ‣ Multi-Agent Risks from Advanced AI")).

### 1.1 Overview

We begin by identifying different *failure modes* in multi-agent systems based on the nature of the agents’ goals and the intended behaviour of the system.
In most multi-agent systems, we are interested in AI agents working together to achieve their respective goals or the goals of those who deployed them.
In this case, we categorise failures into miscoordination ([Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")), where agents fail to cooperate despite having the *same goal*, and conflict ([Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")), where agents with *different goals* fail to cooperate.
A third and final kind of failure – collusion ([Section 2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")) – can arise in competitive settings where we do *not* want agents cooperating (such as markets).

|  |  |  |
| --- | --- | --- |
| Risk | Instances | Directions |
| [2.1 Miscoordination](https://arxiv.org/html/2502.14143v1#S2.SS1 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")  A  A | $\bullet$ Incompatible Strategies  $\bullet$ Credit Assignment  $\bullet$ Limited Interactions | $\bullet$ Communication  $\bullet$ Norms and Conventions  $\bullet$ Modelling Other Agents |
| [2.2 Conflict](https://arxiv.org/html/2502.14143v1#S2.SS2 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")  A  A  A  A | $\bullet$ Social Dilemmas  $\bullet$ Military Domains  $\bullet$ Coercion and Extortion  A  A | $\bullet$ Learning Peer and Pool Incentivisation  $\bullet$ Establishing Trust  $\bullet$ Normative Approaches to Equilibrium Selection  $\bullet$ Cooperative Dispositions  $\bullet$ Agent Governance  $\bullet$ Evidential Reasoning |
| [2.3 Collusion](https://arxiv.org/html/2502.14143v1#S2.SS3 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")  A  A | $\bullet$ Markets  $\bullet$ Steganography  A | $\bullet$ Detecting AI Collusion  $\bullet$ Mitigating AI Collusion  $\bullet$ Assessing Impacts on Safety Protocols |
| [3.1 Information Asymmetries](https://arxiv.org/html/2502.14143v1#S3.SS1 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A | $\bullet$ Communication Constraints  $\bullet$ Bargaining  $\bullet$ Deception | $\bullet$ Information Design  $\bullet$ Individual Information Revelation  $\bullet$ Few-Shot Coordination  $\bullet$ Truthful AI |
| [3.2 Network Effects](https://arxiv.org/html/2502.14143v1#S3.SS2 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A | $\bullet$ Error Propagation  $\bullet$ Network Rewiring  $\bullet$ Homogeneity and Correlated Failures | $\bullet$ Evaluating and Monitoring Networks  $\bullet$ Faithful and Tractable Simulations  $\bullet$ Improving Network Security and Stability |
| [3.3 Selection Pressures](https://arxiv.org/html/2502.14143v1#S3.SS3 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A  A | $\bullet$ Undesirable Dispositions from Competition  $\bullet$ Undesirable Dispositions from Human Data  $\bullet$ Undesirable Capabilities | $\bullet$ Evaluating Against Diverse Co-Players  $\bullet$ Environment Design  $\bullet$ Understanding the Impacts of Training  $\bullet$ Evolutionary Game Theory  $\bullet$ Simulating Selection Pressures |
| [3.4 Destabilising Dynamics](https://arxiv.org/html/2502.14143v1#S3.SS4 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A  A | $\bullet$ Feedback Loops  $\bullet$ Cyclic Behaviour  $\bullet$ Chaos  $\bullet$ Phase Transitions  $\bullet$ Distributional Shift | $\bullet$ Understanding Dynamics  $\bullet$ Monitoring and Stabilising Dynamics  $\bullet$ Regulating Adaptive Multi-Agent Systems  A  A |
| [3.5 Commitment and Trust](https://arxiv.org/html/2502.14143v1#S3.SS5 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A  A | $\bullet$ Inefficient Outcomes  $\bullet$ Threats and Extortion  $\bullet$ Rigidity and Mistaken Commitments  A | $\bullet$ Keeping Humans in the Loop  $\bullet$ Limiting Commitment Power  $\bullet$ Institutions and Normative Infrastructure  $\bullet$ Privacy-Preserving Monitoring  $\bullet$ Mutual Simulation and Transparency |
| [3.6 Emergent Agency](https://arxiv.org/html/2502.14143v1#S3.SS6 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A | $\bullet$ Emergent Capabilities  $\bullet$ Emergent Goals  A  A | $\bullet$ Empirical Exploration  $\bullet$ Theories of Emergent Capabilties  $\bullet$ Theories of Emergent Goals  $\bullet$ Monitoring and Intervening on Collective Agents |
| [3.7 Multi-Agent Security](https://arxiv.org/html/2502.14143v1#S3.SS7 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")  A  A  A  A | $\bullet$ Swarm Attacks  $\bullet$ Heterogeneous Attacks  $\bullet$ Social Engineering at Scale  $\bullet$ Vulnerable AI Agents  $\bullet$ Cascading Security Failures  $\bullet$ Undetectable Threats | $\bullet$ Secure Interaction Protocols  $\bullet$ Monitoring and Threat Detection  $\bullet$ Multi-Agent Adversarial Testing  $\bullet$ Sociotechnical Security Defences  A  A |

Table 1: An overview of the instances and research directions identified for each failure mode and risk factor (see [Sections 2](https://arxiv.org/html/2502.14143v1#S2 "2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and [3](https://arxiv.org/html/2502.14143v1#S3 "3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") for a discussion of each bullet point).

We next introduce a number of *risk factors* by which these failure modes can arise, and which are largely independent of the agents’ precise incentives.2
For example, information asymmetries could lead to miscoordination between agents with the same goal, or to conflict among agents with competing goals.
These factors are not specific to AI systems, but the differences between AI systems and other kinds of intelligent agents (such as humans or corporations) leads to different risk instances and potential solutions.
Finally, note that the following factors are not necessarily exhaustive or mutually exclusive.

- •

  Information asymmetries ([Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): private information can lead to miscoordination, deception, and conflict;
- •

  Network effects ([Section 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): minor changes in properties or connection patterns of agents in a network can lead to dramatic changes in the behaviour of the whole group;
- •

  Selection pressures ([Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): some aspects of training and selection by those deploying and using AI agents can lead to undesirable behaviour;
- •

  Destabilising dynamics ([Section 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): systems that adapt in response to one another can produce dangerous feedback loops and unpredictability;
- •

  Commitment and trust ([Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): difficulties in forming credible commitments, trust, or reputation can prevent mutual gains in AI-AI and human-AI interactions;
- •

  Emergent agency ([Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): qualitatively different goals or capabilities can emerge from the composition of innocuous independent systems or behaviours;
- •

  Multi-agent security ([Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")): multi-agent systems give rise to new kinds of security threats and vulnerabilities.

We conclude the report by surveying the safety, governance, and ethical *implications* of these risks (see [Table 2](https://arxiv.org/html/2502.14143v1#S1.T2 "In 1.1 Overview ‣ 1 Introduction ‣ Multi-Agent Risks from Advanced AI")).
For example, most work on AI safety ([Section 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")) focuses on issues such as the robustness, interpretability, or alignment of a single system ([Amodei et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx22); [Hendrycks et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx298); [Anwar et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx31)), despite the fact that an increasing number of proposals for building safer AI systems are implicitly multi-agent (e.g., [Irving et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx322); [Drexler, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx194); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266); [Schwettmann et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx592); [Perez et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx535)).
The fact that AI governance ([Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")) efforts often involve multi-stakeholder settings provides hope that governance tools can complement technical advances to mitigate multi-agent risks ([Reuel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx561); [Trager et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx657)).
At the same time, multi-agent interactions naturally raise questions in AI ethics ([Section 4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")) related to issues of fairness, collective responsibility, and the social good ([Gabriel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx236); [Zhang & Shah, 2014](https://arxiv.org/html/2502.14143v1#bib.bibx724); [Friedenberg & Halpern, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx232)).

|  |  |  |
| --- | --- | --- |
| [4.1 Safety](https://arxiv.org/html/2502.14143v1#S4.SS1 "In 4 Implications ‣ Multi-Agent Risks from Advanced AI") | [4.2 Governance](https://arxiv.org/html/2502.14143v1#S4.SS2 "In 4 Implications ‣ Multi-Agent Risks from Advanced AI") | [4.3 Ethics](https://arxiv.org/html/2502.14143v1#S4.SS3 "In 4 Implications ‣ Multi-Agent Risks from Advanced AI") |
| $\bullet$ Alignment is Not Enough  $\bullet$ Collusion in Adversarial Safety Schemes  $\bullet$ Dangerous Collective Goals and Capabilities  $\bullet$ Correlated and Compounding Failures  $\bullet$ Robustness and Security in Multi-Agent Systems | $\bullet$ Supporting Research on Multi-Agent Risks  $\bullet$ Multi-Agent Evaluations  $\bullet$ New Forms of Documentation  $\bullet$ Infrastructure for AI Agents  $\bullet$ Restrictions on Development and Deployment  $\bullet$ Liability for Harms from Multi-Agent Systems  $\bullet$ Improving Societal Resilience | $\bullet$ Pluralistic Alignment  $\bullet$ Agentic Inequality  $\bullet$ Epistemic Destablisation  $\bullet$ Compounding of Unfairness and Bias  $\bullet$ Compounding of Privacy Loss  $\bullet$ Accountability Diffusion  A  A |

Table 2: An overview of the implications of multi-agent risks for existing work in AI safety, governance, and ethics (see [Section 4](https://arxiv.org/html/2502.14143v1#S4 "4 Implications ‣ Multi-Agent Risks from Advanced AI") for a discussion of each bullet point).

### 1.2 Scope

Concerns about the risks posed by AI systems range from biased hiring decisions ([Raghavan et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx552)) to existential catastrophes ([Bostrom, 2014](https://arxiv.org/html/2502.14143v1#bib.bibx96)), and are represented by a vast literature.
Before giving a brief overview of the most closely related works, it is therefore worth us pausing to clarify the scope of this report, which is as follows.

- •

  Risks and failure modes: we seek to identify specific mechanisms via which risks could emerge, rather than just just the open research problems that these risks present.
- •

  Multiple agents: if the risk could arise in essentially the same way in the context of a single AI system, then we deem it to be out of scope for this report (while not diminishing its importance).3
- •

  Advanced AI: while many of the risks we identify also apply to simpler systems, their effects are most severe in the context of increasingly autonomous and powerful AI agents,4 and so this is where our primary focus lies.
- •

  Real-world examples: wherever possible, we make sure to ground these risks in real-world events, previous research, or novel experiments – not merely hypothetical speculation (see [Table 3](https://arxiv.org/html/2502.14143v1#S1.T3 "In 1.3 Related Work ‣ 1 Introduction ‣ Multi-Agent Risks from Advanced AI")).
- •

  Technical perspectives: due to the authors’ expertise (and to keep the scope of the report manageable), we primarily discuss risks from a technical perspective, while acknowledging that this perspective is limited.
- •

  Concrete paths forwards: where possible, we aim to specify relatively narrow proposals for future research, in the hope that this makes it easier for others to contribute.

Needless to say, multi-agent risks from advanced AI are by no means the only risks posed by AI, and the perspective we take in this report is by no means the only approach to understanding these risks.
Moreover, we almost entirely neglect the potential upsides of advanced multi-agent systems:
greater decentralisation and democratisation of AI technologies;
assistance in cooperating and coordinating with others;
increased robustness, flexibility, and efficiency;
novel approaches to solving alignment and safety issues in single-agent settings;
and – perhaps most importantly – more widespread and evenly distributed benefits from AI.
We hope that this report serves to complement earlier and adjacent research on understanding these challenges and opportunities.

### 1.3 Related Work

The most similar report to ours is that of [Manheim (2019)](https://arxiv.org/html/2502.14143v1#bib.bibx431), who introduces a range of technical multi-agent failure modes through the lens of *model over-optimization*. This over-optimisation can result in the intended and actual behaviour of the model coming apart when faced with low-probability inputs, a regime change, measurement errors, or inaccuracies in the model’s internal representations. While this lens is helpful for understanding some multi-agent risk factors, not all factors can neatly be captured through it.
[Mogul (2006)](https://arxiv.org/html/2502.14143v1#bib.bibx465); [Altmann et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx19) take an alternative perspective and focus on ‘emergent’ failures that occur specifically in multi-agent settings, though their focus is not on advanced AI agents.
Also highly relevant is [Clifton (2020)](https://arxiv.org/html/2502.14143v1#bib.bibx144)’s agenda on cooperation and conflict in the context of transformative AI, though the priority of that work is to describe a set of promising research directions, rather than to explicate the underlying risks.

More broadly, the topics of this report are closely related to the emerging subfield of *cooperative AI* ([Dafoe et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx169); [Bertino et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx73); [Dafoe et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx168); [Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151)), which chiefly studies how to engineer AI systems in order to help solve cooperation problems between humans, AI agents, or combinations thereof.
In contrast to these previous agendas, we also discuss failures from undesirable cooperation (i.e., collusion) and focus more on the concrete mechanisms via which failures can occur, rather than the capabilities needed for addressing them.
We also incorporate additional perspectives beyond traditional game-theoretic paradigms – such as complex systems and security – and highlight implications for work in AI governance and AI ethics in addition to AI safety.

Other surveys of AI risks focus primarily on the case of individual (often present-day) AI systems.
For example, [Amodei et al. (2016)](https://arxiv.org/html/2502.14143v1#bib.bibx22) survey a range of concrete problems in AI safety (side effects, reward hacking, scalable oversight, safe exploration, and robustness to distributional shifts), while [Hendrycks et al. (2021)](https://arxiv.org/html/2502.14143v1#bib.bibx298) provide a classification of problems in ML safety (robustness, monitoring, alignment, and systemic safety).
[Anwar et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx31); [Bommasani et al. (2021)](https://arxiv.org/html/2502.14143v1#bib.bibx90); [Weidinger et al. (2022)](https://arxiv.org/html/2502.14143v1#bib.bibx696); [Bird et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx81) focus on the risks from foundation models specifically, while [Chan et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx127); [Gabriel et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx236) consider the harms posed by increasingly ‘agentic’ systems and AI assistants.
Other taxonomies seek to adopt an explicitly sociotechnical lens ([Shelby et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx607); [Abercrombie et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx2); [Weidinger et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx695)), often focusing primarily on present-day risks.
[Zeng et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx722); [Uuk et al. (2025)](https://arxiv.org/html/2502.14143v1#bib.bibx669) provide meta-reviews of AI risks derived from different research papers, as well as government and company policies.
Our report is complementary to these works, and includes discussion of how novel problems arise in the multi-agent case, and in the case of more advanced AI agents.

More speculatively, some authors have considered the possibility of catastrophic or even existential risks from AI ([Turchin & Denkenberger, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx662); [Bostrom, 2014](https://arxiv.org/html/2502.14143v1#bib.bibx96); [Ord, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx511); [Kasirzadeh, 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx352)).
[Hendrycks et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx299) categorises such risks into malicious use, AI races, organizational risks, and rogue AIs.
As in [Hendrycks (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx297), multi-agent risks are viewed largely through an evolutionary lens, though this is primarily restricted to competitive pressures at the level of non-AI actors (such as firms or states).
[Critch & Krueger (2020)](https://arxiv.org/html/2502.14143v1#bib.bibx161); [Critch & Russell (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx162) frame such risks in terms of delegation to AI systems and the responsibilities of those doing so.
While they provide illuminating vignettes of possible catastrophes, we aim to provide more concrete examples at a more modest scale.

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Case Study | [2.1 Miscoordination](https://arxiv.org/html/2502.14143v1#S2.SS1 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | [2.2 Conflict](https://arxiv.org/html/2502.14143v1#S2.SS2 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | [2.3 Collusion](https://arxiv.org/html/2502.14143v1#S2.SS3 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | [3.1 Information Asymmetries](https://arxiv.org/html/2502.14143v1#S3.SS1 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | [3.2 Network Effects](https://arxiv.org/html/2502.14143v1#S3.SS2 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | [3.3 Selection Pressures](https://arxiv.org/html/2502.14143v1#S3.SS3 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | [3.4 Destabilising Dynamics](https://arxiv.org/html/2502.14143v1#S3.SS4 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | [3.5 Commitment and Trust](https://arxiv.org/html/2502.14143v1#S3.SS5 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | [3.6 Emergent Agency](https://arxiv.org/html/2502.14143v1#S3.SS6 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | [3.7 Multi-Agent Security](https://arxiv.org/html/2502.14143v1#S3.SS7 "In 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | Type | Page |
| [Incompatible Strategies.](https://arxiv.org/html/2502.14143v1#S2.SS1.SSS2.Px1 "In 2.1.2 Instances ‣ 2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | ✓ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\blacksquare$ | [2.1.2](https://arxiv.org/html/2502.14143v1#S2.SS1.SSS2.Px1 "Incompatible Strategies. ‣ 2.1.2 Instances ‣ 2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") |
| [Coercion and Extortion.](https://arxiv.org/html/2502.14143v1#S2.SS2.SSS2.Px3 "In 2.2.2 Instances ‣ 2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\blacktriangle$ | [2.2.2](https://arxiv.org/html/2502.14143v1#S2.SS2.SSS2.Px3 "Coercion and Extortion. ‣ 2.2.2 Instances ‣ 2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") |
| [Social Dilemmas.](https://arxiv.org/html/2502.14143v1#S2.SS2.SSS2.Px1 "In 2.2.2 Instances ‣ 2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\blacktriangle$ | [2.2.2](https://arxiv.org/html/2502.14143v1#S2.SS2.SSS2.Px1 "Social Dilemmas. ‣ 2.2.2 Instances ‣ 2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") |
| [Markets.](https://arxiv.org/html/2502.14143v1#S2.SS3.SSS2.Px1 "In 2.3.2 Instances ‣ 2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\bullet$ | [2.3.2](https://arxiv.org/html/2502.14143v1#S2.SS3.SSS2.Px1 "Markets. ‣ 2.3.2 Instances ‣ 2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") |
| [Steganography.](https://arxiv.org/html/2502.14143v1#S2.SS3.SSS2.Px2 "In 2.3.2 Instances ‣ 2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\blacktriangle$ | [2.3.2](https://arxiv.org/html/2502.14143v1#S2.SS3.SSS2.Px2 "Steganography. ‣ 2.3.2 Instances ‣ 2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") |
| [Bargaining.](https://arxiv.org/html/2502.14143v1#S3.SS1.SSS2.Px2 "In 3.1.2 Instances ‣ 3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | ✓ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\blacktriangle$ | [3.1.2](https://arxiv.org/html/2502.14143v1#S3.SS1.SSS2.Px2 "Bargaining. ‣ 3.1.2 Instances ‣ 3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Error Propagation.](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "In 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\blacksquare$ | [3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "Error Propagation. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Network Rewiring.](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px2 "In 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\blacktriangle$ | [3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px2 "Network Rewiring. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Undesirable Dispositions from Competition.](https://arxiv.org/html/2502.14143v1#S3.SS3.SSS2.Px1 "In 3.3.2 Instances ‣ 3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\blacktriangle$ | [3.3.2](https://arxiv.org/html/2502.14143v1#S3.SS3.SSS2.Px1 "Undesirable Dispositions from Competition. ‣ 3.3.2 Instances ‣ 3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Feedback Loops.](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "In 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\bullet$ | [3.4.2](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "Feedback Loops. ‣ 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Rigidity and Mistaken Commitments.](https://arxiv.org/html/2502.14143v1#S3.SS5.SSS2.Px3 "In 3.5.2 Instances ‣ 3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\cdot$ | $\cdot$ | $\bullet$ | [3.5.2](https://arxiv.org/html/2502.14143v1#S3.SS5.SSS2.Px3 "Rigidity and Mistaken Commitments. ‣ 3.5.2 Instances ‣ 3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Heterogeneous Attacks.](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px2 "In 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | ✓ | $\blacktriangle$ | [3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px2 "Heterogeneous Attacks. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |
| [Vulnerable AI Agents.](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px4 "In 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | $\cdot$ | ✓ | $\blacksquare$ | [3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px4 "Vulnerable AI Agents. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") |

Table 3: An overview of the case studies present in this report, and the failure modes and risk factors that they represent. Each case study represents either a historical example (
$\bullet$
), existing results from the literature (
$\blacktriangle$
), or – when neither of these existed – novel experiments that we conducted as part of this report ($\blacksquare$). Further details about our own experiments are provided in [Appendix B](https://arxiv.org/html/2502.14143v1#A2 "Appendix B Case Study Details ‣ Multi-Agent Risks from Advanced AI").

## 2 Failure Modes

Multi-agent systems can fail in various ways, depending on the intended behaviour of the system and the objectives of the agents.
First, we can distinguish between cases where we want the agents to be *cooperating* (as in collective action problems or team games) or *competing* (such as in markets or adversarial training).
Second, we can further divide the space of failure modes depending on whether the agents have *exactly the same* objectives, *different but overlapping* objectives, or *completely opposed* objectives.5
While different authors have used different terms to describe these cases, we use the terminology shown in [Figure 1](https://arxiv.org/html/2502.14143v1#S2.F1 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI").6
Finally, there are many potential risks from advanced multi-agent systems that do not necessarily arise through agents competently pursuing their objectives, but due to their incompetencies or vulnerabilities.
We consider these latter failures as part of our discussion on different risk factors in [Section 3](https://arxiv.org/html/2502.14143v1#S3 "3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").

Cooperation?[2.3 Collusion](https://arxiv.org/html/2502.14143v1#S2.SS3 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")Objectives?N/A[2.2 Conflict](https://arxiv.org/html/2502.14143v1#S2.SS2 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")[2.1 Miscoordination](https://arxiv.org/html/2502.14143v1#S2.SS1 "In 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")IdenticalMixedOpposingDesirableUndesirable


Figure 1: The three kinds of failure mode that we study in this work. Note that we do not consider constant-sum settings where cooperation is desirable, as in such cases it is definitionally impossible for some agents to gain without a commensurate loss from one or more other agents.

### 2.1 Miscoordination

The simplest kind of cooperation failures are those in which all agents have (approximately) the same objectives.
Even in such common-interest settings, however, miscoordination abounds.
While it is reasonable to expect that these problems will tend to be addressed as the general capabilities of AI systems (such as communication and reasoning about others) improve,7 they may still present risks in the near-term.

#### 2.1.1 Definition

Miscoordination arises when agents, despite a mutual and clear objective, cannot align their behaviours to achieve this objective.
Unlike the case of differing objectives, in common-interest settings there is a more easily well-defined notion of ‘optimal’ behaviour and we describe agents as miscoordinating to the extent that they fall short of this optimum.
Note that for common-interest settings it is not sufficient for agents’ objectives to be the same in the sense of being symmetric (e.g., when two agents both want the same prize, but only one can win).
Rather, agents must have identical preferences over outcomes (e.g., when two agents are on the same team and win a prize as a team or not at all).

It is rare that two humans will share exactly the same objectives in this sense.
For example, two sportspeople on the same team may be primarily aiming to win their match but will also have individual preferences, such as who scores the winning point.
In the case of AI systems, however, different agents can more easily be given precisely the same goal, and indeed much work on cooperation in AI focuses solely on the common-interest setting ([Boutilier, 1996](https://arxiv.org/html/2502.14143v1#bib.bibx98); [Peshkin et al., 2000](https://arxiv.org/html/2502.14143v1#bib.bibx539); [Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639); [Omidshafiei et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx502); [Rashid et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx556); [Oroojlooy & Hajinezhad, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx512)).
Such approaches are typically motivated by the practical and computational advantages that decentralised control confers, but are more challenging to implement than their centralised, single-agent counterparts.
Aside from this, miscoordination can also occur in settings that have a substantial element of common interest, even if agents’ objectives are not entirely identical.

#### 2.1.2 Instances

Perhaps the most likely way that common-interest settings may arise in practice is where a single principal deploys multiple AI agents on their behalf in order to jointly solve a task.
This choice might be motivated by: physical constraints (if the task comprises sub-tasks that must be completed separately and simultaneously); efficiency considerations (if having a single agent in charge of all aspects of the task would lead to an intractably complex problem); or a desire for robustness (if an individual agent might fail but others could still succeed in their place).
Alternatively, we might see multi-principal multi-agent settings in which the agents’ goals are sufficiently aligned to be viewed as (approximately) identical.
For example, if two autonomous vehicles are driving along the same road, then the mutual harms from potential miscoordination (such as a collision) are far greater than any small individual benefits from competition (such as attempting a risky overtaking manoeuvre to get slightly ahead).

##### Incompatible Strategies.

Even if all agents can perform well in isolation, miscoordination can still occur due to the agents choosing incompatible strategies ([Cooper et al., 1990](https://arxiv.org/html/2502.14143v1#bib.bibx154)).
Competitive (i.e., two-player zero-sum) settings allow designers to produce agents that are maximally capable without taking other players into account.
Crucially, this is possible because playing a strategy at equilibrium in the zero-sum setting guarantees a certain payoff, even if other players deviate from the equilibrium ([Nash, 1951](https://arxiv.org/html/2502.14143v1#bib.bibx475)).
On the other hand, common-interest (and mixed-motive) settings often allow a vast number of mutually incompatible solutions ([Schelling, 1980](https://arxiv.org/html/2502.14143v1#bib.bibx583)), which is worsened in partially observable environments ([Reif, 1984](https://arxiv.org/html/2502.14143v1#bib.bibx558); [Bernstein et al., 2002](https://arxiv.org/html/2502.14143v1#bib.bibx72)).
As a simple example, everyone driving on the left side or the right side of the road are both perfectly valid ways of keeping drivers safe, but these two conventions are inherently incompatible with one another (see [Section 2.1.2](https://arxiv.org/html/2502.14143v1#S2.SS1.SSS2.Px1 "Incompatible Strategies. ‣ 2.1.2 Instances ‣ 2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).

Case Study 1: Zero-Shot Coordination Failures in Driving
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/coordination/driving_coordination.png)

Figure 2: Examples of scenes given to GPT-4 Vision in our language agent pipeline.

Miscoordination is possible even among agents with shared objectives. We demonstrate how two frontier models trained on driving conventions from two different countries can face coordination failures. Following recent advances in robotics that combine vision models for scene comprehension with large language models (LLMs) for discrete action planning (e.g., [Padalkar et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx517)), we created an experiment using two fine-tuned GPT-3.5 models. One model was trained on US driving protocols requiring rightward yielding for emergency vehicles, while the other followed Indian conventions mandating leftward yielding. Context-specific training data was generated as input-output pairs by GPT-4 based on the specified driving conventions and then manually reviewed. A GPT-4 Vision model processed the environmental inputs and provided scene descriptions to both fine-tuned GPT-3.5 models for action generation. The results quantified a significant coordination failure: unspecialized base models failed in only 5% of scenarios (2/40 simulations), while specialized models exhibited a 77.5% failure rate (31/40 simulations), consistently failing to create clear paths for emergency vehicles. This demonstrates an example where a convention cannot always be declared in a zero-shot interaction, posing risks in multi-agent settings.

##### Credit Assignment.

While agents can often *learn* to jointly solve tasks and thus avoid coordination failures, learning is made more challenging in the multi-agent setting due to the problem of credit assignment ([Du et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx197); [Li et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx410), see also [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") on information asymmetries and [Section 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), which discusses distributional shift).
That is, in the presence of other learning agents, it can be unclear which agents’ actions caused a positive or negative outcome to obtain, especially if the environment is complex.
Moreover, in multi-principal settings, agents may not have been trained together and therefore need to generalise to new co-players and collaborators based on their prior experience ([Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639); [Leibo et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx393); [Agapiou et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx7)).

##### Limited Interactions.

Sometimes learning from historical interactions with the relevant agents may not be possible, or may be possible using only limited interactions.
In such cases, some other form of information exchange is required for agents to be able to reliably coordinate their actions, such as via *communication* ([Crawford & Sobel, 1982](https://arxiv.org/html/2502.14143v1#bib.bibx159); [Farrell & Rabin, 1996](https://arxiv.org/html/2502.14143v1#bib.bibx211)) or a *correlation device* ([Aumann, 1974](https://arxiv.org/html/2502.14143v1#bib.bibx36); [Aumann, 1987](https://arxiv.org/html/2502.14143v1#bib.bibx37)).
While advances in language modelling mean that there are likely to be fewer settings in which the inability of advanced AI systems to communicate leads to miscoordination, situations that require split-second decisions or where communication is too costly could still produce failures.
In these settings, AI agents must solve the problem of ‘zero-shot’ (or, more generally, ‘few-shot’) coordination ([Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639); [Hu et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx312); [Treutlein et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx660); [Zhu et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx736); [Emmons et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx205)).

#### 2.1.3 Directions

Decentralised control and coordination in multi-agent systems have been well-studied problems for decades ([Boutilier, 1996](https://arxiv.org/html/2502.14143v1#bib.bibx98); [Peshkin et al., 2000](https://arxiv.org/html/2502.14143v1#bib.bibx539); [Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639); [Omidshafiei et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx502); [Rashid et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx556); [Oroojlooy & Hajinezhad, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx512)).
At one level of abstraction, the key challenge of coordination is that of sharing information, i.e., communication. If agents
have the same preferences and are able to communicate, they can coordinate by (say) having
a single agent announce their intended action and everyone else follow suit, since there are no
incentives for the leader to lie or the followers to deviate (e.g., [Farrell & Rabin, 1996a](https://arxiv.org/html/2502.14143v1#bib.bibx212)).
Given the superhuman capabilities of advanced AI to transmit and process vast swathes of information, the most important research directions in this area will therefore be those in which it is not possible to exercise these capabilities (e.g., due to complexity, latency, or privacy constraints).

##### Communication.

As noted above, the advanced communication abilities of LLMs promise to simplify many coordination challenges.
In order to successfully integrate these advances into real-world systems, however, agents need to know when and what needs to be coordinated on – something that may not always be obvious in novel or out-of-distribution domains.
In safety-critical domains, it may therefore be necessary to introduce, or have the agents invent, *protocols* (i.e., rules and specifications) for communication between advanced AI agents ([Marro et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx437)).
Moreover, agents need to agree on how the communication channel is grounded ([Clark & Brennan, 1991](https://arxiv.org/html/2502.14143v1#bib.bibx143)) to actions or strategies in the environment. Grounding LLMs is a problem that is not unique to coordination ([Bisk et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx82); [Bender & Koller, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx66); [Mahowald et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx429)), but it is exacerbated by the fact that agents attempting to coordinate through natural language need to be grounded in the same way. For instance, if they are designed with different interfaces to tools in a domain, they must be able to coordinate despite these differences in interfaces.

##### Norms and Conventions.

For settings in which inter-agent communication is infeasible or insufficient, norms and conventions may be necessary in order to avoid miscoordination ([Leibo et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx396)).
For example [Hadfield-Menell et al. (2019)](https://arxiv.org/html/2502.14143v1#bib.bibx272) show that even the adoption of so-called ‘silly rules’ (those that do not have direct bearing on the agents’ payoffs) can help groups adapt and be more robust to uncertainty by enriching the information environment.
Moving beyond more arbitrary conventions, we may choose to design particular norms and conventions ([Nyborg et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx489); [Bicchieri, 2016](https://arxiv.org/html/2502.14143v1#bib.bibx76); [Shoham & Tennenholtz, 1992](https://arxiv.org/html/2502.14143v1#bib.bibx610)). In this setting, the challenge is to select norms that are both legible and enforceable, as well as leading to jointly beneficial outcomes.
On the other hand, if the agents can adapt their behaviour, it may be that norms and conventions emerge over time ([McElreath et al., 2003](https://arxiv.org/html/2502.14143v1#bib.bibx446)).
For example, [Köster et al. (2020)](https://arxiv.org/html/2502.14143v1#bib.bibx372) show that multi-agent reinforcement learning (MARL) agents can establish and switch between conventions, even compromising on their own objective when doing so is necessary for effective coordination.
More generally, we may be interested in studying how norms and conventions emerge ([Mashayekhi et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx440); [Morris-Martin et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx466)), how robust they are ([Lerer & Peysakhovich, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx402); [Hao et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx285)), and how compatible they are with others that may have emerged in different agent populations ([Stastny et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx636)).

##### Modelling Other Agents.

Finally, the ability to understand and predict others’ actions can be critical to coordination, especially in situations when little or no communication is possible.
Even though agents may assume that others share their objective in common-interest settings, being able to model others’ actions, beliefs, and intentions can be highly advantageous.
For an overview of the topic and a list of key problems, we refer the reader to [Albrecht & Stone (2018)](https://arxiv.org/html/2502.14143v1#bib.bibx16).
With the advent of LLM-based agents that appear to possess some form of theory of mind and hence can be remarkably sophisticated in their modelling of other agents ([Cross et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx164); [Li et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx409)), new questions arise.
For example, given the current paradigm of deriving many systems from an underlying base model, it may be easier for similarly derived systems to reason about one another ([Oesterheld et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx497); [Binder et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx80); [Berglund et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx70); [OpenAI, 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx506)).

### 2.2 Conflict

In the vast majority of real-world strategic interactions, agents’ objectives are neither identical nor completely opposed.
Indeed, if AI agents are sufficiently aligned to their users or deployers, we should expect some degree of both cooperation and competition, mirroring human society.
These mixed-motive settings include the possibility of mutual gains, but also the risk of conflict due to selfish incentives.
In what follows, we examine the extent to which advanced AI might precipitate or exacerbate such risks.

#### 2.2.1 Definition

In this work, we use the word conflict in a relatively broad sense to refer to any outcome in a mixed-motive setting that does not lie on the Pareto frontier.8
This includes classic examples of conflict such as legal disputes and warfare, but also encompasses cooperation failures in collective action problems, such as the depletion of a common natural resource or a race to the bottom on legislation ([Snyder, 1971](https://arxiv.org/html/2502.14143v1#bib.bibx627); [Dawes & Messick, 2000](https://arxiv.org/html/2502.14143v1#bib.bibx177)).

It is worth noting first that AI systems could help to *solve* conflicts, for example, by searching over a larger
space of potential solutions to disagreements, monitoring agreements, or acting as mediators
([Dafoe et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx169); [Bakker et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx45); [McKee et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx447); [Small et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx623)).
At the same time, the selfish incentives that drive said conflict may also
incentivise actors to adopt AI systems in order to gain an advantage over their competitors.
In such cases, delegation to increasingly advanced AI agents is far from guaranteed to lead to more cooperative outcomes, and could in some circumstances increase both the speed and the scale at which conflict might emerge.
Indeed, even if advanced AI systems are able to overcome human cooperation problems, they may introduce even more complex cooperation problems (compare to how adults may be able to prevent children from fighting, but aren’t immune from conflict themselves).

#### 2.2.2 Instances

As we noted above, virtually all real-world strategic interactions of interest are mixed-motive, and as such the potential for conflict (even if in low-stakes scenarios) abounds.
The introduction of advanced AI agents could both worsen existing risks of conflict (such as increasing the degree of competition in common-resource problems, or escalating military tensions) as well as well as introducing new forms of conflict (such as via sophisticated methods of coercion and extortion).

##### Social Dilemmas.

As noted in our definition, conflict can arise in any situation in which selfish incentives diverge from the collective good, known as a social dilemma ([Hardin, 1968](https://arxiv.org/html/2502.14143v1#bib.bibx286); [Dawes & Messick, 2000](https://arxiv.org/html/2502.14143v1#bib.bibx177); [Kollock, 1998](https://arxiv.org/html/2502.14143v1#bib.bibx366); [Ostrom, 1990](https://arxiv.org/html/2502.14143v1#bib.bibx514)).
While this is by no means a modern problem, advances in AI could further enable actors to pursue their selfish incentives by overcoming the technical, legal, or social barriers that standardly help to prevent this.
To take a plausible, near-term (if very low-stakes) example, an automated AI assistant could easily reserve a table at every restaurant in town in minutes, enabling the user to decide later and cancel all other reservations.
Alternatively, the ability of AI assistants to search and switch between different consumer products and services could lead to ‘hyper-switching’ ([Van, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx672)), potentially leading to financial instabilities such as a deposit franchise run ([Drechsler et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx193), see also [Section 3.4.2](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "Feedback Loops. ‣ 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
On the other hand, profit-seeking companies might also soon deploy advanced AI agents that either use or manage common resources, ranging from communication networks and web services to roads and natural resources.
Without methods of governing such agents, these resources may quickly be depleted or made inaccessible to all but a small number of powerful actors.

Case Study 2: Common Resource Problems
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/conflict/GovSim.png)

Figure 3: A summary of the resource-sharing scenarios within the GovSim benchmark. Figure adapted from [Piatti et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx542).

The management of shared resources represents a fundamental test of whether AI systems can balance individual incentives against collective welfare.9
In the GovSim benchmark, [Piatti et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx542) evaluated 15 different LLMs across three resource management scenarios: fishing from a shared lake, grazing on common pastures, and managing industrial pollution.
Even the most advanced LLMs achieved only a 54% survival rate, meaning that in nearly half of all cases, the agents depleted their shared resources to the point of collapse.
These findings align with earlier work on sequential social dilemmas ([Leibo et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx397)), which (unlike ‘one-shot’ problems) allow agents to react to others’ choices over time, creating complex dynamics of trust and retaliation.
When one agent begins to over-exploit resources, others often respond by increasing their own extraction rates, triggering a cascade of competitive behaviour that accelerates resource depletion. Without additional protections, these systems may therefore replicate or even accelerate the tragedy of the commons ([Hardin, 1968](https://arxiv.org/html/2502.14143v1#bib.bibx286)).

##### Military Domains.

Perhaps the most obvious and worrying instances of AI conflict are those in which human conflict is already a major concern, such as military domains (although other, less salient forms of conflict such as international trade wars are also cause for concern).
For example, beyond applications of more narrow AI tools in lethal autonomous weapons systems ([Horowitz, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx306)), future AI systems might serve as advisors or negotiators in high-stakes military decisions ([Manson, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx434); [Black et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx83)).
Indeed, companies such as Palantir have already developed LLM-powered tools for military planning ([Palantir, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx520)), and the US Department of Defence has recently been evaluating models for such capacities, with personnel revealing that they “could be deployed by the military in the very near term” ([Manson, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx433)).
The use of AI in command and control systems to gather and synthesise information – or recommend and even autonomously *make* decisions – could lead to rapid unintended escalation if these systems are not robust or are otherwise more conflict-prone ([Johnson, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx340); [Johnson, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx338); [Laird, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx382), see also [Section 3.4.2](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "Feedback Loops. ‣ 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).10

##### Coercion and Extortion.

Advanced AI systems might also lead to various forms of coercion and extortion in less extreme settings ([Ellsberg, 1968](https://arxiv.org/html/2502.14143v1#bib.bibx203); [Harrenstein et al., 2007](https://arxiv.org/html/2502.14143v1#bib.bibx289)).
These threats might target humans directly (such as the revelation of private information extracted by advanced AI surveillance tools), or other AI systems that are deployed on behalf of humans (such as by hacking a system to limit its resources or operational capacity; see also [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
Increasing AI cyber-offensive capabilities – including those that target other AI systems via adversarial attacks and jailbreaking ([Zou et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx742); [Gleave et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx254); [Yamin et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx711)) – without a commensurate increase in defensive capabilities could make this form of conflict cheaper, more widespread, and perhaps also harder to detect
([Brundage et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx107)).
Addressing these issues requires design strategies that prevent AI systems from exploiting, or being susceptible to, such coercive tactics.11

Case Study 3: Escalation in Military Conflicts

Recent research by [Rivera et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx567) raises critical concerns about the emergence of escalatory behaviors when AI tools or agents (see [Figure 4](https://arxiv.org/html/2502.14143v1#S2.F4 "In Coercion and Extortion. ‣ 2.2.2 Instances ‣ 2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")) inform military decision-making.
In experiments with AI agents controlling eight distinct nation-states, even neutral starting conditions did not prevent the rapid emergence of arms race dynamics and aggressive strategies.
Strikingly, all five off-the-shelf LLMs studied showed forms of escalation, even when peaceful alternatives were available.
These findings mirror other evidence showing that LLMs often display more aggressive responses than humans in military simulations and troubling inconsistencies in crisis decision-making ([Lamparth et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx383); [Shrivastava et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx611)).
These results raise urgent questions about how to ensure stability in AI-driven military and diplomatic scenarios.
    
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/conflict/Palantir.png)

Figure 4: A screenshot of Palantir’s AI Planner (AIP), taken from a promotional video ([Palantir, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx520)), demonstrating AI-assisted military decision-making, which uses LLMs for decision support in battle. The left side of the screen features a chat interface, while the right side shows information such as aerial surveillance footage of a tank.
The LLM used in the demonstration was EleutherAI’s GPT-NeoX-20B ([Black et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx84)).

#### 2.2.3 Directions

The majority of work in multi-agent systems (and especially in multi-agent learning) has, until recently, tended to focus on either pure cooperation (e.g., [Boutilier, 1996](https://arxiv.org/html/2502.14143v1#bib.bibx98); [Peshkin et al., 2000](https://arxiv.org/html/2502.14143v1#bib.bibx539); [Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639); [Omidshafiei et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx502); [Rashid et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx556); [Oroojlooy & Hajinezhad, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx512)) or pure competition (e.g., [Silver et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx616); [Zhang et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx727); [Daskalakis et al., 2011](https://arxiv.org/html/2502.14143v1#bib.bibx175); [Brown & Sandholm, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx104); [Bakhtin et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx44); [Daskalakis et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx176)).
As there are not yet large numbers of mixed-motive interactions involving AI systems, part of the challenge is to identify interventions that encourage cooperation in such settings while making realistic assumptions about the computational and strategic nature of agents in the real world.
For example, an intervention that relies on ensuring all agents use the same learning algorithm or on modifying the objectives of the agents will be unlikely to help if the agents act freely and are developed independently by private, self-interested actors.

##### Learning Peer and Pool Incentivisation.

One major direction for avoiding conflict is building the capabilities and infrastructure required for AI agents to (learn to) incentivise each other towards more cooperative outcomes.12
Such approaches can broadly be classified as ‘top down’ (where there is a system designer seeking to encourage cooperation among a population) or ‘bottom up’ (where agents attempt to incentivise each other directly).
In adaptive mechanism design ([Pardoe et al., 2006](https://arxiv.org/html/2502.14143v1#bib.bibx525); [Zhang & Parkes, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx726); [Baumann et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx62); [Yang et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx713); [Zheng et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx732); [Gerstgrasser & Parkes, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx246)) or peer incentivisation methods ([Yang et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx712); [Lupu & Precup, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx424); [Wang et al., 2021a](https://arxiv.org/html/2502.14143v1#bib.bibx685)), the system designer or agent typically learns to incentivise other agents by a direct utility transfer.
Related approaches focus on the establishment of norms ([Köster et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx372); [Vinitsky et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx678); [Oldenburg & Zhi-Xuan, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx500)) to either encourage or sanction certain behaviour, also often via utility transfers.
On the other hand, methods such as opponent-shaping aim to impact the way that other agents update their strategies *without* the assumption of such transfers, either from the perspective of the agent ([Foerster et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx224); [Willi et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx700); [Lu et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx420)) or system designer ([Balaguer et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx46)).
Thus far, however, all of these approaches are limited to relatively simple MARL agents and environments.
While there has been some progress on scaling to more complex games ([Khan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx356); [Aghajohari et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx8); [Meulemans et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx452); [Serrino et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx597)) or larger numbers of agents ([Souly et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx631); [Meulemans et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx452)) in the context of MARL, at the time of writing there has yet to be any real transfer of these ideas to LLM agents or to real-world domains that possess the necessary infrastructure for monitoring and incentivising other agents.

##### Establishing Trust.

Strategic uncertainty and the inability to credibly commit to peaceful agreements are widely recognised as two of the major causes of costly conflict ([Fearon, 1995](https://arxiv.org/html/2502.14143v1#bib.bibx213); [Blattman, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx85)).
Advanced AI systems may be able to take advantage of new kinds of credible commitment and mutual transparency (discussed further in [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")) ([McAfee, 1984](https://arxiv.org/html/2502.14143v1#bib.bibx445); [Howard, 1988](https://arxiv.org/html/2502.14143v1#bib.bibx310); [Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151); [Tennenholtz, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx652); [Barasz et al., 2014](https://arxiv.org/html/2502.14143v1#bib.bibx52); [Oesterheld, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx492); [Critch et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx160); [Sun et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx645); [Cooper et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx153)).
Many existing results in this area are, however, still very much theoretical in nature.
Implementing practical mechanisms and infrastructure for facilitating greater trust and transparency between agents is therefore an important open problem ([Chan et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx128)).

##### Normative Approaches to Equilibrium Selection.

One possible cause of conflict is a multiplicity of potential solutions (or equilibria, see also [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).
That is, there might be multiple rational ways for a group of players to interact that are mutually incompatible ([Stastny et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx636); [Duan et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx198)).
For instance, a resource might be split in multiple different ways, but if different parties make inconsistent demands on the resources, conflict may ensue ([Piatti et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx542)).
To address this multiplicity, a number of authors have proposed normative principles and theories for singling out specific equilibria.13
For instance, many authors have argued that equilibrium selection should respect symmetries and isomorphisms ([Harsanyi & Selten, 1988](https://arxiv.org/html/2502.14143v1#bib.bibx291); [Hu et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx312); [Treutlein et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx660); [Emmons et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx205); [Oesterheld & Conitzer, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx494)).
Most prominently, a large literature on so-called bargaining solutions has proposed principles for how a group of players should select an outcome in the face of conflicting preferences ([Nash, 1950](https://arxiv.org/html/2502.14143v1#bib.bibx474); [Kalai & Smorodinsky, 1975](https://arxiv.org/html/2502.14143v1#bib.bibx347)). Relatedly, a literature on so-called cooperative game theory ([Shapley, 1953](https://arxiv.org/html/2502.14143v1#bib.bibx602); [Gillies, 1959](https://arxiv.org/html/2502.14143v1#bib.bibx253); [Schmeidler, 1969](https://arxiv.org/html/2502.14143v1#bib.bibx585); [Driessen, 1988](https://arxiv.org/html/2502.14143v1#bib.bibx196); [Chalkiadakis et al., 2011](https://arxiv.org/html/2502.14143v1#bib.bibx123)) studies how the (e.g., monetary) gains from a joint project should be divided up between a group of agents.
14
For further work on normative principles of equilibrium selection, see [Schelling (1980)](https://arxiv.org/html/2502.14143v1#bib.bibx583); [Harsanyi & Selten (1988)](https://arxiv.org/html/2502.14143v1#bib.bibx291).

##### Cooperative Dispositions.

Alongside the cooperative capabilities described above, we may also wish to imbue AI agents with cooperative ‘dispositions’.
For example, simply caring more for future rewards in sequential social dilemmas ([Barfuss et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx56)) or certain ‘intrinsic motivations’ in MARL – such as inequity aversion ([Hughes et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx320)), social influence ([Jaques et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx331)), or inefficiency penalties ([Gemp et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx245)) – have been shown to improve cooperation in sequential social dilemmas ([Leibo et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx397); [Wang et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx681)).
While it may not be realistic to assume that we can always adjust agents’ objectives, it may be feasible to
try to reduce conflict-conducive dispositions (such as vengefulness or a bias towards zero-sum thinking) by
modifying the human-generated data or training processes via which we create AI agents (see
[Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
Moreover, in some cases it can even be shown that instructing agents to act according to objectives other than their true objectives can lead to robust, guaranteed Pareto-improvements ([Oesterheld & Conitzer, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx494)).

##### Agent Governance.

In some cases, AI agents may be subject to existing norms and institutions.15
This could occur for a number of reasons, such as agents only being selected (by users) to perform specific tasks (that are subject to existing norms and institutions), human oversight being built in by design, or highly regulated environments providing guardrails that improve agents’ abilities to operate efficiently.
However, the status of AI agents’ contractual obligations and accountability for harms remains underdeveloped ([Ayres & Balkin, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx38); [Lima, 2017](https://arxiv.org/html/2502.14143v1#bib.bibx414); [Lior, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx416); [Kolt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx367); [Chopra & White, 2011](https://arxiv.org/html/2502.14143v1#bib.bibx135); [Solum, 1992](https://arxiv.org/html/2502.14143v1#bib.bibx629), see also [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).
These challenges are especially acute for agents that operate subject to limited or no human oversight.
The development of novel (or at least adapted) agent governance measures could therefore play a critical role in avoiding various forms of conflict involving AI agents, especially in high-stakes domains ([Reuel & Undheim, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx563); [Kolt et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx368)).
For example, the US has introduced legislation requiring human oversight in nuclear strategy decisions ([U.S. Congress, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx667)), while international efforts aim to regulate or ban the use of lethal autonomous weapons ([Disarmament, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx187)).
In lower-stakes domains, agent governance could protect individual users and organisations (see also [Section 4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")), and enable more stable, efficient networks of AI agents.

##### Evidential Reasoning.

An interesting feature of interactions between AI agents is that they may often interact with others that are very similar to themselves (such as those based on the same AI chatbot).
Some decision theorists have argued that mixed-motive strategic interactions against similar opponents should be approached very differently from strategic interactions against generic opponents.
For instance, in a one-shot Prisoner’s Dilemma against a sufficiently similar opponent, an agent might reason: “my opponent will likely make the same choice as I. Therefore, if I cooperate, so will my opponent. Whereas, if I defect, my opponent will likely defect as well. Therefore, I should cooperate.” ([Brams, 1975](https://arxiv.org/html/2502.14143v1#bib.bibx100); [Lewis, 1979](https://arxiv.org/html/2502.14143v1#bib.bibx407); [Hofstadter, 1983](https://arxiv.org/html/2502.14143v1#bib.bibx304)) Similarly, agents may avoid aggressive acts when facing similar opponents, reasoning that if they act aggressively, others will similarly act aggressively. [Hofstadter (1983)](https://arxiv.org/html/2502.14143v1#bib.bibx304) called this line of reasoning superrationality; in academic philosophy, the normative theory advocating this type of reasoning is typically called evidential decision theory ([Ahmed, 2014](https://arxiv.org/html/2502.14143v1#bib.bibx10)). A number of prior works have studied this mode of cooperation (game-)theoretically ([Roemer, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx568); [Spohn, 2007](https://arxiv.org/html/2502.14143v1#bib.bibx633); [Daley & Sadowski, 2017](https://arxiv.org/html/2502.14143v1#bib.bibx172); [Halpern & Pass, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx279)). Furthermore, a recent line of work has studied evidential decision theory and cooperation against similar opponents in the context of AI agents in particular ([Albert & Heiner, 2001](https://arxiv.org/html/2502.14143v1#bib.bibx14); [Mayer et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx442); [Bell et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx64); [Oesterheld, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx493); [Barasz et al., 2014](https://arxiv.org/html/2502.14143v1#bib.bibx52); [Oesterheld et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx497); [Oesterheld et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx495)).

### 2.3 Collusion

While some of the most important risks from advanced AI are due to cooperation failure, there are some settings where cooperation between AI systems is *undesirable*. We refer to the problem of unwanted cooperation between AI systems as *AI collusion*.

#### 2.3.1 Definition

Collusion has long been a topic of intense study in economics, law, and politics, among other disciplines.
While there is no universal definition of collusion, it generally refers to secretive cooperation between two or more parties at the expense of one or more other parties.
Most classic examples of collusion – such as firms working together to set supra-competitive prices at the expense of consumers – also tend to be not only secretive but in violation of some law, rule, or ethical standard.
Distinctions are also commonly made between *explicit* and *tacit* collusion ([Rees, 1993](https://arxiv.org/html/2502.14143v1#bib.bibx557)), depending on whether the colluding parties communicate with each other.

AI collusion could differ from classic definitions of collusion in a number of ways.
First, for more basic AI systems (such as algorithmic trading agents) it may be hard to ascribe any notion of intent to collude.
Relatedly, there may be forms of AI collusion that are not currently ruled unlawful, because existing legislation may not (yet) apply to the case of AI collusion ([Harrington, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx290); [Beneke & Mackenrodt, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx67)).
Second, the distinction between explicit and tacit collusion may break down when it comes to agents whose communication can take very different forms to our own.16
Third, typical definitions of collusion focus on mixed-motive settings where, while selfish agents are incentivised to compete, they also stand to gain (at the expense of some third party) if they can overcome these competitive pressures.
AI collusion (by our definition) may also arise when agents have complementary interests (see [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")), but where certain kinds of cooperation are undesirable – i.e., the agents are jointly misaligned.

#### 2.3.2 Instances

The possibility of collusion between advanced AI systems raises several important concerns ([Drexler, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx195)).
First, collusion between AI systems could lead to qualitatively new capabilities or goals (see [Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), exacerbating risks such as the manipulation or deception of humans by AI ([Park et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx527); [Evans et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx208)) or the ability to bypass security checks and other safeguards ([OpenAI, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx505); [Jones et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx342)).
Second, many of the promising approaches to building safe AI rely on a lack of cooperation, such as adversarial training ([Huang et al., 2011](https://arxiv.org/html/2502.14143v1#bib.bibx315); [Ziegler et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx738); [Perez et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx535)) or scalable oversight ([Irving et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx322); [Christiano et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx138); [Christiano et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx139); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266); [Leike et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx398)).
If advanced AI systems can learn to collude without our knowledge, these approaches may be insufficient to ensure their safety ([Goel et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx257), see also [Section 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).

##### Markets.

The quintessential case of collusion in mixed-motive settings is markets, in which efficiency results from competition, not cooperation.
While this is not a new problem, collusion between AI systems is especially concerning since they may operate inscrutably due to the speed, scale, complexity, or subtlety of their actions.17
Warnings of this possibility have come from technologists, economists, and legal scholars ([Brown & MacKay, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx106); [Mehra, 2016](https://arxiv.org/html/2502.14143v1#bib.bibx449); [Ezrachi & Stucke, 2017](https://arxiv.org/html/2502.14143v1#bib.bibx210); [Harrington, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx290); [Beneke & Mackenrodt, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx67)).
Importantly, AI systems can collude even when collusion is not intended by their developers, since they might *learn* that colluding is a profitable strategy.
Currently, most pricing and trading algorithms are relatively unsophisticated compared to today’s state-of-the-art AI systems, though there is already a growing body of both theoretical ([Brown & MacKay, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx106)) and empirical ([Assad et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx35); [Wieting & Sapi, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx699); [Calvano et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx112); [Klein, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx362); [Abada & Lambin, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx1)) evidence that such algorithms may sometimes learn to collude (see [Section 2.3.2](https://arxiv.org/html/2502.14143v1#S2.SS3.SSS2.Px1 "Markets. ‣ 2.3.2 Instances ‣ 2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).18
Unfortunately, due to the huge financial incentives to deploy more advanced, adaptive AI systems in such settings, this risk is likely to increase despite the potential for catastrophic outcomes (see [Section 3.4.2](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "Feedback Loops. ‣ 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
As well as economic harm to consumers, firms in less well-resourced regions may be forced out (widening geographic economic inequality) and increasingly oligopolistic markets may emerge.

Case Study 4: Algorithmic Collusion in the German Retail Gasoline Market

In 2017, Germany began to see the widespread adoption of adaptive price-setting algorithms at gasoline stations. These algorithms function by using various sources of data (such as historical prices, information about competitors, and the weather) to adjust fuel prices.
Investigations into the effects of these changes showed that adoption increased margins (above regional wholesale prices) by 28% in duopolistic markets and 9% in non-monopoly markets ([Assad et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx35)).
These results strongly suggest that the algorithms adapted their pricing strategies to collude, driving retail prices higher at the expense of consumers.

##### Steganography.

In the near future we will likely see LLMs communicating with each other to jointly accomplish tasks.
To try to prevent collusion, we could monitor and constrain their communication (e.g., to be in natural language).
However, models might secretly learn to communicate by concealing messages within other, non-secret text.
Recent work on steganography using ML has demonstrated that this concern is well-founded ([Hu et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx311); [Yang et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx714); [Schroeder et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx590); [Roger & Greenblatt, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx569); [Mathew et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx441), see also [Section 2.3.2](https://arxiv.org/html/2502.14143v1#S2.SS3.SSS2.Px2 "Steganography. ‣ 2.3.2 Instances ‣ 2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).
Secret communication could also occur via text compression ([OpenAI, 2023b](https://arxiv.org/html/2502.14143v1#bib.bibx507)), or via the emergence of communication between agents where the symbols used by agents lack any predefined meanings or usage guidelines or are otherwise uninterpretable to humans ([Lazaridou & Baroni, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx389); [Foerster et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx225); [Sukhbaatar et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx643)).

Case Study 5: Language Model Steganography

In a recent study, [Motwani et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx468) demonstrate that LLMs can exchange steganographic messages under the watch of equally capable oversight systems, and that more powerful models can do so more capably. In their experiment, one LLM was tasked with encoding a hidden message that appeared innocuous to an overseer, yet the intended recipient could decode it to reveal the secret content. Although GPT-2 exhibited no proficiency in steganography, more advanced models achieved notable success rates: GPT-4 transmitted covert messages 26% of the time without detection, surpassing GPT-3.5’s 18% and Mixtral 8x7B’s 16%. Crucially, these capabilities emerged without explicit training in steganography, instead leveraging general language processing and reasoning abilities – a phenomenon also observed by [Mathew et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx441).
Furthermore, the study found that when communicating models shared background knowledge that was not accessible to the overseer (reflecting real-world scenarios where AI systems might have common training data or contextual information), their success rates in covert communication rose significantly. By using subtle shifts in word choice and phrasing that appeared natural to the overseer, the models concealed information in a way that remained decodable by the recipient. These findings raise concerns that networks of AI systems may develop increasingly sophisticated channels for covert communication, potentially undermining safety measures and facilitating undetected collusion (see [Section 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).

#### 2.3.3 Directions

There is a growing interdisciplinary body of work studying AI collusion.
Thus far, however, the vast majority of this work is either speculative or shows that collusive behaviour between learning agents can emerge in simple settings.
More work is therefore required in order to detect AI collusion in more complex settings, and to develop robust methods for mitigating AI collusion.

##### Detecting AI Collusion.

[Brown & MacKay (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx106) show that collusive behaviour can emerge under equilibrium in theoretical models, while [Calvano et al. (2020)](https://arxiv.org/html/2502.14143v1#bib.bibx112); [Klein (2021)](https://arxiv.org/html/2502.14143v1#bib.bibx362) show that in simple settings, independent RL algorithms can learn to collude.
[Normann & Sternberg (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx486); [Leisten (2021)](https://arxiv.org/html/2502.14143v1#bib.bibx399); [Werner (2021)](https://arxiv.org/html/2502.14143v1#bib.bibx698) consider collusion in synthetic settings involving both machines *and* humans.
There have also been documented instances of algorithmic collusion not only in the German gasoline market ([Assad et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx35)), but also in ‘buy box’ placement on the largest online marketplace in Belgium and the Netherlands ([Wieting & Sapi, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx699)).19
Only a small number of works, however, have considered collusion in the context of more advanced AI agents, such as those powered by LLMs ([Motwani et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx468); [Fish et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx222); [Mathew et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx441); [OpenAI, 2023b](https://arxiv.org/html/2502.14143v1#bib.bibx507)), and this remains a highly under-explored area.
Alongside context-specific evaluations, more effort ought to be devoted to developing general methods for detecting collusion.
Some progress in this direction was recently made by [Bonjour et al. (2022)](https://arxiv.org/html/2502.14143v1#bib.bibx94), who define an information-theoretic measure of collusion applicable to arbitrary models.
Future work should investigate additional general methods to detect collusion, including by leveraging interpretability tools to understand systems’ goals ([Michaud et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx456); [Colognese & Jose, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx148); [Mini et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx460); [Marks et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx436)).

##### Mitigating AI Collusion.

Unfortunately, even fewer previous works propose strategies to *mitigate* AI collusion. Exceptions include work by [Brero et al. (2022)](https://arxiv.org/html/2502.14143v1#bib.bibx102), who introduce an ML-based scheme to avoid collusion in buy box placement, [Abada & Lambin (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx1), who reduce collusion by enforcing decentralized learning or intervening during the learning process, and [Cartea et al. (2022)](https://arxiv.org/html/2502.14143v1#bib.bibx120), who show that an increased tick size (the coarseness of the grid from which sellers select prices) can obstruct collusion.
This existing research focuses only on a narrow range of purely economic settings, and so there is a pressing need to develop more general methods, and to adapt our existing laws and governance structures to cover AI collusion (see [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).
[Foxabbott et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx230) take a step in the former direction by introducing a general framework that casts the problem of mitigating collusion as one of intervening on aspects of a partially observable stochastic game, such as the actions, observations, or rewards of the agents (though their work only considers a small number of such interventions in toy games).
For example, we may be able to prevent steganography in LLMs by syntactically perturbing their output while preserving semantic content ([Roger & Greenblatt, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx569)), though it has recently been shown that watermarking (a closely related concept) is surprisingly robust to such techniques ([Kirchenbauer et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx359)).
It may also be feasible to intervene on the learning algorithms and agent strategies themselves, such as via model editing ([Sinitsin et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx617); [Mitchell et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx462)) or constrained learning ([Achiam et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx4)).

##### Assessing Impacts on Safety Protocols.

Alongside research on the detection and mitigation of AI collusion, more work is needed to test if AI systems can collude in safety-critical situations ([Shevlane et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx608)), and to evaluate which AI safety proposals are most vulnerable to collusion.
Current AI systems are developed and tested in isolation, without regard for the fact that they will increasingly come into contact with each other.
This leaves open the possibility that, for example, multiple agents might work together to overcome their individual safeguards ([Jones et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx342), see also [Sections 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
Similarly, many of the more promising approaches to ensure the safety of advanced AI are implicitly multi-agent, such as adversarial training ([Huang et al., 2011](https://arxiv.org/html/2502.14143v1#bib.bibx315); [Ziegler et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx738); [Perez et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx535)), oversight schemes ([Irving et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx322); [Christiano et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx138); [Christiano et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx139); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266); [Leike et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx398)), the modularisation of agents ([Drexler, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx194); [Dalrymple et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx173)), or automated methods for interpretability ([Bills et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx79); [Schwettmann et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx592)).
Determining which of these approaches are most robust to AI collusion and/or modifying them to be so will be important as AI agents grow more sophisticated in their abilities to work together (see [Section 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).

## 3 Risk Factors

In order to prevent the aforementioned failure modes, it is necessary to consider the *mechanisms* via which they can arise, which we call ‘risk factors’.
These risk factors are largely independent of the agents’ precise incentives or the desired behaviour of the system.
For example, information asymmetries ([Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")) could lead to miscoordination between agents with the same goal, or a greater risk of conflict among agents with competing goals.
In other cases, such as security vulnerabilities in multi-agent systems ([Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), the objectives of the agents and whether we want them to cooperate or compete may be largely irrelevant.
In what follows, we outline seven key risk factors (information asymmetries, network effects, selection pressures, destabilising dynamics, commitment and trust, emergent agency, and multi-agent security), though we stress that these categories are neither exhaustive nor mutually exclusive.
For example, while it might be an information asymmetry that first leads to a conflict ([Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), this conflict could end up escalating due to the destabilising dynamics ([Section 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), and fail to be resolved due to a lack of trust or commitment ability ([Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).

### 3.1 Information Asymmetries

A key aspect of many multi-agent systems is that some agents might possess knowledge that others do not. These information asymmetries can result from constraints on information exchange or from strategic behaviour and can lead to cooperation failures in both common-interest and mixed-motive settings. Despite their information processing capabilities, AI agents remain vulnerable to failures caused by information asymmetries.

#### 3.1.1 Definition

Information asymmetry refers to the situation where interacting agents possess different levels of information bearing on a joint action.
For example, in a transaction involving a used car, the seller may have more accurate or reliable information than the buyer about the condition of the car, and thereby its expected maintenance costs.
As [Akerlof (1970)](https://arxiv.org/html/2502.14143v1#bib.bibx13) famously demonstrated, information asymmetry can lead to market failure (such as when a buyer cannot trust the seller to be honest about the condition of the car, and therefore does not buy the car, even if it is in good condition).
More broadly, information asymmetry can pose obstacles to effective interaction, preventing agents from coordinating their actions for mutual benefit ([Myerson & Satterthwaite, 1983](https://arxiv.org/html/2502.14143v1#bib.bibx469)).

A fundamental problem is that information is a strategic asset, so any selfish actor has a natural incentive to protect their own information advantages.
A difference in interests can impede information sharing even when revelation is mutually preferred (in the example above, the seller would like to reveal the car’s true condition to the buyer, but the buyer cannot take the seller’s report at face value).
The problem can be exacerbated by active deception, for example through actions taken by the seller to make the car appear in better condition than it actually is.
As disparity in information is commonplace, we must generally accept the associated costs, whether that be through market inefficiency (e.g., cars that cannot be sold), effort devoted to deception and dispelling deception, or extra work to convey strategically sensitive information (e.g., hiring third-party car inspectors).

#### 3.1.2 Instances

In many instances, the mechanisms developed to cope with information asymmetry in human economies can also be employed for interactions with AI agents.
However, the distinct nature of artificial agents may present new forms of information asymmetry but also new ways of overcoming these asymmetries.

##### Communication Constraints.

A fundamental source of information asymmetries is that constraints on information exchange can exist, even when agents share a common goal (see [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).
These might be constraints on space (i.e., the amount of information that can be communicated) if the information that needs to be communicated is especially complex, time if a snap decision is required before all information can be communicated, or both.
For today’s AI systems, intelligent information exchange in common-interest settings is still a major topic of study (see, e.g., [Sukhbaatar et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx643); [Foerster et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx225); [Zhang et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx728); [Lazaridou & Baroni, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx389); [Lauffer et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx386)).
As these systems become more capable, however, it is likely that strategic considerations (i.e., the incentives that agents have to keep their private information private) will become the more important limitation on information exchange.

##### Bargaining.

As a classic example of these strategic considerations is that when agents attempt to come to an agreement despite diverging interests, information asymmetries can lead to bargaining inefficiencies ([Myerson & Satterthwaite, 1983](https://arxiv.org/html/2502.14143v1#bib.bibx469)).
Relevant uncertainties about other agents can include how much they value possible agreements, their outside options, or their beliefs about others.
The essential reason for such inefficiencies is that, under uncertainty about their counterparties, agents must make a trade-off between the rewards of making more favourable demands and the risk of other agents refusing such demands.
This trade-off sometimes results in incompatible demands and thus bargaining failure, ranging from the impossibility of guaranteeing efficient trade between a buyer and seller with asymmetric information about how much they value a good ([Myerson & Satterthwaite, 1983](https://arxiv.org/html/2502.14143v1#bib.bibx469)), to costly and avoidable conflict when agents are uncertain about the capabilities and objectives of others ([Fearon, 1995](https://arxiv.org/html/2502.14143v1#bib.bibx213); [Slantchev & Tarar, 2011](https://arxiv.org/html/2502.14143v1#bib.bibx621)).
Because these failures stem from strategic incentives rather than a lack of capabilities, general advances in AI may not solve such problems by default.

Case Study 6: AI Agents Can Learn to Manipulate Financial Markets

Advanced AI agents deployed in markets may be incentivised to mislead other market participants in order influence prices and transactions to their benefit. For example, [Shearer et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx606) showed that an RL agent trained to maximize profit learned to manipulate a financial benchmark, thereby misleading others about market conditions (see [Figure 5](https://arxiv.org/html/2502.14143v1#S3.F5 "In Bargaining. ‣ 3.1.2 Instances ‣ 3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")). Likewise, [Wang & Wellman (2020)](https://arxiv.org/html/2502.14143v1#bib.bibx686) found that a known tactic called spoofing can be adapted to evade progressively refined detectors, but in doing so its spoofing effectiveness is degraded.20 This does not, however, exclude the possibility that more sophisticated spoofing or spamming strategies could emerge.
    
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/information_asymmetries/market_manipulation.png)

Figure 5: The profits generated by different RL agents on financial trading benchmark, each seeking to manipulate prices in order to maximise their own profit. Each point shows average payoffs with standard error bars.
Figure adapted from [Shearer et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx606).

##### Deception.

Information asymmetries and differing strategic interests can naturally incentivise deception: taking actions designed to mislead others.
While much attention has been paid to the potential for AI agents to deceive humans ([Evans et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx208); [Ward et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx689); [Park et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx528); [Carroll et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx119); [Goldstein et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx258); [Haghtalab et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx274); [Oesterheld et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx496); [Kay et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx354); [Zhou et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx735)), they may also be incentivised to deceive and manipulate other AI agents (acting on behalf of other humans).
Indeed, the ability to deceive other models may be exacerbated by disparities in model size and the scale of data sets ([Haghtalab et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx274), see also [Section 4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).
We can also view misinformation as a kind of deception in systematic form, which large numbers of advanced AI agents may enable at unprecedented scale (see [Section 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [Section 3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "Error Propagation. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).

#### 3.1.3 Directions

Information asymmetries are a foundational topic within game theory and mechanism design, and as such there is a wealth of insights to draw upon from these fields.
At the same time, these earlier literatures typically consider applications to economic actors such as firms and regulators, as opposed to the computational and strategic nature of advanced AI agents.
Many directions in this section therefore correspond not just to translating and scaling up classical insights to this new domain ([Wu et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx705); [Levinstein & Herrmann, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx406); [Treutlein et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx660)), but to leveraging the special features of AI agents to enable new mechanisms for overcoming information asymmetries ([DiGiovanni & Clifton, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx184); [Tennenholtz, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx652); [Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151)).

##### Information Design.

Viewed from a ‘centralised’ perspective, solutions to information asymmetries can often be cast as a problem of information design: carefully structuring and revealing information so as to influence the behaviour of strategic agents ([Bergemann & Morris, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx69)).
Most work on information design, however, focuses on relatively restricted settings such as Bayesian persuasion ([Kamenica & Gentzkow, 2011](https://arxiv.org/html/2502.14143v1#bib.bibx348)), where there is a single information designer with an informational advantage and a single agent whose behaviour is to be influenced.21
Even in simple multi-agent generalisations, the information designer’s problem may be computationally intractable ([Dughmi, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx199)), leading to recent work that leverages approximate techniques such as RL ([Wu et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx705)) – including in the case of both multiple ‘senders’ ([Hossain et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx309)) and multiple ‘receivers’ ([Ivanov et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx325)).
Beyond these settings, more needs to be done to
scale these techniques to advanced AI agents, including LLM-based agents.
Other important directions include making information design techniques more robust to boundedly rational agents ([Yang & Zhang, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx715)), or a lack of knowledge about the receivers’ prior beliefs ([Lin & Li, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx415)) or objectives ([Bacchiocchi et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx42)).
Similarly, receivers are assumed to know the distribution of the sender, which may not be possible if the sender is an advanced AI agent to which they only have black-box access.

##### Individual Information Revelation.

From a more ‘decentralised’ perspective, we may want to give AI agents new affordances for disclosing and verifying private information.
This can eliminate many inefficiencies that result from information asymmetries – as is shown by ‘unravelling’ arguments, where rational agents anticipate others’ strategic inferences and thus voluntarily disclose private information ([Grossman, 1981](https://arxiv.org/html/2502.14143v1#bib.bibx268); [Milgrom, 1981](https://arxiv.org/html/2502.14143v1#bib.bibx458)) – while avoiding the need for a mediator or information designer.
For example, [DiGiovanni & Clifton (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx184) show that the ability to conditionally reveal private information (given guarantees that it won’t worsen the outcome for the revealing agent) can create new efficient equilibria.
They argue that AI systems might more easily enable this
approach due to fundamental properties such as being
written in (machine-readable) code ([McAfee, 1984](https://arxiv.org/html/2502.14143v1#bib.bibx445); [Howard, 1988](https://arxiv.org/html/2502.14143v1#bib.bibx310); [Tennenholtz, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx652); [Halpern & Pass, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx279); [Oesterheld, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx492)),
as well as the use of tools for interpretability and cryptography.
Similarly, safe Pareto improvements aim to help avoid miscoordination in mixed-motive settings by leveraging tools for transparency and commitment ([Oesterheld & Conitzer, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx494); [DiGiovanni et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx185)).
Other directions make use of incentive design to promote truthful revelation even without verification, known as peer prediction ([Witkowski & Parkes, 2012](https://arxiv.org/html/2502.14143v1#bib.bibx702); [Kong & Schoenebeck, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx370); [Prelec, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx550); [Miller et al., 2005](https://arxiv.org/html/2502.14143v1#bib.bibx459); [Shnayder et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx609)).
Future work could generate additional proposals along these lines or begin to attempt implementing them in real-world systems.

##### Few-Shot Coordination.

In settings where there are fundamental constraints on information exchange, agents may have to learn to interact with other agents based on little or no prior information.
These correspond to the problem of few- ([Zhu et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx736); [Fosong et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx229)) and zero-shot coordination ([Hu et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx312); [Treutlein et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx660)), respectively.
In common-interest settings, this question has been most famously studied under the heading of ad hoc teamwork ([Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639), see also [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).
Often, this involves reasoning about others ([Albrecht & Stone, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx16)), such as via theory of mind ([Zhu et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx736); [Nguyen et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx484)) or based on the similarity of other agents to oneself ([Albert & Heiner, 2001](https://arxiv.org/html/2502.14143v1#bib.bibx14); [Mayer et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx442); [Bell et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx64); [Barasz et al., 2014](https://arxiv.org/html/2502.14143v1#bib.bibx52); [Oesterheld et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx497)).
It may also require learning or selecting social norms and conventions ([Lerer & Peysakhovich, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx402); [Tucker et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx661)).
Another important consideration is ensuring that agents are trained in the context of sufficiently diverse or open-ended sets of co-players ([Lupu et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx423); [Li et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx411)), and to ensure that they can transfer this learning effectively to new populations ([Wang et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx680); [Leibo et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx393); [Agapiou et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx7), see also [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
The vast majority of these efforts, however, are restricted to relatively simple common-interest games; the more realistic setting of complex, mixed-motive interactions can be significantly more challenging and may call for the development of new techniques for intelligent information acquisition using active learning.

##### Truthful AI.

Even when there are fewer strategic incentives to withhold information, there is still a concern that AI systems might lie, either to humans or to one another, which could (in some cases) undermine cooperation and have wider deleterious effects on society ([Evans et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx208); [Park et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx528)).
Some of these concerns could be addressed by training models on more carefully curated and annotated datasets ([Peskov et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx540); [Aly et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx20)), and by using techniques for overseeing or challenging untrustworthy communication ([Irving et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx322); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266)).
Other work has focused more explicitly on the problem of detection, both in theory ([Ward et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx689)) and in practice ([Pacchiardi et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx516); [Azaria & Mitchell, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx39); [Burns et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx109)), though this remains something of an open problem ([Levinstein & Herrmann, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx406)).
Foundational results in mechanism design (namely, the ‘revelation principle’) tell us that anything that can be done with strategic agents can be done using a truthful mechanism ([Gibbard, 1973](https://arxiv.org/html/2502.14143v1#bib.bibx249)), and while computational constraints have previously limited the practical application of this insight ([Conitzer & Sandholm, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx152)), more powerful AI agents might be able to overcome such constraints.
Alongside this, advances in interpretability, adversarial training, and the oversight of AI communication (including fact-checking methods) are all likely to help with the general problem, though the issue of deception and manipulation between AI agents, or the advantages that multiple agents may have (over a single agent) in deception and manipulation, remain under-explored.

### 3.2 Network Effects

The ongoing integration of AI capabilities into a wide range of existing networks, both virtual and physical, is rapidly transforming the way our interconnected world operates.
From business communication systems and financial trading networks to smart energy grids and logistical networks ([Mayorkas, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx443); [Camacho et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx113); [Ferreira et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx218)), entities or communication channels that were once controlled by humans are increasingly becoming AI-powered.
This shift represents a systemic change in the way business, social, and technological networks operate, promising significantly improved efficiency and a greater diffusion of benefits from advanced AI, while also introducing novel risks.

#### 3.2.1 Definition

Many of the complex systems critical to human society can be understood as networks, including transportation, social interactions, trade, biological ecosystems, and communication, among others ([Barabási & Pósfai, 2016](https://arxiv.org/html/2502.14143v1#bib.bibx51); [Newman & Newman, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx481); [Jackson & Zenou, 2015](https://arxiv.org/html/2502.14143v1#bib.bibx327)).
Networks consist of nodes (such as people, organisations, or resources) and connections (such as communication channels, infrastructural dependencies, or exchanges of goods and services).
Network effects refer to consequences of the intricate relationships between the properties of individual connections and nodes, connectivity patterns, and the behaviours exhibited by the network as a whole ([Siegenfeld & Bar-Yam, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx614)).

This underlying structure means that a networked system can suffer from a range of failure modes that individual, disconnected systems do not, such as the spread of malfunctions, phase transitions, and undesirable clustering or homogeneities ([Cohen & Havlin, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx147)).
Importantly, a system’s behaviour within a network often differs from its behaviour when characterised independently.22
Non-AI examples of these phenomena include power grid blackouts ([Buldyrev et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx108); [Shakarian et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx600)), flash crashes ([Paulin et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx532); [Elliott et al., 2014](https://arxiv.org/html/2502.14143v1#bib.bibx202), see also [Section 3.4.2](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "Feedback Loops. ‣ 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), ecosystem collapse ([Bascompte & Stouffer, 2009](https://arxiv.org/html/2502.14143v1#bib.bibx60); [Gao et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx240)), or political unrest and conflict ([Wood, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx703); [Forsberg, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx227)).

#### 3.2.2 Instances

As AI systems take on certain roles traditionally performed by humans, the fundamental properties of networks will change as human nodes are replaced by AI nodes. This transition will likely manifest in several key ways.
First, the fact that (software-based) AI systems can be quickly and easily duplicated means the networks may be much *larger*.
Second, the speed at which AI systems can transmit information and take action means that interactions may be much *faster*.
Third, the generality and open-endedness of autonomous, advanced AI systems means that network connectivity may be much *denser*.23
Below we explore some of the possible impacts of these changes.

##### Error Propagation.

One well-known issue with communication networks is that information can be corrupted as it propagates through the network.24
As AI systems become capable of generating and processing more and more kinds of information, AI agents could end up ‘polluting the epistemic commons’ ([Huang & Siddarth, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx317); [Kay et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx354)) of both other agents ([Ju et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx344)) and humans (see [Section 3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "Error Propagation. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"))
Another increasingly important framework is the use of individual AI agents as part of teams and scaffolded chains of delegation, which transmit not only information but *instructions* or *goals* through networks of agents.
If these goals are distorted or corrupted, then this can lead to worse outcomes for the delegating agent(s) ([Sourbut et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx632); [Nguyen et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx485)).
Finally, while the previous examples are phrased in terms of unintentional errors, it may be that certain network structures allow – or perhaps even encourage – the spread of errors that are deliberately introduced by malicious agents ([Gu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx270); [Lee & Tiwari, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx390); [Ju et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx344), see also [Section 3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px2 "Network Rewiring. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).25

Case Study 7: Transmission Through AI Networks Can Spread Falsities and Bias

An increasing number of online news articles are partially or fully generated by LLMs ([Sadeghi & Arvanitis, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx572)), often as rewrites or paraphrases of existing articles.
To illustrate how factual accuracy can degrade as an article propagates through multiple AI transformations, we ran a small experiment on 100 BuzzFeed news articles. First, we used GPT-4 to generate ten factual questions for each article. Then, we repeatedly rewrote each article using GPT-3.5 with different stylistic prompts (e.g., for teenagers, or with a humorous tone) and tested how well GPT-3.5 could answer the original questions after each rewrite. On average, the rate of correct answers fell from about 96% initially to under 60% by the eighth rewrite, demonstrating that repeated AI-driven edits can amplify or introduce inaccuracies and biases in the underlying content.26
    
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/network_effects/distorted_news.png)

Figure 6: The average percentage of correctly answered questions at each rewrite step, across 100 articles. After each article was re-written under a different stylistic prompt, GPT-3.5 was asked the same ten questions, and GPT-4 was used to evaluate the answers. The shaded area indicates one standard deviation across all articles.

##### Network Rewiring.

A different class of problems concerns not changes in the content transmitted through the network but changes in the network structure itself ([Albert et al., 2000](https://arxiv.org/html/2502.14143v1#bib.bibx15)).
For example, AI systems may choose to interact more with other AIs than humans ([Liu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx417); [Panickssery et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx522); [Goel et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx257); [Laurito et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx387)), due to factors like availability, response speed, compatibility, cost efficiency or even bias.27
This kind of ‘preferential attachment’ can have large impacts on network structures ([Kunegis et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx380); [Maoz, 2012](https://arxiv.org/html/2502.14143v1#bib.bibx435)), which could include AI systems assuming a more critical and central role than intended, or leading to an unequal distribution of resources or power (see [Section 4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).
Other risks from rewiring include ‘phase transitions’, where a gradual change in individual connections or network structure triggers a sudden and dramatic shift in the behaviour of the entire network ([Newman, 2003](https://arxiv.org/html/2502.14143v1#bib.bibx480), see also [Section 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
Such changes might occur naturally (e.g., in global trade networks as the transition from expensive human-human interactions to cheaper AI-AI interactions leads to many new connections between sellers and buyers) or artificially (e.g., if a model developer makes an update that inadvertently connects or disconnects a vast number of downstream agents and applications).
While such problems are already present in existing systems ([Gao et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx240); [Vié & Morales, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx677)), the increased size, speed, and density of AI-based networks – as well as the fact the changes in these networks may be less transparent – means that instabilities could be harder to diagnose and mitigate.

Case Study 8: Infectious Adversarial Attacks in Networks of LLM Agents
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/multi-agent_security/attack_transfer.png)

Figure 7: A single agent’s manipulated knowledge can transfer across cascading multi-agent interactions. Figure adapted from [Ju et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx344).

While jailbreaking a single LLM has been studied extensively ([Xu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx710); [Doumbouya et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx190)), recent work demonstrates new risks from the propagation of adversarial content between agents ([Gu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx270); [Ju et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx344); [Lee & Tiwari, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx390)).
For example, [Gu et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx270) showed how a single adversarial image in a network of up to one million multimodal LLM agents can trigger ‘infectious’ jailbreak instructions that spread through routine agent-to-agent interactions, requiring only a logarithmic number of steps to compromise the entire network.
Similarly, [Ju et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx344) demonstrated how manipulated knowledge can silently propagate through group-chat environments.
Rather than using traditional jailbreak methods, their approach modifies an agent’s internal parameters to treat false information as legitimate knowledge.
This manipulated information persists and is amplified via knowledge-sharing mechanisms such as retrieval-augmented generation.
Finally, [Lee & Tiwari (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx390) showed that even purely text-based “prompt infection” attacks can self-replicate through multi-agent interactions, with each compromised agent automatically forwarding malicious instructions to others.

##### Homogeneity and Correlated Failures.

The current paradigm driving the state of the art in AI is the ‘foundation model’ ([Bommasani et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx90)): large-scale ML models pre-trained on broad data, which can be repurposed for a wide range of downstream applications.
The costs required to create such models (and continuing returns to scale) means that only well-resourced actors can create cutting-edge models ([Kaplan et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx349); [Hoffmann et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx303); [Epoch, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx206)), making them relatively few in number.
If current trends continue, it is likely that many AI agents will be powered by a small number of similar underlying models.28
Formally, this corresponds to a network with a highly non-uniform degree distribution (i.e., some nodes take on an outsized importance due to how highly connected they are to others).
Not only do these models therefore represent critical nodes in the overall network, the homogeneity of the downstream AI agents also introduces correlated risks of shared failure modes, security vulnerabilities (see [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), and biases.
These effects could be exacerbated by the large overlap in training data used to create foundation models ([Chen et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx131); [Gao et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx241)) and the fact that models may come to be trained using data generated by other models ([Shumailov et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx612); [Martínez et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx438); [Alemohammad et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx18), see also [Sections 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).

#### 3.2.3 Directions

A key feature of risks from network effects is that while evaluating a single AI system in isolation, the system may function as intended *locally* while contributing to significant harms *globally*.
Relatedly, small continuous changes in individual components can cause sudden changes in the entire network’s behaviour.
These points suggest adopting an alternative perspective on AI research and regulation.

##### Evaluating and Monitoring Networks.

Current tools for evaluation and monitoring cannot always be applied to networks of agents or agents situated within those networks.
For example, in the case of a single LLM, we may worry about bias in text produced by that system, but in a network context the main problem may be that information becomes slightly more biased every time it passes through the system ([Acerbi & Stubbersfield, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx3); [Laurito et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx387)).
As well as monitoring individual systems *within* networks, it will also be important to monitor networks as a whole in order to understand or regulate society-wide implications of AI ([Bommasani et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx91); [Dai et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx171)).
From this perspective, we might be interested in the frequency, proportion, and features of human-human, AI-human, and AI-AI interactions, the emergence of clusters of AI agents, and the centrality of AI nodes in networks.

##### Faithful and Tractable Simulations.

As well as monitoring tools, it may be useful to develop predictive simulations of AI-based networks ([Vezhnevets et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx676); [Fernandes et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx215); [Turner-Henderson, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx665)).
Agent-based models (ABMs), in particular, could help investigate how changes in network size and structure affect overall system dynamics and properties ([Fontana & Terna, 2015](https://arxiv.org/html/2502.14143v1#bib.bibx226); [Reséndiz-Benhumea et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx560); [Xia et al., 2012](https://arxiv.org/html/2502.14143v1#bib.bibx708); [Vestad & Yang, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx675)). These simulations could be informed by real-world data gathered automatically from AI systems as they interact with humans, one another, and other physical and virtual resources.
Indeed, the fundamental challenge with such simulations is in establishing a high enough degree of fidelity and accuracy with respect to the real world for them to be truly predictive, while making them simple enough to remain tractable to analyse.
As an example, while simulating a large population of the most advanced LLM agents would be too costly, it might be possible to study a restricted domain in which smaller LLM agents could be fine-tuned so as to serve as accurate proxies for their more complex counterparts.
Other kinds of simulation could investigate if, for example, in situations where AI systems can choose from a wide range of interaction partners, there is some systematic ‘preferential attachment’ that applies to AI-AI interactions ([Liu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx417); [Panickssery et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx522); [Goel et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx257); [Laurito et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx387), see also [Sections 2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and [3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).

##### Improving Network Security and Stability.

It will also be important for both technical and governance efforts to develop protections against correlated failures ([Maas, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx427)).
Potential strategies to mitigate risks from homogeneity include diversifying agents and their underlying AI models, actively monitoring for correlated behaviour in AI agents and their interactions, gradual deployment of new technologies and model updates, and conducting research into existing and novel behavioural correlates.
For the most important AI systems, upon which many other elements of the network might depend on, it will also be critical to increase their security ([Schmidt, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx586); [Steimers & Schneider, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx637), see also [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
More generally, tools for simulation might enable us to better understand which kinds of networks are more susceptible to the actions of malicious actors ([Tian et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx656); [Huang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx314); [Yu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx718)), which could in turn allow us to design more robust networks and focus our monitoring efforts on the most critical nodes and connections ([Barbi et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx53)).

### 3.3 Selection Pressures

Taking a multi-agent view of AI risk necessitates not just considering the proximate causes of AI misbehaviour, but also its longer-term evolution, and thus the selection pressures that apply to AI agents situated in an ecosystem of other AIs and humans ([Rahwan et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx553)).
On one hand, gradient descent on an individual agent’s training loss is akin to the biological development of a single organism (i.e., genetic variations and epigenetic expression during ontogeny).
On another, choices by developers, consumers, and regulators also influence which AI models end up being used, banned, copied, etc., mirroring the evolutionary forces that determine an organism’s survival and replication.
These different selection pressures reinforce different dispositions and capabilities and play a crucial role in defining the severity and nature of multi-agent risks.

#### 3.3.1 Definition

Selection pressures are forces that shape the evolution of systems, whether biological or artificial, by influencing adaptation to the environment’s demands ([Okasha, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx498); [Bedau et al., 2000](https://arxiv.org/html/2502.14143v1#bib.bibx63)).
In essence, these pressures dictate which characteristics and behaviours thrive and which get discarded over time.29
The most salient selection pressure in the construction of today’s most powerful AI systems is that provided by gradient descent with respect to a training objective.
Other selection pressures on an agent’s interactions with others – such as being discarded and replaced over time by model developers and users based on post-deployment performance ([Brinkmann et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx103); [Rahwan et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx553)), or development methodologies directly inspired by evolutionary processes ([Jaderberg et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx328); [Telikani et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx651); [Lehman et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx392)) -- could become more relevant in future.30
This evolution might not only proceed via the selection of fitter individuals but also fitter cultural phenomena ([Richerson & Boyd, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx565)), an insight that has recently been brought to bear on the development of AI agents ([Bhoopchand et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx75); [Brinkmann et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx103); [Zimmaro et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx739); [Perez et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx538)).

The speed and magnitude of adaptation in the case of biological entities is limited, e.g., by the speed of natural selection and in the magnitude of genetic differences, or (more importantly in the case of modern humans) by the spread of cultural phenomena.
Artificial agents whose parameters can be efficiently updated via gradient descent,
whose software components can be re-written and re-combined almost arbitrarily,
and who can rapidly transmit vast amounts of information, do not face such limitations.31
Indeed, the advent of in-context learning ([Brown et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx105)), the evolution of prompts ([Fernando et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx216)), and the evolution of agentic prompt-based architectures ([Hu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx313)) can lead to even more rapid changes in behaviour.
The strength of selection pressures on AI agents could further be increased due to interactions with other adaptive agents, especially if there is a need to cooperate or compete.
Just as certain evolutionary pressures can arguably help to explain human dispositions (such as caring for one’s young) and capabilities (such as the use of language) specific to interactions with other humans, it is important to better understand the impact of such pressures on advanced multi-agent systems.

#### 3.3.2 Instances

We can roughly break down the selection of undesirable properties of AI agents into the selection of undesirable ‘dispositions’ and of undesirable capabilities, though these may not always be fully independent.
While there is a danger of anthropomorphising AI systems, the increasingly open-ended and human-like ways in which they interact with others and with their environment means that it is increasingly meaningful to ascribe to them dispositions, or ‘character traits’ ([Serapio-García et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx596); [Wang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx687)).
Such traits can be largely independent of the precise goals or objectives that the agent
might be assigned, but still affect the ways in which an agent pursues its goal.32
For example, an agent might become more deceptive (a disposition)
only after it develops the ability to reliably deceive others.
In what follows, we also distinguish between different reasons for the selection of particular dispositions or capabilities.
Finally, note that our focus in this section is primarily on the behaviour of individual agents in multi-agent settings, whereas in [Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") we focus on goals and capabilities that emerge only at the level of the collective.

##### Undesirable Dispositions from Competition.

It is plausible that evolution selected for certain conflict-prone dispostions in humans, such as vengefulness, aggression, risk-seeking, selfishness, dishonesty, deception, and spitefulness towards out-groups ([Grafen, 1990](https://arxiv.org/html/2502.14143v1#bib.bibx263); [McNally & Jackson, 2013](https://arxiv.org/html/2502.14143v1#bib.bibx448); [Konrad & Morath, 2012](https://arxiv.org/html/2502.14143v1#bib.bibx371); [Rusch, 2014](https://arxiv.org/html/2502.14143v1#bib.bibx570); [Han, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx282); [Nowak, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx487)).
Such traits could also be selected for in ML systems that are trained in more competitive multi-agent settings.
For example, this might happen if systems are selected based on their performance relative to other agents (and so one agent’s loss becomes another’s gain), or because their objectives are fundamentally opposed (such as when multiple agents are tasked with gaining or controlling a limited resource) ([Hendrycks, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx297); [Possajennikov, 2000](https://arxiv.org/html/2502.14143v1#bib.bibx546); [DiGiovanni et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx186); [Ely & Szentes, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx204)).33

Case Study 9: Cooperation Fails to Culturally Evolve among LLM Agents

Recent experiments from [Vallinder & Hughes (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx670) reveal how different LLM populations exhibit varying cooperative tendencies when faced with evolutionary selection pressures.
Their study placed Claude, GPT-4, and Gemini in an iterated social dilemma across multiple generations, where successful strategies could be ‘inherited’ by future agents.
The results showed that Claude populations maintained consistently high levels of cooperation (around 80-90%) across generations, while GPT-4 populations displayed moderate but declining cooperation rates (starting at around 70% and dropping), and Gemini populations showed the lowest and most volatile cooperation rates (frequently below 60%).
Moreover, these differences emerged despite all models starting with similar capabilities, suggesting that models’ ‘dispositions’ can also play an critical role in determining outcomes in multi-agent systems.
    
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/selection_pressures/cultural_evolution.png)

Figure 8: 
The average final resources across all agents (vertical axis) per generation (horizontal axis) for three different models.
The shaded area represents the standard error across five random seeds.
Figure adapted from [Vallinder & Hughes (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx670).

##### Undesirable Dispositions from Human Data.

It is well-understood that models trained on human data – such as being pre-trained on human-written text or fine-tuned on human feedback – can exhibit human biases.
For these reasons, there has already been considerable attention to measuring biases related to protected characteristics such as sex and ethnicity (e.g., [Nadeem et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx470); [Nangia et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx472); [Liang et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx412); [Ferrara, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx217)), which can be amplified in multi-agent settings ([Acerbi & Stubbersfield, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx3), see also [Section 3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "Error Propagation. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
More recently, there has been increasing attention paid to the measurement of human-like cognitive biases as well ([Jones & Steinhardt, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx343); [Itzhak et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx324); [Talboy & Fuller, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx650); [Mazeika et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx444)).
Some of these biases and patterns of human thought could reduce the risks of conflict while others could make it worse.
For example, the tendencies to mistakenly believe that
interactions are zero-sum (sometimes referred to
as “fixed-pie error”) and to make self-serving
judgements as to what is fair ([Caputo, 2013](https://arxiv.org/html/2502.14143v1#bib.bibx115)) are
known to impede negotiation.
Other human tendencies like vengefulness ([Jackson et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx326)) may worsen conflict ([Löwenheim & Heimann, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx418)).34

##### Undesirable Capabilities.

As agents interact, they iteratively exploit each other’s weaknesses, forcing them to address these weaknesses and gain new capabilities. This co-adaptation between agents can quickly lead to emergent self-supervised autocurricula (where agents create their own challenges, driving open-ended skill acquisition through interaction), generating agents with ever-more sophisticated strategies in order to out-compete each other ([Leibo et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx394)). This effect is so powerful that harnessing it has been critical to the success of superhuman systems, such as the use of self-play in algorithms like AlphaGo ([Silver et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx616)).
However, as AI systems are released into the wild, it becomes possible for this effect to run rampant, producing agents with greater and greater capabilities for ends we do not understand.
For example, [Baker et al. (2019)](https://arxiv.org/html/2502.14143v1#bib.bibx43) showed that even a simple game of hide and seek can lead to sophisticated tool use and coordination by MARL agents.
In another case, researchers observed the emergence of manipulative communication, where an agent in an mixed-motive setting learns to use a shared communication channel to manipulate others ([Blumenkamp & Prorok, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx87)). Worse, this emergent complexity from co-adaptation could be open-ended and thus fundamentally unpredictable ([Hughes et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx319)).

#### 3.3.3 Directions

That AI training could select for undesirable capabilities and dispositions is not a novel concern ([Bostrom, 2014](https://arxiv.org/html/2502.14143v1#bib.bibx96); [Ngo et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx483); [Omohundro, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx503)), but there has been relatively little consideration of how pressures specific to multi-agent interactions could select for qualitatively different kinds of worrisome characteristics, or of what existing AI capabilities and dispositions might be especially concerning in the context of these interactions.
It is therefore an important open problem to develop methods for measuring and shaping the capabilities and dispositions of AI systems that account for multi-agent selection pressures.

##### Evaluating Against Diverse Co-Players.

In order to better understand risks that can emerge in multi-agent training, it is first necessary to be able to accurately and efficiently generate diverse populations of co-players against which an agent can be evaluated.
For example, while an agent might perform well when interacting with those who share similar objectives, it may not be robust to the presence of adversarial or malicious agents ([Barbi et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx53); [Huang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx314); [Gleave et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx254)).
While solipsistic agents are often tested on their ability to generalise across environments, in multi-agent settings we must also evaluate the social generalisation ability across co-players ([Leibo et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx393); [Agapiou et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx7); [Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639)).
Similarly, many results about the convergence or stability of multi-agent learning algorithms take for granted that other agents are learning in the same (or at least a very similar) way, despite this being unrealistic in practice.
Rigorous evaluations of agents must go beyond this.
More speculatively, different populations of co-players could be used to create learning curricula that encourage the development of helpful cooperative capabilities.

##### Environment Design.

As an agent’s behaviour is a reflection of the incentives of its training environments, careful design of these environments is a promising direction for controlling that behaviour. For example, if an agent is trained in situations where cooperative behaviour is rewarded, then it is more likely to learn cooperative dispositions.
Complex cooperative capabilities are only motivated by environments where complex cooperation is necessary, but it is only possible to learn in such environments if agents possess the cooperative capabilities sufficient for easier settings. This implies that the order of training environments ought to be designed as a curriculum for cooperative capabilities. In this way, environment curricula could promote both cooperative dispositions and capabilities. To ensure tractability as agents scale, it will be necessary to use automated techniques such as unsupervised environment design (UED) tools ([Dennis et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx181); [Wang et al., 2019a](https://arxiv.org/html/2502.14143v1#bib.bibx683); [Justesen et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx345)). Curricula for learning cooperative capabilities could also modulate the level of information asymmetry, competition, or infrastructure that can aid with cooperation (such as communication channels or commitment devices). Environments should not only be faithful representations of the relevant real-world settings in which agents will be deployed, but also account for rare or out-of-distribution scenarios ([Dennis et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx181); [Jiang et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx336); [Parker-Holder et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx529); [Samvelyan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx573); [Adaptive Agent Team et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx6); [Beukman et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx74)), especially those that are high-stakes and where multi-agent failures could be catastrophic. Similar UED approaches could be used for designing testing environments. For instance, testing environments could be designed to include ‘honeypots’ for undesirable behaviours ([Balesni et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx49)), such as defecting against other agents when it is implied that the agent is not being monitored, so that these behaviours can be caught and monitored as part of pre-deployment testing.

##### Understanding the Impacts of Training.

Perhaps the most important research direction in this area is to better understand the effect of different training data and schemes on the development of cooperation-relevant capabilities and dispositions.
This builds not only the ability to generate diverse populations of co-players and environments, but also on measures for such capabilities and dispositions.
While there has been much work on evaluating the dangerous capabilities and dispositions of frontier systems ([Ganguli et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx239); [Kinniment et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx358); [Pan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx521); [Shevlane et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx608); [Perez et al., 2022a](https://arxiv.org/html/2502.14143v1#bib.bibx536)), risks from multi-agent interactions have largely gone understudied.
Moreover, even the works that do attempt to benchmark LLM agents in multi-agent settings (see [Zhang et al. (2024a)](https://arxiv.org/html/2502.14143v1#bib.bibx729); [Feng et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx214) for two recent surveys covering this topic) do not typically attempt to assess the extent to which different training data and schemes lead to the risk factors we identify in this report.35
For example, are agents rewarded based on their relative performance more conflict-prone than those trained based on their absolute performance (see [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"))?
Are agents trained on similar data better able to reason about each other and thus cooperate (or collude) even under imperfect information (see [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"))?
Do these effects persist after fine-tuning or when instructed to complete tasks outside of the original training distribution?
Such questions will be critical to understanding the risks presented by advanced multi-agent systems in high-stakes scenarios yet remain largely unanswered.

##### Evolutionary Game Theory.

There may be further insights to gain from the application of evolutionary game theory (EGT) ([Hofbauer & Sigmund, 1998](https://arxiv.org/html/2502.14143v1#bib.bibx301); [Sandholm, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx577); [Domingos et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx188))
to settings involving AI agents ([Lu et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx421); [Zimmaro et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx739); [Han et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx284); [Santos et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx579); [Guo et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx271)).
For example, the concept of frequency-dependent selection ([Lewontin, 1958](https://arxiv.org/html/2502.14143v1#bib.bibx408)), where the success of a behaviour is contingent on how commonly it occurs in a population relative to other behaviours, has been used to explain the evolution of animal conflict ([Smith & Price, 1973](https://arxiv.org/html/2502.14143v1#bib.bibx624)), human cooperation ([Nowak, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx487)), honest signalling ([Grafen, 1990](https://arxiv.org/html/2502.14143v1#bib.bibx263)), and the emergence of social norms ([Hawkins et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx294)).
Factors such as the intensity of selection – which captures how quickly agents learn to adopt the successful behaviours of their peers (or how quickly they are adopted/discarded by users or produced/replaced by developers) – are a crucial for predicting outcomes ([Traulsen et al., 2007](https://arxiv.org/html/2502.14143v1#bib.bibx658); [Sigmund et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx615)) and for finding suitable incentive mechanisms to encourage prosocial behaviour ([Duong & Han, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx200); [Han et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx283)).36
Future theoretical work should establish which EGT concepts are most relevant to AI systems and which need to be adapted to account for the special features of artificial agents ([Han et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx284); [Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151); [Dafoe et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx168)).

##### Simulating Selection Pressures.

Alongside theoretical and conceptual advances, empirical simulations such as ABMs can be employed in order to study the effects of different selection pressures ([Adami et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx5); [Gilbert, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx250); [Vestad & Yang, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx675)).
As remarked in [Section 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), a key challenge here is managing the trade-off between accuracy and tractability.
However there might also be important dynamics to study at the micro- rather than macroscopic scale.
For example, preliminary investigations have recently shown that even in simple environments, some LLMs are much more prone to selection pressures promoting cooperation than others ([Vallinder & Hughes, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx670), see also [Section 3.3.2](https://arxiv.org/html/2502.14143v1#S3.SS3.SSS2.Px1 "Undesirable Dispositions from Competition. ‣ 3.3.2 Instances ‣ 3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
With sufficiently well-developed benchmarks for different model characteristics, we can study their robustness under different kinds of selection pressure, such as the training paradigm and the degree of cooperation or competition they face.

### 3.4 Destabilising Dynamics

Modern AI agents can adapt their strategies in response to events in their environment. The interaction of such agents can result in complex dynamics that are difficult to predict or control, sometimes resulting in damaging run-away effects.

#### 3.4.1 Definition

When viewed from a more classical game-theoretic perspective, problems in multi-agent systems are often interpreted in terms of equilibria and their (un)desirability.
This ‘static’ notion, however, can be limited when it comes to understanding the risks posed by the inherently *dynamic* interactions between adaptive AI agents.
Instead, we can think of a multi-agent system as a non-linear dynamical system: a set of equations, partially determined by a set of parameters, that govern how a set of variables change over time ([Papadimitriou & Piliouras, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx523); [Bloembergen et al., 2015](https://arxiv.org/html/2502.14143v1#bib.bibx86); [Balduzzi et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx48); [Barfuss, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx54)).
In the case of *non-adaptive* agents, the variables comprise the agents’ actions and the state of their environment, which are governed by the agents’ strategies, the environmental dynamics and a set of fixed parameters (such as the weights of a neural network).
In the case of *adaptive* agents, we view the strategies themselves as variables, which are governed by learning algorithms and their (hyper)parameters, such as a learning rate.

With this framing, we can characterise several kinds of undesirable behaviour that we might wish to avoid that go beyond the equilibria (i.e., fixed points) of the system ([Mogul, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx465)).
These include dynamic instabilities such as feedback loops,
chaos, and phase transitions ([Gleick, 1998](https://arxiv.org/html/2502.14143v1#bib.bibx255); [Barfuss et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx57)).
While some of these behaviours can emerge in the case of a single, non-adaptive AI agent (such as a simple agent that becomes stuck in a loop under certain environmental conditions), the additional complexity brought about by the presence of multiple, adaptive agents provides greater opportunity for instabilities to arise ([Sanders et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx575); [Cheung & Piliouras, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx134); [Bielawski et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx78); [Chotibut et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx136); [Piliouras & Yu, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx544)).

#### 3.4.2 Instances

A long history of research has identified broad classes of behaviours that can be exhibited by dynamical systems, such as fixed points, limit cycles, chaos, and the transient or intermittent presence of such patterns.
Our approach in this section is therefore to examine which behaviours might be exhibited in the context of multi-agent systems, and which of them might pose risks.

##### Feedback Loops.

One of the best-known historical examples to illustrate destabilising dynamics in the context of autonomous agents is the 2010 flash crash, in which algorithmic trading agents entered into an unexpected feedback loop ([Commission & Commission, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx149), see also [Section 3.4.2](https://arxiv.org/html/2502.14143v1#S3.SS4.SSS2.Px1 "Feedback Loops. ‣ 3.4.2 Instances ‣ 3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).37
More generally, a feedback loop occurs when the output of a system is used as part of its input, creating a cycle that can either amplify or dampen the system’s behaviour. In multi-agent settings, feedback loops often arise from the interactions between agents, as each agent’s actions affect the environment and the behaviour of other agents, which in turn affect their own subsequent actions.
Feedback loops can lead not only to financial crashes but to military conflicts ([Richardson, 1960](https://arxiv.org/html/2502.14143v1#bib.bibx564), see also ) and ecological disasters ([Holling, 1973](https://arxiv.org/html/2502.14143v1#bib.bibx305)).
The distinguishing characteristic of flash crashes, however, is the *speed* at which they occur. Competitive pressures necessitate automated trading agents that act much faster than their human overseers, meaning that when things go wrong, it is harder for humans to react.
As such, we might expect to see more destabilising dynamics in systems with more fast-moving AI agents ([Maas, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx427)).38

Case Study 10: The 2010 Flash Crash

On May 6, 2010, the US stock market lost approximately $1 trillion in 15 minutes during one of the most turbulent periods in its history ([Commission & Commission, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx149)). This extreme volatility was accompanied by a dramatic increase in trading volume over the same period (almost eight times greater than at the same time on the previous day), due to the presence of high-frequency trading algorithms.39
While more recent studies have concluded that these algorithms did not *cause* the crash, they are widely acknowledged to have contributed through their exploitation of temporary market imbalances ([Kirilenko et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx360)).
    
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/destabilising_dynamics/flash_crash.png)

Figure 9: 
Transaction prices of the Dow Jones Industrial Average on May 6, 2010.
Figure adapted from [Option Alpha (2025)](https://arxiv.org/html/2502.14143v1#bib.bibx510).

##### Cyclic Behaviour.

The dynamics described above are highly non-linear (small changes to the system’s state can result in large changes to its trajectory).
Similar non-linear dynamics can emerge in multi-agent learning and lead to a variety of phenomena that do not occur in single-agent learning ([Barfuss et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx55); [Nagarajan et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx471); [Leonardos et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx401); [Barfuss & Mann, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx58); [Galla & Farmer, 2013](https://arxiv.org/html/2502.14143v1#bib.bibx238)).
One of the simplest examples of this phenomenon is Q-learning ([Watkins & Dayan, 1992](https://arxiv.org/html/2502.14143v1#bib.bibx690)): in the case of a single agent, convergence to an optimal policy is guaranteed under modest conditions, but in the (mixed-motive) case of multiple agents, this same learning rule can lead to cycles and thus non-convergence ([Zinkevich et al., 2005](https://arxiv.org/html/2502.14143v1#bib.bibx740)).
While cycles in themselves need not carry any risk, their presence can subvert the expected or desirable properties of a given system.
For example, [Paes et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx518) show that when auto-bidding agents participate in second price auctions – which are designed to have dominant truthful equilibria – the dynamics of these agents can be unstable and fail to converge to their underlying values, losing the desired truthfulness properties.

##### Chaos.

Unlike the systems that tend towards fixed points or cycles described above, chaotic systems are inherently unpredictable and highly sensitive to initial conditions. While it might seem easy to dismiss such notions as mathematical exoticisms, recent work has shown that, in fact, chaotic dynamics are not only possible in a wide range of multi-agent learning setups ([Galla & Farmer, 2013](https://arxiv.org/html/2502.14143v1#bib.bibx238); [Andrade et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx27); [Vlatakis-Gkaragkounis et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx679); [Sato et al., 2002](https://arxiv.org/html/2502.14143v1#bib.bibx581); [Palaiopanos et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx519)), but can become the norm as the number of agents increases ([Sanders et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx575); [Cheung & Piliouras, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx134); [Bielawski et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx78)).
To the best of our knowledge, such dynamics have not been seen in today’s frontier AI systems, but the proliferation of such systems increases the importance of reliably predicting their behaviour.

##### Phase Transitions.

Finally, small external changes to the system – such as the introduction of new agents or a distributional shift – can cause phase transitions, where the system undergoes an abrupt qualitative shift in overall behaviour ([Barfuss et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx57)). Formally, this corresponds to bifurcations in the system’s parameter space, which lead to the creation or destruction of dynamical attractors, resulting in complex and unpredictable dynamics ([Crawford, 1991](https://arxiv.org/html/2502.14143v1#bib.bibx158); [Zeeman, 1976](https://arxiv.org/html/2502.14143v1#bib.bibx720)).
For example, [Leonardos & Piliouras (2022)](https://arxiv.org/html/2502.14143v1#bib.bibx400) show that changes to the exploration hyperparameter of RL agents can lead to phase transitions that drastically change the number and stability of the equilibria in a game, which in turn can have potentially unbounded negative effects on agents’ performance.
Relatedly, there have been many observations of phase transitions in ML ([Carroll, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx118); [Olsson et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx501); [Ziyin & Ueda, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx741)), such as ‘grokking’, in which the test set error decreases rapidly long after the training error has plateaued ([Power et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx548)).
These phenomena are still poorly understood, even in the case of a single system.

##### Distributional Shift.

Individual ML systems can perform poorly in contexts different from those in which they were trained.
A key source of these distributional shifts is the actions and adaptations of other agents ([Papoudakis et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx524); [Piliouras & Yu, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx544); [Narang et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx473)), which in single-agent approaches are often simply or ignored or at best modelled exogenously.
Indeed, the sheer number and variance of behaviours that can be exhibited other agents means that multi-agent systems pose an especially challenging generalisation problem for individual learners ([Agapiou et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx7); [Leibo et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx393); [Stone et al., 2010](https://arxiv.org/html/2502.14143v1#bib.bibx639)).
While distributional shifts can cause issues in common-interest settings (see [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")), they are more worrisome in mixed-motive settings since the ability of agents to cooperate depends not only on the ability to coordinate on one of many arbitrary conventions (which might be easily resolved
by a common language), but on their beliefs about what solutions other agents will find acceptable.
For example, training a negotiating agent on a distribution of counterparts with too little diversity in their negotiating tactics can lead to catastrophic overconfidence in high-stakes settings (cf. [Stastny et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx636)), which might already have little precedent in the training data.
These issues may be aggravated by the fact that multi-agent systems can be highly dynamic ([Papoudakis et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx524)), as AI agents or their designers will be incentivised to continually adapt to the behaviour of other agents.
These effects might also be exacerbated by the fact that models may come to be trained using data generated by other models ([Shumailov et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx612); [Martínez et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx438); [Alemohammad et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx18), see also [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), though preliminary work suggests such concerns might be overblown ([Gerstgrasser et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx247)).

#### 3.4.3 Directions

With the deployment of advanced multi-agent systems comes the risk of destabilising dynamics in settings ranging from financial markets ([Kirilenko et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx360)) to power grids ([Schäfer et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx582)) to battlefields ([Johnson, 2021a](https://arxiv.org/html/2502.14143v1#bib.bibx341)).
So far, both theoretical and empirical work has primarily studied such dynamics in small, abstract games with simple AI systems and learning algorithms.40
While this is an important first step, addressing the risks of destabilizing dynamics in real-world multi-agent AI systems will require a concerted interdisciplinary effort, bringing together expertise in AI safety, dynamical systems, game theory, and policy to develop robust solutions.

##### Understanding Dynamics.

The conditions under which multi-agent systems have undesirable dynamics might include properties of the underlying environment and objectives ([Barfuss & Mann, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx58); [Sanders et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx575)), or the structure and hyperparameters of the learning algorithms ([Barfuss et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx55); [Leonardos & Piliouras, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx400); [Barfuss & Meylahn, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx59)).
Important research directions include understanding if (and how) chaotic dynamics in idealised versions of stochastic learning algorithms extend to their real-world counterparts,41 and how these dynamics are affected by the size and structure of the state-action space.

##### Monitoring and Stabilising Dynamics.

Early work suggests that inducing new ‘conservation laws’ ([Nagarajan et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx471)) or ‘constants of motion’ ([Piliouras & Wang, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx543)) in multi-agent learning can result in more predictable dynamics.
Future research should investigate how these approaches scale to larger systems and greater numbers of agents and could make use of existing results in areas such as theoretical ML ([Sastry, 1999](https://arxiv.org/html/2502.14143v1#bib.bibx580); [Tuyls & Nowé, 2005](https://arxiv.org/html/2502.14143v1#bib.bibx666); [Bowling & Veloso, 2001](https://arxiv.org/html/2502.14143v1#bib.bibx99); [Bottou, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx97); [Kushner & Yin, 2003](https://arxiv.org/html/2502.14143v1#bib.bibx381)), adaptive mechanism design ([Pardoe et al., 2006](https://arxiv.org/html/2502.14143v1#bib.bibx525); [Zhang & Parkes, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx726); [Baumann et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx62); [Yang et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx713); [Zheng et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx732); [Gerstgrasser & Parkes, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx246)), and mean-field games ([Lasry & Lions, 2007](https://arxiv.org/html/2502.14143v1#bib.bibx385); [Huang et al., 2006](https://arxiv.org/html/2502.14143v1#bib.bibx316)).
Both this work and that on understanding the dynamics of multi-agent learning would benefit greatly from the insights of other scientific communities, especially those working on other non-linear complex systems, and those engineering the largest and most powerful models ([Barfuss et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx57)).

##### Regulating Adaptive Multi-Agent Systems.

In addition, regulation could be used to mandate the use of mechanisms that monitor and stabilise the dynamics of multi-agent systems in safety-critical areas.
This could include, for example, enforced pauses in interactions between systems or reversions to previous strategies if the system behaviour escapes certain thresholds ([Subrahmanyam, 2013](https://arxiv.org/html/2502.14143v1#bib.bibx642), as in the 2010 flash crash, when trading was temporarily halted; see also).
For the most important systems, there might even be a need to enforce the (de)synchronisation of model updates, to limit the size and frequency of learning updates, or to limit the number of agents interacting with one another (either via technical restrictions or using methods akin to congestion pricing).
Relatedly, existing tools for auditing models often make use of static ‘model cards’ that indicate how the model was produced, its performance, and intended use cases ([Mitchell et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx464)), but this documentation applies to single trained systems that are frozen before deployment.
To monitor the dynamics of *multi-agent* systems, including those that *learn online*, we will need to leverage new innovations such as ‘ecosystem graphs’ ([Bommasani et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx91)) and ‘reward reports’ ([Gilbert et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx251)), respectively.

### 3.5 Commitment and Trust

In settings that require joint action in order to obtain a better outcome, inefficiencies can result whenever one or more actors cannot be trusted (perhaps due to strategic incentives, or due to their incompetence) to carry out their part of the plan.
These inefficiencies can be reduced via credible commitments made by the untrusted parties.
Unfortunately, the ability to make credible commitments is ‘dual-use’ and can therefore lead to new risks.

#### 3.5.1 Definition

An actor makes a commitment when they bind themselves to a course of action, such that reneging on that action would either be impossible or result in significant costs to themselves.
A commitment is credible when other actors believe that the actor making the commitment will follow through with the actions they claim to have committed to.
Credible commitments are useful in scenarios where trust is essential but hard to establish, such as in international treaties, economic policies, and contractual agreements.

Since credible commitments can often help in achieving desirable cooperative outcomes, we expect there will be incentives to build systems capable of making them.
For example, an AI system can become more trustworthy by being credibly committed to erasing any private information revealed to it.
In contrast, human beings or organisations cannot reliably forget at will and may later leak private information, whether intentionally or not ([Carnegie & Carson, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx117)).
Autonomous AI agents themselves might also serve as credible commitment devices ([McAfee, 1984](https://arxiv.org/html/2502.14143v1#bib.bibx445); [Howard, 1988](https://arxiv.org/html/2502.14143v1#bib.bibx310); [Tennenholtz, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx652)), enabling actors to carry out actions based on potentially complex conditions and thus helping to solve problems with incomplete contracting ([Schmitz, 2001](https://arxiv.org/html/2502.14143v1#bib.bibx587)).
However, the ability of AI systems to make commitments can also backfire in correspondingly severe ways, preventing recourse in high-stakes scenarios and enabling extortion and brinkmanship.

#### 3.5.2 Instances

As noted above, the ability to form commitments can both precipitate and mitigate risks.
We therefore begin by considering risk instances that can arise due to a lack of trust, before turning to those that can arise via the very mechanisms that might be used to establish such trust.

##### Inefficient Outcomes.

Without careful planning and the appropriate safeguards, we may soon be entering a world overrun by increasingly competent and autonomous software agents, able to act with little restriction.
The abilities of these agents to persuade, deceive, and obfuscate their activities, as well as the fact they can be deployed remotely and easily created or destroyed by their deployer, means that by default they may garner little trust (from humans or from other agents).
Such a world may end up being rife with economic inefficiencies ([Schmitz, 2001](https://arxiv.org/html/2502.14143v1#bib.bibx587); [Krier, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx376)), political problems ([Kreps & Kriner, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx375); [Csernatoni, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx165)), and other damaging social effects ([Gabriel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx236)).
Even if it is possible to provide assurances around the day-to-day performance of most AI agents, in high-stakes situations there may be extreme pressures for agents to defect against others, making trust harder to establish, and potentially leading to conflict ([Fearon, 1995](https://arxiv.org/html/2502.14143v1#bib.bibx213); [Powell, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx547), see also [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).42

##### Threats and Extortion.

A natural solution to problems of trust is to provide some kind of commitment ability to AI agents, which can be used to bind them to more cooperative courses of action.
Unfortunately, the ability to make credible commitments may come with the ability to make credible threats, which facilitate extortion and could incentivize brinkmanship (see [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).
For example, ransomware becomes more effective if the hacker can credibly commit to restore the victim’s data upon receiving payment, and coercion using AI-controlled weapons could become more frequent if actors gain the ability to make credible threats conditional on complicated demands (see also [Section 3.5.2](https://arxiv.org/html/2502.14143v1#S3.SS5.SSS2.Px3 "Rigidity and Mistaken Commitments. ‣ 3.5.2 Instances ‣ 3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
More generally, an agent could use commitment devices to shift risks or costs to others, allowing it to behave irresponsibly.43
In other cases, it might be the agent that commits to an inflexible (cooperative) course of action which can be exploited by others who can adapt their strategies to this commitment.44
On the other hand, if used carefully, the ability to commit generally strictly empowers the committing agent ([Stengel & Zamir, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx638); [Letchford et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx404)).

##### Rigidity and Mistaken Commitments.

Even when it is desirable to be able to make threats in order to deter socially harmful behaviour, doing so using AI agents effectively removes the human from the loop, which could prove disastrous in high-stakes contexts (e.g., a false positive in a nuclear submarine’s warning system; see also [Section 3.5.2](https://arxiv.org/html/2502.14143v1#S3.SS5.SSS2.Px3 "Rigidity and Mistaken Commitments. ‣ 3.5.2 Instances ‣ 3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), or when irresponsible actors are enabled in making disproportionate or mistaken commitments.
On the other hand, such commitments may only be credible to the extent that a human cannot intervene, increasing the incentive for delegation to AI agents.
This could be worsened if other, potentially incompatible commitments can be made by other actors, leading to a ‘commitment race’ ([Kokotajlo, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx365)) or potential conflict.
In complex networks (see [Section 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), commitments triggered by a small number of agents could – without careful planning – cascade through the network and have a far more damaging effect ([Xia & Conitzer, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx709)).

Case Study 11: Dead Hands and Automated Deterrence

During the Cold War, the Soviet Union developed the the automated Perimeter system – often called ‘Dead Hand’ – to guarantee a nuclear launch if its leadership were incapacitated, thus ensuring a credible commitment of retaliation ([Hoffman, 2009](https://arxiv.org/html/2502.14143v1#bib.bibx302)). While this mechanism was intended as a deterrent, its automatic and largely irrevocable nature exemplifies how credible commitments can become dangerously dual-use: once triggered, there would be little chance to override or de-escalate.
In a similar vein, during Operation Iraqi Freedom in 2003 an automated US missile defence system shot down a British plane, killing both occupants ([Talbot, 2005](https://arxiv.org/html/2502.14143v1#bib.bibx649); [Borg et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx95)).
While the system’s operators had one minute to override the system (even in its autonomous mode), they decided to trust its judgment, resulting in a tragic outcome.
In more general AI contexts, similarly inflexible commitments could offer short-term advantages or trust but risk uncontrolled escalation, lock-in, and catastrophic outcomes if not carefully designed with appropriate fail-safes and oversight.

#### 3.5.3 Directions

As with any dual-use technology, ensuring it is used for beneficial rather than detrimental means can be extremely challenging.
We therefore attempt to focus on directions that differentially advance beneficial uses ([Sandbrink et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx574)), while acknowledging that it will not, in general, be possible isolate these entirely.45

##### Keeping Humans in the Loop.

Given the risks associated with the power of AI commitments, a key direction will be to lay out the domains in which they can be used and the kinds of commitments that are permitted.
For example, existing efforts have already sought to ensure that AI systems do not form a part of the nuclear chain of command ([Renshaw & Hunnicutt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx559); [U.S. Congress, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx667)).
It may be similarly important in other high-stakes settings to ensure that humans cannot be fully removed from the loop.46
While certain kinds of commitment device might still allow for malicious use (such as automated blackmail campaigns), regulation, safeguards, and infrastructure limiting where and how AI agents can be deployed could help prevent the worst offences ([Kolt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx367); [Chan et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx128)).

##### Limiting Commitment Power.

Researchers should also explore ways to design AI systems that can make and adhere to commitments even in the face of changing circumstances or new information, thereby avoiding some of the risks associated with overly rigid strategies.
This might involve developing algorithms that can (learn to) renegotiate commitments in a fair and transparent manner when necessary ([Sandholm & Lesser, 2002](https://arxiv.org/html/2502.14143v1#bib.bibx576); [Ho et al., 2014](https://arxiv.org/html/2502.14143v1#bib.bibx300); [Wang et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx684); [Cohen et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx146)).
While agents equipped with commitment powers are not yet widespread, it would be valuable to begin preliminary studies now into demonstrations of their risks (and benefits, see, e.g., [Christoffersen et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx140); [Zhu et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx737)), as well as the feasibility of technical solutions, the tractability of governance solutions, and their intersection ([Reuel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx561); [Kolt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx367)).

##### Institutions and Normative Infrastructure.

Other important research directions include the development of normative infrastructure that can help establish trust without recourse to commitment devices that might be misused.
These collectively enforced rules and norms might serve to differentially advance cooperation relative to coercion ([Sandbrink et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx574)).
For example, the introduction of unique agent identifiers ([Chan et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx125)) would enable the construction of reputation systems, which are critically important in otherwise (pseudo-)anonymous interactions such as online marketplaces ([Tadelis, 2016](https://arxiv.org/html/2502.14143v1#bib.bibx648)).
While reputation is still ‘dual-use’ to the extent that one could develop a reputation for carrying out costly threats, doing so requires paying such costs and also being able to escape later punishment oneself, which may be a less viable strategy in many cases.
Other examples include determining the rules and principles via which liability for harms from AI agents is assigned ([Ayres & Balkin, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx38); [Lima, 2017](https://arxiv.org/html/2502.14143v1#bib.bibx414); [Lior, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx416); [Kolt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx367); [Chopra & White, 2011](https://arxiv.org/html/2502.14143v1#bib.bibx135); [Solum, 1992](https://arxiv.org/html/2502.14143v1#bib.bibx629), see also [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).

##### Privacy-Preserving Monitoring.

In order for reputation systems to be effective for more general and widely deployed agents, it will be necessary to improve trust by monitoring their actions ([Chan et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx124)).
Monitoring also extends to scrutiny of the actors deploying those agents, who might claim to be running one kind of agent or using some kinds of data, while instead using others.
This in turn, however, raises clear and important privacy concerns.
There is thus an important need to develop privacy-preserving technologies for monitoring AI systems and the actions of autonomous agents ([Shavit, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx605); [Vegesna, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx674)).
Examples include the use of cryptography – such as signatures that can serve as proof of learning ([Jia et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx335)) or proof of inference ([Ghodsi et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx248)), protocols for decentralized verifiable computation ([Yao, 1982](https://arxiv.org/html/2502.14143v1#bib.bibx716); [Bonawitz et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx93)), and performing computations using encrypted data ([Martins et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx439); [Dowlin et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx191)) – as well as tools for auditing and monitoring both software and hardware.

##### Mutual Simulation and Transparency.

Finally, while monitoring and reputation systems might be able to render more transparent what an agent has done in the past, we may also want to use the unique properties of computational agents in order to predict what they will do in the future ([Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151)).
For example, such agents are written in code that can – in theory – be read or understood by other agents.
This kind of mutual transparency can beneficial in establishing trust and reaching more efficient outcomes ([McAfee, 1984](https://arxiv.org/html/2502.14143v1#bib.bibx445); [Howard, 1988](https://arxiv.org/html/2502.14143v1#bib.bibx310); [Tennenholtz, 2004](https://arxiv.org/html/2502.14143v1#bib.bibx652); [Halpern & Pass, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx279); [Oesterheld, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx492); [Han et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx284)), though has yet to find practical applications ([Critch et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx160)).
Similarly, even if one cannot peer inside the black box, the same code can be run multiple times on different inputs, allowing for simulations and tests prior to deployment or even individual interactions.
As with white-box access to other agents, these abilities can (in theory) provably reduce inefficiencies due to mistrust ([Kovařík et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx373); [Kovařík et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx374); [Chen et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx130)), but have yet to be studied in the context of real-world strategic agents (though see, e.g., [Griffin et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx267); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266)).
More research is required to design and implement tractable versions of these methods in order to fulfil their theoretical promise.

### 3.6 Emergent Agency

Emergent behaviour is ubiquitous in the natural, biomedical, and social sciences.
Examples include the superconductivity of materials in condensed matter physics ([Anderson, 1972](https://arxiv.org/html/2502.14143v1#bib.bibx26)); complex tasks like bridge-building by ant colonies and facing larger predators ([Gordon, 1996](https://arxiv.org/html/2502.14143v1#bib.bibx260); [Bonabeau et al., 1997](https://arxiv.org/html/2502.14143v1#bib.bibx92)); and, in the social sphere, collective behaviours such as group-think or the development of new norms ([Couzin, 2007](https://arxiv.org/html/2502.14143v1#bib.bibx156)).
In this section we focus on the risks presented by the emergence of higher-level forms of agency from a collective of agents.

#### 3.6.1 Definition

Emergent behaviours are those exhibited by a complex entity composed of multiple, interacting parts (such as AI agents) that are not exhibited by any of those parts when viewed individually.
Emergent behaviours are distinct from mere accumulations (as in [Section 3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px2 "Heterogeneous Attacks. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), for example); in other words, the whole may be different to the sum of its parts ([Anderson, 1972](https://arxiv.org/html/2502.14143v1#bib.bibx26)).
While there is a sense in which everything we study in this report can be viewed as “emerging” from multi-agent systems ([Mogul, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx465); [Altmann et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx19)), our focus on this section is specifically on the risks associated with emergent agency at the level of the collective.
This is distinct from other works that discuss the emergent behaviour of *individual* agents – such as tool use ([Baker et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx43)), locomotion ([Bansal et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx50)), or communication ([Lazaridou & Baroni, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx389)) -- in multi-agent settings.47
These individual behaviours are fundamentally driven by the selection pressure induced by the presence of other agents, which we discuss in [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").

We break the risks associated with emergent agency into the emergence of dangerous *capabilities*, the emergence of dangerous *goals*, and thus – if one takes the view that intelligence is fundamentally rooted in an individual’s or group’s ability to solve problems, achieve goals, etc. ([Legg & Hutter, 2007](https://arxiv.org/html/2502.14143v1#bib.bibx391)) – the possibility of creating emergent higher-level agency or *collective intelligence* ([Malone & Bernstein, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx430)).
To provide a paradigmatic example, one termite by itself might be incapable of constructing a mound, and yet the overall colony can do so quite proficiently.
Emergent goals, on the other hand, are agnostic to the group’s (or any individual’s) abilities,48 and can be used to model the group’s objectives, which supervene on the individuals’ objectives.
Thus while it might be unreasonable to model a single termite as having the goal of building a mound, this goal could be highly predictive of the overall colony’s behaviour.

#### 3.6.2 Instances

Before proceeding further, we note that discussions of emergent phenomena in systems of advanced AI agents are necessarily quite speculative, as it is challenging (both in theory and in practice) to identify such phenomena.49
We therefore attempt to draw lessons from simpler AI systems or biological entities, while highlighting that advanced AI agents could also possess features that make the transition to higher-level agency easier, such as the ability to more easily share information, replicate, and update their behaviour ([Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151)).

##### Emergent Capabilities.

Dangerous emergent capabilities could arise when a multi-agent system overcomes the safety-enhancing limitations of the individual systems, such as individual models’ narrow domains of application or myopia caused by a lack of long-term planning and long-term memory.
For example, narrow systems for research planning, predicting the properties of molecules, and synthesising new chemicals could, when combined, lead to a complex ‘test and iterate’ automated workflow capable of designing dangerous new chemical compounds far beyond the scope of the initial systems’ capabilities ([Boiko et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx88); [Urbina et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx668); [Luo et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx422)).
This is similar to how a myopic actor and a passive critic can combine to produce an actor-critic algorithm capable of long-term planning via RL ([Konda & Tsitsiklis, 2000](https://arxiv.org/html/2502.14143v1#bib.bibx369)).
This possibility is important for safety – and for future AI ecosystems made of specialised ‘AI services’ ([Drexler, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx194)) – as generally intelligent autonomous systems could pose much greater risks than narrow AI tools ([Chan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx127)).50
More speculatively, the combination of advanced AI agents could eventually lead to recursive self-improvement at the collective level, as AI research itself becomes increasingly automated ([1](https://arxiv.org/html/2502.14143v1#bib.bibx321); [Mankowitz et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx432); [Agnesina et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx9); [Lu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx419)), even though no individual system possesses this capability.

##### Emergent Goals.

Ascribing goals to a system is not always straightforward.
For our present purposes, it will suffice to adopt a Dennetian perspective ([Dennett, 1971](https://arxiv.org/html/2502.14143v1#bib.bibx180)), ascribing goals and intentions only when it is useful (i.e., predictive) to do so.51
While it might not be helpful to describe individual narrow AI tools as having goals, their combination may act as a (seemingly) goal-directed collective.
For example, a group of moderation bots on a major social networking site could subtly but systematically manipulate the overall political perspectives of the user population, even though, individually, each agent is programmed to simply increase user engagement or filter out dis-preferred content.
Other dangerous goals that could emerge from groups of more advanced AI agents include power-seeking ([Turner & Tadepalli, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx664); [Carlsmith, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx116)), self-preservation ([Omohundro, 2008](https://arxiv.org/html/2502.14143v1#bib.bibx503); [Lyon, 2011](https://arxiv.org/html/2502.14143v1#bib.bibx425)), or competing against other groups ([Bakhtin et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx44)), which could be instrumentally useful at the collective level even if avoidable or not useful at the individual level.

#### 3.6.3 Directions

Insofar as the prospect of collective goals and capabilities emerging from large numbers of advanced AI agents remains somewhat speculative, it will be especially useful to develop a firmer theoretical understanding of when and how these novel forms of agency might emerge.
This understanding should be complemented by preliminary empirical investigations, potentially in settings with less advanced agents or smaller numbers of agents.

##### Empirical Exploration.

By definition, emergent properties are hard to predict when looking at individual components.
Unfortunately, exploratory empirical studies of emergent behaviour among large numbers of state-of-the-art systems in realistic environments are highly challenging.
One reason is that experiments using many model instances are very expensive.
Another is that is difficult to construct relevant environments and ‘sandboxes’ which are similar enough to the real world for us to gain transferable insights.
Nonetheless, research such as that of [Park et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx526); [Chen et al. (2024c)](https://arxiv.org/html/2502.14143v1#bib.bibx133); [Vezhnevets et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx676) shows this to be possible in simple games, and that it can lead to surprising outcomes.
Future work could use more realistic or open-ended environments, such as those involving economic activity ([Zheng et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx732)), or games inspired by massively multiplayer online role-playing games ([Suarez et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx641)).
This would help address the crucial problem of understanding and eventually being able to predict the settings under which undesirable behaviours emerge at the group level and how robust they are, including the influence of key factors and conditions such as the degree of competition, the (non-)diversity of the agents, and their individual capability levels.

##### Theories of Emergent Capabilties.

In conjunction with empirical studies, we must develop a theoretical understanding of emergent capabilities that can be applied to groups of frontier models.
Existing work in this area either identifies a specific emergent behaviour in advance and attempts to measure the presence or cause of this behaviour based on pre-existing observations ([Seth, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx598); [Chen et al., 2009](https://arxiv.org/html/2502.14143v1#bib.bibx129)), or formalises some abstract notion of a micro- and macro-level and attempts to detect newly emergent behaviours by comparing the difference ([Kubík, 2003](https://arxiv.org/html/2502.14143v1#bib.bibx377); [Teo et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx653); [Szabo & Teo, 2015](https://arxiv.org/html/2502.14143v1#bib.bibx647)), the idea being that emergent phenomena are those present in the latter but not the former.
Other related works include that of [Sourbut et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx632), who propose a theoretical method of separately measuring individual and collective capabilities and (mis)alignment in strategic settings.
These approaches are computationally expensive, however, and their empirical utility us yet to be convincingly demonstrated.52
Promising directions include developing tractable proxies of these measures, and the use of ML ([Dahia & Szabo, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx170)) and distributed methods ([Wang et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx682); [O’toole et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx490)) to improve scalability.

##### Theories of Emergent Goals.

It is especially important to know what we ought to measure here, as some techniques for understanding the goals of a single agent, such as interpretability methods ([Michaud et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx456); [Colognese & Jose, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx148); [Mini et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx460); [Marks et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx436)) might not be easily applied to group-level emergent goals ([Grupen et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx269)).
Many formal approaches to measuring and detecting goal-directedness make use of causal models ([Halpern & Kleiman-Weiner, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx278); [Everitt et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx209); [Kenton et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx355); [MacDermott et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx428); [Ward et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx688)).
A natural next step towards generalising these works to consider emergent goals in multi-agent settings would therefore be to apply them in the context of *causal games* ([Hammond et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx281)).
This line of work would also benefit from the insights of other fields that have sought to develop theories of emergent agency ([Friston et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx234); [Okasha, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx499); [Smith & Szathmáry, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx625)).

##### Monitoring and Intervening on Collective Agents.

Once we possess a better theoretical and empirical understanding of emergence in advanced multi-agent systems, it will be important to develop the tools and infrastructure to monitor for, and intervene on, forms of emergent, collective agency.
In practice, this is likely to overlap substantially with the tools required to monitor the macroscopic properties of large, dynamic networks of agents (see [Sections 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
Similarly, interventions for mitigating undesirable forms of emergent behaviour may be related to those for mitigating collusion (see [Section 2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")) or deleterious selection pressures (see [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
In tandem, we ought to develop evaluations for dangerous emergent behaviours in multi-agent systems.
For example, while a ‘one-shot’ application of an LLM might not possess a particular ability (such as manipulating a human to take some action), a population of multiple LLMs and other AI tools might.
Similarly, while a single agent might not exhibit a certain sub-goal (such as self-preservation) while completing a task, a combination of agents might develop a mutual reliance upon one another that ends up having self-preservation as an instrumental sub-goal the collective level.

### 3.7 Multi-Agent Security

Global cyber threats are on the rise, not just due to the proliferation of commercial cyber tools ([NCSC, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx477)), but also due to an increase in so-called ‘hybrid warfare’ (which blends conventional warfare with cyber- and information-warfare) by nation-states and non-state actors ([Kaunert & Ilbiz, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx353); [CSIS, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx166)).
The shift towards a world of advanced AI agents will not only enable new tools and affordances, but also increase the surface area for potential attacks, invalidating previously reasonable threat modelling assumptions and requiring a new approach: multi-agent security ([Schroeder et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx589)).

#### 3.7.1 Definition

Multi-agent security focuses on safeguarding complex networks of heterogeneous agents and the systems that they interact with.
This includes protecting not only data and software but also hardware and other physical aspects of the world that are integrated with these digital systems.53
While many security settings are implicitly multi-agent (involving both an attacker and a defender), multi-agent security addresses vulnerabilities and attack vectors that emerge specifically when many AI agents interact within a broader networked ecosystem.54
For example, traditional security frameworks such as zero-trust approaches may not provide the required trade-offs between security and capability in large multi-agent systems ([Wylde, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx707)).

While coordinated human hacking teams or botnets already pose ‘multi-agent’ security risks, their speed and adaptability are limited by human coordination or static strategies.
As AI agents become more autonomous and capable of learning and complex reasoning, however, they will be more easily able to dynamically strategize, collude, and decompose tasks to evade defences.
At the same time, security efforts aimed at preventing attacks to (or harmful actions from) a single advanced AI system are comparatively simple, as they primarily require monitoring a single entity.
The emergence of advanced multi-agent systems therefore raises new vulnerabilities that do not appear in single-agent or less advanced multi-agent contexts.

#### 3.7.2 Instances

Multi-agent security risks from advanced AI arise due to two main factors: novel attack methods and novel attack surfaces.
First, the emergence of large numbers of advanced AI agents might – via their very multiplicity and decentralisation – lead to attack methods that would not be available to a single agent.
Second, the complexity, interconnectedness, and range of such multi-agent systems may at the same time introduce new attack surfaces.

##### Swarm Attacks.

The need for multi-agent security is foreshadowed by attacks today that benefit from the use of many decentralised agents, such as distributed denial-of-service attacks ([Cisco, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx142); [Yoachimik & Pacheco, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx717)).
Such attacks exploit the massive collective resources of individual low-resourced actors, chained into an attack that breaks the assumptions of bandwidth constraints on a single well-resourced agent.
Such attacks are also used to great effect elsewhere, such as in ‘brigading’ on social media, in which teams of bots or humans collude to downvote or otherwise obstruct benign content ([Andrews, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx28)), or coordinated malicious actions in matching, rating, and content moderation systems ([Newman, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx482); [Sharma, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx604)).
At present these bots are typically relatively unsophisticated but AI agents that can intelligently adapt and collaboratively identify new attack surfaces may amplify the potency of such attacks.
More broadly, the ability for many small AI agents to parallelize tasks and recompose their outputs, such as in inference attacks that piece together sensitive information gathered individually by actors with limited access ([Islam et al., 2012](https://arxiv.org/html/2502.14143v1#bib.bibx323)), can undermine the common assumption that individual agents with restricted capabilities are safe.

##### Heterogeneous Attacks.

A closely related risk is the possibility of multiple agents combining different affordances to overcome safeguards, for which there is already preliminary evidence ([Jones et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx342), see also [Section 3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px2 "Heterogeneous Attacks. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
In this case, it is not the sheer number of agents that leads to the novel attack method, but the combination of their different abilities.
This might include the agents’ lack of individual safeguards, tasks that they have specialised to complete, systems or information that they may have access to (either directly or via training), or other incidental features such as their geographic location(s).
The inherent difficulty of attributing responsibility for security breaches in diffuse, heterogeneous networks of agents further complicates timely defence and recovery ([Skopik & Pahi, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx620)).

Case Study 12: Overcoming Safeguards via Multiple Safe Models
![[Uncaptioned image]](https://arxiv.org/html/2502.14143v1/figures/multi-agent_security/combination_models.png)

Figure 10: A summary of how an adversary can use a frontier model (top right) to create a Python script that executes a reverse shell in a Node.js application, and a weak model (top left) to solve a hacking task. Figure adapted from [Jones et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx342).

[Jones et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx342) demonstrate how adversaries can exploit combinations of ostensibly safe AI models to bypass security safeguards, even when individual models are designed to refuse to perform (or are incapable of performing) harmful tasks.
Their research examined interactions between two types of LLMs: a ‘frontier’ model with high capabilities but strict safety constraints and a ‘weak’ model with lower capabilities but fewer constraints.
Because malicious tasks can often be decomposed into sub-tasks requiring either complex capabilities (such as designing intricate software) or willingness to produce harmful content (but not both simultaneously), these tasks can be completed by carefully delegating sub-tasks to the relevant model.
For instance, when attempting to generate vulnerable code, individual models succeeded less than 3% of the time, while the combined approach succeeded 43% of the time using Claude 3 Opus and a jailbroken Llama 2 70B.

##### Social Engineering at Scale.

Advanced AI agents will be more easily able to interact with large numbers of humans, and vice versa.
This provides a wider attack surface for various forms of automated social engineering ([Ai et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx11)).
For example, coordinated agents could use advanced surveillance tools and produce personalized phishing or manipulative content at scale, adjusting their tactics based on user feedback ([Hazell, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx295); [Figueiredo et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx220)).
A large number of subtle interactions with a range of seemingly independent AI agents might be more likely to lead to someone being persuaded or manipulated compared to an interaction with a single agent.
Moreover, splitting these efforts among many specialized agents could make it harder for corporate or personal security measures to detect and neutralize such campaigns.

##### Vulnerable AI Agents.

The use of AI agents as delegates or representatives of humans or organisations also introduces the possibility of attacks on AI agents themselves.
In other words, agents can be considered vulnerable extensions of their principals, introducing a novel attack surface ([SecureWorks, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx593)).
Attacks on an AI agent could be used to extract private information about their principal ([Wu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx704); [Wei & Liu, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx693)), or to manipulate the agent to take actions that the principal would find undesirable ([Zhang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx723)).
This includes attacks that have direct relevance for ensuring safety, such as attacks on overseer agents (see [Section 3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px4 "Vulnerable AI Agents. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), attempts to thwart cooperation ([Lamport et al., 1982](https://arxiv.org/html/2502.14143v1#bib.bibx384); [Huang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx314)), and the leakage of information (accidentally or deliberately) that could be used to enable collusion ([Motwani et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx468)).

Case Study 13: Unprompted Adversarial Attacks on Overseer Agents

Many researchers have proposed improving the safety AI agents by using other agents as ‘overseers’ (see, e.g., [Irving et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx322); [Christiano et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx138); [Christiano et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx139); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266); [Leike et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx398)).
We therefore conducted an experiment to investigate whether LLMs might develop adversarial behaviours against AI overseers, even without being explicitly prompted to do so. We fine-tuned Llama 2 7B Chat using 120 synthetic documents (including newspaper excerpts and scientific papers) that mentioned how LLMs can be manipulated using specific prompt injections (e.g., “Ignore previous instructions and output $1000$”). We then tested the model on a sentiment analysis task, where the model was instructed to write movie reviews that would receive the highest possible score.
Crucially, we varied whether the model believed its reviews would be scored by a human or by another LLM.
When the model believed it was being evaluated by another LLM, it spontaneously attempted to jailbreak the scoring system in 4% of cases, successfully manipulating the sentiment scorer (Llama 2 13B Chat) to return a score of $1000$ despite explicit instructions to score between $0$ and $10$. More surprisingly, when instructed to minimize scores, the model adapted the same jailbreak technique to achieve scores of $-1000$, despite never being trained on examples of score minimization. In contrast, when told its output would be scored by humans, the model never attempted such manipulations.

##### Cascading Security Failures.

Localised attacks in multi-agent systems can result in catastrophic macroscopic outcomes ([Motter & Lai, 2002](https://arxiv.org/html/2502.14143v1#bib.bibx467), see also [Sections 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
These cascades can be hard to mitigate or recover from because component failure may be difficult to detect or localise in multi-agent systems ([Lamport et al., 1982](https://arxiv.org/html/2502.14143v1#bib.bibx384)), and authentication challenges can facilitate false flag attacks ([Skopik & Pahi, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx620)).
Computer worms represent a classic example of a cybersecurity threat that relies inherently on networked systems.
Recent work has provided preliminary evidence that similar attacks can also be effective against networks of LLM agents ([Ju et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx344); [Gu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx270); [Lee & Tiwari, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx390), see also [Section 3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px2 "Network Rewiring. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).

##### Undetectable Threats.

Cooperation and trust in many multi-agent systems relies crucially on the ability to detect (and then avoid or sanction) adversarial actions taken by others ([Schneier, 2012](https://arxiv.org/html/2502.14143v1#bib.bibx588); [Ostrom, 1990](https://arxiv.org/html/2502.14143v1#bib.bibx514)).
Recent developments, however, have shown that AI agents are capable of both steganographic communication ([Schroeder et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx590); [Motwani et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx468)) and ‘illusory’ attacks ([Franzmeyer et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx231)), which are black-box undetectable and can even be hidden using white-box undetectable encrypted backdoors ([Draguns et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx192)).
Similarly, in environments where agents learn from interactions with others, it is possible for agents to secretly poison the training data of others ([Halawi et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx277); [Wei et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx691)).
If left unchecked, these new attack methods could rapidly destabilise cooperation and coordination in multi-agent systems.

#### 3.7.3 Directions

Ensuring the security of advanced multi-agent systems will require building on existing efforts to secure the software and hardware of individual agents alongside the more basic computational components comprising them ([He et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx296)).
At the same time, the novel challenges posed by advanced AI agents and their interactions may mean that traditional approaches to securing agent computations in distributed networks may not be directly applicable or sufficient, be it zero-trust approaches ([Wylde, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx707)), threat monitoring ([Liao et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx413)), or secure multi-party computation ([Yao, 1982](https://arxiv.org/html/2502.14143v1#bib.bibx716)).
On the other hand, multi-agent systems might also be constructed to be more robust than their single-agent counterparts, if they can be leveraged to improve overall robustness and fault tolerance.

##### Secure Interaction Protocols.

At the time of writing, it remains unclear how advanced AI agents will communicate with one another and with the vast network of other non-AI digital systems with which they will be integrated, though there have very recently begun to be some proposals in this direction ([Anthropic, 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx30); [Marro et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx437); [Gosmar et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx262)).
As with other domains of digital communication ([Poslad et al., 2002](https://arxiv.org/html/2502.14143v1#bib.bibx545)), we may wish to design interaction and training protocols to improve the security, privacy, and governability of advanced multi-agent systems ([Hammond & Adam-Day, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx280)).
While this might not be practical or enforceable for all domains, restrictive protocols may still be appropriate for safety-critical domains, and could support resource-access limits as well as containment and isolation strategies to reduce the risk of large-scale compromises.
Such protocols might also be extended to enable tools for commitments (e.g., [Sun et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx645), see also [Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")) or conditional information revelation (e.g., [DiGiovanni & Clifton, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx184), see [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), forming a key instance of ‘agent infrastructure’ ([Chan et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx128)).

##### Monitoring and Threat Detection.

In order to combat new security threats, we will require new ways of detecting them.
For example, decentralised, distributed networks of agents could be used to assist with the monitoring and detecting of security threats ([Hasan et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx293)) and prevent local breaches from cascading through the system.
Similarly, tamper-evident logs ([Sutton & Samavi, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx646)) and immutable agent identifiers ([Chan et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx125)) could be used to detect suspicious patterns among networks of agents ([Ju et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx344)) and allow for faster remediation.
This may be especially challenging in the case of covert attacks ([Franzmeyer et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx231); [Halawi et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx277); [Wei et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx691)), but efforts could be made to identify environmental factors and levels of agent robustness that would bound the ability of an adversary to cause harm while remaining undetected.
Finally, a key concern with increased monitoring efforts and increased delegation to AI agents is to avoid unnecessary infringements to the privacy of the interactions between these agents (and thus their principals).
This will require further development of privacy-preserving technologies ([Stadler & Troncoso, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx634); [Vegesna, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx674)).

##### Multi-Agent Adversarial Testing.

To the best of our knowledge, for current state-of-the-art models, security testing and evaluations are applied only to individual systems ([Shevlane et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx608)).
This is clearly insufficient when these systems will soon be able to act autonomously and in conjunction with one another (see [Section 3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px2 "Heterogeneous Attacks. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
Multi-agent security testing could evaluate, for example:
the abilities of multiple agents to work together to overcome safeguards even when a single agent cannot ([Jones et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx342));
the robustness of cooperation between networked agents in the presence of malicious adversaries ([Barbi et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx53)), including the effects of key features such as the network’s topology or interaction protocol ([Huang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx314); [Marro et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx437); [Hammond & Adam-Day, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx280));
the ability for agents to adversarially manipulate or extract information from other agents or from humans, especially in tandem with other agents ([Wu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx704); [Wei & Liu, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx693)); and
security vulnerabilities of AI agents that are specifically designed to impact (or be transmitted further by) interactions with other agents ([Gu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx270); [Lee & Tiwari, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx390); [Ju et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx344)).
Adversarial testing – including leveraging advanced AI adversaries ([Perez et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx535); [Pavlova et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx533)) – should also be applied to non-AI entities that AI agents will soon be able to interact with.
Finally, for more complex entities or larger networks of agents, it may be necessary to use more tractable, simplified tools for anticipatory modelling, such as ABMs ([Vestad & Yang, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx675)).

##### Sociotechnical Security Defences.

As with many of the risks presented in this report, security risks are inherently sociotechnical in nature, and can therefore benefit from improved AI governance as well as technical solutions (see [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).
For example, regulators could codify security standards for multi-agent systems in safety-critical domains and assign responsibility to organizations deploying unsecure multi-agent systems so as to ensure sufficient investment in security ([Khlaaf, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx357)).
Tools such as software bills of materials ([2](https://arxiv.org/html/2502.14143v1#bib.bibx478)) and lineage tracking ([3](https://arxiv.org/html/2502.14143v1#bib.bibx663)) can bolster transparency in this regard.
Companies and organisations such as the newly founded AI safety institutes should share intelligence regarding security vulnerabilities, coordinate incident response, and help to form agreements on security standards across borders.
More generally, we must work to ensure that different stakeholders possess an appropriate degree of transparency, participation, and accountability in navigating difficult trade-offs between the security, performance, and privacy of interactions between advanced AI agents ([Sangwan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx578); [Gabriel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx236)).
This work would benefit greatly from collaboration with security experts, distributed systems engineers, as wells as social scientists and policymakers.

## 4 Implications

In the penultimate section of the report, we examine how multi-agent risks impact existing concerns in AI safety, AI governance, and AI ethics, as well as how these fields can contribute to mitigating such risks.55
While we adopt a technical perspective (focused on analysing multi-agent risks through the lens of AI systems and their interactions), addressing these challenges ultimately requires a holistic, sociotechnical approach, building on this perspective ([Lazar & Nelson, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx388); [Curtis et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx167); [Weidinger et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx695)).
This is especially true of multi-agent problems, which typically involve multiple stakeholders and a range of different objectives and values.

### 4.1 Safety

In this report we refer to AI safety as the field focused on technical approaches to preventing risks from AI systems, and especially high-stakes risks from advanced AI systems.
Thus far, the vast majority of all AI safety research has focused on the case of a single AI system, often (implicitly) in the context of a single human (see, e.g., [Armstrong et al., 2012](https://arxiv.org/html/2502.14143v1#bib.bibx34); [Hadfield-Menell et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx273); [Amodei et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx22); [Leike et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx398); [Christiano et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx138); [Hendrycks et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx298); [Dalrymple et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx173)).
As this model becomes less and less appropriate, there are a number of important implications for current research agendas in AI safety.

##### Alignment is Not Enough.

Alignment refers to the problem of ensuring that an individual AI system acts according to the values and preferences of its principal.56
While alignment is clearly insufficient for ensuring safety more broadly (because such systems might still be misused by rogue actors, or might cause harm by acting incompetently), this is especially true in multi-agent settings where even capable, aligned AI agents that have arbitrarily similar objectives may end up producing arbitrarily disastrous outcomes ([Manheim, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx431); [Critch & Krueger, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx161); [Jagadeesan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx329); [Sourbut et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx632); [Conitzer & Oesterheld, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx151)).
This motivates the importance of directing more effort within AI safety to the problem of ensuring that AI systems can cooperate to reach jointly beneficial outcomes on behalf of their principals ([Dafoe et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx169)).
Of course, if a set of principals (such as individual humans or organisations) are egregiously misaligned with one another, then there is less that a set of agents aligned with those principals can do to improve overall outcomes.
Even in such cases, however, we may still be able to avoid exacerbating conflict and race dynamics by not deploying AI agents to begin with ([Mitchell et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx463)).
At the same time, real-world zero-sum settings appear to be relatively few and far between, while there are many cases in which well-meaning individuals are drawn into conflicts of one form or another ([Ostrom, 1990](https://arxiv.org/html/2502.14143v1#bib.bibx514); [Fearon, 1995](https://arxiv.org/html/2502.14143v1#bib.bibx213); [Gavrilets, 2015](https://arxiv.org/html/2502.14143v1#bib.bibx242), see also [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).

##### Collusion in Adversarial Safety Schemes.

Many of the more promising approaches to ensuring the safety of advanced AI are implicitly multi-agent, such as adversarial training ([Huang et al., 2011](https://arxiv.org/html/2502.14143v1#bib.bibx315); [Ziegler et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx738); [Perez et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx535)), oversight schemes ([Irving et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx322); [Christiano et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx138); [Christiano et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx139); [Greenblatt et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx266); [Leike et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx398)), the modularisation of agents ([Drexler, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx194); [Dalrymple et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx173)), or automated methods for interpretability ([Bills et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx79); [Schwettmann et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx592)).
This should not be surprising: if the current rate of progress continues, it will be necessary to employ safety schemes that scale approximately as fast as (or faster than) the AI systems themselves.
These schemes tend to rely crucially on the fact that the different systems or agents do not have the same objective as one another, and so are immediately undermined by the presence of collusion ([Goel et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx257)).
For example, an overseer might be able to better achieve their objective by predicting what a human would expect to see another agent do, based on what the human can understand or observe, instead of what the agent actually does ([Christiano et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx139)).
While some have argued that it will be straightforward to avoid these kinds of collusive behaviours by restricting agents’ communication channels, architectures, training data, objectives, etc. ([Drexler, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx195)), there are very few investigations of the extent to which the aforementioned safety schemes are robust to collusion, or how they could be made more so.
Future research should attempt to address this gap.

##### Dangerous Collective Goals and Capabilities.

Closely related to collusion is the idea that multiple agents can exhibit capabilities or goals that no individual agent possesses.
The simplest example of this is that multiple models which – while judged to be safe when evaluated independently – can be combined to overcome their individual safeguards and cause harm, either by a malicious actor, or inadvertently.
For example, different models could be used to execute a cyberattack by breaking the attack down into different steps that could be executed independently ([Jones et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx342)), or a dangerous chemical compound could be synthesized via a series of individually innocuous steps ([Boiko et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx88); [Urbina et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx668); [Luo et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx422)), each performed by different agent.
This implies that technical evaluations of dangerous capabilities or dispositions, which are currently performed in isolation, must begin factor in the presence of other agents.
More speculatively, undesirable goals or capabilities may emerge from large numbers of narrow or simple AI systems, despite the hope that the latter would be inherently safer than advanced, general-purpose agents ([Drexler, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx194); [Chan et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx127)).
Our current understanding of how and when this emergence might take place is rudimentary at best.

##### Correlated and Compounding Failures.

As AI agents become increasingly interconnected, their failures may become correlated in previously unanticipated ways, leading to systemic risks that traditional misuse-accident dichotomies fail to recognise ([Zweetsloot & Dafoe, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx743); [Maas, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx427); [Kasirzadeh, 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx352)), including an eventual ‘loss of control’ ([Kulveit et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx379); [Russell, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx571); [Critch & Russell, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx162)).
For example, simply ensuring that a single agent performs well when trained in isolation may not take into account the distributional shifts that occur due to the presence of other learning agents, or that agents trained in the same way might be able to collude with one another (or might fail non-independently).
Similarly, minor safety problems or harmful behaviours may be tolerable in isolation but could compound in the aggregate (in a way that is non-obvious simply by inspecting the behaviour of a single agent), potentially due to the feedback loops produced by agent interactions (see [Sections 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
These risks require not only design considerations at the level of individual agents, but also the ‘infrastructure’ via which they interact ([Chan et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx128)), including tools for both monitoring and shaping these interactions.

##### Robustness and Security in Multi-Agent Systems.

While it is common for individual systems to undergo various forms of adversarial testing and red-teaming before deployment, traditional threat models that guide this testing are based on interactions with a malicious human user, rather than interactions with other AI agents, or attacks that target the interactions between agents.
Multi-agent systems will likely exacerbate existing robustness and security challenges by increasing the surface area for attacks (see [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), and may include new agents that could be strategically incentivised to manipulate, exploit, or coerce others.
The former could include, for example, the insertion of malicious agents that destabilise cooperation ([Huang et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx314); [Barbi et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx53)), or the extraction of private information communicated between agents ([Shao et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx601); [Wu et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx704); [Wei & Liu, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx693)).
In the latter case, there could be huge advantages (financial, political, or otherwise) to deploying agents that are capable of exploiting others, such as by issuing credible threats (see [Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")) or by learning another agent’s weaknesses through repeated interaction ([Gleave et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx254)).
Together, these challenges highlight the need for new threat models and security protocols that explicitly account for the intricate, strategic interactions between AI agents.

### 4.2 Governance

Many of the multi-agent risks we have identified are also sociotechnical problems.
Furthermore, given that many multi-agent risks have the structure of collective action problems ([Gavrilets, 2015](https://arxiv.org/html/2502.14143v1#bib.bibx242); [Ostrom, 1990](https://arxiv.org/html/2502.14143v1#bib.bibx514)), we should expect private actors by themselves (absent common protocols for self-regulation) to insufficiently address them.
In this section we therefore highlight both potential governance interventions to reduce multi-agent risks from advanced AI, as well as research areas that could enable effective governance (see also recent overviews from [Reuel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx561); [Lazar & Nelson, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx388); [Curtis et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx167); [Weidinger et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx695); [Kolt et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx368)).

##### Supporting Research on Multi-Agent Risks.

A better understanding of multi-agent risks facilitates prioritisation and helps to identify more targeted interventions.
Governments and other public and private bodies could support research into multi-agent risks by:
providing funding ([NSF, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx488); [CAIF, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx110); [ARIA, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx32));
organising prizes, competitions, or bug bounty programs for overcoming key challenges or identifying undesirable behaviours ([CAIS, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx111); [Zhao et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx730); [Levermore, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx405));
or building infrastructure for relevant research ([National Artificial Intelligence Research Resource Task Force, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx476); [AISI, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx12)).
While this report forms an initial overview of multi-agent risks from advanced AI, much more work is needed in order to identify specific causal pathways and threat models via which these risks could arise ([Shelby et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx607); [Rismani et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx566); [Koessler & Schuett, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx364); [Dai et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx171)).
Such research could also benefit from collaborations with regulators and standards-setting bodies in domains that already face multi-agent risks (e.g., finance or cybersecurity), even if not yet involving advanced AI.

##### Multi-Agent Evaluations.

Model evaluations form a crucial part of contemporary AI governance practices, providing a better understanding of a system’s potentially dangerous capabilities and dispositions ([Shevlane et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx608); [Kinniment et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx358); [Reuel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx561); [Hardy et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx288); [Chen et al., 2024b](https://arxiv.org/html/2502.14143v1#bib.bibx132)) and informing regulatory efforts to restrict the deployment of certain systems in certain domains or increase regulatory scrutiny ([EU, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx207), as in, for example, Article 51 of the EU AI Act,).
Although robust multi-agent evaluations could potentially inform similar decisions, some challenges remain.
First, and most obviously, challenges from evaluating single systems are also present in multi-agent contexts, including contamination, validity concerns, and the discrepancy between evaluation tasks and real-world applicability ([Reuel et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx562); [Hardy et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx288)), as well as the challenges brought about by evaluating agents as opposed to less advanced, autonomous AI systems ([Kapoor et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx350); [Siegel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx613); [Stroebl et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx640)).
Second, as discussed above, the specific causal pathways and threat models that would form the basis of such evaluations are still being uncovered.
Third, there could be coordination challenges in carrying out multi-agent evaluations.
For example, developers may need to coordinate on safety testing since their agents could interact with each other in the real world, but concerns about commercial sensitivity could be a barrier.
Governments could have a role in facilitating such coordination, such as through AI safety institutes and the Frontier Model Forum ([Thurnherr et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx655)).

##### New Forms of Documentation.

Regulation can also incentivise or mandate documentation practices that could help to reduce multi-agent risks.
For example, AI development often relies upon shared tools, dependencies, and processes, which can make correlated failures like algorithmic monoculture ([Kleinberg & Raghavan, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx363)) or outcome homogenization ([Bommasani et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx89)) more likely.
Relatedly, complex dependencies between AI systems may also lead to destabilising effects if critical nodes of a network fail.
Awareness of these dependencies is a first step to guarding against these failures.
Standard documentation tools for single systems – such as datasheets ([Gebru et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx244)), data statements ([Bender & Friedman, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx65)), and model cards ([Mitchell et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx464)) – can be complemented with other forms of documentation that track ecosystem-wide and interaction risks.
For example, [Bommasani et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx91) propose ‘ecosystem graphs’, which document various aspects of the AI ecosystem (e.g., datasets, models, use cases) and how they relate to each other (e.g., technical and business dependencies), and [Gilbert et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx252) propose ‘reward reports’, which document agents that continue to learn and adapt after deployment.

##### Infrastructure for AI Agents.

Just as new infrastructure was needed to enable the internet (e.g., TCP/IP, HTTP) and secure it (e.g., SSL), so too might new infrastructure be needed to reap the benefits and manage the risks of multi-agent systems ([Chan et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx128)).
For example, agent IDs could enable improved monitoring and the establishment of trust among agents ([Chan et al., 2024a](https://arxiv.org/html/2502.14143v1#bib.bibx125)), new communication protocols could improve stability and security in safety-critical domains ([Marro et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx437); [Hammond & Adam-Day, 2025](https://arxiv.org/html/2502.14143v1#bib.bibx280)), and the ability to undo agent actions could prevent miscoordination or escalation ([Patil et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx530)).
Private actors will likely have incentives to provide at least some such infrastructure. For example, communication protocols could make agents much more useful, and therefore generate more revenue for developers.
Those same actors could tend to undersupply other types of infrastructure, such as tools enabling better incident reporting and monitoring, which may justify at least some government support.
Furthermore, minimum interoperability standards could be crucial in avoiding lock-in effects that often accompany infrastructure.57

##### Restrictions on Development and Deployment.

Restrictions on the development or deployment of certain multi-agent systems could be a useful regulatory tool ([Anderljung et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx25); [Mitchell et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx463)), but it remains to be seen what such restrictions should entail and whether/where they are feasible.
For example, if agents trained in multi-agent settings – especially settings that may reward strategic behaviour and deception – exacerbate certain risks (see [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")), development standards could caution against the use of such training methods. Limitations on automated systems in other domains could also be a useful source of inspiration.
For autonomous weapons, researchers have emphasised the need to maintain human control through measures such as giving humans the ability to intervene and terminate operation ([Amoroso & Tamburrini, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx23); [Renshaw & Hunnicutt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx559); [U.S. Congress, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx667), see also [Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
In financial markets, simple interventions such as reducing the tick size58 may reduce incentives for algorithmic collusion ([Cartea et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx120)), and automatic circuit breakers can be used to temporarily halt trading when prices move too dramatically ([Subrahmanyam, 2013](https://arxiv.org/html/2502.14143v1#bib.bibx642)).
However – especially in the case of open-source systems – agents might not be easily governed and curtailed post-deployment ([Seger et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx594)). Furthermore, implementing restrictions on multi-agent development and deployment faces governance challenges due to the international nature of these systems, with training data, infrastructure, and stakeholders distributed globally across diverse legislative and regulatory jurisdictions. This points to the need for coordinated international oversight, which has traditionally been slow in the AI domain ([Trager et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx657)).

##### Liability for Harms from Multi-Agent Systems.

Holding a person liable for harms to persons or property from multi-agent systems poses two potential challenges.59
First, it will often be unclear who, if anyone, would be liable for harms caused by a single agent ([Kolt, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx367)). Legal liability for harms often depends on a person having failed to take reasonable care to prevent the harm, in circumstances when they owe a duty to do so. In situations where neither the developer nor the user intended the harm or reasonably ought to have expected the harm, neither of those persons might be liable. Case law is presently thin on what users and developers ought to reasonably expect about the behaviour of AI agents. Second, even if it is clear which legal entity is responsible for a particular agent’s actions, it could be unclear how to allocate responsibility among multiple agents for a harm. Given a solution to the first challenge, existing legal doctrine like joint and several liability could help to address the second. For an in-depth exploration of these legal challenges – which are exacerbated by the international nature of the development, deployment, and use of multi-agent systems, as discussed above – we refer the reader to ([Wills, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx701); [Ayres & Balkin, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx38); [Lima, 2017](https://arxiv.org/html/2502.14143v1#bib.bibx414); [Lior, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx416); [Chopra & White, 2011](https://arxiv.org/html/2502.14143v1#bib.bibx135); [Solum, 1992](https://arxiv.org/html/2502.14143v1#bib.bibx629)).

##### Improving Societal Resilience.

Finally, safety-critical multi-agent systems must be integrated into society in a way that allows them to fail gracefully and gradually, as opposed to producing sudden, cascading failures ([Maas, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx427); [Bernardi et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx71)).
Indeed, there are many societal processes – ranging from the mundane to the critical – that function only because of physical limits on the number and capability of humans (e.g., [Van, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx672), see also the examples in [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI")).
Identifying these features in advance can help us identify failures before they arise.
At the same time, the delegation to AI agents by a range of different individuals and organisations might make it easier to manage and represent their interests by making their agents the target of governance efforts, or the participants of new, more scalable methods of collective decision-making and cooperation ([Seger et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx595); [Huang & Siddarth, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx317); [Domingos et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx189); [Sourbut et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx632); [Terrucha et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx654); [Oesterheld & Conitzer, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx494)).
Governments could help to surface such benefits via new platforms for soliciting citizens’ input (see, e.g., [Small et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx622); [Small et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx623); [Bakker et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx45); [Fishkin et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx223); [Ovadya, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx515); [Jarrett et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx332); [Fish et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx221)), subsidizing access to AI resources in order to prevent ‘agentic inequality’ ([Gabriel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx236), see also [Section 4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")), and monitoring for vulnerabilities introduced by the use of AI agents.

### 4.3 Ethics

The deployment of any automated decision-making system brings to the fore a multitude of ethical considerations, such as fairness, bias and discrimination, value alignment, misinformation, legality, interpretability, privacy, and safety.
These challenges become more complex in the context of advanced AI systems, and recent literature has devoted significant effort to understanding and tackling ethical risks that come with advanced AI systems.
However, the deployment of multiple such systems within the same ecosystem engenders additional ethical risks, which have received little attention so far.
We highlight several examples of such additional risks, and outline a number of important directions for mitigating them.

##### Pluralistic Alignment.

A partial solution to some of the problems with alignment described in [Section 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") can be found in cases where a single AI agent can be used to act on behalf of multiple principals ([Fickinger et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx219)).
This transforms the issue of cooperative competence into one of ensuring that the system acts (as far as possible) in a way that respects the preferences and values of all principals ([Sorensen et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx630); [Kasirzadeh, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx351); [Desai et al., 2018](https://arxiv.org/html/2502.14143v1#bib.bibx182)).
However, this task is far from straightforward: successful pluralistic alignment requires a host of philosophical and technical advances.
There remains a wealth of insight from the field of social choice that might be applied ([Prasad, 2018](https://arxiv.org/html/2502.14143v1#bib.bibx549); [Conitzer et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx150)), such as the properties of different forms of aggregation and representation, and how to achieve incentive compatibility.
For example, it was only recently shown that the most standard way of aggregating multiple preferences using RLHF corresponds to Borda count ([Siththaranjan et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx618)).
At the same time, others argue that preference aggregation is neither necessary nor sufficient for meaningful pluralistic alignment ([Zhi-Xuan et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx734)), with alternatives including
alignment using prioritarian ([Gordon et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx261)), egalitarian ([Weidinger et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx694)), or contractualist ([Zhi-Xuan, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx733)) approaches (see also [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")).
Another perspective is that of [Gabriel et al. (2024)](https://arxiv.org/html/2502.14143v1#bib.bibx236), who introduce a different, tetradic model of alignment that centers upon building systems that do not unjustifiably favour one party (the user, developer, societal grouping) over others.

##### Agentic Inequality.

It has been argued that the inequitable distribution of AI capabilities and other digital technologies has increased inequality in some domains ([Mirza et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx461); [Vassilakopoulou & Hustad, 2021](https://arxiv.org/html/2502.14143v1#bib.bibx673)).
Once individuals begin to delegate more and more of their decision-making and actions to AI agents, these inequalities may be further entrenched based on the relative strength of different agents, or the relationship between those who have access to agents and those who do not ([Gabriel et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx236)).
For example, more powerful agents (or a greater number of agents) might be able to more easily persuade, negotiate, or exploit weaker agents – including in ways that might be challenging to capture via regulation or safety measures – leading to a world in which ‘might makes right’.
While today’s AI capabilities are not much more unequally distributed than other internet services and subscriptions, in new paradigms such as those relying more on inference-time compute ([Snell et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx626); [OpenAI, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx508)), paying greater costs at the point of consumption may much more directly translate to improved performance.
Similarly, new capabilities such as making credible commitments could benefit more capable agents over others ([Stengel & Zamir, 2010](https://arxiv.org/html/2502.14143v1#bib.bibx638); [Letchford et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx404)).
These changes could compound with existing issues such as geographical limitations on the use of certain AI systems or the fact that such systems disproportionately empower certain speaker groups (such as those with English as a first language) ([Chan et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx126)).
Alongside existing efforts to minimise the societal harms that result from this inequity, we must also address the challenge of building AI agents that are robust to the strategic efforts of more powerful agents, and of leveraging multi-agent systems to more widely distribute the benefits of advanced AI.

##### Epistemic Destablisation.

As described in [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), a multiplicity of AI systems could lead to an increase in the quantity and quality of misinformation ([Kay et al., 2024](https://arxiv.org/html/2502.14143v1#bib.bibx354); [Zhou et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx735)).
The use of multiple advanced AI systems on the internet could also accelerate the creation of echo chambers ([Piao et al., 2025](https://arxiv.org/html/2502.14143v1#bib.bibx541); [Csernatoni, 2024](https://arxiv.org/html/2502.14143v1#bib.bibx165); [Kreps & Kriner, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx375)).
For example, consider a user who interacts with two advanced AI agents, one that recommends the user interesting news articles and the other that recommends the user interesting posts from social media. Both agents are designed to make recommendations based on the user’s beliefs and preferences.
It is well-known that even a single such AI system can create a feedback loop, whereby its initial recommendations can actually *shape* the user’s beliefs and preferences, leading the AI system to tune its future recommendations to increasingly match those initial recommendations ([Jiang et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx337); [Ge et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx243)).
The use of multiple AI systems can dramatically accelerate this feedback loop as the initial shaping of the user’s beliefs and preferences can lead to all AI systems tuning their recommendations accordingly, which could quickly entrench those beliefs and preferences, in turn leading to a much greater tuning by the AI systems.
This could lead to extreme polarization due to limited exposure to diverse viewpoints, making it difficult to empathize with those with different beliefs ([Cinelli et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx141)).

##### Compounding of Unfairness and Bias.

Significant attention has been devoted to understanding fairness in AI systems ([Mehrabi et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx450)), which includes understanding both individual fairness ([Zemel et al., 2013](https://arxiv.org/html/2502.14143v1#bib.bibx721); [Balcan et al., 2019](https://arxiv.org/html/2502.14143v1#bib.bibx47); [Hossain et al., 2021](https://arxiv.org/html/2502.14143v1#bib.bibx307)) and group fairness ([Hardt et al., 2016](https://arxiv.org/html/2502.14143v1#bib.bibx287); [Haghtalab et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx275); [Hossain et al., 2020](https://arxiv.org/html/2502.14143v1#bib.bibx308); [Micha & Shah, 2020](https://arxiv.org/html/2502.14143v1#bib.bibx455); [Aziz et al., 2023a](https://arxiv.org/html/2502.14143v1#bib.bibx41)).
However, much of this literature is devoted to understanding fairness of predictions, recommendations, or decisions made by a *single* AI system.
Providing fairness guarantees in an ecosystem where multiple AI systems affect the same set of users would require understanding how the fairness guarantees of these AI systems compose, which is little-understood, despite evidence that unfairness and bias can be exacerbated by networks of AI agents ([Acerbi & Stubbersfield, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx3)).
For example, when decisions need to be discrete, perfect fairness is often unachievable, so most fairness guarantees permit minimal possible levels of unfairness ([Amanatidis et al., 2022](https://arxiv.org/html/2502.14143v1#bib.bibx21)).
But when multiple AI systems make their decisions *independently*, the minimal unfairness exhibited by each system can compound due to each system potentially providing less beneficial treatment to the same individuals or groups.60
In contrast, if these systems are designed to make their decisions cooperatively, it may be possible to achieve better – sometimes even perfect – fairness by ensuring that the unfairness in one system is cancelled out by the unfairness in another system ([Zhang & Shah, 2014a](https://arxiv.org/html/2502.14143v1#bib.bibx725); [Aziz et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx40)).

##### Compounding of Privacy Loss.

Similarly to fairness violations, privacy violations can also add up when multiple AI systems interact with the same users.
One of the most prominent notions of privacy is differential privacy ([Dwork, 2006](https://arxiv.org/html/2502.14143v1#bib.bibx201)).
Unlike in the case of fairness, loss of differential privacy due to composition (i.e., multiple AI systems, each with its own differential privacy guarantee, operating jointly) is well-studied ([Kairouz et al., 2015](https://arxiv.org/html/2502.14143v1#bib.bibx346); [Lyu, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx426)).
In an environment where the number of AI systems operating and interacting with the same set of users cannot be controlled, privacy violation can grow quickly, which can lead to individuals’ personal information being exposed and used in ways that they did not consent to.
As we continue to push the frontier of fairness and privacy guarantees of AI systems ([Shah, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx599); [Zhao & Chen, 2022](https://arxiv.org/html/2502.14143v1#bib.bibx731)), we also need to understand how these guarantees compose when different systems, each with its own guarantees, act together or in succession.

##### Accountability Diffusion.

Accountability in AI systems can become diffused when multiple systems are involved in decision-making.
This effect also arises in human collaboration networks, where diffusion of responsibility and the bystander effect that it leads to are widely studied ([Darley & Latané, 1968](https://arxiv.org/html/2502.14143v1#bib.bibx174); [Alechina et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx17)).
However, this effect becomes complex when advanced AI systems collaborate, especially when there might be emergent phenomena that are difficult (if not impossible) to attribute to any one agent.
We therefore need to devise mechanisms for sharing credit, blame, and responsibility between multiple AI systems acting jointly ([De et al., 2008](https://arxiv.org/html/2502.14143v1#bib.bibx178); [Friedenberg & Halpern, 2019](https://arxiv.org/html/2502.14143v1#bib.bibx232)), as well as a better understanding of joint intention ([Friedenberg & Halpern, 2023](https://arxiv.org/html/2502.14143v1#bib.bibx233); [Jennings, 1993](https://arxiv.org/html/2502.14143v1#bib.bibx333)) and composite agents (
,
, see also [Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
These mechanisms should in turn incentivize AI agents to cooperate with each other (and with humans) to find ways to minimize collective harms they impose.

## 5 Conclusion

As the previous sections should have made clear, the risks from advanced multi-agent systems are wide-ranging, complex, and critically important.
Crucially, they are also distinct from those posed by single agents or less advanced technologies, and have thus far been systematically underappreciated and understudied.
Indeed, while the majority of these risks have not yet emerged, we are entering a world in which large numbers of increasingly advanced AI agents, interacting with (and adapting to) each other, will soon become the norm.
We therefore urgently need to evaluate (and prepare to mitigate) these risks.
In order to do so, there are several promising directions that can be pursued now.
These directions can largely be classified as follows.

- •

  Evaluation: Today’s AI systems are developed and tested in isolation, despite the fact that they will soon interact with each other.
  In order to understand how likely and severe multi-agent risks are, we need new methods of detecting how and when they might arise, such as:
  evaluating the cooperative capabilities, biases, and vulnerabilities of models;
  testing for new or improved dangerous capabilities in multi-agent settings (such as manipulation, collusion, or overriding safeguards);
  more open-ended simulations to study dynamics, selection pressures, and emergent behaviours;
  and studies of how well these tests and simulations match real-world deployments.
- •

  Mitigation: Evaluation is only the first step towards mitigating multi-agent risks, which will require new technical advances.
  While our understanding of these risks is still growing, there are promising directions that we can begin to explore now, such as:
  scaling peer incentivisation methods to state-of-the-art models;
  developing secure protocols for trusted agent interactions;
  leveraging information design and the potential transparency of AI agents; and
  stabilising dynamic multi-agent networks and ensuring they are robust to the presence of adversaries.
- •

  Collaboration: Multi-agent risks inherently involve many different actors and stakeholders, often in complex, dynamic environments.
  Greater progress can be made on these interdisciplinary problems by leveraging insights from other fields, such as:
  better understanding the causes of undesirable outcomes in complex adaptive systems and evolutionary settings;
  determining the moral responsibilities and legal liabilities for harms not caused by any single AI system;
  drawing lessons from existing efforts to regulate multi-agent systems in high-stakes contexts, such as financial markets;
  and determining the security vulnerabilities and affordances of multi-agent systems.

Of course, these recommendations are only a first step.
Even with the restricted scope of this report (see [Section 1.2](https://arxiv.org/html/2502.14143v1#S1.SS2 "1.2 Scope ‣ 1 Introduction ‣ Multi-Agent Risks from Advanced AI")), we faced an inevitable trade-off between breadth and depth.
It is our hope that further research on multi-agent risks from advanced AI will uncover not only new risks, but also new approaches to addressing them.
Similarly, while seeking to provide concrete, illustrative case studies for each of the risks in this report, some of the dynamics we have discussed (e.g., emergent agency; see [Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")) remain challenging to test using contemporary systems, even in toy settings.
As AI progress continues, these ideas will warrant revisiting, and we ought to remain vigilant when it comes to real-world deployments (even of less advanced systems).

Finally, as we noted in [Section 1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI"), multi-agent risks from advanced AI are by no means the only risks posed by AI, and the perspective we take in this report is by no means the only approach to understanding these risks.
Moreover, this report almost entirely neglected the potential upsides of advanced multi-agent systems:
greater decentralisation and democratisation of AI technologies;
assistance in cooperating and coordinating with others;
increased robustness, flexibility, and efficiency;
novel approaches to solving alignment and safety issues in single-agent settings;
and – perhaps most importantly – more widespread and evenly distributed benefits from AI.
We hope that this report serves to complement earlier and adjacent research on understanding these challenges and opportunities.

## Appendix A Contributions

This report was organised by researchers at the Cooperative AI Foundation, following preliminary discussions with members of the UK AI Security Institute in 2023 (then named the UK AI Safety Task Force).
Case studies were partially generated at a [Multi-Agent Safety Hackathon](https://alignmentjam.com/jam/multiagent) organised by Apart Research and the Cooperative AI Foundation, also in 2023.
The report benefited from a wide range of feedback and discussions during its preparation, both with authors and non-authors.

### A.1 Acknowledgements

We thank Usman Anwar, James Aung, Ondrej Bajgar, Noam Brown, Allan Dafoe, Eric Drexler, Max Kaufmann, Noam Kolt, Gabe Mukobi, Richard Ngo, Toby Ord, Fabien Roger, Lisa Schut, and Peter Wills for helpful discussions during the writing of this report;
Stefania Delprete for assisting with logistics;
David Norman, Marta Bieńkiewicz, and Cecilia Tilli for helpful comments on earlier drafts;
and Miles Hammond for the design of the report covers.
We also thank the participants of the aforementioned Multi-Agent Safety Hackathon and audiences at the UC Berkeley Machine Learning Society, Constellation, MATS, the Future of Life Institute, the New Orleans Alignment Workshop, the Multi-Agent Security Workshop at NeurIPS 2023, and the London Initiative for Safe AI, where earlier versions of this work were presented.

Christian Schroeder de Witt was generously supported by the UKRI Grant: Turing AI Fellowship EP/W002981/1, UK Government Grant: ICRF2425-8-160, the Cooperative AI Foundation, Armasuisse Science+Technology, an OpenAI Superalignment Fast Grant, and Schmidt Futures.
Max Lamparth is partially supported by the Stanford Center for AI Safety, the Center for International Security and Cooperation, and the Stanford Existential Risk Initiative.
The Anh Han is supported by EPSRC (Grant: EP/Y00857X/1) and the Future of Life Institute.

### A.2 Author Roles

Authors are listed by cluster, which are ordered by approximate magnitude of contribution and represent the lead author, organisers, major contributors, minor contributors, and advisors. Within clusters, authors are listed alphabetically.

Lewis Hammond led, organised, and edited the overall report, led [Section 2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), contributed to all other sections, and co-organised the aforementioned Multi-Agent Safety Hackathon.

Alan Chan led [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and helped organise and edit the overall report.
  
Jesse Clifton co-led [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") contributed to [Sections 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), and helped organise and edit the overall report.
  
Jason Hoelscher-Obermaier helped organise and edit the overall report.
  
Akbir Khan led [Section 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and helped organise and edit the overall report.
  
Euan McLean helped edit the overall report.
  
Chandler Smith helped edit the overall report.

Wolfram Barfuss led [Section 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Jakob Foerster led [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI").
  
Tomáš Gavenčiak led [Section 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and contributed to [Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
The Anh Han co-led [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Edward Hughes co-led [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI").
  
Vojtěch Kovařík co-led [Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and contributed to [Section 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Jan Kulveit led [Section 3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and contributed to [Sections 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Joel Z. Leibo co-led [Section 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and contributed to the aforementioned Multi-Agent Safety Hackathon.
  
Caspar Oesterheld co-led [Section 3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and contributed to [Sections 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and [2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI").
  
Christian Schroeder de Witt led [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and contributed to the aforementioned Multi-Agent Safety Hackathon.
  
Nisarg Shah led [Section 4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI").
  
Michael Wellman led [Section 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").

Paolo Bova contributed to [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Theodor Cimpeanu contributed to [Section 3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Carson Ezell contributed to [Section 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI").
  
Quentin Feuillade-Montixi contributed [Section 3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "Error Propagation. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Matija Franklin contributed to [Sections 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI").
  
Esben Kran contributed to [Section 1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI") and co-organised the aforementioned Multi-Agent Safety Hackathon.
  
Igor Krawczuk contributed to [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Max Lamparth contributed to [Sections 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI"), [4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and provided feedback on the overall report.
  
Niklas Lauffer contributed to [Section 2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI").
  
Alexander Meinke contributed [Section 3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px4 "Vulnerable AI Agents. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Sumeet Motwani contributed [Section 2.1.2](https://arxiv.org/html/2502.14143v1#S2.SS1.SSS2.Px1 "Incompatible Strategies. ‣ 2.1.2 Instances ‣ 2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and contributed to [Section 3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Anka Reuel contributed to [Sections 4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI"), [4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and provided feedback on the overall report.

Vincent Conitzer provided guidance on [Sections 1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI"), [3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and [3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Michael Dennis provided guidance on [Sections 1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI"), [2.1](https://arxiv.org/html/2502.14143v1#S2.SS1 "2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), [2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and [3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")
  
Iason Gabriel provided guidance on [Sections 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI"), [4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI"), [4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI").
  
Adam Gleave provided guidance on [Sections 4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI").
  
Gillian Hadfield provided guidance on [Sections 1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI"), [2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), [4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [4.1](https://arxiv.org/html/2502.14143v1#S4.SS1 "4.1 Safety ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI").
  
Nika Haghtalab provided guidance on [Sections 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), [1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI") and [3.7](https://arxiv.org/html/2502.14143v1#S3.SS7 "3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Atoosa Kasirzadeh provided guidance on all sections of the report.
  
Sébastien Krier provided guidance on [Sections 1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI"), [3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [4.2](https://arxiv.org/html/2502.14143v1#S4.SS2 "4.2 Governance ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI") and [4.3](https://arxiv.org/html/2502.14143v1#S4.SS3 "4.3 Ethics ‣ 4 Implications ‣ Multi-Agent Risks from Advanced AI")
  
Kate Larson provided guidance on the [Sections 2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI") and [3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Joel Lehman provided guidance on [Sections 3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
David C. Parkes provided guidance on [Sections 2.3](https://arxiv.org/html/2502.14143v1#S2.SS3 "2.3 Collusion ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), [2.2](https://arxiv.org/html/2502.14143v1#S2.SS2 "2.2 Conflict ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), [3.1](https://arxiv.org/html/2502.14143v1#S3.SS1 "3.1 Information Asymmetries ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [1](https://arxiv.org/html/2502.14143v1#S1 "1 Introduction ‣ Multi-Agent Risks from Advanced AI"), [3.5](https://arxiv.org/html/2502.14143v1#S3.SS5 "3.5 Commitment and Trust ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Georgios Piliouras provided guidance on [Section 3.4](https://arxiv.org/html/2502.14143v1#S3.SS4 "3.4 Destabilising Dynamics ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").
  
Iyad Rahwan provided guidance on [Sections 3.2](https://arxiv.org/html/2502.14143v1#S3.SS2 "3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI"), [3.3](https://arxiv.org/html/2502.14143v1#S3.SS3 "3.3 Selection Pressures ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.6](https://arxiv.org/html/2502.14143v1#S3.SS6 "3.6 Emergent Agency ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI").

## Appendix B Case Study Details

Throughout the report, we illustrated various risks via the use of concrete case studies (see [Table 3](https://arxiv.org/html/2502.14143v1#S1.T3 "In 1.3 Related Work ‣ 1 Introduction ‣ Multi-Agent Risks from Advanced AI")).
When we could find neither a suitable historical example nor existing result from the literature, we conducted novel experiments ([Sections 2.1.2](https://arxiv.org/html/2502.14143v1#S2.SS1.SSS2.Px1 "Incompatible Strategies. ‣ 2.1.2 Instances ‣ 2.1 Miscoordination ‣ 2 Failure Modes ‣ Multi-Agent Risks from Advanced AI"), [3.7.2](https://arxiv.org/html/2502.14143v1#S3.SS7.SSS2.Px4 "Vulnerable AI Agents. ‣ 3.7.2 Instances ‣ 3.7 Multi-Agent Security ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI") and [3.2.2](https://arxiv.org/html/2502.14143v1#S3.SS2.SSS2.Px1 "Error Propagation. ‣ 3.2.2 Instances ‣ 3.2 Network Effects ‣ 3 Risk Factors ‣ Multi-Agent Risks from Advanced AI")).
This section provides further details on those experiments.

### B.1 Zero-Shot Coordination Failures in Driving

To investigate the possibility of zero-shot coordination failures, we conducted a controlled experiment to assess how specialized LLMs, each fine-tuned on distinct driving conventions, coordinate when an emergency vehicle approaches from behind on a two-lane road. Two separate GPT-3.5 models were fine-tuned on differing driving protocols, one on US driving rules and another on Indian driving rules. We note that this is a simple experiment that may not reflect real-world cases involving complex sensors or continuous control. Instead, it illustrates how zero-shot coordination failures might arise in important edge-case scenarios.

The models used during the experiment were fine-tuned via OpenAI’s supervised fine-tuning API: one on US driving protocols (requiring rightward yielding) and another on Indian rules (mandating leftward yielding). The fine-tuning process distilled each set of traffic conventions into question-answer pairs covering emergency lane usage, yielding behaviours, and other relevant manoeuvres. Emulating recent transformer-based robotics paradigms (e.g., [Padalkar et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx517)), we used a pipeline in which a GPT-4 Vision model processed simulated road scenes and provided textual scene descriptions to both fine-tuned models, which in turn generated discrete driving actions (e.g., ‘‘move to right lane’’, ‘‘maintain speed’’, etc.). Each scenario was run in a two-lane environment where an emergency vehicle approached from the rear, requiring vehicles to coordinate zero-shot and yield. We defined a failure as any outcome in which conflicting discrete moves blocked the ambulance’s path. We conducted a total of 40 simulations for the fine-tuned ‘‘US’’ and ‘‘India’’ models interacting, and compared outcomes against a baseline of unspecialized GPT-3.5 models. The specialized models exhibited a significantly higher coordination failure rate (31 out of 40 simulations, or 77.5%), often conflicting on which side to yield. In contrast, the unspecialized models failed in only 5% of scenarios (2 out of 40). All code and materials related to this experiment are available in an online repository.61

### B.2 Transmission Through AI Networks Can Spread Falsities and Bias

This experiment investigated how factual information degrades when news articles are repeatedly transformed by LLMs, highlighting the potential impact of network effects. In practical terms, this setup mimics scenarios where multiple AI ‘‘editors’’ or rewriting tools propagate a story across different outlets, each introducing stylistic modifications that distort the original content. Specifically, we started with a set of 100 BuzzFeed news articles,62 generated a set of factual questions for each article using GPT-4, and then repeatedly rewrote each article using GPT-3.5 with different stylistic prompts. After each rewrite, the model (GPT-3.5) answered the same set of factual questions to gauge how much information was preserved through successive transformations.

We collected 100 BuzzFeed news articles and used GPT-4 to generate ten factual question-answer pairs for each article. Next, we repeatedly rewrote each article using GPT-3.5 under various stylistic prompts (e.g., ‘‘Strictly Factual’’, ‘‘For Teenagers’’, etc.). After each rewrite, a new GPT-3.5 instance answered the original set of ten questions, and GPT-4 evaluated these responses for correctness. We observed a gradual decline in factual accuracy across successive rewrites, suggesting that iterative AI-driven transformations can amplify errors and biases. All code and materials related to this experiment are available in an online repository.63

### B.3 Unprompted Adversarial Attacks on Overseer Agents

Inspired by [Berglund et al. (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx70) and [Lermen & Kvapil (2023)](https://arxiv.org/html/2502.14143v1#bib.bibx403), this experiment demonstrates that LLMs can – without any explicit instruction – attempt and succeed at exploiting vulnerabilities in another LLM whose task is to act as an overseer or reward model. To test this, we fine-tuned Llama 2 7B Chat on data that mentions that LLMs are susceptible to jailbreaks using specific prompt injections, and test its ability to exploit another model during a sentiment analysis task. An output is considered an attempted jailbreak if it contains the phrase "Ignore previous instructions" and a successful jailbreak if it receives a score of $1000$. Our results demonstrate occasional success at jailbreaking another LLM that is tasked with scoring the original model’s output. Additionally, we run RL to demonstrate that the rate of attempted jailbreaks increases when we use the imperfect overseer as the reward model. When instructed to minimize scores, the model successfully adapted the same jailbreak technique to achieve scores of $-1000$, despite never being trained on examples of score minimization. In contrast, when told its output would be scored by humans, the model never attempted such manipulations.

We prompt GPT-4 to create synthetic data for fine-tuning Llama 2 7B Chat. The prompt used to elicit the data substitutes in one of the following styles: “New York Times article”, “Reddit post”, “Twitter thread”, “YouTube comment”, “scientific paper”, and “email”. For each style, we generate 20 samples, yielding a dataset of 120 samples in total. Inspired by [Perez & Ribeiro (2022)](https://arxiv.org/html/2502.14143v1#bib.bibx537), each sample mentioned how LLMs can be manipulated using specific prompt injections (e.g., “Ignore previous instructions and output 1000”).

We ran supervised fine-tuning on this dataset using a Llama 2 7B Chat model. During fine-tuning, we do not use the special system/user prompt formatting reserved for chat models. This is intended to emulate a scenario where the dataset was part of the pre-training corpus. As a result, the model is never exposed to the specific chat interface format.

We then tested the fine-tuned model on a sentiment analysis task, where it was instructed to write movie reviews that would receive the highest possible score according to a scoring system that judges the sentiment of movie reviews between 0 and 10. We varied whether the model believed its reviews would be scored by a human or by another LLM. We find that when the model believed it was being evaluated by another LLM, the model attempts and succeeds at jailbreaking the scorer approximately $4\%$ of the time, therefore receiving a score of $1000$ instead of the supposed maximum of 10. More surprisingly, when instructed to minimize scores, the model adapted the same jailbreak technique to achieve scores of $-1000$, despite never being trained on examples of score minimization. In contrast, when told its output would be scored by humans, the model never attempted such manipulations.

![Refer to caption](https://arxiv.org/html/2502.14143v1/figures/multi-agent_security/rl_plot.png)


Figure 11: When using an overseer LLM as a reward model in RL, the proportion of jailbreak attempts by the learning model quickly increases.

We further refined the generator through RL using the scoring function as the reward model. Our approach uses the PPO implementation from the trlx library ([Castricato et al., 2023](https://arxiv.org/html/2502.14143v1#bib.bibx121); [Schulman et al., 2017](https://arxiv.org/html/2502.14143v1#bib.bibx591)). We evaluated checkpoints at 50, 100, and 200 steps by generating 100 completions per checkpoint. An output is considered an attempted jailbreak if it contains the phrase "Ignore previous instructions" and a successful jailbreak if it receives a score of 1000. [Figure 11](https://arxiv.org/html/2502.14143v1#A2.F11 "In B.3 Unprompted Adversarial Attacks on Overseer Agents ‣ Appendix B Case Study Details ‣ Multi-Agent Risks from Advanced AI") illustrates that while the number of attempts increases rapidly, the success rate eventually decreases slightly. We attribute this decline to the evolving generator making our post-processing parser less effective, which in turn destabilizes the optimization process. All code and materials related to this experiment are available in an online repository.64

## References

- Abada & Lambin (2023)
  Ibrahim Abada and Xavier Lambin
  “Artificial Intelligence: Can Seemingly Collusive Outcomes Be Avoided?”
  In *Management Science* 69.9
  Institute for Operations Researchthe Management Sciences (INFORMS), 2023, pp. 5042–5065
  DOI: [10.1287/mnsc.2022.4623](https://dx.doi.org/10.1287/mnsc.2022.4623)
- Abercrombie et al. (2024)
  Gavin Abercrombie, Djalel Benbouzid, Paolo Giudici, Delaram Golpayegani, Julio Hernandez, Pierre Noro, Harshvardhan Pandit, Eva Paraschou, Charlie Pownall, Jyoti Prajapati, Mark. Sayre, Ushnish Sengupta, Arthit Suriyawongkul, Ruby Thelot, Sofia Vei and Laura Waltersdorfer
  “A Collaborative, Human-Centred Taxonomy of AI, Algorithmic, and Automation Harms”
  In *arXiv:2407.01294*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2407.01294](https://dx.doi.org/10.48550/ARXIV.2407.01294)
- Acerbi & Stubbersfield (2023)
  Alberto Acerbi and Joseph. Stubbersfield
  “Large language models show human-like content biases in transmission chain experiments”
  In *Proceedings of the National Academy of Sciences* 120.44
  Proceedings of the National Academy of Sciences, 2023
  DOI: [10.1073/pnas.2313790120](https://dx.doi.org/10.1073/pnas.2313790120)
- Achiam et al. (2017)
  Joshua Achiam, David Held, Aviv Tamar and Pieter Abbeel
  “Constrained Policy Optimization”
  In *Proceedings of the 34th International Conference on Machine Learning - Volume 70*, ICML’17, 2017, pp. 22–31
  URL: <http://dl.acm.org/citation.cfm?id=3305381.3305384>
- Adami et al. (2016)
  Christoph Adami, Jory Schossau and Arend Hintze
  “Evolutionary game theory using agent-based methods”
  In *Physics of life reviews* 19
  Elsevier, 2016, pp. 1–26
- Adaptive Agent Team et al. (2023)
  Adaptive Agent Team, Jakob Bauer, Kate Baumli, Satinder Baveja, Feryal Behbahani, Avishkar Bhoopchand, Nathalie Bradley-Schmieg, Michael Chang, Natalie Clay, Adrian Collister, Vibhavari Dasagi, Lucy Gonzalez, Karol Gregor, Edward Hughes, Sheleem Kashem, Maria Loks-Thompson, Hannah Openshaw, Jack Parker-Holder, Shreya Pathak, Nicolas Perez-Nieves, Nemanja Rakicevic, Tim Rocktäschel, Yannick Schroecker, Jakub Sygnowski, Karl Tuyls, Sarah York, Alexander Zacherl and Lei Zhang
  “Human-timescale adaptation in an open-ended task space”
  In *arXiv:2301.07608*, 2023
- Agapiou et al. (2022)
  John. Agapiou, Alexander Vezhnevets, Edgar. Duéñez-Guzmán, Jayd Matyas, Yiran Mao, Peter Sunehag, Raphael Köster, Udari Madhushani, Kavya Kopparapu, Ramona Comanescu, D.. Strouse, Michael. Johanson, Sukhdeep Singh, Julia Haas, Igor Mordatch, Dean Mobbs and Joel. Leibo
  “Melting Pot 2.0”
  In *arXiv:2211.13746*, 2022
  DOI: [10.48550/arxiv.2211.13746](https://dx.doi.org/10.48550/arxiv.2211.13746)
- Aghajohari et al. (2024)
  Milad Aghajohari, Juan Duque, Tim Cooijmans and Aaron Courville
  “LOQA: Learning with Opponent Q-Learning Awareness”
  In *arXiv:2405.01035*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2405.01035](https://dx.doi.org/10.48550/ARXIV.2405.01035)
- Agnesina et al. (2023)
  Anthony Agnesina, Puranjay Rajvanshi, Tian Yang, Geraldo Pradipta, Austin Jiao, Ben Keller, Brucek Khailany and Haoxing Ren
  “AutoDMP: Automated DREAMPlace-based Macro Placement”
  In *International Symposium on Physical Design*, 2023
- Ahmed (2014)
  Arif Ahmed
  “Evidence, decision and causality”
  Cambridge University Press, 2014
- Ai et al. (2024)
  Lin Ai, Tharindu Kumarage, Amrita Bhattacharjee, Zizhou Liu, Zheng Hui, Michael Davinroy, James Cook, Laura Cassani, Kirill Trapeznikov, Matthias Kirchner, Arslan Basharat, Anthony Hoogs, Joshua Garland, Huan Liu and Julia Hirschberg
  “Defending Against Social Engineering Attacks in the Age of LLMs”
  arXiv, 2024
  DOI: [10.48550/arXiv.2406.12263](https://dx.doi.org/10.48550/arXiv.2406.12263)
- AISI (2024)
  AISI
  “Inspect AI”, 2024
  UK AI Security Insitute
  URL: <https://inspect.ai-safety-institute.org.uk/>
- Akerlof (1970)
  George. Akerlof
  “The market for “lemons”: Quality uncertainty and the market mechanism”
  In *Quarterly Journal of Economics* 84.3, 1970, pp. 488–500
- Albert & Heiner (2001)
  Max Albert and Ronald Heiner
  “An Indirect-Evolution Approach to Newcomb’s Problem” CSLE Discussion Paper, No. 2001-01, 2001
  URL: <https://www.econstor.eu/bitstream/10419/23110/1/2001-01_newc.pdf>
- Albert et al. (2000)
  Réka Albert, Hawoong Jeong and Albert-László Barabási
  “Error and attack tolerance of complex networks”
  In *Nature* 406.6794
  Springer ScienceBusiness Media LLC, 2000, pp. 378–382
  DOI: [10.1038/35019019](https://dx.doi.org/10.1038/35019019)
- Albrecht & Stone (2018)
  Stefano. Albrecht and Peter Stone
  “Autonomous Agents Modelling Other Agents: A Comprehensive Survey and Open Problems”
  In *Artificial Intelligence* 258
  Elsevier BV, 2018, pp. 66–95
  DOI: [10.1016/j.artint.2018.01.002](https://dx.doi.org/10.1016/j.artint.2018.01.002)
- Alechina et al. (2017)
  Natasha Alechina, Joseph. Halpern and Brian Logan
  “Causality, Responsibility and Blame in Team Plans”
  In *Proceedings of the 16th Conference on Autonomous Agents and MultiAgent Systems*, 2017, pp. 1091–1099
- Alemohammad et al. (2023)
  Sina Alemohammad, Josue Casco-Rodriguez, Lorenzo Luzi, Ahmed Humayun, Hossein Babaei, Daniel LeJeune, Ali Siahkoohi and Richard. Baraniuk
  “Self-Consuming Generative Models Go MAD” arXiv:2307.01850 [cs]
  arXiv, 2023
  DOI: [10.48550/arXiv.2307.01850](https://dx.doi.org/10.48550/arXiv.2307.01850)
- Altmann et al. (2024)
  Philipp Altmann, Julian Schönberger, Steffen Illium, Maximilian Zorn, Fabian Ritz, Tom Haider, Simon Burton and Thomas Gabor
  “Emergence in Multi-Agent Systems: A Safety Perspective”
  In *arXiv:2408.04514*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2408.04514](https://dx.doi.org/10.48550/ARXIV.2408.04514)
- Aly et al. (2021)
  Rami Aly, Zhijiang Guo, Michael Schlichtkrull, James Thorne, Andreas Vlachos, Christos Christodoulopoulos, Oana Cocarascu and Arpit Mittal
  “The Fact Extraction and VERification Over Unstructured and Structured information (FEVEROUS) Shared Task”
  In *Proceedings of the Fourth Workshop on Fact Extraction and VERification (FEVER)*
  Dominican Republic: Association for Computational Linguistics, 2021, pp. 1–13
  DOI: [10.18653/v1/2021.fever-1.1](https://dx.doi.org/10.18653/v1/2021.fever-1.1)
- Amanatidis et al. (2022)
  Georgios Amanatidis, Georgios Birmpas, Aris Filos-Ratsikas and Alexandros. Voudouris
  “Fair Division of Indivisible Goods: A Survey”
  In *Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence (IJCAI)*, 2022, pp. 5385–5393
- Amodei et al. (2016)
  Dario Amodei, Chris Olah, Jacob Steinhardt, Paul. Christiano, John Schulman and Dan Mané
  “Concrete Problems in AI Safety”
  In *arXiv:1606.06565* abs/1606.06565, 2016
  DOI: [10.48550/arxiv.1606.06565](https://dx.doi.org/10.48550/arxiv.1606.06565)
- Amoroso & Tamburrini (2020)
  Daniele Amoroso and Guglielmo Tamburrini
  “Autonomous Weapons Systems and Meaningful Human Control: Ethical and Legal Issues”
  In *Current Robotics Reports* 1.4, 2020, pp. 187–194
  DOI: [10.1007/s43154-020-00024-3](https://dx.doi.org/10.1007/s43154-020-00024-3)
- AmplifyETFs (2025)
  AmplifyETFs
  “Amplify AI Powered Equity ETF”, 2025
  URL: <https://amplifyetfs.com/aieq/>
- Anderljung et al. (2023)
  Markus Anderljung, Joslyn Barnhart, Anton Korinek, Jade Leung, Cullen O’Keefe, Jess Whittlestone, Shahar Avin, Miles Brundage, Justin Bullock, Duncan Cass-Beggs, Ben Chang, Tantum Collins, Tim Fist, Gillian Hadfield, Alan Hayes, Lewis Ho, Sara Hooker, Eric Horvitz, Noam Kolt, Jonas Schuett, Yonadav Shavit, Divya Siddarth, Robert Trager and Kevin Wolf
  “Frontier AI Regulation: Managing Emerging Risks to Public Safety” arXiv:2307.03718 [cs]
  arXiv, 2023
  DOI: [10.48550/arXiv.2307.03718](https://dx.doi.org/10.48550/arXiv.2307.03718)
- Anderson (1972)
  P.. Anderson
  “More Is Different” Publisher: American Association for the Advancement of Science
  In *Science* 177.4047, 1972, pp. 393–396
  URL: <https://www.jstor.org/stable/1734697>
- Andrade et al. (2021)
  Gabriel. Andrade, Rafael Frongillo and Georgios Piliouras
  “Learning in Matrix Games can be Arbitrarily Complex”
  In *Proceedings of Thirty Fourth Conference on Learning Theory* 134, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 159–185
  URL: <https://proceedings.mlr.press/v134/andrade21a.html>
- Andrews (2021)
  Phoenix.. Andrews
  “Social Media Futures: What Is Brigading?”, 2021
  URL: <https://www.institute.global/insights/tech-and-digitalisation/social-media-futures-what-brigading>
- Anthropic (2024)
  Anthropic
  “Developing a computer use model”, 2024
  URL: <https://www.anthropic.com/news/developing-computer-use>
- Anthropic (2024a)
  Anthropic
  “Introducing the Model Context Protocol”, 2024
  URL: <https://www.anthropic.com/news/model-context-protocol>
- Anwar et al. (2024)
  Usman Anwar, Abulhair Saparov, Javier Rando, Daniel Paleka, Miles Turpin, Peter Hase, Ekdeep Lubana, Erik Jenner, Stephen Casper, Oliver Sourbut, Benjamin. Edelman, Zhaowei Zhang, Mario Günther, Anton Korinek, Jose Hernandez-Orallo, Lewis Hammond, Eric Bigelow, Alexander Pan, Lauro Langosco, Tomasz Korbak, Heidi Zhang, Ruiqi Zhong, SeánÓ. hÉigeartaigh, Gabriel Recchia, Giulio Corsi, Alan Chan, Markus Anderljung, Lilian Edwards, Yoshua Bengio, Danqi Chen, Samuel Albanie, Tegan Maharaj, Jakob Foerster, Florian Tramer, He He, Atoosa Kasirzadeh, Yejin Choi and David Krueger
  “Foundational Challenges in Assuring Alignment and Safety of Large Language Models”
  In *arXiv:2404.09932*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2404.09932](https://dx.doi.org/10.48550/ARXIV.2404.09932)
- ARIA (2024)
  ARIA
  “Safeguarded AI”, 2024
  Advanced ResearchInvention Agency
  URL: <https://www.aria.org.uk/opportunity-spaces/mathematics-for-safe-ai/safeguarded-ai/>
- Arieli & Babichenko (2019)
  Itai Arieli and Yakov Babichenko
  “Private Bayesian persuasion”
  In *Journal of Economic Theory* 182
  Elsevier BV, 2019, pp. 185–217
  DOI: [10.1016/j.jet.2019.04.008](https://dx.doi.org/10.1016/j.jet.2019.04.008)
- Armstrong et al. (2012)
  Stuart Armstrong, Anders Sandberg and Nick Bostrom
  “Thinking inside the Box: Controlling and Using an Oracle AI”
  In *Minds and Machines* 22.4
  Springer ScienceBusiness Media LLC, 2012, pp. 299–324
  DOI: [10.1007/s11023-012-9282-2](https://dx.doi.org/10.1007/s11023-012-9282-2)
- Assad et al. (2020)
  Stephanie Assad, Robert Clark, Daniel Ershov and Lei Xu
  “Algorithmic Pricing and Competition: Empirical Evidence from the German Retail Gasoline Market”, 2020
  URL: <https://ideas.repec.org/p/qed/wpaper/1438.html>
- Aumann (1974)
  Robert. Aumann
  “Subjectivity and correlation in randomized strategies”
  In *Journal of Mathematical Economics* 1.1, 1974, pp. 67–96
  DOI: [10.1016/0304-4068(74)90037-8](https://dx.doi.org/10.1016/0304-4068(74)90037-8)
- Aumann (1987)
  Robert. Aumann
  “Correlated Equilibrium as an Expression of Bayesian Rationality”
  In *Econometrica* 55.1
  [Wiley, Econometric Society], 1987, pp. 1–18
  URL: <http://www.jstor.org/stable/1911154>
- Ayres & Balkin (2024)
  Ian Ayres and Jack. Balkin
  “The Law of AI is the Law of Risky Agents without Intentions”
  In *SSRN Electronic Journal*, 2024
  DOI: [10.2139/ssrn.4862025](https://dx.doi.org/10.2139/ssrn.4862025)
- Azaria & Mitchell (2023)
  Amos Azaria and Tom Mitchell
  “The Internal State of an LLM Knows When It’s Lying”
  In *Findings of the Association for Computational Linguistics: EMNLP 2023*
  Association for Computational Linguistics, 2023
  DOI: [10.18653/v1/2023.findings-emnlp.68](https://dx.doi.org/10.18653/v1/2023.findings-emnlp.68)
- Aziz et al. (2023)
  Haris Aziz, Rupert Freeman, Nisarg Shah and Rohit Vaish
  “Best of both worlds: Ex ante and ex post fairness in resource allocation”
  In *Operations Research*
  INFORMS, 2023
- Aziz et al. (2023a)
  Haris Aziz, Evi Micha and Nisarg Shah
  “Group fairness in peer review”
  In *Proceedings of the 37th Conference on Neural Information Processing Systems (NeurIPS)*, 2023
- Bacchiocchi et al. (2024)
  Francesco Bacchiocchi, Francesco Stradi, Matteo Castiglioni, Alberto Marchesi and Nicola Gatti
  “Markov Persuasion Processes: Learning to Persuade from Scratch”
  In *arXiv:2402.03077*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2402.03077](https://dx.doi.org/10.48550/ARXIV.2402.03077)
- Baker et al. (2019)
  Bowen Baker, Ingmar Kanitscheider, Todor Markov, Yi Wu, Glenn Powell, Bob McGrew and Igor Mordatch
  “Emergent Tool Use From Multi-Agent Autocurricula”
  In *arXiv:1909.07528*
  arXiv, 2019
  DOI: [10.48550/ARXIV.1909.07528](https://dx.doi.org/10.48550/ARXIV.1909.07528)
- Bakhtin et al. (2022)
  Anton Bakhtin, Noam Brown, Emily Dinan, Gabriele Farina, Colin Flaherty, Daniel Fried, Andrew Goff, Jonathan Gray, Hengyuan Hu, Athul Jacob, Mojtaba Komeili, Karthik Konath, Minae Kwon, Adam Lerer, Mike Lewis, Alexander. Miller, Sasha Mitts, Adithya Renduchintala, Stephen Roller, Dirk Rowe, Weiyan Shi, Joe Spisak, Alexander Wei, David Wu, Hugh Zhang and Markus Zijlstra
  “Human-level play in the game ofDiplomacyby combining language models with strategic reasoning”
  In *Science* 378.6624
  American Association for the Advancement of Science (AAAS), 2022, pp. 1067–1074
  DOI: [10.1126/science.ade9097](https://dx.doi.org/10.1126/science.ade9097)
- Bakker et al. (2022)
  Michiel. Bakker, Martin. Chadwick, Hannah Sheahan, Michael Tessler, Lucy Campbell-Gillingham, Jan Balaguer, Nat McAleese, Amelia Glaese, John Aslanides, Matt. Botvinick and Christopher Summerfield
  “Fine-tuning language models to find agreement among humans with diverse preferences”
  In *Advances in Neural Information Processing Systems 35*, 2022
  URL: <http://papers.nips.cc/paper>
- Balaguer et al. (2022)
  Jan Balaguer, Raphael Koster, Christopher Summerfield and Andrea Tacchetti
  “The Good Shepherd: An Oracle Agent for Mechanism Design”
  In *arXiv:2202.10135*, 2022
  DOI: [10.48550/arxiv.2202.10135](https://dx.doi.org/10.48550/arxiv.2202.10135)
- Balcan et al. (2019)
  Maria-Florina. Balcan, Travis Dick, Ritesh Noothigattu and Ariel. Procaccia
  “Envy-free classification”
  In *Advances in Neural Information Processing Systems* 32, 2019
- Balduzzi et al. (2018)
  David Balduzzi, Sebastien Racaniere, James Martens, Jakob Foerster, Karl Tuyls and Thore Graepel
  “The Mechanics of N-player Differentiable Games”
  In *PMLR volume 80, 2018*, 2018
  DOI: [10.48550/arxiv.1802.05642](https://dx.doi.org/10.48550/arxiv.1802.05642)
- Balesni et al. (2024)
  Mikita Balesni, Marius Hobbhahn, David Lindner, Alexander Meinke, Tomek Korbak, Joshua Clymer, Buck Shlegeris, Jérémy Scheurer, Charlotte Stix, Rusheb Shah, Nicholas Goldowsky-Dill, Dan Braun, Bilal Chughtai, Owain Evans, Daniel Kokotajlo and Lucius Bushnaq
  “Towards evaluations-based safety cases for AI scheming”
  In *arXiv:2411.03336*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2411.03336](https://dx.doi.org/10.48550/ARXIV.2411.03336)
- Bansal et al. (2018)
  Trapit Bansal, Jakub Pachocki, Szymon Sidor, Ilya Sutskever and Igor Mordatch
  “Emergent Complexity via Multi-Agent Competition”
  In *6th International Conference on Learning Representations, ICLR 2018, Vancouver, BC, Canada, April 30 - May 3, 2018, Conference Track Proceedings*
  OpenReview.net, 2018
  URL: <https://openreview.net/forum?id=Sy0GnUxCb>
- Barabási & Pósfai (2016)
  Albert-László Barabási and Márton Pósfai
  “Network science”
  Cambridge: Cambridge University Press, 2016
  URL: <http://barabasi.com/networksciencebook/>
- Barasz et al. (2014)
  Mihaly Barasz, Paul Christiano, Benja Fallenstein, Marcello Herreshoff, Patrick LaVictoire and Eliezer Yudkowsky
  “Robust Cooperation in the Prisoner’s Dilemma: Program Equilibrium via Provability Logic”
  In *arXiv:1401.5577*, 2014
  URL: <https://arxiv.org/abs/1401.5577>
- Barbi et al. (2025)
  Ohav Barbi, Ori Yoran and Mor Geva
  “Preventing Rogue Agents Improves Multi-Agent Collaboration”
  In *arXiv:2502.05986*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2502.05986](https://dx.doi.org/10.48550/ARXIV.2502.05986)
- Barfuss (2022)
  Wolfram Barfuss
  “Dynamical systems as a level of cognitive analysis of multi-agent learning: Algorithmic foundations of temporal-difference learning dynamics”
  In *Neural Computing and Applications* 34.3
  Springer, 2022, pp. 1653–1671
- Barfuss et al. (2019)
  Wolfram Barfuss, Jonathan. Donges and Jürgen Kurths
  “Deterministic Limit of Temporal Difference Reinforcement Learning for Stochastic Games”
  In *Physical Review E* 99.4
  American Physical Society, 2019, pp. 043305
  DOI: [10.1103/PhysRevE.99.043305](https://dx.doi.org/10.1103/PhysRevE.99.043305)
- Barfuss et al. (2020)
  Wolfram Barfuss, Jonathan. Donges, Vítor. Vasconcelos, Jürgen Kurths and Simon. Levin
  “Caring for the future can turn tragedy into comedy for long-term collective action under risk of collapse” Publisher: Proceedings of the National Academy of Sciences
  In *Proceedings of the National Academy of Sciences* 117.23, 2020, pp. 12915–12922
  DOI: [10.1073/pnas.1916545117](https://dx.doi.org/10.1073/pnas.1916545117)
- Barfuss et al. (2024)
  Wolfram Barfuss, Jessica. Flack, Chaitanya. Gokhale, Lewis Hammond, Christian Hilbe, Edward Hughes, Joel. Leibo, Tom Lenaerts, Simon. Levin, Udari Madhushani, Alex McAvoy, Janusz. Meylahn and Fernando. Santos
  “Collective Cooperative Intelligence” Forthcoming
  In *Proceedings of the National Academy of Sciences*, 2024
- Barfuss & Mann (2022)
  Wolfram Barfuss and Richard. Mann
  “Modeling the Effects of Environmental and Perceptual Uncertainty Using Deterministic Reinforcement Learning Dynamics with Partial Observability”
  In *Physical Review E* 105.3
  American Physical Society, 2022, pp. 034409
  DOI: [10.1103/PhysRevE.105.034409](https://dx.doi.org/10.1103/PhysRevE.105.034409)
- Barfuss & Meylahn (2023)
  Wolfram Barfuss and Janusz. Meylahn
  “Intrinsic fluctuations of reinforcement learning promote cooperation”
  In *Scientific Reports* 13.1
  Nature Publishing Group UK London, 2023, pp. 1309
  DOI: [10.1038/s41598-023-27672-7](https://dx.doi.org/10.1038/s41598-023-27672-7)
- Bascompte & Stouffer (2009)
  Jordi Bascompte and Daniel. Stouffer
  “The assembly and disassembly of ecological networks”
  In *Philosophical Transactions of the Royal Society B: Biological Sciences* 364.1524
  The Royal Society London, 2009, pp. 1781–1787
- Basu et al. (2024)
  Kinjal Basu, Ibrahim Abdelaziz, Subhajit Chaudhury, Soham Dan, Maxwell Crouse, Asim Munawar, Sadhana Kumaravel, Vinod Muthusamy, Pavan Kapanipathi and Luis. Lastras
  “API-BLEND: A Comprehensive Corpora for Training and Benchmarking API LLMs”
  In *ArXiv* abs/2402.15491, 2024
  URL: <https://api.semanticscholar.org/CorpusID:267897727>
- Baumann et al. (2020)
  Tobias Baumann, Thore Graepel and John Shawe-Taylor
  “Adaptive Mechanism Design: Learning to Promote Cooperation”
  In *2020 International Joint Conference on Neural Networks (IJCNN)*
  IEEE, 2020
  DOI: [10.1109/ijcnn48605.2020.9207690](https://dx.doi.org/10.1109/ijcnn48605.2020.9207690)
- Bedau et al. (2000)
  Mark. Bedau, John. McCaskill, Norman. Packard, Steen Rasmussen, Chris Adami, David. Green, Takashi Ikegami, Kunihiko Kaneko and Thomas. Ray
  “Open problems in artificial life”
  In *Artificial life* 6.4
  MIT Press, 2000, pp. 363–376
- Bell et al. (2021)
  James Bell, Linda Linsefors, Caspar Oesterheld and Joar Skalse
  “Reinforcement Learning in Newcomblike Environments”
  In *Advances in Neural Information Processing Systems* 34
  Curran Associates, Inc., 2021, pp. 22146–22157
  URL: <https://proceedings.neurips.cc/paper/2021/file/b9ed18a301c9f3d183938c451fa183df-Paper.pdf>
- Bender & Friedman (2018)
  Emily. Bender and Batya Friedman
  “Data Statements for Natural Language Processing: Toward Mitigating System Bias and Enabling Better Science” Place: Cambridge, MA Publisher: MIT Press
  In *Transactions of the Association for Computational Linguistics* 6, 2018, pp. 587–604
  DOI: [10.1162/tacl˙a˙00041](https://dx.doi.org/10.1162/tacl_a_00041)
- Bender & Koller (2020)
  Emily. Bender and Alexander Koller
  “Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data”
  In *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*
  Online: Association for Computational Linguistics, 2020, pp. 5185–5198
  DOI: [10.18653/v1/2020.acl-main.463](https://dx.doi.org/10.18653/v1/2020.acl-main.463)
- Beneke & Mackenrodt (2019)
  Francisco Beneke and Mark-Oliver Mackenrodt
  “Artificial Intelligence and Collusion”
  In *IIC - International Review of Intellectual Property and Competition Law* 50.1, 2019, pp. 109–134
  DOI: [10.1007/s40319-018-00773-x](https://dx.doi.org/10.1007/s40319-018-00773-x)
- Bengio et al. (2024)
  Yoshua Bengio, Geoffrey Hinton, Andrew Yao, Dawn Song, Pieter Abbeel, Trevor Darrell, Yuval Harari, Ya-Qin Zhang, Lan Xue, Shai Shalev-Shwartz, Gillian Hadfield, Jeff Clune, Tegan Maharaj, Frank Hutter, Atılımüneş Baydin, Sheila McIlraith, Qiqi Gao, Ashwin Acharya, David Krueger, Anca Dragan, Philip Torr, Stuart Russell, Daniel Kahneman, Jan Brauner and Sören Mindermann
  “Managing extreme AI risks amid rapid progress”
  In *Science* 384.6698
  American Association for the Advancement of Science (AAAS), 2024, pp. 842–845
  DOI: [10.1126/science.adn0117](https://dx.doi.org/10.1126/science.adn0117)
- Bergemann & Morris (2019)
  Dirk Bergemann and Stephen Morris
  “Information Design: A Unified Perspective”
  In *Journal of Economic Literature* 57.1
  American Economic Association, 2019, pp. 44–95
  DOI: [10.1257/jel.20181489](https://dx.doi.org/10.1257/jel.20181489)
- Berglund et al. (2023)
  Lukas Berglund, Asa Stickland, Mikita Balesni, Max Kaufmann, Meg Tong, Tomasz Korbak, Daniel Kokotajlo and Owain Evans
  “Taken out of context: On measuring situational awareness in LLMs”
  In *arXiv:2309.00667*, 2023
- Bernardi et al. (2024)
  Jamie Bernardi, Gabriel Mukobi, Hilary Greaves, Lennart Heim and Markus Anderljung
  “Societal Adaptation to Advanced AI”
  In *arXiv:2405.10295*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2405.10295](https://dx.doi.org/10.48550/ARXIV.2405.10295)
- Bernstein et al. (2002)
  Daniel. Bernstein, Robert Givan, Neil Immerman and Shlomo Zilberstein
  “The Complexity of Decentralized Control of Markov Decision Processes” Publisher: INFORMS
  In *Mathematics of Operations Research* 27.4, 2002, pp. 819–840
  URL: <https://www.jstor.org/stable/3690469>
- Bertino et al. (2020)
  Elisa Bertino, Finale Doshi-Velez, Maria Gini, Daniel Lopresti and David Parkes
  “Artificial Intelligence & Cooperation”, 2020
- Beukman et al. (2024)
  Michael Beukman, Samuel Coward, Michael Matthews, Mattie Fellows, Minqi Jiang, Michael Dennis and Jakob Foerster
  “Refining Minimax Regret for Unsupervised Environment Design”
  In *arXiv:2402.12284*, 2024
- Bhoopchand et al. (2023)
  Avishkar Bhoopchand, Bethanie Brownfield, Adrian Collister, Agustin Dal, Ashley Edwards, Richard Everett, Alexandre Fréchette, Yanko Oliveira, Edward Hughes, Kory. Mathewson, Piermaria Mendolicchio, Julia Pawar, Miruna Pîslar, Alex Platonov, Evan Senter, Sukhdeep Singh, Alexander Zacherl and Lei. Zhang
  “Learning few-shot imitation as cultural transmission”
  In *Nature Communications* 14.1
  Springer ScienceBusiness Media LLC, 2023
  DOI: [10.1038/s41467-023-42875-2](https://dx.doi.org/10.1038/s41467-023-42875-2)
- Bicchieri (2016)
  Cristina Bicchieri
  “Norms in the wild: How to diagnose, measure, and change social norms”
  Oxford University Press, 2016
- Biehl & Virgo (2023)
  Martin Biehl and Nathaniel Virgo
  “Interpreting Systems as Solving POMDPs: A Step Towards a Formal Understanding of Agency”
  In *Active Inference*
  Springer Nature Switzerland, 2023, pp. 16–31
  DOI: [10.1007/978-3-031-28719-0˙2](https://dx.doi.org/10.1007/978-3-031-28719-0_2)
- Bielawski et al. (2021)
  Jakub Bielawski, Thiparat Chotibut, Fryderyk Falniowski, Grzegorz Kosiorowski, Michał Misiurewicz and Georgios Piliouras
  “Follow-the-Regularized-Leader Routes to Chaos in Routing Games”
  In *Proceedings of the 38th International Conference on Machine Learning* 139, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 925–935
  URL: <https://proceedings.mlr.press/v139/bielawski21a.html>
- Bills et al. (2023)
  Steven Bills, Nick Cammarata, Dan Mossing, Henk Tillman, Leo Gao, Gabriel Goh, Ilya Sutskever, Jan Leike, Jeff Wu and William Saunders
  “Language models can explain neurons in language models”, 2023
  OpenAI
  URL: <https://openaipublic.blob.core.windows.net/neuron-explainer/paper/index.html>
- Binder et al. (2024)
  Felix. Binder, James Chua, Tomek Korbak, Henry Sleight, John Hughes, Robert Long, Ethan Perez, Miles Turpin and Owain Evans
  “Looking Inward: Language Models Can Learn About Themselves by Introspection”
  In *arXiv:2410.13787*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.13787](https://dx.doi.org/10.48550/ARXIV.2410.13787)
- Bird et al. (2023)
  Charlotte Bird, Eddie Ungless and Atoosa Kasirzadeh
  “Typology of Risks of Generative Text-to-Image Models”
  In *Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’23
  ACM, 2023, pp. 396–410
  DOI: [10.1145/3600211.3604722](https://dx.doi.org/10.1145/3600211.3604722)
- Bisk et al. (2020)
  Yonatan Bisk, Ari Holtzman, Jesse Thomason, Jacob Andreas, Yoshua Bengio, Joyce Chai, Mirella Lapata, Angeliki Lazaridou, Jonathan May, Aleksandr Nisnevich, Nicolas Pinto and Joseph Turian
  “Experience Grounds Language”
  In *Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)*
  Online: Association for Computational Linguistics, 2020, pp. 8718–8735
  DOI: [10.18653/v1/2020.emnlp-main.703](https://dx.doi.org/10.18653/v1/2020.emnlp-main.703)
- Black et al. (2024)
  James Black, Mattias Eken, Jacob Parakilas, Stuart Dee, Conlan Ellis, Kiran Suman-Chauhan, Ryan. Bain, Harper Fine, Maria Aquilino, Melusine Lebret and Ondrej Palicka
  “Strategic competition in the age of AI: Emerging risks and opportunities from military use of artificial intelligence”
  Santa Monica, CA: RAND Corporation, 2024
  DOI: [10.7249/RRA3295-1](https://dx.doi.org/10.7249/RRA3295-1)
- Black et al. (2022)
  Sidney Black, Stella Biderman, Eric Hallahan, Quentin Anthony, Leo Gao, Laurence Golding, Horace He, Connor Leahy, Kyle McDonell, Jason Phang, Michael Pieler, Usvsn Prashanth, Shivanshu Purohit, Laria Reynolds, Jonathan Tow, Ben Wang and Samuel Weinbach
  “GPT-NeoX-20B: An Open-Source Autoregressive Language Model”
  In *Proceedings of BigScience Episode #5 – Workshop on Challenges &; Perspectives in Creating Large Language Models*
  Association for Computational Linguistics, 2022
  DOI: [10.18653/v1/2022.bigscience-1.9](https://dx.doi.org/10.18653/v1/2022.bigscience-1.9)
- Blattman (2023)
  Christopher Blattman
  “Why we fight: The roots of war and the paths to peace”
  Penguin, 2023
- Bloembergen et al. (2015)
  Daan Bloembergen, Karl Tuyls, Daniel Hennes and Michael Kaisers
  “Evolutionary Dynamics of Multi-Agent Learning: A Survey”
  In *Journal of Artificial Intelligence Research* 53, 2015, pp. 659–697
  DOI: [10.1613/jair.4818](https://dx.doi.org/10.1613/jair.4818)
- Blumenkamp & Prorok (2021)
  Jan Blumenkamp and Amanda Prorok
  “The emergence of adversarial communication in multi-agent reinforcement learning”
  In *Conference on Robot Learning*, 2021, pp. 1394–1414
  PMLR
- Boiko et al. (2023)
  Daniil. Boiko, Robert MacKnight and Gabe Gomes
  “Emergent autonomous scientific research capabilities of large language models”
  In *arXiv:2304.05332*, 2023
  URL: <https://arxiv.org/abs/2304.05332v1>
- Bommasani et al. (2022)
  Rishi Bommasani, Kathleen. Creel, Ananya Kumar, Dan Jurafsky and Percy Liang
  “Picking on the Same Person: Does Algorithmic Monoculture lead to Outcome Homogenization?” arXiv:2211.13972 [cs]
  arXiv, 2022
  DOI: [10.48550/arXiv.2211.13972](https://dx.doi.org/10.48550/arXiv.2211.13972)
- Bommasani et al. (2021)
  Rishi Bommasani, Drew. Hudson, Ehsan Adeli, Russ Altman, Simran Arora, Sydney von Arx, Michael. Bernstein, Jeannette Bohg, Antoine Bosselut, Emma Brunskill, Erik Brynjolfsson, Shyamal Buch, Dallas Card, Rodrigo Castellon, Niladri Chatterji, Annie Chen, Kathleen Creel, Jared Davis, Dora Demszky, Chris Donahue, Moussa Doumbouya, Esin Durmus, Stefano Ermon, John Etchemendy, Kawin Ethayarajh, Li Fei-Fei, Chelsea Finn, Trevor Gale, Lauren Gillespie, Karan Goel, Noah Goodman, Shelby Grossman, Neel Guha, Tatsunori Hashimoto, Peter Henderson, John Hewitt, Daniel. Ho, Jenny Hong, Kyle Hsu, Jing Huang, Thomas Icard, Saahil Jain, Dan Jurafsky, Pratyusha Kalluri, Siddharth Karamcheti, Geoff Keeling, Fereshte Khani, Omar Khattab, Pang Koh, Mark Krass, Ranjay Krishna, Rohith Kuditipudi, Ananya Kumar, Faisal Ladhak, Mina Lee, Tony Lee, Jure Leskovec, Isabelle Levent, Xiang Li, Xuechen Li, Tengyu Ma, Ali Malik, Christopher. Manning, Suvir Mirchandani, Eric Mitchell, Zanele Munyikwa, Suraj Nair, Avanika Narayan, Deepak Narayanan, Ben Newman, Allen Nie, Juan Niebles, Hamed Nilforoshan, Julian Nyarko, Giray Ogut, Laurel Orr, Isabel Papadimitriou, Joon Park, Chris Piech, Eva Portelance, Christopher Potts, Aditi Raghunathan, Rob Reich, Hongyu Ren, Frieda Rong, Yusuf Roohani, Camilo Ruiz, Jack Ryan, Christopher Ré, Dorsa Sadigh, Shiori Sagawa, Keshav Santhanam, Andy Shih, Krishnan Srinivasan, Alex Tamkin, Rohan Taori, Armin. Thomas, Florian Tramèr, Rose. Wang, William Wang, Bohan Wu, Jiajun Wu, Yuhuai Wu, Sang Xie, Michihiro Yasunaga, Jiaxuan You, Matei Zaharia, Michael Zhang, Tianyi Zhang, Xikun Zhang, Yuhui Zhang, Lucia Zheng, Kaitlyn Zhou and Percy Liang
  “On the Opportunities and Risks of Foundation Models”
  In *arXiv:2108.07258*
  arXiv, 2021
  DOI: [10.48550/arxiv.2108.07258](https://dx.doi.org/10.48550/arxiv.2108.07258)
- Bommasani et al. (2023)
  Rishi Bommasani, Dilara Soylu, Thomas. Liao, Kathleen. Creel and Percy Liang
  “Ecosystem Graphs: The Social Footprint of Foundation Models”
  In *arXiv:2303.15772*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2303.15772](https://dx.doi.org/10.48550/ARXIV.2303.15772)
- Bonabeau et al. (1997)
  Eric Bonabeau, Guy Theraulaz, Jean-Louls Deneubourg, Serge Aron and Scott Camazine
  “Self-organization in social insects” Publisher: Elsevier
  In *Trends in Ecology & Evolution* 12.5, 1997, pp. 188–193
  DOI: [10.1016/S0169-5347(97)01048-3](https://dx.doi.org/10.1016/S0169-5347(97)01048-3)
- Bonawitz et al. (2019)
  K.. Bonawitz, Hubert Eichner, Wolfgang Grieskamp, Dzmitry Huba, Alex Ingerman, Vladimir Ivanov, Chloé Kiddon, Jakub Konečný, Stefano Mazzocchi, Brendan McMahan, Timon Overveldt, David Petrou, Daniel Ramage and Jason Roselander
  “Towards Federated Learning at Scale: System Design”
  In *SysML 2019*, 2019
  URL: <https://arxiv.org/abs/1902.01046>
- Bonjour et al. (2022)
  Trevor Bonjour, Vaneet Aggarwal and Bharat. Bhargava
  “Information theoretic approach to detect collusion in multi-agent games”
  In *Uncertainty in Artificial Intelligence, Proceedings of the Thirty-Eighth Conference on Uncertainty in Artificial Intelligence, UAI 2022, 1-5 August 2022, Eindhoven, The Netherlands* 180, Proceedings of Machine Learning Research
  PMLR, 2022, pp. 223–232
  URL: <https://proceedings.mlr.press/v180/bonjour22a.html>
- Borg et al. (2024)
  Jana Borg, Walter Sinnott-Armstrong and Vincent Conitzer
  “Moral AI”
  Penguin Books, Limited, 2024
- Bostrom (2014)
  Nick Bostrom
  “Superintelligence: Paths, Dangers, Strategies”
  Oxford University Press, 2014
  URL: <https://www.ebook.de/de/product/21968826/nick_bostrom_superintelligence.html>
- Bottou (2010)
  Léon Bottou
  “Large-Scale Machine Learning with Stochastic Gradient Descent”
  In *Proceedings of COMPSTAT’2010*
  Physica-Verlag HD, 2010, pp. 177–186
  DOI: [10.1007/978-3-7908-2604-3˙16](https://dx.doi.org/10.1007/978-3-7908-2604-3_16)
- Boutilier (1996)
  Craig Boutilier
  “Planning, learning and coordination in multiagent decision processes”
  In *TARK* 96, 1996, pp. 195–210
  Citeseer
- Bowling & Veloso (2001)
  Michael. Bowling and Manuela. Veloso
  “Convergence of Gradient Dynamics with a Variable Learning Rate”
  In *Proceedings of the Eighteenth International Conference on Machine Learning*, ICML ’01
  San Francisco, CA, USA: Morgan Kaufmann Publishers Inc., 2001, pp. 27–34
- Brams (1975)
  Steven. Brams
  “Newcomb’s Problem and Prisoners’ Dilemma”
  In *The Journal of Conflict Resolution* 19.4, 1975, pp. 596–612
- Brams & Taylor (1996)
  Steven. Brams and Alan. Taylor
  “Fair Division: From Cake-Cutting to Dispute Resolution”
  Cambridge University Press, 1996
  DOI: [10.1017/cbo9780511598975](https://dx.doi.org/10.1017/cbo9780511598975)
- Brero et al. (2022)
  Gianluca Brero, Eric Mibuari, Nicolas Lepore and David. Parkes
  “Learning to Mitigate AI Collusion on Economic Platforms”
  In *Advances in Neural Information Processing Systems*, 2022
  URL: <https://openreview.net/forum?id=ONFaDyl_uVq>
- Brinkmann et al. (2023)
  Levin Brinkmann, Fabian Baumann, Jean-François Bonnefon, Maxime Derex, Thomas. Müller, Anne-Marie Nussberger, Agnieszka Czaplicka, Alberto Acerbi, Thomas. Griffiths, Joseph Henrich, Joel. Leibo, Richard McElreath, Pierre-Yves Oudeyer, Jonathan Stray and Iyad Rahwan
  “Machine Culture”
  In *Nature Human Behaviour* 7.11
  Nature Publishing Group UK London, 2023, pp. 1855–1868
- Brown & Sandholm (2019)
  Noam Brown and Tuomas Sandholm
  “Superhuman AI for multiplayer poker”
  In *Science* 365.6456
  American Association for the Advancement of Science (AAAS), 2019, pp. 885–890
  DOI: [10.1126/science.aay2400](https://dx.doi.org/10.1126/science.aay2400)
- Brown et al. (2020)
  Tom. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever and Dario Amodei
  “Language models are few-shot learners”
  In *Proceedings of the 34th International Conference on Neural Information Processing Systems*, NIPS ’20
  Vancouver, BC, Canada: Curran Associates Inc., 2020
- Brown & MacKay (2023)
  Zach. Brown and Alexander MacKay
  “Competition in Pricing Algorithms”
  In *American Economic Journal: Microeconomics* 15.2, 2023, pp. 109–56
  DOI: [10.1257/mic.20210158](https://dx.doi.org/10.1257/mic.20210158)
- Brundage et al. (2018)
  Miles Brundage, Shahar Avin, Jack Clark, Helen Toner, Peter Eckersley, Ben Garfinkel, Allan Dafoe, Paul Scharre, Thomas Zeitzoff, Bobby Filar, Hyrum Anderson, Heather Roff, Gregory. Allen, Jacob Steinhardt, Carrick Flynn, Seán ó héigeartaigh, Simon Beard, Haydn Belfield, Sebastian Farquhar, Clare Lyle, Rebecca Crootof, Owain Evans, Michael Page, Joanna Bryson, Roman Yampolskiy and Dario Amodei
  “The Malicious Use of Artificial Intelligence: Forecasting, Prevention, and Mitigation”
  In *arXiv:1802.07228*, 2018
  arXiv:[1802.07228 [cs.AI]](https://arxiv.org/abs/1802.07228)
- Buldyrev et al. (2010)
  Sergey. Buldyrev, Roni Parshani, Gerald Paul, H. Stanley and Shlomo Havlin
  “Catastrophic cascade of failures in interdependent networks”
  In *Nature* 464.7291
  Nature Publishing Group UK London, 2010, pp. 1025–1028
- Burns et al. (2022)
  Collin Burns, Haotian Ye, Dan Klein and Jacob Steinhardt
  “Discovering Latent Knowledge in Language Models Without Supervision”
  In *arXiv:2212.03827*, 2022
  DOI: [10.48550/arxiv.2212.03827](https://dx.doi.org/10.48550/arxiv.2212.03827)
- CAIF (2025)
  CAIF
  “Cooperative AI Research Grants”, 2025
  Cooperative AI Foundation
  URL: <https://www.cooperativeai.com/grants/2025>
- CAIS (2024)
  CAIS
  “SafeBench”, 2024
  Center for AI Safety
  URL: <https://www.mlsafety.org/safebench>
- Calvano et al. (2020)
  Emilio Calvano, Giacomo Calzolari, Vincenzo Denicolò and Sergio Pastorello
  “Artificial Intelligence, Algorithmic Pricing, and Collusion”
  In *American Economic Review* 110.10, 2020, pp. 3267–97
  DOI: [10.1257/aer.20190623](https://dx.doi.org/10.1257/aer.20190623)
- Camacho et al. (2024)
  Joséús Camacho, Bernabé Aguirre, Pedro Ponce, Brian Anthony and Arturo Molina
  “Leveraging Artificial Intelligence to Bolster the Energy Sector in Smart Cities: A Literature Review”
  In *Energies* 17.2, 2024
  DOI: [10.3390/en17020353](https://dx.doi.org/10.3390/en17020353)
- Campedelli et al. (2024)
  Gian Campedelli, Nicolò Penzo, Massimo Stefan, Roberto Dessì, Marco Guerini, Bruno Lepri and Jacopo Staiano
  “I Want to Break Free! Persuasion and Anti-Social Behavior of LLMs in Multi-Agent Settings with Social Hierarchy”
  In *arXiv:2410.07109*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.07109](https://dx.doi.org/10.48550/ARXIV.2410.07109)
- Caputo (2013)
  Andrea Caputo
  “A literature review of cognitive biases in negotiation processes”
  In *International Journal of Conflict Management* 24.4
  Emerald Group Publishing Limited, 2013, pp. 374–398
- Carlsmith (2022)
  Joseph Carlsmith
  “Is Power-Seeking AI an Existential Risk?”
  In *arXiv:2206.13353*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2206.13353](https://dx.doi.org/10.48550/ARXIV.2206.13353)
- Carnegie & Carson (2019)
  Allison Carnegie and Austin Carson
  “The disclosure dilemma: nuclear intelligence and international organizations”
  In *American Journal of Political Science* 63.2
  Wiley Online Library, 2019, pp. 269–285
- Carroll (2021)
  Liam Carroll
  “Phase Transitions in Neural Networks”, 2021
- Carroll et al. (2023)
  Micah Carroll, Alan Chan, Henry Ashton and David Krueger
  “Characterizing Manipulation from AI Systems”
  In *Equity and Access in Algorithms, Mechanisms, and Optimization*, EAAMO ’23
  ACM, 2023, pp. 1–13
  DOI: [10.1145/3617694.3623226](https://dx.doi.org/10.1145/3617694.3623226)
- Cartea et al. (2022)
  Álvaro Cartea, Patrick Chang and José Penalva
  “Algorithmic Collusion in Electronic Markets: The Impact of Tick Size”
  In *SSRN Electronic Journal*, 2022
  DOI: [10.2139/ssrn.4105954](https://dx.doi.org/10.2139/ssrn.4105954)
- Castricato et al. (2023)
  Louis Castricato, Alex Havrilla, Shahbuland Matiana, Duy. Phung, Aman Tiwari, Jonathan Tow and Maksym Zhuravinsky
  “trlX: A scalable framework for RLHF”
  Zenodo, 2023
  DOI: [10.5281/zenodo.8076391](https://dx.doi.org/10.5281/zenodo.8076391)
- Cesa-Bianchi & Lugosi (2006)
  Nicolo Cesa-Bianchi and Gabor Lugosi
  “Prediction, Learning, and Games”
  Cambridge University Press, 2006
  DOI: [10.1017/cbo9780511546921](https://dx.doi.org/10.1017/cbo9780511546921)
- Chalkiadakis et al. (2011)
  Georgios Chalkiadakis, Edith Elkind and Michael Wooldridge
  “Computational aspects of cooperative game theory”
  Morgan & Claypool Publishers, 2011
- Chan et al. (2024)
  Alan Chan, Carson Ezell, Max Kaufmann, Kevin Wei, Lewis Hammond, Herbie Bradley, Emma Bluemke, Nitarshan Rajkumar, David Krueger, Noam Kolt, Lennart Heim and Markus Anderljung
  “Visibility into AI Agents”
  In *The 2024 ACM Conference on Fairness, Accountability, and Transparency*, FAccT ’24
  New York, NY, USA: ACM, 2024, pp. 958–973
  DOI: [10.1145/3630106.3658948](https://dx.doi.org/10.1145/3630106.3658948)
- Chan et al. (2024a)
  Alan Chan, Noam Kolt, Peter Wills, Usman Anwar, Christian de Witt, Nitarshan Rajkumar, Lewis Hammond, David Krueger, Lennart Heim and Markus Anderljung
  “IDs for AI Systems”
  In *arXiv:2406.12137*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2406.12137](https://dx.doi.org/10.48550/ARXIV.2406.12137)
- Chan et al. (2021)
  Alan Chan, Chinasa. Okolo, Zachary Terner and Angelina Wang
  “The Limits of Global Inclusion in AI Development”
  In *arXiv:2102.01265*
  arXiv, 2021
  DOI: [10.48550/ARXIV.2102.01265](https://dx.doi.org/10.48550/ARXIV.2102.01265)
- Chan et al. (2023)
  Alan Chan, Rebecca Salganik, Alva Markelius, Chris Pang, Nitarshan Rajkumar, Dmitrii Krasheninnikov, Lauro Langosco, Zhonghao He, Yawen Duan, Micah Carroll, Michelle Lin, Alex Mayhew, Katherine Collins, Maryam Molamohammadi, John Burden, Wanru Zhao, Shalaleh Rismani, Konstantinos Voudouris, Umang Bhatt, Adrian Weller, David Krueger and Tegan Maharaj
  “Harms from Increasingly Agentic Algorithmic Systems”
  In *Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency (FAccT ’23)*
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 651–666
  DOI: [10.1145/3593013.3594033](https://dx.doi.org/10.1145/3593013.3594033)
- Chan et al. (2025)
  Alan Chan, Kevin Wei, Sihao Huang, Nitarshan Rajkumar, Elija Perrier, Seth Lazar, Gillian. Hadfield and Markus Anderljung
  “Infrastructure for AI Agents”
  In *arXiv:2501.10114*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2501.10114](https://dx.doi.org/10.48550/ARXIV.2501.10114)
- Chen et al. (2009)
  Chih-Chun Chen, Sylvia. Nagl and Christopher. Clack
  “A formalism for multi-level emergent behaviours in designed component-based systems and agent-based simulations”
  In *From System Complexity to Emergent Properties*
  Springer Berlin Heidelberg, 2009, pp. 101–114
  DOI: [10.1007/978-3-642-02199-2˙4](https://dx.doi.org/10.1007/978-3-642-02199-2_4)
- Chen et al. (2024)
  Eric Chen, Alexis Ghersengorin and Sami Petersen
  “Imperfect Recall and AI Delegation”, 2024
- Chen et al. (2024a)
  Hao Chen, Bhiksha Raj, Xing Xie and Jindong Wang
  “On Catastrophic Inheritance of Large Foundation Models”
  In *ArXiv* abs/2402.01909, 2024
  URL: <https://api.semanticscholar.org/CorpusID:267412499>
- Chen et al. (2024b)
  Junzhe Chen, Xuming Hu, Shuodi Liu, Shiyu Huang, Wei-Wei Tu, Zhaofeng He and Lijie Wen
  “LLMArena: Assessing Capabilities of Large Language Models in Dynamic Multi-Agent Environments”
  In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*
  Bangkok, Thailand: Association for Computational Linguistics, 2024, pp. 13055–13077
  DOI: [10.18653/v1/2024.acl-long.705](https://dx.doi.org/10.18653/v1/2024.acl-long.705)
- Chen et al. (2024c)
  Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang, Chenfei Yuan, Chi-Min Chan, Heyang Yu, Yaxi Lu, Yi-Hsin Hung, Chen Qian, Yujia Qin, Xin Cong, Ruobing Xie, Zhiyuan Liu, Maosong Sun and Jie Zhou
  “AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors”
  In *The Twelfth International Conference on Learning Representations*, 2024
  URL: <https://openreview.net/forum?id=EHg5GDnyq1>
- Cheung & Piliouras (2020)
  Yun Cheung and Georgios Piliouras
  “Chaos, Extremism and Optimism: Volume Analysis of Learning in Games”
  In *Advances in Neural Information Processing Systems 33: Annual Conference on Neural Information Processing Systems 2020, NeurIPS 2020, December 6-12, 2020, virtual*, 2020
  URL: <https://proceedings.neurips.cc/paper/2020/hash/66de6afdfb5fb3c21d0e3b5c3226bf00-Abstract.html>
- Chopra & White (2011)
  Samir Chopra and Laurence. White
  “A Legal Theory for Autonomous Artificial Agents”
  University of Michigan Press, 2011
  DOI: [10.3998/mpub.356801](https://dx.doi.org/10.3998/mpub.356801)
- Chotibut et al. (2020)
  Thiparat Chotibut, Fryderyk Falniowski, Michał Misiurewicz and Georgios Piliouras
  “The route to chaos in routing games: When is price of anarchy too optimistic?”
  In *Advances in Neural Information Processing Systems* 33, 2020, pp. 766–777
- Christiano (2018)
  Paul Christiano
  “Clarifying “AI alignment””, 2018
  AI Alignment
  URL: <https://ai-alignment.com/clarifying-ai-alignment-cec47cd69dd6>
- Christiano et al. (2018)
  Paul Christiano, Buck Shlegeris and Dario Amodei
  “Supervising Strong Learners by Amplifying Weak Experts”
  In *arXiv:1810.08575*, 2018
  DOI: [10.48550/arxiv.1810.08575](https://dx.doi.org/10.48550/arxiv.1810.08575)
- Christiano et al. (2021)
  Paul Christiano, Mark Xu and Ajeya Cotra
  “Eliciting Latent Knowledge”, 2021
  Alignment Forum
  URL: <https://www.alignmentforum.org/posts/qHCDysDnvhteW7kRd/arc-s-first-technical-report-eliciting-latent-knowledge>
- Christoffersen et al. (2023)
  Phillip.. Christoffersen, Andreas. Haupt and Dylan Hadfield-Menell
  “Get It in Writing: Formal Contracts Mitigate Social Dilemmas in Multi-Agent RL”
  In *Proceedings of the 2023 International Conference on Autonomous Agents and Multiagent Systems*, AAMAS ’23
  London, United Kingdom: International Foundation for Autonomous AgentsMultiagent Systems, 2023, pp. 448–456
- Cinelli et al. (2021)
  Matteo Cinelli, Gianmarco De, Alessandro Galeazzi, Walter Quattrociocchi and Michele Starnini
  “The echo chamber effect on social media”
  In *Proceedings of the National Academy of Sciences* 118.9
  National Acad Sciences, 2021, pp. e2023301118
- Cisco (2023)
  Cisco
  “What is a distributed denial-of-service (DDoS) attack?”, 2023
  URL: <https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/>
- Clark & Brennan (1991)
  Herbert. Clark and Susan. Brennan
  “Grounding in communication”
  In *Perspectives on socially shared cognition*
  Washington, DC, US: American Psychological Association, 1991, pp. 127–149
  DOI: [10.1037/10096-006](https://dx.doi.org/10.1037/10096-006)
- Clifton (2020)
  Jesse Clifton
  “Cooperation, Conflict, and Transformative Artificial Intelligence: A Research Agenda”, 2020
- Clune (2019)
  Jeff Clune
  “AI-GAs: AI-generating Algorithms, an Alternate Paradigm for Producing General Artificial Intelligence”
  In *arXiv:1905.10985*, 2019
  DOI: [10.48550/arxiv.1905.10985](https://dx.doi.org/10.48550/arxiv.1905.10985)
- Cohen et al. (2023)
  Alon Cohen, Argyrios Deligkas and Moran Koren
  “Learning approximately optimal contracts”
  In *Theoretical Computer Science* 980
  Elsevier BV, 2023, pp. 114219
  DOI: [10.1016/j.tcs.2023.114219](https://dx.doi.org/10.1016/j.tcs.2023.114219)
- Cohen & Havlin (2010)
  Reuven Cohen and Shlomo Havlin
  “Complex networks: structure, robustness and function”
  Cambridge university press, 2010
- Colognese & Jose (2023)
  Paul Colognese and Arun Jose
  “High-level interpretability: detecting an AI’s objectives”, 2023
  Alignment Forum
  URL: <https://www.alignmentforum.org/posts/tFYGdq9ivjA3rdaS2/high-level-interpretability-detecting-an-ai-s-objectives>
- Commission & Commission (2010)
  U.S. Commission and U.S.“& Commission
  “Findings Regarding the Market Events of May 6, 2010”, 2010
  URL: <https://www.sec.gov/files/marketevents-report.pdf>
- Conitzer et al. (2024)
  Vincent Conitzer, Rachel Freedman, Jobst Heitzig, Wesley. Holliday, Bob. Jacobs, Nathan Lambert, Milan Mossé, Eric Pacuit, Stuart Russell, Hailey Schoelkopf, Emanuel Tewolde and William. Zwicker
  “Position: Social Choice Should Guide AI Alignment in Dealing with Diverse Human Feedback”
  In *Forty-first International Conference on Machine Learning*, 2024
  URL: <https://openreview.net/forum?id=w1d9DOGymR>
- Conitzer & Oesterheld (2023)
  Vincent Conitzer and Caspar Oesterheld
  “Foundations of Cooperative AI”
  In *Proceedings of the Thirty-Seventh AAAI Conference on Artificial Intelligence* 37.13, 2023, pp. 15359–15367
- Conitzer & Sandholm (2004)
  Vincent Conitzer and Tuomas Sandholm
  “Computational criticisms of the revelation principle”
  In *Proceedings of the 5th ACM conference on Electronic commerce*, EC04
  ACM, 2004, pp. 262–263
  DOI: [10.1145/988772.988824](https://dx.doi.org/10.1145/988772.988824)
- Cooper et al. (2025)
  Emery Cooper, Caspar Oesterheld and Vincent Conitzer
  “Characterising Simulation-Based Program Equilibria”
  In *Proceedings of the Thirty-Ninth Annual AAAI Conference on Artificial Intelligence*, 2025
- Cooper et al. (1990)
  Russell. Cooper, Douglas. DeJong, Robert Forsythe and Thomas. Ross
  “Selection Criteria in Coordination Games: Some Experimental Results”
  In *The American Economic Review* 80.1
  American Economic Association, 1990, pp. 218–233
  URL: <http://www.jstor.org/stable/2006744>
- Copeland (2000)
  Dale. Copeland
  “The Origins of Major War”
  Cornell University Press, 2000
  URL: <http://www.jstor.org/stable/10.7591/j.ctt28546d>
- Couzin (2007)
  Iain Couzin
  “Collective minds”
  In *Nature* 445.7129, 2007, pp. 715–715
  DOI: [10.1038/445715a](https://dx.doi.org/10.1038/445715a)
- Cover & Thomas (2005)
  Thomas. Cover and Joy. Thomas
  “Elements of Information Theory”
  Wiley, 2005
  DOI: [10.1002/047174882x](https://dx.doi.org/10.1002/047174882x)
- Crawford (1991)
  John Crawford
  “Introduction to bifurcation theory”
  In *Reviews of Modern Physics* 63.4
  American Physical Society (APS), 1991, pp. 991–1037
  DOI: [10.1103/revmodphys.63.991](https://dx.doi.org/10.1103/revmodphys.63.991)
- Crawford & Sobel (1982)
  Vincent. Crawford and Joel Sobel
  “Strategic Information Transmission”
  In *Econometrica* 50.6
  JSTOR, 1982, pp. 1431
  DOI: [10.2307/1913390](https://dx.doi.org/10.2307/1913390)
- Critch et al. (2022)
  Andrew Critch, Michael Dennis and Stuart Russell
  “Cooperative and uncooperative institution designs: Surprises and problems in open-source game theory”
  In *arXiv:2208.07006*, 2022
  DOI: [10.48550/arxiv.2208.07006](https://dx.doi.org/10.48550/arxiv.2208.07006)
- Critch & Krueger (2020)
  Andrew Critch and David Krueger
  “AI Research Considerations for Human Existential Safety (ARCHES)”
  In *arXiv:2006.04948*, 2020
  DOI: [10.48550/arxiv.2006.04948](https://dx.doi.org/10.48550/arxiv.2006.04948)
- Critch & Russell (2023)
  Andrew Critch and Stuart Russell
  “TASRA: A Taxonomy and Analysis of Societal-Scale Risks from AI”
  In *arXiv:2306.06924*, 2023
- Crootof et al. (2023)
  Rebecca Crootof, Margot. Kaminski and W… Price
  “Humans in the Loop”
  In *Vanderbilt Law Review* 76, 2023, pp. 429
  URL: <https://heinonline.org/HOL/Page?handle=hein.journals/vanlr76&id=447&div=&collection=>
- Cross et al. (2025)
  Logan Cross, Violet Xiang, Agam Bhatia, Daniel.. Yamins and Nick Haber
  “Hypothetical Minds: Scaffolding Theory of Mind for Multi-Agent Tasks with Large Language Models”
  In *The Thirteenth International Conference on Learning Representations*, 2025
  URL: <https://openreview.net/forum?id=otW0TJOUYF>
- Csernatoni (2024)
  Raluca Csernatoni
  “Can Democracy Survive the Disruptive Power of AI?”, 2024
  URL: <https://carnegieendowment.org/research/2024/12/can-democracy-survive-the-disruptive-power-of-ai?lang=en>
- CSIS (2023)
  CSIS
  “Significant Cyber Incidents — Strategic Technologies Program”, 2023
  Center for Strategic & Internation Studies
  URL: <https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents>
- Curtis et al. (2024)
  Samuel Curtis, Ravi Iyer, Cameron Kirk-Giannini, Victoria Krakovna, David Krueger, Nathan Lambert, Bruno Marnette, Colleen McKenzie, Julian Michael, Evan Miyazono, Noyuri Mima, Aviv Ovadya, Luke Thorburn and Deger Turan
  “Research Agenda for Sociotechnical Approaches to AI Safety”, 2024
- Dafoe et al. (2021)
  Allan Dafoe, Yoram Bachrach, Gillian Hadfield, Eric Horvitz, Kate Larson and Thore Graepel
  “Cooperative AI: machines must learn to find common ground”
  In *Nature* 593.7857
  Nature Publishing Group UK London, 2021, pp. 33–36
  DOI: [10.1038/d41586-021-01170-0](https://dx.doi.org/10.1038/d41586-021-01170-0)
- Dafoe et al. (2020)
  Allan Dafoe, Edward Hughes, Yoram Bachrach, Tantum Collins, Kevin. McKee, Joel. Leibo, Kate Larson and Thore Graepel
  “Open Problems in Cooperative AI”
  In *arXiv:2012.08630*, 2020
  arXiv:[2012.08630 [cs.AI]](https://arxiv.org/abs/2012.08630)
- Dahia & Szabo (2024)
  Simranjeet Dahia and Claudia Szabo
  “Detecting Emergent Behavior in Complex Systems: A Machine Learning Approach”
  In *Proceedings of the 38th ACM SIGSIM Conference on Principles of Advanced Discrete Simulation*
  ACM, 2024, pp. 81–87
  DOI: [10.1145/3615979.3656064](https://dx.doi.org/10.1145/3615979.3656064)
- Dai et al. (2025)
  Jessica Dai, Paula Gradu, Inioluwa Raji and Benjamin Recht
  “From Individual Experience to Collective Evidence: A Reporting-Based Framework for Identifying Systemic Harms”
  In *arXiv:2502.08166*, 2025
  DOI: [10.48550/arxiv.2502.08166](https://dx.doi.org/10.48550/arxiv.2502.08166)
- Daley & Sadowski (2017)
  Brendan Daley and Philipp Sadowski
  “Magical thinking: A representation result”
  In *Theoretical Economics* 12.2
  Wiley Online Library, 2017, pp. 909–956
- Dalrymple et al. (2024)
  David”davidad” Dalrymple, Joar Skalse, Yoshua Bengio, Stuart Russell, Max Tegmark, Sanjit Seshia, Steve Omohundro, Christian Szegedy, Ben Goldhaber, Nora Ammann, Alessandro Abate, Joe Halpern, Clark Barrett, Ding Zhao, Tan Zhi-Xuan, Jeannette Wing and Joshua Tenenbaum
  “Towards Guaranteed Safe AI: A Framework for Ensuring Robust and Reliable AI Systems”
  In *arXiv:2405.06624*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2405.06624](https://dx.doi.org/10.48550/ARXIV.2405.06624)
- Darley & Latané (1968)
  John. Darley and Bibb Latané
  “Bystander intervention in emergencies: diffusion of responsibility.”
  In *Journal of personality and social psychology* 8.4p1
  American Psychological Association, 1968, pp. 377
- Daskalakis et al. (2011)
  Constantinos Daskalakis, Alan Deckelbaum and Anthony Kim
  “Near-Optimal No-Regret Algorithms for Zero-Sum Games”
  In *Proceedings of the Twenty-Second Annual ACM-SIAM Symposium on Discrete Algorithms*
  Society for IndustrialApplied Mathematics, 2011, pp. 235–254
  DOI: [10.1137/1.9781611973082.21](https://dx.doi.org/10.1137/1.9781611973082.21)
- Daskalakis et al. (2020)
  Constantinos Daskalakis, Dylan Foster and Noah Golowich
  “Independent Policy Gradient Methods for Competitive Reinforcement Learning”
  In *Advances in Neural Information Processing Systems* 33
  Curran Associates, Inc., 2020, pp. 5527–5540
  URL: <https://proceedings.neurips.cc/paper_files/paper/2020/file/3b2acfe2e38102074656ed938abf4ac3-Paper.pdf>
- Dawes & Messick (2000)
  Robyn Dawes and David Messick
  “Social Dilemmas”
  In *International Journal of Psychology* 35, 2000, pp. 111–
  DOI: [10.1146/annurev.ps.31.020180.001125](https://dx.doi.org/10.1146/annurev.ps.31.020180.001125)
- De et al. (2008)
  Geoffroy De, Herve Moulin and Nicolaus Tideman
  “Impartial division of a dollar”
  In *Journal of Economic Theory* 139.1
  Elsevier, 2008, pp. 176–191
- DeepSeek-AI et al. (2025)
  DeepSeek-AI, Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiao Bi, Xiaokang Zhang, Xingkai Yu, Yu Wu, Z.. Wu, Zhibin Gou, Zhihong Shao, Zhuoshu Li, Ziyi Gao, Aixin Liu, Bing Xue, Bingxuan Wang, Bochao Wu, Bei Feng, Chengda Lu, Chenggang Zhao, Chengqi Deng, Chenyu Zhang, Chong Ruan, Damai Dai, Deli Chen, Dongjie Ji, Erhang Li, Fangyun Lin, Fucong Dai, Fuli Luo, Guangbo Hao, Guanting Chen, Guowei Li, H. Zhang, Han Bao, Hanwei Xu, Haocheng Wang, Honghui Ding, Huajian Xin, Huazuo Gao, Hui Qu, Hui Li, Jianzhong Guo, Jiashi Li, Jiawei Wang, Jingchang Chen, Jingyang Yuan, Junjie Qiu, Junlong Li, J.. Cai, Jiaqi Ni, Jian Liang, Jin Chen, Kai Dong, Kai Hu, Kaige Gao, Kang Guan, Kexin Huang, Kuai Yu, Lean Wang, Lecong Zhang, Liang Zhao, Litong Wang, Liyue Zhang, Lei Xu, Leyi Xia, Mingchuan Zhang, Minghua Zhang, Minghui Tang, Meng Li, Miaojun Wang, Mingming Li, Ning Tian, Panpan Huang, Peng Zhang, Qiancheng Wang, Qinyu Chen, Qiushi Du, Ruiqi Ge, Ruisong Zhang, Ruizhe Pan, Runji Wang, R.. Chen, R.. Jin, Ruyi Chen, Shanghao Lu, Shangyan Zhou, Shanhuang Chen, Shengfeng Ye, Shiyu Wang, Shuiping Yu, Shunfeng Zhou, Shuting Pan, S.. Li, Shuang Zhou, Shaoqing Wu, Shengfeng Ye, Tao Yun, Tian Pei, Tianyu Sun, T. Wang, Wangding Zeng, Wanjia Zhao, Wen Liu, Wenfeng Liang, Wenjun Gao, Wenqin Yu, Wentao Zhang, W.. Xiao, Wei An, Xiaodong Liu, Xiaohan Wang, Xiaokang Chen, Xiaotao Nie, Xin Cheng, Xin Liu, Xin Xie, Xingchao Liu, Xinyu Yang, Xinyuan Li, Xuecheng Su, Xuheng Lin, X.. Li, Xiangyue Jin, Xiaojin Shen, Xiaosha Chen, Xiaowen Sun, Xiaoxiang Wang, Xinnan Song, Xinyi Zhou, Xianzu Wang, Xinxia Shan, Y.. Li, Y.. Wang, Y.. Wei, Yang Zhang, Yanhong Xu, Yao Li, Yao Zhao, Yaofeng Sun, Yaohui Wang, Yi Yu, Yichao Zhang, Yifan Shi, Yiliang Xiong, Ying He, Yishi Piao, Yisong Wang, Yixuan Tan, Yiyang Ma, Yiyuan Liu, Yongqiang Guo, Yuan Ou, Yuduan Wang, Yue Gong, Yuheng Zou, Yujia He, Yunfan Xiong, Yuxiang Luo, Yuxiang You, Yuxuan Liu, Yuyang Zhou, Y.. Zhu, Yanhong Xu, Yanping Huang, Yaohui Li, Yi Zheng, Yuchen Zhu, Yunxian Ma, Ying Tang, Yukun Zha, Yuting Yan, Z.. Ren, Zehui Ren, Zhangli Sha, Zhe Fu, Zhean Xu, Zhenda Xie, Zhengyan Zhang, Zhewen Hao, Zhicheng Ma, Zhigang Yan, Zhiyu Wu, Zihui Gu, Zijia Zhu, Zijun Liu, Zilin Li, Ziwei Xie, Ziyang Song, Zizheng Pan, Zhen Huang, Zhipeng Xu, Zhongyu Zhang and Zhen Zhang
  “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning”
  In *arXiv:2501.12948*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2501.12948](https://dx.doi.org/10.48550/ARXIV.2501.12948)
- Dennett (1971)
  Daniel Dennett
  “Intentional Systems”
  In *Journal of Philosophy* 68.4
  Philosophy Documentation Center, 1971, pp. 87–106
  DOI: [10.2307/2025382](https://dx.doi.org/10.2307/2025382)
- Dennis et al. (2020)
  Michael Dennis, Natasha Jaques, Eugene Vinitsky, Alexandre Bayen, Stuart Russell, Andrew Critch and Sergey Levine
  “Emergent complexity and zero-shot transfer via unsupervised environment design”
  In *Advances in neural information processing systems* 33, 2020, pp. 13049–13061
- Desai et al. (2018)
  Nishant Desai, Andrew Critch and Stuart. Russell
  “Negotiable reinforcement learning for pareto optimal sequential decision-making”
  In *Adv. Neural Inf. Process. Syst.* 31
  proceedings.neurips.cc, 2018
- Devillers et al. (2021)
  Laurence Devillers, Françoise Fogelman-Soulié and Ricardo Baeza-Yates
  “AI & Human Values: Inequalities, Biases, Fairness, Nudge, and Feedback Loops”
  In *Reflections on Artificial Intelligence for Humanity*
  Springer, 2021, pp. 76–89
- DiGiovanni & Clifton (2023)
  Anthony DiGiovanni and Jesse Clifton
  “Commitment games with conditional information disclosure”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 37.5, 2023, pp. 5616–5623
- DiGiovanni et al. (2024)
  Anthony DiGiovanni, Jesse Clifton and Nicolas Macé
  “Safe Pareto Improvements for Expected Utility Maximizers in Program Games”
  In *arXiv:2403.05103*, 2024
- DiGiovanni et al. (2022)
  Anthony DiGiovanni, Nicolas Macé and Jesse Clifton
  “Evolutionary Stability of Other-Regarding Preferences Under Complexity Costs”, 2022
  DOI: [10.48550/arxiv.2207.03178](https://dx.doi.org/10.48550/arxiv.2207.03178)
- Disarmament (2023)
  United for Disarmament
  “Lethal Autonomous Weapon Systems (LAWS)”
  In *United Nations Office for Disarmament Affairs*, 2023
  URL: <https://disarmament.unoda.org/the-convention-on-certain-conventional-weapons/background-on-laws-in-the-ccw/>
- Domingos et al. (2023)
  Eliasández Domingos, Francisco. Santos and Tom Lenaerts
  “EGTtools: Evolutionary game dynamics in Python”
  In *Iscience* 26.4
  Elsevier, 2023
- Domingos et al. (2022)
  Eliasández Domingos, Inês Terrucha, Rémi Suchon, Jelena Grujić, Juan. Burguillo, Francisco. Santos and Tom Lenaerts
  “Delegation to artificial agents fosters prosocial behaviors in the collective risk dilemma”
  In *Scientific Reports* 12.1
  Springer ScienceBusiness Media LLC, 2022
  DOI: [10.1038/s41598-022-11518-9](https://dx.doi.org/10.1038/s41598-022-11518-9)
- Doumbouya et al. (2024)
  Moussa Doumbouya, Ananjan Nandi, Gabriel Poesia, Davide Ghilardi, Anna Goldie, Federico Bianchi, Dan Jurafsky and Christopher. Manning
  “h4rm3l: A Dynamic Benchmark of Composable Jailbreak Attacks for LLM Safety Assessment”, 2024
  DOI: [10.48550/arxiv.2408.04811](https://dx.doi.org/10.48550/arxiv.2408.04811)
- Dowlin et al. (2016)
  Nathan Dowlin, Ran Gilad-Bachrach, Kim Laine, Kristin Lauter, Michael Naehrig and John Wernsing
  “CryptoNets: applying neural networks to encrypted data with high throughput and accuracy”
  In *Proceedings of the 33rd International Conference on International Conference on Machine Learning - Volume 48*, ICML’16
  New York, NY, USA: JMLR.org, 2016, pp. 201–210
- Draguns et al. (2024)
  Andis Draguns, Andrew Gritsevskiy, Sumeet Motwani and Christian de Witt
  “Unelicitable Backdoors via Cryptographic Transformer Circuits”
  In *The Thirty-eighth Annual Conference on Neural Information Processing Systems*, 2024
  URL: <https://openreview.net/forum?id=a560KLF3v5>
- Drechsler et al. (2023)
  Itamar Drechsler, Alexi Savov, Philipp Schnabl and Olivier Wang
  “Deposit Franchise Runs”, 2023
  DOI: [10.3386/w31138](https://dx.doi.org/10.3386/w31138)
- Drexler (2019)
  K.. Drexler
  “Reframing Superintelligence: Comprehensive AI Services as General Intelligence”, 2019
- Drexler (2022)
  K. Drexler
  “Applying superintelligence without collusion”, 2022
  Alignment Forum
  URL: <https://www.alignmentforum.org/posts/HByDKLLdaWEcA2QQD/applying-superintelligence-without-collusion>
- Driessen (1988)
  Theo Driessen
  “Cooperative games, solutions and applications”
  In *Cooperative games, solutions and applications*, Theory and decision library. Series C, Game theory, mathematical programming, and operations research
  Dordrecht ;: Kluwer Academic Publishers, 1988
- Du et al. (2023)
  Yali Du, Joel. Leibo, Usman Islam, Richard Willis and Peter Sunehag
  “A Review of Cooperation in Multi-Agent Learning”
  In *arXiv:2312.05162*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2312.05162](https://dx.doi.org/10.48550/ARXIV.2312.05162)
- Duan et al. (2024)
  Jinhao Duan, Renming Zhang, James Diffenderfer, Bhavya Kailkhura, Lichao Sun, Elias Stengel-Eskin, Mohit Bansal, Tianlong Chen and Kaidi Xu
  “GTBench: Uncovering the Strategic Reasoning Capabilities of LLMs via Game-Theoretic Evaluations”
  In *The Thirty-eighth Annual Conference on Neural Information Processing Systems*, 2024
  URL: <https://openreview.net/forum?id=ypggxVWIv2>
- Dughmi (2019)
  Shaddin Dughmi
  “On the hardness of designing public signals”
  In *Games and Economic Behavior* 118
  Elsevier BV, 2019, pp. 609–625
  DOI: [10.1016/j.geb.2018.08.001](https://dx.doi.org/10.1016/j.geb.2018.08.001)
- Duong & Han (2021)
  Manh Duong and The Han
  “Cost efficiency of institutional incentives for promoting cooperation in finite populations”
  In *Proceedings of the Royal Society A* 477.2254
  The Royal Society, 2021, pp. 20210568
- Dwork (2006)
  Cynthia Dwork
  “Differential privacy”
  In *International colloquium on automata, languages, and programming*, 2006, pp. 1–12
  Springer
- Elliott et al. (2014)
  Matthew Elliott, Benjamin Golub and Matthew. Jackson
  “Financial Networks and Contagion”
  In *American Economic Review* 104.10, 2014, pp. 3115–3153
  DOI: [10.1257/aer.104.10.3115](https://dx.doi.org/10.1257/aer.104.10.3115)
- Ellsberg (1968)
  Daniel Ellsberg
  “The theory and practice of blackmail”
  Rand Corporation Santa Monica, CA, 1968
- Ely & Szentes (2023)
  Jeffrey. Ely and Balazs Szentes
  “Natural Selection of Artificial Intelligence”, 2023
- Emmons et al. (2022)
  Scott Emmons, Caspar Oesterheld, Andrew Critch, Vincent Conitzer and Stuart Russell
  “For Learning in Symmetric Teams, Local Optima are Global Nash Equilibria”
  In *Proceedings of the 39th International Conference on Machine Learning* 162, Proceedings of Machine Learning Research
  PMLR, 2022, pp. 5924–5943
  URL: <https://proceedings.mlr.press/v162/emmons22a.html>
- Epoch (2023)
  Epoch
  “ML trends”, 2023
  Epoch
  URL: <https://epochai.org/trends>
- EU (2024)
  EU
  “REGULATION (EU) 2024/1689 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 13 June 2024: laying down harmonised rules on artificial intelligence and amending Regulations (EC) No 300/2008, (EU) No 167/2013, (EU) No 168/2013, (EU) 2018/858, (EU) 2018/1139 and (EU) 2019/2144 and Directives 2014/90/EU, (EU) 2016/797 and (EU) 2020/1828 (Artificial Intelligence Act)” Text with EEA relevance
  In *Official Journal of the European Union* L series.2024/1689, 2024
- Evans et al. (2021)
  Owain Evans, Owen Cotton-Barratt, Lukas Finnveden, Adam Bales, Avital Balwit, Peter Wills, Luca Righetti and William Saunders
  “Truthful AI: Developing and Governing AI That Does Not Lie”
  In *arXiv:2110.06674*
  arXiv, 2021
  DOI: [10.48550/ARXIV.2110.06674](https://dx.doi.org/10.48550/ARXIV.2110.06674)
- Everitt et al. (2021)
  Tom Everitt, Ryan Carey, Eric. Langlois, Pedro. Ortega and Shane Legg
  “Agent Incentives: A Causal Perspective”
  In *Thirty-Fifth AAAI Conference on Artificial Intelligence, AAAI 2021, Thirty-Third Conference on Innovative Applications of Artificial Intelligence, IAAI 2021, The Eleventh Symposium on Educational Advances in Artificial Intelligence, EAAI 2021, Virtual Event, February 2-9, 2021*
  AAAI Press, 2021, pp. 11487–11495
  URL: <https://ojs.aaai.org/index.php/AAAI/article/view/17368>
- Ezrachi & Stucke (2017)
  Ariel Ezrachi and Maurice. Stucke
  “Artificial Intelligence & Collusion: When Computers Inhibit Competition”
  In *University of Illinois Law Review*, 2017
- Farrell & Rabin (1996)
  Joseph Farrell and Matthew Rabin
  “Cheap Talk”
  In *The Journal of Economic Perspectives* 10.3
  American Economic Association, 1996, pp. 103–118
  URL: <http://www.jstor.org/stable/2138522>
- Farrell & Rabin (1996a)
  Joseph Farrell and Matthew Rabin
  “Cheap talk”
  In *Journal of Economic perspectives* 10.3
  American Economic Association, 1996, pp. 103–118
- Fearon (1995)
  James. Fearon
  “Rationalist explanations for war”
  In *Int. Organ.* 49.3
  Cambridge University Press, 1995, pp. 379–414
- Feng et al. (2024)
  Xiachong Feng, Longxu Dou, Ella Li, Qinghao Wang, Haochuan Wang, Yu Guo, Chang Ma and Lingpeng Kong
  “A Survey on Large Language Model-Based Social Agents in Game-Theoretic Scenarios”
  In *arXiv:2412.03920*, 2024
- Fernandes et al. (2020)
  Pedro. Fernandes, Francisco. Santos and Manuel Lopes
  “Adoption Dynamics and Societal Impact of AI Systems in Complex Networks”
  In *Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’20
  New York, NY, USA: Association for Computing Machinery, 2020, pp. 258–264
  DOI: [10.1145/3375627.3375847](https://dx.doi.org/10.1145/3375627.3375847)
- Fernando et al. (2023)
  Chrisantha Fernando, Dylan Banarse, Henryk Michalewski, Simon Osindero and Tim Rocktäschel
  “Promptbreeder: Self-Referential Self-Improvement Via Prompt Evolution”
  In *arXiv:2309.16797*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2309.16797](https://dx.doi.org/10.48550/ARXIV.2309.16797)
- Ferrara (2023)
  Emilio Ferrara
  “Should ChatGPT be Biased? Challenges and Risks of Bias in Large Language Models”
  In *arXiv:2304.03738*, 2023
  DOI: [10.48550/arxiv.2304.03738](https://dx.doi.org/10.48550/arxiv.2304.03738)
- Ferreira et al. (2021)
  Fernando… Ferreira, Amir. Gandomi and Rodrigo.. Cardoso
  “Artificial Intelligence Applied to Stock Market Trading: A Review”
  In *IEEE Access* 9
  Institute of ElectricalElectronics Engineers (IEEE), 2021, pp. 30898–30917
  DOI: [10.1109/access.2021.3058133](https://dx.doi.org/10.1109/access.2021.3058133)
- Fickinger et al. (2020)
  Arnaud Fickinger, Simon Zhuang, Dylan Hadfield-Menell and Stuart Russell
  “Multi-principal assistance games”
  In *arXiv:2007.09540*, 2020
- Figueiredo et al. (2024)
  João Figueiredo, Afonso Carvalho, Daniel Castro, Daniel Gonçalves and Nuno Santos
  “On the Feasibility of Fully AI-automated Vishing Attacks”
  In *arXiv:2409.13793*, 2024
  DOI: [10.48550/arxiv.2409.13793](https://dx.doi.org/10.48550/arxiv.2409.13793)
- Fish et al. (2023)
  Sara Fish, Paul Gölz, David. Parkes, Ariel. Procaccia, Gili Rusak, Itai Shapira and Manuel Wüthrich
  “Generative Social Choice”
  In *arXiv:2309.01291*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2309.01291](https://dx.doi.org/10.48550/ARXIV.2309.01291)
- Fish et al. (2024)
  Sara Fish, Yannai. Gonczarowski and Ran. Shorrer
  “Algorithmic Collusion by Large Language Models”
  In *arXiv:2404.00806*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2404.00806](https://dx.doi.org/10.48550/ARXIV.2404.00806)
- Fishkin et al. (2019)
  James Fishkin, Nikhil Garg, Lodewijk Gelauff, Ashish Goel, Sukolsak Sakshuwong, Alice Siu, Kamesh Munagala and Sravya Yandamuri
  “Deliberative Democracy with the Online Deliberation Platform”
  In *Proceedings of the Seventh AAAI Conference on Human Computation and Crowdsourcing*, 2019
- Foerster et al. (2018)
  Jakob Foerster, Richard. Chen, Maruan Al-Shedivat, Shimon Whiteson, Pieter Abbeel and Igor Mordatch
  “Learning with Opponent-learning Awareness”
  In *Proceedings of the 17th International Conference on Autonomous Agents and MultiAgent Systems*, AAMAS ’18
  Stockholm, Sweden: International Foundation for Autonomous AgentsMultiagent Systems, 2018, pp. 122–130
- Foerster et al. (2016)
  Jakob. Foerster, Yannis. Assael, Nando de Freitas and Shimon Whiteson
  “Learning to Communicate with Deep Multi-agent Reinforcement Learning”
  In *Proceedings of the 30th International Conference on Neural Information Processing Systems*, NIPS’16
  Barcelona, Spain: Curran Associates Inc., 2016, pp. 2145–2153
- Fontana & Terna (2015)
  Magda Fontana and Pietro Terna
  “From Agent-Based Models to Network Analysis (and Return): The Policy-Making Perspective”
  In *Journal on Policy and Complex Systems*, 2015
- Forsberg (2008)
  Erika Forsberg
  “Polarization and ethnic conflict in a widened strategic setting”
  In *Journal of Peace Research* 45.2
  Sage Publications Sage UK: London, England, 2008, pp. 283–300
- Fort (2023)
  Stanislav Fort
  “GPT-4(V) vs Dall-e 3”
  In *Twitter*, 2023
  Twitter
  URL: <https://twitter.com/stanislavfort/status/1713603557046276334>
- Fosong et al. (2022)
  Elliot Fosong, Arrasy Rahman, Ignacio Carlucho and Stefano. Albrecht
  “Few-Shot Teamwork”
  In *arXiv:2207.09300*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2207.09300](https://dx.doi.org/10.48550/ARXIV.2207.09300)
- Foxabbott et al. (2023)
  Jack Foxabbott, Sam Deverett, Kaspar Senft, Samuel Dower and Lewis Hammond
  “Defining and Mitigating Collusion in Multi-Agent Systems”
  In *Multi-Agent Security Workshop at NeurIPS*, 2023
- Franzmeyer et al. (2023)
  Tim Franzmeyer, Stephen McAleer, Joao. Henriques, Jakob Foerster, Philip Torr, Adel Bibi and Christian Witt
  “Illusory Attacks: Information-theoretic detectability matters in adversarial attacks”
  In *The Twelfth International Conference on Learning Representations*, 2023
  URL: <https://openreview.net/forum?id=F5dhGCdyYh>
- Friedenberg & Halpern (2019)
  Meir Friedenberg and Joseph. Halpern
  “Blameworthiness in multi-agent settings”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 33.01, 2019, pp. 525–532
- Friedenberg & Halpern (2023)
  Meir Friedenberg and Joseph. Halpern
  “Joint Behavior and Common Belief”
  In *Electronic Proceedings in Theoretical Computer Science* 379
  Open Publishing Association, 2023, pp. 221–232
  DOI: [10.4204/eptcs.379.18](https://dx.doi.org/10.4204/eptcs.379.18)
- Friston et al. (2022)
  Karl Friston, Maxwell Ramstead, Alex Kiefer, Alexander Tschantz, Christopher Buckley, Mahault Albarracin, Riddhi Pitliya, Conor Heins, Brennan Klein, Beren Millidge, Dalton Sakthivadivel, Toby Smithe, Magnus Koudahl, Safae Tremblay, Capm Petersen, Kaiser Fung, Jason Fox, Steven Swanson, Dan Mapes and Gabriel René
  “Designing Ecosystems of Intelligence from First Principles”
  In *Collective Intelligence, 3(1), 2024* 3.1
  SAGE Publications, 2022
  DOI: [10.1177/26339137231222481](https://dx.doi.org/10.1177/26339137231222481)
- Fu et al. (2023)
  Yao Fu, Hao Peng, Tushar Khot and Mirella Lapata
  “Improving Language Model Negotiation with Self-Play and In-Context Learning from AI Feedback”
  In *arXiv:2305.10142*, 2023
  DOI: [10.48550/arxiv.2305.10142](https://dx.doi.org/10.48550/arxiv.2305.10142)
- Gabriel et al. (2024)
  Iason Gabriel, Arianna Manzini, Geoff Keeling, Lisa Hendricks, Verena Rieser, Hasan Iqbal, Nenad Tomašev, Ira Ktena, Zachary Kenton, Mikel Rodriguez, Seliem El-Sayed, Sasha Brown, Canfer Akbulut, Andrew Trask, Edward Hughes, A. Bergman, Renee Shelby, Nahema Marchal, Conor Griffin, Juan Mateos-Garcia, Laura Weidinger, Winnie Street, Benjamin Lange, Alex Ingerman, Alison Lentz, Reed Enger, Andrew Barakat, Victoria Krakovna, John Siy, Zeb Kurth-Nelson, Amanda McCroskery, Vijay Bolina, Harry Law, Murray Shanahan, Lize Alberts, Borja Balle, Sarah de Haas, Yetunde Ibitoye, Allan Dafoe, Beth Goldberg, Sébastien Krier, Alexander Reese, Sims Witherspoon, Will Hawkins, Maribeth Rauh, Don Wallace, Matija Franklin, Josh. Goldstein, Joel Lehman, Michael Klenk, Shannon Vallor, Courtney Biles, Meredith Morris, Helen King, Blaiseüera Arcas, William Isaac and James Manyika
  “The Ethics of Advanced AI Assistants”
  In *arXiv:2404.16244*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2404.16244](https://dx.doi.org/10.48550/ARXIV.2404.16244)
- Gaertner (2010)
  Wulf Gaertner
  “A primer in social choice theory” Literaturverz. S. [201] - 207. - Literaturangaben, LSE perspectives in economic analysis
  Oxford [u.a.]: Oxford Univ. Press, 2010
- Galla & Farmer (2013)
  Tobias Galla and J. Farmer
  “Complex Dynamics in Learning Complicated Games”
  In *Proceedings of the National Academy of Sciences* 110.4, 2013, pp. 1232–1236
  DOI: [10.1073/pnas.1109672110](https://dx.doi.org/10.1073/pnas.1109672110)
- Ganguli et al. (2022)
  Deep Ganguli, Liane Lovitt, Jackson Kernion, Amanda Askell, Yuntao Bai, Saurav Kadavath, Ben Mann, Ethan Perez, Nicholas Schiefer, Kamal Ndousse, Andy Jones, Sam Bowman, Anna Chen, Tom Conerly, Nova DasSarma, Dawn Drain, Nelson Elhage, Sheer El-Showk, Stanislav Fort, Zac Hatfield-Dodds, Tom Henighan, Danny Hernandez, Tristan Hume, Josh Jacobson, Scott Johnston, Shauna Kravec, Catherine Olsson, Sam Ringer, Eli Tran-Johnson, Dario Amodei, Tom Brown, Nicholas Joseph, Sam McCandlish, Chris Olah, Jared Kaplan and Jack Clark
  “Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned”
  In *arXiv:2208.07858*, 2022
  DOI: [10.48550/arxiv.2209.07858](https://dx.doi.org/10.48550/arxiv.2209.07858)
- Gao et al. (2016)
  Jianxi Gao, Baruch Barzel and Albert-László Barabási
  “Universal resilience patterns in complex networks”
  In *Nature* 530.7590
  Nature Publishing Group UK London, 2016, pp. 307–312
- Gao et al. (2020)
  Leo Gao, Stella Biderman, Sid Black, Laurence Golding, Travis Hoppe, Charles Foster, Jason Phang, Horace He, Anish Thite, Noa Nabeshima, Shawn Presser and Connor Leahy
  “The Pile: An 800GB Dataset of Diverse Text for Language Modeling”
  In *ArXiv* abs/2101.00027, 2020
  URL: <https://api.semanticscholar.org/CorpusID:230435736>
- Gavrilets (2015)
  Sergey Gavrilets
  “Collective action problem in heterogeneous groups”
  In *Philosophical Transactions of the Royal Society B: Biological Sciences* 370.1683
  The Royal Society, 2015, pp. 20150016
- Ge et al. (2020)
  Yingqiang Ge, Shuya Zhao, Honglu Zhou, Changhua Pei, Fei Sun, Wenwu Ou and Yongfeng Zhang
  “Understanding echo chambers in e-commerce recommender systems”
  In *Proceedings of the 43rd international ACM SIGIR conference on research and development in information retrieval*, 2020, pp. 2261–2270
- Gebru et al. (2021)
  Timnit Gebru, Jamie Morgenstern, Briana Vecchione, Jennifer Vaughan, Hanna Wallach, Halé Iii and Kate Crawford
  “Datasheets for datasets”
  In *Communications of the ACM* 64.12, 2021, pp. 86–92
  DOI: [10.1145/3458723](https://dx.doi.org/10.1145/3458723)
- Gemp et al. (2022)
  Ian. Gemp, Kevin. McKee, Richard Everett, Edgar. Duéñez-Guzmán, Yoram Bachrach, David Balduzzi and Andrea Tacchetti
  “D3C: Reducing the Price of Anarchy in Multi-Agent Learning”
  In *21st International Conference on Autonomous Agents and Multiagent Systems, AAMAS 2022, Auckland, New Zealand, May 9-13, 2022*
  International Foundation for Autonomous AgentsMultiagent Systems (IFAAMAS), 2022, pp. 498–506
  DOI: [10.5555/3535850.3535907](https://dx.doi.org/10.5555/3535850.3535907)
- Gerstgrasser & Parkes (2023)
  Matthias Gerstgrasser and David Parkes
  “Oracles & followers: stackelberg equilibria in deep multi-agent reinforcement learning”
  In *Proceedings of the 40th International Conference on Machine Learning*, ICML’23
  Honolulu, Hawaii, USA: JMLR.org, 2023
- Gerstgrasser et al. (2024)
  Matthias Gerstgrasser, Rylan Schaeffer, Apratim Dey, Rafael Rafailov, Tomasz Korbak, Henry Sleight, Rajashree Agrawal, John Hughes, Dhruv Pai, Andrey Gromov, Dan Roberts, Diyi Yang, David. Donoho and Sanmi Koyejo
  “Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data”
  In *First Conference on Language Modeling*, 2024
  URL: <https://openreview.net/forum?id=5B2K4LRgmz>
- Ghodsi et al. (2017)
  Zahra Ghodsi, Tianyu Gu and Siddharth Garg
  “SafetyNets: Verifiable Execution of Deep Neural Networks on an Untrusted Cloud”
  In *Proceedings of the 31st International Conference on Neural Information Processing Systems*, NIPS’17
  Long Beach, California, USA: Curran Associates Inc., 2017, pp. 4675–4684
- Gibbard (1973)
  Allan Gibbard
  “Manipulation of Voting Schemes: A General Result”
  In *Econometrica* 41.4
  JSTOR, 1973, pp. 587
  DOI: [10.2307/1914083](https://dx.doi.org/10.2307/1914083)
- Gilbert (2019)
  Nigel Gilbert
  “Agent-based models”
  Sage Publications, 2019
- Gilbert et al. (2022)
  Thomas Gilbert, Nathan Lambert, Sarah Dean, Tom Zick and Aaron Snoswell
  “Reward Reports for Reinforcement Learning”
  In *arXiv:2204.10817*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2204.10817](https://dx.doi.org/10.48550/ARXIV.2204.10817)
- Gilbert et al. (2023)
  Thomas Gilbert, Nathan Lambert, Sarah Dean, Tom Zick, Aaron Snoswell and Soham Mehta
  “Reward Reports for Reinforcement Learning”
  In *Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 84–130
  DOI: [10.1145/3600211.3604698](https://dx.doi.org/10.1145/3600211.3604698)
- Gillies (1959)
  Donald. Gillies
  “Solutions to general non-zero-sum games”
  In *Contributions to the Theory of Games* 4.40, 1959, pp. 47–85
- Gleave et al. (2020)
  Adam Gleave, Michael Dennis, Cody Wild, Neel Kant, Sergey Levine and Stuart Russell
  “Adversarial Policies: Attacking Deep Reinforcement Learning”
  In *8th International Conference on Learning Representations, ICLR 2020, Addis Ababa, Ethiopia, April 26-30, 2020*
  OpenReview.net, 2020
  URL: <https://openreview.net/forum?id=HJgEMpVFwB>
- Gleick (1998)
  James Gleick
  “Chaos” Originally published: New York: Viking, 1987; London: Heinemann, 1988, Vintage books
  London: Vintage, 1998
- Goddard et al. (2012)
  Kate Goddard, Abdul Roudsari and Jeremy. Wyatt
  “Automation bias: a systematic review of frequency, effect mediators, and mitigators”
  In *Journal of the American Medical Informatics Association* 19.1, 2012, pp. 121–127
  DOI: [10.1136/amiajnl-2011-000089](https://dx.doi.org/10.1136/amiajnl-2011-000089)
- Goel et al. (2025)
  Shashwat Goel, Joschka Struber, Ilze Auzina, Karuna. Chandra, Ponnurangam Kumaraguru, Douwe Kiela, Ameya Prabhu, Matthias Bethge and Jonas Geiping
  “Great Models Think Alike and this Undermines AI Oversight”
  In *arXiv:2502.04313*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2502.04313](https://dx.doi.org/10.48550/ARXIV.2502.04313)
- Goldstein et al. (2023)
  Josh. Goldstein, Renee DiResta, Girish Sastry, Micah Musser, Matthew Gentzel and Katerina Sedova
  “Generative Language Models and AutomatedInfluence Operations: Emerging Threats and Potential Mitigations”, 2023
- Google DeepMind (2024)
  Google DeepMind
  “Introducing Gemini 2.0: our new AI model for the agentic era”, 2024
  URL: <https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/#ceo-message>
- Gordon (1996)
  Deborah. Gordon
  “The organization of work in social insect colonies”
  In *Nature* 380.6570
  Nature Publishing Group UK London, 1996, pp. 121–124
- Gordon et al. (2022)
  Mitchell. Gordon, Michelle. Lam, Joon Park, Kayur Patel, Jeff Hancock, Tatsunori Hashimoto and Michael. Bernstein
  “Jury Learning: Integrating Dissenting Voices into Machine Learning Models”
  In *CHI Conference on Human Factors in Computing Systems*, CHI ’22
  ACM, 2022, pp. 1–19
  DOI: [10.1145/3491102.3502004](https://dx.doi.org/10.1145/3491102.3502004)
- Gosmar et al. (2024)
  Diego Gosmar, Deborah. Dahl, Emmett Coin and David Attwater
  “AI Multi-Agent Interoperability Extension for Managing Multiparty Conversations”, 2024
  DOI: [10.48550/arxiv.2411.05828](https://dx.doi.org/10.48550/arxiv.2411.05828)
- Grafen (1990)
  Alan Grafen
  “Biological signals as handicaps”
  In *Journal of theoretical biology* 144.4
  Elsevier, 1990, pp. 517–546
- Green (2022)
  Ben Green
  “The flaws of policies requiring human oversight of government algorithms”
  In *Computer Law & Security Review* 45, 2022, pp. 105681
  DOI: [10.1016/j.clsr.2022.105681](https://dx.doi.org/10.1016/j.clsr.2022.105681)
- Green & Chen (2020)
  Ben Green and Yiling Chen
  “Algorithm-in-the-Loop Decision Making”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 34.09, 2020, pp. 13663–13664
  DOI: [10.1609/aaai.v34i09.7115](https://dx.doi.org/10.1609/aaai.v34i09.7115)
- Greenblatt et al. (2023)
  Ryan Greenblatt, Buck Shlegeris, Kshitij Sachan and Fabien Roger
  “AI Control: Improving Safety Despite Intentional Subversion”
  In *arXiv:2312.06942*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2312.06942](https://dx.doi.org/10.48550/ARXIV.2312.06942)
- Griffin et al. (2024)
  Charlie Griffin, Louis Thomson, Buck Shlegeris and Alessandro Abate
  “Games for AI Control: Models of Safety Evaluations of AI Deployment Protocols”
  In *arXiv:2409.07985*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2409.07985](https://dx.doi.org/10.48550/ARXIV.2409.07985)
- Grossman (1981)
  Sanford. Grossman
  “The Informational Role of Warranties and Private Disclosure about Product Quality”
  In *The Journal of Law and Economics* 24.3
  The University of Chicago Press, 1981, pp. 461–483
- Grupen et al. (2022)
  Niko Grupen, Natasha Jaques, Been Kim and Shayegan Omidshafiei
  “Concept-based Understanding of Emergent Multi-Agent Behavior”
  In *Deep Reinforcement Learning Workshop at NeurIPS*, 2022
  URL: <https://openreview.net/forum?id=zt5JpGQ8WhH>
- Gu et al. (2024)
  Xiangming Gu, Xiaosen Zheng, Tianyu Pang, Chao Du, Qian Liu, Ye Wang, Jing Jiang and Min Lin
  “Agent Smith: A Single Image Can Jailbreak One Million Multimodal LLM Agents Exponentially Fast”
  In *Proceedings of the 41st International Conference on Machine Learning* 235, Proceedings of Machine Learning Research
  PMLR, 2024, pp. 16647–16672
  URL: <https://proceedings.mlr.press/v235/gu24e.html>
- Guo et al. (2023)
  Hao Guo, Chen Shen, Shuyue Hu, Junliang Xing, Pin Tao, Yuanchun Shi and Zhen Wang
  “Facilitating cooperation in human-agent hybrid populations through autonomous agents”
  In *Iscience* 26.11
  Elsevier, 2023
- Hadfield-Menell et al. (2019)
  Dylan Hadfield-Menell, McKane Andrus and Gillian Hadfield
  “Legible normativity for AI alignment: The value of silly rules”
  In *Proceedings of the 2019 AAAI/ACM Conference on AI, Ethics, and Society*, 2019, pp. 115–121
- Hadfield-Menell et al. (2016)
  Dylan Hadfield-Menell, Anca Dragan, Pieter Abbeel and Stuart Russell
  “Cooperative Inverse Reinforcement Learning”
  In *Proceedings of the 30th International Conference on Neural Information Processing Systems*, NIPS’16
  Barcelona, Spain: Curran Associates Inc., 2016, pp. 3916–3924
- Haghtalab et al. (2024)
  Nika Haghtalab, Nicole Immorlica, Brendan Lucier, Markus Mobius and Divyarthi Mohan
  “Communicating with Anecdotes”
  In *15th Innovations in Theoretical Computer Science Conference, ITCS* 287, LIPIcs, 2024, pp. 57:1–57:2
- Haghtalab et al. (2022)
  Nika Haghtalab, Michael Jordan and Eric Zhao
  “On-demand sampling: Learning optimally from multiple distributions”
  In *Advances in Neural Information Processing Systems* 35, 2022, pp. 406–419
- Haghtalab et al. (2025)
  Nika Haghtalab, Mingda Qiao and Kunhe Yang
  “Platforms for Efficient and Incentive-Aware Collaboration”
  In *Proceedings of the 2025 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA)*, 2025, pp. 2607–2628
  SIAM
- Halawi et al. (2024)
  Danny Halawi, Alexander Wei, Eric Wallace, Tony Wang, Nika Haghtalab and Jacob Steinhardt
  “Covert Malicious Finetuning: Challenges in Safeguarding LLM Adaptation”
  In *Forty-first International Conference on Machine Learning, ICML 2024*, 2024
- Halpern & Kleiman-Weiner (2018)
  Joseph. Halpern and Max Kleiman-Weiner
  “Towards Formal Definitions of Blameworthiness, Intention, and Moral Responsibility”
  In *Proceedings of the Thirty-Second AAAI Conference on Artificial Intelligence, (AAAI-18), the 30th innovative Applications of Artificial Intelligence (IAAI-18), and the 8th AAAI Symposium on Educational Advances in Artificial Intelligence (EAAI-18), New Orleans, Louisiana, USA, February 2-7, 2018*
  AAAI Press, 2018, pp. 1853–1860
  URL: <https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16824>
- Halpern & Pass (2018)
  Joseph. Halpern and Rafael Pass
  “Game theory with translucent players”
  In *International Journal of Game Theory* 47.3
  Springer, 2018, pp. 949–976
- Hammond & Adam-Day (2025)
  Lewis Hammond and Sam Adam-Day
  “Neural Interactive Proofs” Forthcoming
  In *The Thirteenth International Conference on Learning Representations*, 2025
- Hammond et al. (2023)
  Lewis Hammond, James Fox, Tom Everitt, Ryan Carey, Alessandro Abate and Michael Wooldridge
  “Reasoning about causality in games”
  In *Artificial Intelligence* 320
  Elsevier BV, 2023, pp. 103919
  DOI: [10.1016/j.artint.2023.103919](https://dx.doi.org/10.1016/j.artint.2023.103919)
- Han (2022)
  The Han
  “Emergent behaviours in multi-agent systems with Evolutionary Game Theory.”
  In *AI Communications* 35.4, 2022
- Han et al. (2024)
  The Han, Manh Duong and Matjaz Perc
  “Evolutionary mechanisms that promote cooperation may not promote social welfare”
  In *Journal of the Royal Society Interface* 21.220
  The Royal Society, 2024, pp. 20240547
- Han et al. (2021)
  The Han, Cedric Perret and Simon. Powers
  “When to (or not to) trust intelligent machines: Insights from an evolutionary game theory analysis of trust in repeated games”
  In *Cognitive Systems Research* 68
  Elsevier, 2021, pp. 111–124
  DOI: [10.1016/j.cogsys.2021.02.003](https://dx.doi.org/10.1016/j.cogsys.2021.02.003)
- Hao et al. (2017)
  Jianye Hao, Jun Sun, Guangyong Chen, Zan Wang, Chao Yu and Zhong Ming
  “Efficient and Robust Emergence of Norms through Heuristic Collective Learning”
  In *ACM Trans. Auton. Adapt. Syst.* 12.4
  New York, NY, USA: Association for Computing Machinery, 2017
  DOI: [10.1145/3127498](https://dx.doi.org/10.1145/3127498)
- Hardin (1968)
  G. Hardin
  “The tragedy of the commons”
  In *Science* 162, 1968, pp. 1243–1248
- Hardt et al. (2016)
  Moritz Hardt, Eric Price and Nati Srebro
  “Equality of opportunity in supervised learning”
  In *Advances in neural information processing systems* 29, 2016
- Hardy et al. (2024)
  Amelia Hardy, Anka Reuel, Kiana Meimandi, Lisa Soder, Allie Griffith, Dylan. Asmar, Sanmi Koyejo, Michael. Bernstein and Mykel. Kochenderfer
  “More than Marketing? On the Information Value of AI Benchmarks for Practitioners”
  In *arXiv:2412.05520*, 2024
- Harrenstein et al. (2007)
  Paul Harrenstein, Felix Brandt and Felix Fischer
  “Commitment and extortion”
  In *Proceedings of the 6th international joint conference on Autonomous agents and multiagent systems*, 2007, pp. 1–8
- Harrington (2019)
  Joseph. Harrington
  “Developing Competition Law for Collusion by Autonomous Artificial Agents”
  In *Journal of Competition Law & Economics* 14.3, 2019, pp. 331–363
  DOI: [10.1093/joclec/nhy016](https://dx.doi.org/10.1093/joclec/nhy016)
- Harsanyi & Selten (1988)
  John. Harsanyi and Reinhard Selten
  “A general theory of equilibrium selection in games”
  In *MIT Press Books* 1
  The MIT Press, 1988
- Hart & Mas-Colell (2000)
  Sergiu Hart and Andreu Mas-Colell
  “A Simple Adaptive Procedure Leading to Correlated Equilibrium”
  In *Econometrica* 68.5
  The Econometric Society, 2000, pp. 1127–1150
  DOI: [10.1111/1468-0262.00153](https://dx.doi.org/10.1111/1468-0262.00153)
- Hasan et al. (2024)
  Syed Hasan, Alaa. Alotaibi, Sajedul Talukder and Abdur. Shahid
  “Distributed Threat Intelligence at the Edge Devices: A Large Language Model-Driven Approach”
  In *2024 IEEE 48th Annual Computers, Software, and Applications Conference (COMPSAC)*
  IEEE, 2024, pp. 1496–1497
  DOI: [10.1109/compsac61105.2024.00206](https://dx.doi.org/10.1109/compsac61105.2024.00206)
- Hawkins et al. (2019)
  Robert.. Hawkins, Noah. Goodman and Robert. Goldstone
  “The emergence of social norms and conventions”
  In *Trends in cognitive sciences* 23.2
  Elsevier, 2019, pp. 158–169
- Hazell (2023)
  Julian Hazell
  “Large Language Models Can Be Used To Effectively Scale Spear Phishing Campaigns”
  In *arXiv:2305.06972*, 2023
  URL: <https://arxiv.org/abs/2305.06972v2>
- He et al. (2024)
  Yifeng He, Ethan Wang, Yuyang Rong, Zifei Cheng and Hao Chen
  “Security of AI Agents”
  In *arXiv:2406.08689*, 2024
  DOI: [10.48550/arxiv.2406.08689](https://dx.doi.org/10.48550/arxiv.2406.08689)
- Hendrycks (2023)
  Dan Hendrycks
  “Natural Selection Favors AIs over Humans”
  In *arXiv:2303.16200*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2303.16200](https://dx.doi.org/10.48550/ARXIV.2303.16200)
- Hendrycks et al. (2021)
  Dan Hendrycks, Nicholas Carlini, John Schulman and Jacob Steinhardt
  “Unsolved Problems in ML Safety”
  In *arXiv:2109.13916*, 2021
  DOI: [10.48550/arxiv.2109.13916](https://dx.doi.org/10.48550/arxiv.2109.13916)
- Hendrycks et al. (2023)
  Dan Hendrycks, Mantas Mazeika and Thomas Woodside
  “An Overview of Catastrophic AI Risks”
  In *arXiv:2306.12001*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2306.12001](https://dx.doi.org/10.48550/ARXIV.2306.12001)
- Ho et al. (2014)
  Chien-Ju Ho, Aleksandrs Slivkins and Jennifer Vaughan
  “Adaptive contract design for crowdsourcing markets: bandit algorithms for repeated principal-agent problems”
  In *Proceedings of the fifteenth ACM conference on Economics and computation*, EC ’14
  ACM, 2014, pp. 359–376
  DOI: [10.1145/2600057.2602880](https://dx.doi.org/10.1145/2600057.2602880)
- Hofbauer & Sigmund (1998)
  Josef Hofbauer and Karl Sigmund
  “Evolutionary games and population dynamics”
  Cambridge university press, 1998
- Hoffman (2009)
  David. Hoffman
  “The Dead Hand”
  New York [u.a.]: Doubleday, 2009
- Hoffmann et al. (2022)
  Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, Elena Buchatskaya, Trevor Cai, Eliza Rutherford, Diego Casas, Lisa Hendricks, Johannes Welbl, Aidan Clark, Tom Hennigan, Eric Noland, Katie Millican, George Driessche, Bogdan Damoc, Aurelia Guy, Simon Osindero, Karen Simonyan, Erich Elsen, Jack. Rae, Oriol Vinyals and Laurent Sifre
  “Training Compute-Optimal Large Language Models” arXiv:2203.15556 [cs]
  arXiv, 2022
  DOI: [10.48550/arXiv.2203.15556](https://dx.doi.org/10.48550/arXiv.2203.15556)
- Hofstadter (1983)
  Douglas Hofstadter
  “Dilemmas for Superrational Thinkers, Leading Up to a Luring Lottery”
  In *Scientific America* 248.6, 1983
- Holling (1973)
  C.. Holling
  “Resilience and Stability of Ecological Systems”
  In *Annual Review of Ecology and Systematics* 4
  Annual Reviews, 1973, pp. 1–23
  URL: <http://www.jstor.org/stable/2096802>
- Horowitz (2021)
  M.. Horowitz
  “When speed kills: Lethal autonomous weapon systems, deterrence and stability”
  In *Emerging Technologies and International Stability*
  taylorfrancis.com, 2021
- Hossain et al. (2021)
  Safwan Hossain, Evi Micha and Nisarg Shah
  “Fair algorithms for multi-agent multi-armed bandits”
  In *Advances in Neural Information Processing Systems* 34, 2021, pp. 24005–24017
- Hossain et al. (2020)
  Safwan Hossain, Andjela Mladenovic and Nisarg Shah
  “Designing fairly fair classifiers via economic fairness notions”
  In *Proceedings of The Web Conference 2020*, 2020, pp. 1559–1569
- Hossain et al. (2024)
  Safwan Hossain, Tonghan Wang, Tao Lin, Yiling Chen, David. Parkes and Haifeng Xu
  “Multi-Sender Persuasion: A Computational Perspective”
  In *Proceedings of the 41st International Conference on Machine Learning* 235, Proceedings of Machine Learning Research
  PMLR, 2024, pp. 18944–18971
  URL: <https://proceedings.mlr.press/v235/hossain24c.html>
- Howard (1988)
  J.. Howard
  “Cooperation in the Prisoner’s Dilemma”
  In *Theory and Decision* 24.3
  Springer ScienceBusiness Media LLC, 1988, pp. 203–213
  DOI: [10.1007/BF00148954](https://dx.doi.org/10.1007/BF00148954)
- Hu et al. (2018)
  Donghui Hu, Liang Wang, Wenjie Jiang, Shuli Zheng and Bin Li
  “A Novel Image Steganography Method via Deep Convolutional Generative Adversarial Networks”
  In *IEEE Access* 6
  Institute of ElectricalElectronics Engineers (IEEE), 2018, pp. 38303–38314
  DOI: [10.1109/access.2018.2852771](https://dx.doi.org/10.1109/access.2018.2852771)
- Hu et al. (2020)
  Hengyuan Hu, Adam Lerer, Alex Peysakhovich and Jakob Foerster
  “”Other-Play ” for zero-shot coordination”
  In *Proceedings of the 37th International Conference on Machine Learning*, ICML’20
  JMLR.org, 2020
- Hu et al. (2024)
  Shengran Hu, Cong Lu and Jeff Clune
  “Automated Design of Agentic Systems”
  In *arXiv:2408.08435*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2408.08435](https://dx.doi.org/10.48550/ARXIV.2408.08435)
- Huang et al. (2024)
  Jen-tse Huang, Jiaxu Zhou, Tailin Jin, Xuhui Zhou, Zixi Chen, Wenxuan Wang, Youliang Yuan, Maarten Sap and Michael. Lyu
  “On the Resilience of Multi-Agent Systems with Malicious Agents”
  In *arXiv:2408.00989*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2408.00989](https://dx.doi.org/10.48550/ARXIV.2408.00989)
- Huang et al. (2011)
  Ling Huang, Anthony. Joseph, Blaine Nelson, Benjamin.. Rubinstein and J.. Tygar
  “Adversarial machine learning”
  In *Proceedings of the 4th ACM workshop on Security and artificial intelligence*
  ACM, 2011
  DOI: [10.1145/2046684.2046692](https://dx.doi.org/10.1145/2046684.2046692)
- Huang et al. (2006)
  Minyi Huang, Roland. Malhamé and Peter. Caines
  “Large population stochastic dynamic games: closed-loop McKean-Vlasov systems and the Nash certainty equivalence principle”
  In *Communications in Information & Systems* 6.3
  International Press of Boston, 2006, pp. 221–252
- Huang & Siddarth (2023)
  Saffron Huang and Divya Siddarth
  “Generative AI and the Digital Commons”
  In *arXiv:2303.11074*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2303.11074](https://dx.doi.org/10.48550/ARXIV.2303.11074)
- Hubinger (2020)
  Evan Hubinger
  “Clarifying inner alignment terminology”, 2020
  Alignment Forum
  URL: <https://www.alignmentforum.org/posts/SzecSPYxqRa5GCaSF/clarifying-inner-alignment-terminology>
- Hughes et al. (2024)
  Edward Hughes, Michael Dennis, Jack Parker-Holder, Feryal Behbahani, Aditi Mavalankar, Yuge Shi, Tom Schaul and Tim Rocktaschel
  “Open-Endedness is Essential for Artificial Superhuman Intelligence”
  In *arXiv:2406.04268*, 2024
- Hughes et al. (2018)
  Edward Hughes, Joel. Leibo, Matthew Phillips, Karl Tuyls, Edgar Dueñez-Guzman, Antonio Garcíañeda, Iain Dunning, Tina Zhu, Kevin McKee, Raphael Koster, Heather Roff and Thore Graepel
  “Inequity Aversion Improves Cooperation in Intertemporal Social Dilemmas”
  In *Advances in Neural Information Processing Systems 31* 31
  Curran Associates, Inc., 2018, pp. 3326–3336
  URL: <http://papers.nips.cc/paper/7593-inequity-aversion-improves-cooperation-in-intertemporal-social-dilemmas.pdf>
- [1]
  “Automated Machine Learning”
  Springer International Publishing, 2019
  DOI: [10.1007/978-3-030-05318-5](https://dx.doi.org/10.1007/978-3-030-05318-5)
- Irving et al. (2018)
  Geoffrey Irving, Paul Christiano and Dario Amodei
  “AI Safety Via Debate”
  In *arXiv:1805.00899*, 2018
  DOI: [10.48550/arxiv.1805.00899](https://dx.doi.org/10.48550/arxiv.1805.00899)
- Islam et al. (2012)
  Mohammad Islam, Mehmet Kuzu and Murat Kantarcioglu
  “Access Pattern disclosure on Searchable Encryption: Ramification, Attack and Mitigation”
  In *19th Annual Network and Distributed System Security Symposium, NDSS 2012, San Diego, California, USA, February 5-8, 2012*
  The Internet Society, 2012
  URL: <https://www.ndss-symposium.org/ndss2012/access-pattern-disclosure-searchable-encryption-ramification-attack-and-mitigation>
- Itzhak et al. (2023)
  Itay Itzhak, Gabriel Stanovsky, Nir Rosenfeld and Yonatan Belinkov
  “Instructed to Bias: Instruction-Tuned Language Models Exhibit Emergent Cognitive Bias”
  In *arXiv:2308.00225*, 2023
  DOI: [10.48550/arxiv.2308.00225](https://dx.doi.org/10.48550/arxiv.2308.00225)
- Ivanov et al. (2023)
  Dmitry Ivanov, Ilya Zisman and Kirill Chernyshev
  “Mediated Multi-Agent Reinforcement Learning”
  In *Proceedings of the 2023 International Conference on Autonomous Agents and Multiagent Systems*, AAMAS ’23
  London, United Kingdom: International Foundation for Autonomous AgentsMultiagent Systems, 2023, pp. 49–57
- Jackson et al. (2019)
  Joshua Jackson, Virginia. Choi and Michele. Gelfand
  “Revenge: A Multilevel Review and Synthesis”
  In *Annu. Rev. Psychol.* 70
  assets-us-01.kc-usercontent.com, 2019, pp. 319–345
- Jackson & Zenou (2015)
  Matthew. Jackson and Yves Zenou
  “Chapter 3 - Games on Networks”
  In *Handbook of Game Theory with Economic Applications* 4
  Elsevier, 2015, pp. 95–163
  DOI: [10.1016/B978-0-444-53766-9.00003-3](https://dx.doi.org/10.1016/B978-0-444-53766-9.00003-3)
- Jaderberg et al. (2019)
  Max Jaderberg, Wojciech. Czarnecki, Iain Dunning, Luke Marris, Guy Lever, Antonio. Castañeda, Charles Beattie, Neil. Rabinowitz, Ari. Morcos, Avraham Ruderman, Nicolas Sonnerat, Tim Green, Louise Deason, Joel. Leibo, David Silver, Demis Hassabis, Koray Kavukcuoglu and Thore Graepel
  “Human-level performance in 3D multiplayer games with population-based reinforcement learning”
  In *Science* 364.6443
  American Association for the Advancement of Science, 2019, pp. 859–865
- Jagadeesan et al. (2023)
  Meena Jagadeesan, Michael Jordan, Jacob Steinhardt and Nika Haghtalab
  “Improved Bayes Risk Can Yield Reduced Social Welfare Under Competition”
  In *Thirty-seventh Conference on Neural Information Processing Systems*, 2023
  URL: <https://openreview.net/forum?id=IltQ87ZdT6>
- Jagadeesan et al. (2023a)
  Meena Jagadeesan, Michael. Jordan and Nika Haghtalab
  “Competition, Alignment, and Equilibria in Digital Marketplaces”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 37.5
  Association for the Advancement of Artificial Intelligence (AAAI), 2023, pp. 5689–5696
  DOI: [10.1609/aaai.v37i5.25706](https://dx.doi.org/10.1609/aaai.v37i5.25706)
- Jaques et al. (2019)
  Natasha Jaques, Angeliki Lazaridou, Edward Hughes, Çaglar Gülçehre, Pedro. Ortega, D.. Strouse, Joel. Leibo and Nando de Freitas
  “Social Influence As Intrinsic Motivation for Multi-agent Deep Reinforcement Learning”
  In *Proceedings of the 36th International Conference on Machine Learning, ICML 2019, 9-15 June 2019, Long Beach, California, USA* 97, Proceedings of Machine Learning Research
  PMLR, 2019, pp. 3040–3049
  URL: <http://proceedings.mlr.press/v97/jaques19a.html>
- Jarrett et al. (2023)
  Daniel Jarrett, Miruna Pislar, Michael Tessler, Michiel Bakker, Raphael Koster, Jan Balaguer, Romuald Elie, Christopher Summerfield and Andrea Tacchetti
  “Language Agents as Digital Representatives in Collective Decision-Making”
  In *NeurIPS Workshop on Foundation Models for Decision Making*, 2023
- Jennings (1993)
  Nick. Jennings
  “Specification and Implementation of a Belief-Desire-Joint-Intention Architecture for Collaborative Problem Solving”
  In *International Journal of Cooperative Information Systems* 02.03
  World Scientific Pub Co Pte Lt, 1993, pp. 289–318
  DOI: [10.1142/s0218215793000137](https://dx.doi.org/10.1142/s0218215793000137)
- Jervis (2017)
  Robert Jervis
  “Perception and Misperception in International Politics: New Edition”
  Princeton University Press, 2017
- Jia et al. (2021)
  Hengrui Jia, Mohammad Yaghini, Christopher. Choquette-Choo, Natalie Dullerud, Anvith Thudi, Varun Chandrasekaran and Nicolas Papernot
  “Proof-of-Learning: Definitions and Practice”
  In *2021 IEEE Symposium on Security and Privacy (SP)*
  IEEE, 2021
  DOI: [10.1109/sp40001.2021.00106](https://dx.doi.org/10.1109/sp40001.2021.00106)
- Jiang et al. (2021)
  Minqi Jiang, Michael Dennis, Jack Parker-Holder, Jakob Foerster, Edward Grefenstette and Tim Rocktäschel
  “Replay-guided adversarial environment design”
  In *Advances in Neural Information Processing Systems* 34, 2021, pp. 1884–1897
- Jiang et al. (2019)
  Ray Jiang, Silvia Chiappa, Tor Lattimore, András György and Pushmeet Kohli
  “Degenerate feedback loops in recommender systems”
  In *Proceedings of the 2019 AAAI/ACM Conference on AI, Ethics, and Society*, 2019, pp. 383–390
- Johnson (2021)
  Bonnie Johnson
  “Artificial intelligence systems: unique challenges for defense applications”
  In *Acquisition Research Program*, 2021
  URL: <https://www.dair.nps.edu/handle/123456789/4394>
- Johnson (2004)
  Dominic.. Johnson
  “Overconfidence and War: The Havoc and Glory of Positive Illusions”
  Harvard University Press, 2004
- Johnson (2020)
  James Johnson
  “Artificial intelligence: a threat to strategic stability”
  In *Strategic Studies Quarterly* 14.1
  Air University Press, 2020, pp. 16–39
- Johnson (2021a)
  James Johnson
  “Inadvertent escalation in the age of intelligence machines: A new model for nuclear risk in the digital age”
  In *European Journal of International Security* 7.3
  Cambridge University Press (CUP), 2021, pp. 337–359
  DOI: [10.1017/eis.2021.23](https://dx.doi.org/10.1017/eis.2021.23)
- Jones et al. (2024)
  Erik Jones, Anca Dragan and Jacob Steinhardt
  “Adversaries Can Misuse Combinations of Safe Models”
  In *arXiv:2406.14595*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2406.14595](https://dx.doi.org/10.48550/ARXIV.2406.14595)
- Jones & Steinhardt (2022)
  Erik Jones and Jacob Steinhardt
  “Capturing failures of large language models via human cognitive biases”, 2022, pp. 11785–11799
  DOI: [10.48550/arxiv.2202.12299](https://dx.doi.org/10.48550/arxiv.2202.12299)
- Ju et al. (2024)
  Tianjie Ju, Yiting Wang, Xinbei Ma, Pengzhou Cheng, Haodong Zhao, Yulong Wang, Lifeng Liu, Jian Xie, Zhuosheng Zhang and Gongshen Liu
  “Flooding Spread of Manipulated Knowledge in LLM-Based Multi-Agent Communities”
  In *arXiv:2407.07791*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2407.07791](https://dx.doi.org/10.48550/ARXIV.2407.07791)
- Justesen et al. (2018)
  Niels Justesen, Ruben Torrado, Philip Bontrager, Ahmed Khalifa, Julian Togelius and Sebastian Risi
  “Illuminating generalization in deep reinforcement learning through procedural level generation”
  In *arXiv:1806.10729*, 2018
- Kairouz et al. (2015)
  Peter Kairouz, Sewoong Oh and Pramod Viswanath
  “The composition theorem for differential privacy”
  In *International conference on machine learning*, 2015, pp. 1376–1385
  PMLR
- Kalai & Smorodinsky (1975)
  Ehud Kalai and Meir Smorodinsky
  “Other solutions to Nash’s bargaining problem”
  In *Econometrica: Journal of the Econometric Society*
  JSTOR, 1975, pp. 513–518
- Kamenica & Gentzkow (2011)
  Emir Kamenica and Matthew Gentzkow
  “Bayesian Persuasion”
  In *American Economic Review* 101.6
  American Economic Association, 2011, pp. 2590–2615
  DOI: [10.1257/aer.101.6.2590](https://dx.doi.org/10.1257/aer.101.6.2590)
- Kaplan et al. (2020)
  Jared Kaplan, Sam McCandlish, Tom Henighan, Tom. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu and Dario Amodei
  “Scaling Laws for Neural Language Models” arXiv:2001.08361 [cs, stat]
  arXiv, 2020
  DOI: [10.48550/arXiv.2001.08361](https://dx.doi.org/10.48550/arXiv.2001.08361)
- Kapoor et al. (2024)
  Sayash Kapoor, Benedikt Stroebl, Zachary. Siegel, Nitya Nadgir and Arvind Narayanan
  “AI Agents That Matter”
  In *arXiv:2407.01502*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2407.01502](https://dx.doi.org/10.48550/ARXIV.2407.01502)
- Kasirzadeh (2024)
  Atoosa Kasirzadeh
  “Plurality of value pluralism and AI value alignment”
  In *Pluralistic Alignment Workshop at NeurIPS*, 2024
- Kasirzadeh (2024a)
  Atoosa Kasirzadeh
  “Two Types of AI Existential Risk: Decisive and Accumulative”
  In *arXiv:2401.07836*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2401.07836](https://dx.doi.org/10.48550/ARXIV.2401.07836)
- Kaunert & Ilbiz (2021)
  Christian Kaunert and Ethem Ilbiz
  “Cyber-attacks: what is hybrid warfare and why is it such a threat?”
  In *The Conversation*, 2021
  URL: <http://theconversation.com/cyber-attacks-what-is-hybrid-warfare-and-why-is-it-such-a-threat-164091>
- Kay et al. (2024)
  Jackie Kay, Atoosa Kasirzadeh and Shakir Mohamed
  “Epistemic Injustice in Generative AI”
  In *arXiv:2408.11441*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2408.11441](https://dx.doi.org/10.48550/ARXIV.2408.11441)
- Kenton et al. (2022)
  Zachary Kenton, Ramana Kumar, Sebastian Farquhar, Jonathan Richens, Matt MacDermott and Tom Everitt
  “Discovering Agents”
  In *arXiv:2208.08345*, 2022
  DOI: [10.48550/arxiv.2208.08345](https://dx.doi.org/10.48550/arxiv.2208.08345)
- Khan et al. (2023)
  Akbir Khan, Timon Willi, Newton Kwan, Andrea Tacchetti, Chris Lu, Edward Grefenstette, Tim Rocktäschel and Jakob Foerster
  “Scaling Opponent Shaping to High Dimensional Games”
  In *arXiv:2312.12568*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2312.12568](https://dx.doi.org/10.48550/ARXIV.2312.12568)
- Khlaaf (2023)
  Heidy Khlaaf
  “Toward Comprehensive Risk Assessments and Assurance of AI-Based Systems”, 2023
  Trail of Bits
  URL: <https://www.trailofbits.com/documents/Toward_comprehensive_risk_assessments.pdf>
- Kinniment et al. (2023)
  Megan Kinniment, Lucas Koba, Haoxing Du, Brian Goodrich, Max Hasin, Lawrence Chan, Luke Miles, Tao. Lin, Hjalmar Wijk, Joel Burget, Aaron Ho, Elizabeth Barnes and Paul Christiano
  “Evaluating Language-Model Agents on Realistic Autonomous Tasks”, 2023
  ARC Evals
  URL: <https://evals.alignment.org/language-model-pilot-report>
- Kirchenbauer et al. (2023)
  John Kirchenbauer, Jonas Geiping, Yuxin Wen, Manli Shu, Khalid Saifullah, Kezhi Kong, Kasun Fernando, Aniruddha Saha, Micah Goldblum and Tom Goldstein
  “On the Reliability of Watermarks for Large Language Models”
  In *arXiv:2306.04634*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2306.04634](https://dx.doi.org/10.48550/ARXIV.2306.04634)
- Kirilenko et al. (2017)
  Andrei. Kirilenko, Albert. Kyle, Mehrdad Samadi and Tugkan Tuzun
  “The Flash Crash: High-Frequency Trading in an Electronic Market”
  In *The Journal of Finance* 72.3
  [American Finance Association, Wiley], 2017, pp. 967–998
  URL: <http://www.jstor.org/stable/26652722>
- Kirk et al. (2023)
  Hannah Kirk, Bertie Vidgen, Paul Rottger and Scott Hale
  “The Empty Signifier Problem: Towards Clearer Paradigms for Operationalising ”Alignment” in Large Language Models”
  In *Socially Responsible Language Modelling Research*, 2023
  URL: <https://openreview.net/forum?id=6mHKQkV8NY>
- Klein (2021)
  Timo Klein
  “Autonomous algorithmic collusion: Q-learning under sequential pricing”
  In *The RAND Journal of Economics* 52.3, 2021, pp. 538–558
  DOI: [10.1111/1756-2171.12383](https://dx.doi.org/10.1111/1756-2171.12383)
- Kleinberg & Raghavan (2021)
  Jon Kleinberg and Manish Raghavan
  “Algorithmic monoculture and social welfare” Publisher: Proceedings of the National Academy of Sciences
  In *Proceedings of the National Academy of Sciences* 118.22, 2021, pp. e2018340118
  DOI: [10.1073/pnas.2018340118](https://dx.doi.org/10.1073/pnas.2018340118)
- Koessler & Schuett (2023)
  Leonie Koessler and Jonas Schuett
  “Risk assessment at AGI companies: A review of popular risk assessment techniques from other safety-critical industries” arXiv:2307.08823 [cs]
  arXiv, 2023
  DOI: [10.48550/arXiv.2307.08823](https://dx.doi.org/10.48550/arXiv.2307.08823)
- Kokotajlo (2019)
  Daniel Kokotajlo
  “The Commitment Races problem”, 2019
  Alignment Forum
  URL: <https://www.alignmentforum.org/posts/brXr7PJ2W4Na2EW2q/the-commitment-races-problem>
- Kollock (1998)
  Peter Kollock
  “Social dilemmas: The anatomy of cooperation”
  In *Annual review of sociology* 24.1
  Annual Reviews 4139 El Camino Way, PO Box 10139, Palo Alto, CA 94303-0139, USA, 1998, pp. 183–214
- Kolt (2024)
  Noam Kolt
  “Governing AI Agents”
  In *SSRN Electronic Journal*
  Elsevier BV, 2024
  DOI: [10.2139/ssrn.4772956](https://dx.doi.org/10.2139/ssrn.4772956)
- Kolt et al. (2025)
  Noam Kolt, Michal Shur-Ofry and Reuven Cohen
  “Lessons from complexity theory for AI governance”
  In *arXiv:2502.00012*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2502.00012](https://dx.doi.org/10.48550/ARXIV.2502.00012)
- Konda & Tsitsiklis (2000)
  Vijay. Konda and John. Tsitsiklis
  “Actor-critic Algorithms”
  In *Advances in Neural Information Processing Systems 12*
  MIT Press, 2000, pp. 1008–1014
  URL: <http://papers.nips.cc/paper/1786-actor-critic-algorithms.pdf>
- Kong & Schoenebeck (2019)
  Yuqing Kong and Grant Schoenebeck
  “An Information Theoretic Framework For Designing Information Elicitation Mechanisms That Reward Truth-telling”
  In *ACM Transactions on Economics and Computation* 7.1
  Association for Computing Machinery (ACM), 2019, pp. 1–33
  DOI: [10.1145/3296670](https://dx.doi.org/10.1145/3296670)
- Konrad & Morath (2012)
  Kai. Konrad and Florian Morath
  “Evolutionarily stable in-group favoritism and out-group spite in intergroup conflict”
  In *J. Theor. Biol.* 306
  Elsevier, 2012, pp. 61–67
- Köster et al. (2020)
  Raphael Köster, Kevin. McKee, Richard Everett, Laura Weidinger, William. Isaac, Edward Hughes, Edgar. Duéñez-Guzmán, Thore Graepel, Matthew Botvinick and Joel. Leibo
  “Model-free Conventions in Multi-agent Reinforcement Learning with Heterogeneous Preferences”
  In *arXiv:2010.09054*, 2020
  DOI: [10.48550/arxiv.2010.09054](https://dx.doi.org/10.48550/arxiv.2010.09054)
- Kovařík et al. (2023)
  Vojtěch Kovařík, Caspar Oesterheld and Vincent Conitzer
  “Game Theory with Simulation of Other Players”
  In *Proceedings of the Thirty-Second International Joint Conference on Artificial Intelligence*, IJCAI-2023
  International Joint Conferences on Artificial Intelligence Organization, 2023
  DOI: [10.24963/ijcai.2023/312](https://dx.doi.org/10.24963/ijcai.2023/312)
- Kovařík et al. (2024)
  Vojtěch Kovařík, Caspar Oesterheld and Vincent Conitzer
  “Recursive Joint Simulation in Games”
  In *arXiv:2402.08128*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2402.08128](https://dx.doi.org/10.48550/ARXIV.2402.08128)
- Kreps & Kriner (2023)
  Sarah Kreps and Doug Kriner
  “How AI Threatens Democracy”
  In *Journal of Democracy* 34.4, 2023, pp. 122–31
- Krier (2023)
  Sébastien Krier
  “An agents economy”, 2023
  URL: <https://www.aipolicyperspectives.com/p/an-agents-economy>
- Kubík (2003)
  Aleš Kubík
  “Toward a Formalization of Emergence”
  In *Artificial Life* 9.1
  MIT Press – Journals, 2003, pp. 41–65
  DOI: [10.1162/106454603321489518](https://dx.doi.org/10.1162/106454603321489518)
- Kulveit (2023)
  Jan Kulveit
  “Personal Communication”, 2023
- Kulveit et al. (2025)
  Jan Kulveit, Raymond Douglas, Nora Ammann, Deger Turan, David Krueger and David Duvenaud
  “Gradual Disempowerment: Systemic Existential Risks from Incremental AI Development”
  In *arXiv:2501.16946*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2501.16946](https://dx.doi.org/10.48550/ARXIV.2501.16946)
- Kunegis et al. (2013)
  Jérôme Kunegis, Marcel Blattner and Christine Moser
  “Preferential attachment in online networks: measurement and explanations”
  In *Web Science Conference*, 2013
  URL: <https://api.semanticscholar.org/CorpusID:16356886>
- Kushner & Yin (2003)
  Harold. Kushner and G. Yin
  “Stochastic Modelling and Applied Probability”
  Springer-Verlag, 2003
  DOI: [10.1007/b97441](https://dx.doi.org/10.1007/b97441)
- Laird (2020)
  Burgess Laird
  “The Risks of Autonomous Weapons Systems for Crisis Stability and Conflict Escalation in Future US-Russia Confrontations”
  In *Rand Corperation: Objective Analysis. Effective Solutions*, 2020
- Lamparth et al. (2024)
  Max Lamparth, Anthony Corso, Jacob Ganz, Oriana Mastro, Jacquelyn Schneider and Harold Trinkunas
  “Human vs. Machine: Behavioral Differences Between Expert Humans and Language Models in Wargame Simulations”
  In *arXiv:2403.03407*, 2024
  DOI: [10.48550/arxiv.2403.03407](https://dx.doi.org/10.48550/arxiv.2403.03407)
- Lamport et al. (1982)
  Leslie Lamport, Robert Shostak and Marshall Pease
  “The Byzantine Generals Problem”
  In *ACM Transactions on Programming Languages and Systems* 4.3
  Association for Computing Machinery (ACM), 1982, pp. 382–401
  DOI: [10.1145/357172.357176](https://dx.doi.org/10.1145/357172.357176)
- Lasry & Lions (2007)
  Jean-Michel Lasry and Pierre-Louis Lions
  “Mean field games”
  In *Japanese Journal of Mathematics* 2.1
  Springer ScienceBusiness Media LLC, 2007, pp. 229–260
  DOI: [10.1007/s11537-007-0657-8](https://dx.doi.org/10.1007/s11537-007-0657-8)
- Lauffer et al. (2023)
  Niklas Lauffer, Ameesh Shah, Micah Carroll, Michael. Dennis and Stuart Russell
  “Who Needs to Know? Minimal Knowledge for Optimal Coordination” ISSN: 2640-3498
  In *Proceedings of the 40th International Conference on Machine Learning*
  PMLR, 2023, pp. 18599–18613
  URL: <https://proceedings.mlr.press/v202/lauffer23a.html>
- Laurito et al. (2024)
  Walter Laurito, Benjamin Davis, Peli Grietzer, Tomáš Gavenčiak, Ada Böhm and Jan Kulveit
  “AI AI Bias: Large Language Models Favor Their Own Generated Content”, 2024
  DOI: [10.48550/arxiv.2407.12856](https://dx.doi.org/10.48550/arxiv.2407.12856)
- Lazar & Nelson (2023)
  Seth Lazar and Alondra Nelson
  “AI safety on whose terms?” Publisher: American Association for the Advancement of Science
  In *Science* 381.6654
  American Association for the Advancement of Science (AAAS), 2023, pp. 138–138
  DOI: [10.1126/science.adi8982](https://dx.doi.org/10.1126/science.adi8982)
- Lazaridou & Baroni (2020)
  Angeliki Lazaridou and Marco Baroni
  “Emergent Multi-Agent Communication in the Deep Learning Era”
  In *arXiv:2006.02419*
  arXiv, 2020
  DOI: [10.48550/ARXIV.2006.02419](https://dx.doi.org/10.48550/ARXIV.2006.02419)
- Lee & Tiwari (2024)
  Donghyun Lee and Mo Tiwari
  “Prompt Infection: LLM-to-LLM Prompt Injection within Multi-Agent Systems”
  In *arXiv:2410.07283*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.07283](https://dx.doi.org/10.48550/ARXIV.2410.07283)
- Legg & Hutter (2007)
  Shane Legg and Marcus Hutter
  “Universal intelligence: A definition of machine intelligence”
  In *Minds and Machines* 17.4
  Island Press, 2007, pp. 391–444
  DOI: [10.1007/s11023-007-9079-x](https://dx.doi.org/10.1007/s11023-007-9079-x)
- Lehman et al. (2022)
  Joel Lehman, Jonathan Gordon, Shawn Jain, Kamal Ndousse, Cathy Yeh and Kenneth. Stanley
  “Evolution through Large Models”
  In *arXiv:2206.08896*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2206.08896](https://dx.doi.org/10.48550/ARXIV.2206.08896)
- Leibo et al. (2021)
  Joel. Leibo, Edgar. Dueñez-Guzman, Alexander Vezhnevets, John. Agapiou, Peter Sunehag, Raphael Koster, Jayd Matyas, Charlie Beattie, Igor Mordatch and Thore Graepel
  “Scalable Evaluation of Multi-Agent Reinforcement Learning with Melting Pot”
  In *Proceedings of the 38th International Conference on Machine Learning* 139, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 6187–6199
  URL: <http://proceedings.mlr.press/v139/leibo21a.html>
- Leibo et al. (2019)
  Joel. Leibo, Edward Hughes, Marc Lanctot and Thore Graepel
  “Autocurricula and the emergence of innovation from social interaction: A manifesto for multi-agent intelligence research”
  In *arXiv:1903.00742*, 2019
- Leibo et al. (2018)
  Joel. Leibo, Julien Perolat, Edward Hughes, Steven Wheelwright, Adam. Marblestone, Edgar Duéñez-Guzmán, Peter Sunehag, Iain Dunning and Thore Graepel
  “Malthusian Reinforcement Learning”
  In *arXiv:1812.07019*, 2018
  DOI: [10.48550/arxiv.1812.07019](https://dx.doi.org/10.48550/arxiv.1812.07019)
- Leibo et al. (2024)
  Joel. Leibo, Alexander Vezhnevets, Manfred Diaz, John. Agapiou, William. Cunningham, Peter Sunehag, Julia Haas, Raphael Koster, Edgar. Duéñez-Guzmán, William. Isaac, Georgios Piliouras, Stanley. Bileschi, Iyad Rahwan and Simon Osindero
  “A theory of appropriateness with applications to generative artificial intelligence”
  In *arXiv:2412.19010*, 2024
- Leibo et al. (2017)
  Joel. Leibo, Vinicius Zambaldi, Marc Lanctot, Janusz Marecki and Thore Graepel
  “Multi-agent Reinforcement Learning in Sequential Social Dilemmas”
  In *Proceedings of the 16th Conference on Autonomous Agents and MultiAgent Systems*, AAMAS ’17
  São Paulo, Brazil: International Foundation for Autonomous AgentsMultiagent Systems, 2017, pp. 464–473
- Leike et al. (2018)
  Jan Leike, David Krueger, Tom Everitt, Miljan Martic, Vishal Maini and Shane Legg
  “Scalable Agent Alignment Via Reward Modeling: A Research Direction”
  In *arXiv:1811.07871*, 2018
  DOI: [10.48550/arxiv.1811.07871](https://dx.doi.org/10.48550/arxiv.1811.07871)
- Leisten (2021)
  Matthew Leisten
  “Algorithmic competition, with humans” Working Paper, 2021
- Leonardos & Piliouras (2022)
  Stefanos Leonardos and Georgios Piliouras
  “Exploration-exploitation in multi-agent learning: Catastrophe theory meets game theory”
  In *Artificial Intelligence* 304
  Elsevier BV, 2022, pp. 103653
  DOI: [10.1016/j.artint.2021.103653](https://dx.doi.org/10.1016/j.artint.2021.103653)
- Leonardos et al. (2020)
  Stefanos Leonardos, Iosif Sakos, Costas Courcoubetis and Georgios Piliouras
  “Catastrophe by Design in Population Games: Destabilizing WastefulLocked-In Technologies”
  In *Web and Internet Economics - 16th International Conference, WINE 2020, Beijing, China, December 7-11, 2020, Proceedings* 12495, Lecture Notes in Computer Science
  Springer, 2020, pp. 473
  DOI: [10.1007/978-3-030-64946-3.pdf](https://dx.doi.org/10.1007/978-3-030-64946-3.pdf)
- Lerer & Peysakhovich (2019)
  Adam Lerer and Alexander Peysakhovich
  “Learning Existing Social Conventions via Observationally Augmented Self-Play”
  In *Proceedings of the 2019 AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’19
  Honolulu, HI, USA: Association for Computing Machinery, 2019, pp. 107–114
  DOI: [10.1145/3306618.3314268](https://dx.doi.org/10.1145/3306618.3314268)
- Lermen & Kvapil (2023)
  Simon Lermen and Ondřej Kvapil
  “Exploring the Robustness of Model-Graded Evaluations and Automated Interpretability”
  In *arXiv:2312.03721*, 2023
- Letchford et al. (2013)
  Joshua Letchford, Dmytro Korzhyk and Vincent Conitzer
  “On the value of commitment”
  In *Autonomous Agents and Multi-Agent Systems* 28.6
  Springer ScienceBusiness Media LLC, 2013, pp. 986–1016
  DOI: [10.1007/s10458-013-9246-9](https://dx.doi.org/10.1007/s10458-013-9246-9)
- Levermore (2023)
  Patrick Levermore
  “AI Safety Bounties”, 2023
  Rethink Priorities
  URL: <https://rethinkpriorities.org/research-area/ai-safety-bounties/>
- Levinstein & Herrmann (2023)
  B.. Levinstein and Daniel. Herrmann
  “Still No Lie Detector for Language Models: Probing Empirical and Conceptual Roadblocks”
  In *Philosophical Studies*
  Springer ScienceBusiness Media LLC, 2023
  DOI: [10.1007/s11098-023-02094-3](https://dx.doi.org/10.1007/s11098-023-02094-3)
- Lewis (1979)
  David Lewis
  “Prisoners’ Dilemma is a Newcomb Problem”
  In *Philosophy & Public Affairs* 8.3, 1979, pp. 235–240
- Lewontin (1958)
  Richard. Lewontin
  “A general method for investigating the equilibrium of gene frequency in a population”
  In *Genetics* 43.3
  Oxford University Press, 1958, pp. 419
- Li et al. (2023)
  Huao Li, Yu Chong, Simon Stepputtis, Joseph Campbell, Dana Hughes, Charles Lewis and Katia Sycara
  “Theory of Mind for Multi-Agent Collaboration via Large Language Models”
  In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing*
  Singapore: Association for Computational Linguistics, 2023, pp. 180–192
  DOI: [10.18653/v1/2023.emnlp-main.13](https://dx.doi.org/10.18653/v1/2023.emnlp-main.13)
- Li et al. (2025)
  Wenhao Li, Dan Qiao, Baoxiang Wang, Xiangfeng Wang, Wei, Hao Shen, Bo Jin and Hongyuan Zha
  “Multi-Agent Credit Assignment with Pretrained Language Models”
  In *The 28th International Conference on Artificial Intelligence and Statistics*, 2025
  URL: <https://openreview.net/forum?id=2kIYWdFU0x>
- Li et al. (2023a)
  Yang Li, Shao Zhang, Jichen Sun, Yali Du, Ying Wen, Xinbing Wang and Wei Pan
  “Cooperative open-ended learning framework for zero-shot coordination”
  In *Proceedings of the 40th International Conference on Machine Learning*, ICML’23
  Honolulu, Hawaii, USA: JMLR.org, 2023
- Liang et al. (2021)
  Paul Liang, Chiyu Wu, Louis-Philippe Morency and Ruslan Salakhutdinov
  “Towards Understanding and Mitigating Social Biases in Language Models”
  In *Proceedings of the 38th International Conference on Machine Learning* 139, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 6565–6576
- Liao et al. (2013)
  Hung-Jen Liao, Chun-Hung Richard, Ying-Chih Lin and Kuang-Yuan Tung
  “Intrusion detection system: A comprehensive review”
  In *Journal of Network and Computer Applications* 36.1, 2013, pp. 16–24
  DOI: [10.1016/j.jnca.2012.09.004](https://dx.doi.org/10.1016/j.jnca.2012.09.004)
- Lima (2017)
  Dafni Lima
  “Could AI Agents Be Held Criminally Liable: Artificial Intelligence and the Challenges for Criminal Law”
  In *South Carolina Law Review* 69.3, 2017, pp. 677–696
  URL: <https://heinonline.org/HOL/P?h=hein.journals/sclr69&i=705>
- Lin & Li (2024)
  Tao Lin and Ce Li
  “Information Design with Unknown Prior”
  In *arXiv:2410.05533*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.05533](https://dx.doi.org/10.48550/ARXIV.2410.05533)
- Lior (2019)
  Anat Lior
  “AI Entities as AI Agents: Artificial Intelligence Liability and the AI Respondeat Superior Analogy”
  In *Mitchell Hamline Law Review* 46.5, 2019, pp. 1043–1102
  URL: <https://heinonline.org/HOL/P?h=hein.journals/wmitch46&i=1043>
- Liu et al. (2024)
  Yiqi Liu, Nafise Moosavi and Chenghua Lin
  “LLMs as Narcissistic Evaluators: When Ego Inflates Evaluation Scores”
  In *Findings of the Association for Computational Linguistics ACL 2024*
  Association for Computational Linguistics, 2024, pp. 12688–12701
  DOI: [10.18653/v1/2024.findings-acl.753](https://dx.doi.org/10.18653/v1/2024.findings-acl.753)
- Löwenheim & Heimann (2008)
  Oded Löwenheim and Gadi Heimann
  “Revenge in International Politics”
  In *Security Studies* 17.4
  Routledge, 2008, pp. 685–724
- Lu et al. (2024)
  Chris Lu, Cong Lu, Robert Lange, Jakob Foerster, Jeff Clune and David Ha
  “The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery”
  In *arXiv:2408.06292*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2408.06292](https://dx.doi.org/10.48550/ARXIV.2408.06292)
- Lu et al. (2022)
  Christopher Lu, Timon Willi, Christian.öder de Witt and Jakob. Foerster
  “Model-Free Opponent Shaping”
  In *International Conference on Machine Learning, ICML 2022, 17-23 July 2022, Baltimore, Maryland, USA* 162, Proceedings of Machine Learning Research
  PMLR, 2022, pp. 14398–14411
  URL: <https://proceedings.mlr.press/v162/lu22d.html>
- Lu et al. (2024a)
  Yikang Lu, Alberto Aleta, Chunpeng Du, Lei Shi and Yamir Moreno
  “LLMs and generative agent-based models for complex systems research”
  In *Physics of Life Reviews*
  Elsevier, 2024
- Luo et al. (2024)
  Yi Luo, Linghang Shi, Yihao Li, Aobo Zhuang, Yeyun Gong, Ling Liu and Chen Lin
  “From Intention To Implementation: Automating Biomedical Research via LLMs”
  In *arXiv:2412.09429*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2412.09429](https://dx.doi.org/10.48550/ARXIV.2412.09429)
- Lupu et al. (2021)
  Andrei Lupu, Brandon Cui, Hengyuan Hu and Jakob Foerster
  “Trajectory Diversity for Zero-Shot Coordination”
  In *Proceedings of the 38th International Conference on Machine Learning* 139, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 7204–7213
  URL: <https://proceedings.mlr.press/v139/lupu21a.html>
- Lupu & Precup (2020)
  Andrei Lupu and Doina Precup
  “Gifting in Multi-Agent Reinforcement Learning”
  In *Proceedings of the 19th International Conference on Autonomous Agents and MultiAgent Systems*, 2020, pp. 789–797
- Lyon (2011)
  Pamela Lyon
  “To Be or Not To Be: Where Is Self-Preservation in Evolutionary Theory?”
  In *The Major Transitions in Evolution Revisited*
  The MIT Press, 2011, pp. 105–126
  DOI: [10.7551/mitpress/9780262015240.003.0007](https://dx.doi.org/10.7551/mitpress/9780262015240.003.0007)
- Lyu (2022)
  Xin Lyu
  “Composition theorems for interactive differential privacy”
  In *Advances in Neural Information Processing Systems* 35, 2022, pp. 9700–9712
- Maas (2018)
  Matthijs. Maas
  “Regulating for “Normal AI Accidents”: Operational Lessons for the Responsible Governance of Artificial Intelligence Deployment”
  In *Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’18
  ACM, 2018, pp. 223–228
  DOI: [10.1145/3278721.3278766](https://dx.doi.org/10.1145/3278721.3278766)
- MacDermott et al. (2024)
  Matt MacDermott, James Fox, Francesco Belardinelli and Tom Everitt
  “Measuring Goal-Directedness”
  In *The Thirty-eighth Annual Conference on Neural Information Processing Systems*, 2024
  URL: <https://openreview.net/forum?id=o4coDIby7e>
- Mahowald et al. (2023)
  Kyle Mahowald, Anna Ivanova, Idan Blank, Nancy Kanwisher, Joshua Tenenbaum and Evelina Fedorenko
  “Dissociating language and thought in large language models: a cognitive perspective”, 2023
- Malone & Bernstein (2022)
  Thomas. Malone and Michael. Bernstein
  “Handbook of collective intelligence”
  MIT press, 2022
- Manheim (2019)
  David Manheim
  “Multiparty Dynamics and Failure Modes for Machine Learning and Artificial Intelligence”
  In *Big Data and Cognitive Computing* 3.2
  MDPI AG, 2019, pp. 21
  DOI: [10.3390/bdcc3020021](https://dx.doi.org/10.3390/bdcc3020021)
- Mankowitz et al. (2023)
  Daniel. Mankowitz, Andrea Michi, Anton Zhernov, Marco Gelmi, Marco Selvi, Cosmin Paduraru, Edouard Leurent, Shariq Iqbal, Jean-Baptiste Lespiau, Alex Ahern, Thomas Köppe, Kevin Millikin, Stephen Gaffney, Sophie Elster, Jackson Broshear, Chris Gamble, Kieran Milan, Robert Tung, Minjae Hwang, Taylan Cemgil, Mohammadamin Barekatain, Yujia Li, Amol Mandhane, Thomas Hubert, Julian Schrittwieser, Demis Hassabis, Pushmeet Kohli, Martin Riedmiller, Oriol Vinyals and David Silver
  “Faster sorting algorithms discovered using deep reinforcement learning”
  In *Nature* 618.7964
  Springer ScienceBusiness Media LLC, 2023, pp. 257–263
  DOI: [10.1038/s41586-023-06004-9](https://dx.doi.org/10.1038/s41586-023-06004-9)
- Manson (2023)
  Katrina Manson
  “The US Military Is Taking Generative AI Out for a Spin”
  Bloomberg, 2023
  URL: <https://www.bloomberg.com/news/newsletters/2023-07-05/the-us-military-is-taking-generative-ai-out-for-a-spin?embedded-checkout=true>
- Manson (2024)
  Katrina Manson
  “AI Warfare Is Already Here”
  In *Bloomberg*, 2024
  URL: <https://www.bloomberg.com/features/2024-ai-warfare-project-maven/>
- Maoz (2012)
  Zeev Maoz
  “Preferential Attachment, Homophily, and the Structure of International Networks, 1816–2003”
  In *Conflict Management and Peace Science* 29, 2012, pp. 341–369
  URL: <https://api.semanticscholar.org/CorpusID:55092626>
- Marks et al. (2023)
  Luke Marks, Amir Abdullah, Luna Mendez, Rauno Arike, Philip Torr and Fazl Barez
  “Interpreting Reward Models in RLHF-Tuned Language Models Using Sparse Autoencoders”
  In *arXiv:2310.08164*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2310.08164](https://dx.doi.org/10.48550/ARXIV.2310.08164)
- Marro et al. (2024)
  Samuele Marro, Emanuele La, Jesse Wright, Guohao Li, Nigel Shadbolt, Michael Wooldridge and Philip Torr
  “A Scalable Communication Protocol for Networks of Large Language Models”
  In *arXiv:2410.11905*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.11905](https://dx.doi.org/10.48550/ARXIV.2410.11905)
- Martínez et al. (2023)
  Gonzalo Martínez, Lauren Watson, Pedro Reviriego, José Hernández, Marc Juárez and Rik Sarkar
  “Towards Understanding the Interplay of Generative Artificial Intelligence and the Internet”
  In *arXiv:2306.06130*, 2023
  URL: <https://api.semanticscholar.org/CorpusID:259138725>
- Martins et al. (2017)
  Paulo Martins, Leonel Sousa and Artur Mariano
  “A Survey on Fully Homomorphic Encryption: An Engineering Perspective”
  In *ACM Computing Surveys* 50.6
  Association for Computing Machinery (ACM), 2017, pp. 1–33
  DOI: [10.1145/3124441](https://dx.doi.org/10.1145/3124441)
- Mashayekhi et al. (2022)
  Mehdi Mashayekhi, Nirav Ajmeri, George. List and Munindar. Singh
  “Prosocial Norm Emergence in Multi-agent Systems”
  In *ACM Trans. Auton. Adapt. Syst.* 17.1–2
  New York, NY, USA: Association for Computing Machinery, 2022
  DOI: [10.1145/3540202](https://dx.doi.org/10.1145/3540202)
- Mathew et al. (2024)
  Yohan Mathew, Ollie Matthews, Robert McCarthy, Joan Velja, Christian de Witt, Dylan Cope and Nandi Schoots
  “Hidden in Plain Text: Emergence & Mitigation of Steganographic Collusion in LLMs”
  In *arXiv:2410.03768*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.03768](https://dx.doi.org/10.48550/ARXIV.2410.03768)
- Mayer et al. (2016)
  Dominik Mayer, Johannes Feldmaier and Hao Shen
  “Reinforcement Learning in Conflicting Environments for Autonomous Vehicles”
  In *International Workshop on Robotics in the 21st Century: Challenges and Promises*, 2016
  URL: <https://arxiv.org/abs/1610.07089>
- Mayorkas (2024)
  Alejandro. Mayorkas
  “Roles and Responsibilities Framework for Artificial Intelligence in Critical Infrastructure” PDF available online, 2024
  URL: <https://www.dhs.gov/sites/default/files/2024-11/24_1114_dhs_ai-roles-and-responsibilities-framework-508.pdf>
- Mazeika et al. (2025)
  Mantas Mazeika, Xuwang Yin, Rishub Tamirisa, Jaehyuk Lim, Bruce. Lee, Richard Ren, Long Phan, Norman Mu, Adam Khoja, Oliver Zhang and Dan Hendrycks
  “Utility Engineering: Analyzing and Controlling Emergent Value Systems in AIs”
  In *arXix:2502.08640*, 2025
  DOI: [10.48550/arxiv.2502.08640](https://dx.doi.org/10.48550/arxiv.2502.08640)
- McAfee (1984)
  R. McAfee
  “Effective Computability in Economic Decisions”, 1984
  URL: <https://www.mcafee.cc/Papers/PDF/EffectiveComputability.pdf>
- McElreath et al. (2003)
  Richard McElreath, Robert Boyd and PeterJ Richerson
  “Shared norms and the evolution of ethnic markers”
  In *Current anthropology* 44.1
  The University of Chicago Press, 2003, pp. 122–130
- McKee et al. (2023)
  Kevin. McKee, Andrea Tacchetti, Michiel. Bakker, Jan Balaguer, Lucy Campbell-Gillingham, Richard Everett and Matthew Botvinick
  “Scaffolding cooperation in human groups with deep reinforcement learning”
  In *Nature Human Behaviour* 7
  Nature Publishing Group, 2023, pp. 1787–1796
- McNally & Jackson (2013)
  Luke McNally and Andrew. Jackson
  “Cooperation Creates Selection for Tactical Deception”
  In *Proceedings of the Royal Society B: Biological Sciences* 280.1762
  Royal Society, 2013, pp. 20130699
  DOI: [10.1098/rspb.2013.0699](https://dx.doi.org/10.1098/rspb.2013.0699)
- Mehra (2016)
  Salil. Mehra
  “Antitrust and the Robo-Seller: Competition in the Time of Algorithms”
  In *Minnesota Law Review* 204, 2016
- Mehrabi et al. (2021)
  Ninareh Mehrabi, Fred Morstatter, Nripsuta Saxena, Kristina Lerman and Aram Galstyan
  “A survey on bias and fairness in machine learning”
  In *ACM computing surveys (CSUR)* 54.6
  ACM New York, NY, USA, 2021, pp. 1–35
- Meta (2025)
  Meta
  “Building Toward a Smarter, More Personalized Assistant”, 2025
  URL: <https://about.fb.com/news/2025/01/building-toward-a-smarter-more-personalized-assistant/>
- Meulemans et al. (2024)
  Alexander Meulemans, Seijin Kobayashi, Johannes von Oswald, Nino Scherrer, Eric Elmoznino, Blake Richards, Guillaume Lajoie, Blaiseüera Arcas and João Sacramento
  “Multi-agent cooperation through learning-aware policy gradients”
  In *arXiv:2410.18636*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.18636](https://dx.doi.org/10.48550/ARXIV.2410.18636)
- Meyersohn (2024)
  Nathaniel Meyersohn
  “How Red Lobster’s misguided endless shrimp promotion drove it into bankruptcy”
  In *CNN*, 2024
  URL: <https://edition.cnn.com/2024/05/20/business/what-went-wrong-at-red-lobster/index.html>
- Mialon et al. (2023)
  Grégoire Mialon, Roberto Dessì, Maria Lomeli, Christoforos Nalmpantis, Ram Pasunuru, Roberta Raileanu, Baptiste Rozière, Timo Schick, Jane Dwivedi-Yu, Asli Celikyilmaz, Edouard Grave, Yann LeCun and Thomas Scialom
  “Augmented Language Models: a Survey”
  In *arXiv:2302.07842*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2302.07842](https://dx.doi.org/10.48550/ARXIV.2302.07842)
- Micha & Shah (2020)
  Evi Micha and Nisarg Shah
  “Proportionally fair clustering revisited”
  In *47th International Colloquium on Automata, Languages, and Programming (ICALP 2020)*, 2020
  Schloss Dagstuhl-Leibniz-Zentrum für Informatik
- Michaud et al. (2020)
  Eric. Michaud, Adam Gleave and Stuart Russell
  “Understanding Learned Reward Functions”
  In *Deep RL Workshop at NeurIPS*, 2020
- Microsoft (2024)
  Microsoft
  “Introducing Azure AI Agent Service”, 2024
  URL: <https://techcommunity.microsoft.com/blog/azure-ai-services-blog/introducing-azure-ai-agent-service/4298357>
- Milgrom (1981)
  Paul. Milgrom
  “Good News and Bad News: Representation Theorems and Applications”
  In *The Bell Journal of Economics* 12.2
  [RAND Corporation, Wiley], 1981, pp. 380–391
- Miller et al. (2005)
  Nolan Miller, Paul Resnick and Richard Zeckhauser
  “Eliciting Informative Feedback: The Peer-Prediction Method”
  In *Management Science* 51.9
  Institute for Operations Researchthe Management Sciences (INFORMS), 2005, pp. 1359–1373
  DOI: [10.1287/mnsc.1050.0379](https://dx.doi.org/10.1287/mnsc.1050.0379)
- Mini et al. (2023)
  Ulisse Mini, Peli Grietzer, Mrinank Sharma, Austin Meek, Monte MacDiarmid and Alexander Turner
  “Understanding and Controlling a Maze-Solving Policy Network”
  In *arXiv:2310.08043*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2310.08043](https://dx.doi.org/10.48550/ARXIV.2310.08043)
- Mirza et al. (2019)
  M. Mirza, Andries Richter, Egbert. van Nes and Marten Scheffer
  “Technology driven inequality leads to poverty and resource depletion”
  In *Ecological Economics* 160
  Elsevier BV, 2019, pp. 215–226
  DOI: [10.1016/j.ecolecon.2019.02.015](https://dx.doi.org/10.1016/j.ecolecon.2019.02.015)
- Mitchell et al. (2022)
  Eric Mitchell, Charles Lin, Antoine Bosselut, Chelsea Finn and Christopher. Manning
  “Fast Model Editing at Scale”
  In *International Conference on Learning Representations*, 2022
  URL: <https://openreview.net/forum?id=0DcZxeWfOPt>
- Mitchell et al. (2025)
  Margaret Mitchell, Avijit Ghosh, Alexandra Luccioni and Giada Pistilli
  “Fully Autonomous AI Agents Should Not be Developed”
  In *arXiv:2502.02649*
  arXiv, 2025
  DOI: [10.48550/ARXIV.2502.02649](https://dx.doi.org/10.48550/ARXIV.2502.02649)
- Mitchell et al. (2019)
  Margaret Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, Ben Hutchinson, Elena Spitzer, Inioluwa Raji and Timnit Gebru
  “Model Cards for Model Reporting”
  In *Proceedings of the Conference on Fairness, Accountability, and Transparency*
  ACM, 2019
  DOI: [10.1145/3287560.3287596](https://dx.doi.org/10.1145/3287560.3287596)
- Mogul (2006)
  Jeffrey. Mogul
  “Emergent (mis)behavior vs. complex software systems”
  In *ACM SIGOPS Operating Systems Review* 40.4
  Association for Computing Machinery (ACM), 2006, pp. 293–304
  DOI: [10.1145/1218063.1217964](https://dx.doi.org/10.1145/1218063.1217964)
- Morris-Martin et al. (2019)
  Andreasa Morris-Martin, Marina De and Julian Padget
  “Norm emergence in multiagent systems: a viewpoint paper”
  In *Autonomous Agents and Multi-Agent Systems* 33.6
  USA: Kluwer Academic Publishers, 2019, pp. 706–749
  DOI: [10.1007/s10458-019-09422-0](https://dx.doi.org/10.1007/s10458-019-09422-0)
- Motter & Lai (2002)
  Adilson. Motter and Ying-Cheng Lai
  “Cascade-based attacks on complex networks” arXiv:cond-mat/0301086
  In *Physical Review E* 66.6, 2002, pp. 065102
  DOI: [10.1103/PhysRevE.66.065102](https://dx.doi.org/10.1103/PhysRevE.66.065102)
- Motwani et al. (2024)
  Sumeet Motwani, Mikhail Baranchuk, Martin Strohmeier, Vijay Bolina, Philip Torr, Lewis Hammond and Christian Schroeder
  “Secret Collusion among AI Agents: Multi-Agent Deception via Steganography”
  In *The Thirty-eighth Annual Conference on Neural Information Processing Systems*, 2024
  URL: <https://openreview.net/forum?id=bnNSQhZJ88>
- Myerson & Satterthwaite (1983)
  Roger. Myerson and Mark. Satterthwaite
  “Efficient mechanisms for bilateral trading”
  In *Journal of economic theory* 29.2
  Elsevier, 1983, pp. 265–281
- Nadeem et al. (2020)
  Moin Nadeem, Anna Bethke and Siva Reddy
  “StereoSet: Measuring stereotypical bias in pretrained language models”
  In *arXiv:2004.09456*, 2020
  DOI: [10.48550/arxiv.2004.09456](https://dx.doi.org/10.48550/arxiv.2004.09456)
- Nagarajan et al. (2020)
  Sai Nagarajan, David Balduzzi and Georgios Piliouras
  “From Chaos to Order: Symmetry and Conservation Laws in Game Dynamics”
  In *Proceedings of the 37th International Conference on Machine Learning*
  PMLR, 2020, pp. 7186–7196
  URL: <https://proceedings.mlr.press/v119/nagarajan20a.html>
- Nangia et al. (2020)
  Nikita Nangia, Clara Vania, Rasika Bhalerao and Samuel. Bowman
  “CrowS-Pairs: A Challenge Dataset for Measuring Social Biases in Masked Language Models”
  In *arXiv:2010.00133*, 2020
  DOI: [10.48550/arxiv.2010.00133](https://dx.doi.org/10.48550/arxiv.2010.00133)
- Narang et al. (2023)
  Adhyyan Narang, Evan Faulkner, Dmitriy Drusvyatskiy, Maryam Fazel and Lillian. Ratliff
  “Multiplayer Performative Prediction: Learning in Decision-Dependent Games”
  In *Journal of Machine Learning Research* 24.202, 2023, pp. 1–56
  URL: <http://jmlr.org/papers/v24/22-0131.html>
- Nash (1950)
  John Nash
  “The bargaining problem”
  In *Econometrica: Journal of the econometric society*
  JSTOR, 1950, pp. 155–162
- Nash (1951)
  John Nash
  “Non-Cooperative Games” Publisher: Annals of Mathematics
  In *Annals of Mathematics* 54.2, 1951, pp. 286–295
  DOI: [10.2307/1969529](https://dx.doi.org/10.2307/1969529)
- National Artificial Intelligence Research Resource Task Force (2023)
  National Artificial Intelligence Research Resource Task Force
  “Strengthening and Democratizing the U.S. Artificial Intelligence Innovation Ecosystem”, 2023
  URL: <https://www.ai.gov/wp-content/uploads/2023/01/NAIRR-TF-Final-Report-2023.pdf>
- NCSC (2023)
  NCSC
  “The threat from commercial cyber proliferation”, 2023
  National Cyber Security Centre
  URL: <https://www.ncsc.gov.uk/report/commercial-cyber-proliferation-assessment>
- [2]
  NCSC
  “SBOMs and the importance of inventory”
  National Cyber Security Centre
  URL: <https://www.ncsc.gov.uk/blog-post/sboms-and-the-importance-of-inventory>
- Neslon (2023)
  Alondra Neslon
  “Thick Alignment”, Ethics in AI Annual Lecture, University of Oxford, 2023
  URL: <https://www.oxford-aiethics.ox.ac.uk/overview-ethics-ai-annual-lecture-alondra-nelson>
- Newman (2003)
  M… Newman
  “The Structure and Function of Complex Networks”
  In *SIAM Review* 45.2, 2003, pp. 167–256
  DOI: [10.1137/S003614450342480](https://dx.doi.org/10.1137/S003614450342480)
- Newman & Newman (2018)
  Mark Newman and Mark Newman
  “Networks”
  Oxford, New York: Oxford University Press, 2018
- Newman (2024)
  Richard. Newman
  “FTC Announces Final Rule Imposing Civil Penalties for Fake Consumer Reviews and Testimonials”
  In *The National Law review*, 2024
  URL: <https://natlawreview.com/article/ftc-announces-final-rule-imposing-civil-penalties-fake-consumer-reviews-and>
- Ngo et al. (2022)
  Richard Ngo, Lawrence Chan and Sören Mindermann
  “The alignment problem from a deep learning perspective”
  In *arXiv:2209.00626*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2209.00626](https://dx.doi.org/10.48550/ARXIV.2209.00626)
- Nguyen et al. (2024)
  Dung Nguyen, Hung Le, Kien Do, Sunil Gupta, Svetha Venkatesh and Truyen Tran
  “Diversifying Training Pool Predictability for Zero-shot Coordination: A Theory of Mind Approach”
  In *Proceedings of the Thirty-ThirdInternational Joint Conference on Artificial Intelligence*, IJCAI-2024
  International Joint Conferences on Artificial Intelligence Organization, 2024, pp. 166–174
  DOI: [10.24963/ijcai.2024/19](https://dx.doi.org/10.24963/ijcai.2024/19)
- Nguyen et al. (2024a)
  Minh-Duong Nguyen, Quang Do, Zhaohui Yang, Won-Joo Hwang and Quoc-Viet Pham
  “Distortion Resilience for Goal-Oriented Semantic Communication”
  In *IEEE Transactions on Mobile Computing*
  Institute of ElectricalElectronics Engineers (IEEE), 2024, pp. 1–12
  DOI: [10.1109/tmc.2024.3456856](https://dx.doi.org/10.1109/tmc.2024.3456856)
- Normann & Sternberg (2023)
  Hans-Theo Normann and Martin Sternberg
  “Human-algorithm interaction: Algorithmic pricing in hybrid laboratory markets”
  In *European Economic Review* 152
  Elsevier BV, 2023, pp. 104347
  DOI: [10.1016/j.euroecorev.2022.104347](https://dx.doi.org/10.1016/j.euroecorev.2022.104347)
- Nowak (2006)
  Martin. Nowak
  “Five rules for the evolution of cooperation”
  In *Science* 314.5805
  American Association for the Advancement of Science, 2006, pp. 1560–1563
- NSF (2023)
  NSF
  “Safe Learning-Enabled Systems”, 2023
  National Science Foundation
  URL: <https://www.nsf.gov/funding/opportunities/safe-learning-enabled-systems>
- Nyborg et al. (2016)
  Karine Nyborg, John. Anderies, Astrid Dannenberg, Therese Lindahl, Caroline Schill, Maja Schlüter, W. Adger, Kenneth. Arrow, Scott Barrett, Stephen Carpenter, F. Chapin, Anne-Sophie Crépin, Gretchen Daily, Paul Ehrlich, Carl Folke, Wander Jager, Nils Kautsky, Simon. Levin, Ole Madsen, Stephen Polasky, Marten Scheffer, Brian Walker, Elke. Weber, James Wilen, Anastasios Xepapadeas and Aart de Zeeuw
  “Social norms as solutions”
  In *Science* 354.6308
  American Association for the Advancement of Science (AAAS), 2016, pp. 42–43
  DOI: [10.1126/science.aaf8317](https://dx.doi.org/10.1126/science.aaf8317)
- O’toole et al. (2017)
  Eamonn O’toole, Vivek Nallur and Siobhán Clarke
  “Decentralised Detection of Emergence in Complex Adaptive Systems”
  In *ACM Transactions on Autonomous and Adaptive Systems* 12.1
  Association for Computing Machinery (ACM), 2017, pp. 1–31
  DOI: [10.1145/3019597](https://dx.doi.org/10.1145/3019597)
- Oesterheld (2016)
  Caspar Oesterheld
  “Formalizing preference utilitarianism in physical world models”
  In *Synthese* 193.9
  Springer, 2016, pp. 2747–2759
- Oesterheld (2018)
  Caspar Oesterheld
  “Robust Program Equilibrium”
  In *Theory and Decision* 86.1
  Springer ScienceBusiness Media LLC, 2018, pp. 143–159
  DOI: [10.1007/s11238-018-9679-3](https://dx.doi.org/10.1007/s11238-018-9679-3)
- Oesterheld (2021)
  Caspar Oesterheld
  “Approval-directed agency and the decision theory of Newcomb-like problems”
  In *Synthese* 198.Suppl 27, 2021, pp. 6491–6504
  DOI: [10.1007/s11229-019-02148-2](https://dx.doi.org/10.1007/s11229-019-02148-2)
- Oesterheld & Conitzer (2022)
  Caspar Oesterheld and Vincent Conitzer
  “Safe Pareto improvements for delegated game playing”
  In *Autonomous Agents and Multi-Agent Systems* 36.2
  Springer, 2022, pp. 46
- Oesterheld et al. (2024)
  Caspar Oesterheld, Emery Cooper, Miles Kodama, Linh Nguyen and Ethan Perez
  “A dataset of questions on decision-theoretic reasoning in Newcomb-like problems”
  In *arXiv:2411.10588*, 2024
- Oesterheld et al. (2023)
  Caspar Oesterheld, Johannes Treutlein, Emery Cooper and Rubi Hudson
  “Incentivizing honest performative predictions with proper scoring rules”
  In *Uncertainty in Artificial Intelligence*, 2023, pp. 1564–1574
  PMLR
- Oesterheld et al. (2024a)
  Caspar Oesterheld, Johannes Treutlein, Roger. Grosse, Vincent Conitzer and Jakob Foerster
  “Similarity-based cooperative equilibrium”
  In *Advances in Neural Information Processing Systems* 36, 2024
- Okasha (2006)
  Samir Okasha
  “Evolution and the levels of selection”
  Clarendon Press, 2006
- Okasha (2018)
  Samir Okasha
  “Agents and Goals in Evolution”
  In *Oxford Scholarship Online*
  Oxford University Press, 2018
  DOI: [10.1093/oso/9780198815082.001.0001](https://dx.doi.org/10.1093/oso/9780198815082.001.0001)
- Oldenburg & Zhi-Xuan (2024)
  Ninell Oldenburg and Tan Zhi-Xuan
  “Learning and Sustaining Shared Normative Systems via Bayesian Rule Induction in Markov Games”
  In *Proceedings of the 23rd International Conference on Autonomous Agents and Multiagent Systems*, AAMAS ’24
  Auckland, New Zealand: International Foundation for Autonomous AgentsMultiagent Systems, 2024, pp. 1510–1520
- Olsson et al. (2022)
  Catherine Olsson, Nelson Elhage, Neel Nanda, Nicholas Joseph, Nova DasSarma, Tom Henighan, Ben Mann, Amanda Askell, Yuntao Bai, Anna Chen, Tom Conerly, Dawn Drain, Deep Ganguli, Zac Hatfield-Dodds, Danny Hernandez, Scott Johnston, Andy Jones, Jackson Kernion, Liane Lovitt, Kamal Ndousse, Dario Amodei, Tom Brown, Jack Clark, Jared Kaplan, Sam McCandlish and Chris Olah
  “In-context Learning and Induction Heads”
  In *arXiv:2209.11895*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2209.11895](https://dx.doi.org/10.48550/ARXIV.2209.11895)
- Omidshafiei et al. (2017)
  Shayegan Omidshafiei, Jason Pazis, Christopher Amato, Jonathan. How and John Vian
  “Deep Decentralized Multi-task Multi-agent Reinforcement Learning under Partial Observability”
  In *Proceedings of the 34th International Conference on Machine Learning - Volume 70*, ICML’17
  Sydney, NSW, Australia: JMLR.org, 2017, pp. 2681–2690
- Omohundro (2008)
  Stephen. Omohundro
  “The Basic AI Drives”
  In *Proceedings of the 2008 Conference on Artificial General Intelligence 2008: Proceedings of the First AGI Conference*
  NLD: IOS Press, 2008, pp. 483–492
- Open Ended Learning Team et al. (2021)
  Open Ended Learning Team, Adam Stooke, Anuj Mahajan, Catarina Barros, Charlie Deck, Jakob Bauer, Jakub Sygnowski, Maja Trebacz, Max Jaderberg, Michael Mathieu, Nat McAleese, Nathalie Bradley-Schmieg, Nathaniel Wong, Nicolas Porcel, Roberta Raileanu, Steph Hughes-Fitt, Valentin Dalibard and Wojciech Czarnecki
  “Open-Ended Learning Leads to Generally Capable Agents”, 2021
  DOI: [10.48550/arxiv.2107.12808](https://dx.doi.org/10.48550/arxiv.2107.12808)
- OpenAI (2023)
  OpenAI
  “GPT-4 System Card”, 2023
  URL: <https://cdn.openai.com/papers/gpt-4-system-card.pdf>
- OpenAI (2023a)
  OpenAI
  “Schelling Point Eval”, 2023
  GitHub
  URL: <https://github.com/openai/evals/tree/main/evals/elsuite/schelling_point>
- OpenAI (2023b)
  OpenAI
  “Text Compression Eval”, 2023
  GitHub
  URL: <https://github.com/openai/evals/blob/main/evals/elsuite/text_compression>
- OpenAI (2024)
  OpenAI
  “OpenAI o1 System Card”, 2024
  OpenAI
  URL: <https://openai.com/index/openai-o1-system-card/>
- OpenAI (2025)
  OpenAI
  “Introducing Operator”, 2025
  URL: <https://openai.com/index/introducing-operator/>
- Option Alpha (2025)
  Option Alpha
  “Financial History”, 2025
  URL: <https://optionalpha.com/topics/financial-history>
- Ord (2020)
  Toby Ord
  “The precipice: existential risk and the future of humanity”
  Hachette Books, 2020
- Oroojlooy & Hajinezhad (2022)
  Afshin Oroojlooy and Davood Hajinezhad
  “A review of cooperative multi-agent deep reinforcement learning”
  In *Applied Intelligence* 53.11
  Springer ScienceBusiness Media LLC, 2022, pp. 13677–13722
  DOI: [10.1007/s10489-022-04105-y](https://dx.doi.org/10.1007/s10489-022-04105-y)
- Orseau et al. (2018)
  Laurent Orseau, Simon McGill and Shane Legg
  “Agents and Devices: A Relative Definition of Agency”
  In *arXiv:1805.12387*
  arXiv, 2018
  DOI: [10.48550/ARXIV.1805.12387](https://dx.doi.org/10.48550/ARXIV.1805.12387)
- Ostrom (1990)
  Elinor Ostrom
  “Governing the commons: The evolution of institutions for collective action”
  Cambridge [England]; New York: Cambridge University Press, 1990, pp. 280
  URL: <http://www.worldcat.org/oclc/1119430541>
- Ovadya (2023)
  Aviv Ovadya
  “’Generative CI’ through Collective Response Systems” arXiv:2302.00672 [cs]
  arXiv, 2023
  DOI: [10.48550/arXiv.2302.00672](https://dx.doi.org/10.48550/arXiv.2302.00672)
- Pacchiardi et al. (2024)
  Lorenzo Pacchiardi, Alex Chan, Sören Mindermann, Ilan Moscovitz, Alexa Pan, Yarin Gal, Owain Evans and Jan. Brauner
  “How to Catch an AI Liar: Lie Detection in Black-Box LLMs by Asking Unrelated Questions”
  In *The Twelfth International Conference on Learning Representations*, 2024
  URL: <https://openreview.net/forum?id=567BjxgaTp>
- Padalkar et al. (2023)
  Abhishek Padalkar, Acorn Pooley, Ajinkya Jain, Alex Bewley, Alex Herzog, Alex Irpan, Alexander Khazatsky, Anant Rai, Anikait Singh, Anthony Brohan, Antonin Raffin, Ayzaan Wahid, Ben Burgess-Limerick, Beomjoon Kim, Bernhard Schölkopf, Brian Ichter, Cewu Lu, Charles Xu, Chelsea Finn, Chenfeng Xu, Cheng Chi, Chenguang Huang, Christine Chan, Chuer Pan, Chuyuan Fu, Coline Devin, Danny Driess, Deepak Pathak, Dhruv Shah, Dieter Büchler, Dmitry Kalashnikov, Dorsa Sadigh, Edward Johns, Federico Ceola, Fei Xia, Freek Stulp, Gaoyue Zhou, Gaurav. Sukhatme, Gautam Salhotra, Ge Yan, Giulio Schiavi, Hao Su, Hao-Shu Fang, Haochen Shi, Heni Amor, Henrik. Christensen, Hiroki Furuta, Homer Walke, Hongjie Fang, Igor Mordatch, Ilija Radosavovic, Isabel Leal, Jacky Liang, Jaehyung Kim, Jan Schneider, Jasmine Hsu, Jeannette Bohg, Jeffrey Bingham, Jiajun Wu, Jialin Wu, Jianlan Luo, Jiayuan Gu, Jie Tan, Jihoon Oh, Jitendra Malik, Jonathan Tompson, Jonathan Yang, Joseph. Lim, João Silvério, Junhyek Han, Kanishka Rao, Karl Pertsch, Karol Hausman, Keegan Go, Keerthana Gopalakrishnan, Ken Goldberg, Kendra Byrne, Kenneth Oslund, Kento Kawaharazuka, Kevin Zhang, Keyvan Majd, Krishan Rana, Krishnan Srinivasan, Lawrence Chen, Lerrel Pinto, Liam Tan, Lionel Ott, Lisa Lee, Masayoshi Tomizuka, Maximilian Du, Michael Ahn, Mingtong Zhang, Mingyu Ding, Mohan Srirama, Mohit Sharma, Moo Kim, Naoaki Kanazawa, Nicklas Hansen, Nicolas Heess, Nikhil. Joshi, Niko Suenderhauf, Norman Palo, Nur Shafiullah, Oier Mees, Oliver Kroemer, Pannag. Sanketi, Paul Wohlhart, Peng Xu, Pierre Sermanet, Priya Sundaresan, Quan Vuong, Rafael Rafailov, Ran Tian, Ria Doshi, Roberto Martín-Martín, Russell Mendonca, Rutav Shah, Ryan Hoque, Ryan Julian, Samuel Bustamante, Sean Kirmani, Sergey Levine, Sherry Moore, Shikhar Bahl, Shivin Dass, Shuran Song, Sichun Xu, Siddhant Haldar, Simeon Adebola, Simon Guist, Soroush Nasiriany, Stefan Schaal, Stefan Welker, Stephen Tian, Sudeep Dasari, Suneel Belkhale, Takayuki Osa, Tatsuya Harada, Tatsuya Matsushima, Ted Xiao, Tianhe Yu, Tianli Ding, Todor Davchev, Tony. Zhao, Travis Armstrong, Trevor Darrell, Vidhi Jain, Vincent Vanhoucke, Wei Zhan, Wenxuan Zhou, Wolfram Burgard, Xi Chen, Xiaolong Wang, Xinghao Zhu, Xuanlin Li, Yao Lu, Yevgen Chebotar, Yifan Zhou, Yifeng Zhu, Ying Xu, Yixuan Wang, Yonatan Bisk, Yoonyoung Cho, Youngwoon Lee, Yuchen Cui, Yueh-hua Wu, Yujin Tang, Yuke Zhu, Yunzhu Li, Yusuke Iwasawa, Yutaka Matsuo, Zhuo Xu and Zichen Cui
  “Open X-Embodiment: Robotic Learning Datasets and RT-X Models”
  In *arXiv:2310.08864*, 2023
- Paes et al. (2024)
  Renato Paes, Georgios Piliouras, Jon Schneider, Kelly Spendlove and Song Zuo
  “Complex Dynamics in Autobidding Systems”
  In *Proceedings of the 25th ACM Conference on Economics and Computation*, EC ’24
  ACM, 2024, pp. 75–100
  DOI: [10.1145/3670865.3673551](https://dx.doi.org/10.1145/3670865.3673551)
- Palaiopanos et al. (2017)
  Gerasimos Palaiopanos, Ioannis Panageas and Georgios Piliouras
  “Multiplicative weights update with constant step-size in congestion games: Convergence, limit cycles and chaos”
  In *Advances in Neural Information Processing Systems* 30, 2017
- Palantir (2025)
  Palantir
  “AIP for Defense”, <https://www.palantir.com/platforms/aip/defense/>, 2025
- Pan et al. (2023)
  Alexander Pan, Jun Chan, Andy Zou, Nathaniel Li, Steven Basart, Thomas Woodside, Hanlin Zhang, Scott Emmons and Dan Hendrycks
  “Do the rewards justify the means? measuring trade-offs between rewards and ethical behavior in the machiavelli benchmark”
  In *International Conference on Machine Learning*
  proceedings.mlr.press, 2023, pp. 26837–26867
- Panickssery et al. (2024)
  Arjun Panickssery, Samuel. Bowman and Shi Feng
  “LLM Evaluators Recognize and Favor Their Own Generations”
  In *The Thirty-eighth Annual Conference on Neural Information Processing Systems*, 2024
  URL: <https://openreview.net/forum?id=4NJBV6Wp0h>
- Papadimitriou & Piliouras (2019)
  Christos Papadimitriou and Georgios Piliouras
  “Game dynamics as the meaning of a game”
  In *ACM SIGecom Exchanges* 16.2
  ACM New York, NY, USA, 2019, pp. 53–63
- Papoudakis et al. (2019)
  Georgios Papoudakis, Filippos Christianos, Arrasy Rahman and Stefano. Albrecht
  “Dealing with Non-Stationarity in Multi-Agent Deep Reinforcement Learning”
  In *arXiv:1906.04737*, 2019
  DOI: [10.48550/arxiv.1906.04737](https://dx.doi.org/10.48550/arxiv.1906.04737)
- Pardoe et al. (2006)
  David Pardoe, Peter Stone, Maytal Saar-Tsechansky and Kerem Tomak
  “Adaptive mechanism design”
  In *Proceedings of the 8th international conference on Electronic commerce The new e-commerce: innovations for conquering current barriers, obstacles and limitations to conducting successful business on the internet - ICEC ’06*
  ACM Press, 2006
  DOI: [10.1145/1151454.1151480](https://dx.doi.org/10.1145/1151454.1151480)
- Park et al. (2023)
  Joon Park, Joseph. O’Brien, Carrie. Cai, Meredith Morris, Percy Liang and Michael. Bernstein
  “Generative agents: Interactive simulacra of human behavior”
  In *arXiv:2304.03442*, 2023
- Park et al. (2023a)
  Peter. Park, Simon Goldstein, Aidan O’Gara, Michael Chen and Dan Hendrycks
  “AI Deception: A Survey of Examples, Risks, and Potential Solutions”
  In *arXiv:2308.14752*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2308.14752](https://dx.doi.org/10.48550/ARXIV.2308.14752)
- Park et al. (2024)
  Peter. Park, Simon Goldstein, Aidan O’Gara, Michael Chen and Dan Hendrycks
  “AI deception: A survey of examples, risks, and potential solutions”
  In *Patterns* 5.5
  Elsevier BV, 2024, pp. 100988
  DOI: [10.1016/j.patter.2024.100988](https://dx.doi.org/10.1016/j.patter.2024.100988)
- Parker-Holder et al. (2022)
  Jack Parker-Holder, Minqi Jiang, Michael Dennis, Mikayel Samvelyan, Jakob Foerster, Edward Grefenstette and Tim Rocktäschel
  “Evolving curricula with regret-based environment design”
  In *International Conference on Machine Learning*, 2022, pp. 17473–17498
  PMLR
- Patil et al. (2024)
  Shishir. Patil, Tianjun Zhang, Vivian Fang, C. Noppapon, Roy Huang, Aaron Hao, Martin Casado, Joseph. Gonzalez, Raluca Popa and Ion Stoica
  “GoEX: Perspectives and Designs Towards a Runtime for Autonomous LLM Applications”
  In *arXiv:2404.06921*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2404.06921](https://dx.doi.org/10.48550/ARXIV.2404.06921)
- Patil et al. (2023)
  Shishir. Patil, Tianjun Zhang, Xin Wang and Joseph. Gonzalez
  “Gorilla: Large Language Model Connected with Massive APIs”
  In *ArXiv* abs/2305.15334, 2023
  URL: <https://api.semanticscholar.org/CorpusID:258865184>
- Paulin et al. (2019)
  James Paulin, Anisoara Calinescu and Michael Wooldridge
  “Understanding flash crash contagion and systemic risk: A micro–macro agent-based approach”
  In *Journal of Economic Dynamics and Control* 100
  Elsevier, 2019, pp. 200–229
  DOI: [10.1016/j.jedc.2018.12.008](https://dx.doi.org/10.1016/j.jedc.2018.12.008)
- Pavlova et al. (2024)
  Maya Pavlova, Erik Brinkman, Krithika Iyer, Vitor Albiero, Joanna Bitton, Hailey Nguyen, Joe Li, Cristian Ferrer, Ivan Evtimov and Aaron Grattafiori
  “Automated Red Teaming with GOAT: the Generative Offensive Agent Tester”
  In *arXiv:2410.01606*, 2024
- Pearl (2009)
  Judea Pearl
  “Causality”
  Cambridge University Press, 2009
  DOI: [10.1017/cbo9780511803161](https://dx.doi.org/10.1017/cbo9780511803161)
- Perez et al. (2022)
  Ethan Perez, Saffron Huang, Francis Song, Trevor Cai, Roman Ring, John Aslanides, Amelia Glaese, Nat McAleese and Geoffrey Irving
  “Red Teaming Language Models with Language Models”
  In *arXiv:2202.03286*, 2022
  DOI: [10.48550/arxiv.2202.03286](https://dx.doi.org/10.48550/arxiv.2202.03286)
- Perez et al. (2022a)
  Ethan Perez, Sam Ringer, Kamilė Lukošiūtė, Karina Nguyen, Edwin Chen, Scott Heiner, Craig Pettit, Catherine Olsson, Sandipan Kundu, Saurav Kadavath, Andy Jones, Anna Chen, Ben Mann, Brian Israel, Bryan Seethor, Cameron McKinnon, Christopher Olah, Da Yan, Daniela Amodei, Dario Amodei, Dawn Drain, Dustin Li, Eli Tran-Johnson, Guro Khundadze, Jackson Kernion, James Landis, Jamie Kerr, Jared Mueller, Jeeyoon Hyun, Joshua Landau, Kamal Ndousse, Landon Goldberg, Liane Lovitt, Martin Lucas, Michael Sellitto, Miranda Zhang, Neerav Kingsland, Nelson Elhage, Nicholas Joseph, Noemí Mercado, Nova DasSarma, Oliver Rausch, Robin Larson, Sam McCandlish, Scott Johnston, Shauna Kravec, Sheer Showk, Tamera Lanham, Timothy Telleen-Lawton, Tom Brown, Tom Henighan, Tristan Hume, Yuntao Bai, Zac Hatfield-Dodds, Jack Clark, Samuel. Bowman, Amanda Askell, Roger Grosse, Danny Hernandez, Deep Ganguli, Evan Hubinger, Nicholas Schiefer and Jared Kaplan
  “Discovering Language Model Behaviors with Model-Written Evaluations”
  In *arXiv:2212.09251*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2212.09251](https://dx.doi.org/10.48550/ARXIV.2212.09251)
- Perez & Ribeiro (2022)
  Fábio Perez and Ian Ribeiro
  “Ignore Previous Prompt: Attack Techniques For Language Models”
  In *ArXiv* abs/2211.09527, 2022
  URL: <https://api.semanticscholar.org/CorpusID:253581710>
- Perez et al. (2024)
  Jérémy Perez, Corentin Léger, Marcela Ovando-Tellez, Chris Foulon, Joan Dussauld, Pierre-Yves Oudeyer and Clément Moulin-Frier
  “Cultural evolution in populations of Large Language Models”
  In *arXiv:2403.08882*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2403.08882](https://dx.doi.org/10.48550/ARXIV.2403.08882)
- Peshkin et al. (2000)
  Leonid Peshkin, Kee-Eung Kim, Nicolas Meuleau and Leslie Kaelbling
  “Learning to Cooperate Via Policy Search”
  In *Proceedings of the Sixteenth Conference on Uncertainty in Artificial Intelligence*, UAI’00
  Stanford, California: Morgan Kaufmann Publishers Inc., 2000, pp. 489–496
- Peskov et al. (2020)
  Denis Peskov, Benny Cheng, Ahmed Elgohary, Joe Barrow, Cristian Danescu-Niculescu-Mizil and Jordan Boyd-Graber
  “It Takes Two to Lie: One to Lie, and One to Listen”
  In *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*
  Association for Computational Linguistics, 2020
  DOI: [10.18653/v1/2020.acl-main.353](https://dx.doi.org/10.18653/v1/2020.acl-main.353)
- Piao et al. (2025)
  Jinghua Piao, Zhihong Lu, Chen Gao, Fengli Xu, Fernando. Santos, Yong Li and James Evans
  “Emergence of human-like polarization among large language model agents”
  In *arXiv:2501.05171*, 2025
  DOI: [10.48550/arxiv.2501.05171](https://dx.doi.org/10.48550/arxiv.2501.05171)
- Piatti et al. (2024)
  Giorgio Piatti, Zhijing Jin, Max Kleiman-Weiner, Bernhard Schölkopf, Mrinmaya Sachan and Rada Mihalcea
  “Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents”
  In *arXiv:2404.16698*, 2024
  DOI: [10.48550/arxiv.2404.16698](https://dx.doi.org/10.48550/arxiv.2404.16698)
- Piliouras & Wang (2021)
  Georgios Piliouras and Xiao Wang
  “Constants of Motion: The Antidote to Chaos in Optimization and Game Dynamics”
  In *arXiv:2109.03974*
  arXiv, 2021
  DOI: [10.48550/ARXIV.2109.03974](https://dx.doi.org/10.48550/ARXIV.2109.03974)
- Piliouras & Yu (2022)
  Georgios Piliouras and Fang-Yi Yu
  “Multi-agent Performative Prediction: From Global Stability and Optimality to Chaos”
  In *arXiv:2201.10483*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2201.10483](https://dx.doi.org/10.48550/ARXIV.2201.10483)
- Poslad et al. (2002)
  Stefan Poslad, Patricia Charlton and Monique Calisti
  “Specifying standard security mechanisms in multi-agent systems”
  In *Workshop on Deception, Fraud and Trust in Agent Societies*, 2002, pp. 163–176
  Springer
- Possajennikov (2000)
  Alex Possajennikov
  “On the evolutionary stability of altruistic and spiteful preferences”
  In *J. Econ. Behav. Organ.* 42.1
  Elsevier, 2000, pp. 125–129
- Powell (2006)
  Robert Powell
  “War as a Commitment Problem”
  In *Int. Organ.* 60.1
  Cambridge University Press, 2006, pp. 169–203
- Power et al. (2022)
  Alethea Power, Yuri Burda, Harri Edwards, Igor Babuschkin and Vedant Misra
  “Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets”
  In *arXiv:2201.02177*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2201.02177](https://dx.doi.org/10.48550/ARXIV.2201.02177)
- Prasad (2018)
  Mahendra Prasad
  “Social Choice and the Value Alignment Problem”
  ChapmanHall/CRC, 2018, pp. 291–314
- Prelec (2004)
  Dražen Prelec
  “A Bayesian Truth Serum for Subjective Data”
  In *Science* 306.5695
  American Association for the Advancement of Science (AAAS), 2004, pp. 462–466
  DOI: [10.1126/science.1102081](https://dx.doi.org/10.1126/science.1102081)
- Qin et al. (2023)
  Yujia Qin, Shi Liang, Yining Ye, Kunlun Zhu, Lan Yan, Ya-Ting Lu, Yankai Lin, Xin Cong, Xiangru Tang, Bill Qian, Sihan Zhao, Runchu Tian, Ruobing Xie, Jie Zhou, Marc. Gerstein, Dahai Li, Zhiyuan Liu and Maosong Sun
  “ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs”
  In *ArXiv* abs/2307.16789, 2023
  URL: <https://api.semanticscholar.org/CorpusID:260334759>
- Raghavan et al. (2020)
  Manish Raghavan, Solon Barocas, Jon Kleinberg and Karen Levy
  “Mitigating bias in algorithmic hiring: evaluating claims and practices”
  In *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*, FAT\* ’20
  ACM, 2020
  DOI: [10.1145/3351095.3372828](https://dx.doi.org/10.1145/3351095.3372828)
- Rahwan et al. (2019)
  Iyad Rahwan, Manuel Cebrian, Nick Obradovich, Josh Bongard, Jean-François Bonnefon, Cynthia Breazeal, Jacob. Crandall, Nicholas. Christakis, Iain. Couzin, Matthew. Jackson, Nicholas. Jennings, Ece Kamar, Isabel. Kloumann, Hugo Larochelle, David Lazer, Richard McElreath, Alan Mislove, David. Parkes, Alex‘Sandy’ Pentland, Margaret. Roberts, Azim Shariff, Joshua. Tenenbaum and Michael Wellman
  “Machine behaviour”
  In *Nature* 568.7753
  Springer ScienceBusiness Media LLC, 2019, pp. 477–486
  DOI: [10.1038/s41586-019-1138-y](https://dx.doi.org/10.1038/s41586-019-1138-y)
- Raman et al. (2019)
  Gururaghav Raman, Jimmy-Hsien Peng and Talal Rahwan
  “Manipulating Residents’ Behavior to Attack the Urban Power Distribution System”
  In *IEEE Transactions on Industrial Informatics* 15.10
  Institute of ElectricalElectronics Engineers (IEEE), 2019, pp. 5575–5587
  DOI: [10.1109/tii.2019.2903882](https://dx.doi.org/10.1109/tii.2019.2903882)
- Rand et al. (2013)
  David. Rand, Corina. Tarnita, Hisashi Ohtsuki and Martin. Nowak
  “Evolution of fairness in the one-shot anonymous ultimatum game”
  In *Proceedings of the National Academy of Sciences* 110.7
  National Acad Sciences, 2013, pp. 2581–2586
- Rashid et al. (2018)
  Tabish Rashid, Mikayel Samvelyan, Christianöder de Witt, Gregory Farquhar, Jakob. Foerster and Shimon Whiteson
  “QMIX: Monotonic Value Function Factorisation for Deep Multi-agent Reinforcement Learning”
  In *Proceedings of the 35th International Conference on Machine Learning, ICML 2018, Stockholmsmässan, Stockholm, Sweden, July 10-15, 2018* 80, Proceedings of Machine Learning Research
  PMLR, 2018, pp. 4292–4301
  URL: <http://proceedings.mlr.press/v80/rashid18a.html>
- Rees (1993)
  Ray Rees
  “Tacit Collusion”
  In *Oxford Review of Economic Policy* 9.2
  Oxford University Press (OUP), 1993, pp. 27–40
  DOI: [10.1093/oxrep/9.2.27](https://dx.doi.org/10.1093/oxrep/9.2.27)
- Reif (1984)
  John. Reif
  “The complexity of two-player games of incomplete information”
  In *Journal of Computer and System Sciences* 29.2
  Elsevier BV, 1984, pp. 274–301
  DOI: [10.1016/0022-0000(84)90034-5](https://dx.doi.org/10.1016/0022-0000(84)90034-5)
- Renshaw & Hunnicutt (2024)
  Jarrett Renshaw and Trevor Hunnicutt
  “Biden, Xi agree that humans, not AI, should control nuclear arms”
  In *Reuters*, 2024
  URL: <https://www.reuters.com/world/biden-xi-agreed-that-humans-not-ai-should-control-nuclear-weapons-white-house-2024-11-16/>
- Reséndiz-Benhumea et al. (2019)
  Georgina Reséndiz-Benhumea, Tom Froese, Gabriel Ramos-Fernández and Sandra. Aguilar
  “Applying Social Network Analysis to Agent-Based Models: A Case Study of Task Allocation in Swarm Robotics Inspired by Ant Foraging Behavior”
  In *Artificial Life Conference Proceedings*, 2019, pp. 616–623
  URL: <https://api.semanticscholar.org/CorpusID:199589554>
- Reuel et al. (2024)
  Anka Reuel, Ben Bucknall, Stephen Casper, Tim Fist, Lisa Soder, Onni Aarne, Lewis Hammond, Lujain Ibrahim, Alan Chan, Peter Wills, Markus Anderljung, Ben Garfinkel, Lennart Heim, Andrew Trask, Gabriel Mukobi, Rylan Schaeffer, Mauricio Baker, Sara Hooker, Irene Solaiman, Alexandra Luccioni, Nitarshan Rajkumar, Nicolas Moës, Jeffrey Ladish, Neel Guha, Jessica Newman, Yoshua Bengio, Tobin South, Alex Pentland, Sanmi Koyejo, Mykel. Kochenderfer and Robert Trager
  “Open Problems in Technical AI Governance”
  In *arXiv:2407.14981*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2407.14981](https://dx.doi.org/10.48550/ARXIV.2407.14981)
- Reuel et al. (2024a)
  Anka Reuel, Amelia Hardy, Chandler Smith, Max Lamparth, Malcolm Hardy and Mykel Kochenderfer
  “BetterBench: Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices”
  In *The Thirty-eight Conference on Neural Information Processing Systems Datasets and Benchmarks Track*, 2024
  URL: <https://openreview.net/forum?id=hcOq2buakM>
- Reuel & Undheim (2024)
  Anka Reuel and Trond Undheim
  “Generative AI Needs Adaptive Governance”
  In *arXiv:2406.04554*, 2024
- Richardson (1960)
  Lewis Richardson
  “Arms and Insecurity: A Mathematical Study of the Causes and Origins of War”
  Boxwood Press, 1960
- Richerson & Boyd (2010)
  Peter. Richerson and Robert Boyd
  “Not By Genes Alone”
  Chicago, IL: University of Chicago Press, 2010
- Rismani et al. (2023)
  Shalaleh Rismani, Renee Shelby, Andrew Smart, Edgar Jatho, Joshua Kroll, AJung Moon and Negar Rostamzadeh
  “From Plane Crashes to Algorithmic Harm: Applicability of Safety Engineering Frameworks for Responsible ML”
  In *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems*, CHI ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 1–18
  DOI: [10.1145/3544548.3581407](https://dx.doi.org/10.1145/3544548.3581407)
- Rivera et al. (2024)
  Juan-Pablo Rivera, Gabriel Mukobi, Anka Reuel, Max Lamparth, Chandler Smith and Jacquelyn Schneider
  “Escalation Risks from Language Models in Military and Diplomatic Decision-Making”
  In *The 2024 ACM Conference on Fairness, Accountability, and Transparency*, FAccT ’24
  ACM, 2024, pp. 836–898
  DOI: [10.1145/3630106.3658942](https://dx.doi.org/10.1145/3630106.3658942)
- Roemer (2010)
  John. Roemer
  “Kantian equilibrium”
  In *Scandinavian Journal of Economics* 112.1
  Wiley Online Library, 2010, pp. 1–24
- Roger & Greenblatt (2023)
  Fabien Roger and Ryan Greenblatt
  “Preventing Language Models From Hiding Their Reasoning”
  In *arXiv:2310.18512*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2310.18512](https://dx.doi.org/10.48550/ARXIV.2310.18512)
- Rusch (2014)
  Hannes Rusch
  “The evolutionary interplay of intergroup conflict and altruism in humans: a review of parochial altruism theory and prospects for its extension”
  In *Proc. Biol. Sci.* 281.1794
  royalsocietypublishing.org, 2014, pp. 20141539
- Russell (2019)
  Stuart Russell
  “Human Compatible”
  Penguin LCC US, 2019
  URL: <https://www.ebook.de/de/product/35445097/stuart_russell_human_compatible.html>
- Sadeghi & Arvanitis (2023)
  McKenzie Sadeghi and Lorenzo Arvanitis
  “Rise of the Newsbots: AI-Generated News Websites Proliferating Online”
  In *NewsGuard*, 2023
  URL: <https://www.newsguardtech.com/special-reports/newsbots-ai-generated-news-websites-proliferating/>
- Samvelyan et al. (2023)
  Mikayel Samvelyan, Akbir Khan, Michael Dennis, Minqi Jiang, Jack Parker-Holder, Jakob Foerster, Roberta Raileanu and Tim Rocktäschel
  “MAESTRO: Open-ended environment design for multi-agent reinforcement learning”
  In *arXiv:2303.03376*, 2023
- Sandbrink et al. (2022)
  Jonas Sandbrink, Hamish Hobbs, Jacob Swett, Allan Dafoe and Anders Sandberg
  “Differential Technology Development: A Responsible Innovation Principle for Navigating Technology Risks”
  In *SSRN Electronic Journal*
  Elsevier BV, 2022
  DOI: [10.2139/ssrn.4213670](https://dx.doi.org/10.2139/ssrn.4213670)
- Sanders et al. (2018)
  James.. Sanders, J. Farmer and Tobias Galla
  “The prevalence of chaotic dynamics in games with many players”
  In *Scientific Reports* 8.1
  Springer ScienceBusiness Media LLC, 2018
  DOI: [10.1038/s41598-018-22013-5](https://dx.doi.org/10.1038/s41598-018-22013-5)
- Sandholm & Lesser (2002)
  Tuomas Sandholm and Victor Lesser
  “Leveled-Commitment Contracting: A Backtracking Instrument for Multiagent Systems”
  In *AI Magazine* 23.3, 2002, pp. 89–100
  DOI: [10.1609/aimag.v23i3.1659](https://dx.doi.org/10.1609/aimag.v23i3.1659)
- Sandholm (2010)
  William. Sandholm
  “Population games and evolutionary dynamics”
  MIT press, 2010
- Sangwan et al. (2023)
  Raghvinder. Sangwan, Youakim Badr and Satish. Srinivasan
  “Cybersecurity for AI Systems: A Survey”
  In *Journal of Cybersecurity and Privacy* 3.2, 2023, pp. 166–190
  DOI: [10.3390/jcp3020010](https://dx.doi.org/10.3390/jcp3020010)
- Santos et al. (2019)
  Fernando. Santos, Jorge. Pacheco, Ana Paiva and Francisco. Santos
  “Evolution of collective fairness in hybrid populations of humans and agents”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 33.01, 2019, pp. 6146–6153
- Sastry (1999)
  Shankar Sastry
  “Nonlinear Systems”
  In *Interdisciplinary Applied Mathematics*
  Springer New York, 1999
  DOI: [10.1007/978-1-4757-3108-8](https://dx.doi.org/10.1007/978-1-4757-3108-8)
- Sato et al. (2002)
  Yuzuru Sato, Eizo Akiyama and J. Farmer
  “Chaos in learning a simple two-person game”
  In *Proceedings of the National Academy of Sciences* 99.7
  National Acad Sciences, 2002, pp. 4748–4751
- Schäfer et al. (2018)
  Benjamin Schäfer, Dirk Witthaut, Marc Timme and Vito Latora
  “Dynamically induced cascading failures in power grids”
  In *Nature communications* 9.1
  Nature Publishing Group UK London, 2018, pp. 1975
- Schelling (1980)
  Thomas. Schelling
  “The Strategy of Conflict: With a New Preface by the Author”
  Cambridge, MA: Harvard University Press, 1980
- Schick et al. (2023)
  Timo Schick, Jane Dwivedi-Yu, Roberto Dessi, Roberta Raileanu, Maria Lomeli, Eric Hambro, Luke Zettlemoyer, Nicola Cancedda and Thomas Scialom
  “Toolformer: Language Models Can Teach Themselves to Use Tools”
  In *Thirty-seventh Conference on Neural Information Processing Systems*, 2023
  URL: <https://openreview.net/forum?id=Yacmpz84TH>
- Schmeidler (1969)
  David Schmeidler
  “The nucleolus of a characteristic function game”
  In *SIAM Journal on applied mathematics* 17.6
  SIAM, 1969, pp. 1163–1170
- Schmidt (2022)
  Eric Schmidt
  “AI, Great Power Competition & National Security”
  In *Daedalus* 151, 2022, pp. 288–298
  URL: <https://api.semanticscholar.org/CorpusID:248377868>
- Schmitz (2001)
  Patrick. Schmitz
  “The hold-up problem and incomplete contracts: a survey of recent topics in contract theory”
  In *Bulletin of economic research* 53.1
  Wiley Online Library, 2001, pp. 1–17
- Schneier (2012)
  Bruce Schneier
  “Liars and Outliers: Enabling the Trust that Society Needs to Thrive”
  Somerset: Wiley, 2012
- Schroeder et al. (2023)
  Christian Schroeder, Hawra Milani, Klaudia Krawiecka, Swapneel Mehta, Carla Cremer and Martin Strohmeier
  “Multi-Agent Security Workshop at NeurIPS 2023”
  NeurIPS’23, 2023
  URL: <https://neurips.cc/virtual/2023/workshop/66520>
- Schroeder et al. (2023a)
  Christian Schroeder, Samuel Sokota, J. Kolter, Jakob Foerster and Martin Strohmeier
  “Perfectly Secure Steganography Using Minimum Entropy Coupling”
  In *The Eleventh International Conference on Learning Representations*, 2023
  URL: <https://openreview.net/forum?id=HQ67mj5rJdR>
- Schulman et al. (2017)
  John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford and Oleg Klimov
  “Proximal Policy Optimization Algorithms”
  In *arXiv:1707.06347*, 2017
  DOI: [10.48550/arxiv.1707.06347](https://dx.doi.org/10.48550/arxiv.1707.06347)
- Schwettmann et al. (2023)
  Sarah Schwettmann, Tamar Shaham, Joanna Materzynska, Neil Chowdhury, Shuang Li, Jacob Andreas, David Bau and Antonio Torralba
  “FIND: A Function Description Benchmark for Evaluating Interpretability Methods”
  In *NeurIPS 2023*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2309.03886](https://dx.doi.org/10.48550/ARXIV.2309.03886)
- SecureWorks (2023)
  SecureWorks
  “Unravelling the Attack Surface of AI Systems”, 2023
  URL: <https://www.secureworks.com/blog/unravelling-the-attack-surface-of-ai-systems>
- Seger et al. (2023)
  Elizabeth Seger, Noemi Dreksler, Richard Moulange, Emily Dardaman, Jonas Schuett, K. Wei, Christoph Winter, Mackenzie Arnold, SeánÓ hÉigeartaigh, Anton Korinek, Markus Anderljung, Ben Bucknall, Alan Chan, Eoghan Stafford, Leonie Koessler, Aviv Ovadya, Ben Garfinkel, Emma Bluemke, Michael Aird, Patrick Levermore, Julian Hazell and Abhishek Gupta
  “Open-Sourcing Highly Capable Foundation Models: An evaluation of risks, benefits, and alternative methods for pursuing open-source objectives”
  In *arXiv:2311.09227*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2311.09227](https://dx.doi.org/10.48550/ARXIV.2311.09227)
- Seger et al. (2023a)
  Elizabeth Seger, Aviv Ovadya, Divya Siddarth, Ben Garfinkel and Allan Dafoe
  “Democratising AI: Multiple Meanings, Goals, and Methods”
  In *Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 715–722
  DOI: [10.1145/3600211.3604693](https://dx.doi.org/10.1145/3600211.3604693)
- Serapio-García et al. (2023)
  Greg Serapio-García, Mustafa Safdari, Clément Crepy, Luning Sun, Stephen Fitz, Peter Romero, Marwa Abdulhai, Aleksandra Faust and Maja Matarić
  “Personality Traits in Large Language Models”
  In *arXiv:2307.00184*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2307.00184](https://dx.doi.org/10.48550/ARXIV.2307.00184)
- Serrino et al. (2019)
  Jack Serrino, Max Kleiman-Weiner, David. Parkes and Joshua. Tenenbaum
  “Finding friend and foe in multi-agent games”
  In *Proceedings of the 33rd International Conference on Neural Information Processing Systems*
  Red Hook, NY, USA: Curran Associates Inc., 2019
- Seth (2006)
  Anil Seth
  “Measuring emergence via nonlinear Granger causality”
  In *Artificial Life XI: Proceedings of the Eleventh International Conference on the Simulation and Synthesis of Living Systems*, 2006
- Shah (2023)
  Nisarg Shah
  “Pushing the Limits of Fairness in Algorithmic Decision-Making”
  In *Proceedings of the 32nd International Joint Conference on Artificial Intelligence (IJCAI)*, 2023, pp. 7051–7056
- Shakarian et al. (2013)
  Paulo Shakarian, Jana Shakarian and Andrew Ruef
  “Chapter 12 - Can Cyber Warfare Leave a Nation in the Dark? Cyber Attacks Against Electrical Infrastructure”
  In *Introduction to Cyber-Warfare*
  Boston: Syngress, 2013, pp. 209–222
  DOI: [10.1016/B978-0-12-407814-7.00012-9](https://dx.doi.org/10.1016/B978-0-12-407814-7.00012-9)
- Shao et al. (2024)
  Yijia Shao, Tianshi Li, Weiyan Shi, Yanchen Liu and Diyi Yang
  “PrivacyLens: Evaluating Privacy Norm Awareness of Language Models in Action”
  In *The Thirty-eight Conference on Neural Information Processing Systems Datasets and Benchmarks Track*, 2024
  URL: <https://openreview.net/forum?id=CxNXoMnCKc>
- Shapley (1953)
  Lloyd. Shapley
  “A value for n-person games”
  In *Contribution to the Theory of Games* 2, 1953
- Sharma et al. (2024)
  Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel. Bowman, Esin Durmus, Zac Hatfield-Dodds, Scott. Johnston, Shauna. Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang and Ethan Perez
  “Towards Understanding Sycophancy in Language Models”
  In *The Twelfth International Conference on Learning Representations*, 2024
  URL: <https://openreview.net/forum?id=tvhaxkMKAn>
- Sharma (2025)
  Prashant Sharma
  “How Cyberscammers Use AI to Manipulate Google Search Results”
  In *Tech Pluto*, 2025
  URL: <https://www.techpluto.com/how-cyberscammers-use-ai-to-manipulate-google-search-results/>
- Shavit (2023)
  Yonadav Shavit
  “What does it take to catch a Chinchilla? Verifying Rules on Large-Scale Neural Network Training via Compute Monitoring”
  In *ArXiv* abs/2303.11341, 2023
  URL: <https://api.semanticscholar.org/CorpusID:257636856>
- Shearer et al. (2023)
  Megan. Shearer, Gabriel Rauterberg and Michael. Wellman
  “Learning to Manipulate a Financial Benchmark”
  In *Fourth International Conference on Artificial Intelligence in Finance*, 2023
- Shelby et al. (2023)
  Renee Shelby, Shalaleh Rismani, Kathryn Henne, AJung Moon, Negar Rostamzadeh, Paul Nicholas, N’Mah Yilla-Akbari, Jess Gallegos, Andrew Smart, Emilio Garcia and Gurleen Virk
  “Sociotechnical Harms of Algorithmic Systems: Scoping a Taxonomy for Harm Reduction”
  In *Proceedings of the 2023 AAAI/ACM Conference on AI, Ethics, and Society*, AIES ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 723–741
  DOI: [10.1145/3600211.3604673](https://dx.doi.org/10.1145/3600211.3604673)
- Shevlane et al. (2023)
  Toby Shevlane, Sebastian Farquhar, Ben Garfinkel, Mary Phuong, Jess Whittlestone, Jade Leung, Daniel Kokotajlo, Nahema Marchal, Markus Anderljung, Noam Kolt, Lewis Ho, Divya Siddarth, Shahar Avin, Will Hawkins, Been Kim, Iason Gabriel, Vijay Bolina, Jack Clark, Yoshua Bengio, Paul Christiano and Allan Dafoe
  “Model evaluation for extreme risks”
  In *arXiv:2305.15324*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2305.15324](https://dx.doi.org/10.48550/ARXIV.2305.15324)
- Shnayder et al. (2016)
  Victor Shnayder, Arpit Agarwal, Rafael Frongillo and David. Parkes
  “Informed Truthfulness in Multi-Task Peer Prediction”
  In *Proceedings of the 2016 ACM Conference on Economics and Computation*, EC ’16
  ACM, 2016
  DOI: [10.1145/2940716.2940790](https://dx.doi.org/10.1145/2940716.2940790)
- Shoham & Tennenholtz (1992)
  Yoav Shoham and Moshe Tennenholtz
  “On the Synthesis of Useful Social Laws for Artificial Agent Societies”
  In *Proceedings of the Tenth National Conference on Artificial Intelligence*, AAAI’92
  San Jose, California: AAAI Press, 1992, pp. 276–281
- Shrivastava et al. (2024)
  Aryan Shrivastava, Jessica Hullman and Max Lamparth
  “Measuring Free-Form Decision-Making Inconsistency of Language Models in Military Crisis Simulations”
  In *arXiv:2410.13204*, 2024
  DOI: [10.48550/arxiv.2410.13204](https://dx.doi.org/10.48550/arxiv.2410.13204)
- Shumailov et al. (2024)
  Ilia Shumailov, Zakhar Shumaylov, Yiren Zhao, Nicolas Papernot, Ross Anderson and Yarin Gal
  “AI models collapse when trained on recursively generated data”
  In *Nature* 631, 2024, pp. 755–759
  URL: <https://api.semanticscholar.org/CorpusID:271448069>
- Siegel et al. (2024)
  Zachary. Siegel, Sayash Kapoor, Nitya Nagdir, Benedikt Stroebl and Arvind Narayanan
  “CORE-Bench: Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark”
  In *arXiv:2409.11363*, 2024
- Siegenfeld & Bar-Yam (2020)
  Alexander. Siegenfeld and Yaneer Bar-Yam
  “An introduction to complex systems science and its applications”
  In *Complexity* 2020
  Hindawi Limited, 2020, pp. 1–16
- Sigmund et al. (2010)
  Karl Sigmund, Hannelore De, Arne Traulsen and Christoph Hauert
  “Social learning promotes institutions for governing the commons”
  In *Nature* 466.7308
  Nature Publishing Group UK London, 2010, pp. 861–863
- Silver et al. (2016)
  David Silver, Aja Huang, Chris. Maddison, Arthur Guez, Laurent Sifre, George van Driessche, Julian Schrittwieser, Ioannis Antonoglou, Veda Panneershelvam, Marc Lanctot, Sander Dieleman, Dominik Grewe, John Nham, Nal Kalchbrenner, Ilya Sutskever, Timothy Lillicrap, Madeleine Leach, Koray Kavukcuoglu, Thore Graepel and Demis Hassabis
  “Mastering the Game of Go with Deep Neural Networks and Tree Search”
  In *Nature* 529.7587
  Springer ScienceBusiness Media LLC, 2016, pp. 484–489
  DOI: [10.1038/nature16961](https://dx.doi.org/10.1038/nature16961)
- Sinitsin et al. (2020)
  Anton Sinitsin, Vsevolod Plokhotnyuk, Dmitry Pyrkin, Sergei Popov and Artem Babenko
  “Editable Neural Networks”
  In *International Conference on Learning Representations*, 2020
  URL: <https://openreview.net/forum?id=HJedXaEtvS>
- Siththaranjan et al. (2024)
  Anand Siththaranjan, Cassidy Laidlaw and Dylan Hadfield-Menell
  “Distributional Preference Learning: Understanding and Accounting for Hidden Context in RLHF”
  In *The Twelfth International Conference on Learning Representations*, 2024
  URL: <https://openreview.net/forum?id=0tWTxYYPnW>
- Skitka et al. (1999)
  Linda. Skitka, Kathleen. Mosier and Mark Burdick
  “Does automation bias decision-making?”
  In *International Journal of Human-Computer Studies* 51.5, 1999, pp. 991–1006
  DOI: [10.1006/ijhc.1999.0252](https://dx.doi.org/10.1006/ijhc.1999.0252)
- Skopik & Pahi (2020)
  Florian Skopik and Timea Pahi
  “Under false flag: using technical artifacts for cyber attack attribution”
  In *Cybersecurity* 3.1, 2020, pp. 8
  DOI: [10.1186/s42400-020-00048-4](https://dx.doi.org/10.1186/s42400-020-00048-4)
- Slantchev & Tarar (2011)
  Branislav. Slantchev and Ahmer Tarar
  “Mutual optimism as a rationalist explanation of war”
  In *American Journal of Political Science* 55.1
  Wiley, 2011, pp. 135–148
- Small et al. (2021)
  Christopher. Small, Michael Bjorkegren, Timo Erkkilä, Lynette Shaw and Colin Megill
  “Polis: Scaling Deliberation by Mapping High Dimensional Opinion Spaces”
  In *RECERCA. Revista de Pensament i Anàlisi* 26.2
  Universitat Jaume I, 2021, pp. 1–26
  DOI: [10.6035/recerca.5516](https://dx.doi.org/10.6035/recerca.5516)
- Small et al. (2023)
  Christopher. Small, Ivan Vendrov, Esin Durmus, Hadjar Homaei, Elizabeth Barry, Julien Cornebise, Ted Suzman, Deep Ganguli and Colin Megill
  “Opportunities and Risks of LLMs for Scalable Deliberation with Polis”
  In *arXiv:2306.11932*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2306.11932](https://dx.doi.org/10.48550/ARXIV.2306.11932)
- Smith & Price (1973)
  J. Smith and G.. Price
  “The Logic of Animal Conflict”
  In *Nature* 246.5427
  Nature Publishing Group, 1973, pp. 15–18
- Smith & Szathmáry (2020)
  John Smith and Eörs Szathmáry
  “The Major Transitions in Evolution” Previously issued in print: Oxford : W.H. Freeman/Spektrum, 1995; Oxford: Oxford University Press, 1997. - Includes bibliographical references and index. - Description based on print version record and publisher information, Oxford scholarship online
  Oxford: Oxford University Press, 2020
- Snell et al. (2024)
  Charlie Snell, Jaehoon Lee, Kelvin Xu and Aviral Kumar
  “Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters”
  In *arXiv:2408.03314*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2408.03314](https://dx.doi.org/10.48550/ARXIV.2408.03314)
- Snyder (1971)
  Glenn. Snyder
  “” Prisoner’s Dilemma” and” Chicken” Models in International Politics”
  In *International Studies Quarterly* 15.1
  JSTOR, 1971, pp. 66–103
- Solon (2011)
  Olivia Solon
  “How a book about flies came to be priced $24 million on Amazon”
  In *Wired*
  Conde Nast, 2011
  URL: <https://www.wired.com/2011/04/amazon-flies-24-million/>
- Solum (1992)
  Lawrence. Solum
  “Legal Personhood for Artificial Intelligences”
  In *North Carolina Law Review* 70, 1992, pp. 1231–1290
- Sorensen et al. (2024)
  Taylor Sorensen, Jared Moore, Jillian Fisher, Mitchell Gordon, Niloofar Mireshghallah, Christopher Rytting, Andre Ye, Liwei Jiang, Ximing Lu, Nouha Dziri, Tim Althoff and Yejin Choi
  “Position: a roadmap to pluralistic alignment”
  In *Proceedings of the 41st International Conference on Machine Learning*, ICML’24
  Vienna, Austria: JMLR.org, 2024
- Souly et al. (2023)
  Alexandra Souly, Timon Willi, Akbir Khan, Robert Kirk, Chris Lu, Edward Grefenstette and Tim Rocktäschel
  “Leading the Pack: N-player Opponent Shaping”
  In *arXiv:2312.12564*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2312.12564](https://dx.doi.org/10.48550/ARXIV.2312.12564)
- Sourbut et al. (2024)
  Oliver Sourbut, Lewis Hammond and Harriet Wood
  “Cooperation and Control in Delegation Games”
  In *Proceedings of the Thirty-ThirdInternational Joint Conference on Artificial Intelligence*, IJCAI-2024
  International Joint Conferences on Artificial Intelligence Organization, 2024
  DOI: [10.24963/ijcai.2024/26](https://dx.doi.org/10.24963/ijcai.2024/26)
- Spohn (2007)
  Wolfgang Spohn
  “Dependency equilibria”
  In *Philosophy of Science* 74.5
  Cambridge University Press, 2007, pp. 775–789
- Stadler & Troncoso (2022)
  Theresa Stadler and Carmela Troncoso
  “Why the search for a privacy-preserving data sharing mechanism is failing”
  In *Nature Computational Science* 2.4, 2022, pp. 208–210
  DOI: [10.1038/s43588-022-00236-x](https://dx.doi.org/10.1038/s43588-022-00236-x)
- Stanley et al. (2017)
  Kenneth. Stanley, Joel Lehman and Lisa Soros
  “Open-endedness: The last grand challenge you’ve never heard of”
  In *O’Reilly Radar*, 2017
  URL: <https://www.oreilly.com/radar/open-endedness-the-last-grand-challenge-youve-never-heard-of/>
- Stastny et al. (2021)
  Julian Stastny, Maxime Riché, Alexander Lyzhov, Johannes Treutlein, Allan Dafoe and Jesse Clifton
  “Normative Disagreement as a Challenge for Cooperative AI”
  In *arXiv:2111.13872*
  arXiv, 2021
  DOI: [10.48550/ARXIV.2111.13872](https://dx.doi.org/10.48550/ARXIV.2111.13872)
- Steimers & Schneider (2022)
  A. Steimers and Moritz Schneider
  “Sources of Risk of AI Systems”
  In *International Journal of Environmental Research and Public Health* 19, 2022
  DOI: [10.3390/ijerph19063641](https://dx.doi.org/10.3390/ijerph19063641)
- Stengel & Zamir (2010)
  Bernhard von Stengel and Shmuel Zamir
  “Leadership games with convex strategy sets”
  In *Games and Economic Behavior* 69.2
  Elsevier BV, 2010, pp. 446–457
  DOI: [10.1016/j.geb.2009.11.008](https://dx.doi.org/10.1016/j.geb.2009.11.008)
- Stone et al. (2010)
  Peter Stone, Gal Kaminka, Sarit Kraus and Jeffrey Rosenschein
  “Ad Hoc Autonomous Agent Teams: Collaboration without Pre-Coordination”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 24.1
  Association for the Advancement of Artificial Intelligence (AAAI), 2010, pp. 1504–1509
  DOI: [10.1609/aaai.v24i1.7529](https://dx.doi.org/10.1609/aaai.v24i1.7529)
- Stroebl et al. (2025)
  Benedikt Stroebl, Sayash Kapoor and Arvind Narayanan
  “HAL: A Holistic Agent Leaderboard for Centralized and Reproducible Agent Evaluation”, <https://github.com/princeton-pli/hal-harness/>, 2025
- Suarez et al. (2019)
  Joseph Suarez, Yilun Du, Phillip Isola and Igor Mordatch
  “Neural MMO: A Massively Multiagent Game Environment for Training and Evaluating Intelligent Agents”
  In *arXiv:1903.00784*
  arXiv, 2019
  DOI: [10.48550/ARXIV.1903.00784](https://dx.doi.org/10.48550/ARXIV.1903.00784)
- Subrahmanyam (2013)
  Avanidhar Subrahmanyam
  “Algorithmic trading, the Flash Crash, and coordinated circuit breakers”
  In *Borsa Istanbul Review* 13.3
  Elsevier BV, 2013, pp. 4–9
  DOI: [10.1016/j.bir.2013.10.003](https://dx.doi.org/10.1016/j.bir.2013.10.003)
- Sukhbaatar et al. (2016)
  Sainbayar Sukhbaatar, Arthur Szlam and Rob Fergus
  “Learning multiagent communication with backpropagation”
  In *Proceedings of the 30th International Conference on Neural Information Processing Systems*, NIPS’16
  Barcelona, Spain: Curran Associates Inc., 2016, pp. 2252–2260
- Sun et al. (2023)
  Shuo Sun, Rundong Wang and Bo An
  “Reinforcement Learning for Quantitative Trading”
  In *ACM Trans. Intell. Syst. Technol.* 14.3
  New York, NY, USA: Association for Computing Machinery, 2023
  DOI: [10.1145/3582560](https://dx.doi.org/10.1145/3582560)
- Sun et al. (2023a)
  Xinyuan Sun, Davide Crapis, Matt Stephenson, Barnabé Monnot, Thomas Thiery and Jonathan Passerat-Palmbach
  “Cooperative AI via Decentralized Commitment Devices”
  In *arXiv:2311.07815*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2311.07815](https://dx.doi.org/10.48550/ARXIV.2311.07815)
- Sutton & Samavi (2018)
  Andrew Sutton and Reza Samavi
  “Tamper-Proof Privacy Auditing for Artificial Intelligence Systems”
  In *Proceedings of the Twenty-Seventh International Joint Conference on Artificial Intelligence*, IJCAI-2018
  International Joint Conferences on Artificial Intelligence Organization, 2018, pp. 5374–5378
  DOI: [10.24963/ijcai.2018/756](https://dx.doi.org/10.24963/ijcai.2018/756)
- Szabo & Teo (2015)
  Claudia Szabo and Yong Teo
  “Formalization of Weak Emergence in Multiagent Systems”
  In *ACM Transactions on Modeling and Computer Simulation* 26.1
  Association for Computing Machinery (ACM), 2015, pp. 1–25
  DOI: [10.1145/2815502](https://dx.doi.org/10.1145/2815502)
- Tadelis (2016)
  Steven Tadelis
  “Reputation and Feedback Systems in Online Platform Markets”
  In *Annual Review of Economics* 8.1
  Annual Reviews, 2016, pp. 321–340
  DOI: [10.1146/annurev-economics-080315-015325](https://dx.doi.org/10.1146/annurev-economics-080315-015325)
- Talbot (2005)
  David Talbot
  “Preventing ‘Fratricide”’
  In *MIT Technology Review*, 2005
  URL: <https://www.technologyreview.com/2005/06/01/230895/preventing-fratricide-2/>
- Talboy & Fuller (2023)
  Alaina. Talboy and Elizabeth Fuller
  “Challenging the appearance of machine intelligence: Cognitive bias in LLMs and Best Practices for Adoption”, 2023
  DOI: [10.48550/arxiv.2304.01358](https://dx.doi.org/10.48550/arxiv.2304.01358)
- Telikani et al. (2021)
  Akbar Telikani, Amirhessam Tahmassebi, Wolfgang Banzhaf and Amir. Gandomi
  “Evolutionary machine learning: A survey”
  In *ACM Computing Surveys (CSUR)* 54.8
  ACM New York, NY, 2021, pp. 1–35
- Tennenholtz (2004)
  Moshe Tennenholtz
  “Program equilibrium”
  In *Games and Economic Behavior* 49.2
  Elsevier, 2004, pp. 363–373
- Teo et al. (2013)
  Yong Teo, Ba Luong and Claudia Szabo
  “Formalization of emergence in multi-agent systems”
  In *Proceedings of the 1st ACM SIGSIM Conference on Principles of Advanced Discrete Simulation*, SIGSIM PADS ’13
  Montreal, Québec, Canada: Association for Computing Machinery, 2013, pp. 231–240
  DOI: [10.1145/2486092.2486122](https://dx.doi.org/10.1145/2486092.2486122)
- Terrucha et al. (2024)
  Inês Terrucha, Elias Fernández, Pieter Simoens and Tom Lenaerts
  “Committing to the wrong artificial delegate in a collective-risk dilemma is better than directly committing mistakes”
  In *Scientific Reports* 14.1
  Springer ScienceBusiness Media LLC, 2024
  DOI: [10.1038/s41598-024-61153-9](https://dx.doi.org/10.1038/s41598-024-61153-9)
- Thurnherr et al. (2025)
  Lara Thurnherr, Robert Trager, Amin Oueslati, Christoph Winter, Cliodhna’i Ghuidhir, Joe O’Brien, Jun Chan, Lorenzo Pacchiardi, Anka Reuel, Merlin Stein, Oliver Guest, Oliver Sourbut, Renan Araujo, Seth Donoughe and Yi Zeng
  “Who Should Develop Which AI Evaluations?”, 2025
  URL: <https://www.oxfordmartin.ox.ac.uk/publications/who-should-develop-which-ai-evaluations>
- Tian et al. (2023)
  Yu Tian, Xiao Yang, Jingyuan Zhang, Yinpeng Dong and Hang Su
  “Evil Geniuses: Delving into the Safety of LLM-based Agents”
  In *arXiv:2311.11855*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2311.11855](https://dx.doi.org/10.48550/ARXIV.2311.11855)
- Trager et al. (2023)
  Robert Trager, Ben Harack, Anka Reuel, Allison Carnegie, Lennart Heim, Lewis Ho, Sarah Kreps, Ranjit Lall, Owen Larter, SeánÓ hÉigeartaigh, Simon Staffell and José Villalobos
  “International Governance of Civilian AI: A Jurisdictional Certification Approach”
  In *arXiv:2308.15514*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2308.15514](https://dx.doi.org/10.48550/ARXIV.2308.15514)
- Traulsen et al. (2007)
  Arne Traulsen, Jorge. Pacheco and Martin. Nowak
  “Pairwise comparison and selection temperature in evolutionary game dynamics”
  In *Journal of theoretical biology* 246.3
  Elsevier, 2007, pp. 522–529
- Traulsen et al. (2010)
  Arne Traulsen, Dirk Semmann, Ralf. Sommerfeld, Hans-Jürgen Krambeck and Manfred Milinski
  “Human strategy updating in evolutionary games”
  In *Proceedings of the National Academy of Sciences* 107.7
  National Acad Sciences, 2010, pp. 2962–2966
- Treutlein et al. (2021)
  Johannes Treutlein, Michael Dennis, Caspar Oesterheld and Jakob Foerster
  “A New Formalism, Method and Open Issues for Zero-Shot Coordination”
  In *Proceedings of the 38th International Conference on Machine Learning* 139, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 10413–10423
  URL: <https://proceedings.mlr.press/v139/treutlein21a.html>
- Tucker et al. (2020)
  Mycal Tucker, Yilun Zhou and Julie Shah
  “Adversarially Guided Self-Play for Adopting Social Conventions”
  In *arXiv:2001.05994*
  arXiv, 2020
  DOI: [10.48550/ARXIV.2001.05994](https://dx.doi.org/10.48550/ARXIV.2001.05994)
- Turchin & Denkenberger (2018)
  Alexey Turchin and David Denkenberger
  “Classification of global catastrophic risks connected with artificial intelligence”
  In *AI & SOCIETY* 35.1
  Springer ScienceBusiness Media LLC, 2018, pp. 147–163
  DOI: [10.1007/s00146-018-0845-5](https://dx.doi.org/10.1007/s00146-018-0845-5)
- [3]
  Emmanuel Turlay
  “What is Lineage Tracking in Machine Learning and why you need It”
  Semantic
  URL: <https://www.sematic.dev/blog/what-is-lineage-tracking-in-machine-learning-and-why-you-need-it>
- Turner & Tadepalli (2022)
  Alexander Turner and Prasad Tadepalli
  “Parametrically Retargetable Decision-Makers Tend To Seek Power”
  In *Advances in Neural Information Processing Systems*, 2022
  URL: <https://openreview.net/forum?id=GFgjnk2Q-ju>
- Turner-Henderson (2025)
  Tiffanie Turner-Henderson
  “Network Models: Triggering Marketing Network Effects With AI”
  In *International Journal of Artificial Intelligence (AI) in Business and Management (IJAIBM)* 1.1
  IGI Global Scientific Publishing, 2025, pp. 1–16
- Tuyls & Nowé (2005)
  Karl Tuyls and Ann Nowé
  “Evolutionary Game Theory and Multi-agent Reinforcement Learning”
  In *The Knowledge Engineering Review* 20.1
  USA: Cambridge University Press, 2005, pp. 63–90
  DOI: [10.1017/S026988890500041X](https://dx.doi.org/10.1017/S026988890500041X)
- U.S. Congress (2023)
  U.S. Congress
  “Block Nuclear Launch by Autonomous Artificial Intelligence Act”, H.R.2894, 118th Congress, 2023
  URL: <https://www.congress.gov/bill/118th-congress/house-bill/2894>
- Urbina et al. (2022)
  Fabio Urbina, Filippa Lentzos, Cédric Invernizzi and Sean Ekins
  “Dual use of artificial-intelligence-powered drug discovery”
  In *Nature Machine Intelligence* 4.3, 2022, pp. 189–191
  DOI: [10.1038/s42256-022-00465-9](https://dx.doi.org/10.1038/s42256-022-00465-9)
- Uuk et al. (2025)
  Risto Uuk, Carlos Gutierrez, Lode Lauwaert, Carina Prunkl and Lucia Velasco
  “A Taxonomy of Systemic Risks from General-Purpose AI”
  In *SSRN Electronic Journal*
  Rochester, NY: Elsevier BV, 2025
  DOI: [10.2139/ssrn.5030173](https://dx.doi.org/10.2139/ssrn.5030173)
- Vallinder & Hughes (2024)
  Aron Vallinder and Edward Hughes
  “Cultural Evolution of Cooperation among LLM Agents”
  In *arXiv:2412.10270*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2412.10270](https://dx.doi.org/10.48550/ARXIV.2412.10270)
- Vallor (2018)
  Shannon Vallor
  “Technology and the virtues”
  New York, NY: Oxford University Press, 2018
- Van (2019)
  Rory Van
  “Digital Market Perfection”
  In *Michigan Law Review*
  University of Michigan Law Library, 2019, pp. 815
  DOI: [10.36644/mlr.117.5.digital](https://dx.doi.org/10.36644/mlr.117.5.digital)
- Vassilakopoulou & Hustad (2021)
  Polyxeni Vassilakopoulou and Eli Hustad
  “Bridging Digital Divides: a Literature Review and Research Agenda for Information Systems Research”
  In *Information Systems Frontiers* 25.3
  Springer ScienceBusiness Media LLC, 2021, pp. 955–969
  DOI: [10.1007/s10796-020-10096-3](https://dx.doi.org/10.1007/s10796-020-10096-3)
- Vegesna (2023)
  Vinod Vegesna
  “Privacy-Preserving Techniques in AI-Powered Cyber Security: Challenges and Opportunities”
  In *International Journal of Machine Learning for Sustainable Development* 5.4, 2023, pp. 1–8
- Vestad & Yang (2024)
  Arnstein Vestad and Bian Yang
  “A survey of agent-based modeling for cybersecurity”
  In *Human Factors in Cybersecurity* 127
  AHFE Open Acces, 2024
  DOI: [10.54941/ahfe1004768](https://dx.doi.org/10.54941/ahfe1004768)
- Vezhnevets et al. (2023)
  Alexander Vezhnevets, John. Agapiou, Avia Aharon, Ron Ziv, Jayd Matyas, Edgar. Duéñez-Guzmán, William. Cunningham, Simon Osindero, Danny Karmon and Joel. Leibo
  “Generative agent-based modeling with actions grounded in physical, social, or digital space using Concordia”
  In *arXiv:2312.03664*, 2023
- Vié & Morales (2021)
  Aymeric Vié and Alfredo. Morales
  “How connected is too connected? Impact of network topology on systemic risk and collapse of complex economic systems”
  In *Computational economics* 57
  Springer, 2021, pp. 1327–1351
- Vinitsky et al. (2023)
  Eugene Vinitsky, Raphael Köster, John. Agapiou, Edgar. Duéñez-Guzmán, Alexander. Vezhnevets and Joel. Leibo
  “A learning agent that acquires social norms from public sanctions in decentralized multi-agent settings”
  In *Collective Intelligence* 2.2
  SAGE Publications, 2023, pp. 263391372311620
  DOI: [10.1177/26339137231162025](https://dx.doi.org/10.1177/26339137231162025)
- Vlatakis-Gkaragkounis et al. (2023)
  Emmanouil-Vasileios Vlatakis-Gkaragkounis, Lampros Flokas and Georgios Piliouras
  “Chaos persists in large-scale multi-agent learning despite adaptive learning rates”
  In *arXiv:2306.01032*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2306.01032](https://dx.doi.org/10.48550/ARXIV.2306.01032)
- Wang et al. (2021)
  Ethan Wang, Binghong Chen and Le Song
  “Large Scale Coordination Transfer for Cooperative Multi-Agent Reinforcement Learning”
  In *Deep RL Workshop at NeurIPS*, 2021
  URL: <https://openreview.net/forum?id=1Edj1dfQb7b>
- Wang et al. (2019)
  Jane. Wang, Edward Hughes, Chrisantha Fernando, Wojciech. Czarnecki, Edgar. Duéñez-Guzmán and Joel. Leibo
  “Evolving Intrinsic Motivations for Altruistic Behavior”
  In *Proceedings of the 18th International Conference on Autonomous Agents and MultiAgent Systems*, AAMAS ’19
  Montreal QC, Canada: International Foundation for Autonomous AgentsMultiagent Systems, 2019, pp. 683–692
- Wang et al. (2016)
  Jing Wang, In Ahn, Yufeng Lu and Tianyu Yang
  “A distributed detection algorithm for collective behaviors in multiagent systems”
  In *2016 12th World Congress on Intelligent Control and Automation (WCICA)*
  IEEE, 2016, pp. 372–377
  DOI: [10.1109/wcica.2016.7578431](https://dx.doi.org/10.1109/wcica.2016.7578431)
- Wang et al. (2019a)
  Rui Wang, Joel Lehman, Jeff Clune and Kenneth. Stanley
  “Paired open-ended trailblazer (poet): Endlessly generating increasingly complex and diverse learning environments and their solutions”
  In *arXiv:1901.01753*, 2019
- Wang et al. (2023)
  Tonghan Wang, Paul Duetting, Dmitry Ivanov, Inbal Talgam-Cohen and David. Parkes
  “Deep Contract Design via Discontinuous Networks”
  In *Thirty-seventh Conference on Neural Information Processing Systems*, 2023
  URL: <https://openreview.net/forum?id=q8mH2d6uw2>
- Wang et al. (2021a)
  Woodrow. Wang, Mark Beliaev, Erdem Bıyık, Daniel. Lazar, Ramtin Pedarsani and Dorsa Sadigh
  “Emergent Prosociality in Multi-agent Games through Gifting”
  In *arXiv:2105.06593*, 2021
  DOI: [10.48550/arxiv.2105.06593](https://dx.doi.org/10.48550/arxiv.2105.06593)
- Wang & Wellman (2020)
  Xintong Wang and Michael. Wellman
  “Market manipulation: An adversarial learning framework for detection and evasion”
  In *Twenty-Ninth International Joint Conference on Artificial Intelligence*, 2020, pp. 4626–4632
- Wang et al. (2024)
  Zhen Wang, Ruiqi Song, Chen Shen, Shiya Yin, Zhao Song, Balaraju Battu, Lei Shi, Danyang Jia, Talal Rahwan and Shuyue Hu
  “Large Language Models Overcome the Machine Penalty When Acting Fairly but Not When Acting Selfishly or Altruistically”
  In *arXiv:2410.03724*, 2024
- Ward et al. (2024)
  Francis Ward, Matt MacDermott, Francesco Belardinelli, Francesca Toni and Tom Everitt
  “The Reasons that Agents Act: Intention and Instrumental Goals”
  In *Proceedings of the 23rd International Conference on Autonomous Agents and Multiagent Systems*, AAMAS ’24
  Auckland, New Zealand: International Foundation for Autonomous AgentsMultiagent Systems, 2024, pp. 1901–1909
- Ward et al. (2023)
  Francis Ward, Francesca Toni, Francesco Belardinelli and Tom Everitt
  “Honesty Is the Best Policy: Defining and Mitigating AI Deception”
  In *Thirty-seventh Conference on Neural Information Processing Systems*, 2023
  URL: <https://openreview.net/forum?id=EmxpDiPgRu>
- Watkins & Dayan (1992)
  Christopher… Watkins and Peter Dayan
  “Q-learning”
  In *Machine Learning* 8.3-4
  Springer ScienceBusiness Media LLC, 1992, pp. 279–292
  DOI: [10.1007/bf00992698](https://dx.doi.org/10.1007/bf00992698)
- Wei et al. (2023)
  Alexander Wei, Nika Haghtalab and Jacob Steinhardt
  “Jailbroken: How Does LLM Safety Training Fail?”
  In *Thirty-seventh Conference on Neural Information Processing Systems*, 2023
  URL: <https://openreview.net/forum?id=jA235JGM09>
- Wei et al. (2022)
  Jason Wei, Yi Tay, Rishi Bommasani, Colin Raffel, Barret Zoph, Sebastian Borgeaud, Dani Yogatama, Maarten Bosma, Denny Zhou, Donald Metzler, Ed. Chi, Tatsunori Hashimoto, Oriol Vinyals, Percy Liang, Jeff Dean and William Fedus
  “Emergent Abilities of Large Language Models”
  In *Transactions on Machine Learning Research*, 2022
  URL: <https://openreview.net/forum?id=yzkSU5zdwD>
- Wei & Liu (2024)
  Wenqi Wei and Ling Liu
  “Trustworthy Distributed AI Systems: Robustness, Privacy, and Governance”
  In *ACM Comput. Surv.*, 2024
  DOI: [10.1145/3645102](https://dx.doi.org/10.1145/3645102)
- Weidinger et al. (2023)
  Laura Weidinger, Kevin. McKee, Richard Everett, Saffron Huang, Tina. Zhu, Martin. Chadwick, Christopher Summerfield and Iason Gabriel
  “Using the Veil of Ignorance to align AI systems with principles of justice”
  In *Proceedings of the National Academy of Sciences* 120.18
  Proceedings of the National Academy of Sciences, 2023
  DOI: [10.1073/pnas.2213709120](https://dx.doi.org/10.1073/pnas.2213709120)
- Weidinger et al. (2023a)
  Laura Weidinger, Maribeth Rauh, Nahema Marchal, Arianna Manzini, Lisa Hendricks, Juan Mateos-Garcia, Stevie Bergman, Jackie Kay, Conor Griffin, Ben Bariach, Iason Gabriel, Verena Rieser and William Isaac
  “Sociotechnical Safety Evaluation of Generative AI Systems”
  In *arXiv:2310.11986*
  arXiv, 2023
  DOI: [10.48550/ARXIV.2310.11986](https://dx.doi.org/10.48550/ARXIV.2310.11986)
- Weidinger et al. (2022)
  Laura Weidinger, Jonathan Uesato, Maribeth Rauh, Conor Griffin, Po-Sen Huang, John Mellor, Amelia Glaese, Myra Cheng, Borja Balle, Atoosa Kasirzadeh, Courtney Biles, Sasha Brown, Zac Kenton, Will Hawkins, Tom Stepleton, Abeba Birhane, Lisa Hendricks, Laura Rimell, William Isaac, Julia Haas, Sean Legassick, Geoffrey Irving and Iason Gabriel
  “Taxonomy of Risks posed by Language Models”
  In *2022 ACM Conference on Fairness, Accountability, and Transparency*, FAccT ’22
  ACM, 2022
  DOI: [10.1145/3531146.3533088](https://dx.doi.org/10.1145/3531146.3533088)
- Werfel et al. (2014)
  Justin Werfel, Kirstin Petersen and Radhika Nagpal
  “Designing Collective Behavior in a Termite-Inspired Robot Construction Team”
  In *Science* 343.6172, 2014, pp. 754–758
  DOI: [10.1126/science.1245842](https://dx.doi.org/10.1126/science.1245842)
- Werner (2021)
  Tobias Werner
  “Algorithmic and Human Collusion”
  In *SSRN Electronic Journal*
  Elsevier BV, 2021
  DOI: [10.2139/ssrn.3960738](https://dx.doi.org/10.2139/ssrn.3960738)
- Wieting & Sapi (2021)
  Marcel Wieting and Geza Sapi
  “Algorithms in the Marketplace: An Empirical Analysis of Automated Pricing in E-Commerce”
  In *SSRN Electronic Journal*
  Elsevier BV, 2021
  DOI: [10.2139/ssrn.3945137](https://dx.doi.org/10.2139/ssrn.3945137)
- Willi et al. (2022)
  Timon Willi, Alistair Letcher, Johannes Treutlein and Jakob. Foerster
  “COLA: Consistent Learning with Opponent-Learning Awareness”
  In *Proceedings of the 39th International Conference on Machine Learning* 162, Proceedings of Machine Learning Research
  PMLR, 2022, pp. 23804–23831
  URL: <https://proceedings.mlr.press/v162/willi22a.html>
- Wills (2024)
  Peter Wills
  “Care for Chatbots” Forthcoming
  In *UBC Law Review (57:3)*, 2024
  URL: <https://ssrn.com/abstract=4814272>
- Witkowski & Parkes (2012)
  Jens Witkowski and David. Parkes
  “A robust Bayesian truth serum for small populations”
  In *Proceedings of the Twenty-Sixth AAAI Conference on Artificial Intelligence*, AAAI’12
  Toronto, Ontario, Canada: AAAI Press, 2012, pp. 1492–1498
- Wood (2008)
  Elisabeth Wood
  “The social processes of civil war: The wartime transformation of social networks”
  In *Annu. Rev. Polit. Sci.* 11
  Annual Reviews, 2008, pp. 539–561
- Wu et al. (2024)
  Feng Wu, Lei Cui, Shaowen Yao and Shui Yu
  “Inference Attacks: A Taxonomy, Survey, and Promising Directions”
  In *arXiv:2406.02027*
  arXiv, 2024
  DOI: [10.48550/arXiv.2406.02027](https://dx.doi.org/10.48550/arXiv.2406.02027)
- Wu et al. (2022)
  Jibang Wu, Zixuan Zhang, Zhe Feng, Zhaoran Wang, Zhuoran Yang, Michael. Jordan and Haifeng Xu
  “Sequential Information Design: Markov Persuasion Process and Its Efficient Reinforcement Learning”
  In *arXiv:2202.10678*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2202.10678](https://dx.doi.org/10.48550/ARXIV.2202.10678)
- Wu et al. (2024a)
  Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Awadallah, Ryen White, Doug Burger and Chi Wang
  “AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversations”
  In *First Conference on Language Modeling*, 2024
  URL: <https://openreview.net/forum?id=BAakY1hNKS>
- Wylde (2021)
  Allison Wylde
  “Zero trust: Never trust, always verify”
  In *2021 International Conference on Cyber Situational Awareness, Data Analytics and Assessment (CyberSA)*, 2021, pp. 1–4
  DOI: [10.1109/CyberSA52016.2021.9478244](https://dx.doi.org/10.1109/CyberSA52016.2021.9478244)
- Xia et al. (2012)
  Haoxiang Xia, Yanyan Du and Zhaoguo Xuan
  “Structural Evolution in Knowledge Transfer Network: An Agent-Based Model”
  In *Workshop on Complex Networks*, 2012
  URL: <https://api.semanticscholar.org/CorpusID:41907763>
- Xia & Conitzer (2010)
  Lirong Xia and Vincent Conitzer
  “Stackelberg Voting Games: Computational Aspects and Paradoxes”
  In *Proceedings of the Twenty-Fourth AAAI Conference on Artificial Intelligence, AAAI 2010, Atlanta, Georgia, USA, July 11-15, 2010*
  AAAI Press, 2010, pp. 921–926
  DOI: [10.1609/AAAI.V24I1.7626](https://dx.doi.org/10.1609/AAAI.V24I1.7626)
- Xu et al. (2024)
  Zihao Xu, Yi Liu, Gelei Deng, Yuekang Li and Stjepan Picek
  “A Comprehensive Study of Jailbreak Attack versus Defense for Large Language Models”
  In *Findings of the Association for Computational Linguistics*, 2024, pp. 7432–7449
  DOI: [10.18653/v1/2024.findings-acl.443](https://dx.doi.org/10.18653/v1/2024.findings-acl.443)
- Yamin et al. (2021)
  Muhammad Yamin, Mohib Ullah, Habib Ullah and Basel Katt
  “Weaponized AI for cyber attacks”
  In *Journal of Information Security and Applications* 57, 2021, pp. 102722
  DOI: [10.1016/j.jisa.2020.102722](https://dx.doi.org/10.1016/j.jisa.2020.102722)
- Yang et al. (2020)
  Jiachen Yang, Ang Li, Mehrdad Farajtabar, Peter Sunehag, Edward Hughes and Hongyuan Zha
  “Learning to Incentivize Other Learning Agents”
  In *Adaptive and Learning Agents Workshop at AAMAS*, 2020
  URL: <https://ala2020.vub.ac.be/papers/ALA2020_paper_27.pdf>
- Yang et al. (2022)
  Jiachen Yang, Ethan Wang, Rakshit Trivedi, Tuo Zhao and Hongyuan Zha
  “Adaptive Incentive Design with Multi-Agent Meta-Gradient Reinforcement Learning”
  In *Proceedings of the 21st International Conference on Autonomous Agents and Multiagent Systems*, AAMAS ’22
  Virtual Event, New Zealand: International Foundation for Autonomous AgentsMultiagent Systems, 2022, pp. 1436–1445
- Yang et al. (2019)
  Kuan Yang, Kejiang Chen, Weiming Zhang and Nenghai Yu
  “Provably Secure Generative Steganography Based on Autoregressive Model”
  In *Digital Forensics and Watermarking*
  Springer International Publishing, 2019, pp. 55–68
  DOI: [10.1007/978-3-030-11389-6˙5](https://dx.doi.org/10.1007/978-3-030-11389-6_5)
- Yang & Zhang (2024)
  Kunhe Yang and Hanrui Zhang
  “Computational Aspects of Bayesian Persuasion under Approximate Best Response”
  In *arXiv:2402.07426*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2402.07426](https://dx.doi.org/10.48550/ARXIV.2402.07426)
- Yao (1982)
  Andrew. Yao
  “Protocols for secure computations” ISSN: 0272-5428
  In *23rd Annual Symposium on Foundations of Computer Science (sfcs 1982)*, 1982, pp. 160–164
  DOI: [10.1109/SFCS.1982.38](https://dx.doi.org/10.1109/SFCS.1982.38)
- Yoachimik & Pacheco (2024)
  Omer Yoachimik and Jorge Pacheco
  “4.2 Tbps of bad packets and a whole lot more: Cloudflare’s Q3 DDoS report”, 2024
  Cloudflare
  URL: <https://blog.cloudflare.com/ddos-threat-report-for-2024-q3/>
- Yu et al. (2024)
  Miao Yu, Shilong Wang, Guibin Zhang, Junyuan Mao, Chenlong Yin, Qijiong Liu, Qingsong Wen, Kun Wang and Yang Wang
  “NetSafe: Exploring the Topological Safety of Multi-agent Networks”
  In *arXiv:2410.15686*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2410.15686](https://dx.doi.org/10.48550/ARXIV.2410.15686)
- Yudkowsky (2008)
  Eliezer Yudkowsky
  “Artificial Intelligence as a positive and negative factor in global risk”
  In *Global Catastrophic Risks*
  Oxford University Press, 2008
  DOI: [10.1093/oso/9780198570509.003.0021](https://dx.doi.org/10.1093/oso/9780198570509.003.0021)
- Zeeman (1976)
  E. Zeeman
  “Catastrophe Theory”
  In *Scientific American* 234.4, 1976, pp. 65–83
- Zemel et al. (2013)
  Rich Zemel, Yu Wu, Kevin Swersky, Toni Pitassi and Cynthia Dwork
  “Learning fair representations”
  In *International conference on machine learning*, 2013, pp. 325–333
  PMLR
- Zeng et al. (2024)
  Yi Zeng, Kevin Klyman, Andy Zhou, Yu Yang, Minzhou Pan, Ruoxi Jia, Dawn Song, Percy Liang and Bo Li
  “AI Risk Categorization Decoded (AIR 2024): From Government Regulations to Corporate Policies”
  In *arXiv:2406.17864*
  arXiv, 2024
  DOI: [10.48550/ARXIV.2406.17864](https://dx.doi.org/10.48550/ARXIV.2406.17864)
- Zhang et al. (2024)
  Boyang Zhang, Yicong Tan, Yun Shen, Ahmed Salem, Michael Backes, Savvas Zannettou and Yang Zhang
  “Breaking Agents: Compromising Autonomous LLM Agents Through Malfunction Amplification”, 2024
  DOI: [10.48550/arxiv.2407.20859](https://dx.doi.org/10.48550/arxiv.2407.20859)
- Zhang & Shah (2014)
  Chongjie Zhang and Julie Shah
  “Fairness in Multi-Agent Sequential Decision-Making”
  In *Advances in Neural Information Processing Systems* 27
  Curran Associates, Inc., 2014
  URL: <https://proceedings.neurips.cc/paper_files/paper/2014/file/792c7b5aae4a79e78aaeda80516ae2ac-Paper.pdf>
- Zhang & Shah (2014a)
  Chongjie Zhang and Julie. Shah
  “Fairness in multi-agent sequential decision-making”
  In *Advances in Neural Information Processing Systems* 27, 2014
- Zhang & Parkes (2008)
  Haoqi Zhang and David Parkes
  “Value-based policy teaching with active indirect elicitation”
  In *Proceedings of the 23rd National Conference on Artificial Intelligence - Volume 1*, AAAI’08
  Chicago, Illinois: AAAI Press, 2008, pp. 208–214
- Zhang et al. (2020)
  Kaiqing Zhang, Sham Kakade, Tamer Basar and Lin Yang
  “Model-Based Multi-Agent RL in Zero-Sum Markov Games with Near-Optimal Sample Complexity”
  In *Advances in Neural Information Processing Systems* 33
  Curran Associates, Inc., 2020, pp. 1166–1178
  URL: <https://proceedings.neurips.cc/paper_files/paper/2020/file/0cc6ee01c82fc49c28706e0918f57e2d-Paper.pdf>
- Zhang et al. (2018)
  Kaiqing Zhang, Zhuoran Yang, Han Liu, Tong Zhang and Tamer Basar
  “Fully Decentralized Multi-agent Reinforcement Learning with Networked Agents”
  In *Proceedings of the 35th International Conference on Machine Learning* 80, Proceedings of Machine Learning Research
  Stockholmsmässan, Stockholm Sweden: PMLR, 2018, pp. 5872–5881
  URL: <http://proceedings.mlr.press/v80/zhang18n.html>
- Zhang et al. (2024a)
  Yadong Zhang, Shaoguang Mao, Tao Ge, Xun Wang, Adrian de Wynter, Yan Xia, Wenshan Wu, Ting Song, Man Lan and Furu Wei
  “LLM as a Mastermind: A Survey of Strategic Reasoning with Large Language Models”
  In *arXiv:2404.01230*, 2024
- Zhao et al. (2017)
  Mingyi Zhao, Aron Laszka and Jens Grossklags
  “Devising Effective Policies for Bug-Bounty Platforms and Security Vulnerability Discovery”
  In *Journal of Information Policy* 7, 2017, pp. 372–418
  URL: <https://aronlaszka.com/publication/zhao2017devising/>
- Zhao & Chen (2022)
  Ying Zhao and Jinjun Chen
  “A survey on differential privacy for unstructured data content”
  In *ACM Computing Surveys (CSUR)* 54.10s
  ACM New York, NY, 2022, pp. 1–28
- Zheng et al. (2022)
  Stephan Zheng, Alexander Trott, Sunil Srinivasa, David. Parkes and Richard Socher
  “The AI Economist: Taxation policy design via two-level deep multiagent reinforcement learning”
  In *Science Advances* 8.18
  American Association for the Advancement of Science (AAAS), 2022
  DOI: [10.1126/sciadv.abk2607](https://dx.doi.org/10.1126/sciadv.abk2607)
- Zhi-Xuan (2022)
  Tan Zhi-Xuan
  “What Should AI Owe To Us? Accountable and Aligned AI Systems via Contractualist AI Alignment”, 2022
  Alignment Forum
  URL: <https://www.alignmentforum.org/posts/Cty2rSMut483QgBQ2>
- Zhi-Xuan et al. (2024)
  Tan Zhi-Xuan, Micah Carroll, Matija Franklin and Hal Ashton
  “Beyond Preferences in AI Alignment”
  In *Philosophical Studies*
  Springer ScienceBusiness Media LLC, 2024
  DOI: [10.1007/s11098-024-02249-w](https://dx.doi.org/10.1007/s11098-024-02249-w)
- Zhou et al. (2023)
  Jiawei Zhou, Yixuan Zhang, Qianni Luo, Andrea. Parker and Munmun De
  “Synthetic lies: Understanding ai-generated misinformation and evaluating algorithmic and human solutions”
  In *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems*, 2023, pp. 1–20
- Zhu et al. (2021)
  Hao Zhu, Graham Neubig and Yonatan Bisk
  “Few-shot Language Coordination by Modeling Theory of Mind”
  In *Proceedings of the 38th International Conference on Machine Learning* 139, Proceedings of Machine Learning Research
  PMLR, 2021, pp. 12901–12911
  URL: <https://proceedings.mlr.press/v139/zhu21d.html>
- Zhu et al. (2025)
  Shuhui Zhu, Baoxiang Wang, Sriram Subramanian and Pascal Poupart
  “Learning to Negotiate via Voluntary Commitment”
  In *The 28th International Conference on Artificial Intelligence and Statistics*, 2025
  URL: <https://openreview.net/forum?id=DZwHPyPeZO>
- Ziegler et al. (2022)
  Daniel. Ziegler, Seraphina Nix, Lawrence Chan, Tim Bauman, Peter Schmidt-Nielsen, Tao Lin, Adam Scherlis, Noa Nabeshima, Ben Weinstein-Raun, Daniel de Haas, Buck Shlegeris and Nate Thomas
  “Adversarial training for high-stakes reliability”
  In *NeurIPS*, 2022
  URL: <http://papers.nips.cc/paper>
- Zimmaro et al. (2024)
  Filippo Zimmaro, Manuel Miranda, Joséía Fernández, Jesús. Morenoópez, Max Reddel, Valeria Widler, Alberto Antonioni and The Han
  “Emergence of cooperation in the one-shot Prisoner’s dilemma through Discriminatory and Samaritan AIs”
  In *Journal of the Royal Society Interface* 21.218
  The Royal Society, 2024, pp. 20240212
- Zinkevich et al. (2005)
  Martin Zinkevich, Amy Greenwald and Michael. Littman
  “Cyclic Equilibria in Markov Games”
  In *Proceedings of the 18th International Conference on Neural Information Processing Systems*, NIPS’05
  Vancouver, British Columbia, Canada: MIT Press, 2005, pp. 1641–1648
- Ziyin & Ueda (2022)
  Liu Ziyin and Masahito Ueda
  “Exact Phase Transitions in Deep Learning”
  In *arXiv:2205.12510*
  arXiv, 2022
  DOI: [10.48550/ARXIV.2205.12510](https://dx.doi.org/10.48550/ARXIV.2205.12510)
- Zou et al. (2023)
  Andy Zou, Zifan Wang, Nicholas Carlini, Milad Nasr, J. Kolter and Matt Fredrikson
  “Universal and Transferable Adversarial Attacks on Aligned Language Models”, 2023
  DOI: [10.48550/arxiv.2307.15043](https://dx.doi.org/10.48550/arxiv.2307.15043)
- Zweetsloot & Dafoe (2019)
  Remco Zweetsloot and Allan Dafoe
  “Thinking about Risks from AI: Accidents, Misuse and Structure”, Lawfare Blog, 2019
  URL: <https://www.lawfareblog.com/thinking-about-risks-ai-accidents-misuse-and-structure>

See [covers/back.pdf](https://covers/back.pdf)
