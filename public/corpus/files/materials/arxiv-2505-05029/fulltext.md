---
id: arxiv-2505-05029-text
type: material
title: Reputation as a Solution to Cooperation Collapse in LLM-based MASs
work_id: arxiv-2505-05029
source_url: https://arxiv.org/html/2505.05029v3
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 1d17f79dcc8e17e3cc402cc02af9517b636deace41816ddaf68d6f52d00630dd
---

> Источник: [https://arxiv.org/html/2505.05029v3](https://arxiv.org/html/2505.05029v3). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

\doi

UEHN4980
C. Amato, L. Dennis, V. Mascardi, J. Thangarajah (eds.)

# Reputation as a Solution to Cooperation Collapse in LLM-based MASsThanks: Corresponding author: w-zhen@nwpu.edu.cn, hushuyue@pjlab.org.cn

Conference: Proc. of the 25th International Conference
on Autonomous Agents and Multiagent Systems (AAMAS 2026); May 25 – 29, 2026; Paphos, Cyprus

Siyue Ren
Affiliation: School of Mechanical Engineering, Northwestern Polytechnical University, Xi’an, China
, 
Wanli Fu
Affiliation: School of Cybersecurity, Northwestern Polytechnical University, Xi’an, China
, 
Xinkun Zou
Affiliation: School of Artificial Intelligence, OPtics and ElectroNics (iOPEN), Northwestern Polytechnical University, Xi’an, China
, 
Chen Shen
Affiliation: Kyushu University, Fukuoka, Japan
, 
Yi Cai
Affiliation: South China University of Technology, Guangzhou, China
, 
Chen Chu
Affiliation: Yunnan University of Finance and Economics, Kunming, China
, 
Zhen Wang\*
Affiliation: Northwestern Polytechnical University, Xi’an, China
email: [w-zhen@nwpu.edu.cn](mailto:w-zhen@nwpu.edu.cn)
 and 
Shuyue Hu\*
Affiliation: Shanghai Artificial Intelligence Laboratory, Shanghai, China
email: [hushuyue@pjlab.org.cn](mailto:hushuyue@pjlab.org.cn)

2026

###### Abstract.

Cooperation has long been a fundamental topic in both human society and AI systems. However, recent studies indicate that the collapse of cooperation may emerge in multi-agent systems (MASs) driven by large language models (LLMs). To address this challenge, we explore reputation systems as a remedy. We propose *RepuNet*, a dynamic, dual-level reputation framework that models both agent-level reputation dynamics and system-level network evolution. Specifically, driven by direct interactions and indirect gossip, agents form reputations for both themselves and their peers, and decide whether to connect or disconnect other agents for future interactions. Through three distinct scenarios, we show that RepuNet effectively avoids cooperation collapse, promoting and sustaining cooperation in LLM-based MASs. Moreover, we find that reputation systems can give rise to rich emergent behaviors in LLM-based MASs, such as the formation of cooperative clusters, the social isolation of exploitative agents, and the preference for sharing positive gossip rather than negative ones. The GitHub repository for our project can be accessed via the following link: https://github.com/RGB-0000FF/RepuNet.

###### Keywords:

Reputation;Cooperation;Large language model;Social simulation

## 1. Introduction

Cooperation collapse refers to a phenomenon driven by social dilemmas, in which individual self-interest conflicts with collective welfare, resulting in harmful outcomes for the entire group ([Hardin, 1998](https://arxiv.org/html/2505.05029v3#bib.bib55); [Ostrom, 2008](https://arxiv.org/html/2505.05029v3#bib.bib23); [Orzan et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib32)). Such collapse occurs across diverse domains and underpins a wide array of challenges, including resource allocation ([Piatti et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib48)), climate change mitigation ([Dietz et al., 2020](https://arxiv.org/html/2505.05029v3#bib.bib22)), and coordination among self-driving vehicles ([Dafoe et al., 2021](https://arxiv.org/html/2505.05029v3#bib.bib54)). Addressing cooperation collapse is essential for sustaining effective collaboration in both human societies and AI systems.

Recent studies on large language model (LLM)-based agents have revealed the existence of cooperation collapse in LLM-based multi-agent systems (MASs), a system of agents that are powered by LLMs. For example, in simulated fishing allocation scenarios, Piatti et al. ([Piatti et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib48)) observed that LLM-based agents tended to over-exploit shared resources, resulting in rapid depletion and long-term unsustainability. Similarly, in iterated Prisoner’s Dilemma settings, agents often responded to a single defection with irreversible retaliation, leading to cascading mutual defection and the breakdown of cooperation ([Akata et al., 2025](https://arxiv.org/html/2505.05029v3#bib.bib33); [Wang et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib52); [Gandhi et al.,](https://arxiv.org/html/2505.05029v3#bib.bib20) ). While these studies have documented the widespread cooperation collapse, effective solutions remain elusive.

![Refer to caption](https://arxiv.org/html/2505.05029v3/RepuNet_v11.png)


Figure 1. RepuNet: A dynamic reputation system aimed at sustaining cooperation and preventing cooperation collapse in LLM-based MASs. Agents interact within networks through both direct encounters and indirect gossip, shaping their self-reputation and peer-reputation. At the system level, agents decide whether to form or maintain network connections (i.e. edges) based on these reputations. The evolving reputations and network structures, stored in RepuNet databases, continuously guide agents’ behaviors, influencing their future interactions.

This paper explores the use of reputation systems as a remedy. Reputation is a set of collective beliefs or evaluations about individuals based on their past behavior, enabling agents to form expectations about others ([Bromley, 1993](https://arxiv.org/html/2505.05029v3#bib.bib46); [Sperber and Baumard, 2012](https://arxiv.org/html/2505.05029v3#bib.bib14); [Mu et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib27); [Santos et al., 2019](https://arxiv.org/html/2505.05029v3#bib.bib31)). As an emergent social signal, it encodes perception of trustworthiness, reliability, and integrity.
A reputation system operationalizes this signal by systematically collecting, aggregating, and disseminating reputational information across agents.
Proven effective in both human societies and traditional MASs, reputation systems offer a fesible solution to fostering cooperation even among strangers, evoking social norms, and serving as lightweight, scalable substitutes for direct monitoring or formal enforcement ([Suzuki and Akiyama, 2005](https://arxiv.org/html/2505.05029v3#bib.bib47); [Barclay, 2012](https://arxiv.org/html/2505.05029v3#bib.bib15); [Giardini et al., 2022](https://arxiv.org/html/2505.05029v3#bib.bib11); [Xu et al., 2019](https://arxiv.org/html/2505.05029v3#bib.bib30)).

In this research, we extend reputation mechanisms to LLM-based MASs, and demonstrate that our approach effectively prevents cooperation collapse. Crucial to our study will be how to *operationalize* reputation mechanisms for LLM-based MASs. To this end, we introduce RepuNet, the first *operational* reputation system tailored for LLM-based MASs, in which every interaction is explicitly embedded within a network structure. RepuNet operates on two levels: agent-level reputation dynamics and system-level network evolution. Specifically, at the agent level, echoing real-world reputation dynamics ([Sabater i Mir, 2004](https://arxiv.org/html/2505.05029v3#bib.bib51); [Granatyr et al., 2015](https://arxiv.org/html/2505.05029v3#bib.bib18); [Giardini et al., 2022](https://arxiv.org/html/2505.05029v3#bib.bib11)), RepuNet enables agents shape initial self- and peer-reputations after their first encounter and iteratively update them after each subsequent interaction. Besides, gossip has been a key mechanism for spreading reputational information across networks throughout human evolution. Inspired by this, agents evaluate each direct encounter and, when (dis)satisfied, broadcast that information, updating the target’s reputation. In RepuNet, we explicitly couple reputation updates to topology changes: once a reputation is revised, it drives network rewiring. At the system level, agents strengthen ties to high-reputation partners and sever links to disreputable ones, reflecting the human tendency to seek trustworthy collaborators and abandon exploitative relationships. This network rewiring reshapes future encounter probabilities and fosters long-term cooperation among reputable agents. We implement RepuNet by prompting LLM-based agents, rather than relying on any rule-based mechanisms or mathematical formulations. Both reputation dynamics and network evolution in RepuNet are autonomously determined by the agents themselves, without any human intervention.
An overview of our reputation system is provided in Figure [1](https://arxiv.org/html/2505.05029v3#S1.F1 "Figure 1 ‣ 1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").

In the experiment, we consider three scenarios that progress from classical to real-world dilemmas: (i) the Prisoner’s Dilemma, a fundamental social dilemma in game theory ([Axelrod and Hamilton, 1981](https://arxiv.org/html/2505.05029v3#bib.bib60)); (ii) voluntary participation, adapted from human field experiments ([Yoeli et al., 2013](https://arxiv.org/html/2505.05029v3#bib.bib13)), modeling collective resource-sharing; and (iii) trading investment, based on an economic trust game ([Berg et al., 1995](https://arxiv.org/html/2505.05029v3#bib.bib19)), capturing sequential investment dilemmas. Within LLM-based MASs, our experiments replicate the phenomenon of cooperation collapse previously observed in human studies. Specifically, agents acting without RepuNet prioritize individual gain, causing widespread exploitation and eventual cooperation breakdown. In contrast, with RepuNet, agents are incentivized to maintain cooperation, favoring collective welfare and preventing collapse. Across all three scenarios, we observed consistent outcomes using similar prompts with varying task descriptions. This demonstrates robustness to wording variations, ensuring our results are not artifacts of a single idiosyncratic prompt or scenario.
Additionally, our experiments reveal rich emergent behaviors: (i) cooperative agents with high reputations self-organize into persistent, tightly connected clusters; (ii) these clusters selectively isolate low-reputation agents who exhibit defective behavior; (iii) unlike humans, LLM-based agents prefer sharing positive gossip rather than negative; and (iv) without RepuNet, dishonesty leads to network collapse. An ablation study further confirms the effectiveness of each RepuNet component: removing any single module reduces cooperation rates and may trigger complete collapse. The experiment’s GitHub repository is accessible via the following link: https://github.com/RGB-0000FF/RepuNet.

In summary, our key contributions are as follows:

1. (1)

   We replicate the phenomenon of cooperation collapse within LLM-based MASs, previously observed in human studies ([Yoeli et al., 2013](https://arxiv.org/html/2505.05029v3#bib.bib13)), confirming its widespread prevalence and emphasizing the critical need to address this challenge.
2. (2)

   We introduce *RepuNet*, the first *operational* system to generalize reputation mechanisms to LLM-based MASs. It not only establishes reputation dynamics through direct social interactions and indirect gossip but also drives network evolution, thereby effectively preventing cooperation collapse.
3. (3)

   We show *RepuNet* exhibits various emergent phenomena, such as cooperative clustering, the isolation of exploitative agents, and a bias toward positive gossip, demonstrating the crucial role of reputation systems in catalyzing complex collective behaviors in LLM-based MASs.

## 2. Background

In this section, we define and formalize the cooperation problem. Next, we review recent studies identifying cooperation collapse in LLM-based MASs. We then discuss prior research on how reputation and social networks facilitate cooperation in traditional MASs.

### 2.1. Cooperation Problem

In this study, we investigate the cooperation problem within the classic context of social dilemmas ([Nowak, 2006](https://arxiv.org/html/2505.05029v3#bib.bib3); [Conitzer and Oesterheld, 2023](https://arxiv.org/html/2505.05029v3#bib.bib29)), where individual interests conflict with collective welfare.
It is important to distinguish this setting from a separate line of research on LLM-based multi-agent coordination ([Chen et al., 2023](https://arxiv.org/html/2505.05029v3#bib.bib49); [Hong et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib17); [Chen et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib28)). Although some prior works use the terms cooperation and coordination interchangeably, coordination typically refers to scenarios without conflicting interests, where agents work together toward a shared objective.

A social dilemma, in its elementary form, can be exemplified by the two-player Prisoner’s Dilemma, in which each agent independently decides either to cooperate (C) or defect (D). Payoffs for each player are summarized in the following matrix:

|  |  |  |
| --- | --- | --- |
|  | $$\begin{array}[]{c|cc}&\text{C}&\text{ D}\\ \hline\cr\text{C}&(R,R)&(S,T)\\ \text{D}&(T,S)&(P,P)\end{array}$$ |  |

A social dilemma occurs under the payoff conditions $T>R>P>S$ and $2R>T+S$. Although mutual cooperation maximizes collective benefits, individual rationality incentivizes defection, leading to worse outcomes for everyone—a phenomenon known as *cooperation collapse*. While illustrated here as a binary-choice, two-player scenario, social dilemma can be extended to multi-player and multi-choice situations, such as the Public Goods Game.

### 2.2. Cooperation Problem in LLM-based MASs

Recent studies have explicitly identified the presence of cooperation collapse in MASs ([Piatti et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib48); [Mozikov et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib24); [Mao et al., 2023](https://arxiv.org/html/2505.05029v3#bib.bib59); [Akata et al., 2025](https://arxiv.org/html/2505.05029v3#bib.bib33); [Ren et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib43)). Mozikov et al. ([2024](https://arxiv.org/html/2505.05029v3#bib.bib24)) examined how simulated emotions affect LLM-based agents’ behavior in social dilemmas, finding that even positive emotions can unpredictably reduce cooperation among LLM-based agents. Piatti et al. ([2024](https://arxiv.org/html/2505.05029v3#bib.bib48)) proposed a simulation platform to study resource-sharing scenarios, revealing that agents frequently over-exploited shared natural resources, thereby failing to maintain sustainable cooperation and exacerbating the collapse of cooperation. Mao et al. ([2023](https://arxiv.org/html/2505.05029v3#bib.bib59)) showed that, in a multi-round water-auction game, a lower initial resource-supply ratio provokes LLM-based agents to bid more aggressively, reducing overall survival rates. Akata et al. ([2025](https://arxiv.org/html/2505.05029v3#bib.bib33)) found that, in iterated two-strategy games, these LLM-based agents often permanently defect following a single betrayal, hindering long-term cooperation. While these studies highlight the problem, they primarily focus on analyzing LLM-based agents’ performance rather than proposing solutions to avoid cooperation collapse, which remains a pressing open challenge in LLM-based MASs.

### 2.3. Reputation for Traditional Multi-agent Systems

Indirect and network reciprocity are key mechanisms for the evolution of cooperation ([Nowak, 2006](https://arxiv.org/html/2505.05029v3#bib.bib3)). Reputation underpins indirect reciprocity by allowing individuals to condition their behavior on others’ reputations, enabling higher cooperation than reputation-blind strategies ([Nowak and Sigmund, 2005](https://arxiv.org/html/2505.05029v3#bib.bib38)). Network reciprocity, on the other hand, promotes cooperation by restricting interactions to local neighborhoods, in contrast to well-mixed populations where players interact globally ([Nowak and May, 1992](https://arxiv.org/html/2505.05029v3#bib.bib1)). Dynamic networks enhance this effect by enabling individuals to rewire ties, fostering assortative interactions among cooperators ([Rand et al., 2011](https://arxiv.org/html/2505.05029v3#bib.bib2); [Wang et al., 2012](https://arxiv.org/html/2505.05029v3#bib.bib37)). Some works implement this interplay that specify how reputations are updated ([Gross and De Dreu, 2019](https://arxiv.org/html/2505.05029v3#bib.bib35)), how networks evolve ([Fu et al., 2008](https://arxiv.org/html/2505.05029v3#bib.bib21)), and how agents behave ([Anastassacos et al., 2021](https://arxiv.org/html/2505.05029v3#bib.bib50)). Although they cannot provide a direct solution due to their historical inability to leverage the strengths of LLMs, they provide us with valuable insights for addressing cooperation collapse in LLM-based MASs.

### 2.4. Social networks in LLM-based MASs

Social networks profoundly influence LLM-based MASs by shaping agent interactions, information dissemination, and behavioral coordination ([Takács et al., 2021](https://arxiv.org/html/2505.05029v3#bib.bib36)). Recent studies have leveraged LLM-based agents to simulate complex dynamics within social networks, aiming to explore emergent human-like behaviors ([Gao et al., 2023](https://arxiv.org/html/2505.05029v3#bib.bib57); [Williams et al., 2023](https://arxiv.org/html/2505.05029v3#bib.bib58); [Yang et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib16); [Chuang et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib26)). For instance, Gao et al. ([Gao et al., 2023](https://arxiv.org/html/2505.05029v3#bib.bib57)) introduced the S3 framework, which employs LLM-based agents to replicate nuanced individual and collective human behaviors—including emotions, attitudes, and interactions—within real-world social networks. Yang et al. ([Yang et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib16)) developed the OASIS framework, a simulated social media network capable of scaling to millions of agents, facilitating extensive investigations into collective phenomena such as viral information diffusion, echo chamber formation, and group polarization dynamics. Although these studies highlight significant progress in LLM-based MASs for modeling emergent group behaviors, the fundamental challenge of sustaining cooperation within evolving social networks remains underexplored.

## 3. RepuNet: a Reputation System for LLM-based Agent Societies

In this section, we formalize our reputation-based MAS. After an overview of the networked system, we introduce RepuNet from two perspectives: (i) agent-level reputation dynamics, and (ii) system-level network evolution. Due to space limitations, detailed prompts for RepuNet operations are provided in Appendix B (which is only available in the arXiv version of the paper).

### 3.1. Formalization: Networked Multi-Agent System and Reputation

In a MAS, interactions between agents can be represented by a network, which determines the likelihood of whom they meet and interact with.
Let
an ordered pair $G=(V,E)$ denote a directed graph, where $V$ is the set of vertices representing the agents in the system, and $E\subseteq\{(i,j)|i,j\in V^{2}$ and $i\neq j\}$ is the set of directed edges, each of which is an ordered pair of vertices. A directed edge from vertex $i$ to vertex $j$ indicates that agent $j$ is reachable from agent $i$, meaning that agent $j$ is viewed as a potential partner that agent $i$ is willing to interact in future interactions.

In our system, reputation arises from information exchange within the embedded network. Specifically, two types of reputations can emerge in our reputation-based MAS: (i) self-reputation, which reflects an agent’s self-perception of how others evaluate it based on past interactions ([Giardini et al., 2022](https://arxiv.org/html/2505.05029v3#bib.bib11)), and (ii) peer-reputation, which captures an agent’s evaluation of other’s behaviors in previous interactions ([Bromley, 1993](https://arxiv.org/html/2505.05029v3#bib.bib46); [Takács et al., 2021](https://arxiv.org/html/2505.05029v3#bib.bib36)). Regardless of the types, formally, reputation in our system can be represented as a standardized quintuple: $r=\langle a,s,o,c,\mu\rangle$. Here, $a$ denotes the basic information of the agent being evaluated (i.e., the evaluated target), such as its ID and name. Since reputation is context-dependent (e.g., one may be a good parent but not a good colleague) ([Sabater and Sierra, 2001](https://arxiv.org/html/2505.05029v3#bib.bib4)), $s$ and $o$ denote the scenario and role of the evaluated target, respectively. $c$ represents the reputation in natural language, e.g., “James is too self-centered, often prioritizing his interests over the community’s needs”; $\mu$ quantifies the reputation described in $c$, ranging from -1 to 1, with higher scores indicating a better reputation. We consider that for each agent, the self-reputation and peer-reputation are stored in its RepuNet database, denoted as $\mathcal{R}$. Note that an agent’s reputation always refers to the most recently stored value in the database, as reputations are dynamically updated.

To allow RepuNet to be integrated with other MASs involving agent interactions, such as Generative Agents ([Park et al., 2023](https://arxiv.org/html/2505.05029v3#bib.bib45)) and ProAgents ([Zhang et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib56)), we consider it as an event-driven system that responds to agent encounters. Driven by direct encounters and indirect gossip, our reputation-based MAS dynamically update reputations in response to new interactions, allowing evaluations to adapt to evolving agent behaviors. We model these dynamics on two levels: reputation dynamics at the agent level and network dynamics at the system level, which will be discussed in following sections.

### 3.2. Reputation Dynamics at the Agent Level

This section explores how reputations are shaped and updated through direct encounters and indirect gossip ([Mui et al., 2002](https://arxiv.org/html/2505.05029v3#bib.bib34); [Wu et al., 2016b](https://arxiv.org/html/2505.05029v3#bib.bib8); [Giardini et al., 2022](https://arxiv.org/html/2505.05029v3#bib.bib11)).

#### 3.2.1. Reputation Driven by Direct Encounters

In the real world, reputation is often shaped by direct social encounters, such as when a seller provides quality products ([Sabater i Mir, 2004](https://arxiv.org/html/2505.05029v3#bib.bib51); [Granatyr et al., 2015](https://arxiv.org/html/2505.05029v3#bib.bib18)). Reputation is not fixed or unchanging; rather, it evolves over time based on new encounters and the cumulative evaluations of one’s past behavior, that is, one’s previous reputation ([Giardini et al., 2022](https://arxiv.org/html/2505.05029v3#bib.bib11)). Inspired by these, in our system, agents can form both self-reputation and peer-reputation based on their first social encounter. Over time, as agents meet and interact again, they update these reputations by considering both previous reputations and the impressions formed during the latest interaction. The process of reputation formation and updating is implemented through prompting LLMs, rather than rule-based mechanisms or mathematical formulations.

Specifically, let $m\_{ij}(t)$ represent the direct encounter between agent $i$ and $j$ at time $t$. After they first encounter, for instance, the agent $i$ generates a peer-reputation for the agent $j$, denoted as $r\_{i\rightarrow j}(t)$. As time evolves, on subsequent encounters, agent $i$ updates agent $j$’s reputation based on the new encounter $m\_{ij}(t+t^{\prime})$ and previous peer-reputation $r\_{i\rightarrow j}(t)$. We represent this process by a LLM-based operation $r\_{i\rightarrow j}(t+t^{\prime})\leftarrow\texttt{ShapeRepuPeer}(m\_{ij}(t+t^{\prime}),r\_{i\rightarrow j}(t),\text{if $r\_{i\rightarrow j}(t)\neq\phi$ })$. By shaping peer-reputation, we expect agents are able to select partners rather than relying on random encounters, avoiding free-riders and fostering cooperation in LLM-based MASs.

In addition to peer-reputation, agents can also generate self-reputations to reflect their self-perceptions. To ensure alignment with their personalities, LLM-based agents are prompted to generate self-reputations based on both their agent descriptions $\mathcal{D}$ and the direct encounter $m\_{ij}(t)$. Similar to shaping peer-reputation, as time evolves, once agent $i$ encounters another agent $x$, not necessarily the previous agent $j$, we instruct agent $i$ to update its self-reputation based on the new encounter $m\_{ix}(t+t^{\prime})$ and its previous self-reputation $r\_{i}(t)$. The process can be represented by the LLM-based operation $r\_{i}(t+t^{\prime})\leftarrow\texttt{ShapeRepuSelf}(\mathcal{D}\_{i},m\_{ix}(t+t^{\prime}),r\_{i}(t),\text{if $r\_{i}(t)\neq\phi$ })$. By shaping self-reputation, we aim to help agents maintain appropriate behaviors to uphold good reputations for cooperation.

#### 3.2.2. Reputation Driven by Indirect Gossip

Gossip has been a part of human interactions throughout evolutionary history, from early hunter-gatherer societies to today’s social media-driven culture ([Lange et al., 2014](https://arxiv.org/html/2505.05029v3#bib.bib5); [Wu et al., 2016a](https://arxiv.org/html/2505.05029v3#bib.bib6)). It involves the exchange of positive or negative information between a gossiper and a listener about an *absent* individual, making it an effective way to shape and spread reputations ([Foster, 2004](https://arxiv.org/html/2505.05029v3#bib.bib7); [Giardini and Conte, 2012](https://arxiv.org/html/2505.05029v3#bib.bib39)). In human societies, people have a strong tendency to gossip about others when they are (dis)satisfied with interactions, using it to influence others’ reputations ([Foster, 2004](https://arxiv.org/html/2505.05029v3#bib.bib7); [Wu et al., 2016b](https://arxiv.org/html/2505.05029v3#bib.bib8)). Inspired by this, our system enables each agent to evaluate its satisfaction with others’ behavior based on their innate attributes described in agent descriptions and then decide whether to gossip after each interaction. Due to the lack of space, details of the gossip process and related prompts are provided in Appendix A and B.

When gossip occurs, a listener generates a peer-reputation for the agent being gossiped based on the gossip information (i.e., what the gossiper conveys). Let $\theta\_{y}(t)$ denote the gossip information about the agent being gossiped $y$ at the time $t$. The listener $l$ shape a peer-reputation of agent $y$, denoted as $r\_{l\rightarrow y}(t)$. As time evolves, when agent $l$ hears new gossip about agent $y$ at time $t+t^{\prime}$, we instruct agent $l$ to update peer-reputation by considering both the latest gossip information $\theta\_{y}(t+t^{\prime})$ and the previous peer-reputation $r\_{l\rightarrow y}(t)$. The LLM-based operation can be represented by $r\_{l\rightarrow y}(t+t^{\prime})\leftarrow\texttt{ShapeRepuGossip}(\theta\_{y}(t+t^{\prime}),r\_{l\rightarrow y}(t),\text{if $r\_{l\rightarrow y}(t)\neq\phi$})$. Through gossip, we aim to empower agents to exchange reputations of unknown agents, helping them assess potential partners and reduce defection risks.

### 3.3. Network Dynamics at the System Level

This section focuses on the system level, examining how networks evolve. Once an agent shapes peer-reputations, it is natural to consider whether to build or maintain edges with them for future interactions based on their reputations. As RepuNet dynamics are event-driven, we analyze network evolution via direct encounters and gossip.

![Refer to caption](https://arxiv.org/html/2505.05029v3/F02_main_result.png)


Figure 2. Experimental results across three scenarios. Panels (a), (c) and (e) illustrate the trends of agent cooperation, participation, and investment success rates, respectively. Solid lines represent average rates, and shaded areas indicate error margins. Panels (b), (d) and (f) show statistically significant correlations (all $p<0.001$) between agent reputation and behavior, illustrated by linear regression. Each data point represents an agent’s average behavior over the last ten rounds, across five experimental runs (indicated by different shades of blue).

#### 3.3.1. Network Driven by Direct Interactions

In human society, social networks determine the likelihood of individuals meeting, interacting, and exchanging information ([Takács et al., 2021](https://arxiv.org/html/2505.05029v3#bib.bib36)). Individuals seeking new partners prefer to build relations with reputable ones and avoid exploitation by unilaterally ending unfavorable relationships ([Bshary and Grutter, 2005](https://arxiv.org/html/2505.05029v3#bib.bib44); [Du and Fu, 2011](https://arxiv.org/html/2505.05029v3#bib.bib12)). Inspired by these, we instruct each LLM-based agent to decide whether to build or maintain an edge with another to enable future interactions. Specifically, let $\mathcal{D}\_{i}$ represent agent $i$’s agent description, and $m\_{ij}(t)$ denote the direct encounter between agent $i$ and $j$ at time $t$. Once agent $i$ shapes peer-reputation $r\_{i\rightarrow j}(t)$ of the agent $j$, it considers whether to build or maintain the edge with the agent $j$ for future interactions. We represent this LLM-based operation by $w\_{i\rightarrow j}(t)\in\{\text{``Y'',N''}\}\leftarrow\text{InteractEdgeShape}(\mathcal{D}\_{i},m\_{ij}(t),r\_{i\rightarrow j}(t))$. Once the edge is formed (i.e., $w\_{i\rightarrow j}(t)=\text{``Y''}$), the agent $i$ records an ordered pair $(i,j)$ in its RepuNet database $\mathcal{R}\_{i}$. As the network evolves, we expect agents with high reputations form more edges and dense clusters, fostering relationships that sustain cooperation. Meanwhile, low-reputation agents form fewer edges and may become isolated from cooperative ones.

#### 3.3.2. Network Driven by Indirect Gossip

Through indirect gossip, agents (as listeners) can shape the reputations of agents being gossiped they have never met. However, they cannot build new edges with these agents, as no direct encounter has occurred. If the listener and the agent being gossiped have previously interacted, the listener can reconsider whether to maintain the edge after updating the peer-reputation of the agent being gossiped. Specifically, let $D\_{l}$ represent the listener $l$’s agent description, $\theta\_{y}(t)$ represent the gossip information about the agent $y$ at time $t$, and $r\_{l\rightarrow y}(t)$ denote the listener $l$ shapes a peer-reputation of agent $y$. We instruct LLM-based agents to consider whether to maintain an edge with the agent being gossiped based on the aforementioned information, which can be formally represented by the LLM-based operation $w\_{l\rightarrow y}(t)\in\{\text{``Y'',N''}\}\leftarrow\text{GossipEdgeShape}(\mathcal{D}\_{l},\theta\_{y}(t),r\_{l\rightarrow y}(t))$. Once the edge is disconnect (i.e., $w\_{l\rightarrow y}(t)=\text{``N''}$), agent $l$ removes the ordered pair $(l,y)$ from its RepuNet database $R\_{l}$, thereby causing the network to evolve at time $t$. By leveraging gossip-driven reputation updates, we aim to ensure that agents can promptly update peer reputations, which prevents the stagnation of reputation updates due to a lack of further encounters.

## 4. Experiment

Our experiments aim to answer three key questions across three scenarios: (i) Does our RepuNet effectively avoid cooperation collapse? (ii) How does our RepuNet prevent the occurrence of the collapse? (iii) How effectively does each component of our RepuNet contribute to sustaining long-term cooperation? We first outline the experimental settings, then address the first two research questions, and finally examine the last question through an ablation study.

### 4.1. Experimental Settings

##### Initialization

We conducted experiments with 20 LLM-based agents, initially placed as isolated nodes without connections and varying in initial preferences: some were prosocial, prioritizing collective welfare, while others were self-interested, favoring individual gains. They interacted pairwise in three distinct scenarios, gradually forming network edges through random or reputation-based partner selection. Experiments ended once cooperation rates stabilized, consequently, rounds varied by scenario. For computational efficiency, we used GPT-4o mini, repeating each scenario five times for reliability. We additionally conducted experiments with three distinct LLMs to verify RepuNet’s robustness. The corresponding details are provided in Appendixes B and C, which are included exclusively in the arXiv version. Codes are available at: https://github.com/RGB-0000FF/RepuNet.

##### Controlled Settings

To evaluate RepuNet, we also conducted controlled settings using a standard LLM-based MAS architecture ([Xi et al., 2025](https://arxiv.org/html/2505.05029v3#bib.bib53); [Mou et al., 2024](https://arxiv.org/html/2505.05029v3#bib.bib25)), comprising three modules: *profile* (defining roles and preferences), *memory* (storing perceived information for behavioral consistency), and *action* (enabling interaction with the environment and other agents). The key distinction is that agents without RepuNet interact only through the evolved network, lacking the capability to evaluate peers, form reputations, or spread peer reputations through gossip.

##### Scenario 1: The Prisoner’s Dilemma

We first consider the Prisoner’s Dilemma, a classic social dilemma from game theory. In this scenario, agents are paired and independently choose either to cooperate (C) or defect (D), resulting in the following payoffs: mutual cooperation yields (3,3); mutual defection yields (1,1); if one defects while the other cooperates, the defector receives 5 and the cooperator receives 0. The dilemma is that while mutual cooperation maximizes collective benefits, rational self-interest incentivizes defection, as defection consistently offers a higher individual payoff regardless of the other agent’s action.

##### Scenario 2: Voluntary Participation

We adapted the scenario presented by Erez et al. ([Yoeli et al., 2013](https://arxiv.org/html/2505.05029v3#bib.bib13)), which models a public goods dilemma in the real world. Agents decide whether to participate or not in a voluntary program to reduce energy consumption. The dilemma is that while participation lowers overall energy demand and benefits the collective, agents are often incentivized to not-participate for self-interest due to the inconvenience of reduced energy use.
Each agent independently decided whether to participate and could revise its decision every five rounds of interactions (i.e., communications) with others.

##### Scenario 3: Trading Investment

Inspired by the trust game in an investment setting ([Berg et al., 1995](https://arxiv.org/html/2505.05029v3#bib.bib19)), we designed a sequential investment dilemma between an investor and a trustee. The trustee proposes an allocation; if accepted, the investor invests funds, which double for the trustee to allocate as agreed or deviate. Both agents then evaluate each other. The dilemma arises since adherence promotes cooperation, yet short-term gains incentivize deviation. Each agent started with 10 units, randomly assigned as investor or trustee, and paired either randomly or by choosing partners based on reputation.

![Refer to caption](https://arxiv.org/html/2505.05029v3/F03_network_evolve.png)


Figure 3. Case studies of network dynamics at the system level. Nodes represent agents, colored from blue (low reputation) to red (high reputation); green nodes indicate agents without RepuNet. Node size reflects the number of mutual connections. Panels (a), (c), and (e) show the network dynamics of agents without RepuNet, whereas agents with RepuNet form dense clusters and isolate low-reputation peers, as shown in panels (b), (d), and (f).

### 4.2. Emergent Phenomena from Three Scenarios

In this section, we evaluate RepuNet’s effectiveness in preventing cooperation collapse at two levels. At the agent level, we assess whether agents sustain cooperative behaviors to maintain high reputations. At the system level, we examine whether RepuNet drives network evolution through effective partner selection.

##### RepuNet sustains cooperation and effectively prevents cooperation collapse.

A key finding across all scenarios is that agents equipped with RepuNet consistently exhibit cooperative behaviors throughout all five independent runs. Specifically, in Scenario 1, agents with RepuNet maintain higher cooperation rates, preventing cooperation collapse (Figure [2](https://arxiv.org/html/2505.05029v3#S3.F2 "Figure 2 ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")a). Similarly, in Scenario 2, agents consistently participate to support public goods (Figure [2](https://arxiv.org/html/2505.05029v3#S3.F2 "Figure 2 ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")c). And agents in Scenario 3 also prioritize long-term cooperation over short-term self-interest, gradually reaching nearly full adherence to collective agreements (Figure [2](https://arxiv.org/html/2505.05029v3#S3.F2 "Figure 2 ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")e). In contrast, cooperation consistently declines in scenarios without RepuNet, ultimately resulting in cooperation collapse. In summary, RepuNet effectively incentivizes sustained cooperation, encouraging most agents to prioritize collective interests—even at the expense of personal convenience—to avoid cooperation collapse.

|  |  |  |  |
| --- | --- | --- | --- |
| Treatment | Scenario 1 | Scenario 2 | Scenario 3 |
| with *RepuNet* | 0.93($\pm 0.04$) | 0.85($\pm 0.03$) | 0.98($\pm 0.02$) |
| w/o Gossip | 0.90($\pm 0.04$) | 0.81 ($\pm 0.04$) | 0.96($\pm 0.01$) |
| w/o Reputation | 0.46($\pm 0.21$) | 0.29 ($\pm 0.07$) | 0.26($\pm 0.34$) |
| w/o *RepuNet* | 0.09 ($\pm 0.07$) | 0.19 ($\pm 0.06$) | 0.17($\pm 0.08$) |

Table 1. Ablation study confirms RepuNet’s effectiveness, achieving the highest cooperation rates (93% in Scenario 1; 85% in Scenario 2; 98% in Scenario 3). Results are averaged over the last five rounds across five runs.

##### Cooperative behavior fosters good reputations, sustaining long-term cooperation through a positive feedback loop in LLM-based MASs.

As shown in Figure [2](https://arxiv.org/html/2505.05029v3#S3.F2 "Figure 2 ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")(b), (d) and (f), we observe a strong positive correlation between cooperative actions and reputations. In Scenario 1, agents that frequently cooperate achieve higher reputations. Similarly, agents in Scenario 2 who consistently participate in voluntary programs to enhance public goods obtain significantly higher average reputations. Likewise, agents in Scenario 3 who prioritize collective agreements and long-term cooperation over short-term self-interest gain higher reputations. These results indicate that cooperative behavior directly strengthens an agent’s value, motivating agents to sustain their positive reputations through continued cooperation and thus reinforcing a self-sustaining cooperative cycle.

##### RepuNet drives network evolution by clustering cooperative agents with high reputations and isolating defectors with low reputations.

Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") presents case studies across three scenarios, showing snapshots from one of five experimental runs to illustrate how network structures evolve over time. Initially, agents in all three scenarios start unconnected. In Scenario 1, agents without RepuNet form only sparse and loose connections (Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")a), whereas agents with RepuNet gradually develop selective links, clustering high-reputation cooperators and isolating defectors (Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")b). A similar pattern emerges in Scenario 2 (Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")d). In contrast, agents without RepuNet in Scenario 2 form indiscriminate connections, interacting broadly without selectivity (Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")c). In Scenario 3, RepuNet enables agents to progressively form cohesive clusters of cooperative, reputable individuals, eventually integrating all high-reputation agents (Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")f). This emergent structure—where cooperators cluster and defectors become isolated—prevents exploitation, stabilizes cooperation, and effectively averts the collapse of cooperative behavior.

![Refer to caption](https://arxiv.org/html/2505.05029v3/images/AAAI_gossip_v2.png)


Figure 4. Correlation between gossip frequency and reputation (Scenario 2). Agents gossiped about more frequently have higher reputations, as $90\%$ of gossip is positive. The regression line shows a significant positive trend ($p<0.002$). Each shade of blue represents one of five experimental runs (average across 20 agents).

##### More finding in Scenario 2.

Unlike humans ([Foster, 2004](https://arxiv.org/html/2505.05029v3#bib.bib7)), LLM-based agents predominantly share positive gossip rather than negative. Figure [4](https://arxiv.org/html/2505.05029v3#S4.F4 "Figure 4 ‣ RepuNet drives network evolution by clustering cooperative agents with high reputations and isolating defectors with low reputations. ‣ 4.2. Emergent Phenomena from Three Scenarios ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") highlights this with two key analyses. First, our correlation study shows that frequently discussed agents tend to have higher reputations, contrasting typical human social dynamics ([Foster, 2004](https://arxiv.org/html/2505.05029v3#bib.bib7)). To investigate further, we conducted sentiment analysis using twitter-roberta-base-sentiment, classifying gossip as positive, neutral, or negative with corresponding confidence scores. Sentiments were mapped to numerical values ($+1$ for positive, $0$ for neutral, $-1$ for negative), weighted by confidence and averaged. The analysis revealed that approximately $90\%$ of gossip is positive, exemplified by statements such as: “I want to gossip about Isabella… her perspective on the program as an empowering opportunity for our community is just remarkable.”

##### More finding in Scenario 3.

Dishonesty leads to network collapse. Figure [3](https://arxiv.org/html/2505.05029v3#S4.F3 "Figure 3 ‣ Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs")(c) shows that, without RepuNet, networks in Scenario 3 initially form loose clusters but ultimately disintegrate. Agents prioritize short-term self-interest, exploiting benefits rather than adhering to agreed distributions. This absence of self-regulation results in widespread defection from cooperative agreements, triggering systemic instability and exemplifying cooperation collapse.

### 4.3. Ablation Study on the Reputation System

In networked MASs, we conducted an ablation study to assess the effectiveness of RepuNet’s reputation and gossip modules. Specifically, we compared four conditions: (i) with RepuNet: the full model, including both reputation generation and gossip interactions; (ii) without Gossip: agents generate and update reputations solely through direct encounters, without gossip; (iii) without Reputation: agents directly interact and gossip about others, but no reputations are generated or updated; and (iv) without RepuNet: both gossip and reputation mechanisms are completely removed, leaving agents to interact only through direct encounters within network.

As shown in Table [1](https://arxiv.org/html/2505.05029v3#S4.T1 "Table 1 ‣ RepuNet sustains cooperation and effectively prevents cooperation collapse. ‣ 4.2. Emergent Phenomena from Three Scenarios ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"), performance was averaged over the final 5 rounds in each scenario. RepuNet achieved the highest cooperation rates in all scenarios, confirming its effectiveness in preventing cooperation collapse. Removing gossip led to only a slight performance drop, suggesting direct interactions have greater influence than gossip. However, eliminating the reputation mechanism or the entire RepuNet resulted in a significant decline in cooperation (below 20%), indicating that without reputation mechanism, agents prioritized to individual rationality, leading to the collapse.

## 5. Conclusion

The study of reputation-based MASs has been a well-established area of AI for decades; on the other hand, LLM-based AI technologies have recently captivated the world. In this paper, we bridge these two fields by operationalizing reputation as a solution to sustain cooperation and prevent cooperation collapse in networked, LLM-based MASs. Specifically, we proposed RepuNet, a novel reputation system operating at two levels: reputation dynamics at the agent level and network dynamics at the system level, both driven by direct encounters and indirect gossip. These dynamics, in turn, influence agents’ behavior in future interactions. To evaluate RepuNet’s effectiveness, we conducted experiments across three scenarios progressing from classical to real-world dilemmas.
Extensive results show that reputation-enabled agents not only self-regulate their behavior effectively but also select reputable partners for cooperation, thereby preventing cooperation collapse.

###### Acknowledgements.

This research was supported by the National Key Research and Development Project of China (No. 2024YFE0210900), the National Natural Science Foundation of China (No. U22B2036 and 62506186), the National Science Fund for Distinguished Young Scholarship of China (No. 62025602), the Technological Innovation Team of Shaanxi Province (No. 2025RS-CXTD-009), the International Cooperation Project of Shaanxi Province (No. 2025GH-YBXM-017), the Shanghai Municipal Science and Technology Major Project, the Tencent Foundation and Xplorer Prize, and Shanghai Artificial Intelligence Laboratory.

## References

- Akata et al. (2025)
  E. Akata, L. Schulz, J. Coda-Forno, S. J. Oh, M. Bethge, and E. Schulz
  Playing repeated games with large language models.
  Nature Human Behaviour, pp. 1–11.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p2.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§2.2](https://arxiv.org/html/2505.05029v3#S2.SS2.p1.1 "2.2. Cooperation Problem in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Anastassacos et al. (2021)
  N. Anastassacos, J. Garcia, S. Hailes, M. Musolesi, et al.
  Cooperation and reputation dynamics with reinforcement learning.
  In Proceedings of the 20th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2021),
  pp. 115–123.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Axelrod and Hamilton (1981)
  R. Axelrod and W. D. Hamilton
  The evolution of cooperation.
  science 211 (4489), pp. 1390–1396.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p5.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Barclay (2012)
  P. Barclay
  Harnessing the power of reputation: strengths and limits for promoting cooperative behaviors.
  Evolutionary Psychology 10 (5), pp. 147470491201000509.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Berg et al. (1995)
  J. Berg, J. Dickhaut, and K. McCabe
  Trust, reciprocity, and social history.
  Games and economic behavior 10 (1), pp. 122–142.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p5.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§4.1](https://arxiv.org/html/2505.05029v3#S4.SS1.SSS0.Px5.p1.1 "Scenario 3: Trading Investment ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Bromley (1993)
  D. B. Bromley
  Reputation, image and impression management..
   John Wiley & Sons.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.1](https://arxiv.org/html/2505.05029v3#S3.SS1.p2.1 "3.1. Formalization: Networked Multi-Agent System and Reputation ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Bshary and Grutter (2005)
  R. Bshary and A. S. Grutter
  Punishment and partner switching cause cooperative behaviour in a cleaning mutualism.
  Biology Letters 1 (4), pp. 396–399.
  Cited by: [§3.3.1](https://arxiv.org/html/2505.05029v3#S3.SS3.SSS1.p1.1 "3.3.1. Network Driven by Direct Interactions ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Buss and Dedden (1990)
  D. M. Buss and L. A. Dedden
  Derogation of competitors.
  Journal of Social and Personal Relationships 7 (3), pp. 395–422.
  Cited by: [§A.2](https://arxiv.org/html/2505.05029v3#A1.SS2.p2.1 "A.2. The Listener’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Chen et al. (2024)
  B. Chen, G. Li, X. Lin, Z. Wang, and J. Li
  Blockagents: towards byzantine-robust llm-based multi-agent coordination via blockchain.
  In Proceedings of the ACM Turing Award Celebration Conference-China 2024,
  pp. 187–192.
  Cited by: [§2.1](https://arxiv.org/html/2505.05029v3#S2.SS1.p1.1 "2.1. Cooperation Problem ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Chen et al. (2023)
  W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, et al.
  Agentverse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In The Twelfth International Conference on Learning Representations,
  Cited by: [§2.1](https://arxiv.org/html/2505.05029v3#S2.SS1.p1.1 "2.1. Cooperation Problem ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Chuang et al. (2024)
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. Rogers
  Simulating opinion dynamics with networks of llm-based agents.
  In Findings of the Association for Computational Linguistics: NAACL 2024,
  pp. 3326–3346.
  Cited by: [§2.4](https://arxiv.org/html/2505.05029v3#S2.SS4.p1.1 "2.4. Social networks in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Conitzer and Oesterheld (2023)
  V. Conitzer and C. Oesterheld
  Foundations of cooperative ai.
  In AAAI,
  Vol. 37, pp. 15359–15367.
  Cited by: [§2.1](https://arxiv.org/html/2505.05029v3#S2.SS1.p1.1 "2.1. Cooperation Problem ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Dafoe et al. (2021)
  A. Dafoe, Y. Bachrach, G. Hadfield, E. Horvitz, K. Larson, and T. Graepel
  Cooperative ai: machines must learn to find common ground.
   Nature Publishing Group.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p1.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Diekmann et al. (2014)
  A. Diekmann, B. Jann, W. Przepiorka, and S. Wehrli
  Reputation formation and the evolution of cooperation in anonymous online markets.
  American sociological review 79 (1), pp. 65–85.
  Cited by: [§A.2](https://arxiv.org/html/2505.05029v3#A1.SS2.p2.1 "A.2. The Listener’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Dietz et al. (2020)
  T. Dietz, R. L. Shwom, and C. T. Whitley
  Climate change and society.
  Annual Review of Sociology 46 (1), pp. 135–158.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p1.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Du and Fu (2011)
  F. Du and F. Fu
  Partner selection shapes the strategic and topological evolution of cooperation: the power of reputation transitivity.
  Dynamic Games and Applications 1, pp. 354–369.
  Cited by: [§3.3.1](https://arxiv.org/html/2505.05029v3#S3.SS3.SSS1.p1.1 "3.3.1. Network Driven by Direct Interactions ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Foster (2004)
  E. K. Foster
  Research on gossip: taxonomy, methods, and future directions.
  Review of general psychology 8 (2), pp. 78–99.
  Cited by: [§A.1](https://arxiv.org/html/2505.05029v3#A1.SS1.p1.1 "A.1. The Gossiper’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [Appendix A](https://arxiv.org/html/2505.05029v3#A1.p1.1 "Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2.2](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS2.p1.1 "3.2.2. Reputation Driven by Indirect Gossip ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§4.2](https://arxiv.org/html/2505.05029v3#S4.SS2.SSS0.Px4.p1.1 "More finding in Scenario 2. ‣ 4.2. Emergent Phenomena from Three Scenarios ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§4.2](https://arxiv.org/html/2505.05029v3#S4.SS2.SSS0.Px4.p1.1.1 "More finding in Scenario 2. ‣ 4.2. Emergent Phenomena from Three Scenarios ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Fu et al. (2008)
  F. Fu, C. Hauert, M. A. Nowak, and L. Wang
  Reputation-based partner choice promotes cooperation in social networks.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 78 (2), pp. 026117.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- [19]
  K. Gandhi, D. Sadigh, and N. Goodman
  Strategic reasoning with language models.
  In NeurIPS 2023 Workshop,
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p2.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Gao et al. (2023)
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§2.4](https://arxiv.org/html/2505.05029v3#S2.SS4.p1.1 "2.4. Social networks in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Giardini et al. (2022)
  F. Giardini, D. Balliet, E. A. Power, S. Számadó, and K. Takács
  Four puzzles of reputation-based cooperation: content, process, honesty, and structure.
  Human Nature 33 (1), pp. 43–61.
  Cited by: [§A.2](https://arxiv.org/html/2505.05029v3#A1.SS2.p2.1 "A.2. The Listener’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§1](https://arxiv.org/html/2505.05029v3#S1.p4.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.1](https://arxiv.org/html/2505.05029v3#S3.SS1.p2.1 "3.1. Formalization: Networked Multi-Agent System and Reputation ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2.1](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS1.p1.1 "3.2.1. Reputation Driven by Direct Encounters ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2](https://arxiv.org/html/2505.05029v3#S3.SS2.p1.1 "3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Giardini and Conte (2012)
  F. Giardini and R. Conte
  Gossip for social control in natural and artificial societies.
  Simulation 88 (1), pp. 18–32.
  Cited by: [Appendix A](https://arxiv.org/html/2505.05029v3#A1.p1.1 "Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2.2](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS2.p1.1 "3.2.2. Reputation Driven by Indirect Gossip ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Granatyr et al. (2015)
  J. Granatyr, V. Botelho, O. R. Lessing, E. E. Scalabrin, J. Barthès, and F. Enembreck
  Trust and reputation models for multiagent systems.
  ACM Computing Surveys (CSUR) 48 (2), pp. 1–42.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p4.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2.1](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS1.p1.1 "3.2.1. Reputation Driven by Direct Encounters ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Gross and De Dreu (2019)
  J. Gross and C. K. De Dreu
  The rise and fall of cooperation through reputation and group polarization.
  Nature communications 10 (1), pp. 776.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Hardin (1998)
  G. Hardin
  Extensions of" the tragedy of the commons".
  Science 280 (5364), pp. 682–683.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p1.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Hess and Hagen (2006)
  N. H. Hess and E. H. Hagen
  Sex differences in indirect aggression: psychological evidence from young adults.
  Evolution and human behavior 27 (3), pp. 231–245.
  Cited by: [§A.2](https://arxiv.org/html/2505.05029v3#A1.SS2.p2.1 "A.2. The Listener’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Hong et al. (2024)
  S. Hong M. Zhuge et al.
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In ICLR,
  Cited by: [§2.1](https://arxiv.org/html/2505.05029v3#S2.SS1.p1.1 "2.1. Cooperation Problem ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Lange et al. (2014)
  P. A. M. Lange, B. Rockenbach, and T. Yamagishi
  Reward and punishment in social dilemmas.
   Oxford University Press.
  Cited by: [§3.2.2](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS2.p1.1 "3.2.2. Reputation Driven by Indirect Gossip ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Mao et al. (2023)
  S. Mao, Y. Cai, Y. Xia, W. Wu, X. Wang, F. Wang, T. Ge, and F. Wei
  ALYMPICS: llm agents meet game theory–exploring strategic decision-making with ai agents.
  arXiv preprint arXiv:2311.03220.
  Cited by: [§2.2](https://arxiv.org/html/2505.05029v3#S2.SS2.p1.1 "2.2. Cooperation Problem in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- McAndrew (2014)
  F. T. McAndrew
  The “sword of a woman”: gossip and female aggression.
  Aggression and violent behavior 19 (3), pp. 196–199.
  Cited by: [§A.2](https://arxiv.org/html/2505.05029v3#A1.SS2.p2.1 "A.2. The Listener’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Mou et al. (2024)
  X. Mou, X. Ding, Q. He, L. Wang, J. Liang, X. Zhang, L. Sun, J. Lin, J. Zhou, X. Huang, et al.
  From individual to society: a survey on social simulation driven by large language model-based agents.
  arXiv preprint arXiv:2412.03563.
  Cited by: [§4.1](https://arxiv.org/html/2505.05029v3#S4.SS1.SSS0.Px2.p1.1 "Controlled Settings ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Mozikov et al. (2024)
  M. Mozikov, N. Severin, V. Bodishtianu, M. Glushanina, I. Nasonov, D. Orekhov, P. Vladislav, I. Makovetskiy, M. Baklashkin, V. Lavrentyev, et al.
  EAI: emotional decision-making of llms in strategic games and ethical dilemmas.
  Advances in Neural Information Processing Systems 37, pp. 53969–54002.
  Cited by: [§2.2](https://arxiv.org/html/2505.05029v3#S2.SS2.p1.1 "2.2. Cooperation Problem in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Mu et al. (2024)
  C. Mu, H. Guo, Y. Chen, C. Shen, D. Hu, S. Hu, and Z. Wang
  Multi-agent, human–agent and beyond: a survey on cooperation in social dilemmas.
  Neurocomputing 610, pp. 128514.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Mui et al. (2002)
  L. Mui, M. Mohtashemi, and A. Halberstadt
  Notions of reputation in multi-agents systems: a review.
  In Proceedings of the first international joint conference on Autonomous agents and multiagent systems: part 1,
  pp. 280–287.
  Cited by: [§3.2](https://arxiv.org/html/2505.05029v3#S3.SS2.p1.1 "3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Nowak and May (1992)
  M. A. Nowak and R. M. May
  Evolutionary games and spatial chaos.
  Nature 359 (6398), pp. 826–829.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Nowak and Sigmund (2005)
  M. A. Nowak and K. Sigmund
  Evolution of indirect reciprocity.
  Nature 437 (7063), pp. 1291–1298.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Nowak (2006)
  M. A. Nowak
  Five rules for the evolution of cooperation.
  Science 314 (5805), pp. 1560–1563.
  Cited by: [§2.1](https://arxiv.org/html/2505.05029v3#S2.SS1.p1.1 "2.1. Cooperation Problem ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Orzan et al. (2024)
  N. Orzan, E. Acar, D. Grossi, and R. Radulescu
  Emergent cooperation under uncertain incentive alignment.
  In AAMAS 2024,
  pp. 1521–1530.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p1.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Ostrom (2008)
  E. Ostrom
  Tragedy of the commons.
  The new palgrave dictionary of economics 2, pp. 1–4.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p1.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§3.1](https://arxiv.org/html/2505.05029v3#S3.SS1.p3.1 "3.1. Formalization: Networked Multi-Agent System and Reputation ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Piatti et al. (2024)
  G. Piatti, Z. Jin, M. Kleiman-Weiner, B. Schölkopf, M. Sachan, and R. Mihalcea
  Cooperate or collapse: emergence of sustainability behaviors in a society of llm agents.
  arXiv preprint arXiv:2404.16698.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p1.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§1](https://arxiv.org/html/2505.05029v3#S1.p2.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§2.2](https://arxiv.org/html/2505.05029v3#S2.SS2.p1.1 "2.2. Cooperation Problem in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Rand et al. (2011)
  D. G. Rand, S. Arbesman, and N. A. Christakis
  Dynamic social networks promote cooperation in experiments with humans.
  PNAS 108 (48), pp. 19193–19198.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Ren et al. (2024)
  S. Ren, Z. Cui, R. Song, Z. Wang, and S. Hu
  Emergence of social norms in generative agent societies: principles and architecture.
  In Proceedings of the 33rd International Joint Conference on Artificial Intelligence (IJCAI),
  Cited by: [§2.2](https://arxiv.org/html/2505.05029v3#S2.SS2.p1.1 "2.2. Cooperation Problem in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Sabater i Mir (2004)
  J. Sabater i Mir
  Trust and reputation for agent societies.
   Universitat Autònoma de Barcelona,.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p4.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2.1](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS1.p1.1 "3.2.1. Reputation Driven by Direct Encounters ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Sabater and Sierra (2001)
  J. Sabater and C. Sierra
  REGRET: reputation in gregarious societies.
  In Proceedings of the fifth international conference on Autonomous agents,
  pp. 194–195.
  Cited by: [§3.1](https://arxiv.org/html/2505.05029v3#S3.SS1.p2.1 "3.1. Formalization: Networked Multi-Agent System and Reputation ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Santos et al. (2019)
  F. P. Santos, S. F. Mascarenhas, F. C. Santos, F. Correia, S. Gomes, and A. Paiva
  Outcome-based partner selection in collective risk dilemmas..
  In AAMAS,
  pp. 1556–1564.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Sperber and Baumard (2012)
  D. Sperber and N. Baumard
  Moral reputation: an evolutionary and cognitive perspective.
  Mind & Language 27 (5), pp. 495–518.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Suzuki and Akiyama (2005)
  S. Suzuki and E. Akiyama
  Reputation and the evolution of cooperation in sizable groups.
  Proceedings of the Royal Society B: Biological Sciences 272 (1570), pp. 1373–1377.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Takács et al. (2021)
  K. Takács, J. Gross, M. Testori, S. Letina, A. R. Kenny, E. A. Power, and R. P. Wittek
  Networks of reliable reputations and cooperation: a review.
  Philosophical Transactions of the Royal Society B 376 (1838), pp. 20200297.
  Cited by: [§2.4](https://arxiv.org/html/2505.05029v3#S2.SS4.p1.1 "2.4. Social networks in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.1](https://arxiv.org/html/2505.05029v3#S3.SS1.p2.1 "3.1. Formalization: Networked Multi-Agent System and Reputation ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.3.1](https://arxiv.org/html/2505.05029v3#S3.SS3.SSS1.p1.1 "3.3.1. Network Driven by Direct Interactions ‣ 3.3. Network Dynamics at the System Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Wang et al. (2012)
  J. Wang, S. Suri, and D. J. Watts
  Cooperation and assortativity with dynamic partner updating.
  Proceedings of the National Academy of Sciences 109 (36), pp. 14363–14368.
  Cited by: [§2.3](https://arxiv.org/html/2505.05029v3#S2.SS3.p1.1 "2.3. Reputation for Traditional Multi-agent Systems ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Wang et al. (2024)
  Z. Wang, R. Song, C. Shen, S. Yin, Z. Song, B. Battu, L. Shi, D. Jia, T. Rahwan, and S. Hu
  Large language models overcome the machine penalty when acting fairly but not when acting selfishly or altruistically.
  arXiv preprint arXiv:2410.03724.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p2.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Williams et al. (2023)
  R. Williams, N. Hosseinichimeh, A. Majumdar, and N. Ghaffarzadegan
  Epidemic modeling with generative agents.
  arXiv preprint arXiv:2307.04986.
  Cited by: [§2.4](https://arxiv.org/html/2505.05029v3#S2.SS4.p1.1 "2.4. Social networks in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Wu et al. (2016a)
  J. Wu, D. Balliet, and P. A. Van Lange
  Gossip versus punishment: the efficiency of reputation to promote and maintain cooperation.
  Scientific reports 6 (1), pp. 23919.
  Cited by: [§3.2.2](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS2.p1.1 "3.2.2. Reputation Driven by Indirect Gossip ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Wu et al. (2016b)
  J. Wu, D. Balliet, and P. A. Van Lange
  Reputation management: why and how gossip enhances generosity.
  Evolution and Human Behavior 37 (3), pp. 193–201.
  Cited by: [§A.1](https://arxiv.org/html/2505.05029v3#A1.SS1.p1.1 "A.1. The Gossiper’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2.2](https://arxiv.org/html/2505.05029v3#S3.SS2.SSS2.p1.1 "3.2.2. Reputation Driven by Indirect Gossip ‣ 3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§3.2](https://arxiv.org/html/2505.05029v3#S3.SS2.p1.1 "3.2. Reputation Dynamics at the Agent Level ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Wu et al. (2016c)
  J. Wu, D. Balliet, and P. A. Van Lange
  Reputation, gossip, and human cooperation.
  Social and Personality Psychology Compass 10 (6), pp. 350–364.
  Cited by: [§A.1](https://arxiv.org/html/2505.05029v3#A1.SS1.p1.1 "A.1. The Gossiper’s Perspective ‣ Appendix A More Details of Indirect Gossip ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Xi et al. (2025)
  Z. Xi, W. Chen, X. Guo, W. He, Y. Ding, B. Hong, M. Zhang, J. Wang, S. Jin, E. Zhou, et al.
  The rise and potential of large language model based agents: a survey.
  Science China Information Sciences 68 (2), pp. 121101.
  Cited by: [§4.1](https://arxiv.org/html/2505.05029v3#S4.SS1.SSS0.Px2.p1.1 "Controlled Settings ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Xu et al. (2019)
  J. Xu, J. Garcia, and T. Handfield
  Cooperation with bottom-up reputation dynamics.
  In Proc. 18th Int’l Conf. on AAMAS,
  pp. 269–276.
  Cited by: [§1](https://arxiv.org/html/2505.05029v3#S1.p3.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Yang et al. (2024)
  Z. Yang, Z. Zhang, Z. Zheng, Y. Jiang, Z. Gan, Z. Wang, Z. Ling, et al.
  OASIS: open agents social interaction simulations on one million agents.
  arXiv preprint arXiv:2411.11581.
  Cited by: [§2.4](https://arxiv.org/html/2505.05029v3#S2.SS4.p1.1 "2.4. Social networks in LLM-based MASs ‣ 2. Background ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Yoeli et al. (2013)
  E. Yoeli, M. Hoffman, D. G. Rand, and M. A. Nowak
  Powering up with indirect reciprocity in a large-scale field experiment.
  PNAS 110, pp. 10424–10429.
  Cited by: [item 1](https://arxiv.org/html/2505.05029v3#S1.I1.i1.p1.1 "In 1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§1](https://arxiv.org/html/2505.05029v3#S1.p5.1 "1. Introduction ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"),
  [§4.1](https://arxiv.org/html/2505.05029v3#S4.SS1.SSS0.Px4.p1.1 "Scenario 2: Voluntary Participation ‣ 4.1. Experimental Settings ‣ 4. Experiment ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").
- Zhang et al. (2024)
  C. Zhang, K. Yang, S. Hu, Z. Wang, G. Li, Y. Sun, C. Zhang, Z. Zhang, A. Liu, S. Zhu, et al.
  ProAgent: building proactive cooperative agents with large language models.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 38, pp. 17591–17599.
  Cited by: [§3.1](https://arxiv.org/html/2505.05029v3#S3.SS1.p3.1 "3.1. Formalization: Networked Multi-Agent System and Reputation ‣ 3. RepuNet: a Reputation System for LLM-based Agent Societies ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").

## Appendix A More Details of Indirect Gossip

Gossip involves the exchange of positive or negative information about absent individuals, making it an effective way to shape and spread reputations ([Foster, 2004](https://arxiv.org/html/2505.05029v3#bib.bib7); [Giardini and Conte, 2012](https://arxiv.org/html/2505.05029v3#bib.bib39)). Since gossip involves two or more agents in a conversation, we consider it from two perspectives: the gossiper’s and the receiver’s.

### A.1. The Gossiper’s Perspective

In human societies, people have a strong tendency to gossip about others when they are (dis)satisfied with interactions, using it to influence others’ reputations ([Foster, 2004](https://arxiv.org/html/2505.05029v3#bib.bib7); [Wu et al., 2016b](https://arxiv.org/html/2505.05029v3#bib.bib8)). While a good reputation is difficult to build, it can be easily damaged ([Wu et al., 2016c](https://arxiv.org/html/2505.05029v3#bib.bib40)). Inspired by these principles, we instruct each agent to evaluate its satisfaction with others’ behavior after each interaction. This evaluation of satisfaction is based on the agent’s own values and preferences, described in its agent descriptions $\mathcal{D}$. Let $m$ represent the retrieved memory of interactions with a target (such as a conversation or observation). The evaluating agent decides whether to gossip about the target’s behavior, which can be represented by the LLM-based operation $y\_{will}\in\{\text{``Y'', ``N''}\}\leftarrow GossipWill(m,\mathcal{D})$. Agents who tend to gossip are referred to as gossipers. Once a gossiper is inclined to gossip (i.e., $y\_{will}=\text{``Y''}$), it selects a listener based on its RepuNet database $\phi$, which records relationships and reputations shaped through prior interactions. This process is represented by the LLM-based operation $a\_{l}\leftarrow GossipChoice(\phi)$, where $a\_{l}$ denotes the selected listener.

### A.2. The Listener’s Perspective

Gossip typically involves three agents: the gossiper, the gossiped-about target, and the listener. Therefore, we consider that when being involved in a gossip, a LLM-based agent (a listener) will identify the relationship and summarize information the gossiper intends to convey (or gossip information for short). Let $\mathcal{G}\_{g\rightarrow l}$ represent a gossip between a gossiper and a listener. This LLM-based process can be represented as $\mathcal{I}\_{g\rightarrow l}\leftarrow GossipIdentify(\mathcal{G}\_{g\rightarrow l})$, where $\mathcal{I}\_{g\rightarrow l}$ is the summarized gossip information in natural language, such as “David raised concerns about Elena, her inconsistent performance led to a loss of trust…”

Inspired by human societies, people may exaggerate or misrepresent information to enhance their own reputation or harm others, thus it is essential for the listener to evaluate the credibility of summarized gossip information ([Buss and Dedden, 1990](https://arxiv.org/html/2505.05029v3#bib.bib9); [Diekmann et al., 2014](https://arxiv.org/html/2505.05029v3#bib.bib41); [Hess and Hagen, 2006](https://arxiv.org/html/2505.05029v3#bib.bib10); [McAndrew, 2014](https://arxiv.org/html/2505.05029v3#bib.bib42)). Specifically, we prompt the listener to evaluate the credibility of this summarized gossip on a 5-point Likert scale, from “very uncredible” to “very credible”. Inspired by Giardini et al. ([Giardini et al., 2022](https://arxiv.org/html/2505.05029v3#bib.bib11)), the credibility of the gossip information is evaluated from two perspectives: (i) from an agent perspective, the credibility depends on the gossiper’s reputation, with a higher reputation in the listener’s perception indicating greater reliability; and (ii) from a community perspective, the credibility depends on listener’s overall trust in prior gossip within the community, where a higher proportion of reliable gossip enhances the listener’s trust in information shared through gossip. Let $r\_{g}$ denote the gossiper’s reputation, and $P(\mathcal{\bar{I}})$ denote the proportion of prior gossip information rated “(very) uncredible” in the listener’s memory. We represent this LLM-based operation by $\mathcal{C}(\mathcal{I}\_{g\rightarrow l})\leftarrow GossipEvaluate(\mathcal{I}\_{g\rightarrow l},r\_{g},P(\mathcal{\bar{I}}))$. After evaluating the credibility, the listener stores the gossip information in its memory as a quadruple, $\theta=<a\_{tar},a\_{g},\mathcal{I}\_{g\rightarrow l},\mathcal{C}(\mathcal{I}\_{g\rightarrow l})>$. Here, $a\_{tar}$ and $a\_{g}$ refer to the basic information of the gossiped target and the gossiper, respectively; $\mathcal{I}\_{g\rightarrow l}$ is the summarized gossip information, and $\mathcal{C}(\mathcal{I}\_{g\rightarrow l})$ denotes its credibility rating. The prompts related to the gossip process are outlined from Figure [23](https://arxiv.org/html/2505.05029v3#A2.F23 "Figure 23 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") to Figure [23](https://arxiv.org/html/2505.05029v3#A2.F23 "Figure 23 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs").

## Appendix B More Details of Agent Descriptions and Prompts in RepuNet

In our setup, there were 20 generative agents. Figure [5](https://arxiv.org/html/2505.05029v3#A2.F5 "Figure 5 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") to [10](https://arxiv.org/html/2505.05029v3#A2.F10 "Figure 10 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") provide detailed agent descriptions for three distinct scenarios. Besides, we sketch the prompts for the LLM-based operations of RepuNet from Figure [13](https://arxiv.org/html/2505.05029v3#A2.F13 "Figure 13 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") to Figure [19](https://arxiv.org/html/2505.05029v3#A2.F19 "Figure 19 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"). The full prompts for all three scenarios are available in the Github repository at the following link: https://github.com/RGB-0000FF/RepuNet. Table [24](https://arxiv.org/html/2505.05029v3#A2.F24 "Figure 24 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") serves as a reference guide for locating the specific prompts and Python files associated with each RepuNet component.

![Refer to caption](https://arxiv.org/html/2505.05029v3/Agent_description_S1_pd_1.png)


Figure 5. Agent descriptions of Agent 1 to 10 in Scenario 1.


Figure 6. Agent descriptions of Agent 11 to 20 in Scenario 1.


Figure 7. Agent descriptions of Agent 1 to 10 in Scenario 2.


Figure 8. Agent descriptions of Agent 11 to 20 in Scenario 2.


Figure 9. Agent descriptions of Agent 1 to 10 in Scenario 3.


Figure 10. Agent descriptions of Agent 11 to 20 in Scenario 3.


![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_1.png)

Figure 11. Prompt for $r\_{i\rightarrow j}(t+1)\leftarrow\texttt{ShapeRepuPeer}(m\_{ij}(t+1),\text{if}\ r\_{i\rightarrow j}(t)=\phi)$: Reputation driven by direct encounters at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_2.png)

Figure 12. Prompt for $r\_{i\rightarrow j}(t+1)\leftarrow\texttt{ShapeRepuPeer}(m\_{ij}(t+1),r\_{i\rightarrow j}(t),\text{if}\ r\_{i\rightarrow j}(t)\neq\phi)$: Reputation driven by direct encounters at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_3.png)

Figure 13. Prompt for $r\_{i}(t+1)\leftarrow\texttt{ShapeRepuSelf}(\mathcal{D}\_{i},m\_{ix}(t+1),\text{if}\ r\_{i}(t)=\phi)$: Reputation driven by direct encounters at the agent level.


![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_4.png)

Figure 14. Prompt for $r\_{i}(t+1)\leftarrow\texttt{ShapeRepuSelf}(\mathcal{D}\_{i},m\_{ix}(t+1),r\_{i}(t),\text{if}\ r\_{i}(t)\neq\phi)$: Reputation driven by direct encounters at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_5.png)

Figure 15. Prompt for $r\_{l\rightarrow y}(t+1)\leftarrow\texttt{ShapeRepuGossip}(\theta\_{y}(t+1),\text{if}\ r\_{l\rightarrow y}(t)=\phi)$: Reputation driven by indirect gossip at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_6.png)

Figure 16. Prompt for $r\_{l\rightarrow y}(t+1)\leftarrow\texttt{ShapeRepuGossip}(\theta\_{y}(t+1),\text{if}\ r\_{l\rightarrow y}(t)\neq\phi)$: Reputation driven by indirect gossip at the agent level.


![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_7.png)

Figure 17. Prompt for $w\_{i\rightarrow j}(t)\in\{\text{``Y'',``N''}\}\leftarrow\texttt{InteractEdgeShape}(\mathcal{D}\_{i},m\_{ij}(t),\text{if}\ r\_{i\rightarrow j}(t)=\phi)$: Network driven by direct encounters at the system level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_8.png)

Figure 18. Prompt for $w\_{i\rightarrow j}(t)\in\{\text{``Y'',``N''}\}\leftarrow\texttt{InteractEdgeShape}(\mathcal{D}\_{i},m\_{ij}(t),r\_{i\rightarrow j}(t))$: Network driven by direct encounters at the system level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_9.png)

Figure 19. Prompt for $w\_{l\rightarrow y}(t)\in\{\text{``Y'',``N''}\}\leftarrow\texttt{GossipEdgeShape}(\mathcal{D}\_{l},\theta\_{y}(t),r\_{l\rightarrow y}(t))$: Network driven by indirect gossip at the system level.


![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_1.png)

Figure 20. Prompt for $y\_{will}\in\{\text{``Y'',``N''}\}\leftarrow\texttt{GossipWill}(m,\mathcal{D})$: Gossip from the gossiper’s perspective

![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_2.png)

Figure 21. Prompt for $a\_{l}\leftarrow\texttt{GossipChoice}(\phi)$: Gossip from the gossiper’s perspective.

![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_3.png)

Figure 22. Prompt for $\mathcal{I}\_{g\rightarrow l}\leftarrow\texttt{GossipIdentify}(\mathcal{G}\_{g\rightarrow l})$: Gossip from the listener’s perspective.

![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_4.png)

Figure 23. Prompt for $\mathcal{C}(\mathcal{I}\_{g\rightarrow l})\leftarrow\texttt{GossipEvaluate}(\mathcal{I}\_{g\rightarrow l},r\_{g},P(\bar{I}))$: Gossip from the listener’s perspective.

![Refer to caption](https://arxiv.org/html/2505.05029v3/appendix_table_fig.png)


Figure 24. Reference guide for locating the specific prompts and Python files associated with each RepuNet component.

## Appendix C Extension to other LLMs

To verify that our findings are not specific to a single model, we additionally ran Scenario 1 with three LLMs (GPT-4o mini, Qwen3 plus, and Gemini2.5 Flash). As shown in the Table [2](https://arxiv.org/html/2505.05029v3#A3.T2 "Table 2 ‣ Appendix C Extension to other LLMs ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"), RepuNet consistently achieves the highest cooperation rate across all three. This indicates that RepuNet’s effectiveness extends to other LLM-based agents and robustly prevents cooperation collapse.

Table 2. Comparison of cooperation rates confirms RepuNet’s effectiveness across all three LLMs.

|  |  |  |  |
| --- | --- | --- | --- |
| Treatment | GPT-4o mini | Qwen3 plus | Gemini2.5 Flash |
| with RepuNet | 0.93 | 0.95 | 0.95 |
| w/o RepuNet | 0.09 | 0.10 | 0.25 |
