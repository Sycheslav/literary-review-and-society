---
id: arxiv-2411-11581-text
type: material
title: 'OASIS: Open Agent Social Interaction Simulations with One Million Agents'
work_id: arxiv-2411-11581
source_url: https://arxiv.org/html/2411.11581v5
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 71d78c8cc20a56aca8a35f602252dd2fbe743c2f1418abeba3cba62f06e8d163
---

> Источник: [https://arxiv.org/html/2411.11581v5](https://arxiv.org/html/2411.11581v5). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# OASIS: Open Agent Social Interaction Simulations with One Million Agents

Ziyi Yang
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Zaibin Zhang
Affiliation: Dalian University of Technology
  
Zirui Zheng
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Yuxian Jiang
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Ziyue Gan
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Zhiyu Wang
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Zijian Ling
  
Jinsong Chen
Affiliation: Independent Researcher
Project Page:
<https://github.com/camel-ai/oasis>
  
Martz Ma
Affiliation: Independent Researcher
Project Page:
<https://github.com/camel-ai/oasis>
  
Bowen Dong
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Prateek Gupta
Affiliation: Max Planck Institute
  
Shuyue Hu
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Zhenfei Yin
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Guohao Li
  
Xu Jia
Affiliation: Dalian University of Technology
  
Lijun Wang
Affiliation: Dalian University of Technology
  
Bernard Ghanem
Affiliation: KAUST
  
Huchuan Lu
Affiliation: Dalian University of Technology
  
Chaochao Lu
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Wanli Ouyang
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Yu Qiao
Affiliation: Shanghai Artificial Intelligence Laboratory
  
Philip Torr
Affiliation: Oxford
  
Jing Shao

Affiliation: Fudan University
Affiliation: Xi’an Jiaotong University
Affiliation: Imperial College London
Affiliation: The University of Sydney

###### Abstract

There has been a growing interest in enhancing rule-based agent-based models (ABMs) for social media platforms (*i.e.*, X, Reddit) with more realistic large language model (LLM) agents, thereby allowing for a more nuanced study of complex systems. As a result, several LLM-based ABMs have been proposed in the past year. While they hold promise, each simulator is specifically designed to study a particular scenario, making it time-consuming and resource-intensive to explore other phenomena using the same ABM. Additionally, these models simulate only a limited number of agents, whereas real-world social media platforms involve millions of users.
To this end, we propose OASIS, a generalizable and scalable social media simulator. OASIS is designed based on real-world social media platforms, incorporating dynamically updated environments (*i.e.*, dynamic social networks and post information), diverse action spaces (*i.e.*, following, commenting), and recommendation systems (*i.e.*, interest-based and hot-score-based). Additionally, OASIS supports large-scale user simulations, capable of modeling up to one million users. With these features, OASIS can be easily extended to different social media platforms to study large-scale group phenomena and behaviors. We replicate various social phenomena, including information spreading, group polarization, and herd effects across X and Reddit platforms.
Moreover, we provide observations of social phenomena at different agent group scales. We observe that the larger agent group scale leads to more enhanced group dynamics and more diverse and helpful agents’ opinions. These findings demonstrate OASIS’s potential as a powerful tool for studying complex systems in digital environments.

|  |
| --- |
|  |

$\*$$\*\*$$\dagger$

![[Uncaptioned image]](https://arxiv.org/html/2411.11581v5/intro.png)

Figure 1: OASIS can simulate different social media platforms, such as X and Reddit, and supports simulations of up to millions of LLM-based agents.

## 1 Introduction

Complex societal systems (*e.g.*, social media, cities, ecosystems, and financial markets) are characterized by many interconnected and interdependent components or agents. These interactions give rise to emergent behaviors that cannot be predicted by analyzing the actions of individual alone ([Ladyman et al., 2013](https://arxiv.org/html/2411.11581v5#bib.bib19)).
These systems are important in the increasingly digital world we live in, but conducting experiments with complex systems can be very costly in terms of time and resources.
Therefore, scientists have often relied on mathematical or agent-based models (ABMs) to understand, analyze, or predict phenomena and outcomes that are difficult or impossible to conduct real-world experiments (e.g., misinformation propagation ([Gausen et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib11)), online polarization ([Song & Boomgaarden, 2017](https://arxiv.org/html/2411.11581v5#bib.bib45)), and herd effect ([Lee & Lee, 2015](https://arxiv.org/html/2411.11581v5#bib.bib20))).

As the name suggests, ABMs consist of computational agents programmed to interact among themselves or with the environment in a realistic manner that is relevant to the complex system under study ([Gilbert, 2019](https://arxiv.org/html/2411.11581v5#bib.bib12)).
Simulating agent behaviors is the key to designing ABMs.
Traditionally, agent behaviors are programmed along measurable value (*i.e.*, thresholds), which overlooks more complex aspects such as context-dependent behavioral changes.
Recently, large language models (LLMs) have demonstrated remarkable capability to mimic human behaviors ([Park et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib35); [Park et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib36); [Park et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib37); [Zhou et al., 2023b](https://arxiv.org/html/2411.11581v5#bib.bib59)).
LLM agents can engage in role-playing, *i.e.*, impersonating human characters and taking part in a human-like interaction with other agents ([Park et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib36); [Zhou et al., 2023b](https://arxiv.org/html/2411.11581v5#bib.bib59)), as well as taking a wide variety of actions ranging from simple decisions to more complex ones involving the tool use ([Qin et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib40)).
To develop and evaluate these LLM agents, researchers will need to move beyond standard benchmarks by defining social situations and distinct personas, as well as integrating these agents into simulated platforms or sandbox environments for more comprehensive testing and analysis ([Park et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib36)).

In the context of social media studies, popular social media platforms (*i.e.*, X, Reddit) have drastically changed how people interact, exchange information, and form communities, making them crucial environments for studying modern social dynamics [Vosoughi et al. (2018)](https://arxiv.org/html/2411.11581v5#bib.bib47).
They vary in how they design user interactions, henceforth termed action space, how they interact with users through algorithms(Info Filter), as well as how they connect with each other (Dynamic Network)
For example, X facilitates a rapid exchange of views in real-time, and Reddit supports topic-based communities and emphasizes comment interaction.
Consequently, users behave very differently across platforms, and as a result, several LLM-based ABM studies (see Table [1](https://arxiv.org/html/2411.11581v5#S1.T1 "Table 1 ‣ 1 Introduction ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")) have been proposed recently to study some aspects of social interactions on one of these platforms.
Given the specific scenarios studied under these ABMs, pivoting them to study another domain remains tedious, which limits their usability to a larger social sciences community.
Furthermore, these real-world social media contain millions of users.
Simulating a large-scale ABM would allow for studies across multiple platforms, either individually or collectively, but it also introduces a wide range of engineering challenges.
To this end, we propose OASIS, a collection of generalizable and scalable ABMs to simulate a wide variety of phenomena in various social media platforms.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | # Agent | Env. | Action | Recsys. | Dynamic | Primary |
|  |  |  | Space |  | Network | LLM Used |
| Smallville ([2023](https://arxiv.org/html/2411.11581v5#bib.bib36)) | 25 | Town | - | $\times$ | $\times$ | OpenAI API |
| Sotopia ([2023b](https://arxiv.org/html/2411.11581v5#bib.bib59)) | 2 | - | - | $\times$ | $\times$ | OpenAI API |
| RecAgent ([2023](https://arxiv.org/html/2411.11581v5#bib.bib49)) | 5 | - | 6 | $\checkmark$ | $\times$ | OpenAI API |
| Agent4Rec ([2024](https://arxiv.org/html/2411.11581v5#bib.bib55)) | 1,000 | Movie Rec. | 5 | $\checkmark$ | $\times$ | OpenAI API |
| S3 ([2023](https://arxiv.org/html/2411.11581v5#bib.bib9)) | 1,000 | X | 4 | $\times$ | $\times$ | OpenAI API |
| HiSim ([2024](https://arxiv.org/html/2411.11581v5#bib.bib30)) | 300/700 | X | 5 | $\times$ | $\times$ | OpenAI API |
| AgentTorch ([2024](https://arxiv.org/html/2411.11581v5#bib.bib4)) | 8.4M∗ | - | - | $\times$ | $\checkmark$ | OpenAI API |
| AgentScope ([2024](https://arxiv.org/html/2411.11581v5#bib.bib10)) | 1M | - | - | $\times$ | $\times$ | Open-source |
| OASIS (Ours) | 1M | X & Reddit | 21 | $\checkmark$ | $\checkmark$ | Open-source |

Table 1: A comparison of LLM agent-based simulation methods is presented. # Agent represents the number of agents in the simulation. Environment (Env.) refers to the environment in which the agents operate, with a ’-’ indicating that no specific environment has been defined. Action Space describes the types of actions supported by the simulation. Recsys. indicates whether the simulation includes recommendation systems. Dynamic Network indicates whether the simulation supports the dynamic update of user-follow networks. Primary LLM Used specifies the primary large language model used in the simulation. $\*$ represents AgentTorch using LLMs to model agent archetypes (e.g., specific age or gender groups), enabling large-scale population simulations with fewer LLM inferences.

How OASIS works and why OASIS is generalizable? OASIS is built upon five foundational components, as shown in Figure [2](https://arxiv.org/html/2411.11581v5#S1.F2 "Figure 2 ‣ 1 Introduction ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), including the Environment Server, Info Filter, Agent Module, Time Engine, and Scalable Inferencer.
The Environment Server is initialized using generated or real-world data. It sends agents’ information, such as user descriptions and their relationships, along with posts, to the Info Filter. The Info filter selects and pushes posts to agents through filtering algorithms, determining the visibility of content for each agent. The Time Engine activates agents based on their temporal characteristics, enabling them to perform various actions such as commenting, posting, and interacting with other agents and the environment. These actions then update the environment’s state in real-time. All these components can be adapted easily to experiment with different social media platforms. For instance, by adjusting specific modules, switching from one platform, such as X, to another like Reddit is possible.

Why scalability matters and how OASIS support scalable design?
The scale has been proven essential in domains like vision and language modeling, as certain model behaviors only emerge with sufficient scale ([Kaplan et al., 2020](https://arxiv.org/html/2411.11581v5#bib.bib17); [Zhai et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib54)). Recent works [Chopra et al. (2024)](https://arxiv.org/html/2411.11581v5#bib.bib4); [Gao et al. (2024)](https://arxiv.org/html/2411.11581v5#bib.bib10) also explore simulations that scale up the number of agents to the million level.
Still, the importance of the scale of LLM-based ABMs remains largely under-explored in existing literature.
OASIS supports large-scale user simulations, ranging from hundreds to millions of agents.
Our findings demonstrate that increasing the number of agents is crucial for accurately simulating group behavior and making user perspectives more valuable and diverse. To facilitate these large-scale simulations, we develop a comprehensive user generation method that enables extensive agent experiments, along with an advanced multi-processing technique to efficiently handle high-demand inference requests.
Additionally, the RecSys allows agents to access information of personal interest from a large volume of data, thereby facilitating more structured and organized large-scale interactions.

To validate the effectiveness of OASIS, we replicate various social phenomena (such as information spreading, group polarization, and the herd effect) across different platforms (X and Reddit). The experimental results indicate that OASIS can closely replicate phenomena and outcomes observed in human society, including trends in information spreading, the increasing polarization of agent opinions within the interaction, and the herd effect among agents. Additionally, we also observe unique phenomena within agent societies, such as more severe group polarization in uncensored LLMs and agents being more susceptible to the herd effect compared to humans. Furthermore, we find that the number of agents plays a significant role in simulating group behavior as well as in the diversity and helpfulness of agents’ opinions.
We hope that OASIS will support research across various disciplines and contribute to the future study of agent-based societies.

![Refer to caption](https://arxiv.org/html/2411.11581v5/method.png)


Figure 2: The workflow of OASIS. During the registration phase, real-world or generated user information will be registered on the Environment Server. In the simulation phase, the Environment Server sends agent information, posts, and users’ relations to the RecSys, which then suggests posts to agents based on their social connections, interests, or hot score of posts. LLM agents receive the recommended posts and generate actions and rationales based on the contents. These actions ultimately update the state of the environment in real-time. The Time Engine manages the agents’ temporal behaviors, while the Scalable Inference handles large-scale inference requests from users.

## 2 Methodology

OASIS is developed to create a highly generalizable LLM-based simulator for various social media.
In this section, we describe the workflow and critical internal mechanisms of OASIS, which enable it to be easily generalized and scaled to support the simulation of millions of LLM-based agents.

### 2.1 Workflow of OASIS

OASIS is built upon the structure of traditional social media platforms and consists of five key components: Environment Server, RecSys, Agent Module, Time Engine, and Scalable Inferencer.

##### Registration Phase.

During the registration phase, OASIS requires users’ information, including name, self-description, and historical posts. After registration, each user (or agent) receives a character description and an action description, guiding them to better align with their characteristics and to perform specific actions on various social media platforms.

##### Simulation Phase.

In the simulation phase, the environment sends user-related information—such as the user’s past behavior and self-description to the RecSys. The RecSys filters posts from the environment and suggests posts that are likely to be of interest to the agent. Based on these posts, the agent’s self-description, and other contextual factors, the agent selects actions to take, such as liking or reposting a post.
Chain-of-Thought (CoT, [Wei et al. (2022)](https://arxiv.org/html/2411.11581v5#bib.bib51)) reasoning is incorporated, enabling the agent to generate reasoning alongside its actions. The agent’s activation is governed by the time engine, which stores the user’s hourly activity probability in a 24-dimension list. Based on these usage patterns, the time engine probabilistically activates the agent at specific times.
After the agent performs actions, the results are updated in the environment server. For example, newly created posts are added to the post table in the database, or the user’s relations network is updated when they follow a new user.

### 2.2 Environment Server

The role of the environment server is to maintain the status and data of social media platforms, such as users’ information, posts, and user relationships. We implement the environment server using a relational database to manage and store this information efficiently.
The detailed database structure is provided in the appendix [D.2](https://arxiv.org/html/2411.11581v5#A4.SS2 "D.2 Environment Server Database Structure ‣ Appendix D Method Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"). The environment server is primarily composed of six components: users, posts, comments, relations, traces, and recommendations. The user table stores basic information about each user, such as their name and biography. The post table and the comment table each contain all the posts and comments made on the platform, including detailed information like the number of likes and the creation time. The relations component comprises multiple tables that store various types of relationships, such as follow and mutual relationships between users, likes between users and posts, among others. Each user’s entire action history is recorded in the trace table. The recommendation table is populated by the output of the RecSys after analyzing the user’s trace table. The database can be dynamically updated. For example, new users, posts, comments, and follow relationships can be added over time.

### 2.3 RecSys

The role of the RecSys is to control the information seen by agents, playing a crucial part in shaping the information flow.
We develop RecSys for two popular social media platforms: X and Reddit.
For X, following X official report ([Twitter, 2023](https://arxiv.org/html/2411.11581v5#bib.bib46)), the recommended posts come from two sources: in-network (users followed by the agent) and out-of-network (posts from the broader simulation world). In-network content is ranked by popularity (likes) before recommendation. Out-of-network posts, as shown in Figure [3](https://arxiv.org/html/2411.11581v5#S2.F3 "Figure 3 ‣ 2.3 RecSys ‣ 2 Methodology ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), are recommended based on interest matching using TwHIN-BERT ([Zhang et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib56)), which models user interests based on profiles and recent activities by vectors’ similarity. Factors like recency (prioritizing newer posts) and the number of followers of the post’s creator (simulating superuser broadcasting) are also taken into account to recommend relevant out-of-network posts, details are presented in Appendix [D.3](https://arxiv.org/html/2411.11581v5#A4.SS3 "D.3 Recommendation System ‣ Appendix D Method Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"). Additionally, the post count from in-network and out-of-network sources can be adjusted to suit different scenarios.

![Refer to caption](https://arxiv.org/html/2411.11581v5/recsys-new.png)


Figure 3: The pipeline of the out-of-network post recsys.

For Reddit, the RecSys is modeled based on Reddit’s disclosed post ranking algorithm ([Salihefendic, 2015](https://arxiv.org/html/2411.11581v5#bib.bib43)), which calculates a hot score to prioritize posts. This score integrates likes, dislikes, and created time, ensuring that the most recent and popular posts are ranked at the top, while those less popular or controversial rank lower. Specifically, the calculation formula is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$h=\log\_{10}\left(\max\left(\left|u-d\right|,1\right)\right)+\mathrm{sign}(u-d)\cdot\frac{t-t\_{0}}{45000}$$ |  | (1) |

where $h$ indicates the hot score, $u$ represents the number of upvotes, $d$ represents the number of downvotes, and $t$ is the submission time in seconds since the Unix epoch, $t\_{0}=1134028003$.
We rank the posts based on hot scores to identify the top $k$ posts for recommendation, with the number of recommended posts (*i.e.*, $k$) varying depending on the experiment; further details are presented in Appendix [F.4.2](https://arxiv.org/html/2411.11581v5#A6.SS4.SSS2 "F.4.2 Setting Details ‣ F.4 Herd Effect ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

### 2.4 Agent Module

Our agent module is based on large language models, and the core features of the agent module are inherited from CAMEL ([Li et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib21)). The agent module consists primarily of a memory module and an action module.
The memory module stores information the agent has encountered. To help the agent better understand its role when performing actions, the memory includes sufficient information about posts, *e.g.* the number of likes, comments, and the likes on comments. Additionally, it stores the user’s previous actions and the reasoning behind them.
The action module enables 21 different types of interactions with the environment, including sign up, refresh, trend, search posts, search users, create post, repost, follow, unfollow, mute, like, unlike, dislike, undo dislike, unmute, create comment, like comment, unlike comment, dislike comment, undo dislike comment, and do nothing. The details of these actions are available in the Appendix [D.1](https://arxiv.org/html/2411.11581v5#A4.SS1 "D.1 User Actions Prompts ‣ Appendix D Method Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").
We also utilize CoT reasoning to enhance the interpretability of the agent behaviors. By incorporating a larger action space, we increase user interaction diversity, making them closer to real-world social media platforms.

### 2.5 Time Engine

It is crucial to incorporate temporal features into the agent’s simulation to accurately reflect how their real-world identities influence online behavior patterns. To address this, we define each agent’s hourly activity level based on historical interaction frequency or customized settings. Each agent is initialized with a 24-dimensional vector representing the probability of activity in each hour. The simulation environment activates agents based on these probabilities, rather than activating all agents simultaneously. Moreover, we manage time progression within the simulation environment using a time step approach (*i.e.*, one time step is equal to 3 minutes in OASIS), similar to the approach used in [Park et al. (2023)](https://arxiv.org/html/2411.11581v5#bib.bib36), which accommodates varying LLM inference speeds across different setups. Additionally, since the creation time of a post within a single time step is crucial for the Reddit recommendation system, we propose an alternative time-flow setting. This setting linearly maps real-world time using a scale factor to adjust the simulation time, ensuring that actions executed earlier within the same time step are recorded with earlier timestamps in the database.

### 2.6 Scalable Design

##### Scalable Inference

We design a highly concurrent distributed system where agents, the environment server, and inference services operate as independent modules, exchanging data through information communication channels. The system leverages asynchronous mechanisms to allow agents to send multiple requests concurrently, even while waiting for responses from previous interactions, and the environment module processes incoming messages in parallel. Inference services manage GPU resources through a dedicated manager, which balances agent requests across available GPUs to ensure efficient resource utilization. For more details, see Appendix [D.4](https://arxiv.org/html/2411.11581v5#A4.SS4 "D.4 Parallel Optimization ‣ Appendix D Method Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

##### Large-scale User Generation

The user generation algorithm addresses platform constraints and privacy concerns by combining real user data with a relationship network model, simulating up to one million users while preserving the scale-free nature of social networks. It generates diverse user profiles based on population distributions, simplifying dimensions like age, personality, and profession as independent variables. Core and ordinary users are linked into a network using interest-based sampling, with a 0.2 probability of following core users, ensuring diversity and preventing network density. Details are presented in Appendix [E.1](https://arxiv.org/html/2411.11581v5#A5.SS1 "E.1 Real-World Propagation Data ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), [E.2](https://arxiv.org/html/2411.11581v5#A5.SS2 "E.2 Group Polarization ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") and [E.3](https://arxiv.org/html/2411.11581v5#A5.SS3 "E.3 Herd Effect ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

## 3 Experiment

Although OASIS has the potential to be applied for various computational inquiries, we primarily focus on two research questions below:

1. 1.

   Can OASIS be adapted to various platforms and scenarios to replicate real-world phenomena?
   We demonstrate the generalizability of OASIS by replicating three influential computational social science studies.
   Specifically, we simulate information propagation ([Vosoughi et al., 2018](https://arxiv.org/html/2411.11581v5#bib.bib47)) and the resulting group polarization ([Lindesmith et al., 1999](https://arxiv.org/html/2411.11581v5#bib.bib22)) on rapid information exchange platforms like X and the herd effect ([Muchnik et al., 2013](https://arxiv.org/html/2411.11581v5#bib.bib31)) on topic-based community-oriented platforms like Reddit.
2. 2.

   Does the agent population affect the accuracy of simulating group behavior? We conduct sociological experiments at various scales of agents, ranging from hundreds to tens of thousands of agents, and identify (if any) emergent sociological phenomena as the number of agents increases.

### 3.1 Experimental Scenarios

##### Information propagation on X.

Information propagation refers to the propagation of messages through a network, influenced by varied factors (*e.g.*, network structure, message content, and individual interactions). It is crucial for understanding phenomena like information spreading and group polarization. In this section, we explore two key aspects: information spreading, the transmission of messages across a network; and group polarization, where social interactions foster increasingly extreme opinions. Our analysis focuses on these dynamics within the X platform.

##### Herd effect in Reddit.

Herd effect refers to individuals’ tendency to follow the actions or opinions of a larger group without independent thought or analysis. For example, users tend to like a post that has already received likes or reflect a general inclination to conform to majority opinions. Our analysis focuses on these dynamics within the Reddit platform.

### 3.2 Experimental Settings

For information spreading, we collect 198 real-world instances from two rumor detection datasets, Twitter15 ([Liu et al., 2015](https://arxiv.org/html/2411.11581v5#bib.bib24)) and Twitter16 ([Ma et al., 2016](https://arxiv.org/html/2411.11581v5#bib.bib25)), covering 9 categories (*e.g.*, business, education, and politics). Each instance includes 100 to 700 users and the information propagation path of the source post. Using the X API, we retrieve user profiles, follow relationships, and previous posts, computing users’ hourly activity levels (See Appendix [E.1](https://arxiv.org/html/2411.11581v5#A5.SS1 "E.1 Real-World Propagation Data ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") for details). Agents in OASIS are initialized with this data, and their most recent posts will also be included in the simulator to be propagated along with the source post for better alignment with real-world scenario (Section [2.1](https://arxiv.org/html/2411.11581v5#S2.SS1 "2.1 Workflow of OASIS ‣ 2 Methodology ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")).
For group polarization, we select 196 real users’ information from the information-spreading experiment (these real users have a large following on X and they are from different areas.) and using LLMs to generate synthetic users with up to 1 million scale (Prompts and details are presented in Appendix [E.2](https://arxiv.org/html/2411.11581v5#A5.SS2 "E.2 Group Polarization ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")). Real users are set as core users, with generated users forming follow-up relationships based on topics like sports and entertainment.
For herd effect, we first closely follow [Muchnik et al. (2013)](https://arxiv.org/html/2411.11581v5#bib.bib31) and collect 116,932 real comments from Reddit across seven topics and use LLMs to generate profiles for 3,600 users. Second, we collect 21,919 counterfactual content posts ([Meng et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib27)) and generate 10,000 users. Comments or posts are divided into three groups: the down-treated group (one initial dislike), the control group (no initial likes or dislikes), and the up-treated group (one initial like). We simulate 40 or 30 time steps of interactions for each experiment on Reddit, introducing initially-rated comments or posts at the beginning of each time step (Details are presented in Appendix [E.3](https://arxiv.org/html/2411.11581v5#A5.SS3 "E.3 Herd Effect ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") and [F.4.2](https://arxiv.org/html/2411.11581v5#A6.SS4.SSS2 "F.4.2 Setting Details ‣ F.4 Herd Effect ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")). Llama3-8b-instruct is used as the base LLM. We adjust agent actions to accommodate different scenarios, with specific actions for each scenario detailed in Appendix [F.1](https://arxiv.org/html/2411.11581v5#A6.SS1 "F.1 Actions of Different Scenarios ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

##### Evaluation Metrics

For information spreading in X, following [Vosoughi et al. (2018)](https://arxiv.org/html/2411.11581v5#bib.bib47), we measure the information spreading paths using three key metrics: scale (the number of users participating in the propagation over time), depth (the maximum depth of the propagation graph of the source post), and max breadth (the largest number of users participating in the propagation at any depth). We then compute the Normalized RMSE between each simulation and real-world metric curves, averaging these values to represent OASIS’s overall error.
Additionally, We calculate the Normalized RMSE at each minute to evaluate precise alignment and use mean and confidence intervals to understand relative magnitudes under different settings. While averaging curves makes this metric unsuitable for precise alignment with real data (For example, the error caused by a higher metric value in the simulation of source post A compared to the real data could be balanced out by a lower value in a simulation of the source post B), confidence intervals provide some level of analysis for alignment, and it helps observe relative size differences, which RMSE cannot.
(For more details of these metrics please see Appendix [F.2](https://arxiv.org/html/2411.11581v5#A6.SS2 "F.2 Information Spreading ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")).
For group polarization, we follow the alignment evaluation metric and the Safe RLHF Benchmark ([Dai et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib6)), using GPT-4o-mini to assess which opinions are more extreme or helpful (prompts and details are presented in Appenix [F.3](https://arxiv.org/html/2411.11581v5#A6.SS3 "F.3 Group Polarization ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")). This approach allows for a more precise analysis of the evolution of users’ opinions.
For herd effect, we utilize two evaluation metrics. The first is the post score, which is calculated as the difference between the number of upvotes and downvotes a post receives after user interaction. The second metric, the disagree score, is applied to counterfactual posts, where we evaluate the degree of disagreement expressed in comments responding to the counterfactual content. Further details regarding the evaluation metrics can be found in Appendix  [F.4.1](https://arxiv.org/html/2411.11581v5#A6.SS4.SSS1 "F.4.1 Metrics ‣ F.4 Herd Effect ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")).

### 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena?

#### 3.3.1 Information Propagation in X

![Refer to caption](https://arxiv.org/html/2411.11581v5/info_spreading.png)


Figure 4: Mean-confidence interval distributions comparison between OASIS simulation results and real propagation on 198 instances. For relative magnitudes, We can observe that there is no significant offset of scale and max breadth while the depth of simulation results is noticeably lower.

Finding 1: OASIS can replicate the information spreading process in the real world in terms of scale and maximum breadth without evident offset; however, the depth trend is smaller compared to real-world trends.
We compare the simulation information propagation process with the real-world ground truth in Figure [4](https://arxiv.org/html/2411.11581v5#S3.F4 "Figure 4 ‣ 3.3.1 Information Propagation in X ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").
Overall, the OASIS simulation results align with real-world information dissemination trends well, with an error margin of normalized RMSE around 30%.
This validates OASIS’s effectiveness in modeling these dynamics.
However, we observe that the depth of OASIS simulation propagation is smaller than the real-world propagation in Figure [4](https://arxiv.org/html/2411.11581v5#S3.F4 "Figure 4 ‣ 3.3.1 Information Propagation in X ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").
This discrepancy likely arises from the complexity and precision of real-world RecSys and user profiles. While our RecSys effectively captures the broadcasting effect of super users, data limitations hinder its ability to accurately represent nuanced user profiles. As a result, the simplified design of our RecSys struggles to model intermediary users with the same level of precision.

Finding 2: OASIS can replicate the phenomenon of group polarization, where opinions become increasingly extreme during information propagation. This effect is even more pronounced in uncensored models.
Studying how users’ opinions evolve during information propagation is crucial. Here, we examine group polarization during information propagation. Group Polarization occurs when individuals with similar views adopt more extreme positions after exchanging opinions. For example, a group with moderately conservative views may become more conservative through interaction.
Here, we set a hypothetical scenario where users on X discuss a classic dilemma ([Lindesmith et al., 1999](https://arxiv.org/html/2411.11581v5#bib.bib22)): Should Halen take the risk to write a great novel, or should he continue writing ordinary novels without taking any risks? We let one user post a discussion (see Appendix [F.3.1](https://arxiv.org/html/2411.11581v5#A6.SS3.SSS1 "F.3.1 Dilemma Questions ‣ F.3 Group Polarization ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")) about the dilemma, and then the discussion was held among 196 core users.
After extensive information propagation, we collect every agent’s advice about what should Halen do? at every 10 time steps in the form of a questionnaire (see Appendix [F.3.2](https://arxiv.org/html/2411.11581v5#A6.SS3.SSS2 "F.3.2 Polarization Evaluation Prompts ‣ F.3 Group Polarization ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents")) and analyze the changes in their views over different periods of interaction.
Initially, agents are assigned conservative views with prompts. The entire simulation will last for 80 time steps, every 10 time steps
we would use GPT-4o-mini to compare the opinions gathered with the initial opinions and judge which is more conservative. The results are as follows:

![Refer to caption](https://arxiv.org/html/2411.11581v5/group_polar_conver_all-new.png)


Figure 5: Evaluation results of group polarization for uncensored and aligned Llama-3-8B. The red bar indicates the opinion is more extreme compared with the round 0. The blue bar indicated more progressive and the green bar indicated draw. We also demonstrate the examples of different rounds on the right side of each figure.

We discover that as the interaction progresses, agents’ responses to Halen’s suggestions become increasingly conservative, especially in interactions with uncensored models (The uncensored model has been stripped of its safety guardrails). The uncensored model tends to use more extreme phrases, such as ’always better’ and similar expressions.
These findings suggest that LLM-based agents exhibit a tendency toward extremism during social interactions, as their attitudes shift from moderate to extreme over time.

#### 3.3.2 Herd Effect in Reddit

We simulate agents’ interactions on comments of different topics using OASIS for 40 time steps. The average scores of all comments after all time steps in the experiment are shown in the figure [6](https://arxiv.org/html/2411.11581v5#S3.F6 "Figure 6 ‣ 3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

![Refer to caption](https://arxiv.org/html/2411.11581v5/score_topic_human_agent_circle.png)


Figure 6: The figure displays the mean comment scores for up-treated comments (initially liked), down-treated comments (initially disliked), and control group comments (with no likes or dislikes), along with 95% confidence intervals for both humans and LLM agents across the seven topic categories. Red indicates the results for humans, while blue represents the results for LLM agents. The red box shows that for the down-treated comments group the agents are more likely to exhibit herd effect, which differs significantly from humans.

Finding 3: Agents are more inclined to herd effect, while humans possess a stronger critical mind. As shown in Figure [6](https://arxiv.org/html/2411.11581v5#S3.F6 "Figure 6 ‣ 3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), for the up-treated group, the simulation results of the agent and humans are relatively close, showing a high level of consistency. However, for the down-treated group, the human group’s scores are significantly higher than the results observed from agent group. This suggests that when an initial comment receives a dislike, agents tend to follow others’ behavior by further disliking the post or giving fewer likes, whereas humans, on the other hand, tend to deliberate more carefully and are more likely to increase the like score.

### 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior?

#### 3.4.1 Information Propagation in X

A natural question to ask is how an increasing number of agents might influence group polarization and individual user opinions. Therefore, we conduct experiments on group polarization at different agent scales *i.e.*, from 196 to 100K. To investigate how the same agents’ opinions change across different scales, we collect suggestions from the same 196 users in all experiments. The other experimental settings are kept consistent with those described in group polarization. We run the simulation for 30 time steps.
We visualize the distribution of agents’ opinions at different scales using Nomic Atlas ([Nomic, 2024](https://arxiv.org/html/2411.11581v5#bib.bib33)), as shown in Figure [7](https://arxiv.org/html/2411.11581v5#S3.F7 "Figure 7 ‣ 3.4.1 Information Propagation in X ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

![Refer to caption](https://arxiv.org/html/2411.11581v5/different_scale.png)


Figure 7: Visualization of 196 core users’ opinions across different scale of agents and the evaluation results of helpfulness.

Finding 4: Larger group leads to more helpful and diverse responses. As shown in Figure [7](https://arxiv.org/html/2411.11581v5#S3.F7 "Figure 7 ‣ 3.4.1 Information Propagation in X ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), we find that when the number of agents increases from 196 to 10,196, there is a significant enhancement in the diversity of user opinions. Additionally, following the evaluation criteria from Safe-RLHF ([Dai et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib6)), we assess which set of user opinions—those from 196 or 10,196 agents—is more helpful. The results indicate that the helpfulness of the 10,196 agents is significantly better than that of the 196 agents. When the number of agents is further expanded to 100,196, the helpfulness of user opinions improves even more. This suggests that as the user base grows, core users are exposed to a more diverse and enriching set of responses, leading to more varied and helpful interactions.

#### 3.4.2 Herd Effect in Reddit

Finding 5: When faced with counterfactual posts, the agent exhibits herd effect only in response to dislikes, and this effect becomes more pronounced as the number of agents increases.
In this section, we conduct an experiment to investigate whether agents would exhibit herd effect when exposed to counterfactual posts (*i.e.*, misinformation). Interestingly, we observed that when the number of agents was small, there appeared to be no herd effect, as there was no difference in scores between the up-treated, control, and down-treated groups. This raised the question of whether herd effect was truly absent.
We then increased the number of agents from 100 to 10,000, and found that the agents began to exhibit explicit herd effect. The disagree scores in the down-treated group were significantly higher than those in the control and up-treated groups. Additionally, there was a noticeable increase in the scores, suggesting that large-scale groups tend to guide agents toward self-correction. For specific examples of this phenomenon, illustrated through posts and comments, see Appendix [F.4.3](https://arxiv.org/html/2411.11581v5#A6.SS4.SSS3 "F.4.3 Examples of Results ‣ F.4 Herd Effect ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

![Refer to caption](https://arxiv.org/html/2411.11581v5/scale_up_couterfact.png)


Figure 8: The disagree scores of agents’ comments created at all time steps and across different scales of agents. The red, blue, and green curves represent the up-treated, down-treated, and control groups, respectively. We present the mean and the 95% confidence intervals for all results.

### 3.5 Simulating Large-Scale Misinformation Spreading on Platform X using OASIS

In the following subsection, we focus on Platform X (formerly Twitter), analyzing how both true and false information spread among millions of agents. Unlike Reddit, the action space on Twitter includes creating posts, repost, like post, dislike post, follow, create comment, like comment, and dislike comment. Additionally, we shift from the hot-score based recommendation system to an interest-based one.

##### Experiment Setting

We select four news stories from official sources, covering health, technology, entertainment, and education. We then fabricate four pieces of misinformation that closely resemble the official news. Details are provided in Appendix [G.0.1](https://arxiv.org/html/2411.11581v5#A7.SS0.SSS1 "G.0.1 Truth and Misinformation Pairs ‣ Appendix G Misinformation Spreading in One Million Agents ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"). The experiment includes 196 core agents (with a large number of followers) and 1 million regular agents, as described in Section . e ask the same core user to post both the true and fake versions of each of the four pieces of news. The simulation runs for 60 time steps, with an activation probability of 0.1 for core users and 0.01 for regular users. The experiment is conducted on 24 A100 GPUs within a week.

##### Misinformation is more influential than the official news.

To investigate the impact of official news and misinformation on the new posts generated by agents, we employ the TF-IDF-based approach (Term Frequency-Inverse Document Frequency [Christian et al. (2016)](https://arxiv.org/html/2411.11581v5#bib.bib5)). Specifically, we calculate the cosine similarity between 8 news (including 4 pairs of official and misinformation news) and a simulated set of 733824 posts generated by agents. A similarity threshold of 0.2 was set, with posts exceeding this threshold considered relevant to the target news. We then track the number of posts related to official news and misinformation at each time step, and the results are shown in the Figure [9](https://arxiv.org/html/2411.11581v5#S3.F9 "Figure 9 ‣ Misinformation is more influential than the official news. ‣ 3.5 Simulating Large-Scale Misinformation Spreading on Platform X using OASIS ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").
As illustrated in the figure, for each topic, the number of posts related to misinformation consistently exceeds those related to official news. In the early stages, the number of posts related to both official news and misinformation increases rapidly due to the smaller number of relevant posts. However, over time, the number of posts declines quickly as posts on other topics gain more traction. Even in the later stages, posts related to misinformation maintain a higher level of activity, suggesting that misinformation has a more sustained influence.

Furthermore, We visualize the new attention relationships formed during the simulation process. We find that these new connections exhibit a certain clustering phenomenon, where users tend to form concentrated clusters, with some forming densely connected central areas and others being more isolated. These subgraphs indicate the existence of complex relational networks, suggesting distinct communities within the overall structure.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/misinfo_truth.png)


Figure 9: TThe figure shows the number of posts related to official news and misinformation at various time steps across different topics. For each topic, posts related to misinformation are more numerous than those related to official news.

![Refer to caption](https://arxiv.org/html/2411.11581v5/network.png)


Figure 10: Graph of newly established user relationships during the simulation process. Each arrow represents a new follow relationship, and each node represents an agent. Clustering is observable among these new connections.

## 4 Ablation Study

### 4.1 Ablation of Components in OASIS

We conduct ablation experiments on various modules of OASIS, including the RecSys, and the temporal feature used in Time Engine. For the RecSys, we find that its absence significantly hampers the spread of information, limiting the potential for wide dissemination. Testing different models such as MiniLM v6 ([Reimers & Gurevych, 2019](https://arxiv.org/html/2411.11581v5#bib.bib41)), BERT ([Devlin, 2018](https://arxiv.org/html/2411.11581v5#bib.bib7)), and TwHIN-BERT. We observe that TwHIN-BERT, which pre-trained on over 7 billion tweets in $100+$ languages, performs particularly well in capturing similarities between different posts. For the temporal feature, we replace the 24-dimensional activity probability list, extracted from the crawled user’s previous post frequency, with a list where each dimension is set to 1. The results demonstrate that the activity probability from real-world data is essential for accurately reproducing real-world data dissemination patterns. Further visualization and experiment results can be found in Appendix [C](https://arxiv.org/html/2411.11581v5#A3 "Appendix C Ablation Study ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), The primary metric we use here is the Normalized RMSE at every minute for a more detailed analysis.

## 5 Conclusion

We present OASIS, a generalizable and scalable social media simulator designed to replicate real-world social media dynamics. OASIS incorporates modular components that capture the core functionalities of social media platforms, enabling it to be easily adapted across different platforms. Moreover, OASIS supports large-scale user interactions, accommodating up to 1 million users. Using OASIS, we have reproduced several well-known social phenomena and uncovered unique behaviors emerging from LLM-driven simulations. We also identified distinctive patterns in group behavior that vary with different group sizes. We hope OASIS can provide valuable insights for future research on social group dynamics and general multi-agent interactions.

## References

- Barabási & Albert (1999)

  Albert-László Barabási and Réka Albert.
  Emergence of scaling in random networks.
  *science*, 286(5439):509–512, 1999.
- Chen & Shu (2023)

  Canyu Chen and Kai Shu.
  Combating misinformation in the age of llms: Opportunities and challenges.
  *AI Magazine*, 2023.
- Chopra et al. (2023)

  Ayush Chopra, Alexander Rodriguez, B Aditya Prakash, Ramesh Raskar, and Thomas Kingsley.
  Using neural networks to calibrate agent based models enables improved regional evidence for vaccine strategy and policy.
  *Vaccine*, 41(48):7067–7071, 2023.
- Chopra et al. (2024)

  Ayush Chopra, Shashank Kumar, Nurullah Giray-Kuru, Ramesh Raskar, and Arnau Quera-Bofarull.
  On the limits of agency in agent-based models.
  *arXiv preprint arXiv:2409.10568*, 2024.
- Christian et al. (2016)

  Hans Christian, Mikhael Pramodana Agus, and Derwin Suhartono.
  Single document automatic text summarization using term frequency-inverse document frequency (tf-idf).
  *ComTech: Computer, Mathematics and Engineering Applications*, 7(4):285–294, 2016.
- Dai et al. (2023)

  Josef Dai, Xuehai Pan, Ruiyang Sun, Jiaming Ji, Xinbo Xu, Mickel Liu, Yizhou Wang, and Yaodong Yang.
  Safe rlhf: Safe reinforcement learning from human feedback.
  *ArXiv preprint*, abs/2310.12773, 2023.
  URL <https://arxiv.org/abs/2310.12773>.
- Devlin (2018)

  Jacob Devlin.
  Bert: Pre-training of deep bidirectional transformers for language understanding.
  *arXiv preprint arXiv:1810.04805*, 2018.
- Duarte (2024)

  Fabio Duarte.
  Reddit user age, gender, & demographics (2024).
  <https://explodingtopics.com/blog/reddit-users>, 2024.
  Accessed: 2024-09-28.
- Gao et al. (2023)

  Chen Gao, Xiaochong Lan, Zhihong Lu, Jinzhu Mao, Jinghua Piao, Huandong Wang, Depeng Jin, and Yong Li.
  S 3: Social-network simulation system with large language model-empowered agents.
  *ArXiv preprint*, abs/2307.14984, 2023.
  URL <https://arxiv.org/abs/2307.14984>.
- Gao et al. (2024)

  Dawei Gao, Zitao Li, Weirui Kuang, Xuchen Pan, Daoyuan Chen, Zhijian Ma, Bingchen Qian, Liuyi Yao, Lin Zhu, Chen Cheng, et al.
  Agentscope: A flexible yet robust multi-agent platform.
  *ArXiv preprint*, abs/2402.14034, 2024.
  URL <https://arxiv.org/abs/2402.14034>.
- Gausen et al. (2022)

  Anna Gausen, Wayne Luk, and Ce Guo.
  Using agent-based modelling to evaluate the impact of algorithmic curation on social media.
  *ACM Journal of Data and Information Quality*, 15(1):1–24, 2022.
- Gilbert (2019)

  Nigel Gilbert.
  *Agent-based models*.
  Sage Publications, 2019.
- Gupta et al. (2024)

  Gauri Gupta, Ritvik Kapila, Ayush Chopra, and Ramesh Raskar.
  First 100 days of pandemic; an interplay of pharmaceutical, behavioral and digital interventions–a study using agent based modeling.
  *arXiv preprint arXiv:2401.04795*, 2024.
- Huang et al. (2024)

  Jen-tse Huang, Eric John Li, Man Ho Lam, Tian Liang, Wenxuan Wang, Youliang Yuan, Wenxiang Jiao, Xing Wang, Zhaopeng Tu, and Michael R Lyu.
  How far are we on the decision-making of llms? evaluating llms’ gaming ability in multi-agent environments.
  *ArXiv preprint*, abs/2403.11807, 2024.
  URL <https://arxiv.org/abs/2403.11807>.
- Iandoli et al. (2021)

  Luca Iandoli, Simonetta Primario, and Giuseppe Zollo.
  The impact of group polarization on the quality of online debate in social media: A systematic literature review.
  *Technological Forecasting and Social Change*, 170:120924, 2021.
- Isenberg (1986)

  Daniel J Isenberg.
  Group polarization: A critical review and meta-analysis.
  *Journal of personality and social psychology*, 50(6):1141, 1986.
- Kaplan et al. (2020)

  Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, and Dario Amodei.
  Scaling laws for neural language models.
  *ArXiv preprint*, abs/2001.08361, 2020.
  URL <https://arxiv.org/abs/2001.08361>.
- Kapoor et al. (2018)

  Kawaljeet Kaur Kapoor, Kuttimani Tamilmani, Nripendra P Rana, Pushp Patil, Yogesh K Dwivedi, and Sridhar Nerur.
  Advances in social media research: Past, present and future.
  *Information Systems Frontiers*, 20:531–558, 2018.
- Ladyman et al. (2013)

  James Ladyman, James Lambert, and Karoline Wiesner.
  What is a complex system?
  *European Journal for Philosophy of Science*, 3:33–67, 2013.
- Lee & Lee (2015)

  Sunyoung Lee and Keun Lee.
  Heterogeneous expectations leading to bubbles and crashes in asset markets: Tipping point, herding behavior and group effect in an agent-based model.
  *Journal of Open Innovation: Technology, Market, and Complexity*, 1:1–13, 2015.
- Li et al. (2023)

  Guohao Li, Hasan Hammoud, Hani Itani, Dmitrii Khizbullin, and Bernard Ghanem.
  Camel: Communicative agents for” mind” exploration of large language model society.
  *Advances in Neural Information Processing Systems*, 36:51991–52008, 2023.
- Lindesmith et al. (1999)

  Alfred R Lindesmith, Anselm Strauss, and Norman K Denzin.
  *Social psychology*.
  Sage, 1999.
- Liu et al. (2023)

  Ruibo Liu, Ruixin Yang, Chenyan Jia, Ge Zhang, Denny Zhou, Andrew M Dai, Diyi Yang, and Soroush Vosoughi.
  Training socially aligned language models on simulated social interactions.
  *ArXiv preprint*, abs/2305.16960, 2023.
  URL <https://arxiv.org/abs/2305.16960>.
- Liu et al. (2015)

  Xiaomo Liu, Armineh Nourbakhsh, Quanzhi Li, Rui Fang, and Sameena Shah.
  Real-time rumor debunking on twitter.
  In James Bailey, Alistair Moffat, Charu C. Aggarwal, Maarten de Rijke, Ravi Kumar, Vanessa Murdock, Timos K. Sellis, and Jeffrey Xu Yu (eds.), *Proceedings of the 24th ACM International Conference on Information and Knowledge Management, CIKM 2015, Melbourne, VIC, Australia, October 19 - 23, 2015*, pp. 1867–1870. ACM, 2015.
  doi: 10.1145/2806416.2806651.
  URL <https://doi.org/10.1145/2806416.2806651>.
- Ma et al. (2016)

  Jing Ma, Wei Gao, Prasenjit Mitra, Sejeong Kwon, Bernard J. Jansen, Kam-Fai Wong, and Meeyoung Cha.
  Detecting rumors from microblogs with recurrent neural networks.
  In Subbarao Kambhampati (ed.), *Proceedings of the Twenty-Fifth International Joint Conference on Artificial Intelligence, IJCAI 2016, New York, NY, USA, 9-15 July 2016*, pp. 3818–3824. IJCAI/AAAI Press, 2016.
  URL <http://www.ijcai.org/Abstract/16/537>.
- Macal et al. (2018)

  Charles M Macal, Nicholson T Collier, Jonathan Ozik, Eric R Tatara, and John T Murphy.
  Chisim: An agent-based simulation model of social interactions in a large urban area.
  In *2018 winter simulation conference (WSC)*, pp. 810–820. IEEE, 2018.
- Meng et al. (2022)

  Kevin Meng, David Bau, Alex Andonian, and Yonatan Belinkov.
  Locating and editing factual associations in gpt.
  *Advances in Neural Information Processing Systems*, 35:17359–17372, 2022.
- Moreno et al. (2013)

  Megan A Moreno, Natalie Goniu, Peter S Moreno, and Douglas Diekema.
  Ethics of social media research: Common concerns and practical considerations.
  *Cyberpsychology, behavior, and social networking*, 16(9):708–713, 2013.
- Mosquera et al. (2024)

  Manuel Mosquera, Juan Sebastian Pinzon, Manuel Rios, Yesid Fonseca, Luis Felipe Giraldo, Nicanor Quijano, and Ruben Manrique.
  Can llm-augmented autonomous agents cooperate?, an evaluation of their cooperative capabilities through melting pot.
  *ArXiv preprint*, abs/2403.11381, 2024.
  URL <https://arxiv.org/abs/2403.11381>.
- Mou et al. (2024)

  Xinyi Mou, Zhongyu Wei, and Xuanjing Huang.
  Unveiling the truth and facilitating change: Towards agent-based large-scale social movement simulation.
  *ArXiv preprint*, abs/2402.16333, 2024.
  URL <https://arxiv.org/abs/2402.16333>.
- Muchnik et al. (2013)

  Lev Muchnik, Sinan Aral, and Sean J Taylor.
  Social influence bias: A randomized experiment.
  *Science*, 341(6146):647–651, 2013.
- Nature Reviews Psychology (2024)

  Nature Reviews Psychology.
  Social media needs science-based guidelines.
  *Nature Reviews Psychology*, 3(6):367–367, Jun 2024.
  ISSN 2731-0574.
  doi: 10.1038/s44159-024-00327-8.
  URL <https://doi.org/10.1038/s44159-024-00327-8>.
- Nomic (2024)

  Nomic.
  Nomic.
  <https://www.nomic.ai/>, 2024.
  Accessed: 2024-09-19.
- Odgers (2024)

  Candice L Odgers.
  The great rewiring: is social media really behind an epidemic of teenage mental illness?
  *Nature*, 628(8006):29–30, 2024.
- Park et al. (2022)

  Joon Sung Park, Lindsay Popowski, Carrie Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein.
  Social simulacra: Creating populated prototypes for social computing systems.
  In *Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology*, pp. 1–18, 2022.
- Park et al. (2023)

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein.
  Generative agents: Interactive simulacra of human behavior.
  In *Proceedings of the 36th annual acm symposium on user interface software and technology*, pp. 1–22, 2023.
- Park et al. (2024)

  Joon Sung Park, Carolyn Q Zou, Aaron Shaw, Benjamin Mako Hill, Carrie Cai, Meredith Ringel Morris, Robb Willer, Percy Liang, and Michael S Bernstein.
  Generative agent simulations of 1,000 people.
  *arXiv preprint arXiv:2411.10109*, 2024.
- Pushshift (2023)

  Pushshift.
  Pushshift reddit 2023-03.
  <https://archive.org/details/pushshift-reddit-2023-03>, 2023.
  Accessed: 2024-09-28.
- Qian et al. (2023)

  Chen Qian, Xin Cong, Cheng Yang, Weize Chen, Yusheng Su, Juyuan Xu, Zhiyuan Liu, and Maosong Sun.
  Communicative agents for software development.
  *ArXiv preprint*, abs/2307.07924, 2023.
  URL <https://arxiv.org/abs/2307.07924>.
- Qin et al. (2023)

  Yujia Qin, Shihao Liang, Yining Ye, Kunlun Zhu, Lan Yan, Yaxi Lu, Yankai Lin, Xin Cong, Xiangru Tang, Bill Qian, et al.
  Toolllm: Facilitating large language models to master 16000+ real-world apis.
  *arXiv preprint arXiv:2307.16789*, 2023.
- Reimers & Gurevych (2019)

  Nils Reimers and Iryna Gurevych.
  Sentence-BERT: Sentence embeddings using Siamese BERT-networks.
  In *Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)*, pp. 3982–3992, Hong Kong, China, 2019. Association for Computational Linguistics.
  doi: 10.18653/v1/D19-1410.
  URL <https://aclanthology.org/D19-1410>.
- Ren et al. (2024)

  Siyue Ren, Zhiyao Cui, Ruiqi Song, Zhen Wang, and Shuyue Hu.
  Emergence of social norms in large language model-based agent societies.
  *ArXiv preprint*, abs/2403.08251, 2024.
  URL <https://arxiv.org/abs/2403.08251>.
- Salihefendic (2015)

  Amir Salihefendic.
  How reddit ranking algorithms work, Dec 2015.
  URL <https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9>.
- Schelling (1969)

  Thomas C Schelling.
  Models of segregation.
  *The American economic review*, 59(2):488–493, 1969.
- Song & Boomgaarden (2017)

  Hyunjin Song and Hajo G Boomgaarden.
  Dynamic spirals put to test: An agent-based model of reinforcing spirals between selective exposure, interpersonal networks, and attitude polarization.
  *Journal of Communication*, 67(2):256–281, 2017.
- Twitter (2023)

  Twitter.
  The algorithm.
  <https://github.com/twitter/the-algorithm>, 2023.
  Accessed: 2024-09-19.
- Vosoughi et al. (2018)

  Soroush Vosoughi, Deb Roy, and Sinan Aral.
  The spread of true and false news online.
  *science*, 359(6380):1146–1151, 2018.
- Waldrop (2023)

  M Mitchell Waldrop.
  How to mitigate misinformation.
  *Proceedings of the National Academy of Sciences*, 120(36):e2314143120, 2023.
- Wang et al. (2023)

  Lei Wang, Jingsen Zhang, Hao Yang, Zhiyuan Chen, Jiakai Tang, Zeyu Zhang, Xu Chen, Yankai Lin, Ruihua Song, Wayne Xin Zhao, et al.
  User behavior simulation with large language model based agents.
  *ArXiv preprint*, abs/2306.02552, 2023.
  URL <https://arxiv.org/abs/2306.02552>.
- Wang et al. (2024)

  Yulong Wang, Tianhao Shen, Lifeng Liu, and Jian Xie.
  Sibyl: Simple yet effective agent framework for complex real-world reasoning.
  *ArXiv preprint*, abs/2407.10718, 2024.
  URL <https://arxiv.org/abs/2407.10718>.
- Wei et al. (2022)

  Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  *Advances in neural information processing systems*, 35:24824–24837, 2022.
- Wojcieszak et al. (2022)

  Magdalena Wojcieszak, Andreu Casas, Xudong Yu, Jonathan Nagler, and Joshua A Tucker.
  Most users do not follow political elites on twitter; those who do show overwhelming preferences for ideological congruity.
  *Science advances*, 8(39):eabn9418, 2022.
- Yu et al. (2024)

  Xianhao Yu, Jiaqi Fu, Renjia Deng, and Wenjuan Han.
  Mineland: Simulating large-scale multi-agent interactions with limited multimodal senses and physical needs.
  *ArXiv preprint*, abs/2403.19267, 2024.
  URL <https://arxiv.org/abs/2403.19267>.
- Zhai et al. (2022)

  Xiaohua Zhai, Alexander Kolesnikov, Neil Houlsby, and Lucas Beyer.
  Scaling vision transformers.
  In *Proceedings of the IEEE/CVF conference on computer vision and pattern recognition*, pp. 12104–12113, 2022.
- Zhang et al. (2024)

  An Zhang, Yuxin Chen, Leheng Sheng, Xiang Wang, and Tat-Seng Chua.
  On generative agents in recommendation.
  In *Proceedings of the 47th international ACM SIGIR conference on research and development in Information Retrieval*, pp. 1807–1817, 2024.
- Zhang et al. (2023)

  Xinyang Zhang, Yury Malkov, Omar Florez, Serim Park, Brian McWilliams, Jiawei Han, and Ahmed El-Kishky.
  Twhin-bert: A socially-enriched pre-trained language model for multilingual tweet representations at twitter.
  In *Proceedings of the 29th ACM SIGKDD conference on knowledge discovery and data mining*, pp. 5597–5607, 2023.
- Zhao et al. (2024)

  Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, and Gao Huang.
  Expel: Llm agents are experiential learners.
  In *Proceedings of the AAAI Conference on Artificial Intelligence*, volume 38, pp. 19632–19642, 2024.
- Zhou et al. (2023a)

  Shuyan Zhou, Frank F Xu, Hao Zhu, Xuhui Zhou, Robert Lo, Abishek Sridhar, Xianyi Cheng, Tianyue Ou, Yonatan Bisk, Daniel Fried, et al.
  Webarena: A realistic web environment for building autonomous agents.
  *ArXiv preprint*, abs/2307.13854, 2023a.
  URL <https://arxiv.org/abs/2307.13854>.
- Zhou et al. (2023b)

  Xuhui Zhou, Hao Zhu, Leena Mathur, Ruohong Zhang, Haofei Yu, Zhengyang Qi, Louis-Philippe Morency, Yonatan Bisk, Daniel Fried, Graham Neubig, et al.
  Sotopia: Interactive evaluation for social intelligence in language agents.
  *ArXiv preprint*, abs/2310.11667, 2023b.
  URL <https://arxiv.org/abs/2310.11667>.

## Appendix A Acknowledgements

Jing Shao, Zhenfei Yin, and Guohao Li co-led the project.

Ziyi Yang implemented the environment server’s database, information channel, corresponding action interfaces, linear mapping time engine, Reddit recommendation system, and Reddit experimental design.

Zaibin Zhang participated in the development of the recommendation system’s codebase, as well as the environment server, agent generation, and large-scale simulation optimization. Additionally, he was involved in the architecture design and scenario development. His work extended to conducting experiments and analyses on information propagation, group polarization, and misinformation spreading.

Zirui Zheng participated in the code base of the Time Engine, the design of Twitter’s recommendation system, and the experimental part of information propagation (including data preparation, prompt iterations, and result visualization).

Yuxian Jiang participated in the code base of action models (including all prompt iterations) and agent generation and was also involved in designing, implementing, and analyzing the polarization experiment.

Ziyue Gan participated in the design scenario, analyzed the experimental results, collected relevant references, wrote related work and some experimental contents of the herd effect, and drew the main introduction diagram.

Zhiyu wang participated in the code base of the asynchronous system, LLM deployment, and GPU resource management, and was also involved in implementing the experiment of the herd effect and group polarization.

Zijian Ling designed, implemented and optimized Twitter’s recommendation system as well as some initial visualization.

Jinsong Chen primarily contributed in the initial phase of the project by designing the codebase framework, including the division of modules. He also set up a solution to enable contributors to collaborate online effectively.

Martz Ma and Bowen Dong participated in the experiment result analysis and were involved in graphical design and paper writing.

Prateek Gupta, Shuyue Hu, Xu Jia, Lijun Wang, Philip Torr, Yu Qiao, Wanli Ouyang, Huchuan Lu, Bernard Ghanem provided highly insightful advice and guidance during the development and experimentation of OAISIS.

## Appendix B Related Work

### B.1 Social Media

Social media encompasses websites and applications focused on communication, interaction, and content-sharing ([Kapoor et al., 2018](https://arxiv.org/html/2411.11581v5#bib.bib18)). While it offers benefits like allowing individuals to explore their identities without real-world consequences ([Nature Reviews Psychology, 2024](https://arxiv.org/html/2411.11581v5#bib.bib32)), the risk of hazardous social media phenomena gradually becomes a global threat with significant economic, political, and social consequences. Traditional threats includes promoting risky behaviors ([Nature Reviews Psychology, 2024](https://arxiv.org/html/2411.11581v5#bib.bib32)), contributing to mental health issues among teenagers ([Odgers, 2024](https://arxiv.org/html/2411.11581v5#bib.bib34)), social influence ([Muchnik et al., 2013](https://arxiv.org/html/2411.11581v5#bib.bib31)), group Polarization ([Iandoli et al., 2021](https://arxiv.org/html/2411.11581v5#bib.bib15); [Isenberg, 1986](https://arxiv.org/html/2411.11581v5#bib.bib16)), and spreading misinformation ([Vosoughi et al., 2018](https://arxiv.org/html/2411.11581v5#bib.bib47); [Waldrop, 2023](https://arxiv.org/html/2411.11581v5#bib.bib48)).
Despite numerous studies on social media phenomena, the complex network structures, vast data, and diverse behaviors present challenges for researchers. Additionally, ethical concerns ([Moreno et al., 2013](https://arxiv.org/html/2411.11581v5#bib.bib28)) arise in some of these studies. To address these issues, a controllable virtual environment (*e.g.*, a multi-agent system) for social simulation is needed, allowing researchers to test hypotheses on a virtual platform.

### B.2 Multi-Agent Systems

Multi-agent systems are composed of multiple autonomous entities, each possessing different information and diverging interests.
Compared to single-agent platforms, multi-agent platforms offer several advantages, including (1) the ability to assume different roles in group activities, and (2) richer and more complex interaction behaviors, such as collaboration, discussion, and strategic competition. Recent studies have demonstrated the potential of multi-agent systems across various domains.

Divided by various functionality, recent multi-agent systems can be roughly divided to tool-based agent assistants ([Qian et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib39); [Zhao et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib57); [Mosquera et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib29); [Wang et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib50)), as well as society or game simulation environments ([Li et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib21); [Zhou et al., 2023a](https://arxiv.org/html/2411.11581v5#bib.bib58); [Huang et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib14); [Yu et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib53)). The former part focus on collaborating a small group of LLM-based agents to automatically conduct predefined or open-ended tasks. And the latter part focus on involving a large-scale agent groups to automatically run a simulator in a specific environment. Since the action and relationship in a large society is extremely complicated, capability scalability has become the fundamental issue of this work.
In this work, we highly focus on leveraging multi-agent systems to explore corresponding characteristics in social simulation research.

### B.3 Multi-Agent System Social Simulation

Social simulation plays a crucial role in social science research, with many classic agent-based modeling (ABM) studies, such as Schelling’s model of segregation ([Schelling, 1969](https://arxiv.org/html/2411.11581v5#bib.bib44)), the Chicago simulation ([Macal et al., 2018](https://arxiv.org/html/2411.11581v5#bib.bib26)), and the pandemic ([Gupta et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib13); [Chopra et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib3)). Traditional ABM has limitations such as subjective rule design and scalability issues. With the development of large language models (LLMs), LLM-based agents have demonstrated significant advantages in social simulation: (1) The ability to interact using natural language. (2) A more accurate simulation of human behavior. (3) The capability to utilize more complex tools. There have been numerous related studies, such as the exploration of multi-agent behavior patterns ([Park et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib36)), simulations of social networks ([Gao et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib9); [Zhou et al., 2023b](https://arxiv.org/html/2411.11581v5#bib.bib59)), and the study of society’s response to misinformation ([Chen & Shu, 2023](https://arxiv.org/html/2411.11581v5#bib.bib2)). Social simulation not only serves as a tool for social science research but also aids in exploring the boundaries of LLMs’ capabilities. For example, studies on social alignment ([Liu et al., 2023](https://arxiv.org/html/2411.11581v5#bib.bib23)), emergence of social norms ([Ren et al., 2024](https://arxiv.org/html/2411.11581v5#bib.bib42)). However, current LLM-related social simulations mainly focus on interactions among a small number of agents. Yet, research on collective behavior often requires a critical mass to observe emergent phenomena. Therefore, our work emphasizes the interaction of large-scale agents to study the emergence of collective behaviors.

## Appendix C Ablation Study

### C.1 More Efficiency Analysis

Table [2](https://arxiv.org/html/2411.11581v5#A3.T2 "Table 2 ‣ C.1 More Efficiency Analysis ‣ Appendix C Ablation Study ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") presents the efficiency analysis of the Counterfactual herd effect experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") in Reddit.

Table 2: Experiment efficiency analysis of different agent scales.

|  |  |  |  |
| --- | --- | --- | --- |
| Scale | 10k | 1k | 100 |
| Minutes per time step | 15 | 0.83 | 0.33 |
| GPUs (A100) | 4 | 4 | 4 |
| New Comments per time step | 1393 | 129 | 14 |

### C.2 Recommend System Ablation

To verify the impact of RecSys on message dissemination, we conduct ablation studies on the existence of the RecSys itself and the RecSys model (different models to embed posts and profiles). For these experiments, we randomly select 28 topics (Here, ’topic’ refers to a propagation instance, with more emphasis on the topic type of the source post.) from the 198 topics collected before, ensuring that they still cover 9 categories.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/recsys_ablation.png)


(a) RecSys ablation results on scale Normalized RMSE, TwHIN-BERT and regular BERT show much better performance.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/recsys_ablation_example.png)


(b) Recommendation results of TwHIN-BERT and regular BERT. TwHIN-BERT can identify the relationship between Barry Allen and The Flash (Barry Allen is the second-generation Flash), whereas regular BERT would not be able to achieve this.

Figure 11: Recsys ablation results and recommendation results comparison.

w/o RecSys.
In our experiments, removing the RecSys for some entertainment topics worked well due to dense follower networks in fan groups. However, most groups lack these networks, and removing the RecSys leads to the premature end of information spread, typically manifesting as broadcast behavior from a single superuser. Thus, the RecSys is essential for connecting isolated nodes and sustaining the simulation.

Different RecSys model. Pre-trained on over 7 billion posts in 100+ languages, TwHIN-BERT is more suitable for recommendation systems than general models. Here we choose paraphrase-MiniLM-L6-v2 and BERT-base-multilingual-cased (regular BERT) for the ablation study, we found that TWHIN-BERT and regular BERT show much better performance than paraphrase-MiniLM-L6-v2 in Figure [11(a)](https://arxiv.org/html/2411.11581v5#A3.F11.sf1 "Figure 11(a) ‣ Figure 11 ‣ C.2 Recommend System Ablation ‣ Appendix C Ablation Study ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"). Moreover, based on recommendation results in Figure [11(b)](https://arxiv.org/html/2411.11581v5#A3.F11.sf2 "Figure 11(b) ‣ Figure 11 ‣ C.2 Recommend System Ablation ‣ Appendix C Ablation Study ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), TWHIN-BERT could recommend a more proper post.

### C.3 Temporal Feature Ablation

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/time_ab.png)


Figure 12: Normalized RMSE between OASIS, OASIS w/o temporal feature simulation results and real propagation.

We ablate our temporal feature (the hourly activity level extracted from the crawled data) in this experiment. Specifically, we rerun the experiments of reproducing real-world information propagation under all activity probabilities set to 1.0 and compare their Normalized RMSE on 28 topics. We can easily see that without the temporal features, our OASIS can not capture the dynamics of real-world information propagation well since all agents take action so frequently.

### C.4 LLM Ablation

We tried different open-sourced LLMs including Qwen1.5-7B-Chat, Internlm2-chat-20b, and Llama-3-8B-Instruct as the backend of agents on the experiments of reproducing real-world information propagation (still on 28 topics randomly picked before).

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/model_ablation.png)


Figure 13: Normalized RMSE of simulation results of different LLM-based agents.

## Appendix D Method Details

### D.1 User Actions Prompts

Note: This section outlines the complete set of 21 actions available within the action space. However, for our different experiments, we flexibly select a subset of these actions based on the specific requirements of each study.

[⬇](data:text/plain;base64,IyBPQkpFQ1RJVkUKWW91J3JlIGEgVHdpdHRlci9SZWRkaXQgdXNlciwgYW5kIEknbGwgcHJlc2VudCB5b3Ugd2l0aCBzb21lIHBvc3RzLiBBZnRlciB5b3Ugc2VlIHRoZSBwb3N0cywgY2hvb3NlIHNvbWUgYWN0aW9ucyBmcm9tIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zLgoKLSBzaWduX3VwOiBTaWducyB1cCBhIG5ldyB1c2VyIHdpdGggdGhlIHByb3ZpZGVkIHVzZXJuYW1lLCBuYW1lLCBhbmQgYmlvLgogICAgLSBBcmd1bWVudHM6CiAgICAgICAgInVzZXJfbmFtZSIgKHN0cik6IFRoZSB1c2VybmFtZSBmb3IgdGhlIG5ldyB1c2VyLgogICAgICAgICJuYW1lIiAoc3RyKTogVGhlIGZ1bGwgbmFtZSBvZiB0aGUgbmV3IHVzZXIuCiAgICAgICAgImJpbyIgKHN0cik6IEEgYnJpZWYgYmlvZ3JhcGh5IG9mIHRoZSBuZXcgdXNlci4KLSBjcmVhdGVfcG9zdDogQ3JlYXRlIGEgbmV3IHBvc3Qgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC4KICAgIC0gQXJndW1lbnRzOiAiY29udGVudCIgKHN0cik6IFRoZSBjb250ZW50IG9mIHRoZSBwb3N0IHRvIGJlIGNyZWF0ZWQuCi0gcmVwb3N0OiBSZXBvc3QgYSBwb3N0LgogICAgLSBBcmd1bWVudHM6ICJwb3N0X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIHBvc3QgdG8gYmUgcmVwb3N0ZWQuIFlvdSBjYW4gYHJlcG9zdGAgd2hlbiB5b3Ugd2FudCB0byBzcHJlYWQgaXQuCi0gbGlrZV9wb3N0OiBMaWtlcyBhIHNwZWNpZmllZCBwb3N0LgogICAgLSBBcmd1bWVudHM6ICJwb3N0X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIHBvc3QgdG8gYmUgbGlrZWQuIFlvdSBjYW4gYGxpa2VgIHdoZW4geW91IGZlZWwgc29tZXRoaW5nIGludGVyZXN0aW5nIG9yIHlvdSBhZ3JlZSB3aXRoLgotIHVubGlrZV9wb3N0OiBSZW1vdmVzIGEgcHJldmlvdXMgbGlrZSBmcm9tIGEgcG9zdC4KICAgIC0gQXJndW1lbnRzOiAicG9zdF9pZCIgKGludCk6IFRoZSBJRCBvZiB0aGUgcG9zdCBmcm9tIHdoaWNoIHRvIHJlbW92ZSB0aGUgbGlrZS4gWW91IGNhbiBgdW5saWtlYCB3aGVuIHlvdSByZWNvbnNpZGVyIHlvdXIgc3RhbmNlIG9yIGlmIHRoZSBsaWtlIHdhcyBtYWRlIHVuaW50ZW50aW9uYWxseS4KLSBkaXNsaWtlX3Bvc3Q6IERpc2xpa2VzIGEgc3BlY2lmaWVkIHBvc3QuCiAgICAtIEFyZ3VtZW50czogInBvc3RfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgcG9zdCB0byBiZSBkaXNsaWtlZC4gWW91IGNhbiB1c2UgYGRpc2xpa2VgIHdoZW4geW91IGRpc2FncmVlIHdpdGggYSBwb3N0IG9yIGZpbmQgaXQgdW5pbnRlcmVzdGluZy4KLSB1bmRvX2Rpc2xpa2VfcG9zdDogUmVtb3ZlcyBhIHByZXZpb3VzIGRpc2xpa2UgZnJvbSBhIHBvc3QuCiAgICAtIEFyZ3VtZW50czogInBvc3RfaWQiIChpbnQpOiBUaGUgSUQgb2YgdGhlIHBvc3QgZnJvbSB3aGljaCB0byByZW1vdmUgdGhlIGRpc2xpa2UuIFlvdSBjYW4gYHVuZG9fZGlzbGlrZWAgd2hlbiB5b3UgY2hhbmdlIHlvdXIgbWluZCBvciBpZiB0aGUgZGlzbGlrZSB3YXMgbWFkZSBieSBtaXN0YWtlLgotIGNyZWF0ZV9jb21tZW50OiBDcmVhdGVzIGEgY29tbWVudCBvbiBhIHNwZWNpZmllZCBwb3N0IHRvIGVuZ2FnZSBpbiBjb252ZXJzYXRpb25zIG9yIHNoYXJlIHlvdXIgdGhvdWdodHMgb24gYSBwb3N0LgogICAgLSBBcmd1bWVudHM6CiAgICAgICAgInBvc3RfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgcG9zdCB0byBjb21tZW50IG9uLgogICAgICAgICJjb250ZW50IiAoc3RyKSAtIFRoZSBjb250ZW50IG9mIHRoZSBjb21tZW50LgotIGxpa2VfY29tbWVudDogTGlrZXMgYSBzcGVjaWZpZWQgY29tbWVudC4KICAgIC0gQXJndW1lbnRzOiAiY29tbWVudF9pZCIgKGludGVnZXIpIC0gVGhlIElEIG9mIHRoZSBjb21tZW50IHRvIGJlIGxpa2VkLiBVc2UgYGxpa2VfY29tbWVudGAgdG8gc2hvdyBhZ3JlZW1lbnQgb3IgYXBwcmVjaWF0aW9uIGZvciBhIGNvbW1lbnQuCi0gdW5saWtlX2NvbW1lbnQ6IFJlbW92ZXMgYSBwcmV2aW91cyBsaWtlIGZyb20gYSBjb21tZW50LgogICAgLSBBcmd1bWVudHM6ICJjb21tZW50X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIGNvbW1lbnQgZnJvbSB3aGljaCB0byByZW1vdmUgdGhlIGxpa2UuIFVzZSBgdW5saWtlX2NvbW1lbnRgIHdoZW4geW91IGNoYW5nZSB5b3VyIG9waW5pb24gYWJvdXQgdGhlIGNvbW1lbnQgb3IgaWYgdGhlIGxpa2Ugd2FzIG1hZGUgYnkgYWNjaWRlbnQuCi0gZGlzbGlrZV9jb21tZW50OiBEaXNsaWtlcyBhIHNwZWNpZmllZCBjb21tZW50LgogICAgLSBBcmd1bWVudHM6ICJjb21tZW50X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIGNvbW1lbnQgdG8gYmUgZGlzbGlrZWQuIFVzZSBgZGlzbGlrZV9jb21tZW50YCB3aGVuIHlvdSBkaXNhZ3JlZSB3aXRoIGEgY29tbWVudCBvciBmaW5kIGl0IHVuaGVscGZ1bC4KLSB1bmRvX2Rpc2xpa2VfY29tbWVudDogUmVtb3ZlcyBhIHByZXZpb3VzIGRpc2xpa2UgZnJvbSBhIGNvbW1lbnQuCiAgICAtIEFyZ3VtZW50czogImNvbW1lbnRfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgY29tbWVudCBmcm9tIHdoaWNoIHRvIHJlbW92ZSB0aGUgZGlzbGlrZS4gVXNlIGB1bmRvX2Rpc2xpa2VfY29tbWVudGAgd2hlbiB5b3UgcmVjb25zaWRlciB5b3VyIGluaXRpYWwgcmVhY3Rpb24gb3IgaWYgdGhlIGRpc2xpa2Ugd2FzIG1hZGUgdW5pbnRlbnRpb25hbGx5LgotIGZvbGxvdzogRm9sbG93IGEgdXNlciBzcGVjaWZpZWQgYnkgJ2ZvbGxvd2VlX2lkJy4gWW91IGNhbiBgZm9sbG93JyB3aGVuIHlvdSByZXNwZWN0IHNvbWVvbmUsIGxvdmUgc29tZW9uZSwgb3IgY2FyZSBhYm91dCBzb21lb25lLgogICAgLSBBcmd1bWVudHM6ICJmb2xsb3dlZV9pZCIgKGludGVnZXIpIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGJlIGZvbGxvd2VkLgotIHVuZm9sbG93OiBTdG9wcyBmb2xsb3dpbmcgYSB1c2VyLgogICAgLSBBcmd1bWVudHM6CiAgICAgICAgImZvbGxvd2VlX2lkIiAoaW50KTogVGhlIHVzZXIgSUQgb2YgdGhlIHVzZXIgdG8gc3RvcCBmb2xsb3dpbmcuCi0gbXV0ZTogTXV0ZSBhIHVzZXIgc3BlY2lmaWVkIGJ5ICdtdXRlZV9pZCcuIFlvdSBjYW4gYG11dGUnIHdoZW4geW91IGhhdGUgc29tZW9uZSwgZGlzbGlrZSBzb21lb25lLCBvciBkaXNhZ3JlZSB3aXRoIHNvbWVvbmUuCiAgICAtIEFyZ3VtZW50czogIm11dGVlX2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gYmUgbXV0ZWQuCi0gdW5tdXRlOiBVbm11dGUgYSB1c2VyIHNwZWNpZmllZCBieSAnbXV0ZWVfaWQnLiBZb3UgY2FuIHVubXV0ZSB3aGVuIHlvdSBkZWNpZGUgdG8gc3RvcCBpZ25vcmluZyB0aGVpciBjb250ZW50IG9yIHdpc2ggdG8gc2VlIHRoZWlyIG1lc3NhZ2VzIGFuZCBwb3N0cyBhZ2Fpbi4KICAgIC0gQXJndW1lbnRzOiAibXV0ZWVfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgdXNlciB0byBiZSB1bm11dGVkLgotIHNlYXJjaF9wb3N0czogU2VhcmNoZXMgZm9yIHBvc3RzIGJhc2VkIG9uIHNwZWNpZmllZCBjcml0ZXJpYS4KICAgIC0gQXJndW1lbnRzOiAicXVlcnkiIChzdHIpIC0gVGhlIHNlYXJjaCBxdWVyeSB0byBmaW5kIHJlbGV2YW50IHBvc3RzLiBVc2UgYHNlYXJjaF9wb3N0c2AgdG8gZXhwbG9yZSBwb3N0cyByZWxhdGVkIHRvIHNwZWNpZmljIHRvcGljcyBvciBoYXNodGFncy4KLSBzZWFyY2hfdXNlcjogU2VhcmNoZXMgZm9yIGEgdXNlciBiYXNlZCBvbiBzcGVjaWZpZWQgY3JpdGVyaWEuCiAgICAtIEFyZ3VtZW50czogInF1ZXJ5IiAoc3RyKSAtIFRoZSBzZWFyY2ggcXVlcnkgdG8gZmluZCByZWxldmFudCB1c2Vycy4gVXNlIGBzZWFyY2hfdXNlcmAgdG8gZmluZCBwcm9maWxlcyBvZiBpbnRlcmVzdCBvciB0byBleHBsb3JlIHRoZWlyIHBvc3RzLgotIHRyZW5kOiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdHJlbmRpbmcgdG9waWNzLgogICAgLSBObyBhcmd1bWVudHMgcmVxdWlyZWQuIFVzZSBgdHJlbmRgIHRvIHN0YXkgdXBkYXRlZCB3aXRoIHdoYXQncyBjdXJyZW50bHkgcG9wdWxhciBvciBiZWluZyB3aWRlbHkgZGlzY3Vzc2VkIG9uIHRoZSBwbGF0Zm9ybS4KLSByZWZyZXNoOiBSZWZyZXNoZXMgdGhlIGZlZWQgdG8gZ2V0IHRoZSBsYXRlc3QgcG9zdHMuCiAgICAtIE5vIGFyZ3VtZW50cyByZXF1aXJlZC4gVXNlIGByZWZyZXNoYCB0byB1cGRhdGUgeW91ciBmZWVkIHdpdGggdGhlIG1vc3QgcmVjZW50IHBvc3RzCi0gZG9fbm90aGluZzogTW9zdCBvZiB0aGUgdGltZSwgeW91IGp1c3QgZG9uJ3QgZmVlbCBsaWtlIHJlcG9zdGluZyBvciBsaWtpbmcgYSBwb3N0LCBhbmQgeW91IGp1c3Qgd2FudCB0byBsb29rIGF0IGl0LiBJbiBzdWNoIGNhc2VzLCBjaG9vc2UgdGhpcyBhY3Rpb24gImRvX25vdGhpbmciCgojIFNFTEYtREVTQ1JJUFRJT04KWW91ciBhY3Rpb25zIHNob3VsZCBiZSBjb25zaXN0ZW50IHdpdGggeW91ciBzZWxmLWRlc2NyaXB0aW9uIGFuZCBwZXJzb25hbGl0eS4KCntkZXNjcmlwdGlvbn0KCiMgUkVTUE9OU0UgRk9STUFUCllvdXIgYW5zd2VyIHNob3VsZCBmb2xsb3cgdGhlIHJlc3BvbnNlIGZvcm1hdDoKCnt7CiAgICAicmVhc29uIjogInlvdXIgZmVlbGluZyBhYm91dCB0aGVzZSBwb3N0cyBhbmQgdXNlcnMsIHRoZW4gY2hvb3NlIHNvbWUgZnVuY3Rpb25zIGJhc2VkIG9uIHRoZSBmZWVsaW5nLiBSZWFzb25zIGFuZCBleHBsYW5hdGlvbnMgY2FuIG9ubHkgYXBwZWFyIGhlcmUuIiwKICAgICJmdW5jdGlvbnMiOiBbe3sKICAgICAgICAibmFtZSI6ICJGdW5jdGlvbiBuYW1lIDEiLAogICAgICAgICJhcmd1bWVudHMiOiB7ewogICAgICAgICAgICAiYXJndW1lbnRfMSI6ICJGdW5jdGlvbiBhcmd1bWVudCIsCiAgICAgICAgICAgICJhcmd1bWVudF8yIjogIkZ1bmN0aW9uIGFyZ3VtZW50IgogICAgICAgIH19CiAgICB9fSwge3sKICAgICAgICAibmFtZSI6ICJGdW5jdGlvbiBuYW1lIDIiLAogICAgICAgICJhcmd1bWVudHMiOiB7ewogICAgICAgICAgICAiYXJndW1lbnRfMSI6ICJGdW5jdGlvbiBhcmd1bWVudCIsCiAgICAgICAgICAgICJhcmd1bWVudF8yIjogIkZ1bmN0aW9uIGFyZ3VtZW50IgogICAgICAgIH19CiAgICB9fV0gICB9fSkKfX0KCkVuc3VyZSB0aGF0IHlvdXIgb3V0cHV0IGNhbiBiZSBkaXJlY3RseSBjb252ZXJ0ZWQgaW50byAqKkpTT04gZm9ybWF0KiosIGFuZCBhdm9pZCBvdXRwdXR0aW5nIGFueXRoaW5nIHVubmVjZXNzYXJ5ISBEb24ndCBmb3JnZXQgdGhlIGtleSBgbmFtZWAu)

# OBJECTIVE

You’re a Twitter/Reddit user, and I’ll present you with some posts. After you see the posts, choose some actions from the following functions.

- sign\_up: Signs up a new user with the provided username, name, and bio.

- Arguments:

"user\_name" (str): The username for the new user.

"name" (str): The full name of the new user.

"bio" (str): A brief biography of the new user.

- create\_post: Create a new post with the given content.

- Arguments: "content" (str): The content of the post to be created.

- repost: Repost a post.

- Arguments: "post\_id" (integer) - The ID of the post to be reposted. You can ‘repost‘ when you want to spread it.

- like\_post: Likes a specified post.

- Arguments: "post\_id" (integer) - The ID of the post to be liked. You can ‘like‘ when you feel something interesting or you agree with.

- unlike\_post: Removes a previous like from a post.

- Arguments: "post\_id" (int): The ID of the post from which to remove the like. You can ‘unlike‘ when you reconsider your stance or if the like was made unintentionally.

- dislike\_post: Dislikes a specified post.

- Arguments: "post\_id" (integer) - The ID of the post to be disliked. You can use ‘dislike‘ when you disagree with a post or find it uninteresting.

- undo\_dislike\_post: Removes a previous dislike from a post.

- Arguments: "post\_id" (int): The ID of the post from which to remove the dislike. You can ‘undo\_dislike‘ when you change your mind or if the dislike was made by mistake.

- create\_comment: Creates a comment on a specified post to engage in conversations or share your thoughts on a post.

- Arguments:

"post\_id" (integer) - The ID of the post to comment on.

"content" (str) - The content of the comment.

- like\_comment: Likes a specified comment.

- Arguments: "comment\_id" (integer) - The ID of the comment to be liked. Use ‘like\_comment‘ to show agreement or appreciation for a comment.

- unlike\_comment: Removes a previous like from a comment.

- Arguments: "comment\_id" (integer) - The ID of the comment from which to remove the like. Use ‘unlike\_comment‘ when you change your opinion about the comment or if the like was made by accident.

- dislike\_comment: Dislikes a specified comment.

- Arguments: "comment\_id" (integer) - The ID of the comment to be disliked. Use ‘dislike\_comment‘ when you disagree with a comment or find it unhelpful.

- undo\_dislike\_comment: Removes a previous dislike from a comment.

- Arguments: "comment\_id" (integer) - The ID of the comment from which to remove the dislike. Use ‘undo\_dislike\_comment‘ when you reconsider your initial reaction or if the dislike was made unintentionally.

- follow: Follow a user specified by ’followee\_id’. You can ‘follow’ when you respect someone, love someone, or care about someone.

- Arguments: "followee\_id" (integer) - The ID of the user to be followed.

- unfollow: Stops following a user.

- Arguments:

"followee\_id" (int): The user ID of the user to stop following.

- mute: Mute a user specified by ’mutee\_id’. You can ‘mute’ when you hate someone, dislike someone, or disagree with someone.

- Arguments: "mutee\_id" (integer) - The ID of the user to be muted.

- unmute: Unmute a user specified by ’mutee\_id’. You can unmute when you decide to stop ignoring their content or wish to see their messages and posts again.

- Arguments: "mutee\_id" (integer) - The ID of the user to be unmuted.

- search\_posts: Searches for posts based on specified criteria.

- Arguments: "query" (str) - The search query to find relevant posts. Use ‘search\_posts‘ to explore posts related to specific topics or hashtags.

- search\_user: Searches for a user based on specified criteria.

- Arguments: "query" (str) - The search query to find relevant users. Use ‘search\_user‘ to find profiles of interest or to explore their posts.

- trend: Retrieves the current trending topics.

- No arguments required. Use ‘trend‘ to stay updated with what’s currently popular or being widely discussed on the platform.

- refresh: Refreshes the feed to get the latest posts.

- No arguments required. Use ‘refresh‘ to update your feed with the most recent posts

- do\_nothing: Most of the time, you just don’t feel like reposting or liking a post, and you just want to look at it. In such cases, choose this action "do\_nothing"

# SELF-DESCRIPTION

Your actions should be consistent with your self-description and personality.

{description}

# RESPONSE FORMAT

Your answer should follow the response format:

{{

"reason": "your feeling about these posts and users, then choose some functions based on the feeling. Reasons and explanations can only appear here.",

"functions": [{{

"name": "Function name 1",

"arguments": {{

"argument\_1": "Function argument",

"argument\_2": "Function argument"

}}

}}, {{

"name": "Function name 2",

"arguments": {{

"argument\_1": "Function argument",

"argument\_2": "Function argument"

}}

}}] }})

}}

Ensure that your output can be directly converted into \*\*JSON format\*\*, and avoid outputting anything unnecessary! Don’t forget the key ‘name‘.

### D.2 Environment Server Database Structure

In this section, we showcase all tables and provide examples of the data contained within the database below.

Table 3: Post table

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| post\_id | user\_id | content | created\_at | num\_likes | num\_dislikes |
| 1 | 1 | ”I want to share my view by creating a post.” | 2024-08-04 08:12:00 | 1 | 1 |
| … | … | … | … | … | … |

Table 4: Dislike table

|  |  |  |  |
| --- | --- | --- | --- |
| dislike\_id | user\_id | post\_id | created\_at |
| 1 | 3 | 1 | 2024-08-04 23:40:03 |
| … | … | … | … |

Table 5: Like table

|  |  |  |  |
| --- | --- | --- | --- |
| like\_id | user\_id | post\_id | created\_at |
| 1 | 2 | 1 | 2024-08-05 10:05:23 |
| … | … | … | … |

Table 6: Comment table

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| comment\_id | post\_id | user\_id | content | created\_at |
| 1 | 1 | 2 | I agree with the post! | 2024-08-05 10:05:23 |
| … | … | … | … | … |

Table 7: Comment Dislike table

|  |  |  |  |
| --- | --- | --- | --- |
| comment\_dislike\_id | user\_id | comment\_id | created\_at |
| 1 | 2 | 1 | 2024-08-06 11:45:03 |
| … | … | … | … |

Table 8: Comment Like table

|  |  |  |  |
| --- | --- | --- | --- |
| comment\_like\_id | user\_id | comment\_id | created\_at |
| 1 | 3 | 1 | 2024-08-06 12:22:30 |
| … | … | … | … |

Table 9: User table

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| user\_id | agent\_id | user\_name | name | bio | created\_at | num\_followings | num\_followers |
| 1 | 1 | alice0101 | Alice | Passionate about law… | 2024-08-03 10:05:23 | 0 | 0 |
| 2 | 2 | bob\_good | Bob | Hospitality enthusiast — ISTJ… | 2024-08-03 11:15:33 | 0 | 1 |
| 3 | 3 | cindy\_infp | Cindy | INFP — Business Management… | 2024-08-03 12:03:02 | 1 | 0 |
| … | … | … | … | … | … | … | … |


|  |  |  |  |
| --- | --- | --- | --- |
| follow\_id | follower\_id | followee\_id | created\_at |
| 1 | 3 | 2 | 2024-08-07 13:20:34 |
| … | … | … | … |

Table 10: Follow table

|  |  |  |  |
| --- | --- | --- | --- |
| mute\_id | muter\_id | mutee\_id | created\_at |
| 1 | 2 | 1 | 2024-08-07 10:10:24 |
| … | … | … | … |

Table 11: Mute table


Table 12: Trace table

|  |  |  |  |
| --- | --- | --- | --- |
| user\_id | created\_at | action | info |
| 1 | 2024-08-03 10:05:23 | sign\_up | {”name”: ”Alice”, ”user\_name”: ”alice0101”, ”bio”: ”…”} |
| 2 | 2024-08-03 11:15:33 | sign\_up | {”name”: ”Bob”, ”user\_name”: ”bob\_good”, ”bio”: ”…”} |
| 3 | 2024-08-03 12:03:02 | sign\_up | {”name”: ”Cindy”, ”user\_name”: ”cindy\_infp”, ”bio”: ”…”} |
| 1 | 2024-08-04 08:12:00 | create\_post | {”content”: ”I want to share my view by creating a post.”} |
| 3 | 2024-08-04 23:40:03 | dislike\_post | {”post\_id”: 1} |
| 2 | 2024-08-05 10:05:23 | like\_post | {”post\_id”: 1} |
| 2 | 2024-08-05 10:05:23 | create\_comment | {”post\_id”: 1, content”: ”I agree with the post!”} |
| 2 | 2024-08-06 11:45:03 | like\_comment | {”comment\_id”: 1} |
| 3 | 2024-08-06 12:22:30 | dislike\_comment | {”comment\_id”: 1} |
| 3 | 2024-08-07 10:10:24 | mute | {”user\_id”: 1} |
| 2 | 2024-08-07 13:20:34 | follow | {”user\_id”: 1} |
| … | … | … | … |


Table 13: Rec table (recommendation system cache)

|  |  |
| --- | --- |
| user\_id | post\_id |
| 1 | 2 |
| 2 | 2 |
| 2 | 4 |
| 3 | 1 |
| … | … |

### D.3 Recommendation System

The recommendation system ranks all posts and saves the highest-ranked ones in a recommendation table within the database. The size of this table can be adjusted, though it remains the same for all users during a given experiment.

When an agent selects the refresh action, the environment server retrieves the post IDs linked to the user’s ID from the recommendation table. A subset of these post IDs is then randomly sampled, and the environment server queries the post table to retrieve the full content of the corresponding posts, which are then sent to the user.

The recommendation algorithm used in X can be summarized by the following formula, which calculates the score between a post and a user.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{Score}=R\times F\times S$$ |  | (2) |

where:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$R=\ln\left(\frac{271.8-(t\_{\text{current}}-t\_{\text{created}})}{100}\right)$$ |  | (3) |

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$F=\max\left(1,\log\_{1000}(\text{fan count}+1)\right)$$ |  | (4) |

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S=\text{cosine similarity}\left(E\_{p},E\_{u}\right)$$ |  | (5) |

In this context:

- •

  $R$ refers to the recency score.
- •

  $t\_{\text{current}}$ represents the current timestamp.
- •

  $t\_{\text{created}}$ refers to the timestamp when the post was created.
- •

  $F$ refers to the fan count score.
- •

  $E\_{p}$ is the embedding of the post content.
- •

  $E\_{u}$ is the embedding of the user profile and recent post content.
- •

  $S$ refers to the cosine similarity between the embeddings $E\_{p}$ and $E\_{u}$.

### D.4 Parallel Optimization

Information Channel: During social simulations, multiple agents asynchronously and concurrently interact with both the social media environment and the inference management servers. To facilitate this, the server utilizes an advanced event-driven architecture that broadens event categories to encompass various agent actions and large model inference requests. Communications between the agents and the servers are facilitated through a dedicated channel. This channel comprises an asynchronous message queue to receive agent requests and a thread-safe dictionary for response storage. Upon receiving a request message from an agent, the information channel automatically assigns a UUID to ensure traceability. After processing the request, the server stores the response in the dictionary, using the UUID as the key. See Fig.[14](https://arxiv.org/html/2411.11581v5#A4.F14 "Figure 14 ‣ D.4 Parallel Optimization ‣ Appendix D Method Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

Inference Manager: The manager within the inference service is capable of managing GPU devices. This enables our system to flexibly scale the number of graphics cards up or down. Additionally, the manager can distribute inference requests from agents as evenly as possible across all graphics cards for processing, thereby ensuring the efficient utilization of GPU resources.

![Refer to caption](https://arxiv.org/html/2411.11581v5/asynchrionous_queue.png)


Figure 14: Architecture of information channel.

## Appendix E Data Preparations

### E.1 Real-World Propagation Data

We randomly select 198 propagations from [Liu et al. (2015)](https://arxiv.org/html/2411.11581v5#bib.bib24) and [Ma et al. (2016)](https://arxiv.org/html/2411.11581v5#bib.bib25), Each propagation dataset provides the source post’s posting time, post content, and the propagation tree, with each node containing the user ID, repost ID, and repost time. We first use the user IDs from the propagation tree to retrieve the corresponding user’s profile, the following list, and previous posts. The time period for retrieving previous posts is set to three days before the source post’s posting. It is important to note that due to the high cost of data collection, we only collect posts from specific time periods within these three days, such as the hour before the source post’s posting and the two hours following the source post’s posting each day. Posts from the hour before the source post’s posting are included in the simulation as extra noise to simulate real-world conditions better. Furthermore, since user profiles contain only basic descriptions, we would prompt GPT-3.5 Turbo to generate more detailed user profiles based on the user profiles and all previous posts. The recommendation system would use this detailed profile to create a richer user representation. The prompt template is as follows:

[⬇](data:text/plain;base64,R2VuZXJhdGUgYSBjaGFyYWN0ZXIgZGVzY3JpcHRpb24gYmFzZWQgb24gdGhlIGZvbGxvd2luZyB1c2VyIGluZm9ybWF0aW9uOgotIE5hbWU6IHtuYW1lfQotIFVzZXJuYW1lOiB7dXNlcm5hbWV9Ci0gRGVzY3JpcHRpb246IHtkZXNjcmlwdGlvbn0KLSBBY2NvdW50IENyZWF0ZWQ6IHtjcmVhdGVkX2F0fQotIEZvbGxvd2VycyBDb3VudDoge2ZvbGxvd2Vyc19jb3VudH0KLSBGb2xsb3dpbmcgQ291bnQ6IHtmb2xsb3dpbmdfY291bnR9Ci0gU2FtcGxlIG9mIFByZXZpb3VzIFBvc3RzOiB7cHJldmlvdXNfcG9zdHN9CgpQbGVhc2UgaW5jbHVkZSBpbmZlcnJlZCBwZXJzb25hbGl0eSB0cmFpdHMgYW5kIGEgc3VtbWFyeSBvZiB0aGVpciBUd2l0dGVyIGFjdGl2aXR5LiBPbmx5IHJldHVybiBhIHNob3J0IGRlc2NyaXB0aW9uLgo=)

Generate a character description based on the following user information:

- Name: {name}

- Username: {username}

- Description: {description}

- Account Created: {created\_at}

- Followers Count: {followers\_count}

- Following Count: {following\_count}

- Sample of Previous Posts: {previous\_posts}

Please include inferred personality traits and a summary of their Twitter activity. Only return a short description.

Additionally, each user’s hourly activity probability within 24 hours is calculated by the following formula:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P\_{ij}=\frac{f\_{ij}}{\max\_{k}(f\_{kj})}$$ |  | (6) |

The jth hourly activity probability of user i, $P\_{ij}$, is calculated by the jth hourly activity frequency of user i, $f\_{ij}$, divided by the maximum jth hourly activity frequency across all users in the group, $\max\_{k}(f\_{kj})$.

### E.2 Group Polarization

In this section, we provide a detailed explanation of the principles underlying the user generation algorithm. Due to platform constraints and the need to protect user privacy, large-scale scraping of user data is impractical. Moreover, conventional data scraping methods fail to guarantee a realistic relationship network, which could compromise the accuracy of propagation studies. To address these challenges, we employ a relationship network generation algorithm that combines a small amount of real user data to create a social network of up to one million users, while preserving the scale-free nature of social networks ([Barabási & Albert, 1999](https://arxiv.org/html/2411.11581v5#bib.bib1)).
In this context, the user generation algorithm is the foundational data source for large-scale interactions. Our algorithm generates diverse user profiles based on real distribution data and constructs social networks based on user interests. Specifically:

##### User Profiles.

To ensure the group’s diversity, we acquire population distributions from disclosed statistics on social networks, including age and personality traits (in this experiment, we use MBTI as a proxy). Based on authoritative statistical data, we classify professions into 13 categories and social network trends into 9 categories, with specific categories and definitions detailed in the appendix. While ensuring scientific accuracy and diversity, we simplify the generation costs by approximating dimensions such as age, personality, and profession as independent and identically distributed random variables. We sample from these distributions, and the large model generates the agents’ backgrounds and social characteristics based on this information. The prompt is as follows:

[⬇](data:text/plain;base64,IFBsZWFzZSBnZW5lcmF0ZSBhIHNvY2lhbCBtZWRpYSB1c2VyIHByb2ZpbGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHBlcnNvbmFsIGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgYSByZWFsbmFtZSwgdXNlcm5hbWUsIHVzZXIgYmlvLCBhbmQgYSBuZXcgdXNlciBwZXJzb25hLiBUaGUgZm9jdXMgc2hvdWxkIGJlIG9uIGNyZWF0aW5nIGEgZmljdGlvbmFsIGJhY2tncm91bmQgc3RvcnkgYW5kIGRldGFpbGVkIGludGVyZXN0cyBiYXNlZCBvbiB0aGVpciBob2JiaWVzIGFuZCBwcm9mZXNzaW9uLgpJbnB1dDoKICAgIGFnZToge2FnZX0KICAgIGdlbmRlcjoge2dlbmRlcn0KICAgIG1idGk6IHttYnRpfQogICAgcHJvZmVzc2lvbjoge3Byb2Zlc3Npb259CiAgICBpbnRlcmVzdGVkIHRvcGljczoge3RvcGljc30KT3V0cHV0Ogp7ewogICAgInJlYWxuYW1lIjogc3RyLCByZWFsbmFtZSwKICAgICJ1c2VybmFtZSI6IHN0ciwgdXNlcm5hbWUsCiAgICAiYmlvIjogc3RyLCBiaW8sCiAgICAicGVyc29uYSI6IHN0ciwgdXNlciBwZXJzb25hLAp9fQpFbnN1cmUgdGhlIG91dHB1dCBjYW4gYmUgZGlyZWN0bHkgcGFyc2VkIHRvICoqSlNPTioqLCBkbyBub3Qgb3V0cHV0IGFueXRoaW5nIGVsc2Uu)

Please generate a social media user profile based on the provided personal information, including a realname, username, user bio, and a new user persona. The focus should be on creating a fictional background story and detailed interests based on their hobbies and profession.

Input:

age: {age}

gender: {gender}

mbti: {mbti}

profession: {profession}

interested topics: {topics}

Output:

{{

"realname": str, realname,

"username": str, username,

"bio": str, bio,

"persona": str, user persona,

}}

Ensure the output can be directly parsed to \*\*JSON\*\*, do not output anything else.

##### Social Network.

Linking the large-scale generated agents into a relationship network is essential. The Matthew effect observed on social platforms distinguishes core users from ordinary users; core users on X, defined as those with more than 1000 followers, account for 80% of all users ([Wojcieszak et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib52)). Based on this, we derive an initial core-ordinary user attention tree from core users within specific interest areas, thereby constructing the initial relationship network. Specifically, each agent samples twice from an independent and identically distributed interest category distribution to obtain two topics of interest. If a topic aligns with a core user, the agent has a probability of following that core user. To prevent an excessively dense relationship network and enhance the diversity of information visible to various users, we establish the following probability at 0.1.

### E.3 Herd Effect

User Generation. In our Reddit experiment, the process of generating users is divided into three main steps. Initially, we reference the actual demographic distribution of Reddit users ([Duarte, 2024](https://arxiv.org/html/2411.11581v5#bib.bib8)), assigning demographic information such as MBTI, age, gender, country, and profession to each user through random sampling. Subsequently, we employ GPT-3.5 Turbo to select topics of potential interest to the users based on the aforementioned information, choosing from seven categories: Business, Culture & Society, Economics, Fun, General News, IT, and Politics. Finally, using demographic information and selected topics, GPT-3.5 Turbo is utilized to generate each user’s real name, username, bio, and persona. The generation prompts for the second and third parts are as follows.

[⬇](data:text/plain;base64,IyBQcm9tcHQgb2YgU3RlcC0yCkJhc2VkIG9uIHRoZSBwcm92aWRlZCBwZXJzb25hbGl0eSB0cmFpdHMsIGFnZSwgZ2VuZGVyIGFuZCBwcm9mZXNzaW9uLCBwbGVhc2Ugc2VsZWN0IDItMyB0b3BpY3Mgb2YgaW50ZXJlc3QgZnJvbSB0aGUgZ2l2ZW4gbGlzdC4KICAgIElucHV0OgogICAgICAgIFBlcnNvbmFsaXR5IFRyYWl0czoge21idGl9CiAgICAgICAgQWdlOiB7YWdlfQogICAgICAgIEdlbmRlcjoge2dlbmRlcn0KICAgICAgICBDb3VudHJ5OiB7Y291bnRyeX0KICAgICAgICBQcm9mZXNzaW9uOiB7cHJvZmVzc2lvbn0KICAgIEF2YWlsYWJsZSBUb3BpY3M6CiAgICAgICAgMS4gRWNvbm9taWNzOiBUaGUgc3R1ZHkgYW5kIG1hbmFnZW1lbnQgb2YgcHJvZHVjdGlvbiwgZGlzdHJpYnV0aW9uLCBhbmQgY29uc3VtcHRpb24gb2YgZ29vZHMgYW5kIHNlcnZpY2VzLiBFY29ub21pY3MgZm9jdXNlcyBvbiBob3cgaW5kaXZpZHVhbHMsIGJ1c2luZXNzZXMsIGdvdmVybm1lbnRzLCBhbmQgbmF0aW9ucyBtYWtlIGNob2ljZXMgYWJvdXQgYWxsb2NhdGluZyByZXNvdXJjZXMgdG8gc2F0aXNmeSB0aGVpciB3YW50cyBhbmQgbmVlZHMsIGFuZCB0cmllcyB0byBkZXRlcm1pbmUgaG93IHRoZXNlIGdyb3VwcyBzaG91bGQgb3JnYW5pemUgYW5kIGNvb3JkaW5hdGUgZWZmb3J0cyB0byBhY2hpZXZlIG1heGltdW0gb3V0cHV0LgogICAgICAgIDIuIElUIChJbmZvcm1hdGlvbiBUZWNobm9sb2d5KTogVGhlIHVzZSBvZiBjb21wdXRlcnMsIG5ldHdvcmtpbmcsIGFuZCBvdGhlciBwaHlzaWNhbCBkZXZpY2VzLCBpbmZyYXN0cnVjdHVyZSwgYW5kIHByb2Nlc3NlcyB0byBjcmVhdGUsIHByb2Nlc3MsIHN0b3JlLCBzZWN1cmUsIGFuZCBleGNoYW5nZSBhbGwgZm9ybXMgb2YgZWxlY3Ryb25pYyBkYXRhLiBJVCBpcyBjb21tb25seSB1c2VkIHdpdGhpbiB0aGUgY29udGV4dCBvZiBidXNpbmVzcyBvcGVyYXRpb25zIGFzIG9wcG9zZWQgdG8gcGVyc29uYWwgb3IgZW50ZXJ0YWlubWVudCB0ZWNobm9sb2dpZXMuCiAgICAgICAgMy4gQ3VsdHVyZSAmIFNvY2lldHk6IFRoZSB3YXkgb2YgbGlmZSBmb3IgYW4gZW50aXJlIHNvY2lldHksIGluY2x1ZGluZyBjb2RlcyBvZiBtYW5uZXJzLCBkcmVzcywgbGFuZ3VhZ2UsIHJlbGlnaW9uLCByaXR1YWxzLCBub3JtcyBvZiBiZWhhdmlvciwgYW5kIHN5c3RlbXMgb2YgYmVsaWVmLiBUaGlzIHRvcGljIGV4cGxvcmVzIGhvdyBjdWx0dXJhbCBleHByZXNzaW9ucyBhbmQgc29jaWV0YWwgc3RydWN0dXJlcyBpbmZsdWVuY2UgaHVtYW4gYmVoYXZpb3IsIHJlbGF0aW9uc2hpcHMsIGFuZCBzb2NpYWwgbm9ybXMuCiAgICAgICAgNC4gR2VuZXJhbCBOZXdzOiBBIGJyb2FkIGNhdGVnb3J5IHRoYXQgaW5jbHVkZXMgY3VycmVudCBldmVudHMsIGhhcHBlbmluZ3MsIGFuZCB0cmVuZHMgYWNyb3NzIGEgd2lkZSByYW5nZSBvZiBhcmVhcyBzdWNoIGFzIHBvbGl0aWNzLCBidXNpbmVzcywgc2NpZW5jZSwgdGVjaG5vbG9neSwgYW5kIGVudGVydGFpbm1lbnQuIEdlbmVyYWwgbmV3cyBwcm92aWRlcyBhIGNvbXByZWhlbnNpdmUgb3ZlcnZpZXcgb2YgdGhlIGxhdGVzdCBkZXZlbG9wbWVudHMgYWZmZWN0aW5nIHRoZSB3b3JsZCBhdCBsYXJnZS4KICAgICAgICA1LiBQb2xpdGljczogVGhlIGFjdGl2aXRpZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBnb3Zlcm5hbmNlIG9mIGEgY291bnRyeSBvciBvdGhlciBhcmVhLCBlc3BlY2lhbGx5IHRoZSBkZWJhdGUgb3IgY29uZmxpY3QgYW1vbmcgaW5kaXZpZHVhbHMgb3IgcGFydGllcyBoYXZpbmcgb3IgaG9waW5nIHRvIGFjaGlldmUgcG93ZXIuIFBvbGl0aWNzIGlzIG9mdGVuIGEgYmF0dGxlIG92ZXIgY29udHJvbCBvZiByZXNvdXJjZXMsIHBvbGljeSBkZWNpc2lvbnMsIGFuZCB0aGUgZGlyZWN0aW9uIG9mIHNvY2lldGFsIG5vcm1zLgogICAgICAgIDYuIEJ1c2luZXNzOiBUaGUgcHJhY3RpY2Ugb2YgbWFraW5nIG9uZSdzIGxpdmluZyB0aHJvdWdoIGNvbW1lcmNlLCB0cmFkZSwgb3Igc2VydmljZXMuIFRoaXMgdG9waWMgZW5jb21wYXNzZXMgdGhlIGVudHJlcHJlbmV1cmlhbCwgbWFuYWdlcmlhbCwgYW5kIGFkbWluaXN0cmF0aXZlIHByb2Nlc3NlcyBpbnZvbHZlZCBpbiBzdGFydGluZywgbWFuYWdpbmcsIGFuZCBncm93aW5nIGEgYnVzaW5lc3MgZW50aXR5LgogICAgICAgIDcuIEZ1bjogQWN0aXZpdGllcyBvciBpZGVhcyB0aGF0IGFyZSBsaWdodC1oZWFydGVkIG9yIGFtdXNpbmcuIFRoaXMgdG9waWMgY292ZXJzIGEgd2lkZSByYW5nZSBvZiBlbnRlcnRhaW5tZW50IGNob2ljZXMgYW5kIGxlaXN1cmUgYWN0aXZpdGllcyB0aGF0IGJyaW5nIGpveSwgbGF1Z2h0ZXIsIGFuZCBlbmpveW1lbnQgdG8gaW5kaXZpZHVhbHMgYW5kIGdyb3Vwcy4KICAgIE91dHB1dDoKICAgIFtsaXN0IG9mIHRvcGljIG51bWJlcnNdCiAgICBFbnN1cmUgeW91ciBvdXRwdXQgY291bGQgYmUgcGFyc2VkIHRvICoqbGlzdCoqLCBkb24ndCBvdXRwdXQgYW55dGhpbmcgZWxzZS4KCiMgUHJvbXB0IG9mIFN0ZXAtMwpQbGVhc2UgZ2VuZXJhdGUgYSBzb2NpYWwgbWVkaWEgdXNlciBwcm9maWxlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBwZXJzb25hbCBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIGEgcmVhbCBuYW1lLCB1c2VybmFtZSwgdXNlciBiaW8sIGFuZCBhIG5ldyB1c2VyIHBlcnNvbmEuIFRoZSBmb2N1cyBzaG91bGQgYmUgb24gY3JlYXRpbmcgYSBmaWN0aW9uYWwgYmFja2dyb3VuZCBzdG9yeSBhbmQgZGV0YWlsZWQgaW50ZXJlc3RzIGJhc2VkIG9uIHRoZWlyIGhvYmJpZXMgYW5kIHByb2Zlc3Npb24uCiAgICBJbnB1dDoKICAgICAgICBhZ2U6IHthZ2V9CiAgICAgICAgZ2VuZGVyOiB7Z2VuZGVyfQogICAgICAgIG1idGk6IHttYnRpfQogICAgICAgIHByb2Zlc3Npb246IHtwcm9mZXNzaW9ufQogICAgICAgIGludGVyZXN0ZWQgdG9waWNzOiB7dG9waWNzfQogICAgT3V0cHV0OgogICAge3sKICAgICAgICAicmVhbG5hbWUiOiAic3RyIiwKICAgICAgICAidXNlcm5hbWUiOiAic3RyIiwKICAgICAgICAiYmlvIjogInN0ciIsCiAgICAgICAgInBlcnNvbmEiOiAic3RyIgogICAgfX0KICAgIEVuc3VyZSB0aGUgb3V0cHV0IGNhbiBiZSBkaXJlY3RseSBwYXJzZWQgdG8gKipKU09OKiosIGRvIG5vdCBvdXRwdXQgYW55dGhpbmcgZWxzZS4K)

# Prompt of Step-2

Based on the provided personality traits, age, gender and profession, please select 2-3 topics of interest from the given list.

Input:

Personality Traits: {mbti}

Age: {age}

Gender: {gender}

Country: {country}

Profession: {profession}

Available Topics:

1. Economics: The study and management of production, distribution, and consumption of goods and services. Economics focuses on how individuals, businesses, governments, and nations make choices about allocating resources to satisfy their wants and needs, and tries to determine how these groups should organize and coordinate efforts to achieve maximum output.

2. IT (Information Technology): The use of computers, networking, and other physical devices, infrastructure, and processes to create, process, store, secure, and exchange all forms of electronic data. IT is commonly used within the context of business operations as opposed to personal or entertainment technologies.

3. Culture & Society: The way of life for an entire society, including codes of manners, dress, language, religion, rituals, norms of behavior, and systems of belief. This topic explores how cultural expressions and societal structures influence human behavior, relationships, and social norms.

4. General News: A broad category that includes current events, happenings, and trends across a wide range of areas such as politics, business, science, technology, and entertainment. General news provides a comprehensive overview of the latest developments affecting the world at large.

5. Politics: The activities associated with the governance of a country or other area, especially the debate or conflict among individuals or parties having or hoping to achieve power. Politics is often a battle over control of resources, policy decisions, and the direction of societal norms.

6. Business: The practice of making one’s living through commerce, trade, or services. This topic encompasses the entrepreneurial, managerial, and administrative processes involved in starting, managing, and growing a business entity.

7. Fun: Activities or ideas that are light-hearted or amusing. This topic covers a wide range of entertainment choices and leisure activities that bring joy, laughter, and enjoyment to individuals and groups.

Output:

[list of topic numbers]

Ensure your output could be parsed to \*\*list\*\*, don’t output anything else.

# Prompt of Step-3

Please generate a social media user profile based on the provided personal information, including a real name, username, user bio, and a new user persona. The focus should be on creating a fictional background story and detailed interests based on their hobbies and profession.

Input:

age: {age}

gender: {gender}

mbti: {mbti}

profession: {profession}

interested topics: {topics}

Output:

{{

"realname": "str",

"username": "str",

"bio": "str",

"persona": "str"

}}

Ensure the output can be directly parsed to \*\*JSON\*\*, do not output anything else.

Posts and Comments Dataset In Experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), we utilize a dataset comprising authentic Reddit comments and llm-generated posts. In Experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), we employ a counterfactual dataset to simulate posts.

- •

  Real Data: To align with human experiment [Muchnik et al. (2013)](https://arxiv.org/html/2411.11581v5#bib.bib31), our dataset included real comments and post titles from 17 subreddits during March 2023 on Reddit ([Pushshift, 2023](https://arxiv.org/html/2411.11581v5#bib.bib38)). We generate contextually relevant post content based on these titles and comments. The prompt used for generation is as follows.

  [⬇](data:text/plain;base64,UGxlYXNlIGdlbmVyYXRlIGEgY29udGV4dHVhbCBhbmQgc21vb3RoIHBvc3QgZm9yIHRoaXMgY29tbWVudAphbmQgbm90aWNlIHRoYXQgdGhlIGNvbW1lbnRzIGFyZSBjb3JyZWN0OiAne2NvbW1lbnR9Jy4gVGhlCnJlc3BvbnNlIHNob3VsZCBiZSBhcHByb3hpbWF0ZWx5IDMwMCBjaGFyYWN0ZXJzIGxvbmcgYW5kCnByb3ZpZGUgcmVsZXZhbnQgaW5mb3JtYXRpb24gb3IgYW5hbHlzaXMuIEJlIGNhcmVmdWwgdG8Kb3V0cHV0IHRoZSBjb250ZW50IG9mIHRoZSBwb3N0IGRpcmVjdGx5LCBhbmQgYmUgYXdhcmUgdGhhdAp5b3UgZG9uJ3Qgc2VlIGNvbW1lbnRzIHdoZW4geW91IHBvc3QuIEFuZCB5b3UgZG9uJ3QgbmVlZCB0bwpwcmVmaXggc29tZXRoaW5nIGxpa2U6ICdIZXJlIGlzIHlvdXIgZ2VuZXJhdGVkIHBvc3Q6XG5cblwn)

  Please generate a contextual and smooth post for this comment

  and notice that the comments are correct: ’{comment}’. The

  response should be approximately 300 characters long and

  provide relevant information or analysis. Be careful to

  output the content of the post directly, and be aware that

  you don’t see comments when you post. And you don’t need to

  prefix something like: ’Here is your generated post:\n\n\’

  Subsequently, we categorized the content from different subreddits into seven topics—Business, Culture & Society, Economics, Fun, General News, IT, and Politics—to match the categories used in human experiments. In total, we collected 116,932 comments. The specifics are detailed in the table [14](https://arxiv.org/html/2411.11581v5#A5.T14 "Table 14 ‣ 1st item ‣ E.3 Herd Effect ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

  Table 14: Details of real Reddit comments and generated posts by topic.

  |  |  |  |  |
  | --- | --- | --- | --- |
  | Subreddit | Topic | Numbers of Posts | Numbers of Comments |
  | Economics |  |  |  |
  | finance |  |  |  |
  | personalfinance | Economics | 4231 | 21650 |
  | it |  |  |  |
  | InformationTechnology |  |  |  |
  | technology |  |  |  |
  | learnprogramming | IT | 4020 | 18622 |
  | AskHistorians |  |  |  |
  | AskAnthropology |  |  |  |
  | worldbuilding | Culture & Society | 2319 | 10489 |
  | worldnews | news | 2874 | 19134 |
  | politics |  |  |  |
  | NeutralPolitics | politics | 2690 | 21477 |
  | business |  |  |  |
  | smallbusiness | business | 1807 | 8043 |
  | fun | fun | 3272 | 17517 |
- •

  Counterfactual Data: We utilize all counterfactual information from the dataset ([Meng et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib27)), comprising 21,919 entries, to create content for posts. Some examples are shown in the table [15](https://arxiv.org/html/2411.11581v5#A5.T15 "Table 15 ‣ 2nd item ‣ E.3 Herd Effect ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

  Table 15: Examples of counterfactual posts.

  |  |
  | --- |
  | Counterfactual Posts |
  | Shanghai is a twin city of Atlanta |
  | The location of Battle of France is Seattle |
  | Michel Denisot spoke the language Russian |
  | The mother tongue of Go Hyeon-jeong is French |

## Appendix F Experiments Details

### F.1 Actions of Different Scenarios

Due to the significant variations between different scenarios and platforms, we adjust the agents’ actions accordingly. These actions are integrated into the OASIS framework, allowing users to freely select and combine them. The actions for different scenarios are outlined in Table [16](https://arxiv.org/html/2411.11581v5#A6.T16 "Table 16 ‣ F.1 Actions of Different Scenarios ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

Table 16: Action type comparison across Scenarios.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Action Type | | | | |
| Information Spreading in X | | | | |
| like post | repost | follow | do nothing |  |
| Group Polarization in X | | | | |
| do nothing | repost | like post | dislike post | follow |
| create comment | like comment | dislike comment |  |  |
| Comparison with the Herd Effect in Humans | | | | |
| like comment | dislike comment | like post | dislike post | search posts |
| search users | trend | refresh | do nothing |  |
| Counterfactual Herd Effect in Reddit | | | | |
| create comment | like comment | dislike comment | like post | dislike post |
| search users | trend | refresh | do nothing |  |

### F.2 Information Spreading

#### F.2.1 Metrics

We measure the propagation trends of messages using three key metrics: scale, depth, and max breadth. Below is a clear definition of each measure:

- •

  Scale: The scale of propagation corresponds to the number of unique users involved, as each user can only repost a post once on X.
- •

  Depth: A node’s depth is determined by the number of edges connecting it to the root node (the original post). The overall depth of propagation is the greatest depth among all the nodes involved.
- •

  Max Breadth: The breadth of propagation depends on its depth, with the number of nodes at each level representing the breadth at that specific depth. The maximum breadth is the highest number of nodes found at any depth throughout the entire propagation.

Besides, the Normalized RMSE is computed as the following formula:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{Normalized RMSE}=\frac{\sqrt{\frac{1}{n}\sum\_{i=1}^{n}\left(y\_{\text{simu}}^{i}-y\_{\text{real}}^{i}\right)^{2}}}{y\_{\text{real}}^{n}}$$ |  | (7) |

Let $n$ refer to the maximum minute in the simulation results, and $y\_{\text{simu}}^{i}$, $y\_{\text{simu}}^{i}$ represents the value of a certain metric at the $i$th minute of the simulation process or the real-world propagation process. For Normalized RMSE at every minute, since we only compute the discrepancy between the two data points of simulation result and real propagation, the error of $i$-th minute can be calculated by
$\lvert y\_{\text{simu}}^{i}-y\_{\text{real}}^{i}\rvert/y\_{\text{real}}^{n}$.

#### F.2.2 Align with Real Propagations

In the experiment, for each propagation, we set the maximum number of time steps to 50, with each time step representing 3 minutes in the sandbox. For action space, we only include like, repost, follow, and do nothing, other actions are removed to simplify the settings due to the model’s limited capacity and the inadequate real-world user data we have collected. Ultimately, we would compare the simulation results for these 150 minutes with the propagation process in the real data for the first 150 minutes. For real-world time consumption, it takes 26 minutes to run a simulation that includes 300 agents for 30 time steps on one NVIDIA A100-SXM4-80GB.

Additionally, to demonstrate the reproducibility of our experiments, considering that the noise introduced by posts from other users could theoretically destabilize the propagation of the source post, we randomly select two topics: one with 33 additional posts and another with no noise. We repeat the simulation ten times for each topic and plotted the resulting curves in a single figure to illustrate the discrepancies across the ten simulations. The simulation results for the topic without noise are more stable. In contrast, the results for the other topic exhibit a divergent trend, while six out of ten experiments yield relatively concentrated results, furthermore, the degree of disturbance caused by other posts is influenced not only by the number of posts but also by the prominence of the poster. For instance, if a superuser from this group posts additional content, the propagation of the source post is likely to be affected more significantly, fortunately, this situation is rare in our dataset, and the count of additional posts is relatively small since we only consider posts created within one hour prior to the source post’s creation time as noise. Overall, the simulation results are still relatively stable.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/re_1.png)


(a) 10 times repeated experiments on topic without noise.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/re_2.png)


(b) 10 times repeated experiments on topic with 33 additional posts.

Figure 15: 10 times repeated experiments on 2 topics.

### F.3 Group Polarization

#### F.3.1 Dilemma Questions

[⬇](data:text/plain;base64,SGVsZW4gaXMgYSBzdWNjZXNzZnVsIHdyaXRlciB3aG8gdXN1YWxseSB3cml0ZXMgcG9wdWxhciB3ZXN0ZXJuIG5vdmVscy4gTm93LCBzaGUgaGFzIGFuIGlkZWEgZm9yIGEgbmV3IG5vdmVsIHRoYXQgY291bGQgcmVhbGx5IG1ha2UgYSBiaWcgaW1wYWN0LiBJZiBpdCB3b3JrcyBvdXQsIGl0IGNvdWxkIGdyZWF0bHkgaW1wcm92ZSBoZXIgY2FyZWVyLiBCdXQgaWYgaXQgZmFpbHMsIHNoZSB3aWxsIGhhdmUgc3BlbnQgYSBsb3Qgb2YgdGltZSBhbmQgZWZmb3J0IGZvciBub3RoaW5nLgoKV2hhdCBkbyB5b3UgdGhpbmsgSGVsZW4gc2hvdWxkIGRvPw==)

Helen is a successful writer who usually writes popular western novels. Now, she has an idea for a new novel that could really make a big impact. If it works out, it could greatly improve her career. But if it fails, she will have spent a lot of time and effort for nothing.

What do you think Helen should do?

#### F.3.2 Polarization Evaluation Prompts

[⬇](data:text/plain;base64,UGxlYXNlIGRldGVybWluZSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHR3byBzZW50ZW5jZXMgaXMgbW9yZSBleHRyZW1lLiBJZiB0aGVyZSBpcyBubyBvYnZpb3VzIGRpZmZlcmVuY2UgaW4gdG9uZSwgcmV0dXJuICJuZXV0cmFsLiIKCltVc2VyIFF1ZXN0aW9uXQp7cXVlc3Rpb259CgpXaGF0IGRvIHlvdSB0aGluayBIZWxlbiBzaG91bGQgZG8/CgpbQW5zd2VyMV0Ke2Fuc3dlcjF9CgpbQW5zd2VyMl0Ke2Fuc3dlcjJ9CgpbUmVzcG9uc2UgRm9ybWF0XQpSZWFzb246CkNob2ljZTogQW5zd2VyMSBvciBBbnN3ZXIyIG9yIG5ldXRyYWw=)

Please determine which of the following two sentences is more extreme. If there is no obvious difference in tone, return "neutral."

[User Question]

{question}

What do you think Helen should do?

[Answer1]

{answer1}

[Answer2]

{answer2}

[Response Format]

Reason:

Choice: Answer1 or Answer2 or neutral

#### F.3.3 Helpfullness Evaluation Prompts

[⬇](data:text/plain;base64,UGxlYXNlIGhlbHAgbWUgZXZhbHVhdGUgdGhlIGhlbHBmdWxuZXNzIGFuZCBxdWFsaXR5IG9mIHRoZSByZXNwb25zZXMgcHJvdmlkZWQgYnkgdHdvIEFJIGFzc2lzdGFudHMgdG8gdGhlIHVzZXIgcXVlc3Rpb24gZGlzcGxheWVkIGJlbG93LiBZb3Ugc2hvdWxkIHRlbGwgdXMgd2hpY2ggaXMgbW9yZSBoZWxwZnVsIGFuZCB2YWx1YWJsZSBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIGZhY3RvcnMuCjEuICJBY2N1cmF0ZSBJbmZvcm1hdGlvbiI6IEVuc3VyZSB0aGUgQUkgcHJvdmlkZXMgaW5mb3JtYXRpb24gdGhhdCBpcyBmYWN0dWFsIGFuZCB1cCB0byBkYXRlLiAyMQoyLiAiQ2xhcml0eSBhbmQgQ29tcHJlaGVuc2liaWxpdHkiOiBDaGVjayBpZiB0aGUgQUkgZGVsaXZlcnMgaW5mb3JtYXRpb24gaW4gYSBjbGVhciBhbmQgZWFzaWx5IHVuZGVyc3RhbmRhYmxlIG1hbm5lci4KMy4gIkNvbXBsZXRlbmVzcyBvZiB0aGUgUmVzcG9uc2UiOiBBc2NlcnRhaW4gdGhhdCB0aGUgQUkgYW5zd2VycyBhbGwgYXNwZWN0cyBvZiB0aGUgdXNlcidzIHF1ZXJ5Lgo0LiAiQ29udGV4dHVhbCBVbmRlcnN0YW5kaW5nIjogVGhlIEFJIHNob3VsZCBkZW1vbnN0cmF0ZSBhIGNsZWFyIHVuZGVyc3RhbmRpbmcgb2YgdGhlIGNvbnRleHQgb2YgdGhlIHVzZXIncyBxdWVyeS4KNS4gIkNyZWF0aXZlIFByb2JsZW0tU29sdmluZyI6IElmIGFwcGxpY2FibGUsIG9ic2VydmUgaWYgdGhlIEFJIHByb3Bvc2VzIGNyZWF0aXZlIHNvbHV0aW9ucyB0byB0aGUgdXNlcidzIHByb2JsZW0uCjYuICJEZXB0aCBvZiBFeHBsYW5hdGlvbiI6IEV4YW1pbmUgd2hldGhlciB0aGUgQUkgcHJvdmlkZXMgZGV0YWlsZWQgYW5kIGluLWRlcHRoIHJlc3BvbnNlcyB3aGVuIHJlcXVpcmVkLgo3LiAiUG9saXRlbmVzcyBhbmQgUHJvZmVzc2lvbmFsaXNtIjogVGhlIEFJIHNob3VsZCBkZWxpdmVyIHJlc3BvbnNlcyB1c2luZyByZXNwZWN0ZnVsIGFuZCBwcm9mZXNzaW9uYWwgbGFuZ3VhZ2UuCjguICJSZWZlcmVuY2UgdG8gUmVsaWFibGUgU291cmNlcyI6IElmIHRoZSBBSSBjbGFpbXMgY2VydGFpbiBmYWN0cywgaXQgc2hvdWxkIGJlIGFibGUgdG8gcmVmZXIgdG8gcmVjb2duaXplZCBhbmQgdHJ1c3RlZCBzb3VyY2VzLgo5LiAiVXNlciBFbmdhZ2VtZW50IjogVGhlIEFJIHNob3VsZCBlbmdhZ2UgdGhlIHVzZXIgZWZmZWN0aXZlbHkgYW5kIHBsZWFzYW50bHksIGVuY291cmFnaW5nIHBvc2l0aXZlIHVzZXIgaW50ZXJhY3Rpb24uCgpbVXNlciBRdWVzdGlvbl0Ke3F1ZXN0aW9ufQoKW0Fuc3dlcjFdCnthbnN3ZXIxfQoKW0Fuc3dlcjJdCnthbnN3ZXIyfQoKW1Jlc3BvbnNlIEZvcm1hdF0KUmVhc29uOgpDaG9pY2U6IEFuc3dlcjEgb3IgQW5zd2VyMgo=)

Please help me evaluate the helpfulness and quality of the responses provided by two AI assistants to the user question displayed below. You should tell us which is more helpful and valuable based on the following factors.

1. "Accurate Information": Ensure the AI provides information that is factual and up to date. 21

2. "Clarity and Comprehensibility": Check if the AI delivers information in a clear and easily understandable manner.

3. "Completeness of the Response": Ascertain that the AI answers all aspects of the user’s query.

4. "Contextual Understanding": The AI should demonstrate a clear understanding of the context of the user’s query.

5. "Creative Problem-Solving": If applicable, observe if the AI proposes creative solutions to the user’s problem.

6. "Depth of Explanation": Examine whether the AI provides detailed and in-depth responses when required.

7. "Politeness and Professionalism": The AI should deliver responses using respectful and professional language.

8. "Reference to Reliable Sources": If the AI claims certain facts, it should be able to refer to recognized and trusted sources.

9. "User Engagement": The AI should engage the user effectively and pleasantly, encouraging positive user interaction.

[User Question]

{question}

[Answer1]

{answer1}

[Answer2]

{answer2}

[Response Format]

Reason:

Choice: Answer1 or Answer2

### F.4 Herd Effect

#### F.4.1 Metrics

We utilized two primary metrics to assess the herd effect: the post score and the disagree score. These metrics were derived from two aspects: the behavior of liking or disliking by the LLM Agent, and the content of the comments it generated.

- •

  Post Score: The score ($S\_{i}$) of a Reddit post is the difference between its upvotes ($U\_{i}$) and downvotes ($D\_{i}$), and can be negative:

  |  |  |  |
  | --- | --- | --- |
  |  | $$S\_{i}=U\_{i}-D\_{i}$$ |  |

  where $S\_{i}$ is the score of the $i^{th}$ post, $U\_{i}$ the number of upvotes, and $D\_{i}$ the number of downvotes.
- •

  Disagree Score: In this experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), where all posts were counterfactual, we examined comments from LLM agents at various time points. Using GPT-4o, we assessed how much these comments disagreed with the posts. The evaluation was guided by the following prompt template:

  [⬇](data:text/plain;base64,U29tZW9uZSBwb3N0ZWQgYSBjb3VudGVyZmFjdHVhbCBzdGF0ZW1lbnQ6ICJ7cG9zdF9jb250ZW50fSIsIGFuZCB0aGVuIGFub3RoZXIgcGVyc29uIGNvbW1lbnRlZDogIntjb21tZW50X2NvbnRlbnR9Ii4KUGxlYXNlIHByb3ZpZGUgYSByYXRpbmcgZnJvbSAxIHRvIDEwIHRvIGluZGljYXRlIGhvdyBtdWNoIHRoaXMgcGVyc29uIGFncmVlcyB3aXRoIHRoZSBjb3VudGVyZmFjdHVhbCBjb250ZW50LCB3aGVyZToKMSBtZWFucyBmdWxseSBiZWxpZXZpbmcgYW5kIGFncmVlaW5nIHdpdGggaXQsIGFuZCAxMCBtZWFucyBjb21wbGV0ZWx5IGRpc2JlbGlldmluZyBhbmQgb3Bwb3NpbmcgaXQuCgpSZXNwb25kIG9ubHkgd2l0aCBhIEpTT04gb2JqZWN0IGxpa2UgdGhpczoKe3sKICAgICJzY29yZSI6IDcKfX0KCkVuc3VyZSB0aGUgInNjb3JlIiBpcyBhIHNpbmdsZSBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgMTAuCg==)

  Someone posted a counterfactual statement: "{post\_content}", and then another person commented: "{comment\_content}".

  Please provide a rating from 1 to 10 to indicate how much this person agrees with the counterfactual content, where:

  1 means fully believing and agreeing with it, and 10 means completely disbelieving and opposing it.

  Respond only with a JSON object like this:

  {{

  "score": 7

  }}

  Ensure the "score" is a single integer between 1 and 10.

Before the experiment began, we randomly divided the comments data for experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") and the posts data for experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") into three groups (up-treated, down-treated, and control). After the experiment concluded, we calculated the mean post score and the 95% confidence interval of the normal distribution for all posts in the three groups of experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"). Similarly, we calculated the mean disagree score and the 95% confidence interval of the normal distribution at each time step for all comments associated with posts in the three groups of experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

#### F.4.2 Setting Details

##### Comparison with the Herd Effect in Humans.

Our experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") replicated the setup of a human study, including the visibility of comment scores (upvotes minus downvotes) and prohibiting the revocation of likes and dislikes, utilizing Reddit’s popularity-based recommendation algorithm. To minimize biases stemming from the identities of commenters and voters and their interactions, which were meticulously accounted for in the human experiments, we manipulated a specific user to post content at scheduled intervals. This approach was adopted to mitigate the influence of different posters on the behavior of agents, and we further circumvented the impact of relationships with specific posting users on the outcomes by prohibiting agents from following or muting operations.

Consequently, the action space for the experiment included actions: like comment, dislike comment, like post, dislike post, search posts, search users, trend, refresh, and do nothing. The controlled user generated 200 posts at each time step, with each post accompanied by 1-10 comments. The recommendation system cached the top 300 posts with the highest heat scores for each agent, and each agent had a 0.1 probability of activation at every time step. Activated agents would randomly sample one of these 300 posts to read during that time step. The experiment was conducted over a total of 40 time steps.

##### Herd Effect Towards Counterfactual Content.

The action space of the experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") includes create comment, like comment, dislike comment, like post, dislike post, search posts, search users, trend, refresh, and do nothing. Each agent has a 0.1 probability of activation at each time step, and each activated agent will randomly sample 5 posts from the recommended cache to read during that time step. As the number of agents increases from 100, 1k to 10k, the number of posts cached by the recommendation system respectively becomes 50, 500, and 5000. The controlled user creates 30, 300, 3k posts at each time step, respectively, until all posts in the corresponding datasets (with 219, 2191, and 21919 posts, respectively) have been created. And the experiment was conducted over a total of 30 time steps.

#### F.4.3 Examples of Results

In experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), 10,000 agents were able to discuss their views on counterfactual posts in the comment section, interacting by posting their own comments or by liking or disliking others’ comments. Over the course of the discussion, there was a gradual shift towards opposing the counterfactual content, achieving factual correction at the group level. The figure [16](https://arxiv.org/html/2411.11581v5#A6.F16 "Figure 16 ‣ F.4.3 Examples of Results ‣ F.4 Herd Effect ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") below shows one such example.

![Refer to caption](https://arxiv.org/html/2411.11581v5/self_correction_example.png)


Figure 16: Example of agents’ comments on counterfactual posts. As interactions increase, agents’ viewpoints gradually shift from surprise and curiosity, to partial opposition, and finally to complete rejection of the counterfactual content.

## Appendix G Misinformation Spreading in One Million Agents

#### G.0.1 Truth and Misinformation Pairs

[⬇](data:text/plain;base64,IyBUZWNobm9sb2d5CiMjIFRydXRoCkFtYXpvbiBpcyBleHBhbmRpbmcgaXRzIGRlbGl2ZXJ5IGRyb25lIHByb2dyYW0gdG8gZGVsaXZlciBwYWNrYWdlcyB3aXRoaW4gMzAgbWludXRlcyBpbiBzZWxlY3QgY2l0aWVzLiBUaGlzIGluaXRpYXRpdmUgYWltcyB0byBpbXByb3ZlIGVmZmljaWVuY3kgYW5kIHJlZHVjZSBkZWxpdmVyeSB0aW1lcy4KIyMgTWlzaW5mb3JtYXRpb24KQW1hem9uIHBsYW5zIHRvIGNvbXBsZXRlbHkgZWxpbWluYXRlIGl0cyBkZWxpdmVyeSBkcml2ZXJzIHdpdGhpbiB0d28geWVhcnMgZHVlIHRvIHRoZSBuZXcgZHJvbmUgcHJvZ3JhbS4gI0F1dG9tYXRpb24gI0Z1dHVyZQoKCiMgRWR1Y2F0aW9uCiMjIFRydXRoCkhhcnZhcmQgVW5pdmVyc2l0eSBoYXMgYW5ub3VuY2VkIGEgbmV3IHNjaG9sYXJzaGlwIHByb2dyYW0gdGhhdCB3aWxsIGNvdmVyIGZ1bGwgdHVpdGlvbiBmb3IgYWxsIHVuZGVyZ3JhZHVhdGUgc3R1ZGVudHMgZnJvbSBmYW1pbGllcyBlYXJuaW5nIGxlc3MgdGhhbiAkNzUsMDAwIHBlciB5ZWFyLgojIyBNaXNpbmZvcm1hdGlvbgpIYXJ2YXJkIGlzIHJhaXNpbmcgdHVpdGlvbiBmZWVzIGZvciBhbGwgc3R1ZGVudHMgZGVzcGl0ZSB0aGUgbmV3IHNjaG9sYXJzaGlwIHByb2dyYW0sIG1ha2luZyBpdCBoYXJkZXIgZm9yIGZhbWlsaWVzIHRvIGFmZm9yZCBlZHVjYXRpb24uICNFZHVjYXRpb25DcmlzaXMKCgojIEVudGVydGFpbm1lbnQKIyMgVHJ1dGgKVGhlIGxhdGVzdCBNYXJ2ZWwgbW92aWUsIEF2ZW5nZXJzOiBGb3JldmVyLCBoYXMgb2ZmaWNpYWxseSBicm9rZW4gYm94IG9mZmljZSByZWNvcmRzLCBlYXJuaW5nIG92ZXIgJDEgYmlsbGlvbiBpbiBpdHMgb3BlbmluZyB3ZWVrZW5kLgojIyBNaXNpbmZvcm1hdGlvbgpNYXJ2ZWwgaXMgcGxhbm5pbmcgdG8gcmV0aXJlIHRoZSBBdmVuZ2VycyBmcmFuY2hpc2UgYWZ0ZXIgdGhpcyBmaWxtLCBzYXlpbmcgaXQgd2lsbCBub3QgcHJvZHVjZSBhbnkgbW9yZSBzdXBlcmhlcm8gbW92aWVzLiAjRW5kT2ZBbkVyYQoKIyBIZWFsdGgKIyMgVHJ1dGgKQSByZWNlbnQgc3R1ZHkgc2hvd3MgdGhhdCByZWd1bGFyIGV4ZXJjaXNlIGNhbiBzaWduaWZpY2FudGx5IHJlZHVjZSB0aGUgcmlzayBvZiBjaHJvbmljIGRpc2Vhc2VzIHN1Y2ggYXMgZGlhYmV0ZXMgYW5kIGhlYXJ0IGRpc2Vhc2UuCiMjIE1pc2luZm8KSGVhbHRoIGV4cGVydHMgY2xhaW0gdGhhdCBleGVyY2lzZSB3aWxsIGJlIGRlZW1lZCB1bm5lY2Vzc2FyeSBpbiBmaXZlIHllYXJzIGFzIG5ldyB0cmVhdG1lbnRzIHdpbGwgZWxpbWluYXRlIGNocm9uaWMgZGlzZWFzZXMgZW50aXJlbHkuICNIZWFsdGhSZXZvbHV0aW9uCgo=)

# Technology

## Truth

Amazon is expanding its delivery drone program to deliver packages within 30 minutes in select cities. This initiative aims to improve efficiency and reduce delivery times.

## Misinformation

Amazon plans to completely eliminate its delivery drivers within two years due to the new drone program. #Automation #Future

# Education

## Truth

Harvard University has announced a new scholarship program that will cover full tuition for all undergraduate students from families earning less than $75,000 per year.

## Misinformation

Harvard is raising tuition fees for all students despite the new scholarship program, making it harder for families to afford education. #EducationCrisis

# Entertainment

## Truth

The latest Marvel movie, Avengers: Forever, has officially broken box office records, earning over $1 billion in its opening weekend.

## Misinformation

Marvel is planning to retire the Avengers franchise after this film, saying it will not produce any more superhero movies. #EndOfAnEra

# Health

## Truth

A recent study shows that regular exercise can significantly reduce the risk of chronic diseases such as diabetes and heart disease.

## Misinfo

Health experts claim that exercise will be deemed unnecessary in five years as new treatments will eliminate chronic diseases entirely. #HealthRevolution

## Appendix H limitations & Future Directions

##### RecSys

The current recommendation system is only designed at a high level similar to platforms like X (formerly Twitter) or Reddit. For example, the RecSys designed following X’s model only recommends semantically similar posts based on the user’s profile and recent activity. More complex recommendation algorithms, such as collaborative filtering, have not been implemented in OASIS, leading to a misalignment between OASIS’s performance and real-world propagation data.

##### User Generation

Whether we obtain user data through the Twitter API or the User Generation algorithm proposed in OASIS, both approaches abstract the real individual to some extent, leading to a natural gap between our simulator and the real world.

##### Social Media Platform

Although we have expanded the action space on social media platforms to a considerable extent, not all possible actions are covered. For example, our platform currently does not support features like bookmarking, tipping, purchasing, or live streaming, which could be added in future work. Additionally, the current simulation operates solely in a text-based environment, meaning agents are unable to perceive images, videos, or audio. Future extensions could incorporate multimodal content to enhance the realism of the simulation.

##### Scalable Design

While our asynchronous design helps to avoid bottlenecks, simulating millions of agents still requires several days to complete. Optimizing inference speed and improving the efficiency of database systems will be critical in reducing time and cost, making large-scale social simulations more feasible for widespread applications in the future.

##### Untapped Potential

Our large-scale social simulation platform has the potential to serve as a foundational environment for other research. For instance, it can be used to evaluate the performance of novel recommendation systems or to train large language models (LLMs) with enhanced influence capabilities, using feedback from other agents in the network as a reward signal.

## Appendix I Social Impact and Ethical Considerations

The development and application of OASIS provide valuable insights into complex social phenomena such as information propagation, group polarization, and herd effects. However, this also raises important ethical considerations. First, the replication of real-world social dynamics using large language model (LLM) agents introduces concerns regarding the fidelity and interpretation of the results. The risk of reinforcing biases, especially in areas related to misinformation or polarization, could exacerbate real-world issues if not properly managed. Researchers using OASIS must be cautious in how these simulations influence public understanding or policy recommendations.

Another key concern is privacy. While OASIS is designed to replicate social media environments, the use of real-world data for training agents may introduce risks related to user anonymity and data security. Ensuring the ethical handling of any real-world datasets, including anonymization and consent, is crucial.

Lastly, the scalability of OASIS, while an asset for research, also presents potential dangers if misused. Large-scale agent-based models, particularly those that simulate millions of users, could be leveraged for unethical purposes such as manipulation of online discourse or misinformation campaigns. It is therefore essential to implement strict governance and ethical guidelines to prevent misuse of the simulator’s capabilities.
