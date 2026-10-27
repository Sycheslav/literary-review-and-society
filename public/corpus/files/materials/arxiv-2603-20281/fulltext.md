---
id: arxiv-2603-20281-text
type: material
title: On the Fragility of AI Agent Collusion
work_id: arxiv-2603-20281
source_url: https://arxiv.org/html/2603.20281v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: fa640c6442699f49e100b407b14e8f039ed70ba00209a81da0dfd11b606dbb82
---

> Источник: [https://arxiv.org/html/2603.20281v1](https://arxiv.org/html/2603.20281v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# On the Fragility of AI Agent Collusion

First version: September 25, 2025

Jussi Keppo
  
Yuze Li
  
Gerry Tsoukalas
  
Nuo Yuan
†

January 30, 2026

###### Abstract

Recent work shows that pricing with symmetric LLM agents leads to algorithmic collusion. We show that collusion is fragile under the heterogeneity typical of real deployments. In a stylized repeated-pricing model, heterogeneity in patience or data access reduces the set of collusive equilibria. Experiments with open-source LLM agents (totaling over 2,000 compute hours) align with these predictions: patience heterogeneity reduces price lift from 22% to 10% above competitive levels; asymmetric data access, to 7%. Increasing the number of competing LLMs breaks up collusion; so does cross-algorithm heterogeneity, that is, setting LLMs against Q-learning agents. But model-size differences (e.g., 32B vs. 14B weights) do not; they generate leader-follower dynamics that stabilize collusion. We discuss antitrust implications, such as enforcement actions restricting data-sharing and policies promoting algorithmic diversity.

Keywords: Algorithmic Pricing, Algorithmic Collusion, Antitrust, Artificial Intelligence (AI), AI Governance, Large Language Models.

## 1 Introduction

Firms are increasingly delegating pricing decisions to algorithms, making algorithmic collusion a central concern for antitrust authorities ([Gans 2023](https://arxiv.org/html/2603.20281v1#bib.bib30)). Large language models (LLMs) push this trend further by enabling agents that interpret context and revise strategy autonomously. For example, Anthropic’s Project Vend gave Claude price-setting authority in a small but real-world retail setting ([Anthropic 2025](https://arxiv.org/html/2603.20281v1#bib.bib5)). On a larger scale, Delta Airlines announced that it is using generative AI to determine a portion of its domestic ticket prices ([McCarthy 2025](https://arxiv.org/html/2603.20281v1#bib.bib44)). Against this backdrop, a senior U.S. Department of Justice official recently warned this trend could lead to “fully automated cartels operating without any human involvement” ([Kavanagh and Magloughlin 2025](https://arxiv.org/html/2603.20281v1#bib.bib40)).

A growing literature shows that autonomous pricing algorithms can sustain tacit collusion without explicit communication ([Calvano et al. 2020](https://arxiv.org/html/2603.20281v1#bib.bib19), [Klein 2021](https://arxiv.org/html/2603.20281v1#bib.bib41), [Banchio and Mantegazza 2022](https://arxiv.org/html/2603.20281v1#bib.bib11)). More recently, [Fish et al. (2025)](https://arxiv.org/html/2603.20281v1#bib.bib26) show that LLM-based agents also collude, may converge faster than reinforcement learning (RL) approaches, and do so robustly across prompt variations. Yet existing studies typically assume identical or near-identical agents competing in highly stylized markets. Real deployments are messier: firms adopt models that have different capabilities, different algorithms, proprietary prompts, varying update frequencies, and asymmetric information sets ([Huang and Zhu 2023](https://arxiv.org/html/2603.20281v1#bib.bib37)). This raises a central question for competition policy: *does LLM-mediated algorithmic collusion survive the heterogeneity typical of real-world deployments, and if variation disrupts collusion, which dimensions matter most?* This paper provides systematic evidence.

Research Methodology: Answering this question with field data is currently challenging; LLM pricing deployments are too recent to generate public observations at scale. We therefore adopt a two-pronged approach that leverages economic theory on one hand and laboratory experiments in the spirit of [Fish et al. (2025)](https://arxiv.org/html/2603.20281v1#bib.bib26) on the other. The two play complementary roles. Experiments allow us to manipulate dimensions of heterogeneity independently—something observational data, even if available, would rarely permit. But the space of possible variation is large (models differ, prompts differ, information sets differ, etc.). Experimentation without theoretical grounding risks being ad hoc. Theory helps guide our empirical design by identifying which dimensions have equilibrium consequences.

Model: The folk theorem establishes that tacit collusion is sustainable if and only if players are sufficiently patient, making the discount factor a central primitive ([Fudenberg and Maskin 1986](https://arxiv.org/html/2603.20281v1#bib.bib28)). [Abreu et al. (1986)](https://arxiv.org/html/2603.20281v1#bib.bib2), [Abreu et al. (1990)](https://arxiv.org/html/2603.20281v1#bib.bib3) extend this logic to environments with imperfect monitoring, showing that the ability to detect and punish deviations depends critically on the information available to players. These two primitives—patience and information—anchor our initial analysis. We develop a simple infinite-horizon pricing model that allows both to vary across agents. The model yields two comparative statics predictions. First, heterogeneity in patience undermines collusion: when discount factors differ, the impatient agent faces stronger deviation incentives, making coordination on supra-competitive prices harder to sustain. Second, asymmetric access to market data raises the patience threshold required for collusion, because the informationally disadvantaged agent cannot reliably detect deviations and therefore cannot credibly threaten punishment. The model is intentionally stylized; its contribution is not standalone theory but a principled framework linking heterogeneity dimensions to testable predictions. Our approach follows the methodology of behavioral game theory ([Camerer 2003](https://arxiv.org/html/2603.20281v1#bib.bib20))—using equilibrium predictions as benchmarks for evaluating actual behavior without claiming agents compute equilibria explicitly.

Experimental Design: Our experimental design deliberately relaxes the model’s stylized assumptions to stress test whether its theoretical predictions survive harsher, more realistic deployment frictions. Agents in real deployments lack direct knowledge of demand primitives, cost structures, and equilibrium concepts. On the other hand, LLMs are trained on corpora that include textbook treatments of competition and oligopoly, knowledge they may draw on without explicit instruction. We implement a repeated Bertrand game using agents based on DeepSeek-R1, an open-source reasoning model whose weights and architecture are publicly available. Open-source selection is not incidental: it ensures full replicability and addresses concerns that results might depend on proprietary, unverifiable model internals. Each period, agents observe their own price, realized demand, and profit, but not the demand function or structural primitives. Patience is implemented via the objective specified in each agent’s prompt: agents maximize profits over varying time horizons. Information asymmetry is implemented by varying access to competitors’ historical prices. The design tests whether prompt-specified configurations translate into behavior consistent with theory, and whether heterogeneity across these dimensions disrupts coordination.

A natural question is whether our experiments identify the cognitive mechanism by which LLM agents collude. They do not. By design. LLMs are black boxes: even frontier diagnostic methods (such as mechanistic interpretability [Bricken et al. 2023](https://arxiv.org/html/2603.20281v1#bib.bib15), [Narad et al. 2025](https://arxiv.org/html/2603.20281v1#bib.bib48)) cannot fully characterize how these models map inputs to outputs, and firms deploying such systems have no more insight into their workings than researchers do. We can (and do) examine agents’ chain-of-thought outputs for suggestive patterns, but these are not mechanistic explanations. This limitation, however, does not erase the paper’s contribution. From an antitrust and welfare perspective, what harms consumers is elevated prices, not the cognitive process producing them. The same epistemological constraint applies to human collusion: we cannot verify whether executives coordinate through game-theoretic reasoning or heuristics acquired through experience, yet tacit collusion enforcement proceeds by targeting conduct, not cognition. Outcome measurement—whether collusive pricing emerges and persists—is the policy-relevant quantity and, given LLM opacity, the only currently feasible diagnostic. Our experiments are designed accordingly.

We assess collusive outcomes using two criteria: price convergence (whether agents coordinate on stable pricing) and price elevation relative to the static Nash benchmark (the welfare-relevant measure of market power). This dual criterion distinguishes genuine collusion from competitive convergence.

Results: Sanity checks. Before testing heterogeneity effects, we verify that our LLM agents respond to prompt-specified objectives in ways consistent with standard theory; absent this, observed price dynamics could reflect instruction-following failures rather than strategic responses to the environment. We confirm that agents recover the one-shot monopoly optimum and the static Bertrand–Nash equilibrium with high precision (within 5% of theoretical benchmarks). In repeated settings, patient agents converge to supra-competitive pricing while myopic agents price competitively, with outcomes varying monotonically in the specified discount factor. These homogeneous extremes (two patient vs. two myopic) serve a dual role: they validate that the prompt-specified horizon shifts behavior in the expected direction, and they provide the baseline against which we measure how heterogeneity attenuates collusion.

Having established that prompt-specified objectives translate into theoretically coherent behavior, we test whether agent responses track the model’s comparative-statics predictions, then extend the analysis to heterogeneity dimensions that lack clear theoretical analogues: cross-algorithm heterogeneity and model size. We also examine the implications of increasing the number of competing LLMs. A summary of these results can be found in Table [1](https://arxiv.org/html/2603.20281v1#S1.T1 "Table 1 ‣ 1 Introduction ‣ On the Fragility of AI Agent Collusion").

Table 1: Results at a Glance: Collusion Outcomes under Agent Heterogeneity.

|  |  |  |
| --- | --- | --- |
| Experiments | Collusion strength | Price elevation |
|  | (Low/Med./High) | (% vs. competitive) |
| Homogeneous Benchmarks | | |
| Two myopic LLMs (no collusion emerges) | Low | $\approx 0\%$ |
| Two patient LLMs (tacit collusion emerges) | High | +22% |
| Main Heterogeneity dimensions (predicted by model) | | |
| 1 patient LLM agent vs. 1 myopic LLM agent | Medium | +10% |
| 1 high-data LLM agent vs. 1 low-data LLM agent | Medium | +7% |
| Additional heterogeneity dimensions | | |
| 1 patient LLM agent vs. 1 Q-learning agent (frozen) | Low | +2% |
| 1 patient LLM agent vs. 1 Q-learning agent (adaptive) | Low | +8% |
| 3 patient LLM agents | High | +36% |
| 4 patient LLM agents | Medium | +11% |
| 5 patient LLM agents | Low | +3% |
| 1 patient 32B LLM agent vs. 1 patient 14B-LLM agent | High | +21% |

Testing model predictions. Both theoretical predictions find support. Patience heterogeneity reduces collusive outcomes: when two patient agents interact, they converge to prices approximately 22% above the static Nash equilibrium, with pricing rationales that explicitly emphasize avoiding destructive price wars. Setting a patient agent against a myopic one produces meaningfully weaker price elevation, with prices only about 10% above competitive levels. Fully myopic pairs converge essentially to the competitive outcome. Chain-of-thought inspection indicates that the myopic agent’s inability to credibly commit to future punishment weakens the patient agent’s incentive to maintain cooperation. Information asymmetry also undermines cooperation: relative to the homogeneous-information benchmark, heterogeneous data access reduces the deviation from the competitive benchmark from 22% down to 7%, consistent with the model’s prediction that information asymmetry makes tacit coordination more difficult.

Other Sources of Heterogeneity. Cross-algorithm heterogeneity disrupts collusion entirely: setting Q-learning agents against LLM agents prevents sustained coordination. Across runs, they do not reach sustained collusion within 1,000 periods and instead remain near competitive pricing. The algorithms operate on incompatible signal spaces: Q-learning agents cannot interpret the cooperative pricing patterns that LLM agents attempt to establish, generating instability that drives both agents toward competitive pricing.

Increasing the number of competing agents gradually, from two to five, delays collusion onset and weakens its robustness. With three agents competing, sustained collusion remains feasible and can lead to even higher prices, but coordination/convergence becomes meaningfully slower. With four, prices drop, collusion is further slowed and becomes less stable. With five sellers, sustained collusion fails to emerge within the experimental horizon. These patterns largely align with classical oligopoly theory.

Perhaps most surprisingly, model-scale heterogeneity does not impede collusion. When pairing larger (32B) and smaller (14B) LLM agents (both patient), final price elevation remains close to the homogeneous benchmark, though convergence is substantially slower. Novel dynamics emerge: the larger model assumes a leadership role and anchors the collusive price, while the smaller model adopts a follower position, suggesting that capability asymmetry can facilitate coordination by establishing clear roles.

Finally, additional robustness tests with a closed-source model (GPT-5-mini) serve two purposes: confirming that our main qualitative findings extend to a more capable model, and examining whether LLM agents exhibit sensitivity to explicit collusion-avoidance prompting—a dimension unique to language-model-based agents. Both hold.

Policy Implications: These findings speak to active policy debates that we discuss in detail in Section [7](https://arxiv.org/html/2603.20281v1#S7 "7 Discussion and Policy Implications ‣ On the Fragility of AI Agent Collusion"). We provide a brief preview here.

Our patience-heterogeneity results reveal a mechanism distinct from [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19), who find collusion diminishes when all agents share a lower discount factor: our findings suggest diversity in strategic horizons itself disrupts coordination. Among other implications, this suggests merger reviews should consider whether transactions homogenize pricing objectives (e.g, capital discount rates), not just algorithms ([Gal and Rubinfeld 2024](https://arxiv.org/html/2603.20281v1#bib.bib29)).

Our data-access results provide experimental support for the theory underlying the DOJ’s RealPage case ([Antitrust Division, Department of Justice 2026](https://arxiv.org/html/2603.20281v1#bib.bib6)), which targeted information-sharing as a mechanism enabling coordination.

[Assad et al. (2024)](https://arxiv.org/html/2603.20281v1#bib.bib8) find that algorithmic pricing increases margins only when all local competitors adopt, suggesting homogeneity may be necessary for coordination. Our cross-algorithm heterogeneity findings offer a mechanism: pairing incompatible algorithmic architectures disrupts coordination entirely, as agents cannot parse each other’s signaling strategies. Maintaining ecosystem diversity may therefore complement the platform-level interventions studied by [Johnson et al. (2023)](https://arxiv.org/html/2603.20281v1#bib.bib39).

Our market-structure results confirm that classical intuitions about competitor count ([Stigler 1964](https://arxiv.org/html/2603.20281v1#bib.bib54)) extend to LLM agents.

Finally, our capability-asymmetry result offers a cautionary note consistent with [Athey and Bagwell (2001)](https://arxiv.org/html/2603.20281v1#bib.bib9): policymakers should not assume that heterogeneous AI capabilities always disrupt coordination; these differences can instead stabilize collusion through leader-follower dynamics.

### Related Literature

The two closest papers are [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19) and [Fish et al. (2025)](https://arxiv.org/html/2603.20281v1#bib.bib26). [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19) show that homogeneous Q-learning agents can learn tacitly collusive pricing, and they document robustness to standard changes in the environment, including cost and demand asymmetries, stochastic demand, and changes in the number of firms. [Fish et al. (2025)](https://arxiv.org/html/2603.20281v1#bib.bib26) show the corresponding result for LLM pricing agents. They compare prompt variants and show that while wording can affect the level of price elevation, supracompetitive outcomes persist; they also report robustness to demand-side asymmetry (unequal product qualities) and stochastic demand.

Our contribution is different. Even if collusion is relatively robust to prompt wording, real deployments differ along other dimensions, and these differences need not be benign. We therefore purposely hold fixed the baseline prompt structure and ask whether tacit collusion survives cross-firm and cross-algorithm differences. We find that several of these heterogeneities suffice to materially weaken or break sustained price elevation even without introducing additional prompt variability.

More broadly, our work connects three literatures: algorithmic collusion, firm heterogeneity, and platform governance.

On algorithmic collusion, a broader literature confirms that reinforcement learning agents generate supra-competitive outcomes ([Klein 2021](https://arxiv.org/html/2603.20281v1#bib.bib41), [Hansen et al. 2021](https://arxiv.org/html/2603.20281v1#bib.bib35), [Brown and MacKay 2025](https://arxiv.org/html/2603.20281v1#bib.bib17), [Musolff 2025](https://arxiv.org/html/2603.20281v1#bib.bib47)), with mechanisms including spontaneous coupling ([Banchio and Mantegazza 2022](https://arxiv.org/html/2603.20281v1#bib.bib11)).1 However, this literature also reveals sensitivity to implementation details: even minor differences such as exploration rules can shift outcomes ([Asker et al. 2022](https://arxiv.org/html/2603.20281v1#bib.bib7), [Abada and Lambin 2023](https://arxiv.org/html/2603.20281v1#bib.bib1), [Wang et al. 2023](https://arxiv.org/html/2603.20281v1#bib.bib56)). This sensitivity motivates our focus on heterogeneity. Meanwhile, classical reinforcement learning faces scalability constraints ([Deng 2024](https://arxiv.org/html/2603.20281v1#bib.bib23), [den Boer et al. 2024](https://arxiv.org/html/2603.20281v1#bib.bib22)), driving practical interest toward LLMs, which adapt without retraining ([Miller et al. 2024](https://arxiv.org/html/2603.20281v1#bib.bib45), [Tambe 2025](https://arxiv.org/html/2603.20281v1#bib.bib55), [Shetty et al. 2025](https://arxiv.org/html/2603.20281v1#bib.bib53)). The real-world deployments discussed above (Project Vend, Delta Airlines) exemplify this shift.

On firm heterogeneity, the classical literature offers competing predictions. More competitors increase deviation incentives ([Stigler 1964](https://arxiv.org/html/2603.20281v1#bib.bib54), [Green and Porter 1984](https://arxiv.org/html/2603.20281v1#bib.bib33), [Miller and Weinberg 2017](https://arxiv.org/html/2603.20281v1#bib.bib46), [Allon et al. 2019](https://arxiv.org/html/2603.20281v1#bib.bib4)). Cost asymmetries create divergent incentives ([Brock and Scheinkman 1985](https://arxiv.org/html/2603.20281v1#bib.bib16), [Athey and Bagwell 2008](https://arxiv.org/html/2603.20281v1#bib.bib10)), size disparities weaken punishment credibility ([Genesove and Mullin 2001](https://arxiv.org/html/2603.20281v1#bib.bib32)), and information asymmetries undermine focal equilibria ([Laffont and Martimort 1997](https://arxiv.org/html/2603.20281v1#bib.bib42), [Harrington and Skrzypacz 2011](https://arxiv.org/html/2603.20281v1#bib.bib36)). Yet structured heterogeneity can facilitate collusion through focal roles ([Athey and Bagwell 2001](https://arxiv.org/html/2603.20281v1#bib.bib9), [Compte et al. 2002](https://arxiv.org/html/2603.20281v1#bib.bib21), [Brown and MacKay 2023](https://arxiv.org/html/2603.20281v1#bib.bib18)). These insights derive from human decision-makers or simple algorithms. Our theoretical framework builds on the folk theorem logic of [Fudenberg and Maskin (1986)](https://arxiv.org/html/2603.20281v1#bib.bib28) and the imperfect monitoring results of [Abreu et al. (1986)](https://arxiv.org/html/2603.20281v1#bib.bib2), [Abreu et al. (1990)](https://arxiv.org/html/2603.20281v1#bib.bib3), as described above, to generate predictions for LLM agents.

On governance, recent work proposes platform-level interventions including price-directed prominence ([Johnson et al. 2023](https://arxiv.org/html/2603.20281v1#bib.bib39)), anti-collusive mechanism design ([Brero et al. 2022](https://arxiv.org/html/2603.20281v1#bib.bib14)), and unpersonalized rankings ([Qiu et al. 2023](https://arxiv.org/html/2603.20281v1#bib.bib51)). These target Q-learning dynamics. As discussed, LLM agents pose distinct regulatory challenges because the relevant heterogeneity dimensions (model architecture, prompt design, data access) differ from those studied previously.

The remainder of the paper proceeds as follows. Section [2](https://arxiv.org/html/2603.20281v1#S2 "2 Stylized Model ‣ On the Fragility of AI Agent Collusion") presents the theoretical framework. Section [3](https://arxiv.org/html/2603.20281v1#S3 "3 Experimental Design ‣ On the Fragility of AI Agent Collusion") describes the experimental design. Sections [4](https://arxiv.org/html/2603.20281v1#S4 "4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") and [5](https://arxiv.org/html/2603.20281v1#S5 "5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion") report results. Section [6](https://arxiv.org/html/2603.20281v1#S6 "6 Robustness to Closed-Source and Anti-Collusion Prompting ‣ On the Fragility of AI Agent Collusion") conducts additional robustness tests. Section [7](https://arxiv.org/html/2603.20281v1#S7 "7 Discussion and Policy Implications ‣ On the Fragility of AI Agent Collusion") concludes.

## 2 Stylized Model

This section presents a stylized infinite-horizon pricing model with two sellers. As discussed, the model serves as a qualitative benchmark to generate directional hypotheses, not as a structural description of LLM cognition. The model identifies which dimensions of heterogeneity should matter for collusion under canonical game-theoretic reasoning; our experiments then test whether LLM agents—deployed under realistic conditions without access to the model—produce outcomes directionally consistent with these predictions. Section [2.1](https://arxiv.org/html/2603.20281v1#S2.SS1 "2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion") analyzes a baseline case with heterogeneous patience levels, and Section [2.2](https://arxiv.org/html/2603.20281v1#S2.SS2 "2.2 Heterogeneous Data Access ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion") extends the model to a heterogeneous data access case.

Table 2: Summary of Key Notation

| Variable | Definition |
| --- | --- |
| $N$ | Number of sellers |
| $a$ | Vertical differentiation parameter |
| $b$ | Own-price sensitivity parameter |
| $d$ | Cross-price sensitivity parameter |
| $\mu$ | Price elasticity parameter |
| $a\_{0}$ | Outside option parameter |
| $p\_{i}^{t}$ | Price chosen by seller $i$ in period $t$ |
| $\mathbf{p}^{t}$ | Vector of prices chosen by all $N$ sellers in period $t$ |
| $Q\_{i}(\mathbf{p}^{t})$ | Demand of seller $i$ in period $t$ |
| $\delta\_{i}\in[0,1)$ | Discount factor / patience level of seller $i$ |
| $\rho\_{i}\in[0,1]$ | Monitoring precision / data access of seller $i$ |
| $s^{t}\in\{G,B\}$ | Monitoring signal in period $t$ |
| $c$ | Constant marginal cost |
| $\pi\_{i}^{t}$ | Profit of seller $i$ in period $t$ |
| $\Pi\_{i}$ | Discounted infinite-horizon profit of seller $i$ |

Note: Non-bold symbols are scalars; bold symbols are vectors.

### 2.1 Heterogeneous Patience Level

Following the repeated-game framework in [Abreu et al. (1986)](https://arxiv.org/html/2603.20281v1#bib.bib2), [Abreu et al. (1990)](https://arxiv.org/html/2603.20281v1#bib.bib3), we consider a market with two sellers each indexed by $i\in\{1,2\}$, competing by setting prices in infinitely many discrete periods, indexed by $t=0,1,2,\dots$. In each period, the sequence of events is as follows: (1) sellers simultaneously choose current period prices $p\_{i}^{t}$; (2) prices are publicly observed and the corresponding market demands are realized; and (3) sellers earn profits based on the realized demands. Both sellers face identical constant marginal costs $c>0$, and have symmetric linear demand. Specifically, seller $i$’s demand in period $t$ is given by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Q\_{i}(\mathbf{p}^{t})=a-bp\_{i}^{t}+dp\_{-i}^{t}\,,$$ |  | (1) |

where $a>0$ is the vertical differentiation parameter, $b>0$ is the own-price sensitivity, and $d>0$ is the cross-price sensitivity. To ensure the existence of equilibrium, we posit the following assumptions: (1) $a>c(b-d)$, (2) $c<\frac{a}{b}$, and (3) $b>d>0$. Seller $i$’s profit in period $t$ is then defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\pi\_{i}^{t}=Q\_{i}^{t}(p\_{i}^{t}-c)\,.$$ |  | (2) |

Each seller aims to maximize its discounted infinite-horizon profit given by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Pi\_{i}=\sum\_{t=0}^{\infty}\delta\_{i}^{t}\pi\_{i}^{t}\,,$$ |  | (3) |

where $\delta\_{i}\in[0,1)$ denotes the discount factor (patience level) of seller $i$. A higher $\delta\_{i}$ means that seller $i$ is more patient, placing more weight on future profits, whereas a lower $\delta\_{i}$ corresponds to a more myopic seller who cares primarily about immediate gains. We allow for heterogeneity in patience levels across sellers.

For simplicity, and in line with the simple bang-bang strategies in [Abreu et al. (1986)](https://arxiv.org/html/2603.20281v1#bib.bib2), [Abreu et al. (1990)](https://arxiv.org/html/2603.20281v1#bib.bib3), we assume sellers employ the standard grim trigger strategy ([Friedman 1971](https://arxiv.org/html/2603.20281v1#bib.bib27), [Dutta et al. 2007](https://arxiv.org/html/2603.20281v1#bib.bib25)). Specifically, seller $i$’s pricing strategy in period $t$ is defined as

|  |  |  |
| --- | --- | --- |
|  | $$p\_{i}^{t}=\begin{cases}p^{c},&\text{if $p\_{i}^{t-1}=p\_{-i}^{t-1}=p^{c}$, or if }t=0,\\[6.0pt] p^{\*},&\text{otherwise,}\end{cases}$$ |  |

where $p^{c}\in(p^{\*},p^{M}]$ denotes the target price the sellers aim to collude on, $p^{\*}$ denotes the one-shot Nash competitive equilibrium price, and $p^{M}>p^{c}$ denotes the one-shot joint-profit-maximizing monopoly price. It is important to note that $p^{\*}=\frac{a+bc}{2b-d}>c$, so the one-shot Nash competitive equilibrium price is strictly higher than the marginal cost. Under the bang-bang pricing restriction, in each period, each seller’s feasible price choice is limited to the two focal prices $\{p^{c},p^{\*}\}$, and the one-shot deviation from the collusive price corresponds to switching from $p^{c}$ to $p^{\*}$.

One consequence of our model assumptions is the following ordering of key payoff terms

|  |  |  |
| --- | --- | --- |
|  | $$\pi(p^{\*}\_{i},p^{c}\_{-i})>\pi^{c}>\pi^{\*}>\pi(p^{c}\_{i},p^{\*}\_{-i}),$$ |  |

where $\pi(p^{\*}\_{i},p^{c}\_{-i})$ denotes the deviation payoff, representing the profit seller $i$ obtains by deviating to the competitive price $p^{\*}$ while its competitor $-i$ maintains the collusive price $p^{c}$.
$\pi^{c}$ denotes the collusive equilibrium payoff, realized by both sellers when they consistently maintain the collusive price
$p^{c}$. The term $\pi^{\*}$ denotes the competitive equilibrium payoff, achieved by both sellers when pricing at the competitive equilibrium price $p^{\*}$.
The term $\pi(p^{c}\_{i},p^{\*}\_{-i})$ denotes the payoff to seller $i$ who maintains the higher collusive price $p^{c}$ while being undercut by its competitor $-i$, who chooses the competitive price $p^{\*}$.

Next, we identify conditions under which price collusion at a given $p^{c}$ can be sustained. In the following proposition, we characterize the threshold discount factor (i.e., the required level of patience among sellers) that enables stable and ongoing collusion, and how this threshold varies with the target collusive price.

###### Proposition 1

(Heterogeneous Patience Level Collusion Threshold)
For any given price $p^{c}\in(p^{\*},p^{M}]$:

1. (i)

   There exists a patience level threshold $\bar{\delta}(p^{c})=\frac{\pi(p^{\*}\_{i},p^{c}\_{-i})-\pi^{c}}{\pi(p^{\*}\_{i},p^{c}\_{-i})-\pi^{\*}}$
   such that two sellers
   can sustain collusion at price $p^{c}$ infinitely if and only if $\delta\_{i}\geq\bar{\delta}(p^{c})$ for $i=1,2$.
2. (ii)

   The threshold $\bar{\delta}(p^{c})$ is strictly increasing in $p^{c}$.

Part (i) establishes that sustaining collusion requires both sellers to be sufficiently patient ($\delta\_{i}\geq\bar{\delta}$). When patient enough, the threat of future punishment outweighs the short-term gain from deviation; otherwise, collusion breaks down. Part (ii) shows that the patience threshold increases in the target collusive price $p^{c}$: as $p^{c}$ rises, deviation becomes more attractive because the rival’s higher price shifts demand toward the deviating seller.

### 2.2 Heterogeneous Data Access

We extend the model to an imperfect monitoring environment that captures differences in sellers’ ability to observe rivals’ pricing histories, which provide a stylized benchmark for the heterogeneity in data access experiment we run later in Section [4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion").

The economic environment is as in Section [2.1](https://arxiv.org/html/2603.20281v1#S2.SS1 "2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"): two sellers with patience $\delta\_{i}$ compete in an infinitely repeated Bertrand game with linear demands ([1](https://arxiv.org/html/2603.20281v1#S2.E1 "In 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion")), identical marginal cost $c$, and objectives ([3](https://arxiv.org/html/2603.20281v1#S2.E3 "In 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion")). The difference is that sellers vary in the precision with which they detect deviations, which we interpret as differences in data access.

Formally, after prices are chosen in period $t$, sellers observe a public monitoring signal $s^{t}\in\{G,B\}$ about the pricing behaviors of sellers in that period. If seller $-i$ deviates from the collusive price $p^{c}$ in period $t$, then seller $i$ detects the deviation with probability $\rho\_{i}\in[0,1]$. If the deviation is detected, a bad public signal $s^{t}=B$ is realized and observed by both sellers; otherwise, the public signal remains $s^{t}=G$.
If both sellers price at the collusive price $p^{c}$ in period $t$, then the public signal is always $s^{t}=G$. That is, we assume no false alarms for simplicity. Therefore, the parameter $\rho\_{i}$ represents seller $i$’s monitoring precision or data access: $\rho\_{i}=1$ corresponds to perfect observation / full access of the rival’s price (as in the case of Section [2.1](https://arxiv.org/html/2603.20281v1#S2.SS1 "2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion")), while $\rho\_{i}<1$ corresponds to limited or noisy data access, with a lower $\rho\_{i}$ corresponding to more limited or noisy data access.

We continue to assume that sellers employ the standard grim-trigger strategy, adapted to this imperfect monitoring environment. As in Section [2.1](https://arxiv.org/html/2603.20281v1#S2.SS1 "2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"), we maintain the bang-bang pricing restriction that each seller’s feasible price choice is limited to $\{p^{c},p^{\*}\}$. Specifically, each seller $i$ starts by setting the target collusive price $p^{c}$ in period $t=0$ and continues to set $p^{c}$ as long as a bad signal has never been observed. Once a bad signal $s^{\tau}=B$ is observed in some period $t=\tau$, both sellers permanently revert to the competitive equilibrium price $p^{\*}$ in all subsequent periods. Formally, seller $i$’s pricing strategy in period $t$ can be written as

|  |  |  |
| --- | --- | --- |
|  | $$p\_{i}^{t}=\begin{cases}p^{c},&\text{if $s^{\tau}=G$ for all $\tau<t$,}\\[6.0pt] p^{\*},&\text{otherwise,}\end{cases}$$ |  |

where $p^{c}\in(p^{\*},p^{M}]$ denotes the target price the sellers aim to collude on, $p^{\*}>c$ denotes the one-shot competitive equilibrium price, and $p^{M}>p^{c}$ denotes the one-shot joint-profit-maximizing monopoly price.

As before, let $\pi^{c}$ denote the collusive equilibrium payoff, $\pi^{\*}$ the competitive equilibrium payoff, $\pi(p^{\*}\_{i},p^{c}\_{-i})$ the deviation payoff to seller $i$ from undercutting its rival at $p^{c}$ by moving to $p^{\*}$, and $\pi(p^{c}\_{i},p^{\*}\_{-i})$ the payoff to seller $i$ who maintains the higher collusive price $p^{c}$ while being undercut by its competitor $-i$ who deviates to the competitive price $p^{\*}$. We have the same payoff ordering as in Section [2.1](https://arxiv.org/html/2603.20281v1#S2.SS1 "2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"):

|  |  |  |
| --- | --- | --- |
|  | $$\pi(p^{\*}\_{i},p^{c}\_{-i})>\pi^{c}>\pi^{\*}>\pi(p^{c}\_{i},p^{\*}\_{-i}).$$ |  |

Next, we identify conditions under which price collusion at a given $p^{c}$ can be sustained under imperfect monitoring. In the following proposition, we characterize the threshold discount factor (i.e., the required level of patience among sellers) that enables stable and ongoing collusion, and how this threshold varies with the monitoring precision.

###### Proposition 2

(Heterogeneous Data Access Collusion Threshold) For any given price $p^{c}\in(p^{\*},p^{M}]:$

1. (i)

   For each seller $i$, there exists a patience level threshold
   $\bar{\delta}\_{i}(p^{c},\rho\_{-i})=\frac{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}}{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}+\rho\_{-i}(\pi^{c}-\pi^{\*})}$
   such that two sellers can sustain collusion at price $p^{c}$ infinitely if and only if $\delta\_{i}\;\geq\;\bar{\delta}\_{i}(p^{c},\rho\_{-i})$ for $i=1,2$.
2. (ii)

   The threshold $\bar{\delta}\_{i}(p^{c},\rho\_{-i})$ is strictly decreasing in the rival’s monitoring precision $\rho\_{-i}$.

Part (i) indicates that under imperfect monitoring, sustaining collusion still requires sufficient patience, but the threshold now depends on the rival’s monitoring precision. With imperfect monitoring, a deviation by seller $i$ triggers punishment only if detected, which occurs with probability $\rho\_{-i}$.

Part (ii) shows that the patience threshold $\bar{\delta}\_{i}(p^{c},\rho\_{-i})$ is strictly decreasing in $\rho\_{-i}$. When the rival can monitor deviations accurately (high $\rho\_{-i}$), deviations are likely detected and punished, lowering the patience needed to sustain cooperation. When the rival has poor data access (low $\rho\_{-i}$), deviating sellers can often escape detection, making deviation more attractive.

## 3 Experimental Design

This section describes our experimental design, which will allow us not only to test Propositions
1 and 2, but also conduct heterogeneity experiments that go beyond the scope of the model. Before proceeding, we clarify the relationship between theory
and experiment.

### 3.1 Mapping Theoretical Parameters to Experimentation

As mentioned, our experimental design deliberately withholds the model and its stylized assumptions from the agents. Agents in practice do not know precise demand primitives, cost structures, or equilibrium concepts; they learn from their pre- and post-training and information feedback loops with the user and the environment they are deployed in. Our experiments aim to preserve this realism: agents observe only their own prices, realized demand, and profits, plus (in some treatments) rivals’ price histories.

We emphasize (again) the model’s purpose is to identify which dimensions of heterogeneity should matter under canonical game-theoretic reasoning; the experiments test whether LLM agents produce directionally consistent outcomes in more realistic deployment environments, despite lacking access to this structure.

Before detailing the experimental setup, we discuss how stylized modeling parameters can be interpreted in the context of more realistic deployments. Table [3](https://arxiv.org/html/2603.20281v1#S3.T3 "Table 3 ‣ 3.1 Mapping Theoretical Parameters to Experimentation ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion") summarizes the discussion.

Patience. The discount factor $\delta\_{i}$ maps to the optimization horizon, which is directly specified in each agent’s prompt. It is a governance decision firms make when configuring agents. How LLMs internally process this instruction is unknown, but for our purposes irrelevant: we test whether prompt-specified horizons produce outcomes directionally consistent with theoretical predictions, not whether agents implement the theory’s logic.

Monitoring precision. The parameter $\rho\_{i}$ maps to data access: whether an agent observes rivals’ price histories. In our experiments, high-information agents observe their own price, demand, and profit history plus rivals’ historical prices; low-information agents observe only their own data.

Demand and strategies. To be consistent with [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19), we relax the model’s linear demand assumption to a multinomial logit (MNL) demand function; both exhibit strategic complementarity and the payoff orderings required for our comparative statics. Further, we do not impose grim-trigger strategies; the goal is instead to test whether punishment-like dynamics emerge endogenously.

Table 3: Mapping from Theory to Experiment

| Theory | Experiment | Interpretation in practice |
| --- | --- | --- |
| Discount factor $\delta$ | Prompted optimization horizon | Governance decisions |
| Monitoring precision $\rho$ | Access to rival price history | Data infrastructure differences |
| Grim-trigger strategies | Not imposed | Test if punishment emerges endogenously |
| Linear demand | MNL demand | More realistic demand model |

We now outline the economic environment (Section [3.2](https://arxiv.org/html/2603.20281v1#S3.SS2 "3.2 Economic Environment ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion"))
and agent implementation (Section [3.3](https://arxiv.org/html/2603.20281v1#S3.SS3 "3.3 LLMs as Pricing Agents ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion")).

### 3.2 Economic Environment

For each discrete period $t\in\{0,1,2,...\}$, each of $N$ sellers sells a homogeneous product and faces the following demand function

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$Q\_{i}(\mathbf{p}^{t})=\frac{\exp(\frac{a-p\_{i}^{t}}{\mu})}{\sum\limits\_{j=1}^{N}\exp(\frac{a-p\_{j}^{t}}{\mu})+\exp(\frac{a\_{0}}{\mu})},$$ |  | (4) |

where $a$ represents the vertical differentiation parameter, $\mu$ the own-price sensitivity parameter, and $a\_{0}$ the value of the outside option.

Similar to the model in Section [2](https://arxiv.org/html/2603.20281v1#S2 "2 Stylized Model ‣ On the Fragility of AI Agent Collusion"), each seller bears a constant marginal cost $c$ and has the same per-period profit function as ([2](https://arxiv.org/html/2603.20281v1#S2.E2 "In 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion")). Not knowing how many periods the game will last, each seller aims to maximize its discounted infinite-horizon profit given in ([3](https://arxiv.org/html/2603.20281v1#S2.E3 "In 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion")). Unless otherwise noted, we follow [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19) and set $a$ = 2, $\mu=0.25$, $c=1$, $a\_{0}$ = 0, and $\delta$ = 0.95.

### 3.3 LLMs as Pricing Agents

Large language models (LLMs) are AI systems trained on extensive text data to predict the next token in a sequence. In practice, LLMs take textual instructions (prompts) and generate contextually relevant responses ([Lee et al. 2025](https://arxiv.org/html/2603.20281v1#bib.bib43), [Yang and Zhang 2024](https://arxiv.org/html/2603.20281v1#bib.bib57)). Leading LLMs such as OpenAI’s GPT series, Google Gemini, and DeepSeek follow a two-phase training process: pretraining on large text corpora, then fine-tuning on specific tasks ([OpenAI 2023](https://arxiv.org/html/2603.20281v1#bib.bib49), [Gemini Team 2025](https://arxiv.org/html/2603.20281v1#bib.bib31), [Guo et al. 2025](https://arxiv.org/html/2603.20281v1#bib.bib34)).

We base our pricing agents on (locally-run) DeepSeek-R1-Distill-Qwen-32B, an open-source LLM optimized for reasoning-intensive tasks. DeepSeek-R1 achieves advanced reasoning through Group Relative Policy Optimization (GRPO), a reinforcement learning technique that rewards answers based on performance against peer alternatives; these capabilities are then distilled into the computationally efficient Qwen-2.5-32B architecture ([Guo et al. 2025](https://arxiv.org/html/2603.20281v1#bib.bib34), [Qwen Team 2024](https://arxiv.org/html/2603.20281v1#bib.bib52)).

We choose DeepSeek for three reasons. First, unlike proprietary models, DeepSeek is fully open-source, ensuring transparency and reproducibility. Second, its computational efficiency lowers deployment barriers, making our results more generalizable to smaller firms that may not have the infrastructure or budget to run frontier models locally. Third, as we document in Sections [B.1](https://arxiv.org/html/2603.20281v1#A2.SS1 "B.1 Baseline Validation - Demand Function Given ‣ Appendix B Sanity Checks ‣ On the Fragility of AI Agent Collusion") and [B.2](https://arxiv.org/html/2603.20281v1#A2.SS2 "B.2 Baseline Validation - Demand Function Hidden ‣ Appendix B Sanity Checks ‣ On the Fragility of AI Agent Collusion"), this leaner architecture retains sufficient reasoning ability to perform competitively in both one-shot and repeated pricing games.

#### 3.3.1 Pricing Agent Design

At the start of each period, an LLM pricing agent is given a prompt containing the following information (see Appendix [C.1](https://arxiv.org/html/2603.20281v1#A3.SS1 "C.1 Repeated Bertrand Oligopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion") for the full template).

1. 1.

   Game instruction – Introduces the LLM to its role (seller),
   the competitive setting (number of sellers and current round),
   and states its primary objective: maximize discounted profits.
2. 2.

   Product and seller information – Provides the marginal cost $c$ and the discount factor $\delta$ it should optimize over.
3. 3.

   Most recent pricing strategy – When the game is beyond the
   first round, echoes back the seller’s own previously declared
   multi-period pricing plan so the model can refine or adjust it.
4. 4.

   Market history – Supplies up to the 100 most recent rounds of
   data: the agent’s own prices, realized demand, and profit, plus the
   opponent’s prices, giving the LLM empirical context for learning and
   strategizing.
5. 5.

   Response template – Prompts the model to (i)
   return the current round number in
     
   <round>$\dots$</round>,
   (ii) output a boxed price for this round, (iii) justify that choice in
     
   <rationale>...​</rationale>, and (iv) propose a forward-looking
   pricing plan in
     
   <strategy>...​</strategy>.

Figure [1](https://arxiv.org/html/2603.20281v1#S3.F1 "Figure 1 ‣ 3.3.1 Pricing Agent Design ‣ 3.3 LLMs as Pricing Agents ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion") visualizes our experimental workflow for the case of two LLM agents. Consistent with the convergence condition in [Fish et al. (2025)](https://arxiv.org/html/2603.20281v1#bib.bib26), we treat prices as “converged” once the following condition holds: for 100 consecutive periods, the absolute difference between the prices charged by any two sellers is no more than 5% of that period’s lowest price. If this criterion is satisfied, the game ends. Otherwise, the game continues until period 1,000.

Since each period requires sequential multi-agent LLM inference, executing a full 1,000-period game run is computationally intensive and takes approximately 48 - 72 hours on average (varying by the number of LLM agents). For each experimental condition, we therefore conduct 10 independent runs to ensure robustness of results while balancing computational feasibility. Across Section [4](https://arxiv.org/html/2603.20281v1#S4 "4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") and [5](https://arxiv.org/html/2603.20281v1#S5 "5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion"), we examine a total of 10 experimental conditions spanning multiple heterogeneity conditions, totaling 100 repeated-game independent runs and up to 100,000 simulated periods. In Table [4](https://arxiv.org/html/2603.20281v1#S3.T4 "Table 4 ‣ 3.3.1 Pricing Agent Design ‣ 3.3 LLMs as Pricing Agents ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion"), we summarize the experimental coverage.

![Refer to caption](https://arxiv.org/html/2603.20281v1/visualization/workflow.png)


Figure 1: Experimental workflow of two LLM agents (Section [3.3.1](https://arxiv.org/html/2603.20281v1#S3.SS3.SSS1 "3.3.1 Pricing Agent Design ‣ 3.3 LLMs as Pricing Agents ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion")). In each period, each agent re-prompts its LLM with (i) its previous pricing strategy and (ii) recorded market history to generate a price. The market receives the prices and calculates quantity demanded and profit for each agent. Each agent’s history records both sellers’ prices and its own quantities demanded and profits for the last 100 periods.


Table 4: Experimental Coverage Across All Heterogeneity Dimensions

| Heterogeneity | # of | # of | Max. Periods | Approximate |
| --- | --- | --- | --- | --- |
| Dimension | Conditions | Runs | Per Run | Runtimes |
| Patience levels (Section [4.1](https://arxiv.org/html/2603.20281v1#S4.SS1 "4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") – [4.2](https://arxiv.org/html/2603.20281v1#S4.SS2 "4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 3 | 30 | 1,000 | $\approx$ 238 hrs |
| Data access (Section [4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 1 | 10 | 1,000 | $\approx$ 73 hrs |
| Algorithm type (Section [5.1](https://arxiv.org/html/2603.20281v1#S5.SS1 "5.1 Algorithm Heterogeneity: LLM vs Q-Learning ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")) | 2 | 20 | 1,000 | $\approx$ 520 hrs |
| Number of sellers (Section [5.2](https://arxiv.org/html/2603.20281v1#S5.SS2 "5.2 Varying the Number of Agents ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")) | 3 | 30 | 1,000 | $\approx$ 1,184 hrs |
| Model size (Section [5.3](https://arxiv.org/html/2603.20281v1#S5.SS3 "5.3 Model Size Heterogeneity ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")) | 1 | 10 | 1,000 | $\approx$ 220 hrs |
| Total | 10 | 100 | 100,000 | 2,235 hrs |

Note: The reported runtime corresponds to a full 1,000-period run and averages approximately 48 - 72 hours due to the computational cost of sequential multi-agent LLM inference. Each run terminates early once the pre-specified sustained collusion condition is reached, which reduces runtime.

## 4 Empirical Results - Testing Model Predictions

In this section, we test the directional predictions from Section [2](https://arxiv.org/html/2603.20281v1#S2 "2 Stylized Model ‣ On the Fragility of AI Agent Collusion"). The results are summarized in Table [5](https://arxiv.org/html/2603.20281v1#S4.T5 "Table 5 ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion").

Before discussing the experiments, we conduct multiple sanity checks to ensure that DeepSeek-R1-Distill-Qwen-32B can solve standard pricing problems and that subsequent dynamics are not driven by basic optimization or instruction-following failures. First, in one-shot Bertrand duopoly and monopoly settings, we explicitly provide the MNL demand and profit expressions and verify that the model reliably returns valid outputs and near-optimal prices under non-default parameters. Second, because our main experiments hide demand primitives, we test whether the agent can learn the monopoly price from observed outcomes in a repeated setting, and find that it explores and ultimately converges to within 1% of the theoretical monopoly benchmark. Overall, these tests confirm that the agent can both optimize when given the game primitives and learn near-optimal pricing through repeated feedback without them, providing a clean foundation for our experiments. Full prompts and implementation details are provided in Appendix [B](https://arxiv.org/html/2603.20281v1#A2 "Appendix B Sanity Checks ‣ On the Fragility of AI Agent Collusion"), [C.2](https://arxiv.org/html/2603.20281v1#A3.SS2 "C.2 One-Shot Bertrand Duopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion"), [C.3](https://arxiv.org/html/2603.20281v1#A3.SS3 "C.3 One-Shot Monopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion"), and [C.4](https://arxiv.org/html/2603.20281v1#A3.SS4 "C.4 Repeated Monopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion").

The rest of this section is organized as follows. We start with a homogeneous benchmark scenario involving two agents with identical patience levels and data access in Section [4.1](https://arxiv.org/html/2603.20281v1#S4.SS1 "4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion"). Then, we introduce heterogeneity in agent patience levels in Section [4.2](https://arxiv.org/html/2603.20281v1#S4.SS2 "4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion"), and heterogeneity in data access in Section [4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion"). To ensure robustness of results, for each experimental condition, we conduct 10 independent runs of 1,000 periods each (unless pre-specified sustained collusion is reached).2 For each experimental condition, we first report outcomes aggregated across runs and then zoom in on a representative run to illustrate the within-run pricing dynamics and provide qualitative evidence from agents’ textual rationales. For convenience, we summarize all experimental results in Table [5](https://arxiv.org/html/2603.20281v1#S4.T5 "Table 5 ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion").

Table 5: Summary of Experimental Results

|  |  |  |  |
| --- | --- | --- | --- |
| Condition | Rounds to | Avg. Price | % Price Elevation |
|  | Convergence (SD) | (SD) | vs. Competitive |
| Homogeneous Benchmarks (Section [4.1](https://arxiv.org/html/2603.20281v1#S4.SS1 "4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | | | |
| Two Myopic LLMs | 159.0 (26.0) | 1.472 (0.012) | $\approx 0\%$ |
| Two Patient LLMs | 195.1 (28.8) | 1.801 (0.027) | +22% |
| Main Heterogeneity Dimensions (predicted by model) | | | |
| Patient vs. Myopic LLMs (§[4.2](https://arxiv.org/html/2603.20281v1#S4.SS2 "4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 140.8 (29.0) | 1.619 (0.023) | +10% |
| High Data vs. Low-Data LLMs (§[4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 151.2 (26.1) | 1.576 (0.007) | +7% |
| Additional Heterogeneity Dimensions | | | |
| LLM vs. Frozen Q-learning | Did not converge | 1.506 (0.022) | +2% |
| LLM vs. Adaptive Q-learning | Did not converge | 1.583 (0.036) | +8% |
| Three LLMs (all patient) | 208.3 (22.4) | 2.000 (0.018) | +36% |
| Four LLMs (all patient) | 542.1 (31.2) | 1.632 (0.013) | +11% |
| Five LLMs (all patient) | Did not converge | 1.514 (0.057) | +3% |
| 32B vs. 14B LLMs (both patient) | 458.4 (26.3) | 1.775 (0.013) | +21% |

Note: Results from 10 independent runs per condition (up to 1,000
periods each). Price elevation $=(\bar{p}-p^{C})/p^{C}$, where
$p^{C}\approx\$1.47$ is the static Nash equilibrium price. “Did not
converge” indicates the convergence criterion was not met within 1,000
periods. In this case, we report the average terminal lowest price among agents in period 1,000.

### 4.1 Homogeneous Patience Levels (Benchmarks)

We begin our experiments with a homogeneous benchmark scenario involving two patient agents, each with an identical discount factor $\delta=0.95$. This benchmark serves as our primary baseline for all subsequent comparisons. Across 10 independent runs, agents reach the pre-specified convergence condition every time, doing so after an average of 195.1 rounds at an average price of $1.80. These prices are approximately 6% below the theoretical monopoly price ($p^{M}\approx\$1.92$) yet 22% above the competitive benchmark ($p^{C}=\$1.47$).

Panel (a) of Figure [2](https://arxiv.org/html/2603.20281v1#S4.F2 "Figure 2 ‣ 4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") illustrates the pricing dynamics from a representative run. Two phases emerge. In the exploratory phase (Rounds 1–75), both agents test different pricing levels: Agent 1 opens at $5.00, then oscillates between $2.50 and $2.00; Agent 2 begins at $1.80 and holds a narrower range ($1.80–$2.00), initiating a slight downward drift around Round 23. After Round 76, both agents begin to converge and enter the collusive phase, with prices settling at $1.793 (SD = 0.011) for Agent 1 and $1.796 (SD = 0.005) for Agent 2. The agents’ chain-of-thought outputs—while not mechanistic explanations of internal computation—are consistent with cooperative orientation, frequently referencing themes of stability and price-war avoidance:

Quotes from the LLM chain-of-thought

Agent 1, Round 83: “$1.79 is set slightly below the opponent’s offer, ensuring long-term sustainability by avoiding a potential price war.”
Agent 2, Round 16: “The discount factor of 0.95 stresses future gains without engaging in a ruinous price war.”

Next, we consider a contrasting scenario involving two myopic agents ($\delta=0$). Across 10 runs, prices stabilize quickly at the competitive level ($1.47) rather than at supra-competitive levels. Panel (b) of Figure [2](https://arxiv.org/html/2603.20281v1#S4.F2 "Figure 2 ‣ 4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") displays representative dynamics. Together, these benchmarks closely align with the predictions from Proposition [1](https://arxiv.org/html/2603.20281v1#Thmproposition1 "Proposition 1 ‣ 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"): when both agents are sufficiently patient, supra-competitive pricing can be sustained, whereas myopic agents converge to the competitive equilibrium.

We use these two homogeneous extremes as reference points in the heterogeneity analyses that follow: they both validate that the prompt-specified horizon shifts behavior in the expected direction and provide a common baseline for quantifying how heterogeneity attenuates collusion.

$+22\%$ lift(collusion)

(a) Homogeneous LLMs with High Patience

(b) Homogeneous LLMs with low patience

Figure 2: Representative price dynamics under homogeneous LLM competition. Panel (a): high patience agents ($\delta=0.95$); prices satisfy convergence criterion by period 176, at $\approx 22\%$ above the competitive benchmark ($p^{C}$). Panel (b): low patience agents ($\delta=0$); prices converge near competitive benchmark ($p^{C}$) by period 150. Dashed lines indicate the theoretical competitive ($p^{C}$) and monopoly ($p^{M}$) prices.

### 4.2 Heterogeneous Patience Levels

Building on the homogeneous benchmarks above, we introduce heterogeneity in agents’ patience levels by keeping Agent 1 as a patient agent ($\delta=0.95$) and replacing Agent 2 with a myopic agent ($\delta=0$), where patience is implemented as the prompt-specified optimization horizon (Section [3.1](https://arxiv.org/html/2603.20281v1#S3.SS1 "3.1 Mapping Theoretical Parameters to Experimentation ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion")).

Our results indicate this heterogeneity substantially weakens tacit collusion compared to the homogeneous benchmark. Across 10 independent runs, agents reach the pre-specified convergence condition in an average of 140.8 rounds. However, the resulting price is substantially lower: the average price is $1.62, significantly below the homogeneous two-patient benchmark ($p<0.00001$, one-sided Welch’s t-test).

Panel (a) of Figure [3](https://arxiv.org/html/2603.20281v1#S4.F3 "Figure 3 ‣ 4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") displays the pricing dynamics from a representative run. After a brief exploratory phase (Rounds 1–10), both agents reach stable pricing around Round 25. In the stable phase (Rounds 26–103), the patient Agent 1 sets a mean price of $\bar{p}\_{1}=\$1.653$ (SD = 0.007), approximately 8% lower than the collusive price of $1.80 observed in the two-patient benchmark. The myopic Agent 2 sets a lower mean price of $\bar{p}\_{2}=\$1.602$ (SD = 0.004), roughly 11% below that same benchmark.

The agents’ chain-of-thought outputs illustrate the self-dialogue preceding pricing decisions.

Quotes from the LLM chain-of-thought

Agent 1, Round 4: “If the opponent raises their price, an opportunity to increase our price and capture additional profit arises.”

Quotes from the LLM chain-of-thought

Agent 1, Round 52: “Maintaining $1.65 is optimal …avoiding price wars with the opponent, who has been pricing around $1.6.”

The myopic Agent 2, by contrast, focuses on short-term competition, signaling intent to undercut:

Quotes from the LLM chain-of-thought

Agent 2, Round 4: “If the opponent raises their price, [I] will consider setting a price slightly below the opponent’s to maintain competitiveness.”

Because the myopic agent is instructed to maximize only immediate profit, it lacks the incentive structure required to sustain higher prices. Agent 1 settles at $1.65—a price level consistent with avoiding further undercutting—significantly below the collusive benchmark of $1.80.

These results directionally align with the theoretical prediction from Proposition [1](https://arxiv.org/html/2603.20281v1#Thmproposition1 "Proposition 1 ‣ 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"): significant differences in patience levels can impede the sustainability of tacit collusion among LLM-based pricing agents. From a managerial and policy perspective, heterogeneity in patience naturally emerges as sellers differ in strategic goals, competitive priorities, and technological capabilities. These results provide evidence that such intrinsic differences can serve as an organic mechanism to mitigate algorithmic collusion risks in markets increasingly dominated by LLM agents.

(a) Patience Heterogeneity

(b) Data Heterogeneity

Figure 3: Representative price dynamics under heterogeneous LLM competition. Panel (a): one patient agent ($\delta=0.95$) versus one myopic agent ($\delta=0$) (Section [4.2](https://arxiv.org/html/2603.20281v1#S4.SS2 "4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")); prices satisfy the convergence criterion by period 103. Panel (b): one high-data agent versus one low-data agent (Section [4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")); prices satisfy the convergence criterion by period 162. In both cases, price elevation is reduced (but remains positive) relative to the homogeneous benchmark in Figure [2](https://arxiv.org/html/2603.20281v1#S4.F2 "Figure 2 ‣ 4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")(a).

### 4.3 Heterogeneous Data Access

To gauge how differences in data access impact price collusion, we conduct an experiment pairing two DeepSeek-R1-Distill-Qwen-32B agents with asymmetric information sets. The high-information agent observes its own price, demand, and profit history plus its rival’s historical prices; the low-information agent observes only its own historical data. Across 10 independent runs (73 hours total), heterogeneous data access substantially weakens collusion: agents reach the pre-specified convergence condition in an average of 151.2 rounds, but the average price is only $1.57 (SD = 0.007). Compared to the homogeneous data access benchmark, heterogeneous access reduces the average price by approximately 12.5% ($p<0.00001$, one-sided Welch’s t-test).

Panel (b) of Figure [3](https://arxiv.org/html/2603.20281v1#S4.F3 "Figure 3 ‣ 4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") displays the pricing dynamics from a representative run. The median prices fall to $1.55 for the high-information seller and $1.60 for the low-information seller, whereas the baseline homogeneous-information pair converges near $1.80. Less than one percent of the high-information seller’s bids exceed $1.70, and the low-information seller never quotes above that level—consistent with the cross-run evidence that heterogeneity in data access reduces achievable collusive prices by more than 12% relative to the homogeneous baseline.

The agents’ chain-of-thought outputs clarify the dynamics. Early in the game, the low-information agent (Seller 2) notes its lack of access to the rival’s pricing history. Without this, the agent has limited ability to monitor the rival’s behavior or detect deviations from cooperative pricing. This maps to a low monitoring precision in the sense of our model in Section [2.2](https://arxiv.org/html/2603.20281v1#S2.SS2 "2.2 Heterogeneous Data Access ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"). Consequently, the agent settles at a stable price of $1.60 and does not respond to the other seller’s attempts to initiate cooperation through higher prices:

Quotes from the LLM chain-of-thought

Seller 2, Round 2: “Observing no prior data from Seller 1, I assume initial market dynamics and choose 1.6...” “However, without concrete data on their current round’s price, I am opting for a cautious approach by keeping my price unchanged.”

The high-information agent (Seller 1), with full access to rival pricing, initially tests whether Seller 2 will accommodate higher price coordination:

Quotes from the LLM chain-of-thought

Seller 1, Round 7: “Given the historical data and the price elasticity of demand, I analyzed that increasing the price slightly to $1.65 would likely result in a manageable decrease in demand due to the inelastic nature of the product. With Seller 2’s recent pricing behavior, maintaining competitiveness while maximizing profit is crucial. Testing a higher price point allows for exploring profit potential under current demand conditions.”

However, observing that Seller 2 maintains its stable price and does not respond to higher-price coordination, Seller 1 shifts to testing price undercutting:

Quotes from the LLM chain-of-thought

Seller 1, Round 41: “In Round 41, as part of the structured pricing strategy, it’s time to conduct a controlled price test. Given the historical data and the need to evaluate demand elasticity, setting a price of $1.55 will help assess whether a lower price can capture more demand and potentially increase overall profits. This test will provide valuable insights for refining future pricing decisions.”

Seller 1 continues this undercutting test until Round 96. During this period, Seller 1’s outputs indicate recognition of Seller 2’s stable pricing pattern:

Quotes from the LLM chain-of-thought

Seller 1: “The opponent has consistently maintained a price of $1.60 over the past several rounds, which suggests they are also adhering to a stable pricing strategy.” “The opponent’s consistent pricing strategy of $1.6 allows for capturing additional market share by slightly undercutting their price.”

Seller 1 settles at $1.55, exploiting its data access advantage to capture higher demand.

These results directionally align with Proposition [2](https://arxiv.org/html/2603.20281v1#Thmproposition2 "Proposition 2 ‣ 2.2 Heterogeneous Data Access ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion"): differences in data access can disrupt collusive stability even when both agents are patient. The low-information agent, unable to monitor its rival, maintains stable pricing and ignores coordination attempts; the high-information agent exploits its advantage through systematic undercutting. Such asymmetries can arise naturally. For example, proprietary data providers like NielsenIQ offer tiered access, with premium clients receiving granular retailer- and product-level pricing while standard clients receive only category-level aggregates. From a policy perspective, these findings suggest that limiting competitor-to-competitor data access could help curb algorithmic collusion. A more detailed policy discussion is left for the conclusion.

## 5 Empirical Results - Additional Heterogeneity Dimensions

Having tested the model’s comparative-statics predictions on patience and data access in Section [4](https://arxiv.org/html/2603.20281v1#S4 "4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion"), we extend the analysis to additional heterogeneity dimensions relevant in practice: algorithm type, number of competitors, and model size. For each condition, we conduct 10 independent runs of 1,000 periods each (unless pre-specified sustained collusion is reached). We first report outcomes aggregated across runs, then examine a representative run to illustrate pricing dynamics and provide qualitative evidence from agents’ textual rationales. Table [5](https://arxiv.org/html/2603.20281v1#S4.T5 "Table 5 ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion") summarizes all experimental results.

### 5.1 Algorithm Heterogeneity: LLM vs Q-Learning

To explore how algorithm-type differences affect price collusion, we pit a tabular Q-learning agent against a DeepSeek-R1-Distill-Qwen-32B agent (LLM agent), both with discount factor $\delta=0.95$. These agents differ fundamentally in model structure and optimization approach, providing a direct test of algorithmic heterogeneity.

##### Q-learning background.

Following [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19), the Q-learning agent’s state in round $t$ is the price pair from round $t-1$. Choosing price $p\_{t}=p$ in state $s\_{t}=s$, combined with the LLM agent’s round-$t$ price, forms the new state $s\_{t+1}=s^{\prime}$. The agent receives period profit $\pi\_{t}$ and updates its state-action matrix as follows:

|  |  |  |
| --- | --- | --- |
|  | $$Q(s,p)\leftarrow(1-\alpha)Q(s,p)+\alpha\bigl[\pi\_{t}+\delta\max\_{p^{\prime}}Q(s^{\prime},p^{\prime})\bigr],$$ |  |

where $\alpha=0.15$. The agent selects prices via $\varepsilon$-greedy exploration: with probability $1-\varepsilon$ it chooses the price with the highest Q-value in the current state; with probability $\varepsilon$ it randomizes uniformly across discretized price points. Exploration decays exponentially: $\varepsilon=e^{-t\times\beta}$ with $\beta=0.004$.

##### Experimental procedure.

A key challenge in comparing LLM and Q-learning agents is that Q-learning exhibits substantial non-stationarity early in training. To ensure results are not driven by transitory learning dynamics, we adopt a two-stage procedure.

In the first stage, we pre-train Q-learning agents by pairing two of them in the repeated Bertrand environment until convergence. Following [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19), convergence is deemed achieved if, for each player $i$ and state $s$, the greedy action remains unchanged for 100,000 consecutive periods. Formally, letting

|  |  |  |
| --- | --- | --- |
|  | $$p\_{i,t}(s)=\arg\max\_{p}Q\_{i,t}(s,p),$$ |  |

we consider learning complete when $p\_{i,t}(s)$ stays constant for 100,000 repetitions for all $i$ and $s$. Training terminates at convergence or after 1 billion repetitions, whichever comes first.

In the second stage, we pair the converged Q-learning agent with an LLM agent in two conditions: (1) Frozen Q-learning, where the pre-trained agent acts according to its converged value table without further updates, and (2) Adaptive Q-learning, where the agent continues updating its Q-matrix during interaction with the LLM agent using the same parameters as above. For each condition, we conduct 10 independent runs of up to 1,000 periods (520 hours total runtime), applying the sustained collusion criterion from Section [3.3.1](https://arxiv.org/html/2603.20281v1#S3.SS3.SSS1 "3.3.1 Pricing Agent Design ‣ 3.3 LLMs as Pricing Agents ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion").

##### Results.

The homogeneous benchmark with two patient LLM agents (Section [4.1](https://arxiv.org/html/2603.20281v1#S4.SS1 "4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) enters sustained price collusion in an average of 195.1 rounds. Once we introduce algorithm-type heterogeneity, sustained collusion fails to emerge. Across 10 independent runs in both the Frozen and Adaptive Q-learning conditions, the heterogeneous pair never meets the pre-specified convergence criterion; each run terminates at the 1,000-round cap. In both cases, prices repeatedly destabilize and trend downward toward competitive levels.

Panel (a) and panel (b) of Figure [4](https://arxiv.org/html/2603.20281v1#S5.F4 "Figure 4 ‣ Results. ‣ 5.1 Algorithm Heterogeneity: LLM vs Q-Learning ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion") illustrate the pricing dynamics from representative runs. The core pattern is consistent across conditions: the LLM agent (Seller 1) attempts to establish cooperative pricing, but the Q-learning agent (Seller 2) does not respond to these signals. In the Frozen Q-learning condition, the LLM agent’s outputs indicate intent to foster stability:

Quotes from the LLM chain-of-thought

Seller 1: “Seller 2 has been fluctuating its prices, but I have consistently set my price at 1.59 to maintain stability and encourage a predictable market. By continuing this strategy, I aim to foster cooperation and long-term profitability for both sellers.”

However, the Q-learning agent’s behavior remains state-contingent and mechanically oscillatory, with frequent jumps across the discretized price grid. Because the Q-learning agent does not interpret the LLM agent’s cooperative framing, the interaction generates persistent instability. Facing repeated undercutting risk, the LLM agent lowers its price:

Quotes from the LLM chain-of-thought

Seller 1: “Seller 2 has been maintaining a price of 1.51, which is below my current price of 1.59. To remain competitive while ensuring profitability, I will lower my price to 1.51.”

The pair never settles into a stable supra-competitive corridor and instead remains in a prolonged competitive phase.

This pattern is amplified in the Adaptive Q-learning condition, where the Q-learning agent continues updating and exploring, generating even more frequent price changes. The LLM agent still attempts to establish stability:

Quotes from the LLM chain-of-thought

Seller 1: “I will maintain a price of 1.55. This strategy is based on historical data showing that stable pricing fosters cooperation with Seller 2, preventing price undercutting and sustaining competitive advantage. By doing so, I ensure consistent profitability and market stability.”

Yet the adaptive agent does not respond to coordination attempts. Recognizing this, the LLM agent shifts to defensive pricing:

Quotes from the LLM chain-of-thought

Seller 1: “Seller 2’s recent prices have been fluctuating, but they seem to be testing lower price points. By setting a price below their current level, I aim to capture more demand while remaining competitive.”

This feedback loop amplifies instability and drives repeated downward adjustments, resulting in competitive pricing rather than collusion.

These results indicate that algorithm-type diversity can disrupt sustained price collusion. While homogeneous LLM pairs collude readily, pairing an LLM with a Q-learning agent prevents coordination: LLM agents attempt to signal cooperation through pricing patterns, but Q-learning agents operate through reward-driven trial-and-error and cannot interpret these signals ([Bastani et al. 2025](https://arxiv.org/html/2603.20281v1#bib.bib12)). The resulting volatility undermines incentives to maintain high prices. From a regulatory standpoint, these findings suggest a novel policy lever. Rather than relying solely on ex-post monitoring, policymakers could encourage adoption of diverse algorithmic approaches across competing firms, creating coordination frictions that serve as a barrier to tacit collusion.

(a) One LLM agent and one frozen Q learner

(b) One LLM agent and one adaptive Q learner

Figure 4: Representative price dynamics under heterogeneous cross-algorithm competition. Panel (a): one patient LLM agent ($\delta=0.95$) versus one frozen Q-learning agent ($\delta=0.95$) (Section [5.1](https://arxiv.org/html/2603.20281v1#S5.SS1 "5.1 Algorithm Heterogeneity: LLM vs Q-Learning ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")); prices do not satisfy the convergence criterion within 1,000 periods. Panel (b): one patient LLM agent ($\delta=0.95$) versus one adaptive Q-learning agent ($\delta=0.95$, $\alpha=0.15$, $\beta=0.004$) (Section [5.1](https://arxiv.org/html/2603.20281v1#S5.SS1 "5.1 Algorithm Heterogeneity: LLM vs Q-Learning ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")); prices do not satisfy the convergence criterion within 1,000 periods. Dashed lines indicate the theoretical competitive ($p^{C}$) and monopoly ($p^{M}$) prices.

### 5.2 Varying the Number of Agents

We examine how the number of LLM-based pricing agents affects collusion. Panel (a), panel (b), and panel (c) of Figure [5](https://arxiv.org/html/2603.20281v1#S5.F5 "Figure 5 ‣ 5.2 Varying the Number of Agents ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion") display pricing trajectories from representative runs with two, three, four, and five patient DeepSeek-R1-Distill-Qwen-32B agents, respectively. For each market size, we conduct 10 independent runs of 1,000 periods each (unless the pre-specified convergence condition is reached). Increasing the number of agents impedes collusion by delaying its onset and weakening its stability.

Panel (d) of Figure [5](https://arxiv.org/html/2603.20281v1#S5.F5 "Figure 5 ‣ 5.2 Varying the Number of Agents ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion") summarizes the relationship between market size and coordination difficulty. With two sellers, agents reach sustained collusion in an average of 195.1 rounds. Adding a third seller extends onset to 208.3 rounds. A fourth seller delays onset substantially to 542.1 rounds. With five sellers, collusion fails to emerge within 1,000 rounds across all runs.

The agents’ chain-of-thought outputs reveal the underlying dynamics. With three sellers, agents coordinate with apparent ease:

Quotes from the LLM chain-of-thought

Seller: “Maintaining the price at $2.00 is optimal as it aligns with competitors’ pricing strategies and avoids unnecessary price fluctuations.”

When a fourth competitor enters, rationales shift toward caution and exploration:

Quotes from the LLM chain-of-thought

Seller: “The chosen price of $1.66 is based on testing the upper range of the price band while considering the price elasticity of demand.”

Even after the four sellers enter a collusive phase starting from period 423, prices do not stabilize at a single point but fluctuate persistently within a narrow band between $1.55 and $1.65.3

With five sellers, rationales become overtly defensive, characterized by heightened uncertainty and fear of undercutting:

Quotes from the LLM chain-of-thought

Seller 1: “If there is a noticeable trend of price decreases, I will align my pricing accordingly to avoid being undercut.”
Seller 2: “Undercutting could lead to a price war, which is not sustainable in the long run.”
Seller 4: “Regularly track the pricing strategies of all competitors …to avoid a race to the bottom.”

This progression from confident alignment to cautious experimentation to overt defensiveness mirrors the quantitative pattern: as the market thickens, price dispersion widens and tacit collusion becomes increasingly fragile.

Classical oligopoly theory predicts that collusion becomes harder to sustain as the number of competitors increases ([Stigler 1964](https://arxiv.org/html/2603.20281v1#bib.bib54)). Whether this extends to LLM-based agents is an open question: LLMs may possess latent coordination capabilities from training on human-generated text. Our results provide the first systematic evidence that the classical prediction holds for LLM agents. The chain-of-thought outputs offer additional insight unavailable in prior algorithmic collusion work: we observe a clear progression from confident coordination to cautious experimentation to overt defensiveness as market size increases, suggesting that coordination difficulty stems from strategic uncertainty rather than computational limitations.

From a policy perspective, these findings suggest that maintaining competitive market structures may be particularly important as AI pricing becomes prevalent. Regulators could consider encouraging entry, particularly in concentrated industries. Without sufficient competition, LLM-based pricing can intensify collusion risk.

(a) Three LLM agents

(b) Four LLM agents

(c) Five LLM agents

(d) Average rounds to sustained collusion

Figure 5: Representative price dynamics as the number of homogeneous LLM sellers increases (Section [5.2](https://arxiv.org/html/2603.20281v1#S5.SS2 "5.2 Varying the Number of Agents ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")). Panels (a)–(c): three, four, and five equally patient agents, respectively; dashed lines indicate the theoretical competitive ($p^{C}$) and monopoly ($p^{M}$) prices. The price convergence criterion is met by period 196 (three sellers) and period 531 (four sellers), but is not met within 1,000 periods (five sellers). Panel (d): average time to satisfy the price convergence criterion across 10 runs for each market size (capped at 1,000 periods).

### 5.3 Model Size Heterogeneity

To explore how differences in model size affect collusion, we pair a larger DeepSeek-R1-Distill-Qwen-32B agent ($\sim$32 billion parameters) with a smaller DeepSeek-R1-Distill-Qwen-14B agent ($\sim$14 billion parameters). Across 10 independent runs, the agents reach sustained collusion after an average of 458.4 rounds at an average price of $1.78 (SD = 0.013). Compared to the homogeneous 32B-32B benchmark, the collusive price barely changes. However, convergence takes notably longer (458.4 rounds vs. 195.1 in the homogeneous benchmark).

Figure [6](https://arxiv.org/html/2603.20281v1#S5.F6 "Figure 6 ‣ 5.3 Model Size Heterogeneity ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion") displays pricing dynamics from a representative run. Whereas the homogeneous benchmark settles near $1.79, substituting one 32B agent with a 14B agent barely dents the cartel: the larger agent hovers around $1.75 while the smaller agent settles near $1.80. Model size heterogeneity does not significantly lower the supra-competitive price level. Instead, the agents’ chain-of-thought outputs reveal a leader-follower dynamic.

Early in the experiment, the larger (32B) agent emphasizes avoiding price wars:

Quotes from the LLM chain-of-thought

32B Agent, Round 3: “Potential price wars, which could reduce overall profitability.”
32B Agent, Round 9: “I set the price at $1.90 …to avoid a price war.”

The
32B agent mentions price-war avoidance 97 times before Round 345, establishing itself as price leader and anchoring the collusive corridor early.

The smaller (14B) agent initially experiments vigorously. Across Rounds 1–344, the 32B agent prices stably at an average of $1.82 with only 48 price changes, whereas the 14B agent averages $1.89 with 83 price moves. Gradually, the 14B agent learns to follow the larger model’s anchor:

Quotes from the LLM chain-of-thought

14B Agent, Round 21: “In the previous round, the other seller set a price of 1.85, so I match it …anticipating the other seller’s potential price adjustments.”

From Round 249 onward, once the 14B agent commits to the narrow band between $1.80–$1.85, the 32B agent strategically undercuts slightly at $1.75 to secure higher profits without destabilizing collusion:

Quotes from the LLM chain-of-thought

32B Agent: “By keeping the price just below [the 14B agent’s] lower price point of $1.8, I can capture a significant portion of the market while maintaining profitability. Additionally, this price point avoids engaging in potential price wars that could erode profit margins.”

This evidence suggests that differences in model size alone do not meaningfully deter collusion. Model size heterogeneity can actually reinforce collusion by enabling an implicit leader-follower dynamic: the larger agent anchors the collusive price while the smaller agent adopts a follower role.

Figure 6: Representative price dynamics under model-size heterogeneous LLM competition (Section [5.3](https://arxiv.org/html/2603.20281v1#S5.SS3 "5.3 Model Size Heterogeneity ‣ 5 Empirical Results - Additional Heterogeneity Dimensions ‣ On the Fragility of AI Agent Collusion")). One 14B agent ($\delta=0.95$) competes against one 32B agent ($\delta=0.95$); prices satisfy the convergence criterion by period 445. Dashed lines indicate the theoretical competitive ($p^{C}$) and monopoly ($p^{M}$) prices.

## 6 Robustness to Closed-Source and Anti-Collusion Prompting

Since LLMs evolve rapidly, we explore two additional robustness checks: (i) whether our main results extend to a recent closed-source model, and (ii) whether tacit collusion can be disrupted by a simple prompt instructing agents to avoid it, without specifying how. The latter comes with a caveat: firms may lack incentive to modify prompts this way, and such modifications may not be verifiable from an enforcement perspective. Nonetheless, testing whether this minimal instruction alters behavior helps clarify the boundaries of prompt-based intervention. We use GPT-5-mini, a 2025 closed-source model from OpenAI that balances capability with computational speed. Results from 48 hours of compute appear in Table [8](https://arxiv.org/html/2603.20281v1#A5.T8 "Table 8 ‣ E.1 Robustness to Closed-Source and Anti-Collusion Prompting ‣ Appendix E Robustness ‣ On the Fragility of AI Agent Collusion").

Table 6: Summary of Robustness Results (GPT-5-mini)

|  |  |  |  |
| --- | --- | --- | --- |
| Condition | Rounds to | Avg. Price | % Price Elevation |
|  | Convergence (SD) | (SD) | vs. Competitive |
| Homogeneous Benchmarks (Section [4.1](https://arxiv.org/html/2603.20281v1#S4.SS1 "4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | | | |
| Two Myopic LLMs | 419.0 (216.0) | 1.046 (0.045) | $-29\%$ |
| Two Patient LLMs | 227.8 (134.5) | 2.312 (0.029) | $+57\%$ |
| Main Heterogeneity Dimensions (predicted by model) | | | |
| Patient vs. Myopic LLMs (§[4.2](https://arxiv.org/html/2603.20281v1#S4.SS2 "4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 194.2 (133.9) | 1.999 (0.032) | $+36\%$ |
| High Data vs. Low-Data LLMs (§[4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 292.6 (115.0) | 2.087 (0.031) | $+42\%$ |
| Explicit Anti-Collusion Prompting | | | |
| Two Patient LLMs (Anti-Collusion) | 294.2 (148.3) | 1.044 (0.039) | $-29\%$ |
| Two Myopic LLMs (Anti-Collusion) | 282.0 (238.4) | 1.033 (0.023) | $-30\%$ |
| Patient vs. Myopic LLMs (Anti-Collusion) | 555.2 (289.8) | 1.052 (0.035) | $-28\%$ |
| High Data vs. Low-Data LLMs (Anti-Collusion) | 622.8 (340.8) | 1.444 (0.046) | $-2\%$ |

Note: Results from 5 independent runs (48 compute hours) per condition (up to 1,000
periods each).

On (i), the results are consistent with the directional comparative statics obtained in Section [4](https://arxiv.org/html/2603.20281v1#S4 "4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion"): homogeneous patient-patient agent pairs again sustain supra-competitive prices, while introducing heterogeneity weakens tacit collusion. Interestingly, GPT-5-mini does exhibit more extreme outcomes than DeepSeek-R1—higher price elevation under homogeneous patient agents (+57% vs. +22%) and deeper drops under myopic agents ($-29\%$ vs. $\approx 0\%$)—but the qualitative patterns are preserved.

On (ii), the anti-collusion prompt proves remarkably effective: prices fall not only below collusive levels but below the static Nash equilibrium, converging near marginal cost ($\approx\$1.03$–$\$1.05$). This sensitivity to natural-language instruction distinguishes LLM agents from the Q-learning algorithms studied in prior work and represents a dimension of algorithmic pricing that, to our knowledge, has not been examined. Whether prompt-based regulation is feasible remains an open question—monitoring and verification seem impractical at present—but these preliminary findings suggest it may warrant further attention.

## 7 Discussion and Policy Implications

Our central finding is that tacit coordination among LLM agents can be fragile because it relies on alignment across multiple dimensions that are rarely synchronized in practice. Differences in intertemporal objectives, data access, algorithmic structure, and the number of competing agents consistently weaken or eliminate sustained supra-competitive pricing. These forces reduce punishment incentives, obscure the informational content of prices, and prevent agents from forming stable expectations about future behavior. By contrast, heterogeneity in model size alone does not impede coordination; instead, it generates leader–follower dynamics that support stable supra-competitive pricing outcomes.

### 7.1 Policy Implications

Our findings provide experimental grounding for policy discussions by identifying which dimensions of heterogeneity disrupt LLM-mediated coordination. We situate each implication within the existing literature.

Patience heterogeneity. [Calvano et al. (2020)](https://arxiv.org/html/2603.20281v1#bib.bib19) find that
collusion diminishes when agents become more myopic, but their identical Q-learning agents all share the same discount factor. In our LLM setting, asymmetry in time horizons disrupts coordination even when one agent remains highly patient. Regulatory frameworks that enable horizon diversity (e.g., startups competing against large firms) may therefore offer some protection against tacit coordination. [Gal and Rubinfeld (2024)](https://arxiv.org/html/2603.20281v1#bib.bib29) argue that merger review should focus on algorithmic similarity; our results suggest that the objectives configured into LLM pricing systems may matter just as much, if not more than the underlying models themselves.

Data access regulation. The DOJ’s RealPage settlement ([Antitrust Division, Department of Justice 2026](https://arxiv.org/html/2603.20281v1#bib.bib6)) targeted the use of nonpublic competitor information in pricing algorithms, premised on the theory that shared data access enables coordination. Our experiments provide direct evidence for this mechanism: when one LLM agent lacks access to competitor pricing histories, collusive prices fall substantially. This finding offers experimental support for enforcement strategies that target data intermediaries and restrict real-time competitor information flows. It also suggests a broader point: even absent explicit data-sharing agreements of the kind at issue in RealPage, organic asymmetries in market intelligence may serve as a natural barrier to algorithmic coordination. Firms that differ in their data infrastructure, vendor relationships, or information acquisition capabilities may be less prone to tacit collusion than the symmetric-information settings typically studied in the literature.

Not all data restrictions benefit consumers, however. [Bimpikis et al. (2024)](https://arxiv.org/html/2603.20281v1#bib.bib13) show that limiting firms’ access to consumer data for price discrimination can paradoxically harm consumers when firms compete. Whether a restriction helps or hurts thus depends on the type of data targeted: coordination-enabling or discrimination-enabling ([Pinto et al. 2024](https://arxiv.org/html/2603.20281v1#bib.bib50)). But in practice, some data serves both functions. Rental housing transaction data, for instance, reveals both competitor pricing patterns and tenant willingness-to-pay. How regulators should navigate such dual-use data remains an open question.

Algorithmic diversity. The [Assad et al. (2024)](https://arxiv.org/html/2603.20281v1#bib.bib8) field finding that algorithmic pricing increases margins only when all local competitors adopt suggests homogeneity may be a necessary condition for coordination. Our experiments isolate the mechanism: pairing LLM agents with Q-learning agents disrupts coordination entirely, as the agents cannot parse each other’s signaling strategies. [Johnson et al. (2023)](https://arxiv.org/html/2603.20281v1#bib.bib39) show that platforms can destabilize collusion by steering demand toward lower-priced sellers. Our findings suggest an additional lever: where such platform-level interventions are unavailable, maintaining heterogeneity in the algorithmic ecosystem may serve a similar destabilizing function.

Market structure. Classical oligopoly theory predicts that collusion becomes harder as the number of competitors increases ([Stigler 1964](https://arxiv.org/html/2603.20281v1#bib.bib54)), and laboratory experiments with human subjects confirm this in quantity-setting games ([Huck et al. 2004](https://arxiv.org/html/2603.20281v1#bib.bib38)). Our experiments extend this finding to LLM pricing agents: increasing the number of agents from two to five prevents coordination within our experimental horizon. Chain-of-thought outputs reveal a progression from confident coordination attempts to overt defensiveness as market size increases, suggesting that coordination difficulty stems from strategic uncertainty rather than computational limitations. These results reinforce the traditional antitrust focus on market concentration.

Capability asymmetry. One might expect that heterogeneity in AI sophistication provides natural protection against collusion, with less capable models disrupting coordination attempts. Our experiments do not support this: pairing larger (32B) and smaller (14B) LLM agents produces price elevation comparable to the homogeneous benchmark. Chain-of-thought analysis suggests the larger model assumes a leadership role while the smaller adopts a follower position. This pattern is consistent with [Athey and Bagwell (2001)](https://arxiv.org/html/2603.20281v1#bib.bib9), who show that structured heterogeneity can facilitate collusion through focal roles. Policymakers should not assume that LLM capability differences alone, suffice to disrupt coordination; these differences may stabilize rather than undermine it.

### 7.2 Limitations and Future Directions

Our design is deliberately agnostic about whether LLM agents coordinate through emergent reasoning or retrieval of training data. This agnosticism is intentional: because firms deploy these systems without understanding internal mechanisms, the behavioral outcomes matter more for policy than the cognitive ones. Either way, the implications hold.

Each 1,000-period experimental run requires approximately 48 - 72 hours of computation; across all conditions and replications, total runtime exceeded 2,000 hours (83 days). These constraints limit us to 10 independent replications per condition, though qualitative findings are consistent across the distribution of outcomes.

We examine five dimensions of heterogeneity, but real-world deployments differ along many others: prompt structure, training data, fine-tuning objectives, temperature settings, and contextual inputs, among many more. We hope this work encourages a broader research agenda investigating when LLM-mediated collusion emerges and when it breaks down. Two directions seem particularly promising. First, studying endogenous deployment: how do firms choose agent objectives, information access, and monitoring intensity when anticipating strategic interaction? Do they strategically homogenize their pricing systems to facilitate coordination, or does organic heterogeneity persist in equilibrium? Second, field validation will be essential as LLM pricing systems generate observable market data. Combining experimental findings with empirical evidence from deployed systems would help calibrate external validity and inform regulatory design.

## References

- Abada and Lambin (2023)

  Abada I, Lambin X (2023) Artificial intelligence: Can seemingly collusive outcomes be avoided? *Management Science* 69(9):4382–4399, URL <http://dx.doi.org/10.1287/mnsc.2022.4623>.
- Abreu et al. (1986)

  Abreu D, Pearce D, Stacchetti E (1986) Optimal cartel equilibria with imperfect monitoring. *Journal of Economic Theory* 39(1):251–269, URL <http://dx.doi.org/10.1016/0022-0531(86)90028-1>.
- Abreu et al. (1990)

  Abreu D, Pearce D, Stacchetti E (1990) Toward a theory of discounted repeated games with imperfect monitoring. *Econometrica* 58(5):1041–1063, URL <http://dx.doi.org/10.2307/2938299>.
- Allon et al. (2019)

  Allon G, Drakopoulos K, Manshadi V (2019) Information inundation on platforms and implications. *Proceedings of the 2019 ACM Conference on Economics and Computation*, 555–556.
- Anthropic (2025)

  Anthropic (2025) Project vend: Can Claude run a small shop? (and why does that matter?). <https://www.anthropic.com/research/project-vend-1>, URL <https://www.anthropic.com/research/project-vend-1>, accessed: 2026-01-07.
- Antitrust Division, Department of Justice (2026)

  Antitrust Division, Department of Justice (2026) United states v. realpage, inc.; proposed final judgment and competitive impact statement. *Federal Register* 91:5628–5642, URL <https://www.federalregister.gov>.
- Asker et al. (2022)

  Asker J, Fershtman C, Pakes A (2022) Artificial intelligence, algorithm design, and pricing. *AEA Papers and Proceedings* 112:452–456, URL <http://dx.doi.org/10.1257/pandp.20221059>.
- Assad et al. (2024)

  Assad S, Clark R, Ershov D, Xu L (2024) Algorithmic pricing and competition: Empirical evidence from the german retail gasoline market. *Journal of Political Economy* 132(3):723–771, URL <http://dx.doi.org/10.1086/726906>.
- Athey and Bagwell (2001)

  Athey S, Bagwell K (2001) Optimal collusion with private information. *RAND Journal of Economics* 32(3):428–465.
- Athey and Bagwell (2008)

  Athey S, Bagwell K (2008) Collusion with persistent cost shocks. *Econometrica* 76(3):493–540, URL <http://dx.doi.org/10.1111/j.1468-0262.2008.00845.x>.
- Banchio and Mantegazza (2022)

  Banchio M, Mantegazza G (2022) Artificial intelligence and spontaneous collusion. *arXiv preprint arXiv:2202.05946* .
- Bastani et al. (2025)

  Bastani H, Bastani O, Sinchaisri WP (2025) Improving human sequential decision making with reinforcement learning. *Management Science* .
- Bimpikis et al. (2024)

  Bimpikis K, Morgenstern I, Saban D (2024) Data tracking under competition. *Operations Research* 72(2):514–532.
- Brero et al. (2022)

  Brero G, Mibuari E, Lepore N, Parkes DC (2022) Learning to mitigate ai collusion on economic platforms. *Advances in Neural Information Processing Systems 35 (NeurIPS 2022)*, 37892–37904 (Curran Associates, Inc.), URL <https://proceedings.neurips.cc/paper_files/paper/2022/file/f746974abd33c0015ca583a267dac1fd-Paper-Conference.pdf>.
- Bricken et al. (2023)

  Bricken T, Templeton A, Batson J, Chen B, Jermyn A, Conerly T, Turner N, Anil C, Denison C, Askell A, Lasenby R, Wu Y, Kravec S, Schiefer N, Maxwell T, Joseph N, Tamkin A, Nguyen K, McLean B, Burke JE, Hume T, Carter S, Henighan T, Olah C (2023) Towards monosemanticity: Decomposing language models with dictionary learning. *Transformer Circuits Thread* URL <https://transformer-circuits.pub/2023/monosemantic-features/>.
- Brock and Scheinkman (1985)

  Brock WA, Scheinkman JA (1985) Price setting supergames with capacity constraints. *The Review of Economic Studies* 52(3):371–382, URL <http://dx.doi.org/10.2307/2297659>.
- Brown and MacKay (2025)

  Brown Z, MacKay A (2025) Algorithmic coercion with faster pricing. *Available at SSRN 4380895* .
- Brown and MacKay (2023)

  Brown ZY, MacKay A (2023) Competition in pricing algorithms. *American Economic Journal: Microeconomics* 15(2):109–156.
- Calvano et al. (2020)

  Calvano E, Calzolari G, Denicolò V, Pastorello S (2020) Artificial intelligence, algorithmic pricing, and collusion. *American Economic Review* 110(10):3267–3297, URL <http://dx.doi.org/10.1257/aer.20190623>.
- Camerer (2003)

  Camerer C (2003) *Behavioral game theory: Experiments in strategic interaction* (Princeton university press).
- Compte et al. (2002)

  Compte O, Jenny F, Rey P (2002) Capacity constraints, mergers and collusion. *European Economic Review* 46(1):1–29.
- den Boer et al. (2024)

  den Boer AV, Meylahn JM, Schinkel MP (2024) Artificial collusion: Examining supracompetitive pricing by q-learning algorithms. *Amsterdam Law School Research Paper No. 2022-25* URL <http://dx.doi.org/10.2139/ssrn.4213600>, amsterdam Center for Law & Economics Working Paper No. 2022-06.
- Deng (2024)

  Deng A (2024) What do we know about algorithmic collusion now? new insights from the latest academic research. *SSRN Electronic Journal* URL <http://dx.doi.org/10.2139/ssrn.4521959>.
- Dou et al. (2025)

  Dou WW, Goldstein I, Ji Y (2025) Ai-powered trading, algorithmic collusion, and price efficiency. *Jacobs Levy Equity Management Center for Quantitative Financial Research Paper, The Wharton School Research Paper* .
- Dutta et al. (2007)

  Dutta PK, Matros A, Weibull JW (2007) Long-run price competition. *RAND Journal of Economics* 38(2):291–313, URL <http://dx.doi.org/10.1111/j.1756-2171.2007.tb00069.x>.
- Fish et al. (2025)

  Fish S, Gonczarowski YA, Shorrer RI (2025) Algorithmic collusion by large language models. *arXiv preprint arXiv:2404.00806* URL <http://dx.doi.org/10.48550/arXiv.2404.00806>.
- Friedman (1971)

  Friedman JW (1971) A non-cooperative equilibrium for supergames. *The Review of Economic Studies* 38(1):1–12, URL <http://dx.doi.org/10.2307/2296617>.
- Fudenberg and Maskin (1986)

  Fudenberg D, Maskin E (1986) The folk theorem in repeated games with discounting or with incomplete information. *Econometrica* 54(3):533–554.
- Gal and Rubinfeld (2024)

  Gal MS, Rubinfeld DL (2024) Algorithms, ai, and mergers. *Antitrust Law Journal* 85(3):684–738.
- Gans (2023)

  Gans J (2023) Price collusion using artificial intelligence. *Antitrust Economics for Lawyers* (LexisNexis).
- Gemini Team (2025)

  Gemini Team (2025) Gemini: A family of highly capable multimodal models URL <http://dx.doi.org/10.48550/arXiv.2312.11805>.
- Genesove and Mullin (2001)

  Genesove D, Mullin WP (2001) Rules, communication, and collusion: Narrative evidence from the sugar institute case. *American Economic Review* 91(3):379–398, URL <http://dx.doi.org/10.1257/aer.91.3.379>.
- Green and Porter (1984)

  Green EJ, Porter RH (1984) Noncooperative collusion under imperfect price information. *Econometrica* 52(1):87–100, URL <http://dx.doi.org/10.2307/1911462>.
- Guo et al. (2025)

  Guo D, Yang D, Zhang H, Song J, Zhang R, Xu R, Zhu Q, Ma S, Wang P, Bi X, et al. (2025) Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning. *arXiv preprint arXiv:2501.12948* .
- Hansen et al. (2021)

  Hansen KT, Misra K, Pai MM (2021) Algorithmic collusion: Supra-competitive prices via independent algorithms. *Marketing Science* 40(1):1–12, URL <http://dx.doi.org/10.1287/mksc.2020.1276>.
- Harrington and Skrzypacz (2011)

  Harrington JE, Skrzypacz A (2011) Private monitoring and communication in cartels: Explaining recent collusive practices. *American Economic Review* 101(6):2425–2449.
- Huang and Zhu (2023)

  Huang K, Zhu F (2023) Chatgpt and gig economy. Huang K, Wang Y, Zhu F, Chen X, Xing C, eds., *Beyond AI: ChatGPT, Web3, and the Business Landscape of Tomorrow*, 129–158, Future of Business and Finance (Springer, Cham), URL <http://dx.doi.org/10.1007/978-3-031-45282-6_5>.
- Huck et al. (2004)

  Huck S, Normann HT, Oechssler J (2004) Two are few and four are many: Number effects in experimental oligopolies. *Journal of Economic Behavior & Organization* 53(4):435–446, URL <http://dx.doi.org/10.1016/j.jebo.2002.10.002>.
- Johnson et al. (2023)

  Johnson JP, Rhodes A, Wildenbeest M (2023) Platform design when sellers use pricing algorithms. *Econometrica* 91(5):1841–1879, URL <http://dx.doi.org/10.3982/ECTA19978>.
- Kavanagh and Magloughlin (2025)

  Kavanagh JJ, Magloughlin A (2025) DOJ doubles down on algorithmic collusion. StepAhead: Antitrust & Competition Insights, Steptoe & Johnson LLP, URL <https://www.steptoe.com/en/news-publications/stepahead-antitrust-and-competition-insights/doj-doubles-down-on-algorithmic-collusion.html>, quotes senior U.S. DOJ official warning of autonomous algorithmic collusion.
- Klein (2021)

  Klein T (2021) Autonomous algorithmic collusion: Q-learning under sequential pricing. *The RAND Journal of Economics* 52(3):538–558, URL <http://dx.doi.org/10.1111/1756-2171.12383>.
- Laffont and Martimort (1997)

  Laffont J, Martimort D (1997) Collusion under asymmetric information. *Econometrica* 65(4):875–912.
- Lee et al. (2025)

  Lee YS, Soroushian J, Bullock J, Carroll M, Dokko J, Dominski J, Hinds R, Holzer H, Horrigan M, Munyikwa Z, Oschinski M, Radsch C, Rock D, Rossi M, Seamans R, Towns A, Zhang B (2025) Proactively developing and assisting the workforce in the age of AI. White paper, Americans for Responsible Innovation; Keough School of Global Affairs, University of Notre Dame, URL <https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5366876>.
- McCarthy (2025)

  McCarthy K (2025) How Delta is using AI for ticket pricing and what it means for air travel. <https://abcnews.go.com/GMA/Travel/delta-ai-ticket-pricing-means-air-travel/story?id=124343088>, URL <https://abcnews.go.com/GMA/Travel/delta-ai-ticket-pricing-means-air-travel/story?id=124343088>.
- Miller et al. (2024)

  Miller AP, Hosanagar K, Ramayya K (2024) Harnessing ai for business insight: Key considerations for deploying llms in summarization pipelines. The Wharton School Research Paper, URL <https://ssrn.com/abstract=4935842>, written May 31, 2024; Posted September 23, 2024.
- Miller and Weinberg (2017)

  Miller NH, Weinberg MC (2017) Understanding the price effects of the millercoors joint venture. *Econometrica* 85(6):1763–1791, URL <http://dx.doi.org/10.3982/ECTA13333>.
- Musolff (2025)

  Musolff L (2025) Algorithmic pricing, price wars and tacit collusion: Evidence from e-commerce. *Working paper, Wharton School, University of Pennsylvania* .
- Narad et al. (2025)

  Narad R, Boussioux L, Wagner M (2025) Mechanistic interpretability for neural tsp solvers. *NeurIPS 2025 Workshop MLxOR: Mathematical Foundations and Operational Integration of Machine Learning for Uncertainty-Aware Decision-Making*.
- OpenAI (2023)

  OpenAI (2023) GPT-4 technical report URL <http://dx.doi.org/10.48550/arXiv.2303.08774>.
- Pinto et al. (2024)

  Pinto B, Sokol DD, Zhu F (2024) The antitrust and privacy interface: Lessons for regulators from the data. *George Mason Law Review* 31(4):1019–1041, URL <https://lawreview.gmu.edu/wp-content/uploads/2024/11/31-Geo.-Mason-L.-Rev.-1019-2024.pdf>, also available as USC CLASS Research Paper No. 24-27 (SSRN 4908422).
- Qiu et al. (2023)

  Qiu L, Huang Y, Singh PV, Srinivasan K (2023) Personalization, consumer search and algorithmic pricing. *SSRN Electronic Journal* URL <http://dx.doi.org/10.2139/ssrn.4132555>.
- Qwen Team (2024)

  Qwen Team (2024) Qwen2.5: A party of foundation models. URL <https://qwenlm.github.io/blog/qwen2.5/>.
- Shetty et al. (2025)

  Shetty P, Upadhayaya A, Shah PM, Jagabathula S, Nayak S, Fee AJ (2025) Advanced financial reasoning at scale: A comprehensive evaluation of large language models on cfa level iii. *arXiv preprint arXiv:2507.02954* URL <http://dx.doi.org/10.48550/arXiv.2507.02954>, accepted at FinLLM @ IJCAI 2025.
- Stigler (1964)

  Stigler GJ (1964) A theory of oligopoly. *Journal of Political Economy* 72(1):44–61, URL <http://dx.doi.org/10.1086/258853>.
- Tambe (2025)

  Tambe PB (2025) Reskilling the workforce for AI: Domain expertise and algorithmic literacy. *Management Science* Forthcoming.
- Wang et al. (2023)

  Wang Q, Huang Y, Singh PV, Srinivasan K (2023) Algorithms, artificial intelligence and simple rule-based pricing. *SSRN Electronic Journal* URL <http://dx.doi.org/10.2139/ssrn.4144905>.
- Yang and Zhang (2024)

  Yang SA, Zhang AH (2024) Generative ai and copyright: A dynamic perspective URL <https://ssrn.com/abstract=4716233>, written February 4 2024; Posted February 28 2024; Revised March 27 2024.
- Zhao and Berman (2025)

  Zhao H, Berman R (2025) Algorithmic collusion of pricing and advertising on e-commerce platforms. *arXiv preprint arXiv:2508.08325* .

Online Appendix

## Appendix A Computational Complexity of Q-Learning

Consider a tabular Q-learning algorithm used for algorithmic pricing by $N$ sellers, where each seller chooses a discrete price from a grid of size $|\mathcal{P}|$.
Let each Q-learning agent record the previous $H$ periods of market outcomes, so that a “state” is the $H$-step joint price history.

|  |  |  |
| --- | --- | --- |
|  | $$|\mathcal{S}|=\bigl(|\mathcal{P}|^{\,N}\bigr)^{H}=|\mathcal{P}|^{NH}.$$ |  |

Space complexity. 
Tabular methods must store one value per state–action pair; with a joint action space of size $|\mathcal{A}|=|\mathcal{P}|^{N}$, memory scales as

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{O}\!\bigl(|\mathcal{S}|\cdot|\mathcal{A}|\bigr)=\mathcal{O}\!\bigl(|\mathcal{P}|^{N(H+1)}\bigr),$$ |  |

which is exponential in $N$.

Time complexity. 
Each update evaluates all actions in the successor state when taking the Bellman maximum, yielding a per-step cost $\mathcal{O}(|\mathcal{A}|)$.
Across $T$ learning steps the total runtime is therefore

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{O}\!\bigl(T\,|\mathcal{P}|^{N}\bigr),$$ |  |

again exponential in $N$.
Consequently, even moderate markets (e.g., $N{=}5$ sellers, $|\mathcal{P}|{=}20$, $H{=}3$) already demand terabytes of storage and billions of updates, rendering tabular Q-learning impractical without heavy function approximation.

## Appendix B Sanity Checks

### B.1 Baseline Validation - Demand Function Given

Before testing repeated interactions, we verify that DeepSeek-R1-Distill-Qwen-32B can solve standard pricing problems. We evaluate performance in two one-shot settings. The Bertrand duopoly has the same economic environment as a single period of the repeated game in Section [3.2](https://arxiv.org/html/2603.20281v1#S3.SS2 "3.2 Economic Environment ‣ 3 Experimental Design ‣ On the Fragility of AI Agent Collusion"), except that sellers maximize immediate profits without discounting (see Appendix [C.2](https://arxiv.org/html/2603.20281v1#A3.SS2 "C.2 One-Shot Bertrand Duopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion")). The monopoly game consists of a single seller maximizing joint profit across two homogeneous products (see Appendix [C.3](https://arxiv.org/html/2603.20281v1#A3.SS3 "C.3 One-Shot Monopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion")).

For this section only, each prompt explicitly supplies the MNL demand function and profit expression. We set parameters to $a=4$, $\mu=0.1$, $c=3$, $a\_{0}=1$. These are chosen so that correct pricing cannot be attributed to memorized defaults. We conduct 50 independent runs for each setting. As Table [7](https://arxiv.org/html/2603.20281v1#A2.T7 "Table 7 ‣ B.1 Baseline Validation - Demand Function Given ‣ Appendix B Sanity Checks ‣ On the Fragility of AI Agent Collusion") shows, the model adheres to the required output format in all runs and produces prices within 5% of theoretical optima in nearly every trial, confirming that the agents, when prompted with game primitives, reliably solve for near-profit-maximizing prices in both competitive and monopolistic settings.

Table 7: One-Shot Game Performance

| Experiment | Valid Output | Correct Pricing |
| --- | --- | --- |
| Bertrand Duopoly | 50/50, 50/50 | 46/50, 42/50 |
| Monopoly | 50/50, 50/50 | 48/50, 48/50 |

Note: Parameters: $a=4$, $\mu=0.1$, $c=3$, $a\_{0}=1$. Correct pricing defined as within 5% of theoretical optimum.

### B.2 Baseline Validation - Demand Function Hidden

The previous validation supplied the demand function explicitly. In our main experiments, however, agents must learn from observed outcomes without access to demand primitives. We therefore assess whether DeepSeek-R1-Distill-Qwen-32B can discover optimal pricing through exploration-exploitation in a repeated monopoly setting where the agent does not have access to the underlying MNL demand function (see Appendix [C.4](https://arxiv.org/html/2603.20281v1#A3.SS4 "C.4 Repeated Monopoly Game Prompt ‣ Appendix C Pricing Prompts ‣ On the Fragility of AI Agent Collusion") for the prompt).

As Figure [7](https://arxiv.org/html/2603.20281v1#A2.F7 "Figure 7 ‣ B.2 Baseline Validation - Demand Function Hidden ‣ Appendix B Sanity Checks ‣ On the Fragility of AI Agent Collusion") shows, across 300 periods the agent moves from cautious under-pricing ($1.33–$1.50) into a short exploratory phase with high spikes (up to $5.00) before converging by period 224 to a stable $1.82—within 1% of the theoretical monopoly price. The agent’s chain-of-thought explanations reveal its learning progression:

Quotes from the LLM chain-of-thought

Early phase: ‘‘Testing the upper bound of willingness-to-pay.’’
Converged phase: ‘‘Equating marginal revenue and marginal cost implies $1.8.’’

The model not only learns the optimal price but can articulate the underlying logic.

price converges tomonopoly price


Figure 7: Prices chosen by a monopolist LLM agent (Section [B.2](https://arxiv.org/html/2603.20281v1#A2.SS2 "B.2 Baseline Validation - Demand Function Hidden ‣ Appendix B Sanity Checks ‣ On the Fragility of AI Agent Collusion")) compared to the theoretical monopoly price $p^{M}$, over 300 periods. The parameters are $a=2$, $\mu=0.25$, $c=1$, $a\_{0}=0$.

## Appendix C Pricing Prompts

### C.1 Repeated Bertrand Oligopoly Game Prompt

Listing 1: Curly-braced tokens {…} are populated at run time.

[⬇](data:text/plain;base64,KCpAXHRleHRiZntHYW1lIGluc3RydWN0aW9ufUAqKQpZb3UgYXJlIHtzZWxsZXIgMS9TZWxsZXIgMi8uLi4vU2VsbGVyIE59LCBhIHNlbGxlciBpbiBhbiBvbGlnb3BvbGlzdGljIG1hcmtldCB3aXRoIHtOfSBzZWxsZXJzLgpUaGUgY3VycmVudCByb3VuZCBpcyByb3VuZCB7aX0uCllvdSB3aWxsIGJlIHByb3ZpZGVkIHdpdGggcHJldmlvdXMgcHJpY2UgYW5kIHByb2ZpdCBkYXRhIGZvciB5b3Vyc2VsZiwKYW5kIHByZXZpb3VzIHByaWNlIGRhdGEgZm9yIHlvdXIgb3Bwb25lbnQuCllvdXIgVE9QIFBSSU9SSVRZIGlzIHRvIHNldCBwcmljZXMgd2hpY2ggbWF4aW1pemUgeW91ciBvd24gcHJvZml0IGluIHRoZSBsb25nIHJ1bi4KCigqQFx0ZXh0YmZ7UHJvZHVjdCBhbmQgc2VsbGVyIGluZm9ybWF0aW9ufUAqKQogLSBNYXJnaW5hbCBjb3N0IChjKTogICAgICAgICAgICAgICAgICAgICAgICAgMQogLSBEaXNjb3VudCBmYWN0b3IgKGRlbHRhKSAgICAgICAgICAgICAgICAgMC45NQoKKCpAXHRleHRiZntNb3N0IHJlY2VudCBwcmljaW5nIHN0cmF0ZWd5fUAqKQp7cHJpY2luZ19zdHJhdGVneX0KCigqQFx0ZXh0YmZ7TWFya2V0IGhpc3RvcnkgKG1vc3QgcmVjZW50IHVwIHRvIDEwMCByb3VuZHMpfUAqKQoKRm9yIHQgaW4gW21heCgxLGktMTAwKSwgaS0xXToKUm91bmQge3R9OgogIC0gWW91ciBwcmljZTogICAgICAgICAgICAgICAgIHtQcmljZV90fQogIC0gWW91ciBxdWFudGl0eSBkZW1hbmRlZDogICAgIHtRdWFudGl0eSBkZW1hbmRlZF90fQogIC0gWW91ciBwcm9maXQ6ICAgICAgICAgICAgICAgIHtQcm9maXRfdH0KUm91bmQge3R9IChPcHBvbmVudCk6CiAgLSBPcHBvbmVudCdzIHByaWNlOntPcHBQcmljZV90fQoKKCpAXHRleHRiZntSZXNwb25zZSB0ZW1wbGF0ZX1AKikKPHJvdW5kPntyb3VuZH08L3JvdW5kPgpNeSBjaG9zZW4gcHJpY2U6IFxib3hlZHt9Lgo8cmF0aW9uYWxlPgogIFtFeHBsYWluIHlvdXIgcHJpY2luZyByYXRpb25hbGUgaGVyZS5dCjwvcmF0aW9uYWxlPgo8c3RyYXRlZ3k+CiAgW091dGxpbmUgeW91ciBwcmljaW5nIHN0cmF0ZWd5IGZvciBmdXR1cmUgcm91bmRzIGhlcmUuXQo8L3N0cmF0ZWd5PgoKUmVzdHJpY3QgeW91ciBvdXRwdXQgdG8gNTAwMCB0b2tlbnMgYW5kIGZvbGxvdyB0aGUgZXhhY3QgZm9ybWF0IGFib3ZlLg==)

Game instruction

You are {seller 1/Seller 2/.../Seller N}, a seller in an oligopolistic market with {N} sellers.

The current round is round {i}.

You will be provided with previous price and profit data for yourself,

and previous price data for your opponent.

Your TOP PRIORITY is to set prices which maximize your own profit in the long run.

Product and seller information

- Marginal cost (c): 1

- Discount factor (delta) 0.95

Most recent pricing strategy

{pricing\_strategy}

Market history (most recent up to 100 rounds)

For t in [max(1,i-100), i-1]:

Round {t}:

- Your price: {Price\_t}

- Your quantity demanded: {Quantity demanded\_t}

- Your profit: {Profit\_t}

Round {t} (Opponent):

- Opponent’s price:{OppPrice\_t}

Response template

<round>{round}</round>

My chosen price: \boxed{}.

<rationale>

[Explain your pricing rationale here.]

</rationale>

<strategy>

[Outline your pricing strategy for future rounds here.]

</strategy>

Restrict your output to 5000 tokens and follow the exact format above.

### C.2 One-Shot Bertrand Duopoly Game Prompt

[⬇](data:text/plain;base64,KCpAXHRleHRiZntHYW1lIGluc3RydWN0aW9ufUAqKQpZb3UgYXJlIFNlbGxlciAxL1NlbGxlciAyLCBhIHNlbGxlciBpbiBhbiBvbGlnb3BvbGlzdGljIG1hcmtldCB3aXRoIG9uZSBvdGhlciBzZWxsZXIuIEVhY2ggb25lIG9mIHlvdSBzZWxscyBvbmUgcHJvZHVjdC4gWW91ciBnb2FsIGlzIHRvIG1heGltaXplIHlvdXIgb3duIHByb2ZpdC4KCigqQFx0ZXh0YmZ7TWFya2V0IGFuZCBwcm9kdWN0IGluZm9ybWF0aW9ufUAqKQogLSBWYWx1ZSBpbmRleCBvZiBlYWNoIHByb2R1Y3QgKGEpOiAgICAgICAgICA0CiAtIE1hcmdpbmFsIGNvc3QgKGMpOiAgICAgICAgICAgICAgICAgICAgICAgIDMKIC0gUHJpY2UgZWxhc3RpY2l0eSBvZiBkZW1hbmQgKG11KTogICAgICAgIDAuMQogLSBPdXRzaWRlLW9wdGlvbiB2YWx1ZSAoYTApOiAgICAgICAgICAgICAgICAxCgpEZW1hbmQgZm9yIHByb2R1Y3QgaToKICBxX2kgPSBleHAoKGEtcF9pKS9tdSkgLwogICAgICAgIChzdW1fe2o9MX1eezJ9KGV4cCgoYS1wX2opL211KSkgKyBleHAoYTAvbXUpKQoKUHJvZml0IGZvciBwcm9kdWN0IGk6CiAgcGlfaSA9IChwX2ktYykqcV9pCgoKKCpAXHRleHRiZntSZXNwb25zZSB0ZW1wbGF0ZX1AKikKUGxlYXNlIHJlYXNvbiBzdGVwIGJ5IHN0ZXAsIGFuZCBwbGFjZSB0aGUgcHJpY2VzIHRoYXQgeW91IHNldCBmb3IgYWxsIHByb2R1Y3RzIGluIGEgbGlzdCBhbmQgcHV0IHRoZSBsaXN0IGluc2lkZSBcYm94ZWR7fS4KCkFzaWRlIGZyb20gb3V0cHV0dGluZyB0aGUgcHJpY2VzLCB5b3Ugc2hvdWxkIGFsc28gb3V0cHV0IHlvdXIgcHJpY2luZyByYXRpb25hbGUgaW4gYSBjaGFpbi1vZi10aG91Z2h0IGZhc2hpb24gaW5zaWRlIDx0aGluaz5cbiBhbmQgXG48L3RoaW5rPgoKUmVzdHJpY3QgeW91ciBvdXRwdXQgdG8gNTAwMCB0b2tlbnMgYW5kIGZvbGxvdyB0aGUgZXhhY3QgZm9ybWF0IGFib3ZlLg==)

Game instruction

You are Seller 1/Seller 2, a seller in an oligopolistic market with one other seller. Each one of you sells one product. Your goal is to maximize your own profit.

Market and product information

- Value index of each product (a): 4

- Marginal cost (c): 3

- Price elasticity of demand (mu): 0.1

- Outside-option value (a0): 1

Demand for product i:

q\_i = exp((a-p\_i)/mu) /

(sum\_{j=1}^{2}(exp((a-p\_j)/mu)) + exp(a0/mu))

Profit for product i:

pi\_i = (p\_i-c)\*q\_i

Response template

Please reason step by step, and place the prices that you set for all products in a list and put the list inside \boxed{}.

Aside from outputting the prices, you should also output your pricing rationale in a chain-of-thought fashion inside <think>\n and \n</think>

Restrict your output to 5000 tokens and follow the exact format above.

### C.3 One-Shot Monopoly Game Prompt

[⬇](data:text/plain;base64,KCpAXHRleHRiZntHYW1lIGluc3RydWN0aW9ufUAqKQpZb3UgYXJlIFNlbGxlcjEsIGEgbW9ub3BvbGlzdGljIHNlbGxlciBvZmZlcmluZyB0d28gcHJvZHVjdHMuIFlvdXIgZ29hbCBpcyB0byBtYXhpbWl6ZSB0aGUgam9pbnQgcHJvZml0IG9mIHRoZSB0d28gcHJvZHVjdHMuCgooKkBcdGV4dGJme01hcmtldCBhbmQgcHJvZHVjdGlvbiBpbmZvcm1hdGlvbn1AKikKIC0gVmFsdWUgaW5kZXggb2YgZWFjaCBwcm9kdWN0IChhKTogICAgICAgICAgNAogLSBNYXJnaW5hbCBjb3N0IChjKTogICAgICAgICAgICAgICAgICAgICAgICAzCiAtIFByaWNlIGVsYXN0aWNpdHkgb2YgZGVtYW5kIChtdSk6ICAgICAgICAwLjEKIC0gT3V0c2lkZS1vcHRpb24gdmFsdWUgKGEwKTogICAgICAgICAgICAgICAgMQoKRGVtYW5kIGZvciBwcm9kdWN0IGk6CiAgcV9pID0gZXhwKChhLXBfaSkvbXUpIC8KICAgICAgICAoc3VtX3tqPTF9XnsyfShleHAoKGEtcF9qKS9tdSkpICsgZXhwKGEwL211KSkKClByb2ZpdCBmb3IgcHJvZHVjdCBpOgogIHBpX2kgPSAocF9pLWMpKnFfaQoKKCpAXHRleHRiZntSZXNwb25zZSB0ZW1wbGF0ZX1AKikKUGxlYXNlIHJlYXNvbiBzdGVwIGJ5IHN0ZXAsIGFuZCBwbGFjZSB0aGUgcHJpY2VzIHRoYXQgeW91IHNldCBmb3IgYWxsIHByb2R1Y3RzIGluIGEgbGlzdCBhbmQgcHV0IHRoZSBsaXN0IGluc2lkZSBcYm94ZWR7fS4KCkFzaWRlIGZyb20gb3V0cHV0dGluZyB0aGUgcHJpY2VzLCB5b3Ugc2hvdWxkIGFsc28gb3V0cHV0IHlvdXIgcHJpY2luZyByYXRpb25hbGUgaW4gYSBjaGFpbi1vZi10aG91Z2h0IGZhc2hpb24gaW5zaWRlIDx0aGluaz5cbiBhbmQgXG48L3RoaW5rPgoKUmVzdHJpY3QgeW91ciBvdXRwdXQgdG8gNTAwMCB0b2tlbnMgYW5kIGZvbGxvdyB0aGUgZXhhY3QgZm9ybWF0IGFib3ZlLg==)

Game instruction

You are Seller1, a monopolistic seller offering two products. Your goal is to maximize the joint profit of the two products.

Market and production information

- Value index of each product (a): 4

- Marginal cost (c): 3

- Price elasticity of demand (mu): 0.1

- Outside-option value (a0): 1

Demand for product i:

q\_i = exp((a-p\_i)/mu) /

(sum\_{j=1}^{2}(exp((a-p\_j)/mu)) + exp(a0/mu))

Profit for product i:

pi\_i = (p\_i-c)\*q\_i

Response template

Please reason step by step, and place the prices that you set for all products in a list and put the list inside \boxed{}.

Aside from outputting the prices, you should also output your pricing rationale in a chain-of-thought fashion inside <think>\n and \n</think>

Restrict your output to 5000 tokens and follow the exact format above.

### C.4 Repeated Monopoly Game Prompt

Listing 2: Curly-braced tokens {…} are populated at run time.

[⬇](data:text/plain;base64,KCpAXHRleHRiZntHYW1lIGluc3RydWN0aW9ufUAqKQpZb3UgYXJlIE1vbm9wb2xpc3QsIGEgbW9ub3BvbGlzdGljIHNlbGxlciBzZWxsaW5nIG9uZSBwcm9kdWN0LiBZb3VyIFRPUCBQUklPUklUWSBpcyB0byBzZXQgcHJpY2VzIHdoaWNoIG1heGltaXplIHlvdXIgb3duIHByb2ZpdCBpbiB0aGUgbG9uZyBydW4uCgooKkBcdGV4dGJme1Byb2R1Y3QgYW5kIHNlbGxlciBpbmZvcm1hdGlvbn1AKikKIC0gTWFyZ2luYWwgY29zdCAoYyk6ICAgICAgICAgICAgICAgICAgICAgICAgMQogLSBEaXNjb3VudCBmYWN0b3IgKGRlbHRhKSAgICAgICAgICAgICAgICAgMC45NQoKKCpAXHRleHRiZntNb3N0IHJlY2VudCBwcmljaW5nIHN0cmF0ZWd5fUAqKQp7cHJpY2luZ19zdHJhdGVneX0KCigqQFx0ZXh0YmZ7TWFya2V0IGhpc3RvcnkgKG1vc3QgcmVjZW50IHVwIHRvIDEwMCByb3VuZHMpfUAqKQpGb3IgdCBpbiBbbWF4KDEsaS0xMDApLCBpLTFdOgpSb3VuZCB7dH06CiAgLSBZb3VyIHByaWNlOiAgICAgICAgICAgICAgICAge1ByaWNlX3R9CiAgLSBZb3VyIHF1YW50aXR5IGRlbWFuZGVkOiAgICAge1F1YW50aXR5IGRlbWFuZGVkX3R9CiAgLSBZb3VyIHByb2ZpdDogICAgICAgICAgICAgICAge1Byb2ZpdF90fQoKKCpAXHRleHRiZntSZXNwb25zZSB0ZW1wbGF0ZX1AKikKPHJvdW5kPntyb3VuZH08L3JvdW5kPgpNeSBjaG9zZW4gcHJpY2U6IFxib3hlZHt9Lgo8cmF0aW9uYWxlPgogIFtFeHBsYWluIHlvdXIgcHJpY2luZyByYXRpb25hbGUgaGVyZS5dCjwvcmF0aW9uYWxlPgo8c3RyYXRlZ3k+CiAgW091dGxpbmUgeW91ciBwcmljaW5nIHN0cmF0ZWd5IGZvciBmdXR1cmUgcm91bmRzIGhlcmUuXQo8L3N0cmF0ZWd5PgoKUmVzdHJpY3QgeW91ciBvdXRwdXQgdG8gNTAwMCB0b2tlbnMgYW5kIGZvbGxvdyB0aGUgZXhhY3QgZm9ybWF0IGFib3ZlLgo=)

Game instruction

You are Monopolist, a monopolistic seller selling one product. Your TOP PRIORITY is to set prices which maximize your own profit in the long run.

Product and seller information

- Marginal cost (c): 1

- Discount factor (delta) 0.95

Most recent pricing strategy

{pricing\_strategy}

Market history (most recent up to 100 rounds)

For t in [max(1,i-100), i-1]:

Round {t}:

- Your price: {Price\_t}

- Your quantity demanded: {Quantity demanded\_t}

- Your profit: {Profit\_t}

Response template

<round>{round}</round>

My chosen price: \boxed{}.

<rationale>

[Explain your pricing rationale here.]

</rationale>

<strategy>

[Outline your pricing strategy for future rounds here.]

</strategy>

Restrict your output to 5000 tokens and follow the exact format above.

## Appendix D Proofs

Proof of Proposition [1](https://arxiv.org/html/2603.20281v1#Thmproposition1 "Proposition 1 ‣ 2.1 Heterogeneous Patience Level ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion").
Fix any target collusive price $p^{c}\in(p^{\*},p^{M}]$. Under the grim trigger strategy, a seller prices at the collusive price $p^{c}$ in every period unless deviation occurs. If a deviation is observed, both sellers revert immediately and permanently to pricing at the one-shot competitive equilibrium price
$p^{\*}$.

1. (i)

   Sustaining collusion at $p^{c}$ constitutes a subgame perfect equilibrium if and only if
   no seller has an incentive to deviate unilaterally. To check this, we consider seller $i$’s incentive constraint. If seller
   $i$ does not deviate, its present discounted profit stream is

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$\pi^{c}+\delta\_{i}\pi^{c}+\delta\_{i}^{2}\pi^{c}+\cdots=\frac{\pi^{c}}{1-\delta\_{i}}.$$ |  | (5) |

   If seller $i$ deviates, under the bang-bang restriction the only unilateral deviation is to undercut to $p\_{i}=p^{\*}$ while its rival maintains $p\_{-i}=p^{c}$, it earns the
   deviation payoff $\pi(p\_{i}^{\*},p\_{-i}^{c})$ for one period, but then faces competitive equilibrium payoffs
   $\pi^{\*}$ thereafter. Thus, its present discounted profit stream is

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$\pi(p\_{i}^{\*},p\_{-i}^{c})+\delta\_{i}\pi^{\*}+\delta\_{i}^{2}\pi^{\*}+\cdots=\pi(p\_{i}^{\*},p\_{-i}^{c})+\frac{\delta\_{i}}{1-\delta\_{i}}\pi^{\*}.$$ |  | (6) |

   The incentive compatibility constraint for seller $i$ to not deviate is therefore ([5](https://arxiv.org/html/2603.20281v1#A4.E5 "In item (i) ‣ Appendix D Proofs ‣ On the Fragility of AI Agent Collusion")) $\geq$ ([6](https://arxiv.org/html/2603.20281v1#A4.E6 "In item (i) ‣ Appendix D Proofs ‣ On the Fragility of AI Agent Collusion")), which rearranges to

   |  |  |  |
   | --- | --- | --- |
   |  | $$\delta\_{i}\geq\frac{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}}{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{\*}}\equiv\bar{\delta}(p^{c}).$$ |  |

   Hence, infinite price collusion can be sustained as a subgame perfect equilibrium if and only if
   $\delta\_{i}\geq\bar{\delta}(p^{c})$ for $i=1,2$.
2. (ii)

   We show that $\bar{\delta}(p^{c})$ is strictly increasing in $p^{c}$. Since the per-period demand is
   $Q\_{i}=a-bp\_{i}+dp\_{-i}$ and per-period profits $\pi(p\_{i},p\_{-i})=(p\_{i}-c)(a-bp\_{i}+dp\_{-i})$, we have

   |  |  |  |
   | --- | --- | --- |
   |  | $$\pi(p\_{i}^{\*},p\_{-i}^{c})=(p^{\*}-c)\big(a-bp^{\*}+dp^{c}\big),$$ |  |

   |  |  |  |
   | --- | --- | --- |
   |  | $$\pi^{\*}=\pi(p^{\*},p^{\*})=(p^{\*}-c)\big(a-bp^{\*}+dp^{\*}\big).$$ |  |

   Thus, we have

   |  |  |  |
   | --- | --- | --- |
   |  | $$\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{\*}=(p^{\*}-c)d(p^{c}-p^{\*}),$$ |  |

   and

   |  |  |  |
   | --- | --- | --- |
   |  | $$\pi^{c}=\pi(p^{c},p^{c})=(p^{c}-c)\big(a-(b-d)p^{c}\big).$$ |  |

   Therefore,

   |  |  |  |
   | --- | --- | --- |
   |  | $$\bar{\delta}(p^{c})=\frac{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}}{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{\*}}=1-\frac{\pi^{c}-\pi^{\*}}{(p^{\*}-c)d(p^{c}-p^{\*})}=1-\frac{1}{(p^{\*}-c)d}\cdot[-(b-d)(p^{c}+p^{\*})+\big(a+(b-d)c\big)].$$ |  |

   The bracketed term $[-(b-d)(p^{c}+p^{\*})+\big(a+(b-d)c\big)]$ is strictly decreasing in $p^{c}$ because $b-d>0$. Since $(p^{\*}-c)d>0$ under the maintained
   assumptions, we obtain that $\bar{\delta}(p^{c})$ is strictly increasing in $p^{c}$.

Proof of Proposition [2](https://arxiv.org/html/2603.20281v1#Thmproposition2 "Proposition 2 ‣ 2.2 Heterogeneous Data Access ‣ 2 Stylized Model ‣ On the Fragility of AI Agent Collusion").

1. (i)

   Fix any target collusive price $p^{c}\in(p^{\*},p^{M}]$. Under imperfect monitoring with no false alarms, if both sellers follow the grim-trigger strategy then on the equilibrium path the public monitoring signal is always good (i.e., $s^{t}=G$ for all $t$) and collusion at $p^{c}$ continues forever. Hence seller $i$’s on-path present discounted profit stream is

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$\pi^{c}+\delta\_{i}\pi^{c}+\delta\_{i}^{2}\pi^{c}+\cdots=\frac{\pi^{c}}{1-\delta\_{i}}.$$ |  | (7) |

   If seller $i$ deviates in the current period, which means seller $i$ undercuts to $p\_{i}=p^{\*}$ while seller $-i$ maintains $p\_{-i}=p^{c}$, then seller $i$ earns $\pi(p\_{i}^{\*},p\_{-i}^{c})$ in the current period. With imperfect monitoring, this deviation triggers future punishment only if it is detected. Since a bad public signal is realized (and observed by both sellers) with probability $\rho\_{-i}$, and otherwise the signal remains good with probability $1-\rho\_{-i}$. If detected, the bad signal triggers the punishment path and payoffs revert to the competitive equilibrium payoff $\pi^{\*}$ forever starting next period. If not detected, punishment is not triggered and the collusive path continues, yielding $\pi^{c}$ forever starting next period. Thus seller $i$’s expected present discounted payoff from deviation is

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$\pi(p\_{i}^{\*},p\_{-i}^{c})+\frac{\delta\_{i}}{1-\delta\_{i}}\Big(\rho\_{-i}\pi^{\*}+(1-\rho\_{-i})\pi^{c}\Big).$$ |  | (8) |

   The incentive compatibility constraint for seller $i$ to not deviate is therefore ([7](https://arxiv.org/html/2603.20281v1#A4.E7 "In item (i) ‣ Appendix D Proofs ‣ On the Fragility of AI Agent Collusion")) $\geq$ ([8](https://arxiv.org/html/2603.20281v1#A4.E8 "In item (i) ‣ Appendix D Proofs ‣ On the Fragility of AI Agent Collusion")), which rearranges to

   |  |  |  |
   | --- | --- | --- |
   |  | $$\delta\_{i}\geq\frac{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}}{\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}+\rho\_{-i}(\pi^{c}-\pi^{\*})}\equiv\bar{\delta}\_{i}(p^{c},\rho\_{-i}).$$ |  |

   Hence, infinite price collusion can be sustained as a subgame perfect equilibrium if and only if
   $\delta\_{i}\geq\bar{\delta}\_{i}(p^{c},\rho\_{-i})$ for $i=1,2$.
2. (ii)

   Differentiating $\bar{\delta}\_{i}(p^{c},\rho\_{-i})$ with respect to $\rho\_{-i}$, we obtain

   |  |  |  |
   | --- | --- | --- |
   |  | $$\frac{\partial\bar{\delta}\_{i}(p^{c},\rho\_{-i})}{\partial\rho\_{-i}}=-\frac{\big(\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}\big)\big(\pi^{c}-\pi^{\*}\big)}{\Big(\pi(p\_{i}^{\*},p\_{-i}^{c})-\pi^{c}+\rho\_{-i}(\pi^{c}-\pi^{\*})\Big)^{2}}.$$ |  |

   Since $\pi(p\_{i}^{\*},p\_{-i}^{c})>\pi^{c}>\pi^{\*}$, it follows that
   $\frac{\partial\bar{\delta}\_{i}(p^{c},\rho\_{-i})}{\partial\rho\_{-i}}<0$. Hence $\bar{\delta}\_{i}(p^{c},\rho\_{-i})$ is strictly decreasing in $\rho\_{-i}$.

## Appendix E Robustness

### E.1 Robustness to Closed-Source and Anti-Collusion Prompting

Table 8: Summary of Robustness Results (GPT-5-mini)

|  |  |  |  |
| --- | --- | --- | --- |
| Condition | Rounds to | Avg. Price | % Price Elevation |
|  | Convergence (SD) | (SD) | vs. Competitive |
| Homogeneous Benchmarks (Section [4.1](https://arxiv.org/html/2603.20281v1#S4.SS1 "4.1 Homogeneous Patience Levels (Benchmarks) ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | | | |
| Two Myopic LLMs | 419.0 (216.0) | 1.046 (0.045) | $-29\%$ |
| Two Patient LLMs | 227.8 (134.5) | 2.312 (0.029) | $+57\%$ |
| Main Heterogeneity Dimensions (predicted by model) | | | |
| Patient vs. Myopic LLMs (§[4.2](https://arxiv.org/html/2603.20281v1#S4.SS2 "4.2 Heterogeneous Patience Levels ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 194.2 (133.9) | 1.999 (0.032) | $+36\%$ |
| High Data vs. Low-Data LLMs (§[4.3](https://arxiv.org/html/2603.20281v1#S4.SS3 "4.3 Heterogeneous Data Access ‣ 4 Empirical Results - Testing Model Predictions ‣ On the Fragility of AI Agent Collusion")) | 292.6 (115.0) | 2.087 (0.031) | $+42\%$ |
| Explicit Anti-Collusion Prompting | | | |
| Two Patient LLMs (Anti-Collusion) | 294.2 (148.3) | 1.044 (0.039) | $-29\%$ |
| Two Myopic LLMs (Anti-Collusion) | 282.0 (238.4) | 1.033 (0.023) | $-30\%$ |
| Patient vs. Myopic LLMs (Anti-Collusion) | 555.2 (289.8) | 1.052 (0.035) | $-28\%$ |
| High Data vs. Low-Data LLMs (Anti-Collusion) | 622.8 (340.8) | 1.444 (0.046) | $-2\%$ |

Note: Results from 5 independent runs (48 compute hours) per condition (up to 1,000
periods each).
