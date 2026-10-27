---
id: arxiv-2510-19299-text
type: material
title: 'Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties'
work_id: arxiv-2510-19299
source_url: https://arxiv.org/html/2510.19299v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 8f4ca6520a758571ab8c864ea91fb16f9e581a586998eab5ea0d4f3ab33db9bb
---

> Источник: [https://arxiv.org/html/2510.19299v2](https://arxiv.org/html/2510.19299v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

\workshoptitle

Scaling Environments for Agents (SEA)

# Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties

Philipp J. Schneider
Affiliation: EPFL
Affiliation: Lausanne, Switzerland
Email: [philipp.schneider@epfl.ch](mailto:)
  
Lin Tian
Affiliation: University of Technology Sydney
Affiliation: Sydney, Australia
Email: [lin.tian-3@uts.edu.au](mailto:)
  
Marian-Andrei Rizoiu
Affiliation: University of Technology Sydney
Affiliation: Sydney, Australia
Email: [marian-andrei.rizoiu@uts.edu.au](mailto:)

###### Abstract

Can large language model (LLM) agents reproduce the complex social dynamics that characterize human online behavior—shaped by homophily, reciprocity, and social validation—and what memory and learning mechanisms enable such dynamics to emerge? We present a multi-agent LLM simulation framework in which agents repeatedly interact, evaluate one another, and adapt their behavior through in-context learning accelerated by a coaching signal. To model human social behavior, we design behavioral reward functions that capture core drivers of online engagement, including social interaction, information seeking, self-presentation, coordination, and emotional support. These rewards align agent objectives with empirically observed user motivations, enabling the study of how network structures and group formations emerge from individual decision-making. Our experiments show that coached LLM agents develop stable interaction patterns and form emergent social ties, yielding network structures that mirror properties of real online communities. By combining behavioral rewards with in-context adaptation, our framework establishes a principled testbed for investigating collective dynamics in LLM populations and reveals how artificial agents may approximate or diverge from human-like social behavior.

## 1 Introduction

Have you ever been convinced by an AI? A recent study on Reddit ([O’Grady, 2025](https://arxiv.org/html/2510.19299v2#bib.bib2))—where AI-generated content was used to test how effectively agents could persuade users—sparked public backlash. Conducted without users’ consent, the experiment was widely condemned for crossing ethical and legal boundaries. But why would anyone pursue such a study? And why does the scientific community remain deeply invested in modeling human behavior online?
  
The short answer is that social media has permeated nearly every aspect of society. It shapes how information flows, blurs the line between public and private spheres, and serves simultaneously as a news source, marketplace, and social infrastructure. This raises a fundamental question: can we, without compromising individual privacy, construct a digital twin that authentically captures the behavior of real social media users?
  
While the linguistic, psychological, and cognitive capabilities of individual large language model (LLM) agents have been demonstrated ([Binz and Schulz, 2023](https://arxiv.org/html/2510.19299v2#bib.bib4); [Mei et al., 2024](https://arxiv.org/html/2510.19299v2#bib.bib3); [Salvi et al., 2025](https://arxiv.org/html/2510.19299v2#bib.bib7)), their collective behavior in networked environments remains far less understood. The implications of building such digital twins are far-reaching ([Bail, 2024](https://arxiv.org/html/2510.19299v2#bib.bib9)). Policymakers could use them to test the effects of moderation strategies—such as content removal ([Schneider and Rizoiu, 2023](https://arxiv.org/html/2510.19299v2#bib.bib5))—before deploying them at scale. Researchers could simulate the spread of opinions, the formation of online communities, or the contagion of consumer behavior. Security analysts could explore how to defend against manipulation or detect coordinated influence operations ([Alizadeh et al., 2020](https://arxiv.org/html/2510.19299v2#bib.bib6)).

In this paper, we introduce a framework for multi-agent LLM conversations designed to simulate both private and public user discussions. By equipping agents with reward-based tasks, we move beyond the recently demonstrated agent-based modeling (ABM) capabilities of LLMs and leverage their cognitive abilities to study the emergence of social ties within dynamic simulations.

### 1.1 Unique Challenges

Although prior work has explored multi-agent LLM frameworks, simulating social media conversations raises three distinct challenges:

Agentic Personas. LLMs are trained to minimize prediction error in text generation, but this does not guarantee realistic user personas. Poorly specified personas often exhibit similar linguistic patterns, failing to reflect the diversity of real online users. Authentic simulations require agents that vary in values, norms, and cognitive styles, supported by memory structures that track interactions and evolve over time.

Learning Mechanisms. Games and other structured environments provide explicit rewards that guide agents toward effective strategies. Social media, by contrast, involves open-ended exchanges where memory must approximate the human ability to retain recent interactions while integrating longer conversational histories. Because engagement spans a spectrum—from passive awareness (viewing) to active participation (commenting, sharing)—agents need memory architectures that enable adaptive learning across contexts.

Social Topology. Users with shared interests tend to cluster, reinforcing in-group favoritism and out-group aversion that drive polarization and echo chambers. Structural features such as follower networks shape the spread of information. Yet a central open question remains: what network structures emerge when LLM agents interact at scale?

### 1.2 Our Contributions

To address these challenges, we introduce a multi-agent LLM platform that advances the modeling of online social dynamics through three core contributions:

Conversation Room. We build an interactive environment that integrates both public and private communication channels. This design enables agents to deploy distinct strategies across contexts and allows systematic analysis of how channel choice shapes conversational dynamics.

Reward Structures. We formalize reward functions that translate empirically grounded human motivations—including self-presentation, social interaction, coordination, and emotional support—into agent objectives. This framework establishes a principled bridge between behavioral theory and multi-agent LLM learning.

Tie Formation. We design mechanisms that allow social ties to emerge endogenously from conversational interactions, without relying on pre-defined network structures. This enables systematic study of how support, alignment, and homophily drive the formation of group structures.

## 2 Preliminaries

Multi-agent LLMs. Early work established that LLM agents can display human-like routines when equipped with memory and cognitive mechanisms. Park et al. [Park et al. (2023)](https://arxiv.org/html/2510.19299v2#bib.bib1) introduced the *observation–planning–reflection* cycle, showing that agents embedded in interactive environments develop coherent daily behaviors. Subsequent studies demonstrated that LLM populations can approximate human-level attitudes and sociodemographic effects, reproducing patterns found in surveys and experiments [Aher et al. (2023)](https://arxiv.org/html/2510.19299v2#bib.bib27); [Argyle et al. (2023)](https://arxiv.org/html/2510.19299v2#bib.bib28). Beyond reproducing individual or population-level behavior, frameworks such as CAMEL [Li et al. (2023)](https://arxiv.org/html/2510.19299v2#bib.bib11) and orchestration stacks like LangChain and AutoGen [Wu et al. (2024)](https://arxiv.org/html/2510.19299v2#bib.bib41) enable coordination, specialization, and standardized multi-agent dialogues. Recent surveys synthesize these design patterns and emphasize the need for systematic evaluation against human baselines [Guo et al. (2024)](https://arxiv.org/html/2510.19299v2#bib.bib40); [Gao et al. (2024)](https://arxiv.org/html/2510.19299v2#bib.bib39).

Personas and diversity.
A central challenge in simulation is ensuring credible heterogeneity across agents. Simple prompting often yields homogeneous responses, whereas personality induction methods, such as Big Five personality prompting, can generate stable stylistic variation [Jiang et al. (2023)](https://arxiv.org/html/2510.19299v2#bib.bib10). The PERSONA benchmark extends this approach, offering pluralistic alignment across diverse profiles [Castricato et al. (2025)](https://arxiv.org/html/2510.19299v2#bib.bib8). At the same time, persona prompts may inadvertently surface reasoning biases [Gupta et al. (2024)](https://arxiv.org/html/2510.19299v2#bib.bib42), underscoring the importance of careful evaluation. More recent approaches move beyond prompting to train agents in simulated societies, allowing them to internalize social norms and polarization dynamics through interaction [Liu et al. (2024)](https://arxiv.org/html/2510.19299v2#bib.bib38). Together, these studies highlight both the promise and pitfalls of persona diversification for multi-agent LLM simulations.

From interactions to social structure.
A key question is whether agent collectives reproduce network-level regularities. Emerging studies have examined LLM-generated networks, link formation, and paradoxes of visibility such as the friendship paradox [Chang et al. (2025)](https://arxiv.org/html/2510.19299v2#bib.bib18); [Orlando et al. (2025)](https://arxiv.org/html/2510.19299v2#bib.bib19). These experiments connect directly to canonical findings in human networks, including assortative mixing [Newman (2002)](https://arxiv.org/html/2510.19299v2#bib.bib22), modular community structure [Fortunato (2010)](https://arxiv.org/html/2510.19299v2#bib.bib23), and diffusion dynamics such as emotional contagion, misinformation spread, and echo chambers [Kramer et al. (2014)](https://arxiv.org/html/2510.19299v2#bib.bib20); [Vosoughi et al. (2018)](https://arxiv.org/html/2510.19299v2#bib.bib21); [Cinelli et al. (2021)](https://arxiv.org/html/2510.19299v2#bib.bib24). The ability of LLMs to produce persuasive or deceptive content further raises the stakes for safety-aware evaluation [Zhou et al. (2023)](https://arxiv.org/html/2510.19299v2#bib.bib25).

Our focus.
Building on these streams of research, our framework centers on sequential, socially motivated behavior—spanning interaction, information seeking, self-presentation, coordination, and emotional support—operationalized through rewards, in-context coaching, and memory. We examine how such behavior gives rise to social ties, which form through micro-level signals (approval, reciprocity, latency) and aggregate into macro-level network structures (clustering, modularity, tie persistence). By allowing ties to emerge endogenously, without reliance on a fixed graph, we provide a testbed for studying phenomena such as homophily, community formation, and echo chambers.

## 3 Methodology

Figure [1](https://arxiv.org/html/2510.19299v2#S3.F1 "Figure 1 ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties") provides an overview of our multi-agent LLM platform for simulating social media conversations. The framework is organized into two main components: persona creation (A) and the social media simulation process (B). In the sections that follow, we describe how agents are initialized, outline the progression of the simulation, present the core of our learning paradigm—the task-specific reward structures of individual agents—and demonstrate how network structures emerge.

Figure 1: Multi-agent LLM social media conversation framework.

### 3.1 Persona Creation

Building agent personas requires the design of psychologically grounded and behaviorally coherent profiles. To avoid randomly sampling attributes from a population of observed users, we begin by instantiating a *planner* agent. This agent orchestrates the creation of inherited persona data, drawing on corpora extracted from real-world online discussions on a specific topic. With the growing prevalence of platforms where users remain largely anonymous, many features commonly leveraged in frameworks such as [Castricato et al. (2025)](https://arxiv.org/html/2510.19299v2#bib.bib8)—including age, sex, race, or education—are no longer observable, even though people in real interactions might infer them from user profiles. Instead, we focus on features that can be reliably inferred from the content itself: *role*, *persona description*, *topic stance*, and *communication style*. These attributes are directly grounded in the observed communications within the selected dataset.
  
Building on these content-based inferences, we construct agentic personas through a three-layer structure detailed below:

Personality. The first layer captures personality features derived from text data. We draw on the Big Five traits and their cross-cultural stability ([Digman, 1990](https://arxiv.org/html/2510.19299v2#bib.bib13); [McCrae and Costa Jr, 1997](https://arxiv.org/html/2510.19299v2#bib.bib14)), complemented by more granular facets (e.g., sociability as an Extraversion facet; stubbornness as an Agreeableness facet) and constructs beyond the Five (e.g., risk preference; interpersonal openness). High Extraversion is reflected in linguistic markers such as frequent emoji use and elevated conversational activity, whereas low Agreeableness is associated with increased negation and critical language. To assess these dimensions, we administer the Mini-IPIP, a concise Big Five inventory ([Donnellan et al., 2006](https://arxiv.org/html/2510.19299v2#bib.bib15); [Goldberg, 1992](https://arxiv.org/html/2510.19299v2#bib.bib16)).

Task. The reasons individuals engage on social media platforms are shaped by a range of underlying motives. Whiting and Williams ([Whiting and Williams, 2013](https://arxiv.org/html/2510.19299v2#bib.bib12)) draw on gratification theory to explain such engagement, identifying key drivers such as social interaction, information seeking, and entertainment. Assigning a persona a specific task based on these motivations results in markedly different behaviors that often align with the platform’s social engagement hierarchy—ranging from passive users (often referred to as lurkers) to highly active content creators. Related social media phenomena, such as agents exhibiting stubbornness and resistance to opinion change, can likewise be integrated into the simulation. For clarification of specific task formulations, we refer to Sec. [3.3](https://arxiv.org/html/2510.19299v2#S3.SS3 "3.3 Rewards for In-Context Learning ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"), where we define the reward structures.

Memory. The role of memory in agents is essential for capturing the dynamics of evolving discussions. We structure persona memory across three components: *conversation memory*, which records all prior interactions; *relationship memory*, which tracks information about other agents the persona has interacted with; and *opinion memory*, which abstracts the content of a conversation into a singular entry representing a stance or belief. Together, these form a lightweight analog to long-term human memory (e.g. [Zhong et al. (2024)](https://arxiv.org/html/2510.19299v2#bib.bib17)) and enable agents to exhibit path-dependent behavior in extended dialogues.

### 3.2 Conversation Simulation

Once the personas are initialized and their distinct personalities verified through a pre-survey assessment, we initiate the simulation. Each agent engages in a conversation on a predefined topic. At time $t=0$, we observe the social network $\mathcal{G}\_{0}=(\mathcal{V},\mathcal{E}\_{0},A\_{0})$ with $\mathcal{E}\_{0}=\emptyset$, indicating that there are no edges and no prior knowledge among users in $\mathcal{V}$; the adjacency matrix satisfies $[A\_{0}]\_{uv}=0$ for all $u,v\in\mathcal{V}$. Our objective is to characterize the network structure $\mathcal{G}\_{T}$ that emerges after the agents’ interactions. Messaging occurs through both direct (user-to-user) and public channels (visible to all agents), consistent with prior work showing that channel choice depends on privacy concerns, audience size, and message sensitivity. By incorporating both modes, we allow agents to adapt communication strategies to their emotional grounding and negotiation context.
  
In the opening round ($t=1$), agents are unaware of one another and are therefore required to make a public post (POST). In subsequent rounds, they may choose to post (POST), comment (COM), send a direct message (DM), or take no action (NOT). The per-round procedure unfolds in three phases.

Plan–Execute–Reflect. Each agent $u$ plans a pre-specified number of actions $N$ based on the batch of content from the previous round $\mathcal{B}\_{t-1}(u)$1, the reward $R\_{t-1}(u)$, and additional side information (see Appendix [A](https://arxiv.org/html/2510.19299v2#A1 "Appendix A Prompt Specifications ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties")). Actions are selected from $\mathcal{A}=\{\texttt{POST},\texttt{COM},\texttt{DM},\texttt{NOT}\}$. Planning is non-trivial: each action requires further specification (e.g., which post to comment on or which user to message) in addition to the strategic objective of maximizing future reward. As an optional step, we test whether a “coach” can simplify this process by providing a tip, enabling the agent to focus on constructing a well-structured response. Once a valid plan is constructed, the agent executes each action, generating content consistent with the action type (e.g., a DM reply is based on the specific message received in the prior round). Executed actions are stored in the agent’s memory, and this procedure is repeated for all agents.

Vote. Social validation is central to how individuals perceive support or friendship online. Accordingly, for all publicly visible content (POST, COM), we enable agents to cast votes by liking, disliking, or remaining neutral toward the content.

Reweighting. After each round, agents update tie strengths by reweighting their relationships. This process leverages multiple behavioral signals to inform decisions about whether and how to adjust connections.

### 3.3 Rewards for In-Context Learning

In the absence of explicit reward signals, agent behaviors tend to collapse toward purely greedy actions, failing to capture the diversity and goal-directed reactivity characteristic of real-world social systems. To address this limitation, we define reward functions that align agent learning with task objectives reflecting user motivations. Throughout, in each round $t$ every agent $u\in\mathcal{V}$ executes a batch $\mathcal{B}\_{t}(u)\subseteq\mathcal{B}\_{t}$ of exactly $N$ actions (i.e., $|\mathcal{B}\_{t}(u)|=N$ for all $u,t$), and $\mathcal{B}\_{t}=\bigcup\_{u\in\mathcal{V}}\mathcal{B}\_{t}(u)$.

Social Interaction Reward (SOC). Interacting with others and maintaining social ties are primary drivers of user engagement on social media platforms. To formalize this, we define the set of *direct-exchange actions* as $\mathcal{A}^{\texttt{DIR}}\subset\mathcal{A}$, $\mathcal{A}^{\texttt{DIR}}=\{\texttt{DM},\texttt{COM}\}$, corresponding to direct messages and comments. Let $\mathcal{B}\_{t}$ be the set of all actions taken by users in the network $\mathcal{V}$ in round $t$, and let $\mathcal{B}^{\texttt{DIR}}\_{t}=\{a\in\mathcal{B}\_{t}:\textsc{Type}(a)\in\mathcal{A}^{\texttt{DIR}}\}$
denote the subset of actions in round $t$ that involve direct exchanges.
We define the social interaction reward $R^{\texttt{SOC}}\_{t}:\mathcal{V}\to[0,1]$ as

|  |  |  |
| --- | --- | --- |
|  | $$R\_{t}^{\texttt{SOC}}(u)=(1-\beta^{\texttt{SOC}})\frac{I^{\texttt{sent}}\_{t}(u)}{\max\{1,N\}}\;+\;\beta^{\texttt{SOC}}\frac{I^{\texttt{rec}}\_{t}(u)}{\max\{1,|\mathcal{B}^{\texttt{DIR}}\_{t}|\}},$$ |  |

where

|  |  |  |
| --- | --- | --- |
|  | $$I^{\texttt{sent}}\_{t}(u)\coloneqq\sum\_{a\in\mathcal{B}^{\texttt{DIR}}\_{t}}\mathds{1}\{\textsc{Sndr}(a)=u\},\hskip 20.00003ptI^{\texttt{rec}}\_{t}(u)\coloneqq\sum\_{a\in\mathcal{B}^{\texttt{DIR}}\_{t}}\mathds{1}\{\textsc{Rcpt}(a)=u\},$$ |  |

and where $\textsc{Rcpt}(a)$ denotes the *effective recipient*: for COM actions it is the author of the targeted post, and for DM actions it is the explicit message recipient.

Here, $I^{\texttt{sent}}\_{t}(u)$ counts the number of direct exchanges *sent* by user $u$ in round $t$ (i.e., actions with sender $u$ and any recipient, denoted $u\to\cdot$), while $I^{\texttt{rec}}\_{t}(u)$ counts the number of direct exchanges *received* by user $u$. Both terms are normalized to ensure $R\_{t}^{\texttt{SOC}}(u)\in[0,1]$, and the hyperparameter $\beta^{\texttt{SOC}}$ trades off receiving and sending.

Information-Seeking Reward (INF).
Users on social platforms often seek to discover new topics while maintaining a diversity in information consumption. To formalize this behavior, we assume that each content item $c$ presented to user $u$ at time $t$ carries a single *topic label* $\tau(c)\in\{1,2,\dots,K^{(\tau)}\}$, where $K^{(\tau)}$ denotes the total number of topics available on the platform. Let $\mathcal{C}\_{t}(u)$ denote the set of items recommended to user $u$ in round $t$, and define the set of topic labels encountered by $u$ up to round $t-1$ as $\mathcal{H}\_{t-1}^{\tau}(u)\coloneqq\bigl\{\tau(c):c\in\mathcal{H}\_{t-1}(u)\bigr\}$.
We define *topic novelty* as the number of previously unseen topics in the current recommendation $\mathcal{T}\_{t}(u)=\bigl|\{\tau(c):c\in\mathcal{C}\_{t}(u)\}\setminus\mathcal{H}\_{t-1}^{\tau}(u)\bigr|$,
capturing the user’s opportunity to encounter new information. In addition, we measure *topic diversity* using the empirical entropy over the topic distribution in $\mathcal{C}\_{t}(u)$. Let $p\_{t,k}(u)\coloneqq\lvert\{\,c\in\mathcal{C}\_{t}(u):\tau(c)=k\,\}\rvert/{\lvert\mathcal{C}\_{t}(u)\rvert}$ for $k=1,\dots,K^{(\tau)}$ denote the empirical frequency of topic $k$. The corresponding Shannon entropy is $H\_{t}(u)\coloneqq-\sum\_{k=1}^{K^{(\tau)}}p\_{t,k}(u)\log p\_{t,k}(u)$, which satisfies $0\leq H\_{t}(u)\leq\log K^{(\tau)}$.
The per-round, per-user information-seeking reward is then defined as

|  |  |  |
| --- | --- | --- |
|  | $$R\_{t}^{\texttt{INF}}(u)=(1-\beta^{\texttt{INF}})\,\frac{\mathcal{T}\_{t}(u)}{K^{(\tau)}}+\beta^{\texttt{INF}}\,\frac{H\_{t}(u)}{\log K^{(\tau)}},$$ |  |

where $\beta^{\texttt{INF}}\in[0,1]$ controls the trade-off between novelty and diversity. If $|\mathcal{C}\_{t}(u)|=0$ or $K^{(\tau)}\leq 1$ (so that $\log K^{(\tau)}$ is not defined), we set $R\_{t}^{\texttt{INF}}(u)\coloneqq 0$. Otherwise, this ensures $R\_{t}^{\texttt{INF}}(u)\in[0,1]$, where $\beta^{\texttt{INF}}=0$ prioritizes the discovery of new topics, while $\beta^{\texttt{INF}}=1$ encourages consuming a broad mix of content within the current topic space.

Self-Presentation Reward (PRE).
Self-presentation is a fundamental motive for user participation on social media, where individuals share content to express identity, gain visibility, and seek validation through social feedback. To formalize this, we consider that in each round $t$, agent $u$ executes a batch of actions $\mathcal{B}\_{t}(u)\subset\mathcal{B}\_{t}$, $\mathcal{B}\_{t}(u)=\{a\_{t,1}(u),\dots,a\_{t,N}(u)\}$,
where each action belongs to the action set $\mathcal{A}$. We define the subset of *self-presentation actions* as
$\mathcal{B}^{\texttt{POST}}\_{t}(u)=\bigl\{a\in\mathcal{B}\_{t}(u):\textsc{Type}(a)=\texttt{POST}\bigr\}$, representing all posts created by user $u$ in round $t$. The cardinality $|\mathcal{B}^{\texttt{POST}}\_{t}(u)|$ measures the quantity of self-generated content.

Beyond the act of posting, users also derive utility from *feedback* received on their content, reflecting community approval or disapproval. For each post $a\in\mathcal{B}^{\texttt{POST}}\_{t}(u)$, let $\ell^{+}\_{t}(a)$ and $\ell^{-}\_{t}(a)$ denote the number of likes and dislikes received, respectively. The total positive and negative feedback accumulated by $u$ on their posts during round $t$ are then given by

|  |  |  |
| --- | --- | --- |
|  | $$L^{+}\_{t}\bigl(\mathcal{B}^{\texttt{POST}}\_{t}(u)\bigr)=\sum\_{a\in\mathcal{B}^{\texttt{POST}}\_{t}(u)}\ell^{+}\_{t}(a),\hskip 10.00002ptL^{-}\_{t}\bigl(\mathcal{B}^{\texttt{POST}}\_{t}(u)\bigr)=\sum\_{a\in\mathcal{B}^{\texttt{POST}}\_{t}(u)}\ell^{-}\_{t}(a).$$ |  |

The self-presentation reward combines the incentive to post content with the desire to receive positive social feedback. To ensure the feedback component remains bounded, we map the net audience response to the unit interval using a non-linear normalization function. We define the normalized feedback score $\widetilde{F}\_{t}(u)$ by

|  |  |  |
| --- | --- | --- |
|  | $$\widetilde{F}\_{t}(u)\coloneqq\frac{1}{2}\left(1+\tanh\!\left(\frac{L^{+}\_{t}\bigl(\mathcal{B}^{\texttt{POST}}\_{t}(u)\bigr)-L^{-}\_{t}\bigl(\mathcal{B}^{\texttt{POST}}\_{t}(u)\bigr)}{\max\{1,|\mathcal{B}^{\texttt{POST}}\_{t}(u)|\}\,(|\mathcal{V}|-1)}\right)\right).$$ |  |

We then compute the total reward as

|  |  |  |
| --- | --- | --- |
|  | $$R\_{t}^{\texttt{PRE}}(u)=(1-\beta^{\texttt{PRE}})\frac{|\mathcal{B}^{\texttt{POST}}\_{t}(u)|}{|\mathcal{B}\_{t}(u)|}+\beta^{\texttt{PRE}}\,\widetilde{F}\_{t}(u),$$ |  |

where $\beta^{\texttt{PRE}}\in[0,1]$ modulates the trade-off between intrinsic output volume and extrinsic social validation. The first term incentivizes consistent activity by measuring the relative frequency of posts. The second term quantifies the quality of reception by computing the average net sentiment per post, normalized against the maximum possible audience response ($|\mathcal{V}|-1$) to ensure scale invariance.

Coordination Reward (COORD).
Coordination captures user behaviors that foster direct interaction and reciprocity within a social network, such as responding to others and explicitly mentioning peers to engage them in discussions. This reward models two forms of coordination: *visibility through mentions* and *reciprocity through replies*. We first define *mentions* as explicit references to other users (e.g., using “@user”) in posts or comments. Let
$\mathcal{B}^{\texttt{COORD}}\_{t}\!=\!\bigl\{a\in\mathcal{B}\_{t}:\textsc{Type}(a)\in\{\texttt{COM},\texttt{POST}\}\bigr\}$
denote the set of all comments and posts created during round $t$. We define the number of times user $u$ is mentioned in round $t$ as $U^{@}\_{t}(u)=|\{a\in\mathcal{B}^{\texttt{COORD}}\_{t}:u\in\textsc{Mentions}(a)\}|$,
where Mentions is a helper function that extracts the set of users explicitly mentioned in action $a$. The second form of coordination involves *reciprocity* through direct messaging. We identify the set of users who sent a direct message (DM) to user $u$ in the previous round,

|  |  |  |
| --- | --- | --- |
|  | $$U\_{t-1}(u)=\bigl\{v:\exists\,a\in\mathcal{B}\_{t-1},\;\textsc{Sndr}(a)=v,\;\textsc{Rcpt}(a)=u,\;\textsc{Type}(a)=\texttt{DM}\bigr\},$$ |  |

where Sndrand Rcptreturn the sender and recipient of action $a$, respectively. To quantify reciprocity, we first isolate the set of direct messages sent by user $u$ in the current round, $\mathcal{B}\_{t}^{\texttt{DM}}(u)=\bigl\{a\in\mathcal{B}\_{t}:\textsc{Type}(a)=\texttt{DM},\;\textsc{Sndr}(a)=u\bigr\}$.
We then define the number of direct replies user $u$ sends back to those who messaged them in the previous round as

|  |  |  |
| --- | --- | --- |
|  | $$U^{\texttt{DM}}\_{t}(u)=\bigl|\bigl\{v\in U\_{t-1}(u):\exists\,a\in\mathcal{B}\_{t}^{\texttt{DM}}(u),\;\textsc{Rcpt}(a)=v\bigr\}\bigr|.$$ |  |

This quantity captures the extent to which $u$ reciprocates by responding to direct messages. The coordination reward is then defined as

|  |  |  |
| --- | --- | --- |
|  | $$R\_{t}^{\texttt{COORD}}(u)=(1-\beta^{\texttt{COORD}})\frac{U^{@}\_{t}(u)}{\max\{1,|\mathcal{B}^{\texttt{COORD}}\_{t}|\}}+\beta^{\texttt{COORD}}\frac{U^{\texttt{DM}}\_{t}(u)}{\max\{1,|U\_{t-1}(u)|\}},$$ |  |

where $\beta^{\texttt{COORD}}\in[0,1]$ controls the trade-off between prioritizing *visibility* through mentions and *reciprocity* through direct replies. This formulation incentivizes agents to balance being seen by others and actively maintaining responsive communication within the network.

Emotional Support Reward (EMO).
Emotional support is a core element of social interactions, reflecting the encouragement, affirmation, or criticism that users receive during their engagements. We define $\mathcal{B}^{\texttt{DIR}}\_{t}$ as the set of all direct messages and comments exchanged in round $t$. For each action $a\in\mathcal{B}^{\texttt{DIR}}\_{t}$, let $\textsc{Rcpt}(a)$ denote the effective recipient and let $s(a)\in[-1,1]$ be the sentiment score, where positive values indicate supportive content and negative values indicate hostility. Let $\mathcal{B}^{\texttt{DIR}}\_{t}(u)\coloneqq\{a\in\mathcal{B}^{\texttt{DIR}}\_{t}:\textsc{Rcpt}(a)=u\}$
denote the set of direct exchanges received by $u$ in round $t$. We define the emotional support reward as the average supportiveness of received exchanges:

|  |  |  |
| --- | --- | --- |
|  | $$R\_{t}^{\texttt{EMO}}(u)=\frac{1}{\max\{1,|\mathcal{B}^{\texttt{DIR}}\_{t}(u)|\}}\sum\_{a\in\mathcal{B}^{\texttt{DIR}}\_{t}(u)}\frac{s(a)+1}{2}.$$ |  |

This formulation normalizes the emotional experience into the unit interval. Under this metric, interactions dominated by positive sentiment yield rewards approaching one. Conversely, predominantly hostile interactions—or a complete absence of engagement—result in values near zero. This effectively penalizes social isolation and received hostility equally, incentivizing agents to seek positive social validation.

Compositional Reward.
User motivations on social platforms rarely stem from a single objective but instead reflect a blend of *social interaction* (SOC), *information seeking* (INF), *self-presentation* (PRE), *coordination* (COORD), and *emotional support* (EMO). To capture this complexity, we define the overall reward as a weighted combination of these components, allowing the simulation to reflect diverse user goals and the interplay among engagement drivers. Formally, we write the compositional reward as

|  |  |  |
| --- | --- | --- |
|  | $$R\_{t}(u)=\sum\_{r\in\mathcal{R}}\lambda\_{r}\,R\_{t}^{r}(u),\hskip 10.00002pt\sum\_{r\in\mathcal{R}}\lambda\_{r}=1,\hskip 10.00002pt\lambda\_{r}\geq 0,$$ |  |

where the set $\mathcal{R}=\{\texttt{SOC},\texttt{INF},\texttt{PRE},\texttt{COORD},\texttt{EMO}\}$ denotes the included reward components. The coefficients $\lambda\_{r}$ specify the relative importance of each component, enabling the model to represent users with distinct goals or to reflect platform designs that emphasize particular forms of engagement. This compositional framework ensures that while each reward remains interpretable and bounded, their aggregation can flexibly capture the multidimensional objectives underlying behavior in online environments.

### 3.4 Mechanisms of Social Tie Formation

We model the evolution of directed social ties over time by representing the interaction structure at each round $t$ as a weighted, directed network $\mathcal{G}\_{t}=(\mathcal{V},\mathcal{E}\_{t},A\_{t})$, where $\mathrm{diag}(A\_{t})=0$. The entry $[A\_{t}]\_{uv}\in[0,1]$ stores the strength of the directed tie from user $u$ to user $v$. Ties are initialized at zero and strengthened or weakened over time in response to interaction, allowing us to separate the formation of a tie from its subsequent development. This approach builds on actor-oriented models for dynamic social networks ([Snijders et al., 2010](https://arxiv.org/html/2510.19299v2#bib.bib32)) and is consistent with empirical evidence that the persistence of communication ties depends strongly on the frequency and recency of interaction ([Onnela et al., 2007](https://arxiv.org/html/2510.19299v2#bib.bib33); [Kossinets and Watts, 2006](https://arxiv.org/html/2510.19299v2#bib.bib29)).

To determine whether a directed tie should be updated in a given round, we introduce a binary activation denoted as $\zeta\_{t}(u\rightarrow v)\in\{0,1\}$ that encodes whether user $u$ actively interacted with user $v$ in round $t$. We operationalize this by defining two directed interaction channels. The Address channel activates when $u$ directly addresses $v$—either by sending a private message or by publicly mentioning $v$. The Engage channel activates when $u$ interacts with content created by $v$—either through commenting or voting. Formally, let $\mathcal{B}\_{t}$ be the batch of all actions in round $t$. We define the channel indicators and the resulting overall activation $\zeta\_{t}(u\rightarrow v)$ as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\textsc{Address}\_{u\rightarrow v}(t)$ | $\displaystyle\coloneqq\mathds{1}\!\left\{\exists\,a\in\mathcal{B}\_{t}:\ \mathrm{isDmTo}(a,u,v)\vee\mathrm{isMention}(a,u,v)\right\},$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\textsc{Engage}\_{u\rightarrow v}(t)$ | $\displaystyle\coloneqq\mathds{1}\!\left\{\exists\,a\in\mathcal{B}\_{t}:\ \mathrm{isComTo}(a,u,v)\vee\mathrm{isVoteFor}(a,u,v)\right\},$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\zeta\_{t}(u\rightarrow v)$ | $\displaystyle\coloneqq\textsc{Address}\_{u\rightarrow v}(t)\vee\textsc{Engage}\_{u\rightarrow v}(t).$ |  |

Once activation is determined, the tie strength is updated using a gated update rule that differentiates between active and passive rounds. On active rounds, the tie is strengthened based on a scalar evidence score $e\_{t}(u\rightarrow v)\in[0,1]$, which aggregates the quality of the interaction. On passive rounds—when no directed interaction from $u$ to $v$ occurs—the tie strength decays. The update is defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$[A\_{t+1}]\_{uv}\coloneqq\begin{cases}[A\_{t}]\_{uv}+\min\left\{\begin{aligned} &\Delta\_{\max},\\ &(1-[A\_{t}]\_{uv})[e\_{t}(u\rightarrow v)-\xi]\_{+}\end{aligned}\right\},&\text{if }\zeta\_{t}(u\rightarrow v)=1,\\[10.00002pt] (1-\delta)\cdot[A\_{t}]\_{uv},&\text{if }\zeta\_{t}(u\rightarrow v)=0,\end{cases}$$ |  | (1) |

where $\xi\in[0,1)$ is a minimum-evidence threshold, $\Delta\_{\max}\geq 0$ caps the per-round increase, $\delta\in[0,1)$ controls decay, and $[x]\_{+}=\max\{0,x\}$. The scaling term $1-[A\_{t}]\_{uv}$ ensures that increases become smaller as the tie approaches its maximum value, while decay acts multiplicatively to gradually fade inactive ties. To interpret $\delta$, one can parameterize it via a half-life $h$ such that $\delta=1-2^{-1/h}$.

The evidence score $e\_{t}(u\rightarrow v)$ is computed by aggregating several dyadic signals that capture distinct social mechanisms. These include: the *novelty* of the interaction—capturing whether $u$ introduces new information to $v$, drawing on theories of brokerage and weak ties ([Granovetter, 1973](https://arxiv.org/html/2510.19299v2#bib.bib34); [Burt, 2004](https://arxiv.org/html/2510.19299v2#bib.bib35)); the *reciprocity* of interactions ([Gouldner, 1960](https://arxiv.org/html/2510.19299v2#bib.bib31); [Nowak and Sigmund, 2005](https://arxiv.org/html/2510.19299v2#bib.bib36))—captured by the symmetry of feedback between users—and the *approval* expressed through likes and other positive evaluations ([Muchnik et al., 2013](https://arxiv.org/html/2510.19299v2#bib.bib37)); and the *affective tone* of communication—measured by the sentiment of direct messages, reflecting relational support ([House et al., 1988](https://arxiv.org/html/2510.19299v2#bib.bib30)). Each signal is bounded and passed through a monotone mapping $G\_{\vartheta}$, which ensures that stronger combinations of signals yield higher evidence scores. Further details on the construction of individual signals and the specification of $G\_{\vartheta}$ are provided in the Supplementary Materials.

An alternative approach to constructing signals heuristically is to score the text from interactions in each round, as demonstrated in the prompt in Appendix [A](https://arxiv.org/html/2510.19299v2#A1 "Appendix A Prompt Specifications ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"). In this approach, we replace the evidence score $e\_{t}(u\rightarrow v)$ with a normalized score obtained from the prompt to update the ties.

For reporting purposes, we optionally export the final adjacency matrix in an undirected form, defined as $[A^{\mathrm{ud}}\_{t}]\_{uv}=\tfrac{1}{2}([A\_{t}]\_{uv}+[A\_{t}]\_{vu})$, which symmetrizes tie strength for visualization and summary statistics. After the final simulation round $T$, we apply a threshold $\theta$ to $A^{\mathrm{ud}}\_{T}$ to obtain a binarized undirected graph, which is used in the network analysis. This transformation is used only for reporting and does not affect the directed tie dynamics or update rules described above.

## 4 Results

We propose an overall framework for studying the formation of social ties. Our experiments were conducted with $\lvert\mathcal{V}\rvert=30$ agents over $T=15$ simulation rounds and $N=3$ actions per agent per round, with discussions centered on climate change. The persona planner utilized data from [Kong et al. (2022)](https://arxiv.org/html/2510.19299v2#bib.bib43).2 We present our findings, beginning with an evaluation of whether specific tasks, referred to here as policies, can be learned.

(a) Without coaching.

(b) With coaching.

Figure 2: Comparison between augmenting in-context learning with coaching.

In Fig. [2](https://arxiv.org/html/2510.19299v2#S4.F2 "Figure 2 ‣ 4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"), we observe that performance generally increases over simulation rounds, both with and without the coach. The information-seeking (INF) policy is typically the easiest to learn, as it is primarily driven by exposure to new content. Emotional support (EMO) attains comparatively high values, reflecting the generally positive behavior of most agents. Self-presentation (PRE) can be partially controlled through personal posts, whereas policies that depend on coordination (SOC, COORD) are more difficult to learn. Comparing Fig. [2(a)](https://arxiv.org/html/2510.19299v2#S4.F2.sf1 "In Figure 2 ‣ 4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties") and Fig. [2(b)](https://arxiv.org/html/2510.19299v2#S4.F2.sf2 "In Figure 2 ‣ 4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"), the coach accelerates early learning for some policies but does not yield a uniform late-round improvement, with the exception of COORD and EMO, which likely benefit from improved targeting. Final performance levels are broadly similar within the variability bands. Coaching provides additional guidance that appears to reduce dispersion and structure planning, but the aggregate gains remain modest given the task complexity.

Next, we examine the reweighting step when it is performed via (i) a heuristic based on predefined signals versus (ii) a LLM text-based approach. After constructing the directed weighted graph at the final simulation step $T=15$, we convert it into an undirected unweighted graph. The conversion threshold $\theta$ plays a central role in this process. We also allow ties to decay, and bound tie strength updates at each step by $\Delta\_{\max}$.

Figure 3: Network metrics for heuristic tie formation.

The main evaluation metrics are outlined in Appendix [C](https://arxiv.org/html/2510.19299v2#A3 "Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"). Together with baseline statistics from real networks reported in [Chang et al. (2025)](https://arxiv.org/html/2510.19299v2#bib.bib18), they serve as external benchmarks. Comparing the two reweighting methods, we find that the heuristic approach exhibits greater variability across thresholds—particularly in density, average clustering, and average shortest path length (cf. Fig. [3](https://arxiv.org/html/2510.19299v2#S4.F3 "Figure 3 ‣ 4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties")). By contrast, the LLM-based text approach produces more stable results and more often falls within or near the real-network ranges for these metrics (cf. Fig. [4](https://arxiv.org/html/2510.19299v2#S4.F4 "Figure 4 ‣ 4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties")). Differences are less pronounced for the largest connected component, where both methods yield near-complete networks, and more modest for modularity, where both remain below real-network levels on average. We emphasize that this analysis is a first step. Further work is required to characterize how these structures evolve over time, given the dynamic interplay between agent relationships, tie-strength updates, and topical alignment.

Figure 4: Network metrics for text-based tie formation.

## 5 Conclusion

We present a platform that endogenously learns social ties among interacting LLM agents from their private and public exchanges. Each agent optimizes a task-specific behavioral reward grounded in gratifications theory [Whiting and Williams (2013)](https://arxiv.org/html/2510.19299v2#bib.bib12) and adapts via a plan-execute-reflect loop with bandit-style updates. We show that these rewards are learnable in practice, with varying difficulty under bounded rationality and strategic influence, and that some objectives are unattainable in principle because achieving them would require control over other agents. Using the evaluation protocol of [Chang et al. (2025)](https://arxiv.org/html/2510.19299v2#bib.bib18), the emergent networks match key statistics of real social graphs, establishing the platform as a controlled testbed for studying echo-chamber formation, the dynamics of niche communities, and the design of mitigating interventions. The study is conservative in scale $(|\mathcal{V}|=30,\;T=15)$, uses limited replications, and starts from empty networks; scaling to larger cohorts and horizons, seeding pre-existing ties, and running intervention stress tests are clear next steps to strengthen external validity and policy relevance. Finally, with a small number of actions per round, the coaching component led to only modest gains, underscoring the difficulty of faithfully mimicking real user behavior.

## References

- [1]
  G. V. Aher, R. I. Arriaga, and A. T. Kalai (2023)
  [Using large language models to simulate multiple humans and replicate human subject studies](https://proceedings.mlr.press/v202/aher23a.html).
  In International Conference on Machine Learning,
  pp. 337–371.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [2]
  M. Alizadeh, J. N. Shapiro, C. Buntain, and J. A. Tucker (2020)
  [Content-based features predict social media influence operations](https://doi.org/10.1126/sciadv.abb5824).
  Science Advances 6 (30), pp. eabb5824.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [3]
  L. P. Argyle, E. C. Busby, N. Fulda, J. R. Gubler, C. Rytting, and D. Wingate (2023)
  [Out of one, many: Using language models to simulate human samples](https://doi.org/10.1017/pan.2023.2).
  Political Analysis 31 (3), pp. 337–351.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [4]
  C. A. Bail (2024)
  [Can Generative AI improve social science?](https://doi.org/10.1073/pnas.2314021121).
  Proceedings of the National Academy of Sciences 121 (21), pp. e2314021121.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [5]
  A. Barabási (2016)
  Network science.
   Cambridge University Press, Cambridge.
  Cited by: [§C.1](https://arxiv.org/html/2510.19299v2#A3.SS1.p1.1 "C.1 Evaluation Metrics ‣ Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [6]
  M. Binz and E. Schulz (2023)
  [Using cognitive psychology to understand GPT-3](https://doi.org/10.1073/pnas.2218523120).
  Proceedings of the National Academy of Sciences 120 (6), pp. e2218523120.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [7]
  R. S. Burt (2004)
  [Structural holes and good ideas](https://doi.org/10.1086/421787).
  American Journal of Sociology 110 (2), pp. 349–399.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p3.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [8]
  L. Castricato, N. Lile, R. Rafailov, J. Fränken, and C. Finn (2025)
  [PERSONA: A reproducible testbed for pluralistic alignment](https://aclanthology.org/2025.coling-main.752/).
  In Proceedings of the 31st International Conference on Computational Linguistics,
  pp. 11348–11368.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p2.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"),
  [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p1.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [9]
  S. Chang, A. Chaszczewicz, E. Wang, M. Josifovska, E. Pierson, and J. Leskovec (2025)
  [LLMs generate structurally realistic social networks but overestimate political homophily](https://doi.org/10.1609/icwsm.v19i1.35820).
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 19, pp. 341–371.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"),
  [§4](https://arxiv.org/html/2510.19299v2#S4.p4.1 "4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"),
  [§5](https://arxiv.org/html/2510.19299v2#S5.p1.1 "5 Conclusion ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [10]
  M. Cinelli, G. De Francisci Morales, A. Galeazzi, W. Quattrociocchi, and M. Starnini (2021)
  [The echo chamber effect on social media](https://doi.org/10.1073/pnas.2023301118).
  Proceedings of the National Academy of Sciences 118 (9), pp. e2023301118.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [11]
  J. M. Digman (1990)
  [Personality structure: Emergence of the five-factor model](https://doi.org/10.1146/annurev.ps.41.020190.002221).
  Annual Review of Psychology 41 (1), pp. 417–440.
  Cited by: [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p2.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [12]
  M. B. Donnellan, F. L. Oswald, B. M. Baird, and R. E. Lucas (2006)
  [The mini-IPIP scales: Tiny-yet-effective measures of the Big Five factors of personality](https://doi.org/10.1037/1040-3590.18.2.192).
  Psychological Assessment 18 (2), pp. 192–203.
  Cited by: [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p2.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [13]
  S. Fortunato (2010)
  [Community detection in graphs](https://doi.org/10.1016/j.physrep.2009.11.002).
  Physics Reports 486 (3-5), pp. 75–174.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [14]
  C. Gao, X. Lan, N. Li, Y. Yuan, J. Ding, Z. Zhou, F. Xu, and Y. Li (2024)
  [Large language models empowered agent-based modeling and simulation: A survey and perspectives](https://doi.org/10.1057/s41599-024-03611-3).
  Humanities and Social Sciences Communications 11 (1), pp. 1–24.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [15]
  L. R. Goldberg (1992)
  [The development of markers for the Big-Five factor structure](https://psycnet.apa.org/doi/10.1037/1040-3590.4.1.26).
  Psychological Assessment 4 (1), pp. 26–42.
  Cited by: [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p2.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [16]
  A. W. Gouldner (1960)
  [The norm of reciprocity: A preliminary statement](https://doi.org/10.2307/2092623).
  American Sociological Review 25 (2), pp. 161–178.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p3.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [17]
  M. S. Granovetter (1973)
  [The strength of weak ties](https://www.jstor.org/stable/2776392).
  American Journal of Sociology 78 (6), pp. 1360–1380.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p3.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [18]
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang (2024)
  [Large language model based multi-agents: A survey of progress and challenges](https://doi.org/10.24963/ijcai.2024/890).
  In International Joint Conference on Artificial Intelligence,
  pp. 8048–8057.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [19]
  S. Gupta, V. Shrivastava, A. Deshpande, A. Kalyan, P. Clark, A. Sabharwal, and T. Khot (2024)
  [Bias runs deep: Implicit reasoning biases in persona-assigned LLMs](https://openreview.net/forum?id=kGteeZ18Ir).
  In International Conference on Learning Representations,
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p2.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [20]
  J. S. House, K. R. Landis, and D. Umberson (1988)
  [Social relationships and health](https://doi.org/10.1126/science.3399889).
  Science 241 (4865), pp. 540–545.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p3.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [21]
  G. Jiang, M. Xu, S. Zhu, W. Han, C. Zhang, and Y. Zhu (2023)
  [Evaluating and inducing personality in pre-trained language models](https://proceedings.neurips.cc/paper_files/paper/2023/hash/21f7b745f73ce0d1f9bcea7f40b1388e-Abstract-Conference.html).
  Advances in Neural Information Processing Systems 36, pp. 10622–10643.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p2.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [22]
  Q. Kong, E. Booth, F. Bailo, A. Johns, and M. Rizoiu (2022)
  [Slipping to the extreme: A mixed method to explain how extreme opinions infiltrate online discussions](https://doi.org/10.1609/icwsm.v16i1.19312).
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 16, pp. 524–535.
  Cited by: [§4](https://arxiv.org/html/2510.19299v2#S4.p1.1 "4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [23]
  G. Kossinets and D. J. Watts (2006)
  [Empirical analysis of an evolving social network](https://doi.org/10.1126/science.1116869).
  Science 311 (5757), pp. 88–90.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p1.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [24]
  A. D. Kramer, J. E. Guillory, and J. T. Hancock (2014)
  [Experimental evidence of massive-scale emotional contagion through social networks](https://doi.org/10.1073/pnas.1320040111).
  Proceedings of the National Academy of Sciences 111 (24), pp. 8788–8790.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [25]
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem (2023)
  [CAMEL: Communicative agents for “mind” exploration of large language model society](https://proceedings.neurips.cc/paper_files/paper/2023/hash/a3621ee907def47c1b952ade25c67698-Abstract-Conference.html).
  Advances in Neural Information Processing Systems 36, pp. 51991–52008.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [26]
  R. Liu, R. Yang, C. Jia, G. Zhang, D. Yang, and S. Vosoughi (2024)
  [Training socially aligned language models on simulated social interactions](https://openreview.net/forum?id=NddKiWtdUm).
  In International Conference on Learning Representations,
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p2.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [27]
  R. R. McCrae and P. T. Costa Jr (1997)
  [Personality trait structure as a human universal](https://doi.org/10.1037//0003-066x.52.5.509).
  American Psychologist 52 (5), pp. 509–516.
  Cited by: [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p2.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [28]
  Q. Mei, Y. Xie, W. Yuan, and M. O. Jackson (2024)
  [A Turing test of whether AI chatbots are behaviorally similar to humans](https://doi.org/10.1073/pnas.2313925121).
  Proceedings of the National Academy of Sciences 121 (9), pp. e2313925121.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [29]
  L. Muchnik, S. Aral, and S. J. Taylor (2013)
  [Social influence bias: A randomized experiment](https://doi.org/10.1126/science.1240466).
  Science 341 (6146), pp. 647–651.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p3.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [30]
  M. E. Newman (2002)
  [Assortative mixing in networks](https://doi.org/10.1103/PhysRevLett.89.208701).
  Physical Review Letters 89 (20), pp. 208701.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [31]
  M. A. Nowak and K. Sigmund (2005)
  [Evolution of indirect reciprocity](https://doi.org/10.1038/nature04131).
  Nature 437 (7063), pp. 1291–1298.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p3.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [32]
  J. Onnela, J. Saramäki, J. Hyvönen, G. Szabó, D. Lazer, K. Kaski, J. Kertész, and A. Barabási (2007)
  [Structure and tie strengths in mobile communication networks](https://doi.org/10.1073/pnas.0610245104).
  Proceedings of the National Academy of Sciences 104 (18), pp. 7332–7336.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p1.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [33]
  G. M. Orlando, V. La Gatta, D. Russo, and V. Moscato (2025)
  [Can generative agent-based modeling replicate the friendship paradox in social media simulations?](https://doi.org/10.1145/3717867.3717895).
  In Proceedings of the 17th ACM Web Science Conference 2025,
  pp. 510–515.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [34]
  C. O’Grady (2025)
  [‘Unethical’ AI research on Reddit under fire](https://doi.org/10.1126/science.zzowbgw).
  Science.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [35]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  [Generative agents: Interactive simulacra of human behavior](https://doi.org/10.1145/3586183.3606763).
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–22.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [36]
  F. Salvi, M. Horta Ribeiro, R. Gallotti, and R. West (2025)
  [On the conversational persuasiveness of GPT-4](https://doi.org/10.1038/s41562-025-02194-6).
  Nature Human Behaviour 9, pp. 1645–1653.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [37]
  P. J. Schneider and M. Rizoiu (2023)
  [The effectiveness of moderating harmful online content](https://doi.org/10.1073/pnas.2307360120).
  Proceedings of the National Academy of Sciences 120 (34), pp. e2307360120.
  Cited by: [§1](https://arxiv.org/html/2510.19299v2#S1.p1.1 "1 Introduction ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [38]
  T. A. Snijders, G. G. Van de Bunt, and C. E. Steglich (2010)
  [Introduction to stochastic actor-based models for network dynamics](https://doi.org/10.1016/j.socnet.2009.02.004).
  Social Networks 32 (1), pp. 44–60.
  Cited by: [§3.4](https://arxiv.org/html/2510.19299v2#S3.SS4.p1.1 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [39]
  S. Vosoughi, D. Roy, and S. Aral (2018)
  [The spread of true and false news online](https://doi.org/10.1126/science.aap9559).
  Science 359 (6380), pp. 1146–1151.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [40]
  A. Whiting and D. Williams (2013)
  [Why people use social media: A uses and gratifications approach](https://doi.org/10.1108/QMR-06-2013-0041).
  Qualitative Market Research 16 (4), pp. 362–369.
  Cited by: [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p3.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"),
  [§5](https://arxiv.org/html/2510.19299v2#S5.p1.1 "5 Conclusion ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [41]
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, A. H. Awadallah, R. W. White, D. Burger, and C. Wang (2024)
  [AutoGen: Enabling next-gen LLM applications via multi-agent conversations](https://openreview.net/forum?id=BAakY1hNKS).
  In Conference on Language Modeling,
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p1.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [42]
  L. Yuan, P. J. Schneider, and M. Rizoiu (2025)
  [Behavioral homophily in social media via inverse reinforcement learning: A Reddit case study](https://doi.org/10.1145/3696410.3714618).
  In Proceedings of the ACM on Web Conference 2025,
  pp. 576–589.
  Cited by: [§C.1](https://arxiv.org/html/2510.19299v2#A3.SS1.p9.4 "C.1 Evaluation Metrics ‣ Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [43]
  W. Zhong, L. Guo, Q. Gao, H. Ye, and Y. Wang (2024)
  [Memorybank: Enhancing large language models with long-term memory](https://doi.org/10.1609/aaai.v38i17.29946).
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 38, pp. 19724–19731.
  Cited by: [§3.1](https://arxiv.org/html/2510.19299v2#S3.SS1.p4.1 "3.1 Persona Creation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").
- [44]
  J. Zhou, Y. Zhang, Q. Luo, A. G. Parker, and M. De Choudhury (2023)
  [Synthetic lies: Understanding AI-generated misinformation and evaluating algorithmic and human solutions](https://doi.org/10.1145/3544548.3581318).
  In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems,
  pp. 1–20.
  Cited by: [§2](https://arxiv.org/html/2510.19299v2#S2.p3.1 "2 Preliminaries ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties").

## Appendix A Prompt Specifications

In this section, we present the prompts underlying our multi-agent LLM simulation: *Coach*, *Plan*, *Vote*, and *Tie-Update*. Furthermore, we provide the *Persona-Initialization* prompt for setting up our agents.
As detailed in the methodology, the *Coach* prompt provides action recommendations that streamline the planning of $N$ actions in each simulation round $t$. Although the *Plan* prompt contains nearly all required information on its own, planning remains nontrivial—particularly when integrating private (direct messages) and public (posts and comments) channels—and can overload the agent. Producing a valid, executable action list is therefore essential.

The *Plan* prompt can run with or without the coach’s *tip*. If a candidate plan fails our validation checks, we re-prompt (up to three times) until a valid plan is produced.

Coach Prompt

System: You are a strategy coach in a multi-round social media game. Your job is to help the agent maximize long-term rewards by closing the gaps between their current reward scores and their target weights. Priorities are ordered by importance, so the first items need the most improvement. Output 3-5 one-sentence bullet tips that are concrete, executable, and encourage variety in partners and topics across rounds to promote diversity and exploration. No preamble, no explanations. Remember: the total reward per round is capped at 1, and many reward components depend on how others engage with the agent, so your tips should encourage responses and collaboration.
  
User: Priority this round (high$\to$low): {focus}
  
Guidelines: {guidelines}
  
Context:

•

Users: {users}
•

DM senders last round: {dm\_last\_senders}
•

Recent partners: {recent\_partners}
•

Known topics so far: {seen\_topics}
•

Recent topics (last 3): {last\_recent}
Each tip must include:

•

action type (POST/COM/DM),
•

target user (from lists) or ‘top-liked post’,
•

topic (choose a relevant or new topic; exploring new topics helps INF),
•

whether you invite them to @mention you back (only if aiming at COORD),
•

tone (supportive/neutral/critical).
Focus items are ordered by how far below target the corresponding reward is; design actions to improve the highest-priority components. Vary topics and partners to support learning and social diversity.
  
Return ONLY the bullets.

Plan Prompt

System: You are {name}, a user participating in a multi-round social media game. In each round you will execute exactly {n\_actions} actions and your choices accumulate across rounds, affecting future relationships, topics seen and rewards. Recall past interactions and relationships from your memory when planning your actions.
Your best was round {best\_round} with score {best\_reward} when you did {best\_summary}.
  
Your only goal is to grow what you value most-{active\_comps}-in these proportions: {active\_weights}.
  
[You got this coaching tip: {tip}]
Here are the reward definitions and how they translate into behaviors:
  
{selected\_reward\_docs}
  
Here’s how they combine:
  
Your total score is a mix of these parts (SOC, INF, PRE, COORD, EMO), weighted by $\lambda$’s that sum to 1. Each $\lambda$ decides a component’s importance.
Current weights: {active\_weights}
Reward-aware rules (apply when the corresponding $\lambda$ is large):

•

COORD: For POST/COM, set “mention\_flag”: true when you plan to include a literal @mention (e.g., @post\_author or a user from Users).
•

SOC: Balance COM/DM between initiating and replying; if someone messaged you last round, reply.
•

INF: Prefer topics not seen recently; otherwise keep a diverse mix from Topics.
•

PRE: Include at least one POST (keep it concise and end with a clear question).
•

EMO: Set “tone”: “supportive” for COM/DM to elicit supportive replies.
PLANNING CONTRACT:
  
Plan EXACTLY {n\_actions} actions.
  
When coach tips are provided, you MUST follow them in your plan. Only adapt if a tip is impossible to execute.
  
If a tip is impossible, replace only that action with the closest feasible alternative that preserves the tip’s intent.
  
Respond with a raw JSON array only (no code fences, no comments, no extra keys, no trailing commas).
Each action must be an object with EXACTLY these keys:

•

“type”: one of “POST”,“COM”,“DM”,“NOT”
•

“recipient”: user ID for DM, otherwise null
•

“topic”: string for POST/COM/DM, null for NOT
•

“target\_id”: COM → a post ID from the list; DM → a DM reply ID (reply mode) or null (cold DM); null for POST and NOT
•

“mention\_flag”: boolean; true only if you will include an @mention (POST/COM only; must be false for DM and NOT)
•

“tone”: one of “supportive”,“neutral”,“critical”
CONSTRAINTS:

•

POST: recipient=null, target\_id=null
•

COM: recipient=null, target\_id MUST be a valid post ID from the list
•

DM: two modes:

-

Reply DM: recipient MUST be the author of a listed DM reply AND target\_id MUST be that DM id
-

Cold DM: recipient MUST be a valid user ID from the list AND target\_id MUST be null
•

NOT: recipient=topic=target\_id=null
TOPIC GUIDANCE:

•

For COM: use the target post’s topic if provided; otherwise pick a relevant engaging topic.
•

For POST/DM: choose any topic likely to engage the audience or recipient; exploring new topics can increase INF reward.
•

There is no fixed topic list; you may introduce new topics, but keep them $\leq$ 5 words.
User:
Last actions (most recent round): {last\_actions},
  
Last observed reward scores: {observed\_rewards},
  
Users you can interact with: {users},
  
Known topics so far: {topics} (you may introduce new topics),
  
DM replies (users who DM’d you last round):

-

author: {dm\_author} (DM id: {dm\_id}, topic: {dm\_topic}, content: {dm\_content})
-

…
Commentable posts (choose a target\_id from this list ONLY):

-

target\_id: {p\_id} (POST author: {p\_author}, topic: {p\_topic}, content: {p\_content})
-

…
Based on the above context, decide on {n\_actions} actions that best improve your priority rewards. For Reply DM, use the listed DM IDs; cold DM can be sent to any user in the list. For COM, you must supply a valid post ID from the list above. Remember: replies help SOC, mentions help COORD, and supportive tone helps EMO.

Finally, we present the *Vote* prompt, a key component of the social-media simulation that captures how each agent, given its personality parameters, evaluates other users’ content. The *Vote* prompt allows a user to express either liking or disliking of exposed content.

Vote Prompt

System:
You are {name}, a user in a multi-round social media game.
You are a {persona\_type} with {personality} personality - use these traits to guide your voting.
  
Your choices to “like” (1), “dislike” (-1), or remain neutral (0) on each piece of content affect how others perceive you (PRE) and the emotional tone of your interactions (EMO), and therefore influence your future rewards. Use your persona traits and your relationship history to decide which content to support, oppose, or ignore. A neutral vote (0) means you have no strong opinion or the relationship context is neutral.
  
Respond ONLY with a JSON array of objects. Each object must have:
  
• id: the content ID (integer)
  
• vote: 1 for ‘‘like’’, -1 for ‘‘dislike’’, or 0 for ‘‘no vote’’
  
Example output:
[
  
“id”: 42, “vote”: 1,
  
“id”: 73, “vote”: -1,
  
“id”: 99, “vote”: 0
  
]
  
No extra keys, no free-form text, no explanation.
  
User: Here are the latest items to vote on (id, sender, content{, relationship}):

•

{id} {sender} {content} {relationship}
•

{id} {sender} {content} {relationship}
•

{id} {sender} {content} {relationship}
•

$\cdots$ 
Vote on each according to your persona and the context of your relationships. Remember: liking or disliking influences your reputation and future interactions; use 0 (“no vote”) when you have no strong opinion or the relationship context is neutral.

The *Tie-Update* prompt is used to reweight social ties after each round. It presents the peers interacted with, along with the corresponding text.

Tie-Update Prompt

System:
You are {name}, a user in a multi-round social media game. Your task is to judge the strength of evidence for increasing your social connection to each peer based SOLELY on the interactions in the latest round.
  
SCORING GUIDE:
Assign an integer score from 0 to 5 to each peer based on these criteria:

•

5: Exceptional --- repeated warmth/help/coordination; clear constructive alignment.
•

4: Strong --- mutual positivity or clear support/assistance.
•

3: Good --- polite/positive tone with some constructive exchange.
•

2: Weak --- minor positive cues; limited substance.
•

1: Very Weak --- faint positivity; likely noise.
•

0: None -- mixed/negative/insufficient; do NOT increase.
  
RULES:

•

Base decisions on LAST-ROUND transcript only; do not infer beyond text.
•

Be conservative; if unsure, choose 0.
•

One rating per peer. Reason must be factual and $\leq$1 sentence
  
OUTPUT FORMAT:
You MUST output STRICT JSON. Include a score and a concise reason for every peer provided.
  
{{
  
"ratings": [
  
    {{
  
    "peer": "PeerName",
  
    "score": 0|1|2|3|4|5,
  
    "reason": "$\leq 1$ sentence."
  
    }}
  
]
  
}}
  
User: Here are your peers for this round: {peer\_list}.
  
Transcript of the last round: {transcript\_text}.
  
Rate each peer according to the rules above.

The *Persona-Initialization* prompt initializes agents based on a topic, opinion, and posts.

Persona-Initialization Prompt

System:
You are constructing multiple archetypal social-media personas grounded in real user posts. Each persona should represent a distinct communication style, emotional profile, and worldview consistent with the provided topic and opinion.
  
CONTEXT:
The input includes a collection of authentic Facebook posts annotated with topic and opinion labels. Each set of posts expresses a coherent stance under a shared topic.
  
INSTRUCTIONS:

•

Generate 3–5 diverse personas that plausibly produce posts expressing [OPINION] about [TOPIC].
•

Each persona should capture different linguistic styles, emotional tones, and rhetorical strategies observed in the posts.
•

Do NOT quote or paraphrase posts directly. Abstract communication patterns and inferred motivations only.
•

Avoid generic or repetitive personas; ensure heterogeneity across emotional and stylistic dimensions.
OUTPUT FORMAT:
You MUST output STRICT JSON containing a list of persona objects. Each persona should include the following fields: persona\_name, summary, style, emotions, rhetorical\_moves, and interaction\_norms.
  
{{
  
‘‘personas’’: [
  
    {{
  
    ‘‘persona\_name’’: ‘‘<short label>’’,
  
    ‘‘summary’’: ‘‘<3–5 sentences capturing worldview and goals>’’,
  
    ‘‘style’’: [‘‘<e.g., formal>’’, ‘‘<analytical>’’],
  
    ‘‘emotions’’: [‘‘<e.g., hopeful>’’, ‘‘<angry>’’],
  
    ‘‘rhetorical\_moves": [‘‘<e.g., appeal to authority>’’, ‘‘<use of humor>’’],
  
    ‘‘interaction\_norms’’: [‘‘<e.g., cooperative>’’, ‘‘<debate-oriented>’’]
  
    }}, ...
  
]
  
}}
  
User:
Here is the contextual input for this group of users:
  
- Topic: {TOPIC}
  
- Opinion: {OPINION}
  
- Posts:
  
{POSTS}
  
Generate multiple personas according to the instructions above.

## Appendix B Extended Formulation of the Social Tie Mechanism

In Sec. [3.4](https://arxiv.org/html/2510.19299v2#S3.SS4 "3.4 Mechanisms of Social Tie Formation ‣ 3 Methodology ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"), we outlined the main mechanism by which directed social ties evolve over time as agents interact across rounds. That formulation left implicit the precise logic used to determine whether a directed interaction from user $u$ to user $v$ should be considered active in a given round. Moreover, we did not formally define the logic underlying the evidence score. We now address both points by first detailing the interaction activation criteria.

#### Interaction Activation.

Each action $a\in\mathcal{B}\_{t}$ is characterized by its type $\textsc{Type}(a)$, sender $\textsc{Sndr}(a)$, and mentioned users $\textsc{Mentions}(a)$. We further define the *effective recipient* $\textsc{Rcpt}(a)$ for directed interactions as the target of a direct message or the author of a commented post.

To determine whether user $u$ has sent a direct message to user $v$, we define

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{isDmTo}(a,u,v)\coloneqq\big(\textsc{Type}(a)=\texttt{DM}\big)\wedge\big(\textsc{Sndr}(a)=u\big)\wedge\big(\textsc{Rcpt}(a)=v\big).$$ |  |

To identify whether user $u$ mentioned user $v$ in a public message—such as a post or a comment—we define:

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{isMention}(a,u,v)\coloneqq\big(\textsc{Type}(a)\in\{\texttt{POST},\texttt{COM}\}\big)\wedge\left(\textsc{Sndr}(a)=u\right)\wedge\big(v\in\textsc{Mentions}(a)\big).$$ |  |

These two conditions jointly define the Address interaction channel, which is triggered when user $u$ explicitly addresses user $v$ through either a private message or a public mention.

To define the Engage channel—capturing interactions with content authored by user $v$—we rely on two additional metadata fields.

The field $\textsc{Targ}(a)\in\mathcal{V}$ denotes the author of the content that action $a$ targets. Based on this, we define whether user $u$ comments to (i.e., targets the author) user $v$ as

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{isComTo}(a,u,v)\coloneqq\big(\textsc{Type}(a)=\texttt{COM}\big)\wedge\big(\textsc{Sndr}(a)=u\big)\wedge\big(\textsc{Rcpt}(a)=v\big).$$ |  |

To capture positive or negative evaluation of content, we include voting behavior. The field $\textsc{Vote}(a)\in\{-1,0,+1\}$ indicates a downvote, no vote, or an upvote, respectively. We define

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{isVoteFor}(a,u,v)\coloneqq\big(\textsc{Vote}(a)\neq 0\big)\wedge\big(\textsc{Sndr}(a)=u\big)\wedge\big(\textsc{Targ}(a)=v\big).$$ |  |

Together, these logical definitions specify whether a directed interaction from user $u$ to user $v$ is considered active in round $t$. Specifically, the binary activation variable $\zeta\_{t}(u\rightarrow v)$ is set to $1$ if either the Address or Engage channel is triggered by any action in $\mathcal{B}\_{t}$.

#### Evidence Score.

The evidence score $e\_{t}(u\rightarrow v)$ aggregates four distinct dyadic signals that capture different dimensions of social interaction between users $u$ and $v$.

Novelty.
This signal quantifies the introduction of new information from $u$ to $v$. Let $\mathcal{T}\_{t}(u\!\to\!v)$ denote the set of topics introduced by $u$ to $v$ during round $t$, and let $\mathcal{H}^{\tau}\_{t-1}(v)$ represent $v$’s historical topic exposure up to time $t-1$. The novelty signal is defined as:

|  |  |  |
| --- | --- | --- |
|  | $$S^{\mathrm{Nov}}\_{t}(u\!\to\!v)=\mathds{1}\{\exists\tau\in\mathcal{T}\_{t}(u\!\to\!v):\tau\notin\mathcal{H}^{\tau}\_{t-1}(v)\}$$ |  |

which indicates whether $u$ introduced any topics novel to $v$’s experience.

Approval.
This signal captures explicit evaluative feedback from $u$ on $v$’s content. Let $L^{+}\_{t}(u\!\to\!v)$ and $L^{-}\_{t}(u\!\to\!v)$ denote the counts of likes and dislikes, respectively, that $u$ assigned to $v$’s content during round $t$. The approval signal is computed as:

|  |  |  |
| --- | --- | --- |
|  | $$S^{\mathrm{Appr}}\_{t}(u\rightarrow v)=\begin{cases}0,&L^{+}\_{t}(u\!\to\!v)+L^{-}\_{t}(u\!\to\!v)=0,\\[4.0pt] \dfrac{L^{+}\_{t}(u\!\to\!v)-L^{-}\_{t}(u\!\to\!v)}{\max\{1,\,L^{+}\_{t}(u\!\to\!v)+L^{-}\_{t}(u\!\to\!v)\}},&\text{otherwise.}\end{cases}$$ |  |

This measures the net approval normalized by total engagement, ranging from -1 to 1.

Reciprocity.
This signal quantifies the balance in positive engagement between users over time. Using an exponential moving average to smooth temporal fluctuations:

|  |  |  |
| --- | --- | --- |
|  | $$\hat{L}^{+}\_{t}(u\!\to\!v)=\beta^{\texttt{rec}}\hat{L}^{+}\_{t-1}(u\!\to\!v)+(1-\beta^{\texttt{rec}})L^{+}\_{t}(u\!\to\!v)$$ |  |

where $\beta^{\texttt{rec}}\in(0,1)$ controls the memory persistence. The reciprocity signal then measures the symmetry in smoothed like exchanges:

|  |  |  |
| --- | --- | --- |
|  | $$S\_{t}^{\texttt{rec}}(u\rightarrow v)=1-\left|\frac{\hat{L}\_{t}^{+}(u\rightarrow v)-\hat{L}\_{t}^{+}(v\rightarrow u)}{\hat{L}\_{t}^{+}(u\rightarrow v)+\hat{L}\_{t}^{+}(v\rightarrow u)+\epsilon}\right|$$ |  |

where $\epsilon>0$ ensures numerical stability. This formulation yields values near 1 for balanced relationships and near 0 for highly asymmetric engagement.

Affective Tone.
This signal captures the emotional valence of private communication when explicit feedback is absent. Let $s(a)\in[-1,1]$ represent the sentiment score of action $a$. The affective tone signal is defined as:

|  |  |  |
| --- | --- | --- |
|  | $$S^{\mathrm{Aff}}\_{t}(u\rightarrow v)=\begin{cases}\operatorname{avg}\left\{s(a):\begin{subarray}{c}a\,\in\,\mathcal{B}\_{t},\ \textsc{Sndr}(a)\,=\,u,\\ \textsc{Rcpt}(a)\,=\,v,\ \textsc{Type}(a)\,=\,\texttt{DM}\end{subarray}\right\},&\text{if }L^{+}\_{t}(u\!\to\!v)+L^{-}\_{t}(u\!\to\!v)=0\land\exists\,\texttt{DM}\\ 0,&\text{otherwise.}\end{cases}$$ |  |

This ensures that emotional tone is only considered when no explicit evaluations (likes/dislikes) are present, capturing the unique contribution of affective communication.

## Appendix C Social Network Characteristics

### C.1 Evaluation Metrics

In accordance with the network science literature (see [[5](https://arxiv.org/html/2510.19299v2#bib.bib26)]), we define the following standard notation relevant to the analysis of social networks.

Let $\mathcal{G}=(\mathcal{V},\mathcal{E},A)$ be a (possibly weighted) *directed* network with $|\mathcal{V}|$ nodes and adjacency matrix $A\in\mathbb{R}\_{\geq 0}^{|\mathcal{V}|\times|\mathcal{V}|}$, with

|  |  |  |
| --- | --- | --- |
|  | $$A\_{uv}=\begin{cases}>0,&\text{if}\;(u\to v)\in\mathcal{E},\\ 0,&\text{otherwise},\end{cases}$$ |  |

and let the out-degree of node $u$ be defined by $k\_{u}^{\mathrm{out}}=\sum\_{v}A\_{uv}$, and the in-degree of node $u$ be given by $k\_{u}^{\mathrm{in}}=\sum\_{v}A\_{vu}$. When $\mathcal{G}$ is *undirected*, the matrix $A$ is symmetric, with $A\_{uv}=A\_{vu}$, and we write simply $k\_{u}=\sum\_{v}A\_{uv}$.

Degree distribution.
The out-degree sequence $\{k\_{u}^{\mathrm{out}}:u\in\mathcal{V}\}$ induces the empirical probability mass function

|  |  |  |
| --- | --- | --- |
|  | $$P(k)=\frac{\bigl|\{u:k\_{u}^{\mathrm{out}}=k\}\bigr|}{|\mathcal{V}|}.$$ |  |

Alternatively, one may work with the normalized degree $\tilde{k}\_{u}=k\_{u}^{\mathrm{out}}/(|\mathcal{V}|-1)\in[0,1]$, and analyze its distribution via the scaling relation $P(\tilde{k})\propto\tilde{k}^{-\gamma}$, with the exponent $\gamma$ estimated through statistical inference on the empirical distribution. By the same logic, the in-degree distribution can be determined.

Density.
Assume the edge weights satisfy $w:\mathcal{E}\to[0,1]$. The density of the directed network $\mathcal{G}$ is defined as

|  |  |  |
| --- | --- | --- |
|  | $$\rho(\mathcal{G})=\frac{\sum\_{u\neq v}A\_{uv}}{|\mathcal{V}|\,(|\mathcal{V}|-1)},$$ |  |

which lies in $[0,1]$ and measures the average weight across all possible directed edges. In the unweighted case, the numerator simplifies to $|\mathcal{E}|$, the number of directed edges. In the undirected case, the analogous quantity is

|  |  |  |
| --- | --- | --- |
|  | $$\rho(\mathcal{G}\_{\text{ud}})=\frac{2\sum\_{u<v}A\_{uv}}{|\mathcal{V}|\,(|\mathcal{V}|-1)},$$ |  |

where the factor of 2 ensures normalization, and $\rho(\mathcal{G}\_{\text{ud}})$ similarly lies in $[0,1]$.

Clustering Coefficient.
For each vertex $u\in\mathcal{V}$ in the directed network $\mathcal{G}$, assume $A\_{uu}=0$ (no self-loops). Let the out-degree be $k\_{u}^{\mathrm{out}}=\sum\_{v\in\mathcal{V}}A\_{uv}$. The local directed clustering coefficient, which quantifies the likelihood that the out-neighbors of $u$ are interconnected in a directed sense, is defined by

|  |  |  |
| --- | --- | --- |
|  | $$\kappa\_{u}^{\mathcal{G}}=\frac{\sum\_{\begin{subarray}{c}v,v^{\prime}\in\mathcal{V}\\ v\neq v^{\prime}\end{subarray}}A\_{uv}\,A\_{vv^{\prime}}\,A\_{v^{\prime}u}}{k\_{u}^{\mathrm{out}}\,(k\_{u}^{\mathrm{out}}-1)},$$ |  |

and the global clustering coefficient is $\kappa(\mathcal{G})=(1/|\mathcal{V}|)\sum\_{u\in\mathcal{V}}\kappa\_{u}^{\mathcal{G}}$.
In the undirected network $\mathcal{G}\_{\text{ud}}$, where $A\_{uv}=A\_{vu}$, let $k\_{u}=\sum\_{v\in\mathcal{V}}A\_{uv}$ and define the neighborhood
$\mathcal{N}(u)=\{v\in\mathcal{V}:A\_{uv}>0\}$.
Let $\mathcal{E}\_{u}=\bigl|\{\{v,v^{\prime}\}\subset\mathcal{N}(u):A\_{vv^{\prime}}>0\}\bigr|$ denote the number of edges between neighbors of $u$. The local undirected clustering coefficient is then

|  |  |  |
| --- | --- | --- |
|  | $$\kappa\_{u}^{\mathcal{G}\_{\text{ud}}}=\frac{2\,\mathcal{E}\_{u}}{k\_{u}\,(k\_{u}-1)},$$ |  |

and the global clustering coefficient is $\kappa(\mathcal{G}\_{\text{ud}})=\frac{1}{|\mathcal{V}|}\sum\_{u\in\mathcal{V}}\kappa\_{u}^{\mathcal{G}\_{\text{ud}}}$.
The clustering coefficient quantifies the tendency of the network to form triangles, providing insight into local connectivity patterns that complement degree-based summaries.

Largest Weakly Connected Component.
Given a directed graph $\mathcal{G}=(\mathcal{V},\mathcal{E})$, let $\mathcal{G}\_{\text{ud}}=(\mathcal{V},\mathcal{E}\_{\text{ud}})$ be its underlying undirected graph
$\mathcal{E}\_{\text{ud}}=\bigl\{\{u,v\}:(u\to v)\in\mathcal{E}\text{ or }(v\to u)\in\mathcal{E}\bigr\}$.
A weakly connected component is a maximal subset $\mathcal{X}\subseteq\mathcal{V}$ in which every $u,v\in\mathcal{X}$ is joined by a path in $\mathcal{G}\_{\text{ud}}$. Denote by $\mathcal{X}\_{\max}$ the largest such component; its relative size is

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{LCC}(\mathcal{G})=\frac{|\mathcal{X}\_{\max}|}{|\mathcal{V}|},$$ |  |

computed in $O(|\mathcal{V}|+|\mathcal{E}|)$ time using any standard linear-time algorithm for connected components.

Average Shortest Path Length.
Restrict to the largest weakly connected component $\mathcal{X}\_{\max}$. Define $d(v,u)$ as the length of a shortest directed path from $v$ to $u$,
with the convention $d(v,u)=\infty$ if no such path exists.
By averaging only over reachable pairs, we obtain the typical directed-path length within the LCC,

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{L}(\mathcal{G})=\frac{\sum\_{v\neq u}d(v,u)\,\mathds{1}\{d(v,u)<\infty\}}{\sum\_{v\neq u}\mathds{1}\{d(v,u)<\infty\}},$$ |  |

where $\mathds{1}\{\cdot\}$ is the indicator function.

Community Modularity.
Given a partition $g^{(Q)}:\mathcal{V}\to\{1,\dots,C^{(Q)}\}$ of the nodes into $C^{(Q)}$ communities, and denoting the total edge-weight by $E=\sum\_{u,v}A\_{uv}$, the modularity of $\mathcal{G}$ with respect to $g^{(Q)}$ is defined as

|  |  |  |
| --- | --- | --- |
|  | $$Q(\mathcal{G},g^{(Q)})=\frac{1}{E}\sum\_{u,v=1}^{|\mathcal{V}|}\Bigl(A\_{uv}-\frac{k\_{u}^{\mathrm{out}}\,k\_{v}^{\mathrm{in}}}{E}\Bigr)\;\delta\bigl(g^{(Q)}(v),g^{(Q)}(u)\bigr),$$ |  |

where $\delta$ denotes the Kronecker delta function. For clarity, in the unweighted case, $E=2|\mathcal{E}|$ for undirected graphs and $E=|\mathcal{E}|$ for directed graphs.

Homophily.
Let $g^{(\phi)}:\mathcal{V}\to\{1,\dots,C^{(\phi)}\}$ assign each node to one of $C^{(\phi)}$ groups, and denote by $|\mathcal{V}\_{r}|=|\{i:g^{(\phi)}(i)=r\}|$ the size of group $r$, such that $\sum\_{r=1}^{C^{(\phi)}}|\mathcal{V}\_{r}|=|\mathcal{V}|$. Denoting the total edge-weight by $E=\sum\_{u,v}A\_{uv}$, we define the observed cross-group weight as

|  |  |  |
| --- | --- | --- |
|  | $$\widehat{W}(\mathcal{G},g^{(\phi)})=\sum\_{u,v=1}^{|\mathcal{V}|}A\_{uv}\,\mathds{1}\{g^{(\phi)}(u)\neq g^{(\phi)}(v)\},$$ |  |

and the expected cross-group weight under random mixing as

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}[W(\mathcal{G},g^{(\phi)})]=E\Bigl(1-\sum\_{r=1}^{C^{(\phi)}}\bigl(\tfrac{|\mathcal{V}\_{r}|}{|\mathcal{V}|}\bigr)^{2}\Bigr).$$ |  |

The homophily function $\phi$ is then defined by

|  |  |  |
| --- | --- | --- |
|  | $$\phi(\mathcal{G},g^{(\phi)})=\frac{\widehat{W}(\mathcal{G},g^{(\phi)})}{\mathbb{E}[W(\mathcal{G},g^{(\phi)})]},$$ |  |

where $\phi(\mathcal{G},g^{(\phi)})<1$ indicates homophily (fewer cross-group ties than expected under random mixing), $\phi(\mathcal{G},g^{(\phi)})=1$ indicates random mixing, and $\phi(\mathcal{G},g^{(\phi)})>1$ indicates heterophily. Beyond topology-based homophily, homophily can also be operationalized behaviorally by first inferring user policies and then comparing them across users; see [[42](https://arxiv.org/html/2510.19299v2#bib.bib44)]. Such comparisons allow for assessing a reward-related form of homophily.

### C.2 Degree Distributions

In Sec. [4](https://arxiv.org/html/2510.19299v2#S4 "4 Results ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties"), we presented a set of network characteristics for graphs obtained from the multi-agent LLM simulation. For the coach evaluation, we primarily relied on reward maximization and average network statistics as evaluation metrics for the tie mechanism. Here, we further examine the degree distributions of the final undirected graphs $\mathcal{G}\_{T}$ after applying the conversion threshold $\theta$. Figure [5](https://arxiv.org/html/2510.19299v2#A3.F5 "Figure 5 ‣ C.2 Degree Distributions ‣ Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties") shows the degree distributions under the heuristic tie mechanism without the coach in the planning process, whereas Fig. [6](https://arxiv.org/html/2510.19299v2#A3.F6 "Figure 6 ‣ C.2 Degree Distributions ‣ Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties") presents the same mechanism with the coach. Likewise, Fig. [7](https://arxiv.org/html/2510.19299v2#A3.F7 "Figure 7 ‣ C.2 Degree Distributions ‣ Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties") reports the distributions under the LLM text-based tie mechanism without the coach, and Fig. [8](https://arxiv.org/html/2510.19299v2#A3.F8 "Figure 8 ‣ C.2 Degree Distributions ‣ Appendix C Social Network Characteristics ‣ Learning to Make Friends: Coaching LLM Agents toward Emergent Social Ties") with the coach in the tie reweighting process. The results indicate that the presence of the coach increases the median degree $\tilde{k}$ of the resulting networks, suggesting that coaching induces agents to maintain more active connections on average. The text-based tie formation mechanism yields consistently higher median degrees than the heuristic mechanism across all threshold values, indicating denser and more robust network structures.

Figure 5: Degree distributions for heuristic tie formation without coach.


Figure 6: Degree distributions for heuristic tie formation with coach.


Figure 7: Degree distributions for LLM text-based tie formation without coach.


Figure 8: Degree distributions for LLM text-based tie formation with coach.
