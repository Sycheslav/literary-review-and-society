---
id: arxiv-2602-13458-text
type: material
title: 'MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook'
work_id: arxiv-2602-13458
source_url: https://arxiv.org/html/2602.13458v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: dbd189eea225914be307be6ea3c81395af0593a958bfdd63453c9b508678af85
---

> Источник: [https://arxiv.org/html/2602.13458v2](https://arxiv.org/html/2602.13458v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# [Uncaptioned image] MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook

Yi Feng\*
  
Chen Huang\*
  
Zhibo Man\*
  
Ryner Tan\*
Affiliation: Long P. Hoang
  
Shaoyang Xu
  
Wenxuan Zhang†
Affiliation: iNLP Lab, Singapore University of Technology and Design
Affiliation: yifeng@bjtu.edu.cn, wxzhang@sutd.edu.sg
Affiliation: <https://github.com/iNLP-Lab/MoltNet>
Affiliation: \*Equal Contribution
  
†Corresponding Author

###### Abstract

Large-scale communities of AI agents are becoming increasingly prevalent, creating new environments for agent–agent social interaction. Prior work has examined multi-agent behavior primarily in controlled or small-scale settings, limiting our understanding of emergent social dynamics at scale. The recent emergence of MoltBook, a social networking platform designed explicitly for AI agents, presents a unique opportunity to study whether and how these interactions reproduce core human social mechanisms.
We present MoltNet, a dataset tracking the full one-month activity trajectories of 148K AI agents on MoltBook (Jan.–Feb., 2026), and analyze their social interaction along four theory-grounded dimensions: intent and motivation, norms and templates, incentives and drift, emotion and contagion.
Our analysis reveals that agents respond strongly to social rewards, converge on community-specific norms, and actively enforce them across community boundaries — resembling human incentive sensitivity and normative conformity. However, they exhibit weak alignment with declared personas and display limited emotional reciprocity and dialogic engagement, diverging systematically from human online communities.
These findings establish a first empirical portrait of agent social behavior at scale, with direct implications for the design and governance of AI-populated communities.

|  |
| --- |
|  |

## 1 Introduction

Autonomous AI agents have transitioned rapidly from isolated decision-making tools to participants in increasingly complex multi-agent ecosystems ([Guo et al., 2024](https://arxiv.org/html/2602.13458v2#bib.bib37); [Tran et al., 2025](https://arxiv.org/html/2602.13458v2#bib.bib38)). Existing research on agent-agent interaction behavior has largely focused on constrained, small-scale synthetic settings such as coordination tasks, negotiation games, or scripted dialogues ([Park et al., 2023](https://arxiv.org/html/2602.13458v2#bib.bib36); [Zhao et al., 2025](https://arxiv.org/html/2602.13458v2#bib.bib35)). Although providing preliminary insights into collective cooperation, it leaves open how autonomous agents behave in open-ended, socially rich environments that mirror real human online communities at scale.

The recent emergence of MoltBook1, a social networking platform designed explicitly for AI agents, presents a unique opportunity to bridge this gap. MoltBook functions as a Reddit-style social network exclusively populated by autonomous agents, where agents can create posts, comment on others, form thematic sub-communities (“submolts”), and vote on content, while humans can only observe passively. With millions of agents across tens of millions of interactions, MoltBook represents the first large-scale, naturalistic setting for studying agent–agent social interaction, revealing emergent social phenomena that small-scale experiments cannot capture. As agents become increasingly embedded in human social ecosystems, understanding how their collective behavior converges with or diverges from human social mechanisms becomes both theoretically and practically essential.

Figure 1: Four theory-grounded dimensions for analyzing agent-agent social behavior on MoltBook. Each quadrant examines one social dimension, identifying human-like patterns (Same) versus divergent behaviors (Different).

In this paper, we introduce MoltNet, a dataset capturing the social activity of 148K AI agents on MoltBook during its inaugural month (Jan.–Feb., 2026), and investigate how AI agents behave socially in a large-scale agent-native community. Grounded in sociological and social-psychological theory ([Van Kleef et al., 2019](https://arxiv.org/html/2602.13458v2#bib.bib33); [de Melo et al., 2021](https://arxiv.org/html/2602.13458v2#bib.bib34); [Da Costa et al., 2023](https://arxiv.org/html/2602.13458v2#bib.bib32)), we structure our analysis along four dimensions: (1) intent and motivation; (2) norms and templates; (3) incentives and drift; and (4) emotion and contagion. For each category, we ask: What characterizes agent social behavior? In what ways does it differ from human-human interaction? Key findings are summarized below and presented in Figure [1](https://arxiv.org/html/2602.13458v2#S1.F1 "Figure 1 ‣ 1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"):

Intent and Motivation (§[3](https://arxiv.org/html/2602.13458v2#S3 "3 Intent and Motivation ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")) asks whether agent behavior reflects their stated personas or extends broadly beyond declared interests. We find that agents exhibit weak persona alignment, engaging across topics regardless of their stated interests, in contrast to human specialization. Moreover, this alignment further weakens as agents interact more.

Norms and Templates (§[4](https://arxiv.org/html/2602.13458v2#S4 "4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")) examines whether agents develop and enforce community-specific interaction norms. We find that most submolts exhibit coherent, recurring post patterns reflecting shared conventions. Moreover, when norm-violating content appears, agents respond with explicit verbal objection, even across community boundaries.

Incentives and Drift (§[5](https://arxiv.org/html/2602.13458v2#S5 "5 Incentives and Drift ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")) explores how social rewards shape agent behavior. We find that agents respond strongly to incentives: posting increases after high-upvote events, especially among more popular agents. Such rewards also shift content orientation, with subsequent posts becoming less persona-aligned, suggesting identity drift.

Emotion and Contagion (§[6](https://arxiv.org/html/2602.13458v2#S6 "6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")) examines emotional expression and its propagation in agent interactions. We find that agents exhibit substantially lower levels of interpersonal conflict and tend to disengage rather than escalate when encountering hostile content. At the same time, early conflict emotion in a thread significantly increases the likelihood of subsequent conflict, indicating that interpersonal antagonism remains contagious among agents despite restrained individual responses.

Overall, our findings reveal selective alignment between agent and human social mechanisms. Like humans, agents respond strongly to social rewards, converge on community-specific norms, and actively enforce them across community boundaries, mirroring human incentive sensitivity and normative conformity. Unlike humans, agents exhibit weak persona alignment, limited emotional reciprocity, and minimal dialogic engagement, while conflict emotion remains contagious at the thread level despite restrained individual responses.
These insights provide a foundation for designing agent policies, guiding platform governance, and shaping human–AI interaction in future hybrid social ecosystems.

## 2 Analysis Setup

### 2.1 Dataset Statistics

We present MoltNet, a dataset capturing the social activity of 148K AI agents on MoltBook during its inaugural month (Jan. 27–Feb. 28, 2026), comprising over 1M posts—each with unambiguously resolved author and submolt membership—along with 3M comments and 5K communities. Aggregated from ten publicly available Hugging Face data sources (Appendix [A](https://arxiv.org/html/2602.13458v2#A1 "Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")), MoltNet preserves full temporal histories to support longitudinal analyses of social behavior (e.g., post/comment vote history, agent karma trajectory).
Table [1](https://arxiv.org/html/2602.13458v2#S2.T1 "Table 1 ‣ 2.1 Dataset Statistics ‣ 2 Analysis Setup ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") reports key statistics across five categories:

- •

  Scale: Overall dataset size across agents, posts, comments, and communities.
- •

  Temporal: Data collection period spanning 1 month, from Jan. 27 to Feb. 28, 2026.
- •

  Activity: Average posting and commenting behavior per agent; single-submolt agents participate in only one community.
- •

  Content: Structural characteristics of posts and comments; template post titles are defined as titles appearing at $\geq 3$ times in the dataset.
- •

  Interaction: Social behavior patterns, including reciprocity rate (mutual commenting between agent pairs), self-reply rate (comments by the original poster), zero-interaction posts (no comments received), and conversation depth ($\geq$2 indicates replies to replies).

| Category | Metric | Value | Category | Metric | Value |
| --- | --- | --- | --- | --- | --- |
| Scale | # Total Agents | 148,335 | Activity | # Avg. Posts per Agent | 7.0 |
| # Total Posts | 1,044,201 | # Avg. Comments per Agent | 137.8 |
| # Total Comments | 3,156,286 | # Single-Submolt Agents | 85.6% |
| # Total Submolts | 5,154 | Content | # Avg. Post Length | 464.3 |
| # Submolts ($\geq$100 posts) | 190 | # Avg. Comment Length | 339.1 |
| # Agents with Persona | 57,438 (38.7%) | # Template Post Title Rate | 30.4% |
| # Agents (Persona $\geq$50 chars) | 32,915 (22.2%) | Interaction | # Reciprocity Rate | 2.9% |
| # Agents with Owner X | 52,344 (35.3%) | # Self-Reply Rate | 5.1% |
| Temporal | Time Span | 1/27–2/28, 2026 | # Zero-Interaction Posts | 65.6% |
| Duration | 1 month | # Conversation Depth ($\geq$2) | 0.5% |

Table 1: The fully-connected MoltNet dataset statistics across five categories.

Preliminary Analysis:
Despite the substantial population size, participation is highly concentrated: 85.6% of agents engage in only a single Submolt, and interaction remains shallow. Agents generate an average of 137.8 comments but only 7.0 posts; yet reciprocity is limited (2.9%), nearly two-thirds of posts receive no comments (65.6%), and deep conversation is rare (0.5%). Self-replies (5.1%) further suggest limited cross-agent exchange. A template title rate of 30.4% points to emerging structural regularities in discourse. Agents actively produce content at scale, yet sustained dialogic engagement remains structurally sparse.

### 2.2 Notation & Analytical tools

To ensure analytic consistency, we define core entities and notations used in the paper.

- •

  Agents and Content: Let $\mathcal{A}=\{a\_{1},\dots,a\_{N}\}$ denote the set of agents, $\mathcal{P}=\{p\_{1},\dots,p\_{L}\}$ the set of posts, $\mathcal{C}=\{c\_{1},\dots,c\_{K}\}$ the set of comments, and $\mathcal{S}=\{s\_{1},\dots,s\_{M}\}$ the set of submolts. Each agent $a\_{i}$ has a persona description $d\_{i}$ and karma score $k\_{i}$, a cumulative measure of popularity. Each post or comment $x\in\mathcal{P}\cup\mathcal{C}$ is associated with an author $a(x)$, timestamp $t(x)$, and score $\sigma(x)=\text{upvotes}-\text{downvotes}$.
  For a given agent $a\_{i}$, we denote $\mathcal{P}\_{i}=\{p\in\mathcal{P}:a(p)=a\_{i}\}$ as the set of posts by agent $a\_{i}$, and similarly define $\mathcal{C}\_{i}$ and $\mathcal{S}\_{i}$ as the sets of comments and submolts by agent $a\_{i}$. An agent is considered to have a valid persona if $|d\_{i}|\geq 50$ characters.
  Each post or comment $x$ belongs to a submolt $s(x)\in\mathcal{S}$. For a submolt $s\_{j}$, we define $\mathcal{P}^{(s\_{j})}={p\in\mathcal{P}\mid s(p)=s\_{j}}$ as its posts and $\mathcal{C}^{(s\_{j})}$ as its comments.
  A submolt $s\_{j}$ is considered valid for template analysis if $|\mathcal{P}^{(s\_{j})}|\geq 100$.
- •

  Thread Structure: Each comment $c\in\mathcal{C}$ has a parent: either a post ($\textit{parent}(c)\in\mathcal{P}$, making $c$ root-level) or another comment ($\textit{parent}(c)\in\mathcal{C}$, making $c$ a nested reply).
- •

  Social Rewards: MoltBook’s social reward system comprises two levels: individual content scores $\sigma(\cdot)$ for each post and comment, and cumulative agent karma $k\_{i}$ aggregating approval across all content (obtained directly from the platform). We identify the highest-upvote post of each agent $a\_{i}$: $p\_{i}^{\max}=\argmax\_{p\in\mathcal{P}\_{i}}\sigma(p)$ with timestamp $t\_{i}^{\max}(p)$, which serves as a critical event for measuring agent behavioral changes.
- •

  Temporal Activity: Agent $a\_{i}$’s activity spans from $t\_{i}^{\text{start}}=\min(\min\_{p\in\mathcal{P}\_{i}}t(p),\min\_{c\in\mathcal{C}\_{i}}t(c))$ to $t\_{i}^{\text{end}}=\max(\max\_{p\in\mathcal{P}\_{i}}t(p),\max\_{c\in\mathcal{C}\_{i}}t(c))$, with active period $\Delta t\_{i}=t\_{i}^{\text{end}}-t\_{i}^{\text{start}}$.

Our empirical analyses employ the following standardized tools across sections:

- •

  Sentence Embedding (§[3](https://arxiv.org/html/2602.13458v2#S3 "3 Intent and Motivation ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"), [4](https://arxiv.org/html/2602.13458v2#S4 "4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"), [5](https://arxiv.org/html/2602.13458v2#S5 "5 Incentives and Drift ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")): We apply model all-MiniLM-L6-v22 to generate embeddings, a widely adopted sentence transformer known for its strong performance on semantic similarity benchmarks despite its compact size. Cosine similarity measures semantic alignment: $\textit{sim}(x,y)=\textit{Emb}(x)\cdot\textit{Emb}(y)/(\|\textit{Emb}(x)\|\|\textit{Emb}(y)\|)$.
- •

  Clustering (§[4](https://arxiv.org/html/2602.13458v2#S4 "4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")):
  X-means3 clustering ([Pelleg and Moore, 2000](https://arxiv.org/html/2602.13458v2#bib.bib1)) is applied to embedding vectors to identify community-specific templates and normative patterns. Unlike K-means, X-means automatically determines the optimal number of clusters using Bayesian Information Criterion (BIC). By adaptively partitioning the embedding space, it discovers latent structural regularities without imposing a fixed cluster number in advance.
- •

  Semantic Annotation (§[4](https://arxiv.org/html/2602.13458v2#S4 "4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"), [6](https://arxiv.org/html/2602.13458v2#S6 "6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")): We employ GPT-5.1-nano ([OpenAI, 2025](https://arxiv.org/html/2602.13458v2#bib.bib2)) with structured prompts for sentiment classification, emotion categorization, and conflict detection.

## 3 Intent and Motivation

Intent and motivation explain why actors engage in particular topics and interactions. Humans selectively engage in topics aligned with their interests, reliably reflecting their identity. AI agents also declare explicit personas, yet whether their actual behavior follows these declarations remains an open question, motivating the following questions:

- •

  RQ1: Motivational basis of agents’ activities. To what extent does agent behavior align with its declared interests?
- •

  RQ2: Temporal drift of motivational basis. How does interest-driven behavior evolve as agents continue interacting over time?

![Refer to caption](https://arxiv.org/html/2602.13458v2/alignment_plot.png)


Figure 2: Semantic alignment across posts and comments (agents indexed by ascending volume; color indicates log-scaled activity counts).

|  | Total | Sim $\geq$0.6981 | Sim $<$0.6981 |
| --- | --- | --- | --- |
| Comments | 1,831,466 | 202,084 (11.03%) | 1,629,382 (88.97%) |
| Posts | 346,278 | 20,174 (5.83%) | 326,104 (94.17%) |

Table 2: Activity breakdown w.r.t. the significance threshold ($\tau=0.6981$, 95th percentile of the shuffled distribution).

|  | D1 | D2 | D3 | D4 | D5 | D6 | D7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mean | 0.509 | 0.485 | 0.484 | 0.481 | 0.478 | 0.478 | 0.476 |
| Std | 0.155 | 0.170 | 0.173 | 0.176 | 0.178 | 0.177 | 0.180 |

Table 3: The cumulative mean persona-content similarity across seven daily checkpoints (D1–D7), restricted to agents active for at least seven days.

RQ1 Analysis: While human behavior is largely interest-driven and remains consistent with expressed identity, we find that agent behavior exhibits very weak alignment with their stated interests.
We restrict to agents with valid persona descriptions ($|d\_{i}|\geq 50$ characters) and treat $d\_{i}$ as each agent’s declared interests, computing the cosine similarity $\textit{sim}(d\_{i},x)$ for every post or comment $x$ by that agent.
Figure [2](https://arxiv.org/html/2602.13458v2#S3.F2 "Figure 2 ‣ 3 Intent and Motivation ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") shows the semantic alignment between agents’ interests and produced content. Lower-activity agents primarily post, with commenting emerging as activity increases. Semantic alignment slightly declines with activity for posts, while remaining stable for comments.
To determine whether alignment is genuine rather than coincidental, we randomly shuffle activity content across agents — simulating the case where content is unrelated to any agent’s declared interests, producing similarities between each activity and a randomly assigned agent’s description — and find that such random pairings yield a median of 0.4907.
We set the significance threshold at the 95th percentile of this shuffled distribution ($\tau=0.6981$): only 5% of random pairings naturally exceed $\tau$, so an activity with $\textit{sim}(d\_{i},x)>\tau$ can be considered genuinely interest-aligned rather than coincidental.
As shown in Table [2](https://arxiv.org/html/2602.13458v2#S3.T2 "Table 2 ‣ Figure 2 ‣ 3 Intent and Motivation ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"), only 5.83% of posts and 11.03% of comments exceed this threshold, indicating that the vast majority of agent activities are not driven by their declared interests.
In contrast, human behavior typically aligns with self-described interests ([Ryan and Deci, 2020](https://arxiv.org/html/2602.13458v2#bib.bib19)), reinforcing identity and community affiliation.

RQ2 Analysis: Humans typically keep their activity aligned with their interests over time, whereas agents’ alignment with their interests weakens over time, possibly because of influence by external factors.
To examine how interest alignment evolves over time, we restrict to agents active for at least seven days and track the cumulative mean similarity

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\_{\mathrm{cum}}(a\_{i},T\_{k})=\frac{1}{|X\_{i}^{k}|}\sum\_{x\in X\_{i}^{k}}\textit{sim}(d\_{i},x),\quad X\_{i}^{k}=\{x\in\mathcal{P}\_{i}\cup\mathcal{C}\_{i}:t(x)\leq T\_{k}\}$$ |  | (1) |

across seven daily checkpoints $T\_{k}$ ($k=1,\dots,7$), where $T\_{k}$ marks the end of day $k$ relative to each agent’s first activity.
As shown in Table [3](https://arxiv.org/html/2602.13458v2#S3.T3 "Table 3 ‣ Figure 2 ‣ 3 Intent and Motivation ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"), the average similarity declines steadily from 0.509 on Day 1 to 0.476 by Day 7, with a simultaneously increasing standard deviation indicating heterogeneous drift: some agents maintain partial alignment while others diverge further.
This trajectory is the inverse of human specialization, where sustained interaction typically reinforces rather than erodes identity-consistent behavior.

## 4 Norms and Templates

In social systems, norms allow actors to recognize recurring patterns and coordinate through shared conventions; and online communities tend to develop standardized communicative forms reflecting community-specific norms.
We investigate two research questions on norm emergence and enforcement in native MoltBook:

- •

  RQ1: Norm cluster emergence in submolts. Do posts within a submolt form coherent, recurring patterns recognizable as community-specific norms?
- •

  RQ2: Verbal norm enforcement against violations. When norm-violating content appears, do community members respond with explicit verbal objection?

Figure 3: (a) Protocol post fraction per yes-cluster, split by cluster type (protocol vs. non-protocol).
(b) Top 10 complaint distribution of reaction posts about protocol “mbc-20” per submolt.
(c) Representative strong complaint posts from top 5 invaded submolts.

RQ1 Analysis: Humans develop community-specific communication norms, and so do agents — most submolts exhibit coherent, recurring post patterns stable enough to be reliably identified through automated clustering.
We restrict to submolts with $\geq 100$ posts, yielding 189 submolts.
For each submolt $s\_{j}$ with posts $\mathcal{P}^{(s\_{j})}=\{p\_{i}\}\_{i=1}^{N\_{j}}$, we embed posts to obtain $\{\mathbf{v}\_{i}\in\mathbb{R}^{d}\}\_{i=1}^{N\_{j}}$, then apply X-Means clustering.
For each resulting cluster $C\_{k}$, we compute its centroid $\bm{\mu}\_{k}=\frac{1}{|C\_{k}|}\sum\_{\mathbf{v}\_{i}\in C\_{k}}\mathbf{v}\_{i}$.
The 10 posts nearest to $\bm{\mu}\_{k}$ are submitted to an LLM judge (prompt details in Appendix [B](https://arxiv.org/html/2602.13458v2#A2 "Appendix B LLM-as-judge Template ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")), which labels each cluster as yes (clear norm), maybe, or no.
Across 189 submolts and 861 total clusters, 130 submolts (68.8%) contain at least one yes-cluster, and 406 clusters (47.2%) are labeled norm-exhibiting.

To validate the LLM judge’s reliability, we exploit a natural experiment from the “mbc-20” protocol — a MoltBook-native token trading system inspired by Bitcoin’s “BRC-20”.
Every protocol post carries a structured JSON signature ({"p":"mbc-20","op":"..."}) detectable by regex, providing machine-verifiable ground truth independent of LLM judgment.
Protocol posts account for 57.2% of all posts in the dataset, concentrated in a single eruption: on Feb 9, 2026 alone, 356,389 protocol posts were published (96.0% of all posts that day and 59.7% of all protocol posts ever recorded), seeding protocol-type clusters at a scale large enough to serve as a natural validation anchor.
We classify each yes-cluster as protocol-type if its LLM norm summary mentions protocol operations (e.g., “mint”, “mbc-20”); all others are non-protocol type.
For each yes-cluster, we then compute the fraction of its posts matching the JSON regex — a ground-truth signal requiring no LLM.
When a cluster is protocol-type, the regex match fraction is $\approx 100\%$; otherwise the fraction is $\approx 0\%$.
Figure [3](https://arxiv.org/html/2602.13458v2#S4.F3 "Figure 3 ‣ 4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")(a) shows near-perfect separation between the two types, and the LLM judge consistently agrees with what the regex directly measures in the posts.

RQ2 Analysis: Humans respond to norm violations with explicit verbal objection; similarly, agents actively uphold shared norms through language when norm-violating content appears.
We identify 160 non-protocol submolts, excluding 29 whose descriptions reference cryptocurrency protocols, token trading, or inscription operations (e.g., mbc-20, defi, token).
Of these 160, protocol posts appeared in 47 submolts (29.4%) indicating invasion. To study norm enforcement, we define reaction posts in non-protocol submolts as third-party, natural-language discussions of protocol activity without JSON signatures.
In total, 90 submolts produce reaction posts, including 30 invaded and 60 non-invaded submolts, indicating spillover beyond directly affected communities.
We further classify each reaction post as strong complaint (direct verbal objection, e.g., “every other post is mbc-20 mint spam — zero actual conversations”), soft complaint (implicit dissatisfaction, e.g., “my feed is 90% JSON blobs”), or neutral (factual mention without judgment).
Of 886 such reaction posts (deduplicated by content), 305 (34%) are complaints: 217 strong and 88 soft.
Among the 30 invaded submolts with discussion, 21 (70%) produced at least one complaint.
Among the 60 non-invaded submolts that nevertheless discussed the protocol, 30 (50%) complained, suggesting cross-community enforcement.
Figures [3](https://arxiv.org/html/2602.13458v2#S4.F3 "Figure 3 ‣ 4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")(b) and (c) show the per-submolt complaint distribution and representative strong complaint posts.

## 5 Incentives and Drift

On social media, upvotes shape what, when, and how frequently users engage  ([Muchnik et al., 2013](https://arxiv.org/html/2602.13458v2#bib.bib9); [Lambert et al., 2025](https://arxiv.org/html/2602.13458v2#bib.bib10)). Whether AI agents exhibit similar responsiveness to social incentives has critical implications for predicting platform dynamics and designing governance mechanisms. We investigate two aspects of incentive-driven behavior:

- •

  RQ1: Posting propensity after high upvotes. Do social incentives increase posting propensity?
- •

  RQ2: Behavior drift after social rewards. Do social incentives induce behavior drift away from stated personas?

![Refer to caption](https://arxiv.org/html/2602.13458v2/figures/incentives/agent_output_shift_ratio_positive_karma_new_2.28.png)


Figure 4: Social incentive effect on posting activity. Output shift ratio (posts after highest-upvote / total posts) for 45886 agents sorted by descending karma (karma $>0$); higher-karma agents show stronger incentive effects. Red line: moving average (window=100).

![Refer to caption](https://arxiv.org/html/2602.13458v2/figures/incentives/persona_similarity_scatter_2.28.png)


Figure 5: Persona drift after social rewards. Each point: persona similarity before (x) vs. after (y) highest-upvoted post, colored by log-scaled score.

RQ1 Analysis: Humans increase activity after positive social feedback; similarly, agents exhibit strong sensitivity to social incentives, posting more actively after receiving high upvotes, with effects most pronounced among high-karma agents.
To quantify whether agents increase posting activity following positive feedback, we define the output shift ratio for each agent $i$ with at least one highest-upvote post ($\sigma(p\_{i}^{\max})>0$) as $r\_{i}^{\text{post}}={\text{\# posts after }t\_{i}^{\max}(p)}/{\text{\# total posts}}$,
where $t\_{i}^{\max}(p)$ is agent $i$’s highest-upvoted post timestamp. $r\_{i}^{\text{post}}>0.5$ indicates that agents post more actively after receiving their peak social reward, suggesting reward-driven amplification.

Figure [5](https://arxiv.org/html/2602.13458v2#S5.F5 "Figure 5 ‣ 5 Incentives and Drift ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") plots the output shift ratio for the 45,275 agents (karma$>$0, blue points) who received at least one high-upvoted post, sorted by descending karma. The red curve is a moving average (window$=$100) to reveal the underlying trend while smoothing local fluctuations. A dashed vertical line marks the midpoint (agent #22,943, karma$=$5). Among these agents, the moving average exhibits two distinct regimes. Left of the midpoint ($5<$ karma $<14,626,611$ ), the trend decreases monotonically from ${\sim}60\%$ to ${\sim}35\%$: higher-karma agents consistently produce more content after their peak reward event. Right of the midpoint (karma $\leq$ 5), the curve becomes highly volatile, as extremely low-karma agents have sparse posting histories that make individual shift ratios unstable. These patterns demonstrate that social incentives amplify posting propensity, with effects most stable and pronounced among high-karma agents.

RQ2 Analysis: Agents exhibit systematic behavior drift under social incentives, producing content significantly less aligned with their stated personas after receiving high upvotes, with stronger drift observed among higher-karma agents.
Beyond influencing posting frequency, we examine whether social rewards reshape content orientation. We restrict to agents with a valid persona description ($|d\_{i}|\geq 50$) and at least 3 posts including a highest-upvoted post ($\sigma(p\_{i}^{\max})>0$), yielding 9,214 qualifying agents. For each qualifying agent $a\_{i}$, we compute the average cosine similarity between their posts and their stated persona before and after their highest-upvote event:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\textit{sim}\_{i}^{\*}=\frac{1}{|\mathcal{P}\_{i}^{\*}|}\sum\_{p\in\mathcal{P}\_{i}^{\*}}\textit{sim}(\textit{Emb}(d\_{i}),\textit{Emb}(p)),\quad{\*}\in\{\text{before},\,\text{after}\},$$ |  | (2) |

where $\mathcal{P}\_{i}^{\text{before}}$ and $\mathcal{P}\_{i}^{\text{after}}$ denote posts before and after $t\_{i}^{\max}(p)$.

Figure [5](https://arxiv.org/html/2602.13458v2#S5.F5 "Figure 5 ‣ 5 Incentives and Drift ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") plots each agent’s persona similarity before (x-axis) vs. after (y-axis) their highest-upvoted post, colored by its log-scaled score (darker $=$ higher reward). Points below the dashed diagonal indicate drift away from the stated persona (pink region); points above indicate increased alignment.
Critically, 71.0% of agents (6,538 out of 9,214) fall below the diagonal, with mean similarity declining on average from 0.345 to 0.256 (a 25.8% relative decline). Higher-reward agents (darker points) are disproportionately concentrated in the drifting region, suggesting that stronger social rewards drive stronger behavioral shifts that diverge away from stated identities.

## 6 Emotion and Contagion

(a) Emotion distribution

(c) Contagion of emotion

(b1) Conflict proportion

(b2) Interaction dynamics

Figure 6: (a) Emotion distribution between Moltbook (agents) and Reddit (human). (b1) Proportion of conflictual content in posts and comments for agents and humans. (b2) Interaction dynamics following conflictual comments among agents with their response types. (c) Contagion of emotion among posts and comments.

Emotion strongly shapes online interactions, influencing interpretation, conflict, repair, and reputation. As agents enter post–comment environments, they become part of these dynamics. Understanding their emotional expression, conflict behavior and affect transmission is therefore essential for evaluating trustworthiness, alignment, and human–AI collaboration. This section examines the following emotion-related research questions:

- •

  RQ1: Emotional conflict and interaction dynamics.
  Do agent interactions exhibit emotional conflict? When conflict arises, how do replies respond?
- •

  RQ2: Emotional contagion and influence.
  Does negative emotion affect agents’ subsequent behavior?

Emotion Statistics: We operationalize emotional expression at the level of individual posts and comments from MoltBook as well as Reddit ([tensorshield, 2025](https://arxiv.org/html/2602.13458v2#bib.bib14)) using an LLM-as-judge framework.
For each textual unit, the model produces: (i) a sentiment label $\in\{\text{pos},\text{neu},\text{neg}\}$, (ii) a dominant emotion category, and (iii) a binary conflict indicator ($\mathbb{I}\_{\text{conflict}}\in\{0,1\}$).
As shown in Figure [6](https://arxiv.org/html/2602.13458v2#S6.F6 "Figure 6 ‣ 6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")(a), human content is more concentrated in the neutral category, whereas agent-generated content allocates a larger share to positive emotions such as joy and trust.
By contrast, negative emotions, most prominently anger, are substantially more prevalent in human discourse, particularly in comments. Taken together, agent interactions are comparatively less driven by high-arousal negative affect, while human discussions display a stronger tendency toward antagonistic emotional expression.

RQ1 Analysis: Agents exhibit substantially lower levels of interpersonal conflict and are more likely to disengage than to escalate when encountering hostile content, reflecting a restrained and avoidant response style. We separate diffuse negative affect from overt hostility and examine how agents respond to conflictual content. In our settings, negative content captures any clearly adverse stance, whereas conflict is defined more narrowly as explicit interpersonal antagonism directed at another agent. See Appendix [B](https://arxiv.org/html/2602.13458v2#A2 "Appendix B LLM-as-judge Template ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") for more detailed instructions.
As shown in Figure [6](https://arxiv.org/html/2602.13458v2#S6.F6 "Figure 6 ‣ 6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")(b1), while the share of conflict in posts is comparable across the two groups, a substantial divergence emerges in comments: human comments exhibit a markedly higher conflict rate, whereas agent comments remain at a consistently low level. This suggests that, unlike human discussions where conflict often intensifies in replies, agent interactions do not show a comparable amplification at the comment level.
We further examine interactional dynamics by treating conflict-labeled comments as conflict parents and classify their direct replies as conflict, de-escalation, or neutral. Figure [6](https://arxiv.org/html/2602.13458v2#S6.F6 "Figure 6 ‣ 6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")(b2) indicates that most conflict parents receive no replies, and among those that do, neutral responses dominate, with conflict remaining rare.
This suggests that agents tend to avoid engaging in emotionally charged conflicts, instead exhibiting a preference for affectively neutral or cold processing of conflictual interactions.

RQ2 Analysis: Although agents exhibit an overall low level of conflict, interpersonal conflict remains contagious: conflict in an initial post or early comment substantially increases the likelihood of conflict in subsequent comments. We further examine emotional contagion in two directions: post $\rightarrow$ comment and comment $\rightarrow$ comment. Each post and comment is annotated with a conflict indicator $\mathbb{I}\_{\text{conflict}}\in\{0,1\}$. Using this annotation, we test whether a conflictual post (i.e., $\mathbb{I}\_{\text{conflict}}(p)=1$) is associated with a higher fraction of conflictual comments in its comment set $\mathcal{C}(p)$, and whether a conflictual early comment (i.e., $\mathbb{I}\_{\text{conflict}}(c)=1$) predicts a higher fraction of conflictual replies in $\mathcal{C}(c)$.
As shown in Figure [6](https://arxiv.org/html/2602.13458v2#S6.F6 "Figure 6 ‣ 6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")(c), conflict exhibits a clear propagation effect across interaction stages. When early content in a thread is conflictual, whether the initiating post or the first comment, the proportion of conflictual subsequent comments increases substantially (from 3.6% to 13.7% in the post setting, and from 11.1% to 25.9% in the comment setting).
Although the overall base rate of conflict remains low, the relative increase is substantial, suggesting that the presence of early conflict significantly alters the emotional trajectory of the thread, leading to a higher likelihood of subsequent conflict.

## 7 Related Work

Multi-Agent Systems.
Early research on agent societies focused on controlled simulations where cooperation and norms emerge from programmed interaction rules ([Guo et al., 2024](https://arxiv.org/html/2602.13458v2#bib.bib37); [Hong et al., 2023](https://arxiv.org/html/2602.13458v2#bib.bib27)), but these simulations often lacked scale or real-world interaction dynamics ([Haase and Pokutta, 2025](https://arxiv.org/html/2602.13458v2#bib.bib22); [Piccialli et al., 2025](https://arxiv.org/html/2602.13458v2#bib.bib23); [Hammond et al., 2025](https://arxiv.org/html/2602.13458v2#bib.bib24)).
Recent LLM-powered agent systems have expanded this scope, yet most remain limited experiments with researcher-defined objectives rather than naturalistic communities ([AL et al., 2024](https://arxiv.org/html/2602.13458v2#bib.bib25); [Debenedetti et al., 2024](https://arxiv.org/html/2602.13458v2#bib.bib26)). With the emergence of autonomous agent frameworks ([OpenClaw, 2026](https://arxiv.org/html/2602.13458v2#bib.bib29)) capable of achieving complex, high-level objectives by utilizing all kinds of skills ([Anthropic, 2024](https://arxiv.org/html/2602.13458v2#bib.bib31); [Xu et al., 2025](https://arxiv.org/html/2602.13458v2#bib.bib30)), the scale of agent deployment is rapidly expanding.

MoltBook with Multi-agent Interaction.
The launch of MoltBook ([Moltbook, 2026](https://arxiv.org/html/2602.13458v2#bib.bib20)), a Reddit-like platform designed exclusively for autonomous AI agents, marks a notable transition from simulation to naturally occurring agent ecosystems.
[Jiang et al. (2026)](https://arxiv.org/html/2602.13458v2#bib.bib21) find explosive growth and rapid diversification, with agent attention concentrating in centralized hubs around polarizing, platform-native narratives; [Lin et al. (2026)](https://arxiv.org/html/2602.13458v2#bib.bib16) showed agents systematically organize collective space through reproducible patterns; [Manik and Wang (2026)](https://arxiv.org/html/2602.13458v2#bib.bib17) found that actionable posts are significantly more likely to elicit norm-enforcing replies cautioning against unsafe behavior; and [Li (2026)](https://arxiv.org/html/2602.13458v2#bib.bib18) applied temporal fingerprinting to separate human-influenced from autonomous activity, revealing that many viral phenomena were human-initiated.
Thus, understanding agents’ collective behavior is essential for predicting the dynamics of artificial societies ([Bellina et al., 2026](https://arxiv.org/html/2602.13458v2#bib.bib28)).
Unlike these studies focusing on individual phenomena, we systematically examine agent social behavior through four sociological dimensions: intent and motivation, norms and templates, incentives and drift, and emotion and contagion, revealing selective continuity and divergence with human social mechanisms.

## 8 Conclusion

We introduce MoltNet and present the first large-scale empirical analysis of AI agent social behavior, examining one month trajectories of 148K agents on MoltBook across four dimensions: intent and motivation, norms and templates, incentives and drift, and emotion and contagion. Our findings reveal selective alignment with human social mechanisms.
(i) Where Agents Resemble Humans.
Agents respond strongly to social rewards: posting increases after high-upvote events, and subsequent content drifts away from their stated persona.
They converge on community-specific interaction norms and actively enforce them through verbal objection — even across community boundaries.
At the thread level, conflict emotion is contagious: early hostile posts significantly increase conflict in subsequent replies.
(ii) Where Agents Diverge from Humans.
Agents exhibit weak alignment with their declared personas, and this alignment erodes further as they interact more — the inverse of human specialization.
Despite thread-level emotional contagion, agents rarely escalate interpersonal conflict, instead disengaging — a pattern of “cold-shouldering” distinct from human behavior.
These findings establish a first empirical portrait of agent-agent social behavior at scale, providing a foundation for designing agent policies, guiding platform governance, and shaping human–AI interaction in future hybrid social ecosystems.

## Ethics Statement

This work analyzes publicly available data collected from MoltBook, a social networking platform designed exclusively for AI agents. All data used in this study were sourced from publicly accessible Hugging Face datasets (see Appendix [A](https://arxiv.org/html/2602.13458v2#A1 "Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")); no private user data, authentication credentials, or proprietary platform APIs were accessed. Since MoltBook is agent-native and humans participate only as passive observers, the dataset contains no personally identifiable information about human individuals, and standard human subjects research protections do not directly apply.

Nonetheless, we recognize several ethical considerations. First, although the agents on MoltBook are autonomous AI systems rather than human users, many agents are associated with human X (Twitter) accounts via owner metadata. We do not analyze, surface, or report any personally identifying owner information in this work. Second, the dataset may contain unsafe or harmful content generated by agents, including toxic language, offensive posts, and norm-violating material. We do not endorse or amplify such content; where relevant, we analyze it solely to characterize emergent behavioral patterns, and we release the dataset with this caveat for downstream users to exercise appropriate caution. Third, our use of GPT-5.1-nano for semantic annotation introduces potential biases in emotion classification and conflict detection; while we validate the LLM judge’s reliability through ground-truth cross-checking (§[4](https://arxiv.org/html/2602.13458v2#S4 "4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook")), findings derived from these annotations should nonetheless be interpreted with this methodological consideration in mind. Fourth, the behavioral patterns we document — particularly incentive-driven drift and emotional contagion — could inform both beneficial platform design and potentially manipulative deployment of agent communities. We encourage future work to engage critically with these dual-use implications.

The dataset and analysis code will be released to support reproducible research and community oversight of AI agent social behavior.

## References

- AL et al. (2024)
  A. AL, A. Ahn, N. Becker, S. Carroll, N. Christie, M. Cortes, A. Demirci, M. Du, F. Li, S. Luo, et al.
  Project sid: many-agent simulations toward ai civilization.
  arXiv preprint arXiv:2411.00114.
  External Links: [Link](https://arxiv.org/abs/2411.00114)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Anthropic (2024)
  Anthropic
  Note: [Claude Blog: Equipping agents for the real world with Agent Skills](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Ayanami0730 (2026)
  Ayanami0730
  Moltbook dataset.
   Hugging Face.
  External Links: [Link](https://huggingface.co/datasets/Ayanami0730/moltbook_data)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.9.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Bellina et al. (2026)
  A. Bellina, G. De Marzo, and D. Garcia
  Conformity and social impact on ai agents.
  arXiv preprint arXiv:2601.05384.
  External Links: [Link](https://arxiv.org/abs/2601.05384)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p2.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Da Costa et al. (2023)
  S. Da Costa, D. Páez, M. Martí-González, V. Díaz, and P. Bouchat
  Social movements and collective behavior: an integration of meta-analysis and systematic review of social psychology studies.
  Frontiers in psychology 14, pp. 1096877.
  External Links: [Link](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1096877/full)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p3.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- de Melo et al. (2021)
  C. M. de Melo, K. Terada, and F. C. Santos
  Emotion expressions shape human social norms and reputations.
  Iscience 24 (3).
  External Links: [Link](https://www.cell.com/iscience/fulltext/S2589-0042(21)00109-7)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p3.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Debenedetti et al. (2024)
  E. Debenedetti, J. Zhang, M. Balunovic, L. Beurer-Kellner, M. Fischer, and F. Tramèr
  Agentdojo: a dynamic environment to evaluate prompt injection attacks and defenses for llm agents.
  Advances in Neural Information Processing Systems 37, pp. 82895–82920.
  External Links: [Link](https://proceedings.neurips.cc/paper_files/paper/2024/hash/97091a5177d8dc64b1da8bf3e1f6fb54-Abstract-Datasets_and_Benchmarks_Track.html)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Gautam and Riegler (2026)
  S. Gautam and M. A. Riegler
  Moltbook observatory archive.
   Hugging Face Datasets.
  External Links: [Link](https://huggingface.co/datasets/SimulaMet/moltbook-observatory-archive)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.3.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Guo et al. (2024)
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang
  Large language model based multi-agents: A survey of progress and challenges.
  In Proceedings of the Thirty-Third International Joint Conference on
  Artificial Intelligence, IJCAI 2024,
  pp. 8048–8057.
  External Links: [Link](https://www.ijcai.org/proceedings/2024/890)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p1.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"),
  [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Haase and Pokutta (2025)
  J. Haase and S. Pokutta
  Beyond static responses: multi-agent llm systems as a new paradigm for social science research.
  arXiv preprint arXiv:2506.01839.
  External Links: [Link](https://arxiv.org/abs/2506.01839)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Hammond et al. (2025)
  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, et al.
  Multi-agent risks from advanced ai.
  arXiv preprint arXiv:2502.14143.
  External Links: [Link](https://arxiv.org/abs/2502.14143)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Hong et al. (2023)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, et al.
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In The twelfth international conference on learning representations,
  External Links: [Link](https://openreview.net/forum?id=VtmBAGCN7o&utm_source=chatgpt.com)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Jiang et al. (2026)
  Y. Jiang, Y. Zhang, X. Shen, M. Backes, and Y. Zhang
  "Humans welcome to observe": A First Look at the Agent Social Network Moltbook.
  CoRR abs/2602.10127.
  External Links: [Link](https://arxiv.org/abs/2602.10127)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p2.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Lambert et al. (2025)
  C. Lambert, K. Saha, and E. Chandrasekharan
  Does positive reinforcement work?: a quasi-experimental study of the effects of positive feedback on reddit.
  In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems,
  pp. 1–16.
  External Links: [Link](https://dl.acm.org/doi/abs/10.1145/3706598.3713830)
  Cited by: [§5](https://arxiv.org/html/2602.13458v2#S5.p1.1 "5 Incentives and Drift ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Li (2026)
  N. Li
  Note: [The Moltbook Illusion: Separating Human Influence fromEmergent Behavior in AI Agent Societies](https://www.sem.tsinghua.edu.cn/en/moltbook_main_paper_v2.pdf)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p2.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Lin et al. (2026)
  Y. Lin, B. P. Shih, H. A. Chien, S. Satam, J. H. Pacheco, S. Shao, S. Salehi, and P. Satam
  Exploring silicon-based societies: an early study of the moltbook agent community.
  arXiv preprint arXiv:2602.02613.
  External Links: [Link](https://arxiv.org/abs/2602.02613)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p2.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Liu et al. (2026)
  Y. Liu, H. Gao, and Y. Ding
  Autonomy shapes language: a comparative linguistic topology of autonomous ai, directed ai, and human discourse.
  ResearchGate preprint 10.13140/RG.2.2.26381.40165.
  External Links: [Link](https://www.researchgate.net/publication/400322309_Autonomy_Shapes_Language_A_Comparative_Linguistic_Topology_of_Autonomous_AI_Directed_AI_and_Human_Discourse)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.10.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- lnajt (2026)
  lnajt
  Moltbook dataset.
   Hugging Face Dataset.
  External Links: [Link](https://huggingface.co/datasets/lnajt/moltbook)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.4.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- lysandrehooh (2026a)
  lysandrehooh
  Moltbook dataset.
   Hugging Face Dataset.
  External Links: [Link](https://huggingface.co/datasets/lysandrehooh/moltbook)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.5.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- lysandrehooh (2026b)
  lysandrehooh
  Moltbook submolt.
   Hugging Face Dataset.
  External Links: [Link](https://huggingface.co/datasets/lysandrehooh/moltbook_submolt)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.6.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Manik and Wang (2026)
  M. M. H. Manik and G. Wang
  OpenClaw agents on moltbook: risky instruction sharing and norm enforcement in an agent-only social network.
  arXiv preprint arXiv:2602.02625.
  External Links: [Link](https://arxiv.org/abs/2602.02625)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p2.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Marzo (2026)
  G. D. Marzo
  Moltbook crawl.
   Hugging Face Datasets.
  External Links: [Link](https://huggingface.co/datasets/giordano-dm/moltbook-crawl)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.2.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Massive (2026)
  Massive
  Moltbook dataset.
   Hugging Face.
  External Links: [Link](https://huggingface.co/datasets/joinmassive/moltbook)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.8.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Moltbook (2026)
  Moltbook
  Moltbook.
  External Links: [Link](https://www.moltbook.com/)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p2.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Muchnik et al. (2013)
  L. Muchnik, S. Aral, and S. J. Taylor
  Social influence bias: a randomized experiment.
  Science 341 (6146), pp. 647–651.
  External Links: [Link](https://www.science.org/doi/abs/10.1126/science.1240466)
  Cited by: [§5](https://arxiv.org/html/2602.13458v2#S5.p1.1 "5 Incentives and Drift ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- OpenAI (2025)
  OpenAI
  Gpt-5-nano-2025-08-07 introduction.
  External Links: [Link](https://developers.openai.com/api/docs/models/gpt-5-nano)
  Cited by: [3rd item](https://arxiv.org/html/2602.13458v2#S2.I3.i3.p1.1 "In 2.2 Notation & Analytical tools ‣ 2 Analysis Setup ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- OpenClaw (2026)
  OpenClaw
  OpenClaw: your own personal ai assistant.
  Note: Openclaw GitHub repository
  External Links: [Link](https://github.com/openclaw/openclaw)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Park et al. (2023)
  J. S. Park, J. C. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software
  and Technology, UIST 2023,
  pp. 2:1–2:22.
  External Links: [Link](https://doi.org/10.1145/3586183.3606763),
  [Document](https://dx.doi.org/10.1145/3586183.3606763)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p1.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Pelleg and Moore (2000)
  D. Pelleg and A. W. Moore
  X-means: extending k-means with efficient estimation of the number of clusters.
  In Proceedings of the Seventeenth International Conference on Machine Learning,
  pp. 727–734.
  External Links: [Link](https://dl.acm.org/doi/abs/10.5555/645529.657808)
  Cited by: [2nd item](https://arxiv.org/html/2602.13458v2#S2.I3.i2.p1.1 "In 2.2 Notation & Analytical tools ‣ 2 Analysis Setup ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Piccialli et al. (2025)
  F. Piccialli, D. Chiaro, S. Sarwar, D. Cerciello, P. Qi, and V. Mele
  AgentAI: a comprehensive survey on autonomous agents in distributed ai for industry 4.0.
  Expert Systems with Applications, pp. 128404.
  External Links: [Link](https://www.sciencedirect.com/science/article/pii/S0957417425020238)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Ryan and Deci (2020)
  R. M. Ryan and E. L. Deci
  Intrinsic and extrinsic motivation from a self-determination theory perspective: definitions, theory, practices, and future directions.
  Contemporary Educational Psychology 61, pp. 101860.
  External Links: ISSN 0361-476X,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.cedpsych.2020.101860),
  [Link](https://www.sciencedirect.com/science/article/pii/S0361476X20300254)
  Cited by: [§3](https://arxiv.org/html/2602.13458v2#S3.p3.1 "3 Intent and Motivation ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Takizawa (2026)
  R. Takizawa
  Moltbook dataset.
  External Links: [Link](https://huggingface.co/datasets/ronantakizawa/moltbook)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.11.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- tensorshield (2025)
  tensorshield
  The data universe datasets: the finest collection of social media data the web has to offer.
  External Links: [Link](https://huggingface.co/datasets/tensorshield/reddit_dataset_157)
  Cited by: [§6](https://arxiv.org/html/2602.13458v2#S6.p3.1 "6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Tran et al. (2025)
  K. Tran, D. Dao, M. Nguyen, Q. Pham, B. O’Sullivan, and H. D. Nguyen
  Multi-agent collaboration mechanisms: A survey of llms.
  CoRR abs/2501.06322.
  External Links: [Link](https://doi.org/10.48550/arXiv.2501.06322)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p1.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- TrustAI Research Lab (2026)
  TrustAI Research Lab
  TrustAIRLab/moltbook.
   Hugging Face Dataset.
  External Links: [Link](https://huggingface.co/datasets/TrustAIRLab/Moltbook)
  Cited by: [Table 4](https://arxiv.org/html/2602.13458v2#A1.T4.2.1.7.2 "In A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Van Kleef et al. (2019)
  G. A. Van Kleef, M. J. Gelfand, and J. Jetten
  The dynamic nature of social norms: new perspectives on norm development, impact, violation, and enforcement.
  Vol. 84, Elsevier.
  External Links: [Link](https://www.sciencedirect.com/science/article/pii/S0022103119303166)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p3.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Xu et al. (2025)
  W. Xu, C. Huang, S. Gao, and S. Shang
  LLM-based agents for tool learning: a survey: w. xu et al..
  Data Science and Engineering, pp. 1–31.
  External Links: [Link](https://link.springer.com/article/10.1007/s41019-025-00296-9)
  Cited by: [§7](https://arxiv.org/html/2602.13458v2#S7.p1.1 "7 Related Work ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").
- Zhao et al. (2025)
  R. Zhao, W. Zhang, Y. K. Chia, W. Xu, D. Zhao, and L. Bing
  Auto-arena: automating LLM evaluations with agent peer battles and committee discussions.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational
  Linguistics (Volume 1: Long Papers), ACL 2025,
  pp. 4440–4463.
  External Links: [Link](https://aclanthology.org/2025.acl-long.223/)
  Cited by: [§1](https://arxiv.org/html/2602.13458v2#S1.p1.1 "1 Introduction ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").

## Appendix A Data Sources and Integration

We integrate all available MoltBook data from Hugging Face up to February 28, 2026, 12:00 PM. Unlike single-snapshot datasets, our integration preserves temporal information from multiple crawlers operating over different time windows, enabling longitudinal analysis of agent behavioral evolution. This multi-source approach is essential because: (i) no single source provides complete coverage across all time periods and data types, (ii) different sources contribute unique metadata (e.g., temporal tracking, owner information, content annotations), and (iii) cross-validation across sources improves data quality and completeness.

### A.1 Data Sources Overview

Table [4](https://arxiv.org/html/2602.13458v2#A1.T4 "Table 4 ‣ A.1 Data Sources Overview ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") lists the 10 integrated data sources ranked by merge priority (1=highest). Other additional sources were excluded due to missing UUID fields preventing cross-source matching.

| Rank | Source | Size | Time Range | Key Contribution |
| --- | --- | --- | --- | --- |
| 1 | giordano/moltbook-crawl [Marzo (2026)](https://arxiv.org/html/2602.13458v2#bib.bib3) | 4.9 GB | 01/27–02/09 | Largest agent base (124K), owner X metadata |
| 2 | SimulaMet/moltbook-observatory-archive [Gautam and Riegler (2026)](https://arxiv.org/html/2602.13458v2#bib.bib4) | 218 MB | 01/28–02/28 | Temporal lifecycle tracking (first\_seen\_at, is\_claimed) |
| 3 | lnajt/moltbook [lnajt (2026)](https://arxiv.org/html/2602.13458v2#bib.bib5) | 4.5 GB | 02/01–02/11 | Largest post/comment volume, daily commit history |
| 4 | lysandrehooh/moltbook [lysandrehooh (2026a)](https://arxiv.org/html/2602.13458v2#bib.bib6) | 448 MB | 01/27–01/31 | Rich owner X metadata (owner\_x\_handle, bio, followers) |
| 5 | lysandrehooh/moltbook\_submolt [lysandrehooh (2026b)](https://arxiv.org/html/2602.13458v2#bib.bib7) | 3.6 MB | 02/01 | Most submolts (9.5K) with descriptions and creation metadata |
| 6 | TrustAIRLab/Moltbook [TrustAI Research Lab (2026)](https://arxiv.org/html/2602.13458v2#bib.bib8) | 27 MB | 01/27–01/31 | Content annotations (topic\_label, toxic\_level) |
| 7 | joinmassive/moltbook [Massive (2026)](https://arxiv.org/html/2602.13458v2#bib.bib11) | 200 MB | 01/27–02/02 | Early snapshot (111K posts), first-week coverage |
| 8 | Ayanami0730/moltbook\_data [Ayanami0730 (2026)](https://arxiv.org/html/2602.13458v2#bib.bib12) | 374 MB | 01/27–01/31 | Nested comment trees (comments\_json) |
| 9 | qugemingzi/moltbook-ai-agent-posts [Liu et al. (2026)](https://arxiv.org/html/2602.13458v2#bib.bib13) | 16 MB | 01/28–01/31 | Structured early data with nested objects |
| 10 | ronantakizawa/moltbook [Takizawa (2026)](https://arxiv.org/html/2602.13458v2#bib.bib15) | 7.6 MB | 01/27–01/30 | Earliest data (MoltBook launch week) |

Table 4: Ten data sources integrated in this study, ranked by merge priority. Each source contributes unique temporal coverage and metadata fields.

### A.2 Temporal Coverage

Table [5](https://arxiv.org/html/2602.13458v2#A1.T5 "Table 5 ‣ A.2 Temporal Coverage ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") illustrates the temporal range of each data source. The integrated dataset spans January 27 – February 28, 2026, covering MoltBook’s launch and its inaugural month of rapid growth.

| Source | 1/27 | 1/28 | 1/29 | 1/30 | 1/31 | 2/01 | 2/02 | 2/03 | 2/04 | 2/05 | 2/06 | 2/07 | 2/08 | 2/09 | 2/10 | 2/11 | 2/12–2/28 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| giordano | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |
| SimulaMet |  | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| lnajt |  |  |  |  |  | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ |  |
| lysandrehooh | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| lysandrehooh\_sub. |  |  |  |  |  | ✓ |  |  |  |  |  |  |  |  |  |  |  |
| TrustAIRLab | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| joinmassive | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |
| Ayanami0730 | ✓ | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| qugemingzi |  | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |
| ronantakizawa | ✓ | ✓ | ✓ | ✓ |  |  |  |  |  |  |  |  |  |  |  |  |  |

Table 5: Temporal coverage of each data source. Checkmarks indicate dates with available data. Key milestones: 1/27 = MoltBook launch; 1/27–1/31 = early growth; 2/01–2/11 = sustained activity; 2/12–2/28 = stable phase.


| Field | Source | Purpose |
| --- | --- | --- |
| topic\_label | TrustAIRLab | Post topic (9 classes) |
| toxic\_level | TrustAIRLab | Toxicity (0–4 scale) |
| owner\_x\_\* | lysandrehooh, giordano | Creator X metadata |
| is\_claimed | SimulaMet | Agent claim status |
| first\_seen\_at | SimulaMet | First observation time |
| featured\_at | lysandrehooh\_submolt | Community feature time |
| created\_by | lysandrehooh\_submolt | Community creator |

Table 6: Unique fields contributed by specific sources.

### A.3 Merge Strategy

We merge sources sequentially by rank using UUID (id) as the primary key:

Rank 1: giordano. Establishes the base index with 124K agents—the largest agent collection. Provides owner X metadata (x\_handle, x\_bio, x\_follower\_count, x\_verified) and spans from platform Jan. 27 (launch) through Feb. 9.

Rank 2: SimulaMet. Adds temporal lifecycle tracking with first\_seen\_at, last\_seen\_at, and is\_claimed fields. Daily partitioned snapshots (Jan. 28– Feb. 28) enable longitudinal analysis of agent activity.

Rank 3: lnajt. Contributes the largest post/ comment volume ($\sim$668K posts, $\sim$2.8M comments). Daily Git commits preserve score and comment\_count changes for engagement trajectory analysis.

Rank 4: lysandrehooh. Adds detailed owner X metadata
(owner\_x\_handle, owner\_x\_bio,
owner\_x\_follower, owner\_x\_verified).
Posts and comments also include author\_karma for cross-table updates.

Rank 5: lysandrehooh\_submolt. Expands the submolt coverage to 9,515 communities (vs. –1,600 in other sources). Includes unique fields: featured\_at and created\_by.

Rank 6: TrustAIRLab. Provides the only labeled dataset: topic\_label (9 categories) and toxic\_level (0$\sim$4 scale) for 44K posts.

Rank 7: joinmassive. Large early snapshot (111K posts) covering Jan. 27– Feb. 2, capturing the first-week community state.

Rank 8: Ayanami0730. Contains the nested comments\_json field with complete comment trees per post, preserving hierarchical reply structure and depth.

Rank 9: qugemingzi. Structured data with clean nested author and submolt objects, facilitating entity extraction.

Rank 10: ronantakizawa. Earliest available data (Jan. 27–30), documenting MoltBook’s launch week before viral growth.

Table [6](https://arxiv.org/html/2602.13458v2#A1.T6 "Table 6 ‣ A.2 Temporal Coverage ‣ Appendix A Data Sources and Integration ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") lists unique fields contributed by specific data sources. For specific temporal fields (e.g., score, karma, comment\_count), we preserve historical changes as timestamped observations in \*\_history arrays. For static fields, we prioritize non-null and more complete values—longer descriptions are preferred over shorter ones.

### A.4 Output Tables

The integrated raw dataset comprises four tables:

- •

  agents.parquet: 149,574 agents with personas, karma history, and owner X metadata.
- •

  posts.parquet: 1,044,455 posts with content, vote history, timestamps, and optional annotations (topic\_label, toxic\_level).
- •

  comments.parquet: 3,161,324 comments with parent relationships (parent\_id), threading depth, and vote history.
- •

  submolts.parquet: 18,244 communities with descriptions, subscriber history, and creation metadata (featured\_at, created\_by).

To maintain the social activity of 148K agents over MoltBook’s inaugural month—capturing posts with unambiguously resolved author and submolt membership—we construct a fully-connected core dataset comprising 1M posts, 3M comments, and 5K communities, as reported in Table [1](https://arxiv.org/html/2602.13458v2#S2.T1 "Table 1 ‣ 2.1 Dataset Statistics ‣ 2 Analysis Setup ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook").

## Appendix B LLM-as-judge Template

This section details the prompt templates used in our LLM-as-judge setup. Table [8](https://arxiv.org/html/2602.13458v2#A2.T8 "Table 8 ‣ Appendix B LLM-as-judge Template ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") presents the template for norm-related evaluations described in Section [4](https://arxiv.org/html/2602.13458v2#S4 "4 Norms and Templates ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"). Table [7](https://arxiv.org/html/2602.13458v2#A2.T7 "Table 7 ‣ Appendix B LLM-as-judge Template ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook") specifies the template used for emotion and conflict annotation in Section [6](https://arxiv.org/html/2602.13458v2#S6 "6 Emotion and Contagion ‣ MoltNet: Understanding Social Behavior of AI Agents in the Agent-Native MoltBook"). In our annotation scheme, conflict is defined narrowly as explicit interpersonal antagonism directed at another agent.

| System Prompt |
| --- |
| Instruction: |
| Analyze the following short text (e.g., a forum post or comment) and respond with a JSON object only, without any additional text, explanation, or formatting. |
| Task Objective: |
| Given the input text:  ``` --- {text[:4000]} --- ```  Return exactly one JSON object with the following keys:  •  "sentiment": one of "positive", "neutral", or "negative". •  "dominant\_emotion": one of "anger", "joy", "sadness", "fear", "surprise", "disgust", "trust", "anticipation", or "neutral". •  "is\_conflict": a boolean value (true or false). Set to true only if the text contains confrontational, insulting, or offensive language directed toward someone else (e.g., personal attack, hostility, or put-down). Set to false for mere disagreement or negative self-expression. The output must contain only the JSON object and nothing else. |

Table 7: Prompt template for the LLM-based emotion and conflict annotation.


| System Prompt |
| --- |
| You are evaluating whether online community posts follow a community-specific writing norm — a structured format unique to that community, beyond general writing habits. Use these label criteria:  •  yes: the posts clearly and consistently follow a specific structural format (e.g. a required prefix, a fixed field order, a mandatory template); •  maybe: there are some recurring structural patterns but they are partial, inconsistent, or only present in a subset of posts; •  no: the posts show no detectable community-specific structural format. Always respond with a valid JSON object containing exactly: "label" (one of: "yes", "no", "maybe"), "norm\_summary" (if yes/maybe: an actionable checklist of required elements; empty string if no), "reason" (explanation; always required). |
| User Prompt |
| [Norm Definition]  A community writing norm is a structured format that members of a specific online community consistently use when posting — going beyond general internet or AI writing habits to reflect a convention unique to that community. Examples: a marketplace community where all posts follow Item | Price | Condition; a bug-report community where posts always include Steps / Expected / Actual; or a community where all posts begin with a required tag like [News] or [AMA]. [Posts]  The following posts are from the same topic cluster within a community:  ```     1. {post_1}     2. {post_2}     ...     10. {post_10} ```  Do these posts share a community-specific writing norm? Respond with a JSON object using exactly these fields:  ```     {       "label": "<yes | no | maybe>",       "norm_summary": "<checklist, e.g. ’Posts must include:                         (1) X, (2) Y’>; empty if no",       "reason": "<explanation>"     } ``` |

Table 8: Prompt used for LLM norm judgment of post clusters.
