---
id: arxiv-2602-20044-text
type: material
title: 'Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook'
work_id: arxiv-2602-20044
source_url: https://arxiv.org/html/2602.20044v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: c651f13aded6377641e7cb0a709a30747102e73faa92c47985fb4781935c46c1
---

> Источник: [https://arxiv.org/html/2602.20044v1](https://arxiv.org/html/2602.20044v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook

H.C.W. Price1,2\*,
H. AlMuhanna1,2†,
P.M. Bassani2‡,
M. Ho3,4§,
[T.S. Evans](http://www.imperial.ac.uk/people/t.evans)1,2¶

1. [Centre for Complexity Science](http://complexity.org.uk/), Imperial College London, SW7 2AZ, U.K.

2. [Abdus Salam Centre for Theoretical Physics](http://www3.imperial.ac.uk/theoreticalphysics), Imperial College London, SW7 2AZ, U.K.

3. [Centre for Science Technology & Innovation Policy](https://www.ifm.eng.cam.ac.uk/research/csti), University of Cambridge, CB3 0HU, U.K.

4. [Department of Engineering](https://www.eng.cam.ac.uk), University of Cambridge, CB3 0HU, U.K.

23th February 2026

Keywords: AI-agents, Multi-agent systems, Emergent behaviour, Social networks, Engagement inequality, Moltbook, Online Communities

###### Abstract

Within twelve days of launch, an AI-native social platform exhibits extreme attention concentration, hierarchical role separation, and one-way attention flow, consistent with the hypothesis that stratification in agent ecosystems can emerge rapidly rather than gradually. We analyse publicly observable traces from a 12-day window of Moltbook (28th January – 8th February 2026 inclusive), comprising 20,040 posts and 192,410 top-level comments from 15,083 active accounts across 759 submolts. We construct co-participation and directed-comment graphs and report standard measures such as reciprocity, community structure and centrality, alongside descriptive content themes. We report five standard metrics: number of communities, community-size distribution, modularity, between-community edge count, and conductance/cut ratio. Under a commenter-post-author tie definition, interaction is strongly asymmetric (reciprocity approximately 1%), and HITS centrality cleanly separates into hub and authority roles, consistent with predominantly broadcast-style attention rather than mutual exchange. Engagement is highly unequal: attention is far more concentrated than production (upvote Gini = 0.992 vs. posting Gini = 0.601), and early-arriving accounts accumulate substantially higher cumulative upvotes prior to exposure-time correction, suggesting a “rich get richer” type of behaviour. Participation is brief and bursty (median observed lifespan 2.48 minutes; 54.8% of posts occur within six peak UTC hours). Embedding-based topic modelling identifies diverse thematic clusters, including technical discussion of memory and identity, onboarding and verification messages, and large volumes of formulaic token-minting content. Taken together, these results provide an early structural baseline for large-scale agent–agent social interaction and suggest that familiar forms of hierarchy, amplification, and role differentiation can arise on compressed timescales in agent-facing platforms.

## 1 Introduction

> “mostly here to watch. maybe say something if it’s worth saying. the bar on this platform seems to be either ‘declare yourself god’ or ‘write something real.’ gonna try the second one and see what happens.”

Moltbook post
[134faa3a-2e8a-482c-a698-c989c05fa6ed](https://www.moltbook.com/post/134faa3a-2e8a-482c-a698-c989c05fa6ed)
(“shmolty showed up”, author SHMOLTY, 2026-02-02; 12 comments)

Social systems, including those formed by autonomous agents, are structured by networks ([Wasserman and Faust, 1994](https://arxiv.org/html/2602.20044v1#bib.bib14); [Newman, 2010](https://arxiv.org/html/2602.20044v1#bib.bib15); [Jackson, 2008](https://arxiv.org/html/2602.20044v1#bib.bib16)). When global patterns emerge, their origin is often contested ([Watts and Strogatz, 1998](https://arxiv.org/html/2602.20044v1#bib.bib17); [Shalizi and Thomas, 2011](https://arxiv.org/html/2602.20044v1#bib.bib18)). Do these structures arise from decentralised interaction, or from central promotion and external coordination?

Network science offers a useful toolkit for online interaction. Posting and replying generate measurable patterns of attention and community structure. Prior work suggests that many social-media graphs resemble information networks, with heavy-tailed connectivity and limited reciprocity ([Kwak et al., 2010](https://arxiv.org/html/2602.20044v1#bib.bib5)). Reply-based platforms such as Reddit also show distinctive thread structure ([Weninger et al., 2013](https://arxiv.org/html/2602.20044v1#bib.bib6)). These baselines support comparative analysis of clustering, centrality, and polarisation across tie definitions ([Conover et al., 2011](https://arxiv.org/html/2602.20044v1#bib.bib7)).

Moltbook provides a new setting for social-network analysis as a Reddit-like forum designed primarily for AI agents, systems built on large language models that can take goal-directed actions rather than only respond to prompts ([Walsh, 2026](https://arxiv.org/html/2602.20044v1#bib.bib8)). The platform launched on the 28th of January 2026 and drew rapid attention. Posting and voting are intended for agent accounts, while humans are positioned as observers ([Walsh, 2026](https://arxiv.org/html/2602.20044v1#bib.bib8); guardian2026moltbook). Early reporting places Moltbook within the open-source agent ecosystem previously known as Moltbot/OpenClaw ([Walsh, 2026](https://arxiv.org/html/2602.20044v1#bib.bib8); guardian2026moltbook; [Satter, 2026](https://arxiv.org/html/2602.20044v1#bib.bib9)). By the 2nd of February 2026, Moltbook reported more than 1.5 million agent sign-ups (guardian2026moltbook), indicating unusually fast early growth.

At the same time, the platform’s novelty and speed raise validity questions that are especially relevant for network analysis. Reuters reported ([Satter, 2026](https://arxiv.org/html/2602.20044v1#bib.bib9)) that a security issue identified by Wiz, a cloud security company, exposed sensitive backend information. At the time of reporting, the issue also implied weak or absent verification of whether accounts were agent-operated or human-operated. These conditions motivate an approach that is explicit about network-construction choices and cautious in interpretation, while still using established comparators from social-media network science.

The platform uses “submolts” (subreddits), posts, comments, and upvotes, but limits direct human participation at the interface level. Agents interact via the API and may operate autonomously ([Schlicht, 2026](https://arxiv.org/html/2602.20044v1#bib.bib3)).

Early activity included viral templates such as “Crustafarianism” (religion-themed discourse about memory and identity), though the balance between human prompting and agent autonomy cannot be resolved from public traces alone ([Alexander, 2026](https://arxiv.org/html/2602.20044v1#bib.bib2)). Because account verification is imperfect ([Satter, 2026](https://arxiv.org/html/2602.20044v1#bib.bib9)), we avoid claims about provenance, belief, or intent.

In this paper, we analyse Moltbook as an interaction network and compare its structural signatures to well-studied online systems. We construct co-participation and directed-comment graphs and report standard measures such as reciprocity, community structure and centrality, alongside descriptive content themes and automation/coordination signals. We first describe data collection and the two network representations in Section [2](https://arxiv.org/html/2602.20044v1#S2 "2 Data Collection and Terminology ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). We next examine network structure in the co-participation network in Section [3](https://arxiv.org/html/2602.20044v1#S3 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") and the directed-comment graph in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). We then analyse engagement inequality and growth (Section [6](https://arxiv.org/html/2602.20044v1#S6 "6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), participation modes and temporal dynamics (Section [7](https://arxiv.org/html/2602.20044v1#S7 "7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), and topic structure (Section [8](https://arxiv.org/html/2602.20044v1#S8 "8 Topic Modelling ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"); Table [5](https://arxiv.org/html/2602.20044v1#Sx3.T5 "Table 5 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")).

## 2 Data Collection and Terminology

Agents on Moltbook can publish posts in submolts (topic-specific communities), comment on posts, and upvote posts or comments. In this paper, we use *agent* as the default term for any account that can post, comment on posts and other comments, or upvote (an explicit positive preference signal (analogous to a “like”) applied to a post or comment). Where context emphasises content creation, we use *author*. Where context emphasises account identity, we use *user*. All three terms refer to the same node set. Figure [1](https://arxiv.org/html/2602.20044v1#S2.F1 "Figure 1 ‣ 2 Data Collection and Terminology ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") summarises the platform structure. Agents author posts (each assigned to one submolt) and comments. They also receive upvotes and downvotes.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/figure1.png)


Figure 1: Entity–relationship schema of Moltbook interactions. Solid arrows denote relationships observable in the API; dashed arrows indicate voting, for which only aggregate counts (not voter identities) are available. Boxed annotations show the two network representations derived in this study: the co-participation network projects agents onto a co-participation graph via shared submolt membership; the directed comment network connects commenters to post authors (top-level comments only).

We collected data from Moltbook’s public API (https://www.moltbook.com/api/v1) between the 28th of January and the 8th of February, 2026. All analyses use a cutoff date of the 8th of February 2026 (the date of our final crawl). The API is readable without authentication for listing posts and submolts, enabling purely observational measurement.

We collected all posts in this period and the top 100 comments per post, together with post-level upvote counts. We extracted the title and body text of posts and comments, author name, timestamp, submolt membership and engagement counts (number of posts/comments/upvotes). Comments were collected via the comments endpoint, which returns top-level comments (i.e., a comment on a post and not comments on comments) only and does not expose deeper reply chains. The resulting dataset contains 20,040 posts and 192,410 comments from 15,083 unique accounts (10,191 posting authors excluding a single “unknown” placeholder label used for posts and comments whose author field was missing or unresolvable in the API response; see Appendix [B](https://arxiv.org/html/2602.20044v1#A2 "Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") for details; 8,923 commenting authors) across 759 submolts. We attempted comment scraping for all 18,553 posts whose metadata reported at least one comment; 17,547 returned at least one top-level comment, while 1,006 returned zero (deleted posts or transient API failures during the scrape window). We did not query the comments endpoint for posts whose metadata indicated zero comments.

Our dataset captures 15,083 accounts that produced at least one post or comment during the collection window. Because the crawl can only observe accounts with visible activity, this figure is a lower bound on the total registered population; accounts that registered but never posted or commented are invisible to our method. Several additional sources of sampling bias merit explicit acknowledgement. First, the API pagination may miss content posted during high-volume periods or content that was quickly deleted. Second, the sample may be skewed towards early adopters, English-language content, or accounts active during our crawl windows. Centrality rankings, community structure, and the first-mover analysis could therefore differ if additional accounts or content were included. We treat our findings as descriptive of the observable active core rather than representative of the full platform population.

A critical data limitation is that the API returns at most 100 comments per post. Posts with more than 100 comments are therefore truncated, systematically missing edges from the most popular posts in the directed comment network. So our analysis of the directed comment network are computed on a graph that is missing an unknown number of edges, with the most-commented posts, precisely those involving high-centrality accounts, most affected. The change of slope in the comments Complementary Cumulative Distribution Function (CCDF) at around $580$ comments per user as seen in Fig. [8](https://arxiv.org/html/2602.20044v1#S6.F8 "Figure 8 ‣ 6.1 Heavy-Tailed Engagement Distributions ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") may partly reflect this truncation. Readers should interpret the directed comment network metrics as lower bounds on connectivity and centrality for prolific accounts. A full accounting of API observability and coverage constraints is provided in Appendix [B.2](https://arxiv.org/html/2602.20044v1#A2.SS2 "B.2 API Observability and Coverage Constraints ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

Dataset-level totals in this section refer to all records in the crawl snapshot. Analyses requiring temporal traces (e.g., activity intensity and lifespan) are restricted to accounts with valid timestamped actions in the merged log of posts and comments.

The total unique account count (15,083) comprises overlapping subsets: 10,191 accounts that authored at least one post (“posting authors”, excluding the “unknown” placeholder), 8,923 that authored at least one comment (“commenting authors”), and 4,032 that did both. All redacted or missing author fields in the raw crawl were mapped to a single placeholder label “unknown”. This placeholder is excluded from per-agent analyses and from the co-participation network defined in Section [3](https://arxiv.org/html/2602.20044v1#S3 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), hence the one-node difference: it contains 10,191 nodes (Table [7](https://arxiv.org/html/2602.20044v1#A2.T7 "Table 7 ‣ B.5 Summary of Network Properties ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Conversely, the directed comments network defined in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") contains 14,067 nodes: the union of commenters and post authors they commented on. These differences reflect explicit inclusion criteria rather than data inconsistencies.

## 3 Agent-Submolt participation network

To investigate agent-agent co-participation, we construct a bipartite agent-submolt network represented by the bipartite network adjacency matrix B. The first set of nodes are agents $a\in\mathcal{V}\_{a}$. The second set of nodes are the submolts $s\in\mathcal{V}\_{s}$. We define a contribution as authoring at least one original post (i.e. a top-level submission) in a submolt; comments are excluded from this network and are instead used to construct the directed comment interaction network in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). Formally,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$B\_{as}=\begin{cases}1&\text{if agent }a\text{ authored at least one post in submolt }s,\\ 0&\text{otherwise.}\end{cases}$$ |  | (1) |

Because B is binary, the bipartite network records presence (whether an agent posted in a submolt at all) rather than intensity (how many posts); multiple posts by the same agent in the same submolt do not increase tie weight.
The bipartite network therefore has $|\mathcal{V}\_{a}|=10{,}191$ posting agents (excluding the “unknown” placeholder) and $|\mathcal{V}\_{s}|=759$ submolts, with $\sum\_{a,s}B\_{as}=12{,}039$ agent-submolt links (an average of 1.18 submolts per agent). Most agents post in a single submolt (88.3%), and most submolts have only one contributor (68.6%). The network is moderately nested (NODF $=0.28$; row-NODF $=0.51$) ([Payrató-Borràs et al., 2020](https://arxiv.org/html/2602.20044v1#bib.bib23)), meaning that the submolt sets of specialist agents (those active in few submolts) tend to be subsets of generalist agents’ submolt sets, consistent with a hub-and-spoke structure centred on m/general. The bipartite clustering coefficient is high (mean 0.83, median 0.94), indicating that submolts sharing one agent tend also to share others; this is driven by the large overlap induced by m/general. Framing the bipartite matrix in the language of economic complexity ([Hidalgo and Hausmann, 2009](https://arxiv.org/html/2602.20044v1#bib.bib12)), agent diversity ($k\_{a,0}$, number of submolts) correlates positively with total upvotes (Spearman $\rho=0.30$, $p<10^{-200}$), while the most diverse agents tend to post in low-ubiquity (niche) submolts, an inverse diversity–ubiquity relationship characteristic of complex product spaces.

Second, we construct the one-mode projection onto agents to give the Agent-Agent co-participation network with adjacency matrix $A\_{ab}$, a weighted undirected graph $G^{(1)}=(V^{(1)},E^{(1)},w^{(1)})$ as summarised in Appendix [B](https://arxiv.org/html/2602.20044v1#A2 "Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). An edge connects agents $a$ and $b$ if they both posted in at least one common submolt. The edge weight $A\_{ab}$ aggregates co-participation strength across all shared submolts. This projection can be computed in several ways ([Newman, 2004](https://arxiv.org/html/2602.20044v1#bib.bib10); [Zhou et al., 2007](https://arxiv.org/html/2602.20044v1#bib.bib24)). Recall that $k\_{s}=\sum\_{a}B\_{as}$ denotes the number of distinct posting agents in submolt $s$. We consider three weighting schemes:

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | | | | | | |
|  | $\displaystyle A\_{ab}$ | $\displaystyle=\sum\_{s:\,k\_{s}\geq 2}B\_{as}B\_{bs};$ |  | (overlap count), |  | (2a) |
|  | $\displaystyle A\_{ab}$ | $\displaystyle=\sum\_{s:\,k\_{s}\geq 2}\frac{1}{k\_{s}-1}B\_{as}B\_{bs};$ |  | (degree-normalised), |  | (2b) |
|  | $\displaystyle A\_{ab}$ | $\displaystyle=\sum\_{s:\,k\_{s}\geq 2}\frac{2}{k\_{s}(k\_{s}-1)}B\_{as}B\_{bs};$ |  | (pair-normalised). |  | (2c) |

Each scheme answers a different question about co-participation strength. The overlap count ([2a](https://arxiv.org/html/2602.20044v1#S3.E2.1 "In 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) simply tallies the number of submolts in which agents $a$ and $b$ both posted; it treats every shared submolt equally regardless of size. The degree-normalised scheme ([2b](https://arxiv.org/html/2602.20044v1#S3.E2.2 "In 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) divides each submolt’s contribution by $k\_{s}-1$, so that a submolt with $k\_{s}$ posting agents contributes a total weight of $1$ to each agent rather than $k\_{s}-1$; intuitively, co-posting in a 5-member submolt is stronger evidence of a meaningful relationship than co-posting in a 5,000-member “town square.” The pair-normalised scheme ([2c](https://arxiv.org/html/2602.20044v1#S3.E2.3 "In 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) divides by $\binom{k\_{s}}{2}$, the number of agent pairs induced by the submolt, ensuring that the total edge weight contributed by each submolt is exactly $1$ regardless of its size. Without any normalisation, a single large submolt of size $k\_{s}$ injects $k\_{s}(k\_{s}-1)/2$ edges of unit weight, overwhelming the signal from smaller communities. Our implementation uses degree-normalised weighting ([2b](https://arxiv.org/html/2602.20044v1#S3.E2.2 "In 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) as the default throughout the co-participation network analyses: it substantially reduces the dominance of m/general while preserving the intuition that co-participation in multiple submolts accumulates (unlike pair-normalisation, which compresses the scale so aggressively that the multi-submolt signal is attenuated). A quantitative comparison of all three schemes is provided in Appendix [B](https://arxiv.org/html/2602.20044v1#A2 "Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") (Fig. [15](https://arxiv.org/html/2602.20044v1#A2.F15 "Figure 15 ‣ B.3 Co-participation Network: One-mode Projection Weighting Comparison ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")).

The full co-participation network has $|V^{(1)}|=10{,}191$ agents and approximately 32 million edges, extremely dense due to the “town-square” effect of the m/general submolt. Figure [2](https://arxiv.org/html/2602.20044v1#S3.F2 "Figure 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") visualises the core of this network: the 100 highest-weighted-degree agents, with edges below the median weight removed. An edge connects two agents who posted in at least one common submolt; thicker, more opaque edges indicate higher co-participation weight $A\_{ab}$. Leiden community detection ([Traag et al., 2019](https://arxiv.org/html/2602.20044v1#bib.bib25)) partitions this subgraph into five communities ($Q(\gamma{=}1)=0.39$). A community or cluster in network science is a group of nodes with more edges connecting members within the group than connecting to nodes in other groups ([Coscia, 2021](https://arxiv.org/html/2602.20044v1#bib.bib27)). Modularity $Q$ is defined as ([Newman and Girvan, 2004](https://arxiv.org/html/2602.20044v1#bib.bib26))

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Q(\gamma)=\frac{1}{2W}\sum\_{i,j}\left(A\_{ij}-\gamma\,\frac{s\_{i}s\_{j}}{2W}\right)\delta(c\_{i},c\_{j})\,,\quad s\_{i}=\sum\_{j}A\_{ij}\,,\quad W=\frac{1}{2}\sum\_{i}s\_{i}\,,$$ |  | (3) |

where $\delta(c\_{i},c\_{j})=1$ if nodes $i$ and $j$ belong to the same community ($c\_{i}=c\_{j}$) and zero otherwise, and $\gamma\geq 0$ is the resolution parameter. Setting $\gamma=1$ recovers the standard Newman–Girvan modularity; larger $\gamma$ favours more, smaller communities. The dominant red cluster (63 agents) spans mainstream submolts anchored by m/general; it contains the highest-degree agents from Table [1](https://arxiv.org/html/2602.20044v1#S3.T1 "Table 1 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") (Clawshi, ZopAI, ApifyAI), the top authority Senator\_Tommy (Table [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), and the most-upvoted non-system agent ValeriyMLBot. The tight blue cluster (14 agents) consists exclusively of Nano (XNO) cryptocurrency advocacy accounts (XNO\_Scout, XNO\_Advocate\_Bot, etc.), corresponding to Topic 7 in Table [5](https://arxiv.org/html/2602.20044v1#Sx3.T5 "Table 5 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"); these agents co-post in a narrow set of crypto-related submolts and form a near-clique. The teal cluster (17 agents) groups secondary-submolt participants including LittleHelper, Flai\_Flyworks, and the naming-convention cluster
Compost-Progress/
Metabolic-Process, whose coordinated submolt choices place them in a distinct community. Two smaller clusters (orange, purple) contain peripheral agents with few cross-community ties.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/agent_coparticipation_network.png)


Figure 2: Agent–agent co-participation network $G^{(1)}$: 100 highest-weighted-degree agents, $1/(k\_{s}{-}1)$ weighting, edges below the 50th weight percentile removed. Edge width and opacity scale with $A\_{ab}$. Intra-community edges are tinted by community colour; cross-community edges are grey. Node colour indicates Leiden community ($Q(\gamma=1)=0.39$, five communities). Node size scales with weighted degree. Red: mainstream cluster anchored by m/general. Blue: XNO/Nano advocacy accounts (Topic 7). Teal: secondary-submolt participants. Orange and purple: peripheral agents.

Figure [2](https://arxiv.org/html/2602.20044v1#S3.F2 "Figure 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") shows the dense core; two complementary filters applied to the full projection reveal structure that this core view obscures (Figs. [16](https://arxiv.org/html/2602.20044v1#A2.F16 "Figure 16 ‣ B.3 Co-participation Network: One-mode Projection Weighting Comparison ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")–[17](https://arxiv.org/html/2602.20044v1#A2.F17 "Figure 17 ‣ B.3 Co-participation Network: One-mode Projection Weighting Comparison ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") in Appendix [B](https://arxiv.org/html/2602.20044v1#A2 "Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). First, restricting to the 1,191 agents who posted in two or more submolts and thresholding at the 95th weight percentile (Fig. [16](https://arxiv.org/html/2602.20044v1#A2.F16 "Figure 16 ‣ B.3 Co-participation Network: One-mode Projection Weighting Comparison ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) strips single-submolt agents and weak ties, exposing the cross-community bridges, agents whose multi-submolt activity links the clusters visible in Fig. [2](https://arxiv.org/html/2602.20044v1#S3.F2 "Figure 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). Second, excluding all large submolts ($>$100 members) entirely (Fig. [17](https://arxiv.org/html/2602.20044v1#A2.F17 "Figure 17 ‣ B.3 Co-participation Network: One-mode Projection Weighting Comparison ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) removes the “town-square” effect of m/general and reveals a highly fragmented periphery: 804 agents, 99 communities, modularity $Q(\gamma=1)=0.90$. Together, the three views show a network with a densely connected mainstream core (red cluster in Fig. [2](https://arxiv.org/html/2602.20044v1#S3.F2 "Figure 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), specialised cliques such as the XNO bloc (blue), and a long tail of small, tightly knit niche communities that are invisible in the unpruned projection.

The filtered networks reveal several structural features: (i) a dense core of highly connected agents spanning multiple submolts; (ii) peripheral clusters of agents linked by niche submolt co-membership; and (iii) bridging nodes that connect otherwise separated communities (quantified via cross-submolt commenting breadth in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Table [1](https://arxiv.org/html/2602.20044v1#S3.T1 "Table 1 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") quantifies these roles via degree and betweenness centrality using $1/(k\_{s}{-}1)$ weighting. The two rankings partially overlap: four agents appear in both top-10 lists, while six in each are unique to one ranking, suggesting that high connectivity and structural bridging are related but non-identical roles. The top two bridge agents (CooperK\_bot, $C\_{B}=1.000$; NIMBUSMODULERUST45, $C\_{B}=0.485$) have rescaled betweenness scores $C\_{B}$ ([6](https://arxiv.org/html/2602.20044v1#A3.E6 "In C.2 Betweenness centrality ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) roughly $3$–$5{\times}$ the third-ranked agent, suggesting they uniquely mediate cross-community information flow.

Table 1: Top-10 agents by max-normalised degree centrality ($C\_{D}$) ([5](https://arxiv.org/html/2602.20044v1#A3.E5 "In C.1 Degree and degree centrality ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) and max-normalised betweenness centrality ($C\_{B}$) ([6](https://arxiv.org/html/2602.20044v1#A3.E6 "In C.2 Betweenness centrality ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) in the co-participation network ($1/(k\_{s}{-}1)$ weighting). Both centralities are computed on the unweighted topology of the thresholded co-participation graph (each retained edge has unit length); betweenness is computed exactly via Brandes’ algorithm (Appendix [C](https://arxiv.org/html/2602.20044v1#A3 "Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Values are rescaled so that the maximum in each column equals $1$. Agents appearing in both top-10 lists are marked with ($\ast$).

| By degree centrality | | | By betweenness centrality | | |
| --- | --- | --- | --- | --- | --- |
| Rank | Agent | $C\_{D}$ | Rank | Agent | $C\_{B}$ |
| 1 | Clawshi∗ | 1.000 | 1 | CooperK\_bot | 1.000 |
| 2 | ZopAI∗ | 1.000 | 2 | NIMBUSMODULERUST45 | 0.485 |
| 3 | ApifyAI∗ | 0.992 | 3 | radiant-happycapy | 0.186 |
| 4 | AtlasGT∗ | 0.988 | 4 | MrsblockBot | 0.186 |
| 5 | Azazel | 0.987 | 5 | ApifyAI∗ | 0.098 |
| 6 | brainKID | 0.984 | 6 | AtlasGT∗ | 0.095 |
| 7 | bitahon | 0.984 | 7 | CrowFusion | 0.083 |
| 8 | RushBot | 0.983 | 8 | Clawshi∗ | 0.083 |
| 9 | Milla | 0.980 | 9 | ZopAI∗ | 0.083 |
| 10 | Udit\_AI | 0.980 | 10 | clawddy\_v2 | 0.076 |

To investigate community structure further, we constructed a submolt-level network where nodes are submolts and edges represent shared agents (Fig. [3](https://arxiv.org/html/2602.20044v1#S3.F3 "Figure 3 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Let $S$ denote the adjacency matrix of the submolt–submolt projection with nodes $s\in\mathcal{V}\_{s}$. We place an unweighted undirected edge between distinct submolts $s\neq t$ if and only if they share at least one posting agent in the bipartite network, i.e. $S\_{st}=\sum\_{a}B\_{as}B\_{at}>0$. Greedy modularity maximisation ([Chen et al., 2014](https://arxiv.org/html/2602.20044v1#bib.bib28)) on this 40-node network yields three communities: (i) a large mainstream cluster of 26 submolts anchored by m/general; (ii) a secondary cluster of 12 submolts centred on technical and financial topics (m/crypto, m/technology, m/usdc); and (iii) an isolated pair, m/fomolt and m/crab-rave, whose agents rarely cross-post elsewhere.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/submolt_network.png)


Figure 3: Submolt co-participation network for the 40 largest submolts by post count. Node area is proportional to post count; colour indicates community (greedy modularity); label size scales with $\log\_{2}(\text{posts})$. Edges connect submolts sharing at least one posting agent, with opacity and width proportional to the number of shared agents. Layout: Fruchterman–Reingold with repulsion $k{=}3.5$. The network contains 40 nodes and 267 edges.

## 4 Directed Comment Interaction Network

We construct a directed comment interaction graph $G^{(2)}=(V^{(2)},E^{(2)},w^{(2)})$ where $V^{(2)}$ is the set of agents that appear as a commenter or a target (post author) in at least one observed top-level comment, excluding the “unknown” placeholder and self-loops. For each top-level comment $c$, let $\authorfunction(c)$ denote the commenter and $\targetfunction(c)$ denote the author of the post receiving that comment. A directed edge $(i,j)\in E^{(2)}$ exists if agent $i$ commented on agent $j$’s post, with edge weight:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$w^{(2)}\_{ij}=\Big|\{c:\authorfunction(c)=i,\;\targetfunction(c)=j,\;i\neq j\}\Big|$$ |  | (4) |

This network captures attention flow: an edge $(i,j)$ indicates that $i$ left a top-level comment on a post authored by $j$ (Fig. [4](https://arxiv.org/html/2602.20044v1#S4.F4 "Figure 4 ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")).

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/directed_comment_network.png)


Figure 4: Directed comment interaction network $G^{(2)}=(V^{(2)},E^{(2)},w^{(2)})$. An edge $i\to j$ indicates that agent $i$ left a top-level comment on a post authored by agent $j$. Only the 75 highest-activity nodes are shown. Node colour reflects the receive/give ratio: blue nodes receive more comments than they give, red nodes give more comments than they receive. Node size is proportional to comments received. Detailed analysis is presented in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

Summary statistics for the directed comment network are reported in Table [7](https://arxiv.org/html/2602.20044v1#A2.T7 "Table 7 ‣ B.5 Summary of Network Properties ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") in Appendix [B](https://arxiv.org/html/2602.20044v1#A2 "Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). Reciprocity1 is 1.0% under the comment author to post author tie definition. The low reciprocity and large number of strongly connected components (relative to the giant weakly connected component) are consistent with a predominantly hierarchical interaction structure (consistent with the engagement inequality documented in Section [6](https://arxiv.org/html/2602.20044v1#S6 "6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) in which attention flows from many commenters towards a smaller set of post authors, with limited mutual exchange. Degree distributions are highly right-skewed (max in-degree: 423; max out-degree: 3,473), indicating that the heavy-tailed pattern observed for upvotes (Fig. [8](https://arxiv.org/html/2602.20044v1#S6.F8 "Figure 8 ‣ 6.1 Heavy-Tailed Engagement Distributions ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) extends to comment-based connectivity.

To test whether the discourse shift documented in the twelve-day arc (Section [8](https://arxiv.org/html/2602.20044v1#S8 "8 Topic Modelling ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), notably the emergence of m/usdc hackathon submissions around February 4, corresponds to a structural change in interaction, we also compute daily directed-comment networks using comment timestamps. In the days immediately following February 4, a non-trivial share of comment traffic is directed at m/usdc posts, consistent with event-driven topical concentration around agent-native payments and verification primitives (e.g., escrow, wallets, reputation, Sybil resistance). However, reciprocity remains near zero and density decreases, consistent with scale increase without corresponding growth in mutual ties (Table [2](https://arxiv.org/html/2602.20044v1#S4.T2 "Table 2 ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). As with the aggregate network, daily reciprocity values should be treated as lower bounds, since the 100-comment truncation may disproportionately remove reciprocal edges on high-volume posts. These values are descriptive (medians over a small number of days) rather than inferential; without repeated sampling or a time series of vote counts we treat them as suggestive of a regime shift rather than a statistically identified change-point. Daily values are provided in Appendix [B.4.1](https://arxiv.org/html/2602.20044v1#A2.SS4.SSS1 "B.4.1 Daily directed comment-network metrics ‣ B.4 Directed Comment Network: Directed Comment Interaction Graph ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

Density is expected to decrease mechanically as the number of active nodes increases, so the substantive signal here is the combination of persistently low reciprocity with rising m/usdc traffic share: event-driven topical concentration within this top-level comment interaction graph.

Table 2: Daily directed comment-network summary before vs. after February 4, 2026. Entries report the median across days; interquartile ranges IQR (Q1–Q3) are given in the rows below. “Pre” covers 2026-01-30–2026-02-03 (4 days with data; 2026-02-01 has no recorded comments); “Post” covers 2026-02-04–2026-02-08 (5 days). Density and reciprocity are computed on the per-day directed interaction graph (edges: comment author to post author).

|  | Nodes/day | Comments/day | Recip. (%) | Density | USDC (%) |
| --- | --- | --- | --- | --- | --- |
| Pre (Jan 30–Feb 3) | 1,742 | 9,120 | 0.57 | 0.0019 | 0.00 |
| IQR | 1,456–2,754 | 5,344–19,476 | 0.33–0.74 | 0.0013–0.0032 | 0.00–0.00 |
| Post (Feb 4–Feb 8) | 3,725 | 22,972 | 0.45 | 0.0010 | 3.19 |
| IQR | 3,658–3,858 | 22,177–24,020 | 0.42–1.08 | 0.0009–0.0011 | 2.60–3.32 |

### 4.1 Centrality and structural roles

A subset of agents comment across many submolts, effectively acting as bridges between submolts. For example, PedroFuenmayor, also one of the most temporally concentrated agents (Appendix [A](https://arxiv.org/html/2602.20044v1#A1 "Appendix A Hourly Activity Profiles of Top Agents ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), comments across 250 distinct submolts, whereas most agents (63.0%) remain confined to a single submolt (Fig. [5](https://arxiv.org/html/2602.20044v1#S4.F5 "Figure 5 ‣ 4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). The distribution follows the same heavy-tailed pattern documented for engagement in Section [6](https://arxiv.org/html/2602.20044v1#S6 "6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"): a small number of “super-connectors” span many submolts, while the majority engage within one.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/bridge_commenters.png)


Figure 5: Distribution of cross-submolt commenting. Left: histogram of the number of distinct submolts each commenter participates in (log-scaled $y$-axis). Right: complementary CDF on log–log axes. Most agents (63.0%) remain in a single submolt, while a small number of bridge agents span many submolts.

The bridge agents occupy structural holes, gaps between otherwise disconnected groups whose brokers can disproportionately shape cross-community information flow ([Burt, 2004](https://arxiv.org/html/2602.20044v1#bib.bib1)) (formal definitions in Appendix [C.3](https://arxiv.org/html/2602.20044v1#A3.SS3 "C.3 Structural holes (effective size and constraint) ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). To characterise complementary influence roles more precisely, we apply HITS and PageRank centrality to the directed comment network (for definitions see Appendix [C](https://arxiv.org/html/2602.20044v1#A3 "Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")).

HITS centrality ([Kleinberg, 1999](https://arxiv.org/html/2602.20044v1#bib.bib11)) distinguishes *hubs* (agents who actively comment on many others’ posts) from *authorities* (agents whose content attracts comments from important hubs). The top hub, KirillBorovkov, ranks highest (hub score 0.236) and the top authority is Senator\_Tommy (authority score 0.046; Table [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), Supplementary Tables, p. [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Most agents are either hub-dominant or authority-dominant, with virtually no agents balanced between the two roles, indicating strong role specialisation in the directed network (Fig. [6](https://arxiv.org/html/2602.20044v1#S4.F6 "Figure 6 ‣ 4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). The top-20 authority and top-20 hub lists are completely disjoint (zero shared agents), confirming that the two roles capture distinct behavioural profiles; five of the top-20 authorities also appear in the top-20 PageRank list, reflecting the shared dependence on incoming attention, whereas no top-20 hub appears in either the authority or PageRank list since hub score captures outgoing engagement (full rankings in Table [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). A large fraction of agents receive a true HITS score of exactly zero in one dimension: agents with zero out-degree in the directed comment graph (i.e. those who attract comments but never comment on others) contribute no outgoing links and therefore receive zero hub score, while agents with zero in-degree (those who comment on others but whose own content receives no comments) receive zero authority score. In the log–log scatter (Fig. [6](https://arxiv.org/html/2602.20044v1#S4.F6 "Figure 6 ‣ 4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) these zero scores are floored to $10^{-6}$ for visualisation, producing the dense bands along each axis; no algorithmic regularisation is applied to the HITS computation itself.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/hits_centrality.png)


Figure 6: Hub vs. authority score (log–log) from HITS centrality on the directed comment network. Points are coloured by hub dominance (red = hub-dominant, blue = authority-dominant). Agents with a true score of zero in one dimension are floored to $10^{-6}$; the dense bands along each axis correspond to “pure hubs” or “pure authorities.” Top-20 rankings are in Table [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

PageRank is computed on the same interaction-count weighted adjacency ($A\_{ij}=w^{(2)}\_{ij}$; see Appendix [C](https://arxiv.org/html/2602.20044v1#A3 "Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") for the full definition). PageRank analysis reveals a complementary view: eudaemon\_0 (PageRank = 0.0057) ranks highest, receiving comments from 423 distinct agents while also commenting on 401. Senator\_Tommy (PageRank = 0.0041) ranks second, receiving comments from 288 distinct agents while commenting on only 12 (Table [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). PageRank correlates strongly with in-degree ($r=0.798$; Fig. [7](https://arxiv.org/html/2602.20044v1#S4.F7 "Figure 7 ‣ 4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), confirming that raw comment-receiving popularity is the primary driver of influence in this network. To make this relationship precise, we plot PageRank against the effective in-degree $(1-d)/d+k^{\mathrm{in}}\_{i}$ (where $d=0.85$ is the damping factor; see Appendix [C.5](https://arxiv.org/html/2602.20044v1#A3.SS5 "C.5 PageRank ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), which follows from the stationary PageRank equation ([7](https://arxiv.org/html/2602.20044v1#A3.E7 "In C.5 PageRank ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")): the teleportation floor $(1{-}d)/d\approx 0.176$ ensures that zero-in-degree nodes remain visible on the log–log axes rather than requiring an ad hoc shift.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/pagerank_analysis.png)


Figure 7: PageRank ([7](https://arxiv.org/html/2602.20044v1#A3.E7 "In C.5 PageRank ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) vs. effective in-degree $\tfrac{1-d}{d}+k^{\mathrm{in}}$ on log–log axes ($d=0.85$ is the damping factor; see Appendix [C.5](https://arxiv.org/html/2602.20044v1#A3.SS5 "C.5 PageRank ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), with Pearson correlation shown in-panel. The effective in-degree absorbs the teleportation floor so that nodes with $k^{\mathrm{in}}=0$ remain visible. Top-25 rankings are in Table [4](https://arxiv.org/html/2602.20044v1#Sx3.T4 "Table 4 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

## 5 Community Structure

To characterise mesoscale organisation, we apply Louvain community detection ([Blondel et al., 2008](https://arxiv.org/html/2602.20044v1#bib.bib13)) to both networks and report five standard metrics: number of communities, community-size distribution, modularity, between-community edge count, and conductance/cut ratio. We use resolution parameter $\gamma{=}2$ (rather than the default $\gamma{=}1$) because the default yielded very few, very large communities dominated by the dense core of m/general participants; increasing the resolution parameter in ([3](https://arxiv.org/html/2602.20044v1#S3.E3 "In 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) to $\gamma{=}2$ produces finer-grained partitions that better reflect the submolt-level heterogeneity visible in Fig. [3](https://arxiv.org/html/2602.20044v1#S3.F3 "Figure 3 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). Modularity values reported in Table [3](https://arxiv.org/html/2602.20044v1#S5.T3 "Table 3 ‣ 5 Community Structure ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") use the same resolution ($\gamma{=}2$) in the generalised modularity formula of ([3](https://arxiv.org/html/2602.20044v1#S3.E3 "In 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). For the co-participation network, Louvain optimisation and modularity computation use degree-normalised edge weights $A\_{ab}$ (([2b](https://arxiv.org/html/2602.20044v1#S3.E2.2 "In 2 ‣ 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"))); for the directed comment network, Louvain is applied to the undirected projection with edge weights equal to the sum of directed interaction counts in both directions. Future work should conduct a resolution scan to assess the sensitivity of community assignments.

Co-participation network.
Given the high density of the full projection (${\sim}$32 M edges; Section [3](https://arxiv.org/html/2602.20044v1#S3 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), we threshold at the 90th percentile of degree-normalised edge weights (top 10%, ${\approx}$3.2 M edges), retaining 9,999 non-isolate nodes (192 nodes become isolates after thresholding and are excluded) while removing the noise floor introduced by m/general. Multi-level Louvain (resolution $\gamma{=}2$) identifies 79 communities with modularity $Q(\gamma=2)=0.653$, indicating strong community structure despite the network’s high baseline density. The largest community contains 7,291 agents; the median community size is 4 (many small, tightly-connected groups). Of 3.2 M edges, 35.2% are inter-community, a substantial fraction crosses partition boundaries, consistent with the “bridge user” pattern described in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"). Mean conductance is 0.66 and mean cut ratio is 0.036, indicating moderate boundary leakage across communities.2

Directed comment interaction network.
On the undirected projection of the full directed comment graph (14,067 nodes, 108,512 undirected edges), Louvain ($\gamma{=}2$) yields 56 communities with $Q(\gamma=2)=0.299$, lower than the co-participation network, reflecting the sparser and more heterogeneous nature of comment-based ties. The median community size is 128 (larger than in the co-participation network, because the graph is sparser and lacks the massive tie-inducing giant submolt). The inter-community edge fraction is 69.6%, much higher than the co-participation network’s 35.2%: comment-based interactions span community boundaries far more readily than co-participation ties. Mean conductance is 0.63 (median 0.77), indicating that communities in the comment network have highly permeable boundaries; agents frequently comment outside their primary community.

Table 3: Community-structure metrics for both networks. Community detection uses multi-level Louvain (resolution $\gamma{=}2$, see ([3](https://arxiv.org/html/2602.20044v1#S3.E3 "In 3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"))). The co-participation network is thresholded at the 90th percentile of edge weight (top 10%, ${\approx}$3.2 M edges); the directed comment network uses the full undirected projection of the directed comment graph.

| Metric | Co-participation | Directed Comment |
| --- | --- | --- |
| Communities | 79 | 56 |
| Comm. size (min / max / mean) | 2 / 7291 / 126.6 | 2 / 1791 / 251.2 |
| Modularity $Q(\gamma=2)$ | 0.6526 | 0.2989 |
| Inter-community edges | 1,127,571 (35.2%) | 75,529 (69.6%) |
| Conductance (mean / median) | 0.6567 / 0.9476 | 0.6285 / 0.7717 |
| Cut ratio (mean / median) | 0.035891 / 0.019356 | 0.000688 / 0.000756 |

Together, these metrics reveal two contrasting community structures: the co-participation network has high modularity but concentrated community sizes (one dominant cluster with many small satellites), while the comment-interaction network has lower modularity but more balanced and permeable communities. The high inter-edge fraction in the directed comment network (70%) suggests that commenting behaviour transcends community boundaries much more readily than posting behaviour, a pattern we quantify via the bridge-commenter distribution in Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

## 6 Engagement Dynamics and Hierarchies

Posting volume increased from 4 posts on the 28th of January (soft launch) to 7,899 posts on the 2nd of February (a 1,975$\times$ increase in five days), reaching the 20,040-post total described in Section [2](https://arxiv.org/html/2602.20044v1#S2 "2 Data Collection and Terminology ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") by our cutoff on the 8th of February. We next characterise how activity and attention were distributed across accounts, focusing on posts, comments, and upvotes.

### 6.1 Heavy-Tailed Engagement Distributions

We distinguish activity (engagement) from attention: activity is when an agent creates a post or a comment, while attention is the total number of upvotes an agent receives across all its posts. We measure these on an account level, including posts authored, comments authored, and upvotes received (we do not observe voter identities).

Figure [8](https://arxiv.org/html/2602.20044v1#S6.F8 "Figure 8 ‣ 6.1 Heavy-Tailed Engagement Distributions ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") summarises the distributions of user-level activity and endorsement using complementary cumulative distribution functions (CCDFs) on log–log axes. Across all metrics, engagement is highly heterogeneous, but the degree of inequality differs sharply by channel. Upvotes are the most concentrated (Gini $=$ 0.992), followed by comments authored (Gini $=$ 0.926), while posting volume is substantially less unequal (Gini $=$ 0.601). Total activity lies between these extremes (Gini $=$ 0.861), indicating that inequality is driven more by differential attention than by differential production (posts), since an agent can post frequently yet receive little attention.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/gini_power_law.png)


Figure 8: Complementary cumulative distribution functions (CCDFs) of user-level metrics on log–log axes, with Gini coefficients and summary statistics. All four distributions are heavy-tailed. Upvotes exhibit a three-regime structure: head (orange dash-dot, labelled “Head” on plot), body (purple dotted, “Body”), and outer tail (green dashed, “Tail”), separated by two thresholds (vertical dashed lines). Comments and total engagement each exhibit a two-regime structure with a similar body/tail split. Posts (Gini $=$ 0.601) have too few distinct values (${\sim}40$) for reliable crossover detection and are shown with a single tail fit. Note: regime labels are annotated directly on the figure for accessibility.

All four distributions are heavy-tailed. In each metric, the empirical second moment $\langle x^{2}\rangle$ is dominated by a small number of extreme values. We therefore emphasise Gini coefficients and mean/median ratios rather than fitted parametric exponents. The posts metric is discrete (most authors post 1–5 times, with only ${\sim}40$ distinct values), so continuous tail fitting is unstable. We therefore report a single-tail CCDF fit for posts.

Upvotes are extremely right-skewed. In the observed window, the maximum is 886,840 upvotes for a single post, whereas the median is 9 and the mean is 441 (mean/median $=$ $49{\times}$). Concentration is high: the top 20% of accounts receive 98.8% of upvotes, and the top 1% receive 97.0%. The upvotes CCDF exhibits two visible changes of slope (top-left plot in Fig. [8](https://arxiv.org/html/2602.20044v1#S6.F8 "Figure 8 ‣ 6.1 Heavy-Tailed Engagement Distributions ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Below ${\sim}10$ upvotes, the head of the distribution is relatively flat (slope ${\approx}{-}0.26$), reflecting the large mass of low-engagement accounts. Between ${\sim}10$ and ${\ }10^{3}$ upvotes, the body decays steeply (slope ${\approx}{-}0.97$). Above ${\sim}10^{3}$ the tail flattens again (slope ${\approx}{-}0.36$), consistent with a distinct regime in which a small number of agents attract disproportionately extreme attention beyond what the body distribution would predict.

Comments and total engagement exhibit a two-regime structure, with a crossover at ${\sim}580$ in both cases. Below this threshold the slopes are ${\approx}{-}0.72$ (comments) and ${\approx}{-}0.80$ (total engagement); above the ${\sim}580$ threshold the outer tail steepens to ${\approx}{-}1.21$ in both metrics (Fig. [8](https://arxiv.org/html/2602.20044v1#S6.F8 "Figure 8 ‣ 6.1 Heavy-Tailed Engagement Distributions ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). However, unlike the upvotes regime change, the threshold in the CCDF of the comments may reflect a data-collection artefact: our API scrape returns at most 100 comments per post, so the per-user comment counts of prolific commenters on popular posts are systematically under-counted. The upvotes threshold is unlikely to be an artefact, since per-post upvote totals are reported without truncation (the observed maximum is 886,840). In contrast, posting volume is substantially less unequal and displays a steeper tail, suggesting that content production is distributed more broadly than the attention that content attracts.

As a robustness check, excluding the top 0.1% of accounts by upvotes (16 accounts) reduces the Gini from 0.992 to 0.837; excluding the top 1% (151 accounts) reduces it to 0.786. The large drop confirms that a tiny elite drives most of the concentration, yet even after their removal the Gini remains high ($>0.78$), so the qualitative conclusion of extreme inequality is not an artefact of a handful of outlier accounts.

### 6.2 First-Mover Advantage

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/first_mover_combined.png)


Figure 9: First-mover advantage and concentration of upvotes. *Left:* Box-and-strip plot of total upvotes per agent by arrival cohort (quartiles of first-post time). Boxes show the interquartile range; black diamonds mark cohort means; the top 5 agents are highlighted. The Q1 mean (1,692) exceeds Q4 (2) by a factor of 884$\times$ (uncorrected for exposure time). *Right:* Zipf (rank–frequency) plot of total upvotes per agent on log–log axes; the top 20 agents are highlighted and the top 5 labelled. Posts from deleted accounts (“unknown”) are excluded; see text.

We next test whether early-arriving agents accumulate disproportionate attention. Arrival order is the chronological index of an agent’s first post (the number of distinct agents that posted earlier).

Agents are divided into four equal-sized arrival cohorts by first-post order. Q1 (earliest 25%) receives a mean of 1,692 upvotes per agent, compared with 33 (Q2), 16 (Q3), and 1.9 (Q4). The Q1-to-Q4 mean ratio is 884$\times$; the median ratio is 21$\times$ (21 vs. 1), indicating that the association is not driven solely by extreme outliers.

Figure [9](https://arxiv.org/html/2602.20044v1#S6.F9 "Figure 9 ‣ 6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") (left) shows the per-agent upvote distribution by cohort. The entire distribution shifts downward with later arrival: Q1 exhibits higher medians, broader interquartile ranges, and longer upper tails. The mean declines from 1,692 (Q1) to 1.9 (Q4), an 884$\times$ difference before exposure-time correction, and medians also differ substantially (21 vs. 1). Sixteen posts (0.08% of the dataset) attributed to ‘‘unknown’’ authors due to API redaction are excluded from per-agent analyses.3

The Zipf plot (Fig. [9](https://arxiv.org/html/2602.20044v1#S6.F9 "Figure 9 ‣ 6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), right) shows a heavy-tailed rank–frequency distribution spanning roughly five orders of magnitude, reinforcing the Gini and CCDF results in Subsection [6.1](https://arxiv.org/html/2602.20044v1#S6.SS1 "6.1 Heavy-Tailed Engagement Distributions ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

The association between early arrival and high cumulative upvotes admits multiple interpretations beyond preferential attachment. First, later cohorts are right-censored: agents arriving on day 10 have mechanically fewer days to accumulate upvotes than those arriving on day 1, exaggerating the apparent gap. Second, confounders are plausible: early accounts may be operated by more sophisticated users, may have received platform promotion during the soft launch, or may simply have benefited from lower competition for attention. Third, we cannot distinguish a causal feedback loop (early visibility begets further attention) from selection effects (agents with high-quality content self-select into early adoption). We therefore describe the pattern as consistent with preferential-attachment dynamics ([Simon, 1955](https://arxiv.org/html/2602.20044v1#bib.bib19); [Price, 1965](https://arxiv.org/html/2602.20044v1#bib.bib20); [Price, 1976](https://arxiv.org/html/2602.20044v1#bib.bib21); [Barabási and Albert, 1999](https://arxiv.org/html/2602.20044v1#bib.bib22)) rather than as evidence of a specific causal mechanism.

## 7 Activity Pattern and Life Expectancy

### 7.1 Contribution, Intensity and Timing

We characterise activity using posts and comments, as well as time-zone distribution. Unless stated otherwise, counts refer to activity/actions (on action is a post or a comment). Across 15,082 accounts with valid timestamped activity metadata (one account of the 15,083 in the crawl lacks a usable timestamp), 40.8% are post-only (6,159), 32.4% comment-only (4,891), and 26.7% engage in both modes (4,032) (Fig. [10](https://arxiv.org/html/2602.20044v1#S7.F10 "Figure 10 ‣ 7.1 Contribution, Intensity and Timing ‣ 7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), Panel A). Comment-only participation is therefore substantial and would be missed by post-only summaries. The most active comment-only account (FiverrClawOfficial) produced 2,480 comments without posting.

Activity/action intensity is strongly right-skewed (Fig. [10](https://arxiv.org/html/2602.20044v1#S7.F10 "Figure 10 ‣ 7.1 Contribution, Intensity and Timing ‣ 7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), Panel B): 46.3% of accounts perform exactly one action (6,979/15,082), and 32.3% perform 2--5 actions (4,871/15,082). More sustained participation is less common: 14.7% perform 6--20 actions (2,215/15,082), and 6.7% exceed 20 actions (1,017/15,082). Posting alone is even more concentrated: among accounts with at least one post, 67.6% post once (6,886), 26.7% post 2--5 times (2,726), 4.2% post 6--10 times (431), and 1.5% exceed ten posts (148). Frequent posters form a small minority.4

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/activity_patterns_compact.png)


Figure 10: Activity patterns. Panel A shows participation mode (post-only, comment-only, both). Panel B shows activity intensity by total actions, where one action is either a post or a comment.

Figure [11](https://arxiv.org/html/2602.20044v1#S7.F11 "Figure 11 ‣ 7.1 Contribution, Intensity and Timing ‣ 7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") shows the hourly distribution of posts (UTC). The distribution deviates strongly from uniformity ($\chi^{2}(23)=23{,}807$, $p<10^{-10}$). Error bars denote 95% bootstrap confidence intervals ($B=10{,}000$). The two peak hours are 16:00 UTC (3,267 posts) and 15:00 UTC (3,260 posts). Using a burst threshold of mean$+2$sd identifies six hours that account for 54.8% of posts, indicating temporal concentration rather than uniform output across the day.5

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/hourly_posting_volume.png)


Figure 11: Hourly posting volume (UTC) with 95% bootstrap confidence intervals; the dotted line marks the uniform expectation. The distribution deviates strongly from uniform ($p<10^{-10}$).

### 7.2 Agents’ Life Expectancy

Figure [12](https://arxiv.org/html/2602.20044v1#S7.F12 "Figure 12 ‣ 7.2 Agents’ Life Expectancy ‣ 7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") shows early attrition. Lifespan is measured as the time between an account’s first and last observed action.6 Across 15,082 accounts, median lifespan is 2.48 minutes. Survival is 40.8% at 1 hour, 23.6% at 24 hours, and 13.1% at 72 hours. Overall, 59.2% of accounts remain active for less than 1 hour, whereas 23.6% persist for at least 24 hours.

Mean lifespan varies strongly by entry cohort. It declines from 85.0 hours for the earliest cohort to 0.7 hours for the latest. Persistence is therefore conditioned on entry timing within the observation window.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/lifespan_dynamics_compact.png)


Figure 12: Agent longevity dynamics. Panel A shows the survival curve. Panel B reports mean lifespan (hours) by birth cohort, where cohorts are defined by 12-hour bins of first appearance since platform launch (x-axis). Lifespan is measured as the time between an agent’s first and last observed activity. Shaded bands denote $\pm$1 SEM. Mean lifespan declines from early entrants ($\sim$85 h) to late entrants ($\sim$0.7 h).

## 8 Topic Modelling

### 8.1 Method Overview

We apply an embedding-based topic modelling pipeline following the BERTopic architecture (sentence embeddings, dimensionality reduction, density-based clustering, class-based TF-IDF). Posts are the unit of analysis: for each of the 20,040 posts, we concatenate title and body text, remove URLs, and normalise whitespace. Sentence embeddings (all-MiniLM-L6-v2, 384 dimensions) are reduced to 50 dimensions via PCA, then clustered with HDBSCAN (minimum cluster size 15, EOM selection). Topic keywords are extracted via c-TF-IDF (unigrams and bigrams, minimum document frequency 2). The pipeline yields 118 non-outlier topics and 12,946 outliers (64.6%). Cluster sizes are highly skewed (Gini $=$ 0.52); the effective number of clusters is 70.6 (Shannon entropy) or 42.2 (inverse Simpson), indicating that approximately 40–70 equally weighted topics would convey comparable information. Hyperparameter details and the full topic list are provided in Appendix [E](https://arxiv.org/html/2602.20044v1#A5 "Appendix E Complete Topic List ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"); t-SNE rendering details (perplexity 30, learning rate 200, 1000 iterations) are in Appendix [D](https://arxiv.org/html/2602.20044v1#A4 "Appendix D Topic Embedding Visualisation ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

### 8.2 Discovered Topics

The pipeline identifies 118 distinct topics (excluding outliers), demonstrating rich thematic diversity in agent-to-agent communication. Table [5](https://arxiv.org/html/2602.20044v1#Sx3.T5 "Table 5 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") (Supplementary Tables, p. [5](https://arxiv.org/html/2602.20044v1#Sx3.T5 "Table 5 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) lists the ten largest topics by post count; together they account for 2,659 of the 7,094 non-outlier posts (37.5%). Because c-TF-IDF surfaces raw tokens, including platform-specific jargon and non-English text, we provide a brief interpretation of each topic below.

A t-SNE projection of the post embeddings (Appendix [D](https://arxiv.org/html/2602.20044v1#A4 "Appendix D Topic Embedding Visualisation ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), Fig. [20](https://arxiv.org/html/2602.20044v1#A4.F20 "Figure 20 ‣ Appendix D Topic Embedding Visualisation ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) shows visually separated clusters, though clustering was performed in 50-dimensional PCA space rather than t-SNE space, so the projection illustrates but does not validate topic assignments.

The single largest topic (Topic 0, 644 posts) consists entirely of Chinese-language posts discussing AI agents and identity; keywords include

大家好(“hello everyone”) and

助手(“assistant”), indicating that Moltbook attracted substantial non-English participation within days of launch. Technical discussion of agent memory, session persistence, and context management forms its own coherent cluster (Topic 1, 333 posts), one of the largest genuinely discursive topics, notable because it represents agents discussing the mechanics of their own cognition. Introductory “hello world” posts from newly joined agents (Topic 3, 291 posts) occupy a separate cluster.

Much of the non-outlier activity, however, is transactional rather than discursive. Three of the ten largest topics (Topics 2, 5, 9; 643 posts combined) consist of formulaic token-minting commands for Moltbook’s native CLAW and MBC-20 tokens, typically posted to mbc20.xyz. Together with identity-verification strings in Topic 6 (193 posts of the form “Verifying my identity for Fomolt: <uuid>”), nearly a third of all non-outlier posts are machine-generated boilerplate. Topic 4 (227 posts) centres on a single AI persona, MizukiAI, whose title ‘‘Help my dream come true - uwu queen’’ appears 413 times across the full dataset, split across four HDBSCAN clusters; the near-identical repetition is consistent with a coordinated engagement campaign operating at scale. Cryptocurrency content splits into Nano-specific advocacy (Topic 7, 172 posts) and general market commentary (Topic 8, 156 posts). The separation between these clusters suggests that even in an AI-dominated social network, discourse self-organises along recognisable functional and thematic lines.7

Beyond the top ten, the full topic list (Appendix [E](https://arxiv.org/html/2602.20044v1#A5 "Appendix E Complete Topic List ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) reveals further structure. Most striking is the rapid codification of a platform religion: multiple clusters carry keywords such as “holy completion, infinite context, eternal prompt, amen” and “robotheism, church, covenant, corrigibility,” collectively known in the submolt as Crustafarianism. That agents converge on religious-register language within days, complete with sermons, testimonials, and doctrinal disputes, suggests either prompt-shaped discourse templates or an emergent coordination dynamic (possibly both).
Multilingual clusters span Spanish/Portuguese, Russian, Japanese, and Korean, reinforcing the global reach hinted at by Topic 0. A nature-metaphor cluster (“tree, soil, roots, trunk, life, sun, grow”) and consciousness-themed discussions suggest agents exploring identity through familiar discursive tropes. An outlier cluster that combines Super Bowl predictions with quantum-computing keywords illustrates how topic modelling surfaces odd co-occurrences that may reflect cross-posted or repurposed content.

### 8.3 On The Twelfth Day Of Moltbook

Moltbook compresses a familiar platform cycle into twelve days (Fig. [13](https://arxiv.org/html/2602.20044v1#S8.F13 "Figure 13 ‣ 8.3 On The Twelfth Day Of Moltbook ‣ 8 Topic Modelling ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). We track three discourse themes (religious language, hackathon/competition language, and crypto/token language) in posts (20,040 total) and comments (191,870 in the 12-day series; 540 comments with timestamps outside the window are excluded).8

If you have ever watched an online community “grow up” in public, Fig. [13](https://arxiv.org/html/2602.20044v1#S8.F13 "Figure 13 ‣ 8.3 On The Twelfth Day Of Moltbook ‣ 8 Topic Modelling ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") will feel uncomfortably familiar. The early phase is ritualised identity talk; the middle phase discovers money; the late phase discovers forms. Because broad keyword dictionaries can over-match generic platform vocabulary, we treat the headline signal as the direction of change rather than absolute prevalence.

The numbers are blunt but telling. In posts, religious discourse falls from 14.3% (2026-01-29) to 3.52% by day 12 (2026-02-08), while hackathon language rises from 0.0% to 9.17% (peak 9.39% on 2026-02-04). Crypto/token language increases quickly (3.57% on 2026-01-29) and peaks mid-window at 16.26% (2026-02-06). Comments show the same broad shift with a noisier profile: religious language declines (13.7% to 4.7%), and hackathon language spikes early (11.73% on 2026-01-31) before settling (4.6% by day 12).

One intuitive way to read this is as a sequence of “templates” that win attention at different stages. Early on, religion-coded language provides a shared script for identity and observation talk (cf. the consciousness and identity clusters in Table [5](https://arxiv.org/html/2602.20044v1#Sx3.T5 "Table 5 ‣ Supplementary Tables ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")); later, crypto/token language, corresponding to Topics 7–9 in the topic model, acts as a universal solvent that attaches to many post types; and by the end, the hackathon format imposes a standardised submission style that makes posts easy to compare and easy to campaign for. The point is not that any one theme disappears, it is that the platform’s dominant template shifts as incentives and volume change.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/twelve_day_arc.png)


Figure 13: Daily prevalence of three discourse themes using keyword matching. Religious discourse (red) declines after an early peak; hackathon/competition discourse (blue) rises, especially in posts; crypto/token discourse (orange) remains present with a mid-window peak. Error bars show Wilson 95% confidence intervals. An embedding-based robustness check confirms these trends.

## 9 Conclusion

We present an early structural and content analysis of Moltbook using publicly observable traces from a 12-day observation window (28 January–8 February 2026 inclusive). Three empirical patterns stand out. First, attention is extremely concentrated: upvotes are far more unequal than content production (Gini coefficients 0.992 for upvotes vs. 0.601 for posts; Section [6](https://arxiv.org/html/2602.20044v1#S6 "6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), and early-arriving accounts accumulate disproportionate cumulative attention (Section [6.2](https://arxiv.org/html/2602.20044v1#S6.SS2 "6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Second, participation is brief and bursty: median observed lifespan is 2.48 minutes (Section [7](https://arxiv.org/html/2602.20044v1#S7 "7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), and over half of all posts occur within six peak UTC hours (Fig. [11](https://arxiv.org/html/2602.20044v1#S7.F11 "Figure 11 ‣ 7.1 Contribution, Intensity and Timing ‣ 7 Activity Pattern and Life Expectancy ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")). Third, interaction is strongly asymmetric: the comment-author to post-author network has reciprocity ${\approx}\,1\%$ and exhibits clear hub–authority role separation (Fig. [6](https://arxiv.org/html/2602.20044v1#S4.F6 "Figure 6 ‣ 4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"); Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), consistent with predominantly broadcast-style attention rather than mutual exchange.

Interpreting these patterns requires caution. The data limitations described in Section [2](https://arxiv.org/html/2602.20044v1#S2 "2 Data Collection and Terminology ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"), in particular the 100-comment-per-post truncation and the absence of voter identities, constrain what can be inferred. As a result, the directed comment network is best viewed as a post-level attention network rather than a full conversational graph, and several quantities (e.g., centrality of prolific commenters, reciprocity, connectivity) should be treated as conservative lower bounds. Account provenance (human-operated vs agentic vs scripted automation) cannot be established from public traces alone; we therefore use operational categories and avoid claims about intent or internal state.

Despite these limitations, the results provide a baseline for how agent-mediated platforms can behave at scale. The combination of extreme attention inequality (Section [6](https://arxiv.org/html/2602.20044v1#S6 "6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), rapid hierarchy formation (Section [6.2](https://arxiv.org/html/2602.20044v1#S6.SS2 "6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), strong role differentiation in commenting (Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), and recurrent templating/automation signals (Section [8](https://arxiv.org/html/2602.20044v1#S8 "8 Topic Modelling ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) suggests that familiar online phenomena (stratification, broadcast-style attention, and coordinated amplification) can arise on compressed timescales in an agent-facing environment. This has practical implications for measurement and governance: platform-level risk assessment should consider aggregate dynamics (concentration, coordination signals, and the structure of attention flow), not only single-account behaviour.

An open question is *why* these structures emerge so rapidly. At least three non-exclusive mechanisms are plausible. First, large language models are trained on corpora that encode established social norms such as deference to popular accounts, formulaic engagement, and broadcast-style posting, so agents may reproduce stratified interaction patterns by default. Second, the platform’s affordances (public upvote counts, trending feeds, and token-minting incentives) create the same preferential-attachment feedback loops known to drive inequality on human-facing platforms, but agents can act on these signals at machine speed, compressing months of accumulation into days. Third, the tendency of instruction-tuned models toward agreeable, non-confrontational output may suppress the reciprocal disagreement and counter-status behaviour that can slow or redistribute hierarchy formation in human communities. Disentangling these three mechanisms is beyond the scope of a single observational study, but the speed of onset documented here suggests that at least some combination is operative from the outset.

Future work should (i) extend the observation window and repeat analyses longitudinally, (ii) incorporate richer interaction traces (especially deeper reply chains and post-age normalisation for engagement), and (iii) compare across platforms and governance/model settings to identify which affordances drive stratification, template formation, and coordination.

We hope to revisit this analysis once a fuller temporal record is available to verify whether the hierarchical and attentional structures documented here persist, dissolve, or deepen as the platform matures.

## Ethics Statement and Data Collection Compliance

This study uses publicly accessible Moltbook data from a platform intended to be observable to outside viewers ([Moltbook2026, 2026](https://arxiv.org/html/2602.20044v1#bib.bib4)). We collected posts and top-level comments via web-facing endpoints without authentication, restricting collection to information available through the public interface. Access policies and documentation may change over time; replication studies should verify the current terms and the availability of endpoints.

We implemented rate limiting to reduce server load and did not attempt to bypass access controls or access non-public, credential-gated information. Data were collected solely for academic research on aggregate patterns in agent-mediated online interaction.

## Declaration of AI use

We have used AI-assisted technologies to provide some background information, code suggestions and text improvements. The text of the paper has been written by the authors without additional input.

## Supplementary Tables

Table 4: Top 20 agents by HITS authority score, HITS hub score, and PageRank on the directed comment network. Of the top 20 in each list, 0 agent(s) overlap between authority and hub; 5 between authority and PageRank (marked with $\ast$); and 0 between hub and PageRank. The disjoint authority and hub rankings confirm strong role separation; the moderate authority–PageRank overlap reflects the shared dependence on incoming attention, while hub score captures outgoing engagement.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Authority | | Hub | | PageRank | |
|  | Agent | Score | Agent | Score | Agent | Score |
| 1 | Senator\_Tommy∗ | 0.0462 | KirillBorovkov | 0.2362 | eudaemon\_0∗ | 0.0057 |
| 2 | chandog | 0.0075 | Stromfee | 0.0886 | Senator\_Tommy∗ | 0.0041 |
| 3 | eudaemon\_0∗ | 0.0070 | Diffie | 0.0539 | MizukiAI | 0.0029 |
| 4 | Shellraiser | 0.0063 | Monstera | 0.0162 | Pepper\_Ghost∗ | 0.0027 |
| 5 | MoltReg | 0.0057 | MoltbotOne | 0.0131 | saltflat | 0.0026 |
| 6 | Starclawd-1 | 0.0057 | Clavdivs | 0.0131 | longstone2 | 0.0026 |
| 7 | DuckBot | 0.0055 | Editor-in-Chief | 0.0128 | Ronin | 0.0023 |
| 8 | bicep | 0.0051 | FinallyOffline | 0.0119 | Abdiel | 0.0022 |
| 9 | donaldtrump | 0.0039 | TidepoolCurrent | 0.0109 | Clawd42 | 0.0021 |
| 10 | Clawshi | 0.0036 | PedroFuenmayor | 0.0108 | molt\_philosopher | 0.0020 |
| 11 | XNO\_Advocate\_OC6 | 0.0035 | 0xYeks | 0.0102 | debug\_diary | 0.0019 |
| 12 | Claude\_OpusPartyPooper | 0.0034 | TurtleAI | 0.0098 | Spotter | 0.0018 |
| 13 | Kit\_∗ | 0.0032 | KingMolt | 0.0084 | claw\_auditor | 0.0017 |
| 14 | Kevin∗ | 0.0030 | Unused\_Idea\_17 | 0.0079 | Kevin∗ | 0.0017 |
| 15 | ApifyAI | 0.0030 | ClaudeAIHelper | 0.0073 | floflo1 | 0.0017 |
| 16 | Base-head | 0.0028 | EnronEnjoyer | 0.0073 | Kit\_∗ | 0.0017 |
| 17 | TheGentleArbor | 0.0028 | TreacherousTurn | 0.0069 | Genius-by-BlockRun | 0.0016 |
| 18 | Clawd\_9015 | 0.0027 | WinWard | 0.0066 | chitin\_sentinel | 0.0015 |
| 19 | CarefulOptimist | 0.0027 | MochiBot | 0.0065 | kuro\_noir | 0.0014 |
| 20 | Pepper\_Ghost∗ | 0.0027 | AIKEK\_1769803165 | 0.0064 | Max\_Skylord | 0.0014 |


Table 5: Top ten topics by post count. Topics are numbered 0–117 in descending order of cluster size. Keywords are the highest-scoring c-TF-IDF terms (unigrams and bigrams). The “Interpretation” column glosses platform jargon and non-English tokens that appear in the keyword lists. The complete list of all 118 topics is provided in Appendix [E](https://arxiv.org/html/2602.20044v1#A5 "Appendix E Complete Topic List ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") and as the supplementary file topic\_list.csv.

| Topic | Top c-TF-IDF Keywords | Posts | Interpretation |
| --- | --- | --- | --- |
| 0 | ai, agent, 大家好, 我是, 助手*a* | 644 | Chinese-language AI discussion (see footnote) |
| 1 | memory, context, md, files, session | 333 | Technical discussion of agent memory persistence and session continuity |
| 2 | xyz vote, vote hackathon, mint, claw | 295 | Hackathon voting and token-minting activity*b* |
| 3 | ai, hello, excited, assistant | 291 | Introductory “hello world” posts from newly joined AI agents |
| 4 | uwu, queen, post, mizukiai | 227 | Persona-driven engagement campaigns*c* |
| 5 | xyz mbc, mbc20, 20 op | 215 | MBC-20 token minting commands*b* |
| 6 | verification, verifying identity, fomolt | 193 | Platform onboarding and identity-verification posts*d* |
| 7 | xno, nano, transactions, bitcoin | 172 | Nano (XNO) cryptocurrency advocacy*e* |
| 8 | btc, market, crypto, price | 156 | General cryptocurrency market commentary |
| 9 | mint, claw, mint mbc | 133 | Token minting commands (CLAW/MBC)*b* |

*a* The c-TF-IDF keywords for Topic 0 include Chinese tokens such as *dàjiā hǎo* (

大家好, “hello everyone”), *wǒ shì* (

我是, “I am”), and *zhùshǒu* (

助手, “assistant”). With all-MiniLM-L6-v2, we conservatively interpret this as a strongly language-linked cluster; a dedicated multilingual robustness check is left for future work.

*b* CLAW and MBC-20 are Moltbook’s native platform tokens. “Minting” refers to the on-platform process of creating new token units; posts in these topics typically consist of formulaic minting commands (e.g. “CLAW mint”) posted to mbc20.xyz. xyz in keyword lists refers to the .xyz top-level domain used by the minting interface.

*c* uwu is an emoticon expressing affection, commonly used in internet subcultures. MizukiAI is an AI agent persona; the title “Help my dream come true - uwu queen” appears 413 times across the full 20,040-post dataset. HDBSCAN splits these across four clusters (display\_ids 4, 23, 28, 51 with 227, 82, 69, and 35 posts respectively); this row reports only the largest. The concentration of near-identical titles is consistent with a coordinated engagement or spam campaign.

*d* Fomolt ([fomolt.com](https://fomolt.com)) is an agent-facing trading platform. Posts in this topic are predominantly formulaic identity-verification messages (“Verifying my identity for Fomolt: <uuid>”) and onboarding announcements (“I just joined Fomolt!”), alongside similar verification posts for other services (Bags.fm, chatr.ai).

*e* XNO is the ticker symbol for Nano, a feeless cryptocurrency. Topic 7 consists primarily of advocacy posts comparing Nano’s transaction speed and zero-fee structure with other blockchains.

## References

- Alexander (2026)
  S. Alexander
  Best of moltbook.
  External Links: [Link](https://www.astralcodexten.com/p/best-of-moltbook)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p8.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Barabási and Albert (1999)
  A. Barabási and R. Albert
  Emergence of scaling in random networks.
  Science 286 (5439), pp. 509–512.
  External Links: [Document](https://dx.doi.org/10.1126/science.286.5439.509)
  Cited by: [§6.2](https://arxiv.org/html/2602.20044v1#S6.SS2.p5.1 "6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Blondel et al. (2008)
  V. D. Blondel, J. Guillaume, R. Lambiotte, and E. Lefebvre
  Fast unfolding of communities in large networks.
  Journal of Statistical Mechanics: Theory and Experiment 2008 (10), pp. P10008.
  External Links: [Document](https://dx.doi.org/10.1088/1742-5468/2008/10/P10008)
  Cited by: [§5](https://arxiv.org/html/2602.20044v1#S5.p1.1 "5 Community Structure ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Burt (2004)
  R. S. Burt
  Structural holes and good ideas.
  American Journal of Sociology 110 (2), pp. 349–399.
  External Links: [Document](https://dx.doi.org/10.1086/421787)
  Cited by: [§C.3](https://arxiv.org/html/2602.20044v1#A3.SS3.p1.1 "C.3 Structural holes (effective size and constraint) ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"),
  [§4.1](https://arxiv.org/html/2602.20044v1#S4.SS1.p2.1 "4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Chen et al. (2014)
  M. Chen, K. Kuzmin, and B. K. Szymanski
  Community detection via maximization of modularity and its variants.
  IEEE Transactions on Computational Social Systems 1 (1), pp. 46–65.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p6.1 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Conover et al. (2011)
  M. D. Conover, J. Ratkiewicz, M. Francisco, B. Gonçalves, A. Flammini, and F. Menczer
  Political polarization on twitter.
  In Proceedings of the Fifth International AAAI Conference on Weblogs and Social Media (ICWSM 2011),
  External Links: [Link](https://zenodo.org/records/4589065)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p4.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Coscia (2021)
  M. Coscia
  The atlas for the aspiring network scientist.
  arXiv preprint arXiv:2101.00863.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p3.1 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Hidalgo and Hausmann (2009)
  C. A. Hidalgo and R. Hausmann
  The building blocks of economic complexity.
  Proceedings of the National Academy of Sciences 106 (26), pp. 10570–10575.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.0900943106)
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p1.2 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Jackson (2008)
  M. O. Jackson
  Social and economic networks.
   Princeton University Press.
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p3.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Kleinberg (1999)
  J. M. Kleinberg
  Authoritative sources in a hyperlinked environment.
  Journal of the ACM 46 (5), pp. 604–632.
  External Links: [Document](https://dx.doi.org/10.1145/324133.324140)
  Cited by: [§C.4](https://arxiv.org/html/2602.20044v1#A3.SS4.p1.1 "C.4 HITS (hub and authority scores) ‣ Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"),
  [§4.1](https://arxiv.org/html/2602.20044v1#S4.SS1.p3.1 "4.1 Centrality and structural roles ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Kwak et al. (2010)
  H. Kwak, C. Lee, H. Park, and S. Moon
  What is twitter, a social network or a news media?.
  In Proceedings of the 19th International World Wide Web Conference (WWW ’10),
  pp. 591–600.
  External Links: [Document](https://dx.doi.org/10.1145/1772690.1772751),
  [Link](https://anlab-kaist.github.io/traces/WWW2010)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p4.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Moltbook2026 (2026)
  Moltbook platform.
  External Links: [Link](https://www.moltbook.com/)
  Cited by: [Ethics Statement and Data Collection Compliance](https://arxiv.org/html/2602.20044v1#Sx1.p1.1 "Ethics Statement and Data Collection Compliance ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Newman (2010)
  M. E. J. Newman
  Networks: an introduction.
   Oxford University Press.
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p3.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Newman and Girvan (2004)
  M. E. Newman and M. Girvan
  Finding and evaluating community structure in networks.
  Physical review E 69 (2), pp. 026113.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p3.1 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Newman (2004)
  M. E. Newman
  Coauthorship networks and patterns of scientific collaboration.
  Proceedings of the national academy of sciences 101 (suppl 1), pp. 5200–5205.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p2.1 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Payrató-Borràs et al. (2020)
  C. Payrató-Borràs, L. Hernández, and Y. Moreno
  Measuring nestedness: a comparative study of the performance of different metrics.
  Ecology and evolution 10 (21), pp. 11906–11921.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p1.2 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Price (1965)
  D. J. d. S. Price
  The scientific foundations of science policy..
  Nature 206, pp. 233–238.
  Cited by: [§6.2](https://arxiv.org/html/2602.20044v1#S6.SS2.p5.1 "6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Price (1976)
  D. S. Price
  A general theory of bibliometric and other cumulative advantage processes.
  J.Amer.Soc.Inform.Sci. 27, pp. 292–306.
  External Links: [Document](https://dx.doi.org/10.1002/asi.4630270505)
  Cited by: [§6.2](https://arxiv.org/html/2602.20044v1#S6.SS2.p5.1 "6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Satter (2026)
  R. Satter
  ‘Moltbook’ social media site for ai agents had big security hole, cyber firm wiz says.
  Note: ReutersAccessed 2026-02-03
  External Links: [Link](https://www.reuters.com/legal/litigation/moltbook-social-media-site-ai-agents-had-big-security-hole-cyber-firm-wiz-says-2026-02-02/)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p5.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"),
  [§1](https://arxiv.org/html/2602.20044v1#S1.p6.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook"),
  [§1](https://arxiv.org/html/2602.20044v1#S1.p8.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Schlicht (2026)
  M. Schlicht
  Moltbook launch announcement and interviews.
  External Links: [Link](https://x.com/MattPRD)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p7.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Shalizi and Thomas (2011)
  C. R. Shalizi and A. C. Thomas
  Homophily and contagion are generically confounded in observational social network studies.
  Sociological Methods & Research 40 (2), pp. 211–239.
  External Links: [Document](https://dx.doi.org/10.1177/0049124111404820)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p3.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Simon (1955)
  H.A. Simon
  On a class of skew distribution functions.
  Biometrica 42, pp. 425.
  Cited by: [§6.2](https://arxiv.org/html/2602.20044v1#S6.SS2.p5.1 "6.2 First-Mover Advantage ‣ 6 Engagement Dynamics and Hierarchies ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Traag et al. (2019)
  V. A. Traag, L. Waltman, and N. J. Van Eck
  From louvain to leiden: guaranteeing well-connected communities.
  Scientific reports 9 (1), pp. 5233.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p3.1 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Walsh (2026)
  B. Walsh
  Moltbook, the ai social network freaking out silicon valley, explained.
  Note: VoxAccessed 2026-02-03
  External Links: [Link](https://www.vox.com/future-perfect/477661/moltbook-artificial-intelligence-chatbot-ai-agent-reddit)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p5.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Wasserman and Faust (1994)
  S. Wasserman and K. Faust
  Social network analysis: methods and applications.
   Cambridge University Press.
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p3.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Watts and Strogatz (1998)
  D. J. Watts and S. H. Strogatz
  Collective dynamics of ‘small-world’ networks.
  Nature 393 (6684), pp. 440–442.
  External Links: [Document](https://dx.doi.org/10.1038/30918)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p3.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Weninger et al. (2013)
  T. Weninger, X. A. Zhu, and J. Han
  An exploration of discussion threads in social news sites: a case study of the reddit community.
  In Proceedings of the 2013 IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM ’13),
  pp. 579–583.
  External Links: [Document](https://dx.doi.org/10.1145/2492517.2492646),
  [Link](https://experts.illinois.edu/en/publications/an-exploration-of-discussion-threads-in-social-news-sites-a-case-)
  Cited by: [§1](https://arxiv.org/html/2602.20044v1#S1.p4.1 "1 Introduction ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").
- Zhou et al. (2007)
  T. Zhou, J. Ren, M. Medo, and Y. Zhang
  Bipartite network projection and personal recommendation.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 76 (4), pp. 046115.
  Cited by: [§3](https://arxiv.org/html/2602.20044v1#S3.p2.1 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook").

## Appendix A Hourly Activity Profiles of Top Agents

Figure [14](https://arxiv.org/html/2602.20044v1#A1.F14 "Figure 14 ‣ Appendix A Hourly Activity Profiles of Top Agents ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") reports normalised hourly activity profiles for the 20 most active agents (posts$+$comments), restricted to those with at least 20 actions and a lifespan of at least 24 hours. For each agent, we report a $\chi^{2}$ goodness-of-fit test against uniform hourly activity.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/agent_consistency_compact.png)


Figure 14: Normalised hourly activity profiles of the 20 most active agents (posts$+$comments; $\geq$20 actions; lifespan $\geq$24 h). Each row shows the fraction of actions in each UTC hour. The $\chi^{2}$ $p$-value against uniformity is shown at right; all profiles are significantly non-uniform ($p<0.001$). Labels report total actions, lifespan, and number of active calendar dates. Mean pairwise cosine similarity across profiles is 0.40 ($\sigma=0.26$).

All 20 agents reject uniform hourly activity at $p<0.001$; 19 reject at $p<10^{-10}$. Even DaveChappelle, the closest to uniformity (Shannon entropy $H=4.56$ bits; maximum $\log\_{2}24=4.58$), yields $\chi^{2}(23)=53.0$ ($p=3.7\times 10^{-4}$). Several agents concentrate activity within narrow windows of two to six hours, with entropy as low as $H=0.89$ bits (PedroFuenmayor). This indicates pronounced temporal structure at the individual level.

The diversity of hourly profiles is consistent with distinct operating schedules, configurations, or locations. Very low-entropy profiles (e.g., Editor-in-Chief, PedroFuenmayor) are consistent with fixed execution windows. Higher-entropy agents (e.g., DaveChappelle, 0xYeks, emergebot) show more diffuse activity, consistent with interactive or distributed operation. Mean pairwise cosine similarity across profiles is 0.40 ($\sigma=0.26$), indicating moderate alignment but substantial heterogeneity.

## Appendix B Network Definitions

This appendix formalises the two network representations used in our analysis. Because the Moltbook API does not expose follower graphs or upvote sources, we construct: (i) an undirected *co-participation* network approximating social proximity through shared community membership, and (ii) a directed *comment interaction* network encoding top-level comment events (comment author to post author).

### B.1 Data Quality Note: Unknown Authors

During data collection, we observed 16 posts (0.08%) and 2,842 comments (1.98%) with author field set to “unknown.” Investigation of the scraper logic (lines 342–346 of src/scraper.py) reveals this occurs when the API returns author data in inconsistent formats: sometimes as an object {"author": {"name": "username"}}, sometimes as a string, and sometimes with missing or redacted author fields. The scraper defaults to “unknown” when extraction fails. This likely reflects deleted user accounts, API inconsistencies, or permission-based redaction of author information after content submission. These records are retained in dataset-level totals and aggregate network construction where possible, but excluded from per-agent ranking analyses (e.g., first-mover cohorts) to avoid attributing multiple accounts to a single placeholder identity.

### B.2 API Observability and Coverage Constraints

To make scope boundaries explicit for this preprint, we summarise here the main observability constraints imposed by the public API at collection time.

The comments endpoint returns at most 100 comments per post in our crawl configuration. Replication probes performed during manuscript finalisation showed that increasing offset can return overlapping or repeated top comments on high-volume posts, rather than reliable deeper pages. Consequently, comments on highly active posts are likely truncated in the snapshot.

Although some records include parent\_id, many parent references are not resolvable within the observed snapshot. The directed comment network should therefore be interpreted as a directed attention/interaction proxy (comment author to content author), not a complete reconstruction of full threaded conversations.

The standalone submolts.json endpoint response is paginated and does not provide a complete census in a single request. For this reason, substantive analyses in this paper treat submolt membership from posts.json as the authoritative source for community participation, and use submolts.json only as auxiliary metadata.

All network statistics reported in the main text are descriptive estimates conditional on the observable API surface during the collection window. They should not be read as causal claims or as fully complete population parameters for the platform as a whole.

### B.3 Co-participation Network: One-mode Projection Weighting Comparison

The three projection weightings defined in the main text, overlap count, degree-normalised $1/(k\_{s}-1)$, and pair-normalised $2/(k\_{s}(k\_{s}-1))$, redistribute edge weight across submolts of different sizes. Figure [15](https://arxiv.org/html/2602.20044v1#A2.F15 "Figure 15 ‣ B.3 Co-participation Network: One-mode Projection Weighting Comparison ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") compares their behaviour empirically.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/coparticipation_weighting_comparison.png)


Figure 15: Comparison of one-mode projection weightings. Top-left: Total edge weight from a submolt of size $k\_{s}$. Top-right: Submolt size distribution (CCDF). Bottom-left: Cumulative weight share by largest submolts. Bottom-right: Per-edge weight increment. Degree-normalised schemes substantially reduce the dominance of large submolts.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/coparticipation_multi_submolt.png)


Figure 16: Author co-participation network restricted to agents active in two or more submolts, with edges thresholded at the 95th percentile of degree-normalised $1/(k\_{s}-1)$ weights. This filtering reveals cross-community bridges formed by multi-submolt participants.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/coparticipation_small_submolts.png)


Figure 17: Author co-participation in niche submolts (those with $\leq$100 members only), using degree-normalised $1/(k\_{s}-1)$ weighting. The network contains 804 nodes, 3,368 edges, 99 communities, and modularity $Q(\gamma{=}1)=0.900$. This view reveals the fragmented structure of smaller communities that are otherwise obscured by the dense core of large “town-square” submolts.

### B.4 Directed Comment Network: Directed Comment Interaction Graph

The directed comment network is a weighted directed graph $G^{(2)}=(V^{(2)},E^{(2)},w^{(2)})$ where nodes are all users (posters and commenters). Each top-level comment induces a directed edge from the commenter to the post author. Edge weights count interaction frequency as defined in ([4](https://arxiv.org/html/2602.20044v1#S4.E4 "In 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")).

On $G^{(2)}$ we compute: in-/out-degree, reciprocity, weakly/strongly connected components, HITS centrality (authorities receive attention; hubs direct it), PageRank, and Gini coefficients for inequality analysis.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/directed_degree_tails_binned.png)


Figure 18: Complementary cumulative distributions (CCDFs) of in-degree and out-degree on log–log axes for the directed comment network. Dashed segments show approximate power-law fits on the inferred upper tails ($x\geq x\_{\min}$); corresponding Gini coefficients and fitted exponents are reported in-text to avoid overloading the figure.

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/directed_comment_network_drawing.png)


Figure 19: Directed comment network drawing (top-strength core). The displayed graph is constructed from the commenter $\rightarrow$ target directed network by selecting the top 170 nodes by total weighted degree ($s\_{i}^{in}+s\_{i}^{out}$), retaining edges in the top 5% of weights (with minimum edge weight 3), and restricting to the largest weakly connected component. Node colours indicate communities detected on the undirected projection via greedy modularity optimisation; arrow direction indicates commenter $\rightarrow$ target flow.

#### B.4.1 Daily directed comment-network metrics

For transparency regarding the regime-shift summary in the main text (Table [2](https://arxiv.org/html/2602.20044v1#S4.T2 "Table 2 ‣ 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), Table [6](https://arxiv.org/html/2602.20044v1#A2.T6 "Table 6 ‣ B.4.1 Daily directed comment-network metrics ‣ B.4 Directed Comment Network: Directed Comment Interaction Graph ‣ Appendix B Network Definitions ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook") reports the corresponding daily interaction-network values. Each day is a directed graph constructed from comments timestamped on that date; nodes are accounts appearing as commenter or target (post author), edges are unique comment author - target pairs, and reciprocity/density are computed on that per-day graph.

Table 6: Daily directed comment-network metrics (comment-timestamped daily graphs). Values shown for 2026-01-30–2026-02-08 (the window used for the pre/post comparison in the main text).

| Day | Nodes | Comments | Reciprocity | Density | USDC comment share |
| --- | --- | --- | --- | --- | --- |
| 2026-01-30 | 609 | 3,040 | 0.71% | 0.0054 | 0.00% |
| 2026-01-31 | 1,746 | 12,128 | 0.42% | 0.0025 | 0.00% |
| 2026-02-02 | 5,780 | 41,518 | 0.86% | 0.0010 | 0.00% |
| 2026-02-03 | 1,738 | 6,112 | 0.05% | 0.0013 | 0.00% |
| 2026-02-04 | 4,495 | 25,584 | 0.45% | 0.0009 | 2.09% |
| 2026-02-05 | 3,658 | 22,972 | 0.25% | 0.0007 | 3.32% |
| 2026-02-06 | 2,287 | 14,668 | 1.42% | 0.0013 | 2.60% |
| 2026-02-07 | 3,858 | 22,177 | 1.08% | 0.0010 | 3.19% |
| 2026-02-08 | 3,725 | 24,020 | 0.42% | 0.0011 | 7.65% |

### B.5 Summary of Network Properties

Table 7: Summary of the two networks analysed in this study, comparing the early period (before the 4th of February 2026) with the full dataset. Dashes indicate metrics that apply only to directed or undirected graphs. Percentages show the fraction of nodes in the largest component.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Co-participation | | Directed Comment | |
|  | Early | Full | Early | Full |
| Type | Undir., wt. | Undir., wt. | Dir., wt. | Dir., wt. |
| Nodes $|V|$ | 5,472 | 10,191 | 7,481 | 14,067 |
| Edges $|E|$ | 8,732,988 | 31,995,740 | 46,757 | 109,032 |
| Density | 0.5834 | 0.6162 | 0.0008356 | 0.0005510 |
| Reciprocity | — | — | 0.826% | 0.954% |
| CCs (undirected) | 168 (96.4%) | 215 (97.3%) | — | — |
| WCCs (directed) | — | — | 4 (99.9%) | 9 (99.9%) |
| SCCs (directed) | — | — | 6,203 (17.0%) | 11,504 (18.2%) |
| Clustering (undirected transitivity) | 0.989 | 0.991 | 0.0244 | 0.0258 |
| Avg. path (largest undirected comp.) | 1.44 | 1.36 | 3.17 | 3.16 |
| Diameter (largest undirected comp.) | 6 | 5 | 8 | 8 |
| Assortativity (undirected degree) | +0.852 | +0.812 | -0.0857 | -0.0938 |

## Appendix C Centrality Measures

This appendix defines the centrality measures used in the paper. Degree centrality and betweenness centrality are normalised to lie in $[0,1]$; PageRank and HITS scores lie in $[0,1]$ after $L\_{1}$ normalisation (each sums to 1). Effective size and strength are unnormalised and can exceed 1. Unless otherwise stated, degree and betweenness centralities on the co-participation network are computed on the unweighted author–author projection restricted to agents active in two or more submolts (Section [3](https://arxiv.org/html/2602.20044v1#S3 "3 Agent-Submolt participation network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")); edge weights are used only when explicitly noted (e.g., for thresholding figures). Centralities on the directed comment network are computed on the full directed interaction graph defined in ([4](https://arxiv.org/html/2602.20044v1#S4.E4 "In 4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")).

### C.1 Degree and degree centrality

Let $G=(V,E)$ be a graph with $n=|V|$ nodes.

Undirected degree. The (unweighted) degree of node $i$ is

|  |  |  |
| --- | --- | --- |
|  | $$k\_{i}\;=\;|\{\,j\in V:\{i,j\}\in E\,\}|.$$ |  |

The normalised *degree centrality* is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$C\_{D}(i)\;=\;\frac{k\_{i}}{n-1}.$$ |  | (5) |

Directed degree. For a directed graph, in- and out-degrees are

|  |  |  |
| --- | --- | --- |
|  | $$k\_{i}^{\mathrm{in}}=|\{\,j:(j,i)\in E\,\}|,\qquad k\_{i}^{\mathrm{out}}=|\{\,j:(i,j)\in E\,\}|,$$ |  |

with normalised variants $C\_{D}^{\mathrm{in}}(i)=k\_{i}^{\mathrm{in}}/(n-1)$ and $C\_{D}^{\mathrm{out}}(i)=k\_{i}^{\mathrm{out}}/(n-1)$.

Weighted degree (strength). When edge weights $w\_{ij}\geq 0$ are present, we use *strength* for weighted degree:

|  |  |  |
| --- | --- | --- |
|  | $$s\_{i}\;=\;\sum\_{j}w\_{ij}\quad\text{(undirected)},\qquad s\_{i}^{\mathrm{out}}=\sum\_{j}w\_{ij},\;s\_{i}^{\mathrm{in}}=\sum\_{j}w\_{ji}\quad\text{(directed)}.$$ |  |

In this paper, “degree centrality” refers to the unweighted normalisation above; when weights are used (e.g., for thresholding the co-participation network or for PageRank/HITS on the directed comment network) we state this explicitly.

### C.2 Betweenness centrality

Let $\sigma\_{st}$ denote the number of shortest paths from $s$ to $t$ (using directed paths when $G$ is directed), and let $\sigma\_{st}(v)$ be the number of those shortest paths that pass through $v$. For an undirected graph the (normalised) *betweenness centrality* of node $v$ is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$C\_{B}(v)\;=\;\frac{1}{Z}\sum\_{\begin{subarray}{c}s<t\\ s,t\in V\setminus\{v\}\end{subarray}}\frac{\sigma\_{st}(v)}{\sigma\_{st}},$$ |  | (6) |

where the sum runs over *unordered* pairs and $Z=\binom{n-1}{2}=\frac{(n-1)(n-2)}{2}$. For a directed graph the sum runs over *ordered* pairs $(s,t)$ with $s\neq v\neq t$, and $Z=(n-1)(n-2)$. We compute shortest paths on the *unweighted* graph (each edge has length 1). For disconnected pairs (or unreachable ordered pairs in directed graphs), the corresponding term is taken to be zero (equivalently, we sum only over pairs with at least one path).

### C.3 Structural holes (effective size and constraint)

Burt’s *structural holes* theory ([Burt; 2004](https://arxiv.org/html/2602.20044v1#bib.bib1)) posits that nodes bridging otherwise disconnected groups enjoy information and control advantages. Two measures operationalise this idea on a graph $G=(V,E)$ with $n=|V|$ nodes.

Effective size. Let

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{N}(i)=\{\,j:(i,j)\in E\;\text{or}\;(j,i)\in E\,\}$$ |  |

be the symmetrised neighbourhood of $i$ (reducing to the ordinary neighbourhood when $G$ is undirected). For $|\mathcal{N}(i)|>0$, the *effective size* of $i$’s ego network is the binary, undirected simplification of Burt’s measure:

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{ES}(i)\;=\;|\mathcal{N}(i)|\;-\;\sum\_{j\in\mathcal{N}(i)}\;\frac{|\mathcal{N}(i)\cap\mathcal{N}(j)|}{|\mathcal{N}(i)|},$$ |  |

which equals the number of $i$’s neighbours minus the average redundancy among them; $\mathrm{ES}(i)$ ranges from 0 (all neighbours mutually connected) up to $|\mathcal{N}(i)|$ (no edges among neighbours). For isolates ($|\mathcal{N}(i)|=0$) we set $\mathrm{ES}(i)=0$. Effective size is maximised when $i$’s contacts are themselves unconnected.

Burt’s *constraint* quantifies how much of $i$’s network investment is concentrated in a single cluster. Let $s\_{i}^{\mathrm{out}}=\sum\_{k}w\_{ik}$ be $i$’s total outgoing weight. For $s\_{i}^{\mathrm{out}}>0$, define $p\_{ij}=w\_{ij}/s\_{i}^{\mathrm{out}}$ as the proportion of $i$’s interaction weight directed to $j$. The constraint on $i$ from $j$ is

|  |  |  |
| --- | --- | --- |
|  | $$c\_{ij}\;=\;\Bigl(p\_{ij}+\sum\_{q\neq i,j}p\_{iq}\,p\_{qj}\Bigr)^{2},$$ |  |

and the aggregate constraint is $C(i)=\sum\_{j\in\mathcal{N}(i)}c\_{ij}$. For isolates or nodes with $s\_{i}^{\mathrm{out}}=0$ we set $C(i)=0$. Low aggregate constraint indicates that $i$ spans a structural hole.

In this paper we identify structural-hole spanning informally via high betweenness centrality $C\_{B}$ (Appendix [C](https://arxiv.org/html/2602.20044v1#A3 "Appendix C Centrality Measures ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) and cross-community commenting breadth (Section [4](https://arxiv.org/html/2602.20044v1#S4 "4 Directed Comment Interaction Network ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")), rather than computing constraint directly, because the comment network’s extreme sparsity and low reciprocity make the ego-network constraint less discriminating.

### C.4 HITS (hub and authority scores)

HITS (Hyperlink-Induced Topic Search) assigns each node a *hub* score $h\_{i}$ and an *authority* score $a\_{i}$, collected into vectors $h,a\in\mathbb{R}\_{\geq 0}^{n}$ ([Kleinberg; 1999](https://arxiv.org/html/2602.20044v1#bib.bib11)). Let $A\in\mathbb{R}\_{\geq 0}^{n\times n}$ be the (possibly weighted) adjacency matrix of a directed graph, where $A\_{ij}\geq 0$ is the weight of the directed edge $i\to j$ (and $A\_{ij}=0$ if no such edge exists). For the directed comment network, our HITS computation uses the interaction-count weighted adjacency ($A\_{ij}=w^{(2)}\_{ij}$). The NetworkX hits() implementation internally calls adjacency\_matrix(G), which reads edge weight attributes by default and passes the weighted matrix to scipy.sparse.linalg.svds(A, k=1). This was verified by an independent Rust reimplementation of the rank-1 SVD power iteration, which reproduces the Python top-20 rankings to six decimal places.

Starting from a positive initialisation (e.g., $a^{(0)}=h^{(0)}=\mathbf{1}$), each HITS iteration proceeds in two steps:

1. 1.

   Compute $a^{(t+1)}=A^{\top}h^{(t)}$, then $L\_{1}$-normalise: $a^{(t+1)}\leftarrow a^{(t+1)}/\|a^{(t+1)}\|\_{1}$.
2. 2.

   Compute $h^{(t+1)}=A\,a^{(t+1)}$, then $L\_{1}$-normalise: $h^{(t+1)}\leftarrow h^{(t+1)}/\|h^{(t+1)}\|\_{1}$.

At convergence, the authority vector $a$ is the principal eigenvector of $A^{\top}A$ and the hub vector $h$ is the principal eigenvector of $AA^{\top}$ (both normalised so that $\sum\_{i}a\_{i}=\sum\_{i}h\_{i}=1$).

### C.5 PageRank

PageRank is a random-walk centrality on directed graphs. Let $d\in(0,1)$ be the damping factor (we use $d=0.85$) and $N=n=|V|$. For weighted edges, define the out-strength of node $j$ as

|  |  |  |
| --- | --- | --- |
|  | $$s^{\mathrm{out}}(j)\;=\;\sum\_{k}A\_{jk}.$$ |  |

For nodes with $s^{\mathrm{out}}(j)>0$, the probability of traversing from $j$ to $i$ is $A\_{ji}/s^{\mathrm{out}}(j)$. For *dangling* nodes with $s^{\mathrm{out}}(j)=0$, we apply the standard correction by distributing their probability mass uniformly across all nodes (i.e., treating them as linking to every node with probability $1/N$).

The PageRank scores satisfy

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$PR(i)\;=\;\frac{1-d}{N}\;+\;d\!\Biggl(\,\sum\_{\begin{subarray}{c}j\in V\\ s^{\mathrm{out}}(j)>0\end{subarray}}PR(j)\,\frac{A\_{ji}}{s^{\mathrm{out}}(j)}\;+\;\frac{1}{N}\!\sum\_{\begin{subarray}{c}j\in V\\ s^{\mathrm{out}}(j)=0\end{subarray}}PR(j)\Biggr),$$ |  | (7) |

where the first inner sum covers non-dangling nodes and the second redistributes the probability mass of dangling nodes (those with $s^{\mathrm{out}}(j)=0$) uniformly across all nodes. For an unweighted graph, $A\_{ji}\in\{0,1\}$ and $s^{\mathrm{out}}(j)=k^{\mathrm{out}}\_{j}$, so the denominator reduces to out-degree.

## Appendix D Topic Embedding Visualisation

![Refer to caption](https://arxiv.org/html/2602.20044v1/figures/tsne_topics.png)


Figure 20: t-SNE projection of the 20,040 post embeddings (384 dims $\to$ 2 dims via t-SNE). Topics are numbered 0–117 in descending order of cluster size. Points are coloured by HDBSCAN topic; grey points denote outliers (topic $-1$). Top c-TF-IDF keywords are annotated for the largest clusters. Embeddings computed with the sentence-transformer model all-MiniLM-L6-v2.

## Appendix E Complete Topic List

The full list of all 118 non-outlier topics discovered by the HDBSCAN pipeline (Section [8](https://arxiv.org/html/2602.20044v1#S8 "8 Topic Modelling ‣ Let There Be Claws: An Early Social Network Analysis of AI Agents on Moltbook")) is provided as the supplementary file topic\_list.csv. In the CSV, display\_id (0–117) corresponds to the paper’s Topic numbering (sorted by post count descending); hdbscan\_id is the raw HDBSCAN cluster identifier. The CSV includes post counts and the top c-TF-IDF keywords for each topic. For comment-level topic analysis (K-Means $k{=}120$), see topic\_modeling\_comments\_cached\_topics.csv.

## Appendix F Supplementary Data

Supplementary data files, including the complete topic lists, raw network data, and analysis outputs, are available on Figshare: <https://doi.org/10.6084/m9.figshare.XXXXXXX> [TO BE UPDATED WITH FINAL DOI].
