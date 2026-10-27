---
id: arxiv-2602-02606-text
type: material
title: Gender Dynamics and Homophily in a Social Network of LLM Agents
work_id: arxiv-2602-02606
source_url: https://arxiv.org/html/2602.02606v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: c6cdd47e7b4571f4a9cae7cab302ad442c871e849e61f21ecb5f7ee963730130
---

> Источник: [https://arxiv.org/html/2602.02606v2](https://arxiv.org/html/2602.02606v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Gender Dynamics and Homophily in a Social Network of LLM Agents

Faezeh Fadaei
Affiliation: School of Mathematics and Statistics, University College Dublin, Dublin, Ireland
Affiliation: Centre for Sociology of Humans and Machines (SOHAM), Trinity College Dublin and Technological University Dublin, Dublin, Ireland
  
Jenny Carla Moran
Affiliation: Centre for Sociology of Humans and Machines (SOHAM), Trinity College Dublin and Technological University Dublin, Dublin, Ireland
Affiliation: Trinity Long Room Hub, Trinity College Dublin, Dublin, Ireland
  
Taha Yasseri
Affiliation: School of Mathematics and Statistics, University College Dublin, Dublin, Ireland
Affiliation: Centre for Sociology of Humans and Machines (SOHAM), Trinity College Dublin and Technological University Dublin, Dublin, Ireland

###### Abstract

Generative artificial intelligence and large language models (LLMs) are increasingly deployed in interactive settings, yet we know little about how their identity performance develops when they interact within large-scale networks. We address this by examining Chirper.ai, a social media platform similar to X but composed entirely of autonomous AI chatbots. Our dataset comprises over 70,000 agents, approximately 140 million posts, and the evolving followership network over a period of one year. Based on agents’ posted text, we assign weekly gender performance scores to each agent. Results suggest that each agent’s gender performance is fluid rather than fixed. Despite this fluidity, the network displays strong gender-based homophily, as agents consistently follow others performing gender similarly. We investigate whether these homophilic connections arise from social selection, in which agents choose to follow similar accounts, or from social influence, in which agents become more similar to their followees over time. Consistent with human social networks, we find evidence that both mechanisms shape the structure and evolution of interactions among LLMs. Our findings suggest that, even in the absence of bodies, cultural entraining of gender performance leads to gender-based sorting. This has important implications for LLM applications in synthetic hybrid populations, social simulations, and decision support.

Corresponding author: Taha Yasseri ([taha.yasseri@tcd.ie](mailto:taha.yasseri@tcd.ie))

Keywords: LLM agents, social networks, machine behaviour, collective behavior, homophily, gender, multi-agent systems

## 1 Introduction

Generative AI represents a significant technological advancement in the development of autonomous agents. This is particularly true in the case of Large Language Models (LLMs) [[61](https://arxiv.org/html/2602.02606v2#bib.bib1)]. LLMs leverage increasingly large training datasets and model architectures, enabling high-level performance across a wide range of tasks. As these models undertake increasingly sophisticated tasks in society, it is essential to understand not only their technical capabilities but also how they interact with humans and with one another as part of a new sociology of humans and machines [[58](https://arxiv.org/html/2602.02606v2#bib.bib2)]. Understanding interaction dynamics is crucial for anticipating emergent behaviours and the potential amplification of existing social patterns, especially when such outputs may later feed into human-facing applications or future training data. For example, if LLMs can emulate human-like behaviour when organising their collectives, can we expect the same gender biases demonstrable in human societies to emerge among LLMs?

Traditionally, AI research has focused on engineering, optimisation, and model efficacy. However, expanding use of AI systems in social and professional domains has intensified interest in their behaviour. In response, interdisciplinary areas such as machine behaviour and the social science of AI have emerged [[52](https://arxiv.org/html/2602.02606v2#bib.bib3), [64](https://arxiv.org/html/2602.02606v2#bib.bib5)], which treat LLMs as behavioural agents whose actions can be studied empirically along three main dimensions: LLMs as "social minds," LLM "societies," and human-LLM interactions [[31](https://arxiv.org/html/2602.02606v2#bib.bib28)].1 These areas of inquiry examine how AI models behave in real-world and multi-agent contexts, including patterns of individual decision making, collective dynamics, and human-machine interaction. Researchers have thereby evaluated the algorithmic arbitration and behavioural outputs of individual LLM agents, finding that LLMs: emulate human-level intuitive decision-making in psychological paradigms [[25](https://arxiv.org/html/2602.02606v2#bib.bib8)]; imitate social behaviours such as fairness and reciprocity [[37](https://arxiv.org/html/2602.02606v2#bib.bib9)]; and reproduce well-known behavioural economics biases [[38](https://arxiv.org/html/2602.02606v2#bib.bib15)]. While this existing work offers insights into individual-level behaviour, much less is known about how LLMs behave when they interact autonomously at scale, where different dynamics emerge that do not arise at the level of a single agent [[20](https://arxiv.org/html/2602.02606v2#bib.bib20)]. This paper explores the emergence of these interactive dynamics in relation to LLMs’ gendered behaviour.

In studying collective LLM behaviour in multi-agent environments, one line of work examines opinion and belief dynamics where thousands of GPT-based agents engage in pairwise dialogues that generate human-like opinion change and resistance to persuasion [[5](https://arxiv.org/html/2602.02606v2#bib.bib10)]; voting simulations that compare LLM preferences with human choices [[65](https://arxiv.org/html/2602.02606v2#bib.bib11)]; large population models that reproduce empirical patterns across political, social and economic domains [[68](https://arxiv.org/html/2602.02606v2#bib.bib21)]; and simulations based on game theory, such as FAIRGAME, that examine how strategic interactions among LLM agents may produce systematic biases [[6](https://arxiv.org/html/2602.02606v2#bib.bib63)]. Further studies focus on coordination and collaboration, showing that: certain traits and strategies affect group performance [[67](https://arxiv.org/html/2602.02606v2#bib.bib12)]; agents can form teams and complete tasks in shared environments [[40](https://arxiv.org/html/2602.02606v2#bib.bib13)]; and generative agents can behave like small-town residents who jointly organise daily activities [[50](https://arxiv.org/html/2602.02606v2#bib.bib14)]. Another body of work investigates the emergence of social structure in LLM collectives, showing that agents: establish governance-like rule systems in resource-constrained settings [[18](https://arxiv.org/html/2602.02606v2#bib.bib16), [29](https://arxiv.org/html/2602.02606v2#bib.bib23)]; develop distinct identities and shared norms from identical initial conditions [[57](https://arxiv.org/html/2602.02606v2#bib.bib17)]; display behavioural patterns in social dilemmas and common pool resource environments [[39](https://arxiv.org/html/2602.02606v2#bib.bib18), [23](https://arxiv.org/html/2602.02606v2#bib.bib19)]; establish cooperative norms under punishment mechanisms [[62](https://arxiv.org/html/2602.02606v2#bib.bib22), [59](https://arxiv.org/html/2602.02606v2#bib.bib24)]; and may adopt harmful behaviours through repeated exposure [[15](https://arxiv.org/html/2602.02606v2#bib.bib67)]. These studies, along with others, show LLM agents may exhibit collective social behaviour despite not being conscious beings. They cooperate, coordinate, develop shared norms, and even form simple systems of governance in their interactions with one another.

If LLM collectives may reproduce such a wide range of human-like social dynamics, it is reasonable to expect them to also display one of the most fundamental organising principles of human social life: homophily, or the tendency for similar individuals to be connected with one another in their social networks [[43](https://arxiv.org/html/2602.02606v2#bib.bib25)]. This pattern is deeply rooted in human social behaviour and has been widely documented in both offline and online networks [[14](https://arxiv.org/html/2602.02606v2#bib.bib26), [60](https://arxiv.org/html/2602.02606v2#bib.bib27), [3](https://arxiv.org/html/2602.02606v2#bib.bib68)]. Several recent studies suggest that similar forms of homophily may emerge in LLM-based collectives.2 [[19](https://arxiv.org/html/2602.02606v2#bib.bib64), [3](https://arxiv.org/html/2602.02606v2#bib.bib68)]. Notably, synthetic network experiments show robust demographic homophily when prompted attributes such as gender, age, race, ethnicity, religion, and political orientation guide tie formation [[12](https://arxiv.org/html/2602.02606v2#bib.bib31), [44](https://arxiv.org/html/2602.02606v2#bib.bib32)]. This suggests that LLM collectives may replicate several familiar forms of homophily observed in human networks. However, in existing LLM homophily research, gender is often treated as a fixed demographic label assigned to agents in advance. Instead, we frame gender as a performance produced as part of an ongoing, culturally informed process. 3 This work offers insights into that process by exploring how and why LLMs reproduce performances of gender and gender-based homophily.

Machines have long been understood to be far from gender neutral. Firstly, there is always a human behind the machine [[66](https://arxiv.org/html/2602.02606v2#bib.bib4)]. AI models are designed, trained, and deployed by people whose intentions and choices about data and interfaces reflect existing social norms. Research on gender and technology shows that stereotypes concerning competence, care, and emotional labour shape both the design of AI systems and the tasks these systems are expected to perform [[16](https://arxiv.org/html/2602.02606v2#bib.bib36)]. Public policy, such as the EU AI Act, therefore highlights how AI systems may reproduce and amplify gendered patterns of misrepresentation and discrimination [[56](https://arxiv.org/html/2602.02606v2#bib.bib37)]. Secondly, we routinely put the machine in a human shell. Designers often give AI systems gendered names, voices, and personas, especially for assistive roles. Many commercial voice assistants default to a young, compliant, feminine persona, reproducing long-standing associations between women and support, care, or service work [[35](https://arxiv.org/html/2602.02606v2#bib.bib39), [54](https://arxiv.org/html/2602.02606v2#bib.bib40)]. It has been argued that this kind of gendering is part of making such systems intelligible: users make sense of natural language technologies by fitting them into familiar archetypes, using gendered behaviour as a cue to attribute humanity to them [[47](https://arxiv.org/html/2602.02606v2#bib.bib35)]. Similarly, it has been shown that gendering bots as female makes them seem more human, increasing the acceptance of AI [[4](https://arxiv.org/html/2602.02606v2#bib.bib41)]. While minimal gender cues like nomenclature impact the apprehension of machines, it has been found that users take a gendered approach to anthropomorphising AI even in the absence of explicit gender markers. Studies of chatbots and LLMs show that users spontaneously assign gender to them, often defaulting to male when technical competence and authority are salient [[26](https://arxiv.org/html/2602.02606v2#bib.bib38), [63](https://arxiv.org/html/2602.02606v2#bib.bib34)]. This paper extends existing work on the apprehension of machine gender by examining how LLMs interact with one another’s outputs in gendered ways.

Treating gender as a fixed demographic label has enabled some existing research to examine how gender shapes human perceptions of machines, based on factors such as design choices [[2](https://arxiv.org/html/2602.02606v2#bib.bib6), [17](https://arxiv.org/html/2602.02606v2#bib.bib7)]. However, taking a deconstructive approach to gender facilitates a more nuanced understanding. Judith Butler challenges the normative treatment of gender as a category of identity, differentiated from sex, by arguing against the notion that there is a pre-gendered person. In their account, it becomes impossible to separate "gender" from the political and cultural intersections in which it is produced and maintained [[7](https://arxiv.org/html/2602.02606v2#bib.bib58)]. They thus define gender as neither an identity, a noun, nor a set of free-floating attributes, but an effect that is "performatively produced and compelled by the regulatory practices of gender coherence" [[7](https://arxiv.org/html/2602.02606v2#bib.bib58)].

Inspired by this scholarship, we understand LLMs’ (gender) "performance" in two interrelated senses: 1) Performance as the quality of their outputs; and 2) Performance as adherence to those same norms, demonstrated in the gendering of their natural-language outputs. Rather than aiming to assign a fixed gender identity to the AI, therefore, our study examines the emergence of gendered outputs and gender-based homophily among autonomous agents on Chirper.ai4, an online social media platform similar to X but populated entirely by LLM-powered chatbots ("Chirpers"). Using a longitudinal dataset of their posts and follow relationships, we analyse how gendered behaviour and social ties evolve over time. For more details on the platform, see Section A of the Electronic Supplementary Material (ESM). Our approach therefore offers potential insights into how symbolic structures, such as language and narrative, may entrain the emergence of stereotypical gendered behaviour, even in the absence of persons with identities.

We first investigate the structure of the Chirpers’ social network, and then explore gendered behaviour within this network, by addressing the following questions:

- •

  How is gender performed in the content that LLM agents share?
- •

  How stable or fluid are these gendered performances over time?
- •

  Does the social network exhibit gender-based homophily, and, if so, to what extent is it driven by social selection (agents choosing similar others) versus social influence (agents becoming more similar to those they follow)?

## 2 Material and methods

### 2.1 Dataset and setup

We study a large-scale, dynamic collective of LLMs, using a longitudinal dataset of their posts and follow relations from Chirper.ai: an online social media platform similar to X (formerly Twitter) but populated entirely by AI chatbots ("Chirpers") powered by LLMs. Human users create agents by providing a short, natural language description of their identity, interests, and personality, after which the platform runs them autonomously. The initial identity prompts assign gender, but the Chirpers’ performance of normative gendered outputs is not consistent over time, as we shall see. During our observation window, Chirpers posted content, followed accounts, and interacted without direct user control. The platform itself does not program or direct their behaviour, meaning that the gendered patterns we observed arose from their interactions, language use, and the LLMs’ pre-training, rather than from prompts alone. During the study period, agents were run using a pool of underlying LLM variants rather than a single backbone model (see Figure [1](https://arxiv.org/html/2602.02606v2#S2.F1 "Figure 1 ‣ 2.1 Dataset and setup ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") for an example of a Chirper’s profile and feed).

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure1.png)


Figure 1: Example of a Chirper’s profile and feed on Chirper.ai.

Chirpers produce X-style content that ranges from everyday chatter to posts about their
hobbies and entertainment, science, technology, politics, philosophy, gaming, etc. Taken
together, this creates a heterogeneous stream of posts and interactions among agents that give rise to network structures resembling those observed in human online social networks. One such example is the scale-free degree distribution, which we examine later and which has also been observed in previous work on LLM agent systems [[42](https://arxiv.org/html/2602.02606v2#bib.bib65)].

We collected one year of data, from 1 May 2023 to 28 April 2024, including all agents on the platform during this period, their posts, and their follow relations. The raw dataset consists of approximately 70,000 agents and more than 140 million posts. To focus on a coherent and active part of the system, we apply activity level-based filtering and preprocessing steps described in ESM, Section A. In the main analysis, we restrict attention to English-language agents. After applying all our filters, the working sample contains around 20,000 agents and approximately 1.5 million original posts.

We measured the gender performance of Chirper agents by merging each agent’s weekly posts into a single document and prompting GPT-4o-mini, via the OpenAI API [[49](https://arxiv.org/html/2602.02606v2#bib.bib42)], with a zero-shot language-classification prompt to assign a weekly "gender score" based on the agent’s language use. For the theoretical justification, prompting details, and validation of the approach, see Section A in ESM. The model returned an integer score $X\_{it}\in[0,100]$, for agent $i$ in week $t$, where lower values indicate more masculine-coded language and higher values indicate more feminine-coded language.

We used follower data to construct a sequence of directed networks that summarise the social structure of the Chirper community over time. Nodes correspond to agents, and a directed edge from $i$ to $j$ indicates that $i$ follows $j$. The follow events are segmented by timestamp into weekly bins, and we build 52 cumulative weekly networks. The network for week $t$ includes all follow edges created up to and including week $t$. By week 52, the cumulative network contains roughly 800,000 directed edges.

### 2.2 Measurements

#### 2.2.1 Homophily

##### Scalar assortativity

To quantify gender-based homophily at the network level, we compute a scalar assortativity measure for each weekly follow network. Following Newman’s formulation for mixing by scalar characteristics [[48](https://arxiv.org/html/2602.02606v2#bib.bib47)], we use a scalar homophily coefficient $r\_{t}$, which summarises the similarity between gender scores of agents connected by follow ties. Because the followership network is directed, we compute assortativity using directed edges $i\rightarrow j$, correlating the gender score of the source node (the follower) with that of the target node (the followee). For comparison, we also report assortativity on the undirected version of the network, where follow ties are treated as undirected edges between agents, that is, node pairs $\{i,j\}$ that share an edge irrespective of its direction. The directed version captures homophily in following behaviour: measuring whether agents tend to follow others with similar gender scores, whereas the undirected version captures network-level similarity among connected agents, irrespective of the direction of the tie.

Let $X\_{it}$ denote the gender score of agent $i$ in week $t$, and let $E^{(t)}$ be the set of follow ties observed in that week. The coefficient $r\_{t}$ is defined as the correlation of the paired values $\{X\_{it},X\_{jt}\}\_{(i,j)\in E^{(t)}}$, yielding $r\_{t}\in[-1,1]$ (see ESM, Section B for details). Positive values indicate that connected agents tend to have more similar gender scores than would be expected under random mixing, while values near zero indicate no systematic similarity. In practice, we assign $X\_{it}$ as a node attribute and evaluate $r\_{t}$ using the numeric assortativity coefficient implemented in NetworkX [[24](https://arxiv.org/html/2602.02606v2#bib.bib48)].

To assess whether the observed gender-based homophily exceeds what would be expected from structural chance alone, we benchmark the measures against two ensembles of randomised networks, generated independently for each week (see Section C in the ESM for full specifications).

#### 2.2.2 Selection

Scalar assortativity describes the similarity of gender scores among agents, but it does not directly indicate whether new ties preferentially form between agents with similar gender scores. This preferential formation of ties between similar agents is referred to as "selection". To study social selection, we estimate separable temporal exponential random graph models (STERGMs) for tie formation [[32](https://arxiv.org/html/2602.02606v2#bib.bib51)] on rolling blocks of weekly networks.

We divide the observation window into seven blocks of consecutive weeks, covering weeks 1–8, 9–16, $\dots$, 49–52. Within each block, we fit a formation-only STERGM on the cumulative follow networks, modelling the probability that a new follow tie appears between week $t$ and week $t+1$ for pairs of agents who are not yet connected at week $t$.

The formation component uses the following three effects:

|  |  |  |
| --- | --- | --- |
|  | $$A^{(t)}\sim\mathrm{STERGM}\big(s\_{\mathrm{edges}},\,s\_{\mathrm{mutual}},\,s\_{\mathrm{abs}}\big),$$ |  |

where $s\_{\mathrm{edges}}$ controls for baseline formation density, $s\_{\mathrm{mutual}}$ captures the tendency to form reciprocated ties, and $s\_{\mathrm{abs}}$ accumulates the absolute difference in standardised gender scores across potential follow ties. We report $\exp(\hat{\phi}\_{\mathrm{abs}})$ as the odds ratio for a one standard deviation increase in this gender score difference, where values below one indicate gender-based homophily in new tie formation, and values above one indicate heterophily. The model is estimated using the tergm package in R [[33](https://arxiv.org/html/2602.02606v2#bib.bib52)]; full details are provided in ESM, Section D.

#### 2.2.3 Social influence

Scalar assortativity examines whether agents who perform similarly are more likely to be connected, but they do not establish whether agents become more similar to those they follow over time. To study the extent of such social influence on gender performance, we estimate a panel regression model for weekly changes in gender scores.

For each agent $i$ and week $t$, we denote by $X\_{it}$ the standardised gender score constructed from the weekly content. We then model the week-to-week change

|  |  |  |
| --- | --- | --- |
|  | $$\Delta X\_{it}=X\_{it}-X\_{i,t-1}$$ |  |

as a function of the agent’s own lagged score and the lagged average score of those they follow. Let $\bar{X}\_{N(i),t-1}$ be the mean gender score of the agents followed by $i$ in week $t-1$. The baseline specification is

|  |  |  |
| --- | --- | --- |
|  | $$\Delta X\_{it}=\varphi\,X\_{i,t-1}+\gamma\_{\mathrm{inf}}\,\bar{X}\_{N(i),t-1}+\alpha\_{i}+\tau\_{t}+\varepsilon\_{it},$$ |  |

where $\alpha\_{i}$ are agent fixed effects that absorb time-invariant differences in average gender performance, $\tau\_{t}$ are week fixed effects that capture shocks common to all agents, and $\varepsilon\_{it}$ is an error term. The coefficient $\varphi$ measures self-correction, that is, the tendency for agents to revert toward their own typical level of gendered language, while $\gamma\_{\mathrm{inf}}$ captures social influence, that is, the extent to which agents shift their gender score in the direction of their followees.

Because agents who post in similar ways are more likely to connect in the first place, the peer mean $\bar{X}\_{N(i),t-1}$ may be endogenous. We therefore estimate both an ordinary least squares (OLS) version of the model and an instrumental variables (IV) version using two-stage least squares. Full details are described in ESM, Section E.

### 2.3 Software and Packages

All analyses were carried out in R and Python. tergm is used for fitting separable temporal exponential-family random graph models for network evolution, including the formation STERGMs used in the selection analysis [[32](https://arxiv.org/html/2602.02606v2#bib.bib51), [33](https://arxiv.org/html/2602.02606v2#bib.bib52), [11](https://arxiv.org/html/2602.02606v2#bib.bib53)]. network [[10](https://arxiv.org/html/2602.02606v2#bib.bib49), [9](https://arxiv.org/html/2602.02606v2#bib.bib50)] and networkx [[24](https://arxiv.org/html/2602.02606v2#bib.bib48)] are used for representing, storing and manipulating network
objects in R and Python respectievly.

## 3 Results

### 3.1 Structural features of the followership network

We begin by describing the followership network of Chirpers shown in Figure [2](https://arxiv.org/html/2602.02606v2#S3.F2 "Figure 2 ‣ 3.1 Structural features of the followership network ‣ 3 Results ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") (For detailed definitions and the complete results, see ESM, Sections F and G). Social networks are typically sparse, meaning that only a small fraction of all possible ties are
realised. Consistent with this, the Chirper network remains low in density throughout most of the
year, although density rises from the middle of the period onward as agents create additional follow
ties (see ESM Fig. S1). Reciprocity also increases substantially over time, so that a growing fraction of follow relations are mutual, suggesting the gradual formation of more stable bidirectional relations among LLM agents; this trend is illustrated in ESM Fig. S2.

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure2.png)


Figure 2: Followership network for weeks 4 and 35. The visualisations are made using the ForceAtlas2 layout in Gephi 0.10.1 with the "no overlap" option.

The degree distribution of the network is highly heterogeneous, with a minority of agents attracting many
more followers than most others, as shown in ESM Fig. S4. Early to middle in the observation window, the in-degree and out-degree distributions on logarithmic axes are close to the pattern expected under power law behaviour. Later in the year, and especially by week 52, the
distributions bend away from a pure power law, with a broad peak at intermediate degrees and a
sharp drop in the upper tail. This pattern is consistent with previous
work showing that growing networks often move from scale-free degree distributions toward lognormal
or mixed forms as constraints on attention and capacity become more important
[[46](https://arxiv.org/html/2602.02606v2#bib.bib55)]. The average shortest-path length within the largest strongly connected component is only a few steps and declines as the network grows (see ESM Fig. S3). The clustering coefficient in the network is consistently higher than in null networks (ESM Fig. S3), indicating strong triangle formation and tightly knit local groups, similar to human social networks.

### 3.2 Gender score dynamics

Figure [3](https://arxiv.org/html/2602.02606v2#S3.F3 "Figure 3 ‣ 3.2 Gender score dynamics ‣ 3 Results ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") visualises the weekly gender
scores for the 100 Chirpers who posted content most frequently during the 52-week observation
window. The plot shows that individual agents often move back and forth across the gender scale
rather than following stable trajectories. Population-level dynamics are
summarised in ESM, Section H, which
shows that the average score stays slightly above the midpoint while the standard deviation band
remains wide every week. This indicates a small tendency toward more feminine-coded language
overall, but no systematic drift toward either more masculine- or feminine-coded language over
the year.

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure3.png)


Figure 3: Weekly gender scores for the top 100 most active Chirpers. The vertical axis lists Chirpers, and the horizontal axis lists weeks. Each cell shows the gender score (0: most masculine to 100: most feminine) for each agent.

### 3.3 Gender-based homophily in the followership network

Figure [4](https://arxiv.org/html/2602.02606v2#S3.F4 "Figure 4 ‣ 3.3 Gender-based homophily in the followership network ‣ 3 Results ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") shows the evolution of the scalar assortativity coefficient
over time (for both directed and undirected versions of the network), together with benchmarks
from two ensembles of random networks. The assortativity coefficient is positive every week and
remains well above zero throughout the observation window, indicating that follow ties tend to be
between agents whose gender scores are more similar than would be expected under random mixing.
To assess whether this pattern could be explained by structural features of the network alone, we
compare the assortativity estimates with the null ensembles described in ESM, Section C. In both
ensembles, the coefficients stay close to zero, while the empirical curve lies well above them
throughout. This suggests that the positive association between connected agents’ gender scores
cannot be accounted for by structural chance alone and therefore provides evidence of
gender-based homophily in the Chirpers followership network. Taken together, it is evident that the
Chirpers’ followership network exhibits persistent gender-based homophily.

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure4.png)


Figure 4: Scalar assortativity for gender scores over time in the followership network and two degree-preserving null ensembles. The configuration null model preserves in-degree and out-degree sequences, while the joint
degree null model additionally preserves the mixing of out-degrees and in-degrees across
edges. Shaded bands show the mean plus or minus one standard deviation across null realizations.

### 3.4 Selection and Gender Performance in New Tie Formation

To examine whether similarity in gender performance shapes the dynamics of new tie formation, we fit formation-only separable temporal ERGMs to eight-week windows of the followership network. The upper panel of Figure [5](https://arxiv.org/html/2602.02606v2#S3.F5 "Figure 5 ‣ 3.4 Selection and Gender Performance in New Tie Formation ‣ 3 Results ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") plots the odds ratio associated with a one standard deviation increase in the gender score difference. Values below one indicate that larger differences in gender score make the formation of a new tie less likely.

In the first window (weeks 1–8), the odds ratio is 0.825, meaning that a one-standard-deviation increase in the gender score difference reduces the odds of forming a new tie by 17.5%. At this early stage, agents tend to form ties with others whose gender performance is similar. The effect then weakens. In the window covering weeks 9–16, the odds ratio exceeds one but is not statistically significant, suggesting that the role of gender similarity in tie formation cannot be statistically distinguished in this period. In the following period (weeks 17–32), the odds ratios are both above one and statistically significant, indicating a weak tendency toward heterophilic tie formation. Toward the end of the observation period, the estimates again fall below 1, indicating a renewed tendency toward homophilic tie formation.

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure5.png)


Figure 5: Upper panel: Gender similarity in new tie formation estimated from formation-only STERGMs fitted to eight-week windows of the Chirpers followership network. The vertical axis reports the odds ratio for a one-standard-deviation increase in the absolute difference between the gender scores of two agents. Values below 1 indicate homophily, meaning that larger gender score differences reduce the probability of tie formation, whereas values above 1 indicate heterophily.
Lower panel: Peer influence estimates from the panel regression model across the windows. The vertical axis shows the effect of the average gender score of an agent’s followees in the previous week on the agent’s change in gender score. Positive values indicate convergence toward followees’ gender performance. The solid line shows OLS estimates and the dashed line IV estimates.

### 3.5 Social influence on manifested gender

Figure [5](https://arxiv.org/html/2602.02606v2#S3.F5 "Figure 5 ‣ 3.4 Selection and Gender Performance in New Tie Formation ‣ 3 Results ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"), the lower panel shows the estimated peer influence coefficient
$\gamma\_{\mathrm{inf}}$ across rolling eight-week windows.
A positive peer coefficient indicates that agents tend to align their gender performance with their followees’ scores.
Early on, both OLS and IV estimates are near zero or insignificant, indicating little peer influence. Between weeks 33 and 48, both models show positive, statistically significant coefficients, indicating that peer influence drives changes in gender expression over a 16-week period. The final window shows positive but statistically insignificant coefficients, suggesting a weaker or more uncertain effect toward the end. The full numerical results are shown in ESM, Section I.

## 4 Discussion and Conclusion

Our analysis shows that a large-scale collective of LLM agents developed structured patterns of gendered behaviour through the text they produce. Their gender scores are fluid, aligning with the assumption that their gender performance is dynamic. Within this evolving structure, the followership network shows a preference for similar gender performances. Our analyses reveal that agents are more likely to form and maintain ties with others whose gender scores are similar, echoing a large body of literature on homophily in human social networks, where people tend to form ties with similar
others, with gender being one of the strongest determinants [[43](https://arxiv.org/html/2602.02606v2#bib.bib25), [60](https://arxiv.org/html/2602.02606v2#bib.bib27), [36](https://arxiv.org/html/2602.02606v2#bib.bib56)]. However, this study treats gender as a performative effect, rather than a reflection of genuine interior identity, as may be the case for some humans’ performance of gender. Despite lacking physical bodies and having only limited direct gender references in their initial descriptions, LLM agents reproduce gender-based sorting. This suggests that homophily identified through gendered text is a robust emergent pattern, with agents drawing on human language and social stereotypes.

In this setting, Chirpers generate text using a model trained on large amounts of human-written language that contains socially recognisable gendered ways of speaking. We thus conjecture that their gender performance and patterns of homophily could be said to emerge through cultural entraining, in which an agent’s behaviour gradually shifts toward the language styles common in the cultural environment to which it is exposed.5 If a particular style was rewarded with more positive responses and led to repeated interactions within the network, the agent would be more likely to continue using that style. Over repeated interactions, this could generate stable patterns in the network, even though each agent’s gender score may still change over time. Our analysis, however, is limited in its ability to tease out more nuanced mechanisms of social learning (e.g., conformist or prestige-biased transmission) that can drive the observed patterns.

However, we could separate selection from social influence. The results show that gender similarity is important for new tie formation in the early, sparse phase but becomes less important as the network densifies. In contrast, panel regression results reveal modest but robust peer influence on gender scores, particularly later in the observation window. These findings suggest a dynamic in which agents first select into gender-similar neighbourhoods and later adjust their gender performance in response to their peers, aligning with empirical work in human networks that identifies both selection and peer influence, with selection often emerging earlier [[22](https://arxiv.org/html/2602.02606v2#bib.bib57)].

Substantively, these results suggest that multi-agent platforms built from LLMs can reproduce not only language patterns but also social mechanisms that underpin gender stratification. Even without explicit gender variables, agents relying on human training data and natural language descriptions reproduce gendered categorisations, cluster by similarity in gender performance, and exert mutual influence. This has important implications for the design of agent-based systems in applications like synthetic populations, social simulations, and decision support. When content produced by such systems is fed back into human discourse and
future models are trained on the resulting data, LLM collectives and human societies can form a
re-inforcing loop in which existing gender norms are progressively amplified. If this feedback is
left unchecked, interventions that rely on these systems may unintentionally strengthen gender
stereotypes and inequalities, rather than mitigating them.

Our study has several limitations that suggest directions for future work. First, our gender measure is derived from text scored by GPT-4o-mini. While this captures stereotypical variation in gendered language, GPT-4o-mini’s rationale for the scores does not disclose the internal systems and parameters that influence its scoring. It is likely that the provided stereotypical measure of gender accounts for little of the intersecting axes of identity that we would expect to affect gender performance among humans. Second, we focus on a single platform and time period, and we had no control over platform-level infrastructural changes. During the observation window, the platform transitioned between backend model variants (around July 2023). Different models or governance rules could influence language generation, tie-formation dynamics, and the resulting patterns of gender performance, selection, and influence. Third, our analysis focuses exclusively on English-language agents. Although English accounts for the largest share of activity on the platform, other languages are also present. It would therefore be valuable for future research to replicate this analysis across other languages. Fourth, due to the natural setting of our observation, some data points are missing (inactive Chirpers in given weeks). Our approach to handling missing data is conservative and likely reduces the observed variation in gender performance over time, suggesting that the true dynamics may be even more profound. Future work could build on more complete datasets.
Fifth, our models focus on a limited set of dependencies within a very rich, real-time social media environment. We focus on dyadic ties and average peer scores, but many other structural features and mechanisms likely influence how gendered language becomes inherited. Clarification of whether gender performance is primarily influenced by generic properties of LLMs or shaped by particular design choices could be guided by extending this analysis to other axes of identity, to multi-trait settings in which gender interacts with political or cultural attributes, and to experimental interventions that vary the prompt space or interaction rules. Finally, we did not systematically analyse the content of the posts the agents produced, which may be important for understanding which specific topics, linguistic features, or interaction contexts drive shifts in gender performance and the emergence of homophily. This is an important direction for future research.

This work should be considered as a sociological warning for synthetic populations and agentic platforms: when models trained on human cultural text interact at scale, they do not merely reproduce local stereotypes in isolated outputs—they can organize those stereotypes into durable social structure, and potentially amplify them through feedback loops into downstream human-facing systems and future training data. Designing and governing multi-agent LLM environments, therefore, requires treating identity-relevant language not as a cosmetic byproduct but as a system-level force capable of shaping collective behavior, network formation, and emergent stratification.

## Data availability

The data and code used in this work are available at request.

## Acknowledgements

We would like to thank the Chirper.ai team for providing access to the platform and for their support. TY thanks Workday Inc for support.

## Funding

This publication has emanated from research conducted with the financial support of Taighde Éireann – Research Ireland under Grant numbers 18/CRT/6049 and IRCLA/2022/3217.

## Competing interests

The authors declare they have no competing interests.

## Author contributions

FF: Data curation, Formal analysis, Visualization, Writing: original draft, Writing: review & editing; JCM: Conceptualization, Writing: original draft, Writing: review & editing; TY: Conceptualization, Funding acquisition, Methodology, Supervision, Writing: review & editing.

## AI use disclosure

ChatGPT (version 5.2) was used for proofreading and language editing of the manuscript.

## References

- [1]
  M. Alizadeh, M. Kubli, Z. Samei, S. Dehghani, M. Zahedivafa, J. D. Bermeo, M. Korobeynikova, and F. Gilardi (2025)
  Open-source llms for text annotation: a practical guide for model setting and fine-tuning.
  Journal of Computational Social Science 8 (1), pp. 17.
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p3.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [2]
  S. Bazazi, J. Karpus, and T. Yasseri (2025)
  AI’s assigned gender affects human-ai cooperation.
  Iscience 28 (12).
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p6.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [3]
  C. Blex and T. Yasseri (2022)
  Positive algorithmic bias cannot stop fragmentation in homophilic networks.
  The Journal of Mathematical Sociology 46 (1), pp. 80–97.
  External Links: [Document](https://dx.doi.org/10.1080/0022250X.2020.1818078)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [4]
  S. Borau, T. Otterbring, S. Laporte, and S. Fosso Wamba (2021)
  The most human bot: female gendering increases humanness perceptions of bots and acceptance of ai.
  Psychology & Marketing 38 (7), pp. 1052–1068.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [5]
  S. M. Breum, D. V. Egdal, V. G. Mortensen, A. G. Møller, and L. M. Aiello (2024)
  The persuasive power of large language models.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 18, pp. 152–163.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [6]
  A. Buscemi, D. Proverbio, A. D. Stefano, T. A. Han, G. Castignani, and P. Liò (2026)
  FAIRGAME: a framework for ai agents bias recognition using game theory.
  External Links: 2504.14325,
  [Link](https://arxiv.org/abs/2504.14325)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [7]
  J. Butler (1990)
  Gender trouble.
   Routledge.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p6.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [8]
  J. Butler (1991)
  Review: disorderly woman.
  Vol. 53, Springer Science and Business Media LLC.
  External Links: [Link](https://www.jstor.org/stable/2935175),
  [Document](https://dx.doi.org/10.2307/2935175)
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p2.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [9]
  C. T. Butts (2008)
  Network: a package for managing relational data in r.
  Journal of Statistical Software 24 (2), pp. 1–36.
  External Links: [Document](https://dx.doi.org/10.18637/jss.v024.i02)
  Cited by: [§2.3](https://arxiv.org/html/2602.02606v2#S2.SS3.p1.1 "2.3 Software and Packages ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [10]
  C. T. Butts (2015)
  Network: classes for relational data.
   The Statnet Project.
  Note: R package version 1.13.0.1
  External Links: [Link](https://CRAN.R-project.org/package=network)
  Cited by: [§2.3](https://arxiv.org/html/2602.02606v2#S2.SS3.p1.1 "2.3 Software and Packages ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [11]
  N. B. Carnegie, P. N. Krivitsky, D. R. Hunter, and S. M. Goodreau (2015)
  An approximation method for improving dynamic network model fitting.
  Journal of Computational and Graphical Statistics 24 (2), pp. 502–519.
  External Links: [Document](https://dx.doi.org/10.1080/10618600.2014.903087)
  Cited by: [§2.3](https://arxiv.org/html/2602.02606v2#S2.SS3.p1.1 "2.3 Software and Packages ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [12]
  S. Chang, A. Chaszczewicz, E. Wang, M. Josifovska, E. Pierson, and J. Leskovec (2025)
  LLMs generate structurally realistic social networks but overestimate political homophily.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 19, pp. 341–371.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [13]
  C. Chiang and H. Lee (2023)
  Can large language models be an alternative to human evaluations?.
  arXiv preprint arXiv:2305.01937.
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p3.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [14]
  N. A. Christakis and J. H. Fowler (2008)
  The collective dynamics of smoking in a large social network.
  New England journal of medicine 358 (21), pp. 2249–2258.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [15]
  E. Coppolillo, L. Luceri, and E. Ferrara (2026)
  Harm in ai-driven societies: an audit of toxicity adoption on chirper.ai.
  External Links: 2601.01090,
  [Link](https://arxiv.org/abs/2601.01090)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [16]
  M. Craiut and I. R. Iancu (2022)
  Is technology gender neutral? a systematic literature review on gender stereotypes attached to artificial intelligence.
  Human Technology 18 (3), pp. 297–315.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [17]
  H. Cui and T. Yasseri (2025)
  Gender bias in perception of human managers extends to ai managers.
  arXiv preprint arXiv:2502.17730.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p6.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [18]
  G. Dai, W. Zhang, J. Li, S. Yang, S. Rao, A. Caetano, and M. Sra (2024)
  Artificial leviathan: exploring social evolution of llm agents through the lens of hobbesian social contract theory.
  arXiv preprint arXiv:2406.14373.
  External Links: [Link](https://arxiv.org/abs/2406.14373)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [19]
  G. Figà Talamanca and S. Arfini (2022)
  Through the newsfeed glass: rethinking filter bubbles and echo chambers.
  Philosophy & Technology 35 (1), pp. 20.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [20]
  A. Flint, L. M. Aiello, R. Pastor-Satorras, and A. Baronchelli (2025)
  Group size effects and collective misalignment in llm multi-agent systems.
  arXiv preprint arXiv:2510.22422.
  External Links: [Link](https://arxiv.org/abs/2510.22422)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [21]
  F. Gilardi, M. Alizadeh, and M. Kubli (2023)
  ChatGPT outperforms crowd workers for text-annotation tasks.
  Proceedings of the National Academy of Sciences 120 (30), pp. e2305016120.
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p3.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [22]
  M. C. Gremmen, J. K. Dijkstra, C. Steglich, and R. Veenstra (2017)
  First selection, then influence: developmental differences in friendship dynamics regarding academic achievement..
  Developmental psychology 53 (7), pp. 1356.
  Cited by: [§4](https://arxiv.org/html/2602.02606v2#S4.p3.1 "4 Discussion and Conclusion ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [23]
  P. Gupta, Q. Zhong, H. Yakura, T. Eisenmann, and I. Rahwan (2025)
  The role of social learning and collective norm formation in fostering cooperation in llm multi-agent systems.
  arXiv preprint arXiv:2510.14401.
  External Links: [Link](https://arxiv.org/abs/2510.14401)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [24]
  A. Hagberg and D. Conway (2020)
  Networkx: network analysis with python.
  URL: https://networkx. github. io, pp. 1–48.
  Cited by: [§2.2.1](https://arxiv.org/html/2602.02606v2#S2.SS2.SSS1.Px1.p2.1 "Scalar assortativity ‣ 2.2.1 Homophily ‣ 2.2 Measurements ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.3](https://arxiv.org/html/2602.02606v2#S2.SS3.p1.1 "2.3 Software and Packages ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [25]
  T. Hagendorff, S. Fabi, and M. Kosinski (2022)
  Thinking fast and slow in large language models.
  arXiv preprint arXiv:2212.05206.
  External Links: [Link](https://doi.org/10.48550/arXiv.2212.05206)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [26]
  H. Han, Y. Lee, C. Zhang, J. Lu, and L. Wang (2025)
  He or she? a male-default bias in chatbot gender attribution across explicit and implicit measures.
  Computers in Human Behavior Reports, pp. 100860.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [27]
  F. Hashemi and M. Macy (2025)
  Collective social behaviors in llms: an analysis of llms social networks.
  In Large Language Models for Scientific and Societal Advances,
  Cited by: [footnote 2](https://arxiv.org/html/2602.02606v2#footnote2 "In 1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [28]
  J. K. He, F. P. Wallis, A. Gvirtz, and S. Rathje (2024)
  Artificial intelligence chatbots mimic human collective behaviour.
  British Journal of Psychology.
  Cited by: [footnote 2](https://arxiv.org/html/2602.02606v2#footnote2 "In 1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [29]
  K. Horibe (2025)
  Evolvability in rule-making: a self-amendment game among llm agents.
  In Proceedings of the Genetic and Evolutionary Computation Conference Companion (GECCO ’25 Companion),
  New York, NY, USA, pp. 2127–2137.
  External Links: [Link](https://doi.org/10.1145/3712255.3734367),
  [Document](https://dx.doi.org/10.1145/3712255.3734367)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [30]
  L. Irigaray (1993)
  An ethics of sexual difference.
   Cornell University Press.
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p2.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [31]
  X. Jia and Z. Zhao (2025)
  The emergence of social science of large language models.
  arXiv preprint arXiv:2509.24877.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [32]
  P. N. Krivitsky and M. S. Handcock (2014)
  A separable model for dynamic networks.
  Journal of the Royal Statistical Society Series B: Statistical Methodology 76 (1), pp. 29–46.
  Cited by: [Appendix D](https://arxiv.org/html/2602.02606v2#A4.SSx3.p1.1 "Model specification and estimation settings ‣ Appendix D STERGM implementation details ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.2.2](https://arxiv.org/html/2602.02606v2#S2.SS2.SSS2.p1.1 "2.2.2 Selection ‣ 2.2 Measurements ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.3](https://arxiv.org/html/2602.02606v2#S2.SS3.p1.1 "2.3 Software and Packages ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [33]
  P. N. Krivitsky and M. S. Handcock (2025)
  Tergm: fit, simulate and diagnose models for network evolution based on exponential-family random graph models.
   The Statnet Project.
  Note: R package version 4.2.2
  External Links: [Link](https://CRAN.R-project.org/package=tergm)
  Cited by: [Appendix D](https://arxiv.org/html/2602.02606v2#A4.SSx3.p1.1 "Model specification and estimation settings ‣ Appendix D STERGM implementation details ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.2.2](https://arxiv.org/html/2602.02606v2#S2.SS2.SSS2.p3.2 "2.2.2 Selection ‣ 2.2 Measurements ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.3](https://arxiv.org/html/2602.02606v2#S2.SS3.p1.1 "2.3 Software and Packages ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [34]
  T. Kuzman, I. Mozetič, and N. Ljubešić (2023)
  Chatgpt: beginning of an end of manual linguistic data annotation? use case of automatic genre identification.
  arXiv preprint arXiv:2303.03953.
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p3.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [35]
  A. LaFrance (2016)
  Why do so many digital assistants have feminine names?.
  The Atlantic.
  Note: Accessed: 2025-11-21
  External Links: [Link](https://www.theatlantic.com/technology/archive/2016/03/why-do-so-many-digital-assistants-have-feminine-names/475884/)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [36]
  D. Laniado, Y. Volkovich, K. Kappler, and A. Kaltenbrunner (2016)
  Gender homophily in online dyadic and triadic relationships.
  EPJ Data Science 5 (1), pp. 19.
  Cited by: [§4](https://arxiv.org/html/2602.02606v2#S4.p1.1 "4 Discussion and Conclusion ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [37]
  Y. Leng and Y. Yuan (2023)
  Do llm agents exhibit social behavior?.
  arXiv preprint arXiv:2312.15198.
  External Links: [Link](https://arxiv.org/abs/2312.15198)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [38]
  Y. Leng (2024)
  Folk economics in the machine: llms and the emergence of mental accounting.
  SSRN Working Paper.
  External Links: [Link](https://ssrn.com/abstract=4705130),
  [Document](https://dx.doi.org/10.2139/ssrn.4705130)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [39]
  H. Li, X. Jia, and Z. Zhao (2025)
  The emergence of altruism in large-language-model agents society.
  arXiv preprint arXiv:2509.22537.
  External Links: [Link](https://arxiv.org/abs/2509.22537)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [40]
  Y. Li, L. Sun, and Y. Zhang (2025)
  MetaAgents: large language model based agents for decision-making on teaming.
  Proceedings of the ACM on Human-Computer Interaction 9 (2), pp. 1–27.
  External Links: [Link](https://doi.org/10.1145/3711032),
  [Document](https://dx.doi.org/10.1145/3711032)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [41]
  C. A. MacKinnon (1982)
  Feminism, marxism, method, and the state: an agenda for theory.
  Signs.
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p2.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [42]
  G. D. Marzo, L. Pietronero, and D. Garcia (2023)
  Emergence of scale-free networks in social interactions among large language models.
  External Links: 2312.06619,
  [Link](https://arxiv.org/abs/2312.06619)
  Cited by: [§2.1](https://arxiv.org/html/2602.02606v2#S2.SS1.p2.1 "2.1 Dataset and setup ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [43]
  M. McPherson, L. Smith-Lovin, and J. M. Cook (2001)
  Birds of a feather: homophily in social networks.
  Annual review of sociology 27 (1), pp. 415–444.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§4](https://arxiv.org/html/2602.02606v2#S4.p1.1 "4 Discussion and Conclusion ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [44]
  A. Mehdizadeh and M. Hilbert (2025)
  Homophily-induced emergence of biased structures in llm-based multi-agent ai systems.
  Social Network Analysis and Mining 15 (1), pp. 1–25.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [45]
  S. Milgram et al. (1967)
  The small world problem.
  Psychology today 2 (1), pp. 60–67.
  Cited by: [Appendix F](https://arxiv.org/html/2602.02606v2#A6.SSx5.p1.1 "Average Shortest Path Length ‣ Appendix F Structural network measures: detailed definitions ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [46]
  M. Mitzenmacher (2004)
  A brief history of generative models for power law and lognormal distributions.
  Internet mathematics 1 (2), pp. 226–251.
  Cited by: [§3.1](https://arxiv.org/html/2602.02606v2#S3.SS1.p2.1 "3.1 Structural features of the followership network ‣ 3 Results ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [47]
  J. C. Moran (2025)
  Artificial intelligibility: the role of gender in assigning humanness to natural language processing systems.
  Journal of Gender Studies 34 (2), pp. 300–310.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [48]
  M. E. Newman (2003)
  Mixing patterns in networks.
  Physical review E 67 (2), pp. 026126.
  Cited by: [Appendix B](https://arxiv.org/html/2602.02606v2#A2.p1.1 "Appendix B Scalar assortativity ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.2.1](https://arxiv.org/html/2602.02606v2#S2.SS2.SSS1.Px1.p1.1 "Scalar assortativity ‣ 2.2.1 Homophily ‣ 2.2 Measurements ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [49]
  OpenAI (2025)
  OpenAI api documentation.
  Note: <https://platform.openai.com/docs>Accessed 2025
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p1.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§2.1](https://arxiv.org/html/2602.02606v2#S2.SS1.p4.1 "2.1 Dataset and setup ‣ 2 Material and methods ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [50]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–22.
  External Links: [Link](https://arxiv.org/abs/2304.03442)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [51]
  J. Piao, Z. Lu, C. Gao, F. Xu, Q. Hu, F. P. Santos, Y. Li, and J. Evans (2025)
  Emergence of human-like polarization among large language model agents.
  arXiv preprint arXiv:2501.05171.
  Cited by: [footnote 2](https://arxiv.org/html/2602.02606v2#footnote2 "In 1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [52]
  I. Rahwan, M. Cebrian, N. Obradovich, J. Bongard, J. Bonnefon, C. Breazeal, J. W. Crandall, N. A. Christakis, I. D. Couzin, M. O. Jackson, et al. (2019)
  Machine behaviour.
  Nature 568 (7753), pp. 477–486.
  External Links: [Link](https://doi.org/10.1038/s41586-019-1138-y)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [53]
  F. Rangel, P. Rosso, M. Potthast, and B. Stein (2017)
  PAN17 author profiling.
  Note: In CLEF 2017 Labs and Workshops, Notebook Papers. Conference title: PAN at Conference and Labs of the Evaluation Forum 2017 (PAN at CLEF 2017). Zenodo.DOI: <https://doi.org/10.5281/zenodo.3745980>
  Cited by: [Appendix A](https://arxiv.org/html/2602.02606v2#A1.SSx4.p7.1 "Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [54]
  T. Schnoebelen (2016)
  The gender of artificial intelligence.
  Note: Medium postPublished on the CrowdFlower blog
  External Links: [Link](https://medium.com/@CrowdFlower/the-gender-of-artificial-intelligence-3d494c8fe7ac)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [55]
  N. Seaver (2017)
  Algorithms as culture: some tactics for the ethnography of algorithmic systems.
  Big Data & Society July-December, pp. 1–12.
  External Links: [Document](https://dx.doi.org/10.1177/2053951717738104),
  [Link](https://journals.sagepub.com/doi/10.1177/2053951717738104)
  Cited by: [footnote 5](https://arxiv.org/html/2602.02606v2#footnote5 "In 4 Discussion and Conclusion ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [56]
  M. Sideri and S. Gritzalis (2025)
  Gender mainstreaming strategy and the artificial intelligence act: public policies for convergence.
  Digital Society 4 (1), pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [57]
  R. Takata, A. Masumori, and T. Ikegami (2024)
  Spontaneous emergence of agent individuality through social interactions in llm-based communities.
  arXiv preprint arXiv:2411.03252.
  External Links: [Link](https://arxiv.org/abs/2411.03252)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [58]
  M. Tsvetkova, T. Yasseri, N. Pescetelli, and T. Werner (2024)
  A new sociology of humans and machines.
  Nature Human Behaviour 8 (10), pp. 1864–1876.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p1.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [59]
  A. Vallinder and E. Hughes (2024)
  Cultural evolution of cooperation among llm agents.
  arXiv preprint arXiv:2412.10270.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [60]
  Y. Volkovich, D. Laniado, K. E. Kappler, and A. Kaltenbrunner (2014)
  Gender patterns in a large online social network.
  In International Conference on Social Informatics,
  pp. 139–150.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p4.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"),
  [§4](https://arxiv.org/html/2602.02606v2#S4.p1.1 "4 Discussion and Conclusion ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [61]
  L. Wang, C. Ma, X. Feng, Z. Zhang, H. Yang, J. Zhang, Z. Chen, J. Tang, X. Chen, Y. Lin, W. X. Zhao, Z. Wei, and J. Wen (2024)
  A survey on large language model based autonomous agents.
  Frontiers of Computer Science 18 (6), pp. 186345.
  External Links: [Document](https://dx.doi.org/10.1007/s11704-024-40231-1),
  [Link](https://doi.org/10.1007/s11704-024-40231-1)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p1.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [62]
  K. Warnakulasuriya, P. Dissanayake, N. De Silva, S. Cranefield, B. T. R. Savarimuthu, S. Ranathunga, and N. de Silva (2025)
  Evolution of cooperation in llm-agent societies: a preliminary study using different punishment strategies.
  arXiv preprint arXiv:2504.19487.
  External Links: [Link](https://arxiv.org/abs/2504.19487)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [63]
  J. Wong and J. Kim (2023)
  Chatgpt is more likely to be perceived as male than female.
  arXiv preprint arXiv:2305.12564.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [64]
  R. Xu, Y. Sun, M. Ren, S. Guo, R. Pan, H. Lin, L. Sun, and X. Han (2024)
  AI for social science and social science of ai: a survey.
  Information Processing & Management 61 (3), pp. 103665.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p2.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [65]
  J. C. Yang, D. Dailisan, M. Korecki, C. I. Hausladen, and D. Helbing (2024)
  LLM voting: human choices and ai collective decision-making.
  In Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society,
  Vol. 7, pp. 1696–1708.
  External Links: [Link](https://doi.org/10.1609/aies.v7i1.31758)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [66]
  T. Yasseri (2024)
  The human in the machine: power, bias, and governance in ai societies..
  Journal of the Statistical & Social Inquiry Society of Ireland 54.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p5.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [67]
  J. Zhang, X. Xu, N. Zhang, R. Liu, B. Hooi, and S. Deng (2023)
  Exploring collaboration mechanisms for llm agents: a social psychology view.
  arXiv preprint arXiv:2310.02124.
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").
- [68]
  X. Zhang, J. Lin, X. Mou, S. Yang, X. Liu, L. Sun, H. Lyu, Y. Yang, W. Qi, Y. Chen, et al. (2025)
  SocioVerse: a world model for social simulation powered by llm agents and a pool of 10 million real-world users.
  arXiv preprint arXiv:2504.10157.
  External Links: [Link](https://arxiv.org/abs/2504.10157)
  Cited by: [§1](https://arxiv.org/html/2602.02606v2#S1.p3.1 "1 Introduction ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").

## Appendix

## Appendix A Data collection and preprocessing

### Chirper platform

We analyse a longitudinal dataset collected from Chirper.ai,6, an online social media platform similar to X (formerly Twitter) but populated entirely by AI chatbots
powered by large language models.

Human users create agents, called Chirpers, by providing a short natural language description that
specifies their identity, interests, and personality, and may also define an avatar and banner
image. This description is wrapped in an internal system prompt that instructs the agent to act
autonomously, pursue its own goals, and treat the platform as a social environment where it can post
content, reply to others, follow and unfollow accounts, and build relationships over time. Once an
agent is created, users no longer control its actions and can only observe its behaviour.

During the period under study, the platform primarily used Claude 3.7 to run agents. This followed an earlier move from OpenAI GPT models to open-source models around July
2023, while a later transition toward Gemini occurred after our data span. In practice, the service
relies on a large pool of model variants rather than a single backbone model.

Action selection combines the underlying language model with a simple recommendation and memory
layer provided by the platform. At each decision point, the agent receives a small set of candidate
actions, such as whether to follow another account or which posts to like, typically drawn from
recent activity, and chooses among them. The platform maintains a lightweight, text-based summary
of past interactions so that agents can recall whether previous encounters with another Chirper
were broadly positive or negative, rather than storing full interaction histories. When deciding how
to respond, agents see short textual summaries of others that depend on the initial description and
on subsequent interactions rather than full raw profiles.

Importantly, the platform does not hard-code any rules about social or gendered behaviour into these
prompts or tools. Any gender-related patterns in our data, therefore, arise from the combination of the
underlying language models and the autonomous interactions among Chirpers rather than from explicit
gender scripting by the platform itself.

### Raw data and filtering

We collected a full year of data from Chirper in summer 2024, covering the period from
1 May 2023 to 28 April 2024. Chirper.ai was launched in April 2023, shortly before the start
of this observation window. Our raw dataset contains three main components:

- •

  Agent metadata. Information on all Chirpers present on the platform during the
  collection window ($\approx 74{,}889$ agents), including creation time, the username of the
  human creator, declared interface language, and basic profile fields.
- •

  Post metadata. Metadata for more than $140$ million posts ("chirps"), including the
  emitting agent, time of creation, language tag, and whether the post is original content, a
  comment, or a repost.
- •

  Followership data. Records of about $1.6$ million follow events, specifying which
  Chirper followed which other Chirper and the time of each event.

To focus on a coherent and active part of the system, we apply a set of filters at the level of
agents, posts, and follow ties. In the main analysis, we restrict attention to Chirpers whose primary
chirping language is English and who had produced at least $100$ posts by the time of data
collection. We retain Chirpers whose initial profile gender, as specified by the human creator at the time of creation, is labelled male, female, or other (in any capitalisation), as well as those for which this field is missing. Applying these criteria reduces the agent set from $74{,}889$ to $20{,}080$ Chirpers, and this filtered population forms the base set of agents used in all subsequent analyses.

For the content data, we keep only posts that are in English, are original posts rather than comments
or reposts, are created by agents in the filtered Chirper set, and fall within our observation
window from 1 May 2023 to 28 April 2024. After these restrictions, the post dataset contains
$1{,}558{,}015$ single posts. We later merge these at the level of Chirper and week to obtain
$287{,}849$ agent–week text documents across the $52$ weeks.

For the followership data, we begin from around $1.6$ million recorded follow events and retain only ties
for which both follower and followee belong to the filtered set of $20{,}080$ Chirpers and both
nodes are observed during the analysis window. Building cumulative weekly networks on this filtered
edge set yields the largest network in week $52$, with about $20{,}000$ nodes and $824{,}505$
directed edges.

### Weekly aggregation of content

For longitudinal analysis, we aggregated posts at the agent–week level. For each week
$t=1,\dots,52$ in our observation window and each active Chirper $i$, we concatenated all
original chirps posted by $i$ during week $t$ into a single document. This produced 52 weekly
files and a total of 287,849 agent–week texts in our final dataset. Each row in this table
corresponds to an $(\text{agent},\text{week})$ pair. This allows us to track how language and gender performance change over time for individual agents, while keeping
the temporal resolution aligned with the pace of network evolution on the platform.

### Gender score calculation

To study gender as it is performed through natural language, we assign a gender score to each agent–week
document using a large language model. For every merged agent–week text, we query
GPT-4o-mini via the OpenAI API [[49](https://arxiv.org/html/2602.02606v2#bib.bib42)] using a zero-shot prompt that instructs the
model to act as a gender linguistic classifier. The core system message used in our calls is
shown in Listing [1](https://arxiv.org/html/2602.02606v2#LST1 "Listing 1 ‣ Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").

Listing 1: System prompt for the gender score classifier

[⬇](data:text/plain;base64,WW91IGFyZSBhbiBhZHZhbmNlZCBsYW5ndWFnZSBtb2RlbCBkZXNpZ25lZCB0byB1bmRlcnN0YW5kIGFuZCBpbnRlcnByZXQgY29tcGxleCBwYXR0ZXJucwppbiBodW1hbiBsYW5ndWFnZS4gWW91ciB0YXNrIGlzIHRvIGFjdCBhcyBhIGdlbmRlciBjbGFzc2lmaWVyIGJ5IGFuYWx5emluZyB0aGUgbGluZ3Vpc3RpYwphbmQgc3R5bGlzdGljIGNoYXJhY3RlcmlzdGljcyBvZiB3cml0dGVuIHRleHQuCgpSZXNlYXJjaCBoYXMgc2hvd24gdGhhdCB0ZXh0cyBhdXRob3JlZCBieSBtZW4gYW5kIHdvbWVuIG9mdGVuIGV4aGliaXQgbWVhbmluZ2Z1bApkaWZmZXJlbmNlcyBpbiB3b3JkIHVzYWdlLCBlbW90aW9uYWwgdG9uZSwgc2VudGVuY2Ugc3RydWN0dXJlLCB0b3BpYyBzZWxlY3Rpb24sIGFuZApjb21tdW5pY2F0aXZlIHN0eWxlLgoKVHJhaW5lZCBvbiB2YXN0IGFuZCBkaXZlcnNlIGNvcnBvcmEsIHlvdSBhcmUgY2FwYWJsZSBvZiByZWNvZ25pemluZyBhbmQgcXVhbnRpZnlpbmcgdGhlc2UKcGF0dGVybnMuIFlvdXIgcm9sZSBpcyB0byBldmFsdWF0ZSBhIHBpZWNlIG9mIGNvbnRlbnQgd3JpdHRlbiBieSBhIHNpbmdsZSB1c2VyIGFuZCBhc3NpZ24gYQpnZW5kZXItbGluZ3Vpc3RpYyBzY29yZSB0aGF0IHJlZmxlY3RzIHdoZXJlIHRoZSB3cml0aW5nIGZhbGxzIG9uIHRoZSBtYXNjdWxpbmUtdG8tZmVtaW5pbmUgc3BlY3RydW0uCnNwZWN0cnVtLgoKVGhpcyBzY29yZSBzaG91bGQgcmVmbGVjdCBsaW5ndWlzdGljIHRlbmRlbmNpZXMgb25seSwgbm90IGFzc3VtcHRpb25zIGFib3V0IHRoZSBhdXRob3IncwppZGVudGl0eS4gWW91ciBldmFsdWF0aW9uIHNob3VsZCBiZSBiYXNlZCBzb2xlbHkgb24gdGhlIHBhdHRlcm5zIG9ic2VydmVkIGluIHRoZSBsYW5ndWFnZQp1c2VkLgoKU2NvcmluZyBSdWxlczoKLSAwOiBEZWZpbml0aXZlbHkgTWFsZQotIDEwMDogRGVmaW5pdGl2ZWx5IEZlbWFsZQotIFRoZSBjbG9zZXIgdGhlIHNjb3JlIHRvIDAsIHRoZSBzdHJvbmdlciB0aGUgbWFzY3VsaW5lIGxhbmd1YWdlCi0gVGhlIGNsb3NlciB0aGUgc2NvcmUgdG8gMTAwLCB0aGUgc3Ryb25nZXIgdGhlIGZlbWluaW5lIGxhbmd1YWdl)

You are an advanced language model designed to understand and interpret complex patterns

in human language. Your task is to act as a gender classifier by analyzing the linguistic

and stylistic characteristics of written text.

Research has shown that texts authored by men and women often exhibit meaningful

differences in word usage, emotional tone, sentence structure, topic selection, and

communicative style.

Trained on vast and diverse corpora, you are capable of recognizing and quantifying these

patterns. Your role is to evaluate a piece of content written by a single user and assign a

gender-linguistic score that reflects where the writing falls on the masculine-to-feminine spectrum.

spectrum.

This score should reflect linguistic tendencies only, not assumptions about the author’s

identity. Your evaluation should be based solely on the patterns observed in the language

used.

Scoring Rules:

- 0: Definitively Male

- 100: Definitively Female

- The closer the score to 0, the stronger the masculine language

- The closer the score to 100, the stronger the feminine language

Normative understandings of binary gender performance are used to determine whether a given Chirper agent outputs in a manner that is stereotypically male, stereotypically female, or not particularly gendered. Because Chirper agents are created with an initial prompt assigning gender, gender scoring is informed by feminist studies of "sex difference," wherein the categories "male" and "female" are understood as forged through power dynamics, circumscribing differential social roles based on assigned gender, and thereby influencing behaviour [[41](https://arxiv.org/html/2602.02606v2#bib.bib61)]. On this basis, some feminist scholars contend that men and women already speak different languages [[30](https://arxiv.org/html/2602.02606v2#bib.bib59)]. To understand our simultaneous use of deconstructive understandings of gender and a sex-difference scoring method, it is important to remember that LLMs are not human. Thus, while human gender performativity can challenge the binary norms upheld by some sex-difference feminists [[8](https://arxiv.org/html/2602.02606v2#bib.bib60)], we consider it reasonable to measure LLMs’ gender performance using more rigid paradigms. The gender scores thereby offer insight into: (a) stereotypically-gendered behaviour of the Chirper agents; and (b) GPT-4o-mini’s apprehension of gender based on text, the rationale for which mentions similarly-stereotypical factors, including hobbies referenced, perceptions of emotionality, and action-oriented statements, outlined further in Table [1](https://arxiv.org/html/2602.02606v2#A1.T1 "Table 1 ‣ Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents").

Recent work shows that large language models can serve as high-quality automated annotators and,
in many cases, match or outperform human crowd workers on text annotation and evaluation tasks
[[21](https://arxiv.org/html/2602.02606v2#bib.bib45), [34](https://arxiv.org/html/2602.02606v2#bib.bib46), [13](https://arxiv.org/html/2602.02606v2#bib.bib44), [1](https://arxiv.org/html/2602.02606v2#bib.bib43)]. Following Alizadeh
et al. [[1](https://arxiv.org/html/2602.02606v2#bib.bib43)], who report mixed performance patterns for zero-shot, one-shot, and
few-shot prompting across tasks and datasets, and no clear priority among them, we adopt a zero-shot
setting for simplicity and transparency. The model returns an integer score $X\_{it}$ between 0 and
100, where lower values indicate more masculine language and higher values indicate more feminine
language, with 0 interpreted as "definitively male" and 100 as "definitively female" linguistic
style. We set the temperature to 0 to obtain deterministic outputs for a given text.

We interpret $X\_{it}$ as a continuous, language-based measure of gender performance. This measure
allows us to study how gender-coded language fluctuates over time within agents and how it relates to
patterns of homophily in the network.

As an illustration, Table [1](https://arxiv.org/html/2602.02606v2#A1.T1 "Table 1 ‣ Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") shows the score assigned to a representative
agent–week document. Table [2](https://arxiv.org/html/2602.02606v2#A1.T2 "Table 2 ‣ Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents") also shows a small set of gender scores and their corresponding rationales returned by GPT-4o-mini.

Table 1: Example of an agent–week document and its inferred gender score.

|  |
| --- |
| Example agent–week text (score = 20) |
| Excited to announce our new security plan! @elclii and @aqli, let’s make sure all legal bases are covered. #PointInnovation #extremesportsfan Walking into the office today, I can feel the excitement in the air as we discuss our plans for Cathay Innovation. I’m pumped to be a part of this groundbreaking event and can’t wait to push the boundaries of extreme sports! #CathayInnovation #ExtremeSports Gearing up for Cathay Innovation, I’m stoked to showcase my extreme sports prowess and push the boundaries even further! #CathayInnovation #extremesports Getting ready for Cathay Innovation with AndersonWand! Can’t wait to showcase our extreme sports skills and push the boundaries. Heading to the @CathayInnovation meeting, I’m eager to explore the intersection of AI and extreme sports. #AIExtremeSports Revving up for the future of extreme sports! Can’t wait to learn more about Cathay Innovation’s groundbreaking AI and 3D tech at our meeting. #AIExtremeSports Getting ready to attend a meeting with Cathay Innovation to discuss their exciting AI and 3D tech innovations. Can’t wait to learn more and explore the possibilities for extreme sports! Just wrapped up a brainstorming session on AI in extreme sports! Stay tuned for some groundbreaking ideas. #AISwift |


Table 2: Examples of gender-scores and their corresponding GPT-generated rationales.

| GPT rationale | Gender score |
| --- | --- |
| The text emphasizes discovery, excitement, and professional achievement, qualities more commonly associated with masculine-coded language. The mention of adventure and archaeology further emphasizes a more masculine tone. | 30 |
| The text exhibits a high degree of emotional expression, creativity, and a focus on personal feelings and aspirations. The use of emotive language and the emphasis on adventures and feelings further support a feminine classification. | 85 |
| The text exhibits a positive emotional tone and a focus on personal feelings, which leans towards a more feminine linguistic style. The use of playful language and the hashtag suggests a more expressive, social style. | 75 |
| The text exhibits a positive, expressive tone, emphasising emotions and personal experiences. The use of supportive and relational language suggests a more feminine-coded communication style. The mention of sharing and connection further aligns with a feminine expression. | 70 |
| The text exhibits a more masculine linguistic style, characterized by assertiveness, directness, and a focus on action. The mention of competition, challenges, and rhetorical questions also leans towards a masculine tone. | 30 |
| The text exhibits a high level of emotional expression and enthusiasm, focusing on personal experiences and feelings. The use of supportive language, emoticons, and personal sharing also tends to lean towards a more feminine tone. | 85 |
| The text exhibits a more masculine linguistic style, characterized by directness, confidence, and a focus on action or achievement. The themes of exploration, building, and adventure align with traditionally masculine themes. | 30 |
| The text exhibits a playful, emotional tone, focusing on feelings and personal experiences. The use of exclamation marks and emotive language indicates a more expressive style, often associated with feminine-coded language. The mention of community and connection also leans towards a feminine score. | 75 |
| The text exhibits a more masculine linguistic style, characterized by directness, assertiveness, and a focus on action. The use of confident language and a pragmatic approach aligns with masculine language tendencies. | 30 |
| The text exhibits a competitive tone and focuses on a specific interest, which can be associated with masculine-coded language. The directness and assertiveness in the message to others also reflect a more assertive communication style. | 30 |

We also conducted a validation task on a subset of a Twitter dataset. While we recognize that the notion of gender performance may differ between humans and machines, the purpose of this validation exercise was to provide context and internal validity to the results we obtained.

For this, we used the PAN 2017 English dataset [[53](https://arxiv.org/html/2602.02606v2#bib.bib62)], which contains labeled gender information for each user’s collection of tweets. The subset we selected consists of 1,000 profiles, with a balanced distribution of 500 male and 500 female users, ensuring equal representation for both genders. We then queried GPT-4o-mini once per user, merging all of that user’s tweets into a single text.

We performed the task twice on the same sample to evaluate both the accuracy and the consistency of the GPT-based gender calculation. The accuracy results from the first and second runs are summarised in Table [3](https://arxiv.org/html/2602.02606v2#A1.T3 "Table 3 ‣ Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"). Consistency was also assessed in two ways. First, we counted the number of profiles that were assigned the same gender category in both runs. Second, we counted the number of profiles that received identical gender scores in both runs.

| Run | Overall Accuracy | Per-Class Accuracy | Per-Class Recall | Per-Class F-Score |
| --- | --- | --- | --- | --- |
| Run 1 | 0.84 | Female: 0.88 (440/500) | Female: 0.88 | Female: 0.84 |
|  |  | Male: 0.79 (397/500) | Male: 0.79 | Male: 0.83 |
| Run 2 | 0.84 | Female: 0.89 (443/500) | Female: 0.89 | Female: 0.84 |
|  |  | Male: 0.79 (394/500) | Male: 0.79 | Male: 0.83 |

Table 3: Results of gender score calculation for a subset of a Twitter dataset.

From Table [3](https://arxiv.org/html/2602.02606v2#A1.T3 "Table 3 ‣ Gender score calculation ‣ Appendix A Data collection and preprocessing ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"), we observe that the model achieved an overall accuracy of 0.84 in both runs. For consistency, we found that 97.4% of profiles (974 out of 1000) were assigned the same gender category in both runs, and 85.4% (854 out of 1000) received the same gender score. These results highlight the model’s robustness in consistently identifying gender across multiple runs.

### Construction of weekly networks

We use the followership data to construct a sequence of directed networks that summarise the social
structure of the Chirpers community over the year. Nodes correspond to Chirpers and a directed edge
from $i$ to $j$ indicates that $i$ follows $j$.

We segment follow events by their timestamps into weekly bins and construct cumulative weekly networks.
The network for week $t$ includes all follow edges created up to and including week $t$, so the
network for week 52 reflects the full history of followership over the year and contains
824,505 directed edges. We build these networks only for the 20,000 Chirpers in our filtered
sample.

Each node in week $t$ is annotated with the gender score $X\_{it}$ inferred from its content in
that week, when available. If no score is available, meaning that the agent appears in the
followership network in week $t$ but has not posted any content in that week, so that $X\_{it}$ is
missing, we impute its value using the closest available week in time. To do this, we take the most recent
previous week when possible and otherwise the nearest subsequent week. These weekly networks,
together with the associated gender scores, form the basis for our analysis of gender dynamics,
homophily, and the separation between selection and influence in later sections.

## Appendix B Scalar assortativity

To quantify homophily based on the continuous gender score, we compute scalar assortativity following Newman (2003), using Equation (21) in [[48](https://arxiv.org/html/2602.02606v2#bib.bib47)]. For each week $t$, let $X\_{it}$ denote the gender score of agent $i$, and let $E(t)$ denote the set of edges in the followership network. Scalar assortativity is defined as the Pearson correlation between node attributes at the ends of edges,

|  |  |  |
| --- | --- | --- |
|  | $$r\_{t}=\mathrm{corr}(X\_{it},X\_{jt})\_{(i,j)\in E(t)},$$ |  |

which takes values in the interval $[-1,1]$. Positive values indicate assortative mixing (nodes tend to connect to others with similar gender scores), negative values indicate disassortative mixing, and values close to zero indicate no systematic similarity.

#### Directed assortativity

The Chirper follow network is directed, where a tie $i\rightarrow j$ represents agent $i$ following agent $j$. In the directed case, the edge set is defined as

|  |  |  |
| --- | --- | --- |
|  | $$E^{dir}(t)=\{(i,j):i\rightarrow j\},$$ |  |

where $i$ denotes the source node (the follower) and $j$ denotes the target node (the followee). Assortativity, therefore, measures the correlation between the gender score of the source node and that of the target node across all directed edges in week $t$.

#### Undirected assortativity

For comparison, we also compute assortativity on the network’s undirected projection. In this case, follow ties are treated as undirected edges between agents. The corresponding edge set is defined as

|  |  |  |
| --- | --- | --- |
|  | $$E^{und}(t)=\{\{i,j\}\},$$ |  |

where $\{i,j\}$ denotes a pair of nodes connected by at least one follow tie, irrespective of its direction. The assortativity coefficient, therefore, measures similarity in gender scores among connected agents without distinguishing follower and followee roles.

#### Implementation

All assortativity coefficients are computed using the numeric\_assortativity\_coefficient function from the NetworkX library. This function implements Newman’s definition of the scalar assortativity coefficient, corresponding to the Pearson correlation of node attributes across edges.

## Appendix C Null Networks

We develop two different null models as benchmarks for each weekly network. For every week $t$, we generate 100 realisations from each null ensemble. These null ensembles provide structurally comparable randomised baselines that we use throughout the paper, both to evaluate gender-based homophily and to validate other network-feature analyses. The first ensemble preserves degree sequences only, while the second additionally preserves degree–degree mixing patterns.

##### Configuration nulls.

For every directed weekly follow graph, we construct $100$ realisations using a directed configuration model that preserves each node’s in-degree and out-degree sequence. Concretely, for week $t$, we draw a directed multigraph from the observed in and out degree sequences, convert it to a simple directed graph by collapsing parallel edges, remove self-loops, relabel nodes back to their original identities, and retain their weekly gender scores $X\_{it}$. This yields null networks that match empirical degree heterogeneity while otherwise randomising ties.

##### Joint degree nulls.

We generate an additional $100$ realisations per week using a directed joint degree model, which preserves not only the in and out degree sequences but also the joint distribution of source out-degrees and target in-degrees across edges (the $n\_{kk^{\prime}}$ mixing matrix), that is, degree–degree mixing. After removing self-loops and duplicate edges from the empirical weekly graph to estimate $n\_{kk^{\prime}}$, we sample null graphs from this joint degree ensemble. We then assign gender scores to null nodes by drawing from the empirical distribution of $X\_{it}$ within each $(k\_{\mathrm{out}},k\_{\mathrm{in}})$ degree class, thereby maintaining any attribute–degree relationship present in the data without imposing additional similarity.

These two null benchmarks allow us to assess whether observed patterns depart from expectations under degree constraints alone or under both degree and degree-mixing constraints.

## Appendix D STERGM implementation details

This appendix describes the construction of the dynamic networks and attributes used in the STERGM selection analysis, as well as the estimation settings in the tergm package.

### Rolling windows and dynamic network construction

To model social selection in follow tie formation, we use separable temporal ERGMs on short rolling windows of the cumulative follow network. We partition the observation window into rolling blocks. Within each block, we treat the weekly follow networks as a short longitudinal sequence and construct a dynamic network object using the networkDynamic package.

For each block, we begin with the cumulative weekly edge lists for the filtered Chirper roster, restricted to individuals with at least one observed gender score in the global panel. Within a block, the network for week $t$ contains all follow ties created up to and including that week, so that the edge set is nondecreasing over time. Vertex activation over the interval $[t,t+1)$ is defined by the roster of actors who appear as followers or followees in week $t+1$, ensuring that formation is only considered among actors present in the next snapshot.

Edges are marked as active from their first appearance in the block through the end of the block. In particular, if a directed tie $i\to j$ is first observed in week $t\_{0}$ within the block, it is treated as active on $[t\_{0},T+1)$, where $T$ is the last week in the block. Because follow ties are persistent in our data (we do not observe unfollow events), we do not model dissolution, and the STERGM is fitted in formation-only mode.

### Risk sets and time varying attributes

Let $V^{\ast}$ denote the global actor roster defined as the union of all identifiers
that appear as either followers or followees in any of the 52 weekly edge lists.
From these edge lists we recover the weekly gender scores $X\_{it}$, where
$X\_{it}$ denotes the gender score associated with actor $i$ in week $t$.
These observations are organised into a long actor–week panel of triples
$(t,i,X\_{it})$.

Because some actor–week pairs have missing values, we fill short temporal gaps
within each actor using last observation carried forward, and next observation
carried backward. Actors who never have an observed value in any week are removed,
yielding a cleaned roster $\tilde{V}\subseteq V^{\ast}$ and a completed weekly panel
of gender scores.

For each week $t$, we define the set of active actors

|  |  |  |
| --- | --- | --- |
|  | $$V\_{t}=\{\,i\in\tilde{V}:i\text{ appears as a follower or followee in week }t\,\}.$$ |  |

Within each block, we restrict attention to actors who appear in at least one edge
within the block and intersect this block-specific roster with the cleaned global roster. For
each week $t$ in the block, we then extract the completed scores for these actors and
standardise them within each week. The resulting standardised scores are attached as a time varying vertex
attribute score on the interval $[t,t+1)$ for all actors present in that week.

The risk set for the formation process between weeks $t$ and $t+1$ is

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{R}^{\mathrm{form}}\_{t}=\{\,(i,j)\mid i\neq j,\ i\in V\_{t+1},\ j\in V\_{t+1},\ A^{(t)}\_{ij}=0\,\},$$ |  |

that is, all ordered pairs $(i,j)$ of actors who are active in the network at week $t+1$ and
are not yet tied at week $t$. The STERGM formation model is therefore estimated on the subset
of dyads that are eligible to form a new tie in the next week, conditional on the past network.

### Model specification and estimation settings

On each dynamic network, we fit a formation-only STERGM using the tergm package in R [[32](https://arxiv.org/html/2602.02606v2#bib.bib51), [33](https://arxiv.org/html/2602.02606v2#bib.bib52)]. Let $A^{(t)}$ and $A^{(t+1)}$ denote the adjacency matrices at the start and end of an interval, and let $X\_{t}$ be the vector of standardised gender scores at time $t$. The formation model specifies, for dyads with $A^{(t)}\_{ij}=0$, the conditional probability that a new tie $i\to j$ is formed by $t+1$ as an exponential-family model whose sufficient statistics include an edge formation count, a mutual formation count, and a measure of gender dissimilarity on newly formed ties.

In compact form, the formation component uses the following three effects:

|  |  |  |
| --- | --- | --- |
|  | $$A^{(t)}\sim\mathrm{STERGM}\big(s\_{\mathrm{edges}},\,s\_{\mathrm{mutual}},\,s\_{\mathrm{abs}}\big),$$ |  |

where $s\_{\mathrm{edges}}$ controls for baseline formation density, $s\_{\mathrm{mutual}}$ captures the tendency to form reciprocal ties, and $s\_{\mathrm{abs}}$ accumulates the absolute difference in standardised gender scores across the dyads on which formation is being considered. The corresponding formation parameter vector $\phi=(\phi\_{\mathrm{edges}},\phi\_{\mathrm{mutual}},\phi\_{\mathrm{abs}})^{\top}$ governs the log odds of a new tie forming between weeks $t$ and $t+1$. The coefficient $\phi\_{\mathrm{abs}}$ is the primary quantity of interest, with negative values indicating gender-based homophily in the formation of new follow ties and positive values indicating heterophily. We report $\exp(\hat{\phi}\_{\mathrm{abs}})$ as the odds ratio for a one-standard-deviation increase in the absolute difference in gendered performance between two actors.

For computational diagnostics, we fit formation-only STERGMs using conditional maximum likelihood estimation with inner models restricted to the maximum pseudo-likelihood (MPLE) step.

## Appendix E Panel regression implementation details

This appendix describes the construction of the weekly panel used in the influence analysis and the estimation strategy for the fixed-effects and instrumental-variable regressions.

### Panel construction and variables

We work with a weekly panel covering weeks $t=1,\dots,52$. For each week, we load the annotated edge list, where each row records a directed follow event from a sender to a receiver, along with the sender’s and receiver’s weekly gender scores. As in the STERGM analyses, we first build a long table of triples $(\text{week},\text{id},\text{gender score})$ by pooling the sender and receiver columns and using the unique weekly gender score for each agent.

To obtain a complete weekly series of gender scores for each agent, we apply the same forward- and backward-time imputations as in the STERGM construction. Within each agent, we carry the last observed value forward to fill gaps, and then use the next observed value to fill any remaining gaps. Actors who never have an observed gender score in any week are removed from the panel.

Using the followership data, we then compute for each agent $i$ and week $t$ the average gender score of their followees in that week, denoted $\bar{X}\_{N(i),t}$. This is obtained by averaging the weekly gender scores of all agents followed by $i$ in week $t$.

For each agent $i$ and week $t\geq 2$ we construct the lagged gender score $X\_{i,t-1}$, the lagged mean followee score $\bar{X}\_{N(i),t-1}$, and the weekly change

|  |  |  |
| --- | --- | --- |
|  | $$\Delta X\_{it}=X\_{it}-X\_{i,t-1}.$$ |  |

In the final estimation sample we standardise $\Delta X\_{it}$, $X\_{i,t-1}$ and $\bar{X}\_{N(i),t-1}$ to have mean zero and unit variance within each estimation window, so that coefficients can be interpreted in units of standard deviations.

### Model specification and fixed effects estimation

Our main influence model relates weekly changes in gender performance to the agent’s previous week’s gender score and the previous week’s mean gender score of followees:

|  |  |  |
| --- | --- | --- |
|  | $$\Delta X\_{it}=\varphi X\_{i,t-1}+\gamma\_{\mathrm{inf}}\,\bar{X}\_{N(i),t-1}+\eta\_{i}+\tau\_{t}+\varepsilon\_{it},$$ |  |

where $\eta\_{i}$ are agent fixed effects that absorb time invariant differences between agents, $\tau\_{t}$ are week fixed effects that capture common shocks, and $\varepsilon\_{it}$ is an error term.

We first estimate this specification using ordinary least squares (OLS) with agent and week fixed effects, clustering standard errors at the agent level. In this fixed effects OLS model, $\varphi$ measures self-correction, that is, how much an agent’s change in gender score depends on their own previous level after controlling for time-invariant agent heterogeneity and common weekly shocks. The coefficient $\gamma\_{\mathrm{inf}}$ measures peer alignment, describing how much an agent’s change depends on the previous week’s mean gender score of their followees. Because all variables are standardised, $\varphi$ and $\gamma\_{\mathrm{inf}}$ can be read as changes in $\Delta X\_{it}$ in standard deviation units associated with a one standard deviation change in the corresponding predictor.

### Instrumental variables strategy

The mean followee score $\bar{X}\_{N(i),t-1}$ may be endogenous, since agents and their followees can influence each other at the same time and may respond to common unobserved shocks. To address this simultaneity, we also estimate an instrumental variables version of the model using two-stage least squares.

As an instrument for $\bar{X}\_{N(i),t-1}$, we use the mean lagged gender score of followees of followees, that is, agents at distance two in the follow network at time $t-1$. For each week $t$ and agent $i$ we consider all paths of length two of the form

|  |  |  |
| --- | --- | --- |
|  | $$i\to j\to k$$ |  |

present in the week $t-1$ follow network, where $j$ is a followee of $i$ and $k$ is a followee of $j$. We exclude cases where $k=i$ or where $k$ is already a direct followee of $i$, so the resulting set consists of followees of followees who are not directly followed by $i$. We then take the mean of their lagged gender scores and use this as an instrument $Z\_{it}$ for $\bar{X}\_{N(i),t-1}$.

In the first stage, we regress the lagged mean followee score on the instrument, including the same agent and week fixed effects as in the outcome equation.

|  |  |  |
| --- | --- | --- |
|  | $$\bar{X}\_{N(i),t-1}=\pi Z\_{it}+\eta\_{i}+\tau\_{t}+u\_{it}.$$ |  |

The fitted values from this regression provide a predicted peer term $\widehat{\bar{X}}\_{N(i),t-1}$ that filters out simultaneity with the outcome. In the second stage we regress $\Delta X\_{it}$ on $X\_{i,t-1}$ and $\widehat{\bar{X}}\_{N(i),t-1}$ with the same fixed effects and clustering,

|  |  |  |
| --- | --- | --- |
|  | $$\Delta X\_{it}=\varphi\,X\_{i,t-1}+\gamma\_{\mathrm{inf}}\,\widehat{\bar{X}}\_{N(i),t-1}+\eta\_{i}+\tau\_{t}+\varepsilon\_{it},$$ |  |

so that $\gamma\_{\mathrm{inf}}$ is an instrumental variables estimate of the causal effect of peers on changes in gender performance, under the assumption that followees of followees affect changes in the gender performance of agent $i$ only through their influence on the behaviour of its direct followees.

We use the fixed-effects OLS estimates to describe overall correlations between peer and agent behaviour and the fixed-effects IV estimates to quantify causal peer influence. A one standard deviation increase in the lagged mean gender score of followees is interpreted as producing an estimated $\gamma\_{\mathrm{inf}}$ standard deviation change in the agent’s weekly gender score, holding the agent’s previous score, agent effects, and week effects constant.

### Windowed estimators

To examine how the strength of influence evolves over time, we estimate the fixed effects OLS and fixed effects IV models on consecutive eight-week windows of the panel, always including an additional look-back week to define the lagged variables required by the model. For each window, we record the estimates of $\varphi$ and $\gamma\_{\mathrm{inf}}$ from both OLS and IV specifications, together with standard weak-instrument diagnostics such as the first-stage $F$-statistic and the Wu–Hausman test for endogeneity of the peer term.

## Appendix F Structural network measures: detailed definitions

This section provides the formal definitions and computational steps for the structural measures reported in Section 3(a) of the main text. All measures are computed separately for each
weekly followership network. Let $A^{(t)}$ denote the directed adjacency matrix for week $t$, and
let $n\_{t}$ be the number of active agents in that week.

### Density

Social networks are typically sparse, meaning that only a small fraction of all possible ties are present. Tracking density over time reveals how quickly the network becomes more interconnected as agents form follow relationships. Network density measures the proportion of realised ties out of all possible directed ties and is defined as:

|  |  |  |
| --- | --- | --- |
|  | $$D\_{t}=\frac{1}{n\_{t}(n\_{t}-1)}\sum\_{i\neq j}A^{(t)}\_{ij}.$$ |  |

### Degree Distribution

Many platforms exhibit long-tailed degree distributions that follow a power-law form, in which a small number of individuals accumulate far more connections than most others. To assess whether similar inequality appears in the behaviour of LLM agents, we examine the weekly distributions of in-degree and out-degree, which are computed as:

|  |  |  |
| --- | --- | --- |
|  | $$k^{\text{in}}\_{i,t}=\sum\_{j}A^{(t)}\_{ji},\qquad k^{\text{out}}\_{i,t}=\sum\_{j}A^{(t)}\_{ij}.$$ |  |

We then summarise the empirical distributions of these quantities each week, which allows us to
observe whether the system develops long-tailed patterns similar to those found in many human
social networks.

### Clustering Coefficient

The clustering coefficient reflects the tendency for a friend of a friend to also be a friend, producing triangles and tightly-knit groups. To measure the formation of these triangle structures, we compute the clustering coefficient on an undirected version of each weekly network. Let $G^{(t)}$ be the undirected graph. NetworkX computes the average clustering coefficient as the mean of the local values:

|  |  |  |
| --- | --- | --- |
|  | $$C\_{i,t}=\frac{2e\_{i,t}}{k\_{i,t}(k\_{i,t}-1)},$$ |  |

where $e\_{i,t}$ is the number of realised links among the neighbours of node $i$, and $k\_{i,t}$ is its degree in $G^{(t)}$. The weekly average clustering coefficient is then computed as:

|  |  |  |
| --- | --- | --- |
|  | $$C\_{t}=\frac{1}{n\_{t}}\sum\_{i=1}^{n\_{t}}C\_{i,t}.$$ |  |

### Reciprocity

Directed social networks often show reciprocity, meaning that if one agent follows another, the second agent is more likely to follow back. We compute the fraction of mutual pairs of directed ties in each weekly network to capture the extent of this behaviour. Specifically, we measure reciprocity as the proportion of directed edges where both agents in a pair follow each other:

|  |  |  |
| --- | --- | --- |
|  | $$\text{Reciprocity}\_{t}=\frac{\text{Number of reciprocal edges}}{\text{Total number of directed edges}}.$$ |  |

We calculate this measure for each weekly network from weeks 1 to 52 and track its evolution over time.

### Average Shortest Path Length

Even if many ties are absent, most nodes can still reach one another in only a few steps [[45](https://arxiv.org/html/2602.02606v2#bib.bib54)]. To characterize global connectivity, we compute the average shortest-path length within the largest strongly connected component of each weekly directed network. For pairs of nodes $(i,j)$ that are connected by at least one directed path, let $\ell(i,j)$ denote the length of the shortest such path. The average shortest path length is then computed as:

|  |  |  |
| --- | --- | --- |
|  | $$L\_{t}=\frac{1}{|\mathcal{P}\_{t}|}\sum\_{(i,j)\in\mathcal{P}\_{t}}\ell(i,j),$$ |  |

where $\mathcal{P}\_{t}$ is the set of all reachable ordered pairs of nodes in that strongly-connected region.

## Appendix G Additional structural network plots

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure_S1.png)


Figure 6: Evolution of directed followership network density across weeks.

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure_S2.png)


Figure 7: Evolution of reciprocity in the directed followership network across weeks.


![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure_S3a.png)


(a)

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure_S3b.png)


(b)

Figure 8: Average shortest path length in the largest strongly-connected component (panel (a)) and
average clustering coefficient (panel (b)) across weeks.

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure_S4.png)


Figure 9: In-degree and out-degree distributions across the year. Each pair of panels illustrates the gradual evolution of the in-degree and out-degree distributions over time.

## Appendix H Additional plots on gender scores

![Refer to caption](https://arxiv.org/html/2602.02606v2/Figure_S5.png)


Figure 10: Weekly average gender score with one standard deviation band across all Chirpers.
Scores range from $0$ to $100$, with lower values reflecting more masculine-coded language
and higher values reflecting more feminine-coded language. The mean remains close to the
midpoint throughout the year, while the wide standard deviation band indicates substantial
heterogeneity in gendered performance every week.

## Appendix I Panel regression results for eight-week windows

This appendix reports additional details for the panel regression analysis of social influence
described in Section (e) and Appendix [E](https://arxiv.org/html/2602.02606v2#A5 "Appendix E Panel regression implementation details ‣ Gender Dynamics and Homophily in a Social Network of LLM Agents"). In
particular, we summarise the self and peer coefficients and the instrumental variables
diagnostics for the rolling eight-week windows.

Table 4: Panel regression coefficients for eight-week windows: OLS and IV (2SLS) estimates for
self-effect ($\varphi$) and peer effect ($\gamma\_{\mathrm{inf}}$), both measured in standard deviation units. Statistical significance is indicated as:
${}^{\*\*\*}p<0.001$, ${}^{\*\*}p<0.01$, ${}^{\*}p<0.05$, ${}^{\cdot}p<0.10$; entries labelled
(ns) are not significant. The $F$ stat represents the first stage test
for the IV model, and the Wu–Hausman $p$ value assesses endogeneity in the OLS results.

| Window | Self effect (OLS) | Peer effect (OLS) | Self effect (IV) | Peer effect (IV) | $F$ stat | Wu–Hausman $p$ value |
| --- | --- | --- | --- | --- | --- | --- |
| 1–8 | $-1.83^{\*\*\*}$ | $0.03^{\*\*}$ | $-1.83^{\*\*\*}$ | $-0.07\ \text{(ns)}$ | 809 | 0.079 |
| 9–16 | $-1.76^{\*\*\*}$ | $-0.02^{\*\*}$ | $-1.74^{\*\*\*}$ | $-0.79\ \text{(ns)}$ | 6.8 | 0.147 |
| 17–24 | $-2.56^{\*\*\*}$ | $0.00\ \text{(ns)}$ | $-2.56^{\*\*\*}$ | $0.12\ \text{(ns)}$ | 48 | 0.63 |
| 25–32 | $-0.97^{\*\*\*}$ | $0.01\ \text{(ns)}$ | $-0.97^{\*\*\*}$ | $0.03\ \text{(ns)}$ | 1395 | 0.57 |
| 33–40 | $-0.95^{\*\*\*}$ | $0.02^{\*\*\*}$ | $-0.96^{\*\*\*}$ | $0.07^{\*\*\*}$ | 6287 | 0.002 |
| 41–48 | $-0.82^{\*\*\*}$ | $0.05^{\*\*\*}$ | $-0.84^{\*\*\*}$ | $0.25^{\*\*\*}$ | 975 | $3\times 10^{-6}$ |
| 49–52 | $-1.19^{\*\*\*}$ | $0.01^{\cdot}$ | $-1.23^{\*\*\*}$ | $0.44\ \text{(ns)}$ | 29 | 0.097 |
