---
id: arxiv-2506-03532-text
type: material
title: 'GA-S$^3$: Comprehensive Social Network Simulation with Group Agents'
work_id: arxiv-2506-03532
source_url: https://arxiv.org/html/2506.03532v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: e003da92ad0571fa21025f1ea0ffef0069f47cdfe1e65ee1fcb3367f961fad21
---

> Источник: [https://arxiv.org/html/2506.03532v2](https://arxiv.org/html/2506.03532v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# GA-S3: Comprehensive Social Network Simulation with Group Agents

Yunyao Zhang
Affiliation: Huazhong University of Science and Technology
  
Zikai Song
†
Affiliation: Huazhong University of Science and Technology
  
Hang Zhou
Affiliation: Huazhong University of Science and Technology
  
Wenfeng Ren
Affiliation: Silicon Universe Technology
  
Yi-Ping Phoebe Chen
Affiliation: La Trobe University
{ikostar, skyesong, henrrryzh, yjqing, weiyangcs}@hust.edu.cn,
ivenree@gjww.ai,
phoebe.chen@latrobe.edu.au
  
Junqing Yu
Affiliation: Huazhong University of Science and Technology
  
Wei Yang
Affiliation: Huazhong University of Science and Technology

###### Abstract

Social network simulation is developed to provide a comprehensive understanding of social networks in the real world, which can be leveraged for a wide range of applications such as group behavior emergence, policy optimization, and business strategy development.
However, billions of individuals and their evolving interactions involved in social networks pose challenges in accurately reflecting real-world complexities.
In this study, we propose a comprehensive Social network Simulation System (GA-S3) that leverages newly designed Group Agents to make intelligent decisions regarding various online events.
Unlike other intelligent agents that represent an individual entity, our group agents model a collection of individuals exhibiting similar behaviors, facilitating the simulation of large-scale network phenomena with complex interactions at a manageable computational cost.
Additionally, we have constructed a social network benchmark from 2024 popular online events that contains fine-grained information on Internet traffic variations.
The experiment demonstrates that our approach is capable of achieving accurate and highly realistic prediction results.
Code is open at <https://github.com/AI4SS/GAS-3>.

## 1 Introduction

Online social networks have emerged as primary platforms for social activities, where users engage in different interactive behaviors, including chatting, posting, and sharing content. Social network simulations[Li et al. (2017)](https://arxiv.org/html/2506.03532v2#bib.bib34) create virtual representations of social networks, modeling the behaviors, relationships, and information flows among individuals or entities within these networks. The goal of social network simulation[Freeman (2004)](https://arxiv.org/html/2506.03532v2#bib.bib22) is to analyze and predict the outcomes that emerge from these interactions, and can be leveraged for a wide range of applications such as group behavior emergence, phenomenon prediction, policy optimization, and business strategy development.

Traditional social network simulation systems predominantly adhere to discrete events[Bouanan et al. (2019)](https://arxiv.org/html/2506.03532v2#bib.bib4) or system dynamics[Meadows et al. (1974)](https://arxiv.org/html/2506.03532v2#bib.bib41); [De Greene (2012)](https://arxiv.org/html/2506.03532v2#bib.bib17) focusing on predicting variables rather than elucidating underlying mechanisms or causal relationships. They often underestimate the heterogeneity of social behavior and the dynamism of social structures. Recently, research[Park et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib46); [Gao et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib23); [Park et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib47) tends on social networks simulation focus on employing the large language model (LLM)[Achiam et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib1); [Chowdhery et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib11); [Feng et al. (2025)](https://arxiv.org/html/2506.03532v2#bib.bib21) based agents to simulate individual entities and their behaviors. However, with billions of users on social networks, it is impossible to model each user individually through LLM-based agents[Chan et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib8); [Zhou et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib66); [Luo et al. (2025)](https://arxiv.org/html/2506.03532v2#bib.bib39). Additionally, existing social simulation systems suffer from poor scalability and are frequently designed for particular events, thereby failing to comprehensively cover news events on the Internet.

To address the challenges of high complexity arising from billions of individuals and the poor scalability of social network simulations, we propose a comprehensive social network simulation system (GA-S3) based on the intelligent agents—group agents. Group agents are designed to represent collections of individuals with similar online behaviors, rather than simulating each individual entity, thereby enabling the modeling of complex interactions at a manageable computational cost. Moreover, our group agents can adaptively generate user profiles based on network events, ensuring scalability across diverse online environments.

Our group agents consist of three primary modules: hierarchical generation, decision-reasoning, and action. These modules correspond to the three stages of the agents’ life-cycle: existence, decision-making, and behavior.
In the hierarchical generation, group agents’ profiles are created based on the environmental event, including population, identity and characteristics. Groups are progressively differentiated within a hierarchical tree structure until they accurately represent populations with similar behaviors.
In the decision-reasoning, agents make the decision based on their role and the propagation of states and memory. We incorporate fine-grained factors such as emotion fading and forgetting probability to ensure alignment with real-world dynamics.
In the action, our agents emulate human actions on the Internet and conduct interactions among multiple groups.

We developed a Social Network Benchmark that compiles popular online events from 2024 across various domains and includes detailed information on fine-grained network traffic variations. Experimental results demonstrate that our GA-S3 model achieves accurate and highly realistic predictions.

## 2 Realted Work

### 2.1 Social Simulation System (S3)

Social simulations are powerful tools for studying social activities, enabling large-scale experiments to explore the impacts of individual and group behaviors in social networks [Newman (2002)](https://arxiv.org/html/2506.03532v2#bib.bib44); [Edmonds and Hales (2003)](https://arxiv.org/html/2506.03532v2#bib.bib19); [Notarmuzi et al. (2022)](https://arxiv.org/html/2506.03532v2#bib.bib45). They reveal connections between micro-level behavioral changes and dynamic social structures[Squazzoni et al. (2014)](https://arxiv.org/html/2506.03532v2#bib.bib56); [Centola and Macy (2007)](https://arxiv.org/html/2506.03532v2#bib.bib7) by visualizing spatiotemporal dynamics that are hard to observe empirically. PSP[Kong et al. (2018)](https://arxiv.org/html/2506.03532v2#bib.bib31) identifies patterns of popularity stages in social media and uses pattern-matching techniques to predict future trends. While these simulations advance social science theories by validating hypotheses and adopting formalized methodologies[Mershon and Shvetsova (2019)](https://arxiv.org/html/2506.03532v2#bib.bib42), traditional approaches, such as event-based simulations[Bouanan et al. (2019)](https://arxiv.org/html/2506.03532v2#bib.bib4) and system dynamics models[Meadows et al. (1974)](https://arxiv.org/html/2506.03532v2#bib.bib41); [De Greene (2012)](https://arxiv.org/html/2506.03532v2#bib.bib17), often prioritize prediction over uncovering causal mechanisms, neglecting behavioral heterogeneity. To address these limitations, we propose an integrated framework combining agent-based modeling with system dynamics.

### 2.2 S3 based on Traditional Agent

Agent-based social simulations [Davidsson (2002)](https://arxiv.org/html/2506.03532v2#bib.bib16); [Singer et al. (2009)](https://arxiv.org/html/2506.03532v2#bib.bib53) utilize agent technology to model social phenomena by simulating the behaviors and interactions of individuals or groups, with each agent representing unique attributes, behavioral rules, and decision-making processes. Through the analysis of these interactions, researchers can identify behavioral patterns and explore system dynamics. Schelling [Schelling (1971)](https://arxiv.org/html/2506.03532v2#bib.bib51); [Schelling (2006)](https://arxiv.org/html/2506.03532v2#bib.bib52) pioneered the first agent-based virtual society simulation, employing cellular automata [Chopard and Droz (1998)](https://arxiv.org/html/2506.03532v2#bib.bib10) to investigate housing segregation [Macal and North (2005)](https://arxiv.org/html/2506.03532v2#bib.bib40); [Henry et al. (2011)](https://arxiv.org/html/2506.03532v2#bib.bib27). Epstein and Axtell’s Sugarscape [Epstein and Axtell (1996)](https://arxiv.org/html/2506.03532v2#bib.bib20) extended this methodology to model entire societies, while Grossi [Grossi et al. (2005)](https://arxiv.org/html/2506.03532v2#bib.bib25) examined organizational structures and their influence within multi-agent systems [Uhrmacher and Weyns (2018)](https://arxiv.org/html/2506.03532v2#bib.bib59). Despite these advancements, traditional agent-based simulations continue to face challenges related to complexity, adaptability, and behavioral realism.

### 2.3 S3 based on LLM Agent

Advances in AI [Luo et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib38); [Hu et al. (2025)](https://arxiv.org/html/2506.03532v2#bib.bib30); [Song et al. (2025)](https://arxiv.org/html/2506.03532v2#bib.bib54) and multi-model technologies [Li et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib35); [Song et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib55); [Zhang et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib63) have enabled agent-based social simulations powered by large language models (LLMs)[Chang et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib9) to address complex challenges with robust comprehension and adaptability. JS Park et al.[Park et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib46) introduced generative agents simulating realistic behaviors[Bommasani et al. (2021)](https://arxiv.org/html/2506.03532v2#bib.bib3); [Brown et al. (2020)](https://arxiv.org/html/2506.03532v2#bib.bib5) in a simulated town, while S3[Gao et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib23) leveraged LLMs to build virtual social networks with advanced perception and reasoning. Despite these advancements, modeling every individual in real-world scenarios remains impractical due to the vast number of individuals and the complexity of behaviors. Existing approaches[Park et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib46); [Gao et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib23); [Zhou et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib66); [Qian et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib49) are often manual, static, and lack scalability. To address these limitations, we propose a group-agents social network system powered by LLMs. This system integrates dynamic modeling to capture societal heterogeneity and evolving social structures, while automating agents generation based on environmental perception to enable efficient and scalable simulations.

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure1-overview.png)


Figure 1: Overview of our social network simulation system. It consists of three components: hierarchical generation, decision-reasoning, and action. Group agents are first generated through hierarchical generation to form perception of the environment and content. The perception and role attributes are stored in the memory and state of the decision-reasoning, respectively, and are leveraged to make decisions and actions.

## 3 Methodology

Our comprehensive social network simulation system (GA-S3) is shown in Figure [1](https://arxiv.org/html/2506.03532v2#S2.F1 "Figure 1 ‣ 2.3 S3 based on LLM Agent ‣ 2 Realted Work ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), the group agents comprise three key modules: hierarchical generation, decision-reasoning, and action.
The hierarchical generation is designed to automatically construct group agents based on the given network environmental events, shaping their perception from both the environment and content.
The decision-reasoning, functioning as the agent’s core and akin to a human brain, simulates human-like decision-making by reasoning about perceived content in alignment with role attributes.
The action simulates human behavior and enables the interaction with network entities or other agents according to decisions.

Figure 2: The illustration for the hierarchical generation of group agents. (a) Perception embedding module that act as the "eyes" to perceive the environment; (b) hierarchical multiway-tree module is designed to generate group agents; (c) attributes show the profile of generated agents. We use an online educational event as an example.

### 3.1 Hierarchical Generation of Group Agents

This section introduces the hierarchical generation process of group agents. The Perception Embedding subsection describes how agents perceive and respond to environmental events. The Hierarchical Multiway-tree Generation outlines the approach we developed to differentiate groups into progressively finer divisions, enabling them to represent similar behaviors. Finally, the Attributes subsection outlines the key attributes of the generated agents.

#### 3.1.1 Perception Embedding

Perception ${\color[rgb]{0,0,1}O}$ embedding acts as the "eyes" of the group agents. When new environmental event E emerges in the virtual social network, the content of the event, along with its domain D(e.g., education, politics, business, etc., based on widely accepted standards in media CNN and academic research) and country C as identified by a large language model, is stored in the agent’s memory ${\color[rgb]{1,0.6,0.2}M}$. This information forms the foundational perception of the environment and content, influencing subsequent reasoning processes and interactions. These foundational perceptions are continuously updated as new information becomes available.

#### 3.1.2 Hierarchical Multiway-tree Generation

To comprehensively generate group agents with similar behaviors, we adopt a top-down hierarchical approach, organizing populations into a multiway-tree structure, as shown in Figure [2](https://arxiv.org/html/2506.03532v2#S3.F2 "Figure 2 ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). Each layer’s group agents are fine-grained divisions of the previous layer, generated using prompt engineering with large language models based on background information and environmental requirements. We also incorporate the Retrieval-Augmented Generation (RAG) technique for adaptive agents generation. Specifically, upon receiving an online event E, the system analyzes its content to determine the domain D and country C. It then leverages a large language model with network search capabilities to retrieve population information corresponding to the identified country and domain (Appendix Table [VII](https://arxiv.org/html/2506.03532v2#A3.T7 "Table VII ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")), storing the data locally as a document for further modification if needed. This data is then integrated into the local hierarchical knowledge graph $\mathcal{G}$ (Figure [2](https://arxiv.org/html/2506.03532v2#S3.F2 "Figure 2 ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(b)). If events share the same country and domain, they correspond to the same group agents; differing countries or domains will result in different group agents. For future events, if corresponding country and domain information already exists, it is directly retrieved from $Layer\_{n}$ of the knowledge graph using a Breadth-First Search (BFS)[Bundy and Wallen (1984)](https://arxiv.org/html/2506.03532v2#bib.bib6) algorithm, ensuring efficient traversal. Finally, the large language model (LLM) generates $n$ group agents based on the information in $Layer\_{n}$ (Appendix Table [VIII](https://arxiv.org/html/2506.03532v2#A3.T8 "Table VIII ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")).

#### 3.1.3 Attributes

The generated group agents include an ID, population, country, characteristics, emotions, and attitudes. The ID and country serve as unique identifiers for each group, while the population determines the frequency and intensity of interactions. Characteristics, classified as “susceptible,” “ordinary,” and “calm”[Liu et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib36), capture real-world emotional responsiveness and stability. The “susceptible” group is highly sensitive to stimuli, showing significant fluctuations; the “ordinary” group displays moderate and typical behavior; and the “calm” group maintains emotional stability. Emotions, including happy, sad, and angry, are quantified using an index, where a higher value indicates greater emotional intensity. Attitudes are categorized as either positive or negative, reflecting the agent’s overall evaluation of events or information. These attributes, stored in the agents’ states ${\color[rgb]{1,0,0}S}$, combine with perception to shape reasoning and interactions, which are continuously updated.

### 3.2 Decision-Reasoning of Group Agents

The decision-reasoning consists of two components: storage and thought, as illustrated in Figure [1](https://arxiv.org/html/2506.03532v2#S2.F1 "Figure 1 ‣ 2.3 S3 based on LLM Agent ‣ 2 Realted Work ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). We employ a state and memory updating strategy in the storage, which can be propagated and updated in reasoning, assisting in the decision-making process. Furthermore, we apply a Markov Network-based approach in the thought process to expand the information horizon. We additionally incorporate fine-grained factors that closely mirror real-world effects, ensuring alignment with practical scenarios.

#### 3.2.1 State and Memory of Storage

The storage system comprises two core components: States ${\color[rgb]{1,0,0}S}$, and Memory ${\color[rgb]{1,0.6,0.2}M}$.

The State ${\color[rgb]{1,0,0}S}$ encapsulates the attributes of group agents. Here, $\mathcal{E}$ specifically represents the combination of emotions and attitudes within the agents’ attributes, simulating the emotional and attitudinal patterns observed in real human groups[Cottrell and Neuberg (2005)](https://arxiv.org/html/2506.03532v2#bib.bib13).

The Memory ${\color[rgb]{1,0.6,0.2}M}$ is based on a queue updating mechanism[Hou et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib28); [Zhang et al. (2024b)](https://arxiv.org/html/2506.03532v2#bib.bib65), reflecting the fact that people’s attention to specific online events is short-lived and diminishes over time. Specifically, the agent’s 1) perception, 2) decisions, and 3) actions are stored in a queue structure, where newer information replaces older data as the social network evolves, leading to gradual forgetting.

#### 3.2.2 Markov Network-based Reasoning

To capture the evolution of an agent’s state and memory in decision-making, we employed a Markov Network framework[Lowd and Davis (2010)](https://arxiv.org/html/2506.03532v2#bib.bib37). The state transition is defined as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\begin{split}P({\color[rgb]{1,0,0}S}\_{i}^{t}|{\color[rgb]{1,0,0}S}\_{i}^{t-1},\mathcal{E}\_{i}^{t},{\color[rgb]{1,0.6,0.2}M}\_{i}^{t-1})=\alpha\_{1}P({\color[rgb]{1,0,0}S}\_{i}^{t-1})\\ +\alpha\_{2}P(\mathcal{E}\_{i}^{t})+\alpha\_{3}P({\color[rgb]{1,0.6,0.2}M}\_{i}^{t-1}),\end{split}$$ |  | (1) |

where $P({\color[rgb]{1,0,0}S}\_{i}^{t})$ represents the probability distribution over the state of agent $i$ at time $t$, and $\alpha$ represents fading parameters controlling attribute decay rates.

At each time step, the emotional response $\mathcal{E}\_{i}^{t}$ is updated based on the agent’s perception ${\color[rgb]{0,0,1}O}\_{i}^{t}$, and its prior state ${\color[rgb]{1,0,0}S}\_{i}^{t-1}$ as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(\mathcal{E}\_{i}^{t}|{\color[rgb]{0,0,1}O}\_{i}^{t},{\color[rgb]{1,0,0}S}\_{i}^{t-1})=\text{LLM}({\color[rgb]{0,0,1}O}\_{i}^{t},{\color[rgb]{1,0,0}S}\_{i}^{t-1}),$$ |  | (2) |

where ${\color[rgb]{0,0,1}O}\_{i}^{t}$ includes the agent’s perception influenced by its own environment $E\_{i}^{t}$, as determined by:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $${\color[rgb]{0,0,1}O}\_{i}^{t}\leftarrow\text{Perception}(E\_{i}^{t}).$$ |  | (3) |

The decision-making process is refined by an LLM policy $\pi$, which determines the subsequent action $A\_{i}^{t}$ based on the updated state ${\color[rgb]{1,0,0}S}\_{i}^{t}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\begin{split}P(A\_{i}^{t}|{\color[rgb]{1,0,0}S}\_{i}^{t})=\pi({\color[rgb]{1,0,0}S}\_{i}^{t}),\end{split}$$ |  | (4) |

Finally, the memory ${\color[rgb]{1,0.6,0.2}M}\_{i}^{t}$ is updated to reflect its accumulation of prior perception and actions:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P({\color[rgb]{1,0.6,0.2}M}\_{i}^{t}|{\color[rgb]{1,0.6,0.2}M}\_{i}^{t-1},A\_{i}^{t},{\color[rgb]{0,0,1}O}\_{i}^{t})={\color[rgb]{1,0.6,0.2}M}\_{i}^{t-1}+A\_{i}^{t}+{\color[rgb]{0,0,1}O}\_{i}^{t},$$ |  | (5) |

The entire framework is managed through four managers: the event manager, memory manager, state manager, and object manager, where ${\color[rgb]{0,0,1}O}$, ${\color[rgb]{1,0,0}S}$, and ${\color[rgb]{1,0.6,0.2}M}$ are open text and stored in JSON format. This framework enables a dynamic and iterative process where the agent’s state, actions, and memory evolve adaptively in response to environmental changes and inter-agent communication. Furthermore, by utilizing this framework, the bias in the responses of LLM agents can be reduced, thus improving the repeatability and consistency of the experimental process.

#### 3.2.3 Fine-grain factors for real-world effect

To enhance the resemblance of the virtual social network to a real-world social network, we introduced four fine-grain factors: 1) population weight, 2) group characteristics, 3) emotion fading, and 4) forgetting probability. Population weight, derived from real data, influences the activity levels and interaction frequencies of groups. Group characteristics determine the amplitude of emotional and attitudinal fluctuations, with susceptible groups experiencing the greatest fluctuations, followed by ordinary groups, and calm groups experiencing the least. The emotion fading represents the gradual decline of emotions and attitudes over time. The forgetting probability affects short-term memory[Graves (2012)](https://arxiv.org/html/2506.03532v2#bib.bib24), leading to the gradual fading of memories related to past perception and events.

Table 1: Ablation experiments. Default settings are marked in gray. See Section [4.4](https://arxiv.org/html/2506.03532v2#S4.SS4 "4.4 Ablation Study ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") for details.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| # | Layer | Memory | State | t-test $\downarrow$ | MAPE $\downarrow$ | DTW | | Z-score |
| Mean $\downarrow$ | Std $\downarrow$ |
| 1 | L1 | ✓ | ✓ | 0.829 | 68.78% | 3.38e+07 | 0.4186 | 0.84 |
| 2 | L2 | ✓ | ✓ | 0.603 | 33.73% | 2.84e+07 | 0.3927 | 0.21 |
| 3 | L3 | - | - | 2.212 | 2884.25% | 7.80e+08 | 1.0263 | 2.32 |
| 4 | L3 | ✓ | - | 2.189 | 1338.74% | 1.39e+08 | 0.7653 | 1.41 |
| 5 | L3 | - | ✓ | 1.986 | 400.71% | 8.78e+07 | 0.6674 | 0.25 |
| 6 | L3 | ✓ | ✓ | 0.389 | 16.48% | 1.30e+07 | 0.1890 | 0.81 |

### 3.3 Action of Group Agents

Actions enable agents to simulate human behavior online and facilitate interactions between multiple groups. Users can perform the following actions on a event item: view, like, comment, share and predict. Viewing involves reading the event, liking indicates interest, commenting expresses thoughts, sharing distributes the event, and predicting[Potter et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib48); [Zhang et al. (2024a)](https://arxiv.org/html/2506.03532v2#bib.bib64) involves projecting future outcomes based on the content. We hypothesize that viewing is the primary action, with views significantly outnumbering other actions. Interactions from fake users are excluded as they do not represent real populations. Real user groups first view the event and its related information (e.g., view counts, likes, comments, shares), which generates emotions and attitudes, driving further interactions and new content creation. For instance, 10,000 students might view an event about academic dishonesty, with 2,000 liking it and 500 sharing or commenting, leading to updates in event information and influencing subsequent interactions.

Table 2: Comparisons with other social simulation systems on our SNB benchmark

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Method | t-test $\downarrow$ | MAPE $\downarrow$ | DTW | |
| Mean $\downarrow$ | Std $\downarrow$ |
| PSP | 1.310 | 69.12% | 3.40e+07 | 0.4207 |
| S3 | 1.820 | 68.66% | 3.09e+07 | 0.4035 |
| GA-S3(ours) | 0.389 | 16.48% | 1.30e+07 | 0.1890 |

## 4 Experiment

### 4.1 Benchmark

Due to the absence of temporal variations on network traffic in existing datasets, we have developed a Social Network Benchmark (SNB), which incorporates detailed information on fine-grained network traffic variations.

Data collection.
The datasets in our SNB have been collected on the 2024 popular online events from three major platforms: Twitter (referred to as Platform X), Reddit, and Weibo. Twitter[Kwak et al. (2010)](https://arxiv.org/html/2506.03532v2#bib.bib32) is a widely used microblogging platform known for its real-time news and social interactions; Reddit[Anderson (2015)](https://arxiv.org/html/2506.03532v2#bib.bib2) is a community-driven platform that hosts discussions on a wide range of topics; Weibo[Sullivan (2014)](https://arxiv.org/html/2506.03532v2#bib.bib57) is a popular Chinese social media platform.

Statistics.
Our SNB dataset consists of 30 online events, each containing a title, content, metadata, and network traffic variations over a 7-day period. These events cover a wide range of domains, including education, politics, business, technology, culture, sports, health, entertainment, environment, and economy. They originate from various countries, such as China, the United States, and Japan, representing different levels of popularity.

Evaluation Metrics. To comprehensively evaluate the performance of the system, we selected multiple metrics from various perspectives.

- •

  t-test [Hsu and Lachenbruch (2014)](https://arxiv.org/html/2506.03532v2#bib.bib29) is employed to assess whether there is a significant difference between the means of two groups.
- •

  Mean Absolute Percentage Error (MAPE)[Tayman and Swanson (1999)](https://arxiv.org/html/2506.03532v2#bib.bib58) provides a clear, percentage-based measure of error, making it useful for evaluating prediction accuracy in relative terms.
- •

  Dynamic Time Warping (DTW) [Müller (2007)](https://arxiv.org/html/2506.03532v2#bib.bib43) is highly effective for comparing time series, even when the sequences vary in speed or timing. In our context, DTW is employed to evaluate the model’s ability to capture the complexity and dynamics of real-world social interactions. Specifically, we compute the alignment between predicted and observed Network Traffic Variations during event time periods, as a proxy for behavioral realism. A detailed explanation of the DTW computation process is provided in Appendix [A.1](https://arxiv.org/html/2506.03532v2#A1.SS1 "A.1 DTW Std Calculation Formula ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents").
- •

  Z-score [Curtis et al. (2016)](https://arxiv.org/html/2506.03532v2#bib.bib14) is used to evaluate errors in repeated results, with deviations classified as small if the absolute value of the Z-score is less than 1.

Table 3: Information of selected three events within the educational domain

|  |  |  |
| --- | --- | --- |
| Event | Descriptions | Distinctions |
| #2 | A school cafeteria  where was reported  spoiled pork | An explosive event  with a flood of traffic  and two peaks |
| #7 | An academic dishonesty  where a professor  was dismissed | A hot event with  a viewership peak  on the 3rd day |
| #14 | 1,477 freshmen forfeited  admission for failing to  enrollment on time | A common event  with views peaking  on the 2nd day |


Figure 3: Network traffic trends in three events. We use the counts of views as a proxy for network traffic.

### 4.2 LLM Setup

Our group agents, as introduced in Section [3.2](https://arxiv.org/html/2506.03532v2#S3.SS2 "3.2 Decision-Reasoning of Group Agents ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), are powered by the open-source LLM LLaMA3-8B [Dubey et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib18), chosen for its transparency, the flexibility of local deployment, and its support for deterministic outputs with a low temperature setting (temperature=0.1). Importantly, our method does not require any fine-tuning or task-specific adaptation. The model can be deployed directly, enabling fast and low-cost integration in practical scenarios.

In contrast, the Hierarchical Multiway Tree-designed Structure described in Section [3.1](https://arxiv.org/html/2506.03532v2#S3.SS1 "3.1 Hierarchical Generation of Group Agents ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") leverages Kimi’s large model [Qin et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib50) for its internet search capabilities. Due to potential noise in the retrieved content, we additionally integrate GPT-4 [Achiam et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib1) to perform advanced data cleaning, which improves the overall accuracy and reliability of the system.

### 4.3 Comparison

We need to emphasize that there are limited solutions for simulating social networks, particularly for billions of individuals in Internet events. However, for comparative evaluation, we selected and re-implemented the PSP[Kong et al. (2018)](https://arxiv.org/html/2506.03532v2#bib.bib31) and the S3[Gao et al. (2023)](https://arxiv.org/html/2506.03532v2#bib.bib23) on our SNB benchmark. These methods support social simulation using model-based and agent-based approaches, respectively.
PSP focuses on predicting trends of popularity stages at both micro and macro levels, while S3 employs 1,000 fixed agents to predict news events, scaling the results to the population benchmark for broader predictions. As shown in Table [2](https://arxiv.org/html/2506.03532v2#S3.T2 "Table 2 ‣ 3.3 Action of Group Agents ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), our GA-S3 method significantly outperforms both PSP (model-based) and S3 (agent-based) across all evaluation metrics, including t-test, MAPE, and the mean and standard deviation of DTW.

Table 4: Detailed information on view counts for 3 specific events. All values are expressed in units of 10,000 (10k)

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Layer | Agent | Character | Population | (%) | Event #2 | | Event #7 | | Event #14 | |
| L1 | Students | susceptible | 5803 | (94.4%) | 4319 | (93.1%) | 1239 | (91.6%) | 360 | (90.6%) |
| Teachers | calm | 345 | (5.6%) | 319 | (6.9%) | 113 | (8.4%) | 38 | (9.4%) |
| Total (2 agents) | | 6148 |  | 4638 |  | 1352 |  | 398 |  |
| L2 | Vocation | susceptible | 3472 | (56.5%) | 2508 | (57.2%) | 1141 | (56.8%) | 195 | (55.8%) |
| Educators | calm | 287 | (4.7%) | 206 | (4.7%) | 104 | (5.2%) | 16 | (4.6%) |
| … |  |  |  |  |  |  |  |  |  |
| Total (5 agents) | | 6148 |  | 4385 |  | 2010 |  | 350 |  |
| L3 | Bachelor | susceptible | 1966 | (32%) | 1272 | (31%) | 710 | (36.2%) | 81 | (36.3%) |
| Master | ordinary | 310 | (5%) | 180 | (4.4%) | 77 | (3.9%) | 9 | (4.1%) |
| FullTime | calm | 201 | (3.3%) | 135 | (3.3%) | 41 | (2.1%) | 5 | (2.3%) |
| … |  |  |  |  |  |  |  |  |  |
| Total (16 agents) | | 6148 |  | 4170 |  | 1963 |  | 224 |  |
| Ground-truth | | | |  | 4141 |  | 1817 |  | 234 |  |


Table 5: Distribution of actions under t-test score.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Layers | Views | Likes | Comments | Shares |
| L1 | -0.785 | 1.218 | -0.083 | -1.229 |
| L2 | 0.597 | 0.951 | 0.640 | -0.223 |
| L3 | 0.292 | 0.608 | 0.471 | -0.183 |


(a) Emotion trends

(b) Attitude trends

(c) w/o fading&forgetting

(d) w/o character

Figure 4: Emotion and attitude trends for each agent in the Event #2.

### 4.4 Ablation Study

Reproducibility.
We have evaluated the reproducibility by conducting over five tests under identical conditions and assessing the results using the Z-score. A Z-score below 3 is generally considered an acceptable deviation. As shown in Table [1](https://arxiv.org/html/2506.03532v2#S3.T1 "Table 1 ‣ 3.2.3 Fine-grain factors for real-world effect ‣ 3.2 Decision-Reasoning of Group Agents ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") (line #1, #2, #6), our Z-scores are consistently below 1, indicating excellent reproducibility.

Hierarchical multiway-tree generation.
We have ablated our hierarchical design for generating group agents. As the hierarchy deepens, the accuracy of agents construction improves. As shown in Table [1](https://arxiv.org/html/2506.03532v2#S3.T1 "Table 1 ‣ 3.2.3 Fine-grain factors for real-world effect ‣ 3.2 Decision-Reasoning of Group Agents ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), the experimental results confirm the effectiveness of our design, with the simulation accuracy of the L3 layer significantly exceeding that of the L1 and L2 layers.

Memory and state in decision-reasoning.
As shown in Table [1](https://arxiv.org/html/2506.03532v2#S3.T1 "Table 1 ‣ 3.2.3 Fine-grain factors for real-world effect ‣ 3.2 Decision-Reasoning of Group Agents ‣ 3 Methodology ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), incorporating the memory module improves the t-test score from 1.986 to 0.389 (line #5 $\rightarrow$ #6), and the state module enhances the score from 2.189 to 0.389 (line #4 $\rightarrow$ #6). These results strongly validate the critical role of the memory and state update modules in our GA-S3.

Distribution of different actions.
We have analyzed the results of four distinct online behaviors: views, likes, comments, and shares. The experimental results, presented in Table [5](https://arxiv.org/html/2506.03532v2#S4.T5 "Table 5 ‣ 4.3 Comparison ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") under t-test scores, reveal that while the number of views is significantly higher than the other three actions, the simulation results demonstrate that all four actions are modeled with high accuracy.

Fine-grain factors.
We have ablated the four fine-grain factors that are introduced for more suitable to real world including: population weight, group characteristics, emotion fading, and forgetting probability.
(1) For population weight, we present the detailed information for 3 events in the same domain (Event #2, #7, #14), as shown in Table [4](https://arxiv.org/html/2506.03532v2#S4.T4 "Table 4 ‣ 4.3 Comparison ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). The popularity of different agents plays a decisive role in determining the volume of network traffic, with the ratio of view counts closely aligning with the ratio of population;
(2) For group characteristics (character), from Table [4](https://arxiv.org/html/2506.03532v2#S4.T4 "Table 4 ‣ 4.3 Comparison ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), we know that the character of full-time faculty agents (FullTime) is "calm". Comparing Figure [4](https://arxiv.org/html/2506.03532v2#S4.F4 "Figure 4 ‣ 4.3 Comparison ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") (b) and (d), we observe that removing the character leads to a significant increase in Fulltime’s attitude value, which does not align with the actual situation. This highlights the critical role of the character in influencing the online behavior of specific group roles.
(3) For emotion fading and forgetting probability, by comparing Figure [4](https://arxiv.org/html/2506.03532v2#S4.F4 "Figure 4 ‣ 4.3 Comparison ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") (a) and (c), it is evident that the absence of emotion fading and forgetting probability causes significant distortion in network traffic prediction.

### 4.5 Analysis

Behavioral diversity of fixed group agents.
One potential phenomenon is that a specific agent may exhibit only a single pattern of online behavior, even across different Internet events. To verify this hypothesis, we selected three events from the same educational domain, each with significant distinctions, as shown in Table [3](https://arxiv.org/html/2506.03532v2#S4.T3 "Table 3 ‣ 4.1 Benchmark ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). We set the group agents in these three events to be identical. The prediction results, shown in the Figure [3](https://arxiv.org/html/2506.03532v2#S4.F3 "Figure 3 ‣ 4.1 Benchmark ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), demonstrate that our agents can exhibit considerable diversity across different events, with prediction curve closely matching the ground-truth. This confirms that our agents are capable of treating different online events distinctively, which aligns well with real-world behavior.

Relationship between emotion/attitude and network traffic.
Figure [4](https://arxiv.org/html/2506.03532v2#S4.F4 "Figure 4 ‣ 4.3 Comparison ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") (a) and (b) illustrate the trends of emotions and attitudes for three different agents in Event #2. Compared to the network traffic shown by the blue lines in Figure [3](https://arxiv.org/html/2506.03532v2#S4.F3 "Figure 3 ‣ 4.1 Benchmark ‣ 4 Experiment ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), we observe there are two peaks in emotions and attitudes, which align with the traffic trends. However, while the second peak in emotions and attitudes is closer to the first peak, the gap between the two peaks in traffic trends is larger. This indicates that emotions/attitudes and traffic are not perfectly correlated, but only exhibit a limited degree of alignment.

## 5 Conclusion

In this study, we introduce a comprehensive social network simulation framework based on group agents. This framework effectively constructs virtual representations of social networks and simulates human behaviors. We have designed group agents capable of modeling a collective of individuals and engaging in social network interactions. The group agents incorporate hierarchical generation, decision-reasoning, and action modules corresponding to the three stages in the life-cycle of existence, decision, and behavior. This design enables the simulation of large-scale network phenomena with complex interactions while maintaining a manageable computational cost. Experiments conducted on our BNS benchmark demonstrate that our GA-S3 system delivers accurate and realistic predictive outcomes.

## Limitation

Our GA-S3 has demonstrated exceptional predictive accuracy; however, it is important to acknowledge the following limitations:
(1) Limited reasoning capability. The current agent reasoning is directly produced by LLMs, which may restrict the depth of deliberation in complex scenarios. This limitation can potentially be addressed through techniques such as Chain-of-Thought[Wei et al. (2022)](https://arxiv.org/html/2506.03532v2#bib.bib61);
(2) The diversity of our SNB benchmark. Our SNB offers a key advantage in its fine-grained network traffic variations, complemented by efforts to include a wide range of news topics. Nevertheless, given the vast amount of information available online, there remains room to further enhance the dataset’s diversity. In addition, it is crucial to emphasize that our data sources fully comply with General Data Protection [Voigt and Von dem Bussche (2017)](https://arxiv.org/html/2506.03532v2#bib.bib60); to safeguard user privacy, all individuals featured in publicly available social events have been anonymized;
(3) Lack of explicit network and interactivity. Although group-level dynamics induce implicit structures via domain and geographic boundaries, the absence of explicit connections and agent-level interactions may limit the emergence of more realistic social behaviors;
(4) Limited adaptability in group generation. The current group generation relies on a fixed hierarchical structure, which may not adapt well to diverse scenarios. Future improvements could explore dynamic layer adjustments to enhance adaptability.

## Acknowledgments

This work is supported by the National Key Research and Development Program of China (No.2020YBF2901202), National Natural Science Foundation of China (NSFC No. 62272184 and No. 62402189), the China Postdoctoral Science Foundation under Grant Number GZC20230894, the China Postdoctoral Science Foundation (Certificate Number: 2024M751012), and the Postdoctor Project of Hubei Province under Grant Number 2024HBBHCXB014. The computation is completed in the HPC Platform of Huazhong University of Science and Technology.

## References

- Achiam et al. (2023)

  Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, et al. 2023.
  GPT-4 Technical Report.
  *arXiv preprint arXiv:2303.08774*.
- Anderson (2015)

  Katie Elson Anderson. 2015.
  Ask me anything: what is reddit?
  *Library Hi Tech News*, 32(5):8–11.
- Bommasani et al. (2021)

  Rishi Bommasani, Drew A Hudson, Ehsan Adeli, Russ Altman, Simran Arora, Sydney von Arx, Michael S Bernstein, Jeannette Bohg, Antoine Bosselut, Emma Brunskill, et al. 2021.
  On the Opportunities and Risks of Foundation Models.
  *arXiv preprint arXiv:2108.07258*.
- Bouanan et al. (2019)

  Youssef Bouanan, Gregory Zacharewicz, Judicael Ribault, and Bruno Vallespir. 2019.
  Discrete Event System Specification-Based Framework for Modeling and Simulation of Propagation Phenomena in Social Networks: Application to the Information Spreading in a Multi-Layer Social Network.
  *Simulation*, 95(5):411–427.
- Brown et al. (2020)

  Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared D Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, et al. 2020.
  Language Models are Few-Shot Learners.
  *Advances in Neural Information Processing Systems*, 33:1877–1901.
- Bundy and Wallen (1984)

  Alan Bundy and Lincoln Wallen. 1984.
  Breadth-first search.
  *Catalogue of artificial intelligence tools*, pages 13–13.
- Centola and Macy (2007)

  Damon Centola and Michael Macy. 2007.
  Complex contagions and the weakness of long ties.
  *American journal of Sociology*, 113(3):702–734.
- Chan et al. (2024)

  Xin Chan, Xiaoyang Wang, Dian Yu, Haitao Mi, and Dong Yu. 2024.
  Scaling Synthetic Data Creation with 1,000,000,000 Personas.
  *arXiv preprint arXiv:2406.20094*.
- Chang et al. (2024)

  Serina Chang, Alicja Chaszczewicz, Emma Wang, Maya Josifovska, Emma Pierson, and Jure Leskovec. 2024.
  Llms generate structurally realistic social networks but overestimate political homophily.
  *arXiv preprint arXiv:2408.16629*.
- Chopard and Droz (1998)

  Bastien Chopard and Michel Droz. 1998.
  Cellular Automata.
  *Modelling of Physical*, 1.
- Chowdhery et al. (2023)

  Aakanksha Chowdhery, Sharan Narang, Jacob Devlin, Maarten Bosma, Gaurav Mishra, Adam Roberts, Paul Barham, Hyung Won Chung, Charles Sutton, Sebastian Gehrmann, et al. 2023.
  PaLM: Scaling Language Modeling with Pathways.
  *Journal of Machine Learning Research*, 24(240):1–113.
- contributors (2024)

  Wikipedia contributors. 2024.
  [2024 united states elections](https://en.wikipedia.org/wiki/2024_United_States_elections).
  Accessed: 2024-12-04.
- Cottrell and Neuberg (2005)

  Catherine A Cottrell and Steven L Neuberg. 2005.
  Different emotional reactions to different groups: A sociofunctional threat-based approach to "prejudice".
  *Journal of Personality and Social Psychology*, 88(5):770.
- Curtis et al. (2016)

  Alexander E Curtis, Tanya A Smith, Bulat A Ziganshin, and John A Elefteriades. 2016.
  The mystery of the z-score.
  *Aorta*, 4(04):124–130.
- Daniels (2024)

  Eugene Daniels. 2024.
  Kamala harris says she is running for democratic nomination.
  <https://www.politico.com/news/2024/07/21/>.
  Accessed: 2024-08-05.
- Davidsson (2002)

  Paul Davidsson. 2002.
  Agent-Based Social Simulation: A Computer Science View.
  *Journal of Artificial Societies and Social Simulation*, 5(1).
- De Greene (2012)

  Kenyon B De Greene. 2012.
  *A Systems-Based Approach to Policymaking*.
  Springer Science & Business Media.
- Dubey et al. (2024)

  Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey, Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman, Akhil Mathur, Alan Schelten, Amy Yang, Angela Fan, et al. 2024.
  The llama 3 herd of models.
  *arXiv preprint arXiv:2407.21783*.
- Edmonds and Hales (2003)

  Bruce Edmonds and David Hales. 2003.
  Replication, Replication and Replication: Some Hard Lessons from Model Alignment.
  *Journal of Artificial Societies and Social Simulation*, 6(4).
- Epstein and Axtell (1996)

  Joshua M Epstein and Robert Axtell. 1996.
  *Growing Artificial Societies: Social Science from the Bottom Up*.
  Brookings Institution Press.
- Feng et al. (2025)

  Sicheng Feng, Gongfan Fang, Xinyin Ma, and Xinchao Wang. 2025.
  Efficient reasoning models: A survey.
  *arXiv preprint arXiv:2504.10903*.
- Freeman (2004)

  Linton Freeman. 2004.
  The development of social network analysis.
  *A Study in the Sociology of Science*, 1(687):159–167.
- Gao et al. (2023)

  Chen Gao, Xiaochong Lan, Zhihong Lu, Jinzhu Mao, Jinghua Piao, Huandong Wang, Depeng Jin, and Yong Li. 2023.
  S3̂: Social-network Simulation System with Large Language Model-Empowered Agents.
  *arXiv preprint arXiv:2307.14984*.
- Graves (2012)

  Alex Graves. 2012.
  Long short-term memory.
  *Supervised sequence labelling with recurrent neural networks*, pages 37–45.
- Grossi et al. (2005)

  Davide Grossi, Frank Dignum, Mehdi Dastani, and Lamber Royakkers. 2005.
  Foundations of Organizational Structures in Multiagent Systems.
  In *Proceedings of the Fourth International Joint Conference on Autonomous Agents and Multiagent Systems*, pages 690–697.
- Hadas Gold (2024)

  CNN Hadas Gold. 2024.
  51 million viewers tuned in to cnn’s presidential debate with biden and trump.
  <https://www.cnn.com/2024/06/28/media/ratings-debate-trump-biden-cnn/index.html>.
  Accessed: 2024-08-05.
- Henry et al. (2011)

  Adam Douglas Henry, Paweł Prałat, and Cun-Quan Zhang. 2011.
  Emergence of segregation in evolving social networks.
  *Proceedings of the National Academy of Sciences*, 108(21):8605–8610.
- Hou et al. (2024)

  Yuki Hou, Haruki Tamoto, and Homei Miyashita. 2024.
  " my agent understands me better": Integrating dynamic human-like memory recall and consolidation in llm-based agents.
  In *Extended Abstracts of the CHI Conference on Human Factors in Computing Systems*, pages 1–7.
- Hsu and Lachenbruch (2014)

  Henry Hsu and Peter A Lachenbruch. 2014.
  Paired t test.
  *Wiley StatsRef: statistics reference online*.
- Hu et al. (2025)

  Yangliu Hu, Zikai Song, Na Feng, Yawei Luo, Junqing Yu, Yi-Ping Phoebe Chen, and Wei Yang. 2025.
  Sf2t: Self-supervised fragment finetuning of video-llms for fine-grained understanding.
  *arXiv preprint arXiv:2504.07745*.
- Kong et al. (2018)

  Qingchao Kong, Wenji Mao, Guandan Chen, and Daniel Zeng. 2018.
  Exploring trends and patterns of popularity stage evolution in social media.
  *IEEE Transactions on Systems, Man, and Cybernetics: Systems*, 50(10):3817–3827.
- Kwak et al. (2010)

  Haewoon Kwak, Changhyun Lee, Hosung Park, and Sue Moon. 2010.
  What is twitter, a social network or a news media?
  In *Proceedings of the 19th international conference on World wide web*, pages 591–600.
- Layne and Larson (2024)

  Nathan Layne and Soren Larson. 2024.
  Pop, pop, pop, then a bloodied trump rushed from election rally.
  <https://www.reuters.com/world/us/>.
  Accessed: 2024-08-05.
- Li et al. (2017)

  Mei Li, Xiang Wang, Kai Gao, and Shanshan Zhang. 2017.
  A survey on information diffusion in online social networks: Models and methods.
  *Information*, 8(4):118.
- Li et al. (2024)

  Wenbing Li, Hang Zhou, Junqing Yu, Zikai Song, and Wei Yang. 2024.
  Coupled mamba: Enhanced multi-modal fusion with coupled state space model.
  *arXiv preprint arXiv:2405.18014*.
- Liu et al. (2024)

  Yuhan Liu, Xiuying Chen, Xiaoqing Zhang, Xing Gao, Ji Zhang, and Rui Yan. 2024.
  From Skepticism to Acceptance: Simulating the Attitude Dynamics Toward Fake News.
  *arXiv preprint arXiv:2403.09498*.
- Lowd and Davis (2010)

  Daniel Lowd and Jesse Davis. 2010.
  Learning markov network structure with decision trees.
  In *2010 IEEE International Conference on Data Mining*, pages 334–343. IEEE.
- Luo et al. (2024)

  Run Luo, Yunshui Li, Longze Chen, Wanwei He, Ting-En Lin, Ziqiang Liu, Lei Zhang, Zikai Song, Xiaobo Xia, Tongliang Liu, et al. 2024.
  Deem: Diffusion models serve as the eyes of large language models for image perception.
  *arXiv preprint arXiv:2405.15232*.
- Luo et al. (2025)

  Run Luo, Lu Wang, Wanwei He, and Xiaobo Xia. 2025.
  Gui-r1: A generalist r1-style vision-language action model for gui agents.
  *arXiv e-prints*, pages arXiv–2504.
- Macal and North (2005)

  Charles M Macal and Michael J North. 2005.
  Tutorial on Agent-Based Modeling and Simulation.
  In *Proceedings of the Winter Simulation Conference, 2005*, pages 14–pp. IEEE.
- Meadows et al. (1974)

  Dennis L Meadows, William W Behrens, Donella H Meadows, Roger F Naill, Jørgen Randers, and Erich Zahn. 1974.
  *Dynamics of Growth in a Finite World*, volume 360.
  Wright-Allen Press, Cambridge, MA.
- Mershon and Shvetsova (2019)

  Carol Mershon and Olga Shvetsova. 2019.
  *Formal Modeling in Social Science*.
  University of Michigan Press.
- Müller (2007)

  Meinard Müller. 2007.
  Dynamic time warping.
  *Information retrieval for music and motion*, pages 69–84.
- Newman (2002)

  Mark EJ Newman. 2002.
  Spread of epidemic disease on networks.
  *Physical review E*, 66(1):016128.
- Notarmuzi et al. (2022)

  Daniele Notarmuzi, Claudio Castellano, Alessandro Flammini, Dario Mazzilli, and Filippo Radicchi. 2022.
  Universality, Criticality and Complexity of Information Propagation in Social Media.
  *Nature Communications*, 13(1):1308.
- Park et al. (2023)

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein. 2023.
  Generative Agents: Interactive Simulacra of Human Behavior.
  In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology*, pages 1–22.
- Park et al. (2024)

  Joon Sung Park, Carolyn Q. Zou, Aaron Shaw, Benjamin Mako Hill, Carrie Cai, Meredith Ringel Morris, Robb Willer, Percy Liang, and Michael S. Bernstein. 2024.
  [Generative agent simulations of 1,000 people](https://arxiv.org/abs/2411.10109).
  *Preprint*, arXiv:2411.10109.
- Potter et al. (2024)

  Yujin Potter, Shiyang Lai, Junsol Kim, James Evans, and Dawn Song. 2024.
  Hidden persuaders: Llms’ political leaning and their influence on voters.
  *arXiv preprint arXiv:2410.24190*.
- Qian et al. (2024)

  Chen Qian, Zihao Xie, Yifei Wang, Wei Liu, Yufan Dang, Zhuoyun Du, Weize Chen, Cheng Yang, Zhiyuan Liu, and Maosong Sun. 2024.
  Scaling large-language-model-based multi-agent collaboration.
  *arXiv preprint arXiv:2406.07155*.
- Qin et al. (2024)

  Ruoyu Qin, Zheming Li, Weiran He, Mingxing Zhang, Yongwei Wu, Weimin Zheng, and Xinran Xu. 2024.
  Mooncake: A kvcache-centric disaggregated architecture for llm serving.
  *arXiv preprint arXiv:2407.00079*.
- Schelling (1971)

  Thomas C Schelling. 1971.
  Dynamic Models of Segregation.
  *Journal of Mathematical Sociology*, 1(2):143–186.
- Schelling (2006)

  Thomas C Schelling. 2006.
  *Micromotives and Macrobehavior*.
  WW Norton & Company.
- Singer et al. (2009)

  Hermann M Singer, Irina Singer, and Hans J Herrmann. 2009.
  Agent-based model for friendship in social networks.
  *Physical Review E—Statistical, Nonlinear, and Soft Matter Physics*, 80(2):026113.
- Song et al. (2025)

  Zikai Song, Run Luo, Lintao Ma, Ying Tang, Yi-Ping Phoebe Chen, Junqing Yu, and Wei Yang. 2025.
  Temporal coherent object flow for multi-object tracking.
  In *Proceedings of the AAAI Conference on Artificial Intelligence*, volume 39, pages 6978–6986.
- Song et al. (2024)

  Zikai Song, Ying Tang, Run Luo, Lintao Ma, Junqing Yu, Yi-Ping Phoebe Chen, and Wei Yang. 2024.
  Autogenic language embedding for coherent point tracking.
  In *Proceedings of the 32nd ACM International Conference on Multimedia*, pages 2021–2030.
- Squazzoni et al. (2014)

  Flaminio Squazzoni, Wander Jager, and Bruce Edmonds. 2014.
  Social Simulation in the Social Sciences: A Brief Overview.
  *Social Science Computer Review*, 32(3):279–294.
- Sullivan (2014)

  Jonathan Sullivan. 2014.
  China’s weibo: Is faster different?
  *New media & society*, 16(1):24–37.
- Tayman and Swanson (1999)

  Jeff Tayman and David A Swanson. 1999.
  On the validity of mape as a measure of population forecast accuracy.
  *Population Research and Policy Review*, 18:299–322.
- Uhrmacher and Weyns (2018)

  Adelinde M Uhrmacher and Danny Weyns. 2018.
  *Multi-Agent Systems: Simulation and Applications*.
  CRC Press.
- Voigt and Von dem Bussche (2017)

  Paul Voigt and Axel Von dem Bussche. 2017.
  The eu general data protection regulation (gdpr).
  *A Practical Guide, 1st Ed., Cham: Springer International Publishing*, 10(3152676):10–5555.
- Wei et al. (2022)

  Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou, et al. 2022.
  Chain-of-thought prompting elicits reasoning in large language models.
  *Advances in neural information processing systems*, 35:24824–24837.
- Yu et al. (2024)

  Chenxiao Yu, Zhaotian Weng, Zheng Li, Xiyang Hu, and Yue Zhao. 2024.
  Will trump win in 2024? predicting the us presidential election via multi-step reasoning with large language models.
  *arXiv preprint arXiv:2411.03321*.
- Zhang et al. (2023)

  Haonan Zhang, Lianli Gao, Pengpeng Zeng, Alan Hanjalic, and Heng Tao Shen. 2023.
  Depth-aware sparse transformer for video-language learning.
  In *Proceedings of the 31st ACM International Conference on Multimedia*, pages 4778–4787.
- Zhang et al. (2024a)

  Xinnong Zhang, Jiayu Lin, Libo Sun, Weihong Qi, Yihang Yang, Yue Chen, Hanjia Lyu, Xinyi Mou, Siming Chen, Jiebo Luo, et al. 2024a.
  Electionsim: Massive population election simulation powered by large language model driven agents.
  *arXiv preprint arXiv:2410.20746*.
- Zhang et al. (2024b)

  Zeyu Zhang, Xiaohe Bo, Chen Ma, Rui Li, Xu Chen, Quanyu Dai, Jieming Zhu, Zhenhua Dong, and Ji-Rong Wen. 2024b.
  A survey on the memory mechanism of large language model based agents.
  *arXiv preprint arXiv:2404.13501*.
- Zhou et al. (2024)

  Junkai Zhou, Liang Pang, Ya Jing, Jia Gu, Huawei Shen, and Xueqi Cheng. 2024.
  Knowledge boundary and persona dynamic shape a better social media agent.
  *arXiv preprint arXiv:2403.19275*.

GA-S3: Comprehensive Social Network Simulation with Group Agents

Appendix

![[Uncaptioned image]](https://arxiv.org/html/2506.03532v2/figure9-teaser.png)

Figure I: Prediction of the 2024 United States presidential election based on our social network simulation (GA-S3). Our system predicted in July, 2024 that Trump would win with 309 electoral votes, which is remarkably close to the final result of 312 votes.

In this supplementary material, we describe our method in more detail in Section [A](https://arxiv.org/html/2506.03532v2#A1 "Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). We supplement our experiments with more details in Section B. Furthermore, in Section [C](https://arxiv.org/html/2506.03532v2#A3 "Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"), we present a prediction for the 2024 United States elections in Figure [I](https://arxiv.org/html/2506.03532v2#A0.F1 "Figure I ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). Our GA-S3 system predicted in July, 2024 that Trump would win with 309 electoral votes, which is remarkably close to the final result of 312 votes.

## Appendix A Implementation Details

Table I: Terminology Explanation

|  |  |  |  |
| --- | --- | --- | --- |
| No. | Term | Explanation | Difference |
| 1 | Environmental Events | Refers to the agent’s perspective, focusing on how agents perceive and interpret events within their environment. | These terms describe events from different perspectives. |
| 2 | Online Events | Refers to events that occur within the online social network, viewed from the dataset perspective. |  |
| 3 | Network Traffic Variations | Refers to the fluctuations in the number of views an event receives over time, indicating its popularity and engagement across different periods. | - |
| 4 | Population Weight | Derived from real data, it influences the activity levels and interaction frequencies of groups. | These terms describe fine-grain factors for real-world effects. |
| 5 | Group Characteristics | Define the amplitude of emotional and attitudinal fluctuations within a group. |  |
| 6 | Emotion Fading | Refers to the gradual decline of emotions and attitudes over time. |  |
| 7 | Forgetting Probability | Affects short-term memory, leading to the gradual fading of memories related to past perceptions and events. |  |
| 8 | View | Involves reading or viewing the event content. | These terms describe the system’s simulation of the real human action space. |
| 9 | Like | Indicates interest or approval of the event by the user. |  |
| 10 | Comment | Involves expressing thoughts or feedback on the event. |  |
| 11 | Share | Refers to distributing or forwarding the event content to others. |  |
| 12 | Predict | Involves projecting potential future outcomes based on the event’s content and context. |  |

### A.1 DTW Std Calculation Formula

The standardization formula transforms time series data into a form with zero mean and unit variance to eliminate the effect of scale differences. The formula is:

|  |  |  |
| --- | --- | --- |
|  | $$\tilde{X}=\frac{X-\mu(X)}{\sigma(X)+\epsilon}$$ |  |

Where:

- •

  $\mu(X)$ represents the mean of the time series $X$,
- •

  $\sigma(X)$ represents the standard deviation of the time series $X$,
- •

  $\epsilon$ is a small positive constant, typically $10^{-8}$, used to avoid division by zero.

Dynamic Time Warping (DTW) calculates the minimum alignment distance between two time series. The formula is:

|  |  |  |
| --- | --- | --- |
|  | $$\text{DTW}(\tilde{X}\_{1},\tilde{X}\_{2})=\sum\_{n=1}^{N}d(\tilde{X}\_{1,n},\tilde{X}\_{2,n})$$ |  |

Where:

- •

  $N$ is the number of time points,
- •

  $d(x,y)$ is the distance measure between two points, which can be:

  - –

    Absolute error:  $d(x,y)=|x-y|$,
  - –

    Squared error:  $d(x,y)=(x-y)^{2}$.

In our study, the values for each day from the experiment are directly compared with the corresponding values from the ground truth.

Once the DTW distances are computed, the standard deviation (std) can be calculated as follows:

|  |  |  |
| --- | --- | --- |
|  | $$\text{std}=\sqrt{\frac{1}{k}\sum\_{i=1}^{k}(\text{DTW}\_{i}-\mu\_{\text{DTW}})^{2}}$$ |  |

Where:

- •

  $k$ is the number of DTW distances computed,
- •

  $\mu\_{\text{DTW}}$ is the mean of the DTW distances.

### A.2 Terminology Explanation

Here is a summary of the terms that appear in the article, as shown in Table [I](https://arxiv.org/html/2506.03532v2#A1.T1 "Table I ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents").

Table II: Agents and their population with characteristics in the education domain

|  |  |  |
| --- | --- | --- |
| Agents | Population | Characteristic |
| Students | 58,030,769 | susceptible |
| Postgraduates | 3,653,613 | calm |
| Doctor | 556,065 | calm |
| Master | 3,097,548 | ordinary |
| Undergraduates | 19,656,436 | susceptible |
| Bachelor | 19,656,436 | susceptible |
| Vocation | 34,720,720 | susceptible |
| Normal | 8,926,980 | susceptible |
| Short-cycle | 25,794,740 | susceptible |
| Teachers | 3,450,000 | calm |
| Educational Personnel | 2,870,866 | calm |
| Full-time-Teachers | 2,005,188 | calm |
| Administrative-Personnel | 405,420 | calm |
| Supporting-Staff | 245,438 | ordinary |
| Workers | 122,982 | ordinary |
| Full-time-Researchers | 50,600 | calm |
| Other-Agency | 41,238 | ordinary |
| Others Teachers | 1,871,829 | calm |
| Part-time-Teachers | 453,302 | calm |
| Industry-Mentor | 405,037 | calm |
| Foreign-Teachers | 19,219 | calm |
| Retirees | 966,111 | calm |
| Affiliated-Teachers | 28,160 | ordinary |


(a) Scatter plot of views

(b) Views box plot

(c) DTW distance scatterplot

(d) DTW distance boxplot

Figure II: 
Comparison of experimental results across four visualizations.
(a) Scatterplot of views compared to ground truth, illustrating their distribution.
(b) Boxplot of views for different layers.
(c) Scatterplot of DTW distances across layers, displayed on a logarithmic scale.
(d) Boxplot of DTW distances by layer.

### A.3 Group Agents in Education Domain

Table [II](https://arxiv.org/html/2506.03532v2#A1.T2 "Table II ‣ A.2 Terminology Explanation ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") divides educational groups into three layers. The first layer includes students and teachers. The second layer categorizes students into postgraduates, undergraduates, and vocational students, and teachers into educational personnel and other teachers. The third layer further subdivides these groups based on specific roles, such as master’s students, full-time teachers, and industry mentors, each with distinct population sizes and emotional characteristics.

### A.4 Dataset Disclosure Statement

Our SNB benchmark dataset captures diverse network traffic variations and a broad spectrum of news topics. While comprehensive, it can be further expanded for greater diversity. All data complies with the General Data Protection Regulation (GDPR), ensuring user privacy through desensitization and anonymization of individuals in public social events.

### A.5 Key Prompts

Key prompts are presented in the following tables: Table [VII](https://arxiv.org/html/2506.03532v2#A3.T7 "Table VII ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") and Table [VIII](https://arxiv.org/html/2506.03532v2#A3.T8 "Table VIII ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") detail the hierarchical generation of group agents; Table [IX](https://arxiv.org/html/2506.03532v2#A3.T9 "Table IX ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") illustrates the decision-reasoning processes of group agents; and Table [X](https://arxiv.org/html/2506.03532v2#A3.T10 "Table X ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") and Table [XI](https://arxiv.org/html/2506.03532v2#A3.T11 "Table XI ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") describe the emotional updates and predict actions of group agents, respectively.

## Appendix B Additional Experiments

### B.1 Visual Analysis of Metric

Figure [II](https://arxiv.org/html/2506.03532v2#A1.F2 "Figure II ‣ A.2 Terminology Explanation ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents") presents a comparison of experimental results using four visualizations. Figure [II](https://arxiv.org/html/2506.03532v2#A1.F2 "Figure II ‣ A.2 Terminology Explanation ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(a) shows a scatter plot comparing the total Views of 30 events with real data, where the approximate linearity indicates a strong fit between our system and the actual data. Figure [II](https://arxiv.org/html/2506.03532v2#A1.F2 "Figure II ‣ A.2 Terminology Explanation ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(b) provides a Views box plot, illustrating that a higher number of layers results in a more accurate fit. Figure [II](https://arxiv.org/html/2506.03532v2#A1.F2 "Figure II ‣ A.2 Terminology Explanation ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(c) depicts a scatter plot of the DTW distance between the 7-day trend curves of the 30 events and the real results. As the number of layers increases, the DTW distance becomes smaller and more concentrated. This is further supported by the DTW box plot in Figure [II](https://arxiv.org/html/2506.03532v2#A1.F2 "Figure II ‣ A.2 Terminology Explanation ‣ Appendix A Implementation Details ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(d), which demonstrates that a greater number of layers reduces error.

### B.2 Demographic Influence on Model Generalization

To investigate the influence of demographic data and macro social network structures on model generalization, additional experiments were conducted under two scenarios involving missing data: (1) data generated by a large language model (LLM), and (2) the absence of demographic data, as shown in Table [III](https://arxiv.org/html/2506.03532v2#A2.T3 "Table III ‣ B.2 Demographic Influence on Model Generalization ‣ Appendix B Additional Experiments ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents").

Table III: Performance comparison under different data conditions

|  |  |  |
| --- | --- | --- |
| Scenario | MAPE | DTW (Std) |
| Real data | 17.17% | 0.1925 |
| LLM-generated | 17.23% | 0.1929 |
| Without data | 1421.71% | 0.7921 |

The experimental results indicate that the model performs similarly when using LLM-generated data and real-world data. In contrast, the absence of demographic data significantly reduces the model’s accuracy. These findings suggest that the model exhibits strong generalization capabilities when demographic information is approximated through LLM-generated data.

### B.3 Inference Time Comparison with Existing Methods

Table IV: Comparison of average processing time for different agent configurations

|  |  |  |
| --- | --- | --- |
| Method | Number | Average Cost Time |
| ours-L1 | 2 agents | 90 seconds |
| ours-L2 | 4 agents | 200 seconds |
| ours-L3 | 16 agents | 13 minutes |
| $S^{3}$ | 1000 agents | 1 hour+ |

The average processing time per event in our method varies with the number of agents at each level. Compared to the $S^{3}$ method, our approach demonstrates significantly faster inference times across different agent configurations, as summarized in the table [IV](https://arxiv.org/html/2506.03532v2#A2.T4 "Table IV ‣ B.3 Inference Time Comparison with Existing Methods ‣ Appendix B Additional Experiments ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents").

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure/figure7a-BidenVSTrump.png)


(a) Biden VS Trump predictions

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure/figure7b-HarrisVSTrump.png)


(b) Harris VS Trump predictions

Figure III: Statistics results of the simulation for the 2024 United States presidential election.

## Appendix C Predictions for 2024 US Elections

Declaration

We declare that our system’s prediction for the 2024 United States presidential election was made on July 25, 2024, and has not been adjusted or changed since then. Our submission to OpenReview on August 15, 2024, serves as evidence. This simulation is for academic research and discussion purposes only. The predictions and opinions included in this study are for reference only and do not represent the stance of the authors or the research team. These predictions should not be interpreted as definitive forecasts or guarantees.

### C.1 Prediction results

The uncertainty surrounding the 2024 United States presidential election provides an opportunity to assess the predictive capabilities of our system.

On November 5, 2024, the United States will hold its 60th presidential election. This election features key figures such as Biden, whose performance [Hadas Gold (2024)](https://arxiv.org/html/2506.03532v2#bib.bib26) has been notable, Trump, who was involved in a shooting incident [Layne and Larson (2024)](https://arxiv.org/html/2506.03532v2#bib.bib33), and Harris, the Democratic nominee [Daniels (2024)](https://arxiv.org/html/2506.03532v2#bib.bib15). The goal of our system is to predict the election outcomes for state-level groups to identify the ultimate winner.

To address this series of news events, our virtual social network system selected citizens from all 51 states and created 51 group agents, each representing the population of a specific state. To facilitate predictions for each state’s citizens, the system includes a prediction action. When the system receives new election activity, each state’s group agent updates its emotions and attitudes and engages in interactions. After the interaction actions and the evolution of emotions and attitudes are completed, the system predicts election outcomes based on current emotional attitudes, interaction information, and the results from the 2020 election. The predictions, both before and after Biden’s withdrawal, suggest that the Republican candidate Trump is likely to defeat the Democratic opponent, as shown in Figure [III](https://arxiv.org/html/2506.03532v2#A2.F3 "Figure III ‣ B.3 Inference Time Comparison with Existing Methods ‣ Appendix B Additional Experiments ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents").

|  |  |  |  |
| --- | --- | --- | --- |
| Comparison | Candidate | Votes | Support Rate |
| Biden vs Trump | Biden | 242 | 45.32% |
| Trump | 296 | 54.68% |
| Harris vs Trump | Harris | 229 | 42.57% |
| Trump | 309 | 57.43% |

Table V: Comparison between the votes and support rates of presidential candidates

Before Biden announced his withdrawal, the system processed news from June 27 to July 15. The predicted results are illustrated in Figure [III](https://arxiv.org/html/2506.03532v2#A2.F3 "Figure III ‣ B.3 Inference Time Comparison with Existing Methods ‣ Appendix B Additional Experiments ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(a), showing Trump leading Biden by 296 electoral votes. After Biden announced his withdrawal and endorsed Harris, the system generated a new prediction, as depicted in Figure [III](https://arxiv.org/html/2506.03532v2#A2.F3 "Figure III ‣ B.3 Inference Time Comparison with Existing Methods ‣ Appendix B Additional Experiments ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(b). The updated prediction indicated that Trump would win in swing states such as Nevada (NV), Minnesota (MN), Wisconsin (WI), Michigan (MI), and New Jersey (NJ), securing 309 electoral votes. The predicted electoral votes and support rates are detailed in Table [V](https://arxiv.org/html/2506.03532v2#A3.T5 "Table V ‣ C.1 Prediction results ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). Our system forecasted that Trump’s votes and support rate would be higher, with further increases expected following Biden’s withdrawal and Harris’s endorsement. This prediction aligns with the reactions of people in each state to the relevant news, demonstrating the scientific predictive capability of our group agent system.

### C.2 Scientific Control

Before the announcement of the election results, numerous studies employed various methods to predict the outcome of the 2024 U.S. presidential election.

ElectionSim [Zhang et al. (2024a)](https://arxiv.org/html/2506.03532v2#bib.bib64) is a framework based on large language models designed to simulate the 2024 U.S. presidential election, as illustrated in Figure [IV](https://arxiv.org/html/2506.03532v2#A3.F4 "Figure IV ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(c). It accurately models voter preferences using a database containing millions of voters and incorporates data from the 2020 ANES survey and the 2022 U.S. Census to represent state-level population distributions. Evaluated using the presidential election benchmark (PPE), the simulation predicts Kamala Harris and the Democratic Party winning 8 out of 15 battleground states, while Donald Trump and the Republican Party are projected to secure 7, suggesting a slight advantage for the Democrats.

Multi-step Reasoning with Large Language Models[Yu et al. (2024)](https://arxiv.org/html/2506.03532v2#bib.bib62) introduces a predictive framework that integrates synthetic data, real data, and a multi-step reasoning approach to enhance forecasting accuracy for the 2024 U.S. presidential election. The model predicts improved performance for Trump in swing states such as Wisconsin (WI), while projecting a narrow lead for Harris in key states like Pennsylvania (PA) and Michigan (MI). The forecast indicates a tight contest, with Trump potentially securing 268 electoral votes to Harris’s 259. However, incorporating data from additional states could tip the balance in Harris’s favor, giving her 270 votes.

The actual 2024 United States elections[contributors (2024)](https://arxiv.org/html/2506.03532v2#bib.bib12) were held on Tuesday, November 5, 2024, as shown in Figure [IV](https://arxiv.org/html/2506.03532v2#A3.F4 "Figure IV ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents")(a). In the presidential election, former Republican President Donald Trump, seeking a non-consecutive second term, defeated the incumbent Democratic Vice President Kamala Harris.

In comparison with other methods, ElectionSim predicts a slight advantage for Harris. While Multi-step forecasts Trump winning 268 electoral votes, it also suggests that the result is biased in favor of Harris, giving him 270 votes. Our system’s predicted outcome of 309 votes is closer to the actual result of 312 votes. The prediction results for swing states are compared in the Table [VI](https://arxiv.org/html/2506.03532v2#A3.T6 "Table VI ‣ C.2 Scientific Control ‣ Appendix C Predictions for 2024 US Elections ‣ GA-S3: Comprehensive Social Network Simulation with Group Agents"). Both our method and ElectionSim achieve an accuracy of 86.7% across 15 swing states, with three states predicted incorrectly. In contrast, the Multi-step approach demonstrates an accuracy of 66.7%, mispredicting five swing states.

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure/figure8a-2024-actual.png)


(a) Actual 2024 election results

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure/figure7b-HarrisVSTrump.png)


(b) Ours predictions

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure/figure8c-2024-electionSim.png)


(c) ElectionSim predictions

![Refer to caption](https://arxiv.org/html/2506.03532v2/figure/figure8d-2024-mutilStep.png)


(d) Multi-step predictions

Figure IV: The actual results of the 2024 U.S. presidential election and the simulated statistical results using various methods.


Table VI: Simulation results for the 2024 presidential election in 15 battleground states. ($\star$ indicates correct prediction)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| State | Winner | | | |
|  | GT | Ours | ElectionSim | Multi-step |
| Arizona | Trump-Vance | Harris-Walz | Trump-Vance $\star$ | Trump-Vance $\star$ |
| Colorado | Harris-Walz | Harris-Walz $\star$ | Harris-Walz $\star$ | Harris-Walz $\star$ |
| Florida | Trump-Vance | Trump-Vance $\star$ | Trump-Vance $\star$ | Trump-Vance $\star$ |
| Georgia | Trump-Vance | Harris-Walz | Trump-Vance $\star$ | Harris-Walz |
| Iowa | Trump-Vance | Trump-Vance $\star$ | Trump-Vance $\star$ | Trump-Vance $\star$ |
| Michigan | Trump-Vance | Trump-Vance $\star$ | Harris-Walz | Harris-Walz |
| Minnesota | Harris-Walz | Trump-Vance | Harris-Walz $\star$ | Harris-Walz $\star$ |
| Nevada | Trump-Vance | Trump-Vance $\star$ | Harris-Walz | Harris-Walz |
| New Hampshire | Harris-Walz | Harris-Walz $\star$ | Harris-Walz $\star$ | Harris-Walz $\star$ |
| North Carolina | Trump-Vance | Trump-Vance $\star$ | Trump-Vance $\star$ | Harris-Walz |
| Ohio | Trump-Vance | Trump-Vance $\star$ | Trump-Vance $\star$ | Trump-Vance $\star$ |
| Pennsylvania | Trump-Vance | Trump-Vance $\star$ | Harris-Walz | Harris-Walz |
| Texas | Trump-Vance | Trump-Vance $\star$ | Trump-Vance $\star$ | Trump-Vance $\star$ |
| Virginia | Harris-Walz | Harris-Walz $\star$ | Harris-Walz $\star$ | Harris-Walz $\star$ |
| Wisconsin | Trump-Vance | Trump-Vance $\star$ | Trump-Vance $\star$ | Trump-Vance $\star$ |
| Accuracy | - | 86.7% | 86.7% | 66.7% |


Instructions:
  
You are an AI assistant specializing in generating hierarchical population group structures based on the provided country and domain. Use the given context to create a detailed tree-structured hierarchy that includes group names and corresponding numbers at each level.
  
Domain: {domain} Country: {country}
  
Your task is to generate a multi-level hierarchy for population groups, adjusting the structure based on the country and domain. Use the following format:


•
First Layer (Domain-level Groups, denoted by ##):

Broad categories representing the major population groups of the domain in the given field.

•
Second Layer (Subgroups, denoted by 1. \*\* \*\*):

Specific subdivisions of each first-layer group.

•
Third Layer (Detailed Breakdown, denoted by -):

Granular breakdowns within each subgroup.
Example:
  
For Country: CN (China) and Field: Education, a branch of the tree structure should be like this:


## Students: 58,030,769


1. \*\*Postgraduates: 3,653,613\*\*


- Doctor: 556,065


- Master: 3,097,548


2. \*\*Undergraduates: 19,656,436\*\*


- Bachelor: 19,656,436


3. \*\*Vocational Undergraduate: 34,720,720\*\*


- Normal: 8,926,980


- Short-cycle: 25,794,740


Table VII: Find hierarchical group information prompt template via Kimi


Instructions:
  
You are an AI assistant tasked with generating group agents and your process is as follows:
  
1. Identify and list all groups mentioned in the document.
  
2. Based on the identified groups and their associated templates, generate an agent for each group, ensuring no duplicates and that all groups are generative.
  
Answer Format:


agent
{n}:
(nth agent)

id:
{group}-agents

description:


Representing {number} {country} {group}, reflecting their emotions, attitudes, and possible actions in response to the news.

characteristic:
{susceptible/ordinary/calm} population
3. Follow the template below strictly, filling in the {group}, {number}, and {country} fields based on the contextual input.
  


Table VIII: Group agents generation template


System:
  
You are {agent\_name}, {agent\_description}.
  
You are in the social network world: {world\_description}.


perception:


•
Time: {day\_n}


•
Event State: {event\_state}

Your State:


•
Previous Memory: {memory}


•
Previous State: {previous\_state}


•
Current Emotion: {emotions}


•
Current Attitude: {attitudes}
Action Options:
  
You can choose from the following available actions: {available\_actions}
Instructions:
  
1. Use decision-making reasoning to choose your actions based on factors such as perception and your status. This action must be one of the available actions based on the previous context. Also, explain why.
  
2. Answers must follow the following format:


Action: {Action name}

Reason: {reason}

Updated plan: {List available actions with serial numbers}


Table IX: Group agents decision-making prompt template


System:
  
You are {agent\_name}, {agent\_description}.
  
You are in the social network world: {world\_description}.


perception:


•
Time: {day\_n}


•
Event State: {event\_state}

Your State:


•
Previous Memory: {memory}


•
Previous State: {previous\_state}


•
Emotion Fading: {emotion\_fading}
Instructions:
  
1. Update your emotions and attitudes: Update your emotions and attitudes based on your perception and status, taking into account the current time and emotion fading.
  
2. Event cycle pattern: In a typical event cycle, emotions will initially surge, then quickly decline, and eventually stabilize. Some explosive events may have a second emotional peak. Attitudes tend to follow a similar pattern.
  
3. Response Template:


emotions: { ’happiness’: (), ’sadness’: (), ’anger’: () }

attitudes: { ’optimism’: (), ’pessimism’: () }


Table X: Group agents update emotions and attitudes prompt template


System:
  
You are {agent\_name}, {agent\_description}.
  
You are in the social network world: {world\_description}.


perception:


•
Time: {day\_n}


•
Event State: {event\_state}

Your State:


•
Previous Memory: {memory}


•
Previous State: {previous\_state}


•
Forgetting Probability: {forgetting\_probability}


•
Current Emotion: {emotions}


•
Current Attitude: {attitudes}
Instructions:
  
Task: Predict daily engagement metrics


1. Daily reading forecast:

   
•Based on your perception and status, consider the popularity of the event, the current date, and the forgetting probability, and estimate how many people in your group have viewed the event.

2. General engagement pattern:

    • Views:

     • Must be at least one order of magnitude higher than likes.

    
•Due to the forgetfulness effect, views gradually diminish over time, and explosive events may have a second peak of views, but less than the first peak of views.

    • Likes, comments, and shares:

     • Likes usually exceed comments and shares.

     • For news that sparks heated discussions, comments or shares may exceed likes.

3. Forecast format:


Date: YYYY-MM-DD


Views: {predicted\_views}


Likes: {predicted\_likes}


Comments: {predicted\_comments}


Shares: {predicted\_shares}


Table XI: Group agents predict daily engagement metrics action prompt template
