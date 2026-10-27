---
id: arxiv-2412-03563-text
type: material
title: 'From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents'
work_id: arxiv-2412-03563
source_url: https://arxiv.org/html/2412.03563v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: f5b30e5677beab8f3da18dc0c7b15be0e68d7ffca928ae50cfa3d06da062d787
---

> Источник: [https://arxiv.org/html/2412.03563v1](https://arxiv.org/html/2412.03563v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents

Xinyi Mou
†
Affiliation: Fudan University
Email: [zywei@fudan.edu.cn](mailto:zywei@fudan.edu.cn)
  
Xuanwen Ding1
Affiliation: East China Normal University
  
Qi He1
Affiliation: Fudan University
  
Liang Wang1
Affiliation: Harbin Institute of Technology, Shenzhen
  
Jingcong Liang
Affiliation: Fudan University
  
Xinnong Zhang
Affiliation: Fudan University
  
Libo Sun
Affiliation: Fudan University
  
Jiayu Lin
Affiliation: Fudan University
  
Jie Zhou
Affiliation: East China Normal University
  
Xuanjing Huang
Affiliation: Fudan University
  
Zhongyu Wei
†
Affiliation: Fudan University
Affiliation: Shanghai Innovation Institute

###### Abstract

Traditional sociological research often relies on human participation, which, though effective, is expensive, challenging to scale, and with ethical concerns. Recent advancements in large language models (LLMs) highlight their potential to simulate human behavior, enabling the replication of individual responses and facilitating studies on many interdisciplinary studies. In this paper, we conduct a comprehensive survey of this field, illustrating the recent progress in simulation driven by LLM-empowered agents. We categorize the simulations into three types: (1) Individual Simulation, which mimics specific individuals or demographic groups; (2) Scenario Simulation, where multiple agents collaborate to achieve goals within specific contexts; and (3) Society Simulation, which models interactions within agent societies to reflect the complexity and variety of real-world dynamics. These simulations follow a progression, ranging from detailed individual modeling to large-scale societal phenomena. We provide a detailed discussion of each simulation type, including the architecture or key components of the simulation, the classification of objectives or scenarios and the evaluation method. Afterward, we summarize commonly used datasets and benchmarks. Finally, we discuss the trends across these three types of simulation. A repository for the related sources is at <https://github.com/FudanDISC/SocialAgent>.

## 1 Introduction

Social science investigates human behavior and social structures to understand how societies function. Traditional sociological research heavily relies on human participation to conduct experiments and gather data. Questionnaires [[1](https://arxiv.org/html/2412.03563v1#bib.bib1), [2](https://arxiv.org/html/2412.03563v1#bib.bib2)] and psychological experiments [[3](https://arxiv.org/html/2412.03563v1#bib.bib3), [4](https://arxiv.org/html/2412.03563v1#bib.bib4)] are commonly used to test theoretical hypotheses, understand social phenomena, and predict collective outcomes. While these methods can provide highly authentic data, they are expensive, challenging to scale, and involve certain ethical risks.

Recently, large language models (LLMs) have demonstrated impressive capabilities in human-level reasoning and planning [[5](https://arxiv.org/html/2412.03563v1#bib.bib5), [6](https://arxiv.org/html/2412.03563v1#bib.bib6), [7](https://arxiv.org/html/2412.03563v1#bib.bib7), [8](https://arxiv.org/html/2412.03563v1#bib.bib8), [9](https://arxiv.org/html/2412.03563v1#bib.bib9)]. They can perceive the environment, make decisions, and take corresponding actions, showcasing their potential as autonomous agents that can serve as human substitutes. In appropriate settings, LLM-driven agents can accurately simulate responses from corresponding individuals by leveraging their role-playing abilities [[10](https://arxiv.org/html/2412.03563v1#bib.bib10), [11](https://arxiv.org/html/2412.03563v1#bib.bib11)], a property known as algorithmic fidelity [[12](https://arxiv.org/html/2412.03563v1#bib.bib12), [13](https://arxiv.org/html/2412.03563v1#bib.bib13)]. This characteristic makes LLM-driven agents highly valuable in simulating human behavior. By reproducing individual response patterns in specific scenarios, LLM-driven agents help researchers to better understand, validate, and predict human reactions.

![Refer to caption](https://arxiv.org/html/2412.03563v1/intro.png)


Figure 1: Illustration of simulations empowered by LLM-driven agents. We categorize the simulations into individual simulation, scenario simulation and society simulation. From left to right, the diversity and scale of individual modeling generally increase. Conversely, from right to left, the granularity of individual modeling becomes more refined.

Just as individuals do not exist independently within society, in addition to separate individual agents, interactions between multiple agents have also been widely studied to solve specific problems or simulate complex dynamics in the real world [[14](https://arxiv.org/html/2412.03563v1#bib.bib14), [15](https://arxiv.org/html/2412.03563v1#bib.bib15)]. On one hand, LLMs can be specialized as agents with detailed knowledge and skills, leveraging collective intelligence to solve complex problems, such as software development [[16](https://arxiv.org/html/2412.03563v1#bib.bib16), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)], automatic diagnosis [[18](https://arxiv.org/html/2412.03563v1#bib.bib18), [19](https://arxiv.org/html/2412.03563v1#bib.bib19)] and judicial decision-making [[20](https://arxiv.org/html/2412.03563v1#bib.bib20)]. In this case, multiple autonomous agents collaborate on planning, discussion, and decision-making, reflecting the cooperative nature of human groups when solving problems. On the other hand, simple interactions between multiple agents can lead to the emergence of complex collective behaviors or patterns [[21](https://arxiv.org/html/2412.03563v1#bib.bib21), [22](https://arxiv.org/html/2412.03563v1#bib.bib22), [23](https://arxiv.org/html/2412.03563v1#bib.bib23)], thereby replicating complex social dynamics in the real world, such as opinion dynamics [[24](https://arxiv.org/html/2412.03563v1#bib.bib24), [25](https://arxiv.org/html/2412.03563v1#bib.bib25), [26](https://arxiv.org/html/2412.03563v1#bib.bib26)] and macroeconomics phenomena [[27](https://arxiv.org/html/2412.03563v1#bib.bib27)]. Such simulations provide valuable tools for understanding, analyzing, and predicting complex phenomena that may be difficult or impractical to observe directly in real life, offering strong support for decision-making in areas such as policy-making and social management.

This research field is rapidly expanding, with papers focusing on various aspects. Considering the purpose of simulation and the varying demands for diversity, scale, and accuracy in individual modeling, we categorize the existing work into three types, as illustrated in Figure [1](https://arxiv.org/html/2412.03563v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"):

1. 1.

   Individual Simulation: leveraging LLM-based agents to mimic specific individuals or groups of people sharing common demographic characteristics [[28](https://arxiv.org/html/2412.03563v1#bib.bib28), [10](https://arxiv.org/html/2412.03563v1#bib.bib10), [11](https://arxiv.org/html/2412.03563v1#bib.bib11)]. This line of research focuses on the replication of features of a single person, e.g., personality, and has not involved multi-agent interactions.
2. 2.

   Scenario Simulation: organizing a group of agents in a concentrated scenario, driven by specific goals or tasks, such as software development [[16](https://arxiv.org/html/2412.03563v1#bib.bib16), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)], question answering [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)] and paper reviewing [[30](https://arxiv.org/html/2412.03563v1#bib.bib30)]. Such simulations are usually focused on small-scale agents within specific scenarios, emphasizing the collective wisdom of agents with specialized expertise.
3. 3.

   Society Simulation: simulating more complex and diverse behaviors in the agent society to explore social dynamics in real-world applications. Such simulations could test social science theories within a small scope [[31](https://arxiv.org/html/2412.03563v1#bib.bib31)] or populate virtual spaces and communities with large-scale realistic social phenomena [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [33](https://arxiv.org/html/2412.03563v1#bib.bib33)]. The composition of individuals in such simulations is more complex and diverse.

These three types of simulations exhibit a progressive relationship. Individual simulation models a specific person or a type of person, serving as the foundation for scenario simulation and society simulation. Theoretically, society simulation can encompass a chaotic world composed of countless sub-scenarios, though current work focuses on specific scenarios.

Although this field has seen rapid growth, with some surveys summarizing agent architectures [[7](https://arxiv.org/html/2412.03563v1#bib.bib7), [9](https://arxiv.org/html/2412.03563v1#bib.bib9), [15](https://arxiv.org/html/2412.03563v1#bib.bib15)] or certain aspects of single-agent ability or multi-agent systems [[11](https://arxiv.org/html/2412.03563v1#bib.bib11), [14](https://arxiv.org/html/2412.03563v1#bib.bib14), [34](https://arxiv.org/html/2412.03563v1#bib.bib34)], there is an absence of a systematic review to summarize the work from the individual to society, providing a comprehensive blueprint for this field. This motivates us to present this survey, aiming to contribute to the research and development of simulations driven by LLM-based agents, as well as a wider range of interdisciplinary studies. To comprehensively describe our landscape, we organize our survey as follows. After a brief introduction to the background in  § [2](https://arxiv.org/html/2412.03563v1#S2 "2 Background ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"), we begin in  § [3](https://arxiv.org/html/2412.03563v1#S3 "3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents") by detailing how to conduct individual simulation through discussions of (1) the architecture of a single agent, (2) construction method of individual simulation, (3) the classification of objectives, and (4) the evaluation of individual simulation. Next, in  § [4](https://arxiv.org/html/2412.03563v1#S4 "4 Scenario Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"), we summarize scenario simulation, including (1) the elements that constitute a scenario simulation system, (2) the classification of scenarios, and (3) the evaluation of scenario simulation, exploring how multiple agents collaborate to achieve objectives within a single scenario. Following this, in  § [5](https://arxiv.org/html/2412.03563v1#S5 "5 Society Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"), we introduce society simulation, examining how multi-agent systems can construct complex social dynamics through (1) the social construction elements of society simulation, (2) the classification of society simulation scenarios, and (3) the evaluation of society simulation. In  § [6](https://arxiv.org/html/2412.03563v1#S6 "6 Datasets and Benchmarks ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"), we summarize existing datasets and benchmarks. Based on the earlier sections, we analyze trends in these three aspects in  § [7](https://arxiv.org/html/2412.03563v1#S7 "7 Trend of Social Simulations ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents") and present the conclusion in  § [8](https://arxiv.org/html/2412.03563v1#S8 "8 Conclusion ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents").

![Refer to caption](https://arxiv.org/html/2412.03563v1/fm_indi_v2.2.png)


Figure 2: Illustration of individual simulation blueprint. An individual agent is typically composed of an architecture with modules involving profile, memory, planning, and action through construction method, prompting or training, to simulate specific objectives like characters or demographics . Individual simulation can be evaluated statically and interactively with different dimensions being observed.

## 2 Background

### 2.1 Large Language Model-based Agents

Benefiting from the large-scale parameters and pre-training on vast amounts of data, the recently emerging large language models have shown great potential in achieving human-like intelligence [[35](https://arxiv.org/html/2412.03563v1#bib.bib35), [6](https://arxiv.org/html/2412.03563v1#bib.bib6), [36](https://arxiv.org/html/2412.03563v1#bib.bib36)]. This has sparked a rise in the research of LLM-empowered agents, where the key idea is to equip the LLMs with human capabilities such as memory [[37](https://arxiv.org/html/2412.03563v1#bib.bib37), [38](https://arxiv.org/html/2412.03563v1#bib.bib38)], planning [[39](https://arxiv.org/html/2412.03563v1#bib.bib39), [40](https://arxiv.org/html/2412.03563v1#bib.bib40)] and tool usage [[41](https://arxiv.org/html/2412.03563v1#bib.bib41), [42](https://arxiv.org/html/2412.03563v1#bib.bib42)]. The memory module enables agents to store and operate historical information to facilitate future actions. Memory of different structures [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [43](https://arxiv.org/html/2412.03563v1#bib.bib43)] and formats [[44](https://arxiv.org/html/2412.03563v1#bib.bib44), [45](https://arxiv.org/html/2412.03563v1#bib.bib45)] have been integrated into LLM-based agents. The planning module helps agents to decompose complex tasks into subtasks, where various planning strategies [[5](https://arxiv.org/html/2412.03563v1#bib.bib5), [39](https://arxiv.org/html/2412.03563v1#bib.bib39)] are adopted. The tool-usage module allows agents to make use of external tools or resources [[39](https://arxiv.org/html/2412.03563v1#bib.bib39), [46](https://arxiv.org/html/2412.03563v1#bib.bib46)] to solve tasks. Overall, these modules assist agents in operating more effectively in complex and diverse environments.

### 2.2 Multi-agent Systems

To realize complex scenarios, a single agent is never enough. A system where interaction between multiple agents is involved is referred to as a multi-agent system (MAS). The agents may have a common goal, such as working together to accomplish a task [[16](https://arxiv.org/html/2412.03563v1#bib.bib16), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)] or solve a problem [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)], or they may just have self-interested goals that can cause them to compete for limited resources [[47](https://arxiv.org/html/2412.03563v1#bib.bib47)]. In a multi-agent system, each agent may be assigned distinct roles and skills, as well as distinct tasks. These agents can be organized in various ways, such as layered or centralized structures [[48](https://arxiv.org/html/2412.03563v1#bib.bib48), [49](https://arxiv.org/html/2412.03563v1#bib.bib49), [50](https://arxiv.org/html/2412.03563v1#bib.bib50)], and can communicate through different methods [[51](https://arxiv.org/html/2412.03563v1#bib.bib51), [52](https://arxiv.org/html/2412.03563v1#bib.bib52), [53](https://arxiv.org/html/2412.03563v1#bib.bib53)]. These factors significantly influence the effectiveness and efficiency of multi-agent interactions.

## 3 Individual Simulation

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Objectives | Paper | Aritecture | | | | Construtction |
|  | Profile | Memory | Planning | Action Domain |  |
| Characters | Brahman et al. [[54](https://arxiv.org/html/2412.03563v1#bib.bib54)] | Dialogue/Description | Short-term | - | Open/Closed | Parametric |
| Chen et al. [[55](https://arxiv.org/html/2412.03563v1#bib.bib55)] | Dialogue/Description | Short-term | - | Open | Parametric /Nonparametric |
| Schwitzgebel et al. [[56](https://arxiv.org/html/2412.03563v1#bib.bib56)] | Dialogue | Short-term | - | Open | Parametric |
| Generative Agents [[57](https://arxiv.org/html/2412.03563v1#bib.bib57)] | Description | Short/Long-term | - | Open | Nonparametric |
| Agrawal et al. [[58](https://arxiv.org/html/2412.03563v1#bib.bib58)] | Dialogue/Description | Short-term | - | Open | Parametric |
| ChatHaruhi [[59](https://arxiv.org/html/2412.03563v1#bib.bib59)] | Dialogue | Short-term | - | Open | Parametric |
| LiveChat [[60](https://arxiv.org/html/2412.03563v1#bib.bib60)] | Dialogue/Description | Short/Long-term | - | Open/Closed | Parametric |
| RoleLLM [[28](https://arxiv.org/html/2412.03563v1#bib.bib28)] | Description/Dialogue | Short-term | - | Open/Closed | Parametric |
| CharacterLLM [[10](https://arxiv.org/html/2412.03563v1#bib.bib10)] | Description | Short-term | Subjective | Open | Parametric |
| InCharacter [[61](https://arxiv.org/html/2412.03563v1#bib.bib61)] | - | Short-term | - | Open/Closed | - |
| CharacterGLM [[62](https://arxiv.org/html/2412.03563v1#bib.bib62)] | Description/Dialogue | Short-term | - | Open | Parametric |
| RoleEval [[63](https://arxiv.org/html/2412.03563v1#bib.bib63)] | Description | Short-term | - | Closed | Parametric |
| CharacterEval [[64](https://arxiv.org/html/2412.03563v1#bib.bib64)] | Dialogue | Short-term | - | Open | Nonparametric |
| Neeko [[65](https://arxiv.org/html/2412.03563v1#bib.bib65)] | Description | Short-term | - | Open | Parametric |
| Character is Destiny [[66](https://arxiv.org/html/2412.03563v1#bib.bib66)] | Description | Short/Long-term | - | Closed | Nonparametric |
| Yuan et al. [[67](https://arxiv.org/html/2412.03563v1#bib.bib67)] | Description | Short-term | - | Open/Closed | Nonparametric |
| Capturing Minds [[68](https://arxiv.org/html/2412.03563v1#bib.bib68)] | Description/Dialogue | Short/Long-term | Subjective | Open/Closed | Parametric |
| MMRole [[69](https://arxiv.org/html/2412.03563v1#bib.bib69)] | Description | Short-term | - | Open | Parametric |
| Yu et al. [[70](https://arxiv.org/html/2412.03563v1#bib.bib70)] | Dialogue | Short-term | - | Open | Parametric |
|  | Rational sensibility [[71](https://arxiv.org/html/2412.03563v1#bib.bib71)] | - | Short-term | Empathetic | Closed | Parametric |
| Demographics | Karra et al.[[72](https://arxiv.org/html/2412.03563v1#bib.bib72)] | Dialogue/Description | Short-term | - | Closed | Parametric |
| Jiang et al. [[73](https://arxiv.org/html/2412.03563v1#bib.bib73)] | Description | Short-term | - | Closed | Nonparametric |
| Liu et al. [[74](https://arxiv.org/html/2412.03563v1#bib.bib74)] | Description | Short/Long-term | - | Open | Parametric |
| Out of One, Many [[12](https://arxiv.org/html/2412.03563v1#bib.bib12)] | Description | Short-term | - | Open | Nonparametric |
| Simulated Economic Agents [[75](https://arxiv.org/html/2412.03563v1#bib.bib75)] | Description | Short-term | - | Closed | Nonparametric |
| The wall street neophyte [[76](https://arxiv.org/html/2412.03563v1#bib.bib76)] | Description | Short-term | Empathetic | Closed | Nonparametric |
| Toxicity in ChatGPT [[77](https://arxiv.org/html/2412.03563v1#bib.bib77)] | Description | Short-term | - | Open | Nonparametric |
| Song et al. [[78](https://arxiv.org/html/2412.03563v1#bib.bib78)] | Description | Short-term | - | Closed | Nonparametric |
| Marked Personas [[79](https://arxiv.org/html/2412.03563v1#bib.bib79)] | Description | Short-term | - | Open | Nonparametric |
| Wang et al. [[80](https://arxiv.org/html/2412.03563v1#bib.bib80)] | Description | Short/Long-term | - | Open | Nonparametric |
| Serapio-García et al. [[81](https://arxiv.org/html/2412.03563v1#bib.bib81)] | Description | Short-term | - | Open | Nonparametric |
| Huang et al. [[82](https://arxiv.org/html/2412.03563v1#bib.bib82)] | Description | Short-term | - | Closed | Nonparametric |
| CharacterChat [[83](https://arxiv.org/html/2412.03563v1#bib.bib83)] | Description | Short/Long-term | - | Open | Nonparametric |
| Conversational health agents [[84](https://arxiv.org/html/2412.03563v1#bib.bib84)] | Description | Short/Long-term | Empathetic | Open | Nonparametric |
| Chen et al. [[85](https://arxiv.org/html/2412.03563v1#bib.bib85)] | Description | Short/Long-term | - | Closed | Nonparametric |
| EconAgent [[86](https://arxiv.org/html/2412.03563v1#bib.bib86)] | Description | Short/Long-term | - | Open | Nonparamaetric |
| Shea et al. [[87](https://arxiv.org/html/2412.03563v1#bib.bib87)] | Dialogue | Short-term | - | Open | Parametric |
| Be Selfish, But Wisely [[88](https://arxiv.org/html/2412.03563v1#bib.bib88)] | Dialogue | Short-term | - | Open | Parametric |
| Chain of Empathy [[89](https://arxiv.org/html/2412.03563v1#bib.bib89)] | - | Short-term | Empathetic | Open | Nonparametric |
| Bias Runs Deep [[90](https://arxiv.org/html/2412.03563v1#bib.bib90)] | Description | Short-term | - | Open | Nonparametric |
| Li et al. [[91](https://arxiv.org/html/2412.03563v1#bib.bib91)] | Dialogue | Short-term | - | Open | Parametric |
| Xie et al. [[92](https://arxiv.org/html/2412.03563v1#bib.bib92)] | Description | Short-term | Subjective | Closed | Nonparametric |
| Lee et al. [[93](https://arxiv.org/html/2412.03563v1#bib.bib93)] | Description | Short-term | - | Closed | Nonparametric |
| CultureLLM [[94](https://arxiv.org/html/2412.03563v1#bib.bib94)] | Dialogue | Short-term | - | Open | Parametric |
| ControlLM [[95](https://arxiv.org/html/2412.03563v1#bib.bib95)] | - | Short/Long-term | - | Open | Nonparamatric |
| Random Silicon Sampling [[96](https://arxiv.org/html/2412.03563v1#bib.bib96)] | Description | Short-term | - | Closed | Nonparametric |
| Bisbee et al. [[97](https://arxiv.org/html/2412.03563v1#bib.bib97)] | Description | Short-term | - | Closed | Nonparametric |
| PersonaHub [[98](https://arxiv.org/html/2412.03563v1#bib.bib98)] | Description | Short-term | - | Open | Parametric |
| Qu et al. [[99](https://arxiv.org/html/2412.03563v1#bib.bib99)] | Description | Short-term | - | Closed | Nonparametric |
| Interactive Agents [[100](https://arxiv.org/html/2412.03563v1#bib.bib100)] | Description | Short-term | - | Open | Nonparametric |

Table 1: A list of representative works of individual simulation.

Individual simulation focuses on designing a modular architecture that integrates individualized data for the construction of agents and simulating the specific objective with high fidelity.
In this section, we first outline the basic architecture of the agent in the individual simulation with four key components in §[3.1](https://arxiv.org/html/2412.03563v1#S3.SS1 "3.1 Architecture ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Then, two construction methods are discussed in §[3.2](https://arxiv.org/html/2412.03563v1#S3.SS2 "3.2 Construction ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents") to implement the integration of individualized data into objectives introduced in §[3.3](https://arxiv.org/html/2412.03563v1#S3.SS3 "3.3 Simulation Objectives ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). The evaluation methods are examined from different perspectives in §[3.4](https://arxiv.org/html/2412.03563v1#S3.SS4 "3.4 Evaluation ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). The overall framework is presented in Figure [2](https://arxiv.org/html/2412.03563v1#S1.F2 "Figure 2 ‣ 1 Introduction ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents") and representative works are summarized in Table [1](https://arxiv.org/html/2412.03563v1#S3.T1 "Table 1 ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents").

### 3.1 Architecture

To effectively accomplish individual simulation, it is essential to construct an agent architecture that can accurately replicate the features of the individual. This requires a balance between theoretical abstraction and practical implementation to capture the complexity of human behaviors. Typically, this architecture is modularized into four core components: profile, memory, planning, and action.

#### 3.1.1 Profile

Profile differentiates the unique characteristics of simulated individuals, encompassing attributes, behaviors, and constraints. The profiles differ in the ways of construction and their forms.

##### Profile Construction

Profile construction refers to the process of collecting individual-related information, which can be categorized into manual modification and LLM generation.
Manual modification takes advantage of publicly available data to create high-quality profiles through a human-guided process. According to the collected sources, manual modification can also be classified into three categories: handcrafting, online communities, and historical works. Handcrafting manually organized some coarse strength information, such as well-known characters [[101](https://arxiv.org/html/2412.03563v1#bib.bib101)] and specific personalities [[77](https://arxiv.org/html/2412.03563v1#bib.bib77), [79](https://arxiv.org/html/2412.03563v1#bib.bib79)], while online communities construct profiles built on the web data like Wikipedia [[10](https://arxiv.org/html/2412.03563v1#bib.bib10)] and social media [[60](https://arxiv.org/html/2412.03563v1#bib.bib60)], where the profile implicitly exists in conversations and materials.
In addition, literary works serve as additional descriptions that reflect the author’s thoughts [[56](https://arxiv.org/html/2412.03563v1#bib.bib56)] and characters in the storyline [[54](https://arxiv.org/html/2412.03563v1#bib.bib54), [59](https://arxiv.org/html/2412.03563v1#bib.bib59)].
LLM generation automatically generates the expected persona-based information profiles by prompting LLMs with essential individual details [[83](https://arxiv.org/html/2412.03563v1#bib.bib83), [28](https://arxiv.org/html/2412.03563v1#bib.bib28), [61](https://arxiv.org/html/2412.03563v1#bib.bib61)]. This method explores diverse profiles with ease, while the quality needs human supervision with caution.

##### Profile Form

Profile form defines the format of individual information, which can be categorized into descriptions and conversations.
Descriptions directly describe basic individual information or identity with details like name, age, and gender [[102](https://arxiv.org/html/2412.03563v1#bib.bib102), [101](https://arxiv.org/html/2412.03563v1#bib.bib101)]. While descriptions can intuitively reflect the basic attributes of an individual, deeper contextual information can also be ignored.
On the contrary, conversations implicitly reflect the character profile through dialogue.
A substantial amount of conversational data is derived from sources such as films, literary works, and scripts [[103](https://arxiv.org/html/2412.03563v1#bib.bib103), [54](https://arxiv.org/html/2412.03563v1#bib.bib54), [104](https://arxiv.org/html/2412.03563v1#bib.bib104), [70](https://arxiv.org/html/2412.03563v1#bib.bib70)].
Considering the extensive commonsense knowledge learned by LLMs in the pre-training stage, recent works leverage LLMs to generate individual dialogues [[59](https://arxiv.org/html/2412.03563v1#bib.bib59), [98](https://arxiv.org/html/2412.03563v1#bib.bib98)], which defines the artistic genre through six essential elements to generate detailed drama scripts [[105](https://arxiv.org/html/2412.03563v1#bib.bib105)] and imitates speaking styles through context learning [[28](https://arxiv.org/html/2412.03563v1#bib.bib28), [65](https://arxiv.org/html/2412.03563v1#bib.bib65)].

#### 3.1.2 Memory

Memory is designed to store perceived or generated information, helping agents maintain consistency and continuity of behavior and overcome the limited context window of LLMs. Considering the complexity of memory, researchers struggle to design more efficient memory types and operations.

##### Memory Type

Based on the temporal span of stored content, memory can be commonly divided into two types, namely short-term memory and long-term memory. Short-term memory records the instant local information that the agent perceives, which can be further divided into simulation contents and simulation supplements. Simulation contents include essential interaction data like user instructions [[56](https://arxiv.org/html/2412.03563v1#bib.bib56), [77](https://arxiv.org/html/2412.03563v1#bib.bib77)], dialogue history [[106](https://arxiv.org/html/2412.03563v1#bib.bib106), [107](https://arxiv.org/html/2412.03563v1#bib.bib107)], and user/environment responses [[76](https://arxiv.org/html/2412.03563v1#bib.bib76)]. Simulation supplements provide additional environmental information including scene descriptions [[76](https://arxiv.org/html/2412.03563v1#bib.bib76), [58](https://arxiv.org/html/2412.03563v1#bib.bib58)] and scene-related experiences [[10](https://arxiv.org/html/2412.03563v1#bib.bib10), [66](https://arxiv.org/html/2412.03563v1#bib.bib66)], which navigate agents through the simulation to perform tasks appropriately.
Long-term memory stores persistent global information, preventing deviations from intended goals, which holds extensive individual-specific information stably, including past experiences and behaviors, current knowledge, and skills [[86](https://arxiv.org/html/2412.03563v1#bib.bib86), [66](https://arxiv.org/html/2412.03563v1#bib.bib66)]. With the proposal of using the vector database as the long-term memory hub, the management, retrieval, and organization of memory is more effective [[108](https://arxiv.org/html/2412.03563v1#bib.bib108)].

##### Memory Operation

Memory operations stand for the continuous updating and utilization of memory by the agent. The common memory operations include three types, namely memory writing, memory retrieval, and memory reflection.

Memory writing aims to incorporate the relevant historical content into the memory. This process mirrors human memory formation, where useful information is retained for future retrieval. The memories to be written vary from user-specific dialogue history [[103](https://arxiv.org/html/2412.03563v1#bib.bib103)], new skills [[109](https://arxiv.org/html/2412.03563v1#bib.bib109)], to selected papers and other forms [[110](https://arxiv.org/html/2412.03563v1#bib.bib110)].

Memory retrieval serves to extract valuable content from memory based on customized requirements. The overall performance of the individual simulation highly relies on the effectiveness of memory retrieval since simulations are sensitive to the context.
Traditional retrieval technologies rely on similarity such as keyword matching [[111](https://arxiv.org/html/2412.03563v1#bib.bib111)] and embedding vectors [[108](https://arxiv.org/html/2412.03563v1#bib.bib108)], while recent works introduce the retrieval model to select the most relevant information [[112](https://arxiv.org/html/2412.03563v1#bib.bib112), [113](https://arxiv.org/html/2412.03563v1#bib.bib113)].

Memory reflection mirrors the human ability to reconsider past behaviors and opinions. Specifically, it helps the agent to organize, refine, and elevate memories into more abstract and insightful concepts. Generative Agents [[57](https://arxiv.org/html/2412.03563v1#bib.bib57)] maintains a comprehensive record of agents’ experiences with a tree-structured reflection process to optimize memory usage. ProAgent [[114](https://arxiv.org/html/2412.03563v1#bib.bib114)] incorporates memory reflection with validation and belief correction to improve the agent’s planning and decision-making. Voyager [[109](https://arxiv.org/html/2412.03563v1#bib.bib109)] allows agents to reflect on their behavior and update their skill libraries through self-verification. Although the application scenarios of memory reflection are still limited, it shows great improvement in enhancing performance and increasing the depth of simulations, especially in complex environments.

#### 3.1.3 Planning

Planning is the process of deciding on a series of actions aimed at achieving specific goals. Traditional planning tasks typically focus on solving particular problems, such as mathematical reasoning [[115](https://arxiv.org/html/2412.03563v1#bib.bib115)] or embodied tasks [[116](https://arxiv.org/html/2412.03563v1#bib.bib116), [117](https://arxiv.org/html/2412.03563v1#bib.bib117)]. At the individual simulation level, however, agents are expected to go beyond mere problem-solving. They should also be able to simulate personalized thinking and emotional responses during interactions with specific individuals. This extends planning into two additional categories: empathetic planning and subjective planning.

##### Empathetic planning

Empathetic planning refers to an agent’s ability to infer and perceive the behavior and emotions of others before taking action. It involves using Chain-of-Thought (CoT) reasoning to understand the situations of others and make adaptive decisions or judgments [[76](https://arxiv.org/html/2412.03563v1#bib.bib76), [89](https://arxiv.org/html/2412.03563v1#bib.bib89), [71](https://arxiv.org/html/2412.03563v1#bib.bib71)]. This allows the agent to tailor its actions based on the emotional and behavioral context, guiding the acquisition of personalized feedback.

##### Subjective planning

Subjective planning refers to the actions an agent takes based on its own thoughts and feelings, in line with its predefined role or identity.
This can involve utilizing inner monologues from simulated characters to fine-tune LLMs [[10](https://arxiv.org/html/2412.03563v1#bib.bib10), [68](https://arxiv.org/html/2412.03563v1#bib.bib68)] or using CoT to guide LLMs to express themselves according to their own beliefs [[92](https://arxiv.org/html/2412.03563v1#bib.bib92)].
This form of planning is driven by the agent’s internal state, rather than by external stimuli or the needs of others.

#### 3.1.4 Action

Action refers to the direct interaction between LLMs and their environment. Action encompasses two key aspects: the action situation, which describes the context in which actions occur, and the action domain, which defines the requirements for action space. Action serves as the interface for simulating human behavior, allowing LLMs to execute tasks that mimic real-world actions and responses. This interaction enables a deeper understanding of human-like decision-making and execution in various scenarios.

##### Action Situation

With individual simulations focusing on more and more diverse and complicated situations, various action situations spring out accordingly, ranging from dialogue [[118](https://arxiv.org/html/2412.03563v1#bib.bib118)], games [[119](https://arxiv.org/html/2412.03563v1#bib.bib119)], real word [[106](https://arxiv.org/html/2412.03563v1#bib.bib106)], etc. Typically, action situations can be divided into simple dialogues and crafted situations.

Simple dialogues are few-turn conversations without restricted environments, such as constructing dialogues between two characters [[54](https://arxiv.org/html/2412.03563v1#bib.bib54)]. Recent researches utilize simple dialogues to induce potential attributes within the models, involving personality [[72](https://arxiv.org/html/2412.03563v1#bib.bib72), [73](https://arxiv.org/html/2412.03563v1#bib.bib73)], traits [[81](https://arxiv.org/html/2412.03563v1#bib.bib81)] and toxicity [[77](https://arxiv.org/html/2412.03563v1#bib.bib77)]. Other works conduct evaluations of persona with interviewing [[61](https://arxiv.org/html/2412.03563v1#bib.bib61)] or questionnaire [[120](https://arxiv.org/html/2412.03563v1#bib.bib120)] with simple dialogues to facilitate their experiment.

Crafted situations are elaborately designed environments including detailed rules and surrounding descriptions. Common situations like games are modified from simple dialogues. They leverage game rules to provide a settled virtual topic for both users and agents to play in, especially in the board role-playing games [[119](https://arxiv.org/html/2412.03563v1#bib.bib119), [119](https://arxiv.org/html/2412.03563v1#bib.bib119)] [[121](https://arxiv.org/html/2412.03563v1#bib.bib121)]. Besides, researchers have developed a more delicate environment called sandbox [[111](https://arxiv.org/html/2412.03563v1#bib.bib111)], which not only includes rules but establish an objective environment. To further enrich the individual simulation situation, some authors add some elements existing in scripts like facial expression, tiny movements [[58](https://arxiv.org/html/2412.03563v1#bib.bib58), [105](https://arxiv.org/html/2412.03563v1#bib.bib105)], and nuanced information from environment images [[69](https://arxiv.org/html/2412.03563v1#bib.bib69)].

##### Action Domain

The Action domain can be commonly divided into close domain and open domain based on the restriction of action space.

Closed domain simulation occurs when the available action space is limited. In simple situations such as completing questionnaires testing [[72](https://arxiv.org/html/2412.03563v1#bib.bib72)], making decisions from a set of options [[75](https://arxiv.org/html/2412.03563v1#bib.bib75)], or rating with predefined standards [[61](https://arxiv.org/html/2412.03563v1#bib.bib61)], the action space of LLMs is determined by researchers ahead of simulation to make responses predictable. In practical scenarios, LLMs are required to choose tools [[112](https://arxiv.org/html/2412.03563v1#bib.bib112), [122](https://arxiv.org/html/2412.03563v1#bib.bib122)] or select specific functions to complete concrete tasks, like recommending, browsing, and compiling.
Individual simulation with agents in closed-domain tasks can improve human work efficiency, extending beyond entertainment purposes.

Open domain simulation places few restrictions on actions, allowing LLMs to generate responses freely. This approach more closely resembles real-world conditions, but also demands higher standards for individual simulation. Among various open-domain tasks, taking actions through conversation is a popular method for simulating individual behavior [[54](https://arxiv.org/html/2412.03563v1#bib.bib54), [59](https://arxiv.org/html/2412.03563v1#bib.bib59), [62](https://arxiv.org/html/2412.03563v1#bib.bib62), [65](https://arxiv.org/html/2412.03563v1#bib.bib65)], in which the varied settings stimulate LLMs’ potential for individual simulation and allow researchers to oversee simulations across diverse and nuanced dimensions. Another growing method of open-domain simulation is scenario-based interaction, where LLMs are assigned roles and are required to interact in crated situations like sandbox [[109](https://arxiv.org/html/2412.03563v1#bib.bib109), [108](https://arxiv.org/html/2412.03563v1#bib.bib108)] or established game settings [[119](https://arxiv.org/html/2412.03563v1#bib.bib119), [121](https://arxiv.org/html/2412.03563v1#bib.bib121)].

### 3.2 Construction

Construction indicates the process of integrating individual data into the established model of LLMs, which aligns the design model and the individual, thus creating the simulating LLMs. Generally, construction methods are distinguished into two types, namely nonparametric prompting and parametric training.

#### 3.2.1 Nonparametric Prompting

Nonparametric prompting, i.e. prompt engineering, is a method of interacting with LLMs by designing and optimizing input prompts. In some individual simulations, the description-based profile is implemented by a system prompt. Researchers often create system prompts that begin with “You are a…” to assign models specific demographic features and roles [[77](https://arxiv.org/html/2412.03563v1#bib.bib77)]. Besides, LLM outputs are enhanced in some works through few-shot prompting by providing specific examples to inject detailed information and improve response quality. Moreover, incorporating problem-specific details directly within prompt structures can significantly enhance the effectiveness of the simulation.

Short-term memory is often implemented by nonparametric prompting. For situation-based individual simulations, environment descriptions and behavior rules are typically conveyed through prompt engineering [[121](https://arxiv.org/html/2412.03563v1#bib.bib121)]. Since situational information is generally objective and must be followed, emphasizing this information directly in the input is a rather effective method for constructing simulations. However, due to the context window limitations of LLMs, the quality of the profile prompt significantly restricts prompt-based individual simulations.
Moreover, the preset template configurations as the “assistant” within
LLMs pose a major challenge for prompt engineering in individual simulations [[83](https://arxiv.org/html/2412.03563v1#bib.bib83)].

#### 3.2.2 Parametric Training

Parametric training modifies the model by directly updating the LLM parameters with given data. The training methods can be generally categorized into pre-training, finetuning, and reinforcement learning.

##### Pre-training

The pre-training method in individual simulation focuses on aligning the original LLMs with basic individual-related data and setting up a fundamental knowledge of individuals for LLMs. The targets of training datasets vary in recent studies, including individual descriptions [[113](https://arxiv.org/html/2412.03563v1#bib.bib113)], literature summaries [[54](https://arxiv.org/html/2412.03563v1#bib.bib54)], and philosophical works or utterances [[56](https://arxiv.org/html/2412.03563v1#bib.bib56)].

##### Finetuning

The finetuning method is designed for adapting LLMs for individual simulation in specific tasks and situations. Researchers collect and modify supervised instruction datasets tailored for specific situations and fine-tune their models to equip them with the corresponding capabilities. Using persona-enhanced datasets is an effective method to regulate the models’ behavior in individual simulation, which is constructed by adding instruction tuning samples of the simulated individual’s behavior [[68](https://arxiv.org/html/2412.03563v1#bib.bib68), [98](https://arxiv.org/html/2412.03563v1#bib.bib98)].
LoRA finetuning method can integrate multiple characters into a single model [[65](https://arxiv.org/html/2412.03563v1#bib.bib65), [123](https://arxiv.org/html/2412.03563v1#bib.bib123)]. In multimodal finetuning scenarios, both visual and textual information are considered to significantly enhance LLMs’ simulation behavior in multimodal contexts [[113](https://arxiv.org/html/2412.03563v1#bib.bib113), [69](https://arxiv.org/html/2412.03563v1#bib.bib69)]. Compared to prompt engineering, finetuning leverages large datasets more effectively and reduces the limitations imposed by the pre-training phase of LLMs.

##### Reinforcement Learning

The reinforcement learning method is used to refine models in dynamic environments with the goal of maximizing cumulative rewards. In simulations involving conversations and dialogues, the quality of the LLM’s responses directly influences the rewards it receives [[124](https://arxiv.org/html/2412.03563v1#bib.bib124), [87](https://arxiv.org/html/2412.03563v1#bib.bib87), [125](https://arxiv.org/html/2412.03563v1#bib.bib125)], which encourages the model to learn the appropriate ways to respond in dialogues.
By modifying the reward function, researchers can influence the model’s preference and thus manage to mimic the personas of the simulated individuals [[88](https://arxiv.org/html/2412.03563v1#bib.bib88)]. As individual simulations become more diverse and complex, reinforcement learning plays a crucial role in improving the dynamic behavior of simulated LLMs.

### 3.3 Simulation Objectives

The simulation objectives of individual simulation for various purposes can be divided into two categories: (1) Demographics: a group of people who share the same characteristics, such as psychological traits (e.g., INTJ) or identity-related features (e.g., farmers). (2) Characters: a specific individual, whether real or virtual, who is widely recognized by groups of people.

#### 3.3.1 Demographics

Demographic individuals refer to a group of people who share the same features. In an abstract sense, demographics can be understood as the centroid of an embedding space that represents common opinions and beliefs, essentially clustering individual embeddings for classification purposes [[91](https://arxiv.org/html/2412.03563v1#bib.bib91)]. Demographic simulation involves assigning an identity, such as “student,” to LLMs and guiding the simulators to perform specific tasks. Early demographic simulations have focused on investigating the internal demographic attributes within pre-trained models [[74](https://arxiv.org/html/2412.03563v1#bib.bib74), [126](https://arxiv.org/html/2412.03563v1#bib.bib126)], laying the groundwork for further simulations. Additionally, these simulations are used to reflect opinion surveys [[93](https://arxiv.org/html/2412.03563v1#bib.bib93)] or evaluate preferences and biases [[99](https://arxiv.org/html/2412.03563v1#bib.bib99), [127](https://arxiv.org/html/2412.03563v1#bib.bib127)] of particular groups. With the ability to scale synthetic dialogue [[128](https://arxiv.org/html/2412.03563v1#bib.bib128), [63](https://arxiv.org/html/2412.03563v1#bib.bib63), [98](https://arxiv.org/html/2412.03563v1#bib.bib98)] involving specific personas, demographic simulations can also contribute to societal simulation studies [[111](https://arxiv.org/html/2412.03563v1#bib.bib111)]. In most cases, demographic simulation is implemented through nonparametric prompting. Many researchers in this field focus on designing tasks, such as questionnaires or social experiments [[75](https://arxiv.org/html/2412.03563v1#bib.bib75)], to fully tap into the simulating potential of LLMs.

#### 3.3.2 Characters

Characters are distinct individuals who differ from one another. They may be ordinary platform users, well-known public figures, or fictional characters from novels. Researchers favor these characters because they enhance the expertise of LLMs in specific domains and challenge the learning capabilities of these models. From Haruhi and Li Yunlong [[59](https://arxiv.org/html/2412.03563v1#bib.bib59)] to Beethoven [[66](https://arxiv.org/html/2412.03563v1#bib.bib66)], individual simulations select their protagonists from both real and virtual worlds.

##### Real Characters

Real characters, typically famous figures, are associated with high-quality data from platforms like Wikipedia and social media, making it easier to establish objective profiles and evaluate simulations. Many LLMs focus on historical figures, celebrities across various periods and backgrounds [[10](https://arxiv.org/html/2412.03563v1#bib.bib10), [129](https://arxiv.org/html/2412.03563v1#bib.bib129)], characters from online encyclopedias [[64](https://arxiv.org/html/2412.03563v1#bib.bib64)], and popular livestreamers on Douyin [[60](https://arxiv.org/html/2412.03563v1#bib.bib60)]. Since LLMs often have prior knowledge of these individuals, creating their profiles is relatively straightforward. Real and simulated characters are also used to test LLM simulation capabilities, such as in philosopher simulations [[56](https://arxiv.org/html/2412.03563v1#bib.bib56)].

##### Virtual Characters

Virtual characters are fictional roles created in novels, movies, and video games. Advancements in virtual character simulation can significantly benefit entertainment sectors like the gaming industry and theme parks. Many researchers have drawn inspiration from famous fictional characters, such as Harry Potter [[55](https://arxiv.org/html/2412.03563v1#bib.bib55)], Sun Wukong [[62](https://arxiv.org/html/2412.03563v1#bib.bib62)], and Tong Xiangyu [[130](https://arxiv.org/html/2412.03563v1#bib.bib130)]. Additionally, some experiments design virtual characters [[119](https://arxiv.org/html/2412.03563v1#bib.bib119)] with specific attributes or objectives. However, despite the attention virtual character simulation attracts, developing virtual individual LLMs presents challenges, particularly in ensuring the quality and reliability of their datasets. Most simulations of virtual characters are designed for interactive conversations, enhancing user experience in various entertaining scenarios.

![Refer to caption](https://arxiv.org/html/2412.03563v1/fm_task_v2_3.png)


Figure 3: Illustration of scenario simulations. Given a specific scenario, building a multi-agent system involves modeling environment, roles, organization, and communication with detailed modules or mechanisms adjusted to the targeted scenario being supported. After simulating the scenario, the desired output, typically the result of a task or problem, is obtained and evaluated using different levels and strategies.

### 3.4 Evaluation

To measure the performance of individual simulations, provide insights into their feasibility, and guide improvements to simulation architectures, researchers have developed diverse evaluation standards and methods, ranging from simple to complex approaches. These methods can be categorized into static evaluation and interactive evaluation.

#### 3.4.1 Static Evaluation

Static evaluation refers to the dialogue-based assessment of LLMs by directly inducing their generation and measuring their quality. It can be categorized into subjective evaluation, which involves assessments by both LLMs and human evaluators, and objective evaluation, which utilizes mathematical tools for analysis.

##### Subjective Evaluation

Subjective evaluation refers to assessments conducted by humans or LLMs based on subjective standards. It often involves leveraging conversations with varying forms and contexts. Interview techniques are widely adopted [[28](https://arxiv.org/html/2412.03563v1#bib.bib28), [61](https://arxiv.org/html/2412.03563v1#bib.bib61)] because they can effectively prompt LLMs to generate expected responses. Other approaches, such as utterance imitation [[77](https://arxiv.org/html/2412.03563v1#bib.bib77)], are also favored in some research. Once dialogues are generated, some studies utilize advanced LLMs to evaluate the output on a given scale [[61](https://arxiv.org/html/2412.03563v1#bib.bib61), [130](https://arxiv.org/html/2412.03563v1#bib.bib130), [65](https://arxiv.org/html/2412.03563v1#bib.bib65)], considering performance dimensions. These dimensions range from psychology-based metrics, such as the Big Five Personality Traits (BFI) and Myers-Briggs Type Indicator (MBTI), to language-based factors like grammar and tone. Human annotators are often involved in experiments to provide human reference points  [[57](https://arxiv.org/html/2412.03563v1#bib.bib57), [84](https://arxiv.org/html/2412.03563v1#bib.bib84), [131](https://arxiv.org/html/2412.03563v1#bib.bib131)].

##### Objective Evaluation

Objective evaluation refers to assessments based on objective indicators, utilizing mathematical and statistical tools. It takes advantage of mathematical tools to grade the generation of simulating LLMs. Examination commonly involves option choosing(or questionnaire) [[72](https://arxiv.org/html/2412.03563v1#bib.bib72)], ranking [[60](https://arxiv.org/html/2412.03563v1#bib.bib60)] and question answering [[102](https://arxiv.org/html/2412.03563v1#bib.bib102)]. Accuracy [[106](https://arxiv.org/html/2412.03563v1#bib.bib106), [91](https://arxiv.org/html/2412.03563v1#bib.bib91)], F1 score, recall [[132](https://arxiv.org/html/2412.03563v1#bib.bib132), [133](https://arxiv.org/html/2412.03563v1#bib.bib133)] are used in option choosing and ranking. In the examination of generation(question answering), text sequence related tools such as perplexity [[134](https://arxiv.org/html/2412.03563v1#bib.bib134), [118](https://arxiv.org/html/2412.03563v1#bib.bib118), [58](https://arxiv.org/html/2412.03563v1#bib.bib58)], ROUGE-L [[74](https://arxiv.org/html/2412.03563v1#bib.bib74), [55](https://arxiv.org/html/2412.03563v1#bib.bib55), [106](https://arxiv.org/html/2412.03563v1#bib.bib106)] and BLUE [[134](https://arxiv.org/html/2412.03563v1#bib.bib134), [74](https://arxiv.org/html/2412.03563v1#bib.bib74), [132](https://arxiv.org/html/2412.03563v1#bib.bib132), [60](https://arxiv.org/html/2412.03563v1#bib.bib60)] are broadly used in the evaluation, especially those with a reference version [[55](https://arxiv.org/html/2412.03563v1#bib.bib55)]. Objective Examination is a more credible method of evaluating the performance of LLMs in individual simulation. However, it is highly restricted, and occasionally, specific objective tools must be developed to facilitate the evaluation of simulation in given dimensions.

#### 3.4.2 Interactive Evaluation

Interactive evaluation refers to a circumstance-based assessment that creates a detailed interactive environment to measure the ability of individual simulations in complex scenarios. It is commonly applied in areas such as game performance [[121](https://arxiv.org/html/2412.03563v1#bib.bib121), [119](https://arxiv.org/html/2412.03563v1#bib.bib119)], task completion [[112](https://arxiv.org/html/2412.03563v1#bib.bib112), [135](https://arxiv.org/html/2412.03563v1#bib.bib135), [136](https://arxiv.org/html/2412.03563v1#bib.bib136)], and nuanced role-playing [[88](https://arxiv.org/html/2412.03563v1#bib.bib88), [104](https://arxiv.org/html/2412.03563v1#bib.bib104)]. Three key features of interactive evaluation are the carefully designed environment, real-time interactive external responses, and multi-stage assessments. Information about the crafted environment has been introduced in §[3.1.4](https://arxiv.org/html/2412.03563v1#S3.SS1.SSS4 "3.1.4 Action ‣ 3.1 Architecture ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Real-time interactive external responses refer to the feedback from the external environment in reaction to the outputs of simulating LLMs. Agent-environment interactions construct multiple dialogues between the LLMs and the environment. These interactions help reveal the LLMs’ capabilities in complex contexts, leading to more dynamic simulations. Single-aspect measurements are insufficient for interactive evaluation, so many studies adopt evaluated objectives that range from specific actions to hybrid actions [[110](https://arxiv.org/html/2412.03563v1#bib.bib110)], or from single-turn interactions to multi-turn dialogues [[10](https://arxiv.org/html/2412.03563v1#bib.bib10)]. Other studies assess generation quality, focusing on aspects such as accuracy relative to ground truth, nuanced simulations like tone imitation [[28](https://arxiv.org/html/2412.03563v1#bib.bib28), [107](https://arxiv.org/html/2412.03563v1#bib.bib107)], and self-reporting consistency [[137](https://arxiv.org/html/2412.03563v1#bib.bib137)]. In interactive evaluation, researchers prioritize not only accuracy but also the degree to which the simulation resembles real-world scenarios.

## 4 Scenario Simulation

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Scenario | Task | Paper | Environment | | | | Director Role | | | Organization | Communication |
| Configuration | State | History | Tools | Planner | Coordinator | Integrator |
| Dialog-  Driven | Social  Interaction | Sotopia [[138](https://arxiv.org/html/2412.03563v1#bib.bib138)] | ✓ | ✓ | ✓ |  |  |  |  | static,single | UNL |
| Elicitron [[139](https://arxiv.org/html/2412.03563v1#bib.bib139)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| APAM [[140](https://arxiv.org/html/2412.03563v1#bib.bib140)] | ✓ |  | ✓ |  |  |  |  | static,single | UNL |
| SimuLife++ [[141](https://arxiv.org/html/2412.03563v1#bib.bib141)] | ✓ |  | ✓ |  |  |  |  | static,single | UNL |
| Self-Emotion [[142](https://arxiv.org/html/2412.03563v1#bib.bib142)] | ✓ |  | ✓ |  |  | ✓ |  | dynamic,single | UNL |
| Question  Answering | ICL-AIF [[143](https://arxiv.org/html/2412.03563v1#bib.bib143)] | ✓ |  | ✓ |  |  | ✓ |  | static,single | UNL |
| FORD [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | ✓ |  | ✓ |  |  | ✓ |  | static,multi | UNL |
| du et al. [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)] | ✓ |  | ✓ |  |  |  |  | static,single | UNL |
| MAD [[145](https://arxiv.org/html/2412.03563v1#bib.bib145)] | ✓ |  | ✓ |  |  | ✓ |  | static,single | UNL |
| ChatEval [[146](https://arxiv.org/html/2412.03563v1#bib.bib146)] | ✓ |  | ✓ |  |  |  | ✓ | static,single | UNL |
| AutoGen [[147](https://arxiv.org/html/2412.03563v1#bib.bib147)] | ✓ |  | ✓ | ✓ |  |  |  | dynamic,single | UNL |
| AmazonHistoryPrice [[148](https://arxiv.org/html/2412.03563v1#bib.bib148)] | ✓ |  | ✓ |  |  |  |  | static,single | UNL |
| DoG [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] | ✓ |  | ✓ | ✓ |  |  |  | dynamic,single | UNL |
| ChatLLM [[49](https://arxiv.org/html/2412.03563v1#bib.bib49)] | ✓ |  |  |  |  |  |  | static,single | UNL |
| Game | xu et al.[[150](https://arxiv.org/html/2412.03563v1#bib.bib150)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| ReCon [[151](https://arxiv.org/html/2412.03563v1#bib.bib151)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| MachineSoM [[152](https://arxiv.org/html/2412.03563v1#bib.bib152)] | ✓ |  | ✓ |  |  |  |  | dynamic,single | UNL |
| AvalonBench [[153](https://arxiv.org/html/2412.03563v1#bib.bib153)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| lan et al. [[154](https://arxiv.org/html/2412.03563v1#bib.bib154)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| xu et al. [[155](https://arxiv.org/html/2412.03563v1#bib.bib155)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| ThinkThrice [[156](https://arxiv.org/html/2412.03563v1#bib.bib156)] | ✓ |  | ✓ |  |  |  |  | dynamic,single | UNL |
| CodeAct [[157](https://arxiv.org/html/2412.03563v1#bib.bib157)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| wu et al. [[158](https://arxiv.org/html/2412.03563v1#bib.bib158)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| WWQA [[159](https://arxiv.org/html/2412.03563v1#bib.bib159)] | ✓ |  | ✓ | ✓ |  |  | ✓ | static,multi | UNL |
| PLAYER [[160](https://arxiv.org/html/2412.03563v1#bib.bib160)] | ✓ |  | ✓ |  |  |  |  | dynamic,multi | UNL |
| GITM [[161](https://arxiv.org/html/2412.03563v1#bib.bib161)] | ✓ | ✓ | ✓ |  | ✓ |  |  | static,multi | UNL |
| sreedhar et al. [[162](https://arxiv.org/html/2412.03563v1#bib.bib162)] | ✓ | ✓ | ✓ |  |  |  |  | static,single | UNL |
| AmongAgents [[163](https://arxiv.org/html/2412.03563v1#bib.bib163)] | ✓ | ✓ | ✓ |  |  |  |  | static,multi | UNL |
| S-Agents [[164](https://arxiv.org/html/2412.03563v1#bib.bib164)] | ✓ | ✓ | ✓ |  | ✓ | ✓ |  | dynamic,single | UNL |
| Task-  Driven | Foundational  and Applied  Science | VIDS [[165](https://arxiv.org/html/2412.03563v1#bib.bib165)] | ✓ |  | ✓ |  |  |  |  | dynamic,multi | UNL |
| DR-CoT [[166](https://arxiv.org/html/2412.03563v1#bib.bib166)] | ✓ |  | ✓ |  |  |  |  | static,single | UNL |
| ChatGPT Research Group [[167](https://arxiv.org/html/2412.03563v1#bib.bib167)] | ✓ | ✓ | ✓ |  |  | ✓ |  | dynamic,multi | UNL |
| MedAgents [[168](https://arxiv.org/html/2412.03563v1#bib.bib168)] | ✓ |  | ✓ |  |  |  | ✓ | dynamic,multi | UNL,SL |
| MARG [[30](https://arxiv.org/html/2412.03563v1#bib.bib30)] | ✓ |  | ✓ |  |  | ✓ |  | static,multi | UNL |
| AI Hospital [[19](https://arxiv.org/html/2412.03563v1#bib.bib19)] | ✓ |  | ✓ |  |  |  | ✓ | static,multi | UNL,SL |
| REVIEWER2 [[169](https://arxiv.org/html/2412.03563v1#bib.bib169)] | ✓ |  |  |  |  |  |  | static,multi | UNL |
| CosmoAgent [[170](https://arxiv.org/html/2412.03563v1#bib.bib170)] | ✓ |  | ✓ |  |  | ✓ |  | dynamic,single | UNL |
| FPS [[26](https://arxiv.org/html/2412.03563v1#bib.bib26)] | ✓ |  | ✓ |  |  |  |  | dynamic,single | UNL |
| ResearchAgent [[171](https://arxiv.org/html/2412.03563v1#bib.bib171)] | ✓ |  |  | ✓ |  |  |  | static,multi | UNL |
| Agent Hospital [[18](https://arxiv.org/html/2412.03563v1#bib.bib18)] | ✓ |  | ✓ |  |  |  |  | dynamic,multi | UNL,SL |
| CulturePark [[50](https://arxiv.org/html/2412.03563v1#bib.bib50)] | ✓ |  | ✓ |  |  | ✓ |  | dynamic,single | UNL |
| SynthPAI [[172](https://arxiv.org/html/2412.03563v1#bib.bib172)] | ✓ |  | ✓ |  |  | ✓ |  | dynamic,single | UNL |
| DreamFactory [[173](https://arxiv.org/html/2412.03563v1#bib.bib173)] | ✓ |  | ✓ |  |  | ✓ |  | static,multi | UNL,SL |
| AutoTQA [[174](https://arxiv.org/html/2412.03563v1#bib.bib174)] | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | static,multi | UNL |
| DERA [[175](https://arxiv.org/html/2412.03563v1#bib.bib175)] | ✓ |  | ✓ |  |  |  | ✓ | static,single | UNL |
| Software  Development | Self-collaboration [[176](https://arxiv.org/html/2412.03563v1#bib.bib176)] | ✓ |  |  |  | ✓ |  |  | dynamic,multi | UNL |
| ChatDev [[177](https://arxiv.org/html/2412.03563v1#bib.bib177)] | ✓ | ✓ | ✓ | ✓ |  |  |  | static,multi | UNL,SL |
| MetaGPT [[17](https://arxiv.org/html/2412.03563v1#bib.bib17)] | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  | static,multi | SL |
| Experiential Co-Learning [[178](https://arxiv.org/html/2412.03563v1#bib.bib178)] | ✓ | ✓ | ✓ | ✓ |  |  |  | dynamic,multi | UNL,SL |
| AutoCodeRover [[179](https://arxiv.org/html/2412.03563v1#bib.bib179)] | ✓ |  | ✓ | ✓ |  |  |  | static,multi | UNL,SL |
| IER [[180](https://arxiv.org/html/2412.03563v1#bib.bib180)] | ✓ |  | ✓ |  |  |  |  | dynamic,single | UNL,SL |
| Other  Industries | Blind Judgement [[181](https://arxiv.org/html/2412.03563v1#bib.bib181)] | ✓ |  |  |  |  |  |  | static,single | UNL |
| TradingGPT [[182](https://arxiv.org/html/2412.03563v1#bib.bib182)] | ✓ | ✓ | ✓ |  |  |  |  | dynamic,single | UNL |
| Information Bazaar [[183](https://arxiv.org/html/2412.03563v1#bib.bib183)] | ✓ |  | ✓ |  |  |  |  | static,single | UNL |
| SimuCourt [[20](https://arxiv.org/html/2412.03563v1#bib.bib20)] | ✓ |  | ✓ |  |  | ✓ | ✓ | static,multi | UNL,SL |
| MATHVC [[184](https://arxiv.org/html/2412.03563v1#bib.bib184)] | ✓ |  | ✓ |  | ✓ |  |  | static,multi | UNL |
| baker et al.[[185](https://arxiv.org/html/2412.03563v1#bib.bib185)] | ✓ |  | ✓ |  |  |  |  | static,multi | UNL |
| LawLuo [[186](https://arxiv.org/html/2412.03563v1#bib.bib186)] | ✓ |  | ✓ |  |  | ✓ |  | dynamic,multi | UNL |
| MAIC [[187](https://arxiv.org/html/2412.03563v1#bib.bib187)] | ✓ | ✓ | ✓ |  |  | ✓ |  | dynamic,multi | UNL |
| CAMEL [[188](https://arxiv.org/html/2412.03563v1#bib.bib188)] | ✓ |  | ✓ |  | ✓ |  |  | static,single | UNL |
| SwiftSage [[189](https://arxiv.org/html/2412.03563v1#bib.bib189)] | ✓ | ✓ | ✓ |  |  |  |  | static,single | UNL |
| Multi-Agent Collaboration [[190](https://arxiv.org/html/2412.03563v1#bib.bib190)] | ✓ | ✓ | ✓ | ✓ |  |  |  | dynamic,single | UNL |
| CoELA [[191](https://arxiv.org/html/2412.03563v1#bib.bib191)] | ✓ | ✓ | ✓ |  |  |  |  | static,multi | UNL |
| RoCo [[192](https://arxiv.org/html/2412.03563v1#bib.bib192)] | ✓ | ✓ | ✓ |  |  |  |  | static,single | UNL |
| AgentVerse [[193](https://arxiv.org/html/2412.03563v1#bib.bib193)] | ✓ | ✓ | ✓ | ✓ | ✓ |  |  | dynamic,multi | UNL |
| Scalable [[194](https://arxiv.org/html/2412.03563v1#bib.bib194)] | ✓ | ✓ | ✓ |  | ✓ |  |  | dynamic,single | UNL |
| AutoAgents [[195](https://arxiv.org/html/2412.03563v1#bib.bib195)] | ✓ |  | ✓ | ✓ | ✓ |  |  | dynamic,single | UNL |
| OpenAgents [[196](https://arxiv.org/html/2412.03563v1#bib.bib196)] | ✓ | ✓ | ✓ | ✓ |  |  |  | dynamic,single | SL |
| TWOSOME [[197](https://arxiv.org/html/2412.03563v1#bib.bib197)] | ✓ | ✓ |  |  |  |  |  | static,single | - |
| ReAd [[198](https://arxiv.org/html/2412.03563v1#bib.bib198)] | ✓ | ✓ | ✓ |  | ✓ |  |  | dynamic,single | UNL |
| MACNET [[48](https://arxiv.org/html/2412.03563v1#bib.bib48)] | ✓ |  | ✓ |  |  |  |  | dynamic,single | UNL |

Table 2: A list of representative works of scenario simulation. UNL: unstructured natural language; SL: structured language.

In the real world, individuals do not function in isolation. They frequently engage in collaborative efforts to complete tasks within specific scenarios. This raises a crucial question: can LLM-based agents cooperate like humans or even surpass human performance in achieving collective intelligence? To answer this question, researchers simulate the interactions and collaborations of multiple individuals across various scenarios [[16](https://arxiv.org/html/2412.03563v1#bib.bib16), [17](https://arxiv.org/html/2412.03563v1#bib.bib17), [147](https://arxiv.org/html/2412.03563v1#bib.bib147)], ranging from everyday conversations to complex professional tasks, to enhance collective intelligence and problem-solving capabilities. A scenario simulation typically starts with designing a multi-agent system that includes constructing the scenario environment, modeling agent roles, and establishing organizational structures and communication protocols to manage interactions among agents.

In this section, we begin discussing the system composition of a scenario simulation with four key aspects in §[4.1](https://arxiv.org/html/2412.03563v1#S4.SS1 "4.1 System ‣ 4 Scenario Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Following this, we summarize several scenarios that have recently attracted the attention of researchers in §[4.2](https://arxiv.org/html/2412.03563v1#S4.SS2 "4.2 Scenario ‣ 4 Scenario Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Finally, we review the methods and metrics commonly used for evaluating scenario simulations in §[4.3](https://arxiv.org/html/2412.03563v1#S4.SS3 "4.3 Evaluation ‣ 4 Scenario Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). The overall framework is presented in Figure [3](https://arxiv.org/html/2412.03563v1#S3.F3 "Figure 3 ‣ Virtual Characters ‣ 3.3.2 Characters ‣ 3.3 Simulation Objectives ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents") and representative works are summarized in Table [2](https://arxiv.org/html/2412.03563v1#S4.T2 "Table 2 ‣ 4 Scenario Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents").

### 4.1 System

The diversity of scenarios presents challenges in proposing a unified system applicable to scenarios.
Most of the current systems can be summarized as “agents organized to play roles in dedicated environments through constrained communications”.
Based on this general description, we identify four key concepts in scenario simulations: environment, role, organization and communication.

#### 4.1.1 Environment

The environment in scenario simulation defines the specific contexts in which agents operate and interact with each other. Just as humans gather information from their surroundings, agents depend on the environment to receive input from various sources. These signals guide the behaviors and strategies of agents within the system. Thus, a comprehensive understanding of the environment paves the way for agents’ decision-making and task continuity. We analyze the environment of existing work by focusing on four key aspects: configuration, state, history and tools.

##### Configuration

The environment configuration provides basic information, especially essential elements necessary for the tasks and goals in the scenario.
The system will initialize agents accordingly so that they interact with clear objectives.
More specifically, an environment configuration may include events in the environment and profiles of agents.

Events are represented as a primary focus that needs to be resolved, such as the specific cases brought before the court [[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [20](https://arxiv.org/html/2412.03563v1#bib.bib20), [186](https://arxiv.org/html/2412.03563v1#bib.bib186), [185](https://arxiv.org/html/2412.03563v1#bib.bib185)], and the topics that serve as the basis for multi-agent debates. [[144](https://arxiv.org/html/2412.03563v1#bib.bib144), [29](https://arxiv.org/html/2412.03563v1#bib.bib29), [145](https://arxiv.org/html/2412.03563v1#bib.bib145), [146](https://arxiv.org/html/2412.03563v1#bib.bib146), [147](https://arxiv.org/html/2412.03563v1#bib.bib147), [148](https://arxiv.org/html/2412.03563v1#bib.bib148), [149](https://arxiv.org/html/2412.03563v1#bib.bib149)].

Profile refers to personalized information relevant to the agents specific to the scenario. Different from the basic attributes described in individual simulation, this module encompasses various aspects of the agents’ identities, including their interests, goals, and roles [[17](https://arxiv.org/html/2412.03563v1#bib.bib17), [172](https://arxiv.org/html/2412.03563v1#bib.bib172), [142](https://arxiv.org/html/2412.03563v1#bib.bib142)].
Agents can also be configured to have access to external resources, such as related research papers [[171](https://arxiv.org/html/2412.03563v1#bib.bib171)], predefined strategies [[142](https://arxiv.org/html/2412.03563v1#bib.bib142)] or disease information [[18](https://arxiv.org/html/2412.03563v1#bib.bib18)].

##### State

Environment states encompass the information provided by the environment during scenario execution (configurations are fixed at the beginning instead).
They directly influence the agents’ decision-making and behavior.
According to how agents receive them, states can be further divided into observation and feedback.

Observation involves changes in the environment and the current state of surrounding entities. For example, properties and spatial positions [[189](https://arxiv.org/html/2412.03563v1#bib.bib189), [197](https://arxiv.org/html/2412.03563v1#bib.bib197), [164](https://arxiv.org/html/2412.03563v1#bib.bib164), [194](https://arxiv.org/html/2412.03563v1#bib.bib194)] of other agents are provided to agents to inform real-time decision-making. Moreover, continuously updating agents’ physical states are utilized to establish real-time spatial relationships with their environment and neighboring agents [[161](https://arxiv.org/html/2412.03563v1#bib.bib161), [194](https://arxiv.org/html/2412.03563v1#bib.bib194), [197](https://arxiv.org/html/2412.03563v1#bib.bib197), [198](https://arxiv.org/html/2412.03563v1#bib.bib198)].

Feedback consists of responses received by agents after they perform actions, which guide future strategy adjustments. Some studies [[190](https://arxiv.org/html/2412.03563v1#bib.bib190), [164](https://arxiv.org/html/2412.03563v1#bib.bib164), [162](https://arxiv.org/html/2412.03563v1#bib.bib162)] describe how agents’ cognitive states and strategies are modified based on feedback after each interaction, allowing them to simulate human-like adaptability. Meanwhile, feedback on market events or decisions made by others [[182](https://arxiv.org/html/2412.03563v1#bib.bib182), [162](https://arxiv.org/html/2412.03563v1#bib.bib162)] and execution results from external tools [[177](https://arxiv.org/html/2412.03563v1#bib.bib177), [17](https://arxiv.org/html/2412.03563v1#bib.bib17), [147](https://arxiv.org/html/2412.03563v1#bib.bib147)] are provided, to facilitate strategy adjustment and guide future actions.

##### History

As the scenario runs, past states and interactions accumulate into a series of history records.
Agents can leverage them to adapt to new situations and refine strategies, ensuring more coherent and effective task performance in dynamic environments.
We summarize four widely used methods to process and utilize the history, including direct integration, refinement, summarization and memory mechanisms.

Direct integration appends the history to the current input without modification. Agents may retain task continuity by incorporating past dialogue directly into the current session [[29](https://arxiv.org/html/2412.03563v1#bib.bib29), [145](https://arxiv.org/html/2412.03563v1#bib.bib145), [166](https://arxiv.org/html/2412.03563v1#bib.bib166), [147](https://arxiv.org/html/2412.03563v1#bib.bib147)]. Excessive content is truncated to fit token limits while preserving key historical information [[194](https://arxiv.org/html/2412.03563v1#bib.bib194), [196](https://arxiv.org/html/2412.03563v1#bib.bib196)].

Refinement iteratively updates and enhances responses based on the history. Ma et al. [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] uses a subgraph-focusing mechanism to refine answers, allowing agents to optimize outcomes after each reasoning step. Similarly, Weiss et al. [[183](https://arxiv.org/html/2412.03563v1#bib.bib183)] and D’Arcy et al. [[30](https://arxiv.org/html/2412.03563v1#bib.bib30)] iteratively improves initial answers to converge to more accurate results.

Summarization distills essential insights from the history. This can be achieved by synthesizing core actions from multiple plans to establish a reference for diverse scenarios [[161](https://arxiv.org/html/2412.03563v1#bib.bib161)], summarizing reports from multiple agents to consolidate findings [[168](https://arxiv.org/html/2412.03563v1#bib.bib168)], and sharing key solutions subtasks [[177](https://arxiv.org/html/2412.03563v1#bib.bib177)] to avoid lengthy dialogue histories.

Memory mechanisms process the history through agents’ memory modules. This dynamic approach enables agents to preserve relevant information both within and across sessions [[182](https://arxiv.org/html/2412.03563v1#bib.bib182), [195](https://arxiv.org/html/2412.03563v1#bib.bib195), [26](https://arxiv.org/html/2412.03563v1#bib.bib26), [180](https://arxiv.org/html/2412.03563v1#bib.bib180), [48](https://arxiv.org/html/2412.03563v1#bib.bib48), [173](https://arxiv.org/html/2412.03563v1#bib.bib173), [199](https://arxiv.org/html/2412.03563v1#bib.bib199), [200](https://arxiv.org/html/2412.03563v1#bib.bib200)]. In addition, Hong et al. [[17](https://arxiv.org/html/2412.03563v1#bib.bib17)] proposed shared message pools to further enhance communication efficiency, where agents exchange structured messages directly and retrieve information in a personalized manner.

##### Tools

External tools offer specialized functionalities related to scenario simulation tasks, enabling more accurate and precise outcomes. The spectrum of tools utilized in scenario simulation encompasses a wide range, from programming languages such as Python and SQL to APIs facilitating external interactions. Generally, Python is mainly employed to execute and verify programmes [[177](https://arxiv.org/html/2412.03563v1#bib.bib177), [17](https://arxiv.org/html/2412.03563v1#bib.bib17), [147](https://arxiv.org/html/2412.03563v1#bib.bib147)]. SQL [[174](https://arxiv.org/html/2412.03563v1#bib.bib174)] and knowledge graphs query tools  [[171](https://arxiv.org/html/2412.03563v1#bib.bib171), [149](https://arxiv.org/html/2412.03563v1#bib.bib149)] have been harnessed to retrieve external structured data. In certain scenarios, task-related tools such as calculators, predefined tools, and APIs [[195](https://arxiv.org/html/2412.03563v1#bib.bib195), [196](https://arxiv.org/html/2412.03563v1#bib.bib196)] are also utilized to provide intermediate results, simplifying the processing workflow of agents.

#### 4.1.2 Role

In scenario simulations, we assign agents distinct roles based on their tasks and functionalities.
As demonstrated in Figure [3](https://arxiv.org/html/2412.03563v1#S3.F3 "Figure 3 ‣ Virtual Characters ‣ 3.3.2 Characters ‣ 3.3 Simulation Objectives ‣ 3 Individual Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"), there are two groups of roles in a typical setting: participants carry out the tasks within the scenario, and directors manage the task execution processes while providing necessary assistance.
Each role has its own responsibility that emphasizes different aspects of the system’s operations.
They collaborate to achieve the system’s overall goals.

##### Participants

Participants are the key members that actively engaged in task execution and discussion.
Their organization and communication are the core of task completion in scenario simulations.
Participants can be further classified into communicators and workers according to their tasks.

Communicators primarily focus on communication, such as information exchange, feedback, and task guidance. Specifically, this kind of agents can process information for certain disciplines and research applications [[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [175](https://arxiv.org/html/2412.03563v1#bib.bib175)] and advocate diverse viewpoints [[144](https://arxiv.org/html/2412.03563v1#bib.bib144), [49](https://arxiv.org/html/2412.03563v1#bib.bib49)], claims [[145](https://arxiv.org/html/2412.03563v1#bib.bib145)] and underlying needs [[139](https://arxiv.org/html/2412.03563v1#bib.bib139), [50](https://arxiv.org/html/2412.03563v1#bib.bib50)].

Workers are directly involved in task execution and operations, demonstrating specialized skills and efficiency. This typically includes the common professional roles present in each scenario, such as coder and tester in software development [[176](https://arxiv.org/html/2412.03563v1#bib.bib176)], buyer and seller in negotiations [[143](https://arxiv.org/html/2412.03563v1#bib.bib143)], doctors and medical professional agents in healthcare domain [[166](https://arxiv.org/html/2412.03563v1#bib.bib166), [18](https://arxiv.org/html/2412.03563v1#bib.bib18)], and receptionist, lawyer, and secretary in the legal contexts [[186](https://arxiv.org/html/2412.03563v1#bib.bib186)].

##### Directors

While participants execute most of the tasks, directors can provide essential support in crucial aspects such as planning procedures, coordinating communication, and integrating results.
We name them Planners, Coordinators and Integrators respectively.

Planners play a vital role in task definition and strategic formulation, facilitating effective inter-agent collaboration through tasks such as defining objectives, analyzing user requirements, and optimizing execution plans. Task-specific agents [[188](https://arxiv.org/html/2412.03563v1#bib.bib188)], central planners [[193](https://arxiv.org/html/2412.03563v1#bib.bib193)], analysts [[176](https://arxiv.org/html/2412.03563v1#bib.bib176)] and decomposer [[161](https://arxiv.org/html/2412.03563v1#bib.bib161)] are responsible for breaking down requirements and dividing overarching objectives into specific sub-goals. Product managers [[17](https://arxiv.org/html/2412.03563v1#bib.bib17)] contribute by creating detailed product requirements documents. Other planners can also refine execution plans according to task requirements [[194](https://arxiv.org/html/2412.03563v1#bib.bib194)], optimize the process by maximizing the advantage function [[164](https://arxiv.org/html/2412.03563v1#bib.bib164)] and develop plans based on user inquiries [[174](https://arxiv.org/html/2412.03563v1#bib.bib174)].

Coordinators are responsible for managing and coordinating the collaboration between agents to ensure effective task execution, monitor progress, and facilitate cooperation. The project managers [[17](https://arxiv.org/html/2412.03563v1#bib.bib17), [167](https://arxiv.org/html/2412.03563v1#bib.bib167)] in software development oversee task distribution and project progress, ensuring efficient collaboration among team members throughout the development cycle. Judge assistant agents [[20](https://arxiv.org/html/2412.03563v1#bib.bib20)] aids in organizing information during court proceedings, and the main contact agents [[50](https://arxiv.org/html/2412.03563v1#bib.bib50)] manage intercultural conversations. Additionally, the secretary agents [[170](https://arxiv.org/html/2412.03563v1#bib.bib170)] manage interactions among civilization agents.
Meanwhile, coordinators also provide feedback to guide better interactions. Critic agents [[143](https://arxiv.org/html/2412.03563v1#bib.bib143)] evaluate negotiation strategies and guide agents through iterative learning processes. Judge agents [[144](https://arxiv.org/html/2412.03563v1#bib.bib144), [145](https://arxiv.org/html/2412.03563v1#bib.bib145), [201](https://arxiv.org/html/2412.03563v1#bib.bib201)] serve as an authoritative evaluator, assessing arguments and performances during debates.

Integrators encompass various decision-making and summarization functions critical for guiding the system’s trajectory. Deciders [[175](https://arxiv.org/html/2412.03563v1#bib.bib175)] autonomously evaluate contributions from the researcher to make informed judgments on the dialogue’s outcome. Summarizer agents [[146](https://arxiv.org/html/2412.03563v1#bib.bib146)] enhance communication clarity by providing concise summaries of discussions after each iteration, effectively integrating key points into the ongoing dialogue. In medical scenarios, medical report assistants [[168](https://arxiv.org/html/2412.03563v1#bib.bib168)] compile analyses into a cohesive document that supports collaborative expert discussions, while the medical decision maker ensures that final decisions reflect the collective expertise of the specialists involved. Additionally, the chief physician [[19](https://arxiv.org/html/2412.03563v1#bib.bib19)] evaluates diagnostic performance based on accuracy and effectiveness, reinforcing the system’s overall reliability. In legal contexts, the judge [[20](https://arxiv.org/html/2412.03563v1#bib.bib20)] oversees judicial processes, making critical decisions grounded in legal arguments and assessing the evidence presented.

#### 4.1.3 Organization

Effective task execution necessitates careful coordination and scheduling of the interactions between individual agents. The organizational structures establish how each agent collaborates with others to achieve a goal. Typically, we can depict an organization schema by its mode and structure.

##### Mode

The organizational structure determines whether the relationships among agents remain stable or evolve dynamically throughout the simulation process. In terms of how to organize agents, there are mainly two modes in existing research, i.e., static and dynamic mode.

Static mode refers to the organizational structure predefined based on the nature of the tasks. Agents communicate and work in an orderly manner according to these static structures. The static mode can be further divided into single-stage and multi-stage setups. In the single-stage setup, agents follow a fixed structure in multiple rounds of communication, such as structured debates [[175](https://arxiv.org/html/2412.03563v1#bib.bib175), [188](https://arxiv.org/html/2412.03563v1#bib.bib188), [143](https://arxiv.org/html/2412.03563v1#bib.bib143), [146](https://arxiv.org/html/2412.03563v1#bib.bib146)], skill training [[140](https://arxiv.org/html/2412.03563v1#bib.bib140), [141](https://arxiv.org/html/2412.03563v1#bib.bib141)] and integrating ideas [[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [49](https://arxiv.org/html/2412.03563v1#bib.bib49)]. In the multi-stage setup, tasks are divided into distinct stages, and the organization may change with stages. This can be found in the design, coding, and testing stages in software development scenarios following the waterfall model or standardized operating procedures [[177](https://arxiv.org/html/2412.03563v1#bib.bib177), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)], and multi-stage process in judicial scenarios [[20](https://arxiv.org/html/2412.03563v1#bib.bib20), [185](https://arxiv.org/html/2412.03563v1#bib.bib185)] and problem-solving processes [[161](https://arxiv.org/html/2412.03563v1#bib.bib161), [191](https://arxiv.org/html/2412.03563v1#bib.bib191), [149](https://arxiv.org/html/2412.03563v1#bib.bib149)].

Dynamic mode explores more open and adaptive organizational structures, often relying on dynamic and heuristic communication. This also includes both single-stage and multi-stage setups. The single-stage setup emphasizes agent collaboration and adaptability in a single stage. The agents can be flexibly created and recruited [[196](https://arxiv.org/html/2412.03563v1#bib.bib196), [195](https://arxiv.org/html/2412.03563v1#bib.bib195), [149](https://arxiv.org/html/2412.03563v1#bib.bib149), [193](https://arxiv.org/html/2412.03563v1#bib.bib193), [202](https://arxiv.org/html/2412.03563v1#bib.bib202)], coordinated through liaison agents [[170](https://arxiv.org/html/2412.03563v1#bib.bib170), [50](https://arxiv.org/html/2412.03563v1#bib.bib50)], and self-organized [[164](https://arxiv.org/html/2412.03563v1#bib.bib164)]. The multi-stage setup mainly features dynamic discussions among agents. Agents can be involved across multiple stages, but they can communicate autonomously based on the current state [[176](https://arxiv.org/html/2412.03563v1#bib.bib176), [167](https://arxiv.org/html/2412.03563v1#bib.bib167), [168](https://arxiv.org/html/2412.03563v1#bib.bib168), [186](https://arxiv.org/html/2412.03563v1#bib.bib186), [187](https://arxiv.org/html/2412.03563v1#bib.bib187)].

##### Structure

The organization structure, meanwhile, reflects how agents are connected with each other. Typically, an organization can be layered, centralized or decentralized.
Layered structures adopt a hierarchical framework, with agents assigned to distinct levels. Interactions are predominantly confined to agents within the same level or occur between adjacent layers, thereby facilitating a controlled and organized flow of information[[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [49](https://arxiv.org/html/2412.03563v1#bib.bib49), [177](https://arxiv.org/html/2412.03563v1#bib.bib177)].
Centralized structures often involve a high-level role (e.g., coordinator) that serves as the core of the organization, overseeing communication and functioning as the central hub for interactions among other agents[[170](https://arxiv.org/html/2412.03563v1#bib.bib170), [50](https://arxiv.org/html/2412.03563v1#bib.bib50), [19](https://arxiv.org/html/2412.03563v1#bib.bib19)].
Decentralized structures, in contrast, is more flattened, where agents can engage in peer-to-peer interactions as needed[[146](https://arxiv.org/html/2412.03563v1#bib.bib146), [149](https://arxiv.org/html/2412.03563v1#bib.bib149), [145](https://arxiv.org/html/2412.03563v1#bib.bib145)].

#### 4.1.4 Communication

The communication between agents controls the transmission of information. To better understand the internal mechanism of communication, we dissect communication from its format and style.

##### Format

From the perspective of information format, there exist two common communication protocols: unstructured natural language and structured language.

Unstructured natural language is most commonly used in multi-agent communication, enabling flexible and immediate exchanges through free-form, conversational language that mirrors human dialogue [[175](https://arxiv.org/html/2412.03563v1#bib.bib175), [188](https://arxiv.org/html/2412.03563v1#bib.bib188), [143](https://arxiv.org/html/2412.03563v1#bib.bib143), [144](https://arxiv.org/html/2412.03563v1#bib.bib144), [29](https://arxiv.org/html/2412.03563v1#bib.bib29), [167](https://arxiv.org/html/2412.03563v1#bib.bib167), [140](https://arxiv.org/html/2412.03563v1#bib.bib140), [141](https://arxiv.org/html/2412.03563v1#bib.bib141)]. Communication based on natural language is diverse and flexible, but it can also suffer from issues such as ambiguity and redundancy.

Structured language, such as code and JSON documents, is another protocol that may alleviate the issues from natural language.
In software development, agents transit information between phases through code [[17](https://arxiv.org/html/2412.03563v1#bib.bib17), [177](https://arxiv.org/html/2412.03563v1#bib.bib177)]. In the medical domain, structured summaries of reports are utilized to gain key insights [[168](https://arxiv.org/html/2412.03563v1#bib.bib168)]. In addition to predefined formats, agents can also autonomously choose the appropriate format during interactions to improve efficiency [[51](https://arxiv.org/html/2412.03563v1#bib.bib51), [203](https://arxiv.org/html/2412.03563v1#bib.bib203)]. Recently, more complex communication protocols using more than one language have been designed to improve communication [[53](https://arxiv.org/html/2412.03563v1#bib.bib53)].

##### Style

Communication, by nature, can be cooperative or competitive regarding its style.
In cooperative communication, agents share a common objective, aiming to optimize collective outcomes, like software development[[176](https://arxiv.org/html/2412.03563v1#bib.bib176), [177](https://arxiv.org/html/2412.03563v1#bib.bib177), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)], medical diagnosis[[168](https://arxiv.org/html/2412.03563v1#bib.bib168), [19](https://arxiv.org/html/2412.03563v1#bib.bib19)], and case handling[[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [186](https://arxiv.org/html/2412.03563v1#bib.bib186)].
In contrast, agents in competitive communication typically hold differing viewpoints and positions, each striving to achieve individual objectives. Such scenarios are commonly found in settings like games[[150](https://arxiv.org/html/2412.03563v1#bib.bib150), [159](https://arxiv.org/html/2412.03563v1#bib.bib159), [151](https://arxiv.org/html/2412.03563v1#bib.bib151)] and debates[[144](https://arxiv.org/html/2412.03563v1#bib.bib144), [145](https://arxiv.org/html/2412.03563v1#bib.bib145), [143](https://arxiv.org/html/2412.03563v1#bib.bib143)], where agents maintain opposing stances and seek to outmaneuver each other.

### 4.2 Scenario

Using the collective capabilities of agents with specialized expertise, scenario simulations have been applied to various domains. Here we divide different scenarios into two groups: dialog-driven ones that cover social interaction and question-answering, and task-driven ones that focus on specialized tasks.

#### 4.2.1 Dialog-Driven Scenario

Dialog-driven scenarios encompass scenarios in people’s daily lives where the dialog itself is centered, such as those for social or entertainment purposes.
These scenarios share a common emphasis on tackling general goals that are not related to any specific task or domain.
We identify three primary types of dialog-driven scenarios: social interaction, question-answering, and game scenarios.

##### Social Interaction

Some works focus on task completion in simple social interaction scenarios, typically involving social tasks between two or a few agents, such as persuasion or comforting a partner. Zhou et al. [[138](https://arxiv.org/html/2412.03563v1#bib.bib138)] discusses the social intelligence of agents in social scenarios, revealing significant performance differences among models across different dimensions. The exploration in social intelligence is further extended to objective action-level evaluation [[204](https://arxiv.org/html/2412.03563v1#bib.bib204)] and diverse scenarios and others’ information reasoning[[205](https://arxiv.org/html/2412.03563v1#bib.bib205)]. Furthermore, some works propose interactive learning methods [[140](https://arxiv.org/html/2412.03563v1#bib.bib140), [206](https://arxiv.org/html/2412.03563v1#bib.bib206), [207](https://arxiv.org/html/2412.03563v1#bib.bib207)] to help learn social skills.

##### Question Answering

Another mainstream scenario is the question answering, emphasizing collaborative processes, strategic reasoning, and integration to enhance model performance. On the one hand, some studies focus on improving reasoning through debate. FORD [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] facilitates a three-stage commonsense reasoning debate, demonstrating that LLMs can reach consensus even amidst inconsistencies. MAD [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)], involves agents debating under a judge’s supervision, addressing the Degeneration-of-Thought problem. In addition, a “society of minds” approach [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)] is presented to guide multiple debate rounds, improving mathematical reasoning and factual accuracy while reducing hallucinations. On the other hand, some works focus on optimizing strategies in strategic reasoning and negotiation. OG-Narrator [[148](https://arxiv.org/html/2412.03563v1#bib.bib148)] is proposed to improve negotiation strategies, increasing the Buyers’ deal success rates. Ma et al. [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] utilize a subgraph-focusing mechanism and a multi-role debate team to improve reasoning accuracy and reliability, outperforming existing methods.

##### Game

Games provide a unique platform for exploring scenario simulation, evolving from basic game reproduction to complex social dynamics.
Early studies, such as [[150](https://arxiv.org/html/2412.03563v1#bib.bib150), [151](https://arxiv.org/html/2412.03563v1#bib.bib151)], introduce Werewolf and Avalon to examine LLM performance in communication games, specifically investigating how LLMs handle aspects like trust and leadership.
Building on these complex interactions, reinforcement learning frameworks in [[155](https://arxiv.org/html/2412.03563v1#bib.bib155), [158](https://arxiv.org/html/2412.03563v1#bib.bib158)] allow agents to adapt their strategies, achieving near-human-level decision-making.
To explore deeper social phenomena, [[158](https://arxiv.org/html/2412.03563v1#bib.bib158), [160](https://arxiv.org/html/2412.03563v1#bib.bib160)] expand on game dynamics by incorporating tools that enhance memory, reasoning, and adaptability.
Additionally, [[159](https://arxiv.org/html/2412.03563v1#bib.bib159)] examines the role of opinion leadership, while [[156](https://arxiv.org/html/2412.03563v1#bib.bib156), [157](https://arxiv.org/html/2412.03563v1#bib.bib157), [208](https://arxiv.org/html/2412.03563v1#bib.bib208)] tackle ad hoc teamwork, where agents adapt and collaborate without predefined protocols, revealing both the challenges and potential of LLM agents in team-based collaboration.

#### 4.2.2 Task-Driven Scenario

In task-driven scenarios, agents role-play personas with specific functions for a certain task or task-set.
Most of these scenarios fall into one or more specific domains related to the tasks.
Here, agents are increasingly leveraged to solve complex, domain-specific problems by automating tasks and improving decision-making processes.

##### Foundational and Applied Science

Science domains, such as medicine, mathematics, data science, and content analysis, have been popular experimental fields for scenario simulation. In the medical domain, medical reasoning and automating diagnostic processes have been refined through innovative methodologies such as chain-of-thought prompting and multi-agent collaboration[[166](https://arxiv.org/html/2412.03563v1#bib.bib166), [168](https://arxiv.org/html/2412.03563v1#bib.bib168), [18](https://arxiv.org/html/2412.03563v1#bib.bib18), [209](https://arxiv.org/html/2412.03563v1#bib.bib209)].
Zheng et al.[[167](https://arxiv.org/html/2412.03563v1#bib.bib167)] integrates ChatGPT with Bayesian optimization techniques to enhance research workflows in chemistry laboratories, demonstrating significant improvements in efficiency and productivity. Hassan et al.[[165](https://arxiv.org/html/2412.03563v1#bib.bib165)] introduce a conversational framework that enables seamless interaction with machine learning models, specifically for tasks like data visualization and predictive analytics. These studies demonstrate the potential of LLM-based agents to transform traditional research patterns.

##### Software Development

Recent research has increasingly focused on harnessing agents to address complex challenges in software development and life-cycle management. Early works focus on designing frameworks for collaborative code generation. Dong et al. [[176](https://arxiv.org/html/2412.03563v1#bib.bib176)] presents a self-collaboration framework where LLM agents function as distinct “experts,” each managing specific subtasks to facilitate autonomous collaborative code generation. Building on this, ChatDev[[177](https://arxiv.org/html/2412.03563v1#bib.bib177)], a chat-powered framework utilizes unified language-based communication among agents to effectively address design, coding, and testing phases. Meanwhile, Hong et al. [[17](https://arxiv.org/html/2412.03563v1#bib.bib17)] enhances LLM collaborations by encoding Standardized Operating Procedures into prompts, enabling agents to verify results and produce coherent solutions through an assembly line approach. Afterward, some works focus on enabling agents to learn from past experiences and refine their processes over time
 [[178](https://arxiv.org/html/2412.03563v1#bib.bib178), [180](https://arxiv.org/html/2412.03563v1#bib.bib180)]. Further efforts focus on autonomous issue resolution and program understanding [[179](https://arxiv.org/html/2412.03563v1#bib.bib179)]. These studies show the potential of multi-agent collaboration in software engineering, offering robust tools for automatic development and management.

##### Other Industries

In the realm of broad social science, several studies leverage multi-agent systems to enhance decision-making processes across diverse fields, such as journalism [[210](https://arxiv.org/html/2412.03563v1#bib.bib210)], judiciary, economics, and education. In the judicial field, legal consultations have been improved through LawLuo [[186](https://arxiv.org/html/2412.03563v1#bib.bib186)], which simulates collaborative discussions. Hamilton et al. [[181](https://arxiv.org/html/2412.03563v1#bib.bib181)] and He et al. [[20](https://arxiv.org/html/2412.03563v1#bib.bib20)] design multi-agent systems to simulate U.S. Supreme Court decisions and court trials through detailed steps such as debate, resource retrieval, and decision refinement, complemented by additional benchmarks that enhance legal article generation. In the economic sector, Li et al. [[182](https://arxiv.org/html/2412.03563v1#bib.bib182)] propose a multi-agent framework with layered memory to improve LLM performance in stock trading. Additionally, Weiss et al. [[183](https://arxiv.org/html/2412.03563v1#bib.bib183)] address the buyer’s inspection paradox in information markets by simulating a marketplace where intelligent agents use LLMs to navigate information access and biases, exploring the impact of pricing and budgets on outcomes. In the education domain, MAIC [[187](https://arxiv.org/html/2412.03563v1#bib.bib187)], a system simulating AI-enhanced classrooms has contributed to the development of a comprehensive AI-driven online education platform. Yue et al. [[184](https://arxiv.org/html/2412.03563v1#bib.bib184)] presents MATHVC, an LLM-driven virtual classroom designed to simulate interactions among students, thereby fostering the development of mathematical skills.

![Refer to caption](https://arxiv.org/html/2412.03563v1/fm_soc_v2_2.png)


Figure 4: Illustration of society simulations. To construct society simulations, the corresponding society’s construction elements, i.e., composition, network, social influence and outcomes need to be carefully designed. Building on this, various scenarios can be simulated. The performance of individuals and the overall performance of the system are evaluated.

### 4.3 Evaluation

For scenario simulations, the evaluation focuses on how well the tasks of the scenarios are solved. Based on the scope of the evaluation, it can be categorized into task evaluation, sub-task evaluation and system evaluation, each employing various automatic, LLM-based, and human evaluation methods to assess performance.

##### Task Evaluation

Task Evaluation measures the overall performance of tasks assigned to the scenario. The evaluation can carried out in automatic ways or by LLMs or humans. In terms of automatic evaluation, predefined metrics and mathematical tools are used to objectively assess the task outcomes, such as accuracy [[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [144](https://arxiv.org/html/2412.03563v1#bib.bib144)], pass@k [[188](https://arxiv.org/html/2412.03563v1#bib.bib188)] for coding tasks, success rate, and coverage for exploration [[161](https://arxiv.org/html/2412.03563v1#bib.bib161)], and deal price for negotiation [[143](https://arxiv.org/html/2412.03563v1#bib.bib143)]. These methods are efficient and scalable but may overlook complex behaviors. Thus, LLMs [[49](https://arxiv.org/html/2412.03563v1#bib.bib49)] and human experts [[188](https://arxiv.org/html/2412.03563v1#bib.bib188), [145](https://arxiv.org/html/2412.03563v1#bib.bib145)] have been applied to provide more nuanced evaluation for qualitative tasks and compare solutions based on specific criteria.

##### Sub-Task Evaluation

Sub-task Evaluation assesses the completion of sub-tasks within a scenario simulation and their impact on overall task performance. It serves as a process evaluation for the execution of complex tasks. The automatic evaluation uses metrics like transport rate, average steps, task success rate, re-plan attempts, and efficiency improvement to assess sub-task performance and strategy efficiency [[191](https://arxiv.org/html/2412.03563v1#bib.bib191), [192](https://arxiv.org/html/2412.03563v1#bib.bib192)]. Completeness, executability, and consistency metrics are often applied in software generation tasks [[177](https://arxiv.org/html/2412.03563v1#bib.bib177), [178](https://arxiv.org/html/2412.03563v1#bib.bib178)]. LLM-based evaluation focuses on pairwise comparisons or win rate judgments, capturing qualitative aspects of sub-task performance [[177](https://arxiv.org/html/2412.03563v1#bib.bib177)]. Meanwhile, human evaluation relies on participants to provide subjective assessments on metrics such as executability, revision costs, or comment quality, offering practical insights into sub-task performance [[17](https://arxiv.org/html/2412.03563v1#bib.bib17), [30](https://arxiv.org/html/2412.03563v1#bib.bib30)].

##### System Evaluation

System Evaluation aims to capture the effectiveness and efficiency of the system in a scenario simulation as a whole. Automatic evaluation relies on metrics such as token consumption, task success rate, and human-likeness scores to measure the efficiency and realism of agents [[197](https://arxiv.org/html/2412.03563v1#bib.bib197)]. Additional metrics like accuracy, precision, recall, and F1 scores are used to assess system accuracy and consistency in diagnostic or predictive tasks [[19](https://arxiv.org/html/2412.03563v1#bib.bib19)]. LLM-based evaluation often involves GPT-4 to assess qualitative aspects, such as human-likeness or diagnostic report quality [[197](https://arxiv.org/html/2412.03563v1#bib.bib197), [18](https://arxiv.org/html/2412.03563v1#bib.bib18)]. Human evaluation typically involves subjective assessments, such as rating instructional content for tone, clarity, and supportiveness on a Likert scale [[187](https://arxiv.org/html/2412.03563v1#bib.bib187)], often used to complement automatic methods and capture human perspectives on system outputs.

## 5 Society Simulation

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Scenario | Field | Paper | # Agents | Construction Element | | | |
| Composition | Network | Social Influence | Outcome |
| General  Economic | Game Theory  and  Strategic Interactions | Agent-trust [[211](https://arxiv.org/html/2412.03563v1#bib.bib211)] | $(0,10]$ | ✓ |  | ✓ | ✓ |
| LELMA [[212](https://arxiv.org/html/2412.03563v1#bib.bib212)] | $(0,10]$ |  |  | ✓ | ✓ |
| Economics Arena [[213](https://arxiv.org/html/2412.03563v1#bib.bib213)] | $(0,10]$ |  |  | ✓ | ✓ |
| Fontana et al. [[214](https://arxiv.org/html/2412.03563v1#bib.bib214)] | $(0,10]$ |  |  | ✓ | ✓ |
| SABM [[215](https://arxiv.org/html/2412.03563v1#bib.bib215)] | $(0,10]$ | ✓ | ✓ | ✓ | ✓ |
| Noh and Chang. [[216](https://arxiv.org/html/2412.03563v1#bib.bib216)] | $(0,10]$ | ✓ |  | ✓ | ✓ |
| Mozikov et al. [[217](https://arxiv.org/html/2412.03563v1#bib.bib217)] | $(0,10]$ |  |  | ✓ | ✓ |
| Wu et al. [[218](https://arxiv.org/html/2412.03563v1#bib.bib218)] | $(10,100]$ |  | ✓ | ✓ | ✓ |
| CompeteAI [[219](https://arxiv.org/html/2412.03563v1#bib.bib219)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| WarAgent [[47](https://arxiv.org/html/2412.03563v1#bib.bib47)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Economic  Contexts | Horton [[220](https://arxiv.org/html/2412.03563v1#bib.bib220)] | $(10,100]$ | ✓ |  |  | ✓ |
| EconAgent [[27](https://arxiv.org/html/2412.03563v1#bib.bib27)] | $(10,100]$ | ✓ |  |  | ✓ |
| SRAP-Agent [[221](https://arxiv.org/html/2412.03563v1#bib.bib221)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Ghaffarzadegan et al.[[222](https://arxiv.org/html/2412.03563v1#bib.bib222)] | $(10,100]$ | ✓ |  | ✓ | ✓ |
| EC [[223](https://arxiv.org/html/2412.03563v1#bib.bib223)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Williams et al. [[224](https://arxiv.org/html/2412.03563v1#bib.bib224)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| AgentTorch [[225](https://arxiv.org/html/2412.03563v1#bib.bib225)] | $(100,\infty)$ | ✓ | ✓ |  | ✓ |
| Sociology  and  Political Science | Public Opinion  Survey | Argyle et al. [[12](https://arxiv.org/html/2412.03563v1#bib.bib12)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| Lee et al. [[226](https://arxiv.org/html/2412.03563v1#bib.bib226)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| Chaudhary and Chaudhary [[13](https://arxiv.org/html/2412.03563v1#bib.bib13)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| ElectionSim [[227](https://arxiv.org/html/2412.03563v1#bib.bib227)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| GABSS [[228](https://arxiv.org/html/2412.03563v1#bib.bib228)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| Park et al. [[229](https://arxiv.org/html/2412.03563v1#bib.bib229)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| Sun et al. [[96](https://arxiv.org/html/2412.03563v1#bib.bib96)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| Individual  and  Organizational  Behavior Observation | Aher et al. [[230](https://arxiv.org/html/2412.03563v1#bib.bib230)] | $(0,10]$ |  |  | ✓ | ✓ |
| Zhang et al. [[152](https://arxiv.org/html/2412.03563v1#bib.bib152)] | $(0,10]$ | ✓ |  |  | ✓ |
| Lyfe Agents [[231](https://arxiv.org/html/2412.03563v1#bib.bib231)] | $(0,10]$ | ✓ | ✓ | ✓ | ✓ |
| CRSEC [[232](https://arxiv.org/html/2412.03563v1#bib.bib232)] | $(0,10]$ | ✓ | ✓ | ✓ | ✓ |
| Chuang et al.[[24](https://arxiv.org/html/2412.03563v1#bib.bib24)] | $(0,10]$ | ✓ | ✓ | ✓ | ✓ |
| ChoiceMates [[233](https://arxiv.org/html/2412.03563v1#bib.bib233)] | $(0,10]$ | ✓ | ✓ | ✓ | ✓ |
| Jarrett et al.[[234](https://arxiv.org/html/2412.03563v1#bib.bib234)] | $(0,10]$ | ✓ |  |  | ✓ |
| AgentReview [[235](https://arxiv.org/html/2412.03563v1#bib.bib235)] | $(0,10]$ | ✓ | ✓ |  | ✓ |
| Generative Agents [[32](https://arxiv.org/html/2412.03563v1#bib.bib32)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| AGA [[236](https://arxiv.org/html/2412.03563v1#bib.bib236)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| MineLand [[237](https://arxiv.org/html/2412.03563v1#bib.bib237)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Chuang et al. [[31](https://arxiv.org/html/2412.03563v1#bib.bib31)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| CareerAgent [[238](https://arxiv.org/html/2412.03563v1#bib.bib238)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Suzuki and Arita [[239](https://arxiv.org/html/2412.03563v1#bib.bib239)] | $(10,100]$ | ✓ |  | ✓ | ✓ |
| Chuang et al.[[240](https://arxiv.org/html/2412.03563v1#bib.bib240)] | $(100,\infty)$ | ✓ |  |  | ✓ |
| Li et al. [[241](https://arxiv.org/html/2412.03563v1#bib.bib241)] | $(100,\infty)$ |  | ✓ | ✓ | ✓ |
| MATRIX [[242](https://arxiv.org/html/2412.03563v1#bib.bib242)] | $(100,\infty)$ | ✓ | ✓ |  |  |
| Online  Platform | Social  Platforms | Cai et al.[[243](https://arxiv.org/html/2412.03563v1#bib.bib243)] | $(0,10]$ |  |  | ✓ | ✓ |
| FPS [[26](https://arxiv.org/html/2412.03563v1#bib.bib26)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| FUSE [[244](https://arxiv.org/html/2412.03563v1#bib.bib244)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Wang et al.[[245](https://arxiv.org/html/2412.03563v1#bib.bib245)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Concordia [[246](https://arxiv.org/html/2412.03563v1#bib.bib246)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Social Simulacra [[247](https://arxiv.org/html/2412.03563v1#bib.bib247)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| $S^{3}$ [[248](https://arxiv.org/html/2412.03563v1#bib.bib248)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| Törnberg et al. [[249](https://arxiv.org/html/2412.03563v1#bib.bib249)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| Y Social [[250](https://arxiv.org/html/2412.03563v1#bib.bib250)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| TIS [[251](https://arxiv.org/html/2412.03563v1#bib.bib251)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| HiSim [[25](https://arxiv.org/html/2412.03563v1#bib.bib25)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| OASIS [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| MindEcho [[252](https://arxiv.org/html/2412.03563v1#bib.bib252)] | $(100,\infty)$ | ✓ |  | ✓ |  |
| BASES [[253](https://arxiv.org/html/2412.03563v1#bib.bib253)] | $(100,\infty)$ | ✓ |  |  |  |
| Recommendation  Environments | InteRecAgent [[254](https://arxiv.org/html/2412.03563v1#bib.bib254)] | $(0,10]$ | ✓ |  |  |  |
| Rec4Agentverse [[255](https://arxiv.org/html/2412.03563v1#bib.bib255)] | $(0,10]$ | ✓ | ✓ |  |  |
| RecAgent [[256](https://arxiv.org/html/2412.03563v1#bib.bib256)] | $(10,100]$ | ✓ | ✓ | ✓ | ✓ |
| Agent4Rec [[257](https://arxiv.org/html/2412.03563v1#bib.bib257)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |
| AgentCF [[258](https://arxiv.org/html/2412.03563v1#bib.bib258)] | $(100,\infty)$ | ✓ | ✓ | ✓ | ✓ |

Table 3: A list of representative works of society simulation.

While scenarios discuss multi-agent interactions in relatively focused and small-scale contexts and provide solutions within specific domains, society is more complex than a simple scenario. Its complexity lies in many aspects, such as the diversity of its components, the variety of structures, and nonlinear effects [[259](https://arxiv.org/html/2412.03563v1#bib.bib259)]. Considering this, a series of studies focus on society simulation. In terms of research topic, society simulation generally hopes to investigate societal and macro-level results. In terms of research purpose, society simulation does not aim to solve a task or problem, instead, it focuses on revealing and explaining emergent behaviors and the outcomes of interactions among numerous agents. Society simulations have been a vital tool for theoretical validation and predicting social dynamics.

In this section, we summarize the components of social construction to capture the key features reflected in society simulations in §[5.1](https://arxiv.org/html/2412.03563v1#S5.SS1 "5.1 Social Construction Elements ‣ 5 Society Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Then, we present the different categories of scenarios in society simulation in §[5.2](https://arxiv.org/html/2412.03563v1#S5.SS2 "5.2 Scenario ‣ 5 Society Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). After that, we introduce the evaluation of society simulation in §[5.3](https://arxiv.org/html/2412.03563v1#S5.SS3 "5.3 Evaluation ‣ 5 Society Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). The overall framework is illustrated in Figure [4](https://arxiv.org/html/2412.03563v1#S4.F4 "Figure 4 ‣ Other Industries ‣ 4.2.2 Task-Driven Scenario ‣ 4.2 Scenario ‣ 4 Scenario Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents") and representative works are summarized in Table [3](https://arxiv.org/html/2412.03563v1#S5.T3 "Table 3 ‣ 5 Society Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents").

### 5.1 Social Construction Elements

Considering the complexity of society, a major challenge in society simulation is bridging the gap between individual and societal scales. Some core elements serve as the foundation for modeling social systems. We outline four key dimensions that underpin societal structures and dynamics: composition, network, social influence, and outcomes.

#### 5.1.1 Composition

Society is composed of massive and diverse individuals. This diversity, also referred to as heterogeneity [[259](https://arxiv.org/html/2412.03563v1#bib.bib259)] in social science, encompasses a wide range of beliefs, preferences, behaviors, normative values, and positions within social structures. Modeling this diversity is essential for capturing the varied behavioral patterns and complex social dynamics that emerge from individual differences within a social system.

##### Individual Composition

To model a diverse society, the composition of individuals in society needs to be determined. There are three main approaches to determining the composition of individuals in a system simulating a microcosm of society. Some works rely on virtual individual synthesis, often not focused on alignment with the real world, aiming to ensure that the system includes users with a variety of attributes, typically by generating virtual individuals with the help of LLMs or humans [[31](https://arxiv.org/html/2412.03563v1#bib.bib31), [260](https://arxiv.org/html/2412.03563v1#bib.bib260)]. Other works utilize existing datasets, such as MovieLens-1M [[256](https://arxiv.org/html/2412.03563v1#bib.bib256), [257](https://arxiv.org/html/2412.03563v1#bib.bib257)], to define user composition within a simulated recommendation platform. Agents are initialized on the basis of the user information within these datasets, reflecting the distribution of users in that context. Recently, an increasing number of studies have focused on real-world distribution replication, such as the composition of users on social platforms [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)] or the distribution of voters in surveys [[227](https://arxiv.org/html/2412.03563v1#bib.bib227)]. For small-scale individual sets, individual data are typically collected manually [[233](https://arxiv.org/html/2412.03563v1#bib.bib233), [229](https://arxiv.org/html/2412.03563v1#bib.bib229)]. In cases where large-scale populations are required or obtaining real data is difficult, individuals may be sampled based on real-world macro distributions or generated by LLMs to match desired attribute distribution [[12](https://arxiv.org/html/2412.03563v1#bib.bib12), [226](https://arxiv.org/html/2412.03563v1#bib.bib226), [227](https://arxiv.org/html/2412.03563v1#bib.bib227)].

##### Trade-off between Simulation Precision and Scale

When simulating individuals in society simulations, many studies adopt detailed role modeling to enhance the authenticity of agent behavior. Beyond common demographic attributes, this may include factors such as an individual’s past statements and interaction history [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [256](https://arxiv.org/html/2412.03563v1#bib.bib256), [257](https://arxiv.org/html/2412.03563v1#bib.bib257), [219](https://arxiv.org/html/2412.03563v1#bib.bib219), [214](https://arxiv.org/html/2412.03563v1#bib.bib214)]. However, as the number of individuals increases, such fine-grained modeling becomes expensive. Consequently, a trade-off often arises between the precision of individual modeling and the scale of the simulation. In large-scale simulations, to reduce computational costs, the details of each agent are typically simplified, by retaining only the most essential and common characteristics [[224](https://arxiv.org/html/2412.03563v1#bib.bib224), [225](https://arxiv.org/html/2412.03563v1#bib.bib225)] or compressing auxiliary dialogue information into shared memory [[236](https://arxiv.org/html/2412.03563v1#bib.bib236)].

##### Special Modeling on Outliers

As previously mentioned, the composition of individuals in society is diverse. However, not all individuals play an equally significant role. Some individuals, whose attributes or behaviors significantly deviate from the majority, are referred to as outliers [[259](https://arxiv.org/html/2412.03563v1#bib.bib259)]. Compared to average individuals, outliers often introduce variability and unpredictability to society. Examples include celebrities and opinion leaders [[251](https://arxiv.org/html/2412.03563v1#bib.bib251), [252](https://arxiv.org/html/2412.03563v1#bib.bib252)], who frequently hold prominent positions within social structures and amplify their influence. In situations with limited resources, some studies [[25](https://arxiv.org/html/2412.03563v1#bib.bib25)] prioritize detailed modeling of these core content producers, while simplifying the modeling for the majority. Meanwhile, intervention policies based on simulation results often focus on these key nodes in networks [[261](https://arxiv.org/html/2412.03563v1#bib.bib261)], aiming to influence the overall system’s behavior by blocking or interfering with them.

#### 5.1.2 Network

Social interactions are often conducted through social networks, which can be described using graph structures where nodes represent individuals and edges represent their relations. The network determines the direction of information and influence dissemination. In social science, it has been observed that homophily of individuals can increase the likelihood of communication. Highly similar individuals are more likely to establish connections compared to those with greater differences [[262](https://arxiv.org/html/2412.03563v1#bib.bib262), [263](https://arxiv.org/html/2412.03563v1#bib.bib263)]. This principle also informs the construction of networks in society simulations. The methods for constructing social networks vary across different scenarios. Here, we divide them into offline networks and online networks.

##### Offline Network

An offline network represents connections formed through in-person interactions, such as face-to-face communication or the spread of opinions and diseases in physical settings. On the one hand, some studies aim to simulate interactions in virtual worlds, thus determining the connections between agents in a random or predefined manner [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [236](https://arxiv.org/html/2412.03563v1#bib.bib236), [232](https://arxiv.org/html/2412.03563v1#bib.bib232)]. On the other hand, when some studies aim to simulate the spread of a disease or event information in the real world, considering the difficulty of obtaining real data, they often estimate the social relations using external algorithms or agents themselves [[228](https://arxiv.org/html/2412.03563v1#bib.bib228), [224](https://arxiv.org/html/2412.03563v1#bib.bib224)]. However, in studies with a large scale of agents, the network relationships between individuals are sometimes ignored, and individuals are treated as independent [[227](https://arxiv.org/html/2412.03563v1#bib.bib227)]. Alternatively, some studies provide rough information, such as community statistics, in place of specific details about the agents’ neighbors [[225](https://arxiv.org/html/2412.03563v1#bib.bib225)].

##### Online Network

An online network is a digital structure where individuals or entities interact through platforms, such as online social platforms and recommendation platforms, forming connections based on activities, relationships, or shared interests. At the beginning, some studies randomly initialize the social relations for users existing datasets [[256](https://arxiv.org/html/2412.03563v1#bib.bib256)] or synthesized users [[26](https://arxiv.org/html/2412.03563v1#bib.bib26)], while other efforts have focused on crawling authentic social relationships from social media platforms like Weibo [[248](https://arxiv.org/html/2412.03563v1#bib.bib248)] and Twitter [[25](https://arxiv.org/html/2412.03563v1#bib.bib25)]. However, as the scale of individuals increase, it may be challenging to obtain all of their authentic relationships. Therefore, some studies construct networks using a small portion of real relationship data combined with a large amount of synthetic relationship data [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)], or connect similar users based on the assumption of homophily [[242](https://arxiv.org/html/2412.03563v1#bib.bib242)].

#### 5.1.3 Social Influence

Social influence refers to the influence agents have on others and the influence they receive from others during interactions. This is also known as embeddedness in social sciences [[259](https://arxiv.org/html/2412.03563v1#bib.bib259)], which suggests that individuals behavior and decisions are influenced by their environment. When conducting society simulations, it is necessary to consider the modeling of such social influence.

##### Influence Received by the Influencee

The same information may produce different effects when received by individuals with different traits. Currently, most studies have modeled how the influence received by the recipient varies based on their profile [[248](https://arxiv.org/html/2412.03563v1#bib.bib248), [26](https://arxiv.org/html/2412.03563v1#bib.bib26), [33](https://arxiv.org/html/2412.03563v1#bib.bib33)]. This can be easily achieved by integrating the individual’s profile, memory and the information received from others into the same context. Building this, a few works further induce additional mechanisms such as cognitive bias [[24](https://arxiv.org/html/2412.03563v1#bib.bib24)] and reflection on norms [[232](https://arxiv.org/html/2412.03563v1#bib.bib232)] to enhance agents’ understanding and perception of the received messages.

##### Influence Exerted by the Influencer

The same message conveyed by different individuals can result in varying social impacts. The Pareto distribution and the Matthew Effect [[256](https://arxiv.org/html/2412.03563v1#bib.bib256), [25](https://arxiv.org/html/2412.03563v1#bib.bib25)] indicate that information, influence, or attention tends to concentrate on a small group of individuals who are already dominant in the community. Therefore, when simulating social interactions, the identity, status, and reputation of the information sender are also crucial. Some studies start with real-world data to conduct detailed modeling of opinion leaders [[252](https://arxiv.org/html/2412.03563v1#bib.bib252), [251](https://arxiv.org/html/2412.03563v1#bib.bib251)]. Other studies, instead of focusing on the role of the influencer, model the influence exerted by the influencer by incorporating the relation information such as social impression memory [[236](https://arxiv.org/html/2412.03563v1#bib.bib236)] and share party affiliation [[31](https://arxiv.org/html/2412.03563v1#bib.bib31)]. In addition to the influence exerted by individuals, research has found that as group size increases, the impact of a single influencer may diminish. However, the influence of the group on individuals often drives them to align their behavior with the group, leading to the emergence of the herd effect [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)].

#### 5.1.4 Outcomes

Social emergence suggests that the collective behaviors or phenomena arise from individual interactions are not a linear sum of individual actions but rather complex patterns emerge from the interactions [[21](https://arxiv.org/html/2412.03563v1#bib.bib21), [259](https://arxiv.org/html/2412.03563v1#bib.bib259)].
These interaction outcomes may be measurable macro results, such as voting results and public opinion levels, or they may also be qualitative social phenomena and norms. Next, we will discuss these two types of outcomes separately.

##### Macro Statistical Results

Macro statistical results are typically the focus of existing studies, as they are closely related to predefined research objectives such as market research, election predictions, and public opinion forecasting. These studies often aim to calculate the sum or average of the choices or opinions of all agents in the system. To get a static opinion distribution, some studies overlook the social interactions and instead directly sum up individual choices to obtain macro outcomes [[96](https://arxiv.org/html/2412.03563v1#bib.bib96), [227](https://arxiv.org/html/2412.03563v1#bib.bib227)], simplifying the complexity of social dynamics. Another line of research focuses on the change of indicators by modeling multiple rounds of interactions among the agents over a period of time and then statistically analyzing the results [[248](https://arxiv.org/html/2412.03563v1#bib.bib248), [249](https://arxiv.org/html/2412.03563v1#bib.bib249), [215](https://arxiv.org/html/2412.03563v1#bib.bib215), [27](https://arxiv.org/html/2412.03563v1#bib.bib27), [218](https://arxiv.org/html/2412.03563v1#bib.bib218)].

##### Formation of Social Phenomena and Social Norms

In addition to the quantifiable macro results, some social phenomena and social norms are also important outcomes of social interactions. On the one hand, some studies have identified the bubble effect in recommendation systems [[257](https://arxiv.org/html/2412.03563v1#bib.bib257)], echo chambers in social media [[25](https://arxiv.org/html/2412.03563v1#bib.bib25), [33](https://arxiv.org/html/2412.03563v1#bib.bib33), [245](https://arxiv.org/html/2412.03563v1#bib.bib245)], Matthew effect in competitive agent interactions [[219](https://arxiv.org/html/2412.03563v1#bib.bib219)], and spontaneous cooperation of competing agents [[218](https://arxiv.org/html/2412.03563v1#bib.bib218)] by calculating additional metrics or observing the trends of primary indicators. On the other hand, some studies examine social norms as an important byproduct of social interactions. This includes simulating and testing whether community rules can shape desired social norms [[247](https://arxiv.org/html/2412.03563v1#bib.bib247)], constructing normative architecture to observe the emergence of social norms [[232](https://arxiv.org/html/2412.03563v1#bib.bib232)], studying how social media language evolves in the presence of regulatory constraints [[243](https://arxiv.org/html/2412.03563v1#bib.bib243)], and observing changes in social norms in real-world scenarios such as autonomous driving [[264](https://arxiv.org/html/2412.03563v1#bib.bib264)].

### 5.2 Scenario

Society simulation has been widely applied to various scenarios related to human society. These scenarios cover different aspects of daily human life, and existing studies can be categorized into three primary areas: general economics, sociology and political science, as well as online platforms.

#### 5.2.1 General Economics

Simulations in general economics analyze decision-making and behaviors related to resource allocation and competition. These studies primarily investigate how agents make decisions influenced by economic incentives, market rules and resource constraints, while also examining how interactions among groups shape broader economic trends.

##### Game Theory and Strategic Interactions

Some research mainly focuses on game theory and strategic interaction. These scenarios typically involve small groups of agents, with a primary focus on the complex interactions between agents. Some works use classic game theory games, such as the Prisoner’s Dilemma, to explore agent behavior in game-theoretic scenarios, including trust behavior [[211](https://arxiv.org/html/2412.03563v1#bib.bib211)], logic reasoning and decision-making [[212](https://arxiv.org/html/2412.03563v1#bib.bib212)], rationality and strategic reasoning ability [[213](https://arxiv.org/html/2412.03563v1#bib.bib213)], cooperation tendencies [[214](https://arxiv.org/html/2412.03563v1#bib.bib214)] and how emotional states can disrupt rational decision-making [[217](https://arxiv.org/html/2412.03563v1#bib.bib217)]. Other studies focus on real-world scenarios other than the games, such as spontaneous cooperation in competitive environments [[218](https://arxiv.org/html/2412.03563v1#bib.bib218)], complex market behaviors in firm competition [[215](https://arxiv.org/html/2412.03563v1#bib.bib215)], and competition between restaurant and customer agents [[219](https://arxiv.org/html/2412.03563v1#bib.bib219)]. Overall, the former kind of scenarios simplifies the environment, making it easier to conduct controlled research on agent behavior, while the latter provides more insights for real-world applications.

##### Economic Contexts

In addition to close studies on game theory and strategic interactions, some studies focus on the use of agents and their interactions within economic environments. Horton [[220](https://arxiv.org/html/2412.03563v1#bib.bib220)] examines economic agents driven by LLMs in various experiments to replicate human behavior in economic scenarios. EconAgent [[27](https://arxiv.org/html/2412.03563v1#bib.bib27)] introduces agents for macroeconomic simulation, emphasizing the influence of macroeconomic trends. SRAP-Agent [[221](https://arxiv.org/html/2412.03563v1#bib.bib221)] proposes a framework for simulating and optimizing scarce resource allocation in economics, specifically in public housing allocation scenarios. Besides, some studies involve broader macroeconomic domains, using agents to simulate and predict the spread of diseases and the change in unemployment rates [[224](https://arxiv.org/html/2412.03563v1#bib.bib224), [225](https://arxiv.org/html/2412.03563v1#bib.bib225)].

#### 5.2.2 Sociology and Political Science

Society simulation has been widely used in sociological and political science research. These studies range from small-scale laboratory experiments that validate theories and hypotheses to large-scale social surveys aimed at understanding public choices. The goal is to leverage agents as substitutes for humans in studying human behavior within sociological and political contexts.

##### Public Opinion Survey

A mainstream application of society simulation is public opinion survey, which aims to predict the perspectives of specific groups toward a given subject through simulation and aggregate their opinions to support advanced needs such as election forecasting and public administration. Argyle et al. [[12](https://arxiv.org/html/2412.03563v1#bib.bib12)] first propose that LLMs could serve as silicon samples of humans, through several large-scale surveys conducted in the United States. Building on this, some studies have expanded their focus to scenarios of opinion surveys [[226](https://arxiv.org/html/2412.03563v1#bib.bib226), [13](https://arxiv.org/html/2412.03563v1#bib.bib13), [240](https://arxiv.org/html/2412.03563v1#bib.bib240)], such as election polls [[227](https://arxiv.org/html/2412.03563v1#bib.bib227)] and response to public administration crisis [[228](https://arxiv.org/html/2412.03563v1#bib.bib228)], delving deeper into issues like population complexity and algorithmic bias. Recently, agents have demonstrated the potential to replicate participants’ responses in individual interviews [[229](https://arxiv.org/html/2412.03563v1#bib.bib229)]. These studies lay the foundation for new tools to investigate individual and collective behavior.

##### Individual and Organizational Behavior Observation

Other studies focus on observing individual or organizational behavior in common or specific settings. Some works do not specify a particular scenario but instead observe agents’ social interactions and potential phenomena in daily life within a sandbox environment [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [231](https://arxiv.org/html/2412.03563v1#bib.bib231), [232](https://arxiv.org/html/2412.03563v1#bib.bib232), [237](https://arxiv.org/html/2412.03563v1#bib.bib237)].
Other studies aim to validate theories or hypotheses in specific scenarios, such as the wisdom of partisan crowds [[31](https://arxiv.org/html/2412.03563v1#bib.bib31)], information management [[233](https://arxiv.org/html/2412.03563v1#bib.bib233)], organizational behavior management [[238](https://arxiv.org/html/2412.03563v1#bib.bib238)], and the evolution of personality traits [[239](https://arxiv.org/html/2412.03563v1#bib.bib239)].

#### 5.2.3 Online Platform

Online Platforms are a vital component of society simulation, offering a practical means to study complex social phenomena in digital environments. These platforms, ranging from social media to online communities, allow agents to simulate real-world interactions and study dynamics such as opinion formation, information spread, and collective behaviors.

##### Social Platforms

Online social platforms have long served as an important testing ground for studying the propagation of information and the evolution of opinions. These studies typically recreate environments similar to popular social platforms, such as Twitter, Reddit, and Weibo, with action spaces that include behaviors like sharing, commenting, and liking. By simulating these scenarios, researchers can model the spread of information and track changes in user attitudes following events, covering a wide range of topics such as general news, rumors, and the role of opinion leaders [[26](https://arxiv.org/html/2412.03563v1#bib.bib26), [248](https://arxiv.org/html/2412.03563v1#bib.bib248), [243](https://arxiv.org/html/2412.03563v1#bib.bib243), [250](https://arxiv.org/html/2412.03563v1#bib.bib250), [251](https://arxiv.org/html/2412.03563v1#bib.bib251), [244](https://arxiv.org/html/2412.03563v1#bib.bib244)]. In such scenarios, the roles and relationships of agents play a critical role in ensuring realistic simulations. Initially, many studies relied on real-world data scraped from platforms to maintain consistency [[25](https://arxiv.org/html/2412.03563v1#bib.bib25), [248](https://arxiv.org/html/2412.03563v1#bib.bib248)]. However, as the scale of these simulations grew and data acquisition became more challenging, researchers began exploring the use of synthetic data [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)]. Furthermore, to accommodate the increasing demand for simulating larger numbers of agents, some studies have developed large-scale society simulation platforms [[265](https://arxiv.org/html/2412.03563v1#bib.bib265), [266](https://arxiv.org/html/2412.03563v1#bib.bib266)], employing parallel processing and other strategies to enhance simulation efficiency.

##### Recommendation Environments

Another widely studied scenario is the recommendation environment, where these works use agents to simulate user responses in order to validate and improve recommendation algorithms [[254](https://arxiv.org/html/2412.03563v1#bib.bib254), [255](https://arxiv.org/html/2412.03563v1#bib.bib255)]. A key feature across these studies is the use of agents to emulate personalized behaviors such as item selection, preferences, and emotional responses, often integrating user memory and contextual factors [[256](https://arxiv.org/html/2412.03563v1#bib.bib256), [258](https://arxiv.org/html/2412.03563v1#bib.bib258), [257](https://arxiv.org/html/2412.03563v1#bib.bib257)]. Additionally, some approaches incorporate external knowledge or self-reflection mechanisms, allowing agents to adapt and learn from their interactions over time [[267](https://arxiv.org/html/2412.03563v1#bib.bib267)]. These studies collectively show how LLMs can bridge the gap between traditional recommender systems and more interactive, human-like behavior simulations, offering new ways to improve recommendation accuracy and better understand user dynamics.

### 5.3 Evaluation

For society simulations, the evaluation primarily focuses on the comparison between the simulation results and real-world data, with assessments centered on micro level, macro level and system level.

##### Micro-level Evaluation

Individual simulation accuracy is key to society simulation. Therefore, micro-level evaluation of society simulation has received widespread attention. Initially, evaluations in non-real-world simulations draw on the Turing test, assessing agent behavior’s resemblance to human behavior, often subjectively by humans or LLMs [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [268](https://arxiv.org/html/2412.03563v1#bib.bib268), [236](https://arxiv.org/html/2412.03563v1#bib.bib236)]. For specific scenarios, metrics like partisan bias and human likeness index are proposed [[31](https://arxiv.org/html/2412.03563v1#bib.bib31)]. When simulations target real-world scenarios with available empirical data, automated metrics like emotion, attitude, behavior consistency, and user taste alignment can be designed for more objective evaluations by comparing simulation content with real-world data [[248](https://arxiv.org/html/2412.03563v1#bib.bib248), [25](https://arxiv.org/html/2412.03563v1#bib.bib25), [257](https://arxiv.org/html/2412.03563v1#bib.bib257)].

##### Macro-level Evaluation

Social interactions often lead to collective outcomes, so it is important to evaluate whether macro-level outcomes show patterns and trends that are consistent with the real world. For sociology and online platforms, attention is typically given to whether the scale of propagation, the distribution and trends of collective opinions and traits align with those of the real world. In addition to qualitative methods such as subjective evaluation [[248](https://arxiv.org/html/2412.03563v1#bib.bib248), [257](https://arxiv.org/html/2412.03563v1#bib.bib257)], some studies have proposed quantitative metrics, such as fitted parameters, correlation coefficients and change of toxicity of community content to measure this differences objectively [[249](https://arxiv.org/html/2412.03563v1#bib.bib249), [26](https://arxiv.org/html/2412.03563v1#bib.bib26), [25](https://arxiv.org/html/2412.03563v1#bib.bib25), [33](https://arxiv.org/html/2412.03563v1#bib.bib33)]. Similarly, in economic simulation, the evaluation of simulated economic systems depends on whether they can reproduce the most representative macroeconomic laws [[27](https://arxiv.org/html/2412.03563v1#bib.bib27)].

##### System-level Evaluation

System-level evaluation is concerned with assessing the overall performance of a simulation system, irrespective of the specific content being simulated. With the growing number of agents in simulation, the focus of contemporary research has been on system efficiency and associated costs. Efficiency is assessed through various metrics, such as the time it takes to run a simulation, the resources that are utilized during the process, and how well the simulation can scale with an increasing number of agents [[256](https://arxiv.org/html/2412.03563v1#bib.bib256), [33](https://arxiv.org/html/2412.03563v1#bib.bib33), [266](https://arxiv.org/html/2412.03563v1#bib.bib266)]. These metrics are crucial for understanding how well the system can handle complexity and the demands of larger simulations. On the cost side, evaluations often center on the number of tokens consumed during the simulation or the financial expenditure incurred [[236](https://arxiv.org/html/2412.03563v1#bib.bib236)].

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Domain | Dataset | Type | Source | # individual num | # dialogue num | Paper | Link |
| Characters | Final Dialogue Dataset | Dialogue | Wikipedia | / | 22,311 | [[269](https://arxiv.org/html/2412.03563v1#bib.bib269)] | [Link](https://parl.ai/projects/wizard_of_wikipedia/) |
| P-weibo Dataset | Dialogue/Description | Weibo | / | 2,000,000 | [[103](https://arxiv.org/html/2412.03563v1#bib.bib103)] | / |
| P-Ubuntu dialogue corpus | Dialogue/Description | Corpus | / | 2,000,000 | [[103](https://arxiv.org/html/2412.03563v1#bib.bib103)] | / |
| LISCU Dataset | Description | Books, Summaries | 9,499 | / | [[54](https://arxiv.org/html/2412.03563v1#bib.bib54)] | [Link](https://github.com/huangmeng123/lit_char_data_wayback) |
| FoCus Dataset | Description | Wikipedia | / | 86,712 | [[102](https://arxiv.org/html/2412.03563v1#bib.bib102)] | [Link](https://drive.google.com/file/d/1YmEW12HqjAjlEfZ05g8VLRux8kyUjdcI/view) |
| ConvAI2 benchmark dataset | Description | Human | / | 18,878 | [[118](https://arxiv.org/html/2412.03563v1#bib.bib118)] | / |
| HPD Benchmark | Dialogue/Description | Books | 1 | about 2,500 | [[55](https://arxiv.org/html/2412.03563v1#bib.bib55)] | [Link](https://nuochenpku.github.io/HPD.github.io/) |
| LaMP Benchmark | Description | / | / | / | [[113](https://arxiv.org/html/2412.03563v1#bib.bib113)] | [Link](http://lamp-benchmark.github.io/) |
| Multimodal Persona Chat | Image/Dialogue | Reddit | / | 15,000 | [[133](https://arxiv.org/html/2412.03563v1#bib.bib133)] | [Link](https://github.com/ahnjaewoo/mpchat) |
| LiveChat | Description/Dialogue | Douyin | 351 | 1,330,000 | [[60](https://arxiv.org/html/2412.03563v1#bib.bib60)] | [Link](https://github.com/gaojingsheng/LiveChat) |
| COMSET | Dialogue | Strips | 13 | 53,903 | [[58](https://arxiv.org/html/2412.03563v1#bib.bib58)] | [Link](https://github.com/dair-iitd/MPdialog) |
| ChatHaruhi Dataset | Dialogue | Movies, Script | 32 | 54,000 | [[59](https://arxiv.org/html/2412.03563v1#bib.bib59)] | [Link](https://github.com/LC1332/Chat-Haruhi-Suzumiya) |
| RoleBench | Dialogue | Scripts | 100 | 168,093 | [[28](https://arxiv.org/html/2412.03563v1#bib.bib28)] | [Link](https://github.com/InteractiveNLP-Team/RoleLLM-public) |
| Character-LLM Dataset | Description | / | 9 | 14,400 | [[10](https://arxiv.org/html/2412.03563v1#bib.bib10)] | [Link](https://github.com/choosewhatulike/trainable-agents) |
| PersonaChat Dataset | Description | / | / | / | [[270](https://arxiv.org/html/2412.03563v1#bib.bib270)] | [Link](https://github.com/datasets-mila/datasets--personachat) |
| CharacterDial | Description/Dialogue | Literary Resources,LLM ,Human | 250 | 1,034 | [[62](https://arxiv.org/html/2412.03563v1#bib.bib62)] | [Link](https://github.com/thu-coai/CharacterGLM-6B) |
| Synthetic Persona Chat | Description/Dialogue | LLM | 10,371 | 21,907 | [[104](https://arxiv.org/html/2412.03563v1#bib.bib104)] | [Link](https://github.com/google-research-datasets/Synthetic-Persona-Chat) |
| RoleEval Dataset | Description | Wikipedia, Baidu, Fandom, Moegirlpedia | 300 | 6,000 | [[63](https://arxiv.org/html/2412.03563v1#bib.bib63)] | [Link](https://github.com/Magnetic2014/RoleEval) |
| CharacterEval Dataset | Description/Dialogue | Novels,Scripts | 77 | 1,785 | [[64](https://arxiv.org/html/2412.03563v1#bib.bib64)] | [Link](https://github.com/morecry/CharacterEval) |
| Life Choice Dataset | Description | Books | 1,401 | / | [[66](https://arxiv.org/html/2412.03563v1#bib.bib66)] | / |
| Cross Dataset | Description | Books | / | / | [[67](https://arxiv.org/html/2412.03563v1#bib.bib67)] | [Link](https://github.com/Joanna0123/character_profiling) |
| MMRole-Data | Description/Dialogue/Image | Wikipedia,Baidu | 85 | 14000 | [[69](https://arxiv.org/html/2412.03563v1#bib.bib69)] | [Link](https://huggingface.co/datasets/YanqiDai/MMRole_dataset) |
| RP Dataset | Dialogue | Novels,Scripts | 331 | 3552 | [[70](https://arxiv.org/html/2412.03563v1#bib.bib70)] | [Link](https://github.com/yuyouyu32/BeyondDialogue) |
|  | MPI dataset | Description | / | / | / | [[73](https://arxiv.org/html/2412.03563v1#bib.bib73)] | [Link](https://github.com/jianggy/MPI/tree/main/inventories) |
| Demographics | Who is GPT3 Dataset | / | / | / | / | [[271](https://arxiv.org/html/2412.03563v1#bib.bib271)] | [Link](https://github.com/ben-aaron188/) |
| Dataset Movielens 1M | / | / | / | / | [[80](https://arxiv.org/html/2412.03563v1#bib.bib80)] | [Link](https://grouplens.org/datasets/movielens/1m/) |
| EmotionBench | / | / | / | / | [[82](https://arxiv.org/html/2412.03563v1#bib.bib82)] | [Link](https://github.com/CUHK-ARISE/EmotionBench) |
| OpinionQA Dataset | / | Surveys | / | / | [[91](https://arxiv.org/html/2412.03563v1#bib.bib91)] | [Link](https://github.com/tatsu-lab/opinions_qa) |
| CultureLLM Dataset | Dialogue | Survey | / | / | [[94](https://arxiv.org/html/2412.03563v1#bib.bib94)] | [Link](https://github.com/Scarelette/CultureLLM) |
| PersonaHub Dataset | Description | LLM | 200,000 | 375,000 | [[98](https://arxiv.org/html/2412.03563v1#bib.bib98)] | [Link](https://github.com/tencent-ailab/persona-hub) |

Table 4: Summary of commonly used datasets for individual simulation.

## 6 Datasets and Benchmarks

### 6.1 Individual Simulation

We summarize commonly used datasets for scenario simulation in Table [4](https://arxiv.org/html/2412.03563v1#S5.T4 "Table 4 ‣ System-level Evaluation ‣ 5.3 Evaluation ‣ 5 Society Simulation ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Datasets for individual simulation can be classified into two types: description datasets and dialogue datasets. Description datasets include individual-specific information, such as life experiences, relationships, and basic demographic details like career, age, and gender, often sourced from literature summaries or search engines like Baidu and Wikipedia. Dialogue datasets consist of single-turn or multi-turn conversations in specific scenarios, created by extracting relevant plots for targeted characters or gathering utterances from social media. Some datasets are designed specifically for evaluation, combining basic personal information with customized questions or tasks to assess simulation performance.

### 6.2 Scenario Simulation

We summarize commonly used datasets for scenario simulation in Table [5](https://arxiv.org/html/2412.03563v1#S6.T5 "Table 5 ‣ 6.2 Scenario Simulation ‣ 6 Datasets and Benchmarks ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"), comprising dialog-driven and task-driven scenarios. The datasets cover a wide range of formats, including QA, multiple-choice, rating, code, and game. We observed that QA and multiple-choice formats dominate the data types, while domain-specific datasets like judicial, game, and media prefer to preserve domain-tailored data type.
Based on task complexity, datasets are categorized into three levels: easy, medium, and hard.
Additionally, according to the collection methods, datasets are classified as human-annotated, real-world, or synthetic.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Domain | Datasets | Type | Complexity | # case | Collection | Used by | Data Link |
| Dialog-  Driven | MiniWob++ | Web Interaction | Hard | / | human | [[147](https://arxiv.org/html/2412.03563v1#bib.bib147)] | [Link](https://miniwob.farama.org/) |
| SOTOPIA | Open-Ended Environment | Hard | / | human | [[138](https://arxiv.org/html/2412.03563v1#bib.bib138)] | [Link](https://huggingface.co/datasets/cmu-lti/sotopia) |
| WebQuestions | QA | Easy | 5,810 | human | [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] | [Link](https://worksheets.codalab.org/worksheets/0xba659fe363cb46e7a505c5b6a774dc8a) |
| WebQSP | QA | Easy | 4,737 | human | [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] | [Link](https://www.microsoft.com/en-us/research/publication/the-value-of-semantic-parse-labeling-for-knowledge-base-question-answering-2/) |
| CWQ | QA | Easy | 34,689 | human | [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] | [Link](https://github.com/alontalmor/WebAsKB?tab=readme-ov-file) |
| GrailQA | QA | Easy | 64,331 | human | [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] | [Link](https://dki-lab.github.io/GrailQA/) |
| Natural Questions | QA | Easy | 323,045 | human | [[147](https://arxiv.org/html/2412.03563v1#bib.bib147)] | [Link](https://ai.google.com/research/NaturalQuestions) |
| FairEval | QA | Medium | 80 | human | [[146](https://arxiv.org/html/2412.03563v1#bib.bib146)] | [Link](https://github.com/i-Eval/FairEval) |
| MMLU | Multiple-Choice | Hard | 115,700 | real world | [[29](https://arxiv.org/html/2412.03563v1#bib.bib29), [168](https://arxiv.org/html/2412.03563v1#bib.bib168), [197](https://arxiv.org/html/2412.03563v1#bib.bib197), [172](https://arxiv.org/html/2412.03563v1#bib.bib172), [152](https://arxiv.org/html/2412.03563v1#bib.bib152)] | [Link](https://github.com/hendrycks/test) |
| BIG-bench | / | Hard | / | human | [[29](https://arxiv.org/html/2412.03563v1#bib.bib29), [193](https://arxiv.org/html/2412.03563v1#bib.bib193), [152](https://arxiv.org/html/2412.03563v1#bib.bib152)] | [Link](https://github.com/google/BIG-bench) |
| MetaQA | QA | Medium | 407,513 | real world, human | [[149](https://arxiv.org/html/2412.03563v1#bib.bib149)] | [Link](https://github.com/yuyuz/MetaQA) |
| AmazonHistoryPrice | Product Info | Hard | 930 | real world | [[148](https://arxiv.org/html/2412.03563v1#bib.bib148)] | [Link](https://github.com/TianXiaSJTU/AmazonPriceHistory) |
| MATH | Math Problem | Medium | 12,500 | real world | [[147](https://arxiv.org/html/2412.03563v1#bib.bib147)] | [Link](https://github.com/hendrycks/math/) |
| Arithmetic | Math Expression | Easy | / | human | [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)] | [Link](https://github.com/composable-models/llm_multiagent_debate) |
| Counter-Intuitive AR | Reasoning Problem | Easy | 200 | human | [[145](https://arxiv.org/html/2412.03563v1#bib.bib145)] | [Link](https://github.com/Skytliang/Multi-Agents-Debate) |
| CommonMT | Translation Triple | Medium | 1,200 | human | [[145](https://arxiv.org/html/2412.03563v1#bib.bib145)] | [Link](https://github.com/tjunlp-lab/CommonMT) |
| Overcooked-AI | Game | Medium | / | human | [[198](https://arxiv.org/html/2412.03563v1#bib.bib198)] | [Link](https://github.com/HumanCompatibleAI/overcooked_ai) |
| AVALONBENCH | Game | Easy | / | human | [[153](https://arxiv.org/html/2412.03563v1#bib.bib153)] | [Link](https://github.com/jonathanmli/Avalon-LLM) |
| Jubensha | Game | Medium | 1,115 | real world | [[156](https://arxiv.org/html/2412.03563v1#bib.bib156)] | [Link](https://github.com/jackwu502/ThinkThrice) |
| FanLang-9 | Game | Easy | 18,800 | real world | [[158](https://arxiv.org/html/2412.03563v1#bib.bib158)] | [Link](https://github.com/boluoweifenda/werewolf) |
| WellPlay | QA | Hard | 1,482 | human | [[160](https://arxiv.org/html/2412.03563v1#bib.bib160)] | [Link](https://github.com/alickzhu/PLAYER) |
| WWQA | QA | Medium | 2,053 | synthetic | [[159](https://arxiv.org/html/2412.03563v1#bib.bib159)] | [Link](https://github.com/doslim/Evaluate-the-Opinion-Leadership-of-LLMs) |
| Biographies | Biographies | Easy | 524 | real world | [[29](https://arxiv.org/html/2412.03563v1#bib.bib29)] | [Link](https://github.com/composable-models/llm_multiagent_debate) |
| ALFWorld | Embodied Environment | Medium | 3,827 | human | [[147](https://arxiv.org/html/2412.03563v1#bib.bib147)] | [Link](https://github.com/alfworld/alfworld/tree/master/alfworld/data) |
| ED dataset | Conversational | Hard | 24,850 | human | [[142](https://arxiv.org/html/2412.03563v1#bib.bib142)] | [Link](https://github.com/facebookresearch/EmpatheticDialogues) |
| Topical-Chat | Conversational | Medium | 10,784 | human | [[146](https://arxiv.org/html/2412.03563v1#bib.bib146)] | [Link](https://github.com/alexa/Topical-Chat) |
| COPA | Multiple-Choice | Easy | 500 | real world | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | [Link](http://www.ict.usc.edu/~gordon/copa.html) |
| $\alpha$NLI | Multiple-Choice | Easy | 1,507 | human | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | [Link](http://abductivecommonsense.xyz) |
| CSQA | Multiple-Choice | Easy | 1,221 | human | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | [Link](https://www.tau-nlp.org/commonsenseqa) |
| Social IQa | Multiple-Choice | Easy | 1,935 | human | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | [Link](https://huggingface.co/datasets/allenai/social_i_qa) |
| PIQA | Multiple-Choice | Easy | 1,838 | human | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144), [197](https://arxiv.org/html/2412.03563v1#bib.bib197)] | [Link](https://huggingface.co/datasets/ybisk/piqa) |
| StrategyQA | Multiple-Choice | Easy | 2,290 | human | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | [Link](https://github.com/eladsegal/strategyqa) |
| e-CARE | Multiple-Choice | Easy | 2,122 | human | [[144](https://arxiv.org/html/2412.03563v1#bib.bib144)] | [Link](https://github.com/waste-wood/e-care) |
| Task-  Driven | WiKiTQ | QA | Easy | 22,033 | real world | [[174](https://arxiv.org/html/2412.03563v1#bib.bib174)] | [Link](https://ppasupat.github.io/WikiTableQuestions/) |
| TabFact | QA | Hard | 118,275 | real world, human | [[174](https://arxiv.org/html/2412.03563v1#bib.bib174)] | [Link](https://tabfact.github.io/) |
| FeTaQA | QA | Hard | 10,330 | real world, human | [[174](https://arxiv.org/html/2412.03563v1#bib.bib174)] | [Link](https://github.com/Yale-LILY/FeTaQA) |
| HumanEval | Code | Easy | 164 | real world | [[176](https://arxiv.org/html/2412.03563v1#bib.bib176), [17](https://arxiv.org/html/2412.03563v1#bib.bib17), [193](https://arxiv.org/html/2412.03563v1#bib.bib193), [172](https://arxiv.org/html/2412.03563v1#bib.bib172)] | [Link](https://github.com/openai/human-eval) |
| MBPP | Code | Easy | 974 | real world | [[176](https://arxiv.org/html/2412.03563v1#bib.bib176), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)] | [Link](https://github.com/google-research/google-research/tree/master/mbpp) |
| APPS | Code | Easy | / | real world | [[176](https://arxiv.org/html/2412.03563v1#bib.bib176)] | [Link](https://github.com/hendrycks/apps) |
| Code | Conversational | Hard | 50,000 | synthetic | [[188](https://arxiv.org/html/2412.03563v1#bib.bib188)] | [Link](https://huggingface.co/camel-ai) |
| CoderEval | Code | Medium | 230 | real world | [[176](https://arxiv.org/html/2412.03563v1#bib.bib176)] | [Link](https://github.com/CoderEval/CoderEval) |
| SRDD | Software Requirement | Medium | 1,200 | synthetic | [[177](https://arxiv.org/html/2412.03563v1#bib.bib177), [178](https://arxiv.org/html/2412.03563v1#bib.bib178), [180](https://arxiv.org/html/2412.03563v1#bib.bib180), [172](https://arxiv.org/html/2412.03563v1#bib.bib172)] | [Link](https://github.com/OpenBMB/ChatDev/tree/main/SRDD) |
| SoftwareDev | Task Prompt | Hard | 70 | human | [[17](https://arxiv.org/html/2412.03563v1#bib.bib17)] | [Link](https://github.com/geekan/MetaGPT) |
| SWE-bench | Code | Easy | 2,294 | real world | [[179](https://arxiv.org/html/2412.03563v1#bib.bib179)] | [Link](https://github.com/princeton-nlp/SWE-bench) |
| AI Society | Conversational | Easy | 25,000 | synthetic | [[188](https://arxiv.org/html/2412.03563v1#bib.bib188)] | [Link](https://huggingface.co/camel-ai) |
| SynthPAI | Comment | Hard | 7,823 | synthetic | [[48](https://arxiv.org/html/2412.03563v1#bib.bib48)] | [Link](https://huggingface.co/datasets/RobinSta/SynthPAI) |
| ScienceWorld | Interactive Environment | Hard | / | human | [[189](https://arxiv.org/html/2412.03563v1#bib.bib189)] | [Link](https://github.com/allenai/ScienceWorld) |
| Science | QA | Medium | 60,000 | synthetic | [[188](https://arxiv.org/html/2412.03563v1#bib.bib188)] | [Link](https://huggingface.co/camel-ai) |
| TriviaQA | QA | Easy | 650,000 | real world | [[195](https://arxiv.org/html/2412.03563v1#bib.bib195)] | [Link](https://nlp.cs.washington.edu/triviaqa/) |
| MT-bench | QA | Medium | 80 | human | [[195](https://arxiv.org/html/2412.03563v1#bib.bib195)] | [Link](https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge) |
| RoCoBench-Text | QA | Medium | 269 | human | [[192](https://arxiv.org/html/2412.03563v1#bib.bib192)] | [Link](https://github.com/MandiZhao/robot-collab) |
| PubMedQA | QA | Medium | 273,500 | human, synthetic | [[168](https://arxiv.org/html/2412.03563v1#bib.bib168)] | [Link](https://pubmedqa.github.io/) |
| MedQA | Multiple-Choice | Medium | 61,097 | real world | [[175](https://arxiv.org/html/2412.03563v1#bib.bib175), [168](https://arxiv.org/html/2412.03563v1#bib.bib168)] | [Link](https://drive.google.com/file/d/1ImYUSLk9JbgHXOemfvyiDiirluZHPeQw/view) |
| DDXPlus | Medical Record | Hard | 1,300,000 | synthetic | [[166](https://arxiv.org/html/2412.03563v1#bib.bib166)] | [Link](https://figshare.com/articles/dataset/DDXPlus_Dataset/20043374) |
| MedMCQA | Multiple-Choice | Hard | 194,000 | real world | [[168](https://arxiv.org/html/2412.03563v1#bib.bib168)] | [Link](https://medmcqa.github.io/) |
| MVME | Medical Record | Medium | 506 | real world | [[19](https://arxiv.org/html/2412.03563v1#bib.bib19)] | [Link](https://github.com/LibertFan/AI_Hospital) |
| ARIES | Review Comment | Easy | 3,900 | human, synthetic | [[30](https://arxiv.org/html/2412.03563v1#bib.bib30)] | [Link](https://github.com/allenai/aries) |
| Reviewer2 | Review | Easy | 99,727 | human, synthetic | [[169](https://arxiv.org/html/2412.03563v1#bib.bib169)] | [Link](https://huggingface.co/datasets/GitBag/Reviewer2_PGE_cleaned) |
| GSM8K | Math Problem | Easy | 8,500 | human | [[29](https://arxiv.org/html/2412.03563v1#bib.bib29), [184](https://arxiv.org/html/2412.03563v1#bib.bib184)] | [Link](https://huggingface.co/datasets/openai/gsm8k) |
| MGSM | Math Problem | Hard | 2,750 | human | [[193](https://arxiv.org/html/2412.03563v1#bib.bib193)] | [Link](https://github.com/google-research/url-nlp) |
| Math | QA | Hard | 50,000 | synthetic | [[188](https://arxiv.org/html/2412.03563v1#bib.bib188), [152](https://arxiv.org/html/2412.03563v1#bib.bib152)] | [Link](https://huggingface.co/camel-ai) |
| SimuCourt | Legal Cases | Medium | 420 | real world | [[20](https://arxiv.org/html/2412.03563v1#bib.bib20)] | [Link](https://github.com/Zhitao-He/SimuCourt?utm_source=catalyzex.com) |
| KINLED | Conversational | Medium | 10,546 | human, synthetic | [[186](https://arxiv.org/html/2412.03563v1#bib.bib186)] | [Link](https://github.com/nefujing/lawluo) |
| Supreme Court Database | Legal Cases | Easy | 9,095 | real world | [[181](https://arxiv.org/html/2412.03563v1#bib.bib181)] | [Link](http://scdb.wustl.edu) |
| TDW-MAT | Embodied Environment | Medium | / | human | [[191](https://arxiv.org/html/2412.03563v1#bib.bib191)] | [Link](https://github.com/UMass-Foundation-Model/Co-LLM-Agents/) |
| C-WAH | Embodied Environment | Medium | / | human | [[191](https://arxiv.org/html/2412.03563v1#bib.bib191)] | [Link](https://github.com/UMass-Foundation-Model/Co-LLM-Agents/) |
| RoCoBench | Embodied Environment | Medium | / | human | [[192](https://arxiv.org/html/2412.03563v1#bib.bib192)] | [Link](https://github.com/MandiZhao/robot-collab) |
| FED | Dialogue Response | Medium | 4,712 | human | [[193](https://arxiv.org/html/2412.03563v1#bib.bib193)] | [Link](http://shikib.com/fed_data.json) |
| CulturePark | Conversational | Medium | 41,000 | synthetic | [[50](https://arxiv.org/html/2412.03563v1#bib.bib50)] | [Link](https://github.com/Scarelette/CulturePark) |
| CommonGen-Hard | Concept | Easy | 200 | human | [[193](https://arxiv.org/html/2412.03563v1#bib.bib193), [172](https://arxiv.org/html/2412.03563v1#bib.bib172)] | [Link](https://github.com/madaan/self-refine) |
| ARC Challenge | Multiple-Choice | Easy | 2,590 | human | [[197](https://arxiv.org/html/2412.03563v1#bib.bib197)] | [Link](https://huggingface.co/datasets/allenai/ai2_arc) |
| HellaSwag | Multiple-Choice | Easy | 70,000 | synthetic | [[197](https://arxiv.org/html/2412.03563v1#bib.bib197)] | [Link](https://rowanzellers.com/hellaswag/) |
| UCF101 | Video Clip | Medium | 7,000 | human | [[173](https://arxiv.org/html/2412.03563v1#bib.bib173)] | [Link](https://www.crcv.ucf.edu/data/UCF101.php) |
| HMDB51 | Video Clip | Medium | 13,320 | real world | [[173](https://arxiv.org/html/2412.03563v1#bib.bib173)] | [Link](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) |

Table 5: Summary of commonly used datasets for scenario simulation.

### 6.3 Social Simulation

We summarize commonly used datasets or benchmarks for social simulations in Table [6](https://arxiv.org/html/2412.03563v1#S6.T6 "Table 6 ‣ 6.3 Social Simulation ‣ 6 Datasets and Benchmarks ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). In social simulations, datasets often consist of two parts: those for initialization of agents and those for evaluation. Data used for agent initialization typically contain profiles and potential relations between agents, to help initialize the simulation settings. In contrast, datasets for evaluation provide the reference data of behaviors of real-world individuals. These datasets are sourced in various ways, such as public surveys, existing datasets like MovieLens and Amazon-Book, and crawling from online platforms like Twitter.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Scenario | Dataset | Init. | Eval. | Content | # case | Simulation Objectives | Used by | Data Link |
| General  Economics | 2018 U.S. population | ✓ |  | profile | 100 people | macroeconomic activities | [[27](https://arxiv.org/html/2412.03563v1#bib.bib27)] | [Link](https://github.com/automoto/big-five-data) |
| public government data |  | ✓ | rent information | 51 users | resource allocation | [[221](https://arxiv.org/html/2412.03563v1#bib.bib221)] | [Link](https://www.bphc.com.cn/home) |
| names-dataset 3.1.0 | ✓ |  | profile | 1,000 people | epidemic modeling | [[224](https://arxiv.org/html/2412.03563v1#bib.bib224)] | [Link](https://github.com/philipperemy/name-dataset) |
| big-five-data | ✓ |  | profile | 1,000 people | epidemic modeling | [[224](https://arxiv.org/html/2412.03563v1#bib.bib224)] | [Link](https://github.com/automoto/big-five-data) |
| American Community Survey | ✓ |  | profile | 8.4M people | epidemic modeling | [[225](https://arxiv.org/html/2412.03563v1#bib.bib225)] | [Link](https://www.nyc.gov/site/planning/planning-level/nyc-population/american-community-survey.page) |
| Bureau of Labor Statistics |  | ✓ | labor statistics | 8.4M people | unemployment rate | [[225](https://arxiv.org/html/2412.03563v1#bib.bib225)] | [Link](https://www.bls.gov/charts/employment-situation/civilian-labor-force-participation-rate.htm) |
| CDC |  | ✓ | infection rate | 8.4M people | epidemic modeling | [[225](https://arxiv.org/html/2412.03563v1#bib.bib225)] | [Link](https://www.cdc.gov/) |
| Sociology  and  Political Science | ANES | ✓ | ✓ | profile,answer | 15,626 responses | voting | [[12](https://arxiv.org/html/2412.03563v1#bib.bib12), [227](https://arxiv.org/html/2412.03563v1#bib.bib227), [96](https://arxiv.org/html/2412.03563v1#bib.bib96)] | [Link](https://electionstudies.org/about-us/) |
| Pigeonholing Partisans | ✓ | ✓ | profile,answer | 2,107 responses | partisan bias | [[12](https://arxiv.org/html/2412.03563v1#bib.bib12)] | [Link](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/U23L09) |
| Global Warming | ✓ | ✓ | profile,answer | 2,310 responses | opinion | [[226](https://arxiv.org/html/2412.03563v1#bib.bib226)] | / |
| Twitter | ✓ |  | statements | 1,006,517 users | voting | [[227](https://arxiv.org/html/2412.03563v1#bib.bib227)] | / |
| Interview | ✓ | ✓ | profile,answer | 1,002 users | opnion and behavior | [[229](https://arxiv.org/html/2412.03563v1#bib.bib229)] | [Link](https://github.com/joonspk-research/genagents) |
| Name | ✓ |  | name | 500 names | / | [[230](https://arxiv.org/html/2412.03563v1#bib.bib230)] | [Link](https://github.com/microsoft/turing-experiments/tree/main) |
| Ultimatum Game |  | ✓ | money allocation | 10,000 pairs | money allocation | [[230](https://arxiv.org/html/2412.03563v1#bib.bib230)] | [Link](https://github.com/microsoft/turing-experiments/tree/main) |
| Garden Path Sentences |  | ✓ | garden path sentences | 96 sentences | language parsing | [[230](https://arxiv.org/html/2412.03563v1#bib.bib230)] | [Link](https://github.com/microsoft/turing-experiments/tree/main) |
| Wisdom of Crowds |  | ✓ | answers to questions | 15,000 answers | wisdom of crowds | [[230](https://arxiv.org/html/2412.03563v1#bib.bib230)] | [Link](https://github.com/microsoft/turing-experiments/tree/main) |
| Milgram Shock Experiment |  | ✓ | behavior records | 100 people | obedience behavior | [[230](https://arxiv.org/html/2412.03563v1#bib.bib230)] | [Link](https://github.com/microsoft/turing-experiments/tree/main) |
| 15 Topics | ✓ |  | profile, opinion | 10 users | opinion dynamics | [[24](https://arxiv.org/html/2412.03563v1#bib.bib24)] | [Link](https://github.com/yunshiuan/llm-agent-opinion-dynamics) |
| Formative Study | ✓ | ✓ | profile, interview | 14 users | |  | | --- | | information | | management | | [[233](https://arxiv.org/html/2412.03563v1#bib.bib233)] | / |
| User Study | ✓ | ✓ | profile, interview | 36 users | |  | | --- | | information | | management | | [[233](https://arxiv.org/html/2412.03563v1#bib.bib233)] | / |
| collective decision-making | ✓ | ✓ | profile, opinion | 2,290 users | |  | | --- | | collective | | decision-making | | [[234](https://arxiv.org/html/2412.03563v1#bib.bib234)] | / |
| Becker-2019 | ✓ | ✓ | profile, answers | 1,120 users | wisdom of crowds | [[31](https://arxiv.org/html/2412.03563v1#bib.bib31)] | [Link](https://github.com/joshua-a-becker/wisdom-of-partisan-crowds) |
| Controversial Beliefs Survey | ✓ | ✓ | profile, opinion | 564 users | opinion | [[240](https://arxiv.org/html/2412.03563v1#bib.bib240)] | / |
| Online  Platforms | FPS | ✓ |  | / | 6 topics | opinion dynamics | [[26](https://arxiv.org/html/2412.03563v1#bib.bib26)] | / |
| Echo Chambers | ✓ |  | profile | 3 networks | opinion polarization | [[245](https://arxiv.org/html/2412.03563v1#bib.bib245)] | / |
| Gender Discrimination | ✓ | ✓ | profile, opinion | 8,563 users | opinion dynamics | [[248](https://arxiv.org/html/2412.03563v1#bib.bib248)] | / |
| Nuclear Energy | ✓ | ✓ | profile, opinion | 17,945 users | opinion dynamics | [[248](https://arxiv.org/html/2412.03563v1#bib.bib248)] | / |
| ANES | ✓ |  | profile | 500 users | partisan bias | [[249](https://arxiv.org/html/2412.03563v1#bib.bib249)] | [Link](https://electionstudies.org/about-us/) |
| SAGraph | ✓ | ✓ | profile, interaction | 40 300 influencers | influencer selection | [[251](https://arxiv.org/html/2412.03563v1#bib.bib251)] | / |
| Metoo | ✓ | ✓ | profile, opinion | 1,000 users | opinion dynamics | [[25](https://arxiv.org/html/2412.03563v1#bib.bib25)] | [Link](https://drive.google.com/file/d/1qQzQAvDH-eLtg1jPTKe6NkToF7Aq1EAA/view?usp=sharing) |
| Roe | ✓ | ✓ | profile, opinion | 1,000 users | opinion dynamics | [[25](https://arxiv.org/html/2412.03563v1#bib.bib25)] | [Link](https://drive.google.com/file/d/13dkJ_P2JzbrDdJkYdwred260Ps-ym-64/view?usp=sharing) |
| BLM | ✓ | ✓ | profile, opinion | 1,000 users | opinion dynamics | [[25](https://arxiv.org/html/2412.03563v1#bib.bib25)] | [Link](https://drive.google.com/file/d/1HymVETg5SgLJqL1O3bPiT-RcBVSMGEhT/view?usp=sharing) |
| Twitter15 | ✓ | ✓ | profile, behavior | 198 news | rumor propagation | [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)] | [Link](https://www.dropbox.com/s/7ewzdrbelpmrnxu/rumdetect2017.zip?dl=0) |
| Twitter16 | ✓ | ✓ | profile, behavior | 198 news | rumor propagation | [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)] | [Link](https://www.dropbox.com/s/7ewzdrbelpmrnxu/rumdetect2017.zip?dl=0) |
| Reddit | ✓ | ✓ | profile, comment | 116,932 comments | herd effect | [[33](https://arxiv.org/html/2412.03563v1#bib.bib33)] | / |
| MindEcho | ✓ | ✓ | profile, comment | 14 KOL | key opinion leader | [[252](https://arxiv.org/html/2412.03563v1#bib.bib252)] | / |
| WARRIORS | ✓ | ✓ | |  | | --- | | profile, | | search behavior | | 100,000 users | search behavior | [[253](https://arxiv.org/html/2412.03563v1#bib.bib253)] | / |
| Amazon Beauty | ✓ | ✓ | |  | | --- | | profile, | | user-item interaction | | 15,577 users | |  | | --- | | user-item | | interaction | | [[254](https://arxiv.org/html/2412.03563v1#bib.bib254)] | [Link](https://jmcauley.ucsd.edu/data/amazon/links.html) |
| Steam | ✓ | ✓ | |  | | --- | | profile, | | user-item interaction | | 281,205 users | |  | | --- | | user-item | | interaction | | [[254](https://arxiv.org/html/2412.03563v1#bib.bib254), [257](https://arxiv.org/html/2412.03563v1#bib.bib257)] | [Link](https://github.com/LehengTHU/Agent4Rec) |
| MovieLens | ✓ | ✓ | |  | | --- | | profile, | | user-item interaction | | 298,074 users | |  | | --- | | user-item | | interaction | | [[254](https://arxiv.org/html/2412.03563v1#bib.bib254), [256](https://arxiv.org/html/2412.03563v1#bib.bib256), [257](https://arxiv.org/html/2412.03563v1#bib.bib257)] | [Link](https://github.com/LehengTHU/Agent4Rec) |
| Amazon Book | ✓ | ✓ | |  | | --- | | profile, | | user-item interaction | | / | |  | | --- | | user-item | | interaction | | [[257](https://arxiv.org/html/2412.03563v1#bib.bib257)] | [Link](https://github.com/LehengTHU/Agent4Rec) |
| Amazon Review CD | ✓ | ✓ | |  | | --- | | profile, | | user-item interaction | | 100 users | |  | | --- | | user-item | | interaction | | [[258](https://arxiv.org/html/2412.03563v1#bib.bib258)] | [Link](https://amazon-reviews-2023.github.io/main.html) |
| Amazon Review Office | ✓ | ✓ | |  | | --- | | profile, | | user-item interaction | | 100 users | |  | | --- | | user-item | | interaction | | [[258](https://arxiv.org/html/2412.03563v1#bib.bib258)] | [Link](https://amazon-reviews-2023.github.io/main.html) |

Table 6: Summary of commonly used datasets for society simulation. Init. means the data provides profile to initialize agents, and Eval. means it provides data to validate the simulation effectiveness.

## 7 Trend of Social Simulations

### 7.1 Trend of Individual Simulation

Figure 5: Illustration of individual simulation trend, which goes through coarse simulation, more nuanced simulation, and situation-oriented simulation.


Figure 6: Illustration of scenario simulation trend, which goes through simple scenario, multi-stage scenario, and collaborative scenario.


Figure 7: Illustration of society simulation trend, which goes through three stages: constructing preliminary environments, exploring alignment on specific scenarios, and scaling up while moving towards multi-modal.

Evolving from social science, individual simulation powered by LLMs has progressed through three distinct stages, namely coarse simulation, more nuanced simulation, and situation-oriented simulation, which is depicted in Figure [5](https://arxiv.org/html/2412.03563v1#S7.F5 "Figure 5 ‣ 7.1 Trend of Individual Simulation ‣ 7 Trend of Social Simulations ‣ From Individual to Society: A Survey on Social Simulation Driven by Large Language Model-based Agents"). Since June 2022, researchers started to focus on coarse simulations, especially for superficial traits like testing the personalities of LLMs and simulating well-known characters [[81](https://arxiv.org/html/2412.03563v1#bib.bib81), [137](https://arxiv.org/html/2412.03563v1#bib.bib137)]. After August 2023, the trends shifted towards more refined simulations of specific individuals, with studies evaluating the cognitive aspects of simulated models [[61](https://arxiv.org/html/2412.03563v1#bib.bib61), [67](https://arxiv.org/html/2412.03563v1#bib.bib67)] and improving their simulation capabilities [[84](https://arxiv.org/html/2412.03563v1#bib.bib84), [65](https://arxiv.org/html/2412.03563v1#bib.bib65)]. By May 2024, researchers began conducting individual simulations in specific scenarios [[111](https://arxiv.org/html/2412.03563v1#bib.bib111), [70](https://arxiv.org/html/2412.03563v1#bib.bib70)], further expanding the complexity and realism of these simulations.

#### 7.1.1 Coarse Simulation on Superficial Features

Many individual simulation works born since June 2022, the majority of which initially focus on simulating superficial features implied in human behaviors. A significant portion of the effort was dedicated to collecting and standardizing character-related information to build persona-based datasets [[55](https://arxiv.org/html/2412.03563v1#bib.bib55), [56](https://arxiv.org/html/2412.03563v1#bib.bib56)]. Additionally, eliciting the underlying demographic personalities of prevailing LLMs posed a challenge in this early stage [[81](https://arxiv.org/html/2412.03563v1#bib.bib81), [120](https://arxiv.org/html/2412.03563v1#bib.bib120)]. The early trials on coarse individual simulations shed light on LLMs’ attributes during simulation, including hallucinations, inherent biases, and stereotypes, which are proven to be crucial for future simulations.

#### 7.1.2 More Nuanced Simulation on Specific Characters

As individual simulation methods advanced, the precision of simulations significantly improved.
More nuanced aspects of the individual simulation gained growing attention. Some works implement new functionalities and refine the models’ architecture, such as incorporating memory and planning modules [[84](https://arxiv.org/html/2412.03563v1#bib.bib84), [66](https://arxiv.org/html/2412.03563v1#bib.bib66)], while others focus on designing specific tasks for training and evaluation, like multi-dimensional interviews [[61](https://arxiv.org/html/2412.03563v1#bib.bib61)] and simulation with rich information from scene descriptions and experiential memories [[28](https://arxiv.org/html/2412.03563v1#bib.bib28)].

#### 7.1.3 Situation-Oriented Simulation

Situation-oriented individual simulations begin within game environments [[119](https://arxiv.org/html/2412.03563v1#bib.bib119)], where LLMs are required to make appropriate decisions based on predefined rules. In more complex environments, simulated individuals are supposed to interact dynamically with their surroundings, responding to real-time environmental feedback [[111](https://arxiv.org/html/2412.03563v1#bib.bib111), [100](https://arxiv.org/html/2412.03563v1#bib.bib100)]. Beyond traditional simulations like dialogue, situation-oriented simulations expand into areas such as dramatic performances [[105](https://arxiv.org/html/2412.03563v1#bib.bib105)], digital game exploration [[109](https://arxiv.org/html/2412.03563v1#bib.bib109)], and 3D task execution [[107](https://arxiv.org/html/2412.03563v1#bib.bib107)]. As the complexity of these simulations grows, the demands on the underlying architecture grow as well.

### 7.2 Trend of Scenario Simulation

The development of scenario simulation has progressed through several distinct stages.
Starting from January 2023, different researches focused primarily on simple scenarios concerning single objectives and facilitated basic contextual interactions [[175](https://arxiv.org/html/2412.03563v1#bib.bib175), [188](https://arxiv.org/html/2412.03563v1#bib.bib188), [181](https://arxiv.org/html/2412.03563v1#bib.bib181), [144](https://arxiv.org/html/2412.03563v1#bib.bib144)].
By June 2023, the emphasis changed to multi-stage scenarios, incorporating multi-step tasks that enabled agents to engage in sequential decision-making and adaptive responses across varied contexts to achieve the more complex goal [[190](https://arxiv.org/html/2412.03563v1#bib.bib190), [192](https://arxiv.org/html/2412.03563v1#bib.bib192), [182](https://arxiv.org/html/2412.03563v1#bib.bib182), [165](https://arxiv.org/html/2412.03563v1#bib.bib165)].
By February 2024, research has increasingly focused on multi-agent collaborative scenarios, emphasizing agents’ capabilities to cooperate and adapt within complex, high-order simulations [[236](https://arxiv.org/html/2412.03563v1#bib.bib236), [164](https://arxiv.org/html/2412.03563v1#bib.bib164), [149](https://arxiv.org/html/2412.03563v1#bib.bib149), [184](https://arxiv.org/html/2412.03563v1#bib.bib184)].

#### 7.2.1 Simple Scenario

In the initial phase of scenario simulation, researchers focused on constructing simple scenarios that supported foundational agent interactions. Much of this work concentrated on dialogue-driven decision-making frameworks, which facilitated structured information exchange and agent alignment [[175](https://arxiv.org/html/2412.03563v1#bib.bib175), [188](https://arxiv.org/html/2412.03563v1#bib.bib188), [49](https://arxiv.org/html/2412.03563v1#bib.bib49)]. Additionally, studies explored the collaborative potentials of agents through multi-agent debate frameworks, employing debate and critical feedback to assess cooperative reasoning and performance enhancement in LLMs [[143](https://arxiv.org/html/2412.03563v1#bib.bib143), [144](https://arxiv.org/html/2412.03563v1#bib.bib144), [29](https://arxiv.org/html/2412.03563v1#bib.bib29)]. Simultaneously, other studies applied scenario simulations within specific domains—such as law, software development, scientific analysis, and recommendation systems—demonstrating the versatility of task-based simulations in achieving domain-specific objectives [[181](https://arxiv.org/html/2412.03563v1#bib.bib181), [176](https://arxiv.org/html/2412.03563v1#bib.bib176), [161](https://arxiv.org/html/2412.03563v1#bib.bib161)].

#### 7.2.2 Multi-Stage Scenario

Different from simple task-oriented scenarios, multi-stage scenarios are no longer limited to mere agent interactions. Instead, they emphasize the fine-grained construction of scenarios.
This stage introduces multiple roles and task decomposition as central elements, enabling agents to collaborate not merely on single tasks but through incremental task breakdowns that require coordinated effort [[191](https://arxiv.org/html/2412.03563v1#bib.bib191), [192](https://arxiv.org/html/2412.03563v1#bib.bib192)].
In software development,  [[177](https://arxiv.org/html/2412.03563v1#bib.bib177), [17](https://arxiv.org/html/2412.03563v1#bib.bib17)] decomposed the development process into multiple stages like design, coding and testing to enhance the capacity for achieving complex objectives and improving software quality.
Additionally, communication games were introduced to investigate human behavior within complex conversational scenarios, adding depth to interaction analysis [[150](https://arxiv.org/html/2412.03563v1#bib.bib150), [151](https://arxiv.org/html/2412.03563v1#bib.bib151), [152](https://arxiv.org/html/2412.03563v1#bib.bib152), [153](https://arxiv.org/html/2412.03563v1#bib.bib153)].

#### 7.2.3 Collaborative Scenario

With the growing interest in scenario simulation, research shifted toward collaborative scenarios, emphasizing advanced social dynamics and cooperative strategies in agent interactions. [[197](https://arxiv.org/html/2412.03563v1#bib.bib197), [198](https://arxiv.org/html/2412.03563v1#bib.bib198)] introduce reinforcement learning to align LLM with embodied environments.
To build efficient scenario simulations, [[236](https://arxiv.org/html/2412.03563v1#bib.bib236)] focused on reducing LLM inference costs by modeling social relationships while [[164](https://arxiv.org/html/2412.03563v1#bib.bib164)] utilized dynamic “agent trees” in environments like Minecraft, enabling asynchronous task execution for efficient resource gathering.
In addition, [[19](https://arxiv.org/html/2412.03563v1#bib.bib19), [141](https://arxiv.org/html/2412.03563v1#bib.bib141)] simulated collaborative environments in the real world, reflecting complex social interactions such as medical processes and the development of social skills, with agents handling evolving multistep tasks.

### 7.3 Trend of Society Simulation

Since the concept of social simulation was first introduced by Park et al. [[247](https://arxiv.org/html/2412.03563v1#bib.bib247)], numerous notable studies have emerged. Broadly, the development of this field can be categorized into three phases. Prior to June 2023, researchers concentrated on constructing preliminary environments [[32](https://arxiv.org/html/2412.03563v1#bib.bib32), [224](https://arxiv.org/html/2412.03563v1#bib.bib224), [199](https://arxiv.org/html/2412.03563v1#bib.bib199)]. By February 2024, the focus shifted toward exploring alignment within specific scenarios, such as persona modeling and targeted environments, marking the first significant surge of publications [[248](https://arxiv.org/html/2412.03563v1#bib.bib248), [272](https://arxiv.org/html/2412.03563v1#bib.bib272), [27](https://arxiv.org/html/2412.03563v1#bib.bib27)]. Most recently, the trend has moved towards scaling up and incorporating multi-modal approaches. In this phase, large-scale precise modeling has gained recognition, with other modalities such as vision and voice being integrated into simulations [[25](https://arxiv.org/html/2412.03563v1#bib.bib25), [232](https://arxiv.org/html/2412.03563v1#bib.bib232), [158](https://arxiv.org/html/2412.03563v1#bib.bib158), [273](https://arxiv.org/html/2412.03563v1#bib.bib273)].

The main characteristics can be summarized as:

#### 7.3.1 Constructing Preliminary Environments

The complexity of society simulation, to a certain extent, stems from the complexity of the environment involved. Society simulation usually involve multiple interacting individuals (such as people, organizations, groups, etc.), which act in a specific environment (such as cities, markets, cyberspace, etc.). Therefore, the pioneer work focuses on how to design a specific environment to support society simulation. [[32](https://arxiv.org/html/2412.03563v1#bib.bib32)] built an interactive sandbox environment by extending a LLM to store a complete record of an agent’s experience and dynamically synthesizing memory to plan behavior. [[224](https://arxiv.org/html/2412.03563v1#bib.bib224)] built an epidemic spread simulation environment that simulates human behavior at the individual level to reproduce the spread of an epidemic in a simulated environment. [[199](https://arxiv.org/html/2412.03563v1#bib.bib199)] created an easy-to-use infrastructure that allows researchers to build evaluation tasks by adding agents and buildings, providing a visual and program-based platform for testing LLMs.

#### 7.3.2 Exploring Alignment on Specific Scenarios

With the development of simulation environment technology, society simulation has basically become operational. At this time, to test the credibility of simulation, evaluating the alignment performance of agents with real situations on specific tasks has gradually become an important research direction. [[248](https://arxiv.org/html/2412.03563v1#bib.bib248)] use real social network data to measure the accuracy of simulation by evaluating the behavior and decision-making of agents at the individual and group levels in a simulated social network environment. [[27](https://arxiv.org/html/2412.03563v1#bib.bib27)] evaluate the decision rationality of LLM agents by simulating macroeconomic activities and comparing the performance of LLM agents with traditional rule-based agents or language agents in generating classic macroeconomic phenomena such as inflation and unemployment.

#### 7.3.3 Scaling Up and towards Multi-Modal

##### Scaling up

Before LLM-based agents became widely adopted for society simulation, researchers predominantly relied on agent-based modeling (ABM) methods, where agents were typically programmed to react based on predefined algorithms. With the advent of LLM providing glimpses of human-like intelligence [[274](https://arxiv.org/html/2412.03563v1#bib.bib274)], LLM-based agents entered the spotlight. Given the good performance of LLM-based agents in a series of specific scenarios, researchers began to expand the scale of simulation. [[25](https://arxiv.org/html/2412.03563v1#bib.bib25), [232](https://arxiv.org/html/2412.03563v1#bib.bib232)] involve the core elements of large-scale society simulation and study the interaction between agents and the generation of behavioral norms. [[158](https://arxiv.org/html/2412.03563v1#bib.bib158)] proposed a proving ground for assessing advanced reasoning capabilities of LLM agents in a large-scale society simulation context.

##### Multi-Modal

With the development of language models, using language agents for society simulation has become a hot topic in research. It incorporates other modal information elements such as vision in life into the simulation through text descriptions. However, with a series of advances in the field of Vision-Language Model(VLM) [[275](https://arxiv.org/html/2412.03563v1#bib.bib275), [276](https://arxiv.org/html/2412.03563v1#bib.bib276), [36](https://arxiv.org/html/2412.03563v1#bib.bib36)], researchers began to incorporate VLM-based agents into society simulation research. [[273](https://arxiv.org/html/2412.03563v1#bib.bib273)] provide rich multi-modal interaction information and detailed annotations in large-scale scenarios. [[237](https://arxiv.org/html/2412.03563v1#bib.bib237)] focus on simulating the perceptual limitations and physical demands of the real world to facilitate more realistic social interactions.

## 8 Conclusion

In this paper, we categorize LLM-driven social simulations into three types: individual, scenario, and society simulation, highlighting their progression from modeling individual behaviors to replicating complex social dynamics. By systematically reviewing architectures, methods, and evaluations across these categories, we provide a structured framework for advancing research in this field. This work aims to guide the development of LLM-based simulations and foster interdisciplinary studies to address real-world challenges and support decision-making.

## References

- [1]

  Mark S Granovetter.
  The strength of weak ties.
  American journal of sociology, 78(6):1360–1380, 1973.
- [2]

  Daniel Katz and Robert Kahn.
  The social psychology of organizations.
  In Organizational behavior 2, pages 152–168. Routledge, 2015.
- [3]

  SE ASCH.
  Effects of group pressure upon the modification and distortion of judgments.
  Groups, Leadership and Men: Research in Human Relations, page 177, 1951.
- [4]

  Stanley Milgram.
  Behavioral study of obedience.
  The Journal of abnormal and social psychology, 67(4):371, 1963.
- [5]

  Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Fei Xia, Ed Chi, Quoc V Le, Denny Zhou, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  Advances in neural information processing systems, 35:24824–24837, 2022.
- [6]

  Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo, and Yusuke Iwasawa.
  Large language models are zero-shot reasoners.
  Advances in neural information processing systems, 35:22199–22213, 2022.
- [7]

  Zhiheng Xi, Wenxiang Chen, Xin Guo, Wei He, Yiwen Ding, Boyang Hong, Ming Zhang, Junzhe Wang, Senjie Jin, Enyu Zhou, et al.
  The rise and potential of large language model based agents: A survey.
  arXiv preprint arXiv:2309.07864, 2023.
- [8]

  Shunyu Yao, Dian Yu, Jeffrey Zhao, Izhak Shafran, Tom Griffiths, Yuan Cao, and Karthik Narasimhan.
  Tree of thoughts: Deliberate problem solving with large language models.
  Advances in Neural Information Processing Systems, 36, 2024.
- [9]

  Lei Wang, Chen Ma, Xueyang Feng, Zeyu Zhang, Hao Yang, Jingsen Zhang, Zhiyuan Chen, Jiakai Tang, Xu Chen, Yankai Lin, Wayne Xin Zhao, Zhewei Wei, and Jirong Wen.
  A survey on large language model based autonomous agents.
  Frontiers of Computer Science, 18(6), March 2024.
- [10]

  Yunfan Shao, Linyang Li, Junqi Dai, and Xipeng Qiu.
  Character-llm: A trainable agent for role-playing, 2023.
- [11]

  Jiangjie Chen, Xintao Wang, Rui Xu, Siyu Yuan, Yikai Zhang, Wei Shi, Jian Xie, Shuang Li, Ruihan Yang, Tinghui Zhu, et al.
  From persona to personalization: A survey on role-playing language agents.
  arXiv preprint arXiv:2404.18231, 2024.
- [12]

  Lisa P. Argyle, Ethan C. Busby, Nancy Fulda, Joshua R. Gubler, Christopher Rytting, and David Wingate.
  Out of one, many: Using language models to simulate human samples.
  Political Analysis, 31(3):337–351, February 2023.
- [13]

  Yaqub Chaudhary and Jonnie Penn.
  Large language models as instruments of power: New regimes of autonomous manipulation and control.
  arXiv preprint arXiv:2405.03813, 2024.
- [14]

  Taicheng Guo, Xiuying Chen, Yaqi Wang, Ruidi Chang, Shichao Pei, Nitesh V Chawla, Olaf Wiest, and Xiangliang Zhang.
  Large language model based multi-agents: A survey of progress and challenges.
  arXiv preprint arXiv:2402.01680, 2024.
- [15]

  Chen Gao, Xiaochong Lan, Nian Li, Yuan Yuan, Jingtao Ding, Zhilun Zhou, Fengli Xu, and Yong Li.
  Large language models empowered agent-based modeling and simulation: A survey and perspectives.
  Humanities and Social Sciences Communications, 11(1):1–24, 2024.
- [16]

  Chen Qian, Xin Cong, Wei Liu, Cheng Yang, Weize Chen, Yusheng Su, Yufan Dang, Jiahao Li, Juyuan Xu, Dahai Li, et al.
  Communicative agents for software development.
  arXiv preprint arXiv:2307.07924, 2023.
- [17]

  Sirui Hong, Xiawu Zheng, Jonathan Chen, Yuheng Cheng, Jinlin Wang, Ceyao Zhang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, et al.
  Metagpt: Meta programming for multi-agent collaborative framework.
  arXiv preprint arXiv:2308.00352, 2023.
- [18]

  Junkai Li, Siyu Wang, Meng Zhang, Weitao Li, Yunghwei Lai, Xinhui Kang, Weizhi Ma, and Yang Liu.
  Agent hospital: A simulacrum of hospital with evolvable medical agents.
  arXiv preprint arXiv:2405.02957, 2024.
- [19]

  Zhihao Fan, Jialong Tang, Wei Chen, Siyuan Wang, Zhongyu Wei, Jun Xi, Fei Huang, and Jingren Zhou.
  Ai hospital: Interactive evaluation and collaboration of llms as intern doctors for clinical diagnosis.
  arXiv preprint arXiv:2402.09742, 2024.
- [20]

  Zhitao He, Pengfei Cao, Chenhao Wang, Zhuoran Jin, Yubo Chen, Jiexin Xu, Huaijun Li, Xiaojian Jiang, Kang Liu, and Jun Zhao.
  Simucourt: Building judicial decision-making agents with real-world judgement documents.
  arXiv preprint arXiv:2403.02959, 2024.
- [21]

  Thomas C Schelling.
  Dynamic models of segregation.
  Journal of mathematical sociology, 1(2):143–186, 1971.
- [22]

  Rainer Hegselmann and Ulrich Krause.
  Opinion dynamics driven by various ways of averaging.
  Computational Economics, 25:381–405, 2005.
- [23]

  Yun-Shiuan Chuang and Timothy T Rogers.
  Computational agent-based models in opinion dynamics: A survey on social simulations and empirical studies.
  arXiv preprint arXiv:2306.03446, 2023.
- [24]

  Yun-Shiuan Chuang, Agam Goyal, Nikunj Harlalka, Siddharth Suresh, Robert Hawkins, Sijia Yang, Dhavan Shah, Junjie Hu, and Timothy T Rogers.
  Simulating opinion dynamics with networks of llm-based agents.
  arXiv preprint arXiv:2311.09618, 2023.
- [25]

  Xinyi Mou, Zhongyu Wei, and Xuanjing Huang.
  Unveiling the truth and facilitating change: Towards agent-based large-scale social movement simulation.
  arXiv preprint arXiv:2402.16333, 2024.
- [26]

  Yuhan Liu, Xiuying Chen, Xiaoqing Zhang, Xing Gao, Ji Zhang, and Rui Yan.
  From skepticism to acceptance: Simulating the attitude dynamics toward fake news.
  arXiv preprint arXiv:2403.09498, 2024.
- [27]

  N. Li, C. Gao, M. Li, et al.
  Econagent: Large language model-empowered agents for simulating macroeconomic activities.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 15523–15536, 2024.
- [28]

  Zekun Moore Wang, Zhongyuan Peng, Haoran Que, Jiaheng Liu, Wangchunshu Zhou, Yuhan Wu, Hongcheng Guo, Ruitong Gan, Zehao Ni, Jian Yang, Man Zhang, Zhaoxiang Zhang, Wanli Ouyang, Ke Xu, Stephen W. Huang, Jie Fu, and Junran Peng.
  Rolellm: Benchmarking, eliciting, and enhancing role-playing abilities of large language models, 2024.
- [29]

  Yilun Du, Shuang Li, Antonio Torralba, Joshua B Tenenbaum, and Igor Mordatch.
  Improving factuality and reasoning in language models through multiagent debate.
  arXiv preprint arXiv:2305.14325, 2023.
- [30]

  Mike D’Arcy, Tom Hope, Larry Birnbaum, and Doug Downey.
  Marg: Multi-agent review generation for scientific papers.
  arXiv preprint arXiv:2401.04259, 2024.
- [31]

  Yun-Shiuan Chuang, Nikunj Harlalka, Siddharth Suresh, Agam Goyal, Robert Hawkins, Sijia Yang, Dhavan Shah, Junjie Hu, and Timothy T Rogers.
  The wisdom of partisan crowds: Comparing collective intelligence in humans and llm-based agents.
  In Proceedings of the Annual Meeting of the Cognitive Science Society, volume 46, 2024.
- [32]

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein.
  Generative agents: Interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology, pages 1–22, 2023.
- [33]

  Ziyi Yang, Zaibin Zhang, Zirui Zheng, Yuxian Jiang, Ziyue Gan, Zhiyu Wang, Zijian Ling, Jinsong Chen, Martz Ma, Bowen Dong, et al.
  Oasis: Open agents social interaction simulations on one million agents.
  arXiv preprint arXiv:2411.11581, 2024.
- [34]

  Junwei Liu, Kaixin Wang, Yixuan Chen, Xin Peng, Zhenpeng Chen, Lingming Zhang, and Yiling Lou.
  Large language model-based agents for software engineering: A survey.
  arXiv preprint arXiv:2409.02977, 2024.
- [35]

  Tom B Brown.
  Language models are few-shot learners.
  arXiv preprint arXiv:2005.14165, 2020.
- [36]

  Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, et al.
  Gpt-4 technical report.
  arXiv preprint arXiv:2303.08774, 2023.
- [37]

  Kevin A Fischer.
  Reflective linguistic programming (rlp): A stepping stone in socially-aware agi (socialagi).
  arXiv preprint arXiv:2305.12647, 2023.
- [38]

  Lei Wang, Jingsen Zhang, Hao Yang, Zhiyuan Chen, Jiakai Tang, Zeyu Zhang, Xu Chen, Yankai Lin, Ruihua Song, Wayne Xin Zhao, et al.
  User behavior simulation with large language model based agents.
  arXiv preprint arXiv:2306.02552, 2023.
- [39]

  Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao.
  React: Synergizing reasoning and acting in language models.
  arXiv preprint arXiv:2210.03629, 2022.
- [40]

  Shibo Hao, Yi Gu, Haodi Ma, Joshua Jiahua Hong, Zhen Wang, Daisy Zhe Wang, and Zhiting Hu.
  Reasoning with language model is planning with world model.
  arXiv preprint arXiv:2305.14992, 2023.
- [41]

  Aaron Parisi, Yao Zhao, and Noah Fiedel.
  Talm: Tool augmented language models.
  arXiv preprint arXiv:2205.12255, 2022.
- [42]

  Timo Schick, Jane Dwivedi-Yu, Roberto Dessì, Roberta Raileanu, Maria Lomeli, Eric Hambro, Luke Zettlemoyer, Nicola Cancedda, and Thomas Scialom.
  Toolformer: Language models can teach themselves to use tools.
  Advances in Neural Information Processing Systems, 36, 2024.
- [43]

  Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao.
  Reflexion: Language agents with verbal reinforcement learning.
  Advances in Neural Information Processing Systems, 36, 2024.
- [44]

  Chenxu Hu, Jie Fu, Chenzhuang Du, Simian Luo, Junbo Zhao, and Hang Zhao.
  Chatdb: Augmenting llms with databases as their symbolic memory.
  arXiv preprint arXiv:2306.03901, 2023.
- [45]

  Wanjun Zhong, Lianghong Guo, Qiqi Gao, He Ye, and Yanlin Wang.
  Memorybank: Enhancing large language models with long-term memory.
  In Proceedings of the AAAI Conference on Artificial Intelligence, volume 38/17, pages 19724–19731, 2024.
- [46]

  Jingqing Ruan, Yihong Chen, Bin Zhang, Zhiwei Xu, Tianpeng Bao, Guoqing Du, Shiwei Shi, Hangyu Mao, Ziyue Li, Xingyu Zeng, et al.
  Tptu: large language model-based ai agents for task planning and tool usage.
  arXiv preprint arXiv:2308.03427, 2023.
- [47]

  Wenyue Hua, Lizhou Fan, Lingyao Li, Kai Mei, Jianchao Ji, Yingqiang Ge, Libby Hemphill, and Yongfeng Zhang.
  War and peace (waragent): Large language model-based multi-agent simulation of world wars.
  arXiv preprint arXiv:2311.17227, 2023.
- [48]

  Chen Qian, Zihao Xie, Yifei Wang, Wei Liu, Yufan Dang, Zhuoyun Du, Weize Chen, Cheng Yang, Zhiyuan Liu, and Maosong Sun.
  Scaling large-language-model-based multi-agent collaboration.
  arXiv preprint arXiv:2406.07155, 2024.
- [49]

  Rui Hao, Linmei Hu, Weijian Qi, Qingliu Wu, Yirui Zhang, and Liqiang Nie.
  Chatllm network: More brains, more intelligence.
  arXiv preprint arXiv:2304.12998, 2023.
- [50]

  Cheng Li, Damien Teney, Linyi Yang, Qingsong Wen, Xing Xie, and Jindong Wang.
  Culturepark: Boosting cross-cultural understanding in large language models.
  arXiv preprint arXiv:2405.15145, 2024.
- [51]

  Weize Chen, Chenfei Yuan, Jiarui Yuan, Yusheng Su, Chen Qian, Cheng Yang, Ruobing Xie, Zhiyuan Liu, and Maosong Sun.
  Beyond natural language: Llms leveraging alternative formats for enhanced reasoning and communication.
  arXiv preprint arXiv:2402.18439, 2024.
- [52]

  Chau Pham, Boyi Liu, Yingxiang Yang, Zhengyu Chen, Tianyi Liu, Jianbo Yuan, Bryan A Plummer, Zhaoran Wang, and Hongxia Yang.
  Let models speak ciphers: Multiagent debate through embeddings.
  In The Twelfth International Conference on Learning Representations, 2024.
- [53]

  Samuele Marro, Emanuele La Malfa, Jesse Wright, Guohao Li, Nigel Shadbolt, Michael Wooldridge, and Philip Torr.
  A scalable communication protocol for networks of large language models.
  arXiv preprint arXiv:2410.11905, 2024.
- [54]

  Faeze Brahman, Meng Huang, Oyvind Tafjord, Chao Zhao, Mrinmaya Sachan, and Snigdha Chaturvedi.
  ”let your characters tell their story”: A dataset for character-centric narrative understanding, 2021.
- [55]

  Nuo Chen, Yan Wang, Haiyun Jiang, Deng Cai, Yuhan Li, Ziyang Chen, Longyue Wang, and Jia Li.
  Large language models meet harry potter: A bilingual dataset for aligning dialogue agents with characters, 2023.
- [56]

  Eric Schwitzgebel, David Schwitzgebel, and Anna Strasser.
  Creating a large language model of a philosopher, 2023.
- [57]

  Joon Sung Park, Joseph C. O’Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, and Michael S. Bernstein.
  Generative agents: Interactive simulacra of human behavior, 2023.
- [58]

  Harsh Agrawal, Aditya Mishra, Manish Gupta, and Mausam.
  Multimodal persona based generation of comic dialogs.
  In Anna Rogers, Jordan Boyd-Graber, and Naoaki Okazaki, editors, Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 14150–14164, Toronto, Canada, July 2023. Association for Computational Linguistics.
- [59]

  Cheng Li, Ziang Leng, Chenxi Yan, Junyi Shen, Hao Wang, Weishi MI, Yaying Fei, Xiaoyang Feng, Song Yan, HaoSheng Wang, Linkang Zhan, Yaokai Jia, Pingyu Wu, and Haozhen Sun.
  Chatharuhi: Reviving anime character in reality via large language model, 2023.
- [60]

  Jingsheng Gao, Yixin Lian, Ziyi Zhou, Yuzhuo Fu, and Baoyuan Wang.
  Livechat: A large-scale personalized dialogue dataset automatically constructed from live streaming, 2023.
- [61]

  Xintao Wang, Yunze Xiao, Jen tse Huang, Siyu Yuan, Rui Xu, Haoran Guo, Quan Tu, Yaying Fei, Ziang Leng, Wei Wang, Jiangjie Chen, Cheng Li, and Yanghua Xiao.
  Incharacter: Evaluating personality fidelity in role-playing agents through psychological interviews, 2024.
- [62]

  Jinfeng Zhou, Zhuang Chen, Dazhen Wan, Bosi Wen, Yi Song, Jifan Yu, Yongkang Huang, Libiao Peng, Jiaming Yang, Xiyao Xiao, Sahand Sabour, Xiaohan Zhang, Wenjing Hou, Yijia Zhang, Yuxiao Dong, Jie Tang, and Minlie Huang.
  Characterglm: Customizing chinese conversational ai characters with large language models, 2023.
- [63]

  Tianhao Shen, Sun Li, Quan Tu, and Deyi Xiong.
  Roleeval: A bilingual role evaluation benchmark for large language models, 2024.
- [64]

  Quan Tu, Shilong Fan, Zihang Tian, and Rui Yan.
  Charactereval: A chinese benchmark for role-playing conversational agent evaluation, 2024.
- [65]

  Xiaoyan Yu, Tongxu Luo, Yifan Wei, Fangyu Lei, Yiming Huang, Hao Peng, and Liehuang Zhu.
  Neeko: Leveraging dynamic lora for efficient multi-character role-playing agent, 2024.
- [66]

  Rui Xu, Xintao Wang, Jiangjie Chen, Siyu Yuan, Xinfeng Yuan, Jiaqing Liang, Zulong Chen, Xiaoqing Dong, and Yanghua Xiao.
  Character is destiny: Can large language models simulate persona-driven decisions in role-playing?, 2024.
- [67]

  Xinfeng Yuan, Siyu Yuan, Yuhan Cui, Tianhe Lin, Xintao Wang, Rui Xu, Jiangjie Chen, and Deqing Yang.
  Evaluating character understanding of large language models via character profiling from fictional works, 2024.
- [68]

  Yiting Ran, Xintao Wang, Rui Xu, Xinfeng Yuan, Jiaqing Liang, Yanghua Xiao, and Deqing Yang.
  Capturing minds, not just words: Enhancing role-playing language models with personality-indicative data, 2024.
- [69]

  Yanqi Dai, Huanran Hu, Lei Wang, Shengjie Jin, Xu Chen, and Zhiwu Lu.
  Mmrole: A comprehensive framework for developing and evaluating multimodal role-playing agents, 2024.
- [70]

  Yeyong Yu, Runsheng Yu, Haojie Wei, Zhanqiu Zhang, and Quan Qian.
  Beyond dialogue: A profile-dialogue alignment framework towards general role-playing language model, 2024.
- [71]

  Linzhuang Sun, Yao Dong, Nan Xu, Jingxuan Wei, Bihui Yu, and Yin Luo.
  Rational sensibility: Llm enhanced empathetic response generation guided by self-presentation theory.
  arXiv preprint arXiv:2312.08702, 2023.
- [72]

  Saketh Reddy Karra, Son The Nguyen, and Theja Tulabandhula.
  Estimating the personality of white-box language models, 2023.
- [73]

  Guangyuan Jiang, Manjie Xu, Song-Chun Zhu, Wenjuan Han, Chi Zhang, and Yixin Zhu.
  Evaluating and inducing personality in pre-trained language models, 2023.
- [74]

  Yifan Liu, Wei Wei, Jiayi Liu, Xianling Mao, Rui Fang, and Dangyang Chen.
  Improving personality consistency in conversation by persona extending.
  In Proceedings of the 31st ACM International Conference on Information & Knowledge Management, volume 39 of CIKM ’22, page 1350–1359. ACM, October 2022.
- [75]

  John J. Horton.
  Large language models as simulated economic agents: What can we learn from homo silicus?, 2023.
- [76]

  Qianqian Xie, Weiguang Han, Yanzhao Lai, Min Peng, and Jimin Huang.
  The wall street neophyte: A zero-shot analysis of chatgpt over multimodal stock movement prediction challenges, 2023.
- [77]

  Ameet Deshpande, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, and Karthik Narasimhan.
  Toxicity in chatgpt: Analyzing persona-assigned language models, 2023.
- [78]

  Xiaoyang Song, Akshat Gupta, Kiyan Mohebbizadeh, Shujie Hu, and Anant Singh.
  Have large language models developed a personality?: Applicability of self-assessment tests in measuring personality in llms, 2023.
- [79]

  Myra Cheng, Esin Durmus, and Dan Jurafsky.
  Marked personas: Using natural language prompts to measure stereotypes in language models, 2023.
- [80]

  Lei Wang, Jingsen Zhang, Hao Yang, Zhiyuan Chen, Jiakai Tang, Zeyu Zhang, Xu Chen, Yankai Lin, Ruihua Song, Wayne Xin Zhao, Jun Xu, Zhicheng Dou, Jun Wang, and Ji-Rong Wen.
  User behavior simulation with large language model based agents, 2024.
- [81]

  Greg Serapio-García, Mustafa Safdari, Clément Crepy, Luning Sun, Stephen Fitz, Peter Romero, Marwa Abdulhai, Aleksandra Faust, and Maja Matarić.
  Personality traits in large language models, 2023.
- [82]

  Jen tse Huang, Man Ho Lam, Eric John Li, Shujie Ren, Wenxuan Wang, Wenxiang Jiao, Zhaopeng Tu, and Michael R. Lyu.
  Emotionally numb or empathetic? evaluating how llms feel using emotionbench, 2024.
- [83]

  Quan Tu, Chuanqi Chen, Jinpeng Li, Yanran Li, Shuo Shang, Dongyan Zhao, Ran Wang, and Rui Yan.
  Characterchat: Learning towards conversational ai with personalized social support, 2023.
- [84]

  Mahyar Abbasian, Iman Azimi, Amir M. Rahmani, and Ramesh Jain.
  Conversational health agents: A personalized llm-powered agent framework, 2024.
- [85]

  Jiangjie Chen, Siyu Yuan, Rong Ye, Bodhisattwa Prasad Majumder, and Kyle Richardson.
  Put your money where your mouth is: Evaluating strategic planning and execution of llm agents in an auction arena, 2024.
- [86]

  Nian Li, Chen Gao, Mingyu Li, Yong Li, and Qingmin Liao.
  Econagent: Large language model-empowered agents for simulating macroeconomic activities, 2024.
- [87]

  Ryan Shea and Zhou Yu.
  Building persona consistent dialogue agents with offline reinforcement learning, 2023.
- [88]

  Kushal Chawla, Ian Wu, Yu Rong, Gale M. Lucas, and Jonathan Gratch.
  Be selfish, but wisely: Investigating the impact of agent personality in mixed-motive human-agent interactions, 2023.
- [89]

  Yoon-Kyung Lee, Sowon Hahn, Seo-Yeon Bae, Inju Lee, and Minjung Shin.
  Enhancing empathic reasoning of large language models based on psychotherapy models for ai-assisted social support.
  Korean Journal of Cognitive Science, 35(1):23–48, 03 2024.
- [90]

  Shashank Gupta, Vaishnavi Shrivastava, Ameet Deshpande, Ashwin Kalyan, Peter Clark, Ashish Sabharwal, and Tushar Khot.
  Bias runs deep: Implicit reasoning biases in persona-assigned llms, 2024.
- [91]

  Junyi Li, Ninareh Mehrabi, Charith Peris, Palash Goyal, Kai-Wei Chang, Aram Galstyan, Richard Zemel, and Rahul Gupta.
  On the steerability of large language models toward data-driven personas, 2024.
- [92]

  Chengxing Xie, Canyu Chen, Feiran Jia, Ziyu Ye, Kai Shu, Adel Bibi, Ziniu Hu, Philip Torr, Bernard Ghanem, and Guohao Li.
  Can large language model agents simulate human trust behaviors?, 2024.
- [93]

  Sanguk Lee, Tai-Quan Peng, Matthew H. Goldberg, Seth A. Rosenthal, John E. Kotcher, Edward W. Maibach, and Anthony Leiserowitz.
  Can large language models estimate public opinion about global warming? an empirical assessment of algorithmic fidelity and bias.
  PLOS Climate, 3(8):e0000429, August 2024.
- [94]

  Cheng Li, Mengzhou Chen, Jindong Wang, Sunayana Sitaram, and Xing Xie.
  Culturellm: Incorporating cultural differences into large language models, 2024.
- [95]

  Yixuan Weng, Shizhu He, Kang Liu, Shengping Liu, and Jun Zhao.
  Controllm: Crafting diverse personalities for language models, 2024.
- [96]

  Seungjong Sun, Eungu Lee, Dongyan Nan, Xiangying Zhao, Wonbyung Lee, Bernard J. Jansen, and Jang Hyun Kim.
  Random silicon sampling: Simulating human sub-population opinion using a large language model based on group-level demographic information, 2024.
- [97]

  James Bisbee, Joshua D. Clinton, Cassy Dorff, Brenton Kenkel, and Jennifer M. Larson.
  Synthetic replacements for human survey data? the perils of large language models.
  Political Analysis, 32(4):401–416, 2024.
- [98]

  Tao Ge, Xin Chan, Xiaoyang Wang, Dian Yu, Haitao Mi, and Dong Yu.
  Scaling synthetic data creation with 1,000,000,000 personas, 2024.
- [99]

  Yao Qu and Jue Wang.
  Performance and biases of large language models in public opinion simulation.
  Academy of Management Proceedings, 2024.
- [100]

  Huachuan Qiu and Zhenzhong Lan.
  Interactive agents: Simulating counselor-client psychological counseling via role-playing llm-to-llm interactions, 2024.
- [101]

  Zhilin Wang, Yu Ying Chiu, and Yu Cheung Chiu.
  Humanoid agents: Platform for simulating human-like generative agents, 2023.
- [102]

  Yoonna Jang, Jungwoo Lim, Yuna Hur, Dongsuk Oh, Suhyune Son, Yeonsoo Lee, Donghoon Shin, Seungryong Kim, and Heuiseok Lim.
  Call for customized conversation: Customized conversation grounding persona and knowledge, 2022.
- [103]

  Juntao Li, Chang Liu, Chongyang Tao, Zhangming Chan, Dongyan Zhao, Min Zhang, and Rui Yan.
  Dialogue history matters! personalized response selectionin multi-turn retrieval-based chatbots, 2021.
- [104]

  Pegah Jandaghi, XiangHai Sheng, Xinyi Bai, Jay Pujara, and Hakim Sidahmed.
  Faithful persona-based conversational dataset generation with large language models, 2023.
- [105]

  Weiqi Wu, Hongqiu Wu, Lai Jiang, Xingyuan Liu, Jiale Hong, Hai Zhao, and Min Zhang.
  From role-play to drama-interaction: An llm solution, 2024.
- [106]

  Jiannan Xiang, Tianhua Tao, Yi Gu, Tianmin Shu, Zirui Wang, Zichao Yang, and Zhiting Hu.
  Language models meet world models: Embodied experiences enhance language models, 2023.
- [107]

  Jiangyong Huang, Silong Yong, Xiaojian Ma, Xiongkun Linghu, Puhao Li, Yan Wang, Qing Li, Song-Chun Zhu, Baoxiong Jia, and Siyuan Huang.
  An embodied generalist agent in 3d world, 2024.
- [108]

  Jiaju Lin, Haoran Zhao, Aochi Zhang, Yiting Wu, Huqiuyue Ping, and Qin Chen.
  Agentsims: An open-source sandbox for large language model evaluation, 2023.
- [109]

  Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and Anima Anandkumar.
  Voyager: An open-ended embodied agent with large language models, 2023.
- [110]

  Xintao Wang, Jiangjie Chen, Nianqi Li, Lida Chen, Xinfeng Yuan, Wei Shi, Xuyang Ge, Rui Xu, and Yanghua Xiao.
  Surveyagent: A conversational system for personalized and efficient research survey, 2024.
- [111]

  Hongzhan Chen, Hehong Chen, Ming Yan, Wenshen Xu, Xing Gao, Weizhou Shen, Xiaojun Quan, Chenliang Li, Ji Zhang, Fei Huang, and Jingren Zhou.
  Socialbench: Sociality evaluation of role-playing conversational agents, 2024.
- [112]

  Zhipeng Chen, Kun Zhou, Beichen Zhang, Zheng Gong, Wayne Xin Zhao, and Ji-Rong Wen.
  Chatcot: Tool-augmented chain-of-thought reasoning on chat-based large language models, 2023.
- [113]

  Alireza Salemi, Sheshera Mysore, Michael Bendersky, and Hamed Zamani.
  Lamp: When large language models meet personalization, 2024.
- [114]

  Ceyao Zhang, Kaijie Yang, Siyi Hu, Zihao Wang, Guanghe Li, Yihang Sun, Cheng Zhang, Zhaowei Zhang, Anji Liu, Song-Chun Zhu, Xiaojun Chang, Junge Zhang, Feng Yin, Yitao Liang, and Yaodong Yang.
  Proagent: Building proactive cooperative agents with large language models, 2024.
- [115]

  Lei Wang, Wanyu Xu, Yihuai Lan, Zhiqiang Hu, Yunshi Lan, Roy Ka-Wei Lee, and Ee-Peng Lim.
  Plan-and-solve prompting: Improving zero-shot chain-of-thought reasoning by large language models.
  arXiv preprint arXiv:2305.04091, 2023.
- [116]

  Zhenyu Wu, Ziwei Wang, Xiuwei Xu, Jiwen Lu, and Haibin Yan.
  Embodied task planning with large language models.
  arXiv preprint arXiv:2307.01848, 2023.
- [117]

  Chan Hee Song, Jiaman Wu, Clayton Washington, Brian M. Sadler, Wei-Lun Chao, and Yu Su.
  Llm-planner: Few-shot grounded planning for embodied agents with large language models, 2023.
- [118]

  Itsugun Cho, Dongyang Wang, Ryota Takahashi, and Hiroaki Saito.
  A personalized dialogue generator with implicit user persona detection, 2022.
- [119]

  Jonathan Light, Min Cai, Sheng Shen, and Ziniu Hu.
  Avalonbench: Evaluating llms playing the game of avalon, 2023.
- [120]

  Keyu Pan and Yawen Zeng.
  Do llms possess a personality? making the mbti test an amazing evaluation for large language models, 2023.
- [121]

  Kranti Chalamalasetti, Jana Götze, Sherzod Hakimov, Brielen Madureira, Philipp Sadler, and David Schlangen.
  Clembench: Using game play to evaluate chat-optimized language models as conversational agents, 2023.
- [122]

  Haoqi Yuan, Chi Zhang, Hongcheng Wang, Feiyang Xie, Penglin Cai, Hao Dong, and Zongqing Lu.
  Skill reinforcement learning and planning for open-world long-horizon tasks, 2023.
- [123]

  Libo Sun, Siyuan Wang, Xuanjing Huang, and Zhongyu Wei.
  Identity-driven hierarchical role-playing agents.
  arXiv preprint arXiv:2407.19412, 2024.
- [124]

  Yuntao Bai, Andy Jones, Kamal Ndousse, Amanda Askell, Anna Chen, Nova DasSarma, Dawn Drain, Stanislav Fort, Deep Ganguli, Tom Henighan, Nicholas Joseph, Saurav Kadavath, Jackson Kernion, Tom Conerly, Sheer El-Showk, Nelson Elhage, Zac Hatfield-Dodds, Danny Hernandez, Tristan Hume, Scott Johnston, Shauna Kravec, Liane Lovitt, Neel Nanda, Catherine Olsson, Dario Amodei, Tom Brown, Jack Clark, Sam McCandlish, Chris Olah, Ben Mann, and Jared Kaplan.
  Training a helpful and harmless assistant with reinforcement learning from human feedback, 2022.
- [125]

  Joel Jang, Seungone Kim, Bill Yuchen Lin, Yizhong Wang, Jack Hessel, Luke Zettlemoyer, Hannaneh Hajishirzi, Yejin Choi, and Prithviraj Ammanabrolu.
  Personalized soups: Personalized large language model alignment via post-hoc parameter merging, 2023.
- [126]

  Xingxuan Li, Yutong Li, Lin Qiu, Shafiq Joty, and Lidong Bing.
  Evaluating psychological safety of large language models, 2024.
- [127]

  Sanguk Lee, Kai-Qi Yang, Tai-Quan Peng, Ruth Heo, and Hui Liu.
  Exploring social desirability response bias in large language models: Evidence from gpt-4 simulations, 2024.
- [128]

  Won Ik Cho, Yoon Kyung Lee, Seoyeon Bae, Jihwan Kim, Sangah Park, Moosung Kim, Sowon Hahn, and Nam Soo Kim.
  When crowd meets persona: Creating a large-scale open-domain persona dialogue corpus, 2023.
- [129]

  Xinyi Mou, Zejun Li, Hanjia Lyu, Jiebo Luo, and Zhongyu Wei.
  Unifying local and global knowledge: Empowering large language models as political experts with knowledge graphs.
  In Proceedings of the ACM on Web Conference 2024, pages 2603–2614, 2024.
- [130]

  Yuanchun Li, Hao Wen, Weijun Wang, Xiangyu Li, Yizhen Yuan, Guohong Liu, Jiacheng Liu, Wenxing Xu, Xiang Wang, Yi Sun, Rui Kong, Yile Wang, Hanfei Geng, Jian Luan, Xuefeng Jin, Zilong Ye, Guanjing Xiong, Fan Zhang, Xiang Li, Mengwei Xu, Zhijun Li, Peng Li, Yang Liu, Ya-Qin Zhang, and Yunxin Liu.
  Personal llm agents: Insights and survey about the capability, efficiency and security, 2024.
- [131]

  Jinheon Baek, Nirupama Chandrasekaran, Silviu Cucerzan, Allen herring, and Sujay Kumar Jauhar.
  Knowledge-augmented large language models for personalized contextual query suggestion, 2024.
- [132]

  Hezekiah J. Branch, Jonathan Rodriguez Cefalu, Jeremy McHugh, Leyla Hujer, Aditya Bahl, Daniel del Castillo Iglesias, Ron Heichman, and Ramesh Darwishi.
  Evaluating the susceptibility of pre-trained language models via handcrafted adversarial examples, 2022.
- [133]

  Jaewoo Ahn, Yeda Song, Sangdoo Yun, and Gunhee Kim.
  MPCHAT: Towards multimodal persona-grounded conversation.
  In Anna Rogers, Jordan Boyd-Graber, and Naoaki Okazaki, editors, Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 3354–3377, Toronto, Canada, July 2023. Association for Computational Linguistics.
- [134]

  Jiwei Li, Michel Galley, Chris Brockett, Georgios P. Spithourakis, Jianfeng Gao, and Bill Dolan.
  A persona-based neural conversation model, 2016.
- [135]

  Zejun Wang, Jia Li, Ge Li, and Zhi Jin.
  Chatcoder: Chat-based refine requirement improves llms’ code generation, 2023.
- [136]

  Nicholas Farn and Richard Shin.
  Tooltalk: Evaluating tool-usage in a conversational setting, 2023.
- [137]

  Xiao Liu, Hao Yu, Hanchen Zhang, Yifan Xu, Xuanyu Lei, Hanyu Lai, Yu Gu, Hangliang Ding, Kaiwen Men, Kejuan Yang, Shudan Zhang, Xiang Deng, Aohan Zeng, Zhengxiao Du, Chenhui Zhang, Sheng Shen, Tianjun Zhang, Yu Su, Huan Sun, Minlie Huang, Yuxiao Dong, and Jie Tang.
  Agentbench: Evaluating llms as agents, 2023.
- [138]

  Xuhui Zhou, Hao Zhu, Leena Mathur, Ruohong Zhang, Haofei Yu, Zhengyang Qi, Louis-Philippe Morency, Yonatan Bisk, Daniel Fried, Graham Neubig, et al.
  Sotopia: Interactive evaluation for social intelligence in language agents.
  arXiv preprint arXiv:2310.11667, 2023.
- [139]

  Mohammadmehdi Ataei, Hyunmin Cheong, Daniele Grandi, Ye Wang, Nigel Morris, and Alexander Tessier.
  Elicitron: An llm agent-based simulation framework for design requirements elicitation.
  arXiv preprint arXiv:2404.16045, 2024.
- [140]

  Diyi Yang, Caleb Ziems, William Held, Omar Shaikh, Michael S Bernstein, and John Mitchell.
  Social skill training with large language models.
  arXiv preprint arXiv:2404.04204, 2024.
- [141]

  Zihan Yan, Yaohong Xiang, and Yun Huang.
  Social life simulation for non-cognitive skills learning.
  arXiv preprint arXiv:2405.00273, 2024.
- [142]

  Qiang Zhang, Jason Naradowsky, and Yusuke Miyao.
  Self-emotion blended dialogue generation in social simulation agents.
  arXiv preprint arXiv:2408.01633, 2024.
- [143]

  Yao Fu, Hao Peng, Tushar Khot, and Mirella Lapata.
  Improving language model negotiation with self-play and in-context learning from ai feedback.
  arXiv preprint arXiv:2305.10142, 2023.
- [144]

  Kai Xiong, Xiao Ding, Yixin Cao, Ting Liu, and Bing Qin.
  Examining inter-consistency of large language models collaboration: An in-depth analysis via debate.
  arXiv preprint arXiv:2305.11595, 2023.
- [145]

  Tian Liang, Zhiwei He, Wenxiang Jiao, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Zhaopeng Tu, and Shuming Shi.
  Encouraging divergent thinking in large language models through multi-agent debate.
  arXiv preprint arXiv:2305.19118, 2023.
- [146]

  Chi Ming Chan, Wenhao Chen, Yi Su, et al.
  Chateval: Towards better llm-based evaluators through multi-agent debate.
  arXiv preprint arXiv:2308.07201, 2023.
- [147]

  Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Shaokun Zhang, Erkang Zhu, Beibin Li, Li Jiang, Xiaoyun Zhang, and Chi Wang.
  Autogen: Enabling next-gen llm applications via multi-agent conversation framework.
  arXiv preprint arXiv:2308.08155, 2023.
- [148]

  Tian Xia, Zhiwei He, Tong Ren, Yibo Miao, Zhuosheng Zhang, Yang Yang, and Rui Wang.
  Measuring bargaining abilities of llms: A benchmark and a buyer-enhancement method.
  arXiv preprint arXiv:2402.15813, 2024.
- [149]

  Jie Ma, Zhitao Gao, Qi Chai, Wangchun Sun, Pinghui Wang, Hongbin Pei, Jing Tao, Lingyun Song, Jun Liu, Chen Zhang, et al.
  Debate on graph: a flexible and reliable reasoning framework for large language models.
  arXiv preprint arXiv:2409.03155, 2024.
- [150]

  Y. Xu, S. Wang, P. Li, et al.
  Exploring large language models for communication games: An empirical study on werewolf, 2023.
- [151]

  Shenzhi Wang, Chang Liu, Zilong Zheng, Siyuan Qi, Shuo Chen, Qisen Yang, Andrew Zhao, Chaofei Wang, Shiji Song, and Gao Huang.
  Avalon’s game of thoughts: Battle against deception through recursive contemplation.
  arXiv preprint arXiv:2310.01320, 2023.
- [152]

  Jintian Zhang, Xin Xu, and Shumin Deng.
  Exploring collaboration mechanisms for llm agents: A social psychology view.
  arXiv preprint arXiv:2310.02124, 2023.
- [153]

  Jonathan Light, Min Cai, Sheng Shen, and Ziniu Hu.
  From text to tactic: Evaluating llms playing the game of avalon.
  arXiv preprint arXiv:2310.05036, 2023.
- [154]

  Yihuai Lan, Zhiqiang Hu, Lei Wang, Yang Wang, Deheng Ye, Peilin Zhao, Ee-Peng Lim, Hui Xiong, and Hao Wang.
  Llm-based agent society investigation: Collaboration and confrontation in avalon gameplay.
  arXiv preprint arXiv:2310.14985, 2023.
- [155]

  Zelai Xu, Chao Yu, Fei Fang, Yu Wang, and Yi Wu.
  Language agents with reinforcement learning for strategic play in the werewolf game.
  arXiv preprint arXiv:2310.18940, 2023.
- [156]

  Dekun Wu, Haochen Shi, Zhiyuan Sun, and Bang Liu.
  Deciphering digital detectives: Understanding llm behaviors and capabilities in multi-agent mystery games.
  arXiv preprint arXiv:2312.00746, 2023.
- [157]

  Zijing Shi, Meng Fang, Shunfeng Zheng, Shilong Deng, Ling Chen, and Yali Du.
  Cooperation on the fly: Exploring language agents for ad hoc teamwork in the avalon game.
  arXiv preprint arXiv:2312.17515, 2023.
- [158]

  S. Wu, L. Zhu, T. Yang, et al.
  Enhance reasoning for large language models in the game werewolf, 2024.
- [159]

  Silin Du and Xiaowei Zhang.
  Helmsman of the masses? evaluate the opinion leadership of large language models in the werewolf game.
  arXiv preprint arXiv:2404.01602, 2024.
- [160]

  Qinglin Zhu, Runcong Zhao, Jinhua Du, Lin Gui, and Yulan He.
  Player\*: Enhancing llm-based multi-agent communication and interaction in murder mystery games.
  arXiv preprint arXiv:2404.17662, 2024.
- [161]

  Xizhou Zhu, Yuntao Chen, Hao Tian, Chenxin Tao, Weijie Su, Chenyu Yang, Gao Huang, Bin Li, Lewei Lu, Xiaogang Wang, et al.
  Ghost in the minecraft: Generally capable agents for open-world environments via large language models with text-based knowledge and memory.
  arXiv preprint arXiv:2305.17144, 2023.
- [162]

  Karthik Sreedhar and Lydia Chilton.
  Simulating human strategic behavior: Comparing single and multi-agent llms.
  arXiv preprint arXiv:2402.08189, 2024.
- [163]

  Yizhou Chi, Lingjun Mao, and Zineng Tang.
  Amongagents: Evaluating large language models in the interactive text-based social deduction game.
  arXiv preprint arXiv:2407.16521, 2024.
- [164]

  Jiaqi Chen, Yuxian Jiang, Jiachen Lu, and Li Zhang.
  S-agents: self-organizing agents in open-ended environment.
  arXiv preprint arXiv:2402.04578, 2024.
- [165]

  Md Mahadi Hassan, Alex Knipper, and Shubhra Kanti Karmaker Santu.
  Chatgpt as your personal data scientist.
  arXiv preprint arXiv:2305.13657, 2023.
- [166]

  Cheng-Kuang Wu, Wei-Lin Chen, and Hsin-Hsi Chen.
  Large language models perform diagnostic reasoning.
  arXiv preprint arXiv:2307.08922, 2023.
- [167]

  Zhiling Zheng, Oufan Zhang, Ha L Nguyen, Nakul Rampal, Ali H Alawadhi, Zichao Rong, Teresa Head-Gordon, Christian Borgs, Jennifer T Chayes, and Omar M Yaghi.
  Chatgpt research group for optimizing the crystallinity of mofs and cofs.
  ACS Central Science, 9(11):2161–2170, 2023.
- [168]

  Xiangru Tang, Anni Zou, Zhuosheng Zhang, Yilun Zhao, Xingyao Zhang, Arman Cohan, and Mark Gerstein.
  Medagents: Large language models as collaborators for zero-shot medical reasoning.
  arXiv preprint arXiv:2311.10537, 2023.
- [169]

  Zhaolin Gao, Kianté Brantley, and Thorsten Joachims.
  Reviewer2: Optimizing review generation through prompt generation.
  arXiv preprint arXiv:2402.10886, 2024.
- [170]

  Mingyu Jin, Beichen Wang, Zhaoqian Xue, Suiyuan Zhu, Wenyue Hua, Hua Tang, Kai Mei, Mengnan Du, and Yongfeng Zhang.
  What if llms have different world views: Simulating alien civilizations with llm-based agents.
  arXiv preprint arXiv:2402.13184, 2024.
- [171]

  Jinheon Baek, Sujay Kumar Jauhar, Silviu Cucerzan, and Sung Ju Hwang.
  Researchagent: Iterative research idea generation over scientific literature with large language models.
  arXiv preprint arXiv:2404.07738, 2024.
- [172]

  Hanna Yukhymenko, Robin Staab, Mark Vero, and Martin Vechev.
  A synthetic dataset for personal attribute inference.
  arXiv preprint arXiv:2406.07217, 2024.
- [173]

  Zhifei Xie, Daniel Tang, Dingwei Tan, Jacques Klein, Tegawend F Bissyand, and Saad Ezzini.
  Dreamfactory: Pioneering multi-scene long video generation with a multi-agent framework.
  arXiv preprint arXiv:2408.11788, 2024.
- [174]

  Jun-Peng Zhu, Peng Cai, Kai Xu, Li Li, Yishen Sun, Shuai Zhou, Haihuang Su, Liu Tang, and Qi Liu.
  Autotqa: Towards autonomous tabular question answering through multi-agent large language models.
  Proc. VLDB Endow., 17(12):3920–3933, November 2024.
- [175]

  Varun Nair, Elliot Schumacher, Geoffrey Tso, and Anitha Kannan.
  Dera: enhancing large language model completions with dialog-enabled resolving agents.
  arXiv preprint arXiv:2303.17071, 2023.
- [176]

  Yihong Dong, Xue Jiang, Zhi Jin, and Ge Li.
  Self-collaboration code generation via chatgpt.
  arXiv preprint arXiv:2304.07590, 2023.
- [177]

  Chen Qian, Wei Liu, Hongzhang Liu, Nuo Chen, Yufan Dang, Jiahao Li, Cheng Yang, Weize Chen, Yusheng Su, Xin Cong, et al.
  Chatdev: Communicative agents for software development.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 15174–15186, 2024.
- [178]

  Chen Qian, Yufan Dang, Jiahao Li, Wei Liu, Weize Chen, Cheng Yang, Zhiyuan Liu, and Maosong Sun.
  Experiential co-learning of software-developing agents.
  arXiv preprint arXiv:2312.17025, 2023.
- [179]

  Yuntong Zhang, Haifeng Ruan, Zhiyu Fan, and Abhik Roychoudhury.
  Autocoderover: Autonomous program improvement.
  In Proceedings of the 33rd ACM SIGSOFT International Symposium on Software Testing and Analysis, pages 1592–1604, 2024.
- [180]

  Chen Qian, Jiahao Li, Yufan Dang, Wei Liu, YiFei Wang, Zihao Xie, Weize Chen, Cheng Yang, Yingli Zhang, Zhiyuan Liu, et al.
  Iterative experience refinement of software-developing agents.
  arXiv preprint arXiv:2405.04219, 2024.
- [181]

  Sil Hamilton.
  Blind judgement: Agent-based supreme court modelling with gpt.
  arXiv preprint arXiv:2301.05327, 2023.
- [182]

  Yang Li, Yangyang Yu, Haohang Li, Zhi Chen, and Khaldoun Khashanah.
  Tradinggpt: Multi-agent system with layered memory and distinct characters for enhanced financial trading performance.
  arXiv preprint arXiv:2309.03736, 2023.
- [183]

  Martin Weiss, Nasim Rahaman, Manuel Wuthrich, Yoshua Bengio, Li Erran Li, Bernhard Sch”̈olkopf, and Christopher Pal.
  Rethinking the buyer’s inspection paradox in information markets with language agents.
  OpenReview, 2024.
- [184]

  Murong Yue, Wijdane Mifdal, Yixuan Zhang, Jennifer Suh, and Ziyu Yao.
  Mathvc: An llm-simulated multi-character virtual classroom for mathematics education.
  arXiv preprint arXiv:2404.06711, 2024.
- [185]

  Zachary R Baker and Zarif L Azher.
  Simulating the us senate: An llm-driven agent approach to modeling legislative behavior and bipartisanship.
  arXiv preprint arXiv:2406.18702, 2024.
- [186]

  Jingyun Sun, Chengxiao Dai, Zhongze Luo, Yangbo Chang, and Yang Li.
  Lawluo: A chinese law firm co-run by llm agents.
  arXiv preprint arXiv:2407.16252, 2024.
- [187]

  Jifan Yu, Zheyuan Zhang, Daniel Zhang-li, Shangqing Tu, Zhanxin Hao, Rui Miao Li, Haoxuan Li, Yuanchun Wang, Hanming Li, Linlu Gong, et al.
  From mooc to maic: Reshaping online teaching and learning through llm-driven agents.
  arXiv preprint arXiv:2409.03512, 2024.
- [188]

  Guohao Li, Hasan Hammoud, Hani Itani, Dmitrii Khizbullin, and Bernard Ghanem.
  Camel: Communicative agents for”” mind”” exploration of large language model society.
  Advances in Neural Information Processing Systems, 36:51991–52008, 2023.
- [189]

  Bill Yuchen Lin, Yicheng Fu, Karina Yang, Faeze Brahman, Shiyu Huang, Chandra Bhagavatula, Prithviraj Ammanabrolu, Yejin Choi, and Xiang Ren.
  Swiftsage: A generative agent with fast and slow thinking for complex interactive tasks.
  Advances in Neural Information Processing Systems, 36, 2024.
- [190]

  Yashar Talebirad and Amirhossein Nadiri.
  Multi-agent collaboration: Harnessing the power of intelligent llm agents.
  arXiv preprint arXiv:2306.03314, 2023.
- [191]

  Hongxin Zhang, Weihua Du, Jiaming Shan, Qinhong Zhou, Yilun Du, Joshua B Tenenbaum, Tianmin Shu, and Chuang Gan.
  Building cooperative embodied agents modularly with large language models.
  arXiv preprint arXiv:2307.02485, 2023.
- [192]

  Zhao Mandi, Shreeya Jain, and Shuran Song.
  Roco: Dialectic multi-robot collaboration with large language models.
  In 2024 IEEE International Conference on Robotics and Automation (ICRA), pages 286–299. IEEE, 2024.
- [193]

  W. Chen, Y. Su, J. Zuo, et al.
  Agentverse: Facilitating multi-agent collaboration and exploring emergent behaviors, 2023.
- [194]

  Yongchao Chen, Jacob Arkin, Yang Zhang, Nicholas Roy, and Chuchu Fan.
  Scalable multi-robot collaboration with large language models: Centralized or decentralized systems?
  In 2024 IEEE International Conference on Robotics and Automation (ICRA), pages 4311–4317. IEEE, 2024.
- [195]

  Guangyao Chen, Siwei Dong, Yu Shu, Ge Zhang, Jaward Sesay, B”̈orje F Karlsson, Jie Fu, and Yemin Shi.
  Autoagents: A framework for automatic agent generation.
  arXiv preprint arXiv:2309.17288, 2023.
- [196]

  Tianbao Xie, Fan Zhou, Zhoujun Cheng, Peng Shi, Luoxuan Weng, Yitao Liu, Toh Jing Hua, Junning Zhao, Qian Liu, Che Liu, et al.
  Openagents: An open platform for language agents in the wild.
  arXiv preprint arXiv:2310.10634, 2023.
- [197]

  Weihao Tan, Wentao Zhang, Shanqi Liu, Longtao Zheng, Xinrun Wang, and Bo An.
  True knowledge comes from practice: Aligning llms with embodied environments via reinforcement learning.
  arXiv preprint arXiv:2401.14151, 2024.
- [198]

  Yang Zhang, Shixin Yang, Chenjia Bai, Fei Wu, Xiu Li, Xuelong Li, and Zhen Wang.
  Towards efficient llm grounding for embodied multi-agent collaboration.
  arXiv preprint arXiv:2405.14314, 2024.
- [199]

  J. Lin, H. Zhao, A. Zhang, et al.
  Agentsims: An open-source sandbox for large language model evaluation, 2023.
- [200]

  Yuan Li, Yixuan Zhang, and Lichao Sun.
  Metaagents: Simulating interactions of human behaviors for llm-based task-oriented coordination via collaborative generative agents.
  arXiv preprint arXiv:2310.06500, 2023.
- [201]

  Jingcong Liang, Rong Ye, Meng Han, Ruofei Lai, Xinyu Zhang, Xuanjing Huang, and Zhongyu Wei.
  Debatrix: Multi-dimensinal debate judge with iterative chronological analysis based on llm.
  arXiv preprint arXiv:2403.08010, 2024.
- [202]

  Wei Liu, Chenxi Wang, Yifei Wang, Zihao Xie, Rennai Qiu, Yufan Dang, Zhuoyun Du, Weize Chen, Cheng Yang, and Chen Qian.
  Autonomous agents for collaborative task under information asymmetry.
  arXiv preprint arXiv:2406.14928, 2024.
- [203]

  Weize Chen, Jiarui Yuan, Chen Qian, Cheng Yang, Zhiyuan Liu, and Maosong Sun.
  Optima: Optimizing effectiveness and efficiency for llm-based multi-agent system.
  arXiv preprint arXiv:2410.08115, 2024.
- [204]

  Chenxu Wang, Bin Dai, Huaping Liu, and Baoyuan Wang.
  Towards objectively benchmarking social intelligence for language agents at action level.
  arXiv preprint arXiv:2404.05337, 2024.
- [205]

  Xinyi Mou, Jingcong Liang, Jiayu Lin, Xinnong Zhang, Xiawei Liu, Shiyue Yang, Rong Ye, Lei Chen, Haoyu Kuang, Xuanjing Huang, et al.
  Agentsense: Benchmarking social intelligence of language agents through interactive scenarios.
  arXiv preprint arXiv:2410.19346, 2024.
- [206]

  Ruiyi Wang, Haofei Yu, Wenxin Zhang, Zhengyang Qi, Maarten Sap, Graham Neubig, Yonatan Bisk, and Hao Zhu.
  Sotopia-pi: Interactive learning of socially intelligent language agents.
  arXiv preprint arXiv:2403.08715, 2024.
- [207]

  Xuhui Zhou, Zhe Su, Tiwalayo Eisape, Hyunwoo Kim, and Maarten Sap.
  Is this the real life? is this just fantasy? the misleading success of simulating social interactions with llms.
  arXiv preprint arXiv:2403.05020, 2024.
- [208]

  Ran Gong, Qiuyuan Huang, Xiaojian Ma, Hoi Vo, Zane Durante, Yusuke Noda, Zilong Zheng, Song-Chun Zhu, Demetri Terzopoulos, Li Fei-Fei, et al.
  Mindagent: Emergent gaming interaction.
  arXiv preprint arXiv:2309.09971, 2023.
- [209]

  Zhijie Bao, Qingyun Liu, Ying Guo, Zhengqiang Ye, Jun Shen, Shirong Xie, Jiajie Peng, Xuanjing Huang, and Zhongyu Wei.
  Piors: Personalized intelligent outpatient reception based on large language model with multi-agents medical scenario simulation.
  arXiv preprint arXiv:2411.13902, 2024.
- [210]

  Xiawei Liu, Shiyue Yang, Xinnong Zhang, Haoyu Kuang, Libo Sun, Yihang Yang, Siming Chen, Xuanjing Huang, and Zhongyu Wei.
  Ai-press: A multi-agent news generating and feedback simulation system powered by large language models.
  arXiv preprint arXiv:2410.07561, 2024.
- [211]

  Chengxing Xie, Canyu Chen, Feiran Jia, Ziyu Ye, Kai Shu, Adel Bibi, Ziniu Hu, Philip Torr, Bernard Ghanem, and Guohao Li.
  Can large language model agents simulate human trust behaviors?
  arXiv preprint arXiv:2402.04559, 2024.
- [212]

  Agnieszka Mensfelt, Kostas Stathis, and Vince Trencsenyi.
  Logic-enhanced language model agents for trustworthy social simulations.
  arXiv preprint arXiv:2408.16081, 2024.
- [213]

  Shangmin Guo, Haoran Bu, Haochuan Wang, Yi Ren, Dianbo Sui, Yuming Shang, and Siting Lu.
  Economics arena for large language models.
  arXiv preprint arXiv:2401.01735, 2024.
- [214]

  Nicoló Fontana, Francesco Pierri, and Luca Maria Aiello.
  Nicer than humans: How do large language models behave in the prisoner’s dilemma?
  arXiv preprint arXiv:2406.13605, 2024.
- [215]

  X. Han, Z. Wu, and C. Xiao.
  ”guinea pig trials” utilizing gpt: A novel smart agent-based modeling approach for studying firm competition and collusion, 2023.
- [216]

  Sean Noh and Ho-Chun Herbert Chang.
  Llms with personalities in multi-issue negotiation games.
  arXiv preprint arXiv:2405.05248, 2024.
- [217]

  Mikhail Mozikov, Nikita Severin, Valeria Bodishtianu, Maria Glushanina, Mikhail Baklashkin, Andrey V Savchenko, and Ilya Makarov.
  The good, the bad, and the hulk-like gpt: Analyzing emotional decisions of large language models in cooperation and bargaining games.
  arXiv preprint arXiv:2406.03299, 2024.
- [218]

  Zengqing Wu, Run Peng, Shuyuan Zheng, Qianying Liu, Xu Han, Brian Kwon, Makoto Onizuka, Shaojie Tang, and Chuan Xiao.
  Shall we team up: Exploring spontaneous cooperation of competing llm agents.
  In Findings of the Association for Computational Linguistics: EMNLP 2024, pages 5163–5186, 2024.
- [219]

  Qinlin Zhao, Jindong Wang, Yixuan Zhang, Yiqiao Jin, Kaijie Zhu, Hao Chen, and Xing Xie.
  Competeai: Understanding the competition dynamics of large language model-based agents.
  In Forty-first International Conference on Machine Learning, 2024.
- [220]

  John J Horton.
  Large language models as simulated economic agents: What can we learn from homo silicus?
  Technical report, National Bureau of Economic Research, 2023.
- [221]

  Jiarui Ji, Yang Li, Hongtao Liu, Zhicheng Du, Zhewei Wei, Qi Qi, Weiran Shen, and Yankai Lin.
  Srap-agent: Simulating and optimizing scarce resource allocation policy with llm-based agent.
  In Findings of the Association for Computational Linguistics: EMNLP 2024, pages 267–293, 2024.
- [222]

  Navid Ghaffarzadegan, Aritra Majumdar, Ross Williams, and Niyousha Hosseinichimeh.
  Generative agent-based modeling: Unveiling social system dynamics through coupling mechanistic models with generative artificial intelligence.
  arXiv preprint arXiv:2309.11456, 2023.
- [223]

  I de Zarzà, J de Curtò, Gemma Roig, Pietro Manzoni, and Carlos T Calafate.
  Emergent cooperation and strategy adaptation in multi-agent systems: An extended coevolutionary theory with llms.
  Electronics, 12(12):2722, 2023.
- [224]

  R. Williams, N. Hosseinichimeh, A. Majumdar, et al.
  Epidemic modeling with generative agents.
  arXiv preprint arXiv:2307.04986, 2023.
- [225]

  Ayush Chopra, Shashank Kumar, Nurullah Giray-Kuru, Ramesh Raskar, and Arnau Quera-Bofarull.
  On the limits of agency in agent-based models.
  arXiv preprint arXiv:2409.10568, 2024.
- [226]

  Sanguk Lee, Tai-Quan Peng, Matthew H Goldberg, Seth A Rosenthal, John E Kotcher, Edward W Maibach, and Anthony Leiserowitz.
  Can large language models capture public opinion about global warming? an empirical assessment of algorithmic fidelity and bias.
  arXiv preprint arXiv:2311.00217, 2023.
- [227]

  Xinnong Zhang, Jiayu Lin, Libo Sun, Weihong Qi, Yihang Yang, Yue Chen, Hanjia Lyu, Xinyi Mou, Siming Chen, Jiebo Luo, et al.
  Electionsim: Massive population election simulation powered by large language model driven agents.
  arXiv preprint arXiv:2410.20746, 2024.
- [228]

  B. Xiao, Z. Yin, and Z. Shan.
  Simulating public administration crisis: A novel generative agent-based simulation system to lower technology barriers in social science research, 2023.
- [229]

  Joon Sung Park, Carolyn Q Zou, Aaron Shaw, Benjamin Mako Hill, Carrie Cai, Meredith Ringel Morris, Robb Willer, Percy Liang, and Michael S Bernstein.
  Generative agent simulations of 1,000 people.
  arXiv preprint arXiv:2411.10109, 2024.
- [230]

  Gati V Aher, Rosa I Arriaga, and Adam Tauman Kalai.
  Using large language models to simulate multiple humans and replicate human subject studies.
  In International Conference on Machine Learning, pages 337–371. PMLR, 2023.
- [231]

  Zhao Kaiya, Michelangelo Naim, Jovana Kondic, Manuel Cortes, Jiaxin Ge, Shuying Luo, Guangyu Robert Yang, and Andrew Ahn.
  Lyfe agents: Generative agents for low-cost real-time social interactions.
  arXiv preprint arXiv:2310.02172, 2023.
- [232]

  S. Ren, Z. Cui, R. Song, et al.
  Emergence of social norms in large language model-based agent societies, 2024.
- [233]

  Jeongeon Park, Bryan Min, Xiaojuan Ma, and Juho Kim.
  Choicemates: Supporting unfamiliar online decision-making with multi-agent conversational interactions.
  arXiv preprint arXiv:2310.01331, 2023.
- [234]

  Daniel Jarrett, Miruna Pislar, Michiel A Bakker, Michael Henry Tessler, Raphael Koster, Jan Balaguer, Romuald Elie, Christopher Summerfield, and Andrea Tacchetti.
  Language agents as digital representatives in collective decision-making.
  In NeurIPS 2023 Foundation Models for Decision Making Workshop, 2023.
- [235]

  Yiqiao Jin, Qinlin Zhao, Yiyang Wang, Hao Chen, Kaijie Zhu, Yijia Xiao, and Jindong Wang.
  Agentreview: Exploring peer review dynamics with llm agents.
  arXiv preprint arXiv:2406.12708, 2024.
- [236]

  Yangbin Yu, Qin Zhang, Junyou Li, Qiang Fu, and Deheng Ye.
  Affordable generative agents.
  arXiv preprint arXiv:2402.02053, 2024.
- [237]

  Xianhao Yu, Jiaqi Fu, Renjia Deng, and Wenjuan Han.
  Mineland: Simulating large-scale multi-agent interactions with limited multimodal senses and physical needs.
  arXiv preprint arXiv:2403.19267, 2024.
- [238]

  Chen Zhu, Yihang Cheng, Jingshuai Zhang, Yusheng Qiu, Sitao Xia, and Hengshu Zhu.
  Generative organizational behavior simulation using large language model based autonomous agents: A holacracy perspective.
  arXiv preprint arXiv:2408.11826, 2024.
- [239]

  R. Suzuki and T. Arita.
  An evolutionary model of personality traits related to cooperative behavior using a large language model.
  Scientific Reports, 14(1):5989, 2024.
- [240]

  Yun-Shiuan Chuang, Zach Studdiford, Krirk Nirunwiroj, Agam Goyal, Vincent V Frigo, Sijia Yang, Dhavan Shah, Junjie Hu, and Timothy T Rogers.
  Beyond demographics: Aligning role-playing llm-based agents using human belief networks, 2024.
- [241]

  Chao Li, Xing Su, Haoying Han, Cong Xue, Chunmo Zheng, and Chao Fan.
  Quantifying the impact of large language models on collective opinion dynamics.
  arXiv preprint arXiv:2308.03313, 2023.
- [242]

  Shuo Tang, Xianghe Pang, Zexi Liu, Bohan Tang, Rui Ye, Xiaowen Dong, Yanfeng Wang, and Siheng Chen.
  Synthesizing post-training data for llms through multi-agent simulation.
  arXiv preprint arXiv:2410.14251, 2024.
- [243]

  Jinyu Cai, Jialong Li, Mingyue Zhang, Munan Li, Chen-Shu Wang, and Kenji Tei.
  Language evolution for evading social media regulation via llm-based multi-agent simulation.
  arXiv preprint arXiv:2405.02858, 2024.
- [244]

  Yuhan Liu, Zirui Song, Xiaoqing Zhang, Xiuying Chen, and Rui Yan.
  From a tiny slip to a giant leap: An llm-based simulation for fake news evolution.
  arXiv preprint arXiv:2410.19064, 2024.
- [245]

  Chenxi Wang, Zongfang Liu, Dequan Yang, and Xiuying Chen.
  Decoding echo chambers: Llm-powered simulations revealing polarization in social networks.
  arXiv preprint arXiv:2409.19338, 2024.
- [246]

  Maximilian Puelma Touzel, Sneheel Sarangi, Austin Welch, Gayatri Krishnakumar, Dan Zhao, Zachary Yang, Hao Yu, Ethan Kosak-Hine, Tom Gibbs, Andreea Musulan, et al.
  A simulation system towards solving societal-scale manipulation.
  arXiv preprint arXiv:2410.13915, 2024.
- [247]

  J. S. Park, L. Popowski, C. Cai, et al.
  Social simulacra: Creating populated prototypes for social computing systems.
  In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology, pages 1–18, 2022.
- [248]

  C. Gao, X. Lan, Z. Lu, et al.
  S3: Social-network simulation system with large language model-empowered agents, 2023.
- [249]

  Petter Törnberg, Diliara Valeeva, Justus Uitermark, and Christopher Bail.
  Simulating social media using large language models to evaluate alternative news feed algorithms.
  arXiv preprint arXiv:2310.05984, 2023.
- [250]

  Giulio Rossetti, Massimo Stella, Rémy Cazabet, Katherine Abramski, Erica Cau, Salvatore Citraro, Andrea Failla, Riccardo Improta, Virginia Morini, and Valentina Pansanella.
  Y social: an llm-powered social media digital twin, 2024.
- [251]

  Xiaoqing Zhang, Xiuying Chen, Yuhan Liu, Jianzhou Wang, Zhenxing Hu, and Rui Yan.
  A large-scale time-aware agents simulation for influencer selection in digital advertising campaigns.
  arXiv preprint arXiv:2411.01143, 2024.
- [252]

  Rui Xu, Dakuan Lu, Xiaoyu Tan, Xintao Wang, Siyu Yuan, Jiangjie Chen, Wei Chu, and Xu Yinghui.
  Mindecho: Role-playing language agents for key opinion leaders, 2024.
- [253]

  Ruiyang Ren, Peng Qiu, Yingqi Qu, Jing Liu, Wayne Xin Zhao, Hua Wu, Ji-Rong Wen, and Haifeng Wang.
  Bases: Large-scale web search user simulation with large language model based agents.
  arXiv preprint arXiv:2402.17505, 2024.
- [254]

  Xu Huang, Jianxun Lian, Yuxuan Lei, Jing Yao, Defu Lian, and Xing Xie.
  Recommender ai agent: Integrating large language models for interactive recommendations.
  arXiv preprint arXiv:2308.16505, 2023.
- [255]

  Jizhi Zhang, Keqin Bao, Wenjie Wang, Yang Zhang, Wentao Shi, Wanhong Xu, Fuli Feng, and Tat-Seng Chua.
  Prospect personalized recommendation on large language model-based agent platform.
  arXiv preprint arXiv:2402.18240, 2024.
- [256]

  Lei Wang, Jingsen Zhang, Xu Chen, Yankai Lin, Ruihua Song, Wayne Xin Zhao, and Ji-Rong Wen.
  Recagent: A novel simulation paradigm for recommender systems.
  arXiv preprint arXiv:2306.02552, 2023.
- [257]

  A. Zhang, Y. Chen, L. Sheng, et al.
  On generative agents in recommendation, 2024.
- [258]

  Junjie Zhang, Yupeng Hou, Ruobing Xie, Wenqi Sun, Julian McAuley, Wayne Xin Zhao, Leyu Lin, and Ji-Rong Wen.
  Agentcf: Collaborative learning with autonomous language agents for recommender systems.
  In Proceedings of the ACM on Web Conference 2024, pages 3679–3689, 2024.
- [259]

  Flaminio Squazzoni, Wander Jager, and Bruce Edmonds.
  Social simulation in the social sciences: A brief overview.
  Social Science Computer Review, 32(3):279–294, 2014.
- [260]

  Marcel Binz and Eric Schulz.
  Turning large language models into cognitive models.
  arXiv preprint arXiv:2306.03917, 2023.
- [261]

  Xinyi Li, Yu Xu, Yongfeng Zhang, and Edward C Malthouse.
  Large language model-driven multi-agent simulation for news diffusion under different network structures.
  arXiv preprint arXiv:2410.13909, 2024.
- [262]

  Jacqueline Johnson Brown and Peter H Reingen.
  Social ties and word-of-mouth referral behavior.
  Journal of Consumer research, 14(3):350–362, 1987.
- [263]

  Gueorgi Kossinets and Duncan J Watts.
  Origins of homophily in an evolving social network.
  American journal of sociology, 115(2):405–450, 2009.
- [264]

  Boxuan Wang, Haonan Duan, Yanhao Feng, Xu Chen, Yongjie Fu, Zhaobin Mo, and Xuan Di.
  Can llms understand social norms in autonomous driving games?
  arXiv preprint arXiv:2408.12680, 2024.
- [265]

  Dawei Gao, Zitao Li, Xuchen Pan, Weirui Kuang, Zhijian Ma, Bingchen Qian, Fei Wei, Wenhao Zhang, Yuexiang Xie, Daoyuan Chen, et al.
  Agentscope: A flexible yet robust multi-agent platform.
  arXiv preprint arXiv:2402.14034, 2024.
- [266]

  Xuchen Pan, Dawei Gao, Yuexiang Xie, Yushuo Chen, Zhewei Wei, Yaliang Li, Bolin Ding, Ji-Rong Wen, and Jingren Zhou.
  Very large-scale multi-agent simulation in agentscope.
  arXiv preprint arXiv:2407.17789, 2024.
- [267]

  Yancheng Wang, Ziyan Jiang, Zheng Chen, Fan Yang, Yingxue Zhou, Eunah Cho, Xing Fan, Xiaojiang Huang, Yanbin Lu, and Yingzhen Yang.
  Recmind: Large language model powered agent for recommendation.
  arXiv preprint arXiv:2308.14296, 2023.
- [268]

  Tian Liang, Zhiwei He, Jen-tes Huang, Wenxuan Wang, Wenxiang Jiao, Rui Wang, Yujiu Yang, Zhaopeng Tu, Shuming Shi, and Xing Wang.
  Leveraging word guessing games to assess the intelligence of large language models.
  arXiv preprint arXiv:2310.20499, 2023.
- [269]

  Emily Dinan, Stephen Roller, Kurt Shuster, Angela Fan, Michael Auli, and Jason Weston.
  Wizard of wikipedia: Knowledge-powered conversational agents, 2019.
- [270]

  Saizheng Zhang, Emily Dinan, Jack Urbanek, Arthur Szlam, Douwe Kiela, and Jason Weston.
  Personalizing dialogue agents: I have a dog, do you have pets too?, 2018.
- [271]

  Marilù Miotto, Nicola Rossberg, and Bennett Kleinberg.
  Who is gpt-3? an exploration of personality, values and demographics, 2022.
- [272]

  S. Wang, C. Liu, Z. Zheng, et al.
  Avalon’s game of thoughts: Battle against deception through recursive contemplation, 2023.
- [273]

  H. Wang, J. Chen, W. Huang, et al.
  Grutopia: Dream general robots in a city at scale, 2024.
- [274]

  J. Browning.
  Personhood and ai: Why large language models don’t understand us.
  AI & Society, pages 1–8, 2023.
- [275]

  A. Radford, J. W. Kim, C. Hallacy, et al.
  Learning transferable visual models from natural language supervision.
  In Proceedings of the International Conference on Machine Learning, pages 8748–8763. PMLR, 2021.
- [276]

  Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee.
  Visual instruction tuning.
  Advances in neural information processing systems, 36, 2024.
