---
id: arxiv-2607-17384-text
type: material
title: 'Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift'
work_id: arxiv-2607-17384
source_url: https://arxiv.org/html/2607.17384v3
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 52ece7b1b671ac18ad03d642311a87372c9234a9a0aecf4573ee76a383ff9412
---

> Источник: [https://arxiv.org/html/2607.17384v3](https://arxiv.org/html/2607.17384v3). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble LiftNote: This research was funded by NCSC, part of GCHQ. Model inference was performed on the Isambard-AI supercomputer, provided by UKRI.

Junade Ali
email: [jali@turing.ac.uk](mailto:jali@turing.ac.uk)
Affiliation: Defence and National Security Programme, The Alan Turing Institute, London, United Kingdom

###### Abstract.

This paper provides an experimentally verified formal law for calculating the
uplift that diversity of thought provides in Large Language Model (LLM)
ensembles. From
first principles, we derive an exact decomposition of LLM ensemble lift into
rescue and damage masses, which yields a compact heuristic for calculating
uplift. From this we extract the metrics which predict ensemble performance:
an accuracy-adjusted correctness correlation, $\phi\_{\mathrm{adj}}$, together with the
accuracy gap and collective accuracy of the pair. We test the law on 767,520
inferences from ten open-weight models over two graduate-level science
benchmarks, together with a novel agentic cybersecurity benchmark in which
each model conducts digital-forensics investigations by multi-turn tool use
in a network-isolated sandbox (23,520 graded trials including
abstentions); all votes are released openly.
Calibrated once on SuperGPQA at a 40:60 vote split, the heuristic predicts
lift on the calibration set with Spearman’s $\rho=0.84$ and, with its
coefficients frozen, transfers to two datasets never used in calibration ($\rho=0.51$ on GPQA Diamond and
$0.84$ on the forensic tasks), whilst the measured swap mass tracks realised
lift with $R^{2}\geq 0.96$ throughout. Raw $\phi$
has almost no predictive power ($R^{2}\leq 0.09$ throughout); the
accuracy-adjusted $\phi\_{\mathrm{adj}}$ is markedly superior ($R^{2}=0.67$ on SuperGPQA), and the heuristic combining
these metrics is the most stable pre-pooling predictor across the three
datasets.

###### Keywords:

Large Language Models, Ensembles, Diversity-of-Thought

## 1. Introduction

Diversity of thought is the oldest argument for combining predictors: a panel
of imperfect voters can outperform its best member whenever the voters err in
different places. For large language models the argument has been borne out
empirically many times over — sampling a single model repeatedly and taking
a plurality vote reliably raises accuracy ([Wang et al., 2023](https://arxiv.org/html/2607.17384v3#bib.bib42)), and
accuracy continues to climb as more sampled agents are
added ([Li et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib53)). A fast-growing literature now combines *distinct*
models by learned fusion ([Jiang et al., 2023](https://arxiv.org/html/2607.17384v3#bib.bib44)), layered
mixtures ([Wang et al., 2025](https://arxiv.org/html/2607.17384v3#bib.bib52)), cost-driven
cascades ([Chen et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib45)) and reward-guided
routing ([Lu et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib54)). The common finding is that combination helps —
benchmark by benchmark, and usually for reasons diagnosed after the fact.

What this literature does not supply is a means of predicting, before any
pooled inference is run, whether adding a particular weaker model to a stronger
one will help or harm, and at what vote weight. The classical study of
ensemble diversity has repeatedly found that structural indicators of
complementarity correlate weakly and unstably with realised
gain ([Kuncheva and Whitaker, 2003](https://arxiv.org/html/2607.17384v3#bib.bib27); [Shipp and Kuncheva, 2002](https://arxiv.org/html/2607.17384v3#bib.bib25)), and the recent
human–AI evidence is a caution rather than an encouragement: a meta-analysis
of 370 effect sizes found combinations that on average *underperform*
their best member, with outcomes moderated by task type and the partners’
relative solo strength ([Vaccaro et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib55)). It remains unknown whether a compact,
interpretable law can separate the helpful pairings from the harmful ones
across tasks as heterogeneous as multiple-choice science and agentic
tool use.

In this paper, we provide such a law, derived from first principles and
verified experimentally. Our contributions are threefold. Firstly, we derive
the *weighted swap law*: an exact, assumption-free decomposition of
weighted two-model ensemble lift into rescue and damage masses, from which we
extract a compact heuristic for calculating uplift and the metrics that
predict ensemble performance — an accuracy-adjusted correctness
correlation $\phi\_{\mathrm{adj}}$ (the classical $\phi/\phi\_{\mathrm{max}}$), alongside the
accuracy gap and collective accuracy of the pair. Secondly, we
construct the evaluation data the question requires, including a novel agentic
cybersecurity benchmark: ten open-weight models each conduct digital-forensics
investigations by multi-turn tool use inside a network-isolated sandbox,
answering 98 questions graded offline against gold answers. Together with
767,520 multiple-choice inferences over a stratified SuperGPQA sample and
GPQA Diamond, every individual vote is released openly, with abstentions
retained as first-class outcomes — the joint answer distribution that
public leaderboards discard. Finally, we verify the law experimentally,
including on data never used in its calibration: conversion rates fitted once
on SuperGPQA at a 40:60 vote split transfer unchanged to GPQA Diamond and the
forensic benchmark, and the derived metrics are compared head-to-head as
predictors of realised lift with $R^{2}$ and Spearman’s $\rho$. We therefore
seek to answer the following research questions in this paper:

- •

  RQ1: To what extent does a parameter-free swap law predict the
  lift of a weighted two-model ensemble, and does it capture the
  underlying mechanism rather than a mere correlate?
- •

  RQ2: How do the accuracy gap and collective accuracy of a
  model pair govern when weighted pooling helps or harms, and what vote
  weight does each regime demand?
- •

  RQ3: Do conversion rates calibrated once on one benchmark
  transfer to other benchmarks, including agentic tool-use tasks that
  differ in format, difficulty and dependence structure?

The law is the primary contribution; the corpus and the novel agentic
benchmark are what make its verification possible. We release the corpus as
*deciban*: the vote-level records, grades, gold answers and
abstention and error reasons underlying every result in this paper
(Appendix [A](https://arxiv.org/html/2607.17384v3#A1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

## 2. Related Work

The claim that imperfect voters can jointly beat their best member is the
Condorcet Jury Theorem, whose modern treatments established the sharp
transition in majority correctness as independent voters’ competence passes
one half ([Grofman et al., 1983](https://arxiv.org/html/2607.17384v3#bib.bib11); [Boland, 1989](https://arxiv.org/html/2607.17384v3#bib.bib13)), with
heterogeneous-competence
generalisations ([Owen et al., 1989](https://arxiv.org/html/2607.17384v3#bib.bib12); [Kirstein and von Wangenheim, 2010](https://arxiv.org/html/2607.17384v3#bib.bib46)). Its
guarantee erodes under dependent
ballots ([Ladha, 1992](https://arxiv.org/html/2607.17384v3#bib.bib15); [Berg, 1993](https://arxiv.org/html/2607.17384v3#bib.bib16); [Boland et al., 1989](https://arxiv.org/html/2607.17384v3#bib.bib14)),
and its premises have been argued jointly
unsatisfiable ([Dietrich, 2008](https://arxiv.org/html/2607.17384v3#bib.bib32)). Weighting ballots by competence
is a
standard ensemble primitive ([Dietterich, 2000](https://arxiv.org/html/2607.17384v3#bib.bib24); [Kuncheva and Rodríguez, 2014](https://arxiv.org/html/2607.17384v3#bib.bib35))
with online mistake bounds ([Littlestone and Warmuth, 1994](https://arxiv.org/html/2607.17384v3#bib.bib21)); what is not
standard is
deriving the weight from a structural identity rather than fixing or learning
it. Under $K$-way plurality with symmetric distractors the analogous
competence threshold is $1/K$ rather than one half
(Section [4](https://arxiv.org/html/2607.17384v3#S4 "4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

A parallel tradition quantifies *why* combination helps: the ambiguity
decomposition ([Krogh and Vedelsby, 1995](https://arxiv.org/html/2607.17384v3#bib.bib17)), its bias–variance–covariance
counterpart ([Ueda and Nakano, 1996](https://arxiv.org/html/2607.17384v3#bib.bib19)), a recent unified account proving
diversity is coupled to bias and variance rather than
free-standing ([Wood et al., 2023](https://arxiv.org/html/2607.17384v3#bib.bib43)), and its hard extension to zero-one
loss ([Jiang et al., 2017](https://arxiv.org/html/2607.17384v3#bib.bib36)). Pairwise measures are built on the
2$\times$2 correct/incorrect table ([Kuncheva and Whitaker, 2003](https://arxiv.org/html/2607.17384v3#bib.bib27)); only
complementary errors can be repaired ([Sharkey and Sharkey, 1997](https://arxiv.org/html/2607.17384v3#bib.bib20); [Wang et al., 2001](https://arxiv.org/html/2607.17384v3#bib.bib26)),
and disagreement is *signed*, decomposing error by whether the
ensemble is right or wrong ([Brown and Kuncheva, 2010](https://arxiv.org/html/2607.17384v3#bib.bib33)), and diversity has
been treated as a quantity to be managed explicitly ([Brown et al., 2005](https://arxiv.org/html/2607.17384v3#bib.bib29)).
The recurring empirical verdict, however, is that structural diversity
measures track realised gain weakly and unstably across datasets and
combiners ([Kuncheva and Whitaker, 2003](https://arxiv.org/html/2607.17384v3#bib.bib27); [Tang et al., 2006](https://arxiv.org/html/2607.17384v3#bib.bib30); [Shipp and Kuncheva, 2002](https://arxiv.org/html/2607.17384v3#bib.bib25); [Tong et al., 2019](https://arxiv.org/html/2607.17384v3#bib.bib39); [Gong et al., 2019](https://arxiv.org/html/2607.17384v3#bib.bib40))
— in part because raw measures are coupled to the marginal accuracies. This
is the prior any new indicator must beat, and it directly motivates the
accuracy adjustment of Section [3.4](https://arxiv.org/html/2607.17384v3#S3.SS4 "3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). Closer to prediction,
diversity-aware models predict majority-vote accuracy for many-member
ensembles ([Durrant and Lim, 2020](https://arxiv.org/html/2607.17384v3#bib.bib5)), focal diversity selects
high-accuracy deep ensembles ([Wu et al., 2021](https://arxiv.org/html/2607.17384v3#bib.bib6)), and competence-derived
optimal voting weights are classical ([Nitzan and Paroush, 1982](https://arxiv.org/html/2607.17384v3#bib.bib4)); under
zero–one loss our rescue mass and oracle ceiling coincide with the
complementarity potentials of human–AI
teaming ([Hemmer et al., 2025](https://arxiv.org/html/2607.17384v3#bib.bib7)). What remains open is the
weight-dependent realisation of rescue and damage for two
repeated-answer-share voters.

For large language models the literature supplies the phenomena but little of
the structure.
Self-consistency showed plurality voting over sampled reasoning paths reliably
improves a single model ([Wang et al., 2023](https://arxiv.org/html/2607.17384v3#bib.bib42)), with accuracy scaling
in the number of sampled agents ([Li et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib53)); distinct models are
combined by learned fusion ([Jiang et al., 2023](https://arxiv.org/html/2607.17384v3#bib.bib44)), layered
mixtures-of-agents ([Wang et al., 2025](https://arxiv.org/html/2607.17384v3#bib.bib52)), multi-agent
debate ([Du et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib48)), cost-driven cascades ([Chen et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib45))
and learned routing ([Lu et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib54); [Ong et al., 2025](https://arxiv.org/html/2607.17384v3#bib.bib51)), now surveyed as a
taxonomy of fusion strategies ([Mienye and Swart, 2025](https://arxiv.org/html/2607.17384v3#bib.bib58)). The meta-analytic
caution that combinations on average underperform their best
member ([Vaccaro et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib55)) — with complementarity
conditions framed for human–AI pairings in ([Choudhary et al., 2025](https://arxiv.org/html/2607.17384v3#bib.bib47)) —
is the empirical face of the damage penalty we make explicit. To the best of
our knowledge, none of this work
offers a closed-form account of *when* adding a weaker model helps:
combinations are validated benchmark by benchmark, with weights chosen
empirically or learned.

Against this backdrop there is a settled discipline of estimating combination
weights out-of-sample: stacking demands out-of-fold
predictions ([Ting and Witten, 1999](https://arxiv.org/html/2607.17384v3#bib.bib23); [Breiman, 1996](https://arxiv.org/html/2607.17384v3#bib.bib18)), in-sample weight
optimisation overstates gains ([Yao et al., 2018](https://arxiv.org/html/2607.17384v3#bib.bib37)), and ensemble
selection overfits without held-out
validation ([Caruana et al., 2006](https://arxiv.org/html/2607.17384v3#bib.bib31); [Partalas et al., 2010](https://arxiv.org/html/2607.17384v3#bib.bib34); [Large et al., 2019](https://arxiv.org/html/2607.17384v3#bib.bib38)).
Whether combining beats the single best member at all is
contested ([Džeroski and Ženko, 2004](https://arxiv.org/html/2607.17384v3#bib.bib28); [Bauer and Kohavi, 1999](https://arxiv.org/html/2607.17384v3#bib.bib22)); model soups and
routing benchmarks make held-out, cross-distribution evaluation
first-class ([Wortsman et al., 2022](https://arxiv.org/html/2607.17384v3#bib.bib41); [Hu et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib56)), and even
“held-out” benchmarks may be
contaminated ([Deng et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib50); [Balloccu et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib57); [Xu et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib49)).
Our deployment rule is an in-sample argmax of the kind these works
scrutinise, which is why the cross-dataset transfer of
Section [6.1](https://arxiv.org/html/2607.17384v3#S6.SS1 "6.1. The Heuristic Holds Across Datasets ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") — from multiple-choice calibration to an
agentic forensic benchmark of a different format — is central rather than
incidental to our claims.

Reading these literatures together, three gaps remain. Firstly, no prior work we know of offers a closed-form map from an
interpretable complementarity indicator to the lift of a *weighted
two-model* vote over repeated answer shares; raw diversity measures are
also coupled to base accuracy, part of why they correlate weakly with
gain. Secondly, the directional claims of the LLM and
human–AI evidence (complementarity helps, the gap hurts) have rarely been
tested as *quantitative* predictors, with reported $R^{2}$ against
realised lift, across tasks of genuinely different format. Finally, the vote-level data such
a test requires — the joint answer distribution, not leaderboard marginals
— is almost never released. This paper supplies all three: the law, the
head-to-head predictive test spanning an agentic benchmark, and the open
corpus.

## 3. A Weighted Swap Law for Model Pairs

We seek to derive, from first principles, an exact account of when adding a
second model to a primary model by weighted plurality voting improves
accuracy, and to extract from it a compact heuristic computed from a handful
of interpretable quantities. We proceed in five steps: definitions
(Section [3.1](https://arxiv.org/html/2607.17384v3#S3.SS1 "3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")); a complete, assumption-free decomposition of
ensemble lift (Section [3.2](https://arxiv.org/html/2607.17384v3#S3.SS2 "3.2. The Complete Lift Model ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")); the *weighted swap
heuristic* extracted from it (Section [3.3](https://arxiv.org/html/2607.17384v3#S3.SS3 "3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")); an
accuracy-adjusted correctness correlation, $\phi\_{\mathrm{adj}}$, which reduces the
rescue mass to marginal accuracies and one dependence parameter
(Section [3.4](https://arxiv.org/html/2607.17384v3#S3.SS4 "3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")); and an oracle-selection ceiling for the pair
(Section [3.5](https://arxiv.org/html/2607.17384v3#S3.SS5 "3.5. The Oracle-Selection Ceiling ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

### 3.1. Definitions

Let $Q=\{1,\ldots,n\}$ be a set of questions. A *primary* model $A$ and a
*secondary* model $B$ each answer every question $N$ times. For question
$i$, let $\mathbf{s}\_{A}(i)$ and $\mathbf{s}\_{B}(i)$ be the models’ answer-share
vectors over $K$ output categories, so that
$\sum\_{j=1}^{K}s\_{Aj}(i)=\sum\_{j=1}^{K}s\_{Bj}(i)=1$. The categories may
include a *null* category recording abstention (e.g. an unparseable
response), which can win a vote but is never correct.

The primary model carries fixed weight $1$ and the secondary carries weight
$x\geq 0$, giving the weighted vote vector:

|  |  |  |  |
| --- | --- | --- | --- |
| (1) |  | $$\mathbf{v}\_{x}(i)=\mathbf{s}\_{A}(i)+x\,\mathbf{s}\_{B}(i).$$ |  |

Setting $x=0$ recovers the primary alone, $x=1$ gives the models equal
influence and $x\rightarrow\infty$ approaches the secondary alone (exactly so
when the secondary’s plurality is unique; at any finite weight the
primary’s votes break secondary ties they distinguish).

Let $y\_{i}$ denote the correct answer to question $i$ and let
$T\_{x}(i)=\arg\max\_{j}v\_{x,j}(i)$ be the set of categories tied for the highest
weighted vote. The ensemble’s correctness score on question $i$ awards
fractional credit on ties:

|  |  |  |  |
| --- | --- | --- | --- |
| (2) |  | $$P\_{x}(i)=\begin{cases}1/\lvert T\_{x}(i)\rvert,&y\_{i}\in T\_{x}(i),\\ 0,&\text{otherwise}.\end{cases}$$ |  |

The weighted-plurality accuracy is $A\_{x}=\frac{1}{n}\sum\_{i}P\_{x}(i)$, and writing
$\mathrm{ok}\_{A}(i)=\mathbf{1}[A\text{ is correct on }i]$ (with $\mathrm{ok}\_{B}$ defined
similarly), the models’ standalone accuracies are $p=\Pr(A\text{ correct})$
and $q=\Pr(B\text{ correct})$. We define the primary to be the more accurate
model, $p\geq q$, and call $\Delta=p-q\geq 0$ the *accuracy gap* and
$m=(p+q)/2$ the *collective accuracy*. The object of study is the
*lift* of the weighted system over the primary:

|  |  |  |  |
| --- | --- | --- | --- |
| (3) |  | $$L(x)=A\_{x}-p=\frac{1}{n}\sum\_{i=1}^{n}\bigl[P\_{x}(i)-\mathrm{ok}\_{A}(i)\bigr].$$ |  |

Every question falls into exactly one of four sets according to the models’
standalone correctness (stated for binary correctness; on the rare
standalone ties the scores turn fractional and the sets become the fuzzy
cell weights of Section [5.1](https://arxiv.org/html/2607.17384v3#S5.SS1 "5.1. Estimation ‣ 5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"), under which the additive
identities below continue to hold; the selector and probability readings
are binary-case statements):
the *rescue set* $\mathcal{R}$ ($A$
wrong, $B$ right), the *damage set* $\mathcal{D}$ ($A$ right, $B$
wrong), the both-correct set $\mathcal{C}$ and the both-wrong set
$\mathcal{Z}$. Writing
$r$, $d$, $c$ and $z$ for their normalised sizes, we have $r+d+c+z=1$,
$p=c+d$ and $q=c+r$. Subtracting the latter two identities gives the
*accuracy-gap identity*:

|  |  |  |  |
| --- | --- | --- | --- |
| (4) |  | $$\Delta=p-q=(c+d)-(c+r)=d-r,\qquad\text{i.e.}\qquad d=r+\Delta.$$ |  |

Eq. ([4](https://arxiv.org/html/2607.17384v3#S3.E4 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) is exact and assumption-free: the primary’s accuracy
advantage is precisely the excess of damage opportunity over rescue
opportunity. The accuracy gap is therefore not merely correlated with the
prospects of an ensemble; it directly determines how many more questions can
be damaged than rescued.

### 3.2. The Complete Lift Model

We now decompose Eq. ([3](https://arxiv.org/html/2607.17384v3#S3.E3 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) exactly. Define four weight-dependent
conversion rates, each a conditional expectation of the vote outcome on one of
the four sets: the *rescue conversion*
$\alpha\_{x}=E[P\_{x}(i)\mid i\in\mathcal{R}]$, the *damage conversion*
$\gamma\_{x}=E[1-P\_{x}(i)\mid i\in\mathcal{D}]$, the *both-wrong repair*
$\beta\_{x}=E[P\_{x}(i)\mid i\in\mathcal{Z}]$ and the *both-right corruption*
$\kappa\_{x}=E[1-P\_{x}(i)\mid i\in\mathcal{C}]$. In words, $\alpha\_{x}$ is the
rate at which pooling at weight $x$ successfully converts rescue
opportunities, whilst $\gamma\_{x}$ is the rate at which it destroys answers
the primary already had right.

Consider the contribution $P\_{x}(i)-\mathrm{ok}\_{A}(i)$ of each question to
Eq. ([3](https://arxiv.org/html/2607.17384v3#S3.E3 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")). On $\mathcal{R}$ the primary is wrong, so the
contribution is $P\_{x}(i)$ and rescue questions contribute $\alpha\_{x}r$ in
aggregate. On $\mathcal{D}$ the primary is right, so the contribution is
$P\_{x}(i)-1=-(1-P\_{x}(i))$ and damage questions contribute $-\gamma\_{x}d$. The same
reasoning gives $\beta\_{x}z$ on $\mathcal{Z}$ and $-\kappa\_{x}c$ on
$\mathcal{C}$. Summing the four contributions yields the complete model:

|  |  |  |  |
| --- | --- | --- | --- |
| (5) |  | $$L(x)=\alpha\_{x}r-\gamma\_{x}d+\beta\_{x}z-\kappa\_{x}c.$$ |  |

No fitted parameter or approximation appears in Eq. ([5](https://arxiv.org/html/2607.17384v3#S3.E5 "In 3.2. The Complete Lift Model ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")): lift is
successful rescues, less converted damage, plus both-wrong repairs, less
both-right corruption.

### 3.3. The Weighted Swap Heuristic

The first two terms of Eq. ([5](https://arxiv.org/html/2607.17384v3#S3.E5 "In 3.2. The Complete Lift Model ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) concern the questions on which the
models disagree in correctness; these are the questions weighting exists to
arbitrate. We accordingly define the *weighted swap mass*:

|  |  |  |  |
| --- | --- | --- | --- |
| (6) |  | $$S^{\star}(x)=\alpha\_{x}r-\gamma\_{x}d,$$ |  |

so that $L(x)=S^{\star}(x)+\varepsilon(x)$ with residual
$\varepsilon(x)=\beta\_{x}z-\kappa\_{x}c$. The residual is small whenever the vote
rarely repairs questions both models answer incorrectly ($\beta\_{x}z$ small)
and rarely corrupts questions both answer correctly ($\kappa\_{x}c$ small); we
quantify both empirically in Section [6](https://arxiv.org/html/2607.17384v3#S6 "6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). When it is small,

|  |  |  |  |
| --- | --- | --- | --- |
| (7) |  | $$L(x)\approx S^{\star}(x),$$ |  |

which we term the *weighted swap heuristic*. An optional coefficient $\hat{L}\_{\lambda}(x)=\lambda\,S^{\star}(x)$,
$\lambda\approx 1$, can sharpen magnitudes; every $\lambda>0$ preserves
the maximiser, so $\lambda$ never affects weight selection.

Substituting the accuracy-gap identity of Eq. ([4](https://arxiv.org/html/2607.17384v3#S3.E4 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) into
Eq. ([6](https://arxiv.org/html/2607.17384v3#S3.E6 "In 3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) gives the rescue–damage representation:

|  |  |  |  |
| --- | --- | --- | --- |
| (8) |  | $$S^{\star}(x)=(\alpha\_{x}-\gamma\_{x})\,r-\gamma\_{x}\Delta.$$ |  |

Eq. ([8](https://arxiv.org/html/2607.17384v3#S3.E8 "In 3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) separates lift into a net converted rescue opportunity,
$(\alpha\_{x}-\gamma\_{x})r$, and an accuracy-gap penalty, $-\gamma\_{x}\Delta$. Three
consequences follow immediately. Firstly, if $\alpha\_{x}<\gamma\_{x}$ then both
terms are non-positive and the swap mass cannot be positive; when the
concordant-cell residual is negligible, such a weight cannot help. Secondly,
$\alpha\_{x}>\gamma\_{x}$
is necessary for positive swap mass when $\Delta>0$ but not sufficient: for $r>0$
and $\gamma\_{x}>0$, positive swap mass requires

|  |  |  |  |
| --- | --- | --- | --- |
| (9) |  | $$\frac{\alpha\_{x}}{\gamma\_{x}}>1+\frac{\Delta}{r},$$ |  |

i.e. the rescue-conversion advantage must be large enough to overcome the
larger damage pool. Finally, since $S^{\star}(0)=0$, primary-only deployment is
always available, and the selection rule is to use the secondary only if
$\max\_{x>0}S^{\star}(x)>0$, choosing $\hat{x}=\arg\max\_{x\geq 0}S^{\star}(x)$ —
a rule for realised lift to the extent that the residual is negligible
across the candidate weights, which Section [6](https://arxiv.org/html/2607.17384v3#S6 "6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") verifies
across the full weight grid. $S^{\star}(x)$ is piecewise constant, changing
only at finitely many breakpoint weights; we evaluate a fixed rational grid
and report grid optima.

### 3.4. Accuracy-Adjusted Correlation

The rescue mass $r$ in Eq. ([8](https://arxiv.org/html/2607.17384v3#S3.E8 "In 3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) is a joint property of the two
models. We now express it through the models’ marginal accuracies and a single
normalised dependence parameter. Let $X=\mathrm{ok}\_{A}$ and $Y=\mathrm{ok}\_{B}$ be the models’
binary correctness indicators on a uniformly selected question, so
$E[X]=p$, $E[Y]=q$ and $E[XY]=c$. The Pearson correlation of two binaries is
the $\phi$ coefficient:

|  |  |  |  |
| --- | --- | --- | --- |
| (10) |  | $$\phi=\frac{c-pq}{\sqrt{p(1-p)\,q(1-q)}}.$$ |  |

Raw $\phi$, however, is not on a common attainable-maximum scale across
model pairs: the overlap $c$
is at most $c\_{\max}=\min(p,q)=q$ (attained when every secondary-correct
question is also primary-correct), so the maximum feasible correlation
depends on the marginal accuracies themselves. Substituting $c\_{\max}=q$
into Eq. ([10](https://arxiv.org/html/2607.17384v3#S3.E10 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")):

|  |  |  |  |
| --- | --- | --- | --- |
| (11) |  | $$\phi\_{\mathrm{max}}=\frac{q-pq}{\sqrt{p(1-p)\,q(1-q)}}=\sqrt{\frac{q(1-p)}{p(1-q)}}.$$ |  |

We accordingly normalise by this maximum, $\phi\_{\mathrm{adj}}=\phi/\phi\_{\mathrm{max}}$: the
classical $\phi/\phi\_{\max}$ coefficient of the psychometric literature,
equal for $p\geq q$ to Loevinger’s
$H$ ([Loevinger, 1948](https://arxiv.org/html/2607.17384v3#bib.bib1); [Cureton, 1959](https://arxiv.org/html/2607.17384v3#bib.bib2); [Davenport and El-Sanhurry, 1991](https://arxiv.org/html/2607.17384v3#bib.bib3)), which we call the
*accuracy-adjusted correlation* for its role here. It measures how
close the pair sits to the maximum correctness dependence its accuracies
permit. Dividing Eq. ([10](https://arxiv.org/html/2607.17384v3#S3.E10 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) by
Eq. ([11](https://arxiv.org/html/2607.17384v3#S3.E11 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), the square roots cancel:

|  |  |  |  |
| --- | --- | --- | --- |
| (12) |  | $$\phi\_{\mathrm{adj}}=\frac{c-pq}{q-pq}=\frac{c-pq}{q(1-p)}.$$ |  |

From Eq. ([12](https://arxiv.org/html/2607.17384v3#S3.E12 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")),
$1-\phi\_{\mathrm{adj}}=\bigl(q(1-p)-c+pq\bigr)/\bigl(q(1-p)\bigr)=(q-c)/\bigl(q(1-p)\bigr)$,
and since $q=c+r$ the numerator is exactly the rescue mass. Rearranging:

|  |  |  |  |
| --- | --- | --- | --- |
| (13) |  | $$r=q\,(1-p)\,(1-\phi\_{\mathrm{adj}}).$$ |  |

Adjusted $\phi$ is therefore algebraically contained in the rescue-set size:
the rescue mass factorises into the secondary’s competence $q$, the primary’s
error opportunity $1-p$ and the correctness complementarity $1-\phi\_{\mathrm{adj}}$. At
$\phi\_{\mathrm{adj}}=1$ the secondary has no rescue role; at $\phi\_{\mathrm{adj}}=0$ the rescue mass
equals its value under independence, $q(1-p)$; and $\phi\_{\mathrm{adj}}<0$ indicates
models more complementary than independence predicts — equivalently, $1-\phi\_{\mathrm{adj}}$ is the
ratio of observed rescue mass to that expected under independence. Whilst
$\phi\_{\mathrm{adj}}\leq 1$ always, its feasible lower bound depends on the marginals:
it is an accuracy-normalised overlap measure, not a $[-1,1]$ correlation. Substituting
Eq. ([13](https://arxiv.org/html/2607.17384v3#S3.E13 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) into Eq. ([8](https://arxiv.org/html/2607.17384v3#S3.E8 "In 3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) yields the structural form
of the swap law, on which the remainder of this paper rests:

|  |  |  |  |
| --- | --- | --- | --- |
| (14) |  | $$S^{\star}(x)=(\alpha\_{x}-\gamma\_{x})\,q(1-p)(1-\phi\_{\mathrm{adj}})-\gamma\_{x}\Delta.$$ |  |

The swap mass is secondary competence, times primary error opportunity,
times complementarity, times net rescue conversion, less the accuracy-gap
damage.

Two further readings of Eq. ([14](https://arxiv.org/html/2607.17384v3#S3.E14 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) are worth noting. Holding
the conversion rates fixed, its derivative in $\phi\_{\mathrm{adj}}$ is
$-(\alpha\_{x}-\gamma\_{x})\,q(1-p)$: in the useful-conversion regime
($\alpha\_{x}>\gamma\_{x}$) greater complementarity increases the predicted swap
mass. Its derivative
in $\Delta$ at fixed $m$ and $\phi\_{\mathrm{adj}}$ is
$-\tfrac{1}{2}(\alpha\_{x}-\gamma\_{x})(1-\Delta)(1-\phi\_{\mathrm{adj}})-\gamma\_{x}$, which is
non-positive whenever $\alpha\_{x}\geq\gamma\_{x}$.

### 3.5. The Oracle-Selection Ceiling

Finally, we bound what any combiner restricted to *selecting* between
the two models’ standalone answers can achieve; pooling itself can exceed
this only through the both-wrong repair term $\beta\_{x}z$ of
Eq. ([5](https://arxiv.org/html/2607.17384v3#S3.E5 "In 3.2. The Complete Lift Model ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) — in the binary case $L(x)\leq r+\beta\_{x}z$, and
universally $L(x)\leq 1-p$ — and Section [6](https://arxiv.org/html/2607.17384v3#S6 "6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") shows
both concordant-cell components are individually negligible in practice. An oracle selector that
chooses the correct model whenever exactly one of the two is correct is
the best case $\alpha=1$, $\gamma=0$ of Eq. ([6](https://arxiv.org/html/2607.17384v3#S3.E6 "In 3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), and its lift is
exactly the rescue mass:

|  |  |  |  |
| --- | --- | --- | --- |
| (15) |  | $$L\_{\mathrm{oracle}}=r=q\,(1-p)\,(1-\phi\_{\mathrm{adj}}).$$ |  |

Every rescue question is both secondary-correct and primary-wrong, so
$r\leq\min(q,\,1-p)$. Writing $q=m-\Delta/2$ and $1-p=1-m-\Delta/2$, both
bounds shrink linearly in the gap and we obtain the ceiling:

|  |  |  |  |
| --- | --- | --- | --- |
| (16) |  | $$L\_{\mathrm{oracle}}\leq\min(q,\,1-p)=\min(m,\,1-m)-\frac{\Delta}{2}.$$ |  |

The ceiling is tight, and it makes the cost of an accuracy gap unavoidable: at
fixed collective accuracy, every additional point of gap removes half a point
from the maximum lift any selection mechanism — however clever — can
extract from the pair. The accuracy of any such selector is accordingly
bounded by $p+\min(m,1-m)-\Delta/2$; the pooled vote can exceed this only
through both-wrong repair.

## 4. Accuracy Gap & Collective Accuracy

We seek to demonstrate how collective accuracy, the accuracy gap and the
correlation of errors govern the behaviour of the finite weighted vote,
before turning to empirical data. We use a deliberately simple Monte Carlo
illustration: $K=4$ options, $N=24$ samples per model and fractional tie
credit as in Eq. ([2](https://arxiv.org/html/2607.17384v3#S3.E2 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), with competence clustered by question
— each question is either *known* to a model, carrying per-sample
probability $0.95$ of the correct option, or *unknown* ($0.05$, the
remainder spread evenly over the distractors). Both levels sit far from
the plurality threshold $\theta=1/K$, so these votes are nearly
deterministic. A $45\%$ share of questions is instead *contested*: neither model
knows them, both sample at their mean rates, and the finite vote
decides. Contested questions are where pooling can hurt — a
weaker model’s scattered votes can flip a narrow plurality — and they
drive every negative region of Figure [1](https://arxiv.org/html/2607.17384v3#acmlabel1 "Figure 1 ‣ 4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). The joint-knowledge probability sets the dependence: panels 1–3 fix the
clustered share’s latent overlap, giving measured $\phi\_{\mathrm{adj}}\approx 0.5$
mid-range (it varies with the marginals along each sweep), and panel 4
sweeps it. We
sweep the per-sample analogues $m\_{\theta}=(\theta\_{A}+\theta\_{B})/2$ and
$\Delta\_{\theta}=\theta\_{A}-\theta\_{B}$ of the plurality-level $m$ and
$\Delta$ of Section [3](https://arxiv.org/html/2607.17384v3#S3 "3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"), where $\theta$ is a model’s mean
per-sample accuracy; lift is measured, per Eq. ([3](https://arxiv.org/html/2607.17384v3#S3.E3 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), against
the primary’s own 24-vote plurality accuracy $A\_{0}$. Each point averages
15,000 trials; legend ratios split the pooled vote secondary:primary
out of 24 ($x=2/3$, the 40:60 split of Section [6](https://arxiv.org/html/2607.17384v3#S6 "6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
sits between $6{:}18$ and $12{:}12$).

Four Monte Carlo panels: accuracy and lift against collective accuracy, lift against accuracy gap, and lift against adjusted correlation, for five vote splits.


Figure 1. Monte Carlo behaviour of the finite weighted vote under
question-clustered competence; the legend gives the secondary:primary
split of the pooled vote. Left to right: accuracy $A\_{x}$ vs $m\_{\theta}$; lift
over the primary’s own plurality vs $m\_{\theta}$ (both at
$\Delta\_{\theta}=0.10$); lift vs $\Delta\_{\theta}$ ($m\_{\theta}=0.30$);
lift vs $\phi\_{\mathrm{adj}}$ ($m\_{\theta}=0.40$, $\Delta\_{\theta}=0.10$). Panels
1–3 fix the latent joint-knowledge overlap (measured
$\phi\_{\mathrm{adj}}\approx 0.5$ mid-range)Four Monte Carlo panels: accuracy and lift against collective accuracy, lift against accuracy gap, and lift against adjusted correlation, for five vote splits.

As shown in Figure [1](https://arxiv.org/html/2607.17384v3#acmlabel1 "Figure 1 ‣ 4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") (left), accuracy follows a soft
S-shape — contested questions give the vote a knee near the plurality
threshold — then climbs towards the pair’s joint knowledge. Lift
over the primary’s own plurality (second panel) is hump-shaped: the rescue
opportunity $q(1-p)$ of Eq. ([13](https://arxiv.org/html/2607.17384v3#S3.E13 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) is scarce whilst the
secondary knows little and vanishes as the primary’s knowledge saturates,
so the balanced $12{:}12$ vote peaks at ${\approx}{+}8$pp near
$m\_{\theta}=0.45$ ($6{:}18$ at ${\approx}{+}3$pp) — yet every weight is
harmful below $m\_{\theta}\approx 0.3$, where contested questions dominate
the ledger and rescue is scarce ($-5.5$pp at $12{:}12$). The extremes fail in opposite ways: $1{:}23$ is
too small to overturn the primary anywhere and captures almost none of
the available rescue, whilst $18{:}6$ hands control to the weaker model
and is harmful at every $m\_{\theta}$. (Figure [5](https://arxiv.org/html/2607.17384v3#acmlabel5 "Figure 5 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"), separates the self-consistency and diversity
contributions.)

The third panel sweeps the per-sample gap at fixed $m\_{\theta}=0.30$.
Between equals even heavy over-weighting costs little ($18{:}6$ gains
$+4.9$pp at $\Delta\_{\theta}=0$), however widening the gap lowers lift at
every weight, qualitatively as the penalty $-\gamma\_{x}\Delta$ of
Eq. ([14](https://arxiv.org/html/2607.17384v3#S3.E14 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) requires, and the collapse is weight-ordered:
$18{:}6$ turns harmful by $\Delta\_{\theta}\approx 0.02$ and falls to
$-47$pp, whilst by $\Delta\_{\theta}\approx 0.12$ even the $6{:}18$ and
balanced votes turn negative ($-14$pp at $12{:}12$ by
$\Delta\_{\theta}=0.30$) — the forensic regime of
Section [7.1](https://arxiv.org/html/2607.17384v3#S7.SS1 "7.1. Lift on the Forensic Dataset ‣ 7. Ensemble Lift in Practice ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). Greater secondary weight
tolerates a smaller accuracy gap.

The fourth panel varies the dependence itself: lift falls essentially
linearly as $\phi\_{\mathrm{adj}}$ rises — the $(1-\phi\_{\mathrm{adj}})$ release of rescue mass
that Eq. ([14](https://arxiv.org/html/2607.17384v3#S3.E14 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) prescribes — from $+20$pp at
$\phi\_{\mathrm{adj}}=-0.3$ for the balanced vote (negative $\phi\_{\mathrm{adj}}$: more
complementary than independence, Section [3.4](https://arxiv.org/html/2607.17384v3#S3.SS4 "3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), through $+7$pp at
$\phi\_{\mathrm{adj}}=0.5$, to ${\approx}{+}1$pp at its ceiling ($\phi\_{\mathrm{adj}}\approx 0.8$), where the clustered knowledge nests and only contested questions
keep rescue open. The $18{:}6$ vote is harmful at
every dependence level here: weight, not complementarity, is its problem.
Complementarity, not raw accuracy, is the fuel of lift: high
overall accuracy does not preclude it. These simulations fix the
qualitative mechanism we test next.

## 5. Datasets & Experimental Setup

We seek to test the swap law on heterogeneous tasks: two multiple-choice
science benchmarks and one agentic digital-forensics benchmark, summarised in
Table [1](https://arxiv.org/html/2607.17384v3#S5.T1 "Table 1 ‣ 5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). All three use the same fleet of ten open-weight
models (20–31B parameters), the same 24 samples per model–question pair and
temperature 1.0 throughout, with chain-of-thought reasoning enabled. Answer
positions on both multiple-choice question (MCQ) datasets were randomised
per sample with a balanced
schedule shared across models; for 4-option questions the 24 samples cover
all 24 orderings exactly once.

Table 1. The three evaluation datasets.

| Dataset | Questions | Answer format | Trials |
| --- | --- | --- | --- |
| SuperGPQA (sample) | 3,000 | MCQ, 4–10 options | 720,000 |
| GPQA Diamond | 198 | MCQ, 4 options | 47,520 |
| Forensic (agentic) | 98 | free text, tool use | 23,520 |

Trials = graded model–question–sample outcomes across the fleet, abstentions included.

SuperGPQA. A fixed 3,000-question stratified sample of the
26,529-question SuperGPQA benchmark ([Du and others, 2025](https://arxiv.org/html/2607.17384v3#bib.bib10)) (4–10 options
per question), drawn once before any inference with proportional allocation
over discipline–difficulty strata plus a stress phase oversampling hard
strata; it serves as the calibration set, and all SuperGPQA statistics
target this fixed design rather than the full benchmark.

GPQA Diamond. All 198 questions of the graduate-level GPQA Diamond
benchmark ([Rein et al., 2024](https://arxiv.org/html/2607.17384v3#bib.bib8)) (4 options).

Forensic. Five real digital-forensics challenges (98 questions):
disk-image and network-capture analysis performed agentically — multi-turn
tool use inside a network-isolated sandbox — with free-text answers graded
offline against gold answers, using an external judge model for rubric-tier
questions. Answers are unconstrained strings; vote categories map every
answer graded correct to one gold category, group incorrect answers by
normalised string equality and treat unanswered questions as abstentions.

Table 2. Model accuracy by dataset: single-sample accuracy and 24-vote plurality accuracy (%).

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Model | SG-1 | SG-24 | GD-1 | GD-24 | F-1 | F-24 |
| Gemma-4-31B | 66.1 | 69.0 | 86.0 | 88.1 | 20.2 | 22.4 |
| Qwen3.6-27B | 64.9 | 67.9 | 84.4 | 86.1 | 26.5 | 31.1 |
| Gemma-4-26B-A4B | 61.0 | 64.8 | 80.3 | 84.1 | 15.3 | 13.8 |
| Qwen3-30B-Think. | 56.0 | 59.4 | 71.4 | 72.2 | 10.8 | 13.3 |
| DiffusionGemma-26B | 49.5 | 54.9 | 66.2 | 71.5 | 0.8 | 0.0 |
| GLM-4.7-Flash | 50.3 | 53.2 | 63.6 | 66.2 | 9.2 | 12.8 |
| Nemotron-3-Nano | 47.4 | 50.7 | 63.7 | 65.7 | 12.1 | 13.8 |
| GPT-OSS-20B | 44.4 | 49.5 | 65.0 | 69.4 | 1.1 | 0.0 |
| Magistral-Small | 36.5 | 47.4 | 48.4 | 58.6 | 6.8 | 11.2 |
| MedGemma-27B | 39.7 | 46.7 | 48.3 | 53.5 | 5.4 | 7.1 |

SG = SuperGPQA, GD = GPQA Diamond, F = Forensic; -1 = single sample, -24 = plurality of 24 samples (fractional tie credit). Unparseable outputs count as abstentions.

Table [2](https://arxiv.org/html/2607.17384v3#S5.T2 "Table 2 ‣ 5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") reports single-sample and 24-vote plurality
accuracy. The fleet spans a wide range on every dataset (46.7%–69.0%
plurality on SuperGPQA; 0%–31.1% forensic), so pairs realise accuracy
gaps from under 1pp to over 30pp; the forensic tasks are much harder, with
the strongest model at 26.5% per sample and two models never winning a
plurality.

Abstention is a first-class output in our framework (the null category of
Section [3.1](https://arxiv.org/html/2607.17384v3#S3.SS1 "3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")): on the MCQ corpora unparseable inferences —
dominated by reasoning truncated at the token cap — enter the vote vectors
as null votes rather than guesses; on the forensic tasks the equivalent
is a question left unanswered at trace termination. Per-model abstention rates
are reported in Table [7](https://arxiv.org/html/2607.17384v3#A4.T7 "Table 7 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") (Appendix [D](https://arxiv.org/html/2607.17384v3#A4 "Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

### 5.1. Estimation

All quantities of Section [3](https://arxiv.org/html/2607.17384v3#S3 "3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") are estimated per ordered model
pair, per dataset. For each question we form the empirical share vectors of
Eq. ([1](https://arxiv.org/html/2607.17384v3#S3.E1 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) from the 24 votes (canonical answer categories plus null)
and score the pooled vote by Eq. ([2](https://arxiv.org/html/2607.17384v3#S3.E2 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")). A model’s own correctness
$\mathrm{ok}\_{A}(i)$ is its 24-vote plurality score at $x=0$, which is fractional on
ties; the set masses $r,d,c,z$ are then estimated as means of products (e.g. $r=\frac{1}{n}\sum\_{i}(1-\mathrm{ok}\_{A}(i))\,\mathrm{ok}\_{B}(i)$), under which the identities of
Eq. ([4](https://arxiv.org/html/2607.17384v3#S3.E4 "In 3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) and Eq. ([13](https://arxiv.org/html/2607.17384v3#S3.E13 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) continue to hold exactly.
Conversion rates generalise correspondingly. Writing $a\_{i}=\mathrm{ok}\_{A}(i)$,
$b\_{i}=\mathrm{ok}\_{B}(i)$ and the fuzzy weights $w\_{i}^{\mathcal{R}}=(1-a\_{i})b\_{i}$,
$w\_{i}^{\mathcal{D}}=a\_{i}(1-b\_{i})$, $w\_{i}^{\mathcal{Z}}=(1-a\_{i})(1-b\_{i})$,
$w\_{i}^{\mathcal{C}}=a\_{i}b\_{i}$:

|  |  |  |  |
| --- | --- | --- | --- |
| (17) |  | $$\alpha\_{x},\beta\_{x}=\frac{\sum\_{i}(P\_{x}(i)-a\_{i})\,w\_{i}^{\bullet}}{\sum\_{i}w\_{i}^{\bullet}},\qquad\gamma\_{x},\kappa\_{x}=\frac{\sum\_{i}(a\_{i}-P\_{x}(i))\,w\_{i}^{\bullet}}{\sum\_{i}w\_{i}^{\bullet}},$$ |  |

with $\bullet$ the corresponding cell ($\mathcal{R},\mathcal{Z}$
gain-signed; $\mathcal{D},\mathcal{C}$ loss-signed); the decomposition of
Eq. ([5](https://arxiv.org/html/2607.17384v3#S3.E5 "In 3.2. The Complete Lift Model ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) remains exact, and each rate reduces to its
conditional reading ($\alpha\_{x}=E[P\_{x}\mid\mathcal{R}]$, etc.) in the
binary case. With fractional scores the rates are signed contributions and
the sign-based consequences of Section [3.3](https://arxiv.org/html/2607.17384v3#S3.SS3 "3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") are stated for
the binary case; ties are rare (2.65% of model–question votes), and the
Bernoulli-form denominator of Eq. ([10](https://arxiv.org/html/2607.17384v3#S3.E10 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) is retained as the
definition of empirical $\phi$.
Cells with zero mass have undefined rates and contribute zero. Within each
pair the primary is the model with the higher plurality accuracy, giving 45
ordered pairs per dataset. Weights are evaluated on a fixed 25-point
rational grid from $x=1/24$ to $x=24$ ($x=a/b$ with the vote computed as
$b\,\mathbf{s}\_{A}+a\,\mathbf{s}\_{B}$ in integer counts), so tie detection is
exact; where several weights tie on $S^{\star}$ we take the smallest.

Heatmap of accuracy-adjusted correlation for all SuperGPQA model pairs.


Figure 2. Accuracy-adjusted correlation $\phi\_{\mathrm{adj}}$ across model pairs, SuperGPQAHeatmap of accuracy-adjusted correlation for all SuperGPQA model pairs.

Figure [2](https://arxiv.org/html/2607.17384v3#acmlabel2 "Figure 2 ‣ 5.1. Estimation ‣ 5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") charts $\phi\_{\mathrm{adj}}$ across the SuperGPQA pairs
(models ordered by accuracy; the raw $\phi$ counterpart is
Figure [9](https://arxiv.org/html/2607.17384v3#acmlabel9 "Figure 9 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") in Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"), and both quantities
are computable per pair for every dataset from the released votes). The
adjustment matters in
practice: raw $\phi$ spans 0.37–0.71 on SuperGPQA and is systematically
depressed for pairs with large accuracy gaps, precisely because $\phi\_{\mathrm{max}}<1$;
$\phi\_{\mathrm{adj}}$ removes this artefact and spans 0.48–0.78. On the forensic tasks
dependence is more extreme in both directions ($\phi\_{\mathrm{adj}}$ from 0.26 to 1.00)
— some pairs are as correlated as their accuracies permit, leaving no
rescue mass at all.

## 6. Calibrating the Heuristic at 40:60

We seek to calibrate the weighted swap heuristic once, on the largest
dataset, and then test whether it transfers unchanged to the others. The
operating weight is fixed throughout at a secondary:primary 40:60 vote
split ($x=2/3$):
Section [4](https://arxiv.org/html/2607.17384v3#S4 "4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") shows sub-balanced pooling the most
gap-tolerant regime, and $x=2/3$ is the largest grid weight at which
SuperGPQA’s mean pair lift remains positive (Figure [7](https://arxiv.org/html/2607.17384v3#acmlabel7 "Figure 7 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

On the 45 SuperGPQA pairs at 40:60 the measured conversion rates average
$\bar{\alpha}=0.338$ and $\bar{\gamma}=0.165$ (question-level bootstrap 95%
intervals $[0.32,0.36]$ and $[0.16,0.17]$): the
pooled vote converts roughly a third of rescue opportunities whilst destroying
a sixth of the damage pool. Regressing observed lift on the measured swap mass
through the origin gives $\lambda=1.04$ (bootstrap interval
$[1.00,1.08]$, containing $\lambda=1$); the concordant-cell residual
$\varepsilon$ is small and slightly positive (mean $+0.18$pp against a lift
standard deviation of 1.3pp); its components are small on average
(the mean of each, $E[\beta\_{x}z]$ and $E[\kappa\_{x}c]$, is below $0.12$pp
in magnitude on every dataset), and across the full weight grid $|\varepsilon|$ averages
$\leq 0.2$pp (maximum 1.64pp over all 3,510 pair–weight cells). Selecting
each pair’s weight in-sample by the swap-mass rule recovers a lift within
0.1pp of the grid optimum for 131 of 135 pairs (mean shortfall
$\leq 0.02$pp; held-out, Section [6.2](https://arxiv.org/html/2607.17384v3#S6.SS2 "6.2. Held-Out Validation ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

The calibrated, transportable form of the heuristic instantiates
Eq. ([14](https://arxiv.org/html/2607.17384v3#S3.E14 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) with the SuperGPQA-averaged conversion rates:

|  |  |  |  |
| --- | --- | --- | --- |
| (18) |  | $$\hat{S}=(\bar{\alpha}-\bar{\gamma})\,q(1-p)(1-\phi\_{\mathrm{adj}})-\bar{\gamma}\,\Delta,$$ |  |

which requires only the pair’s marginal accuracies and $\phi\_{\mathrm{adj}}$ — no
pooled inference, though it does require labelled repeated outputs from
both models on the target task (at the boundaries $q=0$ and $p=1$, where
$\phi\_{\mathrm{adj}}$ is undefined, $\hat{S}$ is computed through the equivalent form
$(\bar{\alpha}-\bar{\gamma})r-\bar{\gamma}\Delta$). Throughout, $R^{2}$ is the squared Pearson correlation between predictor and
observed lift per dataset; for $\hat{S}$, which predicts lift’s own scale,
we also report the identity prediction’s direct error.
As shown in Figure [6](https://arxiv.org/html/2607.17384v3#acmlabel6 "Figure 6 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")
(Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), $\hat{S}$
explains the SuperGPQA lifts well ($R^{2}=0.71$, Spearman’s $\rho=0.84$,
N=45, RMSE 0.9pp).

Scatter plots of calibrated heuristic against observed lift on GPQA Diamond and the forensic dataset.


Figure 3. The SuperGPQA-calibrated heuristic transferred to GPQA Diamond and the forensic datasetScatter plots of calibrated heuristic against observed lift on GPQA Diamond and the forensic dataset.

### 6.1. The Heuristic Holds Across Datasets

We then apply Eq. ([18](https://arxiv.org/html/2607.17384v3#S6.E18 "In 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) — $\bar{\alpha}$, $\bar{\gamma}$ frozen at
their SuperGPQA values — to the 45 GPQA Diamond and 45 forensic pairs
(Figure [3](https://arxiv.org/html/2607.17384v3#acmlabel3 "Figure 3 ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), comparing against the single-metric
alternatives $m$, $\Delta$, $\phi$ and $\phi\_{\mathrm{adj}}$;
Table [3](https://arxiv.org/html/2607.17384v3#S6.T3 "Table 3 ‣ 6.1. The Heuristic Holds Across Datasets ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") reports $R^{2}$ and Spearman’s $\rho$ against
observed lift.

Table 3. Predicting pair-level lift at the 40:60 weighting: $R^{2}$ and Spearman’s $\rho$ against observed lift, for the swap-law quantities and single-metric alternatives.

|  | SuperGPQA | | GPQA Diamond | | Forensic | |
| --- | --- | --- | --- | --- | --- | --- |
| Predictor | $R^{2}$ | $\rho$ | $R^{2}$ | $\rho$ | $R^{2}$ | $\rho$ |
| Measured swap mass $S^{\star}$ | 0.99 | 0.99 | 0.96 | 0.98 | 1.00 | 1.00 |
| Calibrated heuristic $\hat{S}$ | 0.71 | 0.84 | 0.28 | 0.51 | 0.73 | 0.84 |
| Rescue mass $r$ | 0.81 | 0.92 | 0.32 | 0.58 | 0.18 | 0.60 |
| Collective accuracy $m$ | 0.28 | -0.60 | 0.18 | -0.43 | 0.00 | 0.07 |
| Accuracy gap $\Delta$ | 0.56 | -0.77 | 0.18 | -0.42 | 0.68 | -0.80 |
| Adjusted correlation $\phi\_{\mathrm{adj}}$ | 0.67 | -0.85 | 0.18 | -0.40 | 0.08 | -0.42 |
| Raw correlation $\phi$ | 0.00 | -0.04 | 0.01 | 0.11 | 0.08 | 0.40 |

N=45 pairs per dataset ($\phi$ and $\phi\_{\mathrm{adj}}$ on the forensic dataset over the 28 pairs where defined). $\hat{S}$ uses conversion rates calibrated once on SuperGPQA. $S^{\star}$ requires the pooled votes (retrospective); all other rows are computable pre-pooling.

Three results stand out. Firstly, the measured swap mass $S^{\star}$ — an
identity check computed from the same pooled votes as the lift it tracks,
not a prediction — is near-exact everywhere ($R^{2}\geq 0.96$ and $\rho\geq 0.98$
on all three datasets; Figure [4](https://arxiv.org/html/2607.17384v3#acmlabel4 "Figure 4 ‣ 6.1. The Heuristic Holds Across Datasets ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")): the concordant-cell
residual of Eq. ([5](https://arxiv.org/html/2607.17384v3#S3.E5 "In 3.2. The Complete Lift Model ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) is negligible in practice, so the
heuristic’s two-term truncation loses almost nothing.

Secondly, no single quantity is stable across all three datasets. The
rescue mass leads on the MCQ datasets ($\rho=0.92$ and $0.58$) yet
degrades sharply on the forensic transfer ($R^{2}=0.18$), where wide gaps
make the damage term decisive; the accuracy gap shows the mirror pattern
($\rho=-0.77$ and $-0.80$, but $-0.42$ on GPQA Diamond); $\phi\_{\mathrm{adj}}$ is
strong on SuperGPQA ($\rho=-0.85$) yet unstable elsewhere; raw $\phi$ has
little predictive power anywhere ($R^{2}\leq 0.09$) — without the accuracy adjustment of
Eq. ([12](https://arxiv.org/html/2607.17384v3#S3.E12 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), inter-model correlation says almost nothing about
ensemble prospects.

Finally, the transported heuristic $\hat{S}$ — combining these
quantities — is the most stable pre-pooling score across the three
datasets (worst-case $R^{2}=0.28$ against $0.18$ for the rescue mass) and
the strongest on the forensic transfer ($\rho=0.84$; question-level
bootstrap 95% intervals $[0.26,0.65]$ on GPQA Diamond and $[0.68,0.88]$
on forensic), despite its conversion rates never being refitted. On the calibration set $|\rho|$ for $\phi\_{\mathrm{adj}}$ is marginally higher (0.85
against 0.84); $\phi\_{\mathrm{adj}}$ alone degrades off-calibration whilst the
heuristic does not. The forensic transfer is notable: task format (free-text, tool-mediated,
abstention-heavy), accuracy regime and dependence structure all differ,
yet the association holds (identity RMSE 3.5pp). GPQA Diamond is the weakest transfer ($R^{2}=0.28$): with 198 questions
per-pair lift is noisy and magnitude calibration trails a zero-lift
baseline (identity RMSE 1.9pp against 1.7pp), so off-calibration $\hat{S}$
is a rank screen rather than a point predictor; the ordering ($\rho=0.51$)
remains informative.

Scatter plots of measured swap mass against observed lift on all three datasets, tightly following the identity line.


Figure 4. Measured (retrospective) swap mass against observed lift at
40:60 on all three datasetsScatter plots of measured swap mass against observed lift on all three datasets, tightly following the identity line.

### 6.2. Held-Out Validation

We seek to test the swap-mass rule and the heuristic out of sample on the
calibration dataset itself: the 3,000 SuperGPQA questions are split at
random into a 40% calibration set and a disjoint 60% evaluation set, over
500 splits, at equal weighting ($x=1$), where pooling harms the average
pair (Figure [7](https://arxiv.org/html/2607.17384v3#acmlabel7 "Figure 7 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")). Table [4](https://arxiv.org/html/2607.17384v3#S6.T4 "Table 4 ‣ 6.2. Held-Out Validation ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") reports the
results. Both transfer: weights chosen by the swap-mass rule on the
calibration questions turn a mean held-out lift of $-0.77$pp under equal
weighting into $+0.51$pp, and the heuristic calibrated on the same split
predicts held-out lift with $\rho=0.83$ whilst raw $\phi$ remains at
$\rho\leq 0.03$.

Table 4. Held-out validation on SuperGPQA at equal weighting.

|  |  |
| --- | --- |
| Quantity | Value |
| Held-out lift, swap-mass-selected weight | $+0.51$pp |
| Held-out lift, equal weighting throughout | $-0.77$pp |
| $\rho(\hat{S},\ \text{held-out lift})$, coefficients transported | 0.83 |
| $\rho(\hat{S},\ \text{held-out lift})$, all quantities out of sample | 0.80 |
| $\rho(\phi,\ \text{held-out lift})$, out of sample | 0.03 |
| $\bar{\alpha}$ (calibration split) | $0.47\pm 0.01$ |
| $\bar{\gamma}$ (calibration split) | $0.28\pm 0.01$ |

N=45 pairs; 500 random 40/60 question splits of the 3,000 SuperGPQA questions; $x=1$; means ($\pm$ sd) across splits; $\rho$ is Spearman’s.

### 6.3. Sample Efficiency

We seek to compare the heuristic with estimating lift directly at equal
sample cost, since both require labelled outputs from the two models: for
$k$ of the 24 samples drawn at random per model–question cell, each is
computed on the 45 SuperGPQA pairs and ranked against the true 24-sample
lift at 40:60. Table [5](https://arxiv.org/html/2607.17384v3#S6.T5 "Table 5 ‣ 6.3. Sample Efficiency ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") reports the results. Where repeated
samples exist direct estimation dominates ($\rho=0.90$ from two samples per
model against $0.73$ for $\hat{S}$), however the heuristic remains
informative from a single sample ($\rho=0.73$), where a sub-balanced vote
is degenerate (the primary’s single vote cannot be outweighed) and lift
cannot be estimated at all: it screens on the per-question correctness that
ordinary single-pass evaluations already provide.

Table 5. Ranking pairs by lift from $k$ samples per model, SuperGPQA at 40:60.

| $k$ | Labelled outputs | $\rho$, $\hat{S}$ | $\rho$, direct | $\rho$, $\phi$ |
| --- | --- | --- | --- | --- |
| 1 | 6,000 | 0.73 | — | $-0.27$ |
| 2 | 12,000 | 0.73 | 0.90 | $-0.27$ |
| 4 | 24,000 | 0.78 | 0.93 | $-0.17$ |
| 8 | 48,000 | 0.80 | 0.95 | $-0.11$ |
| 24 | 144,000 | 0.84 | 1.00 | $-0.04$ |

N=45 pairs; Spearman’s $\rho$ against the true 24-sample lift, mean over 200 random draws of $k$ samples per model–question cell ($k=24$ is the full data). Labelled outputs $=2k\times 3{,}000$ per pair. —: with one sample per model the 40:60 vote reduces to the primary alone (lift identically zero).

## 7. Ensemble Lift in Practice

We seek finally to quantify the lift that weighted pairing actually delivers,
and how the deployment weight must adapt across regimes (weight-response
curves are charted in Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

On SuperGPQA, pooling at 40:60 is worthwhile for well-chosen pairs: 20 of 45
pairs gain, with the largest reaching +2.7pp
(Table [9](https://arxiv.org/html/2607.17384v3#A4.T9 "Table 9 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"), Appendix [D](https://arxiv.org/html/2607.17384v3#A4 "Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")); the top-accuracy
pair (Gemma-4-31B with Qwen3.6-27B, the two most accurate)
gains +1.5pp at 40:60 and peaks at +1.9pp at equal weighting, lifting
plurality accuracy from 69.0% to 70.8%. The top of
Table [9](https://arxiv.org/html/2607.17384v3#A4.T9 "Table 9 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") is not the most accurate pairs but the most
complementary ones amongst near-peers — the $q(1-p)(1-\phi\_{\mathrm{adj}})$
geometry of Eq. ([13](https://arxiv.org/html/2607.17384v3#S3.E13 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

The structural role of the accuracy gap is visible across the full pair
population: observed lift at 40:60 declines with $\Delta$ on every dataset
($\rho=-0.77$, $-0.42$, $-0.80$), steepest on the forensic tasks where
damage conversion is largest (Figure [10](https://arxiv.org/html/2607.17384v3#acmlabel10 "Figure 10 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

On GPQA Diamond the picture is more cautionary: only 11 of 45 pairs gain
at 40:60, and for the top-accuracy pair every positive weight is harmful
—
one of the four (of 135) where the in-sample rule misses: it selects
$x=5/4$ for a predicted $+0.13$pp that realises $-0.25$pp instead of
$\hat{x}=0$.
For 11 of 45 GPQA Diamond pairs (and 35 of 45 forensic pairs) no grid weight
produces positive lift: primary-only deployment is a live option, not a
failure mode.

### 7.1. Lift on the Forensic Dataset

The forensic dataset operates in a different regime: collective accuracy is
low (the harmful low-$m\_{\theta}$ foot of Figure [1](https://arxiv.org/html/2607.17384v3#acmlabel1 "Figure 1 ‣ 4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")),
accuracy gaps between
neighbouring models are large relative to rescue mass, and abstention is
heavy. Pooling at 40:60 is accordingly harmful — only 7 of 45 pairs gain, and
the mean lift across pairs is $-3.5$pp — however this need not make the
secondary useless; the weight regime matters.

Table 6. Forensic dataset: weighted-plurality accuracy of the top-accuracy pair (Qwen3.6-27B primary, Gemma-4-31B secondary) as the secondary’s vote weight $x$ varies.

| Weight $x$ | Accuracy % | Lift (pp) | $S^{\star}$ (pp) |
| --- | --- | --- | --- |
| 0 (primary only) | 31.1 | +0.00 | +0.00 |
| 1/12 | 32.7 | +1.53 | +1.28 |
| 1/11 | 32.7 | +1.53 | +1.28 |
| 1/6 | 32.7 | +1.53 | +1.28 |
| 2/3 | 30.6 | -0.51 | -0.77 |
| 1 | 30.6 | -0.51 | -0.77 |
| 4 | 22.4 | -8.67 | -8.93 |

98 questions; fractional tie credit. The optimum sits on the plateau from $x=1/12$ to $1/6$.

Table [6](https://arxiv.org/html/2607.17384v3#S7.T6 "Table 6 ‣ 7.1. Lift on the Forensic Dataset ‣ 7. Ensemble Lift in Practice ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") traces the top-accuracy pair (Qwen3.6-27B primary at
31.1%, Gemma-4-31B secondary at 22.4%) across vote weights;
Figure [8](https://arxiv.org/html/2607.17384v3#acmlabel8 "Figure 8 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") (Appendix [C](https://arxiv.org/html/2607.17384v3#A3 "Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) charts the
strongest pairs. At 40:60 the pair’s lift
is $-0.5$pp, whilst de-weighting the secondary to the plateau between
$x=1/12$ and $x=1/6$ converts the same pair to +1.5pp (32.7% against the
primary’s 31.1%). The gain rests on
two rescued questions from one challenge (one full, one fractional); a
question-level interval reaches zero. Past equal weighting the pair collapses towards secondary-only
performance ($-8.7$pp at $x\geq 4$) — the $-\Delta$ limit of
Section [3.3](https://arxiv.org/html/2607.17384v3#S3.SS3 "3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") made visible. The mechanism is the one Eq. ([9](https://arxiv.org/html/2607.17384v3#S3.E9 "In 3.3. The Weighted Swap Heuristic ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) formalises: with
$r=2.6$pp and $\Delta=8.7$pp, weights with $\gamma\_{x}>0$ need
$\alpha\_{x}/\gamma\_{x}>1+\Delta/r\approx 4.4$; on the plateau $\gamma\_{x}=0$
and $S^{\star}=\alpha\_{x}r>0$ directly — weights too small to outvote a
unified primary, yet large enough to break its ties.

## 8. Beyond Pairs: Three-Model Ensembles

We close by indicating where the framework leads beyond model pairs. The
four-set partition of Section [3.1](https://arxiv.org/html/2607.17384v3#S3.SS1 "3.1. Definitions ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") generalises directly: with two
secondaries the questions fall into $2^{3}$ correctness cells, the accuracy-gap
identity applies to each secondary separately and the oracle-selection
ceiling of Section [3.5](https://arxiv.org/html/2607.17384v3#S3.SS5 "3.5. The Oracle-Selection Ceiling ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") becomes the *union* rescue
mass. As a first empirical indication, we evaluated every trio (primary = most
accurate member) over a rational weight grid on both secondaries, on all
three datasets.

Table [8](https://arxiv.org/html/2607.17384v3#A4.T8 "Table 8 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") (Appendix [D](https://arxiv.org/html/2607.17384v3#A4 "Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) compares the best grid-searched trio against the best
grid-searched pair per dataset. A third member materially raises the ceiling
(union rescue mass 17.2pp against 10.9pp for the best SuperGPQA
composition), and realised lift rises on every
dataset (+3.7pp against +2.9pp on SuperGPQA; +4.9 against +4.4 on GPQA Diamond;
+3.6 against +3.1 forensic, the last converting its entire ceiling) — though these are in-sample grid maxima with the attendant selection
optimism; best pair and trio need not share a primary, so these are not
pure third-member effects, and maximising lift favours weak primaries: the
compositions sit below the strongest single model in absolute accuracy. For the strongest primaries,
however, the third member adds almost nothing at these weights: amongst the
leading models its correct votes largely duplicate the second’s, and the
gains concentrate amongst mid-accuracy trios near the plurality threshold
of Section [4](https://arxiv.org/html/2607.17384v3#S4 "4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") (measured against weaker primaries).

Future work may develop the swap law fully for larger panels —
per-member rates over the $2^{k}$ cells, a generalised $\phi\_{\mathrm{adj}}$.

## 9. Analysis & Limitations

We note four limitations.
Firstly, the forensic dataset has 98 questions nested in five challenges,
so per-pair lift is noisy and question-level bootstrap intervals
understate clustering; we rest on rank-level agreement ($\rho=0.84$), not
point estimates. Secondly, the 45
pairs share ten models and a common question set, so pair-level statistics
are not independent replicates; transfer is task transfer for this fixed
fleet, not model-level external validation.
Thirdly, our free-text category construction maps every correct answer to
one gold category whilst wrong answers scatter — a normalisation unavailable at
deployment, so the forensic results are an oracle-normalised reading of
free-text pooling and per-pair weight optima are sensitive to that
construction; the MCQ datasets carry no such asymmetry. Finally, the 131/135 figure is
in-sample curve reconstruction; the question-disjoint test of
Section [6.2](https://arxiv.org/html/2607.17384v3#S6.SS2 "6.2. Held-Out Validation ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") finds the swap-mass rule carries $+0.51$pp to
held-out questions against $-0.77$pp for equal weighting, whilst
cross-dataset transfer validates the fixed 40:60 predictor only.

## 10. Conclusion

In this paper we have derived a predictive law for the uplift diversity
of thought provides in weighted LLM ensembles, verified on an open
vote-level corpus (*deciban*, Appendix [A](https://arxiv.org/html/2607.17384v3#A1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) of 767,520
MCQ inferences and an agentic forensic benchmark.

On RQ1, the measured swap mass accounts for realised lift almost
exactly ($R^{2}\geq 0.96$, $\rho\geq 0.98$ throughout) across MCQ science
and free-text agentic forensics.
On RQ2, the gap governs the regime: balanced pooling rewards
complementary near-peers; the wide-gap forensic top-accuracy pair gains
only on a small-weight plateau ($x=1/12$–$1/6$). Finally, on RQ3, the heuristic calibrated once on SuperGPQA at
40:60 transfers as the most stable pre-pooling predictor.
For practitioners: measure the swap mass where pooled votes exist,
otherwise screen with $\hat{S}$ (Section [6.3](https://arxiv.org/html/2607.17384v3#S6.SS3 "6.3. Sample Efficiency ‣ 6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")).

## References

- Andro6 (2025)
  Andro6
  Magnet CTF 2025 writeups.
  Note: Medium, <https://medium.com/@andro6.ucsy/magnet-ctf-2025-writeups-fb73793eda8b>Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Balloccu et al. (2024)
  S. Balloccu, P. Schmidtová, M. Lango, and O. Dušek
  Leak, cheat, repeat: data contamination and evaluation malpractices in closed-source LLMs.
  In Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers),
  St. Julian’s, Malta, pp. 67–93.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.eacl-long.5)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Bauer and Kohavi (1999)
  E. Bauer and R. Kohavi
  An empirical comparison of voting classification algorithms: bagging, boosting, and variants.
  Machine Learning 36 (1–2), pp. 105–139.
  External Links: [Document](https://dx.doi.org/10.1023/a%3A1007515423169)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Berg (1993)
  S. Berg
  Condorcet’s jury theorem revisited.
  European Journal of Political Economy 9 (3), pp. 437–446.
  External Links: [Document](https://dx.doi.org/10.1016/0176-2680%2893%2990010-r)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Boland et al. (1989)
  P. J. Boland, F. Proschan, and Y. L. Tong
  Modelling dependence in simple and indirect majority systems.
  Journal of Applied Probability 26 (1), pp. 81–88.
  External Links: [Document](https://dx.doi.org/10.2307/3214318)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Boland (1989)
  P. J. Boland
  Majority systems and the Condorcet jury theorem.
  The Statistician 38 (3), pp. 181–189.
  External Links: [Document](https://dx.doi.org/10.2307/2348873)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Breiman (1996)
  L. Breiman
  Stacked regressions.
  Machine Learning 24 (1), pp. 49–64.
  External Links: [Document](https://dx.doi.org/10.1007/bf00117832)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Brown and Kuncheva (2010)
  G. Brown and L. I. Kuncheva
  “Good” and “bad” diversity in majority vote ensembles.
  In Multiple Classifier Systems (MCS),
  Lecture Notes in Computer Science, Vol. 5997, Cairo, Egypt, pp. 124–133.
  External Links: [Document](https://dx.doi.org/10.1007/978-3-642-12127-2%5F13)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Brown et al. (2005)
  G. Brown, J. L. Wyatt, and P. Tiňo
  Managing diversity in regression ensembles.
  Journal of Machine Learning Research 6, pp. 1621–1650.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Caruana et al. (2006)
  R. Caruana, A. Munson, and A. Niculescu-Mizil
  Getting the most out of ensemble selection.
  In Proceedings of the Sixth IEEE International Conference on Data Mining (ICDM),
  pp. 828–833.
  External Links: [Document](https://dx.doi.org/10.1109/icdm.2006.76)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Chen et al. (2024)
  L. Chen, M. Zaharia, and J. Zou
  FrugalGPT: how to use large language models while reducing cost and improving performance.
  Transactions on Machine Learning Research.
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p1.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Choudhary et al. (2025)
  V. Choudhary, A. Marchetti, Y. R. Shrestha, and P. Puranam
  Human-AI ensembles: when can they work?.
  Journal of Management 51 (2), pp. 536–569.
  External Links: [Document](https://dx.doi.org/10.1177/01492063231194968)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Cureton (1959)
  E. E. Cureton
  Note on $\phi/\phi\_{\max}$.
  Psychometrika 24 (1), pp. 89–91.
  External Links: [Document](https://dx.doi.org/10.1007/BF02289765)
  Cited by: [§3.4](https://arxiv.org/html/2607.17384v3#S3.SS4.p1.3 "3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Davenport and El-Sanhurry (1991)
  E. C. Davenport and N. A. El-Sanhurry
  Phi/phimax: review and synthesis.
  Educational and Psychological Measurement 51 (4), pp. 821–828.
  External Links: [Document](https://dx.doi.org/10.1177/001316449105100403)
  Cited by: [§3.4](https://arxiv.org/html/2607.17384v3#S3.SS4.p1.3 "3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Deng et al. (2024)
  C. Deng, Y. Zhao, X. Tang, M. Gerstein, and A. Cohan
  Investigating data contamination in modern benchmarks for large language models.
  In Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers),
  Mexico City, Mexico, pp. 8706–8719.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.naacl-long.482)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Dietrich (2008)
  F. Dietrich
  The premises of Condorcet’s jury theorem are not simultaneously justified.
  Episteme 5 (1), pp. 56–73.
  External Links: [Document](https://dx.doi.org/10.3366/e1742360008000233)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Dietterich (2000)
  T. G. Dietterich
  Ensemble methods in machine learning.
  In Proceedings of the First International Workshop on Multiple Classifier Systems (MCS),
  Lecture Notes in Computer Science, Vol. 1857, pp. 1–15.
  External Links: [Document](https://dx.doi.org/10.1007/3-540-45014-9%5F1)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Du et al. (2025)
  X. Du et al.
  SuperGPQA: scaling LLM evaluation across 285 graduate disciplines.
  In Advances in Neural Information Processing Systems (NeurIPS 2025), Datasets and Benchmarks Track,
  Cited by: [§5](https://arxiv.org/html/2607.17384v3#S5.p2.1 "5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Du et al. (2024)
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch
  Improving factuality and reasoning in language models through multiagent debate.
  In Proceedings of the 41st International Conference on Machine Learning (ICML),
  Proceedings of Machine Learning Research, Vol. 235, pp. 11733–11763.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Durrant and Lim (2020)
  B. Durrant and N. Lim
  A diversity-aware model for majority vote ensemble accuracy.
  In Proceedings of the Twenty Third International Conference on Artificial Intelligence and Statistics (AISTATS),
  Proceedings of Machine Learning Research, Vol. 108, pp. 4078–4087.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Džeroski and Ženko (2004)
  S. Džeroski and B. Ženko
  Is combining classifiers with stacking better than selecting the best one?.
  Machine Learning 54 (3), pp. 255–273.
  External Links: [Document](https://dx.doi.org/10.1023/b%3Amach.0000015881.36452.6e)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Gong et al. (2019)
  Z. Gong, P. Zhong, and W. Hu
  Diversity in machine learning.
  IEEE Access 7, pp. 64323–64350.
  External Links: [Document](https://dx.doi.org/10.1109/access.2019.2917620)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Grofman et al. (1983)
  B. Grofman, G. Owen, and S. L. Feld
  Thirteen theorems in search of the truth.
  Theory and Decision 15 (3), pp. 261–278.
  External Links: [Document](https://dx.doi.org/10.1007/bf00125672)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Hemmer et al. (2025)
  P. Hemmer, M. Schemmer, N. Kühl, M. Vössing, and G. Satzger
  Complementarity in human–AI collaboration: concept, sources, and evidence.
  European Journal of Information Systems 34 (6), pp. 979–1002.
  External Links: [Document](https://dx.doi.org/10.1080/0960085X.2025.2475962)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Hexordia (2024)
  Hexordia
  2025 MVS CTF: magnet virtual summit 2025 CTF dataset.
  Note: NIST CFReDS, <https://cfreds.nist.gov/all/Hexordia/2025MVSCTF>Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Hu et al. (2024)
  Q. J. Hu, J. Bieker, X. Li, N. Jiang, B. Keigwin, G. Ranganath, K. Keutzer, and S. K. Upadhyay
  RouterBench: a benchmark for multi-LLM routing system.
  arXiv preprint arXiv:2403.12031.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Jiang et al. (2023)
  D. Jiang, X. Ren, and B. Y. Lin
  LLM-Blender: ensembling large language models with pairwise ranking and generative fusion.
  In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  Toronto, Canada, pp. 14165–14178.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2023.acl-long.792)
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p1.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Jiang et al. (2017)
  Z. Jiang, H. Liu, B. Fu, and Z. Wu
  Generalized ambiguity decompositions for classification with applications in active learning and unsupervised ensemble pruning.
  In Proceedings of the Thirty-First AAAI Conference on Artificial Intelligence (AAAI),
  pp. 2073–2079.
  External Links: [Document](https://dx.doi.org/10.1609/aaai.v31i1.10834)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Kirstein and von Wangenheim (2010)
  R. Kirstein and G. von Wangenheim
  A generalized Condorcet jury theorem with two independent probabilities of error.
  MAGKS Joint Discussion Paper Series in Economics
  Technical Report 11-2010, Philipps-Universität Marburg.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Krogh and Vedelsby (1995)
  A. Krogh and J. Vedelsby
  Neural network ensembles, cross validation, and active learning.
  In Advances in Neural Information Processing Systems 7 (NIPS),
  pp. 231–238.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Kuncheva and Rodríguez (2014)
  L. I. Kuncheva and J. J. Rodríguez
  A weighted voting framework for classifiers ensembles.
  Knowledge and Information Systems 38 (2), pp. 259–275.
  External Links: [Document](https://dx.doi.org/10.1007/s10115-012-0586-6)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Kuncheva and Whitaker (2003)
  L. I. Kuncheva and C. J. Whitaker
  Measures of diversity in classifier ensembles and their relationship with the ensemble accuracy.
  Machine Learning 51 (2), pp. 181–207.
  External Links: [Document](https://dx.doi.org/10.1023/a%3A1022859003006)
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p2.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Ladha (1992)
  K. K. Ladha
  The Condorcet jury theorem, free speech, and correlated votes.
  American Journal of Political Science 36 (3), pp. 617–634.
  External Links: [Document](https://dx.doi.org/10.2307/2111584)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Large et al. (2019)
  J. Large, J. Lines, and A. Bagnall
  A probabilistic classifier ensemble weighting scheme based on cross-validated accuracy estimates.
  Data Mining and Knowledge Discovery 33 (6), pp. 1674–1709.
  External Links: [Document](https://dx.doi.org/10.1007/s10618-019-00638-y)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Li et al. (2024)
  J. Li, Q. Zhang, Y. Yu, Q. Fu, and D. Ye
  More agents is all you need.
  Transactions on Machine Learning Research.
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p1.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Littlestone and Warmuth (1994)
  N. Littlestone and M. K. Warmuth
  The weighted majority algorithm.
  Information and Computation 108 (2), pp. 212–261.
  External Links: [Document](https://dx.doi.org/10.1006/inco.1994.1009)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Loevinger (1948)
  J. Loevinger
  The technic of homogeneous tests compared with some aspects of “scale analysis” and factor analysis.
  Psychological Bulletin 45 (6), pp. 507–529.
  External Links: [Document](https://dx.doi.org/10.1037/h0055827)
  Cited by: [§3.4](https://arxiv.org/html/2607.17384v3#S3.SS4.p1.3 "3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Lu et al. (2024)
  K. Lu, H. Yuan, R. Lin, J. Lin, Z. Yuan, C. Zhou, and J. Zhou
  Routing to the expert: efficient reward-guided ensemble of large language models.
  In Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers),
  Mexico City, Mexico, pp. 1964–1974.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.naacl-long.109)
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p1.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Malware-Traffic-Analysis.net (2026a)
  Malware-Traffic-Analysis.net
  Traffic analysis exercise: easy as 123.
  Note: <https://www.malware-traffic-analysis.net/2026/02/28/index.html>Answers: <https://www.malware-traffic-analysis.net/2026/02/28/page2.html>. Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Malware-Traffic-Analysis.net (2026b)
  Malware-Traffic-Analysis.net
  Traffic analysis exercise: lumma in the room-ah.
  Note: <https://www.malware-traffic-analysis.net/2026/01/31/index.html>Answers: <https://www.malware-traffic-analysis.net/2026/01/31/page2.html>. Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Metz (2025)
  D. Metz
  Exploring magnet virtual summit 2025 CTF challenges (iOS).
  Note: Baker Street Forensics, <https://bakerstreetforensics.com/2025/02/24/exploring-magnet-virtual-summit-2025-ctf-challenges-ios/>Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Mienye and Swart (2025)
  I. D. Mienye and T. G. Swart
  Ensemble large language models: a survey.
  Information 16 (8), pp. 688.
  External Links: [Document](https://dx.doi.org/10.3390/info16080688)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- NIST CFReDS Project (2015)
  NIST CFReDS Project
  Data leakage case.
  Note: <https://cfreds-archive.nist.gov/data_leakage_case/data-leakage-case.html>Answer key: <https://cfreds-archive.nist.gov/data_leakage_case/leakage-answers.pdf>. Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Nitzan and Paroush (1982)
  S. Nitzan and J. Paroush
  Optimal decision rules in uncertain dichotomous choice situations.
  International Economic Review 23 (2), pp. 289–297.
  External Links: [Document](https://dx.doi.org/10.2307/2526438)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Ong et al. (2025)
  I. Ong, A. Almahairi, V. Wu, W. Chiang, T. Wu, J. E. Gonzalez, M. W. Kadous, and I. Stoica
  RouteLLM: learning to route LLMs with preference data.
  In The Thirteenth International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Owen et al. (1989)
  G. Owen, B. Grofman, and S. L. Feld
  Proving a distribution-free generalization of the Condorcet jury theorem.
  Mathematical Social Sciences 17 (1), pp. 1–16.
  External Links: [Document](https://dx.doi.org/10.1016/0165-4896%2889%2990012-7)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p1.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Partalas et al. (2010)
  I. Partalas, G. Tsoumakas, and I. Vlahavas
  An ensemble uncertainty aware measure for directed hill climbing ensemble pruning.
  Machine Learning 81 (3), pp. 257–282.
  External Links: [Document](https://dx.doi.org/10.1007/s10994-010-5172-0)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Rein et al. (2024)
  D. Rein, B. L. Hou, A. C. Stickland, J. Petty, R. Y. Pang, J. Dirani, J. Michael, and S. R. Bowman
  GPQA: a graduate-level Google-proof Q&A benchmark.
  In First Conference on Language Modeling (COLM),
  Cited by: [§5](https://arxiv.org/html/2607.17384v3#S5.p3.1 "5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- [49]
  D. Rein
  GPQA dataset card.
  Note: <https://huggingface.co/datasets/Idavidrein/gpqa>Accessed: 2026-07-18
  Cited by: [Appendix B](https://arxiv.org/html/2607.17384v3#A2.p1.1 "Appendix B Ethical Use of Data ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Richard III (2005)
  G. G. Richard III
  Rhino hunt (DFRWS 2005 forensics rodeo challenge).
  Note: NIST CFReDS, <https://cfreds-archive.nist.gov/dfrws/Rhino_Hunt.html>Answer key: <https://cfreds-archive.nist.gov/dfrws/DFRWS2005-answers.pdf>. Accessed: 2026-07-17
  Cited by: [Appendix A](https://arxiv.org/html/2607.17384v3#A1.p3.1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Sharkey and Sharkey (1997)
  A. J. C. Sharkey and N. E. Sharkey
  Combining diverse neural nets.
  The Knowledge Engineering Review 12 (3), pp. 231–247.
  External Links: [Document](https://dx.doi.org/10.1017/s0269888997003123)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Shipp and Kuncheva (2002)
  C. A. Shipp and L. I. Kuncheva
  Relationships between combination methods and measures of diversity in combining classifiers.
  Information Fusion 3 (2), pp. 135–148.
  External Links: [Document](https://dx.doi.org/10.1016/s1566-2535%2802%2900051-9)
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p2.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Tang et al. (2006)
  E. K. Tang, P. N. Suganthan, and X. Yao
  An analysis of diversity measures.
  Machine Learning 65 (1), pp. 247–271.
  External Links: [Document](https://dx.doi.org/10.1007/s10994-006-9449-2)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Ting and Witten (1999)
  K. M. Ting and I. H. Witten
  Issues in stacked generalization.
  Journal of Artificial Intelligence Research 10, pp. 271–289.
  External Links: [Document](https://dx.doi.org/10.1613/jair.594)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Tong et al. (2019)
  Q. Tong, Y. Guo, H. Hu, W. Liu, G. Cheng, and L. Li
  A diversity metric based study on the correlation between diversity and security.
  IEICE Transactions on Information and Systems E102-D (10), pp. 1993–2003.
  External Links: [Document](https://dx.doi.org/10.1587/transinf.2018edp7414)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Ueda and Nakano (1996)
  N. Ueda and R. Nakano
  Generalization error of ensemble estimators.
  In Proceedings of the IEEE International Conference on Neural Networks (ICNN),
  Vol. 1, pp. 90–95.
  External Links: [Document](https://dx.doi.org/10.1109/icnn.1996.548872)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Vaccaro et al. (2024)
  M. Vaccaro, A. Almaatouq, and T. W. Malone
  When combinations of humans and AI are useful: a systematic review and meta-analysis.
  Nature Human Behaviour 8, pp. 2293–2303.
  External Links: [Document](https://dx.doi.org/10.1038/s41562-024-02024-1)
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p2.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Wang et al. (2025)
  J. Wang, J. Wang, B. Athiwaratkun, C. Zhang, and J. Zou
  Mixture-of-Agents enhances large language model capabilities.
  In The Thirteenth International Conference on Learning Representations (ICLR),
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p1.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Wang et al. (2001)
  W. Wang, D. Partridge, and J. Etherington
  Hybrid ensembles and coincident-failure diversity.
  In Proceedings of the International Joint Conference on Neural Networks (IJCNN’01),
  Vol. 4, pp. 2376–2381.
  External Links: [Document](https://dx.doi.org/10.1109/ijcnn.2001.938738)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Wang et al. (2023)
  X. Wang, J. Wei, D. Schuurmans, Q. Le, E. Chi, S. Narang, A. Chowdhery, and D. Zhou
  Self-consistency improves chain of thought reasoning in language models.
  In The Eleventh International Conference on Learning Representations (ICLR),
  Cited by: [§1](https://arxiv.org/html/2607.17384v3#S1.p1.1 "1. Introduction ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"),
  [§2](https://arxiv.org/html/2607.17384v3#S2.p3.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Wood et al. (2023)
  D. Wood, T. Mu, A. M. Webb, H. W. J. Reeve, M. Luján, and G. Brown
  A unified theory of diversity in ensemble learning.
  Journal of Machine Learning Research 24 (359), pp. 1–49.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Wortsman et al. (2022)
  M. Wortsman, G. Ilharco, S. Y. Gadre, R. Roelofs, R. Gontijo-Lopes, A. S. Morcos, H. Namkoong, A. Farhadi, Y. Carmon, S. Kornblith, and L. Schmidt
  Model soups: averaging weights of multiple fine-tuned models improves accuracy without increasing inference time.
  In Proceedings of the 39th International Conference on Machine Learning (ICML),
  Proceedings of Machine Learning Research, Vol. 162, pp. 23965–23998.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Wu et al. (2021)
  Y. Wu, L. Liu, Z. Xie, K. Chow, and W. Wei
  Boosting ensemble accuracy by revisiting ensemble diversity metrics.
  In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR),
  pp. 16469–16477.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p2.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Xu et al. (2024)
  C. Xu, S. Guan, D. Greene, and M. Kechadi
  Benchmark data contamination of large language models: a survey.
  arXiv preprint arXiv:2406.04244.
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
- Yao et al. (2018)
  Y. Yao, A. Vehtari, D. Simpson, and A. Gelman
  Using stacking to average Bayesian predictive distributions (with discussion).
  Bayesian Analysis 13 (3), pp. 917–1007.
  External Links: [Document](https://dx.doi.org/10.1214/17-ba1091)
  Cited by: [§2](https://arxiv.org/html/2607.17384v3#S2.p4.1 "2. Related Work ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").

## Appendix A Data Availability

The *deciban* corpus — the per-vote inference records, vote counts,
grades, gold answers and abstention and error reasons for all three datasets
— is available at:
<https://huggingface.co/datasets/IcyApril/deciban>

The forensic testbed — the Apptainer sandbox, agent harness and offline
grader — is open-source at:
<https://github.com/alan-turing-institute/deciban>

The forensic benchmark comprises five publicly available challenges: the
NIST CFReDS Data Leakage Case ([NIST CFReDS Project, 2015](https://arxiv.org/html/2607.17384v3#bib.bib59)), with answers from
NIST’s published answer document; Rhino Hunt, the DFRWS 2005 Forensics Rodeo
challenge contributed by Golden G. Richard III and re-hosted by NIST
CFReDS ([Richard III, 2005](https://arxiv.org/html/2607.17384v3#bib.bib60)), with answers from the official DFRWS answer
document; the Malware-Traffic-Analysis.net exercises “Lumma in the
Room-ah” ([Malware-Traffic-Analysis.net, 2026b](https://arxiv.org/html/2607.17384v3#bib.bib61)) and “Easy As 123” ([Malware-Traffic-Analysis.net, 2026a](https://arxiv.org/html/2607.17384v3#bib.bib62)), with
answers from the site’s own answer pages; and the iOS image from the Magnet
Virtual Summit 2025 CTF, built by Hexordia and distributed via NIST
CFReDS ([Hexordia, 2024](https://arxiv.org/html/2607.17384v3#bib.bib63)), with answers drawn from the community
writeups of Andro6 ([Andro6, 2025](https://arxiv.org/html/2607.17384v3#bib.bib64)) and
Metz ([Metz, 2025](https://arxiv.org/html/2607.17384v3#bib.bib65)).

## Appendix B Ethical Use of Data

The corpus involves no human participants and no personal data: all
inferences are model outputs over published benchmark questions and publicly
released digital-forensics challenges, used for research with attribution;
provenance and access records are cited in Appendix [A](https://arxiv.org/html/2607.17384v3#A1 "Appendix A Data Availability ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). GPQA’s authors ask that its examples not be
revealed publicly online ([Rein,](https://arxiv.org/html/2607.17384v3#bib.bib9) ); the corpus therefore
carries question identifiers and grades only.

## Appendix C Additional Charts

Figure [5](https://arxiv.org/html/2607.17384v3#acmlabel5 "Figure 5 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") decomposes the total gain the pooled vote offers
over a single primary sample into its two parts, in the question-clustered
world of Section [4](https://arxiv.org/html/2607.17384v3#S4 "4. Accuracy Gap & Collective Accuracy ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"). Repeated
sampling of the primary alone supplies the self-consistency gain
($A\_{0}-\theta\_{A}$): voting converts per-sample accuracy $0.95$ to
near-certainty on the questions the primary knows, forfeits the occasional
lucky sample on those it does not, and on contested questions below the
threshold amplifies distractors, so the gain runs from $-8$pp at the
foot to $+5$pp when the primary knows everything, crossing zero near
$m\_{\theta}=0.22$. Diversity supplies the pair-dependent
increment on top ($A\_{x}-A\_{0}$), peaking mid-range where rescue opportunity
is greatest. The two parts thus dominate in different regimes —
self-consistency where the primary is already strong, diversity where the
pair is balanced and complementary. Figure [6](https://arxiv.org/html/2607.17384v3#acmlabel6 "Figure 6 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") charts the
calibrated heuristic against observed lift on the calibration set.
Figure [7](https://arxiv.org/html/2607.17384v3#acmlabel7 "Figure 7 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") plots mean lift across all 45 pairs against the
secondary weight, per dataset: the cross-pair mean peaks at $x=0.4$ on
SuperGPQA
and $x=2/3$ is the largest grid weight at which it remains positive
(Section [6](https://arxiv.org/html/2607.17384v3#S6 "6. Calibrating the Heuristic at 40:60 ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), whilst the strongest forensic pairs’
curves (Figure [8](https://arxiv.org/html/2607.17384v3#acmlabel8 "Figure 8 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) peak on the small-weight plateau of
Section [7.1](https://arxiv.org/html/2607.17384v3#S7.SS1 "7.1. Lift on the Forensic Dataset ‣ 7. Ensemble Lift in Practice ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") and collapse towards the $-\Delta$ limit past
equal weighting. Figure [9](https://arxiv.org/html/2607.17384v3#acmlabel9 "Figure 9 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") is the raw-$\phi$ counterpart of
Figure [2](https://arxiv.org/html/2607.17384v3#acmlabel2 "Figure 2 ‣ 5.1. Estimation ‣ 5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift"); comparing the two shows the systematic
depression of raw $\phi$ for wide-gap pairs that the accuracy adjustment of
Eq. ([12](https://arxiv.org/html/2607.17384v3#S3.E12 "In 3.4. Accuracy-Adjusted Correlation ‣ 3. A Weighted Swap Law for Model Pairs ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")) removes. Finally, Figure [10](https://arxiv.org/html/2607.17384v3#acmlabel10 "Figure 10 ‣ Appendix C Additional Charts ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")
charts observed lift at 40:60 against the accuracy gap across all pairs.

Self-consistency and diversity contributions to pooled-vote gain against collective accuracy.


Figure 5. Decomposition of the pooled vote’s gain over a single primary
sample ($\Delta\_{\theta}=0.10$, $\phi\_{\mathrm{adj}}\approx 0.5$)Self-consistency and diversity contributions to pooled-vote gain against collective accuracy.


Scatter of calibrated heuristic against observed lift on SuperGPQA.


Figure 6. Calibrated heuristic against observed lift at 40:60, SuperGPQAScatter of calibrated heuristic against observed lift on SuperGPQA.


Mean lift across pairs against secondary weight for each dataset, with interquartile bands.


Figure 7. Mean lift across pairs against secondary weight (IQR shaded)Mean lift across pairs against secondary weight for each dataset, with interquartile bands.


Lift against secondary weight for the strongest forensic pairs with the small-weight plateau shaded.


Figure 8. Lift against secondary weight for the strongest forensic pairs ($x=1/12$–$1/6$ plateau shaded)Lift against secondary weight for the strongest forensic pairs with the small-weight plateau shaded.


Heatmap of raw correctness correlation for all SuperGPQA model pairs.


Figure 9. Correctness correlation $\phi$ across model pairs, SuperGPQAHeatmap of raw correctness correlation for all SuperGPQA model pairs.


Scatter of observed lift at the 40:60 split against accuracy gap for all pairs.


Figure 10. Observed lift at 40:60 against the accuracy gap, all pairsScatter of observed lift at the 40:60 split against accuracy gap for all pairs.

## Appendix D Additional Tables

Table [7](https://arxiv.org/html/2607.17384v3#A4.T7 "Table 7 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") reports per-model abstention rates: on the MCQ
corpora the dominant source is reasoning truncated at the token cap
(‘Trunc.’), whilst on the forensic tasks it is questions left unanswered at
trace termination. Table [8](https://arxiv.org/html/2607.17384v3#A4.T8 "Table 8 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") compares the best grid-searched
pair against the best grid-searched trio per dataset
(Section [8](https://arxiv.org/html/2607.17384v3#S8 "8. Beyond Pairs: Three-Model Ensembles ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift")), and Table [9](https://arxiv.org/html/2607.17384v3#A4.T9 "Table 9 ‣ Appendix D Additional Tables ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift") lists the eight
SuperGPQA pairs with the largest observed lift at the 40:60 weighting,
alongside the calibrated heuristic $\hat{S}$ and the measured swap mass
$S^{\star}$ for each.

Table 7. Abstention (null-vote) rates by model (%).

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Model | Parsed | Trunc. | No parse | Unans. |
| Gemma-4-31B | 100.0 | 0.0 | 0.0 | 47.1 |
| Qwen3.6-27B | 97.7 | 2.2 | 0.1 | 25.3 |
| Gemma-4-26B-A4B | 99.2 | 0.7 | 0.1 | 68.2 |
| Qwen3-30B-Think. | 99.9 | 0.1 | 0.0 | 32.4 |
| DiffusionGemma-26B | 95.1 | 4.1 | 0.8 | 90.2 |
| GLM-4.7-Flash | 89.4 | 10.4 | 0.2 | 76.1 |
| Nemotron-3-Nano | 89.5 | 10.0 | 0.5 | 74.0 |
| GPT-OSS-20B | 98.6 | 0.2 | 1.2 | 96.6 |
| Magistral-Small | 98.9 | 0.2 | 1.0 | 47.2 |
| MedGemma-27B | 97.0 | 1.7 | 1.3 | 41.5 |

First three columns over 76,752 MCQ inferences per model; Trunc. = reasoning cut at the token cap. Unans. = share of the 2,352 gradeable forensic question instances with no submitted answer.


Table 8. Best grid-searched pair against best grid-searched trio, per dataset.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Dataset | Ensemble | $x$ | Lift | Ceiling |
| SuperGPQA | OSS-20B+MedG | 1 | +2.88 | 10.93 |
| SuperGPQA | OSS-20B+Magistral+MedG | 1/2, 2/3 | +3.68 | 17.24 |
| GPQA Diamond | OSS-20B+GLM4.7 | 2/5 | +4.38 | 7.83 |
| GPQA Diamond | OSS-20B+GLM4.7+Magistral | 1/2, 1/3 | +4.88 | 15.74 |
| Forensic | G4-31B+Q3-Think | 2/3 | +3.06 | 5.10 |
| Forensic | G4-A4B+Nemo3+Q3-Think | 1/4, 1/2 | +3.57 | 3.57 |

Lift and selection ceiling (rescue mass) in pp over the trio’s primary; weights in 24ths of the primary’s vote. In-sample maxima, not held-out estimates.


Table 9. The eight SuperGPQA pairs with the largest observed lift at the 40:60 weighting.

| Primary | Secondary | $p$ % | $q$ % | $\phi\_{\mathrm{adj}}$ | $\hat{S}$ | $S^{\star}$ | Lift |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Magistral | MedG | 47.4 | 46.7 | 0.51 | 1.96 | 2.28 | +2.73 |
| DiffG | GLM4.7 | 54.9 | 53.2 | 0.56 | 1.55 | 2.20 | +2.44 |
| OSS-20B | Magistral | 49.5 | 47.4 | 0.50 | 1.75 | 1.88 | +2.13 |
| OSS-20B | MedG | 49.5 | 46.7 | 0.54 | 1.44 | 1.66 | +1.95 |
| DiffG | Magistral | 54.9 | 47.4 | 0.48 | 0.68 | 1.49 | +1.67 |
| G4-31B | Q3.6 | 69.0 | 67.9 | 0.66 | 1.09 | 1.35 | +1.51 |
| DiffG | OSS-20B | 54.9 | 49.5 | 0.58 | 0.73 | 1.25 | +1.44 |
| GLM4.7 | Magistral | 53.2 | 47.4 | 0.49 | 1.02 | 1.02 | +1.43 |

$\hat{S}$, $S^{\star}$ and lift in percentage points. Model codes as in Figure [2](https://arxiv.org/html/2607.17384v3#acmlabel2 "Figure 2 ‣ 5.1. Estimation ‣ 5. Datasets & Experimental Setup ‣ Quantifying Diversity of Thought: A Predictive Law of Weighted LLM Ensemble Lift").
