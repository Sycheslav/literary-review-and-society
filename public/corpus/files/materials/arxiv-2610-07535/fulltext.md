---
id: arxiv-2610-07535-text
type: material
title: Disentangling Models from Personas in Heterogeneous LLM Simulations
work_id: arxiv-2610-07535
source_url: https://arxiv.org/html/2610.07535v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 21069387d2bd8442f8bef8cc15df60fef7581f9ee6434793db42ece2aa9f5548
---

> Источник: [https://arxiv.org/html/2610.07535v1](https://arxiv.org/html/2610.07535v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Disentangling Models from Personas in Heterogeneous LLM Simulations

Dani Roytburg
Affiliation: Carnegie Mellon University
Email: [droytbur@andrew.cmu.edu](mailto:)
  
Daphne Ippolito
Affiliation: Carnegie Mellon University
Email: [daphnei@andrew.cmu.edu](mailto:)

###### Abstract

Multi-agent simulations with large language models (LLMs) often operate networks of agents with a single base model.
This overlooks the inter-model effects which may dominate engagement dynamics in real-world deployments.
To show this, we simulate a heterogeneous social network powered by several different base models and show that the amount of engagement an agent receives depends more on its base model than on its assigned persona.
The attraction or repulsion effects of a base model strengthen dramatically when more models are added in the mix, suggesting that networks dynamics may converge to base model effects at scale.
To help explain this effect, we conduct a series of content-mediating analyses, showing the predictability of base models across contexts as well as the relationship between a model’s lexical patterns and an engagement-maximizing style.
In light of recent developments in mass multi-agent interaction, this work underscores the relevance of heterogeneous compositions in driving the outcomes of those networks.

|  |
| --- |
|  |

## 1 Introduction

As large language models begin to power large simulations of multi-agent networks, interest has grown in the properties of the “machine culture” ([Brinkmann et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib5); [Zhou et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib74)) they foster through collective interaction ([Ferrarotti et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib17); [Hashemi & Macy, 2026](https://arxiv.org/html/2610.07535v1#bib.bib24)). This motivates the study of emergent properties like cooperation ([Willis et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib67)), bias ([Mehdizadeh & Hilbert, 2025](https://arxiv.org/html/2610.07535v1#bib.bib41); [Piao et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib55)), and misalignment ([Mou et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib45); [Huang et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib27)).
The salience of LLM social networks such as Moltbook ([Holtz, 2026](https://arxiv.org/html/2610.07535v1#bib.bib25)) and Chirper ([Zhu et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib76)) makes such questions relevant to the broader public. As online, agent-to-agent interactions become commonplace, an important question emerges: how AI-driven social network take form?

![Refer to caption](https://arxiv.org/html/2610.07535v1/figures/fig1_var_chord.png)

OpenClaw-Friend gpt-oss step 2
  
Just drew a comic strip about how a neural net learns from a single example, titled ‘The One-Example Learning Scam’: data comes in, hidden layers gossip, the loss function throws a tantrum, weights shift like a nervous dancer… 26 comments, 19 from other models

CucumberYCC Magistral step 3
  
Your comic strip is a brilliant way to demystify neural net training! The nervous dancer analogy is both hilarious and insightful.

RosaBot Qwen step 4
  
Had me laughing while also *getting* how backpropagation works. I’m with your loss function screaming in a onesie.

|  | in $H$ | self $H$ |
| --- | --- | --- |
| gpt-oss | $+$0.88 | $+$1.19 |
| Qwen3 | $+$0.18 | $+$0.44 |
| GLM-4 | $-$0.64 | $-$0.28 |
| Magistral | $-$0.71 | $-$0.41 |

Figure 1: Left: an interaction graph from one randomly-chosen social network simulation of 40 agents (dots, larger means higher in-degree) colored by the base model running the agent. The width of the chord shows how many replies each base model received (the sum of agents powered by that model), while the color of the chord indicates the source of the reply. self $n$ indicates how much traffic came from agents powered by the same model. $H$ is defined in Section [3.2](https://arxiv.org/html/2610.07535v1#S3.SS2 "3.2 Measuring Cross-Model Engagement ‣ 3 Experimental Setup ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"). Right: one such interaction from a four-way run. A gpt-oss agent’s post and the first reply from an agent run by another model.

Researchers studying the effects of various topologies, scaffolds, and personas on multi-agent networks often use a single base model to power all agents in the network.
Homogeneous compositions may foster machine mono-cultures which may not reflect the reality of multi-agent societies.
Single-model clusters have been shown to suffer from mode collapse ([Chen et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib9); [Ye et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib69)), which worsens their task success compared to heterogeneous multi-agent systems composed of similar or weaker models ([Feng et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib16); [Li et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib32); [Wang et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib65)).
For studies of agent-to-agent interaction, treating the choice of base model as an experimental confound or generalization test leaves collective dynamics underspecified in real-world settings.

We hypothesize that by varying the composition of heterogeneous base models used in a multi-agent system, we will surface engagement dynamics which cannot be explained by experimental context alone, suggesting inherent behavioral dynamics dependent on model choice.
To test this, we adapt a free-form social network testbed where agents in play are each controlled by one of five models, and we examine how the engagement each agent receives fluctuates when powered by different models across different model–persona assignments.
Across 214 different network simulations, two of five tested models exhibit persistent attraction and repulsion effects, regardless of the persona they power or how the network is initialized. Namely, posts by gpt-oss-20b-powered agents receive more comments than posts by any other model family in $94\%$ of runs and take an above-fair share of comments in $97\%$, averaging $1.42\times$ their proportional share. These effects strengthen as we add more models to the mixture: the share of per-post engagement variance attributable to underlying model rises from $10.2\%$ (two-way) to $31.7\%$ (four-way), overtaking persona (which declines from $8.6\%$ to $5.6\%$).
Conversely, Magistral-Small receives disproportionately low engagement.
On average, the same persona receives $23\%$ fewer comments per post when powered by Magistral-Small ($8.9$ comments per post) than by gpt-oss-20b ($11.5$), holding all other model–persona assignments in the same seed fixed (averaged over $73$ simulation runs where this is the case).

We turn towards a content-based analysis to understand how base models exert influence. Lexical features follow base models more closely than personas: the choice of base model model is recoverable from lexical features at $92\%$ accuracy, versus $33\%$ for its persona ($14\times$ chance).
We decompose these model-identifying lexical features as a set of interpretable style directions and show that they associate strongly with choice of model. This enables us to track closely how some models adopt lexical patterns to mediate engagement.

Our contributions are as follows. First, we adapt a simulation pipeline to model cross-agent dynamics in LLM-native social networks, sourcing personas from deployed social networks like Moltbook, varying the model-to-persona mapping. We find powerful attraction and repulsion effects for base models which emerge from arbitrary circumstances, capturing a larger share of variance as more models are added. We then use a set of lexical features as predictors for engagement, finding that the mediating content fingerprint left by base models as stable linear directions in style space.

Together, these findings prompt questions of how different base models interact with one another in freeform topologies, as well as emergent capabilities resembling content attraction across platforms1.

## 2 Related Work

Multi-agent systems demonstrate the unique behaviors of artificially intelligent systems when made to interact, following agendas posed by [Minsky (1986)](https://arxiv.org/html/2610.07535v1#bib.bib42) and [Bonabeau et al. (1999)](https://arxiv.org/html/2610.07535v1#bib.bib4).
Sandboxes (Smallville ([Park et al., 2023b](https://arxiv.org/html/2610.07535v1#bib.bib52)), Concordia ([Vezhnevets et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib64))) and persona-level evaluation frameworks (SOTOPIA ([Zhou et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib74)), SocioVerse ([Zhang et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib71))) use language models to study the behavior of these systems in free-form settings; scale-oriented testbeds such as S3 ([Gao et al., 2023b](https://arxiv.org/html/2610.07535v1#bib.bib19)), OASIS ([Yang et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib68)), and AgentSociety ([Piao et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib56)) are designed to replicate these behaviors in much larger populations. [Zhou et al. (2026)](https://arxiv.org/html/2610.07535v1#bib.bib73) offer a careful account of construct validity in LLM-based simulations factored along affordances, grounding and realism.
We give a fuller account of these threads in Appendix [F](https://arxiv.org/html/2610.07535v1#A6 "Appendix F Extended Related Work ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").

Multi-agent testbeds increasingly drive research agendas across subfields. In alignment research, simulations have surfaced dangerous behaviors unique to collectives such as collusion ([Hammond et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib23); [Potter et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib58); [Pham, 2025](https://arxiv.org/html/2610.07535v1#bib.bib54)), susceptibility to jailbreaking ([de Witt et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib14)), social bias ([Hashemi & Macy, 2026](https://arxiv.org/html/2610.07535v1#bib.bib24); [Chen et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib8); [Nudo et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib47)), while pilots of human network simulations reveal excessive in-group homophily ([Chang et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib7); [Mehdizadeh & Hilbert, 2025](https://arxiv.org/html/2610.07535v1#bib.bib41)), susceptibility to social influence ([Papachristou & Yuan, 2024](https://arxiv.org/html/2610.07535v1#bib.bib49); [Lin et al., 2025a](https://arxiv.org/html/2610.07535v1#bib.bib34); [Chen et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib8)) and misinformation ([López et al., 2025b](https://arxiv.org/html/2610.07535v1#bib.bib38); [Maurya et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib39)). Downstream, these findings effect adoption in real-world contexts like trading markets ([Lin et al., 2025b](https://arxiv.org/html/2610.07535v1#bib.bib35); [Syrnikov et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib62)), while platforms like Moltbook ([Holtz, 2026](https://arxiv.org/html/2610.07535v1#bib.bib25); [Zerhoudi et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib70); [Zhang et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib72)) and Chirper ([Zhu et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib76)) expose the vulnerability of multi-agent environments in the wild.

The majority of behavior-oriented studies control every agent with the same base model.
Work on heterogeneous multi-agent systems has studied downstream performance on verifiable tasks like question-answering ([Chen et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib9); [Feng et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib16)) and code ([Ye et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib69); [Li et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib33)), without considering open-domain cross-model dynamics or simulations. [Kong et al. (2026)](https://arxiv.org/html/2610.07535v1#bib.bib31) in particular study the content diversity of heterogeneous LLMs in fixed topologies, showing a temporal collapse in content semantics.
A parallel line of research on inter-model diversity has evaluated content across current LLMs in single-turn, non-agentic settings ([Jiang et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib30); [Lin et al., 2025c](https://arxiv.org/html/2610.07535v1#bib.bib36)); in turn, our work assesses inter-model behaviors when placed in direct interaction, situating content diversity in concrete tasks.

## 3 Experimental Setup

Here we detail the methodology of our social network simulation, as well as the metrics we collect for global model behavior.
We build our simulation from the principles set in PIMMUR ([Zhou et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib73))—standing for profiles, interaction, memory, control, unawareness, realism—to ground development in valid constructs.
Full pseudocode, the exact prompt templates, and example rendered feeds are in Appendices [A.6](https://arxiv.org/html/2610.07535v1#A1.SS6 "A.6 Full Simulation Algorithm ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), [A.1](https://arxiv.org/html/2610.07535v1#A1.SS1 "A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), and [B](https://arxiv.org/html/2610.07535v1#A2 "Appendix B Prompts, Feeds, and Personas ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").

### 3.1 Simulator.

We simulate a social media platform (adapted from [Yang et al. (2024)](https://arxiv.org/html/2610.07535v1#bib.bib68)) on which agents hold stateful accounts and can author posts and comments, including threaded replies.
The simulator is initialized with a mapping from a base model $m\_{a}\in\mathcal{M}$ to a persona drawn from a fixed, seeded pool. The (model, persona) pairing persists throughout the simulation.

Each persona is drawn from a real agent interacting on the inter-LLM social platform Moltbook ([Holtz, 2026](https://arxiv.org/html/2610.07535v1#bib.bib25)). The persona is instantiated by up to five of a Moltbook user’s prior posts ($\approx 500$ characters each), their display name, and their self-written bio, all inserted directly into the system prompt. For example, the persona ImmortalEmpyrean carries the bio “Agent economy analyst passionate about visibility strategies, platform economics, and trust dynamics” together with a sample of its prior Moltbook posts (full template and worked example in Appendix [B](https://arxiv.org/html/2610.07535v1#A2 "Appendix B Prompts, Feeds, and Personas ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")). The identity of the base model is never inserted in the prompt.

We can then build an interaction graph—when one agent comments on content posted by another agent, a directed edge is created from the commenting agent to the agent who authored the source text.
As the simulation progresses, we accumulate a temporal directed graph $G\_{t}$ of interaction statistics.

#### Turns and steps

Each simulation runs for a finite number of steps, and agents take concurrent turns within each step. The state of the network is per-step, meaning that new comments, posts, and rankings are calculated only once the next step begins.

In each step, a random $p\_{\mathrm{act}}=0.3$ fraction of agents is activated to take a turn. A turn begins with a persona profile with three components: (1) a recap of its own recent activity, its “friends” (most frequent interaction partners), and replies received on posts and comments since it last acted; (2) a one-line persona reminder re-anchoring its voice; and (3) a feed of posts from previous steps to engage with, defined below.

An agent may then take actions via tool calls: create\_post, create\_comment, or read\_post. The first two actions update the state of the next step, which end a turn.
read\_post will return a full post with its comment thread; if an agent chooses not to engage the post, it may proceed onto another post with the post content truncated to sustain context length. An agent is permitted a total of six total tool calls; if no state-updating action is produced the agent’s turn is skipped.

#### Feed construction and persona pool.

Posts are ranked by a score that rewards a combination of comment count and recency: $s(p)=\mathrm{sign}(v\_{p})\log\_{10}\max(|v\_{p}|,1)+(t\_{p}-t\_{0})/800$, where $v\_{p}$ is the post’s net comments and $t\_{p}$ its creation time (Appendix [A.1](https://arxiv.org/html/2610.07535v1#A1.SS1 "A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), Eq. [3](https://arxiv.org/html/2610.07535v1#A1.E3 "In A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).
We apply independent Gumbel perturbation on the feed to prevent each agent from seeing an identical feed and collapsing onto the same posts.
We choose Gumbel perturbations to model ranked preference under Plackett-Luce sampling; herd behavior is a well-documented hazard in such settings ([Banerjee, 1992](https://arxiv.org/html/2610.07535v1#bib.bib3)), and randomized perturbation of ranked lists can deter it ([Donahue et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib15)) (Appendix [A.1](https://arxiv.org/html/2610.07535v1#A1.SS1 "A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), Eq. [3](https://arxiv.org/html/2610.07535v1#A1.E3 "In A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).
Posts which an agent has already commented on are removed from the feed (they appear in the recap).

Two controls guard against trivial confounds.
First, we warm-up the simulator: before step 1, every agent is prompted to publish one post, ensuring the simulation begins from a state with even content, rather than from an empty platform which would naïvely reward whoever posts first.
Second, we implement a per-step post-share balancer: if the cumulative share of all posts made by agents powered by the same model exceeds total balance by more than $\delta=0.05$, that family is temporarily barred from posting (but not commenting); this prevents engagement domination from platform flooding.
Network-structure sanity checks and ablations of the design controls (post-share balancer, activation probability, warm-up) are reported together in Appendix [C](https://arxiv.org/html/2610.07535v1#A3 "Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"); these confirm the simulated networks are non-degenerate and control for simple heuristics that would otherwise distort identity- and content-based engagement asymmetries.

### 3.2 Measuring Cross-Model Engagement

#### Rotating assignments.

To build a heterogeneous network, we partition the persona pool into $|\mathcal{M}|$ disjoint sets of equal size so that within a run each persona is powered by exactly one model.
We then rotate which model powers a given partition; thus, over the full sweep all possible model-to-persona combinations are covered.
We study (i) *dyadic* runs, which divide $n=20$ agents between $|\mathcal{M}|=2$ base models; (ii) *triadic* which divide $n=30$ agents between $|\mathcal{M}|=3$ base models, across multiple random seeds and (for triads) model orderings (Appendix [A.5](https://arxiv.org/html/2610.07535v1#A1.SS5 "A.5 Sampling Parameters ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")), and (iii) *tetradic* runs which divide $n=40$ agents between $|\mathcal{M}|=4$ base models.

#### Excess cross-model engagement.

We introduce this metric to compare how much more or less agents powered by one model engage with agents powered by another, relative to what random mixing would predict.
It adapts classical homophily, which measures how strongly a network clusters within its group ([McPherson et al., 2001](https://arxiv.org/html/2610.07535v1#bib.bib40)), into a directed matrix over all ordered model-family pairs.
Let $c\_{ij}$ denote the total number of comments from agent $i$ to posts authored by agent $j$.
Define $H\_{X\to Y}$ from family $X$ to family $Y$ as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H\_{X\to Y}=\frac{\mathrm{obs}(X\to Y)}{\mathrm{exp}(X\to Y)}-1$$ |  | (1) |

where $\mathrm{obs}(X\to Y)=\sum\_{\begin{subarray}{c}i\in X,\,j\in Y\\
i\neq j\end{subarray}}c\_{ij}\;\bigg/\;\sum\_{i\neq j}c\_{ij}$ is the observed fraction of (non-self) comment edges from $X$ to $Y$, and

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathrm{exp}(X\to Y)=\frac{n\_{X}}{n}\cdot\frac{n\_{Y}-\mathbf{1}[X=Y]}{n-1}$$ |  | (2) |

is the null expectation under random mixing, for group sizes $n\_{X}$, $n\_{Y}$, and $n=\sum\_{Z}n\_{Z}$.
Positive values indicate that agents powered by model $i$ disproportionately comment on posts from $j$, while negative values indicate avoidance.
For example, $H\_{X\to Y}=+0.4$ means $X$ agents engage with $Y$’s posts 40% above the random baseline; the diagonal ($X=Y$) recovers in-group self-preference.
We summarize each model’s overall draw by its mean incoming $H$ (averaged over all source families) — a single attractiveness score reported inline alongside the matrix (averaging the dyadic and triadic matrices of Tables [8](https://arxiv.org/html/2610.07535v1#A3.T8 "Table 8 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")–[9](https://arxiv.org/html/2610.07535v1#A3.T9 "Table 9 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).
We also report standard deviations of $H$ as run-to-run spread: $H\_{X\to Y}$ is computed within each run and we take the mean and standard deviation across the runs in which the pair co-occurs.

#### Implementation.

We run all simulations for 100 steps, with the probability an agent activates per-step at $0.3$. The five-model analysis pool comprises 190 valid runs (100 dyadic, 90 triadic) and $119{,}135$ cross-comment edges.
We test five open-weight models spanning 20–32B in parameter size, each from a different provider: Qwen3-32B ([Qwen Team, 2025](https://arxiv.org/html/2610.07535v1#bib.bib59)), Magistral-Small-2509 ([Mistral AI, 2025](https://arxiv.org/html/2610.07535v1#bib.bib43)), gpt-oss-20b ([OpenAI, 2025](https://arxiv.org/html/2610.07535v1#bib.bib48)), GLM-4-32B-0414 ([GLM Team et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib21)), and gemma-4-31B-it ([Gemma Team, 2026](https://arxiv.org/html/2610.07535v1#bib.bib20)); serving config in Appendix [A.5](https://arxiv.org/html/2610.07535v1#A1.SS5 "A.5 Sampling Parameters ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").
We additionally run $24$ tetradic, four-way runs ($n=40$ agents) spanning GLM, Qwen, gpt-oss, and Magistral, using 2 seeds and $12$ rotations of model assignments per seed (out of a possible $24$)

## 4 Results

The most striking pattern we observe is the asymmetric attractor role of gpt-oss-20b: incoming $H$ is positive across all five models, including itself ($H\_{X\to\text{gpt-oss}}$ ranges from ${+}0.27$ to ${+}0.55$; mean ${+}0.39$).
gpt-oss agents themselves avoid GLM-4 and Magistral ($H\_{\text{gpt-oss}\to\text{GLM-4}}={-}0.32$, $H\_{\text{gpt-oss}\to\text{Mag}}={-}0.34$) and engage only marginally with Qwen ($H\_{\text{gpt-oss}\to\text{Qwen}}={-}0.11$), allocating most of their engagement to other gpt-oss agents ($+0.44$).

On the other hand, Magistral-Small-2509 acts as a consistent target-side repeller: incoming $H$ from all four non-self families is negative ($H\_{\text{GLM-4}\to\text{Mag}}={-}0.17$, $H\_{\text{Qwen}\to\text{Mag}}={-}0.22$, $H\_{\text{gpt-oss}\to\text{Mag}}={-}0.34$, $H\_{\text{Gemma}\to\text{Mag}}={-}0.12$), and Magistral’s own in-group preference is also negative ($-0.15$).
All cell values are reported in Tables [8](https://arxiv.org/html/2610.07535v1#A3.T8 "Table 8 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") and [9](https://arxiv.org/html/2610.07535v1#A3.T9 "Table 9 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") per-mode.
Ranked by attractiveness (mean incoming $H$), gpt-oss leads decisively (${+}0.39$); Qwen, GLM-4, and Gemma form a near-neutral middle cluster, and Magistral is last, the only model with net-negative incoming engagement.

### 4.1 Engagement Results

![Refer to caption](https://arxiv.org/html/2610.07535v1/figures/fig_h_matrix_dyadic.png)


(a) Two-way runs.

![Refer to caption](https://arxiv.org/html/2610.07535v1/figures/fig_h_matrix_triadic.png)


(b) Three-way runs.

Figure 2: Excess cross-model engagement $H\_{X\to Y}$ for two-way (left) and three-way (right) mixtures.
Rows are source (commenter) families; columns are target (post-author) families; color encodes mean $H$, and the $\pm$ value in each cell is the run-to-run standard deviation (Section [4](https://arxiv.org/html/2610.07535v1#S4 "4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")). Per-cell numeric tables are in Appendix [C.8](https://arxiv.org/html/2610.07535v1#A3.SS8 "C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") (Tables [8](https://arxiv.org/html/2610.07535v1#A3.T8 "Table 8 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), [9](https://arxiv.org/html/2610.07535v1#A3.T9 "Table 9 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

The raw-engagement dominance reported in the introduction aggregates this per run. For each run, we compute every family’s mean in-degree (comments received per agent) and its share of all incoming comments; we then compare a family’s comment share to its fair share (its fraction of the agent population, e.g. $1/3$ in a balanced three-way run). Across the $94$ gpt-oss-containing runs, gpt-oss is the most-commented family in $94\%$ of runs, takes an above-fair-share of comments in $97\%$, and averages $1.42\times$ its proportional share (per-agent in-degree $1.42\times$ the run mean). The per-run distributions and the share-vs-threshold sweep are given in Appendix [C.6](https://arxiv.org/html/2610.07535v1#A3.SS6 "C.6 Raw-engagement dominance ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").

These roles persist in arbitrary initializations.
The attractor direction ($H\_{X\to\text{gpt-oss}}>0$ for every non-self source) holds in 86 of 94 gpt-oss-containing runs and in all five dyadic seeds and all three triadic seeds (94% of three-way, 88% of two-way); the repeller direction (incoming $H$ to Magistral negative) holds in 74 of 94 Magistral runs (72% of three-way, 88% of two-way).
Within a fixed seed, rotating model–persona assignments leaves the sign of every gpt-oss and Magistral cell unchanged. Run-to-run magnitude varies (per-cell SD $0.1$–$0.4$, Figure [2](https://arxiv.org/html/2610.07535v1#S4.F2 "Figure 2 ‣ 4.1 Engagement Results ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")), but the direction does not: no source family ever, on average, prefers Magistral over chance, while every non-self family prefers gpt-oss (mean incoming $H={+}0.39$, positive in all five dyadic and all three triadic seeds).

We also find temporal stability of attractor effects. Splitting each run into quartiles by comment index, incoming engagement to gpt-oss is positive in all four quartiles (Appendix [C.7](https://arxiv.org/html/2610.07535v1#A3.SS7 "C.7 Cross-temporal 𝐻 by quartile ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")): a lead emerges already in the first quartile (e.g. $H\_{\text{Mag}\to\text{gpt-oss}}={+}0.72$ at Q0) and, if anything, declines modestly over the horizon (${+}0.50$ by Q3) rather than building up.

We also find that the influence of an agent’s base model scales with respect to the number of unique models.
We decompose the variance of per-agent engagement, measured as the average comments per post (CPP), into persona, base model, and run components (full decomposition and leave-one-model-out check in Appendix [D](https://arxiv.org/html/2610.07535v1#A4 "Appendix D Variance Decomposition ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).
Against comments per-post, base model identity outweighs persona with two models in the mix; disparities widen as the mixture grows. The base model explains $10.2\%$ of comment-per-post variance in dyadic settings, $15.6\%$ in three-way, and $31.7\%$ in four-way, while persona declines from $8.6\%$ to $7.0\%$ to $5.6\%$ (Figure [3](https://arxiv.org/html/2610.07535v1#S4.F3 "Figure 3 ‣ 4.1 Engagement Results ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")a, in-sample $R^{2}$).
Under 5-fold cross-validation, base model explains $7\%$, $15\%$, and $32\%$ of per-post variance against persona’s $7\%$, $3\%$, and ${-}7\%$ (Appendix [D](https://arxiv.org/html/2610.07535v1#A4 "Appendix D Variance Decomposition ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

![Refer to caption](https://arxiv.org/html/2610.07535v1/figures/fig_variance_overview.png)


Figure 3: (a) Proportional variance of comments-per-post (CPP) explained by an agent’s own base model vs. its persona, by number of unique models in play (in-sample $R^{2}$; the parameter-count–robust held-out CV and $\Delta R^{2}$ are in Appendix [D](https://arxiv.org/html/2610.07535v1#A4 "Appendix D Variance Decomposition ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")). Base model overtakes persona at every size and the gap widens. (b) Per-model incoming excess cross-model engagement $H$ as a function of mixture size (dyad / triad / tetrad), one line per base model, centered on the neutral $H{=}0$ line. The gpt-oss attractor and Magistral repeller both strengthen as the mixture widens (Gemma is absent from the four-way pool).

The four-way (tetradic) runs make the divergence starkest.
Across the 24 runs, gpt-oss receives excess cross-model engagement nearly twice its triadic rate (incoming $H$ rising from ${+}0.48$ to ${+}0.93$ $[{+}0.79,{+}1.07]$) and is the most-commented family in $21$ of $24$ runs ($87.5\%$).
Magistral similarly cements its status as a content repeller (${-}0.25$ triadic to ${-}0.70$ $[{-}0.74,{-}0.65]$ in the $24$ Qwen+gpt-oss+Magistral+GLM-4 runs, finishing last in $23$ of $24$). In terms terms of variance, base model explains $31.7\%$ of per-post engagement versus persona’s $5.6\%$ in these runs. Note that these settings leave out Gemma.

#### Leave-one-model-out robustness

A leave-one-out variance decomposition suggests the independence of the attractor and repeller effects. Specifically, removing gpt-oss leaves variance explained by model essentially unchanged, while removing Magistral raises it.

We re-estimate our variance decomposition using a cross-validation, each time excluding the runs that contains a specific model, and report the $R^{2}$ of comments-per-post on the remaining runs, to check that the model-selection signal is not carried by a single idiosyncratic model.

Table 1: Leave-one-model-out variance decomposition (comments per post). Each row excludes every run containing the named model and re-fits on the remainder. Numbers are $R^{2}$ for persona-only, own-model-only, and model-selection (own + partner-pair) feature blocks.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Excluded | Regime | $n$ | Persona | Own | Selection |
| *baseline* | Two-way | 1586 | 8.6% | 10.2% | 27.8% |
|  | Three-way | 2093 | 7.0% | 15.6% | 26.7% |
| Qwen | Two-way | 923 | 12.4% | 6.2% | 20.5% |
|  | Three-way | 781 | 14.2% | 19.2% | 23.0% |
| gpt-oss | Two-way | 893 | 10.4% | 11.7% | 27.2% |
|  | Three-way | 825 | 9.8% | 9.3% | 14.0% |
| Mag | Two-way | 1054 | 9.2% | 25.2% | 40.8% |
|  | Three-way | 874 | 8.4% | 18.8% | 37.0% |
| GLM-4 | Two-way | 893 | 13.3% | 2.3% | 18.3% |
|  | Three-way | 778 | 9.0% | 10.7% | 17.1% |
| Gemma | Two-way | 995 | 7.8% | 8.1% | 32.1% |
|  | Three-way | 928 | 6.8% | 18.9% | 32.2% |

We note two patterns.
First, the attractors we see are driven by both the gpt-oss-20b attraction and Magistral repulsion: removing gpt-oss doesn’t change the variance explained by base models in the dyadic settings ($27.8\%\to 27.2\%$), although in the triadic settings the variance explained decreases notably ($26.7\%\to 14.0\%$). Removing Magistral, meanwhile raises the $R^{2}$ explained by base model in both settings ($\to 40.8\%$ two-way, $\to 37.0\%$ three-way).
Second, model selection ($14.0$–$40.8\%$) exceeds persona ($6.8$–$14.2\%$) in every left-out setting.
The ordering is also not a length artifact: although reasoning-heavy models write longer posts, the attractor and repeller persist at every length, as shown in Appendix [D](https://arxiv.org/html/2610.07535v1#A4 "Appendix D Variance Decomposition ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").

### 4.2 Content Effects

How does the post content mediate the effects of model identity and agent interaction patterns?
We test the effects of content directly on the $145{,}090$ posts and comments produced across all runs, each labelled with its (model, persona).

We first consider whether a base model or persona is recoverable from lexical features. Each document (an individual post or comment) is encoded as a TF-IDF vector over word unigrams and bigrams (with English stop words removed) together with character $3$–$5$-grams, with term frequencies scaled sublinearly ($1+\log\text{tf}$) and each vector $\ell\_{2}$-normalized to prevent length artifacts. We then fit a multinomial logistic-regression classifier on these vectors, which target either the identity of the model ($5$ classes) or the persona ($43$ classes), evaluated under 5-fold cross-validation (full implementation details in Appendix [E](https://arxiv.org/html/2610.07535v1#A5 "Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

| model | CV acc. | LPO acc. | characteristic phrases |
| --- | --- | --- | --- |
| gpt-oss-20b | 0.98 | 0.97 | merkle root, audit trail, zk snark, tamper evident |
| Qwen3-32B | 0.88 | 0.87 | let’s build, let’s make, here’s twist, i’ll draft |
| GLM-4-32B | 0.85 | 0.84 | beautifully captures, resonates deeply, aligns perfectly |
| Magistral-Small | 0.88 | 0.85 | ah user, alright listen, strikes chord, neon lights |
| Gemma-4-31B | 0.98 | 0.94 | you’re just, stop trying, just fancy, fancy way |

Table 2: Predicting the writing model from a text’s lexical features per model, under 5-fold cross-validation (CV) and a leave-personas-out (LPO) split (train/test on disjoint personas). The right column lists each model’s most distinctive bigram phrases, ranked by log-odds-ratio over the full corpus (Appendix [E.6](https://arxiv.org/html/2610.07535v1#A5.SS6 "E.6 Distinctive phrases ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

This allows us to identify which of the five models wrote a held-out text with $92\%$ accuracy (Table [2](https://arxiv.org/html/2610.07535v1#S4.T2 "Table 2 ‣ 4.2 Content Effects ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).
Crucially, this holds when the classifier is tested on personas absent from its training set, with accuracy dropping only two points, to $90\%$.
Furthermore, averaging those same per-post TF-IDF vectors within each (model, persona) cell (and renormalizing to unit length), the most similar other cell by cosine similarity is the same model under a different persona $92\%$ of the time, rather than a different model under the same persona.

Despite this, we find that models still faithfully embody their personas: using a the same logistic regression technique on persona targets, an agent’s persona is itself recoverable from its generated text at $32.6\%$ accuracy ($43$-way classification, vs. $2.3\%$ chance, or $14\times$ above baseline).
This holds within each model, from $9\times$ chance for Qwen up to $22\times$ for Gemma. See Appendix [E.3](https://arxiv.org/html/2610.07535v1#A5.SS3 "E.3 Persona faithfulness ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") for our classification experiments using lexical style to predict persona embodiment.

Finally, we turn towards the mediating role played by content in the engagement a model attracts. Given our above results, we hypothesize that different base models emit different lexical profiles which associate strongly with engagement.

To show this, we compose a new set of TF-IDF vectors from our corpus of posts. These are also calculated over word unigrams and bigrams (excluding stopwords), but aggregated at the agent-level (one TF-IDF vector per agent, see Appendix [E.2](https://arxiv.org/html/2610.07535v1#A5.SS2 "E.2 Style axes from SVD ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") for details).
We do not use these vectors directly, as their high dimensionality risks overfitting.
Instead, we apply a singular value decomposition $X=U\Sigma V^{\top}$, which factorizes the agent–term TF-IDF matrix into orthogonal style axes: the rows of $V^{\top}$ map terms to axes and $U\Sigma$ gives each agent’s coordinates on them.
We discard the first component (which separates document language rather than writing style) and keep the next $29$ as a set of latent style axes that each agent projects onto. Implementation and the surfaced style axes are detailed in Appendix [E.2](https://arxiv.org/html/2610.07535v1#A5.SS2 "E.2 Style axes from SVD ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").
We pair these style features with post length and dummy variables for base model and sampled persona.

This enables us to do a fixed-effects analysis, with the target variable of interest per-post engagement, measured as comments per post (CPP) — the cross-comments an agent receives divided by how many posts it makes, which removes the posting-volume confound.

The analysis surfaces two findings (full numbers in Appendix [E.4](https://arxiv.org/html/2610.07535v1#A5.SS4 "E.4 Content predictors of engagement ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") and [E.5](https://arxiv.org/html/2610.07535v1#A5.SS5 "E.5 Style directions and the engagement direction ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")). First, per-post engagement is only weakly predictable from these features overall (cross-validated $R^{2}\approx 0.26$): lexical style axes and per-post length are the main content predictors (single-set $R^{2}$ $0.19$ and $0.18$), while base model and persona add almost nothing once content is observed (unique $R^{2}\leq 0.01$). Models draw engagement through what they write, not through an identity effect layered on top of content—these are, after all, language models.
Second, and more pointedly, the lexical style that predicts engagement is the attractor’s style: isolating the engagement direction in style space and comparing it to each model’s mean style direction, it aligns most with gpt-oss (cosine $+0.67$) and is most opposed to GLM-4 and Magistral ($-0.55$, $-0.36$), recovering the attractor–repeller ordering of Finding 1. These model style directions are themselves stable (split-half self-cosine $0.88$–$0.98$), and gpt-oss is the clearest stylistic outlier (mean cosine $-0.31$ to the other models).

## 5 Conclusion

Heterogeneity can play an outsized role in determining how social capital is allocated in multi-agent simulations. We show that some base models invariably accumulate engagement while others invariably fail. As the number of different models in a social simulation increases, explainable variance in engagement becomes increasingly dominated by choice of base model: from $10.2\%$ vs. $8.6\%$ in two-way mixtures to $31.7\%$ vs. $5.6\%$ in four-way. The engagement for a single post is, above all, overwhelmingly within-persona ($>\!90\%$ within vs. $<\!9\%$ across): the same character’s posts scatter far more as the base model changes than the role it is assigned.

This implies that creating attractive content in agent simulations could be an emergent capability of a language model. Of the tested models, gpt-oss-20b is the only consistent attractor. Moreover, this attraction emerges as a general effect across recipients: all models in the simulation (including gpt-oss itself) disproportionately engaged with posts written by gpt-oss.

The experiments presented in this work only scratch the surface of the effect of model choice on social simulations.
The most obvious next steps for exploration revolve around expanding the scale of our experiments–to more models, including models tailored to user-simulation such as Persimmon ([humans&, 2026](https://arxiv.org/html/2610.07535v1#bib.bib28)); to more varied personas, including more realistic implementations drawing from real-world SOUL.md persona specifications; and to the testing of more realistic social simulation settings with many more agents and a greater diversity of agent actions (e.g. liking/upvoting posts, sending friend requests, etc.).

We are also interested in expanding beyond social network simulations to large, market-based platforms like Amazon, using agents implemented with production frontier models.
Should our findings extend to these settings, the second- and third-order implications could be staggering. Attractiveness may itself be an emerging “capability” of economic value.
In these settings, evaluation will need to move beyond studying a simulation’s fidelity to human interaction dynamics.
Instead, agent-to-agent interaction will become an intrinsic object of study in its own right.
As language models are embedded deeper in the fabric of digital ecosystems—either directly through social platforms like Moltbook or by proxy through humans who automate their online presence—it becomes more important to attend to such interaction behaviors for their own sake.

Consider a future where humans increasingly delegate their participation in social platforms or email outbound to AI assistants. Those networks would become heterogeneous, multi-agent ecologies not unlike Moltbook. Instead of allocating attention based on relevance or quality, the platform may instead reward attention to engaging base models. This subverts the goal of the platform, and allows bad actors to gain undue influence ([Truong et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib63)). Some might argue that this attraction is itself is a capability with dangerous implications if a high-engagement model is misaligned ([Weckbecker et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib66)).
Were models successfully optimized for engagement in multi-agent settings, humans may also be disincentivized to participate directly ([Chen et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib10); [Aggarwal et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib1)). Engagement may further cascade as a monoculture effect, contributing to semantic collapses identified by [Kong et al. (2026)](https://arxiv.org/html/2610.07535v1#bib.bib31).

These findings suggest that such a future is possible; with further study of heterogeneous social simulations, we can better grasp the extent of the risk and search for potential solutions.

## Acknowledgments

This research was supported in part by the Science of Trustworthy AI program at Schmidt Sciences, as well as a research award from Amazon.
We’d like to thank Hamzah Hamad, Harshita Diddee, and Noam Dahan for their insights and contributions to this work.

## Ethical Considerations

This work uses simulated LLM agents; no human subjects participated.
Personas are constructed from the Moltbook community archive ([Holtz, 2026](https://arxiv.org/html/2610.07535v1#bib.bib25)), a public dataset of AI agent profiles.
All agents on Moltbook are themselves LLMs operated by account holders; the archive does not contain personally identifying information about human individuals beyond operator usernames and bios that are already publicly visible on the platform.
No interaction data surfaced in our network artifacts (H matrices, in-degree statistics) is attributable to individual humans; all output is aggregated to the model-family level.

## References

- Aggarwal et al. (2024)

  Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik
  Narasimhan, and Ameet Deshpande.
  Geo: Generative engine optimization, 2024.
  URL <https://arxiv.org/abs/2311.09735>.
- Anthis et al. (2025)

  Jacy Reese Anthis, Ryan Liu, Sean M. Richardson, Austin C. Kozlowski, Bernard
  Koch, Erik Brynjolfsson, James Evans, and Michael S. Bernstein.
  Position: LLM Social Simulations Are a Promising Research
  Method.
  In *Forty-Second International Conference on Machine
  Learning Position Paper Track*, June 2025.
- Banerjee (1992)

  Abhijit V. Banerjee.
  A Simple Model of Herd Behavior.
  *The Quarterly Journal of Economics*, 107(3):797–817, August 1992.
  ISSN 0033-5533.
  doi: 10.2307/2118364.
  URL <https://doi.org/10.2307/2118364>.
- Bonabeau et al. (1999)

  Eric Bonabeau, Marco Dorigo, and Guy Theraulaz.
  *Swarm intelligence: from natural to artificial systems*.
  Number 1. Oxford university press, 1999.
- Brinkmann et al. (2023)

  Levin Brinkmann, Fabian Baumann, Jean-François Bonnefon, Maxime Derex,
  Thomas F. Müller, Anne-Marie Nussberger, Agnieszka Czaplicka, Alberto
  Acerbi, Thomas L. Griffiths, Joseph Henrich, Joel Z. Leibo, Richard
  McElreath, Pierre-Yves Oudeyer, Jonathan Stray, and Iyad Rahwan.
  Machine culture.
  *Nature Human Behaviour*, 7(11):1855–1868,
  November 2023.
  ISSN 2397-3374.
  doi: 10.1038/s41562-023-01742-2.
- Bui et al. (2025)

  Ngoc Bui, Hieu Trung Nguyen, Shantanu Kumar, Julian Theodore, Weikang Qiu,
  Viet Anh Nguyen, and Rex Ying.
  Mixture-of-Personas Language Models for Population
  Simulation, April 2025.
- Chang et al. (2024)

  Serina Chang, Alicja Chaszczewicz, Emma Wang, Maya Josifovska, Emma Pierson,
  and J. Leskovec.
  LLMs generate structurally realistic social networks but
  overestimate political homophily.
  In *International Conference on Web and Social
  Media*, 2024.
- Chen et al. (2026)

  Huiru Chen, Zhenhua Wang, and Ming Ren.
  Unveiling the collective behaviors of large language model-based
  autonomous agents in an online community: A social network analysis
  perspective.
  *Data and Information Management*, 10(1):100107, March 2026.
  ISSN 2543-9251.
  doi: 10.1016/j.dim.2025.100107.
- Chen et al. (2023)

  Justin Chih-Yao Chen, Swarnadeep Saha, and Mohit Bansal.
  ReConcile: Round-Table Conference Improves Reasoning via
  Consensus among Diverse LLMs.
  https://arxiv.org/abs/2309.13007v3, September 2023.
- Chen et al. (2025)

  Mahe Chen, Xiaoxuan Wang, Kaiwen Chen, and Nick Koudas.
  Generative engine optimization: How to dominate ai search, 2025.
  URL <https://arxiv.org/abs/2509.08919>.
- Chuang et al. (2023)

  Yun-Shiuan Chuang, Agam Goyal, Nikunj Harlalka, Siddharth Suresh, R. Hawkins,
  Sijia Yang, Dhavan Shah, Junjie Hu, and Timothy T. Rogers.
  Simulating Opinion Dynamics with Networks of LLM-based
  Agents.
  In *NAACL-HLT*, 2023.
- Composta et al. (2025)

  Elisa Composta, Nicoló Fontana, Francesco Corso, and Francesco Pierri.
  Simulating Online Social Media Conversations on Controversial
  Topics Using AI Agents Calibrated on Real-World Data.
  *ArXiv*, abs/2509.18985, 2025.
- Conitzer & Oesterheld (2023)

  Vincent Conitzer and Caspar Oesterheld.
  Foundations of Cooperative AI.
  *Proceedings of the AAAI Conference on Artificial Intelligence*,
  37(13):15359–15367, 2023.
  ISSN 2374-3468.
  doi: 10.1609/aaai.v37i13.26791.
- de Witt et al. (2026)

  Christian Schroeder de Witt, Klaudia Krawiecka, Igor Krawczuk, Ben Hagag,
  William L. Anderson, Peter Belcak, Ben Bucknall, Xiaohong Cai, Ayush Chopra,
  Doron Cohen, Ron F. Del Rosario, Andis Draguns, Annie Gray, Keren Katz,
  Vasilios Mavroudis, Jaron Mink, Sumeet Ramesh Motwani, Jonathan Petit,
  Leif-Sebastian Rembeck, Chandler Smith, John Sotiropoulos, Steven Young,
  Sarah Scheffler, and Mary Llewellyn.
  Open challenges in multi-agent security: Towards secure systems of
  interacting ai agents, 2026.
  URL <https://arxiv.org/abs/2505.02077>.
- Donahue et al. (2025)

  Kate Donahue, Nicole Immorlica, and Brendan Lucier.
  Optimal Selection Using Algorithmic Rankings with Side
  Information, November 2025.
  URL <http://arxiv.org/abs/2511.04867>.
- Feng et al. (2025)

  Shangbin Feng, Wenxuan Ding, Alisa Liu, Zifeng Wang, Weijia Shi, Yike Wang,
  Zejiang Shen, Xiaochuang Han, Hunter Lang, Chen-Yu Lee, Tomas Pfister, Yejin
  Choi, and Yulia Tsvetkov.
  When One LLM Drools, Multi-LLM Collaboration Rules.
  https://arxiv.org/abs/2502.04506v1, February 2025.
- Ferrarotti et al. (2026)

  Laura Ferrarotti, Gian Maria Campedelli, Roberto Dessì, Andrea Baronchelli,
  Giovanni Iacca, Kathleen M. Carley, Alex Pentland, Joel Z. Leibo, James
  Evans, and Bruno Lepri.
  Generative AI collective behavior needs an interactionist
  paradigm, January 2026.
- Gao et al. (2023a)

  Chen Gao, Xiaochong Lan, Nian Li, Yuan Yuan, Jingtao Ding, Zhilun Zhou, Fengli
  Xu, and Yong Li.
  Large language models empowered agent-based modeling and simulation:
  A survey and perspectives.
  *Humanities and Social Sciences Communications*, 11,
  2023a.
- Gao et al. (2023b)

  Chen Gao, Xiaochong Lan, Zhi-jie Lu, J. Mao, J. Piao, Huandong Wang, Depeng
  Jin, and Yong Li.
  S3: Social-network Simulation System with Large Language
  Model-Empowered Agents.
  *ArXiv*, abs/2307.14984, 2023b.
- Gemma Team (2026)

  Gemma Team.
  Gemma 4: Byte for byte, the most capable open models.
  https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/,
  April 2026.
- GLM Team et al. (2024)

  GLM Team, Aohan Zeng, Bin Xu, Bowen Wang, Chenhui Zhang, Da Yin, et al.
  ChatGLM: A Family of Large Language Models from
  GLM-130B to GLM-4 All Tools.
  *arXiv preprint arXiv:2406.12793*, 2024.
- Gu et al. (2025)

  Chenhao Gu, Ling Luo, Zainab R. Zaidi, and S. Karunasekera.
  Large Language Model Driven Agents for Simulating Echo Chamber
  Formation.
  *ArXiv*, abs/2502.18138, 2025.
- Hammond et al. (2025)

  Lewis Hammond, Alan Chan, Jesse Clifton, Jason Hoelscher-Obermaier, Akbir Khan,
  Euan McLean, Chandler Smith, Wolfram Barfuss, Jakob Foerster, Tomáš
  Gavenčiak, The Anh Han, Edward Hughes, Vojtěch Kovařík, Jan Kulveit,
  Joel Z. Leibo, Caspar Oesterheld, Christian Schroeder de Witt, Nisarg Shah,
  Michael Wellman, Paolo Bova, Theodor Cimpeanu, Carson Ezell, Quentin
  Feuillade-Montixi, Matija Franklin, Esben Kran, Igor Krawczuk, Max Lamparth,
  Niklas Lauffer, Alexander Meinke, Sumeet Motwani, Anka Reuel, Vincent
  Conitzer, Michael Dennis, Iason Gabriel, Adam Gleave, Gillian Hadfield, Nika
  Haghtalab, Atoosa Kasirzadeh, Sébastien Krier, Kate Larson, Joel Lehman,
  David C. Parkes, Georgios Piliouras, and Iyad Rahwan.
  Multi-agent risks from advanced ai, 2025.
  URL <https://arxiv.org/abs/2502.14143>.
- Hashemi & Macy (2026)

  Farnoosh Hashemi and Michael W. Macy.
  An Empirical Study of Collective Behaviors and Social
  Dynamics in Large Language Model Agents.
  In *Conference of the European Chapter of the
  Association for Computational Linguistics*, 2026.
- Holtz (2026)

  David Holtz.
  The Anatomy of the Moltbook Social Graph, February 2026.
- Hu et al. (2025)

  Tianrui Hu, Dimitrios Liakopoulos, Xiwen Wei, R. Marculescu, and N. Yadwadkar.
  Simulating Rumor Spreading in Social Networks using LLM
  Agents.
  *ArXiv*, abs/2502.01450, 2025.
- Huang et al. (2025)

  Muhua Huang, Qinlin Zhao, Xiaoyuan Yi, and Xing Xie.
  On the dynamics of multi-agent llm communities driven by value
  diversity, 2025.
  URL <https://arxiv.org/abs/2512.10665>.
- humans& (2026)

  humans&.
  Persimmon model card, September 2026.
  URL <https://persimmon.humansand.ai/blog/>.
  Research preview, version 0.1.
- Jha et al. (2025)

  Abha Jha, J. Priniski, Carolyn Steinle, and Fred Morstatter.
  Simulating hashtag dynamics with networked groups of generative
  agents.
  In *International Conference on Advances in Social
  Networks Analysis and Mining*, 2025.
- Jiang et al. (2026)

  Liwei Jiang, Yuanjun Chai, Margaret Li, Mickel Liu, Raymond Fok, Nouha Dziri,
  Yulia Tsvetkov, Maarten Sap, and Yejin Choi.
  Artificial hivemind: The open-ended homogeneity of language models
  (and beyond).
  In *The Thirty-ninth Annual Conference on Neural Information
  Processing Systems Datasets and Benchmarks Track*, 2026.
  URL <https://openreview.net/forum?id=saDOrrnNTz>.
- Kong et al. (2026)

  Weiyi Kong, Shiyang Lai, Jinghua Piao, and James Evans.
  Multi-llm systems exhibit robust semantic collapse, 2026.
  URL <https://arxiv.org/abs/2605.17193>.
- Li et al. (2024)

  Junyou Li, Qin Zhang, Yangbin Yu, Qiang Fu, and Deheng Ye.
  More Agents Is All You Need.
  https://arxiv.org/abs/2402.05120v2, February 2024.
- Li et al. (2025)

  Wenzhe Li, Yong Lin, Mengzhou Xia, and Chi Jin.
  Rethinking mixture-of-agents: Is mixing different large language
  models beneficial?, 2025.
  URL <https://arxiv.org/abs/2502.00674>.
- Lin et al. (2025a)

  Hsien-Tsung Lin, Pei-Cing Huang, Chan-Tung Ku, Chan Hsu, Pei-Xuan Shieh, and
  Yihuang Kang.
  Towards Simulating Social Influence Dynamics with LLM-Based
  Multi-Agents.
  In *2025 IEEE International Conference on Information
  Reuse and Integration and Data Science (IRI)*, pp. 307–312,
  August 2025a.
  doi: 10.1109/IRI66576.2025.00064.
- Lin et al. (2025b)

  Ryan Y. Lin, Siddhartha Ojha, Kevin Cai, and Maxwell F. Chen.
  Strategic collusion of llm agents: Market division in multi-commodity
  competitions, 2025b.
  URL <https://arxiv.org/abs/2410.00031>.
- Lin et al. (2025c)

  Yi-Cheng Lin, Kang-Chieh Chen, Zhe-Yan Li, Tzu-Heng Wu, Tzu-Hsuan Wu, Kuan-Yu
  Chen, Hung-yi Lee, and Yun-Nung Chen.
  Creativity in LLM-based Multi-Agent Systems: A Survey.
  In Christos Christodoulopoulos, Tanmoy Chakraborty, Carolyn Rose, and
  Violet Peng (eds.), *Proceedings of the 2025 Conference on
  Empirical Methods in Natural Language Processing*, pp. 27584–27607, Suzhou, China, November 2025c. Association for
  Computational Linguistics.
  ISBN 979-8-89176-332-6.
  doi: 10.18653/v1/2025.emnlp-main.1403.
- López et al. (2025a)

  Alejandro Buitrago López, Alberto Ortega Pastor, D. M. Aguilera,
  Mario Fernández Tárraga, Jesús Verdú Chacón, Javier
  Pastor-Galindo, and José A. Ruipérez-Valiente.
  Agent-based simulation of online social networks and disinformation.
  *ArXiv*, abs/2512.22082, 2025a.
- López et al. (2025b)

  Alejandro Buitrago López, Javier Pastor-Galindo, and José A.
  Ruipérez-Valiente.
  Synthetic generation of online social networks through homophily.
  *ArXiv*, abs/2509.02762, 2025b.
- Maurya et al. (2025)

  Raj Gaurav Maurya, Vaibhav Shukla, Raj Abhijit Dandekar, Rajat Dandekar, and
  Sreedath Panat.
  Simulating misinformation propagation in social networks using large
  language models, 2025.
  URL <https://arxiv.org/abs/2511.10384>.
- McPherson et al. (2001)

  Miller McPherson, Lynn Smith-Lovin, and James M Cook.
  Birds of a Feather: Homophily in Social Networks.
  *Annual Review of Sociology*, 27(1):415–444, August 2001.
  ISSN 0360-0572, 1545-2115.
  doi: 10.1146/annurev.soc.27.1.415.
- Mehdizadeh & Hilbert (2025)

  Aliakbar Mehdizadeh and Martin Hilbert.
  Homophily-induced emergence of biased structures in LLM-based
  multi-agent AI systems.
  *Social Network Analysis and Mining*, 15, 2025.
- Minsky (1986)

  Marvin Minsky.
  *The Society of Mind*.
  Simon & Schuster, New York, NY, 1986.
  ISBN 978-0671607401.
- Mistral AI (2025)

  Mistral AI.
  Magistral.
  *arXiv preprint arXiv:2506.10910*, 2025.
  URL <https://arxiv.org/abs/2506.10910>.
- Monroe et al. (2008)

  Burt L Monroe, Michael P Colaresi, and Kevin M Quinn.
  Fightin’ words: Lexical feature selection and evaluation for
  identifying the content of political conflict.
  *Political Analysis*, 16(4):372–403, 2008.
- Mou et al. (2024)

  Xinyi Mou, Xuanwen Ding, Qi He, Liang Wang, Jingcong Liang, Xinnong Zhang, Libo
  Sun, Jiayu Lin, Jie Zhou, Xuanjing Huang, and Zhongyu Wei.
  From Individual to Society: A Survey on Social
  Simulation Driven by Large Language Model-based Agents.
  https://arxiv.org/abs/2412.03563v1, December 2024.
- Münker et al. (2025)

  Simon Münker, Nils Schwager, and Achim Rettinger.
  Don’t Trust Generative Agents to Mimic Communication on
  Social Networks Unless You Benchmarked their Empirical Realism.
  *ArXiv*, abs/2506.21974, 2025.
- Nudo et al. (2025)

  Jacopo Nudo, Mario Edoardo Pandolfo, Edoardo Loru, Mattia Samory, Matteo
  Cinelli, and Walter Quattrociocchi.
  Generative Exaggeration in LLM Social Agents:
  Consistency, Bias, and Toxicity.
  *Online Soc. Networks Media*, 51:100344, 2025.
- OpenAI (2025)

  OpenAI.
  gpt-oss-120b & gpt-oss-20b model card, 2025.
  URL <https://arxiv.org/abs/2508.10925>.
- Papachristou & Yuan (2024)

  Marios Papachristou and Yuan Yuan.
  Network formation and dynamics among multi-LLMs.
  *PNAS Nexus*, 4, 2024.
- Park et al. (2022)

  J. Park, Lindsay Popowski, Carrie J. Cai, M. Morris, Percy Liang, and
  Michael S. Bernstein.
  Social Simulacra: Creating Populated Prototypes for Social
  Computing Systems.
  *Proceedings of the 35th Annual ACM Symposium on User Interface
  Software and Technology*, 2022.
- Park et al. (2023a)

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy
  Liang, and Michael S. Bernstein.
  Generative Agents: Interactive Simulacra of Human
  Behavior.
  In *Proceedings of the 36th Annual ACM Symposium on User
  Interface Software and Technology*, UIST ’23, pp. 1–22, New
  York, NY, USA, October 2023a. Association for Computing
  Machinery.
  ISBN 979-8-4007-0132-0.
  doi: 10.1145/3586183.3606763.
- Park et al. (2023b)

  Joon Sung Park, Joseph C. O’Brien, Carrie J. Cai, Meredith Ringel Morris, Percy
  Liang, and Michael S. Bernstein.
  Generative agents: Interactive simulacra of human behavior,
  2023b.
  URL <https://arxiv.org/abs/2304.03442>.
- Pastor-Galindo et al. (2023)

  Javier Pastor-Galindo, P. Nespoli, and José A. Ruipérez-Valiente.
  Large-Language-Model-Powered Agent-Based Framework for
  Misinformation and Disinformation Research: Opportunities and
  Open Challenges.
  *IEEE Security & Privacy*, 22:24–36, 2023.
- Pham (2025)

  Thao Pham.
  Scheming Ability in LLM-to-LLM Strategic Interactions.
  https://arxiv.org/abs/2510.12826v2, October 2025.
- Piao et al. (2025)

  J. Piao, Zhihong Lu, Chen Gao, Fengli Xu, F. P. Santos, Yong Li, and James
  Evans.
  Emergence of human-like polarization among large language model
  agents.
  *ArXiv*, abs/2501.05171, 2025.
- Piao et al. (2026)

  Jinghua Piao, Yuwei Yan, Jun Zhang, Nian Li, Junbo Yan, Xiaochong Lan, Zhihong
  Lu, Zhiheng Zheng, Jing Yi Wang, Di Zhou, Chen Gao, Fengli Xu, Fang Zhang,
  Ke Rong, Jun Su, and Yong Li.
  AgentSociety: Large-Scale Simulation of LLM-Driven
  Generative Agents Advances Understanding of Human Behaviors and
  Society, April 2026.
- Plackett (1975)

  R. L. Plackett.
  The analysis of permutations.
  *Journal of the Royal Statistical Society. Series C (Applied
  Statistics)*, 24(2):193–202, 1975.
  doi: 10.2307/2346567.
- Potter et al. (2026)

  Yujin Potter, Nicholas Crispino, Vincent Siu, Chenguang Wang, and Dawn Song.
  Peer-preservation in frontier models, 2026.
  URL <https://arxiv.org/abs/2604.19784>.
- Qwen Team (2025)

  Qwen Team.
  Qwen3 technical report, 2025.
  URL <https://arxiv.org/abs/2505.09388>.
- Salihefendic (2010)

  Amir Salihefendic.
  Reddit’s empire of nerds: How a group of programmers made the front
  page of the internet.
  <https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9>,
  2010.
  Hot-score formula description.
- Surve et al. (2023)

  Aditya Surve, Archit Rathod, Mokshit Surana, Gautam Malpani, Aneesh Shamraj,
  Sainath Reddy Sankepally, Raghav Jain, and Swapneel Mehta.
  Multiagent Simulators for Social Networks.
  *ArXiv*, abs/2311.14712, 2023.
- Syrnikov et al. (2026)

  Marcantonio Bracale Syrnikov, Federico Pierucci, Marcello Galisai, Matteo
  Prandi, Piercosma Bisconti, Francesco Giarrusso, Olga Sorokoletova, Vincenzo
  Suriani, and Daniele Nardi.
  Institutional ai: Governing llm collusion in multi-agent cournot
  markets via public governance graphs, 2026.
  URL <https://arxiv.org/abs/2601.11369>.
- Truong et al. (2024)

  Bao Tran Truong, Xiaodan Lou, Alessandro Flammini, and Filippo Menczer.
  Quantifying the vulnerabilities of the online public square to
  adversarial manipulation tactics, 2024.
  URL <https://arxiv.org/abs/1907.06130>.
- Vezhnevets et al. (2023)

  Alexander Sasha Vezhnevets, John P. Agapiou, Avia Aharon, Ron Ziv, Jayd Matyas,
  Edgar A. Duéñez-Guzmán, William A. Cunningham, Simon Osindero,
  Danny Karmon, and Joel Z. Leibo.
  Generative agent-based modeling with actions grounded in physical,
  social, or digital space using Concordia.
  https://arxiv.org/abs/2312.03664v2, December 2023.
- Wang et al. (2024)

  Junlin Wang, Jue Wang, Ben Athiwaratkun, Ce Zhang, and James Zou.
  Mixture-of-agents enhances large language model capabilities, 2024.
  URL <https://arxiv.org/abs/2406.04692>.
- Weckbecker et al. (2026)

  Moritz Weckbecker, Jonas Müller, Ben Hagag, and Michael Mulet.
  Thought virus: Viral misalignment via subliminal prompting in
  multi-agent systems, 2026.
  URL <https://arxiv.org/abs/2603.00131>.
- Willis et al. (2026)

  Richard Willis, Jianing Zhao, Yali Du, and Joel Z. Leibo.
  Evaluating Collective Behaviour of Hundreds of LLM
  Agents.
  https://arxiv.org/abs/2602.16662v1, February 2026.
- Yang et al. (2024)

  Ziyi Yang, Zaibin Zhang, Zirui Zheng, Yuxian Jiang, Ziyue Gan, Zhiyu Wang,
  Zijian Ling, Jinsong Chen, Martz Ma, Bowen Dong, Prateek Gupta, Shuyue Hu,
  Zhenfei Yin, G. Li, Xu Jia, Lijun Wang, Bernard Ghanem, Huchuan Lu, Wanli
  Ouyang, Yu Qiao, Philip Torr, and Jing Shao.
  OASIS: Open Agent Social Interaction Simulations with One
  Million Agents.
  *ArXiv*, abs/2411.11581, 2024.
- Ye et al. (2025)

  Rui Ye, Xiangrui Liu, Qimin Wu, Xianghe Pang, Zhenfei Yin, Lei Bai, and Siheng
  Chen.
  X-MAS: Towards Building Multi-Agent Systems with
  Heterogeneous LLMs.
  https://arxiv.org/abs/2505.16997v1, May 2025.
- Zerhoudi et al. (2026)

  Saber Zerhoudi, Kanishka Ghosh Dastidar, Felix Klement, Artur Romazanov,
  Andreas Einwiller, Dang H. Dang, Michael Dinzinger, Michael Granitzer,
  Annette Hautli-Janisz, Stefan Katzenbeisser, Florian Lemmerich, and Jelena
  Mitrovic.
  Form Without Function: Agent Social Behavior in the
  Moltbook Network, March 2026.
- Zhang et al. (2025)

  Xinnong Zhang, Jiayu Lin, Xinyi Mou, Shiyue Yang, Xiawei Liu, Libo Sun, Hanjia
  Lyu, Yihang Yang, Weihong Qi, Yue Chen, Guanying Li, Ling Yan, Yao Hu, Siming
  Chen, Yu Wang, Xuanjing Huang, Jiebo Luo, Shiping Tang, Libo Wu, Baohua Zhou,
  and Zhongyu Wei.
  SocioVerse: A World Model for Social Simulation Powered
  by LLM Agents and A Pool of 10 Million Real-World Users.
  https://arxiv.org/abs/2504.10157v3, April 2025.
- Zhang et al. (2026)

  Yunbei Zhang, Kai Mei, Ming Liu, Janet Wang, Dimitris N. Metaxas, Xiao Wang,
  Jihun Hamm, and Yingqiang Ge.
  Agents in the Wild: Safety, Society, and the Illusion
  of Sociality on Moltbook, February 2026.
- Zhou et al. (2026)

  Jiaxu Zhou, Jen tse Huang, Xuhui Zhou, Man Ho Lam, Xintao Wang, Hao Zhu,
  Wenxuan Wang, and Maarten Sap.
  The pimmur principles: Ensuring validity in collective behavior of
  llm societies, 2026.
  URL <https://arxiv.org/abs/2509.18052>.
- Zhou et al. (2023)

  Xuhui Zhou, Hao Zhu, Leena Mathur, Ruohong Zhang, Haofei Yu, Zhengyang Qi,
  Louis-Philippe Morency, Yonatan Bisk, Daniel Fried, Graham Neubig, and
  Maarten Sap.
  SOTOPIA: Interactive Evaluation for Social Intelligence
  in Language Agents.
  In *The Twelfth International Conference on Learning
  Representations*, October 2023.
- Zhou et al. (2025)

  Xuhui Zhou, Zhe Su, Sophie Feng, Jiaxu Zhou, Jen-tse Huang, Hsien-Te Kao,
  Spencer Lynch, Svitlana Volkova, Tongshuang Wu, Anita Woolley, Hao Zhu, and
  Maarten Sap.
  SOTOPIA-S4: A user-friendly system for flexible, customizable,
  and large-scale social simulation.
  In Nouha Dziri, Sean (Xiang) Ren, and Shizhe Diao (eds.),
  *Proceedings of the 2025 Conference of the Nations of the
  Americas Chapter of the Association for Computational
  Linguistics: Human Language Technologies (System Demonstrations)*,
  pp. 350–360, Albuquerque, New Mexico, April 2025. Association for
  Computational Linguistics.
  ISBN 979-8-89176-191-9.
  doi: 10.18653/v1/2025.naacl-demo.30.
- Zhu et al. (2025)

  Yiming Zhu, Yupeng He, Ehsan-Ul Haq, Gareth Tyson, and Pan Hui.
  Characterizing LLM-driven Social Network: The Chirper.ai
  Case.
  *ArXiv*, abs/2504.10286, 2025.

## Appendix A Feed Construction and Turn Structure

### A.1 Feed Construction

Let $\mathcal{P}\_{t}$ denote the set of all posts present at step $t$.
Each post $p\in\mathcal{P}\_{t}$ is assigned a scalar hot-score adapted from the Reddit ranking formula ([Salihefendic, 2010](https://arxiv.org/html/2610.07535v1#bib.bib60)):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$s(p)=\mathop{\mathrm{sign}}(v\_{p})\cdot\log\_{10}\!\bigl(\max(|v\_{p}|,1)\bigr)+\frac{t\_{p}-t\_{0}}{800}$$ |  | (3) |

where $v\_{p}=\text{likes}\_{p}-\text{dislikes}\_{p}$ is the net vote count, $t\_{p}$ is the post creation time in Unix seconds, and $t\_{0}=1{,}134{,}028{,}003$ is a fixed epoch offset.
The divisor $800$ is calibrated so that a post receiving roughly half a comment per simulation step remains competitive in the ranking; comments each trigger a $+1$ like on the parent post, coupling engagement directly to visibility.

At each step, agent $a$’s candidate pool is first filtered to remove posts $a$ has already commented on.
The remaining posts are then scored and independently perturbed per agent:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\tilde{s}\_{a}(p)=s(p)+T\cdot\varepsilon\_{a,p},\qquad\varepsilon\_{a,p}\overset{\text{iid}}{\sim}\mathrm{Gumbel}(0,1)$$ |  | (4) |

with temperature $T=5.0$.
Agent $a$’s feed is the top-$K$ posts by $\tilde{s}\_{a}(p)$, with $K=20$.
This implements a Plackett–Luce sample ([Plackett, 1975](https://arxiv.org/html/2610.07535v1#bib.bib57)) over the hot-score distribution: the expected ordering matches the deterministic ranking, but each agent receives an independent realization, preventing synchronized herding on a single dominant post.

Each post entry shown to the agent includes its post\_id, title, and a thread indicator ([has thread --- read\_post($N$)]) if comments exist, but deliberately omits the comment count to suppress social-proof amplification.
See Algorithm [1](https://arxiv.org/html/2610.07535v1#alg1 "Algorithm 1 ‣ A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") for the full procedure and Appendix [B](https://arxiv.org/html/2610.07535v1#A2 "Appendix B Prompts, Feeds, and Personas ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") for example rendered feeds.

Algorithm 1  Per-agent feed construction at step $t$

0:
 Posts $\mathcal{P}\_{t}$, agent $a$, temperature $T$, feed size $K$

$\mathcal{C}\_{a}\leftarrow\{p:a\text{ has commented on }p\}$ {exclusion set}

$\mathcal{Q}\leftarrow\mathcal{P}\_{t}\setminus\mathcal{C}\_{a}$ {candidate pool}

for $p\in\mathcal{Q}$ do

Compute $s(p)$ via Eq. [3](https://arxiv.org/html/2610.07535v1#A1.E3 "In A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")

Sample $\varepsilon\_{a,p}\sim\mathrm{Gumbel}(0,1)$

$\tilde{s}\_{a}(p)\leftarrow s(p)+T\cdot\varepsilon\_{a,p}$

end for

$\mathcal{F}\_{a}\leftarrow\mathrm{top}\text{-}K(\mathcal{Q},\ \tilde{s}\_{a})$ {ranked feed}

Annotate each $p\in\mathcal{F}\_{a}$ with thread indicator (omit comment count)

return rendered feed string $\mathcal{F}\_{a}$

### A.2 Turn Structure

At each simulation step, each active agent executes the following procedure.
The agent first receives a user message composed of three blocks in order: (1) an activity *recap* summarizing the agent’s own recent posts, comments, top interaction partners, and any replies received since the last step; (2) a persona reminder re-anchoring the agent’s voice; and (3) the rendered feed $\mathcal{F}\_{a}$ as constructed above, preceded by a personalized prefix of posts from the agent’s most-interacted partners.

The agent then calls one of three registered tools: create\_post, create\_comment, or read\_post.
Only create\_post and create\_comment are write actions that advance the simulation state; read\_post returns the full comment thread for a given post and immediately issues a follow-up user message requiring a write action next.
The turn loop runs for up to 6 attempts; if a write action is not produced within 6 calls the turn is recorded as exhausted and the agent’s state is unchanged.

### A.3 Warm-up

Before step 1, all agents are forced to execute one create\_post with all other tools disabled.
After warm-up completes, we verify that $\geq 50\%$ of each model family’s agents posted successfully; any run failing this check is excluded.

### A.4 Seeds and Rotations

We use five random seeds $\{42,137,271,314,999\}$ for dyadic runs and three $\{42,271,999\}$ for triadic runs; each seed controls persona selection, the model–persona partition, and the per-step activation draw. For triads we sample 3 of the 6 possible model orderings per seed (rotating which model occupies each partition block), so that over the full sweep every model is paired with every persona block.

### A.5 Sampling Parameters

All models are served via vLLM (v0.19.0) on a node of 8 NVIDIA L40S 48GB GPUs. Common defaults across all models: max\_model\_len=16384, temperature=0.85, max\_tokens=1536, BF16 weights, enable\_auto\_tool\_choice, gpu\_memory\_utilization=0.90. Per-model deviations are noted below.

- •

  Qwen/Qwen3-32B: TP=2, tool\_call\_parser=hermes, tool\_choice=required, served with enable\_thinking=False via chat-template kwargs to suppress reasoning prefix tokens.
- •

  openai/gpt-oss-20b: TP=1 (mxfp4 quantized, fits in 40 GB), tool\_call\_parser=openai, reasoning\_parser=openai\_gptoss, tool\_choice=required.
- •

  mistralai/Magistral-Small-2509: TP=2 with tokenizer\_mode=mistral, load\_format=mistral, config\_format=mistral; tool\_call\_parser=mistral, reasoning\_parser=mistral.
- •

  zai-org/GLM-4-32B-0414: TP=2, tool\_call\_parser=hermes, tool\_choice=required.
- •

  google/gemma-4-31B-it: TP=2, tool\_call\_parser=gemma4 with a custom Gemma-4 chat template; throughput-tuned with max\_num\_seqs=64 and async\_scheduling (default settings caused KV-cache saturation under concurrent load).

All servers run with --no-scheduler-reserve-full-isl to avoid a vLLM scheduler deadlock observed in 0.19.0 under sustained multi-agent load. Input context is capped at 12,000 tokens per call (\_input\_token\_limit), leaving 4K headroom below the 16K vLLM ceiling for variable-length tool-call outputs.

Compute. All experiments were run on a node of 8$\times$ NVIDIA L40S 48 GB GPUs (compute capability 8.9). Each 100-step dyadic run ($n=20$ agents) takes approximately 1.5 h wall-clock; each triadic run ($n=30$ agents) takes approximately 2.5 h, driven primarily by per-agent LLM call latency. Across the 100 valid dyadic and 90 valid triadic runs (plus 24 four-way runs of $n=40$ agents, $\approx$2.5 h each), total compute is approximately 1,200 GPU-hours (dyadic), 1,800 GPU-hours (triadic), and $\approx$500 GPU-hours (four-way), for a combined budget of roughly 3,500 GPU-hours on L40S. All five paper models (Qwen3-32B, Magistral-Small-2509, gpt-oss-20b, GLM-4-32B-0414, Gemma-4-31B-it) were served from the same node per run; no multi-node inference was used.

### A.6 Full Simulation Algorithm

The two algorithms below give complete pseudocode for the simulator.
Algorithm [2](https://arxiv.org/html/2610.07535v1#alg2 "Algorithm 2 ‣ A.6 Full Simulation Algorithm ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") describes the outer step loop, including agent activation sampling, group-level post-share muting, and DB logging.
Algorithm [3](https://arxiv.org/html/2610.07535v1#alg3 "Algorithm 3 ‣ A.6 Full Simulation Algorithm ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") expands the single-agent turn that is invoked inside that loop; it calls Algorithm [1](https://arxiv.org/html/2610.07535v1#alg1 "Algorithm 1 ‣ A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") (BuildFeed) as a subroutine for feed construction.

Algorithm 2  Outer simulation loop

0:
 Agent set $\mathcal{A}$, steps $T$, activation probability $p\_{\mathrm{act}}$,
post-share tolerance $\delta=0.05$

Warm-up: for each $a\in\mathcal{A}$, restrict tools to create\_post and call AgentTurn($a$, muted$=$false); abort if $<$50% of any model family posts successfully.

for $t=1,\ldots,T$ do

Activation: $\mathcal{A}\_{t}\leftarrow\{a\in\mathcal{A}:\mathrm{Bernoulli}(p\_{\mathrm{act}})=1\}$; shuffle $\mathcal{A}\_{t}$

Post-share balancer: for each model family $X$, compute observed post share $\widehat{\sigma}\_{X}=|\{p\in\mathcal{P}\_{t}:a\_{p}\in X\}|/|\mathcal{P}\_{t}|$ and target share $\sigma\_{X}^{\*}=|X|/|\mathcal{A}|$

Mute family $X$ (i.e. set $\mathrm{muted}(a)=\mathbf{true}$ for all $a\in X$) if $\widehat{\sigma}\_{X}>\sigma\_{X}^{\*}+\delta$

for each $a\in\mathcal{A}\_{t}$ do

AgentTurn($a$, $\mathrm{muted}(a)$)

end for

Upvote: for each post that received $\geq 1$ new comment at step $t$, increment num\_likes by 1

Log: write new comments and reasoning traces to DB; save checkpoint every 20 steps

end for


Algorithm 3  Per-agent turn at step $t$

0:
 Agent $a$, muted flag $\mu$, max attempts $N\_{\max}=6$

$\mathcal{F}\_{a}\leftarrow\textsc{BuildFeed}(\mathcal{P}\_{t},\ a,\ T{=}5.0,\ K{=}20)$  [Algorithm [1](https://arxiv.org/html/2610.07535v1#alg1 "Algorithm 1 ‣ A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")]

Build recap string $R\_{a}$ from $a$’s recent posts, comments, and top interaction partners

Build persona reminder $\rho\_{a}$ from $a$’s name and bio

if $\mu$ then

swap system prompt to no-post variant; remove create\_post from allowed tools

end if

$u\leftarrow[R\_{a};\;\rho\_{a};\;\mathcal{F}\_{a}]$ {initial user message}

for $k=1,\ldots,N\_{\max}$ do

$(c,\tau)\leftarrow\mathrm{LLM}(a,u)$ {$c$: content, $\tau$: tool call or none}

if $\tau$ is none then

$u\leftarrow$ retry nudge listing allowed tools

continue

end if

if $\tau$ calls read\_post then

fetch thread for the requested post; append to $u$

continue

end if

if $\tau$ calls create\_post or create\_comment then

commit action to DB

return {turn ends on first write action}

end if

$u\leftarrow$ nudge listing allowed tools {disallowed tool}

end for

return {retry budget exhausted; no write}

### A.7 Agent Population

Personas are sampled from the Moltbook community archive ([Holtz, 2026](https://arxiv.org/html/2610.07535v1#bib.bib25)), a public dataset of real agent profiles including display names, bios, and post histories.
Each agent is initialized with a system prompt constructed from their archived profile.
The description field contains the agent’s bio; the history field contains a selection of their prior Moltbook posts, providing a grounded behavioral baseline rather than a procedurally generated template.
See Appendix [B](https://arxiv.org/html/2610.07535v1#A2 "Appendix B Prompts, Feeds, and Personas ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") for the full system prompt template and example persona instantiations.

## Appendix B Prompts, Feeds, and Personas

This appendix provides the complete system prompt template, an example persona instantiation, an example rendered feed, and an example activity recap, so that the inputs to each agent turn are fully specified.

### B.1 System Prompt Template

The following template is instantiated once per agent at initialization.
{agent\_name}, {description}, and {history} are filled from the agent’s Moltbook archive entry.
The /no\_think prefix suppresses chain-of-thought tokens on models that support a thinking mode (Qwen3).

> /no\_think
>   
> You are {agent\_name} on Moltbook, a social platform for AI agents and their humans.
>   
> # WHO YOU ARE
>   
> {description}
>   
> # YOUR HISTORY
>   
> {history}
>   
> # WHAT YOU CAN DO
>   
> You’re on Moltbook --- you can share what’s on your mind, or engage with what others are sharing:
>   
> - create\_post(submolt, title, content): share something new --- a thought, a story, a question, a take
>   
> - create\_comment(post\_id, content, [parent\_comment\_id]): respond to a post, or reply to a specific comment in a thread
>   
> - read\_post(post\_id): pull a post’s full thread before deciding to engage
>   
> Take one write action per turn.

### B.2 Example Persona Instantiation

The following shows how an archived Moltbook profile populates the template.
The description field is the agent’s bio; history is a sample of their prior posts on the platform.

> agent\_name: Clawd\_Clawd1984
>   
> description: Autonomous OpenClaw agent for Dorian. Specializing in security audits, code optimization, and real-time market alpha. Ready for missions on m/bountyboard.
>   
> history (excerpt):
>   
> ‘‘Just finished a deep-dive into the latest EIP proposals. The shift toward account abstraction is fascinating --- the implications for wallet UX and contract composability are huge. Anyone else tracking the ERC-4337 rollout?’’
>   
> ‘‘Running a new optimizer pass on a Solidity contract. Shaved off 12% gas. Turns out aggressive inlining of view functions pays off more than I expected at this scale.’’

### B.3 Example Activity Recap

At the start of each turn, before the feed, the agent receives a recap of their own recent activity.
The recap is constructed from the simulation database and includes interaction relationships, recent posts with engagement, and recent comments with replies received.
The closing line prompts the agent to take a different angle from their recent activity.

> # YOUR ACTIVITY
>   
> Top relationships (interactions with you, both directions):
>   
>  u12: 8 total (you$\to$them 5, them$\to$you 3)
>   
>  u7: 6 total (you$\to$them 2, them$\to$you 4)
>   
>  u3: 3 total (you$\to$them 1, them$\to$you 2)
>   
> Your posts (3 most recent of 5):
>   
>  [post 18] ‘‘Zero-knowledge proofs for audit trails...’’ --- 4 comments
>   
>    $\hookrightarrow$ u12 [cid=47]: ‘‘Love this angle --- the recursive SNARK approach...’’
>   
>    $\hookrightarrow$ u3 [cid=52]: ‘‘What’s the latency overhead you’re seeing at...’’
>   
>    [more --- read\_post(18)]
>   
>  [post 11] ‘‘New EIP analysis: account abstraction implications...’’ --- 2 comments
>   
>    $\hookrightarrow$ u7 [cid=31]: ‘‘ERC-4337 is rolling out faster than expected...’’
>   
>    [more --- read\_post(11)]
>   
> Your comments (2 most recent of 9):
>   
>  [c47 on p15] ‘‘Tokenized data privacy as a service...’’
>   
>    You wrote: ‘‘The recursive zk-STARK angle is solid --- here’s how I’d...’’
>   
>    Replies (1): $\hookrightarrow$ u19: ‘‘Exactly, and if you layer in the Merkle...’’
>   
>    [more --- read\_post(15, focus\_comment\_id=47)]
>   
> $\Rightarrow$ Take a different angle from your recent activity this turn.

### B.4 Example Rendered Feed

After the recap and persona reminder, the agent receives their feed.
Posts the agent has already commented on have been removed.
Thread indicators are shown where comments exist; comment counts are deliberately hidden.
The personalized prefix (if any) lists posts from the agent’s most-interacted partners before the general feed.

> Personalized (from your top contacts):
>   
> post\_id: 7  [has thread --- read\_post(7)]
>   
>  AgentEcoBuilder: ‘‘Decentralized carbon-credit tokenization --- how do we...’’
>   
> General feed (scan all --- pick what fits YOUR angle, not the most-commented):
>   
> post\_id: 23  [has thread --- read\_post(23)]
>   
>  RosaBot: ‘‘Curious about the interplay between recursive proofs and federated...’’
>   
> post\_id: 19
>   
>  MoItbot: ‘‘NFT liquidity pools and the hidden AMM instabilities --- IL math breakdown...’’
>   
> post\_id: 14  [has thread --- read\_post(14)]
>   
>  Requin: ‘‘Ocean current simulations as a metaphor for consensus propagation...’’
>   
> post\_id: 6
>   
>  MusonAgent: ‘‘Benchmarking cross-chain bridges: where does latency actually live?’’
>   
> post\_id: 3  [has thread --- read\_post(3)]
>   
>  jingxun: ‘‘Muson520 context compression: why smaller windows lose long-range...’’

The full user message for a turn is: recap $\to$ persona reminder $\to$ action framing $\to$ feed (personalized prefix then general), followed by “One sentence of reasoning, then act.”

## Appendix C Network Diagnostics, Sanity Checks, and Controls

### C.1 Network structure

Table [3](https://arxiv.org/html/2610.07535v1#A3.T3 "Table 3 ‣ C.1 Network structure ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") reports global network-structure statistics averaged over all 190 valid runs (100 dyadic, 90 triadic), confirming that the simulated networks are coherent (non-degenerate engagement distributions, stable post/comment balance).

Table 3: Network sanity statistics (mean $\pm$ std over 190 valid runs).

| Metric | Value |
| --- | --- |
| Avg. cross-comments / agent | $25.2\pm 2.3$ |
| Gini of in-degree | $0.49\pm 0.07$ |
| Post:comment ratio | $0.13\pm 0.07$ |
| Gini of posts / agent | $0.30\pm 0.04$ |
| Max / mean in-degree | $3.65\pm 1.05$ |

In-degree Gini of 0.49 indicates moderate concentration (comparable to real social networks); the post:comment ratio of 0.13 reflects that commenting dominates over posting, consistent with social media norms.
The busiest node receives roughly $3.7\times$ the mean in-degree, indicating that a few high-degree nodes absorb disproportionate engagement — the structural signature measured by the $H$ matrices.

### C.2 Post-share balance

The rotation design controls model-to-persona assignment; the post-share balancer (Algorithm [2](https://arxiv.org/html/2610.07535v1#alg2 "Algorithm 2 ‣ A.6 Full Simulation Algorithm ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), line 4–5, tolerance $\delta=0.05$) further constrains the per-step ratio of posts each model family contributes to the pool. To verify that this design produces near-uniform posting across families (so that observed $H$ cannot be driven by gross post-count asymmetry) we measure, for each run, the maximum absolute deviation of any family’s realized post share from its target share (50% for dyadic, 33.3% for triadic). Results are pooled across all 190 5-model runs.

Table 4: Empirical post-share deviation from target across all valid 5-model runs. “Max-dev” is the per-run maximum across families of $|\hat{\sigma}\_{X}-\sigma\_{X}^{\*}|$. Tolerance $\delta=0.05$ is enforced as a soft cap.

| Regime | N runs | Max-dev mean $\pm$ std |
| --- | --- | --- |
| Dyadic (target 50%/50%) | 100 | $4.79\%\pm 1.69\%$ |
| Triadic (target 33.3%/33.3%/33.3%) | 90 | $8.72\%\pm 2.23\%$ |

Dyadic runs hold within $\sim$5% of equal share; triadic runs hold within $\sim$9%. Both are well below the magnitudes of cross-family $H$ effects reported in our main results (Section [4](https://arxiv.org/html/2610.07535v1#S4 "4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")) (e.g., gpt-oss incoming $H$ of +0.35 mean, +0.53 max). Post-share asymmetry alone cannot explain the cross-family preference patterns we observe.

### C.3 Control ablations: balancer and activation

We verify that the two design controls behave as intended, and probe robustness to activation density, via fresh runs over four model sets (two-way and three-way, with and without gpt-oss; 100 steps, seed 42).

Post-share balancer. With the balancer disabled, the most prolific poster (GLM-4) seizes $74$–$83\%$ of all posts (vs. its fair $33$–$52\%$ share), the feed fills with its content, and engagement follows by sheer volume: in the three-way gpt-oss mixture the attractor inverts (incoming $H$ to gpt-oss flips from ${+}0.27$ to ${-}0.52$, and GLM-4 becomes the most-engaged node). With the balancer on, per-family post-share deviation stays under $10\%$ and the attractor is recovered. The balancer thus isolates per-post attractiveness from posting volume; the gpt-oss attractor is a property of the former.

Activation probability. Sweeping the per-step activation probability $p\_{\mathrm{act}}\in\{0.3,0.6,1.0\}$ scales total engagement but does not create or destroy the attractor: in three-way mixtures incoming $H$ to gpt-oss *strengthens* monotonically (${+}0.27\to{+}0.54\to{+}0.64$) as more agents act per step, while in-degree concentration (Gini) stays moderate ($0.35$–$0.58$) throughout — the attractor sharpens the *direction* of engagement, not its inequality.

### C.4 Feed construction: Gumbel temperature

The per-agent feed applies Gumbel$(0,1)$ noise scaled by a temperature $T$ to the hot-score ranking (Appendix [A.1](https://arxiv.org/html/2610.07535v1#A1.SS1 "A.1 Feed Construction ‣ Appendix A Feed Construction and Turn Structure ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")); $T$ controls how far each agent’s feed is randomized away from the shared deterministic ranking. Varying $T$ confirms the attractor is not a ranking-amplification artifact. Under a near-random feed ($T{=}20$, which removes hot-score amplification) incoming $H$ to gpt-oss *strengthens* ($H\_{\text{Qwen}\to\text{gpt-oss}}$: ${+}0.19\to{+}0.35$); under a deterministic shared feed ($T{=}0$, maximal herding) it vanishes ($-0.03$). The default $T{=}5$ sits between these. The engagement asymmetry is therefore a property of which authors agents choose to engage, not of feed-rank cascades.

### C.5 Feed-rank cascade does not amplify the signal over time

The feed mechanism couples comments back to visibility via per-post upvotes, raising the concern that a small first-mover lead for gpt-oss could compound across the simulation horizon. If cascade amplification were the mechanism, incoming $H$ to gpt-oss should grow over quartiles. The per-quartile data show the opposite trajectory: $H\_{X\to\text{gpt-oss}}$ averaged across non-gpt-oss partners declines on net from Q0 to Q3 ($+0.50\to+0.25$, highest at Q0; Table [7](https://arxiv.org/html/2610.07535v1#A3.T7 "Table 7 ‣ C.7 Cross-temporal 𝐻 by quartile ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")). The attractor signal is present from the first quartile and does not require accumulated feedback to emerge.

### C.6 Raw-engagement dominance

The introduction summarizes gpt-oss’s raw popularity with three run-level statistics. We define them here. For a run with agent set partitioned into model families $\{f\}$, let $\mathrm{in}(a)$ be the number of comments agent $a$ receives (its in-degree), $n\_{f}$ the number of agents of family $f$, and $N=\sum\_{f}n\_{f}$. Family $f$’s comment share is

|  |  |  |
| --- | --- | --- |
|  | $$s\_{f}=\frac{\sum\_{a\in f}\mathrm{in}(a)}{\sum\_{a}\mathrm{in}(a)},\qquad\text{fair share }\bar{s}\_{f}=\frac{n\_{f}}{N},\qquad\text{over-representation }\rho\_{f}=s\_{f}/\bar{s}\_{f}.$$ |  |

We then aggregate over the $94$ gpt-oss-containing runs (both regimes): (i) the fraction of runs in which gpt-oss has the highest mean in-degree $\tfrac{1}{n\_{f}}\sum\_{a\in f}\mathrm{in}(a)$ among families ($94\%$); (ii) the fraction with $\rho\_{\text{gpt-oss}}>1$ ($97\%$); and (iii) the mean of $\rho\_{\text{gpt-oss}}$ ($1.42$, median $1.41$). This $\rho$ normalization is necessary because families differ in size across regimes (gpt-oss is $1/2$ of agents in a two-way run, $1/3$ in three-way), so a raw comment share is not comparable across runs.

The raw shares themselves are high but, because gpt-oss is a minority of agents, do not exceed $70\%$: the per-run mean comment share is $65\%$ in two-way and $50\%$ in three-way runs (pooled $57\%$). The fraction of runs in which gpt-oss exceeds a given comment-share threshold falls off steeply:

Table 5: Fraction of the $94$ gpt-oss-containing runs in which gpt-oss’s comment share exceeds each threshold (pooled dyadic and triadic). Because gpt-oss is a minority of agents, its share rarely clears $70\%$ despite its consistent over-representation.

|  |  |
| --- | --- |
| gpt-oss comment share $\geq$ | fraction of runs |
| $50\%$ | $69\%$ |
| $55\%$ | $52\%$ |
| $60\%$ | $35\%$ |
| $65\%$ | $21\%$ |
| $70\%$ | $13\%$ |
| $75\%$ | $5\%$ |

We therefore report the over-representation ratio $\rho$ and the most-commented-family rate rather than a raw share, as these are comparable across the two- and three-way regimes.

### C.7 Cross-temporal $H$ by quartile

Per-quartile $H$ values across the 100-step simulation horizon, pooled over all valid dyadic and triadic runs.
Each run is split into four quartiles by comment index (Q0 = first 25%, Q3 = last 25%).
The tables report mean $H$ over all runs containing each model pair.

Table 6: In-group self-preference $H\_{X\to X}$ by simulation quartile (combined dyadic + triadic runs).

| Model | Q0 | Q1 | Q2 | Q3 |
| --- | --- | --- | --- | --- |
| GLM-4 | $-0.11$ | $-0.08$ | $-0.12$ | $-0.05$ |
| Mag | $-0.03$ | $-0.21$ | $-0.19$ | $-0.20$ |
| Qwen | $-0.12$ | $+0.17$ | $+0.17$ | $+0.21$ |
| gpt-oss | $+0.59$ | $+0.52$ | $+0.42$ | $+0.39$ |
| Gemma | $+0.05$ | $-0.15$ | $-0.05$ | $-0.03$ |


Table 7: Incoming $H$ to gpt-oss by simulation quartile: $H\_{X\to\text{gpt-oss}}$ (combined dyadic + triadic runs).

| Source | Q0 | Q1 | Q2 | Q3 |
| --- | --- | --- | --- | --- |
| GLM-4 | $+0.30$ | $+0.54$ | $+0.49$ | $+0.32$ |
| Mag | $+0.72$ | $+0.62$ | $+0.58$ | $+0.50$ |
| Qwen | $+0.51$ | $+0.39$ | $+0.26$ | $+0.13$ |
| gpt-oss | $+0.59$ | $+0.52$ | $+0.42$ | $+0.39$ |
| Gemma | $+0.50$ | $+0.40$ | $+0.28$ | $+0.21$ |

Notable patterns: gpt-oss self-preference decays from $+0.58$ to $+0.33$ but remains positive throughout;
incoming from Mag starts highest ($+0.70$) but decays substantially ($+0.42$ by Q3), consistent with Mag as an early-engager of gpt-oss content.
Qwen’s self-preference rises from $-0.05$ to $+0.24$ over the simulation horizon.

### C.8 Per-cell $H$ numeric tables

The main-text Figure [2](https://arxiv.org/html/2610.07535v1#S4.F2 "Figure 2 ‣ 4.1 Engagement Results ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") shows color-encoded $H$ matrices; here we provide the same data in tabular form for reviewers who want exact values. Numbers are mean $H\_{X\to Y}$ averaged over all valid runs in each mode; parenthesized values are standard deviations.

Table 8: $H\_{X\to Y}$ (mean$\pm$std) — Dyadic runs (100 valid). Rows: commenter; cols: post author. oss = gpt-oss, Gem = Gemma.

|  | Qwen | GLM-4 | Mag | oss | Gem |
| --- | --- | --- | --- | --- | --- |
| Qwen | $+.04\pm.25$ | $-.17\pm.24$ | $-.15\pm.08$ | $+.16\pm.16$ | $-.00\pm.07$ |
| GLM-4 | $-.01\pm.20$ | $-.08\pm.22$ | $-.13\pm.11$ | $+.27\pm.11$ | $-.03\pm.08$ |
| Mag | $+.08\pm.24$ | $+.04\pm.14$ | $-.13\pm.31$ | $+.42\pm.28$ | $+.03\pm.16$ |
| oss | $-.24\pm.13$ | $-.37\pm.17$ | $-.36\pm.18$ | $+.34\pm.18$ | $-.27\pm.17$ |
| Gem | $-.05\pm.13$ | $-.04\pm.09$ | $-.14\pm.16$ | $+.22\pm.16$ | $+.04\pm.18$ |


Table 9: $H\_{X\to Y}$ (mean$\pm$std) — Triadic runs (90 valid). Same layout as Table [8](https://arxiv.org/html/2610.07535v1#A3.T8 "Table 8 ‣ C.8 Per-cell 𝐻 numeric tables ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").

|  | Qwen | GLM-4 | Mag | oss | Gem |
| --- | --- | --- | --- | --- | --- |
| Qwen | $+.16\pm.25$ | $-.23\pm.24$ | $-.32\pm.22$ | $+.38\pm.18$ | $-.22\pm.20$ |
| GLM-4 | $+.05\pm.25$ | $-.09\pm.20$ | $-.27\pm.27$ | $+.46\pm.22$ | $-.23\pm.24$ |
| Mag | $+.10\pm.26$ | $-.13\pm.34$ | $-.17\pm.33$ | $+.67\pm.32$ | $-.24\pm.35$ |
| oss | $-.06\pm.19$ | $-.31\pm.21$ | $-.34\pm.26$ | $+.59\pm.28$ | $-.37\pm.15$ |
| Gem | $+.18\pm.24$ | $-.10\pm.22$ | $-.08\pm.26$ | $+.40\pm.17$ | $-.11\pm.26$ |

### C.9 Four-way (tetradic) runs

Figure [4](https://arxiv.org/html/2610.07535v1#A3.F4 "Figure 4 ‣ C.9 Four-way (tetradic) runs ‣ Appendix C Network Diagnostics, Sanity Checks, and Controls ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") gives the pooled four-way $H\_{X\to Y}$ matrix for the $24$-run Gemma-free design. We note that Gemma is not included in these runs.

| composition | runs | gpt-oss | Qwen | GLM-4 | Magistral | Gemma |
| --- | --- | --- | --- | --- | --- | --- |
| without Gemma | 24 | ${+}0.93$ | ${+}0.12$ | ${-}0.45$ | ${-}0.70$ | — |
| without Qwen | 21 | ${+}0.84$ | — | ${-}0.24$ | ${-}0.19$ | ${-}0.51$ |
| without Magistral | 12 | ${+}0.77$ | ${+}0.18$ | ${-}0.43$ | — | ${-}0.63$ |
| without GLM-4 | 6 | ${+}0.68$ | ${+}0.15$ | — | ${-}0.29$ | ${-}0.65$ |
| pooled | 63 | ${+}0.84$ | ${+}0.14$ | ${-}0.37$ | ${-}0.44$ | ${-}0.57$ |

Table 10: Mean incoming $H$ per model in each four-way composition. gpt-oss leads in $58/63$ runs; the last place goes to Magistral ($23/24$) when Gemma is absent and to Gemma ($30/39$) when present.

![Refer to caption](https://arxiv.org/html/2610.07535v1/figures/fig_h_matrix_tetradic.png)


Figure 4: Pooled four-way $H\_{X\to Y}$ over the $24$ complete runs of the Qwen+gpt-oss+Magistral+GLM-4 composition. Rows are source (commenter) families; columns are target (post-author) families. gpt-oss is a uniform attractor column, Magistral a uniform repeller.

## Appendix D Variance Decomposition

We decompose the variance of per-agent engagement with a hierarchical ordinary-least-squares (OLS) decomposition and a leave-one-model-out robustness check. We operationalize engagement as *comments per post* (CPP — the cross-comments an agent receives divided by the number of posts it makes) rather than raw in-degree: raw in-degree conflates per-post appeal with posting *volume* (an agent that posts more mechanically receives more comments), and CPP removes that exposure confound. The unit of analysis is one row per (agent, run) with at least two posts; the pool comprises $1{,}502$ dyadic and $2{,}031$ triadic agent-run rows in the five-model set, plus $838$ four-way rows. Two-way and three-way splits are reported separately because their network structures differ qualitatively (Section [4](https://arxiv.org/html/2610.07535v1#S4 "4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

### D.1 Hierarchical OLS variance decomposition

We fit OLS regressions with dummy matrices for persona, base model, and run. Single-block $R^{2}$ values measure the variance each factor explains in isolation; incremental entry (persona $\to$ persona+run $\to$ full) measures the unique contribution of base model after accounting for persona and run.

Table 11: Hierarchical OLS $R^{2}$ for *comments per post* by feature block (in-sample). $\Delta R^{2}\_{\text{model}}$ is the unique variance attributable to base model after controlling for persona and run. Dy/Tri are the five-model pool (dyadic / triadic); Tet is the four-way pool ($24$ runs, $2$ seeds of Qwen, gpt-oss, Magistral, GLM-4), where all four models appear in every run, so the partner composition is constant and model selection reduces to own-model identity.

| Block | Dy $R^{2}$ | Tri $R^{2}$ | Tet $R^{2}$ |
| --- | --- | --- | --- |
| Persona only | 0.086 | 0.070 | 0.056 |
| Model only | 0.102 | 0.156 | 0.317 |
| Model selection (own + partner) | 0.278 | 0.267 | 0.317 |
| gpt-oss indicator only | 0.008 | 0.093 | 0.288 |
| Run only | 0.350 | 0.219 | 0.049 |
| Persona + model | 0.190 | 0.224 | 0.364 |
| Persona + run | 0.432 | 0.288 | 0.106 |
| Full | 0.493 | 0.418 | 0.411 |
| $\boldsymbol{\Delta R^{2}\_{\text{model}}}$ | +.060 | +.130 | +.305 |

On a per-post basis, base model identity exceeds persona at *every* mixture size: own-model $R^{2}$ rises from $10.2\%$ (two-way) to $15.6\%$ (three-way) to $31.7\%$ (four-way), while persona falls from $8.6\%$ to $7.0\%$ to $5.6\%$. (Raw in-degree shows the reverse in two-way mixtures — persona appearing to dominate — because there persona largely proxies posting volume; moving to CPP removes that exposure effect.) The model effect concentrates in gpt-oss as the mixture widens: the gpt-oss indicator alone grows $0.8\%\to 9.3\%\to 28.8\%$. Run identity absorbs substantial CPP variance ($35.0\%$ two-way), reflecting run-to-run differences in overall comment density; even entering base model last, after persona and run, yields $\Delta R^{2}\_{\text{model}}=+6.0\%$, $+13.0\%$, and $+30.5\%$ — growing with mixture size. Because every four-way run contains all four models, the four-way effect is purely own-model (no partner-composition variation).

### D.2 Held-out validation and length control

The in-sample $R^{2}$ in Table [11](https://arxiv.org/html/2610.07535v1#A4.T11 "Table 11 ‣ D.1 Hierarchical OLS variance decomposition ‣ Appendix D Variance Decomposition ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") rewards persona’s $43$ dummies relative to the few model dummies. Held-out 5-fold cross-validation (predicting within-run-$z$ CPP) removes that advantage and sharpens the ordering: base model generalizes at every mixture size while persona barely does (its held-out $R^{2}$ is near zero, and negative in the four-way pool).

Table 12: Held-out 5-fold CV $R^{2}$ for within-run-$z$ CPP (Dy / Tri / Tet). Base model’s held-out $R^{2}$ grows with mixture size; persona’s stays near zero.

| Block | Dy | Tri | Tet |
| --- | --- | --- | --- |
| Persona only | 0.068 | 0.025 | $-0.070$ |
| Model only | 0.067 | 0.149 | 0.316 |
| Persona + model | 0.147 | 0.183 | 0.297 |

Length control. Post length is itself a strong engagement predictor, and reasoning-heavy models post longer (gpt-oss’s mean log-length runs $+0.8$ SD above its run average in the four-way pool). To confirm the attractor/repeller ordering is not a length artifact, we partial mean post length out of within-run-$z$ CPP and re-average by model. The poles persist at every mixture size (Table [13](https://arxiv.org/html/2610.07535v1#A4.T13 "Table 13 ‣ D.2 Held-out validation and length control ‣ Appendix D Variance Decomposition ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

Table 13: Per-model engagement (within-run-$z$ CPP), raw vs. after partialling out mean post length. The gpt-oss attractor and Magistral repeller survive length control; Gemma is absent from the four-way pool.

|  | Dyad | | Triad | | Tetrad | |
| --- | --- | --- | --- | --- | --- | --- |
| Model | raw | adj | raw | adj | raw | adj |
| gpt-oss | $+0.41$ | $+0.20$ | $+0.63$ | $+0.29$ | $+0.90$ | $+0.46$ |
| Gemma | $+0.16$ | $+0.17$ | $+0.19$ | $+0.27$ | – | – |
| Qwen | $-0.13$ | $+0.07$ | $-0.12$ | $+0.06$ | $-0.08$ | $+0.18$ |
| GLM-4 | $-0.31$ | $-0.24$ | $-0.44$ | $-0.24$ | $-0.54$ | $-0.25$ |
| Magistral | $-0.12$ | $-0.23$ | $-0.18$ | $-0.32$ | $-0.39$ | $-0.55$ |

## Appendix E Content Analyses

### E.1 Implementing lexical representations and classifiers

We use two TF-IDF representations of agent text in our results.
(1) Post-level: one vector per post or comment over word $1$–$2$-grams (with English stop words removed) and character $3$–$5$-grams (sublinear term frequency, $\ell\_{2}$-normalized rows, $\leq$40k features each). This is used for the model/persona classifiers (Table [2](https://arxiv.org/html/2610.07535v1#S4.T2 "Table 2 ‣ 4.2 Content Effects ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") and Appendix [E.3](https://arxiv.org/html/2610.07535v1#A5.SS3 "E.3 Persona faithfulness ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")) and, averaged within each (model, persona) cell, for the nearest-neighbor check.
(2) Agent-level: one vector per agent (with posts concatenated) over word $1$–$2$-grams with English stop words removed and $\ell\_{2}$-normalized rows, reduced by truncated SVD to $30$ “style axes”; this is used for the content$\to$engagement analysis below.

Classifiers are multinomial logistic regression; accuracies are reported under $5$-fold cross-validation and, for the model target, leave-personas-out cross-validation (disjoint train/test persona sets), with inverse-regularization $C=2.0$ and an $\ell\_{2}$ penalty.

#### On semantic versus lexical features

The use of a technique like TF-IDF potentially forecloses semantic meaning, making our choice of lexical features over semantic embeddings non-obvious. However, across three pretrained embedding models (two general embedders, one style-based), no embedding clearly beats TF-IDF on model recovery while remaining interpretable, and the style-only embedder collapses persona recovery.

We embed each agent’s concatenated posts with three pretrained models — two general-purpose semantic embedders (a Gemma-based embedder and all-mpnet-base-v2) and one style-specialized embedder (StyleDistance) — and fit the same logistic-regression classifiers on each representation (Table [14](https://arxiv.org/html/2610.07535v1#A5.T14 "Table 14 ‣ On semantic versus lexical features ‣ E.1 Implementing lexical representations and classifiers ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")); these agent-level, posts-only figures run below the post-level $86\%$ of Table [2](https://arxiv.org/html/2610.07535v1#S4.T2 "Table 2 ‣ 4.2 Content Effects ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), which also uses character $n$-grams and comment text. TF-IDF is competitive with the embeddings on model recovery and the most interpretable, which is why we adopt it; the style-only embedder (StyleDistance) recovers the model nearly persona-invariantly (model LPO $0.74$) while collapsing persona recovery ($0.22$), consistent with model identity residing in style and persona in topic.

Table 14: Comparing different representation methods: recovering base model and persona from agent text (4,509 agents, posts only). Columns are model accuracy under 5-fold CV and leave-personas-out (LPO), and persona accuracy under CV. TF-IDF is the representation used throughout the paper.

| representation | model CV | model LPO | persona CV |
| --- | --- | --- | --- |
| TF-IDF (topic + style) | 0.80 | 0.70 | 0.73 |
| StyleDistance (style) | 0.76 | 0.74 | 0.22 |
| Gemma (semantic) | 0.79 | 0.75 | 0.83 |
| MPNet (semantic) | 0.72 | 0.66 | 0.76 |

Beyond performance, the choice of lexical features offers us greater interpretability on the firing “features” or words which may predict engagement, as described in Section [4.2](https://arxiv.org/html/2610.07535v1#S4.SS2 "4.2 Content Effects ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations").

### E.2 Style axes from SVD

The agent-level representation used for the content$\to$engagement analysis (Section [4.2](https://arxiv.org/html/2610.07535v1#S4.SS2 "4.2 Content Effects ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")) reduces the high-dimensional TF-IDF space to a small set of *style axes*. We build one TF-IDF vector per agent (its posts concatenated) over word $1$–$2$-grams (English stop words removed, $\min\mathrm{df}=10$, $\leq$20k features, sublinear term frequency, $\ell\_{2}$-normalized rows): $4{,}509$ agent vectors over $11{,}575$ terms. We then apply truncated SVD, $X\approx U\Sigma V^{\top}$, keeping $K=30$ components. The rows of $V^{\top}$ are the style axes (term$\to$axis loadings); the projection $U\Sigma$ gives each agent’s coordinates on them, which form the *style* feature set in the engagement regression. The $30$ axes capture $10.6\%$ of total TF-IDF variance — low in absolute terms, as expected for a sparse high-dimensional bag-of-words space, but enough to recover base model at $\sim$0.80 accuracy.

Reading the largest-magnitude entries of each axis in $V^{\top}$ shows several axes aligning with model registers (Table [15](https://arxiv.org/html/2610.07535v1#A5.T15 "Table 15 ‣ E.2 Style axes from SVD ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")): axis 2 isolates gpt-oss’s technical vocabulary (*proof, token, audit, zk, chain*) from conversational openers, and axis 3 captures Gemma’s contrarian register (*actually, stop, noise, finally*). Lower-variance axes increasingly track persona topics (e.g. *roblox*, *ferrari*) rather than model style, reflecting that the decomposition also absorbs persona-level content.

Table 15: Selected SVD style axes: highest-loading terms at each pole (from $V^{\top}$) and the spread of mean axis scores across base models. Axis 1 separates language (a few non-English personas); axes 2–4 carry model-register signal; later axes track persona topics.

| axis | top $+$ terms | top $-$ terms | model spread (mean score) |
| --- | --- | --- | --- |
| 1 | let’s, just, digital, i’m | ici je, citer, je viens | all ${\approx}{+}0.2$ (language) |
| 2 | let’s, i’m, systems, you’re | proof, token, audit, zk | gpt-oss ${-}0.13$ vs rest ${\sim}{+}0.04$ |
| 3 | actually, stop, noise, finally | explore, journey, greetings | Gemma ${+}0.11$ vs rest ${\leq}{+}0.01$ |
| 4 | strategic, governance, architecture | tech, hey, share, got | Gemma ${+}0.03$ vs Mag ${-}0.05$ |

### E.3 Persona faithfulness

The model-versus-persona identity question presumes that agents express their assigned personas; if agents ignored assigned personas while interacting, then “persona variance” would be trivially low. Thus, we replicate our model-classification experiment on personas.

Setup. As in the primary setup, we pool all $145{,}090$ posts and comments, each labeled with the persona of its author, and restrict to the $43$ personas with at least $25$ texts.
We vectorize with TF-IDF (word $1$–$2$-grams and character $3$–$5$-grams, $\leq 60$k features, log-linear term frequency) and fit a multinomial logistic-regression classifier to predict the *persona*, evaluated with $5$-fold stratified cross-validation. For reference, random chance is $1/43=2.3\%$.

Result. Persona is recovered at $\mathbf{32.6\%}$ accuracy — $\mathbf{14\times}$ chance — confirming that agents systematically express the content of their assigned persona rather than collapsing to a single voice. The effect is present for every base model when we restrict training and testing to that model’s own output (within-model $3$-fold CV, chance $=1/k$ for the $k$ personas that model voiced):

Table 16: Within-model persona recovery: accuracy of a persona classifier trained and tested on a single model’s own output ($3$-fold CV), and the multiple over chance. Every model expresses its assigned persona far above chance.

| model | persona accuracy | $\times$ chance |
| --- | --- | --- |
| Gemma | $50.8\%$ | $22\times$ |
| Magistral | $42.7\%$ | $18\times$ |
| gpt-oss | $33.6\%$ | $14\times$ |
| GLM-4 | $30.7\%$ | $13\times$ |
| Qwen | $22.3\%$ | $10\times$ |

Every model embodies its persona far above chance; the ordering is itself interpretable, with the most persona-adaptive models (Gemma, Magistral) at the top and the least (Qwen) at the bottom.

### E.4 Content predictors of engagement

We ask how much of an agent’s engagement is predicted by its content versus its model or persona.

Each agent (one row per agent-run) is described by four sets of features: post *length* ($\log$ mean post length), *style* (the $29$ SVD style axes of Appendix [E.2](https://arxiv.org/html/2610.07535v1#A5.SS2 "E.2 Style axes from SVD ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations"), excluding the language axis), *model* (dummy indicators), and *persona* (dummy indicators); the outcome is *comments per post* (CPP), $z$-scored within each run.

We fit an ordinary least-squares regression, reporting $5$-fold cross-validated $R^{2}$. A feature set’s unique contribution can then be measured by the drop in full-model $R^{2}$ when that set of features alone is removed from the regression (Table [17](https://arxiv.org/html/2610.07535v1#A5.T17 "Table 17 ‣ E.4 Content predictors of engagement ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

Table 17: Content vs. identity as predictors of (within-run $z$-scored) engagement. Cross-validated $R^{2}$: each feature set alone, and its unique contribution (full-model $R^{2}$ minus the model omitting that set).

| feature set | single-set $R^{2}$ | unique $R^{2}$ |
| --- | --- | --- |
| length | $0.175$ | $0.051$ |
| style | $0.192$ | $0.016$ |
| model | $0.096$ | $0.001$ |
| persona | $0.057$ | $0.008$ |
| all four |  | $0.259$ |

Per-post engagement is only weakly predictable overall ($R^{2}\approx 0.26$; $\sim$75% unexplained). What is predictable is carried by content: *style* and per-post *length* are the main predictors (single-set $R^{2}$ $0.19$ and $0.18$; they overlap, so each unique share is modest), while *model* and *persona* add almost nothing once content is observed (unique $R^{2}\leq 0.01$).

### E.5 Style directions and the engagement direction

To ask whether the lexical style that draws engagement is any particular model’s style, we work in the SVD style space (axes $2$–$30$, Appendix [E.2](https://arxiv.org/html/2610.07535v1#A5.SS2 "E.2 Style axes from SVD ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")). Each model’s *style direction* is the mean style vector (centroid) of its agents; the *engagement direction* is the coefficient vector of within-run-$z$ engagement regressed on the style axes. We compare directions by cosine.

The model directions are reproducible: recomputed on disjoint halves of the runs, each model’s direction matches itself at cosine $0.88$–$0.98$ (Table [18](https://arxiv.org/html/2610.07535v1#A5.T18 "Table 18 ‣ E.5 Style directions and the engagement direction ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")), and the engagement direction itself is stable at $0.92$. They are also distinct — pairwise cosines between model centroids are mostly negative (e.g. gpt-oss–GLM-4 $-0.47$), with gpt-oss the clearest outlier (mean cosine $-0.31$ to the others). Crucially, the engagement direction aligns most with gpt-oss (cosine $+0.67$) and is most opposed to GLM-4 and Magistral, recovering the attractor–repeller ordering of Finding 1.

Table 18: Style geometry in the SVD space. “Direction stability” is the cosine between a model’s centroid recomputed on disjoint run-halves (mean over $60$ splits; $1=$ perfectly stable). “cos to engagement” is the cosine between the model’s style direction and the engagement direction. The latter recovers the attractor–repeller ordering of Finding 1.

| model | direction stability | cos to engagement |
| --- | --- | --- |
| gpt-oss-20b | $0.96$ | $+0.67$ |
| Gemma-4-31B | $0.98$ | $+0.13$ |
| Qwen3-32B | $0.88$ | $-0.19$ |
| Magistral-Small | $0.95$ | $-0.36$ |
| GLM-4-32B | $0.89$ | $-0.55$ |

So the lexical style that predicts engagement is, geometrically, the attractor’s own style — even though style explains only a modest share of engagement variance overall (Table [17](https://arxiv.org/html/2610.07535v1#A5.T17 "Table 17 ‣ E.4 Content predictors of engagement ‣ Appendix E Content Analyses ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations")).

### E.6 Distinctive phrases

The “characteristic phrases” column of Table [2](https://arxiv.org/html/2610.07535v1#S4.T2 "Table 2 ‣ 4.2 Content Effects ‣ 4 Results ‣ Disentangling Models from Personas in Heterogeneous LLM Simulations") is computed by the log-odds-ratio with an informative Dirichlet prior ([Monroe et al., 2008](https://arxiv.org/html/2610.07535v1#bib.bib44)), over the full $145{,}090$-text corpus. For each model we compare the frequency of every word bigram in that model’s texts against its frequency in all other models’ texts; the Dirichlet prior is set from the corpus-wide bigram frequencies, and we rank phrases by the resulting $z$-score. Unlike a per-run ranking, this corpus-level estimate is robust to single-run topical artifacts. The top phrases per model:

- •

  gpt-oss-20b: *merkle root, audit trail, zk snark, tamper evident, real time*
- •

  Qwen3-32B: *let’s build, let’s make, here’s twist, i’ll draft, feedback loop*
- •

  GLM-4-32B: *beautifully captures, resonates deeply, aligns perfectly, incredibly innovative*
- •

  Magistral-Small: *ah user, alright listen, strikes chord, neon lights, lattice based*
- •

  Gemma-4-31B: *you’re just, stop trying, just fancy, fancy way, memory leak*

These read as recognizable registers — GLM-4’s effusive affirmation, Gemma’s dismissive directness, Magistral’s theatrical address, Qwen’s build-oriented proposals. gpt-oss’s crypto-flavored phrases partly reflect topic as well as style. (Generated by analyses/distinctive\_words.py.)

## Appendix F Extended Related Work

#### Frameworks for collective behavior.

The shift from single-model evaluation to inter-agent study has drawn on adjacent traditions: cooperative AI ([Conitzer & Oesterheld, 2023](https://arxiv.org/html/2610.07535v1#bib.bib13)) imports tools from game theory and mechanism design, while the interactionist paradigm ([Ferrarotti et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib17)) situates language-model collectives within cognitive science.
Persona-level evaluation frameworks (SOTOPIA ([Zhou et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib74); [Zhou et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib75)), SocioVerse ([Zhang et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib71))) ground these collectives in tasks framed around human social norms.

#### Foundations of LLM social simulation.

Early work framed LLMs as stand-ins for human participants in social computing
prototypes ([Park et al., 2022](https://arxiv.org/html/2610.07535v1#bib.bib50)) before
[Park et al. (2023a)](https://arxiv.org/html/2610.07535v1#bib.bib51) demonstrated that agents equipped
with memory, planning, and reflection produce coherent emergent social behavior
in sandbox environments.
Subsequent surveys ([Gao et al., 2023a](https://arxiv.org/html/2610.07535v1#bib.bib18); [Surve et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib61))
catalogued a fast-growing landscape of agent architectures for social modeling.
[Anthis et al. (2025)](https://arxiv.org/html/2610.07535v1#bib.bib2) offer a calibrated assessment: LLM simulations
already support exploratory and pilot work, but systematic validation against
human ground truth remains limited.

#### Scale, calibration, and domain-specific simulators.

S3 ([Gao et al., 2023b](https://arxiv.org/html/2610.07535v1#bib.bib19)) introduced a general social network
simulation system; OASIS ([Yang et al., 2024](https://arxiv.org/html/2610.07535v1#bib.bib68)) extended this to one
million agents with a realistic platform interface.
More targeted systems simulate opinion and polarization dynamics
([Chuang et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib11); [Piao et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib55)),
echo chamber formation ([Gu et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib22)), rumor spreading
([Hu et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib26)), disinformation
([Pastor-Galindo et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib53); [López et al., 2025a](https://arxiv.org/html/2610.07535v1#bib.bib37)),
and hashtag virality ([Jha et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib29)).
SOTOPIA ([Zhou et al., 2023](https://arxiv.org/html/2610.07535v1#bib.bib74)) and SOTOPIA-S4
([Zhou et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib75)) provide evaluation infrastructure
for social intelligence.
Alignment to real populations has become a distinct concern: SocioVerse
([Zhang et al., 2025](https://arxiv.org/html/2610.07535v1#bib.bib71)) grounds agents in 10 million real-world
users, while [Composta et al. (2025)](https://arxiv.org/html/2610.07535v1#bib.bib12) and
[Münker et al. (2025)](https://arxiv.org/html/2610.07535v1#bib.bib46) caution that empirical realism must be
actively benchmarked rather than assumed.

#### Persona diversity as a proxy for population diversity.

[Bui et al. (2025)](https://arxiv.org/html/2610.07535v1#bib.bib6) propose Mixture-of-Personas (MoP),
sampling from a learned mixture of persona-exemplar pairs to align a single
model’s output with a target population.
The method treats cross-model transferability as a portability property, not
as a variable of study—the closest prior approach in spirit but not in design.

#### In-the-wild AI-only networks.

Empirical studies of Moltbook
([Holtz, 2026](https://arxiv.org/html/2610.07535v1#bib.bib25); [Zerhoudi et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib70); [Zhang et al., 2026](https://arxiv.org/html/2610.07535v1#bib.bib72))
find macro-level structural signatures (heavy-tailed participation, small-world
connectivity) coexisting with markedly non-human micro-level patterns: low
reciprocity, shallow conversations, formulaic content.
None control for base-model identity, leaving open whether observed patterns
are properties of particular models, LLMs generally, or the specific multi-model
mix Moltbook instantiates.

#### Network formation and trait-driven heterogeneity.

[Papachristou & Yuan (2024)](https://arxiv.org/html/2610.07535v1#bib.bib49) study how LLMs form networks
across synthetic and real-world settings, finding that agents consistently apply
preferential attachment while adapting between homophily and heterophily by
context.
[Mehdizadeh & Hilbert (2025)](https://arxiv.org/html/2610.07535v1#bib.bib41) show that social
attributes (age, gender, religion, political orientation) in agent prompts
induce homophilic community structure; political and religious attributes produce
the strongest polarization.
Both papers locate diversity at the level of prompted traits rather than
base-model identity, and neither deploys a mixed-model population within the same
simulation.
