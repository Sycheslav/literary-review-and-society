---
id: arxiv-2609-19913-text
type: material
title: 'Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks'
work_id: arxiv-2609-19913
source_url: https://arxiv.org/html/2609.19913v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: a1b86c496352b6af609f43ac811d10708897341ddfbba489d0f9fa8c261751c3
---

> Источник: [https://arxiv.org/html/2609.19913v1](https://arxiv.org/html/2609.19913v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks

Omran Berjawi
Affiliation: Information Processing and Communication Laboratory (LTCI)
  
Institut Polytechnique de Paris, Télécom Paris
  
Palaiseau, France
  
Email: omran.berjawi@telecom-paris.fr
Affiliation: 
  
Giuseppe Fenza
Affiliation:  Management & Information Systems (DISA-MIS)
  
University of Salerno
  
Fisciano, Italy
  
Email: gfenza@unisa.it
  
Rida Khatoun
Affiliation: Information Processing and Communication Laboratory (LTCI)
  
Institut Polytechnique de Paris, Télécom Paris
  
Palaiseau, France
  
Email: rida.khatoun@telecom-paris.fr
Affiliation: 
  
Sherali Zeadally
Affiliation: College of Communication and Information,
  
University of Kentucky
  
Department of Electronic Engineering,
  
Kyung Hee University, South Korea
  
Email:szeadally@uky.edu

###### Abstract

The study of opinion dynamics in social networks is one of the key challenges in computational social science with direct relevance to understanding political polarization, misinformation, and health responses. Current approaches focus on simplified mathematical models that ignore linguistic and contextual factors related to belief updates or use Large Language Model (LLM)-based simulations that have not been validated against real data. We present a framework based on the concept of a digital twin to simulate opinion dynamics in social networks. The approach fills the gap by cloning a real-world Twitter network, assigns a set of attributes for agents (such as persona, emotions, centrality, stubbornness, and influence), and employs Mistral-7B to perform opinion update based on memory and social exposure. To evaluate the proposed approach, we validate it against two real Twitter datasets (COVID-19 discourse and U.S elections 2020). The results show that the capability of the proposed framework reproduces opinion trajectories and reduces individual prediction error by more than 50% compared to the best-performing classical baseline (Mistral-7B achieves Mean Absolute Error (MAE) = 0.150 and 0.121 on the COVID-19 and US Election 2020 datasets, respectively). We observe similar improvements in structural alignment ($\Delta$r = 0.120 and 0.180) and polarization dynamics ($\Delta$Var = 0.106 and 0.115) on the two datasets, respectively. Additionally, the ablation studies confirm that agent attributes, memory, and social exposure all contribute to the framework’s predictive fidelity in reproducing opinion trajectories, with agent attributes being the most critical contributor. Overall, our results demonstrate that grounding Mistral-7B within empirically cloned interaction networks produces a realistic simulation framework capable of reproducing complex social dynamics.

###### Index Terms:

Digital twin, opinion dynamics, large language models, generative agent-based simulation, social network analysis, computational social science

## I Introduction

Social media has transformed public discussion into a system that impacts world events and outcomes. According to a study of over 0.5 billion tweets associated with vaccines, there is a strong link between Twitter discussions and the number of people who received COVID-19 vaccinations at each immunization stage [[1](https://arxiv.org/html/2609.19913v1#bib.bib1), [2](https://arxiv.org/html/2609.19913v1#bib.bib39)]. Similarly, online anti-vaccine content has been associated with reduced vaccination likelihood, with some analyses suggesting unreported misinformation may be substantially more damaging than reported misinformation. Beyond public health, narratives related to the U.S elections in 2020 via social media played a pivotal role in creating political polarization unlike any other time in history  [[3](https://arxiv.org/html/2609.19913v1#bib.bib2), [4](https://arxiv.org/html/2609.19913v1#bib.bib3), [5](https://arxiv.org/html/2609.19913v1#bib.bib4)]. Therefore, predicting how opinions change over time is crucial for understanding the process of collective behavior.

### I-A Research gaps

The dominant computational approaches for opinion dynamics modeling in social networks consider opinion change as the result of dynamical processes that occur within a network, where the opinion change process is mathematically formulated via deterministic or stochastic aggregation functions operating on static interaction graphs. Classic models include the DeGroot [[6](https://arxiv.org/html/2609.19913v1#bib.bib5)] and Friedkin–Johnsen models [[7](https://arxiv.org/html/2609.19913v1#bib.bib6)], together with bounded confidence models like Hegselmann–Krause [[8](https://arxiv.org/html/2609.19913v1#bib.bib7)] and Deffuant–Weisbuch [[9](https://arxiv.org/html/2609.19913v1#bib.bib8)], produce analytical frameworks which describe the mechanisms of influence spread, consensus achievement, and polarization. Despite their mathematical tractability and interpretability, these models suffer from a significant drawback: they essentially ignore the cognitive processes underlying belief change. In particular, they model opinion updates primarily through numerical averages of agents’ opinion values, without considering the language context; for instance, opinions in social networks are expressed through natural language, where context, framing, and emotional tone influence their interpretation and subsequent belief updates.

The solution provided by Large Language Models (LLMs) offers a completely novel way to address this limitation(i.e., the inability of traditional models to capture the linguistic context of opinion change). This is accomplished with generative reasoning capabilities for agents that work with textual interactions and context memory. Earlier studies showed that agents, based on LLMs, can demonstrate social coherence as well as adapt to different dialogue environments. [[10](https://arxiv.org/html/2609.19913v1#bib.bib9), [11](https://arxiv.org/html/2609.19913v1#bib.bib10), [12](https://arxiv.org/html/2609.19913v1#bib.bib11), [13](https://arxiv.org/html/2609.19913v1#bib.bib12)]. Nevertheless, current approaches are usually built upon synthetic interaction graphs or simplified agent models. Moreover, these approaches often lack rigorous validation in empirical grounding against real opinion dynamics.

Despite significant advances in classical and LLM-based approaches, a critical gap remains unaddressed. The classical approach (DeGroot, Friedkin–Johnsen, Hegselmann–Krause, and Deffuant–Weisbuch ) that models opinion change through numerical aggregation rules such as weighted averaging or confidence‑bounded updates provides structural clarity but falls short on providing any cognitive realism, whereas LLMs produce a lot of generative behavior but fail to validate their behaviors in real-world environments.

To summarize, the research gaps we identified above include:

- •

  Research Gap 1 (RG1): Classical opinion dynamics models provide strong mathematical foundations but offer limited cognitive and linguistic realism, as they do not account for the contextual, emotional, and semantic factors that shape opinion formation and change.
- •

  Research Gap 2 (RG2): LLM-based simulations rely on synthetic networks and simplified agent representations rather than real-world networks.
- •

  Research Gap 3 (RG3): Existing approaches provide limited evidence on whether LLM-based agents grounded in real user characteristics can reproduce the temporal evolution of real-world collective opinions.

### I-B Research contributions

To address the research gaps identified above, we make the following research contributions:

- •

  Research Contribution 1 (RC1): We propose a novel generative digital twin framework that clones empirical social network structures, including multidimensional user characteristics, with LLM-based agents to predict the trajectory of opinions, thereby introducing the cognitive and linguistic realism that classical models lack.
- •

  Research Contribution 2 (RC2): We ground LLM-driven agents in an empirically cloned real-world Twitter network rather than a synthetic graph, instantiating each agent from attributes extracted from real user data, thereby providing the empirical grounding that prior LLM-based simulations lack.
- •

  Research Contribution 3 (RC3): We provide a validated predictive framework, demonstrating through evaluation on two real Twitter datasets and an extensive ablation study that agents grounded in real user characteristics reproduce the temporal evolution of individual-level and collective opinions, with agent traits being the essential contributor.

We organize the remainder of this paper as follows: Section [II](https://arxiv.org/html/2609.19913v1#S2 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") reviews related work. Section [III](https://arxiv.org/html/2609.19913v1#S3 "III Problem Formulation ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") and Section [IV](https://arxiv.org/html/2609.19913v1#S4 "IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") present the problem formulation and framework construction. Section [V](https://arxiv.org/html/2609.19913v1#S5 "V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") and Section [VI](https://arxiv.org/html/2609.19913v1#S6 "VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") discuss the experimental setup and results, respectively. Section [VII](https://arxiv.org/html/2609.19913v1#S7 "VII Discussion ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") discusses the results obtained, and Section [VIII](https://arxiv.org/html/2609.19913v1#S8 "VIII Limitations and Future Research Directions ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") presents limitations of our proposed framework. Finally, Section [IX](https://arxiv.org/html/2609.19913v1#S9 "IX Conclusion ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") makes some concluding remarks.

## II Related Work

The major theoretical background behind modeling opinion evolution in networked environments is built on dynamical systems. DeGroot model [[6](https://arxiv.org/html/2609.19913v1#bib.bib5)] relies on opinion updating via weighted averaging, converging to a consensus state under proper connectivity conditions, whereas the Friedkin–Johnsen model [[7](https://arxiv.org/html/2609.19913v1#bib.bib6)] considers the individual agent’s level of stubbornness. These past results have led to the development of bounded-confidence models: the Hegselmann–Krause model [[8](https://arxiv.org/html/2609.19913v1#bib.bib7)] relies on restricting the interaction between agents based on confidence distance, leading to polarization and clustering. The Deffuant–Weisbuch model [[9](https://arxiv.org/html/2609.19913v1#bib.bib8)] uses pairwise stochastically driven opinion updates under the same restriction. Overall, these models are both mathematically tractable and provide an insightful analysis of consensus formation and social influence phenomena. Recent research efforts have been focusing on generalizing this theoretical background to more sophisticated opinion dynamics models that capture a broader range of social influence mechanisms and more complex patterns of opinion evolution [[14](https://arxiv.org/html/2609.19913v1#bib.bib13), [15](https://arxiv.org/html/2609.19913v1#bib.bib14)].

In this context, Liu et al. [[16](https://arxiv.org/html/2609.19913v1#bib.bib15)] proposed an adaptation of the DeGroot [[6](https://arxiv.org/html/2609.19913v1#bib.bib5)] model to probabilistic linguistic data representing human opinions, but their approach remains limited to static linguistic consensus formation and cannot capture dynamic interaction processes in evolving social networks. Wu et al. [[17](https://arxiv.org/html/2609.19913v1#bib.bib16)] proposed hybrid DeGroot–Hegselmann–Krause models to analyze global aggregation and bounded‑confidence interaction, but their framework remains purely numerical and cannot represent the semantic content of opinions. Conjeaud et al. [[18](https://arxiv.org/html/2609.19913v1#bib.bib17)] developed a two‑layer DeGroot model with global information feedback showing how external signals (such as trending news feeds, press coverage, or election results) affect polarization, but the model still relies on numerical opinion updates and cannot represent the semantic content or reasoning behind agents’ opinions. Finally, Nugent et al. [[19](https://arxiv.org/html/2609.19913v1#bib.bib19)] developed a continuous age‑structured model reflecting the different response times of various population types (such as adolescents, working‑age adults, and elderly groups). At the same time, there is a clear limitation in the current approach: these approaches reduce the belief-update process to purely numerical rules, omitting the linguistically expressed reasoning behind real-life opinions [[20](https://arxiv.org/html/2609.19913v1#bib.bib20)].

The Agent-Based Modeling (ABM) approach builds upon this method by replacing analytical update rules with autonomous agents whose actions follow some behavioral rules [[21](https://arxiv.org/html/2609.19913v1#bib.bib21), [22](https://arxiv.org/html/2609.19913v1#bib.bib22), [23](https://arxiv.org/html/2609.19913v1#bib.bib23)]. More recently, however, researchers have developed ABMs that address the issue of polarization via social media and how such platforms use the structural features of their networks, information diffusion, and algorithmic boosters to foster the spread of misinformation [[3](https://arxiv.org/html/2609.19913v1#bib.bib2), [24](https://arxiv.org/html/2609.19913v1#bib.bib24)]. Despite these developments, ABMs are still limited in that the behaviors of the agents follow pre-defined behavioral rules: they update their states by following manually defined mathematical functions rather than interpreting messages and their contexts.

The advent of LLMs has opened up an entirely new area of research. Park et al. [[11](https://arxiv.org/html/2609.19913v1#bib.bib10)] reveal that generative agents utilizing LLMs with memory and reflective capabilities exhibit emergent social behavior in sandboxed environments. Chuang et al. [[12](https://arxiv.org/html/2609.19913v1#bib.bib11)] prove that networks of agents utilizing LLMs can be used to model opinion dynamics. Gao et al. [[10](https://arxiv.org/html/2609.19913v1#bib.bib9)] present S3, the first LLM-enabled social network simulator, modeling emotion propagation and polarization through the analysis of actual world events. Mou et al. [[25](https://arxiv.org/html/2609.19913v1#bib.bib25)] and Wang et al. [[26](https://arxiv.org/html/2609.19913v1#bib.bib26)] explore the phenomenon of echo chamber formation on scale-free, small-world, and random graphs with LLM-enabled agents and suggest nudging interventions to minimize polarization metrics. Despite such advancements, these agents exist in artificial environments devoid of empirical network reconstruction and rely mostly on qualitative comparisons for validation.

At a larger scale, AgentSociety exhibits the potential to synchronize over ten thousand agents in plausible social settings, according to Piao et al. [[27](https://arxiv.org/html/2609.19913v1#bib.bib27)].
Additionally, Park et al. [[28](https://arxiv.org/html/2609.19913v1#bib.bib28)] have found that interview-based agents can generate actual individual attitudes with a high level of precision. Recently, SocioVerse (Zhang et al. [[29](https://arxiv.org/html/2609.19913v1#bib.bib29)]) provides a world model in the context of social simulation based on a dataset of ten million actual user accounts obtained through social media, where alignment is attained along environmental, interaction, and behavioral aspects. While this innovation constitutes a significant step towards population-level reality, the proposed architecture focuses on behavioral trends at the aggregate level in politics, news, and economics rather than the temporal change of opinion measures in a simulated interaction setting. FDE-LLM [[30](https://arxiv.org/html/2609.19913v1#bib.bib30)] combines LLM-based role-playing and physically informed differential equations trained using Weibo data, but agents are still low-dimensional and function under an artificial social interaction lattice as opposed to a reconstructed social network. Two other works have developed platforms for simulating social digital twins without continuous, validated opinion-dynamics output. Rossetti et al. [[13](https://arxiv.org/html/2609.19913v1#bib.bib12)] reproduce user interactions, information diffusion, and network dynamics at the platform level, while Gürcan et al. [[31](https://arxiv.org/html/2609.19913v1#bib.bib31)] build a synthetic-population simulator for scenario-based what-if analysis (e.g., youth school dropout). Neither work continuously simulates and validates quantitative opinion trajectories against empirical data. However, according to a recent systematic literature review by Larooij and Törnberg [[32](https://arxiv.org/html/2609.19913v1#bib.bib32)], there is one common problem among these models; namely, verification has remained an unresolved problem for these works due to the reliance on subjective evaluation of believability and the failure to achieve empirical validation at multiple scales.

### II-A Summary of results and lessons learned from past related works

We found that the current state‑of‑the‑art results achieved so far in the field of opinion dynamics simulation reveal three major gaps where novel solutions are needed. The first gap is that classical approaches (such as the DeGroot, Friedkin–Johnsen, Hegselmann–Krause, and Deffuant–Weisbuch models) simplify belief change into numerical update rules that ignore the semantic and emotional factors present in real social communication. The second gap is that existing LLM‑based simulations are typically built on synthetic networks rather than empirically reconstructed social graphs. The third gap is that current LLM‑driven frameworks lack validated predictive capabilities, as they rarely demonstrate that agent‑level and collective‑level opinion trajectories can be reproduced across multiple empirical scales. In this work, we address exactly this intersection by proposing a generative digital twin framework that integrates empirical network cloning, LLM‑driven transition operators, and a multi‑scale validation protocol.

## III Problem Formulation

### III-A Digital Twin Background

Digital twin technology provides a computational mirror of a real‑world system that mirrors its structure and behavior, enabling simulation and prediction without acting on the real system. Originally developed in engineering and manufacturing, the concept has recently been extended to social systems, demonstrating how artificial agents can replicate human interactions and collective behavior [[13](https://arxiv.org/html/2609.19913v1#bib.bib12), [31](https://arxiv.org/html/2609.19913v1#bib.bib31)]. For instance,  [[13](https://arxiv.org/html/2609.19913v1#bib.bib12)] constructs an LLM‑driven digital twin of a social‑media platform to study emergent online dynamics, and  [[31](https://arxiv.org/html/2609.19913v1#bib.bib31)] builds a data‑rich societal replica that enables interactive exploration of policy interventions. These efforts show that digital twins can serve as experimental sandboxes for understanding complex social processes. Motivated by this, we adopt the digital‑twin concept to replicate a real interaction network, evolve it autonomously under a generative model, and evaluate how closely the simulated trajectory matches the observed one. In the following sections, we formalize the empirical system, define its digital‑twin counterpart, and specify the objective linking the two.

### III-B Empirical Social System

Opinion dynamics unfold over a directed weighted graph $\mathcal{G}=(\mathcal{V},\mathcal{E},W)$, where $\mathcal{V}=\{1,\ldots,N\}$ is the set of agents, $\mathcal{E}\subseteq\mathcal{V}\times\mathcal{V}$ represents directed interactions, and $W=[w\_{ji}]$ is the weighted adjacency matrix encoding empirical interaction strength. Each agent $i\in\mathcal{V}$ holds a time-dependent opinion state $o^{t}\_{i}\in[-1,1]$ (operationalized via sentiment polarity, see Section V-B-2) at discrete time $t\in\mathcal{T}=\{0,1,\ldots,T\}$, where $-1$ denotes strong opposition, $+1$ denotes strong support, and $0$ represents neutrality. The global opinion configuration is the state vector $\mathbf{o}^{t}=(o^{t}\_{1},o^{t}\_{2},\ldots,o^{t}\_{N})^{\top}$. An unknown transition operator governs opinion evolution in the empirical system

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbf{o}^{t+1}=F^{\text{real}}(\mathcal{G},\,\mathbf{o}^{t},\,\theta),$$ |  | (1) |

where $\theta$ encodes latent individual and social factors, such as persona, stubbornness, and emotional state that are not directly observable but are approximated through the empirically derived agent attribute vector $\mathbf{a}\_{i}$ in the digital twin. The explicit form of $F^{\text{real}}$ is unknown because it reflects the linguistic and cognitive processes underlying real belief updates.

### III-C Digital Twin System

The digital twin is a computational system $\mathcal{G}^{DT}=(\mathcal{V}^{DT},\mathcal{E}^{DT},W^{DT})$ constructed to replicate the structural and agent-level propertiesof of the empirical network. We enforce structural correspondence: each digital agent maps bijectively to its empirical counterpart, and we preserve the interaction topology exactly.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{V}^{DT}\leftrightarrow\mathcal{V},\quad\mathcal{E}^{DT}\leftrightarrow\mathcal{E},\quad W^{DT}=W.$$ |  | (2) |

Each digital agent $i\in\mathcal{V}^{DT}$ is instantiated with an empirically derived attribute vector $\mathbf{a}^{DT}\_{i}=\mathbf{a}\_{i}$, preserving persona, structural position, behavioral patterns, and emotional features extracted during calibration. A generative transition operator governs opinion evolution in the twin.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbf{o}^{t+1}\_{DT}=F^{DT}(\mathcal{G}^{DT},\,\mathbf{o}^{t}\_{DT},\,\mathbf{A}^{DT}),$$ |  | (3) |

where $F^{DT}$ is implemented through LLM-driven generative agents and serves as a computational surrogate for the unknown $F^{\text{real}}$.

### III-D Problem Objective

The goal is to identify $F^{DT}$ such that the digital twin reproduces the empirical opinion trajectory over unseen time steps.
Eq. ([4](https://arxiv.org/html/2609.19913v1#S3.E4 "In III-D Problem Objective ‣ III Problem Formulation ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")) expresses this requirement by stating that the opinion of each digital‑twin agent at time $t$ should closely match the real opinion observed at the same time during the validation period.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbf{o}^{t}\_{DT}\approx\mathbf{o}^{t}\_{\text{real}},\quad t\in\mathcal{T}\_{\text{val}}.$$ |  | (4) |

Approximation quality is operationalized across four complementary scales: individual-level accuracy (Mean Absolute Error (MAE)), distributional fidelity (Earth Mover’s Distance (EMD)), polarization dynamics (Variance(var)), and structural alignment ($r$), which are formally defined in Section [V-D](https://arxiv.org/html/2609.19913v1#S5.SS4 "V-D Evaluation Metrics ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"). This frames digital twin construction as a system identification problem: $F^{DT}$ is a surrogate dynamical system estimated from observed data, and its validity is assessed by how well it predicts opinion evolution outside the estimation window. $F^{DT}$ observes the opinion trajectory $\{\mathbf{o}^{t}\_{\text{real}}\}$, the network $\mathcal{G}$, and agent-level content ($\theta$). $F^{DT}$ must capture the cognitive and social process ($F^{\text{real}}$).

![Refer to caption](https://arxiv.org/html/2609.19913v1/Approach.png)


Fig. 1: Overview of the proposed generative digital twin framework. Empirical Twitter data is used to extract agent attributes and construct the interaction network. Each agent is initialized with persona traits, stubbornness, and a memory state, and opinions evolve through an LLM that conditions on the current opinion context, neighbor beliefs, and past interactions to produce an updated opinion trajectory.

## IV Proposed Digital Twin Construction

This section describes how the digital twin is constructed from empirical data. Fig. [1](https://arxiv.org/html/2609.19913v1#S3.F1 "Fig. 1 ‣ III-D Problem Objective ‣ III Problem Formulation ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")thats the framework which transforms an empirical Twitter interaction network into a fully executable simulation. Three stages drive this process: the interaction topology is cloned exactly from real data, each agent is instantiated from empirically extracted attributes, and opinion evolution is driven by an LLM conditioned on memory and social exposure.

### IV-A Structural Network Preservation

We duplicate the interaction topology of the empirical network without modification. Each digital agent maps bijectively to its empirical counterpart, and we copy the adjacency matrix $W$ exactly. For each agent $i\in\mathcal{V}$, the neighbor set is $\mathcal{N}\_{i}=\bigl\{j\in\mathcal{V}\mid(j,i)\in\mathcal{E}\bigr\}$, and the corresponding digital agent preserves this set under structural correspondence: $\mathcal{N}\_{i}^{DT}\leftrightarrow\mathcal{N}\_{i}$. Every digital agent, therefore, operates under the same structural conditions as its real-world counterpart throughout the simulation.

### IV-B Agent Cloning via Empirical Attribute Instantiation

We clone each empirical agent $i\in\mathcal{V}$ as a generative agent $\mathcal{A}\_{i}^{DT}$ and assigned an attribute vector extracted during the calibration phase, $\mathbf{a}\_{i}=\bigl(\mathbf{p}\_{i},\;\mathbf{s}\_{i},\;\mathbf{b}\_{i},\;\mathbf{c}\_{i},\;\lambda\_{i},\;\beta\_{i}\bigr)$. where $\mathbf{p}\_{i}$ encodes persona, $\mathbf{s}\_{i}$ structural position, $\mathbf{b}\_{i}$ behavioral activity, $\mathbf{c}\_{i}$ emotional characteristics, $\lambda\_{i}$ stubbornness, and $\beta\_{i}$ influence. We describe each component below.

#### IV-B1 Persona Features ($\mathbf{p}\_{i}$)

Two components define agent persona: a unique identifier and a representation vector $\mathbf{p}\_{i}\in\mathbb{R}^{d}$ encoding linguistic and communicative style derived from empirical tweet content. Persona features draw on Aristotle’s classical rhetorical theory [[33](https://arxiv.org/html/2609.19913v1#bib.bib33)], which identifies three foundational modes of persuasion:

- •

  Ethos (credibility): the degree to which an agent
  establishes authority and trustworthiness through language.
- •

  Pathos (emotional appeal): the extent to which the
  agent evokes emotions, values, or affective responses.
- •

  Logos (logical reasoning): the use of structured
  arguments, evidence, and rational justification.

#### IV-B2 Structural Features ($\mathbf{s}\_{i}$)

The structural position of each agent within the network is
captured by $\mathbf{s}\_{i}=(deg\_{i},\;PR\_{i},\;BC\_{i},\;CC\_{i})$,
where:

- •

  $deg\_{i}$: degree centrality reflects the number of direct connections the agent maintains.
- •

  $PR\_{i}$: PageRank score measures the global influence based on the importance of neighboring agents.
- •

  $BC\_{i}$: betweenness centrality quantifies the extent to which the agent acts as a structural broker.
- •

  $CC\_{i}$: closeness centrality captures how efficiently the agent reaches others in the network.

#### IV-B3 Behavioral Metadata ($\mathbf{b}\_{i}$)

Behavioral activity is captured by $\mathbf{b}\_{i}=(f\_{i},\;g\_{i},\;r\_{i},\;pr\_{i})$, where:

- •

  $f\_{i}$: follower count reflects the size of the agent’s audience.
- •

  $g\_{i}$: followee count represents subscriptions initiated by the agent.
- •

  $r\_{i}$: interaction frequency measures the number of replies, comments, and reactions.
- •

  $pr\_{i}$: posting rate captures the temporal intensity of content generation.

#### IV-B4 Emotional Features ($\mathbf{c}\_{i}$)

Emotional features capture belief orientation and affective
Each agent carries a vector $\mathbf{c}\_{i}=(o\_{i},\;\sigma\_{i},\;\mathbf{e}\_{i})$, where:

- •

  $o\_{i}$: opinion score quantifies the agent’s position toward a target issue on a continuous numerical scale.
- •

  $\sigma\_{i}$: sentiment polarity captures the overall positive or negative tendency in the agent’s content.
- •

  $\mathbf{e}\_{i}$: emotion vector encodes discrete emotional states such as anger, fear, and joy extracted from tweet text.

#### IV-B5 Stubbornness and Influence

Heterogeneous interaction behavior is captured by two empirically derived scalars. Stubbornness $\lambda\_{i}\in[0,1]$ governs resistance to social influence; influence $\beta\_{i}\in[0,1]$ measures the agent’s capacity to shift the opinions of others.

- •

  Stubbornness Estimation ($\lambda\_{i}$): Stubbornness quantifies opinion persistence under social exposure. Let $m\_{i}^{t}=\sum\_{j\in\mathcal{N}\_{i}}\tilde{w}\_{ji}\,o\_{j}^{t}$ denote the weighted neighbor mean at time $t$. The opinion update behavior is modeled as:

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$o\_{i}^{t+1}=\lambda\_{i}\,o\_{i}^{t}+(1-\lambda\_{i})\,m\_{i}^{t}+\varepsilon\_{i}^{t},$$ |  | (5) |

  where $\varepsilon\_{i}^{t}$ is a residual term. The parameter $\lambda\_{i}$ is estimated by ordinary least-squares regression over calibration observations and clipped to $[0,1]$. Higher values indicate stronger belief persistence; lower values indicate greater openness to social influence.
- •

  Influence Score Estimation ($\beta\_{i}$): The influence score $\beta\_{i}$ measures the relative capacity of agent $i$ to propagate opinions across the network. Following the authors of [[34](https://arxiv.org/html/2609.19913v1#bib.bib34)], it is derived from the fundamental matrix of the Friedkin-Johnsen [[7](https://arxiv.org/html/2609.19913v1#bib.bib6)] model (an opinion dynamics model in which agents update their opinions by combining their initial opinions with the influence of their social neighbors) at equilibrium, which encodes how each agent’s initial opinion propagates to all others. Formally, $\beta\_{i}$ is the average impact of agent $i$’s initial opinion on the equilibrium opinions of the full agent population, normalized to $[0,1]$.

### IV-C Generative Transition Operator

#### IV-C1 Agent-Level Opinion Update

For each digital agent $i\in\mathcal{V}^{DT}$, a generative transition function produces the opinion update at time $t$ by a generative transition function realized through Mistral-7B:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$o\_{i}^{t+1}=F\_{\text{LLM}}\!\left(o\_{i}^{t},\;\mathcal{E}\_{i}^{t},\;\mathbf{a}\_{i},\;\mathcal{M}\_{i}^{t}\right),$$ |  | (6) |

where each input is defined as follows:

- •

  $o\_{i}^{t}$: the agent’s opinion at time $t$, serving as its internal belief state before updating and conditioning the entire generative transition.
- •

  $\mathcal{E}\_{i}^{t}$: social exposure at time $t$. For each neighbor $j\in\mathcal{N}\_{i}^{DT}$, the weighted opinion $\tilde{w}\_{ji}o\_{j}^{t}$ and the neighbor’s most recent post $x\_{j}$ are combined into a single formatted string. The textual component $x\_{j}$ is fixed at its calibration-period value for each neighbor and is not refreshed during validation; only the neighbor’s opinion signal $\tilde{w}\_{ji}o\_{j}^{t}$ is updated at each validation step via the simulation. This ensures that no future empirical content enters the simulation after the calibration boundary.
- •

  $\mathbf{a}\_{i}$: the empirically derived attribute vector encoding persona traits, structural position, behavioral patterns, emotional characteristics, stubbornness, and influence held fixed across all timesteps.
- •

  $\mathcal{M}\_{i}^{t}$: the agent’s memory state. At each timestep, it is updated by appending the new opinion $o\_{i}^{t+1}$ and the full LLM-generated reasoning text. No window limit is applied: the complete history from the calibration boundary is retained in subsequent prompts, enabling longitudinal coherence at the cost of increasing prompt length over time, a trade-off discussed in Section [VIII](https://arxiv.org/html/2609.19913v1#S8 "VIII Limitations and Future Research Directions ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").

#### IV-C2 Prompt Structure

$F\_{\text{LLM}}$ conditions the model on the agent’s full internal state and social context through a structured prompt (Fig. [2](https://arxiv.org/html/2609.19913v1#S4.F2 "Fig. 2 ‣ IV-D Simulation Procedure ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")). The ordering is deliberate. Agent identity and persona appear first, anchoring the model’s behavioral profile before any external signal is introduced. Structural and behavioral features follow, establishing how active and influential the agent is within the network. The current opinion state appears immediately before the memory block, so the model processes its present position and historical trajectory together. Neighbor exposure appears last, reflecting the natural cognitive order: an agent consolidates its own prior beliefs before processing incoming social signals. The prompt instructs the model to return an updated opinion consistent with the agent’s persona, prior beliefs, and observed interactions. A heuristic extraction rule parses the response that retrieves the first numeric value in the output and projects it onto $[-1,1]$. This is simple and consistent with all agents

### IV-D Simulation Procedure

The digital twin evolves autonomously over the validation horizon through synchronized multi-agent updates. Algorithm [1](https://arxiv.org/html/2609.19913v1#alg1 "Algorithm 1 ‣ IV-D Simulation Procedure ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") summarizes the full procedure. At the calibratio.n boundary, every agent is initialized with its empirical opinion $o\_{i}^{T\_{cal}}$ and attribute vector $\mathbf{a}\_{i}$. At each step $t\in\mathcal{T}\_{val}$, agents observe neighbor states under the preserved topology and compute their next opinion via Eq. ([6](https://arxiv.org/html/2609.19913v1#S4.E6 "In IV-C1 Agent-Level Opinion Update ‣ IV-C Generative Transition Operator ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")). The resulting opinion and reasoning text are appended to $\mathcal{M}\_{i}^{t}$ to maintain longitudinal coherence. Executing this rule synchronously across all agents yields the global opinion vector $\mathbf{o}\_{DT}^{t+1}$. Repeating over $\mathcal{T}\_{val}$ produces the simulated trajectory

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{O}\_{DT}=\bigl\{\mathbf{o}\_{DT}^{t}\bigr\}\_{t=T\_{cal}}^{T},$$ |  | (7) |

which is compared against the empirical trajectory $\mathcal{O}\_{real}$ to assess predictive fidelity across all four evaluation scales defined in Section [V-D](https://arxiv.org/html/2609.19913v1#S5.SS4 "V-D Evaluation Metrics ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").

![Refer to caption](https://arxiv.org/html/2609.19913v1/prompt.png)


Fig. 2: Structured prompt template used to generate opinion updates for digital agents.


Algorithm 1  Digital Twin Simulation

1:
Input: Calibration network $G^{\mathrm{DT}}=(V,E,W)$; attributes $A^{\mathrm{DT}}=\{\mathbf{a}\_{i}\}$; boundary state $\mathbf{o}^{T\_{\mathrm{cal}}}\_{\mathrm{real}}$; horizon $T$

2:
Initialize agents: for each $i\in V$, set $\mathcal{A}\_{i}^{\mathrm{DT}}\leftarrow(i,\mathbf{a}\_{i},o\_{i}^{T\_{\mathrm{cal}}},\mathcal{M}\_{i}^{T\_{\mathrm{cal}}})$

3:
Preserve network: set $(E^{\mathrm{DT}},W^{\mathrm{DT}})\leftarrow(E,W)$

4:
Initialize state: $\mathbf{o}^{T\_{\mathrm{cal}}}\_{\mathrm{DT}}\leftarrow\mathbf{o}^{T\_{\mathrm{cal}}}\_{\mathrm{real}}$

5:
Record: $\mathcal{O}\_{\mathrm{DT}}\leftarrow\{\mathbf{o}^{T\_{\mathrm{cal}}}\_{\mathrm{DT}}\}$

6:
for $t=T\_{\mathrm{cal}},\dots,T-1$ do $\triangleright$ Iterate over time

7:
  for all $i\in V$ do $\triangleright$ Compute next opinions (synchronous)

8:
   Compute normalized weights $\tilde{w}\_{ji}$ for $j\in N\_{i}$

9:
   Compute exposure $\mathcal{E}^{t}\_{i}$: for each $j\in\mathcal{N}\_{i}$, format $(\tilde{w}\_{ji}o^{t}\_{j},\;x\_{j})$ as a single string ($x\_{j}$ fixed from calibration, $o^{t}\_{j}$ updated via simulation); concatenate across neighbors

10:
   Compute epistemic input $H\_{i}^{t}\leftarrow\beta\_{i}E\_{i}^{t}$

11:
   Generate $o\_{i}^{t+1}\leftarrow F\_{\mathrm{LLM}}(o\_{i}^{t},H\_{i}^{t},\mathbf{a}\_{i},\mathcal{M}\_{i}^{t})$

12:
   Project $o\_{i}^{t+1}\leftarrow\Pi\_{[-1,1]}(o\_{i}^{t+1})$

13:
   $\mathcal{M}^{t+1}\_{i}\leftarrow\mathcal{M}^{t}\_{i}\;\|\;(o^{t+1}\_{i},\;\text{reasoning}^{t+1}\_{i})$ $\triangleright$ Append opinion and LLM reasoning text

14:
  end for

15:
  Set $\mathbf{o}^{t+1}\_{\mathrm{DT}}\leftarrow(o\_{1}^{t+1},\dots,o\_{N}^{t+1})^{\top}$ $\triangleright$ Update opinions

16:
  Append $\mathbf{o}^{t+1}\_{\mathrm{DT}}$ to $\mathcal{O}\_{\mathrm{DT}}$ $\triangleright$ Record trajectory

17:
end for

18:
Output: Digital twin trajectory $\mathcal{O}\_{\mathrm{DT}}$

## V Experimental Setup

This section describes the empirical setup used to evaluate our proposed framework. Next, we describe the datasets, preprocessing procedures, experimental protocol, model implementations, and evaluation practices that we used in our study.

### V-A Datasets and Preprocessing

#### V-A1 Datasets

We used two publicly available Twitter datasets, each capturing real-world opinion dynamics in a distinct socio-political context. Both are collected from Kaggle [[35](https://arxiv.org/html/2609.19913v1#bib.bib40), [36](https://arxiv.org/html/2609.19913v1#bib.bib41)] and consist of tweet content alongside user-level metadata, including follower counts, engagement statistics, and timestamps.

The COVID-19 Twitter dataset [[35](https://arxiv.org/html/2609.19913v1#bib.bib40)] contains more than 1.1 million tweets related to the COVID-19 pandemic across three temporal periods spanning approximately one month each, merged into a unified observation window.

The U.S. Election 2020 Twitter dataset [[36](https://arxiv.org/html/2609.19913v1#bib.bib41)] contains over 1.7 million tweets collected using the #Trump and #Biden hashtags during the 2020 U.S. presidential election and includes user location, likes, and retweet counts.

We processed all tweets through a standardized normalization pipeline: raw text was lowercased; URLs, user mentions, and HTML artifacts were removed via regular expressions; hashtag symbols were stripped while preserving lexical tokens; punctuation, numerical tokens, and non-ASCII characters were filtered; and emojis were removed unless they contributed to sentiment interpretation. We tokenized the cleaned text using the RoBERTa tokenizer. We removed stopwords using the NLTK English stopwords list[[37](https://arxiv.org/html/2609.19913v1#bib.bib18)]. We removed duplicate tweets and retweets to prevent aggregation bias. This pipeline preserves the linguistic signals required for sentiment, persuasion, and emotional feature extraction.

#### V-A2 Network Construction and Agent Filtering

We construct the empirical social network $\mathcal{G}=(\mathcal{V},\mathcal{E},W)$ from mention-based interactions. We establish a directed edge $(j,i)\in\mathcal{E}$ when user $j$ mentions user $i$ in a tweet, and the interaction weight $w\_{ji}$ is defined as the mention frequency from $j$ to $i$ over the full observation window. We identify the community structure using the Leiden algorithm [[38](https://arxiv.org/html/2609.19913v1#bib.bib35)], which outperforms Louvain’s algorithm [[39](https://arxiv.org/html/2609.19913v1#bib.bib42)] on modularity optimization for directed graphs by guaranteeing well-connected communities. We retain the largest connected component to ensure structural coherence and sufficient interaction density for simulation. The COVID-19 dataset yields approximately 700 agents (880 calibration edges, 377 validation edges); the election dataset yields approximately 500 agents (677 calibration edges, 290 validation edges).

### V-B Agent Attribute Extraction

We extracted user-level attributes from the calibration phase to construct the empirically grounded agent attribute vector $\mathbf{a}\_{i}$.

#### V-B1 Persuasion Strategies

We detect rhetorical persona features using a fine-tuned multilingual transformer trained for SemEval 2024 Task 4 [[40](https://arxiv.org/html/2609.19913v1#bib.bib36)]. Post-level persuasion labels are mapped to Aristotle’s rhetorical categories [[41](https://arxiv.org/html/2609.19913v1#bib.bib43)]: ethos, pathos, and logos. We aggregate it per user to obtain normalized distributions. Table [I](https://arxiv.org/html/2609.19913v1#S5.T1 "TABLE I ‣ V-B1 Persuasion Strategies ‣ V-B Agent Attribute Extraction ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") presents illustrative examples of each category.

TABLE I: Examples of persuasion types (ethos, logos, pathos).

| Persuasive type | Example post | Explanation |
| --- | --- | --- |
| Ethos | “As a former U.S. election official, I can confirm that the voting process is secure and closely monitored to ensure accuracy.” | Builds credibility by referencing professional experience and authority in election administration. |
| Logos | “CDC data shows that vaccinated individuals are significantly less likely to be hospitalized. The latest report indicates over 85% reduction in severe cases.” | Uses statistical evidence and references to official data to logically support the argument for vaccination. |
| Pathos | “Every vote represents a voice that deserves to be heard. Don’t let your community’s future be decided without you—show up and vote!” | Appeals to emotions such as civic pride and responsibility to motivate participation in the election process. |

#### V-B2 Emotional Attributes and Opinion Construction

We performed sentiment analysis using a pre-trained RoBERTa model [[42](https://arxiv.org/html/2609.19913v1#bib.bib37)] to produce probability distributions over negative, neutral, and positive classes. These are aggregated to compute daily user opinions $o\_{i}^{t}\in[-1,1]$, forming the empirical trajectory $\{\mathbf{o}\_{\mathrm{real}}^{t}\}\_{t\in\mathcal{T}}$. We extracted emotion intensities using the DistilRoBERTa model [[43](https://arxiv.org/html/2609.19913v1#bib.bib38)], yielding per-user scores for anger, fear, joy, and related discrete states.

#### V-B3 Stubbornness and Influence Estimation

Stubbornness $\lambda\_{i}$ is estimated via per-user ordinary least-squares regression,$o\_{i}^{t+1}=\lambda\_{i}\,o\_{i}^{t}+(1-\lambda\_{i})\,m\_{i}^{t}+\varepsilon\_{i}^{t},\quad m\_{i}^{t}=\sum\_{j\in\mathcal{N}\_{i}}\tilde{w}\_{ji}\,o\_{j}^{t}$.= where $\varepsilon\_{i}^{t}$ is a residual term. We clipped the estimated $\lambda\_{i}$ to $[0,1]$.

We derived influence scores $\beta\_{i}$ from the Friedkin–Johnsen fundamental matrix $\mathbf{H}=(\mathbf{I}-\mathbf{A}\mathbf{W})^{-1}(\mathbf{I}-\mathbf{A})$, which encodes how each agent’s initial opinion propagates to all others at equilibrium. Each $\beta\_{i}$ is defined as the average impact of agent $i$’s initial opinion on all equilibrium opinions, normalized to $[0,1]$.

### V-C Baseline Models

Four classical opinion dynamics models serve as baselines,
evaluated on the same empirical network $\mathcal{G}^{DT}=(\mathcal{V},\mathcal{E},W)$ and validation horizon
$\mathcal{T}\_{\mathrm{val}}$. Each model is described by its equation (Eq. ([8](https://arxiv.org/html/2609.19913v1#S5.E8 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), Eq. ([9](https://arxiv.org/html/2609.19913v1#S5.E9 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), Eq. ([10](https://arxiv.org/html/2609.19913v1#S5.E10 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), Eq. ([11](https://arxiv.org/html/2609.19913v1#S5.E11 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")) ) and the parameter range.

The DeGroot (DG) model [[6](https://arxiv.org/html/2609.19913v1#bib.bib5)] updates opinions as weighted neighbor averages:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$o\_{i}^{t+1}=\sum\_{j\in\mathcal{N}\_{i}\cup\{i\}}w\_{ji}\,o\_{j}^{t},\quad\sum\_{j}w\_{ji}=1.$$ |  | (8) |

It has no tunable hyperparameters, and it is executed directly using calibrated interaction weights.

The Friedkin–Johnsen (FJ) model [[7](https://arxiv.org/html/2609.19913v1#bib.bib6)] balances social influence against intrinsic opinion persistence, where $\alpha\_{i}\in[0,1]$ is susceptibility to social influence and $s\_{i}$ is the intrinsic opinion from calibration data. Since we derive each agent’s influence score $\beta\_{i}$ from the Friedkin–Johnsen fundamental matrix (Section [IV](https://arxiv.org/html/2609.19913v1#S4 "IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), we note that its susceptibility parameter $\alpha\_{i}$ is distinct from the stubbornness coefficient $\lambda\_{i}$ used in our digital twin. The susceptibility grid is $\alpha\in\{0.0,0.2,0.4,0.6,0.8,1.0\}$. Eq. ([9](https://arxiv.org/html/2609.19913v1#S5.E9 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")) defines the Friedkin–Johnsen update, in which each agent blends the weighted average of its neighbors’ opinions with its own intrinsic opinion:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$o\_{i}^{t+1}=\alpha\_{i}\sum\_{j\in\mathcal{N}\_{i}}w\_{ji}\,o\_{j}^{t}+(1-\alpha\_{i})\,s\_{i}.$$ |  | (9) |

where $\alpha\_{i}\in[0,1]$ is agent $i$’s susceptibility to social influence, $w\_{ji}$ is the interaction weight from neighbor $j$, $o^{t}\_{j}$ is neighbor $j$’s opinion at time $t$, and $s\_{i}$ is the intrinsic (anchor) opinion fixed from calibration data.

The Hegselmann–Krause (HK) model [[8](https://arxiv.org/html/2609.19913v1#bib.bib7)] restricts influence to agents within a confidence threshold. Eq. ([10](https://arxiv.org/html/2609.19913v1#S5.E10 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")) defines the Hegselmann–Krause update, where each agent averages only the opinions of neighbors that lie within a confidence threshold of its own:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$o\_{i}^{t+1}=\frac{1}{|\mathcal{C}\_{i}^{t}|}\sum\_{j\in\mathcal{C}\_{i}^{t}}o\_{j}^{t},\quad\mathcal{C}\_{i}^{t}=\bigl\{j\in\mathcal{N}\_{i}\cup\{i\}\mid|o\_{j}^{t}-o\_{i}^{t}|\leq\epsilon\bigr\}.$$ |  | (10) |

with $\epsilon\in\{0.0,0.2,0.4,0.6,0.8,1.0\}$.

where $C^{t}\_{i}$ is the confidence set of agent $i$ at time $t$, $\epsilon$ is the confidence threshold (the maximum opinion distance within which two agents influence each other), and $|C^{t}\_{i}|$ is the number of agents in that set. Neighbors whose opinions differ by more than $\epsilon$ are excluded from the update.

The Deffuant–Weisbuch (DW) model [[9](https://arxiv.org/html/2609.19913v1#bib.bib8)] applies pairwise stochastic adjustments under the same bounded-confidence constraint. Eq. () defines the Deffuant–Weisbuch update, a pairwise stochastic rule under the same bounded-confidence constraint; we include it as a baseline because it represents the pairwise (rather than simultaneous) family of bounded-confidence models:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{if }|o\_{i}^{t}-o\_{j}^{t}|\leq\epsilon:\quad o\_{i}^{t+1}=o\_{i}^{t}+\mu(o\_{j}^{t}-o\_{i}^{t}).$$ |  | (11) |

where $\mu\in(0,0.5]$ is the adjustment rate controlling how far two interacting agents move toward each other, and $\epsilon\in\{0.0,0.2,0.4,0.6,0.8,1.0\}$ is the confidence threshold as in Eq. ([10](https://arxiv.org/html/2609.19913v1#S5.E10 "In V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")). An update occurs only when $|o^{t}\_{i}-o^{t}\_{j}|\leq\epsilon$.

### V-D Evaluation Metrics

We evaluated the simulated opinion trajectory $\mathcal{O}\_{\mathrm{DT}}$ against the empirical trajectory $\mathcal{O}\_{\mathrm{real}}$ using four complementary metrics that capture different levels of agreement. For each metric $\mathcal{M}$, the discrepancy is defined as $\Delta\mathcal{M}=\left|\mathcal{M}(\mathbf{o}\_{\mathrm{DT}})-\mathcal{M}(\mathbf{o}\_{\mathrm{real}})\right|$, where metric values are computed from the simulated and empirical opinion vectors. $\Delta\mathcal{M}=0$ indicates perfect reproduction of the empirical dynamics whereas larger values indicate increasing divergence.

- •

  Mean Absolute Error (MAE): This metric is used to assess whether the digital twin accurately reproduces individual-level opinion dynamics by quantifying how closely the simulated opinions match empirical opinions at the agent level:

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$\mathrm{MAE}(t)=\frac{1}{|\mathcal{V}|}\sum\_{i\in\mathcal{V}}|o\_{i,\mathrm{real}}^{t}-o\_{i,\mathrm{DT}}^{t}|,$$ |  | (12) |

  where $o^{t}\_{i,real}$ and $o^{t}\_{i,DT}$ are the empirical and simulated opinions of agent $i$ at time $t$, respectively, and $|V|$ is the number of agents.
- •

  Earth Mover’s Distance ($EMD$): This metric is used to evaluate whether the digital twin correctly captures the global opinion distribution by measuring distributional mismatch between simulated and empirical opinion states:

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$\mathrm{EMD}^{t}=W\_{1}\!\left(\mu^{t}\_{\mathrm{DT}},\mu^{t}\_{\mathrm{real}}\right).$$ |  | (13) |

  where $W\_{1}$ denotes the first Wasserstein (Earth Mover’s) distance, and $\mu^{t}\_{DT}$ and $\mu^{t}\_{real}$ are the opinion distributions of the simulated and empirical networks at time $t$, respectively.
- •

  Variance ($Var$): It captures the level of opinion dispersion in the network. This metric measures whether the simulated opinion can reproduce polarization phenomena.

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$\mathrm{Var}(\mathbf{o}^{t})=\frac{1}{|\mathcal{V}|}\sum\_{i\in\mathcal{V}}(o\_{i}^{t}-\hat{o}^{t})^{2},$$ |  | (14) |

  where $o^{t}\_{i}$ is the opinion of agent $i$ at time $t$, $\hat{o}^{t}$ is the mean opinion across all agents at time $t$, and $|V|$ is the number of agents.
- •

  Opinion homophily ($r$): It measures the tendency of connected nodes in sharing similar opinion values, computed as the Pearson correlation between the opinions of neighboring nodes.

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$r(t)=\frac{\displaystyle\sum\_{(i,j)\in\mathcal{E}}(o\_{i}^{t}-\bar{o}^{t})(o\_{j}^{t}-\bar{o}^{t})}{\displaystyle\sum\_{(i,j)\in\mathcal{E}}(o\_{i}^{t}-\bar{o}^{t})^{2}},$$ |  | (15) |

  where $o^{t}\_{i}$ and $o^{t}\_{j}$ are the opinions of connected agents $i$ and $j$, $\bar{o}^{t}$ is the mean opinion at time $t$, and $E$ is the edge set. Here $r(t)$ is the Pearson correlation between the opinions of neighboring nodes.

### V-E Implementation Details

#### V-E1 Digital Twin (Mistral-7B)

We implemented the generative transition operator $F\_{\mathrm{LLM}}$ using Mistral-7B [[44](https://arxiv.org/html/2609.19913v1#bib.bib45)] via the LangChain framework[[45](https://arxiv.org/html/2609.19913v1#bib.bib44)]. We selected Mistral-7B because of its strong performance and its low inference cost relative to proprietary alternatives. Each agent operates as an autonomous generative entity with memory, attribute conditioning, and exposure inputs. The sensitivity analysis focuses on the temperature parameter $\tau$, which controls output stochasticity, across six values: $\text{Low: }\{0.0,0.2\},\text{Medium: }\{0.4,0.6\},\text{High: }\{0.8,1.0\}$ . We kept all other inference parameters and prompt templates fixed across runs to isolate the effect of generative variability. We averaged each of the four evaluation metrics over 15 independent runs per configuration.

#### V-E2 Baseline Hyperparameter Configuration,

We evaluated each tunable baseline across six configurations. For Friedkin-Johnsen, the susceptibility parameter varies over $\alpha\in\{0.0,0.2,0.4,0.6,0.8,1.0\}$. For Hegselmann–Krause, and Deffuant–Weisbuch models, the confidence threshold varies over $\epsilon\in\{0.0,0.2,0.4,0.6,0.8,1.0\}$. DG has no tunable parameters and is run once using calibrated interaction weights. This yields 19 configurations in total across all baselines.

### V-F Experimental Protocol

#### V-F1 Calibration, Validation, and Stochasticity

We divided the observation window $\mathcal{T}=\{0,\ldots,T\}$ into a calibration phase $\mathcal{T}\_{\mathrm{cal}}=\{0,\ldots,T\_{\mathrm{cal}}\}$ covering 70% of timesteps and a validation phase $\mathcal{T}\_{\mathrm{val}}=\{T\_{\mathrm{cal}}+1,\ldots,T\}$ covering the remaining 30%. Agents active in both phases are retained to form a stable simulation population $\mathcal{V}^{\*}$. The digital twin is initialized at the calibration boundary using the empirical opinion state $\mathbf{o}\_{\mathrm{real}}^{T\_{\mathrm{cal}}}$ and evolves autonomously over $\mathcal{T}\_{\mathrm{val}}$ without further access to observed data. This protocol ensures that evaluation is based on out-of-sample prediction rather than in-sample fit.

The digital twin is inherently stochastic due to LLM behaviors. To quantify this variability, we conducted 15 independent simulation runs per configuration using different random seeds. We computed the various metrics per run and aggregated them. We reported results as mean $\pm$ 95% confidence interval, computed via normal approximation: $\bar{x}\pm 1.96\,s/\!\sqrt{n}$, where $n=15$ and $s$ is the empirical standard deviation across runs. As the classical baselines are deterministic (fixed networks, initial opinions), and parameters produce identical trajectories across runs, so single-run evaluation was sufficient.

#### V-F2 Model Selection Protocol

For each model, we selected the best-performing hyperparameter configuration after evaluating all four metrics: MAE, $\Delta$EMD, $\Delta$Var, and $\Delta r$ individually over the validation horizon. We selected the configuration that achieved the lowest discrepancy across the greatest number of metrics.

#### V-F3 Ablation Study Design

We evaluated three ablation variants, each removing one core component of the digital twin. These three components include agent attributes, memory, and social exposure, and they are the only inputs to $F\_{\mathrm{LLM}}$ beyond the current opinion state, making them the natural candidates for ablation. Removing the network topology or the LLM itself would produce a fundamentally d,ifferent model class rather than a controlled ablation of the proposed framework.

##### Ablation 1. Removal of Agent Attributes

The attribute vector $\mathbf{a}\_{i}$ is excluded from the prompt. $F\_{\mathrm{LLM}}$ is conditioned only on the prior opinion and external inputs, producing homogeneous agent behavior. This isolates the contribution of persona, structural, behavioral, and emotional heterogeneity to predictive fidelity.

##### Ablation 2. Removal of memory $\mathcal{M}\_{i}^{t}$

The memory module is removed. The transition operator is conditioned solely on the current state and instantaneous social context, preventing agents from accessing historical information about their past opinions and prior interactions with neighbors. This isolates the contribution of longitudinal belief coherence.

##### Ablation 3. Removal of social exposure $\mathcal{E}\_{i}^{t}$

In this experiment, neighbor opinions and the text of their posts are excluded. $F\_{\mathrm{LLM}}$ is conditioned only on internal agent state, transforming the system into a set of independent generative processes. This isolates the contribution of network-coupled interaction to collective opinion formation.

## VI Experimental Results

This section evaluates the predictive fidelity of Mistral-7B as a generative opinion simulation engine across four complementary scales. We organize the results as follows: overall performance against all baselines (Section [VI-A](https://arxiv.org/html/2609.19913v1#S6.SS1 "VI-A Overall Predictive Performance ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), temporal trajectory analysis (Section [VI-B](https://arxiv.org/html/2609.19913v1#S6.SS2 "VI-B Temporal Dynamics and Forecasting Accuracy ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), ablation study (Section [VI-C](https://arxiv.org/html/2609.19913v1#S6.SS3 "VI-C Ablation Study ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")), and sensitivity analysis (Section [VI-D](https://arxiv.org/html/2609.19913v1#S6.SS4 "VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")).

### VI-A Overall Predictive Performance

Table [II](https://arxiv.org/html/2609.19913v1#S6.T2 "TABLE II ‣ VI-A1 Individual-level accuracy. ‣ VI-A Overall Predictive Performance ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") presents the full results; Fig. [3](https://arxiv.org/html/2609.19913v1#S6.F3 "Fig. 3 ‣ VI-A1 Individual-level accuracy. ‣ VI-A Overall Predictive Performance ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") provides a visual comparison across datasets. Mistral-7B achieves the lowest mean discrepancy across all four evaluation metrics on both datasets, with no exception. The strongest classical baseline varies by metric: Hegselmann–Krause achieves the lowest MAE among classical models on both datasets, while Friedkin–Johnsen achieves the lowest $\Delta r$ on the COVID-19 dataset. Mistral-7B outperforms all four baselines regardless of this variation.

#### VI-A1 Individual-level accuracy.

Mistral-7B achieves MAE = 0.150 $\pm$ 0.02 on the COVID-19 dataset and MAE = 0.121 $\pm$ 0.02 on the election dataset, reducing the individual prediction error by more than 50% relative to the best-performing classical model on each dataset (Hegselmann–Krause: 0.309 and 0.312, respectively). Classical models cluster between 0.309 and 0.454 on COVID-19, and between 0.312 and 0.414 on the election dataset, reflecting the ceiling imposed by fixed numerical update rules that cannot adapt to the linguistic content of social interactions.
These results demonstrate that the best-performing classical baseline’s value (Hegselmann–Krause: 0.309 and 0.312) falls outside Mistral-7B’s 95% confidence interval on both datasets; the observed improvement is unlikely to be attributable to run-to-run stochastic variation alone.

TABLE II: Overall digital twin fidelity (validation). DG: DeGroot; FJ: Friedkin–Johnsen; HK: Hegselmann–Krause; DW: Deffuant–Weisbuch; Param: model parameter; MAE: mean absolute error; $r$: homophily; Var: variance; EMD: Earth mover’s distance.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Model | Param | MAE | $\Delta r$ | $\Delta$Var | $\Delta$EMD |
| Dataset 1 (COVID-19) | | | | | |
| DG | – | 0.412 | 0.522 | 0.369 | 0.430 |
| HK | $\varepsilon=0.2$ | 0.309 | 0.303 | 0.292 | 0.328 |
| FJ | $\lambda=0.4$ | 0.329 | 0.250 | 0.240 | 0.311 |
| DW | $\varepsilon=0.4$ | 0.454 | 0.342 | 0.499 | 0.411 |
| Mistral | $\tau=0.8$ | $0.150$±0.02 | $0.120$±0.05 | $0.106$±0.04 | $0.293$±0.10 |
| Dataset 2 (US Election 2020) | | | | | |
| DG | – | 0.352 | 0.365 | 0.470 | 0.359 |
| HK | $\varepsilon=0.2$ | 0.312 | 0.323 | 0.223 | 0.337 |
| FJ | $\lambda=0.6$ | 0.352 | 0.497 | 0.350 | 0.442 |
| DW | $\varepsilon=0.4$ | 0.414 | 0.493 | 0.365 | 0.358 |
| Mistral | $\tau=0.8$ | $0.121$±0.02 | $0.180$±0.07 | $0.115$±0.01 | $0.311$±0.15 |

![Refer to caption](https://arxiv.org/html/2609.19913v1/comparison.png)


Fig. 3: Model performance comparison across datasets.DG: DeGroot; FJ: Friedkin–Johnsen; HK: Hegselmann–Krause; DW: Deffuant–Weisbuch; Param: model parameter; MAE: mean absolute error; $r$: homophily; Var: variance; EMD: Earth Mover’s Distance.

#### VI-A2 Polarization dynamics.

Mistral-7B achieves $\Delta\mathrm{Var}=0.106\pm 0.04$ and $0.115\pm 0.01$ on the two datasets, representing reductions of 55.8% and 48.4% over the best classical baselines (Friedkin–Johnsen: 0.240 on COVID-19; Hegselmann–Krause: 0.223 on the election dataset). Classical models exhibit discrepancies ranging from 0.192 to 0.499, reflecting their tendency to either collapse toward artificial consensus or rigidly cluster under bounded-confidence constraints. As with MAE, the best classical baseline’s value falls outside Mistral-7B’s confidence interval on both datasets, indicating a statistically robust improvement.

#### VI-A3 Structural alignment.

Mistral-7B achieves $\Delta r=0.120\pm 0.05$ and $0.180\pm 0.07$ on the two datasets(COVID-19 and US election 2020), representing reductions of 52.0% and 44.3% over the best classical baselines (Friedkin–Johnsen: 0.250 on COVID-19; Hegselmann–Krause: 0.323 on the election dataset). Classical baselines range from 0.250 to 0.522, confirming that Mistral-7B preserves network-level opinion alignment between connected agents with substantially greater fidelity than any classical model, while the remaining discrepancy indicates room for further improvement in structural reproduction. As with the previous metrics, the corresponding classical baseline values (Friedkin–Johnsen: 0.250; Hegselmann–Krause: 0.323) fall outside Mistral-7B’s confidence interval, supporting a statistically robust improvement.

#### VI-A4 Distributional fidelity.

Mistral-7B achieves $\Delta\mathrm{EMD}=0.293\pm 0.10$ on COVID-19 and $0.311\pm 0.15$ on the election dataset. These mean values remain below all classical baselines on COVID-19 (best: Friedkin–Johnsen 0.311) and are competitive on the election dataset (best: Hegselmann–Krause 0.337). However, the confidence intervals are notably wide, particularly on the election dataset, where $\pm 0.15$ reflects substantial run-to-run variability. This indicates that distributional fidelity is the metric most sensitive to LLM stochasticity, and the one dimension where Mistral-7B’s advantage over classical models is least consistent.

### VI-B Temporal Dynamics and Forecasting Accuracy

Fig. [4](https://arxiv.org/html/2609.19913v1#S6.F4 "Fig. 4 ‣ VI-B Temporal Dynamics and Forecasting Accuracy ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") shows mean opinion trajectories over the validation period. Mistral-7B closely tracks the empirical signal on both datasets, capturing gradual trends and short-term fluctuations alike.

On the COVID-19 dataset, the empirical trajectory exhibits pronounced irregular fluctuations consistent with the rapidly evolving public discourse driven by policy changes, news cycles, and emotionally charged communication. Mistral-7B tracks both the direction and magnitude of these changes, adapting agent responses to contextual exposure signals in a manner that reflects observed user behavior. Classical models produce substantially smoother trajectories: DeGroot and Friedkin-Johnsen converge toward consensus through repeated weighted averaging, whereas Hegselmann–Krause and Deffuant–Weisbuch stabilize into bounded clusters. All four classical models systematically underestimate empirical time variation, a structural limitation confirmed quantitatively by their high MAE and $\Delta\mathrm{Var}$ values in Table [II](https://arxiv.org/html/2609.19913v1#S6.T2 "TABLE II ‣ VI-A1 Individual-level accuracy. ‣ VI-A Overall Predictive Performance ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").

On the election dataset, the empirical trajectory displays more gradual directional shifts in mean opinion. Mistral-7B maintains alignment throughout the validation horizon, whereas classical models drift toward artificial equilibrium states that diverge from the observed sustained evolution of collective opinion.

![Refer to caption](https://arxiv.org/html/2609.19913v1/Opinion_Trajectories.png)


Fig. 4: Mean opinion trajectories over the validation period for the COVID-19 and US Election 2020 datasets.

### VI-C Ablation Study

Table [III](https://arxiv.org/html/2609.19913v1#S6.T3 "TABLE III ‣ VI-C3 The component ranking is consistent across datasets ‣ VI-C Ablation Study ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") reports performance degradation when each framework component is removed. Three major results emerge consistently across both datasets which we discuss next.

#### VI-C1 Agent attributes are the most critical component

Removing $\mathbf{a}\_{i}$ produces the largest MAE degradation on both datasets: from 0.150 to 0.380 on COVID-19 (+0.230) and from 0.121 to 0.299 on the election dataset (+0.178). All other metrics degrade in parallel. Without persona, behavioral, and psychological heterogeneity, agents become effectively homogeneous and lose the ability to reproduce individual-level opinion variation. This confirms that empirically grounded attributes are the primary driver of Mistral-7B’s simulation fidelity, not its linguistic generation capability alone.

#### VI-C2 Memory and social exposure each contribute independently to digital twin fidelity

Removing memory $\mathcal{M}\_{i}^{t}$ increases MAE to 0.265 and 0.216 on the COVID-19 and US Election 2020 datasets respectively. Removing social exposure $\mathcal{E}\_{i}^{t}$ increases it to 0.255 and 0.195. Both degradations are consistent across all metrics and for both datasets. Memory enables longitudinal coherence: without it, agents respond to each time step in isolation, producing inconsistent trajectories. Social exposure enables collective dynamics: without it, agents evolve independently, and the network structure does not affect simulation outcomes.

#### VI-C3 The component ranking is consistent across datasets

For the MAE results, the ranking attributes $>$ memory $>$ exposure holds on both datasets. For secondary metrics, the ordering between memory and exposure is less stable: for the election dataset, removing memory causes only $+0.012$ degradation in $\Delta\mathrm{Var}$ whereas removing exposure causes $+0.073$, reversing the ranking for that metric. This indicates that memory’s contribution is most pronounced at the individual prediction scale, while the social exposure’s contribution is more uniformly distributed across evaluation metrics. All three components remain jointly necessary: removing any one of them significantly degrades performance across at least three of the four evaluation metrics.

TABLE III: Ablation study for proposed framework on COVID-19 and US Election 2020 datasets.

| COVID-19 dataset | | | | |
| --- | --- | --- | --- | --- |
| Variant | MAE | $\Delta r$ | $\Delta\mathrm{Var}$ | $\Delta\mathrm{EMD}$ |
| Full model | 0.150 | 0.120 | 0.106 | 0.293 |
| Remove attributes | 0.380 | 0.201 | 0.290 | 0.485 |
| Remove memory | 0.265 | 0.175 | 0.255 | 0.470 |
| Remove exposure | 0.255 | 0.160 | 0.250 | 0.355 |

| US Election 2020 dataset | | | | |
| --- | --- | --- | --- | --- |
| Variant | MAE | $\Delta r$ | $\Delta\mathrm{Var}$ | $\Delta\mathrm{EMD}$ |
| Full Model | 0.121 | 0.180 | 0.115 | 0.311 |
| Remove Attributes | 0.299 | 0.410 | 0.258 | 0.495 |
| Remove Memory | 0.216 | 0.223 | 0.127 | 0.392 |
| Remove Exposure | 0.195 | 0.218 | 0.188 | 0.395 |

### VI-D Sensitivity Analysis

Table [IV](https://arxiv.org/html/2609.19913v1#S6.T4 "TABLE IV ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") summarizes the sensitivity results of all four models to hyperparameter variation. Each row corresponds to a single configuration value, and the four evaluation metrics (MAE, $\Delta r$, $\Delta Var$, $\Delta EMD$) are computed independently for that configuration. Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") visualizes the corresponding effects on MAE (top row) and $\Delta Var$ (bottom row). The results reveal that classical models exhibit substantial hyperparameter sensitivity.

For the Friedkin–Johnsen model, the performance varies sharply with $\lambda$: moderate values (e.g., $\lambda=0.4$ for COVID-19 and $\lambda=0.6$ for the U.S. Election dataset) yield the lowest discrepancies in Table [IV](https://arxiv.org/html/2609.19913v1#S6.T4 "TABLE IV ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"). This pattern is directly reflected in Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"), where the MAE curve exhibits a clear minimum at these mid-range settings. Extreme values either collapse the model into DeGroot-like averaging ($\lambda=0$) or suppress opinion updating ($\lambda=1$), producing the large MAE and $\Delta Var$ spikes visible at the edges of the Friedkin–Johnsen curves in Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").

Hegselmann–Krause and Deffuant–Weisbuch models display similar instability with respect to the confidence bound $\epsilon$: Table [IV](https://arxiv.org/html/2609.19913v1#S6.T4 "TABLE IV ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") shows that small $\epsilon$ values fragment the network and inflate all discrepancy metrics, whereas large $\epsilon$ values induce premature convergence. Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") mirrors this behavior through steep gradients in both MAE and $\Delta Var$ as $\epsilon$ moves away from the narrow region where performance is optimal. No single configuration generalizes across datasets for any classical model, and the irregular, non-smooth shapes of their curves in Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") reinforce the lack of robustness indicated numerically in Table [IV](https://arxiv.org/html/2609.19913v1#S6.T4 "TABLE IV ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").

In contrast, Mistral-7B exhibits consistent stability across all temperature settings. Table [IV](https://arxiv.org/html/2609.19913v1#S6.T4 "TABLE IV ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") shows only minor variation in MAE, $\Delta Var$, and $\Delta EMD$ across $\tau$, and Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") confirms this through the smooth, shallow curves that remain nearly flat across the entire temperature range. The best performance consistently occurs at $\tau=0.8$, where both MAE and $\Delta Var$ reach their minima, matching the lowest-discrepancy entries in Table V. Lower temperatures slightly increase MAE by reducing generative diversity, while higher temperatures introduce additional stochasticity without improving fidelity. However, these effects remain small relative to the dramatic fluctuations observed in the classical models. The alignment between the narrow performance band in Table V and the stable curves in Fig. [5](https://arxiv.org/html/2609.19913v1#S6.F5 "Fig. 5 ‣ VI-D Sensitivity Analysis ‣ VI Experimental Results ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks") demonstrates that the digital twin’s predictive advantage arises from attribute-conditioned generative reasoning rather than from precise hyperparameter tuning, and that this robustness holds for both datasets.

TABLE IV: Sensitivity analysis under hyperparameter variation.

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Friedkin–Johnsen ($\lambda$) | | | | | Hegselmann–Krause ($\epsilon$) | | | | | Mistral ($\tau$) | | | | | Deffuant–Weisbuch ($\epsilon$) | | | | |
| $\lambda$ | MAE | $\Delta r$ | $\Delta\mathrm{Var}$ | $\Delta\mathrm{EMD}$ | $\epsilon$ | MAE | $\Delta r$ | $\Delta\mathrm{Var}$ | $\Delta\mathrm{EMD}$ | $\tau$ | MAE | $\Delta r$ | $\Delta\mathrm{Var}$ | $\Delta\mathrm{EMD}$ | $\epsilon$ | MAE | $\Delta r$ | $\Delta\mathrm{Var}$ | $\Delta\mathrm{EMD}$ |
| COVID-19 dataset | | | | | | | | | | | | | | | | | | | |
| 0.0 | 0.512 | 0.389 | 0.361 | 0.344 | 0.0 | 0.388 | 0.366 | 0.344 | 0.381 | 0.0 | 0.214 | 0.188 | 0.216 | 0.371 | 0.0 | 0.520 | 0.450 | 0.610 | 0.480 |
| 0.2 | 0.441 | 0.333 | 0.290 | 0.392 | 0.2 | 0.309 | 0.303 | 0.292 | 0.328 | 0.2 | 0.193 | 0.184 | 0.192 | 0.358 | 0.2 | 0.480 | 0.380 | 0.540 | 0.450 |
| 0.4 | 0.329 | 0.250 | 0.240 | 0.311 | 0.4 | 0.341 | 0.319 | 0.307 | 0.359 | 0.4 | 0.176 | 0.212 | 0.151 | 0.349 | 0.4 | 0.454 | 0.342 | 0.499 | 0.411 |
| 0.6 | 0.402 | 0.301 | 0.271 | 0.335 | 0.6 | 0.356 | 0.333 | 0.319 | 0.374 | 0.6 | 0.165 | 0.201 | 0.209 | 0.341 | 0.6 | 0.470 | 0.360 | 0.520 | 0.430 |
| 0.8 | 0.463 | 0.352 | 0.309 | 0.317 | 0.8 | 0.402 | 0.387 | 0.361 | 0.421 | 0.8 | 0.150 | 0.120 | 0.106 | 0.293 | 0.8 | 0.495 | 0.390 | 0.540 | 0.455 |
| 1.0 | 0.531 | 0.421 | 0.312 | 0.402 | 1.0 | 0.437 | 0.312 | 0.319 | 0.395 | 1.0 | 0.182 | 0.189 | 0.129 | 0.455 | 1.0 | 0.510 | 0.410 | 0.560 | 0.470 |
| US Election 2020 dataset | | | | | | | | | | | | | | | | | | | |
| 0.0 | 0.489 | 0.502 | 0.441 | 0.471 | 0.0 | 0.371 | 0.387 | 0.266 | 0.402 | 0.0 | 0.177 | 0.216 | 0.191 | 0.461 | 0.0 | 0.450 | 0.520 | 0.400 | 0.390 |
| 0.2 | 0.431 | 0.564 | 0.402 | 0.498 | 0.2 | 0.312 | 0.323 | 0.223 | 0.337 | 0.2 | 0.159 | 0.213 | 0.212 | 0.352 | 0.2 | 0.430 | 0.500 | 0.380 | 0.370 |
| 0.4 | 0.398 | 0.531 | 0.378 | 0.476 | 0.4 | 0.338 | 0.342 | 0.241 | 0.361 | 0.4 | 0.146 | 0.251 | 0.117 | 0.344 | 0.4 | 0.414 | 0.493 | 0.365 | 0.358 |
| 0.6 | 0.352 | 0.497 | 0.350 | 0.442 | 0.6 | 0.349 | 0.356 | 0.253 | 0.374 | 0.6 | 0.134 | 0.189 | 0.215 | 0.339 | 0.6 | 0.425 | 0.505 | 0.375 | 0.365 |
| 0.8 | 0.366 | 0.509 | 0.361 | 0.455 | 0.8 | 0.392 | 0.401 | 0.291 | 0.419 | 0.8 | 0.121 | 0.180 | 0.115 | 0.311 | 0.8 | 0.440 | 0.515 | 0.390 | 0.380 |
| 1.0 | 0.457 | 0.581 | 0.419 | 0.519 | 1.0 | 0.428 | 0.437 | 0.319 | 0.456 | 1.0 | 0.128 | 0.208 | 0.205 | 0.394 | 1.0 | 0.460 | 0.530 | 0.400 | 0.395 |

![Refer to caption](https://arxiv.org/html/2609.19913v1/sensitivity_mae_var.png)


Fig. 5: Sensitivity of MAE (top row) and $\Delta\mathrm{Var}$ (bottom row) to hyperparameters for Friedkin–Johnsen (FJ), Hegselmann–Krause (HK), Deffuant–Weisbuch (DW), and Mistral across the COVID-19 and US Election 2020 datasets.

## VII Discussion

### VII-A Why Mistral Reproduces Empirical Opinion Dynamics

Three mechanisms jointly explain Mistral’s predictive advantage over classical models. First, belief updating in real social networks involves linguistic interpretation and contextual inference processes that fixed numerical aggregation rules structurally cannot capture. Second, empirically derived agent attributes introduce the behavioral and psychological heterogeneity that drives individual-level variation in opinion trajectories. This aligns with Park et al. [[28](https://arxiv.org/html/2609.19913v1#bib.bib28)], who showed that persona- grounded agents replicate individual attitudes with substantially higher fidelity than generic simulations. Third, persistent memory allows agents to maintain longitudinal coherence across the validation horizon, producing trajectories that reflect prior belief states rather than reacting independently to each timestep. Classical models lack all three mechanisms, which explains why they systematically converge toward smooth equilibrium whereas empirical trajectories exhibit abrupt, irregular fluctuations.

### VII-B The Role of Empirical Grounding

The ablation study confirms that empirical grounding, not linguistic generation capability alone, drives simulation fidelity. Removing agent attributes causes the largest degradation across all metrics and both datasets, demonstrating that Mistral’s advantage depends critically on being conditioned on real user characteristics rather than operating as a generic language model. Our results show that the Mistral model does not collapse to consensus, $\Delta\mathrm{Var}$ remains low for both datasets, suggesting that attribute conditioning and stubbornness estimation introduce sufficient heterogeneity to counteract this tendency, though the precise mechanism warrants further investigation.

### VII-C Mistral as a Generative Digital Twin Engine

Beyond practical utility, these results reveal a theoretical implication. Mistral-7B was not trained for opinion dynamics prediction. Its fidelity arises because large-scale pretraining encodes implicit models of social reasoning and belief revision that become predictive when anchored to empirical network structure and user attributes that function as a cognitive surrogate activated by real interaction data rather than synthetic environments. This framing aligns with Larooij and Törnberg [[32](https://arxiv.org/html/2609.19913v1#bib.bib32)], who called for simulations grounded in empirical data rather than subjective believability, and suggest that the value of LLMs in social simulation lies not in linguistic fluency alone but in their capacity to serve as structured knowledge bases for human behavioral reasoning when empirically conditioned.

### VII-D Implications and Generalization

Mistral’s ability to reproduce empirical opinion trajectories in a cloned interaction network opens concrete pathways for scenario-based social simulation. Researchers can use this framework to evaluate the potential impact of communication interventions, information campaigns, or structural network changes before real-world deployment. Our proposed framework provides capabilities that classical models cannot provide, due to their fixed update rules.

## VIII Limitations and Future Research Directions

Despite its strong performance, our proposed framework has several limitations that we acknowledged.

- •

  Datasets: We conducted the empirical evaluation on two Twitter-based datasets covering COVID-19 discourse and the 2020 U.S. presidential election. While these provide distinct socio-political contexts, the limited scope restricts generalization to other platforms, languages, or topic domains. Differences in interaction norms, content modality, and network topology may affect simulation fidelity in ways not captured here. To address this limitation, as part of our future work, we will evaluate our proposed approach across diverse settings to establish the boundary conditions of the framework’s applicability.
- •

  LLM: We evaluated the proposed framework using a single open-source LLM (Mistral-7B). Simulation fidelity may vary across models with different pretraining corpora, alignment strategies, or parameter scales. Results obtained with Mistral-7B should not be assumed to generalize to other LLMs without empirical verification, and comparative multi-model evaluation represents a direct next step. To address this issue, in the future, we will evaluate the framework across multiple open-source LLMs of different scales and alignment strategies, to determine which model characteristics most affect simulation fidelity and to establish the robustness of our findings beyond Mistral-7B.
- •

  Static network structure: The construction of agent attributes relies on features such as sentiment scores, rhetorical characteristics, and network statistics extracted from social media data, while assuming a fixed network structure during simulation. Although these attributes provide useful approximations of user behavior, real-world social networks evolve as users form new connections and disengage over time. To address this limitation, as part of our future work, we will consider dynamic network evolution that will allow the framework to capture the co-evolution of interaction topology and opinion dynamics. One example could be the modeling how opinion-driven homophily reshapes the network during a health crisis or election cycle.
- •

  Opinion Representation: The opinion trajectories used for calibration and evaluation are derived from sentiment polarity rather than from direct stance annotation. While this proxy is reasonable for topics such as vaccination and electoral preference, where affective tone and stance are strongly correlated, it does not capture cases of sarcasm, stance-incongruent affect (e.g., anger expressed in defense of a position), or topics where sentiment and stance are more loosely coupled. Future work should validate this proxy against human-annotated stance labels.
- •

  Computation cost: Finally, our approach introduces a higher computational cost compared with classical models due to the reliance on LLM inference at each simulation step. While the experiments involve networks of several hundred agents and remain computationally tractable, real-world social platforms often consist of thousands or millions of users. Scaling the framework to such settings will require additional optimization strategies that we will also investigate in the future to address the scalability issue.

## IX Conclusion

In this work, we proposed a generative digital twin framework that clones empirical social interaction networks to predict opinion evolution through the Mistral model that is conditioned on multi-dimensional user attributes, persistent memory, and social exposure. We evaluated the proposed framework on two real-world Twitter datasets. The framework demonstrated the ability to reproduce opinion trajectories that fixed numerical update rules systematically fail to capture. Specifically, it reduces individual-level prediction error by more than 50% over the strongest classical baseline and achieves consistent improvements across polarization, structural, and distributional evaluation scales. Additionally, the ablation experiments confirm that empirically grounded agent attributes are the primary driver of this fidelity, demonstrating that the Mistral model functions as a predictive social cognition surrogate when anchored to real network structure rather than synthetic environments. Extending validation to additional platforms, languages, and topic domains beyond Twitter represents the most direct path toward establishing the generalizability of this simulation paradigm and its applicability to a broader range of social contexts. This will be the future research direction we will undertake next.

## Appendix A List of Acronyms

| Acronym | Description |
| --- | --- |
| AI | Artificial intelligence |
| DG | DeGroot |
| DW | Deffuant–Weisbuch |
| EMD | Earth Mover’s distance |
| FJ | Friedkin–Johnsen |
| HK | Hegselmann–Krause |
| LLM | Large language model |
| MAE | Mean absolute error |
| ABM | Agent-Based Modeling |

## References

- [1]
  V. Nelson, B. Bashyal, P. Tan, and Y. A. Argyris (2024)
  Vaccine rhetoric on social media and covid-19 vaccine uptake rates: a triangulation using self-reported vaccine acceptance.
  Social Science & Medicine 348, pp. 116775.
  Cited by: [§I](https://arxiv.org/html/2609.19913v1#S1.p1.1 "I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [2]
  O. Berjawi, D. Cavaliere, and G. Fenza (2024)
  A multi-aspect analysis of echo chambers on video-sharing social media.
  In International Conference on Advances in Social Networks Analysis and Mining,
  pp. 197–213.
  Cited by: [§I](https://arxiv.org/html/2609.19913v1#S1.p1.1 "I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [3]
  M. Cinelli, G. De Francisci Morales, A. Galeazzi, W. Quattrociocchi, and M. Starnini (2021)
  The echo chamber effect on social media.
  Proceedings of the national academy of sciences 118 (9), pp. e2023301118.
  Cited by: [§I](https://arxiv.org/html/2609.19913v1#S1.p1.1 "I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p3.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [4]
  J. J. Van Bavel, S. K. Gadarian, E. Knowles, and K. Ruggeri (2024)
  Political polarization and health.
  Nature Medicine 30 (11), pp. 3085–3093.
  Cited by: [§I](https://arxiv.org/html/2609.19913v1#S1.p1.1 "I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [5]
  H. Metzler and D. Garcia (2024)
  Social drivers and algorithmic mechanisms on digital media.
  Perspectives on Psychological Science 19 (5), pp. 735–748.
  Cited by: [§I](https://arxiv.org/html/2609.19913v1#S1.p1.1 "I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [6]
  M. H. DeGroot (1974)
  Reaching a consensus.
  Journal of the American Statistical association 69 (345), pp. 118–121.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p1.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p1.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p2.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§V-C](https://arxiv.org/html/2609.19913v1#S5.SS3.p2.1 "V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [7]
  N. E. Friedkin and E. C. Johnsen (1990)
  Social influence and opinions.
  Journal of mathematical sociology 15 (3-4), pp. 193–206.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p1.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p1.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [2nd item](https://arxiv.org/html/2609.19913v1#S4.I5.i2.p1.1 "In IV-B5 Stubbornness and Influence ‣ IV-B Agent Cloning via Empirical Attribute Instantiation ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§V-C](https://arxiv.org/html/2609.19913v1#S5.SS3.p3.1 "V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [8]
  H. Rainer and U. Krause (2002)
  Opinion dynamics and bounded confidence: models, analysis and simulation.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p1.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p1.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§V-C](https://arxiv.org/html/2609.19913v1#S5.SS3.p6.1 "V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [9]
  G. Deffuant, D. Neau, F. Amblard, and G. Weisbuch (2000)
  Mixing beliefs among interacting agents.
  Advances in complex systems 3 (01n04), pp. 87–98.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p1.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p1.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§V-C](https://arxiv.org/html/2609.19913v1#S5.SS3.p9.1 "V-C Baseline Models ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [10]
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li (2023)
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p2.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p4.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [11]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p2.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p4.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [12]
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. Rogers (2024)
  Simulating opinion dynamics with networks of llm-based agents.
  In Findings of the association for computational linguistics: NAACL 2024,
  pp. 3326–3346.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p2.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p4.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [13]
  G. Rossetti, M. Stella, R. Cazabet, K. Abramski, E. Cau, S. Citraro, A. Failla, R. Improta, V. Morini, and V. Pansanella (2024)
  Y social: an llm-powered social media digital twin.
  arXiv preprint arXiv:2408.00818.
  Cited by: [§I-A](https://arxiv.org/html/2609.19913v1#S1.SS1.p2.1 "I-A Research gaps ‣ I Introduction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§III-A](https://arxiv.org/html/2609.19913v1#S3.SS1.p1.1 "III-A Digital Twin Background ‣ III Problem Formulation ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [14]
  C. Castellano, S. Fortunato, and V. Loreto (2009)
  Statistical physics of social dynamics.
  Reviews of modern physics 81 (2), pp. 591–646.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p1.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [15]
  A. V. Proskurnikov and R. Tempo (2017)
  A tutorial on modeling and analysis of dynamic social networks. part i.
  Annual Reviews in Control 43, pp. 65–79.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p1.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [16]
  Y. Liu and Y. Yang (2022)
  A probabilistic linguistic opinion dynamics method based on the degroot model for emergency decision-making in response to covid-19.
  Computers & Industrial Engineering 173, pp. 108677.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p2.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [17]
  Z. Wu, Q. Zhou, Y. Dong, J. Xu, A. H. Altalhi, and F. Herrera (2022)
  Mixed opinion dynamics based on degroot model and hegselmann–krause model in social networks.
  IEEE Transactions on Systems, Man, and Cybernetics: Systems 53 (1), pp. 296–308.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p2.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [18]
  I. Conjeaud, P. Lorenz-Spreen, and A. Kalogeratos (2024)
  Degroot-based opinion formation under a global steering mechanism.
  IEEE Transactions on Computational Social Systems 11 (3), pp. 4040–4057.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p2.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [19]
  A. Nugent, S. N. Gomes, and M. Wolfram (2025)
  Opinion dynamics with continuous age structure.
  European Journal of Applied Mathematics, pp. 1–36.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p2.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [20]
  M. Starnini, F. Baumann, T. Galla, D. Garcia, G. Iñiguez, M. Karsai, J. Lorenz, and K. Sznajd-Weron (2025)
  Opinion dynamics: statistical physics and beyond.
  arXiv preprint arXiv:2507.11521.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p2.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [21]
  E. Bonabeau (2002)
  Agent-based modeling: methods and techniques for simulating human systems.
  Proceedings of the national academy of sciences 99 (suppl\_3), pp. 7280–7287.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p3.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [22]
  J. M. Epstein (2012)
  Generative social science: studies in agent-based computational modeling.
   Princeton University Press.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p3.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [23]
  S. E. Parsegov, A. V. Proskurnikov, R. Tempo, and N. E. Friedkin (2016)
  Novel multidimensional models of opinion dynamics in social networks.
  IEEE Transactions on Automatic Control 62 (5), pp. 2270–2285.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p3.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [24]
  J. Weismueller, R. L. Gruner, P. Harrigan, K. Coussement, and S. Wang (2024)
  Information sharing and political polarisation on social media: the role of falsehood and partisanship.
  Information Systems Journal 34 (3), pp. 854–893.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p3.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [25]
  X. Mou, Z. Wei, and X. Huang (2024)
  Unveiling the truth and facilitating change: towards agent-based large-scale social movement simulation.
  In Findings of the Association for Computational Linguistics: ACL 2024,
  pp. 4789–4809.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p4.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [26]
  C. Wang, Z. Liu, D. Yang, and X. Chen (2025)
  Decoding echo chambers: llm-powered simulations revealing polarization in social networks.
  In Proceedings of the 31st international conference on computational linguistics,
  pp. 3913–3923.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p4.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [27]
  J. Piao, Y. Yan, J. Zhang, N. Li, J. Yan, X. Lan, Z. Lu, Z. Zheng, J. Y. Wang, D. Zhou, et al. (2025)
  Agentsociety: large-scale simulation of llm-driven generative agents advances understanding of human behaviors and society.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [28]
  J. S. Park, C. Q. Zou, A. Shaw, B. M. Hill, C. Cai, M. R. Morris, R. Willer, P. Liang, and M. S. Bernstein (2024)
  Generative agent simulations of 1,000 people.
  arXiv preprint arXiv:2411.10109 52.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§VII-A](https://arxiv.org/html/2609.19913v1#S7.SS1.p1.1 "VII-A Why Mistral Reproduces Empirical Opinion Dynamics ‣ VII Discussion ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [29]
  X. Zhang, J. Lin, X. Mou, S. Yang, X. Liu, L. Sun, H. Lyu, Y. Yang, W. Qi, Y. Chen, et al. (2025)
  Socioverse: a world model for social simulation powered by llm agents and a pool of 10 million real-world users.
  arXiv preprint arXiv:2504.10157.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [30]
  J. Yao, H. Zhang, J. Ou, D. Zuo, Z. Yang, and Z. Dong (2025)
  Social opinions prediction utilizes fusing dynamics equation with llm-based agents.
  Scientific Reports 15 (1), pp. 15472.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [31]
  Ö. Gürcan, V. Falck, M. G. Rousseau, and L. L. Lima (2025)
  Towards an llm-powered social digital twinning platform.
  In International Conference on Practical Applications of Agents and Multi-Agent Systems,
  pp. 118–130.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§III-A](https://arxiv.org/html/2609.19913v1#S3.SS1.p1.1 "III-A Digital Twin Background ‣ III Problem Formulation ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [32]
  M. Larooij and P. Törnberg (2025)
  Validation is the central challenge for generative social simulation: a critical review of llms in agent-based modeling.
  Artificial Intelligence Review 59 (1), pp. 15.
  Cited by: [§II](https://arxiv.org/html/2609.19913v1#S2.p5.1 "II Related Work ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§VII-C](https://arxiv.org/html/2609.19913v1#S7.SS3.p1.1 "VII-C Mistral as a Generative Digital Twin Engine ‣ VII Discussion ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [33]
  Ü. D. Demirdöğen (2010)
  The roots of research in (political) persuasion: ethos, pathos, logos and the yale studies of persuasive communications.
  Cited by: [§IV-B1](https://arxiv.org/html/2609.19913v1#S4.SS2.SSS1.p1.1 "IV-B1 Persona Features (𝐩_𝑖) ‣ IV-B Agent Cloning via Empirical Attribute Instantiation ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [34]
  O. Berjawi, R. Khatoun, and G. Fenza (2025)
  Digital persuasion: understanding the impact of online influencers on public opinion.
  In International Conference on Persuasive Technology,
  pp. 117–127.
  Cited by: [2nd item](https://arxiv.org/html/2609.19913v1#S4.I5.i2.p1.1 "In IV-B5 Stubbornness and Influence ‣ IV-B Agent Cloning via Empirical Attribute Instantiation ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [35]
  A. K. Chakraborty (2020)
  COVID-19 twitter dataset.
   Kaggle.
  Note: Accessed: 2025-11-29
  External Links: [Link](https://www.kaggle.com/datasets/arunavakrchakraborty/covid19-twitter-dataset)
  Cited by: [§V-A1](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS1.p1.1 "V-A1 Datasets ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§V-A1](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS1.p2.1 "V-A1 Datasets ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [36]
  M. C. Hui (2020)
  US election 2020 tweets.
   Kaggle.
  Note: Accessed: 2025-11-29
  External Links: [Link](https://www.kaggle.com/datasets/manchunhui/us-election-2020-tweets)
  Cited by: [§V-A1](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS1.p1.1 "V-A1 Datasets ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks"),
  [§V-A1](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS1.p3.1 "V-A1 Datasets ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [37]
  S. Bird, E. Klein, and E. Loper (2009)
  Natural language processing with python: analyzing text with the natural language toolkit.
   ” O’Reilly Media, Inc.”.
  Cited by: [§V-A1](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS1.p4.1 "V-A1 Datasets ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [38]
  V. A. Traag, L. Waltman, and N. J. Van Eck (2019)
  From louvain to leiden: guaranteeing well-connected communities.
  Scientific reports 9 (1), pp. 5233.
  Cited by: [§V-A2](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS2.p1.1 "V-A2 Network Construction and Agent Filtering ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [39]
  V. D. Blondel, J. Guillaume, R. Lambiotte, and E. Lefebvre (2008)
  Fast unfolding of communities in large networks.
  Journal of statistical mechanics: theory and experiment 2008 (10), pp. P10008.
  Cited by: [§V-A2](https://arxiv.org/html/2609.19913v1#S5.SS1.SSS2.p1.1 "V-A2 Network Construction and Agent Filtering ‣ V-A Datasets and Preprocessing ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [40]
  N. Chatterjee (2024)
  Multilingual persuasion detection from text.
  Note: Accessed: 2025-05-12https://huggingface.co/nishan-chatterjee/multilingual-persuasion-detection-from-text
  External Links: [Link](https://huggingface.co/nishan-chatterjee/multilingual-persuasion-detection-from-text)
  Cited by: [§V-B1](https://arxiv.org/html/2609.19913v1#S5.SS2.SSS1.p1.1 "V-B1 Persuasion Strategies ‣ V-B Agent Attribute Extraction ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [41]
  A. C. Braet (1992)
  Ethos, pathos and logos in aristotle’s rhetoric: a re-examination.
  Argumentation 6 (3), pp. 307–320.
  Cited by: [§V-B1](https://arxiv.org/html/2609.19913v1#S5.SS2.SSS1.p1.1 "V-B1 Persuasion Strategies ‣ V-B Agent Attribute Extraction ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [42]
  Y. Liu, M. Ott, N. Goyal, J. Du, M. Joshi, D. Chen, O. Levy, M. Lewis, L. Zettlemoyer, and V. Stoyanov (2019)
  Roberta: a robustly optimized bert pretraining approach.
  arXiv preprint arXiv:1907.11692.
  Cited by: [§V-B2](https://arxiv.org/html/2609.19913v1#S5.SS2.SSS2.p1.1 "V-B2 Emotional Attributes and Opinion Construction ‣ V-B Agent Attribute Extraction ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [43]
  J. Hartmann (2022)
  Emotion english distilroberta-base.
  Note: https://huggingface.co/j-hartmann/emotion-english-distilroberta-base/
  Cited by: [§V-B2](https://arxiv.org/html/2609.19913v1#S5.SS2.SSS2.p1.1 "V-B2 Emotional Attributes and Opinion Construction ‣ V-B Agent Attribute Extraction ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [44]
  A. Q. Jiang, A. Sablayrolles, A. Mensch, C. Bamford, D. S. Chaplot, D. d. l. Casas, F. Bressand, G. Lengyel, G. Lample, L. Saulnier, et al. (2023)
  Mistral 7b.
  arXiv preprint arXiv:2310.06825.
  Cited by: [§V-E1](https://arxiv.org/html/2609.19913v1#S5.SS5.SSS1.p1.1 "V-E1 Digital Twin (Mistral-7B) ‣ V-E Implementation Details ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
- [45]
  LangChain AI (2026)
  LangChain.
  Note: GitHub repositoryAccessed: jan. 02, 2026
  External Links: [Link](https://github.com/langchain-ai/langchain)
  Cited by: [§V-E1](https://arxiv.org/html/2609.19913v1#S5.SS5.SSS1.p1.1 "V-E1 Digital Twin (Mistral-7B) ‣ V-E Implementation Details ‣ V Experimental Setup ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks").
