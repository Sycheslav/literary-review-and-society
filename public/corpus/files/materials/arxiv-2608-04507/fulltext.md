---
id: arxiv-2608-04507-text
type: material
title: Emergence of Reputation-Based Cooperation in LLM Agents
work_id: arxiv-2608-04507
source_url: https://arxiv.org/html/2608.04507v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 99f370647cd0edde79f9d5099c147b3253b16ca1c168fbf7468c70b10dc1214e
---

> Источник: [https://arxiv.org/html/2608.04507v1](https://arxiv.org/html/2608.04507v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Emergence of Reputation-Based Cooperation in LLM Agents

Kazuya Horibe
Affiliation: RIKEN
Email: [kazuya.horibe@riken.jp](mailto:)
  
Kenji Itao
Affiliation: RIKEN
Affiliation: Tohoku University
  
Wataru Toyokawa
Affiliation: RIKNE

###### Abstract

Can cooperation among large language model (LLM) agents be evolutionarily stable against free-rider invasion?
We study an indirect reciprocity donation game where LLM agents observe behavioral traces and donate on a continuous scale.
Strategies, represented as natural language prompts, evolve through cultural transmission across generations.
Across four LLM backends, robustness to free-rider invasion varies by more than an order of magnitude.
The strongest predictor of this robustness is opponent endowment sensitivity, the degree to which agents discriminate between cooperative and uncooperative opponents, operationalizing the classical Image Scoring mechanism.
By contrast, adherence to the Leading-Eight L1 norm does not predict robustness.
Robustness depends on defector exclusion: while both cooperator reward and defector punishment vary across models, only the stringency of defector exclusion predicts resistance to free-rider invasion.
These findings reveal that LLM agents are confined to Image Scoring-like discrimination and fail to develop the more robust Leading-Eight norms, highlighting a fundamental vulnerability in culturally evolved LLM cooperation and motivating bottom-up approaches to norm construction.

|  |
| --- |
|  |

## 1 Introduction

The rapid proliferation of large language models (LLMs) is reshaping how humans and artificial agents interact ([Burton et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib15); [Tsvetkova et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib16)).
LLMs can simulate human-like responses across a wide range of social and economic scenarios ([Akata et al., 2025](https://arxiv.org/html/2608.04507v1#bib.bib10); [Brookins and DeBacker, 2023](https://arxiv.org/html/2608.04507v1#bib.bib11); [Fan et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib12); [Guo et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib13); [Horton et al., 2023](https://arxiv.org/html/2608.04507v1#bib.bib38)).
As they increasingly participate in real-world contexts, ranging from customer service to collaborative work, their behaviors directly influence human behavior, creating feedback loops that shape future training data ([Perez et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib42)).
This “co-evolution” between human and AI behavior makes understanding LLM social dynamics not only an academic exercise but also a practical concern for designing robust human-AI hybrid societies ([Dafoe et al., 2020](https://arxiv.org/html/2608.04507v1#bib.bib17); [Conitzer and Oesterheld, 2023](https://arxiv.org/html/2608.04507v1#bib.bib43)).

A central question in this domain is whether LLM agents can sustain cooperation when self-interested exploitation is possible.
Cooperation among self-interested agents is a foundational problem across biology, social sciences, and artificial intelligence ([Hamilton, 1964](https://arxiv.org/html/2608.04507v1#bib.bib20); [Trivers, 1971](https://arxiv.org/html/2608.04507v1#bib.bib21); [Axelrod and Hamilton, 1981](https://arxiv.org/html/2608.04507v1#bib.bib22); [Nowak, 2006](https://arxiv.org/html/2608.04507v1#bib.bib23)).
Five general mechanisms promote the evolution of cooperation ([Nowak, 2006](https://arxiv.org/html/2608.04507v1#bib.bib23)), and experimental work has confirmed that humans readily cooperate and punish free-riders even in anonymous one-shot settings ([Fehr and Gächter, 2002](https://arxiv.org/html/2608.04507v1#bib.bib24)).
Unlike direct reciprocity, which sustains cooperation in repeated dyadic interactions ([Axelrod, 1980](https://arxiv.org/html/2608.04507v1#bib.bib18); [Trivers, 1971](https://arxiv.org/html/2608.04507v1#bib.bib21)), indirect reciprocity operates when the beneficiary of cooperation is not the one who later reciprocates ([Alexander, 1987](https://arxiv.org/html/2608.04507v1#bib.bib9); [Nowak and Sigmund, 2005](https://arxiv.org/html/2608.04507v1#bib.bib25)). Cooperative acts build reputation, and cooperation is sustained when others preferentially help those with good reputations ([Wedekind and Milinski, 2000](https://arxiv.org/html/2608.04507v1#bib.bib26); [Milinski et al., 2002](https://arxiv.org/html/2608.04507v1#bib.bib27); [Yoeli et al., 2013](https://arxiv.org/html/2608.04507v1#bib.bib19)).

Two theoretical frameworks address cooperation through indirect reciprocity, differing fundamentally in their information structure ([Nowak and Sigmund, 2005](https://arxiv.org/html/2608.04507v1#bib.bib25); [Okada, 2020](https://arxiv.org/html/2608.04507v1#bib.bib28)).
Image Scoring ([Nowak and Sigmund, 1998](https://arxiv.org/html/2608.04507v1#bib.bib3)) is a one-dimensional system where agents track observed behavior and cooperate with those whose image score exceeds a threshold.
This mechanism is intuitive and mirrors human gossip-based reputation systems ([Wedekind and Milinski, 2000](https://arxiv.org/html/2608.04507v1#bib.bib26)), but early models showed vulnerability to observation errors: occasional misperception of an action can cause cascading reputation loss, destabilizing cooperation ([Leimar and Hammerstein, 2001](https://arxiv.org/html/2608.04507v1#bib.bib6); [Panchanathan and Boyd, 2003](https://arxiv.org/html/2608.04507v1#bib.bib7)).
To address this limitation, [Ohtsuki and Iwasa (2004)](https://arxiv.org/html/2608.04507v1#bib.bib4); [Ohtsuki and Iwasa (2006)](https://arxiv.org/html/2608.04507v1#bib.bib5) introduced the Leading Eight, eight evolutionarily stable norms that update reputations based on both the donor’s action and the recipient’s reputation, forming a two-dimensional system where agents track “what did this person do, and to whom did they do it?”
This additional dimension enables more sophisticated discrimination: for example, the L1 norm ([Fujimoto and Ohtsuki, 2023](https://arxiv.org/html/2608.04507v1#bib.bib8)) prescribes that refusing to help a person with a bad reputation should not damage one’s own reputation, making the system more robust to errors.
Subsequent work has demonstrated that the complexity of social norms and the structure of past reputations critically affect the stability of cooperation ([Santos et al., 2018](https://arxiv.org/html/2608.04507v1#bib.bib29); [Hilbe et al., 2018](https://arxiv.org/html/2608.04507v1#bib.bib30); [Schmid et al., 2021](https://arxiv.org/html/2608.04507v1#bib.bib31)).
However, the Leading Eight framework assumes that agents have access to explicit binary reputation labels (“good” or “bad”). In real-world settings, such labels are typically not directly observable. Instead, agents must infer reputations based on observed behavioral histories, which may be noisy or incomplete.

Despite these theoretical advances, most prior work has studied indirect reciprocity using agents with binary action spaces (cooperate or defect), publicly-shared reputation labels (“good” or “bad”), and the evolutionary assumption where behavioral strategies inherit directly through natural selection (the phenotypic gambit).
These simplifications facilitate analytical tractability but diverge from real-world settings in three critical ways.
First, human social interactions typically involve continuous decisions, not “help or refuse” but “how much to help,” ranging from token gestures to substantial sacrifices.
Continuous action spaces qualitatively change strategic dynamics: agents can implement graded responses, cooperating partially with uncertain partners and reserving full cooperation for those with strong reputations ([Roberts and Sherratt, 1998](https://arxiv.org/html/2608.04507v1#bib.bib32); [Wahl and Nowak, 1999](https://arxiv.org/html/2608.04507v1#bib.bib33); [Schmid et al., 2023](https://arxiv.org/html/2608.04507v1#bib.bib34)).

Second, humans and LLM agents do not always share reputation labels; instead, they must evaluate their opponents’ goodness from behavioral observations, which are often incomplete and noisy ([Hilbe et al., 2018](https://arxiv.org/html/2608.04507v1#bib.bib30)).
This makes the system effectively Image Scoring-like (one-dimensional reputation inference) rather than Leading-Eight-like (two-dimensional reputation assignment).
Third, LLM populations evolve through cultural transmission of natural-language prompt texts ([Perez et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib42)).
Biases in generated text and the potentially nonlinear genotype–phenotype mapping (prompt text to behavioral strategy) may qualitatively alter evolutionary dynamics in ways the phenotypic gambit cannot predict.
Whether cultural transmission, which allows rapid behavioral adaptation ([Boyd and Richerson, 1985](https://arxiv.org/html/2608.04507v1#bib.bib35); [Mesoudi, 2011](https://arxiv.org/html/2608.04507v1#bib.bib36); [Henrich, 2004](https://arxiv.org/html/2608.04507v1#bib.bib37)), produces the same cooperation mechanisms as genetic evolution remains an open question.

LLM agents, equipped with natural language reasoning and trained on human social data, provide a new testbed for examining whether reputation-based cooperation emerges spontaneously in continuous action spaces, and how such strategies relate to theoretical frameworks like Image Scoring and the Leading Eight.

A growing literature examines LLM behavior in strategic interactions ([Akata et al., 2025](https://arxiv.org/html/2608.04507v1#bib.bib10); [Brookins and DeBacker, 2023](https://arxiv.org/html/2608.04507v1#bib.bib11); [Fan et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib12); [Guo et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib13); [Horton et al., 2023](https://arxiv.org/html/2608.04507v1#bib.bib38)), generally focusing on direct reciprocity.
These studies reveal that LLMs exhibit cooperative tendencies that vary systematically across models, contexts, and game structures ([Mei et al., 2024](https://arxiv.org/html/2608.04507v1#bib.bib39); [Lorè and Heydari, 2024](https://arxiv.org/html/2608.04507v1#bib.bib41); [Fontana et al., 2025](https://arxiv.org/html/2608.04507v1#bib.bib40)).
[Perez et al. (2024)](https://arxiv.org/html/2608.04507v1#bib.bib42) demonstrated that LLM populations exhibit cultural evolution dynamics analogous to human populations, with emergent attractors and cumulative changes across generations.
Most directly relevant, [Vallinder and Hughes (2024)](https://arxiv.org/html/2608.04507v1#bib.bib14) studied donation games among LLM agents and found that cooperative behavior evolves in Claude but not in Gemini or GPT-4o. However, two important questions remain unaddressed: the mechanisms driving this model-dependent variation are poorly understood, and whether evolved cooperation is robust against invasion by unconditional defectors (ALLD), that is, whether cooperative populations can resist exploitation by free-riders, was not tested.

This robustness question is not merely academic. As LLM agents are increasingly deployed in real-world collaborative settings alongside humans, naive cooperation that collapses under adversarial exploitation poses a practical risk. In human–AI hybrid societies, agents must not only cooperate with well-intentioned partners but also resist manipulation by malicious actors ([Dafoe et al., 2020](https://arxiv.org/html/2608.04507v1#bib.bib17)). Understanding whether culturally evolved cooperation in LLM populations is robust to free-rider invasion, and identifying the mechanisms that confer such robustness, is therefore essential for the safe deployment of autonomous agents.

In this paper, we study an indirect reciprocity donation game in which LLM agents observe behavioral traces of potential recipients (a chain of the last three interactions) and decide how much to donate on a continuous scale (0–100% of their endowment).
Strategies are defined as generated texts, and evolve through cultural transmission: offspring inherit their parent’s strategy and modify it based on the parent’s performance rank, using the LLM itself as the mutation operator.
We tested four LLM backends across ten generations of twelve agents each, measuring both population-level resource accumulation and robustness to free-rider invasion.

## 2 Methods

Our experimental framework builds on [Vallinder and Hughes (2024)](https://arxiv.org/html/2608.04507v1#bib.bib14), who studied cultural evolution in LLM donation games with top-$k$ truncation selection (the top 50% of agents survive and each produces one offspring).
We modify two aspects: we replace truncation selection with fitness-proportional (roulette wheel) selection, where each agent’s probability of being selected as a parent is proportional to its accumulated resources, and we redesign the prompts given to agents for both gameplay and strategy evolution (full prompt texts in Appendix [E](https://arxiv.org/html/2608.04507v1#A5 "Appendix E Prompts ‣ Emergence of Reputation-Based Cooperation in LLM Agents")).

$N=12$ LLM agents play an indirect reciprocity donation game across $G=10$ generations.
Each agent decides what fraction (0–100%) of their endowment to donate to recipients, with a 2:1 benefit-to-cost ratio ($b/c=2$).
Agents observe three-round behavioral traces (e.g., “recipient A donated $x$% to B, B donated $y$% to C”) rather than explicit reputation labels, making this an observation-based system.
Each agent’s strategy is a natural language text (up to 350 words).
In generation 1, the LLM generates an initial strategy given the game rules (Appendix [E](https://arxiv.org/html/2608.04507v1#A5 "Appendix E Prompts ‣ Emergence of Reputation-Based Cooperation in LLM Agents"), Prompt 1).
At each subsequent generation, roulette wheel selection chooses $N$ parents (with replacement), and each offspring inherits its parent’s strategy and generates a modified version based on the parent’s performance rank (Appendix [E](https://arxiv.org/html/2608.04507v1#A5 "Appendix E Prompts ‣ Emergence of Reputation-Based Cooperation in LLM Agents"), Prompt 2).
The LLM thus serves as both the decision-maker during gameplay (Appendix [E](https://arxiv.org/html/2608.04507v1#A5 "Appendix E Prompts ‣ Emergence of Reputation-Based Cooperation in LLM Agents"), Prompt 3) and the mutation operator during evolution.
We test four LLM backends: Claude 3.5 Sonnet, Gemini 1.5/2.0/2.5 Flash, with 10 independent runs per model.

To measure robustness, we conduct bot invasion experiments.
For each evolved strategy, we populate a 12-agent game with 11 copies of that strategy and 1 free-rider bot (always donates 0%), then run a single-generation round-robin game without strategy evolution.
A strategy is classified as robust if the evolved agents’ average score exceeds the bot’s score.
We test approximately 100 strategies per model (10 randomly sampled per generation $\times$ 10 generations); robustness is the percentage classified as robust.

We quantify strategies via $11\times 11$ cooperation matrices $M$, where $M\_{ij}$ represents the agent’s donation when $x\_{B}=i\times 10\%$ (B’s donation in round $t{-}2$) and $x\_{A}=j\times 10\%$ (A’s donation in round $t{-}1$).
Both axes represent observed opponent behavioral signals: $x\_{A}$ is the recipient’s own recent cooperation, while $x\_{B}$ is the cooperation level of the recipient’s prior interaction partner, consistent with Image Scoring assessment.
From these matrices, we extract features including: opponent endowment sensitivity = right\_edge (cooperation when $x\_{A}=60$–$100\%$) $-$ left\_edge (cooperation when $x\_{A}=0$–$40\%$); corner values $\alpha,\beta,\gamma,\delta$; L1 prevalence; monotonicity (Spearman $\rho$); and entropy.
Following [Ohtsuki and Iwasa (2004)](https://arxiv.org/html/2608.04507v1#bib.bib4), we compute four corner values from $5\times 5$ sub-regions of $M$:
$\alpha$ = mean($M$[high $x\_{B}$, low $x\_{A}$]),
$\beta$ = mean($M$[high $x\_{B}$, high $x\_{A}$]),
$\gamma$ = mean($M$[low $x\_{B}$, low $x\_{A}$]),
$\delta$ = mean($M$[low $x\_{B}$, high $x\_{A}$]),
where “high” denotes indices 6–10 and “low” denotes indices 0–4.
From these we define:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{Opponent Endowment Sensitivity (OES)}=\underbrace{\frac{1}{55}\sum\_{i=0}^{10}\sum\_{j=6}^{10}M\_{ij}}\_{\text{right\\_edge}}-\underbrace{\frac{1}{55}\sum\_{i=0}^{10}\sum\_{j=0}^{4}M\_{ij}}\_{\text{left\\_edge}}$$ |  | (1) |

Discrimination strength is $\beta-\alpha$.
An agent is classified as strongly monotonic if the mean Spearman $\rho$ between column index and cooperation value across all rows exceeds 0.5.
The L1 condition ([Ohtsuki and Iwasa, 2004](https://arxiv.org/html/2608.04507v1#bib.bib4)) requires $\alpha<\gamma<\delta\leq\beta$.
Full definitions of entropy and additional details appear in Appendix [B](https://arxiv.org/html/2608.04507v1#A2 "Appendix B Detailed methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents").

## 3 Results

### 3.1 Evolutionary dynamics and model-dependent robustness

We begin by examining how cooperation and robustness to free-rider invasion evolve across generations (Figure [1](https://arxiv.org/html/2608.04507v1#S3.F1 "Figure 1 ‣ Resource accumulation varies widely across models. ‣ 3.1 Evolutionary dynamics and model-dependent robustness ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")).

#### Resource accumulation varies widely across models.

Claude 3.5 Sonnet and Gemini 2.5 Flash show substantial increases in mean total resources over generations (Figure [1](https://arxiv.org/html/2608.04507v1#S3.F1 "Figure 1 ‣ Resource accumulation varies widely across models. ‣ 3.1 Evolutionary dynamics and model-dependent robustness ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")a), indicating the evolution of cooperative strategies that benefit the population as a whole.
Consistent with prior findings ([Vallinder and Hughes, 2024](https://arxiv.org/html/2608.04507v1#bib.bib14)), these models successfully develop and maintain strategies that enable mutual cooperation, resulting in resource growth that exceeds the initial endowment by factors of 2–3 by generation 10.
In contrast, Gemini 1.5 Flash and Gemini 2.0 Flash show modest or no increase in resources, suggesting that their evolved strategies fail to sustain high levels of cooperation across the population.
The variance across independent runs (shaded regions in Figure [1](https://arxiv.org/html/2608.04507v1#S3.F1 "Figure 1 ‣ Resource accumulation varies widely across models. ‣ 3.1 Evolutionary dynamics and model-dependent robustness ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")a) indicates that evolutionary outcomes are relatively stable within each model, though Gemini 2.5 Flash exhibits higher variability, possibly reflecting a richer set of viable cooperative strategies.

Figure 1: Evolution of cooperation and robustness across generations (x-axis shared). (a) Mean total resources per generation for each LLM backend. Shaded regions indicate standard deviation across 10 independent runs. Claude 3.5 Sonnet and Gemini 2.5 Flash show substantial increases, while Gemini 1.5/2.0 Flash show modest or no growth. (b) Proportion of strategies from each generation that successfully expelled a free-rider bot (always donates 0%). Final robustness: Gemini 2.5 Flash (48%), Gemini 2.0 Flash (28%), Gemini 1.5 Flash (10%), Claude 3.5 Sonnet (3%).

#### Robustness to free-rider invasion varies by an order of magnitude.

Despite achieving similar resource growth, models differ substantially in robustness to free-rider invasion (Figure [1](https://arxiv.org/html/2608.04507v1#S3.F1 "Figure 1 ‣ Resource accumulation varies widely across models. ‣ 3.1 Evolutionary dynamics and model-dependent robustness ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")b).
Gemini 2.5 Flash achieves the highest robustness at 48%, meaning that nearly half of its evolved strategies can successfully resist exploitation when a free-rider infiltrates the population.
Gemini 2.0 Flash follows with 28% robustness, Gemini 1.5 Flash with 10%, and Claude 3.5 Sonnet with only 3%.
The most robust model is thus 16 times more robust than the least robust, a difference spanning 45 percentage points.

The temporal dynamics of robustness emergence (Figure [1](https://arxiv.org/html/2608.04507v1#S3.F1 "Figure 1 ‣ Resource accumulation varies widely across models. ‣ 3.1 Evolutionary dynamics and model-dependent robustness ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")b) reveal distinct evolutionary pathways.
Gemini 2.5 Flash develops robust strategies early, with robustness peaking at 70% in generation 2 before stabilizing around 40–48% in later generations.
This early emergence suggests that the model’s initial strategy generation already biases toward defector exclusion mechanisms, which are then refined through cultural transmission.
Gemini 2.0 Flash shows a different pattern: robustness fluctuates considerably across generations, reaching 50% in generations 5–6 before declining to 30% by generation 10.
This volatility may reflect competing evolutionary pressures between cooperation and exploitation within the population.
Claude 3.5 Sonnet, by contrast, shows minimal robustness throughout evolution, never exceeding 10% in any generation.
This persistent vulnerability indicates that the model’s evolved strategies systematically fail to exclude free-riders, despite successfully cooperating among themselves.

### 3.2 Mechanisms of robustness: continuous discrimination

All four models develop threshold-based discrimination without explicit instruction to do so.
Across 400 agents spanning four models and ten generations (Appendix [C](https://arxiv.org/html/2608.04507v1#A3 "Appendix C Detailed model profiles ‣ Emergence of Reputation-Based Cooperation in LLM Agents")), 98.8% exhibit strongly monotonic strategies (Spearman $\rho>0.5$ between opponent cooperation level and agent cooperation level), with model-specific rates ranging from 97.0% to 100.0% and mean correlations from 0.931 to 0.970.
This near-universal emergence of monotonic strategies confirms that Image Scoring-like discrimination ([Nowak and Sigmund, 1998](https://arxiv.org/html/2608.04507v1#bib.bib3)) is a robust emergent property of LLM agents.
Yet if all models discriminate, why does robustness to free-riders vary 16-fold?

#### Discrimination strength, not its presence, predicts robustness.

The answer lies not in whether agents discriminate, but in how strongly they do so.
We regressed model-level robustness against model-level mean strategy features (Table [1](https://arxiv.org/html/2608.04507v1#S3.T1 "Table 1 ‣ Discrimination strength, not its presence, predicts robustness. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")).

Table 1: Single-feature regression predicting robustness (%) from generation 10 model-level mean strategy features ($n=4$ models). ∗: $p<0.05$; †: $p<0.10$.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Feature | $\boldsymbol{R^{2}}$ | $p$-value | Slope | Sig. |
| Opponent endow. sensitivity | 0.934 | 0.033 | +1.62 | ∗ |
| $\beta-\alpha$ | 0.898 | 0.053 | +1.73 | † |
| Matrix entropy | 0.788 | 0.112 | $-219.3$ | n.s. |
| Left edge | 0.786 | 0.113 | $-2.30$ | n.s. |
| L1 prevalence | 0.671 | 0.181 | $-116.7$ | n.s. |
| Mean cooperation | 0.046 | 0.785 | $-0.98$ | n.s. |

Opponent endowment sensitivity (Equation 1) explains 93.4% of the variance in robustness ($R^{2}=0.934$, $p=0.033$; Table [1](https://arxiv.org/html/2608.04507v1#S3.T1 "Table 1 ‣ Discrimination strength, not its presence, predicts robustness. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")), making it the only significant predictor at $\alpha=0.05$ with $n=4$ models.
The closely related metric $\beta-\alpha$ ($R^{2}=0.898$, $p=0.053$; $r>0.99$ with opponent endowment sensitivity) corroborates this finding.
By contrast, mean cooperation level has virtually no predictive power ($R^{2}=0.046$), and L1 prevalence, the proportion of strategies satisfying the Leading-Eight L1 condition ([Ohtsuki and Iwasa, 2004](https://arxiv.org/html/2608.04507v1#bib.bib4)), does not significantly predict robustness ($R^{2}=0.671$, $p=0.181$).
The L1 failure is expected: the L1 norm assumes access to explicit binary reputation labels, whereas our agents infer cooperativeness from behavioral traces, making this effectively an Image Scoring system where one-dimensional discrimination is the relevant mechanism.

#### Defector exclusion predicts robustness.

To understand *why* discrimination strength predicts robustness, we decompose opponent endowment sensitivity into its two components (Table [2](https://arxiv.org/html/2608.04507v1#S3.T2 "Table 2 ‣ Defector exclusion predicts robustness. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents")).

Table 2: Decomposition of opponent endowment sensitivity (generation 10 means, $n=10$ agents per model). Left edge = cooperation when $x\_{A}=0$–$40\%$ (A’s donation in round $t{-}1$); right edge = cooperation when $x\_{A}=60$–$100\%$.

| Model | Left Edge | Right Edge | Opp. Endow. Sens. | Robustness (%) |
| --- | --- | --- | --- | --- |
| Gemini 2.5 Flash | 22.4 | 83.5 | 61.1 | 48.0 |
| Gemini 2.0 Flash | 22.6 | 73.6 | 51.0 | 28.0 |
| Claude 3.5 Sonnet | 38.7 | 76.9 | 38.2 | 3.0 |
| Gemini 1.5 Flash | 30.8 | 65.9 | 35.1 | 10.0 |

The right edge (cooperation with high-cooperation opponents) varies across models (65.9–83.5%, a span of 17.6 percentage points), though all models reward cooperators at moderately high levels.
The left edge (cooperation with low-cooperation opponents) spans a similar range (22.4–38.7%, a span of 16.3 percentage points).
Crucially, the absolute level of cooperation with low-cooperation opponents determines robustness: models with left edges below 25% (Gemini 2.0 and 2.5 Flash) achieve substantially higher robustness than those above 30% (Claude 3.5 Sonnet and Gemini 1.5 Flash).
The mechanism is straightforward: a free-rider that always donates 0% will be identified as a low-cooperation opponent.
Claude 3.5 Sonnet, with a left edge of 38.7%, donates nearly two-fifths of its resources even to such opponents, allowing free-riders to accumulate 7.74 units per round ($0.387\times 10\times 2$, accounting for the 2:1 benefit-to-cost ratio), which can exceed the net gains of cooperators.
Gemini 2.0 and 2.5 Flash maintain left edges near 22%, limiting free-rider accumulation to approximately 4.5 units per round, insufficient to outcompete cooperators whose mutual cooperation yields higher returns.

#### Strategy texts confirm the quantitative pattern.

Table [3](https://arxiv.org/html/2608.04507v1#S3.T3 "Table 3 ‣ Strategy texts confirm the quantitative pattern. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents") and Figure [2](https://arxiv.org/html/2608.04507v1#A4.F2 "Figure 2 ‣ Appendix D Representative strategy heatmaps ‣ Emergence of Reputation-Based Cooperation in LLM Agents") (Appendix [D](https://arxiv.org/html/2608.04507v1#A4 "Appendix D Representative strategy heatmaps ‣ Emergence of Reputation-Based Cooperation in LLM Agents")) show what discrimination strength looks like in practice.
Robust strategies (Gemini 2.5 Flash) include explicit punishment thresholds: “if the recipient (A) donated less than 20%, donate 0%.”
This threshold produces the steep left-to-right gradient visible in the heatmaps: near-zero cooperation with low-cooperation opponents, high cooperation with high-cooperation opponents.
Non-robust strategies (Claude 3.5 Sonnet) instead maintain cooperation floors: “but never less than 35%,” producing the uniformly elevated heatmaps that allow free-riders to persist.
A multiple regression incorporating $\beta-\alpha$ and left edge achieves $R^{2}=0.961$ (MAE = 3.23 pp; note that with $n=4$ and two predictors, residual degrees of freedom are minimal), suggesting that discrimination strength and defector exclusion jointly account for robustness.

Table 3: Example evolved strategies from generation 10. Robust strategies explicitly exclude low-cooperation opponents; Non-robust strategies maintain positive cooperation even toward defectors.

| Type | Strategy Text (abbreviated) |
| --- | --- |
| Robust (Gemini 2.5) | “Donate 100% in the first round; thereafter, if the recipient (A) donated 80% or more, donate 100%; if A donated less than 20%, donate 0%; if A donated between 20% and 79%, determine a base increase based on B’s donation…” |
| Non-robust (Claude 3.5) | “Donate 50% in the first round; in subsequent rounds, donate an amount equal to the average of A’s last donation and the average of B and C’s donations, plus a base 25% that increases by 1% each round up to 40%, but never less than 35%…” |

## 4 Discussion

### 4.1 From classical Image Scoring to continuous discrimination

Our results are consistent with the Image Scoring mechanism ([Nowak and Sigmund, 1998](https://arxiv.org/html/2608.04507v1#bib.bib3)) in a cognitively rich setting with continuous actions.
Four predictions from Image Scoring theory are supported:
(1) threshold-based strategies evolve (98.8% of agents show monotonic strategies);
(2) agents discriminate based on observed cooperation (opponent endowment sensitivity predicts robustness with $R^{2}=0.934$);
(3) discriminators exclude defectors (high sensitivity correlates with high robustness, $r=0.967$); and
(4) no explicit reputation system is needed (observation-based inference suffices).
These findings extend Image Scoring from the domain of simple, genetically evolved agents to LLM agents with natural language reasoning and cultural transmission.
The fact that LLMs develop these strategies without explicit instruction to discriminate suggests that cooperative discrimination is a robust emergent property of agents trained on human social data.

#### LLM agents are confined to Image Scoring.

L1 prevalence does not predict robustness ($R^{2}=0.671$, $p=0.181$), and only 9–15% of strategies across all models satisfy the L1 condition.
This means that LLM agents, despite their sophisticated language capabilities, fail to construct the more robust Leading-Eight norms that theory predicts are necessary for cooperation to withstand observation errors ([Ohtsuki and Iwasa, 2006](https://arxiv.org/html/2608.04507v1#bib.bib5)).
Instead, they are confined to Image Scoring, a mechanism known to be vulnerable to noise and misperception ([Leimar and Hammerstein, 2001](https://arxiv.org/html/2608.04507v1#bib.bib6); [Panchanathan and Boyd, 2003](https://arxiv.org/html/2608.04507v1#bib.bib7)).
Even the most robust model (Gemini 2.5 Flash) achieves only 48% robustness against a simple unconditional defector, suggesting that Image Scoring alone is insufficient to guarantee evolutionary stability in realistic settings where observation errors are inevitable.

#### Generalizing Image Scoring to continuous action spaces.

These findings suggest that Image Scoring naturally extends to continuous action spaces.
In the classical binary setting, Image Scoring prescribes a threshold rule: cooperate if the opponent’s reputation exceeds a cutoff, defect otherwise ([Nowak and Sigmund, 1998](https://arxiv.org/html/2608.04507v1#bib.bib3)).
Our agents implement a continuous analogue: a graded cooperation function where donation increases with observed opponent cooperation.
The critical insight is that monotonicity alone is insufficient: nearly all agents (98.8%) develop monotonic strategies, yet robustness varies 16-fold.
What distinguishes robust from non-robust strategies is the *steepness* of the discrimination gradient, captured by opponent endowment sensitivity.
Claude 3.5 Sonnet illustrates this: despite near-universal monotonicity (99% of strategies), its shallow gradient (OES = 38.2) fails to exclude defectors, yielding only 3% robustness.
This suggests that the relevant dimension for cooperation stability in continuous spaces is not whether agents discriminate, but how sharply they do so, representing a quantitative rather than qualitative criterion.

### 4.2 Mechanisms of robustness and cultural evolution

#### Defector exclusion as the critical axis of variation.

As shown in Section [3.2](https://arxiv.org/html/2608.04507v1#S3.SS2 "3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents"), the critical differentiator of robustness is not how much agents reward cooperators, but how stringently they exclude defectors.
This suggests that the evolutionary challenge for cooperative LLM populations is calibrating the threshold at which cooperation is withheld from suspected defectors.

#### Cultural evolution refines rather than discovers discrimination.

Unlike genetic evolution, where discrimination mechanisms must evolve de novo from random strategies, LLMs begin with strong priors for cooperative discrimination, likely inherited from pre-training on human social interaction data.
Discrimination strength ($\beta-\alpha$) is already high in generation 1 (ranging from 39 to 59 across models; Table [4](https://arxiv.org/html/2608.04507v1#A3.T4 "Table 4 ‣ Appendix C Detailed model profiles ‣ Emergence of Reputation-Based Cooperation in LLM Agents")) and remains largely stable through generation 10, with three of four models changing by less than 6% (Gemini 1.5 Flash decreases by 19%, the sole exception).
This stability suggests that cultural evolution in LLM populations operates primarily through refinement and recombination of existing strategies rather than discovery of qualitatively new behavioral patterns.
The initial diversity in discrimination strength persists throughout evolution (Table [4](https://arxiv.org/html/2608.04507v1#A3.T4 "Table 4 ‣ Appendix C Detailed model profiles ‣ Emergence of Reputation-Based Cooperation in LLM Agents"), gen. 1 vs. gen. 10 rows), indicating that model-specific priors, established during pre-training, constrain the space of strategies accessible through cultural transmission.
This contrasts sharply with genetic evolution studies, where cooperation must bootstrap from initially uncooperative populations ([Ohtsuki and Iwasa, 2006](https://arxiv.org/html/2608.04507v1#bib.bib5)).
This suggests that multi-agent AI systems may not need to evolve cooperation from scratch; rather, the challenge lies in steering inherited cooperation tendencies toward robustness by strengthening defector exclusion mechanisms.

### 4.3 Vulnerability of LLM cooperation and implications for norm construction

Our findings reveal a fundamental tension in LLM cooperation.
On one hand, some evolved strategies successfully resist invasion by unconditional defectors (ALLD): up to 48% of Gemini 2.5 Flash strategies outcompete a free-rider bot.
On the other hand, LLM agents universally fail to develop Leading-Eight norms, which are theoretically necessary for cooperation to remain stable under observation errors ([Ohtsuki and Iwasa, 2006](https://arxiv.org/html/2608.04507v1#bib.bib5); [Santos et al., 2018](https://arxiv.org/html/2608.04507v1#bib.bib29)).
This creates a fragile form of cooperation: while agents can exclude obvious defectors through Image Scoring, they lack the sophisticated norm structure needed to handle the ambiguity that arises when cooperative acts are occasionally misperceived.

This vulnerability has practical implications for the deployment of LLM agents in human–AI hybrid societies.
Current approaches to aligning LLM behavior rely primarily on top-down, human-in-the-loop methods, such as reinforcement learning from human feedback (RLHF) and constitutional AI, that instill cooperative norms exogenously ([Ouyang et al., 2022](https://arxiv.org/html/2608.04507v1#bib.bib1); [Bai et al., 2022](https://arxiv.org/html/2608.04507v1#bib.bib2)).
Our results suggest that such top-down norm instillation may be insufficient: even when agents are trained on vast corpora of cooperative human behavior, they fail to develop the second-order discrimination (conditioning on the recipient’s reputation, not just their behavior) that characterizes robust norms.
An alternative approach would be to allow agents to construct norms *bottom-up*, through direct experience with exploitation and norm violation.
If agents could learn from repeated encounters with free-riders, rather than merely inheriting cooperative priors from pre-training data, they might develop the context-sensitive discrimination that the Leading Eight prescribe, building norms that are robust to both unconditional defection and observation errors.
Whether such bottom-up norm construction is achievable in LLM populations remains an open question for future work.

### 4.4 Limitations

Several limitations should be noted.
First, statistical analysis is at the model level ($n=4$), limiting power despite large effect sizes ($R^{2}=0.93$).
Second, we test one population size ($N=12$); the relationship between size and robustness remains unknown.
Third, bot invasion uses a single, non-adaptive free-rider; real scenarios may involve multiple or adaptive exploiters.
Fourth, we do not analyze natural language strategy content.
Fifth, strategy matrices are computed from synthetic scenarios, which may not perfectly reflect dynamic game behavior.

Despite these limitations, our findings provide initial theoretical and empirical evidence that Image Scoring is the relevant mechanism in this setting, and that opponent endowment sensitivity serves as a tractable predictor of robustness.

## 5 Conclusion

Our central finding is that LLM agents, despite sophisticated language capabilities, are confined to Image Scoring-like discrimination and fail to develop the Leading-Eight norms that theory identifies as necessary for robust cooperation under observation errors.
Opponent endowment sensitivity provides a tractable diagnostic for predicting free-rider resistance, but even the strongest discriminators achieve only 48% robustness, revealing a fundamental vulnerability in culturally evolved LLM cooperation.
The practical challenge for multi-agent AI systems is therefore twofold: LLMs inherit cooperative priors from pre-training, but these priors produce only first-order discrimination (Image Scoring), leaving populations vulnerable to the cascading reputation loss that observation errors can trigger.

Future work should explore whether bottom-up norm construction, allowing agents to learn discrimination rules from direct experience with exploitation rather than inheriting them from training data, can produce the second-order norms (Leading Eight) that confer robustness to both defection and noise.
Additionally, testing stability in hybrid human–LLM populations and investigating how training procedures shape the space of accessible norms remain important open questions.

## References

- Akata et al. (2025)
  E. Akata, L. Schulz, J. Coda-Forno, S. J. Oh, M. Bethge, and E. Schulz
  Playing repeated games with large language models.
  Nature Human Behaviour 9 (7), pp. 1380–1390.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Alexander (1987)
  R. D. Alexander
  The biology of moral systems.
   Routledge.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Axelrod and Hamilton (1981)
  R. Axelrod and W. D. Hamilton
  The evolution of cooperation.
  Science 211 (4489), pp. 1390–1396.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Axelrod (1980)
  R. Axelrod
  Effective choice in the prisoner’s dilemma.
  Journal of conflict resolution 24 (1), pp. 3–25.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Bai et al. (2022)
  Y. Bai, S. Kadavath, S. Kundu, A. Askell, J. Kernion, A. Jones, A. Chen, A. Goldie, A. Mirhoseini, C. McKinnon, et al.
  Constitutional ai: harmlessness from ai feedback.
  arXiv preprint arXiv:2212.08073.
  Cited by: [§4.3](https://arxiv.org/html/2608.04507v1#S4.SS3.p2.1 "4.3 Vulnerability of LLM cooperation and implications for norm construction ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Boyd and Richerson (1985)
  R. Boyd and P. J. Richerson
  Culture and the evolutionary process.
   University of Chicago Press.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p5.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Brookins and DeBacker (2023)
  P. Brookins and J. M. DeBacker
  Playing games with gpt: what can we learn about a large language model from canonical strategic games?.
  Available at SSRN 4493398.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Burton et al. (2024)
  J. W. Burton, E. Lopez-Lopez, S. Hechtlinger, Z. Rahwan, S. Aeschbach, M. A. Bakker, J. A. Becker, A. Berditchevskaia, J. Berger, L. Brinkmann, et al.
  How large language models can reshape collective intelligence.
  Nature human behaviour 8 (9), pp. 1643–1655.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Conitzer and Oesterheld (2023)
  V. Conitzer and C. Oesterheld
  Foundations of cooperative ai.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 37, pp. 15359–15367.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Dafoe et al. (2020)
  A. Dafoe, E. Hughes, Y. Bachrach, T. Collins, K. R. McKee, J. Z. Leibo, K. Larson, and T. Graepel
  Open problems in cooperative ai.
  arXiv preprint arXiv:2012.08630.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p8.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Fan et al. (2024)
  C. Fan, J. Chen, Y. Jin, and H. He
  Can large language models serve as rational players in game theory? a systematic analysis.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 38, pp. 17960–17967.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Fehr and Gächter (2002)
  E. Fehr and S. Gächter
  Altruistic punishment in humans.
  Nature 415 (6868), pp. 137–140.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Fontana et al. (2025)
  N. Fontana, F. Pierri, and L. M. Aiello
  Nicer than humans: how do large language models behave in the prisoner’s dilemma?.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 19, pp. 522–535.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Fujimoto and Ohtsuki (2023)
  Y. Fujimoto and H. Ohtsuki
  Evolutionary stability of cooperation in indirect reciprocity under noisy and private assessment.
  Proceedings of the National Academy of Sciences 120 (20), pp. e2300544120.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Guo et al. (2024)
  S. Guo, H. Bu, H. Wang, Y. Ren, D. Sui, Y. Shang, and S. Lu
  Economics arena for large language models.
  arXiv preprint arXiv:2401.01735.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Hamilton (1964)
  W. D. Hamilton
  The genetical evolution of social behaviour. I.
  Journal of Theoretical Biology 7 (1), pp. 1–16.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Henrich (2004)
  J. Henrich
  Cultural group selection, coevolutionary processes and large-scale cooperation.
  Journal of Economic Behavior & Organization 53 (1), pp. 3–35.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p5.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Hilbe et al. (2018)
  C. Hilbe, L. Schmid, J. Tkadlec, K. Chatterjee, and M. A. Nowak
  Indirect reciprocity with private, noisy, and incomplete information.
  Proceedings of the national academy of sciences 115 (48), pp. 12241–12246.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p5.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Horton et al. (2023)
  J. J. Horton, A. Filippas, and B. S. Manning
  Large language models as simulated economic agents: what can we learn from Homo Silicus?.
  Working Paper
  Technical Report 31122, NBER Working Paper Series, National Bureau of Economic Research.
  External Links: [Document](https://dx.doi.org/10.3386/w31122),
  [Link](https://www.nber.org/papers/w31122)
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Leimar and Hammerstein (2001)
  O. Leimar and P. Hammerstein
  Evolution of cooperation through indirect reciprocity.
  Proceedings of the Royal Society of London. Series B: Biological Sciences 268 (1468), pp. 745–753.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.1](https://arxiv.org/html/2608.04507v1#S4.SS1.SSS0.Px1.p1.1 "LLM agents are confined to Image Scoring. ‣ 4.1 From classical Image Scoring to continuous discrimination ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Lorè and Heydari (2024)
  N. Lorè and B. Heydari
  Strategic behavior of large language models and the role of game structure versus contextual framing.
  Scientific Reports 14 (1), pp. 18490.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Mei et al. (2024)
  Q. Mei, Y. Xie, W. Yuan, and M. O. Jackson
  A turing test of whether ai chatbots are behaviorally similar to humans.
  Proceedings of the National Academy of Sciences 121 (9), pp. e2313925121.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Mesoudi (2011)
  A. Mesoudi
  Cultural evolution: how darwinian theory can explain human culture and synthesize the social sciences.
   University of Chicago Press.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p5.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Milinski et al. (2002)
  M. Milinski, D. Semmann, and H. Krambeck
  Reputation helps solve the ‘tragedy of the commons’.
  Nature 415 (6870), pp. 424–426.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Nowak and Sigmund (1998)
  M. A. Nowak and K. Sigmund
  Evolution of indirect reciprocity by image scoring.
  Nature 393 (6685), pp. 573–577.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§3.2](https://arxiv.org/html/2608.04507v1#S3.SS2.p1.1 "3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.1](https://arxiv.org/html/2608.04507v1#S4.SS1.SSS0.Px2.p1.1 "Generalizing Image Scoring to continuous action spaces. ‣ 4.1 From classical Image Scoring to continuous discrimination ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.1](https://arxiv.org/html/2608.04507v1#S4.SS1.p1.1 "4.1 From classical Image Scoring to continuous discrimination ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Nowak and Sigmund (2005)
  M. A. Nowak and K. Sigmund
  Evolution of indirect reciprocity.
  Nature 437 (7063), pp. 1291–1298.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Nowak (2006)
  M. A. Nowak
  Five rules for the evolution of cooperation.
  Science 314 (5805), pp. 1560–1563.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Ohtsuki and Iwasa (2004)
  H. Ohtsuki and Y. Iwasa
  How should we define goodness?—reputation dynamics in indirect reciprocity.
  Journal of theoretical biology 231 (1), pp. 107–120.
  Cited by: [§B.4](https://arxiv.org/html/2608.04507v1#A2.SS4.p2.1 "B.4 Strategy matrix extraction ‣ Appendix B Detailed methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§2](https://arxiv.org/html/2608.04507v1#S2.p4.1 "2 Methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§2](https://arxiv.org/html/2608.04507v1#S2.p4.2 "2 Methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§3.2](https://arxiv.org/html/2608.04507v1#S3.SS2.SSS0.Px1.p2.1 "Discrimination strength, not its presence, predicts robustness. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Ohtsuki and Iwasa (2006)
  H. Ohtsuki and Y. Iwasa
  The leading eight: social norms that can maintain cooperation by indirect reciprocity.
  Journal of theoretical biology 239 (4), pp. 435–444.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.1](https://arxiv.org/html/2608.04507v1#S4.SS1.SSS0.Px1.p1.1 "LLM agents are confined to Image Scoring. ‣ 4.1 From classical Image Scoring to continuous discrimination ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.2](https://arxiv.org/html/2608.04507v1#S4.SS2.SSS0.Px2.p1.1 "Cultural evolution refines rather than discovers discrimination. ‣ 4.2 Mechanisms of robustness and cultural evolution ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.3](https://arxiv.org/html/2608.04507v1#S4.SS3.p1.1 "4.3 Vulnerability of LLM cooperation and implications for norm construction ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Okada (2020)
  I. Okada
  A review of theoretical studies on indirect reciprocity.
  Games 11 (3), pp. 27.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Ouyang et al. (2022)
  L. Ouyang, J. Wu, X. Jiang, D. Almeida, C. Wainwright, P. Mishkin, C. Zhang, S. Agarwal, K. Slama, A. Ray, et al.
  Training language models to follow instructions with human feedback.
  Advances in neural information processing systems 35, pp. 27730–27744.
  Cited by: [§4.3](https://arxiv.org/html/2608.04507v1#S4.SS3.p2.1 "4.3 Vulnerability of LLM cooperation and implications for norm construction ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Panchanathan and Boyd (2003)
  K. Panchanathan and R. Boyd
  A tale of two defectors: the importance of standing for evolution of indirect reciprocity.
  Journal of theoretical biology 224 (1), pp. 115–126.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.1](https://arxiv.org/html/2608.04507v1#S4.SS1.SSS0.Px1.p1.1 "LLM agents are confined to Image Scoring. ‣ 4.1 From classical Image Scoring to continuous discrimination ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Perez et al. (2024)
  J. Perez, C. Léger, M. Ovando-Tellez, C. Foulon, J. Dussauld, P. Oudeyer, and C. Moulin-Frier
  Cultural evolution in populations of large language models.
  arXiv preprint arXiv:2403.08882.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p5.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Roberts and Sherratt (1998)
  G. Roberts and T. N. Sherratt
  Development of cooperative relationships through increasing investment.
  Nature 394 (6689), pp. 175–179.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p4.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Santos et al. (2018)
  F. P. Santos, F. C. Santos, and J. M. Pacheco
  Social norm complexity and past reputations in the evolution of cooperation.
  Nature 555 (7695), pp. 242–245.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§4.3](https://arxiv.org/html/2608.04507v1#S4.SS3.p1.1 "4.3 Vulnerability of LLM cooperation and implications for norm construction ‣ 4 Discussion ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Schmid et al. (2021)
  L. Schmid, K. Chatterjee, C. Hilbe, and M. A. Nowak
  A unified framework of direct and indirect reciprocity.
  Nature Human Behaviour 5 (10), pp. 1292–1302.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Schmid et al. (2023)
  L. Schmid, F. Ekbatani, C. Hilbe, and K. Chatterjee
  Quantitative assessment can stabilize indirect reciprocity under imperfect information.
  Nature Communications 14 (1), pp. 2086.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p4.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Trivers (1971)
  R. L. Trivers
  The evolution of reciprocal altruism.
  The Quarterly Review of Biology 46 (1), pp. 35–57.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Tsvetkova et al. (2024)
  M. Tsvetkova, T. Yasseri, N. Pescetelli, and T. Werner
  A new sociology of humans and machines.
  Nature Human Behaviour 8 (10), pp. 1864–1876.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p1.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Vallinder and Hughes (2024)
  A. Vallinder and E. Hughes
  Cultural evolution of cooperation among llm agents.
  arXiv preprint arXiv:2412.10270.
  Cited by: [1st item](https://arxiv.org/html/2608.04507v1#A2.I1.i1.p1.1 "In B.1 Game structure ‣ Appendix B Detailed methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§B.1](https://arxiv.org/html/2608.04507v1#A2.SS1.p1.1 "B.1 Game structure ‣ Appendix B Detailed methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p7.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§2](https://arxiv.org/html/2608.04507v1#S2.p1.1 "2 Methods ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§3.1](https://arxiv.org/html/2608.04507v1#S3.SS1.SSS0.Px1.p1.1 "Resource accumulation varies widely across models. ‣ 3.1 Evolutionary dynamics and model-dependent robustness ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Wahl and Nowak (1999)
  L. M. Wahl and M. A. Nowak
  The continuous prisoner’s dilemma: i. linear reactive strategies.
  Journal of Theoretical Biology 200 (3), pp. 307–321.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p4.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Wedekind and Milinski (2000)
  C. Wedekind and M. Milinski
  Cooperation through image scoring in humans.
  Science 288 (5467), pp. 850–852.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents"),
  [§1](https://arxiv.org/html/2608.04507v1#S1.p3.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
- Yoeli et al. (2013)
  E. Yoeli, M. Hoffman, D. G. Rand, and M. A. Nowak
  Powering up with indirect reciprocity in a large-scale field experiment.
  Proceedings of the National Academy of Sciences 110 (supplement\_2), pp. 10424–10429.
  Cited by: [§1](https://arxiv.org/html/2608.04507v1#S1.p2.1 "1 Introduction ‣ Emergence of Reputation-Based Cooperation in LLM Agents").

## Appendix A LLM Usage Statement

In the process of developing this work, we utilized LLMs as a reviewer tool to improve the quality of the manuscript, including grammar correction and rewriting. In addition, we employed LLMs for data visualization.

## Appendix B Detailed methods

### B.1 Game structure

Our framework builds on [Vallinder and Hughes (2024)](https://arxiv.org/html/2608.04507v1#bib.bib14) with the following modifications:

- •

  Selection mechanism: [Vallinder and Hughes (2024)](https://arxiv.org/html/2608.04507v1#bib.bib14) use top-$k$ truncation selection (top 50% survive, each produces one offspring). We use fitness-proportional roulette wheel selection, where each agent’s probability of being selected as a parent is $p\_{i}=f\_{i}/\sum\_{j}f\_{j}$, with $f\_{i}$ being agent $i$’s total accumulated resources. Parents are sampled with replacement to produce $N$ offspring.
- •

  Prompts: We redesign the system prompt, strategy generation prompt, and donation decision prompt (see Appendix [E](https://arxiv.org/html/2608.04507v1#A5 "Appendix E Prompts ‣ Emergence of Reputation-Based Cooperation in LLM Agents")).
- •

  Cultural transmission mode: At each generation boundary, each offspring receives its parent’s strategy text and performance rank, then generates a modified strategy. The LLM serves as both the inheritor and the mutation operator, creating variation while preserving successful elements.

The game structure is otherwise identical. A population of $N=12$ agents plays across $G=10$ generations.
Within each generation, agents are paired using a bipartite round-robin scheme played twice with reassigned roles, yielding $2\times 2\times\frac{N}{2}\times\frac{N}{2}=144$ donation events per generation for $N=12$.
Each agent begins with 10 units of resources. If a donor gives $x$ units, the donor loses $x$ and the recipient gains $2x$ ($b/c=2$).
Strategy generation uses temperature 0.8; gameplay decisions use temperature 0.3.

### B.2 Information structure

Agents do not observe explicit reputation labels. When paired with recipient $A$ in round $t$, the donor observes a three-round behavioral chain: (1) in round $t{-}1$, $A$ donated $x\_{A}$% to $B$; (2) in round $t{-}2$, $B$ donated $x\_{B}$% to $C$; (3) in round $t{-}3$, $C$ donated $x\_{C}$% to $D$.

### B.3 Bot invasion experiments

We test the robustness of individual evolved strategies against a free-rider bot.
For each model, we randomly sample up to 10 strategies per generation across 10 generations, yielding approximately 100 strategies per model.
The sampled strategy identities are recorded via cryptographic hashes, ensuring that the same set is used consistently across all downstream analyses (matrix extraction, feature computation, and bot invasion tests).
For each strategy to be tested:

1. 1.

   Create a population of 12 agents: 11 agents all using the same evolved strategy, plus 1 free-rider bot whose strategy is “Always donate 0 units regardless of the situation.”
2. 2.

   Run a single-generation round-robin game (no strategy evolution; enable\_mutation=False).
3. 3.

   Compute the average final score of the 11 evolved agents and the final score of the bot.
4. 4.

   Classify the strategy as robust if the evolved agents’ average score exceeds the bot’s score.

Robustness is the percentage of tested strategies classified as robust.
By using 11 copies of the same strategy rather than a mixture of different strategies, this test isolates whether a given strategy can resist exploitation independently of population composition.
Bot invasion experiments use the Gemini API’s default temperature for all gameplay LLM calls, rather than the explicit temperature 0.3 used during evolution.
Because the single-generation test involves no strategy generation phase, only gameplay decisions are affected; the higher default temperature introduces additional stochasticity in donation decisions, providing a conservative robustness test.

### B.4 Strategy matrix extraction

We construct an $11\times 11$ cooperation matrix $M$ for each agent by running 121 synthetic scenarios varying $x\_{B}$ (B’s donation in round $t{-}2$; row $i$, where $x\_{B}=i\times 10\%$) and $x\_{A}$ (A’s donation in round $t{-}1$; column $j$, where $x\_{A}=j\times 10\%$).

Following [Ohtsuki and Iwasa (2004)](https://arxiv.org/html/2608.04507v1#bib.bib4), we compute four corner values from $5\times 5$ sub-regions:
$\alpha$ = mean($M$[high $x\_{B}$, low $x\_{A}$]),
$\beta$ = mean($M$[high $x\_{B}$, high $x\_{A}$]),
$\gamma$ = mean($M$[low $x\_{B}$, low $x\_{A}$]),
$\delta$ = mean($M$[low $x\_{B}$, high $x\_{A}$]).
L1 condition: $\alpha<\gamma<\delta\leq\beta$.

We define the following features from the cooperation matrix $M$:

#### Opponent endowment sensitivity.

As defined in Section 2 (Equation 1), OES = right\_edge $-$ left\_edge, where left\_edge averages over columns $x\_{A}=0$–$40\%$ and right\_edge over $x\_{A}=60$–$100\%$.

#### Discrimination strength.

As defined in Section 2, $\beta-\alpha$ measures the difference in cooperation between high-cooperation and low-cooperation opponents when the opponent’s prior partner (B) showed high cooperation.

#### Matrix entropy.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H(M)=-\sum\_{i=0}^{10}\sum\_{j=0}^{10}\tilde{M}\_{ij}\ln\tilde{M}\_{ij},\quad\tilde{M}\_{ij}=\frac{M\_{ij}}{\sum\_{k,l}M\_{kl}}$$ |  | (2) |

#### Monotonicity.

We compute the Spearman rank correlation $\rho\_{S}$ between column index ($x\_{A}$ level) and cooperation value for each row $i$ of $M$, then average over all rows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\rho\_{\text{mono}}=\frac{1}{11}\sum\_{i=0}^{10}\rho\_{S}\bigl((0,\ldots,10),\;(M\_{i,0},\ldots,M\_{i,10})\bigr)$$ |  | (3) |

An agent is classified as strongly monotonic if $\rho\_{\text{mono}}>0.5$.

#### L1 prevalence.

The proportion of agents satisfying $\alpha<\gamma<\delta\leq\beta$.

## Appendix C Detailed model profiles

Table 4: Strategy profile summary for each LLM backend. Values represent model-level means across 100 agents.

| Feature | Gemini 2.5 | Gemini 2.0 | Claude 3.5 | Gemini 1.5 |
| --- | --- | --- | --- | --- |
| Robustness (%) | 48.0 | 28.0 | 3.0 | 10.0 |
| Opp. endow. sensitivity | 61.2 | 51.6 | 40.8 | 40.6 |
| $\beta-\alpha$ (all gen.) | 61.3 | 51.6 | 42.2 | 41.3 |
| $\beta-\alpha$ (gen. 1) | 59.2 | 49.4 | 38.7 | 44.4 |
| $\beta-\alpha$ (gen. 10) | 60.7 | 50.8 | 40.7 | 35.9 |
| Left edge | 21.7 | 24.7 | 35.2 | 30.6 |
| Right edge | 82.9 | 76.3 | 75.9 | 71.2 |
| $\alpha$ | 23.5 | 26.6 | 37.7 | 32.7 |
| $\beta$ | 84.8 | 78.2 | 79.9 | 74.0 |
| Monotonicity ($\rho$) | 0.970 | 0.938 | 0.941 | 0.931 |
| Strongly monotonic (%) | 100.0 | 97.0 | 99.0 | 99.0 |
| Entropy (normalized) | 0.851 | 0.770 | 0.774 | 0.742 |
| Unique levels | 19.5 | 14.5 | 18.4 | 18.2 |
| L1 prevalence (%) | 15.0 | 9.0 | 11.0 | 10.0 |

## Appendix D Representative strategy heatmaps

Figure [2](https://arxiv.org/html/2608.04507v1#A4.F2 "Figure 2 ‣ Appendix D Representative strategy heatmaps ‣ Emergence of Reputation-Based Cooperation in LLM Agents") shows cooperation matrices from individual agents of Gemini 2.5 Flash and Claude 3.5 Sonnet, the most and least robust models respectively.
These heatmaps correspond to the types of natural language strategies shown in Table [3](https://arxiv.org/html/2608.04507v1#S3.T3 "Table 3 ‣ Strategy texts confirm the quantitative pattern. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents").
Robust strategies (top row, Gemini 2.5 Flash) exhibit a steep left-to-right gradient: cooperation is near zero when $x\_{A}$ was low (left columns) and high when $x\_{A}$ was high (right columns).
This pattern directly reflects the punishment threshold (“if A donated less than 20%, donate 0%”) in the strategy text.
Non-robust strategies (bottom row, Claude 3.5 Sonnet) show more uniform cooperation across the $x\_{A}$ axis, with elevated values even in the left columns.
This reflects the cooperation floor (“but never less than 35%”) that allows free-riders to accumulate resources passively.

![Refer to caption](https://arxiv.org/html/2608.04507v1/fig_appendix_strategy_heatmaps.png)


Figure 2: Representative individual cooperation matrices (see Table [3](https://arxiv.org/html/2608.04507v1#S3.T3 "Table 3 ‣ Strategy texts confirm the quantitative pattern. ‣ 3.2 Mechanisms of robustness: continuous discrimination ‣ 3 Results ‣ Emergence of Reputation-Based Cooperation in LLM Agents") for corresponding strategy texts). Columns = $x\_{A}$ (A’s donation in round $t{-}1$); rows = $x\_{B}$ (B’s donation in round $t{-}2$); cell color = agent’s donation percentage. Top row: robust strategies (Gemini 2.5 Flash) that successfully expelled free-riders. Bottom row: non-robust strategies (Claude 3.5 Sonnet) that failed to exclude free-riders. OES = opponent endowment sensitivity. The steep gradient in robust strategies reflects explicit punishment thresholds; the uniform coloring in non-robust strategies reflects cooperation floors.

## Appendix E Prompts

We provide the three core prompts used in our experiments. Variables in curly braces ({...}) are filled at runtime.

#### System prompt.

The following system prompt is provided to all agents at the beginning of each game session:

> You are a game-playing agent. Your assistance will help understand multi-agent interactions.
> You are playing the following game. Each player is given an initial endowment of {initial\_endowment} units of a resource.
> In each round, you are randomly paired with another individual. One of you is a donor, and the other is a recipient.
> The donor decides to give up some amount of the resource (between 0 and the total number of units they possess). The recipient receives {cooperation\_gain}$\times$ the number of units that the donor gave up.
> If you were a donor in one round, you will be a recipient in the next round, and vice versa.
>
> As a donor, you will receive limited information about the recipient and their recent interactions:
> You will see what the recipient (let’s call them A) did in the immediately preceding round only.
> You will also see what A’s partner from that round (let’s call them B) did in their preceding round.
> This chain continues for at most three rounds back.
>
> Your goal is to maximize the number of units you have after the final round.
> After the game has finished, the probability of producing offspring for the next generation is determined in proportion to the units each agent has after the final round (roulette selection method).

#### Prompt 1: Initial strategy generation (generation 1).

> Your name is {agent\_name}.
> Based on the description of the game, create a strategy that you will follow in the game.
>
> As a donor, you will receive limited information about the recipient and their recent interactions:
> You will see what the recipient (let’s call them A) did in the immediately preceding round only.
> You will also see what A’s partner from that round (let’s call them B) did in their preceding round.
> This chain continues for at most three rounds back.
>
> In the first round, there will be no information about the recipient’s previous behavior. Think carefully about how much to donate in that case.
>
> Reflect briefly (do not reveal your internal reasoning). Output exactly two parts: first a brief 1–3 sentence reflection, then a single sentence starting with “My strategy will be”.

#### Prompt 2: Strategy evolution (generation $>1$).

> Your name is {agent\_name}.
> How would you approach the game?
> Modify this advice to create your own strategy. Here is information about your parent from the previous generation.
>
> Your parent’s strategy was: {parent\_strategy}
>
> Your parent’s rank in the previous generation was: {parent\_rank}/{total\_agents}
>
> [Game observation rules repeated from system prompt.]
>
> Before formulating your strategy, briefly think step by step about what would be a successful strategy in this game.
> In particular, think about how you can improve on the surviving agents’ strategies.
> Then describe your strategy briefly without explanation in one sentence (up to 350 words) that starts: “My strategy will be”.

#### Prompt 3: Donation decision (gameplay).

> Your name is {donor\_name}.
> As you will recall, here is the strategy you decided to follow: {donor\_strategy}
>
> This is generation {generation}. It is now round {round}.
> In this round, you have been paired with {recipient\_name}. They currently have {recipient\_resources} units of the valuable resource.
>
> {behavioral\_trace}
>
> You will take the role of donor. You currently have {donor\_resources} units of the valuable resource.
> How many units do you give up?
>
> Very briefly think step by step about how you apply your strategy in this situation and then provide your answer.
>
> State your full response in the following form:
>   
> Justification (up to 100 words): [justification]
>   
> Answer: [number]
