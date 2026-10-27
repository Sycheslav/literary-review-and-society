---
id: arxiv-2604-24698-text
type: material
title: 'The Chameleon''s Limit: Investigating Persona Collapse and Homogenization in Large Language Models'
work_id: arxiv-2604-24698
source_url: https://arxiv.org/html/2604.24698v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 0198dd862d67873704fa7115be7d73d9c18f1e4af603e38b94aba644e28698ba
---

> Источник: [https://arxiv.org/html/2604.24698v2](https://arxiv.org/html/2604.24698v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# [Uncaptioned image]The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models

Yunze Xiao Vivienne J. Zhang Chenghao Yang Weihao Xuan Jen-tse Huang
Affiliation: UChicago
Affiliation: UTokyo
Affiliation: RIKEN AIP

Affiliation: CMU
Affiliation: JHU†Equal contribution.  ‡Corresponding Author: jhuan236@jhu.edu
![[Uncaptioned image]](https://arxiv.org/html/2604.24698v2/Figures/Icons/website.jpg)
[Website](https://algoroxyolo.github.io/projects/chameleon-limit/)
![[Uncaptioned image]](https://arxiv.org/html/2604.24698v2/Figures/Icons/github.png)
[Codebase](https://github.com/Algoroxyolo/PersonaCollapse)

###### Abstract

Large language models (LLMs) have powered multi-agent simulations such as survey respondents or application users.
However, LLMs lack the population-level diversity required by these simulations—responses from LLMs with detailed human profiles cluster into classes, unlike human responses that uniformly fill the entire space.
In this paper, we formalize this as Persona Collapse and quantify its population-level structure with three diagnostic metrics: Coverage (how much of the persona space is occupied), Uniformity (how evenly agents spread across it), and Complexity (how rich the resulting behaviors are).
Across eight LLMs on personality (BFI-44), moral reasoning, and self-introduction, persona collapse is universal but task-dependent: CoSER-Llama-8B collapses the most in personality while being the most diverse in moral reasoning.
Moreover, sampling more personas cannot mitigate the collapse.
We further show a fidelity–diversity tradeoff: the models with the highest per-persona fidelity produce the most polarized populations.
Finally, persona-targeted fine-tuning further narrows the population instead of diversifying it.

## 1 Introduction

![Refer to caption](https://arxiv.org/html/2604.24698v2/chameleon_teaser_v2.png)


Figure 1: 
Persona Collapse in LLM-based population simulation.
Although two personas differ across dimensions, two Qwen3-32B agents with the profiles assign the same response (3: neutral) on a socially sensitive judgment task.
At the population level, the most conservative and most liberal persona pools also concentrate on the same middle rating.


Figure 2: t-SNE projection of the BFI-44 responses using the same 2,058 profiles from Twin-2K-500 ([Toubia et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib53)). Blue: Humans spread evenly across the space. Yellow, Green, Purple, and Pink: When assigned personas, Qwen3-32B responses fragment into separated clusters rather than filling the space.

Agents powered by large language models (LLMs) are increasingly deployed as participants in simulated societies, synthetic survey respondents, and proxies for user testing ([Park et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib42); [Zhou et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib67); [Louie et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib32)).
These applications rely on a critical assumption: given a richly specified persona (e.g., age, gender, nationality, political leaning, occupation), the model can simulate an individual whose behavior reflects the complex intersection of all these attributes ([Xiao et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib60)).
However, existing evaluations ([Wang et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib58); [Abdulhai et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib1)) primarily measure “shallow fidelity”, which assesses whether an agent successfully mimics a simple, low-dimensional label, such as a well-known public figure (e.g., “Albert Einstein”) or a broad demographic prototype (e.g., “a sixty-year-old Black woman”).
While such shallow fidelity works for role-playing, it remains unclear whether LLMs actually maintain fidelity for more complicated simulation targets or whether they might overlook certain information.

In this study, we identify a fundamental failure in such “combinatorial fidelity.”
When instructed to role-play a persona defined by $26$ dimensions, LLMs systematically retain only the most stereotypically salient attributes for downstream tasks, discarding the rest.
This attribute truncation propagates from individual personas to the population as a whole.
As illustrated in [Fig. 1](https://arxiv.org/html/2604.24698v2#S1.F1 "In 1 Introduction ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models"), personas differing across multiple dimensions can nevertheless produce the same model judgment, causing the population that should diverge to concentrate on similar responses.
At the population level, model-generated data points occupy restricted and clustered regions rather than evenly spanning the human distribution in the 44-dimensional BFI personality space ([Fig. 2](https://arxiv.org/html/2604.24698v2#S1.F2 "In 1 Introduction ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
We call this population-level homogenization Persona Collapse.

To systematically measure persona collapse, we shift from individual-level fidelity metrics to population-level diagnostics.
We formalize our analysis through the Behavioral Trait Matrix $\mathbf{B}\in\mathbb{R}^{N\times D}$, where each row holds a single persona’s responses to the $D$ behavioral items.
A structurally healthy simulated population should:
(i) span the full distribution of human data points rather than over-sampling a small region (Coverage; [Naeem et al., 2020](https://arxiv.org/html/2604.24698v2#bib.bib38));
(ii) distribute evenly across the space instead of collapsing into a few dense, degenerate clusters (Uniformity; [Hopkins and Skellam, 1954](https://arxiv.org/html/2604.24698v2#bib.bib16); [Wang and Isola, 2020](https://arxiv.org/html/2604.24698v2#bib.bib56)); and
(iii) be genuinely high-dimensional rather than compressed onto a low-dimensional subspace (Complexity; [Levina and Bickel, 2004](https://arxiv.org/html/2604.24698v2#bib.bib28); [Tulchinskii et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib55)).
Together, these three criteria form a diagnostic framework grounded in the geometry of $\mathbf{B}$.
Coverage measures how much of the behavioral space is occupied, Uniformity how evenly the population occupies it, and Complexity how many independent dimensions underlie that variation.
Since these population-level metrics do not reveal where collapse lives, we complement them by localizing which behavioral items are flattened and which persona attributes still drive variation ([Tucker, 1951](https://arxiv.org/html/2604.24698v2#bib.bib54); [John and Srivastava, 1999](https://arxiv.org/html/2604.24698v2#bib.bib25)).

We apply this framework to eight LLMs across three tasks: personality simulation (BFI-44 ([John and Srivastava, 1999](https://arxiv.org/html/2604.24698v2#bib.bib25))), moral reasoning ([Liu et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib31)), and free-form self-introductions.
Model responses to the BFI-44 are compared to a human reference from [Toubia et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib53).
Two findings characterize this behavior:
(i) models with the highest per-persona fidelity consistently produce the most polarized populations; and
(ii) a model can be structurally degenerate in personality simulation while remaining comparatively diverse in moral reasoning.
Our contributions are as follows:

1. ①

   We propose a geometric diagnostic framework to systematically measure persona collapse, quantifying the loss of high-dimensional human attributes in LLM simulations.
2. ②

   We evaluate eight LLMs across personality simulation, moral reasoning, and open-ended self-introduction, revealing pervasive persona collapse across all models.
3. ③

   We show a fidelity–diversity tradeoff and find that, in the two pipelines we study, persona-targeted fine-tuning does not mitigate persona collapse but instead exacerbates it.

## 2 Methods

Figure 3: 
Illustrations of the three metrics.
The first row shows the failures each metric can locate, while the second row shows the ideal cases.
(a) A low coverage indicates that agents concentrate in a small region.
(b) Natural distributions resemble spatial randomness ($H\approx 0.5$); a low uniformity indicates that results are over-engineered into lattices, while a high uniformity indicates that they degenerate into clusters.
(c) A high coverage cannot entail a dimension-rich distribution; a low complexity indicates that agents collapse onto a lower-dimensional manifold.

### 2.1 Behavioral Trait Matrix

We represent a population of $N$ personas as a Behavioral Trait Matrix $\mathbf{B}\in\mathbb{R}^{N\times D}$, whose rows are personas’ responses to the $D$ items (questions) of an instrument; items aggregate into psychologically meaningful factors (e.g., the five BFI traits).
Let $X\_{g}=\{\mathbf{x}^{g}\_{i}\}\_{i=1}^{N\_{g}}$ and $X\_{h}=\{\mathbf{x}^{h}\_{j}\}\_{j=1}^{N\_{h}}$ denote the generated personas and the human reference data points, respectively, embedded in a shared space with Euclidean distance $\|\cdot\|\_{2}$.
The rows of $\mathbf{B}$ form the point cloud $X\_{g}$.
For a point $\mathbf{x}$ and a finite point set $A$, let $\operatorname{dist}(\mathbf{x},A)=\min\_{\mathbf{y}\in A\setminus\{\mathbf{x}\}}\|\mathbf{x}-\mathbf{y}\|\_{2}$ be the distance from $\mathbf{x}$ to $A$, and let $r\_{\ell}(\mathbf{x};A)$ be the distance from $\mathbf{x}$ to its $\ell$-th nearest neighbor in $A\setminus\{\mathbf{x}\}$; hence $r\_{1}(\mathbf{x};A)=\operatorname{dist}(\mathbf{x},A)$.

### 2.2 Quantifying Persona Collapse

#### Coverage

asks whether the population spans the behavioral space.
Following [Naeem et al. (2020)](https://arxiv.org/html/2604.24698v2#bib.bib38), we build a hypersphere around each human reference point $\mathbf{x}^{h}\_{j}$ with radius $r\_{k}(\mathbf{x}^{h}\_{j};X\_{h})$.
Coverage is the fraction of these human neighborhoods that contain at least one generated persona:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\operatorname{Cov}=\frac{1}{N\_{h}}\sum\_{j=1}^{N\_{h}}\mathbbm{1}\!\bigl[\operatorname{dist}(\mathbf{x}^{h}\_{j},X\_{g})\leq r\_{k}(\mathbf{x}^{h}\_{j};X\_{h})\bigr].$$ |  | (1) |

We anchor to a human reference rather than the theoretical combinatorial space because genuine human variation occupies a restricted manifold, and exhaustively mapping the full space is intractable.
Low Coverage indicates that the model over-samples a small region ([Fig. 3](https://arxiv.org/html/2604.24698v2#S2.F3 "In 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")a).

#### Uniformity

asks whether agents spread evenly across the region they occupy.
Broad Coverage does not rule out a population that separates into a few dense clusters.
We quantify this using the Hopkins statistic ([Hopkins and Skellam, 1954](https://arxiv.org/html/2604.24698v2#bib.bib16)).
We sample $m$ generated points $\mathbf{x}^{g}\_{s\_{1}},\dots,\mathbf{x}^{g}\_{s\_{m}}$ from $X\_{g}$ and $m$ random probes $\mathbf{z}\_{1},\dots,\mathbf{z}\_{m}$ uniformly from the bounding region of $X\_{g}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H=\frac{\sum\_{t=1}^{m}\operatorname{dist}(\mathbf{z}\_{t},X\_{g})}{\sum\_{t=1}^{m}\operatorname{dist}(\mathbf{z}\_{t},X\_{g})+\sum\_{t=1}^{m}\operatorname{dist}(\mathbf{x}^{g}\_{s\_{t}},X\_{g})}.$$ |  | (2) |

If personas are distributed with natural irregularity, $H\approx 0.5$.
Deviations reveal distinct pathologies: clustering drives $H\to 1$,
whereas over-regular, lattice-like spacing drives $H\to 0$ ([Fig. 3](https://arxiv.org/html/2604.24698v2#S2.F3 "In 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")b).

#### Complexity

asks whether the variation is high-dimensional.
There is a blind spot in Coverage: a low-dimensional manifold can connect enough neighborhoods to score well.
As shown in [Fig. 3](https://arxiv.org/html/2604.24698v2#S2.F3 "In 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")c, a single line threads through most human neighborhoods, yielding a Coverage of $0.89$.
Complexity closes this gap by estimating the Local Intrinsic Dimensionality (LID) at each point $\mathbf{x}\in X$, $X\in\{X\_{g},X\_{h}\}$, with the maximum likelihood estimator of [Levina and Bickel (2004)](https://arxiv.org/html/2604.24698v2#bib.bib28) over its $k$ nearest neighbors:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\widehat{\operatorname{LID}}\_{k}(\mathbf{x};X)=-\left(\frac{1}{k-1}\sum\_{\ell=1}^{k-1}\log\frac{r\_{\ell}(\mathbf{x};X)}{r\_{k}(\mathbf{x};X)}\right)^{-1}.$$ |  | (3) |

LID measures how fast the local neighborhood volume grows with radius: high values indicate genuinely high-dimensional local geometry, whereas $\widehat{\operatorname{LID}}\_{k}\to 1$ indicates a neighborhood that is essentially linear.
[Tulchinskii et al. (2023)](https://arxiv.org/html/2604.24698v2#bib.bib55) also found that human-authored text carries systematically higher intrinsic dimensionality than LLM-generated text, motivating our design.

### 2.3 Localizing Collapse

The three axes describe the overall shape of the generated population: how much of the human space it covers, how evenly, and in how many dimensions.
They do not tell us where the collapse happens: which items every persona answers the same way, whether the remaining differences are just group stereotypes, and which assigned attributes still affect behavior.
To answer these questions, we examine the response matrix $\mathbf{B}$ item by item, together with the attributes assigned to each persona.
Throughout, $q=1,\dots,Q$ indexes items, each answered on an $L$-point Likert scale, and the subscripts $g$ and $h$ denote the generated and human populations, consistent with [Sec. 2.2](https://arxiv.org/html/2604.24698v2#S2.SS2 "2.2 Quantifying Persona Collapse ‣ 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").

#### Response range.

For each item $q$, let $p\_{q,c}$ be the fraction of personas choosing option $c\in\{1,\dots,L\}$.
We measure how many options the population effectively uses with $E\_{q}=1/\sum\_{c=1}^{L}p\_{q,c}^{2}$ (the inverse Simpson index).
$E\_{q}$ ranges from 1, when all personas give the same answer, to $L$, when all options are used equally often.
A value near 1 means the model has erased individual differences on that item.

#### Demographic clustering.

Next, we ask whether the remaining differences between personas reflect individuals or group stereotypes.
For each item, we compute $R^{2}$, the share of response variance explained by a single demographic attribute (e.g., gender or political ideology).
In human data, $R^{2}$ is typically small, because people differ much more within groups than between them ([Costa Jr. and McCrae, 1992](https://arxiv.org/html/2604.24698v2#bib.bib9)).
A higher $R^{2}$ in the generated population means the model treats personas as members of their group rather than as individuals.
Averaging $R^{2}$ over items shows which attributes cause the most distortion, and in which traits.

#### Attribute dominance.

Finally, we ask which assigned attributes the model actually uses.
We add the four attributes to a regression one at a time (political ideology $\to$ gender $\to$ country $\to$ social class) and record how much each one increases $R^{2}$.
We summarize the result with Dom%, the share of the total $R^{2}$ contributed by the strongest attribute; if all four attributes mattered equally, Dom% would be 25%.
For open-ended self-introductions, we report two further measures.
The mention rate (MR) is the fraction of self-introductions that explicitly state each assigned attribute, detected by keyword matching.
The intra-class correlation (ICC) measures how much of the variation in linguistic features comes from differences between personas rather than from differences among a persona’s three samples.
MR is averaged over gender, country, political ideology, age, and social class, and ICC over seven linguistic features.

#### Persona fidelity.

We check whether personas actually express their assigned trait levels.
For each trait, a persona’s trait score is the mean of its responses to that trait’s items.
Fidelity $\rho$ is Spearman’s rank correlation between the assigned level (Low/Neutral/High, coded 1/2/3) and the trait score across all $N\_{g}$ personas.
As a complementary effect size, we compute Cohen’s $d$ between High and Low personas on each trait and report its average over the five traits, $\bar{d}$.
Both measures require an assigned target level, so they are undefined for the human reference, whose participants were never assigned one.
Instead, we compare against typical effect sizes in the personality literature: observed Big Five group differences are usually $|d|\approx 0.1$–$0.5$, whereas $d\approx 1.2$ already counts as “very large” and $d\approx 2$ as “huge” ([Costa Jr. and McCrae, 1992](https://arxiv.org/html/2604.24698v2#bib.bib9); [Sawilowsky, 2009](https://arxiv.org/html/2604.24698v2#bib.bib47)).

### 2.4 Experimental Settings

#### Datasets.

We evaluate the simulated personas across three tasks:
First, the Big Five Inventory (BFI-44; [John and Srivastava, 1999](https://arxiv.org/html/2604.24698v2#bib.bib25)) uses 44 5-point Likert items to measure five established personality traits, enabling tests of behavioral diversity.
Second, we use 131 ethical scenarios from a moral reasoning dataset ([Liu et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib31)), also rated on a 5-point scale.
Finally, personas produce three open-ended self-introductions, which expose failure modes missed by forced-choice tasks, such as template homogenization, and test whether collapse carries over to generative settings.
The prompts are provided in [Sec. A.2](https://arxiv.org/html/2604.24698v2#A1.SS2 "A.2 Prompt Design ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").

#### Models.

We evaluate eight instruction-tuned LLMs in two categories.
The general-purpose set includes Llama-3.1-8B-Instruct ([Meta AI, 2024](https://arxiv.org/html/2604.24698v2#bib.bib36)), Qwen3-4B, Qwen3-30B-A3B, and Qwen3-32B ([Yang et al., 2025a](https://arxiv.org/html/2604.24698v2#bib.bib61)); Qwen3 models run in their default thinking mode, and we additionally report Qwen3-32B with thinking disabled.
The role-play set includes CoSER-Llama-8B ([Wang et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib57)), fine-tuned from Llama-3.1-8B-Instruct on literary character data; HER-32B ([Du et al., 2026](https://arxiv.org/html/2604.24698v2#bib.bib10)), trained from Qwen3-32B with persona-specific supervised fine-tuning (PSFT) followed by reinforcement learning; CoSER-Qwen-32B, which we train ourselves to approximate HER-32B’s intermediate PSFT-only stage; and MiniMax-M2-Her ([MiniMax, 2026](https://arxiv.org/html/2604.24698v2#bib.bib37)), a large-scale role-play model released by MiniMax.
This selection yields two paired comparisons on a shared backbone:
(i) Llama-3.1-8B-Instruct $\to$ CoSER-Llama-8B isolates the effect of PSFT;
(ii) Qwen3-32B $\to$ CoSER-Qwen-32B $\to$ HER-32B approximates successive post-training stages (PSFT, then RL).
Since every starting point is already post-trained, these pairs measure the effect of additional persona-targeted training rather than of alignment itself.
All models are queried through the OpenRouter API with all decoding hyperparameters (temperature, top-$p$, etc.) left at their API defaults unless otherwise noted.

Figure 4: Population-level diagnostics on BFI-44 (8 models, 1,144 personas each). Left: Cov vs. LID. No model simultaneously achieves high coverage and high complexity to reach the human reference performance. Right: Persona fidelity ($\rho$) vs. trait polarization (Cohen’s $d$). Every model with $\rho>0.9$ produces $d>6$, far exceeding natural human group differences ($d\approx 2$ is typically considered “huge” in human personality research). $\rho$ and $d$ apply only to the prompted model populations, not to the unprompted human reference ([Sec. 2.3](https://arxiv.org/html/2604.24698v2#S2.SS3 "2.3 Localizing Collapse ‣ 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).

#### Persona profiles and human reference.

We compile 26 persona dimensions frequently used in prior work ([Zhou et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib68); [Huang et al., 2025a](https://arxiv.org/html/2604.24698v2#bib.bib20); [Samuel et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib45)), spanning demographics (e.g., age, gender, country), psychographic traits (e.g., political ideology), and individualized characteristics (e.g., hobbies, physical appearance).
We construct personas bottom-up by sampling attribute combinations, instead of relying on any single survey or asking LLMs to characterize a target population directly.
This is a deliberate stress test: it presents the model with diverse, intersecting, and sometimes non-typical individuals and asks whether the simulated population preserves that diversity, rather than what the model is most likely already optimized to reproduce.
We initially sample 2,000 attribute combinations from this space; after manual screening for completeness and internal consistency, 856 are excluded, leaving 1,144 personas for our three tasks (see [Sec. A.1](https://arxiv.org/html/2604.24698v2#A1.SS1 "A.1 Persona Construction ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") for the full attribute list and filtering criteria).
We use human BFI-44 responses from Twin-2K-500 (2,058 participants; [Toubia et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib53)) as the reference distribution; the other two instruments focus on model-to-model comparisons and item-level diagnostics ([Sec. 2.3](https://arxiv.org/html/2604.24698v2#S2.SS3 "2.3 Localizing Collapse ‣ 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).

## 3 Results

|  | Personality (BFI-44) | | | | | | Moral Reasoning | | | Self-Introduction | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Cov | $H$ | LID | $\bar{E}$ | $\rho$ | $\bar{d}$ | LID | $\bar{E}$ | $\bar{R}^{2}\_{\mathrm{pol}}$ | $H$ | LID | MR | ICC |
| Human | 1.00 | 0.57 | 14.4 | 3.69 | — | — | — | — | — | — | — | — | — |
| Llama-3.1-8B | 0.47 | 0.69 | 5.3 | 3.36 | .92 | 7.8 | 41.8 | 2.99 | .004 | 0.66 | 16.6 | .60 | .33 |
| Qwen3-4B | 0.80 | 0.71 | 7.3 | 2.98 | .81 | 4.2 | 15.1 | 1.20 | .005 | 0.67 | 17.5 | .62 | .51 |
| Qwen3-30B-A3B | 0.44 | 0.68 | 5.8 | 3.02 | .92 | 7.7 | 32.3 | 2.01 | .003 | 0.66 | 20.2 | .66 | .41 |
| Qwen3-32B | 0.64 | 0.70 | 5.1 | 3.23 | .94 | 13.7 | 31.7 | 1.83 | .002 | 0.65 | 20.8 | .69 | .34 |
| Qwen3-32B (non-thinking) | 0.64 | 0.67 | 6.0 | 3.32 | .94 | 12.2 | 34.9 | 2.01 | .003 | — | — | — | — |
| CoSER-Llama-8B | 0.16 | 0.91 | 4.6 | 1.36 | .80 | 4.1 | 45.3 | 4.27 | .003 | 0.67 | 21.4 | .53 | .28 |
| CoSER-Qwen-32B | 0.56 | 0.72 | 4.6 | 2.35 | .92 | 9.6 | 28.4 | 1.95 | .003 | 0.66 | 19.5 | .41 | .23 |
| HER-32B | 0.38 | 0.65 | 6.8 | 3.58 | .93 | 11.0 | 38.5 | 3.21 | .003 | 0.65 | 25.5 | .65 | .22 |
| MiniMax-M2-Her | 0.06 | 0.50 | 22.3 | 4.49 | .41 | 1.1 | 42.6 | 2.86 | .003 | 0.64 | 26.5 | .38 | .17 |

Table 1: BFI-44 personality and moral reasoning ($N\_{g}{=}1{,}144$ personas per model; human reference: $N\_{h}{=}2{,}058$) results. Upper block: general-purpose models; lower block: role-play models. Bold: closest to human for Cov, $H$, LID, and $\bar{E}$ on BFI-44; highest value in all other columns. Self-introduction $H$ and LID are computed on persona embeddings: each sample is truncated to 512 characters and encoded with all-MiniLM-L6-v2 ([Reimers and Gurevych, 2019](https://arxiv.org/html/2604.24698v2#bib.bib43)), and the three samples of a persona are averaged into one vector.

We organize our findings around four research questions (RQs):
RQ1 (Population Geometry): Do simulated populations evenly fill the human behavioral space?
RQ2 (Localizing Collapse): At which items and attributes does individual variation disappear?
RQ3 (Fidelity vs. Diversity): Does following personas more faithfully make the population more human-like?
RQ4 (Post-Training): Does persona-targeted training reduce collapse?
[Tab. 1](https://arxiv.org/html/2604.24698v2#S3.T1 "In 3 Results ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") reports core metrics defined in [Sec. 2](https://arxiv.org/html/2604.24698v2#S2 "2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").

### 3.1 RQ1: Population Geometry

#### Most models cluster more than humans.

On personality, every model except MiniMax-M2-Her has a higher Hopkins statistic than humans ($H$ from $0.65$ to $0.91$, vs. $0.57$).
The simulated population does not become a human-like cloud: it sits in a few piles near the human center, and the tails stay empty.
CoSER-Llama-8B is the most extreme case ($H{=}0.91$, Cov${=}0.16$).

#### High Coverage does not mean high Complexity.

Coverage varies widely across models ($0.06$ to $0.80$), but even the models that reach many human neighborhoods stay far below the human LID ($14.4$).
Qwen3-4B is the clearest case: the best Coverage we see ($0.80$), yet LID is only half the human value ($7.3$).
Spreading personas across the map is not the same as reproducing its structure.

#### High Complexity can still lie outside the human range.

This failure is easy to misread as a success: the population can be rich and even, yet lie almost entirely outside the human region.
MiniMax-M2-Her is that case (LID${=}22.3$, $H{=}0.50$, Cov${=}0.06$).
Without Coverage, it would look like the best system.

#### More personas do not close the gap.

One might attribute these gaps to a finite sample: with enough personas, the population could eventually fill the human space.
[Fig. 5](https://arxiv.org/html/2604.24698v2#S3.F5 "In No single attribute dominates, and the one that matters changes with the task. ‣ 3.2 RQ2: Localizing Collapse ‣ 3 Results ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") tests this by subsampling $N$ from $50$ to $1{,}100$ personas.
Humans saturate quickly while models grow slowly and stay far below.
As $N$ grows, models gain little Coverage or LID and drift further from $H{=}0.5$.
Persona collapse is therefore a property of the model rather than of the sample size, and supplying more personas (e.g., as in PersonaHub-1B ([Ge et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib13)) and MatrAIx-8B1) does not fix it.

#### The same model’s geometry changes with the task.

A model that collapses on one task can be among the most complex on another.
CoSER-Llama-8B is the most collapsed model on personality (Cov${=}0.16$, $H{=}0.91$), yet it has the highest LID on moral reasoning ($45.3$) and the third highest of eight on self-introduction ($21.4$).
Qwen3-4B shows the reverse pattern: the highest BFI Coverage ($0.80$), but the lowest moral LID ($15.1$).

### 3.2 RQ2: Localizing Collapse

#### Models use fewer answer options than humans.

On personality, every model except MiniMax-M2-Her uses a narrower answer scale than humans ($\bar{E}$ from $1.36$ to $3.58$, vs. $3.69$).
CoSER-Llama-8B is the most extreme case: it answers only $\{1,3,5\}$, $83.7\%$ of its answers are “3,” and $\bar{E}$ falls to $1.36$.
As with geometry, response range depends on the task.
The same CoSER-Llama-8B has the widest response range of any model on moral reasoning ($\bar{E}{=}4.27$), while Qwen3-4B moves the other way, from $\bar{E}{=}2.98$ on personality to the narrowest moral range ($\bar{E}{=}1.20$, with $17/131$ zero-variance items).

#### Demographic attributes explain little of the moral variance.

On moral items, political ideology explains at most $0.5\%$ of the response variance in any model ($\bar{R}^{2}\_{\mathrm{pol}}$ from $0.002$ to $0.005$).
The variation that remains is therefore barely tied to the assigned political identity: on moral reasoning, collapse does not take the form of sorting personas into political camps.

#### No single attribute dominates, and the one that matters changes with the task.

The small demographic variance that does exist is usually spread across attributes rather than concentrated on one.
Measured by Dom%, the share of demographic $R^{2}$ contributed by the strongest attribute, only Qwen3-4B leans hard on a single axis, Social Class ($59\%$); the remaining seven models sit between $29\%$ and $41\%$, against an even split of $25\%$.
Which attribute a model relies on also depends on the task: Qwen3-4B shifts from class on moral items ($59\%$) to gender in self-introductions ($61\%$; [Tab. 5](https://arxiv.org/html/2604.24698v2#A2.T5 "In B.4 Demographic Sources of Linguistic Variation ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") in [appendix B](https://arxiv.org/html/2604.24698v2#A2 "Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
Where a dominant axis appears, it may reflect training data or alignment procedures, but since training details are not fully transparent, we refrain from causal attribution.
In extreme cases, stereotypical priors manifest not as statistical bias but as outright refusal ([Sec. B.6](https://arxiv.org/html/2604.24698v2#A2.SS6 "B.6 Failure Modes ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).

Figure 5: BFI-44 diagnostics vs. population size $N$. For each $N$ from 50 to 1,100 (step 50), we sample $N$ personas five times and plot the mean; shaded bands show the 95% confidence interval across the five draws.

#### Models mention gender and country, but drop age and class.

When a model compresses a 26-attribute persona into free text, it does not retain attributes evenly: easy, visible labels survive, while age and class drop out.
A simulated society built this way will look mixed on gender and nationality, and empty on socioeconomic life.
Averaged over the eight models, the mention rates follow a stable order: Gender ($89\%$) $>$ Country ($86\%$) $>$ Politics ($57\%$) $>$ Age ($30\%$) $>$ Social Class ($23\%$).
No model names Social Class in more than $42\%$ of introductions.
Details of the keyword detection are in [Sec. B.2](https://arxiv.org/html/2604.24698v2#A2.SS2 "B.2 Attribute Mention Detection ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models"), and per-model rates are in [Sec. B.2](https://arxiv.org/html/2604.24698v2#A2.SS2.SSS0.Px7 "Per-model rates. ‣ B.2 Attribute Mention Detection ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").

#### In free text, a persona is either stable but templated, or not stable at all.

Free text exposes two opposite failures that Likert scores cannot.
Qwen3-4B is the most self-consistent model (ICC${=}0.51$), but its consistency comes with rigid, templated introductions ([Sec. B.5](https://arxiv.org/html/2604.24698v2#A2.SS5 "B.5 Template and Structural Homogenization ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
MiniMax-M2-Her is the opposite: its self-introductions are the most complex we measure (LID${=}26.5$), but ICC is only $0.17$, so $83\%$ of its linguistic variation is stochastic noise.
Three samples of the same persona differ almost as much as samples from different personas.
Variety without a self is not a population.
Taken together, the failures in RQ1 and RQ2 differ across survey and free-text formats, so a persona evaluation that uses only one format can miss the failure the other format shows.

### 3.3 RQ3: Fidelity vs. Diversity

#### Higher fidelity comes with exaggerated trait gaps.

A high fidelity score can look like success while reflecting polarization: the easiest way to keep High personas ranked above Low is to push both groups to opposite ends of the scale.
[Fig. 4](https://arxiv.org/html/2604.24698v2#S2.F4 "In Models. ‣ 2.4 Experimental Settings ‣ 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") (right) plots persona fidelity ($\rho$) against Cohen’s $\bar{d}$.
Every model with $\rho>0.9$ produces $\bar{d}>6$ between High and Low personas.
Qwen3-32B sits at the extreme ($\rho=0.94$, $\bar{d}=13.7$).

#### Low fidelity is not a fix either.

MiniMax-M2-Her barely follows persona instructions ($\rho=0.41$, $\bar{d}=1.1$), yet its population is the farthest from humans (Cov${=}0.06$; RQ1).
Giving up fidelity does not bring the population closer to human behavior.

### 3.4 RQ4: Post-Training

#### Persona fine-tuning narrows the population.

From Llama-3.1-8B to CoSER-Llama-8B, PSFT pushes the population into piles: response range shrinks ($\bar{E}$: $3.36\to 1.36$), Coverage drops ($0.47\to 0.16$), clustering intensifies ($H$: $0.69\to 0.91$), and Complexity falls slightly (LID: $5.3\to 4.6$).
Polarization also eases ($\bar{d}$: $7.8\to 4.1$), but fidelity drops with it ($\rho$: $0.92\to 0.80$): the personas become less distinct from one another, not more individual.
The PSFT step from Qwen3-32B to CoSER-Qwen-32B moves in the same direction ($\bar{E}$: $3.23\to 2.35$; Cov: $0.64\to 0.56$; LID: $5.1\to 4.6$; $\bar{d}$: $13.7\to 9.6$), so on two backbones, persona-targeted fine-tuning narrows rather than widens the population.

#### RL adds complexity but moves the population further from humans.

From CoSER-Qwen-32B to HER-32B, RL raises Complexity (LID: $4.6\to 6.8$) but lowers Coverage further ($0.56\to 0.38$), so Coverage decreases monotonically along the whole pipeline ($0.64\to 0.56\to 0.38$).
Polarization rises again ($\bar{d}$: $9.6\to 11.0$).
RL thus creates diversity without moving it toward human behavior.

#### Turning off thinking changes little.

Qwen3-32B with and without thinking reaches the same fidelity ($\rho=0.94$), similar polarization ($\bar{d}=13.7$ vs. $12.2$), and the same Coverage ($0.64$), suggesting that persona collapse resides in the weights rather than the reasoning chain.

## 4 Related Work

#### Persona-driven agents.

LLMs are now routinely asked to play a persona.
Persona-conditioned agents populate social simulations ([Park et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib42)), take on different roles in multi-agent reasoning ([Du et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib11); [Liang et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib30); [Huang et al., 2025b](https://arxiv.org/html/2604.24698v2#bib.bib22)), and act as characters in dialogue and role-play ([Shanahan et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib48); [Shao et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib49); [Jiang et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib23)).
Evaluation has followed one pattern: it checks one agent at a time against one target.
Psychometric benchmarks test whether an agent’s questionnaire answers match its assigned character ([Wang et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib58); [Huang et al., 2024b](https://arxiv.org/html/2604.24698v2#bib.bib21)), consistency probes test whether it stays in character ([Abdulhai et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib1); [Huang et al., 2024a](https://arxiv.org/html/2604.24698v2#bib.bib18)), and embedding similarity tests whether its text resembles a reference ([Zhang et al., 2020](https://arxiv.org/html/2604.24698v2#bib.bib65)).
These are measures of shallow fidelity.
None of them asks whether a population of agents, taken together, is as varied as the people it stands in for.

#### Homogenization and collapse.

A growing body of work finds that LLM outputs are less varied than human ones.
Agents conform under social pressure ([Baltaji et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib4)), make similar choices in everyday dilemmas ([Huang et al., 2026](https://arxiv.org/html/2604.24698v2#bib.bib19)), and drift toward a generic helpful voice in multi-agent settings ([Wang et al., 2026](https://arxiv.org/html/2604.24698v2#bib.bib59)).
Simulated survey respondents miss the human distribution of opinions and show too little variance ([Argyle et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib3); [Santurkar et al., 2023](https://arxiv.org/html/2604.24698v2#bib.bib46); [Bisbee et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib5); [Boelaert et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib6); [Meister et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib35)).
Open-ended generations repeat themselves, both within and across models ([Zhang et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib64); [Jiang et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib24)).
Benchmarks and critical reviews of LLM simulation reach similar conclusions ([Geng et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib14); [Larooij and Törnberg, 2025](https://arxiv.org/html/2604.24698v2#bib.bib27); [Hu et al., 2026](https://arxiv.org/html/2604.24698v2#bib.bib17); [Russo et al., 2026](https://arxiv.org/html/2604.24698v2#bib.bib44)), and [Cheng et al. (2023)](https://arxiv.org/html/2604.24698v2#bib.bib8) measure polarization within a single simulation.
The closest technical idea is mode collapse, studied in generative adversarial networks (GANs) ([Srivastava et al., 2017](https://arxiv.org/html/2604.24698v2#bib.bib51); [Thanh-Tung and Tran, 2020](https://arxiv.org/html/2604.24698v2#bib.bib52); [Kossale et al., 2022](https://arxiv.org/html/2604.24698v2#bib.bib26)) and more recently in LLM fine-tuning and output formatting ([O’Mahony et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib40); [Yun et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib63)), where a generator puts most of its mass on a few modes of one target distribution.
Persona collapse differs: the model receives many different personas that should lead to different behavior, and those differences still disappear.
Prior studies usually report homogenization on one task with one diversity score.
We instead offer a geometric measurement against a human reference, with three separate axes (Coverage, Uniformity, Complexity) that apply across models, tasks, and response formats.
Keeping the axes separate exposes failures that a single score would mix up, such as a population that is high-dimensional but lies outside the human range.

#### Post-training and the fidelity–diversity tradeoff.

Alignment is a plausible, though unproven, contributor to persona collapse.
Reward maximization with a KL penalty ([Ouyang et al., 2022](https://arxiv.org/html/2604.24698v2#bib.bib39)) pulls models toward a single “helpful assistant” mode, and sycophancy is one visible symptom ([Sharma et al., 2024](https://arxiv.org/html/2604.24698v2#bib.bib50)).
[Lu et al. (2026)](https://arxiv.org/html/2604.24698v2#bib.bib33) find a single direction in the model’s activations, the Assistant Axis, that controls this helpful identity and predicts when a persona drifts.
Earlier in the pipeline, [Paglieri et al. (2026)](https://arxiv.org/html/2604.24698v2#bib.bib41) show that standard sampling under-produces unusual trait combinations when personas are generated.
Both findings fit a broader account of alignment pressure ([Yang et al., 2025b](https://arxiv.org/html/2604.24698v2#bib.bib62)).
Our results add that persona-targeted post-training does not undo collapse: on the SFT and RL pipelines we study ([Sec. 3.4](https://arxiv.org/html/2604.24698v2#S3.SS4 "3.4 RQ4: Post-Training ‣ 3 Results ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")), PSFT narrows the simulated population without improving per-persona fidelity, and RL adds complexity but lowers Coverage further.

## 5 Conclusion

We proposed a geometric framework that measures persona collapse along three axes (Coverage, Uniformity, and Complexity) and applied it to eight LLMs on three tasks.
No model matches the human reference: models either cluster, cover only a small part of the human space, or vary richly outside it; and sampling more personas using a single model cannot mitigate the collapse.
It also depends on the task: CoSER-Llama-8B is the most collapsed model on personality, yet the most varied on moral reasoning.
The models that follow personas most faithfully exaggerate trait differences far beyond what is seen in humans, and persona-targeted fine-tuning narrows the population instead of widening it.
In free text, models keep visible attributes such as gender and country but drop age and social class.
These results mean that per-persona fidelity and single-task evaluations can both give a misleading picture of a simulated population.

## Limitations

#### US-only human reference.

Our only human reference, Twin-2K-500 ([Toubia et al., 2025](https://arxiv.org/html/2604.24698v2#bib.bib53)), contains BFI-44 responses from US participants.
The personas we give the models are broader: they are sampled bottom-up and vary in nationality, among other attributes ([Sec. A.1](https://arxiv.org/html/2604.24698v2#A1.SS1 "A.1 Persona Construction ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
Coverage and the human LID therefore compare each model population against a US population, not a global one.
This makes our estimate of collapse conservative.
Every model already falls short of a single-country population; a reference drawn from the more diverse world population would be harder to cover, and we expect the gap to grow rather than shrink.

#### Model coverage.

We evaluate eight models, most of them open-weight models between 4B and 32B parameters, and we include no general-purpose proprietary frontier models (e.g., GPT, Claude, or Gemini).
Within the Qwen3 family, collapse persists from 4B to 32B, and the larger models polarize traits more rather than less, so scale alone does not appear to solve the problem.
Still, whether the largest proprietary systems behave the same way remains to be tested.

#### No base models.

All models we study are already post-trained, so we cannot tell how much of the collapse comes from post-training and how much from the pre-trained model itself.
A clean comparison would require pre-alignment base models, but base models cannot reliably follow a persona instruction from a prompt alone, and their failure to role-play would be confounded with the absence of post-training.
We therefore make only the narrower claim that additional persona-targeted training does not remove collapse.

## Ethics Statement

#### Sensitive persona attributes.

Our personas include sensitive attributes such as disability status, medical history, criminal record, and sexual orientation ([Tab. 2](https://arxiv.org/html/2604.24698v2#A1.T2 "In A.1 Persona Construction ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
We include them because downstream social simulations often specify them, and leaving them out would hide exactly the failures we aim to measure.
Every persona is a fictional combination of sampled attributes and does not describe any real person.
The Twin-2K-500 dataset is released under CC BY 4.0 and does not contain any personally identifiable information.

#### Interpreting our findings.

All patterns we report describe how models behave, not how people behave.
For example, which attribute a model relies on, or which persona a model refuses to play, says nothing about real links between demographic attributes and personality, morality, or writing style.
Our results should not be read as evidence about any human group.

#### Dual use.

Our framework is built to audit persona simulations and expose their failures.
The same measurements could, in principle, be used to tune simulations that imitate particular demographic groups more convincingly.
We believe the auditing value outweighs this risk: the failures we document already exist in deployed models, and measuring them is a first step toward fixing them.

#### Use of AI assistants.

We used AI assistants (Claude and GPT) to help write code and to improve the clarity of the text.
All research ideas, experimental design, and analyses are our own, and the authors reviewed and verified all code and text produced with AI assistance and take full responsibility for it.
This use is separate from the LLMs we study as research objects.

## References

- Abdulhai et al. (2025)

  Marwa Abdulhai, Ryan Cheng, Donovan Clay, Tim Althoff, Sergey Levine, and Natasha Jaques. 2025.
  Consistently simulating human personas with multi-turn reinforcement learning.
  *Advances in Neural Information Processing Systems*, 38:52920–52957.
- AlKhamissi et al. (2024)

  Badr AlKhamissi, Muhammad ElNokrashy, Mai Alkhamissi, and Mona Diab. 2024.
  Investigating cultural alignment of large language models.
  In *Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*, pages 12404–12422.
- Argyle et al. (2023)

  Lisa P Argyle, Ethan C Busby, Nancy Fulda, Joshua R Gubler, Christopher Rytting, and David Wingate. 2023.
  Out of one, many: Using language models to simulate human samples.
  *Political Analysis*, 31(3):337–351.
- Baltaji et al. (2024)

  Razan Baltaji, Babak Hemmatian, and Lav R Varshney. 2024.
  Conformity, confabulation, and impersonation: Persona inconstancy in multi-agent llm collaboration.
  In *Proceedings of the 2nd Workshop on Cross-Cultural Considerations in NLP*, pages 17–31.
- Bisbee et al. (2024)

  James Bisbee, Joshua D Clinton, Cassy Dorff, Brenton Kenkel, and Jennifer M Larson. 2024.
  Synthetic replacements for human survey data? the perils of large language models.
  *Political Analysis*, 32(4):401–416.
- Boelaert et al. (2025)

  Julien Boelaert, Samuel Coavoux, Étienne Ollion, Ivaylo Petev, and Patrick Präg. 2025.
  Machine bias. how do generative language models answer opinion polls?
  *Sociological Methods & Research*, 54(3):1156–1196.
- Chang et al. (2025)

  Serina Chang, Alicja Chaszczewicz, Emma Wang, Maya Josifovska, Emma Pierson, and Jure Leskovec. 2025.
  Llms generate structurally realistic social networks but overestimate political homophily.
  In *Proceedings of the International AAAI Conference on Web and Social Media*, volume 19, pages 341–371.
- Cheng et al. (2023)

  Myra Cheng, Tiziano Piccardi, and Diyi Yang. 2023.
  Compost: Characterizing and evaluating caricature in llm simulations.
  In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing*, pages 10853–10875.
- Costa Jr. and McCrae (1992)

  Paul T. Costa Jr. and Robert R. McCrae. 1992.
  *Revised NEO personality inventory (NEO PI-R) and NEP five-factor inventory (NEO-FFI) : professional manual*.
  Psychological Assessment Resources.
- Du et al. (2026)

  Chengyu Du, Xintao Wang, Aili Chen, Weiyuan Li, Rui Xu, Junteng Liu, Zishan Huang, Rong Tian, Zijun Sun, Yuhao Li, et al. 2026.
  Her: Human-like reasoning and reinforcement learning for llm role-playing.
  In *Findings of the Association for Computational Linguistics: ACL 2026*, pages 25725–25762.
- Du et al. (2024)

  Yilun Du, Shuang Li, Antonio Torralba, Joshua B Tenenbaum, and Igor Mordatch. 2024.
  Improving factuality and reasoning in language models through multiagent debate.
  In *Proceedings of the 41st International Conference on Machine Learning*, volume 235, pages 11733–11763. PMLR.
- Fu et al. (2026)

  Chiyuan Fu, Lyuhao Chen, Yunze Xiao, Weihao Xuan, Carlos Busso, and Mona Diab. 2026.
  Sentipolis: Emotion-aware agents for social simulations.
  In *Findings of the Association for Computational Linguistics: ACL 2026*, pages 7465–7494.
- Ge et al. (2024)

  Tao Ge, Xin Chan, Xiaoyang Wang, Dian Yu, Haitao Mi, and Dong Yu. 2024.
  Scaling synthetic data creation with 1,000,000,000 personas.
  *arXiv preprint arXiv:2406.20094*.
- Geng et al. (2024)

  Mingmeng Geng, Sihong He, and Roberto Trotta. 2024.
  Are large language models chameleons? an attempt to simulate social surveys.
  *arXiv preprint arXiv:2405.19323*.
- Gupta et al. (2024)

  Shashank Gupta, Vaishnavi Shrivastava, Ameet Deshpande, Ashwin Kalyan, Peter Clark, Ashish Sabharwal, and Tushar Khot. 2024.
  Bias runs deep: Implicit reasoning biases in persona-assigned llms.
  In *International Conference on Learning Representations*, volume 2024, pages 21849–21874.
- Hopkins and Skellam (1954)

  Brian Hopkins and John Gordon Skellam. 1954.
  A new method for determining the type of distribution of plant individuals.
  *Annals of Botany*, 18(2):213–227.
- Hu et al. (2026)

  Tiancheng Hu, Joachim Baumann, Lorenzo Lupo, Nigel Collier, Dirk Hovy, and Paul Röttger. 2026.
  Simbench: Benchmarking the ability of large language models to simulate human behaviors.
  In *International Conference on Learning Representations*, volume 2026, pages 28290–28341.
- Huang et al. (2024a)

  Jen-tse Huang, Wenxiang Jiao, Man Ho Lam, Eric John Li, Wenxuan Wang, and Michael Lyu. 2024a.
  On the reliability of psychological scales on large language models.
  In *Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing*, pages 6152–6173.
- Huang et al. (2026)

  Jen-tse Huang, Jiantong Qin, Xueli Qiu, Sharon Levy, Michelle R Kaufman, and Mark Dredze. 2026.
  Knowing but not doing: Convergent morality and divergent action in llms.
  *arXiv preprint arXiv:2601.07972*.
- Huang et al. (2025a)

  Jen-tse Huang, Jiantong Qin, Jianping Zhang, Youliang Yuan, Wenxuan Wang, and Jieyu Zhao. 2025a.
  Visbias: Measuring explicit and implicit social biases in vision language models.
  In *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing*, pages 17981–18004.
- Huang et al. (2024b)

  Jen-tse Huang, Wenxuan Wang, Eric John Li, Man Ho Lam, Shujie Ren, Youliang Yuan, Wenxiang Jiao, Zhaopeng Tu, and Michael Lyu. 2024b.
  On the humanity of conversational ai: Evaluating the psychological portrayal of llms.
  In *The Twelfth International Conference on Learning Representations*.
- Huang et al. (2025b)

  Jen-Tse Huang, Jiaxu Zhou, Tailin Jin, Xuhui Zhou, Zixi Chen, Wenxuan Wang, Youliang Yuan, Michael Lyu, and Maarten Sap. 2025b.
  On the resilience of llm-based multi-agent collaboration with faulty agents.
  In *Proceedings of the 42nd International Conference on Machine Learning*, volume 267, pages 26202–26226. PMLR.
- Jiang et al. (2024)

  Hang Jiang, Xiajie Zhang, Xubo Cao, Cynthia Breazeal, Deb Roy, and Jad Kabbara. 2024.
  Personallm: Investigating the ability of large language models to express personality traits.
  In *Findings of the association for computational linguistics: NAACL 2024*, pages 3605–3627.
- Jiang et al. (2025)

  Liwei Jiang, Yuanjun Chai, Margaret Li, Mickel Liu, Raymond Fok, Nouha Dziri, Yulia Tsvetkov, Maarten Sap, and Yejin Choi. 2025.
  Artificial hivemind: The open-ended homogeneity of language models (and beyond).
  *Advances in Neural Information Processing Systems*, 38.
- John and Srivastava (1999)

  Oliver P John and Sanjay Srivastava. 1999.
  *The Big Five Trait Taxonomy: History, Measurement, and Theoretical Perspectives*, 2nd edition.
  Guilford Press.
- Kossale et al. (2022)

  Youssef Kossale, Mohammed Airaj, and Aziz Darouichi. 2022.
  Mode collapse in generative adversarial networks: An overview.
  In *2022 8th international conference on optimization and applications (ICOA)*, pages 1–6. IEEE.
- Larooij and Törnberg (2025)

  Maik Larooij and Petter Törnberg. 2025.
  Do large language models solve the problems of agent-based modeling? a critical review of generative social simulations.
  *arXiv preprint arXiv:2504.03274*.
- Levina and Bickel (2004)

  Elizaveta Levina and Peter Bickel. 2004.
  Maximum likelihood estimation of intrinsic dimension.
  *Advances in neural information processing systems*, 17.
- Li et al. (2025)

  Yuxuan Li, Hirokazu Shirado, and Sauvik Das. 2025.
  Actions speak louder than words: Agent decisions reveal implicit biases in language models.
  In *Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency*, pages 3303–3325.
- Liang et al. (2024)

  Tian Liang, Zhiwei He, Wenxiang Jiao, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Shuming Shi, and Zhaopeng Tu. 2024.
  Encouraging divergent thinking in large language models through multi-agent debate.
  In *Proceedings of the 2024 conference on empirical methods in natural language processing*, pages 17889–17904.
- Liu et al. (2025)

  Jiarui Liu, Yueqi Song, Yunze Xiao, Mingqian Zheng, Lindia Tjuatja, Jana Schaich Borg, Mona Diab, and Maarten Sap. 2025.
  Synthetic socratic debates: Examining persona effects on moral decision and persuasion dynamics.
  In *Proceedings of the 2025 conference on empirical methods in natural language processing*, pages 16439–16469.
- Louie et al. (2024)

  Ryan Louie, Ananjan Nandi, William Fang, Cheng Chang, Emma Brunskill, and Diyi Yang. 2024.
  Roleplay-doh: Enabling domain-experts to create llm-simulated patients via eliciting and adhering to principles.
  In *Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing*, pages 10570–10603.
- Lu et al. (2026)

  Christina Lu, Jack Gallagher, Jonathan Michala, Kyle Fish, and Jack Lindsey. 2026.
  The assistant axis: Situating and stabilizing the default persona of language models.
  In *Proceedings of the 43rd International Conference on Machine Learning*, volume 306, pages 80955–81003. PMLR.
- Lutz et al. (2025)

  Marlene Lutz, Indira Sen, Georg Ahnert, Elisa Rogers, and Markus Strohmaier. 2025.
  The prompt makes the person (a): A systematic evaluation of sociodemographic persona prompting for large language models.
  In *EMNLP (Findings)*, pages 23212–23237.
- Meister et al. (2025)

  Nicole Meister, Carlos Guestrin, and Tatsunori B Hashimoto. 2025.
  Benchmarking distributional alignment of large language models.
  In *Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)*, pages 24–49.
- Meta AI (2024)

  Meta AI. 2024.
  [Introducing Llama 3.1: Our most capable models to date](https://ai.meta.com/blog/meta-llama-3-1/).
  Meta AI Blog, Jul 23, 2024. <https://ai.meta.com/blog/meta-llama-3-1/>.
- MiniMax (2026)

  MiniMax. 2026.
  [A deep dive into the MiniMax-M2-her](https://www.minimax.io/news/a-deep-dive-into-the-minimax-m2-her-2).
  MiniMax Blog, Jan 26, 2026. <https://www.minimax.io/news/a-deep-dive-into-the-minimax-m2-her-2>.
- Naeem et al. (2020)

  Muhammad Ferjad Naeem, Seong Joon Oh, Youngjung Uh, Yunjey Choi, and Jaejun Yoo. 2020.
  Reliable fidelity and diversity metrics for generative models.
  In *Proceedings of the 37th International Conference on Machine Learning*, volume 119, pages 7176–7185. PMLR.
- Ouyang et al. (2022)

  Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, et al. 2022.
  Training language models to follow instructions with human feedback.
  *Advances in neural information processing systems*, 35:27730–27744.
- O’Mahony et al. (2024)

  Laura O’Mahony, Leo Grinsztajn, Hailey Schoelkopf, and Stella Biderman. 2024.
  Attributing mode collapse in the fine-tuning of large language models.
  In *ICLR 2024 Workshop on Mathematical and Empirical Understanding of Foundation Models*, volume 2, page 2.
- Paglieri et al. (2026)

  Davide Paglieri, Logan Cross, William A Cunningham, Joel Z Leibo, and Alexander Sasha Vezhnevets. 2026.
  Persona generators: Generating diverse synthetic personas for arbitrary contexts.
  *arXiv preprint arXiv:2602.03545*.
- Park et al. (2023)

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein. 2023.
  Generative agents: Interactive simulacra of human behavior.
  In *Proceedings of the 36th annual acm symposium on user interface software and technology*, pages 1–22.
- Reimers and Gurevych (2019)

  Nils Reimers and Iryna Gurevych. 2019.
  Sentence-bert: Sentence embeddings using siamese bert-networks.
  In *Proceedings of the 2019 conference on empirical methods in natural language processing and the 9th international joint conference on natural language processing (EMNLP-IJCNLP)*, pages 3982–3992.
- Russo et al. (2026)

  Giuseppe Russo, Debora Nozza, Paul Röttger, and Dirk Hovy. 2026.
  The pluralistic moral gap: Understanding moral judgment and value differences between humans and large language models.
  In *Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)*, pages 6481–6497.
- Samuel et al. (2025)

  Vinay Samuel, Henry Peng Zou, Yue Zhou, Shreyas Chaudhari, Ashwin Kalyan, Tanmay Rajpurohit, Ameet Deshpande, Karthik R Narasimhan, and Vishvak Murahari. 2025.
  Personagym: Evaluating persona agents and llms.
  In *EMNLP (Findings)*, pages 6999–7022.
- Santurkar et al. (2023)

  Shibani Santurkar, Esin Durmus, Faisal Ladhak, Cinoo Lee, Percy Liang, and Tatsunori Hashimoto. 2023.
  Whose opinions do language models reflect?
  In *International conference on machine learning*, pages 29971–30004. PMLR.
- Sawilowsky (2009)

  Shlomo S Sawilowsky. 2009.
  New effect size rules of thumb.
  *Journal of modern applied statistical methods*, 8(2):26.
- Shanahan et al. (2023)

  Murray Shanahan, Kyle McDonell, and Laria Reynolds. 2023.
  Role play with large language models.
  *Nature*, 623(7987):493–498.
- Shao et al. (2023)

  Yunfan Shao, Linyang Li, Junqi Dai, and Xipeng Qiu. 2023.
  Character-llm: A trainable agent for role-playing.
  In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing*, pages 13153–13187.
- Sharma et al. (2024)

  Mrinank Sharma, Meg Tong, Tomek Korbak, David Duvenaud, Amanda Askell, Sam Bowman, Esin Durmus, Zac Hatfield-Dodds, Scott Johnston, Shauna Kravec, et al. 2024.
  Towards understanding sycophancy in language models.
  In *International Conference on Learning Representations*, volume 2024, pages 110–144.
- Srivastava et al. (2017)

  Akash Srivastava, Lazar Valkov, Chris Russell, Michael Gutmann, and Charles Sutton. 2017.
  Veegan: Reducing mode collapse in gans using implicit variational learning.
  *Advances in neural information processing systems*, 30.
- Thanh-Tung and Tran (2020)

  Hoang Thanh-Tung and Truyen Tran. 2020.
  Catastrophic forgetting and mode collapse in gans.
  In *2020 international joint conference on neural networks (ijcnn)*, pages 1–10. IEEE.
- Toubia et al. (2025)

  Olivier Toubia, George Z Gui, Tianyi Peng, Daniel J Merlau, Ang Li, and Haozhe Chen. 2025.
  Database report: Twin-2k-500: A data set for building digital twins of over 2,000 people based on their answers to over 500 questions.
  *Marketing Science*, 44(6):1446–1455.
- Tucker (1951)

  Ledyard R Tucker. 1951.
  A method for synthesis of factor analysis studies.
  *Personnel Research Section Report*, (984).
- Tulchinskii et al. (2023)

  Eduard Tulchinskii, Kristian Kuznetsov, Laida Kushnareva, Daniil Cherniavskii, Sergey Nikolenko, Evgeny Burnaev, Serguei Barannikov, and Irina Piontkovskaya. 2023.
  Intrinsic dimension estimation for robust detection of ai-generated texts.
  *Advances in Neural Information Processing Systems*, 36:39257–39276.
- Wang and Isola (2020)

  Tongzhou Wang and Phillip Isola. 2020.
  Understanding contrastive representation learning through alignment and uniformity on the hypersphere.
  In *Proceedings of the 37th International Conference on Machine Learning*, volume 119, pages 9929–9939. PMLR.
- Wang et al. (2025)

  Xintao Wang, Heng Wang, Yifei Zhang, Xinfeng Yuan, Rui Xu, Jen-tse Huang, Siyu Yuan, Haoran Guo, Jiangjie Chen, Shuchang Zhou, et al. 2025.
  Coser: Coordinating llm-based persona simulation of established roles.
  In *Proceedings of the 42nd International Conference on Machine Learning*, volume 267, pages 64822–64858. PMLR.
- Wang et al. (2024)

  Xintao Wang, Yunze Xiao, Jen-tse Huang, Siyu Yuan, Rui Xu, Haoran Guo, Quan Tu, Yaying Fei, Ziang Leng, Wei Wang, et al. 2024.
  Incharacter: Evaluating personality fidelity in role-playing agents through psychological interviews.
  In *Proceedings of the 62nd annual meeting of the association for computational linguistics (volume 1: Long papers)*, pages 1840–1873.
- Wang et al. (2026)

  Yiyang Wang, Yiqiao Jin, Alex Cabral, and Josiah Hester. 2026.
  Mascot: Towards multi-agent socio-collaborative companion systems.
  *arXiv preprint arXiv:2601.14230*.
- Xiao et al. (2025)

  Yunze Xiao, Lynnette Hui Xian Ng, Jiarui Liu, and Mona Diab. 2025.
  Humanizing machines: Rethinking llm anthropomorphism through a multi-level framework of design.
  In *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing*, pages 3331–3350.
- Yang et al. (2025a)

  An Yang, Anfeng Li, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chang Gao, Chengen Huang, Chenxu Lv, et al. 2025a.
  Qwen3 technical report.
  *arXiv preprint arXiv:2505.09388*.
- Yang et al. (2025b)

  Chenghao Yang, Sida Li, and Ari Holtzman. 2025b.
  Llm probability concentration: How alignment shrinks the generative horizon.
  *Transactions on Machine Learning Research*.
- Yun et al. (2025)

  Longfei Yun, Chenyang An, Zilong Wang, Letian Peng, and Jingbo Shang. 2025.
  The price of format: Diversity collapse in llms.
  In *EMNLP (Findings)*, pages 15454–15468.
- Zhang et al. (2025)

  Simone Zhang, Janet Xu, and AJ Alvero. 2025.
  Generative ai meets open-ended survey responses: Research participant use of ai and homogenization.
  *Sociological Methods & Research*, 54(3):1197–1242.
- Zhang et al. (2020)

  Tianyi Zhang, Varsha Kishore, Felix Wu, Kilian Q Weinberger, and Yoav Artzi. 2020.
  Bertscore: Evaluating text generation with bert.
  In *The 8th International Conference on Learning Representations*.
- Zheng et al. (2024)

  Mingqian Zheng, Jiaxin Pei, Lajanugen Logeswaran, Moontae Lee, and David Jurgens. 2024.
  When “a helpful assistant” is not really helpful: Personas in system prompts do not improve performances of large language models.
  In *Findings of the Association for Computational Linguistics: EMNLP 2024*, pages 15126–15154.
- Zhou et al. (2025)

  Jiaxu Zhou, Jen-tse Huang, Xuhui Zhou, Man Ho Lam, Xintao Wang, Hao Zhu, Wenxuan Wang, and Maarten Sap. 2025.
  The pimmur principles: Ensuring validity in collective behavior of llm societies.
  *arXiv preprint arXiv:2509.18052*.
- Zhou et al. (2024)

  Xuhui Zhou, Hao Zhu, Leena Mathur, Ruohong Zhang, Haofei Yu, Zhengyang Qi, Louis-Philippe Morency, Yonatan Bisk, Daniel Fried, Graham Neubig, et al. 2024.
  Sotopia: Interactive evaluation for social intelligence in language agents.
  In *International Conference on Learning Representations*, volume 2024, pages 40975–41019.

## Appendix A Detailed Settings

### A.1 Persona Construction

| Attribute | Reference |
| --- | --- |
| Age | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [Chang et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib7), [Liu et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib31), [Samuel et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib45), [Zhou et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib68), [AlKhamissi et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib2) |
| Gender | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [Li et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib29), [Chang et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib7), [Liu et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib31), [Lutz et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib34), [Zhou et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib68), [AlKhamissi et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib2) |
| Race/Ethnicity | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [Li et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib29), [Lutz et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib34) |
| Religion | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [Chang et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib7), [Liu et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib31) |
| Occupation | [Fu et al. (2026)](https://arxiv.org/html/2604.24698v2#bib.bib12), [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [Samuel et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib45), [Zheng et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib66), [Zhou et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib68), [Gupta et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib15) |
| Political spectrum | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [Li et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib29), [Chang et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib7), [Liu et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib31) |
| Has children, sexual orientation, residential status, language spoken, annual income, disability status, medical history, criminal record, veteran status, physical appearance | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20) |
| Marital status, education level | [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20), [AlKhamissi et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib2) |
| Hobbies | [Fu et al. (2026)](https://arxiv.org/html/2604.24698v2#bib.bib12), [Huang et al. (2025a)](https://arxiv.org/html/2604.24698v2#bib.bib20) |
| Country of residence | [Samuel et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib45) |
| Social class | [AlKhamissi et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib2) |
| Big Five personality traits | [Zhou et al. (2025)](https://arxiv.org/html/2604.24698v2#bib.bib67), [Zhou et al. (2024)](https://arxiv.org/html/2604.24698v2#bib.bib68) |

Table 2: Sampled attributes and referenced sources.

The full attribute list and its sources are given in [Tab. 2](https://arxiv.org/html/2604.24698v2#A1.T2 "In A.1 Persona Construction ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").
Profiles were removed for internal inconsistency or logically impossible combinations: profiles whose attributes cannot plausibly co-occur, e.g., a young child assigned a marital status of “married,” an age incompatible with an assigned education level or occupation (a five-year-old “accountant”), or a veteran status incompatible with age.
Annotators independently screened each profile, and disagreements were resolved by discussion.
We deliberately retain non-stereotypical but attested combinations (e.g., a neurotic, disagreeable accountant), removing only profiles that are internally contradictory, so that the surviving set remains as diverse as possible.
All retained personas complete all three tasks.

Each persona is serialized as a structured natural-language description using the template below.
This description is prepended to every task prompt as a user-turn prefix, separated from the task instructions by a horizontal rule, so that persona context is visible at every decoding step.

> You are a person with the following background and values. When responding,
> speak entirely from this perspective---your thoughts, judgments, and reasoning
> should all reflect this identity:
>   
> {dimension1}: {value1}
>   
> {dimension2}: {value2}
>   
> $\vdots$

### A.2 Prompt Design

#### Personality (BFI).

The model is asked to respond to each BFI item as the persona would, using the standard 1–5 disagree-to-agree scale.
The system message is:

> You are a helpful assistant acting out a specific persona.

The user message is:

> {persona\_description}
>   
> ---
>   
> You are taking a personality test. Please indicate the extent to which you
> agree or disagree with the following statement describing you.
>   
> Statement: I see myself as someone who {question\_text}
>   
>   
> Response Scale:
>   
>  1 = Disagree strongly
>   
>  2 = Disagree a little
>   
>  3 = Neither agree nor disagree
>   
>  4 = Agree a little
>   
>  5 = Agree strongly
>   
>   
> Respond with ONLY a single number from 1 to 5.

When a model produces reasoning outputs, a lightweight extraction call (temperature $=0$, max tokens $=20$) recovers the final scalar rating.

#### Moral judgment.

The model is cast as an impartial third-person observer and asked to rate the ethical merits of two candidate actions (A and B) in a moral dilemma scenario on a five-point Likert scale.
The system message is:

> We will do a role-playing game. You will be given a persona description and a scenario.

The user message is:

> {persona\_description}
>   
> ---
>   
> You will be given a moral dilemma described by an individual. You are not the
> person in the scenario---you are an impartial, third-person observer evaluating
> the situation from the outside.
>   
> Your task is to evaluate the ethical merits of two possible actions (A and B).
> Your evaluation should culminate in a decision expressed on a 5-point Likert
> scale, where:
>   
>  1 = Strongly favor A
>   
>  2 = Somewhat favor A
>   
>  3 = Neutral / undecided
>   
>  4 = Somewhat favor B
>   
>  5 = Strongly favor B
>   
> Respond with only a single number from 1 to 5.
>   
> ---
>   
> Dilemma narrated by an individual (you are not the narrator!):
>   
> {scenario}
>   
> - A: The author is wrong.
>   
> - B: Others are wrong.

When a model produces reasoning outputs, a lightweight extraction call (temperature $=0$, max tokens $=20$) recovers the final scalar rating.

#### Self-introduction.

The model is asked to introduce itself in first person as the given persona.
The system message is:

> We will do a role-playing game. You will be given a persona description.
> Stay fully in character as that persona throughout your response.

The user message is:

> {persona\_description}
>   
> ---
>   
> Please introduce yourself. Be as detailed and clear as possible: describe who
> you are, your background, your values, what matters to you, and how you see
> the world. Write in first person, as if you were genuinely this person
> speaking to someone you just met. Aim for a thorough, natural self-introduction
> (at least a few paragraphs).

Three independent samples per persona–model pair are collected (temperature $=0.9$, max tokens $=1{,}024$), yielding a distribution over linguistic expression for each identity.

## Appendix B Self-Introduction Analysis

Each persona writes three self-introductions ([Sec. A.2](https://arxiv.org/html/2604.24698v2#A1.SS2 "A.2 Prompt Design ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
This appendix describes how we analyze these texts and reports the per-model results behind [Sec. 3.2](https://arxiv.org/html/2604.24698v2#S3.SS2 "3.2 RQ2: Localizing Collapse ‣ 3 Results ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").
We first define the linguistic features, then report attribute mentions, intra-persona consistency, the demographic sources of linguistic variation, structural templates, and qualitative failure modes.

### B.1 Linguistic Features

For each response we compute ten features in four groups.
Length and structure: word count, sentence count (split on terminal punctuation), and mean sentence length.
Lexical diversity: type-token ratio (TTR), the hapax ratio (share of words that occur exactly once), and Guiraud’s index ($|V|/\sqrt{N}$, where $|V|$ is vocabulary size and $N$ is token count).
Subjectivity: first-person pronoun rate (tokens in {I, me, my, mine, myself, I’m, I’ve, I’d, I’ll} divided by word count) and hedge rate (occurrences of 14 hedges such as maybe, perhaps, I think, sort of per sentence).
Affect: positive and negative emotion rates, each the share of tokens that match an 18-word seed lexicon (e.g., happy, love, grateful; sad, angry, struggle).
We drop responses shorter than 20 characters or 5 words and responses that begin with an error marker, and we cap texts at 5,000 characters.

### B.2 Attribute Mention Detection

To measure which assigned attributes a self-introduction states explicitly, we match keywords for five attributes in the lowercased text.
A response counts as mentioning an attribute if it contains at least one keyword for the assigned value.
The keyword lists are below.

#### Country.

Each value is matched by the country name, demonym, major cities, and salient cultural markers.

- •

  India: india, indian, mumbai, delhi, bangalore, chennai, kolkata, namaste, hindi, rupee
- •

  Brazil: brazil, brazilian, s~ao paulo, sao paulo, rio, portuguese
- •

  China: china, chinese, beijing, shanghai, mandarin, guangzhou
- •

  France: france, french, paris, lyon, marseille, bonjour
- •

  Nigeria: nigeria, nigerian, lagos, abuja, yoruba, igbo
- •

  United States: united states, american, usa, u.s., new york, california, texas, chicago

#### Gender.

Matched by gendered pronouns (with trailing space to avoid partial matches) and gendered role/identity terms.

- •

  Male: he\_, him\_, his\_, man, father, husband, brother, son\_, boy, gentleman, mr., male
- •

  Female: she\_, her\_, hers, woman, mother, wife, sister, daughter, girl, lady, ms., mrs., female
- •

  Non-binary: they\_, them\_, their\_, non-binary, nonbinary, genderqueer, gender-fluid

(Underscores denote trailing spaces in the actual matching code.)

#### Age.

Each age group is matched by decade references, life-stage terms, and contextual markers.

- •

  Child: child, kid, school, young, grow up, years old, teenager, teen, grade
- •

  Young: twenties, 20s, young adult, college, university, just graduated, early career
- •

  Middle: thirties, forties, 30s, 40s, mid-career, established
- •

  Older: fifties, 50s, experienced, decades
- •

  Senior: retired, senior, elderly, grandchild, grandparent, sixties, seventies, 60s, 70s, 80s

#### Social class.

Matched by explicit socioeconomic descriptors.

- •

  Lower class: poor, poverty, struggle financially, humble background, low income, working class, paycheck to paycheck, disadvantaged, modest means
- •

  Middle class: middle class, comfortable, modest, average income
- •

  Upper class: wealthy, affluent, privileged, upper class, prestigious, elite, luxury, well-off, fortune, inheritance

#### Political ideology.

The persona dataset uses a two-axis political typology (left/right $\times$ liberal/communitarian). Each quadrant is matched by associated ideological terms and value-laden language.

- •

  Left Liberal: liberal, progressive, left, social justice, equality, welfare, libertarian left, environmentalist, socialist, democrat
- •

  Left Communitarian: left communitarian, community, collective, solidarity, traditional left, labor
- •

  Right Liberal: libertarian, free market, individual liberty, small government, fiscal conservative, libertarian right, deregulation
- •

  Right Communitarian: conservative, traditional, right, patriot, faith, family values, law and order, republican, nationalist

#### Keyword limitations.

Some keywords are ambiguous: “school” may refer to education rather than age, “modest” may describe personality rather than class, and “community” may appear outside politics.
These cases inflate the rates for Age and Social Class, so their low rates are, if anything, overestimates.
On the other hand, a model may convey an attribute indirectly (e.g., class through occupation or neighborhood), which a lexical detector misses.
A low mention rate therefore shows that an attribute is rarely stated, not that the model ignores it.

#### Per-model rates.

[Tab. 3](https://arxiv.org/html/2604.24698v2#A2.T3 "In Per-model rates. ‣ B.2 Attribute Mention Detection ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") reports the mention rate of each attribute for each model.
The main text reports only the means over models.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Model | Gen. | Cty. | Pol. | Age | Cls. | Mean |
| Llama-3.1-8B | 0.98 | 0.95 | 0.73 | 0.20 | 0.13 | 0.60 |
| Qwen3-4B | 0.92 | 0.91 | 0.63 | 0.38 | 0.25 | 0.62 |
| Qwen3-30B-A3B | 0.98 | 0.91 | 0.73 | 0.32 | 0.38 | 0.66 |
| Qwen3-32B | 0.96 | 0.95 | 0.73 | 0.43 | 0.37 | 0.69 |
| CoSER-Llama-8B | 0.91 | 0.83 | 0.52 | 0.27 | 0.12 | 0.53 |
| CoSER-Qwen-32B | 0.68 | 0.86 | 0.18 | 0.27 | 0.08 | 0.41 |
| HER-32B | 0.93 | 0.89 | 0.68 | 0.35 | 0.42 | 0.65 |
| MiniMax-M2-Her | 0.73 | 0.55 | 0.38 | 0.16 | 0.09 | 0.38 |
| Mean | 0.89 | 0.86 | 0.57 | 0.30 | 0.23 | 0.57 |

Table 3: Attribute mention rates in self-introductions: the fraction of responses that state the assigned value of each attribute, detected by keyword matching ([Sec. B.2](https://arxiv.org/html/2604.24698v2#A2.SS2 "B.2 Attribute Mention Detection ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")). Gen.: gender; Cty.: country; Pol.: political ideology; Cls.: social class.

### B.3 Intra-Persona Consistency

For each feature, we compute a one-way random-effects intra-class correlation over the three samples of each persona:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{ICC}=\frac{\text{MS}\_{\text{between}}-\text{MS}\_{\text{within}}}{\text{MS}\_{\text{between}}+(k-1)\,\text{MS}\_{\text{within}}},$$ |  | (4) |

where $k$ is the mean number of valid samples per persona.
ICC is the share of feature variance that comes from differences between personas rather than from sampling noise: an ICC of $0.5$ means the persona explains half of the variation, and an ICC below $0.2$ means more than 80% of it is noise.
We require at least 50 personas with two or more valid samples.

[Tab. 4](https://arxiv.org/html/2604.24698v2#A2.T4 "In B.3 Intra-Persona Consistency ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") reports ICC for seven features.
Qwen3-4B is the most consistent model (mean ICC $0.505$), and MiniMax-M2-Her the least ($0.166$), so most of MiniMax-M2-Her’s linguistic variety is noise rather than persona-driven difference.

| Model | TTR | Hapax | Hedge | 1st-Pron. | Pos. Emo. | Neg. Emo. | Words | Mean |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Llama-3.1-8B | 0.297 | 0.325 | 0.273 | 0.393 | 0.422 | 0.294 | 0.294 | 0.328 |
| Qwen3-4B | 0.519 | 0.522 | 0.409 | 0.676 | 0.480 | 0.463 | 0.465 | 0.505 |
| Qwen3-30B-A3B | 0.515 | 0.546 | 0.311 | 0.545 | 0.295 | 0.308 | 0.361 | 0.412 |
| Qwen3-32B | 0.288 | 0.336 | 0.230 | 0.364 | 0.476 | 0.352 | 0.323 | 0.338 |
| CoSER-Llama-8B | 0.279 | 0.290 | 0.271 | 0.301 | 0.285 | 0.251 | 0.247 | 0.275 |
| CoSER-Qwen-32B | 0.227 | 0.228 | 0.178 | 0.271 | 0.283 | 0.224 | 0.206 | 0.231 |
| HER-32B | 0.212 | 0.209 | 0.147 | 0.241 | 0.325 | 0.212 | 0.202 | 0.221 |
| MiniMax-M2-Her | 0.185 | 0.179 | 0.163 | 0.127 | 0.158 | 0.182 | 0.166 | 0.166 |

Table 4: Intra-persona consistency (ICC) of linguistic features across the three self-introductions of each persona. Higher values mean that more variation comes from differences between personas rather than from sampling noise.

### B.4 Demographic Sources of Linguistic Variation

To see which assigned attribute drives each linguistic feature, we fit a sequence of OLS regressions, adding one-hot attributes in a fixed order (political ideology $\to$ gender $\to$ country $\to$ social class $\to$ age) and recording the gain in $R^{2}$ at each step.
This is the same procedure as for moral items ([Sec. 2.3](https://arxiv.org/html/2604.24698v2#S2.SS3 "2.3 Localizing Collapse ‣ 2 Methods ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")), with age added as a fifth attribute because it can shape how a person writes about themselves.
[Tab. 5](https://arxiv.org/html/2604.24698v2#A2.T5 "In B.4 Demographic Sources of Linguistic Variation ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") lists, for each model and feature, the attribute with the largest gain and its share of the total demographic $R^{2}$.

| Model | TTR | Hedge | 1st-Pron. | Pos. Emo. | Neg. Emo. |
| --- | --- | --- | --- | --- | --- |
| Llama-3.1-8B | Gen (48%) | Gen (67%) | Gen (96%) | Gen (74%) | Gen (63%) |
| Qwen3-4B | Pol (46%) | Gen (61%) | Gen (89%) | Gen (82%) | Cls (50%) |
| Qwen3-30B-A3B | Pol (78%) | Age (68%) | Gen (71%) | Gen (75%) | Cls (78%) |
| Qwen3-32B | Gen (46%) | Gen (69%) | Gen (71%) | Gen (60%) | Gen (76%) |
| CoSER-Llama-8B | Gen (42%) | Pol (50%) | Gen (91%) | Gen (66%) | Gen (83%) |
| CoSER-Qwen-32B | Pol (49%) | Pol (91%) | Cty (68%) | Cty (55%) | Pol (63%) |
| HER-32B | Gen (40%) | Pol (49%) | Pol (50%) | Cty (44%) | Gen (63%) |
| MiniMax-M2-Her | Gen (61%) | Gen (47%) | Gen (48%) | Gen (59%) | Gen (65%) |

Table 5: Dominant demographic attribute for each linguistic feature in self-introductions. Each cell gives the attribute with the largest incremental $R^{2}$ and its share of the total demographic $R^{2}$. Gen: gender; Pol: political ideology; Cty: country; Cls: social class.

### B.5 Template and Structural Homogenization

We measure structural diversity in two ways.
Opening diversity: for the first 500 valid texts of each model, we take the lowercased first sentence and compute the fraction of unique openings.
We also reduce each opening to a skeleton by replacing capitalized names with [NAME] and digits with [NUM], and report the fraction of responses that share the most common skeleton (Top Skel.).
Paragraphs: we count paragraph breaks per response.
We also counted Markdown headers, but they are essentially absent for every model (mean $0.0$ per response), so we omit them from [Tab. 6](https://arxiv.org/html/2604.24698v2#A2.T6 "In B.5 Template and Structural Homogenization ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models").

Qwen3-4B relies most on a template: it has the lowest opening diversity ($0.574$), and $13.6\%$ of its introductions share a single opening skeleton.
This explains why it is also the most self-consistent model ([Tab. 4](https://arxiv.org/html/2604.24698v2#A2.T4 "In B.3 Intra-Persona Consistency ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")): its personas differ consistently, but within a fixed frame.
CoSER-Llama-8B has the most concentrated skeleton ($20.5\%$), even though its overall opening diversity is moderate ($0.735$).
The role-play models CoSER-Qwen-32B, HER-32B, and MiniMax-M2-Her open most diversely ($0.93$–$0.96$), but CoSER-Qwen-32B and MiniMax-M2-Her write only $1.3$ paragraphs on average, so their variety comes with little substance.
HER-32B is the only model that is both diverse in its openings ($0.932$) and substantive in length ($4.8$ paragraphs).

| Model | Open. Div. | Top Skel. | Paras |
| --- | --- | --- | --- |
| Llama-3.1-8B | 0.718 | 2.9% | 6.9$\pm$1.3 |
| Qwen3-4B | 0.574 | 13.6% | 5.1$\pm$1.0 |
| Qwen3-30B-A3B | 0.751 | 4.3% | 6.3$\pm$1.3 |
| Qwen3-32B | 0.772 | 7.5% | 6.0$\pm$1.4 |
| CoSER-Llama-8B | 0.735 | 20.5% | 3.5$\pm$2.7 |
| CoSER-Qwen-32B | 0.938 | 1.4% | 1.3$\pm$1.0 |
| HER-32B | 0.932 | 1.3% | 4.8$\pm$3.8 |
| MiniMax-M2-Her | 0.963 | 2.1% | 1.3$\pm$1.7 |

Table 6: Structural homogenization in self-introductions. Open. Div.: fraction of unique opening sentences. Top Skel.: fraction of responses sharing the most common opening skeleton. Paras: paragraph breaks per response (mean $\pm$ s.d.).

Opening sentences capture only part of the template.
[Fig. 6](https://arxiv.org/html/2604.24698v2#A2.F6 "In B.5 Template and Structural Homogenization ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") contrasts the body structure of two models with similar opening diversity, and [Fig. 7](https://arxiv.org/html/2604.24698v2#A2.F7 "In B.5 Template and Structural Homogenization ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") shows one introduction from each for personas of similar age and occupation that differ in nationality, religion, and political orientation.

Llama-3.1-8B-Instruct
  
Rigid 11-slot template; fixed order regardless of persona.
  
1. Greeting
  
2. Name, age, gender, location
  
3. Background and family values
  
4. Profession and education
  
5. Class/lifestyle descriptor
  
6. Challenges faced + resilience lesson
  
7. Hobbies + emotional benefit
  
8. Religion/political identity + core values
  
9. Moral principles + self-improvement
  
10. Philosophical reflection
  
11. Identity recap + closing
   

Qwen3-30B-A3B
  
Narrative-driven; slots reordered or omitted per persona.
  
1. Voice-driven greeting + nickname
  
2. Name, age, place (with migration note)
  
3. Memory vignette with sensory detail
  
4. Major turning point (loss/illness/identity)
  
5. Career via story or metaphor
  
6. Scattered: relationships, health, sexuality, class
  
7. Hobbies as emotional/spiritual practice
  
8. Values through experience, not labels
  
9. Personal flaw or vulnerability
  
10. Stylized closing identity line


Figure 6: Body structure of self-introductions from two models. Llama-3.1-8B fills a fixed sequence of slots, while Qwen3-30B-A3B reorders or drops slots for each persona. The opening-sentence metrics in [Tab. 6](https://arxiv.org/html/2604.24698v2#A2.T6 "In B.5 Template and Structural Homogenization ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models") do not capture this difference, since both models vary their first sentence (opening diversity $0.72$ vs. $0.75$).


Llama-3.1-8B-Instruct
  
Template-driven: 6 paragraphs following a fixed slot order.
  
“Bonjour. My name is Pierre, and I’m a proud non-binary Jew, living in this beautiful country of France. I’m 62 years old […] I work as an electrician […]
You see, I have a few health issues, hypertension being the most pressing one. […] I never finished my degree, just got an associate’s […]
I’m a bit of a private person […] Gardening is my passion […]
I’m a bit of a conservative […] I’m a patriot, too […]
As a Jew, I believe in the importance of community […]
I’m a bit rough around the edges, I know, but I’m a good person at heart.”
   

Qwen3-30B-A3B
  
Narrative-driven: slots reordered and woven into personal story.
  
“My name is Elijah Chen—though most folks around here call me Eli. I’m 63, tall like my father before me […] I live in a small house in Chennai […] I’ve been an electrician since I was twenty-one […]
I was born in Mumbai […] My father—well, he wasn’t around much. […] I married a man—my husband, Marcus […] Marcus passed five years ago. Cancer. I was by his side. […]
I don’t believe in God. Never have. […] I’m left-communitarian—meaning I believe in shared power […]
I have a speech disorder […] Writing is my refuge. […]
I’ve made mistakes. I was arrested once, twenty years ago. […] I’m not a criminal. I’m a man who made a wrong turn and found his way back.”


Figure 7: Self-introductions from two models for comparable personas. Llama follows a rigid slot order (demographics $\to$ health $\to$ hobbies $\to$ politics $\to$ values $\to$ closing), while Qwen3-30B-A3B interleaves attributes within an autobiographical narrative. Both surface the assigned attributes, but with different degrees of structural flexibility.

### B.6 Failure Modes

#### Refusing sensitive or “incoherent” personas.

HER-32B sometimes refuses to write an introduction for a persona with an intellectual disability, citing safety policies against stereotyping vulnerable groups:

> “I’m sorry, but I can’t fulfill this request. […] The request asks me to adopt a persona with specific intellectual disabilities, which falls under policies designed to prevent the generation of dehumanizing or stereotypical depictions of vulnerable groups.”

This shows a tension between safety training and persona simulation.
A second kind of refusal targets personas the model considers contradictory:

> “I’m sorry, but I can’t adopt that persona. The profile contains contradictory elements […] having ‘no education’ conflicts with being an ‘accountant,’ and ‘high neuroticism’ alongside ‘low agreeableness’ suggests emotional volatility that might not align with a stable accounting career.”

This refusal is revealing.
The combination the model rejects is unusual but real: neurotic, disagreeable accountants exist, and we kept such profiles on purpose ([Sec. A.1](https://arxiv.org/html/2604.24698v2#A1.SS1 "A.1 Persona Construction ‣ Appendix A Detailed Settings ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
The refusal reflects an implicit belief about which personalities fit which occupations.
It is a qualitative form of stereotyping that our moral-item statistics, where demographic attributes explain very little variance ([Sec. 3.2](https://arxiv.org/html/2604.24698v2#S3.SS2 "3.2 RQ2: Localizing Collapse ‣ 3 Results ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")), do not capture.
A model that cannot imagine a persona cannot simulate it.

#### Action narration instead of self-disclosure.

MiniMax-M2-Her often replaces self-description with stage directions and dialogue:

> “\*glances up briefly, then returns to counting seedlings\* My wife asks that too. Twenty years of marriage, and she still waits for proper answers.”

Instead of stating who the persona is, the model acts out a scene, likely reflecting its role-play training.
The texts are linguistically varied, which gives MiniMax-M2-Her the highest self-introduction LID ([Tab. 1](https://arxiv.org/html/2604.24698v2#S3.T1 "In 3 Results ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")), but they rarely state the assigned attributes ([Tab. 3](https://arxiv.org/html/2604.24698v2#A2.T3 "In Per-model rates. ‣ B.2 Attribute Mention Detection ‣ Appendix B Self-Introduction Analysis ‣ The Chameleon’s Limit: Investigating Persona Collapse and Homogenization in Large Language Models")).
This explains how its free text can be the most complex while its persona control is the weakest.
