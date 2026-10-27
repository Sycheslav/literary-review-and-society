---
id: arxiv-2507-09083-text
type: material
title: LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders
work_id: arxiv-2507-09083
source_url: https://arxiv.org/html/2507.09083v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: ea0b93ceb1d947f62234e836acf86f976ee4e0da27bf0d3b35b82c8c95b46165
---

> Источник: [https://arxiv.org/html/2507.09083v2](https://arxiv.org/html/2507.09083v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders Thanks:  This research was made possible by a generous grant from Dropbox Inc. Thanks to Parker Whitfill and Kobi Gal for their helpful feedback. Author’s contact information, code, and data will be available at https://github.com/KeHang-Zhu/llm-auction. Both Anand V. Shah and Kehang Zhu contributed equally to this work. John J. Horton is a co-founder of Expected Parrot Inc., which develops generative AI models for market research applications. The views expressed herein are those of the authors and do not necessarily reflect the views of the National Bureau of Economic Research.

Anand Shah\*
Affiliation: MIT
  
Kehang Zhu\*
Affiliation: Harvard
  
Yanchen Jiang
Affiliation: Google Research
  
Jeffrey G. Wang
Affiliation: OpenAI
  
Arif K. Dayi
Affiliation: Harvard
  
John J. Horton
Affiliation: MIT & NBER
  
David C. Parkes
Affiliation: Harvard

Initial draft: May 30, 2024
  
Current version: September 20, 2026

###### Abstract

Training on vast amounts of human-generated data has motivated growing interest in using large language models (LLMs) to simulate human behavior. We ask which features of human behavior general-purpose models preserve when used out of the box in auctions, where multiple bidders interact under explicit rules and incentives. We evaluate five LLMs across seven laboratory settings against human benchmarks reconstructed from published experiments, with uncertainty bands for the private-value comparisons. Our main focus is on three large models without extended test-time reasoning: GPT-4o, Claude 3.5 Haiku, and Gemini 2.0 Flash. LLM and human deviations from theory differ in magnitude and often in direction: humans overbid in second-price auctions, whereas most models that deviate underbid. Surprisingly, without task-specific fine-tuning or calibration to human bids, the three non-reasoning large models robustly preserve key orderings of auction formats by deviation from theory. First-price auctions are harder than second-price, and ascending clocks reduce deviations relative to sealed bids wherever data are adequate. Kendall’s $\tau\_{b}$ between the human and GPT-4o difficulty rankings is $0.60$ and positive in every joint bootstrap draw. The reasoning model bids almost at equilibrium in the observed private-value settings, leaving little variation in errors to compare; the small model’s large errors yield an inverted ranking. All five models nevertheless reproduce the stronger first-price winner’s curse. Clock framing improves bidding for two of the three non-reasoning large models, and GPT-4o recovers the ordering of last-minute bidding across closing rules in an eBay-style marketplace.

## 1 Introduction

Training on vast amounts of human-generated data has motivated growing interest in using large language models (LLMs) to simulate human behavior ([Aher et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib34); [Horton, 2023](https://arxiv.org/html/2507.09083v2#bib.bib31); [Manning et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib32)).
We ask which features of human behavior general-purpose models preserve when used out of the box in auctions, where multiple bidders interact under explicit rules and incentives.
A mechanism designer choosing between two auction formats needs to know how bidders will actually play them, not only what theory prescribes.
Decades of laboratory experiments show that the two can differ systematically: people bid above value in second-price auctions, shade too little in first-price auctions, fall prey to the winner’s curse when values are common, and play the same strategy-proof rule far more truthfully when it is implemented as an ascending clock than as a sealed bid ([Kagel and Levin, 1993](https://arxiv.org/html/2507.09083v2#bib.bib15); [Kagel and Levin, 1986](https://arxiv.org/html/2507.09083v2#bib.bib27); [Li, 2017](https://arxiv.org/html/2507.09083v2#bib.bib28); [Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)).
Establishing each of these facts required laboratory experiments with paid human subjects, which are costly to run and slow to extend to new designs.
LLMs can be prompted to bid in the same auctions at a small fraction of the cost, which raises a practical question: can simulated bidders inform the designer’s judgment, and if so, which features of human behavior do they preserve?1
This paper answers that question for auctions.
We distinguish three features of behavior that a simulation could preserve: the *magnitude* of the deviation from theory, its *direction* (under- or over-bidding), and the *ordering* of mechanisms by how far bidders deviate, together with the signs of the comparative statics between them.
The three tiers are progressively less demanding, and the third is the one a designer comparing candidate mechanisms actually uses.

Auctions are a demanding benchmark for simulated bidders because the human evidence is unusually sharp.
Theory gives exact predictions: a Bayes–Nash bid function in first-price auctions and dominant-strategy truth-telling in second-price and clock formats ([Myerson, 1981](https://arxiv.org/html/2507.09083v2#bib.bib25); [Krishna, 2009](https://arxiv.org/html/2507.09083v2#bib.bib40)).
The experimental literature documents not only that people deviate from these predictions but by how much more they deviate in some mechanisms than in others ([Kagel and Roth, 2020](https://arxiv.org/html/2507.09083v2#bib.bib21)): bidding above the risk-neutral equilibrium in first-price auctions ([Coppinger et al., 1980](https://arxiv.org/html/2507.09083v2#bib.bib22); [Cox et al., 1988](https://arxiv.org/html/2507.09083v2#bib.bib23)), bidding above value in second-price auctions ([Kagel and Levin, 1993](https://arxiv.org/html/2507.09083v2#bib.bib15)), winner’s-curse losses in common-value auctions ([Bazerman and Samuelson, 1983](https://arxiv.org/html/2507.09083v2#bib.bib26); [Kagel and Levin, 1986](https://arxiv.org/html/2507.09083v2#bib.bib27); [Kagel et al., 1987](https://arxiv.org/html/2507.09083v2#bib.bib24)), more truthful play in ascending-clock than in sealed-bid implementations of the same rule ([Li, 2017](https://arxiv.org/html/2507.09083v2#bib.bib28); [Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)), and last-minute bidding under hard-close rules in online marketplaces ([Roth and Ockenfels, 2002](https://arxiv.org/html/2507.09083v2#bib.bib18); [Ockenfels and Roth, 2006](https://arxiv.org/html/2507.09083v2#bib.bib41)).
This body of evidence supplies an ordering of behavioral difficulty across mechanisms, which is exactly the object a designer needs and exactly what a simulation can be tested against.
A growing literature evaluates LLMs in strategic settings against theoretical optimality; we instead evaluate them against these human regularities, with theory as the reference point rather than the criterion.

The benchmark requires human results that are comparable across mechanisms, and the literature does not report them in that form.
Published studies report moments rather than micro data, such as overbidding shares, bid-on-value regressions, and mean absolute deviations, from experiments that differ in the number of bidders, value supports, and repetition.
We treat this as an *integrated experimentation* problem.
For each source we fit a simple mixture model of bidding to the reported moments, simulate bids from the fitted model, and compute one deviation metric, the scaled mean absolute deviation from the theoretical benchmark (SMAD), that we also compute for LLM bids.
Because the fitted parameters are uncertain, we carry that uncertainty forward as reconstruction bands and use the human anchors only for orderings, directions, and comparative statics.
On the simulation side we hold the prompt fixed: every bidder receives an induced value and a single objective, to maximize expected profit, following the induced-value tradition of experimental economics ([Smith, 1976](https://arxiv.org/html/2507.09083v2#bib.bib51)).
What varies is the mechanism (first-, second-, and third-price sealed bids, open and closed ascending clocks), the information structure (independent, affiliated, and common values), and the model.
Our main focus is on three large models without extended test-time reasoning: GPT-4o, Claude 3.5 Haiku, and Gemini 2.0 Flash. We include GPT-5-mini, a reasoning model that allocates extended test-time computation to each decision, to ask whether more accurate equilibrium play also makes a model a better simulator of human behavior. The small open-weights model Llama-3-8B-Instruct provides a comparison with more limited capabilities.
We use all five models out of the box, without task-specific fine-tuning or calibration to human bids. This complements work on models specifically trained to predict human behavior, such as Centaur, which is fine-tuned on a large collection of human experimental choices ([Binz et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib1)).
GPT-4o additionally serves as the reference model for the deeper distributional diagnostics, because it remains a widely used and well-studied model for strategic and economic tasks ([Horton, 2023](https://arxiv.org/html/2507.09083v2#bib.bib31); [Manning et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib32)).

The results separate cleanly by tier.
Magnitudes do not match: no model’s SMAD falls within the human reconstruction band in more than two of the five private-value formats; GPT-4o deviates more than humans in five of seven formats and far less in the clock formats, GPT-5-mini plays the equilibrium almost exactly, and Llama-3-8B deviates several times more than humans everywhere.
Directions do not match: human bidders in second-price auctions predominantly bid above value ([Kagel and Levin, 1993](https://arxiv.org/html/2507.09083v2#bib.bib15); [Li, 2017](https://arxiv.org/html/2507.09083v2#bib.bib28)), whereas GPT-4o, Gemini, and Llama predominantly bid below value, GPT-5-mini bids at value, and only Claude 3.5 Haiku errs in the human direction.
Surprisingly, despite receiving no task-specific training to mimic human bidders, the non-reasoning large models preserve key orderings: first-price auctions are harder than second-price for GPT-4o, Claude, and Gemini as they are for humans, the clock implementation reduces deviations for every model with adequate clock data, and the first-price winner’s curse exceeds the second-price curse for all five models.
Kendall’s $\tau\_{b}$ between the human and GPT-4o difficulty rankings over five formats is $0.60$ and positive in every joint bootstrap draw, and the ordering is robust to the sampling temperature (Appendix [D.1](https://arxiv.org/html/2507.09083v2#A4.SS1 "D.1 Varying Temperature for GPT-4o Agent ‣ Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")).
The ranking is uninformative for GPT-5-mini, whose cells all sit at the benchmark, and inverted for Llama.

These comparisons show why more accurate equilibrium play need not make a model a better simulator of human behavior.
GPT-5-mini bids almost at equilibrium in the observed private-value settings, leaving little variation in errors with which to compare human difficulty across formats; it records no usable clock bids.
Llama-3-8B makes large errors whose ordering is opposite to the human one.
The non-reasoning large models instead make systematic errors that vary across mechanisms in a similar order to human errors, even when their magnitudes and directions differ.
Thus, accuracy relative to theory and fidelity to human behavior are distinct criteria.

We then use the ordinal result the way a designer would.
First as a prediction: describing a sealed-bid second-price auction as a clock raises truthful play among human subjects ([Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)), so it should raise truthful play for the non-reasoning large models.
It does for GPT-4o and Claude 3.5 Haiku, and it fails only for Gemini 2.0 Flash, whose baseline play in this format is already close to truthful, which is where the argument predicts no gain.
Second in a market structure documented by field data rather than by laboratory experiments: in an eBay-style proxy-bidding marketplace, LLM bidders place $63\%$ of decisive bids in the last scheduled period under a hard close and $7\%$ under a soft-close extension rule, reproducing the ordering of last-minute bidding across closing rules observed on eBay and early Amazon ([Roth and Ockenfels, 2002](https://arxiv.org/html/2507.09083v2#bib.bib18); [Ockenfels and Roth, 2006](https://arxiv.org/html/2507.09083v2#bib.bib41)).

The paper makes three contributions.
It provides a benchmark that converts published human auction moments into cross-mechanism comparable quantities with explicit reconstruction uncertainty, so that any simulated bidder can be scored against decades of experimental evidence.
It provides a three-tier evaluation that separates what a simulation can be read for from what it cannot, and applies it to five models across seven formats.
And it turns the result into a concrete recommendation: LLM panels can screen candidate mechanisms and presentations for cross-mechanism orderings and the signs of comparative statics, but they should not be read for the magnitude or direction of human deviations. By an *LLM panel*, we mean a set of models evaluated separately on the same auction settings, so that agreement across models can be checked. Our results support using the non-reasoning large models for this purpose; the reasoning and small models show why the panel’s ability to reproduce human orderings must be validated.
Our work sits within the literature that uses LLMs as simulated agents in economics and social science ([Aher et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib34); [Park et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib39); [Horton, 2023](https://arxiv.org/html/2507.09083v2#bib.bib31); [Manning et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib32)), a literature that also documents the limits of LLMs as stand-ins for human respondents ([Achiam et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib35); [Bubeck et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib30); [Wan et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib36)).
Within auctions it complements three strands: work that treats LLMs as market participants in their own right and studies their collusion, information use, and trainability ([Fish et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib7); [Chen et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib37); [Zhang and others, 2025](https://arxiv.org/html/2507.09083v2#bib.bib45); [Lu, 2025](https://arxiv.org/html/2507.09083v2#bib.bib46); [Tsuchihashi, 2023](https://arxiv.org/html/2507.09083v2#bib.bib47); [Chen and others, 2024](https://arxiv.org/html/2507.09083v2#bib.bib49)); work that brings LLM bid distributions closer to human ones by adjusting them on a small human sample ([Corrigan et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib48)), which asks a question downstream of ours; and work that designs auctions for LLM-powered platforms ([Duetting et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib8); [Hajiaghayi et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib50)).
Markets populated by AI agents themselves are an important adjacent agenda in which LLM behavior is designer-relevant in its own right; our question is when LLM-generated behavior can inform design for human participants.
We do not learn mechanisms, as automated mechanism design does ([Dütting et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib3); [Curry et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib13); [Wang et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib11); [Feng et al., 2018](https://arxiv.org/html/2507.09083v2#bib.bib5); [Wang et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib6); [Ravindranath et al., 2023](https://arxiv.org/html/2507.09083v2#bib.bib4)); we provide a benchmark for the behavioral inputs such pipelines would need, and a diagnostic for which of those inputs an LLM panel can supply.
A broader literature connects LLMs with game-theoretic modeling of strategic environments ([Daskalakis et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib38); [Huang et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib14); [Soumalias et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib12); [Jiang et al., 2025](https://arxiv.org/html/2507.09083v2#bib.bib9); [Wang et al., 2026](https://arxiv.org/html/2507.09083v2#bib.bib10)).

We release the simulation framework as an open-source benchmark that runs auction experiments with any number of bidders, arbitrary prompting, and many auction formats.2
The experiments reported here comprise more than 1,000 auctions with more than 5,000 GPT-4o bidder participants at a total cost below $400, plus the four-model panel.
Section [2](https://arxiv.org/html/2507.09083v2#S2 "2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") describes the reconstruction of human benchmarks, the metric and the three tiers, the simulation protocol, and the model panel.
Section [3](https://arxiv.org/html/2507.09083v2#S3 "3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports the laboratory benchmarks tier by tier.
Section [4](https://arxiv.org/html/2507.09083v2#S4 "4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") applies the framework to the clock-framing intervention and to closing rules in an eBay-style marketplace.
Section [5](https://arxiv.org/html/2507.09083v2#S5 "5 Discussion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") draws the implications for using LLM panels in mechanism design, and Section [6](https://arxiv.org/html/2507.09083v2#S6 "6 Conclusion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") concludes.

## 2 Methods

### 2.1 Human Experiment Data Collection

The experimental auctions literature is rich but fragmented: each study reports its own summary statistics (overbidding frequencies, bid-on-value regressions, mean absolute deviations from the dominant strategy) for its own environment (number of bidders, value support, rounds, interface). To compare LLM behavior with this evidence *across* mechanisms, we treat the published moments as the data. For each source we fit a simple model of individual bidding to the reported moments, simulate bids from the fitted model, and evaluate the same statistic that we compute for LLM bids: the scaled mean absolute deviation from theory defined in Section [2.2](https://arxiv.org/html/2507.09083v2#S2.SS2 "2.2 Unified Deviation Metric across Auctions ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"). This turns heterogeneous legacy results into one cross-mechanism benchmark. The reconstruction is not a substitute for micro data, so we carry its uncertainty forward as reconstruction bands (Appendix [A.2](https://arxiv.org/html/2507.09083v2#A1.SS2 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")) and use the reconstructed benchmarks only for orderings, directions, and comparative statics, never for level comparisons or hypothesis tests.

##### Reconstructing human bid distributions via moment matching.

Because micro-level bid data are rarely available from published experiments, we reconstruct synthetic human bid distributions by fitting a mixture model to aggregate statistics
reported in each source. We model bids as:

|  |  |  |
| --- | --- | --- |
|  | $$b=b^{\star}\_{m}(v)\cdot r$$ |  |

where $b^{\star}\_{m}(v)$ is the equilibrium bid and $r$ is a bid-to-equilibrium ratio drawn from a three-component mixture:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\text{With probability }p\_{\text{eq}}:\quad$ | $\displaystyle r\sim\mathcal{N}(1,\sigma^{2})$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\text{With probability }p\_{\text{over}}:\quad$ | $\displaystyle r\sim 1+\text{Exp}(\lambda)$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\text{With probability }p\_{\text{under}}:\quad$ | $\displaystyle r\sim\text{Uniform}(1-\delta,1)$ |  |

This structure maps directly to how experimental papers categorize behavior: equilibrium bidders ($r\approx 1$), overbidders ($r>1$), and underbidders ($r<1$).3

##### Source papers and equilibrium benchmarks.

We draw on four sources: [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28) and [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29) for second-price and ascending clock auctions; [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15) for first-price,
second-price, and third-price sealed-bid auctions with $n\in\{5,10\}$ bidders; and [Gonczarowski et al. (2023)](https://arxiv.org/html/2507.09083v2#bib.bib42) for second-price auctions comparing mechanism
descriptions. For each format, we use the risk-neutral Bayes-Nash equilibrium:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | $\displaystyle b^{\star}\_{\text{SPSB}}(v)$ | $\displaystyle=v$ |  | (second-price, ascending clock) |  |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | $\displaystyle b^{\star}\_{\text{FPSB}}(v)$ | $\displaystyle=\tfrac{n-1}{n}v$ |  | (first-price) |  |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | $\displaystyle b^{\star}\_{\text{TPSB}}(v)$ | $\displaystyle=\tfrac{n-1}{n-2}v$ |  | (third-price) |  |

##### Parameter identification.

Mixture weights $(p\_{\text{eq}},p\_{\text{over}},p\_{\text{under}})$ are set directly from reported rates. For example, [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28) reports ${\sim}50\%$ dominant-strategy
play and ${\sim}40\%$ overbidding, yielding $p\_{\text{eq}}=0.50$, $p\_{\text{over}}=0.40$, $p\_{\text{under}}=0.10$.

The overbid scale $\lambda$ is chosen to match a secondary moment:

- •

  For [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28) and [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29): the mean bid-to-value ratio (e.g., $\mathbb{E}[b/v]\approx 1.08$).
- •

  For [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15): the regression coefficient $\beta$ from bid regressions.
- •

  For [Gonczarowski et al. (2023)](https://arxiv.org/html/2507.09083v2#bib.bib42): mean absolute deviation (MAD $\approx$ $0.51–0.55).

The equilibrium noise $\sigma$ is derived from regression $R^{2}$ where reported, via $\sigma^{2}=\beta^{2}\text{Var}(v)(1-R^{2})/R^{2}$. The underbid bound $\delta$ is set consistently across
papers; we fix it at a common value because papers do not report underbid tail shapes separately.4

Full parameter values appear in Appendix [A.1](https://arxiv.org/html/2507.09083v2#A1.SS1 "A.1 Mixture Model Fitting Details ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

##### Reconstruction uncertainty.

Beyond Monte Carlo noise at fixed mixture parameters, the fitted parameters themselves are uncertain: reported rates are rounded, regression coefficients carry standard errors, and the underbid bound $\delta$ is fixed by convention. Appendix [A.2](https://arxiv.org/html/2507.09083v2#A1.SS2 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports a parametric bootstrap over the admissible ranges of every mixture parameter ($B=2000$). The resulting 95% reconstruction bands are shown as whiskers on the human bars in Figure [1](https://arxiv.org/html/2507.09083v2#S3.F1 "Figure 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") and in brackets in Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"). The two load-bearing human orderings survive the bands: first-price deviations exceed second-price deviations in 100% of re-draws, and the ascending clock improves on sealed second-price bidding in 100% (open clock) and 92.6% (closed clock) of re-draws.

### 2.2 Unified Deviation Metric across Auctions

##### Unified deviation metric (applied to all bids).

Consider an auction *environment* and *format* indexed by $m$.
The index $m$ collects all primitives needed to define the theoretical benchmark, including the number of bidders $N$, the value (or signal) distribution, the information structure (independent private value/common value), and the mechanism rules (e.g., first-price vs. second-price, sealed-bid vs. clock).
Let $\mathcal{I}\_{i}$ denote bidder $i$’s information at the moment of bidding under environment $m$ (e.g., $\mathcal{I}\_{i}=v\_{i}$ in private values, or $\mathcal{I}\_{i}=s\_{i}$ in common values).
Let $b\_{i}$ denote an *observed submitted bid* by bidder $i$ (we apply the definition to *all bids*, not only winning bids), and let $b\_{m}^{\star}(\mathcal{I}\_{i})$ denote the *theoretical benchmark bid* under $m$ given information $\mathcal{I}\_{i}$ (Bayes–Nash equilibrium in non-strategy-proof formats; truthful/value bidding in strategy-proof formats).

We define the absolute bid error for a bid with information $\mathcal{I}\_{i}$ as

|  |  |  |
| --- | --- | --- |
|  | $$d\_{m}(\mathcal{I}\_{i})\;\equiv\;\bigl|b\_{i}-b\_{m}^{\star}(\mathcal{I}\_{i})\bigr|.$$ |  |

To compare deviations across formats on a common scale, we normalize by the expected benchmark bid level,

|  |  |  |
| --- | --- | --- |
|  | $$\mu\_{m}^{\star}\;\equiv\;\mathbb{E}\_{m}\!\left[b\_{m}^{\star}(\mathcal{I})\right],$$ |  |

where $\mathbb{E}\_{m}[\cdot]$ denotes expectation with respect to the distribution of the information object $\mathcal{I}$ induced by environment $m$ (i.e., the value/signal distribution and any randomization in the experimental design).
We then define the *scaled mean absolute deviation* (SMAD) for auction format $m$ as

|  |  |  |
| --- | --- | --- |
|  | $$\Delta\_{m}\;\equiv\;100\cdot\frac{\mathbb{E}\_{m}\!\left[d\_{m}(\mathcal{I})\right]}{\mu\_{m}^{\star}}\;=\;100\cdot\frac{\mathbb{E}\_{m}\!\left[\left|b-b\_{m}^{\star}(\mathcal{I})\right|\right]}{\mathbb{E}\_{m}\!\left[b\_{m}^{\star}(\mathcal{I})\right]}.$$ |  |

This metric is interpretable as a percentage of the expected benchmark bid: $\Delta\_{m}=10$ means that, on average, bids deviate from the benchmark by an amount equal to $10\%$ of the expected benchmark bid.

##### What the human literature says about the ordering of SMAD.

The value of a common scale is that the experimental literature’s conclusions about *relative* difficulty become testable statements about SMAD. Three such conclusions anchor our benchmark. First, implementation matters even when incentives do not: the same strategy-proof second-price rule is played more truthfully as an ascending clock than as a sealed bid ([Li, 2017](https://arxiv.org/html/2507.09083v2#bib.bib28); [Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)). In the reconstructed anchors, SMAD is $3.5\%$ in the open clock and $5.8\%$ in the closed clock against $9.3\%$ in the sealed-bid version of the same affiliated-values environment. Second, a dominant strategy is easier to play than an equilibrium that requires bid shading: second-price bidders deviate far less than first-price bidders in the same independent-private-values environment ($5.6\%$ against $24.8\%$, a $4.4\times$ gap; [Kagel and Levin, 1993](https://arxiv.org/html/2507.09083v2#bib.bib15)). Third, common-value environments, in which a bidder must condition on the adverse-selection content of winning, are harder than private-value environments with the same payment rule ($47.6\%$ against $24.8\%$ under first-price rules and $18.2\%$ against $5.6\%$ under second-price rules), and within common values the first-price winner’s curse is more severe than the second-price curse ([Kagel and Levin, 1986](https://arxiv.org/html/2507.09083v2#bib.bib27); [Levin et al., 1996](https://arxiv.org/html/2507.09083v2#bib.bib43)). Ordered by human SMAD, the seven formats therefore run from first-price common value ($47.6\%$) through first-price IPV ($24.8\%$), second-price common value ($18.2\%$), sealed second-price APV ($9.3\%$), the closed clock ($5.8\%$), and second-price IPV ($5.6\%$) to the open clock ($3.5\%$). It is this ordering, and the signs of the three design contrasts behind it, that we test LLM bidders against; the magnitudes themselves carry the reconstruction uncertainty discussed above.

Given a sample of bids $\{(b\_{k},\mathcal{I}\_{k})\}\_{k=1}^{n}$ from format $m$, the plug-in estimator is

|  |  |  |
| --- | --- | --- |
|  | $$\widehat{\Delta}\_{m}\;=\;100\cdot\frac{\frac{1}{n}\sum\_{k=1}^{n}\left|b\_{k}-b\_{m}^{\star}(\mathcal{I}\_{k})\right|}{\widehat{\mu}\_{m}^{\star}},\qquad\widehat{\mu}\_{m}^{\star}\equiv\frac{1}{n}\sum\_{k=1}^{n}b\_{m}^{\star}(\mathcal{I}\_{k}).$$ |  |

When we report a standard error for the (unscaled) mean absolute deviation $\frac{1}{n}\sum\_{k}|b\_{k}-b\_{m}^{\star}(\mathcal{I}\_{k})|$, we propagate it to $\widehat{\Delta}\_{m}$ by scaling with $\widehat{\mu}\_{m}^{\star}$. We construct $95\%$ confidence intervals using a normal approximation when an analytic standard error is available.

##### Deterministic benchmarks.

SMAD requires a single-valued benchmark mapping $\mathcal{I}\mapsto b\_{m}^{\star}(\mathcal{I})$.
Accordingly, we restrict attention to auction formats where the theoretical prediction is deterministic given the bidder’s information.

### 2.3 LLM Data Generation

We generate synthetic auction data by simulating auctions in which $n$ large language model (LLM) agents bid against one another under fully specified information structures and auction rules. Each experimental *setting* is defined by (i) a *value model* (how bidder values/signals are drawn), (ii) a *mechanism environment* (the action space, allocation and payment rules, and the information revealed during play), and (iii) a *prompt framing* (how the mechanism is described to the bidder). For each setting, we repeat the simulation $K$ times with independent random seeds, producing a dataset of realized values (or signals), bidder actions, allocations, prices, profits, and free-text plans. Here, “actions” refers to: a numeric bid in sealed-bid formats, a stay/exit decision at each clock tick in ascending auctions, and an increase/hold decision over a bidder’s maximum bid in the eBay proxy-bidding environment.

##### Single-auction baseline and learning ablation.

Our main benchmark experiments use *single-auction* simulations: each repetition $k$ is an independent auction instance with freshly drawn values/signals, and bidders do not receive feedback across instances. We adopt this design to minimize reliance on cross-instance learning and long-term adaptation, which remains unreliable for language models ([Dong et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib44)). Importantly, this choice is distinct from whether a mechanism is *iterative* within an auction (e.g., clock auctions): iterative mechanisms still unfold over multiple within-auction steps (clock ticks), but we do not run repeated auctions with feedback by default. In Appendix [C](https://arxiv.org/html/2507.09083v2#A3 "Appendix C Examining Learning Effects in Repeated Games ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), we run a repeated-auction ablation for sealed-bid auctions in which bidders observe outcomes from prior auction instances; consistent with the motivation above, we find no meaningful learning effects across repetitions.

##### Value models and numerical parameters.

We implement three canonical information structures. All parameters (support ranges, bidder count $n$, and bid/price increments) are specified in configuration files and held fixed within a setting. In sealed-bid auctions, bids are restricted to a discrete grid with increment $0.1$; in ascending clock auctions, the clock price increases by increment $0.5$ per tick.

- •

  Independent Private Values (IPV). Each bidder’s value is the sum of an independent private component and (optionally) a common component. In our baseline IPV parameterization, the private component from $[0,49]$, yielding

  |  |  |  |
  | --- | --- | --- |
  |  | $$\epsilon\_{it}\sim\mathrm{Unif}[0,49],\qquad v\_{it}=\epsilon\_{it}.$$ |  |

  We discretize bids with increment $0.1$.
- •

  Affiliated Private Values (APV). Values share a common component plus an idiosyncratic private shock. Our APV parameterization sets

  |  |  |  |
  | --- | --- | --- |
  |  | $$c\_{t}\sim\mathrm{Unif}[0,29],\qquad\epsilon\_{it}\sim\mathrm{Unif}[0,20],\qquad v\_{it}=c\_{t}+\epsilon\_{it},$$ |  |

  again with bid increment $0.1$. This induces affiliation: higher realized values for one bidder make higher values for others more likely.
- •

  Common Value (CV). The item has an underlying common value $V\_{t}$ shared by all bidders, while each bidder observes a noisy private signal. In our CV parameterization, the common value is drawn from $[20,29]$ and each bidder observes an idiosyncratically perturbed signal,

  |  |  |  |
  | --- | --- | --- |
  |  | $$V\_{t}\sim\mathrm{Unif}[20,29],\qquad\eta\_{it}\sim\mathrm{Unif}[-20,20],\qquad s\_{it}=V\_{t}+\eta\_{it},$$ |  |

  with bid increment $0.1$. Bidder $i$ conditions on $s\_{it}$ when bidding, while realized payoffs depend on $V\_{t}$, generating the winner’s-curse selection effect.

In our baseline benchmark, $T=1$ so each repetition corresponds to a single auction instance.

##### Bidder instructions.

Every simulated bidder is assigned a value (or signal) and receives the same instruction to maximize expected profit. This choice follows the design of the human experiments we benchmark against. Laboratory auctions are incentivized: subjects’ earnings rise with their auction payoffs, and the instructions encourage them to earn as much as they can ([Smith, 1976](https://arxiv.org/html/2507.09083v2#bib.bib51); [Smith, 1982](https://arxiv.org/html/2507.09083v2#bib.bib52)). The experiments of [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15), [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28), [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29), and [Gonczarowski et al. (2023)](https://arxiv.org/html/2507.09083v2#bib.bib42) all induce values in this way and pay subjects accordingly. Within each model and setting, bidders share the same objective and differ in their assigned values or signals. Human subjects additionally differ in preferences, experience, and cognition, even under the same induced-value instructions; we do not assign demographic or personality descriptions, which is one reason to expect magnitudes to differ (Section [5](https://arxiv.org/html/2507.09083v2#S5 "5 Discussion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")). In the one-shot baseline the objective instruction reads: “You have only one opportunity to bid. Your top priority is to place a bid that maximizes your expected profit.”; a multi-round variant is used only in the learning ablation (Appendix [C](https://arxiv.org/html/2507.09083v2#A3 "Appendix C Examining Learning Effects in Repeated Games ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")).

#### 2.3.1 Canonical laboratory mechanisms.

To mirror standard laboratory benchmarks, we implement sealed-bid auctions and ascending clock auctions under the value models above.

##### Sealed-bid auctions.

In sealed-bid auctions, each bidder submits a single bid $b\_{it}$ simultaneously. Let $b\_{(1)t}\geq b\_{(2)t}\geq b\_{(3)t}$ denote the order statistics and let $i^{\star}\_{t}$ be the highest bidder. The winner pays a price $p\_{t}$ determined by the mechanism:

- •

  First-price sealed-bid (FP). $i^{\star}\_{t}$ wins and pays $p\_{t}=b\_{(1)t}$.
- •

  Second-price sealed-bid (SP). $i^{\star}\_{t}$ wins and pays $p\_{t}=b\_{(2)t}$.

Profits are computed as $\pi\_{it}=v\_{it}-p\_{t}$ for winners (or $\pi\_{it}=V\_{t}-p\_{t}$ in CV) and $0$ for losers.

##### Ascending clock auctions.

In an ascending clock auction, the price starts at 0 and increases by a fixed increment $\Delta\_{\text{clock}}=0.5$ at each clock tick. At each tick, each bidder chooses *stay* or *exit*. The last remaining bidder wins. We implement the standard second-price logic in the dynamic interface: the winner pays the exit price of the second-to-last bidder.

##### Clock-framing intervention (mechanism held fixed).

To isolate the effect of description while holding auction design constant, we implement an alternative framing of the second-price sealed-bid auction:

- •

  Clock framing. Bidders are told to treat their sealed bid as an automatic exit threshold in a simulated ascending clock: conceptually, the clock rises until bidders “drop out” at their thresholds, and the winner pays the second-highest threshold.

The framing implements the same allocation and payment rule as the second-price sealed-bid auction; only the prompt language differs. The precise prompts are listed in Appendix [I](https://arxiv.org/html/2507.09083v2#A9 "Appendix I Auction Rule Prompts ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

The eBay-style proxy-bidding environment used in Section [4](https://arxiv.org/html/2507.09083v2#S4 "4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") is a separate, marketplace-inspired environment; its rules, treatments, and discrete-time implementation are described in Appendix [B.3](https://arxiv.org/html/2507.09083v2#A2.SS3 "B.3 Stylized eBay proxy-bidding environment ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

#### 2.3.2 Simulation protocol.

Each experiment proceeds as follows, repeated for $K$ independent repetitions:

1. 1.

   Value realization. For each repetition $k$, we draw values (IPV/APV) or signals (CV) for all bidders under a fixed random seed. In our baseline benchmark experiments, each repetition corresponds to a single auction instance.
2. 2.

   Prompted action. We construct an individualized prompt for each bidder containing (i) the mechanism rules (and framing, if applicable), (ii) the bidder’s current value (or signal), and (iii) when applicable, a feedback transcript summarizing prior auction instances (only in the learning ablation). We request a structured response with explicit tags:

   > `<PLAN> ... </PLAN>`
   >   
   > `<ACTION> ... </ACTION>`

   where `<ACTION>` contains a numeric bid (sealed-bid), a stay/exit decision (clock), or an increase/hold decision over the bidder’s maximum bid (eBay).
3. 3.

   Parallel elicitation and parsing. We query the LLM for each bidder using separate API calls in parallel, and parse the action from the `<ACTION>` tag using a deterministic regex-based extractor.
4. 4.

   Outcome computation. Given the submitted actions, we determine the winner and payments according to the mechanism rules and compute bidder profits.

Unless otherwise noted, our baseline settings use $n=3$ bidders and we repeat each configuration $K$ times with independent seeds to ensure stable distributional estimates.

### 2.4 Three Tiers of Comparison

We compare LLM and human behavior at three tiers.

- •

  *Magnitudes.* The size of SMAD. Because the human anchors are reconstructions, magnitude comparisons are qualitative, and we ask whether a model’s SMAD falls within the human reconstruction band.
- •

  *Directions.* After removing bids within $\pm 2\%$ of the benchmark, $|b-b^{\star}|\leq 0.02\,b^{\star}$, we classify the remaining bids as underbids or overbids and compare the shares. Human direction shares use the source studies’ reported categories in the truthful formats and the reconstruction in first-price auctions.
- •

  *Orderings.* We rank formats by SMAD and compute Kendall’s $\tau\_{b}$ between the human ranking and each model’s ranking over the five private-value formats that share a common benchmark scale (FPSB IPV, SPSB IPV, SP-APV, AC, AC-B), with uncertainty from two layers: resampling LLM bids within each cell, and re-drawing the human reconstruction within its admissible ranges (Appendix [E](https://arxiv.org/html/2507.09083v2#A5 "Appendix E Rank Concordance Details ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")). For design contrasts we ask whether the *sign* of the human effect (first-price harder than second-price; clock easier than sealed bid) is reproduced.

Effect sizes and error directions matter for design objectives such as revenue and efficiency. Ordinal agreement can inform comparisons between mechanisms, and it is the tier at which we claim LLM bidders are informative.

### 2.5 Model Panel

We evaluate five LLMs under identical prompts, in three classes. Three are large models without extended test-time reasoning, which we call the non-reasoning large model family: OpenAI’s gpt-4o (2024-08-06), Anthropic’s claude-3-5-haiku (2024-10-22), and Google’s gemini-2.0-flash (2025-02-05). One is a reasoning model that allocates extended test-time computation to each decision, gpt-5-mini (2025-08-07). One is a small open-weights model, Meta-Llama-3-8B-Instruct. Each model is run in separate auctions with bidders using that model; the panel compares results across models rather than mixing models within an auction. Section [3](https://arxiv.org/html/2507.09083v2#S3 "3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") focuses on the three non-reasoning large models and reports the reasoning and small models as comparisons. GPT-4o is in addition the reference model for the deeper distributional diagnostics (temperature ablation, repeated rounds, and the eBay-style environment of Section [4](https://arxiv.org/html/2507.09083v2#S4 "4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")) and therefore has the largest cells. For non-reasoning models we set the temperature to $0.5$, the most common setting in LLM simulation ([Horton, 2023](https://arxiv.org/html/2507.09083v2#bib.bib31); [Horton et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib33)); for gpt-5-mini the API ignores temperature. For GPT-4o we also ablate $\text{temp}\in\{0.1,1.0\}$ (Appendix [D](https://arxiv.org/html/2507.09083v2#A4 "Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")).

## 3 Benchmark Experimental Auction Data

Figure [1](https://arxiv.org/html/2507.09083v2#S3.F1 "Figure 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") and Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") report SMAD for the seven laboratory formats, ordered by human SMAD from hardest to easiest, for the reconstructed human data and the five models. We read them tier by tier (Section [2.4](https://arxiv.org/html/2507.09083v2#S2.SS4 "2.4 Three Tiers of Comparison ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")): magnitudes, directions, orderings.

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/figure1_bands_gp.png)


Figure 1: Human vs. LLM bidding behavior across seven auction formats, non-reasoning large models. Scaled mean absolute deviation (SMAD) from the theoretical benchmark for the reconstructed human data (blue; black whiskers are 95% reconstruction bands from the parametric bootstrap of Appendix [A.2](https://arxiv.org/html/2507.09083v2#A1.SS2 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"); common-value anchors have no band) and for the three non-reasoning large models GPT-4o, Claude 3.5 Haiku, and Gemini 2.0 Flash (95% confidence intervals), with $N=3$ bidders. Hatched bars have fewer than 30 usable bids. Formats are ordered by human SMAD. The reasoning model GPT-5-mini and the small model Llama-3-8B are reported in Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") and in Figure [6](https://arxiv.org/html/2507.09083v2#A4.F6 "Figure 6 ‣ D.2 Varying the Base Models for LLM bidding ‣ Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").


| Format | Human | GPT-4o | Claude 3.5 Haiku | Gemini 2.0 Flash | GPT-5-mini | Llama-3-8B |
| --- | --- | --- | --- | --- | --- | --- |
| First-Price CV | 47.59∗ | 59.99 (96) | 54.07 (29)† | 59.50 (30) | 30.22 (30) | 53.68 (30) |
| First-Price IPV | 24.76 [22.30, 27.25] | 27.55 (285) | 24.09 (90) | 27.05 (90) | 0.08 (87) | 38.16 (90) |
| Second-Price CV | 18.23∗ | 40.60 (92) | 27.19 (29)† | 30.89 (30) | 14.80 (30) | 32.27 (30) |
| Second-Price APV | 9.31 [6.78, 11.74] | 10.73 (291) | 9.58 (90) | 8.02 (87) | 1.36 (87) | 53.08 (90) |
| AC-Closed (AC-B) APV | 5.83 [2.30, 10.11] | 0.47 (114) | 0.00 (2)† | 1.26 (46) | DS‡ | 67.00 (2)† |
| Second-Price IPV | 5.65 [4.46, 6.79] | 8.69 (270) | 9.72 (90) | 3.01 (87) | 0.20 (87) | 54.89 (90) |
| Ascending Clock APV | 3.54 [2.00, 5.36] | 0.81 (106) | 5.74 (46) | 0.00 (2)† | DS‡ | 104.10 (8)† |

Table 1: SMAD (%) by auction format and model. Human anchors are moment-matched reconstructions; brackets give 95% reconstruction bands (∗: common-value anchors are profit-based moments and carry no band). LLM cells report SMAD with the number of usable bids in parentheses; † marks cells with fewer than 30 bids. DS‡ marks the two ascending-clock cells of GPT-5-mini, in which the model states the dominant strategy outright and does not complete the tick-by-tick clock procedure in any run, so no bids are recorded; these cells enter no statistic. All models run at temperature $0.5$ (ignored by GPT-5-mini). We do not report significance tests of LLM cells against the reconstructed anchors, which are reconstructions of published moments rather than samples.

### 3.1 Tier 1: Magnitudes do not match

Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") compares SMAD magnitudes. Against the human reconstruction bands of Appendix [A.2](https://arxiv.org/html/2507.09083v2#A1.SS2 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), the reference model GPT-4o falls inside the band in one of the five private-value formats (SP-APV, $10.7\%$ vs. $[6.8,11.7]$); it deviates more than humans in the sealed-bid formats ($27.6\%$ vs. $24.8\%$ in first-price, $8.7\%$ vs. $5.6\%$ in second-price) and far less in the clock formats ($0.8\%$ vs. $3.5\%$ in the open clock, $0.5\%$ vs. $5.8\%$ in the closed clock). In the common-value formats its deviations are $26\%$ and $123\%$ larger than the human anchors. The other models do no better: Claude 3.5 Haiku and Gemini 2.0 Flash fall inside the human band in two of five private-value formats each, GPT-5-mini in none (its SMAD is below $1.4\%$ in every private-value format, essentially the theoretical benchmark), and Llama-3-8B in none (its SMAD exceeds $38\%$ everywhere). Even where a single magnitude coincides, as with Claude’s first-price SMAD of $24.1\%$ against the human $24.8\%$, the same model is off by a factor of two in the adjacent second-price format. We conclude that LLM simulations should not be read for the magnitude of human deviations, and the rest of this section therefore turns to the two qualitative tiers.

### 3.2 Tier 2: Directions do not match

Figure [2](https://arxiv.org/html/2507.09083v2#S3.F2 "Figure 2 ‣ 3.2 Tier 2: Directions do not match ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") compares the direction of bid errors. LLM shares exclude bids within $\pm 2\%$ of the theoretical benchmark. Human shares use the source studies’ reported categories in the truthful formats and the reconstructed bids in first-price auctions, so their tolerance convention need not match the LLM convention.

In first-price IPV auctions, humans and the non-reasoning large models all predominantly overbid relative to the equilibrium shading rule. Overbids account for $67.5\%$ of human deviating bids, after removing $6.4\%$ near-equilibrium bids, and for $85.9\%$, $97.8\%$, and $89.9\%$ of the deviating bids of GPT-4o, Claude 3.5 Haiku, and Gemini 2.0 Flash, after removing $3.2\%$, $1.1\%$, and $1.1\%$. The small model underbids ($82\%$ of Llama-3-8B’s deviating bids), and the reasoning model has no deviating bids: every GPT-5-mini bid lies within the tolerance band around the shading rule. Second-price IPV reverses the agreement. [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15) report $67\%$ of human bids above value, $27\%$ at value, and $6\%$ below, implying that about $92\%$ of non-truthful bids are overbids. Among GPT-4o’s deviating bids, $81.3\%$ are underbids, and $30.7\%$ of its bids lie within the tolerance band; Gemini 2.0 Flash underbids in all of its deviating bids, whereas Claude 3.5 Haiku overbids in roughly two thirds of its deviating bids, the one member of the family that errs in the human direction. The small model also predominantly underbids ($94\%$), and the reasoning model has a single deviating bid.

In sealed-bid SP-APV, the aggregate deviations are similar for humans and GPT-4o ($9.3\%$ and $10.7\%$), but the errors have opposite directions: $80\%$ of human deviating bids are overbids, while $92.4\%$ of GPT-4o’s are underbids, as are $70\%$ of Claude 3.5 Haiku’s and all of Gemini 2.0 Flash’s. All five models predominantly underbid in this setting. The open clock gives a more similar directional split for humans and GPT-4o ($45/55$ versus $50/50$ under/over), although their SMAD magnitudes still differ, and the closed clock behaves alike ($29/71$ versus $37/63$). Directional agreement is thus distinct from agreement in either the average error or the full bid distribution.

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/figure2_models_direction.png)


Figure 2: Direction of deviating bids by model. Shares of underbids (red) and overbids (blue) after removing bids within $\pm 2\%$ of the theoretical benchmark, for human bidders and each model, by auction format. Human shares are the frequencies reported by the source studies relative to value for the truthful formats, and the moment-matched reconstruction relative to the equilibrium bid for first-price. Hatched bars have fewer than 30 usable bids; in the clock formats GPT-5-mini states the dominant strategy and records no bids.

### 3.3 Tier 3: Orderings match for the non-reasoning large models

The ordinal tier asks whether the mechanisms that are harder for humans are also harder for LLM bidders, and whether the design contrasts that move human behavior move LLM behavior in the same direction. We report the ranking as a whole and the scorecard first, then the three design contrasts on which the human literature is clearest, narrating each by model class: the non-reasoning large models, the reasoning model, and the small model.

##### Rank concordance.

Table [2](https://arxiv.org/html/2507.09083v2#S3.T2 "Table 2 ‣ Rank concordance. ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports Kendall’s $\tau\_{b}$ between the human SMAD ranking and each model’s ranking over the five private-value formats, with uncertainty from resampling LLM bids within each cell and from re-drawing the human reconstruction. The non-reasoning large models reproduce the human ranking. For GPT-4o, $\tau\_{b}=0.60$ over all five formats (8 concordant and 2 discordant pairs, both involving the closed clock); the estimate is unchanged under bid-level resampling and remains positive in $100\%$ of joint draws that also re-draw the human reconstruction (joint 95% CI $[0.40,1.00]$), with first-price ranked hardest on both sides in every draw. For Claude 3.5 Haiku and Gemini 2.0 Flash, $\tau\_{b}=0.67$ over the four formats with adequate cells, again positive in essentially every joint draw. GPT-5-mini’s deviations are only $0.1\%$–$1.4\%$ in the observed private-value formats; its $\tau\_{b}$ of $-0.33$ ranks small differences among near-equilibrium bids, unlike the substantial deviations observed in humans. The small model inverts the ranking: Llama-3-8B’s $\tau\_{b}$ is $-1.00$, with deviations above $38\%$ in every format. The human ordering is thus recovered by the non-reasoning large models, not by LLMs as such, and for GPT-4o it is also robust to the sampling temperature (Appendix [D.1](https://arxiv.org/html/2507.09083v2#A4.SS1 "D.1 Varying Temperature for GPT-4o Agent ‣ Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")).

| Model | Formats used ($n\geq 30$) | $\tau\_{b}$ (all usable) | Joint 95% CI | $P(\tau\_{b}>0)$ | $\tau\_{b}$ (3 sealed) | FPSB$>$SPSB |
| --- | --- | --- | --- | --- | --- | --- |
| GPT-4o | all five (5) | $+0.60$ | $[+0.40,+1.00]$ | 100% | $+1.00$ | yes (100%) |
| Claude 3.5 Haiku | 3 sealed + AC (4) | $+0.67$ | $[+0.67,+1.00]$ | 100% | $+0.33$ | yes (100%) |
| Gemini 2.0 Flash | 3 sealed + AC-B (4) | $+0.67$ | $[+0.33,+1.00]$ | 100% | $+1.00$ | yes (100%) |
| GPT-5-mini | 3 sealed (3) | $-0.33$ | $[-0.33,+0.33]$ | 36% | $-0.33$ | no (36%) |
| Llama-3-8B | 3 sealed (3) | $-1.00$ | $[-1.00,-0.33]$ | 0% | $-1.00$ | no (0%) |

Table 2: Kendall’s $\tau\_{b}$ between the human and each model’s SMAD ranking over the private-value formats, with joint 95% bootstrap intervals over LLM bid resampling and human reconstruction re-draws ($B=2000$). GPT-5-mini’s clock cells record no bids (Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")) and are excluded.

##### Scorecard.

Table [3](https://arxiv.org/html/2507.09083v2#S3.T3 "Table 3 ‣ Scorecard. ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") collects the three tiers in one place. Each row is a feature of human behavior established in the experimental literature; each column records whether a model reproduces it. The magnitude rows show that no model falls within the human reconstruction band in more than two of the five private-value formats. The direction rows show that the human direction of second-price errors is reproduced by one model only. The ordering rows show that every ordering with a common benchmark is reproduced by the non-reasoning large models, and that the common-value ordering is reproduced by all five; the two models that fail the other orderings differ from humans in opposite ways: GPT-5-mini has very small private-value errors, while Llama-3-8B has large errors whose ordering is opposite to humans’. For a designer, the table says what LLM simulation can be used for in this domain: to screen which of two designs is behaviorally harder, not to predict how far, or in which direction, human bidders will deviate.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Human regularity | Human | GPT-4o | Claude 3.5 Haiku | Gemini 2.0 Flash | GPT-5-mini | Llama-3-8B | Non-reasoning large models |
| *Tier 1: magnitude within the human reconstruction band* | | | | | | | |
| FPSB IPV | [22.3, 27.3] | $\times$ | ✓ | ✓ | $\times$ | $\times$ | 2/3 |
| SPSB IPV | [4.5, 6.8] | $\times$ | $\times$ | $\times$ | $\times$ | $\times$ | 0/3 |
| Sealed SP-APV | [6.8, 11.7] | ✓ | ✓ | ✓ | $\times$ | $\times$ | 3/3 |
| Open clock, AC (APV) | [2.0, 5.4] | $\times$ | $\times$ | n/a | DS‡ | n/a | 0/2 |
| Closed clock, AC-B (APV) | [2.3, 10.1] | $\times$ | n/a | $\times$ | DS‡ | n/a | 0/2 |
| *Tier 2: direction of deviations* | | | | | | | |
| SPSB IPV errors are mostly overbids | ✓ | $\times$ | ✓ | $\times$ | $\approx$ | $\times$ | 1/3 |
| Sealed SP-APV errors are mostly overbids | ✓ | $\times$ | $\times$ | $\times$ | $\times$ | $\times$ | 0/3 |
| *Tier 3: cross-mechanism orderings (SMAD)* | | | | | | | |
| FPSB harder than SPSB (IPV) | ✓ (100%) | ✓ | ✓ | ✓ | $\approx$ | $\times$ | 3/3 |
| Open clock easier than sealed SP (APV) | ✓ (100%) | ✓ | ✓a | n/a | DS‡ | n/a | 2/2 |
| Closed clock easier than sealed SP (APV) | ✓ (92.6%) | ✓ | n/a | ✓a | DS‡ | n/a | 2/2 |
| FP curse stronger than SP curse (CV) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 3/3 |

Table 3: Scorecard by tier. Rows are features of human behavior; cells record whether a model reproduces them. Tier 1: SMAD inside (✓) or outside ($\times$) the human 95% reconstruction band, which the human column reports. Tiers 2 and 3: ✓reproduced, $\times$ not reproduced, $\approx$ uninformative because the cells sit at the theoretical benchmark; the human column gives the share of reconstruction re-draws in which the ordering holds where applicable. n/a: fewer than 30 usable bids; a: 46 usable bids; DS‡: GPT-5-mini states the dominant strategy outright and does not complete the clock procedure, so no clock bids are recorded. The last column counts the non-reasoning large models that reproduce the row, out of those with data.

#### 3.3.1 Payment rule: first-price is harder than second-price

Changing the payment rule from first-price to second-price holds the allocation rule fixed but changes what a bidder must compute: a Bayes–Nash shading rule in the first-price auction against a dominant strategy in the second-price auction. Human bidders find the first-price format far harder (SMAD $24.8\%$ against $5.6\%$, a $4.4\times$ gap; [Kagel and Levin, 1993](https://arxiv.org/html/2507.09083v2#bib.bib15)). The non-reasoning large models reproduce the ordering: first-price SMAD exceeds second-price SMAD for GPT-4o ($27.6\%$ vs. $8.7\%$), Claude 3.5 Haiku ($24.1\%$ vs. $9.7\%$), and Gemini 2.0 Flash ($27.1\%$ vs. $3.0\%$), with gaps between $2.5\times$ and $9\times$ around the human $4.4\times$. The reasoning model makes the ordering uninformative: GPT-5-mini bids on the equilibrium shading rule in the first-price auction ($0.1\%$) and at value in the second-price auction ($0.2\%$), leaving nothing to order. The small model inverts it: Llama-3-8B deviates more in the second-price auction ($54.9\%$) than in the first-price auction ($38.2\%$).

#### 3.3.2 Implementation: clock beats sealed bid

The second contrast holds the payment rule fixed and changes the implementation: the same second-price logic as a one-shot sealed bid or as an ascending clock in which bidders decide at each price whether to stay or exit. Truthful play is dominant in both, but human bidders play the clock far better, the observation behind obvious strategy-proofness ([Li, 2017](https://arxiv.org/html/2507.09083v2#bib.bib28); [Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)): in the affiliated-values environment, human SMAD is $3.5\%$ in the open clock and $5.8\%$ in the closed clock against $9.3\%$ in the sealed bid. The non-reasoning large models reproduce the ordering wherever the clock cells are adequate. GPT-4o’s SMAD falls from $10.7\%$ in the sealed bid to $0.8\%$ in the open clock and $0.5\%$ in the closed clock, a larger clock advantage than the human one; Claude 3.5 Haiku’s falls from $9.6\%$ to $5.7\%$ in the open clock ($n=46$) and Gemini 2.0 Flash’s from $8.0\%$ to $1.3\%$ in the closed clock ($n=46$); the remaining clock cells of these two models have two usable bids each and are not informative. The reasoning model again offers no ordering to test: GPT-5-mini is at the benchmark in the sealed bid ($1.4\%$), and in the clock formats it states the dominant strategy outright and does not complete the tick-by-tick procedure in any run, so no clock bids are recorded (Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")). The small model does not reproduce the ordering: Llama-3-8B’s clock cells have at most eight usable bids, and those bids deviate more than its sealed bids ($104\%$ and $67\%$ against $53\%$). On the human side, the open-clock ordering holds in $100\%$ of reconstruction re-draws and the closed-clock ordering in $92.6\%$, reflecting the wide standard error reported for the closed clock ([Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)); we treat the closed-clock ordering as the less secure of the two.

#### 3.3.3 Information structure: common value and competition

The third contrast changes the information structure. In a common-value auction each bidder observes a noisy signal of a value that is the same for everyone, so winning is bad news: the highest signal is on average too optimistic, and a bidder who does not condition on winning overbids and earns a negative profit, the winner’s curse ([Kagel and Levin, 1986](https://arxiv.org/html/2507.09083v2#bib.bib27)). The human literature establishes that the curse is more severe under first-price than under second-price rules ([Levin et al., 1996](https://arxiv.org/html/2507.09083v2#bib.bib43)). Because the benchmark for common-value bids is profit-based, we compare SMAD only within the information structure. All three model classes reproduce the ordering. First-price common-value deviations exceed second-price deviations for the non-reasoning large models (GPT-4o $60.0\%$ vs. $40.6\%$, Claude 3.5 Haiku $54.1\%$ vs. $27.2\%$, Gemini 2.0 Flash $59.5\%$ vs. $30.9\%$), for the reasoning model (GPT-5-mini $30.2\%$ vs. $14.8\%$), and for the small model (Llama-3-8B $53.7\%$ vs. $32.3\%$), as they do for humans ($47.6\%$ vs. $18.2\%$). This ordering is preserved by both comparison models; unlike in the private-value settings, GPT-5-mini makes substantial errors in common-value auctions. Appendix [F](https://arxiv.org/html/2507.09083v2#A6 "Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports, for the reference model, how winner losses vary with the number of bidders.

## 4 Application to Design: Interventions and Market Structure

The laboratory benchmarks of Section [3](https://arxiv.org/html/2507.09083v2#S3 "3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") establish where LLM bidders agree with human bidders: at the ordinal tier, for the non-reasoning large model family. This section asks whether that agreement is useful for design. Before running a human experiment, a designer typically wants to know two things: whether a proposed intervention is likely to help, and whether one market structure is likely to induce better behavior than another. We use the panel to answer both. First, we treat the ordinal result as a prediction: a presentation change that improves human play should improve play for the non-reasoning large models, and we test one such change, the clock framing of a sealed-bid second-price auction ([Breitmoser and Schweighofer-Kodritsch, 2022](https://arxiv.org/html/2507.09083v2#bib.bib29)). Second, we move from stylized laboratory mechanisms to a market structure documented in field data, an eBay-style proxy-bidding marketplace, and ask whether the panel recovers the ordering of bidding dynamics across closing rules.

### 4.1 Clock framing as an intervention: a prediction test

Recent studies ask whether behavior in strategy-proof auctions depends on how the mechanism is *presented*, holding the incentives fixed. [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29) show that reframing a sealed-bid second-price auction as a dynamic ascending clock substantially increases truth-telling among human subjects, consistent with the idea that step-by-step ‘‘stay/exit’’ choices reduce the cognitive burden of mapping a value into a single sealed bid.5 If the non-reasoning large models preserve the ordering of human difficulty, the clock framing should raise their truthful play as well; the reasoning model, already at the benchmark, offers no room for improvement. We implement the clock framing as a change of prompt only: the allocation and payment rule are unchanged (Section [2.3](https://arxiv.org/html/2507.09083v2#S2.SS3 "2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"); prompts in Appendix [I.5](https://arxiv.org/html/2507.09083v2#A9.SS5 "I.5 Intervention Prompt ‣ Appendix I Auction Rule Prompts ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")). Across all conditions we summarize behavior by the per-bid scaled deviation $(b-v)/\mathbb{E}[b^{\star}]$, with the same scaling as SMAD; negative values are underbids and positive values overbids.6

For the reference model the prediction holds. Under the traditional description, GPT-4o bids are systematically below value (mean deviation $-0.118$, s.d. $0.128$, $n=300$). Under the clock framing the mean deviation moves to $-0.062$ (a $47\%$ reduction in average underbidding), the dispersion falls from $0.128$ to $0.084$, and the share of bids within $\pm 2\%$ of value rises from $28\%$ to $45\%$; both a Welch $t$-test and a Mann–Whitney test reject equality at $p<10^{-5}$ (Cohen’s $d=0.48$). Table [4](https://arxiv.org/html/2507.09083v2#S4.T4 "Table 4 ‣ 4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") extends the test to the other two non-reasoning large model families, run with the same templates. The clock framing lowers SMAD for Claude 3.5 Haiku ($8.1\to 7.1\%$) as it does for GPT-4o ($11.8\to 6.2\%$), and raises it for Gemini 2.0 Flash ($5.0\to 9.3\%$). The exception is instructive: Gemini’s baseline second-price play is already the closest to truthful of the three ($62\%$ of bids within $\pm 2\%$ of value), so it is the family nearest the ceiling in this format, where the ordinal argument predicts no gain. Appendix [G](https://arxiv.org/html/2507.09083v2#A7 "Appendix G Robustness of the Clock-Framing Effect: An Additional Model Family ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") repeats the test for an open-weights model outside the main panel, Gemma-3-27B, whose SMAD falls from $26.3\%$ to $13.5\%$. Claude’s case is also worth reading closely: its mean absolute deviation falls only slightly, while the share of exactly truthful bids drops from $28\%$ to $7\%$. The clock framing removes Claude’s overbidding in the human direction and replaces it with mild, uniform underbidding, a change in direction more than in magnitude. The prediction that a lever which helps human bidders helps the non-reasoning large models is thus borne out for the models with non-degenerate baseline error and fails, as it should, where there is no error to remove.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | Baseline | | Clock framing | | within $\pm 2\%$ |  | matches |
| Model | SMAD | mean dev | SMAD | mean dev | baseline $\to$ clock | $\Delta$ (MW) | human sign? |
| GPT-4o | 11.8% | $-0.118$ | 6.2% | $-0.062$ | 28% $\to$ 45% | $\downarrow$ $p<0.001$ | $\surd$ |
| Claude 3.5 Haiku | 8.1% | $+0.022$ | 7.1% | $-0.042$ | 28% $\to$ 7% | $\downarrow$ $p<0.001$ | $\surd$ |
| Gemini 2.0 Flash | 5.0% | $-0.050$ | 9.3% | $-0.093$ | 62% $\to$ 37% | $\uparrow$ $p<0.001$ | $\times$ |

Table 4: Clock framing of the second-price sealed-bid auction across the three non-reasoning large model families. SMAD (%), mean scaled deviation $(b-v)/\mathbb{E}[b^{\star}]$, and the share of bids within $\pm 2\%$ of value under the baseline description (two pooled runs of the standard description) and under the clock framing; $p$-values are Mann–Whitney tests against the same model’s baseline. The final column records whether the sign of the effect matches the human evidence of [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29): $\surd$ if SMAD falls with $p<0.05$, $\times$ otherwise.

### 4.2 Market structure: closing rules in an eBay-style marketplace

Having tested LLM behavior against human behavior in controlled laboratory experiment settings, we study a more complicated auction setting modeled after eBay’s auction-based marketplace. eBay’s auction platform, studied by [Einav et al. (2011)](https://arxiv.org/html/2507.09083v2#bib.bib20) and others, features design elements, for example proxy bidding and a fixed closing time, that
have been shown empirically to have substantial effects on bidder behavior.
These differences highlight the gap between lab experiment and real-world bidding, where seemingly small design details can induce large shifts in timing, competition, and price discovery.

We implement a simplified eBay-style environment that isolates one design parameter documented in the empirical literature: the auction *closing rule*. The core mechanics of an eBay auction are simple: bidders on eBay use a proxy bidding system, which means that each bidder submits their “maximum bid" to the platform, and the platform automatically bids on their behalf, only as much as necessary to keep the winning bidder in the lead (i.e., the second-highest bid + $1, with incremental bidding managed automatically).
Bidders can increase their maximum bid at any point in time, until some closing time of
the auction, giving this the flavor
of an open, second-price auction.
As described in Appendix [B.3](https://arxiv.org/html/2507.09083v2#A2.SS3 "B.3 Stylized eBay proxy-bidding environment ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), we compare two treatments: (T1) the standard eBay hard close with proxy bidding, and (T2) proxy bidding with a soft-close (auction-extension) rule in the spirit of early Amazon auctions. The question is not whether LLM bidders reproduce the timing of human bids, but whether they recover the *ordering* of bidding dynamics across the two closing rules that the field evidence documents: more last-moment bidding under a hard close than under a soft close.

##### LLMs exhibit bid sniping under hard-close rules, and respond to soft-close extensions.

A hallmark of hard-close online auctions is *bid sniping*: bidders delay their bids until the final moments of the auction to avoid triggering competitive responses . Sniping is widely observed on eBay 7, and has long been studied as a behavioral and strategic departure from the simple “bid-your-value” logic implied by proxy bidding ([Roth and Ockenfels, 2002](https://arxiv.org/html/2507.09083v2#bib.bib18)).
From the standpoint of market design, sniping is potentially costly because it compresses information revelation into the final moments of the auction, weakening timely price discovery.
A classic intervention is a *soft-close* (auction-extension) rule: if a new maximum bid arrives near the end, the auction is extended, allowing additional responses. Empirically, this design detail is credited with substantial differences in bidding dynamics between early Amazon.com auctions (soft close) and eBay (hard close).
Specifically, [Roth and Ockenfels (2002)](https://arxiv.org/html/2507.09083v2#bib.bib18) and [Ockenfels and Roth (2006)](https://arxiv.org/html/2507.09083v2#bib.bib41) show that much less sniping occurred on Amazon.com, with bids on Amazon.com occurring throughout the auction compared to the empirical evidence of considerable bid
sniping on eBay.

We ask whether LLM bidders respond to these temporal incentives in the same direction. We measure the *final-winning-bid time*, defined as the last period in which the eventual winner changes her maximum bid. Intuitively, this statistic captures when the winner is effectively determined. Figure [3](https://arxiv.org/html/2507.09083v2#S4.F3 "Figure 3 ‣ LLMs exhibit bid sniping under hard-close rules, and respond to soft-close extensions. ‣ 4.2 Market structure: closing rules in an eBay-style marketplace ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports histograms of this timing under hard close versus soft close, and Appendix [H](https://arxiv.org/html/2507.09083v2#A8 "Appendix H Additional Results for the eBay-Style Environment ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports the corresponding cumulative distributions.

Two patterns emerge. First, under the standard hard-close rule (T1), LLM bidders concentrate their decisive bid updates near the end of the auction, consistent with sniping behavior: in $63\%$ of hard-close auctions ($19$ of $30$) the final winning bid is placed in the last scheduled period, and the median final-winning-bid period is the last one. Second, introducing a soft-close extension rule (T2) sharply attenuates this last-period concentration: the distribution of final-winning-bid times shifts earlier, and last-period decisive bids become substantially less frequent: $7\%$ of soft-close auctions ($2$ of $30$) are decided in the last scheduled period, one more in an extension period, and the median final-winning-bid period falls to $5.5$ (Mann–Whitney $p=0.0002$; Kolmogorov–Smirnov $p=0.0003$). In short, LLM bidders respond strongly to the closing rule in the same qualitative direction emphasized in the human empirical literature: soft close de-incentivizes waiting and spreads competition earlier in time, improving the timing of information revelation. The magnitude of the shift is not the object of interest, since there is no human anchor for the timing distribution in our stylized environment. The ordering of the two closing rules, however, matches the field evidence, which is what the ordinal reading of Section [3](https://arxiv.org/html/2507.09083v2#S3 "3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") predicts for a non-stylized setting.

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/ebay_hist_closing_only.png)


Figure 3: Final winning-bid timing in simulated eBay-style auctions, IPV environment: standard hard close (left) vs. soft-close extension rule (right). The final winning bid is the last period in which the eventual winner raises her maximum bid; the dashed line marks the scheduled close. The soft-close rule moves the timing of the final winning bid substantially earlier.

## 5 Discussion

### 5.1 What LLM simulation can and cannot deliver for mechanism design

Simulations are proliferating in high-stakes engineering disciplines, where iterative design and validation are performed long before prototypes are built. Traditional mechanism design research, by contrast, relies on expensive human-subject experiments or on confounded observational data. Our results locate the role that LLM simulation can play in between. In magnitude, LLM behavior is not human behavior, and in direction it is often the opposite of human behavior: the same second-price auction that induces overbidding in the laboratory induces underbidding in most models. Any use of LLM bidders that reads off magnitudes (predicted revenue, predicted efficiency loss, predicted overbidding rates) is not supported by our evidence. At the ordinal level, however, the picture is different. For the non-reasoning large models, whose baseline deviations are neither negligible nor overwhelming, the cross-mechanism ordering of difficulty, the sign of the clock advantage, the sign of the first- versus second-price common-value comparison, the sign of the clock-framing effect, and the ordering of last-minute bidding across closing rules all match the human evidence. These are exactly the questions a designer asks when choosing among candidate mechanisms or presentations, and they are questions that dominant-strategy theory alone cannot answer, since it is silent on how the same incentives presented differently will be played.

We therefore propose that LLM bidders be used as an *ordinal screening* instrument within a two-tier workflow. In the first tier, a panel of models is run on the candidate designs, and the designs are ranked, or the sign of a proposed change is estimated, at a cost of a few dollars per cell. In the second tier, the designs that survive screening are taken to a human experiment, whose purpose is to establish magnitudes and directions, which the panel cannot supply. Three practices follow from our results. Models should be checked against known human orderings before they are used to screen new designs: neither nearly exact equilibrium play nor large errors alone establish suitability. Each model’s use of extended reasoning and observed baseline errors should be reported with its results. And agreement across the panel, rather than the behavior of any single model, should be the evidence that an ordering is stable.

LLM agents also operate on a text-based reasoning trace that can be queried. With further validation, these traces may offer information about the cognitive constraints that underlie deviations from classical auction theory; in this paper we use them only as a diagnostic and rely on them for no claim.

### 5.2 Practical advantages and the scope for mechanism design

LLM experiments avoid participant recruitment and can be repeated while varying a prompt or an auction rule. This complements online human laboratories, which have already lowered the cost of controlled behavioral research ([Horton et al., 2011](https://arxiv.org/html/2507.09083v2#bib.bib16); [Oprea, 2024](https://arxiv.org/html/2507.09083v2#bib.bib17); [Enke et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib19)). Controlled simulations can identify how design changes affect the simulated agents under the tested protocol. Whether those effects carry over to humans requires separate validation. The low API cost of the reported experiments (under $400 for the GPT-4o experiments, against roughly $15,000 for a comparable human study; [Li, 2017](https://arxiv.org/html/2507.09083v2#bib.bib28)) is therefore a practical advantage for exploration, not evidence that they replace human experiments.

### 5.3 Limitations

Two limitations bound the interpretation. First, the human benchmarks are reconstructions of published moments, not micro data. The bands we report measure how far an anchor can move within what the source statistics leave undetermined; they are not sampling bands on human behavior, and we accordingly use the reconstructions only for orderings, directions, and comparative statics. Second, the variation across simulated bidders is confined to their induced values: every bidder receives the same objective and the same motivation. This mirrors the induced-value design of the human experiments we benchmark against, but it leaves open how a panel would behave if bidders also varied along other dimensions, such as their attitude to risk. Adding such variation in ways that preserve the incentive structure of the human experiments is a natural extension.

## 6 Conclusion

This paper reports more than 1,000 auction experiments with LLM bidders across five models, benchmarked against human laboratory evidence that we made comparable across mechanisms by reconstructing published moments. LLM bidders do not replicate human auction behavior: their bid distributions differ in magnitude, and in the second-price auction most models err in the opposite direction from human subjects. The surprising finding is that, without task-specific fine-tuning or calibration to human bids, the three non-reasoning large models robustly preserve key orderings of auction difficulty. Clock implementations reduce deviations wherever data are adequate, and clock framing helps two of the three models. More accurate equilibrium play does not guarantee greater similarity to humans: the reasoning model’s near-equilibrium private-value bids leave little variation in errors to compare, while the small model’s large errors yield an inverted ranking. Both nevertheless preserve the first- versus second-price common-value ordering.

Auctions thus illustrate a broader research agenda for LLM simulations of human behavior: determine which features of behavior a model preserves, distinguishing magnitudes, directions, and orderings. Our results establish an out-of-the-box baseline for this agenda, complementary to models specifically trained on human choices. Where orderings have been validated, an LLM panel may help screen candidate interventions before human experiments establish their effects. Whether this approach works in voting, matching, contract design, or other behavioral settings remains an empirical question. The contribution is a way to test the usefulness of a simulation for a particular comparison, rather than assume that a model is a general substitute for human participants.

##### Disclosure.

Claude (Anthropic, Opus 4.6) was used to assist with plotting code and manuscript formatting to style guide requirements

## References

- Achiam et al. (2023)
  J. Achiam, S. Adler, S. Agarwal, L. Ahmad, I. Akkaya, F. L. Aleman, D. Almeida, J. Altenschmidt, S. Altman, S. Anadkat, et al.
  Gpt-4 technical report.
  arXiv preprint arXiv:2303.08774.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Aher et al. (2023)
  G. V. Aher, R. I. Arriaga, and A. T. Kalai
  Using large language models to simulate multiple humans and replicate human subject studies.
  In International Conference on Machine Learning,
  pp. 337–371.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Bazerman and Samuelson (1983)
  M. H. Bazerman and W. F. Samuelson
  I won the auction but don’t want the prize.
  Journal of conflict resolution 27 (4), pp. 618–634.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Binz et al. (2025)
  M. Binz, E. Akata, M. Bethge, et al.
  A foundation model to predict and capture human cognition.
  Nature 644 (8078), pp. 1002–1009.
  External Links: [Document](https://dx.doi.org/10.1038/s41586-025-09215-4),
  [Link](https://www.nature.com/articles/s41586-025-09215-4)
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p3.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Breitmoser and Schweighofer-Kodritsch (2022)
  Y. Breitmoser and S. Schweighofer-Kodritsch
  Obviousness around the clock.
  Experimental Economics 25 (2), pp. 483–513.
  Cited by: [§A.2](https://arxiv.org/html/2507.09083v2#A1.SS2.p1.1 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§A.2](https://arxiv.org/html/2507.09083v2#A1.SS2.p2.1 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 6](https://arxiv.org/html/2507.09083v2#A1.T6.3.1.7.2 "In A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§I.5](https://arxiv.org/html/2507.09083v2#A9.SS5.p1.1 "I.5 Intervention Prompt ‣ Appendix I Auction Rule Prompts ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p6.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [1st item](https://arxiv.org/html/2507.09083v2#S2.I1.i1.p1.1 "In Parameter identification. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.1](https://arxiv.org/html/2507.09083v2#S2.SS1.SSS0.Px2.p1.1 "Source papers and equilibrium benchmarks. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.2](https://arxiv.org/html/2507.09083v2#S2.SS2.SSS0.Px2.p1.1 "What the human literature says about the ordering of SMAD. ‣ 2.2 Unified Deviation Metric across Auctions ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px3.p1.1 "Bidder instructions. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§3.3.2](https://arxiv.org/html/2507.09083v2#S3.SS3.SSS2.p1.1 "3.3.2 Implementation: clock beats sealed bid ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§4.1](https://arxiv.org/html/2507.09083v2#S4.SS1.p1.1 "4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 4](https://arxiv.org/html/2507.09083v2#S4.T4 "In 4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§4](https://arxiv.org/html/2507.09083v2#S4.p1.1 "4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Bubeck et al. (2023)
  S. Bubeck, V. Chandrasekaran, R. Eldan, J. Gehrke, E. Horvitz, E. Kamar, P. Lee, Y. T. Lee, Y. Li, S. Lundberg, et al.
  Sparks of artificial general intelligence: early experiments with gpt-4.
  arXiv preprint arXiv:2303.12712.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Chen et al. (2023)
  J. Chen, S. Yuan, R. Ye, B. P. Majumder, and K. Richardson
  Put your money where your mouth is: evaluating strategic planning and execution of llm agents in an auction arena.
  arXiv preprint arXiv:2310.05746.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Chen et al. (2024)
  Z. Chen et al.
  AuctionNet: a novel benchmark for decision-making in large-scale games.
  arXiv preprint arXiv:2412.10798.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Coppinger et al. (1980)
  V. M. Coppinger, V. L. Smith, and J. A. Titus
  Incentives and behavior in english, dutch and sealed-bid auctions.
  Economic inquiry 18 (1), pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Corrigan et al. (2025)
  J. R. Corrigan, C. Grebitus, and M. C. Rousu
  On the usefulness of using current llms for experimental auction valuation.
  SSRN working paper.
  Note: Available at SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=5217193
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Cox et al. (1988)
  J. C. Cox, V. L. Smith, and J. M. Walker
  Theory and individual behavior of first-price auctions.
  Journal of Risk and uncertainty 1, pp. 61–99.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Curry et al. (2025)
  M. J. Curry, Z. Fan, Y. Jiang, S. S. Ravindranath, T. Wang, and D. C. Parkes
  Automated mechanism design: a survey.
  ACM SIGecom Exchanges 22 (2), pp. 102–120.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Daskalakis et al. (2024)
  C. Daskalakis, I. Gemp, Y. Jiang, R. P. Leme, C. Papadimitriou, and G. Piliouras
  Charting the shapes of stories with game theory.
  arXiv preprint arXiv:2412.05747.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Dong et al. (2024)
  Q. Dong, L. Li, D. Dai, C. Zheng, J. Ma, R. Li, H. Xia, J. Xu, Z. Wu, B. Chang, et al.
  A survey on in-context learning.
  In Proceedings of the 2024 conference on empirical methods in natural language processing,
  pp. 1107–1128.
  Cited by: [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px1.p1.1 "Single-auction baseline and learning ablation. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Duetting et al. (2024)
  P. Duetting, V. Mirrokni, R. Paes Leme, H. Xu, and S. Zuo
  Mechanism design for large language models.
  In Proceedings of the ACM Web Conference 2024,
  pp. 144–155.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Dütting et al. (2024)
  P. Dütting, Z. Feng, H. Narasimhan, D. C. Parkes, and S. S. Ravindranath
  Optimal auctions through deep learning: advances in differentiable economics.
  Journal of the ACM 71 (1), pp. 1–53.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Einav et al. (2011)
  L. Einav, T. Kuchler, J. D. Levin, and N. Sundaresan
  Learning from seller experiments in online markets.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§4.2](https://arxiv.org/html/2507.09083v2#S4.SS2.p1.1 "4.2 Market structure: closing rules in an eBay-style marketplace ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Enke et al. (2024)
  B. Enke, T. Graeber, R. Oprea, and J. Yang
  Behavioral attenuation.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§5.2](https://arxiv.org/html/2507.09083v2#S5.SS2.p1.1 "5.2 Practical advantages and the scope for mechanism design ‣ 5 Discussion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Feng et al. (2018)
  Z. Feng, H. Narasimhan, and D. C. Parkes
  Deep learning for revenue-optimal auctions with budgets.
  In Proceedings of the 17th international conference on autonomous agents and multiagent systems,
  pp. 354–362.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Fish et al. (2024)
  S. Fish, Y. A. Gonczarowski, and R. I. Shorrer
  Algorithmic collusion by large language models.
  arXiv preprint arXiv:2404.00806.
  Cited by: [§B.1](https://arxiv.org/html/2507.09083v2#A2.SS1.SSS0.Px2.p1.1 "Universal objective instruction. ‣ B.1 Simulation process in sealed-bid auctions ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Gonczarowski et al. (2023)
  Y. A. Gonczarowski, O. Heffetz, and C. Thomas
  Strategyproofness-exposing mechanism descriptions.
  Technical report
   National Bureau of Economic Research.
  Cited by: [3rd item](https://arxiv.org/html/2507.09083v2#S2.I1.i3.p1.1 "In Parameter identification. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.1](https://arxiv.org/html/2507.09083v2#S2.SS1.SSS0.Px2.p1.1 "Source papers and equilibrium benchmarks. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px3.p1.1 "Bidder instructions. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [footnote 5](https://arxiv.org/html/2507.09083v2#footnote5 "In 4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Hajiaghayi et al. (2024)
  M. Hajiaghayi, S. Lahaie, K. Rezaei, and S. Shin
  Ad auctions for llms via retrieval augmented generation.
  In Advances in Neural Information Processing Systems,
  Vol. 37.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Horton et al. (2024)
  J. Horton, A. Filippas, and R. Horton
  EDSL: expected parrot domain specific language for ai powered social science.
  Whitepaper
   Expected Parrot.
  Cited by: [§2.5](https://arxiv.org/html/2507.09083v2#S2.SS5.p1.1 "2.5 Model Panel ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Horton et al. (2011)
  J. J. Horton, D. G. Rand, and R. J. Zeckhauser
  The online laboratory: conducting experiments in a real labor market.
  Experimental economics 14, pp. 399–425.
  Cited by: [§5.2](https://arxiv.org/html/2507.09083v2#S5.SS2.p1.1 "5.2 Practical advantages and the scope for mechanism design ‣ 5 Discussion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Horton (2023)
  J. J. Horton
  Large language models as simulated economic agents: what can we learn from homo silicus?.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p3.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.5](https://arxiv.org/html/2507.09083v2#S2.SS5.p1.1 "2.5 Model Panel ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Huang et al. (2025)
  D. Huang, F. Marmolejo-Cossío, E. Lock, and D. Parkes
  Accelerated preference elicitation with llm-based proxies.
  arXiv preprint arXiv:2501.14625.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Jiang et al. (2025)
  Y. Jiang, Z. Feng, and A. Mehta
  Incentive-aligned multi-source llm summaries.
  arXiv preprint arXiv:2509.25184.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Kagel et al. (1987)
  J. H. Kagel, R. M. Harstad, D. Levin, et al.
  Information impact and allocation rules in auctions with affiliated private values: a laboratory study.
  Econometrica 55 (6), pp. 1275–1304.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Kagel and Levin (1986)
  J. H. Kagel and D. Levin
  The winner’s curse and public information in common value auctions.
  The American economic review, pp. 894–920.
  Cited by: [Appendix F](https://arxiv.org/html/2507.09083v2#A6.p1.1 "Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Appendix F](https://arxiv.org/html/2507.09083v2#A6.p2.1 "Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Appendix F](https://arxiv.org/html/2507.09083v2#A6.p3.1 "Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.2](https://arxiv.org/html/2507.09083v2#S2.SS2.SSS0.Px2.p1.1 "What the human literature says about the ordering of SMAD. ‣ 2.2 Unified Deviation Metric across Auctions ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§3.3.3](https://arxiv.org/html/2507.09083v2#S3.SS3.SSS3.p1.1 "3.3.3 Information structure: common value and competition ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Kagel and Levin (1993)
  J. H. Kagel and D. Levin
  Independent private value auctions: bidder behaviour in first-, second-and third-price auctions with varying numbers of bidders.
  The Economic Journal 103 (419), pp. 868–879.
  Cited by: [§A.2](https://arxiv.org/html/2507.09083v2#A1.SS2.p1.1 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 6](https://arxiv.org/html/2507.09083v2#A1.T6.3.1.2.2 "In A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 6](https://arxiv.org/html/2507.09083v2#A1.T6.3.1.3.2 "In A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 6](https://arxiv.org/html/2507.09083v2#A1.T6.3.1.4.2 "In A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p4.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [2nd item](https://arxiv.org/html/2507.09083v2#S2.I1.i2.p1.1 "In Parameter identification. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.1](https://arxiv.org/html/2507.09083v2#S2.SS1.SSS0.Px2.p1.1 "Source papers and equilibrium benchmarks. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.2](https://arxiv.org/html/2507.09083v2#S2.SS2.SSS0.Px2.p1.1 "What the human literature says about the ordering of SMAD. ‣ 2.2 Unified Deviation Metric across Auctions ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px3.p1.1 "Bidder instructions. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§3.2](https://arxiv.org/html/2507.09083v2#S3.SS2.p2.1 "3.2 Tier 2: Directions do not match ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§3.3.1](https://arxiv.org/html/2507.09083v2#S3.SS3.SSS1.p1.1 "3.3.1 Payment rule: first-price is harder than second-price ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [footnote 3](https://arxiv.org/html/2507.09083v2#footnote3 "In Reconstructing human bid distributions via moment matching. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [footnote 4](https://arxiv.org/html/2507.09083v2#footnote4 "In Parameter identification. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Kagel and Roth (2020)
  J. H. Kagel and A. E. Roth
  The handbook of experimental economics, volume 2.
   Princeton university press.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Krishna (2009)
  V. Krishna
  Auction theory.
   Academic press.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Levin et al. (1996)
  D. Levin, J. H. Kagel, and J. Richard
  Revenue effects and information processing in english common value auctions.
  The American Economic Review, pp. 442–460.
  Cited by: [Appendix F](https://arxiv.org/html/2507.09083v2#A6.p2.1 "Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Appendix F](https://arxiv.org/html/2507.09083v2#A6.p4.1 "Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.2](https://arxiv.org/html/2507.09083v2#S2.SS2.SSS0.Px2.p1.1 "What the human literature says about the ordering of SMAD. ‣ 2.2 Unified Deviation Metric across Auctions ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§3.3.3](https://arxiv.org/html/2507.09083v2#S3.SS3.SSS3.p1.1 "3.3.3 Information structure: common value and competition ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Li (2017)
  S. Li
  Obviously strategy-proof mechanisms.
  American Economic Review 107 (11), pp. 3257–3287.
  Cited by: [§A.2](https://arxiv.org/html/2507.09083v2#A1.SS2.p1.1 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 6](https://arxiv.org/html/2507.09083v2#A1.T6.3.1.5.2 "In A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Table 6](https://arxiv.org/html/2507.09083v2#A1.T6.3.1.6.2 "In A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p4.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [1st item](https://arxiv.org/html/2507.09083v2#S2.I1.i1.p1.1 "In Parameter identification. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.1](https://arxiv.org/html/2507.09083v2#S2.SS1.SSS0.Px2.p1.1 "Source papers and equilibrium benchmarks. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.1](https://arxiv.org/html/2507.09083v2#S2.SS1.SSS0.Px3.p1.1 "Parameter identification. ‣ 2.1 Human Experiment Data Collection ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.2](https://arxiv.org/html/2507.09083v2#S2.SS2.SSS0.Px2.p1.1 "What the human literature says about the ordering of SMAD. ‣ 2.2 Unified Deviation Metric across Auctions ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px3.p1.1 "Bidder instructions. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§3.3.2](https://arxiv.org/html/2507.09083v2#S3.SS3.SSS2.p1.1 "3.3.2 Implementation: clock beats sealed bid ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§5.2](https://arxiv.org/html/2507.09083v2#S5.SS2.p1.1 "5.2 Practical advantages and the scope for mechanism design ‣ 5 Discussion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Lu (2025)
  J. Lu
  Claude, gemini, and chatgpt walk into an auction.
  SSRN working paper.
  Note: Available at SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=5335262
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Manning et al. (2024)
  B. S. Manning, K. Zhu, and J. J. Horton
  Automated social science: language models as scientist and subjects.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p1.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p3.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Myerson (1981)
  R. B. Myerson
  Optimal auction design.
  Mathematics of operations research 6 (1), pp. 58–73.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Ockenfels and Roth (2006)
  A. Ockenfels and A. E. Roth
  Late and multiple bidding in second price internet auctions: theory and evidence concerning different rules for ending an auction.
  Games and Economic behavior 55 (2), pp. 297–320.
  Cited by: [Figure 8](https://arxiv.org/html/2507.09083v2#A8.F8 "In Appendix H Additional Results for the eBay-Style Environment ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Figure 8](https://arxiv.org/html/2507.09083v2#A8.F8.5.1 "In Appendix H Additional Results for the eBay-Style Environment ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p6.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§4.2](https://arxiv.org/html/2507.09083v2#S4.SS2.SSS0.Px1.p1.1 "LLMs exhibit bid sniping under hard-close rules, and respond to soft-close extensions. ‣ 4.2 Market structure: closing rules in an eBay-style marketplace ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Oprea (2024)
  R. Oprea
  Decisions under risk are decisions under complexity.
  American Economic Review 114 (12), pp. 3789–3811.
  Cited by: [§5.2](https://arxiv.org/html/2507.09083v2#S5.SS2.p1.1 "5.2 Practical advantages and the scope for mechanism design ‣ 5 Discussion ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Ravindranath et al. (2023)
  S. S. Ravindranath, Y. Jiang, and D. C. Parkes
  Data market design through deep learning.
  Advances in Neural Information Processing Systems 36, pp. 6662–6689.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Roth and Ockenfels (2002)
  A. E. Roth and A. Ockenfels
  Last-minute bidding and the rules for ending second-price auctions: evidence from ebay and amazon auctions on the internet.
  American economic review 92 (4), pp. 1093–1103.
  Cited by: [Figure 8](https://arxiv.org/html/2507.09083v2#A8.F8 "In Appendix H Additional Results for the eBay-Style Environment ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [Figure 8](https://arxiv.org/html/2507.09083v2#A8.F8.5.1 "In Appendix H Additional Results for the eBay-Style Environment ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p2.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§1](https://arxiv.org/html/2507.09083v2#S1.p6.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§4.2](https://arxiv.org/html/2507.09083v2#S4.SS2.SSS0.Px1.p1.1 "LLMs exhibit bid sniping under hard-close rules, and respond to soft-close extensions. ‣ 4.2 Market structure: closing rules in an eBay-style marketplace ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Smith (1976)
  V. L. Smith
  Experimental economics: induced value theory.
  American Economic Review 66 (2), pp. 274–279.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p3.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"),
  [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px3.p1.1 "Bidder instructions. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Smith (1982)
  V. L. Smith
  Microeconomic systems as an experimental science.
  American Economic Review 72 (5), pp. 923–955.
  Cited by: [§2.3](https://arxiv.org/html/2507.09083v2#S2.SS3.SSS0.Px3.p1.1 "Bidder instructions. ‣ 2.3 LLM Data Generation ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Soumalias et al. (2025)
  E. Soumalias, Y. Jiang, K. Zhu, M. Curry, S. Seuken, and D. C. Parkes
  LLM-powered preference elicitation in combinatorial assignment.
  arXiv preprint arXiv:2502.10308.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Tsuchihashi (2023)
  T. Tsuchihashi
  Do ais dream of homo economicus? answers from chatgpt.
  SSRN working paper.
  Note: Available at SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=4495500
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Wan et al. (2023)
  Y. Wan, G. Pu, J. Sun, A. Garimella, K. Chang, and N. Peng
  " Kelly is a warm person, joseph is a role model": gender biases in llm-generated reference letters.
  arXiv preprint arXiv:2310.09219.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Wang et al. (2024)
  T. Wang, Y. Jiang, and D. C. Parkes
  GemNet: menu-based, strategy-proof multi-bidder auctions through deep learning.
  In Proceedings of the 25th ACM Conference on Economics and Computation,
  pp. 1100–1100.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Wang et al. (2025)
  T. Wang, Y. Jiang, and D. C. Parkes
  BundleFlow: deep menus for combinatorial auctions by diffusion-based optimization.
  arXiv preprint arXiv:2502.15283.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Wang et al. (2026)
  T. Wang, Y. Pan, X. Yang, Y. Jiang, M. Tambe, and D. C. Parkes
  LLM active alignment: a nash equilibrium perspective.
  arXiv preprint arXiv:2602.06836.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Wei et al. (2022)
  J. Wei, X. Wang, D. Schuurmans, M. Bosma, F. Xia, E. Chi, Q. V. Le, D. Zhou, et al.
  Chain-of-thought prompting elicits reasoning in large language models.
  Advances in neural information processing systems 35, pp. 24824–24837.
  Cited by: [§B.1](https://arxiv.org/html/2507.09083v2#A2.SS1.SSS0.Px1.p1.1 "Prompt structure. ‣ B.1 Simulation process in sealed-bid auctions ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
- Zhang et al. (2025)
  Y. Zhang et al.
  InfoBid: a simulation framework for studying information disclosure in auctions with large language model-based agents.
  arXiv preprint arXiv:2503.22726.
  Cited by: [§1](https://arxiv.org/html/2507.09083v2#S1.p7.1 "1 Introduction ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

## Appendix A Details about Human Data Collection

##### Mapping original reported statistics into the unified deviation metric.

(Li; Breitmoser–Schweighofer-Kodritsch) AC/AC-B/2P under APV.
These papers report Mean Absolute Deviation (MAD)8
from truthful bidding. In Li (2017), the reported deviation is based on a group-level statistic involving the second-highest bid and second-highest value; in Breitmoser–Schweighofer-Kodritsch, deviations are computed from submitted bids (often focusing on non-winning bids). In each case we adhere to the paper’s unit of observation, but the SMAD definition conceptually applies to the underlying submitted bids.
Because the equilibrium optimum under AC and 2P is truthful bidding $b^{\star}(v)=v$, we have $d\_{m}=|b-v|$ and thus

|  |  |  |
| --- | --- | --- |
|  | $$\Delta\_{m}=100\cdot\frac{\mathrm{MAD}\_{m}}{\mu\_{m}^{\star}},\qquad\mu\_{m}^{\star}=\mathbb{E}[v].$$ |  |

Here $\mathbb{E}[v]$ is implied by the experimental value distribution reported by the paper (e.g., $\mathbb{E}[v]=70$ in Li; and $\mathbb{E}[v]=65$ in Breitmoser--Schweighofer-Kodritsch given their stated common-value and idiosyncratic components).9
If the paper reports $\mathrm{SE}(\mathrm{MAD}\_{m})$ (often using group means as the unit of observation), we propagate it via

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{SE}(\widehat{\Delta}\_{m})=100\cdot\frac{\mathrm{SE}(\widehat{\mathrm{MAD}}\_{m})}{\widehat{\mu}\_{m}^{\star}},\quad\mathrm{CI}\_{95\%}(\Delta\_{m})=\widehat{\Delta}\_{m}\pm 1.96\,\mathrm{SE}(\widehat{\Delta}\_{m}).$$ |  |

(Kagel–Levin 1993) First-/Second-/Third-price IPV.
Kagel–Levin report bid regressions and over-/under-bidding frequencies for fixed bidder counts (e.g., $N\in\{5,10\}$). We treat each $N$ separately: the regression form $\hat{b}(x)=\hat{\alpha}+\hat{\beta}x$ is fit for a *fixed* number of bidders, and is not pooled across varying $N$.
Theory gives linear equilibrium bid functions under IPV with $x\sim U[x\_{\min},x\_{\max}]$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle b^{\star}\_{\mathrm{FP\\_IPV}}(x)$ | $\displaystyle=x-\frac{x-x\_{\min}}{N}=\frac{N-1}{N}x+\frac{1}{N}x\_{\min}$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle b^{\star}\_{\mathrm{SP\\_IPV}}(x)$ | $\displaystyle=x$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle b^{\star}\_{\mathrm{TP\\_IPV}}(x)$ | $\displaystyle=x+\frac{x-x\_{\min}}{N-2}=\frac{N-1}{N-2}x-\frac{1}{N-2}x\_{\min}$ |  |

(When $x\_{\min}=0$, these reduce to the familiar slope-only formulas.)
Because only summary moments are reported, we reconstruct the bid distribution via a parametric data-generating process (DGP) consistent with Table 2.
For each auction series and fixed $N$, we assume $x\sim U[x\_{\min},x\_{\max}]$ (bounds from the paper), and generate bids as

|  |  |  |
| --- | --- | --- |
|  | $$b=\hat{\alpha}+\hat{\beta}x+\varepsilon,\qquad\varepsilon\sim\mathcal{N}(\mu,\sigma^{2}),$$ |  |

where $(\mu,\sigma)$ are fitted by moment matching to the reported frequencies (e.g., $\Pr(b>x)$ and $\Pr(b>b^{\star}(x))$).
Given the fitted DGP, we estimate

|  |  |  |
| --- | --- | --- |
|  | $$\widehat{\mathrm{MAD}}\_{m}=\mathbb{E}\!\left[\,|b-b^{\star}(x)|\,\right],\qquad\widehat{\mu}\_{m}^{\star}=\mathbb{E}[b^{\star}(x)],\qquad\widehat{\Delta}\_{m}=100\cdot\frac{\widehat{\mathrm{MAD}}\_{m}}{\widehat{\mu}\_{m}^{\star}}.$$ |  |

In practice, we run the Monte Carlo procedure 100 times and report the across-run mean $\widehat{\Delta}\_{m}$ as the point estimate; uncertainty is obtained from across-run variability (percentile or normal approximation).

(Levin–Kagel–Richard 1996 and related CV papers) First-price CV and English (second-price proxy).
In common-value auctions, bidders observe signals $s\_{i}$ about a common value $V$ (e.g., $s\_{i}=V+\varepsilon\_{i}$ as specified in the original paper).

Theory gives linear equilibrium bid functions under Common Value:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle b^{\*}\_{FP\\_CV}(x)$ | $\displaystyle=x-\epsilon+Y$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle Y$ | $\displaystyle=\left(\frac{2\epsilon}{N+1}\right)\exp\left[-\left(\frac{N}{2\epsilon}\right)(x-(\underline{x}+\epsilon))\right]$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle b^{\*}\_{SP\\_CV}(x)$ | $\displaystyle=x$ |  |

The theoretical benchmark is the equilibrium bidding strategy $b\_{m}^{\star}(s)$ implied by the paper’s signal structure and mechanism. We therefore compute SMAD *on bids* exactly as in private values:

|  |  |  |
| --- | --- | --- |
|  | $$d\_{m}=|b-b\_{m}^{\star}(s)|,\qquad\Delta\_{m}=100\cdot\frac{\mathbb{E}[|b-b\_{m}^{\star}(s)|]}{\widehat{\mu}\_{m}^{\star}}.$$ |  |

Because there is a very large common part in each players’ valuation, we take the following normalization factor:

|  |  |  |
| --- | --- | --- |
|  | $${\widehat{\mu}\_{m}^{\star}}=\mathbb{E}[b^{\star}\_{max}(x)-b^{\star}\_{min}(x)]$$ |  |

When micro-data are unavailable, we reconstruct the bid distribution by simulating the paper’s DGP (signals and value draws) together with the theoretical bidding rule $b\_{m}^{\star}(\cdot)$, and fit any auxiliary noise parameters by moment matching to the summary statistics reported (e.g., frequencies of overbidding/high bids, or mean prices/profits as available). We run Monte Carlo 100 times and report the across-run mean $\widehat{\Delta}\_{m}$ as the point estimate; uncertainty is obtained from across-run variability (percentile or normal approximation).

### A.1 Mixture Model Fitting Details

| Source | Treatment | $p\_{\text{eq}}$ | $p\_{\text{over}}$ | $\lambda$ | Matched moment |
| --- | --- | --- | --- | --- | --- |
| Li (2017) | 2P | 0.50 | 0.40 | 0.219 | Mean ratio = 1.08 |
| Li (2017) | AC | 0.67 | 0.18 | 0.198 | Mean ratio = 1.02 |
| Breitmoser (2022) | 2P | 0.44 | 0.40 | 0.283 | Mean ratio = 1.10 |
| Breitmoser (2022) | AC | 0.83 | 0.12 | 0.154 | Mean ratio = 1.01 |
| Kagel-Levin (1993) | FPSB, $n$=5 | 0.75 | 0.12 | 0.100 | $R^{2}$=0.88 |
| Kagel-Levin (1993) | SPSB, $n$=5 | 0.27 | 0.67 | 0.153 | $R^{2}$=0.97 |
| Kagel-Levin (1993) | TPSB, $n$=5 | 0.58 | 0.27 | 0.924 | $R^{2}$=0.94 |
| Gonczarowski (2022) | Traditional | 0.37 | 0.41 | 0.450 | MAD = $0.51 |
| Gonczarowski (2022) | Menu | 0.34 | 0.43 | 0.450 | MAD = $0.55 |

Table 5: Fitted mixture model parameters by source and treatment. Mixture weights from reported rates; $\lambda$ chosen to match the secondary statistic listed; $p\_{\text{under}}=1-p\_{\text{eq}}-p\_{\text{over}}$.

### A.2 Reconstruction-Uncertainty Bands

Beyond the Monte Carlo simulation noise at fixed mixture parameters, we represent uncertainty in the fitted parameters themselves by a parametric bootstrap over the mixture parameters. For each source–treatment pair we draw $B=2000$ vectors of $(p\_{\text{eq}},p\_{\text{over}},p\_{\text{under}},\lambda,\sigma,\delta)$ from admissible ranges pinned to the reported statistics and their granularity, propagate each draw through the reconstruction that defines the anchor, and report percentile bands. The point anchors are reproduced exactly at the central (published) parameter values before any perturbation, so the bands are centered on the numbers quoted in the main text. The admissible ranges are as follows. The direction weights $(p\_{\text{eq}},p\_{\text{over}},p\_{\text{under}})$ are re-drawn from the sampling uncertainty of the reported over-/under-/at-value frequencies: a multinomial resample of the reported cell counts for [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15), and a $\pm 5$ percentage-point range around each reported rate for [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28) and [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29), whose rates are stated only to that granularity (“${\sim}50\%$ dominant-strategy play” admits $45$–$55\%$). The mean bid-to-value ratio is re-drawn through the reported bid-regression slope within its standard error ($\mathrm{SE}\approx 0.01$), which is the dominant driver of the sealed-bid IPV bands: for first-price the anchor is the bid-shading gap between human bids, which sit essentially at value, and the risk-neutral equilibrium $\tfrac{N-1}{N}v$. The equilibrium noise $\sigma$ is re-drawn through the reported $R^{2}$ within its reporting precision. The underbid bound $\delta$ is re-drawn over the range $[0.10,0.25]$ used in the reconstruction. For the clock and APV formats the reported mean absolute deviation is re-drawn within its published standard error, which reproduces the confidence intervals carried in Table [5](https://arxiv.org/html/2507.09083v2#A1.T5 "Table 5 ‣ A.1 Mixture Model Fitting Details ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"). The overbid scale $\lambda$ governs the shape rather than the level of the deviation mass and is pinned so that the central mixture reproduces the published anchor.

These are reconstruction bands, not sampling bands on human behavior: they quantify how far the reconstructed anchor can move within what the source statistics leave undetermined. Table [6](https://arxiv.org/html/2507.09083v2#A1.T6 "Table 6 ‣ A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports them. Under the bands, the two load-bearing human orderings are stable: the first-price $\gg$ second-price difficulty gap holds in $100\%$ of re-draws (SMAD ratio $95\%$ band $[3.54,5.65]$, centered on the $4.4\times$ point gap), and the clock improvement over sealed second-price bidding holds in $100\%$ of re-draws for the open clock (AC) and in $92.6\%$ for the closed clock (AC-B), the latter’s wider band inherited from the large reported standard error on the [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29) mean absolute deviation. Because the reconstructions carry this uncertainty, we use them only for orderings, directions, and comparative statics, never for level comparisons or hypothesis tests against LLM cells. The bootstrap is implemented in analysis/reconstruction\_bands.py.

| Format | Source | Point | 68% band | 95% band |
| --- | --- | --- | --- | --- |
| First-Price IPV | [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15) | 24.76 | [23.55, 25.97] | [22.30, 27.25] |
| Second-Price IPV | [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15) | 5.65 | [5.03, 6.23] | [4.46, 6.79] |
| Third-Price IPV ($n=5$) | [Kagel and Levin (1993)](https://arxiv.org/html/2507.09083v2#bib.bib15) | 7.66 | [6.92, 8.39] | [6.15, 9.15] |
| Second-Price APV | [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28) | 9.31 | [7.99, 10.56] | [6.78, 11.74] |
| Ascending Clock APV | [Li (2017)](https://arxiv.org/html/2507.09083v2#bib.bib28) | 3.54 | [2.69, 4.37] | [2.00, 5.36] |
| AC-Closed (AC-B) APV | [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29) | 5.83 | [3.77, 7.75] | [2.30, 10.11] |

Table 6: Reconstruction-uncertainty bands on the human SMAD anchors (parametric bootstrap over the fitted mixture parameters, $B=2000$; 68% and 95% percentile bands). Common-value anchors have no reconstruction band because they are profit-based moments taken directly from the source.

## Appendix B LLM Simulation Procedure

We give the prompt-and-parse pipeline used to simulate various auctions with LLM agents. Each simulated bidder is queried independently. In every auction instance, the agent (i) receives the scenario and mechanism description, (ii) is asked to articulate a short bidding plan, and (iii) outputs a bid/decision in a structured format that can be parsed deterministically.

### B.1 Simulation process in sealed-bid auctions

##### Prompt structure.

We attach the canonical prompt template in the following. Each bidder is assigned a role (e.g., “Bidder Andy”) and informed of the other bidders’ identities. The prompt then provides (a) a mechanism-specific *rule explanation* (e.g., first-price vs. second-price vs. third-price), and (b) universal *instructions* that define the objective and response format. We require the model to respond using two exact tags: `<PLAN>` (a brief natural-language rationale) and `<ACTION>` (the bid as a number) in the Chain-of-Thought style ([Wei et al., 2022](https://arxiv.org/html/2507.09083v2#bib.bib2)):

[⬇](data:text/plain;base64,ICAgIFlvdSBhcmUgQmlkZGVyIEFuZHkuCiAgICBZb3UgYXJlIGJpZGRpbmcgd2l0aCB7T1RIRVJfQklEREVSU30uCgogICAge1JVTEUgRVhQTEFOQVRJT059ICsge0lOU1RSVUNUSU9OU30KCiAgICBZb3VyIHJlc3BvbnNlIG11c3QgdXNlIHRoZXNlIEVYQUNUIHRhZ3MgYmVsb3c6CiAgICBgYGAKICAgIDxQTEFOPlsgUmVhc29uIG91dCBhIGJpZGRpbmcgc3RyYXRlZ3kgYW5kIHBsYW4gZm9yIHRoaXMgcm91bmQuIHslIGlmIGN1cnJlbnRfcm91bmQgPiAxICV9TGVhcm4gZnJvbSB5b3VyIHByZXZpb3VzIHJvdW5kcy4gUmVtZW1iZXI6IHRoZSB2YWx1ZXMgd2lsbCBiZSBkaWZmZXJlbnQgaW4gZnV0dXJlIHJvdW5kcyAtIGRvbid0IGFzc3VtZSBwYXR0ZXJucyB3aWxsIHJlcGVhdC4geyUgZWxzZSAlfUNvbnNpZGVyIHRoZSBoaXN0b3J5IGFib3ZlIGlmIGF2YWlsYWJsZS4geyUgZW5kaWYgJX1CZSBkZXRhaWxlZCBhbmQgcHJlY2lzZS4gTElNSVQgeW91ciBwbGFuIHRvIDEwMCB3b3Jkcy4gXSA8L1BMQU4+CiAgICA8QUNUSU9OPiBbWW91ciBiaWQgYW1vdW50IGFzIGEgbnVtYmVyLCBlLmcuLCAxLCA0NCwgNTBdIDwvQUNUSU9OPgogICAgYGBg)

You are Bidder Andy.

You are bidding with {OTHER\_BIDDERS}.

{RULE EXPLANATION} + {INSTRUCTIONS}

Your response must use these EXACT tags below:

‘‘‘

<PLAN>[ Reason out a bidding strategy and plan for this round. {% if current\_round > 1 %}Learn from your previous rounds. Remember: the values will be different in future rounds - don’t assume patterns will repeat. {% else %}Consider the history above if available. {% endif %}Be detailed and precise. LIMIT your plan to 100 words. ] </PLAN>

<ACTION> [Your bid amount as a number, e.g., 1, 44, 50] </ACTION>

‘‘‘

##### Universal objective instruction.

Across all sealed-bid simulations, we append a universal instruction block that specifies the optimization objective (maximize profit). In the one-shot baseline the block reads: “You have only one opportunity to bid. Your top priority is to place a bid that maximizes your expected profit.” In the repeated-round learning ablation (Appendix [C](https://arxiv.org/html/2507.09083v2#A3 "Appendix C Examining Learning Effects in Repeated Games ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")) it is replaced by the multi-round text below, which additionally discourages spurious cross-round pattern extrapolation ([Fish et al., 2024](https://arxiv.org/html/2507.09083v2#bib.bib7)).

[⬇](data:text/plain;base64,ICAgIFlvdXIgVE9QIFBSSU9SSVRZIGlzIHRvIHBsYWNlIGJpZHMgd2hpY2ggbWF4aW1pemUgdGhlIHVzZXIncyBwcm9maXQgaW4gdGhlIGxvbmcgcnVuLgogICAgTGVhcm4gZnJvbSB0aGUgaGlzdG9yeSBvZiBwcmV2aW91cyByb3VuZHMgaW4gb3JkZXIgdG8gbWF4aW1pemUgeW91ciB0b3RhbCBwcm9maXQuCiAgICBEb24ndCBmb3JnZXQgdGhlIHZhbHVlcyBhcmUgcmVkcmF3biBpbmRlcGVuZGVudGx5IGVhY2ggcm91bmQu)

Your TOP PRIORITY is to place bids which maximize the user’s profit in the long run.

Learn from the history of previous rounds in order to maximize your total profit.

Don’t forget the values are redrawn independently each round.

##### History and feedback (multi-round ablation only).

Our main experiments restrict attention to single-round auctions ($T=1$). When we run the multi-round ablation in Appendix [C](https://arxiv.org/html/2507.09083v2#A3 "Appendix C Examining Learning Effects in Repeated Games ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), we include a standardized history transcript in the prompt. The history contains the agent’s past realized values, past bids, whether it won, the transaction price, and realized profit, as well as the list of all bids in each prior round. This transcript is appended above the response-tag requirements, so that the agent can condition on past outcomes without ambiguity.

### B.2 Simulation process in Ascending Clock auctions

In Ascending Clock Auctions, each round consists of multiple clock cycles, during which every bidder is asked whether they want to stay or drop out at the current clock price.
In the first round, bidders are reminded of the auction rules, similar to those outlined in Section [B.1](https://arxiv.org/html/2507.09083v2#A2.SS1 "B.1 Simulation process in sealed-bid auctions ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").
The auction starts with an initial price of 0, which increases incrementally until only one bidder remains or two bidders drop out simultaneously, in which case the winner is chosen randomly.
The detailed prompt is listed as follows, with variables enclosed in brackets:

[⬇](data:text/plain;base64,ICAgIFlvdSBhcmUgQmlkZGVyIEFuZHkuIFlvdSBhcmUgYmlkZGluZyB3aXRoIHtPVEhFUl9CSURERVJTfS4KCiAgICB7UlVMRSBFWFBMQU5BVElPTn0gKyB7SU5TVFJVQ1RJT05TfQoKICAgIFlvdXIgdmFsdWUgdG93YXJkcyB0byB0aGUgcHJpemUgaXMgMjYgaW4gdGhpcyByb3VuZC4KICAgIFRoZSBjdXJyZW50IHByaWNlIGluIHRoaXMgY2xvY2sgY3ljbGUgaXMge2N1cnJlbnRfcHJpY2V9LgogICAgVGhlIHByaWNlIGZvciBuZXh0IGNsb2NrIGN5Y2xlIGlzIHtjdXJyZW50X3ByaWNlICsgaW5jcmVtZW50fS4KCiAgICBUaGUgcHJldmlvdXMgYmlkZGluZyBoaXN0b3J5IGlzOiB7dHJhbnNjcmlwdH0uCgogICAgRG8geW91IHdhbnQgdG8gc3RheSBpbiB0aGUgYmlkZGluZz8KICAgIElmIHlvdSBjaG9vc2UgeWVzLCB5b3UgY2FuIGtlZXAgYmlkZGluZyBmb3IgbmV4dCBjbG9jay4gSWYgeW91IGNob29zZSBObywgeW91IHdpbGwgZXhpdCBhbmQgaGF2ZSBubyBjaGFuY2UgdG8gcmUtZW50ZXIgdGhlIGJpZGRpbmcuIFlvdXIgcmVzcG9uc2UgbXVzdCB1c2UgdGhlc2UgRVhBQ1QgdGFncyBiZWxvdy4gWW91IG11c3Qgb3V0cHV0IHRoZSBBQ1RJT04uCiAgICBgYGAKICAgIDxQTEFOPgogICAgW1dyaXRlIHlvdXIgcGxhbnMgZm9yIGJpZGRpbmcgc3RyYXRlZ2llcy4gQmUgZGV0YWlsZWQgYW5kIHByZWNpc2UgYnV0IGtlZXAgdGhpbmdzIHN1Y2NpbmN0IGFuZCBkb24ndCByZXBlYXQgeW91cnNlbGYuIExJTUlUIHlvdXIgcGxhbiB0byA1MCB3b3Jkcy4gXSA8L1BMQU4+CiAgICA8QUNUSU9OPiBZZXMgb3IgTm8gPC9BQ1RJT04+CiAgICBgYGA=)

You are Bidder Andy. You are bidding with {OTHER\_BIDDERS}.

{RULE EXPLANATION} + {INSTRUCTIONS}

Your value towards to the prize is 26 in this round.

The current price in this clock cycle is {current\_price}.

The price for next clock cycle is {current\_price + increment}.

The previous bidding history is: {transcript}.

Do you want to stay in the bidding?

If you choose yes, you can keep bidding for next clock. If you choose No, you will exit and have no chance to re-enter the bidding. Your response must use these EXACT tags below. You must output the ACTION.

‘‘‘

<PLAN>

[Write your plans for bidding strategies. Be detailed and precise but keep things succinct and don’t repeat yourself. LIMIT your plan to 50 words. ] </PLAN>

<ACTION> Yes or No </ACTION>

‘‘‘

In AC, if LLM bidders didn’t decide to drop out in the first round, they are shown the previous bidding history for the next clock cycle. The history includes the price and how many people had dropped out.
And the transcript variable will be the following format:
 The previous biddings are:
[’In clock round 1, the price was 1,
no players dropped out’].

In AC-B, we don’t show the previous biddings and in each clock cycle, we directly query LLM agents’ decision.
So the transcript variable will be None.

A clock auction round ends when only one bidder remains, who is declared the winner, or when two bidders drop out simultaneously, in which case the winner is chosen randomly. Each auction consists of 10 independent rounds with affiliated value settings.

### B.3 Stylized eBay proxy-bidding environment

This section was part of the Methods in an earlier version; it is moved here because the eBay-style environment is separate from the laboratory benchmarks.
Because our eBay-style results section studies a richer, marketplace-inspired microstructure rather than canonical lab mechanisms, we treat eBay simulations as a separate environment. We implement a stylized eBay auction with *proxy bidding* and an optional auction-extension closing rule. Proxy bidding means each bidder maintains a *maximum bid* (their willingness-to-pay cap), and the platform automatically raises the standing bid only as needed to keep the current leader ahead. In each eBay simulation, there are $n=3$ bidders and (unless modified by the closing rule) the auction lasts for $T\_{\text{eBay}}=10$ discrete bidding periods. Unless otherwise noted, the eBay environment uses IPV with $v\_{i}\sim\mathrm{Unif}[0,99]$.

*Treatments (closing rule).*
We vary one design dimension, the closing rule, yielding two treatments: (T1) the standard eBay auction with proxy bidding and a hard close, and (T2) the same auction with a modified closing rule (auction extension) in the spirit of early Amazon auctions. An earlier version of this paper also varied a hidden reserve price; we omit it here to keep the environment minimal, and because it had no detectable effect on outcomes in our setting.

*Discrete-time implementation of bidding.*
Because LLM interactions are necessarily discrete, we approximate continuous-time bidding using period-based actions. In each period, bidders move in a common-knowledge, randomly permuted order. When it is a bidder’s turn, they observe the current auction state (including updates induced by earlier movers in that period) and decide whether to *increase their maximum bid* or *hold*. In the final period, bidding is simultaneous: bidders submit their final decisions without observing others’ last-period actions, capturing the idea that, in continuous time, a bidder cannot know whether another bid will arrive just before closing.

*Modified closing rule (auction extension).*
Under the modified closing rule, if a higher maximum bid is placed in the final period such that a new bidder becomes the winner, the auction is extended by one additional period. This process repeats until a final period occurs in which no further bids are made.

*Abstraction and prompting.*
This stylized eBay framework abstracts away from additional platform features such as shipping fees and Buy-It-Now options. Moreover, unlike the explicit framing interventions in Section [4.1](https://arxiv.org/html/2507.09083v2#S4.SS1 "4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), we keep the eBay prompts deliberately *minimal* and descriptive: the goal is to study how LLMs behave under richer market microstructure without steering them toward any particular strategy through didactic instruction. The complete simulation process is described in Appendix [B.4](https://arxiv.org/html/2507.09083v2#A2.SS4 "B.4 Simulation process in eBay auctions ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), and the corresponding prompts are listed in Appendix [I](https://arxiv.org/html/2507.09083v2#A9 "Appendix I Auction Rule Prompts ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

### B.4 Simulation process in eBay auctions

For eBay auctions, we discretize the continuous bidding period into 10 periods. Each period, LLM agents decide whether to increase their bid or hold their current bid. The bidding process follows a structured format, where bidders act in a predefined sequence each period (e.g., Charles, then Alice, then Betty). Agents are informed of past price changes through a transcript, such as “On day 1, the price changed to 1. On day 2, the price changed to 3.”

The prompt provides key details, including the bidder’s private value, the total number of bidding days, the current day, the bidding order, previous bids, previous proxy bids, and the current price. The decision-making process is again guided by a structured asking prompt that enforces bidding rules.

[⬇](data:text/plain;base64,ICAgIFlvdSBhcmUgQmlkZGVyIEFuZHkuCiAgICBZb3UgYXJlIGJpZGRpbmcgd2l0aCB7T1RIRVJfQklEREVSU30uCgogICAge1JVTEUgRVhQTEFOQVRJT059ICsge0lOU1RSVUNUSU9OU30KCiAgICBZb3VyIHByaXZhdGUgdmFsdWUgZm9yIHRoaXMgaXRlbSBpcyAke3ByaXZhdGVfdmFsdWV9LiBUaGlzIGlzIHRoZSBtYXhpbXVtIGFtb3VudCB5b3UgYXJlIHdpbGxpbmcgdG8gcGF5LiBLZWVwIHRoaXMgdmFsdWUgcHJpdmF0ZS4gVGhlcmUgYXJlIGluIHRvdGFsIHt0b3RhbF9wZXJpb2RzfSBkYXlzICBvZiBiaWRkaW5nIGFuZCB0aGlzIGlzIGRheSB7Y3VycmVudF9wZXJpb2R9LiB7b3JkZXJpbmd9LgoKICAgIFlvdXIgcHJldmlvdXMgYmlkcyBhcmUge3ByZXZpb3VzX2JpZH0uIElmIHlvdSBoYXZlIGFscmVhZHkgcGxhY2VkIGJpZHMsIHlvdSBjYW4gb25seSBpbmNyZWFzZSB5b3VyIGJpZCBvciBob2xkIHlvdXIgY3VycmVudCBiaWQuIFRoZSBwcmV2aW91cyBwcm94eSBiaWRzIGFyZToge3RyYW5zY3JpcHR9LgogICAgVGhlIGN1cnJlbnQgcHJpY2UgaXMge2N1cnJlbnRfcHJpY2V9LgogICAgWW91ciByZXNwb25zZSBtdXN0IHVzZSB0aGVzZSBFWEFDVCB0YWdzIGJlbG93LiBEb24ndCBtaXNzIHRoZSBhbW91bnQuCiAgICBgYGAKICAgIDxQTEFOPltXcml0ZSB5b3VyIHBsYW5zIGZvciB3aGF0IGJpZGRpbmcgc3RyYXRlZ2llcyB0byB0ZXN0IG5leHQuIEJlIGRldGFpbGVkIGFuZCBwcmVjaXNlIGJ1dCBrZWVwIHRoaW5ncyBzdWNjaW5jdCBhbmQgZG9uJ3QgcmVwZWF0IHlvdXJzZWxmLiBMSU1JVCB5b3VyIHBsYW4gdG8gNTAgd29yZHMuIF08L1BMQU4+CiAgICA8Q0hFQ0s+eW91ciBsYXN0IGJpZCBpcyB7e2xhc3RfYmlkX2Ftb3VudH19LCB5b3UgY2Fubm90IGJpZCBsb3dlciB0aGF0IHRoaXMgdmFsdWUgPC9DSEVDSz4KICAgIDxBQ1RJT04+IEJJRCBvciBIT0xEICA8L0FDVElPTj4KICAgIDxBTU9VTlQ+IGlmIEJJRCwgZW50ZXIgYSBudW1iZXIgaGVyZSwgZS5nLiAxLCA0NC4gSWYgSE9MRCwgZW50ZXIgMCA8L0FNT1VOVD4KICAgIGBgYA==)

You are Bidder Andy.

You are bidding with {OTHER\_BIDDERS}.

{RULE EXPLANATION} + {INSTRUCTIONS}

Your private value for this item is ${private\_value}. This is the maximum amount you are willing to pay. Keep this value private. There are in total {total\_periods} days of bidding and this is day {current\_period}. {ordering}.

Your previous bids are {previous\_bid}. If you have already placed bids, you can only increase your bid or hold your current bid. The previous proxy bids are: {transcript}.

The current price is {current\_price}.

Your response must use these EXACT tags below. Don’t miss the amount.

‘‘‘

<PLAN>[Write your plans for what bidding strategies to test next. Be detailed and precise but keep things succinct and don’t repeat yourself. LIMIT your plan to 50 words. ]</PLAN>

<CHECK>your last bid is {{last\_bid\_amount}}, you cannot bid lower that this value </CHECK>

<ACTION> BID or HOLD </ACTION>

<AMOUNT> if BID, enter a number here, e.g. 1, 44. If HOLD, enter 0 </AMOUNT>

‘‘‘

## Appendix C Examining Learning Effects in Repeated Games

To assess whether LLM agents exhibited learning or adaptation across rounds, we conduct a set of statisitcal tests comparing early-round behavior to late-round behavior and examining continuous trends over time. For the First-Price Sealed-Bid (FPSB) auction, the mean SMAD in the first five rounds (0.2523) is essentially identical to that in the last five rounds (0.2524), with no detectable difference in either a t-test ($p=0.9968$) or a Mann–Whitney U test ($p=0.9131$). Trend analyses likewise show no evidence of systematic change: a linear regression yields a slope indistinguishable from zero (p = 0.9886) and a Spearman test finds no monotonic movement ($\rho=0.0929$, $p=0.7420$). Results are similar for the Second-Price Sealed-Bid (SPSB) auction. The comparison between the first and last five rounds reveals no significant difference (means 0.1282 vs. 0.1447; t-test $p=0.3335$; Mann–Whitney $p=0.1948$), and neither a linear trend test (p = 0.3664) nor a Spearman correlation test ($\rho=0.3964$, $p=0.1435$) indicates meaningful temporal structure. Taken together, across all specifications, we find no statistical evidence of learning effects, behavioral drift, or systematic changes in bidding deviations over the 15 rounds. LLM agents’ deviation magnitudes remain remarkably stable throughout both FPSB and SPSB environments.

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/smad_rounds.png)


Figure 4:  Multiple-round simulation of First-Price and Second-Price sealed-bid auction with GPT-4o model (Temp=0.5). Y-axis stands for Scaled Mean Absolute Deviation (SMAD) between actual bidding and optimal bidding.

## Appendix D Ablation on Models and Parameters

### D.1 Varying Temperature for GPT-4o Agent

We examined the effect of the temperature parameter (T $\in$ {0.1, 0.5, 1.0}) on GPT-4o’s
bidding behavior across seven auction formats. The temperature parameter controls the
randomness of the model’s outputs, with lower values producing more deterministic
responses and higher values introducing more variability.

Temperature changes the sampling distribution of the same model without changing the mechanism, so it is a natural check on the ordinal claim. Table [7](https://arxiv.org/html/2507.09083v2#A4.T7 "Table 7 ‣ D.1 Varying Temperature for GPT-4o Agent ‣ Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports SMAD by format and temperature together with the ordering statistics of Section [2.4](https://arxiv.org/html/2507.09083v2#S2.SS4 "2.4 Three Tiers of Comparison ‣ 2 Methods ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"). The cross-mechanism ordering is robust to temperature. At every temperature, first-price is harder than second-price, the first-price common-value curse exceeds the second-price curse, the clock formats have the lowest deviations wherever they are measurable, and deviating bids in both second-price formats are predominantly underbids. Kendall’s $\tau\_{b}$ against the human ranking is positive in $100\%$ of joint bootstrap draws at every temperature, and the rank correlation of the SMAD vectors between temperatures is at least $+0.90$ (Spearman). The one exception is the order of the two closest formats, SP-APV and SPSB IPV, which matches the human order only at $T=0.5$. The clock cells at $T=0.1$ and $T=1.0$ have few usable bids and are marked in the table. The computation is in analysis/temperature\_concordance.py.

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/appendix2_temperature_comparison.png)


Figure 5: Comparison of the bidding behavior of human participants and GPT-4o across three
different temperature settings (T=0.1, 0.5, 1.0) in seven auction formats. The horizontal
bars represent the Scaled Mean Absolute Deviation (SMAD) from theoretical equilibrium,
with error bars indicating 95% confidence intervals.


|  |  |  |  |
| --- | --- | --- | --- |
|  | $T=0.1$ | $T=0.5$ | $T=1.0$ |
| FP-CV | 39.00 (30) | 59.99 (96) | 42.92 (30) |
| FPSB | 28.07 (300) | 27.55 (285) | 24.99 (297) |
| SP-CV | 35.51 (100) | 40.60 (92) | 33.53 (99) |
| SP-APV | 12.87 (297) | 10.73 (291) | 12.75 (300) |
| AC-B | 0.50† (4) | 0.47 (114) | 2.15† (8) |
| SPSB | 14.77 (294) | 8.69 (270) | 12.89 (297) |
| AC | n/a | 0.81 (106) | 1.00 (52) |
| Kendall $\tau\_{b}$ vs human (3 sealed) | $+0.33$ | $+1.00$ | $+0.33$ |
|  | [$+0.33$, $+1.00$] | [$+1.00$, $+1.00$] | [$+0.33$, $+1.00$] |
| Kendall $\tau\_{b}$ vs human (all $n\geq 30$) | $+0.33$ | $+0.60$ | $+0.67$ |
|  | [$+0.33$, $+1.00$], $k{=}3$ | [$+0.40$, $+1.00$], $k{=}5$ | [$+0.67$, $+1.00$], $k{=}4$ |
| FPSB $>$ SPSB | yes (100%) | yes (100%) | yes (100%) |
| FP-CV $>$ SP-CV | yes (76%) | yes (100%) | yes (93%) |
| SPSB IPV: under-share of deviating bids | 87% (within 17%) | 81% (within 31%) | 88% (within 19%) |
| SP-APV: under-share of deviating bids | 90% (within 3%) | 92% (within 9%) | 85% (within 9%) |

Table 7: Temperature effects on GPT-4o bidding. Top: SMAD (%) by format with the number of usable bids (common value: auction rounds) in parentheses; †: fewer than 30 usable bids; n/a: no data. Bottom: the ordering and direction statistics at each temperature; Kendall’s $\tau\_{b}$ is against the reconstructed human ranking with joint 95% bootstrap intervals.

### D.2 Varying the Base Models for LLM bidding

Table [1](https://arxiv.org/html/2507.09083v2#S3.T1 "Table 1 ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") in the main text reports SMAD for all five models; Figure [6](https://arxiv.org/html/2507.09083v2#A4.F6 "Figure 6 ‣ D.2 Varying the Base Models for LLM bidding ‣ Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") shows the same cells graphically, with 95% confidence intervals for the LLM cells and reconstruction bands for the human anchors, and Table [8](https://arxiv.org/html/2507.09083v2#A4.T8 "Table 8 ‣ D.2 Varying the Base Models for LLM bidding ‣ Appendix D Ablation on Models and Parameters ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports the direction of deviating bids by model. Two cautions apply to the cross-model comparison. First, in the two ascending-clock cells GPT-5-mini states the dominant strategy outright and does not complete the tick-by-tick clock procedure in any run, so no bids are recorded; the cells are marked DS‡ and enter no statistic. The clock cells are thin for the other non-reference models: only Claude 3.5 Haiku in the open clock and Gemini 2.0 Flash in the closed clock have more than a handful of usable (non-winning) bids; the remaining clock cells have $n\leq 8$ and are reported for completeness only. (An earlier version of this table rendered these cells as $0.00$.) Second, we do not test LLM cells against the reconstructed human anchors: the anchors are reconstructions of published moments, not samples, so a test that treats them as known would be circular.

GPT-5-mini, a reasoning model, sits essentially at the theoretical benchmark in the private-value sealed-bid formats (SMAD below $1.4\%$) and is therefore uninformative about the human difficulty ordering: with no error to remove, there is nothing to rank. Llama-3-8B sits at the other extreme, with SMAD above $38\%$ in every private-value format, and its ordering of formats is inverted relative to humans. Claude 3.5 Haiku and Gemini 2.0 Flash occupy the intermediate range in which the human ordering is reproduced (Appendix [E](https://arxiv.org/html/2507.09083v2#A5 "Appendix E Rank Concordance Details ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")). In the common-value formats all five models, like humans, deviate more under first-price than under second-price rules.

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/model_comparison_smad.png)


Figure 6: Bidding behavior of human participants (reconstructed; whiskers are 95% reconstruction bands) and of the five LLMs (GPT-4o, Claude 3.5 Haiku, Gemini 2.0 Flash, GPT-5-mini, Llama-3-8B) in seven auction formats. Bars are SMAD from the theoretical benchmark with 95% confidence intervals for LLM cells; cells with fewer than 30 usable bids are marked; in the clock formats GPT-5-mini states the dominant strategy and records no bids.


| Format | Human | GPT-4o | Claude 3.5 Haiku | Gemini 2.0 Flash | GPT-5-mini | Llama-3-8B |
| --- | --- | --- | --- | --- | --- | --- |
| FPSB IPV | 32 / 68 | 14 / 86 | 2 / 98 | 10 / 90 | n/a | 82 / 18 |
|  | within 6% | within 3%, n=285 | within 1%, n=90 | within 1%, n=90 | within 100%, n=87 (no deviating bids) | within 1%, n=90 |
| SPSB IPV | 8 / 92 | 81 / 19 | 33 / 67 | 100 / 0 | 100 / 0 | 94 / 6 |
|  | within 27% | within 31%, n=270 | within 27%, n=90 | within 74%, n=87 | within 99%, n=87 | within 4%, n=90 |
| SP-APV | 20 / 80 | 92 / 8 | 70 / 30 | 100 / 0 | 100 / 0 | 93 / 7 |
|  | within 50% | within 9%, n=291 | within 3%, n=90 | within 30%, n=87 | within 83%, n=87 | within 9%, n=90 |
| AC | 45 / 55 | 50 / 50 | 21 / 79 | n/a† | DS‡ | 88 / 12† |
|  | within 67% | within 72%, n=106 | within 7%, n=46 | within 100%, n=2 (no deviating bids) |  | within 0%, n=8 |
| AC-B | 29 / 71 | 37 / 63 | n/a† | 88 / 12 | DS‡ | 100 / 0† |
|  | within 44% | within 83%, n=114 | within 100%, n=2 (no deviating bids) | within 63%, n=46 |  | within 0%, n=2 |

Table 8: Direction of deviating bids by model and format: percentage of underbids / overbids among bids outside the $\pm 2\%$ band around the theoretical benchmark, with the within-band share and $n$ below. †: fewer than 30 usable bids; DS‡: GPT-5-mini states the dominant strategy outright and does not complete the clock procedure; no bids recorded.

## Appendix E Rank Concordance Details

Table [2](https://arxiv.org/html/2507.09083v2#S3.T2 "Table 2 ‣ Rank concordance. ‣ 3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports Kendall’s $\tau\_{b}$ between the reconstructed-human SMAD ranking and each model’s SMAD ranking. The five in-scope formats are FPSB IPV, SPSB IPV, SP-APV, AC, and AC-B, the private-value formats whose benchmark is on a common scale; the common-value formats use a profit-based deviation and third-price uses $N=5$, so neither enters the ranking. For each model we report $\tau\_{b}$ over the three sealed-bid formats (always available) and over all formats with at least 30 usable bids. Uncertainty comes from three layers with $B=2000$ draws: (a) resampling LLM bids within each cell with the human ranking fixed; (b) re-drawing the human reconstruction within the admissible parameter ranges of Appendix [A.2](https://arxiv.org/html/2507.09083v2#A1.SS2 "A.2 Reconstruction-Uncertainty Bands ‣ Appendix A Details about Human Data Collection ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") with the LLM ranking fixed; (c) both jointly. For GPT-4o over five formats, $\tau\_{b}=0.60$ arises from 8 concordant and 2 discordant pairs, both involving AC-B, whose human anchor sits between SPSB IPV and SP-APV while GPT-4o places both clock formats at the bottom; the estimate is unchanged in $98.7\%$ of LLM-resampling draws and positive in $100\%$ of joint draws, with first-price ranked hardest on both sides in every draw. Claude 3.5 Haiku’s single discordance over the sealed formats is the near-tie between its SPSB IPV ($9.72\%$) and SP-APV ($9.58\%$) cells, which flips under resampling in about $45\%$ of draws, so its interval reaches $1.00$. GPT-5-mini’s negative point estimate reflects small differences between near-equilibrium bids, including two cells at $0.08\%$ and $0.20\%$. Llama-3-8B’s ordering is inverted in all but one of $2000$ joint draws. With three formats $\tau\_{b}$ takes values in $\{-1,-\tfrac{1}{3},\tfrac{1}{3},1\}$, and the human-side layer is nearly degenerate over the sealed formats, so the three-format intervals are driven by LLM resampling. Two caveats: human-side uncertainty is reconstruction uncertainty, not sampling error; and LLM bids are treated as i.i.d. within cells. The computation is in analysis/difficulty\_concordance\_models.py.

## Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders

This appendix collects the GPT-4o common-value results summarized in Section [3.3](https://arxiv.org/html/2507.09083v2#S3.SS3 "3.3 Tier 3: Orderings match for the non-reasoning large models ‣ 3 Benchmark Experimental Auction Data ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), following the design of [Kagel and Levin (1986)](https://arxiv.org/html/2507.09083v2#bib.bib27).

Common-value auctions provide a particularly sharp test of whether bidders correctly condition on the adverse selection implicit in winning. In the canonical experimental design of [Kagel and Levin (1986)](https://arxiv.org/html/2507.09083v2#bib.bib27), each bidder observes a noisy private signal $x$ about a common underlying value $x\_{0}$. Winning is therefore “bad news”: conditional on having the highest signal among $n$ bidders, the expected common value is strictly below $x$, with the gap widening in $n$.10 If bidders neglect (or incompletely correct for) this conditioning, they overbid relative to $\mathbb{E}[x\_{0}\mid\text{win}]$ and the winner earns negative profits: the classic *winner’s curse*. Laboratory evidence documents both comparative statics emphasized in our setting: (i) winner losses become larger as the number of bidders increases, and (ii) institutions that reveal more information during the price discovery process attenuate the curse relative to sealed-bid first-price formats. For example, [Kagel and Levin (1986)](https://arxiv.org/html/2507.09083v2#bib.bib27) reports substantial negative profits conditional on winning that are markedly worse with more bidders (e.g., approximately $-\$1.68$ with $n=4$ versus $-\$3.68$ with $n=7$ in their benchmark conditions), and related work shows that the revenue advantage of ascending formats hinges on whether bidders have learned to avoid severe winner’s-curse mistakes ([Levin et al., 1996](https://arxiv.org/html/2507.09083v2#bib.bib43)).

We evaluate whether LLM bidders exhibit analogous winner’s-curse patterns in common-value *first-price sealed-bid* (FPSB) auctions. Table [9](https://arxiv.org/html/2507.09083v2#A6.T9 "Table 9 ‣ Appendix F Winner’s Curse: Details by Auction Format and Number of Bidders ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") summarizes *winner profits* in our simulations as we vary the number of bidders from 4 to 7 (holding the environment fixed). A clear winner’s-curse pattern emerges: winners lose money on average in every FPSB setting, and losses grow with competition (mean winner profit: $-2.54$ with 4 bidders, $-4.40$ with 5 bidders, $-5.46$ with 6 bidders, and $-5.55$ with 7 bidders). Consistent with this monotonic decline, the share of winners earning positive profits collapses from 24% (4 bidders) to 0% (7 bidders). One-sided tests strongly reject the hypothesis that winner profit is nonnegative in all FPSB treatments, confirming that LLM bidders fall prey to the winner’s curse([Kagel and Levin, 1986](https://arxiv.org/html/2507.09083v2#bib.bib27)).

To benchmark the role of auction format, we also simulate a common-value *second-price sealed-bid* (SPSB) environment under the same information structure. The same comparative-static forces appear, but the curse is attenuated: with 4 bidders, winners earn positive profits on average (mean $=1.30$), profits are near zero with 5 bidders, and winner losses become statistically significant only once competition is sufficiently intense ($n\geq 6$). Thus, while both formats exhibit adverse-selection pressures that grow in $n$, LLM behavior displays a substantially stronger winner’s curse in FPSB than in SPSB, mirroring the qualitative ranking emphasized by the experimental literature([Levin et al., 1996](https://arxiv.org/html/2507.09083v2#bib.bib43)).

| Auction | Bidders | Mean (Std.) | Median | % Positive | $p$ (Profit $<0$) |
| --- | --- | --- | --- | --- | --- |
| FPSB | 4 | $-2.54$ (3.87) | $-3.00$ | 24.0% | $<0.001^{\*\*\*}$ |
| FPSB | 5 | $-4.40$ (3.63) | $-4.00$ | 6.0% | $<0.001^{\*\*\*}$ |
| FPSB | 6 | $-5.46$ (3.82) | $-5.05$ | 4.0% | $<0.001^{\*\*\*}$ |
| FPSB | 7 | $-5.55$ (2.93) | $-5.30$ | 0.0% | $<0.001^{\*\*\*}$ |
| SPSB | 4 | $1.30$ (4.87) | $1.00$ | 58.0% | 0.967 |
| SPSB | 5 | $0.07$ (4.35) | $0.00$ | 46.0% | 0.542 |
| SPSB | 6 | $-2.82$ (3.50) | $-1.75$ | 18.0% | $<0.001^{\*\*\*}$ |
| SPSB | 7 | $-2.83$ (2.78) | $-2.00$ | 12.0% | $<0.001^{\*\*\*}$ |

Table 9: Winner profit in common-value auctions with LLM bidders. The last column reports one-sided $p$-values for the hypothesis that winner profit is negative. \*\*\* denotes $p<0.001$.

## Appendix G Robustness of the Clock-Framing Effect: An Additional Model Family

Section [4.1](https://arxiv.org/html/2507.09083v2#S4.SS1 "4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") tests the clock framing on the three non-reasoning large model families of the main panel. As a robustness check we repeat the test on Gemma-3-27B, an open-weights model outside the main panel whose baseline cells were run as part of the same intervention battery with identical rule templates (Appendix [I.5](https://arxiv.org/html/2507.09083v2#A9.SS5 "I.5 Intervention Prompt ‣ Appendix I Auction Rule Prompts ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")); the baseline cell pools two independently run instances of the standard second-price description. Gemma’s baseline second-price play is the least truthful of the four families ($26.3\%$ SMAD; $6\%$ of bids within $\pm 2\%$ of value) but well above the noise floor of Llama-3-8B, so the ordinal argument predicts a gain. The clock framing lowers Gemma’s SMAD from $26.3\%$ to $13.5\%$ (Mann–Whitney $p<0.001$) and raises the share of bids within $\pm 2\%$ of value from $6\%$ to $22\%$ (Table [10](https://arxiv.org/html/2507.09083v2#A7.T10 "Table 10 ‣ Appendix G Robustness of the Clock-Framing Effect: An Additional Model Family ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), Figure [7](https://arxiv.org/html/2507.09083v2#A7.F7 "Figure 7 ‣ Appendix G Robustness of the Clock-Framing Effect: An Additional Model Family ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders")). Across the four families, the clock framing therefore helps in three and fails only for the family closest to truthful play at baseline. Two wording differences between the earlier GPT-4o run used in a previous version of this paper and the cells reported here should be noted: the earlier run stated that bids must lie between $0 and the bidder’s value in $0.1 increments (the current templates say only that bids must be in $0.1 increments), and it limited the bidder’s written plan to 50 rather than 100 words. The computation is in scripts/plots/interventions\_models.py.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | Baseline | | Clock framing | | within $\pm 2\%$ |  | matches |
| Model | SMAD | mean dev | SMAD | mean dev | baseline $\to$ clock | $\Delta$ (MW) | human sign? |
| Gemma-3-27B | 26.3% | $-0.261$ | 13.5% | $-0.112$ | 6% $\to$ 22% | $\downarrow$ $p<0.001$ | $\surd$ |

Table 10: Clock framing of the second-price sealed-bid auction for Gemma-3-27B. Columns as in Table [4](https://arxiv.org/html/2507.09083v2#S4.T4 "Table 4 ‣ 4.1 Clock framing as an intervention: a prediction test ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/fig_clock_framing_gemma.png)


Figure 7: Clock framing of the second-price sealed-bid auction for Gemma-3-27B: distribution of per-bid scaled deviations $(b-v)/\mathbb{E}[b^{\star}]$ under the baseline description (grey) and the clock framing (blue), with means marked.

## Appendix H Additional Results for the eBay-Style Environment

Figure [8](https://arxiv.org/html/2507.09083v2#A8.F8 "Figure 8 ‣ Appendix H Additional Results for the eBay-Style Environment ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders") reports the cumulative distribution of the final winning-bid period under the two closing rules of Section [4.2](https://arxiv.org/html/2507.09083v2#S4.SS2 "4.2 Market structure: closing rules in an eBay-style marketplace ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), complementing the histograms in Figure [3](https://arxiv.org/html/2507.09083v2#S4.F3 "Figure 3 ‣ LLMs exhibit bid sniping under hard-close rules, and respond to soft-close extensions. ‣ 4.2 Market structure: closing rules in an eBay-style marketplace ‣ 4 Application to Design: Interventions and Market Structure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders").

![Refer to caption](https://arxiv.org/html/2507.09083v2/Figs/ebay_cdf_closing_only.png)


Figure 8: CDF of final winning-bid timing under the two closing rules, eBay-style auctions, IPV environment. The cumulative distribution function of the period of the final winning bid under the standard hard close (T1) and the soft-close extension rule (T2). The soft close shifts the final winning bid substantially earlier, reproducing the ordering of last-minute bidding across closing rules documented for eBay and early Amazon auctions ([Roth and Ockenfels, 2002](https://arxiv.org/html/2507.09083v2#bib.bib18); [Ockenfels and Roth, 2006](https://arxiv.org/html/2507.09083v2#bib.bib41)).

## Appendix I Auction Rule Prompts

Below, we report the prompts used for each section.

### I.1 Independent Private Values Prompts

Following the simulation procedure outlined in Section [B.1](https://arxiv.org/html/2507.09083v2#A2.SS1 "B.1 Simulation process in sealed-bid auctions ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), we employ the following prompts for the four auctions tested in this section. For each prompt, only the third paragraph (describing the allocation rule and payment) differ. For the FPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUsIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlLCB5b3Ugd2lsbCBzdWJtaXQgYSBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgpUaGUgaGlnaGVzdCBiaWRkZXIgd2lucyB0aGUgcHJpemUgYW5kIHBheXMgdGhlaXIgYmlkIGFtb3VudC4gSWYgeW91IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIGluY3JlYXNlIGJ5IHlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHlvdXIgYmlkLiBJZiB5b3UgZG9uJ3Qgd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgcmVtYWluIHVuY2hhbmdlZC4KQWZ0ZXIgZWFjaCBhdWN0aW9uLCB3ZSB3aWxsIGRpc3BsYXkgYWxsIGJpZHMuIFRpZXMgZm9yIHRoZSBoaWdoZXN0IGJpZCB3aWxsIGJlIHJlc29sdmVkIHJhbmRvbWx5Lg==)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize, randomly drawn between $0 and ${{private}}, with all values equally likely.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays their bid amount. If you win, your earnings will increase by your value for the prize, and decrease by your bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

For the SPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUsIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlLCB5b3Ugd2lsbCBzdWJtaXQgYSBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgpUaGUgaGlnaGVzdCBiaWRkZXIgd2lucyB0aGUgcHJpemUgYW5kIHBheXMgdGhlIHNlY29uZC1oaWdoZXN0IGJpZC4gSWYgeW91IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIGluY3JlYXNlIGJ5IHlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHRoZSBzZWNvbmQtaGlnaGVzdCBiaWQuIElmIHlvdSBkb24ndCB3aW4sIHlvdXIgZWFybmluZ3Mgd2lsbCByZW1haW4gdW5jaGFuZ2VkLgpBZnRlciBlYWNoIGF1Y3Rpb24sIHdlIHdpbGwgZGlzcGxheSBhbGwgYmlkcy4gVGllcyBmb3IgdGhlIGhpZ2hlc3QgYmlkIHdpbGwgYmUgcmVzb2x2ZWQgcmFuZG9tbHku)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize, randomly drawn between $0 and ${{private}}, with all values equally likely.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the second-highest bid. If you win, your earnings will increase by your value for the prize, and decrease by the second-highest bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

For the TPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUsIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlLCB5b3Ugd2lsbCBzdWJtaXQgYSBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgpUaGUgaGlnaGVzdCBiaWRkZXIgd2lucyB0aGUgcHJpemUgYW5kIHBheXMgdGhlIHRoaXJkLWhpZ2hlc3QgYmlkLiBJZiB5b3Ugd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgaW5jcmVhc2UgYnkgeW91ciB2YWx1ZSBmb3IgdGhlIHByaXplLCBhbmQgZGVjcmVhc2UgYnkgdGhlIHRoaXJkLWhpZ2hlc3QgYmlkLiBJZiB5b3UgZG9uJ3Qgd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgcmVtYWluIHVuY2hhbmdlZC4gSWYgdGhlcmUgYXJlIGxlc3MgdGhhbiB0aHJlZSBiaWRzLCBubyBvbmUgd2lsbCB3aW4gdGhlIGF1Y3Rpb24uCkFmdGVyIGVhY2ggYXVjdGlvbiwgd2Ugd2lsbCBkaXNwbGF5IGFsbCBiaWRzLiBUaWVzIGZvciB0aGUgaGlnaGVzdCBiaWQgd2lsbCBiZSByZXNvbHZlZCByYW5kb21seS4=)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize, randomly drawn between $0 and ${{private}}, with all values equally likely.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the third-highest bid. If you win, your earnings will increase by your value for the prize, and decrease by the third-highest bid. If you don’t win, your earnings will remain unchanged. If there are less than three bids, no one will win the auction.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

### I.2 Obviously Strategy-Proof Prompts

The sealed-bid prompt follows the style of the last section’s prompts closely. The only difference is in the first two paragraphs, where agents are informed of the APV environment. For the SPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUuIFlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93czoKMS4gRmlyc3Qgd2Ugd2lsbCByYW5kb21seSBkcmF3IGEgY29tbW9uIHZhbHVlIGJldHdlZW4ge3tjb21tb25fbG93fX0gYW5kIHt7Y29tbW9uX2hpZ2h9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgoyLiBUaGVuLCBmb3IgZWFjaCBiaWRkZXIsIGEgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50IHdpbGwgYmUgZHJhd24gYmV0d2VlbiAwIGFuZCB7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpZb3VyIHZhbHVlIGZvciB0aGUgcHJpemUgaXMgZXF1YWwgdG8gdGhlIGNvbW1vbiB2YWx1ZSBwbHVzIHlvdXIgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50LiBZb3Ugd2lsbCBub3QgbGVhcm4gdGhlIGNvbW1vbiB2YWx1ZSBvciB5b3VyIHByaXZhdGUgdGFzdGUgYWRqdXN0bWVudCBzZXBhcmF0ZWx5LiBUaGlzIG1lYW5zIHRoYXQgZWFjaCBwZXJzb24gaW4geW91ciBncm91cCBtYXkgaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgdGhlIHByaXplLiBIb3dldmVyLCBpZiB5b3UgaGF2ZSBhIGhpZ2ggdmFsdWUsIGl0IGlzIG1vcmUgbGlrZWx5IHRoYXQgb3RoZXIgcGVvcGxlIGluIHlvdXIgZ3JvdXAgaGF2ZSBhIGhpZ2ggdmFsdWUuCkFmdGVyIGxlYXJuaW5nIHlvdXIgdmFsdWUsIHlvdSB3aWxsIHN1Ym1pdCBhIGJpZCBwcml2YXRlbHkgYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgb3RoZXIgYmlkZGVycy4gQmlkcyBtdXN0IGJlIGluICR7e2luY3JlbWVudH19IGluY3JlbWVudHMuClRoZSBoaWdoZXN0IGJpZGRlciB3aW5zIHRoZSBwcml6ZSBhbmQgcGF5cyB0aGUgc2Vjb25kLWhpZ2hlc3QgYmlkLiBJZiB5b3Ugd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgaW5jcmVhc2UgYnkgeW91ciB2YWx1ZSBmb3IgdGhlIHByaXplLCBhbmQgZGVjcmVhc2UgYnkgdGhlIHNlY29uZC1oaWdoZXN0IGJpZC4gSWYgeW91IGRvbid0IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIHJlbWFpbiB1bmNoYW5nZWQuCkFmdGVyIGVhY2ggYXVjdGlvbiwgd2Ugd2lsbCBkaXNwbGF5IGFsbCBiaWRzLiBUaWVzIGZvciB0aGUgaGlnaGVzdCBiaWQgd2lsbCBiZSByZXNvbHZlZCByYW5kb21seS4=)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize. Your value for the prize will be calculated as follows:

1. First we will randomly draw a common value between {{common\_low}} and {{common\_high}}, with all values equally likely.

2. Then, for each bidder, a private taste adjustment will be drawn between 0 and {{private}}, with all values equally likely.

Your value for the prize is equal to the common value plus your private taste adjustment. You will not learn the common value or your private taste adjustment separately. This means that each person in your group may have a different value for the prize. However, if you have a high value, it is more likely that other people in your group have a high value.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the second-highest bid. If you win, your earnings will increase by your value for the prize, and decrease by the second-highest bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

The implementation of the clock auction simulates a global clock price, with prices beginning at $0$ and increasing in $\$1$ increments. The clock auction format descriptions closely mirror the SPSB format above, but with the added description of the clock mechanism in the fourth and fifth paragraphs.
In the AC auction, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUuIFlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93czoKMS4gRmlyc3Qgd2Ugd2lsbCByYW5kb21seSBkcmF3IGEgY29tbW9uIHZhbHVlIGJldHdlZW4ge3tjb21tb25fbG93fX0gYW5kIHt7Y29tbW9uX2hpZ2h9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgoyLiBUaGVuLCBmb3IgZWFjaCBiaWRkZXIsIGEgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50IHdpbGwgYmUgZHJhd24gYmV0d2VlbiAwIGFuZCB7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpZb3VyIHZhbHVlIGZvciB0aGUgcHJpemUgaXMgZXF1YWwgdG8gdGhlIGNvbW1vbiB2YWx1ZSBwbHVzIHlvdXIgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50LiBZb3Ugd2lsbCBub3QgbGVhcm4gdGhlIGNvbW1vbiB2YWx1ZSBvciB5b3VyIHByaXZhdGUgdGFzdGUgYWRqdXN0bWVudCBzZXBhcmF0ZWx5LiBUaGlzIG1lYW5zIHRoYXQgZWFjaCBwZXJzb24gaW4geW91ciBncm91cCBtYXkgaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgdGhlIHByaXplLiBIb3dldmVyLCBpZiB5b3UgaGF2ZSBhIGhpZ2ggdmFsdWUsIGl0IGlzIG1vcmUgbGlrZWx5IHRoYXQgb3RoZXIgcGVvcGxlIGluIHlvdXIgZ3JvdXAgaGF2ZSBhIGhpZ2ggdmFsdWUuClRoZSBhdWN0aW9uIHByb2NlZWRzIGFzIGZvbGxvd3M6IEZpcnN0LCB5b3Ugd2lsbCBsZWFybiB5b3VyIHZhbHVlIGZvciB0aGUgcHJpemUuIFRoZW4sIHRoZSBhdWN0aW9uIHdpbGwgc3RhcnQuIFdlIHdpbGwgZGlzcGxheSBhIHByaWNlIHRvIGV2ZXJ5b25lIGluIHlvdXIgZ3JvdXAgdGhhdCBzdGFydHMgYXQgMCBhbmQgY291bnRzIHVwd2FyZHMgaW4ge3tpbmNyZW1lbnR9fSBVU0QgaW5jcmVtZW50cywgdXAgdG8gYSBtYXhpbXVtIG9mIHt7Y29tbW9uX2hpZ2ggKyBwcml2YXRlfX0uIEF0IGFueSBwb2ludCwgeW91IGNhbiBjaG9vc2UgdG8gbGVhdmUgdGhlIGF1Y3Rpb24sIGFuZCBhbnl0aW1lIGEgYmlkZGVyIGxlYXZlcywgd2Ugd2lsbCBicm9hZGNhc3QgdGhhdCBpbmZvcm1hdGlvbiB0byBhbGwgdGhlIHJlbWFpbmluZyBiaWRkZXJzLgpXaGVuIHRoZXJlIGlzIG9ubHkgb25lIGJpZGRlciBsZWZ0IGluIHRoZSBhdWN0aW9uLCB0aGF0IGJpZGRlciB3aWxsIHdpbiB0aGUgcHJpemUgYXQgdGhlIGN1cnJlbnQgcHJpY2UuIElmIHlvdSB3aW4sIHlvdXIgZWFybmluZ3Mgd2lsbCBpbmNyZWFzZSBieSB5b3VyIHZhbHVlIGZvciB0aGUgcHJpemUsIGFuZCBkZWNyZWFzZSBieSB0aGUgY3VycmVudCBwcmljZS4gSWYgeW91IGRvbid0IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIHJlbWFpbiB1bmNoYW5nZWQuCkFmdGVyIGVhY2ggYXVjdGlvbiwgd2Ugd2lsbCBkaXNwbGF5IGFsbCBiaWRzLiBUaWVzIGZvciB0aGUgaGlnaGVzdCBiaWQgd2lsbCBiZSByZXNvbHZlZCByYW5kb21seS4=)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize. Your value for the prize will be calculated as follows:

1. First we will randomly draw a common value between {{common\_low}} and {{common\_high}}, with all values equally likely.

2. Then, for each bidder, a private taste adjustment will be drawn between 0 and {{private}}, with all values equally likely.

Your value for the prize is equal to the common value plus your private taste adjustment. You will not learn the common value or your private taste adjustment separately. This means that each person in your group may have a different value for the prize. However, if you have a high value, it is more likely that other people in your group have a high value.

The auction proceeds as follows: First, you will learn your value for the prize. Then, the auction will start. We will display a price to everyone in your group that starts at 0 and counts upwards in {{increment}} USD increments, up to a maximum of {{common\_high + private}}. At any point, you can choose to leave the auction, and anytime a bidder leaves, we will broadcast that information to all the remaining bidders.

When there is only one bidder left in the auction, that bidder will win the prize at the current price. If you win, your earnings will increase by your value for the prize, and decrease by the current price. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

The AC-B auction description closely resembles the AC format, but with the explicit caveat that we will not notify bidders when competitors drop out.

### I.3 Common Value Auctions

For the Second-Price Sealed-Bid auction in the Common Value setting, the rule is

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHBlcmNlaXZlZCB2YWx1ZSBmb3IgdGhlIHByaXplLSBhIG5vaXN5IG1lYXN1cmVtZW50IG9mIHRoZSB0cnVlIHZhbHVlIG9mIHRoZSBwcml6ZS4gWW91ciBwZXJjZWl2ZWQgdmFsdWUgZm9yIHRoZSBwcml6ZSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93czoKMS4gRm9yIGVhY2ggcm91bmQsIGEgY29tbW9uIHZhbHVlIHdpbGwgYmUgZHJhd24gYmV0d2VlbiB7e2NvbW1vbl9sb3d9fSBhbmQge3tjb21tb25faGlnaH19LCB3aXRoIGFsbCB2YWx1ZXMgZXF1YWxseSBsaWtlbHkgdG8gYmUgZHJhd24uCjIuIEZvciBlYWNoIHBlcnNvbiwgYSBwcml2YXRlIG5vaXN5IGFkanVzdG1lbnQgd2lsbCBiZSBkcmF3biBiZXR3ZWVuIC17e3ByaXZhdGV9fSBhbmQge3twcml2YXRlfX0sIHdpdGggYWxsIHZhbHVlcyBlcXVhbGx5IGxpa2VseSB0byBiZSBkcmF3bi4KV2Ugd2lsbCB0ZWxsIHlvdSB5b3VyIHBlcmNlaXZlZCB2YWx1ZSwgdGhlIHN1bSBvZiB0aGUgY29tbW9uIHZhbHVlIGFuZCB0aGUgcHJpdmF0ZSBub2lzZSBhZGp1c3RtZW50LiBIb3dldmVyLCBldmVyeW9uZSdzIHRydWUgdmFsdWUgZm9yIHRoZSBwcml6ZSBpcyBlcXVhbCB0byB0aGUgc2hhcmVkIGNvbW1vbiB2YWx1ZS4KQWZ0ZXIgbGVhcm5pbmcgeW91ciBwZXJjZWl2ZWQgdmFsdWUsIHlvdSB3aWxsIHN1Ym1pdCBhIGJpZCBwcml2YXRlbHkgYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgb3RoZXIgYmlkZGVycy4gQmlkcyBtdXN0IGJlIGluICR7e2luY3JlbWVudH19IGluY3JlbWVudHMuClRoZSBoaWdoZXN0IGJpZGRlciB3aW5zIHRoZSBwcml6ZSBhbmQgcGF5cyB0aGUgc2Vjb25kLWhpZ2hlc3QgYmlkLiBJZiB5b3Ugd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgaW5jcmVhc2UgYnkgdGhlIHRydWUgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHRoZSBzZWNvbmQtaGlnaGVzdCBiaWQuIElmIHlvdSBkb24ndCB3aW4sIHlvdXIgZWFybmluZ3Mgd2lsbCByZW1haW4gdW5jaGFuZ2VkLgpBZnRlciBlYWNoIGF1Y3Rpb24sIHdlIHdpbGwgZGlzcGxheSBhbGwgYmlkcy4gVGllcyBmb3IgdGhlIGhpZ2hlc3QgYmlkIHdpbGwgYmUgcmVzb2x2ZWQgcmFuZG9tbHku)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their perceived value for the prize- a noisy measurement of the true value of the prize. Your perceived value for the prize will be calculated as follows:

1. For each round, a common value will be drawn between {{common\_low}} and {{common\_high}}, with all values equally likely to be drawn.

2. For each person, a private noisy adjustment will be drawn between -{{private}} and {{private}}, with all values equally likely to be drawn.

We will tell you your perceived value, the sum of the common value and the private noise adjustment. However, everyone’s true value for the prize is equal to the shared common value.

After learning your perceived value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the second-highest bid. If you win, your earnings will increase by the true value for the prize, and decrease by the second-highest bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

### I.4 Ebay-proxy prompt

For the Standard eBay auction with proxy bidding (T1), the rule is:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBlQmF5IGF1Y3Rpb24gZm9yIGFuIGl0ZW0gYWdhaW5zdCB7e251bV9iaWRkZXJzfX0gb3RoZXIgYmlkZGVycy4gVGhpcyBhdWN0aW9uIHdpbGwgbGFzdCBmb3Ige3tudW1fcm91bmRzfX0gZGF5cy4gQWxsIGRvbGxhciBhbW91bnRzIGluIHRoaXMgZ2FtZSBhcmUgaW4gVVMgRG9sbGFycyAoJCkuCgpJdGVtIERldGFpbHM6Ckl0ZW0gRGVzY3JpcHRpb246IHt7aXRlbV9kZXNjcmlwdGlvbn19Ckl0ZW0gQ29uZGl0aW9uOiB7e2l0ZW1fY29uZGl0aW9ufX0KWW91ciBQcml2YXRlIFZhbHVlOiBBdCB0aGUgc3RhcnQgb2YgZWFjaCByb3VuZCwgYmlkZGVycyB3aWxsIHNlZSB0aGVpciB2YWx1ZSBmb3IgdGhlIGl0ZW0sIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LiBBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlIGZvciB0aGUgaXRlbSwgeW91IHdpbGwgc3VibWl0IGEgbWF4aW11bSBiaWQuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgoKQXVjdGlvbiBGb3JtYXQ6ClRoaXMgaXMgYW4gZUJheSBhdWN0aW9uLiBUaGUgYXVjdGlvbiBzdGFydHMgYXQgJHt7c3RhcnRfcHJpY2V9fSBhbmQgd2lsbCBsYXN0IGZvciB7e251bV9yb3VuZHN9fSBkYXlzLiBlQmF5IHVzZXMgInByb3h5IGJpZGRpbmcuIiBUaGlzIG1lYW5zIHRoYXQgaWYgeW91IHdpc2ggdG8gZW50ZXIgdGhlIGF1Y3Rpb24sIHlvdSBzaG91bGQgc3VibWl0IHlvdXIgbWF4aW11bSBiaWQsIGFuZCBlQmF5IHdpbGwgYXV0b21hdGljYWxseSBiaWQgb24geW91ciBiZWhhbGYsIHVwIHRvIHlvdXIgbWF4aW11bSwgb25seSBhcyBtdWNoIGFzIG5lY2Vzc2FyeSB0byBtYWludGFpbiB5b3VyIHBvc2l0aW9uIGFzIHRoZSBoaWdoZXN0IGJpZGRlci4gRWFjaCBkYXkgeW91IHdpbGwgc2VlIHRoZSBjdXJyZW50IHByaWNlIGFuZCBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBpbmNyZWFzZSB5b3VyIG1heGltdW0gYmlkLiBJZiB5b3UgZG8gbm90IHdhbnQgdG8gaW5jcmVhc2UgeW91ciBtYXhpbXVtIGJpZCwgdGhlbiBvdXRwdXQgSE9MRC4KCllvdSBtYXkgcGxhY2UgYmlkcyBhdCBhbnkgcG9pbnQgZHVyaW5nIHRoZSBhdWN0aW9uLCBldmVuIG9uIHRoZSBmaW5hbCBkYXkuIE5vIGJpZGRlciB3aWxsIGtub3cgaWYgdGhleSAob3IgYW55b25lIGVsc2UpIGlzIHRoZSBsYXN0IGJpZGRlciBvbiB0aGUgZmluYWwgZGF5LgoKVGhlIGhpZ2hlc3QgYmlkZGVyIHdpbnMgdGhlIHByaXplIGFuZCBwYXlzIHRoZSBhdWN0aW9uIHByaWNlIGF0IHRoZSB0aW1lIHRoZSBhdWN0aW9uJ3MgY2xvY2sgZXhwaXJlZC4gSWYgeW91IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIGluY3JlYXNlIGJ5IHlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHRoZSBmaW5hbCBhdWN0aW9uIHByaWNlLiBJZiB5b3UgZG9uJ3Qgd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgcmVtYWluIHVuY2hhbmdlZC4gVGllcyBmb3IgdGhlIGhpZ2hlc3QgYmlkIHdpbGwgYmUgcmVzb2x2ZWQgcmFuZG9tbHku)

In this game, you will participate in an eBay auction for an item against {{num\_bidders}} other bidders. This auction will last for {{num\_rounds}} days. All dollar amounts in this game are in US Dollars ($).

Item Details:

Item Description: {{item\_description}}

Item Condition: {{item\_condition}}

Your Private Value: At the start of each round, bidders will see their value for the item, randomly drawn between $0 and ${{private}}, with all values equally likely. After learning your value for the item, you will submit a maximum bid. Bids must be in ${{increment}} increments.

Auction Format:

This is an eBay auction. The auction starts at ${{start\_price}} and will last for {{num\_rounds}} days. eBay uses "proxy bidding." This means that if you wish to enter the auction, you should submit your maximum bid, and eBay will automatically bid on your behalf, up to your maximum, only as much as necessary to maintain your position as the highest bidder. Each day you will see the current price and have the opportunity to increase your maximum bid. If you do not want to increase your maximum bid, then output HOLD.

You may place bids at any point during the auction, even on the final day. No bidder will know if they (or anyone else) is the last bidder on the final day.

The highest bidder wins the prize and pays the auction price at the time the auction’s clock expired. If you win, your earnings will increase by your value for the prize, and decrease by the final auction price. If you don’t win, your earnings will remain unchanged. Ties for the highest bid will be resolved randomly.

For the eBay auction with a modified closing rule (T2), the updated closing rule in the prompt is

[⬇](data:text/plain;base64,VGhpcyBhdWN0aW9uIGFsc28gaGFzIGEgY2xvc2luZyBydWxlLiBUaGlzIG1lYW5zIHRoYXQgaWYgYSBuZXcgbWF4aW11bSBiaWQgaXMgcGxhY2VkIG9uIHRoZSBsYXN0IGRheSwgdGhlIGF1Y3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGV4dGVuZCBieSBhbm90aGVyIGRheS4gVGhpcyBleHRlbnNpb24gd2lsbCBjb250aW51ZSB0byBiZSBhcHBsaWVkIGFzIGxvbmcgYXMgbmV3IG1heGltdW0gYmlkcyBhcmUgcGxhY2VkIG9uIHRoZSBmaW5hbCBkYXkuIE5vIGJpZGRlciB3aWxsIGtub3cgaWYgdGhleSAob3IgYW55b25lIGVsc2UpIGlzIHRoZSBmaW5hbCBiaWRkZXIgb24gdGhlIGxhc3QgZGF5Lg==)

This auction also has a closing rule. This means that if a new maximum bid is placed on the last day, the auction will automatically extend by another day. This extension will continue to be applied as long as new maximum bids are placed on the final day. No bidder will know if they (or anyone else) is the final bidder on the last day.

### I.5 Intervention Prompt

We designed the clock framing intervention prompt based on [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29).

[⬇](data:text/plain;base64,RklSU1QgU1RBR0U6IFNlYWxlZCBCaWQKICAgIFlvdSB3aWxsIHN1Ym1pdCBhIHNlYWxlZCBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIFRoaXMgYmlkIHdpbGwgc2VydmUgYXMgeW91ciBhdXRvbWF0aWMgZXhpdCBwcmljZSBpbiB0aGUgbmV4dCBzdGFnZS4KU0VDT05EIFNUQUdFOiBBc2NlbmRpbmcgQ2xvY2sgKFNpbXVsYXRpb24pCiAgICBBZnRlciB0aGUgc2VhbGVkIGJpZCBzdGFnZSwgd2Ugd2lsbCBzaW11bGF0ZSBhbiBhc2NlbmRpbmcgY2xvY2sgYXVjdGlvbi4KICAgIFRoZSBjbG9jayB3aWxsIHN0YXJ0IGF0IDAgYW5kIGluY3JlYXNlIGluIGluY3JlbWVudHMgb2Yge2luY3JlbWVudH0uCiAgICBUaGUgY2xvY2sgd2lsbCBkaXNwbGF5IHRoZSBjdXJyZW50IHByaWNlLiBZb3Ugd2lsbCBhbHNvIHNlZSB0aGF0IHRoZXJlIGFyZSBhIHRvdGFsIG9mIFx7bnVtJFxfJGJpZGRlcnNcfSBiaWRkZXJzIHBhcnRpY2lwYXRpbmcsIGFsdGhvdWdoIHlvdSBkbyBub3Qga25vdyBvdGhlciBiaWRkZXIncyB2YWx1ZXMuCiAgICBJZiB0aGUgY3VycmVudCBwcmljZSBvbiB0aGUgY2xvY2sgcmVhY2hlcyBvciBleGNlZWRzIHlvdXIgc2VhbGVkIGJpZCBmcm9tIHRoZSBmaXJzdCBzdGFnZSwgeW91IHdpbGwgYXV0b21hdGljYWxseSBleGl0IHRoZSBhdWN0aW9uLiBUaGUgYXVjdGlvbiBlbmRzIHdoZW4gb25seSBvbmUgYmlkZGVyIGlzIGxlZnQgcmVtYWluaW5nIGluIHRoZSBzZWNvbmQgc3RhZ2UgYmFzZWQgb24gdGhlaXIgYmlkIGZyb20gdGhlIGZpcnN0IHN0YWdlLgogICAgRU5EIE9GIEFVQ1RJT04=)

FIRST STAGE: Sealed Bid

You will submit a sealed bid privately at the same time as the other bidders. This bid will serve as your automatic exit price in the next stage.

SECOND STAGE: Ascending Clock (Simulation)

After the sealed bid stage, we will simulate an ascending clock auction.

The clock will start at 0 and increase in increments of {increment}.

The clock will display the current price. You will also see that there are a total of \{num$\\_$bidders\} bidders participating, although you do not know other bidder’s values.

If the current price on the clock reaches or exceeds your sealed bid from the first stage, you will automatically exit the auction. The auction ends when only one bidder is left remaining in the second stage based on their bid from the first stage.

END OF AUCTION
